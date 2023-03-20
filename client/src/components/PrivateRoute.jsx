// src/components/PrivateRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
