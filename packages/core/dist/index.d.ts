import SwaggerParser from '@apidevtools/swagger-parser';
import * as openapi3_ts from 'openapi3-ts';
import { InfoObject, OperationObject, OpenAPIObject, ResponsesObject, ReferenceObject, RequestBodyObject, ParameterObject, SchemaObject, ComponentsObject, SchemasObject, PathItemObject, ResponseObject } from 'openapi3-ts';
import swagger2openapi from 'swagger2openapi';
import { CompareOperator } from 'compare-versions';
import debug from 'debug';

interface Options {
    output?: string | OutputOptions;
    input?: string | InputOptions;
    hooks?: Partial<HooksOptions>;
}
declare type OptionsFn = () => Options | Promise<Options>;
declare type OptionsExport = Options | Promise<Options> | OptionsFn;
declare type Config = {
    [project: string]: OptionsExport;
};
declare type ConfigFn = () => Config | Promise<Config>;
declare type ConfigExternal = Config | Promise<Config> | ConfigFn;
declare type NormizaledConfig = {
    [project: string]: NormalizedOptions;
};
interface NormalizedOptions {
    output: NormalizedOutputOptions;
    input: NormalizedInputOptions;
    hooks: NormalizedHookOptions;
}
declare type NormalizedOutputOptions = {
    workspace?: string;
    target?: string;
    schemas?: string;
    mode: OutputMode;
    mock: boolean | ClientMSWBuilder;
    override: NormalizedOverrideOutput;
    client: OutputClient | OutputClientFunc;
    clean: boolean | string[];
    prettier: boolean;
    tslint: boolean;
    tsconfig?: Tsconfig;
    packageJson?: PackageJson;
    headers: boolean;
};
declare type NormalizedOverrideOutput = {
    title?: (title: string) => string;
    transformer?: OutputTransformer;
    mutator?: NormalizedMutator;
    operations: {
        [key: string]: NormalizedOperationOptions;
    };
    tags: {
        [key: string]: NormalizedOperationOptions;
    };
    mock?: {
        arrayMin?: number;
        arrayMax?: number;
        properties?: MockProperties;
        format?: {
            [key: string]: unknown;
        };
        required?: boolean;
        baseUrl?: string;
        delay?: number;
    };
    contentType?: OverrideOutputContentType;
    header: false | ((info: InfoObject) => string[] | string);
    formData: boolean | NormalizedMutator;
    formUrlEncoded: boolean | NormalizedMutator;
    components: {
        schemas: {
            suffix: string;
        };
        responses: {
            suffix: string;
        };
        parameters: {
            suffix: string;
        };
        requestBodies: {
            suffix: string;
        };
    };
    query: NormalizedQueryOptions;
    angular: Required<AngularOptions>;
    swr: {
        options?: any;
    };
    operationName?: (operation: OperationObject, route: string, verb: Verbs) => string;
    requestOptions: Record<string, any> | boolean;
    useDates?: boolean;
    useTypeOverInterfaces?: boolean;
    useDeprecatedOperations?: boolean;
    useBigInt?: boolean;
};
declare type NormalizedMutator = {
    path: string;
    name?: string;
    default: boolean;
    alias?: Record<string, string>;
};
declare type NormalizedOperationOptions = {
    transformer?: OutputTransformer;
    mutator?: NormalizedMutator;
    mock?: {
        data?: MockProperties;
        properties?: MockProperties;
    };
    contentType?: OverrideOutputContentType;
    query?: NormalizedQueryOptions;
    angular?: Required<AngularOptions>;
    swr?: {
        options?: any;
    };
    operationName?: (operation: OperationObject, route: string, verb: Verbs) => string;
    formData?: boolean | NormalizedMutator;
    formUrlEncoded?: boolean | NormalizedMutator;
    requestOptions?: object | boolean;
};
declare type NormalizedInputOptions = {
    target: string | Record<string, unknown> | OpenAPIObject;
    validation: boolean;
    override: OverrideInput;
    converterOptions: swagger2openapi.Options;
    parserOptions: SwaggerParserOptions;
    filters?: {
        tags?: string[];
    };
};
declare type OutputClientFunc = (clients: GeneratorClients) => ClientGeneratorsBuilder;
declare type OutputOptions = {
    workspace?: string;
    target?: string;
    schemas?: string;
    mode?: OutputMode;
    mock?: boolean | ClientMSWBuilder;
    override?: OverrideOutput;
    client?: OutputClient | OutputClientFunc;
    clean?: boolean | string[];
    prettier?: boolean;
    tslint?: boolean;
    tsconfig?: string | Tsconfig;
    packageJson?: string;
    headers?: boolean;
};
declare type SwaggerParserOptions = Omit<SwaggerParser.Options, 'validate'> & {
    validate?: boolean;
};
declare type InputOptions = {
    target: string | Record<string, unknown> | OpenAPIObject;
    validation?: boolean;
    override?: OverrideInput;
    converterOptions?: swagger2openapi.Options;
    parserOptions?: SwaggerParserOptions;
    filters?: {
        tags?: string[];
    };
};
declare type OutputClient = 'axios' | 'axios-functions' | 'angular' | 'react-query' | 'svelte-query' | 'vue-query' | 'swr' | 'zod';
declare const OutputClient: {
    ANGULAR: OutputClient;
    AXIOS: OutputClient;
    AXIOS_FUNCTIONS: OutputClient;
    REACT_QUERY: OutputClient;
    SVELTE_QUERY: OutputClient;
    VUE_QUERY: OutputClient;
};
declare type OutputMode = 'single' | 'split' | 'tags' | 'tags-split';
declare const OutputMode: {
    SINGLE: OutputMode;
    SPLIT: OutputMode;
    TAGS: OutputMode;
    TAGS_SPLIT: OutputMode;
};
declare type MockOptions = {
    arrayMin?: number;
    arrayMax?: number;
    required?: boolean;
    properties?: Record<string, string>;
    operations?: Record<string, {
        properties: Record<string, string>;
    }>;
    format?: Record<string, string>;
    tags?: Record<string, {
        properties: Record<string, string>;
    }>;
};
declare type MockProperties = {
    [key: string]: unknown;
} | ((specs: OpenAPIObject) => {
    [key: string]: unknown;
});
declare type OutputTransformerFn = (verb: GeneratorVerbOptions) => GeneratorVerbOptions;
declare type OutputTransformer = string | OutputTransformerFn;
declare type MutatorObject = {
    path: string;
    name?: string;
    default?: boolean;
    alias?: Record<string, string>;
};
declare type Mutator = string | MutatorObject;
declare type OverrideOutput = {
    title?: (title: string) => string;
    transformer?: OutputTransformer;
    mutator?: Mutator;
    operations?: {
        [key: string]: OperationOptions;
    };
    tags?: {
        [key: string]: OperationOptions;
    };
    mock?: {
        arrayMin?: number;
        arrayMax?: number;
        properties?: MockProperties;
        format?: {
            [key: string]: unknown;
        };
        required?: boolean;
        baseUrl?: string;
        delay?: number;
    };
    contentType?: OverrideOutputContentType;
    header?: boolean | ((info: InfoObject) => string[] | string);
    formData?: boolean | Mutator;
    formUrlEncoded?: boolean | Mutator;
    components?: {
        schemas?: {
            suffix?: string;
        };
        responses?: {
            suffix?: string;
        };
        parameters?: {
            suffix?: string;
        };
        requestBodies?: {
            suffix?: string;
        };
    };
    query?: QueryOptions;
    swr?: {
        options?: any;
    };
    angular?: AngularOptions;
    operationName?: (operation: OperationObject, route: string, verb: Verbs) => string;
    requestOptions?: Record<string, any> | boolean;
    useDates?: boolean;
    useTypeOverInterfaces?: boolean;
    useDeprecatedOperations?: boolean;
    useBigInt?: boolean;
};
declare type OverrideOutputContentType = {
    include?: string[];
    exclude?: string[];
};
declare type NormalizedQueryOptions = {
    useQuery?: boolean;
    useInfinite?: boolean;
    useInfiniteQueryParam?: string;
    options?: any;
    queryKey?: NormalizedMutator;
    queryOptions?: NormalizedMutator;
    mutationOptions?: NormalizedMutator;
    signal?: boolean;
};
declare type QueryOptions = {
    useQuery?: boolean;
    useInfinite?: boolean;
    useInfiniteQueryParam?: string;
    options?: any;
    queryKey?: Mutator;
    queryOptions?: Mutator;
    mutationOptions?: Mutator;
    signal?: boolean;
};
declare type AngularOptions = {
    provideIn?: 'root' | 'any' | boolean;
};
declare type InputTransformerFn = (spec: OpenAPIObject) => OpenAPIObject;
declare type InputTransformer = string | InputTransformerFn;
declare type OverrideInput = {
    transformer?: InputTransformer;
};
declare type OperationOptions = {
    transformer?: OutputTransformer;
    mutator?: Mutator;
    mock?: {
        data?: MockProperties;
        properties?: MockProperties;
    };
    query?: QueryOptions;
    angular?: Required<AngularOptions>;
    swr?: {
        options?: any;
    };
    operationName?: (operation: OperationObject, route: string, verb: Verbs) => string;
    formData?: boolean | Mutator;
    formUrlEncoded?: boolean | Mutator;
    requestOptions?: object | boolean;
};
declare type Hook = 'afterAllFilesWrite';
declare type HookFunction = (...args: any[]) => void | Promise<void>;
declare type HookCommand = string | HookFunction | (string | HookFunction)[];
declare type NormalizedHookCommand = HookCommand[];
declare type HooksOptions<T = HookCommand | NormalizedHookCommand> = Partial<Record<Hook, T>>;
declare type NormalizedHookOptions = HooksOptions<NormalizedHookCommand>;
declare type Verbs = 'post' | 'put' | 'get' | 'patch' | 'delete' | 'head';
declare const Verbs: {
    POST: Verbs;
    PUT: Verbs;
    GET: Verbs;
    PATCH: Verbs;
    DELETE: Verbs;
    HEAD: Verbs;
};
declare type ImportOpenApi = {
    data: Record<string, unknown | OpenAPIObject>;
    input: InputOptions;
    output: NormalizedOutputOptions;
    target: string;
    workspace: string;
};
interface ContextSpecs {
    specKey: string;
    target: string;
    workspace: string;
    tslint: boolean;
    specs: Record<string, OpenAPIObject>;
    override: NormalizedOverrideOutput;
    tsconfig?: Tsconfig;
    packageJson?: PackageJson;
    parents?: string[];
}
interface GlobalOptions {
    projectName?: string;
    watch?: boolean | string | (string | boolean)[];
    clean?: boolean | string[];
    prettier?: boolean;
    tslint?: boolean;
    mock?: boolean;
    client?: OutputClient;
    mode?: OutputMode;
    tsconfig?: string | Tsconfig;
    packageJson?: string;
    input?: string;
    output?: string;
}
interface Tsconfig {
    baseUrl?: string;
    compilerOptions?: {
        esModuleInterop?: boolean;
        allowSyntheticDefaultImports?: boolean;
        exactOptionalPropertyTypes?: boolean;
        paths?: Record<string, string[]>;
    };
}
interface PackageJson {
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
}
declare type GeneratorSchema = {
    name: string;
    model: string;
    imports: GeneratorImport[];
};
declare type GeneratorImport = {
    name: string;
    schemaName?: string;
    alias?: string;
    specKey?: string;
    default?: boolean;
    values?: boolean;
    syntheticDefaultImport?: boolean;
};
declare type GeneratorDependency = {
    exports: GeneratorImport[];
    dependency: string;
};
declare type GeneratorApiResponse = {
    operations: GeneratorOperations;
    schemas: GeneratorSchema[];
};
declare type GeneratorOperations = {
    [operationId: string]: GeneratorOperation;
};
declare type GeneratorTarget = {
    imports: GeneratorImport[];
    implementation: string;
    implementationMSW: string;
    importsMSW: GeneratorImport[];
    mutators?: GeneratorMutator[];
    clientMutators?: GeneratorMutator[];
    formData?: GeneratorMutator[];
    formUrlEncoded?: GeneratorMutator[];
};
declare type GeneratorTargetFull = {
    imports: GeneratorImport[];
    implementation: string;
    implementationMSW: {
        function: string;
        handler: string;
    };
    importsMSW: GeneratorImport[];
    mutators?: GeneratorMutator[];
    clientMutators?: GeneratorMutator[];
    formData?: GeneratorMutator[];
    formUrlEncoded?: GeneratorMutator[];
};
declare type GeneratorOperation = {
    imports: GeneratorImport[];
    implementation: string;
    implementationMSW: {
        function: string;
        handler: string;
    };
    importsMSW: GeneratorImport[];
    tags: string[];
    mutator?: GeneratorMutator;
    clientMutators?: GeneratorMutator[];
    formData?: GeneratorMutator;
    formUrlEncoded?: GeneratorMutator;
    operationName: string;
    types?: {
        result: (title?: string) => string;
    };
};
declare type GeneratorVerbOptions = {
    verb: Verbs;
    summary?: string;
    doc: string;
    tags: string[];
    operationId: string;
    operationName: string;
    response: GetterResponse;
    body: GetterBody;
    headers?: GetterQueryParam;
    queryParams?: GetterQueryParam;
    params: GetterParams;
    props: GetterProps;
    mutator?: GeneratorMutator;
    formData?: GeneratorMutator;
    formUrlEncoded?: GeneratorMutator;
    override: NormalizedOverrideOutput;
    deprecated?: boolean;
};
declare type GeneratorVerbsOptions = GeneratorVerbOptions[];
declare type GeneratorOptions = {
    route: string;
    pathRoute: string;
    override: NormalizedOverrideOutput;
    context: ContextSpecs;
    mock: boolean;
    output: string;
};
declare type GeneratorClient = {
    implementation: string;
    imports: GeneratorImport[];
    mutators?: GeneratorMutator[];
};
declare type GeneratorMutatorParsingInfo = {
    numberOfParams: number;
    returnNumberOfParams?: number;
};
declare type GeneratorMutator = {
    name: string;
    path: string;
    default: boolean;
    hasErrorType: boolean;
    errorTypeName: string;
    hasSecondArg: boolean;
    hasThirdArg: boolean;
    isHook: boolean;
    bodyTypeName?: string;
};
declare type ClientBuilder = (verbOptions: GeneratorVerbOptions, options: GeneratorOptions, outputClient: OutputClient | OutputClientFunc) => GeneratorClient | Promise<GeneratorClient>;
declare type ClientHeaderBuilder = (params: {
    title: string;
    isRequestOptions: boolean;
    isMutator: boolean;
    noFunction?: boolean;
    isGlobalMutator: boolean;
    provideIn: boolean | 'root' | 'any';
    hasAwaitedType: boolean;
}) => string;
declare type ClientFooterBuilder = (params: {
    noFunction?: boolean | undefined;
    operationNames: string[];
    title?: string;
    hasAwaitedType: boolean;
    hasMutator: boolean;
}) => string;
declare type ClientTitleBuilder = (title: string) => string;
declare type ClientDependenciesBuilder = (hasGlobalMutator: boolean, packageJson?: PackageJson) => GeneratorDependency[];
declare type ClientMSWBuilder = (verbOptions: GeneratorVerbOptions, generatorOptions: GeneratorOptions) => {
    imports: string[];
    implementation: string;
};
interface ClientGeneratorsBuilder {
    client: ClientBuilder;
    header?: ClientHeaderBuilder;
    dependencies?: ClientDependenciesBuilder;
    footer?: ClientFooterBuilder;
    title?: ClientTitleBuilder;
}
declare type GeneratorClients = Record<OutputClient, ClientGeneratorsBuilder>;
declare type GetterResponse = {
    imports: GeneratorImport[];
    definition: {
        success: string;
        errors: string;
    };
    isBlob: boolean;
    types: {
        success: ResReqTypesValue[];
        errors: ResReqTypesValue[];
    };
    contentTypes: string[];
    schemas: GeneratorSchema[];
    originalSchema?: ResponsesObject;
};
declare type GetterBody = {
    originalSchema: ReferenceObject | RequestBodyObject;
    imports: GeneratorImport[];
    definition: string;
    implementation: string;
    schemas: GeneratorSchema[];
    formData?: string;
    formUrlEncoded?: string;
    contentType: string;
};
declare type GetterParameters = {
    query: {
        parameter: ParameterObject;
        imports: GeneratorImport[];
    }[];
    path: {
        parameter: ParameterObject;
        imports: GeneratorImport[];
    }[];
    header: {
        parameter: ParameterObject;
        imports: GeneratorImport[];
    }[];
};
declare type GetterParam = {
    name: string;
    definition: string;
    implementation: string;
    default: boolean;
    required: boolean;
    imports: GeneratorImport[];
};
declare type GetterParams = GetterParam[];
declare type GetterQueryParam = {
    schema: GeneratorSchema;
    deps: GeneratorSchema[];
    isOptional: boolean;
    originalSchema?: SchemaObject;
};
declare type GetterPropType = 'param' | 'body' | 'queryParam' | 'header';
declare const GetterPropType: {
    PARAM: GetterPropType;
    BODY: GetterPropType;
    QUERY_PARAM: GetterPropType;
    HEADER: GetterPropType;
};
declare type GetterProp = {
    name: string;
    definition: string;
    implementation: string;
    default: boolean;
    required: boolean;
    type: GetterPropType;
};
declare type GetterProps = GetterProp[];
declare type SchemaType = 'integer' | 'number' | 'string' | 'boolean' | 'object' | 'null' | 'array' | 'enum' | 'unknown';
declare const SchemaType: {
    integer: string;
    number: string;
    string: string;
    boolean: string;
    object: string;
    null: string;
    array: string;
    enum: string;
    unknown: string;
};
declare type ScalarValue = {
    value: string;
    isEnum: boolean;
    hasReadonlyProps: boolean;
    type: SchemaType;
    imports: GeneratorImport[];
    schemas: GeneratorSchema[];
    isRef: boolean;
};
declare type ResolverValue = ScalarValue & {
    originalSchema: SchemaObject;
};
declare type ResReqTypesValue = ScalarValue & {
    formData?: string;
    formUrlEncoded?: string;
    isRef?: boolean;
    hasReadonlyProps?: boolean;
    key: string;
    contentType: string;
    originalSchema?: SchemaObject;
};
declare type WriteSpecsBuilder = {
    operations: GeneratorOperations;
    schemas: Record<string, GeneratorSchema[]>;
    title: GeneratorClientTitle;
    header: GeneratorClientHeader;
    footer: GeneratorClientFooter;
    imports: GeneratorClientImports;
    importsMock: GenerateMockImports;
    info: InfoObject;
    target: string;
};
declare type WriteModeProps = {
    builder: WriteSpecsBuilder;
    output: NormalizedOutputOptions;
    workspace: string;
    specsName: Record<string, string>;
    header: string;
    needSchema: boolean;
};
declare type GeneratorApiOperations = {
    operations: GeneratorOperations;
    schemas: GeneratorSchema[];
};
declare type GeneratorClientExtra = {
    implementation: string;
    implementationMSW: string;
};
declare type GeneratorClientTitle = (data: {
    outputClient?: OutputClient | OutputClientFunc;
    title: string;
    customTitleFunc?: (title: string) => string;
}) => GeneratorClientExtra;
declare type GeneratorClientHeader = (data: {
    outputClient?: OutputClient | OutputClientFunc;
    isRequestOptions: boolean;
    isMutator: boolean;
    isGlobalMutator: boolean;
    provideIn: boolean | 'root' | 'any';
    hasAwaitedType: boolean;
    titles: GeneratorClientExtra;
}) => GeneratorClientExtra;
declare type GeneratorClientFooter = (data: {
    outputClient: OutputClient | OutputClientFunc;
    operationNames: string[];
    hasMutator: boolean;
    hasAwaitedType: boolean;
    titles: GeneratorClientExtra;
}) => GeneratorClientExtra;
declare type GeneratorClientImports = (data: {
    client: OutputClient | OutputClientFunc;
    implementation: string;
    imports: {
        exports: GeneratorImport[];
        dependency: string;
    }[];
    specsName: Record<string, string>;
    hasSchemaDir: boolean;
    isAllowSyntheticDefaultImports: boolean;
    hasGlobalMutator: boolean;
    packageJson?: PackageJson;
}) => string;
declare type GenerateMockImports = (data: {
    implementation: string;
    imports: {
        exports: GeneratorImport[];
        dependency: string;
    }[];
    specsName: Record<string, string>;
    hasSchemaDir: boolean;
    isAllowSyntheticDefaultImports: boolean;
}) => string;
declare type GeneratorApiBuilder = GeneratorApiOperations & {
    title: GeneratorClientTitle;
    header: GeneratorClientHeader;
    footer: GeneratorClientFooter;
    imports: GeneratorClientImports;
    importsMock: GenerateMockImports;
};

declare const generalJSTypes: string[];
declare const generalJSTypesWithArray: string[];
declare const VERBS_WITH_BODY: Verbs[];
declare const URL_REGEX: RegExp;

declare const generateComponentDefinition: (responses: ComponentsObject['responses'] | ComponentsObject['requestBodies'], context: ContextSpecs, suffix: string) => GeneratorSchema[];

declare const generateImports: ({ imports, target, isRootKey, specsName, specKey: currentSpecKey, }: {
    imports: GeneratorImport[];
    target: string;
    isRootKey: boolean;
    specsName: Record<string, string>;
    specKey: string;
}) => string;
declare const generateMutatorImports: ({ mutators, implementation, oneMore, }: {
    mutators: GeneratorMutator[];
    implementation?: string | undefined;
    oneMore?: boolean | undefined;
}) => string;
declare const addDependency: ({ implementation, exports, dependency, specsName, hasSchemaDir, isAllowSyntheticDefaultImports, }: {
    implementation: string;
    exports: GeneratorImport[];
    dependency: string;
    specsName: Record<string, string>;
    hasSchemaDir: boolean;
    isAllowSyntheticDefaultImports: boolean;
}) => string | undefined;
declare const generateDependencyImports: (implementation: string, imports: {
    exports: GeneratorImport[];
    dependency: string;
}[], specsName: Record<string, string>, hasSchemaDir: boolean, isAllowSyntheticDefaultImports: boolean) => string;
declare const generateVerbImports: ({ response, body, queryParams, headers, params, }: GeneratorVerbOptions) => GeneratorImport[];

declare const generateModelInline: (acc: string, model: string) => string;
declare const generateModelsInline: (obj: Record<string, GeneratorSchema[]>) => string;

declare const BODY_TYPE_NAME = "BodyType";
declare const generateMutator: ({ output, mutator, name, workspace, tsconfig, }: {
    output?: string | undefined;
    mutator?: NormalizedMutator | undefined;
    name: string;
    workspace: string;
    tsconfig?: Tsconfig | undefined;
}) => Promise<GeneratorMutator | undefined>;

declare const generateBodyOptions: (body: GetterBody, isFormData: boolean, isFormUrlEncoded: boolean) => string;
declare const generateAxiosOptions: ({ response, isExactOptionalPropertyTypes, queryParams, headers, requestOptions, hasSignal, }: {
    response: GetterResponse;
    isExactOptionalPropertyTypes: boolean;
    queryParams?: GeneratorSchema | undefined;
    headers?: GeneratorSchema | undefined;
    requestOptions?: boolean | object | undefined;
    hasSignal: boolean;
}) => string;
declare const generateOptions: ({ route, body, headers, queryParams, response, verb, requestOptions, isFormData, isFormUrlEncoded, isAngular, isExactOptionalPropertyTypes, hasSignal, }: {
    route: string;
    body: GetterBody;
    headers?: GetterQueryParam | undefined;
    queryParams?: GetterQueryParam | undefined;
    response: GetterResponse;
    verb: Verbs;
    requestOptions?: boolean | object | undefined;
    isFormData: boolean;
    isFormUrlEncoded: boolean;
    isAngular?: boolean | undefined;
    isExactOptionalPropertyTypes: boolean;
    hasSignal: boolean;
}) => string;
declare const generateBodyMutatorConfig: (body: GetterBody, isFormData: boolean, isFormUrlEncoded: boolean) => string;
declare const generateQueryParamsAxiosConfig: (response: GetterResponse, queryParams?: GetterQueryParam) => string;
declare const generateMutatorConfig: ({ route, body, headers, queryParams, response, verb, isFormData, isFormUrlEncoded, isBodyVerb, hasSignal, isExactOptionalPropertyTypes, }: {
    route: string;
    body: GetterBody;
    headers?: GetterQueryParam | undefined;
    queryParams?: GetterQueryParam | undefined;
    response: GetterResponse;
    verb: Verbs;
    isFormData: boolean;
    isFormUrlEncoded: boolean;
    isBodyVerb: boolean;
    hasSignal: boolean;
    isExactOptionalPropertyTypes: boolean;
}) => string;
declare const generateMutatorRequestOptions: (requestOptions: boolean | object | undefined, hasSecondArgument: boolean) => string;
declare const generateFormDataAndUrlEncodedFunction: ({ body, formData, formUrlEncoded, isFormData, isFormUrlEncoded, }: {
    body: GetterBody;
    formData?: GeneratorMutator | undefined;
    formUrlEncoded?: GeneratorMutator | undefined;
    isFormData: boolean;
    isFormUrlEncoded: boolean;
}) => string;

declare const generateParameterDefinition: (parameters: ComponentsObject['parameters'], context: ContextSpecs, suffix: string) => GeneratorSchema[];

/**
 * Extract all types from #/components/schemas
 *
 * @param schemas
 */
declare const generateSchemasDefinition: (schemas: SchemasObject | undefined, context: ContextSpecs, suffix: string) => GeneratorSchema[];

declare const generateVerbsOptions: ({ verbs, input, output, route, context, }: {
    verbs: PathItemObject;
    input: NormalizedInputOptions;
    output: NormalizedOutputOptions;
    route: string;
    context: ContextSpecs;
}) => Promise<GeneratorVerbsOptions>;

/**
 * Return the output type from an array
 *
 * @param item item with type === "array"
 */
declare const getArray: ({ schema, name, context, }: {
    schema: SchemaObject;
    name?: string | undefined;
    context: ContextSpecs;
}) => ScalarValue;

declare const getBody: ({ requestBody, operationName, context, contentType, }: {
    requestBody: ReferenceObject | RequestBodyObject;
    operationName: string;
    context: ContextSpecs;
    contentType?: OverrideOutputContentType | undefined;
}) => GetterBody;

declare type Separator = 'allOf' | 'anyOf' | 'oneOf';
declare const combineSchemas: ({ name, schema, separator, context, nullable, }: {
    name?: string | undefined;
    schema: SchemaObject;
    separator: Separator;
    context: ContextSpecs;
    nullable: string;
}) => ScalarValue;

declare const resolveDiscriminators: (schemas: SchemasObject, context: ContextSpecs) => SchemasObject;

declare const getEnum: (value: string, enumName: string, names?: string[]) => string;
declare const getEnumImplementation: (value: string, names?: string[]) => string;

declare const getKey: (key: string) => string;

/**
 * Return the output type from an object
 *
 * @param item item with type === "object"
 */
declare const getObject: ({ item, name, context, nullable, }: {
    item: SchemaObject;
    name?: string | undefined;
    context: ContextSpecs;
    nullable: string;
}) => ScalarValue;

declare const getOperationId: (operation: OperationObject, route: string, verb: Verbs) => string;

declare const getParameters: ({ parameters, context, }: {
    parameters: (ReferenceObject | ParameterObject)[];
    context: ContextSpecs;
}) => GetterParameters;

/**
 * Return every params in a path
 *
 * @example
 * ```
 * getParamsInPath("/pet/{category}/{name}/");
 * // => ["category", "name"]
 * ```
 * @param path
 */
declare const getParamsInPath: (path: string) => string[];
declare const getParams: ({ route, pathParams, operationId, context, }: {
    route: string;
    pathParams?: {
        parameter: openapi3_ts.ParameterObject;
        imports: GeneratorImport[];
    }[] | undefined;
    operationId: string;
    context: ContextSpecs;
}) => GetterParams;

declare const getProps: ({ body, queryParams, params, headers, }: {
    body: GetterBody;
    queryParams?: GetterQueryParam | undefined;
    params: GetterParams;
    headers?: GetterQueryParam | undefined;
}) => GetterProps;

declare const getQueryParams: ({ queryParams, operationName, context, suffix, }: {
    queryParams: GetterParameters['query'];
    operationName: string;
    context: ContextSpecs;
    suffix?: string | undefined;
}) => GetterQueryParam | undefined;

declare type RefComponent = 'schemas' | 'responses' | 'parameters' | 'requestBodies';
declare const RefComponent: {
    schemas: RefComponent;
    responses: RefComponent;
    parameters: RefComponent;
    requestBodies: RefComponent;
};
declare const RefComponentSuffix: Record<RefComponent, string>;
/**
 * Return the output type from the $ref
 *
 * @param $ref
 */
declare const getRefInfo: ($ref: ReferenceObject['$ref'], context: ContextSpecs) => {
    name: string;
    originalName: string;
    refPaths?: string[] | undefined;
    specKey?: string | undefined;
};

declare const getResReqTypes: (responsesOrRequests: Array<[
    string,
    ResponseObject | ReferenceObject | RequestBodyObject
]>, name: string, context: ContextSpecs, defaultType?: string) => ResReqTypesValue[];

declare const getResponse: ({ responses, operationName, context, contentType, }: {
    responses: ResponsesObject;
    operationName: string;
    context: ContextSpecs;
    contentType?: OverrideOutputContentType | undefined;
}) => GetterResponse;

declare const getRoute: (route: string) => string;

/**
 * Return the typescript equivalent of open-api data type
 *
 * @param item
 * @ref https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#data-types
 */
declare const getScalar: ({ item, name, context, }: {
    item: SchemaObject;
    name?: string | undefined;
    context: ContextSpecs;
}) => ScalarValue;

declare const resolveObject: ({ schema, propName, combined, context, }: {
    schema: SchemaObject | ReferenceObject;
    propName?: string | undefined;
    combined?: boolean | undefined;
    context: ContextSpecs;
}) => ResolverValue;

declare type ComponentObject = SchemaObject | ResponseObject | ParameterObject | RequestBodyObject | ReferenceObject;
declare const resolveRef: <Schema extends ComponentObject = ComponentObject>(schema: ComponentObject, context: ContextSpecs, imports?: GeneratorImport[]) => {
    schema: Schema;
    imports: GeneratorImport[];
};

declare const resolveValue: ({ schema, name, context, }: {
    schema: SchemaObject | ReferenceObject;
    name?: string | undefined;
    context: ContextSpecs;
}) => ResolverValue;

/**
 * Discriminator helper for `ReferenceObject`
 *
 * @param property
 */
declare const isReference: (property: any) => property is ReferenceObject;
declare const isDirectory: (path: string) => boolean;
declare function isObject(x: any): x is Record<string, unknown>;
declare function isModule(x: any): x is Record<string, unknown>;
declare function isString(x: any): x is string;
declare function isNumber(x: any): x is number;
declare function isNumeric(x: any): x is number;
declare function isBoolean(x: any): x is boolean;
declare function isFunction(x: any): x is Function;
declare function isUndefined(x: any): x is undefined;
declare function isNull(x: any): x is null;
declare function isSchema(x: any): x is SchemaObject;
declare const isVerb: (verb: string) => verb is Verbs;
declare const isRootKey: (specKey: string, target: string) => boolean;
declare const isUrl: (str: string) => boolean;

declare function asyncReduce<IterationItem, AccValue>(array: IterationItem[], reducer: (accumulate: AccValue, current: IterationItem) => AccValue | Promise<AccValue>, initValue: AccValue): Promise<AccValue>;

declare const pascal: (s: string) => string;
declare const camel: (s: string) => string;
declare const snake: (s: string) => string;
declare const kebab: (s: string) => string;
declare const upper: (s: string, fillWith?: string, isDeapostrophe?: boolean) => string;

declare const compareVersions: (firstVersion: string, secondVersions: string, operator?: CompareOperator) => boolean;

interface DebuggerOptions {
    onlyWhenFocused?: boolean | string;
}
declare function createDebugger(ns: string, options?: DebuggerOptions): debug.Debugger['log'];

declare function jsDoc({ description, deprecated, summary, }: {
    description?: string[] | string;
    deprecated?: boolean;
    summary?: string;
}, tryOneLine?: boolean): string;

declare const dynamicImport: <T>(toImport: string | T, from?: string, takeDefault?: boolean) => Promise<T>;

declare const getExtension: (path: string) => "yaml" | "json";

declare const log: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
declare const startMessage: ({ name, version, description, }: {
    name: string;
    version: string;
    description: string;
}) => void;
declare const errorMessage: (err: string) => void;
declare const mismatchArgsMessage: (mismatchArgs: string[]) => void;
declare const createSuccessMessage: (backend?: string) => void;
declare const ibmOpenapiValidatorWarnings: (warnings: {
    path: string;
    message: string;
}[]) => void;
declare const ibmOpenapiValidatorErrors: (errors: {
    path: string;
    message: string;
}[]) => void;
declare type LogType = 'error' | 'warn' | 'info';
declare type LogLevel = LogType | 'silent';
interface Logger {
    info(msg: string, options?: LogOptions): void;
    warn(msg: string, options?: LogOptions): void;
    warnOnce(msg: string, options?: LogOptions): void;
    error(msg: string, options?: LogOptions): void;
    clearScreen(type: LogType): void;
    hasWarned: boolean;
}
interface LogOptions {
    clear?: boolean;
    timestamp?: boolean;
}
declare const LogLevels: Record<LogLevel, number>;
interface LoggerOptions {
    prefix?: string;
    allowClearScreen?: boolean;
}
declare function createLogger(level?: LogLevel, options?: LoggerOptions): Logger;

declare const getFileInfo: (target?: string, { backupFilename, extension, }?: {
    backupFilename?: string | undefined;
    extension?: string | undefined;
}) => {
    path: string;
    pathWithoutExtension: string;
    extension: string;
    isDirectory: boolean;
    dirname: string;
    filename: string;
};
declare function loadFile<File = any>(filePath?: string, options?: {
    root?: string;
    defaultFileName?: string;
    logLevel?: LogLevel;
    isDefault?: boolean;
    alias?: Record<string, string>;
    tsconfig?: Tsconfig;
    load?: boolean;
}): Promise<{
    path: string;
    file?: File;
    error?: any;
    cached?: boolean;
}>;
declare function removeFiles(patterns: string[], dir: string): Promise<void>;

declare function mergeDeep<T extends Record<string, any>>(source: T, target: T): T;

declare const count: (str: string | undefined, key: string) => number;

declare const openApiConverter: (schema: any, options: swagger2openapi.Options | undefined, specKey: string) => Promise<OpenAPIObject>;

declare let join: (...paths: string[]) => string;
declare let resolve: (...paths: string[]) => string;
declare let extname: (path: string) => string;
declare let dirname: (path: string) => string;
declare let basename: (path: string, ext?: string | undefined) => string;
declare let isAbsolute: (path: string) => boolean;

/**
 * Behaves exactly like `path.relative(from, to)`, but keeps the first meaningful "./"
 */
declare const relativeSafe: (from: string, to: string) => string;
declare const getSpecName: (specKey: string, target: string) => string;
declare const getSchemaFileName: (path: string) => string;
declare const separator = "/";
declare const normalizeSafe: (value: string) => string;
declare const joinSafe: (...values: string[]) => string;

declare const path_join: typeof join;
declare const path_resolve: typeof resolve;
declare const path_extname: typeof extname;
declare const path_dirname: typeof dirname;
declare const path_basename: typeof basename;
declare const path_isAbsolute: typeof isAbsolute;
declare const path_relativeSafe: typeof relativeSafe;
declare const path_getSpecName: typeof getSpecName;
declare const path_getSchemaFileName: typeof getSchemaFileName;
declare const path_separator: typeof separator;
declare const path_normalizeSafe: typeof normalizeSafe;
declare const path_joinSafe: typeof joinSafe;
declare namespace path {
  export {
    path_join as join,
    path_resolve as resolve,
    path_extname as extname,
    path_dirname as dirname,
    path_basename as basename,
    path_isAbsolute as isAbsolute,
    path_relativeSafe as relativeSafe,
    path_getSpecName as getSpecName,
    path_getSchemaFileName as getSchemaFileName,
    path_separator as separator,
    path_normalizeSafe as normalizeSafe,
    path_joinSafe as joinSafe,
  };
}

declare const sortByPriority: <T>(arr: (T & {
    default?: boolean | undefined;
    required?: boolean | undefined;
})[]) => (T & {
    default?: boolean | undefined;
    required?: boolean | undefined;
})[];

declare const stringify: (data?: string | any[] | {
    [key: string]: any;
} | undefined) => string | undefined;
declare const sanitize: (value: string, options?: {
    whitespace?: string | true;
    underscore?: string | true;
    dot?: string | true;
    dash?: string | true;
    es5keyword?: boolean;
    es5IdentifierName?: boolean;
    special?: boolean;
}) => string;
declare const toObjectString: <T>(props: T[], path?: keyof T | undefined) => string;
declare const getNumberWord: (num: number) => string;
declare const escape: (str: string, char?: string) => string;

declare const isSyntheticDefaultImportsAllow: (config?: Tsconfig) => boolean;

/**
 * Validate the spec with ibm-openapi-validator (with a custom pretty logger).
 * More information: https://github.com/IBM/openapi-validator/#configuration
 * @param specs openAPI spec
 */
declare const ibmOpenapiValidator: (specs: OpenAPIObject) => Promise<void>;

declare const writeModelInline: (acc: string, model: string) => string;
declare const writeModelsInline: (array: GeneratorSchema[]) => string;
declare const writeSchema: ({ path, schema, target, specKey, isRootKey, specsName, header, }: {
    path: string;
    schema: GeneratorSchema;
    target: string;
    specKey: string;
    isRootKey: boolean;
    specsName: Record<string, string>;
    header: string;
}) => Promise<void>;
declare const writeSchemas: ({ schemaPath, schemas, target, specKey, isRootKey, specsName, header, }: {
    schemaPath: string;
    schemas: GeneratorSchema[];
    target: string;
    specKey: string;
    isRootKey: boolean;
    specsName: Record<string, string>;
    header: string;
}) => Promise<void>;

declare const getOrvalGeneratedTypes: () => string;

declare const writeSingleMode: ({ builder, output, specsName, header, needSchema, }: WriteModeProps) => Promise<string[]>;

declare const writeSplitMode: ({ builder, output, specsName, header, needSchema, }: WriteModeProps) => Promise<string[]>;

declare const writeSplitTagsMode: ({ builder, output, specsName, header, needSchema, }: WriteModeProps) => Promise<string[]>;

declare const writeTagsMode: ({ builder, output, specsName, header, needSchema, }: WriteModeProps) => Promise<string[]>;

declare const generateTarget: (builder: WriteSpecsBuilder, options: NormalizedOutputOptions) => GeneratorTarget;

declare const generateTargetForTags: (builder: WriteSpecsBuilder, options: NormalizedOutputOptions) => Record<string, GeneratorTarget>;

export { AngularOptions, BODY_TYPE_NAME, ClientBuilder, ClientDependenciesBuilder, ClientFooterBuilder, ClientGeneratorsBuilder, ClientHeaderBuilder, ClientMSWBuilder, ClientTitleBuilder, Config, ConfigExternal, ConfigFn, ContextSpecs, GenerateMockImports, GeneratorApiBuilder, GeneratorApiOperations, GeneratorApiResponse, GeneratorClient, GeneratorClientExtra, GeneratorClientFooter, GeneratorClientHeader, GeneratorClientImports, GeneratorClientTitle, GeneratorClients, GeneratorDependency, GeneratorImport, GeneratorMutator, GeneratorMutatorParsingInfo, GeneratorOperation, GeneratorOperations, GeneratorOptions, GeneratorSchema, GeneratorTarget, GeneratorTargetFull, GeneratorVerbOptions, GeneratorVerbsOptions, GetterBody, GetterParam, GetterParameters, GetterParams, GetterProp, GetterPropType, GetterProps, GetterQueryParam, GetterResponse, GlobalOptions, Hook, HookCommand, HookFunction, HooksOptions, ImportOpenApi, InputOptions, InputTransformerFn, LogLevel, LogLevels, LogOptions, LogType, Logger, LoggerOptions, MockOptions, MockProperties, Mutator, MutatorObject, NormalizedHookCommand, NormalizedHookOptions, NormalizedInputOptions, NormalizedMutator, NormalizedOperationOptions, NormalizedOptions, NormalizedOutputOptions, NormalizedOverrideOutput, NormalizedQueryOptions, NormizaledConfig, OperationOptions, Options, OptionsExport, OptionsFn, OutputClient, OutputClientFunc, OutputMode, OutputOptions, OverrideInput, OverrideOutput, OverrideOutputContentType, PackageJson, QueryOptions, RefComponentSuffix, ResReqTypesValue, ResolverValue, ScalarValue, SchemaType, SwaggerParserOptions, Tsconfig, URL_REGEX, VERBS_WITH_BODY, Verbs, WriteModeProps, WriteSpecsBuilder, addDependency, asyncReduce, camel, combineSchemas, compareVersions, count, createDebugger, createLogger, createSuccessMessage, dynamicImport, errorMessage, escape, generalJSTypes, generalJSTypesWithArray, generateAxiosOptions, generateBodyMutatorConfig, generateBodyOptions, generateComponentDefinition, generateDependencyImports, generateFormDataAndUrlEncodedFunction, generateImports, generateModelInline, generateModelsInline, generateMutator, generateMutatorConfig, generateMutatorImports, generateMutatorRequestOptions, generateOptions, generateParameterDefinition, generateQueryParamsAxiosConfig, generateSchemasDefinition, generateTarget, generateTargetForTags, generateVerbImports, generateVerbsOptions, getArray, getBody, getEnum, getEnumImplementation, getExtension, getFileInfo, getKey, getNumberWord, getObject, getOperationId, getOrvalGeneratedTypes, getParameters, getParams, getParamsInPath, getProps, getQueryParams, getRefInfo, getResReqTypes, getResponse, getRoute, getScalar, ibmOpenapiValidator, ibmOpenapiValidatorErrors, ibmOpenapiValidatorWarnings, isBoolean, isDirectory, isFunction, isModule, isNull, isNumber, isNumeric, isObject, isReference, isRootKey, isSchema, isString, isSyntheticDefaultImportsAllow, isUndefined, isUrl, isVerb, jsDoc, kebab, loadFile, log, mergeDeep, mismatchArgsMessage, openApiConverter, pascal, removeFiles, resolveDiscriminators, resolveObject, resolveRef, resolveValue, sanitize, snake, sortByPriority, startMessage, stringify, toObjectString, path as upath, upper, writeModelInline, writeModelsInline, writeSchema, writeSchemas, writeSingleMode, writeSplitMode, writeSplitTagsMode, writeTagsMode };
