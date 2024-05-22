import {usersAPI} from "../api/api";

export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
export const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return{
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId) =>({type: UNFOLLOW, userId})
export const setUsers = (users) =>({type: SET_USERS, users})
export const setCurrentPage = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) =>({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) =>({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) =>({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const getUsers = (currentPage, pageSize) => {

    return (dispatch) => {
    dispatch(toggleIsFetching(true))

    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        });
}}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.follow(userId)
            .then(res => {
                if(res.data.resultCode === 0){
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            });
    }
}

export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId))
        usersAPI.unFollow(userId)
            .then(res => {
                if(res.data.resultCode === 0){
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(toggleFollowingInProgress(false, userId))
            });
    }
}

export default usersReducer
