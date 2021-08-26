import React from "react";
import { Route, Router } from "react-router-dom";
import Login from "./appAuth/Login";
import Signup from "./appAuth/Signup";
import Dashboard from "./sales/Dashboard";
import PasswordRest from "./appAuth/PasswordReset";
import NewPassword from "./appAuth/NewPassword";
import Daily from "./dailysales/Daily";
import ConfirmationMessage from "./appAuth/ConfimationMessage";
import NewProduct from "./sales/NewProduct";
import History from "../History";

const App = () => {
  return (
    <div className='overflow-x-hidden bg-purple-100'>
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
          {/* <Route path='/sales/:name/:id' exact component={Daily}></Route> */}
        </div>
      </Router>
    </div>
  );
};

export default App;
