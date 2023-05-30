import React from 'react'
import './navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <h2 className='navbar__logo'>ex-fs.net</h2>
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
            <form method="get" action="/search">
                <input className='search-input' type="text" id="search-input" name="search" placeholder="Movie search..." />
                <button type="submit">Find</button>
            </form>
            <div className='authorization'>
                Authorization
            </div>
        </div>
    )
}

export default Navbar;