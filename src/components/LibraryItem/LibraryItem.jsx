import React from "react";
import { getLibraryItemDetails } from "../../services/libraryServices";
import { useHistory } from "react-router-dom";

const LibraryItem = ({ id, title }) => {
  const history = useHistory();

  return (
    <div className="list-item">
      <p className="list-item-title">
        <b>Title:</b> {title}
      </p>
      <button onClick={() => history.push(`/item/${id}`)}>View</button>
    </div>
  );
};

export default LibraryItem;
