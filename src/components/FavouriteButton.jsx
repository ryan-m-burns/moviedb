import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import './FavouriteButton.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  return (
    <button className='favourite-btn' onClick={handleClick}>
      {isFavourite ? (
        <FontAwesomeIcon
          icon={faHeart}
          className='filled-heart'
          style={{ opacity: 1 }}
        />
      ) : (
        <FontAwesomeIcon icon={faHeart} className='hollow-heart' />
      )}
    </button>
  );
}
