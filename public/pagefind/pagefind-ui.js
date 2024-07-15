(() => {
  var is = Object.defineProperty;
  var v = (n, e) => {
    for (var t in e) is(n, t, { get: e[t], enumerable: !0 });
  };
  function j() {}
  function lt(n) {
    return n();
  }
  function Qt() {
    return Object.create(null);
  }
  function V(n) {
    n.forEach(lt);
  }
  function Ye(n) {
    return typeof n == "function";
  }
  function G(n, e) {
    return n != n
      ? e == e
      : n !== e || (n && typeof n == "object") || typeof n == "function";
  }
  var Ke;
  function le(n, e) {
    return (
      Ke || (Ke = document.createElement("a")), (Ke.href = e), n === Ke.href
    );
  }
  function xt(n) {
    return Object.keys(n).length === 0;
  }
  var $t =
      typeof window < "u"
        ? window
        : typeof globalThis < "u"
          ? globalThis
          : global,
    fe = class {
      constructor(e) {
        (this.options = e),
          (this._listeners = "WeakMap" in $t ? new WeakMap() : void 0);
      }
      observe(e, t) {
        return (
          this._listeners.set(e, t),
          this._getObserver().observe(e, this.options),
          () => {
            this._listeners.delete(e), this._observer.unobserve(e);
          }
        );
      }
      _getObserver() {
        var e;
        return (e = this._observer) !== null && e !== void 0
          ? e
          : (this._observer = new ResizeObserver((t) => {
              var s;
              for (let r of t)
                fe.entries.set(r.target, r),
                  (s = this._listeners.get(r.target)) === null ||
                    s === void 0 ||
                    s(r);
            }));
      }
    };
  fe.entries = "WeakMap" in $t ? new WeakMap() : void 0;
  var en = !1;
  function as() {
    en = !0;
  }
  function os() {
    en = !1;
  }
  function b(n, e) {
    n.appendChild(e);
  }
  function y(n, e, t) {
    n.insertBefore(e, t || null);
  }
  function C(n) {
    n.parentNode && n.parentNode.removeChild(n);
  }
  function Q(n, e) {
    for (let t = 0; t < n.length; t += 1) n[t] && n[t].d(e);
  }
  function k(n) {
    return document.createElement(n);
  }
  function us(n) {
    return document.createElementNS("http://www.w3.org/2000/svg", n);
  }
  function A(n) {
    return document.createTextNode(n);
  }
  function M() {
    return A(" ");
  }
  function x() {
    return A("");
  }
  function K(n, e, t, s) {
    return n.addEventListener(e, t, s), () => n.removeEventListener(e, t, s);
  }
  function p(n, e, t) {
    t == null
      ? n.removeAttribute(e)
      : n.getAttribute(e) !== t && n.setAttribute(e, t);
  }
  function cs(n) {
    return Array.from(n.childNodes);
  }
  function N(n, e) {
    (e = "" + e), n.data !== e && (n.data = e);
  }
  function it(n, e) {
    n.value = e ?? "";
  }
  function W(n, e, t) {
    n.classList[t ? "add" : "remove"](e);
  }
  var Xe = class {
    constructor(e = !1) {
      (this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
    }
    c(e) {
      this.h(e);
    }
    m(e, t, s = null) {
      this.e ||
        (this.is_svg
          ? (this.e = us(t.nodeName))
          : (this.e = k(t.nodeType === 11 ? "TEMPLATE" : t.nodeName)),
        (this.t = t.tagName !== "TEMPLATE" ? t : t.content),
        this.c(e)),
        this.i(s);
    }
    h(e) {
      (this.e.innerHTML = e),
        (this.n = Array.from(
          this.e.nodeName === "TEMPLATE"
            ? this.e.content.childNodes
            : this.e.childNodes,
        ));
    }
    i(e) {
      for (let t = 0; t < this.n.length; t += 1) y(this.t, this.n[t], e);
    }
    p(e) {
      this.d(), this.h(e), this.i(this.a);
    }
    d() {
      this.n.forEach(C);
    }
  };
  var de;
  function _e(n) {
    de = n;
  }
  function tn() {
    if (!de)
      throw new Error("Function called outside component initialization");
    return de;
  }
  function at(n) {
    tn().$$.on_mount.push(n);
  }
  function ot(n) {
    tn().$$.on_destroy.push(n);
  }
  var ne = [];
  var re = [],
    se = [],
    nt = [],
    _s = Promise.resolve(),
    st = !1;
  function fs() {
    st || ((st = !0), _s.then(sn));
  }
  function rt(n) {
    se.push(n);
  }
  function nn(n) {
    nt.push(n);
  }
  var tt = new Set(),
    te = 0;
  function sn() {
    if (te !== 0) return;
    let n = de;
    do {
      try {
        for (; te < ne.length; ) {
          let e = ne[te];
          te++, _e(e), ds(e.$$);
        }
      } catch (e) {
        throw ((ne.length = 0), (te = 0), e);
      }
      for (_e(null), ne.length = 0, te = 0; re.length; ) re.pop()();
      for (let e = 0; e < se.length; e += 1) {
        let t = se[e];
        tt.has(t) || (tt.add(t), t());
      }
      se.length = 0;
    } while (ne.length);
    for (; nt.length; ) nt.pop()();
    (st = !1), tt.clear(), _e(n);
  }
  function ds(n) {
    if (n.fragment !== null) {
      n.update(), V(n.before_update);
      let e = n.dirty;
      (n.dirty = [-1]),
        n.fragment && n.fragment.p(n.ctx, e),
        n.after_update.forEach(rt);
    }
  }
  function hs(n) {
    let e = [],
      t = [];
    se.forEach((s) => (n.indexOf(s) === -1 ? e.push(s) : t.push(s))),
      t.forEach((s) => s()),
      (se = e);
  }
  var Je = new Set(),
    ee;
  function ie() {
    ee = { r: 0, c: [], p: ee };
  }
  function ae() {
    ee.r || V(ee.c), (ee = ee.p);
  }
  function z(n, e) {
    n && n.i && (Je.delete(n), n.i(e));
  }
  function I(n, e, t, s) {
    if (n && n.o) {
      if (Je.has(n)) return;
      Je.add(n),
        ee.c.push(() => {
          Je.delete(n), s && (t && n.d(1), s());
        }),
        n.o(e);
    } else s && s();
  }
  function rn(n, e) {
    I(n, 1, 1, () => {
      e.delete(n.key);
    });
  }
  function ln(n, e, t, s, r, l, i, a, o, h, _, f) {
    let c = n.length,
      E = l.length,
      u = c,
      m = {};
    for (; u--; ) m[n[u].key] = u;
    let d = [],
      R = new Map(),
      T = new Map(),
      S = [];
    for (u = E; u--; ) {
      let F = f(r, l, u),
        U = t(F),
        P = i.get(U);
      P ? s && S.push(() => P.p(F, e)) : ((P = h(U, F)), P.c()),
        R.set(U, (d[u] = P)),
        U in m && T.set(U, Math.abs(u - m[U]));
    }
    let w = new Set(),
      B = new Set();
    function X(F) {
      z(F, 1), F.m(a, _), i.set(F.key, F), (_ = F.first), E--;
    }
    for (; c && E; ) {
      let F = d[E - 1],
        U = n[c - 1],
        P = F.key,
        Z = U.key;
      F === U
        ? ((_ = F.first), c--, E--)
        : R.has(Z)
          ? !i.has(P) || w.has(P)
            ? X(F)
            : B.has(Z)
              ? c--
              : T.get(P) > T.get(Z)
                ? (B.add(P), X(F))
                : (w.add(Z), c--)
          : (o(U, i), c--);
    }
    for (; c--; ) {
      let F = n[c];
      R.has(F.key) || o(F, i);
    }
    for (; E; ) X(d[E - 1]);
    return V(S), d;
  }
  var ms = [
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "inert",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected",
    ],
    Fi = new Set([...ms]);
  function an(n, e, t) {
    let s = n.$$.props[e];
    s !== void 0 && ((n.$$.bound[s] = t), t(n.$$.ctx[s]));
  }
  function Ze(n) {
    n && n.c();
  }
  function he(n, e, t, s) {
    let { fragment: r, after_update: l } = n.$$;
    r && r.m(e, t),
      s ||
        rt(() => {
          let i = n.$$.on_mount.map(lt).filter(Ye);
          n.$$.on_destroy ? n.$$.on_destroy.push(...i) : V(i),
            (n.$$.on_mount = []);
        }),
      l.forEach(rt);
  }
  function oe(n, e) {
    let t = n.$$;
    t.fragment !== null &&
      (hs(t.after_update),
      V(t.on_destroy),
      t.fragment && t.fragment.d(e),
      (t.on_destroy = t.fragment = null),
      (t.ctx = []));
  }
  function ps(n, e) {
    n.$$.dirty[0] === -1 && (ne.push(n), fs(), n.$$.dirty.fill(0)),
      (n.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function J(n, e, t, s, r, l, i, a = [-1]) {
    let o = de;
    _e(n);
    let h = (n.$$ = {
      fragment: null,
      ctx: [],
      props: l,
      update: j,
      not_equal: r,
      bound: Qt(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(e.context || (o ? o.$$.context : [])),
      callbacks: Qt(),
      dirty: a,
      skip_bound: !1,
      root: e.target || o.$$.root,
    });
    i && i(h.root);
    let _ = !1;
    if (
      ((h.ctx = t
        ? t(n, e.props || {}, (f, c, ...E) => {
            let u = E.length ? E[0] : c;
            return (
              h.ctx &&
                r(h.ctx[f], (h.ctx[f] = u)) &&
                (!h.skip_bound && h.bound[f] && h.bound[f](u), _ && ps(n, f)),
              c
            );
          })
        : []),
      h.update(),
      (_ = !0),
      V(h.before_update),
      (h.fragment = s ? s(h.ctx) : !1),
      e.target)
    ) {
      if (e.hydrate) {
        as();
        let f = cs(e.target);
        h.fragment && h.fragment.l(f), f.forEach(C);
      } else h.fragment && h.fragment.c();
      e.intro && z(n.$$.fragment),
        he(n, e.target, e.anchor, e.customElement),
        os(),
        sn();
    }
    _e(o);
  }
  var gs;
  typeof HTMLElement == "function" &&
    (gs = class extends HTMLElement {
      constructor() {
        super(), this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        let { on_mount: n } = this.$$;
        this.$$.on_disconnect = n.map(lt).filter(Ye);
        for (let e in this.$$.slotted) this.appendChild(this.$$.slotted[e]);
      }
      attributeChangedCallback(n, e, t) {
        this[n] = t;
      }
      disconnectedCallback() {
        V(this.$$.on_disconnect);
      }
      $destroy() {
        oe(this, 1), (this.$destroy = j);
      }
      $on(n, e) {
        if (!Ye(e)) return j;
        let t = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
        return (
          t.push(e),
          () => {
            let s = t.indexOf(e);
            s !== -1 && t.splice(s, 1);
          }
        );
      }
      $set(n) {
        this.$$set &&
          !xt(n) &&
          ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
      }
    });
  var q = class {
    $destroy() {
      oe(this, 1), (this.$destroy = j);
    }
    $on(e, t) {
      if (!Ye(t)) return j;
      let s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        s.push(t),
        () => {
          let r = s.indexOf(t);
          r !== -1 && s.splice(r, 1);
        }
      );
    }
    $set(e) {
      this.$$set &&
        !xt(e) &&
        ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  };
  function D(n) {
    let e = typeof n == "string" ? n.charCodeAt(0) : n;
    return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
  }
  function $(n) {
    let e = typeof n == "string" ? n.charCodeAt(0) : n;
    return e >= 48 && e <= 57;
  }
  function Y(n) {
    return D(n) || $(n);
  }
  var on = [
    "art-lojban",
    "cel-gaulish",
    "no-bok",
    "no-nyn",
    "zh-guoyu",
    "zh-hakka",
    "zh-min",
    "zh-min-nan",
    "zh-xiang",
  ];
  var ut = {
    "en-gb-oed": "en-GB-oxendict",
    "i-ami": "ami",
    "i-bnn": "bnn",
    "i-default": null,
    "i-enochian": null,
    "i-hak": "hak",
    "i-klingon": "tlh",
    "i-lux": "lb",
    "i-mingo": null,
    "i-navajo": "nv",
    "i-pwn": "pwn",
    "i-tao": "tao",
    "i-tay": "tay",
    "i-tsu": "tsu",
    "sgn-be-fr": "sfb",
    "sgn-be-nl": "vgt",
    "sgn-ch-de": "sgg",
    "art-lojban": "jbo",
    "cel-gaulish": null,
    "no-bok": "nb",
    "no-nyn": "nn",
    "zh-guoyu": "cmn",
    "zh-hakka": "hak",
    "zh-min": null,
    "zh-min-nan": "nan",
    "zh-xiang": "hsn",
  };
  var Es = {}.hasOwnProperty;
  function Qe(n, e = {}) {
    let t = un(),
      s = String(n),
      r = s.toLowerCase(),
      l = 0;
    if (n == null) throw new Error("Expected string, got `" + n + "`");
    if (Es.call(ut, r)) {
      let a = ut[r];
      return (e.normalize === void 0 || e.normalize === null || e.normalize) &&
        typeof a == "string"
        ? Qe(a)
        : ((t[on.includes(r) ? "regular" : "irregular"] = s), t);
    }
    for (; D(r.charCodeAt(l)) && l < 9; ) l++;
    if (l > 1 && l < 9) {
      if (((t.language = s.slice(0, l)), l < 4)) {
        let a = 0;
        for (
          ;
          r.charCodeAt(l) === 45 &&
          D(r.charCodeAt(l + 1)) &&
          D(r.charCodeAt(l + 2)) &&
          D(r.charCodeAt(l + 3)) &&
          !D(r.charCodeAt(l + 4));

        ) {
          if (a > 2)
            return i(
              l,
              3,
              "Too many extended language subtags, expected at most 3 subtags",
            );
          t.extendedLanguageSubtags.push(s.slice(l + 1, l + 4)), (l += 4), a++;
        }
      }
      for (
        r.charCodeAt(l) === 45 &&
          D(r.charCodeAt(l + 1)) &&
          D(r.charCodeAt(l + 2)) &&
          D(r.charCodeAt(l + 3)) &&
          D(r.charCodeAt(l + 4)) &&
          !D(r.charCodeAt(l + 5)) &&
          ((t.script = s.slice(l + 1, l + 5)), (l += 5)),
          r.charCodeAt(l) === 45 &&
            (D(r.charCodeAt(l + 1)) &&
            D(r.charCodeAt(l + 2)) &&
            !D(r.charCodeAt(l + 3))
              ? ((t.region = s.slice(l + 1, l + 3)), (l += 3))
              : $(r.charCodeAt(l + 1)) &&
                $(r.charCodeAt(l + 2)) &&
                $(r.charCodeAt(l + 3)) &&
                !$(r.charCodeAt(l + 4)) &&
                ((t.region = s.slice(l + 1, l + 4)), (l += 4)));
        r.charCodeAt(l) === 45;

      ) {
        let a = l + 1,
          o = a;
        for (; Y(r.charCodeAt(o)); ) {
          if (o - a > 7)
            return i(o, 1, "Too long variant, expected at most 8 characters");
          o++;
        }
        if (o - a > 4 || (o - a > 3 && $(r.charCodeAt(a))))
          t.variants.push(s.slice(a, o)), (l = o);
        else break;
      }
      for (
        ;
        r.charCodeAt(l) === 45 &&
        !(
          r.charCodeAt(l + 1) === 120 ||
          !Y(r.charCodeAt(l + 1)) ||
          r.charCodeAt(l + 2) !== 45 ||
          !Y(r.charCodeAt(l + 3))
        );

      ) {
        let a = l + 2,
          o = 0;
        for (
          ;
          r.charCodeAt(a) === 45 &&
          Y(r.charCodeAt(a + 1)) &&
          Y(r.charCodeAt(a + 2));

        ) {
          let h = a + 1;
          for (a = h + 2, o++; Y(r.charCodeAt(a)); ) {
            if (a - h > 7)
              return i(
                a,
                2,
                "Too long extension, expected at most 8 characters",
              );
            a++;
          }
        }
        if (!o)
          return i(
            a,
            4,
            "Empty extension, extensions must have at least 2 characters of content",
          );
        t.extensions.push({
          singleton: s.charAt(l + 1),
          extensions: s.slice(l + 3, a).split("-"),
        }),
          (l = a);
      }
    } else l = 0;
    if (
      (l === 0 && r.charCodeAt(l) === 120) ||
      (r.charCodeAt(l) === 45 && r.charCodeAt(l + 1) === 120)
    ) {
      l = l ? l + 2 : 1;
      let a = l;
      for (; r.charCodeAt(a) === 45 && Y(r.charCodeAt(a + 1)); ) {
        let o = l + 1;
        for (a = o; Y(r.charCodeAt(a)); ) {
          if (a - o > 7)
            return i(
              a,
              5,
              "Too long private-use area, expected at most 8 characters",
            );
          a++;
        }
        t.privateuse.push(s.slice(l + 1, a)), (l = a);
      }
    }
    if (l !== s.length) return i(l, 6, "Found superfluous content after tag");
    return t;
    function i(a, o, h) {
      return e.warning && e.warning(h, o, a), e.forgiving ? t : un();
    }
  }
  function un() {
    return {
      language: null,
      extendedLanguageSubtags: [],
      script: null,
      region: null,
      variants: [],
      extensions: [],
      privateuse: [],
      irregular: null,
      regular: null,
    };
  }
  function cn(n, e, t) {
    let s = n.slice();
    return (s[8] = e[t][0]), (s[9] = e[t][1]), s;
  }
  function bs(n) {
    let e,
      t,
      s,
      r,
      l,
      i = n[0] && _n(n);
    return {
      c() {
        i && i.c(),
          (e = M()),
          (t = k("div")),
          (s = k("p")),
          (s.textContent = `${n[3](30)}`),
          (r = M()),
          (l = k("p")),
          (l.textContent = `${n[3](40)}`),
          p(
            s,
            "class",
            "pagefind-ui__result-title pagefind-ui__loading svelte-j9e30",
          ),
          p(
            l,
            "class",
            "pagefind-ui__result-excerpt pagefind-ui__loading svelte-j9e30",
          ),
          p(t, "class", "pagefind-ui__result-inner svelte-j9e30");
      },
      m(a, o) {
        i && i.m(a, o), y(a, e, o), y(a, t, o), b(t, s), b(t, r), b(t, l);
      },
      p(a, o) {
        a[0]
          ? i || ((i = _n(a)), i.c(), i.m(e.parentNode, e))
          : i && (i.d(1), (i = null));
      },
      d(a) {
        i && i.d(a), a && C(e), a && C(t);
      },
    };
  }
  function Rs(n) {
    let e,
      t,
      s,
      r,
      l = n[1].meta?.title + "",
      i,
      a,
      o,
      h,
      _ = n[1].excerpt + "",
      f,
      c = n[0] && fn(n),
      E = n[2].length && hn(n);
    return {
      c() {
        c && c.c(),
          (e = M()),
          (t = k("div")),
          (s = k("p")),
          (r = k("a")),
          (i = A(l)),
          (o = M()),
          (h = k("p")),
          (f = M()),
          E && E.c(),
          p(r, "class", "pagefind-ui__result-link svelte-j9e30"),
          p(r, "href", (a = n[1].meta?.url || n[1].url)),
          p(s, "class", "pagefind-ui__result-title svelte-j9e30"),
          p(h, "class", "pagefind-ui__result-excerpt svelte-j9e30"),
          p(t, "class", "pagefind-ui__result-inner svelte-j9e30");
      },
      m(u, m) {
        c && c.m(u, m),
          y(u, e, m),
          y(u, t, m),
          b(t, s),
          b(s, r),
          b(r, i),
          b(t, o),
          b(t, h),
          (h.innerHTML = _),
          b(t, f),
          E && E.m(t, null);
      },
      p(u, m) {
        u[0]
          ? c
            ? c.p(u, m)
            : ((c = fn(u)), c.c(), c.m(e.parentNode, e))
          : c && (c.d(1), (c = null)),
          m & 2 && l !== (l = u[1].meta?.title + "") && N(i, l),
          m & 2 && a !== (a = u[1].meta?.url || u[1].url) && p(r, "href", a),
          m & 2 && _ !== (_ = u[1].excerpt + "") && (h.innerHTML = _),
          u[2].length
            ? E
              ? E.p(u, m)
              : ((E = hn(u)), E.c(), E.m(t, null))
            : E && (E.d(1), (E = null));
      },
      d(u) {
        c && c.d(u), u && C(e), u && C(t), E && E.d();
      },
    };
  }
  function _n(n) {
    let e;
    return {
      c() {
        (e = k("div")),
          p(
            e,
            "class",
            "pagefind-ui__result-thumb pagefind-ui__loading svelte-j9e30",
          );
      },
      m(t, s) {
        y(t, e, s);
      },
      d(t) {
        t && C(e);
      },
    };
  }
  function fn(n) {
    let e,
      t = n[1].meta.image && dn(n);
    return {
      c() {
        (e = k("div")),
          t && t.c(),
          p(e, "class", "pagefind-ui__result-thumb svelte-j9e30");
      },
      m(s, r) {
        y(s, e, r), t && t.m(e, null);
      },
      p(s, r) {
        s[1].meta.image
          ? t
            ? t.p(s, r)
            : ((t = dn(s)), t.c(), t.m(e, null))
          : t && (t.d(1), (t = null));
      },
      d(s) {
        s && C(e), t && t.d();
      },
    };
  }
  function dn(n) {
    let e, t, s;
    return {
      c() {
        (e = k("img")),
          p(e, "class", "pagefind-ui__result-image svelte-j9e30"),
          le(e.src, (t = n[1].meta?.image)) || p(e, "src", t),
          p(e, "alt", (s = n[1].meta?.image_alt || n[1].meta?.title));
      },
      m(r, l) {
        y(r, e, l);
      },
      p(r, l) {
        l & 2 && !le(e.src, (t = r[1].meta?.image)) && p(e, "src", t),
          l & 2 &&
            s !== (s = r[1].meta?.image_alt || r[1].meta?.title) &&
            p(e, "alt", s);
      },
      d(r) {
        r && C(e);
      },
    };
  }
  function hn(n) {
    let e,
      t = n[2],
      s = [];
    for (let r = 0; r < t.length; r += 1) s[r] = mn(cn(n, t, r));
    return {
      c() {
        e = k("ul");
        for (let r = 0; r < s.length; r += 1) s[r].c();
        p(e, "class", "pagefind-ui__result-tags svelte-j9e30");
      },
      m(r, l) {
        y(r, e, l);
        for (let i = 0; i < s.length; i += 1) s[i] && s[i].m(e, null);
      },
      p(r, l) {
        if (l & 4) {
          t = r[2];
          let i;
          for (i = 0; i < t.length; i += 1) {
            let a = cn(r, t, i);
            s[i] ? s[i].p(a, l) : ((s[i] = mn(a)), s[i].c(), s[i].m(e, null));
          }
          for (; i < s.length; i += 1) s[i].d(1);
          s.length = t.length;
        }
      },
      d(r) {
        r && C(e), Q(s, r);
      },
    };
  }
  function mn(n) {
    let e,
      t = n[8].replace(/^(\w)/, pn) + "",
      s,
      r,
      l = n[9] + "",
      i,
      a;
    return {
      c() {
        (e = k("li")),
          (s = A(t)),
          (r = A(": ")),
          (i = A(l)),
          (a = M()),
          p(e, "class", "pagefind-ui__result-tag svelte-j9e30");
      },
      m(o, h) {
        y(o, e, h), b(e, s), b(e, r), b(e, i), b(e, a);
      },
      p(o, h) {
        h & 4 && t !== (t = o[8].replace(/^(\w)/, pn) + "") && N(s, t),
          h & 4 && l !== (l = o[9] + "") && N(i, l);
      },
      d(o) {
        o && C(e);
      },
    };
  }
  function Ts(n) {
    let e;
    function t(l, i) {
      return l[1] ? Rs : bs;
    }
    let s = t(n, -1),
      r = s(n);
    return {
      c() {
        (e = k("li")), r.c(), p(e, "class", "pagefind-ui__result svelte-j9e30");
      },
      m(l, i) {
        y(l, e, i), r.m(e, null);
      },
      p(l, [i]) {
        s === (s = t(l, i)) && r
          ? r.p(l, i)
          : (r.d(1), (r = s(l)), r && (r.c(), r.m(e, null)));
      },
      i: j,
      o: j,
      d(l) {
        l && C(e), r.d();
      },
    };
  }
  var pn = (n) => n.toLocaleUpperCase();
  function ks(n, e, t) {
    let { show_images: s = !0 } = e,
      { process_result: r = null } = e,
      { result: l = { data: async () => {} } } = e,
      i = ["title", "image", "image_alt", "url"],
      a,
      o = [],
      h = async (f) => {
        t(1, (a = await f.data())),
          t(1, (a = r?.(a) ?? a)),
          t(2, (o = Object.entries(a.meta).filter(([c]) => !i.includes(c))));
      },
      _ = (f = 30) => ". ".repeat(Math.floor(10 + Math.random() * f));
    return (
      (n.$$set = (f) => {
        "show_images" in f && t(0, (s = f.show_images)),
          "process_result" in f && t(4, (r = f.process_result)),
          "result" in f && t(5, (l = f.result));
      }),
      (n.$$.update = () => {
        if (n.$$.dirty & 32) e: h(l);
      }),
      [s, a, o, _, r, l]
    );
  }
  var ct = class extends q {
      constructor(e) {
        super(),
          J(this, e, ks, Ts, G, {
            show_images: 0,
            process_result: 4,
            result: 5,
          });
      }
    },
    gn = ct;
  function En(n, e, t) {
    let s = n.slice();
    return (s[11] = e[t][0]), (s[12] = e[t][1]), s;
  }
  function bn(n, e, t) {
    let s = n.slice();
    return (s[15] = e[t]), s;
  }
  function Cs(n) {
    let e,
      t,
      s,
      r,
      l,
      i = n[0] && Rn(n);
    return {
      c() {
        i && i.c(),
          (e = M()),
          (t = k("div")),
          (s = k("p")),
          (s.textContent = `${n[5](30)}`),
          (r = M()),
          (l = k("p")),
          (l.textContent = `${n[5](40)}`),
          p(
            s,
            "class",
            "pagefind-ui__result-title pagefind-ui__loading svelte-4xnkmf",
          ),
          p(
            l,
            "class",
            "pagefind-ui__result-excerpt pagefind-ui__loading svelte-4xnkmf",
          ),
          p(t, "class", "pagefind-ui__result-inner svelte-4xnkmf");
      },
      m(a, o) {
        i && i.m(a, o), y(a, e, o), y(a, t, o), b(t, s), b(t, r), b(t, l);
      },
      p(a, o) {
        a[0]
          ? i || ((i = Rn(a)), i.c(), i.m(e.parentNode, e))
          : i && (i.d(1), (i = null));
      },
      d(a) {
        i && i.d(a), a && C(e), a && C(t);
      },
    };
  }
  function ys(n) {
    let e,
      t,
      s,
      r,
      l = n[1].meta?.title + "",
      i,
      a,
      o,
      h,
      _,
      f = n[0] && Tn(n),
      c = n[4] && Cn(n),
      E = n[3],
      u = [];
    for (let d = 0; d < E.length; d += 1) u[d] = yn(bn(n, E, d));
    let m = n[2].length && Sn(n);
    return {
      c() {
        f && f.c(),
          (e = M()),
          (t = k("div")),
          (s = k("p")),
          (r = k("a")),
          (i = A(l)),
          (o = M()),
          c && c.c(),
          (h = M());
        for (let d = 0; d < u.length; d += 1) u[d].c();
        (_ = M()),
          m && m.c(),
          p(r, "class", "pagefind-ui__result-link svelte-4xnkmf"),
          p(r, "href", (a = n[1].meta?.url || n[1].url)),
          p(s, "class", "pagefind-ui__result-title svelte-4xnkmf"),
          p(t, "class", "pagefind-ui__result-inner svelte-4xnkmf");
      },
      m(d, R) {
        f && f.m(d, R),
          y(d, e, R),
          y(d, t, R),
          b(t, s),
          b(s, r),
          b(r, i),
          b(t, o),
          c && c.m(t, null),
          b(t, h);
        for (let T = 0; T < u.length; T += 1) u[T] && u[T].m(t, null);
        b(t, _), m && m.m(t, null);
      },
      p(d, R) {
        if (
          (d[0]
            ? f
              ? f.p(d, R)
              : ((f = Tn(d)), f.c(), f.m(e.parentNode, e))
            : f && (f.d(1), (f = null)),
          R & 2 && l !== (l = d[1].meta?.title + "") && N(i, l),
          R & 2 && a !== (a = d[1].meta?.url || d[1].url) && p(r, "href", a),
          d[4]
            ? c
              ? c.p(d, R)
              : ((c = Cn(d)), c.c(), c.m(t, h))
            : c && (c.d(1), (c = null)),
          R & 8)
        ) {
          E = d[3];
          let T;
          for (T = 0; T < E.length; T += 1) {
            let S = bn(d, E, T);
            u[T] ? u[T].p(S, R) : ((u[T] = yn(S)), u[T].c(), u[T].m(t, _));
          }
          for (; T < u.length; T += 1) u[T].d(1);
          u.length = E.length;
        }
        d[2].length
          ? m
            ? m.p(d, R)
            : ((m = Sn(d)), m.c(), m.m(t, null))
          : m && (m.d(1), (m = null));
      },
      d(d) {
        f && f.d(d), d && C(e), d && C(t), c && c.d(), Q(u, d), m && m.d();
      },
    };
  }
  function Rn(n) {
    let e;
    return {
      c() {
        (e = k("div")),
          p(
            e,
            "class",
            "pagefind-ui__result-thumb pagefind-ui__loading svelte-4xnkmf",
          );
      },
      m(t, s) {
        y(t, e, s);
      },
      d(t) {
        t && C(e);
      },
    };
  }
  function Tn(n) {
    let e,
      t = n[1].meta.image && kn(n);
    return {
      c() {
        (e = k("div")),
          t && t.c(),
          p(e, "class", "pagefind-ui__result-thumb svelte-4xnkmf");
      },
      m(s, r) {
        y(s, e, r), t && t.m(e, null);
      },
      p(s, r) {
        s[1].meta.image
          ? t
            ? t.p(s, r)
            : ((t = kn(s)), t.c(), t.m(e, null))
          : t && (t.d(1), (t = null));
      },
      d(s) {
        s && C(e), t && t.d();
      },
    };
  }
  function kn(n) {
    let e, t, s;
    return {
      c() {
        (e = k("img")),
          p(e, "class", "pagefind-ui__result-image svelte-4xnkmf"),
          le(e.src, (t = n[1].meta?.image)) || p(e, "src", t),
          p(e, "alt", (s = n[1].meta?.image_alt || n[1].meta?.title));
      },
      m(r, l) {
        y(r, e, l);
      },
      p(r, l) {
        l & 2 && !le(e.src, (t = r[1].meta?.image)) && p(e, "src", t),
          l & 2 &&
            s !== (s = r[1].meta?.image_alt || r[1].meta?.title) &&
            p(e, "alt", s);
      },
      d(r) {
        r && C(e);
      },
    };
  }
  function Cn(n) {
    let e,
      t = n[1].excerpt + "";
    return {
      c() {
        (e = k("p")),
          p(e, "class", "pagefind-ui__result-excerpt svelte-4xnkmf");
      },
      m(s, r) {
        y(s, e, r), (e.innerHTML = t);
      },
      p(s, r) {
        r & 2 && t !== (t = s[1].excerpt + "") && (e.innerHTML = t);
      },
      d(s) {
        s && C(e);
      },
    };
  }
  function yn(n) {
    let e,
      t,
      s,
      r = n[15].title + "",
      l,
      i,
      a,
      o,
      h = n[15].excerpt + "";
    return {
      c() {
        (e = k("div")),
          (t = k("p")),
          (s = k("a")),
          (l = A(r)),
          (a = M()),
          (o = k("p")),
          p(s, "class", "pagefind-ui__result-link svelte-4xnkmf"),
          p(s, "href", (i = n[15].url)),
          p(t, "class", "pagefind-ui__result-title svelte-4xnkmf"),
          p(o, "class", "pagefind-ui__result-excerpt svelte-4xnkmf"),
          p(e, "class", "pagefind-ui__result-nested svelte-4xnkmf");
      },
      m(_, f) {
        y(_, e, f),
          b(e, t),
          b(t, s),
          b(s, l),
          b(e, a),
          b(e, o),
          (o.innerHTML = h);
      },
      p(_, f) {
        f & 8 && r !== (r = _[15].title + "") && N(l, r),
          f & 8 && i !== (i = _[15].url) && p(s, "href", i),
          f & 8 && h !== (h = _[15].excerpt + "") && (o.innerHTML = h);
      },
      d(_) {
        _ && C(e);
      },
    };
  }
  function Sn(n) {
    let e,
      t = n[2],
      s = [];
    for (let r = 0; r < t.length; r += 1) s[r] = vn(En(n, t, r));
    return {
      c() {
        e = k("ul");
        for (let r = 0; r < s.length; r += 1) s[r].c();
        p(e, "class", "pagefind-ui__result-tags svelte-4xnkmf");
      },
      m(r, l) {
        y(r, e, l);
        for (let i = 0; i < s.length; i += 1) s[i] && s[i].m(e, null);
      },
      p(r, l) {
        if (l & 4) {
          t = r[2];
          let i;
          for (i = 0; i < t.length; i += 1) {
            let a = En(r, t, i);
            s[i] ? s[i].p(a, l) : ((s[i] = vn(a)), s[i].c(), s[i].m(e, null));
          }
          for (; i < s.length; i += 1) s[i].d(1);
          s.length = t.length;
        }
      },
      d(r) {
        r && C(e), Q(s, r);
      },
    };
  }
  function vn(n) {
    let e,
      t = n[11].replace(/^(\w)/, Mn) + "",
      s,
      r,
      l = n[12] + "",
      i,
      a;
    return {
      c() {
        (e = k("li")),
          (s = A(t)),
          (r = A(": ")),
          (i = A(l)),
          (a = M()),
          p(e, "class", "pagefind-ui__result-tag svelte-4xnkmf");
      },
      m(o, h) {
        y(o, e, h), b(e, s), b(e, r), b(e, i), b(e, a);
      },
      p(o, h) {
        h & 4 && t !== (t = o[11].replace(/^(\w)/, Mn) + "") && N(s, t),
          h & 4 && l !== (l = o[12] + "") && N(i, l);
      },
      d(o) {
        o && C(e);
      },
    };
  }
  function Ss(n) {
    let e;
    function t(l, i) {
      return l[1] ? ys : Cs;
    }
    let s = t(n, -1),
      r = s(n);
    return {
      c() {
        (e = k("li")),
          r.c(),
          p(e, "class", "pagefind-ui__result svelte-4xnkmf");
      },
      m(l, i) {
        y(l, e, i), r.m(e, null);
      },
      p(l, [i]) {
        s === (s = t(l, i)) && r
          ? r.p(l, i)
          : (r.d(1), (r = s(l)), r && (r.c(), r.m(e, null)));
      },
      i: j,
      o: j,
      d(l) {
        l && C(e), r.d();
      },
    };
  }
  var Mn = (n) => n.toLocaleUpperCase();
  function vs(n, e, t) {
    let { show_images: s = !0 } = e,
      { process_result: r = null } = e,
      { result: l = { data: async () => {} } } = e,
      i = ["title", "image", "image_alt", "url"],
      a,
      o = [],
      h = [],
      _ = !1,
      f = (u, m) => {
        if (u.length <= m) return u;
        let d = [...u]
          .sort((R, T) => T.locations.length - R.locations.length)
          .slice(0, 3)
          .map((R) => R.url);
        return u.filter((R) => d.includes(R.url));
      },
      c = async (u) => {
        t(1, (a = await u.data())),
          t(1, (a = r?.(a) ?? a)),
          t(2, (o = Object.entries(a.meta).filter(([m]) => !i.includes(m)))),
          Array.isArray(a.sub_results) &&
            (t(4, (_ = a.sub_results?.[0]?.url === (a.meta?.url || a.url))),
            _
              ? t(3, (h = f(a.sub_results.slice(1), 3)))
              : t(3, (h = f([...a.sub_results], 3))));
      },
      E = (u = 30) => ". ".repeat(Math.floor(10 + Math.random() * u));
    return (
      (n.$$set = (u) => {
        "show_images" in u && t(0, (s = u.show_images)),
          "process_result" in u && t(6, (r = u.process_result)),
          "result" in u && t(7, (l = u.result));
      }),
      (n.$$.update = () => {
        if (n.$$.dirty & 128) e: c(l);
      }),
      [s, a, o, h, _, E, r, l]
    );
  }
  var _t = class extends q {
      constructor(e) {
        super(),
          J(this, e, vs, Ss, G, {
            show_images: 0,
            process_result: 6,
            result: 7,
          });
      }
    },
    An = _t;
  function wn(n, e, t) {
    let s = n.slice();
    return (s[9] = e[t][0]), (s[10] = e[t][1]), (s[11] = e), (s[12] = t), s;
  }
  function Fn(n, e, t) {
    let s = n.slice();
    return (s[13] = e[t][0]), (s[14] = e[t][1]), (s[15] = e), (s[16] = t), s;
  }
  function Hn(n) {
    let e,
      t,
      s = n[3]("filters_label", n[4], n[5]) + "",
      r,
      l,
      i = Object.entries(n[1]),
      a = [];
    for (let o = 0; o < i.length; o += 1) a[o] = jn(wn(n, i, o));
    return {
      c() {
        (e = k("fieldset")), (t = k("legend")), (r = A(s)), (l = M());
        for (let o = 0; o < a.length; o += 1) a[o].c();
        p(t, "class", "pagefind-ui__filter-panel-label svelte-1v2r7ls"),
          p(e, "class", "pagefind-ui__filter-panel svelte-1v2r7ls");
      },
      m(o, h) {
        y(o, e, h), b(e, t), b(t, r), b(e, l);
        for (let _ = 0; _ < a.length; _ += 1) a[_] && a[_].m(e, null);
      },
      p(o, h) {
        if (
          (h & 56 &&
            s !== (s = o[3]("filters_label", o[4], o[5]) + "") &&
            N(r, s),
          h & 71)
        ) {
          i = Object.entries(o[1]);
          let _;
          for (_ = 0; _ < i.length; _ += 1) {
            let f = wn(o, i, _);
            a[_] ? a[_].p(f, h) : ((a[_] = jn(f)), a[_].c(), a[_].m(e, null));
          }
          for (; _ < a.length; _ += 1) a[_].d(1);
          a.length = i.length;
        }
      },
      d(o) {
        o && C(e), Q(a, o);
      },
    };
  }
  function Nn(n) {
    let e,
      t,
      s,
      r,
      l,
      i,
      a,
      o,
      h = n[13] + "",
      _,
      f = n[14] + "",
      c,
      E,
      u,
      m,
      d,
      R;
    function T() {
      n[8].call(t, n[9], n[13]);
    }
    return {
      c() {
        (e = k("div")),
          (t = k("input")),
          (i = M()),
          (a = k("label")),
          (o = new Xe(!1)),
          (_ = A(" (")),
          (c = A(f)),
          (E = A(")")),
          (m = M()),
          p(t, "class", "pagefind-ui__filter-checkbox svelte-1v2r7ls"),
          p(t, "type", "checkbox"),
          p(t, "id", (s = n[9] + "-" + n[13])),
          p(t, "name", (r = n[9])),
          (t.__value = l = n[13]),
          (t.value = t.__value),
          (o.a = _),
          p(a, "class", "pagefind-ui__filter-label svelte-1v2r7ls"),
          p(a, "for", (u = n[9] + "-" + n[13])),
          p(e, "class", "pagefind-ui__filter-value svelte-1v2r7ls"),
          W(e, "pagefind-ui__filter-value--checked", n[0][`${n[9]}:${n[13]}`]);
      },
      m(S, w) {
        y(S, e, w),
          b(e, t),
          (t.checked = n[0][`${n[9]}:${n[13]}`]),
          b(e, i),
          b(e, a),
          o.m(h, a),
          b(a, _),
          b(a, c),
          b(a, E),
          b(e, m),
          d || ((R = K(t, "change", T)), (d = !0));
      },
      p(S, w) {
        (n = S),
          w & 2 && s !== (s = n[9] + "-" + n[13]) && p(t, "id", s),
          w & 2 && r !== (r = n[9]) && p(t, "name", r),
          w & 2 &&
            l !== (l = n[13]) &&
            ((t.__value = l), (t.value = t.__value)),
          w & 3 && (t.checked = n[0][`${n[9]}:${n[13]}`]),
          w & 2 && h !== (h = n[13] + "") && o.p(h),
          w & 2 && f !== (f = n[14] + "") && N(c, f),
          w & 2 && u !== (u = n[9] + "-" + n[13]) && p(a, "for", u),
          w & 3 &&
            W(
              e,
              "pagefind-ui__filter-value--checked",
              n[0][`${n[9]}:${n[13]}`],
            );
      },
      d(S) {
        S && C(e), (d = !1), R();
      },
    };
  }
  function On(n) {
    let e,
      t = (n[2] || n[14] || n[0][`${n[9]}:${n[13]}`]) && Nn(n);
    return {
      c() {
        t && t.c(), (e = x());
      },
      m(s, r) {
        t && t.m(s, r), y(s, e, r);
      },
      p(s, r) {
        s[2] || s[14] || s[0][`${s[9]}:${s[13]}`]
          ? t
            ? t.p(s, r)
            : ((t = Nn(s)), t.c(), t.m(e.parentNode, e))
          : t && (t.d(1), (t = null));
      },
      d(s) {
        t && t.d(s), s && C(e);
      },
    };
  }
  function jn(n) {
    let e,
      t,
      s = n[9].replace(/^(\w)/, zn) + "",
      r,
      l,
      i,
      a = n[9] + "",
      o,
      h,
      _ = Object.entries(n[10] || {}),
      f = [];
    for (let c = 0; c < _.length; c += 1) f[c] = On(Fn(n, _, c));
    return {
      c() {
        (e = k("details")),
          (t = k("summary")),
          (r = M()),
          (l = k("fieldset")),
          (i = k("legend")),
          (o = M());
        for (let c = 0; c < f.length; c += 1) f[c].c();
        (h = M()),
          p(t, "class", "pagefind-ui__filter-name svelte-1v2r7ls"),
          p(i, "class", "pagefind-ui__filter-group-label svelte-1v2r7ls"),
          p(l, "class", "pagefind-ui__filter-group svelte-1v2r7ls"),
          p(e, "class", "pagefind-ui__filter-block svelte-1v2r7ls"),
          (e.open = n[6]);
      },
      m(c, E) {
        y(c, e, E),
          b(e, t),
          (t.innerHTML = s),
          b(e, r),
          b(e, l),
          b(l, i),
          (i.innerHTML = a),
          b(l, o);
        for (let u = 0; u < f.length; u += 1) f[u] && f[u].m(l, null);
        b(e, h);
      },
      p(c, E) {
        if (
          (E & 2 &&
            s !== (s = c[9].replace(/^(\w)/, zn) + "") &&
            (t.innerHTML = s),
          E & 2 && a !== (a = c[9] + "") && (i.innerHTML = a),
          E & 7)
        ) {
          _ = Object.entries(c[10] || {});
          let u;
          for (u = 0; u < _.length; u += 1) {
            let m = Fn(c, _, u);
            f[u] ? f[u].p(m, E) : ((f[u] = On(m)), f[u].c(), f[u].m(l, null));
          }
          for (; u < f.length; u += 1) f[u].d(1);
          f.length = _.length;
        }
        E & 64 && (e.open = c[6]);
      },
      d(c) {
        c && C(e), Q(f, c);
      },
    };
  }
  function Ms(n) {
    let e = n[1] && Object.entries(n[1]).length,
      t,
      s = e && Hn(n);
    return {
      c() {
        s && s.c(), (t = x());
      },
      m(r, l) {
        s && s.m(r, l), y(r, t, l);
      },
      p(r, [l]) {
        l & 2 && (e = r[1] && Object.entries(r[1]).length),
          e
            ? s
              ? s.p(r, l)
              : ((s = Hn(r)), s.c(), s.m(t.parentNode, t))
            : s && (s.d(1), (s = null));
      },
      i: j,
      o: j,
      d(r) {
        s && s.d(r), r && C(t);
      },
    };
  }
  var zn = (n) => n.toLocaleUpperCase();
  function As(n, e, t) {
    let { available_filters: s = null } = e,
      { show_empty_filters: r = !0 } = e,
      { translate: l = () => "" } = e,
      { automatic_translations: i = {} } = e,
      { translations: a = {} } = e,
      o = {},
      h = !1,
      _ = !1;
    function f(c, E) {
      (o[`${c}:${E}`] = this.checked), t(0, o);
    }
    return (
      (n.$$set = (c) => {
        "available_filters" in c && t(1, (s = c.available_filters)),
          "show_empty_filters" in c && t(2, (r = c.show_empty_filters)),
          "translate" in c && t(3, (l = c.translate)),
          "automatic_translations" in c && t(4, (i = c.automatic_translations)),
          "translations" in c && t(5, (a = c.translations));
      }),
      (n.$$.update = () => {
        if (n.$$.dirty & 130) {
          e: if (s && !h) {
            t(7, (h = !0));
            let c = Object.entries(s || {});
            c.length === 1 &&
              Object.entries(c[0][1])?.length <= 6 &&
              t(6, (_ = !0));
          }
        }
      }),
      [o, s, r, l, i, a, _, h, f]
    );
  }
  var ft = class extends q {
      constructor(e) {
        super(),
          J(this, e, As, Ms, G, {
            available_filters: 1,
            show_empty_filters: 2,
            translate: 3,
            automatic_translations: 4,
            translations: 5,
            selected_filters: 0,
          });
      }
      get selected_filters() {
        return this.$$.ctx[0];
      }
    },
    Dn = ft;
  var dt = {};
  v(dt, {
    comments: () => Fs,
    default: () => Os,
    direction: () => Hs,
    strings: () => Ns,
    thanks_to: () => ws,
  });
  var ws = "Jan Claasen <jan@cloudcannon.com>",
    Fs = "",
    Hs = "ltr",
    Ns = {
      placeholder: "Soek",
      clear_search: "Opruim",
      load_more: "Laai nog resultate",
      search_label: "Soek hierdie webwerf",
      filters_label: "Filters",
      zero_results: "Geen resultate vir [SEARCH_TERM]",
      many_results: "[COUNT] resultate vir [SEARCH_TERM]",
      one_result: "[COUNT] resultate vir [SEARCH_TERM]",
      alt_search:
        "Geen resultate vir [SEARCH_TERM]. Toon resultate vir [DIFFERENT_TERM] in plaas daarvan",
      search_suggestion:
        "Geen resultate vir [SEARCH_TERM]. Probeer eerder een van die volgende terme:",
      searching: "Soek vir [SEARCH_TERM]",
    },
    Os = { thanks_to: ws, comments: Fs, direction: Hs, strings: Ns };
  var ht = {};
  v(ht, {
    comments: () => zs,
    default: () => Is,
    direction: () => Ds,
    strings: () => Us,
    thanks_to: () => js,
  });
  var js = "Maruf Alom <mail@marufalom.com>",
    zs = "",
    Ds = "ltr",
    Us = {
      placeholder:
        "\u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8",
      clear_search: "\u09AE\u09C1\u099B\u09C7 \u09AB\u09C7\u09B2\u09C1\u09A8",
      load_more:
        "\u0986\u09B0\u09CB \u09AB\u09B2\u09BE\u09AB\u09B2 \u09A6\u09C7\u0996\u09C1\u09A8",
      search_label:
        "\u098F\u0987 \u0993\u09DF\u09C7\u09AC\u09B8\u09BE\u0987\u099F\u09C7 \u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u0995\u09B0\u09C1\u09A8",
      filters_label: "\u09AB\u09BF\u09B2\u09CD\u099F\u09BE\u09B0",
      zero_results:
        "[SEARCH_TERM] \u098F\u09B0 \u099C\u09A8\u09CD\u09AF \u0995\u09BF\u099B\u09C1 \u0996\u09C1\u0981\u099C\u09C7 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF",
      many_results:
        "[COUNT]-\u099F\u09BF \u09AB\u09B2\u09BE\u09AB\u09B2 \u09AA\u09BE\u0993\u09DF\u09BE \u0997\u09BF\u09DF\u09C7\u099B\u09C7 [SEARCH_TERM] \u098F\u09B0 \u099C\u09A8\u09CD\u09AF",
      one_result:
        "[COUNT]-\u099F\u09BF \u09AB\u09B2\u09BE\u09AB\u09B2 \u09AA\u09BE\u0993\u09DF\u09BE \u0997\u09BF\u09DF\u09C7\u099B\u09C7 [SEARCH_TERM] \u098F\u09B0 \u099C\u09A8\u09CD\u09AF",
      alt_search:
        "\u0995\u09CB\u09A8 \u0995\u09BF\u099B\u09C1 \u0996\u09C1\u0981\u099C\u09C7 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF [SEARCH_TERM] \u098F\u09B0 \u099C\u09A8\u09CD\u09AF. \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09C7 [DIFFERENT_TERM] \u098F\u09B0 \u099C\u09A8\u09CD\u09AF \u09A6\u09C7\u0996\u09BE\u09A8\u09CB \u09B9\u099A\u09CD\u099B\u09C7",
      search_suggestion:
        "\u0995\u09CB\u09A8 \u0995\u09BF\u099B\u09C1 \u0996\u09C1\u0981\u099C\u09C7 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF [SEARCH_TERM] \u098F\u09B0 \u09AC\u09BF\u09B7\u09DF\u09C7. \u09A8\u09BF\u09A8\u09CD\u09AE\u09C7\u09B0 \u09AC\u09BF\u09B7\u09DF\u09AC\u09B8\u09CD\u09A4\u09C1 \u0996\u09C1\u0981\u099C\u09C7 \u09A6\u09C7\u0996\u09C1\u09A8:",
      searching:
        "\u0985\u09A8\u09C1\u09B8\u09A8\u09CD\u09A7\u09BE\u09A8 \u099A\u09B2\u099B\u09C7 [SEARCH_TERM]...",
    },
    Is = { thanks_to: js, comments: zs, direction: Ds, strings: Us };
  var mt = {};
  v(mt, {
    comments: () => Ls,
    default: () => Ws,
    direction: () => qs,
    strings: () => Bs,
    thanks_to: () => Ps,
  });
  var Ps = "Pablo Villaverde <https://github.com/pvillaverde>",
    Ls = "",
    qs = "ltr",
    Bs = {
      placeholder: "Cerca",
      clear_search: "Netejar",
      load_more: "Veure m\xE9es resultats",
      search_label: "Cerca en aquest lloc",
      filters_label: "Filtres",
      zero_results: "No es van trobar resultats per [SEARCH_TERM]",
      many_results: "[COUNT] resultats trobats per [SEARCH_TERM]",
      one_result: "[COUNT] resultat trobat per [SEARCH_TERM]",
      alt_search:
        "No es van trobar resultats per [SEARCH_TERM]. Mostrant al seu lloc resultats per [DIFFERENT_TERM]",
      search_suggestion:
        "No es van trobar resultats per [SEARCH_TERM]. Proveu una de les cerques seg\xFCents:",
      searching: "Cercant [SEARCH_TERM]...",
    },
    Ws = { thanks_to: Ps, comments: Ls, direction: qs, strings: Bs };
  var pt = {};
  v(pt, {
    comments: () => Gs,
    default: () => Ys,
    direction: () => Ks,
    strings: () => Js,
    thanks_to: () => Vs,
  });
  var Vs = "Jonas Smedegaard <dr@jones.dk>",
    Gs = "",
    Ks = "ltr",
    Js = {
      placeholder: "S\xF8g",
      clear_search: "Nulstil",
      load_more: "Indl\xE6s flere resultater",
      search_label: "S\xF8g p\xE5 dette website",
      filters_label: "Filtre",
      zero_results: "Ingen resultater for [SEARCH_TERM]",
      many_results: "[COUNT] resultater for [SEARCH_TERM]",
      one_result: "[COUNT] resultat for [SEARCH_TERM]",
      alt_search:
        "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet",
      search_suggestion:
        "Ingen resultater for [SEARCH_TERM]. Pr\xF8v et af disse s\xF8geord i stedet:",
      searching: "S\xF8ger efter [SEARCH_TERM]...",
    },
    Ys = { thanks_to: Vs, comments: Gs, direction: Ks, strings: Js };
  var gt = {};
  v(gt, {
    comments: () => Zs,
    default: () => $s,
    direction: () => Qs,
    strings: () => xs,
    thanks_to: () => Xs,
  });
  var Xs = "Jan Claasen <jan@cloudcannon.com>",
    Zs = "",
    Qs = "ltr",
    xs = {
      placeholder: "Suche",
      clear_search: "L\xF6schen",
      load_more: "Mehr Ergebnisse laden",
      search_label: "Suche diese Seite",
      filters_label: "Filter",
      zero_results: "Keine Ergebnisse f\xFCr [SEARCH_TERM]",
      many_results: "[COUNT] Ergebnisse f\xFCr [SEARCH_TERM]",
      one_result: "[COUNT] Ergebnis f\xFCr [SEARCH_TERM]",
      alt_search:
        "Keine Ergebnisse f\xFCr [SEARCH_TERM]. Stattdessen werden Ergebnisse f\xFCr [DIFFERENT_TERM] angezeigt",
      search_suggestion:
        "Keine Ergebnisse f\xFCr [SEARCH_TERM]. Versuchen Sie eine der folgenden Suchen:",
      searching: "Suche f\xFCr [SEARCH_TERM]",
    },
    $s = { thanks_to: Xs, comments: Zs, direction: Qs, strings: xs };
  var Et = {};
  v(Et, {
    comments: () => tr,
    default: () => rr,
    direction: () => nr,
    strings: () => sr,
    thanks_to: () => er,
  });
  var er = "Liam Bigelow <liam@cloudcannon.com>",
    tr = "",
    nr = "ltr",
    sr = {
      placeholder: "Search",
      clear_search: "Clear",
      load_more: "Load more results",
      search_label: "Search this site",
      filters_label: "Filters",
      zero_results: "No results for [SEARCH_TERM]",
      many_results: "[COUNT] results for [SEARCH_TERM]",
      one_result: "[COUNT] result for [SEARCH_TERM]",
      alt_search:
        "No results for [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead",
      search_suggestion:
        "No results for [SEARCH_TERM]. Try one of the following searches:",
      searching: "Searching for [SEARCH_TERM]...",
    },
    rr = { thanks_to: er, comments: tr, direction: nr, strings: sr };
  var bt = {};
  v(bt, {
    comments: () => ir,
    default: () => ur,
    direction: () => ar,
    strings: () => or,
    thanks_to: () => lr,
  });
  var lr = "Pablo Villaverde <https://github.com/pvillaverde>",
    ir = "",
    ar = "ltr",
    or = {
      placeholder: "Buscar",
      clear_search: "Limpiar",
      load_more: "Ver m\xE1s resultados",
      search_label: "Buscar en este sitio",
      filters_label: "Filtros",
      zero_results: "No se encontraron resultados para [SEARCH_TERM]",
      many_results: "[COUNT] resultados encontrados para [SEARCH_TERM]",
      one_result: "[COUNT] resultado encontrado para [SEARCH_TERM]",
      alt_search:
        "No se encontraron resultados para [SEARCH_TERM]. Mostrando en su lugar resultados para [DIFFERENT_TERM]",
      search_suggestion:
        "No se encontraron resultados para [SEARCH_TERM]. Prueba una de las siguientes b\xFAsquedas:",
      searching: "Buscando [SEARCH_TERM]...",
    },
    ur = { thanks_to: lr, comments: ir, direction: ar, strings: or };
  var Rt = {};
  v(Rt, {
    comments: () => _r,
    default: () => hr,
    direction: () => fr,
    strings: () => dr,
    thanks_to: () => cr,
  });
  var cr = "Valtteri Laitinen <dev@valtlai.fi>",
    _r = "",
    fr = "ltr",
    dr = {
      placeholder: "Haku",
      clear_search: "Tyhjenn\xE4",
      load_more: "Lataa lis\xE4\xE4 tuloksia",
      search_label: "Hae t\xE4lt\xE4 sivustolta",
      filters_label: "Suodattimet",
      zero_results: "Ei tuloksia haulle [SEARCH_TERM]",
      many_results: "[COUNT] tulosta haulle [SEARCH_TERM]",
      one_result: "[COUNT] tulos haulle [SEARCH_TERM]",
      alt_search:
        "Ei tuloksia haulle [SEARCH_TERM]. N\xE4ytet\xE4\xE4n tulokset sen sijaan haulle [DIFFERENT_TERM]",
      search_suggestion:
        "Ei tuloksia haulle [SEARCH_TERM]. Kokeile jotain seuraavista:",
      searching: "Haetaan [SEARCH_TERM]...",
    },
    hr = { thanks_to: cr, comments: _r, direction: fr, strings: dr };
  var Tt = {};
  v(Tt, {
    comments: () => pr,
    default: () => br,
    direction: () => gr,
    strings: () => Er,
    thanks_to: () => mr,
  });
  var mr = "Nicolas Friedli <nicolas@theologique.ch>",
    pr = "",
    gr = "ltr",
    Er = {
      placeholder: "Rechercher",
      clear_search: "Nettoyer",
      load_more: "Charger plus de r\xE9sultats",
      search_label: "Recherche sur ce site",
      filters_label: "Filtres",
      zero_results: "Pas de r\xE9sultat pour [SEARCH_TERM]",
      many_results: "[COUNT] r\xE9sultats pour [SEARCH_TERM]",
      one_result: "[COUNT] r\xE9sultat pour [SEARCH_TERM]",
      alt_search:
        "Pas de r\xE9sultat pour [SEARCH_TERM]. Montre les r\xE9sultats pour [DIFFERENT_TERM] \xE0 la place",
      search_suggestion:
        "Pas de r\xE9sultat pour [SEARCH_TERM]. Essayer une des recherches suivantes:",
      searching: "Recherche [SEARCH_TERM]...",
    },
    br = { thanks_to: mr, comments: pr, direction: gr, strings: Er };
  var kt = {};
  v(kt, {
    comments: () => Tr,
    default: () => yr,
    direction: () => kr,
    strings: () => Cr,
    thanks_to: () => Rr,
  });
  var Rr = "Pablo Villaverde <https://github.com/pvillaverde>",
    Tr = "",
    kr = "ltr",
    Cr = {
      placeholder: "Buscar",
      clear_search: "Limpar",
      load_more: "Ver m\xE1is resultados",
      search_label: "Buscar neste sitio",
      filters_label: "Filtros",
      zero_results: "Non se atoparon resultados para [SEARCH_TERM]",
      many_results: "[COUNT] resultados atopados para [SEARCH_TERM]",
      one_result: "[COUNT] resultado atopado para [SEARCH_TERM]",
      alt_search:
        "Non se atoparon resultados para [SEARCH_TERM]. Amosando no seu lugar resultados para [DIFFERENT_TERM]",
      search_suggestion:
        "Non se atoparon resultados para [SEARCH_TERM]. Probe unha das seguintes pesquisas:",
      searching: "Buscando [SEARCH_TERM]...",
    },
    yr = { thanks_to: Rr, comments: Tr, direction: kr, strings: Cr };
  var Ct = {};
  v(Ct, {
    comments: () => vr,
    default: () => wr,
    direction: () => Mr,
    strings: () => Ar,
    thanks_to: () => Sr,
  });
  var Sr = "Amit Yadav <amit@thetechbasket.com>",
    vr = "",
    Mr = "ltr",
    Ar = {
      placeholder: "\u0916\u094B\u091C\u0947\u0902",
      clear_search: "\u0938\u093E\u092B \u0915\u0930\u0947\u0902",
      load_more:
        "\u0914\u0930 \u0905\u0927\u093F\u0915 \u092A\u0930\u093F\u0923\u093E\u092E \u0932\u094B\u0921 \u0915\u0930\u0947\u0902",
      search_label:
        "\u0907\u0938 \u0938\u093E\u0907\u091F \u092E\u0947\u0902 \u0916\u094B\u091C\u0947\u0902",
      filters_label: "\u092B\u093C\u093F\u0932\u094D\u091F\u0930",
      zero_results:
        "\u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E [SEARCH_TERM] \u0915\u0947 \u0932\u093F\u090F \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E",
      many_results:
        "[COUNT] \u092A\u0930\u093F\u0923\u093E\u092E [SEARCH_TERM] \u0915\u0947 \u0932\u093F\u090F \u092E\u093F\u0932\u0947",
      one_result:
        "[COUNT] \u092A\u0930\u093F\u0923\u093E\u092E [SEARCH_TERM] \u0915\u0947 \u0932\u093F\u090F \u092E\u093F\u0932\u093E",
      alt_search:
        "[SEARCH_TERM] \u0915\u0947 \u0932\u093F\u090F \u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E\u0964 \u0907\u0938\u0915\u0947 \u092C\u091C\u093E\u092F [DIFFERENT_TERM] \u0915\u0947 \u0932\u093F\u090F \u092A\u0930\u093F\u0923\u093E\u092E \u0926\u093F\u0916\u093E \u0930\u0939\u093E \u0939\u0948",
      search_suggestion:
        "[SEARCH_TERM] \u0915\u0947 \u0932\u093F\u090F \u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E\u0964 \u0928\u093F\u092E\u094D\u0928\u0932\u093F\u0916\u093F\u0924 \u0916\u094B\u091C\u094B\u0902 \u092E\u0947\u0902 \u0938\u0947 \u0915\u094B\u0908 \u090F\u0915 \u0906\u091C\u093C\u092E\u093E\u090F\u0902:",
      searching:
        "[SEARCH_TERM] \u0915\u0940 \u0916\u094B\u091C \u0915\u0940 \u091C\u093E \u0930\u0939\u0940 \u0939\u0948...",
    },
    wr = { thanks_to: Sr, comments: vr, direction: Mr, strings: Ar };
  var yt = {};
  v(yt, {
    comments: () => Hr,
    default: () => jr,
    direction: () => Nr,
    strings: () => Or,
    thanks_to: () => Fr,
  });
  var Fr = "Diomed <https://github.com/diomed>",
    Hr = "",
    Nr = "ltr",
    Or = {
      placeholder: "Tra\u017Ei",
      clear_search: "O\u010Disti",
      load_more: "U\u010Ditaj vi\u0161e rezultata",
      search_label: "Pretra\u017Ei ovu stranicu",
      filters_label: "Filteri",
      zero_results: "Nema rezultata za [SEARCH_TERM]",
      many_results: "[COUNT] rezultata za [SEARCH_TERM]",
      one_result: "[COUNT] rezultat za [SEARCH_TERM]",
      alt_search:
        "Nema rezultata za [SEARCH_TERM]. Prikazujem rezultate za [DIFFERENT_TERM]",
      search_suggestion:
        "Nema rezultata za [SEARCH_TERM]. Poku\u0161aj s jednom od ovih pretraga:",
      searching: "Pretra\u017Eujem [SEARCH_TERM]...",
    },
    jr = { thanks_to: Fr, comments: Hr, direction: Nr, strings: Or };
  var St = {};
  v(St, {
    comments: () => Dr,
    default: () => Pr,
    direction: () => Ur,
    strings: () => Ir,
    thanks_to: () => zr,
  });
  var zr = "Adam Laki <info@adamlaki.com>",
    Dr = "",
    Ur = "ltr",
    Ir = {
      placeholder: "Keres\xE9s",
      clear_search: "T\xF6rl\xE9s",
      load_more: "Tov\xE1bbi tal\xE1latok bet\xF6lt\xE9se",
      search_label: "Keres\xE9s az oldalon",
      filters_label: "Sz\u0171r\xE9s",
      zero_results: "Nincs tal\xE1lat a(z) [SEARCH_TERM] kifejez\xE9sre",
      many_results: "[COUNT] db tal\xE1lat a(z) [SEARCH_TERM] kifejez\xE9sre",
      one_result: "[COUNT] db tal\xE1lat a(z) [SEARCH_TERM] kifejez\xE9sre",
      alt_search:
        "Nincs tal\xE1lat a(z) [SEARCH_TERM] kifejez\xE9sre. Tal\xE1latok mutat\xE1sa ink\xE1bb a(z) [DIFFERENT_TERM] kifejez\xE9sre",
      search_suggestion:
        "Nincs tal\xE1lat a(z) [SEARCH_TERM] kifejez\xE9sre. Pr\xF3b\xE1ld meg a k\xF6vetkez\u0151 keres\xE9sek egyik\xE9t:",
      searching: "Keres\xE9s a(z) [SEARCH_TERM] kifejez\xE9sre...",
    },
    Pr = { thanks_to: zr, comments: Dr, direction: Ur, strings: Ir };
  var vt = {};
  v(vt, {
    comments: () => qr,
    default: () => Vr,
    direction: () => Br,
    strings: () => Wr,
    thanks_to: () => Lr,
  });
  var Lr = "Nixentric",
    qr = "",
    Br = "ltr",
    Wr = {
      placeholder: "Cari",
      clear_search: "Bersihkan",
      load_more: "Muat lebih banyak hasil",
      search_label: "Telusuri situs ini",
      filters_label: "Filter",
      zero_results: "[SEARCH_TERM] tidak ditemukan",
      many_results: "Ditemukan [COUNT] hasil untuk [SEARCH_TERM]",
      one_result: "Ditemukan [COUNT] hasil untuk [SEARCH_TERM]",
      alt_search:
        "[SEARCH_TERM] tidak ditemukan. Menampilkan hasil [DIFFERENT_TERM] sebagai gantinya",
      search_suggestion:
        "[SEARCH_TERM] tidak ditemukan. Coba salah satu pencarian berikut ini:",
      searching: "Mencari [SEARCH_TERM]...",
    },
    Vr = { thanks_to: Lr, comments: qr, direction: Br, strings: Wr };
  var Mt = {};
  v(Mt, {
    comments: () => Kr,
    default: () => Xr,
    direction: () => Jr,
    strings: () => Yr,
    thanks_to: () => Gr,
  });
  var Gr = "Cosette Bruhns Alonso, Andrew Janco <apjanco@upenn.edu>",
    Kr = "",
    Jr = "ltr",
    Yr = {
      placeholder: "Cerca",
      clear_search: "Cancella la cronologia",
      load_more: "Mostra pi\xF9 risultati",
      search_label: "Cerca nel sito",
      filters_label: "Filtri di ricerca",
      zero_results: "Nessun risultato per [SEARCH_TERM]",
      many_results: "[COUNT] risultati per [SEARCH_TERM]",
      one_result: "[COUNT] risultato per [SEARCH_TERM]",
      alt_search:
        "Nessun risultato per [SEARCH_TERM]. Mostrando risultati per [DIFFERENT_TERM] come alternativa.",
      search_suggestion:
        "Nessun risultato per [SEARCH_TERM]. Prova una delle seguenti ricerche:",
      searching: "Cercando [SEARCH_TERM]...",
    },
    Xr = { thanks_to: Gr, comments: Kr, direction: Jr, strings: Yr };
  var At = {};
  v(At, {
    comments: () => Qr,
    default: () => el,
    direction: () => xr,
    strings: () => $r,
    thanks_to: () => Zr,
  });
  var Zr = "Tate",
    Qr = "",
    xr = "ltr",
    $r = {
      placeholder: "\u691C\u7D22",
      clear_search: "\u6D88\u3059",
      load_more: "\u3082\u3063\u3068\u8AAD\u307F\u8FBC\u3080",
      search_label: "\u3053\u306E\u30B5\u30A4\u30C8\u3092\u691C\u7D22",
      filters_label: "\u30D5\u30A3\u30EB\u30BF",
      zero_results:
        "[SEARCH_TERM]\u306E\u691C\u7D22\u306B\u4E00\u81F4\u3059\u308B\u4EF6\u306F\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F",
      many_results:
        "[SEARCH_TERM]\u306E[COUNT]\u4EF6\u306E\u691C\u7D22\u7D50\u679C",
      one_result:
        "[SEARCH_TERM]\u306E[COUNT]\u4EF6\u306E\u691C\u7D22\u7D50\u679C",
      alt_search:
        "[SEARCH_TERM]\u306E\u691C\u7D22\u306B\u4E00\u81F4\u3059\u308B\u4EF6\u306F\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002[DIFFERENT_TERM]\u306E\u691C\u7D22\u7D50\u679C\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059",
      search_suggestion:
        "[SEARCH_TERM]\u306E\u691C\u7D22\u306B\u4E00\u81F4\u3059\u308B\u4EF6\u306F\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u6B21\u306E\u3044\u305A\u308C\u304B\u306E\u691C\u7D22\u3092\u8A66\u3057\u3066\u304F\u3060\u3055\u3044",
      searching:
        "[SEARCH_TERM]\u3092\u691C\u7D22\u3057\u3066\u3044\u307E\u3059",
    },
    el = { thanks_to: Zr, comments: Qr, direction: xr, strings: $r };
  var wt = {};
  v(wt, {
    comments: () => nl,
    default: () => ll,
    direction: () => sl,
    strings: () => rl,
    thanks_to: () => tl,
  });
  var tl = "",
    nl = "",
    sl = "ltr",
    rl = {
      placeholder: "Rapu",
      clear_search: "Whakakore",
      load_more: "Whakauta \u0113tahi otinga k\u0113",
      search_label: "Rapu",
      filters_label: "T\u0101tari",
      zero_results: "Otinga kore ki [SEARCH_TERM]",
      many_results: "[COUNT] otinga ki [SEARCH_TERM]",
      one_result: "[COUNT] otinga ki [SEARCH_TERM]",
      alt_search:
        "Otinga kore ki [SEARCH_TERM]. Otinga k\u0113 ki [DIFFERENT_TERM]",
      search_suggestion:
        "Otinga kore ki [SEARCH_TERM]. whakam\u0101tau ki ng\u0101 mea atu:",
      searching: "Rapu ki [SEARCH_TERM]...",
    },
    ll = { thanks_to: tl, comments: nl, direction: sl, strings: rl };
  var Ft = {};
  v(Ft, {
    comments: () => al,
    default: () => cl,
    direction: () => ol,
    strings: () => ul,
    thanks_to: () => il,
  });
  var il = "Paul van Brouwershaven",
    al = "",
    ol = "ltr",
    ul = {
      placeholder: "Zoeken",
      clear_search: "Reset",
      load_more: "Meer resultaten laden",
      search_label: "Doorzoek deze site",
      filters_label: "Filters",
      zero_results: "Geen resultaten voor [SEARCH_TERM]",
      many_results: "[COUNT] resultaten voor [SEARCH_TERM]",
      one_result: "[COUNT] resultaat voor [SEARCH_TERM]",
      alt_search:
        "Geen resultaten voor [SEARCH_TERM]. In plaats daarvan worden resultaten voor [DIFFERENT_TERM] weergegeven",
      search_suggestion:
        "Geen resultaten voor [SEARCH_TERM]. Probeer een van de volgende zoekopdrachten:",
      searching: "Zoeken naar [SEARCH_TERM]...",
    },
    cl = { thanks_to: il, comments: al, direction: ol, strings: ul };
  var Ht = {};
  v(Ht, {
    comments: () => fl,
    default: () => ml,
    direction: () => dl,
    strings: () => hl,
    thanks_to: () => _l,
  });
  var _l = "Christopher Wingate",
    fl = "",
    dl = "ltr",
    hl = {
      placeholder: "S\xF8k",
      clear_search: "Fjern",
      load_more: "Last flere resultater",
      search_label: "S\xF8k p\xE5 denne siden",
      filters_label: "Filtre",
      zero_results: "Ingen resultater for [SEARCH_TERM]",
      many_results: "[COUNT] resultater for [SEARCH_TERM]",
      one_result: "[COUNT] resultat for [SEARCH_TERM]",
      alt_search:
        "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet",
      search_suggestion:
        "Ingen resultater for [SEARCH_TERM]. Pr\xF8v en av disse s\xF8keordene i stedet:",
      searching: "S\xF8ker etter [SEARCH_TERM]",
    },
    ml = { thanks_to: _l, comments: fl, direction: dl, strings: hl };
  var Nt = {};
  v(Nt, {
    comments: () => gl,
    default: () => Rl,
    direction: () => El,
    strings: () => bl,
    thanks_to: () => pl,
  });
  var pl = "",
    gl = "",
    El = "ltr",
    bl = {
      placeholder: "Szukaj",
      clear_search: "Wyczy\u015B\u0107",
      load_more: "Za\u0142aduj wi\u0119cej",
      search_label: "Przeszukaj t\u0119 stron\u0119",
      filters_label: "Filtry",
      zero_results: "Brak wynik\xF3w dla [SEARCH_TERM]",
      many_results: "[COUNT] wynik\xF3w dla [SEARCH_TERM]",
      one_result: "[COUNT] wynik dla [SEARCH_TERM]",
      alt_search:
        "Brak wynik\xF3w dla [SEARCH_TERM]. Wy\u015Bwietlam wyniki dla [DIFFERENT_TERM]",
      search_suggestion:
        "Brak wynik\xF3w dla [SEARCH_TERM]. Pokrewne wyniki wyszukiwania:",
      searching: "Szukam [SEARCH_TERM]...",
    },
    Rl = { thanks_to: pl, comments: gl, direction: El, strings: bl };
  var Ot = {};
  v(Ot, {
    comments: () => kl,
    default: () => Sl,
    direction: () => Cl,
    strings: () => yl,
    thanks_to: () => Tl,
  });
  var Tl = "Jonatah",
    kl = "",
    Cl = "ltr",
    yl = {
      placeholder: "Pesquisar",
      clear_search: "Limpar",
      load_more: "Ver mais resultados",
      search_label: "Pesquisar",
      filters_label: "Filtros",
      zero_results: "Nenhum resultado encontrado para [SEARCH_TERM]",
      many_results: "[COUNT] resultados encontrados para [SEARCH_TERM]",
      one_result: "[COUNT] resultado encontrado para [SEARCH_TERM]",
      alt_search:
        "Nenhum resultado encontrado para [SEARCH_TERM]. Exibindo resultados para [DIFFERENT_TERM]",
      search_suggestion:
        "Nenhum resultado encontrado para [SEARCH_TERM]. Tente uma das seguintes pesquisas:",
      searching: "Pesquisando por [SEARCH_TERM]...",
    },
    Sl = { thanks_to: Tl, comments: kl, direction: Cl, strings: yl };
  var jt = {};
  v(jt, {
    comments: () => Ml,
    default: () => Fl,
    direction: () => Al,
    strings: () => wl,
    thanks_to: () => vl,
  });
  var vl = "Aleksandr Gordeev",
    Ml = "",
    Al = "ltr",
    wl = {
      placeholder: "\u041F\u043E\u0438\u0441\u043A",
      clear_search:
        "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435",
      load_more:
        "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435",
      search_label:
        "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0430\u0439\u0442\u0443",
      filters_label: "\u0424\u0438\u043B\u044C\u0442\u0440\u044B",
      zero_results:
        "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]",
      many_results:
        "[COUNT] \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]",
      one_result:
        "[COUNT] \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]",
      alt_search:
        "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]. \u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [DIFFERENT_TERM]",
      search_suggestion:
        "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0434\u0438\u043D \u0438\u0437 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432",
      searching:
        "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]",
    },
    Fl = { thanks_to: vl, comments: Ml, direction: Al, strings: wl };
  var zt = {};
  v(zt, {
    comments: () => Nl,
    default: () => zl,
    direction: () => Ol,
    strings: () => jl,
    thanks_to: () => Hl,
  });
  var Hl = "Andrija Sagicc",
    Nl = "",
    Ol = "ltr",
    jl = {
      placeholder: "\u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430",
      clear_search: "\u0411\u0440\u0438\u0441\u0430\u045A\u0435",
      load_more:
        "\u041F\u0440\u0438\u043A\u0430\u0437 \u0432\u0438\u0448\u0435 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430",
      search_label:
        "\u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u0441\u0430\u0458\u0442\u0430",
      filters_label: "\u0424\u0438\u043B\u0442\u0435\u0440\u0438",
      zero_results:
        "\u041D\u0435\u043C\u0430 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [SEARCH_TERM]",
      many_results:
        "[COUNT] \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [SEARCH_TERM]",
      one_result:
        "[COUNT] \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [SEARCH_TERM]",
      alt_search:
        "\u041D\u0435\u043C\u0430 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [SEARCH_TERM]. \u041F\u0440\u0438\u043A\u0430\u0437 \u0434\u043E\u0434\u0430\u0442\u043D\u0438\u043A \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [DIFFERENT_TERM]",
      search_suggestion:
        "\u041D\u0435\u043C\u0430 \u0440\u0435\u0437\u0443\u043B\u0442\u0430\u0442\u0430 \u0437\u0430 [SEARCH_TERM]. \u041F\u043E\u043A\u0443\u0448\u0430\u0458\u0442\u0435 \u0441\u0430 \u043D\u0435\u043A\u043E\u043C \u043E\u0434 \u0441\u043B\u0435\u0434\u0435\u045B\u0438\u0445 \u043F\u0440\u0435\u0442\u0440\u0430\u0433\u0430:",
      searching:
        "\u041F\u0440\u0435\u0442\u0440\u0430\u0433\u0430 \u0442\u0435\u0440\u043C\u0438\u043D\u0430 [SEARCH_TERM]...",
    },
    zl = { thanks_to: Hl, comments: Nl, direction: Ol, strings: jl };
  var Dt = {};
  v(Dt, {
    comments: () => Ul,
    default: () => Ll,
    direction: () => Il,
    strings: () => Pl,
    thanks_to: () => Dl,
  });
  var Dl = "Montazar Al-Jaber <montazar@nanawee.tech>",
    Ul = "",
    Il = "ltr",
    Pl = {
      placeholder: "S\xF6k",
      clear_search: "Rensa",
      load_more: "Visa fler tr\xE4ffar",
      search_label: "S\xF6k p\xE5 denna sida",
      filters_label: "Filter",
      zero_results: "[SEARCH_TERM] gav inga tr\xE4ffar",
      many_results: "[SEARCH_TERM] gav [COUNT] tr\xE4ffar",
      one_result: "[SEARCH_TERM] gav [COUNT] tr\xE4ff",
      alt_search:
        "[SEARCH_TERM] gav inga tr\xE4ffar. Visar resultat f\xF6r [DIFFERENT_TERM] ist\xE4llet",
      search_suggestion:
        "[SEARCH_TERM] gav inga tr\xE4ffar. F\xF6rs\xF6k igen med en av f\xF6ljande s\xF6kord:",
      searching: "S\xF6ker efter [SEARCH_TERM]...",
    },
    Ll = { thanks_to: Dl, comments: Ul, direction: Il, strings: Pl };
  var Ut = {};
  v(Ut, {
    comments: () => Bl,
    default: () => Gl,
    direction: () => Wl,
    strings: () => Vl,
    thanks_to: () => ql,
  });
  var ql = "",
    Bl = "",
    Wl = "ltr",
    Vl = {
      placeholder: "\u0BA4\u0BC7\u0B9F\u0BC1\u0B95",
      clear_search: "\u0B85\u0BB4\u0BBF\u0B95\u0BCD\u0B95\u0BC1\u0B95",
      load_more:
        "\u0BAE\u0BC7\u0BB2\u0BC1\u0BAE\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BC8\u0B95\u0BCD \u0B95\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B95",
      search_label:
        "\u0B87\u0BA8\u0BCD\u0BA4 \u0BA4\u0BB3\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0BA4\u0BC7\u0B9F\u0BC1\u0B95",
      filters_label:
        "\u0BB5\u0B9F\u0BBF\u0B95\u0B9F\u0BCD\u0B9F\u0BB2\u0BCD\u0B95\u0BB3\u0BCD",
      zero_results:
        "[SEARCH_TERM] \u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8",
      many_results:
        "[SEARCH_TERM] \u0B95\u0BCD\u0B95\u0BBE\u0BA9 [COUNT] \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD",
      one_result:
        "[SEARCH_TERM] \u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1",
      alt_search:
        "[SEARCH_TERM] \u0B87\u0BA4\u0BCD\u0BA4\u0BC7\u0B9F\u0BB2\u0BC1\u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8, \u0B87\u0BA8\u0BCD\u0BA4 \u0BA4\u0BC7\u0B9F\u0BB2\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0B92\u0BA4\u0BCD\u0BA4 \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD [DIFFERENT_TERM]",
      search_suggestion:
        "[SEARCH_TERM] \u0B87\u0BA4\u0BCD \u0BA4\u0BC7\u0B9F\u0BB2\u0BC1\u0B95\u0BCD\u0B95\u0BBE\u0BA9 \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0BC1\u0B95\u0BB3\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8.\u0B87\u0BA4\u0BB1\u0BCD\u0B95\u0BC1 \u0BAA\u0BA4\u0BBF\u0BB2\u0BC0\u0B9F\u0BBE\u0BA9 \u0BA4\u0BC7\u0B9F\u0BB2\u0BCD\u0B95\u0BB3\u0BC8 \u0BA4\u0BC7\u0B9F\u0BC1\u0B95:",
      searching:
        "[SEARCH_TERM] \u0BA4\u0BC7\u0B9F\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0B95\u0BBF\u0BA9\u0BCD\u0BB1\u0BA4\u0BC1",
    },
    Gl = { thanks_to: ql, comments: Bl, direction: Wl, strings: Vl };
  var It = {};
  v(It, {
    comments: () => Jl,
    default: () => Zl,
    direction: () => Yl,
    strings: () => Xl,
    thanks_to: () => Kl,
  });
  var Kl = "Taylan \xD6zg\xFCr Bildik",
    Jl = "",
    Yl = "ltr",
    Xl = {
      placeholder: "Ara\u015Ft\u0131r",
      clear_search: "Temizle",
      load_more: "Daha fazla sonu\xE7",
      search_label: "Site genelinde arama",
      filters_label: "Filtreler",
      zero_results: "[SEARCH_TERM] i\xE7in sonu\xE7 yok",
      many_results: "[SEARCH_TERM] i\xE7in [COUNT] sonu\xE7 bulundu",
      one_result: "[SEARCH_TERM] i\xE7in [COUNT] sonu\xE7 bulundu",
      alt_search:
        "[SEARCH_TERM] i\xE7in sonu\xE7 yok. Bunun yerine [DIFFERENT_TERM] i\xE7in sonu\xE7lar g\xF6steriliyor",
      search_suggestion:
        "[SEARCH_TERM] i\xE7in sonu\xE7 yok. Alternatif olarak a\u015Fa\u011F\u0131daki kelimelerden birini deneyebilirsiniz:",
      searching: "[SEARCH_TERM] ara\u015Ft\u0131r\u0131l\u0131yor...",
    },
    Zl = { thanks_to: Kl, comments: Jl, direction: Yl, strings: Xl };
  var Pt = {};
  v(Pt, {
    comments: () => xl,
    default: () => ti,
    direction: () => $l,
    strings: () => ei,
    thanks_to: () => Ql,
  });
  var Ql = "Long Nhat Nguyen",
    xl = "",
    $l = "ltr",
    ei = {
      placeholder: "T\xECm ki\u1EBFm",
      clear_search: "X\xF3a",
      load_more: "Nhi\u1EC1u k\u1EBFt qu\u1EA3 h\u01A1n",
      search_label: "T\xECm ki\u1EBFm trong trang n\xE0y",
      filters_label: "B\u1ED9 l\u1ECDc",
      zero_results:
        "Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 cho [SEARCH_TERM]",
      many_results: "[COUNT] k\u1EBFt qu\u1EA3 cho [SEARCH_TERM]",
      one_result: "[COUNT] k\u1EBFt qu\u1EA3 cho [SEARCH_TERM]",
      alt_search:
        "Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 cho [SEARCH_TERM]. Ki\u1EC3m th\u1ECB k\u1EBFt qu\u1EA3 thay th\u1EBF v\u1EDBi [DIFFERENT_TERM]",
      search_suggestion:
        "Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 cho [SEARCH_TERM]. Th\u1EED m\u1ED9t trong c\xE1c t\xECm ki\u1EBFm:",
      searching: "\u0110ang t\xECm ki\u1EBFm cho [SEARCH_TERM]...",
    },
    ti = { thanks_to: Ql, comments: xl, direction: $l, strings: ei };
  var Lt = {};
  v(Lt, {
    comments: () => si,
    default: () => ii,
    direction: () => ri,
    strings: () => li,
    thanks_to: () => ni,
  });
  var ni = "Amber Song",
    si = "",
    ri = "ltr",
    li = {
      placeholder: "\u641C\u7D22",
      clear_search: "\u6E05\u9664",
      load_more: "\u52A0\u8F7D\u66F4\u591A\u7ED3\u679C",
      search_label: "\u7AD9\u5185\u641C\u7D22",
      filters_label: "\u7B5B\u9009",
      zero_results:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      many_results:
        "\u627E\u5230 [COUNT] \u4E2A [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      one_result:
        "\u627E\u5230 [COUNT] \u4E2A [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      alt_search:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C\u3002\u6539\u4E3A\u663E\u793A [DIFFERENT_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      search_suggestion:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C\u3002\u8BF7\u5C1D\u8BD5\u4EE5\u4E0B\u641C\u7D22\u3002",
      searching: "\u6B63\u5728\u641C\u7D22 [SEARCH_TERM]...",
    },
    ii = { thanks_to: ni, comments: si, direction: ri, strings: li };
  var qt = {};
  v(qt, {
    comments: () => oi,
    default: () => _i,
    direction: () => ui,
    strings: () => ci,
    thanks_to: () => ai,
  });
  var ai = "Amber Song",
    oi = "",
    ui = "ltr",
    ci = {
      placeholder: "\u641C\u7D22",
      clear_search: "\u6E05\u9664",
      load_more: "\u52A0\u8F09\u66F4\u591A\u7D50\u679C",
      search_label: "\u7AD9\u5167\u641C\u7D22",
      filters_label: "\u7BE9\u9078",
      zero_results:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C",
      many_results:
        "\u627E\u5230 [COUNT] \u500B [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C",
      one_result:
        "\u627E\u5230 [COUNT] \u500B [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C",
      alt_search:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C\u3002\u6539\u70BA\u986F\u793A [DIFFERENT_TERM] \u7684\u76F8\u95DC\u7D50\u679C",
      search_suggestion:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C\u3002\u8ACB\u5617\u8A66\u4EE5\u4E0B\u641C\u7D22\u3002",
      searching: "\u6B63\u5728\u641C\u7D22 [SEARCH_TERM]...",
    },
    _i = { thanks_to: ai, comments: oi, direction: ui, strings: ci };
  var Bt = {};
  v(Bt, {
    comments: () => di,
    default: () => pi,
    direction: () => hi,
    strings: () => mi,
    thanks_to: () => fi,
  });
  var fi = "Amber Song",
    di = "",
    hi = "ltr",
    mi = {
      placeholder: "\u641C\u7D22",
      clear_search: "\u6E05\u9664",
      load_more: "\u52A0\u8F7D\u66F4\u591A\u7ED3\u679C",
      search_label: "\u7AD9\u5185\u641C\u7D22",
      filters_label: "\u7B5B\u9009",
      zero_results:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      many_results:
        "\u627E\u5230 [COUNT] \u4E2A [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      one_result:
        "\u627E\u5230 [COUNT] \u4E2A [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      alt_search:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C\u3002\u6539\u4E3A\u663E\u793A [DIFFERENT_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      search_suggestion:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C\u3002\u8BF7\u5C1D\u8BD5\u4EE5\u4E0B\u641C\u7D22\u3002",
      searching: "\u6B63\u5728\u641C\u7D22 [SEARCH_TERM]...",
    },
    pi = { thanks_to: fi, comments: di, direction: hi, strings: mi };
  var gi = [
      dt,
      ht,
      mt,
      pt,
      gt,
      Et,
      bt,
      Rt,
      Tt,
      kt,
      Ct,
      yt,
      St,
      vt,
      Mt,
      At,
      wt,
      Ft,
      Ht,
      Nt,
      Ot,
      jt,
      zt,
      Dt,
      Ut,
      It,
      Pt,
      Lt,
      qt,
      Bt,
    ],
    Un = gi,
    In = [
      "../../translations/af.json",
      "../../translations/bn.json",
      "../../translations/ca.json",
      "../../translations/da.json",
      "../../translations/de.json",
      "../../translations/en.json",
      "../../translations/es.json",
      "../../translations/fi.json",
      "../../translations/fr.json",
      "../../translations/gl.json",
      "../../translations/hi.json",
      "../../translations/hr.json",
      "../../translations/hu.json",
      "../../translations/id.json",
      "../../translations/it.json",
      "../../translations/ja.json",
      "../../translations/mi.json",
      "../../translations/nl.json",
      "../../translations/no.json",
      "../../translations/pl.json",
      "../../translations/pt.json",
      "../../translations/ru.json",
      "../../translations/sr.json",
      "../../translations/sv.json",
      "../../translations/ta.json",
      "../../translations/tr.json",
      "../../translations/vi.json",
      "../../translations/zh-cn.json",
      "../../translations/zh-tw.json",
      "../../translations/zh.json",
    ];
  function Pn(n, e, t) {
    let s = n.slice();
    return (s[48] = e[t]), s;
  }
  function Ln(n) {
    let e, t, s;
    function r(i) {
      n[34](i);
    }
    let l = {
      show_empty_filters: n[4],
      available_filters: n[16],
      translate: n[18],
      automatic_translations: n[17],
      translations: n[5],
    };
    return (
      n[7] !== void 0 && (l.selected_filters = n[7]),
      (e = new Dn({ props: l })),
      re.push(() => an(e, "selected_filters", r)),
      {
        c() {
          Ze(e.$$.fragment);
        },
        m(i, a) {
          he(e, i, a), (s = !0);
        },
        p(i, a) {
          let o = {};
          a[0] & 16 && (o.show_empty_filters = i[4]),
            a[0] & 65536 && (o.available_filters = i[16]),
            a[0] & 131072 && (o.automatic_translations = i[17]),
            a[0] & 32 && (o.translations = i[5]),
            !t &&
              a[0] & 128 &&
              ((t = !0), (o.selected_filters = i[7]), nn(() => (t = !1))),
            e.$set(o);
        },
        i(i) {
          s || (z(e.$$.fragment, i), (s = !0));
        },
        o(i) {
          I(e.$$.fragment, i), (s = !1);
        },
        d(i) {
          oe(e, i);
        },
      }
    );
  }
  function qn(n) {
    let e,
      t,
      s,
      r,
      l = [Ri, bi],
      i = [];
    function a(o, h) {
      return o[12] ? 0 : 1;
    }
    return (
      (t = a(n, [-1, -1])),
      (s = i[t] = l[t](n)),
      {
        c() {
          (e = k("div")),
            s.c(),
            p(e, "class", "pagefind-ui__results-area svelte-e9gkc3");
        },
        m(o, h) {
          y(o, e, h), i[t].m(e, null), (r = !0);
        },
        p(o, h) {
          let _ = t;
          (t = a(o, h)),
            t === _
              ? i[t].p(o, h)
              : (ie(),
                I(i[_], 1, 1, () => {
                  i[_] = null;
                }),
                ae(),
                (s = i[t]),
                s ? s.p(o, h) : ((s = i[t] = l[t](o)), s.c()),
                z(s, 1),
                s.m(e, null));
        },
        i(o) {
          r || (z(s), (r = !0));
        },
        o(o) {
          I(s), (r = !1);
        },
        d(o) {
          o && C(e), i[t].d();
        },
      }
    );
  }
  function bi(n) {
    let e,
      t,
      s,
      r = [],
      l = new Map(),
      i,
      a,
      o;
    function h(m, d) {
      return m[11].results.length === 0
        ? Ci
        : m[11].results.length === 1
          ? ki
          : Ti;
    }
    let _ = h(n, [-1, -1]),
      f = _(n),
      c = n[11].results.slice(0, n[15]),
      E = (m) => m[48].id;
    for (let m = 0; m < c.length; m += 1) {
      let d = Pn(n, c, m),
        R = E(d);
      l.set(R, (r[m] = Bn(R, d)));
    }
    let u = n[11].results.length > n[15] && Wn(n);
    return {
      c() {
        (e = k("p")), f.c(), (t = M()), (s = k("ol"));
        for (let m = 0; m < r.length; m += 1) r[m].c();
        (i = M()),
          u && u.c(),
          (a = x()),
          p(e, "class", "pagefind-ui__message svelte-e9gkc3"),
          p(s, "class", "pagefind-ui__results svelte-e9gkc3");
      },
      m(m, d) {
        y(m, e, d), f.m(e, null), y(m, t, d), y(m, s, d);
        for (let R = 0; R < r.length; R += 1) r[R] && r[R].m(s, null);
        y(m, i, d), u && u.m(m, d), y(m, a, d), (o = !0);
      },
      p(m, d) {
        _ === (_ = h(m, d)) && f
          ? f.p(m, d)
          : (f.d(1), (f = _(m)), f && (f.c(), f.m(e, null))),
          d[0] & 34830 &&
            ((c = m[11].results.slice(0, m[15])),
            ie(),
            (r = ln(r, d, E, 1, m, c, l, s, rn, Bn, null, Pn)),
            ae()),
          m[11].results.length > m[15]
            ? u
              ? u.p(m, d)
              : ((u = Wn(m)), u.c(), u.m(a.parentNode, a))
            : u && (u.d(1), (u = null));
      },
      i(m) {
        if (!o) {
          for (let d = 0; d < c.length; d += 1) z(r[d]);
          o = !0;
        }
      },
      o(m) {
        for (let d = 0; d < r.length; d += 1) I(r[d]);
        o = !1;
      },
      d(m) {
        m && C(e), f.d(), m && C(t), m && C(s);
        for (let d = 0; d < r.length; d += 1) r[d].d();
        m && C(i), u && u.d(m), m && C(a);
      },
    };
  }
  function Ri(n) {
    let e,
      t = n[14] && Vn(n);
    return {
      c() {
        t && t.c(), (e = x());
      },
      m(s, r) {
        t && t.m(s, r), y(s, e, r);
      },
      p(s, r) {
        s[14]
          ? t
            ? t.p(s, r)
            : ((t = Vn(s)), t.c(), t.m(e.parentNode, e))
          : t && (t.d(1), (t = null));
      },
      i: j,
      o: j,
      d(s) {
        t && t.d(s), s && C(e);
      },
    };
  }
  function Ti(n) {
    let e =
        n[18]("many_results", n[17], n[5])
          .replace(/\[SEARCH_TERM\]/, n[14])
          .replace(
            /\[COUNT\]/,
            new Intl.NumberFormat(n[5].language).format(n[11].results.length),
          ) + "",
      t;
    return {
      c() {
        t = A(e);
      },
      m(s, r) {
        y(s, t, r);
      },
      p(s, r) {
        r[0] & 149536 &&
          e !==
            (e =
              s[18]("many_results", s[17], s[5])
                .replace(/\[SEARCH_TERM\]/, s[14])
                .replace(
                  /\[COUNT\]/,
                  new Intl.NumberFormat(s[5].language).format(
                    s[11].results.length,
                  ),
                ) + "") &&
          N(t, e);
      },
      d(s) {
        s && C(t);
      },
    };
  }
  function ki(n) {
    let e =
        n[18]("one_result", n[17], n[5])
          .replace(/\[SEARCH_TERM\]/, n[14])
          .replace(
            /\[COUNT\]/,
            new Intl.NumberFormat(n[5].language).format(1),
          ) + "",
      t;
    return {
      c() {
        t = A(e);
      },
      m(s, r) {
        y(s, t, r);
      },
      p(s, r) {
        r[0] & 147488 &&
          e !==
            (e =
              s[18]("one_result", s[17], s[5])
                .replace(/\[SEARCH_TERM\]/, s[14])
                .replace(
                  /\[COUNT\]/,
                  new Intl.NumberFormat(s[5].language).format(1),
                ) + "") &&
          N(t, e);
      },
      d(s) {
        s && C(t);
      },
    };
  }
  function Ci(n) {
    let e =
        n[18]("zero_results", n[17], n[5]).replace(/\[SEARCH_TERM\]/, n[14]) +
        "",
      t;
    return {
      c() {
        t = A(e);
      },
      m(s, r) {
        y(s, t, r);
      },
      p(s, r) {
        r[0] & 147488 &&
          e !==
            (e =
              s[18]("zero_results", s[17], s[5]).replace(
                /\[SEARCH_TERM\]/,
                s[14],
              ) + "") &&
          N(t, e);
      },
      d(s) {
        s && C(t);
      },
    };
  }
  function yi(n) {
    let e, t;
    return (
      (e = new gn({
        props: { show_images: n[1], process_result: n[3], result: n[48] },
      })),
      {
        c() {
          Ze(e.$$.fragment);
        },
        m(s, r) {
          he(e, s, r), (t = !0);
        },
        p(s, r) {
          let l = {};
          r[0] & 2 && (l.show_images = s[1]),
            r[0] & 8 && (l.process_result = s[3]),
            r[0] & 34816 && (l.result = s[48]),
            e.$set(l);
        },
        i(s) {
          t || (z(e.$$.fragment, s), (t = !0));
        },
        o(s) {
          I(e.$$.fragment, s), (t = !1);
        },
        d(s) {
          oe(e, s);
        },
      }
    );
  }
  function Si(n) {
    let e, t;
    return (
      (e = new An({
        props: { show_images: n[1], process_result: n[3], result: n[48] },
      })),
      {
        c() {
          Ze(e.$$.fragment);
        },
        m(s, r) {
          he(e, s, r), (t = !0);
        },
        p(s, r) {
          let l = {};
          r[0] & 2 && (l.show_images = s[1]),
            r[0] & 8 && (l.process_result = s[3]),
            r[0] & 34816 && (l.result = s[48]),
            e.$set(l);
        },
        i(s) {
          t || (z(e.$$.fragment, s), (t = !0));
        },
        o(s) {
          I(e.$$.fragment, s), (t = !1);
        },
        d(s) {
          oe(e, s);
        },
      }
    );
  }
  function Bn(n, e) {
    let t,
      s,
      r,
      l,
      i,
      a = [Si, yi],
      o = [];
    function h(_, f) {
      return _[2] ? 0 : 1;
    }
    return (
      (s = h(e, [-1, -1])),
      (r = o[s] = a[s](e)),
      {
        key: n,
        first: null,
        c() {
          (t = x()), r.c(), (l = x()), (this.first = t);
        },
        m(_, f) {
          y(_, t, f), o[s].m(_, f), y(_, l, f), (i = !0);
        },
        p(_, f) {
          e = _;
          let c = s;
          (s = h(e, f)),
            s === c
              ? o[s].p(e, f)
              : (ie(),
                I(o[c], 1, 1, () => {
                  o[c] = null;
                }),
                ae(),
                (r = o[s]),
                r ? r.p(e, f) : ((r = o[s] = a[s](e)), r.c()),
                z(r, 1),
                r.m(l.parentNode, l));
        },
        i(_) {
          i || (z(r), (i = !0));
        },
        o(_) {
          I(r), (i = !1);
        },
        d(_) {
          _ && C(t), o[s].d(_), _ && C(l);
        },
      }
    );
  }
  function Wn(n) {
    let e,
      t = n[18]("load_more", n[17], n[5]) + "",
      s,
      r,
      l;
    return {
      c() {
        (e = k("button")),
          (s = A(t)),
          p(e, "type", "button"),
          p(e, "class", "pagefind-ui__button svelte-e9gkc3");
      },
      m(i, a) {
        y(i, e, a), b(e, s), r || ((l = K(e, "click", n[20])), (r = !0));
      },
      p(i, a) {
        a[0] & 131104 &&
          t !== (t = i[18]("load_more", i[17], i[5]) + "") &&
          N(s, t);
      },
      d(i) {
        i && C(e), (r = !1), l();
      },
    };
  }
  function Vn(n) {
    let e,
      t =
        n[18]("searching", n[17], n[5]).replace(/\[SEARCH_TERM\]/, n[14]) + "",
      s;
    return {
      c() {
        (e = k("p")),
          (s = A(t)),
          p(e, "class", "pagefind-ui__message svelte-e9gkc3");
      },
      m(r, l) {
        y(r, e, l), b(e, s);
      },
      p(r, l) {
        l[0] & 147488 &&
          t !==
            (t =
              r[18]("searching", r[17], r[5]).replace(
                /\[SEARCH_TERM\]/,
                r[14],
              ) + "") &&
          N(s, t);
      },
      d(r) {
        r && C(e);
      },
    };
  }
  function vi(n) {
    let e,
      t,
      s,
      r,
      l,
      i,
      a = n[18]("clear_search", n[17], n[5]) + "",
      o,
      h,
      _,
      f,
      c,
      E,
      u,
      m,
      d = n[10] && Ln(n),
      R = n[13] && qn(n);
    return {
      c() {
        (e = k("div")),
          (t = k("form")),
          (s = k("input")),
          (l = M()),
          (i = k("button")),
          (o = A(a)),
          (h = M()),
          (_ = k("div")),
          d && d.c(),
          (f = M()),
          R && R.c(),
          p(s, "class", "pagefind-ui__search-input svelte-e9gkc3"),
          p(s, "type", "text"),
          p(s, "placeholder", (r = n[18]("placeholder", n[17], n[5]))),
          p(s, "autocapitalize", "none"),
          p(s, "enterkeyhint", "search"),
          p(i, "class", "pagefind-ui__search-clear svelte-e9gkc3"),
          W(i, "pagefind-ui__suppressed", !n[6]),
          p(_, "class", "pagefind-ui__drawer svelte-e9gkc3"),
          W(_, "pagefind-ui__hidden", !n[13]),
          p(t, "class", "pagefind-ui__form svelte-e9gkc3"),
          p(t, "role", "search"),
          p(t, "aria-label", (c = n[18]("search_label", n[17], n[5]))),
          p(t, "action", "javascript:void(0);"),
          p(e, "class", "pagefind-ui svelte-e9gkc3"),
          W(e, "pagefind-ui--reset", n[0]);
      },
      m(T, S) {
        y(T, e, S),
          b(e, t),
          b(t, s),
          it(s, n[6]),
          n[31](s),
          b(t, l),
          b(t, i),
          b(i, o),
          n[32](i),
          b(t, h),
          b(t, _),
          d && d.m(_, null),
          b(_, f),
          R && R.m(_, null),
          (E = !0),
          u ||
            ((m = [
              K(s, "focus", n[19]),
              K(s, "keydown", n[29]),
              K(s, "input", n[30]),
              K(i, "click", n[33]),
              K(t, "submit", Mi),
            ]),
            (u = !0));
      },
      p(T, S) {
        (!E ||
          (S[0] & 131104 && r !== (r = T[18]("placeholder", T[17], T[5])))) &&
          p(s, "placeholder", r),
          S[0] & 64 && s.value !== T[6] && it(s, T[6]),
          (!E || S[0] & 131104) &&
            a !== (a = T[18]("clear_search", T[17], T[5]) + "") &&
            N(o, a),
          (!E || S[0] & 64) && W(i, "pagefind-ui__suppressed", !T[6]),
          T[10]
            ? d
              ? (d.p(T, S), S[0] & 1024 && z(d, 1))
              : ((d = Ln(T)), d.c(), z(d, 1), d.m(_, f))
            : d &&
              (ie(),
              I(d, 1, 1, () => {
                d = null;
              }),
              ae()),
          T[13]
            ? R
              ? (R.p(T, S), S[0] & 8192 && z(R, 1))
              : ((R = qn(T)), R.c(), z(R, 1), R.m(_, null))
            : R &&
              (ie(),
              I(R, 1, 1, () => {
                R = null;
              }),
              ae()),
          (!E || S[0] & 8192) && W(_, "pagefind-ui__hidden", !T[13]),
          (!E ||
            (S[0] & 131104 &&
              c !== (c = T[18]("search_label", T[17], T[5])))) &&
            p(t, "aria-label", c),
          (!E || S[0] & 1) && W(e, "pagefind-ui--reset", T[0]);
      },
      i(T) {
        E || (z(d), z(R), (E = !0));
      },
      o(T) {
        I(d), I(R), (E = !1);
      },
      d(T) {
        T && C(e),
          n[31](null),
          n[32](null),
          d && d.d(),
          R && R.d(),
          (u = !1),
          V(m);
      },
    };
  }
  var Mi = (n) => n.preventDefault();
  function Ai(n, e, t) {
    let s = {},
      r = In.map((g) => g.match(/([^\/]+)\.json$/)[1]);
    for (let g = 0; g < r.length; g++)
      s[r[g]] = { language: r[g], ...Un[g].strings };
    let { base_path: l = "/pagefind/" } = e,
      { page_size: i = 5 } = e,
      { reset_styles: a = !0 } = e,
      { show_images: o = !0 } = e,
      { show_sub_results: h = !1 } = e,
      { excerpt_length: _ } = e,
      { process_result: f = null } = e,
      { process_term: c = null } = e,
      { show_empty_filters: E = !0 } = e,
      { debounce_timeout_ms: u = 300 } = e,
      { pagefind_options: m = {} } = e,
      { merge_index: d = [] } = e,
      { trigger_search_term: R = "" } = e,
      { translations: T = {} } = e,
      S = "",
      w,
      B,
      X,
      F = 40,
      U = !1,
      P = [],
      Z = !1,
      $e = !1,
      Gt = 0,
      Kt = "",
      et = i,
      Jt = null,
      ue = null,
      Ge = {},
      Yt = s.en,
      Kn = (g, H, O) => O[g] ?? H[g] ?? "";
    at(() => {
      let g = document?.querySelector?.("html")?.getAttribute?.("lang") || "en",
        H = Qe(g.toLocaleLowerCase());
      t(
        17,
        (Yt =
          s[`${H.language}-${H.script}-${H.region}`] ||
          s[`${H.language}-${H.region}`] ||
          s[`${H.language}`] ||
          s.en),
      );
    }),
      ot(() => {
        w?.destroy?.(), (w = null);
      });
    let Xt = async () => {
        if (!U && (t(10, (U = !0)), !w)) {
          let g;
          try {
            g = await import(`${l}pagefind.js`);
          } catch (O) {
            console.error(O),
              console.error(
                [
                  `Pagefind couldn't be loaded from ${this.options.bundlePath}pagefind.js`,
                  "You can configure this by passing a bundlePath option to PagefindUI",
                  `[DEBUG: Loaded from ${document?.currentScript?.src ?? "no known script location"}]`,
                ].join(`
`),
              );
          }
          _ || t(22, (_ = h ? 12 : 30));
          let H = { ...(m || {}), excerptLength: _ };
          await g.options(H);
          for (let O of d) {
            if (!O.bundlePath)
              throw new Error("mergeIndex requires a bundlePath parameter");
            let L = O.bundlePath;
            delete O.bundlePath, await g.mergeIndex(L, O);
          }
          (w = g), Jn();
        }
      },
      Jn = async () => {
        w &&
          ((Jt = await w.filters()),
          (!ue || !Object.keys(ue).length) && t(16, (ue = Jt)));
      },
      Yn = (g) => {
        let H = {};
        return (
          Object.entries(g)
            .filter(([, O]) => O)
            .forEach(([O]) => {
              let [L, ls] = O.split(/:(.*)$/);
              (H[L] = H[L] || []), H[L].push(ls);
            }),
          H
        );
      },
      ce,
      Xn = async (g, H) => {
        if (!g) {
          t(13, ($e = !1)), ce && clearTimeout(ce);
          return;
        }
        let O = Yn(H),
          L = () => Zn(g, O);
        u > 0 && g
          ? (ce && clearTimeout(ce),
            (ce = setTimeout(L, u)),
            await Zt(),
            w.preload(g, { filters: O }))
          : L(),
          Qn();
      },
      Zt = async () => {
        for (; !w; ) Xt(), await new Promise((g) => setTimeout(g, 50));
      },
      Zn = async (g, H) => {
        t(14, (Kt = g || "")),
          typeof c == "function" && (g = c(g)),
          t(12, (Z = !0)),
          t(13, ($e = !0)),
          await Zt();
        let O = ++Gt,
          L = await w.search(g, { filters: H });
        Gt === O &&
          (L.filters &&
            Object.keys(L.filters)?.length &&
            t(16, (ue = L.filters)),
          t(11, (P = L)),
          t(12, (Z = !1)),
          t(15, (et = i)));
      },
      Qn = () => {
        let g = X.offsetWidth;
        g != F && t(8, (B.style.paddingRight = `${g + 2}px`), B);
      },
      xn = (g) => {
        g?.preventDefault(), t(15, (et += i));
      },
      $n = (g) => {
        g.key === "Escape" && (t(6, (S = "")), B.blur()),
          g.key === "Enter" && g.preventDefault();
      };
    function es() {
      (S = this.value), t(6, S), t(21, R);
    }
    function ts(g) {
      re[g ? "unshift" : "push"](() => {
        (B = g), t(8, B);
      });
    }
    function ns(g) {
      re[g ? "unshift" : "push"](() => {
        (X = g), t(9, X);
      });
    }
    let ss = () => {
      t(6, (S = "")), B.blur();
    };
    function rs(g) {
      (Ge = g), t(7, Ge);
    }
    return (
      (n.$$set = (g) => {
        "base_path" in g && t(23, (l = g.base_path)),
          "page_size" in g && t(24, (i = g.page_size)),
          "reset_styles" in g && t(0, (a = g.reset_styles)),
          "show_images" in g && t(1, (o = g.show_images)),
          "show_sub_results" in g && t(2, (h = g.show_sub_results)),
          "excerpt_length" in g && t(22, (_ = g.excerpt_length)),
          "process_result" in g && t(3, (f = g.process_result)),
          "process_term" in g && t(25, (c = g.process_term)),
          "show_empty_filters" in g && t(4, (E = g.show_empty_filters)),
          "debounce_timeout_ms" in g && t(26, (u = g.debounce_timeout_ms)),
          "pagefind_options" in g && t(27, (m = g.pagefind_options)),
          "merge_index" in g && t(28, (d = g.merge_index)),
          "trigger_search_term" in g && t(21, (R = g.trigger_search_term)),
          "translations" in g && t(5, (T = g.translations));
      }),
      (n.$$.update = () => {
        if (n.$$.dirty[0] & 2097152) e: R && (t(6, (S = R)), t(21, (R = "")));
        if (n.$$.dirty[0] & 192) e: Xn(S, Ge);
      }),
      [
        a,
        o,
        h,
        f,
        E,
        T,
        S,
        Ge,
        B,
        X,
        U,
        P,
        Z,
        $e,
        Kt,
        et,
        ue,
        Yt,
        Kn,
        Xt,
        xn,
        R,
        _,
        l,
        i,
        c,
        u,
        m,
        d,
        $n,
        es,
        ts,
        ns,
        ss,
        rs,
      ]
    );
  }
  var Wt = class extends q {
      constructor(e) {
        super(),
          J(
            this,
            e,
            Ai,
            vi,
            G,
            {
              base_path: 23,
              page_size: 24,
              reset_styles: 0,
              show_images: 1,
              show_sub_results: 2,
              excerpt_length: 22,
              process_result: 3,
              process_term: 25,
              show_empty_filters: 4,
              debounce_timeout_ms: 26,
              pagefind_options: 27,
              merge_index: 28,
              trigger_search_term: 21,
              translations: 5,
            },
            null,
            [-1, -1],
          );
      }
    },
    Gn = Wt;
  var Vt;
  try {
    Vt = new URL(document.currentScript.src).pathname.match(
      /^(.*\/)(?:pagefind-)?ui.js.*$/,
    )[1];
  } catch {
    Vt = "/pagefind/";
  }
  var xe = class {
    constructor(e) {
      this._pfs = null;
      let t = e.element ?? "[data-pagefind-ui]",
        s = e.bundlePath ?? Vt,
        r = e.pageSize ?? 5,
        l = e.resetStyles ?? !0,
        i = e.showImages ?? !0,
        a = e.showSubResults ?? !1,
        o = e.excerptLength ?? 0,
        h = e.processResult ?? null,
        _ = e.processTerm ?? null,
        f = e.showEmptyFilters ?? !0,
        c = e.debounceTimeoutMs ?? 300,
        E = e.mergeIndex ?? [],
        u = e.translations ?? [];
      delete e.element,
        delete e.bundlePath,
        delete e.pageSize,
        delete e.resetStyles,
        delete e.showImages,
        delete e.showSubResults,
        delete e.excerptLength,
        delete e.processResult,
        delete e.processTerm,
        delete e.showEmptyFilters,
        delete e.debounceTimeoutMs,
        delete e.mergeIndex,
        delete e.translations;
      let m = t instanceof HTMLElement ? t : document.querySelector(t);
      m
        ? (this._pfs = new Gn({
            target: m,
            props: {
              base_path: s,
              page_size: r,
              reset_styles: l,
              show_images: i,
              show_sub_results: a,
              excerpt_length: o,
              process_result: h,
              process_term: _,
              show_empty_filters: f,
              debounce_timeout_ms: c,
              merge_index: E,
              translations: u,
              pagefind_options: e,
            },
          }))
        : console.error(`Pagefind UI couldn't find the selector ${t}`);
    }
    triggerSearch(e) {
      this._pfs.$$set({ trigger_search_term: e });
    }
    destroy() {
      this._pfs.$destroy();
    }
  };
  window.PagefindUI = xe;
})();
