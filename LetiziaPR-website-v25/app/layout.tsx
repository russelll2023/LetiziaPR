import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pr.letiziaagency.com"),
  title: "Letizia Agency | Strategic PR & Advertising",
  description: "Strategic public relations, advertising, and crisis communications campaigns that turn your story into influence.",
  openGraph: {
    type: "website",
    url: "https://pr.letiziaagency.com",
    siteName: "Letizia Agency",
    title: "Letizia Agency | Strategic PR & Advertising",
    description: "Strategic public relations, advertising, and crisis communications campaigns that turn your story into influence.",
    images: [{
      url: "/letizia-social-share.png",
      width: 2048,
      height: 1365,
      alt: "Letizia Agency leadership with the Letizia Agency logo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Letizia Agency | Strategic PR & Advertising",
    description: "Strategic public relations, advertising, and crisis communications campaigns that turn your story into influence.",
    images: ["/letizia-social-share.png"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/letizia-agency-logo.png",
    shortcut: "/letizia-agency-logo.png",
    apple: "/letizia-agency-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
