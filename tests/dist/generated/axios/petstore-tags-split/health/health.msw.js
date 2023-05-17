"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHealthMSW = exports.getHealthCheckMock = void 0;
/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
var msw_1 = require("msw");
var faker_1 = require("@faker-js/faker");
var getHealthCheckMock = function () { return (faker_1.faker.random.word()); };
exports.getHealthCheckMock = getHealthCheckMock;
var getHealthMSW = function () { return [
    msw_1.rest.get('*/v:version/health', function (_req, res, ctx) {
        return res(ctx.delay(1000), ctx.status(200, 'Mocked status'), ctx.text((0, exports.getHealthCheckMock)()));
    }),
]; };
exports.getHealthMSW = getHealthMSW;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhbHRoLm1zdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2dlbmVyYXRlZC9heGlvcy9wZXRzdG9yZS10YWdzLXNwbGl0L2hlYWx0aC9oZWFsdGgubXN3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7OztHQUtHO0FBQ0gsMkJBRVk7QUFDWix5Q0FFd0I7QUFFakIsSUFBTSxrQkFBa0IsR0FBRyxjQUFNLE9BQUEsQ0FBQyxhQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQXJCLENBQXFCLENBQUE7QUFBaEQsUUFBQSxrQkFBa0Isc0JBQThCO0FBRXRELElBQU0sWUFBWSxHQUFHLGNBQU0sT0FBQTtJQUNsQyxVQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ3RDLE9BQU8sR0FBRyxDQUNSLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQ2YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLEVBQzFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBQSwwQkFBa0IsR0FBRSxDQUFDLENBQ3JCLENBQUE7SUFDSCxDQUFDLENBQUM7Q0FBRSxFQVB3QixDQU94QixDQUFBO0FBUEcsUUFBQSxZQUFZLGdCQU9mIn0=