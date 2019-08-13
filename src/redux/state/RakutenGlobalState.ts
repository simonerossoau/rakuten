import * as Immutable from 'immutable';

import { IRakutenGlobalState } from './IRakutenGlobalState';


export const initialState: IRakutenGlobalState = {
    ready: false,
};

//Immutable State.
export class RakutenGlobalState extends Immutable.Record(initialState) implements IRakutenGlobalState {

    //Getters  
    public readonly ready: boolean;


    //Functions
    public setReady(ready: boolean): RakutenGlobalState {
        return this.set("ready", ready) as RakutenGlobalState;
    }
}
