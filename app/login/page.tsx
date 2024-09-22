import LoginForm from "@/components/forms/login";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Login() {
  return (
    <div className="w-full px-3 py-7 md:px-0">
      <Card className="dark:bg-darkbg mx-auto my-40 h-full w-full max-w-sm border-none shadow-none">
        <CardHeader>
          <CardTitle className="mb-1 flex flex-col gap-4 font-medium text-xl leading-none">
            <svg
              className="mb-3.5"
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
            <span>Login into Clanwyse</span>
          </CardTitle>
          <CardDescription className="font-light">
            Great communities you can grow in.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <LoginForm />
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-1">
          <div className="mt-4 text-left text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/get-started" className="underline">
              Sign up{" "}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
