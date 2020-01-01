# `restful-client`

Inspired by [restful-react](https://github.com/contiamo/restful-react)

- [Code Generation](#code-generation)
  - [Usage](#usage)
  - [Validation of the OpenAPI specification](#validation-of-the-openapi-specification)
  - [Import from GitHub](#import-from-github)
  - [Transforming an Original Spec](#transforming-an-original-spec)
  - [Advanced configuration](#advanced-configuration)
    - [Config File Format](#config-file-format)
    - [Config File Example](#config-file-example)

### Code Generation

`restful-client` is able to generate axios client with appropriate type-signatures (TypeScript) from any valid OpenAPI v3 or Swagger v2 specification, either in `yaml` or `json` formats.

#### Usage

Type-safe data fetchers can be generated from an OpenAPI specification using the following command:

- `restful-client import --file MY_OPENAPI_SPEC.yaml --output my-awesome-generated-types.tsx`

This command can be invoked by _either_:

- Installing `restful-client` globally and running it in the terminal: `npm i -g restful-client`, or
- Adding a `script` to your `package.json` like so:

```diff
      "scripts": {
        "start": "webpack-dev-server",
        "build": "webpack -p",
+       "generate-fetcher": "restful-client import --file MY_SWAGGER_DOCS.json --output FETCHERS.tsx"
      }
```

Your client can then be generated by running `npm run generate-fetcher`. Optionally, we recommend linting/prettifying the output for readability like so:

```diff
      "scripts": {
        "start": "webpack-dev-server",
        "build": "webpack -p",
        "generate-fetcher": "restful-client import --file MY_SWAGGER_DOCS.json --output FETCHERS.tsx",
+       "postgenerate-fetcher": "prettier FETCHERS.d.tsx --write"
      }
```

#### Validation of the OpenAPI specification

To enforce the best quality as possible of specification, we have integrated the amazing [OpenAPI linter from IBM](https://github.com/IBM/openapi-validator). We strongly encourage you to setup your custom rules with a `.validaterc` file, you can find all useful information about this configuration [here](https://github.com/IBM/openapi-validator/#configuration).

To activate this, add a `--validation` flag to your `restful-client` call.

#### Import from GitHub

Adding the `--github` flag to `restful-client import` instead of using the `--file` flag allows us to **create your client from an OpenAPI spec _remotely hosted on GitHub._** <sup>_(how is this real life_ 🔥 _)_</sup>

To generate components from remote specifications, you'll need to follow the following steps:

1.  Visit [your GitHub settings](https://github.com/settings/tokens).
1.  Click **Generate New Token** and choose the following:

        Token Description: (enter anything)
        Scopes:
            [X] repo
                [X] repo:status
                [X] repo_deployment
                [X] public_repo
                [X] repo:invite

1.  Click **Generate token**.
1.  Copy the generated string.
1.  Open a terminal and run `restful-client import --github username:repo:branch:path/to/openapi.yaml --output MY_FETCHERS.tsx`, substituting things where necessary.
1.  You will be prompted for a token.
1.  Paste your token.
1.  You will be asked if you'd like to save it for later. This is _entirely_ up to you and completely safe: it is saved in your `node_modules` folder and _not_ committed to version control or sent to us or anything: the source code of this whole thing is public so you're safe.

    **Caveat:** _Since_ your token is stored in `node_modules`, your token will be removed on each `npm install` of `restful-client`.

1.  You're done! 🎉

#### Transforming an Original Spec

In some cases, you might need to augment an existing OpenAPI specification on the fly, for code-generation purposes. Our CLI makes this quite straightforward:

```bash
  restful-client import --file myspec.yaml --output mybettercomponents.tsx --transformer path/to/my-transformer.js
```

The function specified in `--transformer` is pure: it imports your `--file`, transforms it, and passes the augmented OpenAPI specification to `restful-client`'s generator. Here's how it can be used:

```ts
// /path/to/my-transformer.js

/**
 * Transformer function for restful-client.
 *
 * @param {OpenAPIObject} schema
 * @return {OpenAPIObject}
 */
module.exports = inputSchema => ({
  ...inputSchema,
  // Place your augmentations here
  paths: Object.entries(schema.paths).reduce(
    (mem, [path, pathItem]) => ({
      ...mem,
      [path]: Object.entries(pathItem).reduce(
        (pathItemMem, [verb, operation]) => ({
          ...pathItemMem,
          [verb]: {
            ...fixOperationId(path, verb, operation),
          },
        }),
        {},
      ),
    }),
    {},
  ),
});
```

#### Advanced configuration

`restful-client` supports the concept of "schema stitching" in a RESTful ecosystem as well. We are able to tie multiple backends together and generate code using a single configuration file, `restful-client.config.js`

To activate this "advanced mode", replace all flags from your `restful-client` call with the config flag: `--config restful-client.config.js` (or any filename that you want).

⚠️ **Note:** using a config file makes use of all of the options contained therein, and ignores all other CLI flags.

##### Config File Format

```ts
interface RestfulClientConfig {
  [backend: string]: {
    // classic configuration
    output: string;
    file?: string;
    types?: string;
    github?: string;
    transformer?: string;
    validation?: boolean;
    mock?: boolean;
  };
}
```

##### Config File Example

```js
// restful-client.config.js
module.exports = {
  'petstore-file': {
    file: 'examples/petstore.yaml',
    output: 'examples/petstoreFromFileSpecWithConfig.tsx',
    types: './model',
    mock: true,
  },
  'petstore-file-transfomer': {
    file: 'examples/petstore.yaml',
    output: 'examples/petstoreFromFileSpecWithTransformer.tsx',
    types: './model',
    transformer: 'examples/transformer-add-version.js',
    mock: {
      properties: {
        id: 'faker.random.number({ min: 1, max: 9999 })',
      },
      responses: {
        listPets: {
          properties: () => {
            return {
              id: 'faker.random.number({ min: 1, max: 9 })',
            };
          },
        },
        showPetById: {
          data: () => ({
            id: faker.random.number({ min: 1, max: 99 }),
            name: faker.name.firstName(),
            tag: faker.helpers.randomize([faker.random.word(), undefined]),
          }),
        },
      },
    },
  },
};
```

```json
// package.json
{
  "scripts": {
    "gen": "restful-client import --config restful-client.config.js",
    "gen-first": "restful-client import --config restful-client.config.js myFirstBackend"
  }
}
```
