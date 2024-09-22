import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SignUpForm from "@/components/forms/join";

export default function Dashboard() {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 lg:min-h-[733px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center justify-center items-center">
            <svg
              className="mx-auto mb-5"
              width="30"
              height="30"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <g clipPath="url(#clip0_105_666)">
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
                  <stop stopColor="#000000" />{" "}
                  <stop offset="1" stopColor="#000000" />{" "}
                </linearGradient>{" "}
                <clipPath id="clip0_105_666">
                  {" "}
                  <rect width="200" height="200" fill="white" />{" "}
                </clipPath>{" "}
              </defs>{" "}
            </svg>
            <h1 className="text-3xl font-bold">Sign up</h1>
            <p className="text-balance text-sm text-muted-foreground">
              Enter your details below to get started with Clanwyse in minutes.
              Already have an account?
              <Link href="/login" className="underline">
                {" "}
                Login{" "}
              </Link>
            </p>
          </div>
          <div className="grid gap-4">
            <SignUpForm />
          </div>
          <div className="mt-4 text-center text-sm">
            By signing up, you agree to our{" "}
            <Link
              href="/terms-conditions"
              target="_blank"
              className="font-bold underline"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
