import express from 'express'
import bodyParser from "body-parser"

import {getCourse } from "./components/course"
import {getWeather} from "./components/weather"
import {logger} from "./components/logger"
import {auth} from "./components/auth"

import {port} from "./config"

const app = express()

app.set('view engine', "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

let array: Array<any> = []

app.listen(port, () => {
    console.log(`port ${port}`)
}) 

app.use(logger)

app.use(auth)

app.get("/", (req,res) => {
    let weather = getWeather()
    let course = getCourse()
    res.render("list", {newListItem:array, weather:weather, course:course})
})

app.post("/", (req,res) => {
        array.push(req.body.n)
        res.redirect("/")
})

app.post("/delete", (req,res) => {
    array.splice(array.indexOf(req.query.item), 1),
                      res.redirect("/")
})

