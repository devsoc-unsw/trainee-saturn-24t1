const mongoose = require('mongoose');

const tabSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "New Tab"
    },
    tasks: {
        type: Array
    }
})

module.exports = mongoose.model('Tab', tabSchema);

// make a schema object with attributes - doesn't have to be required
// export object

// const taskSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     checked: {
//         type: String,
//         required: true,
//     }
// })