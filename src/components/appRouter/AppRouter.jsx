import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import MoviesContext from '../../context/MoviesContext';

import Main from '../../containers/main/Main';
import FilmPage from '../filmPage/FilmPage';

const AppRouter = () => {
  const { movie } = useContext(MoviesContext);
  
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/film" element={<FilmPage {...movie}/>} />




    </Routes>
  );
};

export default AppRouter;