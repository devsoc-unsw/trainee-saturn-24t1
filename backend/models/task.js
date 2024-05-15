const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    checked: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Task', taskSchema);