import type { UseQueryOptions, UseMutationOptions, UseQueryResult, QueryKey } from '@tanstack/react-query';
import type { Error, ListPetsParams, CreatePetsBody, CreatePetsParams } from './model';
import { useCustomInstance } from '../../../mutators/use-custom-instance-with-second-parameter';
declare type SecondParameter<T extends (...args: any) => any> = T extends (config: any, args: infer P) => any ? P : never;
/**
 * @summary List all pets
 */
export declare const useListPetsHook: () => (params: ListPetsParams, options?: SecondParameter<ReturnType<typeof useCustomInstance>>, signal?: AbortSignal) => any;
export declare const getListPetsQueryKey: (params: ListPetsParams) => readonly ["/pets", ...ListPetsParams[]];
export declare const useListPetsQueryOptions: <TData = any, TError = Error>(params: ListPetsParams, options?: {
    query?: any;
    request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
} | undefined) => any;
export declare type ListPetsQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>>;
export declare type ListPetsQueryError = Error;
export declare const useListPets: <TData = any, TError = Error>(params: ListPetsParams, options?: {
    query?: any;
    request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
} | undefined) => any;
/**
 * @summary Create a pet
 */
export declare const useCreatePetsHook: () => (createPetsBody: CreatePetsBody, params: CreatePetsParams, options?: SecondParameter<ReturnType<typeof useCustomInstance>>) => any;
export declare const useCreatePetsMutationOptions: <TError = Error, TContext = unknown>(options?: {
    mutation?: any;
    request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
} | undefined) => UseMutationOptions<any, TError, {
    data: CreatePetsBody;
    params: CreatePetsParams;
}, TContext>;
export declare type CreatePetsMutationResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>>;
export declare type CreatePetsMutationBody = CreatePetsBody;
export declare type CreatePetsMutationError = Error;
export declare const useCreatePets: <TError = Error, TContext = unknown>(options?: {
    mutation?: any;
    request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
} | undefined) => any;
/**
 * @summary Info for a specific pet
 */
export declare const useShowPetByIdHook: () => (petId: string, options?: SecondParameter<ReturnType<typeof useCustomInstance>>, signal?: AbortSignal) => any;
export declare const getShowPetByIdQueryKey: (petId: string) => readonly [`/pets/${string}`];
export declare const useShowPetByIdQueryOptions: <TData = any, TError = Error>(petId: string, options?: {
    query?: any;
    request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
} | undefined) => any;
export declare type ShowPetByIdQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>>;
export declare type ShowPetByIdQueryError = Error;
export declare const useShowPetById: <TData = any, TError = Error>(petId: string, options?: {
    query?: any;
    request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
} | undefined) => any;
/**
 * @summary health check
 */
export declare const useHealthCheckHook: () => (options?: SecondParameter<ReturnType<typeof useCustomInstance>>, signal?: AbortSignal) => any;
export declare const getHealthCheckQueryKey: () => readonly ["/health"];
export declare const useHealthCheckQueryOptions: <TData = any, TError = Error>(options?: {
    query?: any;
    request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
} | undefined) => any;
export declare type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useHealthCheckHook>>>>;
export declare type HealthCheckQueryError = Error;
export declare const useHealthCheck: <TData = any, TError = Error>(options?: {
    query?: any;
    request?: SecondParameter<ReturnType<typeof useCustomInstance>>;
} | undefined) => any;
export {};
//# sourceMappingURL=endpoints.d.ts.map