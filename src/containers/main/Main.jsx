import { useContext, useEffect, useState } from 'react';
import MovieCard from '../../components/moviecard/MovieCard';
import MoviesContext from '../../context/MoviesContext';
import './main.css';
import { Link } from 'react-router-dom';
import Loader from '../../components/loader/Loader';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=eb6a56654b4fdf0a6e9c0cccffa58e4e";

const Main = () => {

  const { movies, setMovie, setMovies, } = useContext(MoviesContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [setMovies]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='main'>
      {movies.length > 0 ? (
        <div className='main-container'>
          {movies.map((movie) => (
            <div key={movie.id}>
              <Link to={`/film/${movie.id}`} onClick={() => { setMovie(movie) }}>
                <MovieCard {...movie} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className='find-error-content'>
          <h2>Information</h2>
          <p>Sorry, site search did not return any results. Try changing or shortening your request.</p>
          <p>Try also to search by English movie title or movie id search.</p>
        </div>
      )}
    </div>
  );
}

export default Main;
