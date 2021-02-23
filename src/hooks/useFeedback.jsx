import { useEffect, useState } from "react";

const useFeedback = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);

    fetch("https://6025712536244d001797c3d8.mockapi.io/feedback")
      .then((result) => result.json())
      .then((data) => {
        setFeedback(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { feedback, isLoading, error };
};

export default useFeedback;
