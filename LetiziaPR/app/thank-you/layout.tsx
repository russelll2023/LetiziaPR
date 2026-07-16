import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meeting Confirmed | Letizia Agency",
  description: "Your creative strategy session with Letizia Agency is confirmed.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
