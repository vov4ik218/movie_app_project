import { useLocation } from 'react-router-dom';
import './filmpage.css';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

const FilmPage = (movie) => {
  console.log(movie)
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const title = searchParams.get('title');
  const posterPath = decodeURIComponent(searchParams.get('poster_path'));
  const voteAverage = searchParams.get('vote_average');
  const releaseDate = searchParams.get('release_date');
  const overview = searchParams.get('overview');
  const popularity = searchParams.get('popularity');
  const voteCount = searchParams.get('vote_count');

  return (
    <div className='film-page'>
      <h2 className='film-page_title'>{title}</h2>
      <div className='film-page-info'>
        <div className='film-page__content'>
          <div className='card-img__wrapper'>
            <img src={API_IMG + posterPath} alt='img film' />
          </div>
          <p className='film-page__average'>Vote Average: {voteAverage}</p>
          <p className='film-page__release'>Release Date: {releaseDate}</p>
          <p className='film-page__popularity'>popularity: {popularity}</p>
          <p className='film-page__popularity'>vote_count: {voteCount}</p>
        </div>
        <p className='film-page__overview'>
          Overview: <br />
          {overview}
        </p>
      </div>
    </div>
  );
};

export default FilmPage;
