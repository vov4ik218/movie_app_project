import { useState } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import MoviesContext from './context/MoviesContext';
import './App.css';

import { Header, Footer } from './containers';
import AppRouter from './components/appRouter/AppRouter';


function App() {
  const [movies, setMovies] = useState([])

  return (
    <MoviesContext.Provider value={{
      movies,
      setMovies
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
