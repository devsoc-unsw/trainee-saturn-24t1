const express = require("express");
const mongoose = require("mongoose");
const Task = require('./models/task');
let cors = require("cors");

// Create our app
const app = express();
mongoose.connect("mongodb://localhost/achievemint");
const db = mongoose.connection;

db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Connected to database'));
// Make sure we are only accepting/outputting JSON
app.use(express.json());
app.use(cors());


app.get("/testget", async (req, res) => {
    try {
        let tasks = await Task.find();
        res.status(200);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post("/testmake", async (req, res) => {
    //uncomment line underneath
    db.db.dropDatabase();

    const task = new Task({
        name: req.body.name,
        checked: req.body.checked,
    })

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Listen on port 5001 - change this if you get an error "port already in use"
app.listen(5001, async () => {
    console.log("Server is running on port 5001");
});