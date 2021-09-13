import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4e3f5b5e-2baf-457b-9c14-722f665306af'
    },
})
