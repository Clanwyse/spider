"use client";
import { z } from "zod";
import { cn } from "@/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";

import { useToast } from "@/hooks/use-toast";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().min(2).max(50).email(),
});
export default function LoginForm({ className }: React.ComponentProps<"form">) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  const { toast } = useToast();
  const [processing, setProcessing] = useState(false);
  const supabase = createClient();
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setProcessing(true);

    const { error } = await supabase.auth.signInWithOtp({
      email: values.email,
      options: {
        emailRedirectTo: "http://localhost:3000/",
        shouldCreateUser: false,
      },
    });
    if (error?.message) {
      toast({
        title: "Oops, there was an error",
        description: error?.message,
      });
      return;
    }

    toast({
      title: "Magic link",
      description: "An email has been sent to the email you provided.",
    });

    router.push(`verify-otp?email=${values.email}`);
    setProcessing(false);
  }
  return (
    <Form {...form}>
      <form
        className={cn("grid items-start gap-0.5", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                {/* This is your public display name. */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full mt-2">
          {processing && (
            <Icon
              className="mr-3.5 shrink-0 animate-spin text-xl font-extrabold"
              aria-hidden="true"
              icon="solar:refresh-bold-duotone"
            />
          )}
          Submit
        </Button>
      </form>
    </Form>
  );
}
