var $ = Object.defineProperty;
var O = (e, r, o) => r in e ? $(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o;
var S = (e, r, o) => O(e, typeof r != "symbol" ? r + "" : r, o);
import s from "axios";
/*! js-cookie v3.0.5 | MIT */
function f(e) {
  for (var r = 1; r < arguments.length; r++) {
    var o = arguments[r];
    for (var t in o)
      e[t] = o[t];
  }
  return e;
}
var P = {
  read: function(e) {
    return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function m(e, r) {
  function o(a, i, n) {
    if (!(typeof document > "u")) {
      n = f({}, r, n), typeof n.expires == "number" && (n.expires = new Date(Date.now() + n.expires * 864e5)), n.expires && (n.expires = n.expires.toUTCString()), a = encodeURIComponent(a).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var p = "";
      for (var l in n)
        n[l] && (p += "; " + l, n[l] !== !0 && (p += "=" + n[l].split(";")[0]));
      return document.cookie = a + "=" + e.write(i, a) + p;
    }
  }
  function t(a) {
    if (!(typeof document > "u" || arguments.length && !a)) {
      for (var i = document.cookie ? document.cookie.split("; ") : [], n = {}, p = 0; p < i.length; p++) {
        var l = i[p].split("="), g = l.slice(1).join("=");
        try {
          var h = decodeURIComponent(l[0]);
          if (n[h] = e.read(g, h), a === h)
            break;
        } catch {
        }
      }
      return a ? n[a] : n;
    }
  }
  return Object.create(
    {
      set: o,
      get: t,
      remove: function(a, i) {
        o(
          a,
          "",
          f({}, i, {
            expires: -1
          })
        );
      },
      withAttributes: function(a) {
        return m(this.converter, f({}, this.attributes, a));
      },
      withConverter: function(a) {
        return m(f({}, this.converter, a), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(r) },
      converter: { value: Object.freeze(e) }
    }
  );
}
var T = m(P, { path: "/" });
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var k = I, x = Object.prototype.toString, y = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function I(e, r, o) {
  var t = o || {}, a = t.encode || b;
  if (typeof a != "function")
    throw new TypeError("option encode is invalid");
  if (!y.test(e))
    throw new TypeError("argument name is invalid");
  var i = a(r);
  if (i && !y.test(i))
    throw new TypeError("argument val is invalid");
  var n = e + "=" + i;
  if (t.maxAge != null) {
    var p = t.maxAge - 0;
    if (isNaN(p) || !isFinite(p))
      throw new TypeError("option maxAge is invalid");
    n += "; Max-Age=" + Math.floor(p);
  }
  if (t.domain) {
    if (!y.test(t.domain))
      throw new TypeError("option domain is invalid");
    n += "; Domain=" + t.domain;
  }
  if (t.path) {
    if (!y.test(t.path))
      throw new TypeError("option path is invalid");
    n += "; Path=" + t.path;
  }
  if (t.expires) {
    var l = t.expires;
    if (!D(l) || isNaN(l.valueOf()))
      throw new TypeError("option expires is invalid");
    n += "; Expires=" + l.toUTCString();
  }
  if (t.httpOnly && (n += "; HttpOnly"), t.secure && (n += "; Secure"), t.partitioned && (n += "; Partitioned"), t.priority) {
    var g = typeof t.priority == "string" ? t.priority.toLowerCase() : t.priority;
    switch (g) {
      case "low":
        n += "; Priority=Low";
        break;
      case "medium":
        n += "; Priority=Medium";
        break;
      case "high":
        n += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (t.sameSite) {
    var h = typeof t.sameSite == "string" ? t.sameSite.toLowerCase() : t.sameSite;
    switch (h) {
      case !0:
        n += "; SameSite=Strict";
        break;
      case "lax":
        n += "; SameSite=Lax";
        break;
      case "strict":
        n += "; SameSite=Strict";
        break;
      case "none":
        n += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return n;
}
function b(e) {
  return encodeURIComponent(e);
}
function D(e) {
  return x.call(e) === "[object Date]" || e instanceof Date;
}
const v = "headers", u = class u {
  // Private constructor to prevent direct instantiation
  constructor() {
  }
  // Public method to get the singleton instance
  static getInstance() {
    return u.instance || (u.instance = new u()), u.instance;
  }
  // Set headers in cookies
  setHeaders(r) {
    const o = {};
    r.store_id && (o.store_id = r.store_id), r.token && (o.token = r.token), r["Content-Type"] && (o["Content-Type"] = r["Content-Type"]);
    const t = k(v, JSON.stringify(o), {
      path: "/"
    });
    T.set(v, t, { path: "/" });
  }
  // Get headers from cookies
  getHeaders() {
    const r = T.get(v);
    if (!r) return {};
    try {
      return JSON.parse(r);
    } catch (o) {
      return console.error("Error parsing headers from cookies:", o), {};
    }
  }
};
S(u, "instance");
let E = u;
const C = E.getInstance(), Y = (e) => C.setHeaders(e), d = () => C.getHeaders(), c = "https://sharai-server.onrender.com", R = async (e) => {
  try {
    await s.delete(`${c}/api/product/delete-one?id=${e}`, {
      headers: d()
    });
  } catch (r) {
    console.error(r);
  }
}, A = async (e, r, o = !0, t = !1) => {
  const a = `${c}/api/product/get-by-category?id=${e}&active=${o}&similar=${t}`;
  try {
    const i = await s.get(a, { headers: d() }), { data: n } = await i.data;
    return { data: n };
  } catch (i) {
    console.error(i);
  }
}, U = async (e, r = !0) => {
  try {
    const o = await s.post(
      `${c}/api/product/post-many?active=${r}`,
      { products: [...e] },
      { headers: d() }
    ), { result: t } = o.data;
    return t;
  } catch (o) {
    console.error("There was a problem posting the data:", o);
  }
}, j = (e) => {
  if (e) {
    const { id: r, category: o, products: t, active: a } = e;
    return r ? w() : t && (t == null ? void 0 : t.length) > 0 ? U(t, a) : o ? A(o) : w();
  } else
    return w();
}, w = async (e) => {
  const r = `${c}/api/product`;
  try {
    const o = await s.get(r, {
      headers: d()
    }), { data: t } = await o;
    return t;
  } catch (o) {
    console.error(o);
  }
}, G = async (e) => {
  try {
    const r = await s.post(
      `${c}/api/products/post-one`,
      { ...e },
      { headers: d() }
    ), { result: o } = r.data;
    return o;
  } catch (r) {
    console.error("There was a problem posting the data:", r);
  }
}, L = async (e) => {
  try {
    return (await s.get(
      `${c}/api/product/search?phrase=${e}`,
      { headers: d() }
    )).data.result;
  } catch (r) {
    console.error("There was a problem posting the data:", r);
  }
}, q = {
  DELETE: R,
  GET: j,
  POST: G,
  SEARCH: L
}, H = async (e) => {
  try {
    await s.delete(`${c}/api/invoice/delete-one?id=${e}`, {
      headers: d()
    });
  } catch (r) {
    console.error(r);
  }
}, B = async (e = 1) => {
  try {
    const r = await s.get(
      `${c}/api/invoice/get-all?page=${e}`,
      { headers: d() }
    ), { data: o } = await r.data;
    return { data: o };
  } catch (r) {
    console.error(r);
  }
}, z = async (e) => {
  if (e)
    try {
      return await s.post(`${c}/api/orders/post-one`, e, {
        headers: d()
      }), !0;
    } catch (r) {
      return console.error("There was a problem posting the data:", r), !1;
    }
}, F = async (e) => {
  try {
    return (await s.get(
      `${c}/api/invoice/search?phrase=${e}`,
      { headers: d() }
    )).data.result;
  } catch (r) {
    console.error("There was a problem posting the data:", r);
  }
}, Q = {
  DELETE: H,
  GET: B,
  POST: z,
  SEARCH: F
}, N = async (e) => {
  try {
    await s.delete(`${c}/api/category/delete-one?id=${e}`);
  } catch (r) {
    console.error(r);
  }
}, M = async () => {
  try {
    const e = await s.get(`${c}/api/category/get-all`), { data: r } = await e.data;
    return { data: r };
  } catch (e) {
    console.error(e);
  }
}, _ = async (e) => {
  if (e)
    try {
      await s.post(`${c}/api/category/post-one`, e, {
        headers: d()
      });
    } catch (r) {
      console.error("There was a problem posting the data:", r);
    }
}, W = {
  DELETE: N,
  GET: M,
  POST: _
  // SEARCH: clientSearchProduct,
};
export {
  W as Category,
  Q as Invoice,
  q as Product,
  Y as config
};
