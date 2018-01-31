import {
    INCREASE_COUNTER,
    SAVE_COUNTER,
    RESTORE_COUNTER,
    RESET_SAVED_VALUE
} from './counter-actions';

const initialState = {
    counter: 1,
    hasCounterSaved: false
};

export function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            };
        case SAVE_COUNTER:
            return {
                ...state,
                memory: state.counter,
                hasCounterSaved: true
            };
        case RESTORE_COUNTER:
            if (!state.hasCounterSaved) {
                return state;
            }
            return {
                ...state,
                counter: state.memory
            };
        case RESET_SAVED_VALUE:
            return {
                ...state,
                hasCounterSaved: false
            };
        default:
            return state;
    }
}
