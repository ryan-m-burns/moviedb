import './PageFavourites.css';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Movies from '../components/Movies/Movies';
import { getRecommendedMovies } from '../utils/api';
import HeroCard from '../components/Movies/HeroCard';

export default function PageFavourites() {
  const { favourites } = useContext(GlobalContext);
  const [randomFavouriteMovie, setRandomFavouriteMovie] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    if (favourites.length > 0) {
      const randomIndex = Math.floor(Math.random() * favourites.length);
      setRandomFavouriteMovie(favourites[randomIndex]);
    }
  }, [favourites]);

  useEffect(() => {
    if (randomFavouriteMovie) {
      getRecommendedMovies(randomFavouriteMovie.id)
        .then((data) => {
          setRecommendedMovies(data.results);
        })
        .catch((error) => {
          console.error('Error fetching recommended movies:', error);
        });
    }
  }, [randomFavouriteMovie]);

  return (
    <div>
      {favourites.length === 0 ? (
        <h1 className='no-favourites'>No Favourites Yet</h1>
      ) : (
        <>
          {randomFavouriteMovie && (
            <>
              <HeroCard movie={randomFavouriteMovie} />
              <Movies title='Favourites' movies={favourites} />
              <Movies
                title={`If you liked ${randomFavouriteMovie.title}, you may also like...`}
                movies={recommendedMovies}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
