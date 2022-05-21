import React, {useState} from 'react';
import './MobileHeader.css'
import {Link, NavLink} from "react-router-dom"
import Logo from "../../Assets/images/photo_2022-05-03_22-31-26.jpg"
import ProfileBadge from "../ProfileBadge/ProfileBadge"
import {useSelector} from "react-redux"

const MobileHeader = () => {
  const foods = useSelector(state => state.cart.foods)
  const isAuth = useSelector(state => state.user.isAuth)
  const [showSidebar, setShowSideBar] = useState(false)
  return (
    <>
      {showSidebar ?
        <div className="sidebar">
          <label htmlFor="my-drawer" className="drawer-overlay"/>
          <ul className=" p-4 w-60 text-base-content mobNavbar ">
            {isAuth ? <ProfileBadge foods={foods}/> : <li><NavLink to="/authorization">Войти</NavLink></li>}
            <div className="divider"/>
            <li><NavLink to="/">Главная</NavLink></li>
            <li><NavLink to="/menu">Меню</NavLink></li>
            <li><NavLink to="/contacts">Контакты</NavLink></li>
          </ul>
        </div>
        : null}
      <div className="mobHeader z-10 fixed shadow-lg">
        <div className="container">
          <div className="grid grid-cols-12 gap-2 justify-items-center">
            <div className="xl:col-span-2 col-start-2 col-end-7 justify-self-start">
              <NavLink to="/">
                <img className="logoImg" src={Logo} alt=""/>
              </NavLink>
            </div>
            <div className="xl:col-span-5 col-span-0">
              {/* <ul className="listOfNavbar">
              <li><NavLink to="/">Главная</NavLink></li>
              <li><NavLink to="/menu">Меню</NavLink></li>
              <li><NavLink to="/contacts">Контакты</NavLink></li>
            </ul>*/}
            </div>
            <div className="xl:col-start-11 xl:col-end-12 col-start-10 col-end-12 flex items-center">
              <label htmlFor="my-drawer" className="btn btn-ghost btn-circle swap swap-rotate">
                <input type="checkbox" id="my-drawer"  onChange={() => setShowSideBar(!showSidebar)} />
                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                     viewBox="0 0 512 512">
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
                </svg>
                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                     viewBox="0 0 512 512">
                  <polygon
                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )

};

export default MobileHeader;
