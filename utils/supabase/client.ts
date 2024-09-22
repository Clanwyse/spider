import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_CLANWYSE_URL!,
    process.env.NEXT_PUBLIC_CLANWYSE_ANON_KEY!
  );
}
