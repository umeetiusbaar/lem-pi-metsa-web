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
    <div>
      {signatureCount !== null ? (
        <p>{signatureCount} people have signed the petition</p>
      ) : (
        <p>Loading signature count...</p>
      )}
    </div>
  );
};

export default SignatureCount;
