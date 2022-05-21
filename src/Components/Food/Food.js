import React, {useState} from 'react';
import './Food.css'
import {useDispatch, useSelector} from "react-redux"
import {deleteItemFromCart, setItemInCart} from "../../Store/cart/reducer"
import {FILE_URL} from "../../consts"

const Food = ({id, name, description, price, type, image}) => {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  const foodsFromCart = useSelector(state => state.cart.foods)
  const [showAlert, setShowAlert] = useState(false)
  const isFoodInCart = (id) => {
    return foodsFromCart.some(item => item.id === id)
  }

  const eventAddToBasketHandler = () => {
    if (!isAuth) {
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 2000)
      return false
    }
    console.log(isFoodInCart(id))
    if (isFoodInCart(id)) {
      dispatch(deleteItemFromCart({id}))
    } else {
      dispatch(setItemInCart({id, name, description, price, type, image, amount: 1}))
    }
  }
  return (
    <>
      {
        showAlert ?
          <div className="alert alert-warning shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                   viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              <span>Пожалуйста, авторизуйтесь</span>
            </div>
          </div>
          :
          ''
      }
      <div className="xl:col-span-4 col-span-12 justify-center gap-2 px-8 py-8">
        <div className="card w-full shadow-xl">
          <figure><img src={`${FILE_URL}/foodImages/${image}`} alt="Shoes"/></figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <br/>
              <div className="badge badge-secondary">ТОП</div>
            </h2>
            <div className="card-title">
              {price} тг.
            </div>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{type}</div>
            </div>
            <div className="card-actions justify-start">
              <button
                onClick={eventAddToBasketHandler}
                className="btn btn-primary">{!isFoodInCart(id) ? 'Добавить в корзину' : 'Удалить из корзины'}</button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Food;
