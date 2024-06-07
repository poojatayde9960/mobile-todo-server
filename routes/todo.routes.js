const router = require("express").Router()

const todoController = require("./../controllers/todo.controller")

router.get("/", todoController.getAllTodo)
    .post("/", todoController.addTodo)
    .put("/:id", todoController.updateTodo)
    .delete("/:id", todoController.deleteTodo)

module.exports = router