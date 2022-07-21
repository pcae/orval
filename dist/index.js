'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
('use strict');
var _chunkPSHUPJ4Gjs = require('./chunk-PSHUPJ4G.js');
_chunkPSHUPJ4Gjs.b.call(void 0);
var _chalk = require('chalk');
var _chalk2 = _interopRequireDefault(_chalk);
_chunkPSHUPJ4Gjs.b.call(void 0);
var c = async (t, o = process.cwd(), e) => {
  if (!t || _chunkPSHUPJ4Gjs.c.call(void 0, t))
    return _chunkPSHUPJ4Gjs.M.call(void 0, t, e);
  let n = await _chunkPSHUPJ4Gjs.H.call(void 0, t, o, e);
  if (e != null && e.watch)
    _chunkPSHUPJ4Gjs.K.call(
      void 0,
      e == null ? void 0 : e.watch,
      async () => {
        try {
          await _chunkPSHUPJ4Gjs.L.call(void 0, o, n);
        } catch (a) {
          _chunkPSHUPJ4Gjs.d.call(
            void 0,
            _chalk2.default.red(
              `\u{1F6D1}  ${
                e != null && e.projectName
                  ? `${e == null ? void 0 : e.projectName} - `
                  : ''
              }${a}`,
            ),
          );
        }
      },
      n.input.target,
    );
  else
    try {
      return await _chunkPSHUPJ4Gjs.L.call(void 0, o, n);
    } catch (a) {
      _chunkPSHUPJ4Gjs.d.call(
        void 0,
        _chalk2.default.red(
          `\u{1F6D1}  ${
            e != null && e.projectName
              ? `${e == null ? void 0 : e.projectName} - `
              : ''
          }${a}`,
        ),
      );
    }
};
var te = c;
exports.URL_REGEX = _chunkPSHUPJ4Gjs.s;
exports.VERBS_WITH_BODY = _chunkPSHUPJ4Gjs.r;
exports.addDependency = _chunkPSHUPJ4Gjs.v;
exports.camel = _chunkPSHUPJ4Gjs.g;
exports.default = te;
exports.defineConfig = _chunkPSHUPJ4Gjs.G;
exports.escape = _chunkPSHUPJ4Gjs.o;
exports.generalJSTypes = _chunkPSHUPJ4Gjs.p;
exports.generalJSTypesWithArray = _chunkPSHUPJ4Gjs.q;
exports.generate = c;
exports.generateAxiosOptions = _chunkPSHUPJ4Gjs.z;
exports.generateBodyMutatorConfig = _chunkPSHUPJ4Gjs.B;
exports.generateBodyOptions = _chunkPSHUPJ4Gjs.y;
exports.generateDependencyImports = _chunkPSHUPJ4Gjs.w;
exports.generateFormDataAndUrlEncodedFunction = _chunkPSHUPJ4Gjs.F;
exports.generateImports = _chunkPSHUPJ4Gjs.t;
exports.generateMutatorConfig = _chunkPSHUPJ4Gjs.D;
exports.generateMutatorImports = _chunkPSHUPJ4Gjs.u;
exports.generateMutatorRequestOptions = _chunkPSHUPJ4Gjs.E;
exports.generateOptions = _chunkPSHUPJ4Gjs.A;
exports.generateQueryParamsAxiosConfig = _chunkPSHUPJ4Gjs.C;
exports.generateVerbImports = _chunkPSHUPJ4Gjs.x;
exports.getNumberWord = _chunkPSHUPJ4Gjs.n;
exports.isSyntheticDefaultImportsAllow = _chunkPSHUPJ4Gjs.J;
exports.kebab = _chunkPSHUPJ4Gjs.i;
exports.loadTsconfig = _chunkPSHUPJ4Gjs.I;
exports.pascal = _chunkPSHUPJ4Gjs.f;
exports.sanitize = _chunkPSHUPJ4Gjs.l;
exports.snake = _chunkPSHUPJ4Gjs.h;
exports.stringify = _chunkPSHUPJ4Gjs.k;
exports.toObjectString = _chunkPSHUPJ4Gjs.m;
exports.upper = _chunkPSHUPJ4Gjs.j;
