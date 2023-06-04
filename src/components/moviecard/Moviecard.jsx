import { Link } from 'react-router-dom';
import './moviecard.css';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ title, poster_path, vote_average, release_date, overview }) => {

  const queryParams = new URLSearchParams({
    title,
    poster_path,
    vote_average,
    release_date,
    overview
  });

  const filmPageUrl = `/film?${queryParams.toString()}`;

  return (
    <div className='card'>
      <Link to={filmPageUrl}>
        <div className='card-img__wrapper'>
          <img src={API_IMG + poster_path} alt='img film'></img>
        </div>
        <div className='card__name'>{title}</div>
        <div className='card__options'>
          <div className='card__release'>Release date: {release_date}</div>
          <div className='card__average'>{vote_average}★</div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;