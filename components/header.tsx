import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-10 inset-x-0 mx-auto z-50  px-3 py-3 rounded-xl max-w-sm w-11/12 bg-gray-900">
      <div className="flex items-center justify-between">
        <div className="flex gap-x-1.5 items-center">
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
                <stop stopColor="#e5e7eb" />{" "}
                <stop offset="1" stopColor="#e5e7eb" />{" "}
              </linearGradient>{" "}
              <clipPath id="clip0_105_666">
                {" "}
                <rect width="200" height="200" fill="white" />{" "}
              </clipPath>{" "}
            </defs>{" "}
          </svg>
          <h3 className="text-xl text-gray-200 font-bold dark:text-gray-300">
            Clanwyse
          </h3>
        </div>

        <div className="flex gap-2">
          <Link
            className="text-gray-300"
            href={"https://tally.so/r/mYYW5d"}
            target="_blank"
          >
            Notify me
          </Link>
        </div>
      </div>
    </div>
  );
}
