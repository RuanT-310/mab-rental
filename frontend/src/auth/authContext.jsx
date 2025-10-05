import React, { createContext, useState, useContext, useEffect } from 'react';
import { login as getToken, useUser } from './api';
import { Navigate, useNavigate } from 'react-router';

// Cria o contexto de autenticação
const AuthContext = createContext();

// Provedor de autenticação
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("")


  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token)
    if (token) {
      setIsAuthenticated(true);
      setToken(token)
      navigate('/')
    }
  }, []);

  // Função para fazer login
  const login = async (data) => {
    const { token: tokenUser } = await getToken(data)
    if (tokenUser){
      localStorage.setItem('token', tokenUser)
      setIsAuthenticated(true);
      setToken(tokenUser)
      return <Navigate to="/" />
    } else return { error: true }
  };

  // Função para fazer logout
  const logout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false);
    <Navigate to="/login" />
  };

  const getUser = () => {
    console.log(token, '-<', isAuthenticated)
    return useUser(token)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);