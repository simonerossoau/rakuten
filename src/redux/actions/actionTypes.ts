import movieModel from "src/models/movieModel";

export enum ActionTypes {
    SET_READY = "SET_READY",
    SET_MOVIE_DETAILS = "SET_MOVIE_DETAILS"
}

export type Action = 
    { type: ActionTypes.SET_READY, payload: boolean } |
    { type: ActionTypes.SET_MOVIE_DETAILS, payload: string };