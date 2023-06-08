import React from "react";
import { Link } from "react-router-dom";

import stl from "./Header.module.scss";

import mainLogo from "./../../assets/logo-header2.png";
import teleLogo from "./../../assets/telegram-logo.svg";
import whatsUpLogo from "./../../assets/whatsapp-logo.svg";
import emailLogo from "./../../assets/email-logo.svg";
import vkLogo from "./../../assets/vk-logo.svg";
import Navigation from "../Navigation/Navigation";

const Header: React.FC = () => {
  return (
    <div className={stl.wrapper}>
      <header className={stl.header}>
        <div className={stl.logo}>
          <Link to="/">
            <img src={mainLogo} alt="" />
          </Link>
        </div>
        <div className={stl.title}>
          <h1>Annet Cake</h1>
          <h4>мастерская десертов</h4>
        </div>
        <div className={stl.contacts}>
          <Link to="https://t.me/annetcakensk" rel="noreferrer" target="_blank">
            <img src={teleLogo} alt="tel" />
            <p>annetcakensk</p>
          </Link>
          <Link to="https://vk.com/annetcake_info" rel="noreferrer" target="_blank">
            <img src={vkLogo} alt="tel" />
            <p>annetcake</p>
          </Link>
          <Link to="tel:+79833240377">
            <img src={whatsUpLogo} alt="tel" />
            <p>+7-983-324-03-77</p>
          </Link>
          <Link to="mailto:annetcake@mail.ru">
            <img src={emailLogo} alt="tel" />
            <p>annetcake@mail.ru</p>
          </Link>
        </div>
      </header>
      <Navigation />
    </div>
  );
};

export default Header;
