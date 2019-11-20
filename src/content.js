import React from "react";
import MovieList from "./movie-list";

function Content({ isLoading, movies, selectedMovies, handlePosterClick }) {
  return isLoading ? (
    <img
      src="https://icon-library.net/images/spinner-icon-gif/spinner-icon-gif-28.jpg"
      alt="loading"
    />
  ) : (
    <MovieList
      movies={movies}
      selectedMovies={selectedMovies}
      handlePosterClick={handlePosterClick}
    />
  );
}

export default Content;
