import type { SWRConfiguration, Key } from 'swr';
import type { Pets, Error, ListPetsParams, Pet, CreatePetsBody, CreatePetsParams } from './model';
import type { ErrorType, BodyType } from '../../../mutators/custom-client';
/**
* @summary List all pets
*/
export declare const listPets: (params: ListPetsParams, version?: number) => Promise<Pets>;
export declare const getListPetsKey: (params: ListPetsParams, version?: number) => readonly [`/v${number}/pets`, ...ListPetsParams[]];
export declare type ListPetsQueryResult = NonNullable<Awaited<ReturnType<typeof listPets>>>;
export declare type ListPetsQueryError = ErrorType<Error>;
export declare const useListPets: <TError = Error>(params: ListPetsParams, version?: number, options?: {
    swr?: any;
} | undefined) => any;
/**
 * @summary Create a pet
 */
export declare const createPets: (createPetsBody: BodyType<CreatePetsBody>, params: CreatePetsParams, version?: number) => Promise<Pet>;
/**
 * @summary Info for a specific pet
 */
export declare const showPetById: (petId: string, version?: number) => Promise<Pet>;
export declare const getShowPetByIdKey: (petId: string, version?: number) => readonly [`/v${number}/pets/${string}`];
export declare type ShowPetByIdQueryResult = NonNullable<Awaited<ReturnType<typeof showPetById>>>;
export declare type ShowPetByIdQueryError = ErrorType<Error>;
export declare const useShowPetById: <TError = Error>(petId: string, version?: number, options?: {
    swr?: any;
} | undefined) => any;
/**
 * @summary health check
 */
export declare const healthCheck: (version?: number) => Promise<string>;
export declare const getHealthCheckKey: (version?: number) => readonly [`/v${number}/health`];
export declare type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export declare type HealthCheckQueryError = ErrorType<Error>;
export declare const useHealthCheck: <TError = Error>(version?: number, options?: {
    swr?: any;
} | undefined) => any;
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