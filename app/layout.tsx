import { Metadata } from "next";
import "./globals.css";
import { space_grotesk } from "./fonts";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import MonthlyImage from "./components/MonthlyImage";

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
      <body
        className={`h-screen justify-center items-center bg-center bg-cover`}
      >
        <MonthlyImage />
        <header>
          <Header />
        </header>
        <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-2/3 md:w-2/3 lg:w-1/3 xl:w-1/4 sm:h-2/3 md:h-2/3 lg:h-1/2 xl:h-1/3 max-h-[calc(100vh-7rem)] overflow-auto p-4 bg-opacity-75">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
      {/*
      <body className="bg-stretch">
      <MonthlyImage />
      <TitleBar />
        <div className="flex items-center justify-center">
          <TabLayout>{children}</TabLayout>
        </div>
      </body>
  */}
    </html>
  );
}
