import { User } from '../DB/db.js'

export const registerController = async (req, res, next) => {

    const { username, email, password, role } = req.body
    if (!username || !email || !password || !role) {
        res.status(400).json({ message: "All fields are mandatory!" })
    }
    //may be on the time of registration we also do create jwt and save it so just let me
    //otherwise just insert them into the schema
    try {

        const createdUser = await User.create({
            username,
            email,
            password,
            role
        })
        const token = createdUser.generateToken()
        res.status(201).json({ user: createdUser, token: token })

    } catch (err) {
        console.log("Error creating user in db:", err.message)
        res.status(500).json({ message: 'Internal server error' })
    }

}

export const loginController = async (req, req, next) => {
    const { email, password, role } = req.body
    if (!email || !password || !role) {
        return res.status(400).json({ message: "All fields are mandatory!" })
    }
    //otherwise just find them with their email
    const user = await User.findOne({ email }).select("+password")
    if (!user) {
        return res.status(401).json({ message: "User doesn't exists!" })
    }

    //now check password 
    //token logina ya registration k bakt check nhi kiya jata but diya jata h also
    //hume jo protected routes hote h bha pr token ko check kiya jata h
    if (!user.comparePassword(password)) {
        return res.status(401).json({ message: 'Invalid username or password!' })
    }

    //otherwise just give him a token yrr itna bhi kya bhab khana!!!
    res.status(200).json({ user: user, token: token })
}

