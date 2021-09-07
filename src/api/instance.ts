import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ca7e40f6-a3b2-44a4-9411-ad0ff56cf252'
    },
})
