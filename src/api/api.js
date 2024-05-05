import axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0"

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "7baaa672-b313-4671-8967-649084483f32"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0",
})

export const getUsers = (currentPage= 1, pageSize=10 ) => {
    return axios.get(baseUrl + `/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    }).then((res) =>{
        return res.data
    })
}
