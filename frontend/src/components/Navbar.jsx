import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-20 
                    backdrop-blur-md bg-slate-900/90 
                    border-b border-slate-700/40 relative">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* App Title */}
                <h1 className="text-2xl font-bold text-purple-400 tracking-wide">
                    TaskFlow
                </h1>

                {/* Right side buttons */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/login"
                        className="px-5 py-1.5 rounded-lg text-white 
                       bg-purple-600 hover:bg-purple-700 
                       transition shadow"
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
        </nav>
    );
}
