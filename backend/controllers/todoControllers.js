//require schema for performing action
const Todo = require("../models/todoModel");

//home router and its logic.for basic checking of working of app
const home = (req, res) => {
  res.send("hello prajwal");
};

//logic for todo app

//creating the todo
const createTodo = async (req, res) => {
  try {
    //we destructure task and description from req.body
    const { task, description } = req.body;
    if (!task || !description) {
      throw new Error("task and description are Required");
    }
    const todo = await Todo.create({ task, description });
    res.status(201).json({
      sucess: true,
      message: "User creted Succesfully",
      todo,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      sucess: true,
      message: "task not created succesfully",
    });
  }
};
//geting all todo
const getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).json({
      sucess: true,
      todo,
    });
  } catch (error) {
    console.log(error);
  }
};
//updating all todo
const updateTodo = () => {};
//deleting the todo
const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndRemove(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "todo deleted Successfully",
      todo,
    });
  } catch (err) {
    res.status(404).json({ error: "not found", message: err.message });
  }
};

/* Exporting the module for using in routers */
module.exports = { home, createTodo, getAllTodo, deleteTodo };
