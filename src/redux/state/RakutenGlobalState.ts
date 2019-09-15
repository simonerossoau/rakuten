import * as Immutable from 'immutable';

import { IRakutenGlobalState } from './IRakutenGlobalState';
import movieModel from '../../models/movieModel';

const movie = new movieModel();

export const initialState: IRakutenGlobalState = {
    ready: false,
    movieDetails: ""
};

export class RakutenGlobalState {

    ready: boolean;
    movieDetails: string;

}
