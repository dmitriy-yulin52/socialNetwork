import axios from "axios";

// export const instanceUsers = axios.create({
//     withCredentials: true,
//     baseURL:'https://social-network.samuraijs.com/api/1.0/',
// })
//
// export const instanceAuth = axios.create({
//     withCredentials: true,
//     baseURL:'https://social-network.samuraijs.com/api/1.0/',
// })
//
// export const instanceProfile = axios.create({
//     withCredentials: true,
//     baseURL:'https://social-network.samuraijs.com/api/1.0/',
// })


export const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '16c3e6ed-d976-488c-9ad1-316446a6a849'
    },
})
