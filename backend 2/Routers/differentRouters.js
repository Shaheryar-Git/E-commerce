import  express from "express";
import signInController from "../Controllers/signInController.js";
import logInController from "../Controllers/loginInController.js";
const Routers = express.Router()


Routers.post("/signIn",signInController)
Routers.post("/logIn",logInController)

export default Routers