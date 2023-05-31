import { useState, useContext } from 'react';
import  MoviesContext  from '../../context/MoviesContext';
import './search.css';


const Search = () => {
    const { setMovies } = useContext(MoviesContext);
    const [query, setQuery] = useState('');

    const searchMovie = async (e) => {
        e.preventDefault();
        console.log("Searching");
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=eb6a56654b4fdf0a6e9c0cccffa58e4e&query=${query}`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovies(data.results);
        }
        catch (e) {
            console.log(e);
        }
    }

    const changeHandler = (e) => {
        setQuery(e.target.value);
    }

    return (
        <div>
            <form method="get" action="/search" onSubmit={searchMovie} autoComplete="off">
                <input className='search-input'
                    type="text"
                    id="search-input"
                    placeholder="Movie search..."
                    aria-label="search"
                    name="query"
                    value={query} onChange={changeHandler}/>
                <button type="submit" variant="secondary">Find</button>
            </form>
        </div>
    )
}

export default Search;