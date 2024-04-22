import React from 'react';
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/ava.jpg'

const Users = (props) => {
    if(props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {
                props.setUsers(res.data.items)
            })

    }


    // props.setUsers([
    //     {
    //         id: 1,
    //         photoUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1",
    //         followed: false,
    //         fullName: "Zhanybek",
    //         status: "I'm a developer",
    //         location: {city: "Bishkek", country: "Kyrgyzstan"}
    //     },
    //     {
    //         id: 2,
    //         photoUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1",
    {/*        followed: true,*/}
    {/*        fullName: "Nursultan",*/}
    {/*        status: "I'm a student",*/}
    //         location: {city: "Bishkek", country: "Kyrgyzstan"}
    //     },
    //     {
    //         id: 3,
    //         photoUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1",
    //         followed: false,
    //         fullName: "Amina",
    //         status: "I'm a student",
    //         location: {city: "Bishkek", country: "Kyrgyzstan"}
    //     },
    // ])

    return (
        <div>
            {
                props.users.map(item => (
                    <div key={item.id}>
                        <span>
                            <div>
                                <img src={item.photos.small !== null ? item.photos.small : userPhoto} alt={item.fullName} className={styles.userPhoto}/>
                            </div>

                            <div>
                                {
                                    item.followed?
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
                ))
            }
        </div>
    );
};

export default Users;
