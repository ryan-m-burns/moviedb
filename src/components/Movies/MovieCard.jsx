import './MovieCard.css';
import { IMG_URL } from '../../globals/globals';
import { formatReleaseDate, formatRating } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import FavouriteButton from '../FavouriteButton';

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/movie/${movie.id}`)} className='movie-card'>
      <img
        src={`${IMG_URL}w342${movie.poster_path}`}
        alt={movie.title}
        className='movie-poster'
      />
      <div className='backdrop'>
        <div className='title-and-release'>
          <h2>{movie.title}</h2>
          <p>{formatReleaseDate(movie.release_date)}</p>
        </div>
      </div>
      <div className='rating-and-favourite'>
        <p>{formatRating(movie.vote_average)}</p>

        <FavouriteButton movie={movie} />
      </div>
    </div>
  );
}
