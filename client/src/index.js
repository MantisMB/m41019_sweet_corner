import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from './middleware/thunk';
import _ from 'lodash';

const store = createStore(rootReducer, applyMiddleware(thunk));

<base href="%PUBLIC_URL%/"></base>

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);