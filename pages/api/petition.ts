import { NextApiRequest, NextApiResponse } from "next";
import { load } from "cheerio";

type PetitionData = {
  signatures: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PetitionData | { message: string }>
) {
  try {
    const response = await fetch(
      "https://www.adressit.com/stats.php?id=302400"
    );
    const text = await response.text();
    const $ = load(text);
    const signaturesText = $(".signatureAmount").text().trim();
    if (signaturesText) {
      const signatures = parseInt(signaturesText.replace(/\D/g, ""));
      res.status(200).json({ signatures });
    } else {
      res.status(404).json({ message: "Number of signatures not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching number of signatures" });
  }
}
