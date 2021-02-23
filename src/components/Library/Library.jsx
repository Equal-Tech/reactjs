import React from "react";
import LibraryItem from "../LibraryItem/LibraryItem";
import { getLibraryItems } from "../../services/libraryServices";

const Library = ({ name, id }) => {
  const items = getLibraryItems(id);
  return (
    <>
      {name ? (
        <>
          <h2>{name}</h2>
          {items.map((item) => {
            return (
              <LibraryItem
                id={item.id}
                title={item.title}
                author={item.author}
                genre={item.genre}
                key={item.id}
              />
            );
          })}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Library;
