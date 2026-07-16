import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaign Inquiry Confirmed | Letizia Agency",
  description: "Continue to schedule a creative strategy session with Letizia Agency.",
  alternates: { canonical: "/confirmed" },
  robots: { index: false, follow: true },
};

export default function ConfirmedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
