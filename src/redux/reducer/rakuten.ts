import { Reducer, combineReducers } from 'redux'
import { Action, ActionTypes } from '../actions';
import { RakutenGlobalState } from '../state';

const initState = new RakutenGlobalState();

export const rakutenReducer: Reducer<RakutenGlobalState> = (state: RakutenGlobalState = initState, action: Action): RakutenGlobalState => {
/*     switch (action.type) {
        case SET_PATH:
          return Object.assign({}, state, {
            path: action.path
          })
        default:
          return state
      } */
      return state
}