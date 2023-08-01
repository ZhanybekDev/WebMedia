import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store'
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireThree = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>
    );
}

rerenderEntireThree(store.getState())

store.subscribe(rerenderEntireThree)