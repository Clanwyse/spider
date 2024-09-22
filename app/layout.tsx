import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ApolloWrapper } from "./apollo-wrapper";
import AuthListener from "./auth-listener";

const rethink = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "Catalysing Community Growth",
  description: "We empower communities to grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rethink.className} antialiased`}>
        <ApolloWrapper>
          <AuthListener>{children}</AuthListener>
        </ApolloWrapper>

        <Toaster />
      </body>
    </html>
  );
}
