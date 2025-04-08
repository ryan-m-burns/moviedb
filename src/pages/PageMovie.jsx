import './PageMovie.css';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../utils/api';
import { useState, useEffect } from 'react';
import { IMG_URL } from '../globals/globals';
import { formatReleaseDate, formatRating } from '../utils/helpers';

export default function PageMovie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMovieById(id)
      .then((movie) => setMovie(movie))
      .catch((error) => console.error('Error fetching movie:', error));
  }, [id]);

  console.log('Movie:', movie);
  return (
    <div className='page-movie'>
      {movie && (
        <>
          <img
            src={`${IMG_URL}w780${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <h2>{movie.title}</h2>
          <button>❤️</button>
          <h3>{formatReleaseDate(movie.release_date)}</h3>
          <h3>{movie.runtime} min</h3>
          <h3>{formatRating(movie.vote_average)} ⭐</h3>
          <p>{movie.overview}</p>
        </>
      )}
    </div>
  );
}
/*{
    "adult": false,
    "backdrop_path": "/lqHt4icP1GTaNBeVTxTrwTZdoAW.jpg",
    "belongs_to_collection": null,
    "budget": 9895000,
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 80,
            "name": "Crime"
        }
    ],
    "homepage": "",
    "id": 1195430,
    "imdb_id": "tt27852049",
    "origin_country": [
        "IN"
    ],
    "original_language": "hi",
    "original_title": "देवा",
    "overview": "Dev Ambre, a ruthless cop, loses his memory in an accident just after he has finished solving a murder case and now has to reinvestigate it while keeping his memory loss a secret from everyone except DCP Farhan Khan.",
    "popularity": 485.463,
    "poster_path": "/4wKpglgZYMYpISMdThgdqS1TSQc.jpg",
    "production_companies": [
        {
            "id": 86347,
            "logo_path": "/ir79iQBhrXk9PJ5Pr9vlLjM4viO.png",
            "name": "Zee Studios",
            "origin_country": "IN"
        },
        {
            "id": 124042,
            "logo_path": "/yAphiXGgomJpDZfHYpjw3FX975R.png",
            "name": "Roy Kapur Films",
            "origin_country": "IN"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "IN",
            "name": "India"
        }
    ],
    "release_date": "2025-01-31",
    "revenue": 0,
    "runtime": 155,
    "spoken_languages": [
        {
            "english_name": "Hindi",
            "iso_639_1": "hi",
            "name": "हिन्दी"
        }
    ],
    "status": "Released",
    "tagline": "",
    "title": "Deva",
    "video": false,
    "vote_average": 3.2,
    "vote_count": 13
}*/
