import React from 'react';
import {Link, NavLink} from "react-router-dom"
import Logo from "../../Assets/images/photo_2022-05-03_22-31-26.jpg"
import ProfileBadge from "../ProfileBadge/ProfileBadge"
import {useSelector} from "react-redux"

const DesktopHeader = () => {
  const foods = useSelector(state => state.cart.foods)
  const isAuth = useSelector(state => state.user.isAuth)
  return (
    <div className="header shadow-lg">
      <div className="container">
        <div className="grid grid-cols-12 gap-2 justify-items-center">
          <div className="col-span-2 justify-self-start">
            <NavLink to="/">
              <img className="logoImg" src={Logo} alt=""/>
            </NavLink>
          </div>
          <div className="col-span-5 ">
            <ul className="listOfNavbar">
              <li><NavLink to="/">Главная</NavLink></li>
              <li><NavLink to="/menu">Меню</NavLink></li>
              <li><NavLink to="/contacts">Контакты</NavLink></li>
            </ul>
          </div>
          <div className="col-start-11 col-end-12 flex items-center">
            {
              isAuth ?
                <ProfileBadge foods={foods} />
                :
                <Link to="/authorization">Войти</Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
