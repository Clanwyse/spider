"use client";

import FooterCopyright from "@/components/footer/copyright";
import FooterCTA from "@/components/footer/cta";
import FooterDefault from "@/components/footer/default";
import Header from "@/components/header";

export default function Privacy() {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
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
            Terms &amp; Conditions
          </h1>
        </div>
        <section className="px-4 md:px-56 space-y-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Clanwyse, you agree to be bound by these
              Terms and Conditions. If you disagree with any part of these
              terms, you may not use our platform.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">2. User Registration</h2>
            <p>
              To use certain features of the platform, you may be required to
              register for an account. You agree to:
            </p>
            <ul className=" list-disc ml-12">
              <li>
                Provide accurate, current, and complete information during the
                registration process
              </li>
              <li>
                Maintain and promptly update your registration information
              </li>
              <li>
                Keep your password confidential and notify us immediately of any
                unauthorized use of your account
              </li>
              <li>
                Be responsible for all activities that occur under your account
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">3. User Conduct</h2>
            <p>When using our platform, you agree not to:</p>
            <ul className=" list-disc ml-12">
              <li>Violate any applicable laws or regulations</li>
              <li>
                Infringe on the rights of others, including privacy and
                intellectual property rights
              </li>
              <li>
                Post or transmit any content that is unlawful, offensive,
                threatening, libelous, defamatory, obscene, or otherwise
                objectionable
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the
                platform or any other systems or networks connected to the
                platform
              </li>
              <li>
                Use the platform for any commercial purposes without our express
                written consent
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">4. Content</h2>
            <p>
              Users are solely responsible for the content they post on the
              platform. By posting content, you grant us a non-exclusive,
              worldwide, royalty-free license to use, modify, publicly perform,
              publicly display, reproduce, and distribute such content on and
              through the platform.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
            <p>
              The platform and its original content, features, and functionality
              are owned by CLANWYSE.COM LIMITED and are protected by
              international copyright, trademark, patent, trade secret, and
              other intellectual property or proprietary rights laws.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">6. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the
              platform immediately, without prior notice or liability, under our
              sole discretion, for any reason whatsoever and without limitation,
              including but not limited to a breach of these Terms.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">
              7. Limitation of Liability
            </h2>
            <p>
              In no event shall CLANWYSE.COM LIMITED, nor its directors,
              employees, partners, agents, suppliers, or affiliates, be liable
              for any indirect, incidental, special, consequential or punitive
              damages, including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses, resulting from your access
              to or use of or inability to access or use the platform.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will provide at least 30 days&apos;
              notice prior to any new terms taking effect. What constitutes a
              material change will be determined at our sole discretion.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">9. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of Nigeria, without regard to its conflict of law provisions.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at
              success@clanwyse.com.
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
    </>
  );
}
