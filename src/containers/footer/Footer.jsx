import { useContext } from 'react';
import './footer.css';
import MoviesContext from '../../context/MoviesContext';

const Footer = () => {
  const { movies } = useContext(MoviesContext);

  return (
    <div className={movies.length > 0 ? "footer" : "footer active-footer"}>
      <p className='footer-content'>Copyright (c) 2023</p>
    </div>
  )
}

export default Footer;