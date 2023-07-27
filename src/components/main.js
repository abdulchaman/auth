import React from 'react';
import { Outlet } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import {Navigate} from "react-router-dom";

const ProtectedRoutes = ({children}) => {
  const {user} = useUserContext();
  if(!user){
    return <Navigate to="/" />;
  }
  return (
    <Outlet>
      {children}
    </Outlet>
  )
}

export default ProtectedRoutes;