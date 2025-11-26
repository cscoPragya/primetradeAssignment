import { useState } from "react";
import { API } from "../utils/api";
import toast from 'react-hot-toast'
import { UserContext } from '../context/UserProvider.jsx'
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";


export default function Login() {


    const { token, setToken, currentAdmin, setCurrentAdmin, currentUser, setCurrentUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        password: "",
        role: "user",
    });


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleLogin = async () => {

        const res = await API("/api/v1/user/login", "POST", form);
        if (res) {
            // console.log(res)
            toast.success("Login successfull!")
            setForm({
                email: "",
                password: "",
                role: "user",
            })
            //set current user/admin
            if (res?.user?.role === 'admin') {
                setCurrentAdmin(res.user)
                localStorage.setItem('admin', JSON.stringify(res.user))
            } else {
                setCurrentUser(res.user)
                localStorage.setItem('user', JSON.stringify(res.user))
            }

            //set token for the user/admin (This will consist of user/amdin email id)
            setToken(res?.token)
            //also gonnta store it in localstorage so when user refresh the page we can fetch it from there
            localStorage.setItem('token', res.token)
            //now here we will check whether he is a user or admin and will redirect accordingly
            //also we will gonna have access to admin/user and token from here

            if (res.user.role === 'admin') {
                navigate('/admin-dashboard')
            } else {
                navigate('/user-dashboard')
            }
        };
    }

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 ">
            <div className="bg-slate-800 p-8 rounded-2xl shadow-xl w-full max-w-md relative">
                <h1 className="text-3xl font-bold text-purple-400 mb-6 text-center">
                    Login
                </h1>
                <Link
                    to="/"
                    className="top-10 right-15 text-purple-400 hover:text-purple-300 transition text-l absolute"
                    title="Go to Home"
                >
                    <FaHome size={26} />
                </Link>

                {/* Email */}
                <div className="mb-4">
                    <label className="text-purple-300 text-sm">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        value={form.email}
                        className="w-full mt-1 p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-purple-500"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="text-purple-300 text-sm">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={handleChange}
                        value={form.password}
                        className="w-full mt-1 p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-purple-500"
                    />
                </div>

                {/* Role */}
                <div className="mb-6">
                    <label className="text-purple-300 text-sm">Role</label>
                    <select
                        name="role"
                        onChange={handleChange}
                        value={form.role}
                        className="w-full mt-1 p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-purple-500"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                {/* Login Button */}
                <button
                    onClick={handleLogin}
                    className="w-full bg-purple-600 hover:bg-purple-700 transition p-3 rounded-lg text-white font-semibold shadow-md cursor-pointer"
                >
                    Login
                </button>

                <p className="text-center text-sm mt-4 text-gray-400">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-purple-400 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}
