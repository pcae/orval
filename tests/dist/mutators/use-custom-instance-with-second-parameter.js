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
exports.useCustomInstance = exports.AXIOS_INSTANCE = void 0;
var react_query_1 = require("@tanstack/react-query");
var axios_1 = __importDefault(require("axios"));
exports.AXIOS_INSTANCE = axios_1.default.create({ baseURL: '' });
var useCustomInstance = function () {
    // code test for parser
    var queryClient = (0, react_query_1.useQueryClient)();
    queryClient.isFetching();
    return function (config, headers) {
        var source = axios_1.default.CancelToken.source();
        var promise = (0, exports.AXIOS_INSTANCE)(__assign(__assign({}, config), { cancelToken: source.token, headers: headers })).then(function (_a) {
            var data = _a.data;
            return data;
        });
        // @ts-ignore
        promise.cancel = function () {
            source.cancel('Query was cancelled by React Query');
        };
        return promise;
    };
};
exports.useCustomInstance = useCustomInstance;
exports.default = exports.useCustomInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWN1c3RvbS1pbnN0YW5jZS13aXRoLXNlY29uZC1wYXJhbWV0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tdXRhdG9ycy91c2UtY3VzdG9tLWluc3RhbmNlLXdpdGgtc2Vjb25kLXBhcmFtZXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUF1RDtBQUN2RCxnREFBa0Q7QUFFckMsUUFBQSxjQUFjLEdBQUcsZUFBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRXJELElBQU0saUJBQWlCLEdBQUc7SUFDL0IsdUJBQXVCO0lBQ3ZCLElBQU0sV0FBVyxHQUFHLElBQUEsNEJBQWMsR0FBRSxDQUFDO0lBRXJDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUV6QixPQUFPLFVBQUMsTUFBMEIsRUFBRSxPQUEyQjtRQUM3RCxJQUFNLE1BQU0sR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFDLElBQU0sT0FBTyxHQUFHLElBQUEsc0JBQWMsd0JBQ3pCLE1BQU0sS0FDVCxXQUFXLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFDekIsT0FBTyxFQUFFLE9BQU8sSUFDaEIsQ0FBQyxJQUFJLENBQUMsVUFBQyxFQUFRO2dCQUFOLElBQUksVUFBQTtZQUFPLE9BQUEsSUFBSTtRQUFKLENBQUksQ0FBQyxDQUFDO1FBRTVCLGFBQWE7UUFDYixPQUFPLENBQUMsTUFBTSxHQUFHO1lBQ2YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQztRQUVGLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQXJCVyxRQUFBLGlCQUFpQixxQkFxQjVCO0FBRUYsa0JBQWUseUJBQWlCLENBQUMifQ==