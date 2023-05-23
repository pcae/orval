import type { UseQueryOptions, UseInfiniteQueryOptions, UseMutationOptions, UseQueryResult, UseInfiniteQueryResult, QueryKey } from '@tanstack/react-query';
import type { Pets, Error, ListPetsParams, Pet, CreatePetsBody, CreatePetsParams } from './model';
import type { ErrorType } from '../../../mutators/error-type';
/**
 * @summary List all pets
 */
export declare const listPets: (params: ListPetsParams, version?: number, signal?: AbortSignal) => Promise<Pets>;
export declare const getListPetsQueryKey: (params: ListPetsParams, version?: number) => readonly [`/v${number}/pets`, ...ListPetsParams[]];
export declare const getListPetsInfiniteQueryOptions: <TData = Pets, TError = AxiosError<Error_1>>(params: ListPetsParams, version?: number, options?: {
    query?: any;
} | undefined) => any;
export declare type ListPetsInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof listPets>>>;
export declare type ListPetsInfiniteQueryError = ErrorType<Error>;
export declare const useListPetsInfinite: <TData = Pets, TError = AxiosError<Error_1>>(params: ListPetsParams, version?: number, options?: {
    query?: any;
} | undefined) => any;
export declare const getListPetsQueryOptions: <TData = Pets, TError = AxiosError<Error_1>>(params: ListPetsParams, version?: number, options?: {
    query?: any;
} | undefined) => any;
export declare type ListPetsQueryResult = NonNullable<Awaited<ReturnType<typeof listPets>>>;
export declare type ListPetsQueryError = ErrorType<Error>;
export declare const useListPets: <TData = Pets, TError = AxiosError<Error_1>>(params: ListPetsParams, version?: number, options?: {
    query?: any;
} | undefined) => any;
/**
 * @summary Create a pet
 */
export declare const createPets: (createPetsBody: CreatePetsBody, params: CreatePetsParams, version?: number) => Promise<Pet>;
export declare const getCreatePetsMutationOptions: <TError = AxiosError<Error_1>, TContext = unknown>(options?: {
    mutation?: any;
} | undefined) => UseMutationOptions<Pet, TError, {
    data: CreatePetsBody;
    params: CreatePetsParams;
    version?: number | undefined;
}, TContext>;
export declare type CreatePetsMutationResult = NonNullable<Awaited<ReturnType<typeof createPets>>>;
export declare type CreatePetsMutationBody = CreatePetsBody;
export declare type CreatePetsMutationError = ErrorType<Error>;
export declare const useCreatePets: <TError = AxiosError<Error_1>, TContext = unknown>(options?: {
    mutation?: any;
} | undefined) => any;
/**
 * @summary Info for a specific pet
 */
export declare const showPetById: (petId: string, version?: number, signal?: AbortSignal) => Promise<Pet>;
export declare const getShowPetByIdQueryKey: (petId: string, version?: number) => readonly [`/v${number}/pets/${string}`];
export declare const getShowPetByIdInfiniteQueryOptions: <TData = Pet, TError = AxiosError<Error_1>>(petId: string, version?: number, options?: {
    query?: any;
} | undefined) => any;
export declare type ShowPetByIdInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof showPetById>>>;
export declare type ShowPetByIdInfiniteQueryError = ErrorType<Error>;
export declare const useShowPetByIdInfinite: <TData = Pet, TError = AxiosError<Error_1>>(petId: string, version?: number, options?: {
    query?: any;
} | undefined) => any;
export declare const getShowPetByIdQueryOptions: <TData = Pet, TError = AxiosError<Error_1>>(petId: string, version?: number, options?: {
    query?: any;
} | undefined) => any;
export declare type ShowPetByIdQueryResult = NonNullable<Awaited<ReturnType<typeof showPetById>>>;
export declare type ShowPetByIdQueryError = ErrorType<Error>;
export declare const useShowPetById: <TData = Pet, TError = AxiosError<Error_1>>(petId: string, version?: number, options?: {
    query?: any;
} | undefined) => any;
/**
 * @summary health check
 */
export declare const healthCheck: (version?: number, signal?: AbortSignal) => Promise<string>;
export declare const getHealthCheckQueryKey: (version?: number) => readonly [`/v${number}/health`];
export declare const getHealthCheckInfiniteQueryOptions: <TData = string, TError = AxiosError<Error_1>>(version?: number, options?: {
    query?: any;
} | undefined) => any;
export declare type HealthCheckInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export declare type HealthCheckInfiniteQueryError = ErrorType<Error>;
export declare const useHealthCheckInfinite: <TData = string, TError = AxiosError<Error_1>>(version?: number, options?: {
    query?: any;
} | undefined) => any;
export declare const getHealthCheckQueryOptions: <TData = string, TError = AxiosError<Error_1>>(version?: number, options?: {
    query?: any;
} | undefined) => any;
export declare type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export declare type HealthCheckQueryError = ErrorType<Error>;
export declare const useHealthCheck: <TData = string, TError = AxiosError<Error_1>>(version?: number, options?: {
    query?: any;
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