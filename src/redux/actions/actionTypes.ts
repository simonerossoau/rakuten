export enum ActionTypes {
    SET_READY = "SET_READY",
}

export type Action = 
    { type: ActionTypes.SET_READY, payload: boolean };