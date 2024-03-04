import logo from '../assets/logo.webp';
import Link from './Link';
import MainButton from './MainButton';
import AltButton from './AltButton';

function Header() {
  return (
    <header className='flex justify-between items-center bg-lilac'>
      <div>
        <img src={logo} alt='Logo' title='Logo' />
      </div>
      <nav className='flex gap-4'>
        <Link url="#help" text="Поддержка" />
        <AltButton text="Войти" />
        <MainButton text="Зарегистрироваться" />
      </nav>
    </header>
  )
}

export default Header;