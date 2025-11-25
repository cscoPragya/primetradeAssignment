import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
//This will only gonna manage the routes here

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/' element={<Home />}></Route>

      </Routes>
    </>
  )
}

export default App