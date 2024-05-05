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
import axios from "axios";
import Users from "./Users";
import loading from '../../assets/loading.svg'

class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true
            })
                .then(res => {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(res.data.items);
                    this.props.setTotalUsersCount(res.data.totalCount)
                });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
            withCredentials: true
        })
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items);
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
