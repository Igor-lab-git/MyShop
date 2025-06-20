import { Link, useNavigate } from "react-router-dom";
import style from "./style.module.scss";

export const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className={style.wrapperMain}>
      <div className={style.wrapperNavigate}>
        <Link className={style.linkBack} to="/">
          Главная
        </Link>
        <span>/</span>
        <button className={style.linkBack} onClick={() => navigate(-1)}>
          Назад
        </button>
        <span>/</span>
        <span>О нас</span>
      </div>

      <div>
        <h2 className={style.mainTitle}>О компании</h2>
        <h3 className={style.title_H3}>
          Интернет-магазин "MyShop.ru" – лучшие товары по низким ценам!
        </h3>
        <p className={style.text}>
          Наш интернет-магазин сделан для того, чтобы Вы смогли удобно, без
          лишних забот найти и заказать то, что Вас интересует. Мы заботимся о
          том, чтобы ассортимент в нашем интернет-магазине был всегда
          актуальным, цены доступными, сервис лучшим.
        </p>
        <p className={style.text}>
          Предлагаем Вам убедится в этом и сделать заказ в нашем
          интернет-магазине. Вы сможете быстро оплатить и получить заказ.
          Подробнее о вариантах оплаты и доставки Вы сможете узнать на
          соответствующих страницах.
        </p>
        <p className={style.text}>
          Для всех постоянных клиентов мы делаем скидки и заботимся о том, чтобы
          интернет-магазин Вам нравился и Вы приходили в него снова и снова.
        </p>
        <p className={style.text}>
          Наш интернет-магазин сделан для того, чтобы Вы смогли удобно, без
          лишних забот найти и заказать то, что Вас интересует. Мы заботимся о
          том, чтобы ассортимент в нашем интернет-магазине был всегда
          актуальным, цены доступными, сервис лучшим.
        </p>
        <p className={style.text}>
          Мы рады предложить вам недорогие, но качественные товары с подробными
          описаниями, характеристиками и фотографиями. У нас Вы можете купить
          замечательные товары: технику, электронику, одежду, обувь, игрушки,
          книги и многое другое в вашем регионе по ценам производителей и без
          наценки.
        </p>
        <p className={style.text}>
          Магазин "MyShop.ru" предлагает Вам купить качественную и доступную
          технику, электронику, одежду, обувь, игрушки, книги и многое другое с
          доставкой! Все виды современных товаров от эконом класса до более
          дорогих представлены в нашем каталоге.
        </p>
        <p className={style.text}>
          Вы можете купить любые товары в вашем городе: технику, электронику,
          одежду, обувь, игрушки, книги и многое другое.
        </p>
      </div>

      <div>
        <h4>Наши главные преимущества:</h4>
        <ul className={style.wrapperList}>
          <li>Доставка заказов Почтой по всей Стране за 5-15 дней</li>
          <li>Только оригинальная и сертифицированная продукция</li>
          <li>Гарантия на все товары – 5 лет!</li>
          <li>
            Не понравился товар? Вернем или обменяем в течение 14-ти дней без
            оформления лишних бумаг!
          </li>
          <li>Бонусы и скидки для постоянных покупателей</li>
        </ul>
      </div>

      <p className={style.text}>
        <strong>Если у вас есть вопросы</strong>, предложения или обратная
        связь, мы всегда рады вашему письму или звонку. Вы можете связаться с
        нами по электронной почте, телефону на нашем сайте. Спасибо, что выбрали
        наш интернет-магазин. Приятных покупок!
      </p>
    </div>
  );
};