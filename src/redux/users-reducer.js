export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"

let initialState = {
    users: []
}

const usersReducer = (state = initialState,action) => {
    switch (action.type){
        case FOLLOW:
            return{
                ...state,
                users: state.users.map(item => {
                    if(item.id === action.userId){
                        return {...item, followed: true}
                    }
                    return item;
                })
            }
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(item => {
                    if(item.id === action.userId){
                        return {...item, followed: false}
                    }
                    return item;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) =>({type: UNFOLLOW, userId})
export const setUsersAC = (users) =>({type: SET_USERS, users})

export default usersReducer
