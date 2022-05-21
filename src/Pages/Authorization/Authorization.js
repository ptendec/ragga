import React, {useEffect, useState} from 'react';
import './Authorization.css'
import {useDispatch, useSelector} from "react-redux"
import {setUser} from "../../Store/user/reducer"
import {Link, Navigate, useNavigate} from "react-router-dom"
import Paper from "../../Components/Paper/Paper"
import {API_URL} from "../../consts"

const Authorization = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const isAuth = useSelector(state => state.user.isAuth)
  const navigate = useNavigate()

  const eventAuthorizeUserHandler = (event) => {
    event.preventDefault()
    const request = {
      email,
      password
    }
    fetch(`${API_URL}/user/authorization`, {
      method: 'POST',
      credentials: 'include',
      redirect: 'follow',

      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    }).then(async response => {
      console.log(response)
      const data = await response.json()
      if (response.status === 200) {
        dispatch(setUser(data.user))
        localStorage.setItem('accessToken', data.accessToken)
        navigate('/')
      } else {
      }
    })
  }
  useEffect(() => {
    if (isAuth) {
      return <Navigate to={'/'}/>
    }
  }, [])

  const eventInputChangeHandler = (event) => {
    switch (event.target.name) {
      case 'email' :
        setEmail(event.target.value)
        break
      case 'password' :
        setPassword(event.target.value)
        break
    }
  }
  return (
    <div className="authorization">
      <div className="container justify-center grid grid-cols-4 gap-4">
        <div className="xl:col-span-4 col-span-12 justify-center">
          <Paper>
            <h1 className="authorization__header">Войти в аккаунт</h1>
            <form className="flex flex-col justify-center">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Введите email</span>
                  <span className="label-text-alt hidden">Alt label</span>
                </label>
                <input type="text" placeholder="info@example.com" name="email" className="input input-bordered w-full" onChange={event => eventInputChangeHandler(event)}/>
                <label className="label">
                  <span className="label-text-alt">Alt label</span>
                </label>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Введите пароль</span>
                </label>
                <input type="password" placeholder="*****" name="password" className="input input-bordered w-full" onChange={event => eventInputChangeHandler(event)}/>
                <label className="label">
                  <span className="label-text-alt">Alt label</span>
                </label>
              </div>
              <button className="btn" onClick={event => eventAuthorizeUserHandler(event)}>Войти</button>
              <p className="py-4">У вас нету аккаунта? <span className="underline"><Link
                to="/registration">Зарегестрироваться</Link></span></p>
            </form>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
