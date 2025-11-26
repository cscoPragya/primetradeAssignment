import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DeleteTaskModal from "../components/DeleteTaskModal";
import EditTaskModal from "../components/EditTaskModal";
import CreateTaskModal from "../components/CreateTaskModal";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { API } from '../utils/api.js'
{ Link }

export default function UserDashboard() {
    const logout = () => {
        //further inserting this token in black list logic can be implemented on server side
        localStorage.clear()
    }
    const { deleteModal, setDeleteModal, editModal, setEditModal, createTaskModal, setCreateTaskModal, tasks, setTasks, token } = useContext(UserContext)
    const [task, setTask] = useState(null)
    // Dummy tasks based on schema
    // const [tasks] = useState([
    //     {
    //         _id: "1",
    //         title: "Complete Assignment",
    //         description: "Finish the MERN assignment by tomorrow",
    //         priority: "high",
    //         status: "ongoing",
    //         dueDate: "2025-01-28",
    //     },
    //     {
    //         _id: "2",
    //         title: "Study DSA",
    //         description: "Revise recursion problems",
    //         priority: "moderate",
    //         status: "pending",
    //         dueDate: "2025-01-30",
    //     },
    //     {
    //         _id: "3",
    //         title: "Workout",
    //         description: "Do 30 minutes cardio",
    //         priority: "low",
    //         status: "completed",
    //         dueDate: "2025-01-25",
    //     },
    // ]);

    // Tailwind classes for priority colors
    const priorityColor = {
        high: "text-red-600",
        moderate: "text-yellow-500",
        low: "text-green-600",
    };
    // Tailwind classes for status colors
    const statusColor = {
        pending: "text-gray-500",
        ongoing: "text-blue-600",
        completed: "text-purple-600",
    };

    //fetch tasks 
    useEffect(() => {
        if (!token) return
        (async () => {
            const res = await API("/api/v1/user/crud/get-tasks", "GET", null, token);

            setTasks(res.tasks)
        })()

    }, [token])
    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-20 
                    backdrop-blur-md bg-slate-900/90 
                    border-b border-slate-700/40">

                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                    {/* App Title */}
                    <h1 className="text-2xl font-bold text-purple-400 tracking-wide">
                        TaskFlow
                    </h1>

                    <div className="flex gap-[15%] absolute right-[5%]">
                        {/* //Logout button */}

                        <Link
                            to={`/`}
                            className={`px-5 py-1.5 rounded-lg text-white
                                    bg-purple-600 hover:bg-purple-700
                                    transition shadow `}
                            onClick={(() => {
                                logout()
                            })}
                        >
                            Logout
                        </Link>

                        {/* Home Button */}
                        <Link
                            to="/"
                            className="text-purple-400 hover:text-purple-300 transition text-xl"
                            title="Go to Home"
                        >
                            <FaHome size={26} />
                        </Link>
                    </div>

                </div>
            </nav>
            <div className="min-h-screen bg-slate-900 text-white px-6 py-8 relative z-10 mt-10 ">
                {deleteModal && <DeleteTaskModal task={task} />}
                {editModal && <EditTaskModal task={task} />}
                {createTaskModal && <CreateTaskModal />}

                {/* Heading & Add Task Button */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-purple-400">My Tasks</h1>

                    <button
                        className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-lg shadow 
                     text-white font-semibold"
                        onClick={() => {
                            setCreateTaskModal(true)
                        }}
                    >
                        + Add New Task
                    </button>
                </div>

                {/* Tasks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tasks == null ? <p>No tasks yet!</p> : tasks?.map((task) => (
                        <div
                            key={task._id}
                            className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
                        >
                            {/* Title */}
                            <h2 className="text-xl font-semibold mb-2">{task.title}</h2>

                            {/* Description */}
                            <p className="text-gray-300 text-sm mb-4">{task.description}</p>

                            {/* Badges */}
                            <div className="flex gap-3 mb-4 items-center">
                                <span
                                    className={` text-[0.9rem] rounded-full ${priorityColor[task.priority]}`}
                                >
                                    <span className="text-white">Task Priority:</span> {task.priority.toUpperCase()}
                                </span>

                                <span
                                    className={` text-[0.9rem] rounded-full ${statusColor[task.status]}`}
                                >
                                    <span className="text-white">Task Status:</span> {task.status.toUpperCase()}
                                </span>
                            </div>

                            {/* Due Date */}
                            <p className="text-gray-400 text-sm mb-5">
                                <span className="text-purple-300 font-medium">Due:</span>{" "}
                                {task.dueDate}
                            </p>

                            {/* Edit / Delete buttons */}
                            <div className="flex gap-4 mt-4">
                                <button onClick={(() => {
                                    setTask(task)
                                    setEditModal(true)
                                })} className=" hover:bg-green-600 font-medium transition cursor-pointer bg-green-500 text-white px-4 py-0.5 rounded-2xl">

                                    Edit
                                </button>

                                <button className=" hover:bg-red-600 font-medium transition cursor-pointer bg-red-500 text-white px-4 py-0.5 rounded-2xl"
                                    onClick={() => {
                                        setTask(task)
                                        setDeleteModal(true)
                                    }}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </>
    );
}
