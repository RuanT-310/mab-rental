import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from './authContext';

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth(); // Verifica se o usuário está autenticado

  // Se o usuário não estiver autenticado, redirecione para a página de login
  console.log(isAuthenticated)
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Se o usuário estiver autenticado, renderize o conteúdo da rota
  return <Outlet />;
};

