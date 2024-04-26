import "dotenv/config.js"
import __dirname from "./utils.js"
import express from "express"
import { engine } from "express-handlebars"
import dbConnect from "./src/utils/db.Connect.js"
import indexRouter from "./src/Router/indexRouter.js"
import errorHandler from "./src/middlewares/errorHandler.js"
import pathHandler from "./src/middlewares/pathhandler.js"

//init
const server = express()
const port = 9000
const ready = async() => {
    console.log(`server ready in ${port}`)
    await dbConnect()
};
server.listen(port, ready)


//template engine
server.engine('handlebars', engine())
server.set('view engine', 'handlebars')
server.set('views', __dirname + '/src/views')

//middlewares
server.use(express.json())                           //manejar jsons
server.use(express.urlencoded({ extended: true }))    //leer params y queriesss
server.use(express.static('public'))

//router
server.use("/",indexRouter )           //primero leer todas las rutass
server.use(errorHandler)               //catchear los errores de endpointsss
server.use(pathHandler)                //errores de ruta


