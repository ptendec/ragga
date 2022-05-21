import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom"
import {changeItemAmountCart} from "../../Store/cart/reducer"
import {useDispatch, useSelector} from "react-redux"
import mockUser from '../../Assets/images/mock_user.png'

const ProfileBadge = ({foods}) => {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  const eventChangeAmountOfFoodInCart = (id, value) => {
    dispatch(changeItemAmountCart({id, value}))
  }
  const [totalPrice, setTotalPrice] = useState(0)
  const initialValue = 0;
  useEffect(() => {
    if (isAuth) {
      setTotalPrice(foods.reduce(
        (previousValue, currentValue) => previousValue + (currentValue.price * currentValue.amount),
        initialValue
      ))
    }
  }, [foods, isAuth])
  return (
    <div className="flex">
      <div className="dropdown dropdown-end">
        <label tabIndex="0" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <span className="badge badge-md indicator-item">{foods.length}</span>
          </div>
        </label>
        <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-96 bg-base-100 shadow">
          <div className="card-body">
            <span className="font-bold text-lg">{foods.length} блюд</span>
            <div className="divider"/>
            {
              foods.map((food, index) => (
                <div key={index} className="flex flex-row items-center justify-between">
                  <div>
                    <span className="">{food.name}</span>
                  </div>
                  <div className="custom-number-input h-8 w-24">
                    <label htmlFor="custom-input-number"
                           className="w-full text-gray-700 text-sm font-semibold">
                    </label>
                    <div className="flex flex-row h-8 w-full rounded-lg relative bg-transparent">
                      <button data-action="decrement"
                              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                              onClick={() => eventChangeAmountOfFoodInCart(food.id, food.amount - 1)}>
                        <span className="m-auto text-2xl font-thin">−</span>
                      </button>

                      <input type="text"
                             className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black
                                    md:text-basecursor-default flex items-center text-gray-700  outline-none"
                             name="custom-input-number" value={food.amount} readOnly/>

                      <button data-action="increment"
                              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                              onClick={() => eventChangeAmountOfFoodInCart(food.id, food.amount + 1)}>
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <span className="">{food.price * food.amount} тг.</span>
                  </div>
                </div>
              ))
            }
            <div className="divider"/>
            <span className="text-info">Итоговая цена: {totalPrice} тг.</span>
            <div className="card-actions">
              <Link to="/order">
                <button className="btn btn-primary btn-block">Заказать</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={mockUser} alt=""/>
          </div>
        </label>
        <ul tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to="/order">Оформить заказ</Link></li>
          <li><Link to="/quit">Выйти</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileBadge;
