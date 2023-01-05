import { IStatesModel } from '../models/states-model';

export interface ILoadStates {
    getStates(): Promise<IStatesModel[]>;
}
