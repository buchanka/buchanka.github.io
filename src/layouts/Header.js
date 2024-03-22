import logo from "../assets/used/logo.svg";
import AltButton from "../components/AltButton";
import MainButton from "../components/MainButton";
import Link from "../components/Link"

function Header() {
  return (
    <header className="fixed w-full bg-lilac">
      <div className="container mx-auto md:min-w-3xl sm:min-w-lg h-24 flex justify-between items-center">
        <div className='logo'>
          <img src={logo} alt=""/>
        </div>
          
        <nav className='flex gap-4 items-center'>
          <Link url="#help" text="Поддержка" />
          <AltButton text="Войти" />
          <MainButton text="Зарегистрироваться" />
        </nav>
      </div>
    </header>
  )
}
  
export default Header;