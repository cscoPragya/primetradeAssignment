import { useState } from "react";
import { API } from "../utils/api";

export default function Register() {
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
        const res = await API("/register", "POST", form);

        if (res?.success) {
            alert("Registration successful!");
            window.location.href = "/login";
        } else {
            alert(res?.message || "Something went wrong");
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
                        className="w-full mt-1 p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-purple-500"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                {/* Submit */}
                <button
                    onClick={handleRegister}
                    className="w-full bg-purple-600 hover:bg-purple-700 transition p-3 rounded-lg text-white font-semibold shadow-md"
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
