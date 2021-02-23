import React from "react";
import { useHistory } from "react-router-dom";

const LibraryItem = ({ id, libraryId, title }) => {
  const history = useHistory();

  return (
    <div className="list-item">
      <p className="list-item-title">
        <b>Title:</b> {title}
      </p>
      <button onClick={() => history.push(`library/${libraryId}/item/${id}`)}>
        View
      </button>
    </div>
  );
};

export default LibraryItem;
