import FooterCopyright from "@/components/footer/copyright";
import FooterCTA from "@/components/footer/cta";
import FooterDefault from "@/components/footer/default";
import { HomeBento } from "@/components/home/bento";
import HomeHero from "@/components/home/hero";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <div className="">
        <Header />
      </div>
      <HomeHero />

      <div className=" container mx-auto">
        <div className="mt-16 flow-root sm:mt-24">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <img
              alt="App screenshot"
              src="https://ifyibwxsbufeebiqefto.supabase.co/storage/v1/object/sign/assets/Screenshot%202024-09-12%20at%2017.09.06.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvU2NyZWVuc2hvdCAyMDI0LTA5LTEyIGF0IDE3LjA5LjA2LnBuZyIsImlhdCI6MTcyNjE1ODEyOSwiZXhwIjoxNzU3Njk0MTI5fQ.1HLPPBt6ti2CHJzbI7Fyy0TgGF-FvQzmNzFYcfRONl8&t=2024-09-12T16%3A22%3A09.108Z"
              width={2432}
              height={1442}
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 my-36">
        <div className="mb-6 text-center">
          <h1 className="font-bold text-3xl md:text-4xl">
            Everything your community needs to{" "}
            <span className="text-cyan-700">Grow</span>
          </h1>
          <p className="w-11/12 md:w-9/12  mx-auto mt-3 text-gray-800">
            Providing you with a comprehensive suite of tools, resources and
            support to propel collective success.
          </p>
        </div>
        <HomeBento />
      </div>
      <br />
      <footer className="w-full px-3 lg:px-12 mt-16 mb-2">
        <FooterCTA />
        <FooterDefault />
        <FooterCopyright />
      </footer>
    </main>
  );
}
