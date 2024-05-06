import React, { useState } from 'react';
import logo from "../assets/used/logo.svg";
import AltButton from "../components/AltButton";
import MainButton from "../components/MainButton";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-lilac opacity-90">
      <div className="container mx-auto md:min-w-3xl sm:min-w-lg h-24 flex justify-between items-center">
      <Link to="/">
        <div className='logo'>
          <img src={logo} alt=""/>
        </div>
        </Link>


  <div className="lg:hidden">
    <button className="btn btn-circle swap swap-rotate" onClick={toggleMenu}>
      <svg className={`swap-${isMenuOpen ? 'on' : 'off'} fill-current`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
            {isMenuOpen ? 
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/> 
              : 
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
            }
        </svg>
    </button>
  </div>
          
        <nav className={`lg:flex flex gap-6 items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
        {currentPath!=='/help'&&(
        <Link to="/help">Поддержка</Link>
        )}

          {currentPath!=='/signin'&&(<Link to="/signin">
          <AltButton text="Войти"></AltButton>
          </Link>
          )}

          {currentPath!=='/signup'&&(<Link to="/signup">
            <MainButton text="Зарегистрироваться"></MainButton>
            </Link>
          )}
        </nav>


        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center transition-all duration-300" style={{display: isMenuOpen ? 'flex' : 'none'}}>
          <div className={`overlay absolute inset-0 bg-white bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={toggleMenu}></div>
            <ul className="menu p-4">
            <Link to="/help">Поддержка</Link>
          
              {currentPath!=='/signin'&&(<Link to="/signin">
              <AltButton text="Войти"></AltButton>
              </Link>
              )}

              {currentPath!=='/signup'&&(<Link to="/signup">
              <MainButton text="Зарегистрироваться"></MainButton>
              </Link>
              )}
            </ul>
            </div>
         </div>
    </header>
  )
}
  
export default Header;