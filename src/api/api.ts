import {instance} from "./instance";


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },
    follow(userId:number){
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId:number){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
}

export const authAPI = {
    getHeader() {
        return instance.get(`auth/me`,)
    }
}



