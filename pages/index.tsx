import Head from "next/head";
import { Inter } from "@next/font/google";
import SignatureCount from "../components/SignatureCount";
import MonthlyImage from "@/components/MonthlyImage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div>
        <MonthlyImage />
      </div>
      <h1 className="text-3xl font-bold underline">
        <SignatureCount />
      </h1>
    </div>
  );
}
