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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsService = void 0;
var core_1 = require("@angular/core");
var PetsService = /** @class */ (function () {
    function PetsService(http) {
        this.http = http;
    } /**
   * @summary List all pets
   */
    PetsService.prototype.listPets = function (params, version, options) {
        if (version === void 0) { version = 1; }
        return this.http.get("/v".concat(version, "/pets"), __assign(__assign({}, options), { params: __assign(__assign({}, params), options === null || options === void 0 ? void 0 : options.params) }));
    };
    /**
     * @summary Create a pet
     */
    PetsService.prototype.createPets = function (createPetsBody, params, version, options) {
        if (version === void 0) { version = 1; }
        return this.http.post("/v".concat(version, "/pets"), createPetsBody, __assign(__assign({}, options), { params: __assign(__assign({}, params), options === null || options === void 0 ? void 0 : options.params) }));
    };
    /**
     * @summary Info for a specific pet
     */
    PetsService.prototype.showPetById = function (petId, version, options) {
        if (version === void 0) { version = 1; }
        return this.http.get("/v".concat(version, "/pets/").concat(petId), options);
    };
    PetsService = __decorate([
        (0, core_1.Injectable)({ providedIn: 'root' })
    ], PetsService);
    return PetsService;
}());
exports.PetsService = PetsService;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vZ2VuZXJhdGVkL2FuZ3VsYXIvdGFncy1zcGxpdC9wZXRzL3BldHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBLHNDQUVzQjtBQThCdEI7SUFDRSxxQkFDVSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQ3ZCLENBQUMsQ0FBQTs7S0FFSDtJQUNGLDhCQUFRLEdBQVIsVUFDRyxNQUFzQixFQUN0QixPQUFVLEVBQUUsT0FBMkI7UUFBdkMsd0JBQUEsRUFBQSxXQUFVO1FBRVYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsWUFBSyxPQUFPLFVBQU8sd0JBQ2xCLE9BQU8sS0FDTixNQUFNLHdCQUFNLE1BQU0sR0FBSyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsTUFBTSxLQUN6QyxDQUFDO0lBQ0osQ0FBQztJQUNIOztPQUVHO0lBQ0YsZ0NBQVUsR0FBVixVQUNHLGNBQThCLEVBQzlCLE1BQXdCLEVBQ3hCLE9BQVUsRUFBRSxPQUEyQjtRQUF2Qyx3QkFBQSxFQUFBLFdBQVU7UUFFVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixZQUFLLE9BQU8sVUFBTyxFQUNuQixjQUFjLHdCQUNiLE9BQU8sS0FDTixNQUFNLHdCQUFNLE1BQU0sR0FBSyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsTUFBTSxLQUN6QyxDQUFDO0lBQ0osQ0FBQztJQUNIOztPQUVHO0lBQ0YsaUNBQVcsR0FBWCxVQUNHLEtBQWEsRUFDYixPQUFVLEVBQUUsT0FBMkI7UUFBdkMsd0JBQUEsRUFBQSxXQUFVO1FBRVYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsWUFBSyxPQUFPLG1CQUFTLEtBQUssQ0FBRSxFQUFDLE9BQU8sQ0FDckMsQ0FBQztJQUNKLENBQUM7SUF6Q1UsV0FBVztRQUR2QixJQUFBLGlCQUFVLEVBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsV0FBVyxDQTBDdkI7SUFBRCxrQkFBQztDQUFBLEFBMUNELElBMENDO0FBMUNZLGtDQUFXO0FBMEN2QixDQUFDIn0=