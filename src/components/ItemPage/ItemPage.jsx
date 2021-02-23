import React, { useEffect, useState } from "react";
import { getLibraryItemDetails } from "../../services/libraryServices";
import { useParams, useHistory } from "react-router-dom";

const ItemPage = () => {
  const { id } = useParams();
  const item = getLibraryItemDetails(id);
  const history = useHistory();

  const [timeOnPage, setTimeOnPage] = useState(0);

  useEffect(() => {
    const timeOnPageInterval = setInterval(
      () => setTimeOnPage((prevTimeOnPage) => prevTimeOnPage + 1),
      1000
    );

    return () => clearTimeout(timeOnPageInterval);
  }, []);

  return (
    <>
      <div className="list-item-title">Name: {item.title}</div>
      <div className="list-item-author">Author: {item.author}</div>
      {item.genre ? (
        <div className="list-item-genre">Genre: {item.genre}</div>
      ) : (
        ""
      )}
      <button onClick={() => history.push("/")}>Back</button>

      <div>You've spent {timeOnPage} seconds on this page.</div>
    </>
  );
};

export default ItemPage;
