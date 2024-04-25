import React, {Component} from 'react';
import styles from './users.module.css';
import axios from "axios";
import userPhoto from '../../assets/ava.jpg';

class Users extends Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(res => {
                    this.props.setUsers(res.data.items);
                    this.props.setTotalUsersCount(res.data.totalCount)
                });
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []

        for(let i= 1; i <= pagesCount; i++ ){
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {
                        pages.map(item => (
                             <span className={this.props.currentPage === item && styles.selectedPage}
                                   onClick={() => {this.onPageChanged(item)}}
                             >{item}</span>
                        ))
                    }
                </div>
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
