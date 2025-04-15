import Logo from '../Logo/Logo';
import './Header.css';
import HeaderList from './HeaderList';

function Header() {
  const handleOnClick = () => {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.classList.add('mobile-menu_opened');
    document.body.classList.add('no-scroll');
  };
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <h2 className="header__title">Зеленый проект</h2>
      </div>
      <nav className="header__navigation">
        <HeaderList />
      </nav>
      <button className="header__burger" onClick={handleOnClick}></button>
    </header>
  );
}

export default Header;
