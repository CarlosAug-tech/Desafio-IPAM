import axios, { AxiosError, AxiosResponse } from 'axios';
import {
    HttpGetClient,
    IHttpGetClient,
} from '../../../data/protocols/http/http-get-client';

class AxiosGetClient implements IHttpGetClient<AxiosResponse> {
    async get(data: HttpGetClient.Params): Promise<AxiosResponse> {
        let response!: AxiosResponse;

        try {
            const { url, headers } = data;

            response = await axios.get(url, headers);
        } catch (err) {
            if (err instanceof AxiosError) {
                if (err.response) {
                    response = err.response;
                }
            }
        }

        return response.data;
    }
}

export { AxiosGetClient };
