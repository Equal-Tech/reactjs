import React from "react";
import LibraryItem from "../LibraryItem/LibraryItem";
import ItemForm from "../ItemForm/ItemForm";

const Library = ({ name, id, items }) => {
  const onSubmit = (values) => {
    console.log("Submitting form with values:", values);
    fetch(
      `https://601598ce55dfbd00174ca670.mockapi.io/libraries/${id}/items/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: values.title,
          creator: values.creator,
          genre: values.genre
        })
      }
    ).catch((error) => console.log(error));
  };

  return (
    <>
      {name ? (
        <>
          <h2>{name}</h2>
          {items.map((item) => (
            <LibraryItem
              id={item.id}
              libraryId={id}
              title={item.title}
              author={item.author}
              genre={item.genre}
              key={item.id}
            />
          ))}
          <h2>Add Item - {name}</h2>
          <ItemForm onSubmit={onSubmit} />
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Library;
