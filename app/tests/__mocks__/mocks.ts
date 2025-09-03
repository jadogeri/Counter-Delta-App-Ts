import { CounterActionType, CounterState, ResetCountAction, ResetDeltaAction, SetDeltaAction, SetNumberAction } from "../../src/reducers/countReducer";

export const testState1 :CounterState = {count : 0, delta : 0, min: 0, max: 0 };
export const testState2 : CounterState = {count : 10, delta : 10, min: 0, max: 0 }
export const testAction1: SetNumberAction  = {type: CounterActionType.SET_NUMBER, payload: 1}
export const testAction2: SetNumberAction  = {type: CounterActionType.SET_NUMBER, payload: -1}
export const testAction3: SetDeltaAction  = {type: CounterActionType.SET_DELTA, payload: 10}
export const testAction4: SetDeltaAction  = {type: CounterActionType.SET_DELTA, payload: -10}
export const testAction5: ResetDeltaAction  = {type: CounterActionType.RESET_DELTA}
export const testAction6: ResetCountAction  = {type: CounterActionType.RESET_COUNT}




