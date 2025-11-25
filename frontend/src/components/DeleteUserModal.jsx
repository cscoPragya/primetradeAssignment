import { useEffect } from "react";

export default function DeleteUserModal({ user }) {
    if (!user) return null;
    const onClose = () => { }
    const onDelete = () => { }


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
          w-full max-w-md 
          shadow-xl 
          border border-slate-700
          max-h-[85vh] 
          overflow-y-auto
        "
            >
                <h2 className="text-2xl font-semibold text-purple-400 mb-4">
                    Delete User?
                </h2>

                <p className="text-gray-300 mb-3">
                    <span className="text-purple-300 font-medium">Username:</span> {user.username}
                </p>

                <p className="text-gray-300 mb-3">
                    <span className="text-purple-300 font-medium">Email:</span> {user.email}
                </p>

                <p className="text-gray-300 mb-6">
                    Are you sure you want to delete this user?
                    This action cannot be undone.
                </p>

                {/* BUTTONS */}
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-slate-700 text-white hover:bg-slate-600 transition"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onDelete}
                        className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 
                       text-white transition shadow"
                    >
                        Delete User
                    </button>
                </div>

            </div>
        </div>
    );
}
