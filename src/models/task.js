const mongoose = require("mongoose") 

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
    },
    status: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})
const Task = mongoose.model("Task", taskSchema);

module.exports = {
    Task
}