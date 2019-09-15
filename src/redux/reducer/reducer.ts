import {Reducer, combineReducers} from 'redux'

import { movieReducer } from '.';

const appReducer = combineReducers({
    movieReducer : movieReducer,
})

export default appReducer