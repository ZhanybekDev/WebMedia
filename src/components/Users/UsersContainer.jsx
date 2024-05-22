import React from 'react';
import {connect} from 'react-redux'
import {
    follow,
    setCurrentPage,
    toggleFollowingInProgress,
    unFollow,
    getUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import loading from '../../assets/loading.svg'
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(this.props.pageSize)
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

let mapStateToProps = (state) => {
    return {
        users: state.usersPages.users,
        pageSize: state.usersPages.pageSize,
        totalUsersCount: state.usersPages.totalUsersCount,
        currentPage: state.usersPages.currentPage,
        isFetching: state.usersPages.isFetching,
        followingInProgress: state.usersPages.followingInProgress
    }
}


export default connect(mapStateToProps,
    {follow, unFollow, setCurrentPage, toggleFollowingInProgress, getUsers})(UsersContainer);
