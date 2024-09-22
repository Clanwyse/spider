"use client";

import { toast } from "@/hooks/use-toast";
import type { Profile } from "@/graphql/__generated__/graphql";

import { Button } from "@/components/ui/button";

import { createClient } from "@/utils/supabase/client";

type Props = {
  profile: Profile;
};

export default function ResetPassword(props: Props) {
  const { profile } = props;
  const supabase = createClient();

  async function onSubmit() {
    const { error } = await supabase.auth.resetPasswordForEmail(
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
