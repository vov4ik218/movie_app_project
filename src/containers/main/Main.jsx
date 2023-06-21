import { useContext, useEffect, useState } from 'react';
import MovieCard from '../../components/moviecard/MovieCard';
import FindError from '../../components/findError/FindError';
import {MoviesContext} from '../../context/MoviesContext';
import './main.css';
import Loader from '../../components/loader/Loader';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=eb6a56654b4fdf0a6e9c0cccffa58e4e";

const Main = () => {

  const { movies, setMovies } = useContext(MoviesContext);
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
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      ) : (
        <FindError />
      )}
    </div>
  );
}

export default Main;
