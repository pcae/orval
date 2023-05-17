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
exports.customFormData = void 0;
var customFormData = function (body) {
    var formData = new FormData();
    Object.entries(body).forEach(function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        formData.append(key, value);
    });
    return formData;
};
exports.customFormData = customFormData;
exports.default = exports.customFormData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWZvcm0tZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL211dGF0b3JzL2N1c3RvbS1mb3JtLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU0sY0FBYyxHQUFHLFVBQzVCLElBQVU7SUFFVixJQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBRWhDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBWTtZQUFaLEtBQUEsYUFBWSxFQUFYLEdBQUcsUUFBQSxFQUFFLEtBQUssUUFBQTtRQUN2QyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQVZXLFFBQUEsY0FBYyxrQkFVekI7QUFFRixrQkFBZSxzQkFBYyxDQUFDIn0=