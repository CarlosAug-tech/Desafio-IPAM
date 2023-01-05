import { IStatesModel } from '../../../domain/models/states-model';
import { ILoadStates } from '../../../domain/usecases/load-states';
import { IHttpGetClient } from '../../protocols/http/http-get-client';

class RemoteLoadStates implements ILoadStates {
    constructor(private url: string, private httpGetClient: IHttpGetClient) {}

    async getStates(): Promise<IStatesModel[]> {
        const response = await this.httpGetClient.get({
            url: this.url,
        });

        return response;
    }
}

export { RemoteLoadStates };
