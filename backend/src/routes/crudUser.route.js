
import { Router } from 'express'
import { protectRouteForUser } from '../middlewares/protectedRoutes.middleware.js'

const router = Router()

//user crud routes
router.get('/get-tasks', protectRouteForUser, getTasksController)
router.post('/add-task', protectRouteForUser, addTaskController)
router.get('/get-task/:id', protectRouteForUser, getTaskByIdController)// ye delayed h abhi jra
router.get('/delete-task/:id', protectRouteForUser, deleteTaskByIdController)
router.post('/update-task/:id', protectRouteForUser, updateTaskByIdController)


export default router