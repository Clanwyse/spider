import FooterCopyright from "@/components/footer/copyright";
import FooterCTA from "@/components/footer/cta";
import FooterDefault from "@/components/footer/default";
import Header from "@/components/header";

export default function Privacy() {
  return (
    <main className="flex min-h-screen -z-30 w-full flex-col items-center justify-between">
      {/* bg-[#f3f4f4] */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#c5b9d3] to-[#003344] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="">
        <Header />
      </div>
      <div className="mb-10 mt-44 ">
        <h1 className="text-3xl md:text-5xl text-left font-bold">
          Privacy Policy
        </h1>
      </div>
      <section className="px-4 md:px-56 space-y-4">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to Clanwyse. We are committed to protecting your personal
            information and your right to privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you use our platform.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul className=" list-disc ml-12">
            <li>
              Personal Information: This includes your name, email address, and
              any other information you provide when creating an account or
              using our services.
            </li>
            <li>
              Usage Data: We collect data about how you interact with our
              platform, including your activity, preferences, and device
              information.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">
            3. How We Use Your Information
          </h2>
          <p>We use your information to:</p>
          <ul className=" list-disc ml-12">
            <li>Provide and maintain our platform</li>
            <li>
              Communicate with you about updates, support, and promotional
              offers
            </li>
            <li>Improve and personalize your experience</li>
            <li>Ensure the security and proper functioning of our platform</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">
            4. How We Share Your Information
          </h2>
          <p>
            We do not sell your personal information. We may share your
            information with:
          </p>
          <ul className=" list-disc ml-12">
            <li>Service providers who help us operate our platform</li>
            <li>Legal authorities when required by law,</li>
            <li>
              Other users, but only information you choose to make public on the
              platform
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">5. Your Privacy Rights</h2>
          <p>You have the right to:</p>
          <ul className=" list-disc ml-12">
            <li>Access your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold"> 6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information. However, no method of
            transmission over the Internet or electronic storage is 100% secure.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">
            7. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last updated&quot; date. 8. Contact Us If you
            have any questions about this Privacy Policy, please contact us at
            [Your Contact Information].
          </p>
        </div>
      </section>
      <br />
      <footer className="w-full px-3 lg:px-12 mt-16 mb-2">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#bec187] to-[#003344] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
        <FooterCTA />
        <FooterDefault />
        <FooterCopyright />
      </footer>
    </main>
  );
}
