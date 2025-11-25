import { Router } from 'express'
import { protectRouteForAdmin } from '../middlewares/protectedRoutes.middleware.js'
import { deleteAnyUser, getAllTasks, getAllUsers } from '../controllers/crud.controller.js';

const router = Router()
router.get("/users", protectRouteForAdmin, getAllUsers);
router.get("/all-tasks", protectRouteForAdmin, getAllTasks);
router.delete("/deleteAnyUser/:id", protectRouteForAdmin, deleteAnyUser);
// router.put("/task/:id", isAuthenticated, protectRouteForAdmin, updateAnyTask);


export default router