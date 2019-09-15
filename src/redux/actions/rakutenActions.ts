import { ActionTypes, Action } from './actionTypes';

export const setReady = (isReady: boolean): Action => ({
    type: ActionTypes.SET_READY,
    payload: isReady
})

export const setMovieDetails = (id) => {
    return {
        type: ActionTypes.SET_MOVIE_DETAILS,
        payload: id
    }
}