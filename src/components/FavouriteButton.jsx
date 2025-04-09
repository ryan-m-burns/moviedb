import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import './FavouriteButton.css';

export default function FavouriteButton({ movie }) {
  const { favourites, addFavourite, removeFavourite } =
    useContext(GlobalContext);

  const isFavourite = favourites.find((fav) => fav.id === movie.id);

  function handleClick(event) {
    event.stopPropagation();
    if (isFavourite) {
      removeFavourite(movie);
    } else {
      addFavourite(movie);
    }
  }
  return <button onClick={handleClick}>{isFavourite ? '❤️' : '🤍'}</button>;
}
