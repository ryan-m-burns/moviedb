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

export { getPopularMovies, getMovieById };
