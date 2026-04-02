const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./M1OgRyYf.js", "./CXeV7ihc.js", "./CjVSNORA.js", "./hr.X4t-x9Gn.css", "./CkJP0E9D.js", "./container.BUNmvZ1r.css", "./section-header.gw6o7OhG.css", "./mCKvaLGK.js", "./CwlqH8DP.js", "./img.BjnyH3_8.css", "./BEHeMmIQ.js", "./card.CgN4ca8R.css", "./BrutUTh7.js", "./demo.2b7Ip-t2.css", "./BnogDYPU.js", "./dmca.C4SZBRJ5.css", "./DqMGKk6y.js", "./about.DRE2k3QS.css", "./BKVX1gVZ.js", "./D-MHwYBq.js", "./poster-grid.DJBv0lVv.css", "./U4fP8kT2.js", "./DotAJW6-.js", "./w5Oj2UDB.js", "./BRxHM_IV.js", "./Bb8yeJEj.js", "./index.CT8FOjOy.css", "./DfXvAhF6.js", "./search.D0Tz_N_g.css", "./oGBHckU3.js", "./contact.yvH1U-vb.css", "./t8iG_zUS.js", "./DhweqwZN.js", "./grid.BZlevkM_.css", "./friends.BNrkVeYd.css", "./CHkIyai5.js", "./privacy.Bk1L2ARX.css", "./D6Ae-Swl.js", "./Bdc9Q5OK.js", "./pagination.Bdf_UCqy.css", "./index.MZF_irUq.css", "./_Fayk8Ku.js", "./YRR_l6iU.js", "./useFavorites.Be7HcbaJ.css", "./favorites.bTXdF1U1.css", "./CzM9z1ov.js", "./index.DFnFlEQ-.css", "./BWnD46gJ.js", "./Ccg1G0gM.js", "./useEmbedUrls.BYxUWq2r.css", "./watch-_slug_-online-free-_id_.AtQjdWBg.css", "./C3hJYGkc.js", "./watch-_...CFvydfOs.css", "./BOtm-3JB.js", "./default.LADdhPG5.css"]))) => i.map(i => d[i]);
var Wu = Object.defineProperty;
var qu = (e, t, n) => t in e ? Wu(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var $t = (e, t, n) => qu(e, typeof t != "symbol" ? t + "" : t, n);
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const i of s.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
})();
/**
 * @vue/shared v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function Fs(e) {
    const t = Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return n => n in t
}
const Ee = {},
    wn = [],
    mt = () => {},
    zu = () => !1,
    pr = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Us = e => e.startsWith("onUpdate:"),
    Le = Object.assign,
    Bs = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    Gu = Object.prototype.hasOwnProperty,
    _e = (e, t) => Gu.call(e, t),
    ae = Array.isArray,
    En = e => hr(e) === "[object Map]",
    al = e => hr(e) === "[object Set]",
    Qu = e => hr(e) === "[object RegExp]",
    le = e => typeof e == "function",
    Re = e => typeof e == "string",
    At = e => typeof e == "symbol",
    Te = e => e !== null && typeof e == "object",
    Vs = e => (Te(e) || le(e)) && le(e.then) && le(e.catch),
    ll = Object.prototype.toString,
    hr = e => ll.call(e),
    Yu = e => hr(e).slice(8, -1),
    cl = e => hr(e) === "[object Object]",
    Ks = e => Re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Sn = Fs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    co = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    },
    Ju = /-(\w)/g,
    at = co(e => e.replace(Ju, (t, n) => n ? n.toUpperCase() : "")),
    Xu = /\B([A-Z])/g,
    Qt = co(e => e.replace(Xu, "-$1").toLowerCase()),
    uo = co(e => e.charAt(0).toUpperCase() + e.slice(1)),
    Ro = co(e => e ? `on${uo(e)}` : ""),
    zt = (e, t) => !Object.is(e, t),
    Tn = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t)
    },
    es = (e, t, n, r = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: r,
            value: n
        })
    },
    ts = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    },
    ul = e => {
        const t = Re(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let Pi;
const fo = () => Pi || (Pi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Ws(e) {
    if (ae(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n],
                o = Re(r) ? nf(r) : Ws(r);
            if (o)
                for (const s in o) t[s] = o[s]
        }
        return t
    } else if (Re(e) || Te(e)) return e
}
const Zu = /;(?![^(]*\))/g,
    ef = /:([^]+)/,
    tf = /\/\*[^]*?\*\//g;

function nf(e) {
    const t = {};
    return e.replace(tf, "").split(Zu).forEach(n => {
        if (n) {
            const r = n.split(ef);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }), t
}

function qs(e) {
    let t = "";
    if (Re(e)) t = e;
    else if (ae(e))
        for (let n = 0; n < e.length; n++) {
            const r = qs(e[n]);
            r && (t += r + " ")
        } else if (Te(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}
const rf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    of = Fs(rf);

function fl(e) {
    return !!e || e === ""
}
const dl = e => !!(e && e.__v_isRef === !0),
    ns = e => Re(e) ? e : e == null ? "" : ae(e) || Te(e) && (e.toString === ll || !le(e.toString)) ? dl(e) ? ns(e.value) : JSON.stringify(e, pl, 2) : String(e),
    pl = (e, t) => dl(t) ? pl(e, t.value) : En(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, o], s) => (n[Po(r, s) + " =>"] = o, n), {})
    } : al(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(n => Po(n))
    } : At(t) ? Po(t) : Te(t) && !ae(t) && !cl(t) ? String(t) : t,
    Po = (e, t = "") => {
        var n;
        return At(e) ? `Symbol(${(n=e.description)!=null?n:t})` : e
    };
/**
 * @vue/reactivity v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Be;
class hl {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Be, !t && Be && (this.index = (Be.scopes || (Be.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = Be;
            try {
                return Be = this, t()
            } finally {
                Be = n
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = Be, Be = this)
    }
    off() {
        this._on > 0 && --this._on === 0 && (Be = this.prevScope, this.prevScope = void 0)
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, r;
            for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
            for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
            if (this.cleanups.length = 0, this.scopes) {
                for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index)
            }
            this.parent = void 0
        }
    }
}

function sf(e) {
    return new hl(e)
}

function zs() {
    return Be
}

function af(e, t = !1) {
    Be && Be.cleanups.push(e)
}
let Se;
const ko = new WeakSet;
class gl {
    constructor(t) {
        this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Be && Be.active && Be.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65, ko.has(this) && (ko.delete(this), this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || yl(this)
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, ki(this), vl(this);
        const t = Se,
            n = ut;
        Se = this, ut = !0;
        try {
            return this.fn()
        } finally {
            bl(this), Se = t, ut = n, this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) Ys(t);
            this.deps = this.depsTail = void 0, ki(this), this.onStop && this.onStop(), this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? ko.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        rs(this) && this.run()
    }
    get dirty() {
        return rs(this)
    }
}
let ml = 0,
    Gn, Qn;

function yl(e, t = !1) {
    if (e.flags |= 8, t) {
        e.next = Qn, Qn = e;
        return
    }
    e.next = Gn, Gn = e
}

function Gs() {
    ml++
}

function Qs() {
    if (--ml > 0) return;
    if (Qn) {
        let t = Qn;
        for (Qn = void 0; t;) {
            const n = t.next;
            t.next = void 0, t.flags &= -9, t = n
        }
    }
    let e;
    for (; Gn;) {
        let t = Gn;
        for (Gn = void 0; t;) {
            const n = t.next;
            if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
                t.trigger()
            } catch (r) {
                e || (e = r)
            }
            t = n
        }
    }
    if (e) throw e
}

function vl(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function bl(e) {
    let t, n = e.depsTail,
        r = n;
    for (; r;) {
        const o = r.prevDep;
        r.version === -1 ? (r === n && (n = o), Ys(r), lf(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o
    }
    e.deps = t, e.depsTail = n
}

function rs(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (_l(t.dep.computed) || t.dep.version !== t.version)) return !0;
    return !!e._dirty
}

function _l(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === rr) || (e.globalVersion = rr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !rs(e)))) return;
    e.flags |= 2;
    const t = e.dep,
        n = Se,
        r = ut;
    Se = e, ut = !0;
    try {
        vl(e);
        const o = e.fn(e._value);
        (t.version === 0 || zt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++)
    } catch (o) {
        throw t.version++, o
    } finally {
        Se = n, ut = r, bl(e), e.flags &= -3
    }
}

function Ys(e, t = !1) {
    const {
        dep: n,
        prevSub: r,
        nextSub: o
    } = e;
    if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
        n.computed.flags &= -5;
        for (let s = n.computed.deps; s; s = s.nextDep) Ys(s, !0)
    }!t && !--n.sc && n.map && n.map.delete(n.key)
}

function lf(e) {
    const {
        prevDep: t,
        nextDep: n
    } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0)
}
let ut = !0;
const wl = [];

function Ct() {
    wl.push(ut), ut = !1
}

function Rt() {
    const e = wl.pop();
    ut = e === void 0 ? !0 : e
}

function ki(e) {
    const {
        cleanup: t
    } = e;
    if (e.cleanup = void 0, t) {
        const n = Se;
        Se = void 0;
        try {
            t()
        } finally {
            Se = n
        }
    }
}
let rr = 0;
class cf {
    constructor(t, n) {
        this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class po {
    constructor(t) {
        this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0
    }
    track(t) {
        if (!Se || !ut || Se === this.computed) return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== Se) n = this.activeLink = new cf(Se, this), Se.deps ? (n.prevDep = Se.depsTail, Se.depsTail.nextDep = n, Se.depsTail = n) : Se.deps = Se.depsTail = n, El(n);
        else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
            const r = n.nextDep;
            r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Se.depsTail, n.nextDep = void 0, Se.depsTail.nextDep = n, Se.depsTail = n, Se.deps === n && (Se.deps = r)
        }
        return n
    }
    trigger(t) {
        this.version++, rr++, this.notify(t)
    }
    notify(t) {
        Gs();
        try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
        } finally {
            Qs()
        }
    }
}

function El(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let r = t.deps; r; r = r.nextDep) El(r)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
    }
}
const Ur = new WeakMap,
    rn = Symbol(""),
    os = Symbol(""),
    or = Symbol("");

function Ve(e, t, n) {
    if (ut && Se) {
        let r = Ur.get(e);
        r || Ur.set(e, r = new Map);
        let o = r.get(n);
        o || (r.set(n, o = new po), o.map = r, o.key = n), o.track()
    }
}

function Et(e, t, n, r, o, s) {
    const i = Ur.get(e);
    if (!i) {
        rr++;
        return
    }
    const a = l => {
        l && l.trigger()
    };
    if (Gs(), t === "clear") i.forEach(a);
    else {
        const l = ae(e),
            u = l && Ks(n);
        if (l && n === "length") {
            const c = Number(r);
            i.forEach((f, d) => {
                (d === "length" || d === or || !At(d) && d >= c) && a(f)
            })
        } else switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(or)), t) {
        case "add":
            l ? u && a(i.get("length")) : (a(i.get(rn)), En(e) && a(i.get(os)));
            break;
        case "delete":
            l || (a(i.get(rn)), En(e) && a(i.get(os)));
            break;
        case "set":
            En(e) && a(i.get(rn));
            break
        }
    }
    Qs()
}

function uf(e, t) {
    const n = Ur.get(e);
    return n && n.get(t)
}

function gn(e) {
    const t = me(e);
    return t === e ? t : (Ve(t, "iterate", or), it(e) ? t : t.map(De))
}

function ho(e) {
    return Ve(e = me(e), "iterate", or), e
}
const ff = {
    __proto__: null,
    [Symbol.iterator]() {
        return Ao(this, Symbol.iterator, De)
    },
    concat(...e) {
        return gn(this).concat(...e.map(t => ae(t) ? gn(t) : t))
    },
    entries() {
        return Ao(this, "entries", e => (e[1] = De(e[1]), e))
    },
    every(e, t) {
        return vt(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return vt(this, "filter", e, t, n => n.map(De), arguments)
    },
    find(e, t) {
        return vt(this, "find", e, t, De, arguments)
    },
    findIndex(e, t) {
        return vt(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return vt(this, "findLast", e, t, De, arguments)
    },
    findLastIndex(e, t) {
        return vt(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return vt(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return Oo(this, "includes", e)
    },
    indexOf(...e) {
        return Oo(this, "indexOf", e)
    },
    join(e) {
        return gn(this).join(e)
    },
    lastIndexOf(...e) {
        return Oo(this, "lastIndexOf", e)
    },
    map(e, t) {
        return vt(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return Nn(this, "pop")
    },
    push(...e) {
        return Nn(this, "push", e)
    },
    reduce(e, ...t) {
        return Ai(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return Ai(this, "reduceRight", e, t)
    },
    shift() {
        return Nn(this, "shift")
    },
    some(e, t) {
        return vt(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return Nn(this, "splice", e)
    },
    toReversed() {
        return gn(this).toReversed()
    },
    toSorted(e) {
        return gn(this).toSorted(e)
    },
    toSpliced(...e) {
        return gn(this).toSpliced(...e)
    },
    unshift(...e) {
        return Nn(this, "unshift", e)
    },
    values() {
        return Ao(this, "values", De)
    }
};

function Ao(e, t, n) {
    const r = ho(e),
        o = r[t]();
    return r !== e && !it(e) && (o._next = o.next, o.next = () => {
        const s = o._next();
        return s.value && (s.value = n(s.value)), s
    }), o
}
const df = Array.prototype;

function vt(e, t, n, r, o, s) {
    const i = ho(e),
        a = i !== e && !it(e),
        l = i[t];
    if (l !== df[t]) {
        const f = l.apply(e, s);
        return a ? De(f) : f
    }
    let u = n;
    i !== e && (a ? u = function (f, d) {
        return n.call(this, De(f), d, e)
    } : n.length > 2 && (u = function (f, d) {
        return n.call(this, f, d, e)
    }));
    const c = l.call(i, u, r);
    return a && o ? o(c) : c
}

function Ai(e, t, n, r) {
    const o = ho(e);
    let s = n;
    return o !== e && (it(e) ? n.length > 3 && (s = function (i, a, l) {
        return n.call(this, i, a, l, e)
    }) : s = function (i, a, l) {
        return n.call(this, i, De(a), l, e)
    }), o[t](s, ...r)
}

function Oo(e, t, n) {
    const r = me(e);
    Ve(r, "iterate", or);
    const o = r[t](...n);
    return (o === -1 || o === !1) && Zs(n[0]) ? (n[0] = me(n[0]), r[t](...n)) : o
}

function Nn(e, t, n = []) {
    Ct(), Gs();
    const r = me(e)[t].apply(e, n);
    return Qs(), Rt(), r
}
const pf = Fs("__proto__,__v_isRef,__isVue"),
    Sl = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(At));

function hf(e) {
    At(e) || (e = String(e));
    const t = me(this);
    return Ve(t, "has", e), t.hasOwnProperty(e)
}
class Tl {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._isShallow = n
    }
    get(t, n, r) {
        if (n === "__v_skip") return t.__v_skip;
        const o = this._isReadonly,
            s = this._isShallow;
        if (n === "__v_isReactive") return !o;
        if (n === "__v_isReadonly") return o;
        if (n === "__v_isShallow") return s;
        if (n === "__v_raw") return r === (o ? s ? Tf : Pl : s ? Rl : Cl).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const i = ae(t);
        if (!o) {
            let l;
            if (i && (l = ff[n])) return l;
            if (n === "hasOwnProperty") return hf
        }
        const a = Reflect.get(t, n, Oe(t) ? t : r);
        return (At(n) ? Sl.has(n) : pf(n)) || (o || Ve(t, "get", n), s) ? a : Oe(a) ? i && Ks(n) ? a : a.value : Te(a) ? o ? kl(a) : Yt(a) : a
    }
}
class xl extends Tl {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, n, r, o) {
        let s = t[n];
        if (!this._isShallow) {
            const l = Pt(s);
            if (!it(r) && !Pt(r) && (s = me(s), r = me(r)), !ae(t) && Oe(s) && !Oe(r)) return l ? !1 : (s.value = r, !0)
        }
        const i = ae(t) && Ks(n) ? Number(n) < t.length : _e(t, n),
            a = Reflect.set(t, n, r, Oe(t) ? t : o);
        return t === me(o) && (i ? zt(r, s) && Et(t, "set", n, r) : Et(t, "add", n, r)), a
    }
    deleteProperty(t, n) {
        const r = _e(t, n);
        t[n];
        const o = Reflect.deleteProperty(t, n);
        return o && r && Et(t, "delete", n, void 0), o
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!At(n) || !Sl.has(n)) && Ve(t, "has", n), r
    }
    ownKeys(t) {
        return Ve(t, "iterate", ae(t) ? "length" : rn), Reflect.ownKeys(t)
    }
}
class gf extends Tl {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const mf = new xl,
    yf = new gf,
    vf = new xl(!0);
const ss = e => e,
    wr = e => Reflect.getPrototypeOf(e);

function bf(e, t, n) {
    return function (...r) {
        const o = this.__v_raw,
            s = me(o),
            i = En(s),
            a = e === "entries" || e === Symbol.iterator && i,
            l = e === "keys" && i,
            u = o[e](...r),
            c = n ? ss : t ? Br : De;
        return !t && Ve(s, "iterate", l ? os : rn), {
            next() {
                const {
                    value: f,
                    done: d
                } = u.next();
                return d ? {
                    value: f,
                    done: d
                } : {
                    value: a ? [c(f[0]), c(f[1])] : c(f),
                    done: d
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Er(e) {
    return function (...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function _f(e, t) {
    const n = {
        get(o) {
            const s = this.__v_raw,
                i = me(s),
                a = me(o);
            e || (zt(o, a) && Ve(i, "get", o), Ve(i, "get", a));
            const {
                has: l
            } = wr(i), u = t ? ss : e ? Br : De;
            if (l.call(i, o)) return u(s.get(o));
            if (l.call(i, a)) return u(s.get(a));
            s !== i && s.get(o)
        },
        get size() {
            const o = this.__v_raw;
            return !e && Ve(me(o), "iterate", rn), Reflect.get(o, "size", o)
        },
        has(o) {
            const s = this.__v_raw,
                i = me(s),
                a = me(o);
            return e || (zt(o, a) && Ve(i, "has", o), Ve(i, "has", a)), o === a ? s.has(o) : s.has(o) || s.has(a)
        },
        forEach(o, s) {
            const i = this,
                a = i.__v_raw,
                l = me(a),
                u = t ? ss : e ? Br : De;
            return !e && Ve(l, "iterate", rn), a.forEach((c, f) => o.call(s, u(c), u(f), i))
        }
    };
    return Le(n, e ? {
        add: Er("add"),
        set: Er("set"),
        delete: Er("delete"),
        clear: Er("clear")
    } : {
        add(o) {
            !t && !it(o) && !Pt(o) && (o = me(o));
            const s = me(this);
            return wr(s).has.call(s, o) || (s.add(o), Et(s, "add", o, o)), this
        },
        set(o, s) {
            !t && !it(s) && !Pt(s) && (s = me(s));
            const i = me(this),
                {
                    has: a,
                    get: l
                } = wr(i);
            let u = a.call(i, o);
            u || (o = me(o), u = a.call(i, o));
            const c = l.call(i, o);
            return i.set(o, s), u ? zt(s, c) && Et(i, "set", o, s) : Et(i, "add", o, s), this
        },
        delete(o) {
            const s = me(this),
                {
                    has: i,
                    get: a
                } = wr(s);
            let l = i.call(s, o);
            l || (o = me(o), l = i.call(s, o)), a && a.call(s, o);
            const u = s.delete(o);
            return l && Et(s, "delete", o, void 0), u
        },
        clear() {
            const o = me(this),
                s = o.size !== 0,
                i = o.clear();
            return s && Et(o, "clear", void 0, void 0), i
        }
    }), ["keys", "values", "entries", Symbol.iterator].forEach(o => {
        n[o] = bf(o, e, t)
    }), n
}

function Js(e, t) {
    const n = _f(e, t);
    return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(_e(n, o) && o in r ? n : r, o, s)
}
const wf = {
        get: Js(!1, !1)
    },
    Ef = {
        get: Js(!1, !0)
    },
    Sf = {
        get: Js(!0, !1)
    };
const Cl = new WeakMap,
    Rl = new WeakMap,
    Pl = new WeakMap,
    Tf = new WeakMap;

function xf(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}

function Cf(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : xf(Yu(e))
}

function Yt(e) {
    return Pt(e) ? e : Xs(e, !1, mf, wf, Cl)
}

function Wt(e) {
    return Xs(e, !1, vf, Ef, Rl)
}

function kl(e) {
    return Xs(e, !0, yf, Sf, Pl)
}

function Xs(e, t, n, r, o) {
    if (!Te(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const s = Cf(e);
    if (s === 0) return e;
    const i = o.get(e);
    if (i) return i;
    const a = new Proxy(e, s === 2 ? r : n);
    return o.set(e, a), a
}

function on(e) {
    return Pt(e) ? on(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Pt(e) {
    return !!(e && e.__v_isReadonly)
}

function it(e) {
    return !!(e && e.__v_isShallow)
}

function Zs(e) {
    return e ? !!e.__v_raw : !1
}

function me(e) {
    const t = e && e.__v_raw;
    return t ? me(t) : e
}

function Rf(e) {
    return !_e(e, "__v_skip") && Object.isExtensible(e) && es(e, "__v_skip", !0), e
}
const De = e => Te(e) ? Yt(e) : e,
    Br = e => Te(e) ? kl(e) : e;

function Oe(e) {
    return e ? e.__v_isRef === !0 : !1
}

function Ze(e) {
    return Al(e, !1)
}

function Vr(e) {
    return Al(e, !0)
}

function Al(e, t) {
    return Oe(e) ? e : new Pf(e, t)
}
class Pf {
    constructor(t, n) {
        this.dep = new po, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : me(t), this._value = n ? t : De(t), this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(), this._value
    }
    set value(t) {
        const n = this._rawValue,
            r = this.__v_isShallow || it(t) || Pt(t);
        t = r ? t : me(t), zt(t, n) && (this._rawValue = t, this._value = r ? t : De(t), this.dep.trigger())
    }
}

function xe(e) {
    return Oe(e) ? e.value : e
}

function Kr(e) {
    return le(e) ? e() : xe(e)
}
const kf = {
    get: (e, t, n) => t === "__v_raw" ? e : xe(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const o = e[t];
        return Oe(o) && !Oe(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r)
    }
};

function Ol(e) {
    return on(e) ? e : new Proxy(e, kf)
}
class Af {
    constructor(t) {
        this.__v_isRef = !0, this._value = void 0;
        const n = this.dep = new po,
            {
                get: r,
                set: o
            } = t(n.track.bind(n), n.trigger.bind(n));
        this._get = r, this._set = o
    }
    get value() {
        return this._value = this._get()
    }
    set value(t) {
        this._set(t)
    }
}

function fb(e) {
    return new Af(e)
}
class Of {
    constructor(t, n, r) {
        this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0
    }
    get value() {
        const t = this._object[this._key];
        return this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return uf(me(this._object), this._key)
    }
}
class If {
    constructor(t) {
        this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0
    }
    get value() {
        return this._value = this._getter()
    }
}

function Il(e, t, n) {
    return Oe(e) ? e : le(e) ? new If(e) : Te(e) && arguments.length > 1 ? Mf(e, t, n) : Ze(e)
}

function Mf(e, t, n) {
    const r = e[t];
    return Oe(r) ? r : new Of(e, t, n)
}
class Lf {
    constructor(t, n, r) {
        this.fn = t, this.setter = n, this._value = void 0, this.dep = new po(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = rr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r
    }
    notify() {
        if (this.flags |= 16, !(this.flags & 8) && Se !== this) return yl(this, !0), !0
    }
    get value() {
        const t = this.dep.track();
        return _l(this), t && (t.version = this.dep.version), this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}

function jf(e, t, n = !1) {
    let r, o;
    return le(e) ? r = e : (r = e.get, o = e.set), new Lf(r, o, n)
}
const Sr = {},
    Wr = new WeakMap;
let nn;

function Hf(e, t = !1, n = nn) {
    if (n) {
        let r = Wr.get(n);
        r || Wr.set(n, r = []), r.push(e)
    }
}

function $f(e, t, n = Ee) {
    const {
        immediate: r,
        deep: o,
        once: s,
        scheduler: i,
        augmentJob: a,
        call: l
    } = n, u = b => o ? b : it(b) || o === !1 || o === 0 ? St(b, 1) : St(b);
    let c, f, d, m, v = !1,
        p = !1;
    if (Oe(e) ? (f = () => e.value, v = it(e)) : on(e) ? (f = () => u(e), v = !0) : ae(e) ? (p = !0, v = e.some(b => on(b) || it(b)), f = () => e.map(b => {
            if (Oe(b)) return b.value;
            if (on(b)) return u(b);
            if (le(b)) return l ? l(b, 2) : b()
        })) : le(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
            if (d) {
                Ct();
                try {
                    d()
                } finally {
                    Rt()
                }
            }
            const b = nn;
            nn = c;
            try {
                return l ? l(e, 3, [m]) : e(m)
            } finally {
                nn = b
            }
        } : f = mt, t && o) {
        const b = f,
            S = o === !0 ? 1 / 0 : o;
        f = () => St(b(), S)
    }
    const E = zs(),
        T = () => {
            c.stop(), E && E.active && Bs(E.effects, c)
        };
    if (s && t) {
        const b = t;
        t = (...S) => {
            b(...S), T()
        }
    }
    let _ = p ? new Array(e.length).fill(Sr) : Sr;
    const g = b => {
        if (!(!(c.flags & 1) || !c.dirty && !b))
            if (t) {
                const S = c.run();
                if (o || v || (p ? S.some((P, O) => zt(P, _[O])) : zt(S, _))) {
                    d && d();
                    const P = nn;
                    nn = c;
                    try {
                        const O = [S, _ === Sr ? void 0 : p && _[0] === Sr ? [] : _, m];
                        _ = S, l ? l(t, 3, O) : t(...O)
                    } finally {
                        nn = P
                    }
                }
            } else c.run()
    };
    return a && a(g), c = new gl(f), c.scheduler = i ? () => i(g, !1) : g, m = b => Hf(b, !1, c), d = c.onStop = () => {
        const b = Wr.get(c);
        if (b) {
            if (l) l(b, 4);
            else
                for (const S of b) S();
            Wr.delete(c)
        }
    }, t ? r ? g(!0) : _ = c.run() : i ? i(g.bind(null, !0), !0) : c.run(), T.pause = c.pause.bind(c), T.resume = c.resume.bind(c), T.stop = T, T
}

function St(e, t = 1 / 0, n) {
    if (t <= 0 || !Te(e) || e.__v_skip || (n = n || new Set, n.has(e))) return e;
    if (n.add(e), t--, Oe(e)) St(e.value, t, n);
    else if (ae(e))
        for (let r = 0; r < e.length; r++) St(e[r], t, n);
    else if (al(e) || En(e)) e.forEach(r => {
        St(r, t, n)
    });
    else if (cl(e)) {
        for (const r in e) St(e[r], t, n);
        for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && St(e[r], t, n)
    }
    return e
}
/**
 * @vue/runtime-core v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function gr(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (o) {
        Mn(o, t, n)
    }
}

function ft(e, t, n, r) {
    if (le(e)) {
        const o = gr(e, t, n, r);
        return o && Vs(o) && o.catch(s => {
            Mn(s, t, n)
        }), o
    }
    if (ae(e)) {
        const o = [];
        for (let s = 0; s < e.length; s++) o.push(ft(e[s], t, n, r));
        return o
    }
}

function Mn(e, t, n, r = !0) {
    const o = t ? t.vnode : null,
        {
            errorHandler: s,
            throwUnhandledErrorInProduction: i
        } = t && t.appContext.config || Ee;
    if (t) {
        let a = t.parent;
        const l = t.proxy,
            u = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; a;) {
            const c = a.ec;
            if (c) {
                for (let f = 0; f < c.length; f++)
                    if (c[f](e, l, u) === !1) return
            }
            a = a.parent
        }
        if (s) {
            Ct(), gr(s, null, 10, [e, l, u]), Rt();
            return
        }
    }
    Df(e, n, o, r, i)
}

function Df(e, t, n, r = !0, o = !1) {
    if (o) throw e;
    console.error(e)
}
const Ye = [];
let ht = -1;
const xn = [];
let Nt = null,
    yn = 0;
const Ml = Promise.resolve();
let qr = null;

function Ln(e) {
    const t = qr || Ml;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function Nf(e) {
    let t = ht + 1,
        n = Ye.length;
    for (; t < n;) {
        const r = t + n >>> 1,
            o = Ye[r],
            s = sr(o);
        s < e || s === e && o.flags & 2 ? t = r + 1 : n = r
    }
    return t
}

function ei(e) {
    if (!(e.flags & 1)) {
        const t = sr(e),
            n = Ye[Ye.length - 1];
        !n || !(e.flags & 2) && t >= sr(n) ? Ye.push(e) : Ye.splice(Nf(t), 0, e), e.flags |= 1, Ll()
    }
}

function Ll() {
    qr || (qr = Ml.then(jl))
}

function is(e) {
    ae(e) ? xn.push(...e) : Nt && e.id === -1 ? Nt.splice(yn + 1, 0, e) : e.flags & 1 || (xn.push(e), e.flags |= 1), Ll()
}

function Oi(e, t, n = ht + 1) {
    for (; n < Ye.length; n++) {
        const r = Ye[n];
        if (r && r.flags & 2) {
            if (e && r.id !== e.uid) continue;
            Ye.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2)
        }
    }
}

function zr(e) {
    if (xn.length) {
        const t = [...new Set(xn)].sort((n, r) => sr(n) - sr(r));
        if (xn.length = 0, Nt) {
            Nt.push(...t);
            return
        }
        for (Nt = t, yn = 0; yn < Nt.length; yn++) {
            const n = Nt[yn];
            n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
        }
        Nt = null, yn = 0
    }
}
const sr = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function jl(e) {
    try {
        for (ht = 0; ht < Ye.length; ht++) {
            const t = Ye[ht];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), gr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; ht < Ye.length; ht++) {
            const t = Ye[ht];
            t && (t.flags &= -2)
        }
        ht = -1, Ye.length = 0, zr(), qr = null, (Ye.length || xn.length) && jl()
    }
}
let Fe = null,
    Hl = null;

function Gr(e) {
    const t = Fe;
    return Fe = e, Hl = e && e.type.__scopeId || null, t
}

function go(e, t = Fe, n) {
    if (!t || e._n) return e;
    const r = (...o) => {
        r._d && Vi(-1);
        const s = Gr(t);
        let i;
        try {
            i = e(...o)
        } finally {
            Gr(s), r._d && Vi(1)
        }
        return i
    };
    return r._n = !0, r._c = !0, r._d = !0, r
}

function db(e, t) {
    if (Fe === null) return e;
    const n = wo(Fe),
        r = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
        let [s, i, a, l = Ee] = t[o];
        s && (le(s) && (s = {
            mounted: s,
            updated: s
        }), s.deep && St(i), r.push({
            dir: s,
            instance: n,
            value: i,
            oldValue: void 0,
            arg: a,
            modifiers: l
        }))
    }
    return e
}

function gt(e, t, n, r) {
    const o = e.dirs,
        s = t && t.dirs;
    for (let i = 0; i < o.length; i++) {
        const a = o[i];
        s && (a.oldValue = s[i].value);
        let l = a.dir[r];
        l && (Ct(), ft(l, n, 8, [e.el, a, e, t]), Rt())
    }
}
const Ff = Symbol("_vte"),
    $l = e => e.__isTeleport,
    Ft = Symbol("_leaveCb"),
    Tr = Symbol("_enterCb");

function Uf() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return yo(() => {
        e.isMounted = !0
    }), yr(() => {
        e.isUnmounting = !0
    }), e
}
const rt = [Function, Array],
    Dl = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: rt,
        onEnter: rt,
        onAfterEnter: rt,
        onEnterCancelled: rt,
        onBeforeLeave: rt,
        onLeave: rt,
        onAfterLeave: rt,
        onLeaveCancelled: rt,
        onBeforeAppear: rt,
        onAppear: rt,
        onAfterAppear: rt,
        onAppearCancelled: rt
    },
    Nl = e => {
        const t = e.subTree;
        return t.component ? Nl(t.component) : t
    },
    Bf = {
        name: "BaseTransition",
        props: Dl,
        setup(e, {
            slots: t
        }) {
            const n = Jt(),
                r = Uf();
            return () => {
                const o = t.default && Bl(t.default(), !0);
                if (!o || !o.length) return;
                const s = Fl(o),
                    i = me(e),
                    {
                        mode: a
                    } = i;
                if (r.isLeaving) return Io(s);
                const l = Ii(s);
                if (!l) return Io(s);
                let u = as(l, i, r, n, f => u = f);
                l.type !== Ae && Pn(l, u);
                let c = n.subTree && Ii(n.subTree);
                if (c && c.type !== Ae && !ct(l, c) && Nl(n).type !== Ae) {
                    let f = as(c, i, r, n);
                    if (Pn(c, f), a === "out-in" && l.type !== Ae) return r.isLeaving = !0, f.afterLeave = () => {
                        r.isLeaving = !1, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0
                    }, Io(s);
                    a === "in-out" && l.type !== Ae ? f.delayLeave = (d, m, v) => {
                        const p = Ul(r, c);
                        p[String(c.key)] = c, d[Ft] = () => {
                            m(), d[Ft] = void 0, delete u.delayedLeave, c = void 0
                        }, u.delayedLeave = () => {
                            v(), delete u.delayedLeave, c = void 0
                        }
                    } : c = void 0
                } else c && (c = void 0);
                return s
            }
        }
    };

function Fl(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== Ae) {
                t = n;
                break
            }
    }
    return t
}
const Vf = Bf;

function Ul(e, t) {
    const {
        leavingVNodes: n
    } = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null), n.set(t.type, r)), r
}

function as(e, t, n, r, o) {
    const {
        appear: s,
        mode: i,
        persisted: a = !1,
        onBeforeEnter: l,
        onEnter: u,
        onAfterEnter: c,
        onEnterCancelled: f,
        onBeforeLeave: d,
        onLeave: m,
        onAfterLeave: v,
        onLeaveCancelled: p,
        onBeforeAppear: E,
        onAppear: T,
        onAfterAppear: _,
        onAppearCancelled: g
    } = t, b = String(e.key), S = Ul(n, e), P = (U, F) => {
        U && ft(U, r, 9, F)
    }, O = (U, F) => {
        const te = F[1];
        P(U, F), ae(U) ? U.every(W => W.length <= 1) && te() : U.length <= 1 && te()
    }, V = {
        mode: i,
        persisted: a,
        beforeEnter(U) {
            let F = l;
            if (!n.isMounted)
                if (s) F = E || l;
                else return;
            U[Ft] && U[Ft](!0);
            const te = S[b];
            te && ct(e, te) && te.el[Ft] && te.el[Ft](), P(F, [U])
        },
        enter(U) {
            let F = u,
                te = c,
                W = f;
            if (!n.isMounted)
                if (s) F = T || u, te = _ || c, W = g || f;
                else return;
            let re = !1;
            const de = U[Tr] = he => {
                re || (re = !0, he ? P(W, [U]) : P(te, [U]), V.delayedLeave && V.delayedLeave(), U[Tr] = void 0)
            };
            F ? O(F, [U, de]) : de()
        },
        leave(U, F) {
            const te = String(e.key);
            if (U[Tr] && U[Tr](!0), n.isUnmounting) return F();
            P(d, [U]);
            let W = !1;
            const re = U[Ft] = de => {
                W || (W = !0, F(), de ? P(p, [U]) : P(v, [U]), U[Ft] = void 0, S[te] === e && delete S[te])
            };
            S[te] = e, m ? O(m, [U, re]) : re()
        },
        clone(U) {
            const F = as(U, t, n, r, o);
            return o && o(F), F
        }
    };
    return V
}

function Io(e) {
    if (mr(e)) return e = kt(e), e.children = null, e
}

function Ii(e) {
    if (!mr(e)) return $l(e.type) && e.children ? Fl(e.children) : e;
    if (e.component) return e.component.subTree;
    const {
        shapeFlag: t,
        children: n
    } = e;
    if (n) {
        if (t & 16) return n[0];
        if (t & 32 && le(n.default)) return n.default()
    }
}

function Pn(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, Pn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Bl(e, t = !1, n) {
    let r = [],
        o = 0;
    for (let s = 0; s < e.length; s++) {
        let i = e[s];
        const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
        i.type === Ke ? (i.patchFlag & 128 && o++, r = r.concat(Bl(i.children, t, a))) : (t || i.type !== Ae) && r.push(a != null ? kt(i, {
            key: a
        }) : i)
    }
    if (o > 1)
        for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
    return r
} /*! #__NO_SIDE_EFFECTS__ */
function pt(e, t) {
    return le(e) ? Le({
        name: e.name
    }, t, {
        setup: e
    }) : e
}

function ti(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function Cn(e, t, n, r, o = !1) {
    if (ae(e)) {
        e.forEach((v, p) => Cn(v, t && (ae(t) ? t[p] : t), n, r, o));
        return
    }
    if (Gt(r) && !o) {
        r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Cn(e, t, n, r.component.subTree);
        return
    }
    const s = r.shapeFlag & 4 ? wo(r.component) : r.el,
        i = o ? null : s,
        {
            i: a,
            r: l
        } = e,
        u = t && t.r,
        c = a.refs === Ee ? a.refs = {} : a.refs,
        f = a.setupState,
        d = me(f),
        m = f === Ee ? () => !1 : v => _e(d, v);
    if (u != null && u !== l && (Re(u) ? (c[u] = null, m(u) && (f[u] = null)) : Oe(u) && (u.value = null)), le(l)) gr(l, a, 12, [i, c]);
    else {
        const v = Re(l),
            p = Oe(l);
        if (v || p) {
            const E = () => {
                if (e.f) {
                    const T = v ? m(l) ? f[l] : c[l] : l.value;
                    o ? ae(T) && Bs(T, s) : ae(T) ? T.includes(s) || T.push(s) : v ? (c[l] = [s], m(l) && (f[l] = c[l])) : (l.value = [s], e.k && (c[e.k] = l.value))
                } else v ? (c[l] = i, m(l) && (f[l] = i)) : p && (l.value = i, e.k && (c[e.k] = i))
            };
            i ? (E.id = -1, $e(E, n)) : E()
        }
    }
}
let Mi = !1;
const mn = () => {
        Mi || (console.error("Hydration completed but contains mismatches."), Mi = !0)
    },
    Kf = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
    Wf = e => e.namespaceURI.includes("MathML"),
    xr = e => {
        if (e.nodeType === 1) {
            if (Kf(e)) return "svg";
            if (Wf(e)) return "mathml"
        }
    },
    _n = e => e.nodeType === 8;

function qf(e) {
    const {
        mt: t,
        p: n,
        o: {
            patchProp: r,
            createText: o,
            nextSibling: s,
            parentNode: i,
            remove: a,
            insert: l,
            createComment: u
        }
    } = e, c = (g, b) => {
        if (!b.hasChildNodes()) {
            n(null, g, b), zr(), b._vnode = g;
            return
        }
        f(b.firstChild, g, null, null, null), zr(), b._vnode = g
    }, f = (g, b, S, P, O, V = !1) => {
        V = V || !!b.dynamicChildren;
        const U = _n(g) && g.data === "[",
            F = () => p(g, b, S, P, O, U),
            {
                type: te,
                ref: W,
                shapeFlag: re,
                patchFlag: de
            } = b;
        let he = g.nodeType;
        b.el = g, de === -2 && (V = !1, b.dynamicChildren = null);
        let X = null;
        switch (te) {
        case cn:
            he !== 3 ? b.children === "" ? (l(b.el = o(""), i(g), g), X = g) : X = F() : (g.data !== b.children && (mn(), g.data = b.children), X = s(g));
            break;
        case Ae:
            _(g) ? (X = s(g), T(b.el = g.content.firstChild, g, S)) : he !== 8 || U ? X = F() : X = s(g);
            break;
        case Or:
            if (U && (g = s(g), he = g.nodeType), he === 1 || he === 3) {
                X = g;
                const ce = !b.children.length;
                for (let Z = 0; Z < b.staticCount; Z++) ce && (b.children += X.nodeType === 1 ? X.outerHTML : X.data), Z === b.staticCount - 1 && (b.anchor = X), X = s(X);
                return U ? s(X) : X
            } else F();
            break;
        case Ke:
            U ? X = v(g, b, S, P, O, V) : X = F();
            break;
        default:
            if (re & 1)(he !== 1 || b.type.toLowerCase() !== g.tagName.toLowerCase()) && !_(g) ? X = F() : X = d(g, b, S, P, O, V);
            else if (re & 6) {
                b.slotScopeIds = O;
                const ce = i(g);
                if (U ? X = E(g) : _n(g) && g.data === "teleport start" ? X = E(g, g.data, "teleport end") : X = s(g), t(b, ce, null, S, P, xr(ce), V), Gt(b) && !b.type.__asyncResolved) {
                    let Z;
                    U ? (Z = Ce(Ke), Z.anchor = X ? X.previousSibling : ce.lastChild) : Z = g.nodeType === 3 ? ai("") : Ce("div"), Z.el = g, b.component.subTree = Z
                }
            } else re & 64 ? he !== 8 ? X = F() : X = b.type.hydrate(g, b, S, P, O, V, e, m) : re & 128 && (X = b.type.hydrate(g, b, S, P, xr(i(g)), O, V, e, f))
        }
        return W != null && Cn(W, null, P, b), X
    }, d = (g, b, S, P, O, V) => {
        V = V || !!b.dynamicChildren;
        const {
            type: U,
            props: F,
            patchFlag: te,
            shapeFlag: W,
            dirs: re,
            transition: de
        } = b, he = U === "input" || U === "option";
        if (he || te !== -1) {
            re && gt(b, null, S, "created");
            let X = !1;
            if (_(g)) {
                X = fc(null, de) && S && S.vnode.props && S.vnode.props.appear;
                const Z = g.content.firstChild;
                if (X) {
                    const fe = Z.getAttribute("class");
                    fe && (Z.$cls = fe), de.beforeEnter(Z)
                }
                T(Z, g, S), b.el = g = Z
            }
            if (W & 16 && !(F && (F.innerHTML || F.textContent))) {
                let Z = m(g.firstChild, b, g, S, P, O, V);
                for (; Z;) {
                    Cr(g, 1) || mn();
                    const fe = Z;
                    Z = Z.nextSibling, a(fe)
                }
            } else if (W & 8) {
                let Z = b.children;
                Z[0] === `
` && (g.tagName === "PRE" || g.tagName === "TEXTAREA") && (Z = Z.slice(1)), g.textContent !== Z && (Cr(g, 0) || mn(), g.textContent = b.children)
            }
            if (F) {
                if (he || !V || te & 48) {
                    const Z = g.tagName.includes("-");
                    for (const fe in F)(he && (fe.endsWith("value") || fe === "indeterminate") || pr(fe) && !Sn(fe) || fe[0] === "." || Z) && r(g, fe, null, F[fe], void 0, S)
                } else if (F.onClick) r(g, "onClick", null, F.onClick, void 0, S);
                else if (te & 4 && on(F.style))
                    for (const Z in F.style) F.style[Z]
            }
            let ce;
            (ce = F && F.onVnodeBeforeMount) && Je(ce, S, b), re && gt(b, null, S, "beforeMount"), ((ce = F && F.onVnodeMounted) || re || X) && vc(() => {
                ce && Je(ce, S, b), X && de.enter(g), re && gt(b, null, S, "mounted")
            }, P)
        }
        return g.nextSibling
    }, m = (g, b, S, P, O, V, U) => {
        U = U || !!b.dynamicChildren;
        const F = b.children,
            te = F.length;
        for (let W = 0; W < te; W++) {
            const re = U ? F[W] : F[W] = et(F[W]),
                de = re.type === cn;
            g ? (de && !U && W + 1 < te && et(F[W + 1]).type === cn && (l(o(g.data.slice(re.children.length)), S, s(g)), g.data = re.children), g = f(g, re, P, O, V, U)) : de && !re.children ? l(re.el = o(""), S) : (Cr(S, 1) || mn(), n(null, re, S, null, P, O, xr(S), V))
        }
        return g
    }, v = (g, b, S, P, O, V) => {
        const {
            slotScopeIds: U
        } = b;
        U && (O = O ? O.concat(U) : U);
        const F = i(g),
            te = m(s(g), b, F, S, P, O, V);
        return te && _n(te) && te.data === "]" ? s(b.anchor = te) : (mn(), l(b.anchor = u("]"), F, te), te)
    }, p = (g, b, S, P, O, V) => {
        if (Cr(g.parentElement, 1) || mn(), b.el = null, V) {
            const te = E(g);
            for (;;) {
                const W = s(g);
                if (W && W !== te) a(W);
                else break
            }
        }
        const U = s(g),
            F = i(g);
        return a(g), n(null, b, F, U, S, P, xr(F), O), S && (S.vnode.el = b.el, _o(S, b.el)), U
    }, E = (g, b = "[", S = "]") => {
        let P = 0;
        for (; g;)
            if (g = s(g), g && _n(g) && (g.data === b && P++, g.data === S)) {
                if (P === 0) return s(g);
                P--
            } return g
    }, T = (g, b, S) => {
        const P = b.parentNode;
        P && P.replaceChild(g, b);
        let O = S;
        for (; O;) O.vnode.el === b && (O.vnode.el = O.subTree.el = g), O = O.parent
    }, _ = g => g.nodeType === 1 && g.tagName === "TEMPLATE";
    return [c, f]
}
const Li = "data-allow-mismatch",
    zf = {
        0: "text",
        1: "children",
        2: "class",
        3: "style",
        4: "attribute"
    };

function Cr(e, t) {
    if (t === 0 || t === 1)
        for (; e && !e.hasAttribute(Li);) e = e.parentElement;
    const n = e && e.getAttribute(Li);
    if (n == null) return !1;
    if (n === "") return !0;
    {
        const r = n.split(",");
        return t === 0 && r.includes("children") ? !0 : r.includes(zf[t])
    }
}
fo().requestIdleCallback;
fo().cancelIdleCallback;

function Gf(e, t) {
    if (_n(e) && e.data === "[") {
        let n = 1,
            r = e.nextSibling;
        for (; r;) {
            if (r.nodeType === 1) {
                if (t(r) === !1) break
            } else if (_n(r))
                if (r.data === "]") {
                    if (--n === 0) break
                } else r.data === "[" && n++;
            r = r.nextSibling
        }
    } else t(e)
}
const Gt = e => !!e.type.__asyncLoader; /*! #__NO_SIDE_EFFECTS__ */
function Vl(e) {
    le(e) && (e = {
        loader: e
    });
    const {
        loader: t,
        loadingComponent: n,
        errorComponent: r,
        delay: o = 200,
        hydrate: s,
        timeout: i,
        suspensible: a = !0,
        onError: l
    } = e;
    let u = null,
        c, f = 0;
    const d = () => (f++, u = null, m()),
        m = () => {
            let v;
            return u || (v = u = t().catch(p => {
                if (p = p instanceof Error ? p : new Error(String(p)), l) return new Promise((E, T) => {
                    l(p, () => E(d()), () => T(p), f + 1)
                });
                throw p
            }).then(p => v !== u && u ? u : (p && (p.__esModule || p[Symbol.toStringTag] === "Module") && (p = p.default), c = p, p)))
        };
    return pt({
        name: "AsyncComponentWrapper",
        __asyncLoader: m,
        __asyncHydrate(v, p, E) {
            let T = !1;
            (p.bu || (p.bu = [])).push(() => T = !0);
            const _ = () => {
                    T || E()
                },
                g = s ? () => {
                    const b = s(_, S => Gf(v, S));
                    b && (p.bum || (p.bum = [])).push(b)
                } : _;
            c ? g() : m().then(() => !p.isUnmounted && g())
        },
        get __asyncResolved() {
            return c
        },
        setup() {
            const v = Ne;
            if (ti(v), c) return () => Mo(c, v);
            const p = g => {
                u = null, Mn(g, v, 13, !r)
            };
            if (a && v.suspense || An) return m().then(g => () => Mo(g, v)).catch(g => (p(g), () => r ? Ce(r, {
                error: g
            }) : null));
            const E = Ze(!1),
                T = Ze(),
                _ = Ze(!!o);
            return o && setTimeout(() => {
                _.value = !1
            }, o), i != null && setTimeout(() => {
                if (!E.value && !T.value) {
                    const g = new Error(`Async component timed out after ${i}ms.`);
                    p(g), T.value = g
                }
            }, i), m().then(() => {
                E.value = !0, v.parent && mr(v.parent.vnode) && v.parent.update()
            }).catch(g => {
                p(g), T.value = g
            }), () => {
                if (E.value && c) return Mo(c, v);
                if (T.value && r) return Ce(r, {
                    error: T.value
                });
                if (n && !_.value) return Ce(n)
            }
        }
    })
}

function Mo(e, t) {
    const {
        ref: n,
        props: r,
        children: o,
        ce: s
    } = t.vnode, i = Ce(e, r, o);
    return i.ref = n, i.ce = s, delete t.vnode.ce, i
}
const mr = e => e.type.__isKeepAlive,
    Qf = {
        name: "KeepAlive",
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
        },
        setup(e, {
            slots: t
        }) {
            const n = Jt(),
                r = n.ctx;
            if (!r.renderer) return () => {
                const _ = t.default && t.default();
                return _ && _.length === 1 ? _[0] : _
            };
            const o = new Map,
                s = new Set;
            let i = null;
            const a = n.suspense,
                {
                    renderer: {
                        p: l,
                        m: u,
                        um: c,
                        o: {
                            createElement: f
                        }
                    }
                } = r,
                d = f("div");
            r.activate = (_, g, b, S, P) => {
                const O = _.component;
                u(_, g, b, 0, a), l(O.vnode, _, g, b, O, a, S, _.slotScopeIds, P), $e(() => {
                    O.isDeactivated = !1, O.a && Tn(O.a);
                    const V = _.props && _.props.onVnodeMounted;
                    V && Je(V, O.parent, _)
                }, a)
            }, r.deactivate = _ => {
                const g = _.component;
                Yr(g.m), Yr(g.a), u(_, d, null, 1, a), $e(() => {
                    g.da && Tn(g.da);
                    const b = _.props && _.props.onVnodeUnmounted;
                    b && Je(b, g.parent, _), g.isDeactivated = !0
                }, a)
            };

            function m(_) {
                Lo(_), c(_, n, a, !0)
            }

            function v(_) {
                o.forEach((g, b) => {
                    const S = ms(g.type);
                    S && !_(S) && p(b)
                })
            }

            function p(_) {
                const g = o.get(_);
                g && (!i || !ct(g, i)) ? m(g) : i && Lo(i), o.delete(_), s.delete(_)
            }
            ln(() => [e.include, e.exclude], ([_, g]) => {
                _ && v(b => qn(_, b)), g && v(b => !qn(g, b))
            }, {
                flush: "post",
                deep: !0
            });
            let E = null;
            const T = () => {
                E != null && (Jr(n.subTree.type) ? $e(() => {
                    o.set(E, Rr(n.subTree))
                }, n.subTree.suspense) : o.set(E, Rr(n.subTree)))
            };
            return yo(T), zl(T), yr(() => {
                o.forEach(_ => {
                    const {
                        subTree: g,
                        suspense: b
                    } = n, S = Rr(g);
                    if (_.type === S.type && _.key === S.key) {
                        Lo(S);
                        const P = S.component.da;
                        P && $e(P, b);
                        return
                    }
                    m(_)
                })
            }), () => {
                if (E = null, !t.default) return i = null;
                const _ = t.default(),
                    g = _[0];
                if (_.length > 1) return i = null, _;
                if (!un(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128)) return i = null, g;
                let b = Rr(g);
                if (b.type === Ae) return i = null, b;
                const S = b.type,
                    P = ms(Gt(b) ? b.type.__asyncResolved || {} : S),
                    {
                        include: O,
                        exclude: V,
                        max: U
                    } = e;
                if (O && (!P || !qn(O, P)) || V && P && qn(V, P)) return b.shapeFlag &= -257, i = b, g;
                const F = b.key == null ? S : b.key,
                    te = o.get(F);
                return b.el && (b = kt(b), g.shapeFlag & 128 && (g.ssContent = b)), E = F, te ? (b.el = te.el, b.component = te.component, b.transition && Pn(b, b.transition), b.shapeFlag |= 512, s.delete(F), s.add(F)) : (s.add(F), U && s.size > parseInt(U, 10) && p(s.values().next().value)), b.shapeFlag |= 256, i = b, Jr(g.type) ? g : b
            }
        }
    },
    Yf = Qf;

function qn(e, t) {
    return ae(e) ? e.some(n => qn(n, t)) : Re(e) ? e.split(",").includes(t) : Qu(e) ? (e.lastIndex = 0, e.test(t)) : !1
}

function Kl(e, t) {
    ql(e, "a", t)
}

function Wl(e, t) {
    ql(e, "da", t)
}

function ql(e, t, n = Ne) {
    const r = e.__wdc || (e.__wdc = () => {
        let o = n;
        for (; o;) {
            if (o.isDeactivated) return;
            o = o.parent
        }
        return e()
    });
    if (mo(t, r, n), n) {
        let o = n.parent;
        for (; o && o.parent;) mr(o.parent.vnode) && Jf(r, t, n, o), o = o.parent
    }
}

function Jf(e, t, n, r) {
    const o = mo(t, e, r, !0);
    ni(() => {
        Bs(r[t], o)
    }, n)
}

function Lo(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513
}

function Rr(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}

function mo(e, t, n = Ne, r = !1) {
    if (n) {
        const o = n[e] || (n[e] = []),
            s = t.__weh || (t.__weh = (...i) => {
                Ct();
                const a = fn(n),
                    l = ft(t, n, e, i);
                return a(), Rt(), l
            });
        return r ? o.unshift(s) : o.push(s), s
    }
}
const Ot = e => (t, n = Ne) => {
        (!An || e === "sp") && mo(e, (...r) => t(...r), n)
    },
    Xf = Ot("bm"),
    yo = Ot("m"),
    Zf = Ot("bu"),
    zl = Ot("u"),
    yr = Ot("bum"),
    ni = Ot("um"),
    ed = Ot("sp"),
    td = Ot("rtg"),
    nd = Ot("rtc");

function Gl(e, t = Ne) {
    mo("ec", e, t)
}
const Ql = "components";

function pb(e, t) {
    return Jl(Ql, e, !0, t) || e
}
const Yl = Symbol.for("v-ndc");

function rd(e) {
    return Re(e) ? Jl(Ql, e, !1) || e : e || Yl
}

function Jl(e, t, n = !0, r = !1) {
    const o = Fe || Ne;
    if (o) {
        const s = o.type;
        {
            const a = ms(s, !1);
            if (a && (a === t || a === at(t) || a === uo(at(t)))) return s
        }
        const i = ji(o[e] || s[e], t) || ji(o.appContext[e], t);
        return !i && r ? s : i
    }
}

function ji(e, t) {
    return e && (e[t] || e[at(t)] || e[uo(at(t))])
}

function hb(e, t, n, r) {
    let o;
    const s = n,
        i = ae(e);
    if (i || Re(e)) {
        const a = i && on(e);
        let l = !1,
            u = !1;
        a && (l = !it(e), u = Pt(e), e = ho(e)), o = new Array(e.length);
        for (let c = 0, f = e.length; c < f; c++) o[c] = t(l ? u ? Br(De(e[c])) : De(e[c]) : e[c], c, void 0, s)
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let a = 0; a < e; a++) o[a] = t(a + 1, a, void 0, s)
    } else if (Te(e))
        if (e[Symbol.iterator]) o = Array.from(e, (a, l) => t(a, l, void 0, s));
        else {
            const a = Object.keys(e);
            o = new Array(a.length);
            for (let l = 0, u = a.length; l < u; l++) {
                const c = a[l];
                o[l] = t(e[c], c, l, s)
            }
        }
    else o = [];
    return o
}

function gb(e, t, n = {}, r, o) {
    if (Fe.ce || Fe.parent && Gt(Fe.parent) && Fe.parent.ce) return t !== "default" && (n.name = t), st(), Tt(Ke, null, [Ce("slot", n, r)], 64);
    let s = e[t];
    s && s._c && (s._d = !1), st();
    const i = s && Xl(s(n)),
        a = n.key || i && i.key,
        l = Tt(Ke, {
            key: (a && !At(a) ? a : `_${t}`) + (!i && r ? "_fb" : "")
        }, i || [], i && e._ === 1 ? 64 : -2);
    return s && s._c && (s._d = !0), l
}

function Xl(e) {
    return e.some(t => un(t) ? !(t.type === Ae || t.type === Ke && !Xl(t.children)) : !0) ? e : null
}
const ls = e => e ? Tc(e) ? wo(e) : ls(e.parent) : null,
    Yn = Le(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => ls(e.parent),
        $root: e => ls(e.root),
        $host: e => e.ce,
        $emit: e => e.emit,
        $options: e => ec(e),
        $forceUpdate: e => e.f || (e.f = () => {
            ei(e.update)
        }),
        $nextTick: e => e.n || (e.n = Ln.bind(e.proxy)),
        $watch: e => Td.bind(e)
    }),
    jo = (e, t) => e !== Ee && !e.__isScriptSetup && _e(e, t),
    od = {
        get({
            _: e
        }, t) {
            if (t === "__v_skip") return !0;
            const {
                ctx: n,
                setupState: r,
                data: o,
                props: s,
                accessCache: i,
                type: a,
                appContext: l
            } = e;
            let u;
            if (t[0] !== "$") {
                const m = i[t];
                if (m !== void 0) switch (m) {
                case 1:
                    return r[t];
                case 2:
                    return o[t];
                case 4:
                    return n[t];
                case 3:
                    return s[t]
                } else {
                    if (jo(r, t)) return i[t] = 1, r[t];
                    if (o !== Ee && _e(o, t)) return i[t] = 2, o[t];
                    if ((u = e.propsOptions[0]) && _e(u, t)) return i[t] = 3, s[t];
                    if (n !== Ee && _e(n, t)) return i[t] = 4, n[t];
                    cs && (i[t] = 0)
                }
            }
            const c = Yn[t];
            let f, d;
            if (c) return t === "$attrs" && Ve(e.attrs, "get", ""), c(e);
            if ((f = a.__cssModules) && (f = f[t])) return f;
            if (n !== Ee && _e(n, t)) return i[t] = 4, n[t];
            if (d = l.config.globalProperties, _e(d, t)) return d[t]
        },
        set({
            _: e
        }, t, n) {
            const {
                data: r,
                setupState: o,
                ctx: s
            } = e;
            return jo(o, t) ? (o[t] = n, !0) : r !== Ee && _e(r, t) ? (r[t] = n, !0) : _e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: n,
                ctx: r,
                appContext: o,
                propsOptions: s
            }
        }, i) {
            let a;
            return !!n[i] || e !== Ee && _e(e, i) || jo(t, i) || (a = s[0]) && _e(a, i) || _e(r, i) || _e(Yn, i) || _e(o.config.globalProperties, i)
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : _e(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    };

function mb() {
    return sd().slots
}

function sd(e) {
    const t = Jt();
    return t.setupContext || (t.setupContext = Cc(t))
}

function Hi(e) {
    return ae(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}

function yb(e) {
    const t = Jt();
    let n = e();
    return hs(), Vs(n) && (n = n.catch(r => {
        throw fn(t), r
    })), [n, () => fn(t)]
}
let cs = !0;

function id(e) {
    const t = ec(e),
        n = e.proxy,
        r = e.ctx;
    cs = !1, t.beforeCreate && $i(t.beforeCreate, e, "bc");
    const {
        data: o,
        computed: s,
        methods: i,
        watch: a,
        provide: l,
        inject: u,
        created: c,
        beforeMount: f,
        mounted: d,
        beforeUpdate: m,
        updated: v,
        activated: p,
        deactivated: E,
        beforeDestroy: T,
        beforeUnmount: _,
        destroyed: g,
        unmounted: b,
        render: S,
        renderTracked: P,
        renderTriggered: O,
        errorCaptured: V,
        serverPrefetch: U,
        expose: F,
        inheritAttrs: te,
        components: W,
        directives: re,
        filters: de
    } = t;
    if (u && ad(u, r, null), i)
        for (const ce in i) {
            const Z = i[ce];
            le(Z) && (r[ce] = Z.bind(n))
        }
    if (o) {
        const ce = o.call(n, n);
        Te(ce) && (e.data = Yt(ce))
    }
    if (cs = !0, s)
        for (const ce in s) {
            const Z = s[ce],
                fe = le(Z) ? Z.bind(n, n) : le(Z.get) ? Z.get.bind(n, n) : mt,
                nt = !le(Z) && le(Z.set) ? Z.set.bind(n) : mt,
                qe = Me({
                    get: fe,
                    set: nt
                });
            Object.defineProperty(r, ce, {
                enumerable: !0,
                configurable: !0,
                get: () => qe.value,
                set: je => qe.value = je
            })
        }
    if (a)
        for (const ce in a) Zl(a[ce], r, n, ce);
    if (l) {
        const ce = le(l) ? l.call(n) : l;
        Reflect.ownKeys(ce).forEach(Z => {
            an(Z, ce[Z])
        })
    }
    c && $i(c, e, "c");

    function X(ce, Z) {
        ae(Z) ? Z.forEach(fe => ce(fe.bind(n))) : Z && ce(Z.bind(n))
    }
    if (X(Xf, f), X(yo, d), X(Zf, m), X(zl, v), X(Kl, p), X(Wl, E), X(Gl, V), X(nd, P), X(td, O), X(yr, _), X(ni, b), X(ed, U), ae(F))
        if (F.length) {
            const ce = e.exposed || (e.exposed = {});
            F.forEach(Z => {
                Object.defineProperty(ce, Z, {
                    get: () => n[Z],
                    set: fe => n[Z] = fe,
                    enumerable: !0
                })
            })
        } else e.exposed || (e.exposed = {});
    S && e.render === mt && (e.render = S), te != null && (e.inheritAttrs = te), W && (e.components = W), re && (e.directives = re), U && ti(e)
}

function ad(e, t, n = mt) {
    ae(e) && (e = us(e));
    for (const r in e) {
        const o = e[r];
        let s;
        Te(o) ? "default" in o ? s = We(o.from || r, o.default, !0) : s = We(o.from || r) : s = We(o), Oe(s) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: i => s.value = i
        }) : t[r] = s
    }
}

function $i(e, t, n) {
    ft(ae(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function Zl(e, t, n, r) {
    let o = r.includes(".") ? gc(n, r) : () => n[r];
    if (Re(e)) {
        const s = t[e];
        le(s) && ln(o, s)
    } else if (le(e)) ln(o, e.bind(n));
    else if (Te(e))
        if (ae(e)) e.forEach(s => Zl(s, t, n, r));
        else {
            const s = le(e.handler) ? e.handler.bind(n) : t[e.handler];
            le(s) && ln(o, s, e)
        }
}

function ec(e) {
    const t = e.type,
        {
            mixins: n,
            extends: r
        } = t,
        {
            mixins: o,
            optionsCache: s,
            config: {
                optionMergeStrategies: i
            }
        } = e.appContext,
        a = s.get(t);
    let l;
    return a ? l = a : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(u => Qr(l, u, i, !0)), Qr(l, t, i)), Te(t) && s.set(t, l), l
}

function Qr(e, t, n, r = !1) {
    const {
        mixins: o,
        extends: s
    } = t;
    s && Qr(e, s, n, !0), o && o.forEach(i => Qr(e, i, n, !0));
    for (const i in t)
        if (!(r && i === "expose")) {
            const a = ld[i] || n && n[i];
            e[i] = a ? a(e[i], t[i]) : t[i]
        } return e
}
const ld = {
    data: Di,
    props: Ni,
    emits: Ni,
    methods: zn,
    computed: zn,
    beforeCreate: Qe,
    created: Qe,
    beforeMount: Qe,
    mounted: Qe,
    beforeUpdate: Qe,
    updated: Qe,
    beforeDestroy: Qe,
    beforeUnmount: Qe,
    destroyed: Qe,
    unmounted: Qe,
    activated: Qe,
    deactivated: Qe,
    errorCaptured: Qe,
    serverPrefetch: Qe,
    components: zn,
    directives: zn,
    watch: ud,
    provide: Di,
    inject: cd
};

function Di(e, t) {
    return t ? e ? function () {
        return Le(le(e) ? e.call(this, this) : e, le(t) ? t.call(this, this) : t)
    } : t : e
}

function cd(e, t) {
    return zn(us(e), us(t))
}

function us(e) {
    if (ae(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function Qe(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function zn(e, t) {
    return e ? Le(Object.create(null), e, t) : t
}

function Ni(e, t) {
    return e ? ae(e) && ae(t) ? [...new Set([...e, ...t])] : Le(Object.create(null), Hi(e), Hi(t ?? {})) : t
}

function ud(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Le(Object.create(null), e);
    for (const r in t) n[r] = Qe(e[r], t[r]);
    return n
}

function tc() {
    return {
        app: null,
        config: {
            isNativeTag: zu,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let fd = 0;

function dd(e, t) {
    return function (r, o = null) {
        le(r) || (r = Le({}, r)), o != null && !Te(o) && (o = null);
        const s = tc(),
            i = new WeakSet,
            a = [];
        let l = !1;
        const u = s.app = {
            _uid: fd++,
            _component: r,
            _props: o,
            _container: null,
            _context: s,
            _instance: null,
            version: qd,
            get config() {
                return s.config
            },
            set config(c) {},
            use(c, ...f) {
                return i.has(c) || (c && le(c.install) ? (i.add(c), c.install(u, ...f)) : le(c) && (i.add(c), c(u, ...f))), u
            },
            mixin(c) {
                return s.mixins.includes(c) || s.mixins.push(c), u
            },
            component(c, f) {
                return f ? (s.components[c] = f, u) : s.components[c]
            },
            directive(c, f) {
                return f ? (s.directives[c] = f, u) : s.directives[c]
            },
            mount(c, f, d) {
                if (!l) {
                    const m = u._ceVNode || Ce(r, o);
                    return m.appContext = s, d === !0 ? d = "svg" : d === !1 && (d = void 0), f && t ? t(m, c) : e(m, c, d), l = !0, u._container = c, c.__vue_app__ = u, wo(m.component)
                }
            },
            onUnmount(c) {
                a.push(c)
            },
            unmount() {
                l && (ft(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__)
            },
            provide(c, f) {
                return s.provides[c] = f, u
            },
            runWithContext(c) {
                const f = sn;
                sn = u;
                try {
                    return c()
                } finally {
                    sn = f
                }
            }
        };
        return u
    }
}
let sn = null;

function an(e, t) {
    if (Ne) {
        let n = Ne.provides;
        const r = Ne.parent && Ne.parent.provides;
        r === n && (n = Ne.provides = Object.create(r)), n[e] = t
    }
}

function We(e, t, n = !1) {
    const r = Jt();
    if (r || sn) {
        let o = sn ? sn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (o && e in o) return o[e];
        if (arguments.length > 1) return n && le(t) ? t.call(r && r.proxy) : t
    }
}

function vo() {
    return !!(Jt() || sn)
}
const nc = {},
    rc = () => Object.create(nc),
    oc = e => Object.getPrototypeOf(e) === nc;

function pd(e, t, n, r = !1) {
    const o = {},
        s = rc();
    e.propsDefaults = Object.create(null), sc(e, t, o, s);
    for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
    n ? e.props = r ? o : Wt(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s
}

function hd(e, t, n, r) {
    const {
        props: o,
        attrs: s,
        vnode: {
            patchFlag: i
        }
    } = e, a = me(o), [l] = e.propsOptions;
    let u = !1;
    if ((r || i > 0) && !(i & 16)) {
        if (i & 8) {
            const c = e.vnode.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                let d = c[f];
                if (bo(e.emitsOptions, d)) continue;
                const m = t[d];
                if (l)
                    if (_e(s, d)) m !== s[d] && (s[d] = m, u = !0);
                    else {
                        const v = at(d);
                        o[v] = fs(l, a, v, m, e, !1)
                    }
                else m !== s[d] && (s[d] = m, u = !0)
            }
        }
    } else {
        sc(e, t, o, s) && (u = !0);
        let c;
        for (const f in a)(!t || !_e(t, f) && ((c = Qt(f)) === f || !_e(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (o[f] = fs(l, a, f, void 0, e, !0)) : delete o[f]);
        if (s !== a)
            for (const f in s)(!t || !_e(t, f)) && (delete s[f], u = !0)
    }
    u && Et(e.attrs, "set", "")
}

function sc(e, t, n, r) {
    const [o, s] = e.propsOptions;
    let i = !1,
        a;
    if (t)
        for (let l in t) {
            if (Sn(l)) continue;
            const u = t[l];
            let c;
            o && _e(o, c = at(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : bo(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, i = !0)
        }
    if (s) {
        const l = me(n),
            u = a || Ee;
        for (let c = 0; c < s.length; c++) {
            const f = s[c];
            n[f] = fs(o, l, f, u[f], e, !_e(u, f))
        }
    }
    return i
}

function fs(e, t, n, r, o, s) {
    const i = e[n];
    if (i != null) {
        const a = _e(i, "default");
        if (a && r === void 0) {
            const l = i.default;
            if (i.type !== Function && !i.skipFactory && le(l)) {
                const {
                    propsDefaults: u
                } = o;
                if (n in u) r = u[n];
                else {
                    const c = fn(o);
                    r = u[n] = l.call(null, t), c()
                }
            } else r = l;
            o.ce && o.ce._setProp(n, r)
        }
        i[0] && (s && !a ? r = !1 : i[1] && (r === "" || r === Qt(n)) && (r = !0))
    }
    return r
}
const gd = new WeakMap;

function ic(e, t, n = !1) {
    const r = n ? gd : t.propsCache,
        o = r.get(e);
    if (o) return o;
    const s = e.props,
        i = {},
        a = [];
    let l = !1;
    if (!le(e)) {
        const c = f => {
            l = !0;
            const [d, m] = ic(f, t, !0);
            Le(i, d), m && a.push(...m)
        };
        !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
    }
    if (!s && !l) return Te(e) && r.set(e, wn), wn;
    if (ae(s))
        for (let c = 0; c < s.length; c++) {
            const f = at(s[c]);
            Fi(f) && (i[f] = Ee)
        } else if (s)
            for (const c in s) {
                const f = at(c);
                if (Fi(f)) {
                    const d = s[c],
                        m = i[f] = ae(d) || le(d) ? {
                            type: d
                        } : Le({}, d),
                        v = m.type;
                    let p = !1,
                        E = !0;
                    if (ae(v))
                        for (let T = 0; T < v.length; ++T) {
                            const _ = v[T],
                                g = le(_) && _.name;
                            if (g === "Boolean") {
                                p = !0;
                                break
                            } else g === "String" && (E = !1)
                        } else p = le(v) && v.name === "Boolean";
                    m[0] = p, m[1] = E, (p || _e(m, "default")) && a.push(f)
                }
            }
    const u = [i, a];
    return Te(e) && r.set(e, u), u
}

function Fi(e) {
    return e[0] !== "$" && !Sn(e)
}
const ri = e => e === "_" || e === "__" || e === "_ctx" || e === "$stable",
    oi = e => ae(e) ? e.map(et) : [et(e)],
    md = (e, t, n) => {
        if (t._n) return t;
        const r = go((...o) => oi(t(...o)), n);
        return r._c = !1, r
    },
    ac = (e, t, n) => {
        const r = e._ctx;
        for (const o in e) {
            if (ri(o)) continue;
            const s = e[o];
            if (le(s)) t[o] = md(o, s, r);
            else if (s != null) {
                const i = oi(s);
                t[o] = () => i
            }
        }
    },
    lc = (e, t) => {
        const n = oi(t);
        e.slots.default = () => n
    },
    cc = (e, t, n) => {
        for (const r in t)(n || !ri(r)) && (e[r] = t[r])
    },
    yd = (e, t, n) => {
        const r = e.slots = rc();
        if (e.vnode.shapeFlag & 32) {
            const o = t.__;
            o && es(r, "__", o, !0);
            const s = t._;
            s ? (cc(r, t, n), n && es(r, "_", s, !0)) : ac(t, r)
        } else t && lc(e, t)
    },
    vd = (e, t, n) => {
        const {
            vnode: r,
            slots: o
        } = e;
        let s = !0,
            i = Ee;
        if (r.shapeFlag & 32) {
            const a = t._;
            a ? n && a === 1 ? s = !1 : cc(o, t, n) : (s = !t.$stable, ac(t, o)), i = t
        } else t && (lc(e, t), i = {
            default: 1
        });
        if (s)
            for (const a in o) !ri(a) && i[a] == null && delete o[a]
    },
    $e = vc;

function bd(e) {
    return uc(e)
}

function _d(e) {
    return uc(e, qf)
}

function uc(e, t) {
    const n = fo();
    n.__VUE__ = !0;
    const {
        insert: r,
        remove: o,
        patchProp: s,
        createElement: i,
        createText: a,
        createComment: l,
        setText: u,
        setElementText: c,
        parentNode: f,
        nextSibling: d,
        setScopeId: m = mt,
        insertStaticContent: v
    } = e, p = (h, y, x, L = null, k = null, H = null, G = void 0, D = null, z = !!y.dynamicChildren) => {
        if (h === y) return;
        h && !ct(h, y) && (L = j(h), je(h, k, H, !0), h = null), y.patchFlag === -2 && (z = !1, y.dynamicChildren = null);
        const {
            type: K,
            ref: ie,
            shapeFlag: Q
        } = y;
        switch (K) {
        case cn:
            E(h, y, x, L);
            break;
        case Ae:
            T(h, y, x, L);
            break;
        case Or:
            h == null && _(y, x, L, G);
            break;
        case Ke:
            W(h, y, x, L, k, H, G, D, z);
            break;
        default:
            Q & 1 ? S(h, y, x, L, k, H, G, D, z) : Q & 6 ? re(h, y, x, L, k, H, G, D, z) : (Q & 64 || Q & 128) && K.process(h, y, x, L, k, H, G, D, z, ne)
        }
        ie != null && k ? Cn(ie, h && h.ref, H, y || h, !y) : ie == null && h && h.ref != null && Cn(h.ref, null, H, h, !0)
    }, E = (h, y, x, L) => {
        if (h == null) r(y.el = a(y.children), x, L);
        else {
            const k = y.el = h.el;
            y.children !== h.children && u(k, y.children)
        }
    }, T = (h, y, x, L) => {
        h == null ? r(y.el = l(y.children || ""), x, L) : y.el = h.el
    }, _ = (h, y, x, L) => {
        [h.el, h.anchor] = v(h.children, y, x, L, h.el, h.anchor)
    }, g = ({
        el: h,
        anchor: y
    }, x, L) => {
        let k;
        for (; h && h !== y;) k = d(h), r(h, x, L), h = k;
        r(y, x, L)
    }, b = ({
        el: h,
        anchor: y
    }) => {
        let x;
        for (; h && h !== y;) x = d(h), o(h), h = x;
        o(y)
    }, S = (h, y, x, L, k, H, G, D, z) => {
        y.type === "svg" ? G = "svg" : y.type === "math" && (G = "mathml"), h == null ? P(y, x, L, k, H, G, D, z) : U(h, y, k, H, G, D, z)
    }, P = (h, y, x, L, k, H, G, D) => {
        let z, K;
        const {
            props: ie,
            shapeFlag: Q,
            transition: oe,
            dirs: ue
        } = h;
        if (z = h.el = i(h.type, H, ie && ie.is, ie), Q & 8 ? c(z, h.children) : Q & 16 && V(h.children, z, null, L, k, Ho(h, H), G, D), ue && gt(h, null, L, "created"), O(z, h, h.scopeId, G, L), ie) {
            for (const we in ie) we !== "value" && !Sn(we) && s(z, we, null, ie[we], H, L);
            "value" in ie && s(z, "value", null, ie.value, H), (K = ie.onVnodeBeforeMount) && Je(K, L, h)
        }
        ue && gt(h, null, L, "beforeMount");
        const pe = fc(k, oe);
        pe && oe.beforeEnter(z), r(z, y, x), ((K = ie && ie.onVnodeMounted) || pe || ue) && $e(() => {
            K && Je(K, L, h), pe && oe.enter(z), ue && gt(h, null, L, "mounted")
        }, k)
    }, O = (h, y, x, L, k) => {
        if (x && m(h, x), L)
            for (let H = 0; H < L.length; H++) m(h, L[H]);
        if (k) {
            let H = k.subTree;
            if (y === H || Jr(H.type) && (H.ssContent === y || H.ssFallback === y)) {
                const G = k.vnode;
                O(h, G, G.scopeId, G.slotScopeIds, k.parent)
            }
        }
    }, V = (h, y, x, L, k, H, G, D, z = 0) => {
        for (let K = z; K < h.length; K++) {
            const ie = h[K] = D ? Bt(h[K]) : et(h[K]);
            p(null, ie, y, x, L, k, H, G, D)
        }
    }, U = (h, y, x, L, k, H, G) => {
        const D = y.el = h.el;
        let {
            patchFlag: z,
            dynamicChildren: K,
            dirs: ie
        } = y;
        z |= h.patchFlag & 16;
        const Q = h.props || Ee,
            oe = y.props || Ee;
        let ue;
        if (x && Zt(x, !1), (ue = oe.onVnodeBeforeUpdate) && Je(ue, x, y, h), ie && gt(y, h, x, "beforeUpdate"), x && Zt(x, !0), (Q.innerHTML && oe.innerHTML == null || Q.textContent && oe.textContent == null) && c(D, ""), K ? F(h.dynamicChildren, K, D, x, L, Ho(y, k), H) : G || Z(h, y, D, null, x, L, Ho(y, k), H, !1), z > 0) {
            if (z & 16) te(D, Q, oe, x, k);
            else if (z & 2 && Q.class !== oe.class && s(D, "class", null, oe.class, k), z & 4 && s(D, "style", Q.style, oe.style, k), z & 8) {
                const pe = y.dynamicProps;
                for (let we = 0; we < pe.length; we++) {
                    const ye = pe[we],
                        ke = Q[ye],
                        C = oe[ye];
                    (C !== ke || ye === "value") && s(D, ye, ke, C, k, x)
                }
            }
            z & 1 && h.children !== y.children && c(D, y.children)
        } else !G && K == null && te(D, Q, oe, x, k);
        ((ue = oe.onVnodeUpdated) || ie) && $e(() => {
            ue && Je(ue, x, y, h), ie && gt(y, h, x, "updated")
        }, L)
    }, F = (h, y, x, L, k, H, G) => {
        for (let D = 0; D < y.length; D++) {
            const z = h[D],
                K = y[D],
                ie = z.el && (z.type === Ke || !ct(z, K) || z.shapeFlag & 198) ? f(z.el) : x;
            p(z, K, ie, null, L, k, H, G, !0)
        }
    }, te = (h, y, x, L, k) => {
        if (y !== x) {
            if (y !== Ee)
                for (const H in y) !Sn(H) && !(H in x) && s(h, H, y[H], null, k, L);
            for (const H in x) {
                if (Sn(H)) continue;
                const G = x[H],
                    D = y[H];
                G !== D && H !== "value" && s(h, H, D, G, k, L)
            }
            "value" in x && s(h, "value", y.value, x.value, k)
        }
    }, W = (h, y, x, L, k, H, G, D, z) => {
        const K = y.el = h ? h.el : a(""),
            ie = y.anchor = h ? h.anchor : a("");
        let {
            patchFlag: Q,
            dynamicChildren: oe,
            slotScopeIds: ue
        } = y;
        ue && (D = D ? D.concat(ue) : ue), h == null ? (r(K, x, L), r(ie, x, L), V(y.children || [], x, ie, k, H, G, D, z)) : Q > 0 && Q & 64 && oe && h.dynamicChildren ? (F(h.dynamicChildren, oe, x, k, H, G, D), (y.key != null || k && y === k.subTree) && dc(h, y, !0)) : Z(h, y, x, ie, k, H, G, D, z)
    }, re = (h, y, x, L, k, H, G, D, z) => {
        y.slotScopeIds = D, h == null ? y.shapeFlag & 512 ? k.ctx.activate(y, x, L, G, z) : de(y, x, L, k, H, G, z) : he(h, y, z)
    }, de = (h, y, x, L, k, H, G) => {
        const D = h.component = Ud(h, L, k);
        if (mr(h) && (D.ctx.renderer = ne), Bd(D, !1, G), D.asyncDep) {
            if (k && k.registerDep(D, X, G), !h.el) {
                const z = D.subTree = Ce(Ae);
                T(null, z, y, x), h.placeholder = z.el
            }
        } else X(D, h, y, x, k, H, G)
    }, he = (h, y, x) => {
        const L = y.component = h.component;
        if (Ad(h, y, x))
            if (L.asyncDep && !L.asyncResolved) {
                ce(L, y, x);
                return
            } else L.next = y, L.update();
        else y.el = h.el, L.vnode = y
    }, X = (h, y, x, L, k, H, G) => {
        const D = () => {
            if (h.isMounted) {
                let {
                    next: Q,
                    bu: oe,
                    u: ue,
                    parent: pe,
                    vnode: we
                } = h;
                {
                    const R = pc(h);
                    if (R) {
                        Q && (Q.el = we.el, ce(h, Q, G)), R.asyncDep.then(() => {
                            h.isUnmounted || D()
                        });
                        return
                    }
                }
                let ye = Q,
                    ke;
                Zt(h, !1), Q ? (Q.el = we.el, ce(h, Q, G)) : Q = we, oe && Tn(oe), (ke = Q.props && Q.props.onVnodeBeforeUpdate) && Je(ke, pe, Q, we), Zt(h, !0);
                const C = $o(h),
                    w = h.subTree;
                h.subTree = C, p(w, C, f(w.el), j(w), h, k, H), Q.el = C.el, ye === null && _o(h, C.el), ue && $e(ue, k), (ke = Q.props && Q.props.onVnodeUpdated) && $e(() => Je(ke, pe, Q, we), k)
            } else {
                let Q;
                const {
                    el: oe,
                    props: ue
                } = y, {
                    bm: pe,
                    m: we,
                    parent: ye,
                    root: ke,
                    type: C
                } = h, w = Gt(y);
                if (Zt(h, !1), pe && Tn(pe), !w && (Q = ue && ue.onVnodeBeforeMount) && Je(Q, ye, y), Zt(h, !0), oe && ve) {
                    const R = () => {
                        h.subTree = $o(h), ve(oe, h.subTree, h, k, null)
                    };
                    w && C.__asyncHydrate ? C.__asyncHydrate(oe, h, R) : R()
                } else {
                    ke.ce && ke.ce._def.shadowRoot !== !1 && ke.ce._injectChildStyle(C);
                    const R = h.subTree = $o(h);
                    p(null, R, x, L, h, k, H), y.el = R.el
                }
                if (we && $e(we, k), !w && (Q = ue && ue.onVnodeMounted)) {
                    const R = y;
                    $e(() => Je(Q, ye, R), k)
                }(y.shapeFlag & 256 || ye && Gt(ye.vnode) && ye.vnode.shapeFlag & 256) && h.a && $e(h.a, k), h.isMounted = !0, y = x = L = null
            }
        };
        h.scope.on();
        const z = h.effect = new gl(D);
        h.scope.off();
        const K = h.update = z.run.bind(z),
            ie = h.job = z.runIfDirty.bind(z);
        ie.i = h, ie.id = h.uid, z.scheduler = () => ei(ie), Zt(h, !0), K()
    }, ce = (h, y, x) => {
        y.component = h;
        const L = h.vnode.props;
        h.vnode = y, h.next = null, hd(h, y.props, L, x), vd(h, y.children, x), Ct(), Oi(h), Rt()
    }, Z = (h, y, x, L, k, H, G, D, z = !1) => {
        const K = h && h.children,
            ie = h ? h.shapeFlag : 0,
            Q = y.children,
            {
                patchFlag: oe,
                shapeFlag: ue
            } = y;
        if (oe > 0) {
            if (oe & 128) {
                nt(K, Q, x, L, k, H, G, D, z);
                return
            } else if (oe & 256) {
                fe(K, Q, x, L, k, H, G, D, z);
                return
            }
        }
        ue & 8 ? (ie & 16 && Ge(K, k, H), Q !== K && c(x, Q)) : ie & 16 ? ue & 16 ? nt(K, Q, x, L, k, H, G, D, z) : Ge(K, k, H, !0) : (ie & 8 && c(x, ""), ue & 16 && V(Q, x, L, k, H, G, D, z))
    }, fe = (h, y, x, L, k, H, G, D, z) => {
        h = h || wn, y = y || wn;
        const K = h.length,
            ie = y.length,
            Q = Math.min(K, ie);
        let oe;
        for (oe = 0; oe < Q; oe++) {
            const ue = y[oe] = z ? Bt(y[oe]) : et(y[oe]);
            p(h[oe], ue, x, null, k, H, G, D, z)
        }
        K > ie ? Ge(h, k, H, !0, !1, Q) : V(y, x, L, k, H, G, D, z, Q)
    }, nt = (h, y, x, L, k, H, G, D, z) => {
        let K = 0;
        const ie = y.length;
        let Q = h.length - 1,
            oe = ie - 1;
        for (; K <= Q && K <= oe;) {
            const ue = h[K],
                pe = y[K] = z ? Bt(y[K]) : et(y[K]);
            if (ct(ue, pe)) p(ue, pe, x, null, k, H, G, D, z);
            else break;
            K++
        }
        for (; K <= Q && K <= oe;) {
            const ue = h[Q],
                pe = y[oe] = z ? Bt(y[oe]) : et(y[oe]);
            if (ct(ue, pe)) p(ue, pe, x, null, k, H, G, D, z);
            else break;
            Q--, oe--
        }
        if (K > Q) {
            if (K <= oe) {
                const ue = oe + 1,
                    pe = ue < ie ? y[ue].el : L;
                for (; K <= oe;) p(null, y[K] = z ? Bt(y[K]) : et(y[K]), x, pe, k, H, G, D, z), K++
            }
        } else if (K > oe)
            for (; K <= Q;) je(h[K], k, H, !0), K++;
        else {
            const ue = K,
                pe = K,
                we = new Map;
            for (K = pe; K <= oe; K++) {
                const A = y[K] = z ? Bt(y[K]) : et(y[K]);
                A.key != null && we.set(A.key, K)
            }
            let ye, ke = 0;
            const C = oe - pe + 1;
            let w = !1,
                R = 0;
            const B = new Array(C);
            for (K = 0; K < C; K++) B[K] = 0;
            for (K = ue; K <= Q; K++) {
                const A = h[K];
                if (ke >= C) {
                    je(A, k, H, !0);
                    continue
                }
                let se;
                if (A.key != null) se = we.get(A.key);
                else
                    for (ye = pe; ye <= oe; ye++)
                        if (B[ye - pe] === 0 && ct(A, y[ye])) {
                            se = ye;
                            break
                        } se === void 0 ? je(A, k, H, !0) : (B[se - pe] = K + 1, se >= R ? R = se : w = !0, p(A, y[se], x, null, k, H, G, D, z), ke++)
            }
            const ee = w ? wd(B) : wn;
            for (ye = ee.length - 1, K = C - 1; K >= 0; K--) {
                const A = pe + K,
                    se = y[A],
                    I = y[A + 1],
                    M = A + 1 < ie ? I.el || I.placeholder : L;
                B[K] === 0 ? p(null, se, x, M, k, H, G, D, z) : w && (ye < 0 || K !== ee[ye] ? qe(se, x, M, 2) : ye--)
            }
        }
    }, qe = (h, y, x, L, k = null) => {
        const {
            el: H,
            type: G,
            transition: D,
            children: z,
            shapeFlag: K
        } = h;
        if (K & 6) {
            qe(h.component.subTree, y, x, L);
            return
        }
        if (K & 128) {
            h.suspense.move(y, x, L);
            return
        }
        if (K & 64) {
            G.move(h, y, x, ne);
            return
        }
        if (G === Ke) {
            r(H, y, x);
            for (let Q = 0; Q < z.length; Q++) qe(z[Q], y, x, L);
            r(h.anchor, y, x);
            return
        }
        if (G === Or) {
            g(h, y, x);
            return
        }
        if (L !== 2 && K & 1 && D)
            if (L === 0) D.beforeEnter(H), r(H, y, x), $e(() => D.enter(H), k);
            else {
                const {
                    leave: Q,
                    delayLeave: oe,
                    afterLeave: ue
                } = D, pe = () => {
                    h.ctx.isUnmounted ? o(H) : r(H, y, x)
                }, we = () => {
                    Q(H, () => {
                        pe(), ue && ue()
                    })
                };
                oe ? oe(H, pe, we) : we()
            }
        else r(H, y, x)
    }, je = (h, y, x, L = !1, k = !1) => {
        const {
            type: H,
            props: G,
            ref: D,
            children: z,
            dynamicChildren: K,
            shapeFlag: ie,
            patchFlag: Q,
            dirs: oe,
            cacheIndex: ue
        } = h;
        if (Q === -2 && (k = !1), D != null && (Ct(), Cn(D, null, x, h, !0), Rt()), ue != null && (y.renderCache[ue] = void 0), ie & 256) {
            y.ctx.deactivate(h);
            return
        }
        const pe = ie & 1 && oe,
            we = !Gt(h);
        let ye;
        if (we && (ye = G && G.onVnodeBeforeUnmount) && Je(ye, y, h), ie & 6) Xt(h.component, x, L);
        else {
            if (ie & 128) {
                h.suspense.unmount(x, L);
                return
            }
            pe && gt(h, null, y, "beforeUnmount"), ie & 64 ? h.type.remove(h, y, x, ne, L) : K && !K.hasOnce && (H !== Ke || Q > 0 && Q & 64) ? Ge(K, y, x, !1, !0) : (H === Ke && Q & 384 || !k && ie & 16) && Ge(z, y, x), L && yt(h)
        }(we && (ye = G && G.onVnodeUnmounted) || pe) && $e(() => {
            ye && Je(ye, y, h), pe && gt(h, null, y, "unmounted")
        }, x)
    }, yt = h => {
        const {
            type: y,
            el: x,
            anchor: L,
            transition: k
        } = h;
        if (y === Ke) {
            ze(x, L);
            return
        }
        if (y === Or) {
            b(h);
            return
        }
        const H = () => {
            o(x), k && !k.persisted && k.afterLeave && k.afterLeave()
        };
        if (h.shapeFlag & 1 && k && !k.persisted) {
            const {
                leave: G,
                delayLeave: D
            } = k, z = () => G(x, H);
            D ? D(h.el, H, z) : z()
        } else H()
    }, ze = (h, y) => {
        let x;
        for (; h !== y;) x = d(h), o(h), h = x;
        o(y)
    }, Xt = (h, y, x) => {
        const {
            bum: L,
            scope: k,
            job: H,
            subTree: G,
            um: D,
            m: z,
            a: K,
            parent: ie,
            slots: {
                __: Q
            }
        } = h;
        Yr(z), Yr(K), L && Tn(L), ie && ae(Q) && Q.forEach(oe => {
            ie.renderCache[oe] = void 0
        }), k.stop(), H && (H.flags |= 8, je(G, h, y, x)), D && $e(D, y), $e(() => {
            h.isUnmounted = !0
        }, y), y && y.pendingBranch && !y.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === y.pendingId && (y.deps--, y.deps === 0 && y.resolve())
    }, Ge = (h, y, x, L = !1, k = !1, H = 0) => {
        for (let G = H; G < h.length; G++) je(h[G], y, x, L, k)
    }, j = h => {
        if (h.shapeFlag & 6) return j(h.component.subTree);
        if (h.shapeFlag & 128) return h.suspense.next();
        const y = d(h.anchor || h.el),
            x = y && y[Ff];
        return x ? d(x) : y
    };
    let J = !1;
    const Y = (h, y, x) => {
            h == null ? y._vnode && je(y._vnode, null, null, !0) : p(y._vnode || null, h, y, null, null, null, x), y._vnode = h, J || (J = !0, Oi(), zr(), J = !1)
        },
        ne = {
            p,
            um: je,
            m: qe,
            r: yt,
            mt: de,
            mc: V,
            pc: Z,
            pbc: F,
            n: j,
            o: e
        };
    let ge, ve;
    return t && ([ge, ve] = t(ne)), {
        render: Y,
        hydrate: ge,
        createApp: dd(Y, ge)
    }
}

function Ho({
    type: e,
    props: t
}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function Zt({
    effect: e,
    job: t
}, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function fc(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function dc(e, t, n = !1) {
    const r = e.children,
        o = t.children;
    if (ae(r) && ae(o))
        for (let s = 0; s < r.length; s++) {
            const i = r[s];
            let a = o[s];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[s] = Bt(o[s]), a.el = i.el), !n && a.patchFlag !== -2 && dc(i, a)), a.type === cn && (a.el = i.el), a.type === Ae && !a.el && (a.el = i.el)
        }
}

function wd(e) {
    const t = e.slice(),
        n = [0];
    let r, o, s, i, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const u = e[r];
        if (u !== 0) {
            if (o = n[n.length - 1], e[o] < u) {
                t[r] = o, n.push(r);
                continue
            }
            for (s = 0, i = n.length - 1; s < i;) a = s + i >> 1, e[n[a]] < u ? s = a + 1 : i = a;
            u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r)
        }
    }
    for (s = n.length, i = n[s - 1]; s-- > 0;) n[s] = i, i = t[i];
    return n
}

function pc(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : pc(t)
}

function Yr(e) {
    if (e)
        for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const Ed = Symbol.for("v-scx"),
    Sd = () => We(Ed);

function hc(e, t) {
    return si(e, null, t)
}

function ln(e, t, n) {
    return si(e, t, n)
}

function si(e, t, n = Ee) {
    const {
        immediate: r,
        deep: o,
        flush: s,
        once: i
    } = n, a = Le({}, n), l = t && r || !t && s !== "post";
    let u;
    if (An) {
        if (s === "sync") {
            const m = Sd();
            u = m.__watcherHandles || (m.__watcherHandles = [])
        } else if (!l) {
            const m = () => {};
            return m.stop = mt, m.resume = mt, m.pause = mt, m
        }
    }
    const c = Ne;
    a.call = (m, v, p) => ft(m, c, v, p);
    let f = !1;
    s === "post" ? a.scheduler = m => {
        $e(m, c && c.suspense)
    } : s !== "sync" && (f = !0, a.scheduler = (m, v) => {
        v ? m() : ei(m)
    }), a.augmentJob = m => {
        t && (m.flags |= 4), f && (m.flags |= 2, c && (m.id = c.uid, m.i = c))
    };
    const d = $f(e, t, a);
    return An && (u ? u.push(d) : l && d()), d
}

function Td(e, t, n) {
    const r = this.proxy,
        o = Re(e) ? e.includes(".") ? gc(r, e) : () => r[e] : e.bind(r, r);
    let s;
    le(t) ? s = t : (s = t.handler, n = t);
    const i = fn(this),
        a = si(o, s.bind(r), n);
    return i(), a
}

function gc(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let o = 0; o < n.length && r; o++) r = r[n[o]];
        return r
    }
}
const xd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${at(t)}Modifiers`] || e[`${Qt(t)}Modifiers`];

function Cd(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || Ee;
    let o = n;
    const s = t.startsWith("update:"),
        i = s && xd(r, t.slice(7));
    i && (i.trim && (o = n.map(c => Re(c) ? c.trim() : c)), i.number && (o = n.map(ts)));
    let a, l = r[a = Ro(t)] || r[a = Ro(at(t))];
    !l && s && (l = r[a = Ro(Qt(t))]), l && ft(l, e, 6, o);
    const u = r[a + "Once"];
    if (u) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[a]) return;
        e.emitted[a] = !0, ft(u, e, 6, o)
    }
}

function mc(e, t, n = !1) {
    const r = t.emitsCache,
        o = r.get(e);
    if (o !== void 0) return o;
    const s = e.emits;
    let i = {},
        a = !1;
    if (!le(e)) {
        const l = u => {
            const c = mc(u, t, !0);
            c && (a = !0, Le(i, c))
        };
        !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
    }
    return !s && !a ? (Te(e) && r.set(e, null), null) : (ae(s) ? s.forEach(l => i[l] = null) : Le(i, s), Te(e) && r.set(e, i), i)
}

function bo(e, t) {
    return !e || !pr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, Qt(t)) || _e(e, t))
}

function $o(e) {
    const {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: o,
        propsOptions: [s],
        slots: i,
        attrs: a,
        emit: l,
        render: u,
        renderCache: c,
        props: f,
        data: d,
        setupState: m,
        ctx: v,
        inheritAttrs: p
    } = e, E = Gr(e);
    let T, _;
    try {
        if (n.shapeFlag & 4) {
            const b = o || r,
                S = b;
            T = et(u.call(S, b, c, f, m, d, v)), _ = a
        } else {
            const b = t;
            T = et(b.length > 1 ? b(f, {
                attrs: a,
                slots: i,
                emit: l
            }) : b(f, null)), _ = t.props ? a : Pd(a)
        }
    } catch (b) {
        Jn.length = 0, Mn(b, e, 1), T = Ce(Ae)
    }
    let g = T;
    if (_ && p !== !1) {
        const b = Object.keys(_),
            {
                shapeFlag: S
            } = g;
        b.length && S & 7 && (s && b.some(Us) && (_ = kd(_, s)), g = kt(g, _, !1, !0))
    }
    return n.dirs && (g = kt(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && Pn(g, n.transition), T = g, Gr(E), T
}

function Rd(e, t = !0) {
    let n;
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        if (un(o)) {
            if (o.type !== Ae || o.children === "v-if") {
                if (n) return;
                n = o
            }
        } else return
    }
    return n
}
const Pd = e => {
        let t;
        for (const n in e)(n === "class" || n === "style" || pr(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    },
    kd = (e, t) => {
        const n = {};
        for (const r in e)(!Us(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
        return n
    };

function Ad(e, t, n) {
    const {
        props: r,
        children: o,
        component: s
    } = e, {
        props: i,
        children: a,
        patchFlag: l
    } = t, u = s.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && l >= 0) {
        if (l & 1024) return !0;
        if (l & 16) return r ? Ui(r, i, u) : !!i;
        if (l & 8) {
            const c = t.dynamicProps;
            for (let f = 0; f < c.length; f++) {
                const d = c[f];
                if (i[d] !== r[d] && !bo(u, d)) return !0
            }
        }
    } else return (o || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? Ui(r, i, u) : !0 : !!i;
    return !1
}

function Ui(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let o = 0; o < r.length; o++) {
        const s = r[o];
        if (t[s] !== e[s] && !bo(n, s)) return !0
    }
    return !1
}

function _o({
    vnode: e,
    parent: t
}, n) {
    for (; t;) {
        const r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)(e = t.vnode).el = n, t = t.parent;
        else break
    }
}
const Jr = e => e.__isSuspense;
let ds = 0;
const Od = {
        name: "Suspense",
        __isSuspense: !0,
        process(e, t, n, r, o, s, i, a, l, u) {
            if (e == null) Id(t, n, r, o, s, i, a, l, u);
            else {
                if (s && s.deps > 0 && !e.suspense.isInFallback) {
                    t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
                    return
                }
                Md(e, t, n, r, o, i, a, l, u)
            }
        },
        hydrate: Ld,
        normalize: jd
    },
    ii = Od;

function ir(e, t) {
    const n = e.props && e.props[t];
    le(n) && n()
}

function Id(e, t, n, r, o, s, i, a, l) {
    const {
        p: u,
        o: {
            createElement: c
        }
    } = l, f = c("div"), d = e.suspense = yc(e, o, r, t, f, n, s, i, a, l);
    u(null, d.pendingBranch = e.ssContent, f, null, r, d, s, i), d.deps > 0 ? (ir(e, "onPending"), ir(e, "onFallback"), u(null, e.ssFallback, t, n, r, null, s, i), Rn(d, e.ssFallback)) : d.resolve(!1, !0)
}

function Md(e, t, n, r, o, s, i, a, {
    p: l,
    um: u,
    o: {
        createElement: c
    }
}) {
    const f = t.suspense = e.suspense;
    f.vnode = t, t.el = e.el;
    const d = t.ssContent,
        m = t.ssFallback,
        {
            activeBranch: v,
            pendingBranch: p,
            isInFallback: E,
            isHydrating: T
        } = f;
    if (p) f.pendingBranch = d, ct(d, p) ? (l(p, d, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 ? f.resolve() : E && (T || (l(v, m, n, r, o, null, s, i, a), Rn(f, m)))) : (f.pendingId = ds++, T ? (f.isHydrating = !1, f.activeBranch = p) : u(p, o, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = c("div"), E ? (l(null, d, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 ? f.resolve() : (l(v, m, n, r, o, null, s, i, a), Rn(f, m))) : v && ct(d, v) ? (l(v, d, n, r, o, f, s, i, a), f.resolve(!0)) : (l(null, d, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 && f.resolve()));
    else if (v && ct(d, v)) l(v, d, n, r, o, f, s, i, a), Rn(f, d);
    else if (ir(t, "onPending"), f.pendingBranch = d, d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = ds++, l(null, d, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0) f.resolve();
    else {
        const {
            timeout: _,
            pendingId: g
        } = f;
        _ > 0 ? setTimeout(() => {
            f.pendingId === g && f.fallback(m)
        }, _) : _ === 0 && f.fallback(m)
    }
}

function yc(e, t, n, r, o, s, i, a, l, u, c = !1) {
    const {
        p: f,
        m: d,
        um: m,
        n: v,
        o: {
            parentNode: p,
            remove: E
        }
    } = u;
    let T;
    const _ = Hd(e);
    _ && t && t.pendingBranch && (T = t.pendingId, t.deps++);
    const g = e.props ? ul(e.props.timeout) : void 0,
        b = s,
        S = {
            vnode: e,
            parent: t,
            parentComponent: n,
            namespace: i,
            container: r,
            hiddenContainer: o,
            deps: 0,
            pendingId: ds++,
            timeout: typeof g == "number" ? g : -1,
            activeBranch: null,
            pendingBranch: null,
            isInFallback: !c,
            isHydrating: c,
            isUnmounted: !1,
            effects: [],
            resolve(P = !1, O = !1) {
                const {
                    vnode: V,
                    activeBranch: U,
                    pendingBranch: F,
                    pendingId: te,
                    effects: W,
                    parentComponent: re,
                    container: de
                } = S;
                let he = !1;
                S.isHydrating ? S.isHydrating = !1 : P || (he = U && F.transition && F.transition.mode === "out-in", he && (U.transition.afterLeave = () => {
                    te === S.pendingId && (d(F, de, s === b ? v(U) : s, 0), is(W))
                }), U && (p(U.el) === de && (s = v(U)), m(U, re, S, !0)), he || d(F, de, s, 0)), Rn(S, F), S.pendingBranch = null, S.isInFallback = !1;
                let X = S.parent,
                    ce = !1;
                for (; X;) {
                    if (X.pendingBranch) {
                        X.effects.push(...W), ce = !0;
                        break
                    }
                    X = X.parent
                }!ce && !he && is(W), S.effects = [], _ && t && t.pendingBranch && T === t.pendingId && (t.deps--, t.deps === 0 && !O && t.resolve()), ir(V, "onResolve")
            },
            fallback(P) {
                if (!S.pendingBranch) return;
                const {
                    vnode: O,
                    activeBranch: V,
                    parentComponent: U,
                    container: F,
                    namespace: te
                } = S;
                ir(O, "onFallback");
                const W = v(V),
                    re = () => {
                        S.isInFallback && (f(null, P, F, W, U, null, te, a, l), Rn(S, P))
                    },
                    de = P.transition && P.transition.mode === "out-in";
                de && (V.transition.afterLeave = re), S.isInFallback = !0, m(V, U, null, !0), de || re()
            },
            move(P, O, V) {
                S.activeBranch && d(S.activeBranch, P, O, V), S.container = P
            },
            next() {
                return S.activeBranch && v(S.activeBranch)
            },
            registerDep(P, O, V) {
                const U = !!S.pendingBranch;
                U && S.deps++;
                const F = P.vnode.el;
                P.asyncDep.catch(te => {
                    Mn(te, P, 0)
                }).then(te => {
                    if (P.isUnmounted || S.isUnmounted || S.pendingId !== P.suspenseId) return;
                    P.asyncResolved = !0;
                    const {
                        vnode: W
                    } = P;
                    gs(P, te), F && (W.el = F);
                    const re = !F && P.subTree.el;
                    O(P, W, p(F || P.subTree.el), F ? null : v(P.subTree), S, i, V), re && E(re), _o(P, W.el), U && --S.deps === 0 && S.resolve()
                })
            },
            unmount(P, O) {
                S.isUnmounted = !0, S.activeBranch && m(S.activeBranch, n, P, O), S.pendingBranch && m(S.pendingBranch, n, P, O)
            }
        };
    return S
}

function Ld(e, t, n, r, o, s, i, a, l) {
    const u = t.suspense = yc(t, r, n, e.parentNode, document.createElement("div"), null, o, s, i, a, !0),
        c = l(e, u.pendingBranch = t.ssContent, n, u, s, i);
    return u.deps === 0 && u.resolve(!1, !0), c
}

function jd(e) {
    const {
        shapeFlag: t,
        children: n
    } = e, r = t & 32;
    e.ssContent = Bi(r ? n.default : n), e.ssFallback = r ? Bi(n.fallback) : Ce(Ae)
}

function Bi(e) {
    let t;
    if (le(e)) {
        const n = kn && e._c;
        n && (e._d = !1, st()), e = e(), n && (e._d = !0, t = Xe, bc())
    }
    return ae(e) && (e = Rd(e)), e = et(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)), e
}

function vc(e, t) {
    t && t.pendingBranch ? ae(e) ? t.effects.push(...e) : t.effects.push(e) : is(e)
}

function Rn(e, t) {
    e.activeBranch = t;
    const {
        vnode: n,
        parentComponent: r
    } = e;
    let o = t.el;
    for (; !o && t.component;) t = t.component.subTree, o = t.el;
    n.el = o, r && r.subTree === n && (r.vnode.el = o, _o(r, o))
}

function Hd(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== !1
}
const Ke = Symbol.for("v-fgt"),
    cn = Symbol.for("v-txt"),
    Ae = Symbol.for("v-cmt"),
    Or = Symbol.for("v-stc"),
    Jn = [];
let Xe = null;

function st(e = !1) {
    Jn.push(Xe = e ? null : [])
}

function bc() {
    Jn.pop(), Xe = Jn[Jn.length - 1] || null
}
let kn = 1;

function Vi(e, t = !1) {
    kn += e, e < 0 && Xe && t && (Xe.hasOnce = !0)
}

function _c(e) {
    return e.dynamicChildren = kn > 0 ? Xe || wn : null, bc(), kn > 0 && Xe && Xe.push(e), e
}

function wc(e, t, n, r, o, s) {
    return _c(Ut(e, t, n, r, o, s, !0))
}

function Tt(e, t, n, r, o) {
    return _c(Ce(e, t, n, r, o, !0))
}

function un(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function ct(e, t) {
    return e.type === t.type && e.key === t.key
}
const Ec = ({
        key: e
    }) => e ?? null,
    Ir = ({
        ref: e,
        ref_key: t,
        ref_for: n
    }) => (typeof e == "number" && (e = "" + e), e != null ? Re(e) || Oe(e) || le(e) ? {
        i: Fe,
        r: e,
        k: t,
        f: !!n
    } : e : null);

function Ut(e, t = null, n = null, r = 0, o = null, s = e === Ke ? 0 : 1, i = !1, a = !1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Ec(t),
        ref: t && Ir(t),
        scopeId: Hl,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: s,
        patchFlag: r,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: Fe
    };
    return a ? (li(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Re(n) ? 8 : 16), kn > 0 && !i && Xe && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && Xe.push(l), l
}
const Ce = $d;

function $d(e, t = null, n = null, r = 0, o = null, s = !1) {
    if ((!e || e === Yl) && (e = Ae), un(e)) {
        const a = kt(e, t, !0);
        return n && li(a, n), kn > 0 && !s && Xe && (a.shapeFlag & 6 ? Xe[Xe.indexOf(e)] = a : Xe.push(a)), a.patchFlag = -2, a
    }
    if (Wd(e) && (e = e.__vccOpts), t) {
        t = Dd(t);
        let {
            class: a,
            style: l
        } = t;
        a && !Re(a) && (t.class = qs(a)), Te(l) && (Zs(l) && !ae(l) && (l = Le({}, l)), t.style = Ws(l))
    }
    const i = Re(e) ? 1 : Jr(e) ? 128 : $l(e) ? 64 : Te(e) ? 4 : le(e) ? 2 : 0;
    return Ut(e, t, n, r, o, i, s, !0)
}

function Dd(e) {
    return e ? Zs(e) || oc(e) ? Le({}, e) : e : null
}

function kt(e, t, n = !1, r = !1) {
    const {
        props: o,
        ref: s,
        patchFlag: i,
        children: a,
        transition: l
    } = e, u = t ? Sc(o || {}, t) : o, c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: u,
        key: u && Ec(u),
        ref: t && t.ref ? n && s ? ae(s) ? s.concat(Ir(t)) : [s, Ir(t)] : Ir(t) : s,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Ke ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: l,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && kt(e.ssContent),
        ssFallback: e.ssFallback && kt(e.ssFallback),
        placeholder: e.placeholder,
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return l && r && Pn(c, l.clone(c)), c
}

function ai(e = " ", t = 0) {
    return Ce(cn, null, e, t)
}

function vb(e = "", t = !1) {
    return t ? (st(), Tt(Ae, null, e)) : Ce(Ae, null, e)
}

function et(e) {
    return e == null || typeof e == "boolean" ? Ce(Ae) : ae(e) ? Ce(Ke, null, e.slice()) : un(e) ? Bt(e) : Ce(cn, null, String(e))
}

function Bt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : kt(e)
}

function li(e, t) {
    let n = 0;
    const {
        shapeFlag: r
    } = e;
    if (t == null) t = null;
    else if (ae(t)) n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1), li(e, o()), o._c && (o._d = !0));
            return
        } else {
            n = 32;
            const o = t._;
            !o && !oc(t) ? t._ctx = Fe : o === 3 && Fe && (Fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else le(t) ? (t = {
        default: t,
        _ctx: Fe
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ai(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function Sc(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const o in r)
            if (o === "class") t.class !== r.class && (t.class = qs([t.class, r.class]));
            else if (o === "style") t.style = Ws([t.style, r.style]);
        else if (pr(o)) {
            const s = t[o],
                i = r[o];
            i && s !== i && !(ae(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i)
        } else o !== "" && (t[o] = r[o])
    }
    return t
}

function Je(e, t, n, r = null) {
    ft(e, t, 7, [n, r])
}
const Nd = tc();
let Fd = 0;

function Ud(e, t, n) {
    const r = e.type,
        o = (t ? t.appContext : e.appContext) || Nd,
        s = {
            uid: Fd++,
            vnode: e,
            type: r,
            parent: t,
            appContext: o,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new hl(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(o.provides),
            ids: t ? t.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: ic(r, o),
            emitsOptions: mc(r, o),
            emit: null,
            emitted: null,
            propsDefaults: Ee,
            inheritAttrs: r.inheritAttrs,
            ctx: Ee,
            data: Ee,
            props: Ee,
            attrs: Ee,
            slots: Ee,
            refs: Ee,
            setupState: Ee,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return s.ctx = {
        _: s
    }, s.root = t ? t.root : s, s.emit = Cd.bind(null, s), e.ce && e.ce(s), s
}
let Ne = null;
const Jt = () => Ne || Fe;
let Xr, ps;
{
    const e = fo(),
        t = (n, r) => {
            let o;
            return (o = e[n]) || (o = e[n] = []), o.push(r), s => {
                o.length > 1 ? o.forEach(i => i(s)) : o[0](s)
            }
        };
    Xr = t("__VUE_INSTANCE_SETTERS__", n => Ne = n), ps = t("__VUE_SSR_SETTERS__", n => An = n)
}
const fn = e => {
        const t = Ne;
        return Xr(e), e.scope.on(), () => {
            e.scope.off(), Xr(t)
        }
    },
    hs = () => {
        Ne && Ne.scope.off(), Xr(null)
    };

function Tc(e) {
    return e.vnode.shapeFlag & 4
}
let An = !1;

function Bd(e, t = !1, n = !1) {
    t && ps(t);
    const {
        props: r,
        children: o
    } = e.vnode, s = Tc(e);
    pd(e, r, s, t), yd(e, o, n || t);
    const i = s ? Vd(e, t) : void 0;
    return t && ps(!1), i
}

function Vd(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, od);
    const {
        setup: r
    } = n;
    if (r) {
        Ct();
        const o = e.setupContext = r.length > 1 ? Cc(e) : null,
            s = fn(e),
            i = gr(r, e, 0, [e.props, o]),
            a = Vs(i);
        if (Rt(), s(), (a || e.sp) && !Gt(e) && ti(e), a) {
            if (i.then(hs, hs), t) return i.then(l => {
                gs(e, l)
            }).catch(l => {
                Mn(l, e, 0)
            });
            e.asyncDep = i
        } else gs(e, i)
    } else xc(e)
}

function gs(e, t, n) {
    le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Te(t) && (e.setupState = Ol(t)), xc(e)
}

function xc(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || mt);
    {
        const o = fn(e);
        Ct();
        try {
            id(e)
        } finally {
            Rt(), o()
        }
    }
}
const Kd = {
    get(e, t) {
        return Ve(e, "get", ""), e[t]
    }
};

function Cc(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {
        attrs: new Proxy(e.attrs, Kd),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function wo(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ol(Rf(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in Yn) return Yn[n](e)
        },
        has(t, n) {
            return n in t || n in Yn
        }
    })) : e.proxy
}

function ms(e, t = !0) {
    return le(e) ? e.displayName || e.name : e.name || t && e.__name
}

function Wd(e) {
    return le(e) && "__vccOpts" in e
}
const Me = (e, t) => jf(e, t, An);

function Ie(e, t, n) {
    const r = arguments.length;
    return r === 2 ? Te(t) && !ae(t) ? un(t) ? Ce(e, null, [t]) : Ce(e, t) : Ce(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && un(n) && (n = [n]), Ce(e, t, n))
}
const qd = "3.5.18";
/**
 * @vue/runtime-dom v3.5.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let ys;
const Ki = typeof window < "u" && window.trustedTypes;
if (Ki) try {
    ys = Ki.createPolicy("vue", {
        createHTML: e => e
    })
} catch {}
const Rc = ys ? e => ys.createHTML(e) : e => e,
    zd = "http://www.w3.org/2000/svg",
    Gd = "http://www.w3.org/1998/Math/MathML",
    wt = typeof document < "u" ? document : null,
    Wi = wt && wt.createElement("template"),
    Qd = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, r) => {
            const o = t === "svg" ? wt.createElementNS(zd, e) : t === "mathml" ? wt.createElementNS(Gd, e) : n ? wt.createElement(e, {
                is: n
            }) : wt.createElement(e);
            return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o
        },
        createText: e => wt.createTextNode(e),
        createComment: e => wt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => wt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, r, o, s) {
            const i = n ? n.previousSibling : t.lastChild;
            if (o && (o === s || o.nextSibling))
                for (; t.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)););
            else {
                Wi.innerHTML = Rc(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
                const a = Wi.content;
                if (r === "svg" || r === "mathml") {
                    const l = a.firstChild;
                    for (; l.firstChild;) a.appendChild(l.firstChild);
                    a.removeChild(l)
                }
                t.insertBefore(a, n)
            }
            return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    },
    Dt = "transition",
    Fn = "animation",
    ar = Symbol("_vtc"),
    Pc = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    },
    Yd = Le({}, Dl, Pc),
    Jd = e => (e.displayName = "Transition", e.props = Yd, e),
    Xd = Jd((e, {
        slots: t
    }) => Ie(Vf, Zd(e), t)),
    en = (e, t = []) => {
        ae(e) ? e.forEach(n => n(...t)) : e && e(...t)
    },
    qi = e => e ? ae(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function Zd(e) {
    const t = {};
    for (const W in e) W in Pc || (t[W] = e[W]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: r,
        duration: o,
        enterFromClass: s = `${n}-enter-from`,
        enterActiveClass: i = `${n}-enter-active`,
        enterToClass: a = `${n}-enter-to`,
        appearFromClass: l = s,
        appearActiveClass: u = i,
        appearToClass: c = a,
        leaveFromClass: f = `${n}-leave-from`,
        leaveActiveClass: d = `${n}-leave-active`,
        leaveToClass: m = `${n}-leave-to`
    } = e, v = ep(o), p = v && v[0], E = v && v[1], {
        onBeforeEnter: T,
        onEnter: _,
        onEnterCancelled: g,
        onLeave: b,
        onLeaveCancelled: S,
        onBeforeAppear: P = T,
        onAppear: O = _,
        onAppearCancelled: V = g
    } = t, U = (W, re, de, he) => {
        W._enterCancelled = he, tn(W, re ? c : a), tn(W, re ? u : i), de && de()
    }, F = (W, re) => {
        W._isLeaving = !1, tn(W, f), tn(W, m), tn(W, d), re && re()
    }, te = W => (re, de) => {
        const he = W ? O : _,
            X = () => U(re, W, de);
        en(he, [re, X]), zi(() => {
            tn(re, W ? l : s), bt(re, W ? c : a), qi(he) || Gi(re, r, p, X)
        })
    };
    return Le(t, {
        onBeforeEnter(W) {
            en(T, [W]), bt(W, s), bt(W, i)
        },
        onBeforeAppear(W) {
            en(P, [W]), bt(W, l), bt(W, u)
        },
        onEnter: te(!1),
        onAppear: te(!0),
        onLeave(W, re) {
            W._isLeaving = !0;
            const de = () => F(W, re);
            bt(W, f), W._enterCancelled ? (bt(W, d), Ji()) : (Ji(), bt(W, d)), zi(() => {
                W._isLeaving && (tn(W, f), bt(W, m), qi(b) || Gi(W, r, E, de))
            }), en(b, [W, de])
        },
        onEnterCancelled(W) {
            U(W, !1, void 0, !0), en(g, [W])
        },
        onAppearCancelled(W) {
            U(W, !0, void 0, !0), en(V, [W])
        },
        onLeaveCancelled(W) {
            F(W), en(S, [W])
        }
    })
}

function ep(e) {
    if (e == null) return null;
    if (Te(e)) return [Do(e.enter), Do(e.leave)];
    {
        const t = Do(e);
        return [t, t]
    }
}

function Do(e) {
    return ul(e)
}

function bt(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[ar] || (e[ar] = new Set)).add(t)
}

function tn(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const n = e[ar];
    n && (n.delete(t), n.size || (e[ar] = void 0))
}

function zi(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let tp = 0;

function Gi(e, t, n, r) {
    const o = e._endId = ++tp,
        s = () => {
            o === e._endId && r()
        };
    if (n != null) return setTimeout(s, n);
    const {
        type: i,
        timeout: a,
        propCount: l
    } = np(e, t);
    if (!i) return r();
    const u = i + "end";
    let c = 0;
    const f = () => {
            e.removeEventListener(u, d), s()
        },
        d = m => {
            m.target === e && ++c >= l && f()
        };
    setTimeout(() => {
        c < l && f()
    }, a + 1), e.addEventListener(u, d)
}

function np(e, t) {
    const n = window.getComputedStyle(e),
        r = v => (n[v] || "").split(", "),
        o = r(`${Dt}Delay`),
        s = r(`${Dt}Duration`),
        i = Qi(o, s),
        a = r(`${Fn}Delay`),
        l = r(`${Fn}Duration`),
        u = Qi(a, l);
    let c = null,
        f = 0,
        d = 0;
    t === Dt ? i > 0 && (c = Dt, f = i, d = s.length) : t === Fn ? u > 0 && (c = Fn, f = u, d = l.length) : (f = Math.max(i, u), c = f > 0 ? i > u ? Dt : Fn : null, d = c ? c === Dt ? s.length : l.length : 0);
    const m = c === Dt && /\b(transform|all)(,|$)/.test(r(`${Dt}Property`).toString());
    return {
        type: c,
        timeout: f,
        propCount: d,
        hasTransform: m
    }
}

function Qi(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, r) => Yi(n) + Yi(e[r])))
}

function Yi(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function Ji() {
    return document.body.offsetHeight
}

function rp(e, t, n) {
    const r = e[ar];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Zr = Symbol("_vod"),
    kc = Symbol("_vsh"),
    bb = {
        beforeMount(e, {
            value: t
        }, {
            transition: n
        }) {
            e[Zr] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Un(e, t)
        },
        mounted(e, {
            value: t
        }, {
            transition: n
        }) {
            n && t && n.enter(e)
        },
        updated(e, {
            value: t,
            oldValue: n
        }, {
            transition: r
        }) {
            !t != !n && (r ? t ? (r.beforeEnter(e), Un(e, !0), r.enter(e)) : r.leave(e, () => {
                Un(e, !1)
            }) : Un(e, t))
        },
        beforeUnmount(e, {
            value: t
        }) {
            Un(e, t)
        }
    };

function Un(e, t) {
    e.style.display = t ? e[Zr] : "none", e[kc] = !t
}
const op = Symbol(""),
    sp = /(^|;)\s*display\s*:/;

function ip(e, t, n) {
    const r = e.style,
        o = Re(n);
    let s = !1;
    if (n && !o) {
        if (t)
            if (Re(t))
                for (const i of t.split(";")) {
                    const a = i.slice(0, i.indexOf(":")).trim();
                    n[a] == null && Mr(r, a, "")
                } else
                    for (const i in t) n[i] == null && Mr(r, i, "");
        for (const i in n) i === "display" && (s = !0), Mr(r, i, n[i])
    } else if (o) {
        if (t !== n) {
            const i = r[op];
            i && (n += ";" + i), r.cssText = n, s = sp.test(n)
        }
    } else t && e.removeAttribute("style");
    Zr in e && (e[Zr] = s ? r.display : "", e[kc] && (r.display = "none"))
}
const Xi = /\s*!important$/;

function Mr(e, t, n) {
    if (ae(n)) n.forEach(r => Mr(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
        const r = ap(e, t);
        Xi.test(n) ? e.setProperty(Qt(r), n.replace(Xi, ""), "important") : e[r] = n
    }
}
const Zi = ["Webkit", "Moz", "ms"],
    No = {};

function ap(e, t) {
    const n = No[t];
    if (n) return n;
    let r = at(t);
    if (r !== "filter" && r in e) return No[t] = r;
    r = uo(r);
    for (let o = 0; o < Zi.length; o++) {
        const s = Zi[o] + r;
        if (s in e) return No[t] = s
    }
    return t
}
const ea = "http://www.w3.org/1999/xlink";

function ta(e, t, n, r, o, s = of(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ea, t.slice(6, t.length)) : e.setAttributeNS(ea, t, n) : n == null || s && !fl(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : At(n) ? String(n) : n)
}

function na(e, t, n, r, o) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? Rc(n) : n);
        return
    }
    const s = e.tagName;
    if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
        const a = s === "OPTION" ? e.getAttribute("value") || "" : e.value,
            l = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
        return
    }
    let i = !1;
    if (n === "" || n == null) {
        const a = typeof e[t];
        a === "boolean" ? n = fl(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0)
    }
    try {
        e[t] = n
    } catch {}
    i && e.removeAttribute(o || t)
}

function vn(e, t, n, r) {
    e.addEventListener(t, n, r)
}

function lp(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const ra = Symbol("_vei");

function cp(e, t, n, r, o = null) {
    const s = e[ra] || (e[ra] = {}),
        i = s[t];
    if (r && i) i.value = r;
    else {
        const [a, l] = up(t);
        if (r) {
            const u = s[t] = pp(r, o);
            vn(e, a, u, l)
        } else i && (lp(e, a, i, l), s[t] = void 0)
    }
}
const oa = /(?:Once|Passive|Capture)$/;

function up(e) {
    let t;
    if (oa.test(e)) {
        t = {};
        let r;
        for (; r = e.match(oa);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Qt(e.slice(2)), t]
}
let Fo = 0;
const fp = Promise.resolve(),
    dp = () => Fo || (fp.then(() => Fo = 0), Fo = Date.now());

function pp(e, t) {
    const n = r => {
        if (!r._vts) r._vts = Date.now();
        else if (r._vts <= n.attached) return;
        ft(hp(r, n.value), t, 5, [r])
    };
    return n.value = e, n.attached = dp(), n
}

function hp(e, t) {
    if (ae(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(r => o => !o._stopped && r && r(o))
    } else return t
}
const sa = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    gp = (e, t, n, r, o, s) => {
        const i = o === "svg";
        t === "class" ? rp(e, r, i) : t === "style" ? ip(e, n, r) : pr(t) ? Us(t) || cp(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : mp(e, t, r, i)) ? (na(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ta(e, t, r, i, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Re(r)) ? na(e, at(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ta(e, t, r, i))
    };

function mp(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && sa(t) && le(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const o = e.tagName;
        if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return !1
    }
    return sa(t) && Re(n) ? !1 : t in e
}
const ia = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return ae(t) ? n => Tn(t, n) : t
};

function yp(e) {
    e.target.composing = !0
}

function aa(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const Uo = Symbol("_assign"),
    _b = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: n,
                number: r
            }
        }, o) {
            e[Uo] = ia(o);
            const s = r || o.props && o.props.type === "number";
            vn(e, t ? "change" : "input", i => {
                if (i.target.composing) return;
                let a = e.value;
                n && (a = a.trim()), s && (a = ts(a)), e[Uo](a)
            }), n && vn(e, "change", () => {
                e.value = e.value.trim()
            }), t || (vn(e, "compositionstart", yp), vn(e, "compositionend", aa), vn(e, "change", aa))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t ?? ""
        },
        beforeUpdate(e, {
            value: t,
            oldValue: n,
            modifiers: {
                lazy: r,
                trim: o,
                number: s
            }
        }, i) {
            if (e[Uo] = ia(i), e.composing) return;
            const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? ts(e.value) : e.value,
                l = t ?? "";
            a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l))
        }
    },
    vp = ["ctrl", "shift", "alt", "meta"],
    bp = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => vp.some(n => e[`${n}Key`] && !t.includes(n))
    },
    wb = (e, t) => {
        const n = e._withMods || (e._withMods = {}),
            r = t.join(".");
        return n[r] || (n[r] = (o, ...s) => {
            for (let i = 0; i < t.length; i++) {
                const a = bp[t[i]];
                if (a && a(o, t)) return
            }
            return e(o, ...s)
        })
    },
    _p = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    },
    Eb = (e, t) => {
        const n = e._withKeys || (e._withKeys = {}),
            r = t.join(".");
        return n[r] || (n[r] = o => {
            if (!("key" in o)) return;
            const s = Qt(o.key);
            if (t.some(i => i === s || _p[i] === s)) return e(o)
        })
    },
    Ac = Le({
        patchProp: gp
    }, Qd);
let Xn, la = !1;

function wp() {
    return Xn || (Xn = bd(Ac))
}

function Ep() {
    return Xn = la ? Xn : _d(Ac), la = !0, Xn
}
const Sp = (...e) => {
        const t = wp().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const o = Ic(r);
            if (!o) return;
            const s = t._component;
            !le(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
            const i = n(o, !1, Oc(o));
            return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i
        }, t
    },
    Tp = (...e) => {
        const t = Ep().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const o = Ic(r);
            if (o) return n(o, !0, Oc(o))
        }, t
    };

function Oc(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function Ic(e) {
    return Re(e) ? document.querySelector(e) : e
}
const xp = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    Cp = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    Rp = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

function Pp(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
        kp(e);
        return
    }
    return t
}

function kp(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}

function Mc(e, t = {}) {
    if (typeof e != "string") return e;
    if (e[0] === '"' && e[e.length - 1] === '"' && e.indexOf("\\") === -1) return e.slice(1, -1);
    const n = e.trim();
    if (n.length <= 9) switch (n.toLowerCase()) {
    case "true":
        return !0;
    case "false":
        return !1;
    case "undefined":
        return;
    case "null":
        return null;
    case "nan":
        return Number.NaN;
    case "infinity":
        return Number.POSITIVE_INFINITY;
    case "-infinity":
        return Number.NEGATIVE_INFINITY
    }
    if (!Rp.test(e)) {
        if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (xp.test(e) || Cp.test(e)) {
            if (t.strict) throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, Pp)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict) throw r;
        return e
    }
}
const Ap = /#/g,
    Op = /&/g,
    Ip = /\//g,
    Mp = /=/g,
    ci = /\+/g,
    Lp = /%5e/gi,
    jp = /%60/gi,
    Hp = /%7c/gi,
    $p = /%20/gi;

function Dp(e) {
    return encodeURI("" + e).replace(Hp, "|")
}

function vs(e) {
    return Dp(typeof e == "string" ? e : JSON.stringify(e)).replace(ci, "%2B").replace($p, "+").replace(Ap, "%23").replace(Op, "%26").replace(jp, "`").replace(Lp, "^").replace(Ip, "%2F")
}

function Bo(e) {
    return vs(e).replace(Mp, "%3D")
}

function eo(e = "") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}

function Np(e) {
    return eo(e.replace(ci, " "))
}

function Fp(e) {
    return eo(e.replace(ci, " "))
}

function Lc(e = "") {
    const t = Object.create(null);
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2) continue;
        const o = Np(r[1]);
        if (o === "__proto__" || o === "constructor") continue;
        const s = Fp(r[2] || "");
        t[o] === void 0 ? t[o] = s : Array.isArray(t[o]) ? t[o].push(s) : t[o] = [t[o], s]
    }
    return t
}

function Up(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map(n => `${Bo(e)}=${vs(n)}`).join("&") : `${Bo(e)}=${vs(t)}` : Bo(e)
}

function jc(e) {
    return Object.keys(e).filter(t => e[t] !== void 0).map(t => Up(t, e[t])).filter(Boolean).join("&")
}
const Bp = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
    Hc = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
    Vp = /^([/\\]\s*){2,}[^/\\]/,
    Kp = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
    Wp = /\/$|\/\?|\/#/,
    qp = /^\.?\//;

function It(e, t = {}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }), t.strict ? Bp.test(e) : Hc.test(e) || (t.acceptRelative ? Vp.test(e) : !1)
}

function zp(e) {
    return !!e && Kp.test(e)
}

function bs(e = "", t) {
    return t ? Wp.test(e) : e.endsWith("/")
}

function jn(e = "", t) {
    if (!t) return (bs(e) ? e.slice(0, -1) : e) || "/";
    if (!bs(e, !0)) return e || "/";
    let n = e,
        r = "";
    const o = e.indexOf("#");
    o !== -1 && (n = e.slice(0, o), r = e.slice(o));
    const [s, ...i] = n.split("?");
    return ((s.endsWith("/") ? s.slice(0, -1) : s) || "/") + (i.length > 0 ? `?${i.join("?")}` : "") + r
}

function lr(e = "", t) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (bs(e, !0)) return e || "/";
    let n = e,
        r = "";
    const o = e.indexOf("#");
    if (o !== -1 && (n = e.slice(0, o), r = e.slice(o), !n)) return r;
    const [s, ...i] = n.split("?");
    return s + "/" + (i.length > 0 ? `?${i.join("?")}` : "") + r
}

function Gp(e = "") {
    return e.startsWith("/")
}

function _s(e = "") {
    return Gp(e) ? e : "/" + e
}

function ws(e, t) {
    if ($c(t) || It(e)) return e;
    const n = jn(t);
    return e.startsWith(n) ? e : ui(n, e)
}

function ca(e, t) {
    if ($c(t)) return e;
    const n = jn(t);
    if (!e.startsWith(n)) return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}

function to(e, t) {
    const n = Eo(e),
        r = {
            ...Lc(n.search),
            ...t
        };
    return n.search = jc(r), Zp(n)
}

function $c(e) {
    return !e || e === "/"
}

function Qp(e) {
    return e && e !== "/"
}

function ui(e, ...t) {
    let n = e || "";
    for (const r of t.filter(o => Qp(o)))
        if (n) {
            const o = r.replace(qp, "");
            n = lr(n) + o
        } else n = r;
    return n
}

function Dc(...e) {
    var i, a, l, u;
    const t = /\/(?!\/)/,
        n = e.filter(Boolean),
        r = [];
    let o = 0;
    for (const c of n)
        if (!(!c || c === "/")) {
            for (const [f, d] of c.split(t).entries())
                if (!(!d || d === ".")) {
                    if (d === "..") {
                        if (r.length === 1 && It(r[0])) continue;
                        r.pop(), o--;
                        continue
                    }
                    if (f === 1 && ((i = r[r.length - 1]) != null && i.endsWith(":/"))) {
                        r[r.length - 1] += "/" + d;
                        continue
                    }
                    r.push(d), o++
                }
        } let s = r.join("/");
    return o >= 0 ? (a = n[0]) != null && a.startsWith("/") && !s.startsWith("/") ? s = "/" + s : (l = n[0]) != null && l.startsWith("./") && !s.startsWith("./") && (s = "./" + s) : s = "../".repeat(-1 * o) + s, (u = n[n.length - 1]) != null && u.endsWith("/") && !s.endsWith("/") && (s += "/"), s
}

function Yp(e) {
    return Jp(e, "https://")
}

function Jp(e, t) {
    let n = e.match(Hc);
    return n || (n = e.match(/^\/{2,}/)), n ? t + e.slice(n[0].length) : t + e
}

function Xp(e, t, n = {}) {
    return n.trailingSlash || (e = lr(e), t = lr(t)), n.leadingSlash || (e = _s(e), t = _s(t)), n.encoding || (e = eo(e), t = eo(t)), e === t
}
const Nc = Symbol.for("ufo:protocolRelative");

function Eo(e = "", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
        const [, f, d = ""] = n;
        return {
            protocol: f.toLowerCase(),
            pathname: d,
            href: f + d,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!It(e, {
            acceptRelative: !0
        })) return ua(e);
    const [, r = "", o, s = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let [, i = "", a = ""] = s.match(/([^#/?]*)(.*)?/) || [];
    r === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
    const {
        pathname: l,
        search: u,
        hash: c
    } = ua(a);
    return {
        protocol: r.toLowerCase(),
        auth: o ? o.slice(0, Math.max(0, o.length - 1)) : "",
        host: i,
        pathname: l,
        search: u,
        hash: c,
        [Nc]: !r
    }
}

function ua(e = "") {
    const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}

function Zp(e) {
    const t = e.pathname || "",
        n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
        r = e.hash || "",
        o = e.auth ? e.auth + "@" : "",
        s = e.host || "";
    return (e.protocol || e[Nc] ? (e.protocol || "") + "//" : "") + o + s + t + n + r
}
class eh extends Error {
    constructor(t, n) {
        super(t, n), this.name = "FetchError", n != null && n.cause && !this.cause && (this.cause = n.cause)
    }
}

function th(e) {
    var l, u, c, f, d;
    const t = ((l = e.error) == null ? void 0 : l.message) || ((u = e.error) == null ? void 0 : u.toString()) || "",
        n = ((c = e.request) == null ? void 0 : c.method) || ((f = e.options) == null ? void 0 : f.method) || "GET",
        r = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/",
        o = `[${n}] ${JSON.stringify(r)}`,
        s = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>",
        i = `${o}: ${s}${t?` ${t}`:""}`,
        a = new eh(i, e.error ? {
            cause: e.error
        } : void 0);
    for (const m of ["request", "options", "response"]) Object.defineProperty(a, m, {
        get() {
            return e[m]
        }
    });
    for (const [m, v] of [
            ["data", "_data"],
            ["status", "status"],
            ["statusCode", "status"],
            ["statusText", "statusText"],
            ["statusMessage", "statusText"]
        ]) Object.defineProperty(a, m, {
        get() {
            return e.response && e.response[v]
        }
    });
    return a
}
const nh = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function fa(e = "GET") {
    return nh.has(e.toUpperCase())
}

function rh(e) {
    if (e === void 0) return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const oh = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
    sh = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function ih(e = "") {
    if (!e) return "json";
    const t = e.split(";").shift() || "";
    return sh.test(t) ? "json" : oh.has(t) || t.startsWith("text/") ? "text" : "blob"
}

function ah(e, t, n, r) {
    const o = lh((t == null ? void 0 : t.headers) ?? (e == null ? void 0 : e.headers), n == null ? void 0 : n.headers, r);
    let s;
    return (n != null && n.query || n != null && n.params || t != null && t.params || t != null && t.query) && (s = {
        ...n == null ? void 0 : n.params,
        ...n == null ? void 0 : n.query,
        ...t == null ? void 0 : t.params,
        ...t == null ? void 0 : t.query
    }), {
        ...n,
        ...t,
        query: s,
        params: s,
        headers: o
    }
}

function lh(e, t, n) {
    if (!t) return new n(e);
    const r = new n(t);
    if (e)
        for (const [o, s] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e)) r.set(o, s);
    return r
}
async function Pr(e, t) {
    if (t)
        if (Array.isArray(t))
            for (const n of t) await n(e);
        else await t(e)
}
const ch = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
    uh = new Set([101, 204, 205, 304]);

function Fc(e = {}) {
    const {
        fetch: t = globalThis.fetch,
        Headers: n = globalThis.Headers,
        AbortController: r = globalThis.AbortController
    } = e;
    async function o(a) {
        const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !l) {
            let c;
            typeof a.options.retry == "number" ? c = a.options.retry : c = fa(a.options.method) ? 0 : 1;
            const f = a.response && a.response.status || 500;
            if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : ch.has(f))) {
                const d = typeof a.options.retryDelay == "function" ? a.options.retryDelay(a) : a.options.retryDelay || 0;
                return d > 0 && await new Promise(m => setTimeout(m, d)), s(a.request, {
                    ...a.options,
                    retry: c - 1
                })
            }
        }
        const u = th(a);
        throw Error.captureStackTrace && Error.captureStackTrace(u, s), u
    }
    const s = async function (l, u = {}) {
        const c = {
            request: l,
            options: ah(l, u, e.defaults, n),
            response: void 0,
            error: void 0
        };
        c.options.method && (c.options.method = c.options.method.toUpperCase()), c.options.onRequest && await Pr(c, c.options.onRequest), typeof c.request == "string" && (c.options.baseURL && (c.request = ws(c.request, c.options.baseURL)), c.options.query && (c.request = to(c.request, c.options.query), delete c.options.query), "query" in c.options && delete c.options.query, "params" in c.options && delete c.options.params), c.options.body && fa(c.options.method) && (rh(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body), c.options.headers = new n(c.options.headers || {}), c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"), c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")) : ("pipeTo" in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex" in c.options || (c.options.duplex = "half")));
        let f;
        if (!c.options.signal && c.options.timeout) {
            const m = new r;
            f = setTimeout(() => {
                const v = new Error("[TimeoutError]: The operation was aborted due to timeout");
                v.name = "TimeoutError", v.code = 23, m.abort(v)
            }, c.options.timeout), c.options.signal = m.signal
        }
        try {
            c.response = await t(c.request, c.options)
        } catch (m) {
            return c.error = m, c.options.onRequestError && await Pr(c, c.options.onRequestError), await o(c)
        } finally {
            f && clearTimeout(f)
        }
        if ((c.response.body || c.response._bodyInit) && !uh.has(c.response.status) && c.options.method !== "HEAD") {
            const m = (c.options.parseResponse ? "json" : c.options.responseType) || ih(c.response.headers.get("content-type") || "");
            switch (m) {
            case "json": {
                const v = await c.response.text(),
                    p = c.options.parseResponse || Mc;
                c.response._data = p(v);
                break
            }
            case "stream": {
                c.response._data = c.response.body || c.response._bodyInit;
                break
            }
            default:
                c.response._data = await c.response[m]()
            }
        }
        return c.options.onResponse && await Pr(c, c.options.onResponse), !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await Pr(c, c.options.onResponseError), await o(c)) : c.response
    }, i = async function (l, u) {
        return (await s(l, u))._data
    };
    return i.raw = s, i.native = (...a) => t(...a), i.create = (a = {}, l = {}) => Fc({
        ...e,
        ...l,
        defaults: {
            ...e.defaults,
            ...l.defaults,
            ...a
        }
    }), i
}
const no = function () {
        if (typeof globalThis < "u") return globalThis;
        if (typeof self < "u") return self;
        if (typeof window < "u") return window;
        if (typeof global < "u") return global;
        throw new Error("unable to locate global object")
    }(),
    fh = no.fetch ? (...e) => no.fetch(...e) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")),
    dh = no.Headers,
    ph = no.AbortController,
    hh = Fc({
        fetch: fh,
        Headers: dh,
        AbortController: ph
    }),
    gh = hh,
    mh = () => {
        var e;
        return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
    },
    ro = mh().app,
    yh = () => ro.baseURL,
    vh = () => ro.buildAssetsDir,
    fi = (...e) => Dc(Uc(), vh(), ...e),
    Uc = (...e) => {
        const t = ro.cdnURL || ro.baseURL;
        return e.length ? Dc(t, ...e) : t
    };
globalThis.__buildAssetsURL = fi, globalThis.__publicAssetsURL = Uc;
globalThis.$fetch || (globalThis.$fetch = gh.create({
    baseURL: yh()
}));

function Es(e, t = {}, n) {
    for (const r in e) {
        const o = e[r],
            s = n ? `${n}:${r}` : r;
        typeof o == "object" && o !== null ? Es(o, t, s) : typeof o == "function" && (t[s] = o)
    }
    return t
}
const bh = {
        run: e => e()
    },
    _h = () => bh,
    Bc = typeof console.createTask < "u" ? console.createTask : _h;

function wh(e, t) {
    const n = t.shift(),
        r = Bc(n);
    return e.reduce((o, s) => o.then(() => r.run(() => s(...t))), Promise.resolve())
}

function Eh(e, t) {
    const n = t.shift(),
        r = Bc(n);
    return Promise.all(e.map(o => r.run(() => o(...t))))
}

function Vo(e, t) {
    for (const n of [...e]) n(t)
}
class Sh {
    constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, r = {}) {
        if (!t || typeof n != "function") return () => {};
        const o = t;
        let s;
        for (; this._deprecatedHooks[t];) s = this._deprecatedHooks[t], t = s.to;
        if (s && !r.allowDeprecated) {
            let i = s.message;
            i || (i = `${o} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i))
        }
        if (!n.name) try {
            Object.defineProperty(n, "name", {
                get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                configurable: !0
            })
        } catch {}
        return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
            n && (this.removeHook(t, n), n = void 0)
        }
    }
    hookOnce(t, n) {
        let r, o = (...s) => (typeof r == "function" && r(), r = void 0, o = void 0, n(...s));
        return r = this.hook(t, o), r
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const r = this._hooks[t].indexOf(n);
            r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[t] || [];
        delete this._hooks[t];
        for (const o of r) this.hook(t, o)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t) this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = Es(t),
            r = Object.keys(n).map(o => this.hook(o, n[o]));
        return () => {
            for (const o of r.splice(0, r.length)) o()
        }
    }
    removeHooks(t) {
        const n = Es(t);
        for (const r in n) this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks) delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t), this.callHookWith(wh, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t), this.callHookWith(Eh, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const o = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && Vo(this._before, o);
        const s = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return s instanceof Promise ? s.finally(() => {
            this._after && o && Vo(this._after, o)
        }) : (this._after && o && Vo(this._after, o), s)
    }
    beforeEach(t) {
        return this._before = this._before || [], this._before.push(t), () => {
            if (this._before !== void 0) {
                const n = this._before.indexOf(t);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [], this._after.push(t), () => {
            if (this._after !== void 0) {
                const n = this._after.indexOf(t);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}

function Vc() {
    return new Sh
}

function Th(e = {}) {
    let t, n = !1;
    const r = i => {
        if (t && t !== i) throw new Error("Context conflict")
    };
    let o;
    if (e.asyncContext) {
        const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        i ? o = new i : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const s = () => {
        if (o) {
            const i = o.getStore();
            if (i !== void 0) return i
        }
        return t
    };
    return {
        use: () => {
            const i = s();
            if (i === void 0) throw new Error("Context is not available");
            return i
        },
        tryUse: () => s(),
        set: (i, a) => {
            a || r(i), t = i, n = !0
        },
        unset: () => {
            t = void 0, n = !1
        },
        call: (i, a) => {
            r(i), t = i;
            try {
                return o ? o.run(i, a) : a()
            } finally {
                n || (t = void 0)
            }
        },
        async callAsync(i, a) {
            t = i;
            const l = () => {
                    t = i
                },
                u = () => t === i ? l : void 0;
            Ss.add(u);
            try {
                const c = o ? o.run(i, a) : a();
                return n || (t = void 0), await c
            } finally {
                Ss.delete(u)
            }
        }
    }
}

function xh(e = {}) {
    const t = {};
    return {
        get(n, r = {}) {
            return t[n] || (t[n] = Th({
                ...e,
                ...r
            })), t[n]
        }
    }
}
const oo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {},
    da = "__unctx__",
    Ch = oo[da] || (oo[da] = xh()),
    Rh = (e, t = {}) => Ch.get(e, t),
    pa = "__unctx_async_handlers__",
    Ss = oo[pa] || (oo[pa] = new Set);

function Zn(e) {
    const t = [];
    for (const o of Ss) {
        const s = o();
        s && t.push(s)
    }
    const n = () => {
        for (const o of t) o()
    };
    let r = e();
    return r && typeof r == "object" && "catch" in r && (r = r.catch(o => {
        throw n(), o
    })), [r, n]
}
const Ph = !1,
    Ts = !1,
    kh = !1,
    Sb = {
        componentName: "NuxtLink",
        prefetch: !0,
        prefetchOn: {
            visibility: !0
        }
    },
    Tb = {
        value: null,
        errorValue: null,
        deep: !0
    },
    Ah = null,
    xb = {},
    Oh = "#__nuxt",
    Kc = "nuxt-app",
    ha = 36e5,
    Ih = "vite:preloadError";

function Wc(e = Kc) {
    return Rh(e, {
        asyncContext: !1
    })
}
const Mh = "__nuxt_plugin";

function Lh(e) {
    var o;
    let t = 0;
    const n = {
        _id: e.id || Kc || "nuxt-app",
        _scope: sf(),
        provide: void 0,
        globalName: "nuxt",
        versions: {
            get nuxt() {
                return "3.16.2"
            },
            get vue() {
                return n.vueApp.version
            }
        },
        payload: Wt({
            ...((o = e.ssrContext) == null ? void 0 : o.payload) || {},
            data: Wt({}),
            state: Yt({}),
            once: new Set,
            _errors: Wt({})
        }),
        static: {
            data: {}
        },
        runWithContext(s) {
            return n._scope.active && !zs() ? n._scope.run(() => ga(n, s)) : ga(n, s)
        },
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating) return () => {};
            t++;
            let s = !1;
            return () => {
                if (!s && (s = !0, t--, t === 0)) return n.isHydrating = !1, n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: Wt({}),
        _payloadRevivers: {},
        ...e
    };
    {
        const s = window.__NUXT__;
        if (s)
            for (const i in s) switch (i) {
            case "data":
            case "state":
            case "_errors":
                Object.assign(n.payload[i], s[i]);
                break;
            default:
                n.payload[i] = s[i]
            }
    }
    n.hooks = Vc(), n.hook = n.hooks.hook, n.callHook = n.hooks.callHook, n.provide = (s, i) => {
        const a = "$" + s;
        kr(n, a, i), kr(n.vueApp.config.globalProperties, a, i)
    }, kr(n.vueApp, "$nuxt", n), kr(n.vueApp.config.globalProperties, "$nuxt", n);
    {
        window.addEventListener(Ih, i => {
            n.callHook("app:chunkError", {
                error: i.payload
            }), (n.isHydrating || i.payload.message.includes("Unable to preload CSS")) && i.preventDefault()
        }), window.useNuxtApp || (window.useNuxtApp = Pe);
        const s = n.hook("app:error", (...i) => {
            console.error("[nuxt] error caught during app initialization", ...i)
        });
        n.hook("app:mounted", s)
    }
    const r = n.payload.config;
    return n.provide("config", r), n
}

function jh(e, t) {
    t.hooks && e.hooks.addHooks(t.hooks)
}
async function Hh(e, t) {
    if (typeof t == "function") {
        const {
            provide: n
        } = await e.runWithContext(() => t(e)) || {};
        if (n && typeof n == "object")
            for (const r in n) e.provide(r, n[r])
    }
}
async function $h(e, t) {
    const n = [],
        r = [],
        o = [],
        s = [];
    let i = 0;
    async function a(l) {
        var c;
        const u = ((c = l.dependsOn) == null ? void 0 : c.filter(f => t.some(d => d._name === f) && !n.includes(f))) ?? [];
        if (u.length > 0) r.push([new Set(u), l]);
        else {
            const f = Hh(e, l).then(async () => {
                l._name && (n.push(l._name), await Promise.all(r.map(async ([d, m]) => {
                    d.has(l._name) && (d.delete(l._name), d.size === 0 && (i++, await a(m)))
                })))
            });
            l.parallel ? o.push(f.catch(d => s.push(d))) : await f
        }
    }
    for (const l of t) jh(e, l);
    for (const l of t) await a(l);
    if (await Promise.all(o), i)
        for (let l = 0; l < i; l++) await Promise.all(o);
    if (s.length) throw s[0]
}

function Ue(e) {
    if (typeof e == "function") return e;
    const t = e._name || e.name;
    return delete e.name, Object.assign(e.setup || (() => {}), e, {
        [Mh]: !0,
        _name: t
    })
}

function ga(e, t, n) {
    const r = () => t();
    return Wc(e._id).set(e), e.vueApp.runWithContext(r)
}

function qc(e) {
    var n;
    let t;
    return vo() && (t = (n = Jt()) == null ? void 0 : n.appContext.app.$nuxt), t || (t = Wc(e).tryUse()), t || null
}

function Pe(e) {
    const t = qc(e);
    if (!t) throw new Error("[nuxt] instance unavailable");
    return t
}

function Mt(e) {
    return Pe().$config
}

function kr(e, t, n) {
    Object.defineProperty(e, t, {
        get: () => n
    })
}

function Dh(e, t) {
    return {
        ctx: {
            table: e
        },
        matchAll: n => Gc(n, e)
    }
}

function zc(e) {
    const t = {};
    for (const n in e) t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([r, o]) => [r, zc(o)])) : new Map(Object.entries(e[n]));
    return t
}

function Nh(e) {
    return Dh(zc(e))
}

function Gc(e, t, n) {
    e.endsWith("/") && (e = e.slice(0, -1) || "/");
    const r = [];
    for (const [s, i] of ma(t.wildcard))(e === s || e.startsWith(s + "/")) && r.push(i);
    for (const [s, i] of ma(t.dynamic))
        if (e.startsWith(s + "/")) {
            const a = "/" + e.slice(s.length).split("/").splice(2).join("/");
            r.push(...Gc(a, i))
        } const o = t.static.get(e);
    return o && r.push(o), r.filter(Boolean)
}

function ma(e) {
    return [...e.entries()].sort((t, n) => t[0].length - n[0].length)
}

function Ko(e) {
    if (e === null || typeof e != "object") return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}

function xs(e, t, n = ".", r) {
    if (!Ko(t)) return xs(e, {}, n, r);
    const o = Object.assign({}, t);
    for (const s in e) {
        if (s === "__proto__" || s === "constructor") continue;
        const i = e[s];
        i != null && (r && r(o, s, i, n) || (Array.isArray(i) && Array.isArray(o[s]) ? o[s] = [...i, ...o[s]] : Ko(i) && Ko(o[s]) ? o[s] = xs(i, o[s], (n ? `${n}.` : "") + s.toString(), r) : o[s] = i))
    }
    return o
}

function Qc(e) {
    return (...t) => t.reduce((n, r) => xs(n, r, "", e), {})
}
const di = Qc(),
    Fh = Qc((e, t, n) => {
        if (e[t] !== void 0 && typeof n == "function") return e[t] = n(e[t]), !0
    });

function Uh(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
class Cs extends Error {
    constructor(n, r = {}) {
        super(n, r);
        $t(this, "statusCode", 500);
        $t(this, "fatal", !1);
        $t(this, "unhandled", !1);
        $t(this, "statusMessage");
        $t(this, "data");
        $t(this, "cause");
        r.cause && !this.cause && (this.cause = r.cause)
    }
    toJSON() {
        const n = {
            message: this.message,
            statusCode: Rs(this.statusCode, 500)
        };
        return this.statusMessage && (n.statusMessage = Yc(this.statusMessage)), this.data !== void 0 && (n.data = this.data), n
    }
}
$t(Cs, "__h3_error__", !0);

function Lr(e) {
    if (typeof e == "string") return new Cs(e);
    if (Bh(e)) return e;
    const t = new Cs(e.message ?? e.statusMessage ?? "", {
        cause: e.cause || e
    });
    if (Uh(e, "stack")) try {
        Object.defineProperty(t, "stack", {
            get() {
                return e.stack
            }
        })
    } catch {
        try {
            t.stack = e.stack
        } catch {}
    }
    if (e.data && (t.data = e.data), e.statusCode ? t.statusCode = Rs(e.statusCode, t.statusCode) : e.status && (t.statusCode = Rs(e.status, t.statusCode)), e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText), t.statusMessage) {
        const n = t.statusMessage;
        Yc(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t
}

function Bh(e) {
    var t;
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const Vh = /[^\u0009\u0020-\u007E]/g;

function Yc(e = "") {
    return e.replace(Vh, "")
}

function Rs(e, t = 200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e
}
const Jc = Symbol("layout-meta"),
    vr = Symbol("route"),
    tt = () => {
        var e;
        return (e = Pe()) == null ? void 0 : e.$router
    },
    br = () => vo() ? We(vr, Pe()._route) : Pe()._route;
const Kh = () => {
        try {
            if (Pe()._processingMiddleware) return !0
        } catch {
            return !1
        }
        return !1
    },
    Cb = (e, t) => {
        e || (e = "/");
        const n = typeof e == "string" ? e : "path" in e ? Wh(e) : tt().resolve(e).href;
        if (t != null && t.open) {
            const {
                target: l = "_blank",
                windowFeatures: u = {}
            } = t.open, c = Object.entries(u).filter(([f, d]) => d !== void 0).map(([f, d]) => `${f.toLowerCase()}=${d}`).join(", ");
            return open(n, l, c), Promise.resolve()
        }
        const r = It(n, {
                acceptRelative: !0
            }),
            o = (t == null ? void 0 : t.external) || r;
        if (o) {
            if (!(t != null && t.external)) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
            const {
                protocol: l
            } = new URL(n, window.location.href);
            if (l && zp(l)) throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)
        }
        const s = Kh();
        if (!o && s) {
            if (t != null && t.replace) {
                if (typeof e == "string") {
                    const {
                        pathname: l,
                        search: u,
                        hash: c
                    } = Eo(e);
                    return {
                        path: l,
                        ...u && {
                            query: Lc(u)
                        },
                        ...c && {
                            hash: c
                        },
                        replace: !0
                    }
                }
                return {
                    ...e,
                    replace: !0
                }
            }
            return e
        }
        const i = tt(),
            a = Pe();
        return o ? (a._scope.stop(), t != null && t.replace ? location.replace(n) : location.href = n, s ? a.isHydrating ? new Promise(() => {}) : !1 : Promise.resolve()) : t != null && t.replace ? i.replace(e) : i.push(e)
    };

function Wh(e) {
    return to(e.path || "", e.query || {}) + (e.hash || "")
}
const Xc = "__nuxt_error",
    Hn = () => Il(Pe().payload, "error"),
    Vt = e => {
        const t = pi(e);
        try {
            const n = Pe(),
                r = Hn();
            n.hooks.callHook("app:error", t), r.value || (r.value = t)
        } catch {
            throw t
        }
        return t
    },
    Zc = async (e = {}) => {
        const t = Pe(),
            n = Hn();
        t.callHook("app:error:cleared", e), e.redirect && await tt().replace(e.redirect), n.value = Ah
    }, eu = e => !!e && typeof e == "object" && Xc in e, pi = e => {
        const t = Lr(e);
        return Object.defineProperty(t, Xc, {
            value: !0,
            configurable: !1,
            writable: !1
        }), t
    }, qh = new Set(["link", "style", "script", "noscript"]), zh = new Set(["title", "titleTemplate", "script", "style", "noscript"]), ya = new Set(["base", "meta", "link", "style", "script", "noscript"]), Gh = new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]), Qh = new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]), Yh = new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"]), Jh = new Set(["templateParams", "htmlAttrs", "bodyAttrs"]), hi = new Set(["theme-color", "google-site-verification", "og", "article", "book", "profile", "twitter", "author"]), Xh = ["name", "property", "http-equiv"], Zh = new Set(["viewport", "description", "keywords", "robots"]);

function tu(e) {
    const t = e.split(":");
    return t.length ? hi.has(t[1]) : !1
}

function Ps(e) {
    const {
        props: t,
        tag: n
    } = e;
    if (Qh.has(n)) return n;
    if (n === "link" && t.rel === "canonical") return "canonical";
    if (t.charset) return "charset";
    if (e.tag === "meta") {
        for (const r of Xh)
            if (t[r] !== void 0) {
                const o = t[r],
                    s = o.includes(":"),
                    i = Zh.has(o),
                    l = !(s || i) && e.key ? `:key:${e.key}` : "";
                return `${n}:${o}${l}`
            }
    }
    if (e.key) return `${n}:key:${e.key}`;
    if (t.id) return `${n}:id:${t.id}`;
    if (zh.has(n)) {
        const r = e.textContent || e.innerHTML;
        if (r) return `${n}:content:${r}`
    }
}

function va(e) {
    const t = e._h || e._d;
    if (t) return t;
    const n = e.textContent || e.innerHTML;
    return n || `${e.tag}:${Object.entries(e.props).map(([r,o])=>`${r}:${String(o)}`).join(",")}`
}

function so(e, t, n) {
    typeof e === "function" && (!n || n !== "titleTemplate" && !(n[0] === "o" && n[1] === "n")) && (e = e());
    let o;
    if (t && (o = t(n, e)), Array.isArray(o)) return o.map(s => so(s, t));
    if ((o == null ? void 0 : o.constructor) === Object) {
        const s = {};
        for (const i of Object.keys(o)) s[i] = so(o[i], t, i);
        return s
    }
    return o
}

function eg(e, t) {
    const n = e === "style" ? new Map : new Set;

    function r(o) {
        const s = o.trim();
        if (s)
            if (e === "style") {
                const [i, ...a] = s.split(":").map(l => l.trim());
                i && a.length && n.set(i, a.join(":"))
            } else s.split(" ").filter(Boolean).forEach(i => n.add(i))
    }
    return typeof t == "string" ? e === "style" ? t.split(";").forEach(r) : r(t) : Array.isArray(t) ? t.forEach(o => r(o)) : t && typeof t == "object" && Object.entries(t).forEach(([o, s]) => {
        s && s !== "false" && (e === "style" ? n.set(o.trim(), s) : r(o))
    }), n
}

function nu(e, t) {
    return e.props = e.props || {}, t ? e.tag === "templateParams" ? (e.props = t, e) : (Object.entries(t).forEach(([n, r]) => {
        if (r === null) {
            e.props[n] = null;
            return
        }
        if (n === "class" || n === "style") {
            e.props[n] = eg(n, r);
            return
        }
        if (Yh.has(n)) {
            if (["textContent", "innerHTML"].includes(n) && typeof r == "object") {
                let i = t.type;
                if (t.type || (i = "application/json"), !(i != null && i.endsWith("json")) && i !== "speculationrules") return;
                t.type = i, e.props.type = i, e[n] = JSON.stringify(r)
            } else e[n] = r;
            return
        }
        const o = String(r),
            s = n.startsWith("data-");
        o === "true" || o === "" ? e.props[n] = s ? o : !0 : !r && s && o === "false" ? e.props[n] = "false" : r !== void 0 && (e.props[n] = r)
    }), e) : e
}

function tg(e, t) {
    const n = typeof t == "object" && typeof t != "function" ? t : {
            [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t
        },
        r = nu({
            tag: e,
            props: {}
        }, n);
    return r.key && qh.has(r.tag) && (r.props["data-hid"] = r._h = r.key), r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML), r.props.type = r.props.type || "application/json"), Array.isArray(r.props.content) ? r.props.content.map(o => ({
        ...r,
        props: {
            ...r.props,
            content: o
        }
    })) : r
}

function ng(e, t) {
    if (!e) return [];
    typeof e == "function" && (e = e());
    const n = (o, s) => {
        for (let i = 0; i < t.length; i++) s = t[i](o, s);
        return s
    };
    e = n(void 0, e);
    const r = [];
    return e = so(e, n), Object.entries(e || {}).forEach(([o, s]) => {
        if (s !== void 0)
            for (const i of Array.isArray(s) ? s : [s]) r.push(tg(o, i))
    }), r.flat()
}
const ks = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w,
    ba = {
        base: -10,
        title: 10
    },
    rg = {
        critical: -8,
        high: -1,
        low: 2
    },
    _a = {
        meta: {
            "content-security-policy": -30,
            charset: -20,
            viewport: -15
        },
        link: {
            preconnect: 20,
            stylesheet: 60,
            preload: 70,
            modulepreload: 70,
            prefetch: 90,
            "dns-prefetch": 90,
            prerender: 90
        },
        script: {
            async: 30,
            defer: 80,
            sync: 50
        },
        style: {
            imported: 40,
            sync: 60
        }
    },
    og = /@import/,
    Bn = e => e === "" || e === !0;

function sg(e, t) {
    var s;
    if (typeof t.tagPriority == "number") return t.tagPriority;
    let n = 100;
    const r = rg[t.tagPriority] || 0,
        o = e.resolvedOptions.disableCapoSorting ? {
            link: {},
            script: {},
            style: {}
        } : _a;
    if (t.tag in ba) n = ba[t.tag];
    else if (t.tag === "meta") {
        const i = t.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : t.props.charset ? "charset" : t.props.name === "viewport" ? "viewport" : null;
        i && (n = _a.meta[i])
    } else t.tag === "link" && t.props.rel ? n = o.link[t.props.rel] : t.tag === "script" ? Bn(t.props.async) ? n = o.script.async : t.props.src && !Bn(t.props.defer) && !Bn(t.props.async) && t.props.type !== "module" && !((s = t.props.type) != null && s.endsWith("json")) ? n = o.script.sync : Bn(t.props.defer) && t.props.src && !Bn(t.props.async) && (n = o.script.defer) : t.tag === "style" && (n = t.innerHTML && og.test(t.innerHTML) ? o.style.imported : o.style.sync);
    return (n || 100) + r
}

function wa(e, t) {
    const n = typeof t == "function" ? t(e) : t,
        r = n.key || String(e.plugins.size + 1);
    e.plugins.get(r) || (e.plugins.set(r, n), e.hooks.addHooks(n.hooks || {}))
}

function ig(e = {}) {
    var a;
    const t = Vc();
    t.addHooks(e.hooks || {});
    const n = !e.document,
        r = new Map,
        o = new Map,
        s = new Set,
        i = {
            _entryCount: 1,
            plugins: o,
            dirty: !1,
            resolvedOptions: e,
            hooks: t,
            ssr: n,
            entries: r,
            headEntries() {
                return [...r.values()]
            },
            use: l => wa(i, l),
            push(l, u) {
                const c = {
                    ...u || {}
                };
                delete c.head;
                const f = c._index ?? i._entryCount++,
                    d = {
                        _i: f,
                        input: l,
                        options: c
                    },
                    m = {
                        _poll(v = !1) {
                            i.dirty = !0, !v && s.add(f), t.callHook("entries:updated", i)
                        },
                        dispose() {
                            r.delete(f) && i.invalidate()
                        },
                        patch(v) {
                            (!c.mode || c.mode === "server" && n || c.mode === "client" && !n) && (d.input = v, r.set(f, d), m._poll())
                        }
                    };
                return m.patch(l), m
            },
            async resolveTags() {
                var m;
                const l = {
                    tagMap: new Map,
                    tags: [],
                    entries: [...i.entries.values()]
                };
                for (await t.callHook("entries:resolve", l); s.size;) {
                    const v = s.values().next().value;
                    s.delete(v);
                    const p = r.get(v);
                    if (p) {
                        const E = {
                            tags: ng(p.input, e.propResolvers || []).map(T => Object.assign(T, p.options)),
                            entry: p
                        };
                        await t.callHook("entries:normalize", E), p._tags = E.tags.map((T, _) => (T._w = sg(i, T), T._p = (p._i << 10) + _, T._d = Ps(T), T))
                    }
                }
                let u = !1;
                l.entries.flatMap(v => (v._tags || []).map(p => ({
                    ...p,
                    props: {
                        ...p.props
                    }
                }))).sort(ks).reduce((v, p) => {
                    const E = String(p._d || p._p);
                    if (!v.has(E)) return v.set(E, p);
                    const T = v.get(E);
                    if (((p == null ? void 0 : p.tagDuplicateStrategy) || (Jh.has(p.tag) ? "merge" : null) || (p.key && p.key === T.key ? "merge" : null)) === "merge") {
                        const g = {
                            ...T.props
                        };
                        Object.entries(p.props).forEach(([b, S]) => g[b] = b === "style" ? new Map([...T.props.style || new Map, ...S]) : b === "class" ? new Set([...T.props.class || new Set, ...S]) : S), v.set(E, {
                            ...p,
                            props: g
                        })
                    } else p._p >> 10 === T._p >> 10 && p.tag === "meta" && tu(E) ? (v.set(E, Object.assign([...Array.isArray(T) ? T : [T], p], p)), u = !0) : (p._w === T._w ? p._p > T._p : (p == null ? void 0 : p._w) < (T == null ? void 0 : T._w)) && v.set(E, p);
                    return v
                }, l.tagMap);
                const c = l.tagMap.get("title"),
                    f = l.tagMap.get("titleTemplate");
                if (i._title = c == null ? void 0 : c.textContent, f) {
                    const v = f == null ? void 0 : f.textContent;
                    if (i._titleTemplate = v, v) {
                        let p = typeof v == "function" ? v(c == null ? void 0 : c.textContent) : v;
                        typeof p == "string" && !i.plugins.has("template-params") && (p = p.replace("%s", (c == null ? void 0 : c.textContent) || "")), c ? p === null ? l.tagMap.delete("title") : l.tagMap.set("title", {
                            ...c,
                            textContent: p
                        }) : (f.tag = "title", f.textContent = p)
                    }
                }
                l.tags = Array.from(l.tagMap.values()), u && (l.tags = l.tags.flat().sort(ks)), await t.callHook("tags:beforeResolve", l), await t.callHook("tags:resolve", l), await t.callHook("tags:afterResolve", l);
                const d = [];
                for (const v of l.tags) {
                    const {
                        innerHTML: p,
                        tag: E,
                        props: T
                    } = v;
                    if (Gh.has(E) && !(Object.keys(T).length === 0 && !v.innerHTML && !v.textContent) && !(E === "meta" && !T.content && !T["http-equiv"] && !T.charset)) {
                        if (E === "script" && p) {
                            if ((m = T.type) != null && m.endsWith("json")) {
                                const _ = typeof p == "string" ? p : JSON.stringify(p);
                                v.innerHTML = _.replace(/</g, "\\u003C")
                            } else typeof p == "string" && (v.innerHTML = p.replace(new RegExp(`</${E}`, "g"), `<\\/${E}`));
                            v._d = Ps(v)
                        }
                        d.push(v)
                    }
                }
                return d
            },
            invalidate() {
                for (const l of r.values()) s.add(l._i);
                i.dirty = !0, t.callHook("entries:updated", i)
            }
        };
    return ((e == null ? void 0 : e.plugins) || []).forEach(l => wa(i, l)), i.hooks.callHook("init", i), (a = e.init) == null || a.forEach(l => l && i.push(l)), i
}
async function gi(e, t = {}) {
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty) return;
    const r = {
        shouldRender: !0,
        tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r), !!r.shouldRender) return e._domUpdatePromise || (e._domUpdatePromise = new Promise(async o => {
        var m;
        const s = new Map,
            i = new Promise(v => {
                e.resolveTags().then(p => {
                    v(p.map(E => {
                        const T = s.get(E._d) || 0,
                            _ = {
                                tag: E,
                                id: (T ? `${E._d}:${T}` : E._d) || va(E),
                                shouldRender: !0
                            };
                        return E._d && tu(E._d) && s.set(E._d, T + 1), _
                    }))
                })
            });
        let a = e._dom;
        if (!a) {
            a = {
                title: n.title,
                elMap: new Map().set("htmlAttrs", n.documentElement).set("bodyAttrs", n.body)
            };
            for (const v of ["body", "head"]) {
                const p = (m = n[v]) == null ? void 0 : m.children;
                for (const E of p) {
                    const T = E.tagName.toLowerCase();
                    if (!ya.has(T)) continue;
                    const _ = nu({
                        tag: T,
                        props: {}
                    }, {
                        innerHTML: E.innerHTML,
                        ...E.getAttributeNames().reduce((g, b) => (g[b] = E.getAttribute(b), g), {}) || {}
                    });
                    if (_.key = E.getAttribute("data-hid") || void 0, _._d = Ps(_) || va(_), a.elMap.has(_._d)) {
                        let g = 1,
                            b = _._d;
                        for (; a.elMap.has(b);) b = `${_._d}:${g++}`;
                        a.elMap.set(b, E)
                    } else a.elMap.set(_._d, E)
                }
            }
        }
        a.pendingSideEffects = {
            ...a.sideEffects
        }, a.sideEffects = {};

        function l(v, p, E) {
            const T = `${v}:${p}`;
            a.sideEffects[T] = E, delete a.pendingSideEffects[T]
        }

        function u({
            id: v,
            $el: p,
            tag: E
        }) {
            const T = E.tag.endsWith("Attrs");
            a.elMap.set(v, p), T || (E.textContent && E.textContent !== p.textContent && (p.textContent = E.textContent), E.innerHTML && E.innerHTML !== p.innerHTML && (p.innerHTML = E.innerHTML), l(v, "el", () => {
                p == null || p.remove(), a.elMap.delete(v)
            }));
            for (const _ in E.props) {
                if (!Object.prototype.hasOwnProperty.call(E.props, _)) continue;
                const g = E.props[_];
                if (_.startsWith("on") && typeof g == "function") {
                    const S = p == null ? void 0 : p.dataset;
                    if (S && S[`${_}fired`]) {
                        const P = _.slice(0, -5);
                        g.call(p, new Event(P.substring(2)))
                    }
                    p.getAttribute(`data-${_}`) !== "" && ((E.tag === "bodyAttrs" ? n.defaultView : p).addEventListener(_.substring(2), g.bind(p)), p.setAttribute(`data-${_}`, ""));
                    continue
                }
                const b = `attr:${_}`;
                if (_ === "class") {
                    if (!g) continue;
                    for (const S of g) T && l(v, `${b}:${S}`, () => p.classList.remove(S)), !p.classList.contains(S) && p.classList.add(S)
                } else if (_ === "style") {
                    if (!g) continue;
                    for (const [S, P] of g) l(v, `${b}:${S}`, () => {
                        p.style.removeProperty(S)
                    }), p.style.setProperty(S, P)
                } else g !== !1 && g !== null && (p.getAttribute(_) !== g && p.setAttribute(_, g === !0 ? "" : String(g)), T && l(v, b, () => p.removeAttribute(_)))
            }
        }
        const c = [],
            f = {
                bodyClose: void 0,
                bodyOpen: void 0,
                head: void 0
            },
            d = await i;
        for (const v of d) {
            const {
                tag: p,
                shouldRender: E,
                id: T
            } = v;
            if (E) {
                if (p.tag === "title") {
                    n.title = p.textContent, l("title", "", () => n.title = a.title);
                    continue
                }
                v.$el = v.$el || a.elMap.get(T), v.$el ? u(v) : ya.has(p.tag) && c.push(v)
            }
        }
        for (const v of c) {
            const p = v.tag.tagPosition || "head";
            v.$el = n.createElement(v.tag.tag), u(v), f[p] = f[p] || n.createDocumentFragment(), f[p].appendChild(v.$el)
        }
        for (const v of d) await e.hooks.callHook("dom:renderTag", v, n, l);
        f.head && n.head.appendChild(f.head), f.bodyOpen && n.body.insertBefore(f.bodyOpen, n.body.firstChild), f.bodyClose && n.body.appendChild(f.bodyClose);
        for (const v in a.pendingSideEffects) a.pendingSideEffects[v]();
        e._dom = a, await e.hooks.callHook("dom:rendered", {
            renders: d
        }), o()
    }).finally(() => {
        e._domUpdatePromise = void 0, e.dirty = !1
    })), e._domUpdatePromise
}

function ag(e = {}) {
    var r, o, s;
    const t = ((r = e.domOptions) == null ? void 0 : r.render) || gi;
    e.document = e.document || (typeof window < "u" ? document : void 0);
    const n = ((s = (o = e.document) == null ? void 0 : o.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : s.innerHTML) || !1;
    return ig({
        ...e,
        plugins: [...e.plugins || [], {
            key: "client",
            hooks: {
                "entries:updated": t
            }
        }],
        init: [n ? JSON.parse(n) : !1, ...e.init || []]
    })
}

function lg(e, t) {
    let n = 0;
    return () => {
        const r = ++n;
        t(() => {
            n === r && e()
        })
    }
}
const cr = {
        META: new Set(["twitter"]),
        OG: new Set(["og", "book", "article", "profile", "fb"]),
        MEDIA: new Set(["ogImage", "ogVideo", "ogAudio", "twitterImage"]),
        HTTP_EQUIV: new Set(["contentType", "defaultStyle", "xUaCompatible"])
    },
    cg = {
        articleExpirationTime: "article:expiration_time",
        articleModifiedTime: "article:modified_time",
        articlePublishedTime: "article:published_time",
        bookReleaseDate: "book:release_date",
        fbAppId: "fb:app_id",
        ogAudioSecureUrl: "og:audio:secure_url",
        ogAudioUrl: "og:audio",
        ogImageSecureUrl: "og:image:secure_url",
        ogImageUrl: "og:image",
        ogSiteName: "og:site_name",
        ogVideoSecureUrl: "og:video:secure_url",
        ogVideoUrl: "og:video",
        profileFirstName: "profile:first_name",
        profileLastName: "profile:last_name",
        profileUsername: "profile:username",
        msapplicationConfig: "msapplication-Config",
        msapplicationTileColor: "msapplication-TileColor",
        msapplicationTileImage: "msapplication-TileImage"
    },
    ru = {
        appleItunesApp: {
            unpack: {
                entrySeparator: ", ",
                resolve: ({
                    key: e,
                    value: t
                }) => `${xt(e)}=${t}`
            }
        },
        refresh: {
            metaKey: "http-equiv",
            unpack: {
                entrySeparator: ";",
                resolve: ({
                    key: e,
                    value: t
                }) => e === "seconds" ? `${t}` : void 0
            }
        },
        robots: {
            unpack: {
                entrySeparator: ", ",
                resolve: ({
                    key: e,
                    value: t
                }) => typeof t == "boolean" ? xt(e) : `${xt(e)}:${t}`
            }
        },
        contentSecurityPolicy: {
            metaKey: "http-equiv",
            unpack: {
                entrySeparator: "; ",
                resolve: ({
                    key: e,
                    value: t
                }) => `${xt(e)} ${t}`
            }
        },
        charset: {}
    };

function xt(e) {
    const t = e.replace(/([A-Z])/g, "-$1").toLowerCase(),
        n = t.indexOf("-");
    return n === -1 ? t : cr.META.has(t.slice(0, n)) || cr.OG.has(t.slice(0, n)) ? e.replace(/([A-Z])/g, ":$1").toLowerCase() : t
}

function ou(e) {
    return Object.fromEntries(Object.entries(e).filter(([t, n]) => String(n) !== "false" && t))
}

function As(e) {
    return Array.isArray(e) ? e.map(As) : !e || typeof e != "object" ? e : Object.fromEntries(Object.entries(e).map(([t, n]) => [xt(t), As(n)]))
}

function su(e, t = {}) {
    const {
        entrySeparator: n = "",
        keyValueSeparator: r = "",
        wrapValue: o,
        resolve: s
    } = t;
    return Object.entries(e).map(([i, a]) => {
        if (s) {
            const u = s({
                key: i,
                value: a
            });
            if (u !== void 0) return u
        }
        const l = typeof a == "object" ? su(a, t) : typeof a == "number" ? a.toString() : typeof a == "string" && o ? `${o}${a.replace(new RegExp(o,"g"),`\\${o}`)}${o}` : a;
        return `${i}${r}${l}`
    }).join(n)
}

function Ea(e, t) {
    const n = ou(t),
        r = xt(e),
        o = iu(r);
    if (!hi.has(r)) return [{
        [o]: r,
        ...n
    }];
    const s = Object.fromEntries(Object.entries(n).map(([i, a]) => [`${e}${i==="url"?"":`${i[0].toUpperCase()}${i.slice(1)}`}`, a]));
    return io(s || {}).sort((i, a) => {
        var l, u;
        return (((l = i[o]) == null ? void 0 : l.length) || 0) - (((u = a[o]) == null ? void 0 : u.length) || 0)
    })
}

function iu(e) {
    var r;
    if (((r = ru[e]) == null ? void 0 : r.metaKey) === "http-equiv" || cr.HTTP_EQUIV.has(e)) return "http-equiv";
    const t = xt(e),
        n = t.indexOf(":");
    return n === -1 ? "name" : cr.OG.has(t.slice(0, n)) ? "property" : "name"
}

function ug(e) {
    return cg[e] || xt(e)
}

function fg(e, t) {
    var n;
    return t === "refresh" ? `${e.seconds};url=${e.url}` : su(As(e), {
        keyValueSeparator: "=",
        entrySeparator: ", ",
        resolve: ({
            value: r,
            key: o
        }) => r === null ? "" : typeof r == "boolean" ? o : void 0,
        ...(n = ru[t]) == null ? void 0 : n.unpack
    })
}

function io(e) {
    const t = [],
        n = {};
    for (const [o, s] of Object.entries(e)) {
        if (Array.isArray(s)) {
            if (o === "themeColor") {
                s.forEach(i => {
                    typeof i == "object" && i !== null && t.push({
                        name: "theme-color",
                        ...i
                    })
                });
                continue
            }
            for (const i of s)
                if (typeof i == "object" && i !== null) {
                    const a = [],
                        l = [];
                    for (const [u, c] of Object.entries(i)) {
                        const f = `${o}${u==="url"?"":`:${u}`}`,
                            d = io({
                                [f]: c
                            });
                        (u === "url" ? a : l).push(...d)
                    }
                    t.push(...a, ...l)
                } else t.push(...typeof i == "string" ? io({
                    [o]: i
                }) : Ea(o, i));
            continue
        }
        if (typeof s == "object" && s)
            if (cr.MEDIA.has(o)) {
                const i = o.startsWith("twitter") ? "twitter" : "og",
                    a = o.replace(/^(og|twitter)/, "").toLowerCase(),
                    l = i === "twitter" ? "name" : "property";
                s.url && t.push({
                    [l]: `${i}:${a}`,
                    content: s.url
                }), s.secureUrl && t.push({
                    [l]: `${i}:${a}:secure_url`,
                    content: s.secureUrl
                });
                for (const [u, c] of Object.entries(s)) u !== "url" && u !== "secureUrl" && t.push({
                    [l]: `${i}:${a}:${u}`,
                    content: c
                })
            } else hi.has(xt(o)) ? t.push(...Ea(o, s)) : n[o] = ou(s);
        else n[o] = s
    }
    const r = Object.entries(n).map(([o, s]) => {
        if (o === "charset") return {
            charset: s === null ? "_null" : s
        };
        const i = iu(o),
            a = ug(o),
            l = s === null ? "_null" : typeof s == "object" ? fg(s, o) : typeof s == "number" ? s.toString() : s;
        return i === "http-equiv" ? {
            "http-equiv": a,
            content: l
        } : {
            [i]: a,
            content: l
        }
    });
    return [...t, ...r].map(o => "content" in o && o.content === "_null" ? {
        ...o,
        content: null
    } : o)
}
const dg = {
        key: "flatMeta",
        hooks: {
            "entries:normalize": e => {
                const t = [];
                e.tags = e.tags.map(n => n.tag !== "_flatMeta" ? n : (t.push(io(n.props).map(r => ({
                    ...n,
                    tag: "meta",
                    props: r
                }))), !1)).filter(Boolean).concat(...t)
            }
        }
    },
    Wo = "%separator";

function pg(e, t, n = !1) {
    var o;
    let r;
    if (t === "s" || t === "pageTitle") r = e.pageTitle;
    else if (t.includes(".")) {
        const s = t.indexOf(".");
        r = (o = e[t.substring(0, s)]) == null ? void 0 : o[t.substring(s + 1)]
    } else r = e[t];
    if (r !== void 0) return n ? (r || "").replace(/\\/g, "\\\\").replace(/</g, "\\u003C").replace(/"/g, '\\"') : r || ""
}

function Ar(e, t, n, r = !1) {
    if (typeof e != "string" || !e.includes("%")) return e;
    let o = e;
    try {
        o = decodeURI(e)
    } catch {}
    const s = o.match(/%\w+(?:\.\w+)?/g);
    if (!s) return e;
    const i = e.includes(Wo);
    return e = e.replace(/%\w+(?:\.\w+)?/g, a => {
        if (a === Wo || !s.includes(a)) return a;
        const l = pg(t, a.slice(1), r);
        return l !== void 0 ? l : a
    }).trim(), i && (e = e.split(Wo).map(a => a.trim()).filter(a => a !== "").join(n ? ` ${n} ` : " ")), e
}
const Sa = e => e.includes(":key") ? e : e.split(":").join(":key:"),
    hg = {
        key: "aliasSorting",
        hooks: {
            "tags:resolve": e => {
                let t = !1;
                for (const n of e.tags) {
                    const r = n.tagPriority;
                    if (!r) continue;
                    const o = String(r);
                    if (o.startsWith("before:")) {
                        const s = Sa(o.slice(7)),
                            i = e.tagMap.get(s);
                        i && (typeof i.tagPriority == "number" && (n.tagPriority = i.tagPriority), n._p = i._p - 1, t = !0)
                    } else if (o.startsWith("after:")) {
                        const s = Sa(o.slice(6)),
                            i = e.tagMap.get(s);
                        i && (typeof i.tagPriority == "number" && (n.tagPriority = i.tagPriority), n._p = i._p + 1, t = !0)
                    }
                }
                t && (e.tags = e.tags.sort(ks))
            }
        }
    },
    gg = {
        key: "deprecations",
        hooks: {
            "entries:normalize": ({
                tags: e
            }) => {
                for (const t of e) t.props.children && (t.innerHTML = t.props.children, delete t.props.children), t.props.hid && (t.key = t.props.hid, delete t.props.hid), t.props.vmid && (t.key = t.props.vmid, delete t.props.vmid), t.props.body && (t.tagPosition = "bodyClose", delete t.props.body)
            }
        }
    };
async function Os(e) {
    if (typeof e === "function") return e;
    if (e instanceof Promise) return await e;
    if (Array.isArray(e)) return await Promise.all(e.map(n => Os(n)));
    if ((e == null ? void 0 : e.constructor) === Object) {
        const n = {};
        for (const r of Object.keys(e)) n[r] = await Os(e[r]);
        return n
    }
    return e
}
const mg = {
        key: "promises",
        hooks: {
            "entries:resolve": async e => {
                const t = [];
                for (const n in e.entries) e.entries[n]._promisesProcessed || t.push(Os(e.entries[n].input).then(r => {
                    e.entries[n].input = r, e.entries[n]._promisesProcessed = !0
                }));
                await Promise.all(t)
            }
        }
    },
    yg = {
        meta: "content",
        link: "href",
        htmlAttrs: "lang"
    },
    vg = ["innerHTML", "textContent"],
    mi = e => ({
        key: "template-params",
        hooks: {
            "entries:normalize": t => {
                var r, o, s;
                const n = ((o = (r = t.tags.filter(i => i.tag === "templateParams" && i.mode === "server")) == null ? void 0 : r[0]) == null ? void 0 : o.props) || {};
                Object.keys(n).length && (e._ssrPayload = {
                    templateParams: {
                        ...((s = e._ssrPayload) == null ? void 0 : s.templateParams) || {},
                        ...n
                    }
                })
            },
            "tags:resolve": ({
                tagMap: t,
                tags: n
            }) => {
                var s;
                const r = ((s = t.get("templateParams")) == null ? void 0 : s.props) || {},
                    o = r.separator || "|";
                delete r.separator, r.pageTitle = Ar(r.pageTitle || e._title || "", r, o);
                for (const i of n) {
                    if (i.processTemplateParams === !1) continue;
                    const a = yg[i.tag];
                    if (a && typeof i.props[a] == "string") i.props[a] = Ar(i.props[a], r, o);
                    else if (i.processTemplateParams || i.tag === "titleTemplate" || i.tag === "title")
                        for (const l of vg) typeof i[l] == "string" && (i[l] = Ar(i[l], r, o, i.tag === "script" && i.props.type.endsWith("json")))
                }
                e._templateParams = r, e._separator = o
            },
            "tags:afterResolve": ({
                tagMap: t
            }) => {
                const n = t.get("title");
                n != null && n.textContent && n.processTemplateParams !== !1 && (n.textContent = Ar(n.textContent, e._templateParams, e._separator))
            }
        }
    });

function bg(e = {}) {
    return t => (t.push({
        meta: [{
            name: "twitter:card",
            content: e.twitterCard || "summary_large_image",
            tagPriority: "low"
        }, {
            property: "og:title",
            tagPriority: "low",
            "data-infer": ""
        }, {
            property: "og:description",
            tagPriority: "low",
            "data-infer": ""
        }]
    }), {
        key: "infer-seo-meta",
        hooks: {
            "tags:beforeResolve": ({
                tagMap: n
            }) => {
                var a, l;
                let r = t._titleTemplate || t._title;
                const o = n.get("meta:og:title");
                typeof (o == null ? void 0 : o.props["data-infer"]) < "u" && (typeof r == "function" && (r = r(t._title)), o.props.content = e.ogTitle ? e.ogTitle(r) : r || "", o.processTemplateParams = !0);
                const s = (l = (a = n.get("meta:description")) == null ? void 0 : a.props) == null ? void 0 : l.content,
                    i = n.get("meta:og:description");
                typeof (i == null ? void 0 : i.props["data-infer"]) < "u" && (i.props.content = e.ogDescription ? e.ogDescription(s) : s || "", i.processTemplateParams = !0)
            }
        }
    })
}
const _g = (e, t) => Oe(t) ? Kr(t) : t,
    yi = "usehead";

function wg(e) {
    return {
        install(n) {
            n.config.globalProperties.$unhead = e, n.config.globalProperties.$head = e, n.provide(yi, e)
        }
    }.install
}

function au() {
    if (vo()) {
        const e = We(yi);
        if (!e) throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
        return e
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")
}

function lu(e, t = {}) {
    const n = t.head || au();
    return n.ssr ? n.push(e || {}, t) : Eg(n, e, t)
}

function Eg(e, t, n = {}) {
    const r = Ze(!1);
    let o;
    return hc(() => {
        const i = r.value ? {} : so(t, _g);
        o ? o.patch(i) : o = e.push(i, n)
    }), Jt() && (yr(() => {
        o.dispose()
    }), Wl(() => {
        r.value = !0
    }), Kl(() => {
        r.value = !1
    })), o
}

function Sg(e = {}, t = {}) {
    (t.head || au()).use(dg);
    const {
        title: r,
        titleTemplate: o,
        ...s
    } = e;
    return lu({
        title: r,
        titleTemplate: o,
        _flatMeta: s
    }, t)
}

function Tg(e = {}) {
    const t = ag({
        domOptions: {
            render: lg(() => gi(t), n => setTimeout(n, 0))
        },
        ...e
    });
    return t.install = wg(t), t
}
const xg = {
        disableDefaults: !0,
        disableCapoSorting: !1,
        plugins: [gg, mg, mi, hg]
    },
    Cg = Ue({
        name: "nuxt:head",
        enforce: "pre",
        setup(e) {
            const t = Tg(xg);
            e.vueApp.use(t);
            {
                let n = !0;
                const r = async () => {
                    n = !1, await gi(t)
                };
                t.hooks.hook("dom:beforeRender", o => {
                    o.shouldRender = !n
                }), e.hooks.hook("page:start", () => {
                    n = !0
                }), e.hooks.hook("page:finish", () => {
                    e.isHydrating || r()
                }), e.hooks.hook("app:error", r), e.hooks.hook("app:suspense:resolve", r)
            }
        }
    });
/*!
 * vue-router v4.5.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const bn = typeof document < "u";

function cu(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function Rg(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && cu(e.default)
}
const be = Object.assign;

function qo(e, t) {
    const n = {};
    for (const r in t) {
        const o = t[r];
        n[r] = dt(o) ? o.map(e) : e(o)
    }
    return n
}
const er = () => {},
    dt = Array.isArray,
    uu = /#/g,
    Pg = /&/g,
    kg = /\//g,
    Ag = /=/g,
    Og = /\?/g,
    fu = /\+/g,
    Ig = /%5B/g,
    Mg = /%5D/g,
    du = /%5E/g,
    Lg = /%60/g,
    pu = /%7B/g,
    jg = /%7C/g,
    hu = /%7D/g,
    Hg = /%20/g;

function vi(e) {
    return encodeURI("" + e).replace(jg, "|").replace(Ig, "[").replace(Mg, "]")
}

function $g(e) {
    return vi(e).replace(pu, "{").replace(hu, "}").replace(du, "^")
}

function Is(e) {
    return vi(e).replace(fu, "%2B").replace(Hg, "+").replace(uu, "%23").replace(Pg, "%26").replace(Lg, "`").replace(pu, "{").replace(hu, "}").replace(du, "^")
}

function Dg(e) {
    return Is(e).replace(Ag, "%3D")
}

function Ng(e) {
    return vi(e).replace(uu, "%23").replace(Og, "%3F")
}

function Fg(e) {
    return e == null ? "" : Ng(e).replace(kg, "%2F")
}

function ur(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const Ug = /\/$/,
    Bg = e => e.replace(Ug, "");

function zo(e, t, n = "/") {
    let r, o = {},
        s = "",
        i = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1), l > -1 && (r = t.slice(0, l), s = t.slice(l + 1, a > -1 ? a : t.length), o = e(s)), a > -1 && (r = r || t.slice(0, a), i = t.slice(a, t.length)), r = qg(r ?? t, n), {
        fullPath: r + (s && "?") + s + i,
        path: r,
        query: o,
        hash: ur(i)
    }
}

function Vg(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function Ta(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function Kg(e, t, n) {
    const r = t.matched.length - 1,
        o = n.matched.length - 1;
    return r > -1 && r === o && On(t.matched[r], n.matched[o]) && gu(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function On(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function gu(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e)
        if (!Wg(e[n], t[n])) return !1;
    return !0
}

function Wg(e, t) {
    return dt(e) ? xa(e, t) : dt(t) ? xa(t, e) : e === t
}

function xa(e, t) {
    return dt(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function qg(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"),
        r = e.split("/"),
        o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let s = n.length - 1,
        i, a;
    for (i = 0; i < r.length; i++)
        if (a = r[i], a !== ".")
            if (a === "..") s > 1 && s--;
            else break;
    return n.slice(0, s).join("/") + "/" + r.slice(i).join("/")
}
const lt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var fr;
(function (e) {
    e.pop = "pop", e.push = "push"
})(fr || (fr = {}));
var tr;
(function (e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(tr || (tr = {}));

function zg(e) {
    if (!e)
        if (bn) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Bg(e)
}
const Gg = /^[^#]+#/;

function Qg(e, t) {
    return e.replace(Gg, "#") + t
}

function Yg(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const So = () => ({
    left: window.scrollX,
    top: window.scrollY
});

function Jg(e) {
    let t;
    if ("el" in e) {
        const n = e.el,
            r = typeof n == "string" && n.startsWith("#"),
            o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!o) return;
        t = Yg(o, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function Ca(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Ms = new Map;

function Xg(e, t) {
    Ms.set(e, t)
}

function Zg(e) {
    const t = Ms.get(e);
    return Ms.delete(e), t
}
let em = () => location.protocol + "//" + location.host;

function mu(e, t) {
    const {
        pathname: n,
        search: r,
        hash: o
    } = t, s = e.indexOf("#");
    if (s > -1) {
        let a = o.includes(e.slice(s)) ? e.slice(s).length : 1,
            l = o.slice(a);
        return l[0] !== "/" && (l = "/" + l), Ta(l, "")
    }
    return Ta(n, e) + r + o
}

function tm(e, t, n, r) {
    let o = [],
        s = [],
        i = null;
    const a = ({
        state: d
    }) => {
        const m = mu(e, location),
            v = n.value,
            p = t.value;
        let E = 0;
        if (d) {
            if (n.value = m, t.value = d, i && i === v) {
                i = null;
                return
            }
            E = p ? d.position - p.position : 0
        } else r(m);
        o.forEach(T => {
            T(n.value, v, {
                delta: E,
                type: fr.pop,
                direction: E ? E > 0 ? tr.forward : tr.back : tr.unknown
            })
        })
    };

    function l() {
        i = n.value
    }

    function u(d) {
        o.push(d);
        const m = () => {
            const v = o.indexOf(d);
            v > -1 && o.splice(v, 1)
        };
        return s.push(m), m
    }

    function c() {
        const {
            history: d
        } = window;
        d.state && d.replaceState(be({}, d.state, {
            scroll: So()
        }), "")
    }

    function f() {
        for (const d of s) d();
        s = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", c)
    }
    return window.addEventListener("popstate", a), window.addEventListener("beforeunload", c, {
        passive: !0
    }), {
        pauseListeners: l,
        listen: u,
        destroy: f
    }
}

function Ra(e, t, n, r = !1, o = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: o ? So() : null
    }
}

function nm(e) {
    const {
        history: t,
        location: n
    } = window, r = {
        value: mu(e, n)
    }, o = {
        value: t.state
    };
    o.value || s(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function s(l, u, c) {
        const f = e.indexOf("#"),
            d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : em() + e + l;
        try {
            t[c ? "replaceState" : "pushState"](u, "", d), o.value = u
        } catch (m) {
            console.error(m), n[c ? "replace" : "assign"](d)
        }
    }

    function i(l, u) {
        const c = be({}, t.state, Ra(o.value.back, l, o.value.forward, !0), u, {
            position: o.value.position
        });
        s(l, c, !0), r.value = l
    }

    function a(l, u) {
        const c = be({}, o.value, t.state, {
            forward: l,
            scroll: So()
        });
        s(c.current, c, !0);
        const f = be({}, Ra(r.value, l, null), {
            position: c.position + 1
        }, u);
        s(l, f, !1), r.value = l
    }
    return {
        location: r,
        state: o,
        push: a,
        replace: i
    }
}

function rm(e) {
    e = zg(e);
    const t = nm(e),
        n = tm(e, t.state, t.location, t.replace);

    function r(s, i = !0) {
        i || n.pauseListeners(), history.go(s)
    }
    const o = be({
        location: "",
        base: e,
        go: r,
        createHref: Qg.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(o, "state", {
        enumerable: !0,
        get: () => t.state.value
    }), o
}

function om(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function yu(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const vu = Symbol("");
var Pa;
(function (e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(Pa || (Pa = {}));

function In(e, t) {
    return be(new Error, {
        type: e,
        [vu]: !0
    }, t)
}

function _t(e, t) {
    return e instanceof Error && vu in e && (t == null || !!(e.type & t))
}
const ka = "[^/]+?",
    sm = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    },
    im = /[.+*?^${}()[\]/\\]/g;

function am(e, t) {
    const n = be({}, sm, t),
        r = [];
    let o = n.start ? "^" : "";
    const s = [];
    for (const u of e) {
        const c = u.length ? [] : [90];
        n.strict && !u.length && (o += "/");
        for (let f = 0; f < u.length; f++) {
            const d = u[f];
            let m = 40 + (n.sensitive ? .25 : 0);
            if (d.type === 0) f || (o += "/"), o += d.value.replace(im, "\\$&"), m += 40;
            else if (d.type === 1) {
                const {
                    value: v,
                    repeatable: p,
                    optional: E,
                    regexp: T
                } = d;
                s.push({
                    name: v,
                    repeatable: p,
                    optional: E
                });
                const _ = T || ka;
                if (_ !== ka) {
                    m += 10;
                    try {
                        new RegExp(`(${_})`)
                    } catch (b) {
                        throw new Error(`Invalid custom RegExp for param "${v}" (${_}): ` + b.message)
                    }
                }
                let g = p ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
                f || (g = E && u.length < 2 ? `(?:/${g})` : "/" + g), E && (g += "?"), o += g, m += 20, E && (m += -8), p && (m += -20), _ === ".*" && (m += -50)
            }
            c.push(m)
        }
        r.push(c)
    }
    if (n.strict && n.end) {
        const u = r.length - 1;
        r[u][r[u].length - 1] += .7000000000000001
    }
    n.strict || (o += "/?"), n.end ? o += "$" : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
    const i = new RegExp(o, n.sensitive ? "" : "i");

    function a(u) {
        const c = u.match(i),
            f = {};
        if (!c) return null;
        for (let d = 1; d < c.length; d++) {
            const m = c[d] || "",
                v = s[d - 1];
            f[v.name] = m && v.repeatable ? m.split("/") : m
        }
        return f
    }

    function l(u) {
        let c = "",
            f = !1;
        for (const d of e) {
            (!f || !c.endsWith("/")) && (c += "/"), f = !1;
            for (const m of d)
                if (m.type === 0) c += m.value;
                else if (m.type === 1) {
                const {
                    value: v,
                    repeatable: p,
                    optional: E
                } = m, T = v in u ? u[v] : "";
                if (dt(T) && !p) throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);
                const _ = dt(T) ? T.join("/") : T;
                if (!_)
                    if (E) d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = !0);
                    else throw new Error(`Missing required param "${v}"`);
                c += _
            }
        }
        return c || "/"
    }
    return {
        re: i,
        score: r,
        keys: s,
        parse: a,
        stringify: l
    }
}

function lm(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const r = t[n] - e[n];
        if (r) return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}

function bu(e, t) {
    let n = 0;
    const r = e.score,
        o = t.score;
    for (; n < r.length && n < o.length;) {
        const s = lm(r[n], o[n]);
        if (s) return s;
        n++
    }
    if (Math.abs(o.length - r.length) === 1) {
        if (Aa(r)) return 1;
        if (Aa(o)) return -1
    }
    return o.length - r.length
}

function Aa(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const cm = {
        type: 0,
        value: ""
    },
    um = /[a-zA-Z0-9_]/;

function fm(e) {
    if (!e) return [
        []
    ];
    if (e === "/") return [
        [cm]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(m) {
        throw new Error(`ERR (${n})/"${u}": ${m}`)
    }
    let n = 0,
        r = n;
    const o = [];
    let s;

    function i() {
        s && o.push(s), s = []
    }
    let a = 0,
        l, u = "",
        c = "";

    function f() {
        u && (n === 0 ? s.push({
            type: 0,
            value: u
        }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), s.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"), u = "")
    }

    function d() {
        u += l
    }
    for (; a < e.length;) {
        if (l = e[a++], l === "\\" && n !== 2) {
            r = n, n = 4;
            continue
        }
        switch (n) {
        case 0:
            l === "/" ? (u && f(), i()) : l === ":" ? (f(), n = 1) : d();
            break;
        case 4:
            d(), n = r;
            break;
        case 1:
            l === "(" ? n = 2 : um.test(l) ? d() : (f(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--);
            break;
        case 2:
            l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l;
            break;
        case 3:
            f(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--, c = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), i(), o
}

function dm(e, t, n) {
    const r = am(fm(e.path), n),
        o = be(r, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o
}

function pm(e, t) {
    const n = [],
        r = new Map;
    t = La({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);

    function o(f) {
        return r.get(f)
    }

    function s(f, d, m) {
        const v = !m,
            p = Ia(f);
        p.aliasOf = m && m.record;
        const E = La(t, f),
            T = [p];
        if ("alias" in f) {
            const b = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const S of b) T.push(Ia(be({}, p, {
                components: m ? m.record.components : p.components,
                path: S,
                aliasOf: m ? m.record : p
            })))
        }
        let _, g;
        for (const b of T) {
            const {
                path: S
            } = b;
            if (d && S[0] !== "/") {
                const P = d.record.path,
                    O = P[P.length - 1] === "/" ? "" : "/";
                b.path = d.record.path + (S && O + S)
            }
            if (_ = dm(b, d, E), m ? m.alias.push(_) : (g = g || _, g !== _ && g.alias.push(_), v && f.name && !Ma(_) && i(f.name)), _u(_) && l(_), p.children) {
                const P = p.children;
                for (let O = 0; O < P.length; O++) s(P[O], _, m && m.children[O])
            }
            m = m || _
        }
        return g ? () => {
            i(g)
        } : er
    }

    function i(f) {
        if (yu(f)) {
            const d = r.get(f);
            d && (r.delete(f), n.splice(n.indexOf(d), 1), d.children.forEach(i), d.alias.forEach(i))
        } else {
            const d = n.indexOf(f);
            d > -1 && (n.splice(d, 1), f.record.name && r.delete(f.record.name), f.children.forEach(i), f.alias.forEach(i))
        }
    }

    function a() {
        return n
    }

    function l(f) {
        const d = mm(f, n);
        n.splice(d, 0, f), f.record.name && !Ma(f) && r.set(f.record.name, f)
    }

    function u(f, d) {
        let m, v = {},
            p, E;
        if ("name" in f && f.name) {
            if (m = r.get(f.name), !m) throw In(1, {
                location: f
            });
            E = m.record.name, v = be(Oa(d.params, m.keys.filter(g => !g.optional).concat(m.parent ? m.parent.keys.filter(g => g.optional) : []).map(g => g.name)), f.params && Oa(f.params, m.keys.map(g => g.name))), p = m.stringify(v)
        } else if (f.path != null) p = f.path, m = n.find(g => g.re.test(p)), m && (v = m.parse(p), E = m.record.name);
        else {
            if (m = d.name ? r.get(d.name) : n.find(g => g.re.test(d.path)), !m) throw In(1, {
                location: f,
                currentLocation: d
            });
            E = m.record.name, v = be({}, d.params, f.params), p = m.stringify(v)
        }
        const T = [];
        let _ = m;
        for (; _;) T.unshift(_.record), _ = _.parent;
        return {
            name: E,
            path: p,
            params: v,
            matched: T,
            meta: gm(T)
        }
    }
    e.forEach(f => s(f));

    function c() {
        n.length = 0, r.clear()
    }
    return {
        addRoute: s,
        resolve: u,
        removeRoute: i,
        clearRoutes: c,
        getRoutes: a,
        getRecordMatcher: o
    }
}

function Oa(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n
}

function Ia(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: hm(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    };
    return Object.defineProperty(t, "mods", {
        value: {}
    }), t
}

function hm(e) {
    const t = {},
        n = e.props || !1;
    if ("component" in e) t.default = n;
    else
        for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
    return t
}

function Ma(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function gm(e) {
    return e.reduce((t, n) => be(t, n.meta), {})
}

function La(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n
}

function mm(e, t) {
    let n = 0,
        r = t.length;
    for (; n !== r;) {
        const s = n + r >> 1;
        bu(e, t[s]) < 0 ? r = s : n = s + 1
    }
    const o = ym(e);
    return o && (r = t.lastIndexOf(o, r - 1)), r
}

function ym(e) {
    let t = e;
    for (; t = t.parent;)
        if (_u(t) && bu(e, t) === 0) return t
}

function _u({
    record: e
}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}

function vm(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < r.length; ++o) {
        const s = r[o].replace(fu, " "),
            i = s.indexOf("="),
            a = ur(i < 0 ? s : s.slice(0, i)),
            l = i < 0 ? null : ur(s.slice(i + 1));
        if (a in t) {
            let u = t[a];
            dt(u) || (u = t[a] = [u]), u.push(l)
        } else t[a] = l
    }
    return t
}

function ja(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = Dg(n), r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }(dt(r) ? r.map(s => s && Is(s)) : [r && Is(r)]).forEach(s => {
            s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s))
        })
    }
    return t
}

function bm(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = dt(r) ? r.map(o => o == null ? null : "" + o) : r == null ? r : "" + r)
    }
    return t
}
const _m = Symbol(""),
    Ha = Symbol(""),
    bi = Symbol(""),
    _i = Symbol(""),
    Ls = Symbol("");

function Vn() {
    let e = [];

    function t(r) {
        return e.push(r), () => {
            const o = e.indexOf(r);
            o > -1 && e.splice(o, 1)
        }
    }

    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}

function Kt(e, t, n, r, o, s = i => i()) {
    const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise((a, l) => {
        const u = d => {
                d === !1 ? l(In(4, {
                    from: n,
                    to: t
                })) : d instanceof Error ? l(d) : om(d) ? l(In(2, {
                    from: t,
                    to: d
                })) : (i && r.enterCallbacks[o] === i && typeof d == "function" && i.push(d), a())
            },
            c = s(() => e.call(r && r.instances[o], t, n, u));
        let f = Promise.resolve(c);
        e.length < 3 && (f = f.then(u)), f.catch(d => l(d))
    })
}

function Go(e, t, n, r, o = s => s()) {
    const s = [];
    for (const i of e)
        for (const a in i.components) {
            let l = i.components[a];
            if (!(t !== "beforeRouteEnter" && !i.instances[a]))
                if (cu(l)) {
                    const c = (l.__vccOpts || l)[t];
                    c && s.push(Kt(c, n, r, i, a, o))
                } else {
                    let u = l();
                    s.push(() => u.then(c => {
                        if (!c) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
                        const f = Rg(c) ? c.default : c;
                        i.mods[a] = c, i.components[a] = f;
                        const m = (f.__vccOpts || f)[t];
                        return m && Kt(m, n, r, i, a, o)()
                    }))
                }
        }
    return s
}

function $a(e) {
    const t = We(bi),
        n = We(_i),
        r = Me(() => {
            const l = xe(e.to);
            return t.resolve(l)
        }),
        o = Me(() => {
            const {
                matched: l
            } = r.value, {
                length: u
            } = l, c = l[u - 1], f = n.matched;
            if (!c || !f.length) return -1;
            const d = f.findIndex(On.bind(null, c));
            if (d > -1) return d;
            const m = Da(l[u - 2]);
            return u > 1 && Da(c) === m && f[f.length - 1].path !== m ? f.findIndex(On.bind(null, l[u - 2])) : d
        }),
        s = Me(() => o.value > -1 && xm(n.params, r.value.params)),
        i = Me(() => o.value > -1 && o.value === n.matched.length - 1 && gu(n.params, r.value.params));

    function a(l = {}) {
        if (Tm(l)) {
            const u = t[xe(e.replace) ? "replace" : "push"](xe(e.to)).catch(er);
            return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u
        }
        return Promise.resolve()
    }
    return {
        route: r,
        href: Me(() => r.value.href),
        isActive: s,
        isExactActive: i,
        navigate: a
    }
}

function wm(e) {
    return e.length === 1 ? e[0] : e
}
const Em = pt({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            },
            viewTransition: Boolean
        },
        useLink: $a,
        setup(e, {
            slots: t
        }) {
            const n = Yt($a(e)),
                {
                    options: r
                } = We(bi),
                o = Me(() => ({
                    [Na(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
                    [Na(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }));
            return () => {
                const s = t.default && wm(t.default(n));
                return e.custom ? s : Ie("a", {
                    "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: o.value
                }, s)
            }
        }
    }),
    Sm = Em;

function Tm(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function xm(e, t) {
    for (const n in t) {
        const r = t[n],
            o = e[n];
        if (typeof r == "string") {
            if (r !== o) return !1
        } else if (!dt(o) || o.length !== r.length || r.some((s, i) => s !== o[i])) return !1
    }
    return !0
}

function Da(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Na = (e, t, n) => e ?? t ?? n,
    Cm = pt({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, {
            attrs: t,
            slots: n
        }) {
            const r = We(Ls),
                o = Me(() => e.route || r.value),
                s = We(Ha, 0),
                i = Me(() => {
                    let u = xe(s);
                    const {
                        matched: c
                    } = o.value;
                    let f;
                    for (;
                        (f = c[u]) && !f.components;) u++;
                    return u
                }),
                a = Me(() => o.value.matched[i.value]);
            an(Ha, Me(() => i.value + 1)), an(_m, a), an(Ls, o);
            const l = Ze();
            return ln(() => [l.value, a.value, e.name], ([u, c, f], [d, m, v]) => {
                c && (c.instances[f] = u, m && m !== c && u && u === d && (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards), c.updateGuards.size || (c.updateGuards = m.updateGuards))), u && c && (!m || !On(c, m) || !d) && (c.enterCallbacks[f] || []).forEach(p => p(u))
            }, {
                flush: "post"
            }), () => {
                const u = o.value,
                    c = e.name,
                    f = a.value,
                    d = f && f.components[c];
                if (!d) return Fa(n.default, {
                    Component: d,
                    route: u
                });
                const m = f.props[c],
                    v = m ? m === !0 ? u.params : typeof m == "function" ? m(u) : m : null,
                    E = Ie(d, be({}, v, t, {
                        onVnodeUnmounted: T => {
                            T.component.isUnmounted && (f.instances[c] = null)
                        },
                        ref: l
                    }));
                return Fa(n.default, {
                    Component: E,
                    route: u
                }) || E
            }
        }
    });

function Fa(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const wu = Cm;

function Rm(e) {
    const t = pm(e.routes, e),
        n = e.parseQuery || vm,
        r = e.stringifyQuery || ja,
        o = e.history,
        s = Vn(),
        i = Vn(),
        a = Vn(),
        l = Vr(lt);
    let u = lt;
    bn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = qo.bind(null, j => "" + j),
        f = qo.bind(null, Fg),
        d = qo.bind(null, ur);

    function m(j, J) {
        let Y, ne;
        return yu(j) ? (Y = t.getRecordMatcher(j), ne = J) : ne = j, t.addRoute(ne, Y)
    }

    function v(j) {
        const J = t.getRecordMatcher(j);
        J && t.removeRoute(J)
    }

    function p() {
        return t.getRoutes().map(j => j.record)
    }

    function E(j) {
        return !!t.getRecordMatcher(j)
    }

    function T(j, J) {
        if (J = be({}, J || l.value), typeof j == "string") {
            const y = zo(n, j, J.path),
                x = t.resolve({
                    path: y.path
                }, J),
                L = o.createHref(y.fullPath);
            return be(y, x, {
                params: d(x.params),
                hash: ur(y.hash),
                redirectedFrom: void 0,
                href: L
            })
        }
        let Y;
        if (j.path != null) Y = be({}, j, {
            path: zo(n, j.path, J.path).path
        });
        else {
            const y = be({}, j.params);
            for (const x in y) y[x] == null && delete y[x];
            Y = be({}, j, {
                params: f(y)
            }), J.params = f(J.params)
        }
        const ne = t.resolve(Y, J),
            ge = j.hash || "";
        ne.params = c(d(ne.params));
        const ve = Vg(r, be({}, j, {
                hash: $g(ge),
                path: ne.path
            })),
            h = o.createHref(ve);
        return be({
            fullPath: ve,
            hash: ge,
            query: r === ja ? bm(j.query) : j.query || {}
        }, ne, {
            redirectedFrom: void 0,
            href: h
        })
    }

    function _(j) {
        return typeof j == "string" ? zo(n, j, l.value.path) : be({}, j)
    }

    function g(j, J) {
        if (u !== j) return In(8, {
            from: J,
            to: j
        })
    }

    function b(j) {
        return O(j)
    }

    function S(j) {
        return b(be(_(j), {
            replace: !0
        }))
    }

    function P(j) {
        const J = j.matched[j.matched.length - 1];
        if (J && J.redirect) {
            const {
                redirect: Y
            } = J;
            let ne = typeof Y == "function" ? Y(j) : Y;
            return typeof ne == "string" && (ne = ne.includes("?") || ne.includes("#") ? ne = _(ne) : {
                path: ne
            }, ne.params = {}), be({
                query: j.query,
                hash: j.hash,
                params: ne.path != null ? {} : j.params
            }, ne)
        }
    }

    function O(j, J) {
        const Y = u = T(j),
            ne = l.value,
            ge = j.state,
            ve = j.force,
            h = j.replace === !0,
            y = P(Y);
        if (y) return O(be(_(y), {
            state: typeof y == "object" ? be({}, ge, y.state) : ge,
            force: ve,
            replace: h
        }), J || Y);
        const x = Y;
        x.redirectedFrom = J;
        let L;
        return !ve && Kg(r, ne, Y) && (L = In(16, {
            to: x,
            from: ne
        }), qe(ne, ne, !0, !1)), (L ? Promise.resolve(L) : F(x, ne)).catch(k => _t(k) ? _t(k, 2) ? k : nt(k) : Z(k, x, ne)).then(k => {
            if (k) {
                if (_t(k, 2)) return O(be({
                    replace: h
                }, _(k.to), {
                    state: typeof k.to == "object" ? be({}, ge, k.to.state) : ge,
                    force: ve
                }), J || x)
            } else k = W(x, ne, !0, h, ge);
            return te(x, ne, k), k
        })
    }

    function V(j, J) {
        const Y = g(j, J);
        return Y ? Promise.reject(Y) : Promise.resolve()
    }

    function U(j) {
        const J = ze.values().next().value;
        return J && typeof J.runWithContext == "function" ? J.runWithContext(j) : j()
    }

    function F(j, J) {
        let Y;
        const [ne, ge, ve] = Pm(j, J);
        Y = Go(ne.reverse(), "beforeRouteLeave", j, J);
        for (const y of ne) y.leaveGuards.forEach(x => {
            Y.push(Kt(x, j, J))
        });
        const h = V.bind(null, j, J);
        return Y.push(h), Ge(Y).then(() => {
            Y = [];
            for (const y of s.list()) Y.push(Kt(y, j, J));
            return Y.push(h), Ge(Y)
        }).then(() => {
            Y = Go(ge, "beforeRouteUpdate", j, J);
            for (const y of ge) y.updateGuards.forEach(x => {
                Y.push(Kt(x, j, J))
            });
            return Y.push(h), Ge(Y)
        }).then(() => {
            Y = [];
            for (const y of ve)
                if (y.beforeEnter)
                    if (dt(y.beforeEnter))
                        for (const x of y.beforeEnter) Y.push(Kt(x, j, J));
                    else Y.push(Kt(y.beforeEnter, j, J));
            return Y.push(h), Ge(Y)
        }).then(() => (j.matched.forEach(y => y.enterCallbacks = {}), Y = Go(ve, "beforeRouteEnter", j, J, U), Y.push(h), Ge(Y))).then(() => {
            Y = [];
            for (const y of i.list()) Y.push(Kt(y, j, J));
            return Y.push(h), Ge(Y)
        }).catch(y => _t(y, 8) ? y : Promise.reject(y))
    }

    function te(j, J, Y) {
        a.list().forEach(ne => U(() => ne(j, J, Y)))
    }

    function W(j, J, Y, ne, ge) {
        const ve = g(j, J);
        if (ve) return ve;
        const h = J === lt,
            y = bn ? history.state : {};
        Y && (ne || h ? o.replace(j.fullPath, be({
            scroll: h && y && y.scroll
        }, ge)) : o.push(j.fullPath, ge)), l.value = j, qe(j, J, Y, h), nt()
    }
    let re;

    function de() {
        re || (re = o.listen((j, J, Y) => {
            if (!Xt.listening) return;
            const ne = T(j),
                ge = P(ne);
            if (ge) {
                O(be(ge, {
                    replace: !0,
                    force: !0
                }), ne).catch(er);
                return
            }
            u = ne;
            const ve = l.value;
            bn && Xg(Ca(ve.fullPath, Y.delta), So()), F(ne, ve).catch(h => _t(h, 12) ? h : _t(h, 2) ? (O(be(_(h.to), {
                force: !0
            }), ne).then(y => {
                _t(y, 20) && !Y.delta && Y.type === fr.pop && o.go(-1, !1)
            }).catch(er), Promise.reject()) : (Y.delta && o.go(-Y.delta, !1), Z(h, ne, ve))).then(h => {
                h = h || W(ne, ve, !1), h && (Y.delta && !_t(h, 8) ? o.go(-Y.delta, !1) : Y.type === fr.pop && _t(h, 20) && o.go(-1, !1)), te(ne, ve, h)
            }).catch(er)
        }))
    }
    let he = Vn(),
        X = Vn(),
        ce;

    function Z(j, J, Y) {
        nt(j);
        const ne = X.list();
        return ne.length ? ne.forEach(ge => ge(j, J, Y)) : console.error(j), Promise.reject(j)
    }

    function fe() {
        return ce && l.value !== lt ? Promise.resolve() : new Promise((j, J) => {
            he.add([j, J])
        })
    }

    function nt(j) {
        return ce || (ce = !j, de(), he.list().forEach(([J, Y]) => j ? Y(j) : J()), he.reset()), j
    }

    function qe(j, J, Y, ne) {
        const {
            scrollBehavior: ge
        } = e;
        if (!bn || !ge) return Promise.resolve();
        const ve = !Y && Zg(Ca(j.fullPath, 0)) || (ne || !Y) && history.state && history.state.scroll || null;
        return Ln().then(() => ge(j, J, ve)).then(h => h && Jg(h)).catch(h => Z(h, j, J))
    }
    const je = j => o.go(j);
    let yt;
    const ze = new Set,
        Xt = {
            currentRoute: l,
            listening: !0,
            addRoute: m,
            removeRoute: v,
            clearRoutes: t.clearRoutes,
            hasRoute: E,
            getRoutes: p,
            resolve: T,
            options: e,
            push: b,
            replace: S,
            go: je,
            back: () => je(-1),
            forward: () => je(1),
            beforeEach: s.add,
            beforeResolve: i.add,
            afterEach: a.add,
            onError: X.add,
            isReady: fe,
            install(j) {
                const J = this;
                j.component("RouterLink", Sm), j.component("RouterView", wu), j.config.globalProperties.$router = J, Object.defineProperty(j.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: () => xe(l)
                }), bn && !yt && l.value === lt && (yt = !0, b(o.location).catch(ge => {}));
                const Y = {};
                for (const ge in lt) Object.defineProperty(Y, ge, {
                    get: () => l.value[ge],
                    enumerable: !0
                });
                j.provide(bi, J), j.provide(_i, Wt(Y)), j.provide(Ls, l);
                const ne = j.unmount;
                ze.add(j), j.unmount = function () {
                    ze.delete(j), ze.size < 1 && (u = lt, re && re(), re = null, l.value = lt, yt = !1, ce = !1), ne()
                }
            }
        };

    function Ge(j) {
        return j.reduce((J, Y) => J.then(() => U(Y)), Promise.resolve())
    }
    return Xt
}

function Pm(e, t) {
    const n = [],
        r = [],
        o = [],
        s = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < s; i++) {
        const a = t.matched[i];
        a && (e.matched.find(u => On(u, a)) ? r.push(a) : n.push(a));
        const l = e.matched[i];
        l && (t.matched.find(u => On(u, l)) || o.push(l))
    }
    return [n, r, o]
}

function km(e) {
    return We(_i)
}
const Am = /(:\w+)\([^)]+\)/g,
    Om = /(:\w+)[?+*]/g,
    Im = /:\w+/g,
    Mm = (e, t) => t.path.replace(Am, "$1").replace(Om, "$1").replace(Im, n => {
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    }),
    js = (e, t) => {
        const n = e.route.matched.find(o => {
                var s;
                return ((s = o.components) == null ? void 0 : s.default) === e.Component.type
            }),
            r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && Mm(e.route, n));
        return typeof r == "function" ? r(e.route) : r
    },
    Lm = (e, t) => ({
        default: () => e ? Ie(Yf, e === !0 ? {} : e, t) : t
    });

function wi(e) {
    return Array.isArray(e) ? e : [e]
}
const jm = "modulepreload",
    Hm = function (e, t) {
        return new URL(e, t).href
    },
    Ua = {},
    He = function (t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            let i = function (c) {
                return Promise.all(c.map(f => Promise.resolve(f).then(d => ({
                    status: "fulfilled",
                    value: d
                }), d => ({
                    status: "rejected",
                    reason: d
                }))))
            };
            const a = document.getElementsByTagName("link"),
                l = document.querySelector("meta[property=csp-nonce]"),
                u = (l == null ? void 0 : l.nonce) || (l == null ? void 0 : l.getAttribute("nonce"));
            o = i(n.map(c => {
                if (c = Hm(c, r), c in Ua) return;
                Ua[c] = !0;
                const f = c.endsWith(".css"),
                    d = f ? '[rel="stylesheet"]' : "";
                if (!!r)
                    for (let p = a.length - 1; p >= 0; p--) {
                        const E = a[p];
                        if (E.href === c && (!f || E.rel === "stylesheet")) return
                    } else if (document.querySelector(`link[href="${c}"]${d}`)) return;
                const v = document.createElement("link");
                if (v.rel = f ? "stylesheet" : jm, f || (v.as = "script"), v.crossOrigin = "", v.href = c, u && v.setAttribute("nonce", u), document.head.appendChild(v), f) return new Promise((p, E) => {
                    v.addEventListener("load", p), v.addEventListener("error", () => E(new Error(`Unable to preload CSS for ${c}`)))
                })
            }))
        }

        function s(i) {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = i, window.dispatchEvent(a), !a.defaultPrevented) throw i
        }
        return o.then(i => {
            for (const a of i || []) a.status === "rejected" && s(a.reason);
            return t().catch(s)
        })
    };
let jr, Hr;

function $m() {
    return jr = $fetch(fi(`builds/meta/${Mt().app.buildId}.json`), {
        responseType: "json"
    }), jr.then(e => {
        Hr = Nh(e.matcher)
    }).catch(e => {
        console.error("[nuxt] Error fetching app manifest.", e)
    }), jr
}

function To() {
    return jr || $m()
}
async function Ei(e) {
    const t = typeof e == "string" ? e : e.path;
    if (await To(), !Hr) return console.error("[nuxt] Error creating app manifest matcher.", Hr), {};
    try {
        return di({}, ...Hr.matchAll(t).reverse())
    } catch (n) {
        return console.error("[nuxt] Error matching route rules.", n), {}
    }
}
const Qo = null;
const Yo = [{
        name: "demo",
        path: "/demo",
        component: () => He(() => import("./M1OgRyYf.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), import.meta.url)
    }, {
        name: "dmca",
        path: "/dmca",
        component: () => He(() => import("./BnogDYPU.js"), __vite__mapDeps([14, 4, 5, 15]), import.meta.url)
    }, {
        name: "about",
        path: "/about",
        component: () => He(() => import("./DqMGKk6y.js"), __vite__mapDeps([16, 4, 5, 17]), import.meta.url)
    }, {
        name: "index",
        path: "/",
        component: () => He(() => import("./BKVX1gVZ.js"), __vite__mapDeps([18, 19, 7, 8, 9, 20, 1, 2, 3, 4, 5, 6, 10, 11, 21, 22, 23, 24, 25, 12, 26]), import.meta.url)
    }, {
        name: "search",
        path: "/search",
        component: () => He(() => import("./DfXvAhF6.js"), __vite__mapDeps([27, 2, 3, 4, 5, 25, 19, 7, 8, 9, 20, 21, 24, 23, 12, 28]), import.meta.url)
    }, {
        name: "contact",
        path: "/contact",
        component: () => He(() => import("./oGBHckU3.js"), __vite__mapDeps([29, 4, 5, 30]), import.meta.url)
    }, {
        name: "friends",
        path: "/friends",
        component: () => He(() => import("./t8iG_zUS.js"), __vite__mapDeps([31, 1, 2, 3, 4, 5, 6, 21, 32, 33, 12, 34]), import.meta.url)
    }, {
        name: "privacy",
        path: "/privacy",
        component: () => He(() => import("./CHkIyai5.js"), __vite__mapDeps([35, 4, 5, 36]), import.meta.url)
    }, {
        name: "tv",
        path: "/tv",
        component: () => He(() => import("./D6Ae-Swl.js"), __vite__mapDeps([37, 1, 2, 3, 4, 5, 6, 25, 19, 7, 8, 9, 20, 21, 24, 38, 22, 39, 12, 40]), import.meta.url)
    }, {
        name: "favorites",
        path: "/favorites",
        component: () => He(() => import("./_Fayk8Ku.js"), __vite__mapDeps([41, 42, 21, 22, 8, 43, 2, 3, 4, 5, 23, 19, 7, 9, 20, 24, 25, 44]), import.meta.url)
    }, {
        name: "movies",
        path: "/movies",
        component: () => He(() => import("./CzM9z1ov.js"), __vite__mapDeps([45, 1, 2, 3, 4, 5, 6, 23, 19, 7, 8, 9, 20, 21, 24, 38, 22, 39, 12, 46]), import.meta.url)
    }, {
        name: Qo == null ? void 0 : Qo.name,
        path: "/tv/watch-:slug()-online-free-:id()",
        component: () => He(() => import("./BWnD46gJ.js"), __vite__mapDeps([47, 48, 42, 21, 22, 8, 43, 7, 9, 2, 3, 49, 32, 33, 4, 5, 24, 12, 50]), import.meta.url),
        children: [{
            name: "tv-watch-slug-online-free-id",
            path: "",
            component: () => He(() => import("./DUj8vQuf.js"), [], import.meta.url)
        }, {
            name: "tv-watch-slug-online-free-id-season-seasonId-episode-episodeId",
            path: "season-:seasonId()-episode-:episodeId()",
            component: () => He(() => import("./CAEkR4U_.js"), [], import.meta.url)
        }]
    }, {
        name: "movies-watch-slug-online-free-id",
        path: "/movies/watch-:slug(.*)*-online-free-:id()",
        component: () => He(() => import("./C3hJYGkc.js"), __vite__mapDeps([51, 48, 42, 21, 22, 8, 43, 7, 9, 2, 3, 49, 32, 33, 4, 5, 24, 12, 52]), import.meta.url)
    }],
    Eu = (e, t) => ({
        default: () => {
            var n;
            return e ? Ie(Xd, e === !0 ? {} : e, t) : (n = t.default) == null ? void 0 : n.call(t)
        }
    }),
    Dm = /(:\w+)\([^)]+\)/g,
    Nm = /(:\w+)[?+*]/g,
    Fm = /:\w+/g;

function Ba(e) {
    const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(Dm, "$1").replace(Nm, "$1").replace(Fm, n => {
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    });
    return typeof t == "function" ? t(e) : t
}

function Um(e, t) {
    return e === t || t === lt ? !1 : Ba(e) !== Ba(t) ? !0 : !e.matched.every((r, o) => {
        var s, i;
        return r.components && r.components.default === ((i = (s = t.matched[o]) == null ? void 0 : s.components) == null ? void 0 : i.default)
    })
}
const Bm = {
    scrollBehavior(e, t, n) {
        var u;
        const r = Pe(),
            o = ((u = tt().options) == null ? void 0 : u.scrollBehaviorType) ?? "auto";
        let s = n || void 0;
        const i = typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop;
        if (!s && t && e && i !== !1 && Um(e, t) && (s = {
                left: 0,
                top: 0
            }), e.path === t.path) return t.hash && !e.hash ? {
            left: 0,
            top: 0
        } : e.hash ? {
            el: e.hash,
            top: Su(e.hash),
            behavior: o
        } : !1;
        const a = c => !!(c.meta.pageTransition ?? Ts),
            l = a(t) && a(e) ? "page:transition:finish" : "page:loading:end";
        return new Promise(c => {
            r.hooks.hookOnce(l, () => {
                requestAnimationFrame(() => c(Vm(e, "instant", s)))
            })
        })
    }
};

function Su(e) {
    try {
        const t = document.querySelector(e);
        if (t) return (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
    } catch {}
    return 0
}

function Vm(e, t, n) {
    return n || (e.hash ? {
        el: e.hash,
        top: Su(e.hash),
        behavior: t
    } : {
        left: 0,
        top: 0,
        behavior: t
    })
}
const Km = {
        hashMode: !1,
        scrollBehaviorType: "auto"
    },
    ot = {
        ...Km,
        ...Bm
    },
    Wm = async e => {
        var l;
        let t, n;
        if (!((l = e.meta) != null && l.validate)) return;
        const r = Pe(),
            o = tt(),
            s = ([t, n] = Zn(() => Promise.resolve(e.meta.validate(e))), t = await t, n(), t);
        if (s === !0) return;
        const i = pi({
                statusCode: s && s.statusCode || 404,
                statusMessage: s && s.statusMessage || `Page Not Found: ${e.fullPath}`,
                data: {
                    path: e.fullPath
                }
            }),
            a = o.beforeResolve(u => {
                if (a(), u === e) {
                    const c = o.afterEach(async () => {
                        c(), await r.runWithContext(() => Vt(i)), window == null || window.history.pushState({}, "", e.fullPath)
                    });
                    return !1
                }
            })
    }, qm = async e => {
        let t, n;
        const r = ([t, n] = Zn(() => Ei({
            path: e.path
        })), t = await t, n(), t);
        if (r.redirect) return It(r.redirect, {
            acceptRelative: !0
        }) ? (window.location.href = r.redirect, !1) : r.redirect
    }, zm = [Wm, qm], nr = {};

function Gm(e, t, n) {
    const {
        pathname: r,
        search: o,
        hash: s
    } = t, i = e.indexOf("#");
    if (i > -1) {
        const u = s.includes(e.slice(i)) ? e.slice(i).length : 1;
        let c = s.slice(u);
        return c[0] !== "/" && (c = "/" + c), ca(c, "")
    }
    const a = ca(r, e),
        l = !n || Xp(a, n, {
            trailingSlash: !0
        }) ? a : n;
    return l + (l.includes("?") ? "" : o) + s
}
const Qm = Ue({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
        var E;
        let t, n, r = Mt().app.baseURL;
        const o = ((E = ot.history) == null ? void 0 : E.call(ot, r)) ?? rm(r),
            s = ot.routes ? ([t, n] = Zn(() => ot.routes(Yo)), t = await t, n(), t ?? Yo) : Yo;
        let i;
        const a = Rm({
            ...ot,
            scrollBehavior: (T, _, g) => {
                if (_ === lt) {
                    i = g;
                    return
                }
                if (ot.scrollBehavior) {
                    if (a.options.scrollBehavior = ot.scrollBehavior, "scrollRestoration" in window.history) {
                        const b = a.beforeEach(() => {
                            b(), window.history.scrollRestoration = "manual"
                        })
                    }
                    return ot.scrollBehavior(T, lt, i || g)
                }
            },
            history: o,
            routes: s
        });
        ot.routes && ot.routes, "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"), e.vueApp.use(a);
        const l = Vr(a.currentRoute.value);
        a.afterEach((T, _) => {
            l.value = _
        }), Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
            get: () => l.value
        });
        const u = Gm(r, window.location, e.payload.path),
            c = Vr(a.currentRoute.value),
            f = () => {
                c.value = a.currentRoute.value
            };
        e.hook("page:finish", f), a.afterEach((T, _) => {
            var g, b, S, P;
            ((b = (g = T.matched[0]) == null ? void 0 : g.components) == null ? void 0 : b.default) === ((P = (S = _.matched[0]) == null ? void 0 : S.components) == null ? void 0 : P.default) && f()
        });
        const d = {};
        for (const T in c.value) Object.defineProperty(d, T, {
            get: () => c.value[T],
            enumerable: !0
        });
        e._route = Wt(d), e._middleware || (e._middleware = {
            global: [],
            named: {}
        });
        const m = Hn();
        a.afterEach(async (T, _, g) => {
            delete e._processingMiddleware, !e.isHydrating && m.value && await e.runWithContext(Zc), g && await e.callHook("page:loading:end")
        });
        try {
            [t, n] = Zn(() => a.isReady()), await t, n()
        } catch (T) {
            [t, n] = Zn(() => e.runWithContext(() => Vt(T))), await t, n()
        }
        const v = u !== a.currentRoute.value.fullPath ? a.resolve(u) : a.currentRoute.value;
        f();
        const p = e.payload.state._layout;
        return a.beforeEach(async (T, _) => {
            var g;
            await e.callHook("page:loading:start"), T.meta = Yt(T.meta), e.isHydrating && p && !Pt(T.meta.layout) && (T.meta.layout = p), e._processingMiddleware = !0;
            {
                const b = new Set([...zm, ...e._middleware.global]);
                for (const S of T.matched) {
                    const P = S.meta.middleware;
                    if (P)
                        for (const O of wi(P)) b.add(O)
                } {
                    const S = await e.runWithContext(() => Ei({
                        path: T.path
                    }));
                    if (S.appMiddleware)
                        for (const P in S.appMiddleware) S.appMiddleware[P] ? b.add(P) : b.delete(P)
                }
                for (const S of b) {
                    const P = typeof S == "string" ? e._middleware.named[S] || await ((g = nr[S]) == null ? void 0 : g.call(nr).then(O => O.default || O)) : S;
                    if (!P) throw new Error(`Unknown route middleware: '${S}'.`);
                    try {
                        const O = await e.runWithContext(() => P(T, _));
                        if (!e.payload.serverRendered && e.isHydrating && (O === !1 || O instanceof Error)) {
                            const V = O || Lr({
                                statusCode: 404,
                                statusMessage: `Page Not Found: ${u}`
                            });
                            return await e.runWithContext(() => Vt(V)), !1
                        }
                        if (O === !0) continue;
                        if (O === !1) return O;
                        if (O) return eu(O) && O.fatal && await e.runWithContext(() => Vt(O)), O
                    } catch (O) {
                        const V = Lr(O);
                        return V.fatal && await e.runWithContext(() => Vt(V)), V
                    }
                }
            }
        }), a.onError(async () => {
            delete e._processingMiddleware, await e.callHook("page:loading:end")
        }), a.afterEach(async (T, _) => {
            T.matched.length === 0 && await e.runWithContext(() => Vt(Lr({
                statusCode: 404,
                fatal: !1,
                statusMessage: `Page not found: ${T.fullPath}`,
                data: {
                    path: T.fullPath
                }
            })))
        }), e.hooks.hookOnce("app:created", async () => {
            try {
                "name" in v && (v.name = void 0), await a.replace({
                    ...v,
                    force: !0
                }), a.options.scrollBehavior = ot.scrollBehavior
            } catch (T) {
                await e.runWithContext(() => Vt(T))
            }
        }), {
            provide: {
                router: a
            }
        }
    }
});

function $n(e) {
    var n;
    const t = e || qc();
    return ((n = t == null ? void 0 : t.ssrContext) == null ? void 0 : n.head) || (t == null ? void 0 : t.runWithContext(() => {
        if (vo()) return We(yi)
    }))
}

function Si(e, t = {}) {
    const n = $n(t.nuxt);
    if (n) return lu(e, {
        head: n,
        ...t
    })
}

function Tu(e, t = {}) {
    const n = $n(t.nuxt);
    if (n) return Sg(e, {
        head: n,
        ...t
    })
}
const Va = globalThis.requestIdleCallback || (e => {
        const t = Date.now(),
            n = {
                didTimeout: !1,
                timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
            };
        return setTimeout(() => {
            e(n)
        }, 1)
    }),
    Rb = globalThis.cancelIdleCallback || (e => {
        clearTimeout(e)
    }),
    Ti = e => {
        const t = Pe();
        t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
            Va(() => e())
        }) : Va(() => e())
    },
    Ym = "$s";

function xu(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    const [n, r] = e;
    if (!n || typeof n != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (r !== void 0 && typeof r != "function") throw new Error("[nuxt] [useState] init must be a function: " + r);
    const o = Ym + n,
        s = Pe(),
        i = Il(s.payload.state, o);
    if (i.value === void 0 && r) {
        const a = r();
        if (Oe(a)) return s.payload.state[o] = a, a;
        i.value = a
    }
    return i
}
async function Ka(e, t = {}) {
    if (!await Cu(e)) return null;
    const r = await Xm(e, t);
    return await Zm(r) || null
}
const Jm = "_payload.js";
async function Xm(e, t = {}) {
    const n = new URL(e, "http://localhost");
    if (n.host !== "localhost" || It(n.pathname, {
            acceptRelative: !0
        })) throw new Error("Payload URL must not include hostname: " + e);
    const r = Mt(),
        o = t.hash || (t.fresh ? Date.now() : r.app.buildId),
        s = r.app.cdnURL,
        i = s && await Cu(e) ? s : r.app.baseURL;
    return ui(i, n.pathname, Jm + (o ? `?${o}` : ""))
}
async function Zm(e) {
    const t = import(e).then(n => n.default || n);
    try {
        return await t
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n)
    }
    return null
}
async function Cu(e = br().path) {
    const t = Pe();
    return e = jn(e), (await To()).prerendered.includes(e) ? !0 : t.runWithContext(async () => {
        const r = await Ei({
            path: e
        });
        return !!r.prerender && !r.redirect
    })
}

function ey(e = {}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = Mc(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (e.force || (n == null ? void 0 : n.path) !== t || (n == null ? void 0 : n.expires) < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: t,
                expires: Date.now() + (e.ttl ?? 1e4)
            }))
        } catch {}
        if (e.persistState) try {
            sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                state: Pe().payload.state
            }))
        } catch {}
        window.location.pathname !== t ? window.location.href = t : window.location.reload()
    }
}
const ty = {
        nuxt: {},
        icon: {
            provider: "server",
            class: "",
            aliases: {},
            iconifyApiEndpoint: "https://api.iconify.design",
            localApiEndpoint: "/api/_nuxt_icon",
            fallbackToApi: !0,
            cssSelectorPrefix: "i-",
            cssWherePseudo: !0,
            mode: "svg",
            attrs: {
                "aria-hidden": !0
            },
            collections: ["academicons", "akar-icons", "ant-design", "arcticons", "basil", "bi", "bitcoin-icons", "bpmn", "brandico", "bx", "bxl", "bxs", "bytesize", "carbon", "catppuccin", "cbi", "charm", "ci", "cib", "cif", "cil", "circle-flags", "circum", "clarity", "codicon", "covid", "cryptocurrency", "cryptocurrency-color", "dashicons", "devicon", "devicon-plain", "ei", "el", "emojione", "emojione-monotone", "emojione-v1", "entypo", "entypo-social", "eos-icons", "ep", "et", "eva", "f7", "fa", "fa-brands", "fa-regular", "fa-solid", "fa6-brands", "fa6-regular", "fa6-solid", "fad", "fe", "feather", "file-icons", "flag", "flagpack", "flat-color-icons", "flat-ui", "flowbite", "fluent", "fluent-emoji", "fluent-emoji-flat", "fluent-emoji-high-contrast", "fluent-mdl2", "fontelico", "fontisto", "formkit", "foundation", "fxemoji", "gala", "game-icons", "geo", "gg", "gis", "gravity-ui", "gridicons", "grommet-icons", "guidance", "healthicons", "heroicons", "heroicons-outline", "heroicons-solid", "hugeicons", "humbleicons", "ic", "icomoon-free", "icon-park", "icon-park-outline", "icon-park-solid", "icon-park-twotone", "iconamoon", "iconoir", "icons8", "il", "ion", "iwwa", "jam", "la", "lets-icons", "line-md", "logos", "ls", "lucide", "lucide-lab", "mage", "majesticons", "maki", "map", "marketeq", "material-symbols", "material-symbols-light", "mdi", "mdi-light", "medical-icon", "memory", "meteocons", "mi", "mingcute", "mono-icons", "mynaui", "nimbus", "nonicons", "noto", "noto-v1", "octicon", "oi", "ooui", "openmoji", "oui", "pajamas", "pepicons", "pepicons-pencil", "pepicons-pop", "pepicons-print", "ph", "pixelarticons", "prime", "ps", "quill", "radix-icons", "raphael", "ri", "rivet-icons", "si-glyph", "simple-icons", "simple-line-icons", "skill-icons", "solar", "streamline", "streamline-emojis", "subway", "svg-spinners", "system-uicons", "tabler", "tdesign", "teenyicons", "token", "token-branded", "topcoat", "twemoji", "typcn", "uil", "uim", "uis", "uit", "uiw", "unjs", "vaadin", "vs", "vscode-icons", "websymbol", "weui", "whh", "wi", "wpf", "zmdi", "zondicons"],
            fetchTimeout: 1500
        }
    },
    ny = Fh(ty);

function ry() {
    const e = Pe();
    return e._appConfig || (e._appConfig = Yt(ny)), e._appConfig
}

function oy(e) {
    typeof e.indexable < "u" && (e.indexable = String(e.indexable) !== "false"), typeof e.trailingSlash < "u" && !e.trailingSlash && (e.trailingSlash = String(e.trailingSlash) !== "false"), e.url && !It(String(e.url), {
        acceptRelative: !0,
        strict: !1
    }) && (e.url = Yp(String(e.url)));
    const t = Object.keys(e).sort((r, o) => r.localeCompare(o)),
        n = {};
    for (const r of t) n[r] = e[r];
    return n
}

function sy(e) {
    const n = [];

    function r(s) {
        if (!s || typeof s != "object" || Object.keys(s).length === 0) return () => {};
        s._context;
        const i = {};
        for (const l in s) {
            const u = s[l];
            typeof u < "u" && u !== "" && (i[l] = u)
        }
        let a;
        return Object.keys(i).filter(l => !l.startsWith("_")).length > 0 && (a = n.push(i)), () => {
            typeof a < "u" && n.splice(a - 1, 1)
        }
    }

    function o(s) {
        var a;
        const i = {};
        s != null && s.debug && (i._context = {}), i._priority = {};
        for (const l in n.sort((u, c) => (u._priority || 0) - (c._priority || 0)))
            for (const u in n[l]) {
                const c = u,
                    f = s != null && s.resolveRefs ? Kr(n[l][u]) : n[l][u];
                !u.startsWith("_") && typeof f < "u" && f !== "" && (i[u] = f, typeof n[l]._priority < "u" && n[l]._priority !== -1 && (i._priority[c] = n[l]._priority), s != null && s.debug && (i._context[c] = ((a = n[l]._context) == null ? void 0 : a[c]) || n[l]._context || "anonymous"))
            }
        return s != null && s.skipNormalize ? i : oy(i)
    }
    return {
        stack: n,
        push: r,
        get: o
    }
}
const iy = Ue({
        name: "nuxt-site-config:init",
        enforce: "pre",
        async setup(e) {
            var r;
            const t = sy(),
                n = xu("site-config");
            {
                const o = n.value || window.__NUXT_SITE_CONFIG__ || {};
                for (const s in o) s[0] !== "_" && t.push({
                    [s]: o[s],
                    _priority: ((r = o._priority) == null ? void 0 : r[s]) || -1
                })
            }
            return {
                provide: {
                    nuxtSiteConfig: t
                }
            }
        }
    }),
    ay = Ue({
        name: "nuxt:payload",
        setup(e) {
            const t = new Set;
            tt().beforeResolve(async (n, r) => {
                if (n.path === r.path) return;
                const o = await Ka(n.path);
                if (o) {
                    for (const s of t) delete e.static.data[s];
                    for (const s in o.data) s in e.static.data || t.add(s), e.static.data[s] = o.data[s]
                }
            }), Ti(() => {
                var n;
                e.hooks.hook("link:prefetch", async r => {
                    const {
                        hostname: o
                    } = new URL(r, window.location.href);
                    o === window.location.hostname && await Ka(r).catch(() => {
                        console.warn("[nuxt] Error preloading payload for", r)
                    })
                }), ((n = navigator.connection) == null ? void 0 : n.effectiveType) !== "slow-2g" && setTimeout(To, 1e3)
            })
        }
    }),
    ly = Ue(() => {
        const e = tt();
        Ti(() => {
            e.beforeResolve(async () => {
                await new Promise(t => {
                    setTimeout(t, 100), requestAnimationFrame(() => {
                        setTimeout(t, 0)
                    })
                })
            })
        })
    }),
    cy = Ue(e => {
        let t;
        async function n() {
            const r = await To();
            t && clearTimeout(t), t = setTimeout(n, ha);
            try {
                const o = await $fetch(fi("builds/latest.json") + `?${Date.now()}`);
                o.id !== r.id && e.hooks.callHook("app:manifest:update", o)
            } catch {}
        }
        Ti(() => {
            t = setTimeout(n, ha)
        })
    }),
    uy = Ue({
        name: "nuxt:chunk-reload",
        setup(e) {
            const t = tt(),
                n = Mt(),
                r = new Set;
            t.beforeEach(() => {
                r.clear()
            }), e.hook("app:chunkError", ({
                error: s
            }) => {
                r.add(s)
            });

            function o(s) {
                const a = "href" in s && s.href[0] === "#" ? n.app.baseURL + s.href : ui(n.app.baseURL, s.fullPath);
                ey({
                    path: a,
                    persistState: !0
                })
            }
            e.hook("app:manifest:update", () => {
                t.beforeResolve(o)
            }), t.onError((s, i) => {
                r.has(s) && o(i)
            })
        }
    }),
    fy = Vl(() => He(() => import("./DotAJW6-.js"), [], import.meta.url).then(e => e.default || e.default || e)),
    dy = [
        ["Icon", fy]
    ],
    py = Ue({
        name: "nuxt:global-components",
        setup(e) {
            for (const [t, n] of dy) e.vueApp.component(t, n), e.vueApp.component("Lazy" + t, n)
        }
    }),
    qt = {
        default: Vl(() => He(() => import("./BOtm-3JB.js"), __vite__mapDeps([53, 22, 21, 8, 2, 3, 4, 5, 12, 54]), import.meta.url).then(e => e.default || e))
    },
    hy = Ue({
        name: "nuxt:prefetch",
        setup(e) {
            const t = tt();
            e.hooks.hook("app:mounted", () => {
                t.beforeEach(async n => {
                    var o;
                    const r = (o = n == null ? void 0 : n.meta) == null ? void 0 : o.layout;
                    r && typeof qt[r] == "function" && await qt[r]()
                })
            }), e.hooks.hook("link:prefetch", n => {
                if (It(n)) return;
                const r = t.resolve(n);
                if (!r) return;
                const o = r.meta.layout;
                let s = wi(r.meta.middleware);
                s = s.filter(i => typeof i == "string");
                for (const i of s) typeof nr[i] == "function" && nr[i]();
                o && typeof qt[o] == "function" && qt[o]()
            })
        }
    }),
    Ru = /^[a-z0-9]+(-[a-z0-9]+)*$/,
    _r = (e, t, n, r = "") => {
        const o = e.split(":");
        if (e.slice(0, 1) === "@") {
            if (o.length < 2 || o.length > 3) return null;
            r = o.shift().slice(1)
        }
        if (o.length > 3 || !o.length) return null;
        if (o.length > 1) {
            const a = o.pop(),
                l = o.pop(),
                u = {
                    provider: o.length > 0 ? o[0] : r,
                    prefix: l,
                    name: a
                };
            return t && !$r(u) ? null : u
        }
        const s = o[0],
            i = s.split("-");
        if (i.length > 1) {
            const a = {
                provider: r,
                prefix: i.shift(),
                name: i.join("-")
            };
            return t && !$r(a) ? null : a
        }
        if (n && r === "") {
            const a = {
                provider: r,
                prefix: "",
                name: s
            };
            return t && !$r(a, n) ? null : a
        }
        return null
    },
    $r = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1,
    Pu = Object.freeze({
        left: 0,
        top: 0,
        width: 16,
        height: 16
    }),
    ao = Object.freeze({
        rotate: 0,
        vFlip: !1,
        hFlip: !1
    }),
    Dn = Object.freeze({
        ...Pu,
        ...ao
    }),
    Hs = Object.freeze({
        ...Dn,
        body: "",
        hidden: !1
    });

function gy(e, t) {
    const n = {};
    !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
    const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
    return r && (n.rotate = r), n
}

function Wa(e, t) {
    const n = gy(e, t);
    for (const r in Hs) r in ao ? r in e && !(r in n) && (n[r] = ao[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
    return n
}

function my(e, t) {
    const n = e.icons,
        r = e.aliases || Object.create(null),
        o = Object.create(null);

    function s(i) {
        if (n[i]) return o[i] = [];
        if (!(i in o)) {
            o[i] = null;
            const a = r[i] && r[i].parent,
                l = a && s(a);
            l && (o[i] = [a].concat(l))
        }
        return o[i]
    }
    return Object.keys(n).concat(Object.keys(r)).forEach(s), o
}

function yy(e, t, n) {
    const r = e.icons,
        o = e.aliases || Object.create(null);
    let s = {};

    function i(a) {
        s = Wa(r[a] || o[a], s)
    }
    return i(t), n.forEach(i), Wa(e, s)
}

function ku(e, t) {
    const n = [];
    if (typeof e != "object" || typeof e.icons != "object") return n;
    e.not_found instanceof Array && e.not_found.forEach(o => {
        t(o, null), n.push(o)
    });
    const r = my(e);
    for (const o in r) {
        const s = r[o];
        s && (t(o, yy(e, o, s)), n.push(o))
    }
    return n
}
const vy = {
    provider: "",
    aliases: {},
    not_found: {},
    ...Pu
};

function Jo(e, t) {
    for (const n in t)
        if (n in e && typeof e[n] != typeof t[n]) return !1;
    return !0
}

function Au(e) {
    if (typeof e != "object" || e === null) return null;
    const t = e;
    if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Jo(e, vy)) return null;
    const n = t.icons;
    for (const o in n) {
        const s = n[o];
        if (!o || typeof s.body != "string" || !Jo(s, Hs)) return null
    }
    const r = t.aliases || Object.create(null);
    for (const o in r) {
        const s = r[o],
            i = s.parent;
        if (!o || typeof i != "string" || !n[i] && !r[i] || !Jo(s, Hs)) return null
    }
    return t
}
const qa = Object.create(null);

function by(e, t) {
    return {
        provider: e,
        prefix: t,
        icons: Object.create(null),
        missing: new Set
    }
}

function dn(e, t) {
    const n = qa[e] || (qa[e] = Object.create(null));
    return n[t] || (n[t] = by(e, t))
}

function Ou(e, t) {
    return Au(t) ? ku(t, (n, r) => {
        r ? e.icons[n] = r : e.missing.add(n)
    }) : []
}

function _y(e, t, n) {
    try {
        if (typeof n.body == "string") return e.icons[t] = {
            ...n
        }, !0
    } catch {}
    return !1
}
let dr = !1;

function Iu(e) {
    return typeof e == "boolean" && (dr = e), dr
}

function xi(e) {
    const t = typeof e == "string" ? _r(e, !0, dr) : e;
    if (t) {
        const n = dn(t.provider, t.prefix),
            r = t.name;
        return n.icons[r] || (n.missing.has(r) ? null : void 0)
    }
}

function wy(e, t) {
    const n = _r(e, !0, dr);
    if (!n) return !1;
    const r = dn(n.provider, n.prefix);
    return t ? _y(r, n.name, t) : (r.missing.add(n.name), !0)
}

function Ey(e, t) {
    if (typeof e != "object") return !1;
    if (typeof t != "string" && (t = e.provider || ""), dr && !t && !e.prefix) {
        let o = !1;
        return Au(e) && (e.prefix = "", ku(e, (s, i) => {
            wy(s, i) && (o = !0)
        })), o
    }
    const n = e.prefix;
    if (!$r({
            prefix: n,
            name: "a"
        })) return !1;
    const r = dn(t, n);
    return !!Ou(r, e)
}

function Pb(e) {
    const t = xi(e);
    return t && {
        ...Dn,
        ...t
    }
}
const Mu = Object.freeze({
        width: null,
        height: null
    }),
    Lu = Object.freeze({
        ...Mu,
        ...ao
    }),
    Sy = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
    Ty = /^-?[0-9.]*[0-9]+[0-9.]*$/g;

function za(e, t, n) {
    if (t === 1) return e;
    if (n = n || 100, typeof e == "number") return Math.ceil(e * t * n) / n;
    if (typeof e != "string") return e;
    const r = e.split(Sy);
    if (r === null || !r.length) return e;
    const o = [];
    let s = r.shift(),
        i = Ty.test(s);
    for (;;) {
        if (i) {
            const a = parseFloat(s);
            isNaN(a) ? o.push(s) : o.push(Math.ceil(a * t * n) / n)
        } else o.push(s);
        if (s = r.shift(), s === void 0) return o.join("");
        i = !i
    }
}

function xy(e, t = "defs") {
    let n = "";
    const r = e.indexOf("<" + t);
    for (; r >= 0;) {
        const o = e.indexOf(">", r),
            s = e.indexOf("</" + t);
        if (o === -1 || s === -1) break;
        const i = e.indexOf(">", s);
        if (i === -1) break;
        n += e.slice(o + 1, s).trim(), e = e.slice(0, r).trim() + e.slice(i + 1)
    }
    return {
        defs: n,
        content: e
    }
}

function Cy(e, t) {
    return e ? "<defs>" + e + "</defs>" + t : t
}

function Ry(e, t, n) {
    const r = xy(e);
    return Cy(r.defs, t + r.content + n)
}
const Py = e => e === "unset" || e === "undefined" || e === "none";

function ky(e, t) {
    const n = {
            ...Dn,
            ...e
        },
        r = {
            ...Lu,
            ...t
        },
        o = {
            left: n.left,
            top: n.top,
            width: n.width,
            height: n.height
        };
    let s = n.body;
    [n, r].forEach(p => {
        const E = [],
            T = p.hFlip,
            _ = p.vFlip;
        let g = p.rotate;
        T ? _ ? g += 2 : (E.push("translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"), E.push("scale(-1 1)"), o.top = o.left = 0) : _ && (E.push("translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"), E.push("scale(1 -1)"), o.top = o.left = 0);
        let b;
        switch (g < 0 && (g -= Math.floor(g / 4) * 4), g = g % 4, g) {
        case 1:
            b = o.height / 2 + o.top, E.unshift("rotate(90 " + b.toString() + " " + b.toString() + ")");
            break;
        case 2:
            E.unshift("rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")");
            break;
        case 3:
            b = o.width / 2 + o.left, E.unshift("rotate(-90 " + b.toString() + " " + b.toString() + ")");
            break
        }
        g % 2 === 1 && (o.left !== o.top && (b = o.left, o.left = o.top, o.top = b), o.width !== o.height && (b = o.width, o.width = o.height, o.height = b)), E.length && (s = Ry(s, '<g transform="' + E.join(" ") + '">', "</g>"))
    });
    const i = r.width,
        a = r.height,
        l = o.width,
        u = o.height;
    let c, f;
    i === null ? (f = a === null ? "1em" : a === "auto" ? u : a, c = za(f, l / u)) : (c = i === "auto" ? l : i, f = a === null ? za(c, u / l) : a === "auto" ? u : a);
    const d = {},
        m = (p, E) => {
            Py(E) || (d[p] = E.toString())
        };
    m("width", c), m("height", f);
    const v = [o.left, o.top, l, u];
    return d.viewBox = v.join(" "), {
        attributes: d,
        viewBox: v,
        body: s
    }
}
const Ay = /\sid="(\S+)"/g,
    Oy = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Iy = 0;

function My(e, t = Oy) {
    const n = [];
    let r;
    for (; r = Ay.exec(e);) n.push(r[1]);
    if (!n.length) return e;
    const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
    return n.forEach(s => {
        const i = typeof t == "function" ? t(s) : t + (Iy++).toString(),
            a = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        e = e.replace(new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"), "$1" + i + o + "$3")
    }), e = e.replace(new RegExp(o, "g"), ""), e
}
const $s = Object.create(null);

function ju(e, t) {
    $s[e] = t
}

function Ds(e) {
    return $s[e] || $s[""]
}

function Ci(e) {
    let t;
    if (typeof e.resources == "string") t = [e.resources];
    else if (t = e.resources, !(t instanceof Array) || !t.length) return null;
    return {
        resources: t,
        path: e.path || "/",
        maxURL: e.maxURL || 500,
        rotate: e.rotate || 750,
        timeout: e.timeout || 5e3,
        random: e.random === !0,
        index: e.index || 0,
        dataAfterTimeout: e.dataAfterTimeout !== !1
    }
}
const xo = Object.create(null),
    Kn = ["https://api.simplesvg.com", "https://api.unisvg.com"],
    Dr = [];
for (; Kn.length > 0;) Kn.length === 1 || Math.random() > .5 ? Dr.push(Kn.shift()) : Dr.push(Kn.pop());
xo[""] = Ci({
    resources: ["https://api.iconify.design"].concat(Dr)
});

function Hu(e, t) {
    const n = Ci(t);
    return n === null ? !1 : (xo[e] = n, !0)
}

function Co(e) {
    return xo[e]
}

function Ly() {
    return Object.keys(xo)
}
const jy = () => {
    let e;
    try {
        if (e = fetch, typeof e == "function") return e
    } catch {}
};
let lo = jy();

function Hy(e) {
    lo = e
}

function $y() {
    return lo
}

function Dy(e, t) {
    const n = Co(e);
    if (!n) return 0;
    let r;
    if (!n.maxURL) r = 0;
    else {
        let o = 0;
        n.resources.forEach(i => {
            o = Math.max(o, i.length)
        });
        const s = t + ".json?icons=";
        r = n.maxURL - o - n.path.length - s.length
    }
    return r
}

function Ny(e) {
    return e === 404
}
const Fy = (e, t, n) => {
    const r = [],
        o = Dy(e, t),
        s = "icons";
    let i = {
            type: s,
            provider: e,
            prefix: t,
            icons: []
        },
        a = 0;
    return n.forEach((l, u) => {
        a += l.length + 1, a >= o && u > 0 && (r.push(i), i = {
            type: s,
            provider: e,
            prefix: t,
            icons: []
        }, a = l.length), i.icons.push(l)
    }), r.push(i), r
};

function Uy(e) {
    if (typeof e == "string") {
        const t = Co(e);
        if (t) return t.path
    }
    return "/"
}
const By = (e, t, n) => {
        if (!lo) {
            n("abort", 424);
            return
        }
        let r = Uy(t.provider);
        switch (t.type) {
        case "icons": {
            const s = t.prefix,
                a = t.icons.join(","),
                l = new URLSearchParams({
                    icons: a
                });
            r += s + ".json?" + l.toString();
            break
        }
        case "custom": {
            const s = t.uri;
            r += s.slice(0, 1) === "/" ? s.slice(1) : s;
            break
        }
        default:
            n("abort", 400);
            return
        }
        let o = 503;
        lo(e + r).then(s => {
            const i = s.status;
            if (i !== 200) {
                setTimeout(() => {
                    n(Ny(i) ? "abort" : "next", i)
                });
                return
            }
            return o = 501, s.json()
        }).then(s => {
            if (typeof s != "object" || s === null) {
                setTimeout(() => {
                    s === 404 ? n("abort", s) : n("next", o)
                });
                return
            }
            setTimeout(() => {
                n("success", s)
            })
        }).catch(() => {
            n("next", o)
        })
    },
    Vy = {
        prepare: Fy,
        send: By
    };

function Ky(e) {
    const t = {
            loaded: [],
            missing: [],
            pending: []
        },
        n = Object.create(null);
    e.sort((o, s) => o.provider !== s.provider ? o.provider.localeCompare(s.provider) : o.prefix !== s.prefix ? o.prefix.localeCompare(s.prefix) : o.name.localeCompare(s.name));
    let r = {
        provider: "",
        prefix: "",
        name: ""
    };
    return e.forEach(o => {
        if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider) return;
        r = o;
        const s = o.provider,
            i = o.prefix,
            a = o.name,
            l = n[s] || (n[s] = Object.create(null)),
            u = l[i] || (l[i] = dn(s, i));
        let c;
        a in u.icons ? c = t.loaded : i === "" || u.missing.has(a) ? c = t.missing : c = t.pending;
        const f = {
            provider: s,
            prefix: i,
            name: a
        };
        c.push(f)
    }), t
}

function $u(e, t) {
    e.forEach(n => {
        const r = n.loaderCallbacks;
        r && (n.loaderCallbacks = r.filter(o => o.id !== t))
    })
}

function Wy(e) {
    e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
        e.pendingCallbacksFlag = !1;
        const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
        if (!t.length) return;
        let n = !1;
        const r = e.provider,
            o = e.prefix;
        t.forEach(s => {
            const i = s.icons,
                a = i.pending.length;
            i.pending = i.pending.filter(l => {
                if (l.prefix !== o) return !0;
                const u = l.name;
                if (e.icons[u]) i.loaded.push({
                    provider: r,
                    prefix: o,
                    name: u
                });
                else if (e.missing.has(u)) i.missing.push({
                    provider: r,
                    prefix: o,
                    name: u
                });
                else return n = !0, !0;
                return !1
            }), i.pending.length !== a && (n || $u([e], s.id), s.callback(i.loaded.slice(0), i.missing.slice(0), i.pending.slice(0), s.abort))
        })
    }))
}
let qy = 0;

function zy(e, t, n) {
    const r = qy++,
        o = $u.bind(null, n, r);
    if (!t.pending.length) return o;
    const s = {
        id: r,
        icons: t,
        callback: e,
        abort: o
    };
    return n.forEach(i => {
        (i.loaderCallbacks || (i.loaderCallbacks = [])).push(s)
    }), o
}

function Gy(e, t = !0, n = !1) {
    const r = [];
    return e.forEach(o => {
        const s = typeof o == "string" ? _r(o, t, n) : o;
        s && r.push(s)
    }), r
}
var Qy = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: !1,
    dataAfterTimeout: !1
};

function Yy(e, t, n, r) {
    const o = e.resources.length,
        s = e.random ? Math.floor(Math.random() * o) : e.index;
    let i;
    if (e.random) {
        let P = e.resources.slice(0);
        for (i = []; P.length > 1;) {
            const O = Math.floor(Math.random() * P.length);
            i.push(P[O]), P = P.slice(0, O).concat(P.slice(O + 1))
        }
        i = i.concat(P)
    } else i = e.resources.slice(s).concat(e.resources.slice(0, s));
    const a = Date.now();
    let l = "pending",
        u = 0,
        c, f = null,
        d = [],
        m = [];
    typeof r == "function" && m.push(r);

    function v() {
        f && (clearTimeout(f), f = null)
    }

    function p() {
        l === "pending" && (l = "aborted"), v(), d.forEach(P => {
            P.status === "pending" && (P.status = "aborted")
        }), d = []
    }

    function E(P, O) {
        O && (m = []), typeof P == "function" && m.push(P)
    }

    function T() {
        return {
            startTime: a,
            payload: t,
            status: l,
            queriesSent: u,
            queriesPending: d.length,
            subscribe: E,
            abort: p
        }
    }

    function _() {
        l = "failed", m.forEach(P => {
            P(void 0, c)
        })
    }

    function g() {
        d.forEach(P => {
            P.status === "pending" && (P.status = "aborted")
        }), d = []
    }

    function b(P, O, V) {
        const U = O !== "success";
        switch (d = d.filter(F => F !== P), l) {
        case "pending":
            break;
        case "failed":
            if (U || !e.dataAfterTimeout) return;
            break;
        default:
            return
        }
        if (O === "abort") {
            c = V, _();
            return
        }
        if (U) {
            c = V, d.length || (i.length ? S() : _());
            return
        }
        if (v(), g(), !e.random) {
            const F = e.resources.indexOf(P.resource);
            F !== -1 && F !== e.index && (e.index = F)
        }
        l = "completed", m.forEach(F => {
            F(V)
        })
    }

    function S() {
        if (l !== "pending") return;
        v();
        const P = i.shift();
        if (P === void 0) {
            if (d.length) {
                f = setTimeout(() => {
                    v(), l === "pending" && (g(), _())
                }, e.timeout);
                return
            }
            _();
            return
        }
        const O = {
            status: "pending",
            resource: P,
            callback: (V, U) => {
                b(O, V, U)
            }
        };
        d.push(O), u++, f = setTimeout(S, e.rotate), n(P, t, O.callback)
    }
    return setTimeout(S), T
}

function Du(e) {
    const t = {
        ...Qy,
        ...e
    };
    let n = [];

    function r() {
        n = n.filter(a => a().status === "pending")
    }

    function o(a, l, u) {
        const c = Yy(t, a, l, (f, d) => {
            r(), u && u(f, d)
        });
        return n.push(c), c
    }

    function s(a) {
        return n.find(l => a(l)) || null
    }
    return {
        query: o,
        find: s,
        setIndex: a => {
            t.index = a
        },
        getIndex: () => t.index,
        cleanup: r
    }
}

function Ga() {}
const Xo = Object.create(null);

function Jy(e) {
    if (!Xo[e]) {
        const t = Co(e);
        if (!t) return;
        const n = Du(t),
            r = {
                config: t,
                redundancy: n
            };
        Xo[e] = r
    }
    return Xo[e]
}

function Nu(e, t, n) {
    let r, o;
    if (typeof e == "string") {
        const s = Ds(e);
        if (!s) return n(void 0, 424), Ga;
        o = s.send;
        const i = Jy(e);
        i && (r = i.redundancy)
    } else {
        const s = Ci(e);
        if (s) {
            r = Du(s);
            const i = e.resources ? e.resources[0] : "",
                a = Ds(i);
            a && (o = a.send)
        }
    }
    return !r || !o ? (n(void 0, 424), Ga) : r.query(t, o, n)().abort
}

function Qa() {}

function Xy(e) {
    e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
        e.iconsLoaderFlag = !1, Wy(e)
    }))
}

function Zy(e) {
    const t = [],
        n = [];
    return e.forEach(r => {
        (r.match(Ru) ? t : n).push(r)
    }), {
        valid: t,
        invalid: n
    }
}

function Wn(e, t, n) {
    function r() {
        const o = e.pendingIcons;
        t.forEach(s => {
            o && o.delete(s), e.icons[s] || e.missing.add(s)
        })
    }
    if (n && typeof n == "object") try {
        if (!Ou(e, n).length) {
            r();
            return
        }
    } catch (o) {
        console.error(o)
    }
    r(), Xy(e)
}

function Ya(e, t) {
    e instanceof Promise ? e.then(n => {
        t(n)
    }).catch(() => {
        t(null)
    }) : t(e)
}

function ev(e, t) {
    e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
        e.iconsQueueFlag = !1;
        const {
            provider: n,
            prefix: r
        } = e, o = e.iconsToLoad;
        if (delete e.iconsToLoad, !o || !o.length) return;
        const s = e.loadIcon;
        if (e.loadIcons && (o.length > 1 || !s)) {
            Ya(e.loadIcons(o, r, n), c => {
                Wn(e, o, c)
            });
            return
        }
        if (s) {
            o.forEach(c => {
                const f = s(c, r, n);
                Ya(f, d => {
                    const m = d ? {
                        prefix: r,
                        icons: {
                            [c]: d
                        }
                    } : null;
                    Wn(e, [c], m)
                })
            });
            return
        }
        const {
            valid: i,
            invalid: a
        } = Zy(o);
        if (a.length && Wn(e, a, null), !i.length) return;
        const l = r.match(Ru) ? Ds(n) : null;
        if (!l) {
            Wn(e, i, null);
            return
        }
        l.prepare(n, r, i).forEach(c => {
            Nu(n, c, f => {
                Wn(e, c.icons, f)
            })
        })
    }))
}
const Fu = (e, t) => {
        const n = Gy(e, !0, Iu()),
            r = Ky(n);
        if (!r.pending.length) {
            let l = !0;
            return t && setTimeout(() => {
                l && t(r.loaded, r.missing, r.pending, Qa)
            }), () => {
                l = !1
            }
        }
        const o = Object.create(null),
            s = [];
        let i, a;
        return r.pending.forEach(l => {
            const {
                provider: u,
                prefix: c
            } = l;
            if (c === a && u === i) return;
            i = u, a = c, s.push(dn(u, c));
            const f = o[u] || (o[u] = Object.create(null));
            f[c] || (f[c] = [])
        }), r.pending.forEach(l => {
            const {
                provider: u,
                prefix: c,
                name: f
            } = l, d = dn(u, c), m = d.pendingIcons || (d.pendingIcons = new Set);
            m.has(f) || (m.add(f), o[u][c].push(f))
        }), s.forEach(l => {
            const u = o[l.provider][l.prefix];
            u.length && ev(l, u)
        }), t ? zy(t, r, s) : Qa
    },
    kb = e => new Promise((t, n) => {
        const r = typeof e == "string" ? _r(e, !0) : e;
        if (!r) {
            n(e);
            return
        }
        Fu([r || e], o => {
            if (o.length && r) {
                const s = xi(r);
                if (s) {
                    t({
                        ...Dn,
                        ...s
                    });
                    return
                }
            }
            n(e)
        })
    });

function tv(e, t, n) {
    dn("", t).loadIcons = e
}

function nv(e, t) {
    const n = {
        ...e
    };
    for (const r in t) {
        const o = t[r],
            s = typeof o;
        r in Mu ? (o === null || o && (s === "string" || s === "number")) && (n[r] = o) : s === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o)
    }
    return n
}
const rv = /[\s,]+/;

function ov(e, t) {
    t.split(rv).forEach(n => {
        switch (n.trim()) {
        case "horizontal":
            e.hFlip = !0;
            break;
        case "vertical":
            e.vFlip = !0;
            break
        }
    })
}

function sv(e, t = 0) {
    const n = e.replace(/^-?[0-9.]*/, "");

    function r(o) {
        for (; o < 0;) o += 4;
        return o % 4
    }
    if (n === "") {
        const o = parseInt(e);
        return isNaN(o) ? 0 : r(o)
    } else if (n !== e) {
        let o = 0;
        switch (n) {
        case "%":
            o = 25;
            break;
        case "deg":
            o = 90
        }
        if (o) {
            let s = parseFloat(e.slice(0, e.length - n.length));
            return isNaN(s) ? 0 : (s = s / o, s % 1 === 0 ? r(s) : 0)
        }
    }
    return t
}

function iv(e, t) {
    let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const r in t) n += " " + r + '="' + t[r] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>"
}

function av(e) {
    return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ")
}

function lv(e) {
    return "data:image/svg+xml," + av(e)
}

function cv(e) {
    return 'url("' + lv(e) + '")'
}
const Ja = {
        ...Lu,
        inline: !1
    },
    uv = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "aria-hidden": !0,
        role: "img"
    },
    fv = {
        display: "inline-block"
    },
    Ns = {
        backgroundColor: "currentColor"
    },
    Uu = {
        backgroundColor: "transparent"
    },
    Xa = {
        Image: "var(--svg)",
        Repeat: "no-repeat",
        Size: "100% 100%"
    },
    Za = {
        webkitMask: Ns,
        mask: Ns,
        background: Uu
    };
for (const e in Za) {
    const t = Za[e];
    for (const n in Xa) t[e + n] = Xa[n]
}
const Nr = {};
["horizontal", "vertical"].forEach(e => {
    const t = e.slice(0, 1) + "Flip";
    Nr[e + "-flip"] = t, Nr[e.slice(0, 1) + "-flip"] = t, Nr[e + "Flip"] = t
});

function el(e) {
    return e + (e.match(/^[-0-9.]+$/) ? "px" : "")
}
const tl = (e, t) => {
    const n = nv(Ja, t),
        r = {
            ...uv
        },
        o = t.mode || "svg",
        s = {},
        i = t.style,
        a = typeof i == "object" && !(i instanceof Array) ? i : {};
    for (let p in t) {
        const E = t[p];
        if (E !== void 0) switch (p) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
        case "ssr":
            break;
        case "inline":
        case "hFlip":
        case "vFlip":
            n[p] = E === !0 || E === "true" || E === 1;
            break;
        case "flip":
            typeof E == "string" && ov(n, E);
            break;
        case "color":
            s.color = E;
            break;
        case "rotate":
            typeof E == "string" ? n[p] = sv(E) : typeof E == "number" && (n[p] = E);
            break;
        case "ariaHidden":
        case "aria-hidden":
            E !== !0 && E !== "true" && delete r["aria-hidden"];
            break;
        default: {
            const T = Nr[p];
            T ? (E === !0 || E === "true" || E === 1) && (n[T] = !0) : Ja[p] === void 0 && (r[p] = E)
        }
        }
    }
    const l = ky(e, n),
        u = l.attributes;
    if (n.inline && (s.verticalAlign = "-0.125em"), o === "svg") {
        r.style = {
            ...s,
            ...a
        }, Object.assign(r, u);
        let p = 0,
            E = t.id;
        return typeof E == "string" && (E = E.replace(/-/g, "_")), r.innerHTML = My(l.body, E ? () => E + "ID" + p++ : "iconifyVue"), Ie("svg", r)
    }
    const {
        body: c,
        width: f,
        height: d
    } = e, m = o === "mask" || (o === "bg" ? !1 : c.indexOf("currentColor") !== -1), v = iv(c, {
        ...u,
        width: f + "",
        height: d + ""
    });
    return r.style = {
        ...s,
        "--svg": cv(v),
        width: el(u.width),
        height: el(u.height),
        ...fv,
        ...m ? Ns : Uu,
        ...a
    }, Ie("span", r)
};
Iu(!0);
ju("", Vy);
if (typeof document < "u" && typeof window < "u") {
    const e = window;
    if (e.IconifyPreload !== void 0) {
        const t = e.IconifyPreload,
            n = "Invalid IconifyPreload syntax.";
        typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach(r => {
            try {
                (typeof r != "object" || r === null || r instanceof Array || typeof r.icons != "object" || typeof r.prefix != "string" || !Ey(r)) && console.error(n)
            } catch {
                console.error(n)
            }
        })
    }
    if (e.IconifyProviders !== void 0) {
        const t = e.IconifyProviders;
        if (typeof t == "object" && t !== null)
            for (let n in t) {
                const r = "IconifyProviders[" + n + "] is invalid.";
                try {
                    const o = t[n];
                    if (typeof o != "object" || !o || o.resources === void 0) continue;
                    Hu(n, o) || console.error(r)
                } catch {
                    console.error(r)
                }
            }
    }
}
const dv = {
        ...Dn,
        body: ""
    },
    Ab = pt((e, {
        emit: t
    }) => {
        const n = Ze(null);

        function r() {
            var u, c;
            n.value && ((c = (u = n.value).abort) == null || c.call(u), n.value = null)
        }
        const o = Ze(!!e.ssr),
            s = Ze(""),
            i = Vr(null);

        function a() {
            const u = e.icon;
            if (typeof u == "object" && u !== null && typeof u.body == "string") return s.value = "", {
                data: u
            };
            let c;
            if (typeof u != "string" || (c = _r(u, !1, !0)) === null) return null;
            let f = xi(c);
            if (!f) {
                const v = n.value;
                return (!v || v.name !== u) && (f === null ? n.value = {
                    name: u
                } : n.value = {
                    name: u,
                    abort: Fu([c], l)
                }), null
            }
            r(), s.value !== u && (s.value = u, Ln(() => {
                t("load", u)
            }));
            const d = e.customise;
            if (d) {
                f = Object.assign({}, f);
                const v = d(f.body, c.name, c.prefix, c.provider);
                typeof v == "string" && (f.body = v)
            }
            const m = ["iconify"];
            return c.prefix !== "" && m.push("iconify--" + c.prefix), c.provider !== "" && m.push("iconify--" + c.provider), {
                data: f,
                classes: m
            }
        }

        function l() {
            var c;
            const u = a();
            u ? u.data !== ((c = i.value) == null ? void 0 : c.data) && (i.value = u) : i.value = null
        }
        return o.value ? l() : yo(() => {
            o.value = !0, l()
        }), ln(() => e.icon, l), ni(r), () => {
            const u = i.value;
            if (!u) return tl(dv, e);
            let c = e;
            return u.classes && (c = {
                ...e,
                class: u.classes.join(" ")
            }), tl({
                ...Dn,
                ...u.data
            }, c)
        }
    }, {
        props: ["icon", "mode", "ssr", "width", "height", "style", "color", "inline", "rotate", "hFlip", "horizontalFlip", "vFlip", "verticalFlip", "flip", "id", "ariaHidden", "customise", "title"],
        emits: ["load"]
    }),
    nl = {
        getAPIConfig: Co,
        setAPIModule: ju,
        sendAPIQuery: Nu,
        setFetch: Hy,
        getFetch: $y,
        listAPIProviders: Ly
    },
    pv = Ue({
        name: "@nuxt/icon",
        setup() {
            var o, s;
            const e = Mt(),
                t = ry().icon;
            nl.setFetch($fetch.native);
            const n = [];
            if (t.provider === "server") {
                const i = ((s = (o = e.app) == null ? void 0 : o.baseURL) == null ? void 0 : s.replace(/\/$/, "")) ?? "";
                n.push(i + (t.localApiEndpoint || "/api/_nuxt_icon")), (t.fallbackToApi === !0 || t.fallbackToApi === "client-only") && n.push(t.iconifyApiEndpoint)
            } else t.provider === "none" ? nl.setFetch(() => Promise.resolve(new Response)) : n.push(t.iconifyApiEndpoint);
            async function r(i, a) {
                try {
                    const l = await $fetch(n[0] + "/" + a + ".json", {
                        query: {
                            icons: i.join(",")
                        }
                    });
                    if (!l || l.prefix !== a || !l.icons) throw new Error("Invalid data" + JSON.stringify(l));
                    return l
                } catch (l) {
                    return console.error("Failed to load custom icons", l), null
                }
            }
            Hu("", {
                resources: n
            });
            for (const i of t.customCollections || []) i && tv(r, i)
        }
    });

function Zo(...e) {
    var t;
    (t = window.dataLayer) == null || t.push(arguments)
}

function hv({
    tags: e
}) {
    window.dataLayer = window.dataLayer || [];
    for (const t of e)
        for (const n of t.initCommands ?? []) Zo(...n);
    Zo("js", new Date);
    for (const t of e) Zo("config", t.id, t.config ?? {})
}

function gv(e) {
    const t = me(e),
        n = t.tags.filter(Boolean).map(r => typeof r == "string" ? {
            id: r
        } : r);
    if (t.id) {
        const {
            id: r,
            config: o,
            initCommands: s
        } = t;
        n.unshift({
            id: r,
            config: o,
            initCommands: s
        })
    }
    return n
}
const mv = Ue({
    parallel: !0,
    setup() {
        const e = Mt().public.gtag,
            t = gv(e);
        if (!t.length || (hv({
                tags: t
            }), e.initMode === "manual")) return;
        const n = e.loadingStrategy === "async" ? "async" : "defer";
        Si({
            link: [{
                rel: "preload",
                as: "script",
                href: to(e.url, {
                    id: t[0].id
                })
            }],
            script: [{
                src: to(e.url, {
                    id: t[0].id
                }),
                [n]: !0,
                "data-gtag": ""
            }]
        })
    }
});

function Ri(e) {
    const t = Yt({});
    return hc(() => {
        const n = Pe().$nuxtSiteConfig.get(di({
            resolveRefs: !0
        }, e));
        Object.assign(t, n)
    }), delete t._priority, t
}
const yv = Ue(() => {
        const e = $n();
        if (!e) return;
        const t = Ri(),
            n = {
                meta: [],
                templateParams: {
                    site: t,
                    siteUrl: t.url,
                    siteName: t.name
                }
            };
        t.separator && (n.templateParams.separator = t.separator), t.titleSeparator && (n.templateParams.titleSeparator = t.titleSeparator), t.description && (n.templateParams.siteDescription = t.description, n.meta.push({
            name: "description",
            content: "%site.description",
            tagPriority: "low"
        })), e.push(n)
    }),
    vv = Ue(() => {
        const e = $n();
        e && (e.use(mi), e.use(bg()))
    }),
    bv = /\d/,
    _v = ["-", "_", "/", "."];

function wv(e = "") {
    if (!bv.test(e)) return e !== e.toLowerCase()
}

function Ev(e, t) {
    const n = _v,
        r = [];
    if (!e || typeof e != "string") return r;
    let o = "",
        s, i;
    for (const a of e) {
        const l = n.includes(a);
        if (l === !0) {
            r.push(o), o = "", s = void 0;
            continue
        }
        const u = wv(a);
        if (i === !1) {
            if (s === !1 && u === !0) {
                r.push(o), o = a, s = u;
                continue
            }
            if (s === !0 && u === !1 && o.length > 1) {
                const c = o.at(-1);
                r.push(o.slice(0, Math.max(0, o.length - 1))), o = c + a, s = u;
                continue
            }
        }
        o += a, s = u, i = l
    }
    return r.push(o), r
}

function Sv(e) {
    return e ? e[0].toUpperCase() + e.slice(1) : ""
}
const Tv = /^(a|an|and|as|at|but|by|for|if|in|is|nor|of|on|or|the|to|with)$/i;

function xv(e, t) {
    return (Array.isArray(e) ? e : Ev(e)).filter(Boolean).map(n => Tv.test(n) ? n.toLowerCase() : Sv(n)).join(" ")
}
const Cv = Ue({
    name: "nuxt-seo:fallback-titles",
    env: {
        islands: !1
    },
    setup() {
        const e = br(),
            t = Hn(),
            n = Me(() => {
                var i, a, l;
                if (t.value && [404, 500].includes((i = t.value) == null ? void 0 : i.statusCode)) return `${t.value.statusCode} - ${t.value.message}`;
                if (typeof ((a = e.meta) == null ? void 0 : a.title) == "string") return (l = e.meta) == null ? void 0 : l.title;
                const s = jn(e.path || "/").split("/").pop();
                return s ? xv(s) : null
            });
        Si({
            title: () => n.value
        }, {
            tagPriority: 101
        })
    }
});

function Rv(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Fr = {
        exports: {}
    },
    Pv = Fr.exports,
    rl;

function kv() {
    return rl || (rl = 1, function (e, t) {
        (function (n, r) {
            e.exports = r()
        })(Pv, function () {
            function n(C) {
                return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (w) {
                    return typeof w
                } : function (w) {
                    return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w
                })(C)
            }

            function r(C, w) {
                if (!(C instanceof w)) throw new TypeError("Cannot call a class as a function")
            }

            function o(C, w) {
                for (var R = 0; R < w.length; R++) {
                    var B = w[R];
                    B.enumerable = B.enumerable || !1, B.configurable = !0, "value" in B && (B.writable = !0), Object.defineProperty(C, B.key, B)
                }
            }

            function s(C, w, R) {
                w && o(C.prototype, w), R && o(C, R), Object.defineProperty(C, "prototype", {
                    writable: !1
                })
            }

            function i(C, w, R) {
                w in C ? Object.defineProperty(C, w, {
                    value: R,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : C[w] = R
            }

            function a(C, w) {
                if (typeof w != "function" && w !== null) throw new TypeError("Super expression must either be null or a function");
                C.prototype = Object.create(w && w.prototype, {
                    constructor: {
                        value: C,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(C, "prototype", {
                    writable: !1
                }), w && u(C, w)
            }

            function l(C) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (w) {
                    return w.__proto__ || Object.getPrototypeOf(w)
                })(C)
            }

            function u(C, w) {
                return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (R, B) {
                    return R.__proto__ = B, R
                })(C, w)
            }

            function c(C, w) {
                if (w && (typeof w == "object" || typeof w == "function")) return w;
                if (w !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                if (w = C, w === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return w
            }

            function f(C) {
                var w = function () {
                    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                    if (typeof Proxy == "function") return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                    } catch {
                        return !1
                    }
                }();
                return function () {
                    var R, B = l(C);
                    return c(this, w ? (R = l(this).constructor, Reflect.construct(B, arguments, R)) : B.apply(this, arguments))
                }
            }

            function d(C, w) {
                (w == null || w > C.length) && (w = C.length);
                for (var R = 0, B = new Array(w); R < w; R++) B[R] = C[R];
                return B
            }

            function m(C, w) {
                var R, B = typeof Symbol < "u" && C[Symbol.iterator] || C["@@iterator"];
                if (!B) {
                    if (Array.isArray(C) || (B = function (I, M) {
                            if (I) {
                                if (typeof I == "string") return d(I, M);
                                var N = Object.prototype.toString.call(I).slice(8, -1);
                                return (N = N === "Object" && I.constructor ? I.constructor.name : N) === "Map" || N === "Set" ? Array.from(I) : N === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N) ? d(I, M) : void 0
                            }
                        }(C)) || w && C && typeof C.length == "number") return B && (C = B), R = 0, {
                        s: w = function () {},
                        n: function () {
                            return R >= C.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: C[R++]
                            }
                        },
                        e: function (I) {
                            throw I
                        },
                        f: w
                    };
                    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                }
                var ee, A = !0,
                    se = !1;
                return {
                    s: function () {
                        B = B.call(C)
                    },
                    n: function () {
                        var I = B.next();
                        return A = I.done, I
                    },
                    e: function (I) {
                        se = !0, ee = I
                    },
                    f: function () {
                        try {
                            A || B.return == null || B.return()
                        } finally {
                            if (se) throw ee
                        }
                    }
                }
            }

            function v() {
                if (p.url) window.location.href = p.url;
                else if (p.rewriteHTML) try {
                    document.documentElement.innerHTML = p.rewriteHTML
                } catch {
                    document.documentElement.innerText = p.rewriteHTML
                } else {
                    try {
                        window.opener = null, window.open("", "_self"), window.close(), window.history.back()
                    } catch (C) {
                        console.log(C)
                    }
                    setTimeout(function () {
                        window.location.href = p.timeOutUrl || "https://theajack.github.io/disable-devtool/404.html?h=".concat(encodeURIComponent(location.host))
                    }, 500)
                }
            }
            var p = {
                    md5: "",
                    ondevtoolopen: v,
                    ondevtoolclose: null,
                    url: "",
                    timeOutUrl: "",
                    tkName: "ddtk",
                    interval: 500,
                    disableMenu: !0,
                    stopIntervalTime: 5e3,
                    clearIntervalWhenDevOpenTrigger: !1,
                    detectors: [1, 3, 4, 5, 6, 7],
                    clearLog: !0,
                    disableSelect: !1,
                    disableInputSelect: !1,
                    disableCopy: !1,
                    disableCut: !1,
                    disablePaste: !1,
                    ignore: null,
                    disableIframeParents: !0,
                    seo: !0,
                    rewriteHTML: ""
                },
                E = ["detectors", "ondevtoolclose", "ignore"];

            function T(C) {
                var w, R = 0 < arguments.length && C !== void 0 ? C : {};
                for (w in R.onDevtoolOpen && (R.ondevtoolopen = R.onDevtoolOpen), R.onDevtoolClose && (R.ondevtoolclose = R.onDevtoolClose), p) {
                    var B = w;
                    R[B] === void 0 || n(p[B]) !== n(R[B]) && E.indexOf(B) === -1 || (p[B] = R[B])
                }
                typeof p.ondevtoolclose == "function" && p.clearIntervalWhenDevOpenTrigger === !0 && (p.clearIntervalWhenDevOpenTrigger = !1, console.warn("【DISABLE-DEVTOOL】clearIntervalWhenDevOpenTrigger 在使用 ondevtoolclose 时无效"))
            }

            function _() {
                return new Date().getTime()
            }

            function g(C) {
                var w = _();
                return C(), _() - w
            }

            function b(C, w) {
                function R(se) {
                    return function () {
                        C && C();
                        var I = se.apply(void 0, arguments);
                        return w && w(), I
                    }
                }
                var B = window.alert,
                    ee = window.confirm,
                    A = window.prompt;
                try {
                    window.alert = R(B), window.confirm = R(ee), window.prompt = R(A)
                } catch {}
            }
            var S, P, O, V = {
                iframe: !1,
                pc: !1,
                qqBrowser: !1,
                firefox: !1,
                macos: !1,
                edge: !1,
                oldEdge: !1,
                ie: !1,
                iosChrome: !1,
                iosEdge: !1,
                chrome: !1,
                seoBot: !1,
                mobile: !1
            };

            function U() {
                function C(jt) {
                    return w.indexOf(jt) !== -1
                }
                var w = navigator.userAgent.toLowerCase(),
                    R = function () {
                        var Ht = navigator,
                            jt = Ht.platform,
                            Ht = Ht.maxTouchPoints;
                        if (typeof Ht == "number") return 1 < Ht;
                        if (typeof jt == "string") {
                            if (Ht = jt.toLowerCase(), /(mac|win)/i.test(Ht)) return !1;
                            if (/(android|iphone|ipad|ipod|arch)/i.test(Ht)) return !0
                        }
                        return /(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase())
                    }(),
                    B = !!window.top && window !== window.top,
                    ee = !R,
                    A = C("qqbrowser"),
                    se = C("firefox"),
                    I = C("macintosh"),
                    M = C("edge"),
                    N = M && !C("chrome"),
                    $ = N || C("trident") || C("msie"),
                    q = C("crios"),
                    pn = C("edgios"),
                    Lt = C("chrome") || q,
                    hn = !R && /(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome\-lighthouse|moto g power)/i.test(w);
                Object.assign(V, {
                    iframe: B,
                    pc: ee,
                    qqBrowser: A,
                    firefox: se,
                    macos: I,
                    edge: M,
                    oldEdge: N,
                    ie: $,
                    iosChrome: q,
                    iosEdge: pn,
                    chrome: Lt,
                    seoBot: hn,
                    mobile: R
                })
            }

            function F() {
                for (var C = function () {
                        for (var B = {}, ee = 0; ee < 500; ee++) B["".concat(ee)] = "".concat(ee);
                        return B
                    }(), w = [], R = 0; R < 50; R++) w.push(C);
                return w
            }

            function te() {
                p.clearLog && O()
            }
            var W = "",
                re = !1;

            function de() {
                var C = p.ignore;
                if (C) {
                    if (typeof C == "function") return C();
                    if (C.length !== 0) {
                        var w = location.href;
                        if (W === w) return re;
                        W = w;
                        var R, B = !1,
                            ee = m(C);
                        try {
                            for (ee.s(); !(R = ee.n()).done;) {
                                var A = R.value;
                                if (typeof A == "string") {
                                    if (w.indexOf(A) !== -1) {
                                        B = !0;
                                        break
                                    }
                                } else if (A.test(w)) {
                                    B = !0;
                                    break
                                }
                            }
                        } catch (se) {
                            ee.e(se)
                        } finally {
                            ee.f()
                        }
                        return re = B
                    }
                }
            }
            var he = function () {
                return !1
            };

            function X(C) {
                var w, R, B = 74,
                    ee = 73,
                    A = 85,
                    se = 83,
                    I = 123,
                    M = V.macos ? function ($, q) {
                        return $.metaKey && $.altKey && (q === ee || q === B)
                    } : function ($, q) {
                        return $.ctrlKey && $.shiftKey && (q === ee || q === B)
                    },
                    N = V.macos ? function ($, q) {
                        return $.metaKey && $.altKey && q === A || $.metaKey && q === se
                    } : function ($, q) {
                        return $.ctrlKey && (q === se || q === A)
                    };
                C.addEventListener("keydown", function ($) {
                    var q = ($ = $ || C.event).keyCode || $.which;
                    if (q === I || M($, q) || N($, q)) return Z(C, $)
                }, !0), w = C, p.disableMenu && w.addEventListener("contextmenu", function ($) {
                    if ($.pointerType !== "touch") return Z(w, $)
                }), R = C, (p.disableSelect || p.disableInputSelect) && ce(R, "selectstart"), R = C, p.disableCopy && ce(R, "copy"), R = C, p.disableCut && ce(R, "cut"), R = C, p.disablePaste && ce(R, "paste")
            }

            function ce(C, w) {
                C.addEventListener(w, function (R) {
                    if (!(B = R.target) || B.tagName !== "INPUT" && B.tagName !== "TEXTAREA" && ((ee = B.getAttribute) == null ? void 0 : ee.call(B, "contenteditable")) !== "true") {
                        if (p.disableSelect) return Z(C, R)
                    } else if (p.disableInputSelect) return Z(C, R);
                    var B, ee
                })
            }

            function Z(C, w) {
                if (!de() && !he()) return (w = w || C.event).returnValue = !1, w.preventDefault(), !1
            }
            var fe, nt = !1,
                qe = {};

            function je(C) {
                qe[C] = !1
            }

            function yt() {
                for (var C in qe)
                    if (qe[C]) return nt = !0;
                return nt = !1
            }(D = fe = fe || {})[D.Unknown = -1] = "Unknown", D[D.RegToString = 0] = "RegToString", D[D.DefineId = 1] = "DefineId", D[D.Size = 2] = "Size", D[D.DateToString = 3] = "DateToString", D[D.FuncToString = 4] = "FuncToString", D[D.Debugger = 5] = "Debugger", D[D.Performance = 6] = "Performance", D[D.DebugLib = 7] = "DebugLib";
            var ze = function () {
                    function C(B) {
                        var R = B.type,
                            B = B.enabled,
                            B = B === void 0 || B;
                        r(this, C), this.type = fe.Unknown, this.enabled = !0, this.type = R, this.enabled = B, this.enabled && (R = this, J.push(R), this.init())
                    }
                    return s(C, [{
                        key: "onDevToolOpen",
                        value: function () {
                            var w;
                            console.warn("You don't have permission to use DEVTOOL!【type = ".concat(this.type, "】")), p.clearIntervalWhenDevOpenTrigger && ge(), window.clearTimeout(j), p.ondevtoolopen(this.type, v), w = this.type, qe[w] = !0
                        }
                    }, {
                        key: "init",
                        value: function () {}
                    }]), C
                }(),
                Xt = function () {
                    a(w, ze);
                    var C = f(w);

                    function w() {
                        return r(this, w), C.call(this, {
                            type: fe.DebugLib
                        })
                    }
                    return s(w, [{
                        key: "init",
                        value: function () {}
                    }, {
                        key: "detect",
                        value: function () {
                            var R;
                            (((R = (R = window.eruda) == null ? void 0 : R._devTools) == null ? void 0 : R._isShow) === !0 || window._vcOrigConsole && window.document.querySelector("#__vconsole.vc-toggle")) && this.onDevToolOpen()
                        }
                    }], [{
                        key: "isUsing",
                        value: function () {
                            return !!window.eruda || !!window._vcOrigConsole
                        }
                    }]), w
                }(),
                Ge = 0,
                j = 0,
                J = [],
                Y = 0;

            function ne(C) {
                function w() {
                    N = !0
                }

                function R() {
                    N = !1
                }
                var B, ee, A, se, I, M, N = !1;

                function $() {
                    (M[se] === A ? ee : B)()
                }
                b(w, R), B = R, ee = w, (M = document).hidden !== void 0 ? (A = "hidden", I = "visibilitychange", se = "visibilityState") : M.mozHidden !== void 0 ? (A = "mozHidden", I = "mozvisibilitychange", se = "mozVisibilityState") : M.msHidden !== void 0 ? (A = "msHidden", I = "msvisibilitychange", se = "msVisibilityState") : M.webkitHidden !== void 0 && (A = "webkitHidden", I = "webkitvisibilitychange", se = "webkitVisibilityState"), M.removeEventListener(I, $, !1), M.addEventListener(I, $, !1), Ge = window.setInterval(function () {
                    if (!(C.isSuspend || N || de())) {
                        var q, pn, Lt = m(J);
                        try {
                            for (Lt.s(); !(q = Lt.n()).done;) {
                                var hn = q.value;
                                je(hn.type), hn.detect(Y++)
                            }
                        } catch (jt) {
                            Lt.e(jt)
                        } finally {
                            Lt.f()
                        }
                        te(), typeof p.ondevtoolclose == "function" && (pn = nt, !yt() && pn && p.ondevtoolclose())
                    }
                }, p.interval), j = setTimeout(function () {
                    V.pc || Xt.isUsing() || ge()
                }, p.stopIntervalTime)
            }

            function ge() {
                window.clearInterval(Ge)
            }
            var ve = 8;

            function h(C) {
                for (var w = function (A, se) {
                        A[se >> 5] |= 128 << se % 32, A[14 + (se + 64 >>> 9 << 4)] = se;
                        for (var I = 1732584193, M = -271733879, N = -1732584194, $ = 271733878, q = 0; q < A.length; q += 16) {
                            var pn = I,
                                Lt = M,
                                hn = N,
                                jt = $;
                            I = x(I, M, N, $, A[q + 0], 7, -680876936), $ = x($, I, M, N, A[q + 1], 12, -389564586), N = x(N, $, I, M, A[q + 2], 17, 606105819), M = x(M, N, $, I, A[q + 3], 22, -1044525330), I = x(I, M, N, $, A[q + 4], 7, -176418897), $ = x($, I, M, N, A[q + 5], 12, 1200080426), N = x(N, $, I, M, A[q + 6], 17, -1473231341), M = x(M, N, $, I, A[q + 7], 22, -45705983), I = x(I, M, N, $, A[q + 8], 7, 1770035416), $ = x($, I, M, N, A[q + 9], 12, -1958414417), N = x(N, $, I, M, A[q + 10], 17, -42063), M = x(M, N, $, I, A[q + 11], 22, -1990404162), I = x(I, M, N, $, A[q + 12], 7, 1804603682), $ = x($, I, M, N, A[q + 13], 12, -40341101), N = x(N, $, I, M, A[q + 14], 17, -1502002290), M = x(M, N, $, I, A[q + 15], 22, 1236535329), I = L(I, M, N, $, A[q + 1], 5, -165796510), $ = L($, I, M, N, A[q + 6], 9, -1069501632), N = L(N, $, I, M, A[q + 11], 14, 643717713), M = L(M, N, $, I, A[q + 0], 20, -373897302), I = L(I, M, N, $, A[q + 5], 5, -701558691), $ = L($, I, M, N, A[q + 10], 9, 38016083), N = L(N, $, I, M, A[q + 15], 14, -660478335), M = L(M, N, $, I, A[q + 4], 20, -405537848), I = L(I, M, N, $, A[q + 9], 5, 568446438), $ = L($, I, M, N, A[q + 14], 9, -1019803690), N = L(N, $, I, M, A[q + 3], 14, -187363961), M = L(M, N, $, I, A[q + 8], 20, 1163531501), I = L(I, M, N, $, A[q + 13], 5, -1444681467), $ = L($, I, M, N, A[q + 2], 9, -51403784), N = L(N, $, I, M, A[q + 7], 14, 1735328473), M = L(M, N, $, I, A[q + 12], 20, -1926607734), I = k(I, M, N, $, A[q + 5], 4, -378558), $ = k($, I, M, N, A[q + 8], 11, -2022574463), N = k(N, $, I, M, A[q + 11], 16, 1839030562), M = k(M, N, $, I, A[q + 14], 23, -35309556), I = k(I, M, N, $, A[q + 1], 4, -1530992060), $ = k($, I, M, N, A[q + 4], 11, 1272893353), N = k(N, $, I, M, A[q + 7], 16, -155497632), M = k(M, N, $, I, A[q + 10], 23, -1094730640), I = k(I, M, N, $, A[q + 13], 4, 681279174), $ = k($, I, M, N, A[q + 0], 11, -358537222), N = k(N, $, I, M, A[q + 3], 16, -722521979), M = k(M, N, $, I, A[q + 6], 23, 76029189), I = k(I, M, N, $, A[q + 9], 4, -640364487), $ = k($, I, M, N, A[q + 12], 11, -421815835), N = k(N, $, I, M, A[q + 15], 16, 530742520), M = k(M, N, $, I, A[q + 2], 23, -995338651), I = H(I, M, N, $, A[q + 0], 6, -198630844), $ = H($, I, M, N, A[q + 7], 10, 1126891415), N = H(N, $, I, M, A[q + 14], 15, -1416354905), M = H(M, N, $, I, A[q + 5], 21, -57434055), I = H(I, M, N, $, A[q + 12], 6, 1700485571), $ = H($, I, M, N, A[q + 3], 10, -1894986606), N = H(N, $, I, M, A[q + 10], 15, -1051523), M = H(M, N, $, I, A[q + 1], 21, -2054922799), I = H(I, M, N, $, A[q + 8], 6, 1873313359), $ = H($, I, M, N, A[q + 15], 10, -30611744), N = H(N, $, I, M, A[q + 6], 15, -1560198380), M = H(M, N, $, I, A[q + 13], 21, 1309151649), I = H(I, M, N, $, A[q + 4], 6, -145523070), $ = H($, I, M, N, A[q + 11], 10, -1120210379), N = H(N, $, I, M, A[q + 2], 15, 718787259), M = H(M, N, $, I, A[q + 9], 21, -343485551), I = G(I, pn), M = G(M, Lt), N = G(N, hn), $ = G($, jt)
                        }
                        return Array(I, M, N, $)
                    }(function (A) {
                        for (var se = Array(), I = (1 << ve) - 1, M = 0; M < A.length * ve; M += ve) se[M >> 5] |= (A.charCodeAt(M / ve) & I) << M % 32;
                        return se
                    }(C), C.length * ve), R = "0123456789abcdef", B = "", ee = 0; ee < 4 * w.length; ee++) B += R.charAt(w[ee >> 2] >> ee % 4 * 8 + 4 & 15) + R.charAt(w[ee >> 2] >> ee % 4 * 8 & 15);
                return B
            }

            function y(C, w, R, B, ee, A) {
                return G((w = G(G(w, C), G(B, A))) << ee | w >>> 32 - ee, R)
            }

            function x(C, w, R, B, ee, A, se) {
                return y(w & R | ~w & B, C, w, ee, A, se)
            }

            function L(C, w, R, B, ee, A, se) {
                return y(w & B | R & ~B, C, w, ee, A, se)
            }

            function k(C, w, R, B, ee, A, se) {
                return y(w ^ R ^ B, C, w, ee, A, se)
            }

            function H(C, w, R, B, ee, A, se) {
                return y(R ^ (w | ~B), C, w, ee, A, se)
            }

            function G(C, w) {
                var R = (65535 & C) + (65535 & w);
                return (C >> 16) + (w >> 16) + (R >> 16) << 16 | 65535 & R
            }
            var D = function () {
                    a(w, ze);
                    var C = f(w);

                    function w() {
                        return r(this, w), C.call(this, {
                            type: fe.RegToString,
                            enabled: V.qqBrowser || V.firefox
                        })
                    }
                    return s(w, [{
                        key: "init",
                        value: function () {
                            var R = this;
                            this.lastTime = 0, this.reg = /./, S(this.reg), this.reg.toString = function () {
                                var B;
                                return V.qqBrowser ? (B = new Date().getTime(), R.lastTime && B - R.lastTime < 100 ? R.onDevToolOpen() : R.lastTime = B) : V.firefox && R.onDevToolOpen(), ""
                            }
                        }
                    }, {
                        key: "detect",
                        value: function () {
                            S(this.reg)
                        }
                    }]), w
                }(),
                z = function () {
                    a(w, ze);
                    var C = f(w);

                    function w() {
                        return r(this, w), C.call(this, {
                            type: fe.DefineId
                        })
                    }
                    return s(w, [{
                        key: "init",
                        value: function () {
                            var R = this;
                            this.div = document.createElement("div"), this.div.__defineGetter__("id", function () {
                                R.onDevToolOpen()
                            }), Object.defineProperty(this.div, "id", {
                                get: function () {
                                    R.onDevToolOpen()
                                }
                            })
                        }
                    }, {
                        key: "detect",
                        value: function () {
                            S(this.div)
                        }
                    }]), w
                }(),
                K = function () {
                    a(w, ze);
                    var C = f(w);

                    function w() {
                        return r(this, w), C.call(this, {
                            type: fe.Size,
                            enabled: !V.iframe && !V.edge
                        })
                    }
                    return s(w, [{
                        key: "init",
                        value: function () {
                            var R = this;
                            this.checkWindowSizeUneven(), window.addEventListener("resize", function () {
                                setTimeout(function () {
                                    R.checkWindowSizeUneven()
                                }, 100)
                            }, !0)
                        }
                    }, {
                        key: "detect",
                        value: function () {}
                    }, {
                        key: "checkWindowSizeUneven",
                        value: function () {
                            var R = function () {
                                if (ie(window.devicePixelRatio)) return window.devicePixelRatio;
                                var ee = window.screen;
                                return !!(ie(ee) && ee.deviceXDPI && ee.logicalXDPI) && ee.deviceXDPI / ee.logicalXDPI
                            }();
                            if (R !== !1) {
                                var B = 200 < window.outerWidth - window.innerWidth * R,
                                    R = 300 < window.outerHeight - window.innerHeight * R;
                                if (B || R) return this.onDevToolOpen(), !1;
                                je(this.type)
                            }
                            return !0
                        }
                    }]), w
                }();

            function ie(C) {
                return C != null
            }
            var Q, oe = function () {
                    a(w, ze);
                    var C = f(w);

                    function w() {
                        return r(this, w), C.call(this, {
                            type: fe.DateToString,
                            enabled: !V.iosChrome && !V.iosEdge
                        })
                    }
                    return s(w, [{
                        key: "init",
                        value: function () {
                            var R = this;
                            this.count = 0, this.date = new Date, this.date.toString = function () {
                                return R.count++, ""
                            }
                        }
                    }, {
                        key: "detect",
                        value: function () {
                            this.count = 0, S(this.date), te(), 2 <= this.count && this.onDevToolOpen()
                        }
                    }]), w
                }(),
                ue = function () {
                    a(w, ze);
                    var C = f(w);

                    function w() {
                        return r(this, w), C.call(this, {
                            type: fe.FuncToString,
                            enabled: !V.iosChrome && !V.iosEdge
                        })
                    }
                    return s(w, [{
                        key: "init",
                        value: function () {
                            var R = this;
                            this.count = 0, this.func = function () {}, this.func.toString = function () {
                                return R.count++, ""
                            }
                        }
                    }, {
                        key: "detect",
                        value: function () {
                            this.count = 0, S(this.func), te(), 2 <= this.count && this.onDevToolOpen()
                        }
                    }]), w
                }(),
                pe = function () {
                    a(w, ze);
                    var C = f(w);

                    function w() {
                        return r(this, w), C.call(this, {
                            type: fe.Debugger,
                            enabled: V.iosChrome || V.iosEdge
                        })
                    }
                    return s(w, [{
                        key: "detect",
                        value: function () {
                            var R = _();
                            100 < _() - R && this.onDevToolOpen()
                        }
                    }]), w
                }(),
                we = function () {
                    a(w, ze);
                    var C = f(w);

                    function w() {
                        var R;
                        return r(this, w), (R = C.call(this, {
                            type: fe.Performance,
                            enabled: V.chrome || !V.mobile
                        })).count = 0, R
                    }
                    return s(w, [{
                        key: "init",
                        value: function () {
                            this.maxPrintTime = 0, this.largeObjectArray = F()
                        }
                    }, {
                        key: "detect",
                        value: function () {
                            var R = this,
                                B = g(function () {
                                    P(R.largeObjectArray)
                                }),
                                ee = g(function () {
                                    S(R.largeObjectArray)
                                });
                            if (this.maxPrintTime = Math.max(this.maxPrintTime, ee), te(), B === 0 || this.maxPrintTime === 0) return !1;
                            B > 10 * this.maxPrintTime && (2 <= this.count ? this.onDevToolOpen() : (this.count++, this.detect()))
                        }
                    }]), w
                }(),
                ye = (i(Q = {}, fe.RegToString, D), i(Q, fe.DefineId, z), i(Q, fe.Size, K), i(Q, fe.DateToString, oe), i(Q, fe.FuncToString, ue), i(Q, fe.Debugger, pe), i(Q, fe.Performance, we), i(Q, fe.DebugLib, Xt), Q),
                ke = Object.assign(function (C) {
                    function w() {
                        var se = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : "";
                        return {
                            success: !se,
                            reason: se
                        }
                    }
                    var R;
                    if (ke.isRunning) return w("already running");
                    return;
                    if (U(), R = window.console || {
                            log: function () {},
                            table: function () {},
                            clear: function () {}
                        }, O = V.ie ? (S = function () {
                            return R.log.apply(R, arguments)
                        }, P = function () {
                            return R.table.apply(R, arguments)
                        }, function () {
                            return R.clear()
                        }) : (S = R.log, P = R.table, R.clear), T(C), p.md5 && h(function (se) {
                            var I = window.location.search,
                                M = window.location.hash;
                            return (I = I === "" && M !== "" ? "?".concat(M.split("?")[1]) : I) !== "" && I !== void 0 && (M = new RegExp("(^|&)" + se + "=([^&]*)(&|$)", "i"), se = I.substr(1).match(M), se != null) ? unescape(se[2]) : ""
                        }(p.tkName)) === p.md5) return w("token passed");
                    if (p.seo && V.seoBot) return w("seobot");
                    ke.isRunning = !0, ne(ke);
                    var B = ke,
                        ee = (he = function () {
                            return B.isSuspend
                        }, window.top),
                        A = window.parent;
                    if (X(window), p.disableIframeParents && ee && A && ee !== window) {
                        for (; A !== ee;) X(A), A = A.parent;
                        X(ee)
                    }
                    return (p.detectors === "all" ? Object.keys(ye) : p.detectors).forEach(function (se) {
                        new ye[se]
                    }), w()
                }, {
                    isRunning: !1,
                    isSuspend: !1,
                    md5: h,
                    version: "0.3.9",
                    DetectorType: fe,
                    isDevToolOpened: yt
                });
            return D = function () {
                if (typeof window > "u" || !window.document) return null;
                var C = document.querySelector("[disable-devtool-auto]");
                if (!C) return null;
                var w = ["disable-menu", "disable-select", "disable-copy", "disable-cut", "disable-paste", "clear-log"],
                    R = ["interval"],
                    B = {};
                return ["md5", "url", "tk-name", "detectors"].concat(w, R).forEach(function (ee) {
                    var A = C.getAttribute(ee);
                    A !== null && (R.indexOf(ee) !== -1 ? A = parseInt(A) : w.indexOf(ee) !== -1 ? A = A !== "false" : ee === "detector" && A !== "all" && (A = A.split(" ")), B[function (se) {
                        if (se.indexOf("-") === -1) return se;
                        var I = !1;
                        return se.split("").map(function (M) {
                            return M === "-" ? (I = !0, "") : I ? (I = !1, M.toUpperCase()) : M
                        }).join("")
                    }(ee)] = A)
                }), B
            }(), D && ke(D), ke
        })
    }(Fr)), Fr.exports
}
var Av = kv();
const Ov = Rv(Av),
    Iv = Ue({
        name: "disable-devtool",
        setup() {
            Ov({
                md5: Mt().public.md5Key,
                ignore: () => !1
            })
        }
    }),
    Mv = Ue({
        enforce: "post",
        async setup() {
            const e = $n(),
                t = xu("nuxt-seo-utils:routeRules", () => null);
            if (t.value) {
                const {
                    head: n,
                    seoMeta: r
                } = t.value;
                n && e.push(n), r && Tu(r)
            }
        }
    });

function Lv(e, t) {
    let n = e;
    It(e, {
        strict: !1,
        acceptRelative: !0
    }) && (n = Eo(e).pathname);
    const r = _s(t.base || "/");
    r !== "/" && n.startsWith(r) && (n = n.slice(r.length));
    let o = jn(t.absolute ? t.siteUrl : "");
    r !== "/" && o.endsWith(r) && (o = o.slice(0, o.indexOf(r)));
    const s = t.withBase ? ws(r, o || "/") : o,
        i = ws(n, s);
    return n === "/" && !t.withBase ? lr(i) : $v(t.trailingSlash, i)
}
const jv = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg", "ico", "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "md", "markdown", "zip", "rar", "7z", "tar", "gz", "mp3", "wav", "flac", "ogg", "opus", "m4a", "aac", "midi", "mid", "mp4", "avi", "mkv", "mov", "wmv", "flv", "webm", "html", "css", "js", "json", "xml", "tsx", "jsx", "ts", "vue", "svelte", "xsl", "rss", "atom", "php", "py", "rb", "java", "c", "cpp", "h", "go", "csv", "tsv", "sql", "yaml", "yml", "woff", "woff2", "ttf", "otf", "eot", "exe", "msi", "apk", "ipa", "dmg", "iso", "bin", "bat", "cmd", "sh", "env", "htaccess", "conf", "toml", "ini", "deb", "rpm", "jar", "war", "epub", "mobi", "log", "tmp", "bak", "old", "sav"];

function Hv(e) {
    var r;
    const n = (r = (e.split("/").pop() || e).match(/\.[0-9a-z]+$/i)) == null ? void 0 : r[0];
    return n && jv.includes(n.replace(".", ""))
}

function $v(e, t) {
    const n = Eo(t);
    if (Hv(n.pathname)) return t;
    const r = e ? lr(n.pathname) : jn(n.pathname);
    return `${n.protocol?`${n.protocol}//`:""}${n.host||""}${r}${n.search||""}${n.hash||""}`
}

function Dv(e) {
    return window.location.origin
}

function Nv(e = {}) {
    const t = Ri(),
        n = Dv(),
        r = Mt().app.baseURL || "/";
    return o => Me(() => Lv(xe(o), {
        absolute: xe(e.absolute),
        withBase: xe(e.withBase),
        siteUrl: xe(e.canonical) !== !1 ? t.url : n,
        trailingSlash: t.trailingSlash,
        base: r
    }))
}

function Fv() {
    const e = Ri({
            resolveRefs: !1
        }),
        t = () => Kr(e.currentLocale) || Kr(e.defaultLocale) || "en";
    $n().use(mi);
    const {
        canonicalQueryWhitelist: r,
        canonicalLowercase: o
    } = Mt().public["seo-utils"], s = br(), i = Nv({
        withBase: !0,
        absolute: !0
    }), a = Hn(), l = Me(() => {
        if (a.value) return !1;
        const {
            query: f
        } = s;
        let d = i(s.path || "/").value || s.path;
        if (o) try {
            d = d.toLocaleLowerCase(t())
        } catch {
            d = d.toLowerCase()
        }
        const m = Object.fromEntries(Object.entries(f).filter(([p]) => r.includes(p)).sort(([p], [E]) => p.localeCompare(E)));
        return {
            rel: "canonical",
            href: Object.keys(m).length ? `${d}?${jc(m)}` : d
        }
    }), u = {
        tagPriority: "low"
    };
    Si({
        htmlAttrs: {
            lang: t
        },
        templateParams: {
            site: () => e,
            siteName: () => e.name
        },
        titleTemplate: "%s %separator %siteName",
        link: [() => l.value]
    }, u);
    const c = {
        ogType: "website",
        ogUrl: () => {
            const f = l.value;
            return f ? f.href : !1
        },
        ogLocale: () => {
            const f = t();
            {
                const d = f.replace("-", "_");
                if (d.includes("_")) return d
            }
            return !1
        },
        ogSiteName: e.name
    };
    if (e.description && (c.description = e.description), e.twitter) {
        const f = e.twitter.startsWith("@") ? e.twitter : `@${e.twitter}`;
        c.twitterCreator = f, c.twitterSite = f
    }
    Tu(c, u)
}
const Uv = Ue({
        name: "nuxt-seo:defaults",
        order: 999,
        env: {
            islands: !1
        },
        setup() {
            Fv()
        }
    }),
    Bv = [Cg, Qm, iy, ay, ly, cy, uy, py, hy, pv, mv, yv, vv, Cv, Iv, Mv, Uv];

function Vv(e, t) {
    const n = t / e * 100;
    return 2 / Math.PI * 100 * Math.atan(n / 50)
}

function Kv(e = {}) {
    const {
        duration: t = 2e3,
        throttle: n = 200,
        hideDelay: r = 500,
        resetDelay: o = 400
    } = e, s = e.estimatedProgress || Vv, i = Pe(), a = Ze(0), l = Ze(!1), u = Ze(!1);
    let c = !1,
        f, d, m, v;
    const p = (O = {}) => {
        g(), u.value = !1, E(0, O)
    };

    function E(O = 0, V = {}) {
        if (i.isHydrating) return;
        if (O >= 100) return _({
            force: V.force
        });
        b(), a.value = O < 0 ? 0 : O;
        const U = V.force ? 0 : n;
        U ? d = setTimeout(() => {
            l.value = !0, S()
        }, U) : (l.value = !0, S())
    }

    function T() {
        m = setTimeout(() => {
            l.value = !1, v = setTimeout(() => {
                a.value = 0
            }, o)
        }, r)
    }

    function _(O = {}) {
        a.value = 100, c = !0, b(), g(), O.error && (u.value = !0), O.force ? (a.value = 0, l.value = !1) : T()
    }

    function g() {
        clearTimeout(m), clearTimeout(v)
    }

    function b() {
        clearTimeout(d), cancelAnimationFrame(f)
    }

    function S() {
        c = !1;
        let O;

        function V(U) {
            if (c) return;
            O ?? (O = U);
            const F = U - O;
            a.value = Math.max(0, Math.min(100, s(t, F))), f = requestAnimationFrame(V)
        }
        f = requestAnimationFrame(V)
    }
    let P = () => {};
    {
        const O = i.hook("page:loading:start", () => {
                p()
            }),
            V = i.hook("page:loading:end", () => {
                _()
            }),
            U = i.hook("vue:error", () => _());
        P = () => {
            U(), O(), V(), b()
        }
    }
    return {
        _cleanup: P,
        progress: Me(() => a.value),
        isLoading: Me(() => l.value),
        error: Me(() => u.value),
        start: p,
        set: E,
        finish: _,
        clear: b
    }
}

function Wv(e = {}) {
    const t = Pe(),
        n = t._loadingIndicator || (t._loadingIndicator = Kv(e));
    return zs() && (t._loadingIndicatorDeps || (t._loadingIndicatorDeps = 0), t._loadingIndicatorDeps++, af(() => {
        t._loadingIndicatorDeps--, t._loadingIndicatorDeps === 0 && (n._cleanup(), delete t._loadingIndicator)
    })), n
}
const qv = pt({
        name: "NuxtLoadingIndicator",
        props: {
            throttle: {
                type: Number,
                default: 200
            },
            duration: {
                type: Number,
                default: 2e3
            },
            height: {
                type: Number,
                default: 3
            },
            color: {
                type: [String, Boolean],
                default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
            },
            errorColor: {
                type: String,
                default: "repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)"
            },
            estimatedProgress: {
                type: Function,
                required: !1
            }
        },
        setup(e, {
            slots: t,
            expose: n
        }) {
            const {
                progress: r,
                isLoading: o,
                error: s,
                start: i,
                finish: a,
                clear: l
            } = Wv({
                duration: e.duration,
                throttle: e.throttle,
                estimatedProgress: e.estimatedProgress
            });
            return n({
                progress: r,
                isLoading: o,
                error: s,
                start: i,
                finish: a,
                clear: l
            }), () => Ie("div", {
                class: "nuxt-loading-indicator",
                style: {
                    position: "fixed",
                    top: 0,
                    right: 0,
                    left: 0,
                    pointerEvents: "none",
                    width: "auto",
                    height: `${e.height}px`,
                    opacity: o.value ? 1 : 0,
                    background: s.value ? e.errorColor : e.color || void 0,
                    backgroundSize: `${100/r.value*100}% auto`,
                    transform: `scaleX(${r.value}%)`,
                    transformOrigin: "left",
                    transition: "transform 0.1s, height 0.4s, opacity 0.4s",
                    zIndex: 999999
                }
            }, t)
        }
    }),
    Bu = (e = "RouteProvider") => pt({
        name: e,
        props: {
            vnode: {
                type: Object,
                required: !0
            },
            route: {
                type: Object,
                required: !0
            },
            vnodeRef: Object,
            renderKey: String,
            trackRootNodes: Boolean
        },
        setup(t) {
            const n = t.renderKey,
                r = t.route,
                o = {};
            for (const s in t.route) Object.defineProperty(o, s, {
                get: () => n === t.renderKey ? t.route[s] : r[s],
                enumerable: !0
            });
            return an(vr, Wt(o)), () => Ie(t.vnode, {
                ref: t.vnodeRef
            })
        }
    }),
    zv = Bu(),
    ol = new WeakMap,
    Gv = pt({
        name: "NuxtPage",
        inheritAttrs: !1,
        props: {
            name: {
                type: String
            },
            transition: {
                type: [Boolean, Object],
                default: void 0
            },
            keepalive: {
                type: [Boolean, Object],
                default: void 0
            },
            route: {
                type: Object
            },
            pageKey: {
                type: [Function, String],
                default: null
            }
        },
        setup(e, {
            attrs: t,
            slots: n,
            expose: r
        }) {
            const o = Pe(),
                s = Ze(),
                i = We(vr, null);
            let a;
            r({
                pageRef: s
            });
            const l = We(Jc, null);
            let u;
            const c = o.deferHydration();
            if (o.isHydrating) {
                const d = o.hooks.hookOnce("app:error", c);
                tt().beforeEach(d)
            }
            e.pageKey && ln(() => e.pageKey, (d, m) => {
                d !== m && o.callHook("page:loading:start")
            });
            let f = !1;
            {
                const d = tt().beforeResolve(() => {
                    f = !1
                });
                yr(() => {
                    d()
                })
            }
            return () => Ie(wu, {
                name: e.name,
                route: e.route,
                ...t
            }, {
                default: d => {
                    const m = Yv(i, d.route, d.Component),
                        v = i && i.matched.length === d.route.matched.length;
                    if (!d.Component) {
                        if (u && !v) return u;
                        c();
                        return
                    }
                    if (u && l && !l.isCurrent(d.route)) return u;
                    if (m && i && (!l || l != null && l.isCurrent(i))) return v ? u : null;
                    const p = js(d, e.pageKey),
                        E = Jv(i, d.route, d.Component);
                    !o.isHydrating && a === p && !E && (o.callHook("page:loading:end"), f = !0), a = p;
                    const T = !!(e.transition ?? d.route.meta.pageTransition ?? Ts),
                        _ = T && Qv([e.transition, d.route.meta.pageTransition, Ts, {
                            onAfterLeave: () => {
                                o.callHook("page:transition:finish", d.Component)
                            }
                        }]),
                        g = e.keepalive ?? d.route.meta.keepalive ?? kh;
                    return u = Eu(T && _, Lm(g, Ie(ii, {
                        suspensible: !0,
                        onPending: () => o.callHook("page:start", d.Component),
                        onResolve: () => {
                            Ln(() => o.callHook("page:finish", d.Component).then(() => {
                                if (!f && !E) return f = !0, o.callHook("page:loading:end")
                            }).finally(c))
                        }
                    }, {
                        default: () => {
                            const b = {
                                key: p || void 0,
                                vnode: n.default ? Xv(n.default, d) : d.Component,
                                route: d.route,
                                renderKey: p || void 0,
                                trackRootNodes: T,
                                vnodeRef: s
                            };
                            if (!g) return Ie(zv, b);
                            const S = d.Component.type,
                                P = S;
                            let O = ol.get(P);
                            return O || (O = Bu(S.name || S.__name), ol.set(P, O)), Ie(O, b)
                        }
                    }))).default(), u
                }
            })
        }
    });

function Qv(e) {
    const t = e.filter(Boolean).map(n => ({
        ...n,
        onAfterLeave: n.onAfterLeave ? wi(n.onAfterLeave) : void 0
    }));
    return di(...t)
}

function Yv(e, t, n) {
    if (!e) return !1;
    const r = t.matched.findIndex(o => {
        var s;
        return ((s = o.components) == null ? void 0 : s.default) === (n == null ? void 0 : n.type)
    });
    return !r || r === -1 ? !1 : t.matched.slice(0, r).some((o, s) => {
        var i, a, l;
        return ((i = o.components) == null ? void 0 : i.default) !== ((l = (a = e.matched[s]) == null ? void 0 : a.components) == null ? void 0 : l.default)
    }) || n && js({
        route: t,
        Component: n
    }) !== js({
        route: e,
        Component: n
    })
}

function Jv(e, t, n) {
    return e ? t.matched.findIndex(o => {
        var s;
        return ((s = o.components) == null ? void 0 : s.default) === (n == null ? void 0 : n.type)
    }) < t.matched.length - 1 : !1
}

function Xv(e, t) {
    const n = e(t);
    return n.length === 1 ? Ie(n[0]) : Ie(Ke, void 0, n)
}
const Zv = pt({
        name: "LayoutLoader",
        inheritAttrs: !1,
        props: {
            name: String,
            layoutProps: Object
        },
        setup(e, t) {
            return () => Ie(qt[e.name], e.layoutProps, t.slots)
        }
    }),
    eb = {
        name: {
            type: [String, Boolean, Object],
            default: null
        },
        fallback: {
            type: [String, Object],
            default: null
        }
    },
    Vu = pt({
        name: "NuxtLayout",
        inheritAttrs: !1,
        props: eb,
        setup(e, t) {
            const n = Pe(),
                r = We(vr),
                o = r === br() ? km() : r,
                s = Me(() => {
                    let l = xe(e.name) ?? o.meta.layout ?? "default";
                    return l && !(l in qt) && e.fallback && (l = xe(e.fallback)), l
                }),
                i = Ze();
            t.expose({
                layoutRef: i
            });
            const a = n.deferHydration();
            if (n.isHydrating) {
                const l = n.hooks.hookOnce("app:error", a);
                tt().beforeEach(l)
            }
            return () => {
                const l = s.value && s.value in qt,
                    u = o.meta.layoutTransition ?? Ph;
                return Eu(l && u, {
                    default: () => Ie(ii, {
                        suspensible: !0,
                        onResolve: () => {
                            Ln(a)
                        }
                    }, {
                        default: () => Ie(tb, {
                            layoutProps: Sc(t.attrs, {
                                ref: i
                            }),
                            key: s.value || void 0,
                            name: s.value,
                            shouldProvide: !e.name,
                            hasTransition: !!u
                        }, t.slots)
                    })
                }).default()
            }
        }
    }),
    tb = pt({
        name: "NuxtLayoutProvider",
        inheritAttrs: !1,
        props: {
            name: {
                type: [String, Boolean]
            },
            layoutProps: {
                type: Object
            },
            hasTransition: {
                type: Boolean
            },
            shouldProvide: {
                type: Boolean
            }
        },
        setup(e, t) {
            const n = e.name;
            return e.shouldProvide && an(Jc, {
                isCurrent: r => n === (r.meta.layout ?? "default")
            }), () => {
                var r, o;
                return !n || typeof n == "string" && !(n in qt) ? (o = (r = t.slots).default) == null ? void 0 : o.call(r) : Ie(Zv, {
                    key: n,
                    layoutProps: e.layoutProps,
                    name: n
                }, t.slots)
            }
        }
    }),
    Ku = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [r, o] of t) n[r] = o;
        return n
    },
    nb = {},
    rb = {
        class: "app-wrapper"
    };

function ob(e, t) {
    const n = qv,
        r = Gv,
        o = Vu;
    return st(), wc("div", rb, [Ce(n, {
        color: "#8e70e9"
    }), Ce(o, null, {
        default: go(() => [Ce(r)]),
        _: 1
    })])
}
const sb = Ku(nb, [
        ["render", ob]
    ]),
    ib = {
        class: "error-wrapper"
    },
    ab = pt({
        __name: "error",
        props: {
            error: {}
        },
        setup(e) {
            const t = () => Zc({
                redirect: "/"
            });
            return (n, r) => {
                const o = Vu;
                return st(), Tt(o, null, {
                    default: go(() => [Ut("div", ib, [Ut("h1", null, ns(n.error.statusCode), 1), Ut("p", null, [r[0] || (r[0] = Ut("span", null, "Sorry twizz: ", -1)), ai(ns(n.error.message), 1)]), r[1] || (r[1] = Ut("img", {
                        src: "https://i.imgur.com/lhw2gJb.gif",
                        height: "130px",
                        width: "250px",
                        draggable: "false"
                    }, null, -1)), Ut("button", {
                        onClick: t
                    }, "Go Home")])]),
                    _: 1
                })
            }
        }
    }),
    lb = Ku(ab, [
        ["__scopeId", "data-v-5fa1cd12"]
    ]),
    cb = {
        key: 0
    },
    sl = {
        __name: "nuxt-root",
        setup(e) {
            const t = () => null,
                n = Pe(),
                r = n.deferHydration();
            if (n.isHydrating) {
                const l = n.hooks.hookOnce("app:error", r);
                tt().beforeEach(l)
            }
            const o = !1;
            an(vr, br()), n.hooks.callHookWith(l => l.map(u => u()), "vue:setup");
            const s = Hn(),
                i = !1;
            Gl((l, u, c) => {
                if (n.hooks.callHook("vue:error", l, u, c).catch(f => console.error("[nuxt] Error in `vue:error` hook", f)), eu(l) && (l.fatal || l.unhandled)) return n.runWithContext(() => Vt(l)), !1
            });
            const a = !1;
            return (l, u) => (st(), Tt(ii, {
                onResolve: xe(r)
            }, {
                default: go(() => [xe(i) ? (st(), wc("div", cb)) : xe(s) ? (st(), Tt(xe(lb), {
                    key: 1,
                    error: xe(s)
                }, null, 8, ["error"])) : xe(a) ? (st(), Tt(xe(t), {
                    key: 2,
                    context: xe(a)
                }, null, 8, ["context"])) : xe(o) ? (st(), Tt(rd(xe(o)), {
                    key: 3
                })) : (st(), Tt(xe(sb), {
                    key: 4
                }))]),
                _: 1
            }, 8, ["onResolve"]))
        }
    };
let il;
{
    let e;
    il = async function () {
        var i, a;
        if (e) return e;
        const r = !!(((i = window.__NUXT__) == null ? void 0 : i.serverRendered) ?? ((a = document.getElementById("__NUXT_DATA__")) == null ? void 0 : a.dataset.ssr) === "true") ? Tp(sl) : Sp(sl),
            o = Lh({
                vueApp: r
            });
        async function s(l) {
            var u;
            await o.callHook("app:error", l), (u = o.payload).error || (u.error = pi(l))
        }
        r.config.errorHandler = s, o.hook("app:suspense:resolve", () => {
            r.config.errorHandler === s && (r.config.errorHandler = void 0)
        });
        try {
            await $h(o, Bv)
        } catch (l) {
            s(l)
        }
        try {
            await o.hooks.callHook("app:created", r), await o.hooks.callHook("app:beforeMount", r), r.mount(Oh), await o.hooks.callHook("app:mounted", r), await Ln()
        } catch (l) {
            s(l)
        }
        return r
    }, e = il().catch(t => {
        throw console.error("Error while mounting app:", t), t
    })
}
export {
    Ln as $, Ie as A, Kr as B, mb as C, km as D, yo as E, Ke as F, an as G, Rv as H, wb as I, yr as J, _b as K, Eb as L, Oe as M, Cb as N, Pe as O, Tb as P, Il as Q, Jt as R, Xf as S, Xd as T, ni as U, af as V, zs as W, pi as X, Yt as Y, xb as Z, Ku as _, Ce as a, kl as a0, fb as a1, tt as a2, Ti as a3, Va as a4, Rb as a5, pb as a6, Lc as a7, Wh as a8, It as a9, ui as aa, Mt as ab, lr as ac, jn as ad, Sb as ae, ry as af, Pb as ag, kb as ah, wy as ai, Ab as aj, go as b, wc as c, pt as d, Ut as e, Tt as f, ai as g, Ze as h, gb as i, br as j, Me as k, Si as l, qs as m, Ws as n, st as o, vb as p, db as q, hb as r, Vt as s, ns as t, xe as u, bb as v, yb as w, Gv as x, ln as y, Vr as z
};
