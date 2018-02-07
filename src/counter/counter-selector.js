// @flow
import type {CounterState} from './counter-state';

export const getCounter = ({counter}: CounterState) => counter;
export const hasCounterSaved = (state: CounterState) => state.memory !== undefined;
