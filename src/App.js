import React from 'react';
import {connect} from 'react-redux';
import {
    getCounter,
    hasCounterSaved,
    increaseCounter,
    saveCounter,
    restoreCounter,
    resetSavedValue
} from './counter';

export const App = connect(
    (state) => ({
        counter: getCounter(state),
        canRestore: hasCounterSaved(state)
    }),
    {
        onIncClick: increaseCounter,
        onSaveClick: saveCounter,
        onRestoreClick: restoreCounter,
        onResetClick: resetSavedValue
    }
)(
    ({
         counter,
         canRestore,
         onIncClick,
         onSaveClick,
         onRestoreClick,
         onResetClick
     }) => (
        <div className="App">
            <div>{counter}</div>
            <button onClick={onIncClick}>Inc</button>
            <button onClick={onSaveClick}>Save</button>
            <button onClick={onRestoreClick} disabled={!canRestore}>Restore</button>
            <button onClick={onResetClick}>Reset</button>
        </div>
    )
);
