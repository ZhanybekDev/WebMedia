import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>

                <Navbar/>

                <div className="app-wrapper-content">

                    <Routes>
                        <Route path="/profile" element={<Profile profilePages={props.state.profilePages}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogsPages={props.state.dialogsPages}/>}/>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
