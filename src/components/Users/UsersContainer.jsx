import React from 'react';
import {connect} from 'react-redux'
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import loading from '../../assets/loading.svg'
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount)
                });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
            });
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
                       unfollow={this.props.unfollow}
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
        isFetching: state.usersPages.isFetching
    }
}


export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,})(UsersContainer);
