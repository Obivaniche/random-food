import React from 'react';
import './Header.css'
import headerLogo from '../../images/logo.svg';

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' alt='headerLogo' src={headerLogo} />
            <p className='header__logo-sub'>"Я выбираю тебя!"
            <br></br> Сервис рандомных ресторанов
            </p>
        </div>
    );
}

export default Header;
