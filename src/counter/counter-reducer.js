// @flow
import {
    INCREASE_COUNTER,
    SAVE_COUNTER,
    RESTORE_COUNTER,
    RESET_SAVED_VALUE
} from './counter-actions';
import type {CounterState} from './counter-state';
import type {CounterAction} from './counter-actions';
import {hasCounterSaved} from './counter-selector';

const initialState: CounterState = {
    counter: 1,
    memory: undefined
};

export function counterReducer(state: CounterState = initialState, action: CounterAction): CounterState {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            };
        case SAVE_COUNTER:
            return {
                ...state,
                memory: state.counter
            };
        case RESTORE_COUNTER:
            if (!hasCounterSaved(state)) {
                return state;
            }
            return {
                ...state,
                counter: state.memory
            };
        case RESET_SAVED_VALUE:
            return {
                ...state,
                memory: undefined
            };
        default:
            return state;
    }
}
