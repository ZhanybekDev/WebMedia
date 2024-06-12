export const getUsers = (state) => {
    return state.usersPages.users
}

export const getPageSize = (state) => {
    return state.usersPages.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPages.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPages.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPages.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPages.followingInProgress
}
