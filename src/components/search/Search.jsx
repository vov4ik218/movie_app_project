import { useState, useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import './search.css';
import search from '../../assets/search.png';

const Search = () => {
  const { searchMovies } = useContext(MoviesContext);
  const [query, setQuery] = useState('');

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log('Searching');
    try {
      await searchMovies(query);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <form className='form-search' onSubmit={searchMovie} autoComplete='off'>
        <input
          className='search-input'
          type='text'
          id='search-input'
          placeholder='Movie search...'
          aria-label='search'
          name='query'
          value={query}
          onChange={changeHandler}
        />
        <input className='search-img' type="submit" variant="secondary" />
          <img src={search} alt='search-img' />
        
      </form>
    </div>
  );
};

export default Search;

