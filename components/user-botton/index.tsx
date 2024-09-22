"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createClient } from "@/utils/supabase/client";

import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function UserButton() {
  const [profile, setprofile] = useState(null);
  const supabase = createClient();
  const router = useRouter();

  const query = gql`
    query me {
      me {
        firstName
        lastName
        email
        avatar
      }
    }
  `;

  const { data, error, loading } = useQuery(query, {
    fetchPolicy: "cache-first",
  });

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.log(error);
    router.push("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-transparent hover:bg-transparent"
          variant="ghost"
          size="icon"
        >
          <Avatar className="h-9 w-9">
            <AvatarImage src={data?.me?.avatar} alt={data?.me?.firstName} />
            <AvatarFallback>
              {data?.me?.firstName[0]}
              {data?.me?.lastName[0]}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mx-1 w-60 p-0 rounded-xl dark:bg-darkbg">
        <DropdownMenuItem className="flex p-2 rounded-b-none bg-slate-100 items-center gap-3 dark:bg-darkbg">
          <Link href="/u/profile" className="w-full">
            <div className="flex w-full items-center gap-2">
              <Avatar className="h-8 w-8 rounded-tr-lg rounded-b-full ">
                <AvatarImage src={data?.me?.avatar} alt={data?.me?.firstName} />
                <AvatarFallback className=" bg-slate-300 font-semibold">
                  {data?.me?.firstName[0]}
                  {data?.me?.lastName[0]}
                </AvatarFallback>
              </Avatar>
              {loading && <div>Loading ...</div>}
              {!loading && (
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-300">
                    {data?.me?.firstName} {data?.me?.lastName}
                  </h3>
                  <p className="text-xs leading-none text-gray-500">
                    {data?.me?.email}
                  </p>
                </div>
              )}
            </div>
          </Link>
        </DropdownMenuItem>
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuGroup>
          <DropdownMenuItem className="flex items-center gap-3">
            <Link href="/u/" className="flex w-full items-center gap-3">
              <Icon
                className="h-4 w-4 shrink-0 text-sm font-semibold"
                icon="solar:bolt-broken"
                aria-hidden="true"
              />
              <p className="text-sm font-medium">Review</p>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-3">
            <Link
              href="/u/account-settings"
              className="flex w-full items-center gap-3"
            >
              <Icon
                className="h-4 w-4 shrink-0 text-sm font-semibold"
                icon="solar:shield-user-line-duotone"
                aria-hidden="true"
              />
              <p className="text-sm font-medium">Account settings</p>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-3">
          <Link href="/a/" className="flex w-full items-center gap-3">
            <Icon
              className="h-4 w-4 shrink-0 text-sm font-semibold"
              icon="solar:users-group-rounded-line-duotone"
              aria-hidden="true"
            />
            <p className="text-sm font-medium">Manage clans</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-3" disabled>
          <Icon
            className="h-4 w-4 shrink-0 text-sm font-semibold"
            icon="solar:add-square-line-duotone"
            aria-hidden="true"
          />
          <p className="text-sm font-medium">Invite your friends</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-3" disabled>
          <Icon
            className="h-4 w-4 shrink-0 text-sm font-semibold"
            icon="solar:question-square-line-duotone"
            aria-hidden="true"
          />
          <p className="text-sm font-medium">Support</p>
          <DropdownMenuShortcut>
            <Icon
              className="h-4 w-4 shrink-0 text-sm font-semibold"
              icon="solar:arrow-right-up-line-duotone"
              aria-hidden="true"
            />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3" disabled>
          <Icon
            className="h-4 w-4 shrink-0 text-sm font-semibold"
            icon="solar:volume-bold-duotone"
            aria-hidden="true"
          />
          <p className="text-sm font-medium">What&apos;s new</p>
          <DropdownMenuShortcut>
            <Icon
              className="h-4 w-4 shrink-0 text-sm font-semibold"
              icon="solar:arrow-right-up-line-duotone"
              aria-hidden="true"
            />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex w-full items-center gap-3">
          <Icon
            className="h-4 w-4 shrink-0 text-sm font-semibold"
            icon="solar:login-3-line-duotone"
            aria-hidden="true"
          />
          <Button
            onClick={signOut}
            className="h-0 px-0 py-0"
            type="button"
            variant="ghost"
          >
            <span className="w-60 text-left">Log out</span>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex items-center gap-3">
          <p className="text-xs font-medium text-gray-400">
            Version 0.0.1-alpha
          </p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
