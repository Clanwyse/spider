"use client";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
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
import { nanoid } from "nanoid";
import { useToast } from "@/hooks/use-toast";

import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
const formSchema = z.object({
  first_name: z.string().min(2).max(50),
  last_name: z.string().min(2).max(50),
  email: z.string().min(2).max(50).email(),
  password: z.string().min(6).max(20),
});

export default function SignUpForm({
  className,
}: React.ComponentProps<"form">) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const { toast } = useToast();
  const [processing, setProcessing] = useState(false);
  const router = useRouter();

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setProcessing(true);
    const supabase = createClient();
    await supabase.auth
      .signUp({
        email: values.email,
        password: values.password,
        options: {
          emailRedirectTo: "http://localhost:3002",
          data: {
            first_name: values.first_name,
            last_name: values.last_name,
            username: nanoid(15),
          },
        },
      })
      .then(async ({ data, error }) => {
        if (error?.message) {
          toast({
            title: "Oops, there was an error",
            description: error?.message,
          });
          setProcessing(false);
          return;
        }

        supabase.functions.invoke("profile", {
          body: {
            id: data.user?.id,
            email: data.user?.email,
            first_name: data.user?.user_metadata.first_name,
            last_name: data.user?.user_metadata.last_name,
            username: data.user?.user_metadata.username,
          },
        });
        setProcessing(false);
        router.push("/u");
      });
  }
  return (
    <Form {...form}>
      <form
        className={cn("grid items-start gap-0.5", className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex items-center justify-between gap-2">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>
                  {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                {/* This is your public display name. */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                {/* This is your public display name. */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full mt-3">
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
