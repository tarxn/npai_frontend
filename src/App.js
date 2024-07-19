// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home'; // Correct path to your Login component
import About from './components/About';
import Images from './components/Images';
import Users from './components/Users';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import SignUp from './components/SignUp';
import ManualDraw from './components/manual_draw/ManualDraw';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/images" element={<Images />} />
        <Route path="/users" element={<Users />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/manual-draw" element={<ManualDraw />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
