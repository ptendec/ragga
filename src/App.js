import './App.css';
import {useDispatch} from "react-redux"
import AppRouter from "./Components/AppRouter/AppRouter"
import jwt_decode from "jwt-decode";
import {setUser} from "./Store/user/reducer"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import {useEffect} from "react"
import {API_URL} from "./consts"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('accessToken') !== 'undefined' && localStorage.getItem('accessToken')) {
      const decoded = jwt_decode(localStorage.getItem('accessToken'))
      dispatch(setUser({...decoded}))
    }
    else{
      console.log('sds')
      const refreshToken = async () => {
        const response = await fetch(`${API_URL}/user/refresh`, {
          method: 'GET',
          credentials: 'include',
          redirect: 'follow',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        const data = await response.json()
        localStorage.setItem('accessToken', data.accessToken)
        dispatch(setUser({...data.user}))
        console.log(data)
      }
      refreshToken()
    }
  }, [])
  return (
    <div className="App">
      <Header/>
      <AppRouter/>
      <Footer/>
    </div>
  )
}

export default App;
