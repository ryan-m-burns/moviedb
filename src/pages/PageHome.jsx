import './PageHome.css';
import { getPopularMovies } from '../utils/api';
import { useEffect, useState } from 'react';
import Movies from '../components/Movies/Movies';
export default function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        setPopularMovies(data.results);
      })
      .catch((error) => {
        console.error('Error fetching popular movies:', error);
      });
  }, []);

  console.log(popularMovies);

  return (
    <div>
      <h1>Page Home</h1>
      <Movies title='Popular Movies' movies={popularMovies} />
    </div>
  );
}
