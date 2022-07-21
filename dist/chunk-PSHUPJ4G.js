'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var Ai = Object.create;
var nn = Object.defineProperty;
var ki = Object.getOwnPropertyDescriptor;
var Ii = Object.getOwnPropertyNames;
var Gi = Object.getPrototypeOf,
  Di = Object.prototype.hasOwnProperty;
var H = ((e) =>
  typeof require != 'undefined'
    ? require
    : typeof Proxy != 'undefined'
    ? new Proxy(e, {
        get: (t, r) => (typeof require != 'undefined' ? require : t)[r],
      })
    : e)(function (e) {
  if (typeof require != 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
var qi = (e, t) => () => (e && (t = e((e = 0))), t);
var v = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Fi = (e, t, r, n) => {
  if ((t && typeof t == 'object') || typeof t == 'function')
    for (let o of Ii(t))
      !Di.call(e, o) &&
        o !== r &&
        nn(e, o, {
          get: () => t[o],
          enumerable: !(n = ki(t, o)) || n.enumerable,
        });
  return e;
};
var ue = (e, t, r) => (
  (r = e != null ? Ai(Gi(e)) : {}),
  Fi(
    t || !e || !e.__esModule
      ? nn(r, 'default', { value: e, enumerable: !0 })
      : r,
    e,
  )
);
var m = qi(() => {});
var or = v((cO, Go) => {
  m();
  var Ip = Object.prototype;
  function Gp(e) {
    var t = e && e.constructor,
      r = (typeof t == 'function' && t.prototype) || Ip;
    return e === r;
  }
  Go.exports = Gp;
});
var qo = v((mO, Do) => {
  m();
  function Dp(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  Do.exports = Dp;
});
var No = v((lO, Fo) => {
  m();
  var qp = qo(),
    Fp = qp(Object.keys, Object);
  Fo.exports = Fp;
});
var Vo = v((uO, Bo) => {
  m();
  var Np = or(),
    Bp = No(),
    Vp = Object.prototype,
    Up = Vp.hasOwnProperty;
  function Wp(e) {
    if (!Np(e)) return Bp(e);
    var t = [];
    for (var r in Object(e)) Up.call(e, r) && r != 'constructor' && t.push(r);
    return t;
  }
  Bo.exports = Wp;
});
var sr = v((fO, Uo) => {
  m();
  var Hp =
    typeof global == 'object' && global && global.Object === Object && global;
  Uo.exports = Hp;
});
var le = v((dO, Wo) => {
  m();
  var Qp = sr(),
    zp = typeof self == 'object' && self && self.Object === Object && self,
    _p = Qp || zp || Function('return this')();
  Wo.exports = _p;
});
var ir = v((gO, Ho) => {
  m();
  var Kp = le(),
    Lp = Kp.Symbol;
  Ho.exports = Lp;
});
var Ko = v((yO, _o) => {
  m();
  var Qo = ir(),
    zo = Object.prototype,
    Yp = zo.hasOwnProperty,
    Jp = zo.toString,
    Xe = Qo ? Qo.toStringTag : void 0;
  function Xp(e) {
    var t = Yp.call(e, Xe),
      r = e[Xe];
    try {
      e[Xe] = void 0;
      var n = !0;
    } catch (e2) {}
    var o = Jp.call(e);
    return n && (t ? (e[Xe] = r) : delete e[Xe]), o;
  }
  _o.exports = Xp;
});
var Yo = v((hO, Lo) => {
  m();
  var Zp = Object.prototype,
    ec = Zp.toString;
  function tc(e) {
    return ec.call(e);
  }
  Lo.exports = tc;
});
var Ze = v((OO, Zo) => {
  m();
  var Jo = ir(),
    rc = Ko(),
    nc = Yo(),
    oc = '[object Null]',
    sc = '[object Undefined]',
    Xo = Jo ? Jo.toStringTag : void 0;
  function ic(e) {
    return e == null
      ? e === void 0
        ? sc
        : oc
      : Xo && Xo in Object(e)
      ? rc(e)
      : nc(e);
  }
  Zo.exports = ic;
});
var ar = v((bO, es) => {
  m();
  function ac(e) {
    var t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  es.exports = ac;
});
var pr = v(($O, ts) => {
  m();
  var pc = Ze(),
    cc = ar(),
    mc = '[object AsyncFunction]',
    lc = '[object Function]',
    uc = '[object GeneratorFunction]',
    fc = '[object Proxy]';
  function dc(e) {
    if (!cc(e)) return !1;
    var t = pc(e);
    return t == lc || t == uc || t == mc || t == fc;
  }
  ts.exports = dc;
});
var ns = v((xO, rs) => {
  m();
  var gc = le(),
    yc = gc['__core-js_shared__'];
  rs.exports = yc;
});
var is = v((SO, ss) => {
  m();
  var cr = ns(),
    os = (function () {
      var e = /[^.]+$/.exec((cr && cr.keys && cr.keys.IE_PROTO) || '');
      return e ? 'Symbol(src)_1.' + e : '';
    })();
  function hc(e) {
    return !!os && os in e;
  }
  ss.exports = hc;
});
var mr = v((wO, as) => {
  m();
  var Oc = Function.prototype,
    bc = Oc.toString;
  function $c(e) {
    if (e != null) {
      try {
        return bc.call(e);
      } catch (e3) {}
      try {
        return e + '';
      } catch (e4) {}
    }
    return '';
  }
  as.exports = $c;
});
var cs = v((TO, ps) => {
  m();
  var xc = pr(),
    Sc = is(),
    wc = ar(),
    Tc = mr(),
    jc = /[\\^$.*+?()[\]{}|]/g,
    Rc = /^\[object .+?Constructor\]$/,
    Pc = Function.prototype,
    vc = Object.prototype,
    Ec = Pc.toString,
    Cc = vc.hasOwnProperty,
    Mc = RegExp(
      '^' +
        Ec.call(Cc)
          .replace(jc, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function Ac(e) {
    if (!wc(e) || Sc(e)) return !1;
    var t = xc(e) ? Mc : Rc;
    return t.test(Tc(e));
  }
  ps.exports = Ac;
});
var ls = v((jO, ms) => {
  m();
  function kc(e, t) {
    return e == null ? void 0 : e[t];
  }
  ms.exports = kc;
});
var Fe = v((RO, us) => {
  m();
  var Ic = cs(),
    Gc = ls();
  function Dc(e, t) {
    var r = Gc(e, t);
    return Ic(r) ? r : void 0;
  }
  us.exports = Dc;
});
var ds = v((PO, fs) => {
  m();
  var qc = Fe(),
    Fc = le(),
    Nc = qc(Fc, 'DataView');
  fs.exports = Nc;
});
var ys = v((vO, gs) => {
  m();
  var Bc = Fe(),
    Vc = le(),
    Uc = Bc(Vc, 'Map');
  gs.exports = Uc;
});
var Os = v((EO, hs) => {
  m();
  var Wc = Fe(),
    Hc = le(),
    Qc = Wc(Hc, 'Promise');
  hs.exports = Qc;
});
var $s = v((CO, bs) => {
  m();
  var zc = Fe(),
    _c = le(),
    Kc = zc(_c, 'Set');
  bs.exports = Kc;
});
var Ss = v((MO, xs) => {
  m();
  var Lc = Fe(),
    Yc = le(),
    Jc = Lc(Yc, 'WeakMap');
  xs.exports = Jc;
});
var Cs = v((AO, Es) => {
  m();
  var lr = ds(),
    ur = ys(),
    fr = Os(),
    dr = $s(),
    gr = Ss(),
    vs = Ze(),
    Ne = mr(),
    ws = '[object Map]',
    Xc = '[object Object]',
    Ts = '[object Promise]',
    js = '[object Set]',
    Rs = '[object WeakMap]',
    Ps = '[object DataView]',
    Zc = Ne(lr),
    em = Ne(ur),
    tm = Ne(fr),
    rm = Ne(dr),
    nm = Ne(gr),
    ve = vs;
  ((lr && ve(new lr(new ArrayBuffer(1))) != Ps) ||
    (ur && ve(new ur()) != ws) ||
    (fr && ve(fr.resolve()) != Ts) ||
    (dr && ve(new dr()) != js) ||
    (gr && ve(new gr()) != Rs)) &&
    (ve = function (e) {
      var t = vs(e),
        r = t == Xc ? e.constructor : void 0,
        n = r ? Ne(r) : '';
      if (n)
        switch (n) {
          case Zc:
            return Ps;
          case em:
            return ws;
          case tm:
            return Ts;
          case rm:
            return js;
          case nm:
            return Rs;
        }
      return t;
    });
  Es.exports = ve;
});
var Mt = v((kO, Ms) => {
  m();
  function om(e) {
    return e != null && typeof e == 'object';
  }
  Ms.exports = om;
});
var ks = v((IO, As) => {
  m();
  var sm = Ze(),
    im = Mt(),
    am = '[object Arguments]';
  function pm(e) {
    return im(e) && sm(e) == am;
  }
  As.exports = pm;
});
var qs = v((GO, Ds) => {
  m();
  var Is = ks(),
    cm = Mt(),
    Gs = Object.prototype,
    mm = Gs.hasOwnProperty,
    lm = Gs.propertyIsEnumerable,
    um = Is(
      (function () {
        return arguments;
      })(),
    )
      ? Is
      : function (e) {
          return cm(e) && mm.call(e, 'callee') && !lm.call(e, 'callee');
        };
  Ds.exports = um;
});
var Ns = v((DO, Fs) => {
  m();
  var fm = Array.isArray;
  Fs.exports = fm;
});
var yr = v((qO, Bs) => {
  m();
  var dm = 9007199254740991;
  function gm(e) {
    return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= dm;
  }
  Bs.exports = gm;
});
var Us = v((FO, Vs) => {
  m();
  var ym = pr(),
    hm = yr();
  function Om(e) {
    return e != null && hm(e.length) && !ym(e);
  }
  Vs.exports = Om;
});
var Hs = v((NO, Ws) => {
  m();
  function bm() {
    return !1;
  }
  Ws.exports = bm;
});
var Ks = v((et, Be) => {
  m();
  var $m = le(),
    xm = Hs(),
    _s = typeof et == 'object' && et && !et.nodeType && et,
    Qs = _s && typeof Be == 'object' && Be && !Be.nodeType && Be,
    Sm = Qs && Qs.exports === _s,
    zs = Sm ? $m.Buffer : void 0,
    wm = zs ? zs.isBuffer : void 0,
    Tm = wm || xm;
  Be.exports = Tm;
});
var Ys = v((BO, Ls) => {
  m();
  var jm = Ze(),
    Rm = yr(),
    Pm = Mt(),
    vm = '[object Arguments]',
    Em = '[object Array]',
    Cm = '[object Boolean]',
    Mm = '[object Date]',
    Am = '[object Error]',
    km = '[object Function]',
    Im = '[object Map]',
    Gm = '[object Number]',
    Dm = '[object Object]',
    qm = '[object RegExp]',
    Fm = '[object Set]',
    Nm = '[object String]',
    Bm = '[object WeakMap]',
    Vm = '[object ArrayBuffer]',
    Um = '[object DataView]',
    Wm = '[object Float32Array]',
    Hm = '[object Float64Array]',
    Qm = '[object Int8Array]',
    zm = '[object Int16Array]',
    _m = '[object Int32Array]',
    Km = '[object Uint8Array]',
    Lm = '[object Uint8ClampedArray]',
    Ym = '[object Uint16Array]',
    Jm = '[object Uint32Array]',
    k = {};
  k[Wm] = k[Hm] = k[Qm] = k[zm] = k[_m] = k[Km] = k[Lm] = k[Ym] = k[Jm] = !0;
  k[vm] =
    k[Em] =
    k[Vm] =
    k[Cm] =
    k[Um] =
    k[Mm] =
    k[Am] =
    k[km] =
    k[Im] =
    k[Gm] =
    k[Dm] =
    k[qm] =
    k[Fm] =
    k[Nm] =
    k[Bm] =
      !1;
  function Xm(e) {
    return Pm(e) && Rm(e.length) && !!k[jm(e)];
  }
  Ls.exports = Xm;
});
var Xs = v((VO, Js) => {
  m();
  function Zm(e) {
    return function (t) {
      return e(t);
    };
  }
  Js.exports = Zm;
});
var ei = v((tt, Ve) => {
  m();
  var el = sr(),
    Zs = typeof tt == 'object' && tt && !tt.nodeType && tt,
    rt = Zs && typeof Ve == 'object' && Ve && !Ve.nodeType && Ve,
    tl = rt && rt.exports === Zs,
    hr = tl && el.process,
    rl = (function () {
      try {
        var e = rt && rt.require && rt.require('util').types;
        return e || (hr && hr.binding && hr.binding('util'));
      } catch (e5) {}
    })();
  Ve.exports = rl;
});
var oi = v((UO, ni) => {
  m();
  var nl = Ys(),
    ol = Xs(),
    ti = ei(),
    ri = ti && ti.isTypedArray,
    sl = ri ? ol(ri) : nl;
  ni.exports = sl;
});
var Or = v((WO, si) => {
  m();
  var il = Vo(),
    al = Cs(),
    pl = qs(),
    cl = Ns(),
    ml = Us(),
    ll = Ks(),
    ul = or(),
    fl = oi(),
    dl = '[object Map]',
    gl = '[object Set]',
    yl = Object.prototype,
    hl = yl.hasOwnProperty;
  function Ol(e) {
    if (e == null) return !0;
    if (
      ml(e) &&
      (cl(e) ||
        typeof e == 'string' ||
        typeof e.splice == 'function' ||
        ll(e) ||
        fl(e) ||
        pl(e))
    )
      return !e.length;
    var t = al(e);
    if (t == dl || t == gl) return !e.size;
    if (ul(e)) return !il(e).length;
    for (var r in e) if (hl.call(e, r)) return !1;
    return !0;
  }
  si.exports = Ol;
});
var It = {
  name: 'orval',
  description: 'A swagger client generator for typescript',
  version: '6.9.0',
  license: 'MIT',
  files: ['dist'],
  bin: { orval: 'dist/bin/orval.js' },
  main: 'dist/index.js',
  keywords: [
    'rest',
    'client',
    'swagger',
    'open-api',
    'fetch',
    'data fetching',
    'code-generation',
    'angular',
    'react',
    'react-query',
    'svelte',
    'svelte-query',
    'vue',
    'vue-query',
    'msw',
    'mock',
    'axios',
    'vue-query',
    'vue',
    'swr',
  ],
  author: { name: 'Victor Bury', email: 'bury.victor@gmail.com' },
  repository: { type: 'git', url: 'https://github.com/anymaniax/orval' },
  scripts: {
    build:
      'tsup ./src/bin/orval.ts ./src/index.ts --minify --clean --dts --splitting',
    dev: "tsup ./src/bin/orval.ts ./src/index.ts --clean --watch src --onSuccess 'yarn generate-api'",
    lint: 'eslint src/**/*.ts',
    test: 'vitest --global test.ts',
    format: 'prettier --write .',
    'format:staged': 'pretty-quick --staged',
    prerelease: 'yarn build && cd ./tests && yarn generate && yarn build',
    release: 'dotenv release-it',
    postrelease: 'yarn build && yarn update-samples',
    'generate-api':
      'node ./dist/bin/orval.js --config ./samples/react-query/basic/orval.config.ts --watch',
    prepare: 'husky install && cd ./samples/react-query/basic && yarn',
    commitlint: 'commitlint',
    'update-samples': 'zx ./scripts/update-samples.mjs',
  },
  devDependencies: {
    '@commitlint/cli': '^17.0.2',
    '@commitlint/config-conventional': '^17.0.3',
    '@faker-js/faker': '^7.3.0',
    '@release-it/conventional-changelog': '^5.0.0',
    '@types/chalk': '^2.2.0',
    '@types/commander': '^2.12.2',
    '@types/fs-extra': '^9.0.12',
    '@types/inquirer': '^8.2.0',
    '@types/jest': '^28.1.6',
    '@types/lodash.get': '^4.4.6',
    '@types/lodash.omit': '^4.5.6',
    '@types/lodash.omitby': '^4.6.6',
    '@types/lodash.uniq': '^4.5.6',
    '@types/lodash.uniqby': '^4.7.6',
    '@types/lodash.uniqwith': '^4.5.6',
    '@types/micromatch': '^4.0.2',
    '@types/node': '^18.0.0',
    '@types/prettier': '^2.4.4',
    '@types/request': '^2.48.8',
    '@types/validator': '^13.7.1',
    '@typescript-eslint/eslint-plugin': '^5.14.0',
    '@typescript-eslint/parser': '^5.14.0',
    'dotenv-cli': '^5.1.0',
    eslint: '^8.10.0',
    'eslint-config-prettier': '^8.5.0',
    'eslint-plugin-prettier': '^4.0.0',
    husky: '^8.0.1',
    'lint-staged': '^13.0.3',
    'npm-run-all': '^4.1.5',
    prettier: '2.6.2',
    'pretty-quick': '^3.1.3',
    'release-it': '^15.1.0',
    rimraf: '^3.0.2',
    tsup: '^5.12.0',
    typescript: '^4.6.2',
    vitest: '^0.6.0',
    zx: '^7.0.2',
  },
  dependencies: {
    '@apidevtools/swagger-parser': '^10.1.0',
    acorn: '^8.7.0',
    cac: '^6.7.12',
    chalk: '^4.1.2',
    chokidar: '^3.5.3',
    'compare-versions': '^4.1.3',
    'core-js': '^3.23.5',
    cuid: '^2.1.8',
    debug: '^4.3.3',
    esbuild: '^0.14.25',
    esutils: '2.0.3',
    execa: '^5.1.1',
    'find-up': '5.0.0',
    'fs-extra': '^10.0.1',
    globby: '11.0.4',
    'ibm-openapi-validator': '^0.83.0',
    inquirer: '^8.2.0',
    'lodash.get': '^4.4.2',
    'lodash.omit': '^4.5.0',
    'lodash.omitby': '^4.6.0',
    'lodash.uniq': '^4.5.0',
    'lodash.uniqby': '^4.7.0',
    'lodash.uniqwith': '^4.5.0',
    micromatch: '^4.0.4',
    mobx: '^6.6.1',
    'openapi3-ts': '^2.0.2',
    react: '^18.2.0',
    'react-dom': '^18.2.0',
    redoc: '^2.0.0-rc.72',
    'string-argv': '^0.3.1',
    'styled-components': '^5.3.5',
    swagger2openapi: '^7.0.8',
    tsconfck: '^2.0.1',
    upath: '^2.0.1',
    url: '^0.11.0',
    validator: '^13.7.0',
  },
};
m();
var Q = {
    ANGULAR: 'angular',
    AXIOS: 'axios',
    AXIOS_FUNCTIONS: 'axios-functions',
    REACT_QUERY: 'react-query',
    SVELTE_QUERY: 'svelte-query',
    VUE_QUERY: 'vue-query',
  },
  ce = {
    SINGLE: 'single',
    SPLIT: 'split',
    TAGS: 'tags',
    TAGS_SPLIT: 'tags-split',
  },
  ee = {
    POST: 'post',
    PUT: 'put',
    GET: 'get',
    PATCH: 'patch',
    DELETE: 'delete',
    HEAD: 'head',
  };
m();
var _upath = require('upath');
var I = (e) => Boolean(e.$ref),
  on = (e) => !_upath.extname.call(void 0, e);
function N(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function G(e) {
  return typeof e == 'string';
}
function sn(e) {
  return typeof e == 'number';
}
function J(e) {
  return typeof e == 'boolean';
}
function B(e) {
  return typeof e == 'function';
}
function we(e) {
  return typeof e > 'u';
}
function an(e) {
  return typeof e === null;
}
var pn = (e) => Object.values(ee).includes(e);
m();
var _chalk = require('chalk');
var _chalk2 = _interopRequireDefault(_chalk);
var _readline = require('readline');
var _readline2 = _interopRequireDefault(_readline);
var q = console.log,
  ou = (exports.e = ({ name: e, version: t, description: r }) =>
    q(
      `\u{1F37B} Start ${_chalk2.default.cyan.bold(e)} ${_chalk2.default.green(
        `v${t}`,
      )}${r ? ` - ${r}` : ''}`,
    )),
  un = (e) => q(_chalk2.default.red(e));
var fn = (e) =>
    q(
      `\u{1F389} ${
        e ? `${_chalk2.default.green(e)} - ` : ''
      }Your OpenAPI spec has been converted into ready to use orval!`,
    ),
  dn = (e) => {
    q(_chalk2.default.yellow('(!) Warnings')),
      e.forEach((t) =>
        q(
          _chalk2.default.yellow(`Message : ${t.message}
Path    : ${t.path}`),
        ),
      );
  },
  gn = (e) => {
    q(_chalk2.default.red('(!) Errors')),
      e.forEach((t) =>
        q(
          _chalk2.default.red(`Message : ${t.message}
Path    : ${t.path}`),
        ),
      );
  },
  Gt = { silent: 0, error: 1, warn: 2, info: 3 },
  mn,
  ln,
  Dt = 0;
function Vi() {
  let e = process.stdout.rows - 2,
    t =
      e > 0
        ? `
`.repeat(e)
        : '';
  console.log(t),
    _readline2.default.cursorTo(process.stdout, 0, 0),
    _readline2.default.clearScreenDown(process.stdout);
}
function X(e = 'info', t = {}) {
  let { prefix: r = '[vite]', allowClearScreen: n = !0 } = t,
    o = Gt[e],
    s = n && process.stdout.isTTY && !process.env.CI ? Vi : () => {};
  function a(u, c, l = {}) {
    if (o >= Gt[u]) {
      let d = u === 'info' ? 'log' : u,
        g = () => {
          if (l.timestamp) {
            let f =
              u === 'info'
                ? _chalk2.default.cyan.bold(r)
                : u === 'warn'
                ? _chalk2.default.yellow.bold(r)
                : _chalk2.default.red.bold(r);
            return `${_chalk2.default.dim(
              new Date().toLocaleTimeString(),
            )} ${f} ${c}`;
          } else return c;
        };
      u === mn && c === ln
        ? (Dt++, s(), console[d](g(), _chalk2.default.yellow(`(x${Dt + 1})`)))
        : ((Dt = 0), (ln = c), (mn = u), l.clear && s(), console[d](g()));
    }
  }
  let i = new Set(),
    p = {
      hasWarned: !1,
      info(u, c) {
        a('info', u, c);
      },
      warn(u, c) {
        (p.hasWarned = !0), a('warn', u, c);
      },
      warnOnce(u, c) {
        i.has(u) || ((p.hasWarned = !0), a('warn', u, c), i.add(u));
      },
      error(u, c) {
        (p.hasWarned = !0), a('error', u, c);
      },
      clearScreen(u) {
        o >= Gt[u] && s();
      },
    };
  return p;
}
m();
var qt = function (e, t) {
    return (
      (t = t || ''), e.replace(/(^|-)/g, '$1\\u' + t).replace(/,/g, '\\u' + t)
    );
  },
  it = qt('20-26,28-2F,3A-40,5B-60,7B-7E,A0-BF,D7,F7', '00'),
  at = 'a-z' + qt('DF-F6,F8-FF', '00'),
  Qe = 'A-Z' + qt('C0-D6,D8-DE', '00'),
  Ui = 'A|An|And|As|At|But|By|En|For|If|In|Of|On|Or|The|To|Vs?\\.?|Via',
  fe = {
    capitalize: new RegExp('(^|[' + it + '])([' + at + '])', 'g'),
    pascal: new RegExp('(^|[' + it + '])+([' + at + Qe + '])', 'g'),
    fill: new RegExp('[' + it + ']+(.|$)', 'g'),
    sentence: new RegExp(
      '(^\\s*|[\\?\\!\\.]+"?\\s+"?|,\\s+")([' + at + '])',
      'g',
    ),
    improper: new RegExp('\\b(' + Ui + ')\\b', 'g'),
    relax: new RegExp(
      '([^' + Qe + '])([' + Qe + ']*)([' + Qe + '])(?=[^' + Qe + ']|$)',
      'g',
    ),
    upper: new RegExp('^[^' + at + ']+$'),
    hole: /[^\s]\s[^\s]/,
    apostrophe: /'/g,
    room: new RegExp('[' + it + ']'),
  },
  Wi = (e) => e.replace(fe.apostrophe, ''),
  yn = String.prototype.toUpperCase,
  Ft = String.prototype.toLowerCase,
  pt = (e, t, r = !1) => (
    t != null &&
      (e = e.replace(fe.fill, function (n, o) {
        return o ? t + o : '';
      })),
    r && (e = Wi(e)),
    e
  ),
  Hi = (e) => Ft.call(e.charAt(0)) + e.slice(1),
  Qi = (e, t, r, n) => t + ' ' + (r ? r + ' ' : '') + n,
  Nt = (e, t = !1, r = !1, n = !1) => {
    if (
      ((e = e == null ? '' : e + ''),
      !n && fe.upper.test(e) && (e = Ft.call(e)),
      !t && !fe.hole.test(e))
    ) {
      var o = pt(e, ' ');
      fe.hole.test(o) && (e = o);
    }
    return !r && !fe.room.test(e) && (e = e.replace(fe.relax, Qi)), e;
  },
  hn = (e, t, r) => pt(Ft.call(Nt(e, !!t)), t, r),
  b = (exports.f = (e) =>
    pt(
      Nt(e, !1, !0).replace(fe.pascal, (t, r, n) => yn.call(n)),
      '',
      !0,
    )),
  j = (exports.g = (e) => Hi(b(e))),
  iu = (exports.h = (e) => hn(e, '_', !0)),
  Te = (exports.i = (e) => hn(e, '-', !0)),
  au = (exports.j = (e, t, r) => pt(yn.call(Nt(e, !!t, !1, !0)), t, r));
m();
var _esutils = require('esutils');
var _lodashget = require('lodash.get');
var _lodashget2 = _interopRequireDefault(_lodashget);
var K = (e) => {
    if (!(we(e) || an(e)))
      return G(e)
        ? `'${e}'`
        : sn(e) || J(e) || B(e)
        ? `${e}`
        : Array.isArray(e)
        ? `[${e.map(K).join(', ')}]`
        : Object.entries(e).reduce((t, [r, n], o, s) => {
            let a = K(n);
            return s.length === 1
              ? `{ ${r}: ${a}, }`
              : o
              ? s.length - 1 === o
                ? t + `${r}: ${a}, }`
                : t + `${r}: ${a}, `
              : `{ ${r}: ${a}, `;
          }, '');
  },
  V = (exports.l = (e, t) => {
    let {
        whitespace: r = '',
        underscore: n = '',
        dot: o = '',
        dash: s = '',
        es5keyword: a = !1,
      } = t != null ? t : {},
      i = e.replace(/[^\w\s.-]/g, '');
    return (
      r !== !0 && (i = i.replace(/[\s]/g, r)),
      n !== !0 && (i = i.replace(/['_']/g, n)),
      o !== !0 && (i = i.replace(/[.]/g, o)),
      s !== !0 && (i = i.replace(/[-]/g, s)),
      a && (i = _esutils.keyword.isKeywordES5(i, !0) ? `_${i}` : i),
      i
    );
  }),
  F = (exports.m = (e, t) =>
    e.length
      ? (t ? e.map((n) => _lodashget2.default.call(void 0, n, t)) : e).join(`,
    `) + ','
      : ''),
  Ki = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  },
  ct = (exports.n = (e) =>
    e
      .toString()
      .split('')
      .reduce((r, n) => r + Ki[n], '')),
  mt = (exports.o = (e, t = "'") => e.replace(t, `\\${t}`));
m();
var Li = ['number', 'string', 'null', 'unknown', 'undefined', 'object', 'blob'],
  Ce = (exports.q = Li.reduce(
    (e, t) => (e.push(t, `Array<${t}>`, `${t}[]`), e),
    [],
  )),
  se = (exports.r = [ee.POST, ee.PUT, ee.PATCH, ee.DELETE]),
  du = (exports.s =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
m();
var _lodashuniq = require('lodash.uniq');
var _lodashuniq2 = _interopRequireDefault(_lodashuniq);
var _lodashuniqwith = require('lodash.uniqwith');
var _lodashuniqwith2 = _interopRequireDefault(_lodashuniqwith);
var xn = ({ imports: e = [], target: t, isRootKey: r, specsName: n }) =>
    e.length
      ? _lodashuniqwith2.default
          .call(
            void 0,
            e,
            (o, s) =>
              o.name === s.name &&
              o.default === s.default &&
              o.specKey === s.specKey,
          )
          .sort()
          .map(({ specKey: o, name: s, values: a, alias: i }) => {
            if (o) {
              let p = o !== t ? n[o] : '';
              return !r && o
                ? `import ${a ? '' : 'type '}{ ${s}${
                    i ? ` as ${i}` : ''
                  } } from '../${_upath.join.call(void 0, p, j(s))}';`
                : `import ${a ? '' : 'type '}{ ${s}${
                    i ? ` as ${i}` : ''
                  } } from './${_upath.join.call(void 0, p, j(s))}';`;
            }
            return `import ${a ? '' : 'type '}{ ${s}${
              i ? ` as ${i}` : ''
            } } from './${j(s)}';`;
          }).join(`
`)
      : '',
  z = (exports.u = ({ mutators: e, implementation: t, oneMore: r }) => {
    let n = _lodashuniqwith2.default
      .call(void 0, e, (o, s) => o.name === s.name && o.default === s.default)
      .map((o) => {
        let s = `${r ? '../' : ''}${o.path}`,
          i = `import ${o.default ? o.name : `{ ${o.name} }`} from '${s}'`;
        if (t && (o.hasErrorType || o.bodyTypeName)) {
          let p = '';
          o.hasErrorType &&
            t.includes(o.errorTypeName) &&
            (p = o.default
              ? `ErrorType as ${o.errorTypeName}`
              : o.errorTypeName);
          let u = '';
          o.bodyTypeName &&
            t.includes(o.bodyTypeName) &&
            (u = o.default ? `BodyType as ${o.bodyTypeName}` : o.bodyTypeName),
            (u || p) &&
              ((i += `
`),
              (i += `import type { ${p}${
                p && u ? ', ' : ''
              }${u} } from '${s}'`));
        }
        return i;
      }).join(`
`);
    return n
      ? n +
          `
`
      : '';
  }),
  bn = ({
    deps: e,
    isAllowSyntheticDefaultImports: t,
    dependency: r,
    specsName: n,
    key: o,
    onlyTypes: s,
  }) => {
    let a = e.find((l) => l.default && (t || !l.syntheticDefaultImport)),
      i = t ? void 0 : e.find((l) => l.syntheticDefaultImport),
      p = _lodashuniq2.default.call(
        void 0,
        e
          .filter((l) => !l.default && !l.syntheticDefaultImport)
          .map(({ name: l, alias: d }) => (d ? `${l} as ${d}` : l)),
      ).join(`,
  `),
      u = '',
      c = i ? `import * as ${i.name} from '${r}';` : '';
    if (c) {
      if (e.length === 1) return c;
      u += `${c}
`;
    }
    return (
      (u += `import ${s ? 'type ' : ''}${a ? `${a.name}${p ? ',' : ''}` : ''}${
        p
          ? `{
  ${p}
}`
          : ''
      } from '${r}${o !== 'default' && n[o] ? `/${n[o]}` : ''}'`),
      u
    );
  },
  Ji = (exports.v = ({
    implementation: e,
    exports: t,
    dependency: r,
    specsName: n,
    hasSchemaDir: o,
    isAllowSyntheticDefaultImports: s,
  }) => {
    let a = t.filter((p) => e.includes(p.alias || p.name));
    if (!a.length) return;
    let i = a.reduce((p, u) => {
      var l, d, g, f;
      let c = o && u.specKey ? u.specKey : 'default';
      return u.values && (s || !u.syntheticDefaultImport)
        ? ((p[c] = {
            ...p[c],
            values: [
              ...((d = (l = p[c]) == null ? void 0 : l.values) != null
                ? d
                : []),
              u,
            ],
          }),
          p)
        : ((p[c] = {
            ...p[c],
            types: [
              ...((f = (g = p[c]) == null ? void 0 : g.types) != null ? f : []),
              u,
            ],
          }),
          p);
    }, {});
    return Object.entries(i).map(([p, { values: u, types: c }]) => {
      let l = '';
      return (
        u &&
          (l += bn({
            deps: u,
            isAllowSyntheticDefaultImports: s,
            dependency: r,
            specsName: n,
            key: p,
            onlyTypes: !1,
          })),
        c &&
          (u &&
            (l += `
`),
          (l += bn({
            deps: c,
            isAllowSyntheticDefaultImports: s,
            dependency: r,
            specsName: n,
            key: p,
            onlyTypes: !0,
          }))),
        l
      );
    }).join(`
`);
  }),
  lt = (exports.w = (e, t, r, n, o) => {
    let s = t
      .map((a) =>
        Ji({
          ...a,
          implementation: e,
          specsName: r,
          hasSchemaDir: n,
          isAllowSyntheticDefaultImports: o,
        }),
      )
      .filter(Boolean).join(`
`);
    return s
      ? s +
          `
`
      : '';
  }),
  de = (exports.x = ({
    response: e,
    body: t,
    queryParams: r,
    headers: n,
    params: o,
  }) => [
    ...e.imports,
    ...t.imports,
    ...(r ? [{ name: r.schema.name }] : []),
    ...(n ? [{ name: n.schema.name }] : []),
    ...o.flatMap(({ imports: s }) => s),
  ]);
m();
var Xi = (e, t, r) =>
    t && e.formData
      ? `
      formData,`
      : r && e.formUrlEncoded
      ? `
      formUrlEncoded,`
      : e.implementation
      ? `
      ${e.implementation},`
      : '',
  Zi = (exports.z = ({
    response: e,
    isExactOptionalPropertyTypes: t,
    queryParams: r,
    headers: n,
    requestOptions: o,
    hasSignal: s,
  }) => {
    var p;
    let a = o !== !1;
    if (!r && !n && !e.isBlob)
      return a
        ? 'options'
        : s
        ? t
          ? '...(signal ? { signal } : {})'
          : 'signal'
        : '';
    let i = '';
    return (
      a ||
        (r &&
          (i += `
        params,`),
        n &&
          (i += `
        headers,`),
        s &&
          (i += t
            ? `
        ...(signal ? { signal } : {}),`
            : `
        signal,`)),
      e.isBlob &&
        (!N(o) || !o.hasOwnProperty('responseType')) &&
        (i += `
        responseType: 'blob',`),
      N(o) &&
        (i += `
 ${(p = K(o)) == null ? void 0 : p.slice(1, -1)}`),
      a &&
        ((i += `
    ...options,`),
        r &&
          (i += `
        params: {...params, ...options?.params},`),
        n &&
          (i += `
        headers: {...headers, ...options?.headers},`)),
      i
    );
  }),
  ge = (exports.A = ({
    route: e,
    body: t,
    headers: r,
    queryParams: n,
    response: o,
    verb: s,
    requestOptions: a,
    isFormData: i,
    isFormUrlEncoded: p,
    isAngular: u,
    isExactOptionalPropertyTypes: c,
    hasSignal: l,
  }) => {
    let d = se.includes(s),
      g = d ? Xi(t, i, p) : '',
      f = Zi({
        response: o,
        queryParams: n == null ? void 0 : n.schema,
        headers: r == null ? void 0 : r.schema,
        requestOptions: a,
        isExactOptionalPropertyTypes: c,
        hasSignal: l,
      }),
      h = f ? `{${f}}` : '';
    return s === ee.DELETE
      ? g
        ? `
      \`${e}\`,{${u ? 'body' : 'data'}:${g} ${f === 'options' ? `...${f}` : f}}
    `
        : `
      \`${e}\`,${f === 'options' ? f : h}
    `
      : `
      \`${e}\`,${d ? g || 'undefined,' : ''}${f === 'options' ? f : h}
    `;
  }),
  ea = (exports.B = (e, t, r) =>
    t && e.formData
      ? `,
       data: formData`
      : r && e.formUrlEncoded
      ? `,
       data: formUrlEncoded`
      : e.implementation
      ? `,
      data: ${e.implementation}`
      : ''),
  ta = (exports.C = (e, t) => {
    if (!t && !e.isBlob) return '';
    let r = '';
    return (
      t &&
        (r += `,
        params`),
      e.isBlob &&
        (r += `,
        responseType: 'blob'`),
      r
    );
  }),
  ye = (exports.D = ({
    route: e,
    body: t,
    headers: r,
    queryParams: n,
    response: o,
    verb: s,
    isFormData: a,
    isFormUrlEncoded: i,
    isBodyVerb: p,
    hasSignal: u,
    isExactOptionalPropertyTypes: c,
  }) => {
    let l = p ? ea(t, a, i) : '',
      d = ta(o, n),
      g = t.contentType
        ? `,
      headers: {'Content-Type': '${t.contentType}', ${r ? '...headers' : ''}}`
        : r
        ? `,
      headers`
        : '';
    return `{url: \`${e}\`, method: '${s}'${g}${l}${d}${
      !p && u ? `, ${c ? '...(signal ? { signal }: {})' : 'signal'}` : ''
    }
    }`;
  }),
  he = (exports.E = (e, t) => {
    var r, n;
    return t
      ? N(e)
        ? `{${(n = K(e)) == null ? void 0 : n.slice(1, -1)} ...options}`
        : 'options'
      : N(e)
      ? (r = K(e)) == null
        ? void 0
        : r.slice(1, -1)
      : '';
  }),
  Oe = (exports.F = ({
    body: e,
    formData: t,
    formUrlEncoded: r,
    isFormData: n,
    isFormUrlEncoded: o,
  }) =>
    n && e.formData
      ? t
        ? `const formData = ${t.name}(${e.implementation})`
        : e.formData
      : o && e.formUrlEncoded
      ? r
        ? `const formUrlEncoded = ${r.name}(${e.implementation})`
        : e.formUrlEncoded
      : '');
m();
m();
var _url = require('url');
var _url2 = _interopRequireDefault(_url);
m();
var _esbuild = require('esbuild');
var _fs = require('fs');
var _fs2 = _interopRequireDefault(_fs);
var _globby = require('globby');
var _globby2 = _interopRequireDefault(_globby);
var _micromatch = require('micromatch');
var _micromatch2 = _interopRequireDefault(_micromatch);
var _path = require('path');
var _path2 = _interopRequireDefault(_path);
m();
var _debug = require('debug');
var _debug2 = _interopRequireDefault(_debug);
var Sn = process.env.ORVAL_DEBUG_FILTER,
  Bt = process.env.DEBUG;
function wn(e, t = {}) {
  let r = _debug2.default.call(void 0, e),
    { onlyWhenFocused: n } = t,
    o = typeof n == 'string' ? n : e;
  return (s, ...a) => {
    (Sn && !s.includes(Sn)) ||
      (n && !(Bt != null && Bt.includes(o))) ||
      r(s, ...a);
  };
}
var A = (
    e = '',
    { backupFilename: t = 'filename', extension: r = '.ts' } = {},
  ) => {
    let n = on(e),
      o = n ? _upath.join.call(void 0, e, t + r) : e,
      s = o.replace(/\.[^/.]+$/, ''),
      a = _upath.dirname.call(void 0, o),
      i = _upath.basename.call(void 0, o, r[0] !== '.' ? `.${r}` : r);
    return {
      path: o,
      pathWithoutExtension: s,
      extension: r,
      isDirectory: n,
      dirname: a,
      filename: i,
    };
  },
  Pn = wn('orval:file-load'),
  Ut = new Map();
async function ut(e, t) {
  let {
      root: r = process.cwd(),
      isDefault: n = !0,
      defaultFileName: o,
      logLevel: s,
      alias: a,
      tsconfig: i,
      load: p = !0,
    } = t != null ? t : {},
    u = Date.now(),
    c,
    l = !1,
    d = !1;
  if (e) (c = _path2.default.resolve(e)), (l = e.endsWith('.ts'));
  else if (o) {
    let h = _path2.default.resolve(r, `${o}.js`);
    if ((_fs2.default.existsSync(h) && (c = h), !c)) {
      let y = _path2.default.resolve(r, `${o}.mjs`);
      _fs2.default.existsSync(y) && ((c = y), (d = !0));
    }
    if (!c) {
      let y = _path2.default.resolve(r, `${o}.ts`);
      _fs2.default.existsSync(y) && ((c = y), (l = !0));
    }
  }
  c ||
    (e
      ? X(s).error(_chalk2.default.red(`File not found => ${e}`))
      : o
      ? X(s).error(_chalk2.default.red(`File not found => ${o}.{js,mjs,ts}`))
      : X(s).error(_chalk2.default.red('File not found')),
    process.exit(1));
  let g = _upath.normalizeSafe.call(void 0, c),
    f = Ut.get(c);
  if (f) return { path: g, ...f, cached: !0 };
  try {
    let h;
    if (!h && !l && !d)
      try {
        delete H.cache[H.resolve(c)],
          (h = H(c)),
          Pn(`cjs loaded in ${Date.now() - u}ms`);
      } catch (y) {
        if (
          !new RegExp(
            [
              'Cannot use import statement',
              'Must use import to load ES Module',
              'Unexpected token',
              'Unexpected identifier',
            ].join('|'),
          ).test(y.message)
        )
          throw y;
      }
    if (!h) {
      let { code: y } = await pa(
        c,
        d,
        r || _upath.dirname.call(void 0, g),
        a,
        i == null ? void 0 : i.compilerOptions,
      );
      p ? (h = await ca(c, y, n)) : (h = y),
        Pn(`bundled file loaded in ${Date.now() - u}ms`);
    }
    return Ut.set(c, { file: h }), { path: g, file: h };
  } catch (h) {
    return Ut.set(c, { error: h }), { path: g, error: h };
  }
}
async function pa(e, t = !1, r, n, o) {
  let s = await _esbuild.build.call(void 0, {
      absWorkingDir: process.cwd(),
      entryPoints: [e],
      outfile: 'out.js',
      write: !1,
      platform: 'node',
      bundle: !0,
      format: t ? 'esm' : 'cjs',
      sourcemap: 'inline',
      metafile: !0,
      target: 'es6',
      minifyWhitespace: !0,
      plugins: [
        ...(n || (o == null ? void 0 : o.paths)
          ? [
              {
                name: 'aliasing',
                setup(i) {
                  i.onResolve({ filter: /^[\w@][^:]/ }, async ({ path: p }) => {
                    if (n) {
                      let u = Object.keys(n),
                        c = u.find(
                          (l) =>
                            p.startsWith(l) ||
                            _micromatch2.default.isMatch(p, u),
                        );
                      if (c) {
                        let l = _micromatch2.default.scan(c),
                          d = _micromatch2.default.scan(n[c]),
                          g = _upath.resolve.call(void 0, r, d.base),
                          f = l.base
                            ? p.replace(l.base, g)
                            : _upath.joinSafe.call(void 0, g, p),
                          y = _upath.extname.call(void 0, f) ? f : `${f}.ts`;
                        return _fs2.default.existsSync(y)
                          ? { path: y }
                          : void 0;
                      }
                    }
                    if (o != null && o.paths) {
                      let u = Object.keys(o == null ? void 0 : o.paths),
                        c = u.find(
                          (l) =>
                            p.startsWith(l) ||
                            _micromatch2.default.isMatch(p, u),
                        );
                      if (c) {
                        let l = _micromatch2.default.scan(c),
                          d = _micromatch2.default.scan(
                            o == null ? void 0 : o.paths[c][0],
                          ),
                          g = _upath.resolve.call(void 0, r, d.base),
                          f = l.base
                            ? p.replace(l.base, g)
                            : _upath.joinSafe.call(void 0, g, p),
                          y = _upath.extname.call(void 0, f) ? f : `${f}.ts`;
                        return _fs2.default.existsSync(y)
                          ? { path: y }
                          : void 0;
                      }
                    }
                  });
                },
              },
            ]
          : []),
        {
          name: 'externalize-deps',
          setup(i) {
            i.onResolve({ filter: /.*/ }, (p) => {
              let u = p.path;
              if (u[0] !== '.' && !_path2.default.isAbsolute(u))
                return { external: !0 };
            });
          },
        },
        {
          name: 'replace-import-meta',
          setup(i) {
            i.onLoad({ filter: /\.[jt]s$/ }, async (p) => {
              let u = await _fs2.default.promises.readFile(p.path, 'utf8');
              return {
                loader: p.path.endsWith('.ts') ? 'ts' : 'js',
                contents: u
                  .replace(
                    /\bimport\.meta\.url\b/g,
                    JSON.stringify(`file://${p.path}`),
                  )
                  .replace(
                    /\b__dirname\b/g,
                    JSON.stringify(_path2.default.dirname(p.path)),
                  )
                  .replace(/\b__filename\b/g, JSON.stringify(p.path)),
              };
            });
          },
        },
      ],
    }),
    { text: a } = s.outputFiles[0];
  return {
    code: a,
    dependencies: s.metafile ? Object.keys(s.metafile.inputs) : [],
  };
}
async function ca(e, t, r) {
  let n = _path2.default.extname(e),
    o = H.extensions[n];
  (H.extensions[n] = (i, p) => {
    p === e ? i._compile(t, p) : o(i, p);
  }),
    delete H.cache[H.resolve(e)];
  let s = H(e),
    a = r && s.__esModule ? s.default : s;
  return (H.extensions[n] = o), a;
}
async function Wt(e, t) {
  let r = await _globby2.default.call(void 0, e, { cwd: t, absolute: !0 });
  await Promise.all(r.map((n) => _fs2.default.promises.unlink(n)));
}
m();
var _isURL = require('validator/lib/isURL');
var _isURL2 = _interopRequireDefault(_isURL);
var la = /^https?:\/\/\w+(\.\w+)*(:[0-9]+)?(\/.*)?$/,
  be = (e) => _isURL2.default.call(void 0, e) || la.test(e);
var ze = {
    schemas: '',
    responses: 'Response',
    parameters: 'Parameter',
    requestBodies: 'Body',
  },
  ga = new RegExp('~1', 'g'),
  Ae = async (e, t) => {
    let [r, n] = e.split('#'),
      o = n
        .slice(1)
        .split('/')
        .map((p) => p.replace(ga, '/')),
      s = _lodashget2.default.call(
        void 0,
        t.override,
        [...o.slice(0, 2), 'suffix'],
        '',
      ),
      a = o[o.length - 1];
    if (!r) return { name: b(a) + s, originalName: a, refPaths: o };
    let i = be(t.specKey)
      ? _url2.default.resolve(t.specKey, r)
      : _upath.resolve.call(void 0, A(t.specKey).dirname, r);
    return { name: b(a) + s, originalName: a, specKey: i, refPaths: o };
  };
m();
var _fsextra = require('fs-extra');
var _inquirer = require('inquirer');
var _inquirer2 = _interopRequireDefault(_inquirer);
m();
var _https = require('https');
var _https2 = _interopRequireDefault(_https);
var En = (e, t) =>
  new Promise((r, n) => {
    let o = _https2.default.request(e, (s) => {
      let a = '';
      s.on('data', (i) => (a += i.toString())),
        s.on('error', n),
        s.on('end', () => {
          let i = {
            status: s.statusCode,
            headers: s.headers,
            body: JSON.parse(a),
          };
          s.statusCode && s.statusCode >= 200 && s.statusCode <= 299
            ? r(i)
            : n(i);
        });
    });
    o.on('error', n), t && o.write(t, 'binary'), o.end();
  });
var xa = ({ accessToken: e, repo: t, owner: r, branch: n, path: o }) => {
    let s = JSON.stringify({
      query: `query {
      repository(name: "${t}", owner: "${r}") {
        object(expression: "${n}:${o}") {
          ... on Blob {
            text
          }
        }
      }
    }`,
    });
    return [
      {
        method: 'POST',
        hostname: 'api.github.com',
        path: '/graphql',
        headers: {
          'content-type': 'application/json',
          'user-agent': 'orval-importer',
          authorization: `bearer ${e}`,
          'Content-Length': s.length,
        },
      },
      s,
    ];
  },
  Sa = async (e) => {
    if (await _fsextra.pathExists.call(void 0, e))
      return _fsextra.readFile.call(void 0, e, 'utf-8');
    {
      let t = await _inquirer2.default.prompt([
        {
          type: 'input',
          name: 'githubToken',
          message:
            'Please provide a GitHub token with `repo` rules checked (https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)',
        },
        {
          type: 'confirm',
          name: 'saveToken',
          message:
            'Would you like to store your token for the next time? (stored in your node_modules)',
        },
      ]);
      return (
        t.saveToken &&
          (await _fsextra.outputFile.call(void 0, e, t.githubToken)),
        t.githubToken
      );
    }
  },
  wa = async (e) => {
    var u, c, l, d;
    let t = _upath.join.call(void 0, __dirname, '.githubToken'),
      r = await Sa(t),
      [n] = e.split('github.com/').slice(-1),
      [o, s, , a, ...i] = n.split('/'),
      p = i.join('/');
    try {
      let { body: g } = await En(
        ...xa({ accessToken: r, repo: s, owner: o, branch: a, path: p }),
      );
      return (
        (u = g.errors) != null &&
          u.length &&
          ((c = g.errors) == null
            ? void 0
            : c.some((h) => (h == null ? void 0 : h.type) === 'NOT_FOUND')) &&
          (
            await _inquirer2.default.prompt([
              {
                type: 'confirm',
                name: 'removeToken',
                message:
                  "Your token doesn't have the correct permissions, should we remove it?",
              },
            ])
          ).removeToken &&
          (await _fsextra.unlink.call(void 0, t)),
        (d = (l = g.data) == null ? void 0 : l.repository) == null
          ? void 0
          : d.object.text
      );
    } catch (g) {
      throw g.body
        ? (g.body.message === 'Bad credentials' &&
            (
              await _inquirer2.default.prompt([
                {
                  type: 'confirm',
                  name: 'removeToken',
                  message:
                    "Your token doesn't have the correct permissions, should we remove it?",
                },
              ])
            ).removeToken &&
            (await _fsextra.unlink.call(void 0, t)),
          g.body.message || `Oups... \u{1F37B}. ${g}`)
        : `Oups... \u{1F37B}. ${g}`;
    }
  },
  Mn = {
    order: 199,
    canRead(e) {
      return e.url.includes('github.com');
    },
    read(e) {
      return wa(e.url);
    },
  };
m();
var ft = (e) => e && typeof e == 'object';
function Pe(e, t) {
  return !ft(t) || !ft(e)
    ? e
    : Object.entries(t).reduce((r, [n, o]) => {
        let s = r[n];
        return (
          Array.isArray(s) && Array.isArray(o)
            ? (r[n] = [...s, ...o])
            : ft(s) && ft(o)
            ? (r[n] = Pe(s, o))
            : (r[n] = o),
          r
        );
      }, e);
}
m();
var An = ({ title: e, description: t, version: r }) => [
  `Generated by ${It.name} v${It.version} \u{1F37A}`,
  'Do not edit manually.',
  ...(e ? [e] : []),
  ...(t ? [t] : []),
  ...(r ? [`OpenAPI spec version: ${r}`] : []),
];
m();
var _findup = require('find-up');
var _findup2 = _interopRequireDefault(_findup);
var kn = async (e, t = process.cwd()) => {
  if (!e) {
    let n = await _findup2.default.call(void 0, ['package.json'], { cwd: t });
    return n ? await Promise.resolve().then(() => ue(H(n))) : void 0;
  }
  let r = ie(e, t);
  if (_fsextra.existsSync.call(void 0, r))
    return await Promise.resolve().then(() => ue(H(r)));
};
m();
var _tsconfck = require('tsconfck');
var Gn = async (e, t = process.cwd()) => {
    var r, n;
    if (we(e)) {
      let o = await _findup2.default.call(
        void 0,
        ['tsconfig.json', 'jsconfig.json'],
        { cwd: t },
      );
      return o ? (await _tsconfck.parse.call(void 0, o)).tsconfig : void 0;
    }
    if (G(e)) {
      let o = ie(e, t);
      if (_fsextra.existsSync.call(void 0, o)) {
        let s = await _tsconfck.parse.call(void 0, o);
        return (
          ((n =
            (r = s.referenced) == null
              ? void 0
              : r.find(({ tsconfigFile: i }) => i === o)) == null
            ? void 0
            : n.tsconfig) || s.tsconfig
        );
      }
      return;
    }
    if (N(e)) return e;
  },
  Z = (exports.J = (e) => {
    var t, r, n;
    return e
      ? !!((n =
          (t = e == null ? void 0 : e.compilerOptions) == null
            ? void 0
            : t.allowSyntheticDefaultImports) != null
          ? n
          : (r = e == null ? void 0 : e.compilerOptions) == null
          ? void 0
          : r.esModuleInterop)
      : !0;
  });
function Uf(e) {
  return e;
}
var qn = async (e, t = process.cwd(), r = {}) => {
    var y,
      x,
      $,
      S,
      w,
      T,
      R,
      P,
      E,
      C,
      D,
      L,
      pe,
      Ee,
      Y,
      oe,
      Ue,
      We,
      He,
      ot,
      st,
      jr,
      Rr,
      Pr,
      vr,
      Er,
      Cr,
      Mr,
      Ar,
      kr,
      Ir,
      Gr,
      Dr,
      qr,
      Fr,
      Nr,
      Br,
      Vr,
      Ur,
      Wr,
      Hr,
      Qr,
      zr,
      _r,
      Kr,
      Lr,
      Yr,
      Jr,
      Xr,
      Zr,
      en,
      tn,
      rn;
    let n = await (B(e) ? e() : e);
    n.input ||
      (X().error(_chalk2.default.red('Config require an input')),
      process.exit(1)),
      n.output ||
        (X().error(_chalk2.default.red('Config require an output')),
        process.exit(1));
    let o = G(n.input) ? { target: n.input } : n.input,
      s = G(n.output) ? { target: n.output } : n.output,
      a = ie(s.workspace || '', t),
      { clean: i, prettier: p, client: u, mode: c, mock: l, tslint: d } = r,
      g = await Gn(s.tsconfig || r.tsconfig, t),
      f = await kn(s.packageJson || r.packageJson, t),
      h = {
        input: {
          target: Ea(o.target, t),
          validation: o.validation || !1,
          override: {
            transformer: ie(
              (y = o.override) == null ? void 0 : y.transformer,
              t,
            ),
          },
          converterOptions: (x = o.converterOptions) != null ? x : {},
          parserOptions: Pe(va, ($ = o.parserOptions) != null ? $ : {}),
        },
        output: {
          target: ie(s.target, a),
          schemas: ie(s.schemas, a),
          workspace: s.workspace ? a : void 0,
          client:
            (w = (S = s.client) != null ? S : u) != null
              ? w
              : Q.AXIOS_FUNCTIONS,
          mode: Ca((T = s.mode) != null ? T : c),
          mock: (P = (R = s.mock) != null ? R : l) != null ? P : !1,
          clean: (C = (E = s.clean) != null ? E : i) != null ? C : !1,
          prettier: (L = (D = s.prettier) != null ? D : p) != null ? L : !1,
          tslint: (Ee = (pe = s.tslint) != null ? pe : d) != null ? Ee : !1,
          tsconfig: g,
          packageJson: f,
          headers: (Y = s.headers) != null ? Y : !1,
          override: {
            ...s.override,
            operations: Dn(
              (Ue = (oe = s.override) == null ? void 0 : oe.operations) != null
                ? Ue
                : {},
              a,
            ),
            tags: Dn(
              (He = (We = s.override) == null ? void 0 : We.tags) != null
                ? He
                : {},
              a,
            ),
            mutator: Ie(a, (ot = s.override) == null ? void 0 : ot.mutator),
            formData:
              (Pr = J((st = s.override) == null ? void 0 : st.formData)
                ? (Rr = s.override) == null
                  ? void 0
                  : Rr.formData
                : Ie(a, (jr = s.override) == null ? void 0 : jr.formData)) !=
              null
                ? Pr
                : !0,
            formUrlEncoded:
              (Mr = J((vr = s.override) == null ? void 0 : vr.formUrlEncoded)
                ? (Cr = s.override) == null
                  ? void 0
                  : Cr.formUrlEncoded
                : Ie(
                    a,
                    (Er = s.override) == null ? void 0 : Er.formUrlEncoded,
                  )) != null
                ? Mr
                : !0,
            header:
              ((Ar = s.override) == null ? void 0 : Ar.header) === !1
                ? !1
                : B((kr = s.override) == null ? void 0 : kr.header)
                ? (Ir = s.override) == null
                  ? void 0
                  : Ir.header
                : An,
            requestOptions:
              (Dr = (Gr = s.override) == null ? void 0 : Gr.requestOptions) !=
              null
                ? Dr
                : !0,
            components: {
              schemas: {
                suffix: ze.schemas,
                ...((Nr =
                  (Fr = (qr = s.override) == null ? void 0 : qr.components) ==
                  null
                    ? void 0
                    : Fr.schemas) != null
                  ? Nr
                  : {}),
              },
              responses: {
                suffix: ze.responses,
                ...((Ur =
                  (Vr = (Br = s.override) == null ? void 0 : Br.components) ==
                  null
                    ? void 0
                    : Vr.responses) != null
                  ? Ur
                  : {}),
              },
              parameters: {
                suffix: ze.parameters,
                ...((Qr =
                  (Hr = (Wr = s.override) == null ? void 0 : Wr.components) ==
                  null
                    ? void 0
                    : Hr.parameters) != null
                  ? Qr
                  : {}),
              },
              requestBodies: {
                suffix: ze.requestBodies,
                ...((Kr =
                  (_r = (zr = s.override) == null ? void 0 : zr.components) ==
                  null
                    ? void 0
                    : _r.requestBodies) != null
                  ? Kr
                  : {}),
              },
            },
            query: {
              useQuery: !0,
              signal: !0,
              ...((Yr = (Lr = s.override) == null ? void 0 : Lr.query) != null
                ? Yr
                : {}),
            },
            swr: {
              ...((Xr = (Jr = s.override) == null ? void 0 : Jr.swr) != null
                ? Xr
                : {}),
            },
            angular: {
              provideIn:
                (tn =
                  (en = (Zr = s.override) == null ? void 0 : Zr.angular) == null
                    ? void 0
                    : en.provideIn) != null
                  ? tn
                  : 'root',
            },
            useDates: ((rn = s.override) == null ? void 0 : rn.useDates) || !1,
          },
        },
        hooks: n.hooks ? Ma(n.hooks) : {},
      };
    return (
      h.input.target ||
        (X().error(_chalk2.default.red('Config require an input target')),
        process.exit(1)),
      !h.output.target &&
        !h.output.schemas &&
        (X().error(
          _chalk2.default.red('Config require an output target or schemas'),
        ),
        process.exit(1)),
      h
    );
  },
  va = { validate: !0, resolve: { github: Mn } },
  Ie = (e, t) => {
    var r;
    return N(t)
      ? (t.path ||
          (X().error(_chalk2.default.red('Mutator need a path')),
          process.exit(1)),
        {
          ...t,
          path: _upath.resolve.call(void 0, e, t.path),
          default: (r = t.default || !t.name) != null ? r : !1,
        })
      : G(t)
      ? { path: _upath.resolve.call(void 0, e, t), default: !0 }
      : t;
  },
  Ea = (e, t) => (G(e) && !be(e) ? ie(e, t) : e),
  ie = (e, t) => (G(e) ? _upath.resolve.call(void 0, t, e) : e),
  Dn = (e, t) =>
    Object.fromEntries(
      Object.entries(e).map(
        ([
          r,
          {
            transformer: n,
            mutator: o,
            formData: s,
            formUrlEncoded: a,
            requestOptions: i,
            ...p
          },
        ]) => [
          r,
          {
            ...p,
            ...(n ? { transformer: ie(n, t) } : {}),
            ...(o ? { mutator: Ie(t, o) } : {}),
            ...(s ? { formData: J(s) ? s : Ie(t, s) } : {}),
            ...(a ? { formUrlEncoded: J(a) ? a : Ie(t, a) } : {}),
          },
        ],
      ),
    ),
  Ca = (e) =>
    e
      ? Object.values(ce).includes(e)
        ? e
        : (X().warn(
            _chalk2.default.yellow(`Unknown the provided mode => ${e}`),
          ),
          ce.SINGLE)
      : ce.SINGLE,
  Ma = (e) =>
    Object.keys(e).reduce(
      (r, n) =>
        G(e[n])
          ? { ...r, [n]: [e[n]] }
          : Array.isArray(e[n])
          ? { ...r, [n]: e[n] }
          : B(e[n])
          ? { ...r, [n]: [e[n]] }
          : r,
      {},
    );
m();
var Fn = async (e, t, r = '.') => {
  if (!e) return;
  let { watch: n } = await Promise.resolve().then(() => ue(H('chokidar'))),
    o = ['**/{.git,node_modules}/**'],
    s =
      typeof e == 'boolean'
        ? r
        : Array.isArray(e)
        ? e.filter((i) => typeof i == 'string')
        : e;
  q(
    `Watching for changes in ${
      Array.isArray(s) ? s.map((i) => '"' + i + '"').join(' | ') : '"' + s + '"'
    }`,
  ),
    n(s, { ignorePermissionErrors: !0, ignored: o }).on('all', async (i, p) => {
      q(`Change detected: ${i} ${p}`);
      try {
        await t();
      } catch (u) {
        q(_chalk2.default.red(u));
      }
    });
};
m();
m();
var _swaggerparser = require('@apidevtools/swagger-parser');
var _swaggerparser2 = _interopRequireDefault(_swaggerparser);
var _console = require('console');
m();
var _lodashomit = require('lodash.omit');
var _lodashomit2 = _interopRequireDefault(_lodashomit);
m();
var M = (e, t, r) =>
  e.reduce(async (n, ...o) => t(await n, ...o), Promise.resolve(r));
m();
var _swagger2openapi = require('swagger2openapi');
var _swagger2openapi2 = _interopRequireDefault(_swagger2openapi);
var Nn = async (e, t = {}, r) => {
  try {
    return new Promise((n) => {
      !e.openapi && e.swagger === '2.0'
        ? _swagger2openapi2.default.convertObj(e, t, (o, s) => {
            o
              ? (q(
                  _chalk2.default.yellow(`${r}
=> ${o}`),
                ),
                n(e))
              : n(s.openapi);
          })
        : n(e);
    });
  } catch (n) {
    throw `Oups... \u{1F37B}.
Path: ${r}
Parsing Error: ${n}`;
  }
};
m();
var dt = async (e, t = process.cwd(), r = !0) => {
  if (!e) return e;
  try {
    if (G(e)) {
      let n = _upath.resolve.call(void 0, t, e),
        o = await Promise.resolve().then(() => ue(H(n)));
      return r && N(o) && o.default ? o.default : o;
    }
    return Promise.resolve(e);
  } catch (n) {
    throw `Oups... \u{1F37B}. Path: ${e} => ${n}`;
  }
};
m();
m();
var Bn = (e) => /[^{]*{[\w*_-]*}.*/.test(e),
  Vn = (e) => {
    let t = e.match(/([^{]*){?([\w*_-]*)}?(.*)/);
    if (!(t != null && t.length)) return e;
    let r = t[1],
      n = V(j(t[2]), { es5keyword: !0, underscore: !0, dash: !0, dot: !0 }),
      o = Bn(t[3]) ? Vn(t[3]) : t[3];
    return Bn(e) ? `${r}\${${n}}${o}` : `${r}${n}${o}`;
  },
  Un = (e) =>
    e
      .split('/')
      .reduce(
        (r, n, o) =>
          !n && !o ? r : n.includes('{') ? `${r}/${Vn(n)}` : `${r}/${n}`,
        '',
      );
m();
var U = async (e, t, r = []) => {
  var p;
  if ((p = e == null ? void 0 : e.schema) != null && p.$ref) {
    let u = await U(e == null ? void 0 : e.schema, t, r);
    return { schema: { ...e, schema: u.schema }, imports: r };
  }
  if (!I(e)) return { schema: e, imports: r };
  let {
      name: n,
      originalName: o,
      specKey: s,
      refPaths: a,
    } = await Ae(e.$ref, t),
    i = _lodashget2.default.call(void 0, t.specs[s || t.specKey], a);
  if (!i) throw `Oups... \u{1F37B}. Ref not found: ${e.$ref}`;
  return U(i, { ...t, specKey: s || t.specKey }, [
    ...r,
    { name: n, specKey: s, schemaName: o },
  ]);
};
m();
m();
var qa = [
    {
      exports: [
        { name: 'HttpClient', values: !0 },
        { name: 'HttpHeaders' },
        { name: 'HttpParams' },
        { name: 'HttpContext' },
      ],
      dependency: '@angular/common/http',
    },
    {
      exports: [{ name: 'Injectable', values: !0 }],
      dependency: '@angular/core',
    },
    { exports: [{ name: 'Observable', values: !0 }], dependency: 'rxjs' },
  ],
  zt = new Map(),
  Wn = () => qa,
  Hn = (e) => {
    let t = V(e);
    return `${b(t)}Service`;
  },
  Qn = ({
    title: e,
    isRequestOptions: t,
    isMutator: r,
    isGlobalMutator: n,
    provideIn: o,
  }) => `
${
  t && !n
    ? `type HttpClientOptions = {
  headers?: HttpHeaders | {
      [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: any;
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: any;
  withCredentials?: boolean;
};`
    : ''
}

${
  t && r
    ? `// eslint-disable-next-line
    type ThirdParameter<T extends (...args: any) => any> = T extends (
  config: any,
  httpClient: any,
  args: infer P,
) => any
  ? P
  : never;`
    : ''
}

@Injectable(${o ? `{ providedIn: '${J(o) ? 'root' : o}' }` : ''})
export class ${e} {
  constructor(
    private http: HttpClient,
  ) {}`,
  zn = ({ operationNames: e }) => {
    let t = `};

`;
    return (
      e.forEach((r) => {
        zt.has(r) &&
          (t +=
            zt.get(r) +
            `
`);
      }),
      t
    );
  },
  Fa = (
    {
      headers: e,
      queryParams: t,
      operationName: r,
      response: n,
      mutator: o,
      body: s,
      props: a,
      verb: i,
      override: p,
      formData: u,
      formUrlEncoded: c,
    },
    { route: l, context: d },
  ) => {
    var T, R;
    let g = (p == null ? void 0 : p.requestOptions) !== !1,
      f = (p == null ? void 0 : p.formData) !== !1,
      h = (p == null ? void 0 : p.formUrlEncoded) !== !1,
      y = !!(
        (R = (T = d.tsconfig) == null ? void 0 : T.compilerOptions) != null &&
        R.exactOptionalPropertyTypes
      ),
      x = se.includes(i),
      $ = Oe({
        formData: u,
        formUrlEncoded: c,
        body: s,
        isFormData: f,
        isFormUrlEncoded: h,
      }),
      S = n.definition.success || 'unknown';
    if ((zt.set(r, `export type ${b(r)}ClientResult = NonNullable<${S}>`), o)) {
      let P = ye({
          route: l,
          body: s,
          headers: e,
          queryParams: t,
          response: n,
          verb: i,
          isFormData: f,
          isFormUrlEncoded: h,
          hasSignal: !1,
          isBodyVerb: x,
          isExactOptionalPropertyTypes: y,
        }),
        E = g ? he(p == null ? void 0 : p.requestOptions, o.hasThirdArg) : '',
        C =
          o.bodyTypeName && s.definition
            ? F(a, 'implementation').replace(
                new RegExp(`(\\w*):\\s?${s.definition}`),
                `$1: ${o.bodyTypeName}<${s.definition}>`,
              )
            : F(a, 'implementation');
      return ` ${r}<TData = ${S}>(
    ${C}
 ${
   g && o.hasThirdArg ? `options?: ThirdParameter<typeof ${o.name}>` : ''
 }) {${$}
      return ${o.name}<TData>(
      ${P},
      this.http,
      ${E});
    }
  `;
    }
    let w = ge({
      route: l,
      body: s,
      headers: e,
      queryParams: t,
      response: n,
      verb: i,
      requestOptions: p == null ? void 0 : p.requestOptions,
      isFormData: f,
      isFormUrlEncoded: h,
      isAngular: !0,
      isExactOptionalPropertyTypes: y,
      hasSignal: !1,
    });
    return ` ${r}<TData = ${S}>(
    ${F(a, 'implementation')} ${
      g
        ? `options?: HttpClientOptions
`
        : ''
    }  ): Observable<TData>  {${$}
    return this.http.${i}<TData>(${w});
  }
`;
  },
  _n = (e, t) => {
    let r = de(e);
    return { implementation: Fa(e, t), imports: r };
  };
m();
var Na = [
    {
      exports: [
        { name: 'axios', default: !0, values: !0, syntheticDefaultImport: !0 },
        { name: 'AxiosRequestConfig' },
        { name: 'AxiosResponse' },
      ],
      dependency: 'axios',
    },
  ],
  gt = new Map(),
  _t = (e) => [...(e ? [] : Na)],
  Ba = (
    {
      headers: e,
      queryParams: t,
      operationName: r,
      response: n,
      mutator: o,
      body: s,
      props: a,
      verb: i,
      override: p,
      formData: u,
      formUrlEncoded: c,
    },
    { route: l, context: d },
  ) => {
    var T, R;
    let g = (p == null ? void 0 : p.requestOptions) !== !1,
      f = (p == null ? void 0 : p.formData) !== !1,
      h = (p == null ? void 0 : p.formUrlEncoded) !== !1,
      y = !!(
        (R = (T = d.tsconfig) == null ? void 0 : T.compilerOptions) != null &&
        R.exactOptionalPropertyTypes
      ),
      x = Z(d.tsconfig),
      $ = Oe({
        formData: u,
        formUrlEncoded: c,
        body: s,
        isFormData: f,
        isFormUrlEncoded: h,
      }),
      S = se.includes(i);
    if (o) {
      let P = ye({
          route: l,
          body: s,
          headers: e,
          queryParams: t,
          response: n,
          verb: i,
          isFormData: f,
          isFormUrlEncoded: h,
          isBodyVerb: S,
          hasSignal: !1,
          isExactOptionalPropertyTypes: y,
        }),
        E = g ? he(p == null ? void 0 : p.requestOptions, o.hasSecondArg) : '';
      gt.set(
        r,
        (D) =>
          `export type ${b(r)}Result = NonNullable<Awaited<ReturnType<${
            D ? `ReturnType<typeof ${D}>['${r}']` : `typeof ${r}`
          }>>>`,
      );
      let C =
        o.bodyTypeName && s.definition
          ? F(a, 'implementation').replace(
              new RegExp(`(\\w*):\\s?${s.definition}`),
              `$1: ${o.bodyTypeName}<${s.definition}>`,
            )
          : F(a, 'implementation');
      return `const ${r} = (
    ${C}
 ${
   g && o.hasSecondArg ? `options?: SecondParameter<typeof ${o.name}>,` : ''
 }) => {${$}
      return ${o.name}<${n.definition.success || 'unknown'}>(
      ${P},
      ${E});
    }
  `;
    }
    let w = ge({
      route: l,
      body: s,
      headers: e,
      queryParams: t,
      response: n,
      verb: i,
      requestOptions: p == null ? void 0 : p.requestOptions,
      isFormData: f,
      isFormUrlEncoded: h,
      isExactOptionalPropertyTypes: y,
      hasSignal: !1,
    });
    return (
      gt.set(
        r,
        () =>
          `export type ${b(r)}Result = AxiosResponse<${
            n.definition.success || 'unknown'
          }>`,
      ),
      `const ${r} = <TData = AxiosResponse<${
        n.definition.success || 'unknown'
      }>>(
    ${F(a, 'implementation')} ${
        g
          ? `options?: AxiosRequestConfig
`
          : ''
      } ): Promise<TData> => {${$}
    return axios${x ? '' : '.default'}.${i}(${w});
  }
`
    );
  },
  Kt = (e) => {
    let t = V(e);
    return `get${b(t)}`;
  },
  Lt = ({ title: e, isRequestOptions: t, isMutator: r, noFunction: n }) => `
${
  t && r
    ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

`
    : ''
}
  ${
    n
      ? ''
      : `export const ${e} = () => {
`
  }`,
  Yt = ({
    operationNames: e,
    title: t,
    noFunction: r,
    hasMutator: n,
    hasAwaitedType: o,
  }) => {
    let s = '';
    return (
      r ||
        (s += `return {${e.join(',')}}};
`),
      n &&
        !o &&
        (s += `
type AwaitedInput<T> = PromiseLike<T> | T;

    type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`),
      e.forEach((a) => {
        gt.has(a) &&
          (s +=
            gt.get(a)(r ? void 0 : t) +
            `
`);
      }),
      s
    );
  },
  Jt = (e, t) => {
    let r = de(e);
    return { implementation: Ba(e, t), imports: r };
  },
  Kn = (e, t, r) => {
    let { implementation: n, imports: o } = Jt(e, t, r);
    return { implementation: 'export ' + n, imports: o };
  };
m();
m();
var Ln = (e) => /[^{]*{[\w*_-]*}.*/.test(e),
  Yn = (e) => {
    let t = e.match(/([^{]*){?([\w*_-]*)}?(.*)/);
    if (!(t != null && t.length)) return e;
    let r = t[1],
      n = V(j(t[2]), { es5keyword: !0, underscore: !0, dash: !0, dot: !0 }),
      o = Ln(t[3]) ? Yn(t[3]) : t[3];
    return Ln(e) ? `${r}:${n}${o}` : `${r}${n}${o}`;
  },
  Jn = (e, t = '*') =>
    e
      .split('/')
      .reduce(
        (n, o, s) =>
          !o && !s ? n : o.includes('{') ? `${n}/${Yn(o)}` : `${n}/${o}`,
        t,
      );
m();
m();
m();
var Xn = {
  email: 'faker.internet.email()',
  zipCode: 'faker.address.zipCode()',
  city: 'faker.address.city()',
  streetName: 'faker.address.streetName()',
  country: 'faker.address.country()',
  date: 'faker.date.recent()',
  iban: 'faker.finance.iban()',
  userName: 'faker.internet.userName()',
  firstName: 'faker.name.firstName()',
  lastName: 'faker.name.lastName()',
  jobTitle: 'faker.name.jobTitle()',
  gender: 'faker.name.gender()',
  phoneNumber: 'faker.phone.phoneNumber()',
  url: 'faker.internet.url()',
};
m();
m();
var Zn = (e, t, r) => {
  var a, i, p, u;
  let n = Object.entries(
      (i = (a = t.specs[r].components) == null ? void 0 : a.schemas) != null
        ? i
        : [],
    ).reduce((c, [l, d]) => ((c[l] = d), c), {}),
    o = Object.entries(
      (u = (p = t.specs[r].components) == null ? void 0 : p.responses) != null
        ? u
        : [],
    ).reduce((c, [l, d]) => {
      var g, f;
      return (
        (c[l] = I(d)
          ? d
          : (f = (g = d.content) == null ? void 0 : g['application/json']) ==
            null
          ? void 0
          : f.schema),
        c
      );
    }, {});
  return { ...{ ...n, ...o }[e], specKey: r };
};
var Va = (e) => e[0] === '/' && e[e.length - 1] === '/',
  yt = (e = {}, t) => {
    let r = Object.entries(e).find(
      ([n]) =>
        !!(
          (Va(n) && new RegExp(n.slice(1, n.length - 1)).test(t.name)) ||
          `#.${n}` === (t.path ? t.path : `#.${t.name}`)
        ),
    );
    if (!!r)
      return {
        value: Ke(r[1], t.nullable),
        imports: [],
        name: t.name,
        overrided: !0,
      };
  },
  Ke = (e, t) => (t ? `faker.helpers.arrayElement([${e}, null])` : e),
  me = async ({
    schema: e,
    mockOptions: t,
    operationId: r,
    tags: n,
    combine: o,
    context: s,
    imports: a,
  }) => {
    if (I(e)) {
      let { name: p, specKey: u } = await Ae(e.$ref, s),
        c = {
          ...Zn(p, s, u || e.specKey || s.specKey),
          name: p,
          path: e.path,
          isRef: !0,
          specKey: u || e.specKey,
        };
      return {
        ...(await _e({
          item: c,
          mockOptions: t,
          operationId: r,
          tags: n,
          combine: o,
          context: s,
          imports: a,
        })),
        type: c.type,
      };
    }
    return {
      ...(await _e({
        item: e,
        mockOptions: t,
        operationId: r,
        tags: n,
        combine: o,
        context: s,
        imports: a,
      })),
      type: e.type,
    };
  };
m();
var _cuid = require('cuid');
var _cuid2 = _interopRequireDefault(_cuid);
m();
var eo = (e = '', t) => {
  var r;
  return e ? ((r = e.match(new RegExp(t, 'g'))) != null ? r : []).length : 0;
};
m();
var to = async ({
  item: e,
  separator: t,
  mockOptions: r,
  operationId: n,
  tags: o,
  combine: s,
  context: a,
  imports: i,
}) => {
  var d, g, f;
  let p = [],
    u = (
      (d = s == null ? void 0 : s.includedProperties) != null ? d : []
    ).slice(0),
    c = await me({
      schema: _lodashomit2.default.call(void 0, e, t),
      combine: { separator: 'allOf', includedProperties: [] },
      mockOptions: r,
      operationId: n,
      tags: o,
      context: a,
      imports: i,
    });
  return (
    u.push(...((g = c.includedProperties) != null ? g : [])),
    {
      value: await M(
        (f = e[t]) != null ? f : [],
        async (h, y, x, $) => {
          var T, R;
          let S = await me({
            schema: {
              ...y,
              name: e.name,
              path: e.path ? e.path : '#',
              specKey: e.specKey,
            },
            combine: {
              separator: t,
              includedProperties:
                t !== 'oneOf' ? u : (T = c.includedProperties) != null ? T : [],
            },
            mockOptions: r,
            operationId: n,
            tags: o,
            context: a,
            imports: i,
          });
          p.push(...S.imports),
            u.push(...((R = S.includedProperties) != null ? R : []));
          let w =
            c.value && t === 'oneOf'
              ? `${S.value.slice(0, -1)},${c.value}}`
              : S.value;
          return !x && !s
            ? S.enums || t === 'oneOf'
              ? $.length === 1
                ? `faker.helpers.arrayElement([${w}])`
                : `faker.helpers.arrayElement([${w},`
              : $.length === 1
              ? S.type !== 'object'
                ? `${w}`
                : `{${w}}`
              : `{${w},`
            : $.length - 1 === x
            ? S.enums || t === 'oneOf'
              ? `${h}${w}${s ? '' : '])'}`
              : `${h}${w}${c.value ? `,${c.value}` : ''}${s ? '' : '}'}`
            : w
            ? `${h}${w},`
            : h;
        },
        '',
      ),
      imports: p,
      name: e.name,
      includedProperties: u,
    }
  );
};
m();
var Ge = (e) => (_esutils.keyword.isIdentifierNameES5(e) ? e : `'${e}'`);
var ro = async ({
  item: e,
  mockOptions: t,
  operationId: r,
  tags: n,
  combine: o,
  context: s,
  imports: a,
}) => {
  if (I(e))
    return me({
      schema: {
        ...e,
        name: e.name,
        path: e.path ? `${e.path}.${e.name}` : e.name,
        specKey: e.specKey,
      },
      mockOptions: t,
      operationId: r,
      tags: n,
      context: s,
      imports: a,
    });
  if (e.allOf || e.oneOf || e.anyOf) {
    let i = e.allOf ? 'allOf' : e.oneOf ? 'oneOf' : 'anyOf';
    return to({
      item: e,
      separator: i,
      mockOptions: t,
      operationId: r,
      tags: n,
      combine: o,
      context: s,
      imports: a,
    });
  }
  if (e.properties) {
    let i = !o || (o == null ? void 0 : o.separator) === 'oneOf' ? '{' : '',
      p = [],
      u = [];
    return (
      (i += (
        await Promise.all(
          Object.entries(e.properties).map(async ([c, l]) => {
            if (o != null && o.includedProperties.includes(c)) return;
            let d =
              (t == null ? void 0 : t.required) ||
              (Array.isArray(e.required) ? e.required : []).includes(c);
            if (eo(e.path, `\\.${c}\\.`) >= 1) return;
            let g = await me({
              schema: {
                ...l,
                name: c,
                path: e.path ? `${e.path}.${c}` : `#.${c}`,
                specKey: e.specKey,
              },
              mockOptions: t,
              operationId: r,
              tags: n,
              context: s,
              imports: p,
            });
            p.push(...g.imports), u.push(c);
            let f = Ge(c);
            return !d && !g.overrided
              ? `${f}: faker.helpers.arrayElement([${g.value}, undefined])`
              : `${f}: ${g.value}`;
          }),
        )
      )
        .filter(Boolean)
        .join(', ')),
      (i += !o || (o == null ? void 0 : o.separator) === 'oneOf' ? '}' : ''),
      { value: i, imports: p, name: e.name, includedProperties: u }
    );
  }
  if (e.additionalProperties) {
    if (J(e.additionalProperties))
      return { value: '{}', imports: [], name: e.name };
    let i = await me({
      schema: {
        ...e.additionalProperties,
        name: e.name,
        path: e.path ? `${e.path}.#` : '#',
        specKey: e.specKey,
      },
      mockOptions: t,
      operationId: r,
      tags: n,
      context: s,
      imports: a,
    });
    return {
      ...i,
      value: `{
        '${_cuid2.default.call(void 0)}': ${i.value}
      }`,
    };
  }
  return { value: '', imports: [], name: e.name };
};
var _e = async ({
  item: e,
  imports: t,
  mockOptions: r,
  operationId: n,
  tags: o,
  combine: s,
  context: a,
}) => {
  var d, g, f, h;
  let i = yt(
    (g = (d = r == null ? void 0 : r.operations) == null ? void 0 : d[n]) ==
      null
      ? void 0
      : g.properties,
    e,
  );
  if (i) return i;
  let p = Object.entries(
      (f = r == null ? void 0 : r.tags) != null ? f : {},
    ).reduce((y, [x, $]) => (o.includes(x) ? Pe(y, $) : y), {}),
    u = yt(p == null ? void 0 : p.properties, e);
  if (u) return u;
  let c = yt(r == null ? void 0 : r.properties, e);
  if (c) return c;
  let l = { ...Xn, ...((h = r == null ? void 0 : r.format) != null ? h : {}) };
  if (e.format && l[e.format])
    return {
      value: Ke(l[e.format], e.nullable),
      imports: [],
      name: e.name,
      overrided: !1,
    };
  switch (e.type) {
    case 'number':
    case 'integer':
      return {
        value: Ke(
          `faker.datatype.number({min: ${e.minimum}, max: ${e.maximum}})`,
          e.nullable,
        ),
        imports: [],
        name: e.name,
      };
    case 'boolean':
      return { value: 'faker.datatype.boolean()', imports: [], name: e.name };
    case 'array': {
      if (!e.items) return { value: '[]', imports: [], name: e.name };
      let {
        value: y,
        enums: x,
        imports: $,
        name: S,
      } = await me({
        schema: {
          ...e.items,
          name: e.name,
          path: e.path ? `${e.path}.[]` : '#.[]',
          specKey: e.specKey,
        },
        combine: s,
        mockOptions: r,
        operationId: n,
        tags: o,
        context: a,
        imports: t,
      });
      if (x) {
        if (!I(e.items)) return { value: y, imports: $, name: e.name };
        let w = t.find((R) => S.replace('[]', '') === R.name);
        return {
          value: `faker.helpers.arrayElements(Object.values(${
            (w == null ? void 0 : w.name) || S
          }))`,
          imports: w ? [...$, { ...w, values: !0 }] : $,
          name: e.name,
        };
      }
      return {
        value: `Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (${y}))`,
        imports: $,
        name: e.name,
      };
    }
    case 'string': {
      let y = 'faker.random.word()',
        x = [];
      if (e.enum) {
        let $ = "['" + e.enum.map((S) => mt(S)).join("','") + "']";
        e.isRef &&
          (($ = `Object.values(${e.name})`),
          (x = [{ name: e.name, values: !0 }])),
          (y = `faker.helpers.arrayElement(${$})`);
      }
      return {
        value: Ke(y, e.nullable),
        enums: e.enum,
        name: e.name,
        imports: x,
      };
    }
    case 'object':
    default:
      return ro({
        item: e,
        mockOptions: r,
        operationId: n,
        tags: o,
        combine: s,
        context: a,
        imports: t,
      });
  }
};
var ht = (e, t) =>
    Object.entries(B(e) ? e(t) : e).reduce((r, [n, o]) => {
      let s = B(o) ? `(${o})()` : K(o);
      return (
        (r[n] =
          s == null
            ? void 0
            : s.replace(/import_faker.defaults|import_faker.faker/g, 'faker')),
        r
      );
    }, {}),
  Qa = (e, t) => {
    var r, n, o;
    return {
      required: (r = t == null ? void 0 : t.mock) == null ? void 0 : r.required,
      ...((n = t == null ? void 0 : t.mock) != null && n.properties
        ? { properties: ht(t.mock.properties, e) }
        : {}),
      ...((o = t == null ? void 0 : t.mock) != null && o.format
        ? { format: ht(t.mock.format, e) }
        : {}),
      ...(t != null && t.operations
        ? {
            operations: Object.entries(t.operations).reduce((s, [a, i]) => {
              var p;
              return (
                (p = i.mock) != null &&
                  p.properties &&
                  (s[a] = { properties: ht(i.mock.properties, e) }),
                s
              );
            }, {}),
          }
        : {}),
      ...(t != null && t.tags
        ? {
            tags: Object.entries(t.tags).reduce((s, [a, i]) => {
              var p;
              return (
                (p = i.mock) != null &&
                  p.properties &&
                  (s[a] = { properties: ht(i.mock.properties, e) }),
                s
              );
            }, {}),
          }
        : {}),
    };
  },
  za = (e) => {
    let t = e.endsWith('[]');
    switch (t ? e.slice(0, -2) : e) {
      case 'number':
        return t
          ? 'Array.from({length: faker.datatype.number({min: 1, max: 10})}, () => faker.datatype.number())'
          : 'faker.datatype.number().toString()';
      case 'string':
        return t
          ? 'Array.from({length: faker.datatype.number({min: 1, max: 10})}, () => faker.random.word())'
          : 'faker.random.word()';
      default:
        return 'undefined';
    }
  },
  _a = ({
    operationId: e,
    tags: t,
    response: r,
    mockOptionsWithoutFunc: n,
    transformer: o,
    context: s,
  }) =>
    M(
      r.types.success,
      async (a, { value: i, originalSchema: p, imports: u }) => {
        if (!i || Ce.includes(i)) {
          let d = za(i);
          return a.definitions.push(o ? o(d, r.definition.success) : d), a;
        }
        if (!p) return a;
        let c = await U(p, s),
          l = await _e({
            item: {
              name: i,
              ...c.schema,
              ...(r.imports.length ? { specKey: r.imports[0].specKey } : {}),
            },
            imports: u,
            mockOptions: n,
            operationId: e,
            tags: t,
            context: s,
          });
        return (
          a.imports.push(...l.imports),
          a.definitions.push(
            o ? o(l.value, r.definition.success) : l.value.toString(),
          ),
          a
        );
      },
      { definitions: [], imports: [] },
    ),
  no = async ({
    operationId: e,
    tags: t,
    response: r,
    override: n,
    transformer: o,
    context: s,
  }) => {
    let a = Qa(s.specs[s.specKey], n),
      { definitions: i, imports: p } = await _a({
        operationId: e,
        tags: t,
        response: r,
        mockOptionsWithoutFunc: a,
        transformer: o,
        context: s,
      });
    return { definition: '[' + i.join(', ') + ']', definitions: i, imports: p };
  },
  oo = (e, t) => {
    var o, s, a;
    let r =
        (a =
          (s =
            (o = t == null ? void 0 : t.operations) == null ? void 0 : o[e]) ==
          null
            ? void 0
            : s.mock) == null
          ? void 0
          : a.data,
      n = B(r) ? `(${r})()` : K(r);
    return n == null
      ? void 0
      : n.replace(/import_faker.defaults|import_faker.faker/g, 'faker');
  };
var Ka = [
    { exports: [{ name: 'rest', values: !0 }], dependency: 'msw' },
    { exports: [{ name: 'faker', values: !0 }], dependency: '@faker-js/faker' },
  ],
  $e = (e, t, r, n, o) => lt(e, [...Ka, ...t], r, n, o),
  so = async (
    { operationId: e, response: t, verb: r, tags: n },
    { pathRoute: o, override: s, context: a },
  ) => {
    var f, h;
    let {
        definitions: i,
        definition: p,
        imports: u,
      } = await no({
        operationId: e,
        tags: n,
        response: t,
        override: s,
        context: a,
      }),
      c = Jn(o, (f = s == null ? void 0 : s.mock) == null ? void 0 : f.baseUrl),
      l = oo(e, s),
      d = '';
    l
      ? (d = l)
      : i.length > 1
      ? (d = `faker.helpers.arrayElement(${p})`)
      : i[0] && (d = i[0]);
    let g = t.contentTypes.includes('text/plain') ? 'text' : 'json';
    return {
      implementation: {
        function:
          d && d !== 'undefined'
            ? `export const get${b(e)}Mock = () => (${d})

`
            : '',
        handler: `rest.${r}('${c}', (_req, res, ctx) => {
        return res(
          ctx.delay(${
            ((h = s == null ? void 0 : s.mock) == null ? void 0 : h.delay) ||
            1e3
          }),
          ctx.status(200, 'Mocked status'),${
            d && d !== 'undefined'
              ? `
ctx.${g}(get${b(e)}Mock()),`
              : ''
          }
        )
      }),`,
      },
      imports: u,
    };
  };
m();
var _lodashomitby = require('lodash.omitby');
var _lodashomitby2 = _interopRequireDefault(_lodashomitby);
m();
var W = {
  PARAM: 'param',
  BODY: 'body',
  QUERY_PARAM: 'queryParam',
  HEADER: 'header',
};
var Zt = [
    {
      exports: [
        { name: 'axios', default: !0, values: !0, syntheticDefaultImport: !0 },
        { name: 'AxiosRequestConfig' },
        { name: 'AxiosResponse' },
        { name: 'AxiosError' },
      ],
      dependency: 'axios',
    },
  ],
  Ya = [
    {
      exports: [
        { name: 'useQuery', values: !0 },
        { name: 'useInfiniteQuery', values: !0 },
        { name: 'useMutation', values: !0 },
        { name: 'UseQueryOptions' },
        { name: 'UseInfiniteQueryOptions' },
        { name: 'UseMutationOptions' },
        { name: 'QueryFunction' },
        { name: 'MutationFunction' },
        { name: 'UseQueryStoreResult' },
        { name: 'UseInfiniteQueryStoreResult' },
        { name: 'QueryKey' },
      ],
      dependency: '@sveltestack/svelte-query',
    },
  ],
  io = (e) => [...(e ? [] : Zt), ...Ya],
  Ja = [
    {
      exports: [
        { name: 'useQuery', values: !0 },
        { name: 'useInfiniteQuery', values: !0 },
        { name: 'useMutation', values: !0 },
        { name: 'UseQueryOptions' },
        { name: 'UseInfiniteQueryOptions' },
        { name: 'UseMutationOptions' },
        { name: 'QueryFunction' },
        { name: 'MutationFunction' },
        { name: 'UseQueryResult' },
        { name: 'UseInfiniteQueryResult' },
        { name: 'QueryKey' },
      ],
      dependency: 'react-query',
    },
  ],
  ao = (e) => [...(e ? [] : Zt), ...Ja],
  Xa = [
    {
      exports: [
        { name: 'useQuery', values: !0 },
        { name: 'useInfiniteQuery', values: !0 },
        { name: 'useMutation', values: !0 },
      ],
      dependency: 'vue-query',
    },
    {
      exports: [
        { name: 'UseQueryOptions' },
        { name: 'UseInfiniteQueryOptions' },
        { name: 'UseMutationOptions' },
        { name: 'QueryFunction' },
        { name: 'MutationFunction' },
        { name: 'UseQueryResult' },
        { name: 'UseInfiniteQueryResult' },
        { name: 'QueryKey' },
      ],
      dependency: 'vue-query/types',
    },
    {
      exports: [{ name: 'UseQueryReturnType' }],
      dependency: 'vue-query/lib/vue/useBaseQuery',
    },
  ],
  po = (e) => [...(e ? [] : Zt), ...Xa],
  Za = ({ isRequestOptions: e, hasSignal: t }) =>
    e
      ? `options?: AxiosRequestConfig
`
      : t
      ? `signal?: AbortSignal
`
      : '',
  ep = (
    {
      headers: e,
      queryParams: t,
      operationName: r,
      response: n,
      mutator: o,
      body: s,
      props: a,
      verb: i,
      formData: p,
      formUrlEncoded: u,
      override: c,
    },
    { route: l, context: d },
  ) => {
    var P, E;
    let g = c.requestOptions !== !1,
      f = c.formData !== !1,
      h = c.formUrlEncoded !== !1,
      y = !!c.query.signal,
      x = Z(d.tsconfig),
      $ = !!(
        (E = (P = d.tsconfig) == null ? void 0 : P.compilerOptions) != null &&
        E.exactOptionalPropertyTypes
      ),
      S = se.includes(i),
      w = Oe({
        formData: p,
        formUrlEncoded: u,
        body: s,
        isFormData: f,
        isFormUrlEncoded: h,
      });
    if (o) {
      let C = ye({
          route: l,
          body: s,
          headers: e,
          queryParams: t,
          response: n,
          verb: i,
          isFormData: f,
          isFormUrlEncoded: h,
          isBodyVerb: S,
          hasSignal: y,
          isExactOptionalPropertyTypes: $,
        }),
        D =
          (o == null ? void 0 : o.bodyTypeName) && s.definition
            ? F(a, 'implementation').replace(
                new RegExp(`(\\w*):\\s?${s.definition}`),
                `$1: ${o.bodyTypeName}<${s.definition}>`,
              )
            : F(a, 'implementation'),
        L = g ? he(c.requestOptions, o.hasSecondArg) : '';
      return o.isHook
        ? `export const use${b(r)}Hook = () => {
        const ${r} = ${o.name}<${n.definition.success || 'unknown'}>();

        return (
    ${D}
${
  !S && y
    ? `signal?: AbortSignal,
`
    : ''
} ${
            g && o.hasSecondArg
              ? `options?: SecondParameter<typeof ${o.name}>`
              : ''
          }) => {${w}
        return ${r}(
          ${C},
          ${L});
        }
      }
    `
        : `export const ${r} = (
    ${D}
 ${g && o.hasSecondArg ? `options?: SecondParameter<typeof ${o.name}>,` : ''}${
            !S && y
              ? `signal?: AbortSignal
`
              : ''
          }) => {${w}
      return ${o.name}<${n.definition.success || 'unknown'}>(
      ${C},
      ${L});
    }
  `;
    }
    let T = ge({
        route: l,
        body: s,
        headers: e,
        queryParams: t,
        response: n,
        verb: i,
        requestOptions: c == null ? void 0 : c.requestOptions,
        isFormData: f,
        isFormUrlEncoded: h,
        isExactOptionalPropertyTypes: $,
        hasSignal: y,
      }),
      R = Za({ isRequestOptions: g, hasSignal: y });
    return `export const ${r} = (
    ${F(a, 'implementation')} ${R} ): Promise<AxiosResponse<${
      n.definition.success || 'unknown'
    }>> => {${w}
    return axios${x ? '' : '.default'}.${i}(${T});
  }
`;
  },
  Xt = { INFINITE: 'infiniteQuery', QUERY: 'query' },
  tp = ['getNextPageParam', 'getPreviousPageParam'],
  rp = ({ params: e, options: t, type: r }) => {
    var o;
    if (t === !1) return '';
    let n = N(t)
      ? ` ${
          (o = K(
            _lodashomitby2.default.call(
              void 0,
              t,
              (s, a) => !!(r !== Xt.INFINITE && tp.includes(a)),
            ),
          )) == null
            ? void 0
            : o.slice(1, -1)
        }`
      : '';
    return e.length
      ? `{${
          !N(t) || !t.hasOwnProperty('enabled')
            ? `enabled: !!(${e.map(({ name: s }) => s).join(' && ')}),`
            : ''
        }${n} ...queryOptions}`
      : t
      ? `{${n} ...queryOptions}`
      : 'queryOptions';
  },
  co = ({
    operationName: e,
    definitions: t,
    mutator: r,
    isRequestOptions: n,
    type: o,
  }) => {
    let s = r == null ? void 0 : r.isHook,
      a = o
        ? `Use${b(o)}Options<Awaited<ReturnType<${
            s ? `ReturnType<typeof use${b(e)}Hook>` : `typeof ${e}`
          }>>, TError, TData>`
        : `UseMutationOptions<Awaited<ReturnType<${
            s ? `ReturnType<typeof use${b(e)}Hook>` : `typeof ${e}`
          }>>, TError,${t ? `{${t}}` : 'TVariables'}, TContext>`;
    return n
      ? `options?: { ${o ? 'query' : 'mutation'}?:${a}, ${
          r
            ? r != null && r.hasSecondArg
              ? `request?: SecondParameter<typeof ${r.name}>`
              : ''
            : 'axios?: AxiosRequestConfig'
        }}
`
      : `${o ? 'queryOptions' : 'mutationOptions'}?: ${a}`;
  },
  np = ({ outputClient: e, type: t, isMutatorHook: r, operationName: n }) => {
    switch (e) {
      case Q.SVELTE_QUERY:
        return `Use${b(t)}StoreResult<Awaited<ReturnType<${
          r ? `ReturnType<typeof use${b(n)}Hook>` : `typeof ${n}`
        }>>, TError, TData, QueryKey>`;
      case Q.VUE_QUERY:
        return ` UseQueryReturnType<TData, TError, Use${b(
          t,
        )}Result<TData, TError>>`;
      case Q.REACT_QUERY:
      default:
        return ` Use${b(t)}Result<TData, TError>`;
    }
  },
  op = ({
    isRequestOptions: e,
    mutator: t,
    isExactOptionalPropertyTypes: r,
    hasSignal: n,
  }) =>
    !t && e
      ? n
        ? `{ ${
            r ? '...(signal ? { signal } : {})' : 'signal'
          }, ...axiosOptions }`
        : 'axiosOptions'
      : (t == null ? void 0 : t.hasSecondArg) && e
      ? n
        ? 'requestOptions, signal'
        : 'requestOptions'
      : n
      ? 'signal'
      : '',
  sp = ({ isRequestOptions: e, mutator: t }) => {
    if (!e) return '';
    let r = 'const {query: queryOptions';
    return (
      t || (r += ', axios: axiosOptions'),
      t != null && t.hasSecondArg && (r += ', request: requestOptions'),
      (r += '} = options ?? {}'),
      r
    );
  },
  ip = ({ hasQueryParam: e, hasSignal: t }) =>
    !e && !t
      ? ''
      : e
      ? t
        ? '{ signal, pageParam }'
        : '{ pageParam }'
      : '{ signal }',
  ap = ({
    queryOption: { name: e, queryParam: t, options: r, type: n },
    operationName: o,
    queryKeyFnName: s,
    queryProperties: a,
    queryKeyProperties: i,
    params: p,
    props: u,
    mutator: c,
    isRequestOptions: l,
    response: d,
    outputClient: g,
    isExactOptionalPropertyTypes: f,
    hasSignal: h,
  }) => {
    let y = F(u, 'implementation'),
      x = t
        ? u
            .map(({ name: C }) =>
              C === 'params' ? `{ ${t}: pageParam, ...params }` : C,
            )
            .join(',')
        : a,
      $ = np({
        outputClient: g,
        type: n,
        isMutatorHook: c == null ? void 0 : c.isHook,
        operationName: o,
      }),
      S = `AxiosError<${d.definition.errors || 'unknown'}>`;
    c &&
      (S = c.hasErrorType
        ? `${c.default ? b(o) : ''}ErrorType<${
            d.definition.errors || 'unknown'
          }>`
        : d.definition.errors || 'unknown');
    let w =
        c != null && c.isHook
          ? `ReturnType<typeof use${b(o)}Hook>`
          : `typeof ${o}`,
      T = co({
        operationName: o,
        definitions: '',
        mutator: c,
        isRequestOptions: l,
        type: n,
      }),
      R = op({
        isRequestOptions: l,
        isExactOptionalPropertyTypes: f,
        mutator: c,
        hasSignal: h,
      }),
      P = sp({ isRequestOptions: l, mutator: c }),
      E = ip({
        hasQueryParam: !!t && u.some(({ type: C }) => C === 'queryParam'),
        hasSignal: h,
      });
    return `
export type ${b(e)}QueryResult = NonNullable<Awaited<ReturnType<${w}>>>
export type ${b(e)}QueryError = ${S}

export const ${j(
      `use-${e}`,
    )} = <TData = Awaited<ReturnType<${w}>>, TError = ${S}>(
 ${y} ${T}
  ): ${$} & { queryKey: QueryKey } => {

  ${P}

  const queryKey = queryOptions?.queryKey ?? ${s}(${i});

  ${c != null && c.isHook ? `const ${o} =  use${b(o)}Hook()` : ''}

  const queryFn: QueryFunction<Awaited<ReturnType<${
    c != null && c.isHook ? `ReturnType<typeof use${b(o)}Hook>` : `typeof ${o}`
  }>>> = (${E}) => ${o}(${x}${x ? ', ' : ''}${R});

  const query = ${j(`use-${n}`)}<Awaited<ReturnType<${
      c != null && c.isHook
        ? `ReturnType<typeof use${b(o)}Hook>`
        : `typeof ${o}`
    }>>, TError, TData>(queryKey, queryFn, ${rp({
      params: p,
      options: r,
      type: n,
    })}) as ${$} & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}
`;
  },
  pp = (
    {
      queryParams: e,
      operationName: t,
      body: r,
      props: n,
      verb: o,
      params: s,
      override: a,
      mutator: i,
      response: p,
      operationId: u,
    },
    { route: c, override: { operations: l = {} }, context: d },
    g,
  ) => {
    var R, P, E;
    let f = a == null ? void 0 : a.query,
      h = (a == null ? void 0 : a.requestOptions) !== !1,
      y = (R = l[u]) == null ? void 0 : R.query,
      x = !!(
        (E = (P = d.tsconfig) == null ? void 0 : P.compilerOptions) != null &&
        E.exactOptionalPropertyTypes
      );
    if (
      o === ee.GET ||
      (y == null ? void 0 : y.useInfinite) ||
      (y == null ? void 0 : y.useQuery)
    ) {
      let C = n
          .map(({ name: Y, type: oe }) =>
            oe === W.BODY ? r.implementation : Y,
          )
          .join(','),
        D = n
          .filter((Y) => Y.type !== W.HEADER)
          .map(({ name: Y, type: oe }) =>
            oe === W.BODY ? r.implementation : Y,
          )
          .join(','),
        L = [
          ...(f != null && f.useInfinite
            ? [
                {
                  name: j(`${t}-infinite`),
                  options: f == null ? void 0 : f.options,
                  type: Xt.INFINITE,
                  queryParam: f == null ? void 0 : f.useInfiniteQueryParam,
                },
              ]
            : []),
          ...((!(f != null && f.useQuery) && !(f != null && f.useInfinite)) ||
          (f == null ? void 0 : f.useQuery)
            ? [
                {
                  name: t,
                  options: f == null ? void 0 : f.options,
                  type: Xt.QUERY,
                },
              ]
            : []),
        ],
        pe = j(`get-${t}-queryKey`),
        Ee = F(
          n.filter((Y) => Y.type !== W.HEADER),
          'implementation',
        );
      return `export const ${pe} = (${Ee}) => [\`${c}\`${
        e ? ', ...(params ? [params]: [])' : ''
      }${r.implementation ? `, ${r.implementation}` : ''}];

    ${L.reduce(
      (Y, oe) =>
        Y +
        ap({
          queryOption: oe,
          operationName: t,
          queryKeyFnName: pe,
          queryProperties: C,
          queryKeyProperties: D,
          params: s,
          props: n,
          mutator: i,
          isRequestOptions: h,
          response: p,
          outputClient: g,
          isExactOptionalPropertyTypes: x,
          hasSignal: !!f.signal,
        }),
      '',
    )}
`;
    }
    let $ = n
        .map(({ definition: C, type: D }) =>
          D === W.BODY
            ? i != null && i.bodyTypeName
              ? `data: ${i.bodyTypeName}<${r.definition}>`
              : `data: ${r.definition}`
            : C,
        )
        .join(';'),
      S = n
        .map(({ name: C, type: D }) => (D === W.BODY ? 'data' : C))
        .join(','),
      w = `AxiosError<${p.definition.errors || 'unknown'}>`;
    i &&
      (w = i.hasErrorType
        ? `${i.default ? b(t) : ''}ErrorType<${
            p.definition.errors || 'unknown'
          }>`
        : p.definition.errors || 'unknown');
    let T =
      i != null && i.isHook
        ? `ReturnType<typeof use${b(t)}Hook>`
        : `typeof ${t}`;
    return `
    export type ${b(t)}MutationResult = NonNullable<Awaited<ReturnType<${T}>>>
    ${
      r.definition
        ? `export type ${b(t)}MutationBody = ${
            i != null && i.bodyTypeName
              ? `${i.bodyTypeName}<${r.definition}>`
              : r.definition
          }`
        : ''
    }
    export type ${b(t)}MutationError = ${w}

    export const ${j(`use-${t}`)} = <TError = ${w},
    ${$ ? '' : 'TVariables = void,'}
    TContext = unknown>(${co({
      operationName: t,
      definitions: $,
      mutator: i,
      isRequestOptions: h,
    })}) => {
      ${
        h
          ? `const {mutation: mutationOptions${
              i
                ? i != null && i.hasSecondArg
                  ? ', request: requestOptions'
                  : ''
                : ', axios: axiosOptions'
            }} = options ?? {}`
          : ''
      }

      ${i != null && i.isHook ? `const ${t} =  use${b(t)}Hook()` : ''}


      const mutationFn: MutationFunction<Awaited<ReturnType<${T}>>, ${
      $ ? `{${$}}` : 'TVariables'
    }> = (${S ? 'props' : ''}) => {
          ${S ? `const {${S}} = props ?? {}` : ''};

          return  ${t}(${S}${S ? ',' : ''}${
      h
        ? i
          ? i != null && i.hasSecondArg
            ? 'requestOptions'
            : ''
          : 'axiosOptions'
        : ''
    })
        }

      return useMutation<Awaited<ReturnType<typeof ${t}>>, TError, ${
      $ ? `{${$}}` : 'TVariables'
    }, TContext>(mutationFn, mutationOptions)
    }
    `;
  },
  Ot = () => '',
  bt = ({ isRequestOptions: e, isMutator: t, hasAwaitedType: r }) => `${
    r
      ? ''
      : `type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`
  }
${
  e && t
    ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

`
    : ''
}`,
  $t = () => '',
  xt = (e, t, r) => {
    let n = de(e),
      o = ep(e, t),
      s = pp(e, t, r);
    return {
      implementation: `${o}

${s}`,
      imports: n,
    };
  };
m();
var cp = [
    {
      exports: [
        { name: 'axios', default: !0, values: !0, syntheticDefaultImport: !0 },
        { name: 'AxiosRequestConfig' },
        { name: 'AxiosResponse' },
        { name: 'AxiosError' },
      ],
      dependency: 'axios',
    },
  ],
  mp = [
    {
      exports: [
        { name: 'useSwr', values: !0, default: !0 },
        { name: 'SWRConfiguration' },
        { name: 'Key' },
      ],
      dependency: 'swr',
    },
  ],
  mo = (e) => [...(e ? [] : cp), ...mp],
  lp = (
    {
      headers: e,
      queryParams: t,
      operationName: r,
      response: n,
      mutator: o,
      body: s,
      props: a,
      verb: i,
      formData: p,
      formUrlEncoded: u,
      override: c,
    },
    { route: l, context: d },
  ) => {
    var T, R;
    let g = (c == null ? void 0 : c.requestOptions) !== !1,
      f = (c == null ? void 0 : c.formData) !== !1,
      h = (c == null ? void 0 : c.formUrlEncoded) !== !1,
      y = !!(
        (R = (T = d.tsconfig) == null ? void 0 : T.compilerOptions) != null &&
        R.exactOptionalPropertyTypes
      ),
      x = se.includes(i),
      $ = Z(d.tsconfig),
      S = Oe({
        formData: p,
        formUrlEncoded: u,
        body: s,
        isFormData: f,
        isFormUrlEncoded: h,
      });
    if (o) {
      let P = ye({
          route: l,
          body: s,
          headers: e,
          queryParams: t,
          response: n,
          verb: i,
          isFormData: f,
          isFormUrlEncoded: h,
          hasSignal: !1,
          isBodyVerb: x,
          isExactOptionalPropertyTypes: y,
        }),
        E =
          (o == null ? void 0 : o.bodyTypeName) && s.definition
            ? F(a, 'implementation').replace(
                new RegExp(`(\\w*):\\s?${s.definition}`),
                `$1: ${o.bodyTypeName}<${s.definition}>`,
              )
            : F(a, 'implementation'),
        C = g ? he(c == null ? void 0 : c.requestOptions, o.hasSecondArg) : '';
      return `export const ${r} = (
    ${E}
 ${
   g && o.hasSecondArg ? `options?: SecondParameter<typeof ${o.name}>` : ''
 }) => {${S}
      return ${o.name}<${n.definition.success || 'unknown'}>(
      ${P},
      ${C});
    }
  `;
    }
    let w = ge({
      route: l,
      body: s,
      headers: e,
      queryParams: t,
      response: n,
      verb: i,
      requestOptions: c == null ? void 0 : c.requestOptions,
      isFormData: f,
      isFormUrlEncoded: h,
      isExactOptionalPropertyTypes: y,
      hasSignal: !1,
    });
    return `export const ${r} = (
    ${F(a, 'implementation')} ${
      g
        ? `options?: AxiosRequestConfig
`
        : ''
    } ): Promise<AxiosResponse<${n.definition.success || 'unknown'}>> => {${S}
    return axios${$ ? '' : '.default'}.${i}(${w});
  }
`;
  },
  up = ({ operationName: e, mutator: t, isRequestOptions: r }) => {
    let n = `SWRConfiguration<Awaited<ReturnType<typeof ${e}>>, TError> & { swrKey?: Key, enabled?: boolean }`;
    return r
      ? `options?: { swr?:${n}, ${
          t
            ? t != null && t.hasSecondArg
              ? `request?: SecondParameter<typeof ${t.name}>`
              : ''
            : 'axios?: AxiosRequestConfig'
        } }
`
      : `swrOptions?: ${n}`;
  },
  fp = ({
    operationName: e,
    swrKeyFnName: t,
    swrProperties: r,
    swrKeyProperties: n,
    params: o,
    mutator: s,
    isRequestOptions: a,
    response: i,
    swrOptions: p,
    props: u,
  }) => {
    var f;
    let c = F(u, 'implementation'),
      l = r,
      d = `const isEnabled = swrOptions?.enabled !== false${
        o.length ? ` && !!(${o.map(({ name: h }) => h).join(' && ')})` : ''
      }
    const swrKey = swrOptions?.swrKey ?? (() => isEnabled ? ${t}(${n}) : null);`,
      g = `AxiosError<${i.definition.errors || 'unknown'}>`;
    return (
      s &&
        (g = s.hasErrorType
          ? `ErrorType<${i.definition.errors || 'unknown'}>`
          : i.definition.errors || 'unknown'),
      `
export type ${b(e)}QueryResult = NonNullable<Awaited<ReturnType<typeof ${e}>>>
export type ${b(e)}QueryError = ${g}

export const ${j(`use-${e}`)} = <TError = ${g}>(
 ${c} ${up({ operationName: e, mutator: s, isRequestOptions: a })}
  ) => {

  ${
    a
      ? `const {swr: swrOptions${
          s
            ? s != null && s.hasSecondArg
              ? ', request: requestOptions'
              : ''
            : ', axios: axiosOptions'
        }} = options ?? {}`
      : ''
  }

  ${d}
  const swrFn = () => ${e}(${l}${l ? ', ' : ''}${
        a
          ? s
            ? s != null && s.hasSecondArg
              ? 'requestOptions'
              : ''
            : 'axiosOptions'
          : ''
      });

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(swrKey, swrFn, ${
    p.options
      ? `{
    ${(f = K(p.options)) == null ? void 0 : f.slice(1, -1)}
    ...swrOptions
  }`
      : 'swrOptions'
  })

  return {
    swrKey,
    ...query
  }
}
`
    );
  },
  dp = (
    {
      queryParams: e,
      operationName: t,
      body: r,
      props: n,
      verb: o,
      params: s,
      override: a,
      mutator: i,
      response: p,
    },
    { route: u },
  ) => {
    let c = (a == null ? void 0 : a.requestOptions) !== !1;
    if (o !== ee.GET) return '';
    let l = n
        .map(({ name: h, type: y }) => (y === W.BODY ? r.implementation : h))
        .join(','),
      d = n
        .filter((h) => h.type !== W.HEADER)
        .map(({ name: h, type: y }) => (y === W.BODY ? r.implementation : h))
        .join(','),
      g = j(`get-${t}-key`),
      f = F(
        n.filter((h) => h.type !== W.HEADER),
        'implementation',
      );
    return `export const ${g} = (${f}) => [\`${u}\`${
      e ? ', ...(params ? [params]: [])' : ''
    }${r.implementation ? `, ${r.implementation}` : ''}];

    ${fp({
      operationName: t,
      swrKeyFnName: g,
      swrProperties: l,
      swrKeyProperties: d,
      params: s,
      props: n,
      mutator: i,
      isRequestOptions: c,
      response: p,
      swrOptions: a.swr,
    })}
`;
  },
  lo = () => '',
  uo = ({ isRequestOptions: e, isMutator: t, hasAwaitedType: r }) => `
  ${
    r
      ? ''
      : `type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

`
  }
  ${
    e && t
      ? `// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

`
      : ''
  }`,
  fo = () => '',
  go = (e, t) => {
    let r = de(e),
      n = lp(e, t),
      o = dp(e, t);
    return {
      implementation: `${n}

${o}`,
      imports: r,
    };
  };
var Le = Q.AXIOS,
  yo = {
    axios: { client: Jt, header: Lt, dependencies: _t, footer: Yt, title: Kt },
    'axios-functions': {
      client: Kn,
      header: (e) => Lt({ ...e, noFunction: !0 }),
      dependencies: _t,
      footer: (e) => Yt({ ...e, noFunction: !0 }),
      title: Kt,
    },
    angular: {
      client: _n,
      header: Qn,
      dependencies: Wn,
      footer: zn,
      title: Hn,
    },
    'react-query': {
      client: xt,
      header: bt,
      dependencies: ao,
      footer: $t,
      title: Ot,
    },
    'svelte-query': {
      client: xt,
      header: bt,
      dependencies: io,
      footer: $t,
      title: Ot,
    },
    'vue-query': {
      client: xt,
      header: bt,
      dependencies: po,
      footer: $t,
      title: Ot,
    },
    swr: { client: go, header: uo, dependencies: mo, footer: fo, title: lo },
  },
  Ye = (e) => {
    let t = B(e) ? e(yo) : yo[e];
    if (!t) throw `Oups... \u{1F37B}. Client not found: ${e}`;
    return t;
  },
  xe = (e = Le, t, r, n, o, s, a) => {
    let { dependencies: i } = Ye(e);
    return lt(t, [...i(a), ...r], n, o, s);
  },
  St = ({
    outputClient: e = Le,
    isRequestOptions: t,
    isGlobalMutator: r,
    isMutator: n,
    provideIn: o,
    hasAwaitedType: s,
    titles: a,
  }) => {
    let { header: i } = Ye(e);
    return {
      implementation: i({
        title: a.implementation,
        isRequestOptions: t,
        isGlobalMutator: r,
        isMutator: n,
        provideIn: o,
        hasAwaitedType: s,
      }),
      implementationMSW: `export const ${a.implementationMSW} = () => [
`,
    };
  },
  wt = ({
    outputClient: e = Le,
    operationNames: t,
    hasMutator: r,
    hasAwaitedType: n,
    titles: o,
  }) => {
    let { footer: s } = Ye(e),
      a;
    try {
      B(e)
        ? ((a = s(t)),
          console.warn(
            '[WARN] Passing an array of strings for operations names to the footer function is deprecated and will be removed in a future major release. Please pass them in an object instead: { operationNames: string[] }.',
          ))
        : (a = s({
            operationNames: t,
            title: o.implementation,
            hasMutator: r,
            hasAwaitedType: n,
          }));
    } catch (e6) {
      a = s({
        operationNames: t,
        title: o.implementation,
        hasMutator: r,
        hasAwaitedType: n,
      });
    }
    return {
      implementation: a,
      implementationMSW: `]
`,
    };
  },
  Tt = ({ outputClient: e = Le, title: t, customTitleFunc: r }) => {
    let { title: n } = Ye(e);
    if (r) {
      let o = r(t);
      return { implementation: n(o), implementationMSW: `get${b(o)}MSW` };
    }
    return { implementation: n(t), implementationMSW: `get${b(t)}MSW` };
  },
  gp = async (e, t) =>
    t.mock
      ? B(t.mock)
        ? t.mock(e, t)
        : so(e, t)
      : { implementation: { function: '', handler: '' }, imports: [] },
  ho = (e = Le, t, r) =>
    M(
      t,
      async (n, o) => {
        let { client: s } = Ye(e),
          a = s(o, r, e),
          i = await gp(o, r);
        return (
          (n[o.operationId] = {
            implementation: o.doc + a.implementation,
            imports: a.imports,
            implementationMSW: i.implementation,
            importsMSW: i.imports,
            tags: o.tags,
            mutator: o.mutator,
            formData: o.formData,
            formUrlEncoded: o.formUrlEncoded,
            operationName: o.operationName,
            types: a.types,
          }),
          n
        );
      },
      {},
    );
m();
m();
var yp = '\\*/',
  er = '*\\/',
  tr = new RegExp(yp, 'g');
function _({ description: e, deprecated: t, summary: r }, n = !1) {
  var u;
  let o = (
      Array.isArray(e)
        ? e.filter((c) => !c.includes('eslint-disable'))
        : [e || '']
    ).map((c) => c.replace(tr, er)),
    s = [e, t, r].reduce((c, l) => (l ? c + 1 : c), 0);
  if (!s) return '';
  let a = s === 1 && n,
    i = Array.isArray(e)
      ? (u = e.find((c) => c.includes('eslint-disable'))) == null
        ? void 0
        : u.replace(tr, er)
      : void 0,
    p = `${
      i
        ? `/* ${i} */
`
        : ''
    }/**`;
  return (
    e &&
      (a ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ` ${o.join(`
 * `)}`)),
    t &&
      (a ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ' @deprecated')),
    r &&
      (a ||
        (p += `
${n ? '  ' : ''} *`),
      (p += ` @summary ${r.replace(tr, er)}`)),
    (p += a
      ? ' '
      : `
 ${n ? '  ' : ''}`),
    (p += `*/
`),
    p
  );
}
m();
m();
var _lodashuniqby = require('lodash.uniqby');
var _lodashuniqby2 = _interopRequireDefault(_lodashuniqby);
m();
var Je = async (e, t, r, n) => {
  let { schema: o, imports: s } = await U(t, r),
    a = I(t) ? s[0].name : e,
    i = n ? 'formUrlEncoded' : 'formData',
    p = n
      ? `const ${i} = new URLSearchParams();
`
      : `const ${i} = new FormData();
`;
  if (o.type === 'object' && o.properties) {
    let u = await M(
      Object.entries(o.properties),
      async (c, [l, d]) => {
        var h;
        let { schema: g } = await U(d, r),
          f = '';
        return (
          g.type === 'object'
            ? (f = `${i}.append('${l}', JSON.stringify(${j(a)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              }));
`)
            : g.type === 'array'
            ? (f = `${j(a)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              }.forEach(value => ${i}.append('${l}', value));
`)
            : g.type === 'number' ||
              g.type === 'integer' ||
              g.type === 'boolean'
            ? (f = `${i}.append('${l}', ${j(a)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              }.toString())
`)
            : (f = `${i}.append('${l}', ${j(a)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              })
`),
          (h = o.required) != null && h.includes(l)
            ? c + f
            : c +
              `if(${j(a)}${
                l.includes('-') ? `['${l}']` : `.${l}`
              } !== undefined) {
 ${f} }
`
        );
      },
      '',
    );
    return `${p}${u}`;
  }
  return o.type === 'array'
    ? `${p}${j(a)}.forEach(value => ${i}.append('data', value))
`
    : o.type === 'number' || o.type === 'boolean'
    ? `${p}${i}.append('data', ${j(a)}.toString())
`
    : `${p}${i}.append('data', ${j(a)})
`;
};
m();
m();
var De = (e, t, r) => {
    let n = `export type ${r} = typeof ${r}[keyof typeof ${r}];
`,
      o = jt(e, t);
    return (
      (n += `

`),
      (n += `// eslint-disable-next-line @typescript-eslint/no-redeclare
`),
      (n += `export const ${r} = {
${o}} as const;
`),
      n
    );
  },
  jt = (e, t) =>
    [...new Set(e.split(' | '))].reduce((r, n) => {
      if (n === 'null') return r;
      let o = t === 'number',
        a =
          !Number.isNaN(Number(n.slice(1, -1))) || o
            ? Op(o ? n.toString() : n.slice(1, -1))
            : V(n, { underscore: '_', whitespace: '_', dash: '-' });
      return (
        r +
        `  ${_esutils.keyword.isIdentifierNameES5(a) ? a : `'${a}'`}: ${n},
`
      );
    }, ''),
  Op = (e) =>
    e[0] === '-'
      ? `NUMBER_MINUS_${e.slice(1)}`
      : e[0] === '+'
      ? `NUMBER_PLUS_${e.slice(1)}`
      : `NUMBER_${e}`;
m();
m();
m();
var Oo = async ({ schema: e, name: t, context: r }) => {
  if (e.items) {
    let n = await ae({ schema: e.items, propName: t + 'Item', context: r });
    return {
      value: `${n.value}[]`,
      imports: n.imports,
      schemas: n.schemas,
      isEnum: !1,
      type: 'array',
      isRef: !1,
    };
  } else throw new Error('All arrays must have an `items` key define');
};
m();
m();
var $p = ({ resolvedData: e, resolvedValue: t, separator: r }) =>
    e.isEnum.every((o) => o)
      ? `${e.values.join(' | ')}${t ? ` | ${t.value}` : ''}`
      : r === 'allOf'
      ? `${e.values.join(' & ')}${t ? ` & ${t.value}` : ''}`
      : t
      ? `(${e.values.join(` & ${t.value}) | (`)} & ${t.value})`
      : e.values.join(' | '),
  bo = async ({
    name: e,
    schema: t,
    separator: r,
    context: n,
    nullable: o,
  }) => {
    var c;
    let s = (c = t[r]) != null ? c : [],
      a = await M(
        s,
        async (l, d) => {
          let g = e ? e + b(r) : void 0;
          g && l.schemas.length && (g = g + b(ct(l.schemas.length + 1)));
          let f = await ae({
            schema: d,
            propName: g,
            combined: !0,
            context: n,
          });
          return (
            l.values.push(f.value),
            l.imports.push(...f.imports),
            l.schemas.push(...f.schemas),
            l.isEnum.push(f.isEnum),
            l.types.push(f.type),
            l.isRef.push(f.isRef),
            l
          );
        },
        {
          values: [],
          imports: [],
          schemas: [],
          isEnum: [],
          isRef: [],
          types: [],
        },
      ),
      i = a.isEnum.every((l) => l),
      p;
    t.properties &&
      (p = await re({
        schema: _lodashomit2.default.call(void 0, t, r),
        context: n,
      }));
    let u = $p({ resolvedData: a, separator: r, resolvedValue: p });
    if (i && e && s.length > 1) {
      let l = `

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ${b(e)} = ${xp(a, e)}`;
      return {
        value: `typeof ${b(e)}[keyof typeof ${b(e)}] ${o};` + l,
        imports: a.imports.map((d) => ({ ...d, values: !0 })),
        schemas: a.schemas,
        isEnum: !1,
        type: 'object',
        isRef: !1,
      };
    }
    return {
      value: u + o,
      imports: a.imports,
      schemas: a.schemas,
      isEnum: !1,
      type: 'object',
      isRef: !1,
    };
  },
  xp = ({ values: e, isRef: t, types: r }, n) =>
    e.length === 1
      ? t[0]
        ? e[0]
        : `{${jt(e[0], r[0])}} as const`
      : `{${e
          .map((s, a) => (t[a] ? `...${s},` : jt(s, r[a])))
          .join('')}} as const`;
var $o = async ({ item: e, name: t, context: r, nullable: n }) => {
  var o, s;
  if (I(e)) {
    let { name: a, specKey: i } = await Ae(e.$ref, r);
    return {
      value: a + n,
      imports: [{ name: a, specKey: i }],
      schemas: [],
      isEnum: !1,
      type: 'object',
      isRef: !0,
    };
  }
  if (e.allOf || e.oneOf || e.anyOf) {
    let a = e.allOf ? 'allOf' : e.oneOf ? 'oneOf' : 'anyOf';
    return bo({ schema: e, name: t, separator: a, context: r, nullable: n });
  }
  if (e.properties && Object.entries(e.properties).length > 0)
    return M(
      Object.entries(e.properties),
      async (a, [i, p], u, c) => {
        var x, $, S;
        let l = (Array.isArray(e.required) ? e.required : []).includes(i),
          d = t ? b(t) + b(i) : void 0;
        !!(
          (S =
            ($ = (x = r.specs[r.target]) == null ? void 0 : x.components) ==
            null
              ? void 0
              : $.schemas) != null && S[d || '']
        ) && (d = d + 'Property');
        let f = await ae({ schema: p, propName: d, context: r }),
          h = e.readOnly || p.readOnly;
        u || (a.value += '{');
        let y = _(p, !0);
        if (
          (a.imports.push(...f.imports),
          (a.value += `
  ${y ? `${y}  ` : ''}${h ? 'readonly ' : ''}${Ge(i)}${l ? '' : '?'}: ${
            f.value
          };`),
          a.schemas.push(...f.schemas),
          c.length - 1 === u)
        ) {
          if (e.additionalProperties)
            if (J(e.additionalProperties))
              a.value += `
  [key: string]: any;
 }`;
            else {
              let w = await re({
                schema: e.additionalProperties,
                name: t,
                context: r,
              });
              a.value += `
  [key: string]: ${w.value};
}`;
            }
          else
            a.value += `
}`;
          a.value += n;
        }
        return a;
      },
      {
        imports: [],
        schemas: [],
        value: '',
        isEnum: !1,
        type: 'object',
        isRef: !1,
        schema: {},
      },
    );
  if (e.additionalProperties) {
    if (J(e.additionalProperties))
      return {
        value: '{ [key: string]: any }' + n,
        imports: [],
        schemas: [],
        isEnum: !1,
        type: 'object',
        isRef: !1,
      };
    let a = await re({ schema: e.additionalProperties, name: t, context: r });
    return {
      value: `{[key: string]: ${a.value}}` + n,
      imports: (o = a.imports) != null ? o : [],
      schemas: (s = a.schemas) != null ? s : [],
      isEnum: !1,
      type: 'object',
      isRef: !1,
    };
  }
  return {
    value: e.type === 'object' ? '{ [key: string]: any }' : 'unknown' + n,
    imports: [],
    schemas: [],
    isEnum: !1,
    type: 'object',
    isRef: !1,
  };
};
var Rt = async ({ item: e, name: t, context: r }) => {
  let n = e.nullable ? ' | null' : '';
  switch ((!e.type && e.items && (e.type = 'array'), e.type)) {
    case 'number':
    case 'integer': {
      let o = 'number',
        s = !1;
      return (
        e.enum && ((o = e.enum.join(' | ')), (s = !0)),
        {
          value: o + n,
          isEnum: s,
          type: 'number',
          schemas: [],
          imports: [],
          isRef: !1,
        }
      );
    }
    case 'boolean':
      return {
        value: 'boolean' + n,
        type: 'boolean',
        isEnum: !1,
        schemas: [],
        imports: [],
        isRef: !1,
      };
    case 'array': {
      let { value: o, ...s } = await Oo({ schema: e, name: t, context: r });
      return { value: o + n, ...s };
    }
    case 'string': {
      let o = 'string',
        s = !1;
      return (
        e.enum &&
          ((o = `'${e.enum
            .map((a) => (G(a) ? mt(a) : a))
            .filter(Boolean)
            .join("' | '")}'`),
          (s = !0)),
        e.format === 'binary' && (o = 'Blob'),
        r.override.useDates &&
          (e.format === 'date' || e.format === 'date-time') &&
          (o = 'Date'),
        {
          value: o + n,
          isEnum: s,
          type: 'string',
          imports: [],
          schemas: [],
          isRef: !1,
        }
      );
    }
    case 'object':
    default: {
      let { value: o, ...s } = await $o({
        item: e,
        name: t,
        context: r,
        nullable: n,
      });
      return { value: o, ...s };
    }
  }
};
var re = async ({ schema: e, name: t, context: r }) => {
  if (I(e)) {
    let { schema: o, imports: s } = await U(e, r),
      { name: a, specKey: i, schemaName: p } = s[0],
      u = i || (r.specKey !== r.target ? r.specKey : void 0);
    return {
      value: a,
      imports: [{ name: a, specKey: u, schemaName: p }],
      type: (o == null ? void 0 : o.type) || 'object',
      schemas: [],
      isEnum: !!(o != null && o.enum),
      originalSchema: o,
      isRef: !0,
    };
  }
  return {
    ...(await Rt({ item: e, name: t, context: r })),
    originalSchema: e,
    isRef: !1,
  };
};
var ae = async ({ schema: e, propName: t, combined: r = !1, context: n }) => {
  var a;
  let o = await re({ schema: e, name: t, context: n }),
    s = _((a = o.originalSchema) != null ? a : {});
  if (
    t &&
    !o.isEnum &&
    (o == null ? void 0 : o.type) === 'object' &&
    new RegExp(/{|&|\|/).test(o.value)
  )
    return {
      value: t,
      imports: [{ name: t }],
      schemas: [
        ...o.schemas,
        {
          name: t,
          model: `${s}export type ${t} = ${o.value};
`,
          imports: o.imports,
        },
      ],
      isEnum: !1,
      type: 'object',
      originalSchema: o.originalSchema,
      isRef: o.isRef,
    };
  if (t && o.isEnum && !r && !o.isRef) {
    let i = De(o.value, o.type, t);
    return {
      value: t,
      imports: [{ name: t }],
      schemas: [...o.schemas, { name: t, model: s + i, imports: o.imports }],
      isEnum: !1,
      type: 'enum',
      originalSchema: o.originalSchema,
      isRef: o.isRef,
    };
  }
  return o;
};
var _redoc = require('redoc');
var xo = ['multipart/form-data'],
  So = ['application/x-www-form-urlencoded'],
  Tp = async ({ mediaType: e, propName: t, context: r }) => {
    if (!e.schema) return;
    let n = e.schema;
    if (n != null && n.properties) {
      let s = new (0, _redoc.OpenAPIParser)(r.specs[r.specKey]);
      Object.keys(n == null ? void 0 : n.properties).map((a) => {
        var i, p;
        if ((i = n == null ? void 0 : n.properties) != null && i[a]) {
          let u = s.mergeAllOf(
            (p = n == null ? void 0 : n.properties) == null ? void 0 : p[a],
          );
          u && (n.properties[a] = u);
        }
      });
    }
    return await ae({ schema: n, propName: t, context: r });
  },
  qe = async (e, t, r, n = 'unknown') => {
    let o = await Promise.all(
      e
        .filter(([s, a]) => Boolean(a))
        .map(async ([s, a]) => {
          var i, p;
          if (I(a)) {
            let {
                schema: u,
                imports: [{ name: c, specKey: l, schemaName: d }],
              } = await U(a, r),
              [g, f] =
                (p = Object.entries((i = u.content) != null ? i : {})[0]) !=
                null
                  ? p
                  : [],
              h = xo.includes(g),
              y = So.includes(g);
            if ((!h && !y) || !(f != null && f.schema))
              return [
                {
                  value: c,
                  imports: [{ name: c, specKey: l, schemaName: d }],
                  schemas: [],
                  type: 'unknown',
                  isEnum: !1,
                  isRef: !0,
                  originalSchema: f == null ? void 0 : f.schema,
                  key: s,
                  contentType: g,
                },
              ];
            let x = h
                ? await Je(c, f == null ? void 0 : f.schema, {
                    ...r,
                    specKey: l || r.specKey,
                  })
                : void 0,
              $ = y
                ? await Je(
                    c,
                    f == null ? void 0 : f.schema,
                    { ...r, specKey: l || r.specKey },
                    !0,
                  )
                : void 0;
            return [
              {
                value: c,
                imports: [{ name: c, specKey: l, schemaName: d }],
                schemas: [],
                type: 'unknown',
                isEnum: !1,
                formData: x,
                formUrlEncoded: $,
                isRef: !0,
                originalSchema: f == null ? void 0 : f.schema,
                key: s,
                contentType: g,
              },
            ];
          }
          return a.content
            ? (
                await Promise.all(
                  Object.entries(a.content).map(async ([c, l], d, g) => {
                    let f = s ? b(t) + b(s) : void 0;
                    f && g.length > 1 && (f = f + b(ct(d + 1)));
                    let h = await Tp({ mediaType: l, propName: f, context: r });
                    if (!h) return;
                    let y = xo.includes(c),
                      x = So.includes(c);
                    if ((!y && !x) || !f) return { ...h, contentType: c };
                    let $ = y ? await Je(f, l.schema, r) : void 0,
                      S = x ? await Je(f, l.schema, r, !0) : void 0;
                    return {
                      ...h,
                      formData: $,
                      formUrlEncoded: S,
                      contentType: c,
                    };
                  }),
                )
              )
                .filter((c) => c)
                .map((c) => ({ ...c, key: s }))
            : [
                {
                  value: n,
                  imports: [],
                  schemas: [],
                  type: n,
                  isEnum: !1,
                  key: s,
                  isRef: !1,
                  contentType: 'application/json',
                },
              ];
        }),
    );
    return _lodashuniqby2.default.call(
      void 0,
      o.flatMap((s) => s),
      'value',
    );
  };
var wo = async ({
  requestBody: e,
  operationName: t,
  context: r,
  contentType: n,
}) => {
  let o = await qe([[r.override.components.requestBodies.suffix, e]], t, r),
    s = n
      ? o.filter((c) => {
          let l = !0,
            d = !1;
          return (
            n.include && (l = n.include.includes(c.contentType)),
            n.exclude && (d = n.exclude.includes(c.contentType)),
            l && !d
          );
        })
      : o,
    a = s.flatMap(({ imports: c }) => c),
    i = s.flatMap(({ schemas: c }) => c),
    p = s.map(({ value: c }) => c).join(' | '),
    u =
      Ce.includes(p.toLowerCase()) || s.length > 1
        ? j(t) + r.override.components.requestBodies.suffix
        : j(p);
  return {
    definition: p,
    implementation: u,
    imports: a,
    schemas: i,
    ...(s.length === 1
      ? {
          formData: s[0].formData,
          formUrlEncoded: s[0].formUrlEncoded,
          contentType: s[0].contentType,
        }
      : { formData: '', formUrlEncoded: '', contentType: '' }),
  };
};
m();
var To = (e, t, r) =>
  e.operationId
    ? e.operationId
    : b(
        [
          r,
          ...t
            .split('/')
            .map((n) =>
              V(n, { dash: !0, underscore: '-', dot: '-', whitespace: '-' }),
            ),
        ].join('-'),
      );
m();
var jo = async ({ parameters: e = [], context: t }) =>
  M(
    e,
    async (r, n) => {
      if (I(n)) {
        let { schema: o, imports: s } = await U(n, t);
        (o.in === 'path' || o.in === 'query' || o.in === 'header') &&
          r[o.in].push({ parameter: o, imports: s });
      } else
        (n.in === 'query' || n.in === 'path' || n.in === 'header') &&
          r[n.in].push({ parameter: n, imports: [] });
      return r;
    },
    { path: [], query: [], header: [] },
  );
m();
var jp = (e) => {
    let t,
      r = [],
      n = /\{(.*?)\}/g;
    for (; (t = n.exec(e)) !== null; ) r.push(t[1]);
    return r;
  },
  Ro = ({ route: e, pathParams: t = [], operationId: r, context: n }) => {
    let o = jp(e);
    return Promise.all(
      o.map(async (s) => {
        let a = t.find(
          ({ parameter: f }) =>
            V(j(f.name), { es5keyword: !0, underscore: !0, dash: !0 }) === s,
        );
        if (!a)
          throw new Error(
            `The path params ${s} can't be found in parameters (${r})`,
          );
        let { name: i, required: p = !1, schema: u } = a.parameter,
          c = V(j(i), { es5keyword: !0 });
        if (!u)
          return {
            name: c,
            definition: `${c}${p ? '' : '?'}: unknown`,
            implementation: `${c}${p ? '' : '?'}: unknown`,
            default: !1,
            required: p,
            imports: [],
          };
        let l = await re({
            schema: u,
            context: {
              ...n,
              ...(a.imports.length ? { specKey: a.imports[0].specKey } : {}),
            },
          }),
          d = `${c}${!p || l.originalSchema.default ? '?' : ''}: ${l.value}`,
          g = `${c}${!p && !l.originalSchema.default ? '?' : ''}${
            l.originalSchema.default
              ? `= ${K(l.originalSchema.default)}`
              : `: ${l.value}`
          }`;
        return {
          name: c,
          definition: d,
          implementation: g,
          default: l.originalSchema.default,
          required: p,
          imports: l.imports,
        };
      }),
    );
  };
m();
m();
var Po = (e) =>
  e.sort((t, r) =>
    t.default
      ? 1
      : r.default
      ? -1
      : t.required && r.required
      ? 0
      : t.required
      ? -1
      : r.required
      ? 1
      : 0,
  );
var vo = ({ body: e, queryParams: t, params: r, headers: n }) => {
  let o = {
      name: e.implementation,
      definition: `${e.implementation}: ${e.definition}`,
      implementation: `${e.implementation}: ${e.definition}`,
      default: !1,
      required: !0,
      type: W.BODY,
    },
    s = {
      name: 'params',
      definition: `params${t != null && t.isOptional ? '?' : ''}: ${
        t == null ? void 0 : t.schema.name
      }`,
      implementation: `params${t != null && t.isOptional ? '?' : ''}: ${
        t == null ? void 0 : t.schema.name
      }`,
      default: !1,
      required: we(t == null ? void 0 : t.isOptional)
        ? !1
        : !(t != null && t.isOptional),
      type: W.QUERY_PARAM,
    },
    a = {
      name: 'headers',
      definition: `headers${n != null && n.isOptional ? '?' : ''}: ${
        n == null ? void 0 : n.schema.name
      }`,
      implementation: `headers${n != null && n.isOptional ? '?' : ''}: ${
        n == null ? void 0 : n.schema.name
      }`,
      default: !1,
      required: we(n == null ? void 0 : n.isOptional)
        ? !1
        : !(n != null && n.isOptional),
      type: W.HEADER,
    },
    i = [
      ...r.map((u) => ({ ...u, type: W.PARAM })),
      ...(e.definition ? [o] : []),
      ...(t ? [s] : []),
      ...(n ? [a] : []),
    ];
  return Po(i);
};
m();
var Rp = (e, t, r) =>
    Promise.all(
      e.map(async ({ parameter: n, imports: o }) => {
        let { name: s, required: a, schema: i, content: p } = n,
          {
            value: u,
            imports: c,
            isEnum: l,
            type: d,
            schemas: g,
            isRef: f,
          } = await re({
            schema: i || p['application/json'].schema,
            context: r,
            name: b(t) + b(s),
          }),
          h = Ge(s);
        if (o.length)
          return {
            definition: `${h}${!a || i.default ? '?' : ''}: ${o[0].name}`,
            imports: o,
            schemas: [],
          };
        if (l && !f) {
          let x = b(t) + b(s),
            $ = De(u, d, x);
          return {
            definition: `${h}${!a || i.default ? '?' : ''}: ${x}`,
            imports: [{ name: x }],
            schemas: [...g, { name: x, model: $, imports: c }],
          };
        }
        return {
          definition: `${h}${!a || i.default ? '?' : ''}: ${u}`,
          imports: c,
          schemas: g,
        };
      }),
    ),
  rr = async ({
    queryParams: e = [],
    operationName: t,
    context: r,
    suffix: n = 'params',
  }) => {
    if (!e.length) return;
    let o = await Rp(e, t, r),
      s = o.flatMap(({ imports: l }) => l),
      a = o.flatMap(({ schemas: l }) => l),
      i = `${b(t)}${b(n)}`,
      p = o.map(({ definition: l }) => l).join('; '),
      u = e.every(({ parameter: l }) => !l.required);
    return {
      schema: {
        name: i,
        model: `export type ${i} = { ${p} };
`,
        imports: s,
      },
      deps: a,
      isOptional: u,
    };
  };
m();
var Eo = async ({
  responses: e,
  operationName: t,
  context: r,
  contentType: n,
}) => {
  if (!e)
    return {
      imports: [],
      definition: { success: '', errors: '' },
      isBlob: !1,
      types: { success: [], errors: [] },
      schemas: [],
      contentTypes: [],
    };
  let o = await qe(Object.entries(e), t, r, 'void'),
    s = n
      ? o.filter((d) => {
          let g = !0,
            f = !1;
          return (
            n.include && (g = n.include.includes(d.contentType)),
            n.exclude && (f = n.exclude.includes(d.contentType)),
            g && !f
          );
        })
      : o,
    a = s.reduce(
      (d, g) => (
        g.key.startsWith('2') ? d.success.push(g) : d.errors.push(g), d
      ),
      { success: [], errors: [] },
    ),
    i = s.flatMap(({ imports: d }) => d),
    p = s.flatMap(({ schemas: d }) => d),
    u = [...new Set(s.map(({ contentType: d }) => d))],
    c = a.success
      .map(({ value: d, formData: g }) => (g ? 'Blob' : d))
      .join(' | '),
    l = a.errors.map(({ value: d }) => d).join(' | ');
  return {
    imports: i,
    definition: { success: c || 'unknown', errors: l || 'unknown' },
    isBlob: c === 'Blob',
    types: a,
    contentTypes: u,
    schemas: p,
  };
};
m();
var _acorn = require('acorn');
m();
m();
var nr = (e) =>
  e.toLowerCase().includes('.yaml') || e.toLowerCase().includes('.yml')
    ? 'yaml'
    : 'json';
var ne = (e, t) => {
    let r = _upath.relative.call(void 0, e, t);
    return _upath.normalizeSafe.call(void 0, `.${_upath.sep}${r}`);
  },
  Pt = (e, t) => {
    if (be(e)) {
      let r = new URL(t);
      return e
        .replace(r.origin, '')
        .replace(A(r.pathname).dirname, '')
        .replace(`.${nr(e)}`, '');
    }
    return (
      '/' +
      _upath.normalize
        .call(void 0, _upath.relative.call(void 0, A(t).dirname, e))
        .split('../')
        .join('')
        .replace(`.${nr(e)}`, '')
    );
  };
var vt = 'BodyType',
  Ao = (e, t) => {
    let r = A(e),
      n = A(t.path),
      { pathWithoutExtension: o } = A(ne(r.dirname, n.path));
    return o;
  },
  Ct = async ({
    output: e,
    mutator: t,
    name: r,
    workspace: n,
    tsconfig: o,
  }) => {
    var h;
    if (!t || !e) return;
    let s = t.default,
      a = t.name ? t.name : `${r}Mutator`,
      i = t.path,
      p = await _fsextra.readFile.call(void 0, i, 'utf8'),
      u =
        p.includes('export type ErrorType') ||
        p.includes('export interface ErrorType'),
      c =
        p.includes(`export type ${vt}`) || p.includes(`export interface ${vt}`),
      l = t.default ? `${b(r)}ErrorType` : 'ErrorType',
      d = t.default ? `${b(r)}${vt}` : vt,
      { file: g, cached: f } = await ut(i, {
        isDefault: !1,
        root: n,
        alias: t.alias,
        tsconfig: o,
        load: !1,
      });
    if (g) {
      let y = s ? 'default' : t.name,
        x = Ap(g, y);
      x ||
        (X().error(
          _chalk2.default.red(
            `Your mutator file doesn't have the ${y} exported function`,
          ),
        ),
        process.exit(1));
      let $ = Ao(e, t);
      return {
        name: a,
        path: $,
        default: s,
        hasErrorType: u,
        errorTypeName: l,
        hasSecondArg: x.numberOfParams > 1,
        hasThirdArg: x.numberOfParams > 2,
        isHook:
          !!(
            (h = t == null ? void 0 : t.name) != null && h.startsWith('use')
          ) && !x.numberOfParams,
        ...(c ? { bodyTypeName: d } : {}),
      };
    } else {
      let y = Ao(e, t);
      return (
        f ||
          X().warn(
            _chalk2.default.yellow('Failed to parse provided mutator function'),
          ),
        {
          name: a,
          path: y,
          default: s,
          hasSecondArg: !1,
          hasThirdArg: !1,
          isHook: !1,
          hasErrorType: u,
          errorTypeName: l,
          ...(c ? { bodyTypeName: d } : {}),
        }
      );
    }
  },
  Ap = (e, t) => {
    var r, n;
    try {
      let o = _acorn.Parser.parse(e, { ecmaVersion: 6 }),
        s =
          (r = o == null ? void 0 : o.body) == null
            ? void 0
            : r.find((i) => {
                var p, u, c, l, d, g, f;
                if (i.type === 'ExpressionStatement')
                  return ((c =
                    (u =
                      (p = i.expression.arguments) == null ? void 0 : p[1]) ==
                    null
                      ? void 0
                      : u.properties) != null &&
                    c.some((h) => {
                      var y;
                      return ((y = h.key) == null ? void 0 : y.name) === t;
                    })) ||
                    ((d =
                      (l = i.expression.left) == null ? void 0 : l.property) ==
                    null
                      ? void 0
                      : d.name) === t
                    ? !0
                    : (f =
                        (g = i.expression.right) == null
                          ? void 0
                          : g.properties) == null
                    ? void 0
                    : f.some((h) => h.key.name === t);
              });
      if (!s) return;
      if (s.expression.type === 'AssignmentExpression') {
        if (
          s.expression.right.type === 'FunctionExpression' ||
          s.expression.right.type === 'ArrowFunctionExpression'
        )
          return { numberOfParams: s.expression.right.params.length };
        if (s.expression.right.name) return Et(o, s.expression.right.name);
        let i =
          (n = s.expression.right) == null
            ? void 0
            : n.properties.find((p) => p.key.name === t);
        return i.value.name
          ? Et(o, i.value.name)
          : i.value.type === 'FunctionExpression' ||
            i.value.type === 'ArrowFunctionExpression'
          ? { numberOfParams: i.value.params.length }
          : void 0;
      }
      let a = s.expression.arguments[1].properties.find((i) => {
        var p;
        return ((p = i.key) == null ? void 0 : p.name) === t;
      });
      return Et(o, a.value.body.name);
    } catch (e7) {
      return;
    }
  },
  Et = (e, t) => {
    var o;
    let r =
      (o = e == null ? void 0 : e.body) == null
        ? void 0
        : o.find((s) => {
            if (s.type === 'VariableDeclaration')
              return s.declarations.find((a) => a.id.name === t);
            if (s.type === 'FunctionDeclaration' && s.id.name === t) return s;
          });
    if (!r) return;
    if (r.type === 'FunctionDeclaration')
      return { numberOfParams: r.params.length };
    let n = r.declarations.find((s) => s.id.name === t);
    return n.init.name
      ? Et(e, n.init.name)
      : { numberOfParams: n.init.params.length };
  };
var kp = async ({
    verb: e,
    output: t,
    operation: r,
    route: n,
    verbParameters: o = [],
    context: s,
  }) => {
    var We;
    let {
        responses: a,
        requestBody: i,
        parameters: p,
        tags: u = [],
        deprecated: c,
        description: l,
        summary: d,
      } = r,
      g = To(r, n, e),
      f = t.override.operations[r.operationId],
      h = Object.entries(t.override.tags).reduce(
        (He, [ot, st]) => (u.includes(ot) ? Pe(He, st) : He),
        {},
      ),
      y = { ...t.override, ...h, ...f },
      x =
        (f == null ? void 0 : f.operationName) ||
        ((We = t.override) == null ? void 0 : We.operationName),
      $ = x ? x(r, n, e) : j(g),
      S = V($, { es5keyword: !0 }),
      w = await Eo({
        responses: a,
        operationName: S,
        context: s,
        contentType: y.contentType,
      }),
      T = await wo({
        requestBody: i,
        operationName: S,
        context: s,
        contentType: y.contentType,
      }),
      R = await jo({ parameters: [...o, ...(p != null ? p : [])], context: s }),
      P = await rr({ queryParams: R.query, operationName: S, context: s }),
      E = t.headers
        ? await rr({
            queryParams: R.header,
            operationName: S,
            context: s,
            suffix: 'headers',
          })
        : void 0,
      C = await Ro({
        route: n,
        pathParams: R.path,
        operationId: g,
        context: s,
      }),
      D = vo({ body: T, queryParams: P, params: C, headers: E }),
      L = await Ct({
        output: t.target,
        name: S,
        mutator: y == null ? void 0 : y.mutator,
        workspace: s.workspace,
        tsconfig: s.tsconfig,
      }),
      pe =
        G(y == null ? void 0 : y.formData) || N(y == null ? void 0 : y.formData)
          ? await Ct({
              output: t.target,
              name: S,
              mutator: y.formData,
              workspace: s.workspace,
              tsconfig: s.tsconfig,
            })
          : void 0,
      Ee =
        G(y == null ? void 0 : y.formUrlEncoded) ||
        N(y == null ? void 0 : y.formUrlEncoded)
          ? await Ct({
              output: t.target,
              name: S,
              mutator: y.formUrlEncoded,
              workspace: s.workspace,
              tsconfig: s.tsconfig,
            })
          : void 0,
      Y = _({ description: l, deprecated: c, summary: d }),
      oe = {
        verb: e,
        tags: u,
        summary: r.summary,
        operationId: g,
        operationName: S,
        response: w,
        body: T,
        headers: E,
        queryParams: P,
        params: C,
        props: D,
        mutator: L,
        formData: pe,
        formUrlEncoded: Ee,
        override: y,
        doc: Y,
      },
      Ue = await dt(y == null ? void 0 : y.transformer, s.workspace);
    return Ue ? Ue(oe) : oe;
  },
  ko = ({ verbs: e, output: t, route: r, context: n }) =>
    M(
      Object.entries(e),
      async (o, [s, a]) => {
        if (pn(s)) {
          let i = await kp({
            verb: s,
            output: t,
            verbParameters: e.parameters,
            route: r,
            operation: a,
            context: n,
          });
          o.push(i);
        }
        return o;
      },
      [],
    );
var Io = async ({ output: e, context: t }) =>
  M(
    Object.entries(t.specs[t.specKey].paths),
    async (r, [n, o]) => {
      let s = Un(n),
        a = o,
        i = t;
      if (I(o)) {
        let { schema: l, imports: d } = await U(o, t);
        (a = l), (i = { ...t, ...(d.length ? { specKey: d[0].specKey } : {}) });
      }
      let p = await ko({ verbs: a, output: e, route: s, context: i }),
        u = p.reduce(
          (l, { queryParams: d, headers: g, body: f, response: h }) => (
            d && l.push(d.schema, ...d.deps),
            g && l.push(g.schema, ...g.deps),
            l.push(...f.schemas),
            l.push(...h.schemas),
            l
          ),
          [],
        ),
        c = await ho(e.client, p, {
          route: s,
          pathRoute: n,
          override: e.override,
          context: i,
          mock: !!e.mock,
        });
      return (
        r.schemas.push(...u), (r.operations = { ...r.operations, ...c }), r
      );
    },
    { operations: {}, schemas: [] },
  );
m();
var ii = ue(Or());
var br = (e = {}, t, r) =>
  (0, ii.default)(e)
    ? Promise.resolve([])
    : M(
        Object.entries(e),
        async (n, [o, s]) => {
          let a = await qe([[r, s]], o, t, 'void'),
            i = a.flatMap(({ imports: g }) => g),
            p = a.flatMap(({ schemas: g }) => g),
            u = a.map(({ value: g }) => g).join(' | '),
            c = `${b(o)}${r}`,
            d = `${_(s)}export type ${c} = ${u || 'unknown'};
`;
          return (
            n.push(...p),
            c !== u && n.push({ name: c, model: d, imports: i }),
            n
          );
        },
        [],
      );
m();
var ai = (e = {}, t, r) =>
  M(
    Object.entries(e),
    async (n, [o, s]) => {
      let a = `${b(o)}${r}`,
        { schema: i, imports: p } = await U(s, t);
      if (i.in !== 'query') return n;
      if (!i.schema || p.length)
        return (
          n.push({
            name: a,
            imports: p.length
              ? [
                  {
                    name: p[0].name,
                    specKey: p[0].specKey,
                    schemaName: p[0].schemaName,
                  },
                ]
              : [],
            model: `export type ${a} = ${p.length ? p[0].name : 'unknown'};
`,
          }),
          n
        );
      let u = await ae({ schema: i.schema, propName: a, context: t }),
        l = `${_(s)}export type ${a} = ${u.value || 'unknown'};
`;
      return (
        n.push(...u.schemas),
        a !== u.value && n.push({ name: a, model: l, imports: u.imports }),
        n
      );
    },
    [],
  );
m();
var mi = ue(Or());
m();
var pi = (e) => {
  var r, n;
  let t = { ...e };
  for (let o of Object.values(t))
    if ((r = o.discriminator) != null && r.mapping) {
      let { mapping: s, propertyName: a } = o.discriminator;
      for (let i of Object.keys(s)) {
        let p = t[i];
        (p.properties = {
          ...p.properties,
          [a]: { type: 'string', enum: [i] },
        }),
          (p.required = [...((n = p.required) != null ? n : []), a]);
      }
    }
  return t;
};
m();
var ci = async ({ name: e, schema: t, context: r, suffix: n }) => {
  var p;
  let o = await Rt({ item: t, name: e, context: r }),
    s = o.value === '{}',
    a = '';
  (a += _(t)),
    s &&
      (r.tslint
        ? (a += `// tslint:disable-next-line:no-empty-interface
`)
        : (a += `// eslint-disable-next-line @typescript-eslint/no-empty-interface
`)),
    !Ce.includes(o.value) &&
    !((p = r == null ? void 0 : r.override) != null && p.useTypeOverInterfaces)
      ? (a += `export interface ${e} ${o.value}
`)
      : (a += `export type ${e} = ${o.value};
`);
  let i = o.imports.filter((u) => u.name !== e);
  return [...o.schemas, { name: e, model: a, imports: i }];
};
var li = async (e = {}, t, r) => {
  if ((0, mi.default)(e)) return [];
  let n = pi(e);
  return M(
    Object.entries(n),
    async (s, [a, i]) => {
      let p = b(a) + r;
      if (
        (!i.type || i.type === 'object') &&
        !i.allOf &&
        !i.oneOf &&
        !i.anyOf &&
        !I(i) &&
        !i.nullable
      )
        return (
          s.push(...(await ci({ name: p, schema: i, context: t, suffix: r }))),
          s
        );
      {
        let u = await re({ schema: i, name: p, context: t }),
          c = '',
          l = u.imports;
        if (((c += _(i)), u.isEnum && !u.isRef)) c += De(u.value, u.type, p);
        else if (p === u.value && u.isRef) {
          let d = u.imports.find((g) => g.name === p);
          if (!d)
            c += `export type ${p} = ${u.value};
`;
          else {
            let g =
              d != null && d.specKey
                ? `${b(Pt(d.specKey, t.specKey))}${u.value}`
                : `${u.value}Bis`;
            (c += `export type ${p} = ${g};
`),
              (l = l.map((f) => (f.name === p ? { ...f, alias: g } : f)));
          }
        } else
          c += `export type ${p} = ${u.value};
`;
        return s.push(...u.schemas, { name: p, model: c, imports: l }), s;
      }
    },
    [],
  );
};
m();
var _ibmopenapivalidator = require('ibm-openapi-validator');
var _ibmopenapivalidator2 = _interopRequireDefault(_ibmopenapivalidator);
var ui = async (e) => {
  let { errors: t, warnings: r } = await _ibmopenapivalidator2.default.call(
    void 0,
    e,
  );
  r.length && dn(r), t.length && gn(t);
};
var xl = async ({ specs: e, input: t, workspace: r }) => {
    var o;
    let n =
      (o = t.override) != null && o.transformer
        ? await dt(t.override.transformer, r)
        : void 0;
    return M(
      Object.entries(e),
      async (s, [a, i]) => {
        let p = await Nn(i, t.converterOptions, a),
          u = n ? n(p) : p;
        return t.validation && (await ui(u)), (s[a] = u), s;
      },
      {},
    );
  },
  $r = async ({ data: e, input: t, output: r, target: n, workspace: o }) => {
    var p;
    let s = await xl({ specs: e, input: t, workspace: o }),
      a = await M(
        Object.entries(s),
        async (u, [c, l]) => {
          var $, S, w, T, R, P;
          let d = {
              specKey: c,
              target: n,
              workspace: o,
              specs: s,
              override: r.override,
              tslint: r.tslint,
              tsconfig: r.tsconfig,
              packageJson: r.packageJson,
            },
            g = await li(
              l.openapi
                ? (w = l.components) == null
                  ? void 0
                  : w.schemas
                : {
                    ..._lodashomit2.default.call(void 0, l, [
                      'openapi',
                      'info',
                      'servers',
                      'paths',
                      'components',
                      'security',
                      'tags',
                      'externalDocs',
                    ]),
                    ...((S = ($ = l.components) == null ? void 0 : $.schemas) !=
                    null
                      ? S
                      : {}),
                  },
              d,
              r.override.components.schemas.suffix,
            ),
            f = await br(
              (T = l.components) == null ? void 0 : T.responses,
              d,
              r.override.components.responses.suffix,
            ),
            h = await br(
              (R = l.components) == null ? void 0 : R.requestBodies,
              d,
              r.override.components.requestBodies.suffix,
            ),
            y = await ai(
              (P = l.components) == null ? void 0 : P.parameters,
              d,
              r.override.components.parameters.suffix,
            ),
            x = [...g, ...f, ...h, ...y];
          return x.length && (u[c] = x), u;
        },
        {},
      ),
      i = await Io({
        output: r,
        context: {
          specKey: n,
          target: n,
          workspace: o,
          specs: s,
          override: r.override,
          tslint: r.tslint,
          tsconfig: r.tsconfig,
          packageJson: r.packageJson,
        },
      });
    return {
      ...i,
      schemas: { ...a, [n]: [...((p = a[n]) != null ? p : []), ...i.schemas] },
      target: n,
      info: s[n].info,
    };
  };
var jl = async (e, { validate: t, ...r }, n) => {
    if (t)
      try {
        await _swaggerparser2.default.validate(e);
      } catch (s) {
        if ((s == null ? void 0 : s.name) === 'ParserError') throw s;
        _console.log.call(void 0, `\u26A0\uFE0F  ${_chalk2.default.yellow(s)}`);
      }
    let o = (await _swaggerparser2.default.resolve(e, r)).values();
    return n
      ? o
      : Object.fromEntries(
          Object.entries(o).map(([s, a]) => [
            _upath.resolve.call(void 0, s),
            a,
          ]),
        );
  },
  di = async (e, t) => {
    let { input: r, output: n } = t;
    if (N(r.target))
      return $r({
        data: { [e]: r.target },
        input: r,
        output: n,
        target: e,
        workspace: e,
      });
    let o = be(r.target),
      s = await jl(r.target, r.parserOptions, o);
    return $r({ data: s, input: r, output: n, target: r.target, workspace: e });
  };
m();
var _execa = require('execa');
var _execa2 = _interopRequireDefault(_execa);
m();
var _stringargv = require('string-argv');
var yi = async (e, t = [], r = []) => {
  q(_chalk2.default.white(`Running ${e} hook...`));
  for (let n of t)
    if (G(n)) {
      let [o, ...s] = [
        ..._stringargv.parseArgsStringToArgv.call(void 0, n),
        ...r,
      ];
      try {
        await _execa2.default.call(void 0, o, s);
      } catch (a) {
        q(_chalk2.default.red(`\u{1F6D1} Failed to run ${e} hook: ${a}`));
      }
    } else B(n) && (await n(r));
};
m();
var Al = ({
    schema: { imports: e, model: t },
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => {
    let a = s;
    return (
      (a += xn({ imports: e, target: r, isRootKey: n, specsName: o })),
      (a += e.length
        ? `

`
        : `
`),
      (a += t),
      a
    );
  },
  xr = (e, t) => _upath.join.call(void 0, e, `/${t}.ts`);
var kl = async ({
    path: e,
    schema: t,
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => {
    let a = j(t.name);
    try {
      await _fsextra.outputFile.call(
        void 0,
        xr(e, a),
        Al({ schema: t, target: r, isRootKey: n, specsName: o, header: s }),
      );
      let i = xr(e, 'index'),
        u = (await _fsextra.readFile.call(void 0, i)).toString();
      !u.includes(`export * from './${a}'`) &&
        !u.includes(`export * from "./${a}"`) &&
        (await _fsextra.appendFile.call(
          void 0,
          xr(e, 'index'),
          `export * from './${a}';
`,
        ));
    } catch (i) {
      throw `Oups... \u{1F37B}. An Error occurred while writing schema ${a} => ${i}`;
    }
  },
  Oi = async ({
    schemaPath: e,
    schemas: t,
    target: r,
    isRootKey: n,
    specsName: o,
    header: s,
  }) => (
    await _fsextra.ensureFile.call(
      void 0,
      _upath.join.call(void 0, e, '/index.ts'),
    ),
    Promise.all(
      t.map((a) =>
        kl({
          path: e,
          schema: a,
          target: r,
          isRootKey: n,
          specsName: o,
          header: s,
        }),
      ),
    )
  );
m();
m();
var Il = (e, t) =>
    e +
    `${t}
`,
  Se = (e) =>
    Object.values(e)
      .flatMap((r) => r)
      .sort((r, n) => (r.imports.some((o) => o.name === n.name) ? 1 : -1))
      .reduce((r, { model: n }) => Il(r, n), '');
m();
var _compareversions = require('compare-versions');
var At = (e, t, r) => {
  let n = Object.values(e).map(({ operationName: i }) => i),
    o = (r == null ? void 0 : r.client) === Q.ANGULAR,
    s = Tt({
      outputClient: r.client,
      title: b(t.title),
      customTitleFunc: r.override.title,
    }),
    a = Object.values(e).reduce(
      (i, p, u, c) => {
        var l, d, g;
        if (
          (i.imports.push(...p.imports),
          i.importsMSW.push(...p.importsMSW),
          (i.implementation +=
            p.implementation +
            `
`),
          (i.implementationMSW.function += p.implementationMSW.function),
          (i.implementationMSW.handler += p.implementationMSW.handler),
          p.mutator && i.mutators.push(p.mutator),
          p.formData && i.formData.push(p.formData),
          p.formUrlEncoded && i.formUrlEncoded.push(p.formUrlEncoded),
          u === c.length - 1)
        ) {
          let f = i.mutators.some((S) => (o ? S.hasThirdArg : S.hasSecondArg)),
            h =
              (g =
                (d = (l = r.packageJson) == null ? void 0 : l.dependencies) ==
                null
                  ? void 0
                  : d.typescript) != null
                ? g
                : '4.4.0',
            y = _compareversions.compare.call(void 0, h, '4.5.0', '>='),
            x = St({
              outputClient: r.client,
              isRequestOptions: r.override.requestOptions !== !1,
              isMutator: f,
              isGlobalMutator: !!r.override.mutator,
              provideIn: r.override.angular.provideIn,
              hasAwaitedType: y,
              titles: s,
            });
          (i.implementation = x.implementation + i.implementation),
            (i.implementationMSW.handler =
              x.implementationMSW + i.implementationMSW.handler);
          let $ = wt({
            outputClient: r == null ? void 0 : r.client,
            operationNames: n,
            hasMutator: !!i.mutators.length,
            hasAwaitedType: y,
            titles: s,
          });
          (i.implementation += $.implementation),
            (i.implementationMSW.handler += $.implementationMSW);
        }
        return i;
      },
      {
        imports: [],
        implementation: '',
        implementationMSW: { function: '', handler: '' },
        importsMSW: [],
        mutators: [],
        formData: [],
        formUrlEncoded: [],
      },
    );
  return {
    ...a,
    implementationMSW:
      a.implementationMSW.function + a.implementationMSW.handler,
  };
};
var bi = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  try {
    let { path: a, dirname: i } = A(n.target, { backupFilename: j(r.title) }),
      {
        imports: p,
        importsMSW: u,
        implementation: c,
        implementationMSW: l,
        mutators: d,
        formData: g,
        formUrlEncoded: f,
      } = At(e, r, n),
      h = s,
      y = n.schemas ? ne(i, A(n.schemas).dirname) : void 0,
      x = Z(n.tsconfig);
    return (
      (h += xe(
        n.client,
        c,
        y
          ? [
              {
                exports: p.filter(($) => !u.some((S) => $.name === S.name)),
                dependency: y,
              },
            ]
          : [],
        o,
        !!n.schemas,
        x,
        !!n.override.mutator,
      )),
      n.mock &&
        (h += $e(
          l,
          y ? [{ exports: u, dependency: y }] : [],
          o,
          !!n.schemas,
          x,
        )),
      d && (h += z({ mutators: d, implementation: c })),
      g && (h += z({ mutators: g })),
      f && (h += z({ mutators: f })),
      n.schemas || (h += Se(t)),
      (h += `

${c}`),
      n.mock &&
        ((h += `

`),
        (h += l)),
      await _fsextra.outputFile.call(void 0, a, h),
      [a]
    );
  } catch (a) {
    throw `Oups... \u{1F37B}. An Error occurred while writing file => ${a}`;
  }
};
m();
var $i = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  try {
    let {
        filename: a,
        dirname: i,
        extension: p,
      } = A(n.target, { backupFilename: j(r.title) }),
      {
        imports: u,
        implementation: c,
        implementationMSW: l,
        importsMSW: d,
        mutators: g,
        formData: f,
        formUrlEncoded: h,
      } = At(e, r, n),
      y = s,
      x = s,
      $ = n.schemas ? ne(i, A(n.schemas).dirname) : './' + a + '.schemas',
      S = Z(n.tsconfig);
    (y += xe(
      n.client,
      c,
      [{ exports: u, dependency: $ }],
      o,
      !!n.schemas,
      S,
      !!n.override.mutator,
    )),
      (x += $e(l, [{ exports: d, dependency: $ }], o, !!n.schemas, S));
    let w = n.schemas
      ? void 0
      : _upath.join.call(void 0, i, a + '.schemas' + p);
    if (w) {
      let E = s + Se(t);
      await _fsextra.outputFile.call(
        void 0,
        _upath.join.call(void 0, i, a + '.schemas' + p),
        E,
      );
    }
    g && (y += z({ mutators: g, implementation: c })),
      f && (y += z({ mutators: f })),
      h && (y += z({ mutators: h })),
      (y += `
${c}`),
      (x += `
${l}`);
    let T = a + (Q.ANGULAR === n.client ? '.service' : '') + p,
      R = _upath.join.call(void 0, i, T);
    await _fsextra.outputFile.call(void 0, _upath.join.call(void 0, i, T), y);
    let P = n.mock ? _upath.join.call(void 0, i, a + '.msw' + p) : void 0;
    return (
      P && (await _fsextra.outputFile.call(void 0, P, x)),
      [R, ...(w ? [w] : []), ...(P ? [P] : [])]
    );
  } catch (a) {
    throw `Oups... \u{1F37B}. An Error occurred while splitting => ${a}`;
  }
};
m();
m();
var Fl = (e) => ({ ...e, tags: e.tags.length ? e.tags : ['default'] }),
  Nl = (e, t) =>
    t.tags.reduce((r, n) => {
      var s, a, i;
      let o = r[n];
      return (
        (r[n] = o
          ? {
              implementation: o.implementation + t.implementation,
              imports: [...o.imports, ...t.imports],
              importsMSW: [...o.importsMSW, ...t.importsMSW],
              implementationMSW: {
                function:
                  o.implementationMSW.function + t.implementationMSW.function,
                handler:
                  o.implementationMSW.handler + t.implementationMSW.handler,
              },
              mutators: t.mutator
                ? [...((s = o.mutators) != null ? s : []), t.mutator]
                : o.mutators,
              formData: t.formData
                ? [...((a = o.formData) != null ? a : []), t.formData]
                : o.formData,
              formUrlEncoded: t.formUrlEncoded
                ? [
                    ...((i = o.formUrlEncoded) != null ? i : []),
                    t.formUrlEncoded,
                  ]
                : o.formUrlEncoded,
            }
          : {
              imports: t.imports,
              importsMSW: t.importsMSW,
              mutators: t.mutator ? [t.mutator] : [],
              formData: t.formData ? [t.formData] : [],
              formUrlEncoded: t.formUrlEncoded ? [t.formUrlEncoded] : [],
              implementation: t.implementation,
              implementationMSW: {
                function: t.implementationMSW.function,
                handler: t.implementationMSW.handler,
              },
            }),
        r
      );
    }, e),
  kt = (e, t) => {
    let r = t.client === Q.ANGULAR,
      n = Object.values(e)
        .map(Fl)
        .reduce((o, s, a, i) => {
          let p = Nl(o, s);
          return a === i.length - 1
            ? Object.entries(p).reduce((u, [c, l]) => {
                var S, w, T, R, P;
                let d = !!(
                    (S = l.mutators) != null &&
                    S.some((E) => (r ? E.hasThirdArg : E.hasSecondArg))
                  ),
                  g = Object.values(e)
                    .filter(({ tags: E }) => E.includes(c))
                    .map(({ operationName: E }) => E),
                  f =
                    (R =
                      (T =
                        (w = t.packageJson) == null
                          ? void 0
                          : w.dependencies) == null
                        ? void 0
                        : T.typescript) != null
                      ? R
                      : '4.4.0',
                  h = _compareversions.compare.call(void 0, f, '4.5.0', '>='),
                  y = Tt({
                    outputClient: t.client,
                    title: b(c),
                    customTitleFunc: t.override.title,
                  }),
                  x = wt({
                    outputClient: t == null ? void 0 : t.client,
                    operationNames: g,
                    hasMutator: !!((P = l.mutators) != null && P.length),
                    hasAwaitedType: h,
                    titles: y,
                  }),
                  $ = St({
                    outputClient: t.client,
                    isRequestOptions: t.override.requestOptions !== !1,
                    isMutator: d,
                    isGlobalMutator: !!t.override.mutator,
                    provideIn: t.override.angular.provideIn,
                    hasAwaitedType: h,
                    titles: y,
                  });
                return (
                  (u[c] = {
                    implementation:
                      $.implementation + l.implementation + x.implementation,
                    implementationMSW: {
                      function: l.implementationMSW.function,
                      handler:
                        $.implementationMSW +
                        l.implementationMSW.handler +
                        x.implementationMSW,
                    },
                    imports: l.imports,
                    importsMSW: l.importsMSW,
                    mutators: l.mutators,
                    formData: l.formData,
                    formUrlEncoded: l.formUrlEncoded,
                  }),
                  u
                );
              }, {})
            : p;
        }, {});
    return Object.entries(n).reduce(
      (o, [s, a]) => (
        (o[s] = {
          ...a,
          implementationMSW:
            a.implementationMSW.function + a.implementationMSW.handler,
        }),
        o
      ),
      {},
    );
  };
var xi = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  let {
      filename: a,
      dirname: i,
      extension: p,
    } = A(n.target, { backupFilename: j(r.title) }),
    u = kt(e, n),
    c = Z(n.tsconfig);
  return (
    await Promise.all(
      Object.entries(u).map(async ([d, g]) => {
        try {
          let {
              imports: f,
              implementation: h,
              implementationMSW: y,
              importsMSW: x,
              mutators: $,
              formData: S,
              formUrlEncoded: w,
            } = g,
            T = s,
            R = s,
            P = n.schemas
              ? '../' + ne(i, A(n.schemas).dirname)
              : '../' + a + '.schemas';
          (T += xe(
            n.client,
            h,
            [{ exports: f, dependency: P }],
            o,
            !!n.schemas,
            c,
            !!n.override.mutator,
          )),
            (R += $e(y, [{ exports: x, dependency: P }], o, !!n.schemas, c));
          let E = n.schemas
            ? void 0
            : _upath.join.call(void 0, i, a + '.schemas' + p);
          if (E) {
            let pe = s + Se(t);
            await _fsextra.outputFile.call(void 0, E, pe);
          }
          $ && (T += z({ mutators: $, implementation: h, oneMore: !0 })),
            S && (T += z({ mutators: S, oneMore: !0 })),
            w && (T += z({ mutators: w, oneMore: !0 })),
            (T += `
${h}`),
            (R += `
${y}`);
          let C = Te(d) + (Q.ANGULAR === n.client ? '.service' : '') + p,
            D = _upath.join.call(void 0, i, Te(d), C);
          await _fsextra.outputFile.call(void 0, D, T);
          let L = n.mock
            ? _upath.join.call(void 0, i, Te(d), Te(d) + '.msw' + p)
            : void 0;
          return (
            L && (await _fsextra.outputFile.call(void 0, L, R)),
            [D, ...(E ? [E] : []), ...(L ? [L] : [])]
          );
        } catch (f) {
          throw `Oups... \u{1F37B}. An Error occurred while splitting tag ${d} => ${f}`;
        }
      }),
    )
  ).flatMap((d) => d);
};
m();
var Ti = async ({
  operations: e,
  schemas: t,
  info: r,
  output: n,
  specsName: o,
  header: s,
}) => {
  let {
      filename: a,
      dirname: i,
      extension: p,
    } = A(n.target, { backupFilename: j(r.title) }),
    u = kt(e, n),
    c = Z(n.tsconfig);
  return (
    await Promise.all(
      Object.entries(u).map(async ([d, g]) => {
        try {
          let {
              imports: f,
              implementation: h,
              implementationMSW: y,
              importsMSW: x,
              mutators: $,
              formData: S,
              formUrlEncoded: w,
            } = g,
            T = s,
            R = n.schemas ? ne(i, A(n.schemas).dirname) : './' + a + '.schemas';
          (T += xe(
            n.client,
            h,
            [
              {
                exports: f.filter((C) => !x.some((D) => C.name === D.name)),
                dependency: R,
              },
            ],
            o,
            !!n.schemas,
            c,
            !!n.override.mutator,
          )),
            n.mock &&
              (T += $e(y, [{ exports: x, dependency: R }], o, !!n.schemas, c));
          let P = n.schemas
            ? void 0
            : _upath.join.call(void 0, i, a + '.schemas' + p);
          if (P) {
            let C = s + Se(t);
            await _fsextra.outputFile.call(void 0, P, C);
          }
          $ && (T += z({ mutators: $, implementation: h })),
            S && (T += z({ mutators: S })),
            w && (T += z({ mutators: w })),
            (T += `

`),
            (T += h),
            n.mock &&
              ((T += `

`),
              (T += y));
          let E = _upath.join.call(void 0, i, `${Te(d)}${p}`);
          return (
            await _fsextra.outputFile.call(void 0, E, T), [E, ...(P ? [P] : [])]
          );
        } catch (f) {
          throw `Oups... \u{1F37B}. An Error occurred while writing tag ${d} => ${f}`;
        }
      }),
    )
  ).flatMap((d) => d);
};
var _l = (e, t) => {
    if (!e) return '';
    let r = e(t);
    return Array.isArray(r) ? _({ description: r }) : r;
  },
  Pi = async ({ operations: e, schemas: t, target: r, info: n }, o, s, a) => {
    let { output: i } = s,
      p = a || n.title,
      u = Object.keys(t).reduce((g, f) => {
        let y = Pt(f, r).slice(1).split('/').join('-');
        return (g[f] = y), g;
      }, {}),
      c = _l(i.override.header, n);
    if (i.schemas) {
      let g = i.schemas;
      await Promise.all(
        Object.entries(t).map(([f, h]) => {
          let y = r === f,
            x = y ? g : _upath.join.call(void 0, g, u[f]);
          return Oi({
            schemaPath: x,
            schemas: h,
            target: r,
            specsName: u,
            isRootKey: y,
            header: c,
          });
        }),
      );
    }
    let l = [];
    if (i.target)
      switch (i.mode) {
        case ce.SPLIT:
          l = await $i({
            workspace: o,
            operations: e,
            output: i,
            info: n,
            schemas: t,
            specsName: u,
            header: c,
          });
          break;
        case ce.TAGS:
          l = await Ti({
            workspace: o,
            operations: e,
            output: i,
            info: n,
            schemas: t,
            specsName: u,
            header: c,
          });
          break;
        case ce.TAGS_SPLIT:
          l = await xi({
            workspace: o,
            operations: e,
            output: i,
            info: n,
            schemas: t,
            specsName: u,
            header: c,
          });
          break;
        case ce.SINGLE:
        default:
          l = await bi({
            workspace: o,
            operations: e,
            output: i,
            info: n,
            schemas: t,
            specsName: u,
            header: c,
          });
          break;
      }
    if (i.workspace) {
      let g = i.workspace,
        f = l
          .filter((y) => !y.endsWith('.msw.ts'))
          .map((y) => ne(g, A(y).pathWithoutExtension));
      i.schemas && f.push(ne(g, A(i.schemas).dirname));
      let h = _upath.join.call(void 0, g, '/index.ts');
      if (await _fsextra.pathExists.call(void 0, h)) {
        let y = await _fsextra.readFile.call(void 0, h, 'utf8'),
          x = f.filter(($) => !y.includes($));
        await _fsextra.appendFile.call(
          void 0,
          h,
          _lodashuniq2.default
            .call(void 0, x)
            .map(($) => `export * from '${$}';`).join(`
`) +
            `
`,
        );
      } else
        await _fsextra.outputFile.call(
          void 0,
          h,
          _lodashuniq2.default
            .call(void 0, f)
            .map((y) => `export * from '${y}';`).join(`
`) +
            `
`,
        );
      l = [h, ...l];
    }
    let d = [...(i.schemas ? [A(i.schemas).dirname] : []), ...l];
    if (
      (s.hooks.afterAllFilesWrite &&
        (await yi('afterAllFilesWrite', s.hooks.afterAllFilesWrite, d)),
      i.prettier)
    )
      try {
        await _execa2.default.call(void 0, 'prettier', ['--write', ...d]);
      } catch (e8) {
        _console.log.call(
          void 0,
          _chalk2.default.yellow(
            `\u26A0\uFE0F  ${p ? `${p} - ` : ''}Prettier not found`,
          ),
        );
      }
    fn(p);
  };
m();
var vi = (e) => {
  un(e), process.exit(1);
};
var Ci = async (e, t, r) => {
    if (t.output.clean) {
      let o = Array.isArray(t.output.clean) ? t.output.clean : [];
      t.output.target &&
        (await Wt(['**/*', '!**/*.d.ts', ...o], A(t.output.target).dirname)),
        t.output.schemas &&
          (await Wt(['**/*', '!**/*.d.ts', ...o], A(t.output.schemas).dirname)),
        q(`${r ? `${r}: ` : ''}Cleaning output folder`);
    }
    let n = await di(e, t);
    await Pi(n, e, t, r);
  },
  Mi = async (e, t, r) => {
    if (r) {
      let n = e[r];
      if (n)
        try {
          await Ci(t, n, r);
        } catch (o) {
          q(_chalk2.default.red(`\u{1F6D1}  ${r ? `${r} - ` : ''}${o}`));
        }
      else vi('Project not found');
      return;
    }
    return M(
      Object.entries(e),
      async (n, [o, s]) => {
        try {
          n.push(await Ci(t, s, o));
        } catch (a) {
          q(_chalk2.default.red(`\u{1F6D1}  ${o ? `${o} - ` : ''}${a}`));
        }
        return n;
      },
      [],
    );
  },
  Ix = (exports.M = async (e, t) => {
    let {
      path: r,
      file: n,
      error: o,
    } = await ut(e, { defaultFileName: 'orval.config' });
    if (!n) throw `failed to load from ${r} => ${o}`;
    let s = _upath.dirname.call(void 0, r),
      a = await (B(n) ? n() : n),
      i = await M(
        Object.entries(a),
        async (u, [c, l]) => ((u[c] = await qn(l, s, t)), u),
        {},
      ),
      p = Object.entries(i)
        .filter(
          ([u]) =>
            (t == null ? void 0 : t.projectName) === void 0 ||
            u === (t == null ? void 0 : t.projectName),
        )
        .map(([, { input: u }]) => u.target)
        .filter((u) => G(u));
    (t == null ? void 0 : t.watch) && p.length
      ? Fn(
          t == null ? void 0 : t.watch,
          () => Mi(i, s, t == null ? void 0 : t.projectName),
          p,
        )
      : await Mi(i, s, t == null ? void 0 : t.projectName);
  });
exports.a = It;
exports.b = m;
exports.c = G;
exports.d = q;
exports.e = ou;
exports.f = b;
exports.g = j;
exports.h = iu;
exports.i = Te;
exports.j = au;
exports.k = K;
exports.l = V;
exports.m = F;
exports.n = ct;
exports.o = mt;
exports.p = Li;
exports.q = Ce;
exports.r = se;
exports.s = du;
exports.t = xn;
exports.u = z;
exports.v = Ji;
exports.w = lt;
exports.x = de;
exports.y = Xi;
exports.z = Zi;
exports.A = ge;
exports.B = ea;
exports.C = ta;
exports.D = ye;
exports.E = he;
exports.F = Oe;
exports.G = Uf;
exports.H = qn;
exports.I = Gn;
exports.J = Z;
exports.K = Fn;
exports.L = Ci;
exports.M = Ix;
