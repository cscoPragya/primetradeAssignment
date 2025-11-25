export default function DeleteTaskModal({ task }) {
    if (!task) return null;
    const onClick = () => { }
    const onClose = () => { }
    const onDelete = () => { }

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-slate-800 p-6 rounded-xl w-full max-w-md shadow-xl border border-slate-700">

                <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                    Delete Task?
                </h2>

                <p className="text-gray-300 mb-3">
                    <span className="font-medium text-purple-300">Title:</span> {task.title}
                </p>

                <p className="text-gray-300 mb-6">
                    <span className="font-medium text-purple-300">Description:</span> {task.description}
                </p>

                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-slate-700 text-white hover:bg-slate-600 transition"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onDelete}
                        className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition shadow"
                    >
                        Delete
                    </button>
                </div>

            </div>
        </div>
    );
}
