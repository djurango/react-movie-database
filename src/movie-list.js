import React from "react";
import Movie from "./movie";

const imageBasePath = "https://image.tmdb.org/t/p/w185/";

function MovieList({ movies, selectedMovies, handlePosterClick }) {
  return (
    <div className="movie-list">
      {movies.map(movie => {
        return (
          <Movie
            key={movie.id}
            id={movie.id}
            original_title={movie.original_title}
            title={movie.title}
            voting={movie.vote_average}
            image={imageBasePath + movie.poster_path}
            selected={selectedMovies.includes(movie.id)}
            handlePosterClick={handlePosterClick}
          />
        );
      })}
    </div>
  );
}

MovieList.displayName = "MovieList";

export default MovieList;
