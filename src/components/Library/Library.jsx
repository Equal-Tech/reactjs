import React, { useEffect, useState } from "react";
import LibraryItem from "../LibraryItem/LibraryItem";

const Library = ({ name, id, items }) => {
  return (
    <>
      {name ? (
        <>
          <h2>{name}</h2>
          {items &&
            items.map((item) => {
              return (
                <LibraryItem
                  id={item.id}
                  libraryId={id}
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
