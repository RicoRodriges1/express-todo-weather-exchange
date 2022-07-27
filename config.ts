import * as dotenv from 'dotenv'
dotenv.config()
const login = process.env.LOGIN
const password = process.env.PASSWORD
const port = process.env.PORT
export {login, password, port}

