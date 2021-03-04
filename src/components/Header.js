import React from 'react';
import '../scss/Header.scss';
import Logo from '../images/RamcesLogoMint.jpg';
import { NavLink, Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src={Logo} alt="Logo" className="header-logo" />
            </Link>

            <div className="header-nav">
                <NavLink exact to="/" className="link"><span className="header-buttons">Home</span></NavLink>
                <NavLink to="/about" className="link"><span className="header-buttons">About</span></NavLink>
                <NavLink to="/projects" className="link"><span className="header-buttons">Projects</span></NavLink>
            </div>
        </div>
    )
}

export default Header
