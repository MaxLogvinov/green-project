import './Landing.css';

function Landing() {
  return (
    <section className="landing">
      <h1 className="landing__title">
        Создадим атмосферу <br /> уюта и комфорта <br /> в ваших пространствах
      </h1>
      <h2 className="landing__heading">Все виды интерьерного озеленения</h2>
      <h3 className="landing__subheading">Создаем пространства, в которых хочется жить</h3>
      <div className="landing__buttons">
        <button className="landing__button">Оставить заявку</button>
        <button className="landing__button landing__button_more">Узнать больше</button>
      </div>
    </section>
  );
}

export default Landing;
