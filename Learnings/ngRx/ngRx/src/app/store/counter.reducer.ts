import { Action, createReducer, on } from '@ngrx/store';
// import { INCREMENT, counterActions } from './counter.actions';
import { decrement, increment } from './counter.actions';

let initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value)
);

/* Older Way */
// export function counterReducer(state = initialState, action: counterActions | Action) {
//   if (action.type == INCREMENT) {
//     return (state = state + (action as counterActions).value);
//   }
//   return state;
// }
