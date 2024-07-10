import express from "express";
import {getProject, postProject, editProject} from "../controller/ProjectController.js"

const route = express.Router()

route.get('/projek', getProject)
route.post('/projek', postProject)
route.post('/projek/:no', editProject)

export default route