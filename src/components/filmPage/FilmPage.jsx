import './filmpage.css';


const API_IMG = "https://image.tmdb.org/t/p/w500/";

const FilmPage = ({ title, poster_path, vote_average, release_date, overview }) => {

  return (
    <div className='film-page'>
      <h2>Film Page</h2>
      <div>Title: {title}</div>
      <img src={API_IMG + poster_path} alt='img film'></img>
      <div>Vote Average: {vote_average}</div>
      <div>Release Date: {release_date}</div>
      <div>Overview: {overview}</div>
    </div>
  );
};

export default FilmPage;
