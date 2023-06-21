import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import Search from '../search/Search';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/">
                <h2 className='navbar__logo'>ex-fs.net</h2>
            </Link>
            <nav className='nav__list'>
                <ul className='list'>
                    <li className='list__item'>
                        <a className='list__link link' href='/some/valid/uri'>Categories</a>
                    </li>
                    <li className='list__item'>
                        <a className='list__link link' href='/some/valid/uri'>Movies</a>
                    </li>
                    <li className='list__item'>
                        <a className='list__link link' href='/some/valid/uri'>Cartoons</a>
                    </li>
                    <li className='list__item'>
                        <a className='list__link link' href='/some/valid/uri'>Broadcasts and shows</a>
                    </li>
                </ul>
            </nav>
            <Search />
            <div className='authorization'>
                Authorization
            </div>
        </div>
    )
}

export default Navbar;