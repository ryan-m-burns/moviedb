import './PageHome.css';
import {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
} from '../utils/api';
import { useEffect, useState } from 'react';
import Movies from '../components/Movies/Movies';
import HeroCard from '../components/Movies/HeroCard';

export default function PageHome() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [heroMovie, setHeroMovie] = useState(false);

  const fetchMovies = async (fetchFunction, setState, errorMessage) => {
    try {
      const data = await fetchFunction();
      setState(data.results);
    } catch (err) {
      console.error(errorMessage, err);
    }
  };

  useEffect(() => {
    fetchMovies(
      getNowPlayingMovies,
      setNowPlayingMovies,
      'Error fetching now playing movies:'
    );
    fetchMovies(
      getTopRatedMovies,
      setTopRatedMovies,
      'Error fetching top rated movies:'
    );
    fetchMovies(
      getPopularMovies,
      setPopularMovies,
      'Error fetching popular movies:'
    );
  }, []);

  console.log('nowPlayingMovies', nowPlayingMovies);
  console.log('topRatedMovies', topRatedMovies);
  console.log('popularMovies', popularMovies);

  useEffect(() => {
    if (nowPlayingMovies.length > 0) {
      const randomIndex = Math.floor(Math.random() * nowPlayingMovies.length);
      setHeroMovie(nowPlayingMovies[randomIndex]);
    }
  }, [nowPlayingMovies]);

  return (
    <>
      <HeroCard movie={heroMovie} />
      <Movies title='Now Playing' movies={nowPlayingMovies} />
      <Movies title='Highly Rated' movies={topRatedMovies} />
      <Movies title="What's Popular" movies={popularMovies} />
    </>
  );
}
