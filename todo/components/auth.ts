export function auth (req, res, next){
    if (req.header('Authorization') != 'Basic YWRtaW46YWRtaW4=') {
        res.set({"WWW-Authenticate" : "Basic realm='How about authorization?'"})
        res.sendStatus(401)
    } 
    next()
}