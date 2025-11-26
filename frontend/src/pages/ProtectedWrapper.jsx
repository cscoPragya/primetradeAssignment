import React, { useEffect } from 'react'
import { API } from '../utils/api.js'
import { UserContext } from '../context/UserProvider.jsx'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


//now here we will check for the token validation and will contact directly 
//with the db
//basically we can fetch the 
const ProtectedWrapper = ({ children }) => {
    const navigate = useNavigate()
    const { token, setCurrentUser, setCurrentAdmin } = useContext(UserContext)
    useEffect(() => {
        if (!token) return
        (async () => {
            const res = await API("/api/v1/user/validate-token", "GET", null, token)
            // console.log(res)
            if (res.status == 200) {

                if (res?.user?.role == "admin") {
                    setCurrentAdmin(res.user)

                } else {
                    setCurrentUser(res.user)
                }

            } else {
                navigate('/login')
            }


        })()
    }, [token])

    return (
        <> {children}</>
    )
}

export default ProtectedWrapper