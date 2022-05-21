import React from 'react';
import {Link} from "react-router-dom"
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footerWrapper bg-neutral">
        <div className="container">
          <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
              <span className="footer-title">Навигация</span>
              <Link to="/" className="link link-hover">Главная</Link>
              <Link to="/menu" className="link link-hover">Меню</Link>
              <Link to="/contacts" className="link link-hover">Контакты</Link>
              <Link to="/order" className="link link-hover">Заказ</Link>
            </div>
            <div>
              <span className="footer-title">Инфморация</span>
              <p className="">
                <span>Готовим не только красиво, но и вкусно 😋 <br/></span>
                <span>Доставляем в кратчайшие сроки 🚙 <br/></span>
                <span>Режим работы: 11:00 - 23:00 🕐 <br/></span>
                <span>Для заказа 8747 440 8215</span>
              </p>
            </div>
            <div>
              <span className="footer-title">Соц. сети</span>
              <a href="https://www.instagram.com/ragga_semey/" className="link link-hover">Instagram</a>
              <a href="https://www.instagram.com/ragga_semey/" className="link link-hover">Whatsapp</a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
