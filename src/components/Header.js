import React from 'react';
import '../css/Header.css';
import Logo from '../images/RamcesLogoMint.jpg';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <img 
                src={Logo}
                alt="Logo" 
                className="header__logo"
            />

            <div className="header__nav">
                <NavLink exact to="/" className="link"><span className="header__buttons">Home</span></NavLink>
                <NavLink to="/about" className="link"><span className="header__buttons">About</span></NavLink>
                <NavLink to="/projects" className="link"><span className="header__buttons">Projects</span></NavLink>
            </div>
        </div>
    )
}

export default Header
