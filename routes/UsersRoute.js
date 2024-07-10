import express from "express";
import  {postUsers, getUsers}  from "../controller/UserController.js";

const route = express.Router();

route.get('/users', getUsers);
route.post('/users', postUsers)

export default route; 