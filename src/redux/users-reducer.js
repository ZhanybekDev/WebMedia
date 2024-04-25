export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE:
            return{
                ...state,
               currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return{
                ...state,
                // totalUsersCount: action.count
                 totalUsersCount: 40
            }
        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) =>({type: UNFOLLOW, userId})
export const setUsersAC = (users) =>({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) =>({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetchingAC = (isFetching) =>({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer
