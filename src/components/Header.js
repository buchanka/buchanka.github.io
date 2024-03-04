import React from 'react';
import './Header.css';
import MyButtons from './MyButtons';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <div>
      <header className="header">
        <nav className="navigation">
          <div className='language-link'>
            {/*<img src={logo} alt='logo' className="language-link"></img>*/}
          </div>
          <div className="navigation-links">
            <a href='#' className="support-link">Поддержка</a>
            <a href='#' className="login-button">Войти</a>
            <MyButtons text="Зарегистрироваться" />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
      