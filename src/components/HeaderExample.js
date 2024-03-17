
import Link from './Link';
import MainButton from './MainButton';
import AltButton from './AltButton';
import StarIcon from './StarIcon';
import HeaderBgIcon from './HeaderBgIcon';
import './HeaderExample.css'
import './vector4Icon'
import resets from './Reset.css'


function Header(props) {
  return (
    <header className='flex justify-between items-center '>
        <div className='vector4Icon'>
          <vector4Icon></vector4Icon>
        </div>
          
        <div className='iconStar'>
          <StarIcon></StarIcon>
        </div>
        <div className='langlink-logo'>langlink</div>
      
      <nav className='flex gap-4'>
        <div className='support'>
        <Link url="#help" text="Поддержка" />
        </div>
        <AltButton text="Войти" />
        <MainButton text="Зарегистрироваться" />
      </nav>
    </header>
  )
}

export default Header;