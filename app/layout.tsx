import type { Metadata } from "next";
import "./globals.css";
import EditorBridge from "@/components/__kodagen/EditorBridge";
import { siteConfig } from "@/lib/site-config";

const SITE_URL = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.brandName} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.brandName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.brandName,
  keywords: [
    "AI business builder",
    "automated business creation",
    "AI branding",
    "AI website generator",
    "AI marketing",
    "sales funnel automation",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <EditorBridge />
      </body>
    </html>
  );
}
