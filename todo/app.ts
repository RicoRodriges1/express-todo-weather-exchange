import express from 'express'
import bodyParser from "body-parser"

import {course} from "./components/course"
import {weather} from "./components/weather"
import {logger} from "./components/logger"
import {auth} from "./components/auth"

const app = express()

app.set('view engine', "ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))

let array: Array<any> = []

app.listen(4020, () => {
    console.log("port 4020")
}) 

app.use(logger)

app.use(auth)

app.get("/", (req,res) => {
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

