"use client";

import { toast } from "@/hooks/use-toast";
import { Profile } from "@/graphql/__generated__/graphql";

import { Button } from "@/components/ui/button";

import React from "react";
import { createClient } from "@/utils/supabase/client";

type Props = {
  profile: Profile;
};

export default function ResetPassword(props: Props) {
  const { profile } = props;
  const [open, setOpen] = React.useState(false);
  const supabase = createClient();

  async function onSubmit() {
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      profile.email as string
    );

    if (error?.message) {
      toast({
        title: "Oops! An error occurred",
        description: (
          <div className="mt-2 w-[340px] rounded-md">{error?.message}</div>
        ),
      });

      return;
    }

    toast({
      title: "Email sent.",
      description: (
        <div className="mt-2 w-[340px] rounded-md">
          <div>We sent you a reset email.</div>
        </div>
      ),
    });

    setOpen(false);
  }
  return (
    <div>
      <Button
        onClick={onSubmit}
        variant="ghost"
        className="hover:bg-transparent font-medium"
      >
        Reset
      </Button>
    </div>
  );
}
