import './MovieCard.css';
import { IMG_URL } from '../../globals/globals';
import { formatReleaseDate, formatRating } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import FavouriteButton from '../FavouriteButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/movie/${movie.id}`)} className='movie-card'>
      <img
        src={`${IMG_URL}w342${movie.poster_path}`}
        srcSet={`
          ${IMG_URL}w154${movie.poster_path} 154w,
          ${IMG_URL}w185${movie.poster_path} 185w,
          ${IMG_URL}w342${movie.poster_path} 342w,
          ${IMG_URL}w500${movie.poster_path} 500w,
          ${IMG_URL}w780${movie.poster_path} 780w
        `}
        sizes='
          (max-width: 600px) 154px,
          (max-width: 900px) 185px,
          (max-width: 1200px) 342px,
          (max-width: 1800px) 500px,
          780px
        '
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
        <p>
          <FontAwesomeIcon icon={faStar} />
          {formatRating(movie.vote_average)}
        </p>

        <FavouriteButton movie={movie} />
      </div>
    </div>
  );
}
