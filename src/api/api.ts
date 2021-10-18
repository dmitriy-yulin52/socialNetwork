import {instance} from "./instance";


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        console.warn('Obsolete metHod. please profileAPI object')
        return profileAPI.getProfile(userId)
    },

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    Login(email: string, password: string,rememberMe:boolean = false,captcha:string | null) {
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha,
        })
    },
    Logout() {
        return instance.delete(`auth/login`)
    },
    getCaptcha(){
        return instance.get<{url:string}>(`security/get-captcha-url`)
    }
}


export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}

