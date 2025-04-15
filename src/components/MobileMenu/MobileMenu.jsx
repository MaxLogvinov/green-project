import HeaderList from '../Header/HeaderList';
import Logo from '../Logo/Logo';
import './MobileMenu.css';

function MobileMenu() {
  const handleOnClick = () => {
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.classList.remove('mobile-menu_opened');
    document.body.classList.remove('no-scroll');
  };

  return (
    <aside className="mobile-menu">
      <div className="mobile-menu__container">
        <Logo />
        <button onClick={handleOnClick} className="mobile-menu__close-button"></button>
      </div>
      <nav className="mobile-menu__navigation">
        <HeaderList handleOnClick={handleOnClick} />
      </nav>
    </aside>
  );
}

export default MobileMenu;
