import {instanceHeader, instanceProfile, instanceUsers} from "./instance";


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instanceUsers.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },
    follow(userId:number){
        return instanceUsers.post(`follow/${userId}`)
    },
    unFollow(userId:number){
        return instanceUsers.delete(`unfollow/${userId}`)
    },
    // postUsers(userId: number) {
    //     return instance.post(`follow/${userId}`)
    //         .then(response => response.data)
    // },
    // deleteUsers(userId:number) {
    //     return instance.delete(`follow/${userId}`)
    //         .then(response => response.data)
    // }
}

    export const headerAPI = {
        getHeader() {
            return instanceHeader.get(`auth/me`,)
                .then(response => response.data)
        }
    }

    export const profileAPI = {
        getProfile(userId: string) {
            return instanceProfile.get(`profile/` + userId)
                .then(response => response.data)

        }
    }



