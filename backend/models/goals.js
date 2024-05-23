const mongoose = require('mongoose');

const goalsSchema = new mongoose.Schema({
    content: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model('Goals', goalsSchema);