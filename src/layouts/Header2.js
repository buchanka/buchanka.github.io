import React, { useState } from 'react';
import logo from "../assets/used/logo.svg";
import MainButton from "../components/MainButton";
import { FaUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { RiUserSettingsFill } from "react-icons/ri";



function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-ghost z-10 opacity-80">
      <div className="container mx-auto md:min-w-3xl sm:min-w-lg h-24 flex justify-between items-center">
        <Link to="/">
          <div className='logo'>
            <img src={logo} alt="logo"/>
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



  {/*desktop nav */}
        <nav className={`hidden lg:flex gap-6 items-center`}>
        
          <Link to="/help">
            <RiUserSettingsFill className="size-7"></RiUserSettingsFill>
            <span className="text-darkgrey">Поддержка</span>
          </Link>
      
          
            <Link to="/profile">
              <FaUser className="size-7" />
              <span className="text-darkgrey">Профиль</span>
            </Link>
          
          
            <Link to="/community">
              <FaUserGroup className="size-7"></FaUserGroup>
              <span className="text-darkgrey">Сообщество</span>
            </Link>
          
          
            <Link to="/messages">
              <AiFillMessage className="size-7"></AiFillMessage>
              <span className="text-darkgrey">Сообщения</span>
            </Link>
          

          <Link to="/signin">
            <MainButton text="Выйти" />
          </Link>
        </nav>


      {/*burger nav */}  
      <div className={"lg:hidden fixed right-28 top-16 w-64 h-80 bg-white flex-col justify-center items-center transition-all duration-300 " + (isMenuOpen ? 'flex' : 'hidden')}>
        <div className={`overlay absolute inset-0 bg-white bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={toggleMenu}>
          <ul className="menu p-4 flex flex-col gap-2">
            <Link className='self-center' to="/help">
              <RiUserSettingsFill className="size-7"></RiUserSettingsFill>
              <span className="text-darkgrey">Поддержка</span>
            </Link>
            
              <Link className='self-center' to="/profile">
                <FaUser className="size-7" />
                <span className="text-darkgrey">Профиль</span>
              </Link>
            
            
              <Link className='self-center' to="/community">
                <FaUserGroup className="size-7"></FaUserGroup>
                <span className="text-darkgrey">Сообщество</span>
              </Link>
            
            
              <Link className='self-center' to="/messages">
                <AiFillMessage className="size-7"></AiFillMessage>
                <span className="text-darkgrey">Сообщения</span>
              </Link>
           

            <Link className='self-center' to="/signin">
              <MainButton text="Выйти" />
            </Link>
          </ul>
        </div>
      </div>
      </div>
    </header>
  );
}

export default Header2;


