!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if ((r.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t))
        for (var i in t)
          r.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, 'a', e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ''),
    r((r.s = 97));
})([
  function (t, e, r) {
    'use strict';
    r.d(e, 'a', function () {
      return x;
    }),
      r.d(e, 'b', function () {
        return Ke;
      }),
      r.d(e, 'c', function () {
        return Ot;
      }),
      r.d(e, 'd', function () {
        return _t;
      }),
      r.d(e, 'e', function () {
        return ar;
      }),
      r.d(e, 'f', function () {
        return it;
      }),
      r.d(e, 'g', function () {
        return mt;
      }),
      r.d(e, 'h', function () {
        return Xt;
      }),
      r.d(e, 'i', function () {
        return Zt;
      }),
      r.d(e, 'j', function () {
        return tt;
      }),
      r.d(e, 'k', function () {
        return oe;
      }),
      r.d(e, 'l', function () {
        return S;
      }),
      r.d(e, 'm', function () {
        return Oe;
      }),
      r.d(e, 'n', function () {
        return ae;
      }),
      r.d(e, 'o', function () {
        return he;
      }),
      r.d(e, 'p', function () {
        return or;
      }),
      r.d(e, 'q', function () {
        return $t;
      }),
      r.d(e, 'r', function () {
        return ve;
      }),
      r.d(e, 's', function () {
        return ye;
      }),
      r.d(e, 't', function () {
        return Ge;
      }),
      r.d(e, 'u', function () {
        return Je;
      }),
      r.d(e, 'v', function () {
        return ir;
      }),
      r.d(e, 'w', function () {
        return me;
      }),
      r.d(e, 'x', function () {
        return J;
      }),
      r.d(e, 'y', function () {
        return we;
      }),
      r.d(e, 'z', function () {
        return ne;
      }),
      r.d(e, 'A', function () {
        return re;
      }),
      r.d(e, 'B', function () {
        return Yt;
      }),
      r.d(e, 'C', function () {
        return xe;
      }),
      r.d(e, 'D', function () {
        return _e;
      }),
      r.d(e, 'E', function () {
        return Ae;
      });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var n = function (t, e) {
      return (n =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        })(t, e);
    };
    var i = function () {
      return (i =
        Object.assign ||
        function (t) {
          for (var e, r = 1, n = arguments.length; r < n; r++)
            for (var i in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t;
        }).apply(this, arguments);
    };
    function o(t) {
      var e = 'function' == typeof Symbol && t[Symbol.iterator],
        r = 0;
      return e
        ? e.call(t)
        : {
            next: function () {
              return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
            },
          };
    }
    function a(t, e) {
      var r = 'function' == typeof Symbol && t[Symbol.iterator];
      if (!r) return t;
      var n,
        i,
        o = r.call(t),
        a = [];
      try {
        for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; ) a.push(n.value);
      } catch (t) {
        i = { error: t };
      } finally {
        try {
          n && !n.done && (r = o.return) && r.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      return a;
    }
    function s() {
      for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e]));
      return t;
    }
    var u = [];
    Object.freeze(u);
    var c = {};
    function l() {
      return ++Tt.mobxGuid;
    }
    function p(t) {
      throw (h(!1, t), 'X');
    }
    function h(t, e) {
      if (!t)
        throw new Error('[mobx] ' + (e || 'An invariant failed, however the error is obfuscated because this is a production build.'));
    }
    Object.freeze(c);
    function f(t) {
      var e = !1;
      return function () {
        if (!e) return (e = !0), t.apply(this, arguments);
      };
    }
    var d = function () {};
    function v(t) {
      return null !== t && 'object' == typeof t;
    }
    function y(t) {
      if (null === t || 'object' != typeof t) return !1;
      var e = Object.getPrototypeOf(t);
      return e === Object.prototype || null === e;
    }
    function b(t, e, r) {
      Object.defineProperty(t, e, {
        enumerable: !1,
        writable: !0,
        configurable: !0,
        value: r,
      });
    }
    function g(t, e) {
      var r = 'isMobX' + t;
      return (
        (e.prototype[r] = !0),
        function (t) {
          return v(t) && !0 === t[r];
        }
      );
    }
    function m(t) {
      return t instanceof Map;
    }
    function _(t) {
      return t instanceof Set;
    }
    function O(t) {
      var e = new Set();
      for (var r in t) e.add(r);
      return (
        Object.getOwnPropertySymbols(t).forEach(function (r) {
          Object.getOwnPropertyDescriptor(t, r).enumerable && e.add(r);
        }),
        Array.from(e)
      );
    }
    function w(t) {
      return t && t.toString ? t.toString() : new String(t).toString();
    }
    function j(t) {
      return null === t ? null : 'object' == typeof t ? '' + t : t;
    }
    var x = Symbol('mobx administration'),
      A = (function () {
        function t(t) {
          void 0 === t && (t = 'Atom@' + l()),
            (this.name = t),
            (this.isPendingUnobservation = !1),
            (this.isBeingObserved = !1),
            (this.observers = new Set()),
            (this.diffValue = 0),
            (this.lastAccessedBy = 0),
            (this.lowestObserverState = Y.NOT_TRACKING);
        }
        return (
          (t.prototype.onBecomeObserved = function () {
            this.onBecomeObservedListeners &&
              this.onBecomeObservedListeners.forEach(function (t) {
                return t();
              });
          }),
          (t.prototype.onBecomeUnobserved = function () {
            this.onBecomeUnobservedListeners &&
              this.onBecomeUnobservedListeners.forEach(function (t) {
                return t();
              });
          }),
          (t.prototype.reportObserved = function () {
            return Rt(this);
          }),
          (t.prototype.reportChanged = function () {
            Vt(),
              (function (t) {
                if (t.lowestObserverState === Y.STALE) return;
                (t.lowestObserverState = Y.STALE),
                  t.observers.forEach(function (e) {
                    e.dependenciesState === Y.UP_TO_DATE && (e.isTracing !== $.NONE && It(e, t), e.onBecomeStale()),
                      (e.dependenciesState = Y.STALE);
                  });
              })(this),
              Ct();
          }),
          (t.prototype.toString = function () {
            return this.name;
          }),
          t
        );
      })(),
      P = g('Atom', A);
    function S(t, e, r) {
      void 0 === e && (e = d), void 0 === r && (r = d);
      var n,
        i = new A(t);
      return e !== d && ie('onBecomeObserved', i, e, n), r !== d && ne(i, r), i;
    }
    var E = {
        identity: function (t, e) {
          return t === e;
        },
        structural: function (t, e) {
          return ur(t, e);
        },
        default: function (t, e) {
          return Object.is(t, e);
        },
        shallow: function (t, e) {
          return ur(t, e, 1);
        },
      },
      D = Symbol('mobx did run lazy initializers'),
      z = Symbol('mobx pending decorators'),
      k = {},
      T = {};
    function L(t, e) {
      var r = e ? k : T;
      return (
        r[t] ||
        (r[t] = {
          configurable: !0,
          enumerable: e,
          get: function () {
            return N(this), this[t];
          },
          set: function (e) {
            N(this), (this[t] = e);
          },
        })
      );
    }
    function N(t) {
      var e, r;
      if (!0 !== t[D]) {
        var n = t[z];
        if (n) {
          b(t, D, !0);
          var i = s(Object.getOwnPropertySymbols(n), Object.keys(n));
          try {
            for (var a = o(i), u = a.next(); !u.done; u = a.next()) {
              var c = n[u.value];
              c.propertyCreator(t, c.prop, c.descriptor, c.decoratorTarget, c.decoratorArguments);
            }
          } catch (t) {
            e = { error: t };
          } finally {
            try {
              u && !u.done && (r = a.return) && r.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
        }
      }
    }
    function M(t, e) {
      return function () {
        var r,
          n = function (n, o, a, s) {
            if (!0 === s) return e(n, o, a, n, r), null;
            if (!Object.prototype.hasOwnProperty.call(n, z)) {
              var u = n[z];
              b(n, z, i({}, u));
            }
            return (
              (n[z][o] = {
                prop: o,
                propertyCreator: e,
                descriptor: a,
                decoratorTarget: n,
                decoratorArguments: r,
              }),
              L(o, t)
            );
          };
        return V(arguments) ? ((r = u), n.apply(null, arguments)) : ((r = Array.prototype.slice.call(arguments)), n);
      };
    }
    function V(t) {
      return (
        ((2 === t.length || 3 === t.length) && ('string' == typeof t[1] || 'symbol' == typeof t[1])) || (4 === t.length && !0 === t[3])
      );
    }
    function C(t, e, r) {
      return ge(t)
        ? t
        : Array.isArray(t)
        ? J.array(t, { name: r })
        : y(t)
        ? J.object(t, void 0, { name: r })
        : m(t)
        ? J.map(t, { name: r })
        : _(t)
        ? J.set(t, { name: r })
        : t;
    }
    function R(t) {
      return t;
    }
    function I(t) {
      h(t);
      var e = M(!0, function (e, r, n, i, o) {
          var a = n ? (n.initializer ? n.initializer.call(e) : n.value) : void 0;
          Ze(e).addObservableProp(r, a, t);
        }),
        r = ('undefined' != typeof process && process.env, e);
      return (r.enhancer = t), r;
    }
    var B = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
    function H(t) {
      return null == t ? B : 'string' == typeof t ? { name: t, deep: !0, proxy: !0 } : t;
    }
    Object.freeze(B);
    var U = I(C),
      F = I(function (t, e, r) {
        return null == t || ir(t) || Ge(t) || Je(t) || $e(t)
          ? t
          : Array.isArray(t)
          ? J.array(t, { name: r, deep: !1 })
          : y(t)
          ? J.object(t, void 0, { name: r, deep: !1 })
          : m(t)
          ? J.map(t, { name: r, deep: !1 })
          : _(t)
          ? J.set(t, { name: r, deep: !1 })
          : p(!1);
      }),
      G = I(R),
      W = I(function (t, e, r) {
        return ur(t, e) ? e : t;
      });
    function q(t) {
      return t.defaultDecorator ? t.defaultDecorator.enhancer : !1 === t.deep ? R : C;
    }
    var K = {
        box: function (t, e) {
          arguments.length > 2 && X('box');
          var r = H(e);
          return new xt(t, q(r), r.name, !0, r.equals);
        },
        array: function (t, e) {
          arguments.length > 2 && X('array');
          var r = H(e);
          return Ie(t, q(r), r.name);
        },
        map: function (t, e) {
          arguments.length > 2 && X('map');
          var r = H(e);
          return new Ke(t, q(r), r.name);
        },
        set: function (t, e) {
          arguments.length > 2 && X('set');
          var r = H(e);
          return new Ye(t, q(r), r.name);
        },
        object: function (t, e, r) {
          'string' == typeof arguments[1] && X('object');
          var n = H(r);
          if (!1 === n.proxy) return ae({}, t, e, n);
          var i = se(n),
            o = ae({}, void 0, void 0, n),
            a = ke(o);
          return ue(a, t, e, i), a;
        },
        ref: G,
        shallow: F,
        deep: U,
        struct: W,
      },
      J = function (t, e, r) {
        if ('string' == typeof arguments[1] || 'symbol' == typeof arguments[1]) return U.apply(null, arguments);
        if (ge(t)) return t;
        var n = y(t) ? J.object(t, e, r) : Array.isArray(t) ? J.array(t, e) : m(t) ? J.map(t, e) : _(t) ? J.set(t, e) : t;
        if (n !== t) return n;
        p(!1);
      };
    function X(t) {
      p('Expected one or two arguments to observable.' + t + '. Did you accidentally try to use observable.' + t + ' as decorator?');
    }
    Object.keys(K).forEach(function (t) {
      return (J[t] = K[t]);
    });
    var Y,
      $,
      Q = M(!1, function (t, e, r, n, o) {
        var a = r.get,
          s = r.set,
          u = o[0] || {};
        Ze(t).addComputedProp(t, e, i({ get: a, set: s, context: t }, u));
      }),
      Z = Q({ equals: E.structural }),
      tt = function (t, e, r) {
        if ('string' == typeof e) return Q.apply(null, arguments);
        if (null !== t && 'object' == typeof t && 1 === arguments.length) return Q.apply(null, arguments);
        var n = 'object' == typeof e ? e : {};
        return (n.get = t), (n.set = 'function' == typeof e ? e : n.set), (n.name = n.name || t.name || ''), new At(n);
      };
    (tt.struct = Z),
      (function (t) {
        (t[(t.NOT_TRACKING = -1)] = 'NOT_TRACKING'),
          (t[(t.UP_TO_DATE = 0)] = 'UP_TO_DATE'),
          (t[(t.POSSIBLY_STALE = 1)] = 'POSSIBLY_STALE'),
          (t[(t.STALE = 2)] = 'STALE');
      })(Y || (Y = {})),
      (function (t) {
        (t[(t.NONE = 0)] = 'NONE'), (t[(t.LOG = 1)] = 'LOG'), (t[(t.BREAK = 2)] = 'BREAK');
      })($ || ($ = {}));
    var et = function (t) {
      this.cause = t;
    };
    function rt(t) {
      return t instanceof et;
    }
    function nt(t) {
      switch (t.dependenciesState) {
        case Y.UP_TO_DATE:
          return !1;
        case Y.NOT_TRACKING:
        case Y.STALE:
          return !0;
        case Y.POSSIBLY_STALE:
          for (var e = pt(!0), r = ct(), n = t.observing, i = n.length, o = 0; o < i; o++) {
            var a = n[o];
            if (Pt(a)) {
              if (Tt.disableErrorBoundaries) a.get();
              else
                try {
                  a.get();
                } catch (t) {
                  return lt(r), ht(e), !0;
                }
              if (t.dependenciesState === Y.STALE) return lt(r), ht(e), !0;
            }
          }
          return ft(t), lt(r), ht(e), !1;
      }
    }
    function it() {
      return null !== Tt.trackingDerivation;
    }
    function ot(t) {
      var e = t.observers.size > 0;
      Tt.computationDepth > 0 && e && p(!1), Tt.allowStateChanges || (!e && 'strict' !== Tt.enforceActions) || p(!1);
    }
    function at(t, e, r) {
      var n = pt(!0);
      ft(t), (t.newObserving = new Array(t.observing.length + 100)), (t.unboundDepsCount = 0), (t.runId = ++Tt.runId);
      var i,
        o = Tt.trackingDerivation;
      if (((Tt.trackingDerivation = t), !0 === Tt.disableErrorBoundaries)) i = e.call(r);
      else
        try {
          i = e.call(r);
        } catch (t) {
          i = new et(t);
        }
      return (
        (Tt.trackingDerivation = o),
        (function (t) {
          for (
            var e = t.observing, r = (t.observing = t.newObserving), n = Y.UP_TO_DATE, i = 0, o = t.unboundDepsCount, a = 0;
            a < o;
            a++
          ) {
            0 === (s = r[a]).diffValue && ((s.diffValue = 1), i !== a && (r[i] = s), i++),
              s.dependenciesState > n && (n = s.dependenciesState);
          }
          (r.length = i), (t.newObserving = null), (o = e.length);
          for (; o--; ) {
            0 === (s = e[o]).diffValue && Nt(s, t), (s.diffValue = 0);
          }
          for (; i--; ) {
            var s;
            1 === (s = r[i]).diffValue && ((s.diffValue = 0), Lt(s, t));
          }
          n !== Y.UP_TO_DATE && ((t.dependenciesState = n), t.onBecomeStale());
        })(t),
        ht(n),
        i
      );
    }
    function st(t) {
      var e = t.observing;
      t.observing = [];
      for (var r = e.length; r--; ) Nt(e[r], t);
      t.dependenciesState = Y.NOT_TRACKING;
    }
    function ut(t) {
      var e = ct();
      try {
        return t();
      } finally {
        lt(e);
      }
    }
    function ct() {
      var t = Tt.trackingDerivation;
      return (Tt.trackingDerivation = null), t;
    }
    function lt(t) {
      Tt.trackingDerivation = t;
    }
    function pt(t) {
      var e = Tt.allowStateReads;
      return (Tt.allowStateReads = t), e;
    }
    function ht(t) {
      Tt.allowStateReads = t;
    }
    function ft(t) {
      if (t.dependenciesState !== Y.UP_TO_DATE) {
        t.dependenciesState = Y.UP_TO_DATE;
        for (var e = t.observing, r = e.length; r--; ) e[r].lowestObserverState = Y.UP_TO_DATE;
      }
    }
    var dt = 0,
      vt = 1,
      yt = Object.getOwnPropertyDescriptor(function () {}, 'name');
    yt && yt.configurable;
    function bt(t, e, r) {
      var n = function () {
        return gt(t, e, r || this, arguments);
      };
      return (n.isMobxAction = !0), n;
    }
    function gt(t, e, r, n) {
      var i = mt(t, r, n);
      try {
        return e.apply(r, n);
      } catch (t) {
        throw ((i.error = t), t);
      } finally {
        _t(i);
      }
    }
    function mt(t, e, r) {
      var n = 0,
        i = ct();
      Vt();
      var o = {
        prevDerivation: i,
        prevAllowStateChanges: wt(!0),
        prevAllowStateReads: pt(!0),
        notifySpy: !1,
        startTime: n,
        actionId: vt++,
        parentActionId: dt,
      };
      return (dt = o.actionId), o;
    }
    function _t(t) {
      dt !== t.actionId && p('invalid action stack. did you forget to finish an action?'),
        (dt = t.parentActionId),
        void 0 !== t.error && (Tt.suppressReactionErrors = !0),
        jt(t.prevAllowStateChanges),
        ht(t.prevAllowStateReads),
        Ct(),
        lt(t.prevDerivation),
        t.notifySpy,
        (Tt.suppressReactionErrors = !1);
    }
    function Ot(t, e) {
      var r,
        n = wt(t);
      try {
        r = e();
      } finally {
        jt(n);
      }
      return r;
    }
    function wt(t) {
      var e = Tt.allowStateChanges;
      return (Tt.allowStateChanges = t), e;
    }
    function jt(t) {
      Tt.allowStateChanges = t;
    }
    var xt = (function (t) {
        function e(e, r, n, i, o) {
          void 0 === n && (n = 'ObservableValue@' + l()), void 0 === i && (i = !0), void 0 === o && (o = E.default);
          var a = t.call(this, n) || this;
          return (a.enhancer = r), (a.name = n), (a.equals = o), (a.hasUnreportedChange = !1), (a.value = r(e, void 0, n)), a;
        }
        return (
          (function (t, e) {
            function r() {
              this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
          })(e, t),
          (e.prototype.dehanceValue = function (t) {
            return void 0 !== this.dehancer ? this.dehancer(t) : t;
          }),
          (e.prototype.set = function (t) {
            this.value;
            if ((t = this.prepareNewValue(t)) !== Tt.UNCHANGED) {
              0, this.setNewValue(t);
            }
          }),
          (e.prototype.prepareNewValue = function (t) {
            if ((ot(this), Te(this))) {
              var e = Ne(this, { object: this, type: 'update', newValue: t });
              if (!e) return Tt.UNCHANGED;
              t = e.newValue;
            }
            return (t = this.enhancer(t, this.value, this.name)), this.equals(this.value, t) ? Tt.UNCHANGED : t;
          }),
          (e.prototype.setNewValue = function (t) {
            var e = this.value;
            (this.value = t),
              this.reportChanged(),
              Me(this) &&
                Ce(this, {
                  type: 'update',
                  object: this,
                  newValue: t,
                  oldValue: e,
                });
          }),
          (e.prototype.get = function () {
            return this.reportObserved(), this.dehanceValue(this.value);
          }),
          (e.prototype.intercept = function (t) {
            return Le(this, t);
          }),
          (e.prototype.observe = function (t, e) {
            return (
              e &&
                t({
                  object: this,
                  type: 'update',
                  newValue: this.value,
                  oldValue: void 0,
                }),
              Ve(this, t)
            );
          }),
          (e.prototype.toJSON = function () {
            return this.get();
          }),
          (e.prototype.toString = function () {
            return this.name + '[' + this.value + ']';
          }),
          (e.prototype.valueOf = function () {
            return j(this.get());
          }),
          (e.prototype[Symbol.toPrimitive] = function () {
            return this.valueOf();
          }),
          e
        );
      })(A),
      At =
        (g('ObservableValue', xt),
        (function () {
          function t(t) {
            (this.dependenciesState = Y.NOT_TRACKING),
              (this.observing = []),
              (this.newObserving = null),
              (this.isBeingObserved = !1),
              (this.isPendingUnobservation = !1),
              (this.observers = new Set()),
              (this.diffValue = 0),
              (this.runId = 0),
              (this.lastAccessedBy = 0),
              (this.lowestObserverState = Y.UP_TO_DATE),
              (this.unboundDepsCount = 0),
              (this.__mapid = '#' + l()),
              (this.value = new et(null)),
              (this.isComputing = !1),
              (this.isRunningSetter = !1),
              (this.isTracing = $.NONE),
              h(t.get, 'missing option for computed: get'),
              (this.derivation = t.get),
              (this.name = t.name || 'ComputedValue@' + l()),
              t.set && (this.setter = bt(this.name + '-setter', t.set)),
              (this.equals = t.equals || (t.compareStructural || t.struct ? E.structural : E.default)),
              (this.scope = t.context),
              (this.requiresReaction = !!t.requiresReaction),
              (this.keepAlive = !!t.keepAlive);
          }
          return (
            (t.prototype.onBecomeStale = function () {
              !(function (t) {
                if (t.lowestObserverState !== Y.UP_TO_DATE) return;
                (t.lowestObserverState = Y.POSSIBLY_STALE),
                  t.observers.forEach(function (e) {
                    e.dependenciesState === Y.UP_TO_DATE &&
                      ((e.dependenciesState = Y.POSSIBLY_STALE), e.isTracing !== $.NONE && It(e, t), e.onBecomeStale());
                  });
              })(this);
            }),
            (t.prototype.onBecomeObserved = function () {
              this.onBecomeObservedListeners &&
                this.onBecomeObservedListeners.forEach(function (t) {
                  return t();
                });
            }),
            (t.prototype.onBecomeUnobserved = function () {
              this.onBecomeUnobservedListeners &&
                this.onBecomeUnobservedListeners.forEach(function (t) {
                  return t();
                });
            }),
            (t.prototype.get = function () {
              this.isComputing && p('Cycle detected in computation ' + this.name + ': ' + this.derivation),
                0 !== Tt.inBatch || 0 !== this.observers.size || this.keepAlive
                  ? (Rt(this),
                    nt(this) &&
                      this.trackAndCompute() &&
                      (function (t) {
                        if (t.lowestObserverState === Y.STALE) return;
                        (t.lowestObserverState = Y.STALE),
                          t.observers.forEach(function (e) {
                            e.dependenciesState === Y.POSSIBLY_STALE
                              ? (e.dependenciesState = Y.STALE)
                              : e.dependenciesState === Y.UP_TO_DATE && (t.lowestObserverState = Y.UP_TO_DATE);
                          });
                      })(this))
                  : nt(this) && (this.warnAboutUntrackedRead(), Vt(), (this.value = this.computeValue(!1)), Ct());
              var t = this.value;
              if (rt(t)) throw t.cause;
              return t;
            }),
            (t.prototype.peek = function () {
              var t = this.computeValue(!1);
              if (rt(t)) throw t.cause;
              return t;
            }),
            (t.prototype.set = function (t) {
              if (this.setter) {
                h(
                  !this.isRunningSetter,
                  "The setter of computed value '" +
                    this.name +
                    "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?"
                ),
                  (this.isRunningSetter = !0);
                try {
                  this.setter.call(this.scope, t);
                } finally {
                  this.isRunningSetter = !1;
                }
              } else h(!1, !1);
            }),
            (t.prototype.trackAndCompute = function () {
              var t = this.value,
                e = this.dependenciesState === Y.NOT_TRACKING,
                r = this.computeValue(!0),
                n = e || rt(t) || rt(r) || !this.equals(t, r);
              return n && (this.value = r), n;
            }),
            (t.prototype.computeValue = function (t) {
              var e;
              if (((this.isComputing = !0), Tt.computationDepth++, t)) e = at(this, this.derivation, this.scope);
              else if (!0 === Tt.disableErrorBoundaries) e = this.derivation.call(this.scope);
              else
                try {
                  e = this.derivation.call(this.scope);
                } catch (t) {
                  e = new et(t);
                }
              return Tt.computationDepth--, (this.isComputing = !1), e;
            }),
            (t.prototype.suspend = function () {
              this.keepAlive || (st(this), (this.value = void 0));
            }),
            (t.prototype.observe = function (t, e) {
              var r = this,
                n = !0,
                i = void 0;
              return Zt(function () {
                var o = r.get();
                if (!n || e) {
                  var a = ct();
                  t({ type: 'update', object: r, newValue: o, oldValue: i }), lt(a);
                }
                (n = !1), (i = o);
              });
            }),
            (t.prototype.warnAboutUntrackedRead = function () {}),
            (t.prototype.toJSON = function () {
              return this.get();
            }),
            (t.prototype.toString = function () {
              return this.name + '[' + this.derivation.toString() + ']';
            }),
            (t.prototype.valueOf = function () {
              return j(this.get());
            }),
            (t.prototype[Symbol.toPrimitive] = function () {
              return this.valueOf();
            }),
            t
          );
        })()),
      Pt = g('ComputedValue', At),
      St = function () {
        (this.version = 5),
          (this.UNCHANGED = {}),
          (this.trackingDerivation = null),
          (this.computationDepth = 0),
          (this.runId = 0),
          (this.mobxGuid = 0),
          (this.inBatch = 0),
          (this.pendingUnobservations = []),
          (this.pendingReactions = []),
          (this.isRunningReactions = !1),
          (this.allowStateChanges = !0),
          (this.allowStateReads = !0),
          (this.enforceActions = !1),
          (this.spyListeners = []),
          (this.globalReactionErrorHandlers = []),
          (this.computedRequiresReaction = !1),
          (this.reactionRequiresObservable = !1),
          (this.observableRequiresReaction = !1),
          (this.computedConfigurable = !1),
          (this.disableErrorBoundaries = !1),
          (this.suppressReactionErrors = !1);
      },
      Et = {};
    function Dt() {
      return 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : Et;
    }
    var zt = !0,
      kt = !1,
      Tt = (function () {
        var t = Dt();
        return (
          t.__mobxInstanceCount > 0 && !t.__mobxGlobals && (zt = !1),
          t.__mobxGlobals && t.__mobxGlobals.version !== new St().version && (zt = !1),
          zt
            ? t.__mobxGlobals
              ? ((t.__mobxInstanceCount += 1), t.__mobxGlobals.UNCHANGED || (t.__mobxGlobals.UNCHANGED = {}), t.__mobxGlobals)
              : ((t.__mobxInstanceCount = 1), (t.__mobxGlobals = new St()))
            : (setTimeout(function () {
                kt ||
                  p(
                    'There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`'
                  );
              }, 1),
              new St())
        );
      })();
    function Lt(t, e) {
      t.observers.add(e), t.lowestObserverState > e.dependenciesState && (t.lowestObserverState = e.dependenciesState);
    }
    function Nt(t, e) {
      t.observers.delete(e), 0 === t.observers.size && Mt(t);
    }
    function Mt(t) {
      !1 === t.isPendingUnobservation && ((t.isPendingUnobservation = !0), Tt.pendingUnobservations.push(t));
    }
    function Vt() {
      Tt.inBatch++;
    }
    function Ct() {
      if (0 == --Tt.inBatch) {
        Ut();
        for (var t = Tt.pendingUnobservations, e = 0; e < t.length; e++) {
          var r = t[e];
          (r.isPendingUnobservation = !1),
            0 === r.observers.size &&
              (r.isBeingObserved && ((r.isBeingObserved = !1), r.onBecomeUnobserved()), r instanceof At && r.suspend());
        }
        Tt.pendingUnobservations = [];
      }
    }
    function Rt(t) {
      var e = Tt.trackingDerivation;
      return null !== e
        ? (e.runId !== t.lastAccessedBy &&
            ((t.lastAccessedBy = e.runId),
            (e.newObserving[e.unboundDepsCount++] = t),
            t.isBeingObserved || ((t.isBeingObserved = !0), t.onBecomeObserved())),
          !0)
        : (0 === t.observers.size && Tt.inBatch > 0 && Mt(t), !1);
    }
    function It(t, e) {
      if ((console.log("[mobx.trace] '" + t.name + "' is invalidated due to a change in: '" + e.name + "'"), t.isTracing === $.BREAK)) {
        var r = [];
        !(function t(e, r, n) {
          if (r.length >= 1e3) return void r.push('(and many more)');
          r.push('' + new Array(n).join('\t') + e.name),
            e.dependencies &&
              e.dependencies.forEach(function (e) {
                return t(e, r, n + 1);
              });
        })(((n = t), ce(or(n, i))), r, 1),
          new Function(
            "debugger;\n/*\nTracing '" +
              t.name +
              "'\n\nYou are entering this break point because derivation '" +
              t.name +
              "' is being traced and '" +
              e.name +
              "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" +
              (t instanceof At ? t.derivation.toString().replace(/[*]\//g, '/') : '') +
              '\n\nThe dependencies for this derivation are:\n\n' +
              r.join('\n') +
              '\n*/\n    '
          )();
      }
      var n, i;
    }
    var Bt = (function () {
      function t(t, e, r, n) {
        void 0 === t && (t = 'Reaction@' + l()),
          void 0 === n && (n = !1),
          (this.name = t),
          (this.onInvalidate = e),
          (this.errorHandler = r),
          (this.requiresObservable = n),
          (this.observing = []),
          (this.newObserving = []),
          (this.dependenciesState = Y.NOT_TRACKING),
          (this.diffValue = 0),
          (this.runId = 0),
          (this.unboundDepsCount = 0),
          (this.__mapid = '#' + l()),
          (this.isDisposed = !1),
          (this._isScheduled = !1),
          (this._isTrackPending = !1),
          (this._isRunning = !1),
          (this.isTracing = $.NONE);
      }
      return (
        (t.prototype.onBecomeStale = function () {
          this.schedule();
        }),
        (t.prototype.schedule = function () {
          this._isScheduled || ((this._isScheduled = !0), Tt.pendingReactions.push(this), Ut());
        }),
        (t.prototype.isScheduled = function () {
          return this._isScheduled;
        }),
        (t.prototype.runReaction = function () {
          if (!this.isDisposed) {
            if ((Vt(), (this._isScheduled = !1), nt(this))) {
              this._isTrackPending = !0;
              try {
                this.onInvalidate(), this._isTrackPending;
              } catch (t) {
                this.reportExceptionInDerivation(t);
              }
            }
            Ct();
          }
        }),
        (t.prototype.track = function (t) {
          if (!this.isDisposed) {
            Vt();
            0, (this._isRunning = !0);
            var e = at(this, t, void 0);
            (this._isRunning = !1),
              (this._isTrackPending = !1),
              this.isDisposed && st(this),
              rt(e) && this.reportExceptionInDerivation(e.cause),
              Ct();
          }
        }),
        (t.prototype.reportExceptionInDerivation = function (t) {
          var e = this;
          if (this.errorHandler) this.errorHandler(t, this);
          else {
            if (Tt.disableErrorBoundaries) throw t;
            var r = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
            Tt.suppressReactionErrors
              ? console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)")
              : console.error(r, t),
              Tt.globalReactionErrorHandlers.forEach(function (r) {
                return r(t, e);
              });
          }
        }),
        (t.prototype.dispose = function () {
          this.isDisposed || ((this.isDisposed = !0), this._isRunning || (Vt(), st(this), Ct()));
        }),
        (t.prototype.getDisposer = function () {
          var t = this.dispose.bind(this);
          return (t[x] = this), t;
        }),
        (t.prototype.toString = function () {
          return 'Reaction[' + this.name + ']';
        }),
        (t.prototype.trace = function (t) {
          void 0 === t && (t = !1),
            (function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              var r = !1;
              'boolean' == typeof t[t.length - 1] && (r = t.pop());
              var n = je(t);
              if (!n) return p(!1);
              n.isTracing === $.NONE && console.log("[mobx.trace] '" + n.name + "' tracing enabled");
              n.isTracing = r ? $.BREAK : $.LOG;
            })(this, t);
        }),
        t
      );
    })();
    var Ht = function (t) {
      return t();
    };
    function Ut() {
      Tt.inBatch > 0 || Tt.isRunningReactions || Ht(Ft);
    }
    function Ft() {
      Tt.isRunningReactions = !0;
      for (var t = Tt.pendingReactions, e = 0; t.length > 0; ) {
        100 == ++e &&
          (console.error(
            "Reaction doesn't converge to a stable state after 100 iterations. Probably there is a cycle in the reactive function: " + t[0]
          ),
          t.splice(0));
        for (var r = t.splice(0), n = 0, i = r.length; n < i; n++) r[n].runReaction();
      }
      Tt.isRunningReactions = !1;
    }
    var Gt = g('Reaction', Bt);
    function Wt(t) {
      var e = Ht;
      Ht = function (r) {
        return t(function () {
          return e(r);
        });
      };
    }
    function qt() {
      p(!1);
    }
    function Kt(t) {
      return function (e, r, n) {
        if (n) {
          if (n.value)
            return {
              value: bt(t, n.value),
              enumerable: !1,
              configurable: !0,
              writable: !0,
            };
          var i = n.initializer;
          return {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            initializer: function () {
              return bt(t, i.call(this));
            },
          };
        }
        return Jt(t).apply(this, arguments);
      };
    }
    function Jt(t) {
      return function (e, r, n) {
        Object.defineProperty(e, r, {
          configurable: !0,
          enumerable: !1,
          get: function () {},
          set: function (e) {
            b(this, r, Xt(t, e));
          },
        });
      };
    }
    var Xt = function (t, e, r, n) {
      return 1 === arguments.length && 'function' == typeof t
        ? bt(t.name || '<unnamed action>', t)
        : 2 === arguments.length && 'function' == typeof e
        ? bt(t, e)
        : 1 === arguments.length && 'string' == typeof t
        ? Kt(t)
        : !0 !== n
        ? Kt(e).apply(null, arguments)
        : void b(t, e, bt(t.name || e, r.value, this));
    };
    function Yt(t, e) {
      return gt('string' == typeof t ? t : t.name || '<unnamed action>', 'function' == typeof t ? t : e, this, void 0);
    }
    function $t(t) {
      return 'function' == typeof t && !0 === t.isMobxAction;
    }
    function Qt(t, e, r) {
      b(t, e, bt(e, r.bind(t)));
    }
    function Zt(t, e) {
      void 0 === e && (e = c);
      var r,
        n = (e && e.name) || t.name || 'Autorun@' + l();
      if (!e.scheduler && !e.delay)
        r = new Bt(
          n,
          function () {
            this.track(a);
          },
          e.onError,
          e.requiresObservable
        );
      else {
        var i = ee(e),
          o = !1;
        r = new Bt(
          n,
          function () {
            o ||
              ((o = !0),
              i(function () {
                (o = !1), r.isDisposed || r.track(a);
              }));
          },
          e.onError,
          e.requiresObservable
        );
      }
      function a() {
        t(r);
      }
      return r.schedule(), r.getDisposer();
    }
    Xt.bound = function (t, e, r, n) {
      return !0 === n
        ? (Qt(t, e, r.value), null)
        : r
        ? {
            configurable: !0,
            enumerable: !1,
            get: function () {
              return Qt(this, e, r.value || r.initializer.call(this)), this[e];
            },
            set: qt,
          }
        : {
            enumerable: !1,
            configurable: !0,
            set: function (t) {
              Qt(this, e, t);
            },
            get: function () {},
          };
    };
    var te = function (t) {
      return t();
    };
    function ee(t) {
      return t.scheduler
        ? t.scheduler
        : t.delay
        ? function (e) {
            return setTimeout(e, t.delay);
          }
        : te;
    }
    function re(t, e, r) {
      void 0 === r && (r = c);
      var n,
        i,
        o,
        a = r.name || 'Reaction@' + l(),
        s = Xt(
          a,
          r.onError
            ? ((n = r.onError),
              (i = e),
              function () {
                try {
                  return i.apply(this, arguments);
                } catch (t) {
                  n.call(this, t);
                }
              })
            : e
        ),
        u = !r.scheduler && !r.delay,
        p = ee(r),
        h = !0,
        f = !1,
        d = r.compareStructural ? E.structural : r.equals || E.default,
        v = new Bt(
          a,
          function () {
            h || u ? y() : f || ((f = !0), p(y));
          },
          r.onError,
          r.requiresObservable
        );
      function y() {
        if (((f = !1), !v.isDisposed)) {
          var e = !1;
          v.track(function () {
            var r = t(v);
            (e = h || !d(o, r)), (o = r);
          }),
            h && r.fireImmediately && s(o, v),
            h || !0 !== e || s(o, v),
            h && (h = !1);
        }
      }
      return v.schedule(), v.getDisposer();
    }
    function ne(t, e, r) {
      return ie('onBecomeUnobserved', t, e, r);
    }
    function ie(t, e, r, n) {
      var i = 'function' == typeof n ? or(e, r) : or(e),
        o = 'function' == typeof n ? n : r,
        a = t + 'Listeners';
      return (
        i[a] ? i[a].add(o) : (i[a] = new Set([o])),
        'function' != typeof i[t]
          ? p(!1)
          : function () {
              var t = i[a];
              t && (t.delete(o), 0 === t.size && delete i[a]);
            }
      );
    }
    function oe(t) {
      var e = t.enforceActions,
        r = t.computedRequiresReaction,
        n = t.computedConfigurable,
        i = t.disableErrorBoundaries,
        o = t.reactionScheduler,
        a = t.reactionRequiresObservable,
        s = t.observableRequiresReaction;
      if (
        (!0 === t.isolateGlobalState &&
          ((Tt.pendingReactions.length || Tt.inBatch || Tt.isRunningReactions) &&
            p('isolateGlobalState should be called before MobX is running any reactions'),
          (kt = !0),
          zt && (0 == --Dt().__mobxInstanceCount && (Dt().__mobxGlobals = void 0), (Tt = new St()))),
        void 0 !== e)
      ) {
        var u = void 0;
        switch (e) {
          case !0:
          case 'observed':
            u = !0;
            break;
          case !1:
          case 'never':
            u = !1;
            break;
          case 'strict':
          case 'always':
            u = 'strict';
            break;
          default:
            p("Invalid value for 'enforceActions': '" + e + "', expected 'never', 'always' or 'observed'");
        }
        (Tt.enforceActions = u), (Tt.allowStateChanges = !0 !== u && 'strict' !== u);
      }
      void 0 !== r && (Tt.computedRequiresReaction = !!r),
        void 0 !== a && (Tt.reactionRequiresObservable = !!a),
        void 0 !== s && ((Tt.observableRequiresReaction = !!s), (Tt.allowStateReads = !Tt.observableRequiresReaction)),
        void 0 !== n && (Tt.computedConfigurable = !!n),
        void 0 !== i &&
          (!0 === i &&
            console.warn('WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.'),
          (Tt.disableErrorBoundaries = !!i)),
        o && Wt(o);
    }
    function ae(t, e, r, n) {
      var i = se((n = H(n)));
      return N(t), Ze(t, n.name, i.enhancer), e && ue(t, e, r, i), t;
    }
    function se(t) {
      return t.defaultDecorator || (!1 === t.deep ? G : U);
    }
    function ue(t, e, r, n) {
      var i, a;
      Vt();
      try {
        var s = O(e);
        try {
          for (var u = o(s), c = u.next(); !c.done; c = u.next()) {
            var l = c.value,
              p = Object.getOwnPropertyDescriptor(e, l);
            0;
            var h = (r && l in r ? r[l] : p.get ? Q : n)(t, l, p, !0);
            h && Object.defineProperty(t, l, h);
          }
        } catch (t) {
          i = { error: t };
        } finally {
          try {
            c && !c.done && (a = u.return) && a.call(u);
          } finally {
            if (i) throw i.error;
          }
        }
      } finally {
        Ct();
      }
    }
    function ce(t) {
      var e,
        r,
        n = { name: t.name };
      return (
        t.observing &&
          t.observing.length > 0 &&
          (n.dependencies = ((e = t.observing),
          (r = []),
          e.forEach(function (t) {
            -1 === r.indexOf(t) && r.push(t);
          }),
          r).map(ce)),
        n
      );
    }
    var le = 0;
    function pe() {
      this.message = 'FLOW_CANCELLED';
    }
    function he(t) {
      1 !== arguments.length && p('Flow expects 1 argument and cannot be used as decorator');
      var e = t.name || '<unnamed flow>';
      return function () {
        var r,
          n = this,
          i = arguments,
          o = ++le,
          a = Xt(e + ' - runid: ' + o + ' - init', t).apply(n, i),
          s = void 0,
          u = new Promise(function (t, n) {
            var i = 0;
            function u(t) {
              var r;
              s = void 0;
              try {
                r = Xt(e + ' - runid: ' + o + ' - yield ' + i++, a.next).call(a, t);
              } catch (t) {
                return n(t);
              }
              l(r);
            }
            function c(t) {
              var r;
              s = void 0;
              try {
                r = Xt(e + ' - runid: ' + o + ' - yield ' + i++, a.throw).call(a, t);
              } catch (t) {
                return n(t);
              }
              l(r);
            }
            function l(e) {
              if (!e || 'function' != typeof e.then) return e.done ? t(e.value) : (s = Promise.resolve(e.value)).then(u, c);
              e.then(l, n);
            }
            (r = n), u(void 0);
          });
        return (
          (u.cancel = Xt(e + ' - runid: ' + o + ' - cancel', function () {
            try {
              s && fe(s);
              var t = a.return(void 0),
                e = Promise.resolve(t.value);
              e.then(d, d), fe(e), r(new pe());
            } catch (t) {
              r(t);
            }
          })),
          u
        );
      };
    }
    function fe(t) {
      'function' == typeof t.cancel && t.cancel();
    }
    function de(t, e) {
      if (null == t) return !1;
      if (void 0 !== e) {
        if (!1 === ir(t)) return !1;
        if (!t[x].values.has(e)) return !1;
        var r = or(t, e);
        return Pt(r);
      }
      return Pt(t);
    }
    function ve(t) {
      return arguments.length > 1 ? p(!1) : de(t);
    }
    function ye(t, e) {
      return 'string' != typeof e ? p(!1) : de(t, e);
    }
    function be(t, e) {
      return null != t && (void 0 !== e ? !!ir(t) && t[x].values.has(e) : ir(t) || !!t[x] || P(t) || Gt(t) || Pt(t));
    }
    function ge(t) {
      return 1 !== arguments.length && p(!1), be(t);
    }
    function me(t) {
      return ir(t)
        ? t[x].getKeys()
        : Je(t) || $e(t)
        ? Array.from(t.keys())
        : Ge(t)
        ? t.map(function (t, e) {
            return e;
          })
        : p(!1);
    }
    function _e(t) {
      return ir(t)
        ? me(t).map(function (e) {
            return t[e];
          })
        : Je(t)
        ? me(t).map(function (e) {
            return t.get(e);
          })
        : $e(t)
        ? Array.from(t.values())
        : Ge(t)
        ? t.slice()
        : p(!1);
    }
    function Oe(t) {
      return ir(t)
        ? me(t).map(function (e) {
            return [e, t[e]];
          })
        : Je(t)
        ? me(t).map(function (e) {
            return [e, t.get(e)];
          })
        : $e(t)
        ? Array.from(t.entries())
        : Ge(t)
        ? t.map(function (t, e) {
            return [e, t];
          })
        : p(!1);
    }
    function we(t, e, r, n) {
      return 'function' == typeof r
        ? (function (t, e, r, n) {
            return ar(t, e).observe(r, n);
          })(t, e, r, n)
        : (function (t, e, r) {
            return ar(t).observe(e, r);
          })(t, e, r);
    }
    pe.prototype = Object.create(Error.prototype);
    function je(t) {
      switch (t.length) {
        case 0:
          return Tt.trackingDerivation;
        case 1:
          return or(t[0]);
        case 2:
          return or(t[0], t[1]);
      }
    }
    function xe(t, e) {
      void 0 === e && (e = void 0), Vt();
      try {
        return t.apply(e);
      } finally {
        Ct();
      }
    }
    function Ae(t, e, r) {
      return 1 === arguments.length || (e && 'object' == typeof e) ? Se(t, e) : Pe(t, e, r || {});
    }
    function Pe(t, e, r) {
      var n;
      'number' == typeof r.timeout &&
        (n = setTimeout(function () {
          if (!o[x].isDisposed) {
            o();
            var t = new Error('WHEN_TIMEOUT');
            if (!r.onError) throw t;
            r.onError(t);
          }
        }, r.timeout)),
        (r.name = r.name || 'When@' + l());
      var i = bt(r.name + '-effect', e),
        o = Zt(function (e) {
          t() && (e.dispose(), n && clearTimeout(n), i());
        }, r);
      return o;
    }
    function Se(t, e) {
      var r;
      var n = new Promise(function (n, o) {
        var a = Pe(t, n, i(i({}, e), { onError: o }));
        r = function () {
          a(), o('WHEN_CANCELLED');
        };
      });
      return (n.cancel = r), n;
    }
    function Ee(t) {
      return t[x];
    }
    function De(t) {
      return 'string' == typeof t || 'number' == typeof t || 'symbol' == typeof t;
    }
    var ze = {
      has: function (t, e) {
        if (e === x || 'constructor' === e || e === D) return !0;
        var r = Ee(t);
        return De(e) ? r.has(e) : e in t;
      },
      get: function (t, e) {
        if (e === x || 'constructor' === e || e === D) return t[e];
        var r = Ee(t),
          n = r.values.get(e);
        if (n instanceof A) {
          var i = n.get();
          return void 0 === i && r.has(e), i;
        }
        return De(e) && r.has(e), t[e];
      },
      set: function (t, e, r) {
        return (
          !!De(e) &&
          ((function t(e, r, n) {
            if (2 !== arguments.length || $e(e))
              if (ir(e)) {
                var i = e[x],
                  o = i.values.get(r);
                o ? i.write(r, n) : i.addObservableProp(r, n, i.defaultEnhancer);
              } else if (Je(e)) e.set(r, n);
              else if ($e(e)) e.add(r);
              else {
                if (!Ge(e)) return p(!1);
                'number' != typeof r && (r = parseInt(r, 10)),
                  h(r >= 0, "Not a valid index: '" + r + "'"),
                  Vt(),
                  r >= e.length && (e.length = r + 1),
                  (e[r] = n),
                  Ct();
              }
            else {
              Vt();
              var a = r;
              try {
                for (var s in a) t(e, s, a[s]);
              } finally {
                Ct();
              }
            }
          })(t, e, r),
          !0)
        );
      },
      deleteProperty: function (t, e) {
        return !!De(e) && (Ee(t).remove(e), !0);
      },
      ownKeys: function (t) {
        return Ee(t).keysAtom.reportObserved(), Reflect.ownKeys(t);
      },
      preventExtensions: function (t) {
        return p('Dynamic observable objects cannot be frozen'), !1;
      },
    };
    function ke(t) {
      var e = new Proxy(t, ze);
      return (t[x].proxy = e), e;
    }
    function Te(t) {
      return void 0 !== t.interceptors && t.interceptors.length > 0;
    }
    function Le(t, e) {
      var r = t.interceptors || (t.interceptors = []);
      return (
        r.push(e),
        f(function () {
          var t = r.indexOf(e);
          -1 !== t && r.splice(t, 1);
        })
      );
    }
    function Ne(t, e) {
      var r = ct();
      try {
        for (
          var n = s(t.interceptors || []), i = 0, o = n.length;
          i < o && (h(!(e = n[i](e)) || e.type, 'Intercept handlers should return nothing or a change object'), e);
          i++
        );
        return e;
      } finally {
        lt(r);
      }
    }
    function Me(t) {
      return void 0 !== t.changeListeners && t.changeListeners.length > 0;
    }
    function Ve(t, e) {
      var r = t.changeListeners || (t.changeListeners = []);
      return (
        r.push(e),
        f(function () {
          var t = r.indexOf(e);
          -1 !== t && r.splice(t, 1);
        })
      );
    }
    function Ce(t, e) {
      var r = ct(),
        n = t.changeListeners;
      if (n) {
        for (var i = 0, o = (n = n.slice()).length; i < o; i++) n[i](e);
        lt(r);
      }
    }
    var Re = {
      get: function (t, e) {
        return e === x
          ? t[x]
          : 'length' === e
          ? t[x].getArrayLength()
          : 'number' == typeof e
          ? He.get.call(t, e)
          : 'string' != typeof e || isNaN(e)
          ? He.hasOwnProperty(e)
            ? He[e]
            : t[e]
          : He.get.call(t, parseInt(e));
      },
      set: function (t, e, r) {
        return (
          'length' === e && t[x].setArrayLength(r),
          'number' == typeof e && He.set.call(t, e, r),
          'symbol' == typeof e || isNaN(e) ? (t[e] = r) : He.set.call(t, parseInt(e), r),
          !0
        );
      },
      preventExtensions: function (t) {
        return p('Observable arrays cannot be frozen'), !1;
      },
    };
    function Ie(t, e, r, n) {
      void 0 === r && (r = 'ObservableArray@' + l()), void 0 === n && (n = !1);
      var i,
        o,
        a,
        s = new Be(r, e, n);
      (i = s.values),
        (o = x),
        (a = s),
        Object.defineProperty(i, o, {
          enumerable: !1,
          writable: !1,
          configurable: !0,
          value: a,
        });
      var u = new Proxy(s.values, Re);
      if (((s.proxy = u), t && t.length)) {
        var c = wt(!0);
        s.spliceWithArray(0, 0, t), jt(c);
      }
      return u;
    }
    var Be = (function () {
        function t(t, e, r) {
          (this.owned = r),
            (this.values = []),
            (this.proxy = void 0),
            (this.lastKnownLength = 0),
            (this.atom = new A(t || 'ObservableArray@' + l())),
            (this.enhancer = function (r, n) {
              return e(r, n, t + '[..]');
            });
        }
        return (
          (t.prototype.dehanceValue = function (t) {
            return void 0 !== this.dehancer ? this.dehancer(t) : t;
          }),
          (t.prototype.dehanceValues = function (t) {
            return void 0 !== this.dehancer && t.length > 0 ? t.map(this.dehancer) : t;
          }),
          (t.prototype.intercept = function (t) {
            return Le(this, t);
          }),
          (t.prototype.observe = function (t, e) {
            return (
              void 0 === e && (e = !1),
              e &&
                t({
                  object: this.proxy,
                  type: 'splice',
                  index: 0,
                  added: this.values.slice(),
                  addedCount: this.values.length,
                  removed: [],
                  removedCount: 0,
                }),
              Ve(this, t)
            );
          }),
          (t.prototype.getArrayLength = function () {
            return this.atom.reportObserved(), this.values.length;
          }),
          (t.prototype.setArrayLength = function (t) {
            if ('number' != typeof t || t < 0) throw new Error('[mobx.array] Out of range: ' + t);
            var e = this.values.length;
            if (t !== e)
              if (t > e) {
                for (var r = new Array(t - e), n = 0; n < t - e; n++) r[n] = void 0;
                this.spliceWithArray(e, 0, r);
              } else this.spliceWithArray(t, e - t);
          }),
          (t.prototype.updateArrayLength = function (t, e) {
            if (t !== this.lastKnownLength)
              throw new Error('[mobx] Modification exception: the internal structure of an observable array was changed.');
            this.lastKnownLength += e;
          }),
          (t.prototype.spliceWithArray = function (t, e, r) {
            var n = this;
            ot(this.atom);
            var i = this.values.length;
            if (
              (void 0 === t ? (t = 0) : t > i ? (t = i) : t < 0 && (t = Math.max(0, i + t)),
              (e = 1 === arguments.length ? i - t : null == e ? 0 : Math.max(0, Math.min(e, i - t))),
              void 0 === r && (r = u),
              Te(this))
            ) {
              var o = Ne(this, {
                object: this.proxy,
                type: 'splice',
                index: t,
                removedCount: e,
                added: r,
              });
              if (!o) return u;
              (e = o.removedCount), (r = o.added);
            }
            r =
              0 === r.length
                ? r
                : r.map(function (t) {
                    return n.enhancer(t, void 0);
                  });
            var a = this.spliceItemsIntoValues(t, e, r);
            return (0 === e && 0 === r.length) || this.notifyArraySplice(t, r, a), this.dehanceValues(a);
          }),
          (t.prototype.spliceItemsIntoValues = function (t, e, r) {
            var n;
            if (r.length < 1e4) return (n = this.values).splice.apply(n, s([t, e], r));
            var i = this.values.slice(t, t + e);
            return (this.values = this.values.slice(0, t).concat(r, this.values.slice(t + e))), i;
          }),
          (t.prototype.notifyArrayChildUpdate = function (t, e, r) {
            var n = !this.owned && !1,
              i = Me(this),
              o =
                i || n
                  ? {
                      object: this.proxy,
                      type: 'update',
                      index: t,
                      newValue: e,
                      oldValue: r,
                    }
                  : null;
            this.atom.reportChanged(), i && Ce(this, o);
          }),
          (t.prototype.notifyArraySplice = function (t, e, r) {
            var n = !this.owned && !1,
              i = Me(this),
              o =
                i || n
                  ? {
                      object: this.proxy,
                      type: 'splice',
                      index: t,
                      removed: r,
                      added: e,
                      removedCount: r.length,
                      addedCount: e.length,
                    }
                  : null;
            this.atom.reportChanged(), i && Ce(this, o);
          }),
          t
        );
      })(),
      He = {
        intercept: function (t) {
          return this[x].intercept(t);
        },
        observe: function (t, e) {
          return void 0 === e && (e = !1), this[x].observe(t, e);
        },
        clear: function () {
          return this.splice(0);
        },
        replace: function (t) {
          var e = this[x];
          return e.spliceWithArray(0, e.values.length, t);
        },
        toJS: function () {
          return this.slice();
        },
        toJSON: function () {
          return this.toJS();
        },
        splice: function (t, e) {
          for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
          var i = this[x];
          switch (arguments.length) {
            case 0:
              return [];
            case 1:
              return i.spliceWithArray(t);
            case 2:
              return i.spliceWithArray(t, e);
          }
          return i.spliceWithArray(t, e, r);
        },
        spliceWithArray: function (t, e, r) {
          return this[x].spliceWithArray(t, e, r);
        },
        push: function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          var r = this[x];
          return r.spliceWithArray(r.values.length, 0, t), r.values.length;
        },
        pop: function () {
          return this.splice(Math.max(this[x].values.length - 1, 0), 1)[0];
        },
        shift: function () {
          return this.splice(0, 1)[0];
        },
        unshift: function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          var r = this[x];
          return r.spliceWithArray(0, 0, t), r.values.length;
        },
        reverse: function () {
          var t = this.slice();
          return t.reverse.apply(t, arguments);
        },
        sort: function (t) {
          var e = this.slice();
          return e.sort.apply(e, arguments);
        },
        remove: function (t) {
          var e = this[x],
            r = e.dehanceValues(e.values).indexOf(t);
          return r > -1 && (this.splice(r, 1), !0);
        },
        get: function (t) {
          var e = this[x];
          if (e) {
            if (t < e.values.length) return e.atom.reportObserved(), e.dehanceValue(e.values[t]);
            console.warn(
              '[mobx.array] Attempt to read an array index (' +
                t +
                ') that is out of bounds (' +
                e.values.length +
                '). Please check length first. Out of bound indices will not be tracked by MobX'
            );
          }
        },
        set: function (t, e) {
          var r = this[x],
            n = r.values;
          if (t < n.length) {
            ot(r.atom);
            var i = n[t];
            if (Te(r)) {
              var o = Ne(r, {
                type: 'update',
                object: r.proxy,
                index: t,
                newValue: e,
              });
              if (!o) return;
              e = o.newValue;
            }
            (e = r.enhancer(e, i)) !== i && ((n[t] = e), r.notifyArrayChildUpdate(t, e, i));
          } else {
            if (t !== n.length) throw new Error('[mobx.array] Index out of bounds, ' + t + ' is larger than ' + n.length);
            r.spliceWithArray(t, 0, [e]);
          }
        },
      };
    [
      'concat',
      'every',
      'filter',
      'forEach',
      'indexOf',
      'join',
      'lastIndexOf',
      'map',
      'reduce',
      'reduceRight',
      'slice',
      'some',
      'toString',
      'toLocaleString',
    ].forEach(function (t) {
      He[t] = function () {
        var e = this[x];
        e.atom.reportObserved();
        var r = e.dehanceValues(e.values);
        return r[t].apply(r, arguments);
      };
    });
    var Ue,
      Fe = g('ObservableArrayAdministration', Be);
    function Ge(t) {
      return v(t) && Fe(t[x]);
    }
    var We,
      qe = {},
      Ke = (function () {
        function t(t, e, r) {
          if (
            (void 0 === e && (e = C),
            void 0 === r && (r = 'ObservableMap@' + l()),
            (this.enhancer = e),
            (this.name = r),
            (this[Ue] = qe),
            (this._keysAtom = S(this.name + '.keys()')),
            (this[Symbol.toStringTag] = 'Map'),
            'function' != typeof Map)
          )
            throw new Error('mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js');
          (this._data = new Map()), (this._hasMap = new Map()), this.merge(t);
        }
        return (
          (t.prototype._has = function (t) {
            return this._data.has(t);
          }),
          (t.prototype.has = function (t) {
            var e = this;
            if (!Tt.trackingDerivation) return this._has(t);
            var r = this._hasMap.get(t);
            if (!r) {
              var n = (r = new xt(this._has(t), R, this.name + '.' + w(t) + '?', !1));
              this._hasMap.set(t, n),
                ne(n, function () {
                  return e._hasMap.delete(t);
                });
            }
            return r.get();
          }),
          (t.prototype.set = function (t, e) {
            var r = this._has(t);
            if (Te(this)) {
              var n = Ne(this, {
                type: r ? 'update' : 'add',
                object: this,
                newValue: e,
                name: t,
              });
              if (!n) return this;
              e = n.newValue;
            }
            return r ? this._updateValue(t, e) : this._addValue(t, e), this;
          }),
          (t.prototype.delete = function (t) {
            var e = this;
            if (Te(this) && !(n = Ne(this, { type: 'delete', object: this, name: t }))) return !1;
            if (this._has(t)) {
              var r = Me(this),
                n = r
                  ? {
                      type: 'delete',
                      object: this,
                      oldValue: this._data.get(t).value,
                      name: t,
                    }
                  : null;
              return (
                xe(function () {
                  e._keysAtom.reportChanged(), e._updateHasMapEntry(t, !1), e._data.get(t).setNewValue(void 0), e._data.delete(t);
                }),
                r && Ce(this, n),
                !0
              );
            }
            return !1;
          }),
          (t.prototype._updateHasMapEntry = function (t, e) {
            var r = this._hasMap.get(t);
            r && r.setNewValue(e);
          }),
          (t.prototype._updateValue = function (t, e) {
            var r = this._data.get(t);
            if ((e = r.prepareNewValue(e)) !== Tt.UNCHANGED) {
              var n = Me(this),
                i = n
                  ? {
                      type: 'update',
                      object: this,
                      oldValue: r.value,
                      name: t,
                      newValue: e,
                    }
                  : null;
              0, r.setNewValue(e), n && Ce(this, i);
            }
          }),
          (t.prototype._addValue = function (t, e) {
            var r = this;
            ot(this._keysAtom),
              xe(function () {
                var n = new xt(e, r.enhancer, r.name + '.' + w(t), !1);
                r._data.set(t, n), (e = n.value), r._updateHasMapEntry(t, !0), r._keysAtom.reportChanged();
              });
            var n = Me(this),
              i = n ? { type: 'add', object: this, name: t, newValue: e } : null;
            n && Ce(this, i);
          }),
          (t.prototype.get = function (t) {
            return this.has(t) ? this.dehanceValue(this._data.get(t).get()) : this.dehanceValue(void 0);
          }),
          (t.prototype.dehanceValue = function (t) {
            return void 0 !== this.dehancer ? this.dehancer(t) : t;
          }),
          (t.prototype.keys = function () {
            return this._keysAtom.reportObserved(), this._data.keys();
          }),
          (t.prototype.values = function () {
            var t = this,
              e = 0,
              r = Array.from(this.keys());
            return pr({
              next: function () {
                return e < r.length ? { value: t.get(r[e++]), done: !1 } : { done: !0 };
              },
            });
          }),
          (t.prototype.entries = function () {
            var t = this,
              e = 0,
              r = Array.from(this.keys());
            return pr({
              next: function () {
                if (e < r.length) {
                  var n = r[e++];
                  return { value: [n, t.get(n)], done: !1 };
                }
                return { done: !0 };
              },
            });
          }),
          (t.prototype[((Ue = x), Symbol.iterator)] = function () {
            return this.entries();
          }),
          (t.prototype.forEach = function (t, e) {
            var r, n;
            try {
              for (var i = o(this), s = i.next(); !s.done; s = i.next()) {
                var u = a(s.value, 2),
                  c = u[0],
                  l = u[1];
                t.call(e, l, c, this);
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                s && !s.done && (n = i.return) && n.call(i);
              } finally {
                if (r) throw r.error;
              }
            }
          }),
          (t.prototype.merge = function (t) {
            var e = this;
            return (
              Je(t) && (t = t.toJS()),
              xe(function () {
                y(t)
                  ? O(t).forEach(function (r) {
                      return e.set(r, t[r]);
                    })
                  : Array.isArray(t)
                  ? t.forEach(function (t) {
                      var r = a(t, 2),
                        n = r[0],
                        i = r[1];
                      return e.set(n, i);
                    })
                  : m(t)
                  ? (t.constructor !== Map && p('Cannot initialize from classes that inherit from Map: ' + t.constructor.name),
                    t.forEach(function (t, r) {
                      return e.set(r, t);
                    }))
                  : null != t && p('Cannot initialize map from ' + t);
              }),
              this
            );
          }),
          (t.prototype.clear = function () {
            var t = this;
            xe(function () {
              ut(function () {
                var e, r;
                try {
                  for (var n = o(t.keys()), i = n.next(); !i.done; i = n.next()) {
                    var a = i.value;
                    t.delete(a);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (r = n.return) && r.call(n);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              });
            });
          }),
          (t.prototype.replace = function (t) {
            var e = this;
            return (
              xe(function () {
                var r,
                  n = y((r = t))
                    ? Object.keys(r)
                    : Array.isArray(r)
                    ? r.map(function (t) {
                        return a(t, 1)[0];
                      })
                    : m(r) || Je(r)
                    ? Array.from(r.keys())
                    : p("Cannot get keys from '" + r + "'");
                Array.from(e.keys())
                  .filter(function (t) {
                    return -1 === n.indexOf(t);
                  })
                  .forEach(function (t) {
                    return e.delete(t);
                  }),
                  e.merge(t);
              }),
              this
            );
          }),
          Object.defineProperty(t.prototype, 'size', {
            get: function () {
              return this._keysAtom.reportObserved(), this._data.size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.toPOJO = function () {
            var t,
              e,
              r = {};
            try {
              for (var n = o(this), i = n.next(); !i.done; i = n.next()) {
                var s = a(i.value, 2),
                  u = s[0],
                  c = s[1];
                r['symbol' == typeof u ? u : w(u)] = c;
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                i && !i.done && (e = n.return) && e.call(n);
              } finally {
                if (t) throw t.error;
              }
            }
            return r;
          }),
          (t.prototype.toJS = function () {
            return new Map(this);
          }),
          (t.prototype.toJSON = function () {
            return this.toPOJO();
          }),
          (t.prototype.toString = function () {
            var t = this;
            return (
              this.name +
              '[{ ' +
              Array.from(this.keys())
                .map(function (e) {
                  return w(e) + ': ' + t.get(e);
                })
                .join(', ') +
              ' }]'
            );
          }),
          (t.prototype.observe = function (t, e) {
            return Ve(this, t);
          }),
          (t.prototype.intercept = function (t) {
            return Le(this, t);
          }),
          t
        );
      })(),
      Je = g('ObservableMap', Ke),
      Xe = {},
      Ye = (function () {
        function t(t, e, r) {
          if (
            (void 0 === e && (e = C),
            void 0 === r && (r = 'ObservableSet@' + l()),
            (this.name = r),
            (this[We] = Xe),
            (this._data = new Set()),
            (this._atom = S(this.name)),
            (this[Symbol.toStringTag] = 'Set'),
            'function' != typeof Set)
          )
            throw new Error('mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js');
          (this.enhancer = function (t, n) {
            return e(t, n, r);
          }),
            t && this.replace(t);
        }
        return (
          (t.prototype.dehanceValue = function (t) {
            return void 0 !== this.dehancer ? this.dehancer(t) : t;
          }),
          (t.prototype.clear = function () {
            var t = this;
            xe(function () {
              ut(function () {
                var e, r;
                try {
                  for (var n = o(t._data.values()), i = n.next(); !i.done; i = n.next()) {
                    var a = i.value;
                    t.delete(a);
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    i && !i.done && (r = n.return) && r.call(n);
                  } finally {
                    if (e) throw e.error;
                  }
                }
              });
            });
          }),
          (t.prototype.forEach = function (t, e) {
            var r, n;
            try {
              for (var i = o(this), a = i.next(); !a.done; a = i.next()) {
                var s = a.value;
                t.call(e, s, s, this);
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                a && !a.done && (n = i.return) && n.call(i);
              } finally {
                if (r) throw r.error;
              }
            }
          }),
          Object.defineProperty(t.prototype, 'size', {
            get: function () {
              return this._atom.reportObserved(), this._data.size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.add = function (t) {
            var e = this;
            if ((ot(this._atom), Te(this)) && !(n = Ne(this, { type: 'add', object: this, newValue: t }))) return this;
            if (!this.has(t)) {
              xe(function () {
                e._data.add(e.enhancer(t, void 0)), e._atom.reportChanged();
              });
              var r = Me(this),
                n = r ? { type: 'add', object: this, newValue: t } : null;
              0, r && Ce(this, n);
            }
            return this;
          }),
          (t.prototype.delete = function (t) {
            var e = this;
            if (Te(this) && !(n = Ne(this, { type: 'delete', object: this, oldValue: t }))) return !1;
            if (this.has(t)) {
              var r = Me(this),
                n = r ? { type: 'delete', object: this, oldValue: t } : null;
              return (
                xe(function () {
                  e._atom.reportChanged(), e._data.delete(t);
                }),
                r && Ce(this, n),
                !0
              );
            }
            return !1;
          }),
          (t.prototype.has = function (t) {
            return this._atom.reportObserved(), this._data.has(this.dehanceValue(t));
          }),
          (t.prototype.entries = function () {
            var t = 0,
              e = Array.from(this.keys()),
              r = Array.from(this.values());
            return pr({
              next: function () {
                var n = t;
                return (t += 1), n < r.length ? { value: [e[n], r[n]], done: !1 } : { done: !0 };
              },
            });
          }),
          (t.prototype.keys = function () {
            return this.values();
          }),
          (t.prototype.values = function () {
            this._atom.reportObserved();
            var t = this,
              e = 0,
              r = Array.from(this._data.values());
            return pr({
              next: function () {
                return e < r.length ? { value: t.dehanceValue(r[e++]), done: !1 } : { done: !0 };
              },
            });
          }),
          (t.prototype.replace = function (t) {
            var e = this;
            return (
              $e(t) && (t = t.toJS()),
              xe(function () {
                Array.isArray(t) || _(t)
                  ? (e.clear(),
                    t.forEach(function (t) {
                      return e.add(t);
                    }))
                  : null != t && p('Cannot initialize set from ' + t);
              }),
              this
            );
          }),
          (t.prototype.observe = function (t, e) {
            return Ve(this, t);
          }),
          (t.prototype.intercept = function (t) {
            return Le(this, t);
          }),
          (t.prototype.toJS = function () {
            return new Set(this);
          }),
          (t.prototype.toString = function () {
            return this.name + '[ ' + Array.from(this).join(', ') + ' ]';
          }),
          (t.prototype[((We = x), Symbol.iterator)] = function () {
            return this.values();
          }),
          t
        );
      })(),
      $e = g('ObservableSet', Ye),
      Qe = (function () {
        function t(t, e, r, n) {
          void 0 === e && (e = new Map()),
            (this.target = t),
            (this.values = e),
            (this.name = r),
            (this.defaultEnhancer = n),
            (this.keysAtom = new A(r + '.keys'));
        }
        return (
          (t.prototype.read = function (t) {
            return this.values.get(t).get();
          }),
          (t.prototype.write = function (t, e) {
            var r = this.target,
              n = this.values.get(t);
            if (n instanceof At) n.set(e);
            else {
              if (Te(this)) {
                if (
                  !(o = Ne(this, {
                    type: 'update',
                    object: this.proxy || r,
                    name: t,
                    newValue: e,
                  }))
                )
                  return;
                e = o.newValue;
              }
              if ((e = n.prepareNewValue(e)) !== Tt.UNCHANGED) {
                var i = Me(this),
                  o = i
                    ? {
                        type: 'update',
                        object: this.proxy || r,
                        oldValue: n.value,
                        name: t,
                        newValue: e,
                      }
                    : null;
                0, n.setNewValue(e), i && Ce(this, o);
              }
            }
          }),
          (t.prototype.has = function (t) {
            var e = this.pendingKeys || (this.pendingKeys = new Map()),
              r = e.get(t);
            if (r) return r.get();
            var n = !!this.values.get(t);
            return (r = new xt(n, R, this.name + '.' + w(t) + '?', !1)), e.set(t, r), r.get();
          }),
          (t.prototype.addObservableProp = function (t, e, r) {
            void 0 === r && (r = this.defaultEnhancer);
            var n = this.target;
            if (Te(this)) {
              var i = Ne(this, {
                object: this.proxy || n,
                name: t,
                type: 'add',
                newValue: e,
              });
              if (!i) return;
              e = i.newValue;
            }
            var o = new xt(e, r, this.name + '.' + w(t), !1);
            this.values.set(t, o),
              (e = o.value),
              Object.defineProperty(
                n,
                t,
                (function (t) {
                  return (
                    tr[t] ||
                    (tr[t] = {
                      configurable: !0,
                      enumerable: !0,
                      get: function () {
                        return this[x].read(t);
                      },
                      set: function (e) {
                        this[x].write(t, e);
                      },
                    })
                  );
                })(t)
              ),
              this.notifyPropertyAddition(t, e);
          }),
          (t.prototype.addComputedProp = function (t, e, r) {
            var n,
              i,
              o,
              a = this.target;
            (r.name = r.name || this.name + '.' + w(e)),
              this.values.set(e, new At(r)),
              (t === a ||
                ((n = t), (i = e), !(o = Object.getOwnPropertyDescriptor(n, i)) || (!1 !== o.configurable && !1 !== o.writable))) &&
                Object.defineProperty(
                  t,
                  e,
                  (function (t) {
                    return (
                      er[t] ||
                      (er[t] = {
                        configurable: Tt.computedConfigurable,
                        enumerable: !1,
                        get: function () {
                          return rr(this).read(t);
                        },
                        set: function (e) {
                          rr(this).write(t, e);
                        },
                      })
                    );
                  })(e)
                );
          }),
          (t.prototype.remove = function (t) {
            if (this.values.has(t)) {
              var e = this.target;
              if (Te(this))
                if (
                  !(a = Ne(this, {
                    object: this.proxy || e,
                    name: t,
                    type: 'remove',
                  }))
                )
                  return;
              try {
                Vt();
                var r = Me(this),
                  n = this.values.get(t),
                  i = n && n.get();
                if ((n && n.set(void 0), this.keysAtom.reportChanged(), this.values.delete(t), this.pendingKeys)) {
                  var o = this.pendingKeys.get(t);
                  o && o.set(!1);
                }
                delete this.target[t];
                var a = r
                  ? {
                      type: 'remove',
                      object: this.proxy || e,
                      oldValue: i,
                      name: t,
                    }
                  : null;
                0, r && Ce(this, a);
              } finally {
                Ct();
              }
            }
          }),
          (t.prototype.illegalAccess = function (t, e) {
            console.warn(
              "Property '" +
                e +
                "' of '" +
                t +
                "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner"
            );
          }),
          (t.prototype.observe = function (t, e) {
            return Ve(this, t);
          }),
          (t.prototype.intercept = function (t) {
            return Le(this, t);
          }),
          (t.prototype.notifyPropertyAddition = function (t, e) {
            var r = Me(this),
              n = r
                ? {
                    type: 'add',
                    object: this.proxy || this.target,
                    name: t,
                    newValue: e,
                  }
                : null;
            if ((r && Ce(this, n), this.pendingKeys)) {
              var i = this.pendingKeys.get(t);
              i && i.set(!0);
            }
            this.keysAtom.reportChanged();
          }),
          (t.prototype.getKeys = function () {
            var t, e;
            this.keysAtom.reportObserved();
            var r = [];
            try {
              for (var n = o(this.values), i = n.next(); !i.done; i = n.next()) {
                var s = a(i.value, 2),
                  u = s[0];
                s[1] instanceof xt && r.push(u);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                i && !i.done && (e = n.return) && e.call(n);
              } finally {
                if (t) throw t.error;
              }
            }
            return r;
          }),
          t
        );
      })();
    function Ze(t, e, r) {
      if ((void 0 === e && (e = ''), void 0 === r && (r = C), Object.prototype.hasOwnProperty.call(t, x))) return t[x];
      y(t) || (e = (t.constructor.name || 'ObservableObject') + '@' + l()), e || (e = 'ObservableObject@' + l());
      var n = new Qe(t, new Map(), w(e), r);
      return b(t, x, n), n;
    }
    var tr = Object.create(null),
      er = Object.create(null);
    function rr(t) {
      var e = t[x];
      return e || (N(t), t[x]);
    }
    var nr = g('ObservableObjectAdministration', Qe);
    function ir(t) {
      return !!v(t) && (N(t), nr(t[x]));
    }
    function or(t, e) {
      if ('object' == typeof t && null !== t) {
        if (Ge(t)) return void 0 !== e && p(!1), t[x].atom;
        if ($e(t)) return t[x];
        if (Je(t)) {
          var r = t;
          return void 0 === e ? r._keysAtom : ((n = r._data.get(e) || r._hasMap.get(e)) || p(!1), n);
        }
        var n;
        if ((N(t), e && !t[x] && t[e], ir(t))) return e ? ((n = t[x].values.get(e)) || p(!1), n) : p(!1);
        if (P(t) || Pt(t) || Gt(t)) return t;
      } else if ('function' == typeof t && Gt(t[x])) return t[x];
      return p(!1);
    }
    function ar(t, e) {
      return (
        t || p('Expecting some object'),
        void 0 !== e ? ar(or(t, e)) : P(t) || Pt(t) || Gt(t) || Je(t) || $e(t) ? t : (N(t), t[x] ? t[x] : void p(!1))
      );
    }
    var sr = Object.prototype.toString;
    function ur(t, e, r) {
      return (
        void 0 === r && (r = -1),
        (function t(e, r, n, i, o) {
          if (e === r) return 0 !== e || 1 / e == 1 / r;
          if (null == e || null == r) return !1;
          if (e != e) return r != r;
          var a = typeof e;
          if ('function' !== a && 'object' !== a && 'object' != typeof r) return !1;
          var s = sr.call(e);
          if (s !== sr.call(r)) return !1;
          switch (s) {
            case '[object RegExp]':
            case '[object String]':
              return '' + e == '' + r;
            case '[object Number]':
              return +e != +e ? +r != +r : 0 == +e ? 1 / +e == 1 / r : +e == +r;
            case '[object Date]':
            case '[object Boolean]':
              return +e == +r;
            case '[object Symbol]':
              return 'undefined' != typeof Symbol && Symbol.valueOf.call(e) === Symbol.valueOf.call(r);
            case '[object Map]':
            case '[object Set]':
              n >= 0 && n++;
          }
          (e = cr(e)), (r = cr(r));
          var u = '[object Array]' === s;
          if (!u) {
            if ('object' != typeof e || 'object' != typeof r) return !1;
            var c = e.constructor,
              l = r.constructor;
            if (
              c !== l &&
              !('function' == typeof c && c instanceof c && 'function' == typeof l && l instanceof l) &&
              'constructor' in e &&
              'constructor' in r
            )
              return !1;
          }
          if (0 === n) return !1;
          n < 0 && (n = -1);
          o = o || [];
          var p = (i = i || []).length;
          for (; p--; ) if (i[p] === e) return o[p] === r;
          if ((i.push(e), o.push(r), u)) {
            if ((p = e.length) !== r.length) return !1;
            for (; p--; ) if (!t(e[p], r[p], n - 1, i, o)) return !1;
          } else {
            var h = Object.keys(e),
              f = void 0;
            if (((p = h.length), Object.keys(r).length !== p)) return !1;
            for (; p--; ) if (((f = h[p]), !lr(r, f) || !t(e[f], r[f], n - 1, i, o))) return !1;
          }
          return i.pop(), o.pop(), !0;
        })(t, e, r)
      );
    }
    function cr(t) {
      return Ge(t) ? t.slice() : m(t) || Je(t) || _(t) || $e(t) ? Array.from(t.entries()) : t;
    }
    function lr(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    function pr(t) {
      return (t[Symbol.iterator] = hr), t;
    }
    function hr() {
      return this;
    }
    if ('undefined' == typeof Proxy || 'undefined' == typeof Symbol)
      throw new Error(
        "[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore."
      );
    'object' == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
      __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: function (t) {
          return console.warn('[mobx.spy] Is a no-op in production builds'), function () {};
        },
        extras: {
          getDebugName: function (t, e) {
            return (void 0 !== e ? or(t, e) : ir(t) || Je(t) || $e(t) ? ar(t) : or(t)).name;
          },
        },
        $mobx: x,
      });
  },
  function (t, e, r) {
    'use strict';
    let n, i;
    r.d(e, 'a', function () {
      return n;
    }),
      r.d(e, 'b', function () {
        return i;
      }),
      r.d(e, 'c', function () {
        return o;
      }),
      (function (t) {
        (t.UP = 'up'), (t.DOWN = 'down'), (t.RIGHT = 'right'), (t.LEFT = 'left');
      })(n || (n = {})),
      (function (t) {
        (t.STAY = 'stay'), (t.MOVE = 'move'), (t.EAT = 'eat'), (t.LOAD = 'load'), (t.UNLOAD = 'unload');
      })(i || (i = {}));
    class o {
      constructor(t, e, r) {
        (this.ant = t), (this.name = e), (this.move = r);
      }
      toJSON() {
        var t;
        return {
          antId: this.ant.id,
          act: this.name,
          dir: (null === (t = this.move) || void 0 === t ? void 0 : t.direction) || void 0,
        };
      }
    }
  },
  function (t, e, r) {
    'use strict';
    var n = r(15);
    r.o(n, 'Area') &&
      r.d(e, 'Area', function () {
        return n.Area;
      }),
      r.o(n, 'Cell') &&
        r.d(e, 'Cell', function () {
          return n.Cell;
        }),
      r.o(n, 'Pathfinder') &&
        r.d(e, 'Pathfinder', function () {
          return n.Pathfinder;
        }),
      r.o(n, 'Point') &&
        r.d(e, 'Point', function () {
          return n.Point;
        });
    var i = r(16);
    r.d(e, 'Area', function () {
      return i.a;
    });
    var o = r(19);
    r.o(o, 'Cell') &&
      r.d(e, 'Cell', function () {
        return o.Cell;
      }),
      r.o(o, 'Pathfinder') &&
        r.d(e, 'Pathfinder', function () {
          return o.Pathfinder;
        }),
      r.o(o, 'Point') &&
        r.d(e, 'Point', function () {
          return o.Point;
        });
    var a = r(8);
    r.o(a, 'Cell') &&
      r.d(e, 'Cell', function () {
        return a.Cell;
      }),
      r.o(a, 'Pathfinder') &&
        r.d(e, 'Pathfinder', function () {
          return a.Pathfinder;
        }),
      r.o(a, 'Point') &&
        r.d(e, 'Point', function () {
          return a.Point;
        });
    var s = r(35);
    r.d(e, 'Pathfinder', function () {
      return s.a;
    });
  },
  function (t, e, r) {
    'use strict';
    var n = r(14);
    r.d(e, 'Mother', function () {
      return n.a;
    });
    r(33);
  },
  function (t, e, r) {
    'use strict';
    var n = r(23);
    r.d(e, 'Mind', function () {
      return n.a;
    });
    var i = r(27);
    r.o(i, 'Ant') &&
      r.d(e, 'Ant', function () {
        return i.Ant;
      });
    var o = r(28);
    r.o(o, 'Ant') &&
      r.d(e, 'Ant', function () {
        return o.Ant;
      });
    var a = r(30);
    r.o(a, 'Ant') &&
      r.d(e, 'Ant', function () {
        return a.Ant;
      });
  },
  function (t, e, r) {
    var n = r(13)(Object, 'create');
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(64);
    t.exports = function (t, e) {
      for (var r = t.length; r--; ) if (n(t[r][0], e)) return r;
      return -1;
    };
  },
  function (t, e, r) {
    var n = r(70);
    t.exports = function (t, e) {
      var r = t.__data__;
      return n(e) ? r['string' == typeof e ? 'string' : 'hash'] : r.map;
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(21);
    r.d(e, 'Point', function () {
      return n.a;
    });
    var i = r(22);
    r.o(i, 'Cell') &&
      r.d(e, 'Cell', function () {
        return i.Cell;
      }),
      r.o(i, 'Pathfinder') &&
        r.d(e, 'Pathfinder', function () {
          return i.Pathfinder;
        });
  },
  function (t, e, r) {
    'use strict';
    r.d(e, 'a', function () {
      return m;
    });
    var n = r(0);
    function i(t) {
      throw new Error('[mobx-utils] ' + t);
    }
    function o(t, e) {
      void 0 === e && (e = 'Illegal state'), t || i(e);
    }
    var a = function (t) {
        return t && t !== Object.prototype && Object.getOwnPropertyNames(t).concat(a(Object.getPrototypeOf(t)) || []);
      },
      s = function (t) {
        return (function (t) {
          var e = a(t);
          return e.filter(function (t, r) {
            return e.indexOf(t) === r;
          });
        })(t).filter(function (t) {
          return 'constructor' !== t && !~t.indexOf('__');
        });
      };
    function u(t) {
      switch (this.state) {
        case 'pending':
          return t.pending && t.pending(this.value);
        case 'rejected':
          return t.rejected && t.rejected(this.value);
        case 'fulfilled':
          return t.fulfilled ? t.fulfilled(this.value) : this.value;
      }
    }
    function c(t, e) {
      if (
        (o(arguments.length <= 2, 'fromPromise expects up to two arguments'),
        o(
          'function' == typeof t || ('object' == typeof t && t && 'function' == typeof t.then),
          'Please pass a promise or function to fromPromise'
        ),
        !0 === t.isPromiseBasedObservable)
      )
        return t;
      'function' == typeof t && (t = new Promise(t));
      var r = t;
      t.then(
        Object(n.h)('observableFromPromise-resolve', function (t) {
          (r.value = t), (r.state = 'fulfilled');
        }),
        Object(n.h)('observableFromPromise-reject', function (t) {
          (r.value = t), (r.state = 'rejected');
        })
      ),
        (r.isPromiseBasedObservable = !0),
        (r.case = u);
      var i = e && 'fulfilled' === e.state ? e.value : void 0;
      return Object(n.n)(r, { value: i, state: 'pending' }, {}, { deep: !1 }), r;
    }
    !(function (t) {
      (t.reject = Object(n.h)('fromPromise.reject', function (e) {
        var r = t(Promise.reject(e));
        return (r.state = 'rejected'), (r.value = e), r;
      })),
        (t.resolve = Object(n.h)('fromPromise.resolve', function (e) {
          void 0 === e && (e = void 0);
          var r = t(Promise.resolve(e));
          return (r.state = 'fulfilled'), (r.value = e), r;
        }));
    })(c || (c = {}));
    var l = function (t, e, r, n) {
      var i,
        o = arguments.length,
        a = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, r)) : n;
      if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, n);
      else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, r, a) : i(e, r)) || a);
      return o > 3 && a && Object.defineProperty(e, r, a), a;
    };
    !(function () {
      function t(t, e) {
        var r = this;
        Object(n.B)(function () {
          (r.current = e), (r.subscription = t.subscribe(r));
        });
      }
      (t.prototype.dispose = function () {
        this.subscription && this.subscription.unsubscribe();
      }),
        (t.prototype.next = function (t) {
          this.current = t;
        }),
        (t.prototype.complete = function () {
          this.dispose();
        }),
        (t.prototype.error = function (t) {
          (this.current = t), this.dispose();
        }),
        l([n.x.ref], t.prototype, 'current', void 0),
        l([n.h.bound], t.prototype, 'next', null),
        l([n.h.bound], t.prototype, 'complete', null),
        l([n.h.bound], t.prototype, 'error', null);
    })();
    var p = function () {
        return (p =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var i in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      },
      h = function (t, e, r, n) {
        var i,
          o = arguments.length,
          a = o < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, r)) : n;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, n);
        else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, r, a) : i(e, r)) || a);
        return o > 3 && a && Object.defineProperty(e, r, a), a;
      },
      f = ['model', 'reset', 'submit', 'isDirty', 'isPropertyDirty', 'resetProperty'];
    !(function () {
      function t(t) {
        var e = this;
        (this.model = t),
          (this.localValues = n.x.map({})),
          (this.localComputedValues = n.x.map({})),
          (this.isPropertyDirty = function (t) {
            return e.localValues.has(t);
          }),
          o(Object(n.v)(t), 'createViewModel expects an observable object'),
          s(t).forEach(function (r) {
            if (r !== n.a && '__mobxDidRunLazyInitializers' !== r) {
              if (
                (o(-1 === f.indexOf(r), 'The propertyname ' + r + ' is reserved and cannot be used with viewModels'), Object(n.s)(t, r))
              ) {
                var i = Object(n.e)(t, r).derivation;
                e.localComputedValues.set(r, Object(n.j)(i.bind(e)));
              }
              var a = Object.getOwnPropertyDescriptor(t, r),
                s = a ? { enumerable: a.enumerable } : {};
              Object.defineProperty(
                e,
                r,
                p(p({}, s), {
                  configurable: !0,
                  get: function () {
                    return Object(n.s)(t, r)
                      ? e.localComputedValues.get(r).get()
                      : e.isPropertyDirty(r)
                      ? e.localValues.get(r)
                      : e.model[r];
                  },
                  set: Object(n.h)(function (t) {
                    t !== e.model[r] ? e.localValues.set(r, t) : e.localValues.delete(r);
                  }),
                })
              );
            }
          });
      }
      Object.defineProperty(t.prototype, 'isDirty', {
        get: function () {
          return this.localValues.size > 0;
        },
        enumerable: !1,
        configurable: !0,
      }),
        Object.defineProperty(t.prototype, 'changedValues', {
          get: function () {
            return this.localValues.toJS();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.submit = function () {
          var t = this;
          Object(n.w)(this.localValues).forEach(function (e) {
            var r = t.localValues.get(e),
              i = t.model[e];
            Object(n.t)(i) ? i.replace(r) : Object(n.u)(i) ? (i.clear(), i.merge(r)) : Object(n.r)(r) || (t.model[e] = r);
          }),
            this.localValues.clear();
        }),
        (t.prototype.reset = function () {
          this.localValues.clear();
        }),
        (t.prototype.resetProperty = function (t) {
          this.localValues.delete(t);
        }),
        h([n.j], t.prototype, 'isDirty', null),
        h([n.j], t.prototype, 'changedValues', null),
        h([n.h.bound], t.prototype, 'submit', null),
        h([n.h.bound], t.prototype, 'reset', null),
        h([n.h.bound], t.prototype, 'resetProperty', null);
    })();
    var d,
      v =
        ((d = function (t, e) {
          return (d =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        }),
        function (t, e) {
          function r() {
            this.constructor = t;
          }
          d(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
        }),
      y =
        ((function (t) {
          function e(e, r, i) {
            var o = void 0 === i ? {} : i,
              a = o.name,
              s = void 0 === a ? 'ogm' + ((1e3 * Math.random()) | 0) : a,
              u = o.keyToName,
              c =
                void 0 === u
                  ? function (t) {
                      return '' + t;
                    }
                  : u,
              l = t.call(this) || this;
            (l._keyToName = c),
              (l._groupBy = r),
              (l._ogmInfoKey = 'function' == typeof Symbol ? Symbol('ogmInfo' + s) : '__ogmInfo' + s),
              (l._base = e);
            for (var p = 0; p < e.length; p++) l._addItem(e[p]);
            return (
              (l._disposeBaseObserver = Object(n.y)(l._base, function (t) {
                if ('splice' === t.type)
                  Object(n.C)(function () {
                    for (var e = 0, r = t.removed; e < r.length; e++) {
                      var n = r[e];
                      l._removeItem(n);
                    }
                    for (var i = 0, o = t.added; i < o.length; i++) {
                      var a = o[i];
                      l._addItem(a);
                    }
                  });
                else {
                  if ('update' !== t.type) throw new Error('illegal state');
                  Object(n.C)(function () {
                    l._removeItem(t.oldValue), l._addItem(t.newValue);
                  });
                }
              })),
              l
            );
          }
          v(e, t),
            (e.prototype.clear = function () {
              throw new Error('not supported');
            }),
            (e.prototype.delete = function (t) {
              throw new Error('not supported');
            }),
            (e.prototype.set = function (t, e) {
              throw new Error('not supported');
            }),
            (e.prototype.dispose = function () {
              this._disposeBaseObserver();
              for (var t = 0; t < this._base.length; t++) {
                var e = this._base[t];
                e[this._ogmInfoKey].reaction(), delete e[this._ogmInfoKey];
              }
            }),
            (e.prototype._getGroupArr = function (e) {
              var r = t.prototype.get.call(this, e);
              return (
                void 0 === r &&
                  ((r = Object(n.x)([], {
                    name: 'GroupArray[' + this._keyToName(e) + ']',
                  })),
                  t.prototype.set.call(this, e, r)),
                r
              );
            }),
            (e.prototype._removeFromGroupArr = function (e, r) {
              var n = t.prototype.get.call(this, e);
              1 === n.length
                ? t.prototype.delete.call(this, e)
                : (r === n.length - 1 || ((n[r] = n[n.length - 1]), (n[r][this._ogmInfoKey].groupArrIndex = r)), n.length--);
            }),
            (e.prototype._addItem = function (t) {
              var e = this,
                r = this._groupBy(t),
                i = this._getGroupArr(r),
                o = {
                  groupByValue: r,
                  groupArrIndex: i.length,
                  reaction: Object(n.A)(
                    function () {
                      return e._groupBy(t);
                    },
                    function (r, n) {
                      console.log('new group by value ', r);
                      var i = t[e._ogmInfoKey];
                      e._removeFromGroupArr(i.groupByValue, i.groupArrIndex);
                      var o = e._getGroupArr(r),
                        a = o.length;
                      o.push(t), (i.groupByValue = r), (i.groupArrIndex = a);
                    }
                  ),
                };
              Object.defineProperty(t, this._ogmInfoKey, {
                configurable: !0,
                enumerable: !1,
                value: o,
              }),
                i.push(t);
            }),
            (e.prototype._removeItem = function (t) {
              var e = t[this._ogmInfoKey];
              this._removeFromGroupArr(e.groupByValue, e.groupArrIndex), e.reaction(), delete t[this._ogmInfoKey];
            });
        })(n.b),
        (function () {
          function t(t, e) {
            (this.base = t), (this.args = e), (this.closestIdx = 0), (this.isDisposed = !1);
            for (var r = (this.closest = this.root = t), n = 0; n < this.args.length - 1 && (r = r.get(e[n])); n++) this.closest = r;
            this.closestIdx = n;
          }
          return (
            (t.prototype.exists = function () {
              this.assertNotDisposed();
              var t = this.args.length;
              return this.closestIdx >= t - 1 && this.closest.has(this.args[t - 1]);
            }),
            (t.prototype.get = function () {
              if ((this.assertNotDisposed(), !this.exists())) throw new Error("Entry doesn't exist");
              return this.closest.get(this.args[this.args.length - 1]);
            }),
            (t.prototype.set = function (t) {
              this.assertNotDisposed();
              for (var e = this.args.length, r = this.closest, n = this.closestIdx; n < e - 1; n++) {
                var i = new Map();
                r.set(this.args[n], i), (r = i);
              }
              (this.closestIdx = e - 1), (this.closest = r), r.set(this.args[e - 1], t);
            }),
            (t.prototype.delete = function () {
              if ((this.assertNotDisposed(), !this.exists())) throw new Error("Entry doesn't exist");
              var t = this.args.length;
              this.closest.delete(this.args[t - 1]);
              for (var e = this.root, r = [e], n = 0; n < t - 1; n++) (e = e.get(this.args[n])), r.push(e);
              for (n = r.length - 1; n > 0; n--) 0 === r[n].size && r[n - 1].delete(this.args[n - 1]);
              this.isDisposed = !0;
            }),
            (t.prototype.assertNotDisposed = function () {
              if (this.isDisposed) throw new Error('Concurrent modification exception');
            }),
            t
          );
        })()),
      b = (function () {
        function t() {
          (this.store = new Map()), (this.argsLength = -1);
        }
        return (
          (t.prototype.entry = function (t) {
            if (-1 === this.argsLength) this.argsLength = t.length;
            else if (this.argsLength !== t.length)
              throw new Error(
                'DeepMap should be used with functions with a consistent length, expected: ' + this.argsLength + ', got: ' + t.length
              );
            return this.last && (this.last.isDisposed = !0), (this.last = new y(this.store, t));
          }),
          t
        );
      })(),
      g = function () {
        return (g =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var i in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };
    function m(t, e) {
      if ((void 0 === e && (e = !1), Object(n.q)(t))) throw new Error("computedFn shouldn't be used on actions");
      var r = !1,
        i = 0,
        o = 'boolean' == typeof e ? { keepAlive: e } : e,
        a = new b();
      return function () {
        for (var e = this, s = [], u = 0; u < arguments.length; u++) s[u] = arguments[u];
        var c = a.entry(s);
        if (c.exists()) return c.get().get();
        if (!o.keepAlive && !Object(n.f)())
          return (
            r ||
              (console.warn("invoking a computedFn from outside an reactive context won't be memoized, unless keepAlive is set"), (r = !0)),
            t.apply(this, s)
          );
        var l = Object(n.j)(function () {
          return t.apply(e, s);
        }, g(g({}, o), { name: 'computedFn(' + t.name + '#' + ++i + ')' }));
        return (
          c.set(l),
          o.keepAlive ||
            Object(n.z)(l, function () {
              a.entry(s).delete();
            }),
          l.get()
        );
      };
    }
    new Set(), new Set();
    var _,
      O = Promise.resolve();
    _ =
      'undefined' != typeof queueMicrotask
        ? queueMicrotask
        : 'undefined' != typeof process && process.nextTick
        ? function (t) {
            process.nextTick(t);
          }
        : function (t) {
            setTimeout(t, 0);
          };
    var w = function () {
      return new Promise(function (t) {
        _(t);
      });
    };
  },
  function (t, e, r) {
    var n = r(11).Symbol;
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(40),
      i = 'object' == typeof self && self && self.Object === Object && self,
      o = n || i || Function('return this')();
    t.exports = o;
  },
  function (t, e) {
    t.exports = function (t) {
      return null != t && 'object' == typeof t;
    };
  },
  function (t, e, r) {
    var n = r(52),
      i = r(56);
    t.exports = function (t, e) {
      var r = i(t, e);
      return n(r) ? r : void 0;
    };
  },
  function (t, e, r) {
    'use strict';
    r.d(e, 'a', function () {
      return a;
    });
    var n = r(2),
      i = r(4),
      o = r(0);
    class a {
      constructor() {
        (this.tick = 0), (this.id = void 0), (this.area = new n.Area(this)), (this.mind = new i.Mind(this)), (this._isInit = !1);
      }
      input(t) {
        console.warn('TURN START:', t.tick),
          this._isInit || ((this.id = t.id), (this._isInit = !0)),
          (this.tick = t.tick),
          Object(o.C)(() => {
            this.area.input(t.canvas), this.mind.input(t.ants);
          });
        const e = this.mind.actionList;
        return console.warn('TURN END:', t.tick), e;
      }
    }
    a.config = { PAYLOAD_MAX: 9, HEALTH_MAX: 9 };
  },
  function (t, e) {},
  function (t, e, r) {
    'use strict';
    r.d(e, 'a', function () {
      return p;
    });
    var n,
      i,
      o = r(2),
      a = r(36),
      s = r.n(a),
      u = r(0),
      c = r(9);
    function l(t, e, r, n, i) {
      var o = {};
      return (
        Object.keys(n).forEach(function (t) {
          o[t] = n[t];
        }),
        (o.enumerable = !!o.enumerable),
        (o.configurable = !!o.configurable),
        ('value' in o || o.initializer) && (o.writable = !0),
        (o = r
          .slice()
          .reverse()
          .reduce(function (r, n) {
            return n(t, e, r) || r;
          }, o)),
        i && void 0 !== o.initializer && ((o.value = o.initializer ? o.initializer.call(i) : void 0), (o.initializer = void 0)),
        void 0 === o.initializer && (Object.defineProperty(t, e, o), (o = null)),
        o
      );
    }
    let p =
      ((i = l(
        (n = class {
          get list() {
            return s()(this.map);
          }
          get listFood() {
            return this.list.filter((t) => t.isFood);
          }
          get listHive() {
            return this.list.filter((t) => t.isHiveMy);
          }
          get listHiveWithFood() {
            return this.list.filter((t) => t.isHiveMyWithFood);
          }
          constructor(t) {
            var e, r, n, a;
            (this._root = t),
              (this.pathfinder = new o.Pathfinder(this._root)),
              (e = this),
              (r = 'map'),
              (a = this),
              (n = i) &&
                Object.defineProperty(e, r, {
                  enumerable: n.enumerable,
                  configurable: n.configurable,
                  writable: n.writable,
                  value: n.initializer ? n.initializer.call(a) : void 0,
                }),
              (this.size = { width: 0, height: 0 }),
              (this._isInit = !1),
              (this.listFoodFree = Object(c.a)((t) => this.list.filter((e) => !!e.targetByExclude(t).length)));
          }
          input(t) {
            this._isInit ? this._update(t) : this._init(t);
          }
          cellGet(t) {
            return this.map[t.y][t.x];
          }
          _init(t) {
            (this.size.width = (t.cells[0] || []).length),
              (this.size.height = t.cells.length),
              this._fillMatrix(t.cells),
              (this._isInit = !0);
          }
          _update(t) {
            for (let e = 0; e < this.size.height; e++) {
              const r = t.cells[e],
                n = this.map[e];
              for (let t = 0; t < this.size.width; t++) n[t].update(r[t]);
            }
          }
          _fillMatrix(t) {
            for (let e = 0; e < this.size.height; e++) {
              const r = [];
              for (let n = 0; n < this.size.width; n++) r.push(new o.Cell(this._root, { x: n, y: e }, t[e][n]));
              this.map.push(r);
            }
          }
        }).prototype,
        'map',
        [u.x],
        {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return [];
          },
        }
      )),
      l(n.prototype, 'list', [u.j], Object.getOwnPropertyDescriptor(n.prototype, 'list'), n.prototype),
      l(n.prototype, 'listFood', [u.j], Object.getOwnPropertyDescriptor(n.prototype, 'listFood'), n.prototype),
      l(n.prototype, 'listHive', [u.j], Object.getOwnPropertyDescriptor(n.prototype, 'listHive'), n.prototype),
      l(n.prototype, 'listHiveWithFood', [u.j], Object.getOwnPropertyDescriptor(n.prototype, 'listHiveWithFood'), n.prototype),
      n);
  },
  function (t, e, r) {
    var n = r(38),
      i = r(39);
    t.exports = function t(e, r, o, a, s) {
      var u = -1,
        c = e.length;
      for (o || (o = i), s || (s = []); ++u < c; ) {
        var l = e[u];
        r > 0 && o(l) ? (r > 1 ? t(l, r - 1, o, a, s) : n(s, l)) : a || (s[s.length] = l);
      }
      return s;
    };
  },
  function (t, e, r) {
    var n = r(10),
      i = r(43),
      o = r(44),
      a = n ? n.toStringTag : void 0;
    t.exports = function (t) {
      return null == t ? (void 0 === t ? '[object Undefined]' : '[object Null]') : a && a in Object(t) ? i(t) : o(t);
    };
  },
  function (t, e, r) {
    'use strict';
    var n = r(20);
    r.d(e, 'Cell', function () {
      return n.a;
    });
    var i = r(32);
    r.o(i, 'Pathfinder') &&
      r.d(e, 'Pathfinder', function () {
        return i.Pathfinder;
      }),
      r.o(i, 'Point') &&
        r.d(e, 'Point', function () {
          return i.Point;
        });
  },
  function (t, e, r) {
    'use strict';
    r.d(e, 'a', function () {
      return d;
    });
    var n,
      i,
      o,
      a,
      s = r(2),
      u = r(8),
      c = r(4),
      l = r(0),
      p = r(9);
    function h(t, e, r, n) {
      r &&
        Object.defineProperty(t, e, {
          enumerable: r.enumerable,
          configurable: r.configurable,
          writable: r.writable,
          value: r.initializer ? r.initializer.call(n) : void 0,
        });
    }
    function f(t, e, r, n, i) {
      var o = {};
      return (
        Object.keys(n).forEach(function (t) {
          o[t] = n[t];
        }),
        (o.enumerable = !!o.enumerable),
        (o.configurable = !!o.configurable),
        ('value' in o || o.initializer) && (o.writable = !0),
        (o = r
          .slice()
          .reverse()
          .reduce(function (r, n) {
            return n(t, e, r) || r;
          }, o)),
        i && void 0 !== o.initializer && ((o.value = o.initializer ? o.initializer.call(i) : void 0), (o.initializer = void 0)),
        void 0 === o.initializer && (Object.defineProperty(t, e, o), (o = null)),
        o
      );
    }
    let d =
      ((i = f(
        (n = class {
          get ant() {
            if (this._ant) return this._ant === this._root.id ? this._root.mind.dict[this._ant] : this._ant;
          }
          set ant(t) {
            this._ant = t instanceof c.Ant ? this._root.id : t;
          }
          get isAntMy() {
            return !!this.ant && this.ant === this._root.id;
          }
          get isHiveMy() {
            return !!this.hive && this.hive === this._root.id;
          }
          get isHiveMyFree() {
            return !!this.isHiveMy && !this._ant;
          }
          get isHiveMyWithFood() {
            return !!this.isHiveMyFree && this.food > 0;
          }
          get isFood() {
            return !this.hive && !this.ant && this.food > 0;
          }
          get isWalkable() {
            return this.isPathfindable && !this.food;
          }
          get isPathfindable() {
            return !((this.hive && this.hive !== this._root.id) || this._ant);
          }
          get targetBy() {
            return this._root.mind.list.filter((t) => this === t.goal._target);
          }
          constructor(t, e, r) {
            (this._root = t),
              (this.point = void 0),
              h(this, 'food', i, this),
              h(this, 'hive', o, this),
              h(this, '_ant', a, this),
              (this.targetByExclude = Object(p.a)((t) =>
                this._root.mind.list.filter((e) => e !== t).filter((t) => this === t.goal._target)
              )),
              (this.point = new u.Point(e)),
              this.update(r);
          }
          update(t) {
            (this.food = t.food), (this.ant = t.ant), (this.hive = t.hive);
          }
          distanceTo(t) {
            return s.Pathfinder.manhattanDistance(this.point, t);
          }
        }).prototype,
        'food',
        [l.x],
        { configurable: !0, enumerable: !0, writable: !0, initializer: null }
      )),
      (o = f(n.prototype, 'hive', [l.x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null,
      })),
      (a = f(n.prototype, '_ant', [l.x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null,
      })),
      f(n.prototype, 'ant', [l.j], Object.getOwnPropertyDescriptor(n.prototype, 'ant'), n.prototype),
      f(n.prototype, 'isAntMy', [l.j], Object.getOwnPropertyDescriptor(n.prototype, 'isAntMy'), n.prototype),
      f(n.prototype, 'isHiveMy', [l.j], Object.getOwnPropertyDescriptor(n.prototype, 'isHiveMy'), n.prototype),
      f(n.prototype, 'isHiveMyFree', [l.j], Object.getOwnPropertyDescriptor(n.prototype, 'isHiveMyFree'), n.prototype),
      f(n.prototype, 'isHiveMyWithFood', [l.j], Object.getOwnPropertyDescriptor(n.prototype, 'isHiveMyWithFood'), n.prototype),
      f(n.prototype, 'isFood', [l.j], Object.getOwnPropertyDescriptor(n.prototype, 'isFood'), n.prototype),
      f(n.prototype, 'isWalkable', [l.j], Object.getOwnPropertyDescriptor(n.prototype, 'isWalkable'), n.prototype),
      f(n.prototype, 'isPathfindable', [l.j], Object.getOwnPropertyDescriptor(n.prototype, 'isPathfindable'), n.prototype),
      f(n.prototype, 'targetBy', [l.j], Object.getOwnPropertyDescriptor(n.prototype, 'targetBy'), n.prototype),
      f(n.prototype, 'update', [l.h], Object.getOwnPropertyDescriptor(n.prototype, 'update'), n.prototype),
      n);
  },
  function (t, e, r) {
    'use strict';
    r.d(e, 'a', function () {
      return l;
    });
    var n,
      i,
      o,
      a = r(0),
      s = r(1);
    function u(t, e, r, n) {
      r &&
        Object.defineProperty(t, e, {
          enumerable: r.enumerable,
          configurable: r.configurable,
          writable: r.writable,
          value: r.initializer ? r.initializer.call(n) : void 0,
        });
    }
    function c(t, e, r, n, i) {
      var o = {};
      return (
        Object.keys(n).forEach(function (t) {
          o[t] = n[t];
        }),
        (o.enumerable = !!o.enumerable),
        (o.configurable = !!o.configurable),
        ('value' in o || o.initializer) && (o.writable = !0),
        (o = r
          .slice()
          .reverse()
          .reduce(function (r, n) {
            return n(t, e, r) || r;
          }, o)),
        i && void 0 !== o.initializer && ((o.value = o.initializer ? o.initializer.call(i) : void 0), (o.initializer = void 0)),
        void 0 === o.initializer && (Object.defineProperty(t, e, o), (o = null)),
        o
      );
    }
    let l =
      ((i = c(
        (n = class {
          constructor(t) {
            u(this, 'x', i, this), u(this, 'y', o, this), this.update(t);
          }
          update(t) {
            (this.x = t.x), (this.y = t.y);
          }
          get direction() {
            return Math.abs(this.x) > Math.abs(this.y) ? (this.x > 0 ? s.a.RIGHT : s.a.LEFT) : this.y > 0 ? s.a.DOWN : s.a.UP;
          }
          equal(t) {
            return t && this.x === t.x && this.y === t.y;
          }
          toJSON() {
            return { x: this.x, y: this.y };
          }
        }).prototype,
        'x',
        [a.x],
        { configurable: !0, enumerable: !0, writable: !0, initializer: null }
      )),
      (o = c(n.prototype, 'y', [a.x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null,
      })),
      c(n.prototype, 'update', [a.h], Object.getOwnPropertyDescriptor(n.prototype, 'update'), n.prototype),
      n);
  },
  function (t, e) {},
  function (t, e, r) {
    'use strict';
    r.d(e, 'a', function () {
      return l;
    });
    var n,
      i,
      o = r(4),
      a = r(37),
      s = r.n(a),
      u = r(0);
    function c(t, e, r, n, i) {
      var o = {};
      return (
        Object.keys(n).forEach(function (t) {
          o[t] = n[t];
        }),
        (o.enumerable = !!o.enumerable),
        (o.configurable = !!o.configurable),
        ('value' in o || o.initializer) && (o.writable = !0),
        (o = r
          .slice()
          .reverse()
          .reduce(function (r, n) {
            return n(t, e, r) || r;
          }, o)),
        i && void 0 !== o.initializer && ((o.value = o.initializer ? o.initializer.call(i) : void 0), (o.initializer = void 0)),
        void 0 === o.initializer && (Object.defineProperty(t, e, o), (o = null)),
        o
      );
    }
    let l =
      ((i = c(
        (n = class {
          get list() {
            return Object.values(this.dict);
          }
          get goalList() {
            return this.list.map((t) => t.goal);
          }
          get actionListComputed() {
            const t = [],
              e = [...this.list];
            let r = 0;
            for (; e.length; ) {
              const n = e[r].goal.gameAction;
              n ? (t.push(n.toJSON()), e.splice(r, 1)) : (r = r >= e.length ? 0 : r + 1);
            }
            return t;
          }
          constructor(t) {
            var e, r, n, o;
            (this._root = t),
              (this._isInit = !1),
              (this.actionList = []),
              (e = this),
              (r = 'dict'),
              (o = this),
              (n = i) &&
                Object.defineProperty(e, r, {
                  enumerable: n.enumerable,
                  configurable: n.configurable,
                  writable: n.writable,
                  value: n.initializer ? n.initializer.call(o) : void 0,
                }),
              Object(u.i)(() => {
                this.actionList = this.actionListComputed;
              });
          }
          input(t) {
            this._isInit ? this._update(t) : this._init(t);
          }
          _init(t) {
            this._fill(t), (this._isInit = !0);
          }
          _update(t) {
            const e = t.map((t) => t.id.toString());
            t.forEach((t) => {
              const e = this.dict[t.id];
              e ? e.update(t) : (this.dict[t.id] = new o.Ant(this._root, t.id, t));
            });
            s()(Object.keys(this.dict), e).forEach((t) => {
              this.dict[t].dispose(), delete this.dict[t];
            });
          }
          _fill(t) {
            t.forEach((t) => {
              this.dict[t.id] = new o.Ant(this._root, t.id, t);
            });
          }
        }).prototype,
        'dict',
        [u.x],
        {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          initializer: function () {
            return {};
          },
        }
      )),
      c(n.prototype, 'list', [u.j], Object.getOwnPropertyDescriptor(n.prototype, 'list'), n.prototype),
      c(n.prototype, 'goalList', [u.j], Object.getOwnPropertyDescriptor(n.prototype, 'goalList'), n.prototype),
      c(n.prototype, 'actionListComputed', [u.j], Object.getOwnPropertyDescriptor(n.prototype, 'actionListComputed'), n.prototype),
      c(n.prototype, '_update', [u.h], Object.getOwnPropertyDescriptor(n.prototype, '_update'), n.prototype),
      n);
  },
  function (t, e, r) {
    var n = r(18),
      i = r(25);
    t.exports = function (t) {
      if (!i(t)) return !1;
      var e = n(t);
      return '[object Function]' == e || '[object GeneratorFunction]' == e || '[object AsyncFunction]' == e || '[object Proxy]' == e;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = typeof t;
      return null != t && ('object' == e || 'function' == e);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return t;
    };
  },
  function (t, e) {},
  function (t, e, r) {
    'use strict';
    var n = r(34);
    r.d(e, 'Ant', function () {
      return n.a;
    });
    r(29);
  },
  function (t, e) {},
  function (t, e, r) {
    'use strict';
    var n = r(31);
    r.o(n, 'Ant') &&
      r.d(e, 'Ant', function () {
        return n.Ant;
      });
  },
  function (t, e) {},
  function (t, e) {},
  function (t, e) {},
  function (t, e, r) {
    'use strict';
    r.d(e, 'a', function () {
      return Y;
    });
    var n,
      i = r(2),
      o = r(0);
    let a =
      ((s = (n = class {
        get target() {
          const t = [...this._targetList];
          for (; t.length; ) {
            const e = this._targetPick(t);
            if (this.isTargetValid(e)) return e;
            t.splice(t.indexOf(e), 1);
          }
        }
        constructor(t, e) {
          (this._root = t), (this._ant = e);
        }
      }).prototype),
      (u = 'target'),
      (c = [o.j]),
      (l = Object.getOwnPropertyDescriptor(n.prototype, 'target')),
      (p = n.prototype),
      (h = {}),
      Object.keys(l).forEach(function (t) {
        h[t] = l[t];
      }),
      (h.enumerable = !!h.enumerable),
      (h.configurable = !!h.configurable),
      ('value' in h || h.initializer) && (h.writable = !0),
      (h = c
        .slice()
        .reverse()
        .reduce(function (t, e) {
          return e(s, u, t) || t;
        }, h)),
      p && void 0 !== h.initializer && ((h.value = h.initializer ? h.initializer.call(p) : void 0), (h.initializer = void 0)),
      void 0 === h.initializer && (Object.defineProperty(s, u, h), (h = null)),
      n);
    var s,
      u,
      c,
      l,
      p,
      h,
      f,
      d = r(1);
    function v(t, e, r, n, i) {
      var o = {};
      return (
        Object.keys(n).forEach(function (t) {
          o[t] = n[t];
        }),
        (o.enumerable = !!o.enumerable),
        (o.configurable = !!o.configurable),
        ('value' in o || o.initializer) && (o.writable = !0),
        (o = r
          .slice()
          .reverse()
          .reduce(function (r, n) {
            return n(t, e, r) || r;
          }, o)),
        i && void 0 !== o.initializer && ((o.value = o.initializer ? o.initializer.call(i) : void 0), (o.initializer = void 0)),
        void 0 === o.initializer && (Object.defineProperty(t, e, o), (o = null)),
        o
      );
    }
    let y =
      (v(
        (f = class extends a {
          get end() {
            return (
              0 === this._ant.payload || i.Pathfinder.closest(this._ant.point, this._root.area.listFood).distance <= P.DISTANCE_NO_UNLOAD
            );
          }
          actionName(t) {
            return d.b.UNLOAD;
          }
          isTargetValid(t) {
            return t && !t.isFood;
          }
          get _targetList() {
            return this._root.area.pathfinder.neighbours(this._ant.point).map((t) => this._root.area.cellGet(t));
          }
          _targetPick(t) {
            return t[0];
          }
          constructor(t, e) {
            super(t, e);
          }
        }).prototype,
        'end',
        [o.j],
        Object.getOwnPropertyDescriptor(f.prototype, 'end'),
        f.prototype
      ),
      v(f.prototype, '_targetList', [o.j], Object.getOwnPropertyDescriptor(f.prototype, '_targetList'), f.prototype),
      f);
    var b,
      g = r(3);
    function m(t, e, r, n, i) {
      var o = {};
      return (
        Object.keys(n).forEach(function (t) {
          o[t] = n[t];
        }),
        (o.enumerable = !!o.enumerable),
        (o.configurable = !!o.configurable),
        ('value' in o || o.initializer) && (o.writable = !0),
        (o = r
          .slice()
          .reverse()
          .reduce(function (r, n) {
            return n(t, e, r) || r;
          }, o)),
        i && void 0 !== o.initializer && ((o.value = o.initializer ? o.initializer.call(i) : void 0), (o.initializer = void 0)),
        void 0 === o.initializer && (Object.defineProperty(t, e, o), (o = null)),
        o
      );
    }
    let _ =
      (m(
        (b = class extends a {
          get end() {
            return this._ant.health >= g.Mother.config.HEALTH_MAX;
          }
          actionName(t) {
            return t > 1 ? d.b.MOVE : d.b.EAT;
          }
          isTargetValid(t) {
            return null == t ? void 0 : t.isFood;
          }
          get _targetList() {
            return this._root.area.listFood;
          }
          _targetPick(t) {
            return i.Pathfinder.closest(this._ant.point, t).cell;
          }
          constructor(t, e) {
            super(t, e);
          }
        }).prototype,
        'end',
        [o.j],
        Object.getOwnPropertyDescriptor(b.prototype, 'end'),
        b.prototype
      ),
      m(b.prototype, '_targetList', [o.j], Object.getOwnPropertyDescriptor(b.prototype, '_targetList'), b.prototype),
      b);
    class O {
      constructor() {
        this.disposes = [];
      }
      dispose() {
        this.disposes.forEach((t) => t());
      }
    }
    var w, j;
    function x(t, e, r, n, i) {
      var o = {};
      return (
        Object.keys(n).forEach(function (t) {
          o[t] = n[t];
        }),
        (o.enumerable = !!o.enumerable),
        (o.configurable = !!o.configurable),
        ('value' in o || o.initializer) && (o.writable = !0),
        (o = r
          .slice()
          .reverse()
          .reduce(function (r, n) {
            return n(t, e, r) || r;
          }, o)),
        i && void 0 !== o.initializer && ((o.value = o.initializer ? o.initializer.call(i) : void 0), (o.initializer = void 0)),
        void 0 === o.initializer && (Object.defineProperty(t, e, o), (o = null)),
        o
      );
    }
    let A =
      (x(
        (w = class extends O {
          get action() {
            let t = this._actionIndex;
            for (; this.actionList[t].end; ) {
              const e = t + 1;
              t = e < this.actionList.length ? e : 0;
            }
            return this.actionList[(this._actionIndex = t)];
          }
          get target() {
            return this.action.target;
          }
          get gameAction() {
            return this.target && this._targetMove
              ? new d.c(this._ant, this.action.actionName(this.targetDistance), new i.Point(this._targetMove))
              : new d.c(this._ant, d.b.STAY);
          }
          get targetDistance() {
            var t, e;
            return null !== (t = null === (e = this.target) || void 0 === e ? void 0 : e.distanceTo(this._ant.point)) && void 0 !== t
              ? t
              : -1;
          }
          get _targetMove() {
            if (!this.target) return;
            const { x: t, y: e } = i.Pathfinder.vector(this._ant.point, this.target.point),
              r = [
                { x: Math.sign(t), y: 0 },
                { x: 0, y: Math.sign(e) },
              ],
              n = [Math.abs(t) >= Math.abs(e) ? r.shift() : r.pop(), r.pop()].find((t) => {
                const e = {
                  x: this._ant.point.x + t.x,
                  y: this._ant.point.y + t.y,
                };
                return this.target.point.equal(e) || (this._root.area.pathfinder.pointValid(e) && this._root.area.cellGet(e).isWalkable);
              });
            if (n) return n;
            const o = this._root.area.pathfinder.find(this._ant.point, this.target.point);
            return o.length && i.Pathfinder.vector(this._ant.point, o[0]);
          }
          constructor(t, e) {
            super(),
              (this._root = t),
              (this._ant = e),
              (this._actionIndex = 0),
              (function (t, e, r, n) {
                r &&
                  Object.defineProperty(t, e, {
                    enumerable: r.enumerable,
                    configurable: r.configurable,
                    writable: r.writable,
                    value: r.initializer ? r.initializer.call(n) : void 0,
                  });
              })(this, '_target', j, this),
              this.disposes.push(
                Object(o.i)(() => {
                  this.__target = this.target;
                })
              );
          }
        }).prototype,
        'action',
        [o.j],
        Object.getOwnPropertyDescriptor(w.prototype, 'action'),
        w.prototype
      ),
      (j = x(w.prototype, '_target', [o.x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null,
      })),
      x(w.prototype, 'target', [o.j], Object.getOwnPropertyDescriptor(w.prototype, 'target'), w.prototype),
      x(w.prototype, 'gameAction', [o.j], Object.getOwnPropertyDescriptor(w.prototype, 'gameAction'), w.prototype),
      x(w.prototype, 'targetDistance', [o.j], Object.getOwnPropertyDescriptor(w.prototype, 'targetDistance'), w.prototype),
      x(w.prototype, '_targetMove', [o.j], Object.getOwnPropertyDescriptor(w.prototype, '_targetMove'), w.prototype),
      w);
    class P extends A {
      constructor(t, e) {
        super(t, e), (this.actionList = [new y(this._root, this._ant), new _(this._root, this._ant)]);
      }
    }
    var S;
    function E(t, e, r, n, i) {
      var o = {};
      return (
        Object.keys(n).forEach(function (t) {
          o[t] = n[t];
        }),
        (o.enumerable = !!o.enumerable),
        (o.configurable = !!o.configurable),
        ('value' in o || o.initializer) && (o.writable = !0),
        (o = r
          .slice()
          .reverse()
          .reduce(function (r, n) {
            return n(t, e, r) || r;
          }, o)),
        i && void 0 !== o.initializer && ((o.value = o.initializer ? o.initializer.call(i) : void 0), (o.initializer = void 0)),
        void 0 === o.initializer && (Object.defineProperty(t, e, o), (o = null)),
        o
      );
    }
    (P.DISTANCE_NO_UNLOAD = 1), (P.NEED = (t, e, r) => (r ? t < 0.8 * e : t < 0.3 * e));
    let D =
      (E(
        (S = class extends a {
          get end() {
            return this._ant.payload === g.Mother.config.PAYLOAD_MAX || !this._targetList.length;
          }
          actionName(t) {
            return t > 1 ? d.b.MOVE : d.b.LOAD;
          }
          isTargetValid(t) {
            const e = null == t ? void 0 : t.targetBy;
            return (null == t ? void 0 : t.isFood) && (!e.length || e[0] === this._ant);
          }
          get _targetList() {
            return this._root.area.listFood;
          }
          _targetPick(t) {
            return i.Pathfinder.closest(this._ant.point, t).cell;
          }
          constructor(t, e) {
            super(t, e);
          }
        }).prototype,
        'end',
        [o.j],
        Object.getOwnPropertyDescriptor(S.prototype, 'end'),
        S.prototype
      ),
      E(S.prototype, '_targetList', [o.j], Object.getOwnPropertyDescriptor(S.prototype, '_targetList'), S.prototype),
      S);
    var z;
    function k(t, e, r, n, i) {
      var o = {};
      return (
        Object.keys(n).forEach(function (t) {
          o[t] = n[t];
        }),
        (o.enumerable = !!o.enumerable),
        (o.configurable = !!o.configurable),
        ('value' in o || o.initializer) && (o.writable = !0),
        (o = r
          .slice()
          .reverse()
          .reduce(function (r, n) {
            return n(t, e, r) || r;
          }, o)),
        i && void 0 !== o.initializer && ((o.value = o.initializer ? o.initializer.call(i) : void 0), (o.initializer = void 0)),
        void 0 === o.initializer && (Object.defineProperty(t, e, o), (o = null)),
        o
      );
    }
    let T =
      (k(
        (z = class extends a {
          get end() {
            return 0 === this._ant.payload;
          }
          actionName(t) {
            return t > 1 ? d.b.MOVE : d.b.UNLOAD;
          }
          isTargetValid(t) {
            return null == t ? void 0 : t.isHiveMyFree;
          }
          get _targetList() {
            const t = this._root.area.listHiveWithFood;
            return t.length ? t : this._root.area.listHive;
          }
          _targetPick(t) {
            return i.Pathfinder.closest(this._ant.point, t).cell;
          }
          constructor(t, e) {
            super(t, e);
          }
        }).prototype,
        'end',
        [o.j],
        Object.getOwnPropertyDescriptor(z.prototype, 'end'),
        z.prototype
      ),
      k(z.prototype, '_targetList', [o.j], Object.getOwnPropertyDescriptor(z.prototype, '_targetList'), z.prototype),
      z);
    class L extends A {
      constructor(t, e) {
        super(t, e), (this.actionList = [new D(this._root, this._ant), new T(this._root, this._ant)]);
      }
    }
    var N;
    function M(t, e, r, n, i) {
      var o = {};
      return (
        Object.keys(n).forEach(function (t) {
          o[t] = n[t];
        }),
        (o.enumerable = !!o.enumerable),
        (o.configurable = !!o.configurable),
        ('value' in o || o.initializer) && (o.writable = !0),
        (o = r
          .slice()
          .reverse()
          .reduce(function (r, n) {
            return n(t, e, r) || r;
          }, o)),
        i && void 0 !== o.initializer && ((o.value = o.initializer ? o.initializer.call(i) : void 0), (o.initializer = void 0)),
        void 0 === o.initializer && (Object.defineProperty(t, e, o), (o = null)),
        o
      );
    }
    L.NEED = (t, e, r) =>
      (r && r instanceof L && r.action instanceof T) ||
      t.area.listFood.length > t.mind.list.filter((t) => t !== e && t._goal instanceof L && t._goal.action instanceof D).length;
    let V =
      (M(
        (N = class extends a {
          get end() {
            return this._ant.payload === g.Mother.config.PAYLOAD_MAX || this._targetList.length <= 1;
          }
          actionName(t) {
            return t > 1 ? d.b.MOVE : d.b.LOAD;
          }
          isTargetValid(t) {
            return (null == t ? void 0 : t.food) > 0;
          }
          get _targetList() {
            return this._root.area.listHiveWithFood;
          }
          _targetPick(t) {
            const e = t.map((t) => t.food);
            return t[e.indexOf(Math.min(...e))];
          }
          constructor(t, e) {
            super(t, e);
          }
        }).prototype,
        'end',
        [o.j],
        Object.getOwnPropertyDescriptor(N.prototype, 'end'),
        N.prototype
      ),
      M(N.prototype, '_targetList', [o.j], Object.getOwnPropertyDescriptor(N.prototype, '_targetList'), N.prototype),
      N);
    var C;
    function R(t, e, r, n, i) {
      var o = {};
      return (
        Object.keys(n).forEach(function (t) {
          o[t] = n[t];
        }),
        (o.enumerable = !!o.enumerable),
        (o.configurable = !!o.configurable),
        ('value' in o || o.initializer) && (o.writable = !0),
        (o = r
          .slice()
          .reverse()
          .reduce(function (r, n) {
            return n(t, e, r) || r;
          }, o)),
        i && void 0 !== o.initializer && ((o.value = o.initializer ? o.initializer.call(i) : void 0), (o.initializer = void 0)),
        void 0 === o.initializer && (Object.defineProperty(t, e, o), (o = null)),
        o
      );
    }
    let I =
      (R(
        (C = class extends a {
          get end() {
            return 0 === this._ant.payload;
          }
          actionName(t) {
            return t > 1 ? d.b.MOVE : d.b.UNLOAD;
          }
          isTargetValid(t) {
            return null == t ? void 0 : t.isHiveMyFree;
          }
          get _targetList() {
            const t = this._root.area.listHiveWithFood;
            return t.length ? t : this._root.area.listHive;
          }
          _targetPick(t) {
            const e = t.map((t) => t.food),
              r = Math.max(...e);
            return r ? t[e.indexOf(r)] : i.Pathfinder.closest(this._ant.point, t).cell;
          }
          constructor(t, e) {
            super(t, e);
          }
        }).prototype,
        'end',
        [o.j],
        Object.getOwnPropertyDescriptor(C.prototype, 'end'),
        C.prototype
      ),
      R(C.prototype, '_targetList', [o.j], Object.getOwnPropertyDescriptor(C.prototype, '_targetList'), C.prototype),
      C);
    class B extends A {
      constructor(t, e) {
        super(t, e), (this.actionList = [new V(this._root, this._ant), new I(this._root, this._ant)]);
      }
    }
    var H;
    function U(t, e, r, n, i) {
      var o = {};
      return (
        Object.keys(n).forEach(function (t) {
          o[t] = n[t];
        }),
        (o.enumerable = !!o.enumerable),
        (o.configurable = !!o.configurable),
        ('value' in o || o.initializer) && (o.writable = !0),
        (o = r
          .slice()
          .reverse()
          .reduce(function (r, n) {
            return n(t, e, r) || r;
          }, o)),
        i && void 0 !== o.initializer && ((o.value = o.initializer ? o.initializer.call(i) : void 0), (o.initializer = void 0)),
        void 0 === o.initializer && (Object.defineProperty(t, e, o), (o = null)),
        o
      );
    }
    B.NEED = (t, e, r) => t.area.listHiveWithFood.length > 1 || (r && e.payload > 0);
    let F =
      (U(
        (H = class extends a {
          get end() {
            return !1;
          }
          actionName(t) {
            return t > 0 ? d.b.MOVE : d.b.STAY;
          }
          isTargetValid(t) {
            return t && !t.isHiveMy;
          }
          get _targetList() {
            return this._root.area.pathfinder
              .neighbours(this._ant.point)
              .map((t) => this._root.area.cellGet(t))
              .concat(this._root.area.cellGet(this._ant.point));
          }
          _targetPick(t) {
            return i.Pathfinder.closest(this._ant.point, t).cell;
          }
          constructor(t, e) {
            super(t, e);
          }
        }).prototype,
        'end',
        [o.j],
        Object.getOwnPropertyDescriptor(H.prototype, 'end'),
        H.prototype
      ),
      U(H.prototype, '_targetList', [o.j], Object.getOwnPropertyDescriptor(H.prototype, '_targetList'), H.prototype),
      H);
    class G extends A {
      constructor(t, e) {
        super(t, e), (this.actionList = [new F(this._root, this._ant)]);
      }
    }
    var W, q, K;
    function J(t, e, r, n) {
      r &&
        Object.defineProperty(t, e, {
          enumerable: r.enumerable,
          configurable: r.configurable,
          writable: r.writable,
          value: r.initializer ? r.initializer.call(n) : void 0,
        });
    }
    function X(t, e, r, n, i) {
      var o = {};
      return (
        Object.keys(n).forEach(function (t) {
          o[t] = n[t];
        }),
        (o.enumerable = !!o.enumerable),
        (o.configurable = !!o.configurable),
        ('value' in o || o.initializer) && (o.writable = !0),
        (o = r
          .slice()
          .reverse()
          .reduce(function (r, n) {
            return n(t, e, r) || r;
          }, o)),
        i && void 0 !== o.initializer && ((o.value = o.initializer ? o.initializer.call(i) : void 0), (o.initializer = void 0)),
        void 0 === o.initializer && (Object.defineProperty(t, e, o), (o = null)),
        o
      );
    }
    let Y =
      (X(
        (W = class extends O {
          get goal() {
            let t;
            return (
              (t = P.NEED(this.health, g.Mother.config.HEALTH_MAX, this._goal instanceof P)
                ? P
                : L.NEED(this._root, this, this._goal)
                ? L
                : B.NEED(this._root, this, this._goal instanceof B)
                ? B
                : G),
              this._goal instanceof t ||
                (null === (e = this._goal) || void 0 === e || e.dispose(),
                (this._goal = new t(this._root, this)),
                console.warn(`[next GOAL ${this.id}] ${this._goal.constructor.name}`)),
              this._goal
            );
            var e;
          }
          get canWalk() {
            return !!this._root.area.pathfinder.neighbours(this.point).length;
          }
          get cell() {
            return this._root.area.cellGet(this.point);
          }
          constructor(t, e, r) {
            super(),
              (this._root = t),
              (this.id = e),
              (this._goal = void 0),
              (this.point = void 0),
              J(this, 'health', q, this),
              J(this, 'payload', K, this),
              (this.point = new i.Point(r.point)),
              this.update(r);
          }
          update(t) {
            this.point.update(t.point), (this.payload = t.payload), (this.health = t.health);
          }
        }).prototype,
        'goal',
        [o.j],
        Object.getOwnPropertyDescriptor(W.prototype, 'goal'),
        W.prototype
      ),
      (q = X(W.prototype, 'health', [o.x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null,
      })),
      (K = X(W.prototype, 'payload', [o.x], {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        initializer: null,
      })),
      X(W.prototype, 'canWalk', [o.j], Object.getOwnPropertyDescriptor(W.prototype, 'canWalk'), W.prototype),
      X(W.prototype, 'cell', [o.j], Object.getOwnPropertyDescriptor(W.prototype, 'cell'), W.prototype),
      X(W.prototype, 'update', [o.h], Object.getOwnPropertyDescriptor(W.prototype, 'update'), W.prototype),
      W);
  },
  function (t, e, r) {
    'use strict';
    r.d(e, 'a', function () {
      return a;
    });
    var n,
      i = r(0);
    function o(t, e, r, n, i) {
      var o = {};
      return (
        Object.keys(n).forEach(function (t) {
          o[t] = n[t];
        }),
        (o.enumerable = !!o.enumerable),
        (o.configurable = !!o.configurable),
        ('value' in o || o.initializer) && (o.writable = !0),
        (o = r
          .slice()
          .reverse()
          .reduce(function (r, n) {
            return n(t, e, r) || r;
          }, o)),
        i && void 0 !== o.initializer && ((o.value = o.initializer ? o.initializer.call(i) : void 0), (o.initializer = void 0)),
        void 0 === o.initializer && (Object.defineProperty(t, e, o), (o = null)),
        o
      );
    }
    let a =
      (o(
        (n = class t {
          static vector(t, e) {
            return { x: e.x - t.x, y: e.y - t.y };
          }
          static manhattanDistance(e, r) {
            const { x: n, y: i } = t.vector(e, r);
            return Math.abs(n) + Math.abs(i);
          }
          static diagonalDistance(e, r) {
            const { x: n, y: i } = t.vector(e, r);
            return Math.max(Math.abs(n), Math.abs(i));
          }
          static euclideanDistance(e, r) {
            const { x: n, y: i } = t.vector(e, r);
            return Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2));
          }
          static closest(t, e) {
            const r = e.map((e) => e.distanceTo(t)),
              n = Math.min(...r);
            return { distance: n, cell: e[r.indexOf(n)] };
          }
          get height() {
            return this._root.area.size.height;
          }
          get width() {
            return this._root.area.size.width;
          }
          get size() {
            return this.width * this.height;
          }
          constructor(t) {
            this._root = t;
          }
          neighbours({ x: t, y: e }) {
            const r = e - 1,
              n = e + 1,
              i = t + 1,
              o = t - 1,
              a = r > -1 && this.canWalkHere(t, r),
              s = n < this.height && this.canWalkHere(t, n),
              u = i < this.width && this.canWalkHere(i, e),
              c = o > -1 && this.canWalkHere(o, e),
              l = [];
            return a && l.push({ x: t, y: r }), u && l.push({ x: i, y: e }), s && l.push({ x: t, y: n }), c && l.push({ x: o, y: e }), l;
          }
          diagonalNeighbours(t, e, r, n, i, o, a, s) {
            if (t) {
              if (r && this.canWalkHere(a, i)) return { x: a, y: i };
              if (n && this.canWalkHere(s, i)) return { x: s, y: i };
            }
            if (e) {
              if (r && this.canWalkHere(a, o)) return { x: a, y: o };
              if (n && this.canWalkHere(s, o)) return { x: s, y: o };
            }
          }
          diagonalNeighboursFree(t, e, r, n) {
            const i = t > -1,
              o = e < this.height,
              a = n > -1;
            if (r < this.width) {
              if (i && this.canWalkHere(r, t)) return { x: r, y: t };
              if (o && this.canWalkHere(r, e)) return { x: r, y: e };
            }
            if (a) {
              if (i && this.canWalkHere(n, t)) return { x: n, y: t };
              if (o && this.canWalkHere(n, e)) return { x: n, y: e };
            }
          }
          canWalkHere(t, e) {
            const r = this._root.area.cellGet({ x: t, y: e });
            return null == r ? void 0 : r.isPathfindable;
          }
          pointValid(t) {
            return 0 <= t.x && t.x < this.width && 0 <= t.y && t.y < this.height;
          }
          find(e, r) {
            const n = t.manhattanDistance,
              i = new s(null, e),
              o = new s(null, r),
              a = {},
              u = [i],
              c = [];
            let l = [];
            for (; u.length; ) {
              let t = this.size,
                e = -1;
              for (let r = 0; r < u.length; r++) u[r].f < t && ((t = u[r].f), (e = r));
              let r = u.splice(e, 1)[0];
              r.value === o.value
                ? (l = this._backtrace(r).slice(1))
                : (this.neighbours(r.point).forEach((t) => {
                    let e = new s(r, t);
                    a[e.value] || ((e.g = r.g + n(t, r.point)), (e.f = e.g + n(t, o.point)), u.push(e), (a[e.value] = !0));
                  }),
                  c.push(r));
            }
            return l;
          }
          _backtrace(t) {
            for (var e = [t.point]; t.parent; ) (t = t.parent), e.push(t.point);
            return e.reverse();
          }
        }).prototype,
        'height',
        [i.j],
        Object.getOwnPropertyDescriptor(n.prototype, 'height'),
        n.prototype
      ),
      o(n.prototype, 'width', [i.j], Object.getOwnPropertyDescriptor(n.prototype, 'width'), n.prototype),
      o(n.prototype, 'size', [i.j], Object.getOwnPropertyDescriptor(n.prototype, 'size'), n.prototype),
      n);
    class s {
      get value() {
        return `${this.point.x}|${this.point.y}`;
      }
      constructor(t, e) {
        (this.parent = t), (this.point = e), (this.f = 0), (this.g = 0);
      }
    }
  },
  function (t, e, r) {
    var n = r(17);
    t.exports = function (t) {
      return (null == t ? 0 : t.length) ? n(t, 1) : [];
    };
  },
  function (t, e, r) {
    var n = r(46),
      i = r(17),
      o = r(85),
      a = r(93),
      s = o(function (t, e) {
        return a(t) ? n(t, i(e, 1, a, !0)) : [];
      });
    t.exports = s;
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var r = -1, n = e.length, i = t.length; ++r < n; ) t[i + r] = e[r];
      return t;
    };
  },
  function (t, e, r) {
    var n = r(10),
      i = r(41),
      o = r(45),
      a = n ? n.isConcatSpreadable : void 0;
    t.exports = function (t) {
      return o(t) || i(t) || !!(a && t && t[a]);
    };
  },
  function (t, e) {
    var r = 'object' == typeof global && global && global.Object === Object && global;
    t.exports = r;
  },
  function (t, e, r) {
    var n = r(42),
      i = r(12),
      o = Object.prototype,
      a = o.hasOwnProperty,
      s = o.propertyIsEnumerable,
      u = n(
        (function () {
          return arguments;
        })()
      )
        ? n
        : function (t) {
            return i(t) && a.call(t, 'callee') && !s.call(t, 'callee');
          };
    t.exports = u;
  },
  function (t, e, r) {
    var n = r(18),
      i = r(12);
    t.exports = function (t) {
      return i(t) && '[object Arguments]' == n(t);
    };
  },
  function (t, e, r) {
    var n = r(10),
      i = Object.prototype,
      o = i.hasOwnProperty,
      a = i.toString,
      s = n ? n.toStringTag : void 0;
    t.exports = function (t) {
      var e = o.call(t, s),
        r = t[s];
      try {
        t[s] = void 0;
        var n = !0;
      } catch (t) {}
      var i = a.call(t);
      return n && (e ? (t[s] = r) : delete t[s]), i;
    };
  },
  function (t, e) {
    var r = Object.prototype.toString;
    t.exports = function (t) {
      return r.call(t);
    };
  },
  function (t, e) {
    var r = Array.isArray;
    t.exports = r;
  },
  function (t, e, r) {
    var n = r(47),
      i = r(76),
      o = r(81),
      a = r(82),
      s = r(83),
      u = r(84);
    t.exports = function (t, e, r, c) {
      var l = -1,
        p = i,
        h = !0,
        f = t.length,
        d = [],
        v = e.length;
      if (!f) return d;
      r && (e = a(e, s(r))), c ? ((p = o), (h = !1)) : e.length >= 200 && ((p = u), (h = !1), (e = new n(e)));
      t: for (; ++l < f; ) {
        var y = t[l],
          b = null == r ? y : r(y);
        if (((y = c || 0 !== y ? y : 0), h && b == b)) {
          for (var g = v; g--; ) if (e[g] === b) continue t;
          d.push(y);
        } else p(e, b, c) || d.push(y);
      }
      return d;
    };
  },
  function (t, e, r) {
    var n = r(48),
      i = r(74),
      o = r(75);
    function a(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.__data__ = new n(); ++e < r; ) this.add(t[e]);
    }
    (a.prototype.add = a.prototype.push = i), (a.prototype.has = o), (t.exports = a);
  },
  function (t, e, r) {
    var n = r(49),
      i = r(69),
      o = r(71),
      a = r(72),
      s = r(73);
    function u(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (u.prototype.clear = n), (u.prototype.delete = i), (u.prototype.get = o), (u.prototype.has = a), (u.prototype.set = s), (t.exports = u);
  },
  function (t, e, r) {
    var n = r(50),
      i = r(61),
      o = r(68);
    t.exports = function () {
      (this.size = 0),
        (this.__data__ = {
          hash: new n(),
          map: new (o || i)(),
          string: new n(),
        });
    };
  },
  function (t, e, r) {
    var n = r(51),
      i = r(57),
      o = r(58),
      a = r(59),
      s = r(60);
    function u(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (u.prototype.clear = n), (u.prototype.delete = i), (u.prototype.get = o), (u.prototype.has = a), (u.prototype.set = s), (t.exports = u);
  },
  function (t, e, r) {
    var n = r(5);
    t.exports = function () {
      (this.__data__ = n ? n(null) : {}), (this.size = 0);
    };
  },
  function (t, e, r) {
    var n = r(24),
      i = r(53),
      o = r(25),
      a = r(55),
      s = /^\[object .+?Constructor\]$/,
      u = Function.prototype,
      c = Object.prototype,
      l = u.toString,
      p = c.hasOwnProperty,
      h = RegExp(
        '^' +
          l
            .call(p)
            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
          '$'
      );
    t.exports = function (t) {
      return !(!o(t) || i(t)) && (n(t) ? h : s).test(a(t));
    };
  },
  function (t, e, r) {
    var n,
      i = r(54),
      o = (n = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + n : '';
    t.exports = function (t) {
      return !!o && o in t;
    };
  },
  function (t, e, r) {
    var n = r(11)['__core-js_shared__'];
    t.exports = n;
  },
  function (t, e) {
    var r = Function.prototype.toString;
    t.exports = function (t) {
      if (null != t) {
        try {
          return r.call(t);
        } catch (t) {}
        try {
          return t + '';
        } catch (t) {}
      }
      return '';
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null == t ? void 0 : t[e];
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= e ? 1 : 0), e;
    };
  },
  function (t, e, r) {
    var n = r(5),
      i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      var e = this.__data__;
      if (n) {
        var r = e[t];
        return '__lodash_hash_undefined__' === r ? void 0 : r;
      }
      return i.call(e, t) ? e[t] : void 0;
    };
  },
  function (t, e, r) {
    var n = r(5),
      i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      var e = this.__data__;
      return n ? void 0 !== e[t] : i.call(e, t);
    };
  },
  function (t, e, r) {
    var n = r(5);
    t.exports = function (t, e) {
      var r = this.__data__;
      return (this.size += this.has(t) ? 0 : 1), (r[t] = n && void 0 === e ? '__lodash_hash_undefined__' : e), this;
    };
  },
  function (t, e, r) {
    var n = r(62),
      i = r(63),
      o = r(65),
      a = r(66),
      s = r(67);
    function u(t) {
      var e = -1,
        r = null == t ? 0 : t.length;
      for (this.clear(); ++e < r; ) {
        var n = t[e];
        this.set(n[0], n[1]);
      }
    }
    (u.prototype.clear = n), (u.prototype.delete = i), (u.prototype.get = o), (u.prototype.has = a), (u.prototype.set = s), (t.exports = u);
  },
  function (t, e) {
    t.exports = function () {
      (this.__data__ = []), (this.size = 0);
    };
  },
  function (t, e, r) {
    var n = r(6),
      i = Array.prototype.splice;
    t.exports = function (t) {
      var e = this.__data__,
        r = n(e, t);
      return !(r < 0) && (r == e.length - 1 ? e.pop() : i.call(e, r, 1), --this.size, !0);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return t === e || (t != t && e != e);
    };
  },
  function (t, e, r) {
    var n = r(6);
    t.exports = function (t) {
      var e = this.__data__,
        r = n(e, t);
      return r < 0 ? void 0 : e[r][1];
    };
  },
  function (t, e, r) {
    var n = r(6);
    t.exports = function (t) {
      return n(this.__data__, t) > -1;
    };
  },
  function (t, e, r) {
    var n = r(6);
    t.exports = function (t, e) {
      var r = this.__data__,
        i = n(r, t);
      return i < 0 ? (++this.size, r.push([t, e])) : (r[i][1] = e), this;
    };
  },
  function (t, e, r) {
    var n = r(13)(r(11), 'Map');
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(7);
    t.exports = function (t) {
      var e = n(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = typeof t;
      return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e ? '__proto__' !== t : null === t;
    };
  },
  function (t, e, r) {
    var n = r(7);
    t.exports = function (t) {
      return n(this, t).get(t);
    };
  },
  function (t, e, r) {
    var n = r(7);
    t.exports = function (t) {
      return n(this, t).has(t);
    };
  },
  function (t, e, r) {
    var n = r(7);
    t.exports = function (t, e) {
      var r = n(this, t),
        i = r.size;
      return r.set(t, e), (this.size += r.size == i ? 0 : 1), this;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.set(t, '__lodash_hash_undefined__'), this;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.has(t);
    };
  },
  function (t, e, r) {
    var n = r(77);
    t.exports = function (t, e) {
      return !!(null == t ? 0 : t.length) && n(t, e, 0) > -1;
    };
  },
  function (t, e, r) {
    var n = r(78),
      i = r(79),
      o = r(80);
    t.exports = function (t, e, r) {
      return e == e ? o(t, e, r) : n(t, i, r);
    };
  },
  function (t, e) {
    t.exports = function (t, e, r, n) {
      for (var i = t.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; ) if (e(t[o], o, t)) return o;
      return -1;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return t != t;
    };
  },
  function (t, e) {
    t.exports = function (t, e, r) {
      for (var n = r - 1, i = t.length; ++n < i; ) if (t[n] === e) return n;
      return -1;
    };
  },
  function (t, e) {
    t.exports = function (t, e, r) {
      for (var n = -1, i = null == t ? 0 : t.length; ++n < i; ) if (r(e, t[n])) return !0;
      return !1;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n; ) i[r] = e(t[r], r, t);
      return i;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e) {
        return t(e);
      };
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return t.has(e);
    };
  },
  function (t, e, r) {
    var n = r(26),
      i = r(86),
      o = r(88);
    t.exports = function (t, e) {
      return o(i(t, e, n), t + '');
    };
  },
  function (t, e, r) {
    var n = r(87),
      i = Math.max;
    t.exports = function (t, e, r) {
      return (
        (e = i(void 0 === e ? t.length - 1 : e, 0)),
        function () {
          for (var o = arguments, a = -1, s = i(o.length - e, 0), u = Array(s); ++a < s; ) u[a] = o[e + a];
          a = -1;
          for (var c = Array(e + 1); ++a < e; ) c[a] = o[a];
          return (c[e] = r(u)), n(t, this, c);
        }
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, r) {
      switch (r.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, r[0]);
        case 2:
          return t.call(e, r[0], r[1]);
        case 3:
          return t.call(e, r[0], r[1], r[2]);
      }
      return t.apply(e, r);
    };
  },
  function (t, e, r) {
    var n = r(89),
      i = r(92)(n);
    t.exports = i;
  },
  function (t, e, r) {
    var n = r(90),
      i = r(91),
      o = r(26),
      a = i
        ? function (t, e) {
            return i(t, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: n(e),
              writable: !0,
            });
          }
        : o;
    t.exports = a;
  },
  function (t, e) {
    t.exports = function (t) {
      return function () {
        return t;
      };
    };
  },
  function (t, e, r) {
    var n = r(13),
      i = (function () {
        try {
          var t = n(Object, 'defineProperty');
          return t({}, '', {}), t;
        } catch (t) {}
      })();
    t.exports = i;
  },
  function (t, e) {
    var r = Date.now;
    t.exports = function (t) {
      var e = 0,
        n = 0;
      return function () {
        var i = r(),
          o = 16 - (i - n);
        if (((n = i), o > 0)) {
          if (++e >= 800) return arguments[0];
        } else e = 0;
        return t.apply(void 0, arguments);
      };
    };
  },
  function (t, e, r) {
    var n = r(94),
      i = r(12);
    t.exports = function (t) {
      return i(t) && n(t);
    };
  },
  function (t, e, r) {
    var n = r(24),
      i = r(95);
    t.exports = function (t) {
      return null != t && i(t.length) && !n(t);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
    };
  },
  function (t, e) {
    t.exports = require('http');
  },
  function (t, e, r) {
    'use strict';
    r.r(e);
    var n = r(3),
      i = r(0);
    let o;
    Object(i.k)({ computedRequiresReaction: !0 }),
      (function (t) {
        (t.NONE = 'no_action'),
          (t.BIRTH = 'birth'),
          (t.DEATH = 'death'),
          (t.SLOW = 'slow'),
          (t.ERROR = 'error'),
          (t.ERROR_MOVE = 'bad_move'),
          (t.ERROR_UNLOAD = 'bad_unload'),
          (t.ERROR_EAT = 'bad_eat');
      })(o || (o = {}));
    new (class {
      constructor(t) {
        (this._root = new n.Mother()), (this.handleData = (t) => this._root.input(t));
        r(96)
          .createServer((t, e) => {
            if ((e.writeHead(200, { 'Content-Type': 'application/json' }), 'POST' === t.method)) {
              let r = '';
              t.on('data', (t) => {
                r += t.toString();
              }),
                t.on('end', () => {
                  try {
                    const t = JSON.parse(r),
                      n = this.handleData(t);
                    e.end(JSON.stringify({ orders: n })), console.log('Tick:', t.tick, n);
                  } catch (t) {
                    e.end('parse data error'), console.log('parse error:', t.message);
                  }
                });
            } else e.end('only POST allowed');
          })
          .listen(t);
      }
    })(7070);
  },
]);
