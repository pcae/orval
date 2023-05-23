import type { AxiosResponse } from 'axios';
import type { Pets, ListPetsByCountryParams, ListPetsByAgeParams } from './model';
/**
* @summary List all pets by country
*/
export declare const listPetsByCountry: <TData = AxiosResponse<Pets>>(params?: ListPetsByCountryParams, country?: string, options?: any) => Promise<TData>;
/**
 * @summary List all pets by age
 */
export declare const listPetsByAge: <TData = AxiosResponse<Pets>>(params?: ListPetsByAgeParams, age?: number, options?: any) => Promise<TData>;
export declare type ListPetsByCountryResult = AxiosResponse<Pets>;
export declare type ListPetsByAgeResult = AxiosResponse<Pets>;
export declare const getListPetsByCountryMock: () => {
    '@id': string | undefined;
    id: number;
    name: string;
    tag: string | undefined;
    age: number | undefined;
    countryCode: "CN" | "UY" | undefined;
}[];
export declare const getListPetsByAgeMock: () => {
    '@id': string | undefined;
    id: number;
    name: string;
    tag: string | undefined;
    age: number | undefined;
    countryCode: "CN" | "UY" | undefined;
}[];
export declare const getSwaggerPetstoreMSW: () => any[];
//# sourceMappingURL=endpoints.d.ts.map