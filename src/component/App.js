import React from "react";
import Login from "./appAuth/Login";
import Signup from "./appAuth/Signup";
import Dashboard from "../component/sales/Dashboard";
import PasswordRest from "./appAuth/PasswordReset";
import NewPassword from "../component/appAuth/NewPassword";
import ConfirmationMessage from "../component/appAuth/ConfimationMessage";
import { Route, Router } from "react-router-dom";
import History from "../History";
import NewProduct from "./sales/NewProduct";
import CheckAuth from "./appAuth/CheckAuth";

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Router history={History}>
        <div>
          <Route path='/' exact component={Login}></Route>
          <Route path='/Signup' exact component={Signup}></Route>
          <Route path='/dashboard/:user_id' exact component={Dashboard}></Route>
          <Route path='/product/new' exact component={NewProduct}></Route>
          <Route path='/password/reset' exact component={PasswordRest}></Route>
          <Route path='/password/new' exact component={NewPassword}></Route>
          <Route
            path='/password/updated'
            exact
            component={ConfirmationMessage}></Route>
        </div>
        <CheckAuth />
      </Router>
    </div>
  );
};

export default App;
