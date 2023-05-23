/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import type { UseQueryOptions, UseInfiniteQueryOptions, UseMutationOptions, QueryKey, UseQueryReturnType, UseInfiniteQueryReturnType } from '@tanstack/vue-query';
import type { Pets, Error, ListPetsParams, Pet, CreatePetsBody, CreatePetsParams } from './model';
/**
 * @summary List all pets
 */
export declare const listPets: (params: ListPetsParams, version?: number, options?: any) => Promise<AxiosResponse<Pets>>;
export declare const getListPetsQueryKey: (params: ListPetsParams, version?: number) => readonly [`/v${number}/pets`, ...ListPetsParams[]];
export declare const getListPetsInfiniteQueryOptions: <TData = any, TError = AxiosError<Error>>(params: ListPetsParams, version?: number, options?: {
    query?: any;
    axios?: any;
} | undefined) => any;
export declare type ListPetsInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof listPets>>>;
export declare type ListPetsInfiniteQueryError = AxiosError<Error>;
export declare const useListPetsInfinite: <TData = any, TError = AxiosError<Error>>(params: ListPetsParams, version?: number, options?: {
    query?: any;
    axios?: any;
} | undefined) => any;
export declare const getListPetsQueryOptions: <TData = any, TError = AxiosError<Error>>(params: ListPetsParams, version?: number, options?: {
    query?: any;
    axios?: any;
} | undefined) => any;
export declare type ListPetsQueryResult = NonNullable<Awaited<ReturnType<typeof listPets>>>;
export declare type ListPetsQueryError = AxiosError<Error>;
export declare const useListPets: <TData = any, TError = AxiosError<Error>>(params: ListPetsParams, version?: number, options?: {
    query?: any;
    axios?: any;
} | undefined) => any;
/**
 * @summary Create a pet
 */
export declare const createPets: (createPetsBody: CreatePetsBody, params: CreatePetsParams, version?: number, options?: any) => Promise<AxiosResponse<Pet>>;
export declare const getCreatePetsMutationOptions: <TError = AxiosError<Error>, TContext = unknown>(options?: {
    mutation?: any;
    axios?: any;
} | undefined) => UseMutationOptions<any, TError, {
    data: CreatePetsBody;
    params: CreatePetsParams;
    version?: number | undefined;
}, TContext>;
export declare type CreatePetsMutationResult = NonNullable<Awaited<ReturnType<typeof createPets>>>;
export declare type CreatePetsMutationBody = CreatePetsBody;
export declare type CreatePetsMutationError = AxiosError<Error>;
export declare const useCreatePets: <TError = AxiosError<Error>, TContext = unknown>(options?: {
    mutation?: any;
    axios?: any;
} | undefined) => any;
/**
 * @summary Info for a specific pet
 */
export declare const showPetById: (petId: string, version?: number, options?: any) => Promise<AxiosResponse<Pet>>;
export declare const getShowPetByIdQueryKey: (petId: string, version?: number) => readonly [`/v${number}/pets/${string}`];
export declare const getShowPetByIdInfiniteQueryOptions: <TData = any, TError = AxiosError<Error>>(petId: string, version?: number, options?: {
    query?: any;
    axios?: any;
} | undefined) => any;
export declare type ShowPetByIdInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof showPetById>>>;
export declare type ShowPetByIdInfiniteQueryError = AxiosError<Error>;
export declare const useShowPetByIdInfinite: <TData = any, TError = AxiosError<Error>>(petId: string, version?: number, options?: {
    query?: any;
    axios?: any;
} | undefined) => any;
export declare const getShowPetByIdQueryOptions: <TData = any, TError = AxiosError<Error>>(petId: string, version?: number, options?: {
    query?: any;
    axios?: any;
} | undefined) => any;
export declare type ShowPetByIdQueryResult = NonNullable<Awaited<ReturnType<typeof showPetById>>>;
export declare type ShowPetByIdQueryError = AxiosError<Error>;
export declare const useShowPetById: <TData = any, TError = AxiosError<Error>>(petId: string, version?: number, options?: {
    query?: any;
    axios?: any;
} | undefined) => any;
/**
 * @summary health check
 */
export declare const healthCheck: (version?: number, options?: any) => Promise<AxiosResponse<string>>;
export declare const getHealthCheckQueryKey: (version?: number) => readonly [`/v${number}/health`];
export declare const getHealthCheckInfiniteQueryOptions: <TData = any, TError = AxiosError<Error>>(version?: number, options?: {
    query?: any;
    axios?: any;
} | undefined) => any;
export declare type HealthCheckInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export declare type HealthCheckInfiniteQueryError = AxiosError<Error>;
export declare const useHealthCheckInfinite: <TData = any, TError = AxiosError<Error>>(version?: number, options?: {
    query?: any;
    axios?: any;
} | undefined) => any;
export declare const getHealthCheckQueryOptions: <TData = any, TError = AxiosError<Error>>(version?: number, options?: {
    query?: any;
    axios?: any;
} | undefined) => any;
export declare type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export declare type HealthCheckQueryError = AxiosError<Error>;
export declare const useHealthCheck: <TData = any, TError = AxiosError<Error>>(version?: number, options?: {
    query?: any;
    axios?: any;
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