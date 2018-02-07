// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import {counterReducer} from './counter';
import {ShowCurrentDate} from './show-date-inject-hoc-example';
import {Counter} from './counter';
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
            <Counter prefix='>>> ' multiplicator={1} />
            <Counter multiplicator={5} />
            {/*<Counter  /> prop missing*/}
            {/*<Counter multiplicator={5} bla={3} /> unnecessary prop*/}
        </div>
    </Provider>,
    rootElement
);
registerServiceWorker();
