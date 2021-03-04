import axios from "axios"

const instance = axios.create({
    baseURL:'https://ttok-back.herokuapp.com/'
})

export default instance