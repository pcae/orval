import type { AxiosResponse } from 'axios';
import type { FetchNullable200, NullableObject } from './model';
/**
* @summary Nullable response
*/
export declare const fetchNullable: <TData = AxiosResponse<FetchNullable200>>(options?: any) => Promise<TData>;
/**
 * @summary Nullable object response
 */
export declare const fetchNullableObject: <TData = AxiosResponse<NullableObject>>(options?: any) => Promise<TData>;
export declare type FetchNullableResult = AxiosResponse<FetchNullable200>;
export declare type FetchNullableObjectResult = AxiosResponse<NullableObject>;
//# sourceMappingURL=endpoints.d.ts.map