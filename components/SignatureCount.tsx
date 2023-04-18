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
    <span className="badge counter">
      {signatureCount !== null ? (
          <span>{signatureCount}</span>
      ) : (
        <i className="fa fa-spinner" aria-hidden="true"></i>
      )}
    </span>
  );
};

export default SignatureCount;
