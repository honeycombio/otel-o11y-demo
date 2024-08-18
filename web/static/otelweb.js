var t, e, n, r, i, o, a, s, u, c, l, p, f, d, h, _, v, m, g, y, b, E, T, w = globalThis;

function O(t, e, n, r) {
    Object.defineProperty(t, e, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}
var S = {},
    R = {},
    L = w.parcelRequire38d5;
null == L && ((L = function(t) {
    if (t in S) return S[t].exports;
    if (t in R) {
        var e = R[t];
        delete R[t];
        var n = {
            id: t,
            exports: {}
        };
        return S[t] = n, e.call(n.exports, n, n.exports), n.exports
    }
    var r = Error("Cannot find module '" + t + "'");
    throw r.code = "MODULE_NOT_FOUND", r
}).register = function(t, e) {
    R[t] = e
}, w.parcelRequire38d5 = L), (0, L.register)("86Wyx", function(t, e) {
    ! function(n, r) {
        var i = "function",
            o = "undefined",
            a = "object",
            s = "string",
            u = "major",
            c = "model",
            l = "name",
            p = "type",
            f = "vendor",
            d = "version",
            h = "architecture",
            _ = "console",
            v = "mobile",
            m = "tablet",
            g = "smarttv",
            y = "wearable",
            b = "embedded",
            E = "Amazon",
            T = "Apple",
            w = "ASUS",
            O = "BlackBerry",
            S = "Browser",
            R = "Chrome",
            L = "Firefox",
            A = "Google",
            P = "Huawei",
            C = "Microsoft",
            N = "Motorola",
            x = "Opera",
            I = "Samsung",
            D = "Sharp",
            M = "Sony",
            k = "Xiaomi",
            U = "Zebra",
            j = "Facebook",
            B = "Chromium OS",
            F = "Mac OS",
            H = function(t, e) {
                var n = {};
                for (var r in t) e[r] && e[r].length % 2 == 0 ? n[r] = e[r].concat(t[r]) : n[r] = t[r];
                return n
            },
            V = function(t) {
                for (var e = {}, n = 0; n < t.length; n++) e[t[n].toUpperCase()] = t[n];
                return e
            },
            G = function(t, e) {
                return typeof t === s && -1 !== X(e).indexOf(X(t))
            },
            X = function(t) {
                return t.toLowerCase()
            },
            z = function(t, e) {
                if (typeof t === s) return t = t.replace(/^\s\s*/, ""), typeof e === o ? t : t.substring(0, 500)
            },
            q = function(t, e) {
                for (var n, o, s, u, c, l, p = 0; p < e.length && !c;) {
                    var f = e[p],
                        d = e[p + 1];
                    for (n = o = 0; n < f.length && !c && f[n];)
                        if (c = f[n++].exec(t))
                            for (s = 0; s < d.length; s++) l = c[++o], typeof(u = d[s]) === a && u.length > 0 ? 2 === u.length ? typeof u[1] == i ? this[u[0]] = u[1].call(this, l) : this[u[0]] = u[1] : 3 === u.length ? typeof u[1] !== i || u[1].exec && u[1].test ? this[u[0]] = l ? l.replace(u[1], u[2]) : void 0 : this[u[0]] = l ? u[1].call(this, l, u[2]) : void 0 : 4 === u.length && (this[u[0]] = l ? u[3].call(this, l.replace(u[1], u[2])) : void 0) : this[u] = l || r;
                    p += 2
                }
            },
            $ = function(t, e) {
                for (var n in e)
                    if (typeof e[n] === a && e[n].length > 0) {
                        for (var i = 0; i < e[n].length; i++)
                            if (G(e[n][i], t)) return "?" === n ? r : n
                    } else if (G(e[n], t)) return "?" === n ? r : n;
                return t
            },
            K = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                "8.1": "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            },
            W = {
                browser: [
                    [/\b(?:crmo|crios)\/([\w\.]+)/i],
                    [d, [l, "Chrome"]],
                    [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                    [d, [l, "Edge"]],
                    [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                    [l, d],
                    [/opios[\/ ]+([\w\.]+)/i],
                    [d, [l, x + " Mini"]],
                    [/\bop(?:rg)?x\/([\w\.]+)/i],
                    [d, [l, x + " GX"]],
                    [/\bopr\/([\w\.]+)/i],
                    [d, [l, x]],
                    [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                    [d, [l, "Baidu"]],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                    [l, d],
                    [/\bddg\/([\w\.]+)/i],
                    [d, [l, "DuckDuckGo"]],
                    [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                    [d, [l, "UC" + S]],
                    [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                    [d, [l, "WeChat"]],
                    [/konqueror\/([\w\.]+)/i],
                    [d, [l, "Konqueror"]],
                    [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                    [d, [l, "IE"]],
                    [/ya(?:search)?browser\/([\w\.]+)/i],
                    [d, [l, "Yandex"]],
                    [/slbrowser\/([\w\.]+)/i],
                    [d, [l, "Smart Lenovo " + S]],
                    [/(avast|avg)\/([\w\.]+)/i],
                    [
                        [l, /(.+)/, "$1 Secure " + S], d
                    ],
                    [/\bfocus\/([\w\.]+)/i],
                    [d, [l, L + " Focus"]],
                    [/\bopt\/([\w\.]+)/i],
                    [d, [l, x + " Touch"]],
                    [/coc_coc\w+\/([\w\.]+)/i],
                    [d, [l, "Coc Coc"]],
                    [/dolfin\/([\w\.]+)/i],
                    [d, [l, "Dolphin"]],
                    [/coast\/([\w\.]+)/i],
                    [d, [l, x + " Coast"]],
                    [/miuibrowser\/([\w\.]+)/i],
                    [d, [l, "MIUI " + S]],
                    [/fxios\/([-\w\.]+)/i],
                    [d, [l, L]],
                    [/\bqihu|(qi?ho?o?|360)browser/i],
                    [
                        [l, "360 " + S]
                    ],
                    [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                    [
                        [l, /(.+)/, "$1 " + S], d
                    ],
                    [/samsungbrowser\/([\w\.]+)/i],
                    [d, [l, I + " Internet"]],
                    [/(comodo_dragon)\/([\w\.]+)/i],
                    [
                        [l, /_/g, " "], d
                    ],
                    [/metasr[\/ ]?([\d\.]+)/i],
                    [d, [l, "Sogou Explorer"]],
                    [/(sogou)mo\w+\/([\d\.]+)/i],
                    [
                        [l, "Sogou Mobile"], d
                    ],
                    [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                    [l, d],
                    [/(lbbrowser)/i, /\[(linkedin)app\]/i],
                    [l],
                    [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                    [
                        [l, j], d
                    ],
                    [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                    [l, d],
                    [/\bgsa\/([\w\.]+) .*safari\//i],
                    [d, [l, "GSA"]],
                    [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                    [d, [l, "TikTok"]],
                    [/headlesschrome(?:\/([\w\.]+)| )/i],
                    [d, [l, R + " Headless"]],
                    [/ wv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [l, R + " WebView"], d
                    ],
                    [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                    [d, [l, "Android " + S]],
                    [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                    [l, d],
                    [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                    [d, [l, "Mobile Safari"]],
                    [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                    [d, l],
                    [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                    [l, [d, $, {
                        "1.0": "/8",
                        "1.2": "/1",
                        "1.3": "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }]],
                    [/(webkit|khtml)\/([\w\.]+)/i],
                    [l, d],
                    [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                    [
                        [l, "Netscape"], d
                    ],
                    [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                    [d, [l, L + " Reality"]],
                    [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                    [l, d],
                    [/(cobalt)\/([\w\.]+)/i],
                    [l, [d, /master.|lts./, ""]]
                ],
                cpu: [
                    [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                    [
                        [h, "amd64"]
                    ],
                    [/(ia32(?=;))/i],
                    [
                        [h, X]
                    ],
                    [/((?:i[346]|x)86)[;\)]/i],
                    [
                        [h, "ia32"]
                    ],
                    [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                    [
                        [h, "arm64"]
                    ],
                    [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                    [
                        [h, "armhf"]
                    ],
                    [/windows (ce|mobile); ppc;/i],
                    [
                        [h, "arm"]
                    ],
                    [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                    [
                        [h, /ower/, "", X]
                    ],
                    [/(sun4\w)[;\)]/i],
                    [
                        [h, "sparc"]
                    ],
                    [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                    [
                        [h, X]
                    ]
                ],
                device: [
                    [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                    [c, [f, I],
                        [p, m]
                    ],
                    [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                    [c, [f, I],
                        [p, v]
                    ],
                    [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                    [c, [f, T],
                        [p, v]
                    ],
                    [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                    [c, [f, T],
                        [p, m]
                    ],
                    [/(macintosh);/i],
                    [c, [f, T]],
                    [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                    [c, [f, D],
                        [p, v]
                    ],
                    [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                    [c, [f, P],
                        [p, m]
                    ],
                    [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                    [c, [f, P],
                        [p, v]
                    ],
                    [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                    [
                        [c, /_/g, " "],
                        [f, k],
                        [p, v]
                    ],
                    [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                    [
                        [c, /_/g, " "],
                        [f, k],
                        [p, m]
                    ],
                    [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                    [c, [f, "OPPO"],
                        [p, v]
                    ],
                    [/\b(opd2\d{3}a?) bui/i],
                    [c, [f, "OPPO"],
                        [p, m]
                    ],
                    [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                    [c, [f, "Vivo"],
                        [p, v]
                    ],
                    [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                    [c, [f, "Realme"],
                        [p, v]
                    ],
                    [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                    [c, [f, N],
                        [p, v]
                    ],
                    [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                    [c, [f, N],
                        [p, m]
                    ],
                    [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                    [c, [f, "LG"],
                        [p, m]
                    ],
                    [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                    [c, [f, "LG"],
                        [p, v]
                    ],
                    [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                    [c, [f, "Lenovo"],
                        [p, m]
                    ],
                    [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                    [
                        [c, /_/g, " "],
                        [f, "Nokia"],
                        [p, v]
                    ],
                    [/(pixel c)\b/i],
                    [c, [f, A],
                        [p, m]
                    ],
                    [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                    [c, [f, A],
                        [p, v]
                    ],
                    [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                    [c, [f, M],
                        [p, v]
                    ],
                    [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                    [
                        [c, "Xperia Tablet"],
                        [f, M],
                        [p, m]
                    ],
                    [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                    [c, [f, "OnePlus"],
                        [p, v]
                    ],
                    [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                    [c, [f, E],
                        [p, m]
                    ],
                    [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                    [
                        [c, /(.+)/g, "Fire Phone $1"],
                        [f, E],
                        [p, v]
                    ],
                    [/(playbook);[-\w\),; ]+(rim)/i],
                    [c, f, [p, m]],
                    [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                    [c, [f, O],
                        [p, v]
                    ],
                    [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                    [c, [f, w],
                        [p, m]
                    ],
                    [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                    [c, [f, w],
                        [p, v]
                    ],
                    [/(nexus 9)/i],
                    [c, [f, "HTC"],
                        [p, m]
                    ],
                    [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                    [f, [c, /_/g, " "],
                        [p, v]
                    ],
                    [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                    [c, [f, "Acer"],
                        [p, m]
                    ],
                    [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                    [c, [f, "Meizu"],
                        [p, v]
                    ],
                    [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                    [c, [f, "Ulefone"],
                        [p, v]
                    ],
                    [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                    [f, c, [p, v]],
                    [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                    [f, c, [p, m]],
                    [/(surface duo)/i],
                    [c, [f, C],
                        [p, m]
                    ],
                    [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                    [c, [f, "Fairphone"],
                        [p, v]
                    ],
                    [/(u304aa)/i],
                    [c, [f, "AT&T"],
                        [p, v]
                    ],
                    [/\bsie-(\w*)/i],
                    [c, [f, "Siemens"],
                        [p, v]
                    ],
                    [/\b(rct\w+) b/i],
                    [c, [f, "RCA"],
                        [p, m]
                    ],
                    [/\b(venue[\d ]{2,7}) b/i],
                    [c, [f, "Dell"],
                        [p, m]
                    ],
                    [/\b(q(?:mv|ta)\w+) b/i],
                    [c, [f, "Verizon"],
                        [p, m]
                    ],
                    [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                    [c, [f, "Barnes & Noble"],
                        [p, m]
                    ],
                    [/\b(tm\d{3}\w+) b/i],
                    [c, [f, "NuVision"],
                        [p, m]
                    ],
                    [/\b(k88) b/i],
                    [c, [f, "ZTE"],
                        [p, m]
                    ],
                    [/\b(nx\d{3}j) b/i],
                    [c, [f, "ZTE"],
                        [p, v]
                    ],
                    [/\b(gen\d{3}) b.+49h/i],
                    [c, [f, "Swiss"],
                        [p, v]
                    ],
                    [/\b(zur\d{3}) b/i],
                    [c, [f, "Swiss"],
                        [p, m]
                    ],
                    [/\b((zeki)?tb.*\b) b/i],
                    [c, [f, "Zeki"],
                        [p, m]
                    ],
                    [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                    [
                        [f, "Dragon Touch"], c, [p, m]
                    ],
                    [/\b(ns-?\w{0,9}) b/i],
                    [c, [f, "Insignia"],
                        [p, m]
                    ],
                    [/\b((nxa|next)-?\w{0,9}) b/i],
                    [c, [f, "NextBook"],
                        [p, m]
                    ],
                    [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                    [
                        [f, "Voice"], c, [p, v]
                    ],
                    [/\b(lvtel\-)?(v1[12]) b/i],
                    [
                        [f, "LvTel"], c, [p, v]
                    ],
                    [/\b(ph-1) /i],
                    [c, [f, "Essential"],
                        [p, v]
                    ],
                    [/\b(v(100md|700na|7011|917g).*\b) b/i],
                    [c, [f, "Envizen"],
                        [p, m]
                    ],
                    [/\b(trio[-\w\. ]+) b/i],
                    [c, [f, "MachSpeed"],
                        [p, m]
                    ],
                    [/\btu_(1491) b/i],
                    [c, [f, "Rotor"],
                        [p, m]
                    ],
                    [/(shield[\w ]+) b/i],
                    [c, [f, "Nvidia"],
                        [p, m]
                    ],
                    [/(sprint) (\w+)/i],
                    [f, c, [p, v]],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [c, /\./g, " "],
                        [f, C],
                        [p, v]
                    ],
                    [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                    [c, [f, U],
                        [p, m]
                    ],
                    [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                    [c, [f, U],
                        [p, v]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [f, [p, g]],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [c, /^/, "SmartTV"],
                        [f, I],
                        [p, g]
                    ],
                    [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                    [
                        [f, "LG"],
                        [p, g]
                    ],
                    [/(apple) ?tv/i],
                    [f, [c, T + " TV"],
                        [p, g]
                    ],
                    [/crkey/i],
                    [
                        [c, R + "cast"],
                        [f, A],
                        [p, g]
                    ],
                    [/droid.+aft(\w+)( bui|\))/i],
                    [c, [f, E],
                        [p, g]
                    ],
                    [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                    [c, [f, D],
                        [p, g]
                    ],
                    [/(bravia[\w ]+)( bui|\))/i],
                    [c, [f, M],
                        [p, g]
                    ],
                    [/(mitv-\w{5}) bui/i],
                    [c, [f, k],
                        [p, g]
                    ],
                    [/Hbbtv.*(technisat) (.*);/i],
                    [f, c, [p, g]],
                    [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                    [
                        [f, z],
                        [c, z],
                        [p, g]
                    ],
                    [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                    [
                        [p, g]
                    ],
                    [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                    [f, c, [p, _]],
                    [/droid.+; (shield) bui/i],
                    [c, [f, "Nvidia"],
                        [p, _]
                    ],
                    [/(playstation [345portablevi]+)/i],
                    [c, [f, M],
                        [p, _]
                    ],
                    [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                    [c, [f, C],
                        [p, _]
                    ],
                    [/((pebble))app/i],
                    [f, c, [p, y]],
                    [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                    [c, [f, T],
                        [p, y]
                    ],
                    [/droid.+; (glass) \d/i],
                    [c, [f, A],
                        [p, y]
                    ],
                    [/droid.+; (wt63?0{2,3})\)/i],
                    [c, [f, U],
                        [p, y]
                    ],
                    [/(quest( \d| pro)?)/i],
                    [c, [f, j],
                        [p, y]
                    ],
                    [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                    [f, [p, b]],
                    [/(aeobc)\b/i],
                    [c, [f, E],
                        [p, b]
                    ],
                    [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                    [c, [p, v]],
                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                    [c, [p, m]],
                    [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                    [
                        [p, m]
                    ],
                    [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                    [
                        [p, v]
                    ],
                    [/(android[-\w\. ]{0,9});.+buil/i],
                    [c, [f, "Generic"]]
                ],
                engine: [
                    [/windows.+ edge\/([\w\.]+)/i],
                    [d, [l, "EdgeHTML"]],
                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                    [d, [l, "Blink"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                    [l, d],
                    [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                    [d, l]
                ],
                os: [
                    [/microsoft (windows) (vista|xp)/i],
                    [l, d],
                    [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                    [l, [d, $, K]],
                    [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                    [
                        [d, $, K],
                        [l, "Windows"]
                    ],
                    [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                    [
                        [d, /_/g, "."],
                        [l, "iOS"]
                    ],
                    [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                    [
                        [l, F],
                        [d, /_/g, "."]
                    ],
                    [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                    [d, l],
                    [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                    [l, d],
                    [/\(bb(10);/i],
                    [d, [l, O]],
                    [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                    [d, [l, "Symbian"]],
                    [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                    [d, [l, L + " OS"]],
                    [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                    [d, [l, "webOS"]],
                    [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                    [d, [l, "watchOS"]],
                    [/crkey\/([\d\.]+)/i],
                    [d, [l, R + "cast"]],
                    [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                    [
                        [l, B], d
                    ],
                    [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                    [l, d],
                    [/(sunos) ?([\w\.\d]*)/i],
                    [
                        [l, "Solaris"], d
                    ],
                    [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                    [l, d]
                ]
            },
            Z = function(t, e) {
                if (typeof t === a && (e = t, t = r), !(this instanceof Z)) return new Z(t, e).getResult();
                var _ = typeof n !== o && n.navigator ? n.navigator : r,
                    g = t || (_ && _.userAgent ? _.userAgent : ""),
                    y = _ && _.userAgentData ? _.userAgentData : r,
                    b = e ? H(W, e) : W,
                    E = _ && _.userAgent == g;
                return this.getBrowser = function() {
                    var t, e = {};
                    return e[l] = r, e[d] = r, q.call(e, g, b.browser), e[u] = typeof(t = e[d]) === s ? t.replace(/[^\d\.]/g, "").split(".")[0] : r, E && _ && _.brave && typeof _.brave.isBrave == i && (e[l] = "Brave"), e
                }, this.getCPU = function() {
                    var t = {};
                    return t[h] = r, q.call(t, g, b.cpu), t
                }, this.getDevice = function() {
                    var t = {};
                    return t[f] = r, t[c] = r, t[p] = r, q.call(t, g, b.device), E && !t[p] && y && y.mobile && (t[p] = v), E && "Macintosh" == t[c] && _ && typeof _.standalone !== o && _.maxTouchPoints && _.maxTouchPoints > 2 && (t[c] = "iPad", t[p] = m), t
                }, this.getEngine = function() {
                    var t = {};
                    return t[l] = r, t[d] = r, q.call(t, g, b.engine), t
                }, this.getOS = function() {
                    var t = {};
                    return t[l] = r, t[d] = r, q.call(t, g, b.os), E && !t[l] && y && y.platform && "Unknown" != y.platform && (t[l] = y.platform.replace(/chrome os/i, B).replace(/macos/i, F)), t
                }, this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }, this.getUA = function() {
                    return g
                }, this.setUA = function(t) {
                    return g = typeof t === s && t.length > 500 ? z(t, 500) : t, this
                }, this.setUA(g), this
            };
        Z.VERSION = "1.0.38", Z.BROWSER = V([l, d, u]), Z.CPU = V([h]), Z.DEVICE = V([c, f, p, _, v, g, m, y, b]), Z.ENGINE = Z.OS = V([l, d]), typeof e !== o ? (t.exports && (e = t.exports = Z), e.UAParser = Z) : typeof define === i && define.amd ? define(function() {
            return Z
        }) : typeof n !== o && (n.UAParser = Z);
        var Y = typeof n !== o && (n.jQuery || n.Zepto);
        if (Y && !Y.ua) {
            var Q = new Z;
            Y.ua = Q.getResult(), Y.ua.get = function() {
                return Q.getUA()
            }, Y.ua.set = function(t) {
                Q.setUA(t);
                var e = Q.getResult();
                for (var n in e) Y.ua[n] = e[n]
            }
        }
    }("object" == typeof window ? window : this)
});
var A = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof w ? w : {},
    P = "1.9.0",
    C = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/,
    N = function(t) {
        var e = new Set([t]),
            n = new Set,
            r = t.match(C);
        if (!r) return function() {
            return !1
        };
        var i = {
            major: +r[1],
            minor: +r[2],
            patch: +r[3],
            prerelease: r[4]
        };
        if (null != i.prerelease) return function(e) {
            return e === t
        };

        function o(t) {
            return n.add(t), !1
        }
        return function(t) {
            if (e.has(t)) return !0;
            if (n.has(t)) return !1;
            var r = t.match(C);
            if (!r) return o(t);
            var a = {
                major: +r[1],
                minor: +r[2],
                patch: +r[3],
                prerelease: r[4]
            };
            return null != a.prerelease || i.major !== a.major ? o(t) : 0 === i.major ? i.minor === a.minor && i.patch <= a.patch ? (e.add(t), !0) : o(t) : i.minor <= a.minor ? (e.add(t), !0) : o(t)
        }
    }(P),
    x = Symbol.for("opentelemetry.js.api." + P.split(".")[0]);

function I(t, e, n, r) {
    void 0 === r && (r = !1);
    var i, o = A[x] = null !== (i = A[x]) && void 0 !== i ? i : {
        version: P
    };
    if (!r && o[t]) {
        var a = Error("@opentelemetry/api: Attempted duplicate registration of API: " + t);
        return n.error(a.stack || a.message), !1
    }
    if (o.version !== P) {
        var a = Error("@opentelemetry/api: Registration of version v" + o.version + " for " + t + " does not match previously registered API v" + P);
        return n.error(a.stack || a.message), !1
    }
    return o[t] = e, n.debug("@opentelemetry/api: Registered a global for " + t + " v" + P + "."), !0
}

function D(t) {
    var e, n, r = null === (e = A[x]) || void 0 === e ? void 0 : e.version;
    if (r && N(r)) return null === (n = A[x]) || void 0 === n ? void 0 : n[t]
}

function M(t, e) {
    e.debug("@opentelemetry/api: Unregistering a global for " + t + " v" + P + ".");
    var n = A[x];
    n && delete n[t]
}
var k = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, i, o = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    },
    U = function(t, e, n) {
        if (n || 2 == arguments.length)
            for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
        return t.concat(r || Array.prototype.slice.call(e))
    },
    j = function() {
        function t(t) {
            this._namespace = t.namespace || "DiagComponentLogger"
        }
        return t.prototype.debug = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return B("debug", this._namespace, t)
        }, t.prototype.error = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return B("error", this._namespace, t)
        }, t.prototype.info = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return B("info", this._namespace, t)
        }, t.prototype.warn = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return B("warn", this._namespace, t)
        }, t.prototype.verbose = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return B("verbose", this._namespace, t)
        }, t
    }();

function B(t, e, n) {
    var r = D("diag");
    if (r) return n.unshift(e), r[t].apply(r, U([], k(n), !1))
}(iu = iL || (iL = {}))[iu.NONE = 0] = "NONE", iu[iu.ERROR = 30] = "ERROR", iu[iu.WARN = 50] = "WARN", iu[iu.INFO = 60] = "INFO", iu[iu.DEBUG = 70] = "DEBUG", iu[iu.VERBOSE = 80] = "VERBOSE", iu[iu.ALL = 9999] = "ALL";
var F = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, i, o = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    },
    H = function(t, e, n) {
        if (n || 2 == arguments.length)
            for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
        return t.concat(r || Array.prototype.slice.call(e))
    },
    V = function() {
        function t() {
            function t(t) {
                return function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var r = D("diag");
                    if (r) return r[t].apply(r, H([], F(e), !1))
                }
            }
            var e = this;
            e.setLogger = function(t, n) {
                if (void 0 === n && (n = {
                        logLevel: iL.INFO
                    }), t === e) {
                    var r, i, o, a = Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                    return e.error(null !== (r = a.stack) && void 0 !== r ? r : a.message), !1
                }
                "number" == typeof n && (n = {
                    logLevel: n
                });
                var s = D("diag"),
                    u = function(t, e) {
                        function n(n, r) {
                            var i = e[n];
                            return "function" == typeof i && t >= r ? i.bind(e) : function() {}
                        }
                        return t < iL.NONE ? t = iL.NONE : t > iL.ALL && (t = iL.ALL), e = e || {}, {
                            error: n("error", iL.ERROR),
                            warn: n("warn", iL.WARN),
                            info: n("info", iL.INFO),
                            debug: n("debug", iL.DEBUG),
                            verbose: n("verbose", iL.VERBOSE)
                        }
                    }(null !== (i = n.logLevel) && void 0 !== i ? i : iL.INFO, t);
                if (s && !n.suppressOverrideMessage) {
                    var c = null !== (o = Error().stack) && void 0 !== o ? o : "<failed to generate stacktrace>";
                    s.warn("Current logger will be overwritten from " + c), u.warn("Current logger will overwrite one already registered from " + c)
                }
                return I("diag", u, e, !0)
            }, e.disable = function() {
                M("diag", e)
            }, e.createComponentLogger = function(t) {
                return new j(t)
            }, e.verbose = t("verbose"), e.debug = t("debug"), e.info = t("info"), e.warn = t("warn"), e.error = t("error")
        }
        return t.instance = function() {
            return this._instance || (this._instance = new t), this._instance
        }, t
    }(),
    G = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, i, o = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    },
    X = function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                }
            }
        };
        throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    z = function() {
        function t(t) {
            this._entries = t ? new Map(t) : new Map
        }
        return t.prototype.getEntry = function(t) {
            var e = this._entries.get(t);
            if (e) return Object.assign({}, e)
        }, t.prototype.getAllEntries = function() {
            return Array.from(this._entries.entries()).map(function(t) {
                var e = G(t, 2);
                return [e[0], e[1]]
            })
        }, t.prototype.setEntry = function(e, n) {
            var r = new t(this._entries);
            return r._entries.set(e, n), r
        }, t.prototype.removeEntry = function(e) {
            var n = new t(this._entries);
            return n._entries.delete(e), n
        }, t.prototype.removeEntries = function() {
            for (var e, n, r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
            var o = new t(this._entries);
            try {
                for (var a = X(r), s = a.next(); !s.done; s = a.next()) {
                    var u = s.value;
                    o._entries.delete(u)
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    s && !s.done && (n = a.return) && n.call(a)
                } finally {
                    if (e) throw e.error
                }
            }
            return o
        }, t.prototype.clear = function() {
            return new t
        }, t
    }(),
    q = Symbol("BaggageEntryMetadata"),
    $ = V.instance();

function K(t) {
    return void 0 === t && (t = {}), new z(new Map(Object.entries(t)))
}

function W(t) {
    return Symbol.for(t)
}
var Z = new function t(e) {
        var n = this;
        n._currentContext = e ? new Map(e) : new Map, n.getValue = function(t) {
            return n._currentContext.get(t)
        }, n.setValue = function(e, r) {
            var i = new t(n._currentContext);
            return i._currentContext.set(e, r), i
        }, n.deleteValue = function(e) {
            var r = new t(n._currentContext);
            return r._currentContext.delete(e), r
        }
    },
    Y = [{
        n: "error",
        c: "error"
    }, {
        n: "warn",
        c: "warn"
    }, {
        n: "info",
        c: "info"
    }, {
        n: "debug",
        c: "debug"
    }, {
        n: "verbose",
        c: "trace"
    }],
    Q = function() {
        for (var t = 0; t < Y.length; t++) this[Y[t].n] = function(t) {
            return function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                if (console) {
                    var r = console[t];
                    if ("function" != typeof r && (r = console.log), "function" == typeof r) return r.apply(console, e)
                }
            }
        }(Y[t].c)
    };
(ic = iA || (iA = {}))[ic.INT = 0] = "INT", ic[ic.DOUBLE = 1] = "DOUBLE", (il = iP || (iP = {}))[il.NOT_RECORD = 0] = "NOT_RECORD", il[il.RECORD = 1] = "RECORD", il[il.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED", (ip = iC || (iC = {}))[ip.INTERNAL = 0] = "INTERNAL", ip[ip.SERVER = 1] = "SERVER", ip[ip.CLIENT = 2] = "CLIENT", ip[ip.PRODUCER = 3] = "PRODUCER", ip[ip.CONSUMER = 4] = "CONSUMER", (id = iN || (iN = {}))[id.UNSET = 0] = "UNSET", id[id.OK = 1] = "OK", id[id.ERROR = 2] = "ERROR", (ih = ix || (ix = {}))[ih.NONE = 0] = "NONE", ih[ih.SAMPLED = 1] = "SAMPLED";
var J = "0000000000000000",
    tt = "00000000000000000000000000000000",
    te = {
        traceId: tt,
        spanId: J,
        traceFlags: ix.NONE
    },
    tn = function() {
        function t(t) {
            void 0 === t && (t = te), this._spanContext = t
        }
        return t.prototype.spanContext = function() {
            return this._spanContext
        }, t.prototype.setAttribute = function(t, e) {
            return this
        }, t.prototype.setAttributes = function(t) {
            return this
        }, t.prototype.addEvent = function(t, e) {
            return this
        }, t.prototype.addLink = function(t) {
            return this
        }, t.prototype.addLinks = function(t) {
            return this
        }, t.prototype.setStatus = function(t) {
            return this
        }, t.prototype.updateName = function(t) {
            return this
        }, t.prototype.end = function(t) {}, t.prototype.isRecording = function() {
            return !1
        }, t.prototype.recordException = function(t, e) {}, t
    }(),
    tr = /^([0-9a-f]{32})$/i,
    ti = /^[0-9a-f]{16}$/i;

function to(t) {
    return tr.test(t) && t !== tt
}

function ta(t) {
    var e;
    return to(t.traceId) && (e = t.spanId, ti.test(e) && e !== J)
}

function ts(t) {
    return new tn(t)
}
var tu = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, i, o = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    },
    tc = function(t, e, n) {
        if (n || 2 == arguments.length)
            for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
        return t.concat(r || Array.prototype.slice.call(e))
    },
    tl = function() {
        function t() {}
        return t.prototype.active = function() {
            return Z
        }, t.prototype.with = function(t, e, n) {
            for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
            return e.call.apply(e, tc([n], tu(r), !1))
        }, t.prototype.bind = function(t, e) {
            return e
        }, t.prototype.enable = function() {
            return this
        }, t.prototype.disable = function() {
            return this
        }, t
    }(),
    tp = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, i, o = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    },
    tf = function(t, e, n) {
        if (n || 2 == arguments.length)
            for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
        return t.concat(r || Array.prototype.slice.call(e))
    },
    td = "context",
    th = new tl,
    t_ = function() {
        function t() {}
        return t.getInstance = function() {
            return this._instance || (this._instance = new t), this._instance
        }, t.prototype.setGlobalContextManager = function(t) {
            return I(td, t, V.instance())
        }, t.prototype.active = function() {
            return this._getContextManager().active()
        }, t.prototype.with = function(t, e, n) {
            for (var r, i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
            return (r = this._getContextManager()).with.apply(r, tf([t, e, n], tp(i), !1))
        }, t.prototype.bind = function(t, e) {
            return this._getContextManager().bind(t, e)
        }, t.prototype._getContextManager = function() {
            return D(td) || th
        }, t.prototype.disable = function() {
            this._getContextManager().disable(), M(td, V.instance())
        }, t
    }(),
    tv = t_.getInstance(),
    tm = V.instance(),
    tg = (i_ = function(t, e) {
        return (i_ = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }
        i_(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    ty = function() {
        function t() {}
        return t.prototype.createGauge = function(t, e) {
            return tN
        }, t.prototype.createHistogram = function(t, e) {
            return tx
        }, t.prototype.createCounter = function(t, e) {
            return tC
        }, t.prototype.createUpDownCounter = function(t, e) {
            return tI
        }, t.prototype.createObservableGauge = function(t, e) {
            return tM
        }, t.prototype.createObservableCounter = function(t, e) {
            return tD
        }, t.prototype.createObservableUpDownCounter = function(t, e) {
            return tk
        }, t.prototype.addBatchObservableCallback = function(t, e) {}, t.prototype.removeBatchObservableCallback = function(t) {}, t
    }(),
    tb = function() {},
    tE = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return tg(e, t), e.prototype.add = function(t, e) {}, e
    }(tb),
    tT = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return tg(e, t), e.prototype.add = function(t, e) {}, e
    }(tb),
    tw = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return tg(e, t), e.prototype.record = function(t, e) {}, e
    }(tb),
    tO = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return tg(e, t), e.prototype.record = function(t, e) {}, e
    }(tb),
    tS = function() {
        function t() {}
        return t.prototype.addCallback = function(t) {}, t.prototype.removeCallback = function(t) {}, t
    }(),
    tR = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return tg(e, t), e
    }(tS),
    tL = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return tg(e, t), e
    }(tS),
    tA = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return tg(e, t), e
    }(tS),
    tP = new ty,
    tC = new tE,
    tN = new tw,
    tx = new tO,
    tI = new tT,
    tD = new tR,
    tM = new tL,
    tk = new tA,
    tU = new(function() {
        function t() {}
        return t.prototype.getMeter = function(t, e, n) {
            return tP
        }, t
    }()),
    tj = "metrics",
    tB = (function() {
        function t() {}
        return t.getInstance = function() {
            return this._instance || (this._instance = new t), this._instance
        }, t.prototype.setGlobalMeterProvider = function(t) {
            return I(tj, t, V.instance())
        }, t.prototype.getMeterProvider = function() {
            return D(tj) || tU
        }, t.prototype.getMeter = function(t, e, n) {
            return this.getMeterProvider().getMeter(t, e, n)
        }, t.prototype.disable = function() {
            M(tj, V.instance())
        }, t
    })().getInstance(),
    tF = function() {
        function t() {}
        return t.prototype.inject = function(t, e) {}, t.prototype.extract = function(t, e) {
            return t
        }, t.prototype.fields = function() {
            return []
        }, t
    }(),
    tH = {
        get: function(t, e) {
            if (null != t) return t[e]
        },
        keys: function(t) {
            return null == t ? [] : Object.keys(t)
        }
    },
    tV = {
        set: function(t, e, n) {
            null != t && (t[e] = n)
        }
    },
    tG = W("OpenTelemetry Baggage Key");

function tX(t) {
    return t.getValue(tG) || void 0
}

function tz() {
    return tX(t_.getInstance().active())
}

function tq(t, e) {
    return t.setValue(tG, e)
}

function t$(t) {
    return t.deleteValue(tG)
}
var tK = "propagation",
    tW = new tF,
    tZ = (function() {
        function t() {
            this.createBaggage = K, this.getBaggage = tX, this.getActiveBaggage = tz, this.setBaggage = tq, this.deleteBaggage = t$
        }
        return t.getInstance = function() {
            return this._instance || (this._instance = new t), this._instance
        }, t.prototype.setGlobalPropagator = function(t) {
            return I(tK, t, V.instance())
        }, t.prototype.inject = function(t, e, n) {
            return void 0 === n && (n = tV), this._getGlobalPropagator().inject(t, e, n)
        }, t.prototype.extract = function(t, e, n) {
            return void 0 === n && (n = tH), this._getGlobalPropagator().extract(t, e, n)
        }, t.prototype.fields = function() {
            return this._getGlobalPropagator().fields()
        }, t.prototype.disable = function() {
            M(tK, V.instance())
        }, t.prototype._getGlobalPropagator = function() {
            return D(tK) || tW
        }, t
    })().getInstance(),
    tY = W("OpenTelemetry Context Key SPAN");

function tQ(t) {
    return t.getValue(tY) || void 0
}

function tJ() {
    return tQ(t_.getInstance().active())
}

function t0(t, e) {
    return t.setValue(tY, e)
}

function t1(t) {
    return t.deleteValue(tY)
}

function t2(t, e) {
    return t0(t, new tn(e))
}

function t3(t) {
    var e;
    return null === (e = tQ(t)) || void 0 === e ? void 0 : e.spanContext()
}
var t4 = t_.getInstance(),
    t6 = function() {
        function t() {}
        return t.prototype.startSpan = function(t, e, n) {
            if (void 0 === n && (n = t4.active()), null == e ? void 0 : e.root) return new tn;
            var r = n && t3(n);
            return "object" == typeof r && "string" == typeof r.spanId && "string" == typeof r.traceId && "number" == typeof r.traceFlags && ta(r) ? new tn(r) : new tn
        }, t.prototype.startActiveSpan = function(t, e, n, r) {
            if (!(arguments.length < 2)) {
                2 == arguments.length ? a = e : 3 == arguments.length ? (i = e, a = n) : (i = e, o = n, a = r);
                var i, o, a, s = null != o ? o : t4.active(),
                    u = this.startSpan(t, i, s),
                    c = t0(s, u);
                return t4.with(c, a, void 0, u)
            }
        }, t
    }(),
    t5 = new t6,
    t9 = function() {
        function t(t, e, n, r) {
            this._provider = t, this.name = e, this.version = n, this.options = r
        }
        return t.prototype.startSpan = function(t, e, n) {
            return this._getTracer().startSpan(t, e, n)
        }, t.prototype.startActiveSpan = function(t, e, n, r) {
            var i = this._getTracer();
            return Reflect.apply(i.startActiveSpan, i, arguments)
        }, t.prototype._getTracer = function() {
            if (this._delegate) return this._delegate;
            var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
            return t ? (this._delegate = t, this._delegate) : t5
        }, t
    }(),
    t8 = new(function() {
        function t() {}
        return t.prototype.getTracer = function(t, e, n) {
            return new t6
        }, t
    }()),
    t7 = function() {
        function t() {}
        return t.prototype.getTracer = function(t, e, n) {
            var r;
            return null !== (r = this.getDelegateTracer(t, e, n)) && void 0 !== r ? r : new t9(this, t, e, n)
        }, t.prototype.getDelegate = function() {
            var t;
            return null !== (t = this._delegate) && void 0 !== t ? t : t8
        }, t.prototype.setDelegate = function(t) {
            this._delegate = t
        }, t.prototype.getDelegateTracer = function(t, e, n) {
            var r;
            return null === (r = this._delegate) || void 0 === r ? void 0 : r.getTracer(t, e, n)
        }, t
    }(),
    et = "trace",
    ee = (function() {
        function t() {
            this._proxyTracerProvider = new t7, this.wrapSpanContext = ts, this.isSpanContextValid = ta, this.deleteSpan = t1, this.getSpan = tQ, this.getActiveSpan = tJ, this.getSpanContext = t3, this.setSpan = t0, this.setSpanContext = t2
        }
        return t.getInstance = function() {
            return this._instance || (this._instance = new t), this._instance
        }, t.prototype.setGlobalTracerProvider = function(t) {
            var e = I(et, this._proxyTracerProvider, V.instance());
            return e && this._proxyTracerProvider.setDelegate(t), e
        }, t.prototype.getTracerProvider = function() {
            return D(et) || this._proxyTracerProvider
        }, t.prototype.getTracer = function(t, e) {
            return this.getTracerProvider().getTracer(t, e)
        }, t.prototype.disable = function() {
            M(et, V.instance()), this._proxyTracerProvider = new t7
        }, t
    })().getInstance(),
    en = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof w ? w : {},
    er = Symbol.for("io.opentelemetry.js.api.logs"),
    ei = function() {
        function t() {}
        return t.prototype.emit = function(t) {}, t
    }();
new ei;
var eo = new(function() {
        function t() {}
        return t.prototype.getLogger = function(t, e, n) {
            return new ei
        }, t
    }()),
    ea = (function() {
        function t() {}
        return t.getInstance = function() {
            return this._instance || (this._instance = new t), this._instance
        }, t.prototype.setGlobalLoggerProvider = function(t) {
            return en[er] ? this.getLoggerProvider() : (en[er] = function(e) {
                return 1 === e ? t : eo
            }, t)
        }, t.prototype.getLoggerProvider = function() {
            var t, e;
            return null !== (e = null === (t = en[er]) || void 0 === t ? void 0 : t.call(en, 1)) && void 0 !== e ? e : eo
        }, t.prototype.getLogger = function(t, e, n) {
            return this.getLoggerProvider().getLogger(t, e, n)
        }, t.prototype.disable = function() {
            delete en[er]
        }, t
    })().getInstance(),
    es = "service.name",
    eu = "telemetry.sdk.name",
    ec = "telemetry.sdk.language",
    el = "telemetry.sdk.version",
    ep = ((iI = {})[eu] = "opentelemetry", iI["process.runtime.name"] = "browser", iI[ec] = "webjs", iI[el] = "1.25.1", iI),
    ef = function() {
        return (ef = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }).apply(this, arguments)
    },
    ed = function(t, e) {
        var n, r, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
                return function(o) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = e.call(t, a)
                    } catch (t) {
                        o = [6, t], r = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    },
    eh = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, i, o = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    },
    e_ = function() {
        function t(t, e) {
            var n, r = this;
            this._attributes = t, this.asyncAttributesPending = null != e, this._syncAttributes = null !== (n = this._attributes) && void 0 !== n ? n : {}, this._asyncAttributesPromise = null == e ? void 0 : e.then(function(t) {
                return r._attributes = Object.assign({}, r._attributes, t), r.asyncAttributesPending = !1, t
            }, function(t) {
                return tm.debug("a resource's async attributes promise rejected: %s", t), r.asyncAttributesPending = !1, {}
            })
        }
        return t.empty = function() {
            return t.EMPTY
        }, t.default = function() {
            var e;
            return new t(((e = {})[es] = "unknown_service", e[ec] = ep[ec], e[eu] = ep[eu], e[el] = ep[el], e))
        }, Object.defineProperty(t.prototype, "attributes", {
            get: function() {
                var t;
                return this.asyncAttributesPending && tm.error("Accessing resource attributes before async attributes settled"), null !== (t = this._attributes) && void 0 !== t ? t : {}
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.waitForAsyncAttributes = function() {
            var t, e, n, r;
            return t = this, e = void 0, n = void 0, r = function() {
                return ed(this, function(t) {
                    switch (t.label) {
                        case 0:
                            if (!this.asyncAttributesPending) return [3, 2];
                            return [4, this._asyncAttributesPromise];
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return [2]
                    }
                })
            }, new(n || (n = Promise))(function(i, o) {
                function a(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function s(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function u(t) {
                    var e;
                    t.done ? i(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                        t(e)
                    })).then(a, s)
                }
                u((r = r.apply(t, e || [])).next())
            })
        }, t.prototype.merge = function(e) {
            var n, r = this;
            if (!e) return this;
            var i = ef(ef({}, this._syncAttributes), null !== (n = e._syncAttributes) && void 0 !== n ? n : e.attributes);
            return this._asyncAttributesPromise || e._asyncAttributesPromise ? new t(i, Promise.all([this._asyncAttributesPromise, e._asyncAttributesPromise]).then(function(t) {
                var n, i = eh(t, 2),
                    o = i[0],
                    a = i[1];
                return ef(ef(ef(ef({}, r._syncAttributes), o), null !== (n = e._syncAttributes) && void 0 !== n ? n : e.attributes), a)
            })) : new t(i)
        }, t.EMPTY = new t({}), t
    }(),
    ev = function(t, e) {
        var n, r, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
                return function(o) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = e.call(t, a)
                    } catch (t) {
                        o = [6, t], r = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    },
    em = function(t) {
        void 0 === t && (t = {});
        var e, n = (null !== (e = t.detectors) && void 0 !== e ? e : []).map(function(e) {
                try {
                    var n, r, i, o, a, s = e.detect(t);
                    return (a = null !== s && "object" == typeof s && "function" == typeof s.then ? new e_({}, (n = void 0, r = void 0, i = void 0, o = function() {
                        var t;
                        return ev(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, s];
                                case 1:
                                    return t = e.sent(), [2, t.attributes]
                            }
                        })
                    }, new(i || (i = Promise))(function(t, e) {
                        function a(t) {
                            try {
                                u(o.next(t))
                            } catch (t) {
                                e(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(o.throw(t))
                            } catch (t) {
                                e(t)
                            }
                        }

                        function u(e) {
                            var n;
                            e.done ? t(e.value) : ((n = e.value) instanceof i ? n : new i(function(t) {
                                t(n)
                            })).then(a, s)
                        }
                        u((o = o.apply(n, r || [])).next())
                    }))) : s).waitForAsyncAttributes ? a.waitForAsyncAttributes().then(function() {
                        return tm.debug(e.constructor.name + " found resource.", a)
                    }) : tm.debug(e.constructor.name + " found resource.", a), a
                } catch (t) {
                    return tm.error(e.constructor.name + " failed: " + t.message), e_.empty()
                }
            }),
            r = n.reduce(function(t, e) {
                return t.merge(e)
            }, e_.empty());
        return r.waitForAsyncAttributes && r.waitForAsyncAttributes().then(function() {
            eg(n)
        }), r
    },
    eg = function(t) {
        t.forEach(function(t) {
            if (Object.keys(t.attributes).length > 0) {
                var e = JSON.stringify(t.attributes, null, 4);
                tm.verbose(e)
            }
        })
    };
(iv = iD || (iD = {}))[iv.NOT_RECORD = 0] = "NOT_RECORD", iv[iv.RECORD = 1] = "RECORD", iv[iv.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
var ey = function() {
        function t() {}
        return t.prototype.shouldSample = function() {
            return {
                decision: iD.NOT_RECORD
            }
        }, t.prototype.toString = function() {
            return "AlwaysOffSampler"
        }, t
    }(),
    eb = function() {
        function t() {}
        return t.prototype.shouldSample = function() {
            return {
                decision: iD.RECORD_AND_SAMPLED
            }
        }, t.prototype.toString = function() {
            return "AlwaysOnSampler"
        }, t
    }(),
    eE = function() {
        function t() {
            var t = this;
            this._promise = new Promise(function(e, n) {
                t._resolve = e, t._reject = n
            })
        }
        return Object.defineProperty(t.prototype, "promise", {
            get: function() {
                return this._promise
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.resolve = function(t) {
            this._resolve(t)
        }, t.prototype.reject = function(t) {
            this._reject(t)
        }, t
    }(),
    eT = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, i, o = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    },
    ew = function(t, e, n) {
        if (n || 2 == arguments.length)
            for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
        return t.concat(r || Array.prototype.slice.call(e))
    },
    eO = function() {
        function t(t, e) {
            this._callback = t, this._that = e, this._isCalled = !1, this._deferred = new eE
        }
        return Object.defineProperty(t.prototype, "isCalled", {
            get: function() {
                return this._isCalled
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "promise", {
            get: function() {
                return this._deferred.promise
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.call = function() {
            for (var t, e = this, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            if (!this._isCalled) {
                this._isCalled = !0;
                try {
                    Promise.resolve((t = this._callback).call.apply(t, ew([this._that], eT(n), !1))).then(function(t) {
                        return e._deferred.resolve(t)
                    }, function(t) {
                        return e._deferred.reject(t)
                    })
                } catch (t) {
                    this._deferred.reject(t)
                }
            }
            return this._deferred.promise
        }, t
    }();
(im = iM || (iM = {}))[im.SUCCESS = 0] = "SUCCESS", im[im.FAILED = 1] = "FAILED", (ig = ik || (ik = {})).AlwaysOff = "always_off", ig.AlwaysOn = "always_on", ig.ParentBasedAlwaysOff = "parentbased_always_off", ig.ParentBasedAlwaysOn = "parentbased_always_on", ig.ParentBasedTraceIdRatio = "parentbased_traceidratio", ig.TraceIdRatio = "traceidratio";
var eS = ["OTEL_SDK_DISABLED"],
    eR = ["OTEL_BSP_EXPORT_TIMEOUT", "OTEL_BSP_MAX_EXPORT_BATCH_SIZE", "OTEL_BSP_MAX_QUEUE_SIZE", "OTEL_BSP_SCHEDULE_DELAY", "OTEL_BLRP_EXPORT_TIMEOUT", "OTEL_BLRP_MAX_EXPORT_BATCH_SIZE", "OTEL_BLRP_MAX_QUEUE_SIZE", "OTEL_BLRP_SCHEDULE_DELAY", "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_EVENT_COUNT_LIMIT", "OTEL_SPAN_LINK_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT", "OTEL_EXPORTER_OTLP_TIMEOUT", "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT", "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT", "OTEL_EXPORTER_OTLP_LOGS_TIMEOUT", "OTEL_EXPORTER_JAEGER_AGENT_PORT"],
    eL = ["OTEL_NO_PATCH_MODULES", "OTEL_PROPAGATORS"],
    eA = 1 / 0,
    eP = {
        OTEL_SDK_DISABLED: !1,
        CONTAINER_NAME: "",
        ECS_CONTAINER_METADATA_URI_V4: "",
        ECS_CONTAINER_METADATA_URI: "",
        HOSTNAME: "",
        KUBERNETES_SERVICE_HOST: "",
        NAMESPACE: "",
        OTEL_BSP_EXPORT_TIMEOUT: 3e4,
        OTEL_BSP_MAX_EXPORT_BATCH_SIZE: 512,
        OTEL_BSP_MAX_QUEUE_SIZE: 2048,
        OTEL_BSP_SCHEDULE_DELAY: 5e3,
        OTEL_BLRP_EXPORT_TIMEOUT: 3e4,
        OTEL_BLRP_MAX_EXPORT_BATCH_SIZE: 512,
        OTEL_BLRP_MAX_QUEUE_SIZE: 2048,
        OTEL_BLRP_SCHEDULE_DELAY: 5e3,
        OTEL_EXPORTER_JAEGER_AGENT_HOST: "",
        OTEL_EXPORTER_JAEGER_AGENT_PORT: 6832,
        OTEL_EXPORTER_JAEGER_ENDPOINT: "",
        OTEL_EXPORTER_JAEGER_PASSWORD: "",
        OTEL_EXPORTER_JAEGER_USER: "",
        OTEL_EXPORTER_OTLP_ENDPOINT: "",
        OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: "",
        OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: "",
        OTEL_EXPORTER_OTLP_LOGS_ENDPOINT: "",
        OTEL_EXPORTER_OTLP_HEADERS: "",
        OTEL_EXPORTER_OTLP_TRACES_HEADERS: "",
        OTEL_EXPORTER_OTLP_METRICS_HEADERS: "",
        OTEL_EXPORTER_OTLP_LOGS_HEADERS: "",
        OTEL_EXPORTER_OTLP_TIMEOUT: 1e4,
        OTEL_EXPORTER_OTLP_TRACES_TIMEOUT: 1e4,
        OTEL_EXPORTER_OTLP_METRICS_TIMEOUT: 1e4,
        OTEL_EXPORTER_OTLP_LOGS_TIMEOUT: 1e4,
        OTEL_EXPORTER_ZIPKIN_ENDPOINT: "http://localhost:9411/api/v2/spans",
        OTEL_LOG_LEVEL: iL.INFO,
        OTEL_NO_PATCH_MODULES: [],
        OTEL_PROPAGATORS: ["tracecontext", "baggage"],
        OTEL_RESOURCE_ATTRIBUTES: "",
        OTEL_SERVICE_NAME: "",
        OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: eA,
        OTEL_ATTRIBUTE_COUNT_LIMIT: 128,
        OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: eA,
        OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: 128,
        OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: eA,
        OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: 128,
        OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
        OTEL_SPAN_LINK_COUNT_LIMIT: 128,
        OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: 128,
        OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: 128,
        OTEL_TRACES_EXPORTER: "",
        OTEL_TRACES_SAMPLER: ik.ParentBasedAlwaysOn,
        OTEL_TRACES_SAMPLER_ARG: "",
        OTEL_LOGS_EXPORTER: "",
        OTEL_EXPORTER_OTLP_INSECURE: "",
        OTEL_EXPORTER_OTLP_TRACES_INSECURE: "",
        OTEL_EXPORTER_OTLP_METRICS_INSECURE: "",
        OTEL_EXPORTER_OTLP_LOGS_INSECURE: "",
        OTEL_EXPORTER_OTLP_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_COMPRESSION: "",
        OTEL_EXPORTER_OTLP_TRACES_COMPRESSION: "",
        OTEL_EXPORTER_OTLP_METRICS_COMPRESSION: "",
        OTEL_EXPORTER_OTLP_LOGS_COMPRESSION: "",
        OTEL_EXPORTER_OTLP_CLIENT_KEY: "",
        OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY: "",
        OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY: "",
        OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY: "",
        OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_PROTOCOL: "http/protobuf",
        OTEL_EXPORTER_OTLP_TRACES_PROTOCOL: "http/protobuf",
        OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: "http/protobuf",
        OTEL_EXPORTER_OTLP_LOGS_PROTOCOL: "http/protobuf",
        OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: "cumulative"
    },
    eC = {
        ALL: iL.ALL,
        VERBOSE: iL.VERBOSE,
        DEBUG: iL.DEBUG,
        INFO: iL.INFO,
        WARN: iL.WARN,
        ERROR: iL.ERROR,
        NONE: iL.NONE
    };

function eN(t) {
    var e = {};
    for (var n in eP)
        if ("OTEL_LOG_LEVEL" === n) ! function(t, e, n) {
            var r = n[t];
            if ("string" == typeof r) {
                var i = eC[r.toUpperCase()];
                null != i && (e[t] = i)
            }
        }(n, e, t);
        else if (eS.indexOf(n) > -1) ! function(t, e, n) {
        if (void 0 !== n[t]) {
            var r = String(n[t]);
            e[t] = "true" === r.toLowerCase()
        }
    }(n, e, t);
    else if (eR.indexOf(n) > -1) ! function(t, e, n, r, i) {
        if (void 0 === r && (r = -1 / 0), void 0 === i && (i = 1 / 0), void 0 !== n[t]) {
            var o = Number(n[t]);
            isNaN(o) || (o < r ? e[t] = r : o > i ? e[t] = i : e[t] = o)
        }
    }(n, e, t);
    else if (eL.indexOf(n) > -1) ! function(t, e, n, r) {
        void 0 === r && (r = ",");
        var i = n[t];
        "string" == typeof i && (e[t] = i.split(r).map(function(t) {
            return t.trim()
        }))
    }(n, e, t);
    else {
        var r = t[n];
        null != r && (e[n] = String(r))
    }
    return e
}
var ex = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof w ? w : {};

function eI() {
    return Object.assign({}, eP, eN(ex))
}
var eD = function(t) {
    tm.error("string" == typeof t ? t : JSON.stringify(function(t) {
        for (var e = {}, n = t; null !== n;) Object.getOwnPropertyNames(n).forEach(function(t) {
            if (!e[t]) {
                var r = n[t];
                r && (e[t] = String(r))
            }
        }), n = Object.getPrototypeOf(n);
        return e
    }(t)))
};

function eM(t) {
    try {
        eD(t)
    } catch (t) {}
}
var ek = W("OpenTelemetry SDK Context Key SUPPRESS_TRACING");

function eU(t) {
    return !0 === t.getValue(ek)
}
var ej = function() {
        function t(t, e) {
            this._exporter = t, this._isExporting = !1, this._finishedSpans = [], this._droppedSpansCount = 0;
            var n = eI();
            this._maxExportBatchSize = "number" == typeof(null == e ? void 0 : e.maxExportBatchSize) ? e.maxExportBatchSize : n.OTEL_BSP_MAX_EXPORT_BATCH_SIZE, this._maxQueueSize = "number" == typeof(null == e ? void 0 : e.maxQueueSize) ? e.maxQueueSize : n.OTEL_BSP_MAX_QUEUE_SIZE, this._scheduledDelayMillis = "number" == typeof(null == e ? void 0 : e.scheduledDelayMillis) ? e.scheduledDelayMillis : n.OTEL_BSP_SCHEDULE_DELAY, this._exportTimeoutMillis = "number" == typeof(null == e ? void 0 : e.exportTimeoutMillis) ? e.exportTimeoutMillis : n.OTEL_BSP_EXPORT_TIMEOUT, this._shutdownOnce = new eO(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize && (tm.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize)
        }
        return t.prototype.forceFlush = function() {
            return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll()
        }, t.prototype.onStart = function(t, e) {}, t.prototype.onEnd = function(t) {
            this._shutdownOnce.isCalled || (t.spanContext().traceFlags & ix.SAMPLED) == 0 || this._addToBuffer(t)
        }, t.prototype.shutdown = function() {
            return this._shutdownOnce.call()
        }, t.prototype._shutdown = function() {
            var t = this;
            return Promise.resolve().then(function() {
                return t.onShutdown()
            }).then(function() {
                return t._flushAll()
            }).then(function() {
                return t._exporter.shutdown()
            })
        }, t.prototype._addToBuffer = function(t) {
            if (this._finishedSpans.length >= this._maxQueueSize) {
                0 === this._droppedSpansCount && tm.debug("maxQueueSize reached, dropping spans"), this._droppedSpansCount++;
                return
            }
            this._droppedSpansCount > 0 && (tm.warn("Dropped " + this._droppedSpansCount + " spans because maxQueueSize reached"), this._droppedSpansCount = 0), this._finishedSpans.push(t), this._maybeStartTimer()
        }, t.prototype._flushAll = function() {
            var t = this;
            return new Promise(function(e, n) {
                for (var r = [], i = Math.ceil(t._finishedSpans.length / t._maxExportBatchSize), o = 0; o < i; o++) r.push(t._flushOneBatch());
                Promise.all(r).then(function() {
                    e()
                }).catch(n)
            })
        }, t.prototype._flushOneBatch = function() {
            var t = this;
            return (this._clearTimer(), 0 === this._finishedSpans.length) ? Promise.resolve() : new Promise(function(e, n) {
                var r = setTimeout(function() {
                    n(Error("Timeout"))
                }, t._exportTimeoutMillis);
                tv.with(tv.active().setValue(ek, !0), function() {
                    t._finishedSpans.length <= t._maxExportBatchSize ? (i = t._finishedSpans, t._finishedSpans = []) : i = t._finishedSpans.splice(0, t._maxExportBatchSize);
                    for (var i, o = function() {
                            return t._exporter.export(i, function(t) {
                                var i;
                                clearTimeout(r), t.code === iM.SUCCESS ? e() : n(null !== (i = t.error) && void 0 !== i ? i : Error("BatchSpanProcessor: span export failed"))
                            })
                        }, a = null, s = 0, u = i.length; s < u; s++) {
                        var c = i[s];
                        c.resource.asyncAttributesPending && c.resource.waitForAsyncAttributes && (null != a || (a = []), a.push(c.resource.waitForAsyncAttributes()))
                    }
                    null === a ? o() : Promise.all(a).then(o, function(t) {
                        eM(t), n(t)
                    })
                })
            })
        }, t.prototype._maybeStartTimer = function() {
            var t = this;
            if (!this._isExporting) {
                var e = function() {
                    t._isExporting = !0, t._flushOneBatch().finally(function() {
                        t._isExporting = !1, t._finishedSpans.length > 0 && (t._clearTimer(), t._maybeStartTimer())
                    }).catch(function(e) {
                        t._isExporting = !1, eM(e)
                    })
                };
                if (this._finishedSpans.length >= this._maxExportBatchSize) return e();
                void 0 === this._timer && (this._timer = setTimeout(function() {
                    return e()
                }, this._scheduledDelayMillis), this._timer)
            }
        }, t.prototype._clearTimer = function() {
            void 0 !== this._timer && (clearTimeout(this._timer), this._timer = void 0)
        }, t
    }(),
    eB = (iy = function(t, e) {
        return (iy = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }
        iy(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    eF = function(t) {
        function e(e, n) {
            var r = t.call(this, e, n) || this;
            return r.onInit(n), r
        }
        return eB(e, t), e.prototype.onInit = function(t) {
            var e = this;
            (null == t ? void 0 : t.disableAutoFlushOnDocumentHide) !== !0 && "undefined" != typeof document && (this._visibilityChangeListener = function() {
                "hidden" === document.visibilityState && e.forceFlush()
            }, this._pageHideListener = function() {
                e.forceFlush()
            }, document.addEventListener("visibilitychange", this._visibilityChangeListener), document.addEventListener("pagehide", this._pageHideListener))
        }, e.prototype.onShutdown = function() {
            "undefined" != typeof document && (this._visibilityChangeListener && document.removeEventListener("visibilitychange", this._visibilityChangeListener), this._pageHideListener && document.removeEventListener("pagehide", this._pageHideListener))
        }, e
    }(ej),
    eH = function() {
        function t(t) {
            void 0 === t && (t = 0), this._ratio = t, this._ratio = this._normalize(t), this._upperBound = Math.floor(4294967295 * this._ratio)
        }
        return t.prototype.shouldSample = function(t, e) {
            return {
                decision: to(e) && this._accumulate(e) < this._upperBound ? iD.RECORD_AND_SAMPLED : iD.NOT_RECORD
            }
        }, t.prototype.toString = function() {
            return "TraceIdRatioBased{" + this._ratio + "}"
        }, t.prototype._normalize = function(t) {
            return "number" != typeof t || isNaN(t) ? 0 : t >= 1 ? 1 : t <= 0 ? 0 : t
        }, t.prototype._accumulate = function(t) {
            for (var e = 0, n = 0; n < t.length / 8; n++) {
                var r = 8 * n;
                e = (e ^ parseInt(t.slice(r, r + 8), 16)) >>> 0
            }
            return e
        }, t
    }(),
    eV = function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                }
            }
        };
        throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    eG = function() {
        function t(t) {
            var e;
            void 0 === t && (t = {}), this._propagators = null !== (e = t.propagators) && void 0 !== e ? e : [], this._fields = Array.from(new Set(this._propagators.map(function(t) {
                return "function" == typeof t.fields ? t.fields() : []
            }).reduce(function(t, e) {
                return t.concat(e)
            }, [])))
        }
        return t.prototype.inject = function(t, e, n) {
            var r, i;
            try {
                for (var o = eV(this._propagators), a = o.next(); !a.done; a = o.next()) {
                    var s = a.value;
                    try {
                        s.inject(t, e, n)
                    } catch (t) {
                        tm.warn("Failed to inject with " + s.constructor.name + ". Err: " + t.message)
                    }
                }
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    a && !a.done && (i = o.return) && i.call(o)
                } finally {
                    if (r) throw r.error
                }
            }
        }, t.prototype.extract = function(t, e, n) {
            return this._propagators.reduce(function(t, r) {
                try {
                    return r.extract(t, e, n)
                } catch (t) {
                    tm.warn("Failed to inject with " + r.constructor.name + ". Err: " + t.message)
                }
                return t
            }, t)
        }, t.prototype.fields = function() {
            return this._fields.slice()
        }, t
    }(),
    eX = Function.prototype.toString,
    ez = eX.call(Object),
    eq = (ia = Object.getPrototypeOf, is = Object, function(t) {
        return ia(is(t))
    }),
    e$ = Object.prototype,
    eK = e$.hasOwnProperty,
    eW = Symbol ? Symbol.toStringTag : void 0,
    eZ = e$.toString;

function eY(t) {
    if (!(null != t && "object" == typeof t) || "[object Object]" !== (null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : eW && eW in Object(t) ? function(t) {
            var e = eK.call(t, eW),
                n = t[eW],
                r = !1;
            try {
                t[eW] = void 0, r = !0
            } catch (t) {}
            var i = eZ.call(t);
            return r && (e ? t[eW] = n : delete t[eW]), i
        }(t) : eZ.call(t))) return !1;
    var e = eq(t);
    if (null === e) return !0;
    var n = eK.call(e, "constructor") && e.constructor;
    return "function" == typeof n && n instanceof n && eX.call(n) === ez
}

function eQ(t) {
    return e0(t) ? t.slice() : t
}

function eJ(t, e, n) {
    for (var r = n.get(t[e]) || [], i = 0, o = r.length; i < o; i++) {
        var a = r[i];
        if (a.key === e && a.obj === t) return !0
    }
    return !1
}

function e0(t) {
    return Array.isArray(t)
}

function e1(t) {
    return "function" == typeof t
}

function e2(t) {
    return !e3(t) && !e0(t) && !e1(t) && "object" == typeof t
}

function e3(t) {
    return "string" == typeof t || "number" == typeof t || "boolean" == typeof t || void 0 === t || t instanceof Date || t instanceof RegExp || null === t
}
var e4 = "baggage",
    e6 = {};
O(e6, "serializeKeyPairs", () => e9), O(e6, "getKeyPairs", () => e8), O(e6, "parsePairKeyValue", () => e7), O(e6, "parseKeyPairsIntoRecord", () => nt);
var e5 = function(t, e) {
    var n = "function" == typeof Symbol && t[Symbol.iterator];
    if (!n) return t;
    var r, i, o = n.call(t),
        a = [];
    try {
        for (;
            (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
    } catch (t) {
        i = {
            error: t
        }
    } finally {
        try {
            r && !r.done && (n = o.return) && n.call(o)
        } finally {
            if (i) throw i.error
        }
    }
    return a
};

function e9(t) {
    return t.reduce(function(t, e) {
        var n = "" + t + ("" !== t ? "," : "") + e;
        return n.length > 8192 ? t : n
    }, "")
}

function e8(t) {
    return t.getAllEntries().map(function(t) {
        var e = e5(t, 2),
            n = e[0],
            r = e[1],
            i = encodeURIComponent(n) + "=" + encodeURIComponent(r.value);
        return void 0 !== r.metadata && (i += ";" + r.metadata.toString()), i
    })
}

function e7(t) {
    var e, n = t.split(";");
    if (!(n.length <= 0)) {
        var r = n.shift();
        if (r) {
            var i = r.indexOf("=");
            if (!(i <= 0)) {
                var o, a = decodeURIComponent(r.substring(0, i).trim()),
                    s = decodeURIComponent(r.substring(i + 1).trim());
                return n.length > 0 && ("string" != typeof(o = n.join(";")) && ($.error("Cannot create baggage metadata from unknown type: " + typeof o), o = ""), e = {
                    __TYPE__: q,
                    toString: function() {
                        return o
                    }
                }), {
                    key: a,
                    value: s,
                    metadata: e
                }
            }
        }
    }
}

function nt(t) {
    return "string" != typeof t || 0 === t.length ? {} : t.split(",").map(function(t) {
        return e7(t)
    }).filter(function(t) {
        return void 0 !== t && t.value.length > 0
    }).reduce(function(t, e) {
        return t[e.key] = e.value, t
    }, {})
}
var ne = function() {
        function t() {}
        return t.prototype.inject = function(t, e, n) {
            var r = tZ.getBaggage(t);
            if (!(!r || eU(t))) {
                var i = e9(e8(r).filter(function(t) {
                    return t.length <= 4096
                }).slice(0, 180));
                i.length > 0 && n.set(e, e4, i)
            }
        }, t.prototype.extract = function(t, e, n) {
            var r = n.get(e, e4),
                i = Array.isArray(r) ? r.join(",") : r;
            if (!i) return t;
            var o = {};
            return 0 === i.length ? t : (i.split(",").forEach(function(t) {
                var e = e7(t);
                if (e) {
                    var n = {
                        value: e.value
                    };
                    e.metadata && (n.metadata = e.metadata), o[e.key] = n
                }
            }), 0 === Object.entries(o).length) ? t : tZ.setBaggage(t, tZ.createBaggage(o))
        }, t.prototype.fields = function() {
            return [e4]
        }, t
    }(),
    nn = "[_0-9a-z-*/]",
    nr = RegExp("^(?:[a-z]" + nn + "{0,255}|" + ("[a-z0-9]" + nn) + "{0,240}@[a-z]" + nn + "{0,13})$"),
    ni = /^[ -~]{0,255}[!-~]$/,
    no = /,|=/,
    na = function() {
        function t(t) {
            this._internalState = new Map, t && this._parse(t)
        }
        return t.prototype.set = function(t, e) {
            var n = this._clone();
            return n._internalState.has(t) && n._internalState.delete(t), n._internalState.set(t, e), n
        }, t.prototype.unset = function(t) {
            var e = this._clone();
            return e._internalState.delete(t), e
        }, t.prototype.get = function(t) {
            return this._internalState.get(t)
        }, t.prototype.serialize = function() {
            var t = this;
            return this._keys().reduce(function(e, n) {
                return e.push(n + "=" + t.get(n)), e
            }, []).join(",")
        }, t.prototype._parse = function(t) {
            !(t.length > 512) && (this._internalState = t.split(",").reverse().reduce(function(t, e) {
                var n = e.trim(),
                    r = n.indexOf("=");
                if (-1 !== r) {
                    var i = n.slice(0, r),
                        o = n.slice(r + 1, e.length);
                    nr.test(i) && ni.test(o) && !no.test(o) && t.set(i, o)
                }
                return t
            }, new Map), this._internalState.size > 32 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32))))
        }, t.prototype._keys = function() {
            return Array.from(this._internalState.keys()).reverse()
        }, t.prototype._clone = function() {
            var e = new t;
            return e._internalState = new Map(this._internalState), e
        }, t
    }(),
    ns = "traceparent",
    nu = "tracestate",
    nc = RegExp("^\\s?((?!ff)[\\da-f]{2})-((?![0]{32})[\\da-f]{32})-((?![0]{16})[\\da-f]{16})-([\\da-f]{2})(-.*)?\\s?$"),
    nl = function() {
        function t() {}
        return t.prototype.inject = function(t, e, n) {
            var r = ee.getSpanContext(t);
            if (!(!r || eU(t)) && ta(r)) {
                var i = "00-" + r.traceId + "-" + r.spanId + "-0" + Number(r.traceFlags || ix.NONE).toString(16);
                n.set(e, ns, i), r.traceState && n.set(e, nu, r.traceState.serialize())
            }
        }, t.prototype.extract = function(t, e, n) {
            var r, i = n.get(e, ns);
            if (!i) return t;
            var o = Array.isArray(i) ? i[0] : i;
            if ("string" != typeof o) return t;
            var a = (r = nc.exec(o)) && ("00" !== r[1] || !r[5]) ? {
                traceId: r[2],
                spanId: r[3],
                traceFlags: parseInt(r[4], 16)
            } : null;
            if (!a) return t;
            a.isRemote = !0;
            var s = n.get(e, nu);
            if (s) {
                var u = Array.isArray(s) ? s.join(",") : s;
                a.traceState = new na("string" == typeof u ? u : void 0)
            }
            return ee.setSpanContext(t, a)
        }, t.prototype.fields = function() {
            return [ns, nu]
        }, t
    }(),
    np = function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                }
            }
        };
        throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    nf = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, i, o = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    };

function nd(t) {
    var e, n, r = {};
    if ("object" != typeof t || null == t) return r;
    try {
        for (var i = np(Object.entries(t)), o = i.next(); !o.done; o = i.next()) {
            var a = nf(o.value, 2),
                s = a[0],
                u = a[1];
            if ("string" != typeof s || !(s.length > 0)) {
                tm.warn("Invalid attribute key: " + s);
                continue
            }
            if (!nh(u)) {
                tm.warn("Invalid attribute value set for key: " + s);
                continue
            }
            Array.isArray(u) ? r[s] = u.slice() : r[s] = u
        }
    } catch (t) {
        e = {
            error: t
        }
    } finally {
        try {
            o && !o.done && (n = i.return) && n.call(i)
        } finally {
            if (e) throw e.error
        }
    }
    return r
}

function nh(t) {
    return null == t || (Array.isArray(t) ? function(t) {
        try {
            for (var e, n, r, i = np(t), o = i.next(); !o.done; o = i.next()) {
                var a = o.value;
                if (null != a) {
                    if (!r) {
                        if (n_(a)) {
                            r = typeof a;
                            continue
                        }
                        return !1
                    }
                    if (typeof a !== r) return !1
                }
            }
        } catch (t) {
            e = {
                error: t
            }
        } finally {
            try {
                o && !o.done && (n = i.return) && n.call(i)
            } finally {
                if (e) throw e.error
            }
        }
        return !0
    }(t) : n_(t))
}

function n_(t) {
    switch (typeof t) {
        case "number":
        case "boolean":
        case "string":
            return !0
    }
    return !1
}
var nv = performance;

function nm(t) {
    return [Math.trunc(t / 1e3), Math.round(t % 1e3 * 1e6)]
}

function ng() {
    var t = nv.timeOrigin;
    return "number" != typeof t && (t = nv.timing && nv.timing.fetchStart), t
}

function ny(t) {
    return nO(nm(ng()), nm("number" == typeof t ? t : nv.now()))
}

function nb(t) {
    if (nT(t)) return t;
    if ("number" == typeof t) return t < ng() ? ny(t) : nm(t);
    if (t instanceof Date) return nm(t.getTime());
    throw TypeError("Invalid input type")
}

function nE(t) {
    return 1e9 * t[0] + t[1]
}

function nT(t) {
    return Array.isArray(t) && 2 === t.length && "number" == typeof t[0] && "number" == typeof t[1]
}

function nw(t) {
    return nT(t) || "number" == typeof t || t instanceof Date
}

function nO(t, e) {
    var n = [t[0] + e[0], t[1] + e[1]];
    return n[1] >= 1e9 && (n[1] -= 1e9, n[0] += 1), n
}
var nS = "exception.type",
    nR = "exception.message",
    nL = "exception.stacktrace",
    nA = "http.method",
    nP = "http.url",
    nC = "http.host",
    nN = "http.scheme",
    nx = "http.status_code",
    nI = "http.user_agent",
    nD = function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                }
            }
        };
        throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    nM = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, i, o = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    },
    nk = function(t, e, n) {
        if (n || 2 == arguments.length)
            for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
        return t.concat(r || Array.prototype.slice.call(e))
    },
    nU = function() {
        function t(t, e, n, r, i, o, a, s, u, c) {
            void 0 === a && (a = []), this.attributes = {}, this.links = [], this.events = [], this._droppedAttributesCount = 0, this._droppedEventsCount = 0, this._droppedLinksCount = 0, this.status = {
                code: iN.UNSET
            }, this.endTime = [0, 0], this._ended = !1, this._duration = [-1, -1], this.name = n, this._spanContext = r, this.parentSpanId = o, this.kind = i, this.links = a;
            var l = Date.now();
            this._performanceStartTime = nv.now(), this._performanceOffset = l - (this._performanceStartTime + ng()), this._startTimeProvided = null != s, this.startTime = this._getTime(null != s ? s : l), this.resource = t.resource, this.instrumentationLibrary = t.instrumentationLibrary, this._spanLimits = t.getSpanLimits(), this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0, null != c && this.setAttributes(c), this._spanProcessor = t.getActiveSpanProcessor(), this._spanProcessor.onStart(this, e)
        }
        return t.prototype.spanContext = function() {
            return this._spanContext
        }, t.prototype.setAttribute = function(t, e) {
            return null == e || this._isSpanEnded() || (0 === t.length ? tm.warn("Invalid attribute key: " + t) : nh(e) ? Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, t) ? this._droppedAttributesCount++ : this.attributes[t] = this._truncateToSize(e) : tm.warn("Invalid attribute value set for key: " + t)), this
        }, t.prototype.setAttributes = function(t) {
            var e, n;
            try {
                for (var r = nD(Object.entries(t)), i = r.next(); !i.done; i = r.next()) {
                    var o = nM(i.value, 2),
                        a = o[0],
                        s = o[1];
                    this.setAttribute(a, s)
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    i && !i.done && (n = r.return) && n.call(r)
                } finally {
                    if (e) throw e.error
                }
            }
            return this
        }, t.prototype.addEvent = function(t, e, n) {
            if (this._isSpanEnded()) return this;
            if (0 === this._spanLimits.eventCountLimit) return tm.warn("No events allowed."), this._droppedEventsCount++, this;
            this.events.length >= this._spanLimits.eventCountLimit && (0 === this._droppedEventsCount && tm.debug("Dropping extra events."), this.events.shift(), this._droppedEventsCount++), nw(e) && (nw(n) || (n = e), e = void 0);
            var r = nd(e);
            return this.events.push({
                name: t,
                attributes: r,
                time: this._getTime(n),
                droppedAttributesCount: 0
            }), this
        }, t.prototype.addLink = function(t) {
            return this.links.push(t), this
        }, t.prototype.addLinks = function(t) {
            var e;
            return (e = this.links).push.apply(e, nk([], nM(t), !1)), this
        }, t.prototype.setStatus = function(t) {
            return this._isSpanEnded() || (this.status = t), this
        }, t.prototype.updateName = function(t) {
            return this._isSpanEnded() || (this.name = t), this
        }, t.prototype.end = function(t) {
            var e, n, r, i;
            if (this._isSpanEnded()) {
                tm.error(this.name + " " + this._spanContext.traceId + "-" + this._spanContext.spanId + " - You can only call end() on a span once.");
                return
            }
            this._ended = !0, this.endTime = this._getTime(t), this._duration = (e = this.startTime, r = (n = this.endTime)[0] - e[0], (i = n[1] - e[1]) < 0 && (r -= 1, i += 1e9), [r, i]), this._duration[0] < 0 && (tm.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime), this.endTime = this.startTime.slice(), this._duration = [0, 0]), this._droppedEventsCount > 0 && tm.warn("Dropped " + this._droppedEventsCount + " events because eventCountLimit reached"), this._spanProcessor.onEnd(this)
        }, t.prototype._getTime = function(t) {
            if ("number" == typeof t && t < nv.now()) return ny(t + this._performanceOffset);
            if ("number" == typeof t) return nm(t);
            if (t instanceof Date) return nm(t.getTime());
            if (nT(t)) return t;
            if (this._startTimeProvided) return nm(Date.now());
            var e = nv.now() - this._performanceStartTime;
            return nO(this.startTime, nm(e))
        }, t.prototype.isRecording = function() {
            return !1 === this._ended
        }, t.prototype.recordException = function(t, e) {
            var n = {};
            "string" == typeof t ? n[nR] = t : t && (t.code ? n[nS] = t.code.toString() : t.name && (n[nS] = t.name), t.message && (n[nR] = t.message), t.stack && (n[nL] = t.stack)), n[nS] || n[nR] ? this.addEvent("exception", n, e) : tm.warn("Failed to record an exception " + t)
        }, Object.defineProperty(t.prototype, "duration", {
            get: function() {
                return this._duration
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ended", {
            get: function() {
                return this._ended
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "droppedAttributesCount", {
            get: function() {
                return this._droppedAttributesCount
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "droppedEventsCount", {
            get: function() {
                return this._droppedEventsCount
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "droppedLinksCount", {
            get: function() {
                return this._droppedLinksCount
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype._isSpanEnded = function() {
            return this._ended && tm.warn("Can not execute the operation on ended Span {traceId: " + this._spanContext.traceId + ", spanId: " + this._spanContext.spanId + "}"), this._ended
        }, t.prototype._truncateToLimitUtil = function(t, e) {
            return t.length <= e ? t : t.substr(0, e)
        }, t.prototype._truncateToSize = function(t) {
            var e = this,
                n = this._attributeValueLengthLimit;
            return n <= 0 ? (tm.warn("Attribute value limit must be positive, got " + n), t) : "string" == typeof t ? this._truncateToLimitUtil(t, n) : Array.isArray(t) ? t.map(function(t) {
                return "string" == typeof t ? e._truncateToLimitUtil(t, n) : t
            }) : t
        }, t
    }(),
    nj = function() {
        function t(t) {
            var e, n, r, i;
            this._root = t.root, this._root || (eM(Error("ParentBasedSampler must have a root sampler configured")), this._root = new eb), this._remoteParentSampled = null !== (e = t.remoteParentSampled) && void 0 !== e ? e : new eb, this._remoteParentNotSampled = null !== (n = t.remoteParentNotSampled) && void 0 !== n ? n : new ey, this._localParentSampled = null !== (r = t.localParentSampled) && void 0 !== r ? r : new eb, this._localParentNotSampled = null !== (i = t.localParentNotSampled) && void 0 !== i ? i : new ey
        }
        return t.prototype.shouldSample = function(t, e, n, r, i, o) {
            var a = ee.getSpanContext(t);
            return a && ta(a) ? a.isRemote ? a.traceFlags & ix.SAMPLED ? this._remoteParentSampled.shouldSample(t, e, n, r, i, o) : this._remoteParentNotSampled.shouldSample(t, e, n, r, i, o) : a.traceFlags & ix.SAMPLED ? this._localParentSampled.shouldSample(t, e, n, r, i, o) : this._localParentNotSampled.shouldSample(t, e, n, r, i, o) : this._root.shouldSample(t, e, n, r, i, o)
        }, t.prototype.toString = function() {
            return "ParentBased{root=" + this._root.toString() + ", remoteParentSampled=" + this._remoteParentSampled.toString() + ", remoteParentNotSampled=" + this._remoteParentNotSampled.toString() + ", localParentSampled=" + this._localParentSampled.toString() + ", localParentNotSampled=" + this._localParentNotSampled.toString() + "}"
        }, t
    }(),
    nB = eI(),
    nF = ik.AlwaysOn;

function nH() {
    return {
        sampler: nV(nB),
        forceFlushTimeoutMillis: 3e4,
        generalLimits: {
            attributeValueLengthLimit: eI().OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
            attributeCountLimit: eI().OTEL_ATTRIBUTE_COUNT_LIMIT
        },
        spanLimits: {
            attributeValueLengthLimit: eI().OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
            attributeCountLimit: eI().OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
            linkCountLimit: eI().OTEL_SPAN_LINK_COUNT_LIMIT,
            eventCountLimit: eI().OTEL_SPAN_EVENT_COUNT_LIMIT,
            attributePerEventCountLimit: eI().OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
            attributePerLinkCountLimit: eI().OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT
        }
    }
}

function nV(t) {
    switch (void 0 === t && (t = eI()), t.OTEL_TRACES_SAMPLER) {
        case ik.AlwaysOn:
            return new eb;
        case ik.AlwaysOff:
            return new ey;
        case ik.ParentBasedAlwaysOn:
            return new nj({
                root: new eb
            });
        case ik.ParentBasedAlwaysOff:
            return new nj({
                root: new ey
            });
        case ik.TraceIdRatio:
            return new eH(nG(t));
        case ik.ParentBasedTraceIdRatio:
            return new nj({
                root: new eH(nG(t))
            });
        default:
            return tm.error('OTEL_TRACES_SAMPLER value "' + t.OTEL_TRACES_SAMPLER + " invalid, defaulting to " + nF + '".'), new eb
    }
}

function nG(t) {
    if (void 0 === t.OTEL_TRACES_SAMPLER_ARG || "" === t.OTEL_TRACES_SAMPLER_ARG) return tm.error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to 1."), 1;
    var e = Number(t.OTEL_TRACES_SAMPLER_ARG);
    return isNaN(e) ? (tm.error("OTEL_TRACES_SAMPLER_ARG=" + t.OTEL_TRACES_SAMPLER_ARG + " was given, but it is invalid, defaulting to 1."), 1) : e < 0 || e > 1 ? (tm.error("OTEL_TRACES_SAMPLER_ARG=" + t.OTEL_TRACES_SAMPLER_ARG + " was given, but it is out of range ([0..1]), defaulting to 1."), 1) : e
}
var nX = function() {
        this.generateTraceId = nq(16), this.generateSpanId = nq(8)
    },
    nz = Array(32);

function nq(t) {
    return function() {
        for (var e = 0; e < 2 * t; e++) nz[e] = Math.floor(16 * Math.random()) + 48, nz[e] >= 58 && (nz[e] += 39);
        return String.fromCharCode.apply(null, nz.slice(0, 2 * t))
    }
}
var n$ = function() {
        function t(t, e, n) {
            this._tracerProvider = n;
            var r, i, o, a = (r = {
                sampler: nV()
            }, (o = Object.assign({}, i = nH(), r, e)).generalLimits = Object.assign({}, i.generalLimits, e.generalLimits || {}), o.spanLimits = Object.assign({}, i.spanLimits, e.spanLimits || {}), o);
            this._sampler = a.sampler, this._generalLimits = a.generalLimits, this._spanLimits = a.spanLimits, this._idGenerator = e.idGenerator || new nX, this.resource = n.resource, this.instrumentationLibrary = t
        }
        return t.prototype.startSpan = function(t, e, n) {
            void 0 === e && (e = {}), void 0 === n && (n = tv.active()), e.root && (n = ee.deleteSpan(n));
            var r, i, o, a, s, u, c = ee.getSpan(n);
            if (eU(n)) {
                tm.debug("Instrumentation suppressed, returning Noop Span");
                var l = ee.wrapSpanContext(te);
                return l
            }
            var p = null == c ? void 0 : c.spanContext(),
                f = this._idGenerator.generateSpanId();
            p && ee.isSpanContextValid(p) ? (a = p.traceId, s = p.traceState, u = p.spanId) : a = this._idGenerator.generateTraceId();
            var d = null !== (r = e.kind) && void 0 !== r ? r : iC.INTERNAL,
                h = (null !== (i = e.links) && void 0 !== i ? i : []).map(function(t) {
                    return {
                        context: t.context,
                        attributes: nd(t.attributes)
                    }
                }),
                _ = nd(e.attributes),
                v = this._sampler.shouldSample(n, a, t, d, _, h);
            s = null !== (o = v.traceState) && void 0 !== o ? o : s;
            var m = {
                traceId: a,
                spanId: f,
                traceFlags: v.decision === iP.RECORD_AND_SAMPLED ? ix.SAMPLED : ix.NONE,
                traceState: s
            };
            if (v.decision === iP.NOT_RECORD) {
                tm.debug("Recording is off, propagating context in a non-recording span");
                var l = ee.wrapSpanContext(m);
                return l
            }
            var g = nd(Object.assign(_, v.attributes));
            return new nU(this, n, t, m, d, u, h, e.startTime, void 0, g)
        }, t.prototype.startActiveSpan = function(t, e, n, r) {
            if (!(arguments.length < 2)) {
                2 == arguments.length ? a = e : 3 == arguments.length ? (i = e, a = n) : (i = e, o = n, a = r);
                var i, o, a, s = null != o ? o : tv.active(),
                    u = this.startSpan(t, i, s),
                    c = ee.setSpan(s, u);
                return tv.with(c, a, void 0, u)
            }
        }, t.prototype.getGeneralLimits = function() {
            return this._generalLimits
        }, t.prototype.getSpanLimits = function() {
            return this._spanLimits
        }, t.prototype.getActiveSpanProcessor = function() {
            return this._tracerProvider.getActiveSpanProcessor()
        }, t
    }(),
    nK = function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                }
            }
        };
        throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    nW = function() {
        function t(t) {
            this._spanProcessors = t
        }
        return t.prototype.forceFlush = function() {
            var t, e, n = [];
            try {
                for (var r = nK(this._spanProcessors), i = r.next(); !i.done; i = r.next()) {
                    var o = i.value;
                    n.push(o.forceFlush())
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    i && !i.done && (e = r.return) && e.call(r)
                } finally {
                    if (t) throw t.error
                }
            }
            return new Promise(function(t) {
                Promise.all(n).then(function() {
                    t()
                }).catch(function(e) {
                    eM(e || Error("MultiSpanProcessor: forceFlush failed")), t()
                })
            })
        }, t.prototype.onStart = function(t, e) {
            var n, r;
            try {
                for (var i = nK(this._spanProcessors), o = i.next(); !o.done; o = i.next()) o.value.onStart(t, e)
            } catch (t) {
                n = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (r = i.return) && r.call(i)
                } finally {
                    if (n) throw n.error
                }
            }
        }, t.prototype.onEnd = function(t) {
            var e, n;
            try {
                for (var r = nK(this._spanProcessors), i = r.next(); !i.done; i = r.next()) i.value.onEnd(t)
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    i && !i.done && (n = r.return) && n.call(r)
                } finally {
                    if (e) throw e.error
                }
            }
        }, t.prototype.shutdown = function() {
            var t, e, n = [];
            try {
                for (var r = nK(this._spanProcessors), i = r.next(); !i.done; i = r.next()) {
                    var o = i.value;
                    n.push(o.shutdown())
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    i && !i.done && (e = r.return) && e.call(r)
                } finally {
                    if (t) throw t.error
                }
            }
            return new Promise(function(t, e) {
                Promise.all(n).then(function() {
                    t()
                }, e)
            })
        }, t
    }(),
    nZ = function() {
        function t() {}
        return t.prototype.onStart = function(t, e) {}, t.prototype.onEnd = function(t) {}, t.prototype.shutdown = function() {
            return Promise.resolve()
        }, t.prototype.forceFlush = function() {
            return Promise.resolve()
        }, t
    }();
(ib = iU || (iU = {}))[ib.resolved = 0] = "resolved", ib[ib.timeout = 1] = "timeout", ib[ib.error = 2] = "error", ib[ib.unresolved = 3] = "unresolved";
var nY = function() {
        function t(t) {
            void 0 === t && (t = {}), this._registeredSpanProcessors = [], this._tracers = new Map;
            var e, n, r, i, o, a, s, u, c, l, p, f, d, h, _, v, m = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = t.shift(), r = new WeakMap; t.length > 0;) n = function t(e, n, r, i) {
                    if (void 0 === r && (r = 0), !(r > 20)) {
                        if (r++, e3(e) || e3(n) || e1(n)) o = eQ(n);
                        else if (e0(e)) {
                            if (o = e.slice(), e0(n))
                                for (var o, a = 0, s = n.length; a < s; a++) o.push(eQ(n[a]));
                            else if (e2(n))
                                for (var u = Object.keys(n), a = 0, s = u.length; a < s; a++) {
                                    var c = u[a];
                                    o[c] = eQ(n[c])
                                }
                        } else if (e2(e)) {
                            if (e2(n)) {
                                if (!(eY(e) && eY(n))) return n;
                                o = Object.assign({}, e);
                                for (var u = Object.keys(n), a = 0, s = u.length; a < s; a++) {
                                    var c = u[a],
                                        l = n[c];
                                    if (e3(l)) void 0 === l ? delete o[c] : o[c] = l;
                                    else {
                                        var p = o[c];
                                        if (eJ(e, c, i) || eJ(n, c, i)) delete o[c];
                                        else {
                                            if (e2(p) && e2(l)) {
                                                var f = i.get(p) || [],
                                                    d = i.get(l) || [];
                                                f.push({
                                                    obj: e,
                                                    key: c
                                                }), d.push({
                                                    obj: n,
                                                    key: c
                                                }), i.set(p, f), i.set(l, d)
                                            }
                                            o[c] = t(o[c], l, r, i)
                                        }
                                    }
                                }
                            } else o = n
                        }
                        return o
                    }
                }(n, t.shift(), 0, r);
                return n
            }({}, nH(), (h = Object.assign({}, (e = t).spanLimits), _ = eN(ex), h.attributeCountLimit = null !== (s = null !== (a = null !== (o = null !== (r = null === (n = e.spanLimits) || void 0 === n ? void 0 : n.attributeCountLimit) && void 0 !== r ? r : null === (i = e.generalLimits) || void 0 === i ? void 0 : i.attributeCountLimit) && void 0 !== o ? o : _.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) && void 0 !== a ? a : _.OTEL_ATTRIBUTE_COUNT_LIMIT) && void 0 !== s ? s : 128, h.attributeValueLengthLimit = null !== (d = null !== (f = null !== (p = null !== (c = null === (u = e.spanLimits) || void 0 === u ? void 0 : u.attributeValueLengthLimit) && void 0 !== c ? c : null === (l = e.generalLimits) || void 0 === l ? void 0 : l.attributeValueLengthLimit) && void 0 !== p ? p : _.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== f ? f : _.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== d ? d : eA, Object.assign({}, e, {
                spanLimits: h
            })));
            this.resource = null !== (v = m.resource) && void 0 !== v ? v : e_.empty(), this.resource = e_.default().merge(this.resource), this._config = Object.assign({}, m, {
                resource: this.resource
            });
            var g = this._buildExporterFromEnv();
            if (void 0 !== g) {
                var y = new eF(g);
                this.activeSpanProcessor = y
            } else this.activeSpanProcessor = new nZ
        }
        return t.prototype.getTracer = function(t, e, n) {
            var r = t + "@" + (e || "") + ":" + ((null == n ? void 0 : n.schemaUrl) || "");
            return this._tracers.has(r) || this._tracers.set(r, new n$({
                name: t,
                version: e,
                schemaUrl: null == n ? void 0 : n.schemaUrl
            }, this._config, this)), this._tracers.get(r)
        }, t.prototype.addSpanProcessor = function(t) {
            0 === this._registeredSpanProcessors.length && this.activeSpanProcessor.shutdown().catch(function(t) {
                return tm.error("Error while trying to shutdown current span processor", t)
            }), this._registeredSpanProcessors.push(t), this.activeSpanProcessor = new nW(this._registeredSpanProcessors)
        }, t.prototype.getActiveSpanProcessor = function() {
            return this.activeSpanProcessor
        }, t.prototype.register = function(t) {
            void 0 === t && (t = {}), ee.setGlobalTracerProvider(this), void 0 === t.propagator && (t.propagator = this._buildPropagatorFromEnv()), t.contextManager && tv.setGlobalContextManager(t.contextManager), t.propagator && tZ.setGlobalPropagator(t.propagator)
        }, t.prototype.forceFlush = function() {
            var t = this._config.forceFlushTimeoutMillis,
                e = this._registeredSpanProcessors.map(function(e) {
                    return new Promise(function(n) {
                        var r, i = setTimeout(function() {
                            n(Error("Span processor did not completed within timeout period of " + t + " ms")), r = iU.timeout
                        }, t);
                        e.forceFlush().then(function() {
                            clearTimeout(i), r !== iU.timeout && n(r = iU.resolved)
                        }).catch(function(t) {
                            clearTimeout(i), r = iU.error, n(t)
                        })
                    })
                });
            return new Promise(function(t, n) {
                Promise.all(e).then(function(e) {
                    var r = e.filter(function(t) {
                        return t !== iU.resolved
                    });
                    r.length > 0 ? n(r) : t()
                }).catch(function(t) {
                    return n([t])
                })
            })
        }, t.prototype.shutdown = function() {
            return this.activeSpanProcessor.shutdown()
        }, t.prototype._getPropagator = function(t) {
            var e;
            return null === (e = this.constructor._registeredPropagators.get(t)) || void 0 === e ? void 0 : e()
        }, t.prototype._getSpanExporter = function(t) {
            var e;
            return null === (e = this.constructor._registeredExporters.get(t)) || void 0 === e ? void 0 : e()
        }, t.prototype._buildPropagatorFromEnv = function() {
            var t = this,
                e = Array.from(new Set(eI().OTEL_PROPAGATORS)),
                n = e.map(function(e) {
                    var n = t._getPropagator(e);
                    return n || tm.warn('Propagator "' + e + '" requested through environment variable is unavailable.'), n
                }).reduce(function(t, e) {
                    return e && t.push(e), t
                }, []);
            return 0 === n.length ? void 0 : 1 === e.length ? n[0] : new eG({
                propagators: n
            })
        }, t.prototype._buildExporterFromEnv = function() {
            var t = eI().OTEL_TRACES_EXPORTER;
            if ("none" !== t && "" !== t) {
                var e = this._getSpanExporter(t);
                return e || tm.error('Exporter "' + t + '" requested through environment variable is unavailable.'), e
            }
        }, t._registeredPropagators = new Map([
            ["tracecontext", function() {
                return new nl
            }],
            ["baggage", function() {
                return new ne
            }]
        ]), t._registeredExporters = new Map, t
    }(),
    nQ = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, i, o = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    },
    nJ = function(t, e, n) {
        if (n || 2 == arguments.length)
            for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
        return t.concat(r || Array.prototype.slice.call(e))
    },
    n0 = function() {
        function t() {
            this._enabled = !1, this._currentContext = Z
        }
        return t.prototype._bindFunction = function(t, e) {
            void 0 === t && (t = Z);
            var n = this,
                r = function() {
                    for (var r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
                    return n.with(t, function() {
                        return e.apply(r, i)
                    })
                };
            return Object.defineProperty(r, "length", {
                enumerable: !1,
                configurable: !0,
                writable: !1,
                value: e.length
            }), r
        }, t.prototype.active = function() {
            return this._currentContext
        }, t.prototype.bind = function(t, e) {
            return (void 0 === t && (t = this.active()), "function" == typeof e) ? this._bindFunction(t, e) : e
        }, t.prototype.disable = function() {
            return this._currentContext = Z, this._enabled = !1, this
        }, t.prototype.enable = function() {
            return this._enabled || (this._enabled = !0, this._currentContext = Z), this
        }, t.prototype.with = function(t, e, n) {
            for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
            var o = this._currentContext;
            this._currentContext = t || Z;
            try {
                return e.call.apply(e, nJ([n], nQ(r), !1))
            } finally {
                this._currentContext = o
            }
        }, t
    }(),
    n1 = (iE = function(t, e) {
        return (iE = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }
        iE(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    n2 = function(t) {
        function e(e) {
            void 0 === e && (e = {});
            var n = t.call(this, e) || this;
            if (e.contextManager) throw "contextManager should be defined in register method not in constructor";
            if (e.propagator) throw "propagator should be defined in register method not in constructor";
            return n
        }
        return n1(e, t), e.prototype.register = function(e) {
            void 0 === e && (e = {}), void 0 === e.contextManager && (e.contextManager = new n0), e.contextManager && e.contextManager.enable(), t.prototype.register.call(this, e)
        }, e
    }(nY),
    n3 = {
        PLATFORM: "browser.platform",
        BRANDS: "browser.brands",
        MOBILE: "browser.mobile",
        LANGUAGE: "browser.language",
        USER_AGENT: "browser.user_agent"
    },
    n4 = function(t, e) {
        var n, r, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
                return function(o) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = e.call(t, a)
                    } catch (t) {
                        o = [6, t], r = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    },
    n6 = new(function() {
        function t() {}
        return t.prototype.detect = function(t) {
            var e, n, r, i;
            return e = this, n = void 0, r = void 0, i = function() {
                var e;
                return n4(this, function(n) {
                    var r, i;
                    return "undefined" != typeof navigator ? (r = {}, (i = navigator.userAgentData) ? (r[n3.PLATFORM] = i.platform, r[n3.BRANDS] = i.brands.map(function(t) {
                        return t.brand + " " + t.version
                    }), r[n3.MOBILE] = i.mobile) : r[n3.USER_AGENT] = navigator.userAgent, r[n3.LANGUAGE] = navigator.language, e = r, [2, this._getResourceAttributes(e, t)]) : [2, e_.empty()]
                })
            }, new(r || (r = Promise))(function(t, o) {
                function a(t) {
                    try {
                        u(i.next(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function s(t) {
                    try {
                        u(i.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function u(e) {
                    var n;
                    e.done ? t(e.value) : ((n = e.value) instanceof r ? n : new r(function(t) {
                        t(n)
                    })).then(a, s)
                }
                u((i = i.apply(e, n || [])).next())
            })
        }, t.prototype._getResourceAttributes = function(t, e) {
            return t[n3.USER_AGENT] || t[n3.PLATFORM] ? new e_(t) : (tm.debug("BrowserDetector failed: Unable to find required browser resources. "), e_.empty())
        }, t
    }()),
    n5 = L("86Wyx"),
    n9 = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, i, o = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    };

function n8(t, e) {
    return tm.warn("Timeout must be greater than 0", t), e
}
var n7 = function() {
        function t(t) {
            var e, n, r;
            void 0 === t && (t = {}), this._sendingPromises = [], this.url = this.getDefaultUrl(t), "string" == typeof t.hostname && (this.hostname = t.hostname), this.shutdown = this.shutdown.bind(this), this._shutdownOnce = new eO(this._shutdown, this), this._concurrencyLimit = "number" == typeof t.concurrencyLimit ? t.concurrencyLimit : 30, this.timeoutMillis = "number" != typeof(e = t.timeoutMillis) ? (r = Number(null !== (n = eI().OTEL_EXPORTER_OTLP_TRACES_TIMEOUT) && void 0 !== n ? n : eI().OTEL_EXPORTER_OTLP_TIMEOUT)) <= 0 ? n8(r, 1e4) : r : e <= 0 ? n8(e, 1e4) : e, this.onInit(t)
        }
        return t.prototype.export = function(t, e) {
            if (this._shutdownOnce.isCalled) {
                e({
                    code: iM.FAILED,
                    error: Error("Exporter has been shutdown")
                });
                return
            }
            if (this._sendingPromises.length >= this._concurrencyLimit) {
                e({
                    code: iM.FAILED,
                    error: Error("Concurrent export limit reached")
                });
                return
            }
            this._export(t).then(function() {
                e({
                    code: iM.SUCCESS
                })
            }).catch(function(t) {
                e({
                    code: iM.FAILED,
                    error: t
                })
            })
        }, t.prototype._export = function(t) {
            var e = this;
            return new Promise(function(n, r) {
                try {
                    tm.debug("items to be sent", t), e.send(t, n, r)
                } catch (t) {
                    r(t)
                }
            })
        }, t.prototype.shutdown = function() {
            return this._shutdownOnce.call()
        }, t.prototype.forceFlush = function() {
            return Promise.all(this._sendingPromises).then(function() {})
        }, t.prototype._shutdown = function() {
            return tm.debug("shutdown started"), this.onShutdown(), this.forceFlush()
        }, t
    }(),
    rt = (iT = function(t, e) {
        return (iT = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }
        iT(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    re = function(t) {
        function e(e, n, r) {
            var i = t.call(this, e) || this;
            return i.name = "OTLPExporterError", i.data = r, i.code = n, i
        }
        return rt(e, t), e
    }(Error),
    rn = function() {
        return (rn = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }).apply(this, arguments)
    },
    rr = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, i, o = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    },
    ri = (iw = function(t, e) {
        return (iw = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }
        iw(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    ro = function() {
        return (ro = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }).apply(this, arguments)
    },
    ra = function(t) {
        function e(e, n, r) {
            void 0 === e && (e = {});
            var i, o, a = t.call(this, e) || this;
            return (a._useXHR = !1, a._serializer = n, a._contentType = r, a._useXHR = !!e.headers || "function" != typeof navigator.sendBeacon, a._useXHR) ? a._headers = Object.assign({}, (void 0 === (i = e.headers) && (i = {}), o = {}, Object.entries(i).forEach(function(t) {
                var e = n9(t, 2),
                    n = e[0],
                    r = e[1];
                void 0 !== r ? o[n] = String(r) : tm.warn('Header "' + n + '" has invalid value (' + r + ") and will be ignored")
            }), o), e6.parseKeyPairsIntoRecord(eI().OTEL_EXPORTER_OTLP_HEADERS)) : a._headers = {}, a
        }
        return ri(e, t), e.prototype.onInit = function() {}, e.prototype.onShutdown = function() {}, e.prototype.send = function(t, e, n) {
            var r, i = this;
            if (this._shutdownOnce.isCalled) {
                tm.debug("Shutdown already started. Cannot send objects");
                return
            }
            var o = null !== (r = this._serializer.serializeRequest(t)) && void 0 !== r ? r : new Uint8Array,
                a = new Promise(function(t, e) {
                    var n, r, a, s, u, c, l, p, f, d;
                    i._useXHR ? (n = i.url, r = ro(ro({}, i._headers), {
                        "Content-Type": i._contentType
                    }), a = i.timeoutMillis, c = !1, l = setTimeout(function() {
                        clearTimeout(s), c = !0, u.readyState === XMLHttpRequest.DONE ? e(new re("Request Timeout")) : u.abort()
                    }, a), (p = function(i, a) {
                        void 0 === i && (i = 5), void 0 === a && (a = 1e3), (u = new XMLHttpRequest).open("POST", n), Object.entries(rn(rn({}, {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        }), r)).forEach(function(t) {
                            var e = rr(t, 2),
                                n = e[0],
                                r = e[1];
                            u.setRequestHeader(n, r)
                        }), u.send(o), u.onreadystatechange = function() {
                            u.readyState === XMLHttpRequest.DONE && !1 === c && (u.status >= 200 && u.status <= 299 ? (tm.debug("xhr success", o), t(), clearTimeout(l), clearTimeout(s)) : u.status && [429, 502, 503, 504].includes(u.status) && i > 0 ? (a *= 1.5, s = setTimeout(function() {
                                p(i - 1, a)
                            }, u.getResponseHeader("Retry-After") ? function(t) {
                                if (null == t) return -1;
                                var e = Number.parseInt(t, 10);
                                if (Number.isInteger(e)) return e > 0 ? 1e3 * e : -1;
                                var n = new Date(t).getTime() - Date.now();
                                return n >= 0 ? n : 0
                            }(u.getResponseHeader("Retry-After")) : Math.round(Math.random() * (5e3 - a) + a))) : (e(new re("Failed to export with XHR (status: " + u.status + ")", u.status)), clearTimeout(l), clearTimeout(s)))
                        }, u.onabort = function() {
                            c && e(new re("Request Timeout")), clearTimeout(l), clearTimeout(s)
                        }, u.onerror = function() {
                            c && e(new re("Request Timeout")), clearTimeout(l), clearTimeout(s)
                        }
                    })()) : (f = i.url, d = {
                        type: i._contentType
                    }, navigator.sendBeacon(f, new Blob([o], d)) ? (tm.debug("sendBeacon - can send", o), t()) : e(new re("sendBeacon - cannot send " + o)))
                }).then(e, n);
            this._sendingPromises.push(a);
            var s = function() {
                var t = i._sendingPromises.indexOf(a);
                i._sendingPromises.splice(t, 1)
            };
            a.then(s, s)
        }, e
    }(n7),
    rs = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, i, o = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    };

function ru(t) {
    return Object.keys(t).map(function(e) {
        return function t(e, n) {
            return {
                key: e,
                value: function e(n) {
                    var r = typeof n;
                    return "string" === r ? {
                        stringValue: n
                    } : "number" === r ? Number.isInteger(n) ? {
                        intValue: n
                    } : {
                        doubleValue: n
                    } : "boolean" === r ? {
                        boolValue: n
                    } : n instanceof Uint8Array ? {
                        bytesValue: n
                    } : Array.isArray(n) ? {
                        arrayValue: {
                            values: n.map(e)
                        }
                    } : "object" === r && null != n ? {
                        kvlistValue: {
                            values: Object.entries(n).map(function(e) {
                                var n = rs(e, 2);
                                return t(n[0], n[1])
                            })
                        }
                    } : {}
                }(n)
            }
        }(e, t[e])
    })
}

function rc(t) {
    return t >= 48 && t <= 57 ? t - 48 : t >= 97 && t <= 102 ? t - 87 : t - 55
}

function rl(t) {
    for (var e = new Uint8Array(t.length / 2), n = 0, r = 0; r < t.length; r += 2) {
        var i = rc(t.charCodeAt(r)),
            o = rc(t.charCodeAt(r + 1));
        e[n++] = i << 4 | o
    }
    return e
}

function rp(t) {
    var e = BigInt(1e9);
    return BigInt(t[0]) * e + BigInt(t[1])
}

function rf(t) {
    var e;
    return {
        low: Number(BigInt.asUintN(32, e = rp(t))),
        high: Number(BigInt.asUintN(32, e >> BigInt(32)))
    }
}
var rd = "undefined" != typeof BigInt ? function(t) {
    return rp(t).toString()
} : nE;

function rh(t) {
    return t
}

function r_(t) {
    if (void 0 !== t) return rl(t)
}
var rv = {
        encodeHrTime: rf,
        encodeSpanContext: rl,
        encodeOptionalSpanContext: r_
    },
    rm = function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && r >= t.length && (t = void 0), {
                    value: t && t[r++],
                    done: !t
                }
            }
        };
        throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    rg = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, i, o = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = o.next()).done;) a.push(r.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = o.return) && n.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return a
    };
(iO = ij || (ij = {}))[iO.DELTA = 0] = "DELTA", iO[iO.CUMULATIVE = 1] = "CUMULATIVE", (iS = iB || (iB = {}))[iS.HISTOGRAM = 0] = "HISTOGRAM", iS[iS.EXPONENTIAL_HISTOGRAM = 1] = "EXPONENTIAL_HISTOGRAM", iS[iS.GAUGE = 2] = "GAUGE", iS[iS.SUM = 3] = "SUM";
var ry = {
        serializeRequest: function(t) {
            var e = {
                resourceSpans: function(t, e) {
                    for (var n = function(t) {
                            var e, n, r = new Map;
                            try {
                                for (var i = rm(t), o = i.next(); !o.done; o = i.next()) {
                                    var a = o.value,
                                        s = r.get(a.resource);
                                    s || (s = new Map, r.set(a.resource, s));
                                    var u = a.instrumentationLibrary.name + "@" + (a.instrumentationLibrary.version || "") + ":" + (a.instrumentationLibrary.schemaUrl || ""),
                                        c = s.get(u);
                                    c || (c = [], s.set(u, c)), c.push(a)
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    o && !o.done && (n = i.return) && n.call(i)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            return r
                        }(t), r = [], i = n.entries(), o = i.next(); !o.done;) {
                        for (var a = rg(o.value, 2), s = a[0], u = a[1], c = [], l = u.values(), p = l.next(); !p.done;) {
                            var f = p.value;
                            if (f.length > 0) {
                                var d, h = f.map(function(t) {
                                    return function(t, e) {
                                        var n, r = t.spanContext(),
                                            i = t.status;
                                        return {
                                            traceId: e.encodeSpanContext(r.traceId),
                                            spanId: e.encodeSpanContext(r.spanId),
                                            parentSpanId: e.encodeOptionalSpanContext(t.parentSpanId),
                                            traceState: null === (n = r.traceState) || void 0 === n ? void 0 : n.serialize(),
                                            name: t.name,
                                            kind: null == t.kind ? 0 : t.kind + 1,
                                            startTimeUnixNano: e.encodeHrTime(t.startTime),
                                            endTimeUnixNano: e.encodeHrTime(t.endTime),
                                            attributes: ru(t.attributes),
                                            droppedAttributesCount: t.droppedAttributesCount,
                                            events: t.events.map(function(t) {
                                                return {
                                                    attributes: t.attributes ? ru(t.attributes) : [],
                                                    name: t.name,
                                                    timeUnixNano: e.encodeHrTime(t.time),
                                                    droppedAttributesCount: t.droppedAttributesCount || 0
                                                }
                                            }),
                                            droppedEventsCount: t.droppedEventsCount,
                                            status: {
                                                code: i.code,
                                                message: i.message
                                            },
                                            links: t.links.map(function(t) {
                                                return function(t, e) {
                                                    var n;
                                                    return {
                                                        attributes: t.attributes ? ru(t.attributes) : [],
                                                        spanId: e.encodeSpanContext(t.context.spanId),
                                                        traceId: e.encodeSpanContext(t.context.traceId),
                                                        traceState: null === (n = t.context.traceState) || void 0 === n ? void 0 : n.serialize(),
                                                        droppedAttributesCount: t.droppedAttributesCount || 0
                                                    }
                                                }(t, e)
                                            }),
                                            droppedLinksCount: t.droppedLinksCount
                                        }
                                    }(t, e)
                                });
                                c.push({
                                    scope: {
                                        name: (d = f[0].instrumentationLibrary).name,
                                        version: d.version
                                    },
                                    spans: h,
                                    schemaUrl: f[0].instrumentationLibrary.schemaUrl
                                })
                            }
                            p = l.next()
                        }
                        var _ = {
                            resource: {
                                attributes: ru(s.attributes),
                                droppedAttributesCount: 0
                            },
                            scopeSpans: c,
                            schemaUrl: void 0
                        };
                        r.push(_), o = i.next()
                    }
                    return r
                }(t, function(t) {
                    if (void 0 === t) return rv;
                    var e, n, r = null === (e = t.useLongBits) || void 0 === e || e,
                        i = null !== (n = t.useHex) && void 0 !== n && n;
                    return {
                        encodeHrTime: r ? rf : rd,
                        encodeSpanContext: i ? rh : rl,
                        encodeOptionalSpanContext: i ? rh : r_
                    }
                }({
                    useHex: !0,
                    useLongBits: !1
                }))
            };
            return new TextEncoder().encode(JSON.stringify(e))
        },
        deserializeResponse: function(t) {
            return JSON.parse(new TextDecoder().decode(t))
        }
    },
    rb = (iR = function(t, e) {
        return (iR = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }
        iR(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    rE = "v1/traces",
    rT = "http://localhost:4318/" + rE,
    rw = function(t) {
        function e(e) {
            void 0 === e && (e = {});
            var n = t.call(this, e, ry, "application/json") || this;
            return n._headers = Object.assign(n._headers, e6.parseKeyPairsIntoRecord(eI().OTEL_EXPORTER_OTLP_TRACES_HEADERS)), n
        }
        return rb(e, t), e.prototype.getDefaultUrl = function(t) {
            var e;
            return "string" == typeof t.url ? t.url : eI().OTEL_EXPORTER_OTLP_TRACES_ENDPOINT.length > 0 ? function(t) {
                try {
                    var e = new URL(t);
                    return "" === e.pathname && (e.pathname = e.pathname + "/"), e.toString()
                } catch (e) {
                    return tm.warn("Could not parse export URL: '" + t + "'"), t
                }
            }(eI().OTEL_EXPORTER_OTLP_TRACES_ENDPOINT) : eI().OTEL_EXPORTER_OTLP_ENDPOINT.length > 0 ? ((e = eI().OTEL_EXPORTER_OTLP_ENDPOINT).endsWith("/") || (e += "/"), e + rE) : rT
        }, e
    }(ra),
    rO = {};

function rS(t) {
    return "function" == typeof t
}
var rR = console.error.bind(console);

function rL(t, e, n) {
    var r = !!t[e] && t.propertyIsEnumerable(e);
    Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: r,
        writable: !0,
        value: n
    })
}

function rA(t) {
    t && t.logger && (rS(t.logger) ? rR = t.logger : rR("new logger isn't a function, not replacing"))
}

function rP(t, e, n) {
    if (!t || !t[e]) {
        rR("no original function " + e + " to wrap");
        return
    }
    if (!n) {
        rR("no wrapper function"), rR(Error().stack);
        return
    }
    if (!rS(t[e]) || !rS(n)) {
        rR("original object and wrapper must be functions");
        return
    }
    var r = t[e],
        i = n(r, e);
    return rL(i, "__original", r), rL(i, "__unwrap", function() {
        t[e] === i && rL(t, e, r)
    }), rL(i, "__wrapped", !0), rL(t, e, i), i
}

function rC(t, e) {
    if (!t || !t[e]) {
        rR("no function to unwrap."), rR(Error().stack);
        return
    }
    if (t[e].__unwrap) return t[e].__unwrap();
    rR("no original to unwrap to -- has " + e + " already been unwrapped?")
}
rA.wrap = rP, rA.massWrap = function(t, e, n) {
    if (t) Array.isArray(t) || (t = [t]);
    else {
        rR("must provide one or more modules to patch"), rR(Error().stack);
        return
    }
    if (!(e && Array.isArray(e))) {
        rR("must provide one or more functions to wrap on modules");
        return
    }
    t.forEach(function(t) {
        e.forEach(function(e) {
            rP(t, e, n)
        })
    })
}, rA.unwrap = rC, rA.massUnwrap = function(t, e) {
    if (t) Array.isArray(t) || (t = [t]);
    else {
        rR("must provide one or more modules to patch"), rR(Error().stack);
        return
    }
    if (!(e && Array.isArray(e))) {
        rR("must provide one or more functions to unwrap on modules");
        return
    }
    t.forEach(function(t) {
        e.forEach(function(e) {
            rC(t, e)
        })
    })
}, rO = rA;
const rN = Array(32);
class rx {
    constructor() {
        this._idGenerator = function() {
            for (let t = 0; t < 32; t++) rN[t] = Math.floor(16 * Math.random()) + 48, rN[t] >= 58 && (rN[t] += 39);
            return String.fromCharCode.apply(null, rN.slice(0, 32))
        }, this._sessionId = this._idGenerator()
    }
    onStart(t) {
        t.setAttribute("session.id", this._sessionId)
    }
    onEnd() {}
    forceFlush() {
        return Promise.resolve()
    }
    shutdown() {
        return Promise.resolve()
    }
}
class rI {
    constructor(t = {}) {
        var e, n, r, i;
        if (this._resource = null !== (e = t.resource) && void 0 !== e ? e : new e_({}), this._resourceDetectors = null !== (n = t.resourceDetectors) && void 0 !== n ? n : [n6], this._serviceName = t.serviceName, this._autoDetectResources = null === (r = t.autoDetectResources) || void 0 === r || r, t.spanProcessor || t.traceExporter) {
            let e = {};
            t.sampler && (e.sampler = t.sampler), t.spanLimits && (e.spanLimits = t.spanLimits), t.idGenerator && (e.idGenerator = t.idGenerator);
            let n = null !== (i = t.spanProcessor) && void 0 !== i ? i : new eF(t.traceExporter);
            this._tracerProviderConfig = {
                tracerConfig: e,
                spanProcessor: n,
                contextManager: t.contextManager,
                textMapPropagator: t.textMapPropagator
            }
        }
        let o = [];
        t.instrumentations && (o = t.instrumentations), this._instrumentations = o
    }
    start() {
        var t, e, n, r, i, o, a, s, u;
        if (this._disabled) return;
        if (a = (r = {
                instrumentations: this._instrumentations
            }).tracerProvider || ee.getTracerProvider(), s = r.meterProvider || tB.getMeterProvider(), u = r.loggerProvider || ea.getLoggerProvider(), function(t, e, n, r) {
                for (var i = 0, o = t.length; i < o; i++) {
                    var a = t[i];
                    e && a.setTracerProvider(e), n && a.setMeterProvider(n), r && a.setLoggerProvider && a.setLoggerProvider(r), a.getConfig().enabled || a.enable()
                }
            }(null !== (o = null === (i = r.instrumentations) || void 0 === i ? void 0 : i.flat()) && void 0 !== o ? o : [], a, s, u), this._autoDetectResources) {
            let t = {
                detectors: this._resourceDetectors
            };
            this._resource = this._resource.merge(em(t))
        }
        this._resource = void 0 === this._serviceName ? this._resource : this._resource.merge(new e_({
            [es]: this._serviceName
        }));
        let c = new n2(Object.assign(Object.assign({}, null === (t = this._tracerProviderConfig) || void 0 === t ? void 0 : t.tracerConfig), {
            resource: this._resource
        }));
        this._tracerProvider = c, this._tracerProviderConfig && c.addSpanProcessor(this._tracerProviderConfig.spanProcessor), c.register({
            contextManager: null === (e = this._tracerProviderConfig) || void 0 === e ? void 0 : e.contextManager,
            propagator: null === (n = this._tracerProviderConfig) || void 0 === n ? void 0 : n.textMapPropagator
        }), c.addSpanProcessor(new rx)
    }
    getResourceAttributes() {
        return this._resource.attributes
    }
    shutdown() {
        let t = [];
        return this._tracerProvider && t.push(this._tracerProvider.shutdown()), Promise.all(t).then(() => {})
    }
}
const rD = "0.5.0",
    rM = {
        path: !0,
        hash: !0,
        hostname: !0,
        referrer: !0,
        url: !1,
        search: !1
    };

function rk(t, e) {
    if (t) return e
}
const rU = t => t <= 768 ? "small" : t > 768 && t <= 1024 ? "medium" : t > 1024 ? "large" : "unknown",
    rj = t => {
        var e;
        return null !== (e = null == t ? void 0 : t.effectiveType) && void 0 !== e ? e : "unknown"
    },
    rB = (t, e) => t || e ? t || "desktop" : "unknown",
    rF = t => {
        let e = new(n5 && n5.__esModule ? n5.default : n5)(t),
            {
                name: n,
                version: r
            } = e.getBrowser();
        return {
            browserName: null != n ? n : "unknown",
            browserVersion: null != r ? r : "unknown",
            deviceType: rB(e.getDevice().type, n)
        }
    };

function rH(t) {
    return t instanceof e_ ? t : new e_(t || {})
}
const rV = "v1/traces",
    rG = `https://api.honeycomb.io/${rV}`,
    rX = {
        apiKey: "",
        tracesApiKey: "",
        endpoint: rG,
        tracesEndpoint: rG,
        serviceName: "unknown_service",
        debug: !1,
        sampleRate: 1,
        skipOptionsValidation: !1,
        localVisualizations: !1,
        webVitalsInstrumentationConfig: {
            enabled: !0
        }
    },
    rz = t => `@honeycombio/opentelemetry-web: ${t}`,
    rq = /^[a-f0-9]*$/,
    r$ = /^hc[a-z]ic_[a-z0-9]*$/;

function rK(t) {
    if (null == t || 0 === t.length);
    else if (32 === t.length) return rq.test(t);
    else if (64 === t.length) return r$.test(t);
    return !1
}
const rW = t => {
        if (null == t ? void 0 : t.tracesEndpoint) return t.tracesEndpoint;
        if (null == t ? void 0 : t.endpoint) {
            var e;
            return (e = t.endpoint).endsWith(rV) || e.endsWith(`${rV}/`) ? e : e.endsWith("/") ? e + rV : e + "/" + rV
        }
        return rG
    },
    rZ = t => (null == t ? void 0 : t.tracesApiKey) || (null == t ? void 0 : t.apiKey),
    rY = t => "number" == typeof(null == t ? void 0 : t.sampleRate) && Number.isSafeInteger(null == t ? void 0 : t.sampleRate) && (null == t ? void 0 : t.sampleRate) >= 0 ? null == t ? void 0 : t.sampleRate : 1,
    rQ = rz("❌ Missing API Key. Set `apiKey` in HoneycombOptions. Telemetry will not be exported."),
    rJ = rz(`\u{274C} Missing Service Name. Set \`serviceName\` in HoneycombOptions. Defaulting to '${rX.serviceName}'`),
    r0 = rz("\uD83D\uDD15 Dataset is ignored in favor of service name."),
    r1 = rz("❌ Missing dataset. Specify either HONEYCOMB_DATASET environment variable or dataset in the options parameter."),
    r2 = rz("⏭️ Skipping options validation. To re-enable, set skipOptionsValidation option or HONEYCOMB_SKIP_OPTIONS_VALIDATION to false."),
    r3 = rz("\uD83D\uDD28 Default deterministic sampler has been overridden. Honeycomb requires a resource attribute called SampleRate to properly show weighted values. Non-deterministic sampleRate could lead to missing spans in Honeycomb. See our docs for more details. https://docs.honeycomb.io/getting-data-in/opentelemetry/node-distro/#sampling-without-the-honeycomb-sdk"),
    r4 = rz("\uD83D\uDD15 Disabling local visualizations - must have both service name and API key configured."),
    r6 = rz("\uD83D\uDD15 Failed to get proper auth response from Honeycomb. No local visualization available."),
    r5 = t => {
        if (null == t ? void 0 : t.skipOptionsValidation) {
            console.debug(r2);
            return
        }
        return (null == t ? void 0 : t.apiKey) || console.warn(rQ), (null == t ? void 0 : t.serviceName) || console.warn(rJ), (null == t ? void 0 : t.apiKey) && !rK(null == t ? void 0 : t.apiKey) && (null == t ? void 0 : t.dataset) && console.warn(r0), (null == t ? void 0 : t.apiKey) && rK(null == t ? void 0 : t.apiKey) && !(null == t ? void 0 : t.dataset) && console.warn(r1), (null == t ? void 0 : t.sampler) && console.debug(r3), t
    };
class r9 {
    constructor() {}
    onStart(t, e) {
        var n, r;
        (null !== (r = null === (n = tZ.getBaggage(e)) || void 0 === n ? void 0 : n.getAllEntries()) && void 0 !== r ? r : []).forEach(e => {
            t.setAttribute(e[0], e[1].value), tm.debug(`@honeycombio/opentelemetry-web: \u{1F6A8} Baggage in all outgoing headers: ${e[0]}=${e[1].value} `)
        })
    }
    onEnd() {}
    forceFlush() {
        return Promise.resolve()
    }
    shutdown() {
        return Promise.resolve()
    }
}
class r8 {
    constructor() {}
    onStart(t) {
        let {
            href: e,
            pathname: n,
            search: r,
            hash: i,
            hostname: o
        } = window.location;
        t.setAttributes({
            "browser.width": window.innerWidth,
            "browser.height": window.innerHeight,
            "page.hash": i,
            "page.url": e,
            "page.route": n,
            "page.hostname": o,
            "page.search": r,
            "url.path": n
        })
    }
    onEnd() {}
    forceFlush() {
        return Promise.resolve()
    }
    shutdown() {
        return Promise.resolve()
    }
}
class r7 {
    constructor(t) {
        this._exporters = t
    }
    export (t, e) {
        this._exporters.forEach(n => n.export(t, e)), e({
            code: iM.SUCCESS
        })
    }
    async shutdown() {
        let t = [];
        this._exporters.forEach(e => t.push(e.shutdown())), await Promise.all(t)
    }
}
class it {
    constructor(t, e) {
        if (this._traceUrl = "", !t || !e) {
            console.debug(r4);
            return
        }
        fetch("https://api.honeycomb.io/1/auth", {
            headers: {
                "x-honeycomb-team": e
            }
        }).then(t => {
            if (t.ok) return t.json();
            throw Error()
        }).then(n => {
            var r, i, o, a, s;
            if (null === (r = n.team) || void 0 === r ? void 0 : r.slug) {
                let r;
                this._traceUrl = (a = null === (i = n.team) || void 0 === i ? void 0 : i.slug, s = null === (o = n.environment) || void 0 === o ? void 0 : o.slug, r = `https://ui.honeycomb.io/${a}`, !rK(e) && s && (r += `/environments/${s}`), r += `/datasets/${t}/trace?trace_id`)
            } else throw Error()
        }).catch(() => {
            console.log(r6)
        })
    }
    export (t, e) {
        this._traceUrl && t.forEach(t => {
            t.parentSpanId || console.log(rz(`Honeycomb link: ${this._traceUrl}=${t.spanContext().traceId}`))
        }), e({
            code: iM.SUCCESS
        })
    }
    shutdown() {
        return Promise.resolve()
    }
}
const ie = t => {
    let e = new ir,
        n = [];
    return (null == t ? void 0 : t.localVisualizations) && n.push(function(t) {
        let e = rZ(t);
        return new it(null == t ? void 0 : t.serviceName, e)
    }(t)), (null == t ? void 0 : t.traceExporter) && n.push(null == t ? void 0 : t.traceExporter), e.addProcessor(new eF(new r7([function(t) {
        let e = rZ(t);
        return new rw({
            url: rW(t),
            headers: Object.assign({
                "x-honeycomb-team": e,
                "x-honeycomb-dataset": rK(e) ? null == t ? void 0 : t.dataset : void 0
            }, null == t ? void 0 : t.headers)
        })
    }(t), ...n]))), e.addProcessor(new r9), e.addProcessor(new r8), (null == t ? void 0 : t.spanProcessor) && e.addProcessor(null == t ? void 0 : t.spanProcessor), e
};
class ir {
    constructor() {
        this.spanProcessors = []
    }
    addProcessor(t) {
        this.spanProcessors.push(t)
    }
    getSpanProcessors() {
        return this.spanProcessors
    }
    onStart(t, e) {
        this.spanProcessors.forEach(n => {
            n.onStart(t, e)
        })
    }
    onEnd(t) {
        this.spanProcessors.forEach(e => {
            e.onEnd(t)
        })
    }
    forceFlush() {
        return Promise.all(this.spanProcessors.map(t => t.forceFlush())).then(() => {})
    }
    shutdown() {
        return Promise.all(this.spanProcessors.map(t => t.forceFlush())).then(() => {})
    }
}
const ii = t => new io(rY(t));
class io {
    constructor(t) {
        switch (this._sampleRate = t, t) {
            case 0:
                this._sampler = new ey;
                break;
            case 1:
                this._sampler = new eb;
                break;
            default:
                this._sampler = new eH(1 / t)
        }
    }
    shouldSample(t, e, n, r, i, o) {
        let a = this._sampler.shouldSample(t, e, n, r, i, o);
        return Object.assign(Object.assign({}, a), {
            attributes: Object.assign(Object.assign({}, a.attributes), {
                SampleRate: this._sampleRate
            })
        })
    }
    toString() {
        return `DeterministicSampler(${this._sampler.toString()})`
    }
}
var ia, is, iu, ic, il, ip, id, ih, i_, iv, im, ig, iy, ib, iE, iT, iw, iO, iS, iR, iL, iA, iP, iC, iN, ix, iI, iD, iM, ik, iU, ij, iB, iF, iH, iV, iG = function() {
        var t = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
        if (t && t.responseStart > 0 && t.responseStart < performance.now()) return t
    },
    iX = function(t) {
        if ("loading" === document.readyState) return "loading";
        var e = iG();
        if (e) {
            if (t < e.domInteractive) return "loading";
            if (0 === e.domContentLoadedEventStart || t < e.domContentLoadedEventStart) return "dom-interactive";
            if (0 === e.domComplete || t < e.domComplete) return "dom-content-loaded"
        }
        return "complete"
    },
    iz = function(t) {
        var e = t.nodeName;
        return 1 === t.nodeType ? e.toLowerCase() : e.toUpperCase().replace(/^#/, "")
    },
    iq = function(t, e) {
        var n = "";
        try {
            for (; t && 9 !== t.nodeType;) {
                var r = t,
                    i = r.id ? "#" + r.id : iz(r) + (r.classList && r.classList.value && r.classList.value.trim() && r.classList.value.trim().length ? "." + r.classList.value.trim().replace(/\s+/g, ".") : "");
                if (n.length + i.length > (e || 100) - 1) return n || i;
                if (n = n ? i + ">" + n : i, r.id) break;
                t = r.parentNode
            }
        } catch (t) {}
        return n
    },
    i$ = -1,
    iK = function() {
        return i$
    },
    iW = function(t) {
        addEventListener("pageshow", function(e) {
            e.persisted && (i$ = e.timeStamp, t(e))
        }, !0)
    },
    iZ = function() {
        var t = iG();
        return t && t.activationStart || 0
    },
    iY = function(t, e) {
        var n = iG(),
            r = "navigate";
        return iK() >= 0 ? r = "back-forward-cache" : n && (document.prerendering || iZ() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
            name: t,
            value: void 0 === e ? -1 : e,
            rating: "good",
            delta: 0,
            entries: [],
            id: "v4-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
            navigationType: r
        }
    },
    iQ = function(t, e, n) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                var r = new PerformanceObserver(function(t) {
                    Promise.resolve().then(function() {
                        e(t.getEntries())
                    })
                });
                return r.observe(Object.assign({
                    type: t,
                    buffered: !0
                }, n || {})), r
            }
        } catch (t) {}
    },
    iJ = function(t, e, n, r) {
        var i, o;
        return function(a) {
            var s;
            e.value >= 0 && (a || r) && ((o = e.value - (i || 0)) || void 0 === i) && (i = e.value, e.delta = o, e.rating = (s = e.value) > n[1] ? "poor" : s > n[0] ? "needs-improvement" : "good", t(e))
        }
    },
    i0 = function(t) {
        requestAnimationFrame(function() {
            return requestAnimationFrame(function() {
                return t()
            })
        })
    },
    i1 = function(t) {
        document.addEventListener("visibilitychange", function() {
            "hidden" === document.visibilityState && t()
        })
    },
    i2 = function(t) {
        var e = !1;
        return function() {
            e || (t(), e = !0)
        }
    },
    i3 = -1,
    i4 = function() {
        return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
    },
    i6 = function(t) {
        "hidden" === document.visibilityState && i3 > -1 && (i3 = "visibilitychange" === t.type ? t.timeStamp : 0, i9())
    },
    i5 = function() {
        addEventListener("visibilitychange", i6, !0), addEventListener("prerenderingchange", i6, !0)
    },
    i9 = function() {
        removeEventListener("visibilitychange", i6, !0), removeEventListener("prerenderingchange", i6, !0)
    },
    i8 = function() {
        return i3 < 0 && (i3 = i4(), i5(), iW(function() {
            setTimeout(function() {
                i3 = i4(), i5()
            }, 0)
        })), {
            get firstHiddenTime() {
                return i3
            }
        }
    },
    i7 = function(t) {
        document.prerendering ? addEventListener("prerenderingchange", function() {
            return t()
        }, !0) : t()
    },
    ot = [1800, 3e3],
    oe = function(t, e) {
        e = e || {}, i7(function() {
            var n, r = i8(),
                i = iY("FCP"),
                o = iQ("paint", function(t) {
                    t.forEach(function(t) {
                        "first-contentful-paint" === t.name && (o.disconnect(), t.startTime < r.firstHiddenTime && (i.value = Math.max(t.startTime - iZ(), 0), i.entries.push(t), n(!0)))
                    })
                });
            o && (n = iJ(t, i, ot, e.reportAllChanges), iW(function(r) {
                n = iJ(t, i = iY("FCP"), ot, e.reportAllChanges), i0(function() {
                    i.value = performance.now() - r.timeStamp, n(!0)
                })
            }))
        })
    },
    on = [.1, .25],
    or = function(t, e) {
        var n, r;
        n = function(e) {
            t(function(t) {
                var e, n = {};
                if (t.entries.length) {
                    var r = t.entries.reduce(function(t, e) {
                        return t && t.value > e.value ? t : e
                    });
                    if (r && r.sources && r.sources.length) {
                        var i = (e = r.sources).find(function(t) {
                            return t.node && 1 === t.node.nodeType
                        }) || e[0];
                        i && (n = {
                            largestShiftTarget: iq(i.node),
                            largestShiftTime: r.startTime,
                            largestShiftValue: r.value,
                            largestShiftSource: i,
                            largestShiftEntry: r,
                            loadState: iX(r.startTime)
                        })
                    }
                }
                return Object.assign(t, {
                    attribution: n
                })
            }(e))
        }, r = (r = e) || {}, oe(i2(function() {
            var t, e = iY("CLS", 0),
                i = 0,
                o = [],
                a = function(n) {
                    n.forEach(function(t) {
                        if (!t.hadRecentInput) {
                            var e = o[0],
                                n = o[o.length - 1];
                            i && t.startTime - n.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (i += t.value, o.push(t)) : (i = t.value, o = [t])
                        }
                    }), i > e.value && (e.value = i, e.entries = o, t())
                },
                s = iQ("layout-shift", a);
            s && (t = iJ(n, e, on, r.reportAllChanges), i1(function() {
                a(s.takeRecords()), t(!0)
            }), iW(function() {
                i = 0, t = iJ(n, e = iY("CLS", 0), on, r.reportAllChanges), i0(function() {
                    return t()
                })
            }), setTimeout(t, 0))
        }))
    },
    oi = function(t, e) {
        oe(function(e) {
            t(function(t) {
                var e = {
                    timeToFirstByte: 0,
                    firstByteToFCP: t.value,
                    loadState: iX(iK())
                };
                if (t.entries.length) {
                    var n = iG(),
                        r = t.entries[t.entries.length - 1];
                    if (n) {
                        var i = n.activationStart || 0,
                            o = Math.max(0, n.responseStart - i);
                        e = {
                            timeToFirstByte: o,
                            firstByteToFCP: t.value - o,
                            loadState: iX(t.entries[0].startTime),
                            navigationEntry: n,
                            fcpEntry: r
                        }
                    }
                }
                return Object.assign(t, {
                    attribution: e
                })
            }(e))
        }, e)
    },
    oo = 0,
    oa = 1 / 0,
    os = 0,
    ou = function(t) {
        t.forEach(function(t) {
            t.interactionId && (oa = Math.min(oa, t.interactionId), oo = (os = Math.max(os, t.interactionId)) ? (os - oa) / 7 + 1 : 0)
        })
    },
    oc = function() {
        "interactionCount" in performance || iF || (iF = iQ("event", ou, {
            type: "event",
            buffered: !0,
            durationThreshold: 0
        }))
    },
    ol = [],
    op = new Map,
    of = 0,
    od = [],
    oh = function(t) {
        if (od.forEach(function(e) {
                return e(t)
            }), t.interactionId || "first-input" === t.entryType) {
            var e = ol[ol.length - 1],
                n = op.get(t.interactionId);
            if (n || ol.length < 10 || t.duration > e.latency) {
                if (n) t.duration > n.latency ? (n.entries = [t], n.latency = t.duration) : t.duration === n.latency && t.startTime === n.entries[0].startTime && n.entries.push(t);
                else {
                    var r = {
                        id: t.interactionId,
                        latency: t.duration,
                        entries: [t]
                    };
                    op.set(r.id, r), ol.push(r)
                }
                ol.sort(function(t, e) {
                    return e.latency - t.latency
                }), ol.length > 10 && ol.splice(10).forEach(function(t) {
                    return op.delete(t.id)
                })
            }
        }
    },
    o_ = function(t) {
        var e = self.requestIdleCallback || self.setTimeout,
            n = -1;
        return t = i2(t), "hidden" === document.visibilityState ? t() : (n = e(t), i1(t)), n
    },
    ov = [200, 500],
    om = function(t, e) {
        "PerformanceEventTiming" in self && "interactionId" in PerformanceEventTiming.prototype && (e = e || {}, i7(function() {
            oc();
            var n, r, i = iY("INP"),
                o = function(t) {
                    o_(function() {
                        t.forEach(oh);
                        var e, n = (e = Math.min(ol.length - 1, Math.floor(((iF ? oo : performance.interactionCount || 0) - of) / 50)), ol[e]);
                        n && n.latency !== i.value && (i.value = n.latency, i.entries = n.entries, r())
                    })
                },
                a = iQ("event", o, {
                    durationThreshold: null !== (n = e.durationThreshold) && void 0 !== n ? n : 40
                });
            r = iJ(t, i, ov, e.reportAllChanges), a && (a.observe({
                type: "first-input",
                buffered: !0
            }), i1(function() {
                o(a.takeRecords()), r(!0)
            }), iW(function() {
                of = 0, ol.length = 0, op.clear(), r = iJ(t, i = iY("INP"), ov, e.reportAllChanges)
            }))
        }))
    },
    og = [],
    oy = [],
    ob = new WeakMap,
    oE = new Map,
    oT = -1,
    ow = function(t) {
        og = og.concat(t), oO()
    },
    oO = function() {
        oT < 0 && (oT = o_(oS))
    },
    oS = function() {
        oE.size > 10 && oE.forEach(function(t, e) {
            op.has(e) || oE.delete(e)
        });
        var t = ol.map(function(t) {
                return ob.get(t.entries[0])
            }),
            e = oy.length - 50;
        oy = oy.filter(function(n, r) {
            return r >= e || t.includes(n)
        });
        for (var n = new Set, r = 0; r < oy.length; r++) {
            var i = oy[r];
            oC(i.startTime, i.processingEnd).forEach(function(t) {
                n.add(t)
            })
        }
        for (var o = 0; o < 50; o++) {
            var a = og[og.length - 1 - o];
            if (!a || a.startTime < iV) break;
            n.add(a)
        }
        og = Array.from(n), oT = -1
    };
od.push(function(t) {
    t.interactionId && t.target && !oE.has(t.interactionId) && oE.set(t.interactionId, t.target)
}, function(t) {
    var e, n = t.startTime + t.duration;
    iV = Math.max(iV, t.processingEnd);
    for (var r = oy.length - 1; r >= 0; r--) {
        var i = oy[r];
        if (8 >= Math.abs(n - i.renderTime)) {
            (e = i).startTime = Math.min(t.startTime, e.startTime), e.processingStart = Math.min(t.processingStart, e.processingStart), e.processingEnd = Math.max(t.processingEnd, e.processingEnd), e.entries.push(t);
            break
        }
    }
    e || (e = {
        startTime: t.startTime,
        processingStart: t.processingStart,
        processingEnd: t.processingEnd,
        renderTime: n,
        entries: [t]
    }, oy.push(e)), (t.interactionId || "first-input" === t.entryType) && ob.set(t, e), oO()
});
var oR, oL, oA, oP, oC = function(t, e) {
        for (var n, r = [], i = 0; n = og[i]; i++)
            if (!(n.startTime + n.duration < t)) {
                if (n.startTime > e) break;
                r.push(n)
            } return r
    },
    oN = function(t, e) {
        iH || (iH = iQ("long-animation-frame", ow)), om(function(e) {
            var n, r, i, o, a, s, u, c, l, p;
            t((n = e.entries[0], r = ob.get(n), i = n.processingStart, o = r.processingEnd, a = r.entries.sort(function(t, e) {
                return t.processingStart - e.processingStart
            }), s = oC(n.startTime, o), c = (u = e.entries.find(function(t) {
                return t.target
            })) && u.target || oE.get(n.interactionId), l = [n.startTime + n.duration, o].concat(s.map(function(t) {
                return t.startTime + t.duration
            })), p = Math.max.apply(Math, l), Object.assign(e, {
                attribution: {
                    interactionTarget: iq(c),
                    interactionTargetElement: c,
                    interactionType: n.name.startsWith("key") ? "keyboard" : "pointer",
                    interactionTime: n.startTime,
                    nextPaintTime: p,
                    processedEventEntries: a,
                    longAnimationFrameEntries: s,
                    inputDelay: i - n.startTime,
                    processingDuration: o - i,
                    presentationDelay: Math.max(p - o, 0),
                    loadState: iX(n.startTime)
                }
            })))
        }, e)
    },
    ox = [2500, 4e3],
    oI = {},
    oD = function(t, e) {
        var n, r;
        n = function(e) {
            t(function(t) {
                var e = {
                    timeToFirstByte: 0,
                    resourceLoadDelay: 0,
                    resourceLoadDuration: 0,
                    elementRenderDelay: t.value
                };
                if (t.entries.length) {
                    var n = iG();
                    if (n) {
                        var r = n.activationStart || 0,
                            i = t.entries[t.entries.length - 1],
                            o = i.url && performance.getEntriesByType("resource").filter(function(t) {
                                return t.name === i.url
                            })[0],
                            a = Math.max(0, n.responseStart - r),
                            s = Math.max(a, o ? (o.requestStart || o.startTime) - r : 0),
                            u = Math.max(s, o ? o.responseEnd - r : 0),
                            c = Math.max(u, i.startTime - r);
                        e = {
                            element: iq(i.element),
                            timeToFirstByte: a,
                            resourceLoadDelay: s - a,
                            resourceLoadDuration: u - s,
                            elementRenderDelay: c - u,
                            navigationEntry: n,
                            lcpEntry: i
                        }, i.url && (e.url = i.url), o && (e.lcpResourceEntry = o)
                    }
                }
                return Object.assign(t, {
                    attribution: e
                })
            }(e))
        }, r = (r = e) || {}, i7(function() {
            var t, e = i8(),
                i = iY("LCP"),
                o = function(n) {
                    r.reportAllChanges || (n = n.slice(-1)), n.forEach(function(n) {
                        n.startTime < e.firstHiddenTime && (i.value = Math.max(n.startTime - iZ(), 0), i.entries = [n], t())
                    })
                },
                a = iQ("largest-contentful-paint", o);
            if (a) {
                t = iJ(n, i, ox, r.reportAllChanges);
                var s = i2(function() {
                    oI[i.id] || (o(a.takeRecords()), a.disconnect(), oI[i.id] = !0, t(!0))
                });
                ["keydown", "click"].forEach(function(t) {
                    addEventListener(t, function() {
                        return o_(s)
                    }, !0)
                }), i1(s), iW(function(e) {
                    t = iJ(n, i = iY("LCP"), ox, r.reportAllChanges), i0(function() {
                        i.value = performance.now() - e.timeStamp, oI[i.id] = !0, t(!0)
                    })
                })
            }
        })
    },
    oM = [800, 1800],
    ok = function t(e) {
        document.prerendering ? i7(function() {
            return t(e)
        }) : "complete" !== document.readyState ? addEventListener("load", function() {
            return t(e)
        }, !0) : setTimeout(e, 0)
    },
    oU = function(t, e) {
        e = e || {};
        var n = iY("TTFB"),
            r = iJ(t, n, oM, e.reportAllChanges);
        ok(function() {
            var i = iG();
            i && (n.value = Math.max(i.responseStart - iZ(), 0), n.entries = [i], r(!0), iW(function() {
                (r = iJ(t, n = iY("TTFB", 0), oM, e.reportAllChanges))(!0)
            }))
        })
    },
    oj = function(t, e) {
        oU(function(e) {
            t(function(t) {
                var e = {
                    waitingDuration: 0,
                    cacheDuration: 0,
                    dnsDuration: 0,
                    connectionDuration: 0,
                    requestDuration: 0
                };
                if (t.entries.length) {
                    var n = t.entries[0],
                        r = n.activationStart || 0,
                        i = Math.max((n.workerStart || n.fetchStart) - r, 0),
                        o = Math.max(n.domainLookupStart - r, 0),
                        a = Math.max(n.connectStart - r, 0),
                        s = Math.max(n.connectEnd - r, 0);
                    e = {
                        waitingDuration: i,
                        cacheDuration: o - i,
                        dnsDuration: a - o,
                        connectionDuration: s - a,
                        requestDuration: t.value - s,
                        navigationEntry: n
                    }
                }
                return Object.assign(t, {
                    attribution: e
                })
            }(e))
        }, e)
    },
    oB = {
        passive: !0,
        capture: !0
    },
    oF = new Date,
    oH = function(t, e) {
        oR || (oR = e, oL = t, oA = new Date, oX(removeEventListener), oV())
    },
    oV = function() {
        if (oL >= 0 && oL < oA - oF) {
            var t = {
                entryType: "first-input",
                name: oR.type,
                target: oR.target,
                cancelable: oR.cancelable,
                startTime: oR.timeStamp,
                processingStart: oR.timeStamp + oL
            };
            oP.forEach(function(e) {
                e(t)
            }), oP = []
        }
    },
    oG = function(t) {
        if (t.cancelable) {
            var e, n, r, i = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
            "pointerdown" == t.type ? (e = function() {
                oH(i, t), r()
            }, n = function() {
                r()
            }, r = function() {
                removeEventListener("pointerup", e, oB), removeEventListener("pointercancel", n, oB)
            }, addEventListener("pointerup", e, oB), addEventListener("pointercancel", n, oB)) : oH(i, t)
        }
    },
    oX = function(t) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e) {
            return t(e, oG, oB)
        })
    },
    oz = [100, 300],
    oq = function(t, e) {
        e = e || {}, i7(function() {
            var n, r = i8(),
                i = iY("FID"),
                o = function(t) {
                    t.startTime < r.firstHiddenTime && (i.value = t.processingStart - t.startTime, i.entries.push(t), n(!0))
                },
                a = function(t) {
                    t.forEach(o)
                },
                s = iQ("first-input", a);
            n = iJ(t, i, oz, e.reportAllChanges), s && (i1(i2(function() {
                a(s.takeRecords()), s.disconnect()
            })), iW(function() {
                n = iJ(t, i = iY("FID"), oz, e.reportAllChanges), oP = [], oL = -1, oR = null, oX(addEventListener), oP.push(o), oV()
            }))
        })
    },
    o$ = function(t, e) {
        oq(function(e) {
            var n;
            t((n = e.entries[0], Object.assign(e, {
                attribution: {
                    eventTarget: iq(n.target),
                    eventType: n.name,
                    eventTime: n.startTime,
                    eventEntry: n,
                    loadState: iX(n.startTime)
                }
            })))
        }, e)
    };
class oK {
    constructor(t, e, n = {}) {
        this.instrumentationName = t, this.instrumentationVersion = e, this._wrap = rO.wrap, this._unwrap = rO.unwrap, this._massWrap = rO.massWrap, this._massUnwrap = rO.massUnwrap, this._config = Object.assign({
            enabled: !0
        }, n), this._diag = tm.createComponentLogger({
            namespace: t
        }), this._tracer = ee.getTracer(t, e), this._meter = tB.getMeter(t, e), this._updateMetricInstruments()
    }
    get meter() {
        return this._meter
    }
    setMeterProvider(t) {
        this._meter = t.getMeter(this.instrumentationName, this.instrumentationVersion), this._updateMetricInstruments()
    }
    _updateMetricInstruments() {}
    getConfig() {
        return this._config
    }
    setConfig(t = {}) {
        this._config = Object.assign({}, t)
    }
    setTracerProvider(t) {
        this._tracer = t.getTracer(this.instrumentationName, this.instrumentationVersion)
    }
    get tracer() {
        return this._tracer
    }
}
class oW extends oK {
    constructor({
        enabled: t = !0,
        vitalsToTrack: e = ["CLS", "LCP", "INP"],
        lcp: n,
        cls: r,
        inp: i,
        fid: o,
        fcp: a,
        ttfb: s
    } = {}) {
        super("@honeycombio/instrumentation-web-vitals", rD, {
            enabled: t,
            vitalsToTrack: e,
            lcp: n,
            cls: r,
            inp: i,
            fid: o,
            fcp: a,
            ttfb: s
        }), this.onReportCLS = (t, e) => {
            if (!this.isEnabled()) return;
            let {
                name: n,
                attribution: r
            } = t, {
                largestShiftTarget: i,
                largestShiftTime: o,
                largestShiftValue: a,
                loadState: s,
                largestShiftEntry: u
            } = r, c = this.getAttrPrefix(n), l = this.tracer.startSpan(n);
            l.setAttributes(Object.assign(Object.assign({}, this.getSharedAttributes(t)), {
                [`${c}.largest_shift_target`]: i,
                [`${c}.element`]: i,
                [`${c}.largest_shift_time`]: o,
                [`${c}.largest_shift_value`]: a,
                [`${c}.load_state`]: s,
                [`${c}.had_recent_input`]: null == u ? void 0 : u.hadRecentInput
            })), e && e(t, l), l.end()
        }, this.onReportLCP = (t, e) => {
            if (!this.isEnabled()) return;
            let {
                name: n,
                attribution: r
            } = t, {
                element: i,
                url: o,
                timeToFirstByte: a,
                resourceLoadDelay: s,
                resourceLoadDuration: u,
                elementRenderDelay: c
            } = r, l = this.getAttrPrefix(n), p = this.tracer.startSpan(n);
            p.setAttributes(Object.assign(Object.assign({}, this.getSharedAttributes(t)), {
                [`${l}.element`]: i,
                [`${l}.url`]: o,
                [`${l}.time_to_first_byte`]: a,
                [`${l}.resource_load_delay`]: s,
                [`${l}.resource_load_duration`]: u,
                [`${l}.element_render_delay`]: c,
                [`${l}.resource_load_time`]: u
            })), e && e(t, p), p.end()
        }, this.onReportINP = (t, e) => {
            if (!this.isEnabled()) return;
            let {
                name: n,
                attribution: r
            } = t, {
                inputDelay: i,
                interactionTarget: o,
                interactionTime: a,
                interactionType: s,
                loadState: u,
                nextPaintTime: c,
                presentationDelay: l,
                processingDuration: p
            } = r, f = this.getAttrPrefix(n), d = this.tracer.startSpan(n);
            d.setAttributes(Object.assign(Object.assign({}, this.getSharedAttributes(t)), {
                [`${f}.input_delay`]: i,
                [`${f}.interaction_target`]: o,
                [`${f}.interaction_time`]: a,
                [`${f}.interaction_type`]: s,
                [`${f}.load_state`]: u,
                [`${f}.next_paint_time`]: c,
                [`${f}.presentation_delay`]: l,
                [`${f}.processing_duration`]: p,
                [`${f}.element`]: o,
                [`${f}.event_type`]: s
            })), e && e(t, d), d.end()
        }, this.onReportFCP = (t, e) => {
            if (!this.isEnabled()) return;
            let {
                name: n,
                attribution: r
            } = t, {
                timeToFirstByte: i,
                firstByteToFCP: o,
                loadState: a
            } = r, s = this.getAttrPrefix(n), u = this.tracer.startSpan(n);
            u.setAttributes(Object.assign(Object.assign({}, this.getSharedAttributes(t)), {
                [`${s}.time_to_first_byte`]: i,
                [`${s}.time_since_first_byte`]: o,
                [`${s}.load_state`]: a
            })), e && e(t, u), u.end()
        }, this.onReportFID = (t, e) => {
            if (!this.isEnabled()) return;
            let {
                name: n,
                attribution: r
            } = t, {
                eventTarget: i,
                eventType: o,
                loadState: a
            } = r, s = this.getAttrPrefix(n), u = this.tracer.startSpan(n);
            u.setAttributes(Object.assign(Object.assign({}, this.getSharedAttributes(t)), {
                [`${s}.element`]: i,
                [`${s}.event_type`]: o,
                [`${s}.load_state`]: a
            })), e && e(t, u), u.end()
        }, this.onReportTTFB = (t, e) => {
            if (!this.isEnabled()) return;
            let {
                name: n,
                attribution: r
            } = t, {
                cacheDuration: i,
                connectionDuration: o,
                dnsDuration: a,
                requestDuration: s,
                waitingDuration: u
            } = r, c = this.getAttrPrefix(n), l = this.tracer.startSpan(n);
            l.setAttributes(Object.assign(Object.assign({}, this.getSharedAttributes(t)), {
                [`${c}.waiting_duration`]: u,
                [`${c}.dns_duration`]: a,
                [`${c}.connection_duration`]: o,
                [`${c}.request_duration`]: s,
                [`${c}.cache_duration`]: i,
                [`${c}.waiting_time`]: u,
                [`${c}.dns_time`]: a,
                [`${c}.connection_time`]: o,
                [`${c}.request_time`]: s
            })), e && e(t, l), l.end()
        }, this.vitalsToTrack = [...e], this.lcpOpts = n, this.clsOpts = r, this.inpOpts = i, this.fidOpts = o, this.fcpOpts = a, this.ttfbOpts = s, this._isEnabled = t, this._setupWebVitalsCallbacks()
    }
    init() {}
    _setupWebVitalsCallbacks() {
        this.vitalsToTrack.includes("CLS") && or(t => {
            var e;
            this.onReportCLS(t, null === (e = this.clsOpts) || void 0 === e ? void 0 : e.applyCustomAttributes)
        }, this.clsOpts), this.vitalsToTrack.includes("LCP") && oD(t => {
            var e;
            this.onReportLCP(t, null === (e = this.lcpOpts) || void 0 === e ? void 0 : e.applyCustomAttributes)
        }, this.lcpOpts), this.vitalsToTrack.includes("INP") && oN(t => {
            var e;
            this.onReportINP(t, null === (e = this.inpOpts) || void 0 === e ? void 0 : e.applyCustomAttributes)
        }, this.inpOpts), this.vitalsToTrack.includes("FID") && o$(t => {
            var e;
            this.onReportFID(t, null === (e = this.fidOpts) || void 0 === e ? void 0 : e.applyCustomAttributes)
        }, this.fidOpts), this.vitalsToTrack.includes("TTFB") && oj(t => {
            var e;
            this.onReportTTFB(t, null === (e = this.ttfbOpts) || void 0 === e ? void 0 : e.applyCustomAttributes)
        }, this.ttfbOpts), this.vitalsToTrack.includes("FCP") && oi(t => {
            var e;
            this.onReportFCP(t, null === (e = this.fcpOpts) || void 0 === e ? void 0 : e.applyCustomAttributes)
        }, this.fcpOpts)
    }
    getAttrPrefix(t) {
        return t.toLowerCase()
    }
    getSharedAttributes(t) {
        let {
            name: e,
            id: n,
            delta: r,
            rating: i,
            value: o,
            navigationType: a
        } = t, s = this.getAttrPrefix(e);
        return {
            [`${s}.id`]: n,
            [`${s}.delta`]: r,
            [`${s}.value`]: o,
            [`${s}.rating`]: i,
            [`${s}.navigation_type`]: a
        }
    }
    disable() {
        if (!this.isEnabled()) {
            this._diag.debug("Instrumentation already disabled");
            return
        }
        this._isEnabled = !1, this._diag.debug("Instrumentation  disabled")
    }
    enable() {
        if (this.isEnabled()) {
            this._diag.debug("Instrumentation already enabled");
            return
        }
        this._isEnabled = !0, this._diag.debug("Instrumentation  enabled"), this._diag.debug(`Sending spans for ${this.vitalsToTrack.join(",")}`)
    }
    isEnabled() {
        return this._isEnabled
    }
}
class oZ extends oK {
    constructor({
        enabled: t = !0
    } = {}) {
        super("@honeycombio/instrumentation-global-errors", rD, {
            enabled: t
        }), this.onError = t => {
            let e = "reason" in t ? t.reason : t.error,
                n = null == e ? void 0 : e.message,
                r = null == e ? void 0 : e.name,
                i = {
                    [nS]: r,
                    [nR]: n,
                    [nL]: null == e ? void 0 : e.stack
                };
            if (!n || !r) return;
            let o = this.tracer.startSpan("exception", {
                attributes: i
            }, tv.active());
            o.setStatus({
                code: iN.ERROR,
                message: n
            }), o.end()
        }, t && this.enable(), this._isEnabled = t
    }
    init() {}
    disable() {
        if (!this.isEnabled()) {
            this._diag.debug("Instrumentation already disabled");
            return
        }
        this._isEnabled = !1, window.removeEventListener("error", this.onError), window.removeEventListener("unhandledrejection", this.onError), this._diag.debug("Instrumentation  disabled")
    }
    enable() {
        if (this.isEnabled()) {
            this._diag.debug("Instrumentation already enabled");
            return
        }
        this._isEnabled = !0, window.addEventListener("error", this.onError), window.addEventListener("unhandledrejection", this.onError), this._diag.debug("Instrumentation  enabled")
    }
    isEnabled() {
        return this._isEnabled
    }
}(t = p || (p = {})).CONNECT_END = "connectEnd", t.CONNECT_START = "connectStart", t.DECODED_BODY_SIZE = "decodedBodySize", t.DOM_COMPLETE = "domComplete", t.DOM_CONTENT_LOADED_EVENT_END = "domContentLoadedEventEnd", t.DOM_CONTENT_LOADED_EVENT_START = "domContentLoadedEventStart", t.DOM_INTERACTIVE = "domInteractive", t.DOMAIN_LOOKUP_END = "domainLookupEnd", t.DOMAIN_LOOKUP_START = "domainLookupStart", t.ENCODED_BODY_SIZE = "encodedBodySize", t.FETCH_START = "fetchStart", t.LOAD_EVENT_END = "loadEventEnd", t.LOAD_EVENT_START = "loadEventStart", t.NAVIGATION_START = "navigationStart", t.REDIRECT_END = "redirectEnd", t.REDIRECT_START = "redirectStart", t.REQUEST_START = "requestStart", t.RESPONSE_END = "responseEnd", t.RESPONSE_START = "responseStart", t.SECURE_CONNECTION_START = "secureConnectionStart", t.UNLOAD_EVENT_END = "unloadEventEnd", t.UNLOAD_EVENT_START = "unloadEventStart";
var oY = function(t) {
    var e = "function" == typeof Symbol && Symbol.iterator,
        n = e && t[e],
        r = 0;
    if (n) return n.call(t);
    if (t && "number" == typeof t.length) return {
        next: function() {
            return t && r >= t.length && (t = void 0), {
                value: t && t[r++],
                done: !t
            }
        }
    };
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
};

function oQ(t, e) {
    return "string" == typeof e ? t === e : !!t.match(e)
}

function oJ(t, e) {
    var n, r;
    if (!e) return !1;
    try {
        for (var i = oY(e), o = i.next(); !o.done; o = i.next()) {
            var a = o.value;
            if (oQ(t, a)) return !0
        }
    } catch (t) {
        n = {
            error: t
        }
    } finally {
        try {
            o && !o.done && (r = i.return) && r.call(i)
        } finally {
            if (n) throw n.error
        }
    }
    return !1
}

function o0(t, e, n, r) {
    var i = void 0,
        o = void 0;
    e in n && "number" == typeof n[e] && (i = n[e]);
    var a = r || p.FETCH_START;
    if (a in n && "number" == typeof n[a] && (o = n[a]), void 0 !== i && void 0 !== o && i >= o) return t.addEvent(e, i), t
}

function o1(t, e) {
    o0(t, p.FETCH_START, e), o0(t, p.DOMAIN_LOOKUP_START, e), o0(t, p.DOMAIN_LOOKUP_END, e), o0(t, p.CONNECT_START, e), "name" in e && e.name.startsWith("https:") && o0(t, p.SECURE_CONNECTION_START, e), o0(t, p.CONNECT_END, e), o0(t, p.REQUEST_START, e), o0(t, p.RESPONSE_START, e), o0(t, p.RESPONSE_END, e);
    var n = e[p.ENCODED_BODY_SIZE];
    void 0 !== n && t.setAttribute("http.response_content_length", n);
    var r = e[p.DECODED_BODY_SIZE];
    void 0 !== r && n !== r && t.setAttribute("http.response_content_length_uncompressed", r)
}

function o2() {
    return "undefined" != typeof location ? location.origin : void 0
}

function o3(t, e, n, r, i, o) {
    void 0 === i && (i = new WeakSet);
    var a, s, u, c, l, f = o4(t),
        d = (a = t = f.toString(), s = i, u = nE(e), c = nE(n), (l = r.filter(function(t) {
            var e = nE(nb(t[p.FETCH_START])),
                n = nE(nb(t[p.RESPONSE_END]));
            return t.initiatorType.toLowerCase() === (o || "xmlhttprequest") && t.name === a && e >= u && n <= c
        })).length > 0 && (l = l.filter(function(t) {
            return !s.has(t)
        })), l);
    if (0 === d.length) return {
        mainRequest: void 0
    };
    if (1 === d.length) return {
        mainRequest: d[0]
    };
    var h = d.slice().sort(function(t, e) {
        var n = t[p.FETCH_START],
            r = e[p.FETCH_START];
        return n > r ? 1 : n < r ? -1 : 0
    });
    if (f.origin === o2() || !(h.length > 1)) return {
        mainRequest: d[0]
    };
    var _ = h[0],
        v = function(t, e, n) {
            for (var r, i = nE(n), o = nE(nb(e)), a = t[1], s = t.length, u = 1; u < s; u++) {
                var c = t[u],
                    l = nE(nb(c[p.FETCH_START])),
                    f = i - nE(nb(c[p.RESPONSE_END]));
                l >= o && (!r || f < r) && (r = f, a = c)
            }
            return a
        }(h, _[p.RESPONSE_END], n),
        m = _[p.RESPONSE_END];
    return v[p.FETCH_START] < m && (v = _, _ = void 0), {
        corsPreFlightRequest: _,
        mainRequest: v
    }
}

function o4(t) {
    if ("function" == typeof URL) return new URL(t, "undefined" != typeof document ? document.baseURI : "undefined" != typeof location ? location.href : void 0);
    var e = (f || (f = document.createElement("a")), f);
    return e.href = t, e
}

function o6(t, e) {
    var n = e || [];
    return ("string" == typeof n || n instanceof RegExp) && (n = [n]), o4(t).origin === o2() || n.some(function(e) {
        return oQ(t, e)
    })
}
var o5 = function() {
        return (o5 = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }).apply(this, arguments)
    },
    o9 = function() {
        function t(t, e, n) {
            this.instrumentationName = t, this.instrumentationVersion = e, this._wrap = rO.wrap, this._unwrap = rO.unwrap, this._massWrap = rO.massWrap, this._massUnwrap = rO.massUnwrap, this._config = o5({
                enabled: !0
            }, n), this._diag = tm.createComponentLogger({
                namespace: t
            }), this._tracer = ee.getTracer(t, e), this._meter = tB.getMeter(t, e), this._logger = ea.getLogger(t, e), this._updateMetricInstruments()
        }
        return Object.defineProperty(t.prototype, "meter", {
            get: function() {
                return this._meter
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.setMeterProvider = function(t) {
            this._meter = t.getMeter(this.instrumentationName, this.instrumentationVersion), this._updateMetricInstruments()
        }, Object.defineProperty(t.prototype, "logger", {
            get: function() {
                return this._logger
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.setLoggerProvider = function(t) {
            this._logger = t.getLogger(this.instrumentationName, this.instrumentationVersion)
        }, t.prototype.getModuleDefinitions = function() {
            var t, e = null !== (t = this.init()) && void 0 !== t ? t : [];
            return Array.isArray(e) ? e : [e]
        }, t.prototype._updateMetricInstruments = function() {}, t.prototype.getConfig = function() {
            return this._config
        }, t.prototype.setConfig = function(t) {
            this._config = o5({}, t)
        }, t.prototype.setTracerProvider = function(t) {
            this._tracer = t.getTracer(this.instrumentationName, this.instrumentationVersion)
        }, Object.defineProperty(t.prototype, "tracer", {
            get: function() {
                return this._tracer
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype._runSpanCustomizationHook = function(t, e, n, r) {
            if (t) try {
                t(n, r)
            } catch (t) {
                this._diag.error("Error running span customization hook due to exception in handler", {
                    triggerName: e
                }, t)
            }
        }, t
    }(),
    o8 = (e = function(t, n) {
        return (e = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        })(t, n)
    }, function(t, n) {
        if ("function" != typeof n && null !== n) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");

        function r() {
            this.constructor = t
        }
        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
    }),
    o7 = function(t) {
        function e(e, n, r) {
            var i = t.call(this, e, n, r) || this;
            return i._config.enabled && i.enable(), i
        }
        return o8(e, t), e
    }(o9);

function at(t, e, n) {
    var r, i;
    try {
        i = t()
    } catch (t) {
        r = t
    } finally {
        if (e(r, i), r && !n) throw r;
        return i
    }
}

function ae(t) {
    return "function" == typeof t && "function" == typeof t.__original && "function" == typeof t.__unwrap && !0 === t.__wrapped
}(n = d || (d = {})).DOCUMENT_LOAD = "documentLoad", n.DOCUMENT_FETCH = "documentFetch", n.RESOURCE_FETCH = "resourceFetch", (r = h || (h = {})).FIRST_PAINT = "firstPaint", r.FIRST_CONTENTFUL_PAINT = "firstContentfulPaint";
var an = function() {
        var t, e = {},
            n = null === (t = nv.getEntriesByType) || void 0 === t ? void 0 : t.call(nv, "navigation")[0];
        if (n) {
            var r = Object.values(p);
            r.forEach(function(t) {
                if (t in n) {
                    var r = n[t];
                    "number" == typeof r && (e[t] = r)
                }
            })
        } else {
            var i = nv.timing;
            if (i) {
                var r = Object.values(p);
                r.forEach(function(t) {
                    if (t in i) {
                        var n = i[t];
                        "number" == typeof n && (e[t] = n)
                    }
                })
            }
        }
        return e
    },
    ar = {
        "first-paint": h.FIRST_PAINT,
        "first-contentful-paint": h.FIRST_CONTENTFUL_PAINT
    },
    ai = function(t) {
        var e, n = null === (e = nv.getEntriesByType) || void 0 === e ? void 0 : e.call(nv, "paint");
        n && n.forEach(function(e) {
            var n = e.name,
                r = e.startTime;
            n in ar && t.addEvent(ar[n], r)
        })
    },
    ao = (i = function(t, e) {
        return (i = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }
        i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    aa = function(t) {
        function e(e) {
            void 0 === e && (e = {});
            var n = t.call(this, "@opentelemetry/instrumentation-document-load", "0.39.0", e) || this;
            return n.component = "document-load", n.version = "1", n.moduleName = n.component, n
        }
        return ao(e, t), e.prototype.init = function() {}, e.prototype._onDocumentLoaded = function() {
            var t = this;
            window.setTimeout(function() {
                t._collectPerformance()
            })
        }, e.prototype._addResourcesSpans = function(t) {
            var e, n = this,
                r = null === (e = nv.getEntriesByType) || void 0 === e ? void 0 : e.call(nv, "resource");
            r && r.forEach(function(e) {
                n._initResourceSpan(e, t)
            })
        }, e.prototype._collectPerformance = function() {
            var t = this,
                e = Array.from(document.getElementsByTagName("meta")).find(function(t) {
                    return t.getAttribute("name") === ns
                }),
                n = an(),
                r = e && e.content || "";
            tv.with(tZ.extract(Z, {
                traceparent: r
            }), function() {
                var e, r = t._startSpan(d.DOCUMENT_LOAD, p.FETCH_START, n);
                r && (tv.with(ee.setSpan(tv.active(), r), function() {
                    var e = t._startSpan(d.DOCUMENT_FETCH, p.FETCH_START, n);
                    e && (e.setAttribute(nP, location.href), tv.with(ee.setSpan(tv.active(), e), function() {
                        var r;
                        t._getConfig().ignoreNetworkEvents || o1(e, n), t._addCustomAttributesOnSpan(e, null === (r = t._getConfig().applyCustomAttributesOnSpan) || void 0 === r ? void 0 : r.documentFetch), t._endSpan(e, p.RESPONSE_END, n)
                    }))
                }), r.setAttribute(nP, location.href), r.setAttribute(nI, navigator.userAgent), t._addResourcesSpans(r), t._getConfig().ignoreNetworkEvents || (o0(r, p.FETCH_START, n), o0(r, p.UNLOAD_EVENT_START, n), o0(r, p.UNLOAD_EVENT_END, n), o0(r, p.DOM_INTERACTIVE, n), o0(r, p.DOM_CONTENT_LOADED_EVENT_START, n), o0(r, p.DOM_CONTENT_LOADED_EVENT_END, n), o0(r, p.DOM_COMPLETE, n), o0(r, p.LOAD_EVENT_START, n), o0(r, p.LOAD_EVENT_END, n)), t._getConfig().ignorePerformancePaintEvents || ai(r), t._addCustomAttributesOnSpan(r, null === (e = t._getConfig().applyCustomAttributesOnSpan) || void 0 === e ? void 0 : e.documentLoad), t._endSpan(r, p.LOAD_EVENT_END, n))
            })
        }, e.prototype._endSpan = function(t, e, n) {
            t && (e in n ? t.end(n[e]) : t.end())
        }, e.prototype._initResourceSpan = function(t, e) {
            var n, r = this._startSpan(d.RESOURCE_FETCH, p.FETCH_START, t, e);
            r && (r.setAttribute(nP, t.name), this._getConfig().ignoreNetworkEvents || o1(r, t), this._addCustomAttributesOnResourceSpan(r, t, null === (n = this._getConfig().applyCustomAttributesOnSpan) || void 0 === n ? void 0 : n.resourceFetch), this._endSpan(r, p.RESPONSE_END, t))
        }, e.prototype._startSpan = function(t, e, n, r) {
            if (e in n && "number" == typeof n[e]) return this.tracer.startSpan(t, {
                startTime: n[e]
            }, r ? ee.setSpan(tv.active(), r) : void 0)
        }, e.prototype._waitForPageLoad = function() {
            "complete" === window.document.readyState ? this._onDocumentLoaded() : (this._onDocumentLoaded = this._onDocumentLoaded.bind(this), window.addEventListener("load", this._onDocumentLoaded))
        }, e.prototype._getConfig = function() {
            return this._config
        }, e.prototype._addCustomAttributesOnSpan = function(t, e) {
            var n = this;
            e && at(function() {
                return e(t)
            }, function(t) {
                t && n._diag.error("addCustomAttributesOnSpan", t)
            }, !0)
        }, e.prototype._addCustomAttributesOnResourceSpan = function(t, e, n) {
            var r = this;
            n && at(function() {
                return n(t, e)
            }, function(t) {
                t && r._diag.error("addCustomAttributesOnResourceSpan", t)
            }, !0)
        }, e.prototype.enable = function() {
            window.removeEventListener("load", this._onDocumentLoaded), this._waitForPageLoad()
        }, e.prototype.disable = function() {
            window.removeEventListener("load", this._onDocumentLoaded)
        }, e
    }(o7);
(o = _ || (_ = {})).COMPONENT = "component", o.HTTP_ERROR_NAME = "http.error_name", o.HTTP_STATUS_TEXT = "http.status_text";
var as = "0.52.1",
    au = {},
    ac = au = {};

function al() {
    throw Error("setTimeout has not been defined")
}

function ap() {
    throw Error("clearTimeout has not been defined")
}

function af(t) {
    if (v === setTimeout) return setTimeout(t, 0);
    if ((v === al || !v) && setTimeout) return v = setTimeout, setTimeout(t, 0);
    try {
        return v(t, 0)
    } catch (e) {
        try {
            return v.call(null, t, 0)
        } catch (e) {
            return v.call(this, t, 0)
        }
    }
}! function() {
    try {
        v = "function" == typeof setTimeout ? setTimeout : al
    } catch (t) {
        v = al
    }
    try {
        m = "function" == typeof clearTimeout ? clearTimeout : ap
    } catch (t) {
        m = ap
    }
}();
var ad = [],
    ah = !1,
    a_ = -1;

function av() {
    ah && g && (ah = !1, g.length ? ad = g.concat(ad) : a_ = -1, ad.length && am())
}

function am() {
    if (!ah) {
        var t = af(av);
        ah = !0;
        for (var e = ad.length; e;) {
            for (g = ad, ad = []; ++a_ < e;) g && g[a_].run();
            a_ = -1, e = ad.length
        }
        g = null, ah = !1,
            function(t) {
                if (m === clearTimeout) return clearTimeout(t);
                if ((m === ap || !m) && clearTimeout) return m = clearTimeout, clearTimeout(t);
                try {
                    m(t)
                } catch (e) {
                    try {
                        return m.call(null, t)
                    } catch (e) {
                        return m.call(this, t)
                    }
                }
            }(t)
    }
}

function ag(t, e) {
    this.fun = t, this.array = e
}

function ay() {}
ac.nextTick = function(t) {
    var e = Array(arguments.length - 1);
    if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    ad.push(new ag(t, e)), 1 !== ad.length || ah || af(am)
}, ag.prototype.run = function() {
    this.fun.apply(null, this.array)
}, ac.title = "browser", ac.browser = !0, ac.env = {}, ac.argv = [], ac.version = "", ac.versions = {}, ac.on = ay, ac.addListener = ay, ac.once = ay, ac.off = ay, ac.removeListener = ay, ac.removeAllListeners = ay, ac.emit = ay, ac.prependListener = ay, ac.prependOnceListener = ay, ac.listeners = function(t) {
    return []
}, ac.binding = function(t) {
    throw Error("process.binding is not supported")
}, ac.cwd = function() {
    return "/"
}, ac.chdir = function(t) {
    throw Error("process.chdir is not supported")
}, ac.umask = function() {
    return 0
};
var ab = (a = function(t, e) {
        return (a = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }
        a(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    aE = "object" == typeof au && (null === (y = au.release) || void 0 === y ? void 0 : y.name) === "node",
    aT = function(t) {
        function e(e) {
            void 0 === e && (e = {});
            var n = t.call(this, "@opentelemetry/instrumentation-fetch", as, e) || this;
            return n.component = "fetch", n.version = as, n.moduleName = n.component, n._usedResources = new WeakSet, n._tasksCount = 0, n
        }
        return ab(e, t), e.prototype.init = function() {}, e.prototype._addChildSpan = function(t, e) {
            var n = this.tracer.startSpan("CORS Preflight", {
                startTime: e[p.FETCH_START]
            }, ee.setSpan(tv.active(), t));
            this.getConfig().ignoreNetworkEvents || o1(n, e), n.end(e[p.RESPONSE_END])
        }, e.prototype._addFinalSpanAttributes = function(t, e) {
            var n = o4(e.url);
            t.setAttribute(nx, e.status), null != e.statusText && t.setAttribute(_.HTTP_STATUS_TEXT, e.statusText), t.setAttribute(nC, n.host), t.setAttribute(nN, n.protocol.replace(":", "")), "undefined" != typeof navigator && t.setAttribute(nI, navigator.userAgent)
        }, e.prototype._addHeaders = function(t, e) {
            if (!o6(e, this.getConfig().propagateTraceHeaderCorsUrls)) {
                var n = {};
                tZ.inject(tv.active(), n), Object.keys(n).length > 0 && this._diag.debug("headers inject skipped due to CORS policy");
                return
            }
            if (t instanceof Request) tZ.inject(tv.active(), t.headers, {
                set: function(t, e, n) {
                    return t.set(e, "string" == typeof n ? n : String(n))
                }
            });
            else if (t.headers instanceof Headers) tZ.inject(tv.active(), t.headers, {
                set: function(t, e, n) {
                    return t.set(e, "string" == typeof n ? n : String(n))
                }
            });
            else if (t.headers instanceof Map) tZ.inject(tv.active(), t.headers, {
                set: function(t, e, n) {
                    return t.set(e, "string" == typeof n ? n : String(n))
                }
            });
            else {
                var n = {};
                tZ.inject(tv.active(), n), t.headers = Object.assign({}, n, t.headers || {})
            }
        }, e.prototype._clearResources = function() {
            0 === this._tasksCount && this.getConfig().clearTimingResources && (performance.clearResourceTimings(), this._usedResources = new WeakSet)
        }, e.prototype._createSpan = function(t, e) {
            if (void 0 === e && (e = {}), oJ(t, this.getConfig().ignoreUrls)) {
                this._diag.debug("ignoring span as url matches ignored url");
                return
            }
            var n, r = (e.method || "GET").toUpperCase(),
                i = "HTTP " + r;
            return this.tracer.startSpan(i, {
                kind: iC.CLIENT,
                attributes: ((n = {})[_.COMPONENT] = this.moduleName, n[nA] = r, n[nP] = t, n)
            })
        }, e.prototype._findResourceAndAddNetworkEvents = function(t, e, n) {
            var r = e.entries;
            if (!r.length) {
                if (!performance.getEntriesByType) return;
                r = performance.getEntriesByType("resource")
            }
            var i = o3(e.spanUrl, e.startTime, n, r, this._usedResources, "fetch");
            if (i.mainRequest) {
                var o = i.mainRequest;
                this._markResourceAsUsed(o);
                var a = i.corsPreFlightRequest;
                a && (this._addChildSpan(t, a), this._markResourceAsUsed(a)), this.getConfig().ignoreNetworkEvents || o1(t, o)
            }
        }, e.prototype._markResourceAsUsed = function(t) {
            this._usedResources.add(t)
        }, e.prototype._endSpan = function(t, e, n) {
            var r = this,
                i = nm(Date.now()),
                o = ny();
            this._addFinalSpanAttributes(t, n), setTimeout(function() {
                var n;
                null === (n = e.observer) || void 0 === n || n.disconnect(), r._findResourceAndAddNetworkEvents(t, e, o), r._tasksCount--, r._clearResources(), t.end(i)
            }, 300)
        }, e.prototype._patchConstructor = function() {
            var t = this;
            return function(e) {
                return function() {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    var i = this,
                        o = o4(n[0] instanceof Request ? n[0].url : String(n[0])).href,
                        a = n[0] instanceof Request ? n[0] : n[1] || {},
                        s = t._createSpan(o, a);
                    if (!s) return e.apply(this, n);
                    var u = t._prepareSpanData(o);

                    function c(e, n) {
                        t._applyAttributesAfterFetch(e, a, n), t._endSpan(e, u, {
                            status: n.status || 0,
                            statusText: n.message,
                            url: o
                        })
                    }

                    function l(e, n) {
                        t._applyAttributesAfterFetch(e, a, n), n.status >= 200 && n.status < 400 ? t._endSpan(e, u, n) : t._endSpan(e, u, {
                            status: n.status,
                            statusText: n.statusText,
                            url: o
                        })
                    }

                    function p(t, e, n) {
                        try {
                            var r = n.clone(),
                                i = n.clone(),
                                o = r.body;
                            if (o) {
                                var a = o.getReader(),
                                    s = function() {
                                        a.read().then(function(e) {
                                            e.done ? l(t, i) : s()
                                        }, function(e) {
                                            c(t, e)
                                        })
                                    };
                                s()
                            } else l(t, n)
                        } finally {
                            e(n)
                        }
                    }

                    function f(t, e, n) {
                        try {
                            c(t, n)
                        } finally {
                            e(n)
                        }
                    }
                    return new Promise(function(n, r) {
                        return tv.with(ee.setSpan(tv.active(), s), function() {
                            return t._addHeaders(a, o), t._tasksCount++, e.apply(i, a instanceof Request ? [a] : [o, a]).then(p.bind(i, s, n), f.bind(i, s, r))
                        })
                    })
                }
            }
        }, e.prototype._applyAttributesAfterFetch = function(t, e, n) {
            var r = this,
                i = this.getConfig().applyCustomAttributesOnSpan;
            i && at(function() {
                return i(t, e, n)
            }, function(t) {
                t && r._diag.error("applyCustomAttributesOnSpan", t)
            }, !0)
        }, e.prototype._prepareSpanData = function(t) {
            var e = ny(),
                n = [];
            if ("function" != typeof PerformanceObserver) return {
                entries: n,
                startTime: e,
                spanUrl: t
            };
            var r = new PerformanceObserver(function(e) {
                e.getEntries().forEach(function(e) {
                    "fetch" === e.initiatorType && e.name === t && n.push(e)
                })
            });
            return r.observe({
                entryTypes: ["resource"]
            }), {
                entries: n,
                observer: r,
                startTime: e,
                spanUrl: t
            }
        }, e.prototype.enable = function() {
            if (aE) {
                this._diag.warn("this instrumentation is intended for web usage only, it does not instrument Node.js's fetch()");
                return
            }
            ae(fetch) && (this._unwrap(ex, "fetch"), this._diag.debug("removing previous patch for constructor")), this._wrap(ex, "fetch", this._patchConstructor())
        }, e.prototype.disable = function() {
            aE || (this._unwrap(ex, "fetch"), this._usedResources = new WeakSet)
        }, e
    }(o7);
(s = b || (b = {})).EVENT_TYPE = "event_type", s.TARGET_ELEMENT = "target_element", s.TARGET_XPATH = "target_xpath", s.HTTP_URL = "http.url";
var aw = "0.39.0",
    aO = (u = function(t, e) {
        return (u = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }
        u(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    aS = ["click"];

function aR() {
    return !1
}
var aL = function(t) {
    function e(e) {
        void 0 === e && (e = {});
        var n, r = t.call(this, "@opentelemetry/instrumentation-user-interaction", aw, e) || this;
        return r.version = aw, r.moduleName = "user-interaction", r._spansData = new WeakMap, r._wrappedListeners = new WeakMap, r._eventsSpanMap = new WeakMap, r._eventNames = new Set(null !== (n = null == e ? void 0 : e.eventNames) && void 0 !== n ? n : aS), r._shouldPreventSpanCreation = "function" == typeof(null == e ? void 0 : e.shouldPreventSpanCreation) ? e.shouldPreventSpanCreation : aR, r
    }
    return aO(e, t), e.prototype.init = function() {}, e.prototype._checkForTimeout = function(t, e) {
        var n = this._spansData.get(e);
        n && ("setTimeout" === t.source ? n.hrTimeLastTimeout = ny() : "Promise.then" !== t.source && "setTimeout" !== t.source && (n.hrTimeLastTimeout = void 0))
    }, e.prototype._allowEventName = function(t) {
        return this._eventNames.has(t)
    }, e.prototype._createSpan = function(t, e, n) {
        if (!(!(t instanceof HTMLElement) || !t.getAttribute || t.hasAttribute("disabled")) && this._allowEventName(e)) {
            var r, i = function t(e, n) {
                if (e.nodeType === Node.DOCUMENT_NODE) return "/";
                var r = function(t, e) {
                    var n = t.nodeType,
                        r = function(t) {
                            if (!t.parentNode) return 0;
                            var e = [t.nodeType];
                            t.nodeType === Node.CDATA_SECTION_NODE && e.push(Node.TEXT_NODE);
                            var n = Array.from(t.parentNode.childNodes);
                            return (n = n.filter(function(n) {
                                var r = n.localName;
                                return e.indexOf(n.nodeType) >= 0 && r === t.localName
                            })).length >= 1 ? n.indexOf(t) + 1 : 0
                        }(t),
                        i = "";
                    if (n === Node.ELEMENT_NODE) {
                        var o = t.getAttribute("id");
                        if (e && o) return '//*[@id="' + o + '"]';
                        i = t.localName
                    } else if (n === Node.TEXT_NODE || n === Node.CDATA_SECTION_NODE) i = "text()";
                    else {
                        if (n !== Node.COMMENT_NODE) return "";
                        i = "comment()"
                    }
                    return i && r > 1 ? "/" + i + "[" + r + "]" : "/" + i
                }(e, n);
                if (n && r.indexOf("@id") > 0) return r;
                var i = "";
                return e.parentNode && (i += t(e.parentNode, !1)), i += r
            }(t, !0);
            try {
                var o = this.tracer.startSpan(e, {
                    attributes: ((r = {})[b.EVENT_TYPE] = e, r[b.TARGET_ELEMENT] = t.tagName, r[b.TARGET_XPATH] = i, r[b.HTTP_URL] = window.location.href, r)
                }, n ? ee.setSpan(tv.active(), n) : void 0);
                if (!0 === this._shouldPreventSpanCreation(e, t, o)) return;
                return this._spansData.set(o, {
                    taskCount: 0
                }), o
            } catch (t) {
                this._diag.error("failed to start create new user interaction span", t)
            }
        }
    }, e.prototype._decrementTask = function(t) {
        var e = this._spansData.get(t);
        e && (e.taskCount--, 0 === e.taskCount && this._tryToEndSpan(t, e.hrTimeLastTimeout))
    }, e.prototype._getCurrentSpan = function(t) {
        var e = t.get("OT_ZONE_CONTEXT");
        return e ? ee.getSpan(e) : e
    }, e.prototype._incrementTask = function(t) {
        var e = this._spansData.get(t);
        e && e.taskCount++
    }, e.prototype.addPatchedListener = function(t, e, n, r) {
        var i = this._wrappedListeners.get(n);
        i || (i = new Map, this._wrappedListeners.set(n, i));
        var o = i.get(e);
        return o || (o = new Map, i.set(e, o)), !o.has(t) && (o.set(t, r), !0)
    }, e.prototype.removePatchedListener = function(t, e, n) {
        var r = this._wrappedListeners.get(n);
        if (r) {
            var i = r.get(e);
            if (i) {
                var o = i.get(t);
                return o && (i.delete(t), 0 === i.size && (r.delete(e), 0 === r.size && this._wrappedListeners.delete(n))), o
            }
        }
    }, e.prototype._invokeListener = function(t, e, n) {
        return "function" == typeof t ? t.apply(e, n) : t.handleEvent(n[0])
    }, e.prototype._patchAddEventListener = function() {
        var t = this;
        return function(e) {
            return function(n, r, i) {
                if (!r) return e.call(this, n, r, i);
                var o = i && "object" == typeof i && i.once,
                    a = function() {
                        for (var e, i = this, a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
                        var u = a[0],
                            c = null == u ? void 0 : u.target;
                        u && (e = t._eventsSpanMap.get(u)), o && t.removePatchedListener(this, n, r);
                        var l = t._createSpan(c, n, e);
                        return l ? (u && t._eventsSpanMap.set(u, l), tv.with(ee.setSpan(tv.active(), l), function() {
                            var e = t._invokeListener(r, i, a);
                            return l.end(), e
                        })) : t._invokeListener(r, this, a)
                    };
                if (t.addPatchedListener(this, n, r, a)) return e.call(this, n, a, i)
            }
        }
    }, e.prototype._patchRemoveEventListener = function() {
        var t = this;
        return function(e) {
            return function(n, r, i) {
                var o = t.removePatchedListener(this, n, r);
                return o ? e.call(this, n, o, i) : e.call(this, n, r, i)
            }
        }
    }, e.prototype._getPatchableEventTargets = function() {
        return window.EventTarget ? [EventTarget.prototype] : [Node.prototype, Window.prototype]
    }, e.prototype._patchHistoryApi = function() {
        this._unpatchHistoryApi(), this._wrap(history, "replaceState", this._patchHistoryMethod()), this._wrap(history, "pushState", this._patchHistoryMethod()), this._wrap(history, "back", this._patchHistoryMethod()), this._wrap(history, "forward", this._patchHistoryMethod()), this._wrap(history, "go", this._patchHistoryMethod())
    }, e.prototype._patchHistoryMethod = function() {
        var t = this;
        return function(e) {
            return function() {
                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                var i = "" + location.pathname + location.hash + location.search,
                    o = e.apply(this, n),
                    a = "" + location.pathname + location.hash + location.search;
                return i !== a && t._updateInteractionName(a), o
            }
        }
    }, e.prototype._unpatchHistoryApi = function() {
        ae(history.replaceState) && this._unwrap(history, "replaceState"), ae(history.pushState) && this._unwrap(history, "pushState"), ae(history.back) && this._unwrap(history, "back"), ae(history.forward) && this._unwrap(history, "forward"), ae(history.go) && this._unwrap(history, "go")
    }, e.prototype._updateInteractionName = function(t) {
        var e = ee.getSpan(tv.active());
        e && "function" == typeof e.updateName && e.updateName("Navigation: " + t)
    }, e.prototype._patchZoneCancelTask = function() {
        var t = this;
        return function(e) {
            return function(n) {
                var r = Zone.current,
                    i = t._getCurrentSpan(r);
                return i && t._shouldCountTask(n, r) && t._decrementTask(i), e.call(this, n)
            }
        }
    }, e.prototype._patchZoneScheduleTask = function() {
        var t = this;
        return function(e) {
            return function(n) {
                var r = Zone.current,
                    i = t._getCurrentSpan(r);
                return i && t._shouldCountTask(n, r) && (t._incrementTask(i), t._checkForTimeout(n, i)), e.call(this, n)
            }
        }
    }, e.prototype._patchZoneRunTask = function() {
        var t = this;
        return function(e) {
            return function(n, r, i) {
                var o, a = Array.isArray(i) && i[0] instanceof Event ? i[0] : void 0,
                    s = null == a ? void 0 : a.target;
                if (s) {
                    if (o = t._createSpan(s, n.eventName)) return t._incrementTask(o), this.run(function() {
                        try {
                            return tv.with(ee.setSpan(tv.active(), o), function() {
                                var t = Zone.current;
                                return n._zone = t, e.call(t, n, r, i)
                            })
                        } finally {
                            t._decrementTask(o)
                        }
                    })
                } else o = t._getCurrentSpan(this);
                try {
                    return e.call(this, n, r, i)
                } finally {
                    o && t._shouldCountTask(n, this) && t._decrementTask(o)
                }
            }
        }
    }, e.prototype._shouldCountTask = function(t, e) {
        if (t._zone && (e = t._zone), !e || !t.data || t.data.isPeriodic) return !1;
        var n = this._getCurrentSpan(e);
        return !!(n && this._spansData.get(n)) && ("macroTask" === t.type || "microTask" === t.type)
    }, e.prototype._tryToEndSpan = function(t, e) {
        t && this._spansData.get(t) && (t.end(e), this._spansData.delete(t))
    }, e.prototype.enable = function() {
        var t = this,
            e = this.getZoneWithPrototype();
        this._diag.debug("applying patch to", this.moduleName, this.version, "zone:", !!e), e ? (ae(e.prototype.runTask) && (this._unwrap(e.prototype, "runTask"), this._diag.debug("removing previous patch from method runTask")), ae(e.prototype.scheduleTask) && (this._unwrap(e.prototype, "scheduleTask"), this._diag.debug("removing previous patch from method scheduleTask")), ae(e.prototype.cancelTask) && (this._unwrap(e.prototype, "cancelTask"), this._diag.debug("removing previous patch from method cancelTask")), this._zonePatched = !0, this._wrap(e.prototype, "runTask", this._patchZoneRunTask()), this._wrap(e.prototype, "scheduleTask", this._patchZoneScheduleTask()), this._wrap(e.prototype, "cancelTask", this._patchZoneCancelTask())) : (this._zonePatched = !1, this._getPatchableEventTargets().forEach(function(e) {
            ae(e.addEventListener) && (t._unwrap(e, "addEventListener"), t._diag.debug("removing previous patch from method addEventListener")), ae(e.removeEventListener) && (t._unwrap(e, "removeEventListener"), t._diag.debug("removing previous patch from method removeEventListener")), t._wrap(e, "addEventListener", t._patchAddEventListener()), t._wrap(e, "removeEventListener", t._patchRemoveEventListener())
        })), this._patchHistoryApi()
    }, e.prototype.disable = function() {
        var t = this,
            e = this.getZoneWithPrototype();
        this._diag.debug("removing patch from", this.moduleName, this.version, "zone:", !!e), e && this._zonePatched ? (ae(e.prototype.runTask) && this._unwrap(e.prototype, "runTask"), ae(e.prototype.scheduleTask) && this._unwrap(e.prototype, "scheduleTask"), ae(e.prototype.cancelTask) && this._unwrap(e.prototype, "cancelTask")) : this._getPatchableEventTargets().forEach(function(e) {
            ae(e.addEventListener) && t._unwrap(e, "addEventListener"), ae(e.removeEventListener) && t._unwrap(e, "removeEventListener")
        }), this._unpatchHistoryApi()
    }, e.prototype.getZoneWithPrototype = function() {
        return window.Zone
    }, e
}(o7);
(c = E || (E = {})).METHOD_OPEN = "open", c.METHOD_SEND = "send", c.EVENT_ABORT = "abort", c.EVENT_ERROR = "error", c.EVENT_LOAD = "loaded", c.EVENT_TIMEOUT = "timeout";
var aA = "0.52.1";
(T || (T = {})).HTTP_STATUS_TEXT = "http.status_text";
var aP = (l = function(t, e) {
        return (l = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(t, e) {
            t.__proto__ = e
        } || function(t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        })(t, e)
    }, function(t, e) {
        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }
        l(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    aC = {
        "@opentelemetry/instrumentation-document-load": aa,
        "@opentelemetry/instrumentation-fetch": aT,
        "@opentelemetry/instrumentation-user-interaction": aL,
        "@opentelemetry/instrumentation-xml-http-request": function(t) {
            function e(e) {
                void 0 === e && (e = {});
                var n = t.call(this, "@opentelemetry/instrumentation-xml-http-request", aA, e) || this;
                return n.component = "xml-http-request", n.version = aA, n.moduleName = n.component, n._tasksCount = 0, n._xhrMem = new WeakMap, n._usedResources = new WeakSet, n
            }
            return aP(e, t), e.prototype.init = function() {}, e.prototype._addHeaders = function(t, e) {
                if (!o6(o4(e).href, this.getConfig().propagateTraceHeaderCorsUrls)) {
                    var n = {};
                    tZ.inject(tv.active(), n), Object.keys(n).length > 0 && this._diag.debug("headers inject skipped due to CORS policy");
                    return
                }
                var r = {};
                tZ.inject(tv.active(), r), Object.keys(r).forEach(function(e) {
                    t.setRequestHeader(e, String(r[e]))
                })
            }, e.prototype._addChildSpan = function(t, e) {
                var n = this;
                tv.with(ee.setSpan(tv.active(), t), function() {
                    var t = n.tracer.startSpan("CORS Preflight", {
                        startTime: e[p.FETCH_START]
                    });
                    n.getConfig().ignoreNetworkEvents || o1(t, e), t.end(e[p.RESPONSE_END])
                })
            }, e.prototype._addFinalSpanAttributes = function(t, e, n) {
                if ("string" == typeof n) {
                    var r = o4(n);
                    void 0 !== e.status && t.setAttribute(nx, e.status), void 0 !== e.statusText && t.setAttribute(T.HTTP_STATUS_TEXT, e.statusText), t.setAttribute(nC, r.host), t.setAttribute(nN, r.protocol.replace(":", "")), t.setAttribute(nI, navigator.userAgent)
                }
            }, e.prototype._applyAttributesAfterXHR = function(t, e) {
                var n = this,
                    r = this.getConfig().applyCustomAttributesOnSpan;
                "function" == typeof r && at(function() {
                    return r(t, e)
                }, function(t) {
                    t && n._diag.error("applyCustomAttributesOnSpan", t)
                }, !0)
            }, e.prototype._addResourceObserver = function(t, e) {
                var n = this._xhrMem.get(t);
                n && "function" == typeof PerformanceObserver && "function" == typeof PerformanceResourceTiming && (n.createdResources = {
                    observer: new PerformanceObserver(function(t) {
                        var r = t.getEntries(),
                            i = o4(e);
                        r.forEach(function(t) {
                            "xmlhttprequest" === t.initiatorType && t.name === i.href && n.createdResources && n.createdResources.entries.push(t)
                        })
                    }),
                    entries: []
                }, n.createdResources.observer.observe({
                    entryTypes: ["resource"]
                }))
            }, e.prototype._clearResources = function() {
                0 === this._tasksCount && this.getConfig().clearTimingResources && (nv.clearResourceTimings(), this._xhrMem = new WeakMap, this._usedResources = new WeakSet)
            }, e.prototype._findResourceAndAddNetworkEvents = function(t, e, n, r, i) {
                if (n && r && i && t.createdResources) {
                    var o = t.createdResources.entries;
                    o && o.length || (o = nv.getEntriesByType("resource"));
                    var a = o3(o4(n).href, r, i, o, this._usedResources);
                    if (a.mainRequest) {
                        var s = a.mainRequest;
                        this._markResourceAsUsed(s);
                        var u = a.corsPreFlightRequest;
                        u && (this._addChildSpan(e, u), this._markResourceAsUsed(u)), this.getConfig().ignoreNetworkEvents || o1(e, s)
                    }
                }
            }, e.prototype._cleanPreviousSpanInformation = function(t) {
                var e = this._xhrMem.get(t);
                if (e) {
                    var n = e.callbackToRemoveEvents;
                    n && n(), this._xhrMem.delete(t)
                }
            }, e.prototype._createSpan = function(t, e, n) {
                if (oJ(e, this.getConfig().ignoreUrls)) {
                    this._diag.debug("ignoring span as url matches ignored url");
                    return
                }
                var r, i = n.toUpperCase(),
                    o = this.tracer.startSpan(i, {
                        kind: iC.CLIENT,
                        attributes: ((r = {})[nA] = n, r[nP] = o4(e).toString(), r)
                    });
                return o.addEvent(E.METHOD_OPEN), this._cleanPreviousSpanInformation(t), this._xhrMem.set(t, {
                    span: o,
                    spanUrl: e
                }), o
            }, e.prototype._markResourceAsUsed = function(t) {
                this._usedResources.add(t)
            }, e.prototype._patchOpen = function() {
                var t = this;
                return function(e) {
                    return function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        var i = n[0],
                            o = n[1];
                        return t._createSpan(this, o, i), e.apply(this, n)
                    }
                }
            }, e.prototype._patchSend = function() {
                var t = this;

                function e(e, n) {
                    var r = t._xhrMem.get(n);
                    if (r) {
                        r.status = n.status, r.statusText = n.statusText, t._xhrMem.delete(n), r.span && t._applyAttributesAfterXHR(r.span, n);
                        var i = ny(),
                            o = Date.now();
                        setTimeout(function() {
                            var n, a, s, u;
                            "function" == typeof(n = r.callbackToRemoveEvents) && n(), a = r.span, s = r.spanUrl, u = r.sendStartTime, a && (t._findResourceAndAddNetworkEvents(r, a, s, u, i), a.addEvent(e, o), t._addFinalSpanAttributes(a, r, s), a.end(o), t._tasksCount--), t._clearResources()
                        }, 300)
                    }
                }

                function n() {
                    e(E.EVENT_ERROR, this)
                }

                function r() {
                    e(E.EVENT_ABORT, this)
                }

                function i() {
                    e(E.EVENT_TIMEOUT, this)
                }

                function o() {
                    this.status < 299 ? e(E.EVENT_LOAD, this) : e(E.EVENT_ERROR, this)
                }
                return function(e) {
                    return function() {
                        for (var a = this, s = [], u = 0; u < arguments.length; u++) s[u] = arguments[u];
                        var c = t._xhrMem.get(this);
                        if (!c) return e.apply(this, s);
                        var l = c.span,
                            p = c.spanUrl;
                        return l && p && tv.with(ee.setSpan(tv.active(), l), function() {
                            t._tasksCount++, c.sendStartTime = ny(), l.addEvent(E.METHOD_SEND), a.addEventListener("abort", r), a.addEventListener("error", n), a.addEventListener("load", o), a.addEventListener("timeout", i), c.callbackToRemoveEvents = function() {
                                var e;
                                a.removeEventListener("abort", r), a.removeEventListener("error", n), a.removeEventListener("load", o), a.removeEventListener("timeout", i), (e = t._xhrMem.get(a)) && (e.callbackToRemoveEvents = void 0), c.createdResources && c.createdResources.observer.disconnect()
                            }, t._addHeaders(a, p), t._addResourceObserver(a, p)
                        }), e.apply(this, s)
                    }
                }
            }, e.prototype.enable = function() {
                this._diag.debug("applying patch to", this.moduleName, this.version), ae(XMLHttpRequest.prototype.open) && (this._unwrap(XMLHttpRequest.prototype, "open"), this._diag.debug("removing previous patch from method open")), ae(XMLHttpRequest.prototype.send) && (this._unwrap(XMLHttpRequest.prototype, "send"), this._diag.debug("removing previous patch from method send")), this._wrap(XMLHttpRequest.prototype, "open", this._patchOpen()), this._wrap(XMLHttpRequest.prototype, "send", this._patchSend())
            }, e.prototype.disable = function() {
                this._diag.debug("removing patch from", this.moduleName, this.version), this._unwrap(XMLHttpRequest.prototype, "open"), this._unwrap(XMLHttpRequest.prototype, "send"), this._tasksCount = 0, this._xhrMem = new WeakMap, this._usedResources = new WeakSet
            }, e
        }(o7)
    };
const aN = {
    ignoreNetworkEvents: !0,
    propagateTraceHeaderCorsUrls: [/.+/g]
};
new class extends rI {
    constructor(t) {
        var e, n;
        let r = [...(null == t ? void 0 : t.instrumentations) || []];
        (null === (e = null == t ? void 0 : t.webVitalsInstrumentationConfig) || void 0 === e ? void 0 : e.enabled) !== !1 && r.push(new oW(null == t ? void 0 : t.webVitalsInstrumentationConfig)), (null === (n = null == t ? void 0 : t.globalErrorsInstrumentationConfig) || void 0 === n ? void 0 : n.enabled) !== !1 && r.push(new oZ(null == t ? void 0 : t.globalErrorsInstrumentationConfig)), super(Object.assign(Object.assign({}, t), {
            instrumentations: r,
            resource: function(t) {
                let e = rH(t[0]);
                for (let n = 1; n < t.length; n++) {
                    if (!t[n]) continue;
                    let r = rH(t[n]);
                    e = e.merge(r)
                }
                return e
            }([function() {
                let {
                    browserName: t,
                    browserVersion: e,
                    deviceType: n
                } = rF(navigator.userAgent);
                return new e_({
                    "user_agent.original": navigator.userAgent,
                    "browser.mobile": navigator.userAgent.includes("Mobi"),
                    "browser.touch_screen_enabled": navigator.maxTouchPoints > 0,
                    "browser.language": navigator.language,
                    "browser.name": t,
                    "browser.version": e,
                    "device.type": n,
                    "network.effectiveType": rj(navigator.connection),
                    "screen.width": window.screen.width,
                    "screen.height": window.screen.height,
                    "screen.size": rU(window.screen.width)
                })
            }(), function(t) {
                if (!1 === t || !(null == window ? void 0 : window.location)) return new e_({});
                let e = t ? Object.assign(Object.assign({}, rM), t) : rM,
                    {
                        href: n,
                        pathname: r,
                        search: i,
                        hash: o,
                        hostname: a
                    } = window.location;
                return new e_({
                    "entry_page.url": rk(e.url, n),
                    "entry_page.path": rk(e.path, r),
                    "entry_page.search": rk(e.search, i),
                    "entry_page.hash": rk(e.hash, o),
                    "entry_page.hostname": rk(e.hostname, a),
                    "entry_page.referrer": rk(e.referrer, document.referrer)
                })
            }(null == t ? void 0 : t.entryPageAttributes), null == t ? void 0 : t.resource, null == t ? void 0 : t.resourceAttributes, new e_({
                "honeycomb.distro.version": rD,
                "honeycomb.distro.runtime_version": "browser"
            })]),
            sampler: ii(t),
            spanProcessor: ie(t)
        })), r5(t), (null == t ? void 0 : t.debug) && function(t) {
            if (!(null == t ? void 0 : t.debug)) return;
            tm.setLogger(new Q, iL.DEBUG), tm.debug(rz("\uD83D\uDC1D Honeycomb Web SDK Debug Mode Enabled \uD83D\uDC1D"));
            let e = rW(t),
                n = Object.assign(Object.assign(Object.assign({}, rX), t), {
                    tracesEndpoint: e
                });
            (function(t) {
                let e = rZ(t) || "";
                if (!e) {
                    tm.debug(rQ);
                    return
                }
                tm.debug(rz(`API Key configured for traces: '${e}'`))
            })(n),
            function(t) {
                let e = t.serviceName || rX.serviceName;
                if (e === rX.serviceName) {
                    tm.debug(rJ);
                    return
                }
                tm.debug(`@honeycombio/opentelemetry-web: Service Name configured for traces: '${e}'`)
            }(n),
            function(t) {
                let e = rW(t);
                if (!e) {
                    tm.debug(rz("No endpoint configured for traces"));
                    return
                }
                tm.debug(rz(`Endpoint configured for traces: '${e}'`))
            }(n),
            function(t) {
                let e = rY(t);
                if (!e) {
                    tm.debug("No sampler configured for traces");
                    return
                }
                tm.debug(rz(`Sample Rate configured for traces: '${e}'`))
            }(n)
        }(t)
    }
}({
    debug: true,
    apiKey: "<your-api-key-here>",
    serviceName: "web-sdk",
    instrumentations: [function(t) {
        void 0 === t && (t = {});
        for (var e, n = 0, r = Object.keys(t); n < r.length; n++) {
            var i = r[n];
            if (!Object.prototype.hasOwnProperty.call(aC, i)) {
                tm.error('Provided instrumentation name "' + i + '" not found');
                continue
            }
        }
        for (var o = [], a = 0, s = Object.keys(aC); a < s.length; a++) {
            var u = s[a],
                c = aC[u],
                l = null !== (e = t[u]) && void 0 !== e ? e : {};
            if (!1 === l.enabled) {
                tm.debug("Disabling instrumentation for " + u);
                continue
            }
            try {
                tm.debug("Loading instrumentation for " + u), o.push(new c(l))
            } catch (t) {
                tm.error(t)
            }
        }
        return o
    }({
        "@opentelemetry/instrumentation-xml-http-request": aN,
        "@opentelemetry/instrumentation-fetch": aN,
        "@opentelemetry/instrumentation-document-load": aN,
        "@opentelemetry/instrumentation-user-interaction": aN
    })]
}).start();