import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const ItemPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const history = useHistory();
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const timeOnPageInterval = setInterval(
      () => setTimeOnPage((prevTimeOnPage) => prevTimeOnPage + 1),
      1000
    );

    return () => clearTimeout(timeOnPageInterval);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://601598ce55dfbd00174ca670.mockapi.io/libraries/1/items/${id}`)
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
  }, [id]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>There was an error: {error}</p>}
      {item && (
        <>
          <div className="list-item-title">Name: {item.name}</div>
          <div className="list-item-author">Author: {item.creator}</div>
          {item.genre ? (
            <div className="list-item-genre">Genre: {item.genre}</div>
          ) : (
            ""
          )}
        </>
      )}
      <button onClick={() => history.push("/")}>Back</button>
      <div>You've spent {timeOnPage} seconds on this page.</div>
    </>
  );
};

export default ItemPage;
