import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-us" id="about-us">
      <div className="about-us__container">
        <p class="about-us__name">
          //
          <strong class="about-us__name-text">О НАС</strong>
        </p>
        <h2 className="about-us__title">Почему мы?</h2>
      </div>
      <div className="about-us__info-container">
        <ul className="about-us__info">
          <li className="about-us__info-item">
            Наша команда оказывает услуги профессионального озеленения помещений (офисы, ТЦ, БЦ) по
            всей стране.
            <br /> Мы создаем стильное и экологичное оформление живыми и искусственными растениями.
          </li>
          <li className="about-us__info-item">
            Наши партнеры – крупнейшие поставщики кашпо и растений, и мы можем подобрать материалы
            под любой дизайн-проект
          </li>
          <li className="about-us__info-item about-us__info-item_green">
            <div className="about-us__info-box">
              <span className="about-us__orders">
                <strong className="about-us__orders_number">&#8250;100&nbsp;</strong>заказов
              </span>
              <span className="about-us__orders">
                было выполнено <br /> за последний год
              </span>
            </div>
            <div className="about-us__info-box">
              <span className="about-us__orders">
                <strong className="about-us__orders_number">&#8250;1000&nbsp;</strong>м&#178;
              </span>
              <span className="about-us__orders">
                озеленили жилых и общественных
                <br /> интерьеров
              </span>
            </div>
          </li>
        </ul>
        <ul className="about-us__list">
          <li className="about-us__list-item">Опытный штат сотрудников</li>
          <li className="about-us__list-item">Индивидуальный подход к каждому проекту</li>
          <li className="about-us__list-item">Высокое качество выполнения работ</li>
          <li className="about-us__list-item">Нас рекомедуют наши Заказчики</li>
          <li className="about-us__list-item">Выполнение работ всегда в срок</li>
          <li className="about-us__list-item">Выгодные цены на услуги</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutUs;
