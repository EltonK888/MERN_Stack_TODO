const express = require('express');
const app = express(); // create the express app
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Todo = require('./todo.model')

const PORT = 4000;
const todosRoutes = express.Router();


app.use(cors());
app.use(bodyParser.json());
app.use('/todos', todosRoutes);

// connect to the MongoDB database
mongoose.connect("mongodb://localhost:27017/todos", {useNewUrlParser: true}); 
const db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error: "));
db.once('open', () => {
    console.log("MongoDB connection estabilished");
});


// todos/
todosRoutes.get('/', (req, res) => {
    Todo.find((err, todos) => {
            if (err) {
                res.status(400).send("error on GET todos")
            } else {
                res.status(200).json(todos);
            }
        }
    )
});


// todos/id
todosRoutes.get('/:id', (req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if (err) {
            res.status(400).send(`Cannot find a todo with id ${req.params.id}`);
        } else {
            console.log(todo);
            res.status(200).json(todo);
        }
    })
});


// todos/add
todosRoutes.post('/add', (req, res) => {
    console.log(req.body);
    Todo.create(req.body, (err) => {
        if (err) {
            res.status(400).send("Error adding todo");
        } else {
            res.status(200).send("Todo added successsfully");
        }
    });
});


// todos/update/id
todosRoutes.post('/update/:id', (req, res) => {
    const updateTodo = req.body;
    Todo.findById(req.params.id, (err, todo) => {
        if (err) {
            res.status(400).send("Error updating todo");
        } else {
            console.log(todo);
            for (let key in updateTodo) {
                todo[key] = updateTodo[key];
            }
            todo.save();
            console.log(todo);
            res.status(200).send("Todo updated successfully");
        }
    })

});

app.listen(PORT, () => {
    // start the server and listen on port 4000
    console.log(`running on PORT: ${PORT}`);
});


app.get("/", (req, res) => {
    console.log("hi");
    res.status(200).send("hi");
});