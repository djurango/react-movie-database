import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Content from "./content";
import { useFetch } from "./useFetch";

import "./styles.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);

  const res = useFetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=d7fc424ee402bd0666f5f420c5201966&page=1&region=CH"
  );

  if (res.data && res.data.results && movies.length === 0) {
    setMovies(res.data.results);
    setIsLoading(false);
  }

  if (res.error && isLoading) {
    console.log(res.error);
    setIsLoading(false);
  }

  const handlePosterClick = id => {
    if (selectedMovies.includes(id)) {
      setSelectedMovies(selectedMovies.filter(existingId => existingId !== id));
    } else {
      setSelectedMovies([...selectedMovies, id]);
    }
  };

  return (
    <div className="app">
      <Header count={selectedMovies.length} />
      <Content
        isLoading={isLoading}
        movies={movies}
        selectedMovies={selectedMovies}
        handlePosterClick={handlePosterClick}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
