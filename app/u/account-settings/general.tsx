import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Profile } from "@/graphql/__generated__/graphql";

import { Icon } from "@iconify/react";
import EnableNotifications from "./forms/enable-notification";
import EditBio from "./forms/edit-bio";
import AddDOB from "./forms/add-dob";
import ChangeAvatar from "./forms/change-avatar";
import EditPhone from "./forms/edit-phone";
import EditEmail from "./forms/change-email";

type Props = {
  profile: Profile;
};

export default function AccountGeneral(props: Props) {
  const { profile } = props;
  return (
    <div>
      <dl className="flex-1 divide-y divide-gray-100">
        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="flex items-center gap-x-2 text-sm font-medium leading-3 text-slate-600">
            <Icon
              className="group-hover:text-600 shrink-0 cursor-pointer text-base font-bold text-slate-600"
              icon="solar:gallery-bold-duotone"
              aria-hidden="true"
            />

            <span>Profile photo</span>
          </dt>
          <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <span className="flex-grow">
              <Avatar className="h-7 w-7">
                <AvatarImage
                  src={profile?.avatar?.toString()}
                  alt={profile?.firstName?.toString()}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </span>
            <span className="ml-4 flex-shrink-0">
              <ChangeAvatar profile={profile} />
            </span>
          </dd>
        </div>
        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="flex items-center gap-x-2 text-sm font-medium leading-3 text-slate-600">
            <Icon
              className="group-hover:text-600 shrink-0 cursor-pointer text-base font-bold text-slate-600"
              icon="solar:user-check-bold-duotone"
              aria-hidden="true"
            />
            <span>Name</span>
          </dt>
          <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <span className="flex-grow">
              {profile?.firstName} {profile?.lastName}
            </span>
            {/* <!-- <span className="ml-4 flex-shrink-0">
							<Icon
								className="group-hover:text-600 shrink-0 cursor-pointer text-base font-bold text-gray-900"
								icon="solar:pen-linear"
								aria-hidden="true"
							>
							</Icon>
						</span> --> */}
          </dd>
        </div>
        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="flex items-center gap-x-2 text-sm font-medium leading-3 text-slate-600">
            <Icon
              className="group-hover:text-600 shrink-0 cursor-pointer text-base font-bold text-slate-600"
              icon="solar:mailbox-bold-duotone"
              aria-hidden="true"
            />
            <span>Email address</span>
          </dt>
          <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <span className="flex-grow">{profile?.email}</span>
            <span className="ml-4 flex-shrink-0">
              <EditEmail profile={profile} />
            </span>
          </dd>
        </div>
        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="flex items-center gap-x-2 text-sm font-medium leading-3 text-slate-600">
            <Icon
              className="group-hover:text-600 shrink-0 cursor-pointer text-base font-bold text-slate-600"
              icon="solar:notification-unread-bold-duotone"
              aria-hidden="true"
            />
            <span>Enable notifications</span>
          </dt>
          <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <span className="flex-grow">
              <EnableNotifications profile={profile} />
            </span>
          </dd>
        </div>

        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="flex items-center gap-x-2 text-sm font-medium leading-3 text-slate-600">
            <Icon
              className="group-hover:text-600 shrink-0 cursor-pointer text-base font-bold text-slate-600"
              icon="solar:phone-rounded-bold-duotone"
              aria-hidden="true"
            />

            <span>Phone</span>
          </dt>
          <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <span className="flex-grow">
              {profile?.phone ? profile?.phone : "Enter your phone number."}
            </span>
            <span className="ml-4 flex-shrink-0">
              <EditPhone profile={profile} />
            </span>
          </dd>
        </div>

        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="flex items-center gap-x-2 text-sm font-medium leading-3 text-slate-600">
            <Icon
              className="group-hover:text-600 shrink-0 cursor-pointer text-base font-bold text-slate-600"
              icon="solar:calendar-date-bold-duotone"
              aria-hidden="true"
            />

            <span>Date of Birth</span>
          </dt>
          <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <span className="flex-grow">
              {profile?.birthDate
                ? profile?.birthDate
                : `Enter your birth
          date.`}
            </span>
            <span className="ml-4 flex-shrink-0">
              <AddDOB profile={profile} />
            </span>
          </dd>
        </div>

        {/*  */}
        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="flex items-center gap-x-2 text-sm font-medium leading-3 text-slate-600">
            <Icon
              className="group-hover:text-600 shrink-0 cursor-pointer text-base font-bold text-slate-600"
              icon="solar:document-add-bold-duotone"
              aria-hidden="true"
            />
            <span>About you</span>
          </dt>
          <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <span className="flex-grow">
              {profile?.bio
                ? profile?.bio
                : `Write something about
          yourself.`}
            </span>
            <span className="ml-4 flex-shrink-0">
              <EditBio profile={profile} />
            </span>
          </dd>
        </div>
      </dl>
    </div>
  );
}
