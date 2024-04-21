import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntireThree = (state) => {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
            </Provider>
        </BrowserRouter>
    );
}

rerenderEntireThree(store.getState())
