import React, {useEffect, useState} from 'react';
import './Order.css'
import {useDispatch, useSelector} from "react-redux"
import {changeItemAmountCart} from "../../Store/cart/reducer"

const Order = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780)
  const dispatch = useDispatch()
  const eventChangeAmountOfFoodInCart = (id, value) => {
    dispatch(changeItemAmountCart({id, value}))
  }
  useEffect(() => {
    window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 780))
    return () => {
      window.removeEventListener('resize', () => setIsMobile(window.innerWidth <= 780))
    }
  }, [])
  const user = useSelector(state => state.user.user)
  const foods = useSelector(state => state.cart.foods)
  const initialValue = 0;
  let totalPrice = foods.reduce(
    (previousValue, currentValue) => previousValue + (currentValue.price * currentValue.amount),
    initialValue
  )
  const eventOrderHandler = () => {
    let message = `
    Клиент: ${firstName} ${lastName}   %0A
    Адрес: ${address} %0A
    Номер телефона: ${phoneNumber}  %0A
    `
    foods.forEach(food => {
      message += `
       Заказанные блюда: %0A
       ${food.name}  %0A
       ${food.price}тг x ${food.amount} %0A
      `
    })
    message += `Total price: ${totalPrice} тг.`
    fetch(`https://api.telegram.org/bot5308583382:AAHPJPXndrNCcL_4S-9eJXri8AYQuJXYRu0/sendMessage?chat_id=-1001322601760&parse_mode=html&text=${message}`, {
      method: 'GET'
    })
  }
  const eventInputChangeHandler = (event) => {
    switch (event.target.name) {
      case 'firstName' :
        setFirstName(event.target.value)
        break
      case 'lastName' :
        setLastName(event.target.value)
        break
      case 'phoneNumber' :
        setPhoneNumber(event.target.value)
        break
      case 'address' :
        setAddress(event.target.value)
    }
  }
  return (
    <div className="orderPage">
      <div className="container flex justify-end">
        <div className="">
          <table className="xl:table mobTable" >
            {/* head */}
            <thead>
            <tr className="">
              <th className="w-10">Блюдо</th>
              <th className="w-10">Изменить</th>
              <th className="w-10">Стоимость</th>
            </tr>
            </thead>
            <tbody>
            {foods.map((food, index) => (
              <tr className="w-10 " key={index}>
                <td className="w-10">
                  <div className="flex items-center">
                    <div>
                      <div className="font-bold ">{food.name}</div>
                      {isMobile ? null : <div className="text-sm opacity-50">{food.description}</div>}
                    </div>
                  </div>
                </td>
                <td>
                  <div key={index} className="flex flex-row items-center justify-between">
                    <div className="custom-number-input h-8 w-24">
                      <label htmlFor="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">
                      </label>
                      <div className="flex flex-row h-8 w-full rounded-lg relative bg-transparent">
                        <button data-action="decrement"
                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none" onClick={() => eventChangeAmountOfFoodInCart(food.id, food.amount - 1)}>
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>

                        <input type="text"
                               className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black
                                    md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={food.amount}/>

                        <button data-action="increment"
                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer" onClick={() => eventChangeAmountOfFoodInCart(food.id, food.amount + 1)}>
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
                <th>
                  <span className="">{food.price * food.amount} тг.</span>
                </th>
              </tr>
            ))}
            </tbody>
            <tfoot>
            <tr>
              <th></th>
              <th><h1 className="xl:py-4 xl:px-4" style={{fontSize: '18px', fontWeight: 600}}>Итоговая сумма: </h1></th>
              <th ><p style={{fontSize: '18px', fontWeight: 600}}>{totalPrice} тг.</p></th>
            </tr>
            </tfoot>
          </table>
          <div className="divider" />
          <div className="flex flex-row flex-wrap ">
            <div className="form-control xl:w-3/6 w-5/6 px-4">
              <label className="label">
                <span className="label-text">Введите ваше имя</span>
              </label>
              <input type="text" placeholder="Дильназ" className="input input-bordered w-full" name="firstName" onChange={event => eventInputChangeHandler(event)} value={firstName}/>
            </div>
            <div className="form-control xl:w-3/6 w-5/6 px-4">
              <label className="label">
                <span className="label-text">Введите вашу фамилию</span>
              </label>
              <input type="text" placeholder="Рахатовна" className="input input-bordered w-full" name="lastName" onChange={event => eventInputChangeHandler(event)} value={lastName}/>
            </div>
            <div className="form-control xl:w-3/6 w-5/6 px-4">
              <label className="label">
                <span className="label-text">Введите ваш адресс</span>
              </label>
              <input type="text" placeholder="Ул. Иманбекова 19" className="input input-bordered w-full" name="address" onChange={event => eventInputChangeHandler(event)} value={address}/>
            </div>
            <div className="form-control xl:w-3/6 w-5/6 px-4">
              <label className="label">
                <span className="label-text">Введите ваш номер телефона</span>
              </label>
              <input type="text" placeholder="+7 702 324 5323" className="input input-bordered w-full" name="phoneNumber" onChange={event => eventInputChangeHandler(event)} value={phoneNumber}/>
            </div>
            <button className="btn btn-success xl:w-full w-72 justify-self-end mx-4 mt-4" onClick={eventOrderHandler}>Заказать</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Order;
