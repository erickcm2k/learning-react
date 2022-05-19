const express = require("express");
const router = express.Router();

const {
  create,
  deleteTodo,
  getTodo,
  getTodos,
  toggleTodoCompletion,
} = require("../controllers/todo");

router.post("/add", create);

router.get("/get/:id", getTodo);

router.get("/get", getTodos);

router.delete("/delete", deleteTodo);

router.put("/setcompleted", toggleTodoCompletion);

router.put("/setuncompleted", toggleTodoCompletion);

module.exports = router;
