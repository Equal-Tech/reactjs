import React from "react";
import { useParams, useHistory } from "react-router-dom";
import UseItem from "../../hooks/useItem";
import usePageTimer from "../../hooks/usePageTimer";
import ItemForm from "../ItemForm/ItemForm";

const ItemPage = () => {
  const { id, libraryId } = useParams();
  const { item, error, isLoading } = UseItem(id, libraryId);
  const history = useHistory();
  const { timeOnPage } = usePageTimer();

  const onClickBack = () => {
    history.push("/");
  };

  const onClickDelete = () => {
    fetch(
      `https://601598ce55dfbd00174ca670.mockapi.io/libraries/${libraryId}/items/${id}`,
      { method: "DELETE" }
    )
      .then(history.push("/"))
      .catch((error) => console.log(error));
  };

  const onSubmit = (values) => {
    console.log("Submitting form with values:", values);
    fetch(
      `https://601598ce55dfbd00174ca670.mockapi.io/libraries/${libraryId}/items/${id}`,
      {
        method: "PUT",
        body: {
          title: values.title,
          creator: values.creator,
          genre: values.genre
        }
      }
    )
      .then(history.push("/"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>There was an error: {error}</p>}
      {item && (
        <>
          <div className="list-item-title">Name: {item.title}</div>
          <div className="list-item-author">Creator: {item.creator}</div>
          {item.genre ? (
            <div className="list-item-genre">Genre: {item.genre}</div>
          ) : (
            ""
          )}
        </>
      )}
      <button onClick={onClickBack}>Back</button>
      <button onClick={onClickDelete}>Delete</button>
      <h2>Edit:</h2>
      <ItemForm onSubmit={onSubmit} />
      <div>You've spent {timeOnPage} seconds on this page.</div>
    </>
  );
};

export default ItemPage;
