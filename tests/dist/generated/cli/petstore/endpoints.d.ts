import type { AxiosResponse } from 'axios';
export declare type CreatePetsBody = {
    name: string;
    tag: string;
};
export declare type CreatePetsSort = typeof CreatePetsSort[keyof typeof CreatePetsSort];
export declare const CreatePetsSort: {
    readonly name: "name";
    readonly '-name': "-name";
    readonly email: "email";
    readonly '-email': "-email";
};
export declare type CreatePetsParams = {
    /**
     * How many items to return at one time (max 100)
     */
    limit?: string;
    /**
     * Which property to sort by?
    Example: name sorts ASC while -name sorts DESC.
    
     */
    sort: CreatePetsSort;
};
export declare type ListPetsSort = typeof ListPetsSort[keyof typeof ListPetsSort];
export declare const ListPetsSort: {
    readonly name: "name";
    readonly '-name': "-name";
    readonly email: "email";
    readonly '-email': "-email";
};
export declare type ListPetsParams = {
    /**
     * How many items to return at one time (max 100)
     */
    limit?: string;
    /**
     * Which property to sort by?
    Example: name sorts ASC while -name sorts DESC.
    
     */
    sort: ListPetsSort;
};
export interface Error {
    code: number;
    message: string;
}
export declare type Pets = Pet[];
export declare type CatType = typeof CatType[keyof typeof CatType];
export declare const CatType: {
    readonly cat: "cat";
};
export interface Cat {
    petsRequested?: number;
    type: CatType;
}
export declare type DachshundBreed = typeof DachshundBreed[keyof typeof DachshundBreed];
export declare const DachshundBreed: {
    readonly Dachshund: "Dachshund";
};
export interface Dachshund {
    length: number;
    breed: DachshundBreed;
}
export declare type LabradoodleBreed = typeof LabradoodleBreed[keyof typeof LabradoodleBreed];
export declare const LabradoodleBreed: {
    readonly Labradoodle: "Labradoodle";
};
export interface Labradoodle {
    cuteness: number;
    breed: LabradoodleBreed;
}
export declare type DogType = typeof DogType[keyof typeof DogType];
export declare const DogType: {
    readonly dog: "dog";
};
export declare type Dog = (Labradoodle & {
    barksPerMinute?: number;
    type: DogType;
}) | (Dachshund & {
    barksPerMinute?: number;
    type: DogType;
});
export declare type PetCountry = typeof PetCountry[keyof typeof PetCountry];
export declare const PetCountry: {
    readonly 'People\'s_Republic_of_China': "People's Republic of China";
    readonly Uruguay: "Uruguay";
};
export declare type PetCallingCode = typeof PetCallingCode[keyof typeof PetCallingCode];
export declare const PetCallingCode: {
    readonly '+33': "+33";
    readonly '+420': "+420";
};
export declare type Pet = (Dog & {
    '@id'?: string;
    id: number;
    name: string;
    tag?: string;
    email?: string;
    callingCode?: PetCallingCode;
    country?: PetCountry;
}) | (Cat & {
    '@id'?: string;
    id: number;
    name: string;
    tag?: string;
    email?: string;
    callingCode?: PetCallingCode;
    country?: PetCountry;
});
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