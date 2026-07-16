import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Public Relations & Advertising Agency | Letizia Agency",
  description: "Letizia Agency creates strategic public relations, advertising, digital media, and crisis communications campaigns that build visibility, credibility, and measurable momentum.",
  applicationName: "Letizia Agency",
  authors: [{ name: "Letizia Agency", url: "https://letiziaagency.com" }],
  creator: "Letizia Agency",
  publisher: "Letizia Agency",
  category: "Public Relations and Advertising",
  keywords: [
    "public relations agency",
    "advertising agency",
    "PR agency",
    "digital advertising",
    "crisis communications",
    "media relations",
    "strategic communications",
    "Letizia Agency",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://pr.letiziaagency.com",
    siteName: "Letizia Agency",
    title: "Public Relations & Advertising Agency | Letizia Agency",
    description: "Strategic PR, advertising, digital media, and crisis communications campaigns that turn your story into influence.",
    images: [{
      url: "/letizia-social-share.png",
      width: 2048,
      height: 1365,
      alt: "Letizia Agency leadership with the Letizia Agency logo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Public Relations & Advertising Agency | Letizia Agency",
    description: "Strategic PR, advertising, digital media, and crisis communications campaigns that turn your story into influence.",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DQ5QBWFF08"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-global" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-DQ5QBWFF08');`}
        </Script>
        <Script id="letizia-organization-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://pr.letiziaagency.com/#organization",
            name: "Letizia Agency",
            url: "https://pr.letiziaagency.com/",
            logo: "https://pr.letiziaagency.com/letizia-agency-logo.png",
            image: "https://pr.letiziaagency.com/letizia-social-share.png",
            description:
              "Strategic public relations, advertising, digital media, and crisis communications agency.",
            sameAs: ["https://letiziaagency.com/"],
            knowsAbout: [
              "Public relations",
              "Advertising",
              "Digital media",
              "Crisis communications",
              "Media relations",
              "Strategic communications",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Communications Services",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Public Relations" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Advertising" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crisis Communications" } },
              ],
            },
          })}
        </Script>
        <Script id="meta-pixel-global" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '864548530760628');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=864548530760628&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
