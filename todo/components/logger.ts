import fs from "fs"

export function logger(req, res, next){
    let now = new Date()
    let hour = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let data = `${hour}:${minutes}:${seconds} ${req.method} ${req.url} ${req.get("user-agent")}`
    console.log(data)
    fs.appendFile("server.log", data + "\n", function(){})
    next()
}
