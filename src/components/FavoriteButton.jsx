import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import './FavoriteButton.css';

export default function FavoriteButton({ movie }) {
  const { favorites, addFavorite, removeFavorite } = useContext(GlobalContext);

  const isFavorite = favorites.find((fav) => fav.id === movie.id);

  function handleClick(event) {
    event.stopPropagation();
    if (isFavorite) {
      removeFavorite(movie);
    } else {
      addFavorite(movie);
    }
  }
  return <button onClick={handleClick}>{isFavorite ? '❤️' : '🤍'}</button>;
}
