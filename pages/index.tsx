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
        <div className="text-center font-bold text-green-800 text-9xl">
          <h1>LEM-PI-METSÄN PUOLESTA!</h1>
        </div>
        <div className="text-center font-bold text-red-700 text-5xl">
          <h1>#EiPuskiaistenMoottoritietä</h1>
        </div>
        <div>
          <SignatureCount />
        </div>
        <div className="max-w-screen-lg mx-auto items-center justify-center h-full">
          <MonthlyImage />
        </div>
      </main>
      <footer>
        <div className="text-center font-normal">
          <a
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
