import {instance} from "./instance";
import {ContactsType, PhotosType} from "../Redux/Profile/ProfileReducer";


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<ResponseTypeUsers>(`users?page=${currentPage}&count=${pageSize}`,)
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`)
    },
    unFollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },
    getProfile(userId: string) {
        return profileAPI.getProfile(userId)
    },

}

export const authAPI = {
    me() {
        return instance.get<ResponseType<MeLoginType>>(`auth/me`)
    },
    Login(email: string, password: string, rememberMe: boolean = false, captcha: string | null) {
        return instance.post<ResponseType>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha,
        })
    },
    Logout() {
        return instance.delete<ResponseType>(`auth/login`)
    },
    getCaptcha() {
        return instance.get<CaptchaUrlType>(`security/get-captcha-url`)
    }
}


export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<GetProfileType>(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status})
    }
}


//types response answer
// authAPI type
type MeLoginType = {
    id: number,
    email: string,
    login: string,
}

export type ResponseType<D = {}> = {
    messages: string[],
    resultCode: number,
    data: D,
}

type CaptchaUrlType = {
    url: string,
}

//usersAPI type
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

//profileAPI type
type GetProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType,
}