import React from 'react';
import Logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img id='logo' src={Logo} alt="" />
            <nav>
                <a href="">Shope</a>
                <a href="">Order Review</a>
                <a href="">Manage inventory</a>
            </nav>
        </div>
    );
};

export default Header;