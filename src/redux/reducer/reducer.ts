import {Reducer, combineReducers} from 'redux'
import { Action, ActionTypes } from '../actions';

import { successReducer } from '.';

const appReducer = combineReducers({
    successReducer
})

export default appReducer