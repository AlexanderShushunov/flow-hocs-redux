// @flow
import React from 'react';

export type CounterViewProps = {|
    prefix?: string,
    counter: number,
    multiplicator: number,
    canRestore: boolean,
    onIncClick: () => mixed,
    onSaveClick: () => mixed,
    onRestoreClick: () => mixed,
    onResetClick: () => mixed
|}

export const CounterView = ({
                                prefix = '--> ',
                                counter,
                                multiplicator,
                                canRestore,
                                onIncClick,
                                onSaveClick,
                                onRestoreClick,
                                onResetClick
                            }: CounterViewProps) => (
    <div>
        <div>{prefix}{counter * multiplicator}</div>
        <button onClick={onIncClick}>Inc</button>
        <button onClick={onSaveClick}>Save</button>
        <button onClick={onRestoreClick} disabled={!canRestore}>Restore</button>
        <button onClick={onResetClick}>Reset</button>
    </div>
);
