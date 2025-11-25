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
}, { timestamps: true })




userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next;
    }

    this.password = await bcrypt.hash(this.password, 10);
    return next;
});




userSchema.methods.generateToken = function () {
    return jwt.sign({ id: this._id }, `${process.env.JWT_SECRET}`, { expiresIn: '7d' })
}

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(this.password, password)

}

export const User = mongoose.model('user', userSchema)

//what if I need to verify this password then I will directly use jwt.verify may be 
