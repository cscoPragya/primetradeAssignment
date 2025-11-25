import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import { Toaster } from 'react-hot-toast'
import UserDashboard from './pages/UserDashboard.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
//This will only gonna manage the routes here

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user-dashboard' element={<UserDashboard />}></Route>
        <Route path='/admin-dashboard' element={<AdminDashboard />}></Route>
      </Routes>

      <Toaster />
    </>
  )
}

export default App