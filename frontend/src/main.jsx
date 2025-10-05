/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import { Contact } from "./pages/Contact";
import { NavBar } from './components/NavBar'
import { SearchRental } from './components/SearchRental'
import { Header } from './components/Header'
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { RentalInfo } from "./components/RentalInfo";
import { NotFound } from "./pages/NotFound";
import { Agents } from "./pages/Agents";
import { RentalListPage } from "./pages/RentalListPage";
import { RentalTypesPage } from "./pages/RentalTypesPage";
import { TestimonialList } from "./pages/TestionalList";
import { AddRental } from "./pages/AddRental";
import { SingUp } from "./pages/SingUp";
import { Login } from "./pages/Login";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { AuthProvider } from "./auth/authContext";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter >
  <AuthProvider>
    <div className="container-xxl bg-white p-0">
      <div className="container-fluid nav-bar bg-transparent" id="com-navbar">
        <NavBar/>
      </div>
      <Header/>
      <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: "35px"}}>
        <div className="container" id="com-search">
          <SearchRental/>
        </div>
      </div>
      
        <Routes>

          <Route path="singup" element={<SingUp/>} />
          <Route path="login" element={<Login/>} />

          <Route element={<ProtectedRoute />}>
            <Route index element={<App />} />
            <Route path="contact" element={<Contact/>} />
            <Route path="about" element={<About/>} />
            <Route path="agents" element={<Agents />}/>
            <Route path="rentals" element={<RentalListPage/>}/>
            <Route path="types" element={<RentalTypesPage />}/>
            <Route path="testimonials" element={<TestimonialList />}/>
            <Route path="newrental" element={<AddRental />}/>
            <Route path="rental/:id" element={<RentalInfo />}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      <Footer/>
      <a 
      href="#" 
      className="btn btn-lg btn-primary btn-lg-square back-to-top" 
      children={<i className="bi bi-arrow-up"/>}
      />
    </div>
    </AuthProvider>
  </BrowserRouter>
);
