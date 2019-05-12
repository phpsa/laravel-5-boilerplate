(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/backend"],{

/***/ "./node_modules/@coreui/coreui/dist/js/coreui.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/coreui/dist/js/coreui.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * CoreUI v2.1.9 (https://coreui.io)
  * Copyright 2019 Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js")) :
  undefined;
}(this, function (exports, $, PerfectScrollbar) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  PerfectScrollbar = PerfectScrollbar && PerfectScrollbar.hasOwnProperty('default') ? PerfectScrollbar['default'] : PerfectScrollbar;

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.6.5' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core.version,
    mode: 'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var id = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');

  var Symbol = _global.Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
  };

  $exports.store = store;
  });

  // 7.2.8 IsRegExp(argument)


  var MATCH = _wks('match');
  var _isRegexp = function (it) {
    var isRegExp;
    return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // 7.3.20 SpeciesConstructor(O, defaultConstructor)


  var SPECIES = _wks('species');
  var _speciesConstructor = function (O, D) {
    var C = _anObject(O).constructor;
    var S;
    return C === undefined || (S = _anObject(C)[SPECIES]) == undefined ? D : _aFunction(S);
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // true  -> String#at
  // false -> String#codePointAt
  var _stringAt = function (TO_STRING) {
    return function (that, pos) {
      var s = String(_defined(that));
      var i = _toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var at = _stringAt(true);

   // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex
  var _advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? at(S, index).length : 1);
  };

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  // getting tag from 19.1.3.6 Object.prototype.toString()

  var TAG = _wks('toStringTag');
  // ES3 wrong here
  var ARG = _cof(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) { /* empty */ }
  };

  var _classof = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
      // builtinTag case
      : ARG ? _cof(O)
      // ES3 arguments fallback
      : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var builtinExec = RegExp.prototype.exec;

   // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec
  var _regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw new TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }
    if (_classof(R) !== 'RegExp') {
      throw new TypeError('RegExp#exec called on incompatible receiver');
    }
    return builtinExec.call(R, S);
  };

  // 21.2.5.3 get RegExp.prototype.flags

  var _flags = function () {
    var that = _anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var nativeExec = RegExp.prototype.exec;
  // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.
  var nativeReplace = String.prototype.replace;

  var patchedExec = nativeExec;

  var LAST_INDEX = 'lastIndex';

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/,
        re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
  })();

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + re.source + '$(?!\\s)', _flags.call(re));
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

      match = nativeExec.call(re, str);

      if (UPDATES_LAST_INDEX_WRONG && match) {
        re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        // eslint-disable-next-line no-loop-func
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var _regexpExec = patchedExec;

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var document$1 = _global.document;
  // typeof document.createElement is 'object' in old IE
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var _functionToString = _shared('native-function-to-string', Function.toString);

  var _redefine = createCommonjsModule(function (module) {
  var SRC = _uid('src');

  var TO_STRING = 'toString';
  var TPL = ('' + _functionToString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return _functionToString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === _global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      _hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      _hide(O, key, val);
    }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || _functionToString.call(this);
  });
  });

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
      // extend global
      if (target) _redefine(target, key, out, type & $export.U);
      // export
      if (exports[key] != out) _hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  _global.core = _core;
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  _export({
    target: 'RegExp',
    proto: true,
    forced: _regexpExec !== /./.exec
  }, {
    exec: _regexpExec
  });

  var SPECIES$1 = _wks('species');

  var REPLACE_SUPPORTS_NAMED_GROUPS = !_fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length === 2 && result[0] === 'a' && result[1] === 'b';
  })();

  var _fixReWks = function (KEY, length, exec) {
    var SYMBOL = _wks(KEY);

    var DELEGATES_TO_SYMBOL = !_fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !_fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;
      re.exec = function () { execCalled = true; return null; };
      if (KEY === 'split') {
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$1] = function () { return re; };
      }
      re[SYMBOL]('');
      return !execCalled;
    }) : undefined;

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
      (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var fns = exec(
        _defined,
        SYMBOL,
        ''[KEY],
        function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
          if (regexp.exec === _regexpExec) {
            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
              // The native String method already delegates to @@method (this
              // polyfilled function), leasing to infinite recursion.
              // We avoid it by directly calling the native @@method method.
              return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
            }
            return { done: true, value: nativeMethod.call(str, regexp, arg2) };
          }
          return { done: false };
        }
      );
      var strfn = fns[0];
      var rxfn = fns[1];

      _redefine(String.prototype, KEY, strfn);
      _hide(RegExp.prototype, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function (string, arg) { return rxfn.call(string, this, arg); }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function (string) { return rxfn.call(string, this); }
      );
    }
  };

  var $min = Math.min;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX$1 = 'lastIndex';
  var MAX_UINT32 = 0xffffffff;

  // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
  var SUPPORTS_Y = !_fails(function () { });

  // @@split logic
  _fixReWks('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
    var internalSplit;
    if (
      'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
      'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
      'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
      '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
      '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
      ''[$SPLIT](/.?/)[LENGTH]
    ) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(this);
        if (separator === undefined && limit === 0) return [];
        // If `separator` is not a regex, use native split
        if (!_isRegexp(separator)) return $split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') +
                    (separator.multiline ? 'm' : '') +
                    (separator.unicode ? 'u' : '') +
                    (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = _regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy[LAST_INDEX$1];
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if (output[LENGTH] >= splitLimit) break;
          }
          if (separatorCopy[LAST_INDEX$1] === match.index) separatorCopy[LAST_INDEX$1]++; // Avoid an infinite loop
        }
        if (lastLastIndex === string[LENGTH]) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      };
    // Chakra, V8
    } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
      };
    } else {
      internalSplit = $split;
    }

    return [
      // `String.prototype.split` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = defined(this);
        var splitter = separator == undefined ? undefined : separator[SPLIT];
        return splitter !== undefined
          ? splitter.call(separator, O, limit)
          : internalSplit.call(String(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (regexp, limit) {
        var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
        if (res.done) return res.value;

        var rx = _anObject(regexp);
        var S = String(this);
        var C = _speciesConstructor(rx, RegExp);

        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (SUPPORTS_Y ? 'y' : 'g');

        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return _regexpExecAbstract(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = SUPPORTS_Y ? q : 0;
          var z = _regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
          var e;
          if (
            z === null ||
            (e = $min(_toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
          ) {
            q = _advanceStringIndex(S, q, unicodeMatching);
          } else {
            A.push(S.slice(p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              A.push(z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        A.push(S.slice(p));
        return A;
      }
    ];
  });

  /*
  * required polyfills
  */
  // eslint-disable-next-line consistent-return
  (function () {
    if (typeof NodeList.prototype.forEach === 'function') {
      return false;
    }

    NodeList.prototype.forEach = Array.prototype.forEach;
  })();
  /** IE9, IE10 and IE11 requires all of the following polyfills. **/
  // import 'core-js/es6/symbol'
  // import 'core-js/es6/object'
  // import 'core-js/es6/function'
  // import 'core-js/es6/parse-int'
  // import 'core-js/es6/parse-float'
  // import 'core-js/es6/number'
  // import 'core-js/es6/math'
  // import 'core-js/es6/string'
  // import 'core-js/es6/date'
  // import 'core-js/es6/array'
  // import 'core-js/es6/regexp'
  // import 'core-js/es6/map'
  // import 'core-js/es6/weak-map'
  // import 'core-js/es6/set'
  // import 'core-js/es7/object'

  /** IE10 and IE11 requires the following for the Reflect API. */
  // import 'core-js/es6/reflect'

  /** Evergreen browsers require these. **/
  // Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
  // import 'core-js/es7/reflect'
  // CustomEvent() constructor functionality in IE9, IE10, IE11
  // (function () {
  //
  //   if ( typeof window.CustomEvent === "function" ) return false
  //
  //   function CustomEvent ( event, params ) {
  //     params = params || { bubbles: false, cancelable: false, detail: undefined }
  //     var evt = document.createEvent( 'CustomEvent' )
  //     evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail )
  //     return evt
  //   }
  //
  //   CustomEvent.prototype = window.Event.prototype
  //
  //   window.CustomEvent = CustomEvent
  // })()

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes



  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var shared = _shared('keys');

  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var f$1 = Object.getOwnPropertySymbols;

  var _objectGops = {
  	f: f$1
  };

  var f$2 = {}.propertyIsEnumerable;

  var _objectPie = {
  	f: f$2
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(_defined(it));
  };

  // 19.1.2.1 Object.assign(target, source, ...)





  var $assign = Object.assign;

  // should work with symbols and should have deterministic property order (V8 bug)
  var _objectAssign = !$assign || _fails(function () {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) { B[k] = k; });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
    var T = _toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = _objectGops.f;
    var isEnum = _objectPie.f;
    while (aLen > index) {
      var S = _iobject(arguments[index++]);
      var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    } return T;
  } : $assign;

  // 19.1.3.1 Object.assign(target, source)


  _export(_export.S + _export.F, 'Object', { assign: _objectAssign });

  var _iterators = {};

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
    return O;
  };

  var document$2 = _global.document;
  var _html = document$2 && document$2.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



  var IE_PROTO$1 = _sharedKey('IE_PROTO');
  var Empty = function () { /* empty */ };
  var PROTOTYPE$1 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : _objectDps(result, Properties);
  };

  var def = _objectDp.f;

  var TAG$1 = _wks('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG$1)) def(it, TAG$1, { configurable: true, value: tag });
  };

  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  _hide(IteratorPrototype, _wks('iterator'), function () { return this; });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$2 = _sharedKey('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };

  var ITERATOR = _wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () { return this; };

  var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS: return function keys() { return new Constructor(this, kind); };
        case VALUES: return function values() { return new Constructor(this, kind); };
      } return function entries() { return new Constructor(this, kind); };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() { return $native.call(this); };
    }
    // Define iterator
    if (BUGGY || VALUES_BUG || !proto[ITERATOR]) {
      _hide(proto, ITERATOR, $default);
    }
    // Plug for library
    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

  var $at = _stringAt(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  _iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0;                // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return { value: undefined, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });

  // call something on iterator step with safe closing on error

  var _iterCall = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) _anObject(ret.call(iterator));
      throw e;
    }
  };

  // check on default Array iterator

  var ITERATOR$1 = _wks('iterator');
  var ArrayProto = Array.prototype;

  var _isArrayIter = function (it) {
    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
  };

  var _createProperty = function (object, index, value) {
    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
    else object[index] = value;
  };

  var ITERATOR$2 = _wks('iterator');

  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$2]
      || it['@@iterator']
      || _iterators[_classof(it)];
  };

  var ITERATOR$3 = _wks('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$3]();
    riter['return'] = function () { SAFE_CLOSING = true; };
  } catch (e) { /* empty */ }

  var _iterDetect = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR$3]();
      iter.next = function () { return { done: safe = true }; };
      arr[ITERATOR$3] = function () { return iter; };
      exec(arr);
    } catch (e) { /* empty */ }
    return safe;
  };

  _export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
      var O = _toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = core_getIteratorMethod(O);
      var length, result, step, iterator;
      if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      // if object isn't iterable or it's array with default iterator - use simple case
      if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = _toLength(O.length);
        for (result = new C(length); length > index; index++) {
          _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    }
  });

  var max$1 = Math.max;
  var min$2 = Math.min;
  var floor$1 = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  _fixReWks('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
    return [
      // `String.prototype.replace` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = defined(this);
        var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
        return fn !== undefined
          ? fn.call(searchValue, O, replaceValue)
          : $replace.call(String(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
      function (regexp, replaceValue) {
        var res = maybeCallNative($replace, regexp, this, replaceValue);
        if (res.done) return res.value;

        var rx = _anObject(regexp);
        var S = String(this);
        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);
        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = _regexpExecAbstract(rx, S);
          if (result === null) break;
          results.push(result);
          if (!global) break;
          var matchStr = String(result[0]);
          if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
        }
        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];
          var matched = String(result[0]);
          var position = max$1(min$2(_toInteger(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      }
    ];

      // https://tc39.github.io/ecma262/#sec-getsubstitution
    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
      if (namedCaptures !== undefined) {
        namedCaptures = _toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }
      return $replace.call(replacement, symbols, function (match, ch) {
        var capture;
        switch (ch.charAt(0)) {
          case '$': return '$';
          case '&': return matched;
          case '`': return str.slice(0, position);
          case "'": return str.slice(tailPos);
          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;
          default: // \d\d?
            var n = +ch;
            if (n === 0) return match;
            if (n > m) {
              var f = floor$1(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }
            capture = captures[n - 1];
        }
        return capture === undefined ? '' : capture;
      });
    }
  });

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): ajax-load.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var AjaxLoad = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'ajaxLoad';
    var VERSION = '2.1.9';
    var DATA_KEY = 'coreui.ajaxLoad';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ClassName = {
      ACTIVE: 'active',
      NAV_PILLS: 'nav-pills',
      NAV_TABS: 'nav-tabs',
      OPEN: 'open',
      VIEW_SCRIPT: 'view-script'
    };
    var Event = {
      CLICK: 'click'
    };
    var Selector = {
      HEAD: 'head',
      NAV_DROPDOWN: '.sidebar-nav .nav-dropdown',
      NAV_LINK: '.sidebar-nav .nav-link',
      NAV_ITEM: '.sidebar-nav .nav-item',
      VIEW_SCRIPT: '.view-script'
    };
    var Default = {
      defaultPage: 'main.html',
      errorPage: '404.html',
      subpagesDirectory: 'views/'
    };

    var AjaxLoad =
    /*#__PURE__*/
    function () {
      function AjaxLoad(element, config) {
        this._config = this._getConfig(config);
        this._element = element;
        var url = location.hash.replace(/^#/, '');

        if (url !== '') {
          this.setUpUrl(url);
        } else {
          this.setUpUrl(this._config.defaultPage);
        }

        this._addEventListeners();
      } // Getters


      var _proto = AjaxLoad.prototype;

      // Public
      _proto.loadPage = function loadPage(url) {
        var element = this._element;
        var config = this._config;

        var loadScripts = function loadScripts(src, element) {
          if (element === void 0) {
            element = 0;
          }

          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = src[element];
          script.className = ClassName.VIEW_SCRIPT; // eslint-disable-next-line no-multi-assign

          script.onload = script.onreadystatechange = function () {
            if (!this.readyState || this.readyState === 'complete') {
              if (src.length > element + 1) {
                loadScripts(src, element + 1);
              }
            }
          };

          var body = document.getElementsByTagName('body')[0];
          body.appendChild(script);
        };

        $.ajax({
          type: 'GET',
          url: config.subpagesDirectory + url,
          dataType: 'html',
          beforeSend: function beforeSend() {
            $(Selector.VIEW_SCRIPT).remove();
          },
          success: function success(result) {
            var wrapper = document.createElement('div');
            wrapper.innerHTML = result;
            var scripts = Array.from(wrapper.querySelectorAll('script')).map(function (script) {
              return script.attributes.getNamedItem('src').nodeValue;
            });
            wrapper.querySelectorAll('script').forEach(function (script) {
              return script.parentNode.removeChild(script);
            });
            $('body').animate({
              scrollTop: 0
            }, 0);
            $(element).html(wrapper);

            if (scripts.length) {
              loadScripts(scripts);
            }

            window.location.hash = url;
          },
          error: function error() {
            window.location.href = config.errorPage;
          }
        });
      };

      _proto.setUpUrl = function setUpUrl(url) {
        $(Selector.NAV_LINK).removeClass(ClassName.ACTIVE);
        $(Selector.NAV_DROPDOWN).removeClass(ClassName.OPEN);
        $(Selector.NAV_DROPDOWN + ":has(a[href=\"" + url.replace(/^\//, '').split('?')[0] + "\"])").addClass(ClassName.OPEN);
        $(Selector.NAV_ITEM + " a[href=\"" + url.replace(/^\//, '').split('?')[0] + "\"]").addClass(ClassName.ACTIVE);
        this.loadPage(url);
      };

      _proto.loadBlank = function loadBlank(url) {
        window.open(url);
      };

      _proto.loadTop = function loadTop(url) {
        window.location = url;
      } // Private
      ;

      _proto._getConfig = function _getConfig(config) {
        config = Object.assign({}, Default, config);
        return config;
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this = this;

        $(document).on(Event.CLICK, Selector.NAV_LINK + "[href!=\"#\"]", function (event) {
          event.preventDefault();
          event.stopPropagation();

          if (event.currentTarget.target === '_top') {
            _this.loadTop(event.currentTarget.href);
          } else if (event.currentTarget.target === '_blank') {
            _this.loadBlank(event.currentTarget.href);
          } else {
            _this.setUpUrl(event.currentTarget.getAttribute('href'));
          }
        });
      } // Static
      ;

      AjaxLoad._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = typeof config === 'object' && config;

          if (!data) {
            data = new AjaxLoad(this, _config);
            $(this).data(DATA_KEY, data);
          }
        });
      };

      _createClass(AjaxLoad, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return AjaxLoad;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    $.fn[NAME] = AjaxLoad._jQueryInterface;
    $.fn[NAME].Constructor = AjaxLoad;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return AjaxLoad._jQueryInterface;
    };

    return AjaxLoad;
  }($);

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): toggle-classes.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  var removeClasses = function removeClasses(classNames) {
    return classNames.map(function (className) {
      return document.body.classList.contains(className);
    }).indexOf(true) !== -1;
  };

  var toggleClasses = function toggleClasses(toggleClass, classNames) {
    var breakpoint = classNames.indexOf(toggleClass);
    var newClassNames = classNames.slice(0, breakpoint + 1);

    if (removeClasses(newClassNames)) {
      newClassNames.map(function (className) {
        return document.body.classList.remove(className);
      });
    } else {
      document.body.classList.add(toggleClass);
    }
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): aside-menu.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var AsideMenu = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'aside-menu';
    var VERSION = '2.1.9';
    var DATA_KEY = 'coreui.aside-menu';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      CLICK: 'click',
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      TOGGLE: 'toggle'
    };
    var Selector = {
      BODY: 'body',
      ASIDE_MENU: '.aside-menu',
      ASIDE_MENU_TOGGLER: '.aside-menu-toggler'
    };
    var ShowClassNames = ['aside-menu-show', 'aside-menu-sm-show', 'aside-menu-md-show', 'aside-menu-lg-show', 'aside-menu-xl-show'];
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var AsideMenu =
    /*#__PURE__*/
    function () {
      function AsideMenu(element) {
        this._element = element;

        this._addEventListeners();
      } // Getters


      var _proto = AsideMenu.prototype;

      // Private
      _proto._addEventListeners = function _addEventListeners() {
        $(document).on(Event.CLICK, Selector.ASIDE_MENU_TOGGLER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var toggle = event.currentTarget.dataset ? event.currentTarget.dataset.toggle : $(event.currentTarget).data('toggle');
          toggleClasses(toggle, ShowClassNames);
        });
      } // Static
      ;

      AsideMenu._jQueryInterface = function _jQueryInterface() {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new AsideMenu(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(AsideMenu, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return AsideMenu;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      var asideMenu = $(Selector.ASIDE_MENU);

      AsideMenu._jQueryInterface.call(asideMenu);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = AsideMenu._jQueryInterface;
    $.fn[NAME].Constructor = AsideMenu;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return AsideMenu._jQueryInterface;
    };

    return AsideMenu;
  }($);

  // 7.2.2 IsArray(argument)

  var _isArray = Array.isArray || function isArray(arg) {
    return _cof(arg) == 'Array';
  };

  var SPECIES$2 = _wks('species');

  var _arraySpeciesConstructor = function (original) {
    var C;
    if (_isArray(original)) {
      C = original.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
      if (_isObject(C)) {
        C = C[SPECIES$2];
        if (C === null) C = undefined;
      }
    } return C === undefined ? Array : C;
  };

  // 9.4.2.3 ArraySpeciesCreate(originalArray, length)


  var _arraySpeciesCreate = function (original, length) {
    return new (_arraySpeciesConstructor(original))(length);
  };

  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex





  var _arrayMethods = function (TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || _arraySpeciesCreate;
    return function ($this, callbackfn, that) {
      var O = _toObject($this);
      var self = _iobject(O);
      var f = _ctx(callbackfn, that, 3);
      var length = _toLength(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res;   // map
          else if (res) switch (TYPE) {
            case 3: return true;             // some
            case 5: return val;              // find
            case 6: return index;            // findIndex
            case 2: result.push(val);        // filter
          } else if (IS_EVERY) return false; // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = _wks('unscopables');
  var ArrayProto$1 = Array.prototype;
  if (ArrayProto$1[UNSCOPABLES] == undefined) _hide(ArrayProto$1, UNSCOPABLES, {});
  var _addToUnscopables = function (key) {
    ArrayProto$1[UNSCOPABLES][key] = true;
  };

  // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

  var $find = _arrayMethods(5);
  var KEY = 'find';
  var forced = true;
  // Shouldn't skip holes
  if (KEY in []) Array(1)[KEY](function () { forced = false; });
  _export(_export.P + _export.F * forced, 'Array', {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  _addToUnscopables(KEY);

  // @@match logic
  _fixReWks('match', 1, function (defined, MATCH, $match, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = defined(this);
        var fn = regexp == undefined ? undefined : regexp[MATCH];
        return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
      function (regexp) {
        var res = maybeCallNative($match, regexp, this);
        if (res.done) return res.value;
        var rx = _anObject(regexp);
        var S = String(this);
        if (!rx.global) return _regexpExecAbstract(rx, S);
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = _regexpExecAbstract(rx, S)) !== null) {
          var matchStr = String(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }
    ];
  });

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.9): get-css-custom-properties.js
   * Licensed under MIT (https://coreui.io/license)
   * @returns {string} css custom property name
   * --------------------------------------------------------------------------
   */
  var getCssCustomProperties = function getCssCustomProperties() {
    var cssCustomProperties = {};
    var sheets = document.styleSheets;
    var cssText = '';

    for (var i = sheets.length - 1; i > -1; i--) {
      var rules = sheets[i].cssRules;

      for (var j = rules.length - 1; j > -1; j--) {
        if (rules[j].selectorText === '.ie-custom-properties') {
          cssText = rules[j].cssText;
          break;
        }
      }

      if (cssText) {
        break;
      }
    }

    cssText = cssText.substring(cssText.lastIndexOf('{') + 1, cssText.lastIndexOf('}'));
    cssText.split(';').forEach(function (property) {
      if (property) {
        var name = property.split(': ')[0];
        var value = property.split(': ')[1];

        if (name && value) {
          cssCustomProperties["--" + name.trim()] = value.trim();
        }
      }
    });
    return cssCustomProperties;
  };

  var minIEVersion = 10;

  var isIE1x = function isIE1x() {
    return Boolean(document.documentMode) && document.documentMode >= minIEVersion;
  };

  var isCustomProperty = function isCustomProperty(property) {
    return property.match(/^--.*/i);
  };

  var getStyle = function getStyle(property, element) {
    if (element === void 0) {
      element = document.body;
    }

    var style;

    if (isCustomProperty(property) && isIE1x()) {
      var cssCustomProperties = getCssCustomProperties();
      style = cssCustomProperties[property];
    } else {
      style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
    }

    return style;
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): sidebar.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var Sidebar = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'sidebar';
    var VERSION = '2.1.9';
    var DATA_KEY = 'coreui.sidebar';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Default = {
      transition: 400
    };
    var ClassName = {
      ACTIVE: 'active',
      BRAND_MINIMIZED: 'brand-minimized',
      NAV_DROPDOWN_TOGGLE: 'nav-dropdown-toggle',
      OPEN: 'open',
      SIDEBAR_FIXED: 'sidebar-fixed',
      SIDEBAR_MINIMIZED: 'sidebar-minimized',
      SIDEBAR_OFF_CANVAS: 'sidebar-off-canvas'
    };
    var Event = {
      CLICK: 'click',
      DESTROY: 'destroy',
      INIT: 'init',
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      TOGGLE: 'toggle',
      UPDATE: 'update'
    };
    var Selector = {
      BODY: 'body',
      BRAND_MINIMIZER: '.brand-minimizer',
      NAV_DROPDOWN_TOGGLE: '.nav-dropdown-toggle',
      NAV_DROPDOWN_ITEMS: '.nav-dropdown-items',
      NAV_ITEM: '.nav-item',
      NAV_LINK: '.nav-link',
      NAV_LINK_QUERIED: '.nav-link-queried',
      NAVIGATION_CONTAINER: '.sidebar-nav',
      NAVIGATION: '.sidebar-nav > .nav',
      SIDEBAR: '.sidebar',
      SIDEBAR_MINIMIZER: '.sidebar-minimizer',
      SIDEBAR_TOGGLER: '.sidebar-toggler'
    };
    var ShowClassNames = ['sidebar-show', 'sidebar-sm-show', 'sidebar-md-show', 'sidebar-lg-show', 'sidebar-xl-show'];
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Sidebar =
    /*#__PURE__*/
    function () {
      function Sidebar(element) {
        this._element = element;
        this.mobile = false;
        this.ps = null;
        this.perfectScrollbar(Event.INIT);
        this.setActiveLink();
        this._breakpointTest = this._breakpointTest.bind(this);
        this._clickOutListener = this._clickOutListener.bind(this);

        this._addEventListeners();

        this._addMediaQuery();
      } // Getters


      var _proto = Sidebar.prototype;

      // Public
      _proto.perfectScrollbar = function perfectScrollbar(event) {
        var _this = this;

        if (typeof PerfectScrollbar !== 'undefined') {
          var classList = document.body.classList;

          if (event === Event.INIT && !classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
            this.ps = this.makeScrollbar();
          }

          if (event === Event.DESTROY) {
            this.destroyScrollbar();
          }

          if (event === Event.TOGGLE) {
            if (classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
              this.destroyScrollbar();
            } else {
              this.destroyScrollbar();
              this.ps = this.makeScrollbar();
            }
          }

          if (event === Event.UPDATE && !classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
            // ToDo: Add smooth transition
            setTimeout(function () {
              _this.destroyScrollbar();

              _this.ps = _this.makeScrollbar();
            }, Default.transition);
          }
        }
      };

      _proto.makeScrollbar = function makeScrollbar(container) {
        if (container === void 0) {
          container = Selector.NAVIGATION_CONTAINER;
        }

        var ps = new PerfectScrollbar(document.querySelector(container), {
          suppressScrollX: true
        }); // ToDo: find real fix for ps rtl

        ps.isRtl = false;
        return ps;
      };

      _proto.destroyScrollbar = function destroyScrollbar() {
        if (this.ps) {
          this.ps.destroy();
          this.ps = null;
        }
      };

      _proto.setActiveLink = function setActiveLink() {
        $(Selector.NAVIGATION).find(Selector.NAV_LINK).each(function (key, value) {
          var link = value;
          var cUrl;

          if (link.classList.contains(Selector.NAV_LINK_QUERIED)) {
            cUrl = String(window.location);
          } else {
            cUrl = String(window.location).split('?')[0];
          }

          if (cUrl.substr(cUrl.length - 1) === '#') {
            cUrl = cUrl.slice(0, -1);
          }

          if ($($(link))[0].href === cUrl) {
            $(link).addClass(ClassName.ACTIVE).parents(Selector.NAV_DROPDOWN_ITEMS).add(link).each(function (key, value) {
              link = value;
              $(link).parent().addClass(ClassName.OPEN);
            });
          }
        });
      } // Private
      ;

      _proto._addMediaQuery = function _addMediaQuery() {
        var sm = getStyle('--breakpoint-sm');

        if (!sm) {
          return;
        }

        var smVal = parseInt(sm, 10) - 1;
        var mediaQueryList = window.matchMedia("(max-width: " + smVal + "px)");

        this._breakpointTest(mediaQueryList);

        mediaQueryList.addListener(this._breakpointTest);
      };

      _proto._breakpointTest = function _breakpointTest(e) {
        this.mobile = Boolean(e.matches);

        this._toggleClickOut();
      };

      _proto._clickOutListener = function _clickOutListener(event) {
        if (!this._element.contains(event.target)) {
          // or use: event.target.closest(Selector.SIDEBAR) === null
          event.preventDefault();
          event.stopPropagation();

          this._removeClickOut();

          document.body.classList.remove('sidebar-show');
        }
      };

      _proto._addClickOut = function _addClickOut() {
        document.addEventListener(Event.CLICK, this._clickOutListener, true);
      };

      _proto._removeClickOut = function _removeClickOut() {
        document.removeEventListener(Event.CLICK, this._clickOutListener, true);
      };

      _proto._toggleClickOut = function _toggleClickOut() {
        if (this.mobile && document.body.classList.contains('sidebar-show')) {
          document.body.classList.remove('aside-menu-show');

          this._addClickOut();
        } else {
          this._removeClickOut();
        }
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this2 = this;

        $(document).on(Event.CLICK, Selector.BRAND_MINIMIZER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(Selector.BODY).toggleClass(ClassName.BRAND_MINIMIZED);
        });
        $(document).on(Event.CLICK, Selector.NAV_DROPDOWN_TOGGLE, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var dropdown = event.target;
          $(dropdown).parent().toggleClass(ClassName.OPEN);

          _this2.perfectScrollbar(Event.UPDATE);
        });
        $(document).on(Event.CLICK, Selector.SIDEBAR_MINIMIZER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(Selector.BODY).toggleClass(ClassName.SIDEBAR_MINIMIZED);

          _this2.perfectScrollbar(Event.TOGGLE);
        });
        $(document).on(Event.CLICK, Selector.SIDEBAR_TOGGLER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var toggle = event.currentTarget.dataset ? event.currentTarget.dataset.toggle : $(event.currentTarget).data('toggle');
          toggleClasses(toggle, ShowClassNames);

          _this2._toggleClickOut();
        });
        $(Selector.NAVIGATION + " > " + Selector.NAV_ITEM + " " + Selector.NAV_LINK + ":not(" + Selector.NAV_DROPDOWN_TOGGLE + ")").on(Event.CLICK, function () {
          _this2._removeClickOut();

          document.body.classList.remove('sidebar-show');
        });
      } // Static
      ;

      Sidebar._jQueryInterface = function _jQueryInterface() {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Sidebar(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(Sidebar, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Sidebar;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      var sidebar = $(Selector.SIDEBAR);

      Sidebar._jQueryInterface.call(sidebar);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Sidebar._jQueryInterface;
    $.fn[NAME].Constructor = Sidebar;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Sidebar._jQueryInterface;
    };

    return Sidebar;
  }($);

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.9): hex-to-rgb.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgb = function hexToRgb(color) {
    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ")";
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.9): hex-to-rgba.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgba = function hexToRgba(color, opacity) {
    if (opacity === void 0) {
      opacity = 100;
    }

    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ", " + opacity / 100 + ")";
  };

  // 21.2.5.3 get RegExp.prototype.flags()
  if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: _flags
  });

  var TO_STRING = 'toString';
  var $toString = /./[TO_STRING];

  var define = function (fn) {
    _redefine(RegExp.prototype, TO_STRING, fn, true);
  };

  // 21.2.5.14 RegExp.prototype.toString()
  if (_fails(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
    define(function toString() {
      var R = _anObject(this);
      return '/'.concat(R.source, '/',
        'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
    });
  // FF44- RegExp#toString has a wrong name
  } else if ($toString.name != TO_STRING) {
    define(function toString() {
      return $toString.call(this);
    });
  }

  // 19.1.3.6 Object.prototype.toString()

  var test = {};
  test[_wks('toStringTag')] = 'z';
  if (test + '' != '[object z]') {
    _redefine(Object.prototype, 'toString', function toString() {
      return '[object ' + _classof(this) + ']';
    }, true);
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): rgb-to-hex.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var rgbToHex = function rgbToHex(color) {
    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    if (color === 'transparent') {
      return '#00000000';
    }

    var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    if (!rgb) {
      throw new Error(color + " is not a valid rgb color");
    }

    var r = "0" + parseInt(rgb[1], 10).toString(16);
    var g = "0" + parseInt(rgb[2], 10).toString(16);
    var b = "0" + parseInt(rgb[3], 10).toString(16);
    return "#" + r.slice(-2) + g.slice(-2) + b.slice(-2);
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): index.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  (function ($) {
    if (typeof $ === 'undefined') {
      throw new TypeError('CoreUI\'s JavaScript requires jQuery. jQuery must be included before CoreUI\'s JavaScript.');
    }

    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('CoreUI\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })($);
  window.getStyle = getStyle;
  window.hexToRgb = hexToRgb;
  window.hexToRgba = hexToRgba;
  window.rgbToHex = rgbToHex;

  exports.AjaxLoad = AjaxLoad;
  exports.AsideMenu = AsideMenu;
  exports.Sidebar = Sidebar;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=coreui.js.map


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/process/browser.js":
/*!************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/process/browser.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/pace/pace.js":
/*!***********************************!*\
  !*** ./node_modules/pace/pace.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {
  var AjaxMonitor, Bar, DocumentMonitor, ElementMonitor, ElementTracker, EventLagMonitor, Evented, Events, NoTargetError, Pace, RequestIntercept, SOURCE_KEYS, Scaler, SocketRequestTracker, XHRRequestTracker, animation, avgAmplitude, bar, cancelAnimation, cancelAnimationFrame, defaultOptions, extend, extendNative, getFromDOM, getIntercept, handlePushState, ignoreStack, init, now, options, requestAnimationFrame, result, runAnimation, scalers, shouldIgnoreURL, shouldTrack, source, sources, uniScaler, _WebSocket, _XDomainRequest, _XMLHttpRequest, _i, _intercept, _len, _pushState, _ref, _ref1, _replaceState,
    __slice = [].slice,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  defaultOptions = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: true,
    restartOnPushState: true,
    restartOnRequestAfter: 500,
    target: 'body',
    elements: {
      checkInterval: 100,
      selectors: ['body']
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ['GET'],
      trackWebSockets: true,
      ignoreURLs: []
    }
  };

  now = function() {
    var _ref;
    return (_ref = typeof performance !== "undefined" && performance !== null ? typeof performance.now === "function" ? performance.now() : void 0 : void 0) != null ? _ref : +(new Date);
  };

  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

  if (requestAnimationFrame == null) {
    requestAnimationFrame = function(fn) {
      return setTimeout(fn, 50);
    };
    cancelAnimationFrame = function(id) {
      return clearTimeout(id);
    };
  }

  runAnimation = function(fn) {
    var last, tick;
    last = now();
    tick = function() {
      var diff;
      diff = now() - last;
      if (diff >= 33) {
        last = now();
        return fn(diff, function() {
          return requestAnimationFrame(tick);
        });
      } else {
        return setTimeout(tick, 33 - diff);
      }
    };
    return tick();
  };

  result = function() {
    var args, key, obj;
    obj = arguments[0], key = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    if (typeof obj[key] === 'function') {
      return obj[key].apply(obj, args);
    } else {
      return obj[key];
    }
  };

  extend = function() {
    var key, out, source, sources, val, _i, _len;
    out = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = sources.length; _i < _len; _i++) {
      source = sources[_i];
      if (source) {
        for (key in source) {
          if (!__hasProp.call(source, key)) continue;
          val = source[key];
          if ((out[key] != null) && typeof out[key] === 'object' && (val != null) && typeof val === 'object') {
            extend(out[key], val);
          } else {
            out[key] = val;
          }
        }
      }
    }
    return out;
  };

  avgAmplitude = function(arr) {
    var count, sum, v, _i, _len;
    sum = count = 0;
    for (_i = 0, _len = arr.length; _i < _len; _i++) {
      v = arr[_i];
      sum += Math.abs(v);
      count++;
    }
    return sum / count;
  };

  getFromDOM = function(key, json) {
    var data, e, el;
    if (key == null) {
      key = 'options';
    }
    if (json == null) {
      json = true;
    }
    el = document.querySelector("[data-pace-" + key + "]");
    if (!el) {
      return;
    }
    data = el.getAttribute("data-pace-" + key);
    if (!json) {
      return data;
    }
    try {
      return JSON.parse(data);
    } catch (_error) {
      e = _error;
      return typeof console !== "undefined" && console !== null ? console.error("Error parsing inline pace options", e) : void 0;
    }
  };

  Evented = (function() {
    function Evented() {}

    Evented.prototype.on = function(event, handler, ctx, once) {
      var _base;
      if (once == null) {
        once = false;
      }
      if (this.bindings == null) {
        this.bindings = {};
      }
      if ((_base = this.bindings)[event] == null) {
        _base[event] = [];
      }
      return this.bindings[event].push({
        handler: handler,
        ctx: ctx,
        once: once
      });
    };

    Evented.prototype.once = function(event, handler, ctx) {
      return this.on(event, handler, ctx, true);
    };

    Evented.prototype.off = function(event, handler) {
      var i, _ref, _results;
      if (((_ref = this.bindings) != null ? _ref[event] : void 0) == null) {
        return;
      }
      if (handler == null) {
        return delete this.bindings[event];
      } else {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    Evented.prototype.trigger = function() {
      var args, ctx, event, handler, i, once, _ref, _ref1, _results;
      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ((_ref = this.bindings) != null ? _ref[event] : void 0) {
        i = 0;
        _results = [];
        while (i < this.bindings[event].length) {
          _ref1 = this.bindings[event][i], handler = _ref1.handler, ctx = _ref1.ctx, once = _ref1.once;
          handler.apply(ctx != null ? ctx : this, args);
          if (once) {
            _results.push(this.bindings[event].splice(i, 1));
          } else {
            _results.push(i++);
          }
        }
        return _results;
      }
    };

    return Evented;

  })();

  Pace = window.Pace || {};

  window.Pace = Pace;

  extend(Pace, Evented.prototype);

  options = Pace.options = extend({}, defaultOptions, window.paceOptions, getFromDOM());

  _ref = ['ajax', 'document', 'eventLag', 'elements'];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    source = _ref[_i];
    if (options[source] === true) {
      options[source] = defaultOptions[source];
    }
  }

  NoTargetError = (function(_super) {
    __extends(NoTargetError, _super);

    function NoTargetError() {
      _ref1 = NoTargetError.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    return NoTargetError;

  })(Error);

  Bar = (function() {
    function Bar() {
      this.progress = 0;
    }

    Bar.prototype.getElement = function() {
      var targetElement;
      if (this.el == null) {
        targetElement = document.querySelector(options.target);
        if (!targetElement) {
          throw new NoTargetError;
        }
        this.el = document.createElement('div');
        this.el.className = "pace pace-active";
        document.body.className = document.body.className.replace(/pace-done/g, '');
        document.body.className += ' pace-running';
        this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';
        if (targetElement.firstChild != null) {
          targetElement.insertBefore(this.el, targetElement.firstChild);
        } else {
          targetElement.appendChild(this.el);
        }
      }
      return this.el;
    };

    Bar.prototype.finish = function() {
      var el;
      el = this.getElement();
      el.className = el.className.replace('pace-active', '');
      el.className += ' pace-inactive';
      document.body.className = document.body.className.replace('pace-running', '');
      return document.body.className += ' pace-done';
    };

    Bar.prototype.update = function(prog) {
      this.progress = prog;
      return this.render();
    };

    Bar.prototype.destroy = function() {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (_error) {
        NoTargetError = _error;
      }
      return this.el = void 0;
    };

    Bar.prototype.render = function() {
      var el, key, progressStr, transform, _j, _len1, _ref2;
      if (document.querySelector(options.target) == null) {
        return false;
      }
      el = this.getElement();
      transform = "translate3d(" + this.progress + "%, 0, 0)";
      _ref2 = ['webkitTransform', 'msTransform', 'transform'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        key = _ref2[_j];
        el.children[0].style[key] = transform;
      }
      if (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) {
        el.children[0].setAttribute('data-progress-text', "" + (this.progress | 0) + "%");
        if (this.progress >= 100) {
          progressStr = '99';
        } else {
          progressStr = this.progress < 10 ? "0" : "";
          progressStr += this.progress | 0;
        }
        el.children[0].setAttribute('data-progress', "" + progressStr);
      }
      return this.lastRenderedProgress = this.progress;
    };

    Bar.prototype.done = function() {
      return this.progress >= 100;
    };

    return Bar;

  })();

  Events = (function() {
    function Events() {
      this.bindings = {};
    }

    Events.prototype.trigger = function(name, val) {
      var binding, _j, _len1, _ref2, _results;
      if (this.bindings[name] != null) {
        _ref2 = this.bindings[name];
        _results = [];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          binding = _ref2[_j];
          _results.push(binding.call(this, val));
        }
        return _results;
      }
    };

    Events.prototype.on = function(name, fn) {
      var _base;
      if ((_base = this.bindings)[name] == null) {
        _base[name] = [];
      }
      return this.bindings[name].push(fn);
    };

    return Events;

  })();

  _XMLHttpRequest = window.XMLHttpRequest;

  _XDomainRequest = window.XDomainRequest;

  _WebSocket = window.WebSocket;

  extendNative = function(to, from) {
    var e, key, _results;
    _results = [];
    for (key in from.prototype) {
      try {
        if ((to[key] == null) && typeof from[key] !== 'function') {
          if (typeof Object.defineProperty === 'function') {
            _results.push(Object.defineProperty(to, key, {
              get: function() {
                return from.prototype[key];
              },
              configurable: true,
              enumerable: true
            }));
          } else {
            _results.push(to[key] = from.prototype[key]);
          }
        } else {
          _results.push(void 0);
        }
      } catch (_error) {
        e = _error;
      }
    }
    return _results;
  };

  ignoreStack = [];

  Pace.ignore = function() {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('ignore');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  Pace.track = function() {
    var args, fn, ret;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    ignoreStack.unshift('track');
    ret = fn.apply(null, args);
    ignoreStack.shift();
    return ret;
  };

  shouldTrack = function(method) {
    var _ref2;
    if (method == null) {
      method = 'GET';
    }
    if (ignoreStack[0] === 'track') {
      return 'force';
    }
    if (!ignoreStack.length && options.ajax) {
      if (method === 'socket' && options.ajax.trackWebSockets) {
        return true;
      } else if (_ref2 = method.toUpperCase(), __indexOf.call(options.ajax.trackMethods, _ref2) >= 0) {
        return true;
      }
    }
    return false;
  };

  RequestIntercept = (function(_super) {
    __extends(RequestIntercept, _super);

    function RequestIntercept() {
      var monitorXHR,
        _this = this;
      RequestIntercept.__super__.constructor.apply(this, arguments);
      monitorXHR = function(req) {
        var _open;
        _open = req.open;
        return req.open = function(type, url, async) {
          if (shouldTrack(type)) {
            _this.trigger('request', {
              type: type,
              url: url,
              request: req
            });
          }
          return _open.apply(req, arguments);
        };
      };
      window.XMLHttpRequest = function(flags) {
        var req;
        req = new _XMLHttpRequest(flags);
        monitorXHR(req);
        return req;
      };
      try {
        extendNative(window.XMLHttpRequest, _XMLHttpRequest);
      } catch (_error) {}
      if (_XDomainRequest != null) {
        window.XDomainRequest = function() {
          var req;
          req = new _XDomainRequest;
          monitorXHR(req);
          return req;
        };
        try {
          extendNative(window.XDomainRequest, _XDomainRequest);
        } catch (_error) {}
      }
      if ((_WebSocket != null) && options.ajax.trackWebSockets) {
        window.WebSocket = function(url, protocols) {
          var req;
          if (protocols != null) {
            req = new _WebSocket(url, protocols);
          } else {
            req = new _WebSocket(url);
          }
          if (shouldTrack('socket')) {
            _this.trigger('request', {
              type: 'socket',
              url: url,
              protocols: protocols,
              request: req
            });
          }
          return req;
        };
        try {
          extendNative(window.WebSocket, _WebSocket);
        } catch (_error) {}
      }
    }

    return RequestIntercept;

  })(Events);

  _intercept = null;

  getIntercept = function() {
    if (_intercept == null) {
      _intercept = new RequestIntercept;
    }
    return _intercept;
  };

  shouldIgnoreURL = function(url) {
    var pattern, _j, _len1, _ref2;
    _ref2 = options.ajax.ignoreURLs;
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      pattern = _ref2[_j];
      if (typeof pattern === 'string') {
        if (url.indexOf(pattern) !== -1) {
          return true;
        }
      } else {
        if (pattern.test(url)) {
          return true;
        }
      }
    }
    return false;
  };

  getIntercept().on('request', function(_arg) {
    var after, args, request, type, url;
    type = _arg.type, request = _arg.request, url = _arg.url;
    if (shouldIgnoreURL(url)) {
      return;
    }
    if (!Pace.running && (options.restartOnRequestAfter !== false || shouldTrack(type) === 'force')) {
      args = arguments;
      after = options.restartOnRequestAfter || 0;
      if (typeof after === 'boolean') {
        after = 0;
      }
      return setTimeout(function() {
        var stillActive, _j, _len1, _ref2, _ref3, _results;
        if (type === 'socket') {
          stillActive = request.readyState < 2;
        } else {
          stillActive = (0 < (_ref2 = request.readyState) && _ref2 < 4);
        }
        if (stillActive) {
          Pace.restart();
          _ref3 = Pace.sources;
          _results = [];
          for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
            source = _ref3[_j];
            if (source instanceof AjaxMonitor) {
              source.watch.apply(source, args);
              break;
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      }, after);
    }
  });

  AjaxMonitor = (function() {
    function AjaxMonitor() {
      var _this = this;
      this.elements = [];
      getIntercept().on('request', function() {
        return _this.watch.apply(_this, arguments);
      });
    }

    AjaxMonitor.prototype.watch = function(_arg) {
      var request, tracker, type, url;
      type = _arg.type, request = _arg.request, url = _arg.url;
      if (shouldIgnoreURL(url)) {
        return;
      }
      if (type === 'socket') {
        tracker = new SocketRequestTracker(request);
      } else {
        tracker = new XHRRequestTracker(request);
      }
      return this.elements.push(tracker);
    };

    return AjaxMonitor;

  })();

  XHRRequestTracker = (function() {
    function XHRRequestTracker(request) {
      var event, size, _j, _len1, _onreadystatechange, _ref2,
        _this = this;
      this.progress = 0;
      if (window.ProgressEvent != null) {
        size = null;
        request.addEventListener('progress', function(evt) {
          if (evt.lengthComputable) {
            return _this.progress = 100 * evt.loaded / evt.total;
          } else {
            return _this.progress = _this.progress + (100 - _this.progress) / 2;
          }
        }, false);
        _ref2 = ['load', 'abort', 'timeout', 'error'];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
          event = _ref2[_j];
          request.addEventListener(event, function() {
            return _this.progress = 100;
          }, false);
        }
      } else {
        _onreadystatechange = request.onreadystatechange;
        request.onreadystatechange = function() {
          var _ref3;
          if ((_ref3 = request.readyState) === 0 || _ref3 === 4) {
            _this.progress = 100;
          } else if (request.readyState === 3) {
            _this.progress = 50;
          }
          return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
        };
      }
    }

    return XHRRequestTracker;

  })();

  SocketRequestTracker = (function() {
    function SocketRequestTracker(request) {
      var event, _j, _len1, _ref2,
        _this = this;
      this.progress = 0;
      _ref2 = ['error', 'open'];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        event = _ref2[_j];
        request.addEventListener(event, function() {
          return _this.progress = 100;
        }, false);
      }
    }

    return SocketRequestTracker;

  })();

  ElementMonitor = (function() {
    function ElementMonitor(options) {
      var selector, _j, _len1, _ref2;
      if (options == null) {
        options = {};
      }
      this.elements = [];
      if (options.selectors == null) {
        options.selectors = [];
      }
      _ref2 = options.selectors;
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        selector = _ref2[_j];
        this.elements.push(new ElementTracker(selector));
      }
    }

    return ElementMonitor;

  })();

  ElementTracker = (function() {
    function ElementTracker(selector) {
      this.selector = selector;
      this.progress = 0;
      this.check();
    }

    ElementTracker.prototype.check = function() {
      var _this = this;
      if (document.querySelector(this.selector)) {
        return this.done();
      } else {
        return setTimeout((function() {
          return _this.check();
        }), options.elements.checkInterval);
      }
    };

    ElementTracker.prototype.done = function() {
      return this.progress = 100;
    };

    return ElementTracker;

  })();

  DocumentMonitor = (function() {
    DocumentMonitor.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    };

    function DocumentMonitor() {
      var _onreadystatechange, _ref2,
        _this = this;
      this.progress = (_ref2 = this.states[document.readyState]) != null ? _ref2 : 100;
      _onreadystatechange = document.onreadystatechange;
      document.onreadystatechange = function() {
        if (_this.states[document.readyState] != null) {
          _this.progress = _this.states[document.readyState];
        }
        return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0;
      };
    }

    return DocumentMonitor;

  })();

  EventLagMonitor = (function() {
    function EventLagMonitor() {
      var avg, interval, last, points, samples,
        _this = this;
      this.progress = 0;
      avg = 0;
      samples = [];
      points = 0;
      last = now();
      interval = setInterval(function() {
        var diff;
        diff = now() - last - 50;
        last = now();
        samples.push(diff);
        if (samples.length > options.eventLag.sampleCount) {
          samples.shift();
        }
        avg = avgAmplitude(samples);
        if (++points >= options.eventLag.minSamples && avg < options.eventLag.lagThreshold) {
          _this.progress = 100;
          return clearInterval(interval);
        } else {
          return _this.progress = 100 * (3 / (avg + 3));
        }
      }, 50);
    }

    return EventLagMonitor;

  })();

  Scaler = (function() {
    function Scaler(source) {
      this.source = source;
      this.last = this.sinceLastUpdate = 0;
      this.rate = options.initialRate;
      this.catchup = 0;
      this.progress = this.lastProgress = 0;
      if (this.source != null) {
        this.progress = result(this.source, 'progress');
      }
    }

    Scaler.prototype.tick = function(frameTime, val) {
      var scaling;
      if (val == null) {
        val = result(this.source, 'progress');
      }
      if (val >= 100) {
        this.done = true;
      }
      if (val === this.last) {
        this.sinceLastUpdate += frameTime;
      } else {
        if (this.sinceLastUpdate) {
          this.rate = (val - this.last) / this.sinceLastUpdate;
        }
        this.catchup = (val - this.progress) / options.catchupTime;
        this.sinceLastUpdate = 0;
        this.last = val;
      }
      if (val > this.progress) {
        this.progress += this.catchup * frameTime;
      }
      scaling = 1 - Math.pow(this.progress / 100, options.easeFactor);
      this.progress += scaling * this.rate * frameTime;
      this.progress = Math.min(this.lastProgress + options.maxProgressPerFrame, this.progress);
      this.progress = Math.max(0, this.progress);
      this.progress = Math.min(100, this.progress);
      this.lastProgress = this.progress;
      return this.progress;
    };

    return Scaler;

  })();

  sources = null;

  scalers = null;

  bar = null;

  uniScaler = null;

  animation = null;

  cancelAnimation = null;

  Pace.running = false;

  handlePushState = function() {
    if (options.restartOnPushState) {
      return Pace.restart();
    }
  };

  if (window.history.pushState != null) {
    _pushState = window.history.pushState;
    window.history.pushState = function() {
      handlePushState();
      return _pushState.apply(window.history, arguments);
    };
  }

  if (window.history.replaceState != null) {
    _replaceState = window.history.replaceState;
    window.history.replaceState = function() {
      handlePushState();
      return _replaceState.apply(window.history, arguments);
    };
  }

  SOURCE_KEYS = {
    ajax: AjaxMonitor,
    elements: ElementMonitor,
    document: DocumentMonitor,
    eventLag: EventLagMonitor
  };

  (init = function() {
    var type, _j, _k, _len1, _len2, _ref2, _ref3, _ref4;
    Pace.sources = sources = [];
    _ref2 = ['ajax', 'elements', 'document', 'eventLag'];
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      type = _ref2[_j];
      if (options[type] !== false) {
        sources.push(new SOURCE_KEYS[type](options[type]));
      }
    }
    _ref4 = (_ref3 = options.extraSources) != null ? _ref3 : [];
    for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
      source = _ref4[_k];
      sources.push(new source(options));
    }
    Pace.bar = bar = new Bar;
    scalers = [];
    return uniScaler = new Scaler;
  })();

  Pace.stop = function() {
    Pace.trigger('stop');
    Pace.running = false;
    bar.destroy();
    cancelAnimation = true;
    if (animation != null) {
      if (typeof cancelAnimationFrame === "function") {
        cancelAnimationFrame(animation);
      }
      animation = null;
    }
    return init();
  };

  Pace.restart = function() {
    Pace.trigger('restart');
    Pace.stop();
    return Pace.start();
  };

  Pace.go = function() {
    var start;
    Pace.running = true;
    bar.render();
    start = now();
    cancelAnimation = false;
    return animation = runAnimation(function(frameTime, enqueueNextFrame) {
      var avg, count, done, element, elements, i, j, remaining, scaler, scalerList, sum, _j, _k, _len1, _len2, _ref2;
      remaining = 100 - bar.progress;
      count = sum = 0;
      done = true;
      for (i = _j = 0, _len1 = sources.length; _j < _len1; i = ++_j) {
        source = sources[i];
        scalerList = scalers[i] != null ? scalers[i] : scalers[i] = [];
        elements = (_ref2 = source.elements) != null ? _ref2 : [source];
        for (j = _k = 0, _len2 = elements.length; _k < _len2; j = ++_k) {
          element = elements[j];
          scaler = scalerList[j] != null ? scalerList[j] : scalerList[j] = new Scaler(element);
          done &= scaler.done;
          if (scaler.done) {
            continue;
          }
          count++;
          sum += scaler.tick(frameTime);
        }
      }
      avg = sum / count;
      bar.update(uniScaler.tick(frameTime, avg));
      if (bar.done() || done || cancelAnimation) {
        bar.update(100);
        Pace.trigger('done');
        return setTimeout(function() {
          bar.finish();
          Pace.running = false;
          return Pace.trigger('hide');
        }, Math.max(options.ghostTime, Math.max(options.minTime - (now() - start), 0)));
      } else {
        return enqueueNextFrame();
      }
    });
  };

  Pace.start = function(_options) {
    extend(options, _options);
    Pace.running = true;
    try {
      bar.render();
    } catch (_error) {
      NoTargetError = _error;
    }
    if (!document.querySelector('.pace')) {
      return setTimeout(Pace.start, 50);
    } else {
      Pace.trigger('start');
      return Pace.go();
    }
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! pace */ "./node_modules/pace/pace.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return Pace;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}).call(this);


/***/ }),

/***/ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
    var this$1 = this;

  for (var name in this$1.handlers) {
    this$1.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

var processScrollDiff = function(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
};

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

var updateGeometry = function(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt(i.railXWidth * i.containerWidth / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      (i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt(i.railYHeight * i.containerHeight / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      roundedScrollTop *
        (i.railYHeight - i.scrollbarYHeight) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
};

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

var clickRail = function(i) {
  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
};

var dragThumb = function(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
};

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    startingScrollTop = element[scrollTop];
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
    e.preventDefault();
  });
}

var keyboard = function(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
};

var wheel = function(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
};

var touch = function(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
};

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this$1.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
          ? 'end'
          : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
          ? 'end'
          : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));function AppContainer(e){return React.Children.only(e.children)}var hot_prod=function(){return function(e){return e}},areComponentsEqual=function(e,n){return e===n},setConfig=function(){},cold=function(e){return e},configureComponent=function(){};exports.AppContainer=AppContainer,exports.hot=hot_prod,exports.areComponentsEqual=areComponentsEqual,exports.setConfig=setConfig,exports.cold=cold,exports.configureComponent=configureComponent;


/***/ }),

/***/ "./node_modules/react-hot-loader/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-hot-loader/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasWindow = typeof window !== 'undefined';

if (true) {
  module.exports = __webpack_require__(/*! ./dist/react-hot-loader.production.min.js */ "./node_modules/react-hot-loader/dist/react-hot-loader.production.min.js");
} else { var jsFeaturesPresent, evalAllowed; }

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.8.6';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warningWithoutStack$1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;

/**
 * Convenience component with default shallow equality check for sCU.
 */
function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };
  {
    Object.seal(refObject);
  }
  return refObject;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_CONCURRENT_MODE_TYPE:
      return 'ConcurrentMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
        }
    }
  }
  return null;
}

var ReactDebugCurrentFrame = {};

var currentlyValidatingElement = null;

function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = '';

    // Add an extra top frame while an element is being validated
    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    }

    // Delegate to the injected renderer-specific implementation
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentOwner: ReactCurrentOwner,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown = void 0;
var specialPropRefWarningShown = void 0;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warningWithoutStack$1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warningWithoutStack$1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName = void 0;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  !!(element === null || element === undefined) ? invariant(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

  var propName = void 0;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps = void 0;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child = void 0;
  var nextName = void 0;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          !didWarnAboutMaps ? warning$1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.') : void 0;
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step = void 0;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warningWithoutStack$1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };

  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    };
    // $FlowFixMe: Flow complains about not setting a value, which is intentional here
    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;
            warning$1(false, 'Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }
          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;
            warning$1(false, 'Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }
          return context.Consumer;
        }
      }
    });
    // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps = void 0;
    var propTypes = void 0;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          defaultProps = newDefaultProps;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          warning$1(false, 'React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
          propTypes = newPropTypes;
          // Match production behavior more closely:
          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      warningWithoutStack$1(false, 'forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      warningWithoutStack$1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      !(
      // Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
      render.length === 0 || render.length === 2) ? warningWithoutStack$1(false, 'forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.') : void 0;
    }

    if (render != null) {
      !(render.defaultProps == null && render.propTypes == null) ? warningWithoutStack$1(false, 'forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?') : void 0;
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      warningWithoutStack$1(false, 'memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }
  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;
  !(dispatcher !== null) ? invariant(false, 'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.') : void 0;
  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();
  {
    !(unstable_observedBits === undefined) ? warning$1(false, 'useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '') : void 0;

    // TODO: add a more generic warning for invalid values.
    if (Context._context !== undefined) {
      var realContext = Context._context;
      // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.
      if (realContext.Consumer === Context) {
        warning$1(false, 'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        warning$1(false, 'Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }
  return dispatcher.useContext(Context, unstable_observedBits);
}

function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}

function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}

function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}

function useEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, inputs);
}

function useLayoutEffect(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, inputs);
}

function useCallback(callback, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, inputs);
}

function useMemo(create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, inputs);
}

function useImperativeHandle(ref, create, inputs) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, inputs);
}

function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

var propTypesMisspellWarningShown = void 0;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner.type) + '.';
  }

  setCurrentlyValidatingElement(element);
  {
    warning$1(false, 'Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }
  setCurrentlyValidatingElement(null);
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step = void 0;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var type = element.type;
  if (type === null || type === undefined || typeof type === 'string') {
    return;
  }
  var name = getComponentName(type);
  var propTypes = void 0;
  if (typeof type === 'function') {
    propTypes = type.propTypes;
  } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
  // Note: Memo only checks outer props here.
  // Inner props are checked in the reconciler.
  type.$$typeof === REACT_MEMO_TYPE)) {
    propTypes = type.propTypes;
  } else {
    return;
  }
  if (propTypes) {
    setCurrentlyValidatingElement(element);
    checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
    setCurrentlyValidatingElement(null);
  } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warningWithoutStack$1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof type.getDefaultProps === 'function') {
    !type.getDefaultProps.isReactClassApproved ? warningWithoutStack$1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  setCurrentlyValidatingElement(fragment);

  var keys = Object.keys(fragment.props);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (key !== 'children' && key !== 'key') {
      warning$1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
      break;
    }
  }

  if (fragment.ref !== null) {
    warning$1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.');
  }

  setCurrentlyValidatingElement(null);
}

function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type);

  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString = void 0;
    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = '<' + (getComponentName(type.type) || 'Unknown') + ' />';
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    warning$1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;
  // Legacy hook: remove it
  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.
 // TODO: true? Here it might just be false.

// Only used in www builds.


// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
var enableStableConcurrentModeAPIs = false;

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  createRef: createRef,
  Component: Component,
  PureComponent: PureComponent,

  createContext: createContext,
  forwardRef: forwardRef,
  lazy: lazy,
  memo: memo,

  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,

  Fragment: REACT_FRAGMENT_TYPE,
  StrictMode: REACT_STRICT_MODE_TYPE,
  Suspense: REACT_SUSPENSE_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  unstable_ConcurrentMode: REACT_CONCURRENT_MODE_TYPE,
  unstable_Profiler: REACT_PROFILER_TYPE,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
};

// Note: some APIs are added with feature flags.
// Make sure that stable builds for open source
// don't modify the React object to avoid deopts.
// Also let's not expose their names in stable builds.

if (enableStableConcurrentModeAPIs) {
  React.ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
  React.Profiler = REACT_PROFILER_TYPE;
  React.unstable_ConcurrentMode = undefined;
  React.unstable_Profiler = undefined;
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3.default || React$3;

module.exports = react;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/backend/after.js":
/*!***************************************!*\
  !*** ./resources/js/backend/after.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Loaded after CoreUI app.js

/***/ }),

/***/ "./resources/js/backend/app.js":
/*!*************************************!*\
  !*** ./resources/js/backend/app.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_coreui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/coreui */ "./node_modules/@coreui/coreui/dist/js/coreui.js");
/* harmony import */ var _coreui_coreui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./resources/js/backend/before.js":
/*!****************************************!*\
  !*** ./resources/js/backend/before.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bootstrap */ "./resources/js/bootstrap.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pace */ "./node_modules/pace/pace.js");
/* harmony import */ var pace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins */ "./resources/js/plugins.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins__WEBPACK_IMPORTED_MODULE_2__);
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// Loaded before CoreUI app.js




/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_6__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();
/**
 * This bootstrap file is used for both frontend and backend
 */






 // Required for BS4



/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.Swal = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a;
window._ = lodash__WEBPACK_IMPORTED_MODULE_0___default.a; // Lodash

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = axios__WEBPACK_IMPORTED_MODULE_1___default.a;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });


;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"))["default"];

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(token, "token", "/Users/craigsmith/Sites/sciwifi/resources/js/bootstrap.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(token, "token", "/Users/craigsmith/Sites/sciwifi/resources/js/bootstrap.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/plugins.js":
/*!*********************************!*\
  !*** ./resources/js/plugins.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();
/**
 * Allows you to add data-method="METHOD to links to automatically inject a form
 * with the method on click
 *
 * Example: <a href="{{route('customers.destroy', $customer->id)}}"
 * data-method="delete" name="delete_item">Delete</a>
 *
 * Injects a form with that's fired on click of the link with a DELETE request.
 * Good because you don't have to dirty your HTML with delete forms everywhere.
 */


function addDeleteForms() {
  $('[data-method]').append(function () {
    if (!$(this).find('form').length > 0) {
      return "\n<form action='" + $(this).attr('href') + "' method='POST' name='delete_item' style='display:none'>\n" + "<input type='hidden' name='_method' value='" + $(this).attr('data-method') + "'>\n" + "<input type='hidden' name='_token' value='" + $('meta[name="csrf-token"]').attr('content') + "'>\n" + '</form>\n';
    } else {
      return '';
    }
  }).attr('href', '#').attr('style', 'cursor:pointer;').attr('onclick', '$(this).find("form").submit();');
}
/**
 * Place any jQuery/helper plugins in here.
 */


$(function () {
  /**
   * Add the data-method="delete" forms to all delete links
   */
  addDeleteForms();
  /**
   * Disable all submit buttons once clicked
   */

  $('form').submit(function () {
    $(this).find('input[type="submit"]').attr('disabled', true);
    $(this).find('button[type="submit"]').attr('disabled', true);
    return true;
  });
  /**
   * Generic confirm form delete using Sweet Alert
   */

  $('body').on('submit', 'form[name=delete_item]', function (e) {
    e.preventDefault();
    var form = this;
    var link = $('a[data-method="delete"]');
    var cancel = link.attr('data-trans-button-cancel') ? link.attr('data-trans-button-cancel') : 'Cancel';
    var confirm = link.attr('data-trans-button-confirm') ? link.attr('data-trans-button-confirm') : 'Yes, delete';
    var title = link.attr('data-trans-title') ? link.attr('data-trans-title') : 'Are you sure you want to delete this item?';
    Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: confirm,
      cancelButtonText: cancel,
      type: 'warning'
    }).then(function (result) {
      result.value && form.submit();
    });
  }).on('click', 'a[name=confirm_item]', function (e) {
    /**
     * Generic 'are you sure' confirm box
     */
    e.preventDefault();
    var link = $(this);
    var title = link.attr('data-trans-title') ? link.attr('data-trans-title') : 'Are you sure you want to do this?';
    var cancel = link.attr('data-trans-button-cancel') ? link.attr('data-trans-button-cancel') : 'Cancel';
    var confirm = link.attr('data-trans-button-confirm') ? link.attr('data-trans-button-confirm') : 'Continue';
    Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: confirm,
      cancelButtonText: cancel,
      type: 'info'
    }).then(function (result) {
      result.value && window.location.assign(link.attr('href'));
    });
  });
  $('[data-toggle="tooltip"]').tooltip();
});
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js"))["default"];

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(addDeleteForms, "addDeleteForms", "/Users/craigsmith/Sites/sciwifi/resources/js/plugins.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(addDeleteForms, "addDeleteForms", "/Users/craigsmith/Sites/sciwifi/resources/js/plugins.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ 1:
/*!************************************************************************************************************!*\
  !*** multi ./resources/js/backend/before.js ./resources/js/backend/app.js ./resources/js/backend/after.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/craigsmith/Sites/sciwifi/resources/js/backend/before.js */"./resources/js/backend/before.js");
__webpack_require__(/*! /Users/craigsmith/Sites/sciwifi/resources/js/backend/app.js */"./resources/js/backend/app.js");
module.exports = __webpack_require__(/*! /Users/craigsmith/Sites/sciwifi/resources/js/backend/after.js */"./resources/js/backend/after.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvcmV1aS9jb3JldWkvZGlzdC9qcy9jb3JldWkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9kZS1saWJzLWJyb3dzZXIvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFjZS9wYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhci9kaXN0L3BlcmZlY3Qtc2Nyb2xsYmFyLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWhvdC1sb2FkZXIvZGlzdC9yZWFjdC1ob3QtbG9hZGVyLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ob3QtbG9hZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2JlZm9yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wbHVnaW5zLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsInRva2VuIiwiZG9jdW1lbnQiLCJjb25zb2xlIiwiJCIsImFkZERlbGV0ZUZvcm1zIiwiZSIsImZvcm0iLCJsaW5rIiwiY2FuY2VsIiwiY29uZmlybSIsInRpdGxlIiwiU3dhbCIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0eXBlIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTRELG9CQUFvQixtQkFBTyxDQUFDLG9EQUFRLEdBQUcsbUJBQU8sQ0FBQyx5RkFBbUI7QUFDaEksRUFBRSxTQUM4RjtBQUNoRyxDQUFDLGdEQUFnRDs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsWUFBWSxFQUFFO0FBQ2xDOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CLHlDQUF5QztBQUN6QyxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQSx1RUFBdUU7QUFDdkUsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0IsRUFBRTs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFlBQVk7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLFFBQVEsbUJBQW1CLFVBQVUsRUFBRSxFQUFFO0FBQzVFLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBELG1CQUFtQixVQUFVLEVBQUUsRUFBRTtBQUMzRixHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssWUFBWTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLHdCQUF3QjtBQUMvRyxzRUFBc0U7QUFDdEUsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNENBQTRDO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVU7QUFDekM7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1CQUFtQixhQUFhO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHFDQUFxQztBQUN2RTtBQUNBO0FBQ0EsNkJBQTZCLGdDQUFnQztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLEVBQUU7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RjtBQUN6RjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFlBQVksZUFBZTtBQUNsQztBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxPQUFPOzs7QUFHUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsRUFBRTs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsRUFBRSxFQUFFLElBQUk7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLEVBQUUsRUFBRSxJQUFJOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLHdCQUF3QiwwQkFBMEIsWUFBWSxFQUFFO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCxjQUFjOztBQUU5RCxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7OztBQ3JyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUEsb0NBQW9DOztBQUVwQztBQUNBLGtDQUFrQyxXQUFXO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFlBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxZQUFZO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsWUFBWTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxZQUFZO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDBDQUEwQyxZQUFZO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxZQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxZQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFlBQVk7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFlBQVk7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUVBQXlFLG1CQUFtQjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLG1CQUFtQjtBQUM1RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSx3REFBd0QsNEJBQTRCLEVBQUU7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVILHdEQUF3RCw0QkFBNEIsRUFBRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUEsb0NBQW9DLG1DQUFtQztBQUN2RSxzQ0FBc0MsMkVBQTJFOztBQUVqSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQiwrQ0FBK0M7QUFDMUUsMEJBQTBCLGtEQUFrRDs7QUFFNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5REFBeUQsc0NBQXNDLEVBQUU7O0FBRWpHLHFEQUFxRDtBQUNyRCwyQ0FBMkM7QUFDM0Msd0RBQXdELDJCQUEyQixFQUFFO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGtCQUFrQjtBQUM5Qyw0QkFBNEIsa0JBQWtCOztBQUU5Qzs7QUFFQTtBQUNBOztBQUVBLDRCQUE0QixjQUFjO0FBQzFDLDRCQUE0QixjQUFjO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFDQUFxQyxFQUFFO0FBQ3BFO0FBQ0E7O0FBRWUsK0VBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNueUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7O0FBRUEsSUFBSSxJQUFxQztBQUN6Qyw2QkFBNkIsbUJBQU8sQ0FBQyx5RkFBNEI7QUFDakU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNYYSw0QkFBNEIsd0RBQXdELDRDQUE0QyxTQUFTLEVBQUUsMEJBQTBCLG1CQUFPLENBQUMsNENBQU8sR0FBRyx5QkFBeUIsdUNBQXVDLHdCQUF3QixtQkFBbUIsVUFBVSxrQ0FBa0MsYUFBYSx1QkFBdUIsa0JBQWtCLFNBQVMsaUNBQWlDOzs7Ozs7Ozs7Ozs7O0FDQS9hOztBQUVaOztBQUVBLElBQUksSUFBa0U7QUFDdEUsbUJBQW1CLG1CQUFPLENBQUMsMEhBQTJDO0FBQ3RFLENBQUMsTUFBTSx1Qzs7Ozs7Ozs7Ozs7O0FDTlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7OztBQUliLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsNERBQWU7QUFDckMscUJBQXFCLG1CQUFPLENBQUMsOEVBQTJCOztBQUV4RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0ZBQXNGLGFBQWE7QUFDbkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGLGVBQWU7QUFDM0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHNGQUFzRixhQUFhO0FBQ25HO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxT0FBcU87QUFDck87QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixhQUFhLE9BQU87QUFDcEIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0I7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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REEseUJBQUMsQ0FBREE7QUExRERBLENBQUMsQ0FBREE7Ozs7Ozs7Ozs7MEJBakJTQyxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUFULGMiLCJmaWxlIjoiL2pzL2JhY2tlbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAgKiBDb3JlVUkgdjIuMS45IChodHRwczovL2NvcmV1aS5pbylcbiAgKiBDb3B5cmlnaHQgMjAxOSDFgXVrYXN6IEhvbGVjemVrXG4gICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pbylcbiAgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgnanF1ZXJ5JyksIHJlcXVpcmUoJ3BlcmZlY3Qtc2Nyb2xsYmFyJykpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cycsICdqcXVlcnknLCAncGVyZmVjdC1zY3JvbGxiYXInXSwgZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLmNvcmV1aSA9IHt9LCBnbG9iYWwualF1ZXJ5LCBnbG9iYWwuUGVyZmVjdFNjcm9sbGJhcikpO1xufSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgJCwgUGVyZmVjdFNjcm9sbGJhcikgeyAndXNlIHN0cmljdCc7XG5cbiAgJCA9ICQgJiYgJC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gJFsnZGVmYXVsdCddIDogJDtcbiAgUGVyZmVjdFNjcm9sbGJhciA9IFBlcmZlY3RTY3JvbGxiYXIgJiYgUGVyZmVjdFNjcm9sbGJhci5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gUGVyZmVjdFNjcm9sbGJhclsnZGVmYXVsdCddIDogUGVyZmVjdFNjcm9sbGJhcjtcblxuICB2YXIgX2lzT2JqZWN0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbiAgfTtcblxuICB2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxuICB2YXIgX2NvZiA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuICBcdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbiAgfVxuXG4gIHZhciBfY29yZSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgdmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi41JyB9O1xuICBpZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICB9KTtcbiAgdmFyIF9jb3JlXzEgPSBfY29yZS52ZXJzaW9uO1xuXG4gIHZhciBfZ2xvYmFsID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxuICB2YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICB9KTtcblxuICB2YXIgX3NoYXJlZCA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgdmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xuICB2YXIgc3RvcmUgPSBfZ2xvYmFsW1NIQVJFRF0gfHwgKF9nbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xuICB9KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gICAgdmVyc2lvbjogX2NvcmUudmVyc2lvbixcbiAgICBtb2RlOiAnZ2xvYmFsJyxcbiAgICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xuICB9KTtcbiAgfSk7XG5cbiAgdmFyIGlkID0gMDtcbiAgdmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbiAgdmFyIF91aWQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbiAgfTtcblxuICB2YXIgX3drcyA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgdmFyIHN0b3JlID0gX3NoYXJlZCgnd2tzJyk7XG5cbiAgdmFyIFN5bWJvbCA9IF9nbG9iYWwuU3ltYm9sO1xuICB2YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxuICB2YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IF91aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbiAgfTtcblxuICAkZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuICB9KTtcblxuICAvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcblxuXG4gIHZhciBNQVRDSCA9IF93a3MoJ21hdGNoJyk7XG4gIHZhciBfaXNSZWdleHAgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgaXNSZWdFeHA7XG4gICAgcmV0dXJuIF9pc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBfY29mKGl0KSA9PSAnUmVnRXhwJyk7XG4gIH07XG5cbiAgdmFyIF9hbk9iamVjdCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIGlmICghX2lzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICAgIHJldHVybiBpdDtcbiAgfTtcblxuICB2YXIgX2FGdW5jdGlvbiA9IGZ1bmN0aW9uIChpdCkge1xuICAgIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgICByZXR1cm4gaXQ7XG4gIH07XG5cbiAgLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG5cblxuICB2YXIgU1BFQ0lFUyA9IF93a3MoJ3NwZWNpZXMnKTtcbiAgdmFyIF9zcGVjaWVzQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAoTywgRCkge1xuICAgIHZhciBDID0gX2FuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICAgIHZhciBTO1xuICAgIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBfYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBfYUZ1bmN0aW9uKFMpO1xuICB9O1xuXG4gIC8vIDcuMS40IFRvSW50ZWdlclxuICB2YXIgY2VpbCA9IE1hdGguY2VpbDtcbiAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgdmFyIF90b0ludGVnZXIgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbiAgfTtcblxuICAvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxuICB2YXIgX2RlZmluZWQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gICAgcmV0dXJuIGl0O1xuICB9O1xuXG4gIC8vIHRydWUgIC0+IFN0cmluZyNhdFxuICAvLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbiAgdmFyIF9zdHJpbmdBdCA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgICAgdmFyIHMgPSBTdHJpbmcoX2RlZmluZWQodGhhdCkpO1xuICAgICAgdmFyIGkgPSBfdG9JbnRlZ2VyKHBvcyk7XG4gICAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgICAgdmFyIGEsIGI7XG4gICAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgYXQgPSBfc3RyaW5nQXQodHJ1ZSk7XG5cbiAgIC8vIGBBZHZhbmNlU3RyaW5nSW5kZXhgIGFic3RyYWN0IG9wZXJhdGlvblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbiAgdmFyIF9hZHZhbmNlU3RyaW5nSW5kZXggPSBmdW5jdGlvbiAoUywgaW5kZXgsIHVuaWNvZGUpIHtcbiAgICByZXR1cm4gaW5kZXggKyAodW5pY29kZSA/IGF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbiAgfTtcblxuICAvLyA3LjEuMTUgVG9MZW5ndGhcblxuICB2YXIgbWluID0gTWF0aC5taW47XG4gIHZhciBfdG9MZW5ndGggPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaXQgPiAwID8gbWluKF90b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbiAgfTtcblxuICAvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxuXG4gIHZhciBUQUcgPSBfd2tzKCd0b1N0cmluZ1RhZycpO1xuICAvLyBFUzMgd3JvbmcgaGVyZVxuICB2YXIgQVJHID0gX2NvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbiAgLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbiAgdmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBpdFtrZXldO1xuICAgIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICB9O1xuXG4gIHZhciBfY2xhc3NvZiA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBPLCBULCBCO1xuICAgIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICAgIDogQVJHID8gX2NvZihPKVxuICAgICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgICAgOiAoQiA9IF9jb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xuICB9O1xuXG4gIHZhciBidWlsdGluRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcblxuICAgLy8gYFJlZ0V4cEV4ZWNgIGFic3RyYWN0IG9wZXJhdGlvblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG4gIHZhciBfcmVnZXhwRXhlY0Fic3RyYWN0ID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgICB2YXIgZXhlYyA9IFIuZXhlYztcbiAgICBpZiAodHlwZW9mIGV4ZWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciByZXN1bHQgPSBleGVjLmNhbGwoUiwgUyk7XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBpZiAoX2NsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gICAgfVxuICAgIHJldHVybiBidWlsdGluRXhlYy5jYWxsKFIsIFMpO1xuICB9O1xuXG4gIC8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzXG5cbiAgdmFyIF9mbGFncyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGhhdCA9IF9hbk9iamVjdCh0aGlzKTtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICAgIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gICAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICAgIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gICAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4gIC8vIFRoaXMgYWx3YXlzIHJlZmVycyB0byB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLCBiZWNhdXNlIHRoZVxuICAvLyBTdHJpbmcjcmVwbGFjZSBwb2x5ZmlsbCB1c2VzIC4vZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyxcbiAgLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxuICB2YXIgbmF0aXZlUmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcblxuICB2YXIgcGF0Y2hlZEV4ZWMgPSBuYXRpdmVFeGVjO1xuXG4gIHZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG5cbiAgdmFyIFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlMSA9IC9hLyxcbiAgICAgICAgcmUyID0gL2IqL2c7XG4gICAgbmF0aXZlRXhlYy5jYWxsKHJlMSwgJ2EnKTtcbiAgICBuYXRpdmVFeGVjLmNhbGwocmUyLCAnYScpO1xuICAgIHJldHVybiByZTFbTEFTVF9JTkRFWF0gIT09IDAgfHwgcmUyW0xBU1RfSU5ERVhdICE9PSAwO1xuICB9KSgpO1xuXG4gIC8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwLCBjb3BpZWQgZnJvbSBlczUtc2hpbSdzIFN0cmluZyNzcGxpdCBwYXRjaC5cbiAgdmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxuICB2YXIgUEFUQ0ggPSBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgfHwgTlBDR19JTkNMVURFRDtcblxuICBpZiAoUEFUQ0gpIHtcbiAgICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgICB2YXIgcmUgPSB0aGlzO1xuICAgICAgdmFyIGxhc3RJbmRleCwgcmVDb3B5LCBtYXRjaCwgaTtcblxuICAgICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXicgKyByZS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIF9mbGFncy5jYWxsKHJlKSk7XG4gICAgICB9XG4gICAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HKSBsYXN0SW5kZXggPSByZVtMQVNUX0lOREVYXTtcblxuICAgICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwocmUsIHN0cik7XG5cbiAgICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgJiYgbWF0Y2gpIHtcbiAgICAgICAgcmVbTEFTVF9JTkRFWF0gPSByZS5nbG9iYWwgPyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCA6IGxhc3RJbmRleDtcbiAgICAgIH1cbiAgICAgIGlmIChOUENHX0lOQ0xVREVEICYmIG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJyB3b3JrIGZvciAvKC4/KT8vXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICAgICAgbmF0aXZlUmVwbGFjZS5jYWxsKG1hdGNoWzBdLCByZUNvcHksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBfcmVnZXhwRXhlYyA9IHBhdGNoZWRFeGVjO1xuXG4gIHZhciBfZmFpbHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gISFleGVjKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbiAgdmFyIF9kZXNjcmlwdG9ycyA9ICFfZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xuICB9KTtcblxuICB2YXIgZG9jdW1lbnQkMSA9IF9nbG9iYWwuZG9jdW1lbnQ7XG4gIC8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxuICB2YXIgaXMgPSBfaXNPYmplY3QoZG9jdW1lbnQkMSkgJiYgX2lzT2JqZWN0KGRvY3VtZW50JDEuY3JlYXRlRWxlbWVudCk7XG4gIHZhciBfZG9tQ3JlYXRlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGlzID8gZG9jdW1lbnQkMS5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xuICB9O1xuXG4gIHZhciBfaWU4RG9tRGVmaW5lID0gIV9kZXNjcmlwdG9ycyAmJiAhX2ZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KF9kb21DcmVhdGUoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbiAgfSk7XG5cbiAgLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG5cbiAgLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2VcbiAgLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbiAgdmFyIF90b1ByaW1pdGl2ZSA9IGZ1bmN0aW9uIChpdCwgUykge1xuICAgIGlmICghX2lzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICAgIHZhciBmbiwgdmFsO1xuICAgIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhX2lzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIV9pc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gICAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhX2lzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG4gIH07XG5cbiAgdmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4gIHZhciBmID0gX2Rlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICAgIF9hbk9iamVjdChPKTtcbiAgICBQID0gX3RvUHJpbWl0aXZlKFAsIHRydWUpO1xuICAgIF9hbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgICBpZiAoX2llOERvbURlZmluZSkgdHJ5IHtcbiAgICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICAgIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgIHJldHVybiBPO1xuICB9O1xuXG4gIHZhciBfb2JqZWN0RHAgPSB7XG4gIFx0ZjogZlxuICB9O1xuXG4gIHZhciBfcHJvcGVydHlEZXNjID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfTtcbiAgfTtcblxuICB2YXIgX2hpZGUgPSBfZGVzY3JpcHRvcnMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIF9vYmplY3REcC5mKG9iamVjdCwga2V5LCBfcHJvcGVydHlEZXNjKDEsIHZhbHVlKSk7XG4gIH0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xuXG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuICB2YXIgX2hhcyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG4gIH07XG5cbiAgdmFyIF9mdW5jdGlvblRvU3RyaW5nID0gX3NoYXJlZCgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuICB2YXIgX3JlZGVmaW5lID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuICB2YXIgU1JDID0gX3VpZCgnc3JjJyk7XG5cbiAgdmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG4gIHZhciBUUEwgPSAoJycgKyBfZnVuY3Rpb25Ub1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxuICBfY29yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIF9mdW5jdGlvblRvU3RyaW5nLmNhbGwoaXQpO1xuICB9O1xuXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICAgIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICAgIGlmIChpc0Z1bmN0aW9uKSBfaGFzKHZhbCwgJ25hbWUnKSB8fCBfaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgICBpZiAoaXNGdW5jdGlvbikgX2hhcyh2YWwsIFNSQykgfHwgX2hpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgICBpZiAoTyA9PT0gX2dsb2JhbCkge1xuICAgICAgT1trZXldID0gdmFsO1xuICAgIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICAgIGRlbGV0ZSBPW2tleV07XG4gICAgICBfaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICAgIE9ba2V5XSA9IHZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgX2hpZGUoTywga2V5LCB2YWwpO1xuICAgIH1cbiAgLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4gIH0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgX2Z1bmN0aW9uVG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG4gIH0pO1xuXG4gIC8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xuXG4gIHZhciBfY3R4ID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgICBfYUZ1bmN0aW9uKGZuKTtcbiAgICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gICAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgICAgfTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgICAgfTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuICB2YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICAgIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gX2dsb2JhbCA6IElTX1NUQVRJQyA/IF9nbG9iYWxbbmFtZV0gfHwgKF9nbG9iYWxbbmFtZV0gPSB7fSkgOiAoX2dsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IF9jb3JlIDogX2NvcmVbbmFtZV0gfHwgKF9jb3JlW25hbWVdID0ge30pO1xuICAgIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICAgIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gICAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gX2N0eChvdXQsIF9nbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gX2N0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgICAgaWYgKHRhcmdldCkgX3JlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgICAgLy8gZXhwb3J0XG4gICAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgX2hpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICAgIH1cbiAgfTtcbiAgX2dsb2JhbC5jb3JlID0gX2NvcmU7XG4gIC8vIHR5cGUgYml0bWFwXG4gICRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4gICRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4gICRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4gICRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiAgJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4gICRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuICAkZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiAgJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG4gIHZhciBfZXhwb3J0ID0gJGV4cG9ydDtcblxuICBfZXhwb3J0KHtcbiAgICB0YXJnZXQ6ICdSZWdFeHAnLFxuICAgIHByb3RvOiB0cnVlLFxuICAgIGZvcmNlZDogX3JlZ2V4cEV4ZWMgIT09IC8uLy5leGVjXG4gIH0sIHtcbiAgICBleGVjOiBfcmVnZXhwRXhlY1xuICB9KTtcblxuICB2YXIgU1BFQ0lFUyQxID0gX3drcygnc3BlY2llcycpO1xuXG4gIHZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFfZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgICAvLyAjbWF0Y2ggd29ya3MgZmluZSBiZWNhdXNlIGl0IGp1c3QgcmV0dXJuIHRoZSBleGVjIHJlc3VsdHMsIGV2ZW4gaWYgaXQgaGFzXG4gICAgLy8gYSBcImdyb3BzXCIgcHJvcGVydHkuXG4gICAgdmFyIHJlID0gLy4vO1xuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xuICB9KTtcblxuICB2YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbiAgICB2YXIgcmUgPSAvKD86KS87XG4gICAgdmFyIG9yaWdpbmFsRXhlYyA9IHJlLmV4ZWM7XG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIHZhciByZXN1bHQgPSAnYWInLnNwbGl0KHJlKTtcbiAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA9PT0gMiAmJiByZXN1bHRbMF0gPT09ICdhJyAmJiByZXN1bHRbMV0gPT09ICdiJztcbiAgfSkoKTtcblxuICB2YXIgX2ZpeFJlV2tzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gICAgdmFyIFNZTUJPTCA9IF93a3MoS0VZKTtcblxuICAgIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIV9mYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgICB2YXIgTyA9IHt9O1xuICAgICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gICAgfSk7XG5cbiAgICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MID8gIV9mYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICAgIHZhciByZSA9IC9hLztcbiAgICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcbiAgICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTJDFdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmU7IH07XG4gICAgICB9XG4gICAgICByZVtTWU1CT0xdKCcnKTtcbiAgICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgICB9KSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChcbiAgICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICAgIChLRVkgPT09ICdyZXBsYWNlJyAmJiAhUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMpIHx8XG4gICAgICAoS0VZID09PSAnc3BsaXQnICYmICFTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMpXG4gICAgKSB7XG4gICAgICB2YXIgbmF0aXZlUmVnRXhwTWV0aG9kID0gLy4vW1NZTUJPTF07XG4gICAgICB2YXIgZm5zID0gZXhlYyhcbiAgICAgICAgX2RlZmluZWQsXG4gICAgICAgIFNZTUJPTCxcbiAgICAgICAgJydbS0VZXSxcbiAgICAgICAgZnVuY3Rpb24gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgaWYgKHJlZ2V4cC5leGVjID09PSBfcmVnZXhwRXhlYykge1xuICAgICAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgICAgIC8vIFRoZSBuYXRpdmUgU3RyaW5nIG1ldGhvZCBhbHJlYWR5IGRlbGVnYXRlcyB0byBAQG1ldGhvZCAodGhpc1xuICAgICAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVSZWdFeHBNZXRob2QuY2FsbChyZWdleHAsIHN0ciwgYXJnMikgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVNZXRob2QuY2FsbChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHZhciBzdHJmbiA9IGZuc1swXTtcbiAgICAgIHZhciByeGZuID0gZm5zWzFdO1xuXG4gICAgICBfcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgICBfaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyICRtaW4gPSBNYXRoLm1pbjtcbiAgdmFyICRwdXNoID0gW10ucHVzaDtcbiAgdmFyICRTUExJVCA9ICdzcGxpdCc7XG4gIHZhciBMRU5HVEggPSAnbGVuZ3RoJztcbiAgdmFyIExBU1RfSU5ERVgkMSA9ICdsYXN0SW5kZXgnO1xuICB2YXIgTUFYX1VJTlQzMiA9IDB4ZmZmZmZmZmY7XG5cbiAgLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCd4JywgJ3knKSAtPiAveC95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbiAgdmFyIFNVUFBPUlRTX1kgPSAhX2ZhaWxzKGZ1bmN0aW9uICgpIHsgfSk7XG5cbiAgLy8gQEBzcGxpdCBsb2dpY1xuICBfZml4UmVXa3MoJ3NwbGl0JywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFNQTElULCAkc3BsaXQsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICAgIHZhciBpbnRlcm5hbFNwbGl0O1xuICAgIGlmIChcbiAgICAgICdhYmJjJ1skU1BMSVRdKC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgICAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHxcbiAgICAgICdhYidbJFNQTElUXSgvKD86YWIpKi8pW0xFTkdUSF0gIT0gMiB8fFxuICAgICAgJy4nWyRTUExJVF0oLyguPykoLj8pLylbTEVOR1RIXSAhPSA0IHx8XG4gICAgICAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8XG4gICAgICAnJ1skU1BMSVRdKC8uPy8pW0xFTkdUSF1cbiAgICApIHtcbiAgICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgICBpZiAoIV9pc1JlZ2V4cChzZXBhcmF0b3IpKSByZXR1cm4gJHNwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICAgIHZhciBzcGxpdExpbWl0ID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgICAgdmFyIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGg7XG4gICAgICAgIHdoaWxlIChtYXRjaCA9IF9yZWdleHBFeGVjLmNhbGwoc2VwYXJhdG9yQ29weSwgc3RyaW5nKSkge1xuICAgICAgICAgIGxhc3RJbmRleCA9IHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWCQxXTtcbiAgICAgICAgICBpZiAobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCkge1xuICAgICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgICBpZiAobWF0Y2hbTEVOR1RIXSA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmdbTEVOR1RIXSkgJHB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICBpZiAob3V0cHV0W0xFTkdUSF0gPj0gc3BsaXRMaW1pdCkgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVgkMV0gPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVgkMV0rKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSkge1xuICAgICAgICAgIGlmIChsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKSBvdXRwdXQucHVzaCgnJyk7XG4gICAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgICByZXR1cm4gb3V0cHV0W0xFTkdUSF0gPiBzcGxpdExpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIHNwbGl0TGltaXQpIDogb3V0cHV0O1xuICAgICAgfTtcbiAgICAvLyBDaGFrcmEsIFY4XG4gICAgfSBlbHNlIGlmICgnMCdbJFNQTElUXSh1bmRlZmluZWQsIDApW0xFTkdUSF0pIHtcbiAgICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6ICRzcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW50ZXJuYWxTcGxpdCA9ICRzcGxpdDtcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zcGxpdFxuICAgICAgZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICAgIHZhciBzcGxpdHRlciA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgICAgICByZXR1cm4gc3BsaXR0ZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gc3BsaXR0ZXIuY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICAgIDogaW50ZXJuYWxTcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB9LFxuICAgICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNwbGl0XG4gICAgICAvL1xuICAgICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICAgICAgLy8gdGhlICd5JyBmbGFnLlxuICAgICAgZnVuY3Rpb24gKHJlZ2V4cCwgbGltaXQpIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByZWdleHAsIHRoaXMsIGxpbWl0LCBpbnRlcm5hbFNwbGl0ICE9PSAkc3BsaXQpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgICAgdmFyIHJ4ID0gX2FuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgICB2YXIgQyA9IF9zcGVjaWVzQ29uc3RydWN0b3IocngsIFJlZ0V4cCk7XG5cbiAgICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XG4gICAgICAgIHZhciBmbGFncyA9IChyeC5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHJ4Lm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChyeC51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKFNVUFBPUlRTX1kgPyAneScgOiAnZycpO1xuXG4gICAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBTIHNsaWNpbmcsIHRvXG4gICAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoU1VQUE9SVFNfWSA/IHJ4IDogJ14oPzonICsgcnguc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XG4gICAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIF9yZWdleHBFeGVjQWJzdHJhY3Qoc3BsaXR0ZXIsIFMpID09PSBudWxsID8gW1NdIDogW107XG4gICAgICAgIHZhciBwID0gMDtcbiAgICAgICAgdmFyIHEgPSAwO1xuICAgICAgICB2YXIgQSA9IFtdO1xuICAgICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XG4gICAgICAgICAgc3BsaXR0ZXIubGFzdEluZGV4ID0gU1VQUE9SVFNfWSA/IHEgOiAwO1xuICAgICAgICAgIHZhciB6ID0gX3JlZ2V4cEV4ZWNBYnN0cmFjdChzcGxpdHRlciwgU1VQUE9SVFNfWSA/IFMgOiBTLnNsaWNlKHEpKTtcbiAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB6ID09PSBudWxsIHx8XG4gICAgICAgICAgICAoZSA9ICRtaW4oX3RvTGVuZ3RoKHNwbGl0dGVyLmxhc3RJbmRleCArIChTVVBQT1JUU19ZID8gMCA6IHEpKSwgUy5sZW5ndGgpKSA9PT0gcFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcSA9IF9hZHZhbmNlU3RyaW5nSW5kZXgoUywgcSwgdW5pY29kZU1hdGNoaW5nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQS5wdXNoKFMuc2xpY2UocCwgcSkpO1xuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgQS5wdXNoKHpbaV0pO1xuICAgICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxID0gcCA9IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEEucHVzaChTLnNsaWNlKHApKTtcbiAgICAgICAgcmV0dXJuIEE7XG4gICAgICB9XG4gICAgXTtcbiAgfSk7XG5cbiAgLypcclxuICAqIHJlcXVpcmVkIHBvbHlmaWxsc1xyXG4gICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICAoZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuICB9KSgpO1xuICAvKiogSUU5LCBJRTEwIGFuZCBJRTExIHJlcXVpcmVzIGFsbCBvZiB0aGUgZm9sbG93aW5nIHBvbHlmaWxscy4gKiovXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvc3ltYm9sJ1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L29iamVjdCdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9mdW5jdGlvbidcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1pbnQnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtZmxvYXQnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvbnVtYmVyJ1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L21hdGgnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvc3RyaW5nJ1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L2RhdGUnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvYXJyYXknXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvcmVnZXhwJ1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L21hcCdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi93ZWFrLW1hcCdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczcvb2JqZWN0J1xuXG4gIC8qKiBJRTEwIGFuZCBJRTExIHJlcXVpcmVzIHRoZSBmb2xsb3dpbmcgZm9yIHRoZSBSZWZsZWN0IEFQSS4gKi9cbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWZsZWN0J1xuXG4gIC8qKiBFdmVyZ3JlZW4gYnJvd3NlcnMgcmVxdWlyZSB0aGVzZS4gKiovXG4gIC8vIFVzZWQgZm9yIHJlZmxlY3QtbWV0YWRhdGEgaW4gSklULiBJZiB5b3UgdXNlIEFPVCAoYW5kIG9ubHkgQW5ndWxhciBkZWNvcmF0b3JzKSwgeW91IGNhbiByZW1vdmUuXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczcvcmVmbGVjdCdcbiAgLy8gQ3VzdG9tRXZlbnQoKSBjb25zdHJ1Y3RvciBmdW5jdGlvbmFsaXR5IGluIElFOSwgSUUxMCwgSUUxMVxuICAvLyAoZnVuY3Rpb24gKCkge1xuICAvL1xuICAvLyAgIGlmICggdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gXCJmdW5jdGlvblwiICkgcmV0dXJuIGZhbHNlXG4gIC8vXG4gIC8vICAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQgKCBldmVudCwgcGFyYW1zICkge1xuICAvLyAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IHVuZGVmaW5lZCB9XG4gIC8vICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoICdDdXN0b21FdmVudCcgKVxuICAvLyAgICAgZXZ0LmluaXRDdXN0b21FdmVudCggZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCApXG4gIC8vICAgICByZXR1cm4gZXZ0XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGVcbiAgLy9cbiAgLy8gICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudFxuICAvLyB9KSgpXG5cbiAgLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIHZhciBfaW9iamVjdCA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIF9jb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbiAgfTtcblxuICAvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcblxuXG4gIHZhciBfdG9Jb2JqZWN0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIF9pb2JqZWN0KF9kZWZpbmVkKGl0KSk7XG4gIH07XG5cbiAgdmFyIG1heCA9IE1hdGgubWF4O1xuICB2YXIgbWluJDEgPSBNYXRoLm1pbjtcbiAgdmFyIF90b0Fic29sdXRlSW5kZXggPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICAgIGluZGV4ID0gX3RvSW50ZWdlcihpbmRleCk7XG4gICAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4kMShpbmRleCwgbGVuZ3RoKTtcbiAgfTtcblxuICAvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4gIC8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG5cblxuXG4gIHZhciBfYXJyYXlJbmNsdWRlcyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICAgIHZhciBPID0gX3RvSW9iamVjdCgkdGhpcyk7XG4gICAgICB2YXIgbGVuZ3RoID0gX3RvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIHZhciBpbmRleCA9IF90b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgICAgdmFyIHZhbHVlO1xuICAgICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIHNoYXJlZCA9IF9zaGFyZWQoJ2tleXMnKTtcblxuICB2YXIgX3NoYXJlZEtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gX3VpZChrZXkpKTtcbiAgfTtcblxuICB2YXIgYXJyYXlJbmRleE9mID0gX2FycmF5SW5jbHVkZXMoZmFsc2UpO1xuICB2YXIgSUVfUFJPVE8gPSBfc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG4gIHZhciBfb2JqZWN0S2V5c0ludGVybmFsID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgICB2YXIgTyA9IF90b0lvYmplY3Qob2JqZWN0KTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgX2hhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICAgIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoX2hhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG4gIHZhciBfZW51bUJ1Z0tleXMgPSAoXG4gICAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbiAgKS5zcGxpdCgnLCcpO1xuXG4gIC8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxuXG5cblxuICB2YXIgX29iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgICByZXR1cm4gX29iamVjdEtleXNJbnRlcm5hbChPLCBfZW51bUJ1Z0tleXMpO1xuICB9O1xuXG4gIHZhciBmJDEgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIHZhciBfb2JqZWN0R29wcyA9IHtcbiAgXHRmOiBmJDFcbiAgfTtcblxuICB2YXIgZiQyID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbiAgdmFyIF9vYmplY3RQaWUgPSB7XG4gIFx0ZjogZiQyXG4gIH07XG5cbiAgLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxuXG4gIHZhciBfdG9PYmplY3QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gT2JqZWN0KF9kZWZpbmVkKGl0KSk7XG4gIH07XG5cbiAgLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxuXG5cblxuXG5cbiAgdmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4gIC8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxuICB2YXIgX29iamVjdEFzc2lnbiA9ICEkYXNzaWduIHx8IF9mYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIEEgPSB7fTtcbiAgICB2YXIgQiA9IHt9O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBTID0gU3ltYm9sKCk7XG4gICAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICAgIEFbU10gPSA3O1xuICAgIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICAgIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xuICB9KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIFQgPSBfdG9PYmplY3QodGFyZ2V0KTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIGluZGV4ID0gMTtcbiAgICB2YXIgZ2V0U3ltYm9scyA9IF9vYmplY3RHb3BzLmY7XG4gICAgdmFyIGlzRW51bSA9IF9vYmplY3RQaWUuZjtcbiAgICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgICB2YXIgUyA9IF9pb2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBfb2JqZWN0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBfb2JqZWN0S2V5cyhTKTtcbiAgICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICAgIHZhciBqID0gMDtcbiAgICAgIHZhciBrZXk7XG4gICAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgICB9IHJldHVybiBUO1xuICB9IDogJGFzc2lnbjtcblxuICAvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxuXG5cbiAgX2V4cG9ydChfZXhwb3J0LlMgKyBfZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogX29iamVjdEFzc2lnbiB9KTtcblxuICB2YXIgX2l0ZXJhdG9ycyA9IHt9O1xuXG4gIHZhciBfb2JqZWN0RHBzID0gX2Rlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgICBfYW5PYmplY3QoTyk7XG4gICAgdmFyIGtleXMgPSBfb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBQO1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSBfb2JqZWN0RHAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgICByZXR1cm4gTztcbiAgfTtcblxuICB2YXIgZG9jdW1lbnQkMiA9IF9nbG9iYWwuZG9jdW1lbnQ7XG4gIHZhciBfaHRtbCA9IGRvY3VtZW50JDIgJiYgZG9jdW1lbnQkMi5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG5cblxuXG4gIHZhciBJRV9QUk9UTyQxID0gX3NoYXJlZEtleSgnSUVfUFJPVE8nKTtcbiAgdmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuICB2YXIgUFJPVE9UWVBFJDEgPSAncHJvdG90eXBlJztcblxuICAvLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG4gIHZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gICAgdmFyIGlmcmFtZSA9IF9kb21DcmVhdGUoJ2lmcmFtZScpO1xuICAgIHZhciBpID0gX2VudW1CdWdLZXlzLmxlbmd0aDtcbiAgICB2YXIgbHQgPSAnPCc7XG4gICAgdmFyIGd0ID0gJz4nO1xuICAgIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBfaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAgIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICAgIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gICAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEUkMV1bX2VudW1CdWdLZXlzW2ldXTtcbiAgICByZXR1cm4gY3JlYXRlRGljdCgpO1xuICB9O1xuXG4gIHZhciBfb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICAgIHZhciByZXN1bHQ7XG4gICAgaWYgKE8gIT09IG51bGwpIHtcbiAgICAgIEVtcHR5W1BST1RPVFlQRSQxXSA9IF9hbk9iamVjdChPKTtcbiAgICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgICAgRW1wdHlbUFJPVE9UWVBFJDFdID0gbnVsbDtcbiAgICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICAgIHJlc3VsdFtJRV9QUk9UTyQxXSA9IE87XG4gICAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogX29iamVjdERwcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xuICB9O1xuXG4gIHZhciBkZWYgPSBfb2JqZWN0RHAuZjtcblxuICB2YXIgVEFHJDEgPSBfd2tzKCd0b1N0cmluZ1RhZycpO1xuXG4gIHZhciBfc2V0VG9TdHJpbmdUYWcgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICAgIGlmIChpdCAmJiAhX2hhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHJDEpKSBkZWYoaXQsIFRBRyQxLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbiAgfTtcblxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuICAvLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxuICBfaGlkZShJdGVyYXRvclByb3RvdHlwZSwgX3drcygnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbiAgdmFyIF9pdGVyQ3JlYXRlID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gX29iamVjdENyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBfcHJvcGVydHlEZXNjKDEsIG5leHQpIH0pO1xuICAgIF9zZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbiAgfTtcblxuICAvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxuXG5cbiAgdmFyIElFX1BST1RPJDIgPSBfc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuICB2YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4gIHZhciBfb2JqZWN0R3BvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gICAgTyA9IF90b09iamVjdChPKTtcbiAgICBpZiAoX2hhcyhPLCBJRV9QUk9UTyQyKSkgcmV0dXJuIE9bSUVfUFJPVE8kMl07XG4gICAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xuICB9O1xuXG4gIHZhciBJVEVSQVRPUiA9IF93a3MoJ2l0ZXJhdG9yJyk7XG4gIHZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICB2YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG4gIHZhciBLRVlTID0gJ2tleXMnO1xuICB2YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbiAgdmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG4gIHZhciBfaXRlckRlZmluZSA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgICBfaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gICAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfTtcbiAgICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICAgIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gICAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICAgIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgICAvLyBGaXggbmF0aXZlXG4gICAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gX29iamVjdEdwbygkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgICBfc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgICBpZiAodHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBfaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gICAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgICB9XG4gICAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gICAgaWYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkge1xuICAgICAgX2hpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gICAgfVxuICAgIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgICBfaXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gICAgX2l0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgICBpZiAoREVGQVVMVCkge1xuICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgICB9O1xuICAgICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSBfcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICAgIH0gZWxzZSBfZXhwb3J0KF9leHBvcnQuUCArIF9leHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gICAgfVxuICAgIHJldHVybiBtZXRob2RzO1xuICB9O1xuXG4gIHZhciAkYXQgPSBfc3RyaW5nQXQodHJ1ZSk7XG5cbiAgLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxuICBfaXRlckRlZmluZShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gICAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIE8gPSB0aGlzLl90O1xuICAgIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gICAgdmFyIHBvaW50O1xuICAgIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICAgIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG4gIH0pO1xuXG4gIC8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcblxuICB2YXIgX2l0ZXJDYWxsID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGVudHJpZXMgPyBmbihfYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gICAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBfYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIC8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcblxuICB2YXIgSVRFUkFUT1IkMSA9IF93a3MoJ2l0ZXJhdG9yJyk7XG4gIHZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4gIHZhciBfaXNBcnJheUl0ZXIgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoX2l0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUiQxXSA9PT0gaXQpO1xuICB9O1xuXG4gIHZhciBfY3JlYXRlUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgICBpZiAoaW5kZXggaW4gb2JqZWN0KSBfb2JqZWN0RHAuZihvYmplY3QsIGluZGV4LCBfcHJvcGVydHlEZXNjKDAsIHZhbHVlKSk7XG4gICAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG4gIH07XG5cbiAgdmFyIElURVJBVE9SJDIgPSBfd2tzKCdpdGVyYXRvcicpO1xuXG4gIHZhciBjb3JlX2dldEl0ZXJhdG9yTWV0aG9kID0gX2NvcmUuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1IkMl1cbiAgICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICAgIHx8IF9pdGVyYXRvcnNbX2NsYXNzb2YoaXQpXTtcbiAgfTtcblxuICB2YXIgSVRFUkFUT1IkMyA9IF93a3MoJ2l0ZXJhdG9yJyk7XG4gIHZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxuICB0cnkge1xuICAgIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUiQzXSgpO1xuICAgIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbiAgdmFyIF9pdGVyRGV0ZWN0ID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gICAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgdmFyIGFyciA9IFs3XTtcbiAgICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SJDNdKCk7XG4gICAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgICBhcnJbSVRFUkFUT1IkM10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgICAgZXhlYyhhcnIpO1xuICAgIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICAgIHJldHVybiBzYWZlO1xuICB9O1xuXG4gIF9leHBvcnQoX2V4cG9ydC5TICsgX2V4cG9ydC5GICogIV9pdGVyRGV0ZWN0KGZ1bmN0aW9uIChpdGVyKSB7IH0pLCAnQXJyYXknLCB7XG4gICAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgIHZhciBPID0gX3RvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgaXRlckZuID0gY29yZV9nZXRJdGVyYXRvck1ldGhvZChPKTtcbiAgICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgICBpZiAobWFwcGluZykgbWFwZm4gPSBfY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBfaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgICBfY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IF9pdGVyQ2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbmd0aCA9IF90b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgICBfY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9KTtcblxuICB2YXIgbWF4JDEgPSBNYXRoLm1heDtcbiAgdmFyIG1pbiQyID0gTWF0aC5taW47XG4gIHZhciBmbG9vciQxID0gTWF0aC5mbG9vcjtcbiAgdmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTID0gL1xcJChbJCZgJ118XFxkXFxkP3w8W14+XSo+KS9nO1xuICB2YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQgPSAvXFwkKFskJmAnXXxcXGRcXGQ/KS9nO1xuXG4gIHZhciBtYXliZVRvU3RyaW5nID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG4gIH07XG5cbiAgLy8gQEByZXBsYWNlIGxvZ2ljXG4gIF9maXhSZVdrcygncmVwbGFjZScsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBSRVBMQUNFLCAkcmVwbGFjZSwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VgIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlXG4gICAgICBmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgICB2YXIgZm4gPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICAgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IGZuLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgICA6ICRyZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgICAgIH0sXG4gICAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEByZXBsYWNlXG4gICAgICBmdW5jdGlvbiAocmVnZXhwLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZSgkcmVwbGFjZSwgcmVnZXhwLCB0aGlzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgICAgdmFyIHJ4ID0gX2FuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSB0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgICBpZiAoIWZ1bmN0aW9uYWxSZXBsYWNlKSByZXBsYWNlVmFsdWUgPSBTdHJpbmcocmVwbGFjZVZhbHVlKTtcbiAgICAgICAgdmFyIGdsb2JhbCA9IHJ4Lmdsb2JhbDtcbiAgICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIHZhciByZXN1bHQgPSBfcmVnZXhwRXhlY0Fic3RyYWN0KHJ4LCBTKTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBicmVhaztcbiAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICBpZiAoIWdsb2JhbCkgYnJlYWs7XG4gICAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gX2FkdmFuY2VTdHJpbmdJbmRleChTLCBfdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhY2N1bXVsYXRlZFJlc3VsdCA9ICcnO1xuICAgICAgICB2YXIgbmV4dFNvdXJjZVBvc2l0aW9uID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgICAgICB2YXIgbWF0Y2hlZCA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICAgIHZhciBwb3NpdGlvbiA9IG1heCQxKG1pbiQyKF90b0ludGVnZXIocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgICB2YXIgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGVxdWl2YWxlbnQgdG9cbiAgICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAgIC8vIGJ1dCBmb3Igc29tZSByZWFzb24gYG5hdGl2ZVNsaWNlLmNhbGwocmVzdWx0LCAxLCByZXN1bHQubGVuZ3RoKWAgKGNhbGxlZCBpblxuICAgICAgICAgIC8vIHRoZSBzbGljZSBwb2x5ZmlsbCB3aGVuIHNsaWNpbmcgbmF0aXZlIGFycmF5cykgXCJkb2Vzbid0IHdvcmtcIiBpbiBzYWZhcmkgOSBhbmRcbiAgICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSBjYXB0dXJlcy5wdXNoKG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgICAgdmFyIG5hbWVkQ2FwdHVyZXMgPSByZXN1bHQuZ3JvdXBzO1xuICAgICAgICAgIGlmIChmdW5jdGlvbmFsUmVwbGFjZSkge1xuICAgICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IFttYXRjaGVkXS5jb25jYXQoY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHJlcGxhY2VyQXJncy5wdXNoKG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VWYWx1ZS5hcHBseSh1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXBsYWNlbWVudCA9IGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBTLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwb3NpdGlvbiA+PSBuZXh0U291cmNlUG9zaXRpb24pIHtcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkUmVzdWx0ICs9IFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uLCBwb3NpdGlvbikgKyByZXBsYWNlbWVudDtcbiAgICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRlZFJlc3VsdCArIFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXRzdWJzdGl0dXRpb25cbiAgICBmdW5jdGlvbiBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgc3RyLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VtZW50KSB7XG4gICAgICB2YXIgdGFpbFBvcyA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICB2YXIgbSA9IGNhcHR1cmVzLmxlbmd0aDtcbiAgICAgIHZhciBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQ7XG4gICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5hbWVkQ2FwdHVyZXMgPSBfdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MUztcbiAgICAgIH1cbiAgICAgIHJldHVybiAkcmVwbGFjZS5jYWxsKHJlcGxhY2VtZW50LCBzeW1ib2xzLCBmdW5jdGlvbiAobWF0Y2gsIGNoKSB7XG4gICAgICAgIHZhciBjYXB0dXJlO1xuICAgICAgICBzd2l0Y2ggKGNoLmNoYXJBdCgwKSkge1xuICAgICAgICAgIGNhc2UgJyQnOiByZXR1cm4gJyQnO1xuICAgICAgICAgIGNhc2UgJyYnOiByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgICBjYXNlICdgJzogcmV0dXJuIHN0ci5zbGljZSgwLCBwb3NpdGlvbik7XG4gICAgICAgICAgY2FzZSBcIidcIjogcmV0dXJuIHN0ci5zbGljZSh0YWlsUG9zKTtcbiAgICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW2NoLnNsaWNlKDEsIC0xKV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OiAvLyBcXGRcXGQ/XG4gICAgICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgICAgIGlmIChuID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICBpZiAobiA+IG0pIHtcbiAgICAgICAgICAgICAgdmFyIGYgPSBmbG9vciQxKG4gLyAxMCk7XG4gICAgICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICAgIGlmIChmIDw9IG0pIHJldHVybiBjYXB0dXJlc1tmIC0gMV0gPT09IHVuZGVmaW5lZCA/IGNoLmNoYXJBdCgxKSA6IGNhcHR1cmVzW2YgLSAxXSArIGNoLmNoYXJBdCgxKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FwdHVyZSA9IGNhcHR1cmVzW24gLSAxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH1cblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSAodjIuMS45KTogYWpheC1sb2FkLmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cbiAgdmFyIEFqYXhMb2FkID0gZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogQ29uc3RhbnRzXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuICAgIHZhciBOQU1FID0gJ2FqYXhMb2FkJztcbiAgICB2YXIgVkVSU0lPTiA9ICcyLjEuOSc7XG4gICAgdmFyIERBVEFfS0VZID0gJ2NvcmV1aS5hamF4TG9hZCc7XG4gICAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gICAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICAgIEFDVElWRTogJ2FjdGl2ZScsXG4gICAgICBOQVZfUElMTFM6ICduYXYtcGlsbHMnLFxuICAgICAgTkFWX1RBQlM6ICduYXYtdGFicycsXG4gICAgICBPUEVOOiAnb3BlbicsXG4gICAgICBWSUVXX1NDUklQVDogJ3ZpZXctc2NyaXB0J1xuICAgIH07XG4gICAgdmFyIEV2ZW50ID0ge1xuICAgICAgQ0xJQ0s6ICdjbGljaydcbiAgICB9O1xuICAgIHZhciBTZWxlY3RvciA9IHtcbiAgICAgIEhFQUQ6ICdoZWFkJyxcbiAgICAgIE5BVl9EUk9QRE9XTjogJy5zaWRlYmFyLW5hdiAubmF2LWRyb3Bkb3duJyxcbiAgICAgIE5BVl9MSU5LOiAnLnNpZGViYXItbmF2IC5uYXYtbGluaycsXG4gICAgICBOQVZfSVRFTTogJy5zaWRlYmFyLW5hdiAubmF2LWl0ZW0nLFxuICAgICAgVklFV19TQ1JJUFQ6ICcudmlldy1zY3JpcHQnXG4gICAgfTtcbiAgICB2YXIgRGVmYXVsdCA9IHtcbiAgICAgIGRlZmF1bHRQYWdlOiAnbWFpbi5odG1sJyxcbiAgICAgIGVycm9yUGFnZTogJzQwNC5odG1sJyxcbiAgICAgIHN1YnBhZ2VzRGlyZWN0b3J5OiAndmlld3MvJ1xuICAgIH07XG5cbiAgICB2YXIgQWpheExvYWQgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBBamF4TG9hZChlbGVtZW50LCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB2YXIgdXJsID0gbG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcnKTtcblxuICAgICAgICBpZiAodXJsICE9PSAnJykge1xuICAgICAgICAgIHRoaXMuc2V0VXBVcmwodXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFVwVXJsKHRoaXMuX2NvbmZpZy5kZWZhdWx0UGFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgICAgdmFyIF9wcm90byA9IEFqYXhMb2FkLnByb3RvdHlwZTtcblxuICAgICAgLy8gUHVibGljXG4gICAgICBfcHJvdG8ubG9hZFBhZ2UgPSBmdW5jdGlvbiBsb2FkUGFnZSh1cmwpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgICAgICB2YXIgY29uZmlnID0gdGhpcy5fY29uZmlnO1xuXG4gICAgICAgIHZhciBsb2FkU2NyaXB0cyA9IGZ1bmN0aW9uIGxvYWRTY3JpcHRzKHNyYywgZWxlbWVudCkge1xuICAgICAgICAgIGlmIChlbGVtZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICAgIHNjcmlwdC5zcmMgPSBzcmNbZWxlbWVudF07XG4gICAgICAgICAgc2NyaXB0LmNsYXNzTmFtZSA9IENsYXNzTmFtZS5WSUVXX1NDUklQVDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW11bHRpLWFzc2lnblxuXG4gICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucmVhZHlTdGF0ZSB8fCB0aGlzLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgaWYgKHNyYy5sZW5ndGggPiBlbGVtZW50ICsgMSkge1xuICAgICAgICAgICAgICAgIGxvYWRTY3JpcHRzKHNyYywgZWxlbWVudCArIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICB1cmw6IGNvbmZpZy5zdWJwYWdlc0RpcmVjdG9yeSArIHVybCxcbiAgICAgICAgICBkYXRhVHlwZTogJ2h0bWwnLFxuICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIGJlZm9yZVNlbmQoKSB7XG4gICAgICAgICAgICAkKFNlbGVjdG9yLlZJRVdfU0NSSVBUKS5yZW1vdmUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzdWx0KSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgd3JhcHBlci5pbm5lckhUTUwgPSByZXN1bHQ7XG4gICAgICAgICAgICB2YXIgc2NyaXB0cyA9IEFycmF5LmZyb20od3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKSkubWFwKGZ1bmN0aW9uIChzY3JpcHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNjcmlwdC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgnc3JjJykubm9kZVZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpLmZvckVhY2goZnVuY3Rpb24gKHNjcmlwdCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgJChlbGVtZW50KS5odG1sKHdyYXBwZXIpO1xuXG4gICAgICAgICAgICBpZiAoc2NyaXB0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgbG9hZFNjcmlwdHMoc2NyaXB0cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjb25maWcuZXJyb3JQYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uc2V0VXBVcmwgPSBmdW5jdGlvbiBzZXRVcFVybCh1cmwpIHtcbiAgICAgICAgJChTZWxlY3Rvci5OQVZfTElOSykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSk7XG4gICAgICAgICQoU2VsZWN0b3IuTkFWX0RST1BET1dOKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuT1BFTik7XG4gICAgICAgICQoU2VsZWN0b3IuTkFWX0RST1BET1dOICsgXCI6aGFzKGFbaHJlZj1cXFwiXCIgKyB1cmwucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnPycpWzBdICsgXCJcXFwiXSlcIikuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pO1xuICAgICAgICAkKFNlbGVjdG9yLk5BVl9JVEVNICsgXCIgYVtocmVmPVxcXCJcIiArIHVybC5yZXBsYWNlKC9eXFwvLywgJycpLnNwbGl0KCc/JylbMF0gKyBcIlxcXCJdXCIpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuICAgICAgICB0aGlzLmxvYWRQYWdlKHVybCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8ubG9hZEJsYW5rID0gZnVuY3Rpb24gbG9hZEJsYW5rKHVybCkge1xuICAgICAgICB3aW5kb3cub3Blbih1cmwpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmxvYWRUb3AgPSBmdW5jdGlvbiBsb2FkVG9wKHVybCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB1cmw7XG4gICAgICB9IC8vIFByaXZhdGVcbiAgICAgIDtcblxuICAgICAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgICBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0LCBjb25maWcpO1xuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDSywgU2VsZWN0b3IuTkFWX0xJTksgKyBcIltocmVmIT1cXFwiI1xcXCJdXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC50YXJnZXQgPT09ICdfdG9wJykge1xuICAgICAgICAgICAgX3RoaXMubG9hZFRvcChldmVudC5jdXJyZW50VGFyZ2V0LmhyZWYpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuY3VycmVudFRhcmdldC50YXJnZXQgPT09ICdfYmxhbmsnKSB7XG4gICAgICAgICAgICBfdGhpcy5sb2FkQmxhbmsoZXZlbnQuY3VycmVudFRhcmdldC5ocmVmKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuc2V0VXBVcmwoZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gU3RhdGljXG4gICAgICA7XG5cbiAgICAgIEFqYXhMb2FkLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgICB2YXIgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZztcblxuICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IG5ldyBBamF4TG9hZCh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhBamF4TG9hZCwgbnVsbCwgW3tcbiAgICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEFqYXhMb2FkO1xuICAgIH0oKTtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogalF1ZXJ5XHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuXG5cbiAgICAkLmZuW05BTUVdID0gQWpheExvYWQuX2pRdWVyeUludGVyZmFjZTtcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQWpheExvYWQ7XG5cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgcmV0dXJuIEFqYXhMb2FkLl9qUXVlcnlJbnRlcmZhY2U7XG4gICAgfTtcblxuICAgIHJldHVybiBBamF4TG9hZDtcbiAgfSgkKTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSAodjIuMS45KTogdG9nZ2xlLWNsYXNzZXMuanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cbiAgdmFyIHJlbW92ZUNsYXNzZXMgPSBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKGNsYXNzTmFtZXMpIHtcbiAgICByZXR1cm4gY2xhc3NOYW1lcy5tYXAoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgfSkuaW5kZXhPZih0cnVlKSAhPT0gLTE7XG4gIH07XG5cbiAgdmFyIHRvZ2dsZUNsYXNzZXMgPSBmdW5jdGlvbiB0b2dnbGVDbGFzc2VzKHRvZ2dsZUNsYXNzLCBjbGFzc05hbWVzKSB7XG4gICAgdmFyIGJyZWFrcG9pbnQgPSBjbGFzc05hbWVzLmluZGV4T2YodG9nZ2xlQ2xhc3MpO1xuICAgIHZhciBuZXdDbGFzc05hbWVzID0gY2xhc3NOYW1lcy5zbGljZSgwLCBicmVha3BvaW50ICsgMSk7XG5cbiAgICBpZiAocmVtb3ZlQ2xhc3NlcyhuZXdDbGFzc05hbWVzKSkge1xuICAgICAgbmV3Q2xhc3NOYW1lcy5tYXAoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRvZ2dsZUNsYXNzKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgKHYyLjEuOSk6IGFzaWRlLW1lbnUuanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuICB2YXIgQXNpZGVNZW51ID0gZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogQ29uc3RhbnRzXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuICAgIHZhciBOQU1FID0gJ2FzaWRlLW1lbnUnO1xuICAgIHZhciBWRVJTSU9OID0gJzIuMS45JztcbiAgICB2YXIgREFUQV9LRVkgPSAnY29yZXVpLmFzaWRlLW1lbnUnO1xuICAgIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICAgIHZhciBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcbiAgICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgICB2YXIgRXZlbnQgPSB7XG4gICAgICBDTElDSzogJ2NsaWNrJyxcbiAgICAgIExPQURfREFUQV9BUEk6IFwibG9hZFwiICsgRVZFTlRfS0VZICsgREFUQV9BUElfS0VZLFxuICAgICAgVE9HR0xFOiAndG9nZ2xlJ1xuICAgIH07XG4gICAgdmFyIFNlbGVjdG9yID0ge1xuICAgICAgQk9EWTogJ2JvZHknLFxuICAgICAgQVNJREVfTUVOVTogJy5hc2lkZS1tZW51JyxcbiAgICAgIEFTSURFX01FTlVfVE9HR0xFUjogJy5hc2lkZS1tZW51LXRvZ2dsZXInXG4gICAgfTtcbiAgICB2YXIgU2hvd0NsYXNzTmFtZXMgPSBbJ2FzaWRlLW1lbnUtc2hvdycsICdhc2lkZS1tZW51LXNtLXNob3cnLCAnYXNpZGUtbWVudS1tZC1zaG93JywgJ2FzaWRlLW1lbnUtbGctc2hvdycsICdhc2lkZS1tZW51LXhsLXNob3cnXTtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cblxuICAgIHZhciBBc2lkZU1lbnUgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBBc2lkZU1lbnUoZWxlbWVudCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgICAgdmFyIF9wcm90byA9IEFzaWRlTWVudS5wcm90b3R5cGU7XG5cbiAgICAgIC8vIFByaXZhdGVcbiAgICAgIF9wcm90by5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5BU0lERV9NRU5VX1RPR0dMRVIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdmFyIHRvZ2dsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldCA/IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50b2dnbGUgOiAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3RvZ2dsZScpO1xuICAgICAgICAgIHRvZ2dsZUNsYXNzZXModG9nZ2xlLCBTaG93Q2xhc3NOYW1lcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBTdGF0aWNcbiAgICAgIDtcblxuICAgICAgQXNpZGVNZW51Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKHRoaXMpO1xuICAgICAgICAgIHZhciBkYXRhID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgQXNpZGVNZW51KHRoaXMpO1xuICAgICAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhBc2lkZU1lbnUsIG51bGwsIFt7XG4gICAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBBc2lkZU1lbnU7XG4gICAgfSgpO1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cblxuXG4gICAgJCh3aW5kb3cpLm9uKEV2ZW50LkxPQURfREFUQV9BUEksIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhc2lkZU1lbnUgPSAkKFNlbGVjdG9yLkFTSURFX01FTlUpO1xuXG4gICAgICBBc2lkZU1lbnUuX2pRdWVyeUludGVyZmFjZS5jYWxsKGFzaWRlTWVudSk7XG4gICAgfSk7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIGpRdWVyeVxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cblxuICAgICQuZm5bTkFNRV0gPSBBc2lkZU1lbnUuX2pRdWVyeUludGVyZmFjZTtcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQXNpZGVNZW51O1xuXG4gICAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICAgIHJldHVybiBBc2lkZU1lbnUuX2pRdWVyeUludGVyZmFjZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFzaWRlTWVudTtcbiAgfSgkKTtcblxuICAvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxuXG4gIHZhciBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgICByZXR1cm4gX2NvZihhcmcpID09ICdBcnJheSc7XG4gIH07XG5cbiAgdmFyIFNQRUNJRVMkMiA9IF93a3MoJ3NwZWNpZXMnKTtcblxuICB2YXIgX2FycmF5U3BlY2llc0NvbnN0cnVjdG9yID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gICAgdmFyIEM7XG4gICAgaWYgKF9pc0FycmF5KG9yaWdpbmFsKSkge1xuICAgICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBfaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKF9pc09iamVjdChDKSkge1xuICAgICAgICBDID0gQ1tTUEVDSUVTJDJdO1xuICAgICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG4gIH07XG5cbiAgLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxuXG5cbiAgdmFyIF9hcnJheVNwZWNpZXNDcmVhdGUgPSBmdW5jdGlvbiAob3JpZ2luYWwsIGxlbmd0aCkge1xuICAgIHJldHVybiBuZXcgKF9hcnJheVNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG4gIH07XG5cbiAgLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4gIC8vIDEgLT4gQXJyYXkjbWFwXG4gIC8vIDIgLT4gQXJyYXkjZmlsdGVyXG4gIC8vIDMgLT4gQXJyYXkjc29tZVxuICAvLyA0IC0+IEFycmF5I2V2ZXJ5XG4gIC8vIDUgLT4gQXJyYXkjZmluZFxuICAvLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxuXG5cblxuXG5cbiAgdmFyIF9hcnJheU1ldGhvZHMgPSBmdW5jdGlvbiAoVFlQRSwgJGNyZWF0ZSkge1xuICAgIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gICAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gICAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gICAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gICAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgX2FycmF5U3BlY2llc0NyZWF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgICB2YXIgTyA9IF90b09iamVjdCgkdGhpcyk7XG4gICAgICB2YXIgc2VsZiA9IF9pb2JqZWN0KE8pO1xuICAgICAgdmFyIGYgPSBfY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgICAgdmFyIGxlbmd0aCA9IF90b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgICB2YXIgdmFsLCByZXM7XG4gICAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICAgIGlmIChUWVBFKSB7XG4gICAgICAgICAgaWYgKElTX01BUCkgcmVzdWx0W2luZGV4XSA9IHJlczsgICAvLyBtYXBcbiAgICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7IC8vIGV2ZXJ5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG4gIHZhciBVTlNDT1BBQkxFUyA9IF93a3MoJ3Vuc2NvcGFibGVzJyk7XG4gIHZhciBBcnJheVByb3RvJDEgPSBBcnJheS5wcm90b3R5cGU7XG4gIGlmIChBcnJheVByb3RvJDFbVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgX2hpZGUoQXJyYXlQcm90byQxLCBVTlNDT1BBQkxFUywge30pO1xuICB2YXIgX2FkZFRvVW5zY29wYWJsZXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgQXJyYXlQcm90byQxW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbiAgfTtcblxuICAvLyAyMi4xLjMuOCBBcnJheS5wcm90b3R5cGUuZmluZChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG5cbiAgdmFyICRmaW5kID0gX2FycmF5TWV0aG9kcyg1KTtcbiAgdmFyIEtFWSA9ICdmaW5kJztcbiAgdmFyIGZvcmNlZCA9IHRydWU7XG4gIC8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG4gIGlmIChLRVkgaW4gW10pIEFycmF5KDEpW0tFWV0oZnVuY3Rpb24gKCkgeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4gIF9leHBvcnQoX2V4cG9ydC5QICsgX2V4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG4gICAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9XG4gIH0pO1xuICBfYWRkVG9VbnNjb3BhYmxlcyhLRVkpO1xuXG4gIC8vIEBAbWF0Y2ggbG9naWNcbiAgX2ZpeFJlV2tzKCdtYXRjaCcsIDEsIGZ1bmN0aW9uIChkZWZpbmVkLCBNQVRDSCwgJG1hdGNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLy8gYFN0cmluZy5wcm90b3R5cGUubWF0Y2hgIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5tYXRjaFxuICAgICAgZnVuY3Rpb24gbWF0Y2gocmVnZXhwKSB7XG4gICAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgICAgdmFyIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuICAgICAgfSxcbiAgICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBtYXRjaFxuICAgICAgZnVuY3Rpb24gKHJlZ2V4cCkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKCRtYXRjaCwgcmVnZXhwLCB0aGlzKTtcbiAgICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuICAgICAgICB2YXIgcnggPSBfYW5PYmplY3QocmVnZXhwKTtcbiAgICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICAgIGlmICghcnguZ2xvYmFsKSByZXR1cm4gX3JlZ2V4cEV4ZWNBYnN0cmFjdChyeCwgUyk7XG4gICAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgIHZhciBBID0gW107XG4gICAgICAgIHZhciBuID0gMDtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgd2hpbGUgKChyZXN1bHQgPSBfcmVnZXhwRXhlY0Fic3RyYWN0KHJ4LCBTKSkgIT09IG51bGwpIHtcbiAgICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgICBBW25dID0gbWF0Y2hTdHI7XG4gICAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gX2FkdmFuY2VTdHJpbmdJbmRleChTLCBfdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgICAgIG4rKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbiA9PT0gMCA/IG51bGwgOiBBO1xuICAgICAgfVxuICAgIF07XG4gIH0pO1xuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJIFV0aWxpdGllcyAodjIuMS45KTogZ2V0LWNzcy1jdXN0b20tcHJvcGVydGllcy5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgY3VzdG9tIHByb3BlcnR5IG5hbWVcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuICB2YXIgZ2V0Q3NzQ3VzdG9tUHJvcGVydGllcyA9IGZ1bmN0aW9uIGdldENzc0N1c3RvbVByb3BlcnRpZXMoKSB7XG4gICAgdmFyIGNzc0N1c3RvbVByb3BlcnRpZXMgPSB7fTtcbiAgICB2YXIgc2hlZXRzID0gZG9jdW1lbnQuc3R5bGVTaGVldHM7XG4gICAgdmFyIGNzc1RleHQgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSBzaGVldHMubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICAgIHZhciBydWxlcyA9IHNoZWV0c1tpXS5jc3NSdWxlcztcblxuICAgICAgZm9yICh2YXIgaiA9IHJ1bGVzLmxlbmd0aCAtIDE7IGogPiAtMTsgai0tKSB7XG4gICAgICAgIGlmIChydWxlc1tqXS5zZWxlY3RvclRleHQgPT09ICcuaWUtY3VzdG9tLXByb3BlcnRpZXMnKSB7XG4gICAgICAgICAgY3NzVGV4dCA9IHJ1bGVzW2pdLmNzc1RleHQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNzc1RleHQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY3NzVGV4dCA9IGNzc1RleHQuc3Vic3RyaW5nKGNzc1RleHQubGFzdEluZGV4T2YoJ3snKSArIDEsIGNzc1RleHQubGFzdEluZGV4T2YoJ30nKSk7XG4gICAgY3NzVGV4dC5zcGxpdCgnOycpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICBpZiAocHJvcGVydHkpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBwcm9wZXJ0eS5zcGxpdCgnOiAnKVswXTtcbiAgICAgICAgdmFyIHZhbHVlID0gcHJvcGVydHkuc3BsaXQoJzogJylbMV07XG5cbiAgICAgICAgaWYgKG5hbWUgJiYgdmFsdWUpIHtcbiAgICAgICAgICBjc3NDdXN0b21Qcm9wZXJ0aWVzW1wiLS1cIiArIG5hbWUudHJpbSgpXSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjc3NDdXN0b21Qcm9wZXJ0aWVzO1xuICB9O1xuXG4gIHZhciBtaW5JRVZlcnNpb24gPSAxMDtcblxuICB2YXIgaXNJRTF4ID0gZnVuY3Rpb24gaXNJRTF4KCkge1xuICAgIHJldHVybiBCb29sZWFuKGRvY3VtZW50LmRvY3VtZW50TW9kZSkgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlID49IG1pbklFVmVyc2lvbjtcbiAgfTtcblxuICB2YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpIHtcbiAgICByZXR1cm4gcHJvcGVydHkubWF0Y2goL14tLS4qL2kpO1xuICB9O1xuXG4gIHZhciBnZXRTdHlsZSA9IGZ1bmN0aW9uIGdldFN0eWxlKHByb3BlcnR5LCBlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgPT09IHZvaWQgMCkge1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlO1xuXG4gICAgaWYgKGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpICYmIGlzSUUxeCgpKSB7XG4gICAgICB2YXIgY3NzQ3VzdG9tUHJvcGVydGllcyA9IGdldENzc0N1c3RvbVByb3BlcnRpZXMoKTtcbiAgICAgIHN0eWxlID0gY3NzQ3VzdG9tUHJvcGVydGllc1twcm9wZXJ0eV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkucmVwbGFjZSgvXlxccy8sICcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH07XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgKHYyLjEuOSk6IHNpZGViYXIuanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuICB2YXIgU2lkZWJhciA9IGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIENvbnN0YW50c1xyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cbiAgICB2YXIgTkFNRSA9ICdzaWRlYmFyJztcbiAgICB2YXIgVkVSU0lPTiA9ICcyLjEuOSc7XG4gICAgdmFyIERBVEFfS0VZID0gJ2NvcmV1aS5zaWRlYmFyJztcbiAgICB2YXIgRVZFTlRfS0VZID0gXCIuXCIgKyBEQVRBX0tFWTtcbiAgICB2YXIgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gICAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gICAgdmFyIERlZmF1bHQgPSB7XG4gICAgICB0cmFuc2l0aW9uOiA0MDBcbiAgICB9O1xuICAgIHZhciBDbGFzc05hbWUgPSB7XG4gICAgICBBQ1RJVkU6ICdhY3RpdmUnLFxuICAgICAgQlJBTkRfTUlOSU1JWkVEOiAnYnJhbmQtbWluaW1pemVkJyxcbiAgICAgIE5BVl9EUk9QRE9XTl9UT0dHTEU6ICduYXYtZHJvcGRvd24tdG9nZ2xlJyxcbiAgICAgIE9QRU46ICdvcGVuJyxcbiAgICAgIFNJREVCQVJfRklYRUQ6ICdzaWRlYmFyLWZpeGVkJyxcbiAgICAgIFNJREVCQVJfTUlOSU1JWkVEOiAnc2lkZWJhci1taW5pbWl6ZWQnLFxuICAgICAgU0lERUJBUl9PRkZfQ0FOVkFTOiAnc2lkZWJhci1vZmYtY2FudmFzJ1xuICAgIH07XG4gICAgdmFyIEV2ZW50ID0ge1xuICAgICAgQ0xJQ0s6ICdjbGljaycsXG4gICAgICBERVNUUk9ZOiAnZGVzdHJveScsXG4gICAgICBJTklUOiAnaW5pdCcsXG4gICAgICBMT0FEX0RBVEFfQVBJOiBcImxvYWRcIiArIEVWRU5UX0tFWSArIERBVEFfQVBJX0tFWSxcbiAgICAgIFRPR0dMRTogJ3RvZ2dsZScsXG4gICAgICBVUERBVEU6ICd1cGRhdGUnXG4gICAgfTtcbiAgICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgICBCT0RZOiAnYm9keScsXG4gICAgICBCUkFORF9NSU5JTUlaRVI6ICcuYnJhbmQtbWluaW1pemVyJyxcbiAgICAgIE5BVl9EUk9QRE9XTl9UT0dHTEU6ICcubmF2LWRyb3Bkb3duLXRvZ2dsZScsXG4gICAgICBOQVZfRFJPUERPV05fSVRFTVM6ICcubmF2LWRyb3Bkb3duLWl0ZW1zJyxcbiAgICAgIE5BVl9JVEVNOiAnLm5hdi1pdGVtJyxcbiAgICAgIE5BVl9MSU5LOiAnLm5hdi1saW5rJyxcbiAgICAgIE5BVl9MSU5LX1FVRVJJRUQ6ICcubmF2LWxpbmstcXVlcmllZCcsXG4gICAgICBOQVZJR0FUSU9OX0NPTlRBSU5FUjogJy5zaWRlYmFyLW5hdicsXG4gICAgICBOQVZJR0FUSU9OOiAnLnNpZGViYXItbmF2ID4gLm5hdicsXG4gICAgICBTSURFQkFSOiAnLnNpZGViYXInLFxuICAgICAgU0lERUJBUl9NSU5JTUlaRVI6ICcuc2lkZWJhci1taW5pbWl6ZXInLFxuICAgICAgU0lERUJBUl9UT0dHTEVSOiAnLnNpZGViYXItdG9nZ2xlcidcbiAgICB9O1xuICAgIHZhciBTaG93Q2xhc3NOYW1lcyA9IFsnc2lkZWJhci1zaG93JywgJ3NpZGViYXItc20tc2hvdycsICdzaWRlYmFyLW1kLXNob3cnLCAnc2lkZWJhci1sZy1zaG93JywgJ3NpZGViYXIteGwtc2hvdyddO1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuXG4gICAgdmFyIFNpZGViYXIgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBTaWRlYmFyKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubW9iaWxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHMgPSBudWxsO1xuICAgICAgICB0aGlzLnBlcmZlY3RTY3JvbGxiYXIoRXZlbnQuSU5JVCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlTGluaygpO1xuICAgICAgICB0aGlzLl9icmVha3BvaW50VGVzdCA9IHRoaXMuX2JyZWFrcG9pbnRUZXN0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2NsaWNrT3V0TGlzdGVuZXIgPSB0aGlzLl9jbGlja091dExpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICB0aGlzLl9hZGRNZWRpYVF1ZXJ5KCk7XG4gICAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgICB2YXIgX3Byb3RvID0gU2lkZWJhci5wcm90b3R5cGU7XG5cbiAgICAgIC8vIFB1YmxpY1xuICAgICAgX3Byb3RvLnBlcmZlY3RTY3JvbGxiYXIgPSBmdW5jdGlvbiBwZXJmZWN0U2Nyb2xsYmFyKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBQZXJmZWN0U2Nyb2xsYmFyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHZhciBjbGFzc0xpc3QgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcblxuICAgICAgICAgIGlmIChldmVudCA9PT0gRXZlbnQuSU5JVCAmJiAhY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5TSURFQkFSX01JTklNSVpFRCkpIHtcbiAgICAgICAgICAgIHRoaXMucHMgPSB0aGlzLm1ha2VTY3JvbGxiYXIoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZXZlbnQgPT09IEV2ZW50LkRFU1RST1kpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveVNjcm9sbGJhcigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChldmVudCA9PT0gRXZlbnQuVE9HR0xFKSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5TSURFQkFSX01JTklNSVpFRCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5kZXN0cm95U2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgICAgdGhpcy5wcyA9IHRoaXMubWFrZVNjcm9sbGJhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChldmVudCA9PT0gRXZlbnQuVVBEQVRFICYmICFjbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLlNJREVCQVJfTUlOSU1JWkVEKSkge1xuICAgICAgICAgICAgLy8gVG9EbzogQWRkIHNtb290aCB0cmFuc2l0aW9uXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXMuZGVzdHJveVNjcm9sbGJhcigpO1xuXG4gICAgICAgICAgICAgIF90aGlzLnBzID0gX3RoaXMubWFrZVNjcm9sbGJhcigpO1xuICAgICAgICAgICAgfSwgRGVmYXVsdC50cmFuc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5tYWtlU2Nyb2xsYmFyID0gZnVuY3Rpb24gbWFrZVNjcm9sbGJhcihjb250YWluZXIpIHtcbiAgICAgICAgaWYgKGNvbnRhaW5lciA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgY29udGFpbmVyID0gU2VsZWN0b3IuTkFWSUdBVElPTl9DT05UQUlORVI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lciksIHtcbiAgICAgICAgICBzdXBwcmVzc1Njcm9sbFg6IHRydWVcbiAgICAgICAgfSk7IC8vIFRvRG86IGZpbmQgcmVhbCBmaXggZm9yIHBzIHJ0bFxuXG4gICAgICAgIHBzLmlzUnRsID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBwcztcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5kZXN0cm95U2Nyb2xsYmFyID0gZnVuY3Rpb24gZGVzdHJveVNjcm9sbGJhcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHMpIHtcbiAgICAgICAgICB0aGlzLnBzLmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLnBzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnNldEFjdGl2ZUxpbmsgPSBmdW5jdGlvbiBzZXRBY3RpdmVMaW5rKCkge1xuICAgICAgICAkKFNlbGVjdG9yLk5BVklHQVRJT04pLmZpbmQoU2VsZWN0b3IuTkFWX0xJTkspLmVhY2goZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgbGluayA9IHZhbHVlO1xuICAgICAgICAgIHZhciBjVXJsO1xuXG4gICAgICAgICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFNlbGVjdG9yLk5BVl9MSU5LX1FVRVJJRUQpKSB7XG4gICAgICAgICAgICBjVXJsID0gU3RyaW5nKHdpbmRvdy5sb2NhdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNVcmwgPSBTdHJpbmcod2luZG93LmxvY2F0aW9uKS5zcGxpdCgnPycpWzBdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjVXJsLnN1YnN0cihjVXJsLmxlbmd0aCAtIDEpID09PSAnIycpIHtcbiAgICAgICAgICAgIGNVcmwgPSBjVXJsLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoJCgkKGxpbmspKVswXS5ocmVmID09PSBjVXJsKSB7XG4gICAgICAgICAgICAkKGxpbmspLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpLnBhcmVudHMoU2VsZWN0b3IuTkFWX0RST1BET1dOX0lURU1TKS5hZGQobGluaykuZWFjaChmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICBsaW5rID0gdmFsdWU7XG4gICAgICAgICAgICAgICQobGluaykucGFyZW50KCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gUHJpdmF0ZVxuICAgICAgO1xuXG4gICAgICBfcHJvdG8uX2FkZE1lZGlhUXVlcnkgPSBmdW5jdGlvbiBfYWRkTWVkaWFRdWVyeSgpIHtcbiAgICAgICAgdmFyIHNtID0gZ2V0U3R5bGUoJy0tYnJlYWtwb2ludC1zbScpO1xuXG4gICAgICAgIGlmICghc20pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc21WYWwgPSBwYXJzZUludChzbSwgMTApIC0gMTtcbiAgICAgICAgdmFyIG1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiBcIiArIHNtVmFsICsgXCJweClcIik7XG5cbiAgICAgICAgdGhpcy5fYnJlYWtwb2ludFRlc3QobWVkaWFRdWVyeUxpc3QpO1xuXG4gICAgICAgIG1lZGlhUXVlcnlMaXN0LmFkZExpc3RlbmVyKHRoaXMuX2JyZWFrcG9pbnRUZXN0KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fYnJlYWtwb2ludFRlc3QgPSBmdW5jdGlvbiBfYnJlYWtwb2ludFRlc3QoZSkge1xuICAgICAgICB0aGlzLm1vYmlsZSA9IEJvb2xlYW4oZS5tYXRjaGVzKTtcblxuICAgICAgICB0aGlzLl90b2dnbGVDbGlja091dCgpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9jbGlja091dExpc3RlbmVyID0gZnVuY3Rpb24gX2NsaWNrT3V0TGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAvLyBvciB1c2U6IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNlbGVjdG9yLlNJREVCQVIpID09PSBudWxsXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgIHRoaXMuX3JlbW92ZUNsaWNrT3V0KCk7XG5cbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItc2hvdycpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX2FkZENsaWNrT3V0ID0gZnVuY3Rpb24gX2FkZENsaWNrT3V0KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKEV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja091dExpc3RlbmVyLCB0cnVlKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fcmVtb3ZlQ2xpY2tPdXQgPSBmdW5jdGlvbiBfcmVtb3ZlQ2xpY2tPdXQoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrT3V0TGlzdGVuZXIsIHRydWUpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl90b2dnbGVDbGlja091dCA9IGZ1bmN0aW9uIF90b2dnbGVDbGlja091dCgpIHtcbiAgICAgICAgaWYgKHRoaXMubW9iaWxlICYmIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLXNob3cnKSkge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYXNpZGUtbWVudS1zaG93Jyk7XG5cbiAgICAgICAgICB0aGlzLl9hZGRDbGlja091dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlbW92ZUNsaWNrT3V0KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5CUkFORF9NSU5JTUlaRVIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgJChTZWxlY3Rvci5CT0RZKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuQlJBTkRfTUlOSU1JWkVEKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5OQVZfRFJPUERPV05fVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHZhciBkcm9wZG93biA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAkKGRyb3Bkb3duKS5wYXJlbnQoKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuT1BFTik7XG5cbiAgICAgICAgICBfdGhpczIucGVyZmVjdFNjcm9sbGJhcihFdmVudC5VUERBVEUpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLlNJREVCQVJfTUlOSU1JWkVSLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICQoU2VsZWN0b3IuQk9EWSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlNJREVCQVJfTUlOSU1JWkVEKTtcblxuICAgICAgICAgIF90aGlzMi5wZXJmZWN0U2Nyb2xsYmFyKEV2ZW50LlRPR0dMRSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDSywgU2VsZWN0b3IuU0lERUJBUl9UT0dHTEVSLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHZhciB0b2dnbGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQgPyBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudG9nZ2xlIDogJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCd0b2dnbGUnKTtcbiAgICAgICAgICB0b2dnbGVDbGFzc2VzKHRvZ2dsZSwgU2hvd0NsYXNzTmFtZXMpO1xuXG4gICAgICAgICAgX3RoaXMyLl90b2dnbGVDbGlja091dCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChTZWxlY3Rvci5OQVZJR0FUSU9OICsgXCIgPiBcIiArIFNlbGVjdG9yLk5BVl9JVEVNICsgXCIgXCIgKyBTZWxlY3Rvci5OQVZfTElOSyArIFwiOm5vdChcIiArIFNlbGVjdG9yLk5BVl9EUk9QRE9XTl9UT0dHTEUgKyBcIilcIikub24oRXZlbnQuQ0xJQ0ssIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX3JlbW92ZUNsaWNrT3V0KCk7XG5cbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItc2hvdycpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gU3RhdGljXG4gICAgICA7XG5cbiAgICAgIFNpZGViYXIuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciAkZWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyIGRhdGEgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IG5ldyBTaWRlYmFyKHRoaXMpO1xuICAgICAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhTaWRlYmFyLCBudWxsLCBbe1xuICAgICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gU2lkZWJhcjtcbiAgICB9KCk7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuXG5cbiAgICAkKHdpbmRvdykub24oRXZlbnQuTE9BRF9EQVRBX0FQSSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNpZGViYXIgPSAkKFNlbGVjdG9yLlNJREVCQVIpO1xuXG4gICAgICBTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2UuY2FsbChzaWRlYmFyKTtcbiAgICB9KTtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogalF1ZXJ5XHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuXG4gICAgJC5mbltOQU1FXSA9IFNpZGViYXIuX2pRdWVyeUludGVyZmFjZTtcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gU2lkZWJhcjtcblxuICAgICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgICByZXR1cm4gU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2lkZWJhcjtcbiAgfSgkKTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSBVdGlsaXRpZXMgKHYyLjEuOSk6IGhleC10by1yZ2IuanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1tYWdpYy1udW1iZXJzICovXG4gIHZhciBoZXhUb1JnYiA9IGZ1bmN0aW9uIGhleFRvUmdiKGNvbG9yKSB7XG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSGV4IGNvbG9yIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdmFyIGhleCA9IGNvbG9yLm1hdGNoKC9eIyg/OlswLTlhLWZdezN9KXsxLDJ9JC9pKTtcblxuICAgIGlmICghaGV4KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY29sb3IgKyBcIiBpcyBub3QgYSB2YWxpZCBoZXggY29sb3JcIik7XG4gICAgfVxuXG4gICAgdmFyIHI7XG4gICAgdmFyIGc7XG4gICAgdmFyIGI7XG5cbiAgICBpZiAoY29sb3IubGVuZ3RoID09PSA3KSB7XG4gICAgICByID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsIDMpLCAxNik7XG4gICAgICBnID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDMsIDUpLCAxNik7XG4gICAgICBiID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDUsIDcpLCAxNik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMiksIDE2KTtcbiAgICAgIGcgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMiwgMyksIDE2KTtcbiAgICAgIGIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMywgNSksIDE2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIpXCI7XG4gIH07XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgVXRpbGl0aWVzICh2Mi4xLjkpOiBoZXgtdG8tcmdiYS5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLW1hZ2ljLW51bWJlcnMgKi9cbiAgdmFyIGhleFRvUmdiYSA9IGZ1bmN0aW9uIGhleFRvUmdiYShjb2xvciwgb3BhY2l0eSkge1xuICAgIGlmIChvcGFjaXR5ID09PSB2b2lkIDApIHtcbiAgICAgIG9wYWNpdHkgPSAxMDA7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSGV4IGNvbG9yIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdmFyIGhleCA9IGNvbG9yLm1hdGNoKC9eIyg/OlswLTlhLWZdezN9KXsxLDJ9JC9pKTtcblxuICAgIGlmICghaGV4KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY29sb3IgKyBcIiBpcyBub3QgYSB2YWxpZCBoZXggY29sb3JcIik7XG4gICAgfVxuXG4gICAgdmFyIHI7XG4gICAgdmFyIGc7XG4gICAgdmFyIGI7XG5cbiAgICBpZiAoY29sb3IubGVuZ3RoID09PSA3KSB7XG4gICAgICByID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsIDMpLCAxNik7XG4gICAgICBnID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDMsIDUpLCAxNik7XG4gICAgICBiID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDUsIDcpLCAxNik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMiksIDE2KTtcbiAgICAgIGcgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMiwgMyksIDE2KTtcbiAgICAgIGIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMywgNSksIDE2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIsIFwiICsgb3BhY2l0eSAvIDEwMCArIFwiKVwiO1xuICB9O1xuXG4gIC8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbiAgaWYgKF9kZXNjcmlwdG9ycyAmJiAvLi9nLmZsYWdzICE9ICdnJykgX29iamVjdERwLmYoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IF9mbGFnc1xuICB9KTtcblxuICB2YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbiAgdmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG4gIHZhciBkZWZpbmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICBfcmVkZWZpbmUoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG4gIH07XG5cbiAgLy8gMjEuMi41LjE0IFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcoKVxuICBpZiAoX2ZhaWxzKGZ1bmN0aW9uICgpIHsgcmV0dXJuICR0b1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KSkge1xuICAgIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHZhciBSID0gX2FuT2JqZWN0KHRoaXMpO1xuICAgICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICAgJ2ZsYWdzJyBpbiBSID8gUi5mbGFncyA6ICFfZGVzY3JpcHRvcnMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/IF9mbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgLy8gRkY0NC0gUmVnRXhwI3RvU3RyaW5nIGhhcyBhIHdyb25nIG5hbWVcbiAgfSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gJHRvU3RyaW5nLmNhbGwodGhpcyk7XG4gICAgfSk7XG4gIH1cblxuICAvLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcblxuICB2YXIgdGVzdCA9IHt9O1xuICB0ZXN0W193a3MoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuICBpZiAodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJykge1xuICAgIF9yZWRlZmluZShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiAnW29iamVjdCAnICsgX2NsYXNzb2YodGhpcykgKyAnXSc7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSAodjIuMS45KTogcmdiLXRvLWhleC5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLW1hZ2ljLW51bWJlcnMgKi9cbiAgdmFyIHJnYlRvSGV4ID0gZnVuY3Rpb24gcmdiVG9IZXgoY29sb3IpIHtcbiAgICBpZiAodHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIZXggY29sb3IgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG5cbiAgICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgIHJldHVybiAnIzAwMDAwMDAwJztcbiAgICB9XG5cbiAgICB2YXIgcmdiID0gY29sb3IubWF0Y2goL15yZ2JhP1tcXHMrXT9cXChbXFxzK10/KFxcZCspW1xccytdPyxbXFxzK10/KFxcZCspW1xccytdPyxbXFxzK10/KFxcZCspW1xccytdPy9pKTtcblxuICAgIGlmICghcmdiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY29sb3IgKyBcIiBpcyBub3QgYSB2YWxpZCByZ2IgY29sb3JcIik7XG4gICAgfVxuXG4gICAgdmFyIHIgPSBcIjBcIiArIHBhcnNlSW50KHJnYlsxXSwgMTApLnRvU3RyaW5nKDE2KTtcbiAgICB2YXIgZyA9IFwiMFwiICsgcGFyc2VJbnQocmdiWzJdLCAxMCkudG9TdHJpbmcoMTYpO1xuICAgIHZhciBiID0gXCIwXCIgKyBwYXJzZUludChyZ2JbM10sIDEwKS50b1N0cmluZygxNik7XG4gICAgcmV0dXJuIFwiI1wiICsgci5zbGljZSgtMikgKyBnLnNsaWNlKC0yKSArIGIuc2xpY2UoLTIpO1xuICB9O1xuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJICh2Mi4xLjkpOiBpbmRleC5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIChmdW5jdGlvbiAoJCkge1xuICAgIGlmICh0eXBlb2YgJCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvcmVVSVxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnkuIGpRdWVyeSBtdXN0IGJlIGluY2x1ZGVkIGJlZm9yZSBDb3JlVUlcXCdzIEphdmFTY3JpcHQuJyk7XG4gICAgfVxuXG4gICAgdmFyIHZlcnNpb24gPSAkLmZuLmpxdWVyeS5zcGxpdCgnICcpWzBdLnNwbGl0KCcuJyk7XG4gICAgdmFyIG1pbk1ham9yID0gMTtcbiAgICB2YXIgbHRNYWpvciA9IDI7XG4gICAgdmFyIG1pbk1pbm9yID0gOTtcbiAgICB2YXIgbWluUGF0Y2ggPSAxO1xuICAgIHZhciBtYXhNYWpvciA9IDQ7XG5cbiAgICBpZiAodmVyc2lvblswXSA8IGx0TWFqb3IgJiYgdmVyc2lvblsxXSA8IG1pbk1pbm9yIHx8IHZlcnNpb25bMF0gPT09IG1pbk1ham9yICYmIHZlcnNpb25bMV0gPT09IG1pbk1pbm9yICYmIHZlcnNpb25bMl0gPCBtaW5QYXRjaCB8fCB2ZXJzaW9uWzBdID49IG1heE1ham9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvcmVVSVxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBhdCBsZWFzdCBqUXVlcnkgdjEuOS4xIGJ1dCBsZXNzIHRoYW4gdjQuMC4wJyk7XG4gICAgfVxuICB9KSgkKTtcbiAgd2luZG93LmdldFN0eWxlID0gZ2V0U3R5bGU7XG4gIHdpbmRvdy5oZXhUb1JnYiA9IGhleFRvUmdiO1xuICB3aW5kb3cuaGV4VG9SZ2JhID0gaGV4VG9SZ2JhO1xuICB3aW5kb3cucmdiVG9IZXggPSByZ2JUb0hleDtcblxuICBleHBvcnRzLkFqYXhMb2FkID0gQWpheExvYWQ7XG4gIGV4cG9ydHMuQXNpZGVNZW51ID0gQXNpZGVNZW51O1xuICBleHBvcnRzLlNpZGViYXIgPSBTaWRlYmFyO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmV1aS5qcy5tYXBcbiIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBBamF4TW9uaXRvciwgQmFyLCBEb2N1bWVudE1vbml0b3IsIEVsZW1lbnRNb25pdG9yLCBFbGVtZW50VHJhY2tlciwgRXZlbnRMYWdNb25pdG9yLCBFdmVudGVkLCBFdmVudHMsIE5vVGFyZ2V0RXJyb3IsIFBhY2UsIFJlcXVlc3RJbnRlcmNlcHQsIFNPVVJDRV9LRVlTLCBTY2FsZXIsIFNvY2tldFJlcXVlc3RUcmFja2VyLCBYSFJSZXF1ZXN0VHJhY2tlciwgYW5pbWF0aW9uLCBhdmdBbXBsaXR1ZGUsIGJhciwgY2FuY2VsQW5pbWF0aW9uLCBjYW5jZWxBbmltYXRpb25GcmFtZSwgZGVmYXVsdE9wdGlvbnMsIGV4dGVuZCwgZXh0ZW5kTmF0aXZlLCBnZXRGcm9tRE9NLCBnZXRJbnRlcmNlcHQsIGhhbmRsZVB1c2hTdGF0ZSwgaWdub3JlU3RhY2ssIGluaXQsIG5vdywgb3B0aW9ucywgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLCByZXN1bHQsIHJ1bkFuaW1hdGlvbiwgc2NhbGVycywgc2hvdWxkSWdub3JlVVJMLCBzaG91bGRUcmFjaywgc291cmNlLCBzb3VyY2VzLCB1bmlTY2FsZXIsIF9XZWJTb2NrZXQsIF9YRG9tYWluUmVxdWVzdCwgX1hNTEh0dHBSZXF1ZXN0LCBfaSwgX2ludGVyY2VwdCwgX2xlbiwgX3B1c2hTdGF0ZSwgX3JlZiwgX3JlZjEsIF9yZXBsYWNlU3RhdGUsXG4gICAgX19zbGljZSA9IFtdLnNsaWNlLFxuICAgIF9faGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5LFxuICAgIF9fZXh0ZW5kcyA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoX19oYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICAgIF9faW5kZXhPZiA9IFtdLmluZGV4T2YgfHwgZnVuY3Rpb24oaXRlbSkgeyBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7IGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkgcmV0dXJuIGk7IH0gcmV0dXJuIC0xOyB9O1xuXG4gIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGNhdGNodXBUaW1lOiAxMDAsXG4gICAgaW5pdGlhbFJhdGU6IC4wMyxcbiAgICBtaW5UaW1lOiAyNTAsXG4gICAgZ2hvc3RUaW1lOiAxMDAsXG4gICAgbWF4UHJvZ3Jlc3NQZXJGcmFtZTogMjAsXG4gICAgZWFzZUZhY3RvcjogMS4yNSxcbiAgICBzdGFydE9uUGFnZUxvYWQ6IHRydWUsXG4gICAgcmVzdGFydE9uUHVzaFN0YXRlOiB0cnVlLFxuICAgIHJlc3RhcnRPblJlcXVlc3RBZnRlcjogNTAwLFxuICAgIHRhcmdldDogJ2JvZHknLFxuICAgIGVsZW1lbnRzOiB7XG4gICAgICBjaGVja0ludGVydmFsOiAxMDAsXG4gICAgICBzZWxlY3RvcnM6IFsnYm9keSddXG4gICAgfSxcbiAgICBldmVudExhZzoge1xuICAgICAgbWluU2FtcGxlczogMTAsXG4gICAgICBzYW1wbGVDb3VudDogMyxcbiAgICAgIGxhZ1RocmVzaG9sZDogM1xuICAgIH0sXG4gICAgYWpheDoge1xuICAgICAgdHJhY2tNZXRob2RzOiBbJ0dFVCddLFxuICAgICAgdHJhY2tXZWJTb2NrZXRzOiB0cnVlLFxuICAgICAgaWdub3JlVVJMczogW11cbiAgICB9XG4gIH07XG5cbiAgbm93ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9yZWY7XG4gICAgcmV0dXJuIChfcmVmID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsID8gdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiID8gcGVyZm9ybWFuY2Uubm93KCkgOiB2b2lkIDAgOiB2b2lkIDApICE9IG51bGwgPyBfcmVmIDogKyhuZXcgRGF0ZSk7XG4gIH07XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZTtcblxuICBpZiAocmVxdWVzdEFuaW1hdGlvbkZyYW1lID09IG51bGwpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihmbikge1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDUwKTtcbiAgICB9O1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH07XG4gIH1cblxuICBydW5BbmltYXRpb24gPSBmdW5jdGlvbihmbikge1xuICAgIHZhciBsYXN0LCB0aWNrO1xuICAgIGxhc3QgPSBub3coKTtcbiAgICB0aWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZGlmZjtcbiAgICAgIGRpZmYgPSBub3coKSAtIGxhc3Q7XG4gICAgICBpZiAoZGlmZiA+PSAzMykge1xuICAgICAgICBsYXN0ID0gbm93KCk7XG4gICAgICAgIHJldHVybiBmbihkaWZmLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KHRpY2ssIDMzIC0gZGlmZik7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gdGljaygpO1xuICB9O1xuXG4gIHJlc3VsdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzLCBrZXksIG9iajtcbiAgICBvYmogPSBhcmd1bWVudHNbMF0sIGtleSA9IGFyZ3VtZW50c1sxXSwgYXJncyA9IDMgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogW107XG4gICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG9ialtrZXldLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvYmpba2V5XTtcbiAgICB9XG4gIH07XG5cbiAgZXh0ZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleSwgb3V0LCBzb3VyY2UsIHNvdXJjZXMsIHZhbCwgX2ksIF9sZW47XG4gICAgb3V0ID0gYXJndW1lbnRzWzBdLCBzb3VyY2VzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gX19zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IHNvdXJjZXMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgIHNvdXJjZSA9IHNvdXJjZXNbX2ldO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgdmFsID0gc291cmNlW2tleV07XG4gICAgICAgICAgaWYgKChvdXRba2V5XSAhPSBudWxsKSAmJiB0eXBlb2Ygb3V0W2tleV0gPT09ICdvYmplY3QnICYmICh2YWwgIT0gbnVsbCkgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGV4dGVuZChvdXRba2V5XSwgdmFsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0W2tleV0gPSB2YWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH07XG5cbiAgYXZnQW1wbGl0dWRlID0gZnVuY3Rpb24oYXJyKSB7XG4gICAgdmFyIGNvdW50LCBzdW0sIHYsIF9pLCBfbGVuO1xuICAgIHN1bSA9IGNvdW50ID0gMDtcbiAgICBmb3IgKF9pID0gMCwgX2xlbiA9IGFyci5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgdiA9IGFycltfaV07XG4gICAgICBzdW0gKz0gTWF0aC5hYnModik7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gc3VtIC8gY291bnQ7XG4gIH07XG5cbiAgZ2V0RnJvbURPTSA9IGZ1bmN0aW9uKGtleSwganNvbikge1xuICAgIHZhciBkYXRhLCBlLCBlbDtcbiAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgIGtleSA9ICdvcHRpb25zJztcbiAgICB9XG4gICAgaWYgKGpzb24gPT0gbnVsbCkge1xuICAgICAganNvbiA9IHRydWU7XG4gICAgfVxuICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXBhY2UtXCIgKyBrZXkgKyBcIl1cIik7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkYXRhID0gZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYWNlLVwiICsga2V5KTtcbiAgICBpZiAoIWpzb24pIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICBlID0gX2Vycm9yO1xuICAgICAgcmV0dXJuIHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUgIT09IG51bGwgPyBjb25zb2xlLmVycm9yKFwiRXJyb3IgcGFyc2luZyBpbmxpbmUgcGFjZSBvcHRpb25zXCIsIGUpIDogdm9pZCAwO1xuICAgIH1cbiAgfTtcblxuICBFdmVudGVkID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50ZWQoKSB7fVxuXG4gICAgRXZlbnRlZC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihldmVudCwgaGFuZGxlciwgY3R4LCBvbmNlKSB7XG4gICAgICB2YXIgX2Jhc2U7XG4gICAgICBpZiAob25jZSA9PSBudWxsKSB7XG4gICAgICAgIG9uY2UgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmJpbmRpbmdzID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IHt9O1xuICAgICAgfVxuICAgICAgaWYgKChfYmFzZSA9IHRoaXMuYmluZGluZ3MpW2V2ZW50XSA9PSBudWxsKSB7XG4gICAgICAgIF9iYXNlW2V2ZW50XSA9IFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYmluZGluZ3NbZXZlbnRdLnB1c2goe1xuICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICBjdHg6IGN0eCxcbiAgICAgICAgb25jZTogb25jZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIEV2ZW50ZWQucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlciwgY3R4KSB7XG4gICAgICByZXR1cm4gdGhpcy5vbihldmVudCwgaGFuZGxlciwgY3R4LCB0cnVlKTtcbiAgICB9O1xuXG4gICAgRXZlbnRlZC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgIHZhciBpLCBfcmVmLCBfcmVzdWx0cztcbiAgICAgIGlmICgoKF9yZWYgPSB0aGlzLmJpbmRpbmdzKSAhPSBudWxsID8gX3JlZltldmVudF0gOiB2b2lkIDApID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGhhbmRsZXIgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZGVsZXRlIHRoaXMuYmluZGluZ3NbZXZlbnRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSA9IDA7XG4gICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgIHdoaWxlIChpIDwgdGhpcy5iaW5kaW5nc1tldmVudF0ubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYmluZGluZ3NbZXZlbnRdW2ldLmhhbmRsZXIgPT09IGhhbmRsZXIpIHtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2godGhpcy5iaW5kaW5nc1tldmVudF0uc3BsaWNlKGksIDEpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChpKyspO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEV2ZW50ZWQucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzLCBjdHgsIGV2ZW50LCBoYW5kbGVyLCBpLCBvbmNlLCBfcmVmLCBfcmVmMSwgX3Jlc3VsdHM7XG4gICAgICBldmVudCA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IF9fc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgICBpZiAoKF9yZWYgPSB0aGlzLmJpbmRpbmdzKSAhPSBudWxsID8gX3JlZltldmVudF0gOiB2b2lkIDApIHtcbiAgICAgICAgaSA9IDA7XG4gICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgIHdoaWxlIChpIDwgdGhpcy5iaW5kaW5nc1tldmVudF0ubGVuZ3RoKSB7XG4gICAgICAgICAgX3JlZjEgPSB0aGlzLmJpbmRpbmdzW2V2ZW50XVtpXSwgaGFuZGxlciA9IF9yZWYxLmhhbmRsZXIsIGN0eCA9IF9yZWYxLmN0eCwgb25jZSA9IF9yZWYxLm9uY2U7XG4gICAgICAgICAgaGFuZGxlci5hcHBseShjdHggIT0gbnVsbCA/IGN0eCA6IHRoaXMsIGFyZ3MpO1xuICAgICAgICAgIGlmIChvbmNlKSB7XG4gICAgICAgICAgICBfcmVzdWx0cy5wdXNoKHRoaXMuYmluZGluZ3NbZXZlbnRdLnNwbGljZShpLCAxKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF9yZXN1bHRzLnB1c2goaSsrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gRXZlbnRlZDtcblxuICB9KSgpO1xuXG4gIFBhY2UgPSB3aW5kb3cuUGFjZSB8fCB7fTtcblxuICB3aW5kb3cuUGFjZSA9IFBhY2U7XG5cbiAgZXh0ZW5kKFBhY2UsIEV2ZW50ZWQucHJvdG90eXBlKTtcblxuICBvcHRpb25zID0gUGFjZS5vcHRpb25zID0gZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgd2luZG93LnBhY2VPcHRpb25zLCBnZXRGcm9tRE9NKCkpO1xuXG4gIF9yZWYgPSBbJ2FqYXgnLCAnZG9jdW1lbnQnLCAnZXZlbnRMYWcnLCAnZWxlbWVudHMnXTtcbiAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgc291cmNlID0gX3JlZltfaV07XG4gICAgaWYgKG9wdGlvbnNbc291cmNlXSA9PT0gdHJ1ZSkge1xuICAgICAgb3B0aW9uc1tzb3VyY2VdID0gZGVmYXVsdE9wdGlvbnNbc291cmNlXTtcbiAgICB9XG4gIH1cblxuICBOb1RhcmdldEVycm9yID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb1RhcmdldEVycm9yLCBfc3VwZXIpO1xuXG4gICAgZnVuY3Rpb24gTm9UYXJnZXRFcnJvcigpIHtcbiAgICAgIF9yZWYxID0gTm9UYXJnZXRFcnJvci5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHJldHVybiBfcmVmMTtcbiAgICB9XG5cbiAgICByZXR1cm4gTm9UYXJnZXRFcnJvcjtcblxuICB9KShFcnJvcik7XG5cbiAgQmFyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEJhcigpIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIH1cblxuICAgIEJhci5wcm90b3R5cGUuZ2V0RWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRhcmdldEVsZW1lbnQ7XG4gICAgICBpZiAodGhpcy5lbCA9PSBudWxsKSB7XG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMudGFyZ2V0KTtcbiAgICAgICAgaWYgKCF0YXJnZXRFbGVtZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IE5vVGFyZ2V0RXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTmFtZSA9IFwicGFjZSBwYWNlLWFjdGl2ZVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoL3BhY2UtZG9uZS9nLCAnJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lICs9ICcgcGFjZS1ydW5uaW5nJztcbiAgICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cInBhY2UtcHJvZ3Jlc3NcIj5cXG4gIDxkaXYgY2xhc3M9XCJwYWNlLXByb2dyZXNzLWlubmVyXCI+PC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cInBhY2UtYWN0aXZpdHlcIj48L2Rpdj4nO1xuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudC5maXJzdENoaWxkICE9IG51bGwpIHtcbiAgICAgICAgICB0YXJnZXRFbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLmVsLCB0YXJnZXRFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH07XG5cbiAgICBCYXIucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsO1xuICAgICAgZWwgPSB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLWFjdGl2ZScsICcnKTtcbiAgICAgIGVsLmNsYXNzTmFtZSArPSAnIHBhY2UtaW5hY3RpdmUnO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKCdwYWNlLXJ1bm5pbmcnLCAnJyk7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgKz0gJyBwYWNlLWRvbmUnO1xuICAgIH07XG5cbiAgICBCYXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHByb2cpIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9nO1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKCk7XG4gICAgfTtcblxuICAgIEJhci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmdldEVsZW1lbnQoKSk7XG4gICAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgICAgTm9UYXJnZXRFcnJvciA9IF9lcnJvcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVsID0gdm9pZCAwO1xuICAgIH07XG5cbiAgICBCYXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsLCBrZXksIHByb2dyZXNzU3RyLCB0cmFuc2Zvcm0sIF9qLCBfbGVuMSwgX3JlZjI7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLnRhcmdldCkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBlbCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgdHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIiArIHRoaXMucHJvZ3Jlc3MgKyBcIiUsIDAsIDApXCI7XG4gICAgICBfcmVmMiA9IFsnd2Via2l0VHJhbnNmb3JtJywgJ21zVHJhbnNmb3JtJywgJ3RyYW5zZm9ybSddO1xuICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgIGtleSA9IF9yZWYyW19qXTtcbiAgICAgICAgZWwuY2hpbGRyZW5bMF0uc3R5bGVba2V5XSA9IHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5sYXN0UmVuZGVyZWRQcm9ncmVzcyB8fCB0aGlzLmxhc3RSZW5kZXJlZFByb2dyZXNzIHwgMCAhPT0gdGhpcy5wcm9ncmVzcyB8IDApIHtcbiAgICAgICAgZWwuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCdkYXRhLXByb2dyZXNzLXRleHQnLCBcIlwiICsgKHRoaXMucHJvZ3Jlc3MgfCAwKSArIFwiJVwiKTtcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gMTAwKSB7XG4gICAgICAgICAgcHJvZ3Jlc3NTdHIgPSAnOTknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2dyZXNzU3RyID0gdGhpcy5wcm9ncmVzcyA8IDEwID8gXCIwXCIgOiBcIlwiO1xuICAgICAgICAgIHByb2dyZXNzU3RyICs9IHRoaXMucHJvZ3Jlc3MgfCAwO1xuICAgICAgICB9XG4gICAgICAgIGVsLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9ncmVzcycsIFwiXCIgKyBwcm9ncmVzc1N0cik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5sYXN0UmVuZGVyZWRQcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3M7XG4gICAgfTtcblxuICAgIEJhci5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3MgPj0gMTAwO1xuICAgIH07XG5cbiAgICByZXR1cm4gQmFyO1xuXG4gIH0pKCk7XG5cbiAgRXZlbnRzID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50cygpIHtcbiAgICAgIHRoaXMuYmluZGluZ3MgPSB7fTtcbiAgICB9XG5cbiAgICBFdmVudHMucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihuYW1lLCB2YWwpIHtcbiAgICAgIHZhciBiaW5kaW5nLCBfaiwgX2xlbjEsIF9yZWYyLCBfcmVzdWx0cztcbiAgICAgIGlmICh0aGlzLmJpbmRpbmdzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgX3JlZjIgPSB0aGlzLmJpbmRpbmdzW25hbWVdO1xuICAgICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgICAgICBiaW5kaW5nID0gX3JlZjJbX2pdO1xuICAgICAgICAgIF9yZXN1bHRzLnB1c2goYmluZGluZy5jYWxsKHRoaXMsIHZhbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRXZlbnRzLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgICB2YXIgX2Jhc2U7XG4gICAgICBpZiAoKF9iYXNlID0gdGhpcy5iaW5kaW5ncylbbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBfYmFzZVtuYW1lXSA9IFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYmluZGluZ3NbbmFtZV0ucHVzaChmbik7XG4gICAgfTtcblxuICAgIHJldHVybiBFdmVudHM7XG5cbiAgfSkoKTtcblxuICBfWE1MSHR0cFJlcXVlc3QgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3Q7XG5cbiAgX1hEb21haW5SZXF1ZXN0ID0gd2luZG93LlhEb21haW5SZXF1ZXN0O1xuXG4gIF9XZWJTb2NrZXQgPSB3aW5kb3cuV2ViU29ja2V0O1xuXG4gIGV4dGVuZE5hdGl2ZSA9IGZ1bmN0aW9uKHRvLCBmcm9tKSB7XG4gICAgdmFyIGUsIGtleSwgX3Jlc3VsdHM7XG4gICAgX3Jlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGtleSBpbiBmcm9tLnByb3RvdHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCh0b1trZXldID09IG51bGwpICYmIHR5cGVvZiBmcm9tW2tleV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaChPYmplY3QuZGVmaW5lUHJvcGVydHkodG8sIGtleSwge1xuICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmcm9tLnByb3RvdHlwZVtrZXldO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3Jlc3VsdHMucHVzaCh0b1trZXldID0gZnJvbS5wcm90b3R5cGVba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9yZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICAgIGUgPSBfZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfcmVzdWx0cztcbiAgfTtcblxuICBpZ25vcmVTdGFjayA9IFtdO1xuXG4gIFBhY2UuaWdub3JlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MsIGZuLCByZXQ7XG4gICAgZm4gPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgIGlnbm9yZVN0YWNrLnVuc2hpZnQoJ2lnbm9yZScpO1xuICAgIHJldCA9IGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIGlnbm9yZVN0YWNrLnNoaWZ0KCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfTtcblxuICBQYWNlLnRyYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MsIGZuLCByZXQ7XG4gICAgZm4gPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBfX3NsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgIGlnbm9yZVN0YWNrLnVuc2hpZnQoJ3RyYWNrJyk7XG4gICAgcmV0ID0gZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgaWdub3JlU3RhY2suc2hpZnQoKTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xuXG4gIHNob3VsZFRyYWNrID0gZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgdmFyIF9yZWYyO1xuICAgIGlmIChtZXRob2QgPT0gbnVsbCkge1xuICAgICAgbWV0aG9kID0gJ0dFVCc7XG4gICAgfVxuICAgIGlmIChpZ25vcmVTdGFja1swXSA9PT0gJ3RyYWNrJykge1xuICAgICAgcmV0dXJuICdmb3JjZSc7XG4gICAgfVxuICAgIGlmICghaWdub3JlU3RhY2subGVuZ3RoICYmIG9wdGlvbnMuYWpheCkge1xuICAgICAgaWYgKG1ldGhvZCA9PT0gJ3NvY2tldCcgJiYgb3B0aW9ucy5hamF4LnRyYWNrV2ViU29ja2V0cykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoX3JlZjIgPSBtZXRob2QudG9VcHBlckNhc2UoKSwgX19pbmRleE9mLmNhbGwob3B0aW9ucy5hamF4LnRyYWNrTWV0aG9kcywgX3JlZjIpID49IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBSZXF1ZXN0SW50ZXJjZXB0ID0gKGZ1bmN0aW9uKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhSZXF1ZXN0SW50ZXJjZXB0LCBfc3VwZXIpO1xuXG4gICAgZnVuY3Rpb24gUmVxdWVzdEludGVyY2VwdCgpIHtcbiAgICAgIHZhciBtb25pdG9yWEhSLFxuICAgICAgICBfdGhpcyA9IHRoaXM7XG4gICAgICBSZXF1ZXN0SW50ZXJjZXB0Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgbW9uaXRvclhIUiA9IGZ1bmN0aW9uKHJlcSkge1xuICAgICAgICB2YXIgX29wZW47XG4gICAgICAgIF9vcGVuID0gcmVxLm9wZW47XG4gICAgICAgIHJldHVybiByZXEub3BlbiA9IGZ1bmN0aW9uKHR5cGUsIHVybCwgYXN5bmMpIHtcbiAgICAgICAgICBpZiAoc2hvdWxkVHJhY2sodHlwZSkpIHtcbiAgICAgICAgICAgIF90aGlzLnRyaWdnZXIoJ3JlcXVlc3QnLCB7XG4gICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICByZXF1ZXN0OiByZXFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX29wZW4uYXBwbHkocmVxLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5YTUxIdHRwUmVxdWVzdCA9IGZ1bmN0aW9uKGZsYWdzKSB7XG4gICAgICAgIHZhciByZXE7XG4gICAgICAgIHJlcSA9IG5ldyBfWE1MSHR0cFJlcXVlc3QoZmxhZ3MpO1xuICAgICAgICBtb25pdG9yWEhSKHJlcSk7XG4gICAgICAgIHJldHVybiByZXE7XG4gICAgICB9O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZXh0ZW5kTmF0aXZlKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCwgX1hNTEh0dHBSZXF1ZXN0KTtcbiAgICAgIH0gY2F0Y2ggKF9lcnJvcikge31cbiAgICAgIGlmIChfWERvbWFpblJlcXVlc3QgIT0gbnVsbCkge1xuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgcmVxO1xuICAgICAgICAgIHJlcSA9IG5ldyBfWERvbWFpblJlcXVlc3Q7XG4gICAgICAgICAgbW9uaXRvclhIUihyZXEpO1xuICAgICAgICAgIHJldHVybiByZXE7XG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZXh0ZW5kTmF0aXZlKHdpbmRvdy5YRG9tYWluUmVxdWVzdCwgX1hEb21haW5SZXF1ZXN0KTtcbiAgICAgICAgfSBjYXRjaCAoX2Vycm9yKSB7fVxuICAgICAgfVxuICAgICAgaWYgKChfV2ViU29ja2V0ICE9IG51bGwpICYmIG9wdGlvbnMuYWpheC50cmFja1dlYlNvY2tldHMpIHtcbiAgICAgICAgd2luZG93LldlYlNvY2tldCA9IGZ1bmN0aW9uKHVybCwgcHJvdG9jb2xzKSB7XG4gICAgICAgICAgdmFyIHJlcTtcbiAgICAgICAgICBpZiAocHJvdG9jb2xzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJlcSA9IG5ldyBfV2ViU29ja2V0KHVybCwgcHJvdG9jb2xzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVxID0gbmV3IF9XZWJTb2NrZXQodXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNob3VsZFRyYWNrKCdzb2NrZXQnKSkge1xuICAgICAgICAgICAgX3RoaXMudHJpZ2dlcigncmVxdWVzdCcsIHtcbiAgICAgICAgICAgICAgdHlwZTogJ3NvY2tldCcsXG4gICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICBwcm90b2NvbHM6IHByb3RvY29scyxcbiAgICAgICAgICAgICAgcmVxdWVzdDogcmVxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcTtcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBleHRlbmROYXRpdmUod2luZG93LldlYlNvY2tldCwgX1dlYlNvY2tldCk7XG4gICAgICAgIH0gY2F0Y2ggKF9lcnJvcikge31cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVxdWVzdEludGVyY2VwdDtcblxuICB9KShFdmVudHMpO1xuXG4gIF9pbnRlcmNlcHQgPSBudWxsO1xuXG4gIGdldEludGVyY2VwdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChfaW50ZXJjZXB0ID09IG51bGwpIHtcbiAgICAgIF9pbnRlcmNlcHQgPSBuZXcgUmVxdWVzdEludGVyY2VwdDtcbiAgICB9XG4gICAgcmV0dXJuIF9pbnRlcmNlcHQ7XG4gIH07XG5cbiAgc2hvdWxkSWdub3JlVVJMID0gZnVuY3Rpb24odXJsKSB7XG4gICAgdmFyIHBhdHRlcm4sIF9qLCBfbGVuMSwgX3JlZjI7XG4gICAgX3JlZjIgPSBvcHRpb25zLmFqYXguaWdub3JlVVJMcztcbiAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBfcmVmMi5sZW5ndGg7IF9qIDwgX2xlbjE7IF9qKyspIHtcbiAgICAgIHBhdHRlcm4gPSBfcmVmMltfal07XG4gICAgICBpZiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihwYXR0ZXJuKSAhPT0gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBhdHRlcm4udGVzdCh1cmwpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGdldEludGVyY2VwdCgpLm9uKCdyZXF1ZXN0JywgZnVuY3Rpb24oX2FyZykge1xuICAgIHZhciBhZnRlciwgYXJncywgcmVxdWVzdCwgdHlwZSwgdXJsO1xuICAgIHR5cGUgPSBfYXJnLnR5cGUsIHJlcXVlc3QgPSBfYXJnLnJlcXVlc3QsIHVybCA9IF9hcmcudXJsO1xuICAgIGlmIChzaG91bGRJZ25vcmVVUkwodXJsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIVBhY2UucnVubmluZyAmJiAob3B0aW9ucy5yZXN0YXJ0T25SZXF1ZXN0QWZ0ZXIgIT09IGZhbHNlIHx8IHNob3VsZFRyYWNrKHR5cGUpID09PSAnZm9yY2UnKSkge1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGFmdGVyID0gb3B0aW9ucy5yZXN0YXJ0T25SZXF1ZXN0QWZ0ZXIgfHwgMDtcbiAgICAgIGlmICh0eXBlb2YgYWZ0ZXIgPT09ICdib29sZWFuJykge1xuICAgICAgICBhZnRlciA9IDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHN0aWxsQWN0aXZlLCBfaiwgX2xlbjEsIF9yZWYyLCBfcmVmMywgX3Jlc3VsdHM7XG4gICAgICAgIGlmICh0eXBlID09PSAnc29ja2V0Jykge1xuICAgICAgICAgIHN0aWxsQWN0aXZlID0gcmVxdWVzdC5yZWFkeVN0YXRlIDwgMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGlsbEFjdGl2ZSA9ICgwIDwgKF9yZWYyID0gcmVxdWVzdC5yZWFkeVN0YXRlKSAmJiBfcmVmMiA8IDQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGlsbEFjdGl2ZSkge1xuICAgICAgICAgIFBhY2UucmVzdGFydCgpO1xuICAgICAgICAgIF9yZWYzID0gUGFjZS5zb3VyY2VzO1xuICAgICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjMubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgICAgICBzb3VyY2UgPSBfcmVmM1tfal07XG4gICAgICAgICAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgQWpheE1vbml0b3IpIHtcbiAgICAgICAgICAgICAgc291cmNlLndhdGNoLmFwcGx5KHNvdXJjZSwgYXJncyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX3Jlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX3Jlc3VsdHM7XG4gICAgICAgIH1cbiAgICAgIH0sIGFmdGVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIEFqYXhNb25pdG9yID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEFqYXhNb25pdG9yKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICAgIGdldEludGVyY2VwdCgpLm9uKCdyZXF1ZXN0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy53YXRjaC5hcHBseShfdGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIEFqYXhNb25pdG9yLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uKF9hcmcpIHtcbiAgICAgIHZhciByZXF1ZXN0LCB0cmFja2VyLCB0eXBlLCB1cmw7XG4gICAgICB0eXBlID0gX2FyZy50eXBlLCByZXF1ZXN0ID0gX2FyZy5yZXF1ZXN0LCB1cmwgPSBfYXJnLnVybDtcbiAgICAgIGlmIChzaG91bGRJZ25vcmVVUkwodXJsKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodHlwZSA9PT0gJ3NvY2tldCcpIHtcbiAgICAgICAgdHJhY2tlciA9IG5ldyBTb2NrZXRSZXF1ZXN0VHJhY2tlcihyZXF1ZXN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYWNrZXIgPSBuZXcgWEhSUmVxdWVzdFRyYWNrZXIocmVxdWVzdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50cy5wdXNoKHRyYWNrZXIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQWpheE1vbml0b3I7XG5cbiAgfSkoKTtcblxuICBYSFJSZXF1ZXN0VHJhY2tlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBYSFJSZXF1ZXN0VHJhY2tlcihyZXF1ZXN0KSB7XG4gICAgICB2YXIgZXZlbnQsIHNpemUsIF9qLCBfbGVuMSwgX29ucmVhZHlzdGF0ZWNoYW5nZSwgX3JlZjIsXG4gICAgICAgIF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgaWYgKHdpbmRvdy5Qcm9ncmVzc0V2ZW50ICE9IG51bGwpIHtcbiAgICAgICAgc2l6ZSA9IG51bGw7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBpZiAoZXZ0Lmxlbmd0aENvbXB1dGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzcyA9IDEwMCAqIGV2dC5sb2FkZWQgLyBldnQudG90YWw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzcyA9IF90aGlzLnByb2dyZXNzICsgKDEwMCAtIF90aGlzLnByb2dyZXNzKSAvIDI7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIF9yZWYyID0gWydsb2FkJywgJ2Fib3J0JywgJ3RpbWVvdXQnLCAnZXJyb3InXTtcbiAgICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgICAgZXZlbnQgPSBfcmVmMltfal07XG4gICAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzcyA9IDEwMDtcbiAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9vbnJlYWR5c3RhdGVjaGFuZ2UgPSByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZTtcbiAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgX3JlZjM7XG4gICAgICAgICAgaWYgKChfcmVmMyA9IHJlcXVlc3QucmVhZHlTdGF0ZSkgPT09IDAgfHwgX3JlZjMgPT09IDQpIHtcbiAgICAgICAgICAgIF90aGlzLnByb2dyZXNzID0gMTAwO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSAzKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9ncmVzcyA9IDUwO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHlwZW9mIF9vbnJlYWR5c3RhdGVjaGFuZ2UgPT09IFwiZnVuY3Rpb25cIiA/IF9vbnJlYWR5c3RhdGVjaGFuZ2UuYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IHZvaWQgMDtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gWEhSUmVxdWVzdFRyYWNrZXI7XG5cbiAgfSkoKTtcblxuICBTb2NrZXRSZXF1ZXN0VHJhY2tlciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBTb2NrZXRSZXF1ZXN0VHJhY2tlcihyZXF1ZXN0KSB7XG4gICAgICB2YXIgZXZlbnQsIF9qLCBfbGVuMSwgX3JlZjIsXG4gICAgICAgIF90aGlzID0gdGhpcztcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgX3JlZjIgPSBbJ2Vycm9yJywgJ29wZW4nXTtcbiAgICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IF9yZWYyLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xuICAgICAgICBldmVudCA9IF9yZWYyW19qXTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMucHJvZ3Jlc3MgPSAxMDA7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gU29ja2V0UmVxdWVzdFRyYWNrZXI7XG5cbiAgfSkoKTtcblxuICBFbGVtZW50TW9uaXRvciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBFbGVtZW50TW9uaXRvcihvcHRpb25zKSB7XG4gICAgICB2YXIgc2VsZWN0b3IsIF9qLCBfbGVuMSwgX3JlZjI7XG4gICAgICBpZiAob3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcbiAgICAgIGlmIChvcHRpb25zLnNlbGVjdG9ycyA9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMuc2VsZWN0b3JzID0gW107XG4gICAgICB9XG4gICAgICBfcmVmMiA9IG9wdGlvbnMuc2VsZWN0b3JzO1xuICAgICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgIHNlbGVjdG9yID0gX3JlZjJbX2pdO1xuICAgICAgICB0aGlzLmVsZW1lbnRzLnB1c2gobmV3IEVsZW1lbnRUcmFja2VyKHNlbGVjdG9yKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEVsZW1lbnRNb25pdG9yO1xuXG4gIH0pKCk7XG5cbiAgRWxlbWVudFRyYWNrZXIgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gRWxlbWVudFRyYWNrZXIoc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgdGhpcy5jaGVjaygpO1xuICAgIH1cblxuICAgIEVsZW1lbnRUcmFja2VyLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KChmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuY2hlY2soKTtcbiAgICAgICAgfSksIG9wdGlvbnMuZWxlbWVudHMuY2hlY2tJbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEVsZW1lbnRUcmFja2VyLnByb3RvdHlwZS5kb25lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9ncmVzcyA9IDEwMDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEVsZW1lbnRUcmFja2VyO1xuXG4gIH0pKCk7XG5cbiAgRG9jdW1lbnRNb25pdG9yID0gKGZ1bmN0aW9uKCkge1xuICAgIERvY3VtZW50TW9uaXRvci5wcm90b3R5cGUuc3RhdGVzID0ge1xuICAgICAgbG9hZGluZzogMCxcbiAgICAgIGludGVyYWN0aXZlOiA1MCxcbiAgICAgIGNvbXBsZXRlOiAxMDBcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gRG9jdW1lbnRNb25pdG9yKCkge1xuICAgICAgdmFyIF9vbnJlYWR5c3RhdGVjaGFuZ2UsIF9yZWYyLFxuICAgICAgICBfdGhpcyA9IHRoaXM7XG4gICAgICB0aGlzLnByb2dyZXNzID0gKF9yZWYyID0gdGhpcy5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV0pICE9IG51bGwgPyBfcmVmMiA6IDEwMDtcbiAgICAgIF9vbnJlYWR5c3RhdGVjaGFuZ2UgPSBkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2U7XG4gICAgICBkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKF90aGlzLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXSAhPSBudWxsKSB7XG4gICAgICAgICAgX3RoaXMucHJvZ3Jlc3MgPSBfdGhpcy5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBfb25yZWFkeXN0YXRlY2hhbmdlID09PSBcImZ1bmN0aW9uXCIgPyBfb25yZWFkeXN0YXRlY2hhbmdlLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgOiB2b2lkIDA7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBEb2N1bWVudE1vbml0b3I7XG5cbiAgfSkoKTtcblxuICBFdmVudExhZ01vbml0b3IgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRMYWdNb25pdG9yKCkge1xuICAgICAgdmFyIGF2ZywgaW50ZXJ2YWwsIGxhc3QsIHBvaW50cywgc2FtcGxlcyxcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgICBhdmcgPSAwO1xuICAgICAgc2FtcGxlcyA9IFtdO1xuICAgICAgcG9pbnRzID0gMDtcbiAgICAgIGxhc3QgPSBub3coKTtcbiAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWZmO1xuICAgICAgICBkaWZmID0gbm93KCkgLSBsYXN0IC0gNTA7XG4gICAgICAgIGxhc3QgPSBub3coKTtcbiAgICAgICAgc2FtcGxlcy5wdXNoKGRpZmYpO1xuICAgICAgICBpZiAoc2FtcGxlcy5sZW5ndGggPiBvcHRpb25zLmV2ZW50TGFnLnNhbXBsZUNvdW50KSB7XG4gICAgICAgICAgc2FtcGxlcy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIGF2ZyA9IGF2Z0FtcGxpdHVkZShzYW1wbGVzKTtcbiAgICAgICAgaWYgKCsrcG9pbnRzID49IG9wdGlvbnMuZXZlbnRMYWcubWluU2FtcGxlcyAmJiBhdmcgPCBvcHRpb25zLmV2ZW50TGFnLmxhZ1RocmVzaG9sZCkge1xuICAgICAgICAgIF90aGlzLnByb2dyZXNzID0gMTAwO1xuICAgICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMucHJvZ3Jlc3MgPSAxMDAgKiAoMyAvIChhdmcgKyAzKSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDUwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gRXZlbnRMYWdNb25pdG9yO1xuXG4gIH0pKCk7XG5cbiAgU2NhbGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFNjYWxlcihzb3VyY2UpIHtcbiAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgdGhpcy5sYXN0ID0gdGhpcy5zaW5jZUxhc3RVcGRhdGUgPSAwO1xuICAgICAgdGhpcy5yYXRlID0gb3B0aW9ucy5pbml0aWFsUmF0ZTtcbiAgICAgIHRoaXMuY2F0Y2h1cCA9IDA7XG4gICAgICB0aGlzLnByb2dyZXNzID0gdGhpcy5sYXN0UHJvZ3Jlc3MgPSAwO1xuICAgICAgaWYgKHRoaXMuc291cmNlICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHJlc3VsdCh0aGlzLnNvdXJjZSwgJ3Byb2dyZXNzJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgU2NhbGVyLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24oZnJhbWVUaW1lLCB2YWwpIHtcbiAgICAgIHZhciBzY2FsaW5nO1xuICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgIHZhbCA9IHJlc3VsdCh0aGlzLnNvdXJjZSwgJ3Byb2dyZXNzJyk7XG4gICAgICB9XG4gICAgICBpZiAodmFsID49IDEwMCkge1xuICAgICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHZhbCA9PT0gdGhpcy5sYXN0KSB7XG4gICAgICAgIHRoaXMuc2luY2VMYXN0VXBkYXRlICs9IGZyYW1lVGltZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnNpbmNlTGFzdFVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMucmF0ZSA9ICh2YWwgLSB0aGlzLmxhc3QpIC8gdGhpcy5zaW5jZUxhc3RVcGRhdGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYXRjaHVwID0gKHZhbCAtIHRoaXMucHJvZ3Jlc3MpIC8gb3B0aW9ucy5jYXRjaHVwVGltZTtcbiAgICAgICAgdGhpcy5zaW5jZUxhc3RVcGRhdGUgPSAwO1xuICAgICAgICB0aGlzLmxhc3QgPSB2YWw7XG4gICAgICB9XG4gICAgICBpZiAodmFsID4gdGhpcy5wcm9ncmVzcykge1xuICAgICAgICB0aGlzLnByb2dyZXNzICs9IHRoaXMuY2F0Y2h1cCAqIGZyYW1lVGltZTtcbiAgICAgIH1cbiAgICAgIHNjYWxpbmcgPSAxIC0gTWF0aC5wb3codGhpcy5wcm9ncmVzcyAvIDEwMCwgb3B0aW9ucy5lYXNlRmFjdG9yKTtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgKz0gc2NhbGluZyAqIHRoaXMucmF0ZSAqIGZyYW1lVGltZTtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1pbih0aGlzLmxhc3RQcm9ncmVzcyArIG9wdGlvbnMubWF4UHJvZ3Jlc3NQZXJGcmFtZSwgdGhpcy5wcm9ncmVzcyk7XG4gICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5tYXgoMCwgdGhpcy5wcm9ncmVzcyk7XG4gICAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5taW4oMTAwLCB0aGlzLnByb2dyZXNzKTtcbiAgICAgIHRoaXMubGFzdFByb2dyZXNzID0gdGhpcy5wcm9ncmVzcztcbiAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2NhbGVyO1xuXG4gIH0pKCk7XG5cbiAgc291cmNlcyA9IG51bGw7XG5cbiAgc2NhbGVycyA9IG51bGw7XG5cbiAgYmFyID0gbnVsbDtcblxuICB1bmlTY2FsZXIgPSBudWxsO1xuXG4gIGFuaW1hdGlvbiA9IG51bGw7XG5cbiAgY2FuY2VsQW5pbWF0aW9uID0gbnVsbDtcblxuICBQYWNlLnJ1bm5pbmcgPSBmYWxzZTtcblxuICBoYW5kbGVQdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAob3B0aW9ucy5yZXN0YXJ0T25QdXNoU3RhdGUpIHtcbiAgICAgIHJldHVybiBQYWNlLnJlc3RhcnQoKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSAhPSBudWxsKSB7XG4gICAgX3B1c2hTdGF0ZSA9IHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZTtcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGhhbmRsZVB1c2hTdGF0ZSgpO1xuICAgICAgcmV0dXJuIF9wdXNoU3RhdGUuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICh3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgIT0gbnVsbCkge1xuICAgIF9yZXBsYWNlU3RhdGUgPSB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGU7XG4gICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICBoYW5kbGVQdXNoU3RhdGUoKTtcbiAgICAgIHJldHVybiBfcmVwbGFjZVN0YXRlLmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBTT1VSQ0VfS0VZUyA9IHtcbiAgICBhamF4OiBBamF4TW9uaXRvcixcbiAgICBlbGVtZW50czogRWxlbWVudE1vbml0b3IsXG4gICAgZG9jdW1lbnQ6IERvY3VtZW50TW9uaXRvcixcbiAgICBldmVudExhZzogRXZlbnRMYWdNb25pdG9yXG4gIH07XG5cbiAgKGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdHlwZSwgX2osIF9rLCBfbGVuMSwgX2xlbjIsIF9yZWYyLCBfcmVmMywgX3JlZjQ7XG4gICAgUGFjZS5zb3VyY2VzID0gc291cmNlcyA9IFtdO1xuICAgIF9yZWYyID0gWydhamF4JywgJ2VsZW1lbnRzJywgJ2RvY3VtZW50JywgJ2V2ZW50TGFnJ107XG4gICAgZm9yIChfaiA9IDAsIF9sZW4xID0gX3JlZjIubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICB0eXBlID0gX3JlZjJbX2pdO1xuICAgICAgaWYgKG9wdGlvbnNbdHlwZV0gIT09IGZhbHNlKSB7XG4gICAgICAgIHNvdXJjZXMucHVzaChuZXcgU09VUkNFX0tFWVNbdHlwZV0ob3B0aW9uc1t0eXBlXSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBfcmVmNCA9IChfcmVmMyA9IG9wdGlvbnMuZXh0cmFTb3VyY2VzKSAhPSBudWxsID8gX3JlZjMgOiBbXTtcbiAgICBmb3IgKF9rID0gMCwgX2xlbjIgPSBfcmVmNC5sZW5ndGg7IF9rIDwgX2xlbjI7IF9rKyspIHtcbiAgICAgIHNvdXJjZSA9IF9yZWY0W19rXTtcbiAgICAgIHNvdXJjZXMucHVzaChuZXcgc291cmNlKG9wdGlvbnMpKTtcbiAgICB9XG4gICAgUGFjZS5iYXIgPSBiYXIgPSBuZXcgQmFyO1xuICAgIHNjYWxlcnMgPSBbXTtcbiAgICByZXR1cm4gdW5pU2NhbGVyID0gbmV3IFNjYWxlcjtcbiAgfSkoKTtcblxuICBQYWNlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICBQYWNlLnRyaWdnZXIoJ3N0b3AnKTtcbiAgICBQYWNlLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICBiYXIuZGVzdHJveSgpO1xuICAgIGNhbmNlbEFuaW1hdGlvbiA9IHRydWU7XG4gICAgaWYgKGFuaW1hdGlvbiAhPSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIGNhbmNlbEFuaW1hdGlvbkZyYW1lID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgIH1cbiAgICAgIGFuaW1hdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBpbml0KCk7XG4gIH07XG5cbiAgUGFjZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgUGFjZS50cmlnZ2VyKCdyZXN0YXJ0Jyk7XG4gICAgUGFjZS5zdG9wKCk7XG4gICAgcmV0dXJuIFBhY2Uuc3RhcnQoKTtcbiAgfTtcblxuICBQYWNlLmdvID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YXJ0O1xuICAgIFBhY2UucnVubmluZyA9IHRydWU7XG4gICAgYmFyLnJlbmRlcigpO1xuICAgIHN0YXJ0ID0gbm93KCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgcmV0dXJuIGFuaW1hdGlvbiA9IHJ1bkFuaW1hdGlvbihmdW5jdGlvbihmcmFtZVRpbWUsIGVucXVldWVOZXh0RnJhbWUpIHtcbiAgICAgIHZhciBhdmcsIGNvdW50LCBkb25lLCBlbGVtZW50LCBlbGVtZW50cywgaSwgaiwgcmVtYWluaW5nLCBzY2FsZXIsIHNjYWxlckxpc3QsIHN1bSwgX2osIF9rLCBfbGVuMSwgX2xlbjIsIF9yZWYyO1xuICAgICAgcmVtYWluaW5nID0gMTAwIC0gYmFyLnByb2dyZXNzO1xuICAgICAgY291bnQgPSBzdW0gPSAwO1xuICAgICAgZG9uZSA9IHRydWU7XG4gICAgICBmb3IgKGkgPSBfaiA9IDAsIF9sZW4xID0gc291cmNlcy5sZW5ndGg7IF9qIDwgX2xlbjE7IGkgPSArK19qKSB7XG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZXNbaV07XG4gICAgICAgIHNjYWxlckxpc3QgPSBzY2FsZXJzW2ldICE9IG51bGwgPyBzY2FsZXJzW2ldIDogc2NhbGVyc1tpXSA9IFtdO1xuICAgICAgICBlbGVtZW50cyA9IChfcmVmMiA9IHNvdXJjZS5lbGVtZW50cykgIT0gbnVsbCA/IF9yZWYyIDogW3NvdXJjZV07XG4gICAgICAgIGZvciAoaiA9IF9rID0gMCwgX2xlbjIgPSBlbGVtZW50cy5sZW5ndGg7IF9rIDwgX2xlbjI7IGogPSArK19rKSB7XG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRzW2pdO1xuICAgICAgICAgIHNjYWxlciA9IHNjYWxlckxpc3Rbal0gIT0gbnVsbCA/IHNjYWxlckxpc3Rbal0gOiBzY2FsZXJMaXN0W2pdID0gbmV3IFNjYWxlcihlbGVtZW50KTtcbiAgICAgICAgICBkb25lICY9IHNjYWxlci5kb25lO1xuICAgICAgICAgIGlmIChzY2FsZXIuZG9uZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgc3VtICs9IHNjYWxlci50aWNrKGZyYW1lVGltZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF2ZyA9IHN1bSAvIGNvdW50O1xuICAgICAgYmFyLnVwZGF0ZSh1bmlTY2FsZXIudGljayhmcmFtZVRpbWUsIGF2ZykpO1xuICAgICAgaWYgKGJhci5kb25lKCkgfHwgZG9uZSB8fCBjYW5jZWxBbmltYXRpb24pIHtcbiAgICAgICAgYmFyLnVwZGF0ZSgxMDApO1xuICAgICAgICBQYWNlLnRyaWdnZXIoJ2RvbmUnKTtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgYmFyLmZpbmlzaCgpO1xuICAgICAgICAgIFBhY2UucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBQYWNlLnRyaWdnZXIoJ2hpZGUnKTtcbiAgICAgICAgfSwgTWF0aC5tYXgob3B0aW9ucy5naG9zdFRpbWUsIE1hdGgubWF4KG9wdGlvbnMubWluVGltZSAtIChub3coKSAtIHN0YXJ0KSwgMCkpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlbnF1ZXVlTmV4dEZyYW1lKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgUGFjZS5zdGFydCA9IGZ1bmN0aW9uKF9vcHRpb25zKSB7XG4gICAgZXh0ZW5kKG9wdGlvbnMsIF9vcHRpb25zKTtcbiAgICBQYWNlLnJ1bm5pbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBiYXIucmVuZGVyKCk7XG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XG4gICAgICBOb1RhcmdldEVycm9yID0gX2Vycm9yO1xuICAgIH1cbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWNlJykpIHtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KFBhY2Uuc3RhcnQsIDUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUGFjZS50cmlnZ2VyKCdzdGFydCcpO1xuICAgICAgcmV0dXJuIFBhY2UuZ28oKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ3BhY2UnXSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gUGFjZTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFBhY2U7XG4gIH0gZWxzZSB7XG4gICAgaWYgKG9wdGlvbnMuc3RhcnRPblBhZ2VMb2FkKSB7XG4gICAgICBQYWNlLnN0YXJ0KCk7XG4gICAgfVxuICB9XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIvKiFcbiAqIHBlcmZlY3Qtc2Nyb2xsYmFyIHYxLjQuMFxuICogKGMpIDIwMTggSHl1bmplIEp1blxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmZ1bmN0aW9uIGdldChlbGVtZW50KSB7XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBzZXQoZWxlbWVudCwgb2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICB2YXIgdmFsID0gb2JqW2tleV07XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWwgPSB2YWwgKyBcInB4XCI7XG4gICAgfVxuICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHZhbDtcbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZGl2KGNsYXNzTmFtZSkge1xuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIHJldHVybiBkaXY7XG59XG5cbnZhciBlbE1hdGNoZXMgPVxuICB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgKEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3Rvcik7XG5cbmZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgcXVlcnkpIHtcbiAgaWYgKCFlbE1hdGNoZXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVsZW1lbnQgbWF0Y2hpbmcgbWV0aG9kIHN1cHBvcnRlZCcpO1xuICB9XG5cbiAgcmV0dXJuIGVsTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHF1ZXJ5KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQucmVtb3ZlKSB7XG4gICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5Q2hpbGRyZW4oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlbGVtZW50LmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIG1hdGNoZXMoY2hpbGQsIHNlbGVjdG9yKTsgfVxuICApO1xufVxuXG52YXIgY2xzID0ge1xuICBtYWluOiAncHMnLFxuICBlbGVtZW50OiB7XG4gICAgdGh1bWI6IGZ1bmN0aW9uICh4KSB7IHJldHVybiAoXCJwc19fdGh1bWItXCIgKyB4KTsgfSxcbiAgICByYWlsOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKFwicHNfX3JhaWwtXCIgKyB4KTsgfSxcbiAgICBjb25zdW1pbmc6ICdwc19fY2hpbGQtLWNvbnN1bWUnLFxuICB9LFxuICBzdGF0ZToge1xuICAgIGZvY3VzOiAncHMtLWZvY3VzJyxcbiAgICBjbGlja2luZzogJ3BzLS1jbGlja2luZycsXG4gICAgYWN0aXZlOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKFwicHMtLWFjdGl2ZS1cIiArIHgpOyB9LFxuICAgIHNjcm9sbGluZzogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIChcInBzLS1zY3JvbGxpbmctXCIgKyB4KTsgfSxcbiAgfSxcbn07XG5cbi8qXG4gKiBIZWxwZXIgbWV0aG9kc1xuICovXG52YXIgc2Nyb2xsaW5nQ2xhc3NUaW1lb3V0ID0geyB4OiBudWxsLCB5OiBudWxsIH07XG5cbmZ1bmN0aW9uIGFkZFNjcm9sbGluZ0NsYXNzKGksIHgpIHtcbiAgdmFyIGNsYXNzTGlzdCA9IGkuZWxlbWVudC5jbGFzc0xpc3Q7XG4gIHZhciBjbGFzc05hbWUgPSBjbHMuc3RhdGUuc2Nyb2xsaW5nKHgpO1xuXG4gIGlmIChjbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgIGNsZWFyVGltZW91dChzY3JvbGxpbmdDbGFzc1RpbWVvdXRbeF0pO1xuICB9IGVsc2Uge1xuICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVTY3JvbGxpbmdDbGFzcyhpLCB4KSB7XG4gIHNjcm9sbGluZ0NsYXNzVGltZW91dFt4XSA9IHNldFRpbWVvdXQoXG4gICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gaS5pc0FsaXZlICYmIGkuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5zY3JvbGxpbmcoeCkpOyB9LFxuICAgIGkuc2V0dGluZ3Muc2Nyb2xsaW5nVGhyZXNob2xkXG4gICk7XG59XG5cbmZ1bmN0aW9uIHNldFNjcm9sbGluZ0NsYXNzSW5zdGFudGx5KGksIHgpIHtcbiAgYWRkU2Nyb2xsaW5nQ2xhc3MoaSwgeCk7XG4gIHJlbW92ZVNjcm9sbGluZ0NsYXNzKGksIHgpO1xufVxuXG52YXIgRXZlbnRFbGVtZW50ID0gZnVuY3Rpb24gRXZlbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgdGhpcy5oYW5kbGVycyA9IHt9O1xufTtcblxudmFyIHByb3RvdHlwZUFjY2Vzc29ycyA9IHsgaXNFbXB0eTogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG5FdmVudEVsZW1lbnQucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kIChldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLmhhbmRsZXJzW2V2ZW50TmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdID0gW107XG4gIH1cbiAgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdLnB1c2goaGFuZGxlcik7XG4gIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbGVtZW50LnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiB1bmJpbmQgKGV2ZW50TmFtZSwgdGFyZ2V0KSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdID0gdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdLmZpbHRlcihmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIGlmICh0YXJnZXQgJiYgaGFuZGxlciAhPT0gdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcyQxLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufTtcblxuRXZlbnRFbGVtZW50LnByb3RvdHlwZS51bmJpbmRBbGwgPSBmdW5jdGlvbiB1bmJpbmRBbGwgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGZvciAodmFyIG5hbWUgaW4gdGhpcyQxLmhhbmRsZXJzKSB7XG4gICAgdGhpcyQxLnVuYmluZChuYW1lKTtcbiAgfVxufTtcblxucHJvdG90eXBlQWNjZXNzb3JzLmlzRW1wdHkuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmhhbmRsZXJzKS5ldmVyeShcbiAgICBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB0aGlzJDEuaGFuZGxlcnNba2V5XS5sZW5ndGggPT09IDA7IH1cbiAgKTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBFdmVudEVsZW1lbnQucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxudmFyIEV2ZW50TWFuYWdlciA9IGZ1bmN0aW9uIEV2ZW50TWFuYWdlcigpIHtcbiAgdGhpcy5ldmVudEVsZW1lbnRzID0gW107XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLmV2ZW50RWxlbWVudCA9IGZ1bmN0aW9uIGV2ZW50RWxlbWVudCAoZWxlbWVudCkge1xuICB2YXIgZWUgPSB0aGlzLmV2ZW50RWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChlZSkgeyByZXR1cm4gZWUuZWxlbWVudCA9PT0gZWxlbWVudDsgfSlbMF07XG4gIGlmICghZWUpIHtcbiAgICBlZSA9IG5ldyBFdmVudEVsZW1lbnQoZWxlbWVudCk7XG4gICAgdGhpcy5ldmVudEVsZW1lbnRzLnB1c2goZWUpO1xuICB9XG4gIHJldHVybiBlZTtcbn07XG5cbkV2ZW50TWFuYWdlci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIGJpbmQgKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICB0aGlzLmV2ZW50RWxlbWVudChlbGVtZW50KS5iaW5kKGV2ZW50TmFtZSwgaGFuZGxlcik7XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uIHVuYmluZCAoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIHZhciBlZSA9IHRoaXMuZXZlbnRFbGVtZW50KGVsZW1lbnQpO1xuICBlZS51bmJpbmQoZXZlbnROYW1lLCBoYW5kbGVyKTtcblxuICBpZiAoZWUuaXNFbXB0eSkge1xuICAgIC8vIHJlbW92ZVxuICAgIHRoaXMuZXZlbnRFbGVtZW50cy5zcGxpY2UodGhpcy5ldmVudEVsZW1lbnRzLmluZGV4T2YoZWUpLCAxKTtcbiAgfVxufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS51bmJpbmRBbGwgPSBmdW5jdGlvbiB1bmJpbmRBbGwgKCkge1xuICB0aGlzLmV2ZW50RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS51bmJpbmRBbGwoKTsgfSk7XG4gIHRoaXMuZXZlbnRFbGVtZW50cyA9IFtdO1xufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSAoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIHZhciBlZSA9IHRoaXMuZXZlbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgb25jZUhhbmRsZXIgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgZWUudW5iaW5kKGV2ZW50TmFtZSwgb25jZUhhbmRsZXIpO1xuICAgIGhhbmRsZXIoZXZ0KTtcbiAgfTtcbiAgZWUuYmluZChldmVudE5hbWUsIG9uY2VIYW5kbGVyKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50KG5hbWUpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbmV3IEN1c3RvbUV2ZW50KG5hbWUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KG5hbWUsIGZhbHNlLCBmYWxzZSwgdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gZXZ0O1xuICB9XG59XG5cbnZhciBwcm9jZXNzU2Nyb2xsRGlmZiA9IGZ1bmN0aW9uKFxuICBpLFxuICBheGlzLFxuICBkaWZmLFxuICB1c2VTY3JvbGxpbmdDbGFzcyxcbiAgZm9yY2VGaXJlUmVhY2hFdmVudFxuKSB7XG4gIGlmICggdXNlU2Nyb2xsaW5nQ2xhc3MgPT09IHZvaWQgMCApIHVzZVNjcm9sbGluZ0NsYXNzID0gdHJ1ZTtcbiAgaWYgKCBmb3JjZUZpcmVSZWFjaEV2ZW50ID09PSB2b2lkIDAgKSBmb3JjZUZpcmVSZWFjaEV2ZW50ID0gZmFsc2U7XG5cbiAgdmFyIGZpZWxkcztcbiAgaWYgKGF4aXMgPT09ICd0b3AnKSB7XG4gICAgZmllbGRzID0gW1xuICAgICAgJ2NvbnRlbnRIZWlnaHQnLFxuICAgICAgJ2NvbnRhaW5lckhlaWdodCcsXG4gICAgICAnc2Nyb2xsVG9wJyxcbiAgICAgICd5JyxcbiAgICAgICd1cCcsXG4gICAgICAnZG93bicgXTtcbiAgfSBlbHNlIGlmIChheGlzID09PSAnbGVmdCcpIHtcbiAgICBmaWVsZHMgPSBbXG4gICAgICAnY29udGVudFdpZHRoJyxcbiAgICAgICdjb250YWluZXJXaWR0aCcsXG4gICAgICAnc2Nyb2xsTGVmdCcsXG4gICAgICAneCcsXG4gICAgICAnbGVmdCcsXG4gICAgICAncmlnaHQnIF07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBIHByb3BlciBheGlzIHNob3VsZCBiZSBwcm92aWRlZCcpO1xuICB9XG5cbiAgcHJvY2Vzc1Njcm9sbERpZmYkMShpLCBkaWZmLCBmaWVsZHMsIHVzZVNjcm9sbGluZ0NsYXNzLCBmb3JjZUZpcmVSZWFjaEV2ZW50KTtcbn07XG5cbmZ1bmN0aW9uIHByb2Nlc3NTY3JvbGxEaWZmJDEoXG4gIGksXG4gIGRpZmYsXG4gIHJlZixcbiAgdXNlU2Nyb2xsaW5nQ2xhc3MsXG4gIGZvcmNlRmlyZVJlYWNoRXZlbnRcbikge1xuICB2YXIgY29udGVudEhlaWdodCA9IHJlZlswXTtcbiAgdmFyIGNvbnRhaW5lckhlaWdodCA9IHJlZlsxXTtcbiAgdmFyIHNjcm9sbFRvcCA9IHJlZlsyXTtcbiAgdmFyIHkgPSByZWZbM107XG4gIHZhciB1cCA9IHJlZls0XTtcbiAgdmFyIGRvd24gPSByZWZbNV07XG4gIGlmICggdXNlU2Nyb2xsaW5nQ2xhc3MgPT09IHZvaWQgMCApIHVzZVNjcm9sbGluZ0NsYXNzID0gdHJ1ZTtcbiAgaWYgKCBmb3JjZUZpcmVSZWFjaEV2ZW50ID09PSB2b2lkIDAgKSBmb3JjZUZpcmVSZWFjaEV2ZW50ID0gZmFsc2U7XG5cbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG5cbiAgLy8gcmVzZXQgcmVhY2hcbiAgaS5yZWFjaFt5XSA9IG51bGw7XG5cbiAgLy8gMSBmb3Igc3VicGl4ZWwgcm91bmRpbmdcbiAgaWYgKGVsZW1lbnRbc2Nyb2xsVG9wXSA8IDEpIHtcbiAgICBpLnJlYWNoW3ldID0gJ3N0YXJ0JztcbiAgfVxuXG4gIC8vIDEgZm9yIHN1YnBpeGVsIHJvdW5kaW5nXG4gIGlmIChlbGVtZW50W3Njcm9sbFRvcF0gPiBpW2NvbnRlbnRIZWlnaHRdIC0gaVtjb250YWluZXJIZWlnaHRdIC0gMSkge1xuICAgIGkucmVhY2hbeV0gPSAnZW5kJztcbiAgfVxuXG4gIGlmIChkaWZmKSB7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KChcInBzLXNjcm9sbC1cIiArIHkpKSk7XG5cbiAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudCgoXCJwcy1zY3JvbGwtXCIgKyB1cCkpKTtcbiAgICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoKFwicHMtc2Nyb2xsLVwiICsgZG93bikpKTtcbiAgICB9XG5cbiAgICBpZiAodXNlU2Nyb2xsaW5nQ2xhc3MpIHtcbiAgICAgIHNldFNjcm9sbGluZ0NsYXNzSW5zdGFudGx5KGksIHkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChpLnJlYWNoW3ldICYmIChkaWZmIHx8IGZvcmNlRmlyZVJlYWNoRXZlbnQpKSB7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KChcInBzLVwiICsgeSArIFwiLXJlYWNoLVwiICsgKGkucmVhY2hbeV0pKSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvSW50KHgpIHtcbiAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBpc0VkaXRhYmxlKGVsKSB7XG4gIHJldHVybiAoXG4gICAgbWF0Y2hlcyhlbCwgJ2lucHV0LFtjb250ZW50ZWRpdGFibGVdJykgfHxcbiAgICBtYXRjaGVzKGVsLCAnc2VsZWN0LFtjb250ZW50ZWRpdGFibGVdJykgfHxcbiAgICBtYXRjaGVzKGVsLCAndGV4dGFyZWEsW2NvbnRlbnRlZGl0YWJsZV0nKSB8fFxuICAgIG1hdGNoZXMoZWwsICdidXR0b24sW2NvbnRlbnRlZGl0YWJsZV0nKVxuICApO1xufVxuXG5mdW5jdGlvbiBvdXRlcldpZHRoKGVsZW1lbnQpIHtcbiAgdmFyIHN0eWxlcyA9IGdldChlbGVtZW50KTtcbiAgcmV0dXJuIChcbiAgICB0b0ludChzdHlsZXMud2lkdGgpICtcbiAgICB0b0ludChzdHlsZXMucGFkZGluZ0xlZnQpICtcbiAgICB0b0ludChzdHlsZXMucGFkZGluZ1JpZ2h0KSArXG4gICAgdG9JbnQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCkgK1xuICAgIHRvSW50KHN0eWxlcy5ib3JkZXJSaWdodFdpZHRoKVxuICApO1xufVxuXG52YXIgZW52ID0ge1xuICBpc1dlYktpdDpcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgJ1dlYmtpdEFwcGVhcmFuY2UnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSxcbiAgc3VwcG9ydHNUb3VjaDpcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHxcbiAgICAgICh3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIHdpbmRvdy5Eb2N1bWVudFRvdWNoKSksXG4gIHN1cHBvcnRzSWVQb2ludGVyOlxuICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzLFxuICBpc0Nocm9tZTpcbiAgICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIC9DaHJvbWUvaS50ZXN0KG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50KSxcbn07XG5cbnZhciB1cGRhdGVHZW9tZXRyeSA9IGZ1bmN0aW9uKGkpIHtcbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG4gIHZhciByb3VuZGVkU2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7XG5cbiAgaS5jb250YWluZXJXaWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIGkuY29udGFpbmVySGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIGkuY29udGVudFdpZHRoID0gZWxlbWVudC5zY3JvbGxXaWR0aDtcbiAgaS5jb250ZW50SGVpZ2h0ID0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cbiAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKGkuc2Nyb2xsYmFyWFJhaWwpKSB7XG4gICAgLy8gY2xlYW4gdXAgYW5kIGFwcGVuZFxuICAgIHF1ZXJ5Q2hpbGRyZW4oZWxlbWVudCwgY2xzLmVsZW1lbnQucmFpbCgneCcpKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gcmVtb3ZlKGVsKTsgfVxuICAgICk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpLnNjcm9sbGJhclhSYWlsKTtcbiAgfVxuICBpZiAoIWVsZW1lbnQuY29udGFpbnMoaS5zY3JvbGxiYXJZUmFpbCkpIHtcbiAgICAvLyBjbGVhbiB1cCBhbmQgYXBwZW5kXG4gICAgcXVlcnlDaGlsZHJlbihlbGVtZW50LCBjbHMuZWxlbWVudC5yYWlsKCd5JykpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7IHJldHVybiByZW1vdmUoZWwpOyB9XG4gICAgKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGkuc2Nyb2xsYmFyWVJhaWwpO1xuICB9XG5cbiAgaWYgKFxuICAgICFpLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWCAmJlxuICAgIGkuY29udGFpbmVyV2lkdGggKyBpLnNldHRpbmdzLnNjcm9sbFhNYXJnaW5PZmZzZXQgPCBpLmNvbnRlbnRXaWR0aFxuICApIHtcbiAgICBpLnNjcm9sbGJhclhBY3RpdmUgPSB0cnVlO1xuICAgIGkucmFpbFhXaWR0aCA9IGkuY29udGFpbmVyV2lkdGggLSBpLnJhaWxYTWFyZ2luV2lkdGg7XG4gICAgaS5yYWlsWFJhdGlvID0gaS5jb250YWluZXJXaWR0aCAvIGkucmFpbFhXaWR0aDtcbiAgICBpLnNjcm9sbGJhclhXaWR0aCA9IGdldFRodW1iU2l6ZShcbiAgICAgIGksXG4gICAgICB0b0ludChpLnJhaWxYV2lkdGggKiBpLmNvbnRhaW5lcldpZHRoIC8gaS5jb250ZW50V2lkdGgpXG4gICAgKTtcbiAgICBpLnNjcm9sbGJhclhMZWZ0ID0gdG9JbnQoXG4gICAgICAoaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgKyBlbGVtZW50LnNjcm9sbExlZnQpICpcbiAgICAgICAgKGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoKSAvXG4gICAgICAgIChpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGgpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBpLnNjcm9sbGJhclhBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChcbiAgICAhaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFkgJiZcbiAgICBpLmNvbnRhaW5lckhlaWdodCArIGkuc2V0dGluZ3Muc2Nyb2xsWU1hcmdpbk9mZnNldCA8IGkuY29udGVudEhlaWdodFxuICApIHtcbiAgICBpLnNjcm9sbGJhcllBY3RpdmUgPSB0cnVlO1xuICAgIGkucmFpbFlIZWlnaHQgPSBpLmNvbnRhaW5lckhlaWdodCAtIGkucmFpbFlNYXJnaW5IZWlnaHQ7XG4gICAgaS5yYWlsWVJhdGlvID0gaS5jb250YWluZXJIZWlnaHQgLyBpLnJhaWxZSGVpZ2h0O1xuICAgIGkuc2Nyb2xsYmFyWUhlaWdodCA9IGdldFRodW1iU2l6ZShcbiAgICAgIGksXG4gICAgICB0b0ludChpLnJhaWxZSGVpZ2h0ICogaS5jb250YWluZXJIZWlnaHQgLyBpLmNvbnRlbnRIZWlnaHQpXG4gICAgKTtcbiAgICBpLnNjcm9sbGJhcllUb3AgPSB0b0ludChcbiAgICAgIHJvdW5kZWRTY3JvbGxUb3AgKlxuICAgICAgICAoaS5yYWlsWUhlaWdodCAtIGkuc2Nyb2xsYmFyWUhlaWdodCkgL1xuICAgICAgICAoaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBpLnNjcm9sbGJhcllBY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChpLnNjcm9sbGJhclhMZWZ0ID49IGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoKSB7XG4gICAgaS5zY3JvbGxiYXJYTGVmdCA9IGkucmFpbFhXaWR0aCAtIGkuc2Nyb2xsYmFyWFdpZHRoO1xuICB9XG4gIGlmIChpLnNjcm9sbGJhcllUb3AgPj0gaS5yYWlsWUhlaWdodCAtIGkuc2Nyb2xsYmFyWUhlaWdodCkge1xuICAgIGkuc2Nyb2xsYmFyWVRvcCA9IGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQ7XG4gIH1cblxuICB1cGRhdGVDc3MoZWxlbWVudCwgaSk7XG5cbiAgaWYgKGkuc2Nyb2xsYmFyWEFjdGl2ZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMuc3RhdGUuYWN0aXZlKCd4JykpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuYWN0aXZlKCd4JykpO1xuICAgIGkuc2Nyb2xsYmFyWFdpZHRoID0gMDtcbiAgICBpLnNjcm9sbGJhclhMZWZ0ID0gMDtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAwO1xuICB9XG4gIGlmIChpLnNjcm9sbGJhcllBY3RpdmUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzLnN0YXRlLmFjdGl2ZSgneScpKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xzLnN0YXRlLmFjdGl2ZSgneScpKTtcbiAgICBpLnNjcm9sbGJhcllIZWlnaHQgPSAwO1xuICAgIGkuc2Nyb2xsYmFyWVRvcCA9IDA7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRUaHVtYlNpemUoaSwgdGh1bWJTaXplKSB7XG4gIGlmIChpLnNldHRpbmdzLm1pblNjcm9sbGJhckxlbmd0aCkge1xuICAgIHRodW1iU2l6ZSA9IE1hdGgubWF4KHRodW1iU2l6ZSwgaS5zZXR0aW5ncy5taW5TY3JvbGxiYXJMZW5ndGgpO1xuICB9XG4gIGlmIChpLnNldHRpbmdzLm1heFNjcm9sbGJhckxlbmd0aCkge1xuICAgIHRodW1iU2l6ZSA9IE1hdGgubWluKHRodW1iU2l6ZSwgaS5zZXR0aW5ncy5tYXhTY3JvbGxiYXJMZW5ndGgpO1xuICB9XG4gIHJldHVybiB0aHVtYlNpemU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNzcyhlbGVtZW50LCBpKSB7XG4gIHZhciB4UmFpbE9mZnNldCA9IHsgd2lkdGg6IGkucmFpbFhXaWR0aCB9O1xuICB2YXIgcm91bmRlZFNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApO1xuXG4gIGlmIChpLmlzUnRsKSB7XG4gICAgeFJhaWxPZmZzZXQubGVmdCA9XG4gICAgICBpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCArXG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgK1xuICAgICAgaS5jb250YWluZXJXaWR0aCAtXG4gICAgICBpLmNvbnRlbnRXaWR0aDtcbiAgfSBlbHNlIHtcbiAgICB4UmFpbE9mZnNldC5sZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICB9XG4gIGlmIChpLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tKSB7XG4gICAgeFJhaWxPZmZzZXQuYm90dG9tID0gaS5zY3JvbGxiYXJYQm90dG9tIC0gcm91bmRlZFNjcm9sbFRvcDtcbiAgfSBlbHNlIHtcbiAgICB4UmFpbE9mZnNldC50b3AgPSBpLnNjcm9sbGJhclhUb3AgKyByb3VuZGVkU2Nyb2xsVG9wO1xuICB9XG4gIHNldChpLnNjcm9sbGJhclhSYWlsLCB4UmFpbE9mZnNldCk7XG5cbiAgdmFyIHlSYWlsT2Zmc2V0ID0geyB0b3A6IHJvdW5kZWRTY3JvbGxUb3AsIGhlaWdodDogaS5yYWlsWUhlaWdodCB9O1xuICBpZiAoaS5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0KSB7XG4gICAgaWYgKGkuaXNSdGwpIHtcbiAgICAgIHlSYWlsT2Zmc2V0LnJpZ2h0ID1cbiAgICAgICAgaS5jb250ZW50V2lkdGggLVxuICAgICAgICAoaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgKyBlbGVtZW50LnNjcm9sbExlZnQpIC1cbiAgICAgICAgaS5zY3JvbGxiYXJZUmlnaHQgLVxuICAgICAgICBpLnNjcm9sbGJhcllPdXRlcldpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB5UmFpbE9mZnNldC5yaWdodCA9IGkuc2Nyb2xsYmFyWVJpZ2h0IC0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaS5pc1J0bCkge1xuICAgICAgeVJhaWxPZmZzZXQubGVmdCA9XG4gICAgICAgIGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICtcbiAgICAgICAgaS5jb250YWluZXJXaWR0aCAqIDIgLVxuICAgICAgICBpLmNvbnRlbnRXaWR0aCAtXG4gICAgICAgIGkuc2Nyb2xsYmFyWUxlZnQgLVxuICAgICAgICBpLnNjcm9sbGJhcllPdXRlcldpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB5UmFpbE9mZnNldC5sZWZ0ID0gaS5zY3JvbGxiYXJZTGVmdCArIGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG4gIH1cbiAgc2V0KGkuc2Nyb2xsYmFyWVJhaWwsIHlSYWlsT2Zmc2V0KTtcblxuICBzZXQoaS5zY3JvbGxiYXJYLCB7XG4gICAgbGVmdDogaS5zY3JvbGxiYXJYTGVmdCxcbiAgICB3aWR0aDogaS5zY3JvbGxiYXJYV2lkdGggLSBpLnJhaWxCb3JkZXJYV2lkdGgsXG4gIH0pO1xuICBzZXQoaS5zY3JvbGxiYXJZLCB7XG4gICAgdG9wOiBpLnNjcm9sbGJhcllUb3AsXG4gICAgaGVpZ2h0OiBpLnNjcm9sbGJhcllIZWlnaHQgLSBpLnJhaWxCb3JkZXJZV2lkdGgsXG4gIH0pO1xufVxuXG52YXIgY2xpY2tSYWlsID0gZnVuY3Rpb24oaSkge1xuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJZLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuc3RvcFByb3BhZ2F0aW9uKCk7IH0pO1xuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJZUmFpbCwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHBvc2l0aW9uVG9wID1cbiAgICAgIGUucGFnZVkgLVxuICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0IC1cbiAgICAgIGkuc2Nyb2xsYmFyWVJhaWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIHZhciBkaXJlY3Rpb24gPSBwb3NpdGlvblRvcCA+IGkuc2Nyb2xsYmFyWVRvcCA/IDEgOiAtMTtcblxuICAgIGkuZWxlbWVudC5zY3JvbGxUb3AgKz0gZGlyZWN0aW9uICogaS5jb250YWluZXJIZWlnaHQ7XG4gICAgdXBkYXRlR2VvbWV0cnkoaSk7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcblxuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJYLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUuc3RvcFByb3BhZ2F0aW9uKCk7IH0pO1xuICBpLmV2ZW50LmJpbmQoaS5zY3JvbGxiYXJYUmFpbCwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHBvc2l0aW9uTGVmdCA9XG4gICAgICBlLnBhZ2VYIC1cbiAgICAgIHdpbmRvdy5wYWdlWE9mZnNldCAtXG4gICAgICBpLnNjcm9sbGJhclhSYWlsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgdmFyIGRpcmVjdGlvbiA9IHBvc2l0aW9uTGVmdCA+IGkuc2Nyb2xsYmFyWExlZnQgPyAxIDogLTE7XG5cbiAgICBpLmVsZW1lbnQuc2Nyb2xsTGVmdCArPSBkaXJlY3Rpb24gKiBpLmNvbnRhaW5lcldpZHRoO1xuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG59O1xuXG52YXIgZHJhZ1RodW1iID0gZnVuY3Rpb24oaSkge1xuICBiaW5kTW91c2VTY3JvbGxIYW5kbGVyKGksIFtcbiAgICAnY29udGFpbmVyV2lkdGgnLFxuICAgICdjb250ZW50V2lkdGgnLFxuICAgICdwYWdlWCcsXG4gICAgJ3JhaWxYV2lkdGgnLFxuICAgICdzY3JvbGxiYXJYJyxcbiAgICAnc2Nyb2xsYmFyWFdpZHRoJyxcbiAgICAnc2Nyb2xsTGVmdCcsXG4gICAgJ3gnLFxuICAgICdzY3JvbGxiYXJYUmFpbCcgXSk7XG4gIGJpbmRNb3VzZVNjcm9sbEhhbmRsZXIoaSwgW1xuICAgICdjb250YWluZXJIZWlnaHQnLFxuICAgICdjb250ZW50SGVpZ2h0JyxcbiAgICAncGFnZVknLFxuICAgICdyYWlsWUhlaWdodCcsXG4gICAgJ3Njcm9sbGJhclknLFxuICAgICdzY3JvbGxiYXJZSGVpZ2h0JyxcbiAgICAnc2Nyb2xsVG9wJyxcbiAgICAneScsXG4gICAgJ3Njcm9sbGJhcllSYWlsJyBdKTtcbn07XG5cbmZ1bmN0aW9uIGJpbmRNb3VzZVNjcm9sbEhhbmRsZXIoXG4gIGksXG4gIHJlZlxuKSB7XG4gIHZhciBjb250YWluZXJIZWlnaHQgPSByZWZbMF07XG4gIHZhciBjb250ZW50SGVpZ2h0ID0gcmVmWzFdO1xuICB2YXIgcGFnZVkgPSByZWZbMl07XG4gIHZhciByYWlsWUhlaWdodCA9IHJlZlszXTtcbiAgdmFyIHNjcm9sbGJhclkgPSByZWZbNF07XG4gIHZhciBzY3JvbGxiYXJZSGVpZ2h0ID0gcmVmWzVdO1xuICB2YXIgc2Nyb2xsVG9wID0gcmVmWzZdO1xuICB2YXIgeSA9IHJlZls3XTtcbiAgdmFyIHNjcm9sbGJhcllSYWlsID0gcmVmWzhdO1xuXG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIHZhciBzdGFydGluZ1Njcm9sbFRvcCA9IG51bGw7XG4gIHZhciBzdGFydGluZ01vdXNlUGFnZVkgPSBudWxsO1xuICB2YXIgc2Nyb2xsQnkgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZSkge1xuICAgIGVsZW1lbnRbc2Nyb2xsVG9wXSA9XG4gICAgICBzdGFydGluZ1Njcm9sbFRvcCArIHNjcm9sbEJ5ICogKGVbcGFnZVldIC0gc3RhcnRpbmdNb3VzZVBhZ2VZKTtcbiAgICBhZGRTY3JvbGxpbmdDbGFzcyhpLCB5KTtcbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoKSB7XG4gICAgcmVtb3ZlU2Nyb2xsaW5nQ2xhc3MoaSwgeSk7XG4gICAgaVtzY3JvbGxiYXJZUmFpbF0uY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuY2xpY2tpbmcpO1xuICAgIGkuZXZlbnQudW5iaW5kKGkub3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgaS5ldmVudC5iaW5kKGlbc2Nyb2xsYmFyWV0sICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIHN0YXJ0aW5nU2Nyb2xsVG9wID0gZWxlbWVudFtzY3JvbGxUb3BdO1xuICAgIHN0YXJ0aW5nTW91c2VQYWdlWSA9IGVbcGFnZVldO1xuICAgIHNjcm9sbEJ5ID1cbiAgICAgIChpW2NvbnRlbnRIZWlnaHRdIC0gaVtjb250YWluZXJIZWlnaHRdKSAvXG4gICAgICAoaVtyYWlsWUhlaWdodF0gLSBpW3Njcm9sbGJhcllIZWlnaHRdKTtcblxuICAgIGkuZXZlbnQuYmluZChpLm93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgICBpLmV2ZW50Lm9uY2UoaS5vd25lckRvY3VtZW50LCAnbW91c2V1cCcsIG1vdXNlVXBIYW5kbGVyKTtcblxuICAgIGlbc2Nyb2xsYmFyWVJhaWxdLmNsYXNzTGlzdC5hZGQoY2xzLnN0YXRlLmNsaWNraW5nKTtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbn1cblxudmFyIGtleWJvYXJkID0gZnVuY3Rpb24oaSkge1xuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcblxuICB2YXIgZWxlbWVudEhvdmVyZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtYXRjaGVzKGVsZW1lbnQsICc6aG92ZXInKTsgfTtcbiAgdmFyIHNjcm9sbGJhckZvY3VzZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtYXRjaGVzKGkuc2Nyb2xsYmFyWCwgJzpmb2N1cycpIHx8IG1hdGNoZXMoaS5zY3JvbGxiYXJZLCAnOmZvY3VzJyk7IH07XG5cbiAgZnVuY3Rpb24gc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICB2YXIgc2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7XG4gICAgaWYgKGRlbHRhWCA9PT0gMCkge1xuICAgICAgaWYgKCFpLnNjcm9sbGJhcllBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoc2Nyb2xsVG9wID09PSAwICYmIGRlbHRhWSA+IDApIHx8XG4gICAgICAgIChzY3JvbGxUb3AgPj0gaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQgJiYgZGVsdGFZIDwgMClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gIWkuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICBpZiAoZGVsdGFZID09PSAwKSB7XG4gICAgICBpZiAoIWkuc2Nyb2xsYmFyWEFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIChzY3JvbGxMZWZ0ID09PSAwICYmIGRlbHRhWCA8IDApIHx8XG4gICAgICAgIChzY3JvbGxMZWZ0ID49IGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aCAmJiBkZWx0YVggPiAwKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAhaS5zZXR0aW5ncy53aGVlbFByb3BhZ2F0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGkuZXZlbnQuYmluZChpLm93bmVyRG9jdW1lbnQsICdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoXG4gICAgICAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQgJiYgZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgfHxcbiAgICAgIGUuZGVmYXVsdFByZXZlbnRlZFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghZWxlbWVudEhvdmVyZWQoKSAmJiAhc2Nyb2xsYmFyRm9jdXNlZCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgIDogaS5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGlmIChhY3RpdmVFbGVtZW50LnRhZ05hbWUgPT09ICdJRlJBTUUnKSB7XG4gICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50LmNvbnRlbnREb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZ28gZGVlcGVyIGlmIGVsZW1lbnQgaXMgYSB3ZWJjb21wb25lbnRcbiAgICAgICAgd2hpbGUgKGFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCkge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQgPSBhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGlzRWRpdGFibGUoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkZWx0YVggPSAwO1xuICAgIHZhciBkZWx0YVkgPSAwO1xuXG4gICAgc3dpdGNoIChlLndoaWNoKSB7XG4gICAgICBjYXNlIDM3OiAvLyBsZWZ0XG4gICAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgICBkZWx0YVggPSAtaS5jb250ZW50V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICBkZWx0YVggPSAtaS5jb250YWluZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWx0YVggPSAtMzA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM4OiAvLyB1cFxuICAgICAgICBpZiAoZS5tZXRhS2V5KSB7XG4gICAgICAgICAgZGVsdGFZID0gaS5jb250ZW50SGVpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgZGVsdGFZID0gaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFZID0gMzA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM5OiAvLyByaWdodFxuICAgICAgICBpZiAoZS5tZXRhS2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gaS5jb250ZW50V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICBkZWx0YVggPSBpLmNvbnRhaW5lcldpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbHRhWCA9IDMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0MDogLy8gZG93blxuICAgICAgICBpZiAoZS5tZXRhS2V5KSB7XG4gICAgICAgICAgZGVsdGFZID0gLWkuY29udGVudEhlaWdodDtcbiAgICAgICAgfSBlbHNlIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IC1pLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWx0YVkgPSAtMzA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDMyOiAvLyBzcGFjZSBiYXJcbiAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICBkZWx0YVkgPSBpLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWx0YVkgPSAtaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDMzOiAvLyBwYWdlIHVwXG4gICAgICAgIGRlbHRhWSA9IGkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzQ6IC8vIHBhZ2UgZG93blxuICAgICAgICBkZWx0YVkgPSAtaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzNjogLy8gaG9tZVxuICAgICAgICBkZWx0YVkgPSBpLmNvbnRlbnRIZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzNTogLy8gZW5kXG4gICAgICAgIGRlbHRhWSA9IC1pLmNvbnRlbnRIZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWCAmJiBkZWx0YVggIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGkuc2V0dGluZ3Muc3VwcHJlc3NTY3JvbGxZICYmIGRlbHRhWSAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuc2Nyb2xsVG9wIC09IGRlbHRhWTtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgKz0gZGVsdGFYO1xuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgaWYgKHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgd2hlZWwgPSBmdW5jdGlvbihpKSB7XG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgdmFyIHJvdW5kZWRTY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTtcbiAgICB2YXIgaXNUb3AgPSBlbGVtZW50LnNjcm9sbFRvcCA9PT0gMDtcbiAgICB2YXIgaXNCb3R0b20gPVxuICAgICAgcm91bmRlZFNjcm9sbFRvcCArIGVsZW1lbnQub2Zmc2V0SGVpZ2h0ID09PSBlbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgICB2YXIgaXNMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0ID09PSAwO1xuICAgIHZhciBpc1JpZ2h0ID1cbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArIGVsZW1lbnQub2Zmc2V0V2lkdGggPT09IGVsZW1lbnQuc2Nyb2xsV2lkdGg7XG5cbiAgICB2YXIgaGl0c0JvdW5kO1xuXG4gICAgLy8gcGljayBheGlzIHdpdGggcHJpbWFyeSBkaXJlY3Rpb25cbiAgICBpZiAoTWF0aC5hYnMoZGVsdGFZKSA+IE1hdGguYWJzKGRlbHRhWCkpIHtcbiAgICAgIGhpdHNCb3VuZCA9IGlzVG9wIHx8IGlzQm90dG9tO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaXRzQm91bmQgPSBpc0xlZnQgfHwgaXNSaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4gaGl0c0JvdW5kID8gIWkuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbiA6IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREZWx0YUZyb21FdmVudChlKSB7XG4gICAgdmFyIGRlbHRhWCA9IGUuZGVsdGFYO1xuICAgIHZhciBkZWx0YVkgPSAtMSAqIGUuZGVsdGFZO1xuXG4gICAgaWYgKHR5cGVvZiBkZWx0YVggPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkZWx0YVkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBPUyBYIFNhZmFyaVxuICAgICAgZGVsdGFYID0gLTEgKiBlLndoZWVsRGVsdGFYIC8gNjtcbiAgICAgIGRlbHRhWSA9IGUud2hlZWxEZWx0YVkgLyA2O1xuICAgIH1cblxuICAgIGlmIChlLmRlbHRhTW9kZSAmJiBlLmRlbHRhTW9kZSA9PT0gMSkge1xuICAgICAgLy8gRmlyZWZveCBpbiBkZWx0YU1vZGUgMTogTGluZSBzY3JvbGxpbmdcbiAgICAgIGRlbHRhWCAqPSAxMDtcbiAgICAgIGRlbHRhWSAqPSAxMDtcbiAgICB9XG5cbiAgICBpZiAoZGVsdGFYICE9PSBkZWx0YVggJiYgZGVsdGFZICE9PSBkZWx0YVkgLyogTmFOIGNoZWNrcyAqLykge1xuICAgICAgLy8gSUUgaW4gc29tZSBtb3VzZSBkcml2ZXJzXG4gICAgICBkZWx0YVggPSAwO1xuICAgICAgZGVsdGFZID0gZS53aGVlbERlbHRhO1xuICAgIH1cblxuICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAvLyByZXZlcnNlIGF4aXMgd2l0aCBzaGlmdCBrZXlcbiAgICAgIHJldHVybiBbLWRlbHRhWSwgLWRlbHRhWF07XG4gICAgfVxuICAgIHJldHVybiBbZGVsdGFYLCBkZWx0YVldO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkQmVDb25zdW1lZEJ5Q2hpbGQodGFyZ2V0LCBkZWx0YVgsIGRlbHRhWSkge1xuICAgIC8vIEZJWE1FOiB0aGlzIGlzIGEgd29ya2Fyb3VuZCBmb3IgPHNlbGVjdD4gaXNzdWUgaW4gRkYgYW5kIElFICM1NzFcbiAgICBpZiAoIWVudi5pc1dlYktpdCAmJiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdDpmb2N1cycpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWVsZW1lbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjdXJzb3IgPSB0YXJnZXQ7XG5cbiAgICB3aGlsZSAoY3Vyc29yICYmIGN1cnNvciAhPT0gZWxlbWVudCkge1xuICAgICAgaWYgKGN1cnNvci5jbGFzc0xpc3QuY29udGFpbnMoY2xzLmVsZW1lbnQuY29uc3VtaW5nKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0eWxlID0gZ2V0KGN1cnNvcik7XG4gICAgICB2YXIgb3ZlcmZsb3cgPSBbc3R5bGUub3ZlcmZsb3csIHN0eWxlLm92ZXJmbG93WCwgc3R5bGUub3ZlcmZsb3dZXS5qb2luKFxuICAgICAgICAnJ1xuICAgICAgKTtcblxuICAgICAgLy8gaWYgc2Nyb2xsYWJsZVxuICAgICAgaWYgKG92ZXJmbG93Lm1hdGNoKC8oc2Nyb2xsfGF1dG8pLykpIHtcbiAgICAgICAgdmFyIG1heFNjcm9sbFRvcCA9IGN1cnNvci5zY3JvbGxIZWlnaHQgLSBjdXJzb3IuY2xpZW50SGVpZ2h0O1xuICAgICAgICBpZiAobWF4U2Nyb2xsVG9wID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbFRvcCA9PT0gMCAmJiBkZWx0YVkgPiAwKSAmJlxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsVG9wID09PSBtYXhTY3JvbGxUb3AgJiYgZGVsdGFZIDwgMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF4U2Nyb2xsTGVmdCA9IGN1cnNvci5zY3JvbGxXaWR0aCAtIGN1cnNvci5jbGllbnRXaWR0aDtcbiAgICAgICAgaWYgKG1heFNjcm9sbExlZnQgPiAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsTGVmdCA9PT0gMCAmJiBkZWx0YVggPCAwKSAmJlxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsTGVmdCA9PT0gbWF4U2Nyb2xsTGVmdCAmJiBkZWx0YVggPiAwKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnNvciA9IGN1cnNvci5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNld2hlZWxIYW5kbGVyKGUpIHtcbiAgICB2YXIgcmVmID0gZ2V0RGVsdGFGcm9tRXZlbnQoZSk7XG4gICAgdmFyIGRlbHRhWCA9IHJlZlswXTtcbiAgICB2YXIgZGVsdGFZID0gcmVmWzFdO1xuXG4gICAgaWYgKHNob3VsZEJlQ29uc3VtZWRCeUNoaWxkKGUudGFyZ2V0LCBkZWx0YVgsIGRlbHRhWSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2hvdWxkUHJldmVudCA9IGZhbHNlO1xuICAgIGlmICghaS5zZXR0aW5ncy51c2VCb3RoV2hlZWxBeGVzKSB7XG4gICAgICAvLyBkZWx0YVggd2lsbCBvbmx5IGJlIHVzZWQgZm9yIGhvcml6b250YWwgc2Nyb2xsaW5nIGFuZCBkZWx0YVkgd2lsbFxuICAgICAgLy8gb25seSBiZSB1c2VkIGZvciB2ZXJ0aWNhbCBzY3JvbGxpbmcgLSB0aGlzIGlzIHRoZSBkZWZhdWx0XG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCAtPSBkZWx0YVkgKiBpLnNldHRpbmdzLndoZWVsU3BlZWQ7XG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgKz0gZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgIH0gZWxzZSBpZiAoaS5zY3JvbGxiYXJZQWN0aXZlICYmICFpLnNjcm9sbGJhclhBY3RpdmUpIHtcbiAgICAgIC8vIG9ubHkgdmVydGljYWwgc2Nyb2xsYmFyIGlzIGFjdGl2ZSBhbmQgdXNlQm90aFdoZWVsQXhlcyBvcHRpb24gaXNcbiAgICAgIC8vIGFjdGl2ZSwgc28gbGV0J3Mgc2Nyb2xsIHZlcnRpY2FsIGJhciB1c2luZyBib3RoIG1vdXNlIHdoZWVsIGF4ZXNcbiAgICAgIGlmIChkZWx0YVkpIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgLT0gZGVsdGFZICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxUb3AgKz0gZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgfVxuICAgICAgc2hvdWxkUHJldmVudCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChpLnNjcm9sbGJhclhBY3RpdmUgJiYgIWkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xuICAgICAgLy8gdXNlQm90aFdoZWVsQXhlcyBhbmQgb25seSBob3Jpem9udGFsIGJhciBpcyBhY3RpdmUsIHNvIHVzZSBib3RoXG4gICAgICAvLyB3aGVlbCBheGVzIGZvciBob3Jpem9udGFsIGJhclxuICAgICAgaWYgKGRlbHRhWCkge1xuICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgKz0gZGVsdGFYICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0IC09IGRlbHRhWSAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICAgIH1cbiAgICAgIHNob3VsZFByZXZlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgc2hvdWxkUHJldmVudCA9IHNob3VsZFByZXZlbnQgfHwgc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpO1xuICAgIGlmIChzaG91bGRQcmV2ZW50ICYmICFlLmN0cmxLZXkpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cub253aGVlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3doZWVsJywgbW91c2V3aGVlbEhhbmRsZXIpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cub25tb3VzZXdoZWVsICE9PSAndW5kZWZpbmVkJykge1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnbW91c2V3aGVlbCcsIG1vdXNld2hlZWxIYW5kbGVyKTtcbiAgfVxufTtcblxudmFyIHRvdWNoID0gZnVuY3Rpb24oaSkge1xuICBpZiAoIWVudi5zdXBwb3J0c1RvdWNoICYmICFlbnYuc3VwcG9ydHNJZVBvaW50ZXIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcblxuICBmdW5jdGlvbiBzaG91bGRQcmV2ZW50KGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgdmFyIHNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApO1xuICAgIHZhciBzY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIHZhciBtYWduaXR1ZGVYID0gTWF0aC5hYnMoZGVsdGFYKTtcbiAgICB2YXIgbWFnbml0dWRlWSA9IE1hdGguYWJzKGRlbHRhWSk7XG5cbiAgICBpZiAobWFnbml0dWRlWSA+IG1hZ25pdHVkZVgpIHtcbiAgICAgIC8vIHVzZXIgaXMgcGVyaGFwcyB0cnlpbmcgdG8gc3dpcGUgdXAvZG93biB0aGUgcGFnZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChkZWx0YVkgPCAwICYmIHNjcm9sbFRvcCA9PT0gaS5jb250ZW50SGVpZ2h0IC0gaS5jb250YWluZXJIZWlnaHQpIHx8XG4gICAgICAgIChkZWx0YVkgPiAwICYmIHNjcm9sbFRvcCA9PT0gMClcbiAgICAgICkge1xuICAgICAgICAvLyBzZXQgcHJldmVudCBmb3IgbW9iaWxlIENocm9tZSByZWZyZXNoXG4gICAgICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsWSA9PT0gMCAmJiBkZWx0YVkgPiAwICYmIGVudi5pc0Nocm9tZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG1hZ25pdHVkZVggPiBtYWduaXR1ZGVZKSB7XG4gICAgICAvLyB1c2VyIGlzIHBlcmhhcHMgdHJ5aW5nIHRvIHN3aXBlIGxlZnQvcmlnaHQgYWNyb3NzIHRoZSBwYWdlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKGRlbHRhWCA8IDAgJiYgc2Nyb2xsTGVmdCA9PT0gaS5jb250ZW50V2lkdGggLSBpLmNvbnRhaW5lcldpZHRoKSB8fFxuICAgICAgICAoZGVsdGFYID4gMCAmJiBzY3JvbGxMZWZ0ID09PSAwKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlUb3VjaE1vdmUoZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKSB7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgLT0gZGlmZmVyZW5jZVk7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0IC09IGRpZmZlcmVuY2VYO1xuXG4gICAgdXBkYXRlR2VvbWV0cnkoaSk7XG4gIH1cblxuICB2YXIgc3RhcnRPZmZzZXQgPSB7fTtcbiAgdmFyIHN0YXJ0VGltZSA9IDA7XG4gIHZhciBzcGVlZCA9IHt9O1xuICB2YXIgZWFzaW5nTG9vcCA9IG51bGw7XG5cbiAgZnVuY3Rpb24gZ2V0VG91Y2goZSkge1xuICAgIGlmIChlLnRhcmdldFRvdWNoZXMpIHtcbiAgICAgIHJldHVybiBlLnRhcmdldFRvdWNoZXNbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE1heWJlIElFIHBvaW50ZXJcbiAgICAgIHJldHVybiBlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEhhbmRsZShlKSB7XG4gICAgaWYgKGUucG9pbnRlclR5cGUgJiYgZS5wb2ludGVyVHlwZSA9PT0gJ3BlbicgJiYgZS5idXR0b25zID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGUucG9pbnRlclR5cGUgJiZcbiAgICAgIGUucG9pbnRlclR5cGUgIT09ICdtb3VzZScgJiZcbiAgICAgIGUucG9pbnRlclR5cGUgIT09IGUuTVNQT0lOVEVSX1RZUEVfTU9VU0VcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaFN0YXJ0KGUpIHtcbiAgICBpZiAoIXNob3VsZEhhbmRsZShlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0b3VjaCA9IGdldFRvdWNoKGUpO1xuXG4gICAgc3RhcnRPZmZzZXQucGFnZVggPSB0b3VjaC5wYWdlWDtcbiAgICBzdGFydE9mZnNldC5wYWdlWSA9IHRvdWNoLnBhZ2VZO1xuXG4gICAgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICBpZiAoZWFzaW5nTG9vcCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRCZUNvbnN1bWVkQnlDaGlsZCh0YXJnZXQsIGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY3Vyc29yID0gdGFyZ2V0O1xuXG4gICAgd2hpbGUgKGN1cnNvciAmJiBjdXJzb3IgIT09IGVsZW1lbnQpIHtcbiAgICAgIGlmIChjdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKGNscy5lbGVtZW50LmNvbnN1bWluZykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdHlsZSA9IGdldChjdXJzb3IpO1xuICAgICAgdmFyIG92ZXJmbG93ID0gW3N0eWxlLm92ZXJmbG93LCBzdHlsZS5vdmVyZmxvd1gsIHN0eWxlLm92ZXJmbG93WV0uam9pbihcbiAgICAgICAgJydcbiAgICAgICk7XG5cbiAgICAgIC8vIGlmIHNjcm9sbGFibGVcbiAgICAgIGlmIChvdmVyZmxvdy5tYXRjaCgvKHNjcm9sbHxhdXRvKS8pKSB7XG4gICAgICAgIHZhciBtYXhTY3JvbGxUb3AgPSBjdXJzb3Iuc2Nyb2xsSGVpZ2h0IC0gY3Vyc29yLmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKG1heFNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxUb3AgPT09IDAgJiYgZGVsdGFZID4gMCkgJiZcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbFRvcCA9PT0gbWF4U2Nyb2xsVG9wICYmIGRlbHRhWSA8IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heFNjcm9sbExlZnQgPSBjdXJzb3Iuc2Nyb2xsTGVmdCAtIGN1cnNvci5jbGllbnRXaWR0aDtcbiAgICAgICAgaWYgKG1heFNjcm9sbExlZnQgPiAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsTGVmdCA9PT0gMCAmJiBkZWx0YVggPCAwKSAmJlxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsTGVmdCA9PT0gbWF4U2Nyb2xsTGVmdCAmJiBkZWx0YVggPiAwKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnNvciA9IGN1cnNvci5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdWNoTW92ZShlKSB7XG4gICAgaWYgKHNob3VsZEhhbmRsZShlKSkge1xuICAgICAgdmFyIHRvdWNoID0gZ2V0VG91Y2goZSk7XG5cbiAgICAgIHZhciBjdXJyZW50T2Zmc2V0ID0geyBwYWdlWDogdG91Y2gucGFnZVgsIHBhZ2VZOiB0b3VjaC5wYWdlWSB9O1xuXG4gICAgICB2YXIgZGlmZmVyZW5jZVggPSBjdXJyZW50T2Zmc2V0LnBhZ2VYIC0gc3RhcnRPZmZzZXQucGFnZVg7XG4gICAgICB2YXIgZGlmZmVyZW5jZVkgPSBjdXJyZW50T2Zmc2V0LnBhZ2VZIC0gc3RhcnRPZmZzZXQucGFnZVk7XG5cbiAgICAgIGlmIChzaG91bGRCZUNvbnN1bWVkQnlDaGlsZChlLnRhcmdldCwgZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwcGx5VG91Y2hNb3ZlKGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSk7XG4gICAgICBzdGFydE9mZnNldCA9IGN1cnJlbnRPZmZzZXQ7XG5cbiAgICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICB2YXIgdGltZUdhcCA9IGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lO1xuICAgICAgaWYgKHRpbWVHYXAgPiAwKSB7XG4gICAgICAgIHNwZWVkLnggPSBkaWZmZXJlbmNlWCAvIHRpbWVHYXA7XG4gICAgICAgIHNwZWVkLnkgPSBkaWZmZXJlbmNlWSAvIHRpbWVHYXA7XG4gICAgICAgIHN0YXJ0VGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hvdWxkUHJldmVudChkaWZmZXJlbmNlWCwgZGlmZmVyZW5jZVkpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gdG91Y2hFbmQoKSB7XG4gICAgaWYgKGkuc2V0dGluZ3Muc3dpcGVFYXNpbmcpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoZWFzaW5nTG9vcCk7XG4gICAgICBlYXNpbmdMb29wID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChpLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3BlZWQueCAmJiAhc3BlZWQueSkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZWFzaW5nTG9vcCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHNwZWVkLngpIDwgMC4wMSAmJiBNYXRoLmFicyhzcGVlZC55KSA8IDAuMDEpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcGx5VG91Y2hNb3ZlKHNwZWVkLnggKiAzMCwgc3BlZWQueSAqIDMwKTtcblxuICAgICAgICBzcGVlZC54ICo9IDAuODtcbiAgICAgICAgc3BlZWQueSAqPSAwLjg7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVudi5zdXBwb3J0c1RvdWNoKSB7XG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICd0b3VjaHN0YXJ0JywgdG91Y2hTdGFydCk7XG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICd0b3VjaG1vdmUnLCB0b3VjaE1vdmUpO1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAndG91Y2hlbmQnLCB0b3VjaEVuZCk7XG4gIH0gZWxzZSBpZiAoZW52LnN1cHBvcnRzSWVQb2ludGVyKSB7XG4gICAgaWYgKHdpbmRvdy5Qb2ludGVyRXZlbnQpIHtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAncG9pbnRlcmRvd24nLCB0b3VjaFN0YXJ0KTtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAncG9pbnRlcm1vdmUnLCB0b3VjaE1vdmUpO1xuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdwb2ludGVydXAnLCB0b3VjaEVuZCk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cuTVNQb2ludGVyRXZlbnQpIHtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnTVNQb2ludGVyRG93bicsIHRvdWNoU3RhcnQpO1xuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdNU1BvaW50ZXJNb3ZlJywgdG91Y2hNb3ZlKTtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnTVNQb2ludGVyVXAnLCB0b3VjaEVuZCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgZGVmYXVsdFNldHRpbmdzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgaGFuZGxlcnM6IFsnY2xpY2stcmFpbCcsICdkcmFnLXRodW1iJywgJ2tleWJvYXJkJywgJ3doZWVsJywgJ3RvdWNoJ10sXG4gIG1heFNjcm9sbGJhckxlbmd0aDogbnVsbCxcbiAgbWluU2Nyb2xsYmFyTGVuZ3RoOiBudWxsLFxuICBzY3JvbGxpbmdUaHJlc2hvbGQ6IDEwMDAsXG4gIHNjcm9sbFhNYXJnaW5PZmZzZXQ6IDAsXG4gIHNjcm9sbFlNYXJnaW5PZmZzZXQ6IDAsXG4gIHN1cHByZXNzU2Nyb2xsWDogZmFsc2UsXG4gIHN1cHByZXNzU2Nyb2xsWTogZmFsc2UsXG4gIHN3aXBlRWFzaW5nOiB0cnVlLFxuICB1c2VCb3RoV2hlZWxBeGVzOiBmYWxzZSxcbiAgd2hlZWxQcm9wYWdhdGlvbjogdHJ1ZSxcbiAgd2hlZWxTcGVlZDogMSxcbn0pOyB9O1xuXG52YXIgaGFuZGxlcnMgPSB7XG4gICdjbGljay1yYWlsJzogY2xpY2tSYWlsLFxuICAnZHJhZy10aHVtYic6IGRyYWdUaHVtYixcbiAga2V5Ym9hcmQ6IGtleWJvYXJkLFxuICB3aGVlbDogd2hlZWwsXG4gIHRvdWNoOiB0b3VjaCxcbn07XG5cbnZhciBQZXJmZWN0U2Nyb2xsYmFyID0gZnVuY3Rpb24gUGVyZmVjdFNjcm9sbGJhcihlbGVtZW50LCB1c2VyU2V0dGluZ3MpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gIGlmICggdXNlclNldHRpbmdzID09PSB2b2lkIDAgKSB1c2VyU2V0dGluZ3MgPSB7fTtcblxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG4gIH1cblxuICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQubm9kZU5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGVsZW1lbnQgaXMgc3BlY2lmaWVkIHRvIGluaXRpYWxpemUgUGVyZmVjdFNjcm9sbGJhcicpO1xuICB9XG5cbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzLm1haW4pO1xuXG4gIHRoaXMuc2V0dGluZ3MgPSBkZWZhdWx0U2V0dGluZ3MoKTtcbiAgZm9yICh2YXIga2V5IGluIHVzZXJTZXR0aW5ncykge1xuICAgIHRoaXMkMS5zZXR0aW5nc1trZXldID0gdXNlclNldHRpbmdzW2tleV07XG4gIH1cblxuICB0aGlzLmNvbnRhaW5lcldpZHRoID0gbnVsbDtcbiAgdGhpcy5jb250YWluZXJIZWlnaHQgPSBudWxsO1xuICB0aGlzLmNvbnRlbnRXaWR0aCA9IG51bGw7XG4gIHRoaXMuY29udGVudEhlaWdodCA9IG51bGw7XG5cbiAgdmFyIGZvY3VzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscy5zdGF0ZS5mb2N1cyk7IH07XG4gIHZhciBibHVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5mb2N1cyk7IH07XG5cbiAgdGhpcy5pc1J0bCA9IGdldChlbGVtZW50KS5kaXJlY3Rpb24gPT09ICdydGwnO1xuICB0aGlzLmlzTmVnYXRpdmVTY3JvbGwgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcmlnaW5hbFNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gLTE7XG4gICAgcmVzdWx0ID0gZWxlbWVudC5zY3JvbGxMZWZ0IDwgMDtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBvcmlnaW5hbFNjcm9sbExlZnQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSkoKTtcbiAgdGhpcy5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgPSB0aGlzLmlzTmVnYXRpdmVTY3JvbGxcbiAgICA/IGVsZW1lbnQuc2Nyb2xsV2lkdGggLSBlbGVtZW50LmNsaWVudFdpZHRoXG4gICAgOiAwO1xuICB0aGlzLmV2ZW50ID0gbmV3IEV2ZW50TWFuYWdlcigpO1xuICB0aGlzLm93bmVyRG9jdW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG5cbiAgdGhpcy5zY3JvbGxiYXJYUmFpbCA9IGRpdihjbHMuZWxlbWVudC5yYWlsKCd4JykpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsYmFyWFJhaWwpO1xuICB0aGlzLnNjcm9sbGJhclggPSBkaXYoY2xzLmVsZW1lbnQudGh1bWIoJ3gnKSk7XG4gIHRoaXMuc2Nyb2xsYmFyWFJhaWwuYXBwZW5kQ2hpbGQodGhpcy5zY3JvbGxiYXJYKTtcbiAgdGhpcy5zY3JvbGxiYXJYLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuc2Nyb2xsYmFyWCwgJ2ZvY3VzJywgZm9jdXMpO1xuICB0aGlzLmV2ZW50LmJpbmQodGhpcy5zY3JvbGxiYXJYLCAnYmx1cicsIGJsdXIpO1xuICB0aGlzLnNjcm9sbGJhclhBY3RpdmUgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclhXaWR0aCA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWExlZnQgPSBudWxsO1xuICB2YXIgcmFpbFhTdHlsZSA9IGdldCh0aGlzLnNjcm9sbGJhclhSYWlsKTtcbiAgdGhpcy5zY3JvbGxiYXJYQm90dG9tID0gcGFyc2VJbnQocmFpbFhTdHlsZS5ib3R0b20sIDEwKTtcbiAgaWYgKGlzTmFOKHRoaXMuc2Nyb2xsYmFyWEJvdHRvbSkpIHtcbiAgICB0aGlzLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tID0gZmFsc2U7XG4gICAgdGhpcy5zY3JvbGxiYXJYVG9wID0gdG9JbnQocmFpbFhTdHlsZS50b3ApO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaXNTY3JvbGxiYXJYVXNpbmdCb3R0b20gPSB0cnVlO1xuICB9XG4gIHRoaXMucmFpbEJvcmRlclhXaWR0aCA9XG4gICAgdG9JbnQocmFpbFhTdHlsZS5ib3JkZXJMZWZ0V2lkdGgpICsgdG9JbnQocmFpbFhTdHlsZS5ib3JkZXJSaWdodFdpZHRoKTtcbiAgLy8gU2V0IHJhaWwgdG8gZGlzcGxheTpibG9jayB0byBjYWxjdWxhdGUgbWFyZ2luc1xuICBzZXQodGhpcy5zY3JvbGxiYXJYUmFpbCwgeyBkaXNwbGF5OiAnYmxvY2snIH0pO1xuICB0aGlzLnJhaWxYTWFyZ2luV2lkdGggPVxuICAgIHRvSW50KHJhaWxYU3R5bGUubWFyZ2luTGVmdCkgKyB0b0ludChyYWlsWFN0eWxlLm1hcmdpblJpZ2h0KTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJycgfSk7XG4gIHRoaXMucmFpbFhXaWR0aCA9IG51bGw7XG4gIHRoaXMucmFpbFhSYXRpbyA9IG51bGw7XG5cbiAgdGhpcy5zY3JvbGxiYXJZUmFpbCA9IGRpdihjbHMuZWxlbWVudC5yYWlsKCd5JykpO1xuICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsYmFyWVJhaWwpO1xuICB0aGlzLnNjcm9sbGJhclkgPSBkaXYoY2xzLmVsZW1lbnQudGh1bWIoJ3knKSk7XG4gIHRoaXMuc2Nyb2xsYmFyWVJhaWwuYXBwZW5kQ2hpbGQodGhpcy5zY3JvbGxiYXJZKTtcbiAgdGhpcy5zY3JvbGxiYXJZLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuc2Nyb2xsYmFyWSwgJ2ZvY3VzJywgZm9jdXMpO1xuICB0aGlzLmV2ZW50LmJpbmQodGhpcy5zY3JvbGxiYXJZLCAnYmx1cicsIGJsdXIpO1xuICB0aGlzLnNjcm9sbGJhcllBY3RpdmUgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhcllIZWlnaHQgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhcllUb3AgPSBudWxsO1xuICB2YXIgcmFpbFlTdHlsZSA9IGdldCh0aGlzLnNjcm9sbGJhcllSYWlsKTtcbiAgdGhpcy5zY3JvbGxiYXJZUmlnaHQgPSBwYXJzZUludChyYWlsWVN0eWxlLnJpZ2h0LCAxMCk7XG4gIGlmIChpc05hTih0aGlzLnNjcm9sbGJhcllSaWdodCkpIHtcbiAgICB0aGlzLmlzU2Nyb2xsYmFyWVVzaW5nUmlnaHQgPSBmYWxzZTtcbiAgICB0aGlzLnNjcm9sbGJhcllMZWZ0ID0gdG9JbnQocmFpbFlTdHlsZS5sZWZ0KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmlzU2Nyb2xsYmFyWVVzaW5nUmlnaHQgPSB0cnVlO1xuICB9XG4gIHRoaXMuc2Nyb2xsYmFyWU91dGVyV2lkdGggPSB0aGlzLmlzUnRsID8gb3V0ZXJXaWR0aCh0aGlzLnNjcm9sbGJhclkpIDogbnVsbDtcbiAgdGhpcy5yYWlsQm9yZGVyWVdpZHRoID1cbiAgICB0b0ludChyYWlsWVN0eWxlLmJvcmRlclRvcFdpZHRoKSArIHRvSW50KHJhaWxZU3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnYmxvY2snIH0pO1xuICB0aGlzLnJhaWxZTWFyZ2luSGVpZ2h0ID1cbiAgICB0b0ludChyYWlsWVN0eWxlLm1hcmdpblRvcCkgKyB0b0ludChyYWlsWVN0eWxlLm1hcmdpbkJvdHRvbSk7XG4gIHNldCh0aGlzLnNjcm9sbGJhcllSYWlsLCB7IGRpc3BsYXk6ICcnIH0pO1xuICB0aGlzLnJhaWxZSGVpZ2h0ID0gbnVsbDtcbiAgdGhpcy5yYWlsWVJhdGlvID0gbnVsbDtcblxuICB0aGlzLnJlYWNoID0ge1xuICAgIHg6XG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgPD0gMFxuICAgICAgICA/ICdzdGFydCdcbiAgICAgICAgOiBlbGVtZW50LnNjcm9sbExlZnQgPj0gdGhpcy5jb250ZW50V2lkdGggLSB0aGlzLmNvbnRhaW5lcldpZHRoXG4gICAgICAgICAgPyAnZW5kJ1xuICAgICAgICAgIDogbnVsbCxcbiAgICB5OlxuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPD0gMFxuICAgICAgICA/ICdzdGFydCdcbiAgICAgICAgOiBlbGVtZW50LnNjcm9sbFRvcCA+PSB0aGlzLmNvbnRlbnRIZWlnaHQgLSB0aGlzLmNvbnRhaW5lckhlaWdodFxuICAgICAgICAgID8gJ2VuZCdcbiAgICAgICAgICA6IG51bGwsXG4gIH07XG5cbiAgdGhpcy5pc0FsaXZlID0gdHJ1ZTtcblxuICB0aGlzLnNldHRpbmdzLmhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXJOYW1lKSB7IHJldHVybiBoYW5kbGVyc1toYW5kbGVyTmFtZV0odGhpcyQxKTsgfSk7XG5cbiAgdGhpcy5sYXN0U2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7IC8vIGZvciBvblNjcm9sbCBvbmx5XG4gIHRoaXMubGFzdFNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7IC8vIGZvciBvblNjcm9sbCBvbmx5XG4gIHRoaXMuZXZlbnQuYmluZCh0aGlzLmVsZW1lbnQsICdzY3JvbGwnLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gdGhpcyQxLm9uU2Nyb2xsKGUpOyB9KTtcbiAgdXBkYXRlR2VvbWV0cnkodGhpcyk7XG59O1xuXG5QZXJmZWN0U2Nyb2xsYmFyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKCkge1xuICBpZiAoIXRoaXMuaXNBbGl2ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFJlY2FsY3VhdGUgbmVnYXRpdmUgc2Nyb2xsTGVmdCBhZGp1c3RtZW50XG4gIHRoaXMubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ID0gdGhpcy5pc05lZ2F0aXZlU2Nyb2xsXG4gICAgPyB0aGlzLmVsZW1lbnQuc2Nyb2xsV2lkdGggLSB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICA6IDA7XG5cbiAgLy8gUmVjYWxjdWxhdGUgcmFpbCBtYXJnaW5zXG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICdibG9jaycgfSk7XG4gIHNldCh0aGlzLnNjcm9sbGJhcllSYWlsLCB7IGRpc3BsYXk6ICdibG9jaycgfSk7XG4gIHRoaXMucmFpbFhNYXJnaW5XaWR0aCA9XG4gICAgdG9JbnQoZ2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwpLm1hcmdpbkxlZnQpICtcbiAgICB0b0ludChnZXQodGhpcy5zY3JvbGxiYXJYUmFpbCkubWFyZ2luUmlnaHQpO1xuICB0aGlzLnJhaWxZTWFyZ2luSGVpZ2h0ID1cbiAgICB0b0ludChnZXQodGhpcy5zY3JvbGxiYXJZUmFpbCkubWFyZ2luVG9wKSArXG4gICAgdG9JbnQoZ2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwpLm1hcmdpbkJvdHRvbSk7XG5cbiAgLy8gSGlkZSBzY3JvbGxiYXJzIG5vdCB0byBhZmZlY3Qgc2Nyb2xsV2lkdGggYW5kIHNjcm9sbEhlaWdodFxuICBzZXQodGhpcy5zY3JvbGxiYXJYUmFpbCwgeyBkaXNwbGF5OiAnbm9uZScgfSk7XG4gIHNldCh0aGlzLnNjcm9sbGJhcllSYWlsLCB7IGRpc3BsYXk6ICdub25lJyB9KTtcblxuICB1cGRhdGVHZW9tZXRyeSh0aGlzKTtcblxuICBwcm9jZXNzU2Nyb2xsRGlmZih0aGlzLCAndG9wJywgMCwgZmFsc2UsIHRydWUpO1xuICBwcm9jZXNzU2Nyb2xsRGlmZih0aGlzLCAnbGVmdCcsIDAsIGZhbHNlLCB0cnVlKTtcblxuICBzZXQodGhpcy5zY3JvbGxiYXJYUmFpbCwgeyBkaXNwbGF5OiAnJyB9KTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJycgfSk7XG59O1xuXG5QZXJmZWN0U2Nyb2xsYmFyLnByb3RvdHlwZS5vblNjcm9sbCA9IGZ1bmN0aW9uIG9uU2Nyb2xsIChlKSB7XG4gIGlmICghdGhpcy5pc0FsaXZlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdXBkYXRlR2VvbWV0cnkodGhpcyk7XG4gIHByb2Nlc3NTY3JvbGxEaWZmKHRoaXMsICd0b3AnLCB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wIC0gdGhpcy5sYXN0U2Nyb2xsVG9wKTtcbiAgcHJvY2Vzc1Njcm9sbERpZmYoXG4gICAgdGhpcyxcbiAgICAnbGVmdCcsXG4gICAgdGhpcy5lbGVtZW50LnNjcm9sbExlZnQgLSB0aGlzLmxhc3RTY3JvbGxMZWZ0XG4gICk7XG5cbiAgdGhpcy5sYXN0U2Nyb2xsVG9wID0gTWF0aC5mbG9vcih0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wKTtcbiAgdGhpcy5sYXN0U2Nyb2xsTGVmdCA9IHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0O1xufTtcblxuUGVyZmVjdFNjcm9sbGJhci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICBpZiAoIXRoaXMuaXNBbGl2ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuZXZlbnQudW5iaW5kQWxsKCk7XG4gIHJlbW92ZSh0aGlzLnNjcm9sbGJhclgpO1xuICByZW1vdmUodGhpcy5zY3JvbGxiYXJZKTtcbiAgcmVtb3ZlKHRoaXMuc2Nyb2xsYmFyWFJhaWwpO1xuICByZW1vdmUodGhpcy5zY3JvbGxiYXJZUmFpbCk7XG4gIHRoaXMucmVtb3ZlUHNDbGFzc2VzKCk7XG5cbiAgLy8gdW5zZXQgZWxlbWVudHNcbiAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJYID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJZID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJYUmFpbCA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWVJhaWwgPSBudWxsO1xuXG4gIHRoaXMuaXNBbGl2ZSA9IGZhbHNlO1xufTtcblxuUGVyZmVjdFNjcm9sbGJhci5wcm90b3R5cGUucmVtb3ZlUHNDbGFzc2VzID0gZnVuY3Rpb24gcmVtb3ZlUHNDbGFzc2VzICgpIHtcbiAgdGhpcy5lbGVtZW50LmNsYXNzTmFtZSA9IHRoaXMuZWxlbWVudC5jbGFzc05hbWVcbiAgICAuc3BsaXQoJyAnKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuICFuYW1lLm1hdGNoKC9ecHMoWy1fXS4rfCkkLyk7IH0pXG4gICAgLmpvaW4oJyAnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBlcmZlY3RTY3JvbGxiYXI7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCJcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQoZSl7cmV0dXJuIGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZcImRlZmF1bHRcImluIGU/ZS5kZWZhdWx0OmV9T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIFJlYWN0PV9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO2Z1bmN0aW9uIEFwcENvbnRhaW5lcihlKXtyZXR1cm4gUmVhY3QuQ2hpbGRyZW4ub25seShlLmNoaWxkcmVuKX12YXIgaG90X3Byb2Q9ZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV9fSxhcmVDb21wb25lbnRzRXF1YWw9ZnVuY3Rpb24oZSxuKXtyZXR1cm4gZT09PW59LHNldENvbmZpZz1mdW5jdGlvbigpe30sY29sZD1mdW5jdGlvbihlKXtyZXR1cm4gZX0sY29uZmlndXJlQ29tcG9uZW50PWZ1bmN0aW9uKCl7fTtleHBvcnRzLkFwcENvbnRhaW5lcj1BcHBDb250YWluZXIsZXhwb3J0cy5ob3Q9aG90X3Byb2QsZXhwb3J0cy5hcmVDb21wb25lbnRzRXF1YWw9YXJlQ29tcG9uZW50c0VxdWFsLGV4cG9ydHMuc2V0Q29uZmlnPXNldENvbmZpZyxleHBvcnRzLmNvbGQ9Y29sZCxleHBvcnRzLmNvbmZpZ3VyZUNvbXBvbmVudD1jb25maWd1cmVDb21wb25lbnQ7XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGhhc1dpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuXG5pZiAoIW1vZHVsZS5ob3QgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyB8fCAhaGFzV2luZG93KSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3JlYWN0LWhvdC1sb2FkZXIucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIHZhciBldmFsQWxsb3dlZCA9IGZhbHNlO1xuICB0cnkge1xuICAgIGV2YWwoJ2V2YWxBbGxvd2VkID0gdHJ1ZScpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gZXZhbCBub3QgYWxsb3dlZCBkdWUgdG8gQ1NQXG4gIH1cblxuICAvLyBSSEwgbmVlZHMgc2V0UHJvdG90eXBlT2YgdG8gb3BlcmF0ZSBDb21wb25lbnQgaW5oZXJpdGFuY2UsIGFuZCBldmFsIHRvIHBhdGNoIG1ldGhvZHNcbiAgdmFyIGpzRmVhdHVyZXNQcmVzZW50ID0gISFPYmplY3Quc2V0UHJvdG90eXBlT2Y7XG5cbiAgaWYgKCFqc0ZlYXR1cmVzUHJlc2VudCB8fCAhZXZhbEFsbG93ZWQpIHtcbiAgICAvLyB3ZSBhcmUgbm90IGluIHByb2QgbW9kZSwgYnV0IFJITCBjb3VsZCBub3QgYmUgYWN0aXZhdGVkXG4gICAgY29uc29sZS53YXJuKCdSZWFjdC1Ib3QtTG9hZGVyIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBlbnZpcm9ubWVudC4nKTtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9yZWFjdC1ob3QtbG9hZGVyLnByb2R1Y3Rpb24ubWluLmpzJyk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cucmVhY3RIb3RMb2FkZXJHbG9iYWwgPSByZXF1aXJlKCcuL2Rpc3QvcmVhY3QtaG90LWxvYWRlci5kZXZlbG9wbWVudC5qcycpO1xuICB9XG59IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjZcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cblxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNi44LjYnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcblxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTtcblxudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuXG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvciA9IHZvaWQgMDtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuLy8gUmVseWluZyBvbiB0aGUgYGludmFyaWFudCgpYCBpbXBsZW1lbnRhdGlvbiBsZXRzIHVzXG4vLyBwcmVzZXJ2ZSB0aGUgZm9ybWF0IGFuZCBwYXJhbXMgaW4gdGhlIHd3dyBidWlsZHMuXG5cbi8qKlxuICogRm9ya2VkIGZyb20gZmJqcy93YXJuaW5nOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9lNjZiYTIwYWQ1YmU0MzNlYjU0NDIzZjJiMDk3ZDgyOTMyNGQ5ZGU2L3BhY2thZ2VzL2ZianMvc3JjL19fZm9ya3NfXy93YXJuaW5nLmpzXG4gKlxuICogT25seSBjaGFuZ2UgaXMgd2UgdXNlIGNvbnNvbGUud2FybiBpbnN0ZWFkIG9mIGNvbnNvbGUuZXJyb3IsXG4gKiBhbmQgZG8gbm90aGluZyB3aGVuICdjb25zb2xlJyBpcyBub3Qgc3VwcG9ydGVkLlxuICogVGhpcyByZWFsbHkgc2ltcGxpZmllcyB0aGUgY29kZS5cbiAqIC0tLVxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcblxuICBsb3dQcmlvcml0eVdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGxvd1ByaW9yaXR5V2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yID4gMiA/IF9sZW4yIC0gMiA6IDApLCBfa2V5MiA9IDI7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBsb3dQcmlvcml0eVdhcm5pbmckMSA9IGxvd1ByaW9yaXR5V2FybmluZztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmdXaXRob3V0U3RhY2sgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB3YXJuaW5nV2l0aG91dFN0YWNrID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmdXaXRob3V0U3RhY2soY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICAgIGlmIChhcmdzLmxlbmd0aCA+IDgpIHtcbiAgICAgIC8vIENoZWNrIGJlZm9yZSB0aGUgY29uZGl0aW9uIHRvIGNhdGNoIHZpb2xhdGlvbnMgZWFybHkuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dhcm5pbmdXaXRob3V0U3RhY2soKSBjdXJyZW50bHkgc3VwcG9ydHMgYXQgbW9zdCA4IGFyZ3VtZW50cy4nKTtcbiAgICB9XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgICAgfSk7XG4gICAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTtcblxuICAgICAgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUuZXJyb3IsIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxudmFyIHdhcm5pbmdXaXRob3V0U3RhY2skMSA9IHdhcm5pbmdXaXRob3V0U3RhY2s7XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgJy4nICsgY2FsbGVyTmFtZTtcbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuXG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gICEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkgPyBpbnZhcmlhbnQoZmFsc2UsICdzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy4nKSA6IHZvaWQgMDtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG5cbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcblxuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDtcbi8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuX2Fzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBkaXNwYXRjaGVyLlxuICovXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBCRUZPUkVfU0xBU0hfUkUgPSAvXiguKilbXFxcXFxcL10vO1xuXG52YXIgZGVzY3JpYmVDb21wb25lbnRGcmFtZSA9IGZ1bmN0aW9uIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICB2YXIgc291cmNlSW5mbyA9ICcnO1xuICBpZiAoc291cmNlKSB7XG4gICAgdmFyIHBhdGggPSBzb3VyY2UuZmlsZU5hbWU7XG4gICAgdmFyIGZpbGVOYW1lID0gcGF0aC5yZXBsYWNlKEJFRk9SRV9TTEFTSF9SRSwgJycpO1xuICAgIHtcbiAgICAgIC8vIEluIERFViwgaW5jbHVkZSBjb2RlIGZvciBhIGNvbW1vbiBzcGVjaWFsIGNhc2U6XG4gICAgICAvLyBwcmVmZXIgXCJmb2xkZXIvaW5kZXguanNcIiBpbnN0ZWFkIG9mIGp1c3QgXCJpbmRleC5qc1wiLlxuICAgICAgaWYgKC9eaW5kZXhcXC4vLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHBhdGgubWF0Y2goQkVGT1JFX1NMQVNIX1JFKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xuICAgICAgICAgIGlmIChwYXRoQmVmb3JlU2xhc2gpIHtcbiAgICAgICAgICAgIHZhciBmb2xkZXJOYW1lID0gcGF0aEJlZm9yZVNsYXNoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG4gICAgICAgICAgICBmaWxlTmFtZSA9IGZvbGRlck5hbWUgKyAnLycgKyBmaWxlTmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgc291cmNlSW5mbyA9ICcgKGF0ICcgKyBmaWxlTmFtZSArICc6JyArIHNvdXJjZS5saW5lTnVtYmVyICsgJyknO1xuICB9IGVsc2UgaWYgKG93bmVyTmFtZSkge1xuICAgIHNvdXJjZUluZm8gPSAnIChjcmVhdGVkIGJ5ICcgKyBvd25lck5hbWUgKyAnKSc7XG4gIH1cbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xufTtcblxudmFyIFJlc29sdmVkID0gMTtcblxuXG5mdW5jdGlvbiByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQobGF6eUNvbXBvbmVudCkge1xuICByZXR1cm4gbGF6eUNvbXBvbmVudC5fc3RhdHVzID09PSBSZXNvbHZlZCA/IGxhenlDb21wb25lbnQuX3Jlc3VsdCA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyAnKCcgKyBmdW5jdGlvbk5hbWUgKyAnKScgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnQ29uY3VycmVudE1vZGUnO1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LkNvbnN1bWVyJztcbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LlByb3ZpZGVyJztcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0aGVuYWJsZSA9IHR5cGU7XG4gICAgICAgICAgdmFyIHJlc29sdmVkVGhlbmFibGUgPSByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQodGhlbmFibGUpO1xuICAgICAgICAgIGlmIChyZXNvbHZlZFRoZW5hYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShyZXNvbHZlZFRoZW5hYmxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG5cbnZhciBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IG51bGw7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxufVxuXG57XG4gIC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFjayA9ICcnO1xuXG4gICAgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuICAgIGlmIChjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50LnR5cGUpO1xuICAgICAgdmFyIG93bmVyID0gY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX293bmVyO1xuICAgICAgc3RhY2sgKz0gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fc291cmNlLCBvd25lciAmJiBnZXRDb21wb25lbnROYW1lKG93bmVyLnR5cGUpKTtcbiAgICB9XG5cbiAgICAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIF9hc3NpZ24oUmVhY3RTaGFyZWRJbnRlcm5hbHMsIHtcbiAgICAvLyBUaGVzZSBzaG91bGQgbm90IGJlIGluY2x1ZGVkIGluIHByb2R1Y3Rpb24uXG4gICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTogUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSxcbiAgICAvLyBTaGltIGZvciBSZWFjdCBET00gMTYuMC4wIHdoaWNoIHN0aWxsIGRlc3RydWN0dXJlZCAoYnV0IG5vdCB1c2VkKSB0aGlzLlxuICAgIC8vIFRPRE86IHJlbW92ZSBpbiBSZWFjdCAxNy4wLlxuICAgIFJlYWN0Q29tcG9uZW50VHJlZUhvb2s6IHt9XG4gIH0pO1xufVxuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IHdhcm5pbmdXaXRob3V0U3RhY2skMTtcblxue1xuICB3YXJuaW5nID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGNvbmRpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3dhcm5pbmctYW5kLWludmFyaWFudC1hcmdzXG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMS5hcHBseSh1bmRlZmluZWQsIFtmYWxzZSwgZm9ybWF0ICsgJyVzJ10uY29uY2F0KGFyZ3MsIFtzdGFja10pKTtcbiAgfTtcbn1cblxudmFyIHdhcm5pbmckMSA9IHdhcm5pbmc7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG5cbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHZvaWQgMDtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHZvaWQgMDtcblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gIH07XG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gIH07XG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBubyBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQGludGVybmFsXG4gKi9cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG5cbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG5cbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307XG5cbiAgICAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTtcbiAgICAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7XG4gICAgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZSA9IHZvaWQgMDtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBwcm9wcyA9IHt9O1xuXG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlO1xuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIFJlYWN0RWxlbWVudHMgb2YgYSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVmYWN0b3J5XG4gKi9cblxuXG5mdW5jdGlvbiBjbG9uZUFuZFJlcGxhY2VLZXkob2xkRWxlbWVudCwgbmV3S2V5KSB7XG4gIHZhciBuZXdFbGVtZW50ID0gUmVhY3RFbGVtZW50KG9sZEVsZW1lbnQudHlwZSwgbmV3S2V5LCBvbGRFbGVtZW50LnJlZiwgb2xkRWxlbWVudC5fc2VsZiwgb2xkRWxlbWVudC5fc291cmNlLCBvbGRFbGVtZW50Ll9vd25lciwgb2xkRWxlbWVudC5wcm9wcyk7XG5cbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICAhIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCAlcy4nLCBlbGVtZW50KSA6IHZvaWQgMDtcblxuICB2YXIgcHJvcE5hbWUgPSB2b2lkIDA7XG5cbiAgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBrZXkgPSBlbGVtZW50LmtleTtcbiAgdmFyIHJlZiA9IGVsZW1lbnQucmVmO1xuICAvLyBTZWxmIGlzIHByZXNlcnZlZCBzaW5jZSB0aGUgb3duZXIgaXMgcHJlc2VydmVkLlxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7XG4gIC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlO1xuXG4gIC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuICAgIHZhciBkZWZhdWx0UHJvcHMgPSB2b2lkIDA7XG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG5cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6JztcblxuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSAoJycgKyBrZXkpLnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG5cbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG5cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG5cbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gKCcnICsgdGV4dCkucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuXG52YXIgUE9PTF9TSVpFID0gMTA7XG52YXIgdHJhdmVyc2VDb250ZXh0UG9vbCA9IFtdO1xuZnVuY3Rpb24gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG1hcFJlc3VsdCwga2V5UHJlZml4LCBtYXBGdW5jdGlvbiwgbWFwQ29udGV4dCkge1xuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGgpIHtcbiAgICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gdHJhdmVyc2VDb250ZXh0UG9vbC5wb3AoKTtcbiAgICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbWFwUmVzdWx0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5rZXlQcmVmaXggPSBrZXlQcmVmaXg7XG4gICAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBtYXBGdW5jdGlvbjtcbiAgICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG1hcENvbnRleHQ7XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvdW50ID0gMDtcbiAgICByZXR1cm4gdHJhdmVyc2VDb250ZXh0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHQ6IG1hcFJlc3VsdCxcbiAgICAgIGtleVByZWZpeDoga2V5UHJlZml4LFxuICAgICAgZnVuYzogbWFwRnVuY3Rpb24sXG4gICAgICBjb250ZXh0OiBtYXBDb250ZXh0LFxuICAgICAgY291bnQ6IDBcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KSB7XG4gIHRyYXZlcnNlQ29udGV4dC5yZXN1bHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmZ1bmMgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY29udGV4dCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0geyFzdHJpbmd9IG5hbWVTb0ZhciBOYW1lIG9mIHRoZSBrZXkgcGF0aCBzbyBmYXIuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gaW52b2tlIHdpdGggZWFjaCBjaGlsZCBmb3VuZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBVc2VkIHRvIHBhc3MgaW5mb3JtYXRpb24gdGhyb3VnaG91dCB0aGUgdHJhdmVyc2FsXG4gKiBwcm9jZXNzLlxuICogQHJldHVybiB7IW51bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbiBpbiB0aGlzIHN1YnRyZWUuXG4gKi9cbmZ1bmN0aW9uIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCBuYW1lU29GYXIsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkcmVuLFxuICAgIC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93cy5cbiAgICBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkcmVuLCAwKSA6IG5hbWVTb0Zhcik7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQgPSB2b2lkIDA7XG4gIHZhciBuZXh0TmFtZSA9IHZvaWQgMDtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gY2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgICFkaWRXYXJuQWJvdXRNYXBzID8gd2FybmluZyQxKGZhbHNlLCAnVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyB1bnN1cHBvcnRlZCBhbmQgd2lsbCBsaWtlbHkgeWllbGQgJyArICd1bmV4cGVjdGVkIHJlc3VsdHMuIENvbnZlcnQgaXQgdG8gYSBzZXF1ZW5jZS9pdGVyYWJsZSBvZiBrZXllZCAnICsgJ1JlYWN0RWxlbWVudHMgaW5zdGVhZC4nKSA6IHZvaWQgMDtcbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXAgPSB2b2lkIDA7XG4gICAgICB2YXIgaWkgPSAwO1xuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGQsIG5leHROYW1lLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgYWRkZW5kdW0gPSAnJztcbiAgICAgIHtcbiAgICAgICAgYWRkZW5kdW0gPSAnIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgJyArICdpbnN0ZWFkLicgKyBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcbiAgICAgIH1cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG4gICAgICBpbnZhcmlhbnQoZmFsc2UsICdPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6ICVzKS4lcycsIGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZywgYWRkZW5kdW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogVHJhdmVyc2VzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCwgYnV0XG4gKiBtaWdodCBhbHNvIGJlIHNwZWNpZmllZCB0aHJvdWdoIGF0dHJpYnV0ZXM6XG4gKlxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLCAuLi4pYFxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmxlZnRQYW5lbENoaWxkcmVuLCAuLi4pYFxuICpcbiAqIFRoZSBgdHJhdmVyc2VDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZVxuICogZW50aXJlIHRyYXZlcnNhbC4gSXQgY2FuIGJlIHVzZWQgdG8gc3RvcmUgYWNjdW11bGF0aW9ucyBvciBhbnl0aGluZyBlbHNlIHRoYXRcbiAqIHRoZSBjYWxsYmFjayBtaWdodCBmaW5kIHJlbGV2YW50LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgb2JqZWN0LlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIFRvIGludm9rZSB1cG9uIHRyYXZlcnNpbmcgZWFjaCBjaGlsZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBDb250ZXh0IGZvciB0cmF2ZXJzYWwuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGNvbXBvbmVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBjb21wb25lbnQgQSBjb21wb25lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50S2V5KGNvbXBvbmVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJiBjb21wb25lbnQgIT09IG51bGwgJiYgY29tcG9uZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZShjb21wb25lbnQua2V5KTtcbiAgfVxuICAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuXG4gIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChudWxsLCBudWxsLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoU2luZ2xlQ2hpbGQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gbWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dChib29rS2VlcGluZywgY2hpbGQsIGNoaWxkS2V5KSB7XG4gIHZhciByZXN1bHQgPSBib29rS2VlcGluZy5yZXN1bHQsXG4gICAgICBrZXlQcmVmaXggPSBib29rS2VlcGluZy5rZXlQcmVmaXgsXG4gICAgICBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuXG5cbiAgdmFyIG1hcHBlZENoaWxkID0gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBib29rS2VlcGluZy5jb3VudCsrKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCxcbiAgICAgIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgIGtleVByZWZpeCArIChtYXBwZWRDaGlsZC5rZXkgJiYgKCFjaGlsZCB8fCBjaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyBlc2NhcGVVc2VyUHJvdmlkZWRLZXkobWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICB9XG4gICAgcmVzdWx0LnB1c2gobWFwcGVkQ2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIGFycmF5LCBwcmVmaXgsIGZ1bmMsIGNvbnRleHQpIHtcbiAgdmFyIGVzY2FwZWRQcmVmaXggPSAnJztcbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG4gIHZhciB0cmF2ZXJzZUNvbnRleHQgPSBnZXRQb29sZWRUcmF2ZXJzZUNvbnRleHQoYXJyYXksIGVzY2FwZWRQcmVmaXgsIGZ1bmMsIGNvbnRleHQpO1xuICB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0LCB0cmF2ZXJzZUNvbnRleHQpO1xuICByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sIG51bGwpO1xufVxuXG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gICFpc1ZhbGlkRWxlbWVudChjaGlsZHJlbikgPyBpbnZhcmlhbnQoZmFsc2UsICdSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC4nKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgIShjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gbnVsbCB8fCB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09ICdmdW5jdGlvbicpID8gd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG5cbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuXG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9O1xuICAgIC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuICAgICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcbiAgICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX2N0b3I6IGN0b3IsXG4gICAgLy8gUmVhY3QgdXNlcyB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiAtMSxcbiAgICBfcmVzdWx0OiBudWxsXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdm9pZCAwO1xuICAgIHZhciBwcm9wVHlwZXMgPSB2b2lkIDA7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7XG4gICAgICAgICAgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgd2FybmluZyQxKGZhbHNlLCAnUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlcztcbiAgICAgICAgICAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICEoXG4gICAgICAvLyBEbyBub3Qgd2FybiBmb3IgMCBhcmd1bWVudHMgYmVjYXVzZSBpdCBjb3VsZCBiZSBkdWUgdG8gdXNhZ2Ugb2YgdGhlICdhcmd1bWVudHMnIG9iamVjdFxuICAgICAgcmVuZGVyLmxlbmd0aCA9PT0gMCB8fCByZW5kZXIubGVuZ3RoID09PSAyKSA/IHdhcm5pbmdXaXRob3V0U3RhY2skMShmYWxzZSwgJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKSA6IHZvaWQgMDtcbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgICEocmVuZGVyLmRlZmF1bHRQcm9wcyA9PSBudWxsICYmIHJlbmRlci5wcm9wVHlwZXMgPT0gbnVsbCkgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUpO1xufVxuXG5mdW5jdGlvbiBtZW1vKHR5cGUsIGNvbXBhcmUpIHtcbiAge1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpKSB7XG4gICAgICB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcbiAgIShkaXNwYXRjaGVyICE9PSBudWxsKSA/IGludmFyaWFudChmYWxzZSwgJ0ludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL2ZiLm1lL3JlYWN0LWludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS4nKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAge1xuICAgICEodW5zdGFibGVfb2JzZXJ2ZWRCaXRzID09PSB1bmRlZmluZWQpID8gd2FybmluZyQxKGZhbHNlLCAndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9mYi5tZS9ydWxlcy1vZi1ob29rcycgOiAnJykgOiB2b2lkIDA7XG5cbiAgICAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDtcbiAgICAgIC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICB3YXJuaW5nJDEoZmFsc2UsICdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuXG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuXG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuXG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGlucHV0cyk7XG59XG5cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgaW5wdXRzKTtcbn1cblxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGlucHV0cykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBpbnB1dHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBpbnB1dHMpO1xufVxuXG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlYWN0RWxlbWVudFZhbGlkYXRvciBwcm92aWRlcyBhIHdyYXBwZXIgYXJvdW5kIGEgZWxlbWVudCBmYWN0b3J5XG4gKiB3aGljaCB2YWxpZGF0ZXMgdGhlIHByb3BzIHBhc3NlZCB0byB0aGUgZWxlbWVudC4gVGhpcyBpcyBpbnRlbmRlZCB0byBiZVxuICogdXNlZCBvbmx5IGluIERFViBhbmQgY291bGQgYmUgcmVwbGFjZWQgYnkgYSBzdGF0aWMgdHlwZSBjaGVja2VyIGZvciBsYW5ndWFnZXNcbiAqIHRoYXQgc3VwcG9ydCBpdC5cbiAqL1xuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB2b2lkIDA7XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQgJiYgZWxlbWVudFByb3BzLl9fc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgc291cmNlID0gZWxlbWVudFByb3BzLl9fc291cmNlO1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSAnXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8JyArIHBhcmVudE5hbWUgKyAnPi4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5mbztcbn1cblxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcblxuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTtcblxuICAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gJyBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSAnICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArICcuJztcbiAgfVxuXG4gIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuICB7XG4gICAgd2FybmluZyQxKGZhbHNlLCAnRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG4gIH1cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG5cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgdmFyIHN0ZXAgPSB2b2lkIDA7XG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG4gIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICB2YXIgcHJvcFR5cGVzID0gdm9pZCAwO1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHxcbiAgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocHJvcFR5cGVzKSB7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG4gICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSk7XG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7XG4gICAgd2FybmluZ1dpdGhvdXRTdGFjayQxKGZhbHNlLCAnQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICB9XG4gIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQgPyB3YXJuaW5nV2l0aG91dFN0YWNrJDEoZmFsc2UsICdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJykgOiB2b2lkIDA7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZnJhZ21lbnQpO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgIHdhcm5pbmckMShmYWxzZSwgJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpO1xuXG4gIC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHByb3BzKTtcbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nID0gdm9pZCAwO1xuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJzwnICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgJyAvPic7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB3YXJuaW5nJDEoZmFsc2UsICdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcbiAgLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuICB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cblxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuLy8gSGVscHMgaWRlbnRpZnkgc2lkZSBlZmZlY3RzIGluIGJlZ2luLXBoYXNlIGxpZmVjeWNsZSBob29rcyBhbmQgc2V0U3RhdGUgcmVkdWNlcnM6XG5cblxuLy8gSW4gc29tZSBjYXNlcywgU3RyaWN0TW9kZSBzaG91bGQgYWxzbyBkb3VibGUtcmVuZGVyIGxpZmVjeWNsZXMuXG4vLyBUaGlzIGNhbiBiZSBjb25mdXNpbmcgZm9yIHRlc3RzIHRob3VnaCxcbi8vIEFuZCBpdCBjYW4gYmUgYmFkIGZvciBwZXJmb3JtYW5jZSBpbiBwcm9kdWN0aW9uLlxuLy8gVGhpcyBmZWF0dXJlIGZsYWcgY2FuIGJlIHVzZWQgdG8gY29udHJvbCB0aGUgYmVoYXZpb3I6XG5cblxuLy8gVG8gcHJlc2VydmUgdGhlIFwiUGF1c2Ugb24gY2F1Z2h0IGV4Y2VwdGlvbnNcIiBiZWhhdmlvciBvZiB0aGUgZGVidWdnZXIsIHdlXG4vLyByZXBsYXkgdGhlIGJlZ2luIHBoYXNlIG9mIGEgZmFpbGVkIGNvbXBvbmVudCBpbnNpZGUgaW52b2tlR3VhcmRlZENhbGxiYWNrLlxuXG5cbi8vIFdhcm4gYWJvdXQgZGVwcmVjYXRlZCwgYXN5bmMtdW5zYWZlIGxpZmVjeWNsZXM7IHJlbGF0ZXMgdG8gUkZDICM2OlxuXG5cbi8vIEdhdGhlciBhZHZhbmNlZCB0aW1pbmcgbWV0cmljcyBmb3IgUHJvZmlsZXIgc3VidHJlZXMuXG5cblxuLy8gVHJhY2Ugd2hpY2ggaW50ZXJhY3Rpb25zIHRyaWdnZXIgZWFjaCBjb21taXQuXG5cblxuLy8gT25seSB1c2VkIGluIHd3dyBidWlsZHMuXG4gLy8gVE9ETzogdHJ1ZT8gSGVyZSBpdCBtaWdodCBqdXN0IGJlIGZhbHNlLlxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuXG4vLyBSZWFjdCBGaXJlOiBwcmV2ZW50IHRoZSB2YWx1ZSBhbmQgY2hlY2tlZCBhdHRyaWJ1dGVzIGZyb20gc3luY2luZ1xuLy8gd2l0aCB0aGVpciByZWxhdGVkIERPTSBwcm9wZXJ0aWVzXG5cblxuLy8gVGhlc2UgQVBJcyB3aWxsIG5vIGxvbmdlciBiZSBcInVuc3RhYmxlXCIgaW4gdGhlIHVwY29taW5nIDE2LjcgcmVsZWFzZSxcbi8vIENvbnRyb2wgdGhpcyBiZWhhdmlvciB3aXRoIGEgZmxhZyB0byBzdXBwb3J0IDE2LjYgbWlub3IgcmVsZWFzZXMgaW4gdGhlIG1lYW53aGlsZS5cbnZhciBlbmFibGVTdGFibGVDb25jdXJyZW50TW9kZUFQSXMgPSBmYWxzZTtcblxudmFyIFJlYWN0ID0ge1xuICBDaGlsZHJlbjoge1xuICAgIG1hcDogbWFwQ2hpbGRyZW4sXG4gICAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICAgIGNvdW50OiBjb3VudENoaWxkcmVuLFxuICAgIHRvQXJyYXk6IHRvQXJyYXksXG4gICAgb25seTogb25seUNoaWxkXG4gIH0sXG5cbiAgY3JlYXRlUmVmOiBjcmVhdGVSZWYsXG4gIENvbXBvbmVudDogQ29tcG9uZW50LFxuICBQdXJlQ29tcG9uZW50OiBQdXJlQ29tcG9uZW50LFxuXG4gIGNyZWF0ZUNvbnRleHQ6IGNyZWF0ZUNvbnRleHQsXG4gIGZvcndhcmRSZWY6IGZvcndhcmRSZWYsXG4gIGxhenk6IGxhenksXG4gIG1lbW86IG1lbW8sXG5cbiAgdXNlQ2FsbGJhY2s6IHVzZUNhbGxiYWNrLFxuICB1c2VDb250ZXh0OiB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3Q6IHVzZUVmZmVjdCxcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZTogdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlRGVidWdWYWx1ZTogdXNlRGVidWdWYWx1ZSxcbiAgdXNlTGF5b3V0RWZmZWN0OiB1c2VMYXlvdXRFZmZlY3QsXG4gIHVzZU1lbW86IHVzZU1lbW8sXG4gIHVzZVJlZHVjZXI6IHVzZVJlZHVjZXIsXG4gIHVzZVJlZjogdXNlUmVmLFxuICB1c2VTdGF0ZTogdXNlU3RhdGUsXG5cbiAgRnJhZ21lbnQ6IFJFQUNUX0ZSQUdNRU5UX1RZUEUsXG4gIFN0cmljdE1vZGU6IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUsXG4gIFN1c3BlbnNlOiBSRUFDVF9TVVNQRU5TRV9UWVBFLFxuXG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbixcbiAgY2xvbmVFbGVtZW50OiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbixcbiAgY3JlYXRlRmFjdG9yeTogY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uLFxuICBpc1ZhbGlkRWxlbWVudDogaXNWYWxpZEVsZW1lbnQsXG5cbiAgdmVyc2lvbjogUmVhY3RWZXJzaW9uLFxuXG4gIHVuc3RhYmxlX0NvbmN1cnJlbnRNb2RlOiBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSxcbiAgdW5zdGFibGVfUHJvZmlsZXI6IFJFQUNUX1BST0ZJTEVSX1RZUEUsXG5cbiAgX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6IFJlYWN0U2hhcmVkSW50ZXJuYWxzXG59O1xuXG4vLyBOb3RlOiBzb21lIEFQSXMgYXJlIGFkZGVkIHdpdGggZmVhdHVyZSBmbGFncy5cbi8vIE1ha2Ugc3VyZSB0aGF0IHN0YWJsZSBidWlsZHMgZm9yIG9wZW4gc291cmNlXG4vLyBkb24ndCBtb2RpZnkgdGhlIFJlYWN0IG9iamVjdCB0byBhdm9pZCBkZW9wdHMuXG4vLyBBbHNvIGxldCdzIG5vdCBleHBvc2UgdGhlaXIgbmFtZXMgaW4gc3RhYmxlIGJ1aWxkcy5cblxuaWYgKGVuYWJsZVN0YWJsZUNvbmN1cnJlbnRNb2RlQVBJcykge1xuICBSZWFjdC5Db25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xuICBSZWFjdC5Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG4gIFJlYWN0LnVuc3RhYmxlX0NvbmN1cnJlbnRNb2RlID0gdW5kZWZpbmVkO1xuICBSZWFjdC51bnN0YWJsZV9Qcm9maWxlciA9IHVuZGVmaW5lZDtcbn1cblxuXG5cbnZhciBSZWFjdCQyID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGRlZmF1bHQ6IFJlYWN0XG59KTtcblxudmFyIFJlYWN0JDMgPSAoIFJlYWN0JDIgJiYgUmVhY3QgKSB8fCBSZWFjdCQyO1xuXG4vLyBUT0RPOiBkZWNpZGUgb24gdGhlIHRvcC1sZXZlbCBleHBvcnQgZm9ybS5cbi8vIFRoaXMgaXMgaGFja3kgYnV0IG1ha2VzIGl0IHdvcmsgd2l0aCBib3RoIFJvbGx1cCBhbmQgSmVzdC5cbnZhciByZWFjdCA9IFJlYWN0JDMuZGVmYXVsdCB8fCBSZWFjdCQzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlYWN0O1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiLy8gTG9hZGVkIGFmdGVyIENvcmVVSSBhcHAuanNcblxuIiwiaW1wb3J0ICdAY29yZXVpL2NvcmV1aSciLCIvKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGVzIFZ1ZSBhbmQgb3RoZXIgbGlicmFyaWVzLiBJdCBpcyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IHdoZW5cbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxuLy8gTG9hZGVkIGJlZm9yZSBDb3JlVUkgYXBwLmpzXG5pbXBvcnQgJy4uL2Jvb3RzdHJhcCc7XG5pbXBvcnQgJ3BhY2UnO1xuaW1wb3J0ICcuLi9wbHVnaW5zJztcbiIsIi8qKlxuICogVGhpcyBib290c3RyYXAgZmlsZSBpcyB1c2VkIGZvciBib3RoIGZyb250ZW5kIGFuZCBiYWNrZW5kXG4gKi9cblxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAncG9wcGVyLmpzJzsgLy8gUmVxdWlyZWQgZm9yIEJTNFxuaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0ICdqcXVlcnktdmFsaWRhdGlvbic7XG5cbi8qKlxuICogV2UnbGwgbG9hZCBqUXVlcnkgYW5kIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbiB3aGljaCBwcm92aWRlcyBzdXBwb3J0XG4gKiBmb3IgSmF2YVNjcmlwdCBiYXNlZCBCb290c3RyYXAgZmVhdHVyZXMgc3VjaCBhcyBtb2RhbHMgYW5kIHRhYnMuIFRoaXNcbiAqIGNvZGUgbWF5IGJlIG1vZGlmaWVkIHRvIGZpdCB0aGUgc3BlY2lmaWMgbmVlZHMgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAqL1xuXG53aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSAkO1xud2luZG93LlN3YWwgPSBTd2FsO1xud2luZG93Ll8gPSBfOyAvLyBMb2Rhc2hcblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gYXhpb3M7XG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbi8qKlxuICogTmV4dCB3ZSB3aWxsIHJlZ2lzdGVyIHRoZSBDU1JGIFRva2VuIGFzIGEgY29tbW9uIGhlYWRlciB3aXRoIEF4aW9zIHNvIHRoYXRcbiAqIGFsbCBvdXRnb2luZyBIVFRQIHJlcXVlc3RzIGF1dG9tYXRpY2FsbHkgaGF2ZSBpdCBhdHRhY2hlZC4gVGhpcyBpcyBqdXN0XG4gKiBhIHNpbXBsZSBjb252ZW5pZW5jZSBzbyB3ZSBkb24ndCBoYXZlIHRvIGF0dGFjaCBldmVyeSB0b2tlbiBtYW51YWxseS5cbiAqL1xuXG5jb25zdCB0b2tlbiA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpO1xuXG5pZiAodG9rZW4pIHtcbiAgICB3aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQ1NSRi1UT0tFTiddID0gdG9rZW4uY29udGVudDtcbn0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ1NSRiB0b2tlbiBub3QgZm91bmQ6IGh0dHBzOi8vbGFyYXZlbC5jb20vZG9jcy9jc3JmI2NzcmYteC1jc3JmLXRva2VuJyk7XG59XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nXG5cbi8vIHdpbmRvdy5QdXNoZXIgPSByZXF1aXJlKCdwdXNoZXItanMnKTtcblxuLy8gd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4vLyAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuLy8gICAgIGtleTogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfS0VZXG4vLyAgICAgY2x1c3RlcjogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfQ0xVU1RFUixcbi8vICAgICBlbmNyeXB0ZWQ6IHRydWVcbi8vIH0pO1xuIiwiLyoqXG4gKiBBbGxvd3MgeW91IHRvIGFkZCBkYXRhLW1ldGhvZD1cIk1FVEhPRCB0byBsaW5rcyB0byBhdXRvbWF0aWNhbGx5IGluamVjdCBhIGZvcm1cbiAqIHdpdGggdGhlIG1ldGhvZCBvbiBjbGlja1xuICpcbiAqIEV4YW1wbGU6IDxhIGhyZWY9XCJ7e3JvdXRlKCdjdXN0b21lcnMuZGVzdHJveScsICRjdXN0b21lci0+aWQpfX1cIlxuICogZGF0YS1tZXRob2Q9XCJkZWxldGVcIiBuYW1lPVwiZGVsZXRlX2l0ZW1cIj5EZWxldGU8L2E+XG4gKlxuICogSW5qZWN0cyBhIGZvcm0gd2l0aCB0aGF0J3MgZmlyZWQgb24gY2xpY2sgb2YgdGhlIGxpbmsgd2l0aCBhIERFTEVURSByZXF1ZXN0LlxuICogR29vZCBiZWNhdXNlIHlvdSBkb24ndCBoYXZlIHRvIGRpcnR5IHlvdXIgSFRNTCB3aXRoIGRlbGV0ZSBmb3JtcyBldmVyeXdoZXJlLlxuICovXG5mdW5jdGlvbiBhZGREZWxldGVGb3JtcygpIHtcbiAgICAkKCdbZGF0YS1tZXRob2RdJykuYXBwZW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEkKHRoaXMpLmZpbmQoJ2Zvcm0nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcXG48Zm9ybSBhY3Rpb249J1wiICsgJCh0aGlzKS5hdHRyKCdocmVmJykgKyBcIicgbWV0aG9kPSdQT1NUJyBuYW1lPSdkZWxldGVfaXRlbScgc3R5bGU9J2Rpc3BsYXk6bm9uZSc+XFxuXCIgK1xuICAgICAgICAgICAgICAgIFwiPGlucHV0IHR5cGU9J2hpZGRlbicgbmFtZT0nX21ldGhvZCcgdmFsdWU9J1wiICsgJCh0aGlzKS5hdHRyKCdkYXRhLW1ldGhvZCcpICsgXCInPlxcblwiICtcbiAgICAgICAgICAgICAgICBcIjxpbnB1dCB0eXBlPSdoaWRkZW4nIG5hbWU9J190b2tlbicgdmFsdWU9J1wiICsgJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKSArIFwiJz5cXG5cIiArXG4gICAgICAgICAgICAgICAgJzwvZm9ybT5cXG4nO1xuICAgICAgICB9IGVsc2UgeyByZXR1cm4gJycgfVxuICAgIH0pXG4gICAgICAgIC5hdHRyKCdocmVmJywgJyMnKVxuICAgICAgICAuYXR0cignc3R5bGUnLCAnY3Vyc29yOnBvaW50ZXI7JylcbiAgICAgICAgLmF0dHIoJ29uY2xpY2snLCAnJCh0aGlzKS5maW5kKFwiZm9ybVwiKS5zdWJtaXQoKTsnKTtcbn1cblxuLyoqXG4gKiBQbGFjZSBhbnkgalF1ZXJ5L2hlbHBlciBwbHVnaW5zIGluIGhlcmUuXG4gKi9cbiQoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgZGF0YS1tZXRob2Q9XCJkZWxldGVcIiBmb3JtcyB0byBhbGwgZGVsZXRlIGxpbmtzXG4gICAgICovXG4gICAgYWRkRGVsZXRlRm9ybXMoKTtcblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgYWxsIHN1Ym1pdCBidXR0b25zIG9uY2UgY2xpY2tlZFxuICAgICAqL1xuICAgICQoJ2Zvcm0nKS5zdWJtaXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmljIGNvbmZpcm0gZm9ybSBkZWxldGUgdXNpbmcgU3dlZXQgQWxlcnRcbiAgICAgKi9cbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsICdmb3JtW25hbWU9ZGVsZXRlX2l0ZW1dJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzO1xuICAgICAgICBjb25zdCBsaW5rID0gJCgnYVtkYXRhLW1ldGhvZD1cImRlbGV0ZVwiXScpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAobGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jYW5jZWwnKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNhbmNlbCcpIDogJ0NhbmNlbCc7XG4gICAgICAgIGNvbnN0IGNvbmZpcm0gPSAobGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jb25maXJtJykpID8gbGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jb25maXJtJykgOiAnWWVzLCBkZWxldGUnO1xuICAgICAgICBjb25zdCB0aXRsZSA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtdGl0bGUnKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtdGl0bGUnKSA6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nO1xuXG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm0sXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWwsXG4gICAgICAgICAgICB0eXBlOiAnd2FybmluZydcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXN1bHQudmFsdWUgJiYgZm9ybS5zdWJtaXQoKTtcbiAgICAgICAgfSk7XG4gICAgfSkub24oJ2NsaWNrJywgJ2FbbmFtZT1jb25maXJtX2l0ZW1dJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyaWMgJ2FyZSB5b3Ugc3VyZScgY29uZmlybSBib3hcbiAgICAgICAgICovXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBsaW5rID0gJCh0aGlzKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSAobGluay5hdHRyKCdkYXRhLXRyYW5zLXRpdGxlJykpID8gbGluay5hdHRyKCdkYXRhLXRyYW5zLXRpdGxlJykgOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRvIHRoaXM/JztcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY2FuY2VsJykpID8gbGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jYW5jZWwnKSA6ICdDYW5jZWwnO1xuICAgICAgICBjb25zdCBjb25maXJtID0gKGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY29uZmlybScpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY29uZmlybScpIDogJ0NvbnRpbnVlJztcblxuICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsLFxuICAgICAgICAgICAgdHlwZTogJ2luZm8nXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LnZhbHVlICYmIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24obGluay5hdHRyKCdocmVmJykpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuXHQkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9