import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [favourites, setFavourites] = useState(loadFavsFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  function loadFavsFromLocalStorage() {
    const favs = localStorage.getItem('favourites');
    if (favs) return JSON.parse(favs);
    else return [];
  }

  function addFavourite(movie) {
    setFavourites([...favourites, movie]);
  }

  function removeFavourite(movie) {
    setFavourites(favourites.filter((fav) => fav.id !== movie.id));
  }

  return (
    <GlobalContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalProvider, GlobalContext };
