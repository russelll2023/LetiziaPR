import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Creative Strategy Session | Letizia Agency",
  description: "Choose a time for a creative strategy session with Letizia Agency.",
  alternates: { canonical: "/schedule" },
  robots: { index: false, follow: true },
};

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
