import { createClient } from "@/utils/supabase/server";
import UserSidebar from "./sidebar";

export default async function UserLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const { data: r } = await supabase.auth.getSession();
  console.log(r.session?.access_token);
  return (
    <div>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <UserSidebar />
      </div>

      <div className="lg:pl-72">{children}</div>
    </div>
  );
}
