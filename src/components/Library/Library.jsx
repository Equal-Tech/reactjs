import React, { useEffect, useState } from "react";
import LibraryItem from "../LibraryItem/LibraryItem";

const Library = ({ name, id }) => {
  const [library, setLibrary] = useState();

  useEffect(() => {
    fetch(`https://601598ce55dfbd00174ca670.mockapi.io/libraries/${id}`)
      .then((response) => response.json())
      .then((data) => setLibrary(data));
  }, [id]);

  return (
    <>
      {name ? (
        <>
          <h2>{name}</h2>
          {library &&
            library.items.map((item) => {
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
