import { useEffect, useState } from "react";

const UseItem = (id, libraryId) => {
  const [item, setItem] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://601598ce55dfbd00174ca670.mockapi.io/libraries/${libraryId}/items/${id}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setItem(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(`Error has occurred: ${error}`);
        setIsLoading(false);
      });
  }, [id, libraryId]);

  return {
    item: item,
    error: error,
    isLoading: isLoading
  };
};

export default UseItem;
