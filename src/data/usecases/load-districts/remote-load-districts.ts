import { ILoadDistricts } from '../../../domain/usecases/load-districts';
import { IHttpGetClient } from '../../protocols/http/http-get-client';

class RemoteLoadDistricts implements ILoadDistricts {
    constructor(private url: string, private httpGetClient: IHttpGetClient) {}

    async getDistricts(city: string): Promise<any[]> {
        const response = await this.httpGetClient.get({
            url: `${this.url}/${city}/distritos`,
        });

        return response;
    }
}

export { RemoteLoadDistricts };
