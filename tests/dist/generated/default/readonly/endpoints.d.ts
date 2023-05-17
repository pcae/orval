import type { AxiosResponse } from 'axios';
import type { ReadonlyObject, CreateReadonlyFreeObjectBody, UpdateReadonlyBody } from './model';
declare type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;
declare type WritableKeys<T> = {
    [P in keyof T]-?: IfEquals<{
        [Q in P]: T[P];
    }, {
        -readonly [Q in P]: T[P];
    }, P>;
}[keyof T];
declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
declare type DistributeReadOnlyOverUnions<T> = T extends any ? NonReadonly<T> : never;
declare type Writable<T> = Pick<T, WritableKeys<T>>;
declare type NonReadonly<T> = [T] extends [UnionToIntersection<T>] ? {
    [P in keyof Writable<T>]: T[P] extends object ? NonReadonly<NonNullable<T[P]>> : T[P];
} : DistributeReadOnlyOverUnions<T>;
/**
* @summary Create readonly object
*/
export declare const createReadonlyFreeObject: <TData = AxiosResponse<ReadonlyObject>>(createReadonlyFreeObjectBody: CreateReadonlyFreeObjectBody, options?: any) => Promise<TData>;
/**
 * @summary Create readonly object
 */
export declare const createReadonly: <TData = AxiosResponse<ReadonlyObject>>(readonlyObject: NonReadonly<ReadonlyObject>, options?: any) => Promise<TData>;
/**
 * @summary Update object response
 */
export declare const updateReadonly: <TData = AxiosResponse<ReadonlyObject>>(updateReadonlyBody: NonReadonly<UpdateReadonlyBody>, options?: any) => Promise<TData>;
export declare type CreateReadonlyFreeObjectResult = AxiosResponse<ReadonlyObject>;
export declare type CreateReadonlyResult = AxiosResponse<ReadonlyObject>;
export declare type UpdateReadonlyResult = AxiosResponse<ReadonlyObject>;
export {};
//# sourceMappingURL=endpoints.d.ts.map