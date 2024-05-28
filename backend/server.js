const express = require("express");
const mongoose = require("mongoose");
const Task = require('./models/task');
const Goals = require('./models/goals');
const Notes = require('./models/notes');
const Favorite = require("./models/favorite");
const Tabs = require('./models/tab');
let cors = require("cors");

// Create our app
const app = express();
mongoose.connect("mongodb://127.0.0.1/achievemint");
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

// Tab
app.get("/tabsget", async (req, res) => {
    try {
        let tabs = await Tabs.find();
        res.status(200);
        res.json(tabs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post("/tabspost", async (req, res) => {
    const tab = new Tabs({
        id: req.body.id,
        content: req.body.content,
        tasks: req.body.tasks
    })

    try {
        const newGoals = await tab.save();
        res.status(201).json(newGoals);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.put('/tabsput', async (req, res) => {
    try {
        const updatedTabs = await Tabs.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedTabs) {
            return res.status(404).json({ message: 'Tabs not found' });
        }
        res.status(200).json(updatedTabs);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Goals
app.get("/goalsget", async (req, res) => {
    try {
        let goals = await Goals.findOne();
        res.status(200);
        res.json(goals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post("/goalspost", async (req, res) => {
    console.log("Request logged")
    const goals = new Goals({
        content: req.body.content
    })

    try {
        const newGoals = await goals.save();
        res.status(201).json(newGoals);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.put('/goalsput', async (req, res) => {
    try {
        const updatedGoals = await Goals.findOneAndUpdate(
            {},
            req.body,
            { new: true }
        );

        if (!updatedGoals) {
            return res.status(404).json({ message: 'Goals not found' });
        }
        res.status(200).json(updatedGoals);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// just in case..
app.delete('/goalsdel', async (req, res) => {
    try {
        const deletedGoals = await Goals.findByIdAndDelete(req.params.id);
        if (!deletedGoals) {
            return res.status(404).json({ message: 'Goals not found' });
        }

        res.status(200).json({ message: 'Goals deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Notes
app.get("/notesget", async (req, res) => {
    try {
        let notes = await Notes.findOne();
        res.status(200);
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post("/notespost", async (req, res) => {
    //uncomment line underneath
    const notes = new Notes({
        content: req.body.content
    })

    try {
        const newNotes = await notes.save();
        res.status(201).json(newNotes);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.put('/notesput', async (req, res) => {
    try {
        const updatedNotes = await Notes.findOneAndUpdate(
            {},
            req.body,
            { new: true }
        );

        if (!updatedNotes) {
            return res.status(404).json({ message: 'Notes not found' });
        }
        res.status(200).json(updatedNotes);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



// Favorites Endpoints
app.get("/favorites", async (req, res) => {
    try {
        const favorites = await Favorite.find();
        res.status(200).json(favorites);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post("/favorites", async (req, res) => {
    const favorite = new Favorite({
        userId: req.body.userId,
        itemId: req.body.itemId,
    });

    try {
        const newFavorite = await favorite.save();
        res.status(201).json(newFavorite);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete("/favorites/:id", async (req, res) => {
    try {
        await Favorite.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Favorite deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Listen on port 5001 - change this if you get an error "port already in use"
app.listen(5001, async () => {
    console.log("Server is running on port 5001");
});