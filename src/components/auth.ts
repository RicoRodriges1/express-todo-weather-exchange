import {login, password} from "../../config"
export function auth (req, res, next){
    let encodedData = "Basic " + window.btoa(`${login}:${password}`)
    if (req.header('Authorization') != encodedData) {
        res.set({"WWW-Authenticate" : "Basic realm='How about authorization?'"})
        res.sendStatus(401)
    } 
    else {
        next()
    }
}