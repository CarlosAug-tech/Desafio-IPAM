import { IStatesModel } from './states-model';

export interface ICityModel {
    id: number;
    nome: string;
    microrregiao: {
        id: number;
        nome: string;
        mesoregiao: {
            id: number;
            nome: string;
            UF: IStatesModel;
        };
    };
    ['regiao-imediata']: {
        id: number;
        nome: string;
        ['regiao-intermediaria']: {
            id: number;
            nome: string;
            UF: IStatesModel;
        };
    };
}
