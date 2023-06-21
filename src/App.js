import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer } from './containers';
import AppRouter from './components/appRouter/AppRouter';
import './App.css';
import { MoviesProvider } from './context/MoviesContext';

function App() {
  return (
    <div className='container'>
      <MoviesProvider>
        <Router>
          <Header />
          <AppRouter />
          <Footer />
        </Router>
      </MoviesProvider>
    </div>
  );
}

export default App;
