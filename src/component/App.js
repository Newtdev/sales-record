import React, { useEffect, useState } from "react";
import Login from "./appAuth/Login";
import Signup from "./appAuth/Signup";
import Dashboard from "../component/sales/Dashboard";
import ComfirmationModal from "./appAuth/ConfirmationModal";
import { Route, Router } from "react-router-dom";
import History from "../History";
import NewProduct from "./sales/NewProduct";
const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {});

  // console.log(session);
  return (
    <div className='max-w-screen-2xl overflow-x-hidden'>
      <Router history={History}>
        <div>
          <Route path='/' exact component={Login}></Route>
          <Route path='/Signup' exact component={Signup}></Route>
          <Route path='/confirm' exact component={ComfirmationModal}></Route>
          <Route path='/dashboard/:user_id' exact component={Dashboard}></Route>
          <Route path='/product/new' exact component={NewProduct}></Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
