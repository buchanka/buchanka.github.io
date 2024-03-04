import logo from '../assets/logo.webp';
import Link from './Link';
import MainButton from './MainButton';
import AltButton from './AltButton';
import StarIcon from './StarIcon';
import HeaderBgIcon from './HeaderBgIcon';
import './HeaderExample.css'
function Header() {
  return (
    <header className='flex justify-between items-center bg-lilac'>
        <div className='headerBg'>
          <HeaderBgIcon className="headerBg"/>
        </div>
      <div className='iconStar'>
        <StarIcon></StarIcon>
        {/*<img src={logo} alt='Logo' title='Logo' />*/}
      </div>
      <div className='langlink-logo'>langlink</div>
      <nav className='flex gap-4'>
        <Link url="#help" text="Поддержка" />
        <AltButton text="Войти" />
        <MainButton text="Зарегистрироваться" />
      </nav>
    </header>
  )
}

export default Header;