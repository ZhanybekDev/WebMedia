import React from 'react'
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";

export function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2
        }
        this.props.getUserProfile(userId)
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

const WhitsUrlContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile})(WhitsUrlContainerComponent)
