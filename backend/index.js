const express = require("express");
// cors is a security package for making ui requests possible
const cors = require("cors");
// a package for generating id
const uuid = require("uuid");
const app = express();

const PORT = 4000;

// middleware for reading body of requests when it is json
app.use(express.json());
// middleware for security and making requests possible
app.use(cors());

// creating some fake todos // in the future project we have to use dataBase
const todos = [
  {
    id: 1,
    name: "This is todo 1",
    completed: true,
  },
  {
    id: 2,
    name: "This is todo 2",
    completed: true,
  },
  {
    id: 3,
    name: "This is todo 3",
    completed: false,
  },
];

// first route
app.get("/", (req, res) => {
  res.json({ msg: "Todo list is running" });
});

// route for getting todoes
app.get("/todos", (req, res) => {
  res.json({ message: "success response", todos });
});

// route for getting one todo by id
app.get("/todos/:id", (req, res) => {
  // دسترسی به اطلاعات درخواست و روتی که فرستاده شده
  console.log(req.params);
  // پیدا کردن todo مشخص با آی دی مورد نظر
  let todo = todos.filter((todo) => todo.id == req.params.id);
  res.json({ message: "ok 1", todo });
});

////// other routes with GET, POST, DELETE, PUT, PATCH
app.post("/add-todos", (req, res) => {
  todos.push({ id: uuid.v4(), ...req.body });
  res.json({ message: "adding todos", data: todos });
});

app.put("/edit-todo/:id", (req, res) => {
  // finding the todo based on id
  let todo = todos.find((todo) => todo.id == req.params.id);
  // if todo exists
  if (todo) {
    // changing it's name and completed based on req
    todo.name = req.body.name;
    todo.completed = req.body.completed;
    res.json({ message: "editing todo", data: todos });
  } else {
    res.json({ message: "todo not found" });
  }
});

app.delete("/delete-todo/:id", (req, res) => {
  let index = todos.findIndex((todo) => todo.id == req.params.id);
  todos.splice(index, 1);
  res.json({ message: "deleting todo", data: todos });
});

app.listen(PORT, () => {
  console.log("app is running on port ", PORT);
});
