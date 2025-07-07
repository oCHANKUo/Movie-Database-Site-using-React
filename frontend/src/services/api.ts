// services/api.ts

const API_KEY = ""; //  TMDB API key
const BASE_URL = ""; //  TMDB base URL

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
}

interface MoviesResponse {
  results: Movie[];
}

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data: MoviesResponse = await response.json();
  return data.results;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data: MoviesResponse = await response.json();
  return data.results;
};
