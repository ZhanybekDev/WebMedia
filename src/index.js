import ReactDOM from 'react-dom/client';
import store from './redux/redux-store'
import SocialApp from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntireThree = (state) => {
    root.render(
        <SocialApp/>
    );
}

rerenderEntireThree(store.getState())
