import React from 'react';
import { useLocation } from 'react-router-dom';
import './filmpage.css';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const FilmPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const title = searchParams.get('title');
  const posterPath = decodeURIComponent(searchParams.get('poster_path'));
  const voteAverage = searchParams.get('vote_average');
  const releaseDate = searchParams.get('release_date');
  const overview = searchParams.get('overview');

  return (
    <div className='film-page'>
      <h2>Film Page</h2>
      <div>Title: {title}</div>
      <img src={API_IMG + posterPath} alt='img film'></img>
      <div>Vote Average: {voteAverage}</div>
      <div>Release Date: {releaseDate}</div>
      <div>Overview: {overview}</div>
    </div>
  );
};

export default FilmPage;
