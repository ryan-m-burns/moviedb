import './MovieCard.css';
import { IMG_URL } from '../../globals/globals';
export default function MovieCard({ movie }) {
  return (
    <div className='movie-card'>
      <img
        src={`${IMG_URL}w342${movie.poster_path}`}
        alt={movie.title}
        className='movie-poster'
      />
      <div className='backdrop'>
        <div className='title-and-release'>
          <h2>{movie.title}</h2>
          <p>{movie.releaßse_date}</p>
        </div>
      </div>
      <div className='rating-and-favorite'>
        <p>{movie.vote_average}</p>
        <button>❤️</button>
      </div>
    </div>
  );
}
