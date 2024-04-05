(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const a of r.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = t(i);
    fetch(i.href, r);
  }
})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const fa = "162",
  hi = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  di = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  Hl = 0,
  Xa = 1,
  Gl = 2,
  Vc = 1,
  Wc = 2,
  vn = 3,
  En = 0,
  Ot = 1,
  an = 2,
  zn = 0,
  Ni = 1,
  qa = 2,
  Ya = 3,
  ja = 4,
  kl = 5,
  ti = 100,
  Vl = 101,
  Wl = 102,
  Ka = 103,
  Za = 104,
  Xl = 200,
  ql = 201,
  Yl = 202,
  jl = 203,
  Jr = 204,
  Qr = 205,
  Kl = 206,
  Zl = 207,
  $l = 208,
  Jl = 209,
  Ql = 210,
  eu = 211,
  tu = 212,
  nu = 213,
  iu = 214,
  su = 0,
  ru = 1,
  au = 2,
  Ks = 3,
  ou = 4,
  cu = 5,
  lu = 6,
  uu = 7,
  pa = 0,
  hu = 1,
  du = 2,
  Hn = 0,
  fu = 1,
  pu = 2,
  mu = 3,
  Xc = 4,
  gu = 5,
  _u = 6,
  xu = 7,
  $a = "attached",
  vu = "detached",
  qc = 300,
  Fi = 301,
  Bi = 302,
  ea = 303,
  ta = 304,
  ir = 306,
  zi = 1e3,
  qt = 1001,
  Zs = 1002,
  Et = 1003,
  na = 1004,
  Pi = 1005,
  Pt = 1006,
  Ys = 1007,
  Mn = 1008,
  Gn = 1009,
  Mu = 1010,
  Su = 1011,
  ma = 1012,
  Yc = 1013,
  On = 1014,
  Jt = 1015,
  us = 1016,
  jc = 1017,
  Kc = 1018,
  si = 1020,
  yu = 1021,
  Yt = 1023,
  Eu = 1024,
  Tu = 1025,
  ri = 1026,
  Hi = 1027,
  Zc = 1028,
  $c = 1029,
  Au = 1030,
  Jc = 1031,
  Qc = 1033,
  dr = 33776,
  fr = 33777,
  pr = 33778,
  mr = 33779,
  Ja = 35840,
  Qa = 35841,
  eo = 35842,
  to = 35843,
  el = 36196,
  no = 37492,
  io = 37496,
  so = 37808,
  ro = 37809,
  ao = 37810,
  oo = 37811,
  co = 37812,
  lo = 37813,
  uo = 37814,
  ho = 37815,
  fo = 37816,
  po = 37817,
  mo = 37818,
  go = 37819,
  _o = 37820,
  xo = 37821,
  gr = 36492,
  vo = 36494,
  Mo = 36495,
  bu = 36283,
  So = 36284,
  yo = 36285,
  Eo = 36286,
  hs = 2300,
  Gi = 2301,
  _r = 2302,
  To = 2400,
  Ao = 2401,
  bo = 2402,
  wu = 2500,
  Ru = 0,
  tl = 1,
  ia = 2,
  Cu = 3200,
  Lu = 3201,
  ga = 0,
  Pu = 1,
  Un = "",
  Nt = "srgb",
  bt = "srgb-linear",
  _a = "display-p3",
  sr = "display-p3-linear",
  $s = "linear",
  at = "srgb",
  Js = "rec709",
  Qs = "p3",
  fi = 7680,
  wo = 519,
  Iu = 512,
  Du = 513,
  Nu = 514,
  nl = 515,
  Uu = 516,
  Ou = 517,
  Fu = 518,
  Bu = 519,
  sa = 35044,
  Ro = "300 es",
  ra = 1035,
  Sn = 2e3,
  er = 2001;
class ci {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, a = i.length; r < a; r++) i[r].call(this, e);
      e.target = null;
    }
  }
}
const Ct = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
let Co = 1234567;
const os = Math.PI / 180,
  ki = 180 / Math.PI;
function en() {
  const s = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    Ct[s & 255] +
    Ct[(s >> 8) & 255] +
    Ct[(s >> 16) & 255] +
    Ct[(s >> 24) & 255] +
    "-" +
    Ct[e & 255] +
    Ct[(e >> 8) & 255] +
    "-" +
    Ct[((e >> 16) & 15) | 64] +
    Ct[(e >> 24) & 255] +
    "-" +
    Ct[(t & 63) | 128] +
    Ct[(t >> 8) & 255] +
    "-" +
    Ct[(t >> 16) & 255] +
    Ct[(t >> 24) & 255] +
    Ct[n & 255] +
    Ct[(n >> 8) & 255] +
    Ct[(n >> 16) & 255] +
    Ct[(n >> 24) & 255]
  ).toLowerCase();
}
function At(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function xa(s, e) {
  return ((s % e) + e) % e;
}
function zu(s, e, t, n, i) {
  return n + ((s - e) * (i - n)) / (t - e);
}
function Hu(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function cs(s, e, t) {
  return (1 - t) * s + t * e;
}
function Gu(s, e, t, n) {
  return cs(s, e, 1 - Math.exp(-t * n));
}
function ku(s, e = 1) {
  return e - Math.abs(xa(s, e * 2) - e);
}
function Vu(s, e, t) {
  return s <= e
    ? 0
    : s >= t
    ? 1
    : ((s = (s - e) / (t - e)), s * s * (3 - 2 * s));
}
function Wu(s, e, t) {
  return s <= e
    ? 0
    : s >= t
    ? 1
    : ((s = (s - e) / (t - e)), s * s * s * (s * (s * 6 - 15) + 10));
}
function Xu(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function qu(s, e) {
  return s + Math.random() * (e - s);
}
function Yu(s) {
  return s * (0.5 - Math.random());
}
function ju(s) {
  s !== void 0 && (Co = s);
  let e = (Co += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function Ku(s) {
  return s * os;
}
function Zu(s) {
  return s * ki;
}
function aa(s) {
  return (s & (s - 1)) === 0 && s !== 0;
}
function $u(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function tr(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function Ju(s, e, t, n, i) {
  const r = Math.cos,
    a = Math.sin,
    o = r(t / 2),
    c = a(t / 2),
    l = r((e + n) / 2),
    u = a((e + n) / 2),
    h = r((e - n) / 2),
    d = a((e - n) / 2),
    m = r((n - e) / 2),
    g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(o * u, c * h, c * d, o * l);
      break;
    case "YZY":
      s.set(c * d, o * u, c * h, o * l);
      break;
    case "ZXZ":
      s.set(c * h, c * d, o * u, o * l);
      break;
    case "XZX":
      s.set(o * u, c * g, c * m, o * l);
      break;
    case "YXY":
      s.set(c * m, o * u, c * g, o * l);
      break;
    case "ZYZ":
      s.set(c * g, c * m, o * u, o * l);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          i
      );
  }
}
function Qt(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Qe(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const il = {
  DEG2RAD: os,
  RAD2DEG: ki,
  generateUUID: en,
  clamp: At,
  euclideanModulo: xa,
  mapLinear: zu,
  inverseLerp: Hu,
  lerp: cs,
  damp: Gu,
  pingpong: ku,
  smoothstep: Vu,
  smootherstep: Wu,
  randInt: Xu,
  randFloat: qu,
  randFloatSpread: Yu,
  seededRandom: ju,
  degToRad: Ku,
  radToDeg: Zu,
  isPowerOfTwo: aa,
  ceilPowerOfTwo: $u,
  floorPowerOfTwo: tr,
  setQuaternionFromProperEuler: Ju,
  normalize: Qe,
  denormalize: Qt,
};
class be {
  constructor(e = 0, t = 0) {
    (be.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(At(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = this.x - e.x,
      a = this.y - e.y;
    return (this.x = r * n - a * i + e.x), (this.y = r * i + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class ke {
  constructor(e, t, n, i, r, a, o, c, l) {
    (ke.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, i, r, a, o, c, l);
  }
  set(e, t, n, i, r, a, o, c, l) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = i),
      (u[2] = o),
      (u[3] = t),
      (u[4] = r),
      (u[5] = c),
      (u[6] = n),
      (u[7] = a),
      (u[8] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      o = n[3],
      c = n[6],
      l = n[1],
      u = n[4],
      h = n[7],
      d = n[2],
      m = n[5],
      g = n[8],
      x = i[0],
      p = i[3],
      f = i[6],
      E = i[1],
      M = i[4],
      y = i[7],
      P = i[2],
      C = i[5],
      b = i[8];
    return (
      (r[0] = a * x + o * E + c * P),
      (r[3] = a * p + o * M + c * C),
      (r[6] = a * f + o * y + c * b),
      (r[1] = l * x + u * E + h * P),
      (r[4] = l * p + u * M + h * C),
      (r[7] = l * f + u * y + h * b),
      (r[2] = d * x + m * E + g * P),
      (r[5] = d * p + m * M + g * C),
      (r[8] = d * f + m * y + g * b),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      u = e[8];
    return (
      t * a * u - t * o * l - n * r * u + n * o * c + i * r * l - i * a * c
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      u = e[8],
      h = u * a - o * l,
      d = o * c - u * r,
      m = l * r - a * c,
      g = t * h + n * d + i * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / g;
    return (
      (e[0] = h * x),
      (e[1] = (i * l - u * n) * x),
      (e[2] = (o * n - i * a) * x),
      (e[3] = d * x),
      (e[4] = (u * t - i * c) * x),
      (e[5] = (i * r - o * t) * x),
      (e[6] = m * x),
      (e[7] = (n * c - l * t) * x),
      (e[8] = (a * t - n * r) * x),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, r, a, o) {
    const c = Math.cos(r),
      l = Math.sin(r);
    return (
      this.set(
        n * c,
        n * l,
        -n * (c * a + l * o) + a + e,
        -i * l,
        i * c,
        -i * (-l * a + c * o) + o + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(xr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(xr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(xr.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const xr = new ke();
function sl(s) {
  for (let e = s.length - 1; e >= 0; --e) if (s[e] >= 65535) return !0;
  return !1;
}
function ds(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function Qu() {
  const s = ds("canvas");
  return (s.style.display = "block"), s;
}
const Lo = {};
function rl(s) {
  s in Lo || ((Lo[s] = !0), console.warn(s));
}
const Po = new ke().set(
    0.8224621,
    0.177538,
    0,
    0.0331941,
    0.9668058,
    0,
    0.0170827,
    0.0723974,
    0.9105199
  ),
  Io = new ke().set(
    1.2249401,
    -0.2249404,
    0,
    -0.0420569,
    1.0420571,
    0,
    -0.0196376,
    -0.0786361,
    1.0982735
  ),
  vs = {
    [bt]: {
      transfer: $s,
      primaries: Js,
      toReference: (s) => s,
      fromReference: (s) => s,
    },
    [Nt]: {
      transfer: at,
      primaries: Js,
      toReference: (s) => s.convertSRGBToLinear(),
      fromReference: (s) => s.convertLinearToSRGB(),
    },
    [sr]: {
      transfer: $s,
      primaries: Qs,
      toReference: (s) => s.applyMatrix3(Io),
      fromReference: (s) => s.applyMatrix3(Po),
    },
    [_a]: {
      transfer: at,
      primaries: Qs,
      toReference: (s) => s.convertSRGBToLinear().applyMatrix3(Io),
      fromReference: (s) => s.applyMatrix3(Po).convertLinearToSRGB(),
    },
  },
  eh = new Set([bt, sr]),
  $e = {
    enabled: !0,
    _workingColorSpace: bt,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(s) {
      if (!eh.has(s))
        throw new Error(`Unsupported working color space, "${s}".`);
      this._workingColorSpace = s;
    },
    convert: function (s, e, t) {
      if (this.enabled === !1 || e === t || !e || !t) return s;
      const n = vs[e].toReference,
        i = vs[t].fromReference;
      return i(n(s));
    },
    fromWorkingColorSpace: function (s, e) {
      return this.convert(s, this._workingColorSpace, e);
    },
    toWorkingColorSpace: function (s, e) {
      return this.convert(s, e, this._workingColorSpace);
    },
    getPrimaries: function (s) {
      return vs[s].primaries;
    },
    getTransfer: function (s) {
      return s === Un ? $s : vs[s].transfer;
    },
  };
function Ui(s) {
  return s < 0.04045
    ? s * 0.0773993808
    : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function vr(s) {
  return s < 0.0031308 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
let pi;
class al {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      pi === void 0 && (pi = ds("canvas")),
        (pi.width = e.width),
        (pi.height = e.height);
      const n = pi.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = pi);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = ds("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        r = i.data;
      for (let a = 0; a < r.length; a++) r[a] = Ui(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(Ui(t[n] / 255) * 255))
          : (t[n] = Ui(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
let th = 0;
class ol {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: th++ }),
      (this.uuid = en()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? r.push(Mr(i[a].image)) : r.push(Mr(i[a]));
      } else r = Mr(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Mr(s) {
  return (typeof HTMLImageElement < "u" && s instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && s instanceof ImageBitmap)
    ? al.getDataURL(s)
    : s.data
    ? {
        data: Array.from(s.data),
        width: s.width,
        height: s.height,
        type: s.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let nh = 0;
class Tt extends ci {
  constructor(
    e = Tt.DEFAULT_IMAGE,
    t = Tt.DEFAULT_MAPPING,
    n = qt,
    i = qt,
    r = Pt,
    a = Mn,
    o = Yt,
    c = Gn,
    l = Tt.DEFAULT_ANISOTROPY,
    u = Un
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: nh++ }),
      (this.uuid = en()),
      (this.name = ""),
      (this.source = new ol(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = r),
      (this.minFilter = a),
      (this.anisotropy = l),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = c),
      (this.offset = new be(0, 0)),
      (this.repeat = new be(1, 1)),
      (this.center = new be(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new ke()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = u),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== qc) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case zi:
          e.x = e.x - Math.floor(e.x);
          break;
        case qt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Zs:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case zi:
          e.y = e.y - Math.floor(e.y);
          break;
        case qt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Zs:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
}
Tt.DEFAULT_IMAGE = null;
Tt.DEFAULT_MAPPING = qc;
Tt.DEFAULT_ANISOTROPY = 1;
class it {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (it.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r),
      (this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r),
      (this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r),
      (this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const c = e.elements,
      l = c[0],
      u = c[4],
      h = c[8],
      d = c[1],
      m = c[5],
      g = c[9],
      x = c[2],
      p = c[6],
      f = c[10];
    if (
      Math.abs(u - d) < 0.01 &&
      Math.abs(h - x) < 0.01 &&
      Math.abs(g - p) < 0.01
    ) {
      if (
        Math.abs(u + d) < 0.1 &&
        Math.abs(h + x) < 0.1 &&
        Math.abs(g + p) < 0.1 &&
        Math.abs(l + m + f - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const M = (l + 1) / 2,
        y = (m + 1) / 2,
        P = (f + 1) / 2,
        C = (u + d) / 4,
        b = (h + x) / 4,
        F = (g + p) / 4;
      return (
        M > y && M > P
          ? M < 0.01
            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(M)), (i = C / n), (r = b / n))
          : y > P
          ? y < 0.01
            ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
            : ((i = Math.sqrt(y)), (n = C / i), (r = F / i))
          : P < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
          : ((r = Math.sqrt(P)), (n = b / r), (i = F / r)),
        this.set(n, i, r, t),
        this
      );
    }
    let E = Math.sqrt(
      (p - g) * (p - g) + (h - x) * (h - x) + (d - u) * (d - u)
    );
    return (
      Math.abs(E) < 0.001 && (E = 1),
      (this.x = (p - g) / E),
      (this.y = (h - x) / E),
      (this.z = (d - u) / E),
      (this.w = Math.acos((l + m + f - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class ih extends ci {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new it(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new it(0, 0, e, t));
    const i = { width: e, height: t, depth: 1 };
    n = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: Pt,
        depthBuffer: !0,
        stencilBuffer: !1,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      n
    );
    const r = new Tt(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.colorSpace
    );
    (r.flipY = !1),
      (r.generateMipmaps = n.generateMipmaps),
      (r.internalFormat = n.internalFormat),
      (this.textures = []);
    const a = n.count;
    for (let o = 0; o < a; o++)
      (this.textures[o] = r.clone()),
        (this.textures[o].isRenderTargetTexture = !0);
    (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      (this.width = e), (this.height = t), (this.depth = n);
      for (let i = 0, r = this.textures.length; i < r; i++)
        (this.textures[i].image.width = e),
          (this.textures[i].image.height = t),
          (this.textures[i].image.depth = n);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0);
    for (let n = 0, i = e.textures.length; n < i; n++)
      (this.textures[n] = e.textures[n].clone()),
        (this.textures[n].isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new ol(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class ai extends ih {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), (this.isWebGLRenderTarget = !0);
  }
}
class cl extends Tt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = Et),
      (this.minFilter = Et),
      (this.wrapR = qt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class sh extends Tt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = Et),
      (this.minFilter = Et),
      (this.wrapR = qt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class cn {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(e, t, n, i, r, a, o) {
    let c = n[i + 0],
      l = n[i + 1],
      u = n[i + 2],
      h = n[i + 3];
    const d = r[a + 0],
      m = r[a + 1],
      g = r[a + 2],
      x = r[a + 3];
    if (o === 0) {
      (e[t + 0] = c), (e[t + 1] = l), (e[t + 2] = u), (e[t + 3] = h);
      return;
    }
    if (o === 1) {
      (e[t + 0] = d), (e[t + 1] = m), (e[t + 2] = g), (e[t + 3] = x);
      return;
    }
    if (h !== x || c !== d || l !== m || u !== g) {
      let p = 1 - o;
      const f = c * d + l * m + u * g + h * x,
        E = f >= 0 ? 1 : -1,
        M = 1 - f * f;
      if (M > Number.EPSILON) {
        const P = Math.sqrt(M),
          C = Math.atan2(P, f * E);
        (p = Math.sin(p * C) / P), (o = Math.sin(o * C) / P);
      }
      const y = o * E;
      if (
        ((c = c * p + d * y),
        (l = l * p + m * y),
        (u = u * p + g * y),
        (h = h * p + x * y),
        p === 1 - o)
      ) {
        const P = 1 / Math.sqrt(c * c + l * l + u * u + h * h);
        (c *= P), (l *= P), (u *= P), (h *= P);
      }
    }
    (e[t] = c), (e[t + 1] = l), (e[t + 2] = u), (e[t + 3] = h);
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const o = n[i],
      c = n[i + 1],
      l = n[i + 2],
      u = n[i + 3],
      h = r[a],
      d = r[a + 1],
      m = r[a + 2],
      g = r[a + 3];
    return (
      (e[t] = o * g + u * h + c * m - l * d),
      (e[t + 1] = c * g + u * d + l * h - o * m),
      (e[t + 2] = l * g + u * m + o * d - c * h),
      (e[t + 3] = u * g - o * h - c * d - l * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const n = e._x,
      i = e._y,
      r = e._z,
      a = e._order,
      o = Math.cos,
      c = Math.sin,
      l = o(n / 2),
      u = o(i / 2),
      h = o(r / 2),
      d = c(n / 2),
      m = c(i / 2),
      g = c(r / 2);
    switch (a) {
      case "XYZ":
        (this._x = d * u * h + l * m * g),
          (this._y = l * m * h - d * u * g),
          (this._z = l * u * g + d * m * h),
          (this._w = l * u * h - d * m * g);
        break;
      case "YXZ":
        (this._x = d * u * h + l * m * g),
          (this._y = l * m * h - d * u * g),
          (this._z = l * u * g - d * m * h),
          (this._w = l * u * h + d * m * g);
        break;
      case "ZXY":
        (this._x = d * u * h - l * m * g),
          (this._y = l * m * h + d * u * g),
          (this._z = l * u * g + d * m * h),
          (this._w = l * u * h - d * m * g);
        break;
      case "ZYX":
        (this._x = d * u * h - l * m * g),
          (this._y = l * m * h + d * u * g),
          (this._z = l * u * g - d * m * h),
          (this._w = l * u * h + d * m * g);
        break;
      case "YZX":
        (this._x = d * u * h + l * m * g),
          (this._y = l * m * h + d * u * g),
          (this._z = l * u * g - d * m * h),
          (this._w = l * u * h - d * m * g);
        break;
      case "XZY":
        (this._x = d * u * h - l * m * g),
          (this._y = l * m * h - d * u * g),
          (this._z = l * u * g + d * m * h),
          (this._w = l * u * h + d * m * g);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a
        );
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      r = t[8],
      a = t[1],
      o = t[5],
      c = t[9],
      l = t[2],
      u = t[6],
      h = t[10],
      d = n + o + h;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      (this._w = 0.25 / m),
        (this._x = (u - c) * m),
        (this._y = (r - l) * m),
        (this._z = (a - i) * m);
    } else if (n > o && n > h) {
      const m = 2 * Math.sqrt(1 + n - o - h);
      (this._w = (u - c) / m),
        (this._x = 0.25 * m),
        (this._y = (i + a) / m),
        (this._z = (r + l) / m);
    } else if (o > h) {
      const m = 2 * Math.sqrt(1 + o - n - h);
      (this._w = (r - l) / m),
        (this._x = (i + a) / m),
        (this._y = 0.25 * m),
        (this._z = (c + u) / m);
    } else {
      const m = 2 * Math.sqrt(1 + h - n - o);
      (this._w = (a - i) / m),
        (this._x = (r + l) / m),
        (this._y = (c + u) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(At(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      r = e._z,
      a = e._w,
      o = t._x,
      c = t._y,
      l = t._z,
      u = t._w;
    return (
      (this._x = n * u + a * o + i * l - r * c),
      (this._y = i * u + a * c + r * o - n * l),
      (this._z = r * u + a * l + n * c - i * o),
      (this._w = a * u - n * o - i * c - r * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      r = this._z,
      a = this._w;
    let o = a * e._w + n * e._x + i * e._y + r * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return (this._w = a), (this._x = n), (this._y = i), (this._z = r), this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * a + t * this._w),
        (this._x = m * n + t * this._x),
        (this._y = m * i + t * this._y),
        (this._z = m * r + t * this._z),
        this.normalize(),
        this
      );
    }
    const l = Math.sqrt(c),
      u = Math.atan2(l, o),
      h = Math.sin((1 - t) * u) / l,
      d = Math.sin(t * u) / l;
    return (
      (this._w = a * h + this._w * d),
      (this._x = n * h + this._x * d),
      (this._y = i * h + this._y * d),
      (this._z = r * h + this._z * d),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      i = Math.sqrt(1 - n),
      r = Math.sqrt(n);
    return this.set(
      i * Math.sin(e),
      i * Math.cos(e),
      r * Math.sin(t),
      r * Math.cos(t)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class L {
  constructor(e = 0, t = 0, n = 0) {
    (L.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Do.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Do.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6] * i),
      (this.y = r[1] * t + r[4] * n + r[7] * i),
      (this.z = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements,
      a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return (
      (this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a),
      (this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a),
      (this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.x,
      a = e.y,
      o = e.z,
      c = e.w,
      l = 2 * (a * i - o * n),
      u = 2 * (o * t - r * i),
      h = 2 * (r * n - a * t);
    return (
      (this.x = t + c * l + a * h - o * u),
      (this.y = n + c * u + o * l - r * h),
      (this.z = i + c * h + r * u - a * l),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[4] * n + r[8] * i),
      (this.y = r[1] * t + r[5] * n + r[9] * i),
      (this.z = r[2] * t + r[6] * n + r[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      r = e.z,
      a = t.x,
      o = t.y,
      c = t.z;
    return (
      (this.x = i * c - r * o),
      (this.y = r * a - n * c),
      (this.z = n * o - i * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Sr.copy(this).projectOnVector(e), this.sub(Sr);
  }
  reflect(e) {
    return this.sub(Sr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(At(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      n = Math.sqrt(1 - t * t);
    return (
      (this.x = n * Math.cos(e)), (this.y = t), (this.z = n * Math.sin(e)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Sr = new L(),
  Do = new cn();
class Tn {
  constructor(
    e = new L(1 / 0, 1 / 0, 1 / 0),
    t = new L(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Kt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Kt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Kt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = r.count; a < o; a++)
          e.isMesh === !0
            ? e.getVertexPosition(a, Kt)
            : Kt.fromBufferAttribute(r, a),
            Kt.applyMatrix4(e.matrixWorld),
            this.expandByPoint(Kt);
      else
        e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            Ms.copy(e.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            Ms.copy(n.boundingBox)),
          Ms.applyMatrix4(e.matrixWorld),
          this.union(Ms);
    }
    const i = e.children;
    for (let r = 0, a = i.length; r < a; r++) this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Kt),
      Kt.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Qi),
      Ss.subVectors(this.max, Qi),
      mi.subVectors(e.a, Qi),
      gi.subVectors(e.b, Qi),
      _i.subVectors(e.c, Qi),
      bn.subVectors(gi, mi),
      wn.subVectors(_i, gi),
      Yn.subVectors(mi, _i);
    let t = [
      0,
      -bn.z,
      bn.y,
      0,
      -wn.z,
      wn.y,
      0,
      -Yn.z,
      Yn.y,
      bn.z,
      0,
      -bn.x,
      wn.z,
      0,
      -wn.x,
      Yn.z,
      0,
      -Yn.x,
      -bn.y,
      bn.x,
      0,
      -wn.y,
      wn.x,
      0,
      -Yn.y,
      Yn.x,
      0,
    ];
    return !yr(t, mi, gi, _i, Ss) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !yr(t, mi, gi, _i, Ss))
      ? !1
      : (ys.crossVectors(bn, wn),
        (t = [ys.x, ys.y, ys.z]),
        yr(t, mi, gi, _i, Ss));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Kt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(Kt).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (fn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        fn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        fn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        fn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        fn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        fn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        fn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        fn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(fn),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const fn = [
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
  ],
  Kt = new L(),
  Ms = new Tn(),
  mi = new L(),
  gi = new L(),
  _i = new L(),
  bn = new L(),
  wn = new L(),
  Yn = new L(),
  Qi = new L(),
  Ss = new L(),
  ys = new L(),
  jn = new L();
function yr(s, e, t, n, i) {
  for (let r = 0, a = s.length - 3; r <= a; r += 3) {
    jn.fromArray(s, r);
    const o =
        i.x * Math.abs(jn.x) + i.y * Math.abs(jn.y) + i.z * Math.abs(jn.z),
      c = e.dot(jn),
      l = t.dot(jn),
      u = n.dot(jn);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > o) return !1;
  }
  return !0;
}
const rh = new Tn(),
  es = new L(),
  Er = new L();
class ln {
  constructor(e = new L(), t = -1) {
    (this.isSphere = !0), (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : rh.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, a = e.length; r < a; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    es.subVectors(e, this.center);
    const t = es.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.addScaledVector(es, i / n), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (Er.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(es.copy(e.center).add(Er)),
            this.expandByPoint(es.copy(e.center).sub(Er))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const pn = new L(),
  Tr = new L(),
  Es = new L(),
  Rn = new L(),
  Ar = new L(),
  Ts = new L(),
  br = new L();
class ps {
  constructor(e = new L(), t = new L(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, pn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = pn.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (pn.copy(this.origin).addScaledVector(this.direction, t),
        pn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Tr.copy(e).add(t).multiplyScalar(0.5),
      Es.copy(t).sub(e).normalize(),
      Rn.copy(this.origin).sub(Tr);
    const r = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(Es),
      o = Rn.dot(this.direction),
      c = -Rn.dot(Es),
      l = Rn.lengthSq(),
      u = Math.abs(1 - a * a);
    let h, d, m, g;
    if (u > 0)
      if (((h = a * c - o), (d = a * o - c), (g = r * u), h >= 0))
        if (d >= -g)
          if (d <= g) {
            const x = 1 / u;
            (h *= x),
              (d *= x),
              (m = h * (h + a * d + 2 * o) + d * (a * h + d + 2 * c) + l);
          } else
            (d = r),
              (h = Math.max(0, -(a * d + o))),
              (m = -h * h + d * (d + 2 * c) + l);
        else
          (d = -r),
            (h = Math.max(0, -(a * d + o))),
            (m = -h * h + d * (d + 2 * c) + l);
      else
        d <= -g
          ? ((h = Math.max(0, -(-a * r + o))),
            (d = h > 0 ? -r : Math.min(Math.max(-r, -c), r)),
            (m = -h * h + d * (d + 2 * c) + l))
          : d <= g
          ? ((h = 0),
            (d = Math.min(Math.max(-r, -c), r)),
            (m = d * (d + 2 * c) + l))
          : ((h = Math.max(0, -(a * r + o))),
            (d = h > 0 ? r : Math.min(Math.max(-r, -c), r)),
            (m = -h * h + d * (d + 2 * c) + l));
    else
      (d = a > 0 ? -r : r),
        (h = Math.max(0, -(a * d + o))),
        (m = -h * h + d * (d + 2 * c) + l);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, h),
      i && i.copy(Tr).addScaledVector(Es, d),
      m
    );
  }
  intersectSphere(e, t) {
    pn.subVectors(e.center, this.origin);
    const n = pn.dot(this.direction),
      i = pn.dot(pn) - n * n,
      r = e.radius * e.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i),
      o = n - a,
      c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, a, o, c;
    const l = 1 / this.direction.x,
      u = 1 / this.direction.y,
      h = 1 / this.direction.z,
      d = this.origin;
    return (
      l >= 0
        ? ((n = (e.min.x - d.x) * l), (i = (e.max.x - d.x) * l))
        : ((n = (e.max.x - d.x) * l), (i = (e.min.x - d.x) * l)),
      u >= 0
        ? ((r = (e.min.y - d.y) * u), (a = (e.max.y - d.y) * u))
        : ((r = (e.max.y - d.y) * u), (a = (e.min.y - d.y) * u)),
      n > a ||
      r > i ||
      ((r > n || isNaN(n)) && (n = r),
      (a < i || isNaN(i)) && (i = a),
      h >= 0
        ? ((o = (e.min.z - d.z) * h), (c = (e.max.z - d.z) * h))
        : ((o = (e.max.z - d.z) * h), (c = (e.min.z - d.z) * h)),
      n > c || o > i) ||
      ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, pn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    Ar.subVectors(t, e), Ts.subVectors(n, e), br.crossVectors(Ar, Ts);
    let a = this.direction.dot(br),
      o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0) (o = -1), (a = -a);
    else return null;
    Rn.subVectors(this.origin, e);
    const c = o * this.direction.dot(Ts.crossVectors(Rn, Ts));
    if (c < 0) return null;
    const l = o * this.direction.dot(Ar.cross(Rn));
    if (l < 0 || c + l > a) return null;
    const u = -o * Rn.dot(br);
    return u < 0 ? null : this.at(u / a, r);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ve {
  constructor(e, t, n, i, r, a, o, c, l, u, h, d, m, g, x, p) {
    (Ve.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, i, r, a, o, c, l, u, h, d, m, g, x, p);
  }
  set(e, t, n, i, r, a, o, c, l, u, h, d, m, g, x, p) {
    const f = this.elements;
    return (
      (f[0] = e),
      (f[4] = t),
      (f[8] = n),
      (f[12] = i),
      (f[1] = r),
      (f[5] = a),
      (f[9] = o),
      (f[13] = c),
      (f[2] = l),
      (f[6] = u),
      (f[10] = h),
      (f[14] = d),
      (f[3] = m),
      (f[7] = g),
      (f[11] = x),
      (f[15] = p),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Ve().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / xi.setFromMatrixColumn(e, 0).length(),
      r = 1 / xi.setFromMatrixColumn(e, 1).length(),
      a = 1 / xi.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * r),
      (t[5] = n[5] * r),
      (t[6] = n[6] * r),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      c = Math.cos(i),
      l = Math.sin(i),
      u = Math.cos(r),
      h = Math.sin(r);
    if (e.order === "XYZ") {
      const d = a * u,
        m = a * h,
        g = o * u,
        x = o * h;
      (t[0] = c * u),
        (t[4] = -c * h),
        (t[8] = l),
        (t[1] = m + g * l),
        (t[5] = d - x * l),
        (t[9] = -o * c),
        (t[2] = x - d * l),
        (t[6] = g + m * l),
        (t[10] = a * c);
    } else if (e.order === "YXZ") {
      const d = c * u,
        m = c * h,
        g = l * u,
        x = l * h;
      (t[0] = d + x * o),
        (t[4] = g * o - m),
        (t[8] = a * l),
        (t[1] = a * h),
        (t[5] = a * u),
        (t[9] = -o),
        (t[2] = m * o - g),
        (t[6] = x + d * o),
        (t[10] = a * c);
    } else if (e.order === "ZXY") {
      const d = c * u,
        m = c * h,
        g = l * u,
        x = l * h;
      (t[0] = d - x * o),
        (t[4] = -a * h),
        (t[8] = g + m * o),
        (t[1] = m + g * o),
        (t[5] = a * u),
        (t[9] = x - d * o),
        (t[2] = -a * l),
        (t[6] = o),
        (t[10] = a * c);
    } else if (e.order === "ZYX") {
      const d = a * u,
        m = a * h,
        g = o * u,
        x = o * h;
      (t[0] = c * u),
        (t[4] = g * l - m),
        (t[8] = d * l + x),
        (t[1] = c * h),
        (t[5] = x * l + d),
        (t[9] = m * l - g),
        (t[2] = -l),
        (t[6] = o * c),
        (t[10] = a * c);
    } else if (e.order === "YZX") {
      const d = a * c,
        m = a * l,
        g = o * c,
        x = o * l;
      (t[0] = c * u),
        (t[4] = x - d * h),
        (t[8] = g * h + m),
        (t[1] = h),
        (t[5] = a * u),
        (t[9] = -o * u),
        (t[2] = -l * u),
        (t[6] = m * h + g),
        (t[10] = d - x * h);
    } else if (e.order === "XZY") {
      const d = a * c,
        m = a * l,
        g = o * c,
        x = o * l;
      (t[0] = c * u),
        (t[4] = -h),
        (t[8] = l * u),
        (t[1] = d * h + x),
        (t[5] = a * u),
        (t[9] = m * h - g),
        (t[2] = g * h - m),
        (t[6] = o * u),
        (t[10] = x * h + d);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(ah, e, oh);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      Gt.subVectors(e, t),
      Gt.lengthSq() === 0 && (Gt.z = 1),
      Gt.normalize(),
      Cn.crossVectors(n, Gt),
      Cn.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Gt.x += 1e-4) : (Gt.z += 1e-4),
        Gt.normalize(),
        Cn.crossVectors(n, Gt)),
      Cn.normalize(),
      As.crossVectors(Gt, Cn),
      (i[0] = Cn.x),
      (i[4] = As.x),
      (i[8] = Gt.x),
      (i[1] = Cn.y),
      (i[5] = As.y),
      (i[9] = Gt.y),
      (i[2] = Cn.z),
      (i[6] = As.z),
      (i[10] = Gt.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      o = n[4],
      c = n[8],
      l = n[12],
      u = n[1],
      h = n[5],
      d = n[9],
      m = n[13],
      g = n[2],
      x = n[6],
      p = n[10],
      f = n[14],
      E = n[3],
      M = n[7],
      y = n[11],
      P = n[15],
      C = i[0],
      b = i[4],
      F = i[8],
      $ = i[12],
      v = i[1],
      w = i[5],
      re = i[9],
      Q = i[13],
      I = i[2],
      W = i[6],
      k = i[10],
      j = i[14],
      V = i[3],
      Y = i[7],
      K = i[11],
      oe = i[15];
    return (
      (r[0] = a * C + o * v + c * I + l * V),
      (r[4] = a * b + o * w + c * W + l * Y),
      (r[8] = a * F + o * re + c * k + l * K),
      (r[12] = a * $ + o * Q + c * j + l * oe),
      (r[1] = u * C + h * v + d * I + m * V),
      (r[5] = u * b + h * w + d * W + m * Y),
      (r[9] = u * F + h * re + d * k + m * K),
      (r[13] = u * $ + h * Q + d * j + m * oe),
      (r[2] = g * C + x * v + p * I + f * V),
      (r[6] = g * b + x * w + p * W + f * Y),
      (r[10] = g * F + x * re + p * k + f * K),
      (r[14] = g * $ + x * Q + p * j + f * oe),
      (r[3] = E * C + M * v + y * I + P * V),
      (r[7] = E * b + M * w + y * W + P * Y),
      (r[11] = E * F + M * re + y * k + P * K),
      (r[15] = E * $ + M * Q + y * j + P * oe),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      r = e[12],
      a = e[1],
      o = e[5],
      c = e[9],
      l = e[13],
      u = e[2],
      h = e[6],
      d = e[10],
      m = e[14],
      g = e[3],
      x = e[7],
      p = e[11],
      f = e[15];
    return (
      g *
        (+r * c * h -
          i * l * h -
          r * o * d +
          n * l * d +
          i * o * m -
          n * c * m) +
      x *
        (+t * c * m -
          t * l * d +
          r * a * d -
          i * a * m +
          i * l * u -
          r * c * u) +
      p *
        (+t * l * h -
          t * o * m -
          r * a * h +
          n * a * m +
          r * o * u -
          n * l * u) +
      f *
        (-i * o * u - t * c * h + t * o * d + i * a * h - n * a * d + n * c * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      c = e[6],
      l = e[7],
      u = e[8],
      h = e[9],
      d = e[10],
      m = e[11],
      g = e[12],
      x = e[13],
      p = e[14],
      f = e[15],
      E = h * p * l - x * d * l + x * c * m - o * p * m - h * c * f + o * d * f,
      M = g * d * l - u * p * l - g * c * m + a * p * m + u * c * f - a * d * f,
      y = u * x * l - g * h * l + g * o * m - a * x * m - u * o * f + a * h * f,
      P = g * h * c - u * x * c - g * o * d + a * x * d + u * o * p - a * h * p,
      C = t * E + n * M + i * y + r * P;
    if (C === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / C;
    return (
      (e[0] = E * b),
      (e[1] =
        (x * d * r -
          h * p * r -
          x * i * m +
          n * p * m +
          h * i * f -
          n * d * f) *
        b),
      (e[2] =
        (o * p * r -
          x * c * r +
          x * i * l -
          n * p * l -
          o * i * f +
          n * c * f) *
        b),
      (e[3] =
        (h * c * r -
          o * d * r -
          h * i * l +
          n * d * l +
          o * i * m -
          n * c * m) *
        b),
      (e[4] = M * b),
      (e[5] =
        (u * p * r -
          g * d * r +
          g * i * m -
          t * p * m -
          u * i * f +
          t * d * f) *
        b),
      (e[6] =
        (g * c * r -
          a * p * r -
          g * i * l +
          t * p * l +
          a * i * f -
          t * c * f) *
        b),
      (e[7] =
        (a * d * r -
          u * c * r +
          u * i * l -
          t * d * l -
          a * i * m +
          t * c * m) *
        b),
      (e[8] = y * b),
      (e[9] =
        (g * h * r -
          u * x * r -
          g * n * m +
          t * x * m +
          u * n * f -
          t * h * f) *
        b),
      (e[10] =
        (a * x * r -
          g * o * r +
          g * n * l -
          t * x * l -
          a * n * f +
          t * o * f) *
        b),
      (e[11] =
        (u * o * r -
          a * h * r -
          u * n * l +
          t * h * l +
          a * n * m -
          t * o * m) *
        b),
      (e[12] = P * b),
      (e[13] =
        (u * x * i -
          g * h * i +
          g * n * d -
          t * x * d -
          u * n * p +
          t * h * p) *
        b),
      (e[14] =
        (g * o * i -
          a * x * i -
          g * n * c +
          t * x * c +
          a * n * p -
          t * o * p) *
        b),
      (e[15] =
        (a * h * i -
          u * o * i +
          u * n * c -
          t * h * c -
          a * n * d +
          t * o * d) *
        b),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= r),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= r),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= r),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = 1 - n,
      a = e.x,
      o = e.y,
      c = e.z,
      l = r * a,
      u = r * o;
    return (
      this.set(
        l * a + n,
        l * o - i * c,
        l * c + i * o,
        0,
        l * o + i * c,
        u * o + n,
        u * c - i * a,
        0,
        l * c - i * o,
        u * c + i * a,
        r * c * c + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, r, a) {
    return this.set(1, n, r, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      r = t._x,
      a = t._y,
      o = t._z,
      c = t._w,
      l = r + r,
      u = a + a,
      h = o + o,
      d = r * l,
      m = r * u,
      g = r * h,
      x = a * u,
      p = a * h,
      f = o * h,
      E = c * l,
      M = c * u,
      y = c * h,
      P = n.x,
      C = n.y,
      b = n.z;
    return (
      (i[0] = (1 - (x + f)) * P),
      (i[1] = (m + y) * P),
      (i[2] = (g - M) * P),
      (i[3] = 0),
      (i[4] = (m - y) * C),
      (i[5] = (1 - (d + f)) * C),
      (i[6] = (p + E) * C),
      (i[7] = 0),
      (i[8] = (g + M) * b),
      (i[9] = (p - E) * b),
      (i[10] = (1 - (d + x)) * b),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = xi.set(i[0], i[1], i[2]).length();
    const a = xi.set(i[4], i[5], i[6]).length(),
      o = xi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      Zt.copy(this);
    const l = 1 / r,
      u = 1 / a,
      h = 1 / o;
    return (
      (Zt.elements[0] *= l),
      (Zt.elements[1] *= l),
      (Zt.elements[2] *= l),
      (Zt.elements[4] *= u),
      (Zt.elements[5] *= u),
      (Zt.elements[6] *= u),
      (Zt.elements[8] *= h),
      (Zt.elements[9] *= h),
      (Zt.elements[10] *= h),
      t.setFromRotationMatrix(Zt),
      (n.x = r),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(e, t, n, i, r, a, o = Sn) {
    const c = this.elements,
      l = (2 * r) / (t - e),
      u = (2 * r) / (n - i),
      h = (t + e) / (t - e),
      d = (n + i) / (n - i);
    let m, g;
    if (o === Sn) (m = -(a + r) / (a - r)), (g = (-2 * a * r) / (a - r));
    else if (o === er) (m = -a / (a - r)), (g = (-a * r) / (a - r));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o
      );
    return (
      (c[0] = l),
      (c[4] = 0),
      (c[8] = h),
      (c[12] = 0),
      (c[1] = 0),
      (c[5] = u),
      (c[9] = d),
      (c[13] = 0),
      (c[2] = 0),
      (c[6] = 0),
      (c[10] = m),
      (c[14] = g),
      (c[3] = 0),
      (c[7] = 0),
      (c[11] = -1),
      (c[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, r, a, o = Sn) {
    const c = this.elements,
      l = 1 / (t - e),
      u = 1 / (n - i),
      h = 1 / (a - r),
      d = (t + e) * l,
      m = (n + i) * u;
    let g, x;
    if (o === Sn) (g = (a + r) * h), (x = -2 * h);
    else if (o === er) (g = r * h), (x = -1 * h);
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o
      );
    return (
      (c[0] = 2 * l),
      (c[4] = 0),
      (c[8] = 0),
      (c[12] = -d),
      (c[1] = 0),
      (c[5] = 2 * u),
      (c[9] = 0),
      (c[13] = -m),
      (c[2] = 0),
      (c[6] = 0),
      (c[10] = x),
      (c[14] = -g),
      (c[3] = 0),
      (c[7] = 0),
      (c[11] = 0),
      (c[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const xi = new L(),
  Zt = new Ve(),
  ah = new L(0, 0, 0),
  oh = new L(1, 1, 1),
  Cn = new L(),
  As = new L(),
  Gt = new L(),
  No = new Ve(),
  Uo = new cn();
class nn {
  constructor(e = 0, t = 0, n = 0, i = nn.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      r = i[0],
      a = i[4],
      o = i[8],
      c = i[1],
      l = i[5],
      u = i[9],
      h = i[2],
      d = i[6],
      m = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(At(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-u, m)), (this._z = Math.atan2(-a, r)))
            : ((this._x = Math.atan2(d, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-At(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(o, m)), (this._z = Math.atan2(c, l)))
            : ((this._y = Math.atan2(-h, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(At(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._y = Math.atan2(-h, m)), (this._z = Math.atan2(-a, l)))
            : ((this._y = 0), (this._z = Math.atan2(c, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-At(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(d, m)), (this._z = Math.atan2(c, r)))
            : ((this._x = 0), (this._z = Math.atan2(-a, l)));
        break;
      case "YZX":
        (this._z = Math.asin(At(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(-u, l)), (this._y = Math.atan2(-h, r)))
            : ((this._x = 0), (this._y = Math.atan2(o, m)));
        break;
      case "XZY":
        (this._z = Math.asin(-At(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(d, l)), (this._y = Math.atan2(o, r)))
            : ((this._x = Math.atan2(-u, m)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      No.makeRotationFromQuaternion(e), this.setFromRotationMatrix(No, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Uo.setFromEuler(this), this.setFromQuaternion(Uo, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
nn.DEFAULT_ORDER = "XYZ";
class ll {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let ch = 0;
const Oo = new L(),
  vi = new cn(),
  mn = new Ve(),
  bs = new L(),
  ts = new L(),
  lh = new L(),
  uh = new cn(),
  Fo = new L(1, 0, 0),
  Bo = new L(0, 1, 0),
  zo = new L(0, 0, 1),
  hh = { type: "added" },
  dh = { type: "removed" },
  wr = { type: "childadded", child: null },
  Rr = { type: "childremoved", child: null };
class dt extends ci {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: ch++ }),
      (this.uuid = en()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = dt.DEFAULT_UP.clone());
    const e = new L(),
      t = new nn(),
      n = new cn(),
      i = new L(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new Ve() },
        normalMatrix: { value: new ke() },
      }),
      (this.matrix = new Ve()),
      (this.matrixWorld = new Ve()),
      (this.matrixAutoUpdate = dt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new ll()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return vi.setFromAxisAngle(e, t), this.quaternion.multiply(vi), this;
  }
  rotateOnWorldAxis(e, t) {
    return vi.setFromAxisAngle(e, t), this.quaternion.premultiply(vi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Fo, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Bo, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(zo, e);
  }
  translateOnAxis(e, t) {
    return (
      Oo.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Oo.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Fo, e);
  }
  translateY(e) {
    return this.translateOnAxis(Bo, e);
  }
  translateZ(e) {
    return this.translateOnAxis(zo, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(mn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? bs.copy(e) : bs.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      ts.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? mn.lookAt(ts, bs, this.up)
        : mn.lookAt(bs, ts, this.up),
      this.quaternion.setFromRotationMatrix(mn),
      i &&
        (mn.extractRotation(i.matrixWorld),
        vi.setFromRotationMatrix(mn),
        this.quaternion.premultiply(vi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(hh),
            (wr.child = e),
            this.dispatchEvent(wr),
            (wr.child = null))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(dh),
        (Rr.child = e),
        this.dispatchEvent(Rr),
        (Rr.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      mn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), mn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(mn),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let r = 0, a = i.length; r < a; r++)
      i[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ts, e, lh), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ts, uh, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      (r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 &&
        n !== null &&
        n.matrixWorldAutoUpdate === !0 &&
        n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const i = this.children;
      for (let r = 0, a = i.length; r < a; r++) {
        const o = i[r];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      (i.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((i.type = "BatchedMesh"),
        (i.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (i.sortObjects = this.sortObjects),
        (i.drawRanges = this._drawRanges),
        (i.reservedRanges = this._reservedRanges),
        (i.visibility = this._visibility),
        (i.active = this._active),
        (i.bounds = this._bounds.map((o) => ({
          boxInitialized: o.boxInitialized,
          boxMin: o.box.min.toArray(),
          boxMax: o.box.max.toArray(),
          sphereInitialized: o.sphereInitialized,
          sphereRadius: o.sphere.radius,
          sphereCenter: o.sphere.center.toArray(),
        }))),
        (i.maxGeometryCount = this._maxGeometryCount),
        (i.maxVertexCount = this._maxVertexCount),
        (i.maxIndexCount = this._maxIndexCount),
        (i.geometryInitialized = this._geometryInitialized),
        (i.geometryCount = this._geometryCount),
        (i.matricesTexture = this._matricesTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (i.boundingSphere = {
            center: i.boundingSphere.center.toArray(),
            radius: i.boundingSphere.radius,
          }),
        this.boundingBox !== null &&
          (i.boundingBox = {
            min: i.boundingBox.min.toArray(),
            max: i.boundingBox.max.toArray(),
          }));
    function r(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, u = c.length; l < u; l++) {
            const h = c[l];
            r(e.shapes, h);
          }
        else r(e.shapes, c);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (r(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(r(e.materials, this.material[c]));
        i.material = o;
      } else i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        i.animations.push(r(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries),
        c = a(e.materials),
        l = a(e.textures),
        u = a(e.images),
        h = a(e.shapes),
        d = a(e.skeletons),
        m = a(e.animations),
        g = a(e.nodes);
      o.length > 0 && (n.geometries = o),
        c.length > 0 && (n.materials = c),
        l.length > 0 && (n.textures = l),
        u.length > 0 && (n.images = u),
        h.length > 0 && (n.shapes = h),
        d.length > 0 && (n.skeletons = d),
        m.length > 0 && (n.animations = m),
        g.length > 0 && (n.nodes = g);
    }
    return (n.object = i), n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const u = o[l];
        delete u.metadata, c.push(u);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
dt.DEFAULT_UP = new L(0, 1, 0);
dt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const $t = new L(),
  gn = new L(),
  Cr = new L(),
  _n = new L(),
  Mi = new L(),
  Si = new L(),
  Ho = new L(),
  Lr = new L(),
  Pr = new L(),
  Ir = new L();
class on {
  constructor(e = new L(), t = new L(), n = new L()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), $t.subVectors(e, t), i.cross($t);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    $t.subVectors(i, t), gn.subVectors(n, t), Cr.subVectors(e, t);
    const a = $t.dot($t),
      o = $t.dot(gn),
      c = $t.dot(Cr),
      l = gn.dot(gn),
      u = gn.dot(Cr),
      h = a * l - o * o;
    if (h === 0) return r.set(0, 0, 0), null;
    const d = 1 / h,
      m = (l * c - o * u) * d,
      g = (a * u - o * c) * d;
    return r.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, _n) === null
      ? !1
      : _n.x >= 0 && _n.y >= 0 && _n.x + _n.y <= 1;
  }
  static getInterpolation(e, t, n, i, r, a, o, c) {
    return this.getBarycoord(e, t, n, i, _n) === null
      ? ((c.x = 0),
        (c.y = 0),
        "z" in c && (c.z = 0),
        "w" in c && (c.w = 0),
        null)
      : (c.setScalar(0),
        c.addScaledVector(r, _n.x),
        c.addScaledVector(a, _n.y),
        c.addScaledVector(o, _n.z),
        c);
  }
  static isFrontFacing(e, t, n, i) {
    return $t.subVectors(n, t), gn.subVectors(e, t), $t.cross(gn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      $t.subVectors(this.c, this.b),
      gn.subVectors(this.a, this.b),
      $t.cross(gn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return on.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return on.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, r) {
    return on.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return on.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return on.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      r = this.c;
    let a, o;
    Mi.subVectors(i, n), Si.subVectors(r, n), Lr.subVectors(e, n);
    const c = Mi.dot(Lr),
      l = Si.dot(Lr);
    if (c <= 0 && l <= 0) return t.copy(n);
    Pr.subVectors(e, i);
    const u = Mi.dot(Pr),
      h = Si.dot(Pr);
    if (u >= 0 && h <= u) return t.copy(i);
    const d = c * h - u * l;
    if (d <= 0 && c >= 0 && u <= 0)
      return (a = c / (c - u)), t.copy(n).addScaledVector(Mi, a);
    Ir.subVectors(e, r);
    const m = Mi.dot(Ir),
      g = Si.dot(Ir);
    if (g >= 0 && m <= g) return t.copy(r);
    const x = m * l - c * g;
    if (x <= 0 && l >= 0 && g <= 0)
      return (o = l / (l - g)), t.copy(n).addScaledVector(Si, o);
    const p = u * g - m * h;
    if (p <= 0 && h - u >= 0 && m - g >= 0)
      return (
        Ho.subVectors(r, i),
        (o = (h - u) / (h - u + (m - g))),
        t.copy(i).addScaledVector(Ho, o)
      );
    const f = 1 / (p + x + d);
    return (
      (a = x * f),
      (o = d * f),
      t.copy(n).addScaledVector(Mi, a).addScaledVector(Si, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const ul = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Ln = { h: 0, s: 0, l: 0 },
  ws = { h: 0, s: 0, l: 0 };
function Dr(s, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? s + (e - s) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? s + (e - s) * 6 * (2 / 3 - t)
      : s
  );
}
class Re {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor
        ? this.copy(i)
        : typeof i == "number"
        ? this.setHex(i)
        : typeof i == "string" && this.setStyle(i);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Nt) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      $e.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = $e.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      $e.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = $e.workingColorSpace) {
    if (((e = xa(e, 1)), (t = At(t, 0, 1)), (n = At(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - r;
      (this.r = Dr(a, r, e + 1 / 3)),
        (this.g = Dr(a, r, e)),
        (this.b = Dr(a, r, e - 1 / 3));
    }
    return $e.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Nt) {
    function n(r) {
      r !== void 0 &&
        parseFloat(r) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let i;
    if ((i = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let r;
      const a = i[1],
        o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (r =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(255, parseInt(r[1], 10)) / 255,
                Math.min(255, parseInt(r[2], 10)) / 255,
                Math.min(255, parseInt(r[3], 10)) / 255,
                t
              )
            );
          if (
            (r =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(100, parseInt(r[1], 10)) / 100,
                Math.min(100, parseInt(r[2], 10)) / 100,
                Math.min(100, parseInt(r[3], 10)) / 100,
                t
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (r =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(r[4]),
              this.setHSL(
                parseFloat(r[1]) / 360,
                parseFloat(r[2]) / 100,
                parseFloat(r[3]) / 100,
                t
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const r = i[1],
        a = r.length;
      if (a === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          t
        );
      if (a === 6) return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Nt) {
    const n = ul[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = Ui(e.r)), (this.g = Ui(e.g)), (this.b = Ui(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = vr(e.r)), (this.g = vr(e.g)), (this.b = vr(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Nt) {
    return (
      $e.fromWorkingColorSpace(Lt.copy(this), e),
      Math.round(At(Lt.r * 255, 0, 255)) * 65536 +
        Math.round(At(Lt.g * 255, 0, 255)) * 256 +
        Math.round(At(Lt.b * 255, 0, 255))
    );
  }
  getHexString(e = Nt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = $e.workingColorSpace) {
    $e.fromWorkingColorSpace(Lt.copy(this), t);
    const n = Lt.r,
      i = Lt.g,
      r = Lt.b,
      a = Math.max(n, i, r),
      o = Math.min(n, i, r);
    let c, l;
    const u = (o + a) / 2;
    if (o === a) (c = 0), (l = 0);
    else {
      const h = a - o;
      switch (((l = u <= 0.5 ? h / (a + o) : h / (2 - a - o)), a)) {
        case n:
          c = (i - r) / h + (i < r ? 6 : 0);
          break;
        case i:
          c = (r - n) / h + 2;
          break;
        case r:
          c = (n - i) / h + 4;
          break;
      }
      c /= 6;
    }
    return (e.h = c), (e.s = l), (e.l = u), e;
  }
  getRGB(e, t = $e.workingColorSpace) {
    return (
      $e.fromWorkingColorSpace(Lt.copy(this), t),
      (e.r = Lt.r),
      (e.g = Lt.g),
      (e.b = Lt.b),
      e
    );
  }
  getStyle(e = Nt) {
    $e.fromWorkingColorSpace(Lt.copy(this), e);
    const t = Lt.r,
      n = Lt.g,
      i = Lt.b;
    return e !== Nt
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(
          i * 255
        )})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Ln), this.setHSL(Ln.h + e, Ln.s + t, Ln.l + n);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(Ln), e.getHSL(ws);
    const n = cs(Ln.h, ws.h, t),
      i = cs(Ln.s, ws.s, t),
      r = cs(Ln.l, ws.l, t);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      i = this.b,
      r = e.elements;
    return (
      (this.r = r[0] * t + r[3] * n + r[6] * i),
      (this.g = r[1] * t + r[4] * n + r[7] * i),
      (this.b = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Lt = new Re();
Re.NAMES = ul;
let fh = 0;
class tn extends ci {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: fh++ }),
      (this.uuid = en()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = Ni),
      (this.side = En),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = Jr),
      (this.blendDst = Qr),
      (this.blendEquation = ti),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new Re(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = Ks),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = wo),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = fi),
      (this.stencilZFail = fi),
      (this.stencilZPass = fi),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`
          );
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Ni && (n.blending = this.blending),
      this.side !== En && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      this.blendSrc !== Jr && (n.blendSrc = this.blendSrc),
      this.blendDst !== Qr && (n.blendDst = this.blendDst),
      this.blendEquation !== ti && (n.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
      this.depthFunc !== Ks && (n.depthFunc = this.depthFunc),
      this.depthTest === !1 && (n.depthTest = this.depthTest),
      this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== wo && (n.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== fi && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== fi && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== fi && (n.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const a = [];
      for (const o in r) {
        const c = r[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const r = i(e.textures),
        a = i(e.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = t[r].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class Fn extends tn {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Re(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new nn()),
      (this.combine = pa),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const gt = new L(),
  Rs = new be();
class Ft {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = sa),
      (this._updateRange = { offset: 0, count: -1 }),
      (this.updateRanges = []),
      (this.gpuType = Jt),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return (
      rl(
        "THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."
      ),
      this._updateRange
    );
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Rs.fromBufferAttribute(this, t),
          Rs.applyMatrix3(e),
          this.setXY(t, Rs.x, Rs.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        gt.fromBufferAttribute(this, t),
          gt.applyMatrix3(e),
          this.setXYZ(t, gt.x, gt.y, gt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      gt.fromBufferAttribute(this, t),
        gt.applyMatrix4(e),
        this.setXYZ(t, gt.x, gt.y, gt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      gt.fromBufferAttribute(this, t),
        gt.applyNormalMatrix(e),
        this.setXYZ(t, gt.x, gt.y, gt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      gt.fromBufferAttribute(this, t),
        gt.transformDirection(e),
        this.setXYZ(t, gt.x, gt.y, gt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Qt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = Qe(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = Qe(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = Qe(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Qe(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = Qe(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = Qe(t, this.array)), (n = Qe(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Qe(t, this.array)),
        (n = Qe(n, this.array)),
        (i = Qe(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Qe(t, this.array)),
        (n = Qe(n, this.array)),
        (i = Qe(i, this.array)),
        (r = Qe(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = r),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== sa && (e.usage = this.usage),
      e
    );
  }
}
class hl extends Ft {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class dl extends Ft {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class yn extends Ft {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let ph = 0;
const Wt = new Ve(),
  Nr = new dt(),
  yi = new L(),
  kt = new Tn(),
  ns = new Tn(),
  yt = new L();
class un extends ci {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: ph++ }),
      (this.uuid = en()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (sl(e) ? dl : hl)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new ke().getNormalMatrix(e);
      n.applyNormalMatrix(r), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return Wt.makeRotationFromQuaternion(e), this.applyMatrix4(Wt), this;
  }
  rotateX(e) {
    return Wt.makeRotationX(e), this.applyMatrix4(Wt), this;
  }
  rotateY(e) {
    return Wt.makeRotationY(e), this.applyMatrix4(Wt), this;
  }
  rotateZ(e) {
    return Wt.makeRotationZ(e), this.applyMatrix4(Wt), this;
  }
  translate(e, t, n) {
    return Wt.makeTranslation(e, t, n), this.applyMatrix4(Wt), this;
  }
  scale(e, t, n) {
    return Wt.makeScale(e, t, n), this.applyMatrix4(Wt), this;
  }
  lookAt(e) {
    return Nr.lookAt(e), Nr.updateMatrix(), this.applyMatrix4(Nr.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(yi).negate(),
      this.translate(yi.x, yi.y, yi.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new yn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Tn());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this
      ),
        this.boundingBox.set(
          new L(-1 / 0, -1 / 0, -1 / 0),
          new L(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          kt.setFromBufferAttribute(r),
            this.morphTargetsRelative
              ? (yt.addVectors(this.boundingBox.min, kt.min),
                this.boundingBox.expandByPoint(yt),
                yt.addVectors(this.boundingBox.max, kt.max),
                this.boundingBox.expandByPoint(yt))
              : (this.boundingBox.expandByPoint(kt.min),
                this.boundingBox.expandByPoint(kt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ln());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this
      ),
        this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((kt.setFromBufferAttribute(e), t))
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r];
          ns.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (yt.addVectors(kt.min, ns.min),
                kt.expandByPoint(yt),
                yt.addVectors(kt.max, ns.max),
                kt.expandByPoint(yt))
              : (kt.expandByPoint(ns.min), kt.expandByPoint(ns.max));
        }
      kt.getCenter(n);
      let i = 0;
      for (let r = 0, a = e.count; r < a; r++)
        yt.fromBufferAttribute(e, r),
          (i = Math.max(i, n.distanceToSquared(yt)));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r],
            c = this.morphTargetsRelative;
          for (let l = 0, u = o.count; l < u; l++)
            yt.fromBufferAttribute(o, l),
              c && (yi.fromBufferAttribute(e, l), yt.add(yi)),
              (i = Math.max(i, n.distanceToSquared(yt)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = t.position,
      i = t.normal,
      r = t.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Ft(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"),
      o = [],
      c = [];
    for (let F = 0; F < n.count; F++) (o[F] = new L()), (c[F] = new L());
    const l = new L(),
      u = new L(),
      h = new L(),
      d = new be(),
      m = new be(),
      g = new be(),
      x = new L(),
      p = new L();
    function f(F, $, v) {
      l.fromBufferAttribute(n, F),
        u.fromBufferAttribute(n, $),
        h.fromBufferAttribute(n, v),
        d.fromBufferAttribute(r, F),
        m.fromBufferAttribute(r, $),
        g.fromBufferAttribute(r, v),
        u.sub(l),
        h.sub(l),
        m.sub(d),
        g.sub(d);
      const w = 1 / (m.x * g.y - g.x * m.y);
      isFinite(w) &&
        (x
          .copy(u)
          .multiplyScalar(g.y)
          .addScaledVector(h, -m.y)
          .multiplyScalar(w),
        p
          .copy(h)
          .multiplyScalar(m.x)
          .addScaledVector(u, -g.x)
          .multiplyScalar(w),
        o[F].add(x),
        o[$].add(x),
        o[v].add(x),
        c[F].add(p),
        c[$].add(p),
        c[v].add(p));
    }
    let E = this.groups;
    E.length === 0 && (E = [{ start: 0, count: e.count }]);
    for (let F = 0, $ = E.length; F < $; ++F) {
      const v = E[F],
        w = v.start,
        re = v.count;
      for (let Q = w, I = w + re; Q < I; Q += 3)
        f(e.getX(Q + 0), e.getX(Q + 1), e.getX(Q + 2));
    }
    const M = new L(),
      y = new L(),
      P = new L(),
      C = new L();
    function b(F) {
      P.fromBufferAttribute(i, F), C.copy(P);
      const $ = o[F];
      M.copy($),
        M.sub(P.multiplyScalar(P.dot($))).normalize(),
        y.crossVectors(C, $);
      const w = y.dot(c[F]) < 0 ? -1 : 1;
      a.setXYZW(F, M.x, M.y, M.z, w);
    }
    for (let F = 0, $ = E.length; F < $; ++F) {
      const v = E[F],
        w = v.start,
        re = v.count;
      for (let Q = w, I = w + re; Q < I; Q += 3)
        b(e.getX(Q + 0)), b(e.getX(Q + 1)), b(e.getX(Q + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new Ft(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let d = 0, m = n.count; d < m; d++) n.setXYZ(d, 0, 0, 0);
      const i = new L(),
        r = new L(),
        a = new L(),
        o = new L(),
        c = new L(),
        l = new L(),
        u = new L(),
        h = new L();
      if (e)
        for (let d = 0, m = e.count; d < m; d += 3) {
          const g = e.getX(d + 0),
            x = e.getX(d + 1),
            p = e.getX(d + 2);
          i.fromBufferAttribute(t, g),
            r.fromBufferAttribute(t, x),
            a.fromBufferAttribute(t, p),
            u.subVectors(a, r),
            h.subVectors(i, r),
            u.cross(h),
            o.fromBufferAttribute(n, g),
            c.fromBufferAttribute(n, x),
            l.fromBufferAttribute(n, p),
            o.add(u),
            c.add(u),
            l.add(u),
            n.setXYZ(g, o.x, o.y, o.z),
            n.setXYZ(x, c.x, c.y, c.z),
            n.setXYZ(p, l.x, l.y, l.z);
        }
      else
        for (let d = 0, m = t.count; d < m; d += 3)
          i.fromBufferAttribute(t, d + 0),
            r.fromBufferAttribute(t, d + 1),
            a.fromBufferAttribute(t, d + 2),
            u.subVectors(a, r),
            h.subVectors(i, r),
            u.cross(h),
            n.setXYZ(d + 0, u.x, u.y, u.z),
            n.setXYZ(d + 1, u.x, u.y, u.z),
            n.setXYZ(d + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      yt.fromBufferAttribute(e, t),
        yt.normalize(),
        e.setXYZ(t, yt.x, yt.y, yt.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array,
        u = o.itemSize,
        h = o.normalized,
        d = new l.constructor(c.length * u);
      let m = 0,
        g = 0;
      for (let x = 0, p = c.length; x < p; x++) {
        o.isInterleavedBufferAttribute
          ? (m = c[x] * o.data.stride + o.offset)
          : (m = c[x] * u);
        for (let f = 0; f < u; f++) d[g++] = l[m++];
      }
      return new Ft(d, u, h);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new un(),
      n = this.index.array,
      i = this.attributes;
    for (const o in i) {
      const c = i[o],
        l = e(c, n);
      t.setAttribute(o, l);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const c = [],
        l = r[o];
      for (let u = 0, h = l.length; u < h; u++) {
        const d = l[u],
          m = e(d, n);
        c.push(m);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const c = this.parameters;
      for (const l in c) c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c],
        u = [];
      for (let h = 0, d = l.length; h < d; h++) {
        const m = l[h];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && ((i[c] = u), (r = !0));
    }
    r &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (
      o !== null &&
        (e.data.boundingSphere = {
          center: o.center.toArray(),
          radius: o.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const l in i) {
      const u = i[l];
      this.setAttribute(l, u.clone(t));
    }
    const r = e.morphAttributes;
    for (const l in r) {
      const u = [],
        h = r[l];
      for (let d = 0, m = h.length; d < m; d++) u.push(h[d].clone(t));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, u = a.length; l < u; l++) {
      const h = a[l];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return (
      c !== null && (this.boundingSphere = c.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Go = new Ve(),
  Kn = new ps(),
  Cs = new ln(),
  ko = new L(),
  Ei = new L(),
  Ti = new L(),
  Ai = new L(),
  Ur = new L(),
  Ls = new L(),
  Ps = new be(),
  Is = new be(),
  Ds = new be(),
  Vo = new L(),
  Wo = new L(),
  Xo = new L(),
  Ns = new L(),
  Us = new L();
class tt extends dt {
  constructor(e = new un(), t = new Fn()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      i = n.attributes.position,
      r = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      Ls.set(0, 0, 0);
      for (let c = 0, l = r.length; c < l; c++) {
        const u = o[c],
          h = r[c];
        u !== 0 &&
          (Ur.fromBufferAttribute(h, e),
          a ? Ls.addScaledVector(Ur, u) : Ls.addScaledVector(Ur.sub(t), u));
      }
      t.add(Ls);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      r = this.matrixWorld;
    i !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Cs.copy(n.boundingSphere),
      Cs.applyMatrix4(r),
      Kn.copy(e.ray).recast(e.near),
      !(
        Cs.containsPoint(Kn.origin) === !1 &&
        (Kn.intersectSphere(Cs, ko) === null ||
          Kn.origin.distanceToSquared(ko) > (e.far - e.near) ** 2)
      ) &&
        (Go.copy(r).invert(),
        Kn.copy(e.ray).applyMatrix4(Go),
        !(n.boundingBox !== null && Kn.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, Kn)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry,
      a = this.material,
      o = r.index,
      c = r.attributes.position,
      l = r.attributes.uv,
      u = r.attributes.uv1,
      h = r.attributes.normal,
      d = r.groups,
      m = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, x = d.length; g < x; g++) {
          const p = d[g],
            f = a[p.materialIndex],
            E = Math.max(p.start, m.start),
            M = Math.min(
              o.count,
              Math.min(p.start + p.count, m.start + m.count)
            );
          for (let y = E, P = M; y < P; y += 3) {
            const C = o.getX(y),
              b = o.getX(y + 1),
              F = o.getX(y + 2);
            (i = Os(this, f, e, n, l, u, h, C, b, F)),
              i &&
                ((i.faceIndex = Math.floor(y / 3)),
                (i.face.materialIndex = p.materialIndex),
                t.push(i));
          }
        }
      else {
        const g = Math.max(0, m.start),
          x = Math.min(o.count, m.start + m.count);
        for (let p = g, f = x; p < f; p += 3) {
          const E = o.getX(p),
            M = o.getX(p + 1),
            y = o.getX(p + 2);
          (i = Os(this, a, e, n, l, u, h, E, M, y)),
            i && ((i.faceIndex = Math.floor(p / 3)), t.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let g = 0, x = d.length; g < x; g++) {
          const p = d[g],
            f = a[p.materialIndex],
            E = Math.max(p.start, m.start),
            M = Math.min(
              c.count,
              Math.min(p.start + p.count, m.start + m.count)
            );
          for (let y = E, P = M; y < P; y += 3) {
            const C = y,
              b = y + 1,
              F = y + 2;
            (i = Os(this, f, e, n, l, u, h, C, b, F)),
              i &&
                ((i.faceIndex = Math.floor(y / 3)),
                (i.face.materialIndex = p.materialIndex),
                t.push(i));
          }
        }
      else {
        const g = Math.max(0, m.start),
          x = Math.min(c.count, m.start + m.count);
        for (let p = g, f = x; p < f; p += 3) {
          const E = p,
            M = p + 1,
            y = p + 2;
          (i = Os(this, a, e, n, l, u, h, E, M, y)),
            i && ((i.faceIndex = Math.floor(p / 3)), t.push(i));
        }
      }
  }
}
function mh(s, e, t, n, i, r, a, o) {
  let c;
  if (
    (e.side === Ot
      ? (c = n.intersectTriangle(a, r, i, !0, o))
      : (c = n.intersectTriangle(i, r, a, e.side === En, o)),
    c === null)
  )
    return null;
  Us.copy(o), Us.applyMatrix4(s.matrixWorld);
  const l = t.ray.origin.distanceTo(Us);
  return l < t.near || l > t.far
    ? null
    : { distance: l, point: Us.clone(), object: s };
}
function Os(s, e, t, n, i, r, a, o, c, l) {
  s.getVertexPosition(o, Ei),
    s.getVertexPosition(c, Ti),
    s.getVertexPosition(l, Ai);
  const u = mh(s, e, t, n, Ei, Ti, Ai, Ns);
  if (u) {
    i &&
      (Ps.fromBufferAttribute(i, o),
      Is.fromBufferAttribute(i, c),
      Ds.fromBufferAttribute(i, l),
      (u.uv = on.getInterpolation(Ns, Ei, Ti, Ai, Ps, Is, Ds, new be()))),
      r &&
        (Ps.fromBufferAttribute(r, o),
        Is.fromBufferAttribute(r, c),
        Ds.fromBufferAttribute(r, l),
        (u.uv1 = on.getInterpolation(Ns, Ei, Ti, Ai, Ps, Is, Ds, new be()))),
      a &&
        (Vo.fromBufferAttribute(a, o),
        Wo.fromBufferAttribute(a, c),
        Xo.fromBufferAttribute(a, l),
        (u.normal = on.getInterpolation(Ns, Ei, Ti, Ai, Vo, Wo, Xo, new L())),
        u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const h = { a: o, b: c, c: l, normal: new L(), materialIndex: 0 };
    on.getNormal(Ei, Ti, Ai, h.normal), (u.face = h);
  }
  return u;
}
class Vn extends un {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a,
      });
    const o = this;
    (i = Math.floor(i)), (r = Math.floor(r)), (a = Math.floor(a));
    const c = [],
      l = [],
      u = [],
      h = [];
    let d = 0,
      m = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, r, 0),
      g("z", "y", "x", 1, -1, n, t, -e, a, r, 1),
      g("x", "z", "y", 1, 1, e, n, t, i, a, 2),
      g("x", "z", "y", 1, -1, e, n, -t, i, a, 3),
      g("x", "y", "z", 1, -1, e, t, n, i, r, 4),
      g("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
      this.setIndex(c),
      this.setAttribute("position", new yn(l, 3)),
      this.setAttribute("normal", new yn(u, 3)),
      this.setAttribute("uv", new yn(h, 2));
    function g(x, p, f, E, M, y, P, C, b, F, $) {
      const v = y / b,
        w = P / F,
        re = y / 2,
        Q = P / 2,
        I = C / 2,
        W = b + 1,
        k = F + 1;
      let j = 0,
        V = 0;
      const Y = new L();
      for (let K = 0; K < k; K++) {
        const oe = K * w - Q;
        for (let pe = 0; pe < W; pe++) {
          const Ie = pe * v - re;
          (Y[x] = Ie * E),
            (Y[p] = oe * M),
            (Y[f] = I),
            l.push(Y.x, Y.y, Y.z),
            (Y[x] = 0),
            (Y[p] = 0),
            (Y[f] = C > 0 ? 1 : -1),
            u.push(Y.x, Y.y, Y.z),
            h.push(pe / b),
            h.push(1 - K / F),
            (j += 1);
        }
      }
      for (let K = 0; K < F; K++)
        for (let oe = 0; oe < b; oe++) {
          const pe = d + oe + W * K,
            Ie = d + oe + W * (K + 1),
            H = d + (oe + 1) + W * (K + 1),
            ee = d + (oe + 1) + W * K;
          c.push(pe, Ie, ee), c.push(Ie, H, ee), (V += 6);
        }
      o.addGroup(m, V, $), (m += V), (d += j);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Vn(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function Vi(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? i.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (e[t][n] = null))
          : (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}
function Dt(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = Vi(s[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function gh(s) {
  const e = [];
  for (let t = 0; t < s.length; t++) e.push(s[t].clone());
  return e;
}
function fl(s) {
  return s.getRenderTarget() === null
    ? s.outputColorSpace
    : $e.workingColorSpace;
}
const _h = { clone: Vi, merge: Dt };
var xh = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  vh = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class kn extends tn {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = xh),
      (this.fragmentShader = vh),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
        clipCullDistance: !1,
        multiDraw: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Vi(e.uniforms)),
      (this.uniformsGroups = gh(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture
        ? (t.uniforms[i] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
        ? (t.uniforms[i] = { type: "c", value: a.getHex() })
        : a && a.isVector2
        ? (t.uniforms[i] = { type: "v2", value: a.toArray() })
        : a && a.isVector3
        ? (t.uniforms[i] = { type: "v3", value: a.toArray() })
        : a && a.isVector4
        ? (t.uniforms[i] = { type: "v4", value: a.toArray() })
        : a && a.isMatrix3
        ? (t.uniforms[i] = { type: "m3", value: a.toArray() })
        : a && a.isMatrix4
        ? (t.uniforms[i] = { type: "m4", value: a.toArray() })
        : (t.uniforms[i] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class pl extends dt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Ve()),
      (this.projectionMatrix = new Ve()),
      (this.projectionMatrixInverse = new Ve()),
      (this.coordinateSystem = Sn);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Pn = new L(),
  qo = new be(),
  Yo = new be();
class Ut extends pl {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = ki * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(os * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return ki * 2 * Math.atan(Math.tan(os * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    Pn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(Pn.x, Pn.y).multiplyScalar(-e / Pn.z),
      Pn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(Pn.x, Pn.y).multiplyScalar(-e / Pn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, qo, Yo), t.subVectors(Yo, qo);
  }
  setViewOffset(e, t, n, i, r, a) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(os * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      r = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth,
        l = a.fullHeight;
      (r += (a.offsetX * i) / c),
        (t -= (a.offsetY * n) / l),
        (i *= a.width / c),
        (n *= a.height / l);
    }
    const o = this.filmOffset;
    o !== 0 && (r += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        r,
        r + i,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const bi = -90,
  wi = 1;
class Mh extends dt {
  constructor(e, t, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const i = new Ut(bi, wi, e, t);
    (i.layers = this.layers), this.add(i);
    const r = new Ut(bi, wi, e, t);
    (r.layers = this.layers), this.add(r);
    const a = new Ut(bi, wi, e, t);
    (a.layers = this.layers), this.add(a);
    const o = new Ut(bi, wi, e, t);
    (o.layers = this.layers), this.add(o);
    const c = new Ut(bi, wi, e, t);
    (c.layers = this.layers), this.add(c);
    const l = new Ut(bi, wi, e, t);
    (l.layers = this.layers), this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, i, r, a, o, c] = t;
    for (const l of t) this.remove(l);
    if (e === Sn)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        i.up.set(0, 1, 0),
        i.lookAt(-1, 0, 0),
        r.up.set(0, 0, -1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        c.up.set(0, 1, 0),
        c.lookAt(0, 0, -1);
    else if (e === er)
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        i.up.set(0, -1, 0),
        i.lookAt(1, 0, 0),
        r.up.set(0, 0, 1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, 1),
        c.up.set(0, -1, 0),
        c.lookAt(0, 0, -1);
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e
      );
    for (const l of t) this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [r, a, o, c, l, u] = this.children,
      h = e.getRenderTarget(),
      d = e.getActiveCubeFace(),
      m = e.getActiveMipmapLevel(),
      g = e.xr.enabled;
    e.xr.enabled = !1;
    const x = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, i),
      e.render(t, r),
      e.setRenderTarget(n, 1, i),
      e.render(t, a),
      e.setRenderTarget(n, 2, i),
      e.render(t, o),
      e.setRenderTarget(n, 3, i),
      e.render(t, c),
      e.setRenderTarget(n, 4, i),
      e.render(t, l),
      (n.texture.generateMipmaps = x),
      e.setRenderTarget(n, 5, i),
      e.render(t, u),
      e.setRenderTarget(h, d, m),
      (e.xr.enabled = g),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class ml extends Tt {
  constructor(e, t, n, i, r, a, o, c, l, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Fi),
      super(e, t, n, i, r, a, o, c, l, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Sh extends ai {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new ml(
      i,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.colorSpace
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Pt);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new Vn(5, 5, 5),
      r = new kn({
        name: "CubemapFromEquirect",
        uniforms: Vi(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Ot,
        blending: zn,
      });
    r.uniforms.tEquirect.value = t;
    const a = new tt(i, r),
      o = t.minFilter;
    return (
      t.minFilter === Mn && (t.minFilter = Pt),
      new Mh(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const Or = new L(),
  yh = new L(),
  Eh = new ke();
class Dn {
  constructor(e = new L(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Or.subVectors(n, t).cross(yh.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Or),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Eh.getNormalMatrix(e),
      i = this.coplanarPoint(Or).applyMatrix4(e),
      r = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(r)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Zn = new ln(),
  Fs = new L();
class va {
  constructor(
    e = new Dn(),
    t = new Dn(),
    n = new Dn(),
    i = new Dn(),
    r = new Dn(),
    a = new Dn()
  ) {
    this.planes = [e, t, n, i, r, a];
  }
  set(e, t, n, i, r, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(i),
      o[4].copy(r),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Sn) {
    const n = this.planes,
      i = e.elements,
      r = i[0],
      a = i[1],
      o = i[2],
      c = i[3],
      l = i[4],
      u = i[5],
      h = i[6],
      d = i[7],
      m = i[8],
      g = i[9],
      x = i[10],
      p = i[11],
      f = i[12],
      E = i[13],
      M = i[14],
      y = i[15];
    if (
      (n[0].setComponents(c - r, d - l, p - m, y - f).normalize(),
      n[1].setComponents(c + r, d + l, p + m, y + f).normalize(),
      n[2].setComponents(c + a, d + u, p + g, y + E).normalize(),
      n[3].setComponents(c - a, d - u, p - g, y - E).normalize(),
      n[4].setComponents(c - o, d - h, p - x, y - M).normalize(),
      t === Sn)
    )
      n[5].setComponents(c + o, d + h, p + x, y + M).normalize();
    else if (t === er) n[5].setComponents(o, h, x, M).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(),
        Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Zn);
  }
  intersectsSprite(e) {
    return (
      Zn.center.set(0, 0, 0),
      (Zn.radius = 0.7071067811865476),
      Zn.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Zn)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((Fs.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (Fs.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (Fs.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(Fs) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function gl() {
  let s = null,
    e = !1,
    t = null,
    n = null;
  function i(r, a) {
    t(r, a), (n = s.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = s.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      s.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (r) {
      t = r;
    },
    setContext: function (r) {
      s = r;
    },
  };
}
function Th(s, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function i(l, u) {
    const h = l.array,
      d = l.usage,
      m = h.byteLength,
      g = s.createBuffer();
    s.bindBuffer(u, g), s.bufferData(u, h, d), l.onUploadCallback();
    let x;
    if (h instanceof Float32Array) x = s.FLOAT;
    else if (h instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t) x = s.HALF_FLOAT;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
          );
      else x = s.UNSIGNED_SHORT;
    else if (h instanceof Int16Array) x = s.SHORT;
    else if (h instanceof Uint32Array) x = s.UNSIGNED_INT;
    else if (h instanceof Int32Array) x = s.INT;
    else if (h instanceof Int8Array) x = s.BYTE;
    else if (h instanceof Uint8Array) x = s.UNSIGNED_BYTE;
    else if (h instanceof Uint8ClampedArray) x = s.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + h
      );
    return {
      buffer: g,
      type: x,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: l.version,
      size: m,
    };
  }
  function r(l, u, h) {
    const d = u.array,
      m = u._updateRange,
      g = u.updateRanges;
    if (
      (s.bindBuffer(h, l),
      m.count === -1 && g.length === 0 && s.bufferSubData(h, 0, d),
      g.length !== 0)
    ) {
      for (let x = 0, p = g.length; x < p; x++) {
        const f = g[x];
        t
          ? s.bufferSubData(
              h,
              f.start * d.BYTES_PER_ELEMENT,
              d,
              f.start,
              f.count
            )
          : s.bufferSubData(
              h,
              f.start * d.BYTES_PER_ELEMENT,
              d.subarray(f.start, f.start + f.count)
            );
      }
      u.clearUpdateRanges();
    }
    m.count !== -1 &&
      (t
        ? s.bufferSubData(
            h,
            m.offset * d.BYTES_PER_ELEMENT,
            d,
            m.offset,
            m.count
          )
        : s.bufferSubData(
            h,
            m.offset * d.BYTES_PER_ELEMENT,
            d.subarray(m.offset, m.offset + m.count)
          ),
      (m.count = -1)),
      u.onUploadCallback();
  }
  function a(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function o(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    u && (s.deleteBuffer(u.buffer), n.delete(l));
  }
  function c(l, u) {
    if (l.isGLBufferAttribute) {
      const d = n.get(l);
      (!d || d.version < l.version) &&
        n.set(l, {
          buffer: l.buffer,
          type: l.type,
          bytesPerElement: l.elementSize,
          version: l.version,
        });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    if (h === void 0) n.set(l, i(l, u));
    else if (h.version < l.version) {
      if (h.size !== l.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
        );
      r(h.buffer, l, u), (h.version = l.version);
    }
  }
  return { get: a, remove: o, update: c };
}
class rr extends un {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const r = e / 2,
      a = t / 2,
      o = Math.floor(n),
      c = Math.floor(i),
      l = o + 1,
      u = c + 1,
      h = e / o,
      d = t / c,
      m = [],
      g = [],
      x = [],
      p = [];
    for (let f = 0; f < u; f++) {
      const E = f * d - a;
      for (let M = 0; M < l; M++) {
        const y = M * h - r;
        g.push(y, -E, 0), x.push(0, 0, 1), p.push(M / o), p.push(1 - f / c);
      }
    }
    for (let f = 0; f < c; f++)
      for (let E = 0; E < o; E++) {
        const M = E + l * f,
          y = E + l * (f + 1),
          P = E + 1 + l * (f + 1),
          C = E + 1 + l * f;
        m.push(M, y, C), m.push(y, P, C);
      }
    this.setIndex(m),
      this.setAttribute("position", new yn(g, 3)),
      this.setAttribute("normal", new yn(x, 3)),
      this.setAttribute("uv", new yn(p, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new rr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Ah = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  bh = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  wh = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Rh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Ch = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  Lh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Ph = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  Ih = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Dh = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  Nh = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,
  Uh = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  Oh = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Fh = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  Bh = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  zh = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  Hh = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  Gh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  kh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Vh = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Wh = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Xh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  qh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  Yh = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  jh = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  Kh = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Zh = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  $h = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  Jh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  Qh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  ed = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  td = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  nd = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,
  id = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  sd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  rd = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  ad = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  od = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  cd = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  ld = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  ud = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  hd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  dd = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  fd = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  pd = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  md = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  gd = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  _d = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  xd = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  vd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Md = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Sd = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  yd = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  Ed = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  Td = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  Ad = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  bd = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  wd = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  Rd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Cd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Ld = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  Pd = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  Id = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Dd = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Nd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Ud = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Od = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Fd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Bd = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  zd = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Hd = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  Gd = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  kd = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  Vd = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  Wd = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Xd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  qd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Yd = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  jd = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  Kd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  Zd = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  $d = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  Jd = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Qd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  ef = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  tf = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  nf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  sf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  rf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  af = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  of = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  cf = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  lf = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  uf = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  hf = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  df = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  ff = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  pf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  mf = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  gf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  _f = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  xf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  vf = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Mf = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  Sf = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  yf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Ef = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Tf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  Af = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const bf = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  wf = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Rf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Cf = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Lf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Pf = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  If = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  Df = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  Nf = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  Uf = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  Of = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Ff = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Bf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  zf = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Hf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  Gf = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  kf = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Vf = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Wf = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Xf = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  qf = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  Yf = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  jf = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Kf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Zf = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  $f = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Jf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Qf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  ep = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  tp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  np = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  ip = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  sp = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  rp = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Ge = {
    alphahash_fragment: Ah,
    alphahash_pars_fragment: bh,
    alphamap_fragment: wh,
    alphamap_pars_fragment: Rh,
    alphatest_fragment: Ch,
    alphatest_pars_fragment: Lh,
    aomap_fragment: Ph,
    aomap_pars_fragment: Ih,
    batching_pars_vertex: Dh,
    batching_vertex: Nh,
    begin_vertex: Uh,
    beginnormal_vertex: Oh,
    bsdfs: Fh,
    iridescence_fragment: Bh,
    bumpmap_pars_fragment: zh,
    clipping_planes_fragment: Hh,
    clipping_planes_pars_fragment: Gh,
    clipping_planes_pars_vertex: kh,
    clipping_planes_vertex: Vh,
    color_fragment: Wh,
    color_pars_fragment: Xh,
    color_pars_vertex: qh,
    color_vertex: Yh,
    common: jh,
    cube_uv_reflection_fragment: Kh,
    defaultnormal_vertex: Zh,
    displacementmap_pars_vertex: $h,
    displacementmap_vertex: Jh,
    emissivemap_fragment: Qh,
    emissivemap_pars_fragment: ed,
    colorspace_fragment: td,
    colorspace_pars_fragment: nd,
    envmap_fragment: id,
    envmap_common_pars_fragment: sd,
    envmap_pars_fragment: rd,
    envmap_pars_vertex: ad,
    envmap_physical_pars_fragment: xd,
    envmap_vertex: od,
    fog_vertex: cd,
    fog_pars_vertex: ld,
    fog_fragment: ud,
    fog_pars_fragment: hd,
    gradientmap_pars_fragment: dd,
    lightmap_fragment: fd,
    lightmap_pars_fragment: pd,
    lights_lambert_fragment: md,
    lights_lambert_pars_fragment: gd,
    lights_pars_begin: _d,
    lights_toon_fragment: vd,
    lights_toon_pars_fragment: Md,
    lights_phong_fragment: Sd,
    lights_phong_pars_fragment: yd,
    lights_physical_fragment: Ed,
    lights_physical_pars_fragment: Td,
    lights_fragment_begin: Ad,
    lights_fragment_maps: bd,
    lights_fragment_end: wd,
    logdepthbuf_fragment: Rd,
    logdepthbuf_pars_fragment: Cd,
    logdepthbuf_pars_vertex: Ld,
    logdepthbuf_vertex: Pd,
    map_fragment: Id,
    map_pars_fragment: Dd,
    map_particle_fragment: Nd,
    map_particle_pars_fragment: Ud,
    metalnessmap_fragment: Od,
    metalnessmap_pars_fragment: Fd,
    morphinstance_vertex: Bd,
    morphcolor_vertex: zd,
    morphnormal_vertex: Hd,
    morphtarget_pars_vertex: Gd,
    morphtarget_vertex: kd,
    normal_fragment_begin: Vd,
    normal_fragment_maps: Wd,
    normal_pars_fragment: Xd,
    normal_pars_vertex: qd,
    normal_vertex: Yd,
    normalmap_pars_fragment: jd,
    clearcoat_normal_fragment_begin: Kd,
    clearcoat_normal_fragment_maps: Zd,
    clearcoat_pars_fragment: $d,
    iridescence_pars_fragment: Jd,
    opaque_fragment: Qd,
    packing: ef,
    premultiplied_alpha_fragment: tf,
    project_vertex: nf,
    dithering_fragment: sf,
    dithering_pars_fragment: rf,
    roughnessmap_fragment: af,
    roughnessmap_pars_fragment: of,
    shadowmap_pars_fragment: cf,
    shadowmap_pars_vertex: lf,
    shadowmap_vertex: uf,
    shadowmask_pars_fragment: hf,
    skinbase_vertex: df,
    skinning_pars_vertex: ff,
    skinning_vertex: pf,
    skinnormal_vertex: mf,
    specularmap_fragment: gf,
    specularmap_pars_fragment: _f,
    tonemapping_fragment: xf,
    tonemapping_pars_fragment: vf,
    transmission_fragment: Mf,
    transmission_pars_fragment: Sf,
    uv_pars_fragment: yf,
    uv_pars_vertex: Ef,
    uv_vertex: Tf,
    worldpos_vertex: Af,
    background_vert: bf,
    background_frag: wf,
    backgroundCube_vert: Rf,
    backgroundCube_frag: Cf,
    cube_vert: Lf,
    cube_frag: Pf,
    depth_vert: If,
    depth_frag: Df,
    distanceRGBA_vert: Nf,
    distanceRGBA_frag: Uf,
    equirect_vert: Of,
    equirect_frag: Ff,
    linedashed_vert: Bf,
    linedashed_frag: zf,
    meshbasic_vert: Hf,
    meshbasic_frag: Gf,
    meshlambert_vert: kf,
    meshlambert_frag: Vf,
    meshmatcap_vert: Wf,
    meshmatcap_frag: Xf,
    meshnormal_vert: qf,
    meshnormal_frag: Yf,
    meshphong_vert: jf,
    meshphong_frag: Kf,
    meshphysical_vert: Zf,
    meshphysical_frag: $f,
    meshtoon_vert: Jf,
    meshtoon_frag: Qf,
    points_vert: ep,
    points_frag: tp,
    shadow_vert: np,
    shadow_frag: ip,
    sprite_vert: sp,
    sprite_frag: rp,
  },
  le = {
    common: {
      diffuse: { value: new Re(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new ke() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new ke() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new ke() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new ke() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new ke() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new ke() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new ke() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new ke() },
      normalScale: { value: new be(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new ke() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new ke() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new ke() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new ke() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Re(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Re(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new ke() },
      alphaTest: { value: 0 },
      uvTransform: { value: new ke() },
    },
    sprite: {
      diffuse: { value: new Re(16777215) },
      opacity: { value: 1 },
      center: { value: new be(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new ke() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new ke() },
      alphaTest: { value: 0 },
    },
  },
  rn = {
    basic: {
      uniforms: Dt([
        le.common,
        le.specularmap,
        le.envmap,
        le.aomap,
        le.lightmap,
        le.fog,
      ]),
      vertexShader: Ge.meshbasic_vert,
      fragmentShader: Ge.meshbasic_frag,
    },
    lambert: {
      uniforms: Dt([
        le.common,
        le.specularmap,
        le.envmap,
        le.aomap,
        le.lightmap,
        le.emissivemap,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.fog,
        le.lights,
        { emissive: { value: new Re(0) } },
      ]),
      vertexShader: Ge.meshlambert_vert,
      fragmentShader: Ge.meshlambert_frag,
    },
    phong: {
      uniforms: Dt([
        le.common,
        le.specularmap,
        le.envmap,
        le.aomap,
        le.lightmap,
        le.emissivemap,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.fog,
        le.lights,
        {
          emissive: { value: new Re(0) },
          specular: { value: new Re(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Ge.meshphong_vert,
      fragmentShader: Ge.meshphong_frag,
    },
    standard: {
      uniforms: Dt([
        le.common,
        le.envmap,
        le.aomap,
        le.lightmap,
        le.emissivemap,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.roughnessmap,
        le.metalnessmap,
        le.fog,
        le.lights,
        {
          emissive: { value: new Re(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Ge.meshphysical_vert,
      fragmentShader: Ge.meshphysical_frag,
    },
    toon: {
      uniforms: Dt([
        le.common,
        le.aomap,
        le.lightmap,
        le.emissivemap,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.gradientmap,
        le.fog,
        le.lights,
        { emissive: { value: new Re(0) } },
      ]),
      vertexShader: Ge.meshtoon_vert,
      fragmentShader: Ge.meshtoon_frag,
    },
    matcap: {
      uniforms: Dt([
        le.common,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Ge.meshmatcap_vert,
      fragmentShader: Ge.meshmatcap_frag,
    },
    points: {
      uniforms: Dt([le.points, le.fog]),
      vertexShader: Ge.points_vert,
      fragmentShader: Ge.points_frag,
    },
    dashed: {
      uniforms: Dt([
        le.common,
        le.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Ge.linedashed_vert,
      fragmentShader: Ge.linedashed_frag,
    },
    depth: {
      uniforms: Dt([le.common, le.displacementmap]),
      vertexShader: Ge.depth_vert,
      fragmentShader: Ge.depth_frag,
    },
    normal: {
      uniforms: Dt([
        le.common,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Ge.meshnormal_vert,
      fragmentShader: Ge.meshnormal_frag,
    },
    sprite: {
      uniforms: Dt([le.sprite, le.fog]),
      vertexShader: Ge.sprite_vert,
      fragmentShader: Ge.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new ke() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Ge.background_vert,
      fragmentShader: Ge.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new ke() },
      },
      vertexShader: Ge.backgroundCube_vert,
      fragmentShader: Ge.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Ge.cube_vert,
      fragmentShader: Ge.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Ge.equirect_vert,
      fragmentShader: Ge.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Dt([
        le.common,
        le.displacementmap,
        {
          referencePosition: { value: new L() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Ge.distanceRGBA_vert,
      fragmentShader: Ge.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Dt([
        le.lights,
        le.fog,
        { color: { value: new Re(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Ge.shadow_vert,
      fragmentShader: Ge.shadow_frag,
    },
  };
rn.physical = {
  uniforms: Dt([
    rn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new ke() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new ke() },
      clearcoatNormalScale: { value: new be(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new ke() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new ke() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new ke() },
      sheen: { value: 0 },
      sheenColor: { value: new Re(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new ke() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new ke() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new ke() },
      transmissionSamplerSize: { value: new be() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new ke() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Re(0) },
      specularColor: { value: new Re(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new ke() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new ke() },
      anisotropyVector: { value: new be() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new ke() },
    },
  ]),
  vertexShader: Ge.meshphysical_vert,
  fragmentShader: Ge.meshphysical_frag,
};
const Bs = { r: 0, b: 0, g: 0 },
  $n = new nn(),
  ap = new Ve();
function op(s, e, t, n, i, r, a) {
  const o = new Re(0);
  let c = r === !0 ? 0 : 1,
    l,
    u,
    h = null,
    d = 0,
    m = null;
  function g(p, f) {
    let E = !1,
      M = f.isScene === !0 ? f.background : null;
    M && M.isTexture && (M = (f.backgroundBlurriness > 0 ? t : e).get(M)),
      M === null ? x(o, c) : M && M.isColor && (x(M, 1), (E = !0));
    const y = s.xr.getEnvironmentBlendMode();
    y === "additive"
      ? n.buffers.color.setClear(0, 0, 0, 1, a)
      : y === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a),
      (s.autoClear || E) &&
        s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil),
      M && (M.isCubeTexture || M.mapping === ir)
        ? (u === void 0 &&
            ((u = new tt(
              new Vn(1, 1, 1),
              new kn({
                name: "BackgroundCubeMaterial",
                uniforms: Vi(rn.backgroundCube.uniforms),
                vertexShader: rn.backgroundCube.vertexShader,
                fragmentShader: rn.backgroundCube.fragmentShader,
                side: Ot,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            u.geometry.deleteAttribute("normal"),
            u.geometry.deleteAttribute("uv"),
            (u.onBeforeRender = function (P, C, b) {
              this.matrixWorld.copyPosition(b.matrixWorld);
            }),
            Object.defineProperty(u.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            i.update(u)),
          $n.copy(f.backgroundRotation),
          ($n.x *= -1),
          ($n.y *= -1),
          ($n.z *= -1),
          M.isCubeTexture &&
            M.isRenderTargetTexture === !1 &&
            (($n.y *= -1), ($n.z *= -1)),
          (u.material.uniforms.envMap.value = M),
          (u.material.uniforms.flipEnvMap.value =
            M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1),
          (u.material.uniforms.backgroundBlurriness.value =
            f.backgroundBlurriness),
          (u.material.uniforms.backgroundIntensity.value =
            f.backgroundIntensity),
          u.material.uniforms.backgroundRotation.value.setFromMatrix4(
            ap.makeRotationFromEuler($n)
          ),
          (u.material.toneMapped = $e.getTransfer(M.colorSpace) !== at),
          (h !== M || d !== M.version || m !== s.toneMapping) &&
            ((u.material.needsUpdate = !0),
            (h = M),
            (d = M.version),
            (m = s.toneMapping)),
          u.layers.enableAll(),
          p.unshift(u, u.geometry, u.material, 0, 0, null))
        : M &&
          M.isTexture &&
          (l === void 0 &&
            ((l = new tt(
              new rr(2, 2),
              new kn({
                name: "BackgroundMaterial",
                uniforms: Vi(rn.background.uniforms),
                vertexShader: rn.background.vertexShader,
                fragmentShader: rn.background.fragmentShader,
                side: En,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            l.geometry.deleteAttribute("normal"),
            Object.defineProperty(l.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            i.update(l)),
          (l.material.uniforms.t2D.value = M),
          (l.material.uniforms.backgroundIntensity.value =
            f.backgroundIntensity),
          (l.material.toneMapped = $e.getTransfer(M.colorSpace) !== at),
          M.matrixAutoUpdate === !0 && M.updateMatrix(),
          l.material.uniforms.uvTransform.value.copy(M.matrix),
          (h !== M || d !== M.version || m !== s.toneMapping) &&
            ((l.material.needsUpdate = !0),
            (h = M),
            (d = M.version),
            (m = s.toneMapping)),
          l.layers.enableAll(),
          p.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function x(p, f) {
    p.getRGB(Bs, fl(s)), n.buffers.color.setClear(Bs.r, Bs.g, Bs.b, f, a);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (p, f = 1) {
      o.set(p), (c = f), x(o, c);
    },
    getClearAlpha: function () {
      return c;
    },
    setClearAlpha: function (p) {
      (c = p), x(o, c);
    },
    render: g,
  };
}
function cp(s, e, t, n) {
  const i = s.getParameter(s.MAX_VERTEX_ATTRIBS),
    r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    a = n.isWebGL2 || r !== null,
    o = {},
    c = p(null);
  let l = c,
    u = !1;
  function h(I, W, k, j, V) {
    let Y = !1;
    if (a) {
      const K = x(j, k, W);
      l !== K && ((l = K), m(l.object)),
        (Y = f(I, j, k, V)),
        Y && E(I, j, k, V);
    } else {
      const K = W.wireframe === !0;
      (l.geometry !== j.id || l.program !== k.id || l.wireframe !== K) &&
        ((l.geometry = j.id), (l.program = k.id), (l.wireframe = K), (Y = !0));
    }
    V !== null && t.update(V, s.ELEMENT_ARRAY_BUFFER),
      (Y || u) &&
        ((u = !1),
        F(I, W, k, j),
        V !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, t.get(V).buffer));
  }
  function d() {
    return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES();
  }
  function m(I) {
    return n.isWebGL2 ? s.bindVertexArray(I) : r.bindVertexArrayOES(I);
  }
  function g(I) {
    return n.isWebGL2 ? s.deleteVertexArray(I) : r.deleteVertexArrayOES(I);
  }
  function x(I, W, k) {
    const j = k.wireframe === !0;
    let V = o[I.id];
    V === void 0 && ((V = {}), (o[I.id] = V));
    let Y = V[W.id];
    Y === void 0 && ((Y = {}), (V[W.id] = Y));
    let K = Y[j];
    return K === void 0 && ((K = p(d())), (Y[j] = K)), K;
  }
  function p(I) {
    const W = [],
      k = [],
      j = [];
    for (let V = 0; V < i; V++) (W[V] = 0), (k[V] = 0), (j[V] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: W,
      enabledAttributes: k,
      attributeDivisors: j,
      object: I,
      attributes: {},
      index: null,
    };
  }
  function f(I, W, k, j) {
    const V = l.attributes,
      Y = W.attributes;
    let K = 0;
    const oe = k.getAttributes();
    for (const pe in oe)
      if (oe[pe].location >= 0) {
        const H = V[pe];
        let ee = Y[pe];
        if (
          (ee === void 0 &&
            (pe === "instanceMatrix" &&
              I.instanceMatrix &&
              (ee = I.instanceMatrix),
            pe === "instanceColor" &&
              I.instanceColor &&
              (ee = I.instanceColor)),
          H === void 0 || H.attribute !== ee || (ee && H.data !== ee.data))
        )
          return !0;
        K++;
      }
    return l.attributesNum !== K || l.index !== j;
  }
  function E(I, W, k, j) {
    const V = {},
      Y = W.attributes;
    let K = 0;
    const oe = k.getAttributes();
    for (const pe in oe)
      if (oe[pe].location >= 0) {
        let H = Y[pe];
        H === void 0 &&
          (pe === "instanceMatrix" &&
            I.instanceMatrix &&
            (H = I.instanceMatrix),
          pe === "instanceColor" && I.instanceColor && (H = I.instanceColor));
        const ee = {};
        (ee.attribute = H),
          H && H.data && (ee.data = H.data),
          (V[pe] = ee),
          K++;
      }
    (l.attributes = V), (l.attributesNum = K), (l.index = j);
  }
  function M() {
    const I = l.newAttributes;
    for (let W = 0, k = I.length; W < k; W++) I[W] = 0;
  }
  function y(I) {
    P(I, 0);
  }
  function P(I, W) {
    const k = l.newAttributes,
      j = l.enabledAttributes,
      V = l.attributeDivisors;
    (k[I] = 1),
      j[I] === 0 && (s.enableVertexAttribArray(I), (j[I] = 1)),
      V[I] !== W &&
        ((n.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](I, W),
        (V[I] = W));
  }
  function C() {
    const I = l.newAttributes,
      W = l.enabledAttributes;
    for (let k = 0, j = W.length; k < j; k++)
      W[k] !== I[k] && (s.disableVertexAttribArray(k), (W[k] = 0));
  }
  function b(I, W, k, j, V, Y, K) {
    K === !0
      ? s.vertexAttribIPointer(I, W, k, V, Y)
      : s.vertexAttribPointer(I, W, k, j, V, Y);
  }
  function F(I, W, k, j) {
    if (
      n.isWebGL2 === !1 &&
      (I.isInstancedMesh || j.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    M();
    const V = j.attributes,
      Y = k.getAttributes(),
      K = W.defaultAttributeValues;
    for (const oe in Y) {
      const pe = Y[oe];
      if (pe.location >= 0) {
        let Ie = V[oe];
        if (
          (Ie === void 0 &&
            (oe === "instanceMatrix" &&
              I.instanceMatrix &&
              (Ie = I.instanceMatrix),
            oe === "instanceColor" &&
              I.instanceColor &&
              (Ie = I.instanceColor)),
          Ie !== void 0)
        ) {
          const H = Ie.normalized,
            ee = Ie.itemSize,
            fe = t.get(Ie);
          if (fe === void 0) continue;
          const Le = fe.buffer,
            Me = fe.type,
            me = fe.bytesPerElement,
            Ke =
              n.isWebGL2 === !0 &&
              (Me === s.INT || Me === s.UNSIGNED_INT || Ie.gpuType === Yc);
          if (Ie.isInterleavedBufferAttribute) {
            const Ce = Ie.data,
              N = Ce.stride,
              _t = Ie.offset;
            if (Ce.isInstancedInterleavedBuffer) {
              for (let ye = 0; ye < pe.locationSize; ye++)
                P(pe.location + ye, Ce.meshPerAttribute);
              I.isInstancedMesh !== !0 &&
                j._maxInstanceCount === void 0 &&
                (j._maxInstanceCount = Ce.meshPerAttribute * Ce.count);
            } else
              for (let ye = 0; ye < pe.locationSize; ye++) y(pe.location + ye);
            s.bindBuffer(s.ARRAY_BUFFER, Le);
            for (let ye = 0; ye < pe.locationSize; ye++)
              b(
                pe.location + ye,
                ee / pe.locationSize,
                Me,
                H,
                N * me,
                (_t + (ee / pe.locationSize) * ye) * me,
                Ke
              );
          } else {
            if (Ie.isInstancedBufferAttribute) {
              for (let Ce = 0; Ce < pe.locationSize; Ce++)
                P(pe.location + Ce, Ie.meshPerAttribute);
              I.isInstancedMesh !== !0 &&
                j._maxInstanceCount === void 0 &&
                (j._maxInstanceCount = Ie.meshPerAttribute * Ie.count);
            } else
              for (let Ce = 0; Ce < pe.locationSize; Ce++) y(pe.location + Ce);
            s.bindBuffer(s.ARRAY_BUFFER, Le);
            for (let Ce = 0; Ce < pe.locationSize; Ce++)
              b(
                pe.location + Ce,
                ee / pe.locationSize,
                Me,
                H,
                ee * me,
                (ee / pe.locationSize) * Ce * me,
                Ke
              );
          }
        } else if (K !== void 0) {
          const H = K[oe];
          if (H !== void 0)
            switch (H.length) {
              case 2:
                s.vertexAttrib2fv(pe.location, H);
                break;
              case 3:
                s.vertexAttrib3fv(pe.location, H);
                break;
              case 4:
                s.vertexAttrib4fv(pe.location, H);
                break;
              default:
                s.vertexAttrib1fv(pe.location, H);
            }
        }
      }
    }
    C();
  }
  function $() {
    re();
    for (const I in o) {
      const W = o[I];
      for (const k in W) {
        const j = W[k];
        for (const V in j) g(j[V].object), delete j[V];
        delete W[k];
      }
      delete o[I];
    }
  }
  function v(I) {
    if (o[I.id] === void 0) return;
    const W = o[I.id];
    for (const k in W) {
      const j = W[k];
      for (const V in j) g(j[V].object), delete j[V];
      delete W[k];
    }
    delete o[I.id];
  }
  function w(I) {
    for (const W in o) {
      const k = o[W];
      if (k[I.id] === void 0) continue;
      const j = k[I.id];
      for (const V in j) g(j[V].object), delete j[V];
      delete k[I.id];
    }
  }
  function re() {
    Q(), (u = !0), l !== c && ((l = c), m(l.object));
  }
  function Q() {
    (c.geometry = null), (c.program = null), (c.wireframe = !1);
  }
  return {
    setup: h,
    reset: re,
    resetDefaultState: Q,
    dispose: $,
    releaseStatesOfGeometry: v,
    releaseStatesOfProgram: w,
    initAttributes: M,
    enableAttribute: y,
    disableUnusedAttributes: C,
  };
}
function lp(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function a(u) {
    r = u;
  }
  function o(u, h) {
    s.drawArrays(r, u, h), t.update(h, r, 1);
  }
  function c(u, h, d) {
    if (d === 0) return;
    let m, g;
    if (i) (m = s), (g = "drawArraysInstanced");
    else if (
      ((m = e.get("ANGLE_instanced_arrays")),
      (g = "drawArraysInstancedANGLE"),
      m === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    m[g](r, u, h, d), t.update(h, r, d);
  }
  function l(u, h, d) {
    if (d === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let g = 0; g < d; g++) this.render(u[g], h[g]);
    else {
      m.multiDrawArraysWEBGL(r, u, 0, h, 0, d);
      let g = 0;
      for (let x = 0; x < d; x++) g += h[x];
      t.update(g, r, 1);
    }
  }
  (this.setMode = a),
    (this.render = o),
    (this.renderInstances = c),
    (this.renderMultiDraw = l);
}
function up(s, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const b = e.get("EXT_texture_filter_anisotropic");
      n = s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function r(b) {
    if (b === "highp") {
      if (
        s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision >
          0 &&
        s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      b = "mediump";
    }
    return b === "mediump" &&
      s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision >
        0 &&
      s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  const a =
    typeof WebGL2RenderingContext < "u" &&
    s.constructor.name === "WebGL2RenderingContext";
  let o = t.precision !== void 0 ? t.precision : "highp";
  const c = r(o);
  c !== o &&
    (console.warn(
      "THREE.WebGLRenderer:",
      o,
      "not supported, using",
      c,
      "instead."
    ),
    (o = c));
  const l = a || e.has("WEBGL_draw_buffers"),
    u = t.logarithmicDepthBuffer === !0,
    h = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),
    d = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    m = s.getParameter(s.MAX_TEXTURE_SIZE),
    g = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),
    x = s.getParameter(s.MAX_VERTEX_ATTRIBS),
    p = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),
    f = s.getParameter(s.MAX_VARYING_VECTORS),
    E = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),
    M = d > 0,
    y = a || e.has("OES_texture_float"),
    P = M && y,
    C = a ? s.getParameter(s.MAX_SAMPLES) : 0;
  return {
    isWebGL2: a,
    drawBuffers: l,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: o,
    logarithmicDepthBuffer: u,
    maxTextures: h,
    maxVertexTextures: d,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: x,
    maxVertexUniforms: p,
    maxVaryings: f,
    maxFragmentUniforms: E,
    vertexTextures: M,
    floatFragmentTextures: y,
    floatVertexTextures: P,
    maxSamples: C,
  };
}
function hp(s) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    r = !1;
  const a = new Dn(),
    o = new ke(),
    c = { value: null, needsUpdate: !1 };
  (this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (h, d) {
      const m = h.length !== 0 || d || n !== 0 || i;
      return (i = d), (n = h.length), m;
    }),
    (this.beginShadows = function () {
      (r = !0), u(null);
    }),
    (this.endShadows = function () {
      r = !1;
    }),
    (this.setGlobalState = function (h, d) {
      t = u(h, d, 0);
    }),
    (this.setState = function (h, d, m) {
      const g = h.clippingPlanes,
        x = h.clipIntersection,
        p = h.clipShadows,
        f = s.get(h);
      if (!i || g === null || g.length === 0 || (r && !p)) r ? u(null) : l();
      else {
        const E = r ? 0 : n,
          M = E * 4;
        let y = f.clippingState || null;
        (c.value = y), (y = u(g, d, M, m));
        for (let P = 0; P !== M; ++P) y[P] = t[P];
        (f.clippingState = y),
          (this.numIntersection = x ? this.numPlanes : 0),
          (this.numPlanes += E);
      }
    });
  function l() {
    c.value !== t && ((c.value = t), (c.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function u(h, d, m, g) {
    const x = h !== null ? h.length : 0;
    let p = null;
    if (x !== 0) {
      if (((p = c.value), g !== !0 || p === null)) {
        const f = m + x * 4,
          E = d.matrixWorldInverse;
        o.getNormalMatrix(E),
          (p === null || p.length < f) && (p = new Float32Array(f));
        for (let M = 0, y = m; M !== x; ++M, y += 4)
          a.copy(h[M]).applyMatrix4(E, o),
            a.normal.toArray(p, y),
            (p[y + 3] = a.constant);
      }
      (c.value = p), (c.needsUpdate = !0);
    }
    return (e.numPlanes = x), (e.numIntersection = 0), p;
  }
}
function dp(s) {
  let e = new WeakMap();
  function t(a, o) {
    return o === ea ? (a.mapping = Fi) : o === ta && (a.mapping = Bi), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === ea || o === ta)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new Sh(c.height);
            return (
              l.fromEquirectangularTexture(s, a),
              e.set(a, l),
              a.addEventListener("dispose", i),
              t(l.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function r() {
    e = new WeakMap();
  }
  return { get: n, dispose: r };
}
class Ma extends pl {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = r),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, r, a) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let r = n - e,
      a = n + e,
      o = i + t,
      c = i - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += l * this.view.offsetX),
        (a = r + l * this.view.width),
        (o -= u * this.view.offsetY),
        (c = o - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      r,
      a,
      o,
      c,
      this.near,
      this.far,
      this.coordinateSystem
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const Ii = 4,
  jo = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  ni = 20,
  Fr = new Ma(),
  Ko = new Re();
let Br = null,
  zr = 0,
  Hr = 0;
const ei = (1 + Math.sqrt(5)) / 2,
  Ri = 1 / ei,
  Zo = [
    new L(1, 1, 1),
    new L(-1, 1, 1),
    new L(1, 1, -1),
    new L(-1, 1, -1),
    new L(0, ei, Ri),
    new L(0, ei, -Ri),
    new L(Ri, 0, ei),
    new L(-Ri, 0, ei),
    new L(ei, Ri, 0),
    new L(-ei, Ri, 0),
  ];
class oa {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (Br = this._renderer.getRenderTarget()),
      (zr = this._renderer.getActiveCubeFace()),
      (Hr = this._renderer.getActiveMipmapLevel()),
      this._setSize(256);
    const r = this._allocateTargets();
    return (
      (r.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, r),
      t > 0 && this._blur(r, 0, 0, t),
      this._applyPMREM(r),
      this._cleanup(r),
      r
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = Qo()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = Jo()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Br, zr, Hr),
      (e.scissorTest = !1),
      zs(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Fi || e.mapping === Bi
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (Br = this._renderer.getRenderTarget()),
      (zr = this._renderer.getActiveCubeFace()),
      (Hr = this._renderer.getActiveMipmapLevel());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: Pt,
        minFilter: Pt,
        generateMipmaps: !1,
        type: us,
        format: Yt,
        colorSpace: bt,
        depthBuffer: !1,
      },
      i = $o(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = $o(e, t, n));
      const { _lodMax: r } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = fp(r)),
        (this._blurMaterial = pp(r, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new tt(this._lodPlanes[0], e);
    this._renderer.compile(t, Fr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new Ut(90, 1, t, n),
      c = [1, -1, 1, 1, 1, 1],
      l = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      h = u.autoClear,
      d = u.toneMapping;
    u.getClearColor(Ko), (u.toneMapping = Hn), (u.autoClear = !1);
    const m = new Fn({
        name: "PMREM.Background",
        side: Ot,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new tt(new Vn(), m);
    let x = !1;
    const p = e.background;
    p
      ? p.isColor && (m.color.copy(p), (e.background = null), (x = !0))
      : (m.color.copy(Ko), (x = !0));
    for (let f = 0; f < 6; f++) {
      const E = f % 3;
      E === 0
        ? (o.up.set(0, c[f], 0), o.lookAt(l[f], 0, 0))
        : E === 1
        ? (o.up.set(0, 0, c[f]), o.lookAt(0, l[f], 0))
        : (o.up.set(0, c[f], 0), o.lookAt(0, 0, l[f]));
      const M = this._cubeSize;
      zs(i, E * M, f > 2 ? M : 0, M, M),
        u.setRenderTarget(i),
        x && u.render(g, o),
        u.render(e, o);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (u.toneMapping = d),
      (u.autoClear = h),
      (e.background = p);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === Fi || e.mapping === Bi;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Qo()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Jo());
    const r = i ? this._cubemapMaterial : this._equirectMaterial,
      a = new tt(this._lodPlanes[0], r),
      o = r.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    zs(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, Fr);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(
          this._sigmas[i] * this._sigmas[i] -
            this._sigmas[i - 1] * this._sigmas[i - 1]
        ),
        a = Zo[(i - 1) % Zo.length];
      this._blur(e, i - 1, i, r, a);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, i, "latitudinal", r),
      this._halfBlur(a, e, n, n, i, "longitudinal", r);
  }
  _halfBlur(e, t, n, i, r, a, o) {
    const c = this._renderer,
      l = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const u = 3,
      h = new tt(this._lodPlanes[i], l),
      d = l.uniforms,
      m = this._sizeLods[n] - 1,
      g = isFinite(r) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * ni - 1),
      x = r / g,
      p = isFinite(r) ? 1 + Math.floor(u * x) : ni;
    p > ni &&
      console.warn(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ni}`
      );
    const f = [];
    let E = 0;
    for (let b = 0; b < ni; ++b) {
      const F = b / x,
        $ = Math.exp((-F * F) / 2);
      f.push($), b === 0 ? (E += $) : b < p && (E += 2 * $);
    }
    for (let b = 0; b < f.length; b++) f[b] = f[b] / E;
    (d.envMap.value = e.texture),
      (d.samples.value = p),
      (d.weights.value = f),
      (d.latitudinal.value = a === "latitudinal"),
      o && (d.poleAxis.value = o);
    const { _lodMax: M } = this;
    (d.dTheta.value = g), (d.mipInt.value = M - n);
    const y = this._sizeLods[i],
      P = 3 * y * (i > M - Ii ? i - M + Ii : 0),
      C = 4 * (this._cubeSize - y);
    zs(t, P, C, 3 * y, 2 * y), c.setRenderTarget(t), c.render(h, Fr);
  }
}
function fp(s) {
  const e = [],
    t = [],
    n = [];
  let i = s;
  const r = s - Ii + 1 + jo.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let c = 1 / o;
    a > s - Ii ? (c = jo[a - s + Ii - 1]) : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2),
      u = -l,
      h = 1 + l,
      d = [u, u, h, u, h, h, u, u, h, h, u, h],
      m = 6,
      g = 6,
      x = 3,
      p = 2,
      f = 1,
      E = new Float32Array(x * g * m),
      M = new Float32Array(p * g * m),
      y = new Float32Array(f * g * m);
    for (let C = 0; C < m; C++) {
      const b = ((C % 3) * 2) / 3 - 1,
        F = C > 2 ? 0 : -1,
        $ = [
          b,
          F,
          0,
          b + 2 / 3,
          F,
          0,
          b + 2 / 3,
          F + 1,
          0,
          b,
          F,
          0,
          b + 2 / 3,
          F + 1,
          0,
          b,
          F + 1,
          0,
        ];
      E.set($, x * g * C), M.set(d, p * g * C);
      const v = [C, C, C, C, C, C];
      y.set(v, f * g * C);
    }
    const P = new un();
    P.setAttribute("position", new Ft(E, x)),
      P.setAttribute("uv", new Ft(M, p)),
      P.setAttribute("faceIndex", new Ft(y, f)),
      e.push(P),
      i > Ii && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function $o(s, e, t) {
  const n = new ai(s, e, t);
  return (
    (n.texture.mapping = ir),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function zs(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function pp(s, e, t) {
  const n = new Float32Array(ni),
    i = new L(0, 1, 0);
  return new kn({
    name: "SphericalGaussianBlur",
    defines: {
      n: ni,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: Sa(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: zn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Jo() {
  return new kn({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Sa(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: zn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Qo() {
  return new kn({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Sa(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: zn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Sa() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function mp(s) {
  let e = new WeakMap(),
    t = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping,
        l = c === ea || c === ta,
        u = c === Fi || c === Bi;
      if (l || u)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let h = e.get(o);
          return (
            t === null && (t = new oa(s)),
            (h = l ? t.fromEquirectangular(o, h) : t.fromCubemap(o, h)),
            e.set(o, h),
            h.texture
          );
        } else {
          if (e.has(o)) return e.get(o).texture;
          {
            const h = o.image;
            if ((l && h && h.height > 0) || (u && h && i(h))) {
              t === null && (t = new oa(s));
              const d = l ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, d), o.addEventListener("dispose", r), d.texture;
            } else return null;
          }
        }
    }
    return o;
  }
  function i(o) {
    let c = 0;
    const l = 6;
    for (let u = 0; u < l; u++) o[u] !== void 0 && c++;
    return c === l;
  }
  function r(o) {
    const c = o.target;
    c.removeEventListener("dispose", r);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: a };
}
function gp(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          s.getExtension("WEBGL_depth_texture") ||
          s.getExtension("MOZ_WEBGL_depth_texture") ||
          s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          s.getExtension("EXT_texture_filter_anisotropic") ||
          s.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          s.getExtension("WEBGL_compressed_texture_s3tc") ||
          s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          s.getExtension("WEBGL_compressed_texture_pvrtc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? (t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"))
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        i
      );
    },
  };
}
function _p(s, e, t, n) {
  const i = {},
    r = new WeakMap();
  function a(h) {
    const d = h.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes) e.remove(d.attributes[g]);
    for (const g in d.morphAttributes) {
      const x = d.morphAttributes[g];
      for (let p = 0, f = x.length; p < f; p++) e.remove(x[p]);
    }
    d.removeEventListener("dispose", a), delete i[d.id];
    const m = r.get(d);
    m && (e.remove(m), r.delete(d)),
      n.releaseStatesOfGeometry(d),
      d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount,
      t.memory.geometries--;
  }
  function o(h, d) {
    return (
      i[d.id] === !0 ||
        (d.addEventListener("dispose", a),
        (i[d.id] = !0),
        t.memory.geometries++),
      d
    );
  }
  function c(h) {
    const d = h.attributes;
    for (const g in d) e.update(d[g], s.ARRAY_BUFFER);
    const m = h.morphAttributes;
    for (const g in m) {
      const x = m[g];
      for (let p = 0, f = x.length; p < f; p++) e.update(x[p], s.ARRAY_BUFFER);
    }
  }
  function l(h) {
    const d = [],
      m = h.index,
      g = h.attributes.position;
    let x = 0;
    if (m !== null) {
      const E = m.array;
      x = m.version;
      for (let M = 0, y = E.length; M < y; M += 3) {
        const P = E[M + 0],
          C = E[M + 1],
          b = E[M + 2];
        d.push(P, C, C, b, b, P);
      }
    } else if (g !== void 0) {
      const E = g.array;
      x = g.version;
      for (let M = 0, y = E.length / 3 - 1; M < y; M += 3) {
        const P = M + 0,
          C = M + 1,
          b = M + 2;
        d.push(P, C, C, b, b, P);
      }
    } else return;
    const p = new (sl(d) ? dl : hl)(d, 1);
    p.version = x;
    const f = r.get(h);
    f && e.remove(f), r.set(h, p);
  }
  function u(h) {
    const d = r.get(h);
    if (d) {
      const m = h.index;
      m !== null && d.version < m.version && l(h);
    } else l(h);
    return r.get(h);
  }
  return { get: o, update: c, getWireframeAttribute: u };
}
function xp(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function a(m) {
    r = m;
  }
  let o, c;
  function l(m) {
    (o = m.type), (c = m.bytesPerElement);
  }
  function u(m, g) {
    s.drawElements(r, g, o, m * c), t.update(g, r, 1);
  }
  function h(m, g, x) {
    if (x === 0) return;
    let p, f;
    if (i) (p = s), (f = "drawElementsInstanced");
    else if (
      ((p = e.get("ANGLE_instanced_arrays")),
      (f = "drawElementsInstancedANGLE"),
      p === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    p[f](r, g, o, m * c, x), t.update(g, r, x);
  }
  function d(m, g, x) {
    if (x === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let f = 0; f < x; f++) this.render(m[f] / c, g[f]);
    else {
      p.multiDrawElementsWEBGL(r, g, 0, o, m, 0, x);
      let f = 0;
      for (let E = 0; E < x; E++) f += g[E];
      t.update(f, r, 1);
    }
  }
  (this.setMode = a),
    (this.setIndex = l),
    (this.render = u),
    (this.renderInstances = h),
    (this.renderMultiDraw = d);
}
function vp(s) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch ((t.calls++, a)) {
      case s.TRIANGLES:
        t.triangles += o * (r / 3);
        break;
      case s.LINES:
        t.lines += o * (r / 2);
        break;
      case s.LINE_STRIP:
        t.lines += o * (r - 1);
        break;
      case s.LINE_LOOP:
        t.lines += o * r;
        break;
      case s.POINTS:
        t.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function Mp(s, e) {
  return s[0] - e[0];
}
function Sp(s, e) {
  return Math.abs(e[1]) - Math.abs(s[1]);
}
function yp(s, e, t) {
  const n = {},
    i = new Float32Array(8),
    r = new WeakMap(),
    a = new it(),
    o = [];
  for (let l = 0; l < 8; l++) o[l] = [l, 0];
  function c(l, u, h) {
    const d = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g =
          u.morphAttributes.position ||
          u.morphAttributes.normal ||
          u.morphAttributes.color,
        x = g !== void 0 ? g.length : 0;
      let p = r.get(u);
      if (p === void 0 || p.count !== x) {
        let Q = function () {
          w.dispose(), r.delete(u), u.removeEventListener("dispose", Q);
        };
        var m = Q;
        p !== void 0 && p.texture.dispose();
        const f = u.morphAttributes.position !== void 0,
          E = u.morphAttributes.normal !== void 0,
          M = u.morphAttributes.color !== void 0,
          y = u.morphAttributes.position || [],
          P = u.morphAttributes.normal || [],
          C = u.morphAttributes.color || [];
        let b = 0;
        f === !0 && (b = 1), E === !0 && (b = 2), M === !0 && (b = 3);
        let F = u.attributes.position.count * b,
          $ = 1;
        F > e.maxTextureSize &&
          (($ = Math.ceil(F / e.maxTextureSize)), (F = e.maxTextureSize));
        const v = new Float32Array(F * $ * 4 * x),
          w = new cl(v, F, $, x);
        (w.type = Jt), (w.needsUpdate = !0);
        const re = b * 4;
        for (let I = 0; I < x; I++) {
          const W = y[I],
            k = P[I],
            j = C[I],
            V = F * $ * 4 * I;
          for (let Y = 0; Y < W.count; Y++) {
            const K = Y * re;
            f === !0 &&
              (a.fromBufferAttribute(W, Y),
              (v[V + K + 0] = a.x),
              (v[V + K + 1] = a.y),
              (v[V + K + 2] = a.z),
              (v[V + K + 3] = 0)),
              E === !0 &&
                (a.fromBufferAttribute(k, Y),
                (v[V + K + 4] = a.x),
                (v[V + K + 5] = a.y),
                (v[V + K + 6] = a.z),
                (v[V + K + 7] = 0)),
              M === !0 &&
                (a.fromBufferAttribute(j, Y),
                (v[V + K + 8] = a.x),
                (v[V + K + 9] = a.y),
                (v[V + K + 10] = a.z),
                (v[V + K + 11] = j.itemSize === 4 ? a.w : 1));
          }
        }
        (p = { count: x, texture: w, size: new be(F, $) }),
          r.set(u, p),
          u.addEventListener("dispose", Q);
      }
      if (l.isInstancedMesh === !0 && l.morphTexture !== null)
        h.getUniforms().setValue(s, "morphTexture", l.morphTexture, t);
      else {
        let f = 0;
        for (let M = 0; M < d.length; M++) f += d[M];
        const E = u.morphTargetsRelative ? 1 : 1 - f;
        h.getUniforms().setValue(s, "morphTargetBaseInfluence", E),
          h.getUniforms().setValue(s, "morphTargetInfluences", d);
      }
      h.getUniforms().setValue(s, "morphTargetsTexture", p.texture, t),
        h.getUniforms().setValue(s, "morphTargetsTextureSize", p.size);
    } else {
      const g = d === void 0 ? 0 : d.length;
      let x = n[u.id];
      if (x === void 0 || x.length !== g) {
        x = [];
        for (let y = 0; y < g; y++) x[y] = [y, 0];
        n[u.id] = x;
      }
      for (let y = 0; y < g; y++) {
        const P = x[y];
        (P[0] = y), (P[1] = d[y]);
      }
      x.sort(Sp);
      for (let y = 0; y < 8; y++)
        y < g && x[y][1]
          ? ((o[y][0] = x[y][0]), (o[y][1] = x[y][1]))
          : ((o[y][0] = Number.MAX_SAFE_INTEGER), (o[y][1] = 0));
      o.sort(Mp);
      const p = u.morphAttributes.position,
        f = u.morphAttributes.normal;
      let E = 0;
      for (let y = 0; y < 8; y++) {
        const P = o[y],
          C = P[0],
          b = P[1];
        C !== Number.MAX_SAFE_INTEGER && b
          ? (p &&
              u.getAttribute("morphTarget" + y) !== p[C] &&
              u.setAttribute("morphTarget" + y, p[C]),
            f &&
              u.getAttribute("morphNormal" + y) !== f[C] &&
              u.setAttribute("morphNormal" + y, f[C]),
            (i[y] = b),
            (E += b))
          : (p &&
              u.hasAttribute("morphTarget" + y) === !0 &&
              u.deleteAttribute("morphTarget" + y),
            f &&
              u.hasAttribute("morphNormal" + y) === !0 &&
              u.deleteAttribute("morphNormal" + y),
            (i[y] = 0));
      }
      const M = u.morphTargetsRelative ? 1 : 1 - E;
      h.getUniforms().setValue(s, "morphTargetBaseInfluence", M),
        h.getUniforms().setValue(s, "morphTargetInfluences", i);
    }
  }
  return { update: c };
}
function Ep(s, e, t, n) {
  let i = new WeakMap();
  function r(c) {
    const l = n.render.frame,
      u = c.geometry,
      h = e.get(c, u);
    if (
      (i.get(h) !== l && (e.update(h), i.set(h, l)),
      c.isInstancedMesh &&
        (c.hasEventListener("dispose", o) === !1 &&
          c.addEventListener("dispose", o),
        i.get(c) !== l &&
          (t.update(c.instanceMatrix, s.ARRAY_BUFFER),
          c.instanceColor !== null && t.update(c.instanceColor, s.ARRAY_BUFFER),
          i.set(c, l))),
      c.isSkinnedMesh)
    ) {
      const d = c.skeleton;
      i.get(d) !== l && (d.update(), i.set(d, l));
    }
    return h;
  }
  function a() {
    i = new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o),
      t.remove(l.instanceMatrix),
      l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return { update: r, dispose: a };
}
class _l extends Tt {
  constructor(e, t, n, i, r, a, o, c, l, u) {
    if (((u = u !== void 0 ? u : ri), u !== ri && u !== Hi))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && u === ri && (n = On),
      n === void 0 && u === Hi && (n = si),
      super(null, i, r, a, o, c, u, n, l),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = o !== void 0 ? o : Et),
      (this.minFilter = c !== void 0 ? c : Et),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
const xl = new Tt(),
  vl = new _l(1, 1);
vl.compareFunction = nl;
const Ml = new cl(),
  Sl = new sh(),
  yl = new ml(),
  ec = [],
  tc = [],
  nc = new Float32Array(16),
  ic = new Float32Array(9),
  sc = new Float32Array(4);
function qi(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = ec[i];
  if ((r === void 0 && ((r = new Float32Array(i)), (ec[i] = r)), e !== 0)) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a) (o += t), s[a].toArray(r, o);
  }
  return r;
}
function xt(s, e) {
  if (s.length !== e.length) return !1;
  for (let t = 0, n = s.length; t < n; t++) if (s[t] !== e[t]) return !1;
  return !0;
}
function vt(s, e) {
  for (let t = 0, n = e.length; t < n; t++) s[t] = e[t];
}
function ar(s, e) {
  let t = tc[e];
  t === void 0 && ((t = new Int32Array(e)), (tc[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = s.allocateTextureUnit();
  return t;
}
function Tp(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), (t[0] = e));
}
function Ap(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (xt(t, e)) return;
    s.uniform2fv(this.addr, e), vt(t, e);
  }
}
function bp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (s.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (xt(t, e)) return;
    s.uniform3fv(this.addr, e), vt(t, e);
  }
}
function wp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (xt(t, e)) return;
    s.uniform4fv(this.addr, e), vt(t, e);
  }
}
function Rp(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (xt(t, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), vt(t, e);
  } else {
    if (xt(t, n)) return;
    sc.set(n), s.uniformMatrix2fv(this.addr, !1, sc), vt(t, n);
  }
}
function Cp(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (xt(t, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), vt(t, e);
  } else {
    if (xt(t, n)) return;
    ic.set(n), s.uniformMatrix3fv(this.addr, !1, ic), vt(t, n);
  }
}
function Lp(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (xt(t, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), vt(t, e);
  } else {
    if (xt(t, n)) return;
    nc.set(n), s.uniformMatrix4fv(this.addr, !1, nc), vt(t, n);
  }
}
function Pp(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), (t[0] = e));
}
function Ip(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (xt(t, e)) return;
    s.uniform2iv(this.addr, e), vt(t, e);
  }
}
function Dp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (xt(t, e)) return;
    s.uniform3iv(this.addr, e), vt(t, e);
  }
}
function Np(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (xt(t, e)) return;
    s.uniform4iv(this.addr, e), vt(t, e);
  }
}
function Up(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), (t[0] = e));
}
function Op(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (xt(t, e)) return;
    s.uniform2uiv(this.addr, e), vt(t, e);
  }
}
function Fp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (xt(t, e)) return;
    s.uniform3uiv(this.addr, e), vt(t, e);
  }
}
function Bp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (xt(t, e)) return;
    s.uniform4uiv(this.addr, e), vt(t, e);
  }
}
function zp(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i));
  const r = this.type === s.SAMPLER_2D_SHADOW ? vl : xl;
  t.setTexture2D(e || r, i);
}
function Hp(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || Sl, i);
}
function Gp(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || yl, i);
}
function kp(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || Ml, i);
}
function Vp(s) {
  switch (s) {
    case 5126:
      return Tp;
    case 35664:
      return Ap;
    case 35665:
      return bp;
    case 35666:
      return wp;
    case 35674:
      return Rp;
    case 35675:
      return Cp;
    case 35676:
      return Lp;
    case 5124:
    case 35670:
      return Pp;
    case 35667:
    case 35671:
      return Ip;
    case 35668:
    case 35672:
      return Dp;
    case 35669:
    case 35673:
      return Np;
    case 5125:
      return Up;
    case 36294:
      return Op;
    case 36295:
      return Fp;
    case 36296:
      return Bp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return zp;
    case 35679:
    case 36299:
    case 36307:
      return Hp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Gp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return kp;
  }
}
function Wp(s, e) {
  s.uniform1fv(this.addr, e);
}
function Xp(s, e) {
  const t = qi(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function qp(s, e) {
  const t = qi(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function Yp(s, e) {
  const t = qi(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function jp(s, e) {
  const t = qi(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function Kp(s, e) {
  const t = qi(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function Zp(s, e) {
  const t = qi(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function $p(s, e) {
  s.uniform1iv(this.addr, e);
}
function Jp(s, e) {
  s.uniform2iv(this.addr, e);
}
function Qp(s, e) {
  s.uniform3iv(this.addr, e);
}
function em(s, e) {
  s.uniform4iv(this.addr, e);
}
function tm(s, e) {
  s.uniform1uiv(this.addr, e);
}
function nm(s, e) {
  s.uniform2uiv(this.addr, e);
}
function im(s, e) {
  s.uniform3uiv(this.addr, e);
}
function sm(s, e) {
  s.uniform4uiv(this.addr, e);
}
function rm(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = ar(t, i);
  xt(n, r) || (s.uniform1iv(this.addr, r), vt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture2D(e[a] || xl, r[a]);
}
function am(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = ar(t, i);
  xt(n, r) || (s.uniform1iv(this.addr, r), vt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture3D(e[a] || Sl, r[a]);
}
function om(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = ar(t, i);
  xt(n, r) || (s.uniform1iv(this.addr, r), vt(n, r));
  for (let a = 0; a !== i; ++a) t.setTextureCube(e[a] || yl, r[a]);
}
function cm(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = ar(t, i);
  xt(n, r) || (s.uniform1iv(this.addr, r), vt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture2DArray(e[a] || Ml, r[a]);
}
function lm(s) {
  switch (s) {
    case 5126:
      return Wp;
    case 35664:
      return Xp;
    case 35665:
      return qp;
    case 35666:
      return Yp;
    case 35674:
      return jp;
    case 35675:
      return Kp;
    case 35676:
      return Zp;
    case 5124:
    case 35670:
      return $p;
    case 35667:
    case 35671:
      return Jp;
    case 35668:
    case 35672:
      return Qp;
    case 35669:
    case 35673:
      return em;
    case 5125:
      return tm;
    case 36294:
      return nm;
    case 36295:
      return im;
    case 36296:
      return sm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return rm;
    case 35679:
    case 36299:
    case 36307:
      return am;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return om;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return cm;
  }
}
class um {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = Vp(t.type));
  }
}
class hm {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = lm(t.type));
  }
}
class dm {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const o = i[r];
      o.setValue(e, t[o.id], n);
    }
  }
}
const Gr = /(\w+)(\])?(\[|\.)?/g;
function rc(s, e) {
  s.seq.push(e), (s.map[e.id] = e);
}
function fm(s, e, t) {
  const n = s.name,
    i = n.length;
  for (Gr.lastIndex = 0; ; ) {
    const r = Gr.exec(n),
      a = Gr.lastIndex;
    let o = r[1];
    const c = r[2] === "]",
      l = r[3];
    if ((c && (o = o | 0), l === void 0 || (l === "[" && a + 2 === i))) {
      rc(t, l === void 0 ? new um(o, s, e) : new hm(o, s, e));
      break;
    } else {
      let h = t.map[o];
      h === void 0 && ((h = new dm(o)), rc(t, h)), (t = h);
    }
  }
}
class js {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i),
        a = e.getUniformLocation(t, r.name);
      fm(r, a, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r],
        c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function ac(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
const pm = 37297;
let mm = 0;
function gm(s, e) {
  const t = s.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    r = Math.min(e + 6, t.length);
  for (let a = i; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function _m(s) {
  const e = $e.getPrimaries($e.workingColorSpace),
    t = $e.getPrimaries(s);
  let n;
  switch (
    (e === t
      ? (n = "")
      : e === Qs && t === Js
      ? (n = "LinearDisplayP3ToLinearSRGB")
      : e === Js && t === Qs && (n = "LinearSRGBToLinearDisplayP3"),
    s)
  ) {
    case bt:
    case sr:
      return [n, "LinearTransferOETF"];
    case Nt:
    case _a:
      return [n, "sRGBTransferOETF"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space:", s),
        [n, "LinearTransferOETF"]
      );
  }
}
function oc(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS),
    i = s.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const a = parseInt(r[1]);
    return (
      t.toUpperCase() +
      `

` +
      i +
      `

` +
      gm(s.getShaderSource(e), a)
    );
  } else return i;
}
function xm(s, e) {
  const t = _m(e);
  return `vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function vm(s, e) {
  let t;
  switch (e) {
    case fu:
      t = "Linear";
      break;
    case pu:
      t = "Reinhard";
      break;
    case mu:
      t = "OptimizedCineon";
      break;
    case Xc:
      t = "ACESFilmic";
      break;
    case _u:
      t = "AgX";
      break;
    case xu:
      t = "Neutral";
      break;
    case gu:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function Mm(s) {
  return [
    s.extensionDerivatives ||
    s.envMapCubeUVHeight ||
    s.bumpMap ||
    s.normalMapTangentSpace ||
    s.clearcoatNormalMap ||
    s.flatShading ||
    s.alphaToCoverage ||
    s.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (s.extensionFragDepth || s.logarithmicDepthBuffer) &&
    s.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    s.extensionDrawBuffers && s.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (s.extensionShaderTextureLOD || s.envMap || s.transmission) &&
    s.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(Di).join(`
`);
}
function Sm(s) {
  return [
    s.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(Di).join(`
`);
}
function ym(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Em(s, e) {
  const t = {},
    n = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i),
      a = r.name;
    let o = 1;
    r.type === s.FLOAT_MAT2 && (o = 2),
      r.type === s.FLOAT_MAT3 && (o = 3),
      r.type === s.FLOAT_MAT4 && (o = 4),
      (t[a] = {
        type: r.type,
        location: s.getAttribLocation(e, a),
        locationSize: o,
      });
  }
  return t;
}
function Di(s) {
  return s !== "";
}
function cc(s, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function lc(s, e) {
  return s
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const Tm = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ca(s) {
  return s.replace(Tm, bm);
}
const Am = new Map([
  ["encodings_fragment", "colorspace_fragment"],
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  ["output_fragment", "opaque_fragment"],
]);
function bm(s, e) {
  let t = Ge[e];
  if (t === void 0) {
    const n = Am.get(e);
    if (n !== void 0)
      (t = Ge[n]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          n
        );
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return ca(t);
}
const wm =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function uc(s) {
  return s.replace(wm, Rm);
}
function Rm(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + r + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function hc(s) {
  let e = `precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;
  return (
    s.isWebGL2 &&
      (e += `precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),
    s.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : s.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : s.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function Cm(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    s.shadowMapType === Vc
      ? (e = "SHADOWMAP_TYPE_PCF")
      : s.shadowMapType === Wc
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : s.shadowMapType === vn && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function Lm(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case Fi:
      case Bi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case ir:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Pm(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case Bi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Im(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case pa:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case hu:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case du:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Dm(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function Nm(s, e, t, n) {
  const i = s.getContext(),
    r = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const c = Cm(t),
    l = Lm(t),
    u = Pm(t),
    h = Im(t),
    d = Dm(t),
    m = t.isWebGL2 ? "" : Mm(t),
    g = Sm(t),
    x = ym(r),
    p = i.createProgram();
  let f,
    E,
    M = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((f = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        x,
      ].filter(Di).join(`
`)),
      f.length > 0 &&
        (f += `
`),
      (E = [
        m,
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        x,
      ].filter(Di).join(`
`)),
      E.length > 0 &&
        (E += `
`))
    : ((f = [
        hc(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        x,
        t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        t.batching ? "#define USE_BATCHING" : "",
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + u : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(Di).join(`
`)),
      (E = [
        m,
        hc(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        x,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + l : "",
        t.envMap ? "#define " + u : "",
        t.envMap ? "#define " + h : "",
        d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
        d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
        d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + c : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Hn ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Hn ? Ge.tonemapping_pars_fragment : "",
        t.toneMapping !== Hn ? vm("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Ge.colorspace_pars_fragment,
        xm("linearToOutputTexel", t.outputColorSpace),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(Di).join(`
`))),
    (a = ca(a)),
    (a = cc(a, t)),
    (a = lc(a, t)),
    (o = ca(o)),
    (o = cc(o, t)),
    (o = lc(o, t)),
    (a = uc(a)),
    (o = uc(o)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((M = `#version 300 es
`),
      (f =
        [
          g,
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        f),
      (E =
        [
          "precision mediump sampler2DArray;",
          "#define varying in",
          t.glslVersion === Ro
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Ro ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        E));
  const y = M + f + a,
    P = M + E + o,
    C = ac(i, i.VERTEX_SHADER, y),
    b = ac(i, i.FRAGMENT_SHADER, P);
  i.attachShader(p, C),
    i.attachShader(p, b),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(p, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"),
    i.linkProgram(p);
  function F(re) {
    if (s.debug.checkShaderErrors) {
      const Q = i.getProgramInfoLog(p).trim(),
        I = i.getShaderInfoLog(C).trim(),
        W = i.getShaderInfoLog(b).trim();
      let k = !0,
        j = !0;
      if (i.getProgramParameter(p, i.LINK_STATUS) === !1)
        if (((k = !1), typeof s.debug.onShaderError == "function"))
          s.debug.onShaderError(i, p, C, b);
        else {
          const V = oc(i, C, "vertex"),
            Y = oc(i, b, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              i.getError() +
              " - VALIDATE_STATUS " +
              i.getProgramParameter(p, i.VALIDATE_STATUS) +
              `

Material Name: ` +
              re.name +
              `
Material Type: ` +
              re.type +
              `

Program Info Log: ` +
              Q +
              `
` +
              V +
              `
` +
              Y
          );
        }
      else
        Q !== ""
          ? console.warn("THREE.WebGLProgram: Program Info Log:", Q)
          : (I === "" || W === "") && (j = !1);
      j &&
        (re.diagnostics = {
          runnable: k,
          programLog: Q,
          vertexShader: { log: I, prefix: f },
          fragmentShader: { log: W, prefix: E },
        });
    }
    i.deleteShader(C), i.deleteShader(b), ($ = new js(i, p)), (v = Em(i, p));
  }
  let $;
  this.getUniforms = function () {
    return $ === void 0 && F(this), $;
  };
  let v;
  this.getAttributes = function () {
    return v === void 0 && F(this), v;
  };
  let w = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return w === !1 && (w = i.getProgramParameter(p, pm)), w;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(p),
        (this.program = void 0);
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = mm++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = p),
    (this.vertexShader = C),
    (this.fragmentShader = b),
    this
  );
}
let Um = 0;
class Om {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      r = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(i) === !1 && (a.add(i), i.usedTimes++),
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Fm(e)), t.set(e, n)), n;
  }
}
class Fm {
  constructor(e) {
    (this.id = Um++), (this.code = e), (this.usedTimes = 0);
  }
}
function Bm(s, e, t, n, i, r, a) {
  const o = new ll(),
    c = new Om(),
    l = new Set(),
    u = [],
    h = i.isWebGL2,
    d = i.logarithmicDepthBuffer,
    m = i.vertexTextures;
  let g = i.precision;
  const x = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function p(v) {
    return l.add(v), v === 0 ? "uv" : `uv${v}`;
  }
  function f(v, w, re, Q, I) {
    const W = Q.fog,
      k = I.geometry,
      j = v.isMeshStandardMaterial ? Q.environment : null,
      V = (v.isMeshStandardMaterial ? t : e).get(v.envMap || j),
      Y = V && V.mapping === ir ? V.image.height : null,
      K = x[v.type];
    v.precision !== null &&
      ((g = i.getMaxPrecision(v.precision)),
      g !== v.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          v.precision,
          "not supported, using",
          g,
          "instead."
        ));
    const oe =
        k.morphAttributes.position ||
        k.morphAttributes.normal ||
        k.morphAttributes.color,
      pe = oe !== void 0 ? oe.length : 0;
    let Ie = 0;
    k.morphAttributes.position !== void 0 && (Ie = 1),
      k.morphAttributes.normal !== void 0 && (Ie = 2),
      k.morphAttributes.color !== void 0 && (Ie = 3);
    let H, ee, fe, Le;
    if (K) {
      const Je = rn[K];
      (H = Je.vertexShader), (ee = Je.fragmentShader);
    } else
      (H = v.vertexShader),
        (ee = v.fragmentShader),
        c.update(v),
        (fe = c.getVertexShaderID(v)),
        (Le = c.getFragmentShaderID(v));
    const Me = s.getRenderTarget(),
      me = I.isInstancedMesh === !0,
      Ke = I.isBatchedMesh === !0,
      Ce = !!v.map,
      N = !!v.matcap,
      _t = !!V,
      ye = !!v.aoMap,
      Oe = !!v.lightMap,
      Te = !!v.bumpMap,
      Ye = !!v.normalMap,
      Fe = !!v.displacementMap,
      ze = !!v.emissiveMap,
      st = !!v.metalnessMap,
      T = !!v.roughnessMap,
      _ = v.anisotropy > 0,
      G = v.clearcoat > 0,
      X = v.iridescence > 0,
      te = v.sheen > 0,
      Z = v.transmission > 0,
      De = _ && !!v.anisotropyMap,
      Ae = G && !!v.clearcoatMap,
      ce = G && !!v.clearcoatNormalMap,
      ue = G && !!v.clearcoatRoughnessMap,
      Ne = X && !!v.iridescenceMap,
      ae = X && !!v.iridescenceThicknessMap,
      ft = te && !!v.sheenColorMap,
      We = te && !!v.sheenRoughnessMap,
      Se = !!v.specularMap,
      ge = !!v.specularColorMap,
      xe = !!v.specularIntensityMap,
      A = Z && !!v.transmissionMap,
      q = Z && !!v.thicknessMap,
      _e = !!v.gradientMap,
      R = !!v.alphaMap,
      ne = v.alphaTest > 0,
      U = !!v.alphaHash,
      J = !!v.extensions;
    let he = Hn;
    v.toneMapped &&
      (Me === null || Me.isXRRenderTarget === !0) &&
      (he = s.toneMapping);
    const qe = {
      isWebGL2: h,
      shaderID: K,
      shaderType: v.type,
      shaderName: v.name,
      vertexShader: H,
      fragmentShader: ee,
      defines: v.defines,
      customVertexShaderID: fe,
      customFragmentShaderID: Le,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: g,
      batching: Ke,
      instancing: me,
      instancingColor: me && I.instanceColor !== null,
      instancingMorph: me && I.morphTexture !== null,
      supportsVertexTextures: m,
      outputColorSpace:
        Me === null
          ? s.outputColorSpace
          : Me.isXRRenderTarget === !0
          ? Me.texture.colorSpace
          : bt,
      alphaToCoverage: !!v.alphaToCoverage,
      map: Ce,
      matcap: N,
      envMap: _t,
      envMapMode: _t && V.mapping,
      envMapCubeUVHeight: Y,
      aoMap: ye,
      lightMap: Oe,
      bumpMap: Te,
      normalMap: Ye,
      displacementMap: m && Fe,
      emissiveMap: ze,
      normalMapObjectSpace: Ye && v.normalMapType === Pu,
      normalMapTangentSpace: Ye && v.normalMapType === ga,
      metalnessMap: st,
      roughnessMap: T,
      anisotropy: _,
      anisotropyMap: De,
      clearcoat: G,
      clearcoatMap: Ae,
      clearcoatNormalMap: ce,
      clearcoatRoughnessMap: ue,
      iridescence: X,
      iridescenceMap: Ne,
      iridescenceThicknessMap: ae,
      sheen: te,
      sheenColorMap: ft,
      sheenRoughnessMap: We,
      specularMap: Se,
      specularColorMap: ge,
      specularIntensityMap: xe,
      transmission: Z,
      transmissionMap: A,
      thicknessMap: q,
      gradientMap: _e,
      opaque:
        v.transparent === !1 && v.blending === Ni && v.alphaToCoverage === !1,
      alphaMap: R,
      alphaTest: ne,
      alphaHash: U,
      combine: v.combine,
      mapUv: Ce && p(v.map.channel),
      aoMapUv: ye && p(v.aoMap.channel),
      lightMapUv: Oe && p(v.lightMap.channel),
      bumpMapUv: Te && p(v.bumpMap.channel),
      normalMapUv: Ye && p(v.normalMap.channel),
      displacementMapUv: Fe && p(v.displacementMap.channel),
      emissiveMapUv: ze && p(v.emissiveMap.channel),
      metalnessMapUv: st && p(v.metalnessMap.channel),
      roughnessMapUv: T && p(v.roughnessMap.channel),
      anisotropyMapUv: De && p(v.anisotropyMap.channel),
      clearcoatMapUv: Ae && p(v.clearcoatMap.channel),
      clearcoatNormalMapUv: ce && p(v.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ue && p(v.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Ne && p(v.iridescenceMap.channel),
      iridescenceThicknessMapUv: ae && p(v.iridescenceThicknessMap.channel),
      sheenColorMapUv: ft && p(v.sheenColorMap.channel),
      sheenRoughnessMapUv: We && p(v.sheenRoughnessMap.channel),
      specularMapUv: Se && p(v.specularMap.channel),
      specularColorMapUv: ge && p(v.specularColorMap.channel),
      specularIntensityMapUv: xe && p(v.specularIntensityMap.channel),
      transmissionMapUv: A && p(v.transmissionMap.channel),
      thicknessMapUv: q && p(v.thicknessMap.channel),
      alphaMapUv: R && p(v.alphaMap.channel),
      vertexTangents: !!k.attributes.tangent && (Ye || _),
      vertexColors: v.vertexColors,
      vertexAlphas:
        v.vertexColors === !0 &&
        !!k.attributes.color &&
        k.attributes.color.itemSize === 4,
      pointsUvs: I.isPoints === !0 && !!k.attributes.uv && (Ce || R),
      fog: !!W,
      useFog: v.fog === !0,
      fogExp2: !!W && W.isFogExp2,
      flatShading: v.flatShading === !0,
      sizeAttenuation: v.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      skinning: I.isSkinnedMesh === !0,
      morphTargets: k.morphAttributes.position !== void 0,
      morphNormals: k.morphAttributes.normal !== void 0,
      morphColors: k.morphAttributes.color !== void 0,
      morphTargetsCount: pe,
      morphTextureStride: Ie,
      numDirLights: w.directional.length,
      numPointLights: w.point.length,
      numSpotLights: w.spot.length,
      numSpotLightMaps: w.spotLightMap.length,
      numRectAreaLights: w.rectArea.length,
      numHemiLights: w.hemi.length,
      numDirLightShadows: w.directionalShadowMap.length,
      numPointLightShadows: w.pointShadowMap.length,
      numSpotLightShadows: w.spotShadowMap.length,
      numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps,
      numLightProbes: w.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: s.shadowMap.enabled && re.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: he,
      useLegacyLights: s._useLegacyLights,
      decodeVideoTexture:
        Ce &&
        v.map.isVideoTexture === !0 &&
        $e.getTransfer(v.map.colorSpace) === at,
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === an,
      flipSided: v.side === Ot,
      useDepthPacking: v.depthPacking >= 0,
      depthPacking: v.depthPacking || 0,
      index0AttributeName: v.index0AttributeName,
      extensionDerivatives: J && v.extensions.derivatives === !0,
      extensionFragDepth: J && v.extensions.fragDepth === !0,
      extensionDrawBuffers: J && v.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: J && v.extensions.shaderTextureLOD === !0,
      extensionClipCullDistance:
        J &&
        v.extensions.clipCullDistance === !0 &&
        n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        J && v.extensions.multiDraw === !0 && n.has("WEBGL_multi_draw"),
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has(
        "KHR_parallel_shader_compile"
      ),
      customProgramCacheKey: v.customProgramCacheKey(),
    };
    return (
      (qe.vertexUv1s = l.has(1)),
      (qe.vertexUv2s = l.has(2)),
      (qe.vertexUv3s = l.has(3)),
      l.clear(),
      qe
    );
  }
  function E(v) {
    const w = [];
    if (
      (v.shaderID
        ? w.push(v.shaderID)
        : (w.push(v.customVertexShaderID), w.push(v.customFragmentShaderID)),
      v.defines !== void 0)
    )
      for (const re in v.defines) w.push(re), w.push(v.defines[re]);
    return (
      v.isRawShaderMaterial === !1 &&
        (M(w, v), y(w, v), w.push(s.outputColorSpace)),
      w.push(v.customProgramCacheKey),
      w.join()
    );
  }
  function M(v, w) {
    v.push(w.precision),
      v.push(w.outputColorSpace),
      v.push(w.envMapMode),
      v.push(w.envMapCubeUVHeight),
      v.push(w.mapUv),
      v.push(w.alphaMapUv),
      v.push(w.lightMapUv),
      v.push(w.aoMapUv),
      v.push(w.bumpMapUv),
      v.push(w.normalMapUv),
      v.push(w.displacementMapUv),
      v.push(w.emissiveMapUv),
      v.push(w.metalnessMapUv),
      v.push(w.roughnessMapUv),
      v.push(w.anisotropyMapUv),
      v.push(w.clearcoatMapUv),
      v.push(w.clearcoatNormalMapUv),
      v.push(w.clearcoatRoughnessMapUv),
      v.push(w.iridescenceMapUv),
      v.push(w.iridescenceThicknessMapUv),
      v.push(w.sheenColorMapUv),
      v.push(w.sheenRoughnessMapUv),
      v.push(w.specularMapUv),
      v.push(w.specularColorMapUv),
      v.push(w.specularIntensityMapUv),
      v.push(w.transmissionMapUv),
      v.push(w.thicknessMapUv),
      v.push(w.combine),
      v.push(w.fogExp2),
      v.push(w.sizeAttenuation),
      v.push(w.morphTargetsCount),
      v.push(w.morphAttributeCount),
      v.push(w.numDirLights),
      v.push(w.numPointLights),
      v.push(w.numSpotLights),
      v.push(w.numSpotLightMaps),
      v.push(w.numHemiLights),
      v.push(w.numRectAreaLights),
      v.push(w.numDirLightShadows),
      v.push(w.numPointLightShadows),
      v.push(w.numSpotLightShadows),
      v.push(w.numSpotLightShadowsWithMaps),
      v.push(w.numLightProbes),
      v.push(w.shadowMapType),
      v.push(w.toneMapping),
      v.push(w.numClippingPlanes),
      v.push(w.numClipIntersection),
      v.push(w.depthPacking);
  }
  function y(v, w) {
    o.disableAll(),
      w.isWebGL2 && o.enable(0),
      w.supportsVertexTextures && o.enable(1),
      w.instancing && o.enable(2),
      w.instancingColor && o.enable(3),
      w.instancingMorph && o.enable(4),
      w.matcap && o.enable(5),
      w.envMap && o.enable(6),
      w.normalMapObjectSpace && o.enable(7),
      w.normalMapTangentSpace && o.enable(8),
      w.clearcoat && o.enable(9),
      w.iridescence && o.enable(10),
      w.alphaTest && o.enable(11),
      w.vertexColors && o.enable(12),
      w.vertexAlphas && o.enable(13),
      w.vertexUv1s && o.enable(14),
      w.vertexUv2s && o.enable(15),
      w.vertexUv3s && o.enable(16),
      w.vertexTangents && o.enable(17),
      w.anisotropy && o.enable(18),
      w.alphaHash && o.enable(19),
      w.batching && o.enable(20),
      v.push(o.mask),
      o.disableAll(),
      w.fog && o.enable(0),
      w.useFog && o.enable(1),
      w.flatShading && o.enable(2),
      w.logarithmicDepthBuffer && o.enable(3),
      w.skinning && o.enable(4),
      w.morphTargets && o.enable(5),
      w.morphNormals && o.enable(6),
      w.morphColors && o.enable(7),
      w.premultipliedAlpha && o.enable(8),
      w.shadowMapEnabled && o.enable(9),
      w.useLegacyLights && o.enable(10),
      w.doubleSided && o.enable(11),
      w.flipSided && o.enable(12),
      w.useDepthPacking && o.enable(13),
      w.dithering && o.enable(14),
      w.transmission && o.enable(15),
      w.sheen && o.enable(16),
      w.opaque && o.enable(17),
      w.pointsUvs && o.enable(18),
      w.decodeVideoTexture && o.enable(19),
      w.alphaToCoverage && o.enable(20),
      v.push(o.mask);
  }
  function P(v) {
    const w = x[v.type];
    let re;
    if (w) {
      const Q = rn[w];
      re = _h.clone(Q.uniforms);
    } else re = v.uniforms;
    return re;
  }
  function C(v, w) {
    let re;
    for (let Q = 0, I = u.length; Q < I; Q++) {
      const W = u[Q];
      if (W.cacheKey === w) {
        (re = W), ++re.usedTimes;
        break;
      }
    }
    return re === void 0 && ((re = new Nm(s, w, v, r)), u.push(re)), re;
  }
  function b(v) {
    if (--v.usedTimes === 0) {
      const w = u.indexOf(v);
      (u[w] = u[u.length - 1]), u.pop(), v.destroy();
    }
  }
  function F(v) {
    c.remove(v);
  }
  function $() {
    c.dispose();
  }
  return {
    getParameters: f,
    getProgramCacheKey: E,
    getUniforms: P,
    acquireProgram: C,
    releaseProgram: b,
    releaseShaderCache: F,
    programs: u,
    dispose: $,
  };
}
function zm() {
  let s = new WeakMap();
  function e(r) {
    let a = s.get(r);
    return a === void 0 && ((a = {}), s.set(r, a)), a;
  }
  function t(r) {
    s.delete(r);
  }
  function n(r, a, o) {
    s.get(r)[a] = o;
  }
  function i() {
    s = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: i };
}
function Hm(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
    ? s.renderOrder - e.renderOrder
    : s.material.id !== e.material.id
    ? s.material.id - e.material.id
    : s.z !== e.z
    ? s.z - e.z
    : s.id - e.id;
}
function dc(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
    ? s.renderOrder - e.renderOrder
    : s.z !== e.z
    ? e.z - s.z
    : s.id - e.id;
}
function fc() {
  const s = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function r() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function a(h, d, m, g, x, p) {
    let f = s[e];
    return (
      f === void 0
        ? ((f = {
            id: h.id,
            object: h,
            geometry: d,
            material: m,
            groupOrder: g,
            renderOrder: h.renderOrder,
            z: x,
            group: p,
          }),
          (s[e] = f))
        : ((f.id = h.id),
          (f.object = h),
          (f.geometry = d),
          (f.material = m),
          (f.groupOrder = g),
          (f.renderOrder = h.renderOrder),
          (f.z = x),
          (f.group = p)),
      e++,
      f
    );
  }
  function o(h, d, m, g, x, p) {
    const f = a(h, d, m, g, x, p);
    m.transmission > 0
      ? n.push(f)
      : m.transparent === !0
      ? i.push(f)
      : t.push(f);
  }
  function c(h, d, m, g, x, p) {
    const f = a(h, d, m, g, x, p);
    m.transmission > 0
      ? n.unshift(f)
      : m.transparent === !0
      ? i.unshift(f)
      : t.unshift(f);
  }
  function l(h, d) {
    t.length > 1 && t.sort(h || Hm),
      n.length > 1 && n.sort(d || dc),
      i.length > 1 && i.sort(d || dc);
  }
  function u() {
    for (let h = e, d = s.length; h < d; h++) {
      const m = s[h];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: o,
    unshift: c,
    finish: u,
    sort: l,
  };
}
function Gm() {
  let s = new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let a;
    return (
      r === void 0
        ? ((a = new fc()), s.set(n, [a]))
        : i >= r.length
        ? ((a = new fc()), r.push(a))
        : (a = r[i]),
      a
    );
  }
  function t() {
    s = new WeakMap();
  }
  return { get: e, dispose: t };
}
function km() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new L(), color: new Re() };
          break;
        case "SpotLight":
          t = {
            position: new L(),
            direction: new L(),
            color: new Re(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new L(), color: new Re(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new L(), skyColor: new Re(), groundColor: new Re() };
          break;
        case "RectAreaLight":
          t = {
            color: new Re(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L(),
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
function Vm() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new be(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new be(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new be(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
let Wm = 0;
function Xm(s, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (s.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (s.map ? 1 : 0)
  );
}
function qm(s, e) {
  const t = new km(),
    n = Vm(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let u = 0; u < 9; u++) i.probe.push(new L());
  const r = new L(),
    a = new Ve(),
    o = new Ve();
  function c(u, h) {
    let d = 0,
      m = 0,
      g = 0;
    for (let re = 0; re < 9; re++) i.probe[re].set(0, 0, 0);
    let x = 0,
      p = 0,
      f = 0,
      E = 0,
      M = 0,
      y = 0,
      P = 0,
      C = 0,
      b = 0,
      F = 0,
      $ = 0;
    u.sort(Xm);
    const v = h === !0 ? Math.PI : 1;
    for (let re = 0, Q = u.length; re < Q; re++) {
      const I = u[re],
        W = I.color,
        k = I.intensity,
        j = I.distance,
        V = I.shadow && I.shadow.map ? I.shadow.map.texture : null;
      if (I.isAmbientLight)
        (d += W.r * k * v), (m += W.g * k * v), (g += W.b * k * v);
      else if (I.isLightProbe) {
        for (let Y = 0; Y < 9; Y++)
          i.probe[Y].addScaledVector(I.sh.coefficients[Y], k);
        $++;
      } else if (I.isDirectionalLight) {
        const Y = t.get(I);
        if (
          (Y.color.copy(I.color).multiplyScalar(I.intensity * v), I.castShadow)
        ) {
          const K = I.shadow,
            oe = n.get(I);
          (oe.shadowBias = K.bias),
            (oe.shadowNormalBias = K.normalBias),
            (oe.shadowRadius = K.radius),
            (oe.shadowMapSize = K.mapSize),
            (i.directionalShadow[x] = oe),
            (i.directionalShadowMap[x] = V),
            (i.directionalShadowMatrix[x] = I.shadow.matrix),
            y++;
        }
        (i.directional[x] = Y), x++;
      } else if (I.isSpotLight) {
        const Y = t.get(I);
        Y.position.setFromMatrixPosition(I.matrixWorld),
          Y.color.copy(W).multiplyScalar(k * v),
          (Y.distance = j),
          (Y.coneCos = Math.cos(I.angle)),
          (Y.penumbraCos = Math.cos(I.angle * (1 - I.penumbra))),
          (Y.decay = I.decay),
          (i.spot[f] = Y);
        const K = I.shadow;
        if (
          (I.map &&
            ((i.spotLightMap[b] = I.map),
            b++,
            K.updateMatrices(I),
            I.castShadow && F++),
          (i.spotLightMatrix[f] = K.matrix),
          I.castShadow)
        ) {
          const oe = n.get(I);
          (oe.shadowBias = K.bias),
            (oe.shadowNormalBias = K.normalBias),
            (oe.shadowRadius = K.radius),
            (oe.shadowMapSize = K.mapSize),
            (i.spotShadow[f] = oe),
            (i.spotShadowMap[f] = V),
            C++;
        }
        f++;
      } else if (I.isRectAreaLight) {
        const Y = t.get(I);
        Y.color.copy(W).multiplyScalar(k),
          Y.halfWidth.set(I.width * 0.5, 0, 0),
          Y.halfHeight.set(0, I.height * 0.5, 0),
          (i.rectArea[E] = Y),
          E++;
      } else if (I.isPointLight) {
        const Y = t.get(I);
        if (
          (Y.color.copy(I.color).multiplyScalar(I.intensity * v),
          (Y.distance = I.distance),
          (Y.decay = I.decay),
          I.castShadow)
        ) {
          const K = I.shadow,
            oe = n.get(I);
          (oe.shadowBias = K.bias),
            (oe.shadowNormalBias = K.normalBias),
            (oe.shadowRadius = K.radius),
            (oe.shadowMapSize = K.mapSize),
            (oe.shadowCameraNear = K.camera.near),
            (oe.shadowCameraFar = K.camera.far),
            (i.pointShadow[p] = oe),
            (i.pointShadowMap[p] = V),
            (i.pointShadowMatrix[p] = I.shadow.matrix),
            P++;
        }
        (i.point[p] = Y), p++;
      } else if (I.isHemisphereLight) {
        const Y = t.get(I);
        Y.skyColor.copy(I.color).multiplyScalar(k * v),
          Y.groundColor.copy(I.groundColor).multiplyScalar(k * v),
          (i.hemi[M] = Y),
          M++;
      }
    }
    E > 0 &&
      (e.isWebGL2
        ? s.has("OES_texture_float_linear") === !0
          ? ((i.rectAreaLTC1 = le.LTC_FLOAT_1),
            (i.rectAreaLTC2 = le.LTC_FLOAT_2))
          : ((i.rectAreaLTC1 = le.LTC_HALF_1), (i.rectAreaLTC2 = le.LTC_HALF_2))
        : s.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = le.LTC_FLOAT_1), (i.rectAreaLTC2 = le.LTC_FLOAT_2))
        : s.has("OES_texture_half_float_linear") === !0
        ? ((i.rectAreaLTC1 = le.LTC_HALF_1), (i.rectAreaLTC2 = le.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (i.ambient[0] = d),
      (i.ambient[1] = m),
      (i.ambient[2] = g);
    const w = i.hash;
    (w.directionalLength !== x ||
      w.pointLength !== p ||
      w.spotLength !== f ||
      w.rectAreaLength !== E ||
      w.hemiLength !== M ||
      w.numDirectionalShadows !== y ||
      w.numPointShadows !== P ||
      w.numSpotShadows !== C ||
      w.numSpotMaps !== b ||
      w.numLightProbes !== $) &&
      ((i.directional.length = x),
      (i.spot.length = f),
      (i.rectArea.length = E),
      (i.point.length = p),
      (i.hemi.length = M),
      (i.directionalShadow.length = y),
      (i.directionalShadowMap.length = y),
      (i.pointShadow.length = P),
      (i.pointShadowMap.length = P),
      (i.spotShadow.length = C),
      (i.spotShadowMap.length = C),
      (i.directionalShadowMatrix.length = y),
      (i.pointShadowMatrix.length = P),
      (i.spotLightMatrix.length = C + b - F),
      (i.spotLightMap.length = b),
      (i.numSpotLightShadowsWithMaps = F),
      (i.numLightProbes = $),
      (w.directionalLength = x),
      (w.pointLength = p),
      (w.spotLength = f),
      (w.rectAreaLength = E),
      (w.hemiLength = M),
      (w.numDirectionalShadows = y),
      (w.numPointShadows = P),
      (w.numSpotShadows = C),
      (w.numSpotMaps = b),
      (w.numLightProbes = $),
      (i.version = Wm++));
  }
  function l(u, h) {
    let d = 0,
      m = 0,
      g = 0,
      x = 0,
      p = 0;
    const f = h.matrixWorldInverse;
    for (let E = 0, M = u.length; E < M; E++) {
      const y = u[E];
      if (y.isDirectionalLight) {
        const P = i.directional[d];
        P.direction.setFromMatrixPosition(y.matrixWorld),
          r.setFromMatrixPosition(y.target.matrixWorld),
          P.direction.sub(r),
          P.direction.transformDirection(f),
          d++;
      } else if (y.isSpotLight) {
        const P = i.spot[g];
        P.position.setFromMatrixPosition(y.matrixWorld),
          P.position.applyMatrix4(f),
          P.direction.setFromMatrixPosition(y.matrixWorld),
          r.setFromMatrixPosition(y.target.matrixWorld),
          P.direction.sub(r),
          P.direction.transformDirection(f),
          g++;
      } else if (y.isRectAreaLight) {
        const P = i.rectArea[x];
        P.position.setFromMatrixPosition(y.matrixWorld),
          P.position.applyMatrix4(f),
          o.identity(),
          a.copy(y.matrixWorld),
          a.premultiply(f),
          o.extractRotation(a),
          P.halfWidth.set(y.width * 0.5, 0, 0),
          P.halfHeight.set(0, y.height * 0.5, 0),
          P.halfWidth.applyMatrix4(o),
          P.halfHeight.applyMatrix4(o),
          x++;
      } else if (y.isPointLight) {
        const P = i.point[m];
        P.position.setFromMatrixPosition(y.matrixWorld),
          P.position.applyMatrix4(f),
          m++;
      } else if (y.isHemisphereLight) {
        const P = i.hemi[p];
        P.direction.setFromMatrixPosition(y.matrixWorld),
          P.direction.transformDirection(f),
          p++;
      }
    }
  }
  return { setup: c, setupView: l, state: i };
}
function pc(s, e) {
  const t = new qm(s, e),
    n = [],
    i = [];
  function r() {
    (n.length = 0), (i.length = 0);
  }
  function a(h) {
    n.push(h);
  }
  function o(h) {
    i.push(h);
  }
  function c(h) {
    t.setup(n, h);
  }
  function l(h) {
    t.setupView(n, h);
  }
  return {
    init: r,
    state: { lightsArray: n, shadowsArray: i, lights: t },
    setupLights: c,
    setupLightsView: l,
    pushLight: a,
    pushShadow: o,
  };
}
function Ym(s, e) {
  let t = new WeakMap();
  function n(r, a = 0) {
    const o = t.get(r);
    let c;
    return (
      o === void 0
        ? ((c = new pc(s, e)), t.set(r, [c]))
        : a >= o.length
        ? ((c = new pc(s, e)), o.push(c))
        : (c = o[a]),
      c
    );
  }
  function i() {
    t = new WeakMap();
  }
  return { get: n, dispose: i };
}
class jm extends tn {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = Cu),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class Km extends tn {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const Zm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  $m = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Jm(s, e, t) {
  let n = new va();
  const i = new be(),
    r = new be(),
    a = new it(),
    o = new jm({ depthPacking: Lu }),
    c = new Km(),
    l = {},
    u = t.maxTextureSize,
    h = { [En]: Ot, [Ot]: En, [an]: an },
    d = new kn({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new be() },
        radius: { value: 4 },
      },
      vertexShader: Zm,
      fragmentShader: $m,
    }),
    m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new un();
  g.setAttribute(
    "position",
    new Ft(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const x = new tt(g, d),
    p = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Vc);
  let f = this.type;
  this.render = function (C, b, F) {
    if (
      p.enabled === !1 ||
      (p.autoUpdate === !1 && p.needsUpdate === !1) ||
      C.length === 0
    )
      return;
    const $ = s.getRenderTarget(),
      v = s.getActiveCubeFace(),
      w = s.getActiveMipmapLevel(),
      re = s.state;
    re.setBlending(zn),
      re.buffers.color.setClear(1, 1, 1, 1),
      re.buffers.depth.setTest(!0),
      re.setScissorTest(!1);
    const Q = f !== vn && this.type === vn,
      I = f === vn && this.type !== vn;
    for (let W = 0, k = C.length; W < k; W++) {
      const j = C[W],
        V = j.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", j, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === !1 && V.needsUpdate === !1) continue;
      i.copy(V.mapSize);
      const Y = V.getFrameExtents();
      if (
        (i.multiply(Y),
        r.copy(V.mapSize),
        (i.x > u || i.y > u) &&
          (i.x > u &&
            ((r.x = Math.floor(u / Y.x)),
            (i.x = r.x * Y.x),
            (V.mapSize.x = r.x)),
          i.y > u &&
            ((r.y = Math.floor(u / Y.y)),
            (i.y = r.y * Y.y),
            (V.mapSize.y = r.y))),
        V.map === null || Q === !0 || I === !0)
      ) {
        const oe = this.type !== vn ? { minFilter: Et, magFilter: Et } : {};
        V.map !== null && V.map.dispose(),
          (V.map = new ai(i.x, i.y, oe)),
          (V.map.texture.name = j.name + ".shadowMap"),
          V.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(V.map), s.clear();
      const K = V.getViewportCount();
      for (let oe = 0; oe < K; oe++) {
        const pe = V.getViewport(oe);
        a.set(r.x * pe.x, r.y * pe.y, r.x * pe.z, r.y * pe.w),
          re.viewport(a),
          V.updateMatrices(j, oe),
          (n = V.getFrustum()),
          y(b, F, V.camera, j, this.type);
      }
      V.isPointLightShadow !== !0 && this.type === vn && E(V, F),
        (V.needsUpdate = !1);
    }
    (f = this.type), (p.needsUpdate = !1), s.setRenderTarget($, v, w);
  };
  function E(C, b) {
    const F = e.update(x);
    d.defines.VSM_SAMPLES !== C.blurSamples &&
      ((d.defines.VSM_SAMPLES = C.blurSamples),
      (m.defines.VSM_SAMPLES = C.blurSamples),
      (d.needsUpdate = !0),
      (m.needsUpdate = !0)),
      C.mapPass === null && (C.mapPass = new ai(i.x, i.y)),
      (d.uniforms.shadow_pass.value = C.map.texture),
      (d.uniforms.resolution.value = C.mapSize),
      (d.uniforms.radius.value = C.radius),
      s.setRenderTarget(C.mapPass),
      s.clear(),
      s.renderBufferDirect(b, null, F, d, x, null),
      (m.uniforms.shadow_pass.value = C.mapPass.texture),
      (m.uniforms.resolution.value = C.mapSize),
      (m.uniforms.radius.value = C.radius),
      s.setRenderTarget(C.map),
      s.clear(),
      s.renderBufferDirect(b, null, F, m, x, null);
  }
  function M(C, b, F, $) {
    let v = null;
    const w =
      F.isPointLight === !0 ? C.customDistanceMaterial : C.customDepthMaterial;
    if (w !== void 0) v = w;
    else if (
      ((v = F.isPointLight === !0 ? c : o),
      (s.localClippingEnabled &&
        b.clipShadows === !0 &&
        Array.isArray(b.clippingPlanes) &&
        b.clippingPlanes.length !== 0) ||
        (b.displacementMap && b.displacementScale !== 0) ||
        (b.alphaMap && b.alphaTest > 0) ||
        (b.map && b.alphaTest > 0))
    ) {
      const re = v.uuid,
        Q = b.uuid;
      let I = l[re];
      I === void 0 && ((I = {}), (l[re] = I));
      let W = I[Q];
      W === void 0 &&
        ((W = v.clone()), (I[Q] = W), b.addEventListener("dispose", P)),
        (v = W);
    }
    if (
      ((v.visible = b.visible),
      (v.wireframe = b.wireframe),
      $ === vn
        ? (v.side = b.shadowSide !== null ? b.shadowSide : b.side)
        : (v.side = b.shadowSide !== null ? b.shadowSide : h[b.side]),
      (v.alphaMap = b.alphaMap),
      (v.alphaTest = b.alphaTest),
      (v.map = b.map),
      (v.clipShadows = b.clipShadows),
      (v.clippingPlanes = b.clippingPlanes),
      (v.clipIntersection = b.clipIntersection),
      (v.displacementMap = b.displacementMap),
      (v.displacementScale = b.displacementScale),
      (v.displacementBias = b.displacementBias),
      (v.wireframeLinewidth = b.wireframeLinewidth),
      (v.linewidth = b.linewidth),
      F.isPointLight === !0 && v.isMeshDistanceMaterial === !0)
    ) {
      const re = s.properties.get(v);
      re.light = F;
    }
    return v;
  }
  function y(C, b, F, $, v) {
    if (C.visible === !1) return;
    if (
      C.layers.test(b.layers) &&
      (C.isMesh || C.isLine || C.isPoints) &&
      (C.castShadow || (C.receiveShadow && v === vn)) &&
      (!C.frustumCulled || n.intersectsObject(C))
    ) {
      C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, C.matrixWorld);
      const Q = e.update(C),
        I = C.material;
      if (Array.isArray(I)) {
        const W = Q.groups;
        for (let k = 0, j = W.length; k < j; k++) {
          const V = W[k],
            Y = I[V.materialIndex];
          if (Y && Y.visible) {
            const K = M(C, Y, $, v);
            C.onBeforeShadow(s, C, b, F, Q, K, V),
              s.renderBufferDirect(F, null, Q, K, C, V),
              C.onAfterShadow(s, C, b, F, Q, K, V);
          }
        }
      } else if (I.visible) {
        const W = M(C, I, $, v);
        C.onBeforeShadow(s, C, b, F, Q, W, null),
          s.renderBufferDirect(F, null, Q, W, C, null),
          C.onAfterShadow(s, C, b, F, Q, W, null);
      }
    }
    const re = C.children;
    for (let Q = 0, I = re.length; Q < I; Q++) y(re[Q], b, F, $, v);
  }
  function P(C) {
    C.target.removeEventListener("dispose", P);
    for (const F in l) {
      const $ = l[F],
        v = C.target.uuid;
      v in $ && ($[v].dispose(), delete $[v]);
    }
  }
}
function Qm(s, e, t) {
  const n = t.isWebGL2;
  function i() {
    let R = !1;
    const ne = new it();
    let U = null;
    const J = new it(0, 0, 0, 0);
    return {
      setMask: function (he) {
        U !== he && !R && (s.colorMask(he, he, he, he), (U = he));
      },
      setLocked: function (he) {
        R = he;
      },
      setClear: function (he, qe, Je, nt, pt) {
        pt === !0 && ((he *= nt), (qe *= nt), (Je *= nt)),
          ne.set(he, qe, Je, nt),
          J.equals(ne) === !1 && (s.clearColor(he, qe, Je, nt), J.copy(ne));
      },
      reset: function () {
        (R = !1), (U = null), J.set(-1, 0, 0, 0);
      },
    };
  }
  function r() {
    let R = !1,
      ne = null,
      U = null,
      J = null;
    return {
      setTest: function (he) {
        he ? me(s.DEPTH_TEST) : Ke(s.DEPTH_TEST);
      },
      setMask: function (he) {
        ne !== he && !R && (s.depthMask(he), (ne = he));
      },
      setFunc: function (he) {
        if (U !== he) {
          switch (he) {
            case su:
              s.depthFunc(s.NEVER);
              break;
            case ru:
              s.depthFunc(s.ALWAYS);
              break;
            case au:
              s.depthFunc(s.LESS);
              break;
            case Ks:
              s.depthFunc(s.LEQUAL);
              break;
            case ou:
              s.depthFunc(s.EQUAL);
              break;
            case cu:
              s.depthFunc(s.GEQUAL);
              break;
            case lu:
              s.depthFunc(s.GREATER);
              break;
            case uu:
              s.depthFunc(s.NOTEQUAL);
              break;
            default:
              s.depthFunc(s.LEQUAL);
          }
          U = he;
        }
      },
      setLocked: function (he) {
        R = he;
      },
      setClear: function (he) {
        J !== he && (s.clearDepth(he), (J = he));
      },
      reset: function () {
        (R = !1), (ne = null), (U = null), (J = null);
      },
    };
  }
  function a() {
    let R = !1,
      ne = null,
      U = null,
      J = null,
      he = null,
      qe = null,
      Je = null,
      nt = null,
      pt = null;
    return {
      setTest: function (Ze) {
        R || (Ze ? me(s.STENCIL_TEST) : Ke(s.STENCIL_TEST));
      },
      setMask: function (Ze) {
        ne !== Ze && !R && (s.stencilMask(Ze), (ne = Ze));
      },
      setFunc: function (Ze, rt, wt) {
        (U !== Ze || J !== rt || he !== wt) &&
          (s.stencilFunc(Ze, rt, wt), (U = Ze), (J = rt), (he = wt));
      },
      setOp: function (Ze, rt, wt) {
        (qe !== Ze || Je !== rt || nt !== wt) &&
          (s.stencilOp(Ze, rt, wt), (qe = Ze), (Je = rt), (nt = wt));
      },
      setLocked: function (Ze) {
        R = Ze;
      },
      setClear: function (Ze) {
        pt !== Ze && (s.clearStencil(Ze), (pt = Ze));
      },
      reset: function () {
        (R = !1),
          (ne = null),
          (U = null),
          (J = null),
          (he = null),
          (qe = null),
          (Je = null),
          (nt = null),
          (pt = null);
      },
    };
  }
  const o = new i(),
    c = new r(),
    l = new a(),
    u = new WeakMap(),
    h = new WeakMap();
  let d = {},
    m = {},
    g = new WeakMap(),
    x = [],
    p = null,
    f = !1,
    E = null,
    M = null,
    y = null,
    P = null,
    C = null,
    b = null,
    F = null,
    $ = new Re(0, 0, 0),
    v = 0,
    w = !1,
    re = null,
    Q = null,
    I = null,
    W = null,
    k = null;
  const j = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let V = !1,
    Y = 0;
  const K = s.getParameter(s.VERSION);
  K.indexOf("WebGL") !== -1
    ? ((Y = parseFloat(/^WebGL (\d)/.exec(K)[1])), (V = Y >= 1))
    : K.indexOf("OpenGL ES") !== -1 &&
      ((Y = parseFloat(/^OpenGL ES (\d)/.exec(K)[1])), (V = Y >= 2));
  let oe = null,
    pe = {};
  const Ie = s.getParameter(s.SCISSOR_BOX),
    H = s.getParameter(s.VIEWPORT),
    ee = new it().fromArray(Ie),
    fe = new it().fromArray(H);
  function Le(R, ne, U, J) {
    const he = new Uint8Array(4),
      qe = s.createTexture();
    s.bindTexture(R, qe),
      s.texParameteri(R, s.TEXTURE_MIN_FILTER, s.NEAREST),
      s.texParameteri(R, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let Je = 0; Je < U; Je++)
      n && (R === s.TEXTURE_3D || R === s.TEXTURE_2D_ARRAY)
        ? s.texImage3D(ne, 0, s.RGBA, 1, 1, J, 0, s.RGBA, s.UNSIGNED_BYTE, he)
        : s.texImage2D(
            ne + Je,
            0,
            s.RGBA,
            1,
            1,
            0,
            s.RGBA,
            s.UNSIGNED_BYTE,
            he
          );
    return qe;
  }
  const Me = {};
  (Me[s.TEXTURE_2D] = Le(s.TEXTURE_2D, s.TEXTURE_2D, 1)),
    (Me[s.TEXTURE_CUBE_MAP] = Le(
      s.TEXTURE_CUBE_MAP,
      s.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    n &&
      ((Me[s.TEXTURE_2D_ARRAY] = Le(
        s.TEXTURE_2D_ARRAY,
        s.TEXTURE_2D_ARRAY,
        1,
        1
      )),
      (Me[s.TEXTURE_3D] = Le(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1))),
    o.setClear(0, 0, 0, 1),
    c.setClear(1),
    l.setClear(0),
    me(s.DEPTH_TEST),
    c.setFunc(Ks),
    Fe(!1),
    ze(Xa),
    me(s.CULL_FACE),
    Te(zn);
  function me(R) {
    d[R] !== !0 && (s.enable(R), (d[R] = !0));
  }
  function Ke(R) {
    d[R] !== !1 && (s.disable(R), (d[R] = !1));
  }
  function Ce(R, ne) {
    return m[R] !== ne
      ? (s.bindFramebuffer(R, ne),
        (m[R] = ne),
        n &&
          (R === s.DRAW_FRAMEBUFFER && (m[s.FRAMEBUFFER] = ne),
          R === s.FRAMEBUFFER && (m[s.DRAW_FRAMEBUFFER] = ne)),
        !0)
      : !1;
  }
  function N(R, ne) {
    let U = x,
      J = !1;
    if (R) {
      (U = g.get(ne)), U === void 0 && ((U = []), g.set(ne, U));
      const he = R.textures;
      if (U.length !== he.length || U[0] !== s.COLOR_ATTACHMENT0) {
        for (let qe = 0, Je = he.length; qe < Je; qe++)
          U[qe] = s.COLOR_ATTACHMENT0 + qe;
        (U.length = he.length), (J = !0);
      }
    } else U[0] !== s.BACK && ((U[0] = s.BACK), (J = !0));
    if (J)
      if (t.isWebGL2) s.drawBuffers(U);
      else if (e.has("WEBGL_draw_buffers") === !0)
        e.get("WEBGL_draw_buffers").drawBuffersWEBGL(U);
      else
        throw new Error(
          "THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension"
        );
  }
  function _t(R) {
    return p !== R ? (s.useProgram(R), (p = R), !0) : !1;
  }
  const ye = {
    [ti]: s.FUNC_ADD,
    [Vl]: s.FUNC_SUBTRACT,
    [Wl]: s.FUNC_REVERSE_SUBTRACT,
  };
  if (n) (ye[Ka] = s.MIN), (ye[Za] = s.MAX);
  else {
    const R = e.get("EXT_blend_minmax");
    R !== null && ((ye[Ka] = R.MIN_EXT), (ye[Za] = R.MAX_EXT));
  }
  const Oe = {
    [Xl]: s.ZERO,
    [ql]: s.ONE,
    [Yl]: s.SRC_COLOR,
    [Jr]: s.SRC_ALPHA,
    [Ql]: s.SRC_ALPHA_SATURATE,
    [$l]: s.DST_COLOR,
    [Kl]: s.DST_ALPHA,
    [jl]: s.ONE_MINUS_SRC_COLOR,
    [Qr]: s.ONE_MINUS_SRC_ALPHA,
    [Jl]: s.ONE_MINUS_DST_COLOR,
    [Zl]: s.ONE_MINUS_DST_ALPHA,
    [eu]: s.CONSTANT_COLOR,
    [tu]: s.ONE_MINUS_CONSTANT_COLOR,
    [nu]: s.CONSTANT_ALPHA,
    [iu]: s.ONE_MINUS_CONSTANT_ALPHA,
  };
  function Te(R, ne, U, J, he, qe, Je, nt, pt, Ze) {
    if (R === zn) {
      f === !0 && (Ke(s.BLEND), (f = !1));
      return;
    }
    if ((f === !1 && (me(s.BLEND), (f = !0)), R !== kl)) {
      if (R !== E || Ze !== w) {
        if (
          ((M !== ti || C !== ti) &&
            (s.blendEquation(s.FUNC_ADD), (M = ti), (C = ti)),
          Ze)
        )
          switch (R) {
            case Ni:
              s.blendFuncSeparate(
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA,
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA
              );
              break;
            case qa:
              s.blendFunc(s.ONE, s.ONE);
              break;
            case Ya:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case ja:
              s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break;
          }
        else
          switch (R) {
            case Ni:
              s.blendFuncSeparate(
                s.SRC_ALPHA,
                s.ONE_MINUS_SRC_ALPHA,
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA
              );
              break;
            case qa:
              s.blendFunc(s.SRC_ALPHA, s.ONE);
              break;
            case Ya:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case ja:
              s.blendFunc(s.ZERO, s.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", R);
              break;
          }
        (y = null),
          (P = null),
          (b = null),
          (F = null),
          $.set(0, 0, 0),
          (v = 0),
          (E = R),
          (w = Ze);
      }
      return;
    }
    (he = he || ne),
      (qe = qe || U),
      (Je = Je || J),
      (ne !== M || he !== C) &&
        (s.blendEquationSeparate(ye[ne], ye[he]), (M = ne), (C = he)),
      (U !== y || J !== P || qe !== b || Je !== F) &&
        (s.blendFuncSeparate(Oe[U], Oe[J], Oe[qe], Oe[Je]),
        (y = U),
        (P = J),
        (b = qe),
        (F = Je)),
      (nt.equals($) === !1 || pt !== v) &&
        (s.blendColor(nt.r, nt.g, nt.b, pt), $.copy(nt), (v = pt)),
      (E = R),
      (w = !1);
  }
  function Ye(R, ne) {
    R.side === an ? Ke(s.CULL_FACE) : me(s.CULL_FACE);
    let U = R.side === Ot;
    ne && (U = !U),
      Fe(U),
      R.blending === Ni && R.transparent === !1
        ? Te(zn)
        : Te(
            R.blending,
            R.blendEquation,
            R.blendSrc,
            R.blendDst,
            R.blendEquationAlpha,
            R.blendSrcAlpha,
            R.blendDstAlpha,
            R.blendColor,
            R.blendAlpha,
            R.premultipliedAlpha
          ),
      c.setFunc(R.depthFunc),
      c.setTest(R.depthTest),
      c.setMask(R.depthWrite),
      o.setMask(R.colorWrite);
    const J = R.stencilWrite;
    l.setTest(J),
      J &&
        (l.setMask(R.stencilWriteMask),
        l.setFunc(R.stencilFunc, R.stencilRef, R.stencilFuncMask),
        l.setOp(R.stencilFail, R.stencilZFail, R.stencilZPass)),
      T(R.polygonOffset, R.polygonOffsetFactor, R.polygonOffsetUnits),
      R.alphaToCoverage === !0
        ? me(s.SAMPLE_ALPHA_TO_COVERAGE)
        : Ke(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Fe(R) {
    re !== R && (R ? s.frontFace(s.CW) : s.frontFace(s.CCW), (re = R));
  }
  function ze(R) {
    R !== Hl
      ? (me(s.CULL_FACE),
        R !== Q &&
          (R === Xa
            ? s.cullFace(s.BACK)
            : R === Gl
            ? s.cullFace(s.FRONT)
            : s.cullFace(s.FRONT_AND_BACK)))
      : Ke(s.CULL_FACE),
      (Q = R);
  }
  function st(R) {
    R !== I && (V && s.lineWidth(R), (I = R));
  }
  function T(R, ne, U) {
    R
      ? (me(s.POLYGON_OFFSET_FILL),
        (W !== ne || k !== U) && (s.polygonOffset(ne, U), (W = ne), (k = U)))
      : Ke(s.POLYGON_OFFSET_FILL);
  }
  function _(R) {
    R ? me(s.SCISSOR_TEST) : Ke(s.SCISSOR_TEST);
  }
  function G(R) {
    R === void 0 && (R = s.TEXTURE0 + j - 1),
      oe !== R && (s.activeTexture(R), (oe = R));
  }
  function X(R, ne, U) {
    U === void 0 && (oe === null ? (U = s.TEXTURE0 + j - 1) : (U = oe));
    let J = pe[U];
    J === void 0 && ((J = { type: void 0, texture: void 0 }), (pe[U] = J)),
      (J.type !== R || J.texture !== ne) &&
        (oe !== U && (s.activeTexture(U), (oe = U)),
        s.bindTexture(R, ne || Me[R]),
        (J.type = R),
        (J.texture = ne));
  }
  function te() {
    const R = pe[oe];
    R !== void 0 &&
      R.type !== void 0 &&
      (s.bindTexture(R.type, null), (R.type = void 0), (R.texture = void 0));
  }
  function Z() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function De() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Ae() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ce() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ue() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Ne() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ae() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ft() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function We() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Se() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function ge(R) {
    ee.equals(R) === !1 && (s.scissor(R.x, R.y, R.z, R.w), ee.copy(R));
  }
  function xe(R) {
    fe.equals(R) === !1 && (s.viewport(R.x, R.y, R.z, R.w), fe.copy(R));
  }
  function A(R, ne) {
    let U = h.get(ne);
    U === void 0 && ((U = new WeakMap()), h.set(ne, U));
    let J = U.get(R);
    J === void 0 && ((J = s.getUniformBlockIndex(ne, R.name)), U.set(R, J));
  }
  function q(R, ne) {
    const J = h.get(ne).get(R);
    u.get(ne) !== J &&
      (s.uniformBlockBinding(ne, J, R.__bindingPointIndex), u.set(ne, J));
  }
  function _e() {
    s.disable(s.BLEND),
      s.disable(s.CULL_FACE),
      s.disable(s.DEPTH_TEST),
      s.disable(s.POLYGON_OFFSET_FILL),
      s.disable(s.SCISSOR_TEST),
      s.disable(s.STENCIL_TEST),
      s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),
      s.blendEquation(s.FUNC_ADD),
      s.blendFunc(s.ONE, s.ZERO),
      s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO),
      s.blendColor(0, 0, 0, 0),
      s.colorMask(!0, !0, !0, !0),
      s.clearColor(0, 0, 0, 0),
      s.depthMask(!0),
      s.depthFunc(s.LESS),
      s.clearDepth(1),
      s.stencilMask(4294967295),
      s.stencilFunc(s.ALWAYS, 0, 4294967295),
      s.stencilOp(s.KEEP, s.KEEP, s.KEEP),
      s.clearStencil(0),
      s.cullFace(s.BACK),
      s.frontFace(s.CCW),
      s.polygonOffset(0, 0),
      s.activeTexture(s.TEXTURE0),
      s.bindFramebuffer(s.FRAMEBUFFER, null),
      n === !0 &&
        (s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null),
        s.bindFramebuffer(s.READ_FRAMEBUFFER, null)),
      s.useProgram(null),
      s.lineWidth(1),
      s.scissor(0, 0, s.canvas.width, s.canvas.height),
      s.viewport(0, 0, s.canvas.width, s.canvas.height),
      (d = {}),
      (oe = null),
      (pe = {}),
      (m = {}),
      (g = new WeakMap()),
      (x = []),
      (p = null),
      (f = !1),
      (E = null),
      (M = null),
      (y = null),
      (P = null),
      (C = null),
      (b = null),
      (F = null),
      ($ = new Re(0, 0, 0)),
      (v = 0),
      (w = !1),
      (re = null),
      (Q = null),
      (I = null),
      (W = null),
      (k = null),
      ee.set(0, 0, s.canvas.width, s.canvas.height),
      fe.set(0, 0, s.canvas.width, s.canvas.height),
      o.reset(),
      c.reset(),
      l.reset();
  }
  return {
    buffers: { color: o, depth: c, stencil: l },
    enable: me,
    disable: Ke,
    bindFramebuffer: Ce,
    drawBuffers: N,
    useProgram: _t,
    setBlending: Te,
    setMaterial: Ye,
    setFlipSided: Fe,
    setCullFace: ze,
    setLineWidth: st,
    setPolygonOffset: T,
    setScissorTest: _,
    activeTexture: G,
    bindTexture: X,
    unbindTexture: te,
    compressedTexImage2D: Z,
    compressedTexImage3D: De,
    texImage2D: We,
    texImage3D: Se,
    updateUBOMapping: A,
    uniformBlockBinding: q,
    texStorage2D: ae,
    texStorage3D: ft,
    texSubImage2D: Ae,
    texSubImage3D: ce,
    compressedTexSubImage2D: ue,
    compressedTexSubImage3D: Ne,
    scissor: ge,
    viewport: xe,
    reset: _e,
  };
}
function eg(s, e, t, n, i, r, a) {
  const o = i.isWebGL2,
    c = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    l =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    u = new be(),
    h = new WeakMap();
  let d;
  const m = new WeakMap();
  let g = !1;
  try {
    g =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function x(T, _) {
    return g ? new OffscreenCanvas(T, _) : ds("canvas");
  }
  function p(T, _, G, X) {
    let te = 1;
    const Z = st(T);
    if (
      ((Z.width > X || Z.height > X) && (te = X / Math.max(Z.width, Z.height)),
      te < 1 || _ === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && T instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && T instanceof VideoFrame)
      ) {
        const De = _ ? tr : Math.floor,
          Ae = De(te * Z.width),
          ce = De(te * Z.height);
        d === void 0 && (d = x(Ae, ce));
        const ue = G ? x(Ae, ce) : d;
        return (
          (ue.width = Ae),
          (ue.height = ce),
          ue.getContext("2d").drawImage(T, 0, 0, Ae, ce),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              Z.width +
              "x" +
              Z.height +
              ") to (" +
              Ae +
              "x" +
              ce +
              ")."
          ),
          ue
        );
      } else
        return (
          "data" in T &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                Z.width +
                "x" +
                Z.height +
                ")."
            ),
          T
        );
    return T;
  }
  function f(T) {
    const _ = st(T);
    return aa(_.width) && aa(_.height);
  }
  function E(T) {
    return o
      ? !1
      : T.wrapS !== qt ||
          T.wrapT !== qt ||
          (T.minFilter !== Et && T.minFilter !== Pt);
  }
  function M(T, _) {
    return T.generateMipmaps && _ && T.minFilter !== Et && T.minFilter !== Pt;
  }
  function y(T) {
    s.generateMipmap(T);
  }
  function P(T, _, G, X, te = !1) {
    if (o === !1) return _;
    if (T !== null) {
      if (s[T] !== void 0) return s[T];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          T +
          "'"
      );
    }
    let Z = _;
    if (
      (_ === s.RED &&
        (G === s.FLOAT && (Z = s.R32F),
        G === s.HALF_FLOAT && (Z = s.R16F),
        G === s.UNSIGNED_BYTE && (Z = s.R8)),
      _ === s.RED_INTEGER &&
        (G === s.UNSIGNED_BYTE && (Z = s.R8UI),
        G === s.UNSIGNED_SHORT && (Z = s.R16UI),
        G === s.UNSIGNED_INT && (Z = s.R32UI),
        G === s.BYTE && (Z = s.R8I),
        G === s.SHORT && (Z = s.R16I),
        G === s.INT && (Z = s.R32I)),
      _ === s.RG &&
        (G === s.FLOAT && (Z = s.RG32F),
        G === s.HALF_FLOAT && (Z = s.RG16F),
        G === s.UNSIGNED_BYTE && (Z = s.RG8)),
      _ === s.RG_INTEGER &&
        (G === s.UNSIGNED_BYTE && (Z = s.RG8UI),
        G === s.UNSIGNED_SHORT && (Z = s.RG16UI),
        G === s.UNSIGNED_INT && (Z = s.RG32UI),
        G === s.BYTE && (Z = s.RG8I),
        G === s.SHORT && (Z = s.RG16I),
        G === s.INT && (Z = s.RG32I)),
      _ === s.RGBA)
    ) {
      const De = te ? $s : $e.getTransfer(X);
      G === s.FLOAT && (Z = s.RGBA32F),
        G === s.HALF_FLOAT && (Z = s.RGBA16F),
        G === s.UNSIGNED_BYTE && (Z = De === at ? s.SRGB8_ALPHA8 : s.RGBA8),
        G === s.UNSIGNED_SHORT_4_4_4_4 && (Z = s.RGBA4),
        G === s.UNSIGNED_SHORT_5_5_5_1 && (Z = s.RGB5_A1);
    }
    return (
      (Z === s.R16F ||
        Z === s.R32F ||
        Z === s.RG16F ||
        Z === s.RG32F ||
        Z === s.RGBA16F ||
        Z === s.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      Z
    );
  }
  function C(T, _, G) {
    return M(T, G) === !0 ||
      (T.isFramebufferTexture && T.minFilter !== Et && T.minFilter !== Pt)
      ? Math.log2(Math.max(_.width, _.height)) + 1
      : T.mipmaps !== void 0 && T.mipmaps.length > 0
      ? T.mipmaps.length
      : T.isCompressedTexture && Array.isArray(T.image)
      ? _.mipmaps.length
      : 1;
  }
  function b(T) {
    return T === Et || T === na || T === Pi ? s.NEAREST : s.LINEAR;
  }
  function F(T) {
    const _ = T.target;
    _.removeEventListener("dispose", F), v(_), _.isVideoTexture && h.delete(_);
  }
  function $(T) {
    const _ = T.target;
    _.removeEventListener("dispose", $), re(_);
  }
  function v(T) {
    const _ = n.get(T);
    if (_.__webglInit === void 0) return;
    const G = T.source,
      X = m.get(G);
    if (X) {
      const te = X[_.__cacheKey];
      te.usedTimes--,
        te.usedTimes === 0 && w(T),
        Object.keys(X).length === 0 && m.delete(G);
    }
    n.remove(T);
  }
  function w(T) {
    const _ = n.get(T);
    s.deleteTexture(_.__webglTexture);
    const G = T.source,
      X = m.get(G);
    delete X[_.__cacheKey], a.memory.textures--;
  }
  function re(T) {
    const _ = n.get(T);
    if ((T.depthTexture && T.depthTexture.dispose(), T.isWebGLCubeRenderTarget))
      for (let X = 0; X < 6; X++) {
        if (Array.isArray(_.__webglFramebuffer[X]))
          for (let te = 0; te < _.__webglFramebuffer[X].length; te++)
            s.deleteFramebuffer(_.__webglFramebuffer[X][te]);
        else s.deleteFramebuffer(_.__webglFramebuffer[X]);
        _.__webglDepthbuffer && s.deleteRenderbuffer(_.__webglDepthbuffer[X]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let X = 0; X < _.__webglFramebuffer.length; X++)
          s.deleteFramebuffer(_.__webglFramebuffer[X]);
      else s.deleteFramebuffer(_.__webglFramebuffer);
      if (
        (_.__webglDepthbuffer && s.deleteRenderbuffer(_.__webglDepthbuffer),
        _.__webglMultisampledFramebuffer &&
          s.deleteFramebuffer(_.__webglMultisampledFramebuffer),
        _.__webglColorRenderbuffer)
      )
        for (let X = 0; X < _.__webglColorRenderbuffer.length; X++)
          _.__webglColorRenderbuffer[X] &&
            s.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);
      _.__webglDepthRenderbuffer &&
        s.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const G = T.textures;
    for (let X = 0, te = G.length; X < te; X++) {
      const Z = n.get(G[X]);
      Z.__webglTexture &&
        (s.deleteTexture(Z.__webglTexture), a.memory.textures--),
        n.remove(G[X]);
    }
    n.remove(T);
  }
  let Q = 0;
  function I() {
    Q = 0;
  }
  function W() {
    const T = Q;
    return (
      T >= i.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            T +
            " texture units while this GPU supports only " +
            i.maxTextures
        ),
      (Q += 1),
      T
    );
  }
  function k(T) {
    const _ = [];
    return (
      _.push(T.wrapS),
      _.push(T.wrapT),
      _.push(T.wrapR || 0),
      _.push(T.magFilter),
      _.push(T.minFilter),
      _.push(T.anisotropy),
      _.push(T.internalFormat),
      _.push(T.format),
      _.push(T.type),
      _.push(T.generateMipmaps),
      _.push(T.premultiplyAlpha),
      _.push(T.flipY),
      _.push(T.unpackAlignment),
      _.push(T.colorSpace),
      _.join()
    );
  }
  function j(T, _) {
    const G = n.get(T);
    if (
      (T.isVideoTexture && Fe(T),
      T.isRenderTargetTexture === !1 &&
        T.version > 0 &&
        G.__version !== T.version)
    ) {
      const X = T.image;
      if (X === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (X.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        fe(G, T, _);
        return;
      }
    }
    t.bindTexture(s.TEXTURE_2D, G.__webglTexture, s.TEXTURE0 + _);
  }
  function V(T, _) {
    const G = n.get(T);
    if (T.version > 0 && G.__version !== T.version) {
      fe(G, T, _);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, G.__webglTexture, s.TEXTURE0 + _);
  }
  function Y(T, _) {
    const G = n.get(T);
    if (T.version > 0 && G.__version !== T.version) {
      fe(G, T, _);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, G.__webglTexture, s.TEXTURE0 + _);
  }
  function K(T, _) {
    const G = n.get(T);
    if (T.version > 0 && G.__version !== T.version) {
      Le(G, T, _);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, G.__webglTexture, s.TEXTURE0 + _);
  }
  const oe = { [zi]: s.REPEAT, [qt]: s.CLAMP_TO_EDGE, [Zs]: s.MIRRORED_REPEAT },
    pe = {
      [Et]: s.NEAREST,
      [na]: s.NEAREST_MIPMAP_NEAREST,
      [Pi]: s.NEAREST_MIPMAP_LINEAR,
      [Pt]: s.LINEAR,
      [Ys]: s.LINEAR_MIPMAP_NEAREST,
      [Mn]: s.LINEAR_MIPMAP_LINEAR,
    },
    Ie = {
      [Iu]: s.NEVER,
      [Bu]: s.ALWAYS,
      [Du]: s.LESS,
      [nl]: s.LEQUAL,
      [Nu]: s.EQUAL,
      [Fu]: s.GEQUAL,
      [Uu]: s.GREATER,
      [Ou]: s.NOTEQUAL,
    };
  function H(T, _, G) {
    if (
      (_.type === Jt &&
        e.has("OES_texture_float_linear") === !1 &&
        (_.magFilter === Pt ||
          _.magFilter === Ys ||
          _.magFilter === Pi ||
          _.magFilter === Mn ||
          _.minFilter === Pt ||
          _.minFilter === Ys ||
          _.minFilter === Pi ||
          _.minFilter === Mn) &&
        console.warn(
          "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."
        ),
      G
        ? (s.texParameteri(T, s.TEXTURE_WRAP_S, oe[_.wrapS]),
          s.texParameteri(T, s.TEXTURE_WRAP_T, oe[_.wrapT]),
          (T === s.TEXTURE_3D || T === s.TEXTURE_2D_ARRAY) &&
            s.texParameteri(T, s.TEXTURE_WRAP_R, oe[_.wrapR]),
          s.texParameteri(T, s.TEXTURE_MAG_FILTER, pe[_.magFilter]),
          s.texParameteri(T, s.TEXTURE_MIN_FILTER, pe[_.minFilter]))
        : (s.texParameteri(T, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
          s.texParameteri(T, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE),
          (T === s.TEXTURE_3D || T === s.TEXTURE_2D_ARRAY) &&
            s.texParameteri(T, s.TEXTURE_WRAP_R, s.CLAMP_TO_EDGE),
          (_.wrapS !== qt || _.wrapT !== qt) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          s.texParameteri(T, s.TEXTURE_MAG_FILTER, b(_.magFilter)),
          s.texParameteri(T, s.TEXTURE_MIN_FILTER, b(_.minFilter)),
          _.minFilter !== Et &&
            _.minFilter !== Pt &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      _.compareFunction &&
        (s.texParameteri(T, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE),
        s.texParameteri(T, s.TEXTURE_COMPARE_FUNC, Ie[_.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        _.magFilter === Et ||
        (_.minFilter !== Pi && _.minFilter !== Mn) ||
        (_.type === Jt && e.has("OES_texture_float_linear") === !1) ||
        (o === !1 &&
          _.type === us &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const X = e.get("EXT_texture_filter_anisotropic");
        s.texParameterf(
          T,
          X.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(_.anisotropy, i.getMaxAnisotropy())
        ),
          (n.get(_).__currentAnisotropy = _.anisotropy);
      }
    }
  }
  function ee(T, _) {
    let G = !1;
    T.__webglInit === void 0 &&
      ((T.__webglInit = !0), _.addEventListener("dispose", F));
    const X = _.source;
    let te = m.get(X);
    te === void 0 && ((te = {}), m.set(X, te));
    const Z = k(_);
    if (Z !== T.__cacheKey) {
      te[Z] === void 0 &&
        ((te[Z] = { texture: s.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (G = !0)),
        te[Z].usedTimes++;
      const De = te[T.__cacheKey];
      De !== void 0 &&
        (te[T.__cacheKey].usedTimes--, De.usedTimes === 0 && w(_)),
        (T.__cacheKey = Z),
        (T.__webglTexture = te[Z].texture);
    }
    return G;
  }
  function fe(T, _, G) {
    let X = s.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) &&
      (X = s.TEXTURE_2D_ARRAY),
      _.isData3DTexture && (X = s.TEXTURE_3D);
    const te = ee(T, _),
      Z = _.source;
    t.bindTexture(X, T.__webglTexture, s.TEXTURE0 + G);
    const De = n.get(Z);
    if (Z.version !== De.__version || te === !0) {
      t.activeTexture(s.TEXTURE0 + G);
      const Ae = $e.getPrimaries($e.workingColorSpace),
        ce = _.colorSpace === Un ? null : $e.getPrimaries(_.colorSpace),
        ue =
          _.colorSpace === Un || Ae === ce ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, _.flipY),
        s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
        s.pixelStorei(s.UNPACK_ALIGNMENT, _.unpackAlignment),
        s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, ue);
      const Ne = E(_) && f(_.image) === !1;
      let ae = p(_.image, Ne, !1, i.maxTextureSize);
      ae = ze(_, ae);
      const ft = f(ae) || o,
        We = r.convert(_.format, _.colorSpace);
      let Se = r.convert(_.type),
        ge = P(_.internalFormat, We, Se, _.colorSpace, _.isVideoTexture);
      H(X, _, ft);
      let xe;
      const A = _.mipmaps,
        q = o && _.isVideoTexture !== !0 && ge !== el,
        _e = De.__version === void 0 || te === !0,
        R = Z.dataReady,
        ne = C(_, ae, ft);
      if (_.isDepthTexture)
        (ge = s.DEPTH_COMPONENT),
          o
            ? _.type === Jt
              ? (ge = s.DEPTH_COMPONENT32F)
              : _.type === On
              ? (ge = s.DEPTH_COMPONENT24)
              : _.type === si
              ? (ge = s.DEPTH24_STENCIL8)
              : (ge = s.DEPTH_COMPONENT16)
            : _.type === Jt &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          _.format === ri &&
            ge === s.DEPTH_COMPONENT &&
            _.type !== ma &&
            _.type !== On &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (_.type = On),
            (Se = r.convert(_.type))),
          _.format === Hi &&
            ge === s.DEPTH_COMPONENT &&
            ((ge = s.DEPTH_STENCIL),
            _.type !== si &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (_.type = si),
              (Se = r.convert(_.type)))),
          _e &&
            (q
              ? t.texStorage2D(s.TEXTURE_2D, 1, ge, ae.width, ae.height)
              : t.texImage2D(
                  s.TEXTURE_2D,
                  0,
                  ge,
                  ae.width,
                  ae.height,
                  0,
                  We,
                  Se,
                  null
                ));
      else if (_.isDataTexture)
        if (A.length > 0 && ft) {
          q &&
            _e &&
            t.texStorage2D(s.TEXTURE_2D, ne, ge, A[0].width, A[0].height);
          for (let U = 0, J = A.length; U < J; U++)
            (xe = A[U]),
              q
                ? R &&
                  t.texSubImage2D(
                    s.TEXTURE_2D,
                    U,
                    0,
                    0,
                    xe.width,
                    xe.height,
                    We,
                    Se,
                    xe.data
                  )
                : t.texImage2D(
                    s.TEXTURE_2D,
                    U,
                    ge,
                    xe.width,
                    xe.height,
                    0,
                    We,
                    Se,
                    xe.data
                  );
          _.generateMipmaps = !1;
        } else
          q
            ? (_e && t.texStorage2D(s.TEXTURE_2D, ne, ge, ae.width, ae.height),
              R &&
                t.texSubImage2D(
                  s.TEXTURE_2D,
                  0,
                  0,
                  0,
                  ae.width,
                  ae.height,
                  We,
                  Se,
                  ae.data
                ))
            : t.texImage2D(
                s.TEXTURE_2D,
                0,
                ge,
                ae.width,
                ae.height,
                0,
                We,
                Se,
                ae.data
              );
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          q &&
            _e &&
            t.texStorage3D(
              s.TEXTURE_2D_ARRAY,
              ne,
              ge,
              A[0].width,
              A[0].height,
              ae.depth
            );
          for (let U = 0, J = A.length; U < J; U++)
            (xe = A[U]),
              _.format !== Yt
                ? We !== null
                  ? q
                    ? R &&
                      t.compressedTexSubImage3D(
                        s.TEXTURE_2D_ARRAY,
                        U,
                        0,
                        0,
                        0,
                        xe.width,
                        xe.height,
                        ae.depth,
                        We,
                        xe.data,
                        0,
                        0
                      )
                    : t.compressedTexImage3D(
                        s.TEXTURE_2D_ARRAY,
                        U,
                        ge,
                        xe.width,
                        xe.height,
                        ae.depth,
                        0,
                        xe.data,
                        0,
                        0
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : q
                ? R &&
                  t.texSubImage3D(
                    s.TEXTURE_2D_ARRAY,
                    U,
                    0,
                    0,
                    0,
                    xe.width,
                    xe.height,
                    ae.depth,
                    We,
                    Se,
                    xe.data
                  )
                : t.texImage3D(
                    s.TEXTURE_2D_ARRAY,
                    U,
                    ge,
                    xe.width,
                    xe.height,
                    ae.depth,
                    0,
                    We,
                    Se,
                    xe.data
                  );
        } else {
          q &&
            _e &&
            t.texStorage2D(s.TEXTURE_2D, ne, ge, A[0].width, A[0].height);
          for (let U = 0, J = A.length; U < J; U++)
            (xe = A[U]),
              _.format !== Yt
                ? We !== null
                  ? q
                    ? R &&
                      t.compressedTexSubImage2D(
                        s.TEXTURE_2D,
                        U,
                        0,
                        0,
                        xe.width,
                        xe.height,
                        We,
                        xe.data
                      )
                    : t.compressedTexImage2D(
                        s.TEXTURE_2D,
                        U,
                        ge,
                        xe.width,
                        xe.height,
                        0,
                        xe.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : q
                ? R &&
                  t.texSubImage2D(
                    s.TEXTURE_2D,
                    U,
                    0,
                    0,
                    xe.width,
                    xe.height,
                    We,
                    Se,
                    xe.data
                  )
                : t.texImage2D(
                    s.TEXTURE_2D,
                    U,
                    ge,
                    xe.width,
                    xe.height,
                    0,
                    We,
                    Se,
                    xe.data
                  );
        }
      else if (_.isDataArrayTexture)
        q
          ? (_e &&
              t.texStorage3D(
                s.TEXTURE_2D_ARRAY,
                ne,
                ge,
                ae.width,
                ae.height,
                ae.depth
              ),
            R &&
              t.texSubImage3D(
                s.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                ae.width,
                ae.height,
                ae.depth,
                We,
                Se,
                ae.data
              ))
          : t.texImage3D(
              s.TEXTURE_2D_ARRAY,
              0,
              ge,
              ae.width,
              ae.height,
              ae.depth,
              0,
              We,
              Se,
              ae.data
            );
      else if (_.isData3DTexture)
        q
          ? (_e &&
              t.texStorage3D(
                s.TEXTURE_3D,
                ne,
                ge,
                ae.width,
                ae.height,
                ae.depth
              ),
            R &&
              t.texSubImage3D(
                s.TEXTURE_3D,
                0,
                0,
                0,
                0,
                ae.width,
                ae.height,
                ae.depth,
                We,
                Se,
                ae.data
              ))
          : t.texImage3D(
              s.TEXTURE_3D,
              0,
              ge,
              ae.width,
              ae.height,
              ae.depth,
              0,
              We,
              Se,
              ae.data
            );
      else if (_.isFramebufferTexture) {
        if (_e)
          if (q) t.texStorage2D(s.TEXTURE_2D, ne, ge, ae.width, ae.height);
          else {
            let U = ae.width,
              J = ae.height;
            for (let he = 0; he < ne; he++)
              t.texImage2D(s.TEXTURE_2D, he, ge, U, J, 0, We, Se, null),
                (U >>= 1),
                (J >>= 1);
          }
      } else if (A.length > 0 && ft) {
        if (q && _e) {
          const U = st(A[0]);
          t.texStorage2D(s.TEXTURE_2D, ne, ge, U.width, U.height);
        }
        for (let U = 0, J = A.length; U < J; U++)
          (xe = A[U]),
            q
              ? R && t.texSubImage2D(s.TEXTURE_2D, U, 0, 0, We, Se, xe)
              : t.texImage2D(s.TEXTURE_2D, U, ge, We, Se, xe);
        _.generateMipmaps = !1;
      } else if (q) {
        if (_e) {
          const U = st(ae);
          t.texStorage2D(s.TEXTURE_2D, ne, ge, U.width, U.height);
        }
        R && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, We, Se, ae);
      } else t.texImage2D(s.TEXTURE_2D, 0, ge, We, Se, ae);
      M(_, ft) && y(X), (De.__version = Z.version), _.onUpdate && _.onUpdate(_);
    }
    T.__version = _.version;
  }
  function Le(T, _, G) {
    if (_.image.length !== 6) return;
    const X = ee(T, _),
      te = _.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, T.__webglTexture, s.TEXTURE0 + G);
    const Z = n.get(te);
    if (te.version !== Z.__version || X === !0) {
      t.activeTexture(s.TEXTURE0 + G);
      const De = $e.getPrimaries($e.workingColorSpace),
        Ae = _.colorSpace === Un ? null : $e.getPrimaries(_.colorSpace),
        ce =
          _.colorSpace === Un || De === Ae ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, _.flipY),
        s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
        s.pixelStorei(s.UNPACK_ALIGNMENT, _.unpackAlignment),
        s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, ce);
      const ue = _.isCompressedTexture || _.image[0].isCompressedTexture,
        Ne = _.image[0] && _.image[0].isDataTexture,
        ae = [];
      for (let U = 0; U < 6; U++)
        !ue && !Ne
          ? (ae[U] = p(_.image[U], !1, !0, i.maxCubemapSize))
          : (ae[U] = Ne ? _.image[U].image : _.image[U]),
          (ae[U] = ze(_, ae[U]));
      const ft = ae[0],
        We = f(ft) || o,
        Se = r.convert(_.format, _.colorSpace),
        ge = r.convert(_.type),
        xe = P(_.internalFormat, Se, ge, _.colorSpace),
        A = o && _.isVideoTexture !== !0,
        q = Z.__version === void 0 || X === !0,
        _e = te.dataReady;
      let R = C(_, ft, We);
      H(s.TEXTURE_CUBE_MAP, _, We);
      let ne;
      if (ue) {
        A &&
          q &&
          t.texStorage2D(s.TEXTURE_CUBE_MAP, R, xe, ft.width, ft.height);
        for (let U = 0; U < 6; U++) {
          ne = ae[U].mipmaps;
          for (let J = 0; J < ne.length; J++) {
            const he = ne[J];
            _.format !== Yt
              ? Se !== null
                ? A
                  ? _e &&
                    t.compressedTexSubImage2D(
                      s.TEXTURE_CUBE_MAP_POSITIVE_X + U,
                      J,
                      0,
                      0,
                      he.width,
                      he.height,
                      Se,
                      he.data
                    )
                  : t.compressedTexImage2D(
                      s.TEXTURE_CUBE_MAP_POSITIVE_X + U,
                      J,
                      xe,
                      he.width,
                      he.height,
                      0,
                      he.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : A
              ? _e &&
                t.texSubImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + U,
                  J,
                  0,
                  0,
                  he.width,
                  he.height,
                  Se,
                  ge,
                  he.data
                )
              : t.texImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + U,
                  J,
                  xe,
                  he.width,
                  he.height,
                  0,
                  Se,
                  ge,
                  he.data
                );
          }
        }
      } else {
        if (((ne = _.mipmaps), A && q)) {
          ne.length > 0 && R++;
          const U = st(ae[0]);
          t.texStorage2D(s.TEXTURE_CUBE_MAP, R, xe, U.width, U.height);
        }
        for (let U = 0; U < 6; U++)
          if (Ne) {
            A
              ? _e &&
                t.texSubImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + U,
                  0,
                  0,
                  0,
                  ae[U].width,
                  ae[U].height,
                  Se,
                  ge,
                  ae[U].data
                )
              : t.texImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + U,
                  0,
                  xe,
                  ae[U].width,
                  ae[U].height,
                  0,
                  Se,
                  ge,
                  ae[U].data
                );
            for (let J = 0; J < ne.length; J++) {
              const qe = ne[J].image[U].image;
              A
                ? _e &&
                  t.texSubImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + U,
                    J + 1,
                    0,
                    0,
                    qe.width,
                    qe.height,
                    Se,
                    ge,
                    qe.data
                  )
                : t.texImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + U,
                    J + 1,
                    xe,
                    qe.width,
                    qe.height,
                    0,
                    Se,
                    ge,
                    qe.data
                  );
            }
          } else {
            A
              ? _e &&
                t.texSubImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + U,
                  0,
                  0,
                  0,
                  Se,
                  ge,
                  ae[U]
                )
              : t.texImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + U,
                  0,
                  xe,
                  Se,
                  ge,
                  ae[U]
                );
            for (let J = 0; J < ne.length; J++) {
              const he = ne[J];
              A
                ? _e &&
                  t.texSubImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + U,
                    J + 1,
                    0,
                    0,
                    Se,
                    ge,
                    he.image[U]
                  )
                : t.texImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + U,
                    J + 1,
                    xe,
                    Se,
                    ge,
                    he.image[U]
                  );
            }
          }
      }
      M(_, We) && y(s.TEXTURE_CUBE_MAP),
        (Z.__version = te.version),
        _.onUpdate && _.onUpdate(_);
    }
    T.__version = _.version;
  }
  function Me(T, _, G, X, te, Z) {
    const De = r.convert(G.format, G.colorSpace),
      Ae = r.convert(G.type),
      ce = P(G.internalFormat, De, Ae, G.colorSpace);
    if (!n.get(_).__hasExternalTextures) {
      const Ne = Math.max(1, _.width >> Z),
        ae = Math.max(1, _.height >> Z);
      te === s.TEXTURE_3D || te === s.TEXTURE_2D_ARRAY
        ? t.texImage3D(te, Z, ce, Ne, ae, _.depth, 0, De, Ae, null)
        : t.texImage2D(te, Z, ce, Ne, ae, 0, De, Ae, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, T),
      Ye(_)
        ? c.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            X,
            te,
            n.get(G).__webglTexture,
            0,
            Te(_)
          )
        : (te === s.TEXTURE_2D ||
            (te >= s.TEXTURE_CUBE_MAP_POSITIVE_X &&
              te <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          s.framebufferTexture2D(
            s.FRAMEBUFFER,
            X,
            te,
            n.get(G).__webglTexture,
            Z
          ),
      t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function me(T, _, G) {
    if (
      (s.bindRenderbuffer(s.RENDERBUFFER, T), _.depthBuffer && !_.stencilBuffer)
    ) {
      let X = o === !0 ? s.DEPTH_COMPONENT24 : s.DEPTH_COMPONENT16;
      if (G || Ye(_)) {
        const te = _.depthTexture;
        te &&
          te.isDepthTexture &&
          (te.type === Jt
            ? (X = s.DEPTH_COMPONENT32F)
            : te.type === On && (X = s.DEPTH_COMPONENT24));
        const Z = Te(_);
        Ye(_)
          ? c.renderbufferStorageMultisampleEXT(
              s.RENDERBUFFER,
              Z,
              X,
              _.width,
              _.height
            )
          : s.renderbufferStorageMultisample(
              s.RENDERBUFFER,
              Z,
              X,
              _.width,
              _.height
            );
      } else s.renderbufferStorage(s.RENDERBUFFER, X, _.width, _.height);
      s.framebufferRenderbuffer(
        s.FRAMEBUFFER,
        s.DEPTH_ATTACHMENT,
        s.RENDERBUFFER,
        T
      );
    } else if (_.depthBuffer && _.stencilBuffer) {
      const X = Te(_);
      G && Ye(_) === !1
        ? s.renderbufferStorageMultisample(
            s.RENDERBUFFER,
            X,
            s.DEPTH24_STENCIL8,
            _.width,
            _.height
          )
        : Ye(_)
        ? c.renderbufferStorageMultisampleEXT(
            s.RENDERBUFFER,
            X,
            s.DEPTH24_STENCIL8,
            _.width,
            _.height
          )
        : s.renderbufferStorage(
            s.RENDERBUFFER,
            s.DEPTH_STENCIL,
            _.width,
            _.height
          ),
        s.framebufferRenderbuffer(
          s.FRAMEBUFFER,
          s.DEPTH_STENCIL_ATTACHMENT,
          s.RENDERBUFFER,
          T
        );
    } else {
      const X = _.textures;
      for (let te = 0; te < X.length; te++) {
        const Z = X[te],
          De = r.convert(Z.format, Z.colorSpace),
          Ae = r.convert(Z.type),
          ce = P(Z.internalFormat, De, Ae, Z.colorSpace),
          ue = Te(_);
        G && Ye(_) === !1
          ? s.renderbufferStorageMultisample(
              s.RENDERBUFFER,
              ue,
              ce,
              _.width,
              _.height
            )
          : Ye(_)
          ? c.renderbufferStorageMultisampleEXT(
              s.RENDERBUFFER,
              ue,
              ce,
              _.width,
              _.height
            )
          : s.renderbufferStorage(s.RENDERBUFFER, ce, _.width, _.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function Ke(T, _) {
    if (_ && _.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(s.FRAMEBUFFER, T),
      !(_.depthTexture && _.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(_.depthTexture).__webglTexture ||
      _.depthTexture.image.width !== _.width ||
      _.depthTexture.image.height !== _.height) &&
      ((_.depthTexture.image.width = _.width),
      (_.depthTexture.image.height = _.height),
      (_.depthTexture.needsUpdate = !0)),
      j(_.depthTexture, 0);
    const X = n.get(_.depthTexture).__webglTexture,
      te = Te(_);
    if (_.depthTexture.format === ri)
      Ye(_)
        ? c.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            s.DEPTH_ATTACHMENT,
            s.TEXTURE_2D,
            X,
            0,
            te
          )
        : s.framebufferTexture2D(
            s.FRAMEBUFFER,
            s.DEPTH_ATTACHMENT,
            s.TEXTURE_2D,
            X,
            0
          );
    else if (_.depthTexture.format === Hi)
      Ye(_)
        ? c.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            s.DEPTH_STENCIL_ATTACHMENT,
            s.TEXTURE_2D,
            X,
            0,
            te
          )
        : s.framebufferTexture2D(
            s.FRAMEBUFFER,
            s.DEPTH_STENCIL_ATTACHMENT,
            s.TEXTURE_2D,
            X,
            0
          );
    else throw new Error("Unknown depthTexture format");
  }
  function Ce(T) {
    const _ = n.get(T),
      G = T.isWebGLCubeRenderTarget === !0;
    if (T.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (G)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      Ke(_.__webglFramebuffer, T);
    } else if (G) {
      _.__webglDepthbuffer = [];
      for (let X = 0; X < 6; X++)
        t.bindFramebuffer(s.FRAMEBUFFER, _.__webglFramebuffer[X]),
          (_.__webglDepthbuffer[X] = s.createRenderbuffer()),
          me(_.__webglDepthbuffer[X], T, !1);
    } else
      t.bindFramebuffer(s.FRAMEBUFFER, _.__webglFramebuffer),
        (_.__webglDepthbuffer = s.createRenderbuffer()),
        me(_.__webglDepthbuffer, T, !1);
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function N(T, _, G) {
    const X = n.get(T);
    _ !== void 0 &&
      Me(
        X.__webglFramebuffer,
        T,
        T.texture,
        s.COLOR_ATTACHMENT0,
        s.TEXTURE_2D,
        0
      ),
      G !== void 0 && Ce(T);
  }
  function _t(T) {
    const _ = T.texture,
      G = n.get(T),
      X = n.get(_);
    T.addEventListener("dispose", $);
    const te = T.textures,
      Z = T.isWebGLCubeRenderTarget === !0,
      De = te.length > 1,
      Ae = f(T) || o;
    if (
      (De ||
        (X.__webglTexture === void 0 && (X.__webglTexture = s.createTexture()),
        (X.__version = _.version),
        a.memory.textures++),
      Z)
    ) {
      G.__webglFramebuffer = [];
      for (let ce = 0; ce < 6; ce++)
        if (o && _.mipmaps && _.mipmaps.length > 0) {
          G.__webglFramebuffer[ce] = [];
          for (let ue = 0; ue < _.mipmaps.length; ue++)
            G.__webglFramebuffer[ce][ue] = s.createFramebuffer();
        } else G.__webglFramebuffer[ce] = s.createFramebuffer();
    } else {
      if (o && _.mipmaps && _.mipmaps.length > 0) {
        G.__webglFramebuffer = [];
        for (let ce = 0; ce < _.mipmaps.length; ce++)
          G.__webglFramebuffer[ce] = s.createFramebuffer();
      } else G.__webglFramebuffer = s.createFramebuffer();
      if (De)
        if (i.drawBuffers)
          for (let ce = 0, ue = te.length; ce < ue; ce++) {
            const Ne = n.get(te[ce]);
            Ne.__webglTexture === void 0 &&
              ((Ne.__webglTexture = s.createTexture()), a.memory.textures++);
          }
        else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      if (o && T.samples > 0 && Ye(T) === !1) {
        (G.__webglMultisampledFramebuffer = s.createFramebuffer()),
          (G.__webglColorRenderbuffer = []),
          t.bindFramebuffer(s.FRAMEBUFFER, G.__webglMultisampledFramebuffer);
        for (let ce = 0; ce < te.length; ce++) {
          const ue = te[ce];
          (G.__webglColorRenderbuffer[ce] = s.createRenderbuffer()),
            s.bindRenderbuffer(s.RENDERBUFFER, G.__webglColorRenderbuffer[ce]);
          const Ne = r.convert(ue.format, ue.colorSpace),
            ae = r.convert(ue.type),
            ft = P(
              ue.internalFormat,
              Ne,
              ae,
              ue.colorSpace,
              T.isXRRenderTarget === !0
            ),
            We = Te(T);
          s.renderbufferStorageMultisample(
            s.RENDERBUFFER,
            We,
            ft,
            T.width,
            T.height
          ),
            s.framebufferRenderbuffer(
              s.FRAMEBUFFER,
              s.COLOR_ATTACHMENT0 + ce,
              s.RENDERBUFFER,
              G.__webglColorRenderbuffer[ce]
            );
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null),
          T.depthBuffer &&
            ((G.__webglDepthRenderbuffer = s.createRenderbuffer()),
            me(G.__webglDepthRenderbuffer, T, !0)),
          t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (Z) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, X.__webglTexture),
        H(s.TEXTURE_CUBE_MAP, _, Ae);
      for (let ce = 0; ce < 6; ce++)
        if (o && _.mipmaps && _.mipmaps.length > 0)
          for (let ue = 0; ue < _.mipmaps.length; ue++)
            Me(
              G.__webglFramebuffer[ce][ue],
              T,
              _,
              s.COLOR_ATTACHMENT0,
              s.TEXTURE_CUBE_MAP_POSITIVE_X + ce,
              ue
            );
        else
          Me(
            G.__webglFramebuffer[ce],
            T,
            _,
            s.COLOR_ATTACHMENT0,
            s.TEXTURE_CUBE_MAP_POSITIVE_X + ce,
            0
          );
      M(_, Ae) && y(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (De) {
      for (let ce = 0, ue = te.length; ce < ue; ce++) {
        const Ne = te[ce],
          ae = n.get(Ne);
        t.bindTexture(s.TEXTURE_2D, ae.__webglTexture),
          H(s.TEXTURE_2D, Ne, Ae),
          Me(
            G.__webglFramebuffer,
            T,
            Ne,
            s.COLOR_ATTACHMENT0 + ce,
            s.TEXTURE_2D,
            0
          ),
          M(Ne, Ae) && y(s.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ce = s.TEXTURE_2D;
      if (
        ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) &&
          (o
            ? (ce = T.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY)
            : console.error(
                "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
              )),
        t.bindTexture(ce, X.__webglTexture),
        H(ce, _, Ae),
        o && _.mipmaps && _.mipmaps.length > 0)
      )
        for (let ue = 0; ue < _.mipmaps.length; ue++)
          Me(G.__webglFramebuffer[ue], T, _, s.COLOR_ATTACHMENT0, ce, ue);
      else Me(G.__webglFramebuffer, T, _, s.COLOR_ATTACHMENT0, ce, 0);
      M(_, Ae) && y(ce), t.unbindTexture();
    }
    T.depthBuffer && Ce(T);
  }
  function ye(T) {
    const _ = f(T) || o,
      G = T.textures;
    for (let X = 0, te = G.length; X < te; X++) {
      const Z = G[X];
      if (M(Z, _)) {
        const De = T.isWebGLCubeRenderTarget
            ? s.TEXTURE_CUBE_MAP
            : s.TEXTURE_2D,
          Ae = n.get(Z).__webglTexture;
        t.bindTexture(De, Ae), y(De), t.unbindTexture();
      }
    }
  }
  function Oe(T) {
    if (o && T.samples > 0 && Ye(T) === !1) {
      const _ = T.textures,
        G = T.width,
        X = T.height;
      let te = s.COLOR_BUFFER_BIT;
      const Z = [],
        De = T.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT,
        Ae = n.get(T),
        ce = _.length > 1;
      if (ce)
        for (let ue = 0; ue < _.length; ue++)
          t.bindFramebuffer(s.FRAMEBUFFER, Ae.__webglMultisampledFramebuffer),
            s.framebufferRenderbuffer(
              s.FRAMEBUFFER,
              s.COLOR_ATTACHMENT0 + ue,
              s.RENDERBUFFER,
              null
            ),
            t.bindFramebuffer(s.FRAMEBUFFER, Ae.__webglFramebuffer),
            s.framebufferTexture2D(
              s.DRAW_FRAMEBUFFER,
              s.COLOR_ATTACHMENT0 + ue,
              s.TEXTURE_2D,
              null,
              0
            );
      t.bindFramebuffer(s.READ_FRAMEBUFFER, Ae.__webglMultisampledFramebuffer),
        t.bindFramebuffer(s.DRAW_FRAMEBUFFER, Ae.__webglFramebuffer);
      for (let ue = 0; ue < _.length; ue++) {
        Z.push(s.COLOR_ATTACHMENT0 + ue), T.depthBuffer && Z.push(De);
        const Ne =
          Ae.__ignoreDepthValues !== void 0 ? Ae.__ignoreDepthValues : !1;
        if (
          (Ne === !1 &&
            (T.depthBuffer && (te |= s.DEPTH_BUFFER_BIT),
            T.stencilBuffer && (te |= s.STENCIL_BUFFER_BIT)),
          ce &&
            s.framebufferRenderbuffer(
              s.READ_FRAMEBUFFER,
              s.COLOR_ATTACHMENT0,
              s.RENDERBUFFER,
              Ae.__webglColorRenderbuffer[ue]
            ),
          Ne === !0 &&
            (s.invalidateFramebuffer(s.READ_FRAMEBUFFER, [De]),
            s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [De])),
          ce)
        ) {
          const ae = n.get(_[ue]).__webglTexture;
          s.framebufferTexture2D(
            s.DRAW_FRAMEBUFFER,
            s.COLOR_ATTACHMENT0,
            s.TEXTURE_2D,
            ae,
            0
          );
        }
        s.blitFramebuffer(0, 0, G, X, 0, 0, G, X, te, s.NEAREST),
          l && s.invalidateFramebuffer(s.READ_FRAMEBUFFER, Z);
      }
      if (
        (t.bindFramebuffer(s.READ_FRAMEBUFFER, null),
        t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null),
        ce)
      )
        for (let ue = 0; ue < _.length; ue++) {
          t.bindFramebuffer(s.FRAMEBUFFER, Ae.__webglMultisampledFramebuffer),
            s.framebufferRenderbuffer(
              s.FRAMEBUFFER,
              s.COLOR_ATTACHMENT0 + ue,
              s.RENDERBUFFER,
              Ae.__webglColorRenderbuffer[ue]
            );
          const Ne = n.get(_[ue]).__webglTexture;
          t.bindFramebuffer(s.FRAMEBUFFER, Ae.__webglFramebuffer),
            s.framebufferTexture2D(
              s.DRAW_FRAMEBUFFER,
              s.COLOR_ATTACHMENT0 + ue,
              s.TEXTURE_2D,
              Ne,
              0
            );
        }
      t.bindFramebuffer(s.DRAW_FRAMEBUFFER, Ae.__webglMultisampledFramebuffer);
    }
  }
  function Te(T) {
    return Math.min(i.maxSamples, T.samples);
  }
  function Ye(T) {
    const _ = n.get(T);
    return (
      o &&
      T.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      _.__useRenderToTexture !== !1
    );
  }
  function Fe(T) {
    const _ = a.render.frame;
    h.get(T) !== _ && (h.set(T, _), T.update());
  }
  function ze(T, _) {
    const G = T.colorSpace,
      X = T.format,
      te = T.type;
    return (
      T.isCompressedTexture === !0 ||
        T.isVideoTexture === !0 ||
        T.format === ra ||
        (G !== bt &&
          G !== Un &&
          ($e.getTransfer(G) === at
            ? o === !1
              ? e.has("EXT_sRGB") === !0 && X === Yt
                ? ((T.format = ra),
                  (T.minFilter = Pt),
                  (T.generateMipmaps = !1))
                : (_ = al.sRGBToLinear(_))
              : (X !== Yt || te !== Gn) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                G
              ))),
      _
    );
  }
  function st(T) {
    return (
      typeof HTMLImageElement < "u" && T instanceof HTMLImageElement
        ? ((u.width = T.naturalWidth || T.width),
          (u.height = T.naturalHeight || T.height))
        : typeof VideoFrame < "u" && T instanceof VideoFrame
        ? ((u.width = T.displayWidth), (u.height = T.displayHeight))
        : ((u.width = T.width), (u.height = T.height)),
      u
    );
  }
  (this.allocateTextureUnit = W),
    (this.resetTextureUnits = I),
    (this.setTexture2D = j),
    (this.setTexture2DArray = V),
    (this.setTexture3D = Y),
    (this.setTextureCube = K),
    (this.rebindTextures = N),
    (this.setupRenderTarget = _t),
    (this.updateRenderTargetMipmap = ye),
    (this.updateMultisampleRenderTarget = Oe),
    (this.setupDepthRenderbuffer = Ce),
    (this.setupFrameBufferTexture = Me),
    (this.useMultisampledRTT = Ye);
}
function tg(s, e, t) {
  const n = t.isWebGL2;
  function i(r, a = Un) {
    let o;
    const c = $e.getTransfer(a);
    if (r === Gn) return s.UNSIGNED_BYTE;
    if (r === jc) return s.UNSIGNED_SHORT_4_4_4_4;
    if (r === Kc) return s.UNSIGNED_SHORT_5_5_5_1;
    if (r === Mu) return s.BYTE;
    if (r === Su) return s.SHORT;
    if (r === ma) return s.UNSIGNED_SHORT;
    if (r === Yc) return s.INT;
    if (r === On) return s.UNSIGNED_INT;
    if (r === Jt) return s.FLOAT;
    if (r === us)
      return n
        ? s.HALF_FLOAT
        : ((o = e.get("OES_texture_half_float")),
          o !== null ? o.HALF_FLOAT_OES : null);
    if (r === yu) return s.ALPHA;
    if (r === Yt) return s.RGBA;
    if (r === Eu) return s.LUMINANCE;
    if (r === Tu) return s.LUMINANCE_ALPHA;
    if (r === ri) return s.DEPTH_COMPONENT;
    if (r === Hi) return s.DEPTH_STENCIL;
    if (r === ra)
      return (o = e.get("EXT_sRGB")), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (r === Zc) return s.RED;
    if (r === $c) return s.RED_INTEGER;
    if (r === Au) return s.RG;
    if (r === Jc) return s.RG_INTEGER;
    if (r === Qc) return s.RGBA_INTEGER;
    if (r === dr || r === fr || r === pr || r === mr)
      if (c === at)
        if (((o = e.get("WEBGL_compressed_texture_s3tc_srgb")), o !== null)) {
          if (r === dr) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === fr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === pr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === mr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((o = e.get("WEBGL_compressed_texture_s3tc")), o !== null)) {
        if (r === dr) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === fr) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === pr) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === mr) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (r === Ja || r === Qa || r === eo || r === to)
      if (((o = e.get("WEBGL_compressed_texture_pvrtc")), o !== null)) {
        if (r === Ja) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === Qa) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === eo) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === to) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (r === el)
      return (
        (o = e.get("WEBGL_compressed_texture_etc1")),
        o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (r === no || r === io)
      if (((o = e.get("WEBGL_compressed_texture_etc")), o !== null)) {
        if (r === no)
          return c === at ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (r === io)
          return c === at
            ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      r === so ||
      r === ro ||
      r === ao ||
      r === oo ||
      r === co ||
      r === lo ||
      r === uo ||
      r === ho ||
      r === fo ||
      r === po ||
      r === mo ||
      r === go ||
      r === _o ||
      r === xo
    )
      if (((o = e.get("WEBGL_compressed_texture_astc")), o !== null)) {
        if (r === so)
          return c === at
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === ro)
          return c === at
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === ao)
          return c === at
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === oo)
          return c === at
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === co)
          return c === at
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === lo)
          return c === at
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === uo)
          return c === at
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === ho)
          return c === at
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === fo)
          return c === at
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === po)
          return c === at
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === mo)
          return c === at
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === go)
          return c === at
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === _o)
          return c === at
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === xo)
          return c === at
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (r === gr || r === vo || r === Mo)
      if (((o = e.get("EXT_texture_compression_bptc")), o !== null)) {
        if (r === gr)
          return c === at
            ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (r === vo) return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (r === Mo) return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (r === bu || r === So || r === yo || r === Eo)
      if (((o = e.get("EXT_texture_compression_rgtc")), o !== null)) {
        if (r === gr) return o.COMPRESSED_RED_RGTC1_EXT;
        if (r === So) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (r === yo) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (r === Eo) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return r === si
      ? n
        ? s.UNSIGNED_INT_24_8
        : ((o = e.get("WEBGL_depth_texture")),
          o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null)
      : s[r] !== void 0
      ? s[r]
      : null;
  }
  return { convert: i };
}
class ng extends Ut {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class ii extends dt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const ig = { type: "move" };
class kr {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new ii()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new ii()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new L()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new L())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new ii()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new L()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new L())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      r = null,
      a = null;
    const o = this._targetRay,
      c = this._grip,
      l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const x of e.hand.values()) {
          const p = t.getJointPose(x, n),
            f = this._getHandJoint(l, x);
          p !== null &&
            (f.matrix.fromArray(p.transform.matrix),
            f.matrix.decompose(f.position, f.rotation, f.scale),
            (f.matrixWorldNeedsUpdate = !0),
            (f.jointRadius = p.radius)),
            (f.visible = p !== null);
        }
        const u = l.joints["index-finger-tip"],
          h = l.joints["thumb-tip"],
          d = u.position.distanceTo(h.position),
          m = 0.02,
          g = 0.005;
        l.inputState.pinching && d > m + g
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            d <= m - g &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        c !== null &&
          e.gripSpace &&
          ((r = t.getPose(e.gripSpace, n)),
          r !== null &&
            (c.matrix.fromArray(r.transform.matrix),
            c.matrix.decompose(c.position, c.rotation, c.scale),
            (c.matrixWorldNeedsUpdate = !0),
            r.linearVelocity
              ? ((c.hasLinearVelocity = !0),
                c.linearVelocity.copy(r.linearVelocity))
              : (c.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((c.hasAngularVelocity = !0),
                c.angularVelocity.copy(r.angularVelocity))
              : (c.hasAngularVelocity = !1)));
      o !== null &&
        ((i = t.getPose(e.targetRaySpace, n)),
        i === null && r !== null && (i = r),
        i !== null &&
          (o.matrix.fromArray(i.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          i.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(i.linearVelocity))
            : (o.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(i.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(ig)));
    }
    return (
      o !== null && (o.visible = i !== null),
      c !== null && (c.visible = r !== null),
      l !== null && (l.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new ii();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const sg = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  rg = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class ag {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new Tt(),
        r = e.properties.get(i);
      (r.__webglTexture = t.texture),
        (t.depthNear != n.depthNear || t.depthFar != n.depthFar) &&
          ((this.depthNear = t.depthNear), (this.depthFar = t.depthFar)),
        (this.texture = i);
    }
  }
  render(e, t) {
    if (this.texture !== null) {
      if (this.mesh === null) {
        const n = t.cameras[0].viewport,
          i = new kn({
            extensions: { fragDepth: !0 },
            vertexShader: sg,
            fragmentShader: rg,
            uniforms: {
              depthColor: { value: this.texture },
              depthWidth: { value: n.z },
              depthHeight: { value: n.w },
            },
          });
        this.mesh = new tt(new rr(20, 20), i);
      }
      e.render(this.mesh, t);
    }
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
}
class og extends ci {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      r = 1,
      a = null,
      o = "local-floor",
      c = 1,
      l = null,
      u = null,
      h = null,
      d = null,
      m = null,
      g = null;
    const x = new ag(),
      p = t.getContextAttributes();
    let f = null,
      E = null;
    const M = [],
      y = [],
      P = new be();
    let C = null;
    const b = new Ut();
    b.layers.enable(1), (b.viewport = new it());
    const F = new Ut();
    F.layers.enable(2), (F.viewport = new it());
    const $ = [b, F],
      v = new ng();
    v.layers.enable(1), v.layers.enable(2);
    let w = null,
      re = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (H) {
        let ee = M[H];
        return (
          ee === void 0 && ((ee = new kr()), (M[H] = ee)),
          ee.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (H) {
        let ee = M[H];
        return (
          ee === void 0 && ((ee = new kr()), (M[H] = ee)), ee.getGripSpace()
        );
      }),
      (this.getHand = function (H) {
        let ee = M[H];
        return (
          ee === void 0 && ((ee = new kr()), (M[H] = ee)), ee.getHandSpace()
        );
      });
    function Q(H) {
      const ee = y.indexOf(H.inputSource);
      if (ee === -1) return;
      const fe = M[ee];
      fe !== void 0 &&
        (fe.update(H.inputSource, H.frame, l || a),
        fe.dispatchEvent({ type: H.type, data: H.inputSource }));
    }
    function I() {
      i.removeEventListener("select", Q),
        i.removeEventListener("selectstart", Q),
        i.removeEventListener("selectend", Q),
        i.removeEventListener("squeeze", Q),
        i.removeEventListener("squeezestart", Q),
        i.removeEventListener("squeezeend", Q),
        i.removeEventListener("end", I),
        i.removeEventListener("inputsourceschange", W);
      for (let H = 0; H < M.length; H++) {
        const ee = y[H];
        ee !== null && ((y[H] = null), M[H].disconnect(ee));
      }
      (w = null),
        (re = null),
        x.reset(),
        e.setRenderTarget(f),
        (m = null),
        (d = null),
        (h = null),
        (i = null),
        (E = null),
        Ie.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(C),
        e.setSize(P.width, P.height, !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (H) {
      (r = H),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (H) {
        (o = H),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return l || a;
      }),
      (this.setReferenceSpace = function (H) {
        l = H;
      }),
      (this.getBaseLayer = function () {
        return d !== null ? d : m;
      }),
      (this.getBinding = function () {
        return h;
      }),
      (this.getFrame = function () {
        return g;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (H) {
        if (((i = H), i !== null)) {
          if (
            ((f = e.getRenderTarget()),
            i.addEventListener("select", Q),
            i.addEventListener("selectstart", Q),
            i.addEventListener("selectend", Q),
            i.addEventListener("squeeze", Q),
            i.addEventListener("squeezestart", Q),
            i.addEventListener("squeezeend", Q),
            i.addEventListener("end", I),
            i.addEventListener("inputsourceschange", W),
            p.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (C = e.getPixelRatio()),
            e.getSize(P),
            i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const ee = {
              antialias: i.renderState.layers === void 0 ? p.antialias : !0,
              alpha: !0,
              depth: p.depth,
              stencil: p.stencil,
              framebufferScaleFactor: r,
            };
            (m = new XRWebGLLayer(i, t, ee)),
              i.updateRenderState({ baseLayer: m }),
              e.setPixelRatio(1),
              e.setSize(m.framebufferWidth, m.framebufferHeight, !1),
              (E = new ai(m.framebufferWidth, m.framebufferHeight, {
                format: Yt,
                type: Gn,
                colorSpace: e.outputColorSpace,
                stencilBuffer: p.stencil,
              }));
          } else {
            let ee = null,
              fe = null,
              Le = null;
            p.depth &&
              ((Le = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (ee = p.stencil ? Hi : ri),
              (fe = p.stencil ? si : On));
            const Me = {
              colorFormat: t.RGBA8,
              depthFormat: Le,
              scaleFactor: r,
            };
            (h = new XRWebGLBinding(i, t)),
              (d = h.createProjectionLayer(Me)),
              i.updateRenderState({ layers: [d] }),
              e.setPixelRatio(1),
              e.setSize(d.textureWidth, d.textureHeight, !1),
              (E = new ai(d.textureWidth, d.textureHeight, {
                format: Yt,
                type: Gn,
                depthTexture: new _l(
                  d.textureWidth,
                  d.textureHeight,
                  fe,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  ee
                ),
                stencilBuffer: p.stencil,
                colorSpace: e.outputColorSpace,
                samples: p.antialias ? 4 : 0,
              }));
            const me = e.properties.get(E);
            me.__ignoreDepthValues = d.ignoreDepthValues;
          }
          (E.isXRRenderTarget = !0),
            this.setFoveation(c),
            (l = null),
            (a = await i.requestReferenceSpace(o)),
            Ie.setContext(i),
            Ie.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (i !== null) return i.environmentBlendMode;
      });
    function W(H) {
      for (let ee = 0; ee < H.removed.length; ee++) {
        const fe = H.removed[ee],
          Le = y.indexOf(fe);
        Le >= 0 && ((y[Le] = null), M[Le].disconnect(fe));
      }
      for (let ee = 0; ee < H.added.length; ee++) {
        const fe = H.added[ee];
        let Le = y.indexOf(fe);
        if (Le === -1) {
          for (let me = 0; me < M.length; me++)
            if (me >= y.length) {
              y.push(fe), (Le = me);
              break;
            } else if (y[me] === null) {
              (y[me] = fe), (Le = me);
              break;
            }
          if (Le === -1) break;
        }
        const Me = M[Le];
        Me && Me.connect(fe);
      }
    }
    const k = new L(),
      j = new L();
    function V(H, ee, fe) {
      k.setFromMatrixPosition(ee.matrixWorld),
        j.setFromMatrixPosition(fe.matrixWorld);
      const Le = k.distanceTo(j),
        Me = ee.projectionMatrix.elements,
        me = fe.projectionMatrix.elements,
        Ke = Me[14] / (Me[10] - 1),
        Ce = Me[14] / (Me[10] + 1),
        N = (Me[9] + 1) / Me[5],
        _t = (Me[9] - 1) / Me[5],
        ye = (Me[8] - 1) / Me[0],
        Oe = (me[8] + 1) / me[0],
        Te = Ke * ye,
        Ye = Ke * Oe,
        Fe = Le / (-ye + Oe),
        ze = Fe * -ye;
      ee.matrixWorld.decompose(H.position, H.quaternion, H.scale),
        H.translateX(ze),
        H.translateZ(Fe),
        H.matrixWorld.compose(H.position, H.quaternion, H.scale),
        H.matrixWorldInverse.copy(H.matrixWorld).invert();
      const st = Ke + Fe,
        T = Ce + Fe,
        _ = Te - ze,
        G = Ye + (Le - ze),
        X = ((N * Ce) / T) * st,
        te = ((_t * Ce) / T) * st;
      H.projectionMatrix.makePerspective(_, G, X, te, st, T),
        H.projectionMatrixInverse.copy(H.projectionMatrix).invert();
    }
    function Y(H, ee) {
      ee === null
        ? H.matrixWorld.copy(H.matrix)
        : H.matrixWorld.multiplyMatrices(ee.matrixWorld, H.matrix),
        H.matrixWorldInverse.copy(H.matrixWorld).invert();
    }
    this.updateCamera = function (H) {
      if (i === null) return;
      x.texture !== null && ((H.near = x.depthNear), (H.far = x.depthFar)),
        (v.near = F.near = b.near = H.near),
        (v.far = F.far = b.far = H.far),
        (w !== v.near || re !== v.far) &&
          (i.updateRenderState({ depthNear: v.near, depthFar: v.far }),
          (w = v.near),
          (re = v.far),
          (b.near = w),
          (b.far = re),
          (F.near = w),
          (F.far = re),
          b.updateProjectionMatrix(),
          F.updateProjectionMatrix(),
          H.updateProjectionMatrix());
      const ee = H.parent,
        fe = v.cameras;
      Y(v, ee);
      for (let Le = 0; Le < fe.length; Le++) Y(fe[Le], ee);
      fe.length === 2
        ? V(v, b, F)
        : v.projectionMatrix.copy(b.projectionMatrix),
        K(H, v, ee);
    };
    function K(H, ee, fe) {
      fe === null
        ? H.matrix.copy(ee.matrixWorld)
        : (H.matrix.copy(fe.matrixWorld),
          H.matrix.invert(),
          H.matrix.multiply(ee.matrixWorld)),
        H.matrix.decompose(H.position, H.quaternion, H.scale),
        H.updateMatrixWorld(!0),
        H.projectionMatrix.copy(ee.projectionMatrix),
        H.projectionMatrixInverse.copy(ee.projectionMatrixInverse),
        H.isPerspectiveCamera &&
          ((H.fov = ki * 2 * Math.atan(1 / H.projectionMatrix.elements[5])),
          (H.zoom = 1));
    }
    (this.getCamera = function () {
      return v;
    }),
      (this.getFoveation = function () {
        if (!(d === null && m === null)) return c;
      }),
      (this.setFoveation = function (H) {
        (c = H),
          d !== null && (d.fixedFoveation = H),
          m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = H);
      }),
      (this.hasDepthSensing = function () {
        return x.texture !== null;
      });
    let oe = null;
    function pe(H, ee) {
      if (((u = ee.getViewerPose(l || a)), (g = ee), u !== null)) {
        const fe = u.views;
        m !== null &&
          (e.setRenderTargetFramebuffer(E, m.framebuffer),
          e.setRenderTarget(E));
        let Le = !1;
        fe.length !== v.cameras.length && ((v.cameras.length = 0), (Le = !0));
        for (let me = 0; me < fe.length; me++) {
          const Ke = fe[me];
          let Ce = null;
          if (m !== null) Ce = m.getViewport(Ke);
          else {
            const _t = h.getViewSubImage(d, Ke);
            (Ce = _t.viewport),
              me === 0 &&
                (e.setRenderTargetTextures(
                  E,
                  _t.colorTexture,
                  d.ignoreDepthValues ? void 0 : _t.depthStencilTexture
                ),
                e.setRenderTarget(E));
          }
          let N = $[me];
          N === void 0 &&
            ((N = new Ut()),
            N.layers.enable(me),
            (N.viewport = new it()),
            ($[me] = N)),
            N.matrix.fromArray(Ke.transform.matrix),
            N.matrix.decompose(N.position, N.quaternion, N.scale),
            N.projectionMatrix.fromArray(Ke.projectionMatrix),
            N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),
            N.viewport.set(Ce.x, Ce.y, Ce.width, Ce.height),
            me === 0 &&
              (v.matrix.copy(N.matrix),
              v.matrix.decompose(v.position, v.quaternion, v.scale)),
            Le === !0 && v.cameras.push(N);
        }
        const Me = i.enabledFeatures;
        if (Me && Me.includes("depth-sensing")) {
          const me = h.getDepthInformation(fe[0]);
          me && me.isValid && me.texture && x.init(e, me, i.renderState);
        }
      }
      for (let fe = 0; fe < M.length; fe++) {
        const Le = y[fe],
          Me = M[fe];
        Le !== null && Me !== void 0 && Me.update(Le, ee, l || a);
      }
      x.render(e, v),
        oe && oe(H, ee),
        ee.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: ee }),
        (g = null);
    }
    const Ie = new gl();
    Ie.setAnimationLoop(pe),
      (this.setAnimationLoop = function (H) {
        oe = H;
      }),
      (this.dispose = function () {});
  }
}
const Jn = new nn(),
  cg = new Ve();
function lg(s, e) {
  function t(p, f) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), f.value.copy(p.matrix);
  }
  function n(p, f) {
    f.color.getRGB(p.fogColor.value, fl(s)),
      f.isFog
        ? ((p.fogNear.value = f.near), (p.fogFar.value = f.far))
        : f.isFogExp2 && (p.fogDensity.value = f.density);
  }
  function i(p, f, E, M, y) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial
      ? r(p, f)
      : f.isMeshToonMaterial
      ? (r(p, f), h(p, f))
      : f.isMeshPhongMaterial
      ? (r(p, f), u(p, f))
      : f.isMeshStandardMaterial
      ? (r(p, f), d(p, f), f.isMeshPhysicalMaterial && m(p, f, y))
      : f.isMeshMatcapMaterial
      ? (r(p, f), g(p, f))
      : f.isMeshDepthMaterial
      ? r(p, f)
      : f.isMeshDistanceMaterial
      ? (r(p, f), x(p, f))
      : f.isMeshNormalMaterial
      ? r(p, f)
      : f.isLineBasicMaterial
      ? (a(p, f), f.isLineDashedMaterial && o(p, f))
      : f.isPointsMaterial
      ? c(p, f, E, M)
      : f.isSpriteMaterial
      ? l(p, f)
      : f.isShadowMaterial
      ? (p.color.value.copy(f.color), (p.opacity.value = f.opacity))
      : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function r(p, f) {
    (p.opacity.value = f.opacity),
      f.color && p.diffuse.value.copy(f.color),
      f.emissive &&
        p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),
      f.map && ((p.map.value = f.map), t(f.map, p.mapTransform)),
      f.alphaMap &&
        ((p.alphaMap.value = f.alphaMap), t(f.alphaMap, p.alphaMapTransform)),
      f.bumpMap &&
        ((p.bumpMap.value = f.bumpMap),
        t(f.bumpMap, p.bumpMapTransform),
        (p.bumpScale.value = f.bumpScale),
        f.side === Ot && (p.bumpScale.value *= -1)),
      f.normalMap &&
        ((p.normalMap.value = f.normalMap),
        t(f.normalMap, p.normalMapTransform),
        p.normalScale.value.copy(f.normalScale),
        f.side === Ot && p.normalScale.value.negate()),
      f.displacementMap &&
        ((p.displacementMap.value = f.displacementMap),
        t(f.displacementMap, p.displacementMapTransform),
        (p.displacementScale.value = f.displacementScale),
        (p.displacementBias.value = f.displacementBias)),
      f.emissiveMap &&
        ((p.emissiveMap.value = f.emissiveMap),
        t(f.emissiveMap, p.emissiveMapTransform)),
      f.specularMap &&
        ((p.specularMap.value = f.specularMap),
        t(f.specularMap, p.specularMapTransform)),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    const E = e.get(f),
      M = E.envMap,
      y = E.envMapRotation;
    if (
      (M &&
        ((p.envMap.value = M),
        Jn.copy(y),
        (Jn.x *= -1),
        (Jn.y *= -1),
        (Jn.z *= -1),
        M.isCubeTexture &&
          M.isRenderTargetTexture === !1 &&
          ((Jn.y *= -1), (Jn.z *= -1)),
        p.envMapRotation.value.setFromMatrix4(cg.makeRotationFromEuler(Jn)),
        (p.flipEnvMap.value =
          M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1),
        (p.reflectivity.value = f.reflectivity),
        (p.ior.value = f.ior),
        (p.refractionRatio.value = f.refractionRatio)),
      f.lightMap)
    ) {
      p.lightMap.value = f.lightMap;
      const P = s._useLegacyLights === !0 ? Math.PI : 1;
      (p.lightMapIntensity.value = f.lightMapIntensity * P),
        t(f.lightMap, p.lightMapTransform);
    }
    f.aoMap &&
      ((p.aoMap.value = f.aoMap),
      (p.aoMapIntensity.value = f.aoMapIntensity),
      t(f.aoMap, p.aoMapTransform));
  }
  function a(p, f) {
    p.diffuse.value.copy(f.color),
      (p.opacity.value = f.opacity),
      f.map && ((p.map.value = f.map), t(f.map, p.mapTransform));
  }
  function o(p, f) {
    (p.dashSize.value = f.dashSize),
      (p.totalSize.value = f.dashSize + f.gapSize),
      (p.scale.value = f.scale);
  }
  function c(p, f, E, M) {
    p.diffuse.value.copy(f.color),
      (p.opacity.value = f.opacity),
      (p.size.value = f.size * E),
      (p.scale.value = M * 0.5),
      f.map && ((p.map.value = f.map), t(f.map, p.uvTransform)),
      f.alphaMap &&
        ((p.alphaMap.value = f.alphaMap), t(f.alphaMap, p.alphaMapTransform)),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
  }
  function l(p, f) {
    p.diffuse.value.copy(f.color),
      (p.opacity.value = f.opacity),
      (p.rotation.value = f.rotation),
      f.map && ((p.map.value = f.map), t(f.map, p.mapTransform)),
      f.alphaMap &&
        ((p.alphaMap.value = f.alphaMap), t(f.alphaMap, p.alphaMapTransform)),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
  }
  function u(p, f) {
    p.specular.value.copy(f.specular),
      (p.shininess.value = Math.max(f.shininess, 1e-4));
  }
  function h(p, f) {
    f.gradientMap && (p.gradientMap.value = f.gradientMap);
  }
  function d(p, f) {
    (p.metalness.value = f.metalness),
      f.metalnessMap &&
        ((p.metalnessMap.value = f.metalnessMap),
        t(f.metalnessMap, p.metalnessMapTransform)),
      (p.roughness.value = f.roughness),
      f.roughnessMap &&
        ((p.roughnessMap.value = f.roughnessMap),
        t(f.roughnessMap, p.roughnessMapTransform)),
      e.get(f).envMap && (p.envMapIntensity.value = f.envMapIntensity);
  }
  function m(p, f, E) {
    (p.ior.value = f.ior),
      f.sheen > 0 &&
        (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),
        (p.sheenRoughness.value = f.sheenRoughness),
        f.sheenColorMap &&
          ((p.sheenColorMap.value = f.sheenColorMap),
          t(f.sheenColorMap, p.sheenColorMapTransform)),
        f.sheenRoughnessMap &&
          ((p.sheenRoughnessMap.value = f.sheenRoughnessMap),
          t(f.sheenRoughnessMap, p.sheenRoughnessMapTransform))),
      f.clearcoat > 0 &&
        ((p.clearcoat.value = f.clearcoat),
        (p.clearcoatRoughness.value = f.clearcoatRoughness),
        f.clearcoatMap &&
          ((p.clearcoatMap.value = f.clearcoatMap),
          t(f.clearcoatMap, p.clearcoatMapTransform)),
        f.clearcoatRoughnessMap &&
          ((p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap),
          t(f.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)),
        f.clearcoatNormalMap &&
          ((p.clearcoatNormalMap.value = f.clearcoatNormalMap),
          t(f.clearcoatNormalMap, p.clearcoatNormalMapTransform),
          p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),
          f.side === Ot && p.clearcoatNormalScale.value.negate())),
      f.iridescence > 0 &&
        ((p.iridescence.value = f.iridescence),
        (p.iridescenceIOR.value = f.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1]),
        f.iridescenceMap &&
          ((p.iridescenceMap.value = f.iridescenceMap),
          t(f.iridescenceMap, p.iridescenceMapTransform)),
        f.iridescenceThicknessMap &&
          ((p.iridescenceThicknessMap.value = f.iridescenceThicknessMap),
          t(f.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))),
      f.transmission > 0 &&
        ((p.transmission.value = f.transmission),
        (p.transmissionSamplerMap.value = E.texture),
        p.transmissionSamplerSize.value.set(E.width, E.height),
        f.transmissionMap &&
          ((p.transmissionMap.value = f.transmissionMap),
          t(f.transmissionMap, p.transmissionMapTransform)),
        (p.thickness.value = f.thickness),
        f.thicknessMap &&
          ((p.thicknessMap.value = f.thicknessMap),
          t(f.thicknessMap, p.thicknessMapTransform)),
        (p.attenuationDistance.value = f.attenuationDistance),
        p.attenuationColor.value.copy(f.attenuationColor)),
      f.anisotropy > 0 &&
        (p.anisotropyVector.value.set(
          f.anisotropy * Math.cos(f.anisotropyRotation),
          f.anisotropy * Math.sin(f.anisotropyRotation)
        ),
        f.anisotropyMap &&
          ((p.anisotropyMap.value = f.anisotropyMap),
          t(f.anisotropyMap, p.anisotropyMapTransform))),
      (p.specularIntensity.value = f.specularIntensity),
      p.specularColor.value.copy(f.specularColor),
      f.specularColorMap &&
        ((p.specularColorMap.value = f.specularColorMap),
        t(f.specularColorMap, p.specularColorMapTransform)),
      f.specularIntensityMap &&
        ((p.specularIntensityMap.value = f.specularIntensityMap),
        t(f.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, f) {
    f.matcap && (p.matcap.value = f.matcap);
  }
  function x(p, f) {
    const E = e.get(f).light;
    p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),
      (p.nearDistance.value = E.shadow.camera.near),
      (p.farDistance.value = E.shadow.camera.far);
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function ug(s, e, t, n) {
  let i = {},
    r = {},
    a = [];
  const o = t.isWebGL2 ? s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function c(E, M) {
    const y = M.program;
    n.uniformBlockBinding(E, y);
  }
  function l(E, M) {
    let y = i[E.id];
    y === void 0 &&
      (g(E), (y = u(E)), (i[E.id] = y), E.addEventListener("dispose", p));
    const P = M.program;
    n.updateUBOMapping(E, P);
    const C = e.render.frame;
    r[E.id] !== C && (d(E), (r[E.id] = C));
  }
  function u(E) {
    const M = h();
    E.__bindingPointIndex = M;
    const y = s.createBuffer(),
      P = E.__size,
      C = E.usage;
    return (
      s.bindBuffer(s.UNIFORM_BUFFER, y),
      s.bufferData(s.UNIFORM_BUFFER, P, C),
      s.bindBuffer(s.UNIFORM_BUFFER, null),
      s.bindBufferBase(s.UNIFORM_BUFFER, M, y),
      y
    );
  }
  function h() {
    for (let E = 0; E < o; E++) if (a.indexOf(E) === -1) return a.push(E), E;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function d(E) {
    const M = i[E.id],
      y = E.uniforms,
      P = E.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, M);
    for (let C = 0, b = y.length; C < b; C++) {
      const F = Array.isArray(y[C]) ? y[C] : [y[C]];
      for (let $ = 0, v = F.length; $ < v; $++) {
        const w = F[$];
        if (m(w, C, $, P) === !0) {
          const re = w.__offset,
            Q = Array.isArray(w.value) ? w.value : [w.value];
          let I = 0;
          for (let W = 0; W < Q.length; W++) {
            const k = Q[W],
              j = x(k);
            typeof k == "number" || typeof k == "boolean"
              ? ((w.__data[0] = k),
                s.bufferSubData(s.UNIFORM_BUFFER, re + I, w.__data))
              : k.isMatrix3
              ? ((w.__data[0] = k.elements[0]),
                (w.__data[1] = k.elements[1]),
                (w.__data[2] = k.elements[2]),
                (w.__data[3] = 0),
                (w.__data[4] = k.elements[3]),
                (w.__data[5] = k.elements[4]),
                (w.__data[6] = k.elements[5]),
                (w.__data[7] = 0),
                (w.__data[8] = k.elements[6]),
                (w.__data[9] = k.elements[7]),
                (w.__data[10] = k.elements[8]),
                (w.__data[11] = 0))
              : (k.toArray(w.__data, I),
                (I += j.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          s.bufferSubData(s.UNIFORM_BUFFER, re, w.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function m(E, M, y, P) {
    const C = E.value,
      b = M + "_" + y;
    if (P[b] === void 0)
      return (
        typeof C == "number" || typeof C == "boolean"
          ? (P[b] = C)
          : (P[b] = C.clone()),
        !0
      );
    {
      const F = P[b];
      if (typeof C == "number" || typeof C == "boolean") {
        if (F !== C) return (P[b] = C), !0;
      } else if (F.equals(C) === !1) return F.copy(C), !0;
    }
    return !1;
  }
  function g(E) {
    const M = E.uniforms;
    let y = 0;
    const P = 16;
    for (let b = 0, F = M.length; b < F; b++) {
      const $ = Array.isArray(M[b]) ? M[b] : [M[b]];
      for (let v = 0, w = $.length; v < w; v++) {
        const re = $[v],
          Q = Array.isArray(re.value) ? re.value : [re.value];
        for (let I = 0, W = Q.length; I < W; I++) {
          const k = Q[I],
            j = x(k),
            V = y % P;
          V !== 0 && P - V < j.boundary && (y += P - V),
            (re.__data = new Float32Array(
              j.storage / Float32Array.BYTES_PER_ELEMENT
            )),
            (re.__offset = y),
            (y += j.storage);
        }
      }
    }
    const C = y % P;
    return C > 0 && (y += P - C), (E.__size = y), (E.__cache = {}), this;
  }
  function x(E) {
    const M = { boundary: 0, storage: 0 };
    return (
      typeof E == "number" || typeof E == "boolean"
        ? ((M.boundary = 4), (M.storage = 4))
        : E.isVector2
        ? ((M.boundary = 8), (M.storage = 8))
        : E.isVector3 || E.isColor
        ? ((M.boundary = 16), (M.storage = 12))
        : E.isVector4
        ? ((M.boundary = 16), (M.storage = 16))
        : E.isMatrix3
        ? ((M.boundary = 48), (M.storage = 48))
        : E.isMatrix4
        ? ((M.boundary = 64), (M.storage = 64))
        : E.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            E
          ),
      M
    );
  }
  function p(E) {
    const M = E.target;
    M.removeEventListener("dispose", p);
    const y = a.indexOf(M.__bindingPointIndex);
    a.splice(y, 1), s.deleteBuffer(i[M.id]), delete i[M.id], delete r[M.id];
  }
  function f() {
    for (const E in i) s.deleteBuffer(i[E]);
    (a = []), (i = {}), (r = {});
  }
  return { bind: c, update: l, dispose: f };
}
class El {
  constructor(e = {}) {
    const {
      canvas: t = Qu(),
      context: n = null,
      depth: i = !0,
      stencil: r = !0,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: h = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    n !== null ? (d = n.getContextAttributes().alpha) : (d = a);
    const m = new Uint32Array(4),
      g = new Int32Array(4);
    let x = null,
      p = null;
    const f = [],
      E = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = Nt),
      (this._useLegacyLights = !1),
      (this.toneMapping = Hn),
      (this.toneMappingExposure = 1);
    const M = this;
    let y = !1,
      P = 0,
      C = 0,
      b = null,
      F = -1,
      $ = null;
    const v = new it(),
      w = new it();
    let re = null;
    const Q = new Re(0);
    let I = 0,
      W = t.width,
      k = t.height,
      j = 1,
      V = null,
      Y = null;
    const K = new it(0, 0, W, k),
      oe = new it(0, 0, W, k);
    let pe = !1;
    const Ie = new va();
    let H = !1,
      ee = !1,
      fe = null;
    const Le = new Ve(),
      Me = new be(),
      me = new L(),
      Ke = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    function Ce() {
      return b === null ? j : 1;
    }
    let N = n;
    function _t(S, D) {
      for (let B = 0; B < S.length; B++) {
        const z = S[B],
          O = t.getContext(z, D);
        if (O !== null) return O;
      }
      return null;
    }
    try {
      const S = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: u,
        failIfMajorPerformanceCaveat: h,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${fa}`),
        t.addEventListener("webglcontextlost", _e, !1),
        t.addEventListener("webglcontextrestored", R, !1),
        t.addEventListener("webglcontextcreationerror", ne, !1),
        N === null)
      ) {
        const D = ["webgl2", "webgl", "experimental-webgl"];
        if (
          (M.isWebGL1Renderer === !0 && D.shift(), (N = _t(D, S)), N === null)
        )
          throw _t(D)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" &&
        N instanceof WebGLRenderingContext &&
        console.warn(
          "THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."
        ),
        N.getShaderPrecisionFormat === void 0 &&
          (N.getShaderPrecisionFormat = function () {
            return { rangeMin: 1, rangeMax: 1, precision: 1 };
          });
    } catch (S) {
      throw (console.error("THREE.WebGLRenderer: " + S.message), S);
    }
    let ye,
      Oe,
      Te,
      Ye,
      Fe,
      ze,
      st,
      T,
      _,
      G,
      X,
      te,
      Z,
      De,
      Ae,
      ce,
      ue,
      Ne,
      ae,
      ft,
      We,
      Se,
      ge,
      xe;
    function A() {
      (ye = new gp(N)),
        (Oe = new up(N, ye, e)),
        ye.init(Oe),
        (Se = new tg(N, ye, Oe)),
        (Te = new Qm(N, ye, Oe)),
        (Ye = new vp(N)),
        (Fe = new zm()),
        (ze = new eg(N, ye, Te, Fe, Oe, Se, Ye)),
        (st = new dp(M)),
        (T = new mp(M)),
        (_ = new Th(N, Oe)),
        (ge = new cp(N, ye, _, Oe)),
        (G = new _p(N, _, Ye, ge)),
        (X = new Ep(N, G, _, Ye)),
        (ae = new yp(N, Oe, ze)),
        (ce = new hp(Fe)),
        (te = new Bm(M, st, T, ye, Oe, ge, ce)),
        (Z = new lg(M, Fe)),
        (De = new Gm()),
        (Ae = new Ym(ye, Oe)),
        (Ne = new op(M, st, T, Te, X, d, c)),
        (ue = new Jm(M, X, Oe)),
        (xe = new ug(N, Ye, Oe, Te)),
        (ft = new lp(N, ye, Ye, Oe)),
        (We = new xp(N, ye, Ye, Oe)),
        (Ye.programs = te.programs),
        (M.capabilities = Oe),
        (M.extensions = ye),
        (M.properties = Fe),
        (M.renderLists = De),
        (M.shadowMap = ue),
        (M.state = Te),
        (M.info = Ye);
    }
    A();
    const q = new og(M, N);
    (this.xr = q),
      (this.getContext = function () {
        return N;
      }),
      (this.getContextAttributes = function () {
        return N.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const S = ye.get("WEBGL_lose_context");
        S && S.loseContext();
      }),
      (this.forceContextRestore = function () {
        const S = ye.get("WEBGL_lose_context");
        S && S.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return j;
      }),
      (this.setPixelRatio = function (S) {
        S !== void 0 && ((j = S), this.setSize(W, k, !1));
      }),
      (this.getSize = function (S) {
        return S.set(W, k);
      }),
      (this.setSize = function (S, D, B = !0) {
        if (q.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting."
          );
          return;
        }
        (W = S),
          (k = D),
          (t.width = Math.floor(S * j)),
          (t.height = Math.floor(D * j)),
          B === !0 && ((t.style.width = S + "px"), (t.style.height = D + "px")),
          this.setViewport(0, 0, S, D);
      }),
      (this.getDrawingBufferSize = function (S) {
        return S.set(W * j, k * j).floor();
      }),
      (this.setDrawingBufferSize = function (S, D, B) {
        (W = S),
          (k = D),
          (j = B),
          (t.width = Math.floor(S * B)),
          (t.height = Math.floor(D * B)),
          this.setViewport(0, 0, S, D);
      }),
      (this.getCurrentViewport = function (S) {
        return S.copy(v);
      }),
      (this.getViewport = function (S) {
        return S.copy(K);
      }),
      (this.setViewport = function (S, D, B, z) {
        S.isVector4 ? K.set(S.x, S.y, S.z, S.w) : K.set(S, D, B, z),
          Te.viewport(v.copy(K).multiplyScalar(j).round());
      }),
      (this.getScissor = function (S) {
        return S.copy(oe);
      }),
      (this.setScissor = function (S, D, B, z) {
        S.isVector4 ? oe.set(S.x, S.y, S.z, S.w) : oe.set(S, D, B, z),
          Te.scissor(w.copy(oe).multiplyScalar(j).round());
      }),
      (this.getScissorTest = function () {
        return pe;
      }),
      (this.setScissorTest = function (S) {
        Te.setScissorTest((pe = S));
      }),
      (this.setOpaqueSort = function (S) {
        V = S;
      }),
      (this.setTransparentSort = function (S) {
        Y = S;
      }),
      (this.getClearColor = function (S) {
        return S.copy(Ne.getClearColor());
      }),
      (this.setClearColor = function () {
        Ne.setClearColor.apply(Ne, arguments);
      }),
      (this.getClearAlpha = function () {
        return Ne.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        Ne.setClearAlpha.apply(Ne, arguments);
      }),
      (this.clear = function (S = !0, D = !0, B = !0) {
        let z = 0;
        if (S) {
          let O = !1;
          if (b !== null) {
            const de = b.texture.format;
            O = de === Qc || de === Jc || de === $c;
          }
          if (O) {
            const de = b.texture.type,
              ve =
                de === Gn ||
                de === On ||
                de === ma ||
                de === si ||
                de === jc ||
                de === Kc,
              we = Ne.getClearColor(),
              Pe = Ne.getClearAlpha(),
              Xe = we.r,
              Ue = we.g,
              Be = we.b;
            ve
              ? ((m[0] = Xe),
                (m[1] = Ue),
                (m[2] = Be),
                (m[3] = Pe),
                N.clearBufferuiv(N.COLOR, 0, m))
              : ((g[0] = Xe),
                (g[1] = Ue),
                (g[2] = Be),
                (g[3] = Pe),
                N.clearBufferiv(N.COLOR, 0, g));
          } else z |= N.COLOR_BUFFER_BIT;
        }
        D && (z |= N.DEPTH_BUFFER_BIT),
          B &&
            ((z |= N.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          N.clear(z);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", _e, !1),
          t.removeEventListener("webglcontextrestored", R, !1),
          t.removeEventListener("webglcontextcreationerror", ne, !1),
          De.dispose(),
          Ae.dispose(),
          Fe.dispose(),
          st.dispose(),
          T.dispose(),
          X.dispose(),
          ge.dispose(),
          xe.dispose(),
          te.dispose(),
          q.dispose(),
          q.removeEventListener("sessionstart", pt),
          q.removeEventListener("sessionend", Ze),
          fe && (fe.dispose(), (fe = null)),
          rt.stop();
      });
    function _e(S) {
      S.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (y = !0);
    }
    function R() {
      console.log("THREE.WebGLRenderer: Context Restored."), (y = !1);
      const S = Ye.autoReset,
        D = ue.enabled,
        B = ue.autoUpdate,
        z = ue.needsUpdate,
        O = ue.type;
      A(),
        (Ye.autoReset = S),
        (ue.enabled = D),
        (ue.autoUpdate = B),
        (ue.needsUpdate = z),
        (ue.type = O);
    }
    function ne(S) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        S.statusMessage
      );
    }
    function U(S) {
      const D = S.target;
      D.removeEventListener("dispose", U), J(D);
    }
    function J(S) {
      he(S), Fe.remove(S);
    }
    function he(S) {
      const D = Fe.get(S).programs;
      D !== void 0 &&
        (D.forEach(function (B) {
          te.releaseProgram(B);
        }),
        S.isShaderMaterial && te.releaseShaderCache(S));
    }
    this.renderBufferDirect = function (S, D, B, z, O, de) {
      D === null && (D = Ke);
      const ve = O.isMesh && O.matrixWorld.determinant() < 0,
        we = Ol(S, D, B, z, O);
      Te.setMaterial(z, ve);
      let Pe = B.index,
        Xe = 1;
      if (z.wireframe === !0) {
        if (((Pe = G.getWireframeAttribute(B)), Pe === void 0)) return;
        Xe = 2;
      }
      const Ue = B.drawRange,
        Be = B.attributes.position;
      let mt = Ue.start * Xe,
        Ht = (Ue.start + Ue.count) * Xe;
      de !== null &&
        ((mt = Math.max(mt, de.start * Xe)),
        (Ht = Math.min(Ht, (de.start + de.count) * Xe))),
        Pe !== null
          ? ((mt = Math.max(mt, 0)), (Ht = Math.min(Ht, Pe.count)))
          : Be != null &&
            ((mt = Math.max(mt, 0)), (Ht = Math.min(Ht, Be.count)));
      const St = Ht - mt;
      if (St < 0 || St === 1 / 0) return;
      ge.setup(O, z, we, B, Pe);
      let dn,
        ht = ft;
      if (
        (Pe !== null && ((dn = _.get(Pe)), (ht = We), ht.setIndex(dn)),
        O.isMesh)
      )
        z.wireframe === !0
          ? (Te.setLineWidth(z.wireframeLinewidth * Ce()), ht.setMode(N.LINES))
          : ht.setMode(N.TRIANGLES);
      else if (O.isLine) {
        let He = z.linewidth;
        He === void 0 && (He = 1),
          Te.setLineWidth(He * Ce()),
          O.isLineSegments
            ? ht.setMode(N.LINES)
            : O.isLineLoop
            ? ht.setMode(N.LINE_LOOP)
            : ht.setMode(N.LINE_STRIP);
      } else
        O.isPoints
          ? ht.setMode(N.POINTS)
          : O.isSprite && ht.setMode(N.TRIANGLES);
      if (O.isBatchedMesh)
        ht.renderMultiDraw(
          O._multiDrawStarts,
          O._multiDrawCounts,
          O._multiDrawCount
        );
      else if (O.isInstancedMesh) ht.renderInstances(mt, St, O.count);
      else if (B.isInstancedBufferGeometry) {
        const He = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0,
          cr = Math.min(B.instanceCount, He);
        ht.renderInstances(mt, St, cr);
      } else ht.render(mt, St);
    };
    function qe(S, D, B) {
      S.transparent === !0 && S.side === an && S.forceSinglePass === !1
        ? ((S.side = Ot),
          (S.needsUpdate = !0),
          xs(S, D, B),
          (S.side = En),
          (S.needsUpdate = !0),
          xs(S, D, B),
          (S.side = an))
        : xs(S, D, B);
    }
    (this.compile = function (S, D, B = null) {
      B === null && (B = S),
        (p = Ae.get(B)),
        p.init(),
        E.push(p),
        B.traverseVisible(function (O) {
          O.isLight &&
            O.layers.test(D.layers) &&
            (p.pushLight(O), O.castShadow && p.pushShadow(O));
        }),
        S !== B &&
          S.traverseVisible(function (O) {
            O.isLight &&
              O.layers.test(D.layers) &&
              (p.pushLight(O), O.castShadow && p.pushShadow(O));
          }),
        p.setupLights(M._useLegacyLights);
      const z = new Set();
      return (
        S.traverse(function (O) {
          const de = O.material;
          if (de)
            if (Array.isArray(de))
              for (let ve = 0; ve < de.length; ve++) {
                const we = de[ve];
                qe(we, B, O), z.add(we);
              }
            else qe(de, B, O), z.add(de);
        }),
        E.pop(),
        (p = null),
        z
      );
    }),
      (this.compileAsync = function (S, D, B = null) {
        const z = this.compile(S, D, B);
        return new Promise((O) => {
          function de() {
            if (
              (z.forEach(function (ve) {
                Fe.get(ve).currentProgram.isReady() && z.delete(ve);
              }),
              z.size === 0)
            ) {
              O(S);
              return;
            }
            setTimeout(de, 10);
          }
          ye.get("KHR_parallel_shader_compile") !== null
            ? de()
            : setTimeout(de, 10);
        });
      });
    let Je = null;
    function nt(S) {
      Je && Je(S);
    }
    function pt() {
      rt.stop();
    }
    function Ze() {
      rt.start();
    }
    const rt = new gl();
    rt.setAnimationLoop(nt),
      typeof self < "u" && rt.setContext(self),
      (this.setAnimationLoop = function (S) {
        (Je = S), q.setAnimationLoop(S), S === null ? rt.stop() : rt.start();
      }),
      q.addEventListener("sessionstart", pt),
      q.addEventListener("sessionend", Ze),
      (this.render = function (S, D) {
        if (D !== void 0 && D.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
          return;
        }
        if (y === !0) return;
        S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(),
          D.parent === null &&
            D.matrixWorldAutoUpdate === !0 &&
            D.updateMatrixWorld(),
          q.enabled === !0 &&
            q.isPresenting === !0 &&
            (q.cameraAutoUpdate === !0 && q.updateCamera(D),
            (D = q.getCamera())),
          S.isScene === !0 && S.onBeforeRender(M, S, D, b),
          (p = Ae.get(S, E.length)),
          p.init(),
          E.push(p),
          Le.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse),
          Ie.setFromProjectionMatrix(Le),
          (ee = this.localClippingEnabled),
          (H = ce.init(this.clippingPlanes, ee)),
          (x = De.get(S, f.length)),
          x.init(),
          f.push(x),
          wt(S, D, 0, M.sortObjects),
          x.finish(),
          M.sortObjects === !0 && x.sort(V, Y),
          this.info.render.frame++,
          H === !0 && ce.beginShadows();
        const B = p.state.shadowsArray;
        if (
          (ue.render(B, S, D),
          H === !0 && ce.endShadows(),
          this.info.autoReset === !0 && this.info.reset(),
          (q.enabled === !1 ||
            q.isPresenting === !1 ||
            q.hasDepthSensing() === !1) &&
            Ne.render(x, S),
          p.setupLights(M._useLegacyLights),
          D.isArrayCamera)
        ) {
          const z = D.cameras;
          for (let O = 0, de = z.length; O < de; O++) {
            const ve = z[O];
            Wn(x, S, ve, ve.viewport);
          }
        } else Wn(x, S, D);
        b !== null &&
          (ze.updateMultisampleRenderTarget(b), ze.updateRenderTargetMipmap(b)),
          S.isScene === !0 && S.onAfterRender(M, S, D),
          ge.resetDefaultState(),
          (F = -1),
          ($ = null),
          E.pop(),
          E.length > 0 ? (p = E[E.length - 1]) : (p = null),
          f.pop(),
          f.length > 0 ? (x = f[f.length - 1]) : (x = null);
      });
    function wt(S, D, B, z) {
      if (S.visible === !1) return;
      if (S.layers.test(D.layers)) {
        if (S.isGroup) B = S.renderOrder;
        else if (S.isLOD) S.autoUpdate === !0 && S.update(D);
        else if (S.isLight) p.pushLight(S), S.castShadow && p.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || Ie.intersectsSprite(S)) {
            z && me.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Le);
            const ve = X.update(S),
              we = S.material;
            we.visible && x.push(S, ve, we, B, me.z, null);
          }
        } else if (
          (S.isMesh || S.isLine || S.isPoints) &&
          (!S.frustumCulled || Ie.intersectsObject(S))
        ) {
          const ve = X.update(S),
            we = S.material;
          if (
            (z &&
              (S.boundingSphere !== void 0
                ? (S.boundingSphere === null && S.computeBoundingSphere(),
                  me.copy(S.boundingSphere.center))
                : (ve.boundingSphere === null && ve.computeBoundingSphere(),
                  me.copy(ve.boundingSphere.center)),
              me.applyMatrix4(S.matrixWorld).applyMatrix4(Le)),
            Array.isArray(we))
          ) {
            const Pe = ve.groups;
            for (let Xe = 0, Ue = Pe.length; Xe < Ue; Xe++) {
              const Be = Pe[Xe],
                mt = we[Be.materialIndex];
              mt && mt.visible && x.push(S, ve, mt, B, me.z, Be);
            }
          } else we.visible && x.push(S, ve, we, B, me.z, null);
        }
      }
      const de = S.children;
      for (let ve = 0, we = de.length; ve < we; ve++) wt(de[ve], D, B, z);
    }
    function Wn(S, D, B, z) {
      const O = S.opaque,
        de = S.transmissive,
        ve = S.transparent;
      p.setupLightsView(B),
        H === !0 && ce.setGlobalState(M.clippingPlanes, B),
        de.length > 0 && gs(O, de, D, B),
        z && Te.viewport(v.copy(z)),
        O.length > 0 && _s(O, D, B),
        de.length > 0 && _s(de, D, B),
        ve.length > 0 && _s(ve, D, B),
        Te.buffers.depth.setTest(!0),
        Te.buffers.depth.setMask(!0),
        Te.buffers.color.setMask(!0),
        Te.setPolygonOffset(!1);
    }
    function gs(S, D, B, z) {
      if ((B.isScene === !0 ? B.overrideMaterial : null) !== null) return;
      const de = Oe.isWebGL2;
      fe === null &&
        (fe = new ai(1, 1, {
          generateMipmaps: !0,
          type: ye.has("EXT_color_buffer_half_float") ? us : Gn,
          minFilter: Mn,
          samples: de ? 4 : 0,
        })),
        M.getDrawingBufferSize(Me),
        de ? fe.setSize(Me.x, Me.y) : fe.setSize(tr(Me.x), tr(Me.y));
      const ve = M.getRenderTarget();
      M.setRenderTarget(fe),
        M.getClearColor(Q),
        (I = M.getClearAlpha()),
        I < 1 && M.setClearColor(16777215, 0.5),
        M.clear();
      const we = M.toneMapping;
      (M.toneMapping = Hn),
        _s(S, B, z),
        ze.updateMultisampleRenderTarget(fe),
        ze.updateRenderTargetMipmap(fe);
      let Pe = !1;
      for (let Xe = 0, Ue = D.length; Xe < Ue; Xe++) {
        const Be = D[Xe],
          mt = Be.object,
          Ht = Be.geometry,
          St = Be.material,
          dn = Be.group;
        if (St.side === an && mt.layers.test(z.layers)) {
          const ht = St.side;
          (St.side = Ot),
            (St.needsUpdate = !0),
            Ha(mt, B, z, Ht, St, dn),
            (St.side = ht),
            (St.needsUpdate = !0),
            (Pe = !0);
        }
      }
      Pe === !0 &&
        (ze.updateMultisampleRenderTarget(fe), ze.updateRenderTargetMipmap(fe)),
        M.setRenderTarget(ve),
        M.setClearColor(Q, I),
        (M.toneMapping = we);
    }
    function _s(S, D, B) {
      const z = D.isScene === !0 ? D.overrideMaterial : null;
      for (let O = 0, de = S.length; O < de; O++) {
        const ve = S[O],
          we = ve.object,
          Pe = ve.geometry,
          Xe = z === null ? ve.material : z,
          Ue = ve.group;
        we.layers.test(B.layers) && Ha(we, D, B, Pe, Xe, Ue);
      }
    }
    function Ha(S, D, B, z, O, de) {
      S.onBeforeRender(M, D, B, z, O, de),
        S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, S.matrixWorld),
        S.normalMatrix.getNormalMatrix(S.modelViewMatrix),
        O.onBeforeRender(M, D, B, z, S, de),
        O.transparent === !0 && O.side === an && O.forceSinglePass === !1
          ? ((O.side = Ot),
            (O.needsUpdate = !0),
            M.renderBufferDirect(B, D, z, O, S, de),
            (O.side = En),
            (O.needsUpdate = !0),
            M.renderBufferDirect(B, D, z, O, S, de),
            (O.side = an))
          : M.renderBufferDirect(B, D, z, O, S, de),
        S.onAfterRender(M, D, B, z, O, de);
    }
    function xs(S, D, B) {
      D.isScene !== !0 && (D = Ke);
      const z = Fe.get(S),
        O = p.state.lights,
        de = p.state.shadowsArray,
        ve = O.state.version,
        we = te.getParameters(S, O.state, de, D, B),
        Pe = te.getProgramCacheKey(we);
      let Xe = z.programs;
      (z.environment = S.isMeshStandardMaterial ? D.environment : null),
        (z.fog = D.fog),
        (z.envMap = (S.isMeshStandardMaterial ? T : st).get(
          S.envMap || z.environment
        )),
        (z.envMapRotation =
          z.environment !== null && S.envMap === null
            ? D.environmentRotation
            : S.envMapRotation),
        Xe === void 0 &&
          (S.addEventListener("dispose", U),
          (Xe = new Map()),
          (z.programs = Xe));
      let Ue = Xe.get(Pe);
      if (Ue !== void 0) {
        if (z.currentProgram === Ue && z.lightsStateVersion === ve)
          return ka(S, we), Ue;
      } else
        (we.uniforms = te.getUniforms(S)),
          S.onBuild(B, we, M),
          S.onBeforeCompile(we, M),
          (Ue = te.acquireProgram(we, Pe)),
          Xe.set(Pe, Ue),
          (z.uniforms = we.uniforms);
      const Be = z.uniforms;
      return (
        ((!S.isShaderMaterial && !S.isRawShaderMaterial) ||
          S.clipping === !0) &&
          (Be.clippingPlanes = ce.uniform),
        ka(S, we),
        (z.needsLights = Bl(S)),
        (z.lightsStateVersion = ve),
        z.needsLights &&
          ((Be.ambientLightColor.value = O.state.ambient),
          (Be.lightProbe.value = O.state.probe),
          (Be.directionalLights.value = O.state.directional),
          (Be.directionalLightShadows.value = O.state.directionalShadow),
          (Be.spotLights.value = O.state.spot),
          (Be.spotLightShadows.value = O.state.spotShadow),
          (Be.rectAreaLights.value = O.state.rectArea),
          (Be.ltc_1.value = O.state.rectAreaLTC1),
          (Be.ltc_2.value = O.state.rectAreaLTC2),
          (Be.pointLights.value = O.state.point),
          (Be.pointLightShadows.value = O.state.pointShadow),
          (Be.hemisphereLights.value = O.state.hemi),
          (Be.directionalShadowMap.value = O.state.directionalShadowMap),
          (Be.directionalShadowMatrix.value = O.state.directionalShadowMatrix),
          (Be.spotShadowMap.value = O.state.spotShadowMap),
          (Be.spotLightMatrix.value = O.state.spotLightMatrix),
          (Be.spotLightMap.value = O.state.spotLightMap),
          (Be.pointShadowMap.value = O.state.pointShadowMap),
          (Be.pointShadowMatrix.value = O.state.pointShadowMatrix)),
        (z.currentProgram = Ue),
        (z.uniformsList = null),
        Ue
      );
    }
    function Ga(S) {
      if (S.uniformsList === null) {
        const D = S.currentProgram.getUniforms();
        S.uniformsList = js.seqWithValue(D.seq, S.uniforms);
      }
      return S.uniformsList;
    }
    function ka(S, D) {
      const B = Fe.get(S);
      (B.outputColorSpace = D.outputColorSpace),
        (B.batching = D.batching),
        (B.instancing = D.instancing),
        (B.instancingColor = D.instancingColor),
        (B.instancingMorph = D.instancingMorph),
        (B.skinning = D.skinning),
        (B.morphTargets = D.morphTargets),
        (B.morphNormals = D.morphNormals),
        (B.morphColors = D.morphColors),
        (B.morphTargetsCount = D.morphTargetsCount),
        (B.numClippingPlanes = D.numClippingPlanes),
        (B.numIntersection = D.numClipIntersection),
        (B.vertexAlphas = D.vertexAlphas),
        (B.vertexTangents = D.vertexTangents),
        (B.toneMapping = D.toneMapping);
    }
    function Ol(S, D, B, z, O) {
      D.isScene !== !0 && (D = Ke), ze.resetTextureUnits();
      const de = D.fog,
        ve = z.isMeshStandardMaterial ? D.environment : null,
        we =
          b === null
            ? M.outputColorSpace
            : b.isXRRenderTarget === !0
            ? b.texture.colorSpace
            : bt,
        Pe = (z.isMeshStandardMaterial ? T : st).get(z.envMap || ve),
        Xe =
          z.vertexColors === !0 &&
          !!B.attributes.color &&
          B.attributes.color.itemSize === 4,
        Ue = !!B.attributes.tangent && (!!z.normalMap || z.anisotropy > 0),
        Be = !!B.morphAttributes.position,
        mt = !!B.morphAttributes.normal,
        Ht = !!B.morphAttributes.color;
      let St = Hn;
      z.toneMapped &&
        (b === null || b.isXRRenderTarget === !0) &&
        (St = M.toneMapping);
      const dn =
          B.morphAttributes.position ||
          B.morphAttributes.normal ||
          B.morphAttributes.color,
        ht = dn !== void 0 ? dn.length : 0,
        He = Fe.get(z),
        cr = p.state.lights;
      if (H === !0 && (ee === !0 || S !== $)) {
        const Vt = S === $ && z.id === F;
        ce.setState(z, S, Vt);
      }
      let ot = !1;
      z.version === He.__version
        ? ((He.needsLights && He.lightsStateVersion !== cr.state.version) ||
            He.outputColorSpace !== we ||
            (O.isBatchedMesh && He.batching === !1) ||
            (!O.isBatchedMesh && He.batching === !0) ||
            (O.isInstancedMesh && He.instancing === !1) ||
            (!O.isInstancedMesh && He.instancing === !0) ||
            (O.isSkinnedMesh && He.skinning === !1) ||
            (!O.isSkinnedMesh && He.skinning === !0) ||
            (O.isInstancedMesh &&
              He.instancingColor === !0 &&
              O.instanceColor === null) ||
            (O.isInstancedMesh &&
              He.instancingColor === !1 &&
              O.instanceColor !== null) ||
            (O.isInstancedMesh &&
              He.instancingMorph === !0 &&
              O.morphTexture === null) ||
            (O.isInstancedMesh &&
              He.instancingMorph === !1 &&
              O.morphTexture !== null) ||
            He.envMap !== Pe ||
            (z.fog === !0 && He.fog !== de) ||
            (He.numClippingPlanes !== void 0 &&
              (He.numClippingPlanes !== ce.numPlanes ||
                He.numIntersection !== ce.numIntersection)) ||
            He.vertexAlphas !== Xe ||
            He.vertexTangents !== Ue ||
            He.morphTargets !== Be ||
            He.morphNormals !== mt ||
            He.morphColors !== Ht ||
            He.toneMapping !== St ||
            (Oe.isWebGL2 === !0 && He.morphTargetsCount !== ht)) &&
          (ot = !0)
        : ((ot = !0), (He.__version = z.version));
      let Xn = He.currentProgram;
      ot === !0 && (Xn = xs(z, D, O));
      let Va = !1,
        Ji = !1,
        lr = !1;
      const Rt = Xn.getUniforms(),
        qn = He.uniforms;
      if (
        (Te.useProgram(Xn.program) && ((Va = !0), (Ji = !0), (lr = !0)),
        z.id !== F && ((F = z.id), (Ji = !0)),
        Va || $ !== S)
      ) {
        Rt.setValue(N, "projectionMatrix", S.projectionMatrix),
          Rt.setValue(N, "viewMatrix", S.matrixWorldInverse);
        const Vt = Rt.map.cameraPosition;
        Vt !== void 0 &&
          Vt.setValue(N, me.setFromMatrixPosition(S.matrixWorld)),
          Oe.logarithmicDepthBuffer &&
            Rt.setValue(
              N,
              "logDepthBufFC",
              2 / (Math.log(S.far + 1) / Math.LN2)
            ),
          (z.isMeshPhongMaterial ||
            z.isMeshToonMaterial ||
            z.isMeshLambertMaterial ||
            z.isMeshBasicMaterial ||
            z.isMeshStandardMaterial ||
            z.isShaderMaterial) &&
            Rt.setValue(N, "isOrthographic", S.isOrthographicCamera === !0),
          $ !== S && (($ = S), (Ji = !0), (lr = !0));
      }
      if (O.isSkinnedMesh) {
        Rt.setOptional(N, O, "bindMatrix"),
          Rt.setOptional(N, O, "bindMatrixInverse");
        const Vt = O.skeleton;
        Vt &&
          (Oe.floatVertexTextures
            ? (Vt.boneTexture === null && Vt.computeBoneTexture(),
              Rt.setValue(N, "boneTexture", Vt.boneTexture, ze))
            : console.warn(
                "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
              ));
      }
      O.isBatchedMesh &&
        (Rt.setOptional(N, O, "batchingTexture"),
        Rt.setValue(N, "batchingTexture", O._matricesTexture, ze));
      const ur = B.morphAttributes;
      if (
        ((ur.position !== void 0 ||
          ur.normal !== void 0 ||
          (ur.color !== void 0 && Oe.isWebGL2 === !0)) &&
          ae.update(O, B, Xn),
        (Ji || He.receiveShadow !== O.receiveShadow) &&
          ((He.receiveShadow = O.receiveShadow),
          Rt.setValue(N, "receiveShadow", O.receiveShadow)),
        z.isMeshGouraudMaterial &&
          z.envMap !== null &&
          ((qn.envMap.value = Pe),
          (qn.flipEnvMap.value =
            Pe.isCubeTexture && Pe.isRenderTargetTexture === !1 ? -1 : 1)),
        Ji &&
          (Rt.setValue(N, "toneMappingExposure", M.toneMappingExposure),
          He.needsLights && Fl(qn, lr),
          de && z.fog === !0 && Z.refreshFogUniforms(qn, de),
          Z.refreshMaterialUniforms(qn, z, j, k, fe),
          js.upload(N, Ga(He), qn, ze)),
        z.isShaderMaterial &&
          z.uniformsNeedUpdate === !0 &&
          (js.upload(N, Ga(He), qn, ze), (z.uniformsNeedUpdate = !1)),
        z.isSpriteMaterial && Rt.setValue(N, "center", O.center),
        Rt.setValue(N, "modelViewMatrix", O.modelViewMatrix),
        Rt.setValue(N, "normalMatrix", O.normalMatrix),
        Rt.setValue(N, "modelMatrix", O.matrixWorld),
        z.isShaderMaterial || z.isRawShaderMaterial)
      ) {
        const Vt = z.uniformsGroups;
        for (let hr = 0, zl = Vt.length; hr < zl; hr++)
          if (Oe.isWebGL2) {
            const Wa = Vt[hr];
            xe.update(Wa, Xn), xe.bind(Wa, Xn);
          } else
            console.warn(
              "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
            );
      }
      return Xn;
    }
    function Fl(S, D) {
      (S.ambientLightColor.needsUpdate = D),
        (S.lightProbe.needsUpdate = D),
        (S.directionalLights.needsUpdate = D),
        (S.directionalLightShadows.needsUpdate = D),
        (S.pointLights.needsUpdate = D),
        (S.pointLightShadows.needsUpdate = D),
        (S.spotLights.needsUpdate = D),
        (S.spotLightShadows.needsUpdate = D),
        (S.rectAreaLights.needsUpdate = D),
        (S.hemisphereLights.needsUpdate = D);
    }
    function Bl(S) {
      return (
        S.isMeshLambertMaterial ||
        S.isMeshToonMaterial ||
        S.isMeshPhongMaterial ||
        S.isMeshStandardMaterial ||
        S.isShadowMaterial ||
        (S.isShaderMaterial && S.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return P;
    }),
      (this.getActiveMipmapLevel = function () {
        return C;
      }),
      (this.getRenderTarget = function () {
        return b;
      }),
      (this.setRenderTargetTextures = function (S, D, B) {
        (Fe.get(S.texture).__webglTexture = D),
          (Fe.get(S.depthTexture).__webglTexture = B);
        const z = Fe.get(S);
        (z.__hasExternalTextures = !0),
          (z.__autoAllocateDepthBuffer = B === void 0),
          z.__autoAllocateDepthBuffer ||
            (ye.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (z.__useRenderToTexture = !1)));
      }),
      (this.setRenderTargetFramebuffer = function (S, D) {
        const B = Fe.get(S);
        (B.__webglFramebuffer = D), (B.__useDefaultFramebuffer = D === void 0);
      }),
      (this.setRenderTarget = function (S, D = 0, B = 0) {
        (b = S), (P = D), (C = B);
        let z = !0,
          O = null,
          de = !1,
          ve = !1;
        if (S) {
          const Pe = Fe.get(S);
          Pe.__useDefaultFramebuffer !== void 0
            ? (Te.bindFramebuffer(N.FRAMEBUFFER, null), (z = !1))
            : Pe.__webglFramebuffer === void 0
            ? ze.setupRenderTarget(S)
            : Pe.__hasExternalTextures &&
              ze.rebindTextures(
                S,
                Fe.get(S.texture).__webglTexture,
                Fe.get(S.depthTexture).__webglTexture
              );
          const Xe = S.texture;
          (Xe.isData3DTexture ||
            Xe.isDataArrayTexture ||
            Xe.isCompressedArrayTexture) &&
            (ve = !0);
          const Ue = Fe.get(S).__webglFramebuffer;
          S.isWebGLCubeRenderTarget
            ? (Array.isArray(Ue[D]) ? (O = Ue[D][B]) : (O = Ue[D]), (de = !0))
            : Oe.isWebGL2 && S.samples > 0 && ze.useMultisampledRTT(S) === !1
            ? (O = Fe.get(S).__webglMultisampledFramebuffer)
            : Array.isArray(Ue)
            ? (O = Ue[B])
            : (O = Ue),
            v.copy(S.viewport),
            w.copy(S.scissor),
            (re = S.scissorTest);
        } else
          v.copy(K).multiplyScalar(j).floor(),
            w.copy(oe).multiplyScalar(j).floor(),
            (re = pe);
        if (
          (Te.bindFramebuffer(N.FRAMEBUFFER, O) &&
            Oe.drawBuffers &&
            z &&
            Te.drawBuffers(S, O),
          Te.viewport(v),
          Te.scissor(w),
          Te.setScissorTest(re),
          de)
        ) {
          const Pe = Fe.get(S.texture);
          N.framebufferTexture2D(
            N.FRAMEBUFFER,
            N.COLOR_ATTACHMENT0,
            N.TEXTURE_CUBE_MAP_POSITIVE_X + D,
            Pe.__webglTexture,
            B
          );
        } else if (ve) {
          const Pe = Fe.get(S.texture),
            Xe = D || 0;
          N.framebufferTextureLayer(
            N.FRAMEBUFFER,
            N.COLOR_ATTACHMENT0,
            Pe.__webglTexture,
            B || 0,
            Xe
          );
        }
        F = -1;
      }),
      (this.readRenderTargetPixels = function (S, D, B, z, O, de, ve) {
        if (!(S && S.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
          return;
        }
        let we = Fe.get(S).__webglFramebuffer;
        if ((S.isWebGLCubeRenderTarget && ve !== void 0 && (we = we[ve]), we)) {
          Te.bindFramebuffer(N.FRAMEBUFFER, we);
          try {
            const Pe = S.texture,
              Xe = Pe.format,
              Ue = Pe.type;
            if (
              Xe !== Yt &&
              Se.convert(Xe) !==
                N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
              return;
            }
            const Be =
              Ue === us &&
              (ye.has("EXT_color_buffer_half_float") ||
                (Oe.isWebGL2 && ye.has("EXT_color_buffer_float")));
            if (
              Ue !== Gn &&
              Se.convert(Ue) !==
                N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE) &&
              !(
                Ue === Jt &&
                (Oe.isWebGL2 ||
                  ye.has("OES_texture_float") ||
                  ye.has("WEBGL_color_buffer_float"))
              ) &&
              !Be
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
              return;
            }
            D >= 0 &&
              D <= S.width - z &&
              B >= 0 &&
              B <= S.height - O &&
              N.readPixels(D, B, z, O, Se.convert(Xe), Se.convert(Ue), de);
          } finally {
            const Pe = b !== null ? Fe.get(b).__webglFramebuffer : null;
            Te.bindFramebuffer(N.FRAMEBUFFER, Pe);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (S, D, B = 0) {
        const z = Math.pow(2, -B),
          O = Math.floor(D.image.width * z),
          de = Math.floor(D.image.height * z);
        ze.setTexture2D(D, 0),
          N.copyTexSubImage2D(N.TEXTURE_2D, B, 0, 0, S.x, S.y, O, de),
          Te.unbindTexture();
      }),
      (this.copyTextureToTexture = function (S, D, B, z = 0) {
        const O = D.image.width,
          de = D.image.height,
          ve = Se.convert(B.format),
          we = Se.convert(B.type);
        ze.setTexture2D(B, 0),
          N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, B.flipY),
          N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, B.premultiplyAlpha),
          N.pixelStorei(N.UNPACK_ALIGNMENT, B.unpackAlignment),
          D.isDataTexture
            ? N.texSubImage2D(
                N.TEXTURE_2D,
                z,
                S.x,
                S.y,
                O,
                de,
                ve,
                we,
                D.image.data
              )
            : D.isCompressedTexture
            ? N.compressedTexSubImage2D(
                N.TEXTURE_2D,
                z,
                S.x,
                S.y,
                D.mipmaps[0].width,
                D.mipmaps[0].height,
                ve,
                D.mipmaps[0].data
              )
            : N.texSubImage2D(N.TEXTURE_2D, z, S.x, S.y, ve, we, D.image),
          z === 0 && B.generateMipmaps && N.generateMipmap(N.TEXTURE_2D),
          Te.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (S, D, B, z, O = 0) {
        if (M.isWebGL1Renderer) {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
          );
          return;
        }
        const de = Math.round(S.max.x - S.min.x),
          ve = Math.round(S.max.y - S.min.y),
          we = S.max.z - S.min.z + 1,
          Pe = Se.convert(z.format),
          Xe = Se.convert(z.type);
        let Ue;
        if (z.isData3DTexture) ze.setTexture3D(z, 0), (Ue = N.TEXTURE_3D);
        else if (z.isDataArrayTexture || z.isCompressedArrayTexture)
          ze.setTexture2DArray(z, 0), (Ue = N.TEXTURE_2D_ARRAY);
        else {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
          );
          return;
        }
        N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, z.flipY),
          N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, z.premultiplyAlpha),
          N.pixelStorei(N.UNPACK_ALIGNMENT, z.unpackAlignment);
        const Be = N.getParameter(N.UNPACK_ROW_LENGTH),
          mt = N.getParameter(N.UNPACK_IMAGE_HEIGHT),
          Ht = N.getParameter(N.UNPACK_SKIP_PIXELS),
          St = N.getParameter(N.UNPACK_SKIP_ROWS),
          dn = N.getParameter(N.UNPACK_SKIP_IMAGES),
          ht = B.isCompressedTexture ? B.mipmaps[O] : B.image;
        N.pixelStorei(N.UNPACK_ROW_LENGTH, ht.width),
          N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, ht.height),
          N.pixelStorei(N.UNPACK_SKIP_PIXELS, S.min.x),
          N.pixelStorei(N.UNPACK_SKIP_ROWS, S.min.y),
          N.pixelStorei(N.UNPACK_SKIP_IMAGES, S.min.z),
          B.isDataTexture || B.isData3DTexture
            ? N.texSubImage3D(Ue, O, D.x, D.y, D.z, de, ve, we, Pe, Xe, ht.data)
            : z.isCompressedArrayTexture
            ? N.compressedTexSubImage3D(
                Ue,
                O,
                D.x,
                D.y,
                D.z,
                de,
                ve,
                we,
                Pe,
                ht.data
              )
            : N.texSubImage3D(Ue, O, D.x, D.y, D.z, de, ve, we, Pe, Xe, ht),
          N.pixelStorei(N.UNPACK_ROW_LENGTH, Be),
          N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, mt),
          N.pixelStorei(N.UNPACK_SKIP_PIXELS, Ht),
          N.pixelStorei(N.UNPACK_SKIP_ROWS, St),
          N.pixelStorei(N.UNPACK_SKIP_IMAGES, dn),
          O === 0 && z.generateMipmaps && N.generateMipmap(Ue),
          Te.unbindTexture();
      }),
      (this.initTexture = function (S) {
        S.isCubeTexture
          ? ze.setTextureCube(S, 0)
          : S.isData3DTexture
          ? ze.setTexture3D(S, 0)
          : S.isDataArrayTexture || S.isCompressedArrayTexture
          ? ze.setTexture2DArray(S, 0)
          : ze.setTexture2D(S, 0),
          Te.unbindTexture();
      }),
      (this.resetState = function () {
        (P = 0), (C = 0), (b = null), Te.reset(), ge.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get coordinateSystem() {
    return Sn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    (t.drawingBufferColorSpace = e === _a ? "display-p3" : "srgb"),
      (t.unpackColorSpace =
        $e.workingColorSpace === sr ? "display-p3" : "srgb");
  }
  get useLegacyLights() {
    return (
      console.warn(
        "THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."
      ),
      this._useLegacyLights
    );
  }
  set useLegacyLights(e) {
    console.warn(
      "THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."
    ),
      (this._useLegacyLights = e);
  }
}
class hg extends El {}
hg.prototype.isWebGL1Renderer = !0;
class Tl extends dt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new nn()),
      (this.environmentRotation = new nn()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
class dg {
  constructor(e, t) {
    (this.isInterleavedBuffer = !0),
      (this.array = e),
      (this.stride = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.usage = sa),
      (this._updateRange = { offset: 0, count: -1 }),
      (this.updateRanges = []),
      (this.version = 0),
      (this.uuid = en());
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return (
      rl(
        "THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."
      ),
      this._updateRange
    );
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.array = new e.array.constructor(e.array)),
      (this.count = e.count),
      (this.stride = e.stride),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.stride), (n *= t.stride);
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = en()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(
        e.arrayBuffers[this.array.buffer._uuid]
      ),
      n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  toJSON(e) {
    return (
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = en()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = Array.from(
          new Uint32Array(this.array.buffer)
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
const It = new L();
class ya {
  constructor(e, t, n, i = !1) {
    (this.isInterleavedBufferAttribute = !0),
      (this.name = ""),
      (this.data = e),
      (this.itemSize = t),
      (this.offset = n),
      (this.normalized = i);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      It.fromBufferAttribute(this, t),
        It.applyMatrix4(e),
        this.setXYZ(t, It.x, It.y, It.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      It.fromBufferAttribute(this, t),
        It.applyNormalMatrix(e),
        this.setXYZ(t, It.x, It.y, It.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      It.fromBufferAttribute(this, t),
        It.transformDirection(e),
        this.setXYZ(t, It.x, It.y, It.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = Qt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = Qe(n, this.array)),
      (this.data.array[e * this.data.stride + this.offset + t] = n),
      this
    );
  }
  setX(e, t) {
    return (
      this.normalized && (t = Qe(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset] = t),
      this
    );
  }
  setY(e, t) {
    return (
      this.normalized && (t = Qe(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 1] = t),
      this
    );
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Qe(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 2] = t),
      this
    );
  }
  setW(e, t) {
    return (
      this.normalized && (t = Qe(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 3] = t),
      this
    );
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Qt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized && ((t = Qe(t, this.array)), (n = Qe(n, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = Qe(t, this.array)),
        (n = Qe(n, this.array)),
        (i = Qe(i, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, r) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = Qe(t, this.array)),
        (n = Qe(n, this.array)),
        (i = Qe(i, this.array)),
        (r = Qe(r, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      (this.data.array[e + 3] = r),
      this
    );
  }
  clone(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data."
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return new Ft(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized
      );
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new ya(
          e.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized
        )
      );
  }
  toJSON(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data."
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized,
      };
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
  }
}
const mc = new L(),
  gc = new it(),
  _c = new it(),
  fg = new L(),
  xc = new Ve(),
  Hs = new L(),
  Vr = new ln(),
  vc = new Ve(),
  Wr = new ps();
class pg extends tt {
  constructor(e, t) {
    super(e, t),
      (this.isSkinnedMesh = !0),
      (this.type = "SkinnedMesh"),
      (this.bindMode = $a),
      (this.bindMatrix = new Ve()),
      (this.bindMatrixInverse = new Ve()),
      (this.boundingBox = null),
      (this.boundingSphere = null);
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new Tn()),
      this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Hs), this.boundingBox.expandByPoint(Hs);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new ln()),
      this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, Hs), this.boundingSphere.expandByPoint(Hs);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.bindMode = e.bindMode),
      this.bindMatrix.copy(e.bindMatrix),
      this.bindMatrixInverse.copy(e.bindMatrixInverse),
      (this.skeleton = e.skeleton),
      e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
      e.boundingSphere !== null &&
        (this.boundingSphere = e.boundingSphere.clone()),
      this
    );
  }
  raycast(e, t) {
    const n = this.material,
      i = this.matrixWorld;
    n !== void 0 &&
      (this.boundingSphere === null && this.computeBoundingSphere(),
      Vr.copy(this.boundingSphere),
      Vr.applyMatrix4(i),
      e.ray.intersectsSphere(Vr) !== !1 &&
        (vc.copy(i).invert(),
        Wr.copy(e.ray).applyMatrix4(vc),
        !(
          this.boundingBox !== null && Wr.intersectsBox(this.boundingBox) === !1
        ) && this._computeIntersections(e, t, Wr)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    (this.skeleton = e),
      t === void 0 &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (t = this.matrixWorld)),
      this.bindMatrix.copy(t),
      this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new it(),
      t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0),
        t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.bindMode === $a
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : this.bindMode === vu
        ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
        : console.warn(
            "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
          );
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton,
      i = this.geometry;
    gc.fromBufferAttribute(i.attributes.skinIndex, e),
      _c.fromBufferAttribute(i.attributes.skinWeight, e),
      mc.copy(t).applyMatrix4(this.bindMatrix),
      t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const a = _c.getComponent(r);
      if (a !== 0) {
        const o = gc.getComponent(r);
        xc.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]),
          t.addScaledVector(fg.copy(mc).applyMatrix4(xc), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class Al extends dt {
  constructor() {
    super(), (this.isBone = !0), (this.type = "Bone");
  }
}
class bl extends Tt {
  constructor(e = null, t = 1, n = 1, i, r, a, o, c, l = Et, u = Et, h, d) {
    super(null, a, o, c, l, u, i, r, h, d),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
const Mc = new Ve(),
  mg = new Ve();
class Ea {
  constructor(e = [], t = []) {
    (this.uuid = en()),
      (this.bones = e.slice(0)),
      (this.boneInverses = t),
      (this.boneMatrices = null),
      (this.boneTexture = null),
      this.init();
  }
  init() {
    const e = this.bones,
      t = this.boneInverses;
    if (((this.boneMatrices = new Float32Array(e.length * 16)), t.length === 0))
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn(
        "THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."
      ),
        (this.boneInverses = []);
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Ve());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ve();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(),
        this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n &&
        (n.parent && n.parent.isBone
          ? (n.matrix.copy(n.parent.matrixWorld).invert(),
            n.matrix.multiply(n.matrixWorld))
          : n.matrix.copy(n.matrixWorld),
        n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones,
      t = this.boneInverses,
      n = this.boneMatrices,
      i = this.boneTexture;
    for (let r = 0, a = e.length; r < a; r++) {
      const o = e[r] ? e[r].matrixWorld : mg;
      Mc.multiplyMatrices(o, t[r]), Mc.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new Ea(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    (e = Math.ceil(e / 4) * 4), (e = Math.max(e, 4));
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new bl(t, e, e, Yt, Jt);
    return (
      (n.needsUpdate = !0),
      (this.boneMatrices = t),
      (this.boneTexture = n),
      this
    );
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e) return i;
    }
  }
  dispose() {
    this.boneTexture !== null &&
      (this.boneTexture.dispose(), (this.boneTexture = null));
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const r = e.bones[n];
      let a = t[r];
      a === void 0 &&
        (console.warn("THREE.Skeleton: No bone found with UUID:", r),
        (a = new Al())),
        this.bones.push(a),
        this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON",
      },
      bones: [],
      boneInverses: [],
    };
    e.uuid = this.uuid;
    const t = this.bones,
      n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class la extends Ft {
  constructor(e, t, n, i = 1) {
    super(e, t, n),
      (this.isInstancedBufferAttribute = !0),
      (this.meshPerAttribute = i);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.meshPerAttribute = this.meshPerAttribute),
      (e.isInstancedBufferAttribute = !0),
      e
    );
  }
}
const Ci = new Ve(),
  Sc = new Ve(),
  Gs = [],
  yc = new Tn(),
  gg = new Ve(),
  is = new tt(),
  ss = new ln();
class _g extends tt {
  constructor(e, t, n) {
    super(e, t),
      (this.isInstancedMesh = !0),
      (this.instanceMatrix = new la(new Float32Array(n * 16), 16)),
      (this.instanceColor = null),
      (this.morphTexture = null),
      (this.count = n),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    for (let i = 0; i < n; i++) this.setMatrixAt(i, gg);
  }
  computeBoundingBox() {
    const e = this.geometry,
      t = this.count;
    this.boundingBox === null && (this.boundingBox = new Tn()),
      e.boundingBox === null && e.computeBoundingBox(),
      this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ci),
        yc.copy(e.boundingBox).applyMatrix4(Ci),
        this.boundingBox.union(yc);
  }
  computeBoundingSphere() {
    const e = this.geometry,
      t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new ln()),
      e.boundingSphere === null && e.computeBoundingSphere(),
      this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, Ci),
        ss.copy(e.boundingSphere).applyMatrix4(Ci),
        this.boundingSphere.union(ss);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.instanceMatrix.copy(e.instanceMatrix),
      e.instanceColor !== null &&
        (this.instanceColor = e.instanceColor.clone()),
      (this.count = e.count),
      e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
      e.boundingSphere !== null &&
        (this.boundingSphere = e.boundingSphere.clone()),
      this
    );
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences,
      i = this.morphTexture.source.data.data,
      r = n.length + 1,
      a = e * r + 1;
    for (let o = 0; o < n.length; o++) n[o] = i[a + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld,
      i = this.count;
    if (
      ((is.geometry = this.geometry),
      (is.material = this.material),
      is.material !== void 0 &&
        (this.boundingSphere === null && this.computeBoundingSphere(),
        ss.copy(this.boundingSphere),
        ss.applyMatrix4(n),
        e.ray.intersectsSphere(ss) !== !1))
    )
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Ci),
          Sc.multiplyMatrices(n, Ci),
          (is.matrixWorld = Sc),
          is.raycast(e, Gs);
        for (let a = 0, o = Gs.length; a < o; a++) {
          const c = Gs[a];
          (c.instanceId = r), (c.object = this), t.push(c);
        }
        Gs.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null &&
      (this.instanceColor = new la(
        new Float32Array(this.instanceMatrix.count * 3),
        3
      )),
      t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences,
      i = n.length + 1;
    this.morphTexture === null &&
      (this.morphTexture = new bl(
        new Float32Array(i * this.count),
        i,
        this.count,
        Zc,
        Jt
      ));
    const r = this.morphTexture.source.data.data;
    let a = 0;
    for (let l = 0; l < n.length; l++) a += n[l];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a,
      c = i * e;
    (r[c] = o), r.set(n, c + 1);
  }
  updateMorphTargets() {}
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class wl extends tn {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new Re(16777215)),
      (this.map = null),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Ec = new L(),
  Tc = new L(),
  Ac = new Ve(),
  Xr = new ps(),
  ks = new ln();
class Ta extends dt {
  constructor(e = new un(), t = new wl()) {
    super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let i = 1, r = t.count; i < r; i++)
        Ec.fromBufferAttribute(t, i - 1),
          Tc.fromBufferAttribute(t, i),
          (n[i] = n[i - 1]),
          (n[i] += Ec.distanceTo(Tc));
      e.setAttribute("lineDistance", new yn(n, 1));
    } else
      console.warn(
        "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = e.params.Line.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      ks.copy(n.boundingSphere),
      ks.applyMatrix4(i),
      (ks.radius += r),
      e.ray.intersectsSphere(ks) === !1)
    )
      return;
    Ac.copy(i).invert(), Xr.copy(e.ray).applyMatrix4(Ac);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = o * o,
      l = new L(),
      u = new L(),
      h = new L(),
      d = new L(),
      m = this.isLineSegments ? 2 : 1,
      g = n.index,
      p = n.attributes.position;
    if (g !== null) {
      const f = Math.max(0, a.start),
        E = Math.min(g.count, a.start + a.count);
      for (let M = f, y = E - 1; M < y; M += m) {
        const P = g.getX(M),
          C = g.getX(M + 1);
        if (
          (l.fromBufferAttribute(p, P),
          u.fromBufferAttribute(p, C),
          Xr.distanceSqToSegment(l, u, d, h) > c)
        )
          continue;
        d.applyMatrix4(this.matrixWorld);
        const F = e.ray.origin.distanceTo(d);
        F < e.near ||
          F > e.far ||
          t.push({
            distance: F,
            point: h.clone().applyMatrix4(this.matrixWorld),
            index: M,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    } else {
      const f = Math.max(0, a.start),
        E = Math.min(p.count, a.start + a.count);
      for (let M = f, y = E - 1; M < y; M += m) {
        if (
          (l.fromBufferAttribute(p, M),
          u.fromBufferAttribute(p, M + 1),
          Xr.distanceSqToSegment(l, u, d, h) > c)
        )
          continue;
        d.applyMatrix4(this.matrixWorld);
        const C = e.ray.origin.distanceTo(d);
        C < e.near ||
          C > e.far ||
          t.push({
            distance: C,
            point: h.clone().applyMatrix4(this.matrixWorld),
            index: M,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r);
        }
      }
    }
  }
}
const bc = new L(),
  wc = new L();
class xg extends Ta {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        bc.fromBufferAttribute(t, i),
          wc.fromBufferAttribute(t, i + 1),
          (n[i] = i === 0 ? 0 : n[i - 1]),
          (n[i + 1] = n[i] + bc.distanceTo(wc));
      e.setAttribute("lineDistance", new yn(n, 1));
    } else
      console.warn(
        "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
}
class vg extends Ta {
  constructor(e, t) {
    super(e, t), (this.isLineLoop = !0), (this.type = "LineLoop");
  }
}
class Rl extends tn {
  constructor(e) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = "PointsMaterial"),
      (this.color = new Re(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
const Rc = new Ve(),
  ua = new ps(),
  Vs = new ln(),
  Ws = new L();
class Mg extends dt {
  constructor(e = new un(), t = new Rl()) {
    super(),
      (this.isPoints = !0),
      (this.type = "Points"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = e.params.Points.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Vs.copy(n.boundingSphere),
      Vs.applyMatrix4(i),
      (Vs.radius += r),
      e.ray.intersectsSphere(Vs) === !1)
    )
      return;
    Rc.copy(i).invert(), ua.copy(e.ray).applyMatrix4(Rc);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      c = o * o,
      l = n.index,
      h = n.attributes.position;
    if (l !== null) {
      const d = Math.max(0, a.start),
        m = Math.min(l.count, a.start + a.count);
      for (let g = d, x = m; g < x; g++) {
        const p = l.getX(g);
        Ws.fromBufferAttribute(h, p), Cc(Ws, p, c, i, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start),
        m = Math.min(h.count, a.start + a.count);
      for (let g = d, x = m; g < x; g++)
        Ws.fromBufferAttribute(h, g), Cc(Ws, g, c, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r);
        }
      }
    }
  }
}
function Cc(s, e, t, n, i, r, a) {
  const o = ua.distanceSqToPoint(s);
  if (o < t) {
    const c = new L();
    ua.closestPointToPoint(s, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far) return;
    r.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: e,
      face: null,
      object: a,
    });
  }
}
class fs extends tn {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new Re(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Re(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = ga),
      (this.normalScale = new be(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new nn()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class An extends fs {
  constructor(e) {
    super(),
      (this.isMeshPhysicalMaterial = !0),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.anisotropyRotation = 0),
      (this.anisotropyMap = null),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new be(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return At((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (t) {
          this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
        },
      }),
      (this.iridescenceMap = null),
      (this.iridescenceIOR = 1.3),
      (this.iridescenceThicknessRange = [100, 400]),
      (this.iridescenceThicknessMap = null),
      (this.sheenColor = new Re(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 1 / 0),
      (this.attenuationColor = new Re(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new Re(1, 1, 1)),
      (this.specularColorMap = null),
      (this._anisotropy = 0),
      (this._clearcoat = 0),
      (this._iridescence = 0),
      (this._sheen = 0),
      (this._transmission = 0),
      this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, (this._anisotropy = e);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, (this._transmission = e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.anisotropy = e.anisotropy),
      (this.anisotropyRotation = e.anisotropyRotation),
      (this.anisotropyMap = e.anisotropyMap),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.ior = e.ior),
      (this.iridescence = e.iridescence),
      (this.iridescenceMap = e.iridescenceMap),
      (this.iridescenceIOR = e.iridescenceIOR),
      (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
      (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
      (this.sheen = e.sheen),
      this.sheenColor.copy(e.sheenColor),
      (this.sheenColorMap = e.sheenColorMap),
      (this.sheenRoughness = e.sheenRoughness),
      (this.sheenRoughnessMap = e.sheenRoughnessMap),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      (this.thickness = e.thickness),
      (this.thicknessMap = e.thicknessMap),
      (this.attenuationDistance = e.attenuationDistance),
      this.attenuationColor.copy(e.attenuationColor),
      (this.specularIntensity = e.specularIntensity),
      (this.specularIntensityMap = e.specularIntensityMap),
      this.specularColor.copy(e.specularColor),
      (this.specularColorMap = e.specularColorMap),
      this
    );
  }
}
class jt extends tn {
  constructor(e) {
    super(),
      (this.isMeshPhongMaterial = !0),
      (this.type = "MeshPhongMaterial"),
      (this.color = new Re(16777215)),
      (this.specular = new Re(1118481)),
      (this.shininess = 30),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Re(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = ga),
      (this.normalScale = new be(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new nn()),
      (this.combine = pa),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      this.specular.copy(e.specular),
      (this.shininess = e.shininess),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
function Xs(s, e, t) {
  return !s || (!t && s.constructor === e)
    ? s
    : typeof e.BYTES_PER_ELEMENT == "number"
    ? new e(s)
    : Array.prototype.slice.call(s);
}
function Sg(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function yg(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length,
    n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function Lc(s, e, t) {
  const n = s.length,
    i = new s.constructor(n);
  for (let r = 0, a = 0; a !== n; ++r) {
    const o = t[r] * e;
    for (let c = 0; c !== e; ++c) i[a++] = s[o + c];
  }
  return i;
}
function Cl(s, e, t, n) {
  let i = 1,
    r = s[0];
  for (; r !== void 0 && r[n] === void 0; ) r = s[i++];
  if (r === void 0) return;
  let a = r[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        (a = r[n]),
          a !== void 0 && (e.push(r.time), t.push.apply(t, a)),
          (r = s[i++]);
      while (r !== void 0);
    else if (a.toArray !== void 0)
      do
        (a = r[n]),
          a !== void 0 && (e.push(r.time), a.toArray(t, t.length)),
          (r = s[i++]);
      while (r !== void 0);
    else
      do (a = r[n]), a !== void 0 && (e.push(r.time), t.push(a)), (r = s[i++]);
      while (r !== void 0);
}
class ms {
  constructor(e, t, n, i) {
    (this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = i !== void 0 ? i : new t.constructor(n)),
      (this.sampleValues = t),
      (this.valueSize = n),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex,
      i = t[n],
      r = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < r) break i;
                return (
                  (n = t.length),
                  (this._cachedIndex = n),
                  this.copySampleValue_(n - 1)
                );
              }
              if (n === o) break;
              if (((r = i), (i = t[++n]), e < i)) break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= r)) {
            const o = t[1];
            e < o && ((n = 2), (r = o));
            for (let c = n - 2; ; ) {
              if (r === void 0)
                return (this._cachedIndex = 0), this.copySampleValue_(0);
              if (n === c) break;
              if (((i = r), (r = t[--n - 1]), e >= r)) break e;
            }
            (a = n), (n = 0);
            break t;
          }
          break n;
        }
        for (; n < a; ) {
          const o = (n + a) >>> 1;
          e < t[o] ? (a = o) : (n = o + 1);
        }
        if (((i = t[n]), (r = t[n - 1]), r === void 0))
          return (this._cachedIndex = 0), this.copySampleValue_(0);
        if (i === void 0)
          return (
            (n = t.length),
            (this._cachedIndex = n),
            this.copySampleValue_(n - 1)
          );
      }
      (this._cachedIndex = n), this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      r = e * i;
    for (let a = 0; a !== i; ++a) t[a] = n[r + a];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {}
}
class Eg extends ms {
  constructor(e, t, n, i) {
    super(e, t, n, i),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = { endingStart: To, endingEnd: To });
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2,
      a = e + 1,
      o = i[r],
      c = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case Ao:
          (r = e), (o = 2 * t - n);
          break;
        case bo:
          (r = i.length - 2), (o = t + i[r] - i[r + 1]);
          break;
        default:
          (r = e), (o = n);
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case Ao:
          (a = e), (c = 2 * n - t);
          break;
        case bo:
          (a = 1), (c = n + i[1] - i[0]);
          break;
        default:
          (a = e - 1), (c = t);
      }
    const l = (n - t) * 0.5,
      u = this.valueSize;
    (this._weightPrev = l / (t - o)),
      (this._weightNext = l / (c - n)),
      (this._offsetPrev = r * u),
      (this._offsetNext = a * u);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = e * o,
      l = c - o,
      u = this._offsetPrev,
      h = this._offsetNext,
      d = this._weightPrev,
      m = this._weightNext,
      g = (n - t) / (i - t),
      x = g * g,
      p = x * g,
      f = -d * p + 2 * d * x - d * g,
      E = (1 + d) * p + (-1.5 - 2 * d) * x + (-0.5 + d) * g + 1,
      M = (-1 - m) * p + (1.5 + m) * x + 0.5 * g,
      y = m * p - m * x;
    for (let P = 0; P !== o; ++P)
      r[P] = f * a[u + P] + E * a[l + P] + M * a[c + P] + y * a[h + P];
    return r;
  }
}
class Tg extends ms {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = e * o,
      l = c - o,
      u = (n - t) / (i - t),
      h = 1 - u;
    for (let d = 0; d !== o; ++d) r[d] = a[l + d] * h + a[c + d] * u;
    return r;
  }
}
class Ag extends ms {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class hn {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    (this.name = e),
      (this.times = Xs(t, this.TimeBufferType)),
      (this.values = Xs(n, this.ValueBufferType)),
      this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Xs(e.times, Array),
        values: Xs(e.values, Array),
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return (n.type = e.ValueTypeName), n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Ag(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Tg(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Eg(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case hs:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Gi:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case _r:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return (this.createInterpolant = t), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return hs;
      case this.InterpolantFactoryMethodLinear:
        return Gi;
      case this.InterpolantFactoryMethodSmooth:
        return _r;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times,
      i = n.length;
    let r = 0,
      a = i - 1;
    for (; r !== i && n[r] < e; ) ++r;
    for (; a !== -1 && n[a] > t; ) --a;
    if ((++a, r !== 0 || a !== i)) {
      r >= a && ((a = Math.max(a, 1)), (r = a - 1));
      const o = this.getValueSize();
      (this.times = n.slice(r, a)),
        (this.values = this.values.slice(r * o, a * o));
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 &&
      (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
      (e = !1));
    const n = this.times,
      i = this.values,
      r = n.length;
    r === 0 &&
      (console.error("THREE.KeyframeTrack: Track is empty.", this), (e = !1));
    let a = null;
    for (let o = 0; o !== r; o++) {
      const c = n[o];
      if (typeof c == "number" && isNaN(c)) {
        console.error(
          "THREE.KeyframeTrack: Time is not a valid number.",
          this,
          o,
          c
        ),
          (e = !1);
        break;
      }
      if (a !== null && a > c) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, c, a),
          (e = !1);
        break;
      }
      a = c;
    }
    if (i !== void 0 && Sg(i))
      for (let o = 0, c = i.length; o !== c; ++o) {
        const l = i[o];
        if (isNaN(l)) {
          console.error(
            "THREE.KeyframeTrack: Value is not a valid number.",
            this,
            o,
            l
          ),
            (e = !1);
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = this.times.slice(),
      t = this.values.slice(),
      n = this.getValueSize(),
      i = this.getInterpolation() === _r,
      r = e.length - 1;
    let a = 1;
    for (let o = 1; o < r; ++o) {
      let c = !1;
      const l = e[o],
        u = e[o + 1];
      if (l !== u && (o !== 1 || l !== e[0]))
        if (i) c = !0;
        else {
          const h = o * n,
            d = h - n,
            m = h + n;
          for (let g = 0; g !== n; ++g) {
            const x = t[h + g];
            if (x !== t[d + g] || x !== t[m + g]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (o !== a) {
          e[a] = e[o];
          const h = o * n,
            d = a * n;
          for (let m = 0; m !== n; ++m) t[d + m] = t[h + m];
        }
        ++a;
      }
    }
    if (r > 0) {
      e[a] = e[r];
      for (let o = r * n, c = a * n, l = 0; l !== n; ++l) t[c + l] = t[o + l];
      ++a;
    }
    return (
      a !== e.length
        ? ((this.times = e.slice(0, a)), (this.values = t.slice(0, a * n)))
        : ((this.times = e), (this.values = t)),
      this
    );
  }
  clone() {
    const e = this.times.slice(),
      t = this.values.slice(),
      n = this.constructor,
      i = new n(this.name, e, t);
    return (i.createInterpolant = this.createInterpolant), i;
  }
}
hn.prototype.TimeBufferType = Float32Array;
hn.prototype.ValueBufferType = Float32Array;
hn.prototype.DefaultInterpolation = Gi;
class Yi extends hn {}
Yi.prototype.ValueTypeName = "bool";
Yi.prototype.ValueBufferType = Array;
Yi.prototype.DefaultInterpolation = hs;
Yi.prototype.InterpolantFactoryMethodLinear = void 0;
Yi.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ll extends hn {}
Ll.prototype.ValueTypeName = "color";
class Wi extends hn {}
Wi.prototype.ValueTypeName = "number";
class bg extends ms {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = (n - t) / (i - t);
    let l = e * o;
    for (let u = l + o; l !== u; l += 4) cn.slerpFlat(r, 0, a, l - o, a, l, c);
    return r;
  }
}
class oi extends hn {
  InterpolantFactoryMethodLinear(e) {
    return new bg(this.times, this.values, this.getValueSize(), e);
  }
}
oi.prototype.ValueTypeName = "quaternion";
oi.prototype.DefaultInterpolation = Gi;
oi.prototype.InterpolantFactoryMethodSmooth = void 0;
class ji extends hn {}
ji.prototype.ValueTypeName = "string";
ji.prototype.ValueBufferType = Array;
ji.prototype.DefaultInterpolation = hs;
ji.prototype.InterpolantFactoryMethodLinear = void 0;
ji.prototype.InterpolantFactoryMethodSmooth = void 0;
class Xi extends hn {}
Xi.prototype.ValueTypeName = "vector";
class wg {
  constructor(e, t = -1, n, i = wu) {
    (this.name = e),
      (this.tracks = n),
      (this.duration = t),
      (this.blendMode = i),
      (this.uuid = en()),
      this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [],
      n = e.tracks,
      i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a) t.push(Cg(n[a]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return (r.uuid = e.uuid), r;
  }
  static toJSON(e) {
    const t = [],
      n = e.tracks,
      i = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
      };
    for (let r = 0, a = n.length; r !== a; ++r) t.push(hn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length,
      a = [];
    for (let o = 0; o < r; o++) {
      let c = [],
        l = [];
      c.push((o + r - 1) % r, o, (o + 1) % r), l.push(0, 1, 0);
      const u = yg(c);
      (c = Lc(c, 1, u)),
        (l = Lc(l, 1, u)),
        !i && c[0] === 0 && (c.push(r), l.push(l[0])),
        a.push(
          new Wi(".morphTargetInfluences[" + t[o].name + "]", c, l).scale(1 / n)
        );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = (i.geometry && i.geometry.animations) || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {},
      r = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o],
        u = l.name.match(r);
      if (u && u.length > 1) {
        const h = u[1];
        let d = i[h];
        d || (i[h] = d = []), d.push(l);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  static parseAnimation(e, t) {
    if (!e)
      return (
        console.error("THREE.AnimationClip: No animation in JSONLoader data."),
        null
      );
    const n = function (h, d, m, g, x) {
        if (m.length !== 0) {
          const p = [],
            f = [];
          Cl(m, p, f, g), p.length !== 0 && x.push(new h(d, p, f));
        }
      },
      i = [],
      r = e.name || "default",
      a = e.fps || 30,
      o = e.blendMode;
    let c = e.length || -1;
    const l = e.hierarchy || [];
    for (let h = 0; h < l.length; h++) {
      const d = l[h].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const m = {};
          let g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let x = 0; x < d[g].morphTargets.length; x++)
                m[d[g].morphTargets[x]] = -1;
          for (const x in m) {
            const p = [],
              f = [];
            for (let E = 0; E !== d[g].morphTargets.length; ++E) {
              const M = d[g];
              p.push(M.time), f.push(M.morphTarget === x ? 1 : 0);
            }
            i.push(new Wi(".morphTargetInfluence[" + x + "]", p, f));
          }
          c = m.length * a;
        } else {
          const m = ".bones[" + t[h].name + "]";
          n(Xi, m + ".position", d, "pos", i),
            n(oi, m + ".quaternion", d, "rot", i),
            n(Xi, m + ".scale", d, "scl", i);
        }
    }
    return i.length === 0 ? null : new this(r, c, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return (this.duration = t), this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Rg(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Wi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Xi;
    case "color":
      return Ll;
    case "quaternion":
      return oi;
    case "bool":
    case "boolean":
      return Yi;
    case "string":
      return ji;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function Cg(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Rg(s.type);
  if (s.times === void 0) {
    const t = [],
      n = [];
    Cl(s.keys, t, n, "value"), (s.times = t), (s.values = n);
  }
  return e.parse !== void 0
    ? e.parse(s)
    : new e(s.name, s.times, s.values, s.interpolation);
}
const Bn = {
  enabled: !1,
  files: {},
  add: function (s, e) {
    this.enabled !== !1 && (this.files[s] = e);
  },
  get: function (s) {
    if (this.enabled !== !1) return this.files[s];
  },
  remove: function (s) {
    delete this.files[s];
  },
  clear: function () {
    this.files = {};
  },
};
class Lg {
  constructor(e, t, n) {
    const i = this;
    let r = !1,
      a = 0,
      o = 0,
      c;
    const l = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (u) {
        o++, r === !1 && i.onStart !== void 0 && i.onStart(u, a, o), (r = !0);
      }),
      (this.itemEnd = function (u) {
        a++,
          i.onProgress !== void 0 && i.onProgress(u, a, o),
          a === o && ((r = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (u) {
        i.onError !== void 0 && i.onError(u);
      }),
      (this.resolveURL = function (u) {
        return c ? c(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return (c = u), this;
      }),
      (this.addHandler = function (u, h) {
        return l.push(u, h), this;
      }),
      (this.removeHandler = function (u) {
        const h = l.indexOf(u);
        return h !== -1 && l.splice(h, 2), this;
      }),
      (this.getHandler = function (u) {
        for (let h = 0, d = l.length; h < d; h += 2) {
          const m = l[h],
            g = l[h + 1];
          if ((m.global && (m.lastIndex = 0), m.test(u))) return g;
        }
        return null;
      });
  }
}
const Pg = new Lg();
class Ki {
  constructor(e) {
    (this.manager = e !== void 0 ? e : Pg),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
Ki.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const xn = {};
class Ig extends Error {
  constructor(e, t) {
    super(e), (this.response = t);
  }
}
class Pl extends Ki {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = Bn.get(e);
    if (r !== void 0)
      return (
        this.manager.itemStart(e),
        setTimeout(() => {
          t && t(r), this.manager.itemEnd(e);
        }, 0),
        r
      );
    if (xn[e] !== void 0) {
      xn[e].push({ onLoad: t, onProgress: n, onError: i });
      return;
    }
    (xn[e] = []), xn[e].push({ onLoad: t, onProgress: n, onError: i });
    const a = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
      }),
      o = this.mimeType,
      c = this.responseType;
    fetch(a)
      .then((l) => {
        if (l.status === 200 || l.status === 0) {
          if (
            (l.status === 0 &&
              console.warn("THREE.FileLoader: HTTP Status 0 received."),
            typeof ReadableStream > "u" ||
              l.body === void 0 ||
              l.body.getReader === void 0)
          )
            return l;
          const u = xn[e],
            h = l.body.getReader(),
            d = l.headers.get("Content-Length") || l.headers.get("X-File-Size"),
            m = d ? parseInt(d) : 0,
            g = m !== 0;
          let x = 0;
          const p = new ReadableStream({
            start(f) {
              E();
              function E() {
                h.read().then(({ done: M, value: y }) => {
                  if (M) f.close();
                  else {
                    x += y.byteLength;
                    const P = new ProgressEvent("progress", {
                      lengthComputable: g,
                      loaded: x,
                      total: m,
                    });
                    for (let C = 0, b = u.length; C < b; C++) {
                      const F = u[C];
                      F.onProgress && F.onProgress(P);
                    }
                    f.enqueue(y), E();
                  }
                });
              }
            },
          });
          return new Response(p);
        } else
          throw new Ig(
            `fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,
            l
          );
      })
      .then((l) => {
        switch (c) {
          case "arraybuffer":
            return l.arrayBuffer();
          case "blob":
            return l.blob();
          case "document":
            return l.text().then((u) => new DOMParser().parseFromString(u, o));
          case "json":
            return l.json();
          default:
            if (o === void 0) return l.text();
            {
              const h = /charset="?([^;"\s]*)"?/i.exec(o),
                d = h && h[1] ? h[1].toLowerCase() : void 0,
                m = new TextDecoder(d);
              return l.arrayBuffer().then((g) => m.decode(g));
            }
        }
      })
      .then((l) => {
        Bn.add(e, l);
        const u = xn[e];
        delete xn[e];
        for (let h = 0, d = u.length; h < d; h++) {
          const m = u[h];
          m.onLoad && m.onLoad(l);
        }
      })
      .catch((l) => {
        const u = xn[e];
        if (u === void 0) throw (this.manager.itemError(e), l);
        delete xn[e];
        for (let h = 0, d = u.length; h < d; h++) {
          const m = u[h];
          m.onError && m.onError(l);
        }
        this.manager.itemError(e);
      })
      .finally(() => {
        this.manager.itemEnd(e);
      }),
      this.manager.itemStart(e);
  }
  setResponseType(e) {
    return (this.responseType = e), this;
  }
  setMimeType(e) {
    return (this.mimeType = e), this;
  }
}
class Dg extends Ki {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = this,
      a = Bn.get(e);
    if (a !== void 0)
      return (
        r.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), r.manager.itemEnd(e);
        }, 0),
        a
      );
    const o = ds("img");
    function c() {
      u(), Bn.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function l(h) {
      u(), i && i(h), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function u() {
      o.removeEventListener("load", c, !1),
        o.removeEventListener("error", l, !1);
    }
    return (
      o.addEventListener("load", c, !1),
      o.addEventListener("error", l, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (o.crossOrigin = this.crossOrigin),
      r.manager.itemStart(e),
      (o.src = e),
      o
    );
  }
}
class Ng extends Ki {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new Tt(),
      a = new Dg(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (o) {
          (r.image = o), (r.needsUpdate = !0), t !== void 0 && t(r);
        },
        n,
        i
      ),
      r
    );
  }
}
class or extends dt {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new Re(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
const qr = new Ve(),
  Pc = new L(),
  Ic = new L();
class Aa {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new be(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Ve()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new va()),
      (this._frameExtents = new be(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new it(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    Pc.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(Pc),
      Ic.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(Ic),
      t.updateMatrixWorld(),
      qr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(qr),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(qr);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class Ug extends Aa {
  constructor() {
    super(new Ut(50, 1, 0.5, 500)),
      (this.isSpotLightShadow = !0),
      (this.focus = 1);
  }
  updateMatrices(e) {
    const t = this.camera,
      n = ki * 2 * e.angle * this.focus,
      i = this.mapSize.width / this.mapSize.height,
      r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) &&
      ((t.fov = n), (t.aspect = i), (t.far = r), t.updateProjectionMatrix()),
      super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), (this.focus = e.focus), this;
  }
}
class Og extends or {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, a = 2) {
    super(e, t),
      (this.isSpotLight = !0),
      (this.type = "SpotLight"),
      this.position.copy(dt.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new dt()),
      (this.distance = n),
      (this.angle = i),
      (this.penumbra = r),
      (this.decay = a),
      (this.map = null),
      (this.shadow = new Ug());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
const Dc = new Ve(),
  rs = new L(),
  Yr = new L();
class Fg extends Aa {
  constructor() {
    super(new Ut(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new be(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new it(2, 1, 1, 1),
        new it(0, 1, 1, 1),
        new it(3, 1, 1, 1),
        new it(1, 1, 1, 1),
        new it(3, 0, 1, 1),
        new it(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new L(1, 0, 0),
        new L(-1, 0, 0),
        new L(0, 0, 1),
        new L(0, 0, -1),
        new L(0, 1, 0),
        new L(0, -1, 0),
      ]),
      (this._cubeUps = [
        new L(0, 1, 0),
        new L(0, 1, 0),
        new L(0, 1, 0),
        new L(0, 1, 0),
        new L(0, 0, 1),
        new L(0, 0, -1),
      ]);
  }
  updateMatrices(e, t = 0) {
    const n = this.camera,
      i = this.matrix,
      r = e.distance || n.far;
    r !== n.far && ((n.far = r), n.updateProjectionMatrix()),
      rs.setFromMatrixPosition(e.matrixWorld),
      n.position.copy(rs),
      Yr.copy(n.position),
      Yr.add(this._cubeDirections[t]),
      n.up.copy(this._cubeUps[t]),
      n.lookAt(Yr),
      n.updateMatrixWorld(),
      i.makeTranslation(-rs.x, -rs.y, -rs.z),
      Dc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Dc);
  }
}
class Il extends or {
  constructor(e, t, n = 0, i = 2) {
    super(e, t),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = i),
      (this.shadow = new Fg());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class Bg extends Aa {
  constructor() {
    super(new Ma(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class ba extends or {
  constructor(e, t) {
    super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(dt.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new dt()),
      (this.shadow = new Bg());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class zg extends or {
  constructor(e, t) {
    super(e, t), (this.isAmbientLight = !0), (this.type = "AmbientLight");
  }
}
class ls {
  static decodeText(e) {
    if (typeof TextDecoder < "u") return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === ""
      ? ""
      : (/^https?:\/\//i.test(t) &&
          /^\//.test(e) &&
          (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) ||
        /^data:.*,.*$/i.test(e) ||
        /^blob:.*$/i.test(e)
          ? e
          : t + e);
  }
}
class Hg extends Ki {
  constructor(e) {
    super(e),
      (this.isImageBitmapLoader = !0),
      typeof createImageBitmap > "u" &&
        console.warn(
          "THREE.ImageBitmapLoader: createImageBitmap() not supported."
        ),
      typeof fetch > "u" &&
        console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
      (this.options = { premultiplyAlpha: "none" });
  }
  setOptions(e) {
    return (this.options = e), this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = this,
      a = Bn.get(e);
    if (a !== void 0) {
      if ((r.manager.itemStart(e), a.then)) {
        a.then((l) => {
          t && t(l), r.manager.itemEnd(e);
        }).catch((l) => {
          i && i(l);
        });
        return;
      }
      return (
        setTimeout(function () {
          t && t(a), r.manager.itemEnd(e);
        }, 0),
        a
      );
    }
    const o = {};
    (o.credentials =
      this.crossOrigin === "anonymous" ? "same-origin" : "include"),
      (o.headers = this.requestHeader);
    const c = fetch(e, o)
      .then(function (l) {
        return l.blob();
      })
      .then(function (l) {
        return createImageBitmap(
          l,
          Object.assign(r.options, { colorSpaceConversion: "none" })
        );
      })
      .then(function (l) {
        return Bn.add(e, l), t && t(l), r.manager.itemEnd(e), l;
      })
      .catch(function (l) {
        i && i(l), Bn.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
      });
    Bn.add(e, c), r.manager.itemStart(e);
  }
}
const wa = "\\[\\]\\.:\\/",
  Gg = new RegExp("[" + wa + "]", "g"),
  Ra = "[^" + wa + "]",
  kg = "[^" + wa.replace("\\.", "") + "]",
  Vg = /((?:WC+[\/:])*)/.source.replace("WC", Ra),
  Wg = /(WCOD+)?/.source.replace("WCOD", kg),
  Xg = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ra),
  qg = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ra),
  Yg = new RegExp("^" + Vg + Wg + Xg + qg + "$"),
  jg = ["material", "materials", "bones", "map"];
class Kg {
  constructor(e, t, n) {
    const i = n || et.parseTrackName(t);
    (this._targetGroup = e), (this._bindings = e.subscribe_(t, i));
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_,
      i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class et {
  constructor(e, t, n) {
    (this.path = t),
      (this.parsedPath = n || et.parseTrackName(t)),
      (this.node = et.findNode(e, this.parsedPath.nodeName)),
      (this.rootNode = e),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup
      ? new et.Composite(e, t, n)
      : new et(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Gg, "");
  }
  static parseTrackName(e) {
    const t = Yg.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6],
      },
      i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      jg.indexOf(r) !== -1 &&
        ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = r));
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error(
        "PropertyBinding: can not parse propertyName from trackName: " + e
      );
    return n;
  }
  static findNode(e, t) {
    if (
      t === void 0 ||
      t === "" ||
      t === "." ||
      t === -1 ||
      t === e.name ||
      t === e.uuid
    )
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n;
    }
    if (e.children) {
      const n = function (r) {
          for (let a = 0; a < r.length; a++) {
            const o = r[a];
            if (o.name === t || o.uuid === t) return o;
            const c = n(o.children);
            if (c) return c;
          }
          return null;
        },
        i = n(e.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath,
      n = t.objectName,
      i = t.propertyName;
    let r = t.propertyIndex;
    if (
      (e || ((e = et.findNode(this.rootNode, t.nodeName)), (this.node = e)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !e)
    ) {
      console.warn(
        "THREE.PropertyBinding: No target node found for track: " +
          this.path +
          "."
      );
      return;
    }
    if (n) {
      let l = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.materials) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this
            );
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error(
              "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this
            );
            return;
          }
          e = e.skeleton.bones;
          for (let u = 0; u < e.length; u++)
            if (e[u].name === l) {
              l = u;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.map) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",
              this
            );
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error(
              "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
              this
            );
            return;
          }
          e = e[n];
      }
      if (l !== void 0) {
        if (e[l] === void 0) {
          console.error(
            "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            e
          );
          return;
        }
        e = e[l];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const l = t.nodeName;
      console.error(
        "THREE.PropertyBinding: Trying to update property for track: " +
          l +
          "." +
          i +
          " but it wasn't found.",
        e
      );
      return;
    }
    let o = this.Versioning.None;
    (this.targetObject = e),
      e.needsUpdate !== void 0
        ? (o = this.Versioning.NeedsUpdate)
        : e.matrixWorldNeedsUpdate !== void 0 &&
          (o = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this
          );
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
            this
          );
          return;
        }
        e.morphTargetDictionary[r] !== void 0 &&
          (r = e.morphTargetDictionary[r]);
      }
      (c = this.BindingType.ArrayElement),
        (this.resolvedProperty = a),
        (this.propertyIndex = r);
    } else
      a.fromArray !== void 0 && a.toArray !== void 0
        ? ((c = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
        : Array.isArray(a)
        ? ((c = this.BindingType.EntireArray), (this.resolvedProperty = a))
        : (this.propertyName = i);
    (this.getValue = this.GetterByBindingType[c]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[c][o]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
et.Composite = Kg;
et.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3,
};
et.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2,
};
et.prototype.GetterByBindingType = [
  et.prototype._getValue_direct,
  et.prototype._getValue_array,
  et.prototype._getValue_arrayElement,
  et.prototype._getValue_toArray,
];
et.prototype.SetterByBindingTypeAndVersioning = [
  [
    et.prototype._setValue_direct,
    et.prototype._setValue_direct_setNeedsUpdate,
    et.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
  ],
  [
    et.prototype._setValue_array,
    et.prototype._setValue_array_setNeedsUpdate,
    et.prototype._setValue_array_setMatrixWorldNeedsUpdate,
  ],
  [
    et.prototype._setValue_arrayElement,
    et.prototype._setValue_arrayElement_setNeedsUpdate,
    et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
  ],
  [
    et.prototype._setValue_fromArray,
    et.prototype._setValue_fromArray_setNeedsUpdate,
    et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
  ],
];
class Nc {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(At(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: fa } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = fa));
function Uc(s, e) {
  if (e === Ru)
    return (
      console.warn(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
      ),
      s
    );
  if (e === ia || e === tl) {
    let t = s.getIndex();
    if (t === null) {
      const a = [],
        o = s.getAttribute("position");
      if (o !== void 0) {
        for (let c = 0; c < o.count; c++) a.push(c);
        s.setIndex(a), (t = s.getIndex());
      } else
        return (
          console.error(
            "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
          ),
          s
        );
    }
    const n = t.count - 2,
      i = [];
    if (e === ia)
      for (let a = 1; a <= n; a++)
        i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0
          ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2)))
          : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n &&
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
      );
    const r = s.clone();
    return r.setIndex(i), r.clearGroups(), r;
  } else
    return (
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
        e
      ),
      s
    );
}
class Zg extends Ki {
  constructor(e) {
    super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (t) {
        return new t_(t);
      }),
      this.register(function (t) {
        return new u_(t);
      }),
      this.register(function (t) {
        return new h_(t);
      }),
      this.register(function (t) {
        return new d_(t);
      }),
      this.register(function (t) {
        return new i_(t);
      }),
      this.register(function (t) {
        return new s_(t);
      }),
      this.register(function (t) {
        return new r_(t);
      }),
      this.register(function (t) {
        return new a_(t);
      }),
      this.register(function (t) {
        return new e_(t);
      }),
      this.register(function (t) {
        return new o_(t);
      }),
      this.register(function (t) {
        return new n_(t);
      }),
      this.register(function (t) {
        return new l_(t);
      }),
      this.register(function (t) {
        return new c_(t);
      }),
      this.register(function (t) {
        return new Jg(t);
      }),
      this.register(function (t) {
        return new f_(t);
      }),
      this.register(function (t) {
        return new p_(t);
      });
  }
  load(e, t, n, i) {
    const r = this;
    let a;
    if (this.resourcePath !== "") a = this.resourcePath;
    else if (this.path !== "") {
      const l = ls.extractUrlBase(e);
      a = ls.resolveURL(l, this.path);
    } else a = ls.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function (l) {
        i ? i(l) : console.error(l),
          r.manager.itemError(e),
          r.manager.itemEnd(e);
      },
      c = new Pl(this.manager);
    c.setPath(this.path),
      c.setResponseType("arraybuffer"),
      c.setRequestHeader(this.requestHeader),
      c.setWithCredentials(this.withCredentials),
      c.load(
        e,
        function (l) {
          try {
            r.parse(
              l,
              a,
              function (u) {
                t(u), r.manager.itemEnd(e);
              },
              o
            );
          } catch (u) {
            o(u);
          }
        },
        n,
        o
      );
  }
  setDRACOLoader(e) {
    return (this.dracoLoader = e), this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return (this.ktx2Loader = e), this;
  }
  setMeshoptDecoder(e) {
    return (this.meshoptDecoder = e), this;
  }
  register(e) {
    return (
      this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
      this
    );
  }
  unregister(e) {
    return (
      this.pluginCallbacks.indexOf(e) !== -1 &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
      this
    );
  }
  parse(e, t, n, i) {
    let r;
    const a = {},
      o = {},
      c = new TextDecoder();
    if (typeof e == "string") r = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(e, 0, 4)) === Dl) {
        try {
          a[je.KHR_BINARY_GLTF] = new m_(e);
        } catch (h) {
          i && i(h);
          return;
        }
        r = JSON.parse(a[je.KHR_BINARY_GLTF].content);
      } else r = JSON.parse(c.decode(e));
    else r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i &&
        i(
          new Error(
            "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
          )
        );
      return;
    }
    const l = new R_(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let u = 0; u < this.pluginCallbacks.length; u++) {
      const h = this.pluginCallbacks[u](l);
      h.name ||
        console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),
        (o[h.name] = h),
        (a[h.name] = !0);
    }
    if (r.extensionsUsed)
      for (let u = 0; u < r.extensionsUsed.length; ++u) {
        const h = r.extensionsUsed[u],
          d = r.extensionsRequired || [];
        switch (h) {
          case je.KHR_MATERIALS_UNLIT:
            a[h] = new Qg();
            break;
          case je.KHR_DRACO_MESH_COMPRESSION:
            a[h] = new g_(r, this.dracoLoader);
            break;
          case je.KHR_TEXTURE_TRANSFORM:
            a[h] = new __();
            break;
          case je.KHR_MESH_QUANTIZATION:
            a[h] = new x_();
            break;
          default:
            d.indexOf(h) >= 0 &&
              o[h] === void 0 &&
              console.warn('THREE.GLTFLoader: Unknown extension "' + h + '".');
        }
      }
    l.setExtensions(a), l.setPlugins(o), l.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function (i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function $g() {
  let s = {};
  return {
    get: function (e) {
      return s[e];
    },
    add: function (e, t) {
      s[e] = t;
    },
    remove: function (e) {
      delete s[e];
    },
    removeAll: function () {
      s = {};
    },
  };
}
const je = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
};
class Jg {
  constructor(e) {
    (this.parser = e),
      (this.name = je.KHR_LIGHTS_PUNCTUAL),
      (this.cache = { refs: {}, uses: {} });
  }
  _markDefs() {
    const e = this.parser,
      t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      r.extensions &&
        r.extensions[this.name] &&
        r.extensions[this.name].light !== void 0 &&
        e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser,
      n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const r = t.json,
      c = (((r.extensions && r.extensions[this.name]) || {}).lights || [])[e];
    let l;
    const u = new Re(16777215);
    c.color !== void 0 && u.setRGB(c.color[0], c.color[1], c.color[2], bt);
    const h = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        (l = new ba(u)), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        (l = new Il(u)), (l.distance = h);
        break;
      case "spot":
        (l = new Og(u)),
          (l.distance = h),
          (c.spot = c.spot || {}),
          (c.spot.innerConeAngle =
            c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0),
          (c.spot.outerConeAngle =
            c.spot.outerConeAngle !== void 0
              ? c.spot.outerConeAngle
              : Math.PI / 4),
          (l.angle = c.spot.outerConeAngle),
          (l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle),
          l.target.position.set(0, 0, -1),
          l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return (
      l.position.set(0, 0, 0),
      (l.decay = 2),
      Nn(l, c),
      c.intensity !== void 0 && (l.intensity = c.intensity),
      (l.name = t.createUniqueName(c.name || "light_" + e)),
      (i = Promise.resolve(l)),
      t.cache.add(n, i),
      i
    );
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this,
      n = this.parser,
      r = n.json.nodes[e],
      o = ((r.extensions && r.extensions[this.name]) || {}).light;
    return o === void 0
      ? null
      : this._loadLight(o).then(function (c) {
          return n._getNodeRef(t.cache, o, c);
        });
  }
}
class Qg {
  constructor() {
    this.name = je.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Fn;
  }
  extendParams(e, t, n) {
    const i = [];
    (e.color = new Re(1, 1, 1)), (e.opacity = 1);
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const a = r.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], bt), (e.opacity = a[3]);
      }
      r.baseColorTexture !== void 0 &&
        i.push(n.assignTexture(e, "map", r.baseColorTexture, Nt));
    }
    return Promise.all(i);
  }
}
class e_ {
  constructor(e) {
    (this.parser = e), (this.name = je.KHR_MATERIALS_EMISSIVE_STRENGTH);
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class t_ {
  constructor(e) {
    (this.parser = e), (this.name = je.KHR_MATERIALS_CLEARCOAT);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : An;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    if (
      (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor),
      a.clearcoatTexture !== void 0 &&
        r.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)),
      a.clearcoatRoughnessFactor !== void 0 &&
        (t.clearcoatRoughness = a.clearcoatRoughnessFactor),
      a.clearcoatRoughnessTexture !== void 0 &&
        r.push(
          n.assignTexture(
            t,
            "clearcoatRoughnessMap",
            a.clearcoatRoughnessTexture
          )
        ),
      a.clearcoatNormalTexture !== void 0 &&
        (r.push(
          n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)
        ),
        a.clearcoatNormalTexture.scale !== void 0))
    ) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new be(o, o);
    }
    return Promise.all(r);
  }
}
class n_ {
  constructor(e) {
    (this.parser = e), (this.name = je.KHR_MATERIALS_IRIDESCENCE);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : An;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor),
      a.iridescenceTexture !== void 0 &&
        r.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)),
      a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor),
      t.iridescenceThicknessRange === void 0 &&
        (t.iridescenceThicknessRange = [100, 400]),
      a.iridescenceThicknessMinimum !== void 0 &&
        (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum),
      a.iridescenceThicknessMaximum !== void 0 &&
        (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum),
      a.iridescenceThicknessTexture !== void 0 &&
        r.push(
          n.assignTexture(
            t,
            "iridescenceThicknessMap",
            a.iridescenceThicknessTexture
          )
        ),
      Promise.all(r)
    );
  }
}
class i_ {
  constructor(e) {
    (this.parser = e), (this.name = je.KHR_MATERIALS_SHEEN);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : An;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [];
    (t.sheenColor = new Re(0, 0, 0)), (t.sheenRoughness = 0), (t.sheen = 1);
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], bt);
    }
    return (
      a.sheenRoughnessFactor !== void 0 &&
        (t.sheenRoughness = a.sheenRoughnessFactor),
      a.sheenColorTexture !== void 0 &&
        r.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, Nt)),
      a.sheenRoughnessTexture !== void 0 &&
        r.push(
          n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)
        ),
      Promise.all(r)
    );
  }
}
class s_ {
  constructor(e) {
    (this.parser = e), (this.name = je.KHR_MATERIALS_TRANSMISSION);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : An;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      a.transmissionFactor !== void 0 &&
        (t.transmission = a.transmissionFactor),
      a.transmissionTexture !== void 0 &&
        r.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)),
      Promise.all(r)
    );
  }
}
class r_ {
  constructor(e) {
    (this.parser = e), (this.name = je.KHR_MATERIALS_VOLUME);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : An;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    (t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0),
      a.thicknessTexture !== void 0 &&
        r.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)),
      (t.attenuationDistance = a.attenuationDistance || 1 / 0);
    const o = a.attenuationColor || [1, 1, 1];
    return (
      (t.attenuationColor = new Re().setRGB(o[0], o[1], o[2], bt)),
      Promise.all(r)
    );
  }
}
class a_ {
  constructor(e) {
    (this.parser = e), (this.name = je.KHR_MATERIALS_IOR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : An;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return (t.ior = r.ior !== void 0 ? r.ior : 1.5), Promise.resolve();
  }
}
class o_ {
  constructor(e) {
    (this.parser = e), (this.name = je.KHR_MATERIALS_SPECULAR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : An;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    (t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1),
      a.specularTexture !== void 0 &&
        r.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return (
      (t.specularColor = new Re().setRGB(o[0], o[1], o[2], bt)),
      a.specularColorTexture !== void 0 &&
        r.push(
          n.assignTexture(t, "specularColorMap", a.specularColorTexture, Nt)
        ),
      Promise.all(r)
    );
  }
}
class c_ {
  constructor(e) {
    (this.parser = e), (this.name = je.EXT_MATERIALS_BUMP);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : An;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      (t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1),
      a.bumpTexture !== void 0 &&
        r.push(n.assignTexture(t, "bumpMap", a.bumpTexture)),
      Promise.all(r)
    );
  }
}
class l_ {
  constructor(e) {
    (this.parser = e), (this.name = je.KHR_MATERIALS_ANISOTROPY);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : An;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength),
      a.anisotropyRotation !== void 0 &&
        (t.anisotropyRotation = a.anisotropyRotation),
      a.anisotropyTexture !== void 0 &&
        r.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)),
      Promise.all(r)
    );
  }
}
class u_ {
  constructor(e) {
    (this.parser = e), (this.name = je.KHR_TEXTURE_BASISU);
  }
  loadTexture(e) {
    const t = this.parser,
      n = t.json,
      i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const r = i.extensions[this.name],
      a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error(
          "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
        );
      return null;
    }
    return t.loadTextureImage(e, r.source, a);
  }
}
class h_ {
  constructor(e) {
    (this.parser = e),
      (this.name = je.EXT_TEXTURE_WEBP),
      (this.isSupported = null);
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      i = n.json,
      r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const a = r.extensions[t],
      o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function (l) {
      if (l) return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error(
          "THREE.GLTFLoader: WebP required by asset but unsupported."
        );
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (e) {
          const t = new Image();
          (t.src =
            "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
            (t.onload = t.onerror =
              function () {
                e(t.height === 1);
              });
        })),
      this.isSupported
    );
  }
}
class d_ {
  constructor(e) {
    (this.parser = e),
      (this.name = je.EXT_TEXTURE_AVIF),
      (this.isSupported = null);
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      i = n.json,
      r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const a = r.extensions[t],
      o = i.images[a.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function (l) {
      if (l) return n.loadTextureImage(e, a.source, c);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error(
          "THREE.GLTFLoader: AVIF required by asset but unsupported."
        );
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (e) {
          const t = new Image();
          (t.src =
            "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI="),
            (t.onload = t.onerror =
              function () {
                e(t.height === 1);
              });
        })),
      this.isSupported
    );
  }
}
class f_ {
  constructor(e) {
    (this.name = je.EXT_MESHOPT_COMPRESSION), (this.parser = e);
  }
  loadBufferView(e) {
    const t = this.parser.json,
      n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name],
        r = this.parser.getDependency("buffer", i.buffer),
        a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (
          t.extensionsRequired &&
          t.extensionsRequired.indexOf(this.name) >= 0
        )
          throw new Error(
            "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
          );
        return null;
      }
      return r.then(function (o) {
        const c = i.byteOffset || 0,
          l = i.byteLength || 0,
          u = i.count,
          h = i.byteStride,
          d = new Uint8Array(o, c, l);
        return a.decodeGltfBufferAsync
          ? a
              .decodeGltfBufferAsync(u, h, d, i.mode, i.filter)
              .then(function (m) {
                return m.buffer;
              })
          : a.ready.then(function () {
              const m = new ArrayBuffer(u * h);
              return (
                a.decodeGltfBuffer(
                  new Uint8Array(m),
                  u,
                  h,
                  d,
                  i.mode,
                  i.filter
                ),
                m
              );
            });
      });
    } else return null;
  }
}
class p_ {
  constructor(e) {
    (this.name = je.EXT_MESH_GPU_INSTANCING), (this.parser = e);
  }
  createNodeMesh(e) {
    const t = this.parser.json,
      n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const l of i.primitives)
      if (
        l.mode !== Xt.TRIANGLES &&
        l.mode !== Xt.TRIANGLE_STRIP &&
        l.mode !== Xt.TRIANGLE_FAN &&
        l.mode !== void 0
      )
        return null;
    const a = n.extensions[this.name].attributes,
      o = [],
      c = {};
    for (const l in a)
      o.push(
        this.parser
          .getDependency("accessor", a[l])
          .then((u) => ((c[l] = u), c[l]))
      );
    return o.length < 1
      ? null
      : (o.push(this.parser.createNodeMesh(e)),
        Promise.all(o).then((l) => {
          const u = l.pop(),
            h = u.isGroup ? u.children : [u],
            d = l[0].count,
            m = [];
          for (const g of h) {
            const x = new Ve(),
              p = new L(),
              f = new cn(),
              E = new L(1, 1, 1),
              M = new _g(g.geometry, g.material, d);
            for (let y = 0; y < d; y++)
              c.TRANSLATION && p.fromBufferAttribute(c.TRANSLATION, y),
                c.ROTATION && f.fromBufferAttribute(c.ROTATION, y),
                c.SCALE && E.fromBufferAttribute(c.SCALE, y),
                M.setMatrixAt(y, x.compose(p, f, E));
            for (const y in c)
              if (y === "_COLOR_0") {
                const P = c[y];
                M.instanceColor = new la(P.array, P.itemSize, P.normalized);
              } else
                y !== "TRANSLATION" &&
                  y !== "ROTATION" &&
                  y !== "SCALE" &&
                  g.geometry.setAttribute(y, c[y]);
            dt.prototype.copy.call(M, g),
              this.parser.assignFinalMaterial(M),
              m.push(M);
          }
          return u.isGroup ? (u.clear(), u.add(...m), u) : m[0];
        }));
  }
}
const Dl = "glTF",
  as = 12,
  Oc = { JSON: 1313821514, BIN: 5130562 };
class m_ {
  constructor(e) {
    (this.name = je.KHR_BINARY_GLTF), (this.content = null), (this.body = null);
    const t = new DataView(e, 0, as),
      n = new TextDecoder();
    if (
      ((this.header = {
        magic: n.decode(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, !0),
        length: t.getUint32(8, !0),
      }),
      this.header.magic !== Dl)
    )
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - as,
      r = new DataView(e, as);
    let a = 0;
    for (; a < i; ) {
      const o = r.getUint32(a, !0);
      a += 4;
      const c = r.getUint32(a, !0);
      if (((a += 4), c === Oc.JSON)) {
        const l = new Uint8Array(e, as + a, o);
        this.content = n.decode(l);
      } else if (c === Oc.BIN) {
        const l = as + a;
        this.body = e.slice(l, l + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class g_ {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    (this.name = je.KHR_DRACO_MESH_COMPRESSION),
      (this.json = e),
      (this.dracoLoader = t),
      this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json,
      i = this.dracoLoader,
      r = e.extensions[this.name].bufferView,
      a = e.extensions[this.name].attributes,
      o = {},
      c = {},
      l = {};
    for (const u in a) {
      const h = ha[u] || u.toLowerCase();
      o[h] = a[u];
    }
    for (const u in e.attributes) {
      const h = ha[u] || u.toLowerCase();
      if (a[u] !== void 0) {
        const d = n.accessors[e.attributes[u]],
          m = Oi[d.componentType];
        (l[h] = m.name), (c[h] = d.normalized === !0);
      }
    }
    return t.getDependency("bufferView", r).then(function (u) {
      return new Promise(function (h, d) {
        i.decodeDracoFile(
          u,
          function (m) {
            for (const g in m.attributes) {
              const x = m.attributes[g],
                p = c[g];
              p !== void 0 && (x.normalized = p);
            }
            h(m);
          },
          o,
          l,
          bt,
          d
        );
      });
    });
  }
}
class __ {
  constructor() {
    this.name = je.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (
      ((t.texCoord === void 0 || t.texCoord === e.channel) &&
        t.offset === void 0 &&
        t.rotation === void 0 &&
        t.scale === void 0) ||
        ((e = e.clone()),
        t.texCoord !== void 0 && (e.channel = t.texCoord),
        t.offset !== void 0 && e.offset.fromArray(t.offset),
        t.rotation !== void 0 && (e.rotation = t.rotation),
        t.scale !== void 0 && e.repeat.fromArray(t.scale),
        (e.needsUpdate = !0)),
      e
    );
  }
}
class x_ {
  constructor() {
    this.name = je.KHR_MESH_QUANTIZATION;
  }
}
class Nl extends ms {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      r = e * i * 3 + i;
    for (let a = 0; a !== i; a++) t[a] = n[r + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      c = o * 2,
      l = o * 3,
      u = i - t,
      h = (n - t) / u,
      d = h * h,
      m = d * h,
      g = e * l,
      x = g - l,
      p = -2 * m + 3 * d,
      f = m - d,
      E = 1 - p,
      M = f - d + h;
    for (let y = 0; y !== o; y++) {
      const P = a[x + y + o],
        C = a[x + y + c] * u,
        b = a[g + y + o],
        F = a[g + y] * u;
      r[y] = E * P + M * C + p * b + f * F;
    }
    return r;
  }
}
const v_ = new cn();
class M_ extends Nl {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return v_.fromArray(r).normalize().toArray(r), r;
  }
}
const Xt = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123,
  },
  Oi = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  Fc = { 9728: Et, 9729: Pt, 9984: na, 9985: Ys, 9986: Pi, 9987: Mn },
  Bc = { 33071: qt, 33648: Zs, 10497: zi },
  jr = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  ha = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex",
  },
  In = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences",
  },
  S_ = { CUBICSPLINE: void 0, LINEAR: Gi, STEP: hs },
  Kr = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function y_(s) {
  return (
    s.DefaultMaterial === void 0 &&
      (s.DefaultMaterial = new fs({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: En,
      })),
    s.DefaultMaterial
  );
}
function Qn(s, e, t) {
  for (const n in t.extensions)
    s[n] === void 0 &&
      ((e.userData.gltfExtensions = e.userData.gltfExtensions || {}),
      (e.userData.gltfExtensions[n] = t.extensions[n]));
}
function Nn(s, e) {
  e.extras !== void 0 &&
    (typeof e.extras == "object"
      ? Object.assign(s.userData, e.extras)
      : console.warn(
          "THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras
        ));
}
function E_(s, e, t) {
  let n = !1,
    i = !1,
    r = !1;
  for (let l = 0, u = e.length; l < u; l++) {
    const h = e[l];
    if (
      (h.POSITION !== void 0 && (n = !0),
      h.NORMAL !== void 0 && (i = !0),
      h.COLOR_0 !== void 0 && (r = !0),
      n && i && r)
    )
      break;
  }
  if (!n && !i && !r) return Promise.resolve(s);
  const a = [],
    o = [],
    c = [];
  for (let l = 0, u = e.length; l < u; l++) {
    const h = e[l];
    if (n) {
      const d =
        h.POSITION !== void 0
          ? t.getDependency("accessor", h.POSITION)
          : s.attributes.position;
      a.push(d);
    }
    if (i) {
      const d =
        h.NORMAL !== void 0
          ? t.getDependency("accessor", h.NORMAL)
          : s.attributes.normal;
      o.push(d);
    }
    if (r) {
      const d =
        h.COLOR_0 !== void 0
          ? t.getDependency("accessor", h.COLOR_0)
          : s.attributes.color;
      c.push(d);
    }
  }
  return Promise.all([Promise.all(a), Promise.all(o), Promise.all(c)]).then(
    function (l) {
      const u = l[0],
        h = l[1],
        d = l[2];
      return (
        n && (s.morphAttributes.position = u),
        i && (s.morphAttributes.normal = h),
        r && (s.morphAttributes.color = d),
        (s.morphTargetsRelative = !0),
        s
      );
    }
  );
}
function T_(s, e) {
  if ((s.updateMorphTargets(), e.weights !== void 0))
    for (let t = 0, n = e.weights.length; t < n; t++)
      s.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (s.morphTargetInfluences.length === t.length) {
      s.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        s.morphTargetDictionary[t[n]] = n;
    } else
      console.warn(
        "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
      );
  }
}
function A_(s) {
  let e;
  const t = s.extensions && s.extensions[je.KHR_DRACO_MESH_COMPRESSION];
  if (
    (t
      ? (e = "draco:" + t.bufferView + ":" + t.indices + ":" + Zr(t.attributes))
      : (e = s.indices + ":" + Zr(s.attributes) + ":" + s.mode),
    s.targets !== void 0)
  )
    for (let n = 0, i = s.targets.length; n < i; n++)
      e += ":" + Zr(s.targets[n]);
  return e;
}
function Zr(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function da(s) {
  switch (s) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error(
        "THREE.GLTFLoader: Unsupported normalized accessor component type."
      );
  }
}
function b_(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0
    ? "image/jpeg"
    : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0
    ? "image/webp"
    : "image/png";
}
const w_ = new Ve();
class R_ {
  constructor(e = {}, t = {}) {
    (this.json = e),
      (this.extensions = {}),
      (this.plugins = {}),
      (this.options = t),
      (this.cache = new $g()),
      (this.associations = new Map()),
      (this.primitiveCache = {}),
      (this.nodeCache = {}),
      (this.meshCache = { refs: {}, uses: {} }),
      (this.cameraCache = { refs: {}, uses: {} }),
      (this.lightCache = { refs: {}, uses: {} }),
      (this.sourceCache = {}),
      (this.textureCache = {}),
      (this.nodeNamesUsed = {});
    let n = !1,
      i = !1,
      r = -1;
    typeof navigator < "u" &&
      ((n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0),
      (i = navigator.userAgent.indexOf("Firefox") > -1),
      (r = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1)),
      typeof createImageBitmap > "u" || n || (i && r < 98)
        ? (this.textureLoader = new Ng(this.options.manager))
        : (this.textureLoader = new Hg(this.options.manager)),
      this.textureLoader.setCrossOrigin(this.options.crossOrigin),
      this.textureLoader.setRequestHeader(this.options.requestHeader),
      (this.fileLoader = new Pl(this.options.manager)),
      this.fileLoader.setResponseType("arraybuffer"),
      this.options.crossOrigin === "use-credentials" &&
        this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this,
      i = this.json,
      r = this.extensions;
    this.cache.removeAll(),
      (this.nodeCache = {}),
      this._invokeAll(function (a) {
        return a._markDefs && a._markDefs();
      }),
      Promise.all(
        this._invokeAll(function (a) {
          return a.beforeRoot && a.beforeRoot();
        })
      )
        .then(function () {
          return Promise.all([
            n.getDependencies("scene"),
            n.getDependencies("animation"),
            n.getDependencies("camera"),
          ]);
        })
        .then(function (a) {
          const o = {
            scene: a[0][i.scene || 0],
            scenes: a[0],
            animations: a[1],
            cameras: a[2],
            asset: i.asset,
            parser: n,
            userData: {},
          };
          return (
            Qn(r, o, i),
            Nn(o, i),
            Promise.all(
              n._invokeAll(function (c) {
                return c.afterRoot && c.afterRoot(o);
              })
            ).then(function () {
              e(o);
            })
          );
        })
        .catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [],
      t = this.json.skins || [],
      n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i].joints;
      for (let o = 0, c = a.length; o < c; o++) e[a[o]].isBone = !0;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const a = e[i];
      a.mesh !== void 0 &&
        (this._addNodeRef(this.meshCache, a.mesh),
        a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)),
        a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 &&
      (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(),
      r = (a, o) => {
        const c = this.associations.get(a);
        c != null && this.associations.set(o, c);
        for (const [l, u] of a.children.entries()) r(u, o.children[l]);
      };
    return r(n, i), (i.name += "_instance_" + e.uses[t]++), i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = e(t[i]);
      r && n.push(r);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function (r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function (r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function (r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function (r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function (r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function (r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (
            ((i = this._invokeOne(function (r) {
              return r != this && r.getDependency && r.getDependency(e, t);
            })),
            !i)
          )
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this,
        i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      (t = Promise.all(
        i.map(function (r, a) {
          return n.getDependency(e, a);
        })
      )),
        this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e],
      n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error(
        "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
      );
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function (r, a) {
      n.load(ls.resolveURL(t.uri, i.path), r, void 0, function () {
        a(
          new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".')
        );
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function (n) {
      const i = t.byteLength || 0,
        r = t.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  loadAccessor(e) {
    const t = this,
      n = this.json,
      i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = jr[i.type],
        o = Oi[i.componentType],
        c = i.normalized === !0,
        l = new o(i.count * a);
      return Promise.resolve(new Ft(l, a, c));
    }
    const r = [];
    return (
      i.bufferView !== void 0
        ? r.push(this.getDependency("bufferView", i.bufferView))
        : r.push(null),
      i.sparse !== void 0 &&
        (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)),
        r.push(this.getDependency("bufferView", i.sparse.values.bufferView))),
      Promise.all(r).then(function (a) {
        const o = a[0],
          c = jr[i.type],
          l = Oi[i.componentType],
          u = l.BYTES_PER_ELEMENT,
          h = u * c,
          d = i.byteOffset || 0,
          m =
            i.bufferView !== void 0
              ? n.bufferViews[i.bufferView].byteStride
              : void 0,
          g = i.normalized === !0;
        let x, p;
        if (m && m !== h) {
          const f = Math.floor(d / m),
            E =
              "InterleavedBuffer:" +
              i.bufferView +
              ":" +
              i.componentType +
              ":" +
              f +
              ":" +
              i.count;
          let M = t.cache.get(E);
          M ||
            ((x = new l(o, f * m, (i.count * m) / u)),
            (M = new dg(x, m / u)),
            t.cache.add(E, M)),
            (p = new ya(M, c, (d % m) / u, g));
        } else o === null ? (x = new l(i.count * c)) : (x = new l(o, d, i.count * c)), (p = new Ft(x, c, g));
        if (i.sparse !== void 0) {
          const f = jr.SCALAR,
            E = Oi[i.sparse.indices.componentType],
            M = i.sparse.indices.byteOffset || 0,
            y = i.sparse.values.byteOffset || 0,
            P = new E(a[1], M, i.sparse.count * f),
            C = new l(a[2], y, i.sparse.count * c);
          o !== null && (p = new Ft(p.array.slice(), p.itemSize, p.normalized));
          for (let b = 0, F = P.length; b < F; b++) {
            const $ = P[b];
            if (
              (p.setX($, C[b * c]),
              c >= 2 && p.setY($, C[b * c + 1]),
              c >= 3 && p.setZ($, C[b * c + 2]),
              c >= 4 && p.setW($, C[b * c + 3]),
              c >= 5)
            )
              throw new Error(
                "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
              );
          }
        }
        return p;
      })
    );
  }
  loadTexture(e) {
    const t = this.json,
      n = this.options,
      r = t.textures[e].source,
      a = t.images[r];
    let o = this.textureLoader;
    if (a.uri) {
      const c = n.manager.getHandler(a.uri);
      c !== null && (o = c);
    }
    return this.loadTextureImage(e, r, o);
  }
  loadTextureImage(e, t, n) {
    const i = this,
      r = this.json,
      a = r.textures[e],
      o = r.images[t],
      c = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[c]) return this.textureCache[c];
    const l = this.loadImageSource(t, n)
      .then(function (u) {
        (u.flipY = !1),
          (u.name = a.name || o.name || ""),
          u.name === "" &&
            typeof o.uri == "string" &&
            o.uri.startsWith("data:image/") === !1 &&
            (u.name = o.uri);
        const d = (r.samplers || {})[a.sampler] || {};
        return (
          (u.magFilter = Fc[d.magFilter] || Pt),
          (u.minFilter = Fc[d.minFilter] || Mn),
          (u.wrapS = Bc[d.wrapS] || zi),
          (u.wrapT = Bc[d.wrapT] || zi),
          i.associations.set(u, { textures: e }),
          u
        );
      })
      .catch(function () {
        return null;
      });
    return (this.textureCache[c] = l), l;
  }
  loadImageSource(e, t) {
    const n = this,
      i = this.json,
      r = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((h) => h.clone());
    const a = i.images[e],
      o = self.URL || self.webkitURL;
    let c = a.uri || "",
      l = !1;
    if (a.bufferView !== void 0)
      c = n.getDependency("bufferView", a.bufferView).then(function (h) {
        l = !0;
        const d = new Blob([h], { type: a.mimeType });
        return (c = o.createObjectURL(d)), c;
      });
    else if (a.uri === void 0)
      throw new Error(
        "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
      );
    const u = Promise.resolve(c)
      .then(function (h) {
        return new Promise(function (d, m) {
          let g = d;
          t.isImageBitmapLoader === !0 &&
            (g = function (x) {
              const p = new Tt(x);
              (p.needsUpdate = !0), d(p);
            }),
            t.load(ls.resolveURL(h, r.path), g, void 0, m);
        });
      })
      .then(function (h) {
        return (
          l === !0 && o.revokeObjectURL(c),
          (h.userData.mimeType = a.mimeType || b_(a.uri)),
          h
        );
      })
      .catch(function (h) {
        throw (console.error("THREE.GLTFLoader: Couldn't load texture", c), h);
      });
    return (this.sourceCache[e] = u), u;
  }
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function (a) {
      if (!a) return null;
      if (
        (n.texCoord !== void 0 &&
          n.texCoord > 0 &&
          ((a = a.clone()), (a.channel = n.texCoord)),
        r.extensions[je.KHR_TEXTURE_TRANSFORM])
      ) {
        const o =
          n.extensions !== void 0
            ? n.extensions[je.KHR_TEXTURE_TRANSFORM]
            : void 0;
        if (o) {
          const c = r.associations.get(a);
          (a = r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a, o)),
            r.associations.set(a, c);
        }
      }
      return i !== void 0 && (a.colorSpace = i), (e[t] = a), a;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0,
      r = t.attributes.color !== void 0,
      a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c ||
        ((c = new Rl()),
        tn.prototype.copy.call(c, n),
        c.color.copy(n.color),
        (c.map = n.map),
        (c.sizeAttenuation = !1),
        this.cache.add(o, c)),
        (n = c);
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c ||
        ((c = new wl()),
        tn.prototype.copy.call(c, n),
        c.color.copy(n.color),
        (c.map = n.map),
        this.cache.add(o, c)),
        (n = c);
    }
    if (i || r || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"),
        r && (o += "vertex-colors:"),
        a && (o += "flat-shading:");
      let c = this.cache.get(o);
      c ||
        ((c = n.clone()),
        r && (c.vertexColors = !0),
        a && (c.flatShading = !0),
        i &&
          (c.normalScale && (c.normalScale.y *= -1),
          c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)),
        this.cache.add(o, c),
        this.associations.set(c, this.associations.get(n))),
        (n = c);
    }
    e.material = n;
  }
  getMaterialType() {
    return fs;
  }
  loadMaterial(e) {
    const t = this,
      n = this.json,
      i = this.extensions,
      r = n.materials[e];
    let a;
    const o = {},
      c = r.extensions || {},
      l = [];
    if (c[je.KHR_MATERIALS_UNLIT]) {
      const h = i[je.KHR_MATERIALS_UNLIT];
      (a = h.getMaterialType()), l.push(h.extendParams(o, r, t));
    } else {
      const h = r.pbrMetallicRoughness || {};
      if (
        ((o.color = new Re(1, 1, 1)),
        (o.opacity = 1),
        Array.isArray(h.baseColorFactor))
      ) {
        const d = h.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], bt), (o.opacity = d[3]);
      }
      h.baseColorTexture !== void 0 &&
        l.push(t.assignTexture(o, "map", h.baseColorTexture, Nt)),
        (o.metalness = h.metallicFactor !== void 0 ? h.metallicFactor : 1),
        (o.roughness = h.roughnessFactor !== void 0 ? h.roughnessFactor : 1),
        h.metallicRoughnessTexture !== void 0 &&
          (l.push(
            t.assignTexture(o, "metalnessMap", h.metallicRoughnessTexture)
          ),
          l.push(
            t.assignTexture(o, "roughnessMap", h.metallicRoughnessTexture)
          )),
        (a = this._invokeOne(function (d) {
          return d.getMaterialType && d.getMaterialType(e);
        })),
        l.push(
          Promise.all(
            this._invokeAll(function (d) {
              return d.extendMaterialParams && d.extendMaterialParams(e, o);
            })
          )
        );
    }
    r.doubleSided === !0 && (o.side = an);
    const u = r.alphaMode || Kr.OPAQUE;
    if (
      (u === Kr.BLEND
        ? ((o.transparent = !0), (o.depthWrite = !1))
        : ((o.transparent = !1),
          u === Kr.MASK &&
            (o.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)),
      r.normalTexture !== void 0 &&
        a !== Fn &&
        (l.push(t.assignTexture(o, "normalMap", r.normalTexture)),
        (o.normalScale = new be(1, 1)),
        r.normalTexture.scale !== void 0))
    ) {
      const h = r.normalTexture.scale;
      o.normalScale.set(h, h);
    }
    if (
      (r.occlusionTexture !== void 0 &&
        a !== Fn &&
        (l.push(t.assignTexture(o, "aoMap", r.occlusionTexture)),
        r.occlusionTexture.strength !== void 0 &&
          (o.aoMapIntensity = r.occlusionTexture.strength)),
      r.emissiveFactor !== void 0 && a !== Fn)
    ) {
      const h = r.emissiveFactor;
      o.emissive = new Re().setRGB(h[0], h[1], h[2], bt);
    }
    return (
      r.emissiveTexture !== void 0 &&
        a !== Fn &&
        l.push(t.assignTexture(o, "emissiveMap", r.emissiveTexture, Nt)),
      Promise.all(l).then(function () {
        const h = new a(o);
        return (
          r.name && (h.name = r.name),
          Nn(h, r),
          t.associations.set(h, { materials: e }),
          r.extensions && Qn(i, h, r),
          h
        );
      })
    );
  }
  createUniqueName(e) {
    const t = et.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed
      ? t + "_" + ++this.nodeNamesUsed[t]
      : ((this.nodeNamesUsed[t] = 0), t);
  }
  loadGeometries(e) {
    const t = this,
      n = this.extensions,
      i = this.primitiveCache;
    function r(o) {
      return n[je.KHR_DRACO_MESH_COMPRESSION]
        .decodePrimitive(o, t)
        .then(function (c) {
          return zc(c, o, t);
        });
    }
    const a = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o],
        u = A_(l),
        h = i[u];
      if (h) a.push(h.promise);
      else {
        let d;
        l.extensions && l.extensions[je.KHR_DRACO_MESH_COMPRESSION]
          ? (d = r(l))
          : (d = zc(new un(), l, t)),
          (i[u] = { primitive: l, promise: d }),
          a.push(d);
      }
    }
    return Promise.all(a);
  }
  loadMesh(e) {
    const t = this,
      n = this.json,
      i = this.extensions,
      r = n.meshes[e],
      a = r.primitives,
      o = [];
    for (let c = 0, l = a.length; c < l; c++) {
      const u =
        a[c].material === void 0
          ? y_(this.cache)
          : this.getDependency("material", a[c].material);
      o.push(u);
    }
    return (
      o.push(t.loadGeometries(a)),
      Promise.all(o).then(function (c) {
        const l = c.slice(0, c.length - 1),
          u = c[c.length - 1],
          h = [];
        for (let m = 0, g = u.length; m < g; m++) {
          const x = u[m],
            p = a[m];
          let f;
          const E = l[m];
          if (
            p.mode === Xt.TRIANGLES ||
            p.mode === Xt.TRIANGLE_STRIP ||
            p.mode === Xt.TRIANGLE_FAN ||
            p.mode === void 0
          )
            (f = r.isSkinnedMesh === !0 ? new pg(x, E) : new tt(x, E)),
              f.isSkinnedMesh === !0 && f.normalizeSkinWeights(),
              p.mode === Xt.TRIANGLE_STRIP
                ? (f.geometry = Uc(f.geometry, tl))
                : p.mode === Xt.TRIANGLE_FAN &&
                  (f.geometry = Uc(f.geometry, ia));
          else if (p.mode === Xt.LINES) f = new xg(x, E);
          else if (p.mode === Xt.LINE_STRIP) f = new Ta(x, E);
          else if (p.mode === Xt.LINE_LOOP) f = new vg(x, E);
          else if (p.mode === Xt.POINTS) f = new Mg(x, E);
          else
            throw new Error(
              "THREE.GLTFLoader: Primitive mode unsupported: " + p.mode
            );
          Object.keys(f.geometry.morphAttributes).length > 0 && T_(f, r),
            (f.name = t.createUniqueName(r.name || "mesh_" + e)),
            Nn(f, r),
            p.extensions && Qn(i, f, p),
            t.assignFinalMaterial(f),
            h.push(f);
        }
        for (let m = 0, g = h.length; m < g; m++)
          t.associations.set(h[m], { meshes: e, primitives: m });
        if (h.length === 1) return r.extensions && Qn(i, h[0], r), h[0];
        const d = new ii();
        r.extensions && Qn(i, d, r), t.associations.set(d, { meshes: e });
        for (let m = 0, g = h.length; m < g; m++) d.add(h[m]);
        return d;
      })
    );
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e],
      i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return (
      n.type === "perspective"
        ? (t = new Ut(
            il.radToDeg(i.yfov),
            i.aspectRatio || 1,
            i.znear || 1,
            i.zfar || 2e6
          ))
        : n.type === "orthographic" &&
          (t = new Ma(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)),
      n.name && (t.name = this.createUniqueName(n.name)),
      Nn(t, n),
      Promise.resolve(t)
    );
  }
  loadSkin(e) {
    const t = this.json.skins[e],
      n = [];
    for (let i = 0, r = t.joints.length; i < r; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return (
      t.inverseBindMatrices !== void 0
        ? n.push(this.getDependency("accessor", t.inverseBindMatrices))
        : n.push(null),
      Promise.all(n).then(function (i) {
        const r = i.pop(),
          a = i,
          o = [],
          c = [];
        for (let l = 0, u = a.length; l < u; l++) {
          const h = a[l];
          if (h) {
            o.push(h);
            const d = new Ve();
            r !== null && d.fromArray(r.array, l * 16), c.push(d);
          } else
            console.warn(
              'THREE.GLTFLoader: Joint "%s" could not be found.',
              t.joints[l]
            );
        }
        return new Ea(o, c);
      })
    );
  }
  loadAnimation(e) {
    const t = this.json,
      n = this,
      i = t.animations[e],
      r = i.name ? i.name : "animation_" + e,
      a = [],
      o = [],
      c = [],
      l = [],
      u = [];
    for (let h = 0, d = i.channels.length; h < d; h++) {
      const m = i.channels[h],
        g = i.samplers[m.sampler],
        x = m.target,
        p = x.node,
        f = i.parameters !== void 0 ? i.parameters[g.input] : g.input,
        E = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      x.node !== void 0 &&
        (a.push(this.getDependency("node", p)),
        o.push(this.getDependency("accessor", f)),
        c.push(this.getDependency("accessor", E)),
        l.push(g),
        u.push(x));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(c),
      Promise.all(l),
      Promise.all(u),
    ]).then(function (h) {
      const d = h[0],
        m = h[1],
        g = h[2],
        x = h[3],
        p = h[4],
        f = [];
      for (let E = 0, M = d.length; E < M; E++) {
        const y = d[E],
          P = m[E],
          C = g[E],
          b = x[E],
          F = p[E];
        if (y === void 0) continue;
        y.updateMatrix && y.updateMatrix();
        const $ = n._createAnimationTracks(y, P, C, b, F);
        if ($) for (let v = 0; v < $.length; v++) f.push($[v]);
      }
      return new wg(r, void 0, f);
    });
  }
  createNodeMesh(e) {
    const t = this.json,
      n = this,
      i = t.nodes[e];
    return i.mesh === void 0
      ? null
      : n.getDependency("mesh", i.mesh).then(function (r) {
          const a = n._getNodeRef(n.meshCache, i.mesh, r);
          return (
            i.weights !== void 0 &&
              a.traverse(function (o) {
                if (o.isMesh)
                  for (let c = 0, l = i.weights.length; c < l; c++)
                    o.morphTargetInfluences[c] = i.weights[c];
              }),
            a
          );
        });
  }
  loadNode(e) {
    const t = this.json,
      n = this,
      i = t.nodes[e],
      r = n._loadNodeShallow(e),
      a = [],
      o = i.children || [];
    for (let l = 0, u = o.length; l < u; l++)
      a.push(n.getDependency("node", o[l]));
    const c =
      i.skin === void 0
        ? Promise.resolve(null)
        : n.getDependency("skin", i.skin);
    return Promise.all([r, Promise.all(a), c]).then(function (l) {
      const u = l[0],
        h = l[1],
        d = l[2];
      d !== null &&
        u.traverse(function (m) {
          m.isSkinnedMesh && m.bind(d, w_);
        });
      for (let m = 0, g = h.length; m < g; m++) u.add(h[m]);
      return u;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json,
      n = this.extensions,
      i = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const r = t.nodes[e],
      a = r.name ? i.createUniqueName(r.name) : "",
      o = [],
      c = i._invokeOne(function (l) {
        return l.createNodeMesh && l.createNodeMesh(e);
      });
    return (
      c && o.push(c),
      r.camera !== void 0 &&
        o.push(
          i.getDependency("camera", r.camera).then(function (l) {
            return i._getNodeRef(i.cameraCache, r.camera, l);
          })
        ),
      i
        ._invokeAll(function (l) {
          return l.createNodeAttachment && l.createNodeAttachment(e);
        })
        .forEach(function (l) {
          o.push(l);
        }),
      (this.nodeCache[e] = Promise.all(o).then(function (l) {
        let u;
        if (
          (r.isBone === !0
            ? (u = new Al())
            : l.length > 1
            ? (u = new ii())
            : l.length === 1
            ? (u = l[0])
            : (u = new dt()),
          u !== l[0])
        )
          for (let h = 0, d = l.length; h < d; h++) u.add(l[h]);
        if (
          (r.name && ((u.userData.name = r.name), (u.name = a)),
          Nn(u, r),
          r.extensions && Qn(n, u, r),
          r.matrix !== void 0)
        ) {
          const h = new Ve();
          h.fromArray(r.matrix), u.applyMatrix4(h);
        } else r.translation !== void 0 && u.position.fromArray(r.translation), r.rotation !== void 0 && u.quaternion.fromArray(r.rotation), r.scale !== void 0 && u.scale.fromArray(r.scale);
        return (
          i.associations.has(u) || i.associations.set(u, {}),
          (i.associations.get(u).nodes = e),
          u
        );
      })),
      this.nodeCache[e]
    );
  }
  loadScene(e) {
    const t = this.extensions,
      n = this.json.scenes[e],
      i = this,
      r = new ii();
    n.name && (r.name = i.createUniqueName(n.name)),
      Nn(r, n),
      n.extensions && Qn(t, r, n);
    const a = n.nodes || [],
      o = [];
    for (let c = 0, l = a.length; c < l; c++)
      o.push(i.getDependency("node", a[c]));
    return Promise.all(o).then(function (c) {
      for (let u = 0, h = c.length; u < h; u++) r.add(c[u]);
      const l = (u) => {
        const h = new Map();
        for (const [d, m] of i.associations)
          (d instanceof tn || d instanceof Tt) && h.set(d, m);
        return (
          u.traverse((d) => {
            const m = i.associations.get(d);
            m != null && h.set(d, m);
          }),
          h
        );
      };
      return (i.associations = l(r)), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const a = [],
      o = e.name ? e.name : e.uuid,
      c = [];
    In[r.path] === In.weights
      ? e.traverse(function (d) {
          d.morphTargetInfluences && c.push(d.name ? d.name : d.uuid);
        })
      : c.push(o);
    let l;
    switch (In[r.path]) {
      case In.weights:
        l = Wi;
        break;
      case In.rotation:
        l = oi;
        break;
      case In.position:
      case In.scale:
        l = Xi;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            l = Wi;
            break;
          case 2:
          case 3:
          default:
            l = Xi;
            break;
        }
        break;
    }
    const u = i.interpolation !== void 0 ? S_[i.interpolation] : Gi,
      h = this._getArrayFromAccessor(n);
    for (let d = 0, m = c.length; d < m; d++) {
      const g = new l(c[d] + "." + In[r.path], t.array, h, u);
      i.interpolation === "CUBICSPLINE" &&
        this._createCubicSplineTrackInterpolant(g),
        a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = da(t.constructor),
        i = new Float32Array(t.length);
      for (let r = 0, a = t.length; r < a; r++) i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    (e.createInterpolant = function (n) {
      const i = this instanceof oi ? M_ : Nl;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }),
      (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0);
  }
}
function C_(s, e, t) {
  const n = e.attributes,
    i = new Tn();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION],
      c = o.min,
      l = o.max;
    if (c !== void 0 && l !== void 0) {
      if (
        (i.set(new L(c[0], c[1], c[2]), new L(l[0], l[1], l[2])), o.normalized)
      ) {
        const u = da(Oi[o.componentType]);
        i.min.multiplyScalar(u), i.max.multiplyScalar(u);
      }
    } else {
      console.warn(
        "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
      );
      return;
    }
  } else return;
  const r = e.targets;
  if (r !== void 0) {
    const o = new L(),
      c = new L();
    for (let l = 0, u = r.length; l < u; l++) {
      const h = r[l];
      if (h.POSITION !== void 0) {
        const d = t.json.accessors[h.POSITION],
          m = d.min,
          g = d.max;
        if (m !== void 0 && g !== void 0) {
          if (
            (c.setX(Math.max(Math.abs(m[0]), Math.abs(g[0]))),
            c.setY(Math.max(Math.abs(m[1]), Math.abs(g[1]))),
            c.setZ(Math.max(Math.abs(m[2]), Math.abs(g[2]))),
            d.normalized)
          ) {
            const x = da(Oi[d.componentType]);
            c.multiplyScalar(x);
          }
          o.max(c);
        } else
          console.warn(
            "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
          );
      }
    }
    i.expandByVector(o);
  }
  s.boundingBox = i;
  const a = new ln();
  i.getCenter(a.center),
    (a.radius = i.min.distanceTo(i.max) / 2),
    (s.boundingSphere = a);
}
function zc(s, e, t) {
  const n = e.attributes,
    i = [];
  function r(a, o) {
    return t.getDependency("accessor", a).then(function (c) {
      s.setAttribute(o, c);
    });
  }
  for (const a in n) {
    const o = ha[a] || a.toLowerCase();
    o in s.attributes || i.push(r(n[a], o));
  }
  if (e.indices !== void 0 && !s.index) {
    const a = t.getDependency("accessor", e.indices).then(function (o) {
      s.setIndex(o);
    });
    i.push(a);
  }
  return (
    $e.workingColorSpace !== bt &&
      "COLOR_0" in n &&
      console.warn(
        `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`
      ),
    Nn(s, e),
    C_(s, e, t),
    Promise.all(i).then(function () {
      return e.targets !== void 0 ? E_(s, e.targets, t) : s;
    })
  );
}
const Hc = { type: "change" },
  $r = { type: "start" },
  Gc = { type: "end" },
  qs = new ps(),
  kc = new Dn(),
  L_ = Math.cos(70 * il.DEG2RAD);
class P_ extends ci {
  constructor(e, t) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = "none"),
      (this.enabled = !0),
      (this.target = new L()),
      (this.cursor = new L()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minTargetRadius = 0),
      (this.maxTargetRadius = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.zoomToCursor = !1),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: hi.ROTATE,
        MIDDLE: hi.DOLLY,
        RIGHT: hi.PAN,
      }),
      (this.touches = { ONE: di.ROTATE, TWO: di.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return o.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return o.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (A) {
        A.addEventListener("keydown", Ae), (this._domElementKeyEvents = A);
      }),
      (this.stopListenToKeyEvents = function () {
        this._domElementKeyEvents.removeEventListener("keydown", Ae),
          (this._domElementKeyEvents = null);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(Hc),
          n.update(),
          (r = i.NONE);
      }),
      (this.update = (function () {
        const A = new L(),
          q = new cn().setFromUnitVectors(e.up, new L(0, 1, 0)),
          _e = q.clone().invert(),
          R = new L(),
          ne = new cn(),
          U = new L(),
          J = 2 * Math.PI;
        return function (qe = null) {
          const Je = n.object.position;
          A.copy(Je).sub(n.target),
            A.applyQuaternion(q),
            o.setFromVector3(A),
            n.autoRotate && r === i.NONE && re(v(qe)),
            n.enableDamping
              ? ((o.theta += c.theta * n.dampingFactor),
                (o.phi += c.phi * n.dampingFactor))
              : ((o.theta += c.theta), (o.phi += c.phi));
          let nt = n.minAzimuthAngle,
            pt = n.maxAzimuthAngle;
          isFinite(nt) &&
            isFinite(pt) &&
            (nt < -Math.PI ? (nt += J) : nt > Math.PI && (nt -= J),
            pt < -Math.PI ? (pt += J) : pt > Math.PI && (pt -= J),
            nt <= pt
              ? (o.theta = Math.max(nt, Math.min(pt, o.theta)))
              : (o.theta =
                  o.theta > (nt + pt) / 2
                    ? Math.max(nt, o.theta)
                    : Math.min(pt, o.theta))),
            (o.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, o.phi)
            )),
            o.makeSafe(),
            n.enableDamping === !0
              ? n.target.addScaledVector(u, n.dampingFactor)
              : n.target.add(u),
            n.target.sub(n.cursor),
            n.target.clampLength(n.minTargetRadius, n.maxTargetRadius),
            n.target.add(n.cursor);
          let Ze = !1;
          if ((n.zoomToCursor && C) || n.object.isOrthographicCamera)
            o.radius = K(o.radius);
          else {
            const rt = o.radius;
            (o.radius = K(o.radius * l)), (Ze = rt != o.radius);
          }
          if (
            (A.setFromSpherical(o),
            A.applyQuaternion(_e),
            Je.copy(n.target).add(A),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((c.theta *= 1 - n.dampingFactor),
                (c.phi *= 1 - n.dampingFactor),
                u.multiplyScalar(1 - n.dampingFactor))
              : (c.set(0, 0, 0), u.set(0, 0, 0)),
            n.zoomToCursor && C)
          ) {
            let rt = null;
            if (n.object.isPerspectiveCamera) {
              const wt = A.length();
              rt = K(wt * l);
              const Wn = wt - rt;
              n.object.position.addScaledVector(y, Wn),
                n.object.updateMatrixWorld(),
                (Ze = !!Wn);
            } else if (n.object.isOrthographicCamera) {
              const wt = new L(P.x, P.y, 0);
              wt.unproject(n.object);
              const Wn = n.object.zoom;
              (n.object.zoom = Math.max(
                n.minZoom,
                Math.min(n.maxZoom, n.object.zoom / l)
              )),
                n.object.updateProjectionMatrix(),
                (Ze = Wn !== n.object.zoom);
              const gs = new L(P.x, P.y, 0);
              gs.unproject(n.object),
                n.object.position.sub(gs).add(wt),
                n.object.updateMatrixWorld(),
                (rt = A.length());
            } else
              console.warn(
                "WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."
              ),
                (n.zoomToCursor = !1);
            rt !== null &&
              (this.screenSpacePanning
                ? n.target
                    .set(0, 0, -1)
                    .transformDirection(n.object.matrix)
                    .multiplyScalar(rt)
                    .add(n.object.position)
                : (qs.origin.copy(n.object.position),
                  qs.direction
                    .set(0, 0, -1)
                    .transformDirection(n.object.matrix),
                  Math.abs(n.object.up.dot(qs.direction)) < L_
                    ? e.lookAt(n.target)
                    : (kc.setFromNormalAndCoplanarPoint(n.object.up, n.target),
                      qs.intersectPlane(kc, n.target))));
          } else if (n.object.isOrthographicCamera) {
            const rt = n.object.zoom;
            (n.object.zoom = Math.max(
              n.minZoom,
              Math.min(n.maxZoom, n.object.zoom / l)
            )),
              rt !== n.object.zoom &&
                (n.object.updateProjectionMatrix(), (Ze = !0));
          }
          return (
            (l = 1),
            (C = !1),
            Ze ||
            R.distanceToSquared(n.object.position) > a ||
            8 * (1 - ne.dot(n.object.quaternion)) > a ||
            U.distanceToSquared(n.target) > a
              ? (n.dispatchEvent(Hc),
                R.copy(n.object.position),
                ne.copy(n.object.quaternion),
                U.copy(n.target),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", Ne),
          n.domElement.removeEventListener("pointerdown", ze),
          n.domElement.removeEventListener("pointercancel", T),
          n.domElement.removeEventListener("wheel", X),
          n.domElement.removeEventListener("pointermove", st),
          n.domElement.removeEventListener("pointerup", T),
          n.domElement
            .getRootNode()
            .removeEventListener("keydown", Z, { capture: !0 }),
          n._domElementKeyEvents !== null &&
            (n._domElementKeyEvents.removeEventListener("keydown", Ae),
            (n._domElementKeyEvents = null));
      });
    const n = this,
      i = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let r = i.NONE;
    const a = 1e-6,
      o = new Nc(),
      c = new Nc();
    let l = 1;
    const u = new L(),
      h = new be(),
      d = new be(),
      m = new be(),
      g = new be(),
      x = new be(),
      p = new be(),
      f = new be(),
      E = new be(),
      M = new be(),
      y = new L(),
      P = new be();
    let C = !1;
    const b = [],
      F = {};
    let $ = !1;
    function v(A) {
      return A !== null
        ? ((2 * Math.PI) / 60) * n.autoRotateSpeed * A
        : ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function w(A) {
      const q = Math.abs(A * 0.01);
      return Math.pow(0.95, n.zoomSpeed * q);
    }
    function re(A) {
      c.theta -= A;
    }
    function Q(A) {
      c.phi -= A;
    }
    const I = (function () {
        const A = new L();
        return function (_e, R) {
          A.setFromMatrixColumn(R, 0), A.multiplyScalar(-_e), u.add(A);
        };
      })(),
      W = (function () {
        const A = new L();
        return function (_e, R) {
          n.screenSpacePanning === !0
            ? A.setFromMatrixColumn(R, 1)
            : (A.setFromMatrixColumn(R, 0), A.crossVectors(n.object.up, A)),
            A.multiplyScalar(_e),
            u.add(A);
        };
      })(),
      k = (function () {
        const A = new L();
        return function (_e, R) {
          const ne = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const U = n.object.position;
            A.copy(U).sub(n.target);
            let J = A.length();
            (J *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              I((2 * _e * J) / ne.clientHeight, n.object.matrix),
              W((2 * R * J) / ne.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? (I(
                  (_e * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    ne.clientWidth,
                  n.object.matrix
                ),
                W(
                  (R * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    ne.clientHeight,
                  n.object.matrix
                ))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                ),
                (n.enablePan = !1));
        };
      })();
    function j(A) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera
        ? (l /= A)
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function V(A) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera
        ? (l *= A)
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function Y(A, q) {
      if (!n.zoomToCursor) return;
      C = !0;
      const _e = n.domElement.getBoundingClientRect(),
        R = A - _e.left,
        ne = q - _e.top,
        U = _e.width,
        J = _e.height;
      (P.x = (R / U) * 2 - 1),
        (P.y = -(ne / J) * 2 + 1),
        y
          .set(P.x, P.y, 1)
          .unproject(n.object)
          .sub(n.object.position)
          .normalize();
    }
    function K(A) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, A));
    }
    function oe(A) {
      h.set(A.clientX, A.clientY);
    }
    function pe(A) {
      Y(A.clientX, A.clientX), f.set(A.clientX, A.clientY);
    }
    function Ie(A) {
      g.set(A.clientX, A.clientY);
    }
    function H(A) {
      d.set(A.clientX, A.clientY),
        m.subVectors(d, h).multiplyScalar(n.rotateSpeed);
      const q = n.domElement;
      re((2 * Math.PI * m.x) / q.clientHeight),
        Q((2 * Math.PI * m.y) / q.clientHeight),
        h.copy(d),
        n.update();
    }
    function ee(A) {
      E.set(A.clientX, A.clientY),
        M.subVectors(E, f),
        M.y > 0 ? j(w(M.y)) : M.y < 0 && V(w(M.y)),
        f.copy(E),
        n.update();
    }
    function fe(A) {
      x.set(A.clientX, A.clientY),
        p.subVectors(x, g).multiplyScalar(n.panSpeed),
        k(p.x, p.y),
        g.copy(x),
        n.update();
    }
    function Le(A) {
      Y(A.clientX, A.clientY),
        A.deltaY < 0 ? V(w(A.deltaY)) : A.deltaY > 0 && j(w(A.deltaY)),
        n.update();
    }
    function Me(A) {
      let q = !1;
      switch (A.code) {
        case n.keys.UP:
          A.ctrlKey || A.metaKey || A.shiftKey
            ? Q((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : k(0, n.keyPanSpeed),
            (q = !0);
          break;
        case n.keys.BOTTOM:
          A.ctrlKey || A.metaKey || A.shiftKey
            ? Q((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : k(0, -n.keyPanSpeed),
            (q = !0);
          break;
        case n.keys.LEFT:
          A.ctrlKey || A.metaKey || A.shiftKey
            ? re((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : k(n.keyPanSpeed, 0),
            (q = !0);
          break;
        case n.keys.RIGHT:
          A.ctrlKey || A.metaKey || A.shiftKey
            ? re((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : k(-n.keyPanSpeed, 0),
            (q = !0);
          break;
      }
      q && (A.preventDefault(), n.update());
    }
    function me(A) {
      if (b.length === 1) h.set(A.pageX, A.pageY);
      else {
        const q = ge(A),
          _e = 0.5 * (A.pageX + q.x),
          R = 0.5 * (A.pageY + q.y);
        h.set(_e, R);
      }
    }
    function Ke(A) {
      if (b.length === 1) g.set(A.pageX, A.pageY);
      else {
        const q = ge(A),
          _e = 0.5 * (A.pageX + q.x),
          R = 0.5 * (A.pageY + q.y);
        g.set(_e, R);
      }
    }
    function Ce(A) {
      const q = ge(A),
        _e = A.pageX - q.x,
        R = A.pageY - q.y,
        ne = Math.sqrt(_e * _e + R * R);
      f.set(0, ne);
    }
    function N(A) {
      n.enableZoom && Ce(A), n.enablePan && Ke(A);
    }
    function _t(A) {
      n.enableZoom && Ce(A), n.enableRotate && me(A);
    }
    function ye(A) {
      if (b.length == 1) d.set(A.pageX, A.pageY);
      else {
        const _e = ge(A),
          R = 0.5 * (A.pageX + _e.x),
          ne = 0.5 * (A.pageY + _e.y);
        d.set(R, ne);
      }
      m.subVectors(d, h).multiplyScalar(n.rotateSpeed);
      const q = n.domElement;
      re((2 * Math.PI * m.x) / q.clientHeight),
        Q((2 * Math.PI * m.y) / q.clientHeight),
        h.copy(d);
    }
    function Oe(A) {
      if (b.length === 1) x.set(A.pageX, A.pageY);
      else {
        const q = ge(A),
          _e = 0.5 * (A.pageX + q.x),
          R = 0.5 * (A.pageY + q.y);
        x.set(_e, R);
      }
      p.subVectors(x, g).multiplyScalar(n.panSpeed), k(p.x, p.y), g.copy(x);
    }
    function Te(A) {
      const q = ge(A),
        _e = A.pageX - q.x,
        R = A.pageY - q.y,
        ne = Math.sqrt(_e * _e + R * R);
      E.set(0, ne),
        M.set(0, Math.pow(E.y / f.y, n.zoomSpeed)),
        j(M.y),
        f.copy(E);
      const U = (A.pageX + q.x) * 0.5,
        J = (A.pageY + q.y) * 0.5;
      Y(U, J);
    }
    function Ye(A) {
      n.enableZoom && Te(A), n.enablePan && Oe(A);
    }
    function Fe(A) {
      n.enableZoom && Te(A), n.enableRotate && ye(A);
    }
    function ze(A) {
      n.enabled !== !1 &&
        (b.length === 0 &&
          (n.domElement.setPointerCapture(A.pointerId),
          n.domElement.addEventListener("pointermove", st),
          n.domElement.addEventListener("pointerup", T)),
        !We(A) && (ae(A), A.pointerType === "touch" ? ce(A) : _(A)));
    }
    function st(A) {
      n.enabled !== !1 && (A.pointerType === "touch" ? ue(A) : G(A));
    }
    function T(A) {
      switch ((ft(A), b.length)) {
        case 0:
          n.domElement.releasePointerCapture(A.pointerId),
            n.domElement.removeEventListener("pointermove", st),
            n.domElement.removeEventListener("pointerup", T),
            n.dispatchEvent(Gc),
            (r = i.NONE);
          break;
        case 1:
          const q = b[0],
            _e = F[q];
          ce({ pointerId: q, pageX: _e.x, pageY: _e.y });
          break;
      }
    }
    function _(A) {
      let q;
      switch (A.button) {
        case 0:
          q = n.mouseButtons.LEFT;
          break;
        case 1:
          q = n.mouseButtons.MIDDLE;
          break;
        case 2:
          q = n.mouseButtons.RIGHT;
          break;
        default:
          q = -1;
      }
      switch (q) {
        case hi.DOLLY:
          if (n.enableZoom === !1) return;
          pe(A), (r = i.DOLLY);
          break;
        case hi.ROTATE:
          if (A.ctrlKey || A.metaKey || A.shiftKey) {
            if (n.enablePan === !1) return;
            Ie(A), (r = i.PAN);
          } else {
            if (n.enableRotate === !1) return;
            oe(A), (r = i.ROTATE);
          }
          break;
        case hi.PAN:
          if (A.ctrlKey || A.metaKey || A.shiftKey) {
            if (n.enableRotate === !1) return;
            oe(A), (r = i.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            Ie(A), (r = i.PAN);
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent($r);
    }
    function G(A) {
      switch (r) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          H(A);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          ee(A);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          fe(A);
          break;
      }
    }
    function X(A) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        r !== i.NONE ||
        (A.preventDefault(),
        n.dispatchEvent($r),
        Le(te(A)),
        n.dispatchEvent(Gc));
    }
    function te(A) {
      const q = A.deltaMode,
        _e = { clientX: A.clientX, clientY: A.clientY, deltaY: A.deltaY };
      switch (q) {
        case 1:
          _e.deltaY *= 16;
          break;
        case 2:
          _e.deltaY *= 100;
          break;
      }
      return A.ctrlKey && !$ && (_e.deltaY *= 10), _e;
    }
    function Z(A) {
      A.key === "Control" &&
        (($ = !0),
        n.domElement
          .getRootNode()
          .addEventListener("keyup", De, { passive: !0, capture: !0 }));
    }
    function De(A) {
      A.key === "Control" &&
        (($ = !1),
        n.domElement
          .getRootNode()
          .removeEventListener("keyup", De, { passive: !0, capture: !0 }));
    }
    function Ae(A) {
      n.enabled === !1 || n.enablePan === !1 || Me(A);
    }
    function ce(A) {
      switch ((Se(A), b.length)) {
        case 1:
          switch (n.touches.ONE) {
            case di.ROTATE:
              if (n.enableRotate === !1) return;
              me(A), (r = i.TOUCH_ROTATE);
              break;
            case di.PAN:
              if (n.enablePan === !1) return;
              Ke(A), (r = i.TOUCH_PAN);
              break;
            default:
              r = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case di.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              N(A), (r = i.TOUCH_DOLLY_PAN);
              break;
            case di.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              _t(A), (r = i.TOUCH_DOLLY_ROTATE);
              break;
            default:
              r = i.NONE;
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent($r);
    }
    function ue(A) {
      switch ((Se(A), r)) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          ye(A), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          Oe(A), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          Ye(A), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          Fe(A), n.update();
          break;
        default:
          r = i.NONE;
      }
    }
    function Ne(A) {
      n.enabled !== !1 && A.preventDefault();
    }
    function ae(A) {
      b.push(A.pointerId);
    }
    function ft(A) {
      delete F[A.pointerId];
      for (let q = 0; q < b.length; q++)
        if (b[q] == A.pointerId) {
          b.splice(q, 1);
          return;
        }
    }
    function We(A) {
      for (let q = 0; q < b.length; q++) if (b[q] == A.pointerId) return !0;
      return !1;
    }
    function Se(A) {
      let q = F[A.pointerId];
      q === void 0 && ((q = new be()), (F[A.pointerId] = q)),
        q.set(A.pageX, A.pageY);
    }
    function ge(A) {
      const q = A.pointerId === b[0] ? b[1] : b[0];
      return F[q];
    }
    n.domElement.addEventListener("contextmenu", Ne),
      n.domElement.addEventListener("pointerdown", ze),
      n.domElement.addEventListener("pointercancel", T),
      n.domElement.addEventListener("wheel", X, { passive: !1 }),
      n.domElement
        .getRootNode()
        .addEventListener("keydown", Z, { passive: !0, capture: !0 }),
      this.update();
  }
}
class I_ extends Tl {
  constructor(e = null) {
    super();
    const t = new Vn();
    t.deleteAttribute("uv");
    const n = new fs({ side: Ot }),
      i = new fs();
    let r = 5;
    e !== null && e._useLegacyLights === !1 && (r = 900);
    const a = new Il(16777215, r, 28, 2);
    a.position.set(0.418, 16.199, 0.3), this.add(a);
    const o = new tt(t, n);
    o.position.set(-0.757, 13.219, 0.717),
      o.scale.set(31.713, 28.305, 28.591),
      this.add(o);
    const c = new tt(t, i);
    c.position.set(-10.906, 2.009, 1.846),
      c.rotation.set(0, -0.195, 0),
      c.scale.set(2.328, 7.905, 4.651),
      this.add(c);
    const l = new tt(t, i);
    l.position.set(-5.607, -0.754, -0.758),
      l.rotation.set(0, 0.994, 0),
      l.scale.set(1.97, 1.534, 3.955),
      this.add(l);
    const u = new tt(t, i);
    u.position.set(6.167, 0.857, 7.803),
      u.rotation.set(0, 0.561, 0),
      u.scale.set(3.927, 6.285, 3.687),
      this.add(u);
    const h = new tt(t, i);
    h.position.set(-2.017, 0.018, 6.124),
      h.rotation.set(0, 0.333, 0),
      h.scale.set(2.002, 4.566, 2.064),
      this.add(h);
    const d = new tt(t, i);
    d.position.set(2.291, -0.756, -2.621),
      d.rotation.set(0, -0.286, 0),
      d.scale.set(1.546, 1.552, 1.496),
      this.add(d);
    const m = new tt(t, i);
    m.position.set(-2.193, -0.369, -5.547),
      m.rotation.set(0, 0.516, 0),
      m.scale.set(3.875, 3.487, 2.986),
      this.add(m);
    const g = new tt(t, Li(50));
    g.position.set(-16.116, 14.37, 8.208),
      g.scale.set(0.1, 2.428, 2.739),
      this.add(g);
    const x = new tt(t, Li(50));
    x.position.set(-16.109, 18.021, -8.207),
      x.scale.set(0.1, 2.425, 2.751),
      this.add(x);
    const p = new tt(t, Li(17));
    p.position.set(14.904, 12.198, -1.832),
      p.scale.set(0.15, 4.265, 6.331),
      this.add(p);
    const f = new tt(t, Li(43));
    f.position.set(-0.462, 8.89, 14.52),
      f.scale.set(4.38, 5.441, 0.088),
      this.add(f);
    const E = new tt(t, Li(20));
    E.position.set(3.235, 11.486, -12.541),
      E.scale.set(2.5, 2, 0.1),
      this.add(E);
    const M = new tt(t, Li(100));
    M.position.set(0, 20, 0), M.scale.set(1, 0.1, 1), this.add(M);
  }
  dispose() {
    const e = new Set();
    this.traverse((t) => {
      t.isMesh && (e.add(t.geometry), e.add(t.material));
    });
    for (const t of e) t.dispose();
  }
}
function Li(s) {
  const e = new Fn();
  return e.color.setScalar(s), e;
}
const Mt = new Tl();
Mt.background = new Re();
const Ee = new Ut(75, window.innerWidth / window.innerHeight, 0.001, 1e3),
  Bt = new El({ antialias: !0, physicallyCorrectLights: !0 });
Bt.setSize(window.innerWidth, window.innerHeight);
Bt.shadowMap.enabled = !0;
Bt.shadowMap.type = !0;
Bt.setPixelRatio(window.devicePixelRatio);
Bt.toneMapping = Xc;
Bt.toneMappingExposure = 1.5;
Bt.gammaOutput = !0;
Bt.gammaFactor = 2.2;
Bt.shadowMap.type = Wc;
document.body.appendChild(Bt.domElement);
const D_ = new I_(Bt),
  N_ = new oa(Bt);
Mt.environment = N_.fromScene(D_).texture;
window.addEventListener("resize", O_);
const Zi = new ba(16776955, 1.5);
Zi.castShadow = !0;
Zi.shadow.bias = -1e-4;
Zi.position.set(-10, 12.5, 5);
Zi.shadow.mapSize.width = 2048;
Zi.shadow.mapSize.height = 2048;
Mt.add(Zi);
const $i = new ba(16776955, 1);
$i.castShadow = !0;
$i.shadow.bias = -1e-4;
$i.position.set(-15, 15, 10);
$i.shadow.mapSize.width = 2048;
$i.shadow.mapSize.height = 2048;
Mt.add($i);
const U_ = new zg(16776955, 0.5);
Mt.add(U_);
function O_() {
  (Ee.aspect = window.innerWidth / window.innerHeight),
    Ee.updateProjectionMatrix(),
    Bt.setSize(window.innerWidth, window.innerHeight);
}
new P_(Ee, Bt.domElement);
const sn = new Zg();
sn.load(
  "./shelf.glb",
  function (s) {
    s.scene.traverse(function (e) {
      (e.castShadow = !0), (e.receiveShadow = !0);
      const t = e.material;
      t &&
        t.name != "Metal" &&
        ((e.material = new jt()),
        (e.material.color = t.color),
        (e.material.shininess = 100),
        (e.material.roughness = 0),
        (e.material.flatShading = !0));
    }),
      s.scene.position.set(0, -1, 0),
      s.scene,
      Mt.add(s.scene);
  },
  void 0,
  function (s) {
    console.error(s);
  }
);
sn.load(
  "./coffee grinder.glb",
  function (s) {
    s.scene.traverse(function (e) {
      (e.castShadow = !0), (e.receiveShadow = !0);
      const t = e.material;
      t &&
        t.name != "Metal" &&
        t.name != "Glass" &&
        ((e.material = new jt()),
        (e.material.color = t.color),
        (e.material.shininess = 100),
        (e.material.roughness = 0),
        (e.material.flatShading = !0));
    }),
      s.scene.position.set(-0.75, 0.755, 0.1),
      s.scene,
      Mt.add(s.scene);
  },
  void 0,
  function (s) {
    console.error(s);
  }
);
sn.load(
  "./radio.glb",
  function (s) {
    s.scene.traverse(function (e) {
      (e.castShadow = !0), (e.receiveShadow = !0);
      const t = e.material;
      t &&
        ((e.material = new jt()),
        (e.material.color = t.color),
        (e.material.shininess = 50),
        (e.material.roughness = 65),
        (e.material.flatShading = !0));
    }),
      s.scene.position.set(-0.25, -0.12, 0.25),
      s.scene,
      Mt.add(s.scene);
  },
  void 0,
  function (s) {
    console.error(s);
  }
);
sn.load(
  "./clock.glb",
  function (s) {
    s.scene.traverse(function (e) {
      (e.castShadow = !0), (e.receiveShadow = !0);
      const t = e.material;
      t &&
        t.name != "Glass" &&
        ((e.material = new jt()),
        (e.material.color = t.color),
        (e.material.flatShading = !0),
        (e.material.shininess = 100),
        t.name.includes("Gloss")
          ? (e.material.roughness = 10)
          : (e.material.roughness = 100));
    }),
      s.scene.position.set(1, -0.1625, 0.1),
      s.scene,
      Mt.add(s.scene);
  },
  void 0,
  function (s) {
    console.error(s);
  }
);
sn.load(
  "./large speaker.glb",
  function (s) {
    s.scene.traverse(function (e) {
      (e.castShadow = !0), (e.receiveShadow = !0);
    }),
      s.scene.position.set(-1.375, 0.22, 0.25),
      s.scene,
      Mt.add(s.scene);
  },
  void 0,
  function (s) {
    console.error(s);
  }
);
sn.load(
  "./record player.glb",
  function (s) {
    s.scene.traverse(function (e) {
      (e.castShadow = !0), (e.receiveShadow = !0);
      const t = e.material;
      t &&
        t.name.includes("Paint") &&
        ((e.material = new jt()),
        (e.material.color = t.color),
        (e.material.flatShading = !0),
        (e.material.shininess = 100),
        (e.material.roughness = 40));
    }),
      s.scene.position.set(0.375, -0.423, 0.35),
      s.scene,
      Mt.add(s.scene);
  },
  void 0,
  function (s) {
    console.error(s);
  }
);
sn.load(
  "./juicer.glb",
  function (s) {
    s.scene.traverse(function (e) {
      (e.castShadow = !0), (e.receiveShadow = !0);
      const t = e.material;
      t &&
        ((e.material = new jt()),
        (e.material.color = t.color),
        (e.material.flatShading = !0),
        (e.material.shininess = 100),
        !t.name.includes("Black") || !t.name.includes("Red")
          ? (e.material.roughness = 0)
          : (e.material.roughness = 100));
    }),
      s.scene.position.set(-0.6, 0.865, 0.1),
      s.scene,
      Mt.add(s.scene);
  },
  void 0,
  function (s) {
    console.error(s);
  }
);
sn.load(
  "./fan.glb",
  function (s) {
    s.scene.traverse(function (e) {
      (e.castShadow = !0), (e.receiveShadow = !0);
      const t = e.material;
      t &&
        t.name.includes("Matte") &&
        ((e.material = new jt()),
        (e.material.color = t.color),
        (e.material.flatShading = !0),
        (e.material.shininess = 100),
        t.name.includes("Matte")
          ? (e.material.roughness = 50)
          : (e.material.roughness = 100));
    }),
      s.scene.position.set(0.3, 0.825, 0.1),
      s.scene,
      Mt.add(s.scene);
  },
  void 0,
  function (s) {
    console.error(s);
  }
);
sn.load(
  "./razor.glb",
  function (s) {
    s.scene.traverse(function (e) {
      (e.castShadow = !0), (e.receiveShadow = !0);
      const t = e.material;
      t &&
        t.name.includes("Paint") &&
        ((e.material = new jt()),
        (e.material.color = t.color),
        (e.material.flatShading = !0),
        (e.material.shininess = 100),
        (e.material.roughness = 25));
    }),
      s.scene.position.set(0.575, 0.348, 0.1),
      s.scene,
      Mt.add(s.scene);
  },
  void 0,
  function (s) {
    console.error(s);
  }
);
sn.load(
  "./tp 1.glb",
  function (s) {
    s.scene.traverse(function (e) {
      (e.castShadow = !0), (e.receiveShadow = !0);
      const t = e.material;
      t &&
        t.name.includes("Paint") &&
        ((e.material = new jt()),
        (e.material.color = t.color),
        (e.material.flatShading = !0),
        (e.material.shininess = 100),
        t.name.includes("Translucent")
          ? ((e.material.roughness = 0), (e.material.opacity = 60))
          : t.name.includes("Red") ||
            t.name.includes("Brown") ||
            t.name.includes("White")
          ? (e.material.roughness = 100)
          : (e.material.roughness = 50));
    }),
      s.scene.position.set(-0.575, -0.042, 0.25),
      s.scene,
      Mt.add(s.scene);
  },
  void 0,
  function (s) {
    console.error(s);
  }
);
sn.load(
  "./calculator.glb",
  function (s) {
    s.scene.traverse(function (e) {
      (e.castShadow = !0), (e.receiveShadow = !0);
      const t = e.material;
      t &&
        t.name.includes("Paint") &&
        ((e.material = new jt()),
        (e.material.color = t.color),
        (e.material.flatShading = !0),
        (e.material.shininess = 100),
        t.name == "Paint"
          ? (e.material.roughness = 50)
          : (e.material.roughness = 25));
    }),
      s.scene.position.set(1.2, -0.155, 0.2),
      (s.scene.rotation.x = -90 * (Math.PI / 180)),
      (s.scene.rotation.z = -60 * (Math.PI / 180)),
      s.scene,
      Mt.add(s.scene);
  },
  void 0,
  function (s) {
    console.error(s);
  }
);
const F_ = new Vn(50, 50, 0.01),
  B_ = new jt({ color: 15987699 }),
  li = new tt(F_, B_);
li.castShadow = !0;
li.receiveShadow = !0;
li.position.set(0, 0.25, 0);
li.material.shininess = 100;
li.material.roughness = 0;
li.material.flatShading = !0;
Mt.add(li);
const z_ = new Vn(50, 0.01, 3.5),
  H_ = new jt({ color: 10724259 }),
  ui = new tt(z_, H_);
ui.castShadow = !0;
ui.receiveShadow = !0;
ui.position.set(0, -1.5, 1.75);
ui.material.shininess = 100;
ui.material.roughness = 0;
ui.material.flatShading = !0;
Mt.add(ui);
function ie(s, e, t) {
  return (1 - t) * s + t * e;
}
function se(s, e) {
  return (nr - s) / (e - s);
}
const zt = [];
let ct = -0.075,
  lt = 0,
  ut = 0;
const Ca = document.querySelector("#section-0 .section-content"),
  La = document.querySelector("#section-1 .section-content"),
  Pa = document.querySelector("#section-2 .section-content"),
  Ia = document.querySelector("#section-3 .section-content"),
  Da = document.querySelector("#section-4 .section-content"),
  Na = document.querySelector("#section-5 .section-content"),
  Ua = document.querySelector("#section-6 .section-content"),
  Oa = document.querySelector("#section-7 .section-content"),
  Fa = document.querySelector("#section-8 .section-content"),
  Ba = document.querySelector("#section-9 .section-content"),
  za = document.querySelector("#section-10 .section-content"),
  G_ = document.querySelector("#section-11 .section-content");
zt.push({
  start: 0,
  end: 3,
  func: () => {
    Ee.position.set(-0.075, 0, 3),
      Ee.lookAt(ct, lt, ut),
      (Ca.style.opacity = 1);
  },
});
zt.push({
  start: 3,
  end: 10,
  func: () => {
    (ct = ie(-0.075, 0.385, se(3, 10))),
      (lt = ie(0, 0.85, se(3, 10))),
      (ut = ie(0, 0.35, se(3, 10))),
      (Ee.position.x = ie(-0.075, 0.385, se(3, 10))),
      (Ee.position.y = ie(0, 0.85, se(3, 10))),
      (Ee.position.z = ie(3, 0.35, se(3, 10))),
      Ee.lookAt(ct, lt, ut),
      (Ca.style.opacity = ie(1, 0, se(3, 5))),
      (La.style.opacity = ie(0, 1, se(9.5, 10)));
  },
});
zt.push({
  start: 12,
  end: 14,
  func: () => {
    (Ee.position.z = ie(0.35, 0.5, se(12, 14))),
      Ee.lookAt(ct, lt, ut),
      (Ca.style.opacity = 0),
      (La.style.opacity = ie(1, 0, se(12, 14)));
  },
});
zt.push({
  start: 14,
  end: 19,
  func: () => {
    (ct = ie(0.385, -0.5, se(14, 19))),
      (lt = ie(0.85, 0.865, se(14, 19))),
      (ut = ie(0.35, 0.1, se(14, 19))),
      (Ee.position.x = ie(0.385, -0.65, se(14, 19))),
      (Ee.position.y = ie(0.85, 0.9, se(14, 19))),
      (Ee.position.z = ie(0.5, 0.45, se(14, 19))),
      Ee.lookAt(ct, lt, ut),
      (La.style.opacity = 0),
      (Pa.style.opacity = ie(0, 1, se(18.5, 19)));
  },
});
zt.push({
  start: 21,
  end: 28,
  func: () => {
    (ct = ie(-0.5, 0.375, se(21, 28))),
      (lt = ie(0.865, -0.15, se(21, 28))),
      (ut = ie(0.1, 0.35, se(21, 28))),
      (Ee.position.x = ie(-0.65, 0.375, se(21, 28))),
      (Ee.position.y = ie(0.9, -0.05, se(21, 28))),
      (Ee.position.z = ie(0.45, 0.9, se(21, 28))),
      Ee.lookAt(ct, lt, ut),
      (Pa.style.opacity = ie(1, 0, se(21, 23))),
      (Ia.style.opacity = ie(0, 1, se(27.5, 28)));
  },
});
zt.push({
  start: 30,
  end: 37,
  func: () => {
    (ct = ie(0.375, 1.45, se(30, 37))),
      (lt = ie(-0.15, -2.5, se(30, 37))),
      (ut = ie(0.35, 0, se(30, 37))),
      (Ee.position.x = ie(0.375, 1.2, se(30, 37))),
      (Ee.position.y = ie(-0.05, 0, se(30, 37))),
      (Ee.position.z = ie(0.9, 0.25, se(30, 37))),
      Ee.lookAt(ct, lt, ut),
      (Pa.style.opacity = 0),
      (Ia.style.opacity = ie(1, 0, se(30, 32))),
      (Da.style.opacity = ie(0, 1, se(36.5, 37)));
  },
});
zt.push({
  start: 39,
  end: 46,
  func: () => {
    (ct = ie(1.45, 0.25, se(39, 46))),
      (lt = ie(-2.5, -0.1625, se(39, 46))),
      (ut = ie(0, -5, se(39, 46))),
      (Ee.position.x = ie(1.2, 1.05, se(39, 46))),
      (Ee.position.y = ie(0, -0.12, se(39, 46))),
      (Ee.position.z = ie(0.25, 0.2, se(39, 46))),
      Ee.lookAt(ct, lt, ut),
      (Ia.style.opacity = 0),
      (Da.style.opacity = ie(1, 0, se(39, 41))),
      (Na.style.opacity = ie(0, 1, se(45.5, 46)));
  },
});
zt.push({
  start: 48,
  end: 55,
  func: () => {
    (ct = ie(0.25, -3.6, se(48, 55))),
      (lt = ie(-0.1625, -0.25, se(48, 55))),
      (ut = ie(-5, -4, se(48, 55))),
      (Ee.position.x = ie(1.05, -1, se(48, 55))),
      (Ee.position.y = ie(-0.12, 0.3, se(48, 55))),
      (Ee.position.z = ie(0.2, 1.05, se(48, 55))),
      Ee.lookAt(ct, lt, ut),
      (Da.style.opacity = 0),
      (Na.style.opacity = ie(1, 0, se(48, 50))),
      (Ua.style.opacity = ie(0, 1, se(54.5, 55)));
  },
});
zt.push({
  start: 57,
  end: 64,
  func: () => {
    (ct = ie(-3.6, -0.68, se(57, 64))),
      (lt = ie(-0.25, -0.01, se(57, 64))),
      (ut = ie(-4, 0.25, se(57, 64))),
      (Ee.position.x = ie(-1, -0.68, se(57, 64))),
      (Ee.position.y = ie(0.3, -0.01, se(57, 64))),
      (Ee.position.z = ie(1.05, 0.48, se(57, 64))),
      Ee.lookAt(ct, lt, ut),
      (Na.style.opacity = 0),
      (Ua.style.opacity = ie(1, 0, se(57, 59))),
      (Oa.style.opacity = ie(0, 1, se(63.5, 64)));
  },
});
zt.push({
  start: 66,
  end: 73,
  func: () => {
    (ct = ie(-0.68, -0.25, se(66, 73))),
      (lt = ie(-0.01, -0.08, se(66, 73))),
      (ut = ie(0.25, -0.25, se(66, 73))),
      (Ee.position.x = ie(-0.68, -0.25, se(66, 73))),
      (Ee.position.y = ie(-0.01, -0.08, se(66, 73))),
      (Ee.position.z = ie(0.48, 0.37, se(66, 73))),
      Ee.lookAt(ct, lt, ut),
      (Ua.style.opacity = 0),
      (Oa.style.opacity = ie(1, 0, se(66, 68))),
      (Fa.style.opacity = ie(0, 1, se(72.5, 73)));
  },
});
zt.push({
  start: 75,
  end: 82,
  func: () => {
    (ct = ie(-0.25, 0.625, se(75, 82))),
      (lt = ie(-0.08, 0.348, se(75, 82))),
      (ut = ie(-0.25, 0.1, se(75, 82))),
      (Ee.position.x = ie(-0.25, 0.57, se(75, 82))),
      (Ee.position.y = ie(-0.08, 0.37, se(75, 82))),
      (Ee.position.z = ie(0.37, 0.21, se(75, 82))),
      Ee.lookAt(ct, lt, ut),
      (Oa.style.opacity = 0),
      (Fa.style.opacity = ie(1, 0, se(75, 77))),
      (Ba.style.opacity = ie(0, 1, se(81.5, 82)));
  },
});
zt.push({
  start: 84,
  end: 91,
  func: () => {
    (ct = ie(0.625, -0.77, se(84, 91))),
      (lt = ie(0.348, 0.86, se(84, 91))),
      (ut = ie(0.1, 0.1, se(84, 91))),
      (Ee.position.x = ie(0.57, -0.72, se(84, 91))),
      (Ee.position.y = ie(0.37, 0.95, se(84, 91))),
      (Ee.position.z = ie(0.21, 0.2, se(84, 91))),
      Ee.lookAt(ct, lt, ut),
      (Fa.style.opacity = 0),
      (Ba.style.opacity = ie(1, 0, se(84, 86))),
      (za.style.opacity = ie(0, 1, se(90.5, 91)));
  },
});
zt.push({
  start: 93,
  end: 100,
  func: () => {
    (ct = ie(-0.77, -0.075, se(93, 100))),
      (lt = ie(0.82, 0, se(93, 100))),
      (ut = ie(0.1, 0, se(93, 100))),
      (Ee.position.x = ie(-0.72, -0.075, se(93, 100))),
      (Ee.position.y = ie(0.93, 0, se(93, 100))),
      (Ee.position.z = ie(0.22, 3, se(93, 100))),
      Ee.lookAt(ct, lt, ut),
      (Ba.style.opacity = 0),
      (za.style.opacity = ie(1, 0, se(93, 95))),
      (G_.style.opacity = ie(0, 1, se(98, 100)));
  },
});
zt.push({
  start: 100,
  end: 101,
  func: () => {
    za.style.opacity = 0;
  },
});
function k_() {
  zt.forEach((s) => {
    nr >= s.start && nr < s.end && s.func();
  });
}
let nr = 0;
document.body.onscroll = () => {
  nr =
    ((document.documentElement.scrollTop || document.body.scrollTop) /
      ((document.documentElement.scrollHeight || document.body.scrollHeight) -
        document.documentElement.clientHeight)) *
    100;
};
function Ul() {
  requestAnimationFrame(Ul), k_(), V_();
}
function V_() {
  Bt.render(Mt, Ee);
}
window.scrollTo({ top: 0, behavior: "smooth" });
Ul();
