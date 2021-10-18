import {instance} from "./instance";


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<ResponseTypeUsers>(`users?page=${currentPage}&count=${pageSize}`,)
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
        return instance.get<ResponseTypeAuth<MeLoginType>>(`auth/me`)
    },
    Login(email: string, password: string, rememberMe: boolean = false, captcha: string | null) {
        return instance.post<ResponseTypeAuth>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha,
        })
    },
    Logout() {
        return instance.delete<ResponseTypeAuth>(`auth/login`)
    },
    getCaptcha() {
        return instance.get<CaptchaUrlType>(`security/get-captcha-url`)
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


//types response answer
// auth type
type MeLoginType = {
    id: number,
    email: string,
    login: string,
}

export type ResponseTypeAuth<D = {}> = {
    messages: string[],
    resultCode: number,
    data: D,
}

type CaptchaUrlType = {
    url: string,
}

//users type
type UsersItemsType = {
    id: number,
    name: string,
    status: string,
    photos: {
        small: string | null,
        large: string | null,
    },
    followed: boolean,
}

type ResponseTypeUsers = {
    items: Array<UsersItemsType>,
    totalCount: number,
    error: string,
}