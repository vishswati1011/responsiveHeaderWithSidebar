import React from "react";
// Routes
import { Route,Router, Redirect, Routes } from "react-router-dom";

import Function from '../setstateinF'
import ClassComp from '../setstateinC'

function AuthRoute() {
  return (
    <Routes>
     
          <Route exact path='/' element={<Function/>} />
          <Route exact path='/employee' element={<ClassComp/>} />
    </Routes>
  );
}

export default AuthRoute;
