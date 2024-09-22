"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import UserHeader from "../header";
export default function Profile() {
  const query = gql`
    query me {
      me {
        firstName
        lastName
        bio
        username
      }
    }
  `;

  const { data } = useQuery(query, {
    fetchPolicy: "cache-first",
  });

  return (
    <div>
      <UserHeader title="Profile" />

      <main className="py-5">
        <div className="px-4 sm:px-6 lg:px-8">
          {/* <!-- <div className="px-8"> --> */}
          <div className="relative">
            <div className="relative mt-3 h-32 w-full rounded-lg bg-gray-200">
              <div className="absolute right-3 top-2 h-5 w-5 rounded-full bg-transparent text-center">
                <Link href="/u/account-settings" className="w-full">
                  <div className="flex h-6 w-6 items-center justify-center gap-2 rounded-full bg-gray-900">
                    <Icon
                      className="h-4 w-4 shrink-0 text-sm font-semibold text-gray-200"
                      icon="solar:pen-bold-duotone"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="absolute top-20 ml-7">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <div className="ml-7 mt-14 px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {data?.me?.firstName} {data?.me?.lastName}
          </h2>
          <p className="text-sm font-medium leading-none text-gray-500">
            @{data?.me?.username}
          </p>
        </div>

        <div className="mt-14 px-8">
          <div className="w-full rounded-sm border border-gray-100 px-7 py-5">
            <h4 className="mb-2 text-base font-bold text-gray-900">About</h4>
            <p>
              {data?.me?.bio
                ? data?.me?.bio
                : `Write something about
          yourself.`}
            </p>
          </div>
        </div>
        {/* <!-- </div> --> */}
      </main>
    </div>
  );
}
