export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"

let initialState = {
    users: [
        {id: 1, followed: false, fullName: "Zhanybek", status: "I'm a developer", location: {city: "Bishkek", country: "Kyrgyzstan"}},
        {id: 2, followed: true, fullName: "Nursultan", status: "I'm a student", location: {city: "Bishkek", country: "Kyrgyzstan"}},
        {id: 3, followed: false,fullName: "Amina", status: "I'm a student", location: {city: "Bishkek", country: "Kyrgyzstan"}},
    ]
}

const usersReducer = (state = initialState,action) => {
    switch (action.type){
        case FOLLOW:

        case UNFOLLOW:

        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) =>({type: UNFOLLOW, userId})

export default usersReducer
