const express = require("express");

//for exporting logic
const {
  home,
  createTodo,
  getAllTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoControllers");

/* Router method for for using the routers */
const router = express.Router();

/* we create userrouters and export them in app js for use  */
router.get("/", home);
router.post("/createTodo", createTodo);
router.get("/getAllTodo", getAllTodo);
router.get("/deleteTodo/:id", deleteTodo);
router.put("/updateTodo/:id", updateTodo);

module.exports = router;
