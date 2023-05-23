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
exports.customInstance = exports.AXIOS_INSTANCE = void 0;
var axios_1 = __importDefault(require("axios"));
exports.AXIOS_INSTANCE = axios_1.default.create({ baseURL: '' });
var customInstance = function (config) {
    var source = axios_1.default.CancelToken.source();
    var promise = (0, exports.AXIOS_INSTANCE)(__assign(__assign({}, config), { cancelToken: source.token })).then(function (_a) {
        var data = _a.data;
        return data;
    });
    // @ts-ignore
    promise.cancel = function () {
        source.cancel('Query was cancelled by React Query');
    };
    return promise;
};
exports.customInstance = customInstance;
exports.default = exports.customInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItdHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL211dGF0b3JzL2Vycm9yLXR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBOEQ7QUFFakQsUUFBQSxjQUFjLEdBQUcsZUFBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRXJELElBQU0sY0FBYyxHQUFHLFVBQUksTUFBMEI7SUFDMUQsSUFBTSxNQUFNLEdBQUcsZUFBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQyxJQUFNLE9BQU8sR0FBRyxJQUFBLHNCQUFjLHdCQUFNLE1BQU0sS0FBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLEtBQUssSUFBRyxDQUFDLElBQUksQ0FDM0UsVUFBQyxFQUFRO1lBQU4sSUFBSSxVQUFBO1FBQU8sT0FBQSxJQUFJO0lBQUosQ0FBSSxDQUNuQixDQUFDO0lBRUYsYUFBYTtJQUNiLE9BQU8sQ0FBQyxNQUFNLEdBQUc7UUFDZixNQUFNLENBQUMsTUFBTSxDQUFDLG9DQUFvQyxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDO0lBRUYsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBWlcsUUFBQSxjQUFjLGtCQVl6QjtBQUVGLGtCQUFlLHNCQUFjLENBQUMifQ==