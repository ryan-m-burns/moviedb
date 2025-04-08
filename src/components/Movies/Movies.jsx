import './Movies.css';
import MovieCard from './MovieCard';

export default function Movies({ title, movies }) {
  return (
    <div className='movies'>
      <h1>{title}</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      {movies.length === 0 && (
        <div className='no-movies'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}
