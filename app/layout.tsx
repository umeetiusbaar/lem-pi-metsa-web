import { Metadata } from "next";
import "./globals.css";
import "./fonts";
import { space_grotesk } from "./fonts";

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
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi" className={space_grotesk.className}>
      <body>{children}</body>
    </html>
  );
}
