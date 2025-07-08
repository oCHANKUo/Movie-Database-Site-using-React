import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MoiveContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard
              id={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              //url={movie.url}
              poster_path={movie.poster_path}
              key={movie.id}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No Favorites Movies Yet</h2>
      <p>Start adding movies to your favorite</p>
    </div>
  );
}

export default Favorites;
