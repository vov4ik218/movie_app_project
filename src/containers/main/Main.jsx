import React,{useEffect, useState} from 'react';
import './main.css';
import Moviecard from '../../components/moviecard/Moviecard';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=eb6a56654b4fdf0a6e9c0cccffa58e4e";

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    fetch(API_URL)
    .then((response) => response.json())
    .then(data=>{
      console.log(data)
      setMovies(data.results);
    })
  },[])


  return (
    <div className='main'>
        {movies.map((MovieReq)=>
      <Moviecard key={MovieReq.id}{...MovieReq}/>)}
    </div>
  )
}

export default Main;