const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: "New Task"
    },
    description: {
        type: String,
        default: "Task type"
    },
    due_date: {
        type: Object,
        default: new Date()
    },
    checked: {
        type: Boolean,
        default: false
    },
    edit_mode: {
        type: Boolean,
        default: false
    },
    hidden: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskSchema);