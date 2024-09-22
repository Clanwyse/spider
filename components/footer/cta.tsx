export default function FooterCTA() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-lg bg-gray-900 p-6 shadow-lg sm:flex-row sm:justify-between">
      <strong className="text-xl text-white sm:text-xl">
        Start managing your clan today!
      </strong>

      <a
        className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-gray-900 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
        href="#"
      >
        <span className="text-sm font-medium"> Let&apos;s Get Started </span>

        <svg
          className="size-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  );
}
