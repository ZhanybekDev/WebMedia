import React from "react"
import Paginator from "./Paginator";
import User from "./User";

const Users = (props) => {

    return (
        <div>
            <Paginator totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
            />

            {props.users.map(item => (
                <User item={item}
                      followingInProgress={props.followingInProgress}
                      unFollow={props.unFollow}
                      follow={props.follow}
                />
            ))}
        </div>
    )
}

export default Users
