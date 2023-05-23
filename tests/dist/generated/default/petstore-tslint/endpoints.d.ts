import type { AxiosResponse } from 'axios';
import type { Pets, ListPetsParams, Pet, CreatePetsBody, CreatePetsParams } from './model';
/**
* @summary List all pets
*/
export declare const listPets: <TData = AxiosResponse<Pets>>(params: ListPetsParams, options?: any) => Promise<TData>;
/**
 * @summary Create a pet
 */
export declare const createPets: <TData = AxiosResponse<Pet>>(createPetsBody: CreatePetsBody, params: CreatePetsParams, options?: any) => Promise<TData>;
/**
 * @summary Info for a specific pet
 */
export declare const showPetById: <TData = AxiosResponse<Pet>>(petId: string, options?: any) => Promise<TData>;
/**
 * @summary health check
 */
export declare const healthCheck: <TData = AxiosResponse<string>>(options?: any) => Promise<TData>;
export declare type ListPetsResult = AxiosResponse<Pets>;
export declare type CreatePetsResult = AxiosResponse<Pet>;
export declare type ShowPetByIdResult = AxiosResponse<Pet>;
export declare type HealthCheckResult = AxiosResponse<string>;
//# sourceMappingURL=endpoints.d.ts.map