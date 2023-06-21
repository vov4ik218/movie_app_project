import React, { createContext, useState } from 'react';

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});

  const searchMovies = async (query) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=eb6a56654b4fdf0a6e9c0cccffa58e4e&query=${query}`;
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MoviesContext.Provider
      value={{ movies, setMovies, movie, setMovie, searchMovies }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesProvider, MoviesContext };
