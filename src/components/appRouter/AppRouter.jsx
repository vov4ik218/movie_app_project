import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '../../containers/main/Main';
import FilmPage from '../filmPage/FilmPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/film" element={<FilmPage />} />
      
    </Routes>
  );
};

export default AppRouter;