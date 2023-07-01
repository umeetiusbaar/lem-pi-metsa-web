'use client'

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const SignatureCount = () => {
  const [signatureCount, setSignatureCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchSignatureCount = async () => {
      try {
        const response = await fetch("/api/petitions");
        const { signatures } = await response.json();
        setSignatureCount(signatures);
      } catch (error) {
        console.error("Error fetching signature count:", error);
      }
    };
    fetchSignatureCount();
  }, []);

  return (
    <span>
      {signatureCount !== null ? (
          <span>{signatureCount}</span>
      ) : (
        <FontAwesomeIcon icon={faSpinner} spin />
      )}
    </span>
  );
};

export default SignatureCount;
