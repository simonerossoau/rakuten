import { Reducer } from 'redux'
import { Action } from '../actions';
import { RakutenGlobalState } from '../state';

const initState = new RakutenGlobalState();

export const movieReducer: Reducer<RakutenGlobalState> = (state: RakutenGlobalState = initState, action: Action): RakutenGlobalState => {
      switch (action.type) {
            case "SET_MOVIE_DETAILS":
                  const newState = { ...state, movieDetails: action.payload};
                  return newState
            default:
                  return state
      }
}