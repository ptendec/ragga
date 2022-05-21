import React, {useEffect, useState} from 'react';
import './Menu.css'
import fetchIntercept from "../../API/fetchIntercept"
import {useSelector} from "react-redux"
import Food from "../../Components/Food/Food"

const Menu = () => {
  const [rolls, setRolls] = useState([])
  const [sets, setSets] = useState([])
  const [pizzas, setPizzas] = useState([])
  const foodsFromCart = useSelector(state => state.cart.foods)
  const isFoodInCart = (food) => {
    return foodsFromCart.some(item => item.id === food.id)
  }


  useEffect(() => {
    fetchIntercept(`/food/`, {
      method: 'GET'
    }).then(({response, data}) => {
      setSets(data.filter(set => set.type === 'сет'))
      setRolls(data.filter(set => set.type === 'роллы'))
      setPizzas(data.filter(set => set.type === 'пиццы'))
    })
  }, [])
  return (
    <div className="mainMenu">
      <div className="container justify-center grid grid-cols-12 gap-4">
        {
          sets.map((food, index) => (
            <Food
              key={index}
              id={food.id}
              name={food.name}
              description={food.description}
              price={food.price}
              type={food.type}
              image={food.image}
            />
          ))
        }
      </div>
      <div className="container justify-center grid grid-cols-12 gap-4">
        {
          rolls.map((food, index) => (
            <Food
              key={index}
              id={food.id}
              name={food.name}
              description={food.description}
              price={food.price}
              type={food.type}
              image={food.image}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Menu;
