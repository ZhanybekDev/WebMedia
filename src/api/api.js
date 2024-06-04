import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "7baaa672-b313-4671-8967-649084483f32"
    },
})

export const usersAPI = {
    getUsers(currentPage= 1, pageSize=10 ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) =>{
                return res.data
            })
    },
    unFollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn("Obsolete method, Please use profileApi object")
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    }
}


export const authApi = {
    me(){
        return instance.get(`auth/me`)
    }
}
