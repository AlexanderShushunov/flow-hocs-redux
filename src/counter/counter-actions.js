// @flow
type CounterActionsTypes =
    | 'INCREASE_COUNTER'
    | 'SAVE_COUNTER'
    | 'RESTORE_COUNTER'
    | 'RESET_SAVED_VALUE';

export type CounterAction = {|
    type: CounterActionsTypes
|}

export const INCREASE_COUNTER: CounterActionsTypes = 'INCREASE_COUNTER';
export const SAVE_COUNTER: CounterActionsTypes = 'SAVE_COUNTER';
export const RESTORE_COUNTER: CounterActionsTypes = 'RESTORE_COUNTER';
export const RESET_SAVED_VALUE: CounterActionsTypes = 'RESET_SAVED_VALUE';

export const increaseCounter = (): CounterAction => ({
    type: INCREASE_COUNTER
});

export const saveCounter = (): CounterAction => ({
    type: SAVE_COUNTER
});

export const restoreCounter = (): CounterAction => ({
    type: RESTORE_COUNTER
});

export const resetSavedValue = (): CounterAction => ({
    type: RESET_SAVED_VALUE
});
