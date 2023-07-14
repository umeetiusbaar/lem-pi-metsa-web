import { Metadata } from "next";
import "./globals.css";
import { space_grotesk } from "./fonts";

import MonthlyImage from "./components/MonthlyImage";
import TabLayout from "./ui/TabLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://lempimetsanpuolesta.net"),
  title: "LemPi-metsän puolesta!",
  description:
    "Lempäälän ja Pirkkalan välinen laaja virkistys- ja luontoalue tulee säilyttää tuleville sukupolville ja luonnolle",
  openGraph: {
    title: "LemPi-metsän puolesta!",
    description:
      "Lempäälän ja Pirkkalan välinen laaja virkistys- ja luontoalue tulee säilyttää tuleville sukupolville ja luonnolle",
    locale: "fi_FI",
    type: "website",
    url: "https://lempimetsanpuolesta.net",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi" className={space_grotesk.className}>
      <body>
      <MonthlyImage />
        <div className="flex items-center justify-center min-h-screen bg-center bg-cover">
          <TabLayout children={children} />
        </div>
      </body>
    </html>
  );
}
