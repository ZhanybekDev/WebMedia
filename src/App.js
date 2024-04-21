import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/DialogsContainer/DialogsContainer";
import Users from "./components/Users/Users";

function App(props) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile store={props.store}/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>}/>
                    <Route path="/users/*" element={<Users/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
