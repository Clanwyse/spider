"use client";
import { createClient } from "@/utils/supabase/client";
import UserHeader from "../header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import AccountGeneral from "./general";
import AccountSecurity from "./security";

export default function AccountSettings() {
  const supabase = createClient();
  const query = gql`
    query me {
      me {
        firstName
        lastName
        bio
        username
        email
        birthDate
        avatar
        preferences {
          enableEmailNotifications
        }
      }
    }
  `;
  const { data, error, loading } = useQuery(query, {
    fetchPolicy: "cache-first",
  });

  const options = [
    { id: "general", label: "General" },
    // { id: "appearance", label: "Appearance" },
    { id: "security", label: "Security" },
    { id: "langreg", label: "Language & Security" },
    // { id: "notifications", label: "Notifications" },
    // { id: "invite", label: "Refer a friend" },
  ];

  return (
    <div>
      <UserHeader title="Edit Account" />

      <main className="py-5">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300">
              {data?.me.firstName} {data?.me.lastName}
            </h2>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Manage your profile and personal preferences here.
            </p>
          </div>

          <Tabs defaultValue="general" className="mt-5">
            <TabsList>
              {options.map((option) => (
                <TabsTrigger
                  key={option.id}
                  value={option.id}
                  disabled={option.id === "svelte"}
                  className="dark:data-[state=active]:bg-[#7BB390]"
                >
                  {option.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="general">
              <div className="mt-6 flex flex-col">
                <AccountGeneral profile={data?.me} />
              </div>
            </TabsContent>

            {/* <!-- <TabsContent value="custom-traits">Change your password here.</TabsContent> --> */}
            <TabsContent value="security">
              <div className="mt-6 flex flex-col">
                <AccountSecurity profile={data?.me} />
              </div>
            </TabsContent>
            <TabsContent value="langreg">
              <div className="mt-6 flex">
                ...
                {/* <!-- <AccountSecurity profile={data.profile} /> --> */}
              </div>
            </TabsContent>
            {/* <!-- <TabsContent value="notifications"> */}
            <div className="mt-6 flex">
              {/* <AccountNotifications profile={data.profile} /> */}
            </div>
            {/* </TabsContent> --> */}
            {/* <!-- <TabsContent value="invite">Coming soon. (invite)</TabsContent> --> */}
          </Tabs>
        </div>
      </main>
    </div>
  );
}
