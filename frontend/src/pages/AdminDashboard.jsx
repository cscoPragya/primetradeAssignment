import AdminNavbar from "../components/AdminNavbar";
import { useState } from "react";
import { UserContext } from "../context/UserProvider";
import DeleteUserModal from "../components/DeleteUserModal";
import { useContext } from "react";
export default function AdminDashboard() {
    const { deleteUserModal, setDeleteUserModal } = useContext(UserContext)
    // Dummy Users
    const [users] = useState([
        {
            _id: "1",
            username: "Pragya Rajput",
            email: "pragya@example.com",
            role: "user",
            createdAt: "2024-12-12",
        },
        {
            _id: "2",
            username: "Riya Sharma",
            email: "riya@example.com",
            role: "admin",
            createdAt: "2024-11-04",
        },
        {
            _id: "3",
            username: "Aman Gupta",
            email: "aman@example.com",
            role: "user",
            createdAt: "2024-10-22",
        },
    ]);

    const user = {
        _id: "1",
        username: "Pragya Rajput",
        email: "pragya@example.com",
        role: "user",
        createdAt: "2024-12-12",
    }
    return (
        <div className="min-h-screen bg-slate-900 text-white pb-20 pt-24">
            {deleteUserModal && <DeleteUserModal user={user} />}
            <AdminNavbar />

            {/* Heading */}
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-3xl font-bold text-purple-400 mb-8">
                    Admin Dashboard
                </h1>

                {/* USER LIST GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {users.map((u) => (
                        <div
                            key={u._id}
                            className="bg-slate-800 p-6 rounded-xl shadow-md border border-slate-700 
                         hover:shadow-purple-900/20 transition"
                        >
                            <h2 className="text-xl font-semibold text-purple-300 mb-2">
                                {u.username}
                            </h2>

                            <p className="text-gray-300 text-sm mb-1">
                                <span className="text-purple-300 font-medium">Email:</span> {u.email}
                            </p>

                            <p className="text-gray-300 text-sm mb-1 capitalize">
                                <span className="text-purple-300 font-medium">Role:</span> {u.role}
                            </p>

                            <p className="text-gray-300 text-sm mb-4">
                                <span className="text-purple-300 font-medium">Joined:</span> {u.createdAt}
                            </p>

                            {/* Delete Button */}
                            <button
                                className="bg-red-600 hover:bg-red-700 text-white 
                           px-4 py-2 rounded-lg mt-2 transition"
                            >
                                Delete User
                            </button>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
