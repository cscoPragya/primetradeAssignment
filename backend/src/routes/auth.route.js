
import { Router } from 'express'
import { registerController, loginController, validateTokenController } from '../controllers/auth.controller.js'

const router = Router()

router.post('/register', registerController);
router.post('/login', loginController)
router.get('/validate-token', validateTokenController)
// router.get('/logout', logoutController)


export default router