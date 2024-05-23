const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    content: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model('Notes', notesSchema);