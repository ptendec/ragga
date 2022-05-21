import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {Navigate} from "react-router-dom"
import {removeUser} from "../../Store/user/reducer"
import fetchIntercept from "../../API/fetchIntercept"
import {removeCookie} from "../../Helpers/cookie"
import {deleteAllItemsFromCart} from "../../Store/cart/reducer"

const Quit = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    fetchIntercept('/user/logOut', {
      method: 'GET'
    })
    localStorage.removeItem('accessToken')
    dispatch(removeUser())
    dispatch(deleteAllItemsFromCart())
    removeCookie('refreshToken')
  }, [])
  return (
    <Navigate to={'/'} />
  );
};

export default Quit;
