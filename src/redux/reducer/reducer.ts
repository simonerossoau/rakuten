import {Reducer, combineReducers} from 'redux'
import { Action, ActionTypes } from '../actions';

import { rakutenReducer } from '.';

const appReducer = combineReducers({
    rakuten : rakutenReducer,
})

export default appReducer