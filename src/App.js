import React from 'react';

export const App = ({counter = 0, onIncClick = () => {}}) => (
    <div className="App">
        <div>{counter}</div>
        <button onClick={onIncClick}>Inc</button>
    </div>
);
