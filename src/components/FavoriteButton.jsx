import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import './FavoriteButton.css';

export default function FavoriteButton({ movie }) {
  const { favorites, addFavorite, removeFavorite } = useContext(GlobalContext);

  return <button>Favorite</button>;
}
