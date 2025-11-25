import { createContext, useState } from "react";

export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false)
    const [token, setToken] = useState(null)
    const [tasks, setTasks] = useState(null)
    const [deleteModal, setDeleteModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [createTaskModal, setCreateTaskModal] = useState(false)
    const [deleteUserModal, setDeleteUserModal] = useState(false)

    return (

        <UserContext.Provider value={{ token, setIsLogin, isLogin, setToken, tasks, setTasks, deleteModal, setDeleteModal, editModal, setEditModal, createTaskModal, setCreateTaskModal, deleteUserModal, setDeleteUserModal }}>
            {children}
        </UserContext.Provider>
    )


}

export default UserProvider