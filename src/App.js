import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MoviesContext from './context/MoviesContext';
import { Header, Footer } from './containers';
import AppRouter from './components/appRouter/AppRouter';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const[movie, setMovie] = useState({});

  return (
    <MoviesContext.Provider value={{
      movies,
      setMovies,
      movie,
      setMovie
    }}>
      <Router>
        <Header />
        <AppRouter />
        <Footer />
      </Router>
    </MoviesContext.Provider>
  );
}

export default App;
