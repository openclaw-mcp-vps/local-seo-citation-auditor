import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local SEO Citation Auditor – Fix Inconsistent Business Listings",
  description: "Scan 50+ local directories for NAP inconsistencies hurting your local search rankings. Get a prioritized cleanup checklist with direct fix links."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="27a369e1-3155-47aa-9bbb-b48b3189ef74"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
