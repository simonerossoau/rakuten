import * as Immutable from 'immutable';

import { IRakutenGlobalState } from './IRakutenGlobalState';
import movieModel from '../../models/movieModel';

const movie = new movieModel();

export const initialState: IRakutenGlobalState = {
    ready: false,
    movieDetails: movie
};

//Immutable State.
export class RakutenGlobalState extends Immutable.Record(initialState) implements IRakutenGlobalState {

    //Getters  
    public readonly ready: boolean;
    public readonly movieDetails: movieModel;

    //Functions
    public setReady(ready: boolean): RakutenGlobalState {
        return this.set("ready", ready) as RakutenGlobalState;
    }
}
