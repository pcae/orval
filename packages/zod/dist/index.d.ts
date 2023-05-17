import { GeneratorDependency, ClientBuilder, ClientGeneratorsBuilder } from '@orval/core';

declare const getZodDependencies: () => GeneratorDependency[];
declare const generateZod: ClientBuilder;
declare const builder: () => () => ClientGeneratorsBuilder;

export { builder, builder as default, generateZod, getZodDependencies };
