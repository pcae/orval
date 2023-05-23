import type { UseQueryOptions, UseMutationOptions, UseQueryResult, QueryKey } from '@tanstack/react-query';
import type { Pets, Error, ListPetsParams, Pet, CreatePetsBody, CreatePetsParams } from './model';
/**
 * @summary List all pets
 */
export declare const useListPetsHook: () => (params: ListPetsParams, signal?: AbortSignal) => Promise<Pets>;
export declare const getListPetsQueryKey: (params: ListPetsParams) => readonly ["/pets", ...ListPetsParams[]];
export declare const useListPetsQueryOptions: <TData = Pets, TError = Error>(params: ListPetsParams, options?: {
    query?: any;
} | undefined) => any;
export declare type ListPetsQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>>;
export declare type ListPetsQueryError = Error;
export declare const useListPets: <TData = Pets, TError = Error>(params: ListPetsParams, options?: {
    query?: any;
} | undefined) => any;
/**
 * @summary Create a pet
 */
export declare const useCreatePetsHook: () => (createPetsBody: CreatePetsBody, params: CreatePetsParams) => Promise<Pet>;
export declare const useCreatePetsMutationOptions: <TError = Error, TContext = unknown>(options?: {
    mutation?: any;
} | undefined) => UseMutationOptions<Pet, TError, {
    data: CreatePetsBody;
    params: CreatePetsParams;
}, TContext>;
export declare type CreatePetsMutationResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>>;
export declare type CreatePetsMutationBody = CreatePetsBody;
export declare type CreatePetsMutationError = Error;
export declare const useCreatePets: <TError = Error, TContext = unknown>(options?: {
    mutation?: any;
} | undefined) => any;
/**
 * @summary Info for a specific pet
 */
export declare const useShowPetByIdHook: () => (petId: string, signal?: AbortSignal) => Promise<Pet>;
export declare const getShowPetByIdQueryKey: (petId: string) => readonly [`/pets/${string}`];
export declare const useShowPetByIdQueryOptions: <TData = Pet, TError = Error>(petId: string, options?: {
    query?: any;
} | undefined) => any;
export declare type ShowPetByIdQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>>;
export declare type ShowPetByIdQueryError = Error;
export declare const useShowPetById: <TData = Pet, TError = Error>(petId: string, options?: {
    query?: any;
} | undefined) => any;
/**
 * @summary health check
 */
export declare const useHealthCheckHook: () => (signal?: AbortSignal) => Promise<string>;
export declare const getHealthCheckQueryKey: () => readonly ["/health"];
export declare const useHealthCheckQueryOptions: <TData = string, TError = Error>(options?: {
    query?: any;
} | undefined) => any;
export declare type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useHealthCheckHook>>>>;
export declare type HealthCheckQueryError = Error;
export declare const useHealthCheck: <TData = string, TError = Error>(options?: {
    query?: any;
} | undefined) => any;
//# sourceMappingURL=endpoints.d.ts.map