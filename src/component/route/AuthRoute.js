import React from "react";
// Routes
import { Route,Router, Redirect, Routes } from "react-router-dom";

import Function from '../demoFile2'
import ClassComp from '../demofile'

function AuthRoute() {
  return (
    <Routes>
     
          <Route exact path='/' element={<Function/>} />
          <Route exact path='/employee' element={<ClassComp/>} />
    </Routes>
  );
}

export default AuthRoute;
