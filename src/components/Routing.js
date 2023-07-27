import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import LoginForm from './login/LoginForm';
import RegisterForm from './login/RegisterForm';
// import Main from './main';
import { AuthUserContext } from "../context/userContext";
import ProtectedRoutes from "./main";

const Routing = () => {
  return (
    <>
      <AuthUserContext>
        <BrowserRouter>
          <Routes>
            <Route index element={<LoginForm />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="home" element={<Home />} />
            </Route>
            <Route path="register" element={<RegisterForm />} />
            <Route />
          </Routes>
        </BrowserRouter>
      </AuthUserContext>
    </>
  )
}

export default Routing;