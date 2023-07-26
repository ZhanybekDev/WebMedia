import ReactDOM from 'react-dom/client';
import App from './App';
import {addPost, updateNewPostText} from './redux/state'
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireThree = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state}
                 updateNewPostText={updateNewPostText}
                 addPost={addPost}/>
        </BrowserRouter>
    );
}