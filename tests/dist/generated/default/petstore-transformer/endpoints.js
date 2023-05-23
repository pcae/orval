"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSwaggerPetstoreMSW = exports.getHealthCheckMock = exports.getShowPetByIdMock = exports.getCreatePetsMock = exports.getListPetsMock = exports.healthCheck = exports.showPetById = exports.createPets = exports.listPets = void 0;
/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
var axios_1 = __importDefault(require("axios"));
var msw_1 = require("msw");
var faker_1 = require("@faker-js/faker");
/**
* @summary List all pets
*/
var listPets = function (params, version, options) {
    if (version === void 0) { version = 1; }
    return axios_1.default.get("/v".concat(version, "/pets"), __assign(__assign({}, options), { params: __assign(__assign({}, params), options === null || options === void 0 ? void 0 : options.params) }));
};
exports.listPets = listPets;
/**
 * @summary Create a pet
 */
var createPets = function (createPetsBody, params, version, options) {
    if (version === void 0) { version = 1; }
    return axios_1.default.post("/v".concat(version, "/pets"), createPetsBody, __assign(__assign({}, options), { params: __assign(__assign({}, params), options === null || options === void 0 ? void 0 : options.params) }));
};
exports.createPets = createPets;
/**
 * @summary Info for a specific pet
 */
var showPetById = function (petId, version, options) {
    if (version === void 0) { version = 1; }
    return axios_1.default.get("/v".concat(version, "/pets/").concat(petId), options);
};
exports.showPetById = showPetById;
/**
 * @summary health check
 */
var healthCheck = function (version, options) {
    if (version === void 0) { version = 1; }
    return axios_1.default.get("/v".concat(version, "/health"), options);
};
exports.healthCheck = healthCheck;
var getListPetsMock = function () { return (Array.from({ length: faker_1.faker.datatype.number({ min: 1, max: 10 }) }, function (_, i) { return i + 1; }).map(function () { return (faker_1.faker.helpers.arrayElement([{ cuteness: faker_1.faker.datatype.number({ min: undefined, max: undefined }), breed: faker_1.faker.helpers.arrayElement(['Labradoodle']), barksPerMinute: faker_1.faker.helpers.arrayElement([faker_1.faker.datatype.number({ min: undefined, max: undefined }), undefined]), type: faker_1.faker.helpers.arrayElement(['dog']) }, { length: faker_1.faker.datatype.number({ min: undefined, max: undefined }), breed: faker_1.faker.helpers.arrayElement(['Dachshund']), barksPerMinute: faker_1.faker.helpers.arrayElement([faker_1.faker.datatype.number({ min: undefined, max: undefined }), undefined]), type: faker_1.faker.helpers.arrayElement(['dog']), '@id': faker_1.faker.helpers.arrayElement([faker_1.faker.random.word(), undefined]), id: faker_1.faker.datatype.number({ min: undefined, max: undefined }), name: faker_1.faker.random.word(), tag: faker_1.faker.helpers.arrayElement([faker_1.faker.random.word(), undefined]), email: faker_1.faker.helpers.arrayElement([faker_1.faker.internet.email(), undefined]), callingCode: faker_1.faker.helpers.arrayElement([faker_1.faker.helpers.arrayElement(['+33', '+420', '+33']), undefined]), country: faker_1.faker.helpers.arrayElement([faker_1.faker.helpers.arrayElement(['People\'s Republic of China', 'Uruguay']), undefined]) }, { petsRequested: faker_1.faker.helpers.arrayElement([faker_1.faker.datatype.number({ min: undefined, max: undefined }), undefined]), type: faker_1.faker.helpers.arrayElement(['cat']), '@id': faker_1.faker.helpers.arrayElement([faker_1.faker.random.word(), undefined]), id: faker_1.faker.datatype.number({ min: undefined, max: undefined }), name: faker_1.faker.random.word(), tag: faker_1.faker.helpers.arrayElement([faker_1.faker.random.word(), undefined]), email: faker_1.faker.helpers.arrayElement([faker_1.faker.internet.email(), undefined]), callingCode: faker_1.faker.helpers.arrayElement([faker_1.faker.helpers.arrayElement(['+33', '+420', '+33']), undefined]), country: faker_1.faker.helpers.arrayElement([faker_1.faker.helpers.arrayElement(['People\'s Republic of China', 'Uruguay']), undefined]) }])); })); };
exports.getListPetsMock = getListPetsMock;
var getCreatePetsMock = function () { return (faker_1.faker.helpers.arrayElement([{ cuteness: faker_1.faker.datatype.number({ min: undefined, max: undefined }), breed: faker_1.faker.helpers.arrayElement(['Labradoodle']), barksPerMinute: faker_1.faker.helpers.arrayElement([faker_1.faker.datatype.number({ min: undefined, max: undefined }), undefined]), type: faker_1.faker.helpers.arrayElement(['dog']) }, { length: faker_1.faker.datatype.number({ min: undefined, max: undefined }), breed: faker_1.faker.helpers.arrayElement(['Dachshund']), barksPerMinute: faker_1.faker.helpers.arrayElement([faker_1.faker.datatype.number({ min: undefined, max: undefined }), undefined]), type: faker_1.faker.helpers.arrayElement(['dog']), '@id': faker_1.faker.helpers.arrayElement([faker_1.faker.random.word(), undefined]), id: faker_1.faker.datatype.number({ min: undefined, max: undefined }), name: faker_1.faker.random.word(), tag: faker_1.faker.helpers.arrayElement([faker_1.faker.random.word(), undefined]), email: faker_1.faker.helpers.arrayElement([faker_1.faker.internet.email(), undefined]), callingCode: faker_1.faker.helpers.arrayElement([faker_1.faker.helpers.arrayElement(['+33', '+420', '+33']), undefined]), country: faker_1.faker.helpers.arrayElement([faker_1.faker.helpers.arrayElement(['People\'s Republic of China', 'Uruguay']), undefined]) }, { petsRequested: faker_1.faker.helpers.arrayElement([faker_1.faker.datatype.number({ min: undefined, max: undefined }), undefined]), type: faker_1.faker.helpers.arrayElement(['cat']), '@id': faker_1.faker.helpers.arrayElement([faker_1.faker.random.word(), undefined]), id: faker_1.faker.datatype.number({ min: undefined, max: undefined }), name: faker_1.faker.random.word(), tag: faker_1.faker.helpers.arrayElement([faker_1.faker.random.word(), undefined]), email: faker_1.faker.helpers.arrayElement([faker_1.faker.internet.email(), undefined]), callingCode: faker_1.faker.helpers.arrayElement([faker_1.faker.helpers.arrayElement(['+33', '+420', '+33']), undefined]), country: faker_1.faker.helpers.arrayElement([faker_1.faker.helpers.arrayElement(['People\'s Republic of China', 'Uruguay']), undefined]) }])); };
exports.getCreatePetsMock = getCreatePetsMock;
var getShowPetByIdMock = function () { return (faker_1.faker.helpers.arrayElement([{ cuteness: faker_1.faker.datatype.number({ min: undefined, max: undefined }), breed: faker_1.faker.helpers.arrayElement(['Labradoodle']), barksPerMinute: faker_1.faker.helpers.arrayElement([faker_1.faker.datatype.number({ min: undefined, max: undefined }), undefined]), type: faker_1.faker.helpers.arrayElement(['dog']) }, { length: faker_1.faker.datatype.number({ min: undefined, max: undefined }), breed: faker_1.faker.helpers.arrayElement(['Dachshund']), barksPerMinute: faker_1.faker.helpers.arrayElement([faker_1.faker.datatype.number({ min: undefined, max: undefined }), undefined]), type: faker_1.faker.helpers.arrayElement(['dog']), '@id': faker_1.faker.helpers.arrayElement([faker_1.faker.random.word(), undefined]), id: faker_1.faker.datatype.number({ min: undefined, max: undefined }), name: faker_1.faker.random.word(), tag: faker_1.faker.helpers.arrayElement([faker_1.faker.random.word(), undefined]), email: faker_1.faker.helpers.arrayElement([faker_1.faker.internet.email(), undefined]), callingCode: faker_1.faker.helpers.arrayElement([faker_1.faker.helpers.arrayElement(['+33', '+420', '+33']), undefined]), country: faker_1.faker.helpers.arrayElement([faker_1.faker.helpers.arrayElement(['People\'s Republic of China', 'Uruguay']), undefined]) }, { petsRequested: faker_1.faker.helpers.arrayElement([faker_1.faker.datatype.number({ min: undefined, max: undefined }), undefined]), type: faker_1.faker.helpers.arrayElement(['cat']), '@id': faker_1.faker.helpers.arrayElement([faker_1.faker.random.word(), undefined]), id: faker_1.faker.datatype.number({ min: undefined, max: undefined }), name: faker_1.faker.random.word(), tag: faker_1.faker.helpers.arrayElement([faker_1.faker.random.word(), undefined]), email: faker_1.faker.helpers.arrayElement([faker_1.faker.internet.email(), undefined]), callingCode: faker_1.faker.helpers.arrayElement([faker_1.faker.helpers.arrayElement(['+33', '+420', '+33']), undefined]), country: faker_1.faker.helpers.arrayElement([faker_1.faker.helpers.arrayElement(['People\'s Republic of China', 'Uruguay']), undefined]) }])); };
exports.getShowPetByIdMock = getShowPetByIdMock;
var getHealthCheckMock = function () { return (faker_1.faker.random.word()); };
exports.getHealthCheckMock = getHealthCheckMock;
var getSwaggerPetstoreMSW = function () { return [
    msw_1.rest.get('*/v:version/pets', function (_req, res, ctx) {
        return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.json((0, exports.getListPetsMock)()));
    }), msw_1.rest.post('*/v:version/pets', function (_req, res, ctx) {
        return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.json((0, exports.getCreatePetsMock)()));
    }), msw_1.rest.get('*/v:version/pets/:petId', function (_req, res, ctx) {
        return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.json((0, exports.getShowPetByIdMock)()));
    }), msw_1.rest.get('*/v:version/health', function (_req, res, ctx) {
        return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.text((0, exports.getHealthCheckMock)()));
    }),
]; };
exports.getSwaggerPetstoreMSW = getSwaggerPetstoreMSW;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kcG9pbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vZ2VuZXJhdGVkL2RlZmF1bHQvcGV0c3RvcmUtdHJhbnNmb3JtZXIvZW5kcG9pbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7QUFDSCxnREFBeUI7QUFZekIsMkJBRVk7QUFDWix5Q0FFd0I7QUFLdEI7O0VBRUM7QUFDSSxJQUFNLFFBQVEsR0FBRyxVQUNwQixNQUFzQixFQUN0QixPQUFVLEVBQUUsT0FBNEI7SUFBeEMsd0JBQUEsRUFBQSxXQUFVO0lBRVYsT0FBTyxlQUFLLENBQUMsR0FBRyxDQUNkLFlBQUssT0FBTyxVQUFPLHdCQUNsQixPQUFPLEtBQ04sTUFBTSx3QkFBTSxNQUFNLEdBQUssT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU0sS0FDekMsQ0FBQztBQUNKLENBQUMsQ0FBQTtBQVRVLFFBQUEsUUFBUSxZQVNsQjtBQUVIOztHQUVHO0FBQ0ksSUFBTSxVQUFVLEdBQUcsVUFDdEIsY0FBOEIsRUFDOUIsTUFBd0IsRUFDeEIsT0FBVSxFQUFFLE9BQTRCO0lBQXhDLHdCQUFBLEVBQUEsV0FBVTtJQUVWLE9BQU8sZUFBSyxDQUFDLElBQUksQ0FDZixZQUFLLE9BQU8sVUFBTyxFQUNuQixjQUFjLHdCQUNiLE9BQU8sS0FDTixNQUFNLHdCQUFNLE1BQU0sR0FBSyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsTUFBTSxLQUN6QyxDQUFDO0FBQ0osQ0FBQyxDQUFBO0FBWFUsUUFBQSxVQUFVLGNBV3BCO0FBRUg7O0dBRUc7QUFDSSxJQUFNLFdBQVcsR0FBRyxVQUN2QixLQUFhLEVBQ2IsT0FBVSxFQUFFLE9BQTRCO0lBQXhDLHdCQUFBLEVBQUEsV0FBVTtJQUVWLE9BQU8sZUFBSyxDQUFDLEdBQUcsQ0FDZCxZQUFLLE9BQU8sbUJBQVMsS0FBSyxDQUFFLEVBQUMsT0FBTyxDQUNyQyxDQUFDO0FBQ0osQ0FBQyxDQUFBO0FBUFUsUUFBQSxXQUFXLGVBT3JCO0FBRUg7O0dBRUc7QUFDSSxJQUFNLFdBQVcsR0FBRyxVQUN2QixPQUFVLEVBQUUsT0FBNEI7SUFBeEMsd0JBQUEsRUFBQSxXQUFVO0lBRVYsT0FBTyxlQUFLLENBQUMsR0FBRyxDQUNkLFlBQUssT0FBTyxZQUFTLEVBQUMsT0FBTyxDQUM5QixDQUFDO0FBQ0osQ0FBQyxDQUFBO0FBTlUsUUFBQSxXQUFXLGVBTXJCO0FBUUksSUFBTSxlQUFlLEdBQUcsY0FBTSxPQUFBLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxhQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsQ0FBQyxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsUUFBUSxFQUFFLGFBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBRSxhQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBQyxjQUFjLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsYUFBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLDZCQUE2QixFQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsYUFBYSxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxLQUFLLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLGFBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyw2QkFBNkIsRUFBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBaHZELENBQWd2RCxDQUFDLENBQUMsRUFBajFELENBQWkxRCxDQUFBO0FBQXoyRCxRQUFBLGVBQWUsbUJBQTAxRDtBQUUvMkQsSUFBTSxpQkFBaUIsR0FBRyxjQUFNLE9BQUEsQ0FBQyxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsUUFBUSxFQUFFLGFBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLE1BQU0sRUFBRSxhQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBQyxjQUFjLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsYUFBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLDZCQUE2QixFQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsYUFBYSxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxLQUFLLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLGFBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyw2QkFBNkIsRUFBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBaHZELENBQWd2RCxDQUFBO0FBQTF3RCxRQUFBLGlCQUFpQixxQkFBeXZEO0FBRWh4RCxJQUFNLGtCQUFrQixHQUFHLGNBQU0sT0FBQSxDQUFDLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxRQUFRLEVBQUUsYUFBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUMsY0FBYyxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFFLGFBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsS0FBSyxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxhQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsNkJBQTZCLEVBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxhQUFhLEVBQUUsYUFBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcs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