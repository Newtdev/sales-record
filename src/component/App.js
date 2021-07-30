import React from "react";
import Login from "./appAuth/Login";
import Signup from "./appAuth/Signup";
import ComfirmationModal from "./appAuth/ConfirmationModal";
import Header from "../component/Header";
import { Route, Router } from "react-router-dom";
import History from "../History";

const App = () => {
  return (
    <div>
      <Router history={History}>
        <div>
          <Route path='/' exact component={Login}></Route>
          <Route path='/Signup' exact component={Signup}></Route>
          <Route path='/confirm' exact component={ComfirmationModal}></Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
