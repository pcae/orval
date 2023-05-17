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
var customInstance = function (config, token) {
    var source = axios_1.default.CancelToken.source();
    var promise = (0, exports.AXIOS_INSTANCE)(__assign(__assign({}, config), { cancelToken: source.token, headers: __assign(__assign({}, config === null || config === void 0 ? void 0 : config.headers), (token ? { Authorization: token } : {})) })).then(function (_a) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktYXJndW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbXV0YXRvcnMvbXVsdGktYXJndW1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQWtEO0FBRXJDLFFBQUEsY0FBYyxHQUFHLGVBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUVyRCxJQUFNLGNBQWMsR0FBRyxVQUM1QixNQUEwQixFQUMxQixLQUFjO0lBRWQsSUFBTSxNQUFNLEdBQUcsZUFBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQyxJQUFNLE9BQU8sR0FBRyxJQUFBLHNCQUFjLHdCQUN6QixNQUFNLEtBQ1QsV0FBVyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQ3pCLE9BQU8sd0JBQ0YsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLE9BQU8sR0FDZixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUU1QyxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQVE7WUFBTixJQUFJLFVBQUE7UUFBTyxPQUFBLElBQUk7SUFBSixDQUFJLENBQUMsQ0FBQztJQUU1QixhQUFhO0lBQ2IsT0FBTyxDQUFDLE1BQU0sR0FBRztRQUNmLE1BQU0sQ0FBQyxNQUFNLENBQUMsb0NBQW9DLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUM7SUFFRixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUM7QUFwQlcsUUFBQSxjQUFjLGtCQW9CekI7QUFFRixrQkFBZSxzQkFBYyxDQUFDIn0=