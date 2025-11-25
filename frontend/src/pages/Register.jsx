import { useState } from "react";
import { API } from "../utils/api";
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";
import { UserContext } from '../context/UserProvider.jsx'
import { useContext } from "react";
export default function Register() {
    const { token, setToken, currentAdmin, setCurrentAdmin, currentUser, setCurrentUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        role: "user",
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleRegister = async () => {
        const res = await API("/api/v1/user/register", "POST", form);
        if (res) {
            // console.log(res)
            toast.success("Regisistration successfull!")
            setForm({
                username: "",
                email: "",
                password: "",
                role: "user",
            })
            //set current user/admin
            if (res?.user?.role === 'admin') {
                setCurrentAdmin(res.user)
                localStorage.setItem('admin', res.user)
            } else {
                setCurrentUser(res.user)
                localStorage.setItem('user', res.user)
            }

            //set token for the user/admin (This will consist of user/amdin email id)
            setToken(res?.token)
            //also gonnta store it in localstorage so when user refresh the page we can fetch it from there
            localStorage.setItem('token', res.token)

            if (res.user.role === 'admin') {
                navigate('/admin-dashboard')
            } else {
                navigate('/user-dashboard')
            }

        }


    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
            <div className="bg-slate-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
                <h1 className="text-3xl font-bold text-purple-400 mb-6 text-center">
                    Create Account
                </h1>

                {/* Username */}
                <div className="mb-4">
                    <label className="text-purple-300 text-sm">Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your name"
                        value={form.username}
                        onChange={handleChange}
                        className="w-full mt-1 p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-purple-500"
                    />
                </div>

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
                        placeholder="Create password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full mt-1 p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-purple-500"
                    />
                </div>

                {/* Role */}
                <div className="mb-5">
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

                {/* Submit */}
                <button
                    onClick={handleRegister}
                    className="w-full bg-purple-600 hover:bg-purple-700 transition p-3 rounded-lg text-white font-semibold shadow-md cursor-pointer"
                >
                    Register
                </button>

                <p className="text-center text-sm mt-4 text-gray-400">
                    Already have an account?{" "}
                    <a href="/login" className="text-purple-400 hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
