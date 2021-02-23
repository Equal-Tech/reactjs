import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import GetLibraryItem from "../../hooks/getLibraryItem";

const ItemPage = () => {
  const { id, libraryId } = useParams();
  const history = useHistory();
  const [timeOnPage, setTimeOnPage] = useState(0);
  const { item, isLoading, error } = GetLibraryItem(libraryId, id);

  useEffect(() => {
    const timeOnPageInterval = setInterval(
      () => setTimeOnPage((prevTimeOnPage) => prevTimeOnPage + 1),
      1000
    );

    return () => clearTimeout(timeOnPageInterval);
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>There was an error: {error}</p>}
      {item && (
        <>
          <div className="list-item-title">Name: {item.title}</div>
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
