const express = require("express");

//for exporting logic
const {
  home,
  createTodo,
  getAllTodo,
  deleteTodo,
} = require("../controllers/todoControllers");

/* Router method for for using the routers */
const router = express.Router();

/* we create userrouters and export them in app js for use  */
router.get("/", home);
router.post("/createTodo", createTodo);
router.get("/getAllTodo", getAllTodo);
router.get("/deleteTodo/:id", deleteTodo);

module.exports = router;
