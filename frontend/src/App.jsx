import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import { Toaster } from 'react-hot-toast'
import UserDashboard from './pages/UserDashboard.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import { UserContext } from './context/UserProvider.jsx'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProtectedWrapper from './pages/ProtectedWrapper.jsx'
import './App.css'
//This will only gonna manage the routes here

const App = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 900); // 900px se chhoti = block
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const navigate = useNavigate()

  const { setToken, setCurrentUser, setCurrentAdmin } = useContext(UserContext)


  useEffect(() => {
    // localStorage.clear()
    const crToken = localStorage.getItem('token')
    if (crToken) {
      // console.log(crToken)
      setToken(crToken)
      if (JSON.parse(localStorage.getItem('admin'))) {
        navigate('/admin-dashboard')
        setCurrentAdmin(JSON.parse(localStorage.getItem('admin')))

      } else {
        setCurrentUser(JSON.parse(localStorage.getItem('user')))
        navigate('/user-dashboard')
      }
    }

  }, [])

  if (isMobile) {
    return (
      <div style={{
        padding: "2rem",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "bold",
        backgroundColor: "gray",
        color: "white",
        height: '100vh',
        display: "flex",
        alignItems: "center"
      }}>
        📵 This application is not supported on mobile.<br />
        Please switch to a PC or Laptop for the best experience.
      </div>
    );
  }
  return (
    <>


      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Home />}></Route>

        <Route path='/user-dashboard' element={
          <ProtectedWrapper>
            <UserDashboard />
          </ProtectedWrapper>
        }></Route>

        <Route path='/admin-dashboard' element={
          <ProtectedWrapper>
            <AdminDashboard />
          </ProtectedWrapper>
        }></Route>

      </Routes>

      <Toaster />
    </>
  )
}

export default App