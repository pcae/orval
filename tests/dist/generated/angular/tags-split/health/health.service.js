"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthService = void 0;
var core_1 = require("@angular/core");
var HealthService = /** @class */ (function () {
    function HealthService(http) {
        this.http = http;
    } /**
   * @summary health check
   */
    HealthService.prototype.healthCheck = function (version, options) {
        if (version === void 0) { version = 1; }
        return this.http.get("/v".concat(version, "/health"), options);
    };
    HealthService = __decorate([
        (0, core_1.Injectable)({ providedIn: 'root' })
    ], HealthService);
    return HealthService;
}());
exports.HealthService = HealthService;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhbHRoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9nZW5lcmF0ZWQvYW5ndWxhci90YWdzLXNwbGl0L2hlYWx0aC9oZWFsdGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFjQSxzQ0FFc0I7QUF1QnRCO0lBQ0UsdUJBQ1UsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUN2QixDQUFDLENBQUE7O0tBRUg7SUFDRixtQ0FBVyxHQUFYLFVBQ0csT0FBVSxFQUFFLE9BQTJCO1FBQXZDLHdCQUFBLEVBQUEsV0FBVTtRQUVWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2xCLFlBQUssT0FBTyxZQUFTLEVBQUMsT0FBTyxDQUM5QixDQUFDO0lBQ0osQ0FBQztJQVpVLGFBQWE7UUFEekIsSUFBQSxpQkFBVSxFQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLGFBQWEsQ0FhekI7SUFBRCxvQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHNDQUFhO0FBYXpCLENBQUMifQ==