"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Suspense } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "@/hooks/use-toast";
import { createClient } from "@/utils/supabase/client";
import { useSearchParams } from "next/navigation";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

function InputOTPForm() {
  const supabase = createClient();
  const params = useSearchParams();
  const email = params.get("email") as string;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    const { error } = await supabase.auth.verifyOtp({
      email: email,
      token: values.pin,
      type: "email",
    });

    if (error?.message) {
      toast({
        title: "Oops! An error occured.",
        description: (
          <div className="mt-2 w-[340px] rounded-md ">{error?.message}</div>
        ),
      });
      return;
    }

    toast({
      title: "Loggedin!",
      description: <div className="mt-2 w-[340px] rounded-md ">Yaaayyy!!</div>,
    });
  }

  return (
    <div className="dark:bg-darkbg mx-auto my-40 h-full w-full max-w-xs border-none shadow-none">
      <svg
        className="mb-3.5"
        width="30"
        height="30"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <g clip-path="url(#clip0_105_666)">
          {" "}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 22C100 9.84974 90.1503 0 78 0H22C9.84974 0 0 9.84972 0 22V78.7194C0 90.8697 9.84974 100.719 22 100.719H78C90.1503 100.719 100 110.569 100 122.719V178C100 190.15 109.85 200 122 200H178C190.15 200 200 190.15 200 178V121.28C200 109.13 190.15 99.2805 178 99.2805H122C109.85 99.2805 100 89.4308 100 77.2805V22Z"
            fill="url(#paint0_linear_105_666)"
          />{" "}
        </g>{" "}
        <defs>
          {" "}
          <linearGradient
            id="paint0_linear_105_666"
            x1="14"
            y1="26"
            x2="179"
            y2="179.5"
            gradientUnits="userSpaceOnUse"
          >
            {" "}
            <stop stopColor="#000000" /> <stop offset="1" stopColor="#000000" />{" "}
          </linearGradient>{" "}
          <clipPath id="clip0_105_666">
            {" "}
            <rect width="200" height="200" fill="white" />{" "}
          </clipPath>{" "}
        </defs>{" "}
      </svg>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>One-Time Password</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  Please enter the one-time password sent to you.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
export default function OTP() {
  return (
    <Suspense>
      <InputOTPForm />
    </Suspense>
  );
}
