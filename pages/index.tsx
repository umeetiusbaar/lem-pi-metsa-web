import Head from "next/head";
import { Inter } from "@next/font/google";
import SignatureCount from "../components/SignatureCount";
import MonthlyImage from "@/components/MonthlyImage";
import { Main } from "next/document";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-green-300 h-full">
      <Head>
        <title>LemPi-metsän puolesta!</title>
        <meta name="description" content="LemPi-metsän puolesta!" />
        <link
          type="image/png"
          sizes="32x32"
          rel="icon"
          href="/icons8-evergreen-32.png"
        />
      </Head>
      <main>
        <div className="text-center font-bold text-green-800 text-4xl sm:text-7xl pt-5 pb-5">
          <h1>LEM-PI-METSÄN PUOLESTA!</h1>
        </div>
        <div className="text-center font-bold text-red-700 text-2xl sm:text-5xl pt-0 pb-5">
          <h1>#EiPuskiaistenMoottoritietä</h1>
        </div>
        <div>
          <SignatureCount />
        </div>
        <div className="max-w-screen-lg mx-auto">
          <MonthlyImage />
        </div>
      </main>
      <footer>
        <div className="text-center font-normal">
          <a
            className="underline"
            target="_blank"
            rel="noopener"
            href="https://icons8.com/icons/set/favicon-tree"
            title="evergreen-icon"
          >
            Evergreen favicon icon - Icons8
          </a>
        </div>
      </footer>
    </div>
  );
}
