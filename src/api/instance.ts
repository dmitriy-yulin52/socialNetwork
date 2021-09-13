import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'af694bcf-90ee-48c8-adc8-36303777d2f2'
    },
})
