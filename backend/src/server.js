import dotenv from "dotenv";
dotenv.config();
import express from 'express'
import cors from 'cors'
import { connectDB } from './DB/db.js'

const app = express()


//mandatory middlewares setup
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(
    {
        credentials: true,
        origin: '*',
    }
))
//connect to db
connectDB()


// routes setup
import authRoutes from './routes/auth.route.js'
import userCrudRoutes from './routes/crudUser.route.js'
import adminCrudRoutes from './routes/crudAdmin.route.js'

app.use('/api/v1/user', authRoutes)//will handle both normal user and admin
app.use('/api/v1/user/crud', userCrudRoutes)//will only handle user crud operations!
app.use('/api/v1/admin/crud', adminCrudRoutes)



app.listen(3000, () => {
    console.log("server is running on port 3000")
})