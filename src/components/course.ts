import axios from "axios"

let course = 'перезавантажте сторінку!'

export const sendGetRequest = async () => {
    try {
        const res = await axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        let usd: Array<string> = []
        let eur: Array<string> = []
        let btc: Array<string> = []
        usd = [`${res.data[0].ccy} to ${res.data[0].base_ccy}`, res.data[0].buy, res.data[0].sale]
        eur = [`${res.data[1].ccy} to ${res.data[1].base_ccy}`, res.data[1].buy, res.data[1].sale]
        btc = [`${res.data[2].ccy} to ${res.data[2].base_ccy}`, res.data[2].buy, res.data[2].sale]
        course = 
            `
            <tr>
                <td width="150">Валюта</td>
                <td width="150">Покупка</td>
                <td width="200">Продажа</td>
            </tr>        
            <tr>
                <td width="150">${usd[0]}</td>
                <td width="150">${usd[1]}</td>
                <td width="200">${usd[2]}</td>
            </tr>
            <tr>
                <td width="150">${eur[0]}</td>
                <td width="150">${eur[1]}</td>
                <td width="200">${eur[2]}</td>
            </tr>
            <tr>
                <td width="150">${btc[0]}</td>
                <td width="150">${btc[1]}</td>
                <td width="150">${btc[2]}</td>
            </tr>
        `
    } catch (err) {
        console.error(err)
    }
}

export {course}

