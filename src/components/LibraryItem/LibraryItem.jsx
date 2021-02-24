import React from "react";
import { useHistory } from "react-router-dom";

const LibraryItem = ({ id, title, libraryId }) => {
  const history = useHistory();

  const handleViewClick = () => {
    history.push(`/library/${libraryId}/item/${id}`);
  };

  return (
    <div className="list-item">
      <p className="list-item-title">
        <b>Title:</b> {title}
      </p>
      <button onClick={handleViewClick}>View</button>
    </div>
  );
};

export default LibraryItem;
