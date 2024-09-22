"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function AuthListener({ children }) {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN") {
        // User signed in
        console.log("User signed in:", session);
        // You might want to redirect the user or update the app state
        router.refresh();
      } else if (event === "SIGNED_OUT") {
        // User signed out
        console.log("User signed out");
        [window.localStorage, window.sessionStorage].forEach((storage) => {
          Object.entries(storage).forEach(([key]) => {
            storage.removeItem(key);
          });
        });
        // You might want to redirect the user or update the app state
        router.refresh();
      } else if (event == "PASSWORD_RECOVERY") {
        const newPassword = prompt(
          "What would you like your new password to be?"
        );
        const { data, error } = await supabase.auth.updateUser({
          password: newPassword,
        });

        if (data) alert("Password updated successfully!");
        if (error) alert("There was an error updating your password.");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, "supabase.auth"]);

  return children;
}
