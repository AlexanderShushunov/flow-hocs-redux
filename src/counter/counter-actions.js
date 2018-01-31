export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const SAVE_COUNTER = 'SAVE_COUNTER';
export const RESTORE_COUNTER = 'RESTORE_COUNTER';
export const RESET_SAVED_VALUE = 'RESET_SAVED_VALUE';

export const increaseCounter = () => ({
    type: INCREASE_COUNTER
});

export const saveCounter = () => ({
    type: SAVE_COUNTER
});

export const restoreCounter = () => ({
    type: RESTORE_COUNTER
});

export const resetSavedValue = () => ({
    type: RESET_SAVED_VALUE
});
