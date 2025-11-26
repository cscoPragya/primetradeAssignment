
import { User } from '../models/user.model.js'
import { Task } from '../models/task.model.js'


//for user

export const getTasksController = async (req, res, next) => {
    //ab yha hum sabhi tasks lane h hume jo ki user is specific user s related ho 

    const user = req.user;
    try {

        const tasks = await Task.find({ user: user._id })
        if (!tasks) {
            return res.status(404).json({ message: "Tasks not found!" })
        }

        //but if the tasks found then we will simple return them,

        res.status(200).json({ tasks })
    } catch (err) {
        console.error("Error in getTasksController:", err.message);
        return res.status(500).json({ message: 'Internal server error!' })
    }
}

export const addTaskController = async (req, res, next) => {
    const { title, description, priority, status, dueDate } = req.body
    if (!title || !dueDate) {
        //cause description is optional, priotity does have default value, and status will be 
        //pending by default

        return res.status(400).json({ message: 'title and dueDate is required' })
    }

    //otherwise would just create that task

    try {
        const createdTask = await Task.create({
            title,
            description: description || "",
            priority: priority,
            status: status,
            dueDate,
            user: req.user._id
        })

        return res.status(201).json({ task: createdTask })
    } catch (err) {

        console.error("Error in addTaskController:", err.message);
        return res.status(500).json({ message: 'Internal server error!' })
    }
}

export const deleteTaskByIdController = async (req, res, next) => {
    //we will gonna receive that mongoDB id in params
    const { id } = req.params
    if (!id) {
        return res.status(400).json({ message: "Task Id is required!" })
    }

    try {

        await Task.deleteOne({ _id: id })
        return res.status(200).json({ message: "Task deleted successfully!" })
    } catch (err) {

        console.error("Error in deleteTaskByIdController:", err.message);
        return res.status(500).json({ message: 'Internal server error!' })
    }
}
export const updateTaskByIdController = async (req, res, next) => {
    const { id } = req.params
    // const { title, description, dueDate, status, priority } = req.body

    if (!id) {
        return res.status(400).json({ message: "Id is required!" })
    }
    try {
        console.log(req.body)
        const updatedTask = await Task.findOneAndUpdate({ _id: id }, req.body, { new: true })
        return res.status(200).json({ task: updatedTask })

    } catch (err) {

        console.error("Error in updateTaskByIdController:", err.message);
        return res.status(500).json({ message: 'Internal server error!' })
    }
}



//for admin
export const getAllUsers = async (req, res, next) => {
    //ab agr yha tak aaya h to admin hi hoga


    try {
        const users = await User.find()
        if (!users) {
            return res.status(404).json({ message: 'users not found!' })
        } else {
            return res.status(200).json({ users })
        }
    } catch (err) {
        console.error("error in getAllUsers controller:", err.message)
        return res.status(500).json({ message: "Internal server error!" })
    }

}

export const getAllTasks = async (req, res, next) => {


    try {

        //but ye to may be kisi kaam k nahi h kyuki jab user kisi user par click kreha tab hi 
        //kebal us user s related hume sabhi tasks fetch krne honge 
        const tasks = await Task.find()
        if (!tasks) {
            return res.status(404).json({ message: 'tasks not found!' })
        } else {
            return res.status(200).json({ tasks })
        }
    } catch (err) {
        console.error("error in getAllTasks:", err.message)
        return res.status(500).json({ message: "Internal server error!" })
    }
}

export const deleteAnyUser = async (req, res, next) => {
    //may be bas sabhi users ko delete kr skta 
    const { id } = req.params
    //ye id user ki hogi

    if (!id) {
        return res.status(400).json({ message: 'is is required to delete the user' })
    }

    try {
        const deletedUser = await User.findOneAndDelete({ _id: id })
        return res.status(200).json({ deletedUser })
    } catch (err) {
        console.error("Error in deleteAnyUser controller,", err.message)
        return res.status(500).json({ message: 'Internal server error!' })
    }


}

// export const updateAnyTask = async (req, res, next) => {

// }