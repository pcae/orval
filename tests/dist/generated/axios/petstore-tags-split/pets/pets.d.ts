import type { AxiosResponse } from 'axios';
import type { Pets, ListPetsParams, Pet, CreatePetsBody, CreatePetsParams } from '.././model';
export declare const getPets: () => {
    listPets: <TData = AxiosResponse<Pets>>(params: ListPetsParams, version?: number, options?: any) => Promise<TData>;
    createPets: <TData_1 = AxiosResponse<Pet>>(createPetsBody: CreatePetsBody, params: CreatePetsParams, version?: number, options?: any) => Promise<TData_1>;
    showPetById: <TData_2 = AxiosResponse<Pet>>(petId: string, version?: number, options?: any) => Promise<TData_2>;
};
export declare type ListPetsResult = AxiosResponse<Pets>;
export declare type CreatePetsResult = AxiosResponse<Pet>;
export declare type ShowPetByIdResult = AxiosResponse<Pet>;
//# sourceMappingURL=pets.d.ts.map