import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [favorites, setFavorites] = useState(loadFavsFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  function loadFavsFromLocalStorage() {
    const favs = localStorage.getItem('favorites');
    if (favs) return JSON.parse(favs);
    else return [];
  }

  function addFavorite(movie) {
    setFavorites([...favorites, movie]);
  }

  function removeFavorite(movie) {
    setFavorites(favorites.filter((fav) => fav.id !== movie.id));
  }

  return (
    <GlobalContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalProvider, GlobalContext };
