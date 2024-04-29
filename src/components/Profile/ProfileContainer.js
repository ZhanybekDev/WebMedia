import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`)
            .then(res => {
                this.props.setUserProfile(res.data)
            });
    }

    render(){
        return (
            <div>
                <Profile {...this.props}
                    profile={this.props.profile}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePages.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
