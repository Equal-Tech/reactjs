const libraryJson = require("../../data/libraries.json");

export const getLibraries = () => {
  const libraries = libraryJson.libraries;
  return libraries.map((library) => {
    return {
      id: library.id,
      name: library.name
    };
  });
};

export const getLibraryItems = (id) => {
  const libraries = libraryJson.libraries;

  const library = libraries.find((item) => {
    return item.id === id;
  });

  return library.items.map((item) => {
    return {
      id: item.id,
      title: item.title,
      author: item.author
    };
  });
};

export const getLibraryItemDetails = (id) => {
  const libraries = libraryJson.libraries; // 1

  for (let library of libraries) {
    // 2
    const libraryItem = library.items.find((item) => item.id === id);

    if (libraryItem) {
      // 5
      return {
        title: libraryItem.title,
        author: libraryItem.author,
        genre: libraryItem.genre
      };
    }
  }

  return {
    title: "",
    author: "",
    genre: ""
  }; // 6
};
