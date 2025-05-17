import React from 'react';
import { Navigate } from 'react-router-dom';

// Component to protect routes that require authentication
const ProtectedRoute = ({ isLoggedIn, children, redirectPath = '/login' }) => {
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  
  return children;
};

export default ProtectedRoute; 