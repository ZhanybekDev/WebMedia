import React from 'react';
import {connect} from 'react-redux'
import {
    follow, requestUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unFollow
} from "../../redux/users-reducer";
import Users from "./Users";
import loading from '../../assets/loading.svg'
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/users-selectors'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <img src={loading} alt="loading"/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       followingInProgress={this.props.followingInProgress}
                />
            </>

        );
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPages.users,
//         pageSize: state.usersPages.pageSize,
//         totalUsersCount: state.usersPages.totalUsersCount,
//         currentPage: state.usersPages.currentPage,
//         isFetching: state.usersPages.isFetching,
//         followingInProgress: state.usersPages.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps,
        {follow, unFollow, setCurrentPage, toggleFollowingInProgress, requestUsers})
)(UsersContainer)
