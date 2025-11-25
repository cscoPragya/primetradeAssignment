import { User } from '../DB/db.js'
import jwt from 'jsonwebtoken'


export const protectRouteForUser = async (req, res, next) => {


    const token = req.cookies.token || req.headers.authorization?.token?.split(' ')[1]
    if (!token) {
        return res.status(401).json("User need to login or register!")
    }


    const userEmail = jwt.verify(token, `${process.env.JWT_SECRET}`)
    if (!userEmail) {
        return res.status(401).json("User need to login or register!")
    }
    try {
        const user = await User.findOne({ email }).select("+password")
        if (!user) {
            return res.status(401).json("User need to login or register!")
        }

        req.user = user;
        next();

    } catch (err) {
        console.log("error in protectRouteUser middleware:", err.message)
        return res.status(500).json("Internal server error!")
    }
}

export const protectRouteForAdmin = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.token?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Admin needs to login or register!" })
    }

    const email = jwt.verify(token, `${process.env.JWT_SECRET}`)

    try {
        const admin = await User.findOne({ email })
        if (!admin) {
            return res.status(401).json({ message: "Invalid email or password!" })
        }

        //otherwise let's check whether he is admin or a normal user
        if (admin.role !== 'admin') {
            return res.status(403).json({ message: "Admin credentials needed!" })
        } else {
            req.admin = admin;
            next()
        }
    } catch (err) {


        console.error("Error in protectRouteForAdmin middleware:", err.message)
        return res.status(500).json({ message: 'Internal server error!' })
    }
}

