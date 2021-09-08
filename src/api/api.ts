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
        console.warn('Obsolete metHod. please profileAPI object')
        return profileAPI.getProfile(userId)
    },

}

export const authAPI = {
    getHeader() {
        return instance.get(`auth/me`,)
    }
}


export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId:string){
        return instance.get(`status/${userId}`)
    },
    updateStatus(status:string){
        return instance.put(`status`,{status})
    }
}
