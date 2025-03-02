import React from 'react';
import { Navigate } from 'react-router-dom';
import authLocalStorage from 'helpers/authLocalStorage';

const RequireAuth = ({ children }) => {
  const user = authLocalStorage.getUser();

  return user.username ? <>{children}</> : <Navigate to="/auth/login" replace />;
};

export default RequireAuth;
