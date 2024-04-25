import React from "react"
import styles from "./users.module.css";
import userPhoto from "../../assets/ava.jpg";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for(let i= 1; i <= pagesCount; i++ ){
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map(item => (
                        <span className={props.currentPage === item && styles.selectedPage}
                              onClick={() => {
                                  props.onPageChanged(item)
                              }}
                        >{item}</span>
                    ))
                }
            </div>
            {props.users.map(item => (
                <div key={item.id}>
                        <span>
                            <div>
                                <img src={item.photos.small !== null ? item.photos.small : userPhoto}
                                     alt={item.fullName} className={styles.userPhoto}/>
                            </div>

                            <div>
                                {item.followed ?
                                    <button onClick={() => props.unfollow(item.id)}>Unfollow</button> :
                                    <button onClick={() => props.follow(item.id)}>Follow</button>
                                }
                            </div>
                        </span>
                    <span>
                            <span>
                                <div>{item.name}</div>
                                <div>{item.status}</div>
                            </span>

                            <span>
                                <div>item.location.city</div>
                                <div>item.location.country</div>
                            </span>
                        </span>
                </div>
            ))}
        </div>
    )
}

export default Users
