import * as React from "react";
type Props = {
  title: string;
};
export default function UserHeader(props: Props) {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      {/* <!-- <button
				type="button"
				className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
				on:click={() => (sidebarOpen = !sidebarOpen)}
			>
				<span className="sr-only">Open sidebar</span>
				<iconify-icon icon="solar:hamburger-menu-line-duotone" className="text-xl font-bold"
				></iconify-icon>
			</button> --> */}

      {/* <!-- Separator --> */}
      <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true"></div>

      <div className="flex flex-1 items-center justify-between gap-x-4 self-stretch lg:gap-x-6">
        <div>
          <h2 className="text-xl font-semibold leading-tight text-gray-900 dark:text-gray-300">
            {props.title}
          </h2>
        </div>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {/* <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">View notifications</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button> */}

          {/* <!-- Separator --> */}
          {/* <div
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
            aria-hidden="true"
          ></div> */}

          <div className="flex items-center">
            <div className="pt-1.5">{/* <!-- <ModeToggle /> --> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
