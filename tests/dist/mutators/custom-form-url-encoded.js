"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customFormUrlEncoded = void 0;
var customFormUrlEncoded = function (body) {
    var formData = new URLSearchParams();
    Object.entries(body).forEach(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        formData.append(key, value);
    });
    return formData;
};
exports.customFormUrlEncoded = customFormUrlEncoded;
exports.default = exports.customFormUrlEncoded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWZvcm0tdXJsLWVuY29kZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tdXRhdG9ycy9jdXN0b20tZm9ybS11cmwtZW5jb2RlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTSxvQkFBb0IsR0FBRyxVQUNsQyxJQUFVO0lBRVYsSUFBTSxRQUFRLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztJQUV2QyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQVk7WUFBWixLQUFBLGFBQVksRUFBWCxHQUFHLFFBQUEsRUFBRSxLQUFLLFFBQUE7UUFDdkMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUM7QUFWVyxRQUFBLG9CQUFvQix3QkFVL0I7QUFFRixrQkFBZSw0QkFBb0IsQ0FBQyJ9