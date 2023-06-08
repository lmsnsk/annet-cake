import { useState, useRef } from "react";

import Dropbox from "../Dropbox/Dropbox";
import stl from "./Navigation.module.scss";

const questionsAndAnswers = [
  "Как сделать заказ",
  "Как рассчитать вес товара",
  "Оформление",
  "Оплата заказа",
  "Условия доставки",
  "Сроки и срочность",
];

const Navigation: React.FC = () => {
  const questionsAndAnswersRef = useRef(null);
  const [onMouseHover, setOnMouseHover] = useState(false);

  const onMouseEnter = () => {
    setOnMouseHover(true);
  };

  const onMouseLeave = () => {
    setOnMouseHover(false);
  };

  return (
    <nav className={stl.root}>
      <ul>
        <li>Главная</li>
        <li>Ассортимент</li>
        <li>Десерты в наличии</li>
        <li>
          <div ref={questionsAndAnswersRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            Вопросы и ответы
          </div>
          {onMouseHover && (
            <Dropbox liArray={questionsAndAnswers} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
          )}
        </li>
        <li>О нас</li>
        <li>Контакты</li>
      </ul>
    </nav>
  );
};

export default Navigation;
