"use client";

import Link from "next/link";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createClient } from "@/utils/supabase/client";

import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import UserHeader from "../header";
export default function Collections() {
  const supabase = createClient();

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

  const { data, error, loading } = useQuery(query, {
    fetchPolicy: "cache-first",
  });

  return (
    <div>
      <UserHeader title="Collections" />

      <main className="py-5">
        <div className="px-4 sm:px-6 lg:px-8">collections</div>
      </main>
    </div>
  );
}
