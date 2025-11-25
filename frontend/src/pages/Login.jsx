import { useState } from "react";
import { API } from "../utils/api";
import toast from 'react-hot-toast'


export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        role: "user",
    });


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleLogin = async () => {
        toast.success("Login successfull!")
    };


    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
            <div className="bg-slate-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
                <h1 className="text-3xl font-bold text-purple-400 mb-6 text-center">
                    Login
                </h1>

                {/* Email */}
                <div className="mb-4">
                    <label className="text-purple-300 text-sm">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        onChange={handleChange}
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
                        className="w-full mt-1 p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-purple-500"
                    />
                </div>

                {/* Role */}
                <div className="mb-6">
                    <label className="text-purple-300 text-sm">Role</label>
                    <select
                        name="role"
                        onChange={handleChange}
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
                    <a href="/register" className="text-purple-400 hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
}
