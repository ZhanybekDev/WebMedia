import React, {Suspense} from 'react'
import './App.css';
import Navbar from "./components/NavBar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import loading from "./assets/loading.svg";
import store from './redux/redux-store'
const DialogsContainer = React.lazy(() => import("./components/DialogsContainer/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

export function withRouter(Children){
    return(props)=>{
        return <Children {...props}/>
    }
}

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if(!this.props.initialized){
            return <img src={loading} alt="loading"/>
        }

        return (
            <Suspense fallback={<div>Loading...</div>}>
                <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/users/*" element={<UsersContainer/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
            </Suspense>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps,  {initializeApp}),
)(App)

const SocialApp = (props) => {
    return(
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SocialApp
