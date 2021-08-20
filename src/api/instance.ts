import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '61621252-ff2c-43d3-a118-9f7f7ab13dae'
    },
})
