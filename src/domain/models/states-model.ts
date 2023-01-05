export interface IStatesModel {
    id: number;
    nome: string;
    sigla: string;
    regiao: {
        id: number;
        nome: string;
        sigla: string;
    };
}
