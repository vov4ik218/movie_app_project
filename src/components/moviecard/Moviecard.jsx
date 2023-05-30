import React from 'react';
import './moviecard.css';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Moviecard = ({ title, poster_path, vote_average, release_date, overview }) => {
  return (
    <div className='film-container'>
      <div className='card'>
        <a className='card-img__wrapper' href='/some/valid/uri'>
          <img src={API_IMG + poster_path} alt='img film'></img>
        </a>
        <a className='card__name' href='/some/valid/uri'>{title}</a>
        <div className='card__options'>
        <a className='card__release' href='/some/valid/uri'>Release date: {release_date},</a>
          <a className='card__average' href='/some/valid/uri' >{vote_average}★</a>
          
        </div>
        {/* <p className='card__overview'>{overview}</p> */}
      </div>
    </div>
  )
}

export default Moviecard;