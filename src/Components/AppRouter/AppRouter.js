import React from 'react';
import {Route, Routes} from "react-router-dom"
import RequireAuth from "../../HOC/RequireAuth/RequireAuth"
import Main from "../../Pages/Main/Main"
import Authorization from "../../Pages/Authorization/Authorization"
import Registration from "../../Pages/Registration/Registration"
import Menu from "../../Pages/Menu/Menu"
import Quit from "../../Pages/Quit/Quit"
import Order from "../../Pages/Order/Order"
import Contacts from "../../Pages/Contacts/Contacts"

const AppRouter = () => {

  return (
    <Routes>
      <Route path={'/'} element={<Main/>}/>
      <Route path={'/registration'} element={<Registration/>}/>
      <Route path={'/authorization'} element={<Authorization/>}/>
      <Route path={'/contacts'} element={<Contacts/>}/>
      <Route path={'/menu'} element={<Menu/>}/>
      <Route path={'/quit'} element=
        {
          <RequireAuth>
            <Quit/>
          </RequireAuth>
        }
      />
      <Route path={'/order'} element=
        {
          <RequireAuth>
            <Order/>
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default AppRouter;
