import { API_KEY, BASE_URL } from '../globals/globals.js';

function getPopularMovies() {
  return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch popular movies');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching popular movies:', error);
      throw error;
    });
}

function getNowPlayingMovies() {
  return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch now playing movies');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching now playing movies:', error);
      throw error;
    });
}

function getTopRatedMovies() {
  return fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch top rated movies');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching top rated movies:', error);
      throw error;
    });
}

function getRecommendedMovies(movieId) {
  return fetch(
    `${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch recommended movies');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching recommended movies:', error);
      throw error;
    });
}
// function getMoviesByGenre(genreId) {
//   return fetch(
//     `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch movies by genre');
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       console.error('Error fetching movies by genre:', error);
//       throw error;
//     });
// }

function getMovieById(id) {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch movie');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching movie by ID:', error);
      throw error;
    });
}

export {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getRecommendedMovies,
  getMovieById,
};
