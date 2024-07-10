import express from "express"
import {getSite, postSite} from "../controller/SiteController.js"

const route = express.Router()

route.get("/site", getSite)
route.post("/site", postSite)


export default route