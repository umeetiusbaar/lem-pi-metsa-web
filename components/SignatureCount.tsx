import { useState, useEffect } from "react";

const SignatureCount = () => {
  const [signatureCount, setSignatureCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchSignatureCount = async () => {
      try {
        const response = await fetch("/api/petition");
        const { signatures } = await response.json();
        setSignatureCount(signatures);
      } catch (error) {
        console.error("Error fetching signature count:", error);
      }
    };
    fetchSignatureCount();
  }, []);

  return (
    <div className="text-center">
      {signatureCount !== null ? (
        <p className="text-2xl"><span className="font-bold">{signatureCount}</span> ihmistä on allekirjoittanut lähiluontoa puolustavan <a className="underline" target="_blank" rel="noopener" href="https://www.adressit.com/pirkkalan_ja_lempaalan_valinen_virkistymetsa_ja_ekologinen_kaytava_tulee_sailyttaa_sellaisena_myos_tulevaisuudessa">adressin</a></p>
      ) : (
        <p>Loading signature count...</p>
      )}
    </div>
  );
};

export default SignatureCount;
