import { useContext, useEffect, useState } from 'react';
import MovieCard from '../../components/moviecard/MovieCard';
import MoviesContext from '../../context/MoviesContext';
import './main.css';
import { Link } from 'react-router-dom';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=eb6a56654b4fdf0a6e9c0cccffa58e4e";

const Main = () => {

  const { movies, setMovies } = useContext(MoviesContext);
  const [showMovies, setShowMovies] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        setMovies(data.results);
      })
  }, [setMovies]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMovies(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);


  return (
<div className='main'>
      {showMovies ? (
        movies.length > 0 ? (
          <div className='main-container'>
            {movies.map((movie) => (
              <Link to={`/film/${movie.id}`} key={movie.id}>
                <MovieCard {...movie} />
              </Link>
            ))}
          </div>
        ) : (
          <div className='find-error-content'>
            <h2>Information</h2>
            <p>Sorry, site search did not return any results. Try changing or shortening your request.</p>
            <p>Try also to search by English movie title or movie id search.</p>
          </div>
        )
      ) : (
        <h2 className='loading-main'>Loading...</h2>
      )}
    </div>

  )
}

export default Main;