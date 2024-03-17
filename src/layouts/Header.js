import logo from "../assets/used/logo.svg";
import AltButton from "../components/AltButton";
import MainButton from "../components/MainButton";
import Link from "../components/Link"

function Header() {
  return (
    <div className="header">
      <header className='flex justify-between items-center '>
        <div className='logo'>
          <img src={logo} />
        </div>
          
        <nav className='flex gap-4 items-center'>
          <Link url="#help" text="Поддержка" />
          <AltButton text="Войти" />
          <MainButton text="Зарегистрироваться" />
        </nav>
      </header>
    </div>
  )
}
  
export default Header;