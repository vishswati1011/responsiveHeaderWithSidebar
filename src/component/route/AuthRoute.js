import React from "react";
// Routes
import { Route,Router, Redirect, Routes } from "react-router-dom";

import Function from '../demoFile2'
import ClassComp from '../demofile'
import LinkedIn from '../loginwithLinkedIn'


function AuthRoute() {
  return (
    <Routes>
     
          <Route exact path='/' element={<Function/>} />
          <Route exact path='/jobsiteFrom' element={<ClassComp/>} />
          <Route exact path='/linkedin' element={<LinkedIn/>} />
          
    </Routes>
  );
}

export default AuthRoute;
