"use client";

import { useEffect, useState } from "react";

const MonthlyImage = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1; // get current month (1-12)
    const imageSrc = `/images/${currentMonth}.jpg`; // use current month to determine image filename
    setImageUrl(imageSrc);
  }, []);

  return (
    <img
      src={imageUrl}
      alt="Kuukausittainen kuva Lempäälän Kortejärveltä"
      className="absolute top-0 left-0 w-full h-full object-cover object-center -z-10"
    />
  );
};

export default MonthlyImage;
