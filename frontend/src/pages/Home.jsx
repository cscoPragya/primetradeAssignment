import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";

export default function Home() {
    const { currentAdmin, currentUser } = useContext(UserContext)
    return (
        <div className="min-h-[100vh] bg-slate-900 text-white  relative p-0 m-0">

            <Navbar />

            {/* CONTENT */}
            <div className="max-w-7xl mx-auto px-6 pt-36 pb-20 flex flex-col items-center text-center">

                {/* BIG SLOGAN */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-purple-400 leading-tight">
                    Organize Your Work. <br />
                    <span className="text-white">Achieve More.</span>
                </h1>

                {/* SUBTEXT */}
                <p className="mt-6 text-gray-300 text-lg max-w-xl">
                    TaskFlow helps you stay on top of your tasks, manage priorities,
                    and stay productive every single day.
                </p>

                {/* CTA BUTTON */}
                <Link
                    to={
                        currentAdmin
                            ? '/admin-dashboard'
                            : currentUser
                                ? '/user-dashboard'
                                : '/login'
                    }
                    className="mt-10 px-8 py-3 rounded-xl text-white text-lg font-semibold
                     bg-purple-600 hover:bg-purple-700 transition shadow-lg"
                >
                    Manage Tasks →
                </Link>

                {/* Decorative subtle glow */}
                <div className="mt-16 w-100 h-72 bg-purple-500/20 rounded-full blur-2xl absolute top-[15%]"></div>

            </div>

        </div>
    );
}
