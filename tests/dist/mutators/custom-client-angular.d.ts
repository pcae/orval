import { Observable } from 'rxjs';
declare const responseType: <Result>({ url, method, params, data, }: {
    url: string;
    method: string;
    params?: any;
    data?: any;
    headers?: any;
}, http: HttpClient) => Observable<Result>;
export default responseType;
//# sourceMappingURL=custom-client-angular.d.ts.map