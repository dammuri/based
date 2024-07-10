import express from "express";
import {getTodoList, addTodoList} from "../controller/todocontroller.js"

const route = express.Router()

route.get('/todo/:idprojek', getTodoList)
route.post('/todo/:idprojek', addTodoList)

export default route