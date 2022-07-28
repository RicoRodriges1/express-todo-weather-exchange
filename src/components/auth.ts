import {login, password} from "../config"
export function auth (req, res, next){
    let encodedData = "Basic " + Buffer.from(`${login}:${password}`).toString('base64')
    if (req.header('Authorization') != encodedData) {
        res.set({"WWW-Authenticate" : "Basic realm='How about authorization?'"})
        res.sendStatus(401)
    } 
    else {
        next()
    }
}