import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function AdminNavbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-20 
                    backdrop-blur-md bg-slate-900/90 
                    border-b border-slate-700/40">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* App Title */}
                <h1 className="text-2xl font-bold text-purple-400 tracking-wide">
                    TaskFlow
                </h1>

                {/* Home Button */}
                <Link
                    to="/"
                    className="text-purple-400 hover:text-purple-300 transition text-xl"
                    title="Go to Home"
                >
                    <FaHome size={26} />
                </Link>

            </div>
        </nav>
    );
}
