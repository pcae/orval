import type { UseMutationOptions } from '@tanstack/react-query';
import type { Pet, Error, CreatePetsBody } from './model';
/**
 * @summary Create a pet
 */
export declare const createPets: (createPetsBody: CreatePetsBody) => Promise<Pet>;
export declare const getCreatePetsMutationOptions: <TError = Error, TContext = unknown>(options?: {
    mutation?: any;
} | undefined) => UseMutationOptions<Pet, TError, {
    data: CreatePetsBody;
}, TContext>;
export declare type CreatePetsMutationResult = NonNullable<Awaited<ReturnType<typeof createPets>>>;
export declare type CreatePetsMutationBody = CreatePetsBody;
export declare type CreatePetsMutationError = Error;
export declare const useCreatePets: <TError = Error, TContext = unknown>(options?: {
    mutation?: any;
} | undefined) => any;
export declare const getCreatePetsMock: () => {
    '@id': string | undefined;
    id: number;
    name: string;
    tag: string | undefined;
    email: string | undefined;
    callingCode: string | undefined;
    country: string | undefined;
};
export declare const getSwaggerPetstoreMSW: () => any[];
//# sourceMappingURL=endpoints.d.ts.map