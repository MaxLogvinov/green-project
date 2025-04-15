import './Header.css';

function HeaderList() {
  return (
    <ul className="header__list">
      <li>
        <a className="header__item" href="#about-us">
          О нас
        </a>
      </li>
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
          Портфолио
        </a>
      </li>
      <li>
        <a className="header__item header__item_number" href="tel:+79647070326">
          +7 (964) 707 03 26
        </a>
      </li>
    </ul>
  );
}

export default HeaderList;
