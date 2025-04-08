import './PageMovie.css';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../utils/api';
import { useState, useEffect } from 'react';

export default function PageMovie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMovieById(id)
      .then((movie) => setMovie(movie))
      .catch((error) => console.error('Error fetching movie:', error));
  }, [id]);

  return (
    <div className='page-movie'>
      <h1>Movie Details</h1>
      {movie ? (
        <div className='movie-details'>
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
            className='movie-poster'
          />
          <div className='movie-info'>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className='movie-backdrop'>
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
          alt={movie?.title}
          className='backdrop-image'
        />
        <div className='backdrop-overlay'></div>
        <div className='backdrop-content'>
          <h2>{movie?.title}</h2>
          <p>{movie?.overview}</p>
          <p>Release Date: {movie?.release_date}</p>
          <p>Rating: {movie?.vote_average}</p>
        </div>
      </div>
    </div>
  );
}
