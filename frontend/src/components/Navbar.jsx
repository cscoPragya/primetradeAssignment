import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";

export default function Navbar() {
    const { currentUser, currentAdmin } = useContext(UserContext)

    return (
        <nav className="fixed top-0 left-0 w-full z-20 
                    backdrop-blur-md bg-slate-900/90 
                    border-b border-slate-700/40 ">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* App Title */}
                <h1 className="text-2xl font-bold text-purple-400 tracking-wide">
                    TaskFlow
                </h1>

                {/* Right side buttons */}
                <div className="flex items-center gap-4">
                    <Link
                        to={`${currentAdmin ? '/admin-dashboard' : '/user-dashboard'}`}
                        className={`px-5 py-1.5 rounded-lg text-white
                    bg-purple-600 hover:bg-purple-700
                    transition shadow ${(currentAdmin || currentUser) ? "block" : "hidden"}`}
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/login"
                        className={`px-5 py-1.5 rounded-lg text-white 
                       bg-purple-600 hover:bg-purple-700 
                       transition shadow ${(currentAdmin || currentUser) ? "hidden" : "block"}`}
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="px-5 py-1.5 rounded-lg text-white 
                       bg-purple-600 hover:bg-purple-700 
                       transition shadow"
                    >
                        Sign Up
                    </Link>
                </div>

            </div>
        </nav >
    );
}
