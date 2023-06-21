import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import {MoviesContext} from '../../context/MoviesContext';
import Main from '../../containers/main/Main';
import FilmPage from '../filmPage/FilmPage';
// import Search from '../../components/search/Search';

const AppRouter = () => {

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/film' element={<FilmPage />} />
      {/* <Route path='/search' element={<Search />} /> */}
    </Routes>
  );
};

export default AppRouter;
