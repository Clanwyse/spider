"use client";

// import CreateClan from "@/components/dialogs/createClan";

import * as React from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import UserButton from "@/components/user-botton";
import Link from "next/link";

export default function UserSidebar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigation = [
    // {
    //   name: "Review",
    //   href: `/u/`,
    //   icon: "solar:bolt-line-duotone",
    //   current: false,
    //   coming_soon: false,
    // },
    // {
    //   name: "Clans",
    //   href: `/u/clans`,
    //   icon: "lets-icons:setting-alt-line-duotone-line",
    //   coming_soon: false,
    // },
    // {
    //   name: "Spaces",
    //   href: `/u/spaces`,
    //   icon: "solar:chat-round-call-line-duotone",
    // },
    // {
    //   name: "Decisions",
    //   href: `/u/decisions`,
    //   icon: "solar:transfer-vertical-bold-duotone",
    // },
    {
      name: "Collections",
      href: `/u/collections`,
      icon: "solar:safe-square-line-duotone",
    },

    // {
    //   name: "Calendar",
    //   href: `/u/calendar`,
    //   icon: "solar:calendar-date-line-duotone",
    // },
    // {
    // 	name: 'Pages',
    // 	href: `/u/pages`,
    // 	icon: 'solar:notes-line-duotone',
    // 	coming_soon: false
    // }
  ];
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-white px-6">
      <div className="mt-4 flex gap-x-2 items-center">
        <svg
          width="20"
          height="20"
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
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-300">
          Clanwyse
        </h3>
      </div>
      <nav className="flex flex-1 flex-col mt-4">
        <ul role="list" className="flex flex-1 flex-col gap-y-1">
          {/* <li className="-mx-2 space-y-1"><!-- <Search /> --></li> */}
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {/* {navigation.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="group flex w-5/6 items-center gap-x-1.5 rounded-md px-1.5 py-1 font-medium leading-5 text-slate-600 hover:bg-gray-200 hover:text-[#3887BE] dark:text-gray-300"
                  >
                    <Icon
                      className="shrink-0 text-xl font-extrabold group-hover:text-[#3887BE]"
                      aria-hidden="true"
                      icon={item.icon}
                    />
                    <span className="text-[0.99rem]">{item.name}</span>
                  </Link>
                </li>
              ))} */}
            </ul>
          </li>

          <li className="mt-10">
            {/* <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-base text-gray-600 font-medium">Groups</h4>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="hover:bg-transparent"
                    size="sm"
                  >
                    <CaretSortIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>

              <CollapsibleContent className="space-y-1.5">
                <div>@radix-ui/colors</div>
                <div>@radix-ui/colors</div>
                <div>@radix-ui/colors</div>
                <div>@radix-ui/colors</div>
                <div>@radix-ui/colors</div>

                {/* ...<div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                  @radix-ui/colors
                </div>
                <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                  @stitches/react
                </div> ...
              </CollapsibleContent>
            </Collapsible> */}
          </li>

          <li className="-mx-1 mb-2 mt-auto">
            <div className="flex items-center px-2">
              <div className="flex flex-1">{/* <CreateClan /> */}</div>

              <div className="mx-2">
                <UserButton />
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
