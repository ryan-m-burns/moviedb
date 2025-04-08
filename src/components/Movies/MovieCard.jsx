import './MovieCard.css';

export default function MovieCard({ movie }) {
  return (
    <div className='movie-card'>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className='movie-poster'
      />
      <h2 className='movie-title'>{movie.title}</h2>
      <p className='movie-overview'>{movie.overview}</p>
      <p className='movie-release-date'>{movie.release_date}</p>
    </div>
  );
}
