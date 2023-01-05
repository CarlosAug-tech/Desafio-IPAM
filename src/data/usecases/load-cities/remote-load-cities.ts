import { IloadCities } from '../../../domain/usecases/load-cities';
import { IHttpGetClient } from '../../protocols/http/http-get-client';

class RemoteLoadCities implements IloadCities {
    constructor(private url: string, private httpGetClient: IHttpGetClient) {}

    async getCities(state: string): Promise<any[]> {
        const response = await this.httpGetClient.get({
            url: `${this.url}/${state}/municipios`,
        });

        return response;
    }
}

export { RemoteLoadCities };
