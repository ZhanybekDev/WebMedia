import React, {Component} from 'react';
import styles from './users.module.css';
import axios from "axios";
import userPhoto from '../../assets/ava.jpg';

class Users extends Component {

    constructor(props) {
        super(props)
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(res => {
                    this.props.setUsers(res.data.items);
                });
        }
    }

    render() {
        return (
            <div>
                {this.props.users.map(item => (
                    <div key={item.id}>
                        <span>
                            <div>
                                <img src={item.photos.small !== null ? item.photos.small : userPhoto}
                                     alt={item.fullName} className={styles.userPhoto}/>
                            </div>

                            <div>
                                {item.followed ?
                                    <button onClick={() => this.props.unfollow(item.id)}>Unfollow</button> :
                                    <button onClick={() => this.props.follow(item.id)}>Follow</button>
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
        );
    }
}

export default Users;
