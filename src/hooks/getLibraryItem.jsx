import { useEffect, useState } from "react";

const GetLibraryItem = (libraryId, itemId) => {
  const [item, setItem] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://601598ce55dfbd00174ca670.mockapi.io/libraries/${libraryId}/items/${itemId}`
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
  }, [libraryId, itemId]);

  return {
    item: item,
    isLoading: isLoading,
    error: error
  };
};

export default GetLibraryItem;
