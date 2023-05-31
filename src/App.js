import { useState} from 'react';
import MoviesContext  from './context/MoviesContext';
import './App.css';

import { Header, Main } from './containers';


function App() {
  const [movies, setMovies] = useState([])

  return (
    <MoviesContext.Provider value={{
      movies,
      setMovies
    }}>
      <Header />
      <Main />
    </MoviesContext.Provider>
  );
}

export default App;
