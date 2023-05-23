export declare const customClient: <ResponseType_1>({ url, method, params, data, }: {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    params?: Record<string, string> | undefined;
    data?: {
        headers?: any;
    } | undefined;
    headers?: Record<string, string> | undefined;
    signal?: AbortSignal | undefined;
}) => Promise<ResponseType_1>;
export default customClient;
export declare type ErrorType<ErrorData> = ErrorData;
export declare type BodyType<BodyData> = BodyData & {
    headers?: any;
};
//# sourceMappingURL=custom-client.d.ts.map