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
    }
}


export const getUsers2 = (currentPage= 1, pageSize=10 ) => {
    return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then((res) =>{
            return res.data
        })
}
