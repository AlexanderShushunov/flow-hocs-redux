// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import {counterReducer} from './counter';
import {ShowCurrentDate} from './show-date-inject-hoc-example';
const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw Error('no root element');
}

ReactDOM.render(
    <Provider store={store}>
        <div>
            <ShowCurrentDate formatter={date => date.toString()}/>
        </div>
    </Provider>,
    rootElement
);
registerServiceWorker();
