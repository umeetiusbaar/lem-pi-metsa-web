import { useEffect, useState } from "react";

const MonthlyImage = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1; // get current month (1-12)
    const imageSrc = `/images/${currentMonth}.jpg`; // use current month to determine image filename
    setImageUrl(imageSrc);
  }, []);

  return <img src={imageUrl} alt="Monthly Image" />;
};

export default MonthlyImage;
