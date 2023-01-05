export declare namespace HttpGetClient {
    export type Params = {
        url: string;
        headers?: {
            [key: string]: string;
        };
    };
}

export interface IHttpGetClient<TResponse = any> {
    get(data: HttpGetClient.Params): Promise<TResponse>;
}
