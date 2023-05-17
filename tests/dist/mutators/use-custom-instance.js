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
    return function (config) {
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
};
exports.useCustomInstance = useCustomInstance;
exports.default = exports.useCustomInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWN1c3RvbS1pbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL211dGF0b3JzL3VzZS1jdXN0b20taW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBdUQ7QUFDdkQsZ0RBQWtEO0FBRXJDLFFBQUEsY0FBYyxHQUFHLGVBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUVyRCxJQUFNLGlCQUFpQixHQUFHO0lBRy9CLHVCQUF1QjtJQUN2QixJQUFNLFdBQVcsR0FBRyxJQUFBLDRCQUFjLEdBQUUsQ0FBQztJQUVyQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFekIsT0FBTyxVQUFDLE1BQTBCO1FBQ2hDLElBQU0sTUFBTSxHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUMsSUFBTSxPQUFPLEdBQUcsSUFBQSxzQkFBYyx3QkFDekIsTUFBTSxLQUNULFdBQVcsRUFBRSxNQUFNLENBQUMsS0FBSyxJQUN6QixDQUFDLElBQUksQ0FBQyxVQUFDLEVBQVE7Z0JBQU4sSUFBSSxVQUFBO1lBQU8sT0FBQSxJQUFJO1FBQUosQ0FBSSxDQUFDLENBQUM7UUFFNUIsYUFBYTtRQUNiLE9BQU8sQ0FBQyxNQUFNLEdBQUc7WUFDZixNQUFNLENBQUMsTUFBTSxDQUFDLG9DQUFvQyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDO1FBRUYsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBdEJXLFFBQUEsaUJBQWlCLHFCQXNCNUI7QUFFRixrQkFBZSx5QkFBaUIsQ0FBQyJ9