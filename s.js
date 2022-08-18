(function(w, d) {
    zaraz.i = function(e) {
        const n = d.createElement("div");
        n.innerHTML = unescape(e);
        const r = n.getElementsByTagName("script");
        for (var a = 0; a < r.length; a++) {
            var c = d.createElement("script");
            r[a].innerHTML && (c.innerHTML = r[a].innerHTML),
            r[a].src && (c.src = r[a].src),
            c.async = r[a].async,
            r[a].defer && (c.defer = r[a].defer),
            d.head.appendChild(c)
        }
    }
    ;
    zaraz.f = async function(e, a) {
        const n = {
            credentials: "include",
            keepalive: !0,
            mode: "no-cors"
        };
        return a && (n.method = "POST",
        n.body = new URLSearchParams(a),
        n.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }),
        await fetch(e, n)
    }
    ;
    !function(e, r, t, n, a, d) {
        function f(e, r) {
            d ? n(e, r || 32) : a.push(e, r)
        }
        function i(e, t, n, a) {
            return t && r.getElementById(t) || (a = r.createElement(e || "SCRIPT"),
            t && (a.id = t),
            n && (a.onload = n),
            r.head.appendChild(a)),
            a || {}
        }
        d = /p/.test(r.readyState),
        e.addEventListener("on" + t in e ? t : "load", (function() {
            for (d = 1; a[0]; )
                f(a.shift(), a.shift())
        }
        )),
        f._ = i,
        e.defer = f,
        e.deferscript = function(e, r, t, n) {
            f((function() {
                i("", r, n).src = e
            }
            ), t)
        }
    }(this, d, "pageshow", setTimeout, []),
    defer((function() {
        for (; zaraz.deferred.length; )
            zaraz.deferred.pop()();
        Object.defineProperty(zaraz.deferred, "push", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function(...e) {
                let r = Array.prototype.push.apply(this, e);
                for (; zaraz.deferred.length; )
                    zaraz.deferred.pop()();
                return r
            }
        })
    }
    ), 5500),
    addEventListener("visibilitychange", (function() {
        for (; zaraz.deferred.length; )
            zaraz.deferred.pop()()
    }
    ));
    zaraz.pageVariables = {},
    zaraz.track = function(a, e, t) {
        const r = {
            name: a,
            data: {}
        };
        Object.keys(localStorage).filter((a=>a.startsWith("_zaraz_"))).forEach((a=>r.data[a.slice(7)] = localStorage.getItem(a))),
        Object.keys(sessionStorage).filter((a=>a.startsWith("_zaraz_"))).forEach((a=>r.data[a.slice(7)] = sessionStorage.getItem(a))),
        Object.keys(zaraz.pageVariables).forEach((a=>r.data[a] = zaraz.pageVariables[a])),
        zarazData.c = d.cookie,
        r.data = {
            ...r.data,
            ...e
        },
        r.zarazData = zarazData,
        fetch("https://preview.colorlib.com/cdn-cgi/zaraz/t", {
            credentials: "include",
            keepalive: !0,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(r)
        }).catch((()=>(console.warn("Large event payload sent to Cloudflare Zaraz, cannot assure deliverability."),
        fetch("https://preview.colorlib.com/cdn-cgi/zaraz/t", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(r)
        })))).then((function(a) {
            return zarazData._let = (new Date).getTime(),
            a.text()
        }
        )).then((function(a) {
            new Function(a)(),
            "function" == typeof t && t()
        }
        ))
    }
    ,
    zaraz.set = function(a, e, t) {
        prefixedKey = "_zaraz_" + a,
        t && "session" == t.scope ? w.sessionStorage.setItem(prefixedKey, e) : t && "page" == t.scope ? zaraz.pageVariables[a] = e : w.localStorage.setItem(prefixedKey, e),
        zaraz.__watchVar = {
            key: a,
            value: e
        }
    }
    ;
    for (const a of zarazData.tracks)
        zaraz.track(a);
    for (; zaraz._preSet.length; ) {
        const [a,e,t] = zaraz._preSet.pop();
        zaraz.set(a, e, t),
        delete zarazData["z_" + a]
    }
    delete zarazData.tracks,
    delete zarazData._preSet;
    zaraz.fulfilTrigger = function(a, r, z, g) {
        zaraz.__zarazTriggerMap || (zaraz.__zarazTriggerMap = {}),
        zaraz.__zarazTriggerMap[a] || (zaraz.__zarazTriggerMap[a] = ""),
        zaraz.__zarazTriggerMap[a] += "*" + r + "*",
        zaraz.track("__zarazEmpty", {
            ...z,
            __zarazClientTriggers: zaraz.__zarazTriggerMap[a]
        }, g)
    }
    ;
    zaraz._processDataLayer = e=>{
        if (e.event) {
            let a = {};
            for (obj of dataLayer.slice(0, dataLayer.indexOf(e) + 1))
                a = {
                    ...a,
                    ...obj
                };
            delete a.event,
            e.event.startsWith("gtm.") || e.event.startsWith("Optanon") || e.event.startsWith("OneTrust") || zaraz.track(e.event, a)
        }
    }
    ,
    Object.defineProperty(w.dataLayer, "push", {
        configurable: !0,
        enumerable: !1,
        writable: !0,
        value: function(...e) {
            let a = Array.prototype.push.apply(this, e);
            return zaraz._processDataLayer(e[0]),
            a
        }
    }),
    dataLayer.forEach((e=>zaraz._processDataLayer(e)));
    history.pushState = function() {
        History.prototype.pushState.apply(history, arguments),
        zarazData.l = d.location.href,
        zaraz.track("__zarazSPA")
    }
    ,
    history.replaceState = function() {
        History.prototype.replaceState.apply(history, arguments),
        zarazData.l = d.location.href,
        zaraz.track("__zarazSPA")
    }
    ;
    w.zarazData.executed.push('Pageview');
}
)(window, document);




























