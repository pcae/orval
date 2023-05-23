"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var responseType = function (_a, http) {
    var url = _a.url, method = _a.method, params = _a.params, data = _a.data;
    return http.request(method, url, {
        params: params,
        body: data,
        responseType: 'json',
    });
};
exports.default = responseType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNsaWVudC1hbmd1bGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbXV0YXRvcnMvY3VzdG9tLWNsaWVudC1hbmd1bGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsSUFBTSxZQUFZLEdBQUcsVUFDbkIsRUFXQyxFQUNELElBQWdCO1FBWGQsR0FBRyxTQUFBLEVBQ0gsTUFBTSxZQUFBLEVBQ04sTUFBTSxZQUFBLEVBQ04sSUFBSSxVQUFBO0lBVU4sT0FBQSxJQUFJLENBQUMsT0FBTyxDQUFTLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFDaEMsTUFBTSxRQUFBO1FBQ04sSUFBSSxFQUFFLElBQUk7UUFDVixZQUFZLEVBQUUsTUFBTTtLQUNyQixDQUFDO0FBSkYsQ0FJRSxDQUFDO0FBRUwsa0JBQWUsWUFBWSxDQUFDIn0=