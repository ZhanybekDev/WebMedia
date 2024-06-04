import React from 'react'
import Profile from "./Profile";
import {getUserProfile,getStatus, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
            userId = 31180
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render(){


        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePages.profile,
    status: state.profilePages.status
})

export default compose(
    connect(mapStateToProps,  {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
