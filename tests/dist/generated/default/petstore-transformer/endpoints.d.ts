import type { AxiosResponse } from 'axios';
import type { Pets, ListPetsParams, Pet, CreatePetsBody, CreatePetsParams } from './model';
/**
* @summary List all pets
*/
export declare const listPets: <TData = AxiosResponse<Pets>>(params: ListPetsParams, version?: number, options?: any) => Promise<TData>;
/**
 * @summary Create a pet
 */
export declare const createPets: <TData = AxiosResponse<Pet>>(createPetsBody: CreatePetsBody, params: CreatePetsParams, version?: number, options?: any) => Promise<TData>;
/**
 * @summary Info for a specific pet
 */
export declare const showPetById: <TData = AxiosResponse<Pet>>(petId: string, version?: number, options?: any) => Promise<TData>;
/**
 * @summary health check
 */
export declare const healthCheck: <TData = AxiosResponse<string>>(version?: number, options?: any) => Promise<TData>;
export declare type ListPetsResult = AxiosResponse<Pets>;
export declare type CreatePetsResult = AxiosResponse<Pet>;
export declare type ShowPetByIdResult = AxiosResponse<Pet>;
export declare type HealthCheckResult = AxiosResponse<string>;
export declare const getListPetsMock: () => ({
    cuteness: number;
    breed: string;
    barksPerMinute: number | undefined;
    type: string;
    length?: undefined;
    '@id'?: undefined;
    id?: undefined;
    name?: undefined;
    tag?: undefined;
    email?: undefined;
    callingCode?: undefined;
    country?: undefined;
    petsRequested?: undefined;
} | {
    length: number;
    breed: string;
    barksPerMinute: number | undefined;
    type: string;
    '@id': string | undefined;
    id: number;
    name: string;
    tag: string | undefined;
    email: string | undefined;
    callingCode: string | undefined;
    country: string | undefined;
    cuteness?: undefined;
    petsRequested?: undefined;
} | {
    petsRequested: number | undefined;
    type: string;
    '@id': string | undefined;
    id: number;
    name: string;
    tag: string | undefined;
    email: string | undefined;
    callingCode: string | undefined;
    country: string | undefined;
    cuteness?: undefined;
    breed?: undefined;
    barksPerMinute?: undefined;
    length?: undefined;
})[];
export declare const getCreatePetsMock: () => {
    cuteness: number;
    breed: string;
    barksPerMinute: number | undefined;
    type: string;
    length?: undefined;
    '@id'?: undefined;
    id?: undefined;
    name?: undefined;
    tag?: undefined;
    email?: undefined;
    callingCode?: undefined;
    country?: undefined;
    petsRequested?: undefined;
} | {
    length: number;
    breed: string;
    barksPerMinute: number | undefined;
    type: string;
    '@id': string | undefined;
    id: number;
    name: string;
    tag: string | undefined;
    email: string | undefined;
    callingCode: string | undefined;
    country: string | undefined;
    cuteness?: undefined;
    petsRequested?: undefined;
} | {
    petsRequested: number | undefined;
    type: string;
    '@id': string | undefined;
    id: number;
    name: string;
    tag: string | undefined;
    email: string | undefined;
    callingCode: string | undefined;
    country: string | undefined;
    cuteness?: undefined;
    breed?: undefined;
    barksPerMinute?: undefined;
    length?: undefined;
};
export declare const getShowPetByIdMock: () => {
    cuteness: number;
    breed: string;
    barksPerMinute: number | undefined;
    type: string;
    length?: undefined;
    '@id'?: undefined;
    id?: undefined;
    name?: undefined;
    tag?: undefined;
    email?: undefined;
    callingCode?: undefined;
    country?: undefined;
    petsRequested?: undefined;
} | {
    length: number;
    breed: string;
    barksPerMinute: number | undefined;
    type: string;
    '@id': string | undefined;
    id: number;
    name: string;
    tag: string | undefined;
    email: string | undefined;
    callingCode: string | undefined;
    country: string | undefined;
    cuteness?: undefined;
    petsRequested?: undefined;
} | {
    petsRequested: number | undefined;
    type: string;
    '@id': string | undefined;
    id: number;
    name: string;
    tag: string | undefined;
    email: string | undefined;
    callingCode: string | undefined;
    country: string | undefined;
    cuteness?: undefined;
    breed?: undefined;
    barksPerMinute?: undefined;
    length?: undefined;
};
export declare const getHealthCheckMock: () => string;
export declare const getSwaggerPetstoreMSW: () => any[];
//# sourceMappingURL=endpoints.d.ts.map