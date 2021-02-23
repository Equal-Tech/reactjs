import { useState, useEffect } from "react";

const UseLibraries = () => {
  const [libraries, setLibraries] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://601598ce55dfbd00174ca670.mockapi.io/libraries")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setLibraries(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(`Error has occured: ${error}`);
        setIsLoading(false);
      });
  }, []);

  return {
    libraries: libraries,
    isLoading: isLoading,
    error: error
  };
};

export default UseLibraries;
