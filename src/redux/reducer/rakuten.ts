import { Reducer, combineReducers } from 'redux'
import { Action, ActionTypes } from '../actions';

import { RakutenGlobalState } from '../state';


const initState = new RakutenGlobalState();

export const successReducer: Reducer<RakutenGlobalState> = (state: RakutenGlobalState = initState, action: Action): RakutenGlobalState => {
return initState;
}