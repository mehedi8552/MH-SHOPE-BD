import React from 'react';
import Logo from '../../images/MH SHOPE.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
            <img id='logo' height={40} src={Logo} alt="" />
                <a href="">Shope</a>
                <a href="">Order Review</a>
                <a href="">Manage inventory</a>
            </nav>
        </div>
    );
};

export default Header;