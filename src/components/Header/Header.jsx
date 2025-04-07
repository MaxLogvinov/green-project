import Logo from '../Logo/Logo';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <h2 className="header__title">Зеленый проект</h2>
      </div>

      <nav>
        <ul className="header__list">
          <li>
            <a className="header__item" href="">
              Услуги
            </a>
          </li>
          <li>
            <a className="header__item" href="">
              Виды озеленения
            </a>
          </li>
          <li>
            <a className="header__item" href="">
              О нас
            </a>
          </li>
          <li>
            <a className="header__item" href="">
              Портфолио
            </a>
          </li>
          <li>
            <a className="header__item header__item_number" href="tel:+79647070326">
              +7 (964) 707 03 26
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
