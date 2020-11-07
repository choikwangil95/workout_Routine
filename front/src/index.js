import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, HashRouter as Router, Route } from "react-router-dom";import { Redirect } from 'react-router-dom';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe( () => {
    console.log('state updated');
    console.log(store.getState());  // reducer에서 변경된 state를 등록해주는건가?
});

ReactDOM.render(
    <Provider store = {store}>
        <div>
        <Router>
            <App />
        </Router>
        </div>
    </Provider>,
    document.getElementById('root')
); // Provider 를 사용하여 리액트 프로젝트에 스토어 연동

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
