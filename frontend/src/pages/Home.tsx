import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", release_date: "2020", url: "" },
    { id: 2, title: "Terminator", release_date: "2022", url: "" },
    { id: 3, title: "Jurrassic Park", release_date: "2022", url: "" },
  ];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            title={movie.title}
            release_date={movie.release_date}
            url={movie.url}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
