import { useEffect, useState } from "react";
import { API } from "../utils/api.js";
import { UserContext } from "../context/UserProvider.jsx";
import { useContext } from 'react'

export default function CreateTaskModal() {
    const { token, createTaskModal, setCreateTaskModal, setTasks } = useContext(UserContext)

    const [form, setForm] = useState({
        title: "",
        description: "",
        priority: "moderate",
        status: "pending",
        dueDate: "",
    });
    //handle create task
    const onCreate = async () => {
        const res = await API("/api/v1/user/crud/add-task", "POST", form, token)
        console.log(res)
        setCreateTaskModal(false)
        const resTasks = await API("/api/v1/user/crud/get-tasks", "GET", null, token);
        console.log(res)
        setTasks(resTasks.tasks)

    }
    const onClose = () => {
        setCreateTaskModal(false)
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Disable background scroll
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">

            {/* MODAL BOX */}
            <div
                className="
          bg-slate-800 
          p-6 
          rounded-2xl 
          w-full max-w-lg 
          shadow-xl 
          border border-slate-700
          max-h-[85vh] 
          overflow-y-auto
        "
            >
                <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                    Create New Task
                </h2>

                {/* Title */}
                <div className="mb-4">
                    <label className="text-purple-300 text-sm">Title</label>
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full mt-1 p-3 bg-slate-700 rounded-lg text-white border border-slate-600 
                       focus:outline-none focus:border-purple-500"
                    />
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label className="text-purple-300 text-sm">Description</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        rows="3"
                        className="w-full mt-1 p-3 bg-slate-700 rounded-lg text-white border border-slate-600 
                       focus:outline-none focus:border-purple-500"
                    />
                </div>

                {/* Priority */}
                <div className="mb-4">
                    <label className="text-purple-300 text-sm">Priority</label>
                    <select
                        name="priority"
                        value={form.priority}
                        onChange={handleChange}
                        className="w-full mt-1 p-3 bg-slate-700 rounded-lg text-white border border-slate-600 
                       focus:outline-none focus:border-purple-500"
                    >
                        <option value="high">High</option>
                        <option value="moderate">Moderate</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                {/* Status */}
                <div className="mb-4">
                    <label className="text-purple-300 text-sm">Status</label>
                    <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        className="w-full mt-1 p-3 bg-slate-700 rounded-lg text-white border border-slate-600 
                       focus:outline-none focus:border-purple-500"
                    >
                        <option value="pending">Pending</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>

                {/* Due Date */}
                <div className="mb-6">
                    <label className="text-purple-300 text-sm">Due Date</label>
                    <input
                        type="date"
                        name="dueDate"
                        value={form.dueDate}
                        onChange={handleChange}
                        className="w-full mt-1 p-3 bg-slate-700 rounded-lg text-white border border-slate-600 
                       focus:outline-none focus:border-purple-500"
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-slate-700 text-white hover:bg-slate-600 transition"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() => onCreate(form)}
                        className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 
                       text-white transition shadow"
                    >
                        Create Task
                    </button>
                </div>
            </div>
        </div>
    );
}
