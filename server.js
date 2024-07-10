import express from "express";
import cors from "cors";
import userRoute from "./routes/UsersRoute.js"
import projekRoute from "./routes/ProjectRoute.js"
import todoRoute from "./routes/todoRoute.js"
import siteRoute from "./routes/SiteRoute.js"

const app = express();
//middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//route
app.use(userRoute);
app.use(projekRoute)
app.use(todoRoute)
app.use(siteRoute)

app.listen(5000, () => console.log('server listening at 5000'));