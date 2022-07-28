import axios from "axios"

let weather = 'перезавантажте сторінку'

const sendGetRequest = async () => {
    try {
        const res = await axios.get("https://ua.sinoptik.ua/")
        let regex = /(<div class="main loaded" id="bd1">)([\s\S]*?)<div class="mid1">/
        let result = regex.exec(res.data)
        weather = result[0]
    } catch (err) {
        console.error(err)
    }
}

export const getWeather = () => {
    sendGetRequest()
    return weather
}