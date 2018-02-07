// @flow

import {type Connector, connect} from 'react-redux';

import {type CounterViewProps, CounterView} from './counter-view';
import {type CounterState} from './counter-state';
import {getCounter, hasCounterSaved} from './counter-selector';
import {increaseCounter, resetSavedValue, restoreCounter, saveCounter} from './counter-actions';

type StateProps = {|
    counter: number,
    canRestore: boolean
|}

function mapStateToProps(state: CounterState): StateProps {
    return {
        counter: getCounter(state),
        canRestore: hasCounterSaved(state)
    };
}

type DispatchProps = {|
    onIncClick: () => mixed,
    onSaveClick: () => mixed,
    onRestoreClick: () => mixed,
    onResetClick: () => mixed
|}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
    return {
        onIncClick: () => dispatch(increaseCounter()),
        onSaveClick: () => dispatch(saveCounter()),
        onRestoreClick: () => dispatch(restoreCounter()),
        onResetClick: () => dispatch(resetSavedValue())
    };
}


const connector: Connector<
        $Diff<$Exact<CounterViewProps>,
        {...StateProps, ...DispatchProps}
    >, CounterViewProps> = connect(
    mapStateToProps,
    mapDispatchToProps
);

export const CounterContainer = connector(CounterView);
