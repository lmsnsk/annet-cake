import { Link } from "react-router-dom";

import Dropbox from "../Dropbox/Dropbox";
import stl from "./Navigation.module.scss";

// const firstIn = (obj: any) => <Dropbox data={obj} />;

// const first = {
//   title: "ghjdthrf",
//   items: [
//     "111111111111111111",
//     "2222222222222222",
//     "333333333333333",
//     "444444444444444",
//     "55555555555555",
//     "66666666666666666666",
//   ],
// };

const questionsAndAnswers = {
  title: "Вопросы и ответы",
  items: [
    "Как сделать заказ",
    "Как рассчитать вес товара",
    "Оформление",
    "Оплата заказа",
    "Условия доставки",
    "Сроки и срочность",
  ],
};
const assortiment = {
  title: "Ассортимент",
  items: ["Муссовые торты", "Бисквитные торты", "3D-торты", "Свадебные торты", "Десерты в наличии"],
};

const Navigation: React.FC = () => {
  return (
    <nav className={stl.root}>
      <ul>
        <Link to="/news">
          <li>Новости</li>
        </Link>
        <li>
          <Dropbox data={assortiment} />
        </li>
        <li>
          <Dropbox data={questionsAndAnswers} />
        </li>
        <Link to="/about">
          <li>О нас</li>
        </Link>
        <Link to="/contacts">
          <li>Контакты</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
