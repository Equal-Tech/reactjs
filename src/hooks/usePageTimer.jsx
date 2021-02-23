import { useEffect, useState } from "react";

const usePageTimer = () => {
  const [timeOnPage, setTimeOnPage] = useState(0);

  useEffect(() => {
    const timeOnPageInterval = setInterval(
      () => setTimeOnPage((prevTimeOnPage) => prevTimeOnPage + 1),
      1000
    );

    return () => clearTimeout(timeOnPageInterval);
  }, []);

  return { timeOnPage };
};

export default usePageTimer;
