import mongoose from 'mongoose'
import bcrypt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false

    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
        required: true
    }
})

export const User = mongoose.model('user', userSchema)


userSchema.pre('save', (async (next) => {

    // this will run whenever a user being created
    if (!this.isModified("password")) return next();

    //other wise just give a hashed password
    this.password = bcrypt.hash(this.password, 10)
    //don't need to return anything it will automatically gonna change the password
    next()
}))



userSchema.methods.generateToken = (() => {
    return jwt.sign({ id: this._id }, `${process.env.JWT_SECRET}`, { expiresIn: '7d' })
})

userSchema.methods.comparePassword = (async () => {
    return bcrypt.compare(this.password, password)

})

//what if I need to verify this password then I will directly use jwt.verify may be 
