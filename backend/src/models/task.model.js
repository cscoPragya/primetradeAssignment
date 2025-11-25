//const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Task title is required"],
        },

        description: {
            type: String,
        },

        priority: {
            type: String,
            enum: ["high", "moderate", "low"],
            default: "moderate",
        },

        status: {
            type: String,
            enum: ["pending", "ongoing", "completed"],
            default: "pending",
        },

        dueDate: {
            type: Date,
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

export const Task = mongoose.model("Task", taskSchema);


