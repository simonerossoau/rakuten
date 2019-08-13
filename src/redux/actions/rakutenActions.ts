import { ActionTypes, Action } from './actionTypes';

export const setReady = (isReady: boolean): Action => ({
    type: ActionTypes.SET_READY,
    payload: isReady
})