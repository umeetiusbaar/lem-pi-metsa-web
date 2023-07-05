import { NextResponse } from "next/server";
import { load } from "cheerio";

type PetitionData = {
  signatures: number;
};

export async function GET() {
  try {
    const timestamp = Date.now();
    const response = await fetch(
      `https://www.adressit.com/stats.php?id=302400?timestamp=${timestamp}`,
      {
        cache: "no-store",
      }
    );
    const text = await response.text();
    const $ = load(text);
    const signaturesText = $(".signatureAmount").text().trim();
    if (signaturesText) {
      const signatures = parseInt(signaturesText.replace(/\D/g, ""));
      const jsonResponse = NextResponse.json({ signatures });
      jsonResponse.headers.set("cache-control", "no-store");
      return jsonResponse;
    } else {
      return NextResponse.json(
        { message: "Number of signatures not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching number of signatures" },
      { status: 500 }
    );
  }
}
