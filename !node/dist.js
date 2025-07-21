var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d, b2);
  function __() {
    this.constructor = d;
  }
  d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b2) {
          q.push([n, v, a, b2]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
            fail(e);
            return next();
          });
        } else s |= 1;
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = function(d, b2) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b3) {
        d2.__proto__ = b3;
      } || function(d2, b3) {
        for (var p in b3) if (Object.prototype.hasOwnProperty.call(b3, p)) d2[p] = b3[p];
      };
      return extendStatics(d, b2);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    };
    __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __esDecorate,
      __runInitializers,
      __propKey,
      __setFunctionName,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources,
      __rewriteRelativeImportExtension
    };
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/shared.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.maybeSetModuleExports = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var types_1 = tslib_1.__importDefault(require_types());
    function default_1(fork) {
      var types2 = fork.use(types_1.default);
      var Type = types2.Type;
      var builtin = types2.builtInTypes;
      var isNumber = builtin.number;
      function geq(than) {
        return Type.from(function(value) {
          return isNumber.check(value) && value >= than;
        }, isNumber + " >= " + than);
      }
      ;
      var defaults = {
        // Functions were used because (among other reasons) that's the most
        // elegant way to allow for the emptyArray one always to give a new
        // array instance.
        "null": function() {
          return null;
        },
        "emptyArray": function() {
          return [];
        },
        "false": function() {
          return false;
        },
        "true": function() {
          return true;
        },
        "undefined": function() {
        },
        "use strict": function() {
          return "use strict";
        }
      };
      var naiveIsPrimitive = Type.or(builtin.string, builtin.number, builtin.boolean, builtin.null, builtin.undefined);
      var isPrimitive = Type.from(function(value) {
        if (value === null)
          return true;
        var type = typeof value;
        if (type === "object" || type === "function") {
          return false;
        }
        return true;
      }, naiveIsPrimitive.toString());
      return {
        geq,
        defaults,
        isPrimitive
      };
    }
    exports2.default = default_1;
    function maybeSetModuleExports(moduleGetter) {
      try {
        var nodeModule = moduleGetter();
        var originalExports = nodeModule.exports;
        var defaultExport = originalExports["default"];
      } catch (_a) {
        return;
      }
      if (defaultExport && defaultExport !== originalExports && typeof originalExports === "object") {
        Object.assign(defaultExport, originalExports, { "default": defaultExport });
        if (originalExports.__esModule) {
          Object.defineProperty(defaultExport, "__esModule", { value: true });
        }
        nodeModule.exports = defaultExport;
      }
    }
    exports2.maybeSetModuleExports = maybeSetModuleExports;
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/types.js
var require_types = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/types.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Def = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var shared_1 = require_shared();
    var Op = Object.prototype;
    var objToStr = Op.toString;
    var hasOwn = Op.hasOwnProperty;
    var BaseType = (
      /** @class */
      function() {
        function BaseType2() {
        }
        BaseType2.prototype.assert = function(value, deep) {
          if (!this.check(value, deep)) {
            var str = shallowStringify(value);
            throw new Error(str + " does not match type " + this);
          }
          return true;
        };
        BaseType2.prototype.arrayOf = function() {
          var elemType = this;
          return new ArrayType(elemType);
        };
        return BaseType2;
      }()
    );
    var ArrayType = (
      /** @class */
      function(_super) {
        tslib_1.__extends(ArrayType2, _super);
        function ArrayType2(elemType) {
          var _this = _super.call(this) || this;
          _this.elemType = elemType;
          _this.kind = "ArrayType";
          return _this;
        }
        ArrayType2.prototype.toString = function() {
          return "[" + this.elemType + "]";
        };
        ArrayType2.prototype.check = function(value, deep) {
          var _this = this;
          return Array.isArray(value) && value.every(function(elem) {
            return _this.elemType.check(elem, deep);
          });
        };
        return ArrayType2;
      }(BaseType)
    );
    var IdentityType = (
      /** @class */
      function(_super) {
        tslib_1.__extends(IdentityType2, _super);
        function IdentityType2(value) {
          var _this = _super.call(this) || this;
          _this.value = value;
          _this.kind = "IdentityType";
          return _this;
        }
        IdentityType2.prototype.toString = function() {
          return String(this.value);
        };
        IdentityType2.prototype.check = function(value, deep) {
          var result = value === this.value;
          if (!result && typeof deep === "function") {
            deep(this, value);
          }
          return result;
        };
        return IdentityType2;
      }(BaseType)
    );
    var ObjectType = (
      /** @class */
      function(_super) {
        tslib_1.__extends(ObjectType2, _super);
        function ObjectType2(fields) {
          var _this = _super.call(this) || this;
          _this.fields = fields;
          _this.kind = "ObjectType";
          return _this;
        }
        ObjectType2.prototype.toString = function() {
          return "{ " + this.fields.join(", ") + " }";
        };
        ObjectType2.prototype.check = function(value, deep) {
          return objToStr.call(value) === objToStr.call({}) && this.fields.every(function(field) {
            return field.type.check(value[field.name], deep);
          });
        };
        return ObjectType2;
      }(BaseType)
    );
    var OrType = (
      /** @class */
      function(_super) {
        tslib_1.__extends(OrType2, _super);
        function OrType2(types2) {
          var _this = _super.call(this) || this;
          _this.types = types2;
          _this.kind = "OrType";
          return _this;
        }
        OrType2.prototype.toString = function() {
          return this.types.join(" | ");
        };
        OrType2.prototype.check = function(value, deep) {
          if (this.types.some(function(type) {
            return type.check(value, !!deep);
          })) {
            return true;
          }
          if (typeof deep === "function") {
            deep(this, value);
          }
          return false;
        };
        return OrType2;
      }(BaseType)
    );
    var PredicateType = (
      /** @class */
      function(_super) {
        tslib_1.__extends(PredicateType2, _super);
        function PredicateType2(name, predicate) {
          var _this = _super.call(this) || this;
          _this.name = name;
          _this.predicate = predicate;
          _this.kind = "PredicateType";
          return _this;
        }
        PredicateType2.prototype.toString = function() {
          return this.name;
        };
        PredicateType2.prototype.check = function(value, deep) {
          var result = this.predicate(value, deep);
          if (!result && typeof deep === "function") {
            deep(this, value);
          }
          return result;
        };
        return PredicateType2;
      }(BaseType)
    );
    var Def = (
      /** @class */
      function() {
        function Def2(type, typeName) {
          this.type = type;
          this.typeName = typeName;
          this.baseNames = [];
          this.ownFields = /* @__PURE__ */ Object.create(null);
          this.allSupertypes = /* @__PURE__ */ Object.create(null);
          this.supertypeList = [];
          this.allFields = /* @__PURE__ */ Object.create(null);
          this.fieldNames = [];
          this.finalized = false;
          this.buildable = false;
          this.buildParams = [];
        }
        Def2.prototype.isSupertypeOf = function(that) {
          if (that instanceof Def2) {
            if (this.finalized !== true || that.finalized !== true) {
              throw new Error("");
            }
            return hasOwn.call(that.allSupertypes, this.typeName);
          } else {
            throw new Error(that + " is not a Def");
          }
        };
        Def2.prototype.checkAllFields = function(value, deep) {
          var allFields = this.allFields;
          if (this.finalized !== true) {
            throw new Error("" + this.typeName);
          }
          function checkFieldByName(name) {
            var field = allFields[name];
            var type = field.type;
            var child = field.getValue(value);
            return type.check(child, deep);
          }
          return value !== null && typeof value === "object" && Object.keys(allFields).every(checkFieldByName);
        };
        Def2.prototype.bases = function() {
          var supertypeNames = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            supertypeNames[_i] = arguments[_i];
          }
          var bases = this.baseNames;
          if (this.finalized) {
            if (supertypeNames.length !== bases.length) {
              throw new Error("");
            }
            for (var i = 0; i < supertypeNames.length; i++) {
              if (supertypeNames[i] !== bases[i]) {
                throw new Error("");
              }
            }
            return this;
          }
          supertypeNames.forEach(function(baseName) {
            if (bases.indexOf(baseName) < 0) {
              bases.push(baseName);
            }
          });
          return this;
        };
        return Def2;
      }()
    );
    exports2.Def = Def;
    var Field = (
      /** @class */
      function() {
        function Field2(name, type, defaultFn, hidden) {
          this.name = name;
          this.type = type;
          this.defaultFn = defaultFn;
          this.hidden = !!hidden;
        }
        Field2.prototype.toString = function() {
          return JSON.stringify(this.name) + ": " + this.type;
        };
        Field2.prototype.getValue = function(obj) {
          var value = obj[this.name];
          if (typeof value !== "undefined") {
            return value;
          }
          if (typeof this.defaultFn === "function") {
            value = this.defaultFn.call(obj);
          }
          return value;
        };
        return Field2;
      }()
    );
    function shallowStringify(value) {
      if (Array.isArray(value)) {
        return "[" + value.map(shallowStringify).join(", ") + "]";
      }
      if (value && typeof value === "object") {
        return "{ " + Object.keys(value).map(function(key) {
          return key + ": " + value[key];
        }).join(", ") + " }";
      }
      return JSON.stringify(value);
    }
    function typesPlugin(_fork) {
      var Type = {
        or: function() {
          var types2 = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            types2[_i] = arguments[_i];
          }
          return new OrType(types2.map(function(type) {
            return Type.from(type);
          }));
        },
        from: function(value, name) {
          if (value instanceof ArrayType || value instanceof IdentityType || value instanceof ObjectType || value instanceof OrType || value instanceof PredicateType) {
            return value;
          }
          if (value instanceof Def) {
            return value.type;
          }
          if (isArray.check(value)) {
            if (value.length !== 1) {
              throw new Error("only one element type is permitted for typed arrays");
            }
            return new ArrayType(Type.from(value[0]));
          }
          if (isObject.check(value)) {
            return new ObjectType(Object.keys(value).map(function(name2) {
              return new Field(name2, Type.from(value[name2], name2));
            }));
          }
          if (typeof value === "function") {
            var bicfIndex = builtInCtorFns.indexOf(value);
            if (bicfIndex >= 0) {
              return builtInCtorTypes[bicfIndex];
            }
            if (typeof name !== "string") {
              throw new Error("missing name");
            }
            return new PredicateType(name, value);
          }
          return new IdentityType(value);
        },
        // Define a type whose name is registered in a namespace (the defCache) so
        // that future definitions will return the same type given the same name.
        // In particular, this system allows for circular and forward definitions.
        // The Def object d returned from Type.def may be used to configure the
        // type d.type by calling methods such as d.bases, d.build, and d.field.
        def: function(typeName) {
          return hasOwn.call(defCache, typeName) ? defCache[typeName] : defCache[typeName] = new DefImpl(typeName);
        },
        hasDef: function(typeName) {
          return hasOwn.call(defCache, typeName);
        }
      };
      var builtInCtorFns = [];
      var builtInCtorTypes = [];
      function defBuiltInType(name, example) {
        var objStr = objToStr.call(example);
        var type = new PredicateType(name, function(value) {
          return objToStr.call(value) === objStr;
        });
        if (example && typeof example.constructor === "function") {
          builtInCtorFns.push(example.constructor);
          builtInCtorTypes.push(type);
        }
        return type;
      }
      var isString = defBuiltInType("string", "truthy");
      var isFunction = defBuiltInType("function", function() {
      });
      var isArray = defBuiltInType("array", []);
      var isObject = defBuiltInType("object", {});
      var isRegExp = defBuiltInType("RegExp", /./);
      var isDate = defBuiltInType("Date", /* @__PURE__ */ new Date());
      var isNumber = defBuiltInType("number", 3);
      var isBoolean = defBuiltInType("boolean", true);
      var isNull = defBuiltInType("null", null);
      var isUndefined = defBuiltInType("undefined", void 0);
      var isBigInt = typeof BigInt === "function" ? defBuiltInType("BigInt", BigInt(1234)) : new PredicateType("BigInt", function() {
        return false;
      });
      var builtInTypes = {
        string: isString,
        function: isFunction,
        array: isArray,
        object: isObject,
        RegExp: isRegExp,
        Date: isDate,
        number: isNumber,
        boolean: isBoolean,
        null: isNull,
        undefined: isUndefined,
        BigInt: isBigInt
      };
      var defCache = /* @__PURE__ */ Object.create(null);
      function defFromValue(value) {
        if (value && typeof value === "object") {
          var type = value.type;
          if (typeof type === "string" && hasOwn.call(defCache, type)) {
            var d = defCache[type];
            if (d.finalized) {
              return d;
            }
          }
        }
        return null;
      }
      var DefImpl = (
        /** @class */
        function(_super) {
          tslib_1.__extends(DefImpl2, _super);
          function DefImpl2(typeName) {
            var _this = _super.call(this, new PredicateType(typeName, function(value, deep) {
              return _this.check(value, deep);
            }), typeName) || this;
            return _this;
          }
          DefImpl2.prototype.check = function(value, deep) {
            if (this.finalized !== true) {
              throw new Error("prematurely checking unfinalized type " + this.typeName);
            }
            if (value === null || typeof value !== "object") {
              return false;
            }
            var vDef = defFromValue(value);
            if (!vDef) {
              if (this.typeName === "SourceLocation" || this.typeName === "Position") {
                return this.checkAllFields(value, deep);
              }
              return false;
            }
            if (deep && vDef === this) {
              return this.checkAllFields(value, deep);
            }
            if (!this.isSupertypeOf(vDef)) {
              return false;
            }
            if (!deep) {
              return true;
            }
            return vDef.checkAllFields(value, deep) && this.checkAllFields(value, false);
          };
          DefImpl2.prototype.build = function() {
            var _this = this;
            var buildParams = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              buildParams[_i] = arguments[_i];
            }
            this.buildParams = buildParams;
            if (this.buildable) {
              return this;
            }
            this.field("type", String, function() {
              return _this.typeName;
            });
            this.buildable = true;
            var addParam = function(built, param, arg, isArgAvailable) {
              if (hasOwn.call(built, param))
                return;
              var all = _this.allFields;
              if (!hasOwn.call(all, param)) {
                throw new Error("" + param);
              }
              var field = all[param];
              var type = field.type;
              var value;
              if (isArgAvailable) {
                value = arg;
              } else if (field.defaultFn) {
                value = field.defaultFn.call(built);
              } else {
                var message = "no value or default function given for field " + JSON.stringify(param) + " of " + _this.typeName + "(" + _this.buildParams.map(function(name) {
                  return all[name];
                }).join(", ") + ")";
                throw new Error(message);
              }
              if (!type.check(value)) {
                throw new Error(shallowStringify(value) + " does not match field " + field + " of type " + _this.typeName);
              }
              built[param] = value;
            };
            var builder = function() {
              var args = [];
              for (var _i2 = 0; _i2 < arguments.length; _i2++) {
                args[_i2] = arguments[_i2];
              }
              var argc = args.length;
              if (!_this.finalized) {
                throw new Error("attempting to instantiate unfinalized type " + _this.typeName);
              }
              var built = Object.create(nodePrototype);
              _this.buildParams.forEach(function(param, i) {
                if (i < argc) {
                  addParam(built, param, args[i], true);
                } else {
                  addParam(built, param, null, false);
                }
              });
              Object.keys(_this.allFields).forEach(function(param) {
                addParam(built, param, null, false);
              });
              if (built.type !== _this.typeName) {
                throw new Error("");
              }
              return built;
            };
            builder.from = function(obj) {
              if (!_this.finalized) {
                throw new Error("attempting to instantiate unfinalized type " + _this.typeName);
              }
              var built = Object.create(nodePrototype);
              Object.keys(_this.allFields).forEach(function(param) {
                if (hasOwn.call(obj, param)) {
                  addParam(built, param, obj[param], true);
                } else {
                  addParam(built, param, null, false);
                }
              });
              if (built.type !== _this.typeName) {
                throw new Error("");
              }
              return built;
            };
            Object.defineProperty(builders, getBuilderName(this.typeName), {
              enumerable: true,
              value: builder
            });
            return this;
          };
          DefImpl2.prototype.field = function(name, type, defaultFn, hidden) {
            if (this.finalized) {
              console.error("Ignoring attempt to redefine field " + JSON.stringify(name) + " of finalized type " + JSON.stringify(this.typeName));
              return this;
            }
            this.ownFields[name] = new Field(name, Type.from(type), defaultFn, hidden);
            return this;
          };
          DefImpl2.prototype.finalize = function() {
            var _this = this;
            if (!this.finalized) {
              var allFields = this.allFields;
              var allSupertypes = this.allSupertypes;
              this.baseNames.forEach(function(name) {
                var def = defCache[name];
                if (def instanceof Def) {
                  def.finalize();
                  extend(allFields, def.allFields);
                  extend(allSupertypes, def.allSupertypes);
                } else {
                  var message = "unknown supertype name " + JSON.stringify(name) + " for subtype " + JSON.stringify(_this.typeName);
                  throw new Error(message);
                }
              });
              extend(allFields, this.ownFields);
              allSupertypes[this.typeName] = this;
              this.fieldNames.length = 0;
              for (var fieldName in allFields) {
                if (hasOwn.call(allFields, fieldName) && !allFields[fieldName].hidden) {
                  this.fieldNames.push(fieldName);
                }
              }
              Object.defineProperty(namedTypes, this.typeName, {
                enumerable: true,
                value: this.type
              });
              this.finalized = true;
              populateSupertypeList(this.typeName, this.supertypeList);
              if (this.buildable && this.supertypeList.lastIndexOf("Expression") >= 0) {
                wrapExpressionBuilderWithStatement(this.typeName);
              }
            }
          };
          return DefImpl2;
        }(Def)
      );
      function getSupertypeNames(typeName) {
        if (!hasOwn.call(defCache, typeName)) {
          throw new Error("");
        }
        var d = defCache[typeName];
        if (d.finalized !== true) {
          throw new Error("");
        }
        return d.supertypeList.slice(1);
      }
      function computeSupertypeLookupTable(candidates) {
        var table = {};
        var typeNames = Object.keys(defCache);
        var typeNameCount = typeNames.length;
        for (var i = 0; i < typeNameCount; ++i) {
          var typeName = typeNames[i];
          var d = defCache[typeName];
          if (d.finalized !== true) {
            throw new Error("" + typeName);
          }
          for (var j = 0; j < d.supertypeList.length; ++j) {
            var superTypeName = d.supertypeList[j];
            if (hasOwn.call(candidates, superTypeName)) {
              table[typeName] = superTypeName;
              break;
            }
          }
        }
        return table;
      }
      var builders = /* @__PURE__ */ Object.create(null);
      var nodePrototype = {};
      function defineMethod(name, func) {
        var old = nodePrototype[name];
        if (isUndefined.check(func)) {
          delete nodePrototype[name];
        } else {
          isFunction.assert(func);
          Object.defineProperty(nodePrototype, name, {
            enumerable: true,
            configurable: true,
            value: func
          });
        }
        return old;
      }
      function getBuilderName(typeName) {
        return typeName.replace(/^[A-Z]+/, function(upperCasePrefix) {
          var len = upperCasePrefix.length;
          switch (len) {
            case 0:
              return "";
            // If there's only one initial capital letter, just lower-case it.
            case 1:
              return upperCasePrefix.toLowerCase();
            default:
              return upperCasePrefix.slice(0, len - 1).toLowerCase() + upperCasePrefix.charAt(len - 1);
          }
        });
      }
      function getStatementBuilderName(typeName) {
        typeName = getBuilderName(typeName);
        return typeName.replace(/(Expression)?$/, "Statement");
      }
      var namedTypes = {};
      function getFieldNames(object) {
        var d = defFromValue(object);
        if (d) {
          return d.fieldNames.slice(0);
        }
        if ("type" in object) {
          throw new Error("did not recognize object of type " + JSON.stringify(object.type));
        }
        return Object.keys(object);
      }
      function getFieldValue(object, fieldName) {
        var d = defFromValue(object);
        if (d) {
          var field = d.allFields[fieldName];
          if (field) {
            return field.getValue(object);
          }
        }
        return object && object[fieldName];
      }
      function eachField(object, callback, context) {
        getFieldNames(object).forEach(function(name) {
          callback.call(this, name, getFieldValue(object, name));
        }, context);
      }
      function someField(object, callback, context) {
        return getFieldNames(object).some(function(name) {
          return callback.call(this, name, getFieldValue(object, name));
        }, context);
      }
      function wrapExpressionBuilderWithStatement(typeName) {
        var wrapperName = getStatementBuilderName(typeName);
        if (builders[wrapperName])
          return;
        var wrapped = builders[getBuilderName(typeName)];
        if (!wrapped)
          return;
        var builder = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return builders.expressionStatement(wrapped.apply(builders, args));
        };
        builder.from = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return builders.expressionStatement(wrapped.from.apply(builders, args));
        };
        builders[wrapperName] = builder;
      }
      function populateSupertypeList(typeName, list) {
        list.length = 0;
        list.push(typeName);
        var lastSeen = /* @__PURE__ */ Object.create(null);
        for (var pos = 0; pos < list.length; ++pos) {
          typeName = list[pos];
          var d = defCache[typeName];
          if (d.finalized !== true) {
            throw new Error("");
          }
          if (hasOwn.call(lastSeen, typeName)) {
            delete list[lastSeen[typeName]];
          }
          lastSeen[typeName] = pos;
          list.push.apply(list, d.baseNames);
        }
        for (var to = 0, from = to, len = list.length; from < len; ++from) {
          if (hasOwn.call(list, from)) {
            list[to++] = list[from];
          }
        }
        list.length = to;
      }
      function extend(into, from) {
        Object.keys(from).forEach(function(name) {
          into[name] = from[name];
        });
        return into;
      }
      function finalize() {
        Object.keys(defCache).forEach(function(name) {
          defCache[name].finalize();
        });
      }
      return {
        Type,
        builtInTypes,
        getSupertypeNames,
        computeSupertypeLookupTable,
        builders,
        defineMethod,
        getBuilderName,
        getStatementBuilderName,
        namedTypes,
        getFieldNames,
        getFieldValue,
        eachField,
        someField,
        finalize
      };
    }
    exports2.default = typesPlugin;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/path.js
var require_path = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/path.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var shared_1 = require_shared();
    var types_1 = tslib_1.__importDefault(require_types());
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    function pathPlugin(fork) {
      var types2 = fork.use(types_1.default);
      var isArray = types2.builtInTypes.array;
      var isNumber = types2.builtInTypes.number;
      var Path = function Path2(value, parentPath, name) {
        if (!(this instanceof Path2)) {
          throw new Error("Path constructor cannot be invoked without 'new'");
        }
        if (parentPath) {
          if (!(parentPath instanceof Path2)) {
            throw new Error("");
          }
        } else {
          parentPath = null;
          name = null;
        }
        this.value = value;
        this.parentPath = parentPath;
        this.name = name;
        this.__childCache = null;
      };
      var Pp = Path.prototype;
      function getChildCache(path) {
        return path.__childCache || (path.__childCache = /* @__PURE__ */ Object.create(null));
      }
      function getChildPath(path, name) {
        var cache = getChildCache(path);
        var actualChildValue = path.getValueProperty(name);
        var childPath = cache[name];
        if (!hasOwn.call(cache, name) || // Ensure consistency between cache and reality.
        childPath.value !== actualChildValue) {
          childPath = cache[name] = new path.constructor(actualChildValue, path, name);
        }
        return childPath;
      }
      Pp.getValueProperty = function getValueProperty(name) {
        return this.value[name];
      };
      Pp.get = function get() {
        var names = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          names[_i] = arguments[_i];
        }
        var path = this;
        var count = names.length;
        for (var i = 0; i < count; ++i) {
          path = getChildPath(path, names[i]);
        }
        return path;
      };
      Pp.each = function each(callback, context) {
        var childPaths = [];
        var len = this.value.length;
        var i = 0;
        for (var i = 0; i < len; ++i) {
          if (hasOwn.call(this.value, i)) {
            childPaths[i] = this.get(i);
          }
        }
        context = context || this;
        for (i = 0; i < len; ++i) {
          if (hasOwn.call(childPaths, i)) {
            callback.call(context, childPaths[i]);
          }
        }
      };
      Pp.map = function map(callback, context) {
        var result = [];
        this.each(function(childPath) {
          result.push(callback.call(this, childPath));
        }, context);
        return result;
      };
      Pp.filter = function filter(callback, context) {
        var result = [];
        this.each(function(childPath) {
          if (callback.call(this, childPath)) {
            result.push(childPath);
          }
        }, context);
        return result;
      };
      function emptyMoves() {
      }
      function getMoves(path, offset, start, end) {
        isArray.assert(path.value);
        if (offset === 0) {
          return emptyMoves;
        }
        var length = path.value.length;
        if (length < 1) {
          return emptyMoves;
        }
        var argc = arguments.length;
        if (argc === 2) {
          start = 0;
          end = length;
        } else if (argc === 3) {
          start = Math.max(start, 0);
          end = length;
        } else {
          start = Math.max(start, 0);
          end = Math.min(end, length);
        }
        isNumber.assert(start);
        isNumber.assert(end);
        var moves = /* @__PURE__ */ Object.create(null);
        var cache = getChildCache(path);
        for (var i = start; i < end; ++i) {
          if (hasOwn.call(path.value, i)) {
            var childPath = path.get(i);
            if (childPath.name !== i) {
              throw new Error("");
            }
            var newIndex = i + offset;
            childPath.name = newIndex;
            moves[newIndex] = childPath;
            delete cache[i];
          }
        }
        delete cache.length;
        return function() {
          for (var newIndex2 in moves) {
            var childPath2 = moves[newIndex2];
            if (childPath2.name !== +newIndex2) {
              throw new Error("");
            }
            cache[newIndex2] = childPath2;
            path.value[newIndex2] = childPath2.value;
          }
        };
      }
      Pp.shift = function shift() {
        var move = getMoves(this, -1);
        var result = this.value.shift();
        move();
        return result;
      };
      Pp.unshift = function unshift() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var move = getMoves(this, args.length);
        var result = this.value.unshift.apply(this.value, args);
        move();
        return result;
      };
      Pp.push = function push() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        isArray.assert(this.value);
        delete getChildCache(this).length;
        return this.value.push.apply(this.value, args);
      };
      Pp.pop = function pop() {
        isArray.assert(this.value);
        var cache = getChildCache(this);
        delete cache[this.value.length - 1];
        delete cache.length;
        return this.value.pop();
      };
      Pp.insertAt = function insertAt(index) {
        var argc = arguments.length;
        var move = getMoves(this, argc - 1, index);
        if (move === emptyMoves && argc <= 1) {
          return this;
        }
        index = Math.max(index, 0);
        for (var i = 1; i < argc; ++i) {
          this.value[index + i - 1] = arguments[i];
        }
        move();
        return this;
      };
      Pp.insertBefore = function insertBefore() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var pp = this.parentPath;
        var argc = args.length;
        var insertAtArgs = [this.name];
        for (var i = 0; i < argc; ++i) {
          insertAtArgs.push(args[i]);
        }
        return pp.insertAt.apply(pp, insertAtArgs);
      };
      Pp.insertAfter = function insertAfter() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var pp = this.parentPath;
        var argc = args.length;
        var insertAtArgs = [this.name + 1];
        for (var i = 0; i < argc; ++i) {
          insertAtArgs.push(args[i]);
        }
        return pp.insertAt.apply(pp, insertAtArgs);
      };
      function repairRelationshipWithParent(path) {
        if (!(path instanceof Path)) {
          throw new Error("");
        }
        var pp = path.parentPath;
        if (!pp) {
          return path;
        }
        var parentValue = pp.value;
        var parentCache = getChildCache(pp);
        if (parentValue[path.name] === path.value) {
          parentCache[path.name] = path;
        } else if (isArray.check(parentValue)) {
          var i = parentValue.indexOf(path.value);
          if (i >= 0) {
            parentCache[path.name = i] = path;
          }
        } else {
          parentValue[path.name] = path.value;
          parentCache[path.name] = path;
        }
        if (parentValue[path.name] !== path.value) {
          throw new Error("");
        }
        if (path.parentPath.get(path.name) !== path) {
          throw new Error("");
        }
        return path;
      }
      Pp.replace = function replace(replacement) {
        var results = [];
        var parentValue = this.parentPath.value;
        var parentCache = getChildCache(this.parentPath);
        var count = arguments.length;
        repairRelationshipWithParent(this);
        if (isArray.check(parentValue)) {
          var originalLength = parentValue.length;
          var move = getMoves(this.parentPath, count - 1, this.name + 1);
          var spliceArgs = [this.name, 1];
          for (var i = 0; i < count; ++i) {
            spliceArgs.push(arguments[i]);
          }
          var splicedOut = parentValue.splice.apply(parentValue, spliceArgs);
          if (splicedOut[0] !== this.value) {
            throw new Error("");
          }
          if (parentValue.length !== originalLength - 1 + count) {
            throw new Error("");
          }
          move();
          if (count === 0) {
            delete this.value;
            delete parentCache[this.name];
            this.__childCache = null;
          } else {
            if (parentValue[this.name] !== replacement) {
              throw new Error("");
            }
            if (this.value !== replacement) {
              this.value = replacement;
              this.__childCache = null;
            }
            for (i = 0; i < count; ++i) {
              results.push(this.parentPath.get(this.name + i));
            }
            if (results[0] !== this) {
              throw new Error("");
            }
          }
        } else if (count === 1) {
          if (this.value !== replacement) {
            this.__childCache = null;
          }
          this.value = parentValue[this.name] = replacement;
          results.push(this);
        } else if (count === 0) {
          delete parentValue[this.name];
          delete this.value;
          this.__childCache = null;
        } else {
          throw new Error("Could not replace path");
        }
        return results;
      };
      return Path;
    }
    exports2.default = pathPlugin;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/scope.js
var require_scope = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/scope.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var shared_1 = require_shared();
    var types_1 = tslib_1.__importDefault(require_types());
    var hasOwn = Object.prototype.hasOwnProperty;
    function scopePlugin(fork) {
      var types2 = fork.use(types_1.default);
      var Type = types2.Type;
      var namedTypes = types2.namedTypes;
      var Node = namedTypes.Node;
      var Expression = namedTypes.Expression;
      var isArray = types2.builtInTypes.array;
      var b2 = types2.builders;
      var Scope = function Scope2(path, parentScope) {
        if (!(this instanceof Scope2)) {
          throw new Error("Scope constructor cannot be invoked without 'new'");
        }
        if (!TypeParameterScopeType.check(path.value)) {
          ScopeType.assert(path.value);
        }
        var depth;
        if (parentScope) {
          if (!(parentScope instanceof Scope2)) {
            throw new Error("");
          }
          depth = parentScope.depth + 1;
        } else {
          parentScope = null;
          depth = 0;
        }
        Object.defineProperties(this, {
          path: { value: path },
          node: { value: path.value },
          isGlobal: { value: !parentScope, enumerable: true },
          depth: { value: depth },
          parent: { value: parentScope },
          bindings: { value: {} },
          types: { value: {} }
        });
      };
      var ScopeType = Type.or(
        // Program nodes introduce global scopes.
        namedTypes.Program,
        // Function is the supertype of FunctionExpression,
        // FunctionDeclaration, ArrowExpression, etc.
        namedTypes.Function,
        // In case you didn't know, the caught parameter shadows any variable
        // of the same name in an outer scope.
        namedTypes.CatchClause
      );
      var TypeParameterScopeType = Type.or(namedTypes.Function, namedTypes.ClassDeclaration, namedTypes.ClassExpression, namedTypes.InterfaceDeclaration, namedTypes.TSInterfaceDeclaration, namedTypes.TypeAlias, namedTypes.TSTypeAliasDeclaration);
      var FlowOrTSTypeParameterType = Type.or(namedTypes.TypeParameter, namedTypes.TSTypeParameter);
      Scope.isEstablishedBy = function(node) {
        return ScopeType.check(node) || TypeParameterScopeType.check(node);
      };
      var Sp = Scope.prototype;
      Sp.didScan = false;
      Sp.declares = function(name) {
        this.scan();
        return hasOwn.call(this.bindings, name);
      };
      Sp.declaresType = function(name) {
        this.scan();
        return hasOwn.call(this.types, name);
      };
      Sp.declareTemporary = function(prefix) {
        if (prefix) {
          if (!/^[a-z$_]/i.test(prefix)) {
            throw new Error("");
          }
        } else {
          prefix = "t$";
        }
        prefix += this.depth.toString(36) + "$";
        this.scan();
        var index = 0;
        while (this.declares(prefix + index)) {
          ++index;
        }
        var name = prefix + index;
        return this.bindings[name] = types2.builders.identifier(name);
      };
      Sp.injectTemporary = function(identifier, init) {
        identifier || (identifier = this.declareTemporary());
        var bodyPath = this.path.get("body");
        if (namedTypes.BlockStatement.check(bodyPath.value)) {
          bodyPath = bodyPath.get("body");
        }
        bodyPath.unshift(b2.variableDeclaration("var", [b2.variableDeclarator(identifier, init || null)]));
        return identifier;
      };
      Sp.scan = function(force) {
        if (force || !this.didScan) {
          for (var name in this.bindings) {
            delete this.bindings[name];
          }
          for (var name in this.types) {
            delete this.types[name];
          }
          scanScope(this.path, this.bindings, this.types);
          this.didScan = true;
        }
      };
      Sp.getBindings = function() {
        this.scan();
        return this.bindings;
      };
      Sp.getTypes = function() {
        this.scan();
        return this.types;
      };
      function scanScope(path, bindings, scopeTypes) {
        var node = path.value;
        if (TypeParameterScopeType.check(node)) {
          var params = path.get("typeParameters", "params");
          if (isArray.check(params.value)) {
            params.each(function(childPath) {
              addTypeParameter(childPath, scopeTypes);
            });
          }
        }
        if (ScopeType.check(node)) {
          if (namedTypes.CatchClause.check(node)) {
            addPattern(path.get("param"), bindings);
          } else {
            recursiveScanScope(path, bindings, scopeTypes);
          }
        }
      }
      function recursiveScanScope(path, bindings, scopeTypes) {
        var node = path.value;
        if (path.parent && namedTypes.FunctionExpression.check(path.parent.node) && path.parent.node.id) {
          addPattern(path.parent.get("id"), bindings);
        }
        if (!node) {
        } else if (isArray.check(node)) {
          path.each(function(childPath) {
            recursiveScanChild(childPath, bindings, scopeTypes);
          });
        } else if (namedTypes.Function.check(node)) {
          path.get("params").each(function(paramPath) {
            addPattern(paramPath, bindings);
          });
          recursiveScanChild(path.get("body"), bindings, scopeTypes);
          recursiveScanScope(path.get("typeParameters"), bindings, scopeTypes);
        } else if (namedTypes.TypeAlias && namedTypes.TypeAlias.check(node) || namedTypes.InterfaceDeclaration && namedTypes.InterfaceDeclaration.check(node) || namedTypes.TSTypeAliasDeclaration && namedTypes.TSTypeAliasDeclaration.check(node) || namedTypes.TSInterfaceDeclaration && namedTypes.TSInterfaceDeclaration.check(node)) {
          addTypePattern(path.get("id"), scopeTypes);
        } else if (namedTypes.VariableDeclarator.check(node)) {
          addPattern(path.get("id"), bindings);
          recursiveScanChild(path.get("init"), bindings, scopeTypes);
        } else if (node.type === "ImportSpecifier" || node.type === "ImportNamespaceSpecifier" || node.type === "ImportDefaultSpecifier") {
          addPattern(
            // Esprima used to use the .name field to refer to the local
            // binding identifier for ImportSpecifier nodes, but .id for
            // ImportNamespaceSpecifier and ImportDefaultSpecifier nodes.
            // ESTree/Acorn/ESpree use .local for all three node types.
            path.get(node.local ? "local" : node.name ? "name" : "id"),
            bindings
          );
        } else if (Node.check(node) && !Expression.check(node)) {
          types2.eachField(node, function(name, child) {
            var childPath = path.get(name);
            if (!pathHasValue(childPath, child)) {
              throw new Error("");
            }
            recursiveScanChild(childPath, bindings, scopeTypes);
          });
        }
      }
      function pathHasValue(path, value) {
        if (path.value === value) {
          return true;
        }
        if (Array.isArray(path.value) && path.value.length === 0 && Array.isArray(value) && value.length === 0) {
          return true;
        }
        return false;
      }
      function recursiveScanChild(path, bindings, scopeTypes) {
        var node = path.value;
        if (!node || Expression.check(node)) {
        } else if (namedTypes.FunctionDeclaration.check(node) && node.id !== null) {
          addPattern(path.get("id"), bindings);
        } else if (namedTypes.ClassDeclaration && namedTypes.ClassDeclaration.check(node) && node.id !== null) {
          addPattern(path.get("id"), bindings);
          recursiveScanScope(path.get("typeParameters"), bindings, scopeTypes);
        } else if (namedTypes.InterfaceDeclaration && namedTypes.InterfaceDeclaration.check(node) || namedTypes.TSInterfaceDeclaration && namedTypes.TSInterfaceDeclaration.check(node)) {
          addTypePattern(path.get("id"), scopeTypes);
        } else if (ScopeType.check(node)) {
          if (namedTypes.CatchClause.check(node) && // TODO Broaden this to accept any pattern.
          namedTypes.Identifier.check(node.param)) {
            var catchParamName = node.param.name;
            var hadBinding = hasOwn.call(bindings, catchParamName);
            recursiveScanScope(path.get("body"), bindings, scopeTypes);
            if (!hadBinding) {
              delete bindings[catchParamName];
            }
          }
        } else {
          recursiveScanScope(path, bindings, scopeTypes);
        }
      }
      function addPattern(patternPath, bindings) {
        var pattern = patternPath.value;
        namedTypes.Pattern.assert(pattern);
        if (namedTypes.Identifier.check(pattern)) {
          if (hasOwn.call(bindings, pattern.name)) {
            bindings[pattern.name].push(patternPath);
          } else {
            bindings[pattern.name] = [patternPath];
          }
        } else if (namedTypes.AssignmentPattern && namedTypes.AssignmentPattern.check(pattern)) {
          addPattern(patternPath.get("left"), bindings);
        } else if (namedTypes.ObjectPattern && namedTypes.ObjectPattern.check(pattern)) {
          patternPath.get("properties").each(function(propertyPath) {
            var property = propertyPath.value;
            if (namedTypes.Pattern.check(property)) {
              addPattern(propertyPath, bindings);
            } else if (namedTypes.Property.check(property) || namedTypes.ObjectProperty && namedTypes.ObjectProperty.check(property)) {
              addPattern(propertyPath.get("value"), bindings);
            } else if (namedTypes.SpreadProperty && namedTypes.SpreadProperty.check(property)) {
              addPattern(propertyPath.get("argument"), bindings);
            }
          });
        } else if (namedTypes.ArrayPattern && namedTypes.ArrayPattern.check(pattern)) {
          patternPath.get("elements").each(function(elementPath) {
            var element = elementPath.value;
            if (namedTypes.Pattern.check(element)) {
              addPattern(elementPath, bindings);
            } else if (namedTypes.SpreadElement && namedTypes.SpreadElement.check(element)) {
              addPattern(elementPath.get("argument"), bindings);
            }
          });
        } else if (namedTypes.PropertyPattern && namedTypes.PropertyPattern.check(pattern)) {
          addPattern(patternPath.get("pattern"), bindings);
        } else if (namedTypes.SpreadElementPattern && namedTypes.SpreadElementPattern.check(pattern) || namedTypes.RestElement && namedTypes.RestElement.check(pattern) || namedTypes.SpreadPropertyPattern && namedTypes.SpreadPropertyPattern.check(pattern)) {
          addPattern(patternPath.get("argument"), bindings);
        }
      }
      function addTypePattern(patternPath, types3) {
        var pattern = patternPath.value;
        namedTypes.Pattern.assert(pattern);
        if (namedTypes.Identifier.check(pattern)) {
          if (hasOwn.call(types3, pattern.name)) {
            types3[pattern.name].push(patternPath);
          } else {
            types3[pattern.name] = [patternPath];
          }
        }
      }
      function addTypeParameter(parameterPath, types3) {
        var parameter = parameterPath.value;
        FlowOrTSTypeParameterType.assert(parameter);
        if (hasOwn.call(types3, parameter.name)) {
          types3[parameter.name].push(parameterPath);
        } else {
          types3[parameter.name] = [parameterPath];
        }
      }
      Sp.lookup = function(name) {
        for (var scope = this; scope; scope = scope.parent)
          if (scope.declares(name))
            break;
        return scope;
      };
      Sp.lookupType = function(name) {
        for (var scope = this; scope; scope = scope.parent)
          if (scope.declaresType(name))
            break;
        return scope;
      };
      Sp.getGlobalScope = function() {
        var scope = this;
        while (!scope.isGlobal)
          scope = scope.parent;
        return scope;
      };
      return Scope;
    }
    exports2.default = scopePlugin;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/node-path.js
var require_node_path = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/node-path.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var types_1 = tslib_1.__importDefault(require_types());
    var path_1 = tslib_1.__importDefault(require_path());
    var scope_1 = tslib_1.__importDefault(require_scope());
    var shared_1 = require_shared();
    function nodePathPlugin(fork) {
      var types2 = fork.use(types_1.default);
      var n = types2.namedTypes;
      var b2 = types2.builders;
      var isNumber = types2.builtInTypes.number;
      var isArray = types2.builtInTypes.array;
      var Path = fork.use(path_1.default);
      var Scope = fork.use(scope_1.default);
      var NodePath = function NodePath2(value, parentPath, name) {
        if (!(this instanceof NodePath2)) {
          throw new Error("NodePath constructor cannot be invoked without 'new'");
        }
        Path.call(this, value, parentPath, name);
      };
      var NPp = NodePath.prototype = Object.create(Path.prototype, {
        constructor: {
          value: NodePath,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperties(NPp, {
        node: {
          get: function() {
            Object.defineProperty(this, "node", {
              configurable: true,
              value: this._computeNode()
            });
            return this.node;
          }
        },
        parent: {
          get: function() {
            Object.defineProperty(this, "parent", {
              configurable: true,
              value: this._computeParent()
            });
            return this.parent;
          }
        },
        scope: {
          get: function() {
            Object.defineProperty(this, "scope", {
              configurable: true,
              value: this._computeScope()
            });
            return this.scope;
          }
        }
      });
      NPp.replace = function() {
        delete this.node;
        delete this.parent;
        delete this.scope;
        return Path.prototype.replace.apply(this, arguments);
      };
      NPp.prune = function() {
        var remainingNodePath = this.parent;
        this.replace();
        return cleanUpNodesAfterPrune(remainingNodePath);
      };
      NPp._computeNode = function() {
        var value = this.value;
        if (n.Node.check(value)) {
          return value;
        }
        var pp = this.parentPath;
        return pp && pp.node || null;
      };
      NPp._computeParent = function() {
        var value = this.value;
        var pp = this.parentPath;
        if (!n.Node.check(value)) {
          while (pp && !n.Node.check(pp.value)) {
            pp = pp.parentPath;
          }
          if (pp) {
            pp = pp.parentPath;
          }
        }
        while (pp && !n.Node.check(pp.value)) {
          pp = pp.parentPath;
        }
        return pp || null;
      };
      NPp._computeScope = function() {
        var value = this.value;
        var pp = this.parentPath;
        var scope = pp && pp.scope;
        if (n.Node.check(value) && Scope.isEstablishedBy(value)) {
          scope = new Scope(this, scope);
        }
        return scope || null;
      };
      NPp.getValueProperty = function(name) {
        return types2.getFieldValue(this.value, name);
      };
      NPp.needsParens = function(assumeExpressionContext) {
        var pp = this.parentPath;
        if (!pp) {
          return false;
        }
        var node = this.value;
        if (!n.Expression.check(node)) {
          return false;
        }
        if (node.type === "Identifier") {
          return false;
        }
        while (!n.Node.check(pp.value)) {
          pp = pp.parentPath;
          if (!pp) {
            return false;
          }
        }
        var parent = pp.value;
        switch (node.type) {
          case "UnaryExpression":
          case "SpreadElement":
          case "SpreadProperty":
            return parent.type === "MemberExpression" && this.name === "object" && parent.object === node;
          case "BinaryExpression":
          case "LogicalExpression":
            switch (parent.type) {
              case "CallExpression":
                return this.name === "callee" && parent.callee === node;
              case "UnaryExpression":
              case "SpreadElement":
              case "SpreadProperty":
                return true;
              case "MemberExpression":
                return this.name === "object" && parent.object === node;
              case "BinaryExpression":
              case "LogicalExpression": {
                var n_1 = node;
                var po = parent.operator;
                var pp_1 = PRECEDENCE[po];
                var no = n_1.operator;
                var np = PRECEDENCE[no];
                if (pp_1 > np) {
                  return true;
                }
                if (pp_1 === np && this.name === "right") {
                  if (parent.right !== n_1) {
                    throw new Error("Nodes must be equal");
                  }
                  return true;
                }
              }
              default:
                return false;
            }
          case "SequenceExpression":
            switch (parent.type) {
              case "ForStatement":
                return false;
              case "ExpressionStatement":
                return this.name !== "expression";
              default:
                return true;
            }
          case "YieldExpression":
            switch (parent.type) {
              case "BinaryExpression":
              case "LogicalExpression":
              case "UnaryExpression":
              case "SpreadElement":
              case "SpreadProperty":
              case "CallExpression":
              case "MemberExpression":
              case "NewExpression":
              case "ConditionalExpression":
              case "YieldExpression":
                return true;
              default:
                return false;
            }
          case "Literal":
            return parent.type === "MemberExpression" && isNumber.check(node.value) && this.name === "object" && parent.object === node;
          case "AssignmentExpression":
          case "ConditionalExpression":
            switch (parent.type) {
              case "UnaryExpression":
              case "SpreadElement":
              case "SpreadProperty":
              case "BinaryExpression":
              case "LogicalExpression":
                return true;
              case "CallExpression":
                return this.name === "callee" && parent.callee === node;
              case "ConditionalExpression":
                return this.name === "test" && parent.test === node;
              case "MemberExpression":
                return this.name === "object" && parent.object === node;
              default:
                return false;
            }
          default:
            if (parent.type === "NewExpression" && this.name === "callee" && parent.callee === node) {
              return containsCallExpression(node);
            }
        }
        if (assumeExpressionContext !== true && !this.canBeFirstInStatement() && this.firstInStatement())
          return true;
        return false;
      };
      function isBinary(node) {
        return n.BinaryExpression.check(node) || n.LogicalExpression.check(node);
      }
      function isUnaryLike(node) {
        return n.UnaryExpression.check(node) || n.SpreadElement && n.SpreadElement.check(node) || n.SpreadProperty && n.SpreadProperty.check(node);
      }
      var PRECEDENCE = {};
      [
        ["||"],
        ["&&"],
        ["|"],
        ["^"],
        ["&"],
        ["==", "===", "!=", "!=="],
        ["<", ">", "<=", ">=", "in", "instanceof"],
        [">>", "<<", ">>>"],
        ["+", "-"],
        ["*", "/", "%"]
      ].forEach(function(tier, i) {
        tier.forEach(function(op) {
          PRECEDENCE[op] = i;
        });
      });
      function containsCallExpression(node) {
        if (n.CallExpression.check(node)) {
          return true;
        }
        if (isArray.check(node)) {
          return node.some(containsCallExpression);
        }
        if (n.Node.check(node)) {
          return types2.someField(node, function(_name, child) {
            return containsCallExpression(child);
          });
        }
        return false;
      }
      NPp.canBeFirstInStatement = function() {
        var node = this.node;
        return !n.FunctionExpression.check(node) && !n.ObjectExpression.check(node);
      };
      NPp.firstInStatement = function() {
        return firstInStatement(this);
      };
      function firstInStatement(path) {
        for (var node, parent; path.parent; path = path.parent) {
          node = path.node;
          parent = path.parent.node;
          if (n.BlockStatement.check(parent) && path.parent.name === "body" && path.name === 0) {
            if (parent.body[0] !== node) {
              throw new Error("Nodes must be equal");
            }
            return true;
          }
          if (n.ExpressionStatement.check(parent) && path.name === "expression") {
            if (parent.expression !== node) {
              throw new Error("Nodes must be equal");
            }
            return true;
          }
          if (n.SequenceExpression.check(parent) && path.parent.name === "expressions" && path.name === 0) {
            if (parent.expressions[0] !== node) {
              throw new Error("Nodes must be equal");
            }
            continue;
          }
          if (n.CallExpression.check(parent) && path.name === "callee") {
            if (parent.callee !== node) {
              throw new Error("Nodes must be equal");
            }
            continue;
          }
          if (n.MemberExpression.check(parent) && path.name === "object") {
            if (parent.object !== node) {
              throw new Error("Nodes must be equal");
            }
            continue;
          }
          if (n.ConditionalExpression.check(parent) && path.name === "test") {
            if (parent.test !== node) {
              throw new Error("Nodes must be equal");
            }
            continue;
          }
          if (isBinary(parent) && path.name === "left") {
            if (parent.left !== node) {
              throw new Error("Nodes must be equal");
            }
            continue;
          }
          if (n.UnaryExpression.check(parent) && !parent.prefix && path.name === "argument") {
            if (parent.argument !== node) {
              throw new Error("Nodes must be equal");
            }
            continue;
          }
          return false;
        }
        return true;
      }
      function cleanUpNodesAfterPrune(remainingNodePath) {
        if (n.VariableDeclaration.check(remainingNodePath.node)) {
          var declarations = remainingNodePath.get("declarations").value;
          if (!declarations || declarations.length === 0) {
            return remainingNodePath.prune();
          }
        } else if (n.ExpressionStatement.check(remainingNodePath.node)) {
          if (!remainingNodePath.get("expression").value) {
            return remainingNodePath.prune();
          }
        } else if (n.IfStatement.check(remainingNodePath.node)) {
          cleanUpIfStatementAfterPrune(remainingNodePath);
        }
        return remainingNodePath;
      }
      function cleanUpIfStatementAfterPrune(ifStatement) {
        var testExpression = ifStatement.get("test").value;
        var alternate = ifStatement.get("alternate").value;
        var consequent = ifStatement.get("consequent").value;
        if (!consequent && !alternate) {
          var testExpressionStatement = b2.expressionStatement(testExpression);
          ifStatement.replace(testExpressionStatement);
        } else if (!consequent && alternate) {
          var negatedTestExpression = b2.unaryExpression("!", testExpression, true);
          if (n.UnaryExpression.check(testExpression) && testExpression.operator === "!") {
            negatedTestExpression = testExpression.argument;
          }
          ifStatement.get("test").replace(negatedTestExpression);
          ifStatement.get("consequent").replace(alternate);
          ifStatement.get("alternate").replace();
        }
      }
      return NodePath;
    }
    exports2.default = nodePathPlugin;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/path-visitor.js
var require_path_visitor = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/path-visitor.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var types_1 = tslib_1.__importDefault(require_types());
    var node_path_1 = tslib_1.__importDefault(require_node_path());
    var shared_1 = require_shared();
    var hasOwn = Object.prototype.hasOwnProperty;
    function pathVisitorPlugin(fork) {
      var types2 = fork.use(types_1.default);
      var NodePath = fork.use(node_path_1.default);
      var isArray = types2.builtInTypes.array;
      var isObject = types2.builtInTypes.object;
      var isFunction = types2.builtInTypes.function;
      var undefined2;
      var PathVisitor = function PathVisitor2() {
        if (!(this instanceof PathVisitor2)) {
          throw new Error("PathVisitor constructor cannot be invoked without 'new'");
        }
        this._reusableContextStack = [];
        this._methodNameTable = computeMethodNameTable(this);
        this._shouldVisitComments = hasOwn.call(this._methodNameTable, "Block") || hasOwn.call(this._methodNameTable, "Line");
        this.Context = makeContextConstructor(this);
        this._visiting = false;
        this._changeReported = false;
      };
      function computeMethodNameTable(visitor) {
        var typeNames = /* @__PURE__ */ Object.create(null);
        for (var methodName in visitor) {
          if (/^visit[A-Z]/.test(methodName)) {
            typeNames[methodName.slice("visit".length)] = true;
          }
        }
        var supertypeTable = types2.computeSupertypeLookupTable(typeNames);
        var methodNameTable = /* @__PURE__ */ Object.create(null);
        var typeNameKeys = Object.keys(supertypeTable);
        var typeNameCount = typeNameKeys.length;
        for (var i = 0; i < typeNameCount; ++i) {
          var typeName = typeNameKeys[i];
          methodName = "visit" + supertypeTable[typeName];
          if (isFunction.check(visitor[methodName])) {
            methodNameTable[typeName] = methodName;
          }
        }
        return methodNameTable;
      }
      PathVisitor.fromMethodsObject = function fromMethodsObject(methods) {
        if (methods instanceof PathVisitor) {
          return methods;
        }
        if (!isObject.check(methods)) {
          return new PathVisitor();
        }
        var Visitor = function Visitor2() {
          if (!(this instanceof Visitor2)) {
            throw new Error("Visitor constructor cannot be invoked without 'new'");
          }
          PathVisitor.call(this);
        };
        var Vp = Visitor.prototype = Object.create(PVp);
        Vp.constructor = Visitor;
        extend(Vp, methods);
        extend(Visitor, PathVisitor);
        isFunction.assert(Visitor.fromMethodsObject);
        isFunction.assert(Visitor.visit);
        return new Visitor();
      };
      function extend(target, source) {
        for (var property in source) {
          if (hasOwn.call(source, property)) {
            target[property] = source[property];
          }
        }
        return target;
      }
      PathVisitor.visit = function visit2(node, methods) {
        return PathVisitor.fromMethodsObject(methods).visit(node);
      };
      var PVp = PathVisitor.prototype;
      PVp.visit = function() {
        if (this._visiting) {
          throw new Error("Recursively calling visitor.visit(path) resets visitor state. Try this.visit(path) or this.traverse(path) instead.");
        }
        this._visiting = true;
        this._changeReported = false;
        this._abortRequested = false;
        var argc = arguments.length;
        var args = new Array(argc);
        for (var i = 0; i < argc; ++i) {
          args[i] = arguments[i];
        }
        if (!(args[0] instanceof NodePath)) {
          args[0] = new NodePath({ root: args[0] }).get("root");
        }
        this.reset.apply(this, args);
        var didNotThrow;
        try {
          var root = this.visitWithoutReset(args[0]);
          didNotThrow = true;
        } finally {
          this._visiting = false;
          if (!didNotThrow && this._abortRequested) {
            return args[0].value;
          }
        }
        return root;
      };
      PVp.AbortRequest = function AbortRequest() {
      };
      PVp.abort = function() {
        var visitor = this;
        visitor._abortRequested = true;
        var request = new visitor.AbortRequest();
        request.cancel = function() {
          visitor._abortRequested = false;
        };
        throw request;
      };
      PVp.reset = function(_path) {
      };
      PVp.visitWithoutReset = function(path) {
        if (this instanceof this.Context) {
          return this.visitor.visitWithoutReset(path);
        }
        if (!(path instanceof NodePath)) {
          throw new Error("");
        }
        var value = path.value;
        var methodName = value && typeof value === "object" && typeof value.type === "string" && this._methodNameTable[value.type];
        if (methodName) {
          var context = this.acquireContext(path);
          try {
            return context.invokeVisitorMethod(methodName);
          } finally {
            this.releaseContext(context);
          }
        } else {
          return visitChildren(path, this);
        }
      };
      function visitChildren(path, visitor) {
        if (!(path instanceof NodePath)) {
          throw new Error("");
        }
        if (!(visitor instanceof PathVisitor)) {
          throw new Error("");
        }
        var value = path.value;
        if (isArray.check(value)) {
          path.each(visitor.visitWithoutReset, visitor);
        } else if (!isObject.check(value)) {
        } else {
          var childNames = types2.getFieldNames(value);
          if (visitor._shouldVisitComments && value.comments && childNames.indexOf("comments") < 0) {
            childNames.push("comments");
          }
          var childCount = childNames.length;
          var childPaths = [];
          for (var i = 0; i < childCount; ++i) {
            var childName = childNames[i];
            if (!hasOwn.call(value, childName)) {
              value[childName] = types2.getFieldValue(value, childName);
            }
            childPaths.push(path.get(childName));
          }
          for (var i = 0; i < childCount; ++i) {
            visitor.visitWithoutReset(childPaths[i]);
          }
        }
        return path.value;
      }
      PVp.acquireContext = function(path) {
        if (this._reusableContextStack.length === 0) {
          return new this.Context(path);
        }
        return this._reusableContextStack.pop().reset(path);
      };
      PVp.releaseContext = function(context) {
        if (!(context instanceof this.Context)) {
          throw new Error("");
        }
        this._reusableContextStack.push(context);
        context.currentPath = null;
      };
      PVp.reportChanged = function() {
        this._changeReported = true;
      };
      PVp.wasChangeReported = function() {
        return this._changeReported;
      };
      function makeContextConstructor(visitor) {
        function Context(path) {
          if (!(this instanceof Context)) {
            throw new Error("");
          }
          if (!(this instanceof PathVisitor)) {
            throw new Error("");
          }
          if (!(path instanceof NodePath)) {
            throw new Error("");
          }
          Object.defineProperty(this, "visitor", {
            value: visitor,
            writable: false,
            enumerable: true,
            configurable: false
          });
          this.currentPath = path;
          this.needToCallTraverse = true;
          Object.seal(this);
        }
        if (!(visitor instanceof PathVisitor)) {
          throw new Error("");
        }
        var Cp = Context.prototype = Object.create(visitor);
        Cp.constructor = Context;
        extend(Cp, sharedContextProtoMethods);
        return Context;
      }
      var sharedContextProtoMethods = /* @__PURE__ */ Object.create(null);
      sharedContextProtoMethods.reset = function reset(path) {
        if (!(this instanceof this.Context)) {
          throw new Error("");
        }
        if (!(path instanceof NodePath)) {
          throw new Error("");
        }
        this.currentPath = path;
        this.needToCallTraverse = true;
        return this;
      };
      sharedContextProtoMethods.invokeVisitorMethod = function invokeVisitorMethod(methodName) {
        if (!(this instanceof this.Context)) {
          throw new Error("");
        }
        if (!(this.currentPath instanceof NodePath)) {
          throw new Error("");
        }
        var result = this.visitor[methodName].call(this, this.currentPath);
        if (result === false) {
          this.needToCallTraverse = false;
        } else if (result !== undefined2) {
          this.currentPath = this.currentPath.replace(result)[0];
          if (this.needToCallTraverse) {
            this.traverse(this.currentPath);
          }
        }
        if (this.needToCallTraverse !== false) {
          throw new Error("Must either call this.traverse or return false in " + methodName);
        }
        var path = this.currentPath;
        return path && path.value;
      };
      sharedContextProtoMethods.traverse = function traverse(path, newVisitor) {
        if (!(this instanceof this.Context)) {
          throw new Error("");
        }
        if (!(path instanceof NodePath)) {
          throw new Error("");
        }
        if (!(this.currentPath instanceof NodePath)) {
          throw new Error("");
        }
        this.needToCallTraverse = false;
        return visitChildren(path, PathVisitor.fromMethodsObject(newVisitor || this.visitor));
      };
      sharedContextProtoMethods.visit = function visit2(path, newVisitor) {
        if (!(this instanceof this.Context)) {
          throw new Error("");
        }
        if (!(path instanceof NodePath)) {
          throw new Error("");
        }
        if (!(this.currentPath instanceof NodePath)) {
          throw new Error("");
        }
        this.needToCallTraverse = false;
        return PathVisitor.fromMethodsObject(newVisitor || this.visitor).visitWithoutReset(path);
      };
      sharedContextProtoMethods.reportChanged = function reportChanged() {
        this.visitor.reportChanged();
      };
      sharedContextProtoMethods.abort = function abort() {
        this.needToCallTraverse = false;
        this.visitor.abort();
      };
      return PathVisitor;
    }
    exports2.default = pathVisitorPlugin;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/equiv.js
var require_equiv = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/equiv.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var shared_1 = require_shared();
    var types_1 = tslib_1.__importDefault(require_types());
    function default_1(fork) {
      var types2 = fork.use(types_1.default);
      var getFieldNames = types2.getFieldNames;
      var getFieldValue = types2.getFieldValue;
      var isArray = types2.builtInTypes.array;
      var isObject = types2.builtInTypes.object;
      var isDate = types2.builtInTypes.Date;
      var isRegExp = types2.builtInTypes.RegExp;
      var hasOwn = Object.prototype.hasOwnProperty;
      function astNodesAreEquivalent(a, b2, problemPath) {
        if (isArray.check(problemPath)) {
          problemPath.length = 0;
        } else {
          problemPath = null;
        }
        return areEquivalent(a, b2, problemPath);
      }
      astNodesAreEquivalent.assert = function(a, b2) {
        var problemPath = [];
        if (!astNodesAreEquivalent(a, b2, problemPath)) {
          if (problemPath.length === 0) {
            if (a !== b2) {
              throw new Error("Nodes must be equal");
            }
          } else {
            throw new Error("Nodes differ in the following path: " + problemPath.map(subscriptForProperty).join(""));
          }
        }
      };
      function subscriptForProperty(property) {
        if (/[_$a-z][_$a-z0-9]*/i.test(property)) {
          return "." + property;
        }
        return "[" + JSON.stringify(property) + "]";
      }
      function areEquivalent(a, b2, problemPath) {
        if (a === b2) {
          return true;
        }
        if (isArray.check(a)) {
          return arraysAreEquivalent(a, b2, problemPath);
        }
        if (isObject.check(a)) {
          return objectsAreEquivalent(a, b2, problemPath);
        }
        if (isDate.check(a)) {
          return isDate.check(b2) && +a === +b2;
        }
        if (isRegExp.check(a)) {
          return isRegExp.check(b2) && (a.source === b2.source && a.global === b2.global && a.multiline === b2.multiline && a.ignoreCase === b2.ignoreCase);
        }
        return a == b2;
      }
      function arraysAreEquivalent(a, b2, problemPath) {
        isArray.assert(a);
        var aLength = a.length;
        if (!isArray.check(b2) || b2.length !== aLength) {
          if (problemPath) {
            problemPath.push("length");
          }
          return false;
        }
        for (var i = 0; i < aLength; ++i) {
          if (problemPath) {
            problemPath.push(i);
          }
          if (i in a !== i in b2) {
            return false;
          }
          if (!areEquivalent(a[i], b2[i], problemPath)) {
            return false;
          }
          if (problemPath) {
            var problemPathTail = problemPath.pop();
            if (problemPathTail !== i) {
              throw new Error("" + problemPathTail);
            }
          }
        }
        return true;
      }
      function objectsAreEquivalent(a, b2, problemPath) {
        isObject.assert(a);
        if (!isObject.check(b2)) {
          return false;
        }
        if (a.type !== b2.type) {
          if (problemPath) {
            problemPath.push("type");
          }
          return false;
        }
        var aNames = getFieldNames(a);
        var aNameCount = aNames.length;
        var bNames = getFieldNames(b2);
        var bNameCount = bNames.length;
        if (aNameCount === bNameCount) {
          for (var i = 0; i < aNameCount; ++i) {
            var name = aNames[i];
            var aChild = getFieldValue(a, name);
            var bChild = getFieldValue(b2, name);
            if (problemPath) {
              problemPath.push(name);
            }
            if (!areEquivalent(aChild, bChild, problemPath)) {
              return false;
            }
            if (problemPath) {
              var problemPathTail = problemPath.pop();
              if (problemPathTail !== name) {
                throw new Error("" + problemPathTail);
              }
            }
          }
          return true;
        }
        if (!problemPath) {
          return false;
        }
        var seenNames = /* @__PURE__ */ Object.create(null);
        for (i = 0; i < aNameCount; ++i) {
          seenNames[aNames[i]] = true;
        }
        for (i = 0; i < bNameCount; ++i) {
          name = bNames[i];
          if (!hasOwn.call(seenNames, name)) {
            problemPath.push(name);
            return false;
          }
          delete seenNames[name];
        }
        for (name in seenNames) {
          problemPath.push(name);
          break;
        }
        return false;
      }
      return astNodesAreEquivalent;
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/fork.js
var require_fork = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/fork.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var types_1 = tslib_1.__importDefault(require_types());
    var path_visitor_1 = tslib_1.__importDefault(require_path_visitor());
    var equiv_1 = tslib_1.__importDefault(require_equiv());
    var path_1 = tslib_1.__importDefault(require_path());
    var node_path_1 = tslib_1.__importDefault(require_node_path());
    var shared_1 = require_shared();
    function default_1(plugins) {
      var fork = createFork();
      var types2 = fork.use(types_1.default);
      plugins.forEach(fork.use);
      types2.finalize();
      var PathVisitor = fork.use(path_visitor_1.default);
      return {
        Type: types2.Type,
        builtInTypes: types2.builtInTypes,
        namedTypes: types2.namedTypes,
        builders: types2.builders,
        defineMethod: types2.defineMethod,
        getFieldNames: types2.getFieldNames,
        getFieldValue: types2.getFieldValue,
        eachField: types2.eachField,
        someField: types2.someField,
        getSupertypeNames: types2.getSupertypeNames,
        getBuilderName: types2.getBuilderName,
        astNodesAreEquivalent: fork.use(equiv_1.default),
        finalize: types2.finalize,
        Path: fork.use(path_1.default),
        NodePath: fork.use(node_path_1.default),
        PathVisitor,
        use: fork.use,
        visit: PathVisitor.visit
      };
    }
    exports2.default = default_1;
    function createFork() {
      var used = [];
      var usedResult = [];
      function use(plugin) {
        var idx = used.indexOf(plugin);
        if (idx === -1) {
          idx = used.length;
          used.push(plugin);
          usedResult[idx] = plugin(fork);
        }
        return usedResult[idx];
      }
      var fork = { use };
      return fork;
    }
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/operators/core.js
var require_core = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/operators/core.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var shared_1 = require_shared();
    function default_1() {
      return {
        BinaryOperators: [
          "==",
          "!=",
          "===",
          "!==",
          "<",
          "<=",
          ">",
          ">=",
          "<<",
          ">>",
          ">>>",
          "+",
          "-",
          "*",
          "/",
          "%",
          "&",
          "|",
          "^",
          "in",
          "instanceof"
        ],
        AssignmentOperators: [
          "=",
          "+=",
          "-=",
          "*=",
          "/=",
          "%=",
          "<<=",
          ">>=",
          ">>>=",
          "|=",
          "^=",
          "&="
        ],
        LogicalOperators: [
          "||",
          "&&"
        ]
      };
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/operators/es2016.js
var require_es2016 = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/operators/es2016.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var shared_1 = require_shared();
    var core_1 = tslib_1.__importDefault(require_core());
    function default_1(fork) {
      var result = fork.use(core_1.default);
      if (result.BinaryOperators.indexOf("**") < 0) {
        result.BinaryOperators.push("**");
      }
      if (result.AssignmentOperators.indexOf("**=") < 0) {
        result.AssignmentOperators.push("**=");
      }
      return result;
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/operators/es2020.js
var require_es2020 = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/operators/es2020.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var shared_1 = require_shared();
    var es2016_1 = tslib_1.__importDefault(require_es2016());
    function default_1(fork) {
      var result = fork.use(es2016_1.default);
      if (result.LogicalOperators.indexOf("??") < 0) {
        result.LogicalOperators.push("??");
      }
      return result;
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/operators/es2021.js
var require_es2021 = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/operators/es2021.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var shared_1 = require_shared();
    var es2020_1 = tslib_1.__importDefault(require_es2020());
    function default_1(fork) {
      var result = fork.use(es2020_1.default);
      result.LogicalOperators.forEach(function(op) {
        var assignOp = op + "=";
        if (result.AssignmentOperators.indexOf(assignOp) < 0) {
          result.AssignmentOperators.push(assignOp);
        }
      });
      return result;
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/core.js
var require_core2 = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/core.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var core_1 = tslib_1.__importDefault(require_core());
    var types_1 = tslib_1.__importDefault(require_types());
    var shared_1 = tslib_1.__importStar(require_shared());
    function default_1(fork) {
      var types2 = fork.use(types_1.default);
      var Type = types2.Type;
      var def = Type.def;
      var or = Type.or;
      var shared = fork.use(shared_1.default);
      var defaults = shared.defaults;
      var geq = shared.geq;
      var _a = fork.use(core_1.default), BinaryOperators = _a.BinaryOperators, AssignmentOperators = _a.AssignmentOperators, LogicalOperators = _a.LogicalOperators;
      def("Printable").field("loc", or(def("SourceLocation"), null), defaults["null"], true);
      def("Node").bases("Printable").field("type", String).field("comments", or([def("Comment")], null), defaults["null"], true);
      def("SourceLocation").field("start", def("Position")).field("end", def("Position")).field("source", or(String, null), defaults["null"]);
      def("Position").field("line", geq(1)).field("column", geq(0));
      def("File").bases("Node").build("program", "name").field("program", def("Program")).field("name", or(String, null), defaults["null"]);
      def("Program").bases("Node").build("body").field("body", [def("Statement")]);
      def("Function").bases("Node").field("id", or(def("Identifier"), null), defaults["null"]).field("params", [def("Pattern")]).field("body", def("BlockStatement")).field("generator", Boolean, defaults["false"]).field("async", Boolean, defaults["false"]);
      def("Statement").bases("Node");
      def("EmptyStatement").bases("Statement").build();
      def("BlockStatement").bases("Statement").build("body").field("body", [def("Statement")]);
      def("ExpressionStatement").bases("Statement").build("expression").field("expression", def("Expression"));
      def("IfStatement").bases("Statement").build("test", "consequent", "alternate").field("test", def("Expression")).field("consequent", def("Statement")).field("alternate", or(def("Statement"), null), defaults["null"]);
      def("LabeledStatement").bases("Statement").build("label", "body").field("label", def("Identifier")).field("body", def("Statement"));
      def("BreakStatement").bases("Statement").build("label").field("label", or(def("Identifier"), null), defaults["null"]);
      def("ContinueStatement").bases("Statement").build("label").field("label", or(def("Identifier"), null), defaults["null"]);
      def("WithStatement").bases("Statement").build("object", "body").field("object", def("Expression")).field("body", def("Statement"));
      def("SwitchStatement").bases("Statement").build("discriminant", "cases", "lexical").field("discriminant", def("Expression")).field("cases", [def("SwitchCase")]).field("lexical", Boolean, defaults["false"]);
      def("ReturnStatement").bases("Statement").build("argument").field("argument", or(def("Expression"), null));
      def("ThrowStatement").bases("Statement").build("argument").field("argument", def("Expression"));
      def("TryStatement").bases("Statement").build("block", "handler", "finalizer").field("block", def("BlockStatement")).field("handler", or(def("CatchClause"), null), function() {
        return this.handlers && this.handlers[0] || null;
      }).field("handlers", [def("CatchClause")], function() {
        return this.handler ? [this.handler] : [];
      }, true).field("guardedHandlers", [def("CatchClause")], defaults.emptyArray).field("finalizer", or(def("BlockStatement"), null), defaults["null"]);
      def("CatchClause").bases("Node").build("param", "guard", "body").field("param", def("Pattern")).field("guard", or(def("Expression"), null), defaults["null"]).field("body", def("BlockStatement"));
      def("WhileStatement").bases("Statement").build("test", "body").field("test", def("Expression")).field("body", def("Statement"));
      def("DoWhileStatement").bases("Statement").build("body", "test").field("body", def("Statement")).field("test", def("Expression"));
      def("ForStatement").bases("Statement").build("init", "test", "update", "body").field("init", or(def("VariableDeclaration"), def("Expression"), null)).field("test", or(def("Expression"), null)).field("update", or(def("Expression"), null)).field("body", def("Statement"));
      def("ForInStatement").bases("Statement").build("left", "right", "body").field("left", or(def("VariableDeclaration"), def("Expression"))).field("right", def("Expression")).field("body", def("Statement"));
      def("DebuggerStatement").bases("Statement").build();
      def("Declaration").bases("Statement");
      def("FunctionDeclaration").bases("Function", "Declaration").build("id", "params", "body").field("id", def("Identifier"));
      def("FunctionExpression").bases("Function", "Expression").build("id", "params", "body");
      def("VariableDeclaration").bases("Declaration").build("kind", "declarations").field("kind", or("var", "let", "const")).field("declarations", [def("VariableDeclarator")]);
      def("VariableDeclarator").bases("Node").build("id", "init").field("id", def("Pattern")).field("init", or(def("Expression"), null), defaults["null"]);
      def("Expression").bases("Node");
      def("ThisExpression").bases("Expression").build();
      def("ArrayExpression").bases("Expression").build("elements").field("elements", [or(def("Expression"), null)]);
      def("ObjectExpression").bases("Expression").build("properties").field("properties", [def("Property")]);
      def("Property").bases("Node").build("kind", "key", "value").field("kind", or("init", "get", "set")).field("key", or(def("Literal"), def("Identifier"))).field("value", def("Expression"));
      def("SequenceExpression").bases("Expression").build("expressions").field("expressions", [def("Expression")]);
      var UnaryOperator = or("-", "+", "!", "~", "typeof", "void", "delete");
      def("UnaryExpression").bases("Expression").build("operator", "argument", "prefix").field("operator", UnaryOperator).field("argument", def("Expression")).field("prefix", Boolean, defaults["true"]);
      var BinaryOperator = or.apply(void 0, BinaryOperators);
      def("BinaryExpression").bases("Expression").build("operator", "left", "right").field("operator", BinaryOperator).field("left", def("Expression")).field("right", def("Expression"));
      var AssignmentOperator = or.apply(void 0, AssignmentOperators);
      def("AssignmentExpression").bases("Expression").build("operator", "left", "right").field("operator", AssignmentOperator).field("left", or(def("Pattern"), def("MemberExpression"))).field("right", def("Expression"));
      var UpdateOperator = or("++", "--");
      def("UpdateExpression").bases("Expression").build("operator", "argument", "prefix").field("operator", UpdateOperator).field("argument", def("Expression")).field("prefix", Boolean);
      var LogicalOperator = or.apply(void 0, LogicalOperators);
      def("LogicalExpression").bases("Expression").build("operator", "left", "right").field("operator", LogicalOperator).field("left", def("Expression")).field("right", def("Expression"));
      def("ConditionalExpression").bases("Expression").build("test", "consequent", "alternate").field("test", def("Expression")).field("consequent", def("Expression")).field("alternate", def("Expression"));
      def("NewExpression").bases("Expression").build("callee", "arguments").field("callee", def("Expression")).field("arguments", [def("Expression")]);
      def("CallExpression").bases("Expression").build("callee", "arguments").field("callee", def("Expression")).field("arguments", [def("Expression")]);
      def("MemberExpression").bases("Expression").build("object", "property", "computed").field("object", def("Expression")).field("property", or(def("Identifier"), def("Expression"))).field("computed", Boolean, function() {
        var type = this.property.type;
        if (type === "Literal" || type === "MemberExpression" || type === "BinaryExpression") {
          return true;
        }
        return false;
      });
      def("Pattern").bases("Node");
      def("SwitchCase").bases("Node").build("test", "consequent").field("test", or(def("Expression"), null)).field("consequent", [def("Statement")]);
      def("Identifier").bases("Expression", "Pattern").build("name").field("name", String).field("optional", Boolean, defaults["false"]);
      def("Literal").bases("Expression").build("value").field("value", or(String, Boolean, null, Number, RegExp, BigInt));
      def("Comment").bases("Printable").field("value", String).field("leading", Boolean, defaults["true"]).field("trailing", Boolean, defaults["false"]);
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es6.js
var require_es6 = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es6.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var core_1 = tslib_1.__importDefault(require_core2());
    var types_1 = tslib_1.__importDefault(require_types());
    var shared_1 = tslib_1.__importStar(require_shared());
    function default_1(fork) {
      fork.use(core_1.default);
      var types2 = fork.use(types_1.default);
      var def = types2.Type.def;
      var or = types2.Type.or;
      var defaults = fork.use(shared_1.default).defaults;
      def("Function").field("generator", Boolean, defaults["false"]).field("expression", Boolean, defaults["false"]).field("defaults", [or(def("Expression"), null)], defaults.emptyArray).field("rest", or(def("Identifier"), null), defaults["null"]);
      def("RestElement").bases("Pattern").build("argument").field("argument", def("Pattern")).field(
        "typeAnnotation",
        // for Babylon. Flow parser puts it on the identifier
        or(def("TypeAnnotation"), def("TSTypeAnnotation"), null),
        defaults["null"]
      );
      def("SpreadElementPattern").bases("Pattern").build("argument").field("argument", def("Pattern"));
      def("FunctionDeclaration").build("id", "params", "body", "generator", "expression").field("id", or(def("Identifier"), null));
      def("FunctionExpression").build("id", "params", "body", "generator", "expression");
      def("ArrowFunctionExpression").bases("Function", "Expression").build("params", "body", "expression").field("id", null, defaults["null"]).field("body", or(def("BlockStatement"), def("Expression"))).field("generator", false, defaults["false"]);
      def("ForOfStatement").bases("Statement").build("left", "right", "body").field("left", or(def("VariableDeclaration"), def("Pattern"))).field("right", def("Expression")).field("body", def("Statement"));
      def("YieldExpression").bases("Expression").build("argument", "delegate").field("argument", or(def("Expression"), null)).field("delegate", Boolean, defaults["false"]);
      def("GeneratorExpression").bases("Expression").build("body", "blocks", "filter").field("body", def("Expression")).field("blocks", [def("ComprehensionBlock")]).field("filter", or(def("Expression"), null));
      def("ComprehensionExpression").bases("Expression").build("body", "blocks", "filter").field("body", def("Expression")).field("blocks", [def("ComprehensionBlock")]).field("filter", or(def("Expression"), null));
      def("ComprehensionBlock").bases("Node").build("left", "right", "each").field("left", def("Pattern")).field("right", def("Expression")).field("each", Boolean);
      def("Property").field("key", or(def("Literal"), def("Identifier"), def("Expression"))).field("value", or(def("Expression"), def("Pattern"))).field("method", Boolean, defaults["false"]).field("shorthand", Boolean, defaults["false"]).field("computed", Boolean, defaults["false"]);
      def("ObjectProperty").field("shorthand", Boolean, defaults["false"]);
      def("PropertyPattern").bases("Pattern").build("key", "pattern").field("key", or(def("Literal"), def("Identifier"), def("Expression"))).field("pattern", def("Pattern")).field("computed", Boolean, defaults["false"]);
      def("ObjectPattern").bases("Pattern").build("properties").field("properties", [or(def("PropertyPattern"), def("Property"))]);
      def("ArrayPattern").bases("Pattern").build("elements").field("elements", [or(def("Pattern"), null)]);
      def("SpreadElement").bases("Node").build("argument").field("argument", def("Expression"));
      def("ArrayExpression").field("elements", [or(def("Expression"), def("SpreadElement"), def("RestElement"), null)]);
      def("NewExpression").field("arguments", [or(def("Expression"), def("SpreadElement"))]);
      def("CallExpression").field("arguments", [or(def("Expression"), def("SpreadElement"))]);
      def("AssignmentPattern").bases("Pattern").build("left", "right").field("left", def("Pattern")).field("right", def("Expression"));
      def("MethodDefinition").bases("Declaration").build("kind", "key", "value", "static").field("kind", or("constructor", "method", "get", "set")).field("key", def("Expression")).field("value", def("Function")).field("computed", Boolean, defaults["false"]).field("static", Boolean, defaults["false"]);
      var ClassBodyElement = or(def("MethodDefinition"), def("VariableDeclarator"), def("ClassPropertyDefinition"), def("ClassProperty"), def("StaticBlock"));
      def("ClassProperty").bases("Declaration").build("key").field("key", or(def("Literal"), def("Identifier"), def("Expression"))).field("computed", Boolean, defaults["false"]);
      def("ClassPropertyDefinition").bases("Declaration").build("definition").field("definition", ClassBodyElement);
      def("ClassBody").bases("Declaration").build("body").field("body", [ClassBodyElement]);
      def("ClassDeclaration").bases("Declaration").build("id", "body", "superClass").field("id", or(def("Identifier"), null)).field("body", def("ClassBody")).field("superClass", or(def("Expression"), null), defaults["null"]);
      def("ClassExpression").bases("Expression").build("id", "body", "superClass").field("id", or(def("Identifier"), null), defaults["null"]).field("body", def("ClassBody")).field("superClass", or(def("Expression"), null), defaults["null"]);
      def("Super").bases("Expression").build();
      def("Specifier").bases("Node");
      def("ModuleSpecifier").bases("Specifier").field("local", or(def("Identifier"), null), defaults["null"]).field("id", or(def("Identifier"), null), defaults["null"]).field("name", or(def("Identifier"), null), defaults["null"]);
      def("ImportSpecifier").bases("ModuleSpecifier").build("imported", "local").field("imported", def("Identifier"));
      def("ImportDefaultSpecifier").bases("ModuleSpecifier").build("local");
      def("ImportNamespaceSpecifier").bases("ModuleSpecifier").build("local");
      def("ImportDeclaration").bases("Declaration").build("specifiers", "source", "importKind").field("specifiers", [or(def("ImportSpecifier"), def("ImportNamespaceSpecifier"), def("ImportDefaultSpecifier"))], defaults.emptyArray).field("source", def("Literal")).field("importKind", or("value", "type"), function() {
        return "value";
      });
      def("ExportNamedDeclaration").bases("Declaration").build("declaration", "specifiers", "source").field("declaration", or(def("Declaration"), null)).field("specifiers", [def("ExportSpecifier")], defaults.emptyArray).field("source", or(def("Literal"), null), defaults["null"]);
      def("ExportSpecifier").bases("ModuleSpecifier").build("local", "exported").field("exported", def("Identifier"));
      def("ExportDefaultDeclaration").bases("Declaration").build("declaration").field("declaration", or(def("Declaration"), def("Expression")));
      def("ExportAllDeclaration").bases("Declaration").build("source").field("source", def("Literal"));
      def("TaggedTemplateExpression").bases("Expression").build("tag", "quasi").field("tag", def("Expression")).field("quasi", def("TemplateLiteral"));
      def("TemplateLiteral").bases("Expression").build("quasis", "expressions").field("quasis", [def("TemplateElement")]).field("expressions", [def("Expression")]);
      def("TemplateElement").bases("Node").build("value", "tail").field("value", { "cooked": String, "raw": String }).field("tail", Boolean);
      def("MetaProperty").bases("Expression").build("meta", "property").field("meta", def("Identifier")).field("property", def("Identifier"));
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es2016.js
var require_es20162 = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es2016.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var es2016_1 = tslib_1.__importDefault(require_es2016());
    var es6_1 = tslib_1.__importDefault(require_es6());
    var shared_1 = require_shared();
    function default_1(fork) {
      fork.use(es2016_1.default);
      fork.use(es6_1.default);
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es2017.js
var require_es2017 = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es2017.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var es2016_1 = tslib_1.__importDefault(require_es20162());
    var types_1 = tslib_1.__importDefault(require_types());
    var shared_1 = tslib_1.__importStar(require_shared());
    function default_1(fork) {
      fork.use(es2016_1.default);
      var types2 = fork.use(types_1.default);
      var def = types2.Type.def;
      var defaults = fork.use(shared_1.default).defaults;
      def("Function").field("async", Boolean, defaults["false"]);
      def("AwaitExpression").bases("Expression").build("argument").field("argument", def("Expression"));
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es2018.js
var require_es2018 = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es2018.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var es2017_1 = tslib_1.__importDefault(require_es2017());
    var types_1 = tslib_1.__importDefault(require_types());
    var shared_1 = tslib_1.__importStar(require_shared());
    function default_1(fork) {
      fork.use(es2017_1.default);
      var types2 = fork.use(types_1.default);
      var def = types2.Type.def;
      var or = types2.Type.or;
      var defaults = fork.use(shared_1.default).defaults;
      def("ForOfStatement").field("await", Boolean, defaults["false"]);
      def("SpreadProperty").bases("Node").build("argument").field("argument", def("Expression"));
      def("ObjectExpression").field("properties", [or(
        def("Property"),
        def("SpreadProperty"),
        // Legacy
        def("SpreadElement")
      )]);
      def("TemplateElement").field("value", { "cooked": or(String, null), "raw": String });
      def("SpreadPropertyPattern").bases("Pattern").build("argument").field("argument", def("Pattern"));
      def("ObjectPattern").field("properties", [or(def("PropertyPattern"), def("Property"), def("RestElement"), def("SpreadPropertyPattern"))]);
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es2019.js
var require_es2019 = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es2019.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var es2018_1 = tslib_1.__importDefault(require_es2018());
    var types_1 = tslib_1.__importDefault(require_types());
    var shared_1 = tslib_1.__importStar(require_shared());
    function default_1(fork) {
      fork.use(es2018_1.default);
      var types2 = fork.use(types_1.default);
      var def = types2.Type.def;
      var or = types2.Type.or;
      var defaults = fork.use(shared_1.default).defaults;
      def("CatchClause").field("param", or(def("Pattern"), null), defaults["null"]);
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es2020.js
var require_es20202 = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es2020.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var es2020_1 = tslib_1.__importDefault(require_es2020());
    var es2019_1 = tslib_1.__importDefault(require_es2019());
    var types_1 = tslib_1.__importDefault(require_types());
    var shared_1 = tslib_1.__importStar(require_shared());
    function default_1(fork) {
      fork.use(es2020_1.default);
      fork.use(es2019_1.default);
      var types2 = fork.use(types_1.default);
      var def = types2.Type.def;
      var or = types2.Type.or;
      var shared = fork.use(shared_1.default);
      var defaults = shared.defaults;
      def("ImportExpression").bases("Expression").build("source").field("source", def("Expression"));
      def("ExportAllDeclaration").bases("Declaration").build("source", "exported").field("source", def("Literal")).field("exported", or(def("Identifier"), null, void 0), defaults["null"]);
      def("ChainElement").bases("Node").field("optional", Boolean, defaults["false"]);
      def("CallExpression").bases("Expression", "ChainElement");
      def("MemberExpression").bases("Expression", "ChainElement");
      def("ChainExpression").bases("Expression").build("expression").field("expression", def("ChainElement"));
      def("OptionalCallExpression").bases("CallExpression").build("callee", "arguments", "optional").field("optional", Boolean, defaults["true"]);
      def("OptionalMemberExpression").bases("MemberExpression").build("object", "property", "computed", "optional").field("optional", Boolean, defaults["true"]);
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es2021.js
var require_es20212 = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es2021.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var es2021_1 = tslib_1.__importDefault(require_es2021());
    var es2020_1 = tslib_1.__importDefault(require_es20202());
    var shared_1 = require_shared();
    function default_1(fork) {
      fork.use(es2021_1.default);
      fork.use(es2020_1.default);
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es2022.js
var require_es2022 = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es2022.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var es2021_1 = tslib_1.__importDefault(require_es20212());
    var types_1 = tslib_1.__importDefault(require_types());
    var shared_1 = require_shared();
    function default_1(fork) {
      fork.use(es2021_1.default);
      var types2 = fork.use(types_1.default);
      var def = types2.Type.def;
      def("StaticBlock").bases("Declaration").build("body").field("body", [def("Statement")]);
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es-proposals.js
var require_es_proposals = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/es-proposals.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var types_1 = tslib_1.__importDefault(require_types());
    var shared_1 = tslib_1.__importStar(require_shared());
    var es2022_1 = tslib_1.__importDefault(require_es2022());
    function default_1(fork) {
      fork.use(es2022_1.default);
      var types2 = fork.use(types_1.default);
      var Type = types2.Type;
      var def = types2.Type.def;
      var or = Type.or;
      var shared = fork.use(shared_1.default);
      var defaults = shared.defaults;
      def("AwaitExpression").build("argument", "all").field("argument", or(def("Expression"), null)).field("all", Boolean, defaults["false"]);
      def("Decorator").bases("Node").build("expression").field("expression", def("Expression"));
      def("Property").field("decorators", or([def("Decorator")], null), defaults["null"]);
      def("MethodDefinition").field("decorators", or([def("Decorator")], null), defaults["null"]);
      def("PrivateName").bases("Expression", "Pattern").build("id").field("id", def("Identifier"));
      def("ClassPrivateProperty").bases("ClassProperty").build("key", "value").field("key", def("PrivateName")).field("value", or(def("Expression"), null), defaults["null"]);
      def("ImportAttribute").bases("Node").build("key", "value").field("key", or(def("Identifier"), def("Literal"))).field("value", def("Expression"));
      [
        "ImportDeclaration",
        "ExportAllDeclaration",
        "ExportNamedDeclaration"
      ].forEach(function(decl) {
        def(decl).field("assertions", [def("ImportAttribute")], defaults.emptyArray);
      });
      def("RecordExpression").bases("Expression").build("properties").field("properties", [or(def("ObjectProperty"), def("ObjectMethod"), def("SpreadElement"))]);
      def("TupleExpression").bases("Expression").build("elements").field("elements", [or(def("Expression"), def("SpreadElement"), null)]);
      def("ModuleExpression").bases("Node").build("body").field("body", def("Program"));
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/jsx.js
var require_jsx = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/jsx.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var es_proposals_1 = tslib_1.__importDefault(require_es_proposals());
    var types_1 = tslib_1.__importDefault(require_types());
    var shared_1 = tslib_1.__importStar(require_shared());
    function default_1(fork) {
      fork.use(es_proposals_1.default);
      var types2 = fork.use(types_1.default);
      var def = types2.Type.def;
      var or = types2.Type.or;
      var defaults = fork.use(shared_1.default).defaults;
      def("JSXAttribute").bases("Node").build("name", "value").field("name", or(def("JSXIdentifier"), def("JSXNamespacedName"))).field("value", or(
        def("Literal"),
        // attr="value"
        def("JSXExpressionContainer"),
        // attr={value}
        def("JSXElement"),
        // attr=<div />
        def("JSXFragment"),
        // attr=<></>
        null
        // attr= or just attr
      ), defaults["null"]);
      def("JSXIdentifier").bases("Identifier").build("name").field("name", String);
      def("JSXNamespacedName").bases("Node").build("namespace", "name").field("namespace", def("JSXIdentifier")).field("name", def("JSXIdentifier"));
      def("JSXMemberExpression").bases("MemberExpression").build("object", "property").field("object", or(def("JSXIdentifier"), def("JSXMemberExpression"))).field("property", def("JSXIdentifier")).field("computed", Boolean, defaults.false);
      var JSXElementName = or(def("JSXIdentifier"), def("JSXNamespacedName"), def("JSXMemberExpression"));
      def("JSXSpreadAttribute").bases("Node").build("argument").field("argument", def("Expression"));
      var JSXAttributes = [or(def("JSXAttribute"), def("JSXSpreadAttribute"))];
      def("JSXExpressionContainer").bases("Expression").build("expression").field("expression", or(def("Expression"), def("JSXEmptyExpression")));
      var JSXChildren = [or(
        def("JSXText"),
        def("JSXExpressionContainer"),
        def("JSXSpreadChild"),
        def("JSXElement"),
        def("JSXFragment"),
        def("Literal")
        // Legacy: Esprima should return JSXText instead.
      )];
      def("JSXElement").bases("Expression").build("openingElement", "closingElement", "children").field("openingElement", def("JSXOpeningElement")).field("closingElement", or(def("JSXClosingElement"), null), defaults["null"]).field("children", JSXChildren, defaults.emptyArray).field("name", JSXElementName, function() {
        return this.openingElement.name;
      }, true).field("selfClosing", Boolean, function() {
        return this.openingElement.selfClosing;
      }, true).field("attributes", JSXAttributes, function() {
        return this.openingElement.attributes;
      }, true);
      def("JSXOpeningElement").bases("Node").build("name", "attributes", "selfClosing").field("name", JSXElementName).field("attributes", JSXAttributes, defaults.emptyArray).field("selfClosing", Boolean, defaults["false"]);
      def("JSXClosingElement").bases("Node").build("name").field("name", JSXElementName);
      def("JSXFragment").bases("Expression").build("openingFragment", "closingFragment", "children").field("openingFragment", def("JSXOpeningFragment")).field("closingFragment", def("JSXClosingFragment")).field("children", JSXChildren, defaults.emptyArray);
      def("JSXOpeningFragment").bases("Node").build();
      def("JSXClosingFragment").bases("Node").build();
      def("JSXText").bases("Literal").build("value", "raw").field("value", String).field("raw", String, function() {
        return this.value;
      });
      def("JSXEmptyExpression").bases("Node").build();
      def("JSXSpreadChild").bases("Node").build("expression").field("expression", def("Expression"));
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/type-annotations.js
var require_type_annotations = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/type-annotations.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var types_1 = tslib_1.__importDefault(require_types());
    var shared_1 = tslib_1.__importStar(require_shared());
    function default_1(fork) {
      var types2 = fork.use(types_1.default);
      var def = types2.Type.def;
      var or = types2.Type.or;
      var defaults = fork.use(shared_1.default).defaults;
      var TypeAnnotation = or(def("TypeAnnotation"), def("TSTypeAnnotation"), null);
      var TypeParamDecl = or(def("TypeParameterDeclaration"), def("TSTypeParameterDeclaration"), null);
      def("Identifier").field("typeAnnotation", TypeAnnotation, defaults["null"]);
      def("ObjectPattern").field("typeAnnotation", TypeAnnotation, defaults["null"]);
      def("Function").field("returnType", TypeAnnotation, defaults["null"]).field("typeParameters", TypeParamDecl, defaults["null"]);
      def("ClassProperty").build("key", "value", "typeAnnotation", "static").field("value", or(def("Expression"), null)).field("static", Boolean, defaults["false"]).field("typeAnnotation", TypeAnnotation, defaults["null"]);
      [
        "ClassDeclaration",
        "ClassExpression"
      ].forEach(function(typeName) {
        def(typeName).field("typeParameters", TypeParamDecl, defaults["null"]).field("superTypeParameters", or(def("TypeParameterInstantiation"), def("TSTypeParameterInstantiation"), null), defaults["null"]).field("implements", or([def("ClassImplements")], [def("TSExpressionWithTypeArguments")]), defaults.emptyArray);
      });
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/flow.js
var require_flow = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/flow.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var es_proposals_1 = tslib_1.__importDefault(require_es_proposals());
    var type_annotations_1 = tslib_1.__importDefault(require_type_annotations());
    var types_1 = tslib_1.__importDefault(require_types());
    var shared_1 = tslib_1.__importStar(require_shared());
    function default_1(fork) {
      fork.use(es_proposals_1.default);
      fork.use(type_annotations_1.default);
      var types2 = fork.use(types_1.default);
      var def = types2.Type.def;
      var or = types2.Type.or;
      var defaults = fork.use(shared_1.default).defaults;
      def("Flow").bases("Node");
      def("FlowType").bases("Flow");
      def("AnyTypeAnnotation").bases("FlowType").build();
      def("EmptyTypeAnnotation").bases("FlowType").build();
      def("MixedTypeAnnotation").bases("FlowType").build();
      def("VoidTypeAnnotation").bases("FlowType").build();
      def("SymbolTypeAnnotation").bases("FlowType").build();
      def("NumberTypeAnnotation").bases("FlowType").build();
      def("BigIntTypeAnnotation").bases("FlowType").build();
      def("NumberLiteralTypeAnnotation").bases("FlowType").build("value", "raw").field("value", Number).field("raw", String);
      def("NumericLiteralTypeAnnotation").bases("FlowType").build("value", "raw").field("value", Number).field("raw", String);
      def("BigIntLiteralTypeAnnotation").bases("FlowType").build("value", "raw").field("value", null).field("raw", String);
      def("StringTypeAnnotation").bases("FlowType").build();
      def("StringLiteralTypeAnnotation").bases("FlowType").build("value", "raw").field("value", String).field("raw", String);
      def("BooleanTypeAnnotation").bases("FlowType").build();
      def("BooleanLiteralTypeAnnotation").bases("FlowType").build("value", "raw").field("value", Boolean).field("raw", String);
      def("TypeAnnotation").bases("Node").build("typeAnnotation").field("typeAnnotation", def("FlowType"));
      def("NullableTypeAnnotation").bases("FlowType").build("typeAnnotation").field("typeAnnotation", def("FlowType"));
      def("NullLiteralTypeAnnotation").bases("FlowType").build();
      def("NullTypeAnnotation").bases("FlowType").build();
      def("ThisTypeAnnotation").bases("FlowType").build();
      def("ExistsTypeAnnotation").bases("FlowType").build();
      def("ExistentialTypeParam").bases("FlowType").build();
      def("FunctionTypeAnnotation").bases("FlowType").build("params", "returnType", "rest", "typeParameters").field("params", [def("FunctionTypeParam")]).field("returnType", def("FlowType")).field("rest", or(def("FunctionTypeParam"), null)).field("typeParameters", or(def("TypeParameterDeclaration"), null));
      def("FunctionTypeParam").bases("Node").build("name", "typeAnnotation", "optional").field("name", or(def("Identifier"), null)).field("typeAnnotation", def("FlowType")).field("optional", Boolean);
      def("ArrayTypeAnnotation").bases("FlowType").build("elementType").field("elementType", def("FlowType"));
      def("ObjectTypeAnnotation").bases("FlowType").build("properties", "indexers", "callProperties").field("properties", [
        or(def("ObjectTypeProperty"), def("ObjectTypeSpreadProperty"))
      ]).field("indexers", [def("ObjectTypeIndexer")], defaults.emptyArray).field("callProperties", [def("ObjectTypeCallProperty")], defaults.emptyArray).field("inexact", or(Boolean, void 0), defaults["undefined"]).field("exact", Boolean, defaults["false"]).field("internalSlots", [def("ObjectTypeInternalSlot")], defaults.emptyArray);
      def("Variance").bases("Node").build("kind").field("kind", or("plus", "minus"));
      var LegacyVariance = or(def("Variance"), "plus", "minus", null);
      def("ObjectTypeProperty").bases("Node").build("key", "value", "optional").field("key", or(def("Literal"), def("Identifier"))).field("value", def("FlowType")).field("optional", Boolean).field("variance", LegacyVariance, defaults["null"]);
      def("ObjectTypeIndexer").bases("Node").build("id", "key", "value").field("id", def("Identifier")).field("key", def("FlowType")).field("value", def("FlowType")).field("variance", LegacyVariance, defaults["null"]).field("static", Boolean, defaults["false"]);
      def("ObjectTypeCallProperty").bases("Node").build("value").field("value", def("FunctionTypeAnnotation")).field("static", Boolean, defaults["false"]);
      def("QualifiedTypeIdentifier").bases("Node").build("qualification", "id").field("qualification", or(def("Identifier"), def("QualifiedTypeIdentifier"))).field("id", def("Identifier"));
      def("GenericTypeAnnotation").bases("FlowType").build("id", "typeParameters").field("id", or(def("Identifier"), def("QualifiedTypeIdentifier"))).field("typeParameters", or(def("TypeParameterInstantiation"), null));
      def("MemberTypeAnnotation").bases("FlowType").build("object", "property").field("object", def("Identifier")).field("property", or(def("MemberTypeAnnotation"), def("GenericTypeAnnotation")));
      def("IndexedAccessType").bases("FlowType").build("objectType", "indexType").field("objectType", def("FlowType")).field("indexType", def("FlowType"));
      def("OptionalIndexedAccessType").bases("FlowType").build("objectType", "indexType", "optional").field("objectType", def("FlowType")).field("indexType", def("FlowType")).field("optional", Boolean);
      def("UnionTypeAnnotation").bases("FlowType").build("types").field("types", [def("FlowType")]);
      def("IntersectionTypeAnnotation").bases("FlowType").build("types").field("types", [def("FlowType")]);
      def("TypeofTypeAnnotation").bases("FlowType").build("argument").field("argument", def("FlowType"));
      def("ObjectTypeSpreadProperty").bases("Node").build("argument").field("argument", def("FlowType"));
      def("ObjectTypeInternalSlot").bases("Node").build("id", "value", "optional", "static", "method").field("id", def("Identifier")).field("value", def("FlowType")).field("optional", Boolean).field("static", Boolean).field("method", Boolean);
      def("TypeParameterDeclaration").bases("Node").build("params").field("params", [def("TypeParameter")]);
      def("TypeParameterInstantiation").bases("Node").build("params").field("params", [def("FlowType")]);
      def("TypeParameter").bases("FlowType").build("name", "variance", "bound", "default").field("name", String).field("variance", LegacyVariance, defaults["null"]).field("bound", or(def("TypeAnnotation"), null), defaults["null"]).field("default", or(def("FlowType"), null), defaults["null"]);
      def("ClassProperty").field("variance", LegacyVariance, defaults["null"]);
      def("ClassImplements").bases("Node").build("id").field("id", def("Identifier")).field("superClass", or(def("Expression"), null), defaults["null"]).field("typeParameters", or(def("TypeParameterInstantiation"), null), defaults["null"]);
      def("InterfaceTypeAnnotation").bases("FlowType").build("body", "extends").field("body", def("ObjectTypeAnnotation")).field("extends", or([def("InterfaceExtends")], null), defaults["null"]);
      def("InterfaceDeclaration").bases("Declaration").build("id", "body", "extends").field("id", def("Identifier")).field("typeParameters", or(def("TypeParameterDeclaration"), null), defaults["null"]).field("body", def("ObjectTypeAnnotation")).field("extends", [def("InterfaceExtends")]);
      def("DeclareInterface").bases("InterfaceDeclaration").build("id", "body", "extends");
      def("InterfaceExtends").bases("Node").build("id").field("id", def("Identifier")).field("typeParameters", or(def("TypeParameterInstantiation"), null), defaults["null"]);
      def("TypeAlias").bases("Declaration").build("id", "typeParameters", "right").field("id", def("Identifier")).field("typeParameters", or(def("TypeParameterDeclaration"), null)).field("right", def("FlowType"));
      def("DeclareTypeAlias").bases("TypeAlias").build("id", "typeParameters", "right");
      def("OpaqueType").bases("Declaration").build("id", "typeParameters", "impltype", "supertype").field("id", def("Identifier")).field("typeParameters", or(def("TypeParameterDeclaration"), null)).field("impltype", def("FlowType")).field("supertype", or(def("FlowType"), null));
      def("DeclareOpaqueType").bases("OpaqueType").build("id", "typeParameters", "supertype").field("impltype", or(def("FlowType"), null));
      def("TypeCastExpression").bases("Expression").build("expression", "typeAnnotation").field("expression", def("Expression")).field("typeAnnotation", def("TypeAnnotation"));
      def("TupleTypeAnnotation").bases("FlowType").build("types").field("types", [def("FlowType")]);
      def("DeclareVariable").bases("Statement").build("id").field("id", def("Identifier"));
      def("DeclareFunction").bases("Statement").build("id").field("id", def("Identifier")).field("predicate", or(def("FlowPredicate"), null), defaults["null"]);
      def("DeclareClass").bases("InterfaceDeclaration").build("id");
      def("DeclareModule").bases("Statement").build("id", "body").field("id", or(def("Identifier"), def("Literal"))).field("body", def("BlockStatement"));
      def("DeclareModuleExports").bases("Statement").build("typeAnnotation").field("typeAnnotation", def("TypeAnnotation"));
      def("DeclareExportDeclaration").bases("Declaration").build("default", "declaration", "specifiers", "source").field("default", Boolean).field("declaration", or(
        def("DeclareVariable"),
        def("DeclareFunction"),
        def("DeclareClass"),
        def("FlowType"),
        // Implies default.
        def("TypeAlias"),
        // Implies named type
        def("DeclareOpaqueType"),
        // Implies named opaque type
        def("InterfaceDeclaration"),
        null
      )).field("specifiers", [or(def("ExportSpecifier"), def("ExportBatchSpecifier"))], defaults.emptyArray).field("source", or(def("Literal"), null), defaults["null"]);
      def("DeclareExportAllDeclaration").bases("Declaration").build("source").field("source", or(def("Literal"), null), defaults["null"]);
      def("ImportDeclaration").field("importKind", or("value", "type", "typeof"), function() {
        return "value";
      });
      def("FlowPredicate").bases("Flow");
      def("InferredPredicate").bases("FlowPredicate").build();
      def("DeclaredPredicate").bases("FlowPredicate").build("value").field("value", def("Expression"));
      def("Function").field("predicate", or(def("FlowPredicate"), null), defaults["null"]);
      def("CallExpression").field("typeArguments", or(null, def("TypeParameterInstantiation")), defaults["null"]);
      def("NewExpression").field("typeArguments", or(null, def("TypeParameterInstantiation")), defaults["null"]);
      def("EnumDeclaration").bases("Declaration").build("id", "body").field("id", def("Identifier")).field("body", or(def("EnumBooleanBody"), def("EnumNumberBody"), def("EnumStringBody"), def("EnumSymbolBody")));
      def("EnumBooleanBody").build("members", "explicitType").field("members", [def("EnumBooleanMember")]).field("explicitType", Boolean);
      def("EnumNumberBody").build("members", "explicitType").field("members", [def("EnumNumberMember")]).field("explicitType", Boolean);
      def("EnumStringBody").build("members", "explicitType").field("members", or([def("EnumStringMember")], [def("EnumDefaultedMember")])).field("explicitType", Boolean);
      def("EnumSymbolBody").build("members").field("members", [def("EnumDefaultedMember")]);
      def("EnumBooleanMember").build("id", "init").field("id", def("Identifier")).field("init", or(def("Literal"), Boolean));
      def("EnumNumberMember").build("id", "init").field("id", def("Identifier")).field("init", def("Literal"));
      def("EnumStringMember").build("id", "init").field("id", def("Identifier")).field("init", def("Literal"));
      def("EnumDefaultedMember").build("id").field("id", def("Identifier"));
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/esprima.js
var require_esprima = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/esprima.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var es_proposals_1 = tslib_1.__importDefault(require_es_proposals());
    var types_1 = tslib_1.__importDefault(require_types());
    var shared_1 = tslib_1.__importStar(require_shared());
    function default_1(fork) {
      fork.use(es_proposals_1.default);
      var types2 = fork.use(types_1.default);
      var defaults = fork.use(shared_1.default).defaults;
      var def = types2.Type.def;
      var or = types2.Type.or;
      def("VariableDeclaration").field("declarations", [or(
        def("VariableDeclarator"),
        def("Identifier")
        // Esprima deviation.
      )]);
      def("Property").field("value", or(
        def("Expression"),
        def("Pattern")
        // Esprima deviation.
      ));
      def("ArrayPattern").field("elements", [or(def("Pattern"), def("SpreadElement"), null)]);
      def("ObjectPattern").field("properties", [or(
        def("Property"),
        def("PropertyPattern"),
        def("SpreadPropertyPattern"),
        def("SpreadProperty")
        // Used by Esprima.
      )]);
      def("ExportSpecifier").bases("ModuleSpecifier").build("id", "name");
      def("ExportBatchSpecifier").bases("Specifier").build();
      def("ExportDeclaration").bases("Declaration").build("default", "declaration", "specifiers", "source").field("default", Boolean).field("declaration", or(
        def("Declaration"),
        def("Expression"),
        // Implies default.
        null
      )).field("specifiers", [or(def("ExportSpecifier"), def("ExportBatchSpecifier"))], defaults.emptyArray).field("source", or(def("Literal"), null), defaults["null"]);
      def("Block").bases("Comment").build(
        "value",
        /*optional:*/
        "leading",
        "trailing"
      );
      def("Line").bases("Comment").build(
        "value",
        /*optional:*/
        "leading",
        "trailing"
      );
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/babel-core.js
var require_babel_core = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/babel-core.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var es_proposals_1 = tslib_1.__importDefault(require_es_proposals());
    var types_1 = tslib_1.__importDefault(require_types());
    var shared_1 = tslib_1.__importStar(require_shared());
    function default_1(fork) {
      var _a, _b, _c, _d, _e;
      fork.use(es_proposals_1.default);
      var types2 = fork.use(types_1.default);
      var defaults = fork.use(shared_1.default).defaults;
      var def = types2.Type.def;
      var or = types2.Type.or;
      var isUndefined = types2.builtInTypes.undefined;
      def("Noop").bases("Statement").build();
      def("DoExpression").bases("Expression").build("body").field("body", [def("Statement")]);
      def("BindExpression").bases("Expression").build("object", "callee").field("object", or(def("Expression"), null)).field("callee", def("Expression"));
      def("ParenthesizedExpression").bases("Expression").build("expression").field("expression", def("Expression"));
      def("ExportNamespaceSpecifier").bases("Specifier").build("exported").field("exported", def("Identifier"));
      def("ExportDefaultSpecifier").bases("Specifier").build("exported").field("exported", def("Identifier"));
      def("CommentBlock").bases("Comment").build(
        "value",
        /*optional:*/
        "leading",
        "trailing"
      );
      def("CommentLine").bases("Comment").build(
        "value",
        /*optional:*/
        "leading",
        "trailing"
      );
      def("Directive").bases("Node").build("value").field("value", def("DirectiveLiteral"));
      def("DirectiveLiteral").bases("Node", "Expression").build("value").field("value", String, defaults["use strict"]);
      def("InterpreterDirective").bases("Node").build("value").field("value", String);
      def("BlockStatement").bases("Statement").build("body").field("body", [def("Statement")]).field("directives", [def("Directive")], defaults.emptyArray);
      def("Program").bases("Node").build("body").field("body", [def("Statement")]).field("directives", [def("Directive")], defaults.emptyArray).field("interpreter", or(def("InterpreterDirective"), null), defaults["null"]);
      function makeLiteralExtra(rawValueType, toRaw) {
        if (rawValueType === void 0) {
          rawValueType = String;
        }
        return [
          "extra",
          {
            rawValue: rawValueType,
            raw: String
          },
          function getDefault() {
            var value = types2.getFieldValue(this, "value");
            return {
              rawValue: value,
              raw: toRaw ? toRaw(value) : String(value)
            };
          }
        ];
      }
      (_a = def("StringLiteral").bases("Literal").build("value").field("value", String)).field.apply(_a, makeLiteralExtra(String, function(val) {
        return JSON.stringify(val);
      }));
      (_b = def("NumericLiteral").bases("Literal").build("value").field("value", Number).field("raw", or(String, null), defaults["null"])).field.apply(_b, makeLiteralExtra(Number));
      (_c = def("BigIntLiteral").bases("Literal").build("value").field("value", or(String, Number))).field.apply(_c, makeLiteralExtra(String, function(val) {
        return val + "n";
      }));
      (_d = def("DecimalLiteral").bases("Literal").build("value").field("value", String)).field.apply(_d, makeLiteralExtra(String, function(val) {
        return val + "m";
      }));
      def("NullLiteral").bases("Literal").build().field("value", null, defaults["null"]);
      def("BooleanLiteral").bases("Literal").build("value").field("value", Boolean);
      (_e = def("RegExpLiteral").bases("Literal").build("pattern", "flags").field("pattern", String).field("flags", String).field("value", RegExp, function() {
        return new RegExp(this.pattern, this.flags);
      })).field.apply(_e, makeLiteralExtra(or(RegExp, isUndefined), function(exp) {
        return "/".concat(exp.pattern, "/").concat(exp.flags || "");
      })).field("regex", {
        pattern: String,
        flags: String
      }, function() {
        return {
          pattern: this.pattern,
          flags: this.flags
        };
      });
      var ObjectExpressionProperty = or(def("Property"), def("ObjectMethod"), def("ObjectProperty"), def("SpreadProperty"), def("SpreadElement"));
      def("ObjectExpression").bases("Expression").build("properties").field("properties", [ObjectExpressionProperty]);
      def("ObjectMethod").bases("Node", "Function").build("kind", "key", "params", "body", "computed").field("kind", or("method", "get", "set")).field("key", or(def("Literal"), def("Identifier"), def("Expression"))).field("params", [def("Pattern")]).field("body", def("BlockStatement")).field("computed", Boolean, defaults["false"]).field("generator", Boolean, defaults["false"]).field("async", Boolean, defaults["false"]).field(
        "accessibility",
        // TypeScript
        or(def("Literal"), null),
        defaults["null"]
      ).field("decorators", or([def("Decorator")], null), defaults["null"]);
      def("ObjectProperty").bases("Node").build("key", "value").field("key", or(def("Literal"), def("Identifier"), def("Expression"))).field("value", or(def("Expression"), def("Pattern"))).field(
        "accessibility",
        // TypeScript
        or(def("Literal"), null),
        defaults["null"]
      ).field("computed", Boolean, defaults["false"]);
      var ClassBodyElement = or(def("MethodDefinition"), def("VariableDeclarator"), def("ClassPropertyDefinition"), def("ClassProperty"), def("ClassPrivateProperty"), def("ClassMethod"), def("ClassPrivateMethod"), def("ClassAccessorProperty"), def("StaticBlock"));
      def("ClassBody").bases("Declaration").build("body").field("body", [ClassBodyElement]);
      def("ClassMethod").bases("Declaration", "Function").build("kind", "key", "params", "body", "computed", "static").field("key", or(def("Literal"), def("Identifier"), def("Expression")));
      def("ClassPrivateMethod").bases("Declaration", "Function").build("key", "params", "body", "kind", "computed", "static").field("key", def("PrivateName"));
      def("ClassAccessorProperty").bases("Declaration").build("key", "value", "decorators", "computed", "static").field("key", or(
        def("Literal"),
        def("Identifier"),
        def("PrivateName"),
        // Only when .computed is true (TODO enforce this)
        def("Expression")
      )).field("value", or(def("Expression"), null), defaults["null"]);
      [
        "ClassMethod",
        "ClassPrivateMethod"
      ].forEach(function(typeName) {
        def(typeName).field("kind", or("get", "set", "method", "constructor"), function() {
          return "method";
        }).field("body", def("BlockStatement")).field("access", or("public", "private", "protected", null), defaults["null"]);
      });
      [
        "ClassMethod",
        "ClassPrivateMethod",
        "ClassAccessorProperty"
      ].forEach(function(typeName) {
        def(typeName).field("computed", Boolean, defaults["false"]).field("static", Boolean, defaults["false"]).field("abstract", Boolean, defaults["false"]).field("accessibility", or("public", "private", "protected", null), defaults["null"]).field("decorators", or([def("Decorator")], null), defaults["null"]).field("definite", Boolean, defaults["false"]).field("optional", Boolean, defaults["false"]).field("override", Boolean, defaults["false"]).field("readonly", Boolean, defaults["false"]);
      });
      var ObjectPatternProperty = or(
        def("Property"),
        def("PropertyPattern"),
        def("SpreadPropertyPattern"),
        def("SpreadProperty"),
        // Used by Esprima
        def("ObjectProperty"),
        // Babel 6
        def("RestProperty"),
        // Babel 6
        def("RestElement")
      );
      def("ObjectPattern").bases("Pattern").build("properties").field("properties", [ObjectPatternProperty]).field("decorators", or([def("Decorator")], null), defaults["null"]);
      def("SpreadProperty").bases("Node").build("argument").field("argument", def("Expression"));
      def("RestProperty").bases("Node").build("argument").field("argument", def("Expression"));
      def("ForAwaitStatement").bases("Statement").build("left", "right", "body").field("left", or(def("VariableDeclaration"), def("Expression"))).field("right", def("Expression")).field("body", def("Statement"));
      def("Import").bases("Expression").build();
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/babel.js
var require_babel = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/babel.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var types_1 = tslib_1.__importDefault(require_types());
    var babel_core_1 = tslib_1.__importDefault(require_babel_core());
    var flow_1 = tslib_1.__importDefault(require_flow());
    var shared_1 = require_shared();
    function default_1(fork) {
      var types2 = fork.use(types_1.default);
      var def = types2.Type.def;
      fork.use(babel_core_1.default);
      fork.use(flow_1.default);
      def("V8IntrinsicIdentifier").bases("Expression").build("name").field("name", String);
      def("TopicReference").bases("Expression").build();
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/typescript.js
var require_typescript = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/def/typescript.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var babel_core_1 = tslib_1.__importDefault(require_babel_core());
    var type_annotations_1 = tslib_1.__importDefault(require_type_annotations());
    var types_1 = tslib_1.__importDefault(require_types());
    var shared_1 = tslib_1.__importStar(require_shared());
    function default_1(fork) {
      fork.use(babel_core_1.default);
      fork.use(type_annotations_1.default);
      var types2 = fork.use(types_1.default);
      var n = types2.namedTypes;
      var def = types2.Type.def;
      var or = types2.Type.or;
      var defaults = fork.use(shared_1.default).defaults;
      var StringLiteral = types2.Type.from(function(value, deep) {
        if (n.StringLiteral && n.StringLiteral.check(value, deep)) {
          return true;
        }
        if (n.Literal && n.Literal.check(value, deep) && typeof value.value === "string") {
          return true;
        }
        return false;
      }, "StringLiteral");
      def("TSType").bases("Node");
      var TSEntityName = or(def("Identifier"), def("TSQualifiedName"));
      def("TSTypeReference").bases("TSType", "TSHasOptionalTypeParameterInstantiation").build("typeName", "typeParameters").field("typeName", TSEntityName);
      def("TSHasOptionalTypeParameterInstantiation").field("typeParameters", or(def("TSTypeParameterInstantiation"), null), defaults["null"]);
      def("TSHasOptionalTypeParameters").field("typeParameters", or(def("TSTypeParameterDeclaration"), null, void 0), defaults["null"]);
      def("TSHasOptionalTypeAnnotation").field("typeAnnotation", or(def("TSTypeAnnotation"), null), defaults["null"]);
      def("TSQualifiedName").bases("Node").build("left", "right").field("left", TSEntityName).field("right", TSEntityName);
      def("TSAsExpression").bases("Expression", "Pattern").build("expression", "typeAnnotation").field("expression", def("Expression")).field("typeAnnotation", def("TSType")).field("extra", or({ parenthesized: Boolean }, null), defaults["null"]);
      def("TSTypeCastExpression").bases("Expression").build("expression", "typeAnnotation").field("expression", def("Expression")).field("typeAnnotation", def("TSType"));
      def("TSSatisfiesExpression").bases("Expression", "Pattern").build("expression", "typeAnnotation").field("expression", def("Expression")).field("typeAnnotation", def("TSType"));
      def("TSNonNullExpression").bases("Expression", "Pattern").build("expression").field("expression", def("Expression"));
      [
        "TSAnyKeyword",
        "TSBigIntKeyword",
        "TSBooleanKeyword",
        "TSNeverKeyword",
        "TSNullKeyword",
        "TSNumberKeyword",
        "TSObjectKeyword",
        "TSStringKeyword",
        "TSSymbolKeyword",
        "TSUndefinedKeyword",
        "TSUnknownKeyword",
        "TSVoidKeyword",
        "TSIntrinsicKeyword",
        "TSThisType"
      ].forEach(function(keywordType) {
        def(keywordType).bases("TSType").build();
      });
      def("TSArrayType").bases("TSType").build("elementType").field("elementType", def("TSType"));
      def("TSLiteralType").bases("TSType").build("literal").field("literal", or(def("NumericLiteral"), def("StringLiteral"), def("BooleanLiteral"), def("TemplateLiteral"), def("UnaryExpression"), def("BigIntLiteral")));
      def("TemplateLiteral").field("expressions", or([def("Expression")], [def("TSType")]));
      [
        "TSUnionType",
        "TSIntersectionType"
      ].forEach(function(typeName) {
        def(typeName).bases("TSType").build("types").field("types", [def("TSType")]);
      });
      def("TSConditionalType").bases("TSType").build("checkType", "extendsType", "trueType", "falseType").field("checkType", def("TSType")).field("extendsType", def("TSType")).field("trueType", def("TSType")).field("falseType", def("TSType"));
      def("TSInferType").bases("TSType").build("typeParameter").field("typeParameter", def("TSTypeParameter"));
      def("TSParenthesizedType").bases("TSType").build("typeAnnotation").field("typeAnnotation", def("TSType"));
      var ParametersType = [or(def("Identifier"), def("RestElement"), def("ArrayPattern"), def("ObjectPattern"))];
      [
        "TSFunctionType",
        "TSConstructorType"
      ].forEach(function(typeName) {
        def(typeName).bases("TSType", "TSHasOptionalTypeParameters", "TSHasOptionalTypeAnnotation").build("parameters").field("parameters", ParametersType);
      });
      def("TSDeclareFunction").bases("Declaration", "TSHasOptionalTypeParameters").build("id", "params", "returnType").field("declare", Boolean, defaults["false"]).field("async", Boolean, defaults["false"]).field("generator", Boolean, defaults["false"]).field("id", or(def("Identifier"), null), defaults["null"]).field("params", [def("Pattern")]).field("returnType", or(
        def("TSTypeAnnotation"),
        def("Noop"),
        // Still used?
        null
      ), defaults["null"]);
      def("TSDeclareMethod").bases("Declaration", "TSHasOptionalTypeParameters").build("key", "params", "returnType").field("async", Boolean, defaults["false"]).field("generator", Boolean, defaults["false"]).field("params", [def("Pattern")]).field("abstract", Boolean, defaults["false"]).field("accessibility", or("public", "private", "protected", void 0), defaults["undefined"]).field("static", Boolean, defaults["false"]).field("computed", Boolean, defaults["false"]).field("optional", Boolean, defaults["false"]).field("key", or(
        def("Identifier"),
        def("StringLiteral"),
        def("NumericLiteral"),
        // Only allowed if .computed is true.
        def("Expression")
      )).field("kind", or("get", "set", "method", "constructor"), function getDefault() {
        return "method";
      }).field(
        "access",
        // Not "accessibility"?
        or("public", "private", "protected", void 0),
        defaults["undefined"]
      ).field("decorators", or([def("Decorator")], null), defaults["null"]).field("returnType", or(
        def("TSTypeAnnotation"),
        def("Noop"),
        // Still used?
        null
      ), defaults["null"]);
      def("TSMappedType").bases("TSType").build("typeParameter", "typeAnnotation").field("readonly", or(Boolean, "+", "-"), defaults["false"]).field("typeParameter", def("TSTypeParameter")).field("optional", or(Boolean, "+", "-"), defaults["false"]).field("typeAnnotation", or(def("TSType"), null), defaults["null"]);
      def("TSTupleType").bases("TSType").build("elementTypes").field("elementTypes", [or(def("TSType"), def("TSNamedTupleMember"))]);
      def("TSNamedTupleMember").bases("TSType").build("label", "elementType", "optional").field("label", def("Identifier")).field("optional", Boolean, defaults["false"]).field("elementType", def("TSType"));
      def("TSRestType").bases("TSType").build("typeAnnotation").field("typeAnnotation", def("TSType"));
      def("TSOptionalType").bases("TSType").build("typeAnnotation").field("typeAnnotation", def("TSType"));
      def("TSIndexedAccessType").bases("TSType").build("objectType", "indexType").field("objectType", def("TSType")).field("indexType", def("TSType"));
      def("TSTypeOperator").bases("TSType").build("operator").field("operator", String).field("typeAnnotation", def("TSType"));
      def("TSTypeAnnotation").bases("Node").build("typeAnnotation").field("typeAnnotation", or(def("TSType"), def("TSTypeAnnotation")));
      def("TSIndexSignature").bases("Declaration", "TSHasOptionalTypeAnnotation").build("parameters", "typeAnnotation").field("parameters", [def("Identifier")]).field("readonly", Boolean, defaults["false"]);
      def("TSPropertySignature").bases("Declaration", "TSHasOptionalTypeAnnotation").build("key", "typeAnnotation", "optional").field("key", def("Expression")).field("computed", Boolean, defaults["false"]).field("readonly", Boolean, defaults["false"]).field("optional", Boolean, defaults["false"]).field("initializer", or(def("Expression"), null), defaults["null"]);
      def("TSMethodSignature").bases("Declaration", "TSHasOptionalTypeParameters", "TSHasOptionalTypeAnnotation").build("key", "parameters", "typeAnnotation").field("key", def("Expression")).field("computed", Boolean, defaults["false"]).field("optional", Boolean, defaults["false"]).field("parameters", ParametersType);
      def("TSTypePredicate").bases("TSTypeAnnotation", "TSType").build("parameterName", "typeAnnotation", "asserts").field("parameterName", or(def("Identifier"), def("TSThisType"))).field("typeAnnotation", or(def("TSTypeAnnotation"), null), defaults["null"]).field("asserts", Boolean, defaults["false"]);
      [
        "TSCallSignatureDeclaration",
        "TSConstructSignatureDeclaration"
      ].forEach(function(typeName) {
        def(typeName).bases("Declaration", "TSHasOptionalTypeParameters", "TSHasOptionalTypeAnnotation").build("parameters", "typeAnnotation").field("parameters", ParametersType);
      });
      def("TSEnumMember").bases("Node").build("id", "initializer").field("id", or(def("Identifier"), StringLiteral)).field("initializer", or(def("Expression"), null), defaults["null"]);
      def("TSTypeQuery").bases("TSType").build("exprName").field("exprName", or(TSEntityName, def("TSImportType")));
      var TSTypeMember = or(def("TSCallSignatureDeclaration"), def("TSConstructSignatureDeclaration"), def("TSIndexSignature"), def("TSMethodSignature"), def("TSPropertySignature"));
      def("TSTypeLiteral").bases("TSType").build("members").field("members", [TSTypeMember]);
      def("TSTypeParameter").bases("Identifier").build("name", "constraint", "default").field("name", or(def("Identifier"), String)).field("constraint", or(def("TSType"), void 0), defaults["undefined"]).field("default", or(def("TSType"), void 0), defaults["undefined"]);
      def("TSTypeAssertion").bases("Expression", "Pattern").build("typeAnnotation", "expression").field("typeAnnotation", def("TSType")).field("expression", def("Expression")).field("extra", or({ parenthesized: Boolean }, null), defaults["null"]);
      def("TSTypeParameterDeclaration").bases("Declaration").build("params").field("params", [def("TSTypeParameter")]);
      def("TSInstantiationExpression").bases("Expression", "TSHasOptionalTypeParameterInstantiation").build("expression", "typeParameters").field("expression", def("Expression"));
      def("TSTypeParameterInstantiation").bases("Node").build("params").field("params", [def("TSType")]);
      def("TSEnumDeclaration").bases("Declaration").build("id", "members").field("id", def("Identifier")).field("const", Boolean, defaults["false"]).field("declare", Boolean, defaults["false"]).field("members", [def("TSEnumMember")]).field("initializer", or(def("Expression"), null), defaults["null"]);
      def("TSTypeAliasDeclaration").bases("Declaration", "TSHasOptionalTypeParameters").build("id", "typeAnnotation").field("id", def("Identifier")).field("declare", Boolean, defaults["false"]).field("typeAnnotation", def("TSType"));
      def("TSModuleBlock").bases("Node").build("body").field("body", [def("Statement")]);
      def("TSModuleDeclaration").bases("Declaration").build("id", "body").field("id", or(StringLiteral, TSEntityName)).field("declare", Boolean, defaults["false"]).field("global", Boolean, defaults["false"]).field("body", or(def("TSModuleBlock"), def("TSModuleDeclaration"), null), defaults["null"]);
      def("TSImportType").bases("TSType", "TSHasOptionalTypeParameterInstantiation").build("argument", "qualifier", "typeParameters").field("argument", StringLiteral).field("qualifier", or(TSEntityName, void 0), defaults["undefined"]);
      def("TSImportEqualsDeclaration").bases("Declaration").build("id", "moduleReference").field("id", def("Identifier")).field("isExport", Boolean, defaults["false"]).field("moduleReference", or(TSEntityName, def("TSExternalModuleReference")));
      def("TSExternalModuleReference").bases("Declaration").build("expression").field("expression", StringLiteral);
      def("TSExportAssignment").bases("Statement").build("expression").field("expression", def("Expression"));
      def("TSNamespaceExportDeclaration").bases("Declaration").build("id").field("id", def("Identifier"));
      def("TSInterfaceBody").bases("Node").build("body").field("body", [TSTypeMember]);
      def("TSExpressionWithTypeArguments").bases("TSType", "TSHasOptionalTypeParameterInstantiation").build("expression", "typeParameters").field("expression", TSEntityName);
      def("TSInterfaceDeclaration").bases("Declaration", "TSHasOptionalTypeParameters").build("id", "body").field("id", TSEntityName).field("declare", Boolean, defaults["false"]).field("extends", or([def("TSExpressionWithTypeArguments")], null), defaults["null"]).field("body", def("TSInterfaceBody"));
      def("TSParameterProperty").bases("Pattern").build("parameter").field("accessibility", or("public", "private", "protected", void 0), defaults["undefined"]).field("readonly", Boolean, defaults["false"]).field("parameter", or(def("Identifier"), def("AssignmentPattern")));
      def("ClassProperty").field(
        "access",
        // Not "accessibility"?
        or("public", "private", "protected", void 0),
        defaults["undefined"]
      );
      def("ClassAccessorProperty").bases("Declaration", "TSHasOptionalTypeAnnotation");
      def("ClassBody").field("body", [or(
        def("MethodDefinition"),
        def("VariableDeclarator"),
        def("ClassPropertyDefinition"),
        def("ClassProperty"),
        def("ClassPrivateProperty"),
        def("ClassAccessorProperty"),
        def("ClassMethod"),
        def("ClassPrivateMethod"),
        def("StaticBlock"),
        // Just need to add these types:
        def("TSDeclareMethod"),
        TSTypeMember
      )]);
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/gen/namedTypes.js
var require_namedTypes = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/gen/namedTypes.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.namedTypes = void 0;
    var namedTypes;
    /* @__PURE__ */ (function(namedTypes2) {
    })(namedTypes = exports2.namedTypes || (exports2.namedTypes = {}));
  }
});

// node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/main.js
var require_main = __commonJS({
  "node_modules/.pnpm/ast-types@0.16.1/node_modules/ast-types/lib/main.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.visit = exports2.use = exports2.Type = exports2.someField = exports2.PathVisitor = exports2.Path = exports2.NodePath = exports2.namedTypes = exports2.getSupertypeNames = exports2.getFieldValue = exports2.getFieldNames = exports2.getBuilderName = exports2.finalize = exports2.eachField = exports2.defineMethod = exports2.builtInTypes = exports2.builders = exports2.astNodesAreEquivalent = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var fork_1 = tslib_1.__importDefault(require_fork());
    var es_proposals_1 = tslib_1.__importDefault(require_es_proposals());
    var jsx_1 = tslib_1.__importDefault(require_jsx());
    var flow_1 = tslib_1.__importDefault(require_flow());
    var esprima_1 = tslib_1.__importDefault(require_esprima());
    var babel_1 = tslib_1.__importDefault(require_babel());
    var typescript_1 = tslib_1.__importDefault(require_typescript());
    var namedTypes_1 = require_namedTypes();
    Object.defineProperty(exports2, "namedTypes", { enumerable: true, get: function() {
      return namedTypes_1.namedTypes;
    } });
    var _a = (0, fork_1.default)([
      // Feel free to add to or remove from this list of extension modules to
      // configure the precise type hierarchy that you need.
      es_proposals_1.default,
      jsx_1.default,
      flow_1.default,
      esprima_1.default,
      babel_1.default,
      typescript_1.default
    ]);
    var astNodesAreEquivalent = _a.astNodesAreEquivalent;
    var builders = _a.builders;
    var builtInTypes = _a.builtInTypes;
    var defineMethod = _a.defineMethod;
    var eachField = _a.eachField;
    var finalize = _a.finalize;
    var getBuilderName = _a.getBuilderName;
    var getFieldNames = _a.getFieldNames;
    var getFieldValue = _a.getFieldValue;
    var getSupertypeNames = _a.getSupertypeNames;
    var n = _a.namedTypes;
    var NodePath = _a.NodePath;
    var Path = _a.Path;
    var PathVisitor = _a.PathVisitor;
    var someField = _a.someField;
    var Type = _a.Type;
    var use = _a.use;
    var visit2 = _a.visit;
    exports2.astNodesAreEquivalent = astNodesAreEquivalent;
    exports2.builders = builders;
    exports2.builtInTypes = builtInTypes;
    exports2.defineMethod = defineMethod;
    exports2.eachField = eachField;
    exports2.finalize = finalize;
    exports2.getBuilderName = getBuilderName;
    exports2.getFieldNames = getFieldNames;
    exports2.getFieldValue = getFieldValue;
    exports2.getSupertypeNames = getSupertypeNames;
    exports2.NodePath = NodePath;
    exports2.Path = Path;
    exports2.PathVisitor = PathVisitor;
    exports2.someField = someField;
    exports2.Type = Type;
    exports2.use = use;
    exports2.visit = visit2;
    Object.assign(namedTypes_1.namedTypes, n);
  }
});

// node_modules/.pnpm/tiny-invariant@1.3.3/node_modules/tiny-invariant/dist/tiny-invariant.cjs.js
var require_tiny_invariant_cjs = __commonJS({
  "node_modules/.pnpm/tiny-invariant@1.3.3/node_modules/tiny-invariant/dist/tiny-invariant.cjs.js"(exports2, module2) {
    "use strict";
    var isProduction = process.env.NODE_ENV === "production";
    var prefix = "Invariant failed";
    function invariant(condition, message) {
      if (condition) {
        return;
      }
      if (isProduction) {
        throw new Error(prefix);
      }
      var provided = typeof message === "function" ? message() : message;
      var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
      throw new Error(value);
    }
    module2.exports = invariant;
  }
});

// node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/base64.js
var require_base64 = __commonJS({
  "node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/base64.js"(exports2) {
    var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
    exports2.encode = function(number) {
      if (0 <= number && number < intToCharMap.length) {
        return intToCharMap[number];
      }
      throw new TypeError("Must be between 0 and 63: " + number);
    };
    exports2.decode = function(charCode) {
      var bigA = 65;
      var bigZ = 90;
      var littleA = 97;
      var littleZ = 122;
      var zero = 48;
      var nine = 57;
      var plus = 43;
      var slash = 47;
      var littleOffset = 26;
      var numberOffset = 52;
      if (bigA <= charCode && charCode <= bigZ) {
        return charCode - bigA;
      }
      if (littleA <= charCode && charCode <= littleZ) {
        return charCode - littleA + littleOffset;
      }
      if (zero <= charCode && charCode <= nine) {
        return charCode - zero + numberOffset;
      }
      if (charCode == plus) {
        return 62;
      }
      if (charCode == slash) {
        return 63;
      }
      return -1;
    };
  }
});

// node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/base64-vlq.js
var require_base64_vlq = __commonJS({
  "node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/base64-vlq.js"(exports2) {
    var base64 = require_base64();
    var VLQ_BASE_SHIFT = 5;
    var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
    var VLQ_BASE_MASK = VLQ_BASE - 1;
    var VLQ_CONTINUATION_BIT = VLQ_BASE;
    function toVLQSigned(aValue) {
      return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
    }
    function fromVLQSigned(aValue) {
      var isNegative = (aValue & 1) === 1;
      var shifted = aValue >> 1;
      return isNegative ? -shifted : shifted;
    }
    exports2.encode = function base64VLQ_encode(aValue) {
      var encoded = "";
      var digit;
      var vlq = toVLQSigned(aValue);
      do {
        digit = vlq & VLQ_BASE_MASK;
        vlq >>>= VLQ_BASE_SHIFT;
        if (vlq > 0) {
          digit |= VLQ_CONTINUATION_BIT;
        }
        encoded += base64.encode(digit);
      } while (vlq > 0);
      return encoded;
    };
    exports2.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
      var strLen = aStr.length;
      var result = 0;
      var shift = 0;
      var continuation, digit;
      do {
        if (aIndex >= strLen) {
          throw new Error("Expected more digits in base 64 VLQ value.");
        }
        digit = base64.decode(aStr.charCodeAt(aIndex++));
        if (digit === -1) {
          throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
        }
        continuation = !!(digit & VLQ_CONTINUATION_BIT);
        digit &= VLQ_BASE_MASK;
        result = result + (digit << shift);
        shift += VLQ_BASE_SHIFT;
      } while (continuation);
      aOutParam.value = fromVLQSigned(result);
      aOutParam.rest = aIndex;
    };
  }
});

// node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/util.js
var require_util = __commonJS({
  "node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/util.js"(exports2) {
    function getArg(aArgs, aName, aDefaultValue) {
      if (aName in aArgs) {
        return aArgs[aName];
      } else if (arguments.length === 3) {
        return aDefaultValue;
      } else {
        throw new Error('"' + aName + '" is a required argument.');
      }
    }
    exports2.getArg = getArg;
    var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
    var dataUrlRegexp = /^data:.+\,.+$/;
    function urlParse(aUrl) {
      var match = aUrl.match(urlRegexp);
      if (!match) {
        return null;
      }
      return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
      };
    }
    exports2.urlParse = urlParse;
    function urlGenerate(aParsedUrl) {
      var url = "";
      if (aParsedUrl.scheme) {
        url += aParsedUrl.scheme + ":";
      }
      url += "//";
      if (aParsedUrl.auth) {
        url += aParsedUrl.auth + "@";
      }
      if (aParsedUrl.host) {
        url += aParsedUrl.host;
      }
      if (aParsedUrl.port) {
        url += ":" + aParsedUrl.port;
      }
      if (aParsedUrl.path) {
        url += aParsedUrl.path;
      }
      return url;
    }
    exports2.urlGenerate = urlGenerate;
    function normalize(aPath) {
      var path = aPath;
      var url = urlParse(aPath);
      if (url) {
        if (!url.path) {
          return aPath;
        }
        path = url.path;
      }
      var isAbsolute = exports2.isAbsolute(path);
      var parts = path.split(/\/+/);
      for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
        part = parts[i];
        if (part === ".") {
          parts.splice(i, 1);
        } else if (part === "..") {
          up++;
        } else if (up > 0) {
          if (part === "") {
            parts.splice(i + 1, up);
            up = 0;
          } else {
            parts.splice(i, 2);
            up--;
          }
        }
      }
      path = parts.join("/");
      if (path === "") {
        path = isAbsolute ? "/" : ".";
      }
      if (url) {
        url.path = path;
        return urlGenerate(url);
      }
      return path;
    }
    exports2.normalize = normalize;
    function join(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      if (aPath === "") {
        aPath = ".";
      }
      var aPathUrl = urlParse(aPath);
      var aRootUrl = urlParse(aRoot);
      if (aRootUrl) {
        aRoot = aRootUrl.path || "/";
      }
      if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) {
          aPathUrl.scheme = aRootUrl.scheme;
        }
        return urlGenerate(aPathUrl);
      }
      if (aPathUrl || aPath.match(dataUrlRegexp)) {
        return aPath;
      }
      if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
      }
      var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
      if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
      }
      return joined;
    }
    exports2.join = join;
    exports2.isAbsolute = function(aPath) {
      return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
    };
    function relative(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      aRoot = aRoot.replace(/\/$/, "");
      var level = 0;
      while (aPath.indexOf(aRoot + "/") !== 0) {
        var index = aRoot.lastIndexOf("/");
        if (index < 0) {
          return aPath;
        }
        aRoot = aRoot.slice(0, index);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
          return aPath;
        }
        ++level;
      }
      return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
    }
    exports2.relative = relative;
    var supportsNullProto = function() {
      var obj = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in obj);
    }();
    function identity(s) {
      return s;
    }
    function toSetString(aStr) {
      if (isProtoString(aStr)) {
        return "$" + aStr;
      }
      return aStr;
    }
    exports2.toSetString = supportsNullProto ? identity : toSetString;
    function fromSetString(aStr) {
      if (isProtoString(aStr)) {
        return aStr.slice(1);
      }
      return aStr;
    }
    exports2.fromSetString = supportsNullProto ? identity : fromSetString;
    function isProtoString(s) {
      if (!s) {
        return false;
      }
      var length = s.length;
      if (length < 9) {
        return false;
      }
      if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
        return false;
      }
      for (var i = length - 10; i >= 0; i--) {
        if (s.charCodeAt(i) !== 36) {
          return false;
        }
      }
      return true;
    }
    function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
      var cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0 || onlyCompareOriginal) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports2.compareByOriginalPositions = compareByOriginalPositions;
    function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0 || onlyCompareGenerated) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports2.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
    function strcmp(aStr1, aStr2) {
      if (aStr1 === aStr2) {
        return 0;
      }
      if (aStr1 === null) {
        return 1;
      }
      if (aStr2 === null) {
        return -1;
      }
      if (aStr1 > aStr2) {
        return 1;
      }
      return -1;
    }
    function compareByGeneratedPositionsInflated(mappingA, mappingB) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports2.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
    function parseSourceMapInput(str) {
      return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
    }
    exports2.parseSourceMapInput = parseSourceMapInput;
    function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
      sourceURL = sourceURL || "";
      if (sourceRoot) {
        if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
          sourceRoot += "/";
        }
        sourceURL = sourceRoot + sourceURL;
      }
      if (sourceMapURL) {
        var parsed = urlParse(sourceMapURL);
        if (!parsed) {
          throw new Error("sourceMapURL could not be parsed");
        }
        if (parsed.path) {
          var index = parsed.path.lastIndexOf("/");
          if (index >= 0) {
            parsed.path = parsed.path.substring(0, index + 1);
          }
        }
        sourceURL = join(urlGenerate(parsed), sourceURL);
      }
      return normalize(sourceURL);
    }
    exports2.computeSourceURL = computeSourceURL;
  }
});

// node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/array-set.js
var require_array_set = __commonJS({
  "node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/array-set.js"(exports2) {
    var util = require_util();
    var has = Object.prototype.hasOwnProperty;
    var hasNativeMap = typeof Map !== "undefined";
    function ArraySet() {
      this._array = [];
      this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
    }
    ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
      var set = new ArraySet();
      for (var i = 0, len = aArray.length; i < len; i++) {
        set.add(aArray[i], aAllowDuplicates);
      }
      return set;
    };
    ArraySet.prototype.size = function ArraySet_size() {
      return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
    };
    ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
      var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
      var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
      var idx = this._array.length;
      if (!isDuplicate || aAllowDuplicates) {
        this._array.push(aStr);
      }
      if (!isDuplicate) {
        if (hasNativeMap) {
          this._set.set(aStr, idx);
        } else {
          this._set[sStr] = idx;
        }
      }
    };
    ArraySet.prototype.has = function ArraySet_has(aStr) {
      if (hasNativeMap) {
        return this._set.has(aStr);
      } else {
        var sStr = util.toSetString(aStr);
        return has.call(this._set, sStr);
      }
    };
    ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
      if (hasNativeMap) {
        var idx = this._set.get(aStr);
        if (idx >= 0) {
          return idx;
        }
      } else {
        var sStr = util.toSetString(aStr);
        if (has.call(this._set, sStr)) {
          return this._set[sStr];
        }
      }
      throw new Error('"' + aStr + '" is not in the set.');
    };
    ArraySet.prototype.at = function ArraySet_at(aIdx) {
      if (aIdx >= 0 && aIdx < this._array.length) {
        return this._array[aIdx];
      }
      throw new Error("No element indexed by " + aIdx);
    };
    ArraySet.prototype.toArray = function ArraySet_toArray() {
      return this._array.slice();
    };
    exports2.ArraySet = ArraySet;
  }
});

// node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/mapping-list.js
var require_mapping_list = __commonJS({
  "node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/mapping-list.js"(exports2) {
    var util = require_util();
    function generatedPositionAfter(mappingA, mappingB) {
      var lineA = mappingA.generatedLine;
      var lineB = mappingB.generatedLine;
      var columnA = mappingA.generatedColumn;
      var columnB = mappingB.generatedColumn;
      return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
    }
    function MappingList() {
      this._array = [];
      this._sorted = true;
      this._last = { generatedLine: -1, generatedColumn: 0 };
    }
    MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
      this._array.forEach(aCallback, aThisArg);
    };
    MappingList.prototype.add = function MappingList_add(aMapping) {
      if (generatedPositionAfter(this._last, aMapping)) {
        this._last = aMapping;
        this._array.push(aMapping);
      } else {
        this._sorted = false;
        this._array.push(aMapping);
      }
    };
    MappingList.prototype.toArray = function MappingList_toArray() {
      if (!this._sorted) {
        this._array.sort(util.compareByGeneratedPositionsInflated);
        this._sorted = true;
      }
      return this._array;
    };
    exports2.MappingList = MappingList;
  }
});

// node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/source-map-generator.js
var require_source_map_generator = __commonJS({
  "node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/source-map-generator.js"(exports2) {
    var base64VLQ = require_base64_vlq();
    var util = require_util();
    var ArraySet = require_array_set().ArraySet;
    var MappingList = require_mapping_list().MappingList;
    function SourceMapGenerator(aArgs) {
      if (!aArgs) {
        aArgs = {};
      }
      this._file = util.getArg(aArgs, "file", null);
      this._sourceRoot = util.getArg(aArgs, "sourceRoot", null);
      this._skipValidation = util.getArg(aArgs, "skipValidation", false);
      this._sources = new ArraySet();
      this._names = new ArraySet();
      this._mappings = new MappingList();
      this._sourcesContents = null;
    }
    SourceMapGenerator.prototype._version = 3;
    SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
      var sourceRoot = aSourceMapConsumer.sourceRoot;
      var generator = new SourceMapGenerator({
        file: aSourceMapConsumer.file,
        sourceRoot
      });
      aSourceMapConsumer.eachMapping(function(mapping) {
        var newMapping = {
          generated: {
            line: mapping.generatedLine,
            column: mapping.generatedColumn
          }
        };
        if (mapping.source != null) {
          newMapping.source = mapping.source;
          if (sourceRoot != null) {
            newMapping.source = util.relative(sourceRoot, newMapping.source);
          }
          newMapping.original = {
            line: mapping.originalLine,
            column: mapping.originalColumn
          };
          if (mapping.name != null) {
            newMapping.name = mapping.name;
          }
        }
        generator.addMapping(newMapping);
      });
      aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var sourceRelative = sourceFile;
        if (sourceRoot !== null) {
          sourceRelative = util.relative(sourceRoot, sourceFile);
        }
        if (!generator._sources.has(sourceRelative)) {
          generator._sources.add(sourceRelative);
        }
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          generator.setSourceContent(sourceFile, content);
        }
      });
      return generator;
    };
    SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
      var generated = util.getArg(aArgs, "generated");
      var original = util.getArg(aArgs, "original", null);
      var source = util.getArg(aArgs, "source", null);
      var name = util.getArg(aArgs, "name", null);
      if (!this._skipValidation) {
        this._validateMapping(generated, original, source, name);
      }
      if (source != null) {
        source = String(source);
        if (!this._sources.has(source)) {
          this._sources.add(source);
        }
      }
      if (name != null) {
        name = String(name);
        if (!this._names.has(name)) {
          this._names.add(name);
        }
      }
      this._mappings.add({
        generatedLine: generated.line,
        generatedColumn: generated.column,
        originalLine: original != null && original.line,
        originalColumn: original != null && original.column,
        source,
        name
      });
    };
    SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
      var source = aSourceFile;
      if (this._sourceRoot != null) {
        source = util.relative(this._sourceRoot, source);
      }
      if (aSourceContent != null) {
        if (!this._sourcesContents) {
          this._sourcesContents = /* @__PURE__ */ Object.create(null);
        }
        this._sourcesContents[util.toSetString(source)] = aSourceContent;
      } else if (this._sourcesContents) {
        delete this._sourcesContents[util.toSetString(source)];
        if (Object.keys(this._sourcesContents).length === 0) {
          this._sourcesContents = null;
        }
      }
    };
    SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
      var sourceFile = aSourceFile;
      if (aSourceFile == null) {
        if (aSourceMapConsumer.file == null) {
          throw new Error(
            `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
          );
        }
        sourceFile = aSourceMapConsumer.file;
      }
      var sourceRoot = this._sourceRoot;
      if (sourceRoot != null) {
        sourceFile = util.relative(sourceRoot, sourceFile);
      }
      var newSources = new ArraySet();
      var newNames = new ArraySet();
      this._mappings.unsortedForEach(function(mapping) {
        if (mapping.source === sourceFile && mapping.originalLine != null) {
          var original = aSourceMapConsumer.originalPositionFor({
            line: mapping.originalLine,
            column: mapping.originalColumn
          });
          if (original.source != null) {
            mapping.source = original.source;
            if (aSourceMapPath != null) {
              mapping.source = util.join(aSourceMapPath, mapping.source);
            }
            if (sourceRoot != null) {
              mapping.source = util.relative(sourceRoot, mapping.source);
            }
            mapping.originalLine = original.line;
            mapping.originalColumn = original.column;
            if (original.name != null) {
              mapping.name = original.name;
            }
          }
        }
        var source = mapping.source;
        if (source != null && !newSources.has(source)) {
          newSources.add(source);
        }
        var name = mapping.name;
        if (name != null && !newNames.has(name)) {
          newNames.add(name);
        }
      }, this);
      this._sources = newSources;
      this._names = newNames;
      aSourceMapConsumer.sources.forEach(function(sourceFile2) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
        if (content != null) {
          if (aSourceMapPath != null) {
            sourceFile2 = util.join(aSourceMapPath, sourceFile2);
          }
          if (sourceRoot != null) {
            sourceFile2 = util.relative(sourceRoot, sourceFile2);
          }
          this.setSourceContent(sourceFile2, content);
        }
      }, this);
    };
    SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
      if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
        throw new Error(
          "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
        );
      }
      if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
        return;
      } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
        return;
      } else {
        throw new Error("Invalid mapping: " + JSON.stringify({
          generated: aGenerated,
          source: aSource,
          original: aOriginal,
          name: aName
        }));
      }
    };
    SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
      var previousGeneratedColumn = 0;
      var previousGeneratedLine = 1;
      var previousOriginalColumn = 0;
      var previousOriginalLine = 0;
      var previousName = 0;
      var previousSource = 0;
      var result = "";
      var next;
      var mapping;
      var nameIdx;
      var sourceIdx;
      var mappings = this._mappings.toArray();
      for (var i = 0, len = mappings.length; i < len; i++) {
        mapping = mappings[i];
        next = "";
        if (mapping.generatedLine !== previousGeneratedLine) {
          previousGeneratedColumn = 0;
          while (mapping.generatedLine !== previousGeneratedLine) {
            next += ";";
            previousGeneratedLine++;
          }
        } else {
          if (i > 0) {
            if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
              continue;
            }
            next += ",";
          }
        }
        next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
        previousGeneratedColumn = mapping.generatedColumn;
        if (mapping.source != null) {
          sourceIdx = this._sources.indexOf(mapping.source);
          next += base64VLQ.encode(sourceIdx - previousSource);
          previousSource = sourceIdx;
          next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
          previousOriginalLine = mapping.originalLine - 1;
          next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
          previousOriginalColumn = mapping.originalColumn;
          if (mapping.name != null) {
            nameIdx = this._names.indexOf(mapping.name);
            next += base64VLQ.encode(nameIdx - previousName);
            previousName = nameIdx;
          }
        }
        result += next;
      }
      return result;
    };
    SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
      return aSources.map(function(source) {
        if (!this._sourcesContents) {
          return null;
        }
        if (aSourceRoot != null) {
          source = util.relative(aSourceRoot, source);
        }
        var key = util.toSetString(source);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
      }, this);
    };
    SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
      var map = {
        version: this._version,
        sources: this._sources.toArray(),
        names: this._names.toArray(),
        mappings: this._serializeMappings()
      };
      if (this._file != null) {
        map.file = this._file;
      }
      if (this._sourceRoot != null) {
        map.sourceRoot = this._sourceRoot;
      }
      if (this._sourcesContents) {
        map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
      }
      return map;
    };
    SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
      return JSON.stringify(this.toJSON());
    };
    exports2.SourceMapGenerator = SourceMapGenerator;
  }
});

// node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/binary-search.js
var require_binary_search = __commonJS({
  "node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/binary-search.js"(exports2) {
    exports2.GREATEST_LOWER_BOUND = 1;
    exports2.LEAST_UPPER_BOUND = 2;
    function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
      var mid = Math.floor((aHigh - aLow) / 2) + aLow;
      var cmp = aCompare(aNeedle, aHaystack[mid], true);
      if (cmp === 0) {
        return mid;
      } else if (cmp > 0) {
        if (aHigh - mid > 1) {
          return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports2.LEAST_UPPER_BOUND) {
          return aHigh < aHaystack.length ? aHigh : -1;
        } else {
          return mid;
        }
      } else {
        if (mid - aLow > 1) {
          return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports2.LEAST_UPPER_BOUND) {
          return mid;
        } else {
          return aLow < 0 ? -1 : aLow;
        }
      }
    }
    exports2.search = function search(aNeedle, aHaystack, aCompare, aBias) {
      if (aHaystack.length === 0) {
        return -1;
      }
      var index = recursiveSearch(
        -1,
        aHaystack.length,
        aNeedle,
        aHaystack,
        aCompare,
        aBias || exports2.GREATEST_LOWER_BOUND
      );
      if (index < 0) {
        return -1;
      }
      while (index - 1 >= 0) {
        if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
          break;
        }
        --index;
      }
      return index;
    };
  }
});

// node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/quick-sort.js
var require_quick_sort = __commonJS({
  "node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/quick-sort.js"(exports2) {
    function swap(ary, x, y) {
      var temp = ary[x];
      ary[x] = ary[y];
      ary[y] = temp;
    }
    function randomIntInRange(low, high) {
      return Math.round(low + Math.random() * (high - low));
    }
    function doQuickSort(ary, comparator, p, r) {
      if (p < r) {
        var pivotIndex = randomIntInRange(p, r);
        var i = p - 1;
        swap(ary, pivotIndex, r);
        var pivot = ary[r];
        for (var j = p; j < r; j++) {
          if (comparator(ary[j], pivot) <= 0) {
            i += 1;
            swap(ary, i, j);
          }
        }
        swap(ary, i + 1, j);
        var q = i + 1;
        doQuickSort(ary, comparator, p, q - 1);
        doQuickSort(ary, comparator, q + 1, r);
      }
    }
    exports2.quickSort = function(ary, comparator) {
      doQuickSort(ary, comparator, 0, ary.length - 1);
    };
  }
});

// node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/source-map-consumer.js
var require_source_map_consumer = __commonJS({
  "node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/source-map-consumer.js"(exports2) {
    var util = require_util();
    var binarySearch = require_binary_search();
    var ArraySet = require_array_set().ArraySet;
    var base64VLQ = require_base64_vlq();
    var quickSort = require_quick_sort().quickSort;
    function SourceMapConsumer(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
      }
      return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
    }
    SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
      return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
    };
    SourceMapConsumer.prototype._version = 3;
    SourceMapConsumer.prototype.__generatedMappings = null;
    Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
      configurable: true,
      enumerable: true,
      get: function() {
        if (!this.__generatedMappings) {
          this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__generatedMappings;
      }
    });
    SourceMapConsumer.prototype.__originalMappings = null;
    Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
      configurable: true,
      enumerable: true,
      get: function() {
        if (!this.__originalMappings) {
          this._parseMappings(this._mappings, this.sourceRoot);
        }
        return this.__originalMappings;
      }
    });
    SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
      var c = aStr.charAt(index);
      return c === ";" || c === ",";
    };
    SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      throw new Error("Subclasses must implement _parseMappings");
    };
    SourceMapConsumer.GENERATED_ORDER = 1;
    SourceMapConsumer.ORIGINAL_ORDER = 2;
    SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
    SourceMapConsumer.LEAST_UPPER_BOUND = 2;
    SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
      var context = aContext || null;
      var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
      var mappings;
      switch (order) {
        case SourceMapConsumer.GENERATED_ORDER:
          mappings = this._generatedMappings;
          break;
        case SourceMapConsumer.ORIGINAL_ORDER:
          mappings = this._originalMappings;
          break;
        default:
          throw new Error("Unknown order of iteration.");
      }
      var sourceRoot = this.sourceRoot;
      mappings.map(function(mapping) {
        var source = mapping.source === null ? null : this._sources.at(mapping.source);
        source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
        return {
          source,
          generatedLine: mapping.generatedLine,
          generatedColumn: mapping.generatedColumn,
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: mapping.name === null ? null : this._names.at(mapping.name)
        };
      }, this).forEach(aCallback, context);
    };
    SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
      var line = util.getArg(aArgs, "line");
      var needle = {
        source: util.getArg(aArgs, "source"),
        originalLine: line,
        originalColumn: util.getArg(aArgs, "column", 0)
      };
      needle.source = this._findSourceIndex(needle.source);
      if (needle.source < 0) {
        return [];
      }
      var mappings = [];
      var index = this._findMapping(
        needle,
        this._originalMappings,
        "originalLine",
        "originalColumn",
        util.compareByOriginalPositions,
        binarySearch.LEAST_UPPER_BOUND
      );
      if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (aArgs.column === void 0) {
          var originalLine = mapping.originalLine;
          while (mapping && mapping.originalLine === originalLine) {
            mappings.push({
              line: util.getArg(mapping, "generatedLine", null),
              column: util.getArg(mapping, "generatedColumn", null),
              lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
            });
            mapping = this._originalMappings[++index];
          }
        } else {
          var originalColumn = mapping.originalColumn;
          while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
            mappings.push({
              line: util.getArg(mapping, "generatedLine", null),
              column: util.getArg(mapping, "generatedColumn", null),
              lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
            });
            mapping = this._originalMappings[++index];
          }
        }
      }
      return mappings;
    };
    exports2.SourceMapConsumer = SourceMapConsumer;
    function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
      }
      var version = util.getArg(sourceMap, "version");
      var sources = util.getArg(sourceMap, "sources");
      var names = util.getArg(sourceMap, "names", []);
      var sourceRoot = util.getArg(sourceMap, "sourceRoot", null);
      var sourcesContent = util.getArg(sourceMap, "sourcesContent", null);
      var mappings = util.getArg(sourceMap, "mappings");
      var file = util.getArg(sourceMap, "file", null);
      if (version != this._version) {
        throw new Error("Unsupported version: " + version);
      }
      if (sourceRoot) {
        sourceRoot = util.normalize(sourceRoot);
      }
      sources = sources.map(String).map(util.normalize).map(function(source) {
        return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
      });
      this._names = ArraySet.fromArray(names.map(String), true);
      this._sources = ArraySet.fromArray(sources, true);
      this._absoluteSources = this._sources.toArray().map(function(s) {
        return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
      });
      this.sourceRoot = sourceRoot;
      this.sourcesContent = sourcesContent;
      this._mappings = mappings;
      this._sourceMapURL = aSourceMapURL;
      this.file = file;
    }
    BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
    BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
    BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
      var relativeSource = aSource;
      if (this.sourceRoot != null) {
        relativeSource = util.relative(this.sourceRoot, relativeSource);
      }
      if (this._sources.has(relativeSource)) {
        return this._sources.indexOf(relativeSource);
      }
      var i;
      for (i = 0; i < this._absoluteSources.length; ++i) {
        if (this._absoluteSources[i] == aSource) {
          return i;
        }
      }
      return -1;
    };
    BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
      var smc = Object.create(BasicSourceMapConsumer.prototype);
      var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
      var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
      smc.sourceRoot = aSourceMap._sourceRoot;
      smc.sourcesContent = aSourceMap._generateSourcesContent(
        smc._sources.toArray(),
        smc.sourceRoot
      );
      smc.file = aSourceMap._file;
      smc._sourceMapURL = aSourceMapURL;
      smc._absoluteSources = smc._sources.toArray().map(function(s) {
        return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
      });
      var generatedMappings = aSourceMap._mappings.toArray().slice();
      var destGeneratedMappings = smc.__generatedMappings = [];
      var destOriginalMappings = smc.__originalMappings = [];
      for (var i = 0, length = generatedMappings.length; i < length; i++) {
        var srcMapping = generatedMappings[i];
        var destMapping = new Mapping();
        destMapping.generatedLine = srcMapping.generatedLine;
        destMapping.generatedColumn = srcMapping.generatedColumn;
        if (srcMapping.source) {
          destMapping.source = sources.indexOf(srcMapping.source);
          destMapping.originalLine = srcMapping.originalLine;
          destMapping.originalColumn = srcMapping.originalColumn;
          if (srcMapping.name) {
            destMapping.name = names.indexOf(srcMapping.name);
          }
          destOriginalMappings.push(destMapping);
        }
        destGeneratedMappings.push(destMapping);
      }
      quickSort(smc.__originalMappings, util.compareByOriginalPositions);
      return smc;
    };
    BasicSourceMapConsumer.prototype._version = 3;
    Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
      get: function() {
        return this._absoluteSources.slice();
      }
    });
    function Mapping() {
      this.generatedLine = 0;
      this.generatedColumn = 0;
      this.source = null;
      this.originalLine = null;
      this.originalColumn = null;
      this.name = null;
    }
    BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      var generatedLine = 1;
      var previousGeneratedColumn = 0;
      var previousOriginalLine = 0;
      var previousOriginalColumn = 0;
      var previousSource = 0;
      var previousName = 0;
      var length = aStr.length;
      var index = 0;
      var cachedSegments = {};
      var temp = {};
      var originalMappings = [];
      var generatedMappings = [];
      var mapping, str, segment, end, value;
      while (index < length) {
        if (aStr.charAt(index) === ";") {
          generatedLine++;
          index++;
          previousGeneratedColumn = 0;
        } else if (aStr.charAt(index) === ",") {
          index++;
        } else {
          mapping = new Mapping();
          mapping.generatedLine = generatedLine;
          for (end = index; end < length; end++) {
            if (this._charIsMappingSeparator(aStr, end)) {
              break;
            }
          }
          str = aStr.slice(index, end);
          segment = cachedSegments[str];
          if (segment) {
            index += str.length;
          } else {
            segment = [];
            while (index < end) {
              base64VLQ.decode(aStr, index, temp);
              value = temp.value;
              index = temp.rest;
              segment.push(value);
            }
            if (segment.length === 2) {
              throw new Error("Found a source, but no line and column");
            }
            if (segment.length === 3) {
              throw new Error("Found a source and line, but no column");
            }
            cachedSegments[str] = segment;
          }
          mapping.generatedColumn = previousGeneratedColumn + segment[0];
          previousGeneratedColumn = mapping.generatedColumn;
          if (segment.length > 1) {
            mapping.source = previousSource + segment[1];
            previousSource += segment[1];
            mapping.originalLine = previousOriginalLine + segment[2];
            previousOriginalLine = mapping.originalLine;
            mapping.originalLine += 1;
            mapping.originalColumn = previousOriginalColumn + segment[3];
            previousOriginalColumn = mapping.originalColumn;
            if (segment.length > 4) {
              mapping.name = previousName + segment[4];
              previousName += segment[4];
            }
          }
          generatedMappings.push(mapping);
          if (typeof mapping.originalLine === "number") {
            originalMappings.push(mapping);
          }
        }
      }
      quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
      this.__generatedMappings = generatedMappings;
      quickSort(originalMappings, util.compareByOriginalPositions);
      this.__originalMappings = originalMappings;
    };
    BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
      if (aNeedle[aLineName] <= 0) {
        throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
      }
      if (aNeedle[aColumnName] < 0) {
        throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
      }
      return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
    };
    BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
      for (var index = 0; index < this._generatedMappings.length; ++index) {
        var mapping = this._generatedMappings[index];
        if (index + 1 < this._generatedMappings.length) {
          var nextMapping = this._generatedMappings[index + 1];
          if (mapping.generatedLine === nextMapping.generatedLine) {
            mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
            continue;
          }
        }
        mapping.lastGeneratedColumn = Infinity;
      }
    };
    BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
      };
      var index = this._findMapping(
        needle,
        this._generatedMappings,
        "generatedLine",
        "generatedColumn",
        util.compareByGeneratedPositionsDeflated,
        util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
      );
      if (index >= 0) {
        var mapping = this._generatedMappings[index];
        if (mapping.generatedLine === needle.generatedLine) {
          var source = util.getArg(mapping, "source", null);
          if (source !== null) {
            source = this._sources.at(source);
            source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
          }
          var name = util.getArg(mapping, "name", null);
          if (name !== null) {
            name = this._names.at(name);
          }
          return {
            source,
            line: util.getArg(mapping, "originalLine", null),
            column: util.getArg(mapping, "originalColumn", null),
            name
          };
        }
      }
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    };
    BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
      if (!this.sourcesContent) {
        return false;
      }
      return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
        return sc == null;
      });
    };
    BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      if (!this.sourcesContent) {
        return null;
      }
      var index = this._findSourceIndex(aSource);
      if (index >= 0) {
        return this.sourcesContent[index];
      }
      var relativeSource = aSource;
      if (this.sourceRoot != null) {
        relativeSource = util.relative(this.sourceRoot, relativeSource);
      }
      var url;
      if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
        var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
        if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
          return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
        }
        if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
          return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
        }
      }
      if (nullOnMissing) {
        return null;
      } else {
        throw new Error('"' + relativeSource + '" is not in the SourceMap.');
      }
    };
    BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
      var source = util.getArg(aArgs, "source");
      source = this._findSourceIndex(source);
      if (source < 0) {
        return {
          line: null,
          column: null,
          lastColumn: null
        };
      }
      var needle = {
        source,
        originalLine: util.getArg(aArgs, "line"),
        originalColumn: util.getArg(aArgs, "column")
      };
      var index = this._findMapping(
        needle,
        this._originalMappings,
        "originalLine",
        "originalColumn",
        util.compareByOriginalPositions,
        util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
      );
      if (index >= 0) {
        var mapping = this._originalMappings[index];
        if (mapping.source === needle.source) {
          return {
            line: util.getArg(mapping, "generatedLine", null),
            column: util.getArg(mapping, "generatedColumn", null),
            lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
          };
        }
      }
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    };
    exports2.BasicSourceMapConsumer = BasicSourceMapConsumer;
    function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
      var sourceMap = aSourceMap;
      if (typeof aSourceMap === "string") {
        sourceMap = util.parseSourceMapInput(aSourceMap);
      }
      var version = util.getArg(sourceMap, "version");
      var sections = util.getArg(sourceMap, "sections");
      if (version != this._version) {
        throw new Error("Unsupported version: " + version);
      }
      this._sources = new ArraySet();
      this._names = new ArraySet();
      var lastOffset = {
        line: -1,
        column: 0
      };
      this._sections = sections.map(function(s) {
        if (s.url) {
          throw new Error("Support for url field in sections not implemented.");
        }
        var offset = util.getArg(s, "offset");
        var offsetLine = util.getArg(offset, "line");
        var offsetColumn = util.getArg(offset, "column");
        if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
          throw new Error("Section offsets must be ordered and non-overlapping.");
        }
        lastOffset = offset;
        return {
          generatedOffset: {
            // The offset fields are 0-based, but we use 1-based indices when
            // encoding/decoding from VLQ.
            generatedLine: offsetLine + 1,
            generatedColumn: offsetColumn + 1
          },
          consumer: new SourceMapConsumer(util.getArg(s, "map"), aSourceMapURL)
        };
      });
    }
    IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
    IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
    IndexedSourceMapConsumer.prototype._version = 3;
    Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
      get: function() {
        var sources = [];
        for (var i = 0; i < this._sections.length; i++) {
          for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
            sources.push(this._sections[i].consumer.sources[j]);
          }
        }
        return sources;
      }
    });
    IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
      var needle = {
        generatedLine: util.getArg(aArgs, "line"),
        generatedColumn: util.getArg(aArgs, "column")
      };
      var sectionIndex = binarySearch.search(
        needle,
        this._sections,
        function(needle2, section2) {
          var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
          if (cmp) {
            return cmp;
          }
          return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
        }
      );
      var section = this._sections[sectionIndex];
      if (!section) {
        return {
          source: null,
          line: null,
          column: null,
          name: null
        };
      }
      return section.consumer.originalPositionFor({
        line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
        column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        bias: aArgs.bias
      });
    };
    IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
      return this._sections.every(function(s) {
        return s.consumer.hasContentsOfAllSources();
      });
    };
    IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var content = section.consumer.sourceContentFor(aSource, true);
        if (content) {
          return content;
        }
      }
      if (nullOnMissing) {
        return null;
      } else {
        throw new Error('"' + aSource + '" is not in the SourceMap.');
      }
    };
    IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        if (section.consumer._findSourceIndex(util.getArg(aArgs, "source")) === -1) {
          continue;
        }
        var generatedPosition = section.consumer.generatedPositionFor(aArgs);
        if (generatedPosition) {
          var ret = {
            line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
            column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
          };
          return ret;
        }
      }
      return {
        line: null,
        column: null
      };
    };
    IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
      this.__generatedMappings = [];
      this.__originalMappings = [];
      for (var i = 0; i < this._sections.length; i++) {
        var section = this._sections[i];
        var sectionMappings = section.consumer._generatedMappings;
        for (var j = 0; j < sectionMappings.length; j++) {
          var mapping = sectionMappings[j];
          var source = section.consumer._sources.at(mapping.source);
          source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
          this._sources.add(source);
          source = this._sources.indexOf(source);
          var name = null;
          if (mapping.name) {
            name = section.consumer._names.at(mapping.name);
            this._names.add(name);
            name = this._names.indexOf(name);
          }
          var adjustedMapping = {
            source,
            generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
            generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
            originalLine: mapping.originalLine,
            originalColumn: mapping.originalColumn,
            name
          };
          this.__generatedMappings.push(adjustedMapping);
          if (typeof adjustedMapping.originalLine === "number") {
            this.__originalMappings.push(adjustedMapping);
          }
        }
      }
      quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
      quickSort(this.__originalMappings, util.compareByOriginalPositions);
    };
    exports2.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
  }
});

// node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/source-node.js
var require_source_node = __commonJS({
  "node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/lib/source-node.js"(exports2) {
    var SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
    var util = require_util();
    var REGEX_NEWLINE = /(\r?\n)/;
    var NEWLINE_CODE = 10;
    var isSourceNode = "$$$isSourceNode$$$";
    function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
      this.children = [];
      this.sourceContents = {};
      this.line = aLine == null ? null : aLine;
      this.column = aColumn == null ? null : aColumn;
      this.source = aSource == null ? null : aSource;
      this.name = aName == null ? null : aName;
      this[isSourceNode] = true;
      if (aChunks != null) this.add(aChunks);
    }
    SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
      var node = new SourceNode();
      var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
      var remainingLinesIndex = 0;
      var shiftNextLine = function() {
        var lineContents = getNextLine();
        var newLine = getNextLine() || "";
        return lineContents + newLine;
        function getNextLine() {
          return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
        }
      };
      var lastGeneratedLine = 1, lastGeneratedColumn = 0;
      var lastMapping = null;
      aSourceMapConsumer.eachMapping(function(mapping) {
        if (lastMapping !== null) {
          if (lastGeneratedLine < mapping.generatedLine) {
            addMappingWithCode(lastMapping, shiftNextLine());
            lastGeneratedLine++;
            lastGeneratedColumn = 0;
          } else {
            var nextLine = remainingLines[remainingLinesIndex] || "";
            var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
            remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
            lastGeneratedColumn = mapping.generatedColumn;
            addMappingWithCode(lastMapping, code);
            lastMapping = mapping;
            return;
          }
        }
        while (lastGeneratedLine < mapping.generatedLine) {
          node.add(shiftNextLine());
          lastGeneratedLine++;
        }
        if (lastGeneratedColumn < mapping.generatedColumn) {
          var nextLine = remainingLines[remainingLinesIndex] || "";
          node.add(nextLine.substr(0, mapping.generatedColumn));
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
        }
        lastMapping = mapping;
      }, this);
      if (remainingLinesIndex < remainingLines.length) {
        if (lastMapping) {
          addMappingWithCode(lastMapping, shiftNextLine());
        }
        node.add(remainingLines.splice(remainingLinesIndex).join(""));
      }
      aSourceMapConsumer.sources.forEach(function(sourceFile) {
        var content = aSourceMapConsumer.sourceContentFor(sourceFile);
        if (content != null) {
          if (aRelativePath != null) {
            sourceFile = util.join(aRelativePath, sourceFile);
          }
          node.setSourceContent(sourceFile, content);
        }
      });
      return node;
      function addMappingWithCode(mapping, code) {
        if (mapping === null || mapping.source === void 0) {
          node.add(code);
        } else {
          var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
          node.add(new SourceNode(
            mapping.originalLine,
            mapping.originalColumn,
            source,
            code,
            mapping.name
          ));
        }
      }
    };
    SourceNode.prototype.add = function SourceNode_add(aChunk) {
      if (Array.isArray(aChunk)) {
        aChunk.forEach(function(chunk) {
          this.add(chunk);
        }, this);
      } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        if (aChunk) {
          this.children.push(aChunk);
        }
      } else {
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
        );
      }
      return this;
    };
    SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
      if (Array.isArray(aChunk)) {
        for (var i = aChunk.length - 1; i >= 0; i--) {
          this.prepend(aChunk[i]);
        }
      } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
        this.children.unshift(aChunk);
      } else {
        throw new TypeError(
          "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
        );
      }
      return this;
    };
    SourceNode.prototype.walk = function SourceNode_walk(aFn) {
      var chunk;
      for (var i = 0, len = this.children.length; i < len; i++) {
        chunk = this.children[i];
        if (chunk[isSourceNode]) {
          chunk.walk(aFn);
        } else {
          if (chunk !== "") {
            aFn(chunk, {
              source: this.source,
              line: this.line,
              column: this.column,
              name: this.name
            });
          }
        }
      }
    };
    SourceNode.prototype.join = function SourceNode_join(aSep) {
      var newChildren;
      var i;
      var len = this.children.length;
      if (len > 0) {
        newChildren = [];
        for (i = 0; i < len - 1; i++) {
          newChildren.push(this.children[i]);
          newChildren.push(aSep);
        }
        newChildren.push(this.children[i]);
        this.children = newChildren;
      }
      return this;
    };
    SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
      var lastChild = this.children[this.children.length - 1];
      if (lastChild[isSourceNode]) {
        lastChild.replaceRight(aPattern, aReplacement);
      } else if (typeof lastChild === "string") {
        this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
      } else {
        this.children.push("".replace(aPattern, aReplacement));
      }
      return this;
    };
    SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
      this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
    };
    SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
      for (var i = 0, len = this.children.length; i < len; i++) {
        if (this.children[i][isSourceNode]) {
          this.children[i].walkSourceContents(aFn);
        }
      }
      var sources = Object.keys(this.sourceContents);
      for (var i = 0, len = sources.length; i < len; i++) {
        aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
      }
    };
    SourceNode.prototype.toString = function SourceNode_toString() {
      var str = "";
      this.walk(function(chunk) {
        str += chunk;
      });
      return str;
    };
    SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
      var generated = {
        code: "",
        line: 1,
        column: 0
      };
      var map = new SourceMapGenerator(aArgs);
      var sourceMappingActive = false;
      var lastOriginalSource = null;
      var lastOriginalLine = null;
      var lastOriginalColumn = null;
      var lastOriginalName = null;
      this.walk(function(chunk, original) {
        generated.code += chunk;
        if (original.source !== null && original.line !== null && original.column !== null) {
          if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
            map.addMapping({
              source: original.source,
              original: {
                line: original.line,
                column: original.column
              },
              generated: {
                line: generated.line,
                column: generated.column
              },
              name: original.name
            });
          }
          lastOriginalSource = original.source;
          lastOriginalLine = original.line;
          lastOriginalColumn = original.column;
          lastOriginalName = original.name;
          sourceMappingActive = true;
        } else if (sourceMappingActive) {
          map.addMapping({
            generated: {
              line: generated.line,
              column: generated.column
            }
          });
          lastOriginalSource = null;
          sourceMappingActive = false;
        }
        for (var idx = 0, length = chunk.length; idx < length; idx++) {
          if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
            generated.line++;
            generated.column = 0;
            if (idx + 1 === length) {
              lastOriginalSource = null;
              sourceMappingActive = false;
            } else if (sourceMappingActive) {
              map.addMapping({
                source: original.source,
                original: {
                  line: original.line,
                  column: original.column
                },
                generated: {
                  line: generated.line,
                  column: generated.column
                },
                name: original.name
              });
            }
          } else {
            generated.column++;
          }
        }
      });
      this.walkSourceContents(function(sourceFile, sourceContent) {
        map.setSourceContent(sourceFile, sourceContent);
      });
      return { code: generated.code, map };
    };
    exports2.SourceNode = SourceNode;
  }
});

// node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/source-map.js
var require_source_map = __commonJS({
  "node_modules/.pnpm/source-map@0.6.1/node_modules/source-map/source-map.js"(exports2) {
    exports2.SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
    exports2.SourceMapConsumer = require_source_map_consumer().SourceMapConsumer;
    exports2.SourceNode = require_source_node().SourceNode;
  }
});

// node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/util.js
var require_util2 = __commonJS({
  "node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isTrailingCommaEnabled = exports2.getParentExportDeclaration = exports2.isExportDeclaration = exports2.fixFaultyLocations = exports2.getTrueLoc = exports2.composeSourceMaps = exports2.copyPos = exports2.comparePos = exports2.getUnionOfKeys = exports2.getOption = exports2.isBrowser = exports2.getLineTerminator = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var tiny_invariant_1 = tslib_1.__importDefault(require_tiny_invariant_cjs());
    var types2 = tslib_1.__importStar(require_main());
    var n = types2.namedTypes;
    var source_map_1 = tslib_1.__importDefault(require_source_map());
    var SourceMapConsumer = source_map_1.default.SourceMapConsumer;
    var SourceMapGenerator = source_map_1.default.SourceMapGenerator;
    var hasOwn = Object.prototype.hasOwnProperty;
    function getLineTerminator() {
      return isBrowser() ? "\n" : require("os").EOL || "\n";
    }
    exports2.getLineTerminator = getLineTerminator;
    function isBrowser() {
      return typeof window !== "undefined" && typeof window.document !== "undefined";
    }
    exports2.isBrowser = isBrowser;
    function getOption(options, key, defaultValue) {
      if (options && hasOwn.call(options, key)) {
        return options[key];
      }
      return defaultValue;
    }
    exports2.getOption = getOption;
    function getUnionOfKeys() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var result = {};
      var argc = args.length;
      for (var i = 0; i < argc; ++i) {
        var keys = Object.keys(args[i]);
        var keyCount = keys.length;
        for (var j = 0; j < keyCount; ++j) {
          result[keys[j]] = true;
        }
      }
      return result;
    }
    exports2.getUnionOfKeys = getUnionOfKeys;
    function comparePos(pos1, pos2) {
      return pos1.line - pos2.line || pos1.column - pos2.column;
    }
    exports2.comparePos = comparePos;
    function copyPos(pos) {
      return {
        line: pos.line,
        column: pos.column
      };
    }
    exports2.copyPos = copyPos;
    function composeSourceMaps(formerMap, latterMap) {
      if (formerMap) {
        if (!latterMap) {
          return formerMap;
        }
      } else {
        return latterMap || null;
      }
      var smcFormer = new SourceMapConsumer(formerMap);
      var smcLatter = new SourceMapConsumer(latterMap);
      var smg = new SourceMapGenerator({
        file: latterMap.file,
        sourceRoot: latterMap.sourceRoot
      });
      var sourcesToContents = {};
      smcLatter.eachMapping(function(mapping) {
        var origPos = smcFormer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        var sourceName = origPos.source;
        if (sourceName === null) {
          return;
        }
        smg.addMapping({
          source: sourceName,
          original: copyPos(origPos),
          generated: {
            line: mapping.generatedLine,
            column: mapping.generatedColumn
          },
          name: mapping.name
        });
        var sourceContent = smcFormer.sourceContentFor(sourceName);
        if (sourceContent && !hasOwn.call(sourcesToContents, sourceName)) {
          sourcesToContents[sourceName] = sourceContent;
          smg.setSourceContent(sourceName, sourceContent);
        }
      });
      return smg.toJSON();
    }
    exports2.composeSourceMaps = composeSourceMaps;
    function getTrueLoc(node, lines) {
      if (!node.loc) {
        return null;
      }
      var result = {
        start: node.loc.start,
        end: node.loc.end
      };
      function include(node2) {
        expandLoc(result, node2.loc);
      }
      if (node.declaration && node.declaration.decorators && isExportDeclaration(node)) {
        node.declaration.decorators.forEach(include);
      }
      if (comparePos(result.start, result.end) < 0) {
        result.start = copyPos(result.start);
        lines.skipSpaces(result.start, false, true);
        if (comparePos(result.start, result.end) < 0) {
          result.end = copyPos(result.end);
          lines.skipSpaces(result.end, true, true);
        }
      }
      if (node.comments) {
        node.comments.forEach(include);
      }
      return result;
    }
    exports2.getTrueLoc = getTrueLoc;
    function expandLoc(parentLoc, childLoc) {
      if (parentLoc && childLoc) {
        if (comparePos(childLoc.start, parentLoc.start) < 0) {
          parentLoc.start = childLoc.start;
        }
        if (comparePos(parentLoc.end, childLoc.end) < 0) {
          parentLoc.end = childLoc.end;
        }
      }
    }
    function fixFaultyLocations(node, lines) {
      var loc = node.loc;
      if (loc) {
        if (loc.start.line < 1) {
          loc.start.line = 1;
        }
        if (loc.end.line < 1) {
          loc.end.line = 1;
        }
      }
      if (node.type === "File") {
        loc.start = lines.firstPos();
        loc.end = lines.lastPos();
      }
      fixForLoopHead(node, lines);
      fixTemplateLiteral(node, lines);
      if (loc && node.decorators) {
        node.decorators.forEach(function(decorator) {
          expandLoc(loc, decorator.loc);
        });
      } else if (node.declaration && isExportDeclaration(node)) {
        node.declaration.loc = null;
        var decorators = node.declaration.decorators;
        if (decorators) {
          decorators.forEach(function(decorator) {
            expandLoc(loc, decorator.loc);
          });
        }
      } else if (n.MethodDefinition && n.MethodDefinition.check(node) || n.Property.check(node) && (node.method || node.shorthand)) {
        node.value.loc = null;
        if (n.FunctionExpression.check(node.value)) {
          node.value.id = null;
        }
      } else if (node.type === "ObjectTypeProperty") {
        var loc_1 = node.loc;
        var end = loc_1 && loc_1.end;
        if (end) {
          end = copyPos(end);
          if (lines.prevPos(end) && lines.charAt(end) === ",") {
            if (end = lines.skipSpaces(end, true, true)) {
              loc_1.end = end;
            }
          }
        }
      }
    }
    exports2.fixFaultyLocations = fixFaultyLocations;
    function fixForLoopHead(node, lines) {
      if (node.type !== "ForStatement") {
        return;
      }
      function fix(child) {
        var loc = child && child.loc;
        var start = loc && loc.start;
        var end = loc && copyPos(loc.end);
        while (start && end && comparePos(start, end) < 0) {
          lines.prevPos(end);
          if (lines.charAt(end) === ";") {
            loc.end.line = end.line;
            loc.end.column = end.column;
          } else {
            break;
          }
        }
      }
      fix(node.init);
      fix(node.test);
      fix(node.update);
    }
    function fixTemplateLiteral(node, lines) {
      if (node.type !== "TemplateLiteral") {
        return;
      }
      if (node.quasis.length === 0) {
        return;
      }
      if (node.loc) {
        var afterLeftBackTickPos = copyPos(node.loc.start);
        (0, tiny_invariant_1.default)(lines.charAt(afterLeftBackTickPos) === "`");
        (0, tiny_invariant_1.default)(lines.nextPos(afterLeftBackTickPos));
        var firstQuasi = node.quasis[0];
        if (comparePos(firstQuasi.loc.start, afterLeftBackTickPos) < 0) {
          firstQuasi.loc.start = afterLeftBackTickPos;
        }
        var rightBackTickPos = copyPos(node.loc.end);
        (0, tiny_invariant_1.default)(lines.prevPos(rightBackTickPos));
        (0, tiny_invariant_1.default)(lines.charAt(rightBackTickPos) === "`");
        var lastQuasi = node.quasis[node.quasis.length - 1];
        if (comparePos(rightBackTickPos, lastQuasi.loc.end) < 0) {
          lastQuasi.loc.end = rightBackTickPos;
        }
      }
      node.expressions.forEach(function(expr, i) {
        var dollarCurlyPos = lines.skipSpaces(expr.loc.start, true, false);
        if (lines.prevPos(dollarCurlyPos) && lines.charAt(dollarCurlyPos) === "{" && lines.prevPos(dollarCurlyPos) && lines.charAt(dollarCurlyPos) === "$") {
          var quasiBefore = node.quasis[i];
          if (comparePos(dollarCurlyPos, quasiBefore.loc.end) < 0) {
            quasiBefore.loc.end = dollarCurlyPos;
          }
        }
        var rightCurlyPos = lines.skipSpaces(expr.loc.end, false, false);
        if (lines.charAt(rightCurlyPos) === "}") {
          (0, tiny_invariant_1.default)(lines.nextPos(rightCurlyPos));
          var quasiAfter = node.quasis[i + 1];
          if (comparePos(quasiAfter.loc.start, rightCurlyPos) < 0) {
            quasiAfter.loc.start = rightCurlyPos;
          }
        }
      });
    }
    function isExportDeclaration(node) {
      if (node)
        switch (node.type) {
          case "ExportDeclaration":
          case "ExportDefaultDeclaration":
          case "ExportDefaultSpecifier":
          case "DeclareExportDeclaration":
          case "ExportNamedDeclaration":
          case "ExportAllDeclaration":
            return true;
        }
      return false;
    }
    exports2.isExportDeclaration = isExportDeclaration;
    function getParentExportDeclaration(path) {
      var parentNode = path.getParentNode();
      if (path.getName() === "declaration" && isExportDeclaration(parentNode)) {
        return parentNode;
      }
      return null;
    }
    exports2.getParentExportDeclaration = getParentExportDeclaration;
    function isTrailingCommaEnabled(options, context) {
      var trailingComma = options.trailingComma;
      if (typeof trailingComma === "object") {
        return !!trailingComma[context];
      }
      return !!trailingComma;
    }
    exports2.isTrailingCommaEnabled = isTrailingCommaEnabled;
  }
});

// node_modules/.pnpm/esprima@4.0.1/node_modules/esprima/dist/esprima.js
var require_esprima2 = __commonJS({
  "node_modules/.pnpm/esprima@4.0.1/node_modules/esprima/dist/esprima.js"(exports2, module2) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports2 === "object" && typeof module2 === "object")
        module2.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else if (typeof exports2 === "object")
        exports2["esprima"] = factory();
      else
        root["esprima"] = factory();
    })(exports2, function() {
      return (
        /******/
        function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId])
              return installedModules[moduleId].exports;
            var module3 = installedModules[moduleId] = {
              /******/
              exports: {},
              /******/
              id: moduleId,
              /******/
              loaded: false
              /******/
            };
            modules[moduleId].call(module3.exports, module3, module3.exports, __webpack_require__);
            module3.loaded = true;
            return module3.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.p = "";
          return __webpack_require__(0);
        }([
          /* 0 */
          /***/
          function(module3, exports3, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports3, "__esModule", { value: true });
            var comment_handler_1 = __webpack_require__(1);
            var jsx_parser_1 = __webpack_require__(3);
            var parser_1 = __webpack_require__(8);
            var tokenizer_1 = __webpack_require__(15);
            function parse2(code, options, delegate) {
              var commentHandler = null;
              var proxyDelegate = function(node, metadata) {
                if (delegate) {
                  delegate(node, metadata);
                }
                if (commentHandler) {
                  commentHandler.visit(node, metadata);
                }
              };
              var parserDelegate = typeof delegate === "function" ? proxyDelegate : null;
              var collectComment = false;
              if (options) {
                collectComment = typeof options.comment === "boolean" && options.comment;
                var attachComment = typeof options.attachComment === "boolean" && options.attachComment;
                if (collectComment || attachComment) {
                  commentHandler = new comment_handler_1.CommentHandler();
                  commentHandler.attach = attachComment;
                  options.comment = true;
                  parserDelegate = proxyDelegate;
                }
              }
              var isModule = false;
              if (options && typeof options.sourceType === "string") {
                isModule = options.sourceType === "module";
              }
              var parser;
              if (options && typeof options.jsx === "boolean" && options.jsx) {
                parser = new jsx_parser_1.JSXParser(code, options, parserDelegate);
              } else {
                parser = new parser_1.Parser(code, options, parserDelegate);
              }
              var program = isModule ? parser.parseModule() : parser.parseScript();
              var ast = program;
              if (collectComment && commentHandler) {
                ast.comments = commentHandler.comments;
              }
              if (parser.config.tokens) {
                ast.tokens = parser.tokens;
              }
              if (parser.config.tolerant) {
                ast.errors = parser.errorHandler.errors;
              }
              return ast;
            }
            exports3.parse = parse2;
            function parseModule(code, options, delegate) {
              var parsingOptions = options || {};
              parsingOptions.sourceType = "module";
              return parse2(code, parsingOptions, delegate);
            }
            exports3.parseModule = parseModule;
            function parseScript(code, options, delegate) {
              var parsingOptions = options || {};
              parsingOptions.sourceType = "script";
              return parse2(code, parsingOptions, delegate);
            }
            exports3.parseScript = parseScript;
            function tokenize(code, options, delegate) {
              var tokenizer = new tokenizer_1.Tokenizer(code, options);
              var tokens;
              tokens = [];
              try {
                while (true) {
                  var token = tokenizer.getNextToken();
                  if (!token) {
                    break;
                  }
                  if (delegate) {
                    token = delegate(token);
                  }
                  tokens.push(token);
                }
              } catch (e) {
                tokenizer.errorHandler.tolerate(e);
              }
              if (tokenizer.errorHandler.tolerant) {
                tokens.errors = tokenizer.errors();
              }
              return tokens;
            }
            exports3.tokenize = tokenize;
            var syntax_1 = __webpack_require__(2);
            exports3.Syntax = syntax_1.Syntax;
            exports3.version = "4.0.1";
          },
          /* 1 */
          /***/
          function(module3, exports3, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports3, "__esModule", { value: true });
            var syntax_1 = __webpack_require__(2);
            var CommentHandler = function() {
              function CommentHandler2() {
                this.attach = false;
                this.comments = [];
                this.stack = [];
                this.leading = [];
                this.trailing = [];
              }
              CommentHandler2.prototype.insertInnerComments = function(node, metadata) {
                if (node.type === syntax_1.Syntax.BlockStatement && node.body.length === 0) {
                  var innerComments = [];
                  for (var i = this.leading.length - 1; i >= 0; --i) {
                    var entry = this.leading[i];
                    if (metadata.end.offset >= entry.start) {
                      innerComments.unshift(entry.comment);
                      this.leading.splice(i, 1);
                      this.trailing.splice(i, 1);
                    }
                  }
                  if (innerComments.length) {
                    node.innerComments = innerComments;
                  }
                }
              };
              CommentHandler2.prototype.findTrailingComments = function(metadata) {
                var trailingComments = [];
                if (this.trailing.length > 0) {
                  for (var i = this.trailing.length - 1; i >= 0; --i) {
                    var entry_1 = this.trailing[i];
                    if (entry_1.start >= metadata.end.offset) {
                      trailingComments.unshift(entry_1.comment);
                    }
                  }
                  this.trailing.length = 0;
                  return trailingComments;
                }
                var entry = this.stack[this.stack.length - 1];
                if (entry && entry.node.trailingComments) {
                  var firstComment = entry.node.trailingComments[0];
                  if (firstComment && firstComment.range[0] >= metadata.end.offset) {
                    trailingComments = entry.node.trailingComments;
                    delete entry.node.trailingComments;
                  }
                }
                return trailingComments;
              };
              CommentHandler2.prototype.findLeadingComments = function(metadata) {
                var leadingComments = [];
                var target;
                while (this.stack.length > 0) {
                  var entry = this.stack[this.stack.length - 1];
                  if (entry && entry.start >= metadata.start.offset) {
                    target = entry.node;
                    this.stack.pop();
                  } else {
                    break;
                  }
                }
                if (target) {
                  var count = target.leadingComments ? target.leadingComments.length : 0;
                  for (var i = count - 1; i >= 0; --i) {
                    var comment = target.leadingComments[i];
                    if (comment.range[1] <= metadata.start.offset) {
                      leadingComments.unshift(comment);
                      target.leadingComments.splice(i, 1);
                    }
                  }
                  if (target.leadingComments && target.leadingComments.length === 0) {
                    delete target.leadingComments;
                  }
                  return leadingComments;
                }
                for (var i = this.leading.length - 1; i >= 0; --i) {
                  var entry = this.leading[i];
                  if (entry.start <= metadata.start.offset) {
                    leadingComments.unshift(entry.comment);
                    this.leading.splice(i, 1);
                  }
                }
                return leadingComments;
              };
              CommentHandler2.prototype.visitNode = function(node, metadata) {
                if (node.type === syntax_1.Syntax.Program && node.body.length > 0) {
                  return;
                }
                this.insertInnerComments(node, metadata);
                var trailingComments = this.findTrailingComments(metadata);
                var leadingComments = this.findLeadingComments(metadata);
                if (leadingComments.length > 0) {
                  node.leadingComments = leadingComments;
                }
                if (trailingComments.length > 0) {
                  node.trailingComments = trailingComments;
                }
                this.stack.push({
                  node,
                  start: metadata.start.offset
                });
              };
              CommentHandler2.prototype.visitComment = function(node, metadata) {
                var type = node.type[0] === "L" ? "Line" : "Block";
                var comment = {
                  type,
                  value: node.value
                };
                if (node.range) {
                  comment.range = node.range;
                }
                if (node.loc) {
                  comment.loc = node.loc;
                }
                this.comments.push(comment);
                if (this.attach) {
                  var entry = {
                    comment: {
                      type,
                      value: node.value,
                      range: [metadata.start.offset, metadata.end.offset]
                    },
                    start: metadata.start.offset
                  };
                  if (node.loc) {
                    entry.comment.loc = node.loc;
                  }
                  node.type = type;
                  this.leading.push(entry);
                  this.trailing.push(entry);
                }
              };
              CommentHandler2.prototype.visit = function(node, metadata) {
                if (node.type === "LineComment") {
                  this.visitComment(node, metadata);
                } else if (node.type === "BlockComment") {
                  this.visitComment(node, metadata);
                } else if (this.attach) {
                  this.visitNode(node, metadata);
                }
              };
              return CommentHandler2;
            }();
            exports3.CommentHandler = CommentHandler;
          },
          /* 2 */
          /***/
          function(module3, exports3) {
            "use strict";
            Object.defineProperty(exports3, "__esModule", { value: true });
            exports3.Syntax = {
              AssignmentExpression: "AssignmentExpression",
              AssignmentPattern: "AssignmentPattern",
              ArrayExpression: "ArrayExpression",
              ArrayPattern: "ArrayPattern",
              ArrowFunctionExpression: "ArrowFunctionExpression",
              AwaitExpression: "AwaitExpression",
              BlockStatement: "BlockStatement",
              BinaryExpression: "BinaryExpression",
              BreakStatement: "BreakStatement",
              CallExpression: "CallExpression",
              CatchClause: "CatchClause",
              ClassBody: "ClassBody",
              ClassDeclaration: "ClassDeclaration",
              ClassExpression: "ClassExpression",
              ConditionalExpression: "ConditionalExpression",
              ContinueStatement: "ContinueStatement",
              DoWhileStatement: "DoWhileStatement",
              DebuggerStatement: "DebuggerStatement",
              EmptyStatement: "EmptyStatement",
              ExportAllDeclaration: "ExportAllDeclaration",
              ExportDefaultDeclaration: "ExportDefaultDeclaration",
              ExportNamedDeclaration: "ExportNamedDeclaration",
              ExportSpecifier: "ExportSpecifier",
              ExpressionStatement: "ExpressionStatement",
              ForStatement: "ForStatement",
              ForOfStatement: "ForOfStatement",
              ForInStatement: "ForInStatement",
              FunctionDeclaration: "FunctionDeclaration",
              FunctionExpression: "FunctionExpression",
              Identifier: "Identifier",
              IfStatement: "IfStatement",
              ImportDeclaration: "ImportDeclaration",
              ImportDefaultSpecifier: "ImportDefaultSpecifier",
              ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
              ImportSpecifier: "ImportSpecifier",
              Literal: "Literal",
              LabeledStatement: "LabeledStatement",
              LogicalExpression: "LogicalExpression",
              MemberExpression: "MemberExpression",
              MetaProperty: "MetaProperty",
              MethodDefinition: "MethodDefinition",
              NewExpression: "NewExpression",
              ObjectExpression: "ObjectExpression",
              ObjectPattern: "ObjectPattern",
              Program: "Program",
              Property: "Property",
              RestElement: "RestElement",
              ReturnStatement: "ReturnStatement",
              SequenceExpression: "SequenceExpression",
              SpreadElement: "SpreadElement",
              Super: "Super",
              SwitchCase: "SwitchCase",
              SwitchStatement: "SwitchStatement",
              TaggedTemplateExpression: "TaggedTemplateExpression",
              TemplateElement: "TemplateElement",
              TemplateLiteral: "TemplateLiteral",
              ThisExpression: "ThisExpression",
              ThrowStatement: "ThrowStatement",
              TryStatement: "TryStatement",
              UnaryExpression: "UnaryExpression",
              UpdateExpression: "UpdateExpression",
              VariableDeclaration: "VariableDeclaration",
              VariableDeclarator: "VariableDeclarator",
              WhileStatement: "WhileStatement",
              WithStatement: "WithStatement",
              YieldExpression: "YieldExpression"
            };
          },
          /* 3 */
          /***/
          function(module3, exports3, __webpack_require__) {
            "use strict";
            var __extends2 = this && this.__extends || function() {
              var extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b2) {
                d.__proto__ = b2;
              } || function(d, b2) {
                for (var p in b2) if (b2.hasOwnProperty(p)) d[p] = b2[p];
              };
              return function(d, b2) {
                extendStatics2(d, b2);
                function __() {
                  this.constructor = d;
                }
                d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
              };
            }();
            Object.defineProperty(exports3, "__esModule", { value: true });
            var character_1 = __webpack_require__(4);
            var JSXNode = __webpack_require__(5);
            var jsx_syntax_1 = __webpack_require__(6);
            var Node = __webpack_require__(7);
            var parser_1 = __webpack_require__(8);
            var token_1 = __webpack_require__(13);
            var xhtml_entities_1 = __webpack_require__(14);
            token_1.TokenName[
              100
              /* Identifier */
            ] = "JSXIdentifier";
            token_1.TokenName[
              101
              /* Text */
            ] = "JSXText";
            function getQualifiedElementName(elementName) {
              var qualifiedName;
              switch (elementName.type) {
                case jsx_syntax_1.JSXSyntax.JSXIdentifier:
                  var id = elementName;
                  qualifiedName = id.name;
                  break;
                case jsx_syntax_1.JSXSyntax.JSXNamespacedName:
                  var ns = elementName;
                  qualifiedName = getQualifiedElementName(ns.namespace) + ":" + getQualifiedElementName(ns.name);
                  break;
                case jsx_syntax_1.JSXSyntax.JSXMemberExpression:
                  var expr = elementName;
                  qualifiedName = getQualifiedElementName(expr.object) + "." + getQualifiedElementName(expr.property);
                  break;
                /* istanbul ignore next */
                default:
                  break;
              }
              return qualifiedName;
            }
            var JSXParser = function(_super) {
              __extends2(JSXParser2, _super);
              function JSXParser2(code, options, delegate) {
                return _super.call(this, code, options, delegate) || this;
              }
              JSXParser2.prototype.parsePrimaryExpression = function() {
                return this.match("<") ? this.parseJSXRoot() : _super.prototype.parsePrimaryExpression.call(this);
              };
              JSXParser2.prototype.startJSX = function() {
                this.scanner.index = this.startMarker.index;
                this.scanner.lineNumber = this.startMarker.line;
                this.scanner.lineStart = this.startMarker.index - this.startMarker.column;
              };
              JSXParser2.prototype.finishJSX = function() {
                this.nextToken();
              };
              JSXParser2.prototype.reenterJSX = function() {
                this.startJSX();
                this.expectJSX("}");
                if (this.config.tokens) {
                  this.tokens.pop();
                }
              };
              JSXParser2.prototype.createJSXNode = function() {
                this.collectComments();
                return {
                  index: this.scanner.index,
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart
                };
              };
              JSXParser2.prototype.createJSXChildNode = function() {
                return {
                  index: this.scanner.index,
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart
                };
              };
              JSXParser2.prototype.scanXHTMLEntity = function(quote) {
                var result = "&";
                var valid = true;
                var terminated = false;
                var numeric = false;
                var hex = false;
                while (!this.scanner.eof() && valid && !terminated) {
                  var ch = this.scanner.source[this.scanner.index];
                  if (ch === quote) {
                    break;
                  }
                  terminated = ch === ";";
                  result += ch;
                  ++this.scanner.index;
                  if (!terminated) {
                    switch (result.length) {
                      case 2:
                        numeric = ch === "#";
                        break;
                      case 3:
                        if (numeric) {
                          hex = ch === "x";
                          valid = hex || character_1.Character.isDecimalDigit(ch.charCodeAt(0));
                          numeric = numeric && !hex;
                        }
                        break;
                      default:
                        valid = valid && !(numeric && !character_1.Character.isDecimalDigit(ch.charCodeAt(0)));
                        valid = valid && !(hex && !character_1.Character.isHexDigit(ch.charCodeAt(0)));
                        break;
                    }
                  }
                }
                if (valid && terminated && result.length > 2) {
                  var str = result.substr(1, result.length - 2);
                  if (numeric && str.length > 1) {
                    result = String.fromCharCode(parseInt(str.substr(1), 10));
                  } else if (hex && str.length > 2) {
                    result = String.fromCharCode(parseInt("0" + str.substr(1), 16));
                  } else if (!numeric && !hex && xhtml_entities_1.XHTMLEntities[str]) {
                    result = xhtml_entities_1.XHTMLEntities[str];
                  }
                }
                return result;
              };
              JSXParser2.prototype.lexJSX = function() {
                var cp = this.scanner.source.charCodeAt(this.scanner.index);
                if (cp === 60 || cp === 62 || cp === 47 || cp === 58 || cp === 61 || cp === 123 || cp === 125) {
                  var value = this.scanner.source[this.scanner.index++];
                  return {
                    type: 7,
                    value,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: this.scanner.index - 1,
                    end: this.scanner.index
                  };
                }
                if (cp === 34 || cp === 39) {
                  var start = this.scanner.index;
                  var quote = this.scanner.source[this.scanner.index++];
                  var str = "";
                  while (!this.scanner.eof()) {
                    var ch = this.scanner.source[this.scanner.index++];
                    if (ch === quote) {
                      break;
                    } else if (ch === "&") {
                      str += this.scanXHTMLEntity(quote);
                    } else {
                      str += ch;
                    }
                  }
                  return {
                    type: 8,
                    value: str,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start,
                    end: this.scanner.index
                  };
                }
                if (cp === 46) {
                  var n1 = this.scanner.source.charCodeAt(this.scanner.index + 1);
                  var n2 = this.scanner.source.charCodeAt(this.scanner.index + 2);
                  var value = n1 === 46 && n2 === 46 ? "..." : ".";
                  var start = this.scanner.index;
                  this.scanner.index += value.length;
                  return {
                    type: 7,
                    value,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start,
                    end: this.scanner.index
                  };
                }
                if (cp === 96) {
                  return {
                    type: 10,
                    value: "",
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: this.scanner.index,
                    end: this.scanner.index
                  };
                }
                if (character_1.Character.isIdentifierStart(cp) && cp !== 92) {
                  var start = this.scanner.index;
                  ++this.scanner.index;
                  while (!this.scanner.eof()) {
                    var ch = this.scanner.source.charCodeAt(this.scanner.index);
                    if (character_1.Character.isIdentifierPart(ch) && ch !== 92) {
                      ++this.scanner.index;
                    } else if (ch === 45) {
                      ++this.scanner.index;
                    } else {
                      break;
                    }
                  }
                  var id = this.scanner.source.slice(start, this.scanner.index);
                  return {
                    type: 100,
                    value: id,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start,
                    end: this.scanner.index
                  };
                }
                return this.scanner.lex();
              };
              JSXParser2.prototype.nextJSXToken = function() {
                this.collectComments();
                this.startMarker.index = this.scanner.index;
                this.startMarker.line = this.scanner.lineNumber;
                this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                var token = this.lexJSX();
                this.lastMarker.index = this.scanner.index;
                this.lastMarker.line = this.scanner.lineNumber;
                this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                if (this.config.tokens) {
                  this.tokens.push(this.convertToken(token));
                }
                return token;
              };
              JSXParser2.prototype.nextJSXText = function() {
                this.startMarker.index = this.scanner.index;
                this.startMarker.line = this.scanner.lineNumber;
                this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                var start = this.scanner.index;
                var text = "";
                while (!this.scanner.eof()) {
                  var ch = this.scanner.source[this.scanner.index];
                  if (ch === "{" || ch === "<") {
                    break;
                  }
                  ++this.scanner.index;
                  text += ch;
                  if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                    ++this.scanner.lineNumber;
                    if (ch === "\r" && this.scanner.source[this.scanner.index] === "\n") {
                      ++this.scanner.index;
                    }
                    this.scanner.lineStart = this.scanner.index;
                  }
                }
                this.lastMarker.index = this.scanner.index;
                this.lastMarker.line = this.scanner.lineNumber;
                this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                var token = {
                  type: 101,
                  value: text,
                  lineNumber: this.scanner.lineNumber,
                  lineStart: this.scanner.lineStart,
                  start,
                  end: this.scanner.index
                };
                if (text.length > 0 && this.config.tokens) {
                  this.tokens.push(this.convertToken(token));
                }
                return token;
              };
              JSXParser2.prototype.peekJSXToken = function() {
                var state = this.scanner.saveState();
                this.scanner.scanComments();
                var next = this.lexJSX();
                this.scanner.restoreState(state);
                return next;
              };
              JSXParser2.prototype.expectJSX = function(value) {
                var token = this.nextJSXToken();
                if (token.type !== 7 || token.value !== value) {
                  this.throwUnexpectedToken(token);
                }
              };
              JSXParser2.prototype.matchJSX = function(value) {
                var next = this.peekJSXToken();
                return next.type === 7 && next.value === value;
              };
              JSXParser2.prototype.parseJSXIdentifier = function() {
                var node = this.createJSXNode();
                var token = this.nextJSXToken();
                if (token.type !== 100) {
                  this.throwUnexpectedToken(token);
                }
                return this.finalize(node, new JSXNode.JSXIdentifier(token.value));
              };
              JSXParser2.prototype.parseJSXElementName = function() {
                var node = this.createJSXNode();
                var elementName = this.parseJSXIdentifier();
                if (this.matchJSX(":")) {
                  var namespace = elementName;
                  this.expectJSX(":");
                  var name_1 = this.parseJSXIdentifier();
                  elementName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_1));
                } else if (this.matchJSX(".")) {
                  while (this.matchJSX(".")) {
                    var object = elementName;
                    this.expectJSX(".");
                    var property = this.parseJSXIdentifier();
                    elementName = this.finalize(node, new JSXNode.JSXMemberExpression(object, property));
                  }
                }
                return elementName;
              };
              JSXParser2.prototype.parseJSXAttributeName = function() {
                var node = this.createJSXNode();
                var attributeName;
                var identifier = this.parseJSXIdentifier();
                if (this.matchJSX(":")) {
                  var namespace = identifier;
                  this.expectJSX(":");
                  var name_2 = this.parseJSXIdentifier();
                  attributeName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_2));
                } else {
                  attributeName = identifier;
                }
                return attributeName;
              };
              JSXParser2.prototype.parseJSXStringLiteralAttribute = function() {
                var node = this.createJSXNode();
                var token = this.nextJSXToken();
                if (token.type !== 8) {
                  this.throwUnexpectedToken(token);
                }
                var raw = this.getTokenRaw(token);
                return this.finalize(node, new Node.Literal(token.value, raw));
              };
              JSXParser2.prototype.parseJSXExpressionAttribute = function() {
                var node = this.createJSXNode();
                this.expectJSX("{");
                this.finishJSX();
                if (this.match("}")) {
                  this.tolerateError("JSX attributes must only be assigned a non-empty expression");
                }
                var expression = this.parseAssignmentExpression();
                this.reenterJSX();
                return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
              };
              JSXParser2.prototype.parseJSXAttributeValue = function() {
                return this.matchJSX("{") ? this.parseJSXExpressionAttribute() : this.matchJSX("<") ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute();
              };
              JSXParser2.prototype.parseJSXNameValueAttribute = function() {
                var node = this.createJSXNode();
                var name = this.parseJSXAttributeName();
                var value = null;
                if (this.matchJSX("=")) {
                  this.expectJSX("=");
                  value = this.parseJSXAttributeValue();
                }
                return this.finalize(node, new JSXNode.JSXAttribute(name, value));
              };
              JSXParser2.prototype.parseJSXSpreadAttribute = function() {
                var node = this.createJSXNode();
                this.expectJSX("{");
                this.expectJSX("...");
                this.finishJSX();
                var argument = this.parseAssignmentExpression();
                this.reenterJSX();
                return this.finalize(node, new JSXNode.JSXSpreadAttribute(argument));
              };
              JSXParser2.prototype.parseJSXAttributes = function() {
                var attributes = [];
                while (!this.matchJSX("/") && !this.matchJSX(">")) {
                  var attribute = this.matchJSX("{") ? this.parseJSXSpreadAttribute() : this.parseJSXNameValueAttribute();
                  attributes.push(attribute);
                }
                return attributes;
              };
              JSXParser2.prototype.parseJSXOpeningElement = function() {
                var node = this.createJSXNode();
                this.expectJSX("<");
                var name = this.parseJSXElementName();
                var attributes = this.parseJSXAttributes();
                var selfClosing = this.matchJSX("/");
                if (selfClosing) {
                  this.expectJSX("/");
                }
                this.expectJSX(">");
                return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
              };
              JSXParser2.prototype.parseJSXBoundaryElement = function() {
                var node = this.createJSXNode();
                this.expectJSX("<");
                if (this.matchJSX("/")) {
                  this.expectJSX("/");
                  var name_3 = this.parseJSXElementName();
                  this.expectJSX(">");
                  return this.finalize(node, new JSXNode.JSXClosingElement(name_3));
                }
                var name = this.parseJSXElementName();
                var attributes = this.parseJSXAttributes();
                var selfClosing = this.matchJSX("/");
                if (selfClosing) {
                  this.expectJSX("/");
                }
                this.expectJSX(">");
                return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
              };
              JSXParser2.prototype.parseJSXEmptyExpression = function() {
                var node = this.createJSXChildNode();
                this.collectComments();
                this.lastMarker.index = this.scanner.index;
                this.lastMarker.line = this.scanner.lineNumber;
                this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                return this.finalize(node, new JSXNode.JSXEmptyExpression());
              };
              JSXParser2.prototype.parseJSXExpressionContainer = function() {
                var node = this.createJSXNode();
                this.expectJSX("{");
                var expression;
                if (this.matchJSX("}")) {
                  expression = this.parseJSXEmptyExpression();
                  this.expectJSX("}");
                } else {
                  this.finishJSX();
                  expression = this.parseAssignmentExpression();
                  this.reenterJSX();
                }
                return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
              };
              JSXParser2.prototype.parseJSXChildren = function() {
                var children = [];
                while (!this.scanner.eof()) {
                  var node = this.createJSXChildNode();
                  var token = this.nextJSXText();
                  if (token.start < token.end) {
                    var raw = this.getTokenRaw(token);
                    var child = this.finalize(node, new JSXNode.JSXText(token.value, raw));
                    children.push(child);
                  }
                  if (this.scanner.source[this.scanner.index] === "{") {
                    var container = this.parseJSXExpressionContainer();
                    children.push(container);
                  } else {
                    break;
                  }
                }
                return children;
              };
              JSXParser2.prototype.parseComplexJSXElement = function(el) {
                var stack = [];
                while (!this.scanner.eof()) {
                  el.children = el.children.concat(this.parseJSXChildren());
                  var node = this.createJSXChildNode();
                  var element = this.parseJSXBoundaryElement();
                  if (element.type === jsx_syntax_1.JSXSyntax.JSXOpeningElement) {
                    var opening = element;
                    if (opening.selfClosing) {
                      var child = this.finalize(node, new JSXNode.JSXElement(opening, [], null));
                      el.children.push(child);
                    } else {
                      stack.push(el);
                      el = { node, opening, closing: null, children: [] };
                    }
                  }
                  if (element.type === jsx_syntax_1.JSXSyntax.JSXClosingElement) {
                    el.closing = element;
                    var open_1 = getQualifiedElementName(el.opening.name);
                    var close_1 = getQualifiedElementName(el.closing.name);
                    if (open_1 !== close_1) {
                      this.tolerateError("Expected corresponding JSX closing tag for %0", open_1);
                    }
                    if (stack.length > 0) {
                      var child = this.finalize(el.node, new JSXNode.JSXElement(el.opening, el.children, el.closing));
                      el = stack[stack.length - 1];
                      el.children.push(child);
                      stack.pop();
                    } else {
                      break;
                    }
                  }
                }
                return el;
              };
              JSXParser2.prototype.parseJSXElement = function() {
                var node = this.createJSXNode();
                var opening = this.parseJSXOpeningElement();
                var children = [];
                var closing = null;
                if (!opening.selfClosing) {
                  var el = this.parseComplexJSXElement({ node, opening, closing, children });
                  children = el.children;
                  closing = el.closing;
                }
                return this.finalize(node, new JSXNode.JSXElement(opening, children, closing));
              };
              JSXParser2.prototype.parseJSXRoot = function() {
                if (this.config.tokens) {
                  this.tokens.pop();
                }
                this.startJSX();
                var element = this.parseJSXElement();
                this.finishJSX();
                return element;
              };
              JSXParser2.prototype.isStartOfExpression = function() {
                return _super.prototype.isStartOfExpression.call(this) || this.match("<");
              };
              return JSXParser2;
            }(parser_1.Parser);
            exports3.JSXParser = JSXParser;
          },
          /* 4 */
          /***/
          function(module3, exports3) {
            "use strict";
            Object.defineProperty(exports3, "__esModule", { value: true });
            var Regex = {
              // Unicode v8.0.0 NonAsciiIdentifierStart:
              NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
              // Unicode v8.0.0 NonAsciiIdentifierPart:
              NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
            };
            exports3.Character = {
              /* tslint:disable:no-bitwise */
              fromCodePoint: function(cp) {
                return cp < 65536 ? String.fromCharCode(cp) : String.fromCharCode(55296 + (cp - 65536 >> 10)) + String.fromCharCode(56320 + (cp - 65536 & 1023));
              },
              // https://tc39.github.io/ecma262/#sec-white-space
              isWhiteSpace: function(cp) {
                return cp === 32 || cp === 9 || cp === 11 || cp === 12 || cp === 160 || cp >= 5760 && [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].indexOf(cp) >= 0;
              },
              // https://tc39.github.io/ecma262/#sec-line-terminators
              isLineTerminator: function(cp) {
                return cp === 10 || cp === 13 || cp === 8232 || cp === 8233;
              },
              // https://tc39.github.io/ecma262/#sec-names-and-keywords
              isIdentifierStart: function(cp) {
                return cp === 36 || cp === 95 || cp >= 65 && cp <= 90 || cp >= 97 && cp <= 122 || cp === 92 || cp >= 128 && Regex.NonAsciiIdentifierStart.test(exports3.Character.fromCodePoint(cp));
              },
              isIdentifierPart: function(cp) {
                return cp === 36 || cp === 95 || cp >= 65 && cp <= 90 || cp >= 97 && cp <= 122 || cp >= 48 && cp <= 57 || cp === 92 || cp >= 128 && Regex.NonAsciiIdentifierPart.test(exports3.Character.fromCodePoint(cp));
              },
              // https://tc39.github.io/ecma262/#sec-literals-numeric-literals
              isDecimalDigit: function(cp) {
                return cp >= 48 && cp <= 57;
              },
              isHexDigit: function(cp) {
                return cp >= 48 && cp <= 57 || cp >= 65 && cp <= 70 || cp >= 97 && cp <= 102;
              },
              isOctalDigit: function(cp) {
                return cp >= 48 && cp <= 55;
              }
            };
          },
          /* 5 */
          /***/
          function(module3, exports3, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports3, "__esModule", { value: true });
            var jsx_syntax_1 = __webpack_require__(6);
            var JSXClosingElement = /* @__PURE__ */ function() {
              function JSXClosingElement2(name) {
                this.type = jsx_syntax_1.JSXSyntax.JSXClosingElement;
                this.name = name;
              }
              return JSXClosingElement2;
            }();
            exports3.JSXClosingElement = JSXClosingElement;
            var JSXElement = /* @__PURE__ */ function() {
              function JSXElement2(openingElement, children, closingElement) {
                this.type = jsx_syntax_1.JSXSyntax.JSXElement;
                this.openingElement = openingElement;
                this.children = children;
                this.closingElement = closingElement;
              }
              return JSXElement2;
            }();
            exports3.JSXElement = JSXElement;
            var JSXEmptyExpression = /* @__PURE__ */ function() {
              function JSXEmptyExpression2() {
                this.type = jsx_syntax_1.JSXSyntax.JSXEmptyExpression;
              }
              return JSXEmptyExpression2;
            }();
            exports3.JSXEmptyExpression = JSXEmptyExpression;
            var JSXExpressionContainer = /* @__PURE__ */ function() {
              function JSXExpressionContainer2(expression) {
                this.type = jsx_syntax_1.JSXSyntax.JSXExpressionContainer;
                this.expression = expression;
              }
              return JSXExpressionContainer2;
            }();
            exports3.JSXExpressionContainer = JSXExpressionContainer;
            var JSXIdentifier = /* @__PURE__ */ function() {
              function JSXIdentifier2(name) {
                this.type = jsx_syntax_1.JSXSyntax.JSXIdentifier;
                this.name = name;
              }
              return JSXIdentifier2;
            }();
            exports3.JSXIdentifier = JSXIdentifier;
            var JSXMemberExpression = /* @__PURE__ */ function() {
              function JSXMemberExpression2(object, property) {
                this.type = jsx_syntax_1.JSXSyntax.JSXMemberExpression;
                this.object = object;
                this.property = property;
              }
              return JSXMemberExpression2;
            }();
            exports3.JSXMemberExpression = JSXMemberExpression;
            var JSXAttribute = /* @__PURE__ */ function() {
              function JSXAttribute2(name, value) {
                this.type = jsx_syntax_1.JSXSyntax.JSXAttribute;
                this.name = name;
                this.value = value;
              }
              return JSXAttribute2;
            }();
            exports3.JSXAttribute = JSXAttribute;
            var JSXNamespacedName = /* @__PURE__ */ function() {
              function JSXNamespacedName2(namespace, name) {
                this.type = jsx_syntax_1.JSXSyntax.JSXNamespacedName;
                this.namespace = namespace;
                this.name = name;
              }
              return JSXNamespacedName2;
            }();
            exports3.JSXNamespacedName = JSXNamespacedName;
            var JSXOpeningElement = /* @__PURE__ */ function() {
              function JSXOpeningElement2(name, selfClosing, attributes) {
                this.type = jsx_syntax_1.JSXSyntax.JSXOpeningElement;
                this.name = name;
                this.selfClosing = selfClosing;
                this.attributes = attributes;
              }
              return JSXOpeningElement2;
            }();
            exports3.JSXOpeningElement = JSXOpeningElement;
            var JSXSpreadAttribute = /* @__PURE__ */ function() {
              function JSXSpreadAttribute2(argument) {
                this.type = jsx_syntax_1.JSXSyntax.JSXSpreadAttribute;
                this.argument = argument;
              }
              return JSXSpreadAttribute2;
            }();
            exports3.JSXSpreadAttribute = JSXSpreadAttribute;
            var JSXText = /* @__PURE__ */ function() {
              function JSXText2(value, raw) {
                this.type = jsx_syntax_1.JSXSyntax.JSXText;
                this.value = value;
                this.raw = raw;
              }
              return JSXText2;
            }();
            exports3.JSXText = JSXText;
          },
          /* 6 */
          /***/
          function(module3, exports3) {
            "use strict";
            Object.defineProperty(exports3, "__esModule", { value: true });
            exports3.JSXSyntax = {
              JSXAttribute: "JSXAttribute",
              JSXClosingElement: "JSXClosingElement",
              JSXElement: "JSXElement",
              JSXEmptyExpression: "JSXEmptyExpression",
              JSXExpressionContainer: "JSXExpressionContainer",
              JSXIdentifier: "JSXIdentifier",
              JSXMemberExpression: "JSXMemberExpression",
              JSXNamespacedName: "JSXNamespacedName",
              JSXOpeningElement: "JSXOpeningElement",
              JSXSpreadAttribute: "JSXSpreadAttribute",
              JSXText: "JSXText"
            };
          },
          /* 7 */
          /***/
          function(module3, exports3, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports3, "__esModule", { value: true });
            var syntax_1 = __webpack_require__(2);
            var ArrayExpression = /* @__PURE__ */ function() {
              function ArrayExpression2(elements) {
                this.type = syntax_1.Syntax.ArrayExpression;
                this.elements = elements;
              }
              return ArrayExpression2;
            }();
            exports3.ArrayExpression = ArrayExpression;
            var ArrayPattern = /* @__PURE__ */ function() {
              function ArrayPattern2(elements) {
                this.type = syntax_1.Syntax.ArrayPattern;
                this.elements = elements;
              }
              return ArrayPattern2;
            }();
            exports3.ArrayPattern = ArrayPattern;
            var ArrowFunctionExpression = /* @__PURE__ */ function() {
              function ArrowFunctionExpression2(params, body, expression) {
                this.type = syntax_1.Syntax.ArrowFunctionExpression;
                this.id = null;
                this.params = params;
                this.body = body;
                this.generator = false;
                this.expression = expression;
                this.async = false;
              }
              return ArrowFunctionExpression2;
            }();
            exports3.ArrowFunctionExpression = ArrowFunctionExpression;
            var AssignmentExpression = /* @__PURE__ */ function() {
              function AssignmentExpression2(operator, left, right) {
                this.type = syntax_1.Syntax.AssignmentExpression;
                this.operator = operator;
                this.left = left;
                this.right = right;
              }
              return AssignmentExpression2;
            }();
            exports3.AssignmentExpression = AssignmentExpression;
            var AssignmentPattern = /* @__PURE__ */ function() {
              function AssignmentPattern2(left, right) {
                this.type = syntax_1.Syntax.AssignmentPattern;
                this.left = left;
                this.right = right;
              }
              return AssignmentPattern2;
            }();
            exports3.AssignmentPattern = AssignmentPattern;
            var AsyncArrowFunctionExpression = /* @__PURE__ */ function() {
              function AsyncArrowFunctionExpression2(params, body, expression) {
                this.type = syntax_1.Syntax.ArrowFunctionExpression;
                this.id = null;
                this.params = params;
                this.body = body;
                this.generator = false;
                this.expression = expression;
                this.async = true;
              }
              return AsyncArrowFunctionExpression2;
            }();
            exports3.AsyncArrowFunctionExpression = AsyncArrowFunctionExpression;
            var AsyncFunctionDeclaration = /* @__PURE__ */ function() {
              function AsyncFunctionDeclaration2(id, params, body) {
                this.type = syntax_1.Syntax.FunctionDeclaration;
                this.id = id;
                this.params = params;
                this.body = body;
                this.generator = false;
                this.expression = false;
                this.async = true;
              }
              return AsyncFunctionDeclaration2;
            }();
            exports3.AsyncFunctionDeclaration = AsyncFunctionDeclaration;
            var AsyncFunctionExpression = /* @__PURE__ */ function() {
              function AsyncFunctionExpression2(id, params, body) {
                this.type = syntax_1.Syntax.FunctionExpression;
                this.id = id;
                this.params = params;
                this.body = body;
                this.generator = false;
                this.expression = false;
                this.async = true;
              }
              return AsyncFunctionExpression2;
            }();
            exports3.AsyncFunctionExpression = AsyncFunctionExpression;
            var AwaitExpression = /* @__PURE__ */ function() {
              function AwaitExpression2(argument) {
                this.type = syntax_1.Syntax.AwaitExpression;
                this.argument = argument;
              }
              return AwaitExpression2;
            }();
            exports3.AwaitExpression = AwaitExpression;
            var BinaryExpression = /* @__PURE__ */ function() {
              function BinaryExpression2(operator, left, right) {
                var logical = operator === "||" || operator === "&&";
                this.type = logical ? syntax_1.Syntax.LogicalExpression : syntax_1.Syntax.BinaryExpression;
                this.operator = operator;
                this.left = left;
                this.right = right;
              }
              return BinaryExpression2;
            }();
            exports3.BinaryExpression = BinaryExpression;
            var BlockStatement = /* @__PURE__ */ function() {
              function BlockStatement2(body) {
                this.type = syntax_1.Syntax.BlockStatement;
                this.body = body;
              }
              return BlockStatement2;
            }();
            exports3.BlockStatement = BlockStatement;
            var BreakStatement = /* @__PURE__ */ function() {
              function BreakStatement2(label) {
                this.type = syntax_1.Syntax.BreakStatement;
                this.label = label;
              }
              return BreakStatement2;
            }();
            exports3.BreakStatement = BreakStatement;
            var CallExpression = /* @__PURE__ */ function() {
              function CallExpression2(callee, args) {
                this.type = syntax_1.Syntax.CallExpression;
                this.callee = callee;
                this.arguments = args;
              }
              return CallExpression2;
            }();
            exports3.CallExpression = CallExpression;
            var CatchClause = /* @__PURE__ */ function() {
              function CatchClause2(param, body) {
                this.type = syntax_1.Syntax.CatchClause;
                this.param = param;
                this.body = body;
              }
              return CatchClause2;
            }();
            exports3.CatchClause = CatchClause;
            var ClassBody = /* @__PURE__ */ function() {
              function ClassBody2(body) {
                this.type = syntax_1.Syntax.ClassBody;
                this.body = body;
              }
              return ClassBody2;
            }();
            exports3.ClassBody = ClassBody;
            var ClassDeclaration = /* @__PURE__ */ function() {
              function ClassDeclaration2(id, superClass, body) {
                this.type = syntax_1.Syntax.ClassDeclaration;
                this.id = id;
                this.superClass = superClass;
                this.body = body;
              }
              return ClassDeclaration2;
            }();
            exports3.ClassDeclaration = ClassDeclaration;
            var ClassExpression = /* @__PURE__ */ function() {
              function ClassExpression2(id, superClass, body) {
                this.type = syntax_1.Syntax.ClassExpression;
                this.id = id;
                this.superClass = superClass;
                this.body = body;
              }
              return ClassExpression2;
            }();
            exports3.ClassExpression = ClassExpression;
            var ComputedMemberExpression = /* @__PURE__ */ function() {
              function ComputedMemberExpression2(object, property) {
                this.type = syntax_1.Syntax.MemberExpression;
                this.computed = true;
                this.object = object;
                this.property = property;
              }
              return ComputedMemberExpression2;
            }();
            exports3.ComputedMemberExpression = ComputedMemberExpression;
            var ConditionalExpression = /* @__PURE__ */ function() {
              function ConditionalExpression2(test, consequent, alternate) {
                this.type = syntax_1.Syntax.ConditionalExpression;
                this.test = test;
                this.consequent = consequent;
                this.alternate = alternate;
              }
              return ConditionalExpression2;
            }();
            exports3.ConditionalExpression = ConditionalExpression;
            var ContinueStatement = /* @__PURE__ */ function() {
              function ContinueStatement2(label) {
                this.type = syntax_1.Syntax.ContinueStatement;
                this.label = label;
              }
              return ContinueStatement2;
            }();
            exports3.ContinueStatement = ContinueStatement;
            var DebuggerStatement = /* @__PURE__ */ function() {
              function DebuggerStatement2() {
                this.type = syntax_1.Syntax.DebuggerStatement;
              }
              return DebuggerStatement2;
            }();
            exports3.DebuggerStatement = DebuggerStatement;
            var Directive = /* @__PURE__ */ function() {
              function Directive2(expression, directive) {
                this.type = syntax_1.Syntax.ExpressionStatement;
                this.expression = expression;
                this.directive = directive;
              }
              return Directive2;
            }();
            exports3.Directive = Directive;
            var DoWhileStatement = /* @__PURE__ */ function() {
              function DoWhileStatement2(body, test) {
                this.type = syntax_1.Syntax.DoWhileStatement;
                this.body = body;
                this.test = test;
              }
              return DoWhileStatement2;
            }();
            exports3.DoWhileStatement = DoWhileStatement;
            var EmptyStatement = /* @__PURE__ */ function() {
              function EmptyStatement2() {
                this.type = syntax_1.Syntax.EmptyStatement;
              }
              return EmptyStatement2;
            }();
            exports3.EmptyStatement = EmptyStatement;
            var ExportAllDeclaration = /* @__PURE__ */ function() {
              function ExportAllDeclaration2(source) {
                this.type = syntax_1.Syntax.ExportAllDeclaration;
                this.source = source;
              }
              return ExportAllDeclaration2;
            }();
            exports3.ExportAllDeclaration = ExportAllDeclaration;
            var ExportDefaultDeclaration = /* @__PURE__ */ function() {
              function ExportDefaultDeclaration2(declaration) {
                this.type = syntax_1.Syntax.ExportDefaultDeclaration;
                this.declaration = declaration;
              }
              return ExportDefaultDeclaration2;
            }();
            exports3.ExportDefaultDeclaration = ExportDefaultDeclaration;
            var ExportNamedDeclaration = /* @__PURE__ */ function() {
              function ExportNamedDeclaration2(declaration, specifiers, source) {
                this.type = syntax_1.Syntax.ExportNamedDeclaration;
                this.declaration = declaration;
                this.specifiers = specifiers;
                this.source = source;
              }
              return ExportNamedDeclaration2;
            }();
            exports3.ExportNamedDeclaration = ExportNamedDeclaration;
            var ExportSpecifier = /* @__PURE__ */ function() {
              function ExportSpecifier2(local, exported) {
                this.type = syntax_1.Syntax.ExportSpecifier;
                this.exported = exported;
                this.local = local;
              }
              return ExportSpecifier2;
            }();
            exports3.ExportSpecifier = ExportSpecifier;
            var ExpressionStatement = /* @__PURE__ */ function() {
              function ExpressionStatement2(expression) {
                this.type = syntax_1.Syntax.ExpressionStatement;
                this.expression = expression;
              }
              return ExpressionStatement2;
            }();
            exports3.ExpressionStatement = ExpressionStatement;
            var ForInStatement = /* @__PURE__ */ function() {
              function ForInStatement2(left, right, body) {
                this.type = syntax_1.Syntax.ForInStatement;
                this.left = left;
                this.right = right;
                this.body = body;
                this.each = false;
              }
              return ForInStatement2;
            }();
            exports3.ForInStatement = ForInStatement;
            var ForOfStatement = /* @__PURE__ */ function() {
              function ForOfStatement2(left, right, body) {
                this.type = syntax_1.Syntax.ForOfStatement;
                this.left = left;
                this.right = right;
                this.body = body;
              }
              return ForOfStatement2;
            }();
            exports3.ForOfStatement = ForOfStatement;
            var ForStatement = /* @__PURE__ */ function() {
              function ForStatement2(init, test, update, body) {
                this.type = syntax_1.Syntax.ForStatement;
                this.init = init;
                this.test = test;
                this.update = update;
                this.body = body;
              }
              return ForStatement2;
            }();
            exports3.ForStatement = ForStatement;
            var FunctionDeclaration = /* @__PURE__ */ function() {
              function FunctionDeclaration2(id, params, body, generator) {
                this.type = syntax_1.Syntax.FunctionDeclaration;
                this.id = id;
                this.params = params;
                this.body = body;
                this.generator = generator;
                this.expression = false;
                this.async = false;
              }
              return FunctionDeclaration2;
            }();
            exports3.FunctionDeclaration = FunctionDeclaration;
            var FunctionExpression = /* @__PURE__ */ function() {
              function FunctionExpression2(id, params, body, generator) {
                this.type = syntax_1.Syntax.FunctionExpression;
                this.id = id;
                this.params = params;
                this.body = body;
                this.generator = generator;
                this.expression = false;
                this.async = false;
              }
              return FunctionExpression2;
            }();
            exports3.FunctionExpression = FunctionExpression;
            var Identifier = /* @__PURE__ */ function() {
              function Identifier2(name) {
                this.type = syntax_1.Syntax.Identifier;
                this.name = name;
              }
              return Identifier2;
            }();
            exports3.Identifier = Identifier;
            var IfStatement = /* @__PURE__ */ function() {
              function IfStatement2(test, consequent, alternate) {
                this.type = syntax_1.Syntax.IfStatement;
                this.test = test;
                this.consequent = consequent;
                this.alternate = alternate;
              }
              return IfStatement2;
            }();
            exports3.IfStatement = IfStatement;
            var ImportDeclaration = /* @__PURE__ */ function() {
              function ImportDeclaration2(specifiers, source) {
                this.type = syntax_1.Syntax.ImportDeclaration;
                this.specifiers = specifiers;
                this.source = source;
              }
              return ImportDeclaration2;
            }();
            exports3.ImportDeclaration = ImportDeclaration;
            var ImportDefaultSpecifier = /* @__PURE__ */ function() {
              function ImportDefaultSpecifier2(local) {
                this.type = syntax_1.Syntax.ImportDefaultSpecifier;
                this.local = local;
              }
              return ImportDefaultSpecifier2;
            }();
            exports3.ImportDefaultSpecifier = ImportDefaultSpecifier;
            var ImportNamespaceSpecifier = /* @__PURE__ */ function() {
              function ImportNamespaceSpecifier2(local) {
                this.type = syntax_1.Syntax.ImportNamespaceSpecifier;
                this.local = local;
              }
              return ImportNamespaceSpecifier2;
            }();
            exports3.ImportNamespaceSpecifier = ImportNamespaceSpecifier;
            var ImportSpecifier = /* @__PURE__ */ function() {
              function ImportSpecifier2(local, imported) {
                this.type = syntax_1.Syntax.ImportSpecifier;
                this.local = local;
                this.imported = imported;
              }
              return ImportSpecifier2;
            }();
            exports3.ImportSpecifier = ImportSpecifier;
            var LabeledStatement = /* @__PURE__ */ function() {
              function LabeledStatement2(label, body) {
                this.type = syntax_1.Syntax.LabeledStatement;
                this.label = label;
                this.body = body;
              }
              return LabeledStatement2;
            }();
            exports3.LabeledStatement = LabeledStatement;
            var Literal = /* @__PURE__ */ function() {
              function Literal2(value, raw) {
                this.type = syntax_1.Syntax.Literal;
                this.value = value;
                this.raw = raw;
              }
              return Literal2;
            }();
            exports3.Literal = Literal;
            var MetaProperty = /* @__PURE__ */ function() {
              function MetaProperty2(meta, property) {
                this.type = syntax_1.Syntax.MetaProperty;
                this.meta = meta;
                this.property = property;
              }
              return MetaProperty2;
            }();
            exports3.MetaProperty = MetaProperty;
            var MethodDefinition = /* @__PURE__ */ function() {
              function MethodDefinition2(key, computed, value, kind, isStatic) {
                this.type = syntax_1.Syntax.MethodDefinition;
                this.key = key;
                this.computed = computed;
                this.value = value;
                this.kind = kind;
                this.static = isStatic;
              }
              return MethodDefinition2;
            }();
            exports3.MethodDefinition = MethodDefinition;
            var Module = /* @__PURE__ */ function() {
              function Module2(body) {
                this.type = syntax_1.Syntax.Program;
                this.body = body;
                this.sourceType = "module";
              }
              return Module2;
            }();
            exports3.Module = Module;
            var NewExpression = /* @__PURE__ */ function() {
              function NewExpression2(callee, args) {
                this.type = syntax_1.Syntax.NewExpression;
                this.callee = callee;
                this.arguments = args;
              }
              return NewExpression2;
            }();
            exports3.NewExpression = NewExpression;
            var ObjectExpression = /* @__PURE__ */ function() {
              function ObjectExpression2(properties) {
                this.type = syntax_1.Syntax.ObjectExpression;
                this.properties = properties;
              }
              return ObjectExpression2;
            }();
            exports3.ObjectExpression = ObjectExpression;
            var ObjectPattern = /* @__PURE__ */ function() {
              function ObjectPattern2(properties) {
                this.type = syntax_1.Syntax.ObjectPattern;
                this.properties = properties;
              }
              return ObjectPattern2;
            }();
            exports3.ObjectPattern = ObjectPattern;
            var Property = /* @__PURE__ */ function() {
              function Property2(kind, key, computed, value, method, shorthand) {
                this.type = syntax_1.Syntax.Property;
                this.key = key;
                this.computed = computed;
                this.value = value;
                this.kind = kind;
                this.method = method;
                this.shorthand = shorthand;
              }
              return Property2;
            }();
            exports3.Property = Property;
            var RegexLiteral = /* @__PURE__ */ function() {
              function RegexLiteral2(value, raw, pattern, flags) {
                this.type = syntax_1.Syntax.Literal;
                this.value = value;
                this.raw = raw;
                this.regex = { pattern, flags };
              }
              return RegexLiteral2;
            }();
            exports3.RegexLiteral = RegexLiteral;
            var RestElement = /* @__PURE__ */ function() {
              function RestElement2(argument) {
                this.type = syntax_1.Syntax.RestElement;
                this.argument = argument;
              }
              return RestElement2;
            }();
            exports3.RestElement = RestElement;
            var ReturnStatement = /* @__PURE__ */ function() {
              function ReturnStatement2(argument) {
                this.type = syntax_1.Syntax.ReturnStatement;
                this.argument = argument;
              }
              return ReturnStatement2;
            }();
            exports3.ReturnStatement = ReturnStatement;
            var Script = /* @__PURE__ */ function() {
              function Script2(body) {
                this.type = syntax_1.Syntax.Program;
                this.body = body;
                this.sourceType = "script";
              }
              return Script2;
            }();
            exports3.Script = Script;
            var SequenceExpression = /* @__PURE__ */ function() {
              function SequenceExpression2(expressions) {
                this.type = syntax_1.Syntax.SequenceExpression;
                this.expressions = expressions;
              }
              return SequenceExpression2;
            }();
            exports3.SequenceExpression = SequenceExpression;
            var SpreadElement = /* @__PURE__ */ function() {
              function SpreadElement2(argument) {
                this.type = syntax_1.Syntax.SpreadElement;
                this.argument = argument;
              }
              return SpreadElement2;
            }();
            exports3.SpreadElement = SpreadElement;
            var StaticMemberExpression = /* @__PURE__ */ function() {
              function StaticMemberExpression2(object, property) {
                this.type = syntax_1.Syntax.MemberExpression;
                this.computed = false;
                this.object = object;
                this.property = property;
              }
              return StaticMemberExpression2;
            }();
            exports3.StaticMemberExpression = StaticMemberExpression;
            var Super = /* @__PURE__ */ function() {
              function Super2() {
                this.type = syntax_1.Syntax.Super;
              }
              return Super2;
            }();
            exports3.Super = Super;
            var SwitchCase = /* @__PURE__ */ function() {
              function SwitchCase2(test, consequent) {
                this.type = syntax_1.Syntax.SwitchCase;
                this.test = test;
                this.consequent = consequent;
              }
              return SwitchCase2;
            }();
            exports3.SwitchCase = SwitchCase;
            var SwitchStatement = /* @__PURE__ */ function() {
              function SwitchStatement2(discriminant, cases) {
                this.type = syntax_1.Syntax.SwitchStatement;
                this.discriminant = discriminant;
                this.cases = cases;
              }
              return SwitchStatement2;
            }();
            exports3.SwitchStatement = SwitchStatement;
            var TaggedTemplateExpression = /* @__PURE__ */ function() {
              function TaggedTemplateExpression2(tag, quasi) {
                this.type = syntax_1.Syntax.TaggedTemplateExpression;
                this.tag = tag;
                this.quasi = quasi;
              }
              return TaggedTemplateExpression2;
            }();
            exports3.TaggedTemplateExpression = TaggedTemplateExpression;
            var TemplateElement = /* @__PURE__ */ function() {
              function TemplateElement2(value, tail) {
                this.type = syntax_1.Syntax.TemplateElement;
                this.value = value;
                this.tail = tail;
              }
              return TemplateElement2;
            }();
            exports3.TemplateElement = TemplateElement;
            var TemplateLiteral = /* @__PURE__ */ function() {
              function TemplateLiteral2(quasis, expressions) {
                this.type = syntax_1.Syntax.TemplateLiteral;
                this.quasis = quasis;
                this.expressions = expressions;
              }
              return TemplateLiteral2;
            }();
            exports3.TemplateLiteral = TemplateLiteral;
            var ThisExpression = /* @__PURE__ */ function() {
              function ThisExpression2() {
                this.type = syntax_1.Syntax.ThisExpression;
              }
              return ThisExpression2;
            }();
            exports3.ThisExpression = ThisExpression;
            var ThrowStatement = /* @__PURE__ */ function() {
              function ThrowStatement2(argument) {
                this.type = syntax_1.Syntax.ThrowStatement;
                this.argument = argument;
              }
              return ThrowStatement2;
            }();
            exports3.ThrowStatement = ThrowStatement;
            var TryStatement = /* @__PURE__ */ function() {
              function TryStatement2(block, handler, finalizer) {
                this.type = syntax_1.Syntax.TryStatement;
                this.block = block;
                this.handler = handler;
                this.finalizer = finalizer;
              }
              return TryStatement2;
            }();
            exports3.TryStatement = TryStatement;
            var UnaryExpression = /* @__PURE__ */ function() {
              function UnaryExpression2(operator, argument) {
                this.type = syntax_1.Syntax.UnaryExpression;
                this.operator = operator;
                this.argument = argument;
                this.prefix = true;
              }
              return UnaryExpression2;
            }();
            exports3.UnaryExpression = UnaryExpression;
            var UpdateExpression = /* @__PURE__ */ function() {
              function UpdateExpression2(operator, argument, prefix) {
                this.type = syntax_1.Syntax.UpdateExpression;
                this.operator = operator;
                this.argument = argument;
                this.prefix = prefix;
              }
              return UpdateExpression2;
            }();
            exports3.UpdateExpression = UpdateExpression;
            var VariableDeclaration = /* @__PURE__ */ function() {
              function VariableDeclaration2(declarations, kind) {
                this.type = syntax_1.Syntax.VariableDeclaration;
                this.declarations = declarations;
                this.kind = kind;
              }
              return VariableDeclaration2;
            }();
            exports3.VariableDeclaration = VariableDeclaration;
            var VariableDeclarator = /* @__PURE__ */ function() {
              function VariableDeclarator2(id, init) {
                this.type = syntax_1.Syntax.VariableDeclarator;
                this.id = id;
                this.init = init;
              }
              return VariableDeclarator2;
            }();
            exports3.VariableDeclarator = VariableDeclarator;
            var WhileStatement = /* @__PURE__ */ function() {
              function WhileStatement2(test, body) {
                this.type = syntax_1.Syntax.WhileStatement;
                this.test = test;
                this.body = body;
              }
              return WhileStatement2;
            }();
            exports3.WhileStatement = WhileStatement;
            var WithStatement = /* @__PURE__ */ function() {
              function WithStatement2(object, body) {
                this.type = syntax_1.Syntax.WithStatement;
                this.object = object;
                this.body = body;
              }
              return WithStatement2;
            }();
            exports3.WithStatement = WithStatement;
            var YieldExpression = /* @__PURE__ */ function() {
              function YieldExpression2(argument, delegate) {
                this.type = syntax_1.Syntax.YieldExpression;
                this.argument = argument;
                this.delegate = delegate;
              }
              return YieldExpression2;
            }();
            exports3.YieldExpression = YieldExpression;
          },
          /* 8 */
          /***/
          function(module3, exports3, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports3, "__esModule", { value: true });
            var assert_1 = __webpack_require__(9);
            var error_handler_1 = __webpack_require__(10);
            var messages_1 = __webpack_require__(11);
            var Node = __webpack_require__(7);
            var scanner_1 = __webpack_require__(12);
            var syntax_1 = __webpack_require__(2);
            var token_1 = __webpack_require__(13);
            var ArrowParameterPlaceHolder = "ArrowParameterPlaceHolder";
            var Parser = function() {
              function Parser2(code, options, delegate) {
                if (options === void 0) {
                  options = {};
                }
                this.config = {
                  range: typeof options.range === "boolean" && options.range,
                  loc: typeof options.loc === "boolean" && options.loc,
                  source: null,
                  tokens: typeof options.tokens === "boolean" && options.tokens,
                  comment: typeof options.comment === "boolean" && options.comment,
                  tolerant: typeof options.tolerant === "boolean" && options.tolerant
                };
                if (this.config.loc && options.source && options.source !== null) {
                  this.config.source = String(options.source);
                }
                this.delegate = delegate;
                this.errorHandler = new error_handler_1.ErrorHandler();
                this.errorHandler.tolerant = this.config.tolerant;
                this.scanner = new scanner_1.Scanner(code, this.errorHandler);
                this.scanner.trackComment = this.config.comment;
                this.operatorPrecedence = {
                  ")": 0,
                  ";": 0,
                  ",": 0,
                  "=": 0,
                  "]": 0,
                  "||": 1,
                  "&&": 2,
                  "|": 3,
                  "^": 4,
                  "&": 5,
                  "==": 6,
                  "!=": 6,
                  "===": 6,
                  "!==": 6,
                  "<": 7,
                  ">": 7,
                  "<=": 7,
                  ">=": 7,
                  "<<": 8,
                  ">>": 8,
                  ">>>": 8,
                  "+": 9,
                  "-": 9,
                  "*": 11,
                  "/": 11,
                  "%": 11
                };
                this.lookahead = {
                  type: 2,
                  value: "",
                  lineNumber: this.scanner.lineNumber,
                  lineStart: 0,
                  start: 0,
                  end: 0
                };
                this.hasLineTerminator = false;
                this.context = {
                  isModule: false,
                  await: false,
                  allowIn: true,
                  allowStrictDirective: true,
                  allowYield: true,
                  firstCoverInitializedNameError: null,
                  isAssignmentTarget: false,
                  isBindingElement: false,
                  inFunctionBody: false,
                  inIteration: false,
                  inSwitch: false,
                  labelSet: {},
                  strict: false
                };
                this.tokens = [];
                this.startMarker = {
                  index: 0,
                  line: this.scanner.lineNumber,
                  column: 0
                };
                this.lastMarker = {
                  index: 0,
                  line: this.scanner.lineNumber,
                  column: 0
                };
                this.nextToken();
                this.lastMarker = {
                  index: this.scanner.index,
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart
                };
              }
              Parser2.prototype.throwError = function(messageFormat) {
                var values = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                  values[_i - 1] = arguments[_i];
                }
                var args = Array.prototype.slice.call(arguments, 1);
                var msg = messageFormat.replace(/%(\d)/g, function(whole, idx) {
                  assert_1.assert(idx < args.length, "Message reference must be in range");
                  return args[idx];
                });
                var index = this.lastMarker.index;
                var line = this.lastMarker.line;
                var column = this.lastMarker.column + 1;
                throw this.errorHandler.createError(index, line, column, msg);
              };
              Parser2.prototype.tolerateError = function(messageFormat) {
                var values = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                  values[_i - 1] = arguments[_i];
                }
                var args = Array.prototype.slice.call(arguments, 1);
                var msg = messageFormat.replace(/%(\d)/g, function(whole, idx) {
                  assert_1.assert(idx < args.length, "Message reference must be in range");
                  return args[idx];
                });
                var index = this.lastMarker.index;
                var line = this.scanner.lineNumber;
                var column = this.lastMarker.column + 1;
                this.errorHandler.tolerateError(index, line, column, msg);
              };
              Parser2.prototype.unexpectedTokenError = function(token, message) {
                var msg = message || messages_1.Messages.UnexpectedToken;
                var value;
                if (token) {
                  if (!message) {
                    msg = token.type === 2 ? messages_1.Messages.UnexpectedEOS : token.type === 3 ? messages_1.Messages.UnexpectedIdentifier : token.type === 6 ? messages_1.Messages.UnexpectedNumber : token.type === 8 ? messages_1.Messages.UnexpectedString : token.type === 10 ? messages_1.Messages.UnexpectedTemplate : messages_1.Messages.UnexpectedToken;
                    if (token.type === 4) {
                      if (this.scanner.isFutureReservedWord(token.value)) {
                        msg = messages_1.Messages.UnexpectedReserved;
                      } else if (this.context.strict && this.scanner.isStrictModeReservedWord(token.value)) {
                        msg = messages_1.Messages.StrictReservedWord;
                      }
                    }
                  }
                  value = token.value;
                } else {
                  value = "ILLEGAL";
                }
                msg = msg.replace("%0", value);
                if (token && typeof token.lineNumber === "number") {
                  var index = token.start;
                  var line = token.lineNumber;
                  var lastMarkerLineStart = this.lastMarker.index - this.lastMarker.column;
                  var column = token.start - lastMarkerLineStart + 1;
                  return this.errorHandler.createError(index, line, column, msg);
                } else {
                  var index = this.lastMarker.index;
                  var line = this.lastMarker.line;
                  var column = this.lastMarker.column + 1;
                  return this.errorHandler.createError(index, line, column, msg);
                }
              };
              Parser2.prototype.throwUnexpectedToken = function(token, message) {
                throw this.unexpectedTokenError(token, message);
              };
              Parser2.prototype.tolerateUnexpectedToken = function(token, message) {
                this.errorHandler.tolerate(this.unexpectedTokenError(token, message));
              };
              Parser2.prototype.collectComments = function() {
                if (!this.config.comment) {
                  this.scanner.scanComments();
                } else {
                  var comments = this.scanner.scanComments();
                  if (comments.length > 0 && this.delegate) {
                    for (var i = 0; i < comments.length; ++i) {
                      var e = comments[i];
                      var node = void 0;
                      node = {
                        type: e.multiLine ? "BlockComment" : "LineComment",
                        value: this.scanner.source.slice(e.slice[0], e.slice[1])
                      };
                      if (this.config.range) {
                        node.range = e.range;
                      }
                      if (this.config.loc) {
                        node.loc = e.loc;
                      }
                      var metadata = {
                        start: {
                          line: e.loc.start.line,
                          column: e.loc.start.column,
                          offset: e.range[0]
                        },
                        end: {
                          line: e.loc.end.line,
                          column: e.loc.end.column,
                          offset: e.range[1]
                        }
                      };
                      this.delegate(node, metadata);
                    }
                  }
                }
              };
              Parser2.prototype.getTokenRaw = function(token) {
                return this.scanner.source.slice(token.start, token.end);
              };
              Parser2.prototype.convertToken = function(token) {
                var t = {
                  type: token_1.TokenName[token.type],
                  value: this.getTokenRaw(token)
                };
                if (this.config.range) {
                  t.range = [token.start, token.end];
                }
                if (this.config.loc) {
                  t.loc = {
                    start: {
                      line: this.startMarker.line,
                      column: this.startMarker.column
                    },
                    end: {
                      line: this.scanner.lineNumber,
                      column: this.scanner.index - this.scanner.lineStart
                    }
                  };
                }
                if (token.type === 9) {
                  var pattern = token.pattern;
                  var flags = token.flags;
                  t.regex = { pattern, flags };
                }
                return t;
              };
              Parser2.prototype.nextToken = function() {
                var token = this.lookahead;
                this.lastMarker.index = this.scanner.index;
                this.lastMarker.line = this.scanner.lineNumber;
                this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                this.collectComments();
                if (this.scanner.index !== this.startMarker.index) {
                  this.startMarker.index = this.scanner.index;
                  this.startMarker.line = this.scanner.lineNumber;
                  this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                }
                var next = this.scanner.lex();
                this.hasLineTerminator = token.lineNumber !== next.lineNumber;
                if (next && this.context.strict && next.type === 3) {
                  if (this.scanner.isStrictModeReservedWord(next.value)) {
                    next.type = 4;
                  }
                }
                this.lookahead = next;
                if (this.config.tokens && next.type !== 2) {
                  this.tokens.push(this.convertToken(next));
                }
                return token;
              };
              Parser2.prototype.nextRegexToken = function() {
                this.collectComments();
                var token = this.scanner.scanRegExp();
                if (this.config.tokens) {
                  this.tokens.pop();
                  this.tokens.push(this.convertToken(token));
                }
                this.lookahead = token;
                this.nextToken();
                return token;
              };
              Parser2.prototype.createNode = function() {
                return {
                  index: this.startMarker.index,
                  line: this.startMarker.line,
                  column: this.startMarker.column
                };
              };
              Parser2.prototype.startNode = function(token, lastLineStart) {
                if (lastLineStart === void 0) {
                  lastLineStart = 0;
                }
                var column = token.start - token.lineStart;
                var line = token.lineNumber;
                if (column < 0) {
                  column += lastLineStart;
                  line--;
                }
                return {
                  index: token.start,
                  line,
                  column
                };
              };
              Parser2.prototype.finalize = function(marker, node) {
                if (this.config.range) {
                  node.range = [marker.index, this.lastMarker.index];
                }
                if (this.config.loc) {
                  node.loc = {
                    start: {
                      line: marker.line,
                      column: marker.column
                    },
                    end: {
                      line: this.lastMarker.line,
                      column: this.lastMarker.column
                    }
                  };
                  if (this.config.source) {
                    node.loc.source = this.config.source;
                  }
                }
                if (this.delegate) {
                  var metadata = {
                    start: {
                      line: marker.line,
                      column: marker.column,
                      offset: marker.index
                    },
                    end: {
                      line: this.lastMarker.line,
                      column: this.lastMarker.column,
                      offset: this.lastMarker.index
                    }
                  };
                  this.delegate(node, metadata);
                }
                return node;
              };
              Parser2.prototype.expect = function(value) {
                var token = this.nextToken();
                if (token.type !== 7 || token.value !== value) {
                  this.throwUnexpectedToken(token);
                }
              };
              Parser2.prototype.expectCommaSeparator = function() {
                if (this.config.tolerant) {
                  var token = this.lookahead;
                  if (token.type === 7 && token.value === ",") {
                    this.nextToken();
                  } else if (token.type === 7 && token.value === ";") {
                    this.nextToken();
                    this.tolerateUnexpectedToken(token);
                  } else {
                    this.tolerateUnexpectedToken(token, messages_1.Messages.UnexpectedToken);
                  }
                } else {
                  this.expect(",");
                }
              };
              Parser2.prototype.expectKeyword = function(keyword) {
                var token = this.nextToken();
                if (token.type !== 4 || token.value !== keyword) {
                  this.throwUnexpectedToken(token);
                }
              };
              Parser2.prototype.match = function(value) {
                return this.lookahead.type === 7 && this.lookahead.value === value;
              };
              Parser2.prototype.matchKeyword = function(keyword) {
                return this.lookahead.type === 4 && this.lookahead.value === keyword;
              };
              Parser2.prototype.matchContextualKeyword = function(keyword) {
                return this.lookahead.type === 3 && this.lookahead.value === keyword;
              };
              Parser2.prototype.matchAssign = function() {
                if (this.lookahead.type !== 7) {
                  return false;
                }
                var op = this.lookahead.value;
                return op === "=" || op === "*=" || op === "**=" || op === "/=" || op === "%=" || op === "+=" || op === "-=" || op === "<<=" || op === ">>=" || op === ">>>=" || op === "&=" || op === "^=" || op === "|=";
              };
              Parser2.prototype.isolateCoverGrammar = function(parseFunction) {
                var previousIsBindingElement = this.context.isBindingElement;
                var previousIsAssignmentTarget = this.context.isAssignmentTarget;
                var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
                this.context.isBindingElement = true;
                this.context.isAssignmentTarget = true;
                this.context.firstCoverInitializedNameError = null;
                var result = parseFunction.call(this);
                if (this.context.firstCoverInitializedNameError !== null) {
                  this.throwUnexpectedToken(this.context.firstCoverInitializedNameError);
                }
                this.context.isBindingElement = previousIsBindingElement;
                this.context.isAssignmentTarget = previousIsAssignmentTarget;
                this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError;
                return result;
              };
              Parser2.prototype.inheritCoverGrammar = function(parseFunction) {
                var previousIsBindingElement = this.context.isBindingElement;
                var previousIsAssignmentTarget = this.context.isAssignmentTarget;
                var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
                this.context.isBindingElement = true;
                this.context.isAssignmentTarget = true;
                this.context.firstCoverInitializedNameError = null;
                var result = parseFunction.call(this);
                this.context.isBindingElement = this.context.isBindingElement && previousIsBindingElement;
                this.context.isAssignmentTarget = this.context.isAssignmentTarget && previousIsAssignmentTarget;
                this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError || this.context.firstCoverInitializedNameError;
                return result;
              };
              Parser2.prototype.consumeSemicolon = function() {
                if (this.match(";")) {
                  this.nextToken();
                } else if (!this.hasLineTerminator) {
                  if (this.lookahead.type !== 2 && !this.match("}")) {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                  this.lastMarker.index = this.startMarker.index;
                  this.lastMarker.line = this.startMarker.line;
                  this.lastMarker.column = this.startMarker.column;
                }
              };
              Parser2.prototype.parsePrimaryExpression = function() {
                var node = this.createNode();
                var expr;
                var token, raw;
                switch (this.lookahead.type) {
                  case 3:
                    if ((this.context.isModule || this.context.await) && this.lookahead.value === "await") {
                      this.tolerateUnexpectedToken(this.lookahead);
                    }
                    expr = this.matchAsyncFunction() ? this.parseFunctionExpression() : this.finalize(node, new Node.Identifier(this.nextToken().value));
                    break;
                  case 6:
                  case 8:
                    if (this.context.strict && this.lookahead.octal) {
                      this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.StrictOctalLiteral);
                    }
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                    token = this.nextToken();
                    raw = this.getTokenRaw(token);
                    expr = this.finalize(node, new Node.Literal(token.value, raw));
                    break;
                  case 1:
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                    token = this.nextToken();
                    raw = this.getTokenRaw(token);
                    expr = this.finalize(node, new Node.Literal(token.value === "true", raw));
                    break;
                  case 5:
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                    token = this.nextToken();
                    raw = this.getTokenRaw(token);
                    expr = this.finalize(node, new Node.Literal(null, raw));
                    break;
                  case 10:
                    expr = this.parseTemplateLiteral();
                    break;
                  case 7:
                    switch (this.lookahead.value) {
                      case "(":
                        this.context.isBindingElement = false;
                        expr = this.inheritCoverGrammar(this.parseGroupExpression);
                        break;
                      case "[":
                        expr = this.inheritCoverGrammar(this.parseArrayInitializer);
                        break;
                      case "{":
                        expr = this.inheritCoverGrammar(this.parseObjectInitializer);
                        break;
                      case "/":
                      case "/=":
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                        this.scanner.index = this.startMarker.index;
                        token = this.nextRegexToken();
                        raw = this.getTokenRaw(token);
                        expr = this.finalize(node, new Node.RegexLiteral(token.regex, raw, token.pattern, token.flags));
                        break;
                      default:
                        expr = this.throwUnexpectedToken(this.nextToken());
                    }
                    break;
                  case 4:
                    if (!this.context.strict && this.context.allowYield && this.matchKeyword("yield")) {
                      expr = this.parseIdentifierName();
                    } else if (!this.context.strict && this.matchKeyword("let")) {
                      expr = this.finalize(node, new Node.Identifier(this.nextToken().value));
                    } else {
                      this.context.isAssignmentTarget = false;
                      this.context.isBindingElement = false;
                      if (this.matchKeyword("function")) {
                        expr = this.parseFunctionExpression();
                      } else if (this.matchKeyword("this")) {
                        this.nextToken();
                        expr = this.finalize(node, new Node.ThisExpression());
                      } else if (this.matchKeyword("class")) {
                        expr = this.parseClassExpression();
                      } else {
                        expr = this.throwUnexpectedToken(this.nextToken());
                      }
                    }
                    break;
                  default:
                    expr = this.throwUnexpectedToken(this.nextToken());
                }
                return expr;
              };
              Parser2.prototype.parseSpreadElement = function() {
                var node = this.createNode();
                this.expect("...");
                var arg = this.inheritCoverGrammar(this.parseAssignmentExpression);
                return this.finalize(node, new Node.SpreadElement(arg));
              };
              Parser2.prototype.parseArrayInitializer = function() {
                var node = this.createNode();
                var elements = [];
                this.expect("[");
                while (!this.match("]")) {
                  if (this.match(",")) {
                    this.nextToken();
                    elements.push(null);
                  } else if (this.match("...")) {
                    var element = this.parseSpreadElement();
                    if (!this.match("]")) {
                      this.context.isAssignmentTarget = false;
                      this.context.isBindingElement = false;
                      this.expect(",");
                    }
                    elements.push(element);
                  } else {
                    elements.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
                    if (!this.match("]")) {
                      this.expect(",");
                    }
                  }
                }
                this.expect("]");
                return this.finalize(node, new Node.ArrayExpression(elements));
              };
              Parser2.prototype.parsePropertyMethod = function(params) {
                this.context.isAssignmentTarget = false;
                this.context.isBindingElement = false;
                var previousStrict = this.context.strict;
                var previousAllowStrictDirective = this.context.allowStrictDirective;
                this.context.allowStrictDirective = params.simple;
                var body = this.isolateCoverGrammar(this.parseFunctionSourceElements);
                if (this.context.strict && params.firstRestricted) {
                  this.tolerateUnexpectedToken(params.firstRestricted, params.message);
                }
                if (this.context.strict && params.stricted) {
                  this.tolerateUnexpectedToken(params.stricted, params.message);
                }
                this.context.strict = previousStrict;
                this.context.allowStrictDirective = previousAllowStrictDirective;
                return body;
              };
              Parser2.prototype.parsePropertyMethodFunction = function() {
                var isGenerator = false;
                var node = this.createNode();
                var previousAllowYield = this.context.allowYield;
                this.context.allowYield = true;
                var params = this.parseFormalParameters();
                var method = this.parsePropertyMethod(params);
                this.context.allowYield = previousAllowYield;
                return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
              };
              Parser2.prototype.parsePropertyMethodAsyncFunction = function() {
                var node = this.createNode();
                var previousAllowYield = this.context.allowYield;
                var previousAwait = this.context.await;
                this.context.allowYield = false;
                this.context.await = true;
                var params = this.parseFormalParameters();
                var method = this.parsePropertyMethod(params);
                this.context.allowYield = previousAllowYield;
                this.context.await = previousAwait;
                return this.finalize(node, new Node.AsyncFunctionExpression(null, params.params, method));
              };
              Parser2.prototype.parseObjectPropertyKey = function() {
                var node = this.createNode();
                var token = this.nextToken();
                var key;
                switch (token.type) {
                  case 8:
                  case 6:
                    if (this.context.strict && token.octal) {
                      this.tolerateUnexpectedToken(token, messages_1.Messages.StrictOctalLiteral);
                    }
                    var raw = this.getTokenRaw(token);
                    key = this.finalize(node, new Node.Literal(token.value, raw));
                    break;
                  case 3:
                  case 1:
                  case 5:
                  case 4:
                    key = this.finalize(node, new Node.Identifier(token.value));
                    break;
                  case 7:
                    if (token.value === "[") {
                      key = this.isolateCoverGrammar(this.parseAssignmentExpression);
                      this.expect("]");
                    } else {
                      key = this.throwUnexpectedToken(token);
                    }
                    break;
                  default:
                    key = this.throwUnexpectedToken(token);
                }
                return key;
              };
              Parser2.prototype.isPropertyKey = function(key, value) {
                return key.type === syntax_1.Syntax.Identifier && key.name === value || key.type === syntax_1.Syntax.Literal && key.value === value;
              };
              Parser2.prototype.parseObjectProperty = function(hasProto) {
                var node = this.createNode();
                var token = this.lookahead;
                var kind;
                var key = null;
                var value = null;
                var computed = false;
                var method = false;
                var shorthand = false;
                var isAsync = false;
                if (token.type === 3) {
                  var id = token.value;
                  this.nextToken();
                  computed = this.match("[");
                  isAsync = !this.hasLineTerminator && id === "async" && !this.match(":") && !this.match("(") && !this.match("*") && !this.match(",");
                  key = isAsync ? this.parseObjectPropertyKey() : this.finalize(node, new Node.Identifier(id));
                } else if (this.match("*")) {
                  this.nextToken();
                } else {
                  computed = this.match("[");
                  key = this.parseObjectPropertyKey();
                }
                var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
                if (token.type === 3 && !isAsync && token.value === "get" && lookaheadPropertyKey) {
                  kind = "get";
                  computed = this.match("[");
                  key = this.parseObjectPropertyKey();
                  this.context.allowYield = false;
                  value = this.parseGetterMethod();
                } else if (token.type === 3 && !isAsync && token.value === "set" && lookaheadPropertyKey) {
                  kind = "set";
                  computed = this.match("[");
                  key = this.parseObjectPropertyKey();
                  value = this.parseSetterMethod();
                } else if (token.type === 7 && token.value === "*" && lookaheadPropertyKey) {
                  kind = "init";
                  computed = this.match("[");
                  key = this.parseObjectPropertyKey();
                  value = this.parseGeneratorMethod();
                  method = true;
                } else {
                  if (!key) {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                  kind = "init";
                  if (this.match(":") && !isAsync) {
                    if (!computed && this.isPropertyKey(key, "__proto__")) {
                      if (hasProto.value) {
                        this.tolerateError(messages_1.Messages.DuplicateProtoProperty);
                      }
                      hasProto.value = true;
                    }
                    this.nextToken();
                    value = this.inheritCoverGrammar(this.parseAssignmentExpression);
                  } else if (this.match("(")) {
                    value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
                    method = true;
                  } else if (token.type === 3) {
                    var id = this.finalize(node, new Node.Identifier(token.value));
                    if (this.match("=")) {
                      this.context.firstCoverInitializedNameError = this.lookahead;
                      this.nextToken();
                      shorthand = true;
                      var init = this.isolateCoverGrammar(this.parseAssignmentExpression);
                      value = this.finalize(node, new Node.AssignmentPattern(id, init));
                    } else {
                      shorthand = true;
                      value = id;
                    }
                  } else {
                    this.throwUnexpectedToken(this.nextToken());
                  }
                }
                return this.finalize(node, new Node.Property(kind, key, computed, value, method, shorthand));
              };
              Parser2.prototype.parseObjectInitializer = function() {
                var node = this.createNode();
                this.expect("{");
                var properties = [];
                var hasProto = { value: false };
                while (!this.match("}")) {
                  properties.push(this.parseObjectProperty(hasProto));
                  if (!this.match("}")) {
                    this.expectCommaSeparator();
                  }
                }
                this.expect("}");
                return this.finalize(node, new Node.ObjectExpression(properties));
              };
              Parser2.prototype.parseTemplateHead = function() {
                assert_1.assert(this.lookahead.head, "Template literal must start with a template head");
                var node = this.createNode();
                var token = this.nextToken();
                var raw = token.value;
                var cooked = token.cooked;
                return this.finalize(node, new Node.TemplateElement({ raw, cooked }, token.tail));
              };
              Parser2.prototype.parseTemplateElement = function() {
                if (this.lookahead.type !== 10) {
                  this.throwUnexpectedToken();
                }
                var node = this.createNode();
                var token = this.nextToken();
                var raw = token.value;
                var cooked = token.cooked;
                return this.finalize(node, new Node.TemplateElement({ raw, cooked }, token.tail));
              };
              Parser2.prototype.parseTemplateLiteral = function() {
                var node = this.createNode();
                var expressions = [];
                var quasis = [];
                var quasi = this.parseTemplateHead();
                quasis.push(quasi);
                while (!quasi.tail) {
                  expressions.push(this.parseExpression());
                  quasi = this.parseTemplateElement();
                  quasis.push(quasi);
                }
                return this.finalize(node, new Node.TemplateLiteral(quasis, expressions));
              };
              Parser2.prototype.reinterpretExpressionAsPattern = function(expr) {
                switch (expr.type) {
                  case syntax_1.Syntax.Identifier:
                  case syntax_1.Syntax.MemberExpression:
                  case syntax_1.Syntax.RestElement:
                  case syntax_1.Syntax.AssignmentPattern:
                    break;
                  case syntax_1.Syntax.SpreadElement:
                    expr.type = syntax_1.Syntax.RestElement;
                    this.reinterpretExpressionAsPattern(expr.argument);
                    break;
                  case syntax_1.Syntax.ArrayExpression:
                    expr.type = syntax_1.Syntax.ArrayPattern;
                    for (var i = 0; i < expr.elements.length; i++) {
                      if (expr.elements[i] !== null) {
                        this.reinterpretExpressionAsPattern(expr.elements[i]);
                      }
                    }
                    break;
                  case syntax_1.Syntax.ObjectExpression:
                    expr.type = syntax_1.Syntax.ObjectPattern;
                    for (var i = 0; i < expr.properties.length; i++) {
                      this.reinterpretExpressionAsPattern(expr.properties[i].value);
                    }
                    break;
                  case syntax_1.Syntax.AssignmentExpression:
                    expr.type = syntax_1.Syntax.AssignmentPattern;
                    delete expr.operator;
                    this.reinterpretExpressionAsPattern(expr.left);
                    break;
                  default:
                    break;
                }
              };
              Parser2.prototype.parseGroupExpression = function() {
                var expr;
                this.expect("(");
                if (this.match(")")) {
                  this.nextToken();
                  if (!this.match("=>")) {
                    this.expect("=>");
                  }
                  expr = {
                    type: ArrowParameterPlaceHolder,
                    params: [],
                    async: false
                  };
                } else {
                  var startToken = this.lookahead;
                  var params = [];
                  if (this.match("...")) {
                    expr = this.parseRestElement(params);
                    this.expect(")");
                    if (!this.match("=>")) {
                      this.expect("=>");
                    }
                    expr = {
                      type: ArrowParameterPlaceHolder,
                      params: [expr],
                      async: false
                    };
                  } else {
                    var arrow = false;
                    this.context.isBindingElement = true;
                    expr = this.inheritCoverGrammar(this.parseAssignmentExpression);
                    if (this.match(",")) {
                      var expressions = [];
                      this.context.isAssignmentTarget = false;
                      expressions.push(expr);
                      while (this.lookahead.type !== 2) {
                        if (!this.match(",")) {
                          break;
                        }
                        this.nextToken();
                        if (this.match(")")) {
                          this.nextToken();
                          for (var i = 0; i < expressions.length; i++) {
                            this.reinterpretExpressionAsPattern(expressions[i]);
                          }
                          arrow = true;
                          expr = {
                            type: ArrowParameterPlaceHolder,
                            params: expressions,
                            async: false
                          };
                        } else if (this.match("...")) {
                          if (!this.context.isBindingElement) {
                            this.throwUnexpectedToken(this.lookahead);
                          }
                          expressions.push(this.parseRestElement(params));
                          this.expect(")");
                          if (!this.match("=>")) {
                            this.expect("=>");
                          }
                          this.context.isBindingElement = false;
                          for (var i = 0; i < expressions.length; i++) {
                            this.reinterpretExpressionAsPattern(expressions[i]);
                          }
                          arrow = true;
                          expr = {
                            type: ArrowParameterPlaceHolder,
                            params: expressions,
                            async: false
                          };
                        } else {
                          expressions.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
                        }
                        if (arrow) {
                          break;
                        }
                      }
                      if (!arrow) {
                        expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
                      }
                    }
                    if (!arrow) {
                      this.expect(")");
                      if (this.match("=>")) {
                        if (expr.type === syntax_1.Syntax.Identifier && expr.name === "yield") {
                          arrow = true;
                          expr = {
                            type: ArrowParameterPlaceHolder,
                            params: [expr],
                            async: false
                          };
                        }
                        if (!arrow) {
                          if (!this.context.isBindingElement) {
                            this.throwUnexpectedToken(this.lookahead);
                          }
                          if (expr.type === syntax_1.Syntax.SequenceExpression) {
                            for (var i = 0; i < expr.expressions.length; i++) {
                              this.reinterpretExpressionAsPattern(expr.expressions[i]);
                            }
                          } else {
                            this.reinterpretExpressionAsPattern(expr);
                          }
                          var parameters = expr.type === syntax_1.Syntax.SequenceExpression ? expr.expressions : [expr];
                          expr = {
                            type: ArrowParameterPlaceHolder,
                            params: parameters,
                            async: false
                          };
                        }
                      }
                      this.context.isBindingElement = false;
                    }
                  }
                }
                return expr;
              };
              Parser2.prototype.parseArguments = function() {
                this.expect("(");
                var args = [];
                if (!this.match(")")) {
                  while (true) {
                    var expr = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAssignmentExpression);
                    args.push(expr);
                    if (this.match(")")) {
                      break;
                    }
                    this.expectCommaSeparator();
                    if (this.match(")")) {
                      break;
                    }
                  }
                }
                this.expect(")");
                return args;
              };
              Parser2.prototype.isIdentifierName = function(token) {
                return token.type === 3 || token.type === 4 || token.type === 1 || token.type === 5;
              };
              Parser2.prototype.parseIdentifierName = function() {
                var node = this.createNode();
                var token = this.nextToken();
                if (!this.isIdentifierName(token)) {
                  this.throwUnexpectedToken(token);
                }
                return this.finalize(node, new Node.Identifier(token.value));
              };
              Parser2.prototype.parseNewExpression = function() {
                var node = this.createNode();
                var id = this.parseIdentifierName();
                assert_1.assert(id.name === "new", "New expression must start with `new`");
                var expr;
                if (this.match(".")) {
                  this.nextToken();
                  if (this.lookahead.type === 3 && this.context.inFunctionBody && this.lookahead.value === "target") {
                    var property = this.parseIdentifierName();
                    expr = new Node.MetaProperty(id, property);
                  } else {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                } else {
                  var callee = this.isolateCoverGrammar(this.parseLeftHandSideExpression);
                  var args = this.match("(") ? this.parseArguments() : [];
                  expr = new Node.NewExpression(callee, args);
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                }
                return this.finalize(node, expr);
              };
              Parser2.prototype.parseAsyncArgument = function() {
                var arg = this.parseAssignmentExpression();
                this.context.firstCoverInitializedNameError = null;
                return arg;
              };
              Parser2.prototype.parseAsyncArguments = function() {
                this.expect("(");
                var args = [];
                if (!this.match(")")) {
                  while (true) {
                    var expr = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAsyncArgument);
                    args.push(expr);
                    if (this.match(")")) {
                      break;
                    }
                    this.expectCommaSeparator();
                    if (this.match(")")) {
                      break;
                    }
                  }
                }
                this.expect(")");
                return args;
              };
              Parser2.prototype.parseLeftHandSideExpressionAllowCall = function() {
                var startToken = this.lookahead;
                var maybeAsync = this.matchContextualKeyword("async");
                var previousAllowIn = this.context.allowIn;
                this.context.allowIn = true;
                var expr;
                if (this.matchKeyword("super") && this.context.inFunctionBody) {
                  expr = this.createNode();
                  this.nextToken();
                  expr = this.finalize(expr, new Node.Super());
                  if (!this.match("(") && !this.match(".") && !this.match("[")) {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                } else {
                  expr = this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);
                }
                while (true) {
                  if (this.match(".")) {
                    this.context.isBindingElement = false;
                    this.context.isAssignmentTarget = true;
                    this.expect(".");
                    var property = this.parseIdentifierName();
                    expr = this.finalize(this.startNode(startToken), new Node.StaticMemberExpression(expr, property));
                  } else if (this.match("(")) {
                    var asyncArrow = maybeAsync && startToken.lineNumber === this.lookahead.lineNumber;
                    this.context.isBindingElement = false;
                    this.context.isAssignmentTarget = false;
                    var args = asyncArrow ? this.parseAsyncArguments() : this.parseArguments();
                    expr = this.finalize(this.startNode(startToken), new Node.CallExpression(expr, args));
                    if (asyncArrow && this.match("=>")) {
                      for (var i = 0; i < args.length; ++i) {
                        this.reinterpretExpressionAsPattern(args[i]);
                      }
                      expr = {
                        type: ArrowParameterPlaceHolder,
                        params: args,
                        async: true
                      };
                    }
                  } else if (this.match("[")) {
                    this.context.isBindingElement = false;
                    this.context.isAssignmentTarget = true;
                    this.expect("[");
                    var property = this.isolateCoverGrammar(this.parseExpression);
                    this.expect("]");
                    expr = this.finalize(this.startNode(startToken), new Node.ComputedMemberExpression(expr, property));
                  } else if (this.lookahead.type === 10 && this.lookahead.head) {
                    var quasi = this.parseTemplateLiteral();
                    expr = this.finalize(this.startNode(startToken), new Node.TaggedTemplateExpression(expr, quasi));
                  } else {
                    break;
                  }
                }
                this.context.allowIn = previousAllowIn;
                return expr;
              };
              Parser2.prototype.parseSuper = function() {
                var node = this.createNode();
                this.expectKeyword("super");
                if (!this.match("[") && !this.match(".")) {
                  this.throwUnexpectedToken(this.lookahead);
                }
                return this.finalize(node, new Node.Super());
              };
              Parser2.prototype.parseLeftHandSideExpression = function() {
                assert_1.assert(this.context.allowIn, "callee of new expression always allow in keyword.");
                var node = this.startNode(this.lookahead);
                var expr = this.matchKeyword("super") && this.context.inFunctionBody ? this.parseSuper() : this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);
                while (true) {
                  if (this.match("[")) {
                    this.context.isBindingElement = false;
                    this.context.isAssignmentTarget = true;
                    this.expect("[");
                    var property = this.isolateCoverGrammar(this.parseExpression);
                    this.expect("]");
                    expr = this.finalize(node, new Node.ComputedMemberExpression(expr, property));
                  } else if (this.match(".")) {
                    this.context.isBindingElement = false;
                    this.context.isAssignmentTarget = true;
                    this.expect(".");
                    var property = this.parseIdentifierName();
                    expr = this.finalize(node, new Node.StaticMemberExpression(expr, property));
                  } else if (this.lookahead.type === 10 && this.lookahead.head) {
                    var quasi = this.parseTemplateLiteral();
                    expr = this.finalize(node, new Node.TaggedTemplateExpression(expr, quasi));
                  } else {
                    break;
                  }
                }
                return expr;
              };
              Parser2.prototype.parseUpdateExpression = function() {
                var expr;
                var startToken = this.lookahead;
                if (this.match("++") || this.match("--")) {
                  var node = this.startNode(startToken);
                  var token = this.nextToken();
                  expr = this.inheritCoverGrammar(this.parseUnaryExpression);
                  if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
                    this.tolerateError(messages_1.Messages.StrictLHSPrefix);
                  }
                  if (!this.context.isAssignmentTarget) {
                    this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
                  }
                  var prefix = true;
                  expr = this.finalize(node, new Node.UpdateExpression(token.value, expr, prefix));
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                } else {
                  expr = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
                  if (!this.hasLineTerminator && this.lookahead.type === 7) {
                    if (this.match("++") || this.match("--")) {
                      if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
                        this.tolerateError(messages_1.Messages.StrictLHSPostfix);
                      }
                      if (!this.context.isAssignmentTarget) {
                        this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
                      }
                      this.context.isAssignmentTarget = false;
                      this.context.isBindingElement = false;
                      var operator = this.nextToken().value;
                      var prefix = false;
                      expr = this.finalize(this.startNode(startToken), new Node.UpdateExpression(operator, expr, prefix));
                    }
                  }
                }
                return expr;
              };
              Parser2.prototype.parseAwaitExpression = function() {
                var node = this.createNode();
                this.nextToken();
                var argument = this.parseUnaryExpression();
                return this.finalize(node, new Node.AwaitExpression(argument));
              };
              Parser2.prototype.parseUnaryExpression = function() {
                var expr;
                if (this.match("+") || this.match("-") || this.match("~") || this.match("!") || this.matchKeyword("delete") || this.matchKeyword("void") || this.matchKeyword("typeof")) {
                  var node = this.startNode(this.lookahead);
                  var token = this.nextToken();
                  expr = this.inheritCoverGrammar(this.parseUnaryExpression);
                  expr = this.finalize(node, new Node.UnaryExpression(token.value, expr));
                  if (this.context.strict && expr.operator === "delete" && expr.argument.type === syntax_1.Syntax.Identifier) {
                    this.tolerateError(messages_1.Messages.StrictDelete);
                  }
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                } else if (this.context.await && this.matchContextualKeyword("await")) {
                  expr = this.parseAwaitExpression();
                } else {
                  expr = this.parseUpdateExpression();
                }
                return expr;
              };
              Parser2.prototype.parseExponentiationExpression = function() {
                var startToken = this.lookahead;
                var expr = this.inheritCoverGrammar(this.parseUnaryExpression);
                if (expr.type !== syntax_1.Syntax.UnaryExpression && this.match("**")) {
                  this.nextToken();
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                  var left = expr;
                  var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
                  expr = this.finalize(this.startNode(startToken), new Node.BinaryExpression("**", left, right));
                }
                return expr;
              };
              Parser2.prototype.binaryPrecedence = function(token) {
                var op = token.value;
                var precedence;
                if (token.type === 7) {
                  precedence = this.operatorPrecedence[op] || 0;
                } else if (token.type === 4) {
                  precedence = op === "instanceof" || this.context.allowIn && op === "in" ? 7 : 0;
                } else {
                  precedence = 0;
                }
                return precedence;
              };
              Parser2.prototype.parseBinaryExpression = function() {
                var startToken = this.lookahead;
                var expr = this.inheritCoverGrammar(this.parseExponentiationExpression);
                var token = this.lookahead;
                var prec = this.binaryPrecedence(token);
                if (prec > 0) {
                  this.nextToken();
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                  var markers = [startToken, this.lookahead];
                  var left = expr;
                  var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
                  var stack = [left, token.value, right];
                  var precedences = [prec];
                  while (true) {
                    prec = this.binaryPrecedence(this.lookahead);
                    if (prec <= 0) {
                      break;
                    }
                    while (stack.length > 2 && prec <= precedences[precedences.length - 1]) {
                      right = stack.pop();
                      var operator = stack.pop();
                      precedences.pop();
                      left = stack.pop();
                      markers.pop();
                      var node = this.startNode(markers[markers.length - 1]);
                      stack.push(this.finalize(node, new Node.BinaryExpression(operator, left, right)));
                    }
                    stack.push(this.nextToken().value);
                    precedences.push(prec);
                    markers.push(this.lookahead);
                    stack.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
                  }
                  var i = stack.length - 1;
                  expr = stack[i];
                  var lastMarker = markers.pop();
                  while (i > 1) {
                    var marker = markers.pop();
                    var lastLineStart = lastMarker && lastMarker.lineStart;
                    var node = this.startNode(marker, lastLineStart);
                    var operator = stack[i - 1];
                    expr = this.finalize(node, new Node.BinaryExpression(operator, stack[i - 2], expr));
                    i -= 2;
                    lastMarker = marker;
                  }
                }
                return expr;
              };
              Parser2.prototype.parseConditionalExpression = function() {
                var startToken = this.lookahead;
                var expr = this.inheritCoverGrammar(this.parseBinaryExpression);
                if (this.match("?")) {
                  this.nextToken();
                  var previousAllowIn = this.context.allowIn;
                  this.context.allowIn = true;
                  var consequent = this.isolateCoverGrammar(this.parseAssignmentExpression);
                  this.context.allowIn = previousAllowIn;
                  this.expect(":");
                  var alternate = this.isolateCoverGrammar(this.parseAssignmentExpression);
                  expr = this.finalize(this.startNode(startToken), new Node.ConditionalExpression(expr, consequent, alternate));
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                }
                return expr;
              };
              Parser2.prototype.checkPatternParam = function(options, param) {
                switch (param.type) {
                  case syntax_1.Syntax.Identifier:
                    this.validateParam(options, param, param.name);
                    break;
                  case syntax_1.Syntax.RestElement:
                    this.checkPatternParam(options, param.argument);
                    break;
                  case syntax_1.Syntax.AssignmentPattern:
                    this.checkPatternParam(options, param.left);
                    break;
                  case syntax_1.Syntax.ArrayPattern:
                    for (var i = 0; i < param.elements.length; i++) {
                      if (param.elements[i] !== null) {
                        this.checkPatternParam(options, param.elements[i]);
                      }
                    }
                    break;
                  case syntax_1.Syntax.ObjectPattern:
                    for (var i = 0; i < param.properties.length; i++) {
                      this.checkPatternParam(options, param.properties[i].value);
                    }
                    break;
                  default:
                    break;
                }
                options.simple = options.simple && param instanceof Node.Identifier;
              };
              Parser2.prototype.reinterpretAsCoverFormalsList = function(expr) {
                var params = [expr];
                var options;
                var asyncArrow = false;
                switch (expr.type) {
                  case syntax_1.Syntax.Identifier:
                    break;
                  case ArrowParameterPlaceHolder:
                    params = expr.params;
                    asyncArrow = expr.async;
                    break;
                  default:
                    return null;
                }
                options = {
                  simple: true,
                  paramSet: {}
                };
                for (var i = 0; i < params.length; ++i) {
                  var param = params[i];
                  if (param.type === syntax_1.Syntax.AssignmentPattern) {
                    if (param.right.type === syntax_1.Syntax.YieldExpression) {
                      if (param.right.argument) {
                        this.throwUnexpectedToken(this.lookahead);
                      }
                      param.right.type = syntax_1.Syntax.Identifier;
                      param.right.name = "yield";
                      delete param.right.argument;
                      delete param.right.delegate;
                    }
                  } else if (asyncArrow && param.type === syntax_1.Syntax.Identifier && param.name === "await") {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                  this.checkPatternParam(options, param);
                  params[i] = param;
                }
                if (this.context.strict || !this.context.allowYield) {
                  for (var i = 0; i < params.length; ++i) {
                    var param = params[i];
                    if (param.type === syntax_1.Syntax.YieldExpression) {
                      this.throwUnexpectedToken(this.lookahead);
                    }
                  }
                }
                if (options.message === messages_1.Messages.StrictParamDupe) {
                  var token = this.context.strict ? options.stricted : options.firstRestricted;
                  this.throwUnexpectedToken(token, options.message);
                }
                return {
                  simple: options.simple,
                  params,
                  stricted: options.stricted,
                  firstRestricted: options.firstRestricted,
                  message: options.message
                };
              };
              Parser2.prototype.parseAssignmentExpression = function() {
                var expr;
                if (!this.context.allowYield && this.matchKeyword("yield")) {
                  expr = this.parseYieldExpression();
                } else {
                  var startToken = this.lookahead;
                  var token = startToken;
                  expr = this.parseConditionalExpression();
                  if (token.type === 3 && token.lineNumber === this.lookahead.lineNumber && token.value === "async") {
                    if (this.lookahead.type === 3 || this.matchKeyword("yield")) {
                      var arg = this.parsePrimaryExpression();
                      this.reinterpretExpressionAsPattern(arg);
                      expr = {
                        type: ArrowParameterPlaceHolder,
                        params: [arg],
                        async: true
                      };
                    }
                  }
                  if (expr.type === ArrowParameterPlaceHolder || this.match("=>")) {
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                    var isAsync = expr.async;
                    var list = this.reinterpretAsCoverFormalsList(expr);
                    if (list) {
                      if (this.hasLineTerminator) {
                        this.tolerateUnexpectedToken(this.lookahead);
                      }
                      this.context.firstCoverInitializedNameError = null;
                      var previousStrict = this.context.strict;
                      var previousAllowStrictDirective = this.context.allowStrictDirective;
                      this.context.allowStrictDirective = list.simple;
                      var previousAllowYield = this.context.allowYield;
                      var previousAwait = this.context.await;
                      this.context.allowYield = true;
                      this.context.await = isAsync;
                      var node = this.startNode(startToken);
                      this.expect("=>");
                      var body = void 0;
                      if (this.match("{")) {
                        var previousAllowIn = this.context.allowIn;
                        this.context.allowIn = true;
                        body = this.parseFunctionSourceElements();
                        this.context.allowIn = previousAllowIn;
                      } else {
                        body = this.isolateCoverGrammar(this.parseAssignmentExpression);
                      }
                      var expression = body.type !== syntax_1.Syntax.BlockStatement;
                      if (this.context.strict && list.firstRestricted) {
                        this.throwUnexpectedToken(list.firstRestricted, list.message);
                      }
                      if (this.context.strict && list.stricted) {
                        this.tolerateUnexpectedToken(list.stricted, list.message);
                      }
                      expr = isAsync ? this.finalize(node, new Node.AsyncArrowFunctionExpression(list.params, body, expression)) : this.finalize(node, new Node.ArrowFunctionExpression(list.params, body, expression));
                      this.context.strict = previousStrict;
                      this.context.allowStrictDirective = previousAllowStrictDirective;
                      this.context.allowYield = previousAllowYield;
                      this.context.await = previousAwait;
                    }
                  } else {
                    if (this.matchAssign()) {
                      if (!this.context.isAssignmentTarget) {
                        this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
                      }
                      if (this.context.strict && expr.type === syntax_1.Syntax.Identifier) {
                        var id = expr;
                        if (this.scanner.isRestrictedWord(id.name)) {
                          this.tolerateUnexpectedToken(token, messages_1.Messages.StrictLHSAssignment);
                        }
                        if (this.scanner.isStrictModeReservedWord(id.name)) {
                          this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
                        }
                      }
                      if (!this.match("=")) {
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                      } else {
                        this.reinterpretExpressionAsPattern(expr);
                      }
                      token = this.nextToken();
                      var operator = token.value;
                      var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
                      expr = this.finalize(this.startNode(startToken), new Node.AssignmentExpression(operator, expr, right));
                      this.context.firstCoverInitializedNameError = null;
                    }
                  }
                }
                return expr;
              };
              Parser2.prototype.parseExpression = function() {
                var startToken = this.lookahead;
                var expr = this.isolateCoverGrammar(this.parseAssignmentExpression);
                if (this.match(",")) {
                  var expressions = [];
                  expressions.push(expr);
                  while (this.lookahead.type !== 2) {
                    if (!this.match(",")) {
                      break;
                    }
                    this.nextToken();
                    expressions.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                  }
                  expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
                }
                return expr;
              };
              Parser2.prototype.parseStatementListItem = function() {
                var statement;
                this.context.isAssignmentTarget = true;
                this.context.isBindingElement = true;
                if (this.lookahead.type === 4) {
                  switch (this.lookahead.value) {
                    case "export":
                      if (!this.context.isModule) {
                        this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalExportDeclaration);
                      }
                      statement = this.parseExportDeclaration();
                      break;
                    case "import":
                      if (!this.context.isModule) {
                        this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalImportDeclaration);
                      }
                      statement = this.parseImportDeclaration();
                      break;
                    case "const":
                      statement = this.parseLexicalDeclaration({ inFor: false });
                      break;
                    case "function":
                      statement = this.parseFunctionDeclaration();
                      break;
                    case "class":
                      statement = this.parseClassDeclaration();
                      break;
                    case "let":
                      statement = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({ inFor: false }) : this.parseStatement();
                      break;
                    default:
                      statement = this.parseStatement();
                      break;
                  }
                } else {
                  statement = this.parseStatement();
                }
                return statement;
              };
              Parser2.prototype.parseBlock = function() {
                var node = this.createNode();
                this.expect("{");
                var block = [];
                while (true) {
                  if (this.match("}")) {
                    break;
                  }
                  block.push(this.parseStatementListItem());
                }
                this.expect("}");
                return this.finalize(node, new Node.BlockStatement(block));
              };
              Parser2.prototype.parseLexicalBinding = function(kind, options) {
                var node = this.createNode();
                var params = [];
                var id = this.parsePattern(params, kind);
                if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(id.name)) {
                    this.tolerateError(messages_1.Messages.StrictVarName);
                  }
                }
                var init = null;
                if (kind === "const") {
                  if (!this.matchKeyword("in") && !this.matchContextualKeyword("of")) {
                    if (this.match("=")) {
                      this.nextToken();
                      init = this.isolateCoverGrammar(this.parseAssignmentExpression);
                    } else {
                      this.throwError(messages_1.Messages.DeclarationMissingInitializer, "const");
                    }
                  }
                } else if (!options.inFor && id.type !== syntax_1.Syntax.Identifier || this.match("=")) {
                  this.expect("=");
                  init = this.isolateCoverGrammar(this.parseAssignmentExpression);
                }
                return this.finalize(node, new Node.VariableDeclarator(id, init));
              };
              Parser2.prototype.parseBindingList = function(kind, options) {
                var list = [this.parseLexicalBinding(kind, options)];
                while (this.match(",")) {
                  this.nextToken();
                  list.push(this.parseLexicalBinding(kind, options));
                }
                return list;
              };
              Parser2.prototype.isLexicalDeclaration = function() {
                var state = this.scanner.saveState();
                this.scanner.scanComments();
                var next = this.scanner.lex();
                this.scanner.restoreState(state);
                return next.type === 3 || next.type === 7 && next.value === "[" || next.type === 7 && next.value === "{" || next.type === 4 && next.value === "let" || next.type === 4 && next.value === "yield";
              };
              Parser2.prototype.parseLexicalDeclaration = function(options) {
                var node = this.createNode();
                var kind = this.nextToken().value;
                assert_1.assert(kind === "let" || kind === "const", "Lexical declaration must be either let or const");
                var declarations = this.parseBindingList(kind, options);
                this.consumeSemicolon();
                return this.finalize(node, new Node.VariableDeclaration(declarations, kind));
              };
              Parser2.prototype.parseBindingRestElement = function(params, kind) {
                var node = this.createNode();
                this.expect("...");
                var arg = this.parsePattern(params, kind);
                return this.finalize(node, new Node.RestElement(arg));
              };
              Parser2.prototype.parseArrayPattern = function(params, kind) {
                var node = this.createNode();
                this.expect("[");
                var elements = [];
                while (!this.match("]")) {
                  if (this.match(",")) {
                    this.nextToken();
                    elements.push(null);
                  } else {
                    if (this.match("...")) {
                      elements.push(this.parseBindingRestElement(params, kind));
                      break;
                    } else {
                      elements.push(this.parsePatternWithDefault(params, kind));
                    }
                    if (!this.match("]")) {
                      this.expect(",");
                    }
                  }
                }
                this.expect("]");
                return this.finalize(node, new Node.ArrayPattern(elements));
              };
              Parser2.prototype.parsePropertyPattern = function(params, kind) {
                var node = this.createNode();
                var computed = false;
                var shorthand = false;
                var method = false;
                var key;
                var value;
                if (this.lookahead.type === 3) {
                  var keyToken = this.lookahead;
                  key = this.parseVariableIdentifier();
                  var init = this.finalize(node, new Node.Identifier(keyToken.value));
                  if (this.match("=")) {
                    params.push(keyToken);
                    shorthand = true;
                    this.nextToken();
                    var expr = this.parseAssignmentExpression();
                    value = this.finalize(this.startNode(keyToken), new Node.AssignmentPattern(init, expr));
                  } else if (!this.match(":")) {
                    params.push(keyToken);
                    shorthand = true;
                    value = init;
                  } else {
                    this.expect(":");
                    value = this.parsePatternWithDefault(params, kind);
                  }
                } else {
                  computed = this.match("[");
                  key = this.parseObjectPropertyKey();
                  this.expect(":");
                  value = this.parsePatternWithDefault(params, kind);
                }
                return this.finalize(node, new Node.Property("init", key, computed, value, method, shorthand));
              };
              Parser2.prototype.parseObjectPattern = function(params, kind) {
                var node = this.createNode();
                var properties = [];
                this.expect("{");
                while (!this.match("}")) {
                  properties.push(this.parsePropertyPattern(params, kind));
                  if (!this.match("}")) {
                    this.expect(",");
                  }
                }
                this.expect("}");
                return this.finalize(node, new Node.ObjectPattern(properties));
              };
              Parser2.prototype.parsePattern = function(params, kind) {
                var pattern;
                if (this.match("[")) {
                  pattern = this.parseArrayPattern(params, kind);
                } else if (this.match("{")) {
                  pattern = this.parseObjectPattern(params, kind);
                } else {
                  if (this.matchKeyword("let") && (kind === "const" || kind === "let")) {
                    this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.LetInLexicalBinding);
                  }
                  params.push(this.lookahead);
                  pattern = this.parseVariableIdentifier(kind);
                }
                return pattern;
              };
              Parser2.prototype.parsePatternWithDefault = function(params, kind) {
                var startToken = this.lookahead;
                var pattern = this.parsePattern(params, kind);
                if (this.match("=")) {
                  this.nextToken();
                  var previousAllowYield = this.context.allowYield;
                  this.context.allowYield = true;
                  var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
                  this.context.allowYield = previousAllowYield;
                  pattern = this.finalize(this.startNode(startToken), new Node.AssignmentPattern(pattern, right));
                }
                return pattern;
              };
              Parser2.prototype.parseVariableIdentifier = function(kind) {
                var node = this.createNode();
                var token = this.nextToken();
                if (token.type === 4 && token.value === "yield") {
                  if (this.context.strict) {
                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
                  } else if (!this.context.allowYield) {
                    this.throwUnexpectedToken(token);
                  }
                } else if (token.type !== 3) {
                  if (this.context.strict && token.type === 4 && this.scanner.isStrictModeReservedWord(token.value)) {
                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
                  } else {
                    if (this.context.strict || token.value !== "let" || kind !== "var") {
                      this.throwUnexpectedToken(token);
                    }
                  }
                } else if ((this.context.isModule || this.context.await) && token.type === 3 && token.value === "await") {
                  this.tolerateUnexpectedToken(token);
                }
                return this.finalize(node, new Node.Identifier(token.value));
              };
              Parser2.prototype.parseVariableDeclaration = function(options) {
                var node = this.createNode();
                var params = [];
                var id = this.parsePattern(params, "var");
                if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(id.name)) {
                    this.tolerateError(messages_1.Messages.StrictVarName);
                  }
                }
                var init = null;
                if (this.match("=")) {
                  this.nextToken();
                  init = this.isolateCoverGrammar(this.parseAssignmentExpression);
                } else if (id.type !== syntax_1.Syntax.Identifier && !options.inFor) {
                  this.expect("=");
                }
                return this.finalize(node, new Node.VariableDeclarator(id, init));
              };
              Parser2.prototype.parseVariableDeclarationList = function(options) {
                var opt = { inFor: options.inFor };
                var list = [];
                list.push(this.parseVariableDeclaration(opt));
                while (this.match(",")) {
                  this.nextToken();
                  list.push(this.parseVariableDeclaration(opt));
                }
                return list;
              };
              Parser2.prototype.parseVariableStatement = function() {
                var node = this.createNode();
                this.expectKeyword("var");
                var declarations = this.parseVariableDeclarationList({ inFor: false });
                this.consumeSemicolon();
                return this.finalize(node, new Node.VariableDeclaration(declarations, "var"));
              };
              Parser2.prototype.parseEmptyStatement = function() {
                var node = this.createNode();
                this.expect(";");
                return this.finalize(node, new Node.EmptyStatement());
              };
              Parser2.prototype.parseExpressionStatement = function() {
                var node = this.createNode();
                var expr = this.parseExpression();
                this.consumeSemicolon();
                return this.finalize(node, new Node.ExpressionStatement(expr));
              };
              Parser2.prototype.parseIfClause = function() {
                if (this.context.strict && this.matchKeyword("function")) {
                  this.tolerateError(messages_1.Messages.StrictFunction);
                }
                return this.parseStatement();
              };
              Parser2.prototype.parseIfStatement = function() {
                var node = this.createNode();
                var consequent;
                var alternate = null;
                this.expectKeyword("if");
                this.expect("(");
                var test = this.parseExpression();
                if (!this.match(")") && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken());
                  consequent = this.finalize(this.createNode(), new Node.EmptyStatement());
                } else {
                  this.expect(")");
                  consequent = this.parseIfClause();
                  if (this.matchKeyword("else")) {
                    this.nextToken();
                    alternate = this.parseIfClause();
                  }
                }
                return this.finalize(node, new Node.IfStatement(test, consequent, alternate));
              };
              Parser2.prototype.parseDoWhileStatement = function() {
                var node = this.createNode();
                this.expectKeyword("do");
                var previousInIteration = this.context.inIteration;
                this.context.inIteration = true;
                var body = this.parseStatement();
                this.context.inIteration = previousInIteration;
                this.expectKeyword("while");
                this.expect("(");
                var test = this.parseExpression();
                if (!this.match(")") && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken());
                } else {
                  this.expect(")");
                  if (this.match(";")) {
                    this.nextToken();
                  }
                }
                return this.finalize(node, new Node.DoWhileStatement(body, test));
              };
              Parser2.prototype.parseWhileStatement = function() {
                var node = this.createNode();
                var body;
                this.expectKeyword("while");
                this.expect("(");
                var test = this.parseExpression();
                if (!this.match(")") && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken());
                  body = this.finalize(this.createNode(), new Node.EmptyStatement());
                } else {
                  this.expect(")");
                  var previousInIteration = this.context.inIteration;
                  this.context.inIteration = true;
                  body = this.parseStatement();
                  this.context.inIteration = previousInIteration;
                }
                return this.finalize(node, new Node.WhileStatement(test, body));
              };
              Parser2.prototype.parseForStatement = function() {
                var init = null;
                var test = null;
                var update = null;
                var forIn = true;
                var left, right;
                var node = this.createNode();
                this.expectKeyword("for");
                this.expect("(");
                if (this.match(";")) {
                  this.nextToken();
                } else {
                  if (this.matchKeyword("var")) {
                    init = this.createNode();
                    this.nextToken();
                    var previousAllowIn = this.context.allowIn;
                    this.context.allowIn = false;
                    var declarations = this.parseVariableDeclarationList({ inFor: true });
                    this.context.allowIn = previousAllowIn;
                    if (declarations.length === 1 && this.matchKeyword("in")) {
                      var decl = declarations[0];
                      if (decl.init && (decl.id.type === syntax_1.Syntax.ArrayPattern || decl.id.type === syntax_1.Syntax.ObjectPattern || this.context.strict)) {
                        this.tolerateError(messages_1.Messages.ForInOfLoopInitializer, "for-in");
                      }
                      init = this.finalize(init, new Node.VariableDeclaration(declarations, "var"));
                      this.nextToken();
                      left = init;
                      right = this.parseExpression();
                      init = null;
                    } else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword("of")) {
                      init = this.finalize(init, new Node.VariableDeclaration(declarations, "var"));
                      this.nextToken();
                      left = init;
                      right = this.parseAssignmentExpression();
                      init = null;
                      forIn = false;
                    } else {
                      init = this.finalize(init, new Node.VariableDeclaration(declarations, "var"));
                      this.expect(";");
                    }
                  } else if (this.matchKeyword("const") || this.matchKeyword("let")) {
                    init = this.createNode();
                    var kind = this.nextToken().value;
                    if (!this.context.strict && this.lookahead.value === "in") {
                      init = this.finalize(init, new Node.Identifier(kind));
                      this.nextToken();
                      left = init;
                      right = this.parseExpression();
                      init = null;
                    } else {
                      var previousAllowIn = this.context.allowIn;
                      this.context.allowIn = false;
                      var declarations = this.parseBindingList(kind, { inFor: true });
                      this.context.allowIn = previousAllowIn;
                      if (declarations.length === 1 && declarations[0].init === null && this.matchKeyword("in")) {
                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
                        this.nextToken();
                        left = init;
                        right = this.parseExpression();
                        init = null;
                      } else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword("of")) {
                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
                        this.nextToken();
                        left = init;
                        right = this.parseAssignmentExpression();
                        init = null;
                        forIn = false;
                      } else {
                        this.consumeSemicolon();
                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
                      }
                    }
                  } else {
                    var initStartToken = this.lookahead;
                    var previousAllowIn = this.context.allowIn;
                    this.context.allowIn = false;
                    init = this.inheritCoverGrammar(this.parseAssignmentExpression);
                    this.context.allowIn = previousAllowIn;
                    if (this.matchKeyword("in")) {
                      if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
                        this.tolerateError(messages_1.Messages.InvalidLHSInForIn);
                      }
                      this.nextToken();
                      this.reinterpretExpressionAsPattern(init);
                      left = init;
                      right = this.parseExpression();
                      init = null;
                    } else if (this.matchContextualKeyword("of")) {
                      if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
                        this.tolerateError(messages_1.Messages.InvalidLHSInForLoop);
                      }
                      this.nextToken();
                      this.reinterpretExpressionAsPattern(init);
                      left = init;
                      right = this.parseAssignmentExpression();
                      init = null;
                      forIn = false;
                    } else {
                      if (this.match(",")) {
                        var initSeq = [init];
                        while (this.match(",")) {
                          this.nextToken();
                          initSeq.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                        }
                        init = this.finalize(this.startNode(initStartToken), new Node.SequenceExpression(initSeq));
                      }
                      this.expect(";");
                    }
                  }
                }
                if (typeof left === "undefined") {
                  if (!this.match(";")) {
                    test = this.parseExpression();
                  }
                  this.expect(";");
                  if (!this.match(")")) {
                    update = this.parseExpression();
                  }
                }
                var body;
                if (!this.match(")") && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken());
                  body = this.finalize(this.createNode(), new Node.EmptyStatement());
                } else {
                  this.expect(")");
                  var previousInIteration = this.context.inIteration;
                  this.context.inIteration = true;
                  body = this.isolateCoverGrammar(this.parseStatement);
                  this.context.inIteration = previousInIteration;
                }
                return typeof left === "undefined" ? this.finalize(node, new Node.ForStatement(init, test, update, body)) : forIn ? this.finalize(node, new Node.ForInStatement(left, right, body)) : this.finalize(node, new Node.ForOfStatement(left, right, body));
              };
              Parser2.prototype.parseContinueStatement = function() {
                var node = this.createNode();
                this.expectKeyword("continue");
                var label = null;
                if (this.lookahead.type === 3 && !this.hasLineTerminator) {
                  var id = this.parseVariableIdentifier();
                  label = id;
                  var key = "$" + id.name;
                  if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
                    this.throwError(messages_1.Messages.UnknownLabel, id.name);
                  }
                }
                this.consumeSemicolon();
                if (label === null && !this.context.inIteration) {
                  this.throwError(messages_1.Messages.IllegalContinue);
                }
                return this.finalize(node, new Node.ContinueStatement(label));
              };
              Parser2.prototype.parseBreakStatement = function() {
                var node = this.createNode();
                this.expectKeyword("break");
                var label = null;
                if (this.lookahead.type === 3 && !this.hasLineTerminator) {
                  var id = this.parseVariableIdentifier();
                  var key = "$" + id.name;
                  if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
                    this.throwError(messages_1.Messages.UnknownLabel, id.name);
                  }
                  label = id;
                }
                this.consumeSemicolon();
                if (label === null && !this.context.inIteration && !this.context.inSwitch) {
                  this.throwError(messages_1.Messages.IllegalBreak);
                }
                return this.finalize(node, new Node.BreakStatement(label));
              };
              Parser2.prototype.parseReturnStatement = function() {
                if (!this.context.inFunctionBody) {
                  this.tolerateError(messages_1.Messages.IllegalReturn);
                }
                var node = this.createNode();
                this.expectKeyword("return");
                var hasArgument = !this.match(";") && !this.match("}") && !this.hasLineTerminator && this.lookahead.type !== 2 || this.lookahead.type === 8 || this.lookahead.type === 10;
                var argument = hasArgument ? this.parseExpression() : null;
                this.consumeSemicolon();
                return this.finalize(node, new Node.ReturnStatement(argument));
              };
              Parser2.prototype.parseWithStatement = function() {
                if (this.context.strict) {
                  this.tolerateError(messages_1.Messages.StrictModeWith);
                }
                var node = this.createNode();
                var body;
                this.expectKeyword("with");
                this.expect("(");
                var object = this.parseExpression();
                if (!this.match(")") && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken());
                  body = this.finalize(this.createNode(), new Node.EmptyStatement());
                } else {
                  this.expect(")");
                  body = this.parseStatement();
                }
                return this.finalize(node, new Node.WithStatement(object, body));
              };
              Parser2.prototype.parseSwitchCase = function() {
                var node = this.createNode();
                var test;
                if (this.matchKeyword("default")) {
                  this.nextToken();
                  test = null;
                } else {
                  this.expectKeyword("case");
                  test = this.parseExpression();
                }
                this.expect(":");
                var consequent = [];
                while (true) {
                  if (this.match("}") || this.matchKeyword("default") || this.matchKeyword("case")) {
                    break;
                  }
                  consequent.push(this.parseStatementListItem());
                }
                return this.finalize(node, new Node.SwitchCase(test, consequent));
              };
              Parser2.prototype.parseSwitchStatement = function() {
                var node = this.createNode();
                this.expectKeyword("switch");
                this.expect("(");
                var discriminant = this.parseExpression();
                this.expect(")");
                var previousInSwitch = this.context.inSwitch;
                this.context.inSwitch = true;
                var cases = [];
                var defaultFound = false;
                this.expect("{");
                while (true) {
                  if (this.match("}")) {
                    break;
                  }
                  var clause = this.parseSwitchCase();
                  if (clause.test === null) {
                    if (defaultFound) {
                      this.throwError(messages_1.Messages.MultipleDefaultsInSwitch);
                    }
                    defaultFound = true;
                  }
                  cases.push(clause);
                }
                this.expect("}");
                this.context.inSwitch = previousInSwitch;
                return this.finalize(node, new Node.SwitchStatement(discriminant, cases));
              };
              Parser2.prototype.parseLabelledStatement = function() {
                var node = this.createNode();
                var expr = this.parseExpression();
                var statement;
                if (expr.type === syntax_1.Syntax.Identifier && this.match(":")) {
                  this.nextToken();
                  var id = expr;
                  var key = "$" + id.name;
                  if (Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
                    this.throwError(messages_1.Messages.Redeclaration, "Label", id.name);
                  }
                  this.context.labelSet[key] = true;
                  var body = void 0;
                  if (this.matchKeyword("class")) {
                    this.tolerateUnexpectedToken(this.lookahead);
                    body = this.parseClassDeclaration();
                  } else if (this.matchKeyword("function")) {
                    var token = this.lookahead;
                    var declaration = this.parseFunctionDeclaration();
                    if (this.context.strict) {
                      this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunction);
                    } else if (declaration.generator) {
                      this.tolerateUnexpectedToken(token, messages_1.Messages.GeneratorInLegacyContext);
                    }
                    body = declaration;
                  } else {
                    body = this.parseStatement();
                  }
                  delete this.context.labelSet[key];
                  statement = new Node.LabeledStatement(id, body);
                } else {
                  this.consumeSemicolon();
                  statement = new Node.ExpressionStatement(expr);
                }
                return this.finalize(node, statement);
              };
              Parser2.prototype.parseThrowStatement = function() {
                var node = this.createNode();
                this.expectKeyword("throw");
                if (this.hasLineTerminator) {
                  this.throwError(messages_1.Messages.NewlineAfterThrow);
                }
                var argument = this.parseExpression();
                this.consumeSemicolon();
                return this.finalize(node, new Node.ThrowStatement(argument));
              };
              Parser2.prototype.parseCatchClause = function() {
                var node = this.createNode();
                this.expectKeyword("catch");
                this.expect("(");
                if (this.match(")")) {
                  this.throwUnexpectedToken(this.lookahead);
                }
                var params = [];
                var param = this.parsePattern(params);
                var paramMap = {};
                for (var i = 0; i < params.length; i++) {
                  var key = "$" + params[i].value;
                  if (Object.prototype.hasOwnProperty.call(paramMap, key)) {
                    this.tolerateError(messages_1.Messages.DuplicateBinding, params[i].value);
                  }
                  paramMap[key] = true;
                }
                if (this.context.strict && param.type === syntax_1.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(param.name)) {
                    this.tolerateError(messages_1.Messages.StrictCatchVariable);
                  }
                }
                this.expect(")");
                var body = this.parseBlock();
                return this.finalize(node, new Node.CatchClause(param, body));
              };
              Parser2.prototype.parseFinallyClause = function() {
                this.expectKeyword("finally");
                return this.parseBlock();
              };
              Parser2.prototype.parseTryStatement = function() {
                var node = this.createNode();
                this.expectKeyword("try");
                var block = this.parseBlock();
                var handler = this.matchKeyword("catch") ? this.parseCatchClause() : null;
                var finalizer = this.matchKeyword("finally") ? this.parseFinallyClause() : null;
                if (!handler && !finalizer) {
                  this.throwError(messages_1.Messages.NoCatchOrFinally);
                }
                return this.finalize(node, new Node.TryStatement(block, handler, finalizer));
              };
              Parser2.prototype.parseDebuggerStatement = function() {
                var node = this.createNode();
                this.expectKeyword("debugger");
                this.consumeSemicolon();
                return this.finalize(node, new Node.DebuggerStatement());
              };
              Parser2.prototype.parseStatement = function() {
                var statement;
                switch (this.lookahead.type) {
                  case 1:
                  case 5:
                  case 6:
                  case 8:
                  case 10:
                  case 9:
                    statement = this.parseExpressionStatement();
                    break;
                  case 7:
                    var value = this.lookahead.value;
                    if (value === "{") {
                      statement = this.parseBlock();
                    } else if (value === "(") {
                      statement = this.parseExpressionStatement();
                    } else if (value === ";") {
                      statement = this.parseEmptyStatement();
                    } else {
                      statement = this.parseExpressionStatement();
                    }
                    break;
                  case 3:
                    statement = this.matchAsyncFunction() ? this.parseFunctionDeclaration() : this.parseLabelledStatement();
                    break;
                  case 4:
                    switch (this.lookahead.value) {
                      case "break":
                        statement = this.parseBreakStatement();
                        break;
                      case "continue":
                        statement = this.parseContinueStatement();
                        break;
                      case "debugger":
                        statement = this.parseDebuggerStatement();
                        break;
                      case "do":
                        statement = this.parseDoWhileStatement();
                        break;
                      case "for":
                        statement = this.parseForStatement();
                        break;
                      case "function":
                        statement = this.parseFunctionDeclaration();
                        break;
                      case "if":
                        statement = this.parseIfStatement();
                        break;
                      case "return":
                        statement = this.parseReturnStatement();
                        break;
                      case "switch":
                        statement = this.parseSwitchStatement();
                        break;
                      case "throw":
                        statement = this.parseThrowStatement();
                        break;
                      case "try":
                        statement = this.parseTryStatement();
                        break;
                      case "var":
                        statement = this.parseVariableStatement();
                        break;
                      case "while":
                        statement = this.parseWhileStatement();
                        break;
                      case "with":
                        statement = this.parseWithStatement();
                        break;
                      default:
                        statement = this.parseExpressionStatement();
                        break;
                    }
                    break;
                  default:
                    statement = this.throwUnexpectedToken(this.lookahead);
                }
                return statement;
              };
              Parser2.prototype.parseFunctionSourceElements = function() {
                var node = this.createNode();
                this.expect("{");
                var body = this.parseDirectivePrologues();
                var previousLabelSet = this.context.labelSet;
                var previousInIteration = this.context.inIteration;
                var previousInSwitch = this.context.inSwitch;
                var previousInFunctionBody = this.context.inFunctionBody;
                this.context.labelSet = {};
                this.context.inIteration = false;
                this.context.inSwitch = false;
                this.context.inFunctionBody = true;
                while (this.lookahead.type !== 2) {
                  if (this.match("}")) {
                    break;
                  }
                  body.push(this.parseStatementListItem());
                }
                this.expect("}");
                this.context.labelSet = previousLabelSet;
                this.context.inIteration = previousInIteration;
                this.context.inSwitch = previousInSwitch;
                this.context.inFunctionBody = previousInFunctionBody;
                return this.finalize(node, new Node.BlockStatement(body));
              };
              Parser2.prototype.validateParam = function(options, param, name) {
                var key = "$" + name;
                if (this.context.strict) {
                  if (this.scanner.isRestrictedWord(name)) {
                    options.stricted = param;
                    options.message = messages_1.Messages.StrictParamName;
                  }
                  if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
                    options.stricted = param;
                    options.message = messages_1.Messages.StrictParamDupe;
                  }
                } else if (!options.firstRestricted) {
                  if (this.scanner.isRestrictedWord(name)) {
                    options.firstRestricted = param;
                    options.message = messages_1.Messages.StrictParamName;
                  } else if (this.scanner.isStrictModeReservedWord(name)) {
                    options.firstRestricted = param;
                    options.message = messages_1.Messages.StrictReservedWord;
                  } else if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
                    options.stricted = param;
                    options.message = messages_1.Messages.StrictParamDupe;
                  }
                }
                if (typeof Object.defineProperty === "function") {
                  Object.defineProperty(options.paramSet, key, { value: true, enumerable: true, writable: true, configurable: true });
                } else {
                  options.paramSet[key] = true;
                }
              };
              Parser2.prototype.parseRestElement = function(params) {
                var node = this.createNode();
                this.expect("...");
                var arg = this.parsePattern(params);
                if (this.match("=")) {
                  this.throwError(messages_1.Messages.DefaultRestParameter);
                }
                if (!this.match(")")) {
                  this.throwError(messages_1.Messages.ParameterAfterRestParameter);
                }
                return this.finalize(node, new Node.RestElement(arg));
              };
              Parser2.prototype.parseFormalParameter = function(options) {
                var params = [];
                var param = this.match("...") ? this.parseRestElement(params) : this.parsePatternWithDefault(params);
                for (var i = 0; i < params.length; i++) {
                  this.validateParam(options, params[i], params[i].value);
                }
                options.simple = options.simple && param instanceof Node.Identifier;
                options.params.push(param);
              };
              Parser2.prototype.parseFormalParameters = function(firstRestricted) {
                var options;
                options = {
                  simple: true,
                  params: [],
                  firstRestricted
                };
                this.expect("(");
                if (!this.match(")")) {
                  options.paramSet = {};
                  while (this.lookahead.type !== 2) {
                    this.parseFormalParameter(options);
                    if (this.match(")")) {
                      break;
                    }
                    this.expect(",");
                    if (this.match(")")) {
                      break;
                    }
                  }
                }
                this.expect(")");
                return {
                  simple: options.simple,
                  params: options.params,
                  stricted: options.stricted,
                  firstRestricted: options.firstRestricted,
                  message: options.message
                };
              };
              Parser2.prototype.matchAsyncFunction = function() {
                var match = this.matchContextualKeyword("async");
                if (match) {
                  var state = this.scanner.saveState();
                  this.scanner.scanComments();
                  var next = this.scanner.lex();
                  this.scanner.restoreState(state);
                  match = state.lineNumber === next.lineNumber && next.type === 4 && next.value === "function";
                }
                return match;
              };
              Parser2.prototype.parseFunctionDeclaration = function(identifierIsOptional) {
                var node = this.createNode();
                var isAsync = this.matchContextualKeyword("async");
                if (isAsync) {
                  this.nextToken();
                }
                this.expectKeyword("function");
                var isGenerator = isAsync ? false : this.match("*");
                if (isGenerator) {
                  this.nextToken();
                }
                var message;
                var id = null;
                var firstRestricted = null;
                if (!identifierIsOptional || !this.match("(")) {
                  var token = this.lookahead;
                  id = this.parseVariableIdentifier();
                  if (this.context.strict) {
                    if (this.scanner.isRestrictedWord(token.value)) {
                      this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
                    }
                  } else {
                    if (this.scanner.isRestrictedWord(token.value)) {
                      firstRestricted = token;
                      message = messages_1.Messages.StrictFunctionName;
                    } else if (this.scanner.isStrictModeReservedWord(token.value)) {
                      firstRestricted = token;
                      message = messages_1.Messages.StrictReservedWord;
                    }
                  }
                }
                var previousAllowAwait = this.context.await;
                var previousAllowYield = this.context.allowYield;
                this.context.await = isAsync;
                this.context.allowYield = !isGenerator;
                var formalParameters = this.parseFormalParameters(firstRestricted);
                var params = formalParameters.params;
                var stricted = formalParameters.stricted;
                firstRestricted = formalParameters.firstRestricted;
                if (formalParameters.message) {
                  message = formalParameters.message;
                }
                var previousStrict = this.context.strict;
                var previousAllowStrictDirective = this.context.allowStrictDirective;
                this.context.allowStrictDirective = formalParameters.simple;
                var body = this.parseFunctionSourceElements();
                if (this.context.strict && firstRestricted) {
                  this.throwUnexpectedToken(firstRestricted, message);
                }
                if (this.context.strict && stricted) {
                  this.tolerateUnexpectedToken(stricted, message);
                }
                this.context.strict = previousStrict;
                this.context.allowStrictDirective = previousAllowStrictDirective;
                this.context.await = previousAllowAwait;
                this.context.allowYield = previousAllowYield;
                return isAsync ? this.finalize(node, new Node.AsyncFunctionDeclaration(id, params, body)) : this.finalize(node, new Node.FunctionDeclaration(id, params, body, isGenerator));
              };
              Parser2.prototype.parseFunctionExpression = function() {
                var node = this.createNode();
                var isAsync = this.matchContextualKeyword("async");
                if (isAsync) {
                  this.nextToken();
                }
                this.expectKeyword("function");
                var isGenerator = isAsync ? false : this.match("*");
                if (isGenerator) {
                  this.nextToken();
                }
                var message;
                var id = null;
                var firstRestricted;
                var previousAllowAwait = this.context.await;
                var previousAllowYield = this.context.allowYield;
                this.context.await = isAsync;
                this.context.allowYield = !isGenerator;
                if (!this.match("(")) {
                  var token = this.lookahead;
                  id = !this.context.strict && !isGenerator && this.matchKeyword("yield") ? this.parseIdentifierName() : this.parseVariableIdentifier();
                  if (this.context.strict) {
                    if (this.scanner.isRestrictedWord(token.value)) {
                      this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
                    }
                  } else {
                    if (this.scanner.isRestrictedWord(token.value)) {
                      firstRestricted = token;
                      message = messages_1.Messages.StrictFunctionName;
                    } else if (this.scanner.isStrictModeReservedWord(token.value)) {
                      firstRestricted = token;
                      message = messages_1.Messages.StrictReservedWord;
                    }
                  }
                }
                var formalParameters = this.parseFormalParameters(firstRestricted);
                var params = formalParameters.params;
                var stricted = formalParameters.stricted;
                firstRestricted = formalParameters.firstRestricted;
                if (formalParameters.message) {
                  message = formalParameters.message;
                }
                var previousStrict = this.context.strict;
                var previousAllowStrictDirective = this.context.allowStrictDirective;
                this.context.allowStrictDirective = formalParameters.simple;
                var body = this.parseFunctionSourceElements();
                if (this.context.strict && firstRestricted) {
                  this.throwUnexpectedToken(firstRestricted, message);
                }
                if (this.context.strict && stricted) {
                  this.tolerateUnexpectedToken(stricted, message);
                }
                this.context.strict = previousStrict;
                this.context.allowStrictDirective = previousAllowStrictDirective;
                this.context.await = previousAllowAwait;
                this.context.allowYield = previousAllowYield;
                return isAsync ? this.finalize(node, new Node.AsyncFunctionExpression(id, params, body)) : this.finalize(node, new Node.FunctionExpression(id, params, body, isGenerator));
              };
              Parser2.prototype.parseDirective = function() {
                var token = this.lookahead;
                var node = this.createNode();
                var expr = this.parseExpression();
                var directive = expr.type === syntax_1.Syntax.Literal ? this.getTokenRaw(token).slice(1, -1) : null;
                this.consumeSemicolon();
                return this.finalize(node, directive ? new Node.Directive(expr, directive) : new Node.ExpressionStatement(expr));
              };
              Parser2.prototype.parseDirectivePrologues = function() {
                var firstRestricted = null;
                var body = [];
                while (true) {
                  var token = this.lookahead;
                  if (token.type !== 8) {
                    break;
                  }
                  var statement = this.parseDirective();
                  body.push(statement);
                  var directive = statement.directive;
                  if (typeof directive !== "string") {
                    break;
                  }
                  if (directive === "use strict") {
                    this.context.strict = true;
                    if (firstRestricted) {
                      this.tolerateUnexpectedToken(firstRestricted, messages_1.Messages.StrictOctalLiteral);
                    }
                    if (!this.context.allowStrictDirective) {
                      this.tolerateUnexpectedToken(token, messages_1.Messages.IllegalLanguageModeDirective);
                    }
                  } else {
                    if (!firstRestricted && token.octal) {
                      firstRestricted = token;
                    }
                  }
                }
                return body;
              };
              Parser2.prototype.qualifiedPropertyName = function(token) {
                switch (token.type) {
                  case 3:
                  case 8:
                  case 1:
                  case 5:
                  case 6:
                  case 4:
                    return true;
                  case 7:
                    return token.value === "[";
                  default:
                    break;
                }
                return false;
              };
              Parser2.prototype.parseGetterMethod = function() {
                var node = this.createNode();
                var isGenerator = false;
                var previousAllowYield = this.context.allowYield;
                this.context.allowYield = !isGenerator;
                var formalParameters = this.parseFormalParameters();
                if (formalParameters.params.length > 0) {
                  this.tolerateError(messages_1.Messages.BadGetterArity);
                }
                var method = this.parsePropertyMethod(formalParameters);
                this.context.allowYield = previousAllowYield;
                return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
              };
              Parser2.prototype.parseSetterMethod = function() {
                var node = this.createNode();
                var isGenerator = false;
                var previousAllowYield = this.context.allowYield;
                this.context.allowYield = !isGenerator;
                var formalParameters = this.parseFormalParameters();
                if (formalParameters.params.length !== 1) {
                  this.tolerateError(messages_1.Messages.BadSetterArity);
                } else if (formalParameters.params[0] instanceof Node.RestElement) {
                  this.tolerateError(messages_1.Messages.BadSetterRestParameter);
                }
                var method = this.parsePropertyMethod(formalParameters);
                this.context.allowYield = previousAllowYield;
                return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
              };
              Parser2.prototype.parseGeneratorMethod = function() {
                var node = this.createNode();
                var isGenerator = true;
                var previousAllowYield = this.context.allowYield;
                this.context.allowYield = true;
                var params = this.parseFormalParameters();
                this.context.allowYield = false;
                var method = this.parsePropertyMethod(params);
                this.context.allowYield = previousAllowYield;
                return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
              };
              Parser2.prototype.isStartOfExpression = function() {
                var start = true;
                var value = this.lookahead.value;
                switch (this.lookahead.type) {
                  case 7:
                    start = value === "[" || value === "(" || value === "{" || value === "+" || value === "-" || value === "!" || value === "~" || value === "++" || value === "--" || value === "/" || value === "/=";
                    break;
                  case 4:
                    start = value === "class" || value === "delete" || value === "function" || value === "let" || value === "new" || value === "super" || value === "this" || value === "typeof" || value === "void" || value === "yield";
                    break;
                  default:
                    break;
                }
                return start;
              };
              Parser2.prototype.parseYieldExpression = function() {
                var node = this.createNode();
                this.expectKeyword("yield");
                var argument = null;
                var delegate = false;
                if (!this.hasLineTerminator) {
                  var previousAllowYield = this.context.allowYield;
                  this.context.allowYield = false;
                  delegate = this.match("*");
                  if (delegate) {
                    this.nextToken();
                    argument = this.parseAssignmentExpression();
                  } else if (this.isStartOfExpression()) {
                    argument = this.parseAssignmentExpression();
                  }
                  this.context.allowYield = previousAllowYield;
                }
                return this.finalize(node, new Node.YieldExpression(argument, delegate));
              };
              Parser2.prototype.parseClassElement = function(hasConstructor) {
                var token = this.lookahead;
                var node = this.createNode();
                var kind = "";
                var key = null;
                var value = null;
                var computed = false;
                var method = false;
                var isStatic = false;
                var isAsync = false;
                if (this.match("*")) {
                  this.nextToken();
                } else {
                  computed = this.match("[");
                  key = this.parseObjectPropertyKey();
                  var id = key;
                  if (id.name === "static" && (this.qualifiedPropertyName(this.lookahead) || this.match("*"))) {
                    token = this.lookahead;
                    isStatic = true;
                    computed = this.match("[");
                    if (this.match("*")) {
                      this.nextToken();
                    } else {
                      key = this.parseObjectPropertyKey();
                    }
                  }
                  if (token.type === 3 && !this.hasLineTerminator && token.value === "async") {
                    var punctuator = this.lookahead.value;
                    if (punctuator !== ":" && punctuator !== "(" && punctuator !== "*") {
                      isAsync = true;
                      token = this.lookahead;
                      key = this.parseObjectPropertyKey();
                      if (token.type === 3 && token.value === "constructor") {
                        this.tolerateUnexpectedToken(token, messages_1.Messages.ConstructorIsAsync);
                      }
                    }
                  }
                }
                var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
                if (token.type === 3) {
                  if (token.value === "get" && lookaheadPropertyKey) {
                    kind = "get";
                    computed = this.match("[");
                    key = this.parseObjectPropertyKey();
                    this.context.allowYield = false;
                    value = this.parseGetterMethod();
                  } else if (token.value === "set" && lookaheadPropertyKey) {
                    kind = "set";
                    computed = this.match("[");
                    key = this.parseObjectPropertyKey();
                    value = this.parseSetterMethod();
                  }
                } else if (token.type === 7 && token.value === "*" && lookaheadPropertyKey) {
                  kind = "init";
                  computed = this.match("[");
                  key = this.parseObjectPropertyKey();
                  value = this.parseGeneratorMethod();
                  method = true;
                }
                if (!kind && key && this.match("(")) {
                  kind = "init";
                  value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
                  method = true;
                }
                if (!kind) {
                  this.throwUnexpectedToken(this.lookahead);
                }
                if (kind === "init") {
                  kind = "method";
                }
                if (!computed) {
                  if (isStatic && this.isPropertyKey(key, "prototype")) {
                    this.throwUnexpectedToken(token, messages_1.Messages.StaticPrototype);
                  }
                  if (!isStatic && this.isPropertyKey(key, "constructor")) {
                    if (kind !== "method" || !method || value && value.generator) {
                      this.throwUnexpectedToken(token, messages_1.Messages.ConstructorSpecialMethod);
                    }
                    if (hasConstructor.value) {
                      this.throwUnexpectedToken(token, messages_1.Messages.DuplicateConstructor);
                    } else {
                      hasConstructor.value = true;
                    }
                    kind = "constructor";
                  }
                }
                return this.finalize(node, new Node.MethodDefinition(key, computed, value, kind, isStatic));
              };
              Parser2.prototype.parseClassElementList = function() {
                var body = [];
                var hasConstructor = { value: false };
                this.expect("{");
                while (!this.match("}")) {
                  if (this.match(";")) {
                    this.nextToken();
                  } else {
                    body.push(this.parseClassElement(hasConstructor));
                  }
                }
                this.expect("}");
                return body;
              };
              Parser2.prototype.parseClassBody = function() {
                var node = this.createNode();
                var elementList = this.parseClassElementList();
                return this.finalize(node, new Node.ClassBody(elementList));
              };
              Parser2.prototype.parseClassDeclaration = function(identifierIsOptional) {
                var node = this.createNode();
                var previousStrict = this.context.strict;
                this.context.strict = true;
                this.expectKeyword("class");
                var id = identifierIsOptional && this.lookahead.type !== 3 ? null : this.parseVariableIdentifier();
                var superClass = null;
                if (this.matchKeyword("extends")) {
                  this.nextToken();
                  superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
                }
                var classBody = this.parseClassBody();
                this.context.strict = previousStrict;
                return this.finalize(node, new Node.ClassDeclaration(id, superClass, classBody));
              };
              Parser2.prototype.parseClassExpression = function() {
                var node = this.createNode();
                var previousStrict = this.context.strict;
                this.context.strict = true;
                this.expectKeyword("class");
                var id = this.lookahead.type === 3 ? this.parseVariableIdentifier() : null;
                var superClass = null;
                if (this.matchKeyword("extends")) {
                  this.nextToken();
                  superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
                }
                var classBody = this.parseClassBody();
                this.context.strict = previousStrict;
                return this.finalize(node, new Node.ClassExpression(id, superClass, classBody));
              };
              Parser2.prototype.parseModule = function() {
                this.context.strict = true;
                this.context.isModule = true;
                this.scanner.isModule = true;
                var node = this.createNode();
                var body = this.parseDirectivePrologues();
                while (this.lookahead.type !== 2) {
                  body.push(this.parseStatementListItem());
                }
                return this.finalize(node, new Node.Module(body));
              };
              Parser2.prototype.parseScript = function() {
                var node = this.createNode();
                var body = this.parseDirectivePrologues();
                while (this.lookahead.type !== 2) {
                  body.push(this.parseStatementListItem());
                }
                return this.finalize(node, new Node.Script(body));
              };
              Parser2.prototype.parseModuleSpecifier = function() {
                var node = this.createNode();
                if (this.lookahead.type !== 8) {
                  this.throwError(messages_1.Messages.InvalidModuleSpecifier);
                }
                var token = this.nextToken();
                var raw = this.getTokenRaw(token);
                return this.finalize(node, new Node.Literal(token.value, raw));
              };
              Parser2.prototype.parseImportSpecifier = function() {
                var node = this.createNode();
                var imported;
                var local;
                if (this.lookahead.type === 3) {
                  imported = this.parseVariableIdentifier();
                  local = imported;
                  if (this.matchContextualKeyword("as")) {
                    this.nextToken();
                    local = this.parseVariableIdentifier();
                  }
                } else {
                  imported = this.parseIdentifierName();
                  local = imported;
                  if (this.matchContextualKeyword("as")) {
                    this.nextToken();
                    local = this.parseVariableIdentifier();
                  } else {
                    this.throwUnexpectedToken(this.nextToken());
                  }
                }
                return this.finalize(node, new Node.ImportSpecifier(local, imported));
              };
              Parser2.prototype.parseNamedImports = function() {
                this.expect("{");
                var specifiers = [];
                while (!this.match("}")) {
                  specifiers.push(this.parseImportSpecifier());
                  if (!this.match("}")) {
                    this.expect(",");
                  }
                }
                this.expect("}");
                return specifiers;
              };
              Parser2.prototype.parseImportDefaultSpecifier = function() {
                var node = this.createNode();
                var local = this.parseIdentifierName();
                return this.finalize(node, new Node.ImportDefaultSpecifier(local));
              };
              Parser2.prototype.parseImportNamespaceSpecifier = function() {
                var node = this.createNode();
                this.expect("*");
                if (!this.matchContextualKeyword("as")) {
                  this.throwError(messages_1.Messages.NoAsAfterImportNamespace);
                }
                this.nextToken();
                var local = this.parseIdentifierName();
                return this.finalize(node, new Node.ImportNamespaceSpecifier(local));
              };
              Parser2.prototype.parseImportDeclaration = function() {
                if (this.context.inFunctionBody) {
                  this.throwError(messages_1.Messages.IllegalImportDeclaration);
                }
                var node = this.createNode();
                this.expectKeyword("import");
                var src;
                var specifiers = [];
                if (this.lookahead.type === 8) {
                  src = this.parseModuleSpecifier();
                } else {
                  if (this.match("{")) {
                    specifiers = specifiers.concat(this.parseNamedImports());
                  } else if (this.match("*")) {
                    specifiers.push(this.parseImportNamespaceSpecifier());
                  } else if (this.isIdentifierName(this.lookahead) && !this.matchKeyword("default")) {
                    specifiers.push(this.parseImportDefaultSpecifier());
                    if (this.match(",")) {
                      this.nextToken();
                      if (this.match("*")) {
                        specifiers.push(this.parseImportNamespaceSpecifier());
                      } else if (this.match("{")) {
                        specifiers = specifiers.concat(this.parseNamedImports());
                      } else {
                        this.throwUnexpectedToken(this.lookahead);
                      }
                    }
                  } else {
                    this.throwUnexpectedToken(this.nextToken());
                  }
                  if (!this.matchContextualKeyword("from")) {
                    var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
                    this.throwError(message, this.lookahead.value);
                  }
                  this.nextToken();
                  src = this.parseModuleSpecifier();
                }
                this.consumeSemicolon();
                return this.finalize(node, new Node.ImportDeclaration(specifiers, src));
              };
              Parser2.prototype.parseExportSpecifier = function() {
                var node = this.createNode();
                var local = this.parseIdentifierName();
                var exported = local;
                if (this.matchContextualKeyword("as")) {
                  this.nextToken();
                  exported = this.parseIdentifierName();
                }
                return this.finalize(node, new Node.ExportSpecifier(local, exported));
              };
              Parser2.prototype.parseExportDeclaration = function() {
                if (this.context.inFunctionBody) {
                  this.throwError(messages_1.Messages.IllegalExportDeclaration);
                }
                var node = this.createNode();
                this.expectKeyword("export");
                var exportDeclaration;
                if (this.matchKeyword("default")) {
                  this.nextToken();
                  if (this.matchKeyword("function")) {
                    var declaration = this.parseFunctionDeclaration(true);
                    exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
                  } else if (this.matchKeyword("class")) {
                    var declaration = this.parseClassDeclaration(true);
                    exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
                  } else if (this.matchContextualKeyword("async")) {
                    var declaration = this.matchAsyncFunction() ? this.parseFunctionDeclaration(true) : this.parseAssignmentExpression();
                    exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
                  } else {
                    if (this.matchContextualKeyword("from")) {
                      this.throwError(messages_1.Messages.UnexpectedToken, this.lookahead.value);
                    }
                    var declaration = this.match("{") ? this.parseObjectInitializer() : this.match("[") ? this.parseArrayInitializer() : this.parseAssignmentExpression();
                    this.consumeSemicolon();
                    exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
                  }
                } else if (this.match("*")) {
                  this.nextToken();
                  if (!this.matchContextualKeyword("from")) {
                    var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
                    this.throwError(message, this.lookahead.value);
                  }
                  this.nextToken();
                  var src = this.parseModuleSpecifier();
                  this.consumeSemicolon();
                  exportDeclaration = this.finalize(node, new Node.ExportAllDeclaration(src));
                } else if (this.lookahead.type === 4) {
                  var declaration = void 0;
                  switch (this.lookahead.value) {
                    case "let":
                    case "const":
                      declaration = this.parseLexicalDeclaration({ inFor: false });
                      break;
                    case "var":
                    case "class":
                    case "function":
                      declaration = this.parseStatementListItem();
                      break;
                    default:
                      this.throwUnexpectedToken(this.lookahead);
                  }
                  exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
                } else if (this.matchAsyncFunction()) {
                  var declaration = this.parseFunctionDeclaration();
                  exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
                } else {
                  var specifiers = [];
                  var source = null;
                  var isExportFromIdentifier = false;
                  this.expect("{");
                  while (!this.match("}")) {
                    isExportFromIdentifier = isExportFromIdentifier || this.matchKeyword("default");
                    specifiers.push(this.parseExportSpecifier());
                    if (!this.match("}")) {
                      this.expect(",");
                    }
                  }
                  this.expect("}");
                  if (this.matchContextualKeyword("from")) {
                    this.nextToken();
                    source = this.parseModuleSpecifier();
                    this.consumeSemicolon();
                  } else if (isExportFromIdentifier) {
                    var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
                    this.throwError(message, this.lookahead.value);
                  } else {
                    this.consumeSemicolon();
                  }
                  exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(null, specifiers, source));
                }
                return exportDeclaration;
              };
              return Parser2;
            }();
            exports3.Parser = Parser;
          },
          /* 9 */
          /***/
          function(module3, exports3) {
            "use strict";
            Object.defineProperty(exports3, "__esModule", { value: true });
            function assert(condition, message) {
              if (!condition) {
                throw new Error("ASSERT: " + message);
              }
            }
            exports3.assert = assert;
          },
          /* 10 */
          /***/
          function(module3, exports3) {
            "use strict";
            Object.defineProperty(exports3, "__esModule", { value: true });
            var ErrorHandler = function() {
              function ErrorHandler2() {
                this.errors = [];
                this.tolerant = false;
              }
              ErrorHandler2.prototype.recordError = function(error) {
                this.errors.push(error);
              };
              ErrorHandler2.prototype.tolerate = function(error) {
                if (this.tolerant) {
                  this.recordError(error);
                } else {
                  throw error;
                }
              };
              ErrorHandler2.prototype.constructError = function(msg, column) {
                var error = new Error(msg);
                try {
                  throw error;
                } catch (base) {
                  if (Object.create && Object.defineProperty) {
                    error = Object.create(base);
                    Object.defineProperty(error, "column", { value: column });
                  }
                }
                return error;
              };
              ErrorHandler2.prototype.createError = function(index, line, col, description) {
                var msg = "Line " + line + ": " + description;
                var error = this.constructError(msg, col);
                error.index = index;
                error.lineNumber = line;
                error.description = description;
                return error;
              };
              ErrorHandler2.prototype.throwError = function(index, line, col, description) {
                throw this.createError(index, line, col, description);
              };
              ErrorHandler2.prototype.tolerateError = function(index, line, col, description) {
                var error = this.createError(index, line, col, description);
                if (this.tolerant) {
                  this.recordError(error);
                } else {
                  throw error;
                }
              };
              return ErrorHandler2;
            }();
            exports3.ErrorHandler = ErrorHandler;
          },
          /* 11 */
          /***/
          function(module3, exports3) {
            "use strict";
            Object.defineProperty(exports3, "__esModule", { value: true });
            exports3.Messages = {
              BadGetterArity: "Getter must not have any formal parameters",
              BadSetterArity: "Setter must have exactly one formal parameter",
              BadSetterRestParameter: "Setter function argument must not be a rest parameter",
              ConstructorIsAsync: "Class constructor may not be an async method",
              ConstructorSpecialMethod: "Class constructor may not be an accessor",
              DeclarationMissingInitializer: "Missing initializer in %0 declaration",
              DefaultRestParameter: "Unexpected token =",
              DuplicateBinding: "Duplicate binding %0",
              DuplicateConstructor: "A class may only have one constructor",
              DuplicateProtoProperty: "Duplicate __proto__ fields are not allowed in object literals",
              ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer",
              GeneratorInLegacyContext: "Generator declarations are not allowed in legacy contexts",
              IllegalBreak: "Illegal break statement",
              IllegalContinue: "Illegal continue statement",
              IllegalExportDeclaration: "Unexpected token",
              IllegalImportDeclaration: "Unexpected token",
              IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list",
              IllegalReturn: "Illegal return statement",
              InvalidEscapedReservedWord: "Keyword must not contain escaped characters",
              InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence",
              InvalidLHSInAssignment: "Invalid left-hand side in assignment",
              InvalidLHSInForIn: "Invalid left-hand side in for-in",
              InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
              InvalidModuleSpecifier: "Unexpected token",
              InvalidRegExp: "Invalid regular expression",
              LetInLexicalBinding: "let is disallowed as a lexically bound name",
              MissingFromClause: "Unexpected token",
              MultipleDefaultsInSwitch: "More than one default clause in switch statement",
              NewlineAfterThrow: "Illegal newline after throw",
              NoAsAfterImportNamespace: "Unexpected token",
              NoCatchOrFinally: "Missing catch or finally after try",
              ParameterAfterRestParameter: "Rest parameter must be last formal parameter",
              Redeclaration: "%0 '%1' has already been declared",
              StaticPrototype: "Classes may not have static property named prototype",
              StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
              StrictDelete: "Delete of an unqualified identifier in strict mode.",
              StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block",
              StrictFunctionName: "Function name may not be eval or arguments in strict mode",
              StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
              StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
              StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
              StrictModeWith: "Strict mode code may not include a with statement",
              StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
              StrictParamDupe: "Strict mode function may not have duplicate parameter names",
              StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
              StrictReservedWord: "Use of future reserved word in strict mode",
              StrictVarName: "Variable name may not be eval or arguments in strict mode",
              TemplateOctalLiteral: "Octal literals are not allowed in template strings.",
              UnexpectedEOS: "Unexpected end of input",
              UnexpectedIdentifier: "Unexpected identifier",
              UnexpectedNumber: "Unexpected number",
              UnexpectedReserved: "Unexpected reserved word",
              UnexpectedString: "Unexpected string",
              UnexpectedTemplate: "Unexpected quasi %0",
              UnexpectedToken: "Unexpected token %0",
              UnexpectedTokenIllegal: "Unexpected token ILLEGAL",
              UnknownLabel: "Undefined label '%0'",
              UnterminatedRegExp: "Invalid regular expression: missing /"
            };
          },
          /* 12 */
          /***/
          function(module3, exports3, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports3, "__esModule", { value: true });
            var assert_1 = __webpack_require__(9);
            var character_1 = __webpack_require__(4);
            var messages_1 = __webpack_require__(11);
            function hexValue(ch) {
              return "0123456789abcdef".indexOf(ch.toLowerCase());
            }
            function octalValue(ch) {
              return "01234567".indexOf(ch);
            }
            var Scanner = function() {
              function Scanner2(code, handler) {
                this.source = code;
                this.errorHandler = handler;
                this.trackComment = false;
                this.isModule = false;
                this.length = code.length;
                this.index = 0;
                this.lineNumber = code.length > 0 ? 1 : 0;
                this.lineStart = 0;
                this.curlyStack = [];
              }
              Scanner2.prototype.saveState = function() {
                return {
                  index: this.index,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart
                };
              };
              Scanner2.prototype.restoreState = function(state) {
                this.index = state.index;
                this.lineNumber = state.lineNumber;
                this.lineStart = state.lineStart;
              };
              Scanner2.prototype.eof = function() {
                return this.index >= this.length;
              };
              Scanner2.prototype.throwUnexpectedToken = function(message) {
                if (message === void 0) {
                  message = messages_1.Messages.UnexpectedTokenIllegal;
                }
                return this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
              };
              Scanner2.prototype.tolerateUnexpectedToken = function(message) {
                if (message === void 0) {
                  message = messages_1.Messages.UnexpectedTokenIllegal;
                }
                this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
              };
              Scanner2.prototype.skipSingleLineComment = function(offset) {
                var comments = [];
                var start, loc;
                if (this.trackComment) {
                  comments = [];
                  start = this.index - offset;
                  loc = {
                    start: {
                      line: this.lineNumber,
                      column: this.index - this.lineStart - offset
                    },
                    end: {}
                  };
                }
                while (!this.eof()) {
                  var ch = this.source.charCodeAt(this.index);
                  ++this.index;
                  if (character_1.Character.isLineTerminator(ch)) {
                    if (this.trackComment) {
                      loc.end = {
                        line: this.lineNumber,
                        column: this.index - this.lineStart - 1
                      };
                      var entry = {
                        multiLine: false,
                        slice: [start + offset, this.index - 1],
                        range: [start, this.index - 1],
                        loc
                      };
                      comments.push(entry);
                    }
                    if (ch === 13 && this.source.charCodeAt(this.index) === 10) {
                      ++this.index;
                    }
                    ++this.lineNumber;
                    this.lineStart = this.index;
                    return comments;
                  }
                }
                if (this.trackComment) {
                  loc.end = {
                    line: this.lineNumber,
                    column: this.index - this.lineStart
                  };
                  var entry = {
                    multiLine: false,
                    slice: [start + offset, this.index],
                    range: [start, this.index],
                    loc
                  };
                  comments.push(entry);
                }
                return comments;
              };
              Scanner2.prototype.skipMultiLineComment = function() {
                var comments = [];
                var start, loc;
                if (this.trackComment) {
                  comments = [];
                  start = this.index - 2;
                  loc = {
                    start: {
                      line: this.lineNumber,
                      column: this.index - this.lineStart - 2
                    },
                    end: {}
                  };
                }
                while (!this.eof()) {
                  var ch = this.source.charCodeAt(this.index);
                  if (character_1.Character.isLineTerminator(ch)) {
                    if (ch === 13 && this.source.charCodeAt(this.index + 1) === 10) {
                      ++this.index;
                    }
                    ++this.lineNumber;
                    ++this.index;
                    this.lineStart = this.index;
                  } else if (ch === 42) {
                    if (this.source.charCodeAt(this.index + 1) === 47) {
                      this.index += 2;
                      if (this.trackComment) {
                        loc.end = {
                          line: this.lineNumber,
                          column: this.index - this.lineStart
                        };
                        var entry = {
                          multiLine: true,
                          slice: [start + 2, this.index - 2],
                          range: [start, this.index],
                          loc
                        };
                        comments.push(entry);
                      }
                      return comments;
                    }
                    ++this.index;
                  } else {
                    ++this.index;
                  }
                }
                if (this.trackComment) {
                  loc.end = {
                    line: this.lineNumber,
                    column: this.index - this.lineStart
                  };
                  var entry = {
                    multiLine: true,
                    slice: [start + 2, this.index],
                    range: [start, this.index],
                    loc
                  };
                  comments.push(entry);
                }
                this.tolerateUnexpectedToken();
                return comments;
              };
              Scanner2.prototype.scanComments = function() {
                var comments;
                if (this.trackComment) {
                  comments = [];
                }
                var start = this.index === 0;
                while (!this.eof()) {
                  var ch = this.source.charCodeAt(this.index);
                  if (character_1.Character.isWhiteSpace(ch)) {
                    ++this.index;
                  } else if (character_1.Character.isLineTerminator(ch)) {
                    ++this.index;
                    if (ch === 13 && this.source.charCodeAt(this.index) === 10) {
                      ++this.index;
                    }
                    ++this.lineNumber;
                    this.lineStart = this.index;
                    start = true;
                  } else if (ch === 47) {
                    ch = this.source.charCodeAt(this.index + 1);
                    if (ch === 47) {
                      this.index += 2;
                      var comment = this.skipSingleLineComment(2);
                      if (this.trackComment) {
                        comments = comments.concat(comment);
                      }
                      start = true;
                    } else if (ch === 42) {
                      this.index += 2;
                      var comment = this.skipMultiLineComment();
                      if (this.trackComment) {
                        comments = comments.concat(comment);
                      }
                    } else {
                      break;
                    }
                  } else if (start && ch === 45) {
                    if (this.source.charCodeAt(this.index + 1) === 45 && this.source.charCodeAt(this.index + 2) === 62) {
                      this.index += 3;
                      var comment = this.skipSingleLineComment(3);
                      if (this.trackComment) {
                        comments = comments.concat(comment);
                      }
                    } else {
                      break;
                    }
                  } else if (ch === 60 && !this.isModule) {
                    if (this.source.slice(this.index + 1, this.index + 4) === "!--") {
                      this.index += 4;
                      var comment = this.skipSingleLineComment(4);
                      if (this.trackComment) {
                        comments = comments.concat(comment);
                      }
                    } else {
                      break;
                    }
                  } else {
                    break;
                  }
                }
                return comments;
              };
              Scanner2.prototype.isFutureReservedWord = function(id) {
                switch (id) {
                  case "enum":
                  case "export":
                  case "import":
                  case "super":
                    return true;
                  default:
                    return false;
                }
              };
              Scanner2.prototype.isStrictModeReservedWord = function(id) {
                switch (id) {
                  case "implements":
                  case "interface":
                  case "package":
                  case "private":
                  case "protected":
                  case "public":
                  case "static":
                  case "yield":
                  case "let":
                    return true;
                  default:
                    return false;
                }
              };
              Scanner2.prototype.isRestrictedWord = function(id) {
                return id === "eval" || id === "arguments";
              };
              Scanner2.prototype.isKeyword = function(id) {
                switch (id.length) {
                  case 2:
                    return id === "if" || id === "in" || id === "do";
                  case 3:
                    return id === "var" || id === "for" || id === "new" || id === "try" || id === "let";
                  case 4:
                    return id === "this" || id === "else" || id === "case" || id === "void" || id === "with" || id === "enum";
                  case 5:
                    return id === "while" || id === "break" || id === "catch" || id === "throw" || id === "const" || id === "yield" || id === "class" || id === "super";
                  case 6:
                    return id === "return" || id === "typeof" || id === "delete" || id === "switch" || id === "export" || id === "import";
                  case 7:
                    return id === "default" || id === "finally" || id === "extends";
                  case 8:
                    return id === "function" || id === "continue" || id === "debugger";
                  case 10:
                    return id === "instanceof";
                  default:
                    return false;
                }
              };
              Scanner2.prototype.codePointAt = function(i) {
                var cp = this.source.charCodeAt(i);
                if (cp >= 55296 && cp <= 56319) {
                  var second = this.source.charCodeAt(i + 1);
                  if (second >= 56320 && second <= 57343) {
                    var first = cp;
                    cp = (first - 55296) * 1024 + second - 56320 + 65536;
                  }
                }
                return cp;
              };
              Scanner2.prototype.scanHexEscape = function(prefix) {
                var len = prefix === "u" ? 4 : 2;
                var code = 0;
                for (var i = 0; i < len; ++i) {
                  if (!this.eof() && character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
                    code = code * 16 + hexValue(this.source[this.index++]);
                  } else {
                    return null;
                  }
                }
                return String.fromCharCode(code);
              };
              Scanner2.prototype.scanUnicodeCodePointEscape = function() {
                var ch = this.source[this.index];
                var code = 0;
                if (ch === "}") {
                  this.throwUnexpectedToken();
                }
                while (!this.eof()) {
                  ch = this.source[this.index++];
                  if (!character_1.Character.isHexDigit(ch.charCodeAt(0))) {
                    break;
                  }
                  code = code * 16 + hexValue(ch);
                }
                if (code > 1114111 || ch !== "}") {
                  this.throwUnexpectedToken();
                }
                return character_1.Character.fromCodePoint(code);
              };
              Scanner2.prototype.getIdentifier = function() {
                var start = this.index++;
                while (!this.eof()) {
                  var ch = this.source.charCodeAt(this.index);
                  if (ch === 92) {
                    this.index = start;
                    return this.getComplexIdentifier();
                  } else if (ch >= 55296 && ch < 57343) {
                    this.index = start;
                    return this.getComplexIdentifier();
                  }
                  if (character_1.Character.isIdentifierPart(ch)) {
                    ++this.index;
                  } else {
                    break;
                  }
                }
                return this.source.slice(start, this.index);
              };
              Scanner2.prototype.getComplexIdentifier = function() {
                var cp = this.codePointAt(this.index);
                var id = character_1.Character.fromCodePoint(cp);
                this.index += id.length;
                var ch;
                if (cp === 92) {
                  if (this.source.charCodeAt(this.index) !== 117) {
                    this.throwUnexpectedToken();
                  }
                  ++this.index;
                  if (this.source[this.index] === "{") {
                    ++this.index;
                    ch = this.scanUnicodeCodePointEscape();
                  } else {
                    ch = this.scanHexEscape("u");
                    if (ch === null || ch === "\\" || !character_1.Character.isIdentifierStart(ch.charCodeAt(0))) {
                      this.throwUnexpectedToken();
                    }
                  }
                  id = ch;
                }
                while (!this.eof()) {
                  cp = this.codePointAt(this.index);
                  if (!character_1.Character.isIdentifierPart(cp)) {
                    break;
                  }
                  ch = character_1.Character.fromCodePoint(cp);
                  id += ch;
                  this.index += ch.length;
                  if (cp === 92) {
                    id = id.substr(0, id.length - 1);
                    if (this.source.charCodeAt(this.index) !== 117) {
                      this.throwUnexpectedToken();
                    }
                    ++this.index;
                    if (this.source[this.index] === "{") {
                      ++this.index;
                      ch = this.scanUnicodeCodePointEscape();
                    } else {
                      ch = this.scanHexEscape("u");
                      if (ch === null || ch === "\\" || !character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
                        this.throwUnexpectedToken();
                      }
                    }
                    id += ch;
                  }
                }
                return id;
              };
              Scanner2.prototype.octalToDecimal = function(ch) {
                var octal = ch !== "0";
                var code = octalValue(ch);
                if (!this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
                  octal = true;
                  code = code * 8 + octalValue(this.source[this.index++]);
                  if ("0123".indexOf(ch) >= 0 && !this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
                    code = code * 8 + octalValue(this.source[this.index++]);
                  }
                }
                return {
                  code,
                  octal
                };
              };
              Scanner2.prototype.scanIdentifier = function() {
                var type;
                var start = this.index;
                var id = this.source.charCodeAt(start) === 92 ? this.getComplexIdentifier() : this.getIdentifier();
                if (id.length === 1) {
                  type = 3;
                } else if (this.isKeyword(id)) {
                  type = 4;
                } else if (id === "null") {
                  type = 5;
                } else if (id === "true" || id === "false") {
                  type = 1;
                } else {
                  type = 3;
                }
                if (type !== 3 && start + id.length !== this.index) {
                  var restore = this.index;
                  this.index = start;
                  this.tolerateUnexpectedToken(messages_1.Messages.InvalidEscapedReservedWord);
                  this.index = restore;
                }
                return {
                  type,
                  value: id,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.scanPunctuator = function() {
                var start = this.index;
                var str = this.source[this.index];
                switch (str) {
                  case "(":
                  case "{":
                    if (str === "{") {
                      this.curlyStack.push("{");
                    }
                    ++this.index;
                    break;
                  case ".":
                    ++this.index;
                    if (this.source[this.index] === "." && this.source[this.index + 1] === ".") {
                      this.index += 2;
                      str = "...";
                    }
                    break;
                  case "}":
                    ++this.index;
                    this.curlyStack.pop();
                    break;
                  case ")":
                  case ";":
                  case ",":
                  case "[":
                  case "]":
                  case ":":
                  case "?":
                  case "~":
                    ++this.index;
                    break;
                  default:
                    str = this.source.substr(this.index, 4);
                    if (str === ">>>=") {
                      this.index += 4;
                    } else {
                      str = str.substr(0, 3);
                      if (str === "===" || str === "!==" || str === ">>>" || str === "<<=" || str === ">>=" || str === "**=") {
                        this.index += 3;
                      } else {
                        str = str.substr(0, 2);
                        if (str === "&&" || str === "||" || str === "==" || str === "!=" || str === "+=" || str === "-=" || str === "*=" || str === "/=" || str === "++" || str === "--" || str === "<<" || str === ">>" || str === "&=" || str === "|=" || str === "^=" || str === "%=" || str === "<=" || str === ">=" || str === "=>" || str === "**") {
                          this.index += 2;
                        } else {
                          str = this.source[this.index];
                          if ("<>=!+-*%&|^/".indexOf(str) >= 0) {
                            ++this.index;
                          }
                        }
                      }
                    }
                }
                if (this.index === start) {
                  this.throwUnexpectedToken();
                }
                return {
                  type: 7,
                  value: str,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.scanHexLiteral = function(start) {
                var num = "";
                while (!this.eof()) {
                  if (!character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
                    break;
                  }
                  num += this.source[this.index++];
                }
                if (num.length === 0) {
                  this.throwUnexpectedToken();
                }
                if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
                  this.throwUnexpectedToken();
                }
                return {
                  type: 6,
                  value: parseInt("0x" + num, 16),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.scanBinaryLiteral = function(start) {
                var num = "";
                var ch;
                while (!this.eof()) {
                  ch = this.source[this.index];
                  if (ch !== "0" && ch !== "1") {
                    break;
                  }
                  num += this.source[this.index++];
                }
                if (num.length === 0) {
                  this.throwUnexpectedToken();
                }
                if (!this.eof()) {
                  ch = this.source.charCodeAt(this.index);
                  if (character_1.Character.isIdentifierStart(ch) || character_1.Character.isDecimalDigit(ch)) {
                    this.throwUnexpectedToken();
                  }
                }
                return {
                  type: 6,
                  value: parseInt(num, 2),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.scanOctalLiteral = function(prefix, start) {
                var num = "";
                var octal = false;
                if (character_1.Character.isOctalDigit(prefix.charCodeAt(0))) {
                  octal = true;
                  num = "0" + this.source[this.index++];
                } else {
                  ++this.index;
                }
                while (!this.eof()) {
                  if (!character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
                    break;
                  }
                  num += this.source[this.index++];
                }
                if (!octal && num.length === 0) {
                  this.throwUnexpectedToken();
                }
                if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                  this.throwUnexpectedToken();
                }
                return {
                  type: 6,
                  value: parseInt(num, 8),
                  octal,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.isImplicitOctalLiteral = function() {
                for (var i = this.index + 1; i < this.length; ++i) {
                  var ch = this.source[i];
                  if (ch === "8" || ch === "9") {
                    return false;
                  }
                  if (!character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                    return true;
                  }
                }
                return true;
              };
              Scanner2.prototype.scanNumericLiteral = function() {
                var start = this.index;
                var ch = this.source[start];
                assert_1.assert(character_1.Character.isDecimalDigit(ch.charCodeAt(0)) || ch === ".", "Numeric literal must start with a decimal digit or a decimal point");
                var num = "";
                if (ch !== ".") {
                  num = this.source[this.index++];
                  ch = this.source[this.index];
                  if (num === "0") {
                    if (ch === "x" || ch === "X") {
                      ++this.index;
                      return this.scanHexLiteral(start);
                    }
                    if (ch === "b" || ch === "B") {
                      ++this.index;
                      return this.scanBinaryLiteral(start);
                    }
                    if (ch === "o" || ch === "O") {
                      return this.scanOctalLiteral(ch, start);
                    }
                    if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                      if (this.isImplicitOctalLiteral()) {
                        return this.scanOctalLiteral(ch, start);
                      }
                    }
                  }
                  while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                    num += this.source[this.index++];
                  }
                  ch = this.source[this.index];
                }
                if (ch === ".") {
                  num += this.source[this.index++];
                  while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                    num += this.source[this.index++];
                  }
                  ch = this.source[this.index];
                }
                if (ch === "e" || ch === "E") {
                  num += this.source[this.index++];
                  ch = this.source[this.index];
                  if (ch === "+" || ch === "-") {
                    num += this.source[this.index++];
                  }
                  if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                    while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                      num += this.source[this.index++];
                    }
                  } else {
                    this.throwUnexpectedToken();
                  }
                }
                if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
                  this.throwUnexpectedToken();
                }
                return {
                  type: 6,
                  value: parseFloat(num),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.scanStringLiteral = function() {
                var start = this.index;
                var quote = this.source[start];
                assert_1.assert(quote === "'" || quote === '"', "String literal must starts with a quote");
                ++this.index;
                var octal = false;
                var str = "";
                while (!this.eof()) {
                  var ch = this.source[this.index++];
                  if (ch === quote) {
                    quote = "";
                    break;
                  } else if (ch === "\\") {
                    ch = this.source[this.index++];
                    if (!ch || !character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                      switch (ch) {
                        case "u":
                          if (this.source[this.index] === "{") {
                            ++this.index;
                            str += this.scanUnicodeCodePointEscape();
                          } else {
                            var unescaped_1 = this.scanHexEscape(ch);
                            if (unescaped_1 === null) {
                              this.throwUnexpectedToken();
                            }
                            str += unescaped_1;
                          }
                          break;
                        case "x":
                          var unescaped = this.scanHexEscape(ch);
                          if (unescaped === null) {
                            this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
                          }
                          str += unescaped;
                          break;
                        case "n":
                          str += "\n";
                          break;
                        case "r":
                          str += "\r";
                          break;
                        case "t":
                          str += "	";
                          break;
                        case "b":
                          str += "\b";
                          break;
                        case "f":
                          str += "\f";
                          break;
                        case "v":
                          str += "\v";
                          break;
                        case "8":
                        case "9":
                          str += ch;
                          this.tolerateUnexpectedToken();
                          break;
                        default:
                          if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                            var octToDec = this.octalToDecimal(ch);
                            octal = octToDec.octal || octal;
                            str += String.fromCharCode(octToDec.code);
                          } else {
                            str += ch;
                          }
                          break;
                      }
                    } else {
                      ++this.lineNumber;
                      if (ch === "\r" && this.source[this.index] === "\n") {
                        ++this.index;
                      }
                      this.lineStart = this.index;
                    }
                  } else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                    break;
                  } else {
                    str += ch;
                  }
                }
                if (quote !== "") {
                  this.index = start;
                  this.throwUnexpectedToken();
                }
                return {
                  type: 8,
                  value: str,
                  octal,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.scanTemplate = function() {
                var cooked = "";
                var terminated = false;
                var start = this.index;
                var head = this.source[start] === "`";
                var tail = false;
                var rawOffset = 2;
                ++this.index;
                while (!this.eof()) {
                  var ch = this.source[this.index++];
                  if (ch === "`") {
                    rawOffset = 1;
                    tail = true;
                    terminated = true;
                    break;
                  } else if (ch === "$") {
                    if (this.source[this.index] === "{") {
                      this.curlyStack.push("${");
                      ++this.index;
                      terminated = true;
                      break;
                    }
                    cooked += ch;
                  } else if (ch === "\\") {
                    ch = this.source[this.index++];
                    if (!character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                      switch (ch) {
                        case "n":
                          cooked += "\n";
                          break;
                        case "r":
                          cooked += "\r";
                          break;
                        case "t":
                          cooked += "	";
                          break;
                        case "u":
                          if (this.source[this.index] === "{") {
                            ++this.index;
                            cooked += this.scanUnicodeCodePointEscape();
                          } else {
                            var restore = this.index;
                            var unescaped_2 = this.scanHexEscape(ch);
                            if (unescaped_2 !== null) {
                              cooked += unescaped_2;
                            } else {
                              this.index = restore;
                              cooked += ch;
                            }
                          }
                          break;
                        case "x":
                          var unescaped = this.scanHexEscape(ch);
                          if (unescaped === null) {
                            this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
                          }
                          cooked += unescaped;
                          break;
                        case "b":
                          cooked += "\b";
                          break;
                        case "f":
                          cooked += "\f";
                          break;
                        case "v":
                          cooked += "\v";
                          break;
                        default:
                          if (ch === "0") {
                            if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                              this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
                            }
                            cooked += "\0";
                          } else if (character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                            this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
                          } else {
                            cooked += ch;
                          }
                          break;
                      }
                    } else {
                      ++this.lineNumber;
                      if (ch === "\r" && this.source[this.index] === "\n") {
                        ++this.index;
                      }
                      this.lineStart = this.index;
                    }
                  } else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                    ++this.lineNumber;
                    if (ch === "\r" && this.source[this.index] === "\n") {
                      ++this.index;
                    }
                    this.lineStart = this.index;
                    cooked += "\n";
                  } else {
                    cooked += ch;
                  }
                }
                if (!terminated) {
                  this.throwUnexpectedToken();
                }
                if (!head) {
                  this.curlyStack.pop();
                }
                return {
                  type: 10,
                  value: this.source.slice(start + 1, this.index - rawOffset),
                  cooked,
                  head,
                  tail,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.testRegExp = function(pattern, flags) {
                var astralSubstitute = "\uFFFF";
                var tmp = pattern;
                var self2 = this;
                if (flags.indexOf("u") >= 0) {
                  tmp = tmp.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function($0, $1, $2) {
                    var codePoint = parseInt($1 || $2, 16);
                    if (codePoint > 1114111) {
                      self2.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
                    }
                    if (codePoint <= 65535) {
                      return String.fromCharCode(codePoint);
                    }
                    return astralSubstitute;
                  }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, astralSubstitute);
                }
                try {
                  RegExp(tmp);
                } catch (e) {
                  this.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
                }
                try {
                  return new RegExp(pattern, flags);
                } catch (exception) {
                  return null;
                }
              };
              Scanner2.prototype.scanRegExpBody = function() {
                var ch = this.source[this.index];
                assert_1.assert(ch === "/", "Regular expression literal must start with a slash");
                var str = this.source[this.index++];
                var classMarker = false;
                var terminated = false;
                while (!this.eof()) {
                  ch = this.source[this.index++];
                  str += ch;
                  if (ch === "\\") {
                    ch = this.source[this.index++];
                    if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                      this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
                    }
                    str += ch;
                  } else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                    this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
                  } else if (classMarker) {
                    if (ch === "]") {
                      classMarker = false;
                    }
                  } else {
                    if (ch === "/") {
                      terminated = true;
                      break;
                    } else if (ch === "[") {
                      classMarker = true;
                    }
                  }
                }
                if (!terminated) {
                  this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
                }
                return str.substr(1, str.length - 2);
              };
              Scanner2.prototype.scanRegExpFlags = function() {
                var str = "";
                var flags = "";
                while (!this.eof()) {
                  var ch = this.source[this.index];
                  if (!character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
                    break;
                  }
                  ++this.index;
                  if (ch === "\\" && !this.eof()) {
                    ch = this.source[this.index];
                    if (ch === "u") {
                      ++this.index;
                      var restore = this.index;
                      var char = this.scanHexEscape("u");
                      if (char !== null) {
                        flags += char;
                        for (str += "\\u"; restore < this.index; ++restore) {
                          str += this.source[restore];
                        }
                      } else {
                        this.index = restore;
                        flags += "u";
                        str += "\\u";
                      }
                      this.tolerateUnexpectedToken();
                    } else {
                      str += "\\";
                      this.tolerateUnexpectedToken();
                    }
                  } else {
                    flags += ch;
                    str += ch;
                  }
                }
                return flags;
              };
              Scanner2.prototype.scanRegExp = function() {
                var start = this.index;
                var pattern = this.scanRegExpBody();
                var flags = this.scanRegExpFlags();
                var value = this.testRegExp(pattern, flags);
                return {
                  type: 9,
                  value: "",
                  pattern,
                  flags,
                  regex: value,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.lex = function() {
                if (this.eof()) {
                  return {
                    type: 2,
                    value: "",
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start: this.index,
                    end: this.index
                  };
                }
                var cp = this.source.charCodeAt(this.index);
                if (character_1.Character.isIdentifierStart(cp)) {
                  return this.scanIdentifier();
                }
                if (cp === 40 || cp === 41 || cp === 59) {
                  return this.scanPunctuator();
                }
                if (cp === 39 || cp === 34) {
                  return this.scanStringLiteral();
                }
                if (cp === 46) {
                  if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1))) {
                    return this.scanNumericLiteral();
                  }
                  return this.scanPunctuator();
                }
                if (character_1.Character.isDecimalDigit(cp)) {
                  return this.scanNumericLiteral();
                }
                if (cp === 96 || cp === 125 && this.curlyStack[this.curlyStack.length - 1] === "${") {
                  return this.scanTemplate();
                }
                if (cp >= 55296 && cp < 57343) {
                  if (character_1.Character.isIdentifierStart(this.codePointAt(this.index))) {
                    return this.scanIdentifier();
                  }
                }
                return this.scanPunctuator();
              };
              return Scanner2;
            }();
            exports3.Scanner = Scanner;
          },
          /* 13 */
          /***/
          function(module3, exports3) {
            "use strict";
            Object.defineProperty(exports3, "__esModule", { value: true });
            exports3.TokenName = {};
            exports3.TokenName[
              1
              /* BooleanLiteral */
            ] = "Boolean";
            exports3.TokenName[
              2
              /* EOF */
            ] = "<end>";
            exports3.TokenName[
              3
              /* Identifier */
            ] = "Identifier";
            exports3.TokenName[
              4
              /* Keyword */
            ] = "Keyword";
            exports3.TokenName[
              5
              /* NullLiteral */
            ] = "Null";
            exports3.TokenName[
              6
              /* NumericLiteral */
            ] = "Numeric";
            exports3.TokenName[
              7
              /* Punctuator */
            ] = "Punctuator";
            exports3.TokenName[
              8
              /* StringLiteral */
            ] = "String";
            exports3.TokenName[
              9
              /* RegularExpression */
            ] = "RegularExpression";
            exports3.TokenName[
              10
              /* Template */
            ] = "Template";
          },
          /* 14 */
          /***/
          function(module3, exports3) {
            "use strict";
            Object.defineProperty(exports3, "__esModule", { value: true });
            exports3.XHTMLEntities = {
              quot: '"',
              amp: "&",
              apos: "'",
              gt: ">",
              nbsp: "\xA0",
              iexcl: "\xA1",
              cent: "\xA2",
              pound: "\xA3",
              curren: "\xA4",
              yen: "\xA5",
              brvbar: "\xA6",
              sect: "\xA7",
              uml: "\xA8",
              copy: "\xA9",
              ordf: "\xAA",
              laquo: "\xAB",
              not: "\xAC",
              shy: "\xAD",
              reg: "\xAE",
              macr: "\xAF",
              deg: "\xB0",
              plusmn: "\xB1",
              sup2: "\xB2",
              sup3: "\xB3",
              acute: "\xB4",
              micro: "\xB5",
              para: "\xB6",
              middot: "\xB7",
              cedil: "\xB8",
              sup1: "\xB9",
              ordm: "\xBA",
              raquo: "\xBB",
              frac14: "\xBC",
              frac12: "\xBD",
              frac34: "\xBE",
              iquest: "\xBF",
              Agrave: "\xC0",
              Aacute: "\xC1",
              Acirc: "\xC2",
              Atilde: "\xC3",
              Auml: "\xC4",
              Aring: "\xC5",
              AElig: "\xC6",
              Ccedil: "\xC7",
              Egrave: "\xC8",
              Eacute: "\xC9",
              Ecirc: "\xCA",
              Euml: "\xCB",
              Igrave: "\xCC",
              Iacute: "\xCD",
              Icirc: "\xCE",
              Iuml: "\xCF",
              ETH: "\xD0",
              Ntilde: "\xD1",
              Ograve: "\xD2",
              Oacute: "\xD3",
              Ocirc: "\xD4",
              Otilde: "\xD5",
              Ouml: "\xD6",
              times: "\xD7",
              Oslash: "\xD8",
              Ugrave: "\xD9",
              Uacute: "\xDA",
              Ucirc: "\xDB",
              Uuml: "\xDC",
              Yacute: "\xDD",
              THORN: "\xDE",
              szlig: "\xDF",
              agrave: "\xE0",
              aacute: "\xE1",
              acirc: "\xE2",
              atilde: "\xE3",
              auml: "\xE4",
              aring: "\xE5",
              aelig: "\xE6",
              ccedil: "\xE7",
              egrave: "\xE8",
              eacute: "\xE9",
              ecirc: "\xEA",
              euml: "\xEB",
              igrave: "\xEC",
              iacute: "\xED",
              icirc: "\xEE",
              iuml: "\xEF",
              eth: "\xF0",
              ntilde: "\xF1",
              ograve: "\xF2",
              oacute: "\xF3",
              ocirc: "\xF4",
              otilde: "\xF5",
              ouml: "\xF6",
              divide: "\xF7",
              oslash: "\xF8",
              ugrave: "\xF9",
              uacute: "\xFA",
              ucirc: "\xFB",
              uuml: "\xFC",
              yacute: "\xFD",
              thorn: "\xFE",
              yuml: "\xFF",
              OElig: "\u0152",
              oelig: "\u0153",
              Scaron: "\u0160",
              scaron: "\u0161",
              Yuml: "\u0178",
              fnof: "\u0192",
              circ: "\u02C6",
              tilde: "\u02DC",
              Alpha: "\u0391",
              Beta: "\u0392",
              Gamma: "\u0393",
              Delta: "\u0394",
              Epsilon: "\u0395",
              Zeta: "\u0396",
              Eta: "\u0397",
              Theta: "\u0398",
              Iota: "\u0399",
              Kappa: "\u039A",
              Lambda: "\u039B",
              Mu: "\u039C",
              Nu: "\u039D",
              Xi: "\u039E",
              Omicron: "\u039F",
              Pi: "\u03A0",
              Rho: "\u03A1",
              Sigma: "\u03A3",
              Tau: "\u03A4",
              Upsilon: "\u03A5",
              Phi: "\u03A6",
              Chi: "\u03A7",
              Psi: "\u03A8",
              Omega: "\u03A9",
              alpha: "\u03B1",
              beta: "\u03B2",
              gamma: "\u03B3",
              delta: "\u03B4",
              epsilon: "\u03B5",
              zeta: "\u03B6",
              eta: "\u03B7",
              theta: "\u03B8",
              iota: "\u03B9",
              kappa: "\u03BA",
              lambda: "\u03BB",
              mu: "\u03BC",
              nu: "\u03BD",
              xi: "\u03BE",
              omicron: "\u03BF",
              pi: "\u03C0",
              rho: "\u03C1",
              sigmaf: "\u03C2",
              sigma: "\u03C3",
              tau: "\u03C4",
              upsilon: "\u03C5",
              phi: "\u03C6",
              chi: "\u03C7",
              psi: "\u03C8",
              omega: "\u03C9",
              thetasym: "\u03D1",
              upsih: "\u03D2",
              piv: "\u03D6",
              ensp: "\u2002",
              emsp: "\u2003",
              thinsp: "\u2009",
              zwnj: "\u200C",
              zwj: "\u200D",
              lrm: "\u200E",
              rlm: "\u200F",
              ndash: "\u2013",
              mdash: "\u2014",
              lsquo: "\u2018",
              rsquo: "\u2019",
              sbquo: "\u201A",
              ldquo: "\u201C",
              rdquo: "\u201D",
              bdquo: "\u201E",
              dagger: "\u2020",
              Dagger: "\u2021",
              bull: "\u2022",
              hellip: "\u2026",
              permil: "\u2030",
              prime: "\u2032",
              Prime: "\u2033",
              lsaquo: "\u2039",
              rsaquo: "\u203A",
              oline: "\u203E",
              frasl: "\u2044",
              euro: "\u20AC",
              image: "\u2111",
              weierp: "\u2118",
              real: "\u211C",
              trade: "\u2122",
              alefsym: "\u2135",
              larr: "\u2190",
              uarr: "\u2191",
              rarr: "\u2192",
              darr: "\u2193",
              harr: "\u2194",
              crarr: "\u21B5",
              lArr: "\u21D0",
              uArr: "\u21D1",
              rArr: "\u21D2",
              dArr: "\u21D3",
              hArr: "\u21D4",
              forall: "\u2200",
              part: "\u2202",
              exist: "\u2203",
              empty: "\u2205",
              nabla: "\u2207",
              isin: "\u2208",
              notin: "\u2209",
              ni: "\u220B",
              prod: "\u220F",
              sum: "\u2211",
              minus: "\u2212",
              lowast: "\u2217",
              radic: "\u221A",
              prop: "\u221D",
              infin: "\u221E",
              ang: "\u2220",
              and: "\u2227",
              or: "\u2228",
              cap: "\u2229",
              cup: "\u222A",
              int: "\u222B",
              there4: "\u2234",
              sim: "\u223C",
              cong: "\u2245",
              asymp: "\u2248",
              ne: "\u2260",
              equiv: "\u2261",
              le: "\u2264",
              ge: "\u2265",
              sub: "\u2282",
              sup: "\u2283",
              nsub: "\u2284",
              sube: "\u2286",
              supe: "\u2287",
              oplus: "\u2295",
              otimes: "\u2297",
              perp: "\u22A5",
              sdot: "\u22C5",
              lceil: "\u2308",
              rceil: "\u2309",
              lfloor: "\u230A",
              rfloor: "\u230B",
              loz: "\u25CA",
              spades: "\u2660",
              clubs: "\u2663",
              hearts: "\u2665",
              diams: "\u2666",
              lang: "\u27E8",
              rang: "\u27E9"
            };
          },
          /* 15 */
          /***/
          function(module3, exports3, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports3, "__esModule", { value: true });
            var error_handler_1 = __webpack_require__(10);
            var scanner_1 = __webpack_require__(12);
            var token_1 = __webpack_require__(13);
            var Reader = function() {
              function Reader2() {
                this.values = [];
                this.curly = this.paren = -1;
              }
              Reader2.prototype.beforeFunctionExpression = function(t) {
                return [
                  "(",
                  "{",
                  "[",
                  "in",
                  "typeof",
                  "instanceof",
                  "new",
                  "return",
                  "case",
                  "delete",
                  "throw",
                  "void",
                  // assignment operators
                  "=",
                  "+=",
                  "-=",
                  "*=",
                  "**=",
                  "/=",
                  "%=",
                  "<<=",
                  ">>=",
                  ">>>=",
                  "&=",
                  "|=",
                  "^=",
                  ",",
                  // binary/unary operators
                  "+",
                  "-",
                  "*",
                  "**",
                  "/",
                  "%",
                  "++",
                  "--",
                  "<<",
                  ">>",
                  ">>>",
                  "&",
                  "|",
                  "^",
                  "!",
                  "~",
                  "&&",
                  "||",
                  "?",
                  ":",
                  "===",
                  "==",
                  ">=",
                  "<=",
                  "<",
                  ">",
                  "!=",
                  "!=="
                ].indexOf(t) >= 0;
              };
              Reader2.prototype.isRegexStart = function() {
                var previous = this.values[this.values.length - 1];
                var regex = previous !== null;
                switch (previous) {
                  case "this":
                  case "]":
                    regex = false;
                    break;
                  case ")":
                    var keyword = this.values[this.paren - 1];
                    regex = keyword === "if" || keyword === "while" || keyword === "for" || keyword === "with";
                    break;
                  case "}":
                    regex = false;
                    if (this.values[this.curly - 3] === "function") {
                      var check = this.values[this.curly - 4];
                      regex = check ? !this.beforeFunctionExpression(check) : false;
                    } else if (this.values[this.curly - 4] === "function") {
                      var check = this.values[this.curly - 5];
                      regex = check ? !this.beforeFunctionExpression(check) : true;
                    }
                    break;
                  default:
                    break;
                }
                return regex;
              };
              Reader2.prototype.push = function(token) {
                if (token.type === 7 || token.type === 4) {
                  if (token.value === "{") {
                    this.curly = this.values.length;
                  } else if (token.value === "(") {
                    this.paren = this.values.length;
                  }
                  this.values.push(token.value);
                } else {
                  this.values.push(null);
                }
              };
              return Reader2;
            }();
            var Tokenizer = function() {
              function Tokenizer2(code, config) {
                this.errorHandler = new error_handler_1.ErrorHandler();
                this.errorHandler.tolerant = config ? typeof config.tolerant === "boolean" && config.tolerant : false;
                this.scanner = new scanner_1.Scanner(code, this.errorHandler);
                this.scanner.trackComment = config ? typeof config.comment === "boolean" && config.comment : false;
                this.trackRange = config ? typeof config.range === "boolean" && config.range : false;
                this.trackLoc = config ? typeof config.loc === "boolean" && config.loc : false;
                this.buffer = [];
                this.reader = new Reader();
              }
              Tokenizer2.prototype.errors = function() {
                return this.errorHandler.errors;
              };
              Tokenizer2.prototype.getNextToken = function() {
                if (this.buffer.length === 0) {
                  var comments = this.scanner.scanComments();
                  if (this.scanner.trackComment) {
                    for (var i = 0; i < comments.length; ++i) {
                      var e = comments[i];
                      var value = this.scanner.source.slice(e.slice[0], e.slice[1]);
                      var comment = {
                        type: e.multiLine ? "BlockComment" : "LineComment",
                        value
                      };
                      if (this.trackRange) {
                        comment.range = e.range;
                      }
                      if (this.trackLoc) {
                        comment.loc = e.loc;
                      }
                      this.buffer.push(comment);
                    }
                  }
                  if (!this.scanner.eof()) {
                    var loc = void 0;
                    if (this.trackLoc) {
                      loc = {
                        start: {
                          line: this.scanner.lineNumber,
                          column: this.scanner.index - this.scanner.lineStart
                        },
                        end: {}
                      };
                    }
                    var startRegex = this.scanner.source[this.scanner.index] === "/" && this.reader.isRegexStart();
                    var token = startRegex ? this.scanner.scanRegExp() : this.scanner.lex();
                    this.reader.push(token);
                    var entry = {
                      type: token_1.TokenName[token.type],
                      value: this.scanner.source.slice(token.start, token.end)
                    };
                    if (this.trackRange) {
                      entry.range = [token.start, token.end];
                    }
                    if (this.trackLoc) {
                      loc.end = {
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart
                      };
                      entry.loc = loc;
                    }
                    if (token.type === 9) {
                      var pattern = token.pattern;
                      var flags = token.flags;
                      entry.regex = { pattern, flags };
                    }
                    this.buffer.push(entry);
                  }
                }
                return this.buffer.shift();
              };
              return Tokenizer2;
            }();
            exports3.Tokenizer = Tokenizer;
          }
          /******/
        ])
      );
    });
  }
});

// node_modules/.pnpm/recast@0.23.11/node_modules/recast/parsers/esprima.js
var require_esprima3 = __commonJS({
  "node_modules/.pnpm/recast@0.23.11/node_modules/recast/parsers/esprima.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parse = void 0;
    var util_1 = require_util2();
    function parse2(source, options) {
      var comments = [];
      var ast = require_esprima2().parse(source, {
        loc: true,
        locations: true,
        comment: true,
        onComment: comments,
        range: (0, util_1.getOption)(options, "range", false),
        tolerant: (0, util_1.getOption)(options, "tolerant", true),
        tokens: true,
        jsx: (0, util_1.getOption)(options, "jsx", false),
        sourceType: (0, util_1.getOption)(options, "sourceType", "module")
      });
      if (!Array.isArray(ast.comments)) {
        ast.comments = comments;
      }
      return ast;
    }
    exports2.parse = parse2;
  }
});

// node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/options.js
var require_options = __commonJS({
  "node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/options.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.normalize = void 0;
    var util_1 = require_util2();
    var defaults = {
      parser: require_esprima3(),
      tabWidth: 4,
      useTabs: false,
      reuseWhitespace: true,
      lineTerminator: (0, util_1.getLineTerminator)(),
      wrapColumn: 74,
      sourceFileName: null,
      sourceMapName: null,
      sourceRoot: null,
      inputSourceMap: null,
      range: false,
      tolerant: true,
      quote: null,
      trailingComma: false,
      arrayBracketSpacing: false,
      objectCurlySpacing: true,
      arrowParensAlways: false,
      flowObjectCommas: true,
      tokens: true
    };
    var hasOwn = defaults.hasOwnProperty;
    function normalize(opts) {
      var options = opts || defaults;
      function get(key) {
        return hasOwn.call(options, key) ? options[key] : defaults[key];
      }
      return {
        tabWidth: +get("tabWidth"),
        useTabs: !!get("useTabs"),
        reuseWhitespace: !!get("reuseWhitespace"),
        lineTerminator: get("lineTerminator"),
        wrapColumn: Math.max(get("wrapColumn"), 0),
        sourceFileName: get("sourceFileName"),
        sourceMapName: get("sourceMapName"),
        sourceRoot: get("sourceRoot"),
        inputSourceMap: get("inputSourceMap"),
        parser: get("esprima") || get("parser"),
        range: get("range"),
        tolerant: get("tolerant"),
        quote: get("quote"),
        trailingComma: get("trailingComma"),
        arrayBracketSpacing: get("arrayBracketSpacing"),
        objectCurlySpacing: get("objectCurlySpacing"),
        arrowParensAlways: get("arrowParensAlways"),
        flowObjectCommas: get("flowObjectCommas"),
        tokens: !!get("tokens")
      };
    }
    exports2.normalize = normalize;
  }
});

// node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/mapping.js
var require_mapping = __commonJS({
  "node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/mapping.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var tiny_invariant_1 = tslib_1.__importDefault(require_tiny_invariant_cjs());
    var util_1 = require_util2();
    var Mapping = (
      /** @class */
      function() {
        function Mapping2(sourceLines, sourceLoc, targetLoc) {
          if (targetLoc === void 0) {
            targetLoc = sourceLoc;
          }
          this.sourceLines = sourceLines;
          this.sourceLoc = sourceLoc;
          this.targetLoc = targetLoc;
        }
        Mapping2.prototype.slice = function(lines, start, end) {
          if (end === void 0) {
            end = lines.lastPos();
          }
          var sourceLines = this.sourceLines;
          var sourceLoc = this.sourceLoc;
          var targetLoc = this.targetLoc;
          function skip(name) {
            var sourceFromPos = sourceLoc[name];
            var targetFromPos = targetLoc[name];
            var targetToPos = start;
            if (name === "end") {
              targetToPos = end;
            } else {
              (0, tiny_invariant_1.default)(name === "start");
            }
            return skipChars(sourceLines, sourceFromPos, lines, targetFromPos, targetToPos);
          }
          if ((0, util_1.comparePos)(start, targetLoc.start) <= 0) {
            if ((0, util_1.comparePos)(targetLoc.end, end) <= 0) {
              targetLoc = {
                start: subtractPos(targetLoc.start, start.line, start.column),
                end: subtractPos(targetLoc.end, start.line, start.column)
              };
            } else if ((0, util_1.comparePos)(end, targetLoc.start) <= 0) {
              return null;
            } else {
              sourceLoc = {
                start: sourceLoc.start,
                end: skip("end")
              };
              targetLoc = {
                start: subtractPos(targetLoc.start, start.line, start.column),
                end: subtractPos(end, start.line, start.column)
              };
            }
          } else {
            if ((0, util_1.comparePos)(targetLoc.end, start) <= 0) {
              return null;
            }
            if ((0, util_1.comparePos)(targetLoc.end, end) <= 0) {
              sourceLoc = {
                start: skip("start"),
                end: sourceLoc.end
              };
              targetLoc = {
                // Same as subtractPos(start, start.line, start.column):
                start: { line: 1, column: 0 },
                end: subtractPos(targetLoc.end, start.line, start.column)
              };
            } else {
              sourceLoc = {
                start: skip("start"),
                end: skip("end")
              };
              targetLoc = {
                // Same as subtractPos(start, start.line, start.column):
                start: { line: 1, column: 0 },
                end: subtractPos(end, start.line, start.column)
              };
            }
          }
          return new Mapping2(this.sourceLines, sourceLoc, targetLoc);
        };
        Mapping2.prototype.add = function(line, column) {
          return new Mapping2(this.sourceLines, this.sourceLoc, {
            start: addPos(this.targetLoc.start, line, column),
            end: addPos(this.targetLoc.end, line, column)
          });
        };
        Mapping2.prototype.subtract = function(line, column) {
          return new Mapping2(this.sourceLines, this.sourceLoc, {
            start: subtractPos(this.targetLoc.start, line, column),
            end: subtractPos(this.targetLoc.end, line, column)
          });
        };
        Mapping2.prototype.indent = function(by, skipFirstLine, noNegativeColumns) {
          if (skipFirstLine === void 0) {
            skipFirstLine = false;
          }
          if (noNegativeColumns === void 0) {
            noNegativeColumns = false;
          }
          if (by === 0) {
            return this;
          }
          var targetLoc = this.targetLoc;
          var startLine = targetLoc.start.line;
          var endLine = targetLoc.end.line;
          if (skipFirstLine && startLine === 1 && endLine === 1) {
            return this;
          }
          targetLoc = {
            start: targetLoc.start,
            end: targetLoc.end
          };
          if (!skipFirstLine || startLine > 1) {
            var startColumn = targetLoc.start.column + by;
            targetLoc.start = {
              line: startLine,
              column: noNegativeColumns ? Math.max(0, startColumn) : startColumn
            };
          }
          if (!skipFirstLine || endLine > 1) {
            var endColumn = targetLoc.end.column + by;
            targetLoc.end = {
              line: endLine,
              column: noNegativeColumns ? Math.max(0, endColumn) : endColumn
            };
          }
          return new Mapping2(this.sourceLines, this.sourceLoc, targetLoc);
        };
        return Mapping2;
      }()
    );
    exports2.default = Mapping;
    function addPos(toPos, line, column) {
      return {
        line: toPos.line + line - 1,
        column: toPos.line === 1 ? toPos.column + column : toPos.column
      };
    }
    function subtractPos(fromPos, line, column) {
      return {
        line: fromPos.line - line + 1,
        column: fromPos.line === line ? fromPos.column - column : fromPos.column
      };
    }
    function skipChars(sourceLines, sourceFromPos, targetLines, targetFromPos, targetToPos) {
      var targetComparison = (0, util_1.comparePos)(targetFromPos, targetToPos);
      if (targetComparison === 0) {
        return sourceFromPos;
      }
      var sourceCursor, targetCursor;
      if (targetComparison < 0) {
        sourceCursor = sourceLines.skipSpaces(sourceFromPos) || sourceLines.lastPos();
        targetCursor = targetLines.skipSpaces(targetFromPos) || targetLines.lastPos();
        var lineDiff = targetToPos.line - targetCursor.line;
        sourceCursor.line += lineDiff;
        targetCursor.line += lineDiff;
        if (lineDiff > 0) {
          sourceCursor.column = 0;
          targetCursor.column = 0;
        } else {
          (0, tiny_invariant_1.default)(lineDiff === 0);
        }
        while ((0, util_1.comparePos)(targetCursor, targetToPos) < 0 && targetLines.nextPos(targetCursor, true)) {
          (0, tiny_invariant_1.default)(sourceLines.nextPos(sourceCursor, true));
          (0, tiny_invariant_1.default)(sourceLines.charAt(sourceCursor) === targetLines.charAt(targetCursor));
        }
      } else {
        sourceCursor = sourceLines.skipSpaces(sourceFromPos, true) || sourceLines.firstPos();
        targetCursor = targetLines.skipSpaces(targetFromPos, true) || targetLines.firstPos();
        var lineDiff = targetToPos.line - targetCursor.line;
        sourceCursor.line += lineDiff;
        targetCursor.line += lineDiff;
        if (lineDiff < 0) {
          sourceCursor.column = sourceLines.getLineLength(sourceCursor.line);
          targetCursor.column = targetLines.getLineLength(targetCursor.line);
        } else {
          (0, tiny_invariant_1.default)(lineDiff === 0);
        }
        while ((0, util_1.comparePos)(targetToPos, targetCursor) < 0 && targetLines.prevPos(targetCursor, true)) {
          (0, tiny_invariant_1.default)(sourceLines.prevPos(sourceCursor, true));
          (0, tiny_invariant_1.default)(sourceLines.charAt(sourceCursor) === targetLines.charAt(targetCursor));
        }
      }
      return sourceCursor;
    }
  }
});

// node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/lines.js
var require_lines = __commonJS({
  "node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/lines.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.concat = exports2.fromString = exports2.countSpaces = exports2.Lines = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var tiny_invariant_1 = tslib_1.__importDefault(require_tiny_invariant_cjs());
    var source_map_1 = tslib_1.__importDefault(require_source_map());
    var options_1 = require_options();
    var util_1 = require_util2();
    var mapping_1 = tslib_1.__importDefault(require_mapping());
    var Lines = (
      /** @class */
      function() {
        function Lines2(infos, sourceFileName) {
          if (sourceFileName === void 0) {
            sourceFileName = null;
          }
          this.infos = infos;
          this.mappings = [];
          this.cachedSourceMap = null;
          this.cachedTabWidth = void 0;
          (0, tiny_invariant_1.default)(infos.length > 0);
          this.length = infos.length;
          this.name = sourceFileName || null;
          if (this.name) {
            this.mappings.push(new mapping_1.default(this, {
              start: this.firstPos(),
              end: this.lastPos()
            }));
          }
        }
        Lines2.prototype.toString = function(options) {
          return this.sliceString(this.firstPos(), this.lastPos(), options);
        };
        Lines2.prototype.getSourceMap = function(sourceMapName, sourceRoot) {
          if (!sourceMapName) {
            return null;
          }
          var targetLines = this;
          function updateJSON(json) {
            json = json || {};
            json.file = sourceMapName;
            if (sourceRoot) {
              json.sourceRoot = sourceRoot;
            }
            return json;
          }
          if (targetLines.cachedSourceMap) {
            return updateJSON(targetLines.cachedSourceMap.toJSON());
          }
          var smg = new source_map_1.default.SourceMapGenerator(updateJSON());
          var sourcesToContents = {};
          targetLines.mappings.forEach(function(mapping) {
            var sourceCursor = mapping.sourceLines.skipSpaces(mapping.sourceLoc.start) || mapping.sourceLines.lastPos();
            var targetCursor = targetLines.skipSpaces(mapping.targetLoc.start) || targetLines.lastPos();
            while ((0, util_1.comparePos)(sourceCursor, mapping.sourceLoc.end) < 0 && (0, util_1.comparePos)(targetCursor, mapping.targetLoc.end) < 0) {
              var sourceChar = mapping.sourceLines.charAt(sourceCursor);
              var targetChar = targetLines.charAt(targetCursor);
              (0, tiny_invariant_1.default)(sourceChar === targetChar);
              var sourceName = mapping.sourceLines.name;
              smg.addMapping({
                source: sourceName,
                original: { line: sourceCursor.line, column: sourceCursor.column },
                generated: { line: targetCursor.line, column: targetCursor.column }
              });
              if (!hasOwn.call(sourcesToContents, sourceName)) {
                var sourceContent = mapping.sourceLines.toString();
                smg.setSourceContent(sourceName, sourceContent);
                sourcesToContents[sourceName] = sourceContent;
              }
              targetLines.nextPos(targetCursor, true);
              mapping.sourceLines.nextPos(sourceCursor, true);
            }
          });
          targetLines.cachedSourceMap = smg;
          return smg.toJSON();
        };
        Lines2.prototype.bootstrapCharAt = function(pos) {
          (0, tiny_invariant_1.default)(typeof pos === "object");
          (0, tiny_invariant_1.default)(typeof pos.line === "number");
          (0, tiny_invariant_1.default)(typeof pos.column === "number");
          var line = pos.line, column = pos.column, strings = this.toString().split(lineTerminatorSeqExp), string = strings[line - 1];
          if (typeof string === "undefined")
            return "";
          if (column === string.length && line < strings.length)
            return "\n";
          if (column >= string.length)
            return "";
          return string.charAt(column);
        };
        Lines2.prototype.charAt = function(pos) {
          (0, tiny_invariant_1.default)(typeof pos === "object");
          (0, tiny_invariant_1.default)(typeof pos.line === "number");
          (0, tiny_invariant_1.default)(typeof pos.column === "number");
          var line = pos.line, column = pos.column, secret = this, infos = secret.infos, info = infos[line - 1], c = column;
          if (typeof info === "undefined" || c < 0)
            return "";
          var indent = this.getIndentAt(line);
          if (c < indent)
            return " ";
          c += info.sliceStart - indent;
          if (c === info.sliceEnd && line < this.length)
            return "\n";
          if (c >= info.sliceEnd)
            return "";
          return info.line.charAt(c);
        };
        Lines2.prototype.stripMargin = function(width, skipFirstLine) {
          if (width === 0)
            return this;
          (0, tiny_invariant_1.default)(width > 0, "negative margin: " + width);
          if (skipFirstLine && this.length === 1)
            return this;
          var lines = new Lines2(this.infos.map(function(info, i) {
            if (info.line && (i > 0 || !skipFirstLine)) {
              info = tslib_1.__assign(tslib_1.__assign({}, info), { indent: Math.max(0, info.indent - width) });
            }
            return info;
          }));
          if (this.mappings.length > 0) {
            var newMappings_1 = lines.mappings;
            (0, tiny_invariant_1.default)(newMappings_1.length === 0);
            this.mappings.forEach(function(mapping) {
              newMappings_1.push(mapping.indent(width, skipFirstLine, true));
            });
          }
          return lines;
        };
        Lines2.prototype.indent = function(by) {
          if (by === 0) {
            return this;
          }
          var lines = new Lines2(this.infos.map(function(info) {
            if (info.line && !info.locked) {
              info = tslib_1.__assign(tslib_1.__assign({}, info), { indent: info.indent + by });
            }
            return info;
          }));
          if (this.mappings.length > 0) {
            var newMappings_2 = lines.mappings;
            (0, tiny_invariant_1.default)(newMappings_2.length === 0);
            this.mappings.forEach(function(mapping) {
              newMappings_2.push(mapping.indent(by));
            });
          }
          return lines;
        };
        Lines2.prototype.indentTail = function(by) {
          if (by === 0) {
            return this;
          }
          if (this.length < 2) {
            return this;
          }
          var lines = new Lines2(this.infos.map(function(info, i) {
            if (i > 0 && info.line && !info.locked) {
              info = tslib_1.__assign(tslib_1.__assign({}, info), { indent: info.indent + by });
            }
            return info;
          }));
          if (this.mappings.length > 0) {
            var newMappings_3 = lines.mappings;
            (0, tiny_invariant_1.default)(newMappings_3.length === 0);
            this.mappings.forEach(function(mapping) {
              newMappings_3.push(mapping.indent(by, true));
            });
          }
          return lines;
        };
        Lines2.prototype.lockIndentTail = function() {
          if (this.length < 2) {
            return this;
          }
          return new Lines2(this.infos.map(function(info, i) {
            return tslib_1.__assign(tslib_1.__assign({}, info), { locked: i > 0 });
          }));
        };
        Lines2.prototype.getIndentAt = function(line) {
          (0, tiny_invariant_1.default)(line >= 1, "no line " + line + " (line numbers start from 1)");
          return Math.max(this.infos[line - 1].indent, 0);
        };
        Lines2.prototype.guessTabWidth = function() {
          if (typeof this.cachedTabWidth === "number") {
            return this.cachedTabWidth;
          }
          var counts = [];
          var lastIndent = 0;
          for (var line = 1, last = this.length; line <= last; ++line) {
            var info = this.infos[line - 1];
            var sliced = info.line.slice(info.sliceStart, info.sliceEnd);
            if (isOnlyWhitespace(sliced)) {
              continue;
            }
            var diff = Math.abs(info.indent - lastIndent);
            counts[diff] = ~~counts[diff] + 1;
            lastIndent = info.indent;
          }
          var maxCount = -1;
          var result = 2;
          for (var tabWidth = 1; tabWidth < counts.length; tabWidth += 1) {
            if (hasOwn.call(counts, tabWidth) && counts[tabWidth] > maxCount) {
              maxCount = counts[tabWidth];
              result = tabWidth;
            }
          }
          return this.cachedTabWidth = result;
        };
        Lines2.prototype.startsWithComment = function() {
          if (this.infos.length === 0) {
            return false;
          }
          var firstLineInfo = this.infos[0], sliceStart = firstLineInfo.sliceStart, sliceEnd = firstLineInfo.sliceEnd, firstLine = firstLineInfo.line.slice(sliceStart, sliceEnd).trim();
          return firstLine.length === 0 || firstLine.slice(0, 2) === "//" || firstLine.slice(0, 2) === "/*";
        };
        Lines2.prototype.isOnlyWhitespace = function() {
          return isOnlyWhitespace(this.toString());
        };
        Lines2.prototype.isPrecededOnlyByWhitespace = function(pos) {
          var info = this.infos[pos.line - 1];
          var indent = Math.max(info.indent, 0);
          var diff = pos.column - indent;
          if (diff <= 0) {
            return true;
          }
          var start = info.sliceStart;
          var end = Math.min(start + diff, info.sliceEnd);
          var prefix = info.line.slice(start, end);
          return isOnlyWhitespace(prefix);
        };
        Lines2.prototype.getLineLength = function(line) {
          var info = this.infos[line - 1];
          return this.getIndentAt(line) + info.sliceEnd - info.sliceStart;
        };
        Lines2.prototype.nextPos = function(pos, skipSpaces) {
          if (skipSpaces === void 0) {
            skipSpaces = false;
          }
          var l = Math.max(pos.line, 0), c = Math.max(pos.column, 0);
          if (c < this.getLineLength(l)) {
            pos.column += 1;
            return skipSpaces ? !!this.skipSpaces(pos, false, true) : true;
          }
          if (l < this.length) {
            pos.line += 1;
            pos.column = 0;
            return skipSpaces ? !!this.skipSpaces(pos, false, true) : true;
          }
          return false;
        };
        Lines2.prototype.prevPos = function(pos, skipSpaces) {
          if (skipSpaces === void 0) {
            skipSpaces = false;
          }
          var l = pos.line, c = pos.column;
          if (c < 1) {
            l -= 1;
            if (l < 1)
              return false;
            c = this.getLineLength(l);
          } else {
            c = Math.min(c - 1, this.getLineLength(l));
          }
          pos.line = l;
          pos.column = c;
          return skipSpaces ? !!this.skipSpaces(pos, true, true) : true;
        };
        Lines2.prototype.firstPos = function() {
          return { line: 1, column: 0 };
        };
        Lines2.prototype.lastPos = function() {
          return {
            line: this.length,
            column: this.getLineLength(this.length)
          };
        };
        Lines2.prototype.skipSpaces = function(pos, backward, modifyInPlace) {
          if (backward === void 0) {
            backward = false;
          }
          if (modifyInPlace === void 0) {
            modifyInPlace = false;
          }
          if (pos) {
            pos = modifyInPlace ? pos : {
              line: pos.line,
              column: pos.column
            };
          } else if (backward) {
            pos = this.lastPos();
          } else {
            pos = this.firstPos();
          }
          if (backward) {
            while (this.prevPos(pos)) {
              if (!isOnlyWhitespace(this.charAt(pos)) && this.nextPos(pos)) {
                return pos;
              }
            }
            return null;
          } else {
            while (isOnlyWhitespace(this.charAt(pos))) {
              if (!this.nextPos(pos)) {
                return null;
              }
            }
            return pos;
          }
        };
        Lines2.prototype.trimLeft = function() {
          var pos = this.skipSpaces(this.firstPos(), false, true);
          return pos ? this.slice(pos) : emptyLines;
        };
        Lines2.prototype.trimRight = function() {
          var pos = this.skipSpaces(this.lastPos(), true, true);
          return pos ? this.slice(this.firstPos(), pos) : emptyLines;
        };
        Lines2.prototype.trim = function() {
          var start = this.skipSpaces(this.firstPos(), false, true);
          if (start === null) {
            return emptyLines;
          }
          var end = this.skipSpaces(this.lastPos(), true, true);
          if (end === null) {
            return emptyLines;
          }
          return this.slice(start, end);
        };
        Lines2.prototype.eachPos = function(callback, startPos, skipSpaces) {
          if (startPos === void 0) {
            startPos = this.firstPos();
          }
          if (skipSpaces === void 0) {
            skipSpaces = false;
          }
          var pos = this.firstPos();
          if (startPos) {
            pos.line = startPos.line, pos.column = startPos.column;
          }
          if (skipSpaces && !this.skipSpaces(pos, false, true)) {
            return;
          }
          do
            callback.call(this, pos);
          while (this.nextPos(pos, skipSpaces));
        };
        Lines2.prototype.bootstrapSlice = function(start, end) {
          var strings = this.toString().split(lineTerminatorSeqExp).slice(start.line - 1, end.line);
          if (strings.length > 0) {
            strings.push(strings.pop().slice(0, end.column));
            strings[0] = strings[0].slice(start.column);
          }
          return fromString(strings.join("\n"));
        };
        Lines2.prototype.slice = function(start, end) {
          if (!end) {
            if (!start) {
              return this;
            }
            end = this.lastPos();
          }
          if (!start) {
            throw new Error("cannot slice with end but not start");
          }
          var sliced = this.infos.slice(start.line - 1, end.line);
          if (start.line === end.line) {
            sliced[0] = sliceInfo(sliced[0], start.column, end.column);
          } else {
            (0, tiny_invariant_1.default)(start.line < end.line);
            sliced[0] = sliceInfo(sliced[0], start.column);
            sliced.push(sliceInfo(sliced.pop(), 0, end.column));
          }
          var lines = new Lines2(sliced);
          if (this.mappings.length > 0) {
            var newMappings_4 = lines.mappings;
            (0, tiny_invariant_1.default)(newMappings_4.length === 0);
            this.mappings.forEach(function(mapping) {
              var sliced2 = mapping.slice(this, start, end);
              if (sliced2) {
                newMappings_4.push(sliced2);
              }
            }, this);
          }
          return lines;
        };
        Lines2.prototype.bootstrapSliceString = function(start, end, options) {
          return this.slice(start, end).toString(options);
        };
        Lines2.prototype.sliceString = function(start, end, options) {
          if (start === void 0) {
            start = this.firstPos();
          }
          if (end === void 0) {
            end = this.lastPos();
          }
          var _a = (0, options_1.normalize)(options), tabWidth = _a.tabWidth, useTabs = _a.useTabs, reuseWhitespace = _a.reuseWhitespace, lineTerminator = _a.lineTerminator;
          var parts = [];
          for (var line = start.line; line <= end.line; ++line) {
            var info = this.infos[line - 1];
            if (line === start.line) {
              if (line === end.line) {
                info = sliceInfo(info, start.column, end.column);
              } else {
                info = sliceInfo(info, start.column);
              }
            } else if (line === end.line) {
              info = sliceInfo(info, 0, end.column);
            }
            var indent = Math.max(info.indent, 0);
            var before_1 = info.line.slice(0, info.sliceStart);
            if (reuseWhitespace && isOnlyWhitespace(before_1) && countSpaces(before_1, tabWidth) === indent) {
              parts.push(info.line.slice(0, info.sliceEnd));
              continue;
            }
            var tabs = 0;
            var spaces = indent;
            if (useTabs) {
              tabs = Math.floor(indent / tabWidth);
              spaces -= tabs * tabWidth;
            }
            var result = "";
            if (tabs > 0) {
              result += new Array(tabs + 1).join("	");
            }
            if (spaces > 0) {
              result += new Array(spaces + 1).join(" ");
            }
            result += info.line.slice(info.sliceStart, info.sliceEnd);
            parts.push(result);
          }
          return parts.join(lineTerminator);
        };
        Lines2.prototype.isEmpty = function() {
          return this.length < 2 && this.getLineLength(1) < 1;
        };
        Lines2.prototype.join = function(elements) {
          var separator = this;
          var infos = [];
          var mappings = [];
          var prevInfo;
          function appendLines(linesOrNull) {
            if (linesOrNull === null) {
              return;
            }
            if (prevInfo) {
              var info = linesOrNull.infos[0];
              var indent = new Array(info.indent + 1).join(" ");
              var prevLine_1 = infos.length;
              var prevColumn_1 = Math.max(prevInfo.indent, 0) + prevInfo.sliceEnd - prevInfo.sliceStart;
              prevInfo.line = prevInfo.line.slice(0, prevInfo.sliceEnd) + indent + info.line.slice(info.sliceStart, info.sliceEnd);
              prevInfo.locked = prevInfo.locked || info.locked;
              prevInfo.sliceEnd = prevInfo.line.length;
              if (linesOrNull.mappings.length > 0) {
                linesOrNull.mappings.forEach(function(mapping) {
                  mappings.push(mapping.add(prevLine_1, prevColumn_1));
                });
              }
            } else if (linesOrNull.mappings.length > 0) {
              mappings.push.apply(mappings, linesOrNull.mappings);
            }
            linesOrNull.infos.forEach(function(info2, i) {
              if (!prevInfo || i > 0) {
                prevInfo = tslib_1.__assign({}, info2);
                infos.push(prevInfo);
              }
            });
          }
          function appendWithSeparator(linesOrNull, i) {
            if (i > 0)
              appendLines(separator);
            appendLines(linesOrNull);
          }
          elements.map(function(elem) {
            var lines2 = fromString(elem);
            if (lines2.isEmpty())
              return null;
            return lines2;
          }).forEach(function(linesOrNull, i) {
            if (separator.isEmpty()) {
              appendLines(linesOrNull);
            } else {
              appendWithSeparator(linesOrNull, i);
            }
          });
          if (infos.length < 1)
            return emptyLines;
          var lines = new Lines2(infos);
          lines.mappings = mappings;
          return lines;
        };
        Lines2.prototype.concat = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var list = [this];
          list.push.apply(list, args);
          (0, tiny_invariant_1.default)(list.length === args.length + 1);
          return emptyLines.join(list);
        };
        return Lines2;
      }()
    );
    exports2.Lines = Lines;
    var fromStringCache = {};
    var hasOwn = fromStringCache.hasOwnProperty;
    var maxCacheKeyLen = 10;
    function countSpaces(spaces, tabWidth) {
      var count = 0;
      var len = spaces.length;
      for (var i = 0; i < len; ++i) {
        switch (spaces.charCodeAt(i)) {
          case 9: {
            (0, tiny_invariant_1.default)(typeof tabWidth === "number");
            (0, tiny_invariant_1.default)(tabWidth > 0);
            var next = Math.ceil(count / tabWidth) * tabWidth;
            if (next === count) {
              count += tabWidth;
            } else {
              count = next;
            }
            break;
          }
          case 11:
          // '\v'
          case 12:
          // '\f'
          case 13:
          // '\r'
          case 65279:
            break;
          case 32:
          // ' '
          default:
            count += 1;
            break;
        }
      }
      return count;
    }
    exports2.countSpaces = countSpaces;
    var leadingSpaceExp = /^\s*/;
    var lineTerminatorSeqExp = /\u000D\u000A|\u000D(?!\u000A)|\u000A|\u2028|\u2029/;
    function fromString(string, options) {
      if (string instanceof Lines)
        return string;
      string += "";
      var tabWidth = options && options.tabWidth;
      var tabless = string.indexOf("	") < 0;
      var cacheable = !options && tabless && string.length <= maxCacheKeyLen;
      (0, tiny_invariant_1.default)(tabWidth || tabless, "No tab width specified but encountered tabs in string\n" + string);
      if (cacheable && hasOwn.call(fromStringCache, string))
        return fromStringCache[string];
      var lines = new Lines(string.split(lineTerminatorSeqExp).map(function(line) {
        var spaces = leadingSpaceExp.exec(line)[0];
        return {
          line,
          indent: countSpaces(spaces, tabWidth),
          // Boolean indicating whether this line can be reindented.
          locked: false,
          sliceStart: spaces.length,
          sliceEnd: line.length
        };
      }), (0, options_1.normalize)(options).sourceFileName);
      if (cacheable)
        fromStringCache[string] = lines;
      return lines;
    }
    exports2.fromString = fromString;
    function isOnlyWhitespace(string) {
      return !/\S/.test(string);
    }
    function sliceInfo(info, startCol, endCol) {
      var sliceStart = info.sliceStart;
      var sliceEnd = info.sliceEnd;
      var indent = Math.max(info.indent, 0);
      var lineLength = indent + sliceEnd - sliceStart;
      if (typeof endCol === "undefined") {
        endCol = lineLength;
      }
      startCol = Math.max(startCol, 0);
      endCol = Math.min(endCol, lineLength);
      endCol = Math.max(endCol, startCol);
      if (endCol < indent) {
        indent = endCol;
        sliceEnd = sliceStart;
      } else {
        sliceEnd -= lineLength - endCol;
      }
      lineLength = endCol;
      lineLength -= startCol;
      if (startCol < indent) {
        indent -= startCol;
      } else {
        startCol -= indent;
        indent = 0;
        sliceStart += startCol;
      }
      (0, tiny_invariant_1.default)(indent >= 0);
      (0, tiny_invariant_1.default)(sliceStart <= sliceEnd);
      (0, tiny_invariant_1.default)(lineLength === indent + sliceEnd - sliceStart);
      if (info.indent === indent && info.sliceStart === sliceStart && info.sliceEnd === sliceEnd) {
        return info;
      }
      return {
        line: info.line,
        indent,
        // A destructive slice always unlocks indentation.
        locked: false,
        sliceStart,
        sliceEnd
      };
    }
    function concat(elements) {
      return emptyLines.join(elements);
    }
    exports2.concat = concat;
    var emptyLines = fromString("");
  }
});

// node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/comments.js
var require_comments = __commonJS({
  "node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/comments.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.printComments = exports2.attach = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var tiny_invariant_1 = tslib_1.__importDefault(require_tiny_invariant_cjs());
    var types2 = tslib_1.__importStar(require_main());
    var n = types2.namedTypes;
    var isArray = types2.builtInTypes.array;
    var isObject = types2.builtInTypes.object;
    var lines_1 = require_lines();
    var util_1 = require_util2();
    var childNodesCache = /* @__PURE__ */ new WeakMap();
    function getSortedChildNodes(node, lines, resultArray) {
      if (!node) {
        return resultArray;
      }
      (0, util_1.fixFaultyLocations)(node, lines);
      if (resultArray) {
        if (n.Node.check(node) && n.SourceLocation.check(node.loc)) {
          var i = resultArray.length - 1;
          for (; i >= 0; --i) {
            var child = resultArray[i];
            if (child && child.loc && (0, util_1.comparePos)(child.loc.end, node.loc.start) <= 0) {
              break;
            }
          }
          resultArray.splice(i + 1, 0, node);
          return resultArray;
        }
      } else {
        var childNodes = childNodesCache.get(node);
        if (childNodes) {
          return childNodes;
        }
      }
      var names;
      if (isArray.check(node)) {
        names = Object.keys(node);
      } else if (isObject.check(node)) {
        names = types2.getFieldNames(node);
      } else {
        return resultArray;
      }
      if (!resultArray) {
        childNodesCache.set(node, resultArray = []);
      }
      for (var i = 0, nameCount = names.length; i < nameCount; ++i) {
        getSortedChildNodes(node[names[i]], lines, resultArray);
      }
      return resultArray;
    }
    function decorateComment(node, comment, lines) {
      var childNodes = getSortedChildNodes(node, lines);
      var left = 0;
      var right = childNodes && childNodes.length;
      var precedingNode;
      var followingNode;
      while (typeof right === "number" && left < right) {
        var middle = left + right >> 1;
        var child = childNodes[middle];
        if ((0, util_1.comparePos)(child.loc.start, comment.loc.start) <= 0 && (0, util_1.comparePos)(comment.loc.end, child.loc.end) <= 0) {
          decorateComment(comment.enclosingNode = child, comment, lines);
          return;
        }
        if ((0, util_1.comparePos)(child.loc.end, comment.loc.start) <= 0) {
          precedingNode = child;
          left = middle + 1;
          continue;
        }
        if ((0, util_1.comparePos)(comment.loc.end, child.loc.start) <= 0) {
          followingNode = child;
          right = middle;
          continue;
        }
        throw new Error("Comment location overlaps with node location");
      }
      if (precedingNode) {
        comment.precedingNode = precedingNode;
      }
      if (followingNode) {
        comment.followingNode = followingNode;
      }
    }
    function attach(comments, ast, lines) {
      if (!isArray.check(comments)) {
        return;
      }
      var tiesToBreak = [];
      comments.forEach(function(comment) {
        comment.loc.lines = lines;
        decorateComment(ast, comment, lines);
        var pn = comment.precedingNode;
        var en = comment.enclosingNode;
        var fn = comment.followingNode;
        if (pn && fn) {
          var tieCount = tiesToBreak.length;
          if (tieCount > 0) {
            var lastTie = tiesToBreak[tieCount - 1];
            (0, tiny_invariant_1.default)(lastTie.precedingNode === comment.precedingNode === (lastTie.followingNode === comment.followingNode));
            if (lastTie.followingNode !== comment.followingNode) {
              breakTies(tiesToBreak, lines);
            }
          }
          tiesToBreak.push(comment);
        } else if (pn) {
          breakTies(tiesToBreak, lines);
          addTrailingComment(pn, comment);
        } else if (fn) {
          breakTies(tiesToBreak, lines);
          addLeadingComment(fn, comment);
        } else if (en) {
          breakTies(tiesToBreak, lines);
          addDanglingComment(en, comment);
        } else {
          throw new Error("AST contains no nodes at all?");
        }
      });
      breakTies(tiesToBreak, lines);
      comments.forEach(function(comment) {
        delete comment.precedingNode;
        delete comment.enclosingNode;
        delete comment.followingNode;
      });
    }
    exports2.attach = attach;
    function breakTies(tiesToBreak, lines) {
      var tieCount = tiesToBreak.length;
      if (tieCount === 0) {
        return;
      }
      var pn = tiesToBreak[0].precedingNode;
      var fn = tiesToBreak[0].followingNode;
      var gapEndPos = fn.loc.start;
      var indexOfFirstLeadingComment = tieCount;
      var comment;
      for (; indexOfFirstLeadingComment > 0; --indexOfFirstLeadingComment) {
        comment = tiesToBreak[indexOfFirstLeadingComment - 1];
        (0, tiny_invariant_1.default)(comment.precedingNode === pn);
        (0, tiny_invariant_1.default)(comment.followingNode === fn);
        var gap = lines.sliceString(comment.loc.end, gapEndPos);
        if (/\S/.test(gap)) {
          break;
        }
        gapEndPos = comment.loc.start;
      }
      while (indexOfFirstLeadingComment <= tieCount && (comment = tiesToBreak[indexOfFirstLeadingComment]) && // If the comment is a //-style comment and indented more
      // deeply than the node itself, reconsider it as trailing.
      (comment.type === "Line" || comment.type === "CommentLine") && comment.loc.start.column > fn.loc.start.column) {
        ++indexOfFirstLeadingComment;
      }
      if (indexOfFirstLeadingComment) {
        var enclosingNode = tiesToBreak[indexOfFirstLeadingComment - 1].enclosingNode;
        if ((enclosingNode === null || enclosingNode === void 0 ? void 0 : enclosingNode.type) === "CallExpression") {
          --indexOfFirstLeadingComment;
        }
      }
      tiesToBreak.forEach(function(comment2, i) {
        if (i < indexOfFirstLeadingComment) {
          addTrailingComment(pn, comment2);
        } else {
          addLeadingComment(fn, comment2);
        }
      });
      tiesToBreak.length = 0;
    }
    function addCommentHelper(node, comment) {
      var comments = node.comments || (node.comments = []);
      comments.push(comment);
    }
    function addLeadingComment(node, comment) {
      comment.leading = true;
      comment.trailing = false;
      addCommentHelper(node, comment);
    }
    function addDanglingComment(node, comment) {
      comment.leading = false;
      comment.trailing = false;
      addCommentHelper(node, comment);
    }
    function addTrailingComment(node, comment) {
      comment.leading = false;
      comment.trailing = true;
      addCommentHelper(node, comment);
    }
    function printLeadingComment(commentPath, print2) {
      var comment = commentPath.getValue();
      n.Comment.assert(comment);
      var loc = comment.loc;
      var lines = loc && loc.lines;
      var parts = [print2(commentPath)];
      if (comment.trailing) {
        parts.push("\n");
      } else if (lines instanceof lines_1.Lines) {
        var trailingSpace = lines.slice(loc.end, lines.skipSpaces(loc.end) || lines.lastPos());
        if (trailingSpace.length === 1) {
          parts.push(trailingSpace);
        } else {
          parts.push(new Array(trailingSpace.length).join("\n"));
        }
      } else {
        parts.push("\n");
      }
      return (0, lines_1.concat)(parts);
    }
    function printTrailingComment(commentPath, print2) {
      var comment = commentPath.getValue(commentPath);
      n.Comment.assert(comment);
      var loc = comment.loc;
      var lines = loc && loc.lines;
      var parts = [];
      if (lines instanceof lines_1.Lines) {
        var fromPos = lines.skipSpaces(loc.start, true) || lines.firstPos();
        var leadingSpace = lines.slice(fromPos, loc.start);
        if (leadingSpace.length === 1) {
          parts.push(leadingSpace);
        } else {
          parts.push(new Array(leadingSpace.length).join("\n"));
        }
      }
      parts.push(print2(commentPath));
      return (0, lines_1.concat)(parts);
    }
    function printComments(path, print2) {
      var value = path.getValue();
      var innerLines = print2(path);
      var comments = n.Node.check(value) && types2.getFieldValue(value, "comments");
      if (!comments || comments.length === 0) {
        return innerLines;
      }
      var leadingParts = [];
      var trailingParts = [innerLines];
      path.each(function(commentPath) {
        var comment = commentPath.getValue();
        var leading = types2.getFieldValue(comment, "leading");
        var trailing = types2.getFieldValue(comment, "trailing");
        if (leading || trailing && !(n.Statement.check(value) || comment.type === "Block" || comment.type === "CommentBlock")) {
          leadingParts.push(printLeadingComment(commentPath, print2));
        } else if (trailing) {
          trailingParts.push(printTrailingComment(commentPath, print2));
        }
      }, "comments");
      leadingParts.push.apply(leadingParts, trailingParts);
      return (0, lines_1.concat)(leadingParts);
    }
    exports2.printComments = printComments;
  }
});

// node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/parser.js
var require_parser = __commonJS({
  "node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/parser.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parse = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var tiny_invariant_1 = tslib_1.__importDefault(require_tiny_invariant_cjs());
    var types2 = tslib_1.__importStar(require_main());
    var b2 = types2.builders;
    var isObject = types2.builtInTypes.object;
    var isArray = types2.builtInTypes.array;
    var options_1 = require_options();
    var lines_1 = require_lines();
    var comments_1 = require_comments();
    var util = tslib_1.__importStar(require_util2());
    function parse2(source, options) {
      options = (0, options_1.normalize)(options);
      var lines = (0, lines_1.fromString)(source, options);
      var sourceWithoutTabs = lines.toString({
        tabWidth: options.tabWidth,
        reuseWhitespace: false,
        useTabs: false
      });
      var comments = [];
      var ast = options.parser.parse(sourceWithoutTabs, {
        jsx: true,
        loc: true,
        locations: true,
        range: options.range,
        comment: true,
        onComment: comments,
        tolerant: util.getOption(options, "tolerant", true),
        ecmaVersion: 6,
        sourceType: util.getOption(options, "sourceType", "module")
      });
      var tokens = Array.isArray(ast.tokens) ? ast.tokens : require_esprima2().tokenize(sourceWithoutTabs, {
        loc: true
      });
      delete ast.tokens;
      tokens.forEach(function(token) {
        if (typeof token.value !== "string") {
          token.value = lines.sliceString(token.loc.start, token.loc.end);
        }
      });
      if (Array.isArray(ast.comments)) {
        comments = ast.comments;
        delete ast.comments;
      }
      if (ast.loc) {
        util.fixFaultyLocations(ast, lines);
      } else {
        ast.loc = {
          start: lines.firstPos(),
          end: lines.lastPos()
        };
      }
      ast.loc.lines = lines;
      ast.loc.indent = 0;
      var file;
      var program;
      if (ast.type === "Program") {
        program = ast;
        file = b2.file(ast, options.sourceFileName || null);
        file.loc = {
          start: lines.firstPos(),
          end: lines.lastPos(),
          lines,
          indent: 0
        };
      } else if (ast.type === "File") {
        file = ast;
        program = file.program;
      }
      if (options.tokens) {
        file.tokens = tokens;
      }
      var trueProgramLoc = util.getTrueLoc({
        type: program.type,
        loc: program.loc,
        body: [],
        comments
      }, lines);
      program.loc.start = trueProgramLoc.start;
      program.loc.end = trueProgramLoc.end;
      (0, comments_1.attach)(comments, program.body.length ? file.program : file, lines);
      return new TreeCopier(lines, tokens).copy(file);
    }
    exports2.parse = parse2;
    var TreeCopier = function TreeCopier2(lines, tokens) {
      (0, tiny_invariant_1.default)(this instanceof TreeCopier2);
      this.lines = lines;
      this.tokens = tokens;
      this.startTokenIndex = 0;
      this.endTokenIndex = tokens.length;
      this.indent = 0;
      this.seen = /* @__PURE__ */ new Map();
    };
    var TCp = TreeCopier.prototype;
    TCp.copy = function(node) {
      if (this.seen.has(node)) {
        return this.seen.get(node);
      }
      if (isArray.check(node)) {
        var copy_1 = new Array(node.length);
        this.seen.set(node, copy_1);
        node.forEach(function(item, i2) {
          copy_1[i2] = this.copy(item);
        }, this);
        return copy_1;
      }
      if (!isObject.check(node)) {
        return node;
      }
      util.fixFaultyLocations(node, this.lines);
      var copy = Object.create(Object.getPrototypeOf(node), {
        original: {
          // Provide a link from the copy to the original.
          value: node,
          configurable: false,
          enumerable: false,
          writable: true
        }
      });
      this.seen.set(node, copy);
      var loc = node.loc;
      var oldIndent = this.indent;
      var newIndent = oldIndent;
      var oldStartTokenIndex = this.startTokenIndex;
      var oldEndTokenIndex = this.endTokenIndex;
      if (loc) {
        if (node.type === "Block" || node.type === "Line" || node.type === "CommentBlock" || node.type === "CommentLine" || this.lines.isPrecededOnlyByWhitespace(loc.start)) {
          newIndent = this.indent = loc.start.column;
        }
        loc.lines = this.lines;
        loc.tokens = this.tokens;
        loc.indent = newIndent;
        this.findTokenRange(loc);
      }
      var keys = Object.keys(node);
      var keyCount = keys.length;
      for (var i = 0; i < keyCount; ++i) {
        var key = keys[i];
        if (key === "loc") {
          copy[key] = node[key];
        } else if (key === "tokens" && node.type === "File") {
          copy[key] = node[key];
        } else {
          copy[key] = this.copy(node[key]);
        }
      }
      this.indent = oldIndent;
      this.startTokenIndex = oldStartTokenIndex;
      this.endTokenIndex = oldEndTokenIndex;
      return copy;
    };
    TCp.findTokenRange = function(loc) {
      while (this.startTokenIndex > 0) {
        var token = loc.tokens[this.startTokenIndex];
        if (util.comparePos(loc.start, token.loc.start) < 0) {
          --this.startTokenIndex;
        } else
          break;
      }
      while (this.endTokenIndex < loc.tokens.length) {
        var token = loc.tokens[this.endTokenIndex];
        if (util.comparePos(token.loc.end, loc.end) < 0) {
          ++this.endTokenIndex;
        } else
          break;
      }
      while (this.startTokenIndex < this.endTokenIndex) {
        var token = loc.tokens[this.startTokenIndex];
        if (util.comparePos(token.loc.start, loc.start) < 0) {
          ++this.startTokenIndex;
        } else
          break;
      }
      loc.start.token = this.startTokenIndex;
      while (this.endTokenIndex > this.startTokenIndex) {
        var token = loc.tokens[this.endTokenIndex - 1];
        if (util.comparePos(loc.end, token.loc.end) < 0) {
          --this.endTokenIndex;
        } else
          break;
      }
      loc.end.token = this.endTokenIndex;
    };
  }
});

// node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/fast-path.js
var require_fast_path = __commonJS({
  "node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/fast-path.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var tiny_invariant_1 = tslib_1.__importDefault(require_tiny_invariant_cjs());
    var types2 = tslib_1.__importStar(require_main());
    var util = tslib_1.__importStar(require_util2());
    var n = types2.namedTypes;
    var isArray = types2.builtInTypes.array;
    var isNumber = types2.builtInTypes.number;
    var PRECEDENCE = {};
    [
      ["??"],
      ["||"],
      ["&&"],
      ["|"],
      ["^"],
      ["&"],
      ["==", "===", "!=", "!=="],
      ["<", ">", "<=", ">=", "in", "instanceof"],
      [">>", "<<", ">>>"],
      ["+", "-"],
      ["*", "/", "%"],
      ["**"]
    ].forEach(function(tier, i) {
      tier.forEach(function(op) {
        PRECEDENCE[op] = i;
      });
    });
    var FastPath = function FastPath2(value) {
      (0, tiny_invariant_1.default)(this instanceof FastPath2);
      this.stack = [value];
    };
    var FPp = FastPath.prototype;
    FastPath.from = function(obj) {
      if (obj instanceof FastPath) {
        return obj.copy();
      }
      if (obj instanceof types2.NodePath) {
        var copy = Object.create(FastPath.prototype);
        var stack = [obj.value];
        for (var pp = void 0; pp = obj.parentPath; obj = pp)
          stack.push(obj.name, pp.value);
        copy.stack = stack.reverse();
        return copy;
      }
      return new FastPath(obj);
    };
    FPp.copy = function copy() {
      var copy2 = Object.create(FastPath.prototype);
      copy2.stack = this.stack.slice(0);
      return copy2;
    };
    FPp.getName = function getName() {
      var s = this.stack;
      var len = s.length;
      if (len > 1) {
        return s[len - 2];
      }
      return null;
    };
    FPp.getValue = function getValue() {
      var s = this.stack;
      return s[s.length - 1];
    };
    FPp.valueIsDuplicate = function() {
      var s = this.stack;
      var valueIndex = s.length - 1;
      return s.lastIndexOf(s[valueIndex], valueIndex - 1) >= 0;
    };
    function getNodeHelper(path, count) {
      var s = path.stack;
      for (var i = s.length - 1; i >= 0; i -= 2) {
        var value = s[i];
        if (n.Node.check(value) && --count < 0) {
          return value;
        }
      }
      return null;
    }
    FPp.getNode = function getNode(count) {
      if (count === void 0) {
        count = 0;
      }
      return getNodeHelper(this, ~~count);
    };
    FPp.getParentNode = function getParentNode(count) {
      if (count === void 0) {
        count = 0;
      }
      return getNodeHelper(this, ~~count + 1);
    };
    FPp.getRootValue = function getRootValue() {
      var s = this.stack;
      if (s.length % 2 === 0) {
        return s[1];
      }
      return s[0];
    };
    FPp.call = function call(callback) {
      var s = this.stack;
      var origLen = s.length;
      var value = s[origLen - 1];
      var argc = arguments.length;
      for (var i = 1; i < argc; ++i) {
        var name = arguments[i];
        value = value[name];
        s.push(name, value);
      }
      var result = callback(this);
      s.length = origLen;
      return result;
    };
    FPp.each = function each(callback) {
      var s = this.stack;
      var origLen = s.length;
      var value = s[origLen - 1];
      var argc = arguments.length;
      for (var i = 1; i < argc; ++i) {
        var name = arguments[i];
        value = value[name];
        s.push(name, value);
      }
      for (var i = 0; i < value.length; ++i) {
        if (i in value) {
          s.push(i, value[i]);
          callback(this);
          s.length -= 2;
        }
      }
      s.length = origLen;
    };
    FPp.map = function map(callback) {
      var s = this.stack;
      var origLen = s.length;
      var value = s[origLen - 1];
      var argc = arguments.length;
      for (var i = 1; i < argc; ++i) {
        var name = arguments[i];
        value = value[name];
        s.push(name, value);
      }
      var result = new Array(value.length);
      for (var i = 0; i < value.length; ++i) {
        if (i in value) {
          s.push(i, value[i]);
          result[i] = callback(this, i);
          s.length -= 2;
        }
      }
      s.length = origLen;
      return result;
    };
    FPp.hasParens = function() {
      var node = this.getNode();
      var prevToken = this.getPrevToken(node);
      if (!prevToken) {
        return false;
      }
      var nextToken = this.getNextToken(node);
      if (!nextToken) {
        return false;
      }
      if (prevToken.value === "(") {
        if (nextToken.value === ")") {
          return true;
        }
        var justNeedsOpeningParen = !this.canBeFirstInStatement() && this.firstInStatement() && !this.needsParens(true);
        if (justNeedsOpeningParen) {
          return true;
        }
      }
      return false;
    };
    FPp.getPrevToken = function(node) {
      node = node || this.getNode();
      var loc = node && node.loc;
      var tokens = loc && loc.tokens;
      if (tokens && loc.start.token > 0) {
        var token = tokens[loc.start.token - 1];
        if (token) {
          var rootLoc = this.getRootValue().loc;
          if (util.comparePos(rootLoc.start, token.loc.start) <= 0) {
            return token;
          }
        }
      }
      return null;
    };
    FPp.getNextToken = function(node) {
      node = node || this.getNode();
      var loc = node && node.loc;
      var tokens = loc && loc.tokens;
      if (tokens && loc.end.token < tokens.length) {
        var token = tokens[loc.end.token];
        if (token) {
          var rootLoc = this.getRootValue().loc;
          if (util.comparePos(token.loc.end, rootLoc.end) <= 0) {
            return token;
          }
        }
      }
      return null;
    };
    FPp.needsParens = function(assumeExpressionContext) {
      var node = this.getNode();
      if (node.type === "AssignmentExpression" && node.left.type === "ObjectPattern") {
        return true;
      }
      var parent = this.getParentNode();
      var name = this.getName();
      if (this.getValue() !== node) {
        return false;
      }
      if (n.Statement.check(node)) {
        return false;
      }
      if (node.type === "Identifier") {
        return false;
      }
      if (parent && parent.type === "ParenthesizedExpression") {
        return false;
      }
      if (node.extra && node.extra.parenthesized) {
        return true;
      }
      if (!parent)
        return false;
      if (node.type === "UnaryExpression" && parent.type === "BinaryExpression" && name === "left" && parent.left === node && parent.operator === "**") {
        return true;
      }
      switch (node.type) {
        case "UnaryExpression":
        case "SpreadElement":
        case "SpreadProperty":
          return parent.type === "MemberExpression" && name === "object" && parent.object === node;
        case "BinaryExpression":
        case "LogicalExpression":
          switch (parent.type) {
            case "CallExpression":
              return name === "callee" && parent.callee === node;
            case "UnaryExpression":
            case "SpreadElement":
            case "SpreadProperty":
              return true;
            case "MemberExpression":
              return name === "object" && parent.object === node;
            case "BinaryExpression":
            case "LogicalExpression": {
              var po = parent.operator;
              var pp = PRECEDENCE[po];
              var no = node.operator;
              var np = PRECEDENCE[no];
              if (pp > np) {
                return true;
              }
              if (pp === np && name === "right") {
                (0, tiny_invariant_1.default)(parent.right === node);
                return true;
              }
              break;
            }
            default:
              return false;
          }
          break;
        case "SequenceExpression":
          switch (parent.type) {
            case "ReturnStatement":
              return false;
            case "ForStatement":
              return false;
            case "ExpressionStatement":
              return name !== "expression";
            default:
              return true;
          }
        case "OptionalIndexedAccessType":
          return node.optional && parent.type === "IndexedAccessType";
        case "IntersectionTypeAnnotation":
        case "UnionTypeAnnotation":
          return parent.type === "NullableTypeAnnotation";
        case "Literal":
          return parent.type === "MemberExpression" && isNumber.check(node.value) && name === "object" && parent.object === node;
        // Babel 6 Literal split
        case "NumericLiteral":
          return parent.type === "MemberExpression" && name === "object" && parent.object === node;
        case "YieldExpression":
        case "AwaitExpression":
        case "AssignmentExpression":
        case "ConditionalExpression":
          switch (parent.type) {
            case "UnaryExpression":
            case "SpreadElement":
            case "SpreadProperty":
            case "BinaryExpression":
            case "LogicalExpression":
              return true;
            case "CallExpression":
            case "NewExpression":
              return name === "callee" && parent.callee === node;
            case "ConditionalExpression":
              return name === "test" && parent.test === node;
            case "MemberExpression":
              return name === "object" && parent.object === node;
            default:
              return false;
          }
        case "ArrowFunctionExpression":
          if (n.CallExpression.check(parent) && name === "callee" && parent.callee === node) {
            return true;
          }
          if (n.MemberExpression.check(parent) && name === "object" && parent.object === node) {
            return true;
          }
          if (n.TSAsExpression && n.TSAsExpression.check(parent) && name === "expression" && parent.expression === node) {
            return true;
          }
          return isBinary(parent);
        case "ObjectExpression":
          if (parent.type === "ArrowFunctionExpression" && name === "body" && parent.body === node) {
            return true;
          }
          break;
        case "TSAsExpression":
          if (parent.type === "ArrowFunctionExpression" && name === "body" && parent.body === node && node.expression.type === "ObjectExpression") {
            return true;
          }
          break;
        case "CallExpression":
          if (name === "declaration" && n.ExportDefaultDeclaration.check(parent) && n.FunctionExpression.check(node.callee)) {
            return true;
          }
      }
      if (parent.type === "NewExpression" && name === "callee" && parent.callee === node) {
        return containsCallExpression(node);
      }
      if (assumeExpressionContext !== true && !this.canBeFirstInStatement() && this.firstInStatement()) {
        return true;
      }
      return false;
    };
    function isBinary(node) {
      return n.BinaryExpression.check(node) || n.LogicalExpression.check(node);
    }
    function containsCallExpression(node) {
      if (n.CallExpression.check(node)) {
        return true;
      }
      if (isArray.check(node)) {
        return node.some(containsCallExpression);
      }
      if (n.Node.check(node)) {
        return types2.someField(node, function(_name, child) {
          return containsCallExpression(child);
        });
      }
      return false;
    }
    FPp.canBeFirstInStatement = function() {
      var node = this.getNode();
      if (n.FunctionExpression.check(node)) {
        return false;
      }
      if (n.ObjectExpression.check(node)) {
        return false;
      }
      if (n.ClassExpression.check(node)) {
        return false;
      }
      return true;
    };
    FPp.firstInStatement = function() {
      var s = this.stack;
      var parentName, parent;
      var childName, child;
      for (var i = s.length - 1; i >= 0; i -= 2) {
        if (n.Node.check(s[i])) {
          childName = parentName;
          child = parent;
          parentName = s[i - 1];
          parent = s[i];
        }
        if (!parent || !child) {
          continue;
        }
        if (n.BlockStatement.check(parent) && parentName === "body" && childName === 0) {
          (0, tiny_invariant_1.default)(parent.body[0] === child);
          return true;
        }
        if (n.ExpressionStatement.check(parent) && childName === "expression") {
          (0, tiny_invariant_1.default)(parent.expression === child);
          return true;
        }
        if (n.AssignmentExpression.check(parent) && childName === "left") {
          (0, tiny_invariant_1.default)(parent.left === child);
          return true;
        }
        if (n.ArrowFunctionExpression.check(parent) && childName === "body") {
          (0, tiny_invariant_1.default)(parent.body === child);
          return true;
        }
        if (n.SequenceExpression.check(parent) && s[i + 1] === "expressions" && childName === 0) {
          (0, tiny_invariant_1.default)(parent.expressions[0] === child);
          continue;
        }
        if (n.CallExpression.check(parent) && childName === "callee") {
          (0, tiny_invariant_1.default)(parent.callee === child);
          continue;
        }
        if (n.MemberExpression.check(parent) && childName === "object") {
          (0, tiny_invariant_1.default)(parent.object === child);
          continue;
        }
        if (n.ConditionalExpression.check(parent) && childName === "test") {
          (0, tiny_invariant_1.default)(parent.test === child);
          continue;
        }
        if (isBinary(parent) && childName === "left") {
          (0, tiny_invariant_1.default)(parent.left === child);
          continue;
        }
        if (n.UnaryExpression.check(parent) && !parent.prefix && childName === "argument") {
          (0, tiny_invariant_1.default)(parent.argument === child);
          continue;
        }
        return false;
      }
      return true;
    };
    exports2.default = FastPath;
  }
});

// node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/patcher.js
var require_patcher = __commonJS({
  "node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/patcher.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getReprinter = exports2.Patcher = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var tiny_invariant_1 = tslib_1.__importDefault(require_tiny_invariant_cjs());
    var linesModule = tslib_1.__importStar(require_lines());
    var types2 = tslib_1.__importStar(require_main());
    var Printable = types2.namedTypes.Printable;
    var Expression = types2.namedTypes.Expression;
    var ReturnStatement = types2.namedTypes.ReturnStatement;
    var SourceLocation = types2.namedTypes.SourceLocation;
    var util_1 = require_util2();
    var fast_path_1 = tslib_1.__importDefault(require_fast_path());
    var isObject = types2.builtInTypes.object;
    var isArray = types2.builtInTypes.array;
    var isString = types2.builtInTypes.string;
    var riskyAdjoiningCharExp = /[0-9a-z_$]/i;
    var Patcher = function Patcher2(lines) {
      (0, tiny_invariant_1.default)(this instanceof Patcher2);
      (0, tiny_invariant_1.default)(lines instanceof linesModule.Lines);
      var self2 = this, replacements = [];
      self2.replace = function(loc, lines2) {
        if (isString.check(lines2))
          lines2 = linesModule.fromString(lines2);
        replacements.push({
          lines: lines2,
          start: loc.start,
          end: loc.end
        });
      };
      self2.get = function(loc) {
        loc = loc || {
          start: { line: 1, column: 0 },
          end: { line: lines.length, column: lines.getLineLength(lines.length) }
        };
        var sliceFrom = loc.start, toConcat = [];
        function pushSlice(from, to) {
          (0, tiny_invariant_1.default)((0, util_1.comparePos)(from, to) <= 0);
          toConcat.push(lines.slice(from, to));
        }
        replacements.sort(function(a, b2) {
          return (0, util_1.comparePos)(a.start, b2.start);
        }).forEach(function(rep) {
          if ((0, util_1.comparePos)(sliceFrom, rep.start) > 0) {
          } else {
            pushSlice(sliceFrom, rep.start);
            toConcat.push(rep.lines);
            sliceFrom = rep.end;
          }
        });
        pushSlice(sliceFrom, loc.end);
        return linesModule.concat(toConcat);
      };
    };
    exports2.Patcher = Patcher;
    var Pp = Patcher.prototype;
    Pp.tryToReprintComments = function(newNode, oldNode, print2) {
      var patcher = this;
      if (!newNode.comments && !oldNode.comments) {
        return true;
      }
      var newPath = fast_path_1.default.from(newNode);
      var oldPath = fast_path_1.default.from(oldNode);
      newPath.stack.push("comments", getSurroundingComments(newNode));
      oldPath.stack.push("comments", getSurroundingComments(oldNode));
      var reprints = [];
      var ableToReprintComments = findArrayReprints(newPath, oldPath, reprints);
      if (ableToReprintComments && reprints.length > 0) {
        reprints.forEach(function(reprint) {
          var oldComment = reprint.oldPath.getValue();
          (0, tiny_invariant_1.default)(oldComment.leading || oldComment.trailing);
          patcher.replace(
            oldComment.loc,
            // Comments can't have .comments, so it doesn't matter whether we
            // print with comments or without.
            print2(reprint.newPath).indentTail(oldComment.loc.indent)
          );
        });
      }
      return ableToReprintComments;
    };
    function getSurroundingComments(node) {
      var result = [];
      if (node.comments && node.comments.length > 0) {
        node.comments.forEach(function(comment) {
          if (comment.leading || comment.trailing) {
            result.push(comment);
          }
        });
      }
      return result;
    }
    Pp.deleteComments = function(node) {
      if (!node.comments) {
        return;
      }
      var patcher = this;
      node.comments.forEach(function(comment) {
        if (comment.leading) {
          patcher.replace({
            start: comment.loc.start,
            end: node.loc.lines.skipSpaces(comment.loc.end, false, false)
          }, "");
        } else if (comment.trailing) {
          patcher.replace({
            start: node.loc.lines.skipSpaces(comment.loc.start, true, false),
            end: comment.loc.end
          }, "");
        }
      });
    };
    function getReprinter(path) {
      (0, tiny_invariant_1.default)(path instanceof fast_path_1.default);
      var node = path.getValue();
      if (!Printable.check(node))
        return;
      var orig = node.original;
      var origLoc = orig && orig.loc;
      var lines = origLoc && origLoc.lines;
      var reprints = [];
      if (!lines || !findReprints(path, reprints))
        return;
      return function(print2) {
        var patcher = new Patcher(lines);
        reprints.forEach(function(reprint) {
          var newNode = reprint.newPath.getValue();
          var oldNode = reprint.oldPath.getValue();
          SourceLocation.assert(oldNode.loc, true);
          var needToPrintNewPathWithComments = !patcher.tryToReprintComments(newNode, oldNode, print2);
          if (needToPrintNewPathWithComments) {
            patcher.deleteComments(oldNode);
          }
          var newLines = print2(reprint.newPath, {
            includeComments: needToPrintNewPathWithComments,
            // If the oldNode we're replacing already had parentheses, we may
            // not need to print the new node with any extra parentheses,
            // because the existing parentheses will suffice. However, if the
            // newNode has a different type than the oldNode, let the printer
            // decide if reprint.newPath needs parentheses, as usual.
            avoidRootParens: oldNode.type === newNode.type && reprint.oldPath.hasParens()
          }).indentTail(oldNode.loc.indent);
          var nls = needsLeadingSpace(lines, oldNode.loc, newLines);
          var nts = needsTrailingSpace(lines, oldNode.loc, newLines);
          if (nls || nts) {
            var newParts = [];
            nls && newParts.push(" ");
            newParts.push(newLines);
            nts && newParts.push(" ");
            newLines = linesModule.concat(newParts);
          }
          patcher.replace(oldNode.loc, newLines);
        });
        var patchedLines = patcher.get(origLoc).indentTail(-orig.loc.indent);
        if (path.needsParens()) {
          return linesModule.concat(["(", patchedLines, ")"]);
        }
        return patchedLines;
      };
    }
    exports2.getReprinter = getReprinter;
    function needsLeadingSpace(oldLines, oldLoc, newLines) {
      var posBeforeOldLoc = (0, util_1.copyPos)(oldLoc.start);
      var charBeforeOldLoc = oldLines.prevPos(posBeforeOldLoc) && oldLines.charAt(posBeforeOldLoc);
      var newFirstChar = newLines.charAt(newLines.firstPos());
      return charBeforeOldLoc && riskyAdjoiningCharExp.test(charBeforeOldLoc) && newFirstChar && riskyAdjoiningCharExp.test(newFirstChar);
    }
    function needsTrailingSpace(oldLines, oldLoc, newLines) {
      var charAfterOldLoc = oldLines.charAt(oldLoc.end);
      var newLastPos = newLines.lastPos();
      var newLastChar = newLines.prevPos(newLastPos) && newLines.charAt(newLastPos);
      return newLastChar && riskyAdjoiningCharExp.test(newLastChar) && charAfterOldLoc && riskyAdjoiningCharExp.test(charAfterOldLoc);
    }
    function findReprints(newPath, reprints) {
      var newNode = newPath.getValue();
      Printable.assert(newNode);
      var oldNode = newNode.original;
      Printable.assert(oldNode);
      (0, tiny_invariant_1.default)(reprints.length === 0);
      if (newNode.type !== oldNode.type) {
        return false;
      }
      var oldPath = new fast_path_1.default(oldNode);
      var canReprint = findChildReprints(newPath, oldPath, reprints);
      if (!canReprint) {
        reprints.length = 0;
      }
      return canReprint;
    }
    function findAnyReprints(newPath, oldPath, reprints) {
      var newNode = newPath.getValue();
      var oldNode = oldPath.getValue();
      if (newNode === oldNode)
        return true;
      if (isArray.check(newNode))
        return findArrayReprints(newPath, oldPath, reprints);
      if (isObject.check(newNode))
        return findObjectReprints(newPath, oldPath, reprints);
      return false;
    }
    function findArrayReprints(newPath, oldPath, reprints) {
      var newNode = newPath.getValue();
      var oldNode = oldPath.getValue();
      if (newNode === oldNode || newPath.valueIsDuplicate() || oldPath.valueIsDuplicate()) {
        return true;
      }
      isArray.assert(newNode);
      var len = newNode.length;
      if (!(isArray.check(oldNode) && oldNode.length === len))
        return false;
      for (var i = 0; i < len; ++i) {
        newPath.stack.push(i, newNode[i]);
        oldPath.stack.push(i, oldNode[i]);
        var canReprint = findAnyReprints(newPath, oldPath, reprints);
        newPath.stack.length -= 2;
        oldPath.stack.length -= 2;
        if (!canReprint) {
          return false;
        }
      }
      return true;
    }
    function findObjectReprints(newPath, oldPath, reprints) {
      var newNode = newPath.getValue();
      isObject.assert(newNode);
      if (newNode.original === null) {
        return false;
      }
      var oldNode = oldPath.getValue();
      if (!isObject.check(oldNode))
        return false;
      if (newNode === oldNode || newPath.valueIsDuplicate() || oldPath.valueIsDuplicate()) {
        return true;
      }
      if (Printable.check(newNode)) {
        if (!Printable.check(oldNode)) {
          return false;
        }
        var newParentNode = newPath.getParentNode();
        var oldParentNode = oldPath.getParentNode();
        if (oldParentNode !== null && oldParentNode.type === "FunctionTypeAnnotation" && newParentNode !== null && newParentNode.type === "FunctionTypeAnnotation") {
          var oldNeedsParens = oldParentNode.params.length !== 1 || !!oldParentNode.params[0].name;
          var newNeedParens = newParentNode.params.length !== 1 || !!newParentNode.params[0].name;
          if (!oldNeedsParens && newNeedParens) {
            return false;
          }
        }
        if (newNode.type === oldNode.type) {
          var childReprints = [];
          if (findChildReprints(newPath, oldPath, childReprints)) {
            reprints.push.apply(reprints, childReprints);
          } else if (oldNode.loc) {
            reprints.push({
              oldPath: oldPath.copy(),
              newPath: newPath.copy()
            });
          } else {
            return false;
          }
          return true;
        }
        if (Expression.check(newNode) && Expression.check(oldNode) && // If we have no .loc information for oldNode, then we won't be
        // able to reprint it.
        oldNode.loc) {
          reprints.push({
            oldPath: oldPath.copy(),
            newPath: newPath.copy()
          });
          return true;
        }
        return false;
      }
      return findChildReprints(newPath, oldPath, reprints);
    }
    function findChildReprints(newPath, oldPath, reprints) {
      var newNode = newPath.getValue();
      var oldNode = oldPath.getValue();
      isObject.assert(newNode);
      isObject.assert(oldNode);
      if (newNode.original === null) {
        return false;
      }
      if (newPath.needsParens() && !oldPath.hasParens()) {
        return false;
      }
      var keys = (0, util_1.getUnionOfKeys)(oldNode, newNode);
      if (oldNode.type === "File" || newNode.type === "File") {
        delete keys.tokens;
      }
      delete keys.loc;
      var originalReprintCount = reprints.length;
      for (var k in keys) {
        if (k.charAt(0) === "_") {
          continue;
        }
        newPath.stack.push(k, types2.getFieldValue(newNode, k));
        oldPath.stack.push(k, types2.getFieldValue(oldNode, k));
        var canReprint = findAnyReprints(newPath, oldPath, reprints);
        newPath.stack.length -= 2;
        oldPath.stack.length -= 2;
        if (!canReprint) {
          return false;
        }
      }
      if (ReturnStatement.check(newPath.getNode()) && reprints.length > originalReprintCount) {
        return false;
      }
      return true;
    }
  }
});

// node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/printer.js
var require_printer = __commonJS({
  "node_modules/.pnpm/recast@0.23.11/node_modules/recast/lib/printer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Printer = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var tiny_invariant_1 = tslib_1.__importDefault(require_tiny_invariant_cjs());
    var types2 = tslib_1.__importStar(require_main());
    var comments_1 = require_comments();
    var fast_path_1 = tslib_1.__importDefault(require_fast_path());
    var lines_1 = require_lines();
    var options_1 = require_options();
    var patcher_1 = require_patcher();
    var util = tslib_1.__importStar(require_util2());
    var namedTypes = types2.namedTypes;
    var isString = types2.builtInTypes.string;
    var isObject = types2.builtInTypes.object;
    var PrintResult = function PrintResult2(code, sourceMap) {
      (0, tiny_invariant_1.default)(this instanceof PrintResult2);
      isString.assert(code);
      this.code = code;
      if (sourceMap) {
        isObject.assert(sourceMap);
        this.map = sourceMap;
      }
    };
    var PRp = PrintResult.prototype;
    var warnedAboutToString = false;
    PRp.toString = function() {
      if (!warnedAboutToString) {
        console.warn("Deprecation warning: recast.print now returns an object with a .code property. You appear to be treating the object as a string, which might still work but is strongly discouraged.");
        warnedAboutToString = true;
      }
      return this.code;
    };
    var emptyPrintResult = new PrintResult("");
    var Printer = function Printer2(config) {
      (0, tiny_invariant_1.default)(this instanceof Printer2);
      var explicitTabWidth = config && config.tabWidth;
      config = (0, options_1.normalize)(config);
      config.sourceFileName = null;
      function makePrintFunctionWith(options, overrides) {
        options = Object.assign({}, options, overrides);
        return function(path) {
          return print2(path, options);
        };
      }
      function print2(path, options) {
        (0, tiny_invariant_1.default)(path instanceof fast_path_1.default);
        options = options || {};
        if (options.includeComments) {
          return (0, comments_1.printComments)(path, makePrintFunctionWith(options, {
            includeComments: false
          }));
        }
        var oldTabWidth = config.tabWidth;
        if (!explicitTabWidth) {
          var loc = path.getNode().loc;
          if (loc && loc.lines && loc.lines.guessTabWidth) {
            config.tabWidth = loc.lines.guessTabWidth();
          }
        }
        var reprinter = (0, patcher_1.getReprinter)(path);
        var lines = reprinter ? (
          // Since the print function that we pass to the reprinter will
          // be used to print "new" nodes, it's tempting to think we
          // should pass printRootGenerically instead of print, to avoid
          // calling maybeReprint again, but that would be a mistake
          // because the new nodes might not be entirely new, but merely
          // moved from elsewhere in the AST. The print function is the
          // right choice because it gives us the opportunity to reprint
          // such nodes using their original source.
          reprinter(print2)
        ) : genericPrint(path, config, options, makePrintFunctionWith(options, {
          includeComments: true,
          avoidRootParens: false
        }));
        config.tabWidth = oldTabWidth;
        return lines;
      }
      this.print = function(ast) {
        if (!ast) {
          return emptyPrintResult;
        }
        var lines = print2(fast_path_1.default.from(ast), {
          includeComments: true,
          avoidRootParens: false
        });
        return new PrintResult(lines.toString(config), util.composeSourceMaps(config.inputSourceMap, lines.getSourceMap(config.sourceMapName, config.sourceRoot)));
      };
      this.printGenerically = function(ast) {
        if (!ast) {
          return emptyPrintResult;
        }
        function printGenerically(path2) {
          return (0, comments_1.printComments)(path2, function(path3) {
            return genericPrint(path3, config, {
              includeComments: true,
              avoidRootParens: false
            }, printGenerically);
          });
        }
        var path = fast_path_1.default.from(ast);
        var oldReuseWhitespace = config.reuseWhitespace;
        config.reuseWhitespace = false;
        var pr = new PrintResult(printGenerically(path).toString(config));
        config.reuseWhitespace = oldReuseWhitespace;
        return pr;
      };
    };
    exports2.Printer = Printer;
    function genericPrint(path, config, options, printPath) {
      (0, tiny_invariant_1.default)(path instanceof fast_path_1.default);
      var node = path.getValue();
      var parts = [];
      var linesWithoutParens = genericPrintNoParens(path, config, printPath);
      if (!node || linesWithoutParens.isEmpty()) {
        return linesWithoutParens;
      }
      var shouldAddParens = false;
      var decoratorsLines = printDecorators(path, printPath);
      if (decoratorsLines.isEmpty()) {
        if (!options.avoidRootParens) {
          shouldAddParens = path.needsParens();
        }
      } else {
        parts.push(decoratorsLines);
      }
      if (shouldAddParens) {
        parts.unshift("(");
      }
      parts.push(linesWithoutParens);
      if (shouldAddParens) {
        parts.push(")");
      }
      return (0, lines_1.concat)(parts);
    }
    function genericPrintNoParens(path, options, print2) {
      var _a, _b, _c;
      var n = path.getValue();
      if (!n) {
        return (0, lines_1.fromString)("");
      }
      if (typeof n === "string") {
        return (0, lines_1.fromString)(n, options);
      }
      namedTypes.Printable.assert(n);
      var parts = [];
      switch (n.type) {
        case "File":
          return path.call(print2, "program");
        case "Program":
          if (n.directives) {
            path.each(function(childPath) {
              parts.push(print2(childPath), ";\n");
            }, "directives");
          }
          if (n.interpreter) {
            parts.push(path.call(print2, "interpreter"));
          }
          parts.push(path.call(function(bodyPath) {
            return printStatementSequence(bodyPath, options, print2);
          }, "body"));
          return (0, lines_1.concat)(parts);
        case "Noop":
        // Babel extension.
        case "EmptyStatement":
          return (0, lines_1.fromString)("");
        case "ExpressionStatement":
          return (0, lines_1.concat)([path.call(print2, "expression"), ";"]);
        case "ParenthesizedExpression":
          return (0, lines_1.concat)(["(", path.call(print2, "expression"), ")"]);
        case "BinaryExpression":
        case "LogicalExpression":
        case "AssignmentExpression":
          return (0, lines_1.fromString)(" ").join([
            path.call(print2, "left"),
            n.operator,
            path.call(print2, "right")
          ]);
        case "AssignmentPattern":
          return (0, lines_1.concat)([
            path.call(print2, "left"),
            " = ",
            path.call(print2, "right")
          ]);
        case "MemberExpression":
        case "OptionalMemberExpression": {
          parts.push(path.call(print2, "object"));
          var property = path.call(print2, "property");
          var optional = types2.getFieldValue(n, "optional");
          if (n.computed) {
            parts.push(optional ? "?.[" : "[", property, "]");
          } else {
            parts.push(optional ? "?." : ".", property);
          }
          return (0, lines_1.concat)(parts);
        }
        case "ChainExpression":
          return path.call(print2, "expression");
        case "MetaProperty":
          return (0, lines_1.concat)([
            path.call(print2, "meta"),
            ".",
            path.call(print2, "property")
          ]);
        case "BindExpression":
          if (n.object) {
            parts.push(path.call(print2, "object"));
          }
          parts.push("::", path.call(print2, "callee"));
          return (0, lines_1.concat)(parts);
        case "Path":
          return (0, lines_1.fromString)(".").join(n.body);
        case "Identifier":
          return (0, lines_1.concat)([
            (0, lines_1.fromString)(n.name, options),
            n.optional ? "?" : "",
            path.call(print2, "typeAnnotation")
          ]);
        case "SpreadElement":
        case "SpreadElementPattern":
        case "RestProperty":
        // Babel 6 for ObjectPattern
        case "SpreadProperty":
        case "SpreadPropertyPattern":
        case "ObjectTypeSpreadProperty":
        case "RestElement":
          return (0, lines_1.concat)([
            "...",
            path.call(print2, "argument"),
            path.call(print2, "typeAnnotation")
          ]);
        case "FunctionDeclaration":
        case "FunctionExpression":
        case "TSDeclareFunction":
          if (n.declare) {
            parts.push("declare ");
          }
          if (n.async) {
            parts.push("async ");
          }
          parts.push("function");
          if (n.generator)
            parts.push("*");
          if (n.id) {
            parts.push(" ", path.call(print2, "id"), path.call(print2, "typeParameters"));
          } else {
            if (n.typeParameters) {
              parts.push(path.call(print2, "typeParameters"));
            }
          }
          parts.push("(", printFunctionParams(path, options, print2), ")", path.call(print2, "returnType"));
          if (n.body) {
            parts.push(" ", path.call(print2, "body"));
          }
          return (0, lines_1.concat)(parts);
        case "ArrowFunctionExpression":
          if (n.async) {
            parts.push("async ");
          }
          if (n.typeParameters) {
            parts.push(path.call(print2, "typeParameters"));
          }
          if (!options.arrowParensAlways && n.params.length === 1 && !n.rest && n.params[0].type === "Identifier" && !n.params[0].typeAnnotation && !n.returnType) {
            parts.push(path.call(print2, "params", 0));
          } else {
            parts.push("(", printFunctionParams(path, options, print2), ")", path.call(print2, "returnType"));
          }
          parts.push(" => ", path.call(print2, "body"));
          return (0, lines_1.concat)(parts);
        case "MethodDefinition":
          return printMethod(path, options, print2);
        case "YieldExpression":
          parts.push("yield");
          if (n.delegate)
            parts.push("*");
          if (n.argument)
            parts.push(" ", path.call(print2, "argument"));
          return (0, lines_1.concat)(parts);
        case "AwaitExpression":
          parts.push("await");
          if (n.all)
            parts.push("*");
          if (n.argument)
            parts.push(" ", path.call(print2, "argument"));
          return (0, lines_1.concat)(parts);
        case "ModuleExpression":
          return (0, lines_1.concat)([
            "module {\n",
            path.call(print2, "body").indent(options.tabWidth),
            "\n}"
          ]);
        case "ModuleDeclaration":
          parts.push("module", path.call(print2, "id"));
          if (n.source) {
            (0, tiny_invariant_1.default)(!n.body);
            parts.push("from", path.call(print2, "source"));
          } else {
            parts.push(path.call(print2, "body"));
          }
          return (0, lines_1.fromString)(" ").join(parts);
        case "ImportSpecifier":
          if (n.importKind && n.importKind !== "value") {
            parts.push(n.importKind + " ");
          }
          if (n.imported) {
            parts.push(path.call(print2, "imported"));
            if (n.local && n.local.name !== n.imported.name) {
              parts.push(" as ", path.call(print2, "local"));
            }
          } else if (n.id) {
            parts.push(path.call(print2, "id"));
            if (n.name) {
              parts.push(" as ", path.call(print2, "name"));
            }
          }
          return (0, lines_1.concat)(parts);
        case "ExportSpecifier":
          if (n.exportKind && n.exportKind !== "value") {
            parts.push(n.exportKind + " ");
          }
          if (n.local) {
            parts.push(path.call(print2, "local"));
            if (n.exported && n.exported.name !== n.local.name) {
              parts.push(" as ", path.call(print2, "exported"));
            }
          } else if (n.id) {
            parts.push(path.call(print2, "id"));
            if (n.name) {
              parts.push(" as ", path.call(print2, "name"));
            }
          }
          return (0, lines_1.concat)(parts);
        case "ExportBatchSpecifier":
          return (0, lines_1.fromString)("*");
        case "ImportNamespaceSpecifier":
          parts.push("* as ");
          if (n.local) {
            parts.push(path.call(print2, "local"));
          } else if (n.id) {
            parts.push(path.call(print2, "id"));
          }
          return (0, lines_1.concat)(parts);
        case "ImportDefaultSpecifier":
          if (n.local) {
            return path.call(print2, "local");
          }
          return path.call(print2, "id");
        case "TSExportAssignment":
          return (0, lines_1.concat)(["export = ", path.call(print2, "expression")]);
        case "ExportDeclaration":
        case "ExportDefaultDeclaration":
        case "ExportNamedDeclaration":
          return printExportDeclaration(path, options, print2);
        case "ExportAllDeclaration":
          parts.push("export *");
          if (n.exported) {
            parts.push(" as ", path.call(print2, "exported"));
          }
          parts.push(" from ", path.call(print2, "source"), ";");
          return (0, lines_1.concat)(parts);
        case "TSNamespaceExportDeclaration":
          parts.push("export as namespace ", path.call(print2, "id"));
          return maybeAddSemicolon((0, lines_1.concat)(parts));
        case "ExportNamespaceSpecifier":
          return (0, lines_1.concat)(["* as ", path.call(print2, "exported")]);
        case "ExportDefaultSpecifier":
          return path.call(print2, "exported");
        case "Import":
          return (0, lines_1.fromString)("import", options);
        // Recast and ast-types currently support dynamic import(...) using
        // either this dedicated ImportExpression type or a CallExpression
        // whose callee has type Import.
        // https://github.com/benjamn/ast-types/pull/365#issuecomment-605214486
        case "ImportExpression":
          return (0, lines_1.concat)(["import(", path.call(print2, "source"), ")"]);
        case "ImportDeclaration": {
          parts.push("import ");
          if (n.importKind && n.importKind !== "value") {
            parts.push(n.importKind + " ");
          }
          if (n.specifiers && n.specifiers.length > 0) {
            var unbracedSpecifiers_1 = [];
            var bracedSpecifiers_1 = [];
            path.each(function(specifierPath) {
              var spec = specifierPath.getValue();
              if (spec.type === "ImportSpecifier") {
                bracedSpecifiers_1.push(print2(specifierPath));
              } else if (spec.type === "ImportDefaultSpecifier" || spec.type === "ImportNamespaceSpecifier") {
                unbracedSpecifiers_1.push(print2(specifierPath));
              }
            }, "specifiers");
            unbracedSpecifiers_1.forEach(function(lines2, i) {
              if (i > 0) {
                parts.push(", ");
              }
              parts.push(lines2);
            });
            if (bracedSpecifiers_1.length > 0) {
              var lines = (0, lines_1.fromString)(", ").join(bracedSpecifiers_1);
              if (lines.getLineLength(1) > options.wrapColumn) {
                lines = (0, lines_1.concat)([
                  (0, lines_1.fromString)(",\n").join(bracedSpecifiers_1).indent(options.tabWidth),
                  ","
                ]);
              }
              if (unbracedSpecifiers_1.length > 0) {
                parts.push(", ");
              }
              if (lines.length > 1) {
                parts.push("{\n", lines, "\n}");
              } else if (options.objectCurlySpacing) {
                parts.push("{ ", lines, " }");
              } else {
                parts.push("{", lines, "}");
              }
            }
            parts.push(" from ");
          }
          parts.push(path.call(print2, "source"), maybePrintImportAssertions(path, options, print2), ";");
          return (0, lines_1.concat)(parts);
        }
        case "ImportAttribute":
          return (0, lines_1.concat)([path.call(print2, "key"), ": ", path.call(print2, "value")]);
        case "StaticBlock":
          parts.push("static ");
        // Intentionally fall through to BlockStatement below.
        case "BlockStatement": {
          var naked_1 = path.call(function(bodyPath) {
            return printStatementSequence(bodyPath, options, print2);
          }, "body");
          if (naked_1.isEmpty()) {
            if (!n.directives || n.directives.length === 0) {
              parts.push("{}");
              return (0, lines_1.concat)(parts);
            }
          }
          parts.push("{\n");
          if (n.directives) {
            path.each(function(childPath) {
              parts.push(maybeAddSemicolon(print2(childPath).indent(options.tabWidth)), n.directives.length > 1 || !naked_1.isEmpty() ? "\n" : "");
            }, "directives");
          }
          parts.push(naked_1.indent(options.tabWidth));
          parts.push("\n}");
          return (0, lines_1.concat)(parts);
        }
        case "ReturnStatement": {
          parts.push("return");
          if (n.argument) {
            var argIsJsxElement = ((_a = namedTypes.JSXElement) === null || _a === void 0 ? void 0 : _a.check(n.argument)) || ((_b = namedTypes.JSXFragment) === null || _b === void 0 ? void 0 : _b.check(n.argument));
            var argLines = path.call(print2, "argument");
            if (argLines.startsWithComment() || argLines.length > 1 && argIsJsxElement) {
              if (argIsJsxElement && ((_c = n.argument.extra) === null || _c === void 0 ? void 0 : _c.parenthesized)) {
                n.argument.extra.parenthesized = false;
                argLines = path.call(print2, "argument");
                n.argument.extra.parenthesized = true;
              }
              parts.push(" ", (0, lines_1.concat)(["(\n", argLines]).indentTail(options.tabWidth), "\n)");
            } else {
              parts.push(" ", argLines);
            }
          }
          parts.push(";");
          return (0, lines_1.concat)(parts);
        }
        case "CallExpression":
        case "OptionalCallExpression":
          parts.push(path.call(print2, "callee"));
          if (n.typeParameters) {
            parts.push(path.call(print2, "typeParameters"));
          }
          if (n.typeArguments) {
            parts.push(path.call(print2, "typeArguments"));
          }
          if (types2.getFieldValue(n, "optional")) {
            parts.push("?.");
          }
          parts.push(printArgumentsList(path, options, print2));
          return (0, lines_1.concat)(parts);
        case "RecordExpression":
          parts.push("#");
        // Intentionally fall through to printing the object literal...
        case "ObjectExpression":
        case "ObjectPattern":
        case "ObjectTypeAnnotation": {
          var isTypeAnnotation_1 = n.type === "ObjectTypeAnnotation";
          var separator_1 = options.flowObjectCommas ? "," : isTypeAnnotation_1 ? ";" : ",";
          var fields = [];
          var allowBreak_1 = false;
          if (isTypeAnnotation_1) {
            fields.push("indexers", "callProperties");
            if (n.internalSlots != null) {
              fields.push("internalSlots");
            }
          }
          fields.push("properties");
          var len_1 = 0;
          fields.forEach(function(field) {
            len_1 += n[field].length;
          });
          var oneLine_1 = isTypeAnnotation_1 && len_1 === 1 || len_1 === 0;
          var leftBrace = n.exact ? "{|" : "{";
          var rightBrace = n.exact ? "|}" : "}";
          parts.push(oneLine_1 ? leftBrace : leftBrace + "\n");
          var leftBraceIndex = parts.length - 1;
          var i_1 = 0;
          fields.forEach(function(field) {
            path.each(function(childPath) {
              var lines2 = print2(childPath);
              if (!oneLine_1) {
                lines2 = lines2.indent(options.tabWidth);
              }
              var multiLine = !isTypeAnnotation_1 && lines2.length > 1;
              if (multiLine && allowBreak_1) {
                parts.push("\n");
              }
              parts.push(lines2);
              if (i_1 < len_1 - 1) {
                parts.push(separator_1 + (multiLine ? "\n\n" : "\n"));
                allowBreak_1 = !multiLine;
              } else if (len_1 !== 1 && isTypeAnnotation_1) {
                parts.push(separator_1);
              } else if (!oneLine_1 && util.isTrailingCommaEnabled(options, "objects") && childPath.getValue().type !== "RestElement") {
                parts.push(separator_1);
              }
              i_1++;
            }, field);
          });
          if (n.inexact) {
            var line = (0, lines_1.fromString)("...", options);
            if (oneLine_1) {
              if (len_1 > 0) {
                parts.push(separator_1, " ");
              }
              parts.push(line);
            } else {
              parts.push("\n", line.indent(options.tabWidth));
            }
          }
          parts.push(oneLine_1 ? rightBrace : "\n" + rightBrace);
          if (i_1 !== 0 && oneLine_1 && options.objectCurlySpacing) {
            parts[leftBraceIndex] = leftBrace + " ";
            parts[parts.length - 1] = " " + rightBrace;
          }
          if (n.typeAnnotation) {
            parts.push(path.call(print2, "typeAnnotation"));
          }
          return (0, lines_1.concat)(parts);
        }
        case "PropertyPattern":
          return (0, lines_1.concat)([
            path.call(print2, "key"),
            ": ",
            path.call(print2, "pattern")
          ]);
        case "ObjectProperty":
        // Babel 6
        case "Property": {
          if (n.method || n.kind === "get" || n.kind === "set") {
            return printMethod(path, options, print2);
          }
          if (n.shorthand && n.value.type === "AssignmentPattern") {
            return path.call(print2, "value");
          }
          var key = path.call(print2, "key");
          if (n.computed) {
            parts.push("[", key, "]");
          } else {
            parts.push(key);
          }
          if (!n.shorthand || n.key.name !== n.value.name) {
            parts.push(": ", path.call(print2, "value"));
          }
          return (0, lines_1.concat)(parts);
        }
        case "ClassMethod":
        // Babel 6
        case "ObjectMethod":
        // Babel 6
        case "ClassPrivateMethod":
        case "TSDeclareMethod":
          return printMethod(path, options, print2);
        case "PrivateName":
          return (0, lines_1.concat)(["#", path.call(print2, "id")]);
        case "Decorator":
          return (0, lines_1.concat)(["@", path.call(print2, "expression")]);
        case "TupleExpression":
          parts.push("#");
        // Intentionally fall through to printing the tuple elements...
        case "ArrayExpression":
        case "ArrayPattern": {
          var elems = n.elements;
          var len_2 = elems.length;
          var printed_1 = path.map(print2, "elements");
          var joined = (0, lines_1.fromString)(", ").join(printed_1);
          var oneLine_2 = joined.getLineLength(1) <= options.wrapColumn;
          if (oneLine_2) {
            if (options.arrayBracketSpacing) {
              parts.push("[ ");
            } else {
              parts.push("[");
            }
          } else {
            parts.push("[\n");
          }
          path.each(function(elemPath) {
            var i = elemPath.getName();
            var elem = elemPath.getValue();
            if (!elem) {
              parts.push(",");
            } else {
              var lines2 = printed_1[i];
              if (oneLine_2) {
                if (i > 0)
                  parts.push(" ");
              } else {
                lines2 = lines2.indent(options.tabWidth);
              }
              parts.push(lines2);
              if (i < len_2 - 1 || !oneLine_2 && util.isTrailingCommaEnabled(options, "arrays"))
                parts.push(",");
              if (!oneLine_2)
                parts.push("\n");
            }
          }, "elements");
          if (oneLine_2 && options.arrayBracketSpacing) {
            parts.push(" ]");
          } else {
            parts.push("]");
          }
          if (n.typeAnnotation) {
            parts.push(path.call(print2, "typeAnnotation"));
          }
          return (0, lines_1.concat)(parts);
        }
        case "SequenceExpression":
          return (0, lines_1.fromString)(", ").join(path.map(print2, "expressions"));
        case "ThisExpression":
          return (0, lines_1.fromString)("this");
        case "Super":
          return (0, lines_1.fromString)("super");
        case "NullLiteral":
          return (0, lines_1.fromString)("null");
        case "RegExpLiteral":
          return (0, lines_1.fromString)(getPossibleRaw(n) || "/".concat(n.pattern, "/").concat(n.flags || ""), options);
        case "BigIntLiteral":
          return (0, lines_1.fromString)(getPossibleRaw(n) || n.value + "n", options);
        case "NumericLiteral":
          return (0, lines_1.fromString)(getPossibleRaw(n) || n.value, options);
        case "DecimalLiteral":
          return (0, lines_1.fromString)(getPossibleRaw(n) || n.value + "m", options);
        case "StringLiteral":
          return (0, lines_1.fromString)(nodeStr(n.value, options));
        case "BooleanLiteral":
        // Babel 6 Literal split
        case "Literal":
          return (0, lines_1.fromString)(getPossibleRaw(n) || (typeof n.value === "string" ? nodeStr(n.value, options) : n.value), options);
        case "Directive":
          return path.call(print2, "value");
        case "DirectiveLiteral":
          return (0, lines_1.fromString)(getPossibleRaw(n) || nodeStr(n.value, options), options);
        case "InterpreterDirective":
          return (0, lines_1.fromString)("#!".concat(n.value, "\n"), options);
        case "ModuleSpecifier":
          if (n.local) {
            throw new Error("The ESTree ModuleSpecifier type should be abstract");
          }
          return (0, lines_1.fromString)(nodeStr(n.value, options), options);
        case "UnaryExpression":
          parts.push(n.operator);
          if (/[a-z]$/.test(n.operator))
            parts.push(" ");
          parts.push(path.call(print2, "argument"));
          return (0, lines_1.concat)(parts);
        case "UpdateExpression":
          parts.push(path.call(print2, "argument"), n.operator);
          if (n.prefix)
            parts.reverse();
          return (0, lines_1.concat)(parts);
        case "ConditionalExpression":
          return (0, lines_1.concat)([
            path.call(print2, "test"),
            " ? ",
            path.call(print2, "consequent"),
            " : ",
            path.call(print2, "alternate")
          ]);
        case "NewExpression": {
          parts.push("new ", path.call(print2, "callee"));
          if (n.typeParameters) {
            parts.push(path.call(print2, "typeParameters"));
          }
          if (n.typeArguments) {
            parts.push(path.call(print2, "typeArguments"));
          }
          var args = n.arguments;
          if (args) {
            parts.push(printArgumentsList(path, options, print2));
          }
          return (0, lines_1.concat)(parts);
        }
        case "VariableDeclaration": {
          if (n.declare) {
            parts.push("declare ");
          }
          parts.push(n.kind, " ");
          var maxLen_1 = 0;
          var printed = path.map(function(childPath) {
            var lines2 = print2(childPath);
            maxLen_1 = Math.max(lines2.length, maxLen_1);
            return lines2;
          }, "declarations");
          if (maxLen_1 === 1) {
            parts.push((0, lines_1.fromString)(", ").join(printed));
          } else if (printed.length > 1) {
            parts.push((0, lines_1.fromString)(",\n").join(printed).indentTail(n.kind.length + 1));
          } else {
            parts.push(printed[0]);
          }
          var parentNode = path.getParentNode();
          if (!namedTypes.ForStatement.check(parentNode) && !namedTypes.ForInStatement.check(parentNode) && !(namedTypes.ForOfStatement && namedTypes.ForOfStatement.check(parentNode)) && !(namedTypes.ForAwaitStatement && namedTypes.ForAwaitStatement.check(parentNode))) {
            parts.push(";");
          }
          return (0, lines_1.concat)(parts);
        }
        case "VariableDeclarator":
          return n.init ? (0, lines_1.fromString)(" = ").join([
            path.call(print2, "id"),
            path.call(print2, "init")
          ]) : path.call(print2, "id");
        case "WithStatement":
          return (0, lines_1.concat)([
            "with (",
            path.call(print2, "object"),
            ") ",
            path.call(print2, "body")
          ]);
        case "IfStatement": {
          var con = adjustClause(path.call(print2, "consequent"), options);
          parts.push("if (", path.call(print2, "test"), ")", con);
          if (n.alternate)
            parts.push(endsWithBrace(con) ? " else" : "\nelse", adjustClause(path.call(print2, "alternate"), options));
          return (0, lines_1.concat)(parts);
        }
        case "ForStatement": {
          var init = path.call(print2, "init");
          var sep = init.length > 1 ? ";\n" : "; ";
          var forParen = "for (";
          var indented = (0, lines_1.fromString)(sep).join([init, path.call(print2, "test"), path.call(print2, "update")]).indentTail(forParen.length);
          var head = (0, lines_1.concat)([forParen, indented, ")"]);
          var clause = adjustClause(path.call(print2, "body"), options);
          parts.push(head);
          if (head.length > 1) {
            parts.push("\n");
            clause = clause.trimLeft();
          }
          parts.push(clause);
          return (0, lines_1.concat)(parts);
        }
        case "WhileStatement":
          return (0, lines_1.concat)([
            "while (",
            path.call(print2, "test"),
            ")",
            adjustClause(path.call(print2, "body"), options)
          ]);
        case "ForInStatement":
          return (0, lines_1.concat)([
            n.each ? "for each (" : "for (",
            path.call(print2, "left"),
            " in ",
            path.call(print2, "right"),
            ")",
            adjustClause(path.call(print2, "body"), options)
          ]);
        case "ForOfStatement":
        case "ForAwaitStatement":
          parts.push("for ");
          if (n.await || n.type === "ForAwaitStatement") {
            parts.push("await ");
          }
          parts.push("(", path.call(print2, "left"), " of ", path.call(print2, "right"), ")", adjustClause(path.call(print2, "body"), options));
          return (0, lines_1.concat)(parts);
        case "DoWhileStatement": {
          var doBody = (0, lines_1.concat)([
            "do",
            adjustClause(path.call(print2, "body"), options)
          ]);
          parts.push(doBody);
          if (endsWithBrace(doBody))
            parts.push(" while");
          else
            parts.push("\nwhile");
          parts.push(" (", path.call(print2, "test"), ");");
          return (0, lines_1.concat)(parts);
        }
        case "DoExpression": {
          var statements = path.call(function(bodyPath) {
            return printStatementSequence(bodyPath, options, print2);
          }, "body");
          return (0, lines_1.concat)(["do {\n", statements.indent(options.tabWidth), "\n}"]);
        }
        case "BreakStatement":
          parts.push("break");
          if (n.label)
            parts.push(" ", path.call(print2, "label"));
          parts.push(";");
          return (0, lines_1.concat)(parts);
        case "ContinueStatement":
          parts.push("continue");
          if (n.label)
            parts.push(" ", path.call(print2, "label"));
          parts.push(";");
          return (0, lines_1.concat)(parts);
        case "LabeledStatement":
          return (0, lines_1.concat)([
            path.call(print2, "label"),
            ":\n",
            path.call(print2, "body")
          ]);
        case "TryStatement":
          parts.push("try ", path.call(print2, "block"));
          if (n.handler) {
            parts.push(" ", path.call(print2, "handler"));
          } else if (n.handlers) {
            path.each(function(handlerPath) {
              parts.push(" ", print2(handlerPath));
            }, "handlers");
          }
          if (n.finalizer) {
            parts.push(" finally ", path.call(print2, "finalizer"));
          }
          return (0, lines_1.concat)(parts);
        case "CatchClause":
          parts.push("catch ");
          if (n.param) {
            parts.push("(", path.call(print2, "param"));
          }
          if (n.guard) {
            parts.push(" if ", path.call(print2, "guard"));
          }
          if (n.param) {
            parts.push(") ");
          }
          parts.push(path.call(print2, "body"));
          return (0, lines_1.concat)(parts);
        case "ThrowStatement":
          return (0, lines_1.concat)(["throw ", path.call(print2, "argument"), ";"]);
        case "SwitchStatement":
          return (0, lines_1.concat)([
            "switch (",
            path.call(print2, "discriminant"),
            ") {\n",
            (0, lines_1.fromString)("\n").join(path.map(print2, "cases")),
            "\n}"
          ]);
        // Note: ignoring n.lexical because it has no printing consequences.
        case "SwitchCase":
          if (n.test)
            parts.push("case ", path.call(print2, "test"), ":");
          else
            parts.push("default:");
          if (n.consequent.length > 0) {
            parts.push("\n", path.call(function(consequentPath) {
              return printStatementSequence(consequentPath, options, print2);
            }, "consequent").indent(options.tabWidth));
          }
          return (0, lines_1.concat)(parts);
        case "DebuggerStatement":
          return (0, lines_1.fromString)("debugger;");
        // JSX extensions below.
        case "JSXAttribute":
          parts.push(path.call(print2, "name"));
          if (n.value)
            parts.push("=", path.call(print2, "value"));
          return (0, lines_1.concat)(parts);
        case "JSXIdentifier":
          return (0, lines_1.fromString)(n.name, options);
        case "JSXNamespacedName":
          return (0, lines_1.fromString)(":").join([
            path.call(print2, "namespace"),
            path.call(print2, "name")
          ]);
        case "JSXMemberExpression":
          return (0, lines_1.fromString)(".").join([
            path.call(print2, "object"),
            path.call(print2, "property")
          ]);
        case "JSXSpreadAttribute":
          return (0, lines_1.concat)(["{...", path.call(print2, "argument"), "}"]);
        case "JSXSpreadChild":
          return (0, lines_1.concat)(["{...", path.call(print2, "expression"), "}"]);
        case "JSXExpressionContainer":
          return (0, lines_1.concat)(["{", path.call(print2, "expression"), "}"]);
        case "JSXElement":
        case "JSXFragment": {
          var openingPropName = "opening" + (n.type === "JSXElement" ? "Element" : "Fragment");
          var closingPropName = "closing" + (n.type === "JSXElement" ? "Element" : "Fragment");
          var openingLines = path.call(print2, openingPropName);
          if (n[openingPropName].selfClosing) {
            (0, tiny_invariant_1.default)(!n[closingPropName], "unexpected " + closingPropName + " element in self-closing " + n.type);
            return openingLines;
          }
          var childLines = (0, lines_1.concat)(path.map(function(childPath) {
            var child = childPath.getValue();
            if (namedTypes.Literal.check(child) && typeof child.value === "string") {
              if (/\S/.test(child.value)) {
                return child.value.replace(/^\s+/g, "");
              } else if (/\n/.test(child.value)) {
                return "\n";
              }
            }
            return print2(childPath);
          }, "children")).indentTail(options.tabWidth);
          var closingLines = path.call(print2, closingPropName);
          return (0, lines_1.concat)([openingLines, childLines, closingLines]);
        }
        case "JSXOpeningElement": {
          parts.push("<", path.call(print2, "name"));
          var typeDefPart = path.call(print2, "typeParameters");
          if (typeDefPart.length)
            parts.push(typeDefPart);
          var attrParts_1 = [];
          path.each(function(attrPath) {
            attrParts_1.push(" ", print2(attrPath));
          }, "attributes");
          var attrLines = (0, lines_1.concat)(attrParts_1);
          var needLineWrap = attrLines.length > 1 || attrLines.getLineLength(1) > options.wrapColumn;
          if (needLineWrap) {
            attrParts_1.forEach(function(part, i) {
              if (part === " ") {
                (0, tiny_invariant_1.default)(i % 2 === 0);
                attrParts_1[i] = "\n";
              }
            });
            attrLines = (0, lines_1.concat)(attrParts_1).indentTail(options.tabWidth);
          }
          parts.push(attrLines, n.selfClosing ? " />" : ">");
          return (0, lines_1.concat)(parts);
        }
        case "JSXClosingElement":
          return (0, lines_1.concat)(["</", path.call(print2, "name"), ">"]);
        case "JSXOpeningFragment":
          return (0, lines_1.fromString)("<>");
        case "JSXClosingFragment":
          return (0, lines_1.fromString)("</>");
        case "JSXText":
          return (0, lines_1.fromString)(n.value, options);
        case "JSXEmptyExpression":
          return (0, lines_1.fromString)("");
        case "TypeAnnotatedIdentifier":
          return (0, lines_1.concat)([
            path.call(print2, "annotation"),
            " ",
            path.call(print2, "identifier")
          ]);
        case "ClassBody":
          if (n.body.length === 0) {
            return (0, lines_1.fromString)("{}");
          }
          return (0, lines_1.concat)([
            "{\n",
            path.call(function(bodyPath) {
              return printStatementSequence(bodyPath, options, print2);
            }, "body").indent(options.tabWidth),
            "\n}"
          ]);
        case "ClassPropertyDefinition":
          parts.push("static ", path.call(print2, "definition"));
          if (!namedTypes.MethodDefinition.check(n.definition))
            parts.push(";");
          return (0, lines_1.concat)(parts);
        case "ClassProperty": {
          if (n.declare) {
            parts.push("declare ");
          }
          var access = n.accessibility || n.access;
          if (typeof access === "string") {
            parts.push(access, " ");
          }
          if (n.static) {
            parts.push("static ");
          }
          if (n.abstract) {
            parts.push("abstract ");
          }
          if (n.readonly) {
            parts.push("readonly ");
          }
          var key = path.call(print2, "key");
          if (n.computed) {
            key = (0, lines_1.concat)(["[", key, "]"]);
          }
          if (n.variance) {
            key = (0, lines_1.concat)([printVariance(path, print2), key]);
          }
          parts.push(key);
          if (n.optional) {
            parts.push("?");
          }
          if (n.definite) {
            parts.push("!");
          }
          if (n.typeAnnotation) {
            parts.push(path.call(print2, "typeAnnotation"));
          }
          if (n.value) {
            parts.push(" = ", path.call(print2, "value"));
          }
          parts.push(";");
          return (0, lines_1.concat)(parts);
        }
        case "ClassPrivateProperty":
          if (n.static) {
            parts.push("static ");
          }
          parts.push(path.call(print2, "key"));
          if (n.typeAnnotation) {
            parts.push(path.call(print2, "typeAnnotation"));
          }
          if (n.value) {
            parts.push(" = ", path.call(print2, "value"));
          }
          parts.push(";");
          return (0, lines_1.concat)(parts);
        case "ClassAccessorProperty": {
          parts.push.apply(parts, tslib_1.__spreadArray(tslib_1.__spreadArray([], printClassMemberModifiers(n), false), ["accessor "], false));
          if (n.computed) {
            parts.push("[", path.call(print2, "key"), "]");
          } else {
            parts.push(path.call(print2, "key"));
          }
          if (n.optional) {
            parts.push("?");
          }
          if (n.definite) {
            parts.push("!");
          }
          if (n.typeAnnotation) {
            parts.push(path.call(print2, "typeAnnotation"));
          }
          if (n.value) {
            parts.push(" = ", path.call(print2, "value"));
          }
          parts.push(";");
          return (0, lines_1.concat)(parts);
        }
        case "ClassDeclaration":
        case "ClassExpression":
        case "DeclareClass":
          if (n.declare) {
            parts.push("declare ");
          }
          if (n.abstract) {
            parts.push("abstract ");
          }
          parts.push("class");
          if (n.id) {
            parts.push(" ", path.call(print2, "id"));
          }
          if (n.typeParameters) {
            parts.push(path.call(print2, "typeParameters"));
          }
          if (n.superClass) {
            parts.push(" extends ", path.call(print2, "superClass"), path.call(print2, "superTypeParameters"));
          }
          if (n.extends && n.extends.length > 0) {
            parts.push(" extends ", (0, lines_1.fromString)(", ").join(path.map(print2, "extends")));
          }
          if (n["implements"] && n["implements"].length > 0) {
            parts.push(" implements ", (0, lines_1.fromString)(", ").join(path.map(print2, "implements")));
          }
          parts.push(" ", path.call(print2, "body"));
          if (n.type === "DeclareClass") {
            return printFlowDeclaration(path, parts);
          } else {
            return (0, lines_1.concat)(parts);
          }
        case "TemplateElement":
          return (0, lines_1.fromString)(n.value.raw, options).lockIndentTail();
        case "TemplateLiteral": {
          var expressions_1 = path.map(print2, "expressions");
          parts.push("`");
          path.each(function(childPath) {
            var i = childPath.getName();
            parts.push(print2(childPath));
            if (i < expressions_1.length) {
              parts.push("${", expressions_1[i], "}");
            }
          }, "quasis");
          parts.push("`");
          return (0, lines_1.concat)(parts).lockIndentTail();
        }
        case "TaggedTemplateExpression":
          parts.push(path.call(print2, "tag"));
          if (n.typeParameters) {
            parts.push(path.call(print2, "typeParameters"));
          }
          parts.push(path.call(print2, "quasi"));
          return (0, lines_1.concat)(parts);
        // These types are unprintable because they serve as abstract
        // supertypes for other (printable) types.
        case "Node":
        case "Printable":
        case "SourceLocation":
        case "Position":
        case "Statement":
        case "Function":
        case "Pattern":
        case "Expression":
        case "Declaration":
        case "Specifier":
        case "NamedSpecifier":
        case "Comment":
        // Supertype of Block and Line
        case "Flow":
        // Supertype of all Flow AST node types
        case "FlowType":
        // Supertype of all Flow types
        case "FlowPredicate":
        // Supertype of InferredPredicate and DeclaredPredicate
        case "MemberTypeAnnotation":
        // Flow
        case "Type":
        // Flow
        case "TSHasOptionalTypeParameterInstantiation":
        case "TSHasOptionalTypeParameters":
        case "TSHasOptionalTypeAnnotation":
        case "ChainElement":
          throw new Error("unprintable type: " + JSON.stringify(n.type));
        case "CommentBlock":
        // Babel block comment.
        case "Block":
          return (0, lines_1.concat)(["/*", (0, lines_1.fromString)(n.value, options), "*/"]);
        case "CommentLine":
        // Babel line comment.
        case "Line":
          return (0, lines_1.concat)(["//", (0, lines_1.fromString)(n.value, options)]);
        // Type Annotations for Facebook Flow, typically stripped out or
        // transformed away before printing.
        case "TypeAnnotation":
          if (n.typeAnnotation) {
            if (n.typeAnnotation.type !== "FunctionTypeAnnotation") {
              parts.push(": ");
            }
            parts.push(path.call(print2, "typeAnnotation"));
            return (0, lines_1.concat)(parts);
          }
          return (0, lines_1.fromString)("");
        case "ExistentialTypeParam":
        case "ExistsTypeAnnotation":
          return (0, lines_1.fromString)("*", options);
        case "EmptyTypeAnnotation":
          return (0, lines_1.fromString)("empty", options);
        case "AnyTypeAnnotation":
          return (0, lines_1.fromString)("any", options);
        case "MixedTypeAnnotation":
          return (0, lines_1.fromString)("mixed", options);
        case "ArrayTypeAnnotation":
          return (0, lines_1.concat)([path.call(print2, "elementType"), "[]"]);
        case "TupleTypeAnnotation": {
          var printed_2 = path.map(print2, "types");
          var joined = (0, lines_1.fromString)(", ").join(printed_2);
          var oneLine_3 = joined.getLineLength(1) <= options.wrapColumn;
          if (oneLine_3) {
            if (options.arrayBracketSpacing) {
              parts.push("[ ");
            } else {
              parts.push("[");
            }
          } else {
            parts.push("[\n");
          }
          path.each(function(elemPath) {
            var i = elemPath.getName();
            var elem = elemPath.getValue();
            if (!elem) {
              parts.push(",");
            } else {
              var lines2 = printed_2[i];
              if (oneLine_3) {
                if (i > 0)
                  parts.push(" ");
              } else {
                lines2 = lines2.indent(options.tabWidth);
              }
              parts.push(lines2);
              if (i < n.types.length - 1 || !oneLine_3 && util.isTrailingCommaEnabled(options, "arrays"))
                parts.push(",");
              if (!oneLine_3)
                parts.push("\n");
            }
          }, "types");
          if (oneLine_3 && options.arrayBracketSpacing) {
            parts.push(" ]");
          } else {
            parts.push("]");
          }
          return (0, lines_1.concat)(parts);
        }
        case "BooleanTypeAnnotation":
          return (0, lines_1.fromString)("boolean", options);
        case "BooleanLiteralTypeAnnotation":
          (0, tiny_invariant_1.default)(typeof n.value === "boolean");
          return (0, lines_1.fromString)("" + n.value, options);
        case "InterfaceTypeAnnotation":
          parts.push("interface");
          if (n.extends && n.extends.length > 0) {
            parts.push(" extends ", (0, lines_1.fromString)(", ").join(path.map(print2, "extends")));
          }
          parts.push(" ", path.call(print2, "body"));
          return (0, lines_1.concat)(parts);
        case "DeclareFunction":
          return printFlowDeclaration(path, [
            "function ",
            path.call(print2, "id"),
            ";"
          ]);
        case "DeclareModule":
          return printFlowDeclaration(path, [
            "module ",
            path.call(print2, "id"),
            " ",
            path.call(print2, "body")
          ]);
        case "DeclareModuleExports":
          return printFlowDeclaration(path, [
            "module.exports",
            path.call(print2, "typeAnnotation")
          ]);
        case "DeclareVariable":
          return printFlowDeclaration(path, ["var ", path.call(print2, "id"), ";"]);
        case "DeclareExportDeclaration":
        case "DeclareExportAllDeclaration":
          return (0, lines_1.concat)(["declare ", printExportDeclaration(path, options, print2)]);
        case "EnumDeclaration":
          return (0, lines_1.concat)([
            "enum ",
            path.call(print2, "id"),
            path.call(print2, "body")
          ]);
        case "EnumBooleanBody":
        case "EnumNumberBody":
        case "EnumStringBody":
        case "EnumSymbolBody": {
          if (n.type === "EnumSymbolBody" || n.explicitType) {
            parts.push(
              " of ",
              // EnumBooleanBody => boolean, etc.
              n.type.slice(4, -4).toLowerCase()
            );
          }
          parts.push(" {\n", (0, lines_1.fromString)("\n").join(path.map(print2, "members")).indent(options.tabWidth), "\n}");
          return (0, lines_1.concat)(parts);
        }
        case "EnumDefaultedMember":
          return (0, lines_1.concat)([path.call(print2, "id"), ","]);
        case "EnumBooleanMember":
        case "EnumNumberMember":
        case "EnumStringMember":
          return (0, lines_1.concat)([
            path.call(print2, "id"),
            " = ",
            path.call(print2, "init"),
            ","
          ]);
        case "InferredPredicate":
          return (0, lines_1.fromString)("%checks", options);
        case "DeclaredPredicate":
          return (0, lines_1.concat)(["%checks(", path.call(print2, "value"), ")"]);
        case "FunctionTypeAnnotation": {
          var parent = path.getParentNode(0);
          var isArrowFunctionTypeAnnotation = !(namedTypes.ObjectTypeCallProperty.check(parent) || namedTypes.ObjectTypeInternalSlot.check(parent) && parent.method || namedTypes.DeclareFunction.check(path.getParentNode(2)));
          var needsColon = isArrowFunctionTypeAnnotation && !namedTypes.FunctionTypeParam.check(parent) && !namedTypes.TypeAlias.check(parent);
          if (needsColon) {
            parts.push(": ");
          }
          var hasTypeParameters = !!n.typeParameters;
          var needsParens = hasTypeParameters || n.params.length !== 1 || n.params[0].name;
          parts.push(hasTypeParameters ? path.call(print2, "typeParameters") : "", needsParens ? "(" : "", printFunctionParams(path, options, print2), needsParens ? ")" : "");
          if (n.returnType) {
            parts.push(isArrowFunctionTypeAnnotation ? " => " : ": ", path.call(print2, "returnType"));
          }
          return (0, lines_1.concat)(parts);
        }
        case "FunctionTypeParam": {
          var name = path.call(print2, "name");
          parts.push(name);
          if (n.optional) {
            parts.push("?");
          }
          if (name.infos[0].line) {
            parts.push(": ");
          }
          parts.push(path.call(print2, "typeAnnotation"));
          return (0, lines_1.concat)(parts);
        }
        case "GenericTypeAnnotation":
          return (0, lines_1.concat)([
            path.call(print2, "id"),
            path.call(print2, "typeParameters")
          ]);
        case "DeclareInterface":
          parts.push("declare ");
        // Fall through to InterfaceDeclaration...
        case "InterfaceDeclaration":
        case "TSInterfaceDeclaration":
          if (n.declare) {
            parts.push("declare ");
          }
          parts.push("interface ", path.call(print2, "id"), path.call(print2, "typeParameters"), " ");
          if (n["extends"] && n["extends"].length > 0) {
            parts.push("extends ", (0, lines_1.fromString)(", ").join(path.map(print2, "extends")), " ");
          }
          if (n.body) {
            parts.push(path.call(print2, "body"));
          }
          return (0, lines_1.concat)(parts);
        case "ClassImplements":
        case "InterfaceExtends":
          return (0, lines_1.concat)([
            path.call(print2, "id"),
            path.call(print2, "typeParameters")
          ]);
        case "IntersectionTypeAnnotation":
          return (0, lines_1.fromString)(" & ").join(path.map(print2, "types"));
        case "NullableTypeAnnotation":
          return (0, lines_1.concat)(["?", path.call(print2, "typeAnnotation")]);
        case "NullLiteralTypeAnnotation":
          return (0, lines_1.fromString)("null", options);
        case "ThisTypeAnnotation":
          return (0, lines_1.fromString)("this", options);
        case "NumberTypeAnnotation":
          return (0, lines_1.fromString)("number", options);
        case "ObjectTypeCallProperty":
          return path.call(print2, "value");
        case "ObjectTypeIndexer":
          if (n.static) {
            parts.push("static ");
          }
          parts.push(printVariance(path, print2), "[");
          if (n.id) {
            parts.push(path.call(print2, "id"), ": ");
          }
          parts.push(path.call(print2, "key"), "]: ", path.call(print2, "value"));
          return (0, lines_1.concat)(parts);
        case "ObjectTypeProperty":
          return (0, lines_1.concat)([
            printVariance(path, print2),
            path.call(print2, "key"),
            n.optional ? "?" : "",
            ": ",
            path.call(print2, "value")
          ]);
        case "ObjectTypeInternalSlot":
          return (0, lines_1.concat)([
            n.static ? "static " : "",
            "[[",
            path.call(print2, "id"),
            "]]",
            n.optional ? "?" : "",
            n.value.type !== "FunctionTypeAnnotation" ? ": " : "",
            path.call(print2, "value")
          ]);
        case "QualifiedTypeIdentifier":
          return (0, lines_1.concat)([
            path.call(print2, "qualification"),
            ".",
            path.call(print2, "id")
          ]);
        case "StringLiteralTypeAnnotation":
          return (0, lines_1.fromString)(nodeStr(n.value, options), options);
        case "NumberLiteralTypeAnnotation":
        case "NumericLiteralTypeAnnotation":
          (0, tiny_invariant_1.default)(typeof n.value === "number");
          return (0, lines_1.fromString)(JSON.stringify(n.value), options);
        case "BigIntLiteralTypeAnnotation":
          return (0, lines_1.fromString)(n.raw, options);
        case "StringTypeAnnotation":
          return (0, lines_1.fromString)("string", options);
        case "DeclareTypeAlias":
          parts.push("declare ");
        // Fall through to TypeAlias...
        case "TypeAlias":
          return (0, lines_1.concat)([
            "type ",
            path.call(print2, "id"),
            path.call(print2, "typeParameters"),
            " = ",
            path.call(print2, "right"),
            ";"
          ]);
        case "DeclareOpaqueType":
          parts.push("declare ");
        // Fall through to OpaqueType...
        case "OpaqueType":
          parts.push("opaque type ", path.call(print2, "id"), path.call(print2, "typeParameters"));
          if (n["supertype"]) {
            parts.push(": ", path.call(print2, "supertype"));
          }
          if (n["impltype"]) {
            parts.push(" = ", path.call(print2, "impltype"));
          }
          parts.push(";");
          return (0, lines_1.concat)(parts);
        case "TypeCastExpression":
          return (0, lines_1.concat)([
            "(",
            path.call(print2, "expression"),
            path.call(print2, "typeAnnotation"),
            ")"
          ]);
        case "TypeParameterDeclaration":
        case "TypeParameterInstantiation":
          return (0, lines_1.concat)([
            "<",
            (0, lines_1.fromString)(", ").join(path.map(print2, "params")),
            ">"
          ]);
        case "Variance":
          if (n.kind === "plus") {
            return (0, lines_1.fromString)("+");
          }
          if (n.kind === "minus") {
            return (0, lines_1.fromString)("-");
          }
          return (0, lines_1.fromString)("");
        case "TypeParameter":
          if (n.variance) {
            parts.push(printVariance(path, print2));
          }
          parts.push(path.call(print2, "name"));
          if (n.bound) {
            parts.push(path.call(print2, "bound"));
          }
          if (n["default"]) {
            parts.push("=", path.call(print2, "default"));
          }
          return (0, lines_1.concat)(parts);
        case "TypeofTypeAnnotation":
          return (0, lines_1.concat)([
            (0, lines_1.fromString)("typeof ", options),
            path.call(print2, "argument")
          ]);
        case "IndexedAccessType":
        case "OptionalIndexedAccessType":
          return (0, lines_1.concat)([
            path.call(print2, "objectType"),
            n.optional ? "?." : "",
            "[",
            path.call(print2, "indexType"),
            "]"
          ]);
        case "UnionTypeAnnotation":
          return (0, lines_1.fromString)(" | ").join(path.map(print2, "types"));
        case "VoidTypeAnnotation":
          return (0, lines_1.fromString)("void", options);
        case "NullTypeAnnotation":
          return (0, lines_1.fromString)("null", options);
        case "SymbolTypeAnnotation":
          return (0, lines_1.fromString)("symbol", options);
        case "BigIntTypeAnnotation":
          return (0, lines_1.fromString)("bigint", options);
        // Type Annotations for TypeScript (when using Babylon as parser)
        case "TSType":
          throw new Error("unprintable type: " + JSON.stringify(n.type));
        case "TSNumberKeyword":
          return (0, lines_1.fromString)("number", options);
        case "TSBigIntKeyword":
          return (0, lines_1.fromString)("bigint", options);
        case "TSObjectKeyword":
          return (0, lines_1.fromString)("object", options);
        case "TSBooleanKeyword":
          return (0, lines_1.fromString)("boolean", options);
        case "TSStringKeyword":
          return (0, lines_1.fromString)("string", options);
        case "TSSymbolKeyword":
          return (0, lines_1.fromString)("symbol", options);
        case "TSAnyKeyword":
          return (0, lines_1.fromString)("any", options);
        case "TSVoidKeyword":
          return (0, lines_1.fromString)("void", options);
        case "TSIntrinsicKeyword":
          return (0, lines_1.fromString)("intrinsic", options);
        case "TSThisType":
          return (0, lines_1.fromString)("this", options);
        case "TSNullKeyword":
          return (0, lines_1.fromString)("null", options);
        case "TSUndefinedKeyword":
          return (0, lines_1.fromString)("undefined", options);
        case "TSUnknownKeyword":
          return (0, lines_1.fromString)("unknown", options);
        case "TSNeverKeyword":
          return (0, lines_1.fromString)("never", options);
        case "TSArrayType":
          return (0, lines_1.concat)([path.call(print2, "elementType"), "[]"]);
        case "TSLiteralType":
          return path.call(print2, "literal");
        case "TSUnionType":
          return (0, lines_1.fromString)(" | ").join(path.map(print2, "types"));
        case "TSIntersectionType":
          return (0, lines_1.fromString)(" & ").join(path.map(print2, "types"));
        case "TSConditionalType":
          parts.push(path.call(print2, "checkType"), " extends ", path.call(print2, "extendsType"), " ? ", path.call(print2, "trueType"), " : ", path.call(print2, "falseType"));
          return (0, lines_1.concat)(parts);
        case "TSInferType":
          parts.push("infer ", path.call(print2, "typeParameter"));
          return (0, lines_1.concat)(parts);
        case "TSParenthesizedType":
          return (0, lines_1.concat)(["(", path.call(print2, "typeAnnotation"), ")"]);
        case "TSFunctionType":
          return (0, lines_1.concat)([
            path.call(print2, "typeParameters"),
            "(",
            printFunctionParams(path, options, print2),
            ") => ",
            path.call(print2, "typeAnnotation", "typeAnnotation")
          ]);
        case "TSConstructorType":
          return (0, lines_1.concat)([
            "new ",
            path.call(print2, "typeParameters"),
            "(",
            printFunctionParams(path, options, print2),
            ") => ",
            path.call(print2, "typeAnnotation", "typeAnnotation")
          ]);
        case "TSMappedType": {
          parts.push(n.readonly ? "readonly " : "", "[", path.call(print2, "typeParameter"), "]", n.optional ? "?" : "");
          if (n.typeAnnotation) {
            parts.push(": ", path.call(print2, "typeAnnotation"), ";");
          }
          return (0, lines_1.concat)(["{\n", (0, lines_1.concat)(parts).indent(options.tabWidth), "\n}"]);
        }
        case "TSTupleType":
          return (0, lines_1.concat)([
            "[",
            (0, lines_1.fromString)(", ").join(path.map(print2, "elementTypes")),
            "]"
          ]);
        case "TSNamedTupleMember":
          parts.push(path.call(print2, "label"));
          if (n.optional) {
            parts.push("?");
          }
          parts.push(": ", path.call(print2, "elementType"));
          return (0, lines_1.concat)(parts);
        case "TSRestType":
          return (0, lines_1.concat)(["...", path.call(print2, "typeAnnotation")]);
        case "TSOptionalType":
          return (0, lines_1.concat)([path.call(print2, "typeAnnotation"), "?"]);
        case "TSIndexedAccessType":
          return (0, lines_1.concat)([
            path.call(print2, "objectType"),
            "[",
            path.call(print2, "indexType"),
            "]"
          ]);
        case "TSTypeOperator":
          return (0, lines_1.concat)([
            path.call(print2, "operator"),
            " ",
            path.call(print2, "typeAnnotation")
          ]);
        case "TSTypeLiteral": {
          var members = (0, lines_1.fromString)("\n").join(path.map(print2, "members").map(function(member) {
            if (lastNonSpaceCharacter(member) !== ";") {
              return member.concat(";");
            }
            return member;
          }));
          if (members.isEmpty()) {
            return (0, lines_1.fromString)("{}", options);
          }
          parts.push("{\n", members.indent(options.tabWidth), "\n}");
          return (0, lines_1.concat)(parts);
        }
        case "TSEnumMember":
          parts.push(path.call(print2, "id"));
          if (n.initializer) {
            parts.push(" = ", path.call(print2, "initializer"));
          }
          return (0, lines_1.concat)(parts);
        case "TSTypeQuery":
          return (0, lines_1.concat)(["typeof ", path.call(print2, "exprName")]);
        case "TSParameterProperty":
          if (n.accessibility) {
            parts.push(n.accessibility, " ");
          }
          if (n.export) {
            parts.push("export ");
          }
          if (n.static) {
            parts.push("static ");
          }
          if (n.readonly) {
            parts.push("readonly ");
          }
          parts.push(path.call(print2, "parameter"));
          return (0, lines_1.concat)(parts);
        case "TSTypeReference":
          return (0, lines_1.concat)([
            path.call(print2, "typeName"),
            path.call(print2, "typeParameters")
          ]);
        case "TSQualifiedName":
          return (0, lines_1.concat)([path.call(print2, "left"), ".", path.call(print2, "right")]);
        case "TSAsExpression":
        case "TSSatisfiesExpression": {
          var expression = path.call(print2, "expression");
          parts.push(expression, n.type === "TSSatisfiesExpression" ? " satisfies " : " as ", path.call(print2, "typeAnnotation"));
          return (0, lines_1.concat)(parts);
        }
        case "TSTypeCastExpression":
          return (0, lines_1.concat)([
            path.call(print2, "expression"),
            path.call(print2, "typeAnnotation")
          ]);
        case "TSNonNullExpression":
          return (0, lines_1.concat)([path.call(print2, "expression"), "!"]);
        case "TSTypeAnnotation":
          return (0, lines_1.concat)([": ", path.call(print2, "typeAnnotation")]);
        case "TSIndexSignature":
          return (0, lines_1.concat)([
            n.readonly ? "readonly " : "",
            "[",
            path.map(print2, "parameters"),
            "]",
            path.call(print2, "typeAnnotation")
          ]);
        case "TSPropertySignature":
          parts.push(printVariance(path, print2), n.readonly ? "readonly " : "");
          if (n.computed) {
            parts.push("[", path.call(print2, "key"), "]");
          } else {
            parts.push(path.call(print2, "key"));
          }
          parts.push(n.optional ? "?" : "", path.call(print2, "typeAnnotation"));
          return (0, lines_1.concat)(parts);
        case "TSMethodSignature":
          if (n.kind === "get") {
            parts.push("get ");
          } else if (n.kind === "set") {
            parts.push("set ");
          }
          if (n.computed) {
            parts.push("[", path.call(print2, "key"), "]");
          } else {
            parts.push(path.call(print2, "key"));
          }
          if (n.optional) {
            parts.push("?");
          }
          parts.push(path.call(print2, "typeParameters"), "(", printFunctionParams(path, options, print2), ")", path.call(print2, "typeAnnotation"));
          return (0, lines_1.concat)(parts);
        case "TSTypePredicate":
          if (n.asserts) {
            parts.push("asserts ");
          }
          parts.push(path.call(print2, "parameterName"));
          if (n.typeAnnotation) {
            parts.push(" is ", path.call(print2, "typeAnnotation", "typeAnnotation"));
          }
          return (0, lines_1.concat)(parts);
        case "TSCallSignatureDeclaration":
          return (0, lines_1.concat)([
            path.call(print2, "typeParameters"),
            "(",
            printFunctionParams(path, options, print2),
            ")",
            path.call(print2, "typeAnnotation")
          ]);
        case "TSConstructSignatureDeclaration":
          if (n.typeParameters) {
            parts.push("new", path.call(print2, "typeParameters"));
          } else {
            parts.push("new ");
          }
          parts.push("(", printFunctionParams(path, options, print2), ")", path.call(print2, "typeAnnotation"));
          return (0, lines_1.concat)(parts);
        case "TSTypeAliasDeclaration":
          return (0, lines_1.concat)([
            n.declare ? "declare " : "",
            "type ",
            path.call(print2, "id"),
            path.call(print2, "typeParameters"),
            " = ",
            path.call(print2, "typeAnnotation"),
            ";"
          ]);
        case "TSTypeParameter": {
          parts.push(path.call(print2, "name"));
          var parent = path.getParentNode(0);
          var isInMappedType = namedTypes.TSMappedType.check(parent);
          if (n.constraint) {
            parts.push(isInMappedType ? " in " : " extends ", path.call(print2, "constraint"));
          }
          if (n["default"]) {
            parts.push(" = ", path.call(print2, "default"));
          }
          return (0, lines_1.concat)(parts);
        }
        case "TSTypeAssertion": {
          parts.push("<", path.call(print2, "typeAnnotation"), "> ", path.call(print2, "expression"));
          return (0, lines_1.concat)(parts);
        }
        case "TSTypeParameterDeclaration":
        case "TSTypeParameterInstantiation":
          return (0, lines_1.concat)([
            "<",
            (0, lines_1.fromString)(", ").join(path.map(print2, "params")),
            ">"
          ]);
        case "TSEnumDeclaration": {
          parts.push(n.declare ? "declare " : "", n.const ? "const " : "", "enum ", path.call(print2, "id"));
          var memberLines = (0, lines_1.fromString)(",\n").join(path.map(print2, "members"));
          if (memberLines.isEmpty()) {
            parts.push(" {}");
          } else {
            parts.push(" {\n", memberLines.indent(options.tabWidth), "\n}");
          }
          return (0, lines_1.concat)(parts);
        }
        case "TSExpressionWithTypeArguments":
          return (0, lines_1.concat)([
            path.call(print2, "expression"),
            path.call(print2, "typeParameters")
          ]);
        case "TSInterfaceBody": {
          var lines = (0, lines_1.fromString)("\n").join(path.map(print2, "body").map(function(element) {
            if (lastNonSpaceCharacter(element) !== ";") {
              return element.concat(";");
            }
            return element;
          }));
          if (lines.isEmpty()) {
            return (0, lines_1.fromString)("{}", options);
          }
          return (0, lines_1.concat)(["{\n", lines.indent(options.tabWidth), "\n}"]);
        }
        case "TSImportType":
          parts.push("import(", path.call(print2, "argument"), ")");
          if (n.qualifier) {
            parts.push(".", path.call(print2, "qualifier"));
          }
          if (n.typeParameters) {
            parts.push(path.call(print2, "typeParameters"));
          }
          return (0, lines_1.concat)(parts);
        case "TSImportEqualsDeclaration":
          if (n.isExport) {
            parts.push("export ");
          }
          parts.push("import ", path.call(print2, "id"), " = ", path.call(print2, "moduleReference"));
          return maybeAddSemicolon((0, lines_1.concat)(parts));
        case "TSExternalModuleReference":
          return (0, lines_1.concat)(["require(", path.call(print2, "expression"), ")"]);
        case "TSModuleDeclaration": {
          var parent = path.getParentNode();
          if (parent.type === "TSModuleDeclaration") {
            parts.push(".");
          } else {
            if (n.declare) {
              parts.push("declare ");
            }
            if (!n.global) {
              var isExternal = n.id.type === "StringLiteral" || n.id.type === "Literal" && typeof n.id.value === "string";
              if (isExternal) {
                parts.push("module ");
              } else if (n.loc && n.loc.lines && n.id.loc) {
                var prefix = n.loc.lines.sliceString(n.loc.start, n.id.loc.start);
                if (prefix.indexOf("module") >= 0) {
                  parts.push("module ");
                } else {
                  parts.push("namespace ");
                }
              } else {
                parts.push("namespace ");
              }
            }
          }
          parts.push(path.call(print2, "id"));
          if (n.body) {
            parts.push(" ");
            parts.push(path.call(print2, "body"));
          }
          return (0, lines_1.concat)(parts);
        }
        case "TSModuleBlock": {
          var naked = path.call(function(bodyPath) {
            return printStatementSequence(bodyPath, options, print2);
          }, "body");
          if (naked.isEmpty()) {
            parts.push("{}");
          } else {
            parts.push("{\n", naked.indent(options.tabWidth), "\n}");
          }
          return (0, lines_1.concat)(parts);
        }
        case "TSInstantiationExpression": {
          parts.push(path.call(print2, "expression"), path.call(print2, "typeParameters"));
          return (0, lines_1.concat)(parts);
        }
        // https://github.com/babel/babel/pull/10148
        case "V8IntrinsicIdentifier":
          return (0, lines_1.concat)(["%", path.call(print2, "name")]);
        // https://github.com/babel/babel/pull/13191
        case "TopicReference":
          return (0, lines_1.fromString)("#");
        // Unhandled types below. If encountered, nodes of these types should
        // be either left alone or desugared into AST types that are fully
        // supported by the pretty-printer.
        case "ClassHeritage":
        // TODO
        case "ComprehensionBlock":
        // TODO
        case "ComprehensionExpression":
        // TODO
        case "Glob":
        // TODO
        case "GeneratorExpression":
        // TODO
        case "LetStatement":
        // TODO
        case "LetExpression":
        // TODO
        case "GraphExpression":
        // TODO
        case "GraphIndexExpression":
        // TODO
        case "XMLDefaultDeclaration":
        case "XMLAnyName":
        case "XMLQualifiedIdentifier":
        case "XMLFunctionQualifiedIdentifier":
        case "XMLAttributeSelector":
        case "XMLFilterExpression":
        case "XML":
        case "XMLElement":
        case "XMLList":
        case "XMLEscape":
        case "XMLText":
        case "XMLStartTag":
        case "XMLEndTag":
        case "XMLPointTag":
        case "XMLName":
        case "XMLAttribute":
        case "XMLCdata":
        case "XMLComment":
        case "XMLProcessingInstruction":
        default:
          debugger;
          throw new Error("unknown type: " + JSON.stringify(n.type));
      }
    }
    function printDecorators(path, printPath) {
      var parts = [];
      var node = path.getValue();
      if (node.decorators && node.decorators.length > 0 && // If the parent node is an export declaration, it will be
      // responsible for printing node.decorators.
      !util.getParentExportDeclaration(path)) {
        path.each(function(decoratorPath) {
          parts.push(printPath(decoratorPath), "\n");
        }, "decorators");
      } else if (util.isExportDeclaration(node) && node.declaration && node.declaration.decorators) {
        path.each(function(decoratorPath) {
          parts.push(printPath(decoratorPath), "\n");
        }, "declaration", "decorators");
      }
      return (0, lines_1.concat)(parts);
    }
    function printStatementSequence(path, options, print2) {
      var filtered = [];
      var sawComment = false;
      var sawStatement = false;
      path.each(function(stmtPath) {
        var stmt = stmtPath.getValue();
        if (!stmt) {
          return;
        }
        if (stmt.type === "EmptyStatement" && !(stmt.comments && stmt.comments.length > 0)) {
          return;
        }
        if (namedTypes.Comment.check(stmt)) {
          sawComment = true;
        } else if (namedTypes.Statement.check(stmt)) {
          sawStatement = true;
        } else {
          isString.assert(stmt);
        }
        filtered.push({
          node: stmt,
          printed: print2(stmtPath)
        });
      });
      if (sawComment) {
        (0, tiny_invariant_1.default)(sawStatement === false, "Comments may appear as statements in otherwise empty statement lists, but may not coexist with non-Comment nodes.");
      }
      var prevTrailingSpace = null;
      var len = filtered.length;
      var parts = [];
      filtered.forEach(function(info, i) {
        var printed = info.printed;
        var stmt = info.node;
        var multiLine = printed.length > 1;
        var notFirst = i > 0;
        var notLast = i < len - 1;
        var leadingSpace;
        var trailingSpace;
        var lines = stmt && stmt.loc && stmt.loc.lines;
        var trueLoc = lines && options.reuseWhitespace && util.getTrueLoc(stmt, lines);
        if (notFirst) {
          if (trueLoc) {
            var beforeStart = lines.skipSpaces(trueLoc.start, true);
            var beforeStartLine = beforeStart ? beforeStart.line : 1;
            var leadingGap = trueLoc.start.line - beforeStartLine;
            leadingSpace = Array(leadingGap + 1).join("\n");
          } else {
            leadingSpace = multiLine ? "\n\n" : "\n";
          }
        } else {
          leadingSpace = "";
        }
        if (notLast) {
          if (trueLoc) {
            var afterEnd = lines.skipSpaces(trueLoc.end);
            var afterEndLine = afterEnd ? afterEnd.line : lines.length;
            var trailingGap = afterEndLine - trueLoc.end.line;
            trailingSpace = Array(trailingGap + 1).join("\n");
          } else {
            trailingSpace = multiLine ? "\n\n" : "\n";
          }
        } else {
          trailingSpace = "";
        }
        parts.push(maxSpace(prevTrailingSpace, leadingSpace), printed);
        if (notLast) {
          prevTrailingSpace = trailingSpace;
        } else if (trailingSpace) {
          parts.push(trailingSpace);
        }
      });
      return (0, lines_1.concat)(parts);
    }
    function maxSpace(s1, s2) {
      if (!s1 && !s2) {
        return (0, lines_1.fromString)("");
      }
      if (!s1) {
        return (0, lines_1.fromString)(s2);
      }
      if (!s2) {
        return (0, lines_1.fromString)(s1);
      }
      var spaceLines1 = (0, lines_1.fromString)(s1);
      var spaceLines2 = (0, lines_1.fromString)(s2);
      if (spaceLines2.length > spaceLines1.length) {
        return spaceLines2;
      }
      return spaceLines1;
    }
    function printClassMemberModifiers(node) {
      var parts = [];
      if (node.declare) {
        parts.push("declare ");
      }
      var access = node.accessibility || node.access;
      if (typeof access === "string") {
        parts.push(access, " ");
      }
      if (node.static) {
        parts.push("static ");
      }
      if (node.override) {
        parts.push("override ");
      }
      if (node.abstract) {
        parts.push("abstract ");
      }
      if (node.readonly) {
        parts.push("readonly ");
      }
      return parts;
    }
    function printMethod(path, options, print2) {
      var node = path.getNode();
      var kind = node.kind;
      var parts = [];
      var nodeValue = node.value;
      if (!namedTypes.FunctionExpression.check(nodeValue)) {
        nodeValue = node;
      }
      parts.push.apply(parts, printClassMemberModifiers(node));
      if (nodeValue.async) {
        parts.push("async ");
      }
      if (nodeValue.generator) {
        parts.push("*");
      }
      if (kind === "get" || kind === "set") {
        parts.push(kind, " ");
      }
      var key = path.call(print2, "key");
      if (node.computed) {
        key = (0, lines_1.concat)(["[", key, "]"]);
      }
      parts.push(key);
      if (node.optional) {
        parts.push("?");
      }
      if (node === nodeValue) {
        parts.push(path.call(print2, "typeParameters"), "(", printFunctionParams(path, options, print2), ")", path.call(print2, "returnType"));
        if (node.body) {
          parts.push(" ", path.call(print2, "body"));
        } else {
          parts.push(";");
        }
      } else {
        parts.push(path.call(print2, "value", "typeParameters"), "(", path.call(function(valuePath) {
          return printFunctionParams(valuePath, options, print2);
        }, "value"), ")", path.call(print2, "value", "returnType"));
        if (nodeValue.body) {
          parts.push(" ", path.call(print2, "value", "body"));
        } else {
          parts.push(";");
        }
      }
      return (0, lines_1.concat)(parts);
    }
    function printArgumentsList(path, options, print2) {
      var printed = path.map(print2, "arguments");
      var trailingComma = util.isTrailingCommaEnabled(options, "parameters");
      var joined = (0, lines_1.fromString)(", ").join(printed);
      if (joined.getLineLength(1) > options.wrapColumn) {
        joined = (0, lines_1.fromString)(",\n").join(printed);
        return (0, lines_1.concat)([
          "(\n",
          joined.indent(options.tabWidth),
          trailingComma ? ",\n)" : "\n)"
        ]);
      }
      return (0, lines_1.concat)(["(", joined, ")"]);
    }
    function printFunctionParams(path, options, print2) {
      var fun = path.getValue();
      var params;
      var printed = [];
      if (fun.params) {
        params = fun.params;
        printed = path.map(print2, "params");
      } else if (fun.parameters) {
        params = fun.parameters;
        printed = path.map(print2, "parameters");
      }
      if (fun.defaults) {
        path.each(function(defExprPath) {
          var i = defExprPath.getName();
          var p = printed[i];
          if (p && defExprPath.getValue()) {
            printed[i] = (0, lines_1.concat)([p, " = ", print2(defExprPath)]);
          }
        }, "defaults");
      }
      if (fun.rest) {
        printed.push((0, lines_1.concat)(["...", path.call(print2, "rest")]));
      }
      var joined = (0, lines_1.fromString)(", ").join(printed);
      if (joined.length > 1 || joined.getLineLength(1) > options.wrapColumn) {
        joined = (0, lines_1.fromString)(",\n").join(printed);
        if (util.isTrailingCommaEnabled(options, "parameters") && !fun.rest && params[params.length - 1].type !== "RestElement") {
          joined = (0, lines_1.concat)([joined, ",\n"]);
        } else {
          joined = (0, lines_1.concat)([joined, "\n"]);
        }
        return (0, lines_1.concat)(["\n", joined.indent(options.tabWidth)]);
      }
      return joined;
    }
    function maybePrintImportAssertions(path, options, print2) {
      var n = path.getValue();
      if (n.assertions && n.assertions.length > 0) {
        var parts = [" assert {"];
        var printed = path.map(print2, "assertions");
        var flat = (0, lines_1.fromString)(", ").join(printed);
        if (flat.length > 1 || flat.getLineLength(1) > options.wrapColumn) {
          parts.push("\n", (0, lines_1.fromString)(",\n").join(printed).indent(options.tabWidth), "\n}");
        } else {
          parts.push(" ", flat, " }");
        }
        return (0, lines_1.concat)(parts);
      }
      return (0, lines_1.fromString)("");
    }
    function printExportDeclaration(path, options, print2) {
      var decl = path.getValue();
      var parts = ["export "];
      if (decl.exportKind && decl.exportKind === "type") {
        if (!decl.declaration) {
          parts.push("type ");
        }
      }
      var shouldPrintSpaces = options.objectCurlySpacing;
      namedTypes.Declaration.assert(decl);
      if (decl["default"] || decl.type === "ExportDefaultDeclaration") {
        parts.push("default ");
      }
      if (decl.declaration) {
        parts.push(path.call(print2, "declaration"));
      } else if (decl.specifiers) {
        if (decl.specifiers.length === 1 && decl.specifiers[0].type === "ExportBatchSpecifier") {
          parts.push("*");
        } else if (decl.specifiers.length === 0) {
          parts.push("{}");
        } else if (decl.specifiers[0].type === "ExportDefaultSpecifier" || decl.specifiers[0].type === "ExportNamespaceSpecifier") {
          var unbracedSpecifiers_2 = [];
          var bracedSpecifiers_2 = [];
          path.each(function(specifierPath) {
            var spec = specifierPath.getValue();
            if (spec.type === "ExportDefaultSpecifier" || spec.type === "ExportNamespaceSpecifier") {
              unbracedSpecifiers_2.push(print2(specifierPath));
            } else {
              bracedSpecifiers_2.push(print2(specifierPath));
            }
          }, "specifiers");
          unbracedSpecifiers_2.forEach(function(lines2, i) {
            if (i > 0) {
              parts.push(", ");
            }
            parts.push(lines2);
          });
          if (bracedSpecifiers_2.length > 0) {
            var lines_2 = (0, lines_1.fromString)(", ").join(bracedSpecifiers_2);
            if (lines_2.getLineLength(1) > options.wrapColumn) {
              lines_2 = (0, lines_1.concat)([
                (0, lines_1.fromString)(",\n").join(bracedSpecifiers_2).indent(options.tabWidth),
                ","
              ]);
            }
            if (unbracedSpecifiers_2.length > 0) {
              parts.push(", ");
            }
            if (lines_2.length > 1) {
              parts.push("{\n", lines_2, "\n}");
            } else if (options.objectCurlySpacing) {
              parts.push("{ ", lines_2, " }");
            } else {
              parts.push("{", lines_2, "}");
            }
          }
        } else {
          parts.push(shouldPrintSpaces ? "{ " : "{", (0, lines_1.fromString)(", ").join(path.map(print2, "specifiers")), shouldPrintSpaces ? " }" : "}");
        }
        if (decl.source) {
          parts.push(" from ", path.call(print2, "source"), maybePrintImportAssertions(path, options, print2));
        }
      }
      var lines = (0, lines_1.concat)(parts);
      if (lastNonSpaceCharacter(lines) !== ";" && !(decl.declaration && (decl.declaration.type === "FunctionDeclaration" || decl.declaration.type === "ClassDeclaration" || decl.declaration.type === "TSModuleDeclaration" || decl.declaration.type === "TSInterfaceDeclaration" || decl.declaration.type === "TSEnumDeclaration"))) {
        lines = (0, lines_1.concat)([lines, ";"]);
      }
      return lines;
    }
    function printFlowDeclaration(path, parts) {
      var parentExportDecl = util.getParentExportDeclaration(path);
      if (parentExportDecl) {
        (0, tiny_invariant_1.default)(parentExportDecl.type === "DeclareExportDeclaration");
      } else {
        parts.unshift("declare ");
      }
      return (0, lines_1.concat)(parts);
    }
    function printVariance(path, print2) {
      return path.call(function(variancePath) {
        var value = variancePath.getValue();
        if (value) {
          if (value === "plus") {
            return (0, lines_1.fromString)("+");
          }
          if (value === "minus") {
            return (0, lines_1.fromString)("-");
          }
          return print2(variancePath);
        }
        return (0, lines_1.fromString)("");
      }, "variance");
    }
    function adjustClause(clause, options) {
      if (clause.length > 1)
        return (0, lines_1.concat)([" ", clause]);
      return (0, lines_1.concat)(["\n", maybeAddSemicolon(clause).indent(options.tabWidth)]);
    }
    function lastNonSpaceCharacter(lines) {
      var pos = lines.lastPos();
      do {
        var ch = lines.charAt(pos);
        if (/\S/.test(ch))
          return ch;
      } while (lines.prevPos(pos));
    }
    function endsWithBrace(lines) {
      return lastNonSpaceCharacter(lines) === "}";
    }
    function swapQuotes(str) {
      return str.replace(/['"]/g, function(m) {
        return m === '"' ? "'" : '"';
      });
    }
    function getPossibleRaw(node) {
      var value = types2.getFieldValue(node, "value");
      var extra = types2.getFieldValue(node, "extra");
      if (extra && typeof extra.raw === "string" && value == extra.rawValue) {
        return extra.raw;
      }
      if (node.type === "Literal") {
        var raw = node.raw;
        if (typeof raw === "string" && value == raw) {
          return raw;
        }
      }
    }
    function jsSafeStringify(str) {
      return JSON.stringify(str).replace(/[\u2028\u2029]/g, function(m) {
        return "\\u" + m.charCodeAt(0).toString(16);
      });
    }
    function nodeStr(str, options) {
      isString.assert(str);
      switch (options.quote) {
        case "auto": {
          var double = jsSafeStringify(str);
          var single = swapQuotes(jsSafeStringify(swapQuotes(str)));
          return double.length > single.length ? single : double;
        }
        case "single":
          return swapQuotes(jsSafeStringify(swapQuotes(str)));
        case "double":
        default:
          return jsSafeStringify(str);
      }
    }
    function maybeAddSemicolon(lines) {
      var eoc = lastNonSpaceCharacter(lines);
      if (!eoc || "\n};".indexOf(eoc) < 0)
        return (0, lines_1.concat)([lines, ";"]);
      return lines;
    }
  }
});

// node_modules/.pnpm/recast@0.23.11/node_modules/recast/main.js
var require_main2 = __commonJS({
  "node_modules/.pnpm/recast@0.23.11/node_modules/recast/main.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.run = exports2.prettyPrint = exports2.print = exports2.visit = exports2.types = exports2.parse = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var fs_1 = tslib_1.__importDefault(require("fs"));
    var types2 = tslib_1.__importStar(require_main());
    exports2.types = types2;
    var parser_1 = require_parser();
    Object.defineProperty(exports2, "parse", { enumerable: true, get: function() {
      return parser_1.parse;
    } });
    var printer_1 = require_printer();
    var ast_types_1 = require_main();
    Object.defineProperty(exports2, "visit", { enumerable: true, get: function() {
      return ast_types_1.visit;
    } });
    function print2(node, options) {
      return new printer_1.Printer(options).print(node);
    }
    exports2.print = print2;
    function prettyPrint(node, options) {
      return new printer_1.Printer(options).printGenerically(node);
    }
    exports2.prettyPrint = prettyPrint;
    function run(transformer, options) {
      return runFile(process.argv[2], transformer, options);
    }
    exports2.run = run;
    function runFile(path, transformer, options) {
      fs_1.default.readFile(path, "utf-8", function(err, code) {
        if (err) {
          console.error(err);
          return;
        }
        runString(code, transformer, options);
      });
    }
    function defaultWriteback(output) {
      process.stdout.write(output);
    }
    function runString(code, transformer, options) {
      var writeback = options && options.writeback || defaultWriteback;
      transformer((0, parser_1.parse)(code, options), function(node) {
        writeback(print2(node, options).code);
      });
    }
  }
});

// node_modules/.pnpm/acorn@8.15.0/node_modules/acorn/dist/acorn.js
var require_acorn = __commonJS({
  "node_modules/.pnpm/acorn@8.15.0/node_modules/acorn/dist/acorn.js"(exports2, module2) {
    (function(global, factory) {
      typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.acorn = {}));
    })(exports2, function(exports3) {
      "use strict";
      var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
      var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191];
      var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65";
      var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
      var reservedWords = {
        3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
        5: "class enum extends super const export import",
        6: "enum",
        strict: "implements interface let package private protected public static yield",
        strictBind: "eval arguments"
      };
      var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
      var keywords$1 = {
        5: ecma5AndLessKeywords,
        "5module": ecma5AndLessKeywords + " export import",
        6: ecma5AndLessKeywords + " const class extends export import super"
      };
      var keywordRelationalOperator = /^in(stanceof)?$/;
      var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
      var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
      function isInAstralSet(code, set) {
        var pos = 65536;
        for (var i2 = 0; i2 < set.length; i2 += 2) {
          pos += set[i2];
          if (pos > code) {
            return false;
          }
          pos += set[i2 + 1];
          if (pos >= code) {
            return true;
          }
        }
        return false;
      }
      function isIdentifierStart(code, astral) {
        if (code < 65) {
          return code === 36;
        }
        if (code < 91) {
          return true;
        }
        if (code < 97) {
          return code === 95;
        }
        if (code < 123) {
          return true;
        }
        if (code <= 65535) {
          return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
        }
        if (astral === false) {
          return false;
        }
        return isInAstralSet(code, astralIdentifierStartCodes);
      }
      function isIdentifierChar(code, astral) {
        if (code < 48) {
          return code === 36;
        }
        if (code < 58) {
          return true;
        }
        if (code < 65) {
          return false;
        }
        if (code < 91) {
          return true;
        }
        if (code < 97) {
          return code === 95;
        }
        if (code < 123) {
          return true;
        }
        if (code <= 65535) {
          return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
        }
        if (astral === false) {
          return false;
        }
        return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
      }
      var TokenType = function TokenType2(label, conf) {
        if (conf === void 0) conf = {};
        this.label = label;
        this.keyword = conf.keyword;
        this.beforeExpr = !!conf.beforeExpr;
        this.startsExpr = !!conf.startsExpr;
        this.isLoop = !!conf.isLoop;
        this.isAssign = !!conf.isAssign;
        this.prefix = !!conf.prefix;
        this.postfix = !!conf.postfix;
        this.binop = conf.binop || null;
        this.updateContext = null;
      };
      function binop(name, prec) {
        return new TokenType(name, { beforeExpr: true, binop: prec });
      }
      var beforeExpr = { beforeExpr: true }, startsExpr = { startsExpr: true };
      var keywords = {};
      function kw(name, options) {
        if (options === void 0) options = {};
        options.keyword = name;
        return keywords[name] = new TokenType(name, options);
      }
      var types$1 = {
        num: new TokenType("num", startsExpr),
        regexp: new TokenType("regexp", startsExpr),
        string: new TokenType("string", startsExpr),
        name: new TokenType("name", startsExpr),
        privateId: new TokenType("privateId", startsExpr),
        eof: new TokenType("eof"),
        // Punctuation token types.
        bracketL: new TokenType("[", { beforeExpr: true, startsExpr: true }),
        bracketR: new TokenType("]"),
        braceL: new TokenType("{", { beforeExpr: true, startsExpr: true }),
        braceR: new TokenType("}"),
        parenL: new TokenType("(", { beforeExpr: true, startsExpr: true }),
        parenR: new TokenType(")"),
        comma: new TokenType(",", beforeExpr),
        semi: new TokenType(";", beforeExpr),
        colon: new TokenType(":", beforeExpr),
        dot: new TokenType("."),
        question: new TokenType("?", beforeExpr),
        questionDot: new TokenType("?."),
        arrow: new TokenType("=>", beforeExpr),
        template: new TokenType("template"),
        invalidTemplate: new TokenType("invalidTemplate"),
        ellipsis: new TokenType("...", beforeExpr),
        backQuote: new TokenType("`", startsExpr),
        dollarBraceL: new TokenType("${", { beforeExpr: true, startsExpr: true }),
        // Operators. These carry several kinds of properties to help the
        // parser use them properly (the presence of these properties is
        // what categorizes them as operators).
        //
        // `binop`, when present, specifies that this operator is a binary
        // operator, and will refer to its precedence.
        //
        // `prefix` and `postfix` mark the operator as a prefix or postfix
        // unary operator.
        //
        // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
        // binary operators with a very low precedence, that should result
        // in AssignmentExpression nodes.
        eq: new TokenType("=", { beforeExpr: true, isAssign: true }),
        assign: new TokenType("_=", { beforeExpr: true, isAssign: true }),
        incDec: new TokenType("++/--", { prefix: true, postfix: true, startsExpr: true }),
        prefix: new TokenType("!/~", { beforeExpr: true, prefix: true, startsExpr: true }),
        logicalOR: binop("||", 1),
        logicalAND: binop("&&", 2),
        bitwiseOR: binop("|", 3),
        bitwiseXOR: binop("^", 4),
        bitwiseAND: binop("&", 5),
        equality: binop("==/!=/===/!==", 6),
        relational: binop("</>/<=/>=", 7),
        bitShift: binop("<</>>/>>>", 8),
        plusMin: new TokenType("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }),
        modulo: binop("%", 10),
        star: binop("*", 10),
        slash: binop("/", 10),
        starstar: new TokenType("**", { beforeExpr: true }),
        coalesce: binop("??", 1),
        // Keyword token types.
        _break: kw("break"),
        _case: kw("case", beforeExpr),
        _catch: kw("catch"),
        _continue: kw("continue"),
        _debugger: kw("debugger"),
        _default: kw("default", beforeExpr),
        _do: kw("do", { isLoop: true, beforeExpr: true }),
        _else: kw("else", beforeExpr),
        _finally: kw("finally"),
        _for: kw("for", { isLoop: true }),
        _function: kw("function", startsExpr),
        _if: kw("if"),
        _return: kw("return", beforeExpr),
        _switch: kw("switch"),
        _throw: kw("throw", beforeExpr),
        _try: kw("try"),
        _var: kw("var"),
        _const: kw("const"),
        _while: kw("while", { isLoop: true }),
        _with: kw("with"),
        _new: kw("new", { beforeExpr: true, startsExpr: true }),
        _this: kw("this", startsExpr),
        _super: kw("super", startsExpr),
        _class: kw("class", startsExpr),
        _extends: kw("extends", beforeExpr),
        _export: kw("export"),
        _import: kw("import", startsExpr),
        _null: kw("null", startsExpr),
        _true: kw("true", startsExpr),
        _false: kw("false", startsExpr),
        _in: kw("in", { beforeExpr: true, binop: 7 }),
        _instanceof: kw("instanceof", { beforeExpr: true, binop: 7 }),
        _typeof: kw("typeof", { beforeExpr: true, prefix: true, startsExpr: true }),
        _void: kw("void", { beforeExpr: true, prefix: true, startsExpr: true }),
        _delete: kw("delete", { beforeExpr: true, prefix: true, startsExpr: true })
      };
      var lineBreak = /\r\n?|\n|\u2028|\u2029/;
      var lineBreakG = new RegExp(lineBreak.source, "g");
      function isNewLine(code) {
        return code === 10 || code === 13 || code === 8232 || code === 8233;
      }
      function nextLineBreak(code, from, end) {
        if (end === void 0) end = code.length;
        for (var i2 = from; i2 < end; i2++) {
          var next = code.charCodeAt(i2);
          if (isNewLine(next)) {
            return i2 < end - 1 && next === 13 && code.charCodeAt(i2 + 1) === 10 ? i2 + 2 : i2 + 1;
          }
        }
        return -1;
      }
      var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
      var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
      var ref = Object.prototype;
      var hasOwnProperty = ref.hasOwnProperty;
      var toString = ref.toString;
      var hasOwn = Object.hasOwn || function(obj, propName) {
        return hasOwnProperty.call(obj, propName);
      };
      var isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
      };
      var regexpCache = /* @__PURE__ */ Object.create(null);
      function wordsRegexp(words) {
        return regexpCache[words] || (regexpCache[words] = new RegExp("^(?:" + words.replace(/ /g, "|") + ")$"));
      }
      function codePointToString(code) {
        if (code <= 65535) {
          return String.fromCharCode(code);
        }
        code -= 65536;
        return String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
      }
      var loneSurrogate = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
      var Position = function Position2(line, col) {
        this.line = line;
        this.column = col;
      };
      Position.prototype.offset = function offset(n) {
        return new Position(this.line, this.column + n);
      };
      var SourceLocation = function SourceLocation2(p, start, end) {
        this.start = start;
        this.end = end;
        if (p.sourceFile !== null) {
          this.source = p.sourceFile;
        }
      };
      function getLineInfo(input, offset) {
        for (var line = 1, cur = 0; ; ) {
          var nextBreak = nextLineBreak(input, cur, offset);
          if (nextBreak < 0) {
            return new Position(line, offset - cur);
          }
          ++line;
          cur = nextBreak;
        }
      }
      var defaultOptions = {
        // `ecmaVersion` indicates the ECMAScript version to parse. Must be
        // either 3, 5, 6 (or 2015), 7 (2016), 8 (2017), 9 (2018), 10
        // (2019), 11 (2020), 12 (2021), 13 (2022), 14 (2023), or `"latest"`
        // (the latest version the library supports). This influences
        // support for strict mode, the set of reserved words, and support
        // for new syntax features.
        ecmaVersion: null,
        // `sourceType` indicates the mode the code should be parsed in.
        // Can be either `"script"` or `"module"`. This influences global
        // strict mode and parsing of `import` and `export` declarations.
        sourceType: "script",
        // `onInsertedSemicolon` can be a callback that will be called when
        // a semicolon is automatically inserted. It will be passed the
        // position of the inserted semicolon as an offset, and if
        // `locations` is enabled, it is given the location as a `{line,
        // column}` object as second argument.
        onInsertedSemicolon: null,
        // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
        // trailing commas.
        onTrailingComma: null,
        // By default, reserved words are only enforced if ecmaVersion >= 5.
        // Set `allowReserved` to a boolean value to explicitly turn this on
        // an off. When this option has the value "never", reserved words
        // and keywords can also not be used as property names.
        allowReserved: null,
        // When enabled, a return at the top level is not considered an
        // error.
        allowReturnOutsideFunction: false,
        // When enabled, import/export statements are not constrained to
        // appearing at the top of the program, and an import.meta expression
        // in a script isn't considered an error.
        allowImportExportEverywhere: false,
        // By default, await identifiers are allowed to appear at the top-level scope only if ecmaVersion >= 2022.
        // When enabled, await identifiers are allowed to appear at the top-level scope,
        // but they are still not allowed in non-async functions.
        allowAwaitOutsideFunction: null,
        // When enabled, super identifiers are not constrained to
        // appearing in methods and do not raise an error when they appear elsewhere.
        allowSuperOutsideMethod: null,
        // When enabled, hashbang directive in the beginning of file is
        // allowed and treated as a line comment. Enabled by default when
        // `ecmaVersion` >= 2023.
        allowHashBang: false,
        // By default, the parser will verify that private properties are
        // only used in places where they are valid and have been declared.
        // Set this to false to turn such checks off.
        checkPrivateFields: true,
        // When `locations` is on, `loc` properties holding objects with
        // `start` and `end` properties in `{line, column}` form (with
        // line being 1-based and column 0-based) will be attached to the
        // nodes.
        locations: false,
        // A function can be passed as `onToken` option, which will
        // cause Acorn to call that function with object in the same
        // format as tokens returned from `tokenizer().getToken()`. Note
        // that you are not allowed to call the parser from the
        // callback—that will corrupt its internal state.
        onToken: null,
        // A function can be passed as `onComment` option, which will
        // cause Acorn to call that function with `(block, text, start,
        // end)` parameters whenever a comment is skipped. `block` is a
        // boolean indicating whether this is a block (`/* */`) comment,
        // `text` is the content of the comment, and `start` and `end` are
        // character offsets that denote the start and end of the comment.
        // When the `locations` option is on, two more parameters are
        // passed, the full `{line, column}` locations of the start and
        // end of the comments. Note that you are not allowed to call the
        // parser from the callback—that will corrupt its internal state.
        // When this option has an array as value, objects representing the
        // comments are pushed to it.
        onComment: null,
        // Nodes have their start and end characters offsets recorded in
        // `start` and `end` properties (directly on the node, rather than
        // the `loc` object, which holds line/column data. To also add a
        // [semi-standardized][range] `range` property holding a `[start,
        // end]` array with the same numbers, set the `ranges` option to
        // `true`.
        //
        // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
        ranges: false,
        // It is possible to parse multiple files into a single AST by
        // passing the tree produced by parsing the first file as
        // `program` option in subsequent parses. This will add the
        // toplevel forms of the parsed file to the `Program` (top) node
        // of an existing parse tree.
        program: null,
        // When `locations` is on, you can pass this to record the source
        // file in every node's `loc` object.
        sourceFile: null,
        // This value, if given, is stored in every node, whether
        // `locations` is on or off.
        directSourceFile: null,
        // When enabled, parenthesized expressions are represented by
        // (non-standard) ParenthesizedExpression nodes
        preserveParens: false
      };
      var warnedAboutEcmaVersion = false;
      function getOptions(opts) {
        var options = {};
        for (var opt in defaultOptions) {
          options[opt] = opts && hasOwn(opts, opt) ? opts[opt] : defaultOptions[opt];
        }
        if (options.ecmaVersion === "latest") {
          options.ecmaVersion = 1e8;
        } else if (options.ecmaVersion == null) {
          if (!warnedAboutEcmaVersion && typeof console === "object" && console.warn) {
            warnedAboutEcmaVersion = true;
            console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.");
          }
          options.ecmaVersion = 11;
        } else if (options.ecmaVersion >= 2015) {
          options.ecmaVersion -= 2009;
        }
        if (options.allowReserved == null) {
          options.allowReserved = options.ecmaVersion < 5;
        }
        if (!opts || opts.allowHashBang == null) {
          options.allowHashBang = options.ecmaVersion >= 14;
        }
        if (isArray(options.onToken)) {
          var tokens = options.onToken;
          options.onToken = function(token) {
            return tokens.push(token);
          };
        }
        if (isArray(options.onComment)) {
          options.onComment = pushComment(options, options.onComment);
        }
        return options;
      }
      function pushComment(options, array) {
        return function(block, text, start, end, startLoc, endLoc) {
          var comment = {
            type: block ? "Block" : "Line",
            value: text,
            start,
            end
          };
          if (options.locations) {
            comment.loc = new SourceLocation(this, startLoc, endLoc);
          }
          if (options.ranges) {
            comment.range = [start, end];
          }
          array.push(comment);
        };
      }
      var SCOPE_TOP = 1, SCOPE_FUNCTION = 2, SCOPE_ASYNC = 4, SCOPE_GENERATOR = 8, SCOPE_ARROW = 16, SCOPE_SIMPLE_CATCH = 32, SCOPE_SUPER = 64, SCOPE_DIRECT_SUPER = 128, SCOPE_CLASS_STATIC_BLOCK = 256, SCOPE_CLASS_FIELD_INIT = 512, SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK;
      function functionFlags(async, generator) {
        return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0);
      }
      var BIND_NONE = 0, BIND_VAR = 1, BIND_LEXICAL = 2, BIND_FUNCTION = 3, BIND_SIMPLE_CATCH = 4, BIND_OUTSIDE = 5;
      var Parser = function Parser2(options, input, startPos) {
        this.options = options = getOptions(options);
        this.sourceFile = options.sourceFile;
        this.keywords = wordsRegexp(keywords$1[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
        var reserved = "";
        if (options.allowReserved !== true) {
          reserved = reservedWords[options.ecmaVersion >= 6 ? 6 : options.ecmaVersion === 5 ? 5 : 3];
          if (options.sourceType === "module") {
            reserved += " await";
          }
        }
        this.reservedWords = wordsRegexp(reserved);
        var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
        this.reservedWordsStrict = wordsRegexp(reservedStrict);
        this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
        this.input = String(input);
        this.containsEsc = false;
        if (startPos) {
          this.pos = startPos;
          this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
          this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
        } else {
          this.pos = this.lineStart = 0;
          this.curLine = 1;
        }
        this.type = types$1.eof;
        this.value = null;
        this.start = this.end = this.pos;
        this.startLoc = this.endLoc = this.curPosition();
        this.lastTokEndLoc = this.lastTokStartLoc = null;
        this.lastTokStart = this.lastTokEnd = this.pos;
        this.context = this.initialContext();
        this.exprAllowed = true;
        this.inModule = options.sourceType === "module";
        this.strict = this.inModule || this.strictDirective(this.pos);
        this.potentialArrowAt = -1;
        this.potentialArrowInForAwait = false;
        this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
        this.labels = [];
        this.undefinedExports = /* @__PURE__ */ Object.create(null);
        if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!") {
          this.skipLineComment(2);
        }
        this.scopeStack = [];
        this.enterScope(SCOPE_TOP);
        this.regexpState = null;
        this.privateNameStack = [];
      };
      var prototypeAccessors = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true }, canAwait: { configurable: true }, allowSuper: { configurable: true }, allowDirectSuper: { configurable: true }, treatFunctionsAsVar: { configurable: true }, allowNewDotTarget: { configurable: true }, inClassStaticBlock: { configurable: true } };
      Parser.prototype.parse = function parse3() {
        var node = this.options.program || this.startNode();
        this.nextToken();
        return this.parseTopLevel(node);
      };
      prototypeAccessors.inFunction.get = function() {
        return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
      };
      prototypeAccessors.inGenerator.get = function() {
        return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0;
      };
      prototypeAccessors.inAsync.get = function() {
        return (this.currentVarScope().flags & SCOPE_ASYNC) > 0;
      };
      prototypeAccessors.canAwait.get = function() {
        for (var i2 = this.scopeStack.length - 1; i2 >= 0; i2--) {
          var ref2 = this.scopeStack[i2];
          var flags = ref2.flags;
          if (flags & (SCOPE_CLASS_STATIC_BLOCK | SCOPE_CLASS_FIELD_INIT)) {
            return false;
          }
          if (flags & SCOPE_FUNCTION) {
            return (flags & SCOPE_ASYNC) > 0;
          }
        }
        return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
      };
      prototypeAccessors.allowSuper.get = function() {
        var ref2 = this.currentThisScope();
        var flags = ref2.flags;
        return (flags & SCOPE_SUPER) > 0 || this.options.allowSuperOutsideMethod;
      };
      prototypeAccessors.allowDirectSuper.get = function() {
        return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
      };
      prototypeAccessors.treatFunctionsAsVar.get = function() {
        return this.treatFunctionsAsVarInScope(this.currentScope());
      };
      prototypeAccessors.allowNewDotTarget.get = function() {
        for (var i2 = this.scopeStack.length - 1; i2 >= 0; i2--) {
          var ref2 = this.scopeStack[i2];
          var flags = ref2.flags;
          if (flags & (SCOPE_CLASS_STATIC_BLOCK | SCOPE_CLASS_FIELD_INIT) || flags & SCOPE_FUNCTION && !(flags & SCOPE_ARROW)) {
            return true;
          }
        }
        return false;
      };
      prototypeAccessors.inClassStaticBlock.get = function() {
        return (this.currentVarScope().flags & SCOPE_CLASS_STATIC_BLOCK) > 0;
      };
      Parser.extend = function extend() {
        var plugins = [], len = arguments.length;
        while (len--) plugins[len] = arguments[len];
        var cls = this;
        for (var i2 = 0; i2 < plugins.length; i2++) {
          cls = plugins[i2](cls);
        }
        return cls;
      };
      Parser.parse = function parse3(input, options) {
        return new this(options, input).parse();
      };
      Parser.parseExpressionAt = function parseExpressionAt2(input, pos, options) {
        var parser = new this(options, input, pos);
        parser.nextToken();
        return parser.parseExpression();
      };
      Parser.tokenizer = function tokenizer2(input, options) {
        return new this(options, input);
      };
      Object.defineProperties(Parser.prototype, prototypeAccessors);
      var pp$9 = Parser.prototype;
      var literal = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
      pp$9.strictDirective = function(start) {
        if (this.options.ecmaVersion < 5) {
          return false;
        }
        for (; ; ) {
          skipWhiteSpace.lastIndex = start;
          start += skipWhiteSpace.exec(this.input)[0].length;
          var match = literal.exec(this.input.slice(start));
          if (!match) {
            return false;
          }
          if ((match[1] || match[2]) === "use strict") {
            skipWhiteSpace.lastIndex = start + match[0].length;
            var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
            var next = this.input.charAt(end);
            return next === ";" || next === "}" || lineBreak.test(spaceAfter[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "=");
          }
          start += match[0].length;
          skipWhiteSpace.lastIndex = start;
          start += skipWhiteSpace.exec(this.input)[0].length;
          if (this.input[start] === ";") {
            start++;
          }
        }
      };
      pp$9.eat = function(type) {
        if (this.type === type) {
          this.next();
          return true;
        } else {
          return false;
        }
      };
      pp$9.isContextual = function(name) {
        return this.type === types$1.name && this.value === name && !this.containsEsc;
      };
      pp$9.eatContextual = function(name) {
        if (!this.isContextual(name)) {
          return false;
        }
        this.next();
        return true;
      };
      pp$9.expectContextual = function(name) {
        if (!this.eatContextual(name)) {
          this.unexpected();
        }
      };
      pp$9.canInsertSemicolon = function() {
        return this.type === types$1.eof || this.type === types$1.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
      };
      pp$9.insertSemicolon = function() {
        if (this.canInsertSemicolon()) {
          if (this.options.onInsertedSemicolon) {
            this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
          }
          return true;
        }
      };
      pp$9.semicolon = function() {
        if (!this.eat(types$1.semi) && !this.insertSemicolon()) {
          this.unexpected();
        }
      };
      pp$9.afterTrailingComma = function(tokType, notNext) {
        if (this.type === tokType) {
          if (this.options.onTrailingComma) {
            this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
          }
          if (!notNext) {
            this.next();
          }
          return true;
        }
      };
      pp$9.expect = function(type) {
        this.eat(type) || this.unexpected();
      };
      pp$9.unexpected = function(pos) {
        this.raise(pos != null ? pos : this.start, "Unexpected token");
      };
      var DestructuringErrors = function DestructuringErrors2() {
        this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
      };
      pp$9.checkPatternErrors = function(refDestructuringErrors, isAssign) {
        if (!refDestructuringErrors) {
          return;
        }
        if (refDestructuringErrors.trailingComma > -1) {
          this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element");
        }
        var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
        if (parens > -1) {
          this.raiseRecoverable(parens, isAssign ? "Assigning to rvalue" : "Parenthesized pattern");
        }
      };
      pp$9.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
        if (!refDestructuringErrors) {
          return false;
        }
        var shorthandAssign = refDestructuringErrors.shorthandAssign;
        var doubleProto = refDestructuringErrors.doubleProto;
        if (!andThrow) {
          return shorthandAssign >= 0 || doubleProto >= 0;
        }
        if (shorthandAssign >= 0) {
          this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns");
        }
        if (doubleProto >= 0) {
          this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property");
        }
      };
      pp$9.checkYieldAwaitInDefaultParams = function() {
        if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) {
          this.raise(this.yieldPos, "Yield expression cannot be a default value");
        }
        if (this.awaitPos) {
          this.raise(this.awaitPos, "Await expression cannot be a default value");
        }
      };
      pp$9.isSimpleAssignTarget = function(expr) {
        if (expr.type === "ParenthesizedExpression") {
          return this.isSimpleAssignTarget(expr.expression);
        }
        return expr.type === "Identifier" || expr.type === "MemberExpression";
      };
      var pp$8 = Parser.prototype;
      pp$8.parseTopLevel = function(node) {
        var exports4 = /* @__PURE__ */ Object.create(null);
        if (!node.body) {
          node.body = [];
        }
        while (this.type !== types$1.eof) {
          var stmt = this.parseStatement(null, true, exports4);
          node.body.push(stmt);
        }
        if (this.inModule) {
          for (var i2 = 0, list2 = Object.keys(this.undefinedExports); i2 < list2.length; i2 += 1) {
            var name = list2[i2];
            this.raiseRecoverable(this.undefinedExports[name].start, "Export '" + name + "' is not defined");
          }
        }
        this.adaptDirectivePrologue(node.body);
        this.next();
        node.sourceType = this.options.sourceType;
        return this.finishNode(node, "Program");
      };
      var loopLabel = { kind: "loop" }, switchLabel = { kind: "switch" };
      pp$8.isLet = function(context) {
        if (this.options.ecmaVersion < 6 || !this.isContextual("let")) {
          return false;
        }
        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
        if (nextCh === 91 || nextCh === 92) {
          return true;
        }
        if (context) {
          return false;
        }
        if (nextCh === 123 || nextCh > 55295 && nextCh < 56320) {
          return true;
        }
        if (isIdentifierStart(nextCh, true)) {
          var pos = next + 1;
          while (isIdentifierChar(nextCh = this.input.charCodeAt(pos), true)) {
            ++pos;
          }
          if (nextCh === 92 || nextCh > 55295 && nextCh < 56320) {
            return true;
          }
          var ident = this.input.slice(next, pos);
          if (!keywordRelationalOperator.test(ident)) {
            return true;
          }
        }
        return false;
      };
      pp$8.isAsyncFunction = function() {
        if (this.options.ecmaVersion < 8 || !this.isContextual("async")) {
          return false;
        }
        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length, after;
        return !lineBreak.test(this.input.slice(this.pos, next)) && this.input.slice(next, next + 8) === "function" && (next + 8 === this.input.length || !(isIdentifierChar(after = this.input.charCodeAt(next + 8)) || after > 55295 && after < 56320));
      };
      pp$8.isUsingKeyword = function(isAwaitUsing, isFor) {
        if (this.options.ecmaVersion < 17 || !this.isContextual(isAwaitUsing ? "await" : "using")) {
          return false;
        }
        skipWhiteSpace.lastIndex = this.pos;
        var skip = skipWhiteSpace.exec(this.input);
        var next = this.pos + skip[0].length;
        if (lineBreak.test(this.input.slice(this.pos, next))) {
          return false;
        }
        if (isAwaitUsing) {
          var awaitEndPos = next + 5, after;
          if (this.input.slice(next, awaitEndPos) !== "using" || awaitEndPos === this.input.length || isIdentifierChar(after = this.input.charCodeAt(awaitEndPos)) || after > 55295 && after < 56320) {
            return false;
          }
          skipWhiteSpace.lastIndex = awaitEndPos;
          var skipAfterUsing = skipWhiteSpace.exec(this.input);
          if (skipAfterUsing && lineBreak.test(this.input.slice(awaitEndPos, awaitEndPos + skipAfterUsing[0].length))) {
            return false;
          }
        }
        if (isFor) {
          var ofEndPos = next + 2, after$1;
          if (this.input.slice(next, ofEndPos) === "of") {
            if (ofEndPos === this.input.length || !isIdentifierChar(after$1 = this.input.charCodeAt(ofEndPos)) && !(after$1 > 55295 && after$1 < 56320)) {
              return false;
            }
          }
        }
        var ch = this.input.charCodeAt(next);
        return isIdentifierStart(ch, true) || ch === 92;
      };
      pp$8.isAwaitUsing = function(isFor) {
        return this.isUsingKeyword(true, isFor);
      };
      pp$8.isUsing = function(isFor) {
        return this.isUsingKeyword(false, isFor);
      };
      pp$8.parseStatement = function(context, topLevel, exports4) {
        var starttype = this.type, node = this.startNode(), kind;
        if (this.isLet(context)) {
          starttype = types$1._var;
          kind = "let";
        }
        switch (starttype) {
          case types$1._break:
          case types$1._continue:
            return this.parseBreakContinueStatement(node, starttype.keyword);
          case types$1._debugger:
            return this.parseDebuggerStatement(node);
          case types$1._do:
            return this.parseDoStatement(node);
          case types$1._for:
            return this.parseForStatement(node);
          case types$1._function:
            if (context && (this.strict || context !== "if" && context !== "label") && this.options.ecmaVersion >= 6) {
              this.unexpected();
            }
            return this.parseFunctionStatement(node, false, !context);
          case types$1._class:
            if (context) {
              this.unexpected();
            }
            return this.parseClass(node, true);
          case types$1._if:
            return this.parseIfStatement(node);
          case types$1._return:
            return this.parseReturnStatement(node);
          case types$1._switch:
            return this.parseSwitchStatement(node);
          case types$1._throw:
            return this.parseThrowStatement(node);
          case types$1._try:
            return this.parseTryStatement(node);
          case types$1._const:
          case types$1._var:
            kind = kind || this.value;
            if (context && kind !== "var") {
              this.unexpected();
            }
            return this.parseVarStatement(node, kind);
          case types$1._while:
            return this.parseWhileStatement(node);
          case types$1._with:
            return this.parseWithStatement(node);
          case types$1.braceL:
            return this.parseBlock(true, node);
          case types$1.semi:
            return this.parseEmptyStatement(node);
          case types$1._export:
          case types$1._import:
            if (this.options.ecmaVersion > 10 && starttype === types$1._import) {
              skipWhiteSpace.lastIndex = this.pos;
              var skip = skipWhiteSpace.exec(this.input);
              var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
              if (nextCh === 40 || nextCh === 46) {
                return this.parseExpressionStatement(node, this.parseExpression());
              }
            }
            if (!this.options.allowImportExportEverywhere) {
              if (!topLevel) {
                this.raise(this.start, "'import' and 'export' may only appear at the top level");
              }
              if (!this.inModule) {
                this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
              }
            }
            return starttype === types$1._import ? this.parseImport(node) : this.parseExport(node, exports4);
          // If the statement does not start with a statement keyword or a
          // brace, it's an ExpressionStatement or LabeledStatement. We
          // simply start parsing an expression, and afterwards, if the
          // next token is a colon and the expression was a simple
          // Identifier node, we switch to interpreting it as a label.
          default:
            if (this.isAsyncFunction()) {
              if (context) {
                this.unexpected();
              }
              this.next();
              return this.parseFunctionStatement(node, true, !context);
            }
            var usingKind = this.isAwaitUsing(false) ? "await using" : this.isUsing(false) ? "using" : null;
            if (usingKind) {
              if (topLevel && this.options.sourceType === "script") {
                this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script`");
              }
              if (usingKind === "await using") {
                if (!this.canAwait) {
                  this.raise(this.start, "Await using cannot appear outside of async function");
                }
                this.next();
              }
              this.next();
              this.parseVar(node, false, usingKind);
              this.semicolon();
              return this.finishNode(node, "VariableDeclaration");
            }
            var maybeName = this.value, expr = this.parseExpression();
            if (starttype === types$1.name && expr.type === "Identifier" && this.eat(types$1.colon)) {
              return this.parseLabeledStatement(node, maybeName, expr, context);
            } else {
              return this.parseExpressionStatement(node, expr);
            }
        }
      };
      pp$8.parseBreakContinueStatement = function(node, keyword) {
        var isBreak = keyword === "break";
        this.next();
        if (this.eat(types$1.semi) || this.insertSemicolon()) {
          node.label = null;
        } else if (this.type !== types$1.name) {
          this.unexpected();
        } else {
          node.label = this.parseIdent();
          this.semicolon();
        }
        var i2 = 0;
        for (; i2 < this.labels.length; ++i2) {
          var lab = this.labels[i2];
          if (node.label == null || lab.name === node.label.name) {
            if (lab.kind != null && (isBreak || lab.kind === "loop")) {
              break;
            }
            if (node.label && isBreak) {
              break;
            }
          }
        }
        if (i2 === this.labels.length) {
          this.raise(node.start, "Unsyntactic " + keyword);
        }
        return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
      };
      pp$8.parseDebuggerStatement = function(node) {
        this.next();
        this.semicolon();
        return this.finishNode(node, "DebuggerStatement");
      };
      pp$8.parseDoStatement = function(node) {
        this.next();
        this.labels.push(loopLabel);
        node.body = this.parseStatement("do");
        this.labels.pop();
        this.expect(types$1._while);
        node.test = this.parseParenExpression();
        if (this.options.ecmaVersion >= 6) {
          this.eat(types$1.semi);
        } else {
          this.semicolon();
        }
        return this.finishNode(node, "DoWhileStatement");
      };
      pp$8.parseForStatement = function(node) {
        this.next();
        var awaitAt = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
        this.labels.push(loopLabel);
        this.enterScope(0);
        this.expect(types$1.parenL);
        if (this.type === types$1.semi) {
          if (awaitAt > -1) {
            this.unexpected(awaitAt);
          }
          return this.parseFor(node, null);
        }
        var isLet = this.isLet();
        if (this.type === types$1._var || this.type === types$1._const || isLet) {
          var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
          this.next();
          this.parseVar(init$1, true, kind);
          this.finishNode(init$1, "VariableDeclaration");
          return this.parseForAfterInit(node, init$1, awaitAt);
        }
        var startsWithLet = this.isContextual("let"), isForOf = false;
        var usingKind = this.isUsing(true) ? "using" : this.isAwaitUsing(true) ? "await using" : null;
        if (usingKind) {
          var init$2 = this.startNode();
          this.next();
          if (usingKind === "await using") {
            this.next();
          }
          this.parseVar(init$2, true, usingKind);
          this.finishNode(init$2, "VariableDeclaration");
          return this.parseForAfterInit(node, init$2, awaitAt);
        }
        var containsEsc = this.containsEsc;
        var refDestructuringErrors = new DestructuringErrors();
        var initPos = this.start;
        var init = awaitAt > -1 ? this.parseExprSubscripts(refDestructuringErrors, "await") : this.parseExpression(true, refDestructuringErrors);
        if (this.type === types$1._in || (isForOf = this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
          if (awaitAt > -1) {
            if (this.type === types$1._in) {
              this.unexpected(awaitAt);
            }
            node.await = true;
          } else if (isForOf && this.options.ecmaVersion >= 8) {
            if (init.start === initPos && !containsEsc && init.type === "Identifier" && init.name === "async") {
              this.unexpected();
            } else if (this.options.ecmaVersion >= 9) {
              node.await = false;
            }
          }
          if (startsWithLet && isForOf) {
            this.raise(init.start, "The left-hand side of a for-of loop may not start with 'let'.");
          }
          this.toAssignable(init, false, refDestructuringErrors);
          this.checkLValPattern(init);
          return this.parseForIn(node, init);
        } else {
          this.checkExpressionErrors(refDestructuringErrors, true);
        }
        if (awaitAt > -1) {
          this.unexpected(awaitAt);
        }
        return this.parseFor(node, init);
      };
      pp$8.parseForAfterInit = function(node, init, awaitAt) {
        if ((this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && init.declarations.length === 1) {
          if (this.options.ecmaVersion >= 9) {
            if (this.type === types$1._in) {
              if (awaitAt > -1) {
                this.unexpected(awaitAt);
              }
            } else {
              node.await = awaitAt > -1;
            }
          }
          return this.parseForIn(node, init);
        }
        if (awaitAt > -1) {
          this.unexpected(awaitAt);
        }
        return this.parseFor(node, init);
      };
      pp$8.parseFunctionStatement = function(node, isAsync, declarationPosition) {
        this.next();
        return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync);
      };
      pp$8.parseIfStatement = function(node) {
        this.next();
        node.test = this.parseParenExpression();
        node.consequent = this.parseStatement("if");
        node.alternate = this.eat(types$1._else) ? this.parseStatement("if") : null;
        return this.finishNode(node, "IfStatement");
      };
      pp$8.parseReturnStatement = function(node) {
        if (!this.inFunction && !this.options.allowReturnOutsideFunction) {
          this.raise(this.start, "'return' outside of function");
        }
        this.next();
        if (this.eat(types$1.semi) || this.insertSemicolon()) {
          node.argument = null;
        } else {
          node.argument = this.parseExpression();
          this.semicolon();
        }
        return this.finishNode(node, "ReturnStatement");
      };
      pp$8.parseSwitchStatement = function(node) {
        this.next();
        node.discriminant = this.parseParenExpression();
        node.cases = [];
        this.expect(types$1.braceL);
        this.labels.push(switchLabel);
        this.enterScope(0);
        var cur;
        for (var sawDefault = false; this.type !== types$1.braceR; ) {
          if (this.type === types$1._case || this.type === types$1._default) {
            var isCase = this.type === types$1._case;
            if (cur) {
              this.finishNode(cur, "SwitchCase");
            }
            node.cases.push(cur = this.startNode());
            cur.consequent = [];
            this.next();
            if (isCase) {
              cur.test = this.parseExpression();
            } else {
              if (sawDefault) {
                this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
              }
              sawDefault = true;
              cur.test = null;
            }
            this.expect(types$1.colon);
          } else {
            if (!cur) {
              this.unexpected();
            }
            cur.consequent.push(this.parseStatement(null));
          }
        }
        this.exitScope();
        if (cur) {
          this.finishNode(cur, "SwitchCase");
        }
        this.next();
        this.labels.pop();
        return this.finishNode(node, "SwitchStatement");
      };
      pp$8.parseThrowStatement = function(node) {
        this.next();
        if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) {
          this.raise(this.lastTokEnd, "Illegal newline after throw");
        }
        node.argument = this.parseExpression();
        this.semicolon();
        return this.finishNode(node, "ThrowStatement");
      };
      var empty$1 = [];
      pp$8.parseCatchClauseParam = function() {
        var param = this.parseBindingAtom();
        var simple = param.type === "Identifier";
        this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
        this.checkLValPattern(param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
        this.expect(types$1.parenR);
        return param;
      };
      pp$8.parseTryStatement = function(node) {
        this.next();
        node.block = this.parseBlock();
        node.handler = null;
        if (this.type === types$1._catch) {
          var clause = this.startNode();
          this.next();
          if (this.eat(types$1.parenL)) {
            clause.param = this.parseCatchClauseParam();
          } else {
            if (this.options.ecmaVersion < 10) {
              this.unexpected();
            }
            clause.param = null;
            this.enterScope(0);
          }
          clause.body = this.parseBlock(false);
          this.exitScope();
          node.handler = this.finishNode(clause, "CatchClause");
        }
        node.finalizer = this.eat(types$1._finally) ? this.parseBlock() : null;
        if (!node.handler && !node.finalizer) {
          this.raise(node.start, "Missing catch or finally clause");
        }
        return this.finishNode(node, "TryStatement");
      };
      pp$8.parseVarStatement = function(node, kind, allowMissingInitializer) {
        this.next();
        this.parseVar(node, false, kind, allowMissingInitializer);
        this.semicolon();
        return this.finishNode(node, "VariableDeclaration");
      };
      pp$8.parseWhileStatement = function(node) {
        this.next();
        node.test = this.parseParenExpression();
        this.labels.push(loopLabel);
        node.body = this.parseStatement("while");
        this.labels.pop();
        return this.finishNode(node, "WhileStatement");
      };
      pp$8.parseWithStatement = function(node) {
        if (this.strict) {
          this.raise(this.start, "'with' in strict mode");
        }
        this.next();
        node.object = this.parseParenExpression();
        node.body = this.parseStatement("with");
        return this.finishNode(node, "WithStatement");
      };
      pp$8.parseEmptyStatement = function(node) {
        this.next();
        return this.finishNode(node, "EmptyStatement");
      };
      pp$8.parseLabeledStatement = function(node, maybeName, expr, context) {
        for (var i$1 = 0, list2 = this.labels; i$1 < list2.length; i$1 += 1) {
          var label = list2[i$1];
          if (label.name === maybeName) {
            this.raise(expr.start, "Label '" + maybeName + "' is already declared");
          }
        }
        var kind = this.type.isLoop ? "loop" : this.type === types$1._switch ? "switch" : null;
        for (var i2 = this.labels.length - 1; i2 >= 0; i2--) {
          var label$1 = this.labels[i2];
          if (label$1.statementStart === node.start) {
            label$1.statementStart = this.start;
            label$1.kind = kind;
          } else {
            break;
          }
        }
        this.labels.push({ name: maybeName, kind, statementStart: this.start });
        node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
        this.labels.pop();
        node.label = expr;
        return this.finishNode(node, "LabeledStatement");
      };
      pp$8.parseExpressionStatement = function(node, expr) {
        node.expression = expr;
        this.semicolon();
        return this.finishNode(node, "ExpressionStatement");
      };
      pp$8.parseBlock = function(createNewLexicalScope, node, exitStrict) {
        if (createNewLexicalScope === void 0) createNewLexicalScope = true;
        if (node === void 0) node = this.startNode();
        node.body = [];
        this.expect(types$1.braceL);
        if (createNewLexicalScope) {
          this.enterScope(0);
        }
        while (this.type !== types$1.braceR) {
          var stmt = this.parseStatement(null);
          node.body.push(stmt);
        }
        if (exitStrict) {
          this.strict = false;
        }
        this.next();
        if (createNewLexicalScope) {
          this.exitScope();
        }
        return this.finishNode(node, "BlockStatement");
      };
      pp$8.parseFor = function(node, init) {
        node.init = init;
        this.expect(types$1.semi);
        node.test = this.type === types$1.semi ? null : this.parseExpression();
        this.expect(types$1.semi);
        node.update = this.type === types$1.parenR ? null : this.parseExpression();
        this.expect(types$1.parenR);
        node.body = this.parseStatement("for");
        this.exitScope();
        this.labels.pop();
        return this.finishNode(node, "ForStatement");
      };
      pp$8.parseForIn = function(node, init) {
        var isForIn = this.type === types$1._in;
        this.next();
        if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.options.ecmaVersion < 8 || this.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
          this.raise(
            init.start,
            (isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
          );
        }
        node.left = init;
        node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
        this.expect(types$1.parenR);
        node.body = this.parseStatement("for");
        this.exitScope();
        this.labels.pop();
        return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
      };
      pp$8.parseVar = function(node, isFor, kind, allowMissingInitializer) {
        node.declarations = [];
        node.kind = kind;
        for (; ; ) {
          var decl = this.startNode();
          this.parseVarId(decl, kind);
          if (this.eat(types$1.eq)) {
            decl.init = this.parseMaybeAssign(isFor);
          } else if (!allowMissingInitializer && kind === "const" && !(this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
            this.unexpected();
          } else if (!allowMissingInitializer && (kind === "using" || kind === "await using") && this.options.ecmaVersion >= 17 && this.type !== types$1._in && !this.isContextual("of")) {
            this.raise(this.lastTokEnd, "Missing initializer in " + kind + " declaration");
          } else if (!allowMissingInitializer && decl.id.type !== "Identifier" && !(isFor && (this.type === types$1._in || this.isContextual("of")))) {
            this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
          } else {
            decl.init = null;
          }
          node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
          if (!this.eat(types$1.comma)) {
            break;
          }
        }
        return node;
      };
      pp$8.parseVarId = function(decl, kind) {
        decl.id = kind === "using" || kind === "await using" ? this.parseIdent() : this.parseBindingAtom();
        this.checkLValPattern(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
      };
      var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;
      pp$8.parseFunction = function(node, statement, allowExpressionBody, isAsync, forInit) {
        this.initFunction(node);
        if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
          if (this.type === types$1.star && statement & FUNC_HANGING_STATEMENT) {
            this.unexpected();
          }
          node.generator = this.eat(types$1.star);
        }
        if (this.options.ecmaVersion >= 8) {
          node.async = !!isAsync;
        }
        if (statement & FUNC_STATEMENT) {
          node.id = statement & FUNC_NULLABLE_ID && this.type !== types$1.name ? null : this.parseIdent();
          if (node.id && !(statement & FUNC_HANGING_STATEMENT)) {
            this.checkLValSimple(node.id, this.strict || node.generator || node.async ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION);
          }
        }
        var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
        this.yieldPos = 0;
        this.awaitPos = 0;
        this.awaitIdentPos = 0;
        this.enterScope(functionFlags(node.async, node.generator));
        if (!(statement & FUNC_STATEMENT)) {
          node.id = this.type === types$1.name ? this.parseIdent() : null;
        }
        this.parseFunctionParams(node);
        this.parseFunctionBody(node, allowExpressionBody, false, forInit);
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.finishNode(node, statement & FUNC_STATEMENT ? "FunctionDeclaration" : "FunctionExpression");
      };
      pp$8.parseFunctionParams = function(node) {
        this.expect(types$1.parenL);
        node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
        this.checkYieldAwaitInDefaultParams();
      };
      pp$8.parseClass = function(node, isStatement) {
        this.next();
        var oldStrict = this.strict;
        this.strict = true;
        this.parseClassId(node, isStatement);
        this.parseClassSuper(node);
        var privateNameMap = this.enterClassBody();
        var classBody = this.startNode();
        var hadConstructor = false;
        classBody.body = [];
        this.expect(types$1.braceL);
        while (this.type !== types$1.braceR) {
          var element = this.parseClassElement(node.superClass !== null);
          if (element) {
            classBody.body.push(element);
            if (element.type === "MethodDefinition" && element.kind === "constructor") {
              if (hadConstructor) {
                this.raiseRecoverable(element.start, "Duplicate constructor in the same class");
              }
              hadConstructor = true;
            } else if (element.key && element.key.type === "PrivateIdentifier" && isPrivateNameConflicted(privateNameMap, element)) {
              this.raiseRecoverable(element.key.start, "Identifier '#" + element.key.name + "' has already been declared");
            }
          }
        }
        this.strict = oldStrict;
        this.next();
        node.body = this.finishNode(classBody, "ClassBody");
        this.exitClassBody();
        return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
      };
      pp$8.parseClassElement = function(constructorAllowsSuper) {
        if (this.eat(types$1.semi)) {
          return null;
        }
        var ecmaVersion2 = this.options.ecmaVersion;
        var node = this.startNode();
        var keyName = "";
        var isGenerator = false;
        var isAsync = false;
        var kind = "method";
        var isStatic = false;
        if (this.eatContextual("static")) {
          if (ecmaVersion2 >= 13 && this.eat(types$1.braceL)) {
            this.parseClassStaticBlock(node);
            return node;
          }
          if (this.isClassElementNameStart() || this.type === types$1.star) {
            isStatic = true;
          } else {
            keyName = "static";
          }
        }
        node.static = isStatic;
        if (!keyName && ecmaVersion2 >= 8 && this.eatContextual("async")) {
          if ((this.isClassElementNameStart() || this.type === types$1.star) && !this.canInsertSemicolon()) {
            isAsync = true;
          } else {
            keyName = "async";
          }
        }
        if (!keyName && (ecmaVersion2 >= 9 || !isAsync) && this.eat(types$1.star)) {
          isGenerator = true;
        }
        if (!keyName && !isAsync && !isGenerator) {
          var lastValue = this.value;
          if (this.eatContextual("get") || this.eatContextual("set")) {
            if (this.isClassElementNameStart()) {
              kind = lastValue;
            } else {
              keyName = lastValue;
            }
          }
        }
        if (keyName) {
          node.computed = false;
          node.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc);
          node.key.name = keyName;
          this.finishNode(node.key, "Identifier");
        } else {
          this.parseClassElementName(node);
        }
        if (ecmaVersion2 < 13 || this.type === types$1.parenL || kind !== "method" || isGenerator || isAsync) {
          var isConstructor = !node.static && checkKeyName(node, "constructor");
          var allowsDirectSuper = isConstructor && constructorAllowsSuper;
          if (isConstructor && kind !== "method") {
            this.raise(node.key.start, "Constructor can't have get/set modifier");
          }
          node.kind = isConstructor ? "constructor" : kind;
          this.parseClassMethod(node, isGenerator, isAsync, allowsDirectSuper);
        } else {
          this.parseClassField(node);
        }
        return node;
      };
      pp$8.isClassElementNameStart = function() {
        return this.type === types$1.name || this.type === types$1.privateId || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword;
      };
      pp$8.parseClassElementName = function(element) {
        if (this.type === types$1.privateId) {
          if (this.value === "constructor") {
            this.raise(this.start, "Classes can't have an element named '#constructor'");
          }
          element.computed = false;
          element.key = this.parsePrivateIdent();
        } else {
          this.parsePropertyName(element);
        }
      };
      pp$8.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
        var key = method.key;
        if (method.kind === "constructor") {
          if (isGenerator) {
            this.raise(key.start, "Constructor can't be a generator");
          }
          if (isAsync) {
            this.raise(key.start, "Constructor can't be an async method");
          }
        } else if (method.static && checkKeyName(method, "prototype")) {
          this.raise(key.start, "Classes may not have a static property named prototype");
        }
        var value = method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
        if (method.kind === "get" && value.params.length !== 0) {
          this.raiseRecoverable(value.start, "getter should have no params");
        }
        if (method.kind === "set" && value.params.length !== 1) {
          this.raiseRecoverable(value.start, "setter should have exactly one param");
        }
        if (method.kind === "set" && value.params[0].type === "RestElement") {
          this.raiseRecoverable(value.params[0].start, "Setter cannot use rest params");
        }
        return this.finishNode(method, "MethodDefinition");
      };
      pp$8.parseClassField = function(field) {
        if (checkKeyName(field, "constructor")) {
          this.raise(field.key.start, "Classes can't have a field named 'constructor'");
        } else if (field.static && checkKeyName(field, "prototype")) {
          this.raise(field.key.start, "Classes can't have a static field named 'prototype'");
        }
        if (this.eat(types$1.eq)) {
          this.enterScope(SCOPE_CLASS_FIELD_INIT | SCOPE_SUPER);
          field.value = this.parseMaybeAssign();
          this.exitScope();
        } else {
          field.value = null;
        }
        this.semicolon();
        return this.finishNode(field, "PropertyDefinition");
      };
      pp$8.parseClassStaticBlock = function(node) {
        node.body = [];
        var oldLabels = this.labels;
        this.labels = [];
        this.enterScope(SCOPE_CLASS_STATIC_BLOCK | SCOPE_SUPER);
        while (this.type !== types$1.braceR) {
          var stmt = this.parseStatement(null);
          node.body.push(stmt);
        }
        this.next();
        this.exitScope();
        this.labels = oldLabels;
        return this.finishNode(node, "StaticBlock");
      };
      pp$8.parseClassId = function(node, isStatement) {
        if (this.type === types$1.name) {
          node.id = this.parseIdent();
          if (isStatement) {
            this.checkLValSimple(node.id, BIND_LEXICAL, false);
          }
        } else {
          if (isStatement === true) {
            this.unexpected();
          }
          node.id = null;
        }
      };
      pp$8.parseClassSuper = function(node) {
        node.superClass = this.eat(types$1._extends) ? this.parseExprSubscripts(null, false) : null;
      };
      pp$8.enterClassBody = function() {
        var element = { declared: /* @__PURE__ */ Object.create(null), used: [] };
        this.privateNameStack.push(element);
        return element.declared;
      };
      pp$8.exitClassBody = function() {
        var ref2 = this.privateNameStack.pop();
        var declared = ref2.declared;
        var used = ref2.used;
        if (!this.options.checkPrivateFields) {
          return;
        }
        var len = this.privateNameStack.length;
        var parent = len === 0 ? null : this.privateNameStack[len - 1];
        for (var i2 = 0; i2 < used.length; ++i2) {
          var id = used[i2];
          if (!hasOwn(declared, id.name)) {
            if (parent) {
              parent.used.push(id);
            } else {
              this.raiseRecoverable(id.start, "Private field '#" + id.name + "' must be declared in an enclosing class");
            }
          }
        }
      };
      function isPrivateNameConflicted(privateNameMap, element) {
        var name = element.key.name;
        var curr = privateNameMap[name];
        var next = "true";
        if (element.type === "MethodDefinition" && (element.kind === "get" || element.kind === "set")) {
          next = (element.static ? "s" : "i") + element.kind;
        }
        if (curr === "iget" && next === "iset" || curr === "iset" && next === "iget" || curr === "sget" && next === "sset" || curr === "sset" && next === "sget") {
          privateNameMap[name] = "true";
          return false;
        } else if (!curr) {
          privateNameMap[name] = next;
          return false;
        } else {
          return true;
        }
      }
      function checkKeyName(node, name) {
        var computed = node.computed;
        var key = node.key;
        return !computed && (key.type === "Identifier" && key.name === name || key.type === "Literal" && key.value === name);
      }
      pp$8.parseExportAllDeclaration = function(node, exports4) {
        if (this.options.ecmaVersion >= 11) {
          if (this.eatContextual("as")) {
            node.exported = this.parseModuleExportName();
            this.checkExport(exports4, node.exported, this.lastTokStart);
          } else {
            node.exported = null;
          }
        }
        this.expectContextual("from");
        if (this.type !== types$1.string) {
          this.unexpected();
        }
        node.source = this.parseExprAtom();
        if (this.options.ecmaVersion >= 16) {
          node.attributes = this.parseWithClause();
        }
        this.semicolon();
        return this.finishNode(node, "ExportAllDeclaration");
      };
      pp$8.parseExport = function(node, exports4) {
        this.next();
        if (this.eat(types$1.star)) {
          return this.parseExportAllDeclaration(node, exports4);
        }
        if (this.eat(types$1._default)) {
          this.checkExport(exports4, "default", this.lastTokStart);
          node.declaration = this.parseExportDefaultDeclaration();
          return this.finishNode(node, "ExportDefaultDeclaration");
        }
        if (this.shouldParseExportStatement()) {
          node.declaration = this.parseExportDeclaration(node);
          if (node.declaration.type === "VariableDeclaration") {
            this.checkVariableExport(exports4, node.declaration.declarations);
          } else {
            this.checkExport(exports4, node.declaration.id, node.declaration.id.start);
          }
          node.specifiers = [];
          node.source = null;
          if (this.options.ecmaVersion >= 16) {
            node.attributes = [];
          }
        } else {
          node.declaration = null;
          node.specifiers = this.parseExportSpecifiers(exports4);
          if (this.eatContextual("from")) {
            if (this.type !== types$1.string) {
              this.unexpected();
            }
            node.source = this.parseExprAtom();
            if (this.options.ecmaVersion >= 16) {
              node.attributes = this.parseWithClause();
            }
          } else {
            for (var i2 = 0, list2 = node.specifiers; i2 < list2.length; i2 += 1) {
              var spec = list2[i2];
              this.checkUnreserved(spec.local);
              this.checkLocalExport(spec.local);
              if (spec.local.type === "Literal") {
                this.raise(spec.local.start, "A string literal cannot be used as an exported binding without `from`.");
              }
            }
            node.source = null;
            if (this.options.ecmaVersion >= 16) {
              node.attributes = [];
            }
          }
          this.semicolon();
        }
        return this.finishNode(node, "ExportNamedDeclaration");
      };
      pp$8.parseExportDeclaration = function(node) {
        return this.parseStatement(null);
      };
      pp$8.parseExportDefaultDeclaration = function() {
        var isAsync;
        if (this.type === types$1._function || (isAsync = this.isAsyncFunction())) {
          var fNode = this.startNode();
          this.next();
          if (isAsync) {
            this.next();
          }
          return this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
        } else if (this.type === types$1._class) {
          var cNode = this.startNode();
          return this.parseClass(cNode, "nullableID");
        } else {
          var declaration = this.parseMaybeAssign();
          this.semicolon();
          return declaration;
        }
      };
      pp$8.checkExport = function(exports4, name, pos) {
        if (!exports4) {
          return;
        }
        if (typeof name !== "string") {
          name = name.type === "Identifier" ? name.name : name.value;
        }
        if (hasOwn(exports4, name)) {
          this.raiseRecoverable(pos, "Duplicate export '" + name + "'");
        }
        exports4[name] = true;
      };
      pp$8.checkPatternExport = function(exports4, pat) {
        var type = pat.type;
        if (type === "Identifier") {
          this.checkExport(exports4, pat, pat.start);
        } else if (type === "ObjectPattern") {
          for (var i2 = 0, list2 = pat.properties; i2 < list2.length; i2 += 1) {
            var prop = list2[i2];
            this.checkPatternExport(exports4, prop);
          }
        } else if (type === "ArrayPattern") {
          for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
            var elt = list$1[i$1];
            if (elt) {
              this.checkPatternExport(exports4, elt);
            }
          }
        } else if (type === "Property") {
          this.checkPatternExport(exports4, pat.value);
        } else if (type === "AssignmentPattern") {
          this.checkPatternExport(exports4, pat.left);
        } else if (type === "RestElement") {
          this.checkPatternExport(exports4, pat.argument);
        }
      };
      pp$8.checkVariableExport = function(exports4, decls) {
        if (!exports4) {
          return;
        }
        for (var i2 = 0, list2 = decls; i2 < list2.length; i2 += 1) {
          var decl = list2[i2];
          this.checkPatternExport(exports4, decl.id);
        }
      };
      pp$8.shouldParseExportStatement = function() {
        return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
      };
      pp$8.parseExportSpecifier = function(exports4) {
        var node = this.startNode();
        node.local = this.parseModuleExportName();
        node.exported = this.eatContextual("as") ? this.parseModuleExportName() : node.local;
        this.checkExport(
          exports4,
          node.exported,
          node.exported.start
        );
        return this.finishNode(node, "ExportSpecifier");
      };
      pp$8.parseExportSpecifiers = function(exports4) {
        var nodes = [], first = true;
        this.expect(types$1.braceL);
        while (!this.eat(types$1.braceR)) {
          if (!first) {
            this.expect(types$1.comma);
            if (this.afterTrailingComma(types$1.braceR)) {
              break;
            }
          } else {
            first = false;
          }
          nodes.push(this.parseExportSpecifier(exports4));
        }
        return nodes;
      };
      pp$8.parseImport = function(node) {
        this.next();
        if (this.type === types$1.string) {
          node.specifiers = empty$1;
          node.source = this.parseExprAtom();
        } else {
          node.specifiers = this.parseImportSpecifiers();
          this.expectContextual("from");
          node.source = this.type === types$1.string ? this.parseExprAtom() : this.unexpected();
        }
        if (this.options.ecmaVersion >= 16) {
          node.attributes = this.parseWithClause();
        }
        this.semicolon();
        return this.finishNode(node, "ImportDeclaration");
      };
      pp$8.parseImportSpecifier = function() {
        var node = this.startNode();
        node.imported = this.parseModuleExportName();
        if (this.eatContextual("as")) {
          node.local = this.parseIdent();
        } else {
          this.checkUnreserved(node.imported);
          node.local = node.imported;
        }
        this.checkLValSimple(node.local, BIND_LEXICAL);
        return this.finishNode(node, "ImportSpecifier");
      };
      pp$8.parseImportDefaultSpecifier = function() {
        var node = this.startNode();
        node.local = this.parseIdent();
        this.checkLValSimple(node.local, BIND_LEXICAL);
        return this.finishNode(node, "ImportDefaultSpecifier");
      };
      pp$8.parseImportNamespaceSpecifier = function() {
        var node = this.startNode();
        this.next();
        this.expectContextual("as");
        node.local = this.parseIdent();
        this.checkLValSimple(node.local, BIND_LEXICAL);
        return this.finishNode(node, "ImportNamespaceSpecifier");
      };
      pp$8.parseImportSpecifiers = function() {
        var nodes = [], first = true;
        if (this.type === types$1.name) {
          nodes.push(this.parseImportDefaultSpecifier());
          if (!this.eat(types$1.comma)) {
            return nodes;
          }
        }
        if (this.type === types$1.star) {
          nodes.push(this.parseImportNamespaceSpecifier());
          return nodes;
        }
        this.expect(types$1.braceL);
        while (!this.eat(types$1.braceR)) {
          if (!first) {
            this.expect(types$1.comma);
            if (this.afterTrailingComma(types$1.braceR)) {
              break;
            }
          } else {
            first = false;
          }
          nodes.push(this.parseImportSpecifier());
        }
        return nodes;
      };
      pp$8.parseWithClause = function() {
        var nodes = [];
        if (!this.eat(types$1._with)) {
          return nodes;
        }
        this.expect(types$1.braceL);
        var attributeKeys = {};
        var first = true;
        while (!this.eat(types$1.braceR)) {
          if (!first) {
            this.expect(types$1.comma);
            if (this.afterTrailingComma(types$1.braceR)) {
              break;
            }
          } else {
            first = false;
          }
          var attr = this.parseImportAttribute();
          var keyName = attr.key.type === "Identifier" ? attr.key.name : attr.key.value;
          if (hasOwn(attributeKeys, keyName)) {
            this.raiseRecoverable(attr.key.start, "Duplicate attribute key '" + keyName + "'");
          }
          attributeKeys[keyName] = true;
          nodes.push(attr);
        }
        return nodes;
      };
      pp$8.parseImportAttribute = function() {
        var node = this.startNode();
        node.key = this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
        this.expect(types$1.colon);
        if (this.type !== types$1.string) {
          this.unexpected();
        }
        node.value = this.parseExprAtom();
        return this.finishNode(node, "ImportAttribute");
      };
      pp$8.parseModuleExportName = function() {
        if (this.options.ecmaVersion >= 13 && this.type === types$1.string) {
          var stringLiteral = this.parseLiteral(this.value);
          if (loneSurrogate.test(stringLiteral.value)) {
            this.raise(stringLiteral.start, "An export name cannot include a lone surrogate.");
          }
          return stringLiteral;
        }
        return this.parseIdent(true);
      };
      pp$8.adaptDirectivePrologue = function(statements) {
        for (var i2 = 0; i2 < statements.length && this.isDirectiveCandidate(statements[i2]); ++i2) {
          statements[i2].directive = statements[i2].expression.raw.slice(1, -1);
        }
      };
      pp$8.isDirectiveCandidate = function(statement) {
        return this.options.ecmaVersion >= 5 && statement.type === "ExpressionStatement" && statement.expression.type === "Literal" && typeof statement.expression.value === "string" && // Reject parenthesized strings.
        (this.input[statement.start] === '"' || this.input[statement.start] === "'");
      };
      var pp$7 = Parser.prototype;
      pp$7.toAssignable = function(node, isBinding, refDestructuringErrors) {
        if (this.options.ecmaVersion >= 6 && node) {
          switch (node.type) {
            case "Identifier":
              if (this.inAsync && node.name === "await") {
                this.raise(node.start, "Cannot use 'await' as identifier inside an async function");
              }
              break;
            case "ObjectPattern":
            case "ArrayPattern":
            case "AssignmentPattern":
            case "RestElement":
              break;
            case "ObjectExpression":
              node.type = "ObjectPattern";
              if (refDestructuringErrors) {
                this.checkPatternErrors(refDestructuringErrors, true);
              }
              for (var i2 = 0, list2 = node.properties; i2 < list2.length; i2 += 1) {
                var prop = list2[i2];
                this.toAssignable(prop, isBinding);
                if (prop.type === "RestElement" && (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")) {
                  this.raise(prop.argument.start, "Unexpected token");
                }
              }
              break;
            case "Property":
              if (node.kind !== "init") {
                this.raise(node.key.start, "Object pattern can't contain getter or setter");
              }
              this.toAssignable(node.value, isBinding);
              break;
            case "ArrayExpression":
              node.type = "ArrayPattern";
              if (refDestructuringErrors) {
                this.checkPatternErrors(refDestructuringErrors, true);
              }
              this.toAssignableList(node.elements, isBinding);
              break;
            case "SpreadElement":
              node.type = "RestElement";
              this.toAssignable(node.argument, isBinding);
              if (node.argument.type === "AssignmentPattern") {
                this.raise(node.argument.start, "Rest elements cannot have a default value");
              }
              break;
            case "AssignmentExpression":
              if (node.operator !== "=") {
                this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
              }
              node.type = "AssignmentPattern";
              delete node.operator;
              this.toAssignable(node.left, isBinding);
              break;
            case "ParenthesizedExpression":
              this.toAssignable(node.expression, isBinding, refDestructuringErrors);
              break;
            case "ChainExpression":
              this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
              break;
            case "MemberExpression":
              if (!isBinding) {
                break;
              }
            default:
              this.raise(node.start, "Assigning to rvalue");
          }
        } else if (refDestructuringErrors) {
          this.checkPatternErrors(refDestructuringErrors, true);
        }
        return node;
      };
      pp$7.toAssignableList = function(exprList, isBinding) {
        var end = exprList.length;
        for (var i2 = 0; i2 < end; i2++) {
          var elt = exprList[i2];
          if (elt) {
            this.toAssignable(elt, isBinding);
          }
        }
        if (end) {
          var last = exprList[end - 1];
          if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier") {
            this.unexpected(last.argument.start);
          }
        }
        return exprList;
      };
      pp$7.parseSpread = function(refDestructuringErrors) {
        var node = this.startNode();
        this.next();
        node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
        return this.finishNode(node, "SpreadElement");
      };
      pp$7.parseRestBinding = function() {
        var node = this.startNode();
        this.next();
        if (this.options.ecmaVersion === 6 && this.type !== types$1.name) {
          this.unexpected();
        }
        node.argument = this.parseBindingAtom();
        return this.finishNode(node, "RestElement");
      };
      pp$7.parseBindingAtom = function() {
        if (this.options.ecmaVersion >= 6) {
          switch (this.type) {
            case types$1.bracketL:
              var node = this.startNode();
              this.next();
              node.elements = this.parseBindingList(types$1.bracketR, true, true);
              return this.finishNode(node, "ArrayPattern");
            case types$1.braceL:
              return this.parseObj(true);
          }
        }
        return this.parseIdent();
      };
      pp$7.parseBindingList = function(close, allowEmpty, allowTrailingComma, allowModifiers) {
        var elts = [], first = true;
        while (!this.eat(close)) {
          if (first) {
            first = false;
          } else {
            this.expect(types$1.comma);
          }
          if (allowEmpty && this.type === types$1.comma) {
            elts.push(null);
          } else if (allowTrailingComma && this.afterTrailingComma(close)) {
            break;
          } else if (this.type === types$1.ellipsis) {
            var rest = this.parseRestBinding();
            this.parseBindingListItem(rest);
            elts.push(rest);
            if (this.type === types$1.comma) {
              this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
            }
            this.expect(close);
            break;
          } else {
            elts.push(this.parseAssignableListItem(allowModifiers));
          }
        }
        return elts;
      };
      pp$7.parseAssignableListItem = function(allowModifiers) {
        var elem = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(elem);
        return elem;
      };
      pp$7.parseBindingListItem = function(param) {
        return param;
      };
      pp$7.parseMaybeDefault = function(startPos, startLoc, left) {
        left = left || this.parseBindingAtom();
        if (this.options.ecmaVersion < 6 || !this.eat(types$1.eq)) {
          return left;
        }
        var node = this.startNodeAt(startPos, startLoc);
        node.left = left;
        node.right = this.parseMaybeAssign();
        return this.finishNode(node, "AssignmentPattern");
      };
      pp$7.checkLValSimple = function(expr, bindingType, checkClashes) {
        if (bindingType === void 0) bindingType = BIND_NONE;
        var isBind = bindingType !== BIND_NONE;
        switch (expr.type) {
          case "Identifier":
            if (this.strict && this.reservedWordsStrictBind.test(expr.name)) {
              this.raiseRecoverable(expr.start, (isBind ? "Binding " : "Assigning to ") + expr.name + " in strict mode");
            }
            if (isBind) {
              if (bindingType === BIND_LEXICAL && expr.name === "let") {
                this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name");
              }
              if (checkClashes) {
                if (hasOwn(checkClashes, expr.name)) {
                  this.raiseRecoverable(expr.start, "Argument name clash");
                }
                checkClashes[expr.name] = true;
              }
              if (bindingType !== BIND_OUTSIDE) {
                this.declareName(expr.name, bindingType, expr.start);
              }
            }
            break;
          case "ChainExpression":
            this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
            break;
          case "MemberExpression":
            if (isBind) {
              this.raiseRecoverable(expr.start, "Binding member expression");
            }
            break;
          case "ParenthesizedExpression":
            if (isBind) {
              this.raiseRecoverable(expr.start, "Binding parenthesized expression");
            }
            return this.checkLValSimple(expr.expression, bindingType, checkClashes);
          default:
            this.raise(expr.start, (isBind ? "Binding" : "Assigning to") + " rvalue");
        }
      };
      pp$7.checkLValPattern = function(expr, bindingType, checkClashes) {
        if (bindingType === void 0) bindingType = BIND_NONE;
        switch (expr.type) {
          case "ObjectPattern":
            for (var i2 = 0, list2 = expr.properties; i2 < list2.length; i2 += 1) {
              var prop = list2[i2];
              this.checkLValInnerPattern(prop, bindingType, checkClashes);
            }
            break;
          case "ArrayPattern":
            for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
              var elem = list$1[i$1];
              if (elem) {
                this.checkLValInnerPattern(elem, bindingType, checkClashes);
              }
            }
            break;
          default:
            this.checkLValSimple(expr, bindingType, checkClashes);
        }
      };
      pp$7.checkLValInnerPattern = function(expr, bindingType, checkClashes) {
        if (bindingType === void 0) bindingType = BIND_NONE;
        switch (expr.type) {
          case "Property":
            this.checkLValInnerPattern(expr.value, bindingType, checkClashes);
            break;
          case "AssignmentPattern":
            this.checkLValPattern(expr.left, bindingType, checkClashes);
            break;
          case "RestElement":
            this.checkLValPattern(expr.argument, bindingType, checkClashes);
            break;
          default:
            this.checkLValPattern(expr, bindingType, checkClashes);
        }
      };
      var TokContext = function TokContext2(token, isExpr, preserveSpace, override, generator) {
        this.token = token;
        this.isExpr = !!isExpr;
        this.preserveSpace = !!preserveSpace;
        this.override = override;
        this.generator = !!generator;
      };
      var types2 = {
        b_stat: new TokContext("{", false),
        b_expr: new TokContext("{", true),
        b_tmpl: new TokContext("${", false),
        p_stat: new TokContext("(", false),
        p_expr: new TokContext("(", true),
        q_tmpl: new TokContext("`", true, true, function(p) {
          return p.tryReadTemplateToken();
        }),
        f_stat: new TokContext("function", false),
        f_expr: new TokContext("function", true),
        f_expr_gen: new TokContext("function", true, false, null, true),
        f_gen: new TokContext("function", false, false, null, true)
      };
      var pp$6 = Parser.prototype;
      pp$6.initialContext = function() {
        return [types2.b_stat];
      };
      pp$6.curContext = function() {
        return this.context[this.context.length - 1];
      };
      pp$6.braceIsBlock = function(prevType) {
        var parent = this.curContext();
        if (parent === types2.f_expr || parent === types2.f_stat) {
          return true;
        }
        if (prevType === types$1.colon && (parent === types2.b_stat || parent === types2.b_expr)) {
          return !parent.isExpr;
        }
        if (prevType === types$1._return || prevType === types$1.name && this.exprAllowed) {
          return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
        }
        if (prevType === types$1._else || prevType === types$1.semi || prevType === types$1.eof || prevType === types$1.parenR || prevType === types$1.arrow) {
          return true;
        }
        if (prevType === types$1.braceL) {
          return parent === types2.b_stat;
        }
        if (prevType === types$1._var || prevType === types$1._const || prevType === types$1.name) {
          return false;
        }
        return !this.exprAllowed;
      };
      pp$6.inGeneratorContext = function() {
        for (var i2 = this.context.length - 1; i2 >= 1; i2--) {
          var context = this.context[i2];
          if (context.token === "function") {
            return context.generator;
          }
        }
        return false;
      };
      pp$6.updateContext = function(prevType) {
        var update, type = this.type;
        if (type.keyword && prevType === types$1.dot) {
          this.exprAllowed = false;
        } else if (update = type.updateContext) {
          update.call(this, prevType);
        } else {
          this.exprAllowed = type.beforeExpr;
        }
      };
      pp$6.overrideContext = function(tokenCtx) {
        if (this.curContext() !== tokenCtx) {
          this.context[this.context.length - 1] = tokenCtx;
        }
      };
      types$1.parenR.updateContext = types$1.braceR.updateContext = function() {
        if (this.context.length === 1) {
          this.exprAllowed = true;
          return;
        }
        var out = this.context.pop();
        if (out === types2.b_stat && this.curContext().token === "function") {
          out = this.context.pop();
        }
        this.exprAllowed = !out.isExpr;
      };
      types$1.braceL.updateContext = function(prevType) {
        this.context.push(this.braceIsBlock(prevType) ? types2.b_stat : types2.b_expr);
        this.exprAllowed = true;
      };
      types$1.dollarBraceL.updateContext = function() {
        this.context.push(types2.b_tmpl);
        this.exprAllowed = true;
      };
      types$1.parenL.updateContext = function(prevType) {
        var statementParens = prevType === types$1._if || prevType === types$1._for || prevType === types$1._with || prevType === types$1._while;
        this.context.push(statementParens ? types2.p_stat : types2.p_expr);
        this.exprAllowed = true;
      };
      types$1.incDec.updateContext = function() {
      };
      types$1._function.updateContext = types$1._class.updateContext = function(prevType) {
        if (prevType.beforeExpr && prevType !== types$1._else && !(prevType === types$1.semi && this.curContext() !== types2.p_stat) && !(prevType === types$1._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) && !((prevType === types$1.colon || prevType === types$1.braceL) && this.curContext() === types2.b_stat)) {
          this.context.push(types2.f_expr);
        } else {
          this.context.push(types2.f_stat);
        }
        this.exprAllowed = false;
      };
      types$1.colon.updateContext = function() {
        if (this.curContext().token === "function") {
          this.context.pop();
        }
        this.exprAllowed = true;
      };
      types$1.backQuote.updateContext = function() {
        if (this.curContext() === types2.q_tmpl) {
          this.context.pop();
        } else {
          this.context.push(types2.q_tmpl);
        }
        this.exprAllowed = false;
      };
      types$1.star.updateContext = function(prevType) {
        if (prevType === types$1._function) {
          var index = this.context.length - 1;
          if (this.context[index] === types2.f_expr) {
            this.context[index] = types2.f_expr_gen;
          } else {
            this.context[index] = types2.f_gen;
          }
        }
        this.exprAllowed = true;
      };
      types$1.name.updateContext = function(prevType) {
        var allowed = false;
        if (this.options.ecmaVersion >= 6 && prevType !== types$1.dot) {
          if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) {
            allowed = true;
          }
        }
        this.exprAllowed = allowed;
      };
      var pp$5 = Parser.prototype;
      pp$5.checkPropClash = function(prop, propHash, refDestructuringErrors) {
        if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement") {
          return;
        }
        if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand)) {
          return;
        }
        var key = prop.key;
        var name;
        switch (key.type) {
          case "Identifier":
            name = key.name;
            break;
          case "Literal":
            name = String(key.value);
            break;
          default:
            return;
        }
        var kind = prop.kind;
        if (this.options.ecmaVersion >= 6) {
          if (name === "__proto__" && kind === "init") {
            if (propHash.proto) {
              if (refDestructuringErrors) {
                if (refDestructuringErrors.doubleProto < 0) {
                  refDestructuringErrors.doubleProto = key.start;
                }
              } else {
                this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
              }
            }
            propHash.proto = true;
          }
          return;
        }
        name = "$" + name;
        var other = propHash[name];
        if (other) {
          var redefinition;
          if (kind === "init") {
            redefinition = this.strict && other.init || other.get || other.set;
          } else {
            redefinition = other.init || other[kind];
          }
          if (redefinition) {
            this.raiseRecoverable(key.start, "Redefinition of property");
          }
        } else {
          other = propHash[name] = {
            init: false,
            get: false,
            set: false
          };
        }
        other[kind] = true;
      };
      pp$5.parseExpression = function(forInit, refDestructuringErrors) {
        var startPos = this.start, startLoc = this.startLoc;
        var expr = this.parseMaybeAssign(forInit, refDestructuringErrors);
        if (this.type === types$1.comma) {
          var node = this.startNodeAt(startPos, startLoc);
          node.expressions = [expr];
          while (this.eat(types$1.comma)) {
            node.expressions.push(this.parseMaybeAssign(forInit, refDestructuringErrors));
          }
          return this.finishNode(node, "SequenceExpression");
        }
        return expr;
      };
      pp$5.parseMaybeAssign = function(forInit, refDestructuringErrors, afterLeftParse) {
        if (this.isContextual("yield")) {
          if (this.inGenerator) {
            return this.parseYield(forInit);
          } else {
            this.exprAllowed = false;
          }
        }
        var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1, oldDoubleProto = -1;
        if (refDestructuringErrors) {
          oldParenAssign = refDestructuringErrors.parenthesizedAssign;
          oldTrailingComma = refDestructuringErrors.trailingComma;
          oldDoubleProto = refDestructuringErrors.doubleProto;
          refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
        } else {
          refDestructuringErrors = new DestructuringErrors();
          ownDestructuringErrors = true;
        }
        var startPos = this.start, startLoc = this.startLoc;
        if (this.type === types$1.parenL || this.type === types$1.name) {
          this.potentialArrowAt = this.start;
          this.potentialArrowInForAwait = forInit === "await";
        }
        var left = this.parseMaybeConditional(forInit, refDestructuringErrors);
        if (afterLeftParse) {
          left = afterLeftParse.call(this, left, startPos, startLoc);
        }
        if (this.type.isAssign) {
          var node = this.startNodeAt(startPos, startLoc);
          node.operator = this.value;
          if (this.type === types$1.eq) {
            left = this.toAssignable(left, false, refDestructuringErrors);
          }
          if (!ownDestructuringErrors) {
            refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
          }
          if (refDestructuringErrors.shorthandAssign >= left.start) {
            refDestructuringErrors.shorthandAssign = -1;
          }
          if (this.type === types$1.eq) {
            this.checkLValPattern(left);
          } else {
            this.checkLValSimple(left);
          }
          node.left = left;
          this.next();
          node.right = this.parseMaybeAssign(forInit);
          if (oldDoubleProto > -1) {
            refDestructuringErrors.doubleProto = oldDoubleProto;
          }
          return this.finishNode(node, "AssignmentExpression");
        } else {
          if (ownDestructuringErrors) {
            this.checkExpressionErrors(refDestructuringErrors, true);
          }
        }
        if (oldParenAssign > -1) {
          refDestructuringErrors.parenthesizedAssign = oldParenAssign;
        }
        if (oldTrailingComma > -1) {
          refDestructuringErrors.trailingComma = oldTrailingComma;
        }
        return left;
      };
      pp$5.parseMaybeConditional = function(forInit, refDestructuringErrors) {
        var startPos = this.start, startLoc = this.startLoc;
        var expr = this.parseExprOps(forInit, refDestructuringErrors);
        if (this.checkExpressionErrors(refDestructuringErrors)) {
          return expr;
        }
        if (this.eat(types$1.question)) {
          var node = this.startNodeAt(startPos, startLoc);
          node.test = expr;
          node.consequent = this.parseMaybeAssign();
          this.expect(types$1.colon);
          node.alternate = this.parseMaybeAssign(forInit);
          return this.finishNode(node, "ConditionalExpression");
        }
        return expr;
      };
      pp$5.parseExprOps = function(forInit, refDestructuringErrors) {
        var startPos = this.start, startLoc = this.startLoc;
        var expr = this.parseMaybeUnary(refDestructuringErrors, false, false, forInit);
        if (this.checkExpressionErrors(refDestructuringErrors)) {
          return expr;
        }
        return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, forInit);
      };
      pp$5.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, forInit) {
        var prec = this.type.binop;
        if (prec != null && (!forInit || this.type !== types$1._in)) {
          if (prec > minPrec) {
            var logical = this.type === types$1.logicalOR || this.type === types$1.logicalAND;
            var coalesce = this.type === types$1.coalesce;
            if (coalesce) {
              prec = types$1.logicalAND.binop;
            }
            var op = this.value;
            this.next();
            var startPos = this.start, startLoc = this.startLoc;
            var right = this.parseExprOp(this.parseMaybeUnary(null, false, false, forInit), startPos, startLoc, prec, forInit);
            var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
            if (logical && this.type === types$1.coalesce || coalesce && (this.type === types$1.logicalOR || this.type === types$1.logicalAND)) {
              this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
            }
            return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, forInit);
          }
        }
        return left;
      };
      pp$5.buildBinary = function(startPos, startLoc, left, right, op, logical) {
        if (right.type === "PrivateIdentifier") {
          this.raise(right.start, "Private identifier can only be left side of binary expression");
        }
        var node = this.startNodeAt(startPos, startLoc);
        node.left = left;
        node.operator = op;
        node.right = right;
        return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression");
      };
      pp$5.parseMaybeUnary = function(refDestructuringErrors, sawUnary, incDec, forInit) {
        var startPos = this.start, startLoc = this.startLoc, expr;
        if (this.isContextual("await") && this.canAwait) {
          expr = this.parseAwait(forInit);
          sawUnary = true;
        } else if (this.type.prefix) {
          var node = this.startNode(), update = this.type === types$1.incDec;
          node.operator = this.value;
          node.prefix = true;
          this.next();
          node.argument = this.parseMaybeUnary(null, true, update, forInit);
          this.checkExpressionErrors(refDestructuringErrors, true);
          if (update) {
            this.checkLValSimple(node.argument);
          } else if (this.strict && node.operator === "delete" && isLocalVariableAccess(node.argument)) {
            this.raiseRecoverable(node.start, "Deleting local variable in strict mode");
          } else if (node.operator === "delete" && isPrivateFieldAccess(node.argument)) {
            this.raiseRecoverable(node.start, "Private fields can not be deleted");
          } else {
            sawUnary = true;
          }
          expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
        } else if (!sawUnary && this.type === types$1.privateId) {
          if ((forInit || this.privateNameStack.length === 0) && this.options.checkPrivateFields) {
            this.unexpected();
          }
          expr = this.parsePrivateIdent();
          if (this.type !== types$1._in) {
            this.unexpected();
          }
        } else {
          expr = this.parseExprSubscripts(refDestructuringErrors, forInit);
          if (this.checkExpressionErrors(refDestructuringErrors)) {
            return expr;
          }
          while (this.type.postfix && !this.canInsertSemicolon()) {
            var node$1 = this.startNodeAt(startPos, startLoc);
            node$1.operator = this.value;
            node$1.prefix = false;
            node$1.argument = expr;
            this.checkLValSimple(expr);
            this.next();
            expr = this.finishNode(node$1, "UpdateExpression");
          }
        }
        if (!incDec && this.eat(types$1.starstar)) {
          if (sawUnary) {
            this.unexpected(this.lastTokStart);
          } else {
            return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false, false, forInit), "**", false);
          }
        } else {
          return expr;
        }
      };
      function isLocalVariableAccess(node) {
        return node.type === "Identifier" || node.type === "ParenthesizedExpression" && isLocalVariableAccess(node.expression);
      }
      function isPrivateFieldAccess(node) {
        return node.type === "MemberExpression" && node.property.type === "PrivateIdentifier" || node.type === "ChainExpression" && isPrivateFieldAccess(node.expression) || node.type === "ParenthesizedExpression" && isPrivateFieldAccess(node.expression);
      }
      pp$5.parseExprSubscripts = function(refDestructuringErrors, forInit) {
        var startPos = this.start, startLoc = this.startLoc;
        var expr = this.parseExprAtom(refDestructuringErrors, forInit);
        if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") {
          return expr;
        }
        var result = this.parseSubscripts(expr, startPos, startLoc, false, forInit);
        if (refDestructuringErrors && result.type === "MemberExpression") {
          if (refDestructuringErrors.parenthesizedAssign >= result.start) {
            refDestructuringErrors.parenthesizedAssign = -1;
          }
          if (refDestructuringErrors.parenthesizedBind >= result.start) {
            refDestructuringErrors.parenthesizedBind = -1;
          }
          if (refDestructuringErrors.trailingComma >= result.start) {
            refDestructuringErrors.trailingComma = -1;
          }
        }
        return result;
      };
      pp$5.parseSubscripts = function(base, startPos, startLoc, noCalls, forInit) {
        var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" && this.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && this.potentialArrowAt === base.start;
        var optionalChained = false;
        while (true) {
          var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit);
          if (element.optional) {
            optionalChained = true;
          }
          if (element === base || element.type === "ArrowFunctionExpression") {
            if (optionalChained) {
              var chainNode = this.startNodeAt(startPos, startLoc);
              chainNode.expression = element;
              element = this.finishNode(chainNode, "ChainExpression");
            }
            return element;
          }
          base = element;
        }
      };
      pp$5.shouldParseAsyncArrow = function() {
        return !this.canInsertSemicolon() && this.eat(types$1.arrow);
      };
      pp$5.parseSubscriptAsyncArrow = function(startPos, startLoc, exprList, forInit) {
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true, forInit);
      };
      pp$5.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit) {
        var optionalSupported = this.options.ecmaVersion >= 11;
        var optional = optionalSupported && this.eat(types$1.questionDot);
        if (noCalls && optional) {
          this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
        }
        var computed = this.eat(types$1.bracketL);
        if (computed || optional && this.type !== types$1.parenL && this.type !== types$1.backQuote || this.eat(types$1.dot)) {
          var node = this.startNodeAt(startPos, startLoc);
          node.object = base;
          if (computed) {
            node.property = this.parseExpression();
            this.expect(types$1.bracketR);
          } else if (this.type === types$1.privateId && base.type !== "Super") {
            node.property = this.parsePrivateIdent();
          } else {
            node.property = this.parseIdent(this.options.allowReserved !== "never");
          }
          node.computed = !!computed;
          if (optionalSupported) {
            node.optional = optional;
          }
          base = this.finishNode(node, "MemberExpression");
        } else if (!noCalls && this.eat(types$1.parenL)) {
          var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
          this.yieldPos = 0;
          this.awaitPos = 0;
          this.awaitIdentPos = 0;
          var exprList = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
          if (maybeAsyncArrow && !optional && this.shouldParseAsyncArrow()) {
            this.checkPatternErrors(refDestructuringErrors, false);
            this.checkYieldAwaitInDefaultParams();
            if (this.awaitIdentPos > 0) {
              this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
            }
            this.yieldPos = oldYieldPos;
            this.awaitPos = oldAwaitPos;
            this.awaitIdentPos = oldAwaitIdentPos;
            return this.parseSubscriptAsyncArrow(startPos, startLoc, exprList, forInit);
          }
          this.checkExpressionErrors(refDestructuringErrors, true);
          this.yieldPos = oldYieldPos || this.yieldPos;
          this.awaitPos = oldAwaitPos || this.awaitPos;
          this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
          var node$1 = this.startNodeAt(startPos, startLoc);
          node$1.callee = base;
          node$1.arguments = exprList;
          if (optionalSupported) {
            node$1.optional = optional;
          }
          base = this.finishNode(node$1, "CallExpression");
        } else if (this.type === types$1.backQuote) {
          if (optional || optionalChained) {
            this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
          }
          var node$2 = this.startNodeAt(startPos, startLoc);
          node$2.tag = base;
          node$2.quasi = this.parseTemplate({ isTagged: true });
          base = this.finishNode(node$2, "TaggedTemplateExpression");
        }
        return base;
      };
      pp$5.parseExprAtom = function(refDestructuringErrors, forInit, forNew) {
        if (this.type === types$1.slash) {
          this.readRegexp();
        }
        var node, canBeArrow = this.potentialArrowAt === this.start;
        switch (this.type) {
          case types$1._super:
            if (!this.allowSuper) {
              this.raise(this.start, "'super' keyword outside a method");
            }
            node = this.startNode();
            this.next();
            if (this.type === types$1.parenL && !this.allowDirectSuper) {
              this.raise(node.start, "super() call outside constructor of a subclass");
            }
            if (this.type !== types$1.dot && this.type !== types$1.bracketL && this.type !== types$1.parenL) {
              this.unexpected();
            }
            return this.finishNode(node, "Super");
          case types$1._this:
            node = this.startNode();
            this.next();
            return this.finishNode(node, "ThisExpression");
          case types$1.name:
            var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
            var id = this.parseIdent(false);
            if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types$1._function)) {
              this.overrideContext(types2.f_expr);
              return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true, forInit);
            }
            if (canBeArrow && !this.canInsertSemicolon()) {
              if (this.eat(types$1.arrow)) {
                return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false, forInit);
              }
              if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types$1.name && !containsEsc && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
                id = this.parseIdent(false);
                if (this.canInsertSemicolon() || !this.eat(types$1.arrow)) {
                  this.unexpected();
                }
                return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true, forInit);
              }
            }
            return id;
          case types$1.regexp:
            var value = this.value;
            node = this.parseLiteral(value.value);
            node.regex = { pattern: value.pattern, flags: value.flags };
            return node;
          case types$1.num:
          case types$1.string:
            return this.parseLiteral(this.value);
          case types$1._null:
          case types$1._true:
          case types$1._false:
            node = this.startNode();
            node.value = this.type === types$1._null ? null : this.type === types$1._true;
            node.raw = this.type.keyword;
            this.next();
            return this.finishNode(node, "Literal");
          case types$1.parenL:
            var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow, forInit);
            if (refDestructuringErrors) {
              if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr)) {
                refDestructuringErrors.parenthesizedAssign = start;
              }
              if (refDestructuringErrors.parenthesizedBind < 0) {
                refDestructuringErrors.parenthesizedBind = start;
              }
            }
            return expr;
          case types$1.bracketL:
            node = this.startNode();
            this.next();
            node.elements = this.parseExprList(types$1.bracketR, true, true, refDestructuringErrors);
            return this.finishNode(node, "ArrayExpression");
          case types$1.braceL:
            this.overrideContext(types2.b_expr);
            return this.parseObj(false, refDestructuringErrors);
          case types$1._function:
            node = this.startNode();
            this.next();
            return this.parseFunction(node, 0);
          case types$1._class:
            return this.parseClass(this.startNode(), false);
          case types$1._new:
            return this.parseNew();
          case types$1.backQuote:
            return this.parseTemplate();
          case types$1._import:
            if (this.options.ecmaVersion >= 11) {
              return this.parseExprImport(forNew);
            } else {
              return this.unexpected();
            }
          default:
            return this.parseExprAtomDefault();
        }
      };
      pp$5.parseExprAtomDefault = function() {
        this.unexpected();
      };
      pp$5.parseExprImport = function(forNew) {
        var node = this.startNode();
        if (this.containsEsc) {
          this.raiseRecoverable(this.start, "Escape sequence in keyword import");
        }
        this.next();
        if (this.type === types$1.parenL && !forNew) {
          return this.parseDynamicImport(node);
        } else if (this.type === types$1.dot) {
          var meta = this.startNodeAt(node.start, node.loc && node.loc.start);
          meta.name = "import";
          node.meta = this.finishNode(meta, "Identifier");
          return this.parseImportMeta(node);
        } else {
          this.unexpected();
        }
      };
      pp$5.parseDynamicImport = function(node) {
        this.next();
        node.source = this.parseMaybeAssign();
        if (this.options.ecmaVersion >= 16) {
          if (!this.eat(types$1.parenR)) {
            this.expect(types$1.comma);
            if (!this.afterTrailingComma(types$1.parenR)) {
              node.options = this.parseMaybeAssign();
              if (!this.eat(types$1.parenR)) {
                this.expect(types$1.comma);
                if (!this.afterTrailingComma(types$1.parenR)) {
                  this.unexpected();
                }
              }
            } else {
              node.options = null;
            }
          } else {
            node.options = null;
          }
        } else {
          if (!this.eat(types$1.parenR)) {
            var errorPos = this.start;
            if (this.eat(types$1.comma) && this.eat(types$1.parenR)) {
              this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
            } else {
              this.unexpected(errorPos);
            }
          }
        }
        return this.finishNode(node, "ImportExpression");
      };
      pp$5.parseImportMeta = function(node) {
        this.next();
        var containsEsc = this.containsEsc;
        node.property = this.parseIdent(true);
        if (node.property.name !== "meta") {
          this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'");
        }
        if (containsEsc) {
          this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters");
        }
        if (this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere) {
          this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module");
        }
        return this.finishNode(node, "MetaProperty");
      };
      pp$5.parseLiteral = function(value) {
        var node = this.startNode();
        node.value = value;
        node.raw = this.input.slice(this.start, this.end);
        if (node.raw.charCodeAt(node.raw.length - 1) === 110) {
          node.bigint = node.value != null ? node.value.toString() : node.raw.slice(0, -1).replace(/_/g, "");
        }
        this.next();
        return this.finishNode(node, "Literal");
      };
      pp$5.parseParenExpression = function() {
        this.expect(types$1.parenL);
        var val = this.parseExpression();
        this.expect(types$1.parenR);
        return val;
      };
      pp$5.shouldParseArrow = function(exprList) {
        return !this.canInsertSemicolon();
      };
      pp$5.parseParenAndDistinguishExpression = function(canBeArrow, forInit) {
        var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
        if (this.options.ecmaVersion >= 6) {
          this.next();
          var innerStartPos = this.start, innerStartLoc = this.startLoc;
          var exprList = [], first = true, lastIsComma = false;
          var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
          this.yieldPos = 0;
          this.awaitPos = 0;
          while (this.type !== types$1.parenR) {
            first ? first = false : this.expect(types$1.comma);
            if (allowTrailingComma && this.afterTrailingComma(types$1.parenR, true)) {
              lastIsComma = true;
              break;
            } else if (this.type === types$1.ellipsis) {
              spreadStart = this.start;
              exprList.push(this.parseParenItem(this.parseRestBinding()));
              if (this.type === types$1.comma) {
                this.raiseRecoverable(
                  this.start,
                  "Comma is not permitted after the rest element"
                );
              }
              break;
            } else {
              exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
            }
          }
          var innerEndPos = this.lastTokEnd, innerEndLoc = this.lastTokEndLoc;
          this.expect(types$1.parenR);
          if (canBeArrow && this.shouldParseArrow(exprList) && this.eat(types$1.arrow)) {
            this.checkPatternErrors(refDestructuringErrors, false);
            this.checkYieldAwaitInDefaultParams();
            this.yieldPos = oldYieldPos;
            this.awaitPos = oldAwaitPos;
            return this.parseParenArrowList(startPos, startLoc, exprList, forInit);
          }
          if (!exprList.length || lastIsComma) {
            this.unexpected(this.lastTokStart);
          }
          if (spreadStart) {
            this.unexpected(spreadStart);
          }
          this.checkExpressionErrors(refDestructuringErrors, true);
          this.yieldPos = oldYieldPos || this.yieldPos;
          this.awaitPos = oldAwaitPos || this.awaitPos;
          if (exprList.length > 1) {
            val = this.startNodeAt(innerStartPos, innerStartLoc);
            val.expressions = exprList;
            this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
          } else {
            val = exprList[0];
          }
        } else {
          val = this.parseParenExpression();
        }
        if (this.options.preserveParens) {
          var par = this.startNodeAt(startPos, startLoc);
          par.expression = val;
          return this.finishNode(par, "ParenthesizedExpression");
        } else {
          return val;
        }
      };
      pp$5.parseParenItem = function(item) {
        return item;
      };
      pp$5.parseParenArrowList = function(startPos, startLoc, exprList, forInit) {
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, false, forInit);
      };
      var empty = [];
      pp$5.parseNew = function() {
        if (this.containsEsc) {
          this.raiseRecoverable(this.start, "Escape sequence in keyword new");
        }
        var node = this.startNode();
        this.next();
        if (this.options.ecmaVersion >= 6 && this.type === types$1.dot) {
          var meta = this.startNodeAt(node.start, node.loc && node.loc.start);
          meta.name = "new";
          node.meta = this.finishNode(meta, "Identifier");
          this.next();
          var containsEsc = this.containsEsc;
          node.property = this.parseIdent(true);
          if (node.property.name !== "target") {
            this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'");
          }
          if (containsEsc) {
            this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters");
          }
          if (!this.allowNewDotTarget) {
            this.raiseRecoverable(node.start, "'new.target' can only be used in functions and class static block");
          }
          return this.finishNode(node, "MetaProperty");
        }
        var startPos = this.start, startLoc = this.startLoc;
        node.callee = this.parseSubscripts(this.parseExprAtom(null, false, true), startPos, startLoc, true, false);
        if (this.eat(types$1.parenL)) {
          node.arguments = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false);
        } else {
          node.arguments = empty;
        }
        return this.finishNode(node, "NewExpression");
      };
      pp$5.parseTemplateElement = function(ref2) {
        var isTagged = ref2.isTagged;
        var elem = this.startNode();
        if (this.type === types$1.invalidTemplate) {
          if (!isTagged) {
            this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
          }
          elem.value = {
            raw: this.value.replace(/\r\n?/g, "\n"),
            cooked: null
          };
        } else {
          elem.value = {
            raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
            cooked: this.value
          };
        }
        this.next();
        elem.tail = this.type === types$1.backQuote;
        return this.finishNode(elem, "TemplateElement");
      };
      pp$5.parseTemplate = function(ref2) {
        if (ref2 === void 0) ref2 = {};
        var isTagged = ref2.isTagged;
        if (isTagged === void 0) isTagged = false;
        var node = this.startNode();
        this.next();
        node.expressions = [];
        var curElt = this.parseTemplateElement({ isTagged });
        node.quasis = [curElt];
        while (!curElt.tail) {
          if (this.type === types$1.eof) {
            this.raise(this.pos, "Unterminated template literal");
          }
          this.expect(types$1.dollarBraceL);
          node.expressions.push(this.parseExpression());
          this.expect(types$1.braceR);
          node.quasis.push(curElt = this.parseTemplateElement({ isTagged }));
        }
        this.next();
        return this.finishNode(node, "TemplateLiteral");
      };
      pp$5.isAsyncProp = function(prop) {
        return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" && (this.type === types$1.name || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === types$1.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
      };
      pp$5.parseObj = function(isPattern, refDestructuringErrors) {
        var node = this.startNode(), first = true, propHash = {};
        node.properties = [];
        this.next();
        while (!this.eat(types$1.braceR)) {
          if (!first) {
            this.expect(types$1.comma);
            if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types$1.braceR)) {
              break;
            }
          } else {
            first = false;
          }
          var prop = this.parseProperty(isPattern, refDestructuringErrors);
          if (!isPattern) {
            this.checkPropClash(prop, propHash, refDestructuringErrors);
          }
          node.properties.push(prop);
        }
        return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
      };
      pp$5.parseProperty = function(isPattern, refDestructuringErrors) {
        var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
        if (this.options.ecmaVersion >= 9 && this.eat(types$1.ellipsis)) {
          if (isPattern) {
            prop.argument = this.parseIdent(false);
            if (this.type === types$1.comma) {
              this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
            }
            return this.finishNode(prop, "RestElement");
          }
          prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
          if (this.type === types$1.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
            refDestructuringErrors.trailingComma = this.start;
          }
          return this.finishNode(prop, "SpreadElement");
        }
        if (this.options.ecmaVersion >= 6) {
          prop.method = false;
          prop.shorthand = false;
          if (isPattern || refDestructuringErrors) {
            startPos = this.start;
            startLoc = this.startLoc;
          }
          if (!isPattern) {
            isGenerator = this.eat(types$1.star);
          }
        }
        var containsEsc = this.containsEsc;
        this.parsePropertyName(prop);
        if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
          isAsync = true;
          isGenerator = this.options.ecmaVersion >= 9 && this.eat(types$1.star);
          this.parsePropertyName(prop);
        } else {
          isAsync = false;
        }
        this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
        return this.finishNode(prop, "Property");
      };
      pp$5.parseGetterSetter = function(prop) {
        var kind = prop.key.name;
        this.parsePropertyName(prop);
        prop.value = this.parseMethod(false);
        prop.kind = kind;
        var paramCount = prop.kind === "get" ? 0 : 1;
        if (prop.value.params.length !== paramCount) {
          var start = prop.value.start;
          if (prop.kind === "get") {
            this.raiseRecoverable(start, "getter should have no params");
          } else {
            this.raiseRecoverable(start, "setter should have exactly one param");
          }
        } else {
          if (prop.kind === "set" && prop.value.params[0].type === "RestElement") {
            this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params");
          }
        }
      };
      pp$5.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
        if ((isGenerator || isAsync) && this.type === types$1.colon) {
          this.unexpected();
        }
        if (this.eat(types$1.colon)) {
          prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
          prop.kind = "init";
        } else if (this.options.ecmaVersion >= 6 && this.type === types$1.parenL) {
          if (isPattern) {
            this.unexpected();
          }
          prop.method = true;
          prop.value = this.parseMethod(isGenerator, isAsync);
          prop.kind = "init";
        } else if (!isPattern && !containsEsc && this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.type !== types$1.comma && this.type !== types$1.braceR && this.type !== types$1.eq)) {
          if (isGenerator || isAsync) {
            this.unexpected();
          }
          this.parseGetterSetter(prop);
        } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
          if (isGenerator || isAsync) {
            this.unexpected();
          }
          this.checkUnreserved(prop.key);
          if (prop.key.name === "await" && !this.awaitIdentPos) {
            this.awaitIdentPos = startPos;
          }
          if (isPattern) {
            prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
          } else if (this.type === types$1.eq && refDestructuringErrors) {
            if (refDestructuringErrors.shorthandAssign < 0) {
              refDestructuringErrors.shorthandAssign = this.start;
            }
            prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
          } else {
            prop.value = this.copyNode(prop.key);
          }
          prop.kind = "init";
          prop.shorthand = true;
        } else {
          this.unexpected();
        }
      };
      pp$5.parsePropertyName = function(prop) {
        if (this.options.ecmaVersion >= 6) {
          if (this.eat(types$1.bracketL)) {
            prop.computed = true;
            prop.key = this.parseMaybeAssign();
            this.expect(types$1.bracketR);
            return prop.key;
          } else {
            prop.computed = false;
          }
        }
        return prop.key = this.type === types$1.num || this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
      };
      pp$5.initFunction = function(node) {
        node.id = null;
        if (this.options.ecmaVersion >= 6) {
          node.generator = node.expression = false;
        }
        if (this.options.ecmaVersion >= 8) {
          node.async = false;
        }
      };
      pp$5.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
        var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
        this.initFunction(node);
        if (this.options.ecmaVersion >= 6) {
          node.generator = isGenerator;
        }
        if (this.options.ecmaVersion >= 8) {
          node.async = !!isAsync;
        }
        this.yieldPos = 0;
        this.awaitPos = 0;
        this.awaitIdentPos = 0;
        this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
        this.expect(types$1.parenL);
        node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
        this.checkYieldAwaitInDefaultParams();
        this.parseFunctionBody(node, false, true, false);
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.finishNode(node, "FunctionExpression");
      };
      pp$5.parseArrowExpression = function(node, params, isAsync, forInit) {
        var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
        this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
        this.initFunction(node);
        if (this.options.ecmaVersion >= 8) {
          node.async = !!isAsync;
        }
        this.yieldPos = 0;
        this.awaitPos = 0;
        this.awaitIdentPos = 0;
        node.params = this.toAssignableList(params, true);
        this.parseFunctionBody(node, true, false, forInit);
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.finishNode(node, "ArrowFunctionExpression");
      };
      pp$5.parseFunctionBody = function(node, isArrowFunction, isMethod, forInit) {
        var isExpression = isArrowFunction && this.type !== types$1.braceL;
        var oldStrict = this.strict, useStrict = false;
        if (isExpression) {
          node.body = this.parseMaybeAssign(forInit);
          node.expression = true;
          this.checkParams(node, false);
        } else {
          var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
          if (!oldStrict || nonSimple) {
            useStrict = this.strictDirective(this.end);
            if (useStrict && nonSimple) {
              this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list");
            }
          }
          var oldLabels = this.labels;
          this.labels = [];
          if (useStrict) {
            this.strict = true;
          }
          this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
          if (this.strict && node.id) {
            this.checkLValSimple(node.id, BIND_OUTSIDE);
          }
          node.body = this.parseBlock(false, void 0, useStrict && !oldStrict);
          node.expression = false;
          this.adaptDirectivePrologue(node.body.body);
          this.labels = oldLabels;
        }
        this.exitScope();
      };
      pp$5.isSimpleParamList = function(params) {
        for (var i2 = 0, list2 = params; i2 < list2.length; i2 += 1) {
          var param = list2[i2];
          if (param.type !== "Identifier") {
            return false;
          }
        }
        return true;
      };
      pp$5.checkParams = function(node, allowDuplicates) {
        var nameHash = /* @__PURE__ */ Object.create(null);
        for (var i2 = 0, list2 = node.params; i2 < list2.length; i2 += 1) {
          var param = list2[i2];
          this.checkLValInnerPattern(param, BIND_VAR, allowDuplicates ? null : nameHash);
        }
      };
      pp$5.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
        var elts = [], first = true;
        while (!this.eat(close)) {
          if (!first) {
            this.expect(types$1.comma);
            if (allowTrailingComma && this.afterTrailingComma(close)) {
              break;
            }
          } else {
            first = false;
          }
          var elt = void 0;
          if (allowEmpty && this.type === types$1.comma) {
            elt = null;
          } else if (this.type === types$1.ellipsis) {
            elt = this.parseSpread(refDestructuringErrors);
            if (refDestructuringErrors && this.type === types$1.comma && refDestructuringErrors.trailingComma < 0) {
              refDestructuringErrors.trailingComma = this.start;
            }
          } else {
            elt = this.parseMaybeAssign(false, refDestructuringErrors);
          }
          elts.push(elt);
        }
        return elts;
      };
      pp$5.checkUnreserved = function(ref2) {
        var start = ref2.start;
        var end = ref2.end;
        var name = ref2.name;
        if (this.inGenerator && name === "yield") {
          this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator");
        }
        if (this.inAsync && name === "await") {
          this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function");
        }
        if (!(this.currentThisScope().flags & SCOPE_VAR) && name === "arguments") {
          this.raiseRecoverable(start, "Cannot use 'arguments' in class field initializer");
        }
        if (this.inClassStaticBlock && (name === "arguments" || name === "await")) {
          this.raise(start, "Cannot use " + name + " in class static initialization block");
        }
        if (this.keywords.test(name)) {
          this.raise(start, "Unexpected keyword '" + name + "'");
        }
        if (this.options.ecmaVersion < 6 && this.input.slice(start, end).indexOf("\\") !== -1) {
          return;
        }
        var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
        if (re.test(name)) {
          if (!this.inAsync && name === "await") {
            this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function");
          }
          this.raiseRecoverable(start, "The keyword '" + name + "' is reserved");
        }
      };
      pp$5.parseIdent = function(liberal) {
        var node = this.parseIdentNode();
        this.next(!!liberal);
        this.finishNode(node, "Identifier");
        if (!liberal) {
          this.checkUnreserved(node);
          if (node.name === "await" && !this.awaitIdentPos) {
            this.awaitIdentPos = node.start;
          }
        }
        return node;
      };
      pp$5.parseIdentNode = function() {
        var node = this.startNode();
        if (this.type === types$1.name) {
          node.name = this.value;
        } else if (this.type.keyword) {
          node.name = this.type.keyword;
          if ((node.name === "class" || node.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
            this.context.pop();
          }
          this.type = types$1.name;
        } else {
          this.unexpected();
        }
        return node;
      };
      pp$5.parsePrivateIdent = function() {
        var node = this.startNode();
        if (this.type === types$1.privateId) {
          node.name = this.value;
        } else {
          this.unexpected();
        }
        this.next();
        this.finishNode(node, "PrivateIdentifier");
        if (this.options.checkPrivateFields) {
          if (this.privateNameStack.length === 0) {
            this.raise(node.start, "Private field '#" + node.name + "' must be declared in an enclosing class");
          } else {
            this.privateNameStack[this.privateNameStack.length - 1].used.push(node);
          }
        }
        return node;
      };
      pp$5.parseYield = function(forInit) {
        if (!this.yieldPos) {
          this.yieldPos = this.start;
        }
        var node = this.startNode();
        this.next();
        if (this.type === types$1.semi || this.canInsertSemicolon() || this.type !== types$1.star && !this.type.startsExpr) {
          node.delegate = false;
          node.argument = null;
        } else {
          node.delegate = this.eat(types$1.star);
          node.argument = this.parseMaybeAssign(forInit);
        }
        return this.finishNode(node, "YieldExpression");
      };
      pp$5.parseAwait = function(forInit) {
        if (!this.awaitPos) {
          this.awaitPos = this.start;
        }
        var node = this.startNode();
        this.next();
        node.argument = this.parseMaybeUnary(null, true, false, forInit);
        return this.finishNode(node, "AwaitExpression");
      };
      var pp$4 = Parser.prototype;
      pp$4.raise = function(pos, message) {
        var loc = getLineInfo(this.input, pos);
        message += " (" + loc.line + ":" + loc.column + ")";
        if (this.sourceFile) {
          message += " in " + this.sourceFile;
        }
        var err = new SyntaxError(message);
        err.pos = pos;
        err.loc = loc;
        err.raisedAt = this.pos;
        throw err;
      };
      pp$4.raiseRecoverable = pp$4.raise;
      pp$4.curPosition = function() {
        if (this.options.locations) {
          return new Position(this.curLine, this.pos - this.lineStart);
        }
      };
      var pp$3 = Parser.prototype;
      var Scope = function Scope2(flags) {
        this.flags = flags;
        this.var = [];
        this.lexical = [];
        this.functions = [];
      };
      pp$3.enterScope = function(flags) {
        this.scopeStack.push(new Scope(flags));
      };
      pp$3.exitScope = function() {
        this.scopeStack.pop();
      };
      pp$3.treatFunctionsAsVarInScope = function(scope) {
        return scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_TOP;
      };
      pp$3.declareName = function(name, bindingType, pos) {
        var redeclared = false;
        if (bindingType === BIND_LEXICAL) {
          var scope = this.currentScope();
          redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
          scope.lexical.push(name);
          if (this.inModule && scope.flags & SCOPE_TOP) {
            delete this.undefinedExports[name];
          }
        } else if (bindingType === BIND_SIMPLE_CATCH) {
          var scope$1 = this.currentScope();
          scope$1.lexical.push(name);
        } else if (bindingType === BIND_FUNCTION) {
          var scope$2 = this.currentScope();
          if (this.treatFunctionsAsVar) {
            redeclared = scope$2.lexical.indexOf(name) > -1;
          } else {
            redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1;
          }
          scope$2.functions.push(name);
        } else {
          for (var i2 = this.scopeStack.length - 1; i2 >= 0; --i2) {
            var scope$3 = this.scopeStack[i2];
            if (scope$3.lexical.indexOf(name) > -1 && !(scope$3.flags & SCOPE_SIMPLE_CATCH && scope$3.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
              redeclared = true;
              break;
            }
            scope$3.var.push(name);
            if (this.inModule && scope$3.flags & SCOPE_TOP) {
              delete this.undefinedExports[name];
            }
            if (scope$3.flags & SCOPE_VAR) {
              break;
            }
          }
        }
        if (redeclared) {
          this.raiseRecoverable(pos, "Identifier '" + name + "' has already been declared");
        }
      };
      pp$3.checkLocalExport = function(id) {
        if (this.scopeStack[0].lexical.indexOf(id.name) === -1 && this.scopeStack[0].var.indexOf(id.name) === -1) {
          this.undefinedExports[id.name] = id;
        }
      };
      pp$3.currentScope = function() {
        return this.scopeStack[this.scopeStack.length - 1];
      };
      pp$3.currentVarScope = function() {
        for (var i2 = this.scopeStack.length - 1; ; i2--) {
          var scope = this.scopeStack[i2];
          if (scope.flags & (SCOPE_VAR | SCOPE_CLASS_FIELD_INIT | SCOPE_CLASS_STATIC_BLOCK)) {
            return scope;
          }
        }
      };
      pp$3.currentThisScope = function() {
        for (var i2 = this.scopeStack.length - 1; ; i2--) {
          var scope = this.scopeStack[i2];
          if (scope.flags & (SCOPE_VAR | SCOPE_CLASS_FIELD_INIT | SCOPE_CLASS_STATIC_BLOCK) && !(scope.flags & SCOPE_ARROW)) {
            return scope;
          }
        }
      };
      var Node = function Node2(parser, pos, loc) {
        this.type = "";
        this.start = pos;
        this.end = 0;
        if (parser.options.locations) {
          this.loc = new SourceLocation(parser, loc);
        }
        if (parser.options.directSourceFile) {
          this.sourceFile = parser.options.directSourceFile;
        }
        if (parser.options.ranges) {
          this.range = [pos, 0];
        }
      };
      var pp$2 = Parser.prototype;
      pp$2.startNode = function() {
        return new Node(this, this.start, this.startLoc);
      };
      pp$2.startNodeAt = function(pos, loc) {
        return new Node(this, pos, loc);
      };
      function finishNodeAt(node, type, pos, loc) {
        node.type = type;
        node.end = pos;
        if (this.options.locations) {
          node.loc.end = loc;
        }
        if (this.options.ranges) {
          node.range[1] = pos;
        }
        return node;
      }
      pp$2.finishNode = function(node, type) {
        return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc);
      };
      pp$2.finishNodeAt = function(node, type, pos, loc) {
        return finishNodeAt.call(this, node, type, pos, loc);
      };
      pp$2.copyNode = function(node) {
        var newNode = new Node(this, node.start, this.startLoc);
        for (var prop in node) {
          newNode[prop] = node[prop];
        }
        return newNode;
      };
      var scriptValuesAddedInUnicode = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz";
      var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
      var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
      var ecma11BinaryProperties = ecma10BinaryProperties;
      var ecma12BinaryProperties = ecma11BinaryProperties + " EBase EComp EMod EPres ExtPict";
      var ecma13BinaryProperties = ecma12BinaryProperties;
      var ecma14BinaryProperties = ecma13BinaryProperties;
      var unicodeBinaryProperties = {
        9: ecma9BinaryProperties,
        10: ecma10BinaryProperties,
        11: ecma11BinaryProperties,
        12: ecma12BinaryProperties,
        13: ecma13BinaryProperties,
        14: ecma14BinaryProperties
      };
      var ecma14BinaryPropertiesOfStrings = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji";
      var unicodeBinaryPropertiesOfStrings = {
        9: "",
        10: "",
        11: "",
        12: "",
        13: "",
        14: ecma14BinaryPropertiesOfStrings
      };
      var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";
      var ecma9ScriptValues = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
      var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
      var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
      var ecma12ScriptValues = ecma11ScriptValues + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";
      var ecma13ScriptValues = ecma12ScriptValues + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith";
      var ecma14ScriptValues = ecma13ScriptValues + " " + scriptValuesAddedInUnicode;
      var unicodeScriptValues = {
        9: ecma9ScriptValues,
        10: ecma10ScriptValues,
        11: ecma11ScriptValues,
        12: ecma12ScriptValues,
        13: ecma13ScriptValues,
        14: ecma14ScriptValues
      };
      var data = {};
      function buildUnicodeData(ecmaVersion2) {
        var d = data[ecmaVersion2] = {
          binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion2] + " " + unicodeGeneralCategoryValues),
          binaryOfStrings: wordsRegexp(unicodeBinaryPropertiesOfStrings[ecmaVersion2]),
          nonBinary: {
            General_Category: wordsRegexp(unicodeGeneralCategoryValues),
            Script: wordsRegexp(unicodeScriptValues[ecmaVersion2])
          }
        };
        d.nonBinary.Script_Extensions = d.nonBinary.Script;
        d.nonBinary.gc = d.nonBinary.General_Category;
        d.nonBinary.sc = d.nonBinary.Script;
        d.nonBinary.scx = d.nonBinary.Script_Extensions;
      }
      for (var i = 0, list = [9, 10, 11, 12, 13, 14]; i < list.length; i += 1) {
        var ecmaVersion = list[i];
        buildUnicodeData(ecmaVersion);
      }
      var pp$1 = Parser.prototype;
      var BranchID = function BranchID2(parent, base) {
        this.parent = parent;
        this.base = base || this;
      };
      BranchID.prototype.separatedFrom = function separatedFrom(alt) {
        for (var self2 = this; self2; self2 = self2.parent) {
          for (var other = alt; other; other = other.parent) {
            if (self2.base === other.base && self2 !== other) {
              return true;
            }
          }
        }
        return false;
      };
      BranchID.prototype.sibling = function sibling() {
        return new BranchID(this.parent, this.base);
      };
      var RegExpValidationState = function RegExpValidationState2(parser) {
        this.parser = parser;
        this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "") + (parser.options.ecmaVersion >= 13 ? "d" : "") + (parser.options.ecmaVersion >= 15 ? "v" : "");
        this.unicodeProperties = data[parser.options.ecmaVersion >= 14 ? 14 : parser.options.ecmaVersion];
        this.source = "";
        this.flags = "";
        this.start = 0;
        this.switchU = false;
        this.switchV = false;
        this.switchN = false;
        this.pos = 0;
        this.lastIntValue = 0;
        this.lastStringValue = "";
        this.lastAssertionIsQuantifiable = false;
        this.numCapturingParens = 0;
        this.maxBackReference = 0;
        this.groupNames = /* @__PURE__ */ Object.create(null);
        this.backReferenceNames = [];
        this.branchID = null;
      };
      RegExpValidationState.prototype.reset = function reset(start, pattern, flags) {
        var unicodeSets = flags.indexOf("v") !== -1;
        var unicode = flags.indexOf("u") !== -1;
        this.start = start | 0;
        this.source = pattern + "";
        this.flags = flags;
        if (unicodeSets && this.parser.options.ecmaVersion >= 15) {
          this.switchU = true;
          this.switchV = true;
          this.switchN = true;
        } else {
          this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
          this.switchV = false;
          this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
        }
      };
      RegExpValidationState.prototype.raise = function raise(message) {
        this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + message);
      };
      RegExpValidationState.prototype.at = function at(i2, forceU) {
        if (forceU === void 0) forceU = false;
        var s = this.source;
        var l = s.length;
        if (i2 >= l) {
          return -1;
        }
        var c = s.charCodeAt(i2);
        if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i2 + 1 >= l) {
          return c;
        }
        var next = s.charCodeAt(i2 + 1);
        return next >= 56320 && next <= 57343 ? (c << 10) + next - 56613888 : c;
      };
      RegExpValidationState.prototype.nextIndex = function nextIndex(i2, forceU) {
        if (forceU === void 0) forceU = false;
        var s = this.source;
        var l = s.length;
        if (i2 >= l) {
          return l;
        }
        var c = s.charCodeAt(i2), next;
        if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i2 + 1 >= l || (next = s.charCodeAt(i2 + 1)) < 56320 || next > 57343) {
          return i2 + 1;
        }
        return i2 + 2;
      };
      RegExpValidationState.prototype.current = function current(forceU) {
        if (forceU === void 0) forceU = false;
        return this.at(this.pos, forceU);
      };
      RegExpValidationState.prototype.lookahead = function lookahead(forceU) {
        if (forceU === void 0) forceU = false;
        return this.at(this.nextIndex(this.pos, forceU), forceU);
      };
      RegExpValidationState.prototype.advance = function advance(forceU) {
        if (forceU === void 0) forceU = false;
        this.pos = this.nextIndex(this.pos, forceU);
      };
      RegExpValidationState.prototype.eat = function eat(ch, forceU) {
        if (forceU === void 0) forceU = false;
        if (this.current(forceU) === ch) {
          this.advance(forceU);
          return true;
        }
        return false;
      };
      RegExpValidationState.prototype.eatChars = function eatChars(chs, forceU) {
        if (forceU === void 0) forceU = false;
        var pos = this.pos;
        for (var i2 = 0, list2 = chs; i2 < list2.length; i2 += 1) {
          var ch = list2[i2];
          var current = this.at(pos, forceU);
          if (current === -1 || current !== ch) {
            return false;
          }
          pos = this.nextIndex(pos, forceU);
        }
        this.pos = pos;
        return true;
      };
      pp$1.validateRegExpFlags = function(state) {
        var validFlags = state.validFlags;
        var flags = state.flags;
        var u = false;
        var v = false;
        for (var i2 = 0; i2 < flags.length; i2++) {
          var flag = flags.charAt(i2);
          if (validFlags.indexOf(flag) === -1) {
            this.raise(state.start, "Invalid regular expression flag");
          }
          if (flags.indexOf(flag, i2 + 1) > -1) {
            this.raise(state.start, "Duplicate regular expression flag");
          }
          if (flag === "u") {
            u = true;
          }
          if (flag === "v") {
            v = true;
          }
        }
        if (this.options.ecmaVersion >= 15 && u && v) {
          this.raise(state.start, "Invalid regular expression flag");
        }
      };
      function hasProp(obj) {
        for (var _ in obj) {
          return true;
        }
        return false;
      }
      pp$1.validateRegExpPattern = function(state) {
        this.regexp_pattern(state);
        if (!state.switchN && this.options.ecmaVersion >= 9 && hasProp(state.groupNames)) {
          state.switchN = true;
          this.regexp_pattern(state);
        }
      };
      pp$1.regexp_pattern = function(state) {
        state.pos = 0;
        state.lastIntValue = 0;
        state.lastStringValue = "";
        state.lastAssertionIsQuantifiable = false;
        state.numCapturingParens = 0;
        state.maxBackReference = 0;
        state.groupNames = /* @__PURE__ */ Object.create(null);
        state.backReferenceNames.length = 0;
        state.branchID = null;
        this.regexp_disjunction(state);
        if (state.pos !== state.source.length) {
          if (state.eat(
            41
            /* ) */
          )) {
            state.raise("Unmatched ')'");
          }
          if (state.eat(
            93
            /* ] */
          ) || state.eat(
            125
            /* } */
          )) {
            state.raise("Lone quantifier brackets");
          }
        }
        if (state.maxBackReference > state.numCapturingParens) {
          state.raise("Invalid escape");
        }
        for (var i2 = 0, list2 = state.backReferenceNames; i2 < list2.length; i2 += 1) {
          var name = list2[i2];
          if (!state.groupNames[name]) {
            state.raise("Invalid named capture referenced");
          }
        }
      };
      pp$1.regexp_disjunction = function(state) {
        var trackDisjunction = this.options.ecmaVersion >= 16;
        if (trackDisjunction) {
          state.branchID = new BranchID(state.branchID, null);
        }
        this.regexp_alternative(state);
        while (state.eat(
          124
          /* | */
        )) {
          if (trackDisjunction) {
            state.branchID = state.branchID.sibling();
          }
          this.regexp_alternative(state);
        }
        if (trackDisjunction) {
          state.branchID = state.branchID.parent;
        }
        if (this.regexp_eatQuantifier(state, true)) {
          state.raise("Nothing to repeat");
        }
        if (state.eat(
          123
          /* { */
        )) {
          state.raise("Lone quantifier brackets");
        }
      };
      pp$1.regexp_alternative = function(state) {
        while (state.pos < state.source.length && this.regexp_eatTerm(state)) {
        }
      };
      pp$1.regexp_eatTerm = function(state) {
        if (this.regexp_eatAssertion(state)) {
          if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
            if (state.switchU) {
              state.raise("Invalid quantifier");
            }
          }
          return true;
        }
        if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
          this.regexp_eatQuantifier(state);
          return true;
        }
        return false;
      };
      pp$1.regexp_eatAssertion = function(state) {
        var start = state.pos;
        state.lastAssertionIsQuantifiable = false;
        if (state.eat(
          94
          /* ^ */
        ) || state.eat(
          36
          /* $ */
        )) {
          return true;
        }
        if (state.eat(
          92
          /* \ */
        )) {
          if (state.eat(
            66
            /* B */
          ) || state.eat(
            98
            /* b */
          )) {
            return true;
          }
          state.pos = start;
        }
        if (state.eat(
          40
          /* ( */
        ) && state.eat(
          63
          /* ? */
        )) {
          var lookbehind = false;
          if (this.options.ecmaVersion >= 9) {
            lookbehind = state.eat(
              60
              /* < */
            );
          }
          if (state.eat(
            61
            /* = */
          ) || state.eat(
            33
            /* ! */
          )) {
            this.regexp_disjunction(state);
            if (!state.eat(
              41
              /* ) */
            )) {
              state.raise("Unterminated group");
            }
            state.lastAssertionIsQuantifiable = !lookbehind;
            return true;
          }
        }
        state.pos = start;
        return false;
      };
      pp$1.regexp_eatQuantifier = function(state, noError) {
        if (noError === void 0) noError = false;
        if (this.regexp_eatQuantifierPrefix(state, noError)) {
          state.eat(
            63
            /* ? */
          );
          return true;
        }
        return false;
      };
      pp$1.regexp_eatQuantifierPrefix = function(state, noError) {
        return state.eat(
          42
          /* * */
        ) || state.eat(
          43
          /* + */
        ) || state.eat(
          63
          /* ? */
        ) || this.regexp_eatBracedQuantifier(state, noError);
      };
      pp$1.regexp_eatBracedQuantifier = function(state, noError) {
        var start = state.pos;
        if (state.eat(
          123
          /* { */
        )) {
          var min = 0, max = -1;
          if (this.regexp_eatDecimalDigits(state)) {
            min = state.lastIntValue;
            if (state.eat(
              44
              /* , */
            ) && this.regexp_eatDecimalDigits(state)) {
              max = state.lastIntValue;
            }
            if (state.eat(
              125
              /* } */
            )) {
              if (max !== -1 && max < min && !noError) {
                state.raise("numbers out of order in {} quantifier");
              }
              return true;
            }
          }
          if (state.switchU && !noError) {
            state.raise("Incomplete quantifier");
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatAtom = function(state) {
        return this.regexp_eatPatternCharacters(state) || state.eat(
          46
          /* . */
        ) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state);
      };
      pp$1.regexp_eatReverseSolidusAtomEscape = function(state) {
        var start = state.pos;
        if (state.eat(
          92
          /* \ */
        )) {
          if (this.regexp_eatAtomEscape(state)) {
            return true;
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatUncapturingGroup = function(state) {
        var start = state.pos;
        if (state.eat(
          40
          /* ( */
        )) {
          if (state.eat(
            63
            /* ? */
          )) {
            if (this.options.ecmaVersion >= 16) {
              var addModifiers = this.regexp_eatModifiers(state);
              var hasHyphen = state.eat(
                45
                /* - */
              );
              if (addModifiers || hasHyphen) {
                for (var i2 = 0; i2 < addModifiers.length; i2++) {
                  var modifier = addModifiers.charAt(i2);
                  if (addModifiers.indexOf(modifier, i2 + 1) > -1) {
                    state.raise("Duplicate regular expression modifiers");
                  }
                }
                if (hasHyphen) {
                  var removeModifiers = this.regexp_eatModifiers(state);
                  if (!addModifiers && !removeModifiers && state.current() === 58) {
                    state.raise("Invalid regular expression modifiers");
                  }
                  for (var i$1 = 0; i$1 < removeModifiers.length; i$1++) {
                    var modifier$1 = removeModifiers.charAt(i$1);
                    if (removeModifiers.indexOf(modifier$1, i$1 + 1) > -1 || addModifiers.indexOf(modifier$1) > -1) {
                      state.raise("Duplicate regular expression modifiers");
                    }
                  }
                }
              }
            }
            if (state.eat(
              58
              /* : */
            )) {
              this.regexp_disjunction(state);
              if (state.eat(
                41
                /* ) */
              )) {
                return true;
              }
              state.raise("Unterminated group");
            }
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatCapturingGroup = function(state) {
        if (state.eat(
          40
          /* ( */
        )) {
          if (this.options.ecmaVersion >= 9) {
            this.regexp_groupSpecifier(state);
          } else if (state.current() === 63) {
            state.raise("Invalid group");
          }
          this.regexp_disjunction(state);
          if (state.eat(
            41
            /* ) */
          )) {
            state.numCapturingParens += 1;
            return true;
          }
          state.raise("Unterminated group");
        }
        return false;
      };
      pp$1.regexp_eatModifiers = function(state) {
        var modifiers = "";
        var ch = 0;
        while ((ch = state.current()) !== -1 && isRegularExpressionModifier(ch)) {
          modifiers += codePointToString(ch);
          state.advance();
        }
        return modifiers;
      };
      function isRegularExpressionModifier(ch) {
        return ch === 105 || ch === 109 || ch === 115;
      }
      pp$1.regexp_eatExtendedAtom = function(state) {
        return state.eat(
          46
          /* . */
        ) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state) || this.regexp_eatInvalidBracedQuantifier(state) || this.regexp_eatExtendedPatternCharacter(state);
      };
      pp$1.regexp_eatInvalidBracedQuantifier = function(state) {
        if (this.regexp_eatBracedQuantifier(state, true)) {
          state.raise("Nothing to repeat");
        }
        return false;
      };
      pp$1.regexp_eatSyntaxCharacter = function(state) {
        var ch = state.current();
        if (isSyntaxCharacter(ch)) {
          state.lastIntValue = ch;
          state.advance();
          return true;
        }
        return false;
      };
      function isSyntaxCharacter(ch) {
        return ch === 36 || ch >= 40 && ch <= 43 || ch === 46 || ch === 63 || ch >= 91 && ch <= 94 || ch >= 123 && ch <= 125;
      }
      pp$1.regexp_eatPatternCharacters = function(state) {
        var start = state.pos;
        var ch = 0;
        while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
          state.advance();
        }
        return state.pos !== start;
      };
      pp$1.regexp_eatExtendedPatternCharacter = function(state) {
        var ch = state.current();
        if (ch !== -1 && ch !== 36 && !(ch >= 40 && ch <= 43) && ch !== 46 && ch !== 63 && ch !== 91 && ch !== 94 && ch !== 124) {
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_groupSpecifier = function(state) {
        if (state.eat(
          63
          /* ? */
        )) {
          if (!this.regexp_eatGroupName(state)) {
            state.raise("Invalid group");
          }
          var trackDisjunction = this.options.ecmaVersion >= 16;
          var known = state.groupNames[state.lastStringValue];
          if (known) {
            if (trackDisjunction) {
              for (var i2 = 0, list2 = known; i2 < list2.length; i2 += 1) {
                var altID = list2[i2];
                if (!altID.separatedFrom(state.branchID)) {
                  state.raise("Duplicate capture group name");
                }
              }
            } else {
              state.raise("Duplicate capture group name");
            }
          }
          if (trackDisjunction) {
            (known || (state.groupNames[state.lastStringValue] = [])).push(state.branchID);
          } else {
            state.groupNames[state.lastStringValue] = true;
          }
        }
      };
      pp$1.regexp_eatGroupName = function(state) {
        state.lastStringValue = "";
        if (state.eat(
          60
          /* < */
        )) {
          if (this.regexp_eatRegExpIdentifierName(state) && state.eat(
            62
            /* > */
          )) {
            return true;
          }
          state.raise("Invalid capture group name");
        }
        return false;
      };
      pp$1.regexp_eatRegExpIdentifierName = function(state) {
        state.lastStringValue = "";
        if (this.regexp_eatRegExpIdentifierStart(state)) {
          state.lastStringValue += codePointToString(state.lastIntValue);
          while (this.regexp_eatRegExpIdentifierPart(state)) {
            state.lastStringValue += codePointToString(state.lastIntValue);
          }
          return true;
        }
        return false;
      };
      pp$1.regexp_eatRegExpIdentifierStart = function(state) {
        var start = state.pos;
        var forceU = this.options.ecmaVersion >= 11;
        var ch = state.current(forceU);
        state.advance(forceU);
        if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
          ch = state.lastIntValue;
        }
        if (isRegExpIdentifierStart(ch)) {
          state.lastIntValue = ch;
          return true;
        }
        state.pos = start;
        return false;
      };
      function isRegExpIdentifierStart(ch) {
        return isIdentifierStart(ch, true) || ch === 36 || ch === 95;
      }
      pp$1.regexp_eatRegExpIdentifierPart = function(state) {
        var start = state.pos;
        var forceU = this.options.ecmaVersion >= 11;
        var ch = state.current(forceU);
        state.advance(forceU);
        if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
          ch = state.lastIntValue;
        }
        if (isRegExpIdentifierPart(ch)) {
          state.lastIntValue = ch;
          return true;
        }
        state.pos = start;
        return false;
      };
      function isRegExpIdentifierPart(ch) {
        return isIdentifierChar(ch, true) || ch === 36 || ch === 95 || ch === 8204 || ch === 8205;
      }
      pp$1.regexp_eatAtomEscape = function(state) {
        if (this.regexp_eatBackReference(state) || this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state) || state.switchN && this.regexp_eatKGroupName(state)) {
          return true;
        }
        if (state.switchU) {
          if (state.current() === 99) {
            state.raise("Invalid unicode escape");
          }
          state.raise("Invalid escape");
        }
        return false;
      };
      pp$1.regexp_eatBackReference = function(state) {
        var start = state.pos;
        if (this.regexp_eatDecimalEscape(state)) {
          var n = state.lastIntValue;
          if (state.switchU) {
            if (n > state.maxBackReference) {
              state.maxBackReference = n;
            }
            return true;
          }
          if (n <= state.numCapturingParens) {
            return true;
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatKGroupName = function(state) {
        if (state.eat(
          107
          /* k */
        )) {
          if (this.regexp_eatGroupName(state)) {
            state.backReferenceNames.push(state.lastStringValue);
            return true;
          }
          state.raise("Invalid named reference");
        }
        return false;
      };
      pp$1.regexp_eatCharacterEscape = function(state) {
        return this.regexp_eatControlEscape(state) || this.regexp_eatCControlLetter(state) || this.regexp_eatZero(state) || this.regexp_eatHexEscapeSequence(state) || this.regexp_eatRegExpUnicodeEscapeSequence(state, false) || !state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state) || this.regexp_eatIdentityEscape(state);
      };
      pp$1.regexp_eatCControlLetter = function(state) {
        var start = state.pos;
        if (state.eat(
          99
          /* c */
        )) {
          if (this.regexp_eatControlLetter(state)) {
            return true;
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatZero = function(state) {
        if (state.current() === 48 && !isDecimalDigit(state.lookahead())) {
          state.lastIntValue = 0;
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_eatControlEscape = function(state) {
        var ch = state.current();
        if (ch === 116) {
          state.lastIntValue = 9;
          state.advance();
          return true;
        }
        if (ch === 110) {
          state.lastIntValue = 10;
          state.advance();
          return true;
        }
        if (ch === 118) {
          state.lastIntValue = 11;
          state.advance();
          return true;
        }
        if (ch === 102) {
          state.lastIntValue = 12;
          state.advance();
          return true;
        }
        if (ch === 114) {
          state.lastIntValue = 13;
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_eatControlLetter = function(state) {
        var ch = state.current();
        if (isControlLetter(ch)) {
          state.lastIntValue = ch % 32;
          state.advance();
          return true;
        }
        return false;
      };
      function isControlLetter(ch) {
        return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
      }
      pp$1.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
        if (forceU === void 0) forceU = false;
        var start = state.pos;
        var switchU = forceU || state.switchU;
        if (state.eat(
          117
          /* u */
        )) {
          if (this.regexp_eatFixedHexDigits(state, 4)) {
            var lead = state.lastIntValue;
            if (switchU && lead >= 55296 && lead <= 56319) {
              var leadSurrogateEnd = state.pos;
              if (state.eat(
                92
                /* \ */
              ) && state.eat(
                117
                /* u */
              ) && this.regexp_eatFixedHexDigits(state, 4)) {
                var trail = state.lastIntValue;
                if (trail >= 56320 && trail <= 57343) {
                  state.lastIntValue = (lead - 55296) * 1024 + (trail - 56320) + 65536;
                  return true;
                }
              }
              state.pos = leadSurrogateEnd;
              state.lastIntValue = lead;
            }
            return true;
          }
          if (switchU && state.eat(
            123
            /* { */
          ) && this.regexp_eatHexDigits(state) && state.eat(
            125
            /* } */
          ) && isValidUnicode(state.lastIntValue)) {
            return true;
          }
          if (switchU) {
            state.raise("Invalid unicode escape");
          }
          state.pos = start;
        }
        return false;
      };
      function isValidUnicode(ch) {
        return ch >= 0 && ch <= 1114111;
      }
      pp$1.regexp_eatIdentityEscape = function(state) {
        if (state.switchU) {
          if (this.regexp_eatSyntaxCharacter(state)) {
            return true;
          }
          if (state.eat(
            47
            /* / */
          )) {
            state.lastIntValue = 47;
            return true;
          }
          return false;
        }
        var ch = state.current();
        if (ch !== 99 && (!state.switchN || ch !== 107)) {
          state.lastIntValue = ch;
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_eatDecimalEscape = function(state) {
        state.lastIntValue = 0;
        var ch = state.current();
        if (ch >= 49 && ch <= 57) {
          do {
            state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
            state.advance();
          } while ((ch = state.current()) >= 48 && ch <= 57);
          return true;
        }
        return false;
      };
      var CharSetNone = 0;
      var CharSetOk = 1;
      var CharSetString = 2;
      pp$1.regexp_eatCharacterClassEscape = function(state) {
        var ch = state.current();
        if (isCharacterClassEscape(ch)) {
          state.lastIntValue = -1;
          state.advance();
          return CharSetOk;
        }
        var negate = false;
        if (state.switchU && this.options.ecmaVersion >= 9 && ((negate = ch === 80) || ch === 112)) {
          state.lastIntValue = -1;
          state.advance();
          var result;
          if (state.eat(
            123
            /* { */
          ) && (result = this.regexp_eatUnicodePropertyValueExpression(state)) && state.eat(
            125
            /* } */
          )) {
            if (negate && result === CharSetString) {
              state.raise("Invalid property name");
            }
            return result;
          }
          state.raise("Invalid property name");
        }
        return CharSetNone;
      };
      function isCharacterClassEscape(ch) {
        return ch === 100 || ch === 68 || ch === 115 || ch === 83 || ch === 119 || ch === 87;
      }
      pp$1.regexp_eatUnicodePropertyValueExpression = function(state) {
        var start = state.pos;
        if (this.regexp_eatUnicodePropertyName(state) && state.eat(
          61
          /* = */
        )) {
          var name = state.lastStringValue;
          if (this.regexp_eatUnicodePropertyValue(state)) {
            var value = state.lastStringValue;
            this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
            return CharSetOk;
          }
        }
        state.pos = start;
        if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
          var nameOrValue = state.lastStringValue;
          return this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
        }
        return CharSetNone;
      };
      pp$1.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
        if (!hasOwn(state.unicodeProperties.nonBinary, name)) {
          state.raise("Invalid property name");
        }
        if (!state.unicodeProperties.nonBinary[name].test(value)) {
          state.raise("Invalid property value");
        }
      };
      pp$1.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
        if (state.unicodeProperties.binary.test(nameOrValue)) {
          return CharSetOk;
        }
        if (state.switchV && state.unicodeProperties.binaryOfStrings.test(nameOrValue)) {
          return CharSetString;
        }
        state.raise("Invalid property name");
      };
      pp$1.regexp_eatUnicodePropertyName = function(state) {
        var ch = 0;
        state.lastStringValue = "";
        while (isUnicodePropertyNameCharacter(ch = state.current())) {
          state.lastStringValue += codePointToString(ch);
          state.advance();
        }
        return state.lastStringValue !== "";
      };
      function isUnicodePropertyNameCharacter(ch) {
        return isControlLetter(ch) || ch === 95;
      }
      pp$1.regexp_eatUnicodePropertyValue = function(state) {
        var ch = 0;
        state.lastStringValue = "";
        while (isUnicodePropertyValueCharacter(ch = state.current())) {
          state.lastStringValue += codePointToString(ch);
          state.advance();
        }
        return state.lastStringValue !== "";
      };
      function isUnicodePropertyValueCharacter(ch) {
        return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch);
      }
      pp$1.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
        return this.regexp_eatUnicodePropertyValue(state);
      };
      pp$1.regexp_eatCharacterClass = function(state) {
        if (state.eat(
          91
          /* [ */
        )) {
          var negate = state.eat(
            94
            /* ^ */
          );
          var result = this.regexp_classContents(state);
          if (!state.eat(
            93
            /* ] */
          )) {
            state.raise("Unterminated character class");
          }
          if (negate && result === CharSetString) {
            state.raise("Negated character class may contain strings");
          }
          return true;
        }
        return false;
      };
      pp$1.regexp_classContents = function(state) {
        if (state.current() === 93) {
          return CharSetOk;
        }
        if (state.switchV) {
          return this.regexp_classSetExpression(state);
        }
        this.regexp_nonEmptyClassRanges(state);
        return CharSetOk;
      };
      pp$1.regexp_nonEmptyClassRanges = function(state) {
        while (this.regexp_eatClassAtom(state)) {
          var left = state.lastIntValue;
          if (state.eat(
            45
            /* - */
          ) && this.regexp_eatClassAtom(state)) {
            var right = state.lastIntValue;
            if (state.switchU && (left === -1 || right === -1)) {
              state.raise("Invalid character class");
            }
            if (left !== -1 && right !== -1 && left > right) {
              state.raise("Range out of order in character class");
            }
          }
        }
      };
      pp$1.regexp_eatClassAtom = function(state) {
        var start = state.pos;
        if (state.eat(
          92
          /* \ */
        )) {
          if (this.regexp_eatClassEscape(state)) {
            return true;
          }
          if (state.switchU) {
            var ch$1 = state.current();
            if (ch$1 === 99 || isOctalDigit(ch$1)) {
              state.raise("Invalid class escape");
            }
            state.raise("Invalid escape");
          }
          state.pos = start;
        }
        var ch = state.current();
        if (ch !== 93) {
          state.lastIntValue = ch;
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_eatClassEscape = function(state) {
        var start = state.pos;
        if (state.eat(
          98
          /* b */
        )) {
          state.lastIntValue = 8;
          return true;
        }
        if (state.switchU && state.eat(
          45
          /* - */
        )) {
          state.lastIntValue = 45;
          return true;
        }
        if (!state.switchU && state.eat(
          99
          /* c */
        )) {
          if (this.regexp_eatClassControlLetter(state)) {
            return true;
          }
          state.pos = start;
        }
        return this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state);
      };
      pp$1.regexp_classSetExpression = function(state) {
        var result = CharSetOk, subResult;
        if (this.regexp_eatClassSetRange(state)) ;
        else if (subResult = this.regexp_eatClassSetOperand(state)) {
          if (subResult === CharSetString) {
            result = CharSetString;
          }
          var start = state.pos;
          while (state.eatChars(
            [38, 38]
            /* && */
          )) {
            if (state.current() !== 38 && (subResult = this.regexp_eatClassSetOperand(state))) {
              if (subResult !== CharSetString) {
                result = CharSetOk;
              }
              continue;
            }
            state.raise("Invalid character in character class");
          }
          if (start !== state.pos) {
            return result;
          }
          while (state.eatChars(
            [45, 45]
            /* -- */
          )) {
            if (this.regexp_eatClassSetOperand(state)) {
              continue;
            }
            state.raise("Invalid character in character class");
          }
          if (start !== state.pos) {
            return result;
          }
        } else {
          state.raise("Invalid character in character class");
        }
        for (; ; ) {
          if (this.regexp_eatClassSetRange(state)) {
            continue;
          }
          subResult = this.regexp_eatClassSetOperand(state);
          if (!subResult) {
            return result;
          }
          if (subResult === CharSetString) {
            result = CharSetString;
          }
        }
      };
      pp$1.regexp_eatClassSetRange = function(state) {
        var start = state.pos;
        if (this.regexp_eatClassSetCharacter(state)) {
          var left = state.lastIntValue;
          if (state.eat(
            45
            /* - */
          ) && this.regexp_eatClassSetCharacter(state)) {
            var right = state.lastIntValue;
            if (left !== -1 && right !== -1 && left > right) {
              state.raise("Range out of order in character class");
            }
            return true;
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatClassSetOperand = function(state) {
        if (this.regexp_eatClassSetCharacter(state)) {
          return CharSetOk;
        }
        return this.regexp_eatClassStringDisjunction(state) || this.regexp_eatNestedClass(state);
      };
      pp$1.regexp_eatNestedClass = function(state) {
        var start = state.pos;
        if (state.eat(
          91
          /* [ */
        )) {
          var negate = state.eat(
            94
            /* ^ */
          );
          var result = this.regexp_classContents(state);
          if (state.eat(
            93
            /* ] */
          )) {
            if (negate && result === CharSetString) {
              state.raise("Negated character class may contain strings");
            }
            return result;
          }
          state.pos = start;
        }
        if (state.eat(
          92
          /* \ */
        )) {
          var result$1 = this.regexp_eatCharacterClassEscape(state);
          if (result$1) {
            return result$1;
          }
          state.pos = start;
        }
        return null;
      };
      pp$1.regexp_eatClassStringDisjunction = function(state) {
        var start = state.pos;
        if (state.eatChars(
          [92, 113]
          /* \q */
        )) {
          if (state.eat(
            123
            /* { */
          )) {
            var result = this.regexp_classStringDisjunctionContents(state);
            if (state.eat(
              125
              /* } */
            )) {
              return result;
            }
          } else {
            state.raise("Invalid escape");
          }
          state.pos = start;
        }
        return null;
      };
      pp$1.regexp_classStringDisjunctionContents = function(state) {
        var result = this.regexp_classString(state);
        while (state.eat(
          124
          /* | */
        )) {
          if (this.regexp_classString(state) === CharSetString) {
            result = CharSetString;
          }
        }
        return result;
      };
      pp$1.regexp_classString = function(state) {
        var count = 0;
        while (this.regexp_eatClassSetCharacter(state)) {
          count++;
        }
        return count === 1 ? CharSetOk : CharSetString;
      };
      pp$1.regexp_eatClassSetCharacter = function(state) {
        var start = state.pos;
        if (state.eat(
          92
          /* \ */
        )) {
          if (this.regexp_eatCharacterEscape(state) || this.regexp_eatClassSetReservedPunctuator(state)) {
            return true;
          }
          if (state.eat(
            98
            /* b */
          )) {
            state.lastIntValue = 8;
            return true;
          }
          state.pos = start;
          return false;
        }
        var ch = state.current();
        if (ch < 0 || ch === state.lookahead() && isClassSetReservedDoublePunctuatorCharacter(ch)) {
          return false;
        }
        if (isClassSetSyntaxCharacter(ch)) {
          return false;
        }
        state.advance();
        state.lastIntValue = ch;
        return true;
      };
      function isClassSetReservedDoublePunctuatorCharacter(ch) {
        return ch === 33 || ch >= 35 && ch <= 38 || ch >= 42 && ch <= 44 || ch === 46 || ch >= 58 && ch <= 64 || ch === 94 || ch === 96 || ch === 126;
      }
      function isClassSetSyntaxCharacter(ch) {
        return ch === 40 || ch === 41 || ch === 45 || ch === 47 || ch >= 91 && ch <= 93 || ch >= 123 && ch <= 125;
      }
      pp$1.regexp_eatClassSetReservedPunctuator = function(state) {
        var ch = state.current();
        if (isClassSetReservedPunctuator(ch)) {
          state.lastIntValue = ch;
          state.advance();
          return true;
        }
        return false;
      };
      function isClassSetReservedPunctuator(ch) {
        return ch === 33 || ch === 35 || ch === 37 || ch === 38 || ch === 44 || ch === 45 || ch >= 58 && ch <= 62 || ch === 64 || ch === 96 || ch === 126;
      }
      pp$1.regexp_eatClassControlLetter = function(state) {
        var ch = state.current();
        if (isDecimalDigit(ch) || ch === 95) {
          state.lastIntValue = ch % 32;
          state.advance();
          return true;
        }
        return false;
      };
      pp$1.regexp_eatHexEscapeSequence = function(state) {
        var start = state.pos;
        if (state.eat(
          120
          /* x */
        )) {
          if (this.regexp_eatFixedHexDigits(state, 2)) {
            return true;
          }
          if (state.switchU) {
            state.raise("Invalid escape");
          }
          state.pos = start;
        }
        return false;
      };
      pp$1.regexp_eatDecimalDigits = function(state) {
        var start = state.pos;
        var ch = 0;
        state.lastIntValue = 0;
        while (isDecimalDigit(ch = state.current())) {
          state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
          state.advance();
        }
        return state.pos !== start;
      };
      function isDecimalDigit(ch) {
        return ch >= 48 && ch <= 57;
      }
      pp$1.regexp_eatHexDigits = function(state) {
        var start = state.pos;
        var ch = 0;
        state.lastIntValue = 0;
        while (isHexDigit(ch = state.current())) {
          state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
          state.advance();
        }
        return state.pos !== start;
      };
      function isHexDigit(ch) {
        return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102;
      }
      function hexToInt(ch) {
        if (ch >= 65 && ch <= 70) {
          return 10 + (ch - 65);
        }
        if (ch >= 97 && ch <= 102) {
          return 10 + (ch - 97);
        }
        return ch - 48;
      }
      pp$1.regexp_eatLegacyOctalEscapeSequence = function(state) {
        if (this.regexp_eatOctalDigit(state)) {
          var n1 = state.lastIntValue;
          if (this.regexp_eatOctalDigit(state)) {
            var n2 = state.lastIntValue;
            if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
              state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
            } else {
              state.lastIntValue = n1 * 8 + n2;
            }
          } else {
            state.lastIntValue = n1;
          }
          return true;
        }
        return false;
      };
      pp$1.regexp_eatOctalDigit = function(state) {
        var ch = state.current();
        if (isOctalDigit(ch)) {
          state.lastIntValue = ch - 48;
          state.advance();
          return true;
        }
        state.lastIntValue = 0;
        return false;
      };
      function isOctalDigit(ch) {
        return ch >= 48 && ch <= 55;
      }
      pp$1.regexp_eatFixedHexDigits = function(state, length) {
        var start = state.pos;
        state.lastIntValue = 0;
        for (var i2 = 0; i2 < length; ++i2) {
          var ch = state.current();
          if (!isHexDigit(ch)) {
            state.pos = start;
            return false;
          }
          state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
          state.advance();
        }
        return true;
      };
      var Token = function Token2(p) {
        this.type = p.type;
        this.value = p.value;
        this.start = p.start;
        this.end = p.end;
        if (p.options.locations) {
          this.loc = new SourceLocation(p, p.startLoc, p.endLoc);
        }
        if (p.options.ranges) {
          this.range = [p.start, p.end];
        }
      };
      var pp = Parser.prototype;
      pp.next = function(ignoreEscapeSequenceInKeyword) {
        if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc) {
          this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
        }
        if (this.options.onToken) {
          this.options.onToken(new Token(this));
        }
        this.lastTokEnd = this.end;
        this.lastTokStart = this.start;
        this.lastTokEndLoc = this.endLoc;
        this.lastTokStartLoc = this.startLoc;
        this.nextToken();
      };
      pp.getToken = function() {
        this.next();
        return new Token(this);
      };
      if (typeof Symbol !== "undefined") {
        pp[Symbol.iterator] = function() {
          var this$1$1 = this;
          return {
            next: function() {
              var token = this$1$1.getToken();
              return {
                done: token.type === types$1.eof,
                value: token
              };
            }
          };
        };
      }
      pp.nextToken = function() {
        var curContext = this.curContext();
        if (!curContext || !curContext.preserveSpace) {
          this.skipSpace();
        }
        this.start = this.pos;
        if (this.options.locations) {
          this.startLoc = this.curPosition();
        }
        if (this.pos >= this.input.length) {
          return this.finishToken(types$1.eof);
        }
        if (curContext.override) {
          return curContext.override(this);
        } else {
          this.readToken(this.fullCharCodeAtPos());
        }
      };
      pp.readToken = function(code) {
        if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92) {
          return this.readWord();
        }
        return this.getTokenFromCode(code);
      };
      pp.fullCharCodeAtPos = function() {
        var code = this.input.charCodeAt(this.pos);
        if (code <= 55295 || code >= 56320) {
          return code;
        }
        var next = this.input.charCodeAt(this.pos + 1);
        return next <= 56319 || next >= 57344 ? code : (code << 10) + next - 56613888;
      };
      pp.skipBlockComment = function() {
        var startLoc = this.options.onComment && this.curPosition();
        var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
        if (end === -1) {
          this.raise(this.pos - 2, "Unterminated comment");
        }
        this.pos = end + 2;
        if (this.options.locations) {
          for (var nextBreak = void 0, pos = start; (nextBreak = nextLineBreak(this.input, pos, this.pos)) > -1; ) {
            ++this.curLine;
            pos = this.lineStart = nextBreak;
          }
        }
        if (this.options.onComment) {
          this.options.onComment(
            true,
            this.input.slice(start + 2, end),
            start,
            this.pos,
            startLoc,
            this.curPosition()
          );
        }
      };
      pp.skipLineComment = function(startSkip) {
        var start = this.pos;
        var startLoc = this.options.onComment && this.curPosition();
        var ch = this.input.charCodeAt(this.pos += startSkip);
        while (this.pos < this.input.length && !isNewLine(ch)) {
          ch = this.input.charCodeAt(++this.pos);
        }
        if (this.options.onComment) {
          this.options.onComment(
            false,
            this.input.slice(start + startSkip, this.pos),
            start,
            this.pos,
            startLoc,
            this.curPosition()
          );
        }
      };
      pp.skipSpace = function() {
        loop: while (this.pos < this.input.length) {
          var ch = this.input.charCodeAt(this.pos);
          switch (ch) {
            case 32:
            case 160:
              ++this.pos;
              break;
            case 13:
              if (this.input.charCodeAt(this.pos + 1) === 10) {
                ++this.pos;
              }
            case 10:
            case 8232:
            case 8233:
              ++this.pos;
              if (this.options.locations) {
                ++this.curLine;
                this.lineStart = this.pos;
              }
              break;
            case 47:
              switch (this.input.charCodeAt(this.pos + 1)) {
                case 42:
                  this.skipBlockComment();
                  break;
                case 47:
                  this.skipLineComment(2);
                  break;
                default:
                  break loop;
              }
              break;
            default:
              if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
                ++this.pos;
              } else {
                break loop;
              }
          }
        }
      };
      pp.finishToken = function(type, val) {
        this.end = this.pos;
        if (this.options.locations) {
          this.endLoc = this.curPosition();
        }
        var prevType = this.type;
        this.type = type;
        this.value = val;
        this.updateContext(prevType);
      };
      pp.readToken_dot = function() {
        var next = this.input.charCodeAt(this.pos + 1);
        if (next >= 48 && next <= 57) {
          return this.readNumber(true);
        }
        var next2 = this.input.charCodeAt(this.pos + 2);
        if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) {
          this.pos += 3;
          return this.finishToken(types$1.ellipsis);
        } else {
          ++this.pos;
          return this.finishToken(types$1.dot);
        }
      };
      pp.readToken_slash = function() {
        var next = this.input.charCodeAt(this.pos + 1);
        if (this.exprAllowed) {
          ++this.pos;
          return this.readRegexp();
        }
        if (next === 61) {
          return this.finishOp(types$1.assign, 2);
        }
        return this.finishOp(types$1.slash, 1);
      };
      pp.readToken_mult_modulo_exp = function(code) {
        var next = this.input.charCodeAt(this.pos + 1);
        var size = 1;
        var tokentype = code === 42 ? types$1.star : types$1.modulo;
        if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
          ++size;
          tokentype = types$1.starstar;
          next = this.input.charCodeAt(this.pos + 2);
        }
        if (next === 61) {
          return this.finishOp(types$1.assign, size + 1);
        }
        return this.finishOp(tokentype, size);
      };
      pp.readToken_pipe_amp = function(code) {
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === code) {
          if (this.options.ecmaVersion >= 12) {
            var next2 = this.input.charCodeAt(this.pos + 2);
            if (next2 === 61) {
              return this.finishOp(types$1.assign, 3);
            }
          }
          return this.finishOp(code === 124 ? types$1.logicalOR : types$1.logicalAND, 2);
        }
        if (next === 61) {
          return this.finishOp(types$1.assign, 2);
        }
        return this.finishOp(code === 124 ? types$1.bitwiseOR : types$1.bitwiseAND, 1);
      };
      pp.readToken_caret = function() {
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === 61) {
          return this.finishOp(types$1.assign, 2);
        }
        return this.finishOp(types$1.bitwiseXOR, 1);
      };
      pp.readToken_plus_min = function(code) {
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === code) {
          if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
            this.skipLineComment(3);
            this.skipSpace();
            return this.nextToken();
          }
          return this.finishOp(types$1.incDec, 2);
        }
        if (next === 61) {
          return this.finishOp(types$1.assign, 2);
        }
        return this.finishOp(types$1.plusMin, 1);
      };
      pp.readToken_lt_gt = function(code) {
        var next = this.input.charCodeAt(this.pos + 1);
        var size = 1;
        if (next === code) {
          size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
          if (this.input.charCodeAt(this.pos + size) === 61) {
            return this.finishOp(types$1.assign, size + 1);
          }
          return this.finishOp(types$1.bitShift, size);
        }
        if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) {
          this.skipLineComment(4);
          this.skipSpace();
          return this.nextToken();
        }
        if (next === 61) {
          size = 2;
        }
        return this.finishOp(types$1.relational, size);
      };
      pp.readToken_eq_excl = function(code) {
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === 61) {
          return this.finishOp(types$1.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
        }
        if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) {
          this.pos += 2;
          return this.finishToken(types$1.arrow);
        }
        return this.finishOp(code === 61 ? types$1.eq : types$1.prefix, 1);
      };
      pp.readToken_question = function() {
        var ecmaVersion2 = this.options.ecmaVersion;
        if (ecmaVersion2 >= 11) {
          var next = this.input.charCodeAt(this.pos + 1);
          if (next === 46) {
            var next2 = this.input.charCodeAt(this.pos + 2);
            if (next2 < 48 || next2 > 57) {
              return this.finishOp(types$1.questionDot, 2);
            }
          }
          if (next === 63) {
            if (ecmaVersion2 >= 12) {
              var next2$1 = this.input.charCodeAt(this.pos + 2);
              if (next2$1 === 61) {
                return this.finishOp(types$1.assign, 3);
              }
            }
            return this.finishOp(types$1.coalesce, 2);
          }
        }
        return this.finishOp(types$1.question, 1);
      };
      pp.readToken_numberSign = function() {
        var ecmaVersion2 = this.options.ecmaVersion;
        var code = 35;
        if (ecmaVersion2 >= 13) {
          ++this.pos;
          code = this.fullCharCodeAtPos();
          if (isIdentifierStart(code, true) || code === 92) {
            return this.finishToken(types$1.privateId, this.readWord1());
          }
        }
        this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
      };
      pp.getTokenFromCode = function(code) {
        switch (code) {
          // The interpretation of a dot depends on whether it is followed
          // by a digit or another two dots.
          case 46:
            return this.readToken_dot();
          // Punctuation tokens.
          case 40:
            ++this.pos;
            return this.finishToken(types$1.parenL);
          case 41:
            ++this.pos;
            return this.finishToken(types$1.parenR);
          case 59:
            ++this.pos;
            return this.finishToken(types$1.semi);
          case 44:
            ++this.pos;
            return this.finishToken(types$1.comma);
          case 91:
            ++this.pos;
            return this.finishToken(types$1.bracketL);
          case 93:
            ++this.pos;
            return this.finishToken(types$1.bracketR);
          case 123:
            ++this.pos;
            return this.finishToken(types$1.braceL);
          case 125:
            ++this.pos;
            return this.finishToken(types$1.braceR);
          case 58:
            ++this.pos;
            return this.finishToken(types$1.colon);
          case 96:
            if (this.options.ecmaVersion < 6) {
              break;
            }
            ++this.pos;
            return this.finishToken(types$1.backQuote);
          case 48:
            var next = this.input.charCodeAt(this.pos + 1);
            if (next === 120 || next === 88) {
              return this.readRadixNumber(16);
            }
            if (this.options.ecmaVersion >= 6) {
              if (next === 111 || next === 79) {
                return this.readRadixNumber(8);
              }
              if (next === 98 || next === 66) {
                return this.readRadixNumber(2);
              }
            }
          // Anything else beginning with a digit is an integer, octal
          // number, or float.
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return this.readNumber(false);
          // Quotes produce strings.
          case 34:
          case 39:
            return this.readString(code);
          // Operators are parsed inline in tiny state machines. '=' (61) is
          // often referred to. `finishOp` simply skips the amount of
          // characters it is given as second argument, and returns a token
          // of the type given by its first argument.
          case 47:
            return this.readToken_slash();
          case 37:
          case 42:
            return this.readToken_mult_modulo_exp(code);
          case 124:
          case 38:
            return this.readToken_pipe_amp(code);
          case 94:
            return this.readToken_caret();
          case 43:
          case 45:
            return this.readToken_plus_min(code);
          case 60:
          case 62:
            return this.readToken_lt_gt(code);
          case 61:
          case 33:
            return this.readToken_eq_excl(code);
          case 63:
            return this.readToken_question();
          case 126:
            return this.finishOp(types$1.prefix, 1);
          case 35:
            return this.readToken_numberSign();
        }
        this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
      };
      pp.finishOp = function(type, size) {
        var str = this.input.slice(this.pos, this.pos + size);
        this.pos += size;
        return this.finishToken(type, str);
      };
      pp.readRegexp = function() {
        var escaped, inClass, start = this.pos;
        for (; ; ) {
          if (this.pos >= this.input.length) {
            this.raise(start, "Unterminated regular expression");
          }
          var ch = this.input.charAt(this.pos);
          if (lineBreak.test(ch)) {
            this.raise(start, "Unterminated regular expression");
          }
          if (!escaped) {
            if (ch === "[") {
              inClass = true;
            } else if (ch === "]" && inClass) {
              inClass = false;
            } else if (ch === "/" && !inClass) {
              break;
            }
            escaped = ch === "\\";
          } else {
            escaped = false;
          }
          ++this.pos;
        }
        var pattern = this.input.slice(start, this.pos);
        ++this.pos;
        var flagsStart = this.pos;
        var flags = this.readWord1();
        if (this.containsEsc) {
          this.unexpected(flagsStart);
        }
        var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
        state.reset(start, pattern, flags);
        this.validateRegExpFlags(state);
        this.validateRegExpPattern(state);
        var value = null;
        try {
          value = new RegExp(pattern, flags);
        } catch (e) {
        }
        return this.finishToken(types$1.regexp, { pattern, flags, value });
      };
      pp.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
        var allowSeparators = this.options.ecmaVersion >= 12 && len === void 0;
        var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;
        var start = this.pos, total = 0, lastCode = 0;
        for (var i2 = 0, e = len == null ? Infinity : len; i2 < e; ++i2, ++this.pos) {
          var code = this.input.charCodeAt(this.pos), val = void 0;
          if (allowSeparators && code === 95) {
            if (isLegacyOctalNumericLiteral) {
              this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
            }
            if (lastCode === 95) {
              this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
            }
            if (i2 === 0) {
              this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
            }
            lastCode = code;
            continue;
          }
          if (code >= 97) {
            val = code - 97 + 10;
          } else if (code >= 65) {
            val = code - 65 + 10;
          } else if (code >= 48 && code <= 57) {
            val = code - 48;
          } else {
            val = Infinity;
          }
          if (val >= radix) {
            break;
          }
          lastCode = code;
          total = total * radix + val;
        }
        if (allowSeparators && lastCode === 95) {
          this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
        }
        if (this.pos === start || len != null && this.pos - start !== len) {
          return null;
        }
        return total;
      };
      function stringToNumber(str, isLegacyOctalNumericLiteral) {
        if (isLegacyOctalNumericLiteral) {
          return parseInt(str, 8);
        }
        return parseFloat(str.replace(/_/g, ""));
      }
      function stringToBigInt(str) {
        if (typeof BigInt !== "function") {
          return null;
        }
        return BigInt(str.replace(/_/g, ""));
      }
      pp.readRadixNumber = function(radix) {
        var start = this.pos;
        this.pos += 2;
        var val = this.readInt(radix);
        if (val == null) {
          this.raise(this.start + 2, "Expected number in radix " + radix);
        }
        if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
          val = stringToBigInt(this.input.slice(start, this.pos));
          ++this.pos;
        } else if (isIdentifierStart(this.fullCharCodeAtPos())) {
          this.raise(this.pos, "Identifier directly after number");
        }
        return this.finishToken(types$1.num, val);
      };
      pp.readNumber = function(startsWithDot) {
        var start = this.pos;
        if (!startsWithDot && this.readInt(10, void 0, true) === null) {
          this.raise(start, "Invalid number");
        }
        var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
        if (octal && this.strict) {
          this.raise(start, "Invalid number");
        }
        var next = this.input.charCodeAt(this.pos);
        if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
          var val$1 = stringToBigInt(this.input.slice(start, this.pos));
          ++this.pos;
          if (isIdentifierStart(this.fullCharCodeAtPos())) {
            this.raise(this.pos, "Identifier directly after number");
          }
          return this.finishToken(types$1.num, val$1);
        }
        if (octal && /[89]/.test(this.input.slice(start, this.pos))) {
          octal = false;
        }
        if (next === 46 && !octal) {
          ++this.pos;
          this.readInt(10);
          next = this.input.charCodeAt(this.pos);
        }
        if ((next === 69 || next === 101) && !octal) {
          next = this.input.charCodeAt(++this.pos);
          if (next === 43 || next === 45) {
            ++this.pos;
          }
          if (this.readInt(10) === null) {
            this.raise(start, "Invalid number");
          }
        }
        if (isIdentifierStart(this.fullCharCodeAtPos())) {
          this.raise(this.pos, "Identifier directly after number");
        }
        var val = stringToNumber(this.input.slice(start, this.pos), octal);
        return this.finishToken(types$1.num, val);
      };
      pp.readCodePoint = function() {
        var ch = this.input.charCodeAt(this.pos), code;
        if (ch === 123) {
          if (this.options.ecmaVersion < 6) {
            this.unexpected();
          }
          var codePos = ++this.pos;
          code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
          ++this.pos;
          if (code > 1114111) {
            this.invalidStringToken(codePos, "Code point out of bounds");
          }
        } else {
          code = this.readHexChar(4);
        }
        return code;
      };
      pp.readString = function(quote) {
        var out = "", chunkStart = ++this.pos;
        for (; ; ) {
          if (this.pos >= this.input.length) {
            this.raise(this.start, "Unterminated string constant");
          }
          var ch = this.input.charCodeAt(this.pos);
          if (ch === quote) {
            break;
          }
          if (ch === 92) {
            out += this.input.slice(chunkStart, this.pos);
            out += this.readEscapedChar(false);
            chunkStart = this.pos;
          } else if (ch === 8232 || ch === 8233) {
            if (this.options.ecmaVersion < 10) {
              this.raise(this.start, "Unterminated string constant");
            }
            ++this.pos;
            if (this.options.locations) {
              this.curLine++;
              this.lineStart = this.pos;
            }
          } else {
            if (isNewLine(ch)) {
              this.raise(this.start, "Unterminated string constant");
            }
            ++this.pos;
          }
        }
        out += this.input.slice(chunkStart, this.pos++);
        return this.finishToken(types$1.string, out);
      };
      var INVALID_TEMPLATE_ESCAPE_ERROR = {};
      pp.tryReadTemplateToken = function() {
        this.inTemplateElement = true;
        try {
          this.readTmplToken();
        } catch (err) {
          if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
            this.readInvalidTemplateToken();
          } else {
            throw err;
          }
        }
        this.inTemplateElement = false;
      };
      pp.invalidStringToken = function(position, message) {
        if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
          throw INVALID_TEMPLATE_ESCAPE_ERROR;
        } else {
          this.raise(position, message);
        }
      };
      pp.readTmplToken = function() {
        var out = "", chunkStart = this.pos;
        for (; ; ) {
          if (this.pos >= this.input.length) {
            this.raise(this.start, "Unterminated template");
          }
          var ch = this.input.charCodeAt(this.pos);
          if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
            if (this.pos === this.start && (this.type === types$1.template || this.type === types$1.invalidTemplate)) {
              if (ch === 36) {
                this.pos += 2;
                return this.finishToken(types$1.dollarBraceL);
              } else {
                ++this.pos;
                return this.finishToken(types$1.backQuote);
              }
            }
            out += this.input.slice(chunkStart, this.pos);
            return this.finishToken(types$1.template, out);
          }
          if (ch === 92) {
            out += this.input.slice(chunkStart, this.pos);
            out += this.readEscapedChar(true);
            chunkStart = this.pos;
          } else if (isNewLine(ch)) {
            out += this.input.slice(chunkStart, this.pos);
            ++this.pos;
            switch (ch) {
              case 13:
                if (this.input.charCodeAt(this.pos) === 10) {
                  ++this.pos;
                }
              case 10:
                out += "\n";
                break;
              default:
                out += String.fromCharCode(ch);
                break;
            }
            if (this.options.locations) {
              ++this.curLine;
              this.lineStart = this.pos;
            }
            chunkStart = this.pos;
          } else {
            ++this.pos;
          }
        }
      };
      pp.readInvalidTemplateToken = function() {
        for (; this.pos < this.input.length; this.pos++) {
          switch (this.input[this.pos]) {
            case "\\":
              ++this.pos;
              break;
            case "$":
              if (this.input[this.pos + 1] !== "{") {
                break;
              }
            // fall through
            case "`":
              return this.finishToken(types$1.invalidTemplate, this.input.slice(this.start, this.pos));
            case "\r":
              if (this.input[this.pos + 1] === "\n") {
                ++this.pos;
              }
            // fall through
            case "\n":
            case "\u2028":
            case "\u2029":
              ++this.curLine;
              this.lineStart = this.pos + 1;
              break;
          }
        }
        this.raise(this.start, "Unterminated template");
      };
      pp.readEscapedChar = function(inTemplate) {
        var ch = this.input.charCodeAt(++this.pos);
        ++this.pos;
        switch (ch) {
          case 110:
            return "\n";
          // 'n' -> '\n'
          case 114:
            return "\r";
          // 'r' -> '\r'
          case 120:
            return String.fromCharCode(this.readHexChar(2));
          // 'x'
          case 117:
            return codePointToString(this.readCodePoint());
          // 'u'
          case 116:
            return "	";
          // 't' -> '\t'
          case 98:
            return "\b";
          // 'b' -> '\b'
          case 118:
            return "\v";
          // 'v' -> '\u000b'
          case 102:
            return "\f";
          // 'f' -> '\f'
          case 13:
            if (this.input.charCodeAt(this.pos) === 10) {
              ++this.pos;
            }
          // '\r\n'
          case 10:
            if (this.options.locations) {
              this.lineStart = this.pos;
              ++this.curLine;
            }
            return "";
          case 56:
          case 57:
            if (this.strict) {
              this.invalidStringToken(
                this.pos - 1,
                "Invalid escape sequence"
              );
            }
            if (inTemplate) {
              var codePos = this.pos - 1;
              this.invalidStringToken(
                codePos,
                "Invalid escape sequence in template string"
              );
            }
          default:
            if (ch >= 48 && ch <= 55) {
              var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
              var octal = parseInt(octalStr, 8);
              if (octal > 255) {
                octalStr = octalStr.slice(0, -1);
                octal = parseInt(octalStr, 8);
              }
              this.pos += octalStr.length - 1;
              ch = this.input.charCodeAt(this.pos);
              if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
                this.invalidStringToken(
                  this.pos - 1 - octalStr.length,
                  inTemplate ? "Octal literal in template string" : "Octal literal in strict mode"
                );
              }
              return String.fromCharCode(octal);
            }
            if (isNewLine(ch)) {
              if (this.options.locations) {
                this.lineStart = this.pos;
                ++this.curLine;
              }
              return "";
            }
            return String.fromCharCode(ch);
        }
      };
      pp.readHexChar = function(len) {
        var codePos = this.pos;
        var n = this.readInt(16, len);
        if (n === null) {
          this.invalidStringToken(codePos, "Bad character escape sequence");
        }
        return n;
      };
      pp.readWord1 = function() {
        this.containsEsc = false;
        var word = "", first = true, chunkStart = this.pos;
        var astral = this.options.ecmaVersion >= 6;
        while (this.pos < this.input.length) {
          var ch = this.fullCharCodeAtPos();
          if (isIdentifierChar(ch, astral)) {
            this.pos += ch <= 65535 ? 1 : 2;
          } else if (ch === 92) {
            this.containsEsc = true;
            word += this.input.slice(chunkStart, this.pos);
            var escStart = this.pos;
            if (this.input.charCodeAt(++this.pos) !== 117) {
              this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
            }
            ++this.pos;
            var esc = this.readCodePoint();
            if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral)) {
              this.invalidStringToken(escStart, "Invalid Unicode escape");
            }
            word += codePointToString(esc);
            chunkStart = this.pos;
          } else {
            break;
          }
          first = false;
        }
        return word + this.input.slice(chunkStart, this.pos);
      };
      pp.readWord = function() {
        var word = this.readWord1();
        var type = types$1.name;
        if (this.keywords.test(word)) {
          type = keywords[word];
        }
        return this.finishToken(type, word);
      };
      var version = "8.15.0";
      Parser.acorn = {
        Parser,
        version,
        defaultOptions,
        Position,
        SourceLocation,
        getLineInfo,
        Node,
        TokenType,
        tokTypes: types$1,
        keywordTypes: keywords,
        TokContext,
        tokContexts: types2,
        isIdentifierChar,
        isIdentifierStart,
        Token,
        isNewLine,
        lineBreak,
        lineBreakG,
        nonASCIIwhitespace
      };
      function parse2(input, options) {
        return Parser.parse(input, options);
      }
      function parseExpressionAt(input, pos, options) {
        return Parser.parseExpressionAt(input, pos, options);
      }
      function tokenizer(input, options) {
        return Parser.tokenizer(input, options);
      }
      exports3.Node = Node;
      exports3.Parser = Parser;
      exports3.Position = Position;
      exports3.SourceLocation = SourceLocation;
      exports3.TokContext = TokContext;
      exports3.Token = Token;
      exports3.TokenType = TokenType;
      exports3.defaultOptions = defaultOptions;
      exports3.getLineInfo = getLineInfo;
      exports3.isIdentifierChar = isIdentifierChar;
      exports3.isIdentifierStart = isIdentifierStart;
      exports3.isNewLine = isNewLine;
      exports3.keywordTypes = keywords;
      exports3.lineBreak = lineBreak;
      exports3.lineBreakG = lineBreakG;
      exports3.nonASCIIwhitespace = nonASCIIwhitespace;
      exports3.parse = parse2;
      exports3.parseExpressionAt = parseExpressionAt;
      exports3.tokContexts = types2;
      exports3.tokTypes = types$1;
      exports3.tokenizer = tokenizer;
      exports3.version = version;
    });
  }
});

// api.js
var { parse, print, types, visit } = require_main2();
var b = types.builders;
var THIS_ID = b.identifier("this");
var ASYNC_GEN_ID = b.identifier("__ASYNC_GENERATOR$$");
var SYMBOL_ASYNC_ITERATOR = b.memberExpression(b.identifier("Symbol"), b.identifier("asyncIterator"), false);
var VALUE_ID = b.identifier("value");
var DONE_ID = b.identifier("done");
var DONE_OBF_ID = b.identifier("__DONE$$");
var NEXT_ID = b.identifier("next");
function transformBody(body) {
  body.body?.push(b.returnStatement(null));
  return b.blockStatement([
    b.returnStatement(b.callExpression(
      b.identifier("__PROMISEV3_GENERATOR_TO_PROMISE$$"),
      [b.functionExpression(
        null,
        [],
        body,
        true,
        true
      ), THIS_ID]
    ))
  ]);
}
module.exports = function transform(str) {
  const ast = parse(str, {
    // esprima keeps comments in but acorn supports newer ecma shit
    // line numbers are already fucked anyway
    parser: {
      parse(source) {
        return require_acorn().parse(source, {
          ecmaVersion: "latest"
        });
      }
    }
  });
  visit(ast, {
    visitFunctionDeclaration(path) {
      if (path.node.async) {
        if (path.node.generator) throw "unfortunately go fuck yourself. no async generators. feel free to implement your own *[Symbol.asyncIterator]() {}. for await of works though";
        path.node.async = false;
        path.node.body = transformBody(path.node.body);
      }
      this.traverse(path);
    },
    visitFunctionExpression(path) {
      if (path.node.async) {
        path.node.async = false;
        path.node.body = transformBody(path.node.body);
      }
      this.traverse(path);
    },
    visitArrowFunctionExpression(path) {
      if (path.node.async) {
        path.node.async = false;
        const isBodyless = path.node.body.type !== "BlockStatement";
        path.node.body = transformBody(isBodyless ? b.blockStatement([b.expressionStatement(path.node.body)]) : path.node.body);
        if (isBodyless) path.node.body = path.node.body.body[0].argument;
      }
      this.traverse(path);
    },
    visitAwaitExpression(path) {
      path.replace(b.yieldExpression(path.node.argument, false));
      this.traverse(path);
    },
    visitForOfStatement(path) {
      if (path.value.await) {
        path.replace(b.blockStatement([
          b.variableDeclaration(
            "const",
            [b.variableDeclarator(
              ASYNC_GEN_ID,
              b.callExpression(b.memberExpression(path.value.right, SYMBOL_ASYNC_ITERATOR, true), [])
            )]
          ),
          b.whileStatement(
            b.literal(true),
            b.blockStatement([
              b.variableDeclaration(
                path.value.left.kind,
                [b.variableDeclarator(b.objectPattern([
                  b.property("init", VALUE_ID, path.value.left.declarations[0].id),
                  b.property("init", DONE_ID, DONE_OBF_ID)
                ]), b.yieldExpression(b.callExpression(b.memberExpression(ASYNC_GEN_ID, NEXT_ID, false), []), false))]
              ),
              b.ifStatement(
                DONE_OBF_ID,
                b.breakStatement(null),
                null
              ),
              ...path.value.body.body
            ])
          )
        ]));
      }
      this.traverse(path);
    },
    visitForAwaitStatement(path) {
      this.traverse(path);
    }
  });
  return print(ast).code;
};
