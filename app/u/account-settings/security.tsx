import { Icon } from "@iconify/react";
import ResetPassword from "./forms/reset-password";
import { Profile } from "@/generated/graphql";

type Props = {
  profile: Profile;
};

export default function AccountSecurity(props: Props) {
  const { profile } = props;
  return (
    <div>
      <dl className="flex-1 divide-y divide-gray-100">
        <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="flex items-center gap-x-2 text-sm font-medium leading-3 text-slate-600">
            <Icon
              className="group-hover:text-600 shrink-0 cursor-pointer text-base font-bold text-slate-600"
              icon="solar:key-minimalistic-2-line-duotone"
              aria-hidden="true"
            />

            <span>Reset Password</span>
          </dt>
          <dd className="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <span className="flex-grow">****************</span>
            <span className="ml-4 flex-shrink-0">
              <ResetPassword profile={profile} />
            </span>
          </dd>
        </div>
      </dl>
    </div>
  );
}
