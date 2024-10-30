var t, e, n, r, o, i, a, s, u, c, l, p, f, d, h, g, _, v, m, y, b, E, T, w, S, O, L = globalThis,
    P = {},
    A = {},
    R = L.parcelRequire38d5;
null == R && ((R = function(t) {
    if (t in P) return P[t].exports;
    if (t in A) {
        var e = A[t];
        delete A[t];
        var n = {
            id: t,
            exports: {}
        };
        return P[t] = n, e.call(n.exports, n, n.exports), n.exports
    }
    var r = Error("Cannot find module '" + t + "'");
    throw r.code = "MODULE_NOT_FOUND", r
}).register = function(t, e) {
    A[t] = e
}, L.parcelRequire38d5 = R), (0, R.register)("86Wyx", function(t, e) {
    ! function(n, r) {
        var o = "function",
            i = "undefined",
            a = "object",
            s = "string",
            u = "major",
            c = "model",
            l = "name",
            p = "type",
            f = "vendor",
            d = "version",
            h = "architecture",
            g = "console",
            _ = "mobile",
            v = "tablet",
            m = "smarttv",
            y = "wearable",
            b = "embedded",
            E = "Amazon",
            T = "Apple",
            w = "ASUS",
            S = "BlackBerry",
            O = "Browser",
            L = "Chrome",
            P = "Firefox",
            A = "Google",
            R = "Huawei",
            C = "Microsoft",
            N = "Motorola",
            x = "Opera",
            I = "Samsung",
            D = "Sharp",
            M = "Sony",
            k = "Xiaomi",
            j = "Zebra",
            U = "Facebook",
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
                if (typeof t === s) return t = t.replace(/^\s\s*/, ""), typeof e === i ? t : t.substring(0, 500)
            },
            $ = function(t, e) {
                for (var n, i, s, u, c, l, p = 0; p < e.length && !c;) {
                    var f = e[p],
                        d = e[p + 1];
                    for (n = i = 0; n < f.length && !c && f[n];)
                        if (c = f[n++].exec(t))
                            for (s = 0; s < d.length; s++) l = c[++i], typeof(u = d[s]) === a && u.length > 0 ? 2 === u.length ? typeof u[1] == o ? this[u[0]] = u[1].call(this, l) : this[u[0]] = u[1] : 3 === u.length ? typeof u[1] !== o || u[1].exec && u[1].test ? this[u[0]] = l ? l.replace(u[1], u[2]) : void 0 : this[u[0]] = l ? u[1].call(this, l, u[2]) : void 0 : 4 === u.length && (this[u[0]] = l ? u[3].call(this, l.replace(u[1], u[2])) : void 0) : this[u] = l || r;
                    p += 2
                }
            },
            q = function(t, e) {
                for (var n in e)
                    if (typeof e[n] === a && e[n].length > 0) {
                        for (var o = 0; o < e[n].length; o++)
                            if (G(e[n][o], t)) return "?" === n ? r : n
                    } else if (G(e[n], t)) return "?" === n ? r : n;
                return t
            },
            W = {
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
            K = {
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
                    [d, [l, "UC" + O]],
                    [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                    [d, [l, "WeChat"]],
                    [/konqueror\/([\w\.]+)/i],
                    [d, [l, "Konqueror"]],
                    [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                    [d, [l, "IE"]],
                    [/ya(?:search)?browser\/([\w\.]+)/i],
                    [d, [l, "Yandex"]],
                    [/slbrowser\/([\w\.]+)/i],
                    [d, [l, "Smart Lenovo " + O]],
                    [/(avast|avg)\/([\w\.]+)/i],
                    [
                        [l, /(.+)/, "$1 Secure " + O], d
                    ],
                    [/\bfocus\/([\w\.]+)/i],
                    [d, [l, P + " Focus"]],
                    [/\bopt\/([\w\.]+)/i],
                    [d, [l, x + " Touch"]],
                    [/coc_coc\w+\/([\w\.]+)/i],
                    [d, [l, "Coc Coc"]],
                    [/dolfin\/([\w\.]+)/i],
                    [d, [l, "Dolphin"]],
                    [/coast\/([\w\.]+)/i],
                    [d, [l, x + " Coast"]],
                    [/miuibrowser\/([\w\.]+)/i],
                    [d, [l, "MIUI " + O]],
                    [/fxios\/([-\w\.]+)/i],
                    [d, [l, P]],
                    [/\bqihu|(qi?ho?o?|360)browser/i],
                    [
                        [l, "360 " + O]
                    ],
                    [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                    [
                        [l, /(.+)/, "$1 " + O], d
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
                        [l, U], d
                    ],
                    [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                    [l, d],
                    [/\bgsa\/([\w\.]+) .*safari\//i],
                    [d, [l, "GSA"]],
                    [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                    [d, [l, "TikTok"]],
                    [/headlesschrome(?:\/([\w\.]+)| )/i],
                    [d, [l, L + " Headless"]],
                    [/ wv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [l, L + " WebView"], d
                    ],
                    [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                    [d, [l, "Android " + O]],
                    [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                    [l, d],
                    [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                    [d, [l, "Mobile Safari"]],
                    [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                    [d, l],
                    [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                    [l, [d, q, {
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
                    [d, [l, P + " Reality"]],
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
                        [p, v]
                    ],
                    [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                    [c, [f, I],
                        [p, _]
                    ],
                    [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                    [c, [f, T],
                        [p, _]
                    ],
                    [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                    [c, [f, T],
                        [p, v]
                    ],
                    [/(macintosh);/i],
                    [c, [f, T]],
                    [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                    [c, [f, D],
                        [p, _]
                    ],
                    [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                    [c, [f, R],
                        [p, v]
                    ],
                    [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                    [c, [f, R],
                        [p, _]
                    ],
                    [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                    [
                        [c, /_/g, " "],
                        [f, k],
                        [p, _]
                    ],
                    [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                    [
                        [c, /_/g, " "],
                        [f, k],
                        [p, v]
                    ],
                    [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                    [c, [f, "OPPO"],
                        [p, _]
                    ],
                    [/\b(opd2\d{3}a?) bui/i],
                    [c, [f, "OPPO"],
                        [p, v]
                    ],
                    [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                    [c, [f, "Vivo"],
                        [p, _]
                    ],
                    [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                    [c, [f, "Realme"],
                        [p, _]
                    ],
                    [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                    [c, [f, N],
                        [p, _]
                    ],
                    [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                    [c, [f, N],
                        [p, v]
                    ],
                    [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                    [c, [f, "LG"],
                        [p, v]
                    ],
                    [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                    [c, [f, "LG"],
                        [p, _]
                    ],
                    [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                    [c, [f, "Lenovo"],
                        [p, v]
                    ],
                    [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                    [
                        [c, /_/g, " "],
                        [f, "Nokia"],
                        [p, _]
                    ],
                    [/(pixel c)\b/i],
                    [c, [f, A],
                        [p, v]
                    ],
                    [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                    [c, [f, A],
                        [p, _]
                    ],
                    [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                    [c, [f, M],
                        [p, _]
                    ],
                    [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                    [
                        [c, "Xperia Tablet"],
                        [f, M],
                        [p, v]
                    ],
                    [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                    [c, [f, "OnePlus"],
                        [p, _]
                    ],
                    [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                    [c, [f, E],
                        [p, v]
                    ],
                    [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                    [
                        [c, /(.+)/g, "Fire Phone $1"],
                        [f, E],
                        [p, _]
                    ],
                    [/(playbook);[-\w\),; ]+(rim)/i],
                    [c, f, [p, v]],
                    [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                    [c, [f, S],
                        [p, _]
                    ],
                    [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                    [c, [f, w],
                        [p, v]
                    ],
                    [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                    [c, [f, w],
                        [p, _]
                    ],
                    [/(nexus 9)/i],
                    [c, [f, "HTC"],
                        [p, v]
                    ],
                    [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                    [f, [c, /_/g, " "],
                        [p, _]
                    ],
                    [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                    [c, [f, "Acer"],
                        [p, v]
                    ],
                    [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                    [c, [f, "Meizu"],
                        [p, _]
                    ],
                    [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                    [c, [f, "Ulefone"],
                        [p, _]
                    ],
                    [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                    [f, c, [p, _]],
                    [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                    [f, c, [p, v]],
                    [/(surface duo)/i],
                    [c, [f, C],
                        [p, v]
                    ],
                    [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                    [c, [f, "Fairphone"],
                        [p, _]
                    ],
                    [/(u304aa)/i],
                    [c, [f, "AT&T"],
                        [p, _]
                    ],
                    [/\bsie-(\w*)/i],
                    [c, [f, "Siemens"],
                        [p, _]
                    ],
                    [/\b(rct\w+) b/i],
                    [c, [f, "RCA"],
                        [p, v]
                    ],
                    [/\b(venue[\d ]{2,7}) b/i],
                    [c, [f, "Dell"],
                        [p, v]
                    ],
                    [/\b(q(?:mv|ta)\w+) b/i],
                    [c, [f, "Verizon"],
                        [p, v]
                    ],
                    [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                    [c, [f, "Barnes & Noble"],
                        [p, v]
                    ],
                    [/\b(tm\d{3}\w+) b/i],
                    [c, [f, "NuVision"],
                        [p, v]
                    ],
                    [/\b(k88) b/i],
                    [c, [f, "ZTE"],
                        [p, v]
                    ],
                    [/\b(nx\d{3}j) b/i],
                    [c, [f, "ZTE"],
                        [p, _]
                    ],
                    [/\b(gen\d{3}) b.+49h/i],
                    [c, [f, "Swiss"],
                        [p, _]
                    ],
                    [/\b(zur\d{3}) b/i],
                    [c, [f, "Swiss"],
                        [p, v]
                    ],
                    [/\b((zeki)?tb.*\b) b/i],
                    [c, [f, "Zeki"],
                        [p, v]
                    ],
                    [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                    [
                        [f, "Dragon Touch"], c, [p, v]
                    ],
                    [/\b(ns-?\w{0,9}) b/i],
                    [c, [f, "Insignia"],
                        [p, v]
                    ],
                    [/\b((nxa|next)-?\w{0,9}) b/i],
                    [c, [f, "NextBook"],
                        [p, v]
                    ],
                    [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                    [
                        [f, "Voice"], c, [p, _]
                    ],
                    [/\b(lvtel\-)?(v1[12]) b/i],
                    [
                        [f, "LvTel"], c, [p, _]
                    ],
                    [/\b(ph-1) /i],
                    [c, [f, "Essential"],
                        [p, _]
                    ],
                    [/\b(v(100md|700na|7011|917g).*\b) b/i],
                    [c, [f, "Envizen"],
                        [p, v]
                    ],
                    [/\b(trio[-\w\. ]+) b/i],
                    [c, [f, "MachSpeed"],
                        [p, v]
                    ],
                    [/\btu_(1491) b/i],
                    [c, [f, "Rotor"],
                        [p, v]
                    ],
                    [/(shield[\w ]+) b/i],
                    [c, [f, "Nvidia"],
                        [p, v]
                    ],
                    [/(sprint) (\w+)/i],
                    [f, c, [p, _]],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [c, /\./g, " "],
                        [f, C],
                        [p, _]
                    ],
                    [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                    [c, [f, j],
                        [p, v]
                    ],
                    [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                    [c, [f, j],
                        [p, _]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [f, [p, m]],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [c, /^/, "SmartTV"],
                        [f, I],
                        [p, m]
                    ],
                    [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                    [
                        [f, "LG"],
                        [p, m]
                    ],
                    [/(apple) ?tv/i],
                    [f, [c, T + " TV"],
                        [p, m]
                    ],
                    [/crkey/i],
                    [
                        [c, L + "cast"],
                        [f, A],
                        [p, m]
                    ],
                    [/droid.+aft(\w+)( bui|\))/i],
                    [c, [f, E],
                        [p, m]
                    ],
                    [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                    [c, [f, D],
                        [p, m]
                    ],
                    [/(bravia[\w ]+)( bui|\))/i],
                    [c, [f, M],
                        [p, m]
                    ],
                    [/(mitv-\w{5}) bui/i],
                    [c, [f, k],
                        [p, m]
                    ],
                    [/Hbbtv.*(technisat) (.*);/i],
                    [f, c, [p, m]],
                    [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                    [
                        [f, z],
                        [c, z],
                        [p, m]
                    ],
                    [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                    [
                        [p, m]
                    ],
                    [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                    [f, c, [p, g]],
                    [/droid.+; (shield) bui/i],
                    [c, [f, "Nvidia"],
                        [p, g]
                    ],
                    [/(playstation [345portablevi]+)/i],
                    [c, [f, M],
                        [p, g]
                    ],
                    [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                    [c, [f, C],
                        [p, g]
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
                    [c, [f, j],
                        [p, y]
                    ],
                    [/(quest( \d| pro)?)/i],
                    [c, [f, U],
                        [p, y]
                    ],
                    [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                    [f, [p, b]],
                    [/(aeobc)\b/i],
                    [c, [f, E],
                        [p, b]
                    ],
                    [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                    [c, [p, _]],
                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                    [c, [p, v]],
                    [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                    [
                        [p, v]
                    ],
                    [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                    [
                        [p, _]
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
                    [l, [d, q, W]],
                    [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                    [
                        [d, q, W],
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
                    [d, [l, S]],
                    [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                    [d, [l, "Symbian"]],
                    [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                    [d, [l, P + " OS"]],
                    [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                    [d, [l, "webOS"]],
                    [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                    [d, [l, "watchOS"]],
                    [/crkey\/([\d\.]+)/i],
                    [d, [l, L + "cast"]],
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
                var g = typeof n !== i && n.navigator ? n.navigator : r,
                    m = t || (g && g.userAgent ? g.userAgent : ""),
                    y = g && g.userAgentData ? g.userAgentData : r,
                    b = e ? H(K, e) : K,
                    E = g && g.userAgent == m;
                return this.getBrowser = function() {
                    var t, e = {};
                    return e[l] = r, e[d] = r, $.call(e, m, b.browser), e[u] = typeof(t = e[d]) === s ? t.replace(/[^\d\.]/g, "").split(".")[0] : r, E && g && g.brave && typeof g.brave.isBrave == o && (e[l] = "Brave"), e
                }, this.getCPU = function() {
                    var t = {};
                    return t[h] = r, $.call(t, m, b.cpu), t
                }, this.getDevice = function() {
                    var t = {};
                    return t[f] = r, t[c] = r, t[p] = r, $.call(t, m, b.device), E && !t[p] && y && y.mobile && (t[p] = _), E && "Macintosh" == t[c] && g && typeof g.standalone !== i && g.maxTouchPoints && g.maxTouchPoints > 2 && (t[c] = "iPad", t[p] = v), t
                }, this.getEngine = function() {
                    var t = {};
                    return t[l] = r, t[d] = r, $.call(t, m, b.engine), t
                }, this.getOS = function() {
                    var t = {};
                    return t[l] = r, t[d] = r, $.call(t, m, b.os), E && !t[l] && y && y.platform && "Unknown" != y.platform && (t[l] = y.platform.replace(/chrome os/i, B).replace(/macos/i, F)), t
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
                    return m
                }, this.setUA = function(t) {
                    return m = typeof t === s && t.length > 500 ? z(t, 500) : t, this
                }, this.setUA(m), this
            };
        Z.VERSION = "1.0.38", Z.BROWSER = V([l, d, u]), Z.CPU = V([h]), Z.DEVICE = V([c, f, p, g, _, m, v, y, b]), Z.ENGINE = Z.OS = V([l, d]), typeof e !== i ? (t.exports && (e = t.exports = Z), e.UAParser = Z) : typeof define === o && define.amd ? define(function() {
            return Z
        }) : typeof n !== i && (n.UAParser = Z);
        var Y = typeof n !== i && (n.jQuery || n.Zepto);
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
var C = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof L ? L : {},
    N = "1.9.0",
    x = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/,
    I = function(t) {
        var e = new Set([t]),
            n = new Set,
            r = t.match(x);
        if (!r) return function() {
            return !1
        };
        var o = {
            major: +r[1],
            minor: +r[2],
            patch: +r[3],
            prerelease: r[4]
        };
        if (null != o.prerelease) return function(e) {
            return e === t
        };

        function i(t) {
            return n.add(t), !1
        }
        return function(t) {
            if (e.has(t)) return !0;
            if (n.has(t)) return !1;
            var r = t.match(x);
            if (!r) return i(t);
            var a = {
                major: +r[1],
                minor: +r[2],
                patch: +r[3],
                prerelease: r[4]
            };
            return null != a.prerelease || o.major !== a.major ? i(t) : 0 === o.major ? o.minor === a.minor && o.patch <= a.patch ? (e.add(t), !0) : i(t) : o.minor <= a.minor ? (e.add(t), !0) : i(t)
        }
    }(N),
    D = Symbol.for("opentelemetry.js.api." + N.split(".")[0]);

function M(t, e, n, r) {
    void 0 === r && (r = !1);
    var o, i = C[D] = null !== (o = C[D]) && void 0 !== o ? o : {
        version: N
    };
    if (!r && i[t]) {
        var a = Error("@opentelemetry/api: Attempted duplicate registration of API: " + t);
        return n.error(a.stack || a.message), !1
    }
    if (i.version !== N) {
        var a = Error("@opentelemetry/api: Registration of version v" + i.version + " for " + t + " does not match previously registered API v" + N);
        return n.error(a.stack || a.message), !1
    }
    return i[t] = e, n.debug("@opentelemetry/api: Registered a global for " + t + " v" + N + "."), !0
}

function k(t) {
    var e, n, r = null === (e = C[D]) || void 0 === e ? void 0 : e.version;
    if (r && I(r)) return null === (n = C[D]) || void 0 === n ? void 0 : n[t]
}

function j(t, e) {
    e.debug("@opentelemetry/api: Unregistering a global for " + t + " v" + N + ".");
    var n = C[D];
    n && delete n[t]
}
var U = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    },
    B = function(t, e, n) {
        if (n || 2 == arguments.length)
            for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e))
    },
    F = function() {
        function t(t) {
            this._namespace = t.namespace || "DiagComponentLogger"
        }
        return t.prototype.debug = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return H("debug", this._namespace, t)
        }, t.prototype.error = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return H("error", this._namespace, t)
        }, t.prototype.info = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return H("info", this._namespace, t)
        }, t.prototype.warn = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return H("warn", this._namespace, t)
        }, t.prototype.verbose = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return H("verbose", this._namespace, t)
        }, t
    }();

function H(t, e, n) {
    var r = k("diag");
    if (r) return n.unshift(e), r[t].apply(r, B([], U(n), !1))
}(oi = ow || (ow = {}))[oi.NONE = 0] = "NONE", oi[oi.ERROR = 30] = "ERROR", oi[oi.WARN = 50] = "WARN", oi[oi.INFO = 60] = "INFO", oi[oi.DEBUG = 70] = "DEBUG", oi[oi.VERBOSE = 80] = "VERBOSE", oi[oi.ALL = 9999] = "ALL";
var V = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    },
    G = function(t, e, n) {
        if (n || 2 == arguments.length)
            for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e))
    },
    X = function() {
        function t() {
            function t(t) {
                return function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var r = k("diag");
                    if (r) return r[t].apply(r, G([], V(e), !1))
                }
            }
            var e = this;
            e.setLogger = function(t, n) {
                if (void 0 === n && (n = {
                        logLevel: ow.INFO
                    }), t === e) {
                    var r, o, i, a = Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                    return e.error(null !== (r = a.stack) && void 0 !== r ? r : a.message), !1
                }
                "number" == typeof n && (n = {
                    logLevel: n
                });
                var s = k("diag"),
                    u = function(t, e) {
                        function n(n, r) {
                            var o = e[n];
                            return "function" == typeof o && t >= r ? o.bind(e) : function() {}
                        }
                        return t < ow.NONE ? t = ow.NONE : t > ow.ALL && (t = ow.ALL), e = e || {}, {
                            error: n("error", ow.ERROR),
                            warn: n("warn", ow.WARN),
                            info: n("info", ow.INFO),
                            debug: n("debug", ow.DEBUG),
                            verbose: n("verbose", ow.VERBOSE)
                        }
                    }(null !== (o = n.logLevel) && void 0 !== o ? o : ow.INFO, t);
                if (s && !n.suppressOverrideMessage) {
                    var c = null !== (i = Error().stack) && void 0 !== i ? i : "<failed to generate stacktrace>";
                    s.warn("Current logger will be overwritten from " + c), u.warn("Current logger will overwrite one already registered from " + c)
                }
                return M("diag", u, e, !0)
            }, e.disable = function() {
                j("diag", e)
            }, e.createComponentLogger = function(t) {
                return new F(t)
            }, e.verbose = t("verbose"), e.debug = t("debug"), e.info = t("info"), e.warn = t("warn"), e.error = t("error")
        }
        return t.instance = function() {
            return this._instance || (this._instance = new t), this._instance
        }, t
    }(),
    z = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    },
    $ = function(t) {
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
    q = function() {
        function t(t) {
            this._entries = t ? new Map(t) : new Map
        }
        return t.prototype.getEntry = function(t) {
            var e = this._entries.get(t);
            if (e) return Object.assign({}, e)
        }, t.prototype.getAllEntries = function() {
            return Array.from(this._entries.entries()).map(function(t) {
                var e = z(t, 2);
                return [e[0], e[1]]
            })
        }, t.prototype.setEntry = function(e, n) {
            var r = new t(this._entries);
            return r._entries.set(e, n), r
        }, t.prototype.removeEntry = function(e) {
            var n = new t(this._entries);
            return n._entries.delete(e), n
        }, t.prototype.removeEntries = function() {
            for (var e, n, r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
            var i = new t(this._entries);
            try {
                for (var a = $(r), s = a.next(); !s.done; s = a.next()) {
                    var u = s.value;
                    i._entries.delete(u)
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
            return i
        }, t.prototype.clear = function() {
            return new t
        }, t
    }(),
    W = Symbol("BaggageEntryMetadata"),
    K = X.instance();

function Z(t) {
    return void 0 === t && (t = {}), new q(new Map(Object.entries(t)))
}

function Y(t) {
    return Symbol.for(t)
}
var Q = new function t(e) {
        var n = this;
        n._currentContext = e ? new Map(e) : new Map, n.getValue = function(t) {
            return n._currentContext.get(t)
        }, n.setValue = function(e, r) {
            var o = new t(n._currentContext);
            return o._currentContext.set(e, r), o
        }, n.deleteValue = function(e) {
            var r = new t(n._currentContext);
            return r._currentContext.delete(e), r
        }
    },
    J = [{
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
    tt = function() {
        for (var t = 0; t < J.length; t++) this[J[t].n] = function(t) {
            return function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                if (console) {
                    var r = console[t];
                    if ("function" != typeof r && (r = console.log), "function" == typeof r) return r.apply(console, e)
                }
            }
        }(J[t].c)
    };
(oa = oS || (oS = {}))[oa.INT = 0] = "INT", oa[oa.DOUBLE = 1] = "DOUBLE", (os = oO || (oO = {}))[os.NOT_RECORD = 0] = "NOT_RECORD", os[os.RECORD = 1] = "RECORD", os[os.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED", (ou = oL || (oL = {}))[ou.INTERNAL = 0] = "INTERNAL", ou[ou.SERVER = 1] = "SERVER", ou[ou.CLIENT = 2] = "CLIENT", ou[ou.PRODUCER = 3] = "PRODUCER", ou[ou.CONSUMER = 4] = "CONSUMER", (oc = oP || (oP = {}))[oc.UNSET = 0] = "UNSET", oc[oc.OK = 1] = "OK", oc[oc.ERROR = 2] = "ERROR", (ol = oA || (oA = {}))[ol.NONE = 0] = "NONE", ol[ol.SAMPLED = 1] = "SAMPLED";
var te = "0000000000000000",
    tn = "00000000000000000000000000000000",
    tr = {
        traceId: tn,
        spanId: te,
        traceFlags: oA.NONE
    },
    to = function() {
        function t(t) {
            void 0 === t && (t = tr), this._spanContext = t
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
    ti = /^([0-9a-f]{32})$/i,
    ta = /^[0-9a-f]{16}$/i;

function ts(t) {
    return ti.test(t) && t !== tn
}

function tu(t) {
    var e;
    return ts(t.traceId) && (e = t.spanId, ta.test(e) && e !== te)
}

function tc(t) {
    return new to(t)
}
var tl = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    },
    tp = function(t, e, n) {
        if (n || 2 == arguments.length)
            for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e))
    },
    tf = function() {
        function t() {}
        return t.prototype.active = function() {
            return Q
        }, t.prototype.with = function(t, e, n) {
            for (var r = [], o = 3; o < arguments.length; o++) r[o - 3] = arguments[o];
            return e.call.apply(e, tp([n], tl(r), !1))
        }, t.prototype.bind = function(t, e) {
            return e
        }, t.prototype.enable = function() {
            return this
        }, t.prototype.disable = function() {
            return this
        }, t
    }(),
    td = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    },
    th = function(t, e, n) {
        if (n || 2 == arguments.length)
            for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e))
    },
    tg = "context",
    t_ = new tf,
    tv = function() {
        function t() {}
        return t.getInstance = function() {
            return this._instance || (this._instance = new t), this._instance
        }, t.prototype.setGlobalContextManager = function(t) {
            return M(tg, t, X.instance())
        }, t.prototype.active = function() {
            return this._getContextManager().active()
        }, t.prototype.with = function(t, e, n) {
            for (var r, o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
            return (r = this._getContextManager()).with.apply(r, th([t, e, n], td(o), !1))
        }, t.prototype.bind = function(t, e) {
            return this._getContextManager().bind(t, e)
        }, t.prototype._getContextManager = function() {
            return k(tg) || t_
        }, t.prototype.disable = function() {
            this._getContextManager().disable(), j(tg, X.instance())
        }, t
    }(),
    tm = tv.getInstance(),
    ty = X.instance(),
    tb = (op = function(t, e) {
        return (op = Object.setPrototypeOf || ({
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
        op(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    tE = function() {
        function t() {}
        return t.prototype.createGauge = function(t, e) {
            return tI
        }, t.prototype.createHistogram = function(t, e) {
            return tD
        }, t.prototype.createCounter = function(t, e) {
            return tx
        }, t.prototype.createUpDownCounter = function(t, e) {
            return tM
        }, t.prototype.createObservableGauge = function(t, e) {
            return tj
        }, t.prototype.createObservableCounter = function(t, e) {
            return tk
        }, t.prototype.createObservableUpDownCounter = function(t, e) {
            return tU
        }, t.prototype.addBatchObservableCallback = function(t, e) {}, t.prototype.removeBatchObservableCallback = function(t) {}, t
    }(),
    tT = function() {},
    tw = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return tb(e, t), e.prototype.add = function(t, e) {}, e
    }(tT),
    tS = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return tb(e, t), e.prototype.add = function(t, e) {}, e
    }(tT),
    tO = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return tb(e, t), e.prototype.record = function(t, e) {}, e
    }(tT),
    tL = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return tb(e, t), e.prototype.record = function(t, e) {}, e
    }(tT),
    tP = function() {
        function t() {}
        return t.prototype.addCallback = function(t) {}, t.prototype.removeCallback = function(t) {}, t
    }(),
    tA = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return tb(e, t), e
    }(tP),
    tR = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return tb(e, t), e
    }(tP),
    tC = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return tb(e, t), e
    }(tP),
    tN = new tE,
    tx = new tw,
    tI = new tO,
    tD = new tL,
    tM = new tS,
    tk = new tA,
    tj = new tR,
    tU = new tC,
    tB = new(function() {
        function t() {}
        return t.prototype.getMeter = function(t, e, n) {
            return tN
        }, t
    }()),
    tF = "metrics",
    tH = (function() {
        function t() {}
        return t.getInstance = function() {
            return this._instance || (this._instance = new t), this._instance
        }, t.prototype.setGlobalMeterProvider = function(t) {
            return M(tF, t, X.instance())
        }, t.prototype.getMeterProvider = function() {
            return k(tF) || tB
        }, t.prototype.getMeter = function(t, e, n) {
            return this.getMeterProvider().getMeter(t, e, n)
        }, t.prototype.disable = function() {
            j(tF, X.instance())
        }, t
    })().getInstance(),
    tV = function() {
        function t() {}
        return t.prototype.inject = function(t, e) {}, t.prototype.extract = function(t, e) {
            return t
        }, t.prototype.fields = function() {
            return []
        }, t
    }(),
    tG = {
        get: function(t, e) {
            if (null != t) return t[e]
        },
        keys: function(t) {
            return null == t ? [] : Object.keys(t)
        }
    },
    tX = {
        set: function(t, e, n) {
            null != t && (t[e] = n)
        }
    },
    tz = Y("OpenTelemetry Baggage Key");

function t$(t) {
    return t.getValue(tz) || void 0
}

function tq() {
    return t$(tv.getInstance().active())
}

function tW(t, e) {
    return t.setValue(tz, e)
}

function tK(t) {
    return t.deleteValue(tz)
}
var tZ = "propagation",
    tY = new tV,
    tQ = (function() {
        function t() {
            this.createBaggage = Z, this.getBaggage = t$, this.getActiveBaggage = tq, this.setBaggage = tW, this.deleteBaggage = tK
        }
        return t.getInstance = function() {
            return this._instance || (this._instance = new t), this._instance
        }, t.prototype.setGlobalPropagator = function(t) {
            return M(tZ, t, X.instance())
        }, t.prototype.inject = function(t, e, n) {
            return void 0 === n && (n = tX), this._getGlobalPropagator().inject(t, e, n)
        }, t.prototype.extract = function(t, e, n) {
            return void 0 === n && (n = tG), this._getGlobalPropagator().extract(t, e, n)
        }, t.prototype.fields = function() {
            return this._getGlobalPropagator().fields()
        }, t.prototype.disable = function() {
            j(tZ, X.instance())
        }, t.prototype._getGlobalPropagator = function() {
            return k(tZ) || tY
        }, t
    })().getInstance(),
    tJ = Y("OpenTelemetry Context Key SPAN");

function t0(t) {
    return t.getValue(tJ) || void 0
}

function t1() {
    return t0(tv.getInstance().active())
}

function t2(t, e) {
    return t.setValue(tJ, e)
}

function t3(t) {
    return t.deleteValue(tJ)
}

function t4(t, e) {
    return t2(t, new to(e))
}

function t6(t) {
    var e;
    return null === (e = t0(t)) || void 0 === e ? void 0 : e.spanContext()
}
var t5 = tv.getInstance(),
    t9 = function() {
        function t() {}
        return t.prototype.startSpan = function(t, e, n) {
            if (void 0 === n && (n = t5.active()), null == e ? void 0 : e.root) return new to;
            var r = n && t6(n);
            return "object" == typeof r && "string" == typeof r.spanId && "string" == typeof r.traceId && "number" == typeof r.traceFlags && tu(r) ? new to(r) : new to
        }, t.prototype.startActiveSpan = function(t, e, n, r) {
            if (!(arguments.length < 2)) {
                2 == arguments.length ? a = e : 3 == arguments.length ? (o = e, a = n) : (o = e, i = n, a = r);
                var o, i, a, s = null != i ? i : t5.active(),
                    u = this.startSpan(t, o, s),
                    c = t2(s, u);
                return t5.with(c, a, void 0, u)
            }
        }, t
    }(),
    t8 = new t9,
    t7 = function() {
        function t(t, e, n, r) {
            this._provider = t, this.name = e, this.version = n, this.options = r
        }
        return t.prototype.startSpan = function(t, e, n) {
            return this._getTracer().startSpan(t, e, n)
        }, t.prototype.startActiveSpan = function(t, e, n, r) {
            var o = this._getTracer();
            return Reflect.apply(o.startActiveSpan, o, arguments)
        }, t.prototype._getTracer = function() {
            if (this._delegate) return this._delegate;
            var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
            return t ? (this._delegate = t, this._delegate) : t8
        }, t
    }(),
    et = new(function() {
        function t() {}
        return t.prototype.getTracer = function(t, e, n) {
            return new t9
        }, t
    }()),
    ee = function() {
        function t() {}
        return t.prototype.getTracer = function(t, e, n) {
            var r;
            return null !== (r = this.getDelegateTracer(t, e, n)) && void 0 !== r ? r : new t7(this, t, e, n)
        }, t.prototype.getDelegate = function() {
            var t;
            return null !== (t = this._delegate) && void 0 !== t ? t : et
        }, t.prototype.setDelegate = function(t) {
            this._delegate = t
        }, t.prototype.getDelegateTracer = function(t, e, n) {
            var r;
            return null === (r = this._delegate) || void 0 === r ? void 0 : r.getTracer(t, e, n)
        }, t
    }(),
    en = "trace",
    er = (function() {
        function t() {
            this._proxyTracerProvider = new ee, this.wrapSpanContext = tc, this.isSpanContextValid = tu, this.deleteSpan = t3, this.getSpan = t0, this.getActiveSpan = t1, this.getSpanContext = t6, this.setSpan = t2, this.setSpanContext = t4
        }
        return t.getInstance = function() {
            return this._instance || (this._instance = new t), this._instance
        }, t.prototype.setGlobalTracerProvider = function(t) {
            var e = M(en, this._proxyTracerProvider, X.instance());
            return e && this._proxyTracerProvider.setDelegate(t), e
        }, t.prototype.getTracerProvider = function() {
            return k(en) || this._proxyTracerProvider
        }, t.prototype.getTracer = function(t, e) {
            return this.getTracerProvider().getTracer(t, e)
        }, t.prototype.disable = function() {
            j(en, X.instance()), this._proxyTracerProvider = new ee
        }, t
    })().getInstance(),
    eo = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof L ? L : {},
    ei = Symbol.for("io.opentelemetry.js.api.logs"),
    ea = function() {
        function t() {}
        return t.prototype.emit = function(t) {}, t
    }();
new ea;
var es = new(function() {
        function t() {}
        return t.prototype.getLogger = function(t, e, n) {
            return new ea
        }, t
    }()),
    eu = (function() {
        function t() {}
        return t.getInstance = function() {
            return this._instance || (this._instance = new t), this._instance
        }, t.prototype.setGlobalLoggerProvider = function(t) {
            return eo[ei] ? this.getLoggerProvider() : (eo[ei] = function(e) {
                return 1 === e ? t : es
            }, t)
        }, t.prototype.getLoggerProvider = function() {
            var t, e;
            return null !== (e = null === (t = eo[ei]) || void 0 === t ? void 0 : t.call(eo, 1)) && void 0 !== e ? e : es
        }, t.prototype.getLogger = function(t, e, n) {
            return this.getLoggerProvider().getLogger(t, e, n)
        }, t.prototype.disable = function() {
            delete eo[ei]
        }, t
    })().getInstance(),
    ec = "service.name",
    el = "telemetry.sdk.name",
    ep = "telemetry.sdk.language",
    ef = "telemetry.sdk.version",
    ed = ((oR = {})[el] = "opentelemetry", oR["process.runtime.name"] = "browser", oR[ep] = "webjs", oR[ef] = "1.26.0", oR),
    eh = function() {
        return (eh = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    },
    eg = function(t, e) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function s(i) {
            return function(s) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (t) {
                        i = [6, t], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    },
    e_ = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    },
    ev = function() {
        function t(t, e) {
            var n, r = this;
            this._attributes = t, this.asyncAttributesPending = null != e, this._syncAttributes = null !== (n = this._attributes) && void 0 !== n ? n : {}, this._asyncAttributesPromise = null == e ? void 0 : e.then(function(t) {
                return r._attributes = Object.assign({}, r._attributes, t), r.asyncAttributesPending = !1, t
            }, function(t) {
                return ty.debug("a resource's async attributes promise rejected: %s", t), r.asyncAttributesPending = !1, {}
            })
        }
        return t.empty = function() {
            return t.EMPTY
        }, t.default = function() {
            var e;
            return new t(((e = {})[ec] = "unknown_service", e[ep] = ed[ep], e[el] = ed[el], e[ef] = ed[ef], e))
        }, Object.defineProperty(t.prototype, "attributes", {
            get: function() {
                var t;
                return this.asyncAttributesPending && ty.error("Accessing resource attributes before async attributes settled"), null !== (t = this._attributes) && void 0 !== t ? t : {}
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.waitForAsyncAttributes = function() {
            var t, e, n, r;
            return t = this, e = void 0, n = void 0, r = function() {
                return eg(this, function(t) {
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
            }, new(n || (n = Promise))(function(o, i) {
                function a(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function u(t) {
                    var e;
                    t.done ? o(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                        t(e)
                    })).then(a, s)
                }
                u((r = r.apply(t, e || [])).next())
            })
        }, t.prototype.merge = function(e) {
            var n, r = this;
            if (!e) return this;
            var o = eh(eh({}, this._syncAttributes), null !== (n = e._syncAttributes) && void 0 !== n ? n : e.attributes);
            return this._asyncAttributesPromise || e._asyncAttributesPromise ? new t(o, Promise.all([this._asyncAttributesPromise, e._asyncAttributesPromise]).then(function(t) {
                var n, o = e_(t, 2),
                    i = o[0],
                    a = o[1];
                return eh(eh(eh(eh({}, r._syncAttributes), i), null !== (n = e._syncAttributes) && void 0 !== n ? n : e.attributes), a)
            })) : new t(o)
        }, t.EMPTY = new t({}), t
    }(),
    em = function(t, e) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function s(i) {
            return function(s) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (t) {
                        i = [6, t], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    },
    ey = function(t) {
        void 0 === t && (t = {});
        var e, n = (null !== (e = t.detectors) && void 0 !== e ? e : []).map(function(e) {
                try {
                    var n, r, o, i, a, s = e.detect(t);
                    return (a = null !== s && "object" == typeof s && "function" == typeof s.then ? new ev({}, (n = void 0, r = void 0, o = void 0, i = function() {
                        var t;
                        return em(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, s];
                                case 1:
                                    return t = e.sent(), [2, t.attributes]
                            }
                        })
                    }, new(o || (o = Promise))(function(t, e) {
                        function a(t) {
                            try {
                                u(i.next(t))
                            } catch (t) {
                                e(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(i.throw(t))
                            } catch (t) {
                                e(t)
                            }
                        }

                        function u(e) {
                            var n;
                            e.done ? t(e.value) : ((n = e.value) instanceof o ? n : new o(function(t) {
                                t(n)
                            })).then(a, s)
                        }
                        u((i = i.apply(n, r || [])).next())
                    }))) : s).waitForAsyncAttributes ? a.waitForAsyncAttributes().then(function() {
                        return ty.debug(e.constructor.name + " found resource.", a)
                    }) : ty.debug(e.constructor.name + " found resource.", a), a
                } catch (t) {
                    return ty.error(e.constructor.name + " failed: " + t.message), ev.empty()
                }
            }),
            r = n.reduce(function(t, e) {
                return t.merge(e)
            }, ev.empty());
        return r.waitForAsyncAttributes && r.waitForAsyncAttributes().then(function() {
            eb(n)
        }), r
    },
    eb = function(t) {
        t.forEach(function(t) {
            if (Object.keys(t.attributes).length > 0) {
                var e = JSON.stringify(t.attributes, null, 4);
                ty.verbose(e)
            }
        })
    };
(of = oC || (oC = {}))[of.NOT_RECORD = 0] = "NOT_RECORD", of [of.RECORD = 1] = "RECORD", of [of.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
var eE = function() {
        function t() {}
        return t.prototype.shouldSample = function() {
            return {
                decision: oC.NOT_RECORD
            }
        }, t.prototype.toString = function() {
            return "AlwaysOffSampler"
        }, t
    }(),
    eT = function() {
        function t() {}
        return t.prototype.shouldSample = function() {
            return {
                decision: oC.RECORD_AND_SAMPLED
            }
        }, t.prototype.toString = function() {
            return "AlwaysOnSampler"
        }, t
    }(),
    ew = function() {
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
    eS = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    },
    eO = function(t, e, n) {
        if (n || 2 == arguments.length)
            for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e))
    },
    eL = function() {
        function t(t, e) {
            this._callback = t, this._that = e, this._isCalled = !1, this._deferred = new ew
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
                    Promise.resolve((t = this._callback).call.apply(t, eO([this._that], eS(n), !1))).then(function(t) {
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
(od = oN || (oN = {}))[od.SUCCESS = 0] = "SUCCESS", od[od.FAILED = 1] = "FAILED", (oh = ox || (ox = {})).AlwaysOff = "always_off", oh.AlwaysOn = "always_on", oh.ParentBasedAlwaysOff = "parentbased_always_off", oh.ParentBasedAlwaysOn = "parentbased_always_on", oh.ParentBasedTraceIdRatio = "parentbased_traceidratio", oh.TraceIdRatio = "traceidratio";
var eP = ["OTEL_SDK_DISABLED"],
    eA = ["OTEL_BSP_EXPORT_TIMEOUT", "OTEL_BSP_MAX_EXPORT_BATCH_SIZE", "OTEL_BSP_MAX_QUEUE_SIZE", "OTEL_BSP_SCHEDULE_DELAY", "OTEL_BLRP_EXPORT_TIMEOUT", "OTEL_BLRP_MAX_EXPORT_BATCH_SIZE", "OTEL_BLRP_MAX_QUEUE_SIZE", "OTEL_BLRP_SCHEDULE_DELAY", "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_EVENT_COUNT_LIMIT", "OTEL_SPAN_LINK_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT", "OTEL_EXPORTER_OTLP_TIMEOUT", "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT", "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT", "OTEL_EXPORTER_OTLP_LOGS_TIMEOUT", "OTEL_EXPORTER_JAEGER_AGENT_PORT"],
    eR = ["OTEL_NO_PATCH_MODULES", "OTEL_PROPAGATORS"],
    eC = 1 / 0,
    eN = {
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
        OTEL_LOG_LEVEL: ow.INFO,
        OTEL_NO_PATCH_MODULES: [],
        OTEL_PROPAGATORS: ["tracecontext", "baggage"],
        OTEL_RESOURCE_ATTRIBUTES: "",
        OTEL_SERVICE_NAME: "",
        OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: eC,
        OTEL_ATTRIBUTE_COUNT_LIMIT: 128,
        OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: eC,
        OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: 128,
        OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: eC,
        OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: 128,
        OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
        OTEL_SPAN_LINK_COUNT_LIMIT: 128,
        OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: 128,
        OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: 128,
        OTEL_TRACES_EXPORTER: "",
        OTEL_TRACES_SAMPLER: ox.ParentBasedAlwaysOn,
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
    ex = {
        ALL: ow.ALL,
        VERBOSE: ow.VERBOSE,
        DEBUG: ow.DEBUG,
        INFO: ow.INFO,
        WARN: ow.WARN,
        ERROR: ow.ERROR,
        NONE: ow.NONE
    };

function eI(t) {
    var e = {};
    for (var n in eN)
        if ("OTEL_LOG_LEVEL" === n) ! function(t, e, n) {
            var r = n[t];
            if ("string" == typeof r) {
                var o = ex[r.toUpperCase()];
                null != o && (e[t] = o)
            }
        }(n, e, t);
        else if (eP.indexOf(n) > -1) ! function(t, e, n) {
        if (void 0 !== n[t]) {
            var r = String(n[t]);
            e[t] = "true" === r.toLowerCase()
        }
    }(n, e, t);
    else if (eA.indexOf(n) > -1) ! function(t, e, n, r, o) {
        if (void 0 === r && (r = -1 / 0), void 0 === o && (o = 1 / 0), void 0 !== n[t]) {
            var i = Number(n[t]);
            isNaN(i) || (i < r ? e[t] = r : i > o ? e[t] = o : e[t] = i)
        }
    }(n, e, t);
    else if (eR.indexOf(n) > -1) ! function(t, e, n, r) {
        void 0 === r && (r = ",");
        var o = n[t];
        "string" == typeof o && (e[t] = o.split(r).map(function(t) {
            return t.trim()
        }))
    }(n, e, t);
    else {
        var r = t[n];
        null != r && (e[n] = String(r))
    }
    return e
}
var eD = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof L ? L : {};

function eM() {
    return Object.assign({}, eN, eI(eD))
}
var ek = function(t) {
    ty.error("string" == typeof t ? t : JSON.stringify(function(t) {
        for (var e = {}, n = t; null !== n;) Object.getOwnPropertyNames(n).forEach(function(t) {
            if (!e[t]) {
                var r = n[t];
                r && (e[t] = String(r))
            }
        }), n = Object.getPrototypeOf(n);
        return e
    }(t)))
};

function ej(t) {
    try {
        ek(t)
    } catch (t) {}
}
var eU = Y("OpenTelemetry SDK Context Key SUPPRESS_TRACING");

function eB(t) {
    return !0 === t.getValue(eU)
}
var eF = function() {
        function t(t, e) {
            this._exporter = t, this._isExporting = !1, this._finishedSpans = [], this._droppedSpansCount = 0;
            var n = eM();
            this._maxExportBatchSize = "number" == typeof(null == e ? void 0 : e.maxExportBatchSize) ? e.maxExportBatchSize : n.OTEL_BSP_MAX_EXPORT_BATCH_SIZE, this._maxQueueSize = "number" == typeof(null == e ? void 0 : e.maxQueueSize) ? e.maxQueueSize : n.OTEL_BSP_MAX_QUEUE_SIZE, this._scheduledDelayMillis = "number" == typeof(null == e ? void 0 : e.scheduledDelayMillis) ? e.scheduledDelayMillis : n.OTEL_BSP_SCHEDULE_DELAY, this._exportTimeoutMillis = "number" == typeof(null == e ? void 0 : e.exportTimeoutMillis) ? e.exportTimeoutMillis : n.OTEL_BSP_EXPORT_TIMEOUT, this._shutdownOnce = new eL(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize && (ty.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize)
        }
        return t.prototype.forceFlush = function() {
            return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll()
        }, t.prototype.onStart = function(t, e) {}, t.prototype.onEnd = function(t) {
            this._shutdownOnce.isCalled || (t.spanContext().traceFlags & oA.SAMPLED) == 0 || this._addToBuffer(t)
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
                0 === this._droppedSpansCount && ty.debug("maxQueueSize reached, dropping spans"), this._droppedSpansCount++;
                return
            }
            this._droppedSpansCount > 0 && (ty.warn("Dropped " + this._droppedSpansCount + " spans because maxQueueSize reached"), this._droppedSpansCount = 0), this._finishedSpans.push(t), this._maybeStartTimer()
        }, t.prototype._flushAll = function() {
            var t = this;
            return new Promise(function(e, n) {
                for (var r = [], o = Math.ceil(t._finishedSpans.length / t._maxExportBatchSize), i = 0; i < o; i++) r.push(t._flushOneBatch());
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
                tm.with(tm.active().setValue(eU, !0), function() {
                    t._finishedSpans.length <= t._maxExportBatchSize ? (o = t._finishedSpans, t._finishedSpans = []) : o = t._finishedSpans.splice(0, t._maxExportBatchSize);
                    for (var o, i = function() {
                            return t._exporter.export(o, function(t) {
                                var o;
                                clearTimeout(r), t.code === oN.SUCCESS ? e() : n(null !== (o = t.error) && void 0 !== o ? o : Error("BatchSpanProcessor: span export failed"))
                            })
                        }, a = null, s = 0, u = o.length; s < u; s++) {
                        var c = o[s];
                        c.resource.asyncAttributesPending && c.resource.waitForAsyncAttributes && (null != a || (a = []), a.push(c.resource.waitForAsyncAttributes()))
                    }
                    null === a ? i() : Promise.all(a).then(i, function(t) {
                        ej(t), n(t)
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
                        t._isExporting = !1, ej(e)
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
    eH = (og = function(t, e) {
        return (og = Object.setPrototypeOf || ({
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
        og(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    eV = function(t) {
        function e(e, n) {
            var r = t.call(this, e, n) || this;
            return r.onInit(n), r
        }
        return eH(e, t), e.prototype.onInit = function(t) {
            var e = this;
            (null == t ? void 0 : t.disableAutoFlushOnDocumentHide) !== !0 && "undefined" != typeof document && (this._visibilityChangeListener = function() {
                "hidden" === document.visibilityState && e.forceFlush()
            }, this._pageHideListener = function() {
                e.forceFlush()
            }, document.addEventListener("visibilitychange", this._visibilityChangeListener), document.addEventListener("pagehide", this._pageHideListener))
        }, e.prototype.onShutdown = function() {
            "undefined" != typeof document && (this._visibilityChangeListener && document.removeEventListener("visibilitychange", this._visibilityChangeListener), this._pageHideListener && document.removeEventListener("pagehide", this._pageHideListener))
        }, e
    }(eF),
    eG = function() {
        function t(t) {
            void 0 === t && (t = 0), this._ratio = t, this._ratio = this._normalize(t), this._upperBound = Math.floor(4294967295 * this._ratio)
        }
        return t.prototype.shouldSample = function(t, e) {
            return {
                decision: ts(e) && this._accumulate(e) < this._upperBound ? oC.RECORD_AND_SAMPLED : oC.NOT_RECORD
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
    eX = function(t) {
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
    ez = function() {
        function t(t) {
            var e;
            void 0 === t && (t = {}), this._propagators = null !== (e = t.propagators) && void 0 !== e ? e : [], this._fields = Array.from(new Set(this._propagators.map(function(t) {
                return "function" == typeof t.fields ? t.fields() : []
            }).reduce(function(t, e) {
                return t.concat(e)
            }, [])))
        }
        return t.prototype.inject = function(t, e, n) {
            var r, o;
            try {
                for (var i = eX(this._propagators), a = i.next(); !a.done; a = i.next()) {
                    var s = a.value;
                    try {
                        s.inject(t, e, n)
                    } catch (t) {
                        ty.warn("Failed to inject with " + s.constructor.name + ". Err: " + t.message)
                    }
                }
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    a && !a.done && (o = i.return) && o.call(i)
                } finally {
                    if (r) throw r.error
                }
            }
        }, t.prototype.extract = function(t, e, n) {
            return this._propagators.reduce(function(t, r) {
                try {
                    return r.extract(t, e, n)
                } catch (t) {
                    ty.warn("Failed to inject with " + r.constructor.name + ". Err: " + t.message)
                }
                return t
            }, t)
        }, t.prototype.fields = function() {
            return this._fields.slice()
        }, t
    }(),
    e$ = Function.prototype.toString,
    eq = e$.call(Object),
    eW = (or = Object.getPrototypeOf, oo = Object, function(t) {
        return or(oo(t))
    }),
    eK = Object.prototype,
    eZ = eK.hasOwnProperty,
    eY = Symbol ? Symbol.toStringTag : void 0,
    eQ = eK.toString;

function eJ(t) {
    if (!(null != t && "object" == typeof t) || "[object Object]" !== (null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : eY && eY in Object(t) ? function(t) {
            var e = eZ.call(t, eY),
                n = t[eY],
                r = !1;
            try {
                t[eY] = void 0, r = !0
            } catch (t) {}
            var o = eQ.call(t);
            return r && (e ? t[eY] = n : delete t[eY]), o
        }(t) : eQ.call(t))) return !1;
    var e = eW(t);
    if (null === e) return !0;
    var n = eZ.call(e, "constructor") && e.constructor;
    return "function" == typeof n && n instanceof n && e$.call(n) === eq
}

function e0(t) {
    return e2(t) ? t.slice() : t
}

function e1(t, e, n) {
    for (var r = n.get(t[e]) || [], o = 0, i = r.length; o < i; o++) {
        var a = r[o];
        if (a.key === e && a.obj === t) return !0
    }
    return !1
}

function e2(t) {
    return Array.isArray(t)
}

function e3(t) {
    return "function" == typeof t
}

function e4(t) {
    return !e6(t) && !e2(t) && !e3(t) && "object" == typeof t
}

function e6(t) {
    return "string" == typeof t || "number" == typeof t || "boolean" == typeof t || void 0 === t || t instanceof Date || t instanceof RegExp || null === t
}
var e5 = "baggage",
    e9 = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    };

function e8(t) {
    var e, n = t.split(";");
    if (!(n.length <= 0)) {
        var r = n.shift();
        if (r) {
            var o = r.indexOf("=");
            if (!(o <= 0)) {
                var i, a = decodeURIComponent(r.substring(0, o).trim()),
                    s = decodeURIComponent(r.substring(o + 1).trim());
                return n.length > 0 && ("string" != typeof(i = n.join(";")) && (K.error("Cannot create baggage metadata from unknown type: " + typeof i), i = ""), e = {
                    __TYPE__: W,
                    toString: function() {
                        return i
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
var e7 = function() {
        function t() {}
        return t.prototype.inject = function(t, e, n) {
            var r = tQ.getBaggage(t);
            if (!(!r || eB(t))) {
                var o = r.getAllEntries().map(function(t) {
                    var e = e9(t, 2),
                        n = e[0],
                        r = e[1],
                        o = encodeURIComponent(n) + "=" + encodeURIComponent(r.value);
                    return void 0 !== r.metadata && (o += ";" + r.metadata.toString()), o
                }).filter(function(t) {
                    return t.length <= 4096
                }).slice(0, 180).reduce(function(t, e) {
                    var n = "" + t + ("" !== t ? "," : "") + e;
                    return n.length > 8192 ? t : n
                }, "");
                o.length > 0 && n.set(e, e5, o)
            }
        }, t.prototype.extract = function(t, e, n) {
            var r = n.get(e, e5),
                o = Array.isArray(r) ? r.join(",") : r;
            if (!o) return t;
            var i = {};
            return 0 === o.length ? t : (o.split(",").forEach(function(t) {
                var e = e8(t);
                if (e) {
                    var n = {
                        value: e.value
                    };
                    e.metadata && (n.metadata = e.metadata), i[e.key] = n
                }
            }), 0 === Object.entries(i).length) ? t : tQ.setBaggage(t, tQ.createBaggage(i))
        }, t.prototype.fields = function() {
            return [e5]
        }, t
    }(),
    nt = "[_0-9a-z-*/]",
    ne = RegExp("^(?:[a-z]" + nt + "{0,255}|" + ("[a-z0-9]" + nt) + "{0,240}@[a-z]" + nt + "{0,13})$"),
    nn = /^[ -~]{0,255}[!-~]$/,
    nr = /,|=/,
    no = function() {
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
                    var o = n.slice(0, r),
                        i = n.slice(r + 1, e.length);
                    ne.test(o) && nn.test(i) && !nr.test(i) && t.set(o, i)
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
    ni = "traceparent",
    na = "tracestate",
    ns = RegExp("^\\s?((?!ff)[\\da-f]{2})-((?![0]{32})[\\da-f]{32})-((?![0]{16})[\\da-f]{16})-([\\da-f]{2})(-.*)?\\s?$"),
    nu = function() {
        function t() {}
        return t.prototype.inject = function(t, e, n) {
            var r = er.getSpanContext(t);
            if (!(!r || eB(t)) && tu(r)) {
                var o = "00-" + r.traceId + "-" + r.spanId + "-0" + Number(r.traceFlags || oA.NONE).toString(16);
                n.set(e, ni, o), r.traceState && n.set(e, na, r.traceState.serialize())
            }
        }, t.prototype.extract = function(t, e, n) {
            var r, o = n.get(e, ni);
            if (!o) return t;
            var i = Array.isArray(o) ? o[0] : o;
            if ("string" != typeof i) return t;
            var a = (r = ns.exec(i)) && ("00" !== r[1] || !r[5]) ? {
                traceId: r[2],
                spanId: r[3],
                traceFlags: parseInt(r[4], 16)
            } : null;
            if (!a) return t;
            a.isRemote = !0;
            var s = n.get(e, na);
            if (s) {
                var u = Array.isArray(s) ? s.join(",") : s;
                a.traceState = new no("string" == typeof u ? u : void 0)
            }
            return er.setSpanContext(t, a)
        }, t.prototype.fields = function() {
            return [ni, na]
        }, t
    }(),
    nc = function(t) {
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
    nl = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    };

function np(t) {
    var e, n, r = {};
    if ("object" != typeof t || null == t) return r;
    try {
        for (var o = nc(Object.entries(t)), i = o.next(); !i.done; i = o.next()) {
            var a = nl(i.value, 2),
                s = a[0],
                u = a[1];
            if ("string" != typeof s || !(s.length > 0)) {
                ty.warn("Invalid attribute key: " + s);
                continue
            }
            if (!nf(u)) {
                ty.warn("Invalid attribute value set for key: " + s);
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
            i && !i.done && (n = o.return) && n.call(o)
        } finally {
            if (e) throw e.error
        }
    }
    return r
}

function nf(t) {
    return null == t || (Array.isArray(t) ? function(t) {
        try {
            for (var e, n, r, o = nc(t), i = o.next(); !i.done; i = o.next()) {
                var a = i.value;
                if (null != a) {
                    if (!r) {
                        if (nd(a)) {
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
                i && !i.done && (n = o.return) && n.call(o)
            } finally {
                if (e) throw e.error
            }
        }
        return !0
    }(t) : nd(t))
}

function nd(t) {
    switch (typeof t) {
        case "number":
        case "boolean":
        case "string":
            return !0
    }
    return !1
}
var nh = performance;

function ng(t) {
    return [Math.trunc(t / 1e3), Math.round(t % 1e3 * 1e6)]
}

function n_() {
    var t = nh.timeOrigin;
    return "number" != typeof t && (t = nh.timing && nh.timing.fetchStart), t
}

function nv(t) {
    return nb(ng(n_()), ng("number" == typeof t ? t : nh.now()))
}

function nm(t) {
    return Array.isArray(t) && 2 === t.length && "number" == typeof t[0] && "number" == typeof t[1]
}

function ny(t) {
    return nm(t) || "number" == typeof t || t instanceof Date
}

function nb(t, e) {
    var n = [t[0] + e[0], t[1] + e[1]];
    return n[1] >= 1e9 && (n[1] -= 1e9, n[0] += 1), n
}
var nE = "exception.type",
    nT = "exception.message",
    nw = "exception.stacktrace",
    nS = "http.method",
    nO = "http.url",
    nL = "http.host",
    nP = "http.scheme",
    nA = "http.status_code",
    nR = "http.user_agent",
    nC = function(t) {
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
    nN = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    },
    nx = function(t, e, n) {
        if (n || 2 == arguments.length)
            for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e))
    },
    nI = function() {
        function t(t, e, n, r, o, i, a, s, u, c) {
            void 0 === a && (a = []), this.attributes = {}, this.links = [], this.events = [], this._droppedAttributesCount = 0, this._droppedEventsCount = 0, this._droppedLinksCount = 0, this.status = {
                code: oP.UNSET
            }, this.endTime = [0, 0], this._ended = !1, this._duration = [-1, -1], this.name = n, this._spanContext = r, this.parentSpanId = i, this.kind = o, this.links = a;
            var l = Date.now();
            this._performanceStartTime = nh.now(), this._performanceOffset = l - (this._performanceStartTime + n_()), this._startTimeProvided = null != s, this.startTime = this._getTime(null != s ? s : l), this.resource = t.resource, this.instrumentationLibrary = t.instrumentationLibrary, this._spanLimits = t.getSpanLimits(), this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0, null != c && this.setAttributes(c), this._spanProcessor = t.getActiveSpanProcessor(), this._spanProcessor.onStart(this, e)
        }
        return t.prototype.spanContext = function() {
            return this._spanContext
        }, t.prototype.setAttribute = function(t, e) {
            return null == e || this._isSpanEnded() || (0 === t.length ? ty.warn("Invalid attribute key: " + t) : nf(e) ? Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, t) ? this._droppedAttributesCount++ : this.attributes[t] = this._truncateToSize(e) : ty.warn("Invalid attribute value set for key: " + t)), this
        }, t.prototype.setAttributes = function(t) {
            var e, n;
            try {
                for (var r = nC(Object.entries(t)), o = r.next(); !o.done; o = r.next()) {
                    var i = nN(o.value, 2),
                        a = i[0],
                        s = i[1];
                    this.setAttribute(a, s)
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (n = r.return) && n.call(r)
                } finally {
                    if (e) throw e.error
                }
            }
            return this
        }, t.prototype.addEvent = function(t, e, n) {
            if (this._isSpanEnded()) return this;
            if (0 === this._spanLimits.eventCountLimit) return ty.warn("No events allowed."), this._droppedEventsCount++, this;
            this.events.length >= this._spanLimits.eventCountLimit && (0 === this._droppedEventsCount && ty.debug("Dropping extra events."), this.events.shift(), this._droppedEventsCount++), ny(e) && (ny(n) || (n = e), e = void 0);
            var r = np(e);
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
            return (e = this.links).push.apply(e, nx([], nN(t), !1)), this
        }, t.prototype.setStatus = function(t) {
            return this._isSpanEnded() || (this.status = t), this
        }, t.prototype.updateName = function(t) {
            return this._isSpanEnded() || (this.name = t), this
        }, t.prototype.end = function(t) {
            var e, n, r, o;
            if (this._isSpanEnded()) {
                ty.error(this.name + " " + this._spanContext.traceId + "-" + this._spanContext.spanId + " - You can only call end() on a span once.");
                return
            }
            this._ended = !0, this.endTime = this._getTime(t), this._duration = (e = this.startTime, r = (n = this.endTime)[0] - e[0], (o = n[1] - e[1]) < 0 && (r -= 1, o += 1e9), [r, o]), this._duration[0] < 0 && (ty.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime), this.endTime = this.startTime.slice(), this._duration = [0, 0]), this._droppedEventsCount > 0 && ty.warn("Dropped " + this._droppedEventsCount + " events because eventCountLimit reached"), this._spanProcessor.onEnd(this)
        }, t.prototype._getTime = function(t) {
            if ("number" == typeof t && t < nh.now()) return nv(t + this._performanceOffset);
            if ("number" == typeof t) return ng(t);
            if (t instanceof Date) return ng(t.getTime());
            if (nm(t)) return t;
            if (this._startTimeProvided) return ng(Date.now());
            var e = nh.now() - this._performanceStartTime;
            return nb(this.startTime, ng(e))
        }, t.prototype.isRecording = function() {
            return !1 === this._ended
        }, t.prototype.recordException = function(t, e) {
            var n = {};
            "string" == typeof t ? n[nT] = t : t && (t.code ? n[nE] = t.code.toString() : t.name && (n[nE] = t.name), t.message && (n[nT] = t.message), t.stack && (n[nw] = t.stack)), n[nE] || n[nT] ? this.addEvent("exception", n, e) : ty.warn("Failed to record an exception " + t)
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
            return this._ended && ty.warn("Can not execute the operation on ended Span {traceId: " + this._spanContext.traceId + ", spanId: " + this._spanContext.spanId + "}"), this._ended
        }, t.prototype._truncateToLimitUtil = function(t, e) {
            return t.length <= e ? t : t.substr(0, e)
        }, t.prototype._truncateToSize = function(t) {
            var e = this,
                n = this._attributeValueLengthLimit;
            return n <= 0 ? (ty.warn("Attribute value limit must be positive, got " + n), t) : "string" == typeof t ? this._truncateToLimitUtil(t, n) : Array.isArray(t) ? t.map(function(t) {
                return "string" == typeof t ? e._truncateToLimitUtil(t, n) : t
            }) : t
        }, t
    }(),
    nD = function() {
        function t(t) {
            var e, n, r, o;
            this._root = t.root, this._root || (ej(Error("ParentBasedSampler must have a root sampler configured")), this._root = new eT), this._remoteParentSampled = null !== (e = t.remoteParentSampled) && void 0 !== e ? e : new eT, this._remoteParentNotSampled = null !== (n = t.remoteParentNotSampled) && void 0 !== n ? n : new eE, this._localParentSampled = null !== (r = t.localParentSampled) && void 0 !== r ? r : new eT, this._localParentNotSampled = null !== (o = t.localParentNotSampled) && void 0 !== o ? o : new eE
        }
        return t.prototype.shouldSample = function(t, e, n, r, o, i) {
            var a = er.getSpanContext(t);
            return a && tu(a) ? a.isRemote ? a.traceFlags & oA.SAMPLED ? this._remoteParentSampled.shouldSample(t, e, n, r, o, i) : this._remoteParentNotSampled.shouldSample(t, e, n, r, o, i) : a.traceFlags & oA.SAMPLED ? this._localParentSampled.shouldSample(t, e, n, r, o, i) : this._localParentNotSampled.shouldSample(t, e, n, r, o, i) : this._root.shouldSample(t, e, n, r, o, i)
        }, t.prototype.toString = function() {
            return "ParentBased{root=" + this._root.toString() + ", remoteParentSampled=" + this._remoteParentSampled.toString() + ", remoteParentNotSampled=" + this._remoteParentNotSampled.toString() + ", localParentSampled=" + this._localParentSampled.toString() + ", localParentNotSampled=" + this._localParentNotSampled.toString() + "}"
        }, t
    }(),
    nM = eM(),
    nk = ox.AlwaysOn;

function nj() {
    var t = eM();
    return {
        sampler: nU(nM),
        forceFlushTimeoutMillis: 3e4,
        generalLimits: {
            attributeValueLengthLimit: t.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
            attributeCountLimit: t.OTEL_ATTRIBUTE_COUNT_LIMIT
        },
        spanLimits: {
            attributeValueLengthLimit: t.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
            attributeCountLimit: t.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
            linkCountLimit: t.OTEL_SPAN_LINK_COUNT_LIMIT,
            eventCountLimit: t.OTEL_SPAN_EVENT_COUNT_LIMIT,
            attributePerEventCountLimit: t.OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
            attributePerLinkCountLimit: t.OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT
        }
    }
}

function nU(t) {
    switch (void 0 === t && (t = eM()), t.OTEL_TRACES_SAMPLER) {
        case ox.AlwaysOn:
            return new eT;
        case ox.AlwaysOff:
            return new eE;
        case ox.ParentBasedAlwaysOn:
            return new nD({
                root: new eT
            });
        case ox.ParentBasedAlwaysOff:
            return new nD({
                root: new eE
            });
        case ox.TraceIdRatio:
            return new eG(nB(t));
        case ox.ParentBasedTraceIdRatio:
            return new nD({
                root: new eG(nB(t))
            });
        default:
            return ty.error('OTEL_TRACES_SAMPLER value "' + t.OTEL_TRACES_SAMPLER + " invalid, defaulting to " + nk + '".'), new eT
    }
}

function nB(t) {
    if (void 0 === t.OTEL_TRACES_SAMPLER_ARG || "" === t.OTEL_TRACES_SAMPLER_ARG) return ty.error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to 1."), 1;
    var e = Number(t.OTEL_TRACES_SAMPLER_ARG);
    return isNaN(e) ? (ty.error("OTEL_TRACES_SAMPLER_ARG=" + t.OTEL_TRACES_SAMPLER_ARG + " was given, but it is invalid, defaulting to 1."), 1) : e < 0 || e > 1 ? (ty.error("OTEL_TRACES_SAMPLER_ARG=" + t.OTEL_TRACES_SAMPLER_ARG + " was given, but it is out of range ([0..1]), defaulting to 1."), 1) : e
}
var nF = function() {
        this.generateTraceId = nV(16), this.generateSpanId = nV(8)
    },
    nH = Array(32);

function nV(t) {
    return function() {
        for (var e = 0; e < 2 * t; e++) nH[e] = Math.floor(16 * Math.random()) + 48, nH[e] >= 58 && (nH[e] += 39);
        return String.fromCharCode.apply(null, nH.slice(0, 2 * t))
    }
}
var nG = function() {
        function t(t, e, n) {
            this._tracerProvider = n;
            var r, o, i, a = (r = {
                sampler: nU()
            }, (i = Object.assign({}, o = nj(), r, e)).generalLimits = Object.assign({}, o.generalLimits, e.generalLimits || {}), i.spanLimits = Object.assign({}, o.spanLimits, e.spanLimits || {}), i);
            this._sampler = a.sampler, this._generalLimits = a.generalLimits, this._spanLimits = a.spanLimits, this._idGenerator = e.idGenerator || new nF, this.resource = n.resource, this.instrumentationLibrary = t
        }
        return t.prototype.startSpan = function(t, e, n) {
            void 0 === e && (e = {}), void 0 === n && (n = tm.active()), e.root && (n = er.deleteSpan(n));
            var r, o, i, a, s, u, c = er.getSpan(n);
            if (eB(n)) {
                ty.debug("Instrumentation suppressed, returning Noop Span");
                var l = er.wrapSpanContext(tr);
                return l
            }
            var p = null == c ? void 0 : c.spanContext(),
                f = this._idGenerator.generateSpanId();
            p && er.isSpanContextValid(p) ? (a = p.traceId, s = p.traceState, u = p.spanId) : a = this._idGenerator.generateTraceId();
            var d = null !== (r = e.kind) && void 0 !== r ? r : oL.INTERNAL,
                h = (null !== (o = e.links) && void 0 !== o ? o : []).map(function(t) {
                    return {
                        context: t.context,
                        attributes: np(t.attributes)
                    }
                }),
                g = np(e.attributes),
                _ = this._sampler.shouldSample(n, a, t, d, g, h);
            s = null !== (i = _.traceState) && void 0 !== i ? i : s;
            var v = {
                traceId: a,
                spanId: f,
                traceFlags: _.decision === oO.RECORD_AND_SAMPLED ? oA.SAMPLED : oA.NONE,
                traceState: s
            };
            if (_.decision === oO.NOT_RECORD) {
                ty.debug("Recording is off, propagating context in a non-recording span");
                var l = er.wrapSpanContext(v);
                return l
            }
            var m = np(Object.assign(g, _.attributes));
            return new nI(this, n, t, v, d, u, h, e.startTime, void 0, m)
        }, t.prototype.startActiveSpan = function(t, e, n, r) {
            if (!(arguments.length < 2)) {
                2 == arguments.length ? a = e : 3 == arguments.length ? (o = e, a = n) : (o = e, i = n, a = r);
                var o, i, a, s = null != i ? i : tm.active(),
                    u = this.startSpan(t, o, s),
                    c = er.setSpan(s, u);
                return tm.with(c, a, void 0, u)
            }
        }, t.prototype.getGeneralLimits = function() {
            return this._generalLimits
        }, t.prototype.getSpanLimits = function() {
            return this._spanLimits
        }, t.prototype.getActiveSpanProcessor = function() {
            return this._tracerProvider.getActiveSpanProcessor()
        }, t
    }(),
    nX = function(t) {
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
    nz = function() {
        function t(t) {
            this._spanProcessors = t
        }
        return t.prototype.forceFlush = function() {
            var t, e, n = [];
            try {
                for (var r = nX(this._spanProcessors), o = r.next(); !o.done; o = r.next()) {
                    var i = o.value;
                    n.push(i.forceFlush())
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    o && !o.done && (e = r.return) && e.call(r)
                } finally {
                    if (t) throw t.error
                }
            }
            return new Promise(function(t) {
                Promise.all(n).then(function() {
                    t()
                }).catch(function(e) {
                    ej(e || Error("MultiSpanProcessor: forceFlush failed")), t()
                })
            })
        }, t.prototype.onStart = function(t, e) {
            var n, r;
            try {
                for (var o = nX(this._spanProcessors), i = o.next(); !i.done; i = o.next()) i.value.onStart(t, e)
            } catch (t) {
                n = {
                    error: t
                }
            } finally {
                try {
                    i && !i.done && (r = o.return) && r.call(o)
                } finally {
                    if (n) throw n.error
                }
            }
        }, t.prototype.onEnd = function(t) {
            var e, n;
            try {
                for (var r = nX(this._spanProcessors), o = r.next(); !o.done; o = r.next()) o.value.onEnd(t)
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    o && !o.done && (n = r.return) && n.call(r)
                } finally {
                    if (e) throw e.error
                }
            }
        }, t.prototype.shutdown = function() {
            var t, e, n = [];
            try {
                for (var r = nX(this._spanProcessors), o = r.next(); !o.done; o = r.next()) {
                    var i = o.value;
                    n.push(i.shutdown())
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    o && !o.done && (e = r.return) && e.call(r)
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
    n$ = function() {
        function t() {}
        return t.prototype.onStart = function(t, e) {}, t.prototype.onEnd = function(t) {}, t.prototype.shutdown = function() {
            return Promise.resolve()
        }, t.prototype.forceFlush = function() {
            return Promise.resolve()
        }, t
    }();
(o_ = oI || (oI = {}))[o_.resolved = 0] = "resolved", o_[o_.timeout = 1] = "timeout", o_[o_.error = 2] = "error", o_[o_.unresolved = 3] = "unresolved";
var nq = function() {
        function t(t) {
            void 0 === t && (t = {}), this._registeredSpanProcessors = [], this._tracers = new Map;
            var e, n, r, o, i, a, s, u, c, l, p, f, d, h, g, _, v = function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = t.shift(), r = new WeakMap; t.length > 0;) n = function t(e, n, r, o) {
                    if (void 0 === r && (r = 0), !(r > 20)) {
                        if (r++, e6(e) || e6(n) || e3(n)) i = e0(n);
                        else if (e2(e)) {
                            if (i = e.slice(), e2(n))
                                for (var i, a = 0, s = n.length; a < s; a++) i.push(e0(n[a]));
                            else if (e4(n))
                                for (var u = Object.keys(n), a = 0, s = u.length; a < s; a++) {
                                    var c = u[a];
                                    i[c] = e0(n[c])
                                }
                        } else if (e4(e)) {
                            if (e4(n)) {
                                if (!(eJ(e) && eJ(n))) return n;
                                i = Object.assign({}, e);
                                for (var u = Object.keys(n), a = 0, s = u.length; a < s; a++) {
                                    var c = u[a],
                                        l = n[c];
                                    if (e6(l)) void 0 === l ? delete i[c] : i[c] = l;
                                    else {
                                        var p = i[c];
                                        if (e1(e, c, o) || e1(n, c, o)) delete i[c];
                                        else {
                                            if (e4(p) && e4(l)) {
                                                var f = o.get(p) || [],
                                                    d = o.get(l) || [];
                                                f.push({
                                                    obj: e,
                                                    key: c
                                                }), d.push({
                                                    obj: n,
                                                    key: c
                                                }), o.set(p, f), o.set(l, d)
                                            }
                                            i[c] = t(i[c], l, r, o)
                                        }
                                    }
                                }
                            } else i = n
                        }
                        return i
                    }
                }(n, t.shift(), 0, r);
                return n
            }({}, nj(), (h = Object.assign({}, (e = t).spanLimits), g = eI(eD), h.attributeCountLimit = null !== (s = null !== (a = null !== (i = null !== (r = null === (n = e.spanLimits) || void 0 === n ? void 0 : n.attributeCountLimit) && void 0 !== r ? r : null === (o = e.generalLimits) || void 0 === o ? void 0 : o.attributeCountLimit) && void 0 !== i ? i : g.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) && void 0 !== a ? a : g.OTEL_ATTRIBUTE_COUNT_LIMIT) && void 0 !== s ? s : 128, h.attributeValueLengthLimit = null !== (d = null !== (f = null !== (p = null !== (c = null === (u = e.spanLimits) || void 0 === u ? void 0 : u.attributeValueLengthLimit) && void 0 !== c ? c : null === (l = e.generalLimits) || void 0 === l ? void 0 : l.attributeValueLengthLimit) && void 0 !== p ? p : g.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== f ? f : g.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) && void 0 !== d ? d : eC, Object.assign({}, e, {
                spanLimits: h
            })));
            this.resource = null !== (_ = v.resource) && void 0 !== _ ? _ : ev.empty(), this.resource = ev.default().merge(this.resource), this._config = Object.assign({}, v, {
                resource: this.resource
            });
            var m = this._buildExporterFromEnv();
            if (void 0 !== m) {
                var y = new eV(m);
                this.activeSpanProcessor = y
            } else this.activeSpanProcessor = new n$
        }
        return t.prototype.getTracer = function(t, e, n) {
            var r = t + "@" + (e || "") + ":" + ((null == n ? void 0 : n.schemaUrl) || "");
            return this._tracers.has(r) || this._tracers.set(r, new nG({
                name: t,
                version: e,
                schemaUrl: null == n ? void 0 : n.schemaUrl
            }, this._config, this)), this._tracers.get(r)
        }, t.prototype.addSpanProcessor = function(t) {
            0 === this._registeredSpanProcessors.length && this.activeSpanProcessor.shutdown().catch(function(t) {
                return ty.error("Error while trying to shutdown current span processor", t)
            }), this._registeredSpanProcessors.push(t), this.activeSpanProcessor = new nz(this._registeredSpanProcessors)
        }, t.prototype.getActiveSpanProcessor = function() {
            return this.activeSpanProcessor
        }, t.prototype.register = function(t) {
            void 0 === t && (t = {}), er.setGlobalTracerProvider(this), void 0 === t.propagator && (t.propagator = this._buildPropagatorFromEnv()), t.contextManager && tm.setGlobalContextManager(t.contextManager), t.propagator && tQ.setGlobalPropagator(t.propagator)
        }, t.prototype.forceFlush = function() {
            var t = this._config.forceFlushTimeoutMillis,
                e = this._registeredSpanProcessors.map(function(e) {
                    return new Promise(function(n) {
                        var r, o = setTimeout(function() {
                            n(Error("Span processor did not completed within timeout period of " + t + " ms")), r = oI.timeout
                        }, t);
                        e.forceFlush().then(function() {
                            clearTimeout(o), r !== oI.timeout && n(r = oI.resolved)
                        }).catch(function(t) {
                            clearTimeout(o), r = oI.error, n(t)
                        })
                    })
                });
            return new Promise(function(t, n) {
                Promise.all(e).then(function(e) {
                    var r = e.filter(function(t) {
                        return t !== oI.resolved
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
                e = Array.from(new Set(eM().OTEL_PROPAGATORS)),
                n = e.map(function(e) {
                    var n = t._getPropagator(e);
                    return n || ty.warn('Propagator "' + e + '" requested through environment variable is unavailable.'), n
                }).reduce(function(t, e) {
                    return e && t.push(e), t
                }, []);
            return 0 === n.length ? void 0 : 1 === e.length ? n[0] : new ez({
                propagators: n
            })
        }, t.prototype._buildExporterFromEnv = function() {
            var t = eM().OTEL_TRACES_EXPORTER;
            if ("none" !== t && "" !== t) {
                var e = this._getSpanExporter(t);
                return e || ty.error('Exporter "' + t + '" requested through environment variable is unavailable.'), e
            }
        }, t._registeredPropagators = new Map([
            ["tracecontext", function() {
                return new nu
            }],
            ["baggage", function() {
                return new e7
            }]
        ]), t._registeredExporters = new Map, t
    }(),
    nW = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    },
    nK = function(t, e, n) {
        if (n || 2 == arguments.length)
            for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e))
    },
    nZ = function() {
        function t() {
            this._enabled = !1, this._currentContext = Q
        }
        return t.prototype._bindFunction = function(t, e) {
            void 0 === t && (t = Q);
            var n = this,
                r = function() {
                    for (var r = this, o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
                    return n.with(t, function() {
                        return e.apply(r, o)
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
            return this._currentContext = Q, this._enabled = !1, this
        }, t.prototype.enable = function() {
            return this._enabled || (this._enabled = !0, this._currentContext = Q), this
        }, t.prototype.with = function(t, e, n) {
            for (var r = [], o = 3; o < arguments.length; o++) r[o - 3] = arguments[o];
            var i = this._currentContext;
            this._currentContext = t || Q;
            try {
                return e.call.apply(e, nK([n], nW(r), !1))
            } finally {
                this._currentContext = i
            }
        }, t
    }(),
    nY = (ov = function(t, e) {
        return (ov = Object.setPrototypeOf || ({
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
        ov(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    nQ = function(t) {
        function e(e) {
            void 0 === e && (e = {});
            var n = t.call(this, e) || this;
            if (e.contextManager) throw "contextManager should be defined in register method not in constructor";
            if (e.propagator) throw "propagator should be defined in register method not in constructor";
            return n
        }
        return nY(e, t), e.prototype.register = function(e) {
            void 0 === e && (e = {}), void 0 === e.contextManager && (e.contextManager = new nZ), e.contextManager && e.contextManager.enable(), t.prototype.register.call(this, e)
        }, e
    }(nq),
    nJ = {
        PLATFORM: "browser.platform",
        BRANDS: "browser.brands",
        MOBILE: "browser.mobile",
        LANGUAGE: "browser.language",
        USER_AGENT: "browser.user_agent"
    },
    n0 = function(t, e) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function s(i) {
            return function(s) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (t) {
                        i = [6, t], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    },
    n1 = new(function() {
        function t() {}
        return t.prototype.detect = function(t) {
            var e, n, r, o;
            return e = this, n = void 0, r = void 0, o = function() {
                var e;
                return n0(this, function(n) {
                    var r, o;
                    return "undefined" != typeof navigator ? (r = {}, (o = navigator.userAgentData) ? (r[nJ.PLATFORM] = o.platform, r[nJ.BRANDS] = o.brands.map(function(t) {
                        return t.brand + " " + t.version
                    }), r[nJ.MOBILE] = o.mobile) : r[nJ.USER_AGENT] = navigator.userAgent, r[nJ.LANGUAGE] = navigator.language, e = r, [2, this._getResourceAttributes(e, t)]) : [2, ev.empty()]
                })
            }, new(r || (r = Promise))(function(t, i) {
                function a(t) {
                    try {
                        u(o.next(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function s(t) {
                    try {
                        u(o.throw(t))
                    } catch (t) {
                        i(t)
                    }
                }

                function u(e) {
                    var n;
                    e.done ? t(e.value) : ((n = e.value) instanceof r ? n : new r(function(t) {
                        t(n)
                    })).then(a, s)
                }
                u((o = o.apply(e, n || [])).next())
            })
        }, t.prototype._getResourceAttributes = function(t, e) {
            return t[nJ.USER_AGENT] || t[nJ.PLATFORM] ? new ev(t) : (ty.debug("BrowserDetector failed: Unable to find required browser resources. "), ev.empty())
        }, t
    }()),
    n2 = R("86Wyx"),
    n3 = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    };

function n4(t, e) {
    return ty.warn("Timeout must be greater than 0", t), e
}
var n6 = function() {
        function t(t) {
            var e, n, r;
            void 0 === t && (t = {}), this._sendingPromises = [], this.url = this.getDefaultUrl(t), "string" == typeof t.hostname && (this.hostname = t.hostname), this.shutdown = this.shutdown.bind(this), this._shutdownOnce = new eL(this._shutdown, this), this._concurrencyLimit = "number" == typeof t.concurrencyLimit ? t.concurrencyLimit : 30, this.timeoutMillis = "number" != typeof(e = t.timeoutMillis) ? (r = Number(null !== (n = eM().OTEL_EXPORTER_OTLP_TRACES_TIMEOUT) && void 0 !== n ? n : eM().OTEL_EXPORTER_OTLP_TIMEOUT)) <= 0 ? n4(r, 1e4) : r : e <= 0 ? n4(e, 1e4) : e, this.onInit(t)
        }
        return t.prototype.export = function(t, e) {
            if (this._shutdownOnce.isCalled) {
                e({
                    code: oN.FAILED,
                    error: Error("Exporter has been shutdown")
                });
                return
            }
            if (this._sendingPromises.length >= this._concurrencyLimit) {
                e({
                    code: oN.FAILED,
                    error: Error("Concurrent export limit reached")
                });
                return
            }
            this._export(t).then(function() {
                e({
                    code: oN.SUCCESS
                })
            }).catch(function(t) {
                e({
                    code: oN.FAILED,
                    error: t
                })
            })
        }, t.prototype._export = function(t) {
            var e = this;
            return new Promise(function(n, r) {
                try {
                    ty.debug("items to be sent", t), e.send(t, n, r)
                } catch (t) {
                    r(t)
                }
            })
        }, t.prototype.shutdown = function() {
            return this._shutdownOnce.call()
        }, t.prototype.forceFlush = function() {
            return Promise.all(this._sendingPromises).then(function() {})
        }, t.prototype._shutdown = function() {
            return ty.debug("shutdown started"), this.onShutdown(), this.forceFlush()
        }, t
    }(),
    n5 = (om = function(t, e) {
        return (om = Object.setPrototypeOf || ({
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
        om(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    n9 = function(t) {
        function e(e, n, r) {
            var o = t.call(this, e) || this;
            return o.name = "OTLPExporterError", o.data = r, o.code = n, o
        }
        return n5(e, t), e
    }(Error);

function n8(t) {
    return t >= 48 && t <= 57 ? t - 48 : t >= 97 && t <= 102 ? t - 87 : t - 55
}

function n7(t) {
    for (var e = new Uint8Array(t.length / 2), n = 0, r = 0; r < t.length; r += 2) {
        var o = n8(t.charCodeAt(r)),
            i = n8(t.charCodeAt(r + 1));
        e[n++] = o << 4 | i
    }
    return e
}
var rt = {
        parseKeyPairsIntoRecord: function(t) {
            return "string" != typeof t || 0 === t.length ? {} : t.split(",").map(function(t) {
                return e8(t)
            }).filter(function(t) {
                return void 0 !== t && t.value.length > 0
            }).reduce(function(t, e) {
                return t[e.key] = e.value, t
            }, {})
        }
    },
    re = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    },
    rn = function() {
        function t(t) {
            this._parameters = t
        }
        return t.prototype.send = function(t, e) {
            var n = this;
            return new Promise(function(r) {
                var o = new XMLHttpRequest;
                o.timeout = e, o.open("POST", n._parameters.url), Object.entries(n._parameters.headers).forEach(function(t) {
                    var e = re(t, 2),
                        n = e[0],
                        r = e[1];
                    o.setRequestHeader(n, r)
                }), o.ontimeout = function(t) {
                    r({
                        status: "failure",
                        error: Error("XHR request timed out")
                    })
                }, o.onreadystatechange = function() {
                    o.status >= 200 && o.status <= 299 ? (ty.debug("XHR success"), r({
                        status: "success"
                    })) : o.status && [429, 502, 503, 504].includes(o.status) ? r({
                        status: "retryable",
                        retryInMillis: function(t) {
                            if (null == t) return -1;
                            var e = Number.parseInt(t, 10);
                            if (Number.isInteger(e)) return e > 0 ? 1e3 * e : -1;
                            var n = new Date(t).getTime() - Date.now();
                            return n >= 0 ? n : 0
                        }(o.getResponseHeader("Retry-After"))
                    }) : 0 !== o.status && r({
                        status: "failure",
                        error: Error("XHR request failed with non-retryable status")
                    })
                }, o.onabort = function() {
                    r({
                        status: "failure",
                        error: Error("XHR request aborted")
                    })
                }, o.onerror = function() {
                    r({
                        status: "failure",
                        error: Error("XHR request errored")
                    })
                }, o.send(new Blob([t], {
                    type: n._parameters.headers["Content-Type"]
                }))
            })
        }, t.prototype.shutdown = function() {}, t
    }(),
    rr = function() {
        function t(t) {
            this._params = t
        }
        return t.prototype.send = function(t) {
            var e = this;
            return new Promise(function(n) {
                navigator.sendBeacon(e._params.url, new Blob([t], {
                    type: e._params.blobType
                })) ? (ty.debug("SendBeacon success"), n({
                    status: "success"
                })) : n({
                    status: "failure",
                    error: Error("SendBeacon failed")
                })
            })
        }, t.prototype.shutdown = function() {}, t
    }(),
    ro = function(t, e) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function s(i) {
            return function(s) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (t) {
                        i = [6, t], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    },
    ri = function() {
        function t(t) {
            this._transport = t
        }
        return t.prototype.retry = function(t, e, n) {
            var r = this;
            return new Promise(function(o, i) {
                setTimeout(function() {
                    r._transport.send(t, e).then(o, i)
                }, n)
            })
        }, t.prototype.send = function(t, e) {
            var n, r, o, i, a;
            return r = this, o = void 0, i = void 0, a = function() {
                var r, o, i, a, s, u, c;
                return ro(this, function(l) {
                    switch (l.label) {
                        case 0:
                            return r = Date.now() + e, [4, this._transport.send(t, e)];
                        case 1:
                            o = l.sent(), i = 5, a = 1e3, l.label = 2;
                        case 2:
                            if (!("retryable" === o.status && i > 0)) return [3, 4];
                            if (i--, s = Math.max(Math.min(a, 5e3) + (.4 * Math.random() - .2), 0), a *= 1.5, (u = null !== (n = o.retryInMillis) && void 0 !== n ? n : s) > (c = r - Date.now())) return [2, o];
                            return [4, this.retry(t, c, u)];
                        case 3:
                            return o = l.sent(), [3, 2];
                        case 4:
                            return [2, o]
                    }
                })
            }, new(i || (i = Promise))(function(t, e) {
                function n(t) {
                    try {
                        u(a.next(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function s(t) {
                    try {
                        u(a.throw(t))
                    } catch (t) {
                        e(t)
                    }
                }

                function u(e) {
                    var r;
                    e.done ? t(e.value) : ((r = e.value) instanceof i ? r : new i(function(t) {
                        t(r)
                    })).then(n, s)
                }
                u((a = a.apply(r, o || [])).next())
            })
        }, t.prototype.shutdown = function() {
            return this._transport.shutdown()
        }, t
    }(),
    ra = (oy = function(t, e) {
        return (oy = Object.setPrototypeOf || ({
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
        oy(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    rs = function(t) {
        function e(e, n, r) {
            void 0 === e && (e = {});
            var o, i, a = t.call(this, e) || this;
            return (a._serializer = n, e.headers || "function" != typeof navigator.sendBeacon) ? a._transport = new ri({
                transport: new rn({
                    headers: Object.assign({}, (void 0 === (o = e.headers) && (o = {}), i = {}, Object.entries(o).forEach(function(t) {
                        var e = n3(t, 2),
                            n = e[0],
                            r = e[1];
                        void 0 !== r ? i[n] = String(r) : ty.warn('Header "' + n + '" has invalid value (' + r + ") and will be ignored")
                    }), i), rt.parseKeyPairsIntoRecord(eM().OTEL_EXPORTER_OTLP_HEADERS), {
                        "Content-Type": r
                    }),
                    url: a.url
                })
            }.transport) : a._transport = new rr({
                url: a.url,
                blobType: r
            }), a
        }
        return ra(e, t), e.prototype.onInit = function() {}, e.prototype.onShutdown = function() {}, e.prototype.send = function(t, e, n) {
            var r = this;
            if (this._shutdownOnce.isCalled) {
                ty.debug("Shutdown already started. Cannot send objects");
                return
            }
            var o = this._serializer.serializeRequest(t);
            if (null == o) {
                n(Error("Could not serialize message"));
                return
            }
            var i = this._transport.send(o, this.timeoutMillis).then(function(t) {
                "success" === t.status ? e() : "failure" === t.status && t.error ? n(t.error) : "retryable" === t.status ? n(new n9("Export failed with retryable status")) : n(new n9("Export failed with unknown error"))
            }, n);
            this._sendingPromises.push(i);
            var a = function() {
                var t = r._sendingPromises.indexOf(i);
                r._sendingPromises.splice(t, 1)
            };
            i.then(a, a)
        }, e
    }(n6),
    ru = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    };

function rc(t) {
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
                                var n = ru(e, 2);
                                return t(n[0], n[1])
                            })
                        }
                    } : {}
                }(n)
            }
        }(e, t[e])
    })
}

function rl(t) {
    var e = BigInt(1e9);
    return BigInt(t[0]) * e + BigInt(t[1])
}

function rp(t) {
    var e;
    return {
        low: Number(BigInt.asUintN(32, e = rl(t))),
        high: Number(BigInt.asUintN(32, e >> BigInt(32)))
    }
}
var rf = "undefined" != typeof BigInt ? function(t) {
    return rl(t).toString()
} : function(t) {
    return 1e9 * t[0] + t[1]
};

function rd(t) {
    return t
}

function rh(t) {
    if (void 0 !== t) return n7(t)
}
var rg = {
        encodeHrTime: rp,
        encodeSpanContext: n7,
        encodeOptionalSpanContext: rh
    },
    r_ = function(t) {
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
    rv = function(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    };
(ob = oD || (oD = {}))[ob.DELTA = 0] = "DELTA", ob[ob.CUMULATIVE = 1] = "CUMULATIVE", (oE = oM || (oM = {}))[oE.HISTOGRAM = 0] = "HISTOGRAM", oE[oE.EXPONENTIAL_HISTOGRAM = 1] = "EXPONENTIAL_HISTOGRAM", oE[oE.GAUGE = 2] = "GAUGE", oE[oE.SUM = 3] = "SUM";
var rm = {
        serializeRequest: function(t) {
            var e = {
                resourceSpans: function(t, e) {
                    for (var n = function(t) {
                            var e, n, r = new Map;
                            try {
                                for (var o = r_(t), i = o.next(); !i.done; i = o.next()) {
                                    var a = i.value,
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
                                    i && !i.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            return r
                        }(t), r = [], o = n.entries(), i = o.next(); !i.done;) {
                        for (var a = rv(i.value, 2), s = a[0], u = a[1], c = [], l = u.values(), p = l.next(); !p.done;) {
                            var f = p.value;
                            if (f.length > 0) {
                                var d, h = f.map(function(t) {
                                    return function(t, e) {
                                        var n, r = t.spanContext(),
                                            o = t.status;
                                        return {
                                            traceId: e.encodeSpanContext(r.traceId),
                                            spanId: e.encodeSpanContext(r.spanId),
                                            parentSpanId: e.encodeOptionalSpanContext(t.parentSpanId),
                                            traceState: null === (n = r.traceState) || void 0 === n ? void 0 : n.serialize(),
                                            name: t.name,
                                            kind: null == t.kind ? 0 : t.kind + 1,
                                            startTimeUnixNano: e.encodeHrTime(t.startTime),
                                            endTimeUnixNano: e.encodeHrTime(t.endTime),
                                            attributes: rc(t.attributes),
                                            droppedAttributesCount: t.droppedAttributesCount,
                                            events: t.events.map(function(t) {
                                                return {
                                                    attributes: t.attributes ? rc(t.attributes) : [],
                                                    name: t.name,
                                                    timeUnixNano: e.encodeHrTime(t.time),
                                                    droppedAttributesCount: t.droppedAttributesCount || 0
                                                }
                                            }),
                                            droppedEventsCount: t.droppedEventsCount,
                                            status: {
                                                code: o.code,
                                                message: o.message
                                            },
                                            links: t.links.map(function(t) {
                                                return function(t, e) {
                                                    var n;
                                                    return {
                                                        attributes: t.attributes ? rc(t.attributes) : [],
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
                        var g = {
                            resource: {
                                attributes: rc(s.attributes),
                                droppedAttributesCount: 0
                            },
                            scopeSpans: c,
                            schemaUrl: void 0
                        };
                        r.push(g), i = o.next()
                    }
                    return r
                }(t, function(t) {
                    if (void 0 === t) return rg;
                    var e, n, r = null === (e = t.useLongBits) || void 0 === e || e,
                        o = null !== (n = t.useHex) && void 0 !== n && n;
                    return {
                        encodeHrTime: r ? rp : rf,
                        encodeSpanContext: o ? rd : n7,
                        encodeOptionalSpanContext: o ? rd : rh
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
    ry = (oT = function(t, e) {
        return (oT = Object.setPrototypeOf || ({
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
        oT(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    rb = function(t) {
        function e(e) {
            return void 0 === e && (e = {}), t.call(this, e, rm, "application/json") || this
        }
        return ry(e, t), e.prototype.getDefaultUrl = function(t) {
            return "string" == typeof t.url ? t.url : "http://localhost:4318/v1/traces"
        }, e
    }(rs),
    rE = {};

function rT(t) {
    return "function" == typeof t
}
var rw = console.error.bind(console);

function rS(t, e, n) {
    var r = !!t[e] && t.propertyIsEnumerable(e);
    Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: r,
        writable: !0,
        value: n
    })
}

function rO(t) {
    t && t.logger && (rT(t.logger) ? rw = t.logger : rw("new logger isn't a function, not replacing"))
}

function rL(t, e, n) {
    if (!t || !t[e]) {
        rw("no original function " + e + " to wrap");
        return
    }
    if (!n) {
        rw("no wrapper function"), rw(Error().stack);
        return
    }
    if (!rT(t[e]) || !rT(n)) {
        rw("original object and wrapper must be functions");
        return
    }
    var r = t[e],
        o = n(r, e);
    return rS(o, "__original", r), rS(o, "__unwrap", function() {
        t[e] === o && rS(t, e, r)
    }), rS(o, "__wrapped", !0), rS(t, e, o), o
}

function rP(t, e) {
    if (!t || !t[e]) {
        rw("no function to unwrap."), rw(Error().stack);
        return
    }
    if (t[e].__unwrap) return t[e].__unwrap();
    rw("no original to unwrap to -- has " + e + " already been unwrapped?")
}
rO.wrap = rL, rO.massWrap = function(t, e, n) {
    if (t) Array.isArray(t) || (t = [t]);
    else {
        rw("must provide one or more modules to patch"), rw(Error().stack);
        return
    }
    if (!(e && Array.isArray(e))) {
        rw("must provide one or more functions to wrap on modules");
        return
    }
    t.forEach(function(t) {
        e.forEach(function(e) {
            rL(t, e, n)
        })
    })
}, rO.unwrap = rP, rO.massUnwrap = function(t, e) {
    if (t) Array.isArray(t) || (t = [t]);
    else {
        rw("must provide one or more modules to patch"), rw(Error().stack);
        return
    }
    if (!(e && Array.isArray(e))) {
        rw("must provide one or more functions to unwrap on modules");
        return
    }
    t.forEach(function(t) {
        e.forEach(function(e) {
            rP(t, e)
        })
    })
}, rE = rO;
const rA = Array(32);
class rR {
    constructor() {
        this._idGenerator = function() {
            for (let t = 0; t < 32; t++) rA[t] = Math.floor(16 * Math.random()) + 48, rA[t] >= 58 && (rA[t] += 39);
            return String.fromCharCode.apply(null, rA.slice(0, 32))
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
class rC {
    constructor(t = {}) {
        var e, n, r, o;
        if (this._resource = null !== (e = t.resource) && void 0 !== e ? e : new ev({}), this._resourceDetectors = null !== (n = t.resourceDetectors) && void 0 !== n ? n : [n1], this._serviceName = t.serviceName, this._autoDetectResources = null === (r = t.autoDetectResources) || void 0 === r || r, t.spanProcessor || t.traceExporter) {
            let e = {};
            t.sampler && (e.sampler = t.sampler), t.spanLimits && (e.spanLimits = t.spanLimits), t.idGenerator && (e.idGenerator = t.idGenerator);
            let n = null !== (o = t.spanProcessor) && void 0 !== o ? o : new eV(t.traceExporter);
            this._tracerProviderConfig = {
                tracerConfig: e,
                spanProcessor: n,
                contextManager: t.contextManager,
                textMapPropagator: t.textMapPropagator
            }
        }
        let i = [];
        t.instrumentations && (i = t.instrumentations), this._instrumentations = i
    }
    start() {
        var t, e, n, r, o, i, a, s, u;
        if (this._disabled) return;
        if (a = (r = {
                instrumentations: this._instrumentations
            }).tracerProvider || er.getTracerProvider(), s = r.meterProvider || tH.getMeterProvider(), u = r.loggerProvider || eu.getLoggerProvider(), function(t, e, n, r) {
                for (var o = 0, i = t.length; o < i; o++) {
                    var a = t[o];
                    e && a.setTracerProvider(e), n && a.setMeterProvider(n), r && a.setLoggerProvider && a.setLoggerProvider(r), a.getConfig().enabled || a.enable()
                }
            }(null !== (i = null === (o = r.instrumentations) || void 0 === o ? void 0 : o.flat()) && void 0 !== i ? i : [], a, s, u), this._autoDetectResources) {
            let t = {
                detectors: this._resourceDetectors
            };
            this._resource = this._resource.merge(ey(t))
        }
        this._resource = void 0 === this._serviceName ? this._resource : this._resource.merge(new ev({
            [ec]: this._serviceName
        }));
        let c = new nQ(Object.assign(Object.assign({}, null === (t = this._tracerProviderConfig) || void 0 === t ? void 0 : t.tracerConfig), {
            resource: this._resource
        }));
        this._tracerProvider = c, this._tracerProviderConfig && c.addSpanProcessor(this._tracerProviderConfig.spanProcessor), c.register({
            contextManager: null === (e = this._tracerProviderConfig) || void 0 === e ? void 0 : e.contextManager,
            propagator: null === (n = this._tracerProviderConfig) || void 0 === n ? void 0 : n.textMapPropagator
        }), c.addSpanProcessor(new rR)
    }
    getResourceAttributes() {
        return this._resource.attributes
    }
    shutdown() {
        let t = [];
        return this._tracerProvider && t.push(this._tracerProvider.shutdown()), Promise.all(t).then(() => {})
    }
}
const rN = "0.8.1",
    rx = {
        path: !0,
        hash: !0,
        hostname: !0,
        referrer: !0,
        url: !1,
        search: !1
    };

function rI(t, e) {
    if (t) return e
}
const rD = t => t <= 768 ? "small" : t > 768 && t <= 1024 ? "medium" : t > 1024 ? "large" : "unknown",
    rM = t => {
        var e;
        return null !== (e = null == t ? void 0 : t.effectiveType) && void 0 !== e ? e : "unknown"
    },
    rk = (t, e) => t || e ? t || "desktop" : "unknown",
    rj = t => {
        let e = new(n2 && n2.__esModule ? n2.default : n2)(t),
            {
                name: n,
                version: r
            } = e.getBrowser();
        return {
            browserName: null != n ? n : "unknown",
            browserVersion: null != r ? r : "unknown",
            deviceType: rk(e.getDevice().type, n)
        }
    };

function rU(t) {
    return t instanceof ev ? t : new ev(t || {})
}
const rB = "v1/traces",
    rF = `https://api.honeycomb.io/${rB}`,
    rH = {
        apiKey: "",
        tracesApiKey: "",
        endpoint: rF,
        tracesEndpoint: rF,
        serviceName: "unknown_service",
        debug: !1,
        sampleRate: 1,
        skipOptionsValidation: !1,
        localVisualizations: !1,
        webVitalsInstrumentationConfig: {
            enabled: !0
        }
    },
    rV = t => `@honeycombio/opentelemetry-web: ${t}`,
    rG = /^[a-f0-9]*$/,
    rX = /^hc[a-z]ic_[a-z0-9]*$/;

function rz(t) {
    if (null == t || 0 === t.length);
    else if (32 === t.length) return rG.test(t);
    else if (64 === t.length) return rX.test(t);
    return !1
}
const r$ = t => {
        if (null == t ? void 0 : t.tracesEndpoint) return t.tracesEndpoint;
        if (null == t ? void 0 : t.endpoint) {
            var e;
            return (e = t.endpoint).endsWith(rB) || e.endsWith(`${rB}/`) ? e : e.endsWith("/") ? e + rB : e + "/" + rB
        }
        return rF
    },
    rq = t => (null == t ? void 0 : t.tracesApiKey) || (null == t ? void 0 : t.apiKey),
    rW = t => "number" == typeof(null == t ? void 0 : t.sampleRate) && Number.isSafeInteger(null == t ? void 0 : t.sampleRate) && (null == t ? void 0 : t.sampleRate) >= 0 ? null == t ? void 0 : t.sampleRate : 1,
    rK = rV("❌ Missing API Key. Set `apiKey` in HoneycombOptions. Telemetry will not be exported."),
    rZ = rV(`\u{274C} Missing Service Name. Set \`serviceName\` in HoneycombOptions. Defaulting to '${rH.serviceName}'`),
    rY = rV("\uD83D\uDD15 Dataset is ignored in favor of service name."),
    rQ = rV("❌ Missing dataset. Specify either HONEYCOMB_DATASET environment variable or dataset in the options parameter."),
    rJ = rV("⏭️ Skipping options validation. To re-enable, set skipOptionsValidation option or HONEYCOMB_SKIP_OPTIONS_VALIDATION to false."),
    r0 = rV("\uD83D\uDD28 Default deterministic sampler has been overridden. Honeycomb requires a resource attribute called SampleRate to properly show weighted values. Non-deterministic sampleRate could lead to missing spans in Honeycomb. See our docs for more details. https://docs.honeycomb.io/getting-data-in/opentelemetry/node-distro/#sampling-without-the-honeycomb-sdk"),
    r1 = rV("\uD83D\uDD15 Disabling local visualizations - must have both service name and API key configured."),
    r2 = rV("\uD83D\uDD15 Failed to get proper auth response from Honeycomb. No local visualization available."),
    r3 = rV("\uD83D\uDD15 Default honeycomb exporter disabled but no exporters provided"),
    r4 = t => {
        var e;
        let n = (null == t ? void 0 : t.logLevel) ? t.logLevel : ow.DEBUG;
        if (null == t ? void 0 : t.skipOptionsValidation) {
            n >= ow.DEBUG && console.debug(rJ);
            return
        }
        return (null == t ? void 0 : t.apiKey) || !(n >= ow.WARN) || console.warn(rK), (null == t ? void 0 : t.serviceName) || !(n >= ow.WARN) || console.warn(rZ), (null == t ? void 0 : t.apiKey) && !rz(null == t ? void 0 : t.apiKey) && (null == t ? void 0 : t.dataset) && n >= ow.WARN && console.warn(rY), (null == t ? void 0 : t.apiKey) && rz(null == t ? void 0 : t.apiKey) && !(null == t ? void 0 : t.dataset) && n >= ow.WARN && console.warn(rQ), (null == t ? void 0 : t.sampler) && n >= ow.DEBUG && console.debug(r0), (null == t ? void 0 : t.disableDefaultTraceExporter) !== !0 || (null == t ? void 0 : t.traceExporter) || (null === (e = null == t ? void 0 : t.traceExporters) || void 0 === e ? void 0 : e.length) || console.warn(r3), t
    };
class r6 {
    constructor() {}
    onStart(t, e) {
        var n, r;
        (null !== (r = null === (n = tQ.getBaggage(e)) || void 0 === n ? void 0 : n.getAllEntries()) && void 0 !== r ? r : []).forEach(e => {
            t.setAttribute(e[0], e[1].value), ty.debug(`@honeycombio/opentelemetry-web: \u{1F6A8} Baggage in all outgoing headers: ${e[0]}=${e[1].value} `)
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
class r5 {
    constructor() {}
    onStart(t) {
        let {
            href: e,
            pathname: n,
            search: r,
            hash: o,
            hostname: i
        } = window.location;
        t.setAttributes({
            "browser.width": window.innerWidth,
            "browser.height": window.innerHeight,
            "page.hash": o,
            "page.url": e,
            "page.route": n,
            "page.hostname": i,
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
class r9 {
    constructor(t) {
        this._exporters = t
    }
    export (t, e) {
        this._exporters.forEach(n => n.export(t, e)), e({
            code: oN.SUCCESS
        })
    }
    async shutdown() {
        let t = [];
        this._exporters.forEach(e => t.push(e.shutdown())), await Promise.all(t)
    }
}
class r8 {
    constructor(t, e, n) {
        if (this._traceUrl = "", this._logLevel = ow.DEBUG, n && (this._logLevel = n), !t || !e) {
            this._logLevel >= ow.DEBUG && console.debug(r1);
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
            var r, o, i, a, s;
            if (null === (r = n.team) || void 0 === r ? void 0 : r.slug) {
                let r;
                this._traceUrl = (a = null === (o = n.team) || void 0 === o ? void 0 : o.slug, s = null === (i = n.environment) || void 0 === i ? void 0 : i.slug, r = `https://ui.honeycomb.io/${a}`, !rz(e) && s && (r += `/environments/${s}`), r += `/datasets/${t}/trace?trace_id`)
            } else throw Error()
        }).catch(() => {
            this._logLevel >= ow.INFO && console.log(r2)
        })
    }
    export (t, e) {
        this._traceUrl && t.forEach(t => {
            !t.parentSpanId && this._logLevel >= ow.INFO && console.log(rV(`Honeycomb link: ${this._traceUrl}=${t.spanContext().traceId}`))
        }), e({
            code: oN.SUCCESS
        })
    }
    shutdown() {
        return Promise.resolve()
    }
}
const r7 = t => {
    let e = new ot,
        n = [];
    return (null == t ? void 0 : t.localVisualizations) && n.push(function(t) {
        let e = rq(t);
        return new r8(null == t ? void 0 : t.serviceName, e, null == t ? void 0 : t.logLevel)
    }(t)), (null == t ? void 0 : t.traceExporter) && n.push(null == t ? void 0 : t.traceExporter), (null == t ? void 0 : t.traceExporters) && n.push(...t.traceExporters), (null == t ? void 0 : t.disableDefaultTraceExporter) !== !0 && n.unshift(function(t) {
        let e = rq(t);
        return new rb({
            url: r$(t),
            headers: Object.assign({
                "x-honeycomb-team": e,
                "x-honeycomb-dataset": rz(e) ? null == t ? void 0 : t.dataset : void 0
            }, null == t ? void 0 : t.headers)
        })
    }(t)), e.addProcessor(new eV(new r9([...n]))), e.addProcessor(new r6), e.addProcessor(new r5), (null == t ? void 0 : t.spanProcessor) && e.addProcessor(null == t ? void 0 : t.spanProcessor), (null == t ? void 0 : t.spanProcessors) && t.spanProcessors.forEach(t => {
        e.addProcessor(t)
    }), e
};
class ot {
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
const oe = t => new on(rW(t));
class on {
    constructor(t) {
        switch (this._sampleRate = t, t) {
            case 0:
                this._sampler = new eE;
                break;
            case 1:
                this._sampler = new eT;
                break;
            default:
                this._sampler = new eG(1 / t)
        }
    }
    shouldSample(t, e, n, r, o, i) {
        let a = this._sampler.shouldSample(t, e, n, r, o, i);
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
var or, oo, oi, oa, os, ou, oc, ol, op, of, od, oh, og, o_, ov, om, oy, ob, oE, oT, ow, oS, oO, oL, oP, oA, oR, oC, oN, ox, oI, oD, oM, ok, oj, oU = function() {
        var t = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
        if (t && t.responseStart > 0 && t.responseStart < performance.now()) return t
    },
    oB = function(t) {
        if ("loading" === document.readyState) return "loading";
        var e = oU();
        if (e) {
            if (t < e.domInteractive) return "loading";
            if (0 === e.domContentLoadedEventStart || t < e.domContentLoadedEventStart) return "dom-interactive";
            if (0 === e.domComplete || t < e.domComplete) return "dom-content-loaded"
        }
        return "complete"
    },
    oF = function(t) {
        var e = t.nodeName;
        return 1 === t.nodeType ? e.toLowerCase() : e.toUpperCase().replace(/^#/, "")
    },
    oH = function(t, e) {
        var n = "";
        try {
            for (; t && 9 !== t.nodeType;) {
                var r = t,
                    o = r.id ? "#" + r.id : oF(r) + (r.classList && r.classList.value && r.classList.value.trim() && r.classList.value.trim().length ? "." + r.classList.value.trim().replace(/\s+/g, ".") : "");
                if (n.length + o.length > (e || 100) - 1) return n || o;
                if (n = n ? o + ">" + n : o, r.id) break;
                t = r.parentNode
            }
        } catch (t) {}
        return n
    },
    oV = -1,
    oG = function() {
        return oV
    },
    oX = function(t) {
        addEventListener("pageshow", function(e) {
            e.persisted && (oV = e.timeStamp, t(e))
        }, !0)
    },
    oz = function() {
        var t = oU();
        return t && t.activationStart || 0
    },
    o$ = function(t, e) {
        var n = oU(),
            r = "navigate";
        return oG() >= 0 ? r = "back-forward-cache" : n && (document.prerendering || oz() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
            name: t,
            value: void 0 === e ? -1 : e,
            rating: "good",
            delta: 0,
            entries: [],
            id: "v4-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
            navigationType: r
        }
    },
    oq = function(t, e, n) {
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
    oW = function(t, e, n, r) {
        var o, i;
        return function(a) {
            var s;
            e.value >= 0 && (a || r) && ((i = e.value - (o || 0)) || void 0 === o) && (o = e.value, e.delta = i, e.rating = (s = e.value) > n[1] ? "poor" : s > n[0] ? "needs-improvement" : "good", t(e))
        }
    },
    oK = function(t) {
        requestAnimationFrame(function() {
            return requestAnimationFrame(function() {
                return t()
            })
        })
    },
    oZ = function(t) {
        document.addEventListener("visibilitychange", function() {
            "hidden" === document.visibilityState && t()
        })
    },
    oY = function(t) {
        var e = !1;
        return function() {
            e || (t(), e = !0)
        }
    },
    oQ = -1,
    oJ = function() {
        return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
    },
    o0 = function(t) {
        "hidden" === document.visibilityState && oQ > -1 && (oQ = "visibilitychange" === t.type ? t.timeStamp : 0, o2())
    },
    o1 = function() {
        addEventListener("visibilitychange", o0, !0), addEventListener("prerenderingchange", o0, !0)
    },
    o2 = function() {
        removeEventListener("visibilitychange", o0, !0), removeEventListener("prerenderingchange", o0, !0)
    },
    o3 = function() {
        return oQ < 0 && (oQ = oJ(), o1(), oX(function() {
            setTimeout(function() {
                oQ = oJ(), o1()
            }, 0)
        })), {
            get firstHiddenTime() {
                return oQ
            }
        }
    },
    o4 = function(t) {
        document.prerendering ? addEventListener("prerenderingchange", function() {
            return t()
        }, !0) : t()
    },
    o6 = [1800, 3e3],
    o5 = function(t, e) {
        e = e || {}, o4(function() {
            var n, r = o3(),
                o = o$("FCP"),
                i = oq("paint", function(t) {
                    t.forEach(function(t) {
                        "first-contentful-paint" === t.name && (i.disconnect(), t.startTime < r.firstHiddenTime && (o.value = Math.max(t.startTime - oz(), 0), o.entries.push(t), n(!0)))
                    })
                });
            i && (n = oW(t, o, o6, e.reportAllChanges), oX(function(r) {
                n = oW(t, o = o$("FCP"), o6, e.reportAllChanges), oK(function() {
                    o.value = performance.now() - r.timeStamp, n(!0)
                })
            }))
        })
    },
    o9 = [.1, .25],
    o8 = function(t, e) {
        var n, r;
        n = function(e) {
            t(function(t) {
                var e, n = {};
                if (t.entries.length) {
                    var r = t.entries.reduce(function(t, e) {
                        return t && t.value > e.value ? t : e
                    });
                    if (r && r.sources && r.sources.length) {
                        var o = (e = r.sources).find(function(t) {
                            return t.node && 1 === t.node.nodeType
                        }) || e[0];
                        o && (n = {
                            largestShiftTarget: oH(o.node),
                            largestShiftTime: r.startTime,
                            largestShiftValue: r.value,
                            largestShiftSource: o,
                            largestShiftEntry: r,
                            loadState: oB(r.startTime)
                        })
                    }
                }
                return Object.assign(t, {
                    attribution: n
                })
            }(e))
        }, r = (r = e) || {}, o5(oY(function() {
            var t, e = o$("CLS", 0),
                o = 0,
                i = [],
                a = function(n) {
                    n.forEach(function(t) {
                        if (!t.hadRecentInput) {
                            var e = i[0],
                                n = i[i.length - 1];
                            o && t.startTime - n.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (o += t.value, i.push(t)) : (o = t.value, i = [t])
                        }
                    }), o > e.value && (e.value = o, e.entries = i, t())
                },
                s = oq("layout-shift", a);
            s && (t = oW(n, e, o9, r.reportAllChanges), oZ(function() {
                a(s.takeRecords()), t(!0)
            }), oX(function() {
                o = 0, t = oW(n, e = o$("CLS", 0), o9, r.reportAllChanges), oK(function() {
                    return t()
                })
            }), setTimeout(t, 0))
        }))
    },
    o7 = function(t, e) {
        o5(function(e) {
            t(function(t) {
                var e = {
                    timeToFirstByte: 0,
                    firstByteToFCP: t.value,
                    loadState: oB(oG())
                };
                if (t.entries.length) {
                    var n = oU(),
                        r = t.entries[t.entries.length - 1];
                    if (n) {
                        var o = n.activationStart || 0,
                            i = Math.max(0, n.responseStart - o);
                        e = {
                            timeToFirstByte: i,
                            firstByteToFCP: t.value - i,
                            loadState: oB(t.entries[0].startTime),
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
    it = 0,
    ie = 1 / 0,
    ir = 0,
    io = function(t) {
        t.forEach(function(t) {
            t.interactionId && (ie = Math.min(ie, t.interactionId), it = (ir = Math.max(ir, t.interactionId)) ? (ir - ie) / 7 + 1 : 0)
        })
    },
    ii = function() {
        return ok ? it : performance.interactionCount || 0
    },
    ia = function() {
        "interactionCount" in performance || ok || (ok = oq("event", io, {
            type: "event",
            buffered: !0,
            durationThreshold: 0
        }))
    },
    is = [],
    iu = new Map,
    ic = 0,
    il = function() {
        var t = Math.min(is.length - 1, Math.floor((ii() - ic) / 50));
        return is[t]
    },
    ip = [],
    id = function(t) {
        if (ip.forEach(function(e) {
                return e(t)
            }), t.interactionId || "first-input" === t.entryType) {
            var e = is[is.length - 1],
                n = iu.get(t.interactionId);
            if (n || is.length < 10 || t.duration > e.latency) {
                if (n) t.duration > n.latency ? (n.entries = [t], n.latency = t.duration) : t.duration === n.latency && t.startTime === n.entries[0].startTime && n.entries.push(t);
                else {
                    var r = {
                        id: t.interactionId,
                        latency: t.duration,
                        entries: [t]
                    };
                    iu.set(r.id, r), is.push(r)
                }
                is.sort(function(t, e) {
                    return e.latency - t.latency
                }), is.length > 10 && is.splice(10).forEach(function(t) {
                    return iu.delete(t.id)
                })
            }
        }
    },
    ih = function(t) {
        var e = self.requestIdleCallback || self.setTimeout,
            n = -1;
        return t = oY(t), "hidden" === document.visibilityState ? t() : (n = e(t), oZ(t)), n
    },
    ig = [200, 500],
    i_ = function(t, e) {
        "PerformanceEventTiming" in self && "interactionId" in PerformanceEventTiming.prototype && (e = e || {}, o4(function() {
            ia();
            var n, r, o = o$("INP"),
                i = function(t) {
                    ih(function() {
                        t.forEach(id);
                        var e = il();
                        e && e.latency !== o.value && (o.value = e.latency, o.entries = e.entries, r())
                    })
                },
                a = oq("event", i, {
                    durationThreshold: null !== (n = e.durationThreshold) && void 0 !== n ? n : 40
                });
            r = oW(t, o, ig, e.reportAllChanges), a && (a.observe({
                type: "first-input",
                buffered: !0
            }), oZ(function() {
                i(a.takeRecords()), r(!0)
            }), oX(function() {
                ic = ii(), is.length = 0, iu.clear(), r = oW(t, o = o$("INP"), ig, e.reportAllChanges)
            }))
        }))
    },
    iv = [],
    im = [],
    iy = 0,
    ib = new WeakMap,
    iE = new Map,
    iT = -1,
    iw = function(t) {
        iv = iv.concat(t), iS()
    },
    iS = function() {
        iT < 0 && (iT = ih(iO))
    },
    iO = function() {
        iE.size > 10 && iE.forEach(function(t, e) {
            iu.has(e) || iE.delete(e)
        });
        var t = is.map(function(t) {
                return ib.get(t.entries[0])
            }),
            e = im.length - 50;
        im = im.filter(function(n, r) {
            return r >= e || t.includes(n)
        });
        for (var n = new Set, r = 0; r < im.length; r++) {
            var o = im[r];
            iC(o.startTime, o.processingEnd).forEach(function(t) {
                n.add(t)
            })
        }
        var i = iv.length - 1 - 50;
        iv = iv.filter(function(t, e) {
            return t.startTime > iy && e > i || n.has(t)
        }), iT = -1
    };
ip.push(function(t) {
    t.interactionId && t.target && !iE.has(t.interactionId) && iE.set(t.interactionId, t.target)
}, function(t) {
    var e, n = t.startTime + t.duration;
    iy = Math.max(iy, t.processingEnd);
    for (var r = im.length - 1; r >= 0; r--) {
        var o = im[r];
        if (8 >= Math.abs(n - o.renderTime)) {
            (e = o).startTime = Math.min(t.startTime, e.startTime), e.processingStart = Math.min(t.processingStart, e.processingStart), e.processingEnd = Math.max(t.processingEnd, e.processingEnd), e.entries.push(t);
            break
        }
    }
    e || (e = {
        startTime: t.startTime,
        processingStart: t.processingStart,
        processingEnd: t.processingEnd,
        renderTime: n,
        entries: [t]
    }, im.push(e)), (t.interactionId || "first-input" === t.entryType) && ib.set(t, e), iS()
});
var iL, iP, iA, iR, iC = function(t, e) {
        for (var n, r = [], o = 0; n = iv[o]; o++)
            if (!(n.startTime + n.duration < t)) {
                if (n.startTime > e) break;
                r.push(n)
            } return r
    },
    iN = function(t, e) {
        oj || (oj = oq("long-animation-frame", iw)), i_(function(e) {
            var n, r, o, i, a, s, u, c, l, p;
            t((n = e.entries[0], r = ib.get(n), o = n.processingStart, i = r.processingEnd, a = r.entries.sort(function(t, e) {
                return t.processingStart - e.processingStart
            }), s = iC(n.startTime, i), c = (u = e.entries.find(function(t) {
                return t.target
            })) && u.target || iE.get(n.interactionId), l = [n.startTime + n.duration, i].concat(s.map(function(t) {
                return t.startTime + t.duration
            })), p = Math.max.apply(Math, l), Object.assign(e, {
                attribution: {
                    interactionTarget: oH(c),
                    interactionTargetElement: c,
                    interactionType: n.name.startsWith("key") ? "keyboard" : "pointer",
                    interactionTime: n.startTime,
                    nextPaintTime: p,
                    processedEventEntries: a,
                    longAnimationFrameEntries: s,
                    inputDelay: o - n.startTime,
                    processingDuration: i - o,
                    presentationDelay: Math.max(p - i, 0),
                    loadState: oB(n.startTime)
                }
            })))
        }, e)
    },
    ix = [2500, 4e3],
    iI = {},
    iD = function(t, e) {
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
                    var n = oU();
                    if (n) {
                        var r = n.activationStart || 0,
                            o = t.entries[t.entries.length - 1],
                            i = o.url && performance.getEntriesByType("resource").filter(function(t) {
                                return t.name === o.url
                            })[0],
                            a = Math.max(0, n.responseStart - r),
                            s = Math.max(a, i ? (i.requestStart || i.startTime) - r : 0),
                            u = Math.max(s, i ? i.responseEnd - r : 0),
                            c = Math.max(u, o.startTime - r);
                        e = {
                            element: oH(o.element),
                            timeToFirstByte: a,
                            resourceLoadDelay: s - a,
                            resourceLoadDuration: u - s,
                            elementRenderDelay: c - u,
                            navigationEntry: n,
                            lcpEntry: o
                        }, o.url && (e.url = o.url), i && (e.lcpResourceEntry = i)
                    }
                }
                return Object.assign(t, {
                    attribution: e
                })
            }(e))
        }, r = (r = e) || {}, o4(function() {
            var t, e = o3(),
                o = o$("LCP"),
                i = function(n) {
                    r.reportAllChanges || (n = n.slice(-1)), n.forEach(function(n) {
                        n.startTime < e.firstHiddenTime && (o.value = Math.max(n.startTime - oz(), 0), o.entries = [n], t())
                    })
                },
                a = oq("largest-contentful-paint", i);
            if (a) {
                t = oW(n, o, ix, r.reportAllChanges);
                var s = oY(function() {
                    iI[o.id] || (i(a.takeRecords()), a.disconnect(), iI[o.id] = !0, t(!0))
                });
                ["keydown", "click"].forEach(function(t) {
                    addEventListener(t, function() {
                        return ih(s)
                    }, !0)
                }), oZ(s), oX(function(e) {
                    t = oW(n, o = o$("LCP"), ix, r.reportAllChanges), oK(function() {
                        o.value = performance.now() - e.timeStamp, iI[o.id] = !0, t(!0)
                    })
                })
            }
        })
    },
    iM = [800, 1800],
    ik = function t(e) {
        document.prerendering ? o4(function() {
            return t(e)
        }) : "complete" !== document.readyState ? addEventListener("load", function() {
            return t(e)
        }, !0) : setTimeout(e, 0)
    },
    ij = function(t, e) {
        e = e || {};
        var n = o$("TTFB"),
            r = oW(t, n, iM, e.reportAllChanges);
        ik(function() {
            var o = oU();
            o && (n.value = Math.max(o.responseStart - oz(), 0), n.entries = [o], r(!0), oX(function() {
                (r = oW(t, n = o$("TTFB", 0), iM, e.reportAllChanges))(!0)
            }))
        })
    },
    iU = function(t, e) {
        ij(function(e) {
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
                        o = Math.max((n.workerStart || n.fetchStart) - r, 0),
                        i = Math.max(n.domainLookupStart - r, 0),
                        a = Math.max(n.connectStart - r, 0),
                        s = Math.max(n.connectEnd - r, 0);
                    e = {
                        waitingDuration: o,
                        cacheDuration: i - o,
                        dnsDuration: a - i,
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
    iB = {
        passive: !0,
        capture: !0
    },
    iF = new Date,
    iH = function(t, e) {
        iL || (iL = e, iP = t, iA = new Date, iX(removeEventListener), iV())
    },
    iV = function() {
        if (iP >= 0 && iP < iA - iF) {
            var t = {
                entryType: "first-input",
                name: iL.type,
                target: iL.target,
                cancelable: iL.cancelable,
                startTime: iL.timeStamp,
                processingStart: iL.timeStamp + iP
            };
            iR.forEach(function(e) {
                e(t)
            }), iR = []
        }
    },
    iG = function(t) {
        if (t.cancelable) {
            var e, n, r, o = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
            "pointerdown" == t.type ? (e = function() {
                iH(o, t), r()
            }, n = function() {
                r()
            }, r = function() {
                removeEventListener("pointerup", e, iB), removeEventListener("pointercancel", n, iB)
            }, addEventListener("pointerup", e, iB), addEventListener("pointercancel", n, iB)) : iH(o, t)
        }
    },
    iX = function(t) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e) {
            return t(e, iG, iB)
        })
    },
    iz = [100, 300],
    i$ = function(t, e) {
        e = e || {}, o4(function() {
            var n, r = o3(),
                o = o$("FID"),
                i = function(t) {
                    t.startTime < r.firstHiddenTime && (o.value = t.processingStart - t.startTime, o.entries.push(t), n(!0))
                },
                a = function(t) {
                    t.forEach(i)
                },
                s = oq("first-input", a);
            n = oW(t, o, iz, e.reportAllChanges), s && (oZ(oY(function() {
                a(s.takeRecords()), s.disconnect()
            })), oX(function() {
                n = oW(t, o = o$("FID"), iz, e.reportAllChanges), iR = [], iP = -1, iL = null, iX(addEventListener), iR.push(i), iV()
            }))
        })
    },
    iq = function(t, e) {
        i$(function(e) {
            var n;
            t((n = e.entries[0], Object.assign(e, {
                attribution: {
                    eventTarget: oH(n.target),
                    eventType: n.name,
                    eventTime: n.startTime,
                    eventEntry: n,
                    loadState: oB(n.startTime)
                }
            })))
        }, e)
    };
class iW {
    constructor(t, e, n = {}) {
        this.instrumentationName = t, this.instrumentationVersion = e, this._wrap = rE.wrap, this._unwrap = rE.unwrap, this._massWrap = rE.massWrap, this._massUnwrap = rE.massUnwrap, this._config = Object.assign({
            enabled: !0
        }, n), this._diag = ty.createComponentLogger({
            namespace: t
        }), this._tracer = er.getTracer(t, e), this._meter = tH.getMeter(t, e), this._updateMetricInstruments()
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
class iK extends iW {
    constructor({
        enabled: t = !0,
        vitalsToTrack: e = ["CLS", "LCP", "INP"],
        lcp: n,
        cls: r,
        inp: o,
        fid: i,
        fcp: a,
        ttfb: s
    } = {}) {
        super("@honeycombio/instrumentation-web-vitals", rN, {
            enabled: t,
            vitalsToTrack: e,
            lcp: n,
            cls: r,
            inp: o,
            fid: i,
            fcp: a,
            ttfb: s
        }), this.onReportCLS = (t, e = {}) => {
            let {
                applyCustomAttributes: n
            } = e;
            if (!this.isEnabled()) return;
            let {
                name: r,
                attribution: o
            } = t, {
                largestShiftTarget: i,
                largestShiftTime: a,
                largestShiftValue: s,
                loadState: u,
                largestShiftEntry: c
            } = o, l = this.getAttrPrefix(r), p = this.tracer.startSpan(r);
            p.setAttributes(Object.assign(Object.assign({}, this.getSharedAttributes(t)), {
                [`${l}.largest_shift_target`]: i,
                [`${l}.element`]: i,
                [`${l}.largest_shift_time`]: a,
                [`${l}.largest_shift_value`]: s,
                [`${l}.load_state`]: u,
                [`${l}.had_recent_input`]: null == c ? void 0 : c.hadRecentInput
            })), n && n(t, p), p.end()
        }, this.onReportLCP = (t, e = {}) => {
            let {
                applyCustomAttributes: n,
                dataAttributes: r
            } = e;
            if (!this.isEnabled()) return;
            let {
                name: o,
                attribution: i
            } = t, {
                element: a,
                url: s,
                timeToFirstByte: u,
                resourceLoadDelay: c,
                resourceLoadDuration: l,
                elementRenderDelay: p,
                lcpEntry: f
            } = i, d = this.getAttrPrefix(o), h = this.tracer.startSpan(o);
            h.setAttributes(Object.assign(Object.assign({}, this.getSharedAttributes(t)), {
                [`${d}.element`]: a,
                [`${d}.url`]: s,
                [`${d}.time_to_first_byte`]: u,
                [`${d}.resource_load_delay`]: c,
                [`${d}.resource_load_duration`]: l,
                [`${d}.element_render_delay`]: p,
                [`${d}.resource_load_time`]: l
            }));
            let g = null == f ? void 0 : f.element;
            if (null == g ? void 0 : g.dataset)
                for (let t in g.dataset) {
                    let e = g.dataset[t];
                    void 0 !== e && (void 0 === r || r.includes(t)) && h.setAttribute(`${d}.element.data.${t}`, e)
                }
            n && n(t, h), h.end()
        }, this.onReportINP = (t, e = {
            includeTimingsAsSpans: !1
        }) => {
            let {
                applyCustomAttributes: n,
                includeTimingsAsSpans: r
            } = e;
            if (!this.isEnabled()) return;
            let {
                name: o,
                attribution: i
            } = t, {
                inputDelay: a,
                interactionTarget: s,
                interactionTime: u,
                interactionType: c,
                loadState: l,
                nextPaintTime: p,
                presentationDelay: f,
                processingDuration: d,
                longAnimationFrameEntries: h
            } = i, g = this.getAttrPrefix(o), _ = a + d + f;
            this.tracer.startActiveSpan(o, {
                startTime: u
            }, e => {
                let o = Object.assign(Object.assign({}, this.getSharedAttributes(t)), {
                    [`${g}.input_delay`]: a,
                    [`${g}.interaction_target`]: s,
                    [`${g}.interaction_time`]: u,
                    [`${g}.interaction_type`]: c,
                    [`${g}.load_state`]: l,
                    [`${g}.next_paint_time`]: p,
                    [`${g}.presentation_delay`]: f,
                    [`${g}.processing_duration`]: d,
                    [`${g}.duration`]: _,
                    [`${g}.element`]: s,
                    [`${g}.event_type`]: c
                });
                e.setAttributes(o), n && n(t, e), r && h.forEach(t => {
                    this.processPerformanceLongAnimationFrameTimingSpans(g, t)
                }), e.end(u + _)
            })
        }, this.onReportFCP = (t, e = {}) => {
            let {
                applyCustomAttributes: n
            } = e;
            if (!this.isEnabled()) return;
            let {
                name: r,
                attribution: o
            } = t, {
                timeToFirstByte: i,
                firstByteToFCP: a,
                loadState: s
            } = o, u = this.getAttrPrefix(r), c = this.tracer.startSpan(r);
            c.setAttributes(Object.assign(Object.assign({}, this.getSharedAttributes(t)), {
                [`${u}.time_to_first_byte`]: i,
                [`${u}.time_since_first_byte`]: a,
                [`${u}.load_state`]: s
            })), n && n(t, c), c.end()
        }, this.onReportFID = (t, e = {}) => {
            let {
                applyCustomAttributes: n
            } = e;
            if (!this.isEnabled()) return;
            let {
                name: r,
                attribution: o
            } = t, {
                eventTarget: i,
                eventType: a,
                loadState: s
            } = o, u = this.getAttrPrefix(r), c = this.tracer.startSpan(r);
            c.setAttributes(Object.assign(Object.assign({}, this.getSharedAttributes(t)), {
                [`${u}.element`]: i,
                [`${u}.event_type`]: a,
                [`${u}.load_state`]: s
            })), n && n(t, c), c.end()
        }, this.onReportTTFB = (t, e = {}) => {
            let {
                applyCustomAttributes: n
            } = e;
            if (!this.isEnabled()) return;
            let {
                name: r,
                attribution: o
            } = t, {
                cacheDuration: i,
                connectionDuration: a,
                dnsDuration: s,
                requestDuration: u,
                waitingDuration: c
            } = o, l = this.getAttrPrefix(r), p = Object.assign(Object.assign({}, this.getSharedAttributes(t)), {
                [`${l}.waiting_duration`]: c,
                [`${l}.dns_duration`]: s,
                [`${l}.connection_duration`]: a,
                [`${l}.request_duration`]: u,
                [`${l}.cache_duration`]: i,
                [`${l}.waiting_time`]: c,
                [`${l}.dns_time`]: s,
                [`${l}.connection_time`]: a,
                [`${l}.request_time`]: u
            }), f = this.tracer.startSpan(r);
            f.setAttributes(p), n && n(t, f), f.end()
        }, this.vitalsToTrack = [...e], this.lcpOpts = n, this.clsOpts = r, this.inpOpts = o, this.fidOpts = i, this.fcpOpts = a, this.ttfbOpts = s, this._isEnabled = t, this._setupWebVitalsCallbacks()
    }
    init() {}
    _setupWebVitalsCallbacks() {
        this.vitalsToTrack.includes("CLS") && o8(t => {
            this.onReportCLS(t, this.clsOpts)
        }, this.clsOpts), this.vitalsToTrack.includes("LCP") && iD(t => {
            this.onReportLCP(t, this.lcpOpts)
        }, this.lcpOpts), this.vitalsToTrack.includes("INP") && iN(t => {
            this.onReportINP(t, this.inpOpts)
        }, this.inpOpts), this.vitalsToTrack.includes("FID") && iq(t => {
            this.onReportFID(t, this.fidOpts)
        }, this.fidOpts), this.vitalsToTrack.includes("TTFB") && iU(t => {
            this.onReportTTFB(t, this.ttfbOpts)
        }, this.ttfbOpts), this.vitalsToTrack.includes("FCP") && o7(t => {
            this.onReportFCP(t, this.fcpOpts)
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
            rating: o,
            value: i,
            navigationType: a
        } = t, s = this.getAttrPrefix(e);
        return {
            [`${s}.id`]: n,
            [`${s}.delta`]: r,
            [`${s}.value`]: i,
            [`${s}.rating`]: o,
            [`${s}.navigation_type`]: a
        }
    }
    getAttributesForPerformanceLongAnimationFrameTiming(t, e) {
        return {
            [`${t}.duration`]: e.duration,
            [`${t}.entryType`]: e.entryType,
            [`${t}.name`]: e.name,
            [`${t}.renderStart`]: e.renderStart,
            [`${t}.startTime`]: e.startTime
        }
    }
    getAttributesForPerformanceScriptTiming(t, e) {
        return {
            [`${t}.entry_type`]: e.entryType,
            [`${t}.start_time`]: e.startTime,
            [`${t}.execution_start`]: e.executionStart,
            [`${t}.duration`]: e.duration,
            [`${t}.forced_style_and_layout_duration`]: e.forcedStyleAndLayoutDuration,
            [`${t}.invoker`]: e.invoker,
            [`${t}.pause_duration`]: e.pauseDuration,
            [`${t}.source_url`]: e.sourceURL,
            [`${t}.source_function_name`]: e.sourceFunctionName,
            [`${t}.source_char_position`]: e.sourceCharPosition,
            [`${t}.window_attribution`]: e.windowAttribution
        }
    }
    processPerformanceLongAnimationFrameTimingSpans(t, e) {
        if (!e) return;
        let n = `${t}.timing`,
            r = this.getAttributesForPerformanceLongAnimationFrameTiming(n, e);
        this.tracer.startActiveSpan(e.name, {
            startTime: e.startTime
        }, t => {
            t.setAttributes(r), this.processPerformanceScriptTimingSpans(n, e.scripts), t.end(e.startTime + e.duration)
        })
    }
    processPerformanceScriptTimingSpans(t, e) {
        if (!e || !(null == e ? void 0 : e.length)) return;
        let n = `${t}.script`;
        e.map(t => {
            this.tracer.startActiveSpan(t.name, {
                startTime: t.startTime
            }, e => {
                let r = this.getAttributesForPerformanceScriptTiming(n, t);
                e.setAttributes(r), e.end(t.startTime + t.duration)
            })
        })
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
class iZ extends iW {
    constructor({
        enabled: t = !0
    } = {}) {
        super("@honeycombio/instrumentation-global-errors", rN, {
            enabled: t
        }), this.onError = t => {
            let e = "reason" in t ? t.reason : t.error,
                n = null == e ? void 0 : e.message,
                r = null == e ? void 0 : e.name,
                o = {
                    [nE]: r,
                    [nT]: n,
                    [nw]: null == e ? void 0 : e.stack
                };
            if (!n || !r) return;
            let i = this.tracer.startSpan("exception", {
                attributes: o
            }, tm.active());
            i.setStatus({
                code: oP.ERROR,
                message: n
            }), i.end()
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
}(t = h || (h = {})).CONNECT_END = "connectEnd", t.CONNECT_START = "connectStart", t.DECODED_BODY_SIZE = "decodedBodySize", t.DOM_COMPLETE = "domComplete", t.DOM_CONTENT_LOADED_EVENT_END = "domContentLoadedEventEnd", t.DOM_CONTENT_LOADED_EVENT_START = "domContentLoadedEventStart", t.DOM_INTERACTIVE = "domInteractive", t.DOMAIN_LOOKUP_END = "domainLookupEnd", t.DOMAIN_LOOKUP_START = "domainLookupStart", t.ENCODED_BODY_SIZE = "encodedBodySize", t.FETCH_START = "fetchStart", t.LOAD_EVENT_END = "loadEventEnd", t.LOAD_EVENT_START = "loadEventStart", t.NAVIGATION_START = "navigationStart", t.REDIRECT_END = "redirectEnd", t.REDIRECT_START = "redirectStart", t.REQUEST_START = "requestStart", t.RESPONSE_END = "responseEnd", t.RESPONSE_START = "responseStart", t.SECURE_CONNECTION_START = "secureConnectionStart", t.UNLOAD_EVENT_END = "unloadEventEnd", t.UNLOAD_EVENT_START = "unloadEventStart";
var iY = performance;

function iQ(t) {
    return [Math.trunc(t / 1e3), Math.round(t % 1e3 * 1e6)]
}

function iJ() {
    var t = iY.timeOrigin;
    return "number" != typeof t && (t = iY.timing && iY.timing.fetchStart), t
}

function i0(t) {
    var e, n, r;
    if (Array.isArray(t) && 2 === t.length && "number" == typeof t[0] && "number" == typeof t[1]) return t;
    if ("number" == typeof t) return t < iJ() ? (e = iQ(iJ()), n = iQ("number" == typeof t ? t : iY.now()), (r = [e[0] + n[0], e[1] + n[1]])[1] >= 1e9 && (r[1] -= 1e9, r[0] += 1), r) : iQ(t);
    if (t instanceof Date) return iQ(t.getTime());
    throw TypeError("Invalid input type")
}

function i1(t) {
    return 1e9 * t[0] + t[1]
}

function i2(t, e, n, r) {
    var o = void 0,
        i = void 0;
    e in n && "number" == typeof n[e] && (o = n[e]);
    var a = r || h.FETCH_START;
    if (a in n && "number" == typeof n[a] && (i = n[a]), void 0 !== o && void 0 !== i && o >= i) return t.addEvent(e, o), t
}

function i3(t, e) {
    i2(t, h.FETCH_START, e), i2(t, h.DOMAIN_LOOKUP_START, e), i2(t, h.DOMAIN_LOOKUP_END, e), i2(t, h.CONNECT_START, e), "name" in e && e.name.startsWith("https:") && i2(t, h.SECURE_CONNECTION_START, e), i2(t, h.CONNECT_END, e), i2(t, h.REQUEST_START, e), i2(t, h.RESPONSE_START, e), i2(t, h.RESPONSE_END, e);
    var n = e[h.ENCODED_BODY_SIZE];
    void 0 !== n && t.setAttribute("http.response_content_length", n);
    var r = e[h.DECODED_BODY_SIZE];
    void 0 !== r && n !== r && t.setAttribute("http.response_content_length_uncompressed", r)
}

function i4() {
    return "undefined" != typeof location ? location.origin : void 0
}

function i6(t, e, n, r, o, i) {
    void 0 === o && (o = new WeakSet);
    var a, s, u, c, l, p = i5(t),
        f = (a = t = p.toString(), s = o, u = i1(e), c = i1(n), (l = r.filter(function(t) {
            var e = i1(i0(t[h.FETCH_START])),
                n = i1(i0(t[h.RESPONSE_END]));
            return t.initiatorType.toLowerCase() === (i || "xmlhttprequest") && t.name === a && e >= u && n <= c
        })).length > 0 && (l = l.filter(function(t) {
            return !s.has(t)
        })), l);
    if (0 === f.length) return {
        mainRequest: void 0
    };
    if (1 === f.length) return {
        mainRequest: f[0]
    };
    var d = f.slice().sort(function(t, e) {
        var n = t[h.FETCH_START],
            r = e[h.FETCH_START];
        return n > r ? 1 : n < r ? -1 : 0
    });
    if (p.origin === i4() || !(d.length > 1)) return {
        mainRequest: f[0]
    };
    var g = d[0],
        _ = function(t, e, n) {
            for (var r, o = i1(n), i = i1(i0(e)), a = t[1], s = t.length, u = 1; u < s; u++) {
                var c = t[u],
                    l = i1(i0(c[h.FETCH_START])),
                    p = o - i1(i0(c[h.RESPONSE_END]));
                l >= i && (!r || p < r) && (r = p, a = c)
            }
            return a
        }(d, g[h.RESPONSE_END], n),
        v = g[h.RESPONSE_END];
    return _[h.FETCH_START] < v && (_ = g, g = void 0), {
        corsPreFlightRequest: g,
        mainRequest: _
    }
}

function i5(t) {
    if ("function" == typeof URL) return new URL(t, "undefined" != typeof document ? document.baseURI : "undefined" != typeof location ? location.href : void 0);
    var e = (g || (g = document.createElement("a")), g);
    return e.href = t, e
}

function i9(t, e) {
    var n = e || [];
    return ("string" == typeof n || n instanceof RegExp) && (n = [n]), i5(t).origin === i4() || n.some(function(e) {
        return "string" == typeof e ? t === e : !!t.match(e)
    })
}
var i8 = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof L ? L : {},
    i7 = Symbol.for("io.opentelemetry.js.api.logs"),
    at = function() {
        function t() {}
        return t.prototype.emit = function(t) {}, t
    }(),
    ae = new at,
    an = new(function() {
        function t() {}
        return t.prototype.getLogger = function(t, e, n) {
            return new at
        }, t
    }()),
    ar = function() {
        function t(t, e, n, r) {
            this._provider = t, this.name = e, this.version = n, this.options = r
        }
        return t.prototype.emit = function(t) {
            this._getLogger().emit(t)
        }, t.prototype._getLogger = function() {
            if (this._delegate) return this._delegate;
            var t = this._provider.getDelegateLogger(this.name, this.version, this.options);
            return t ? (this._delegate = t, this._delegate) : ae
        }, t
    }(),
    ao = function() {
        function t() {}
        return t.prototype.getLogger = function(t, e, n) {
            var r;
            return null !== (r = this.getDelegateLogger(t, e, n)) && void 0 !== r ? r : new ar(this, t, e, n)
        }, t.prototype.getDelegate = function() {
            var t;
            return null !== (t = this._delegate) && void 0 !== t ? t : an
        }, t.prototype.setDelegate = function(t) {
            this._delegate = t
        }, t.prototype.getDelegateLogger = function(t, e, n) {
            var r;
            return null === (r = this._delegate) || void 0 === r ? void 0 : r.getLogger(t, e, n)
        }, t
    }(),
    ai = (function() {
        function t() {
            this._proxyLoggerProvider = new ao
        }
        return t.getInstance = function() {
            return this._instance || (this._instance = new t), this._instance
        }, t.prototype.setGlobalLoggerProvider = function(t) {
            return i8[i7] ? this.getLoggerProvider() : (i8[i7] = function(e) {
                return 1 === e ? t : an
            }, this._proxyLoggerProvider.setDelegate(t), t)
        }, t.prototype.getLoggerProvider = function() {
            var t, e;
            return null !== (e = null === (t = i8[i7]) || void 0 === t ? void 0 : t.call(i8, 1)) && void 0 !== e ? e : this._proxyLoggerProvider
        }, t.prototype.getLogger = function(t, e, n) {
            return this.getLoggerProvider().getLogger(t, e, n)
        }, t.prototype.disable = function() {
            delete i8[i7], this._proxyLoggerProvider = new ao
        }, t
    })().getInstance(),
    aa = function() {
        return (aa = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    },
    as = function() {
        function t(t, e, n) {
            this.instrumentationName = t, this.instrumentationVersion = e, this._config = {}, this._wrap = rE.wrap, this._unwrap = rE.unwrap, this._massWrap = rE.massWrap, this._massUnwrap = rE.massUnwrap, this.setConfig(n), this._diag = ty.createComponentLogger({
                namespace: t
            }), this._tracer = er.getTracer(t, e), this._meter = tH.getMeter(t, e), this._logger = ai.getLogger(t, e), this._updateMetricInstruments()
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
            this._config = aa({
                enabled: !0
            }, t)
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
    au = (e = function(t, n) {
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
    ac = function(t) {
        function e(e, n, r) {
            var o = t.call(this, e, n, r) || this;
            return o._config.enabled && o.enable(), o
        }
        return au(e, t), e
    }(as);

function al(t, e, n) {
    var r, o;
    try {
        o = t()
    } catch (t) {
        r = t
    } finally {
        if (e(r, o), r && !n) throw r;
        return o
    }
}(n = _ || (_ = {})).DOCUMENT_LOAD = "documentLoad", n.DOCUMENT_FETCH = "documentFetch", n.RESOURCE_FETCH = "resourceFetch", (r = v || (v = {})).FIRST_PAINT = "firstPaint", r.FIRST_CONTENTFUL_PAINT = "firstContentfulPaint";
var ap = function() {
        var t, e = {},
            n = null === (t = nh.getEntriesByType) || void 0 === t ? void 0 : t.call(nh, "navigation")[0];
        if (n) {
            var r = Object.values(h);
            r.forEach(function(t) {
                if (t in n) {
                    var r = n[t];
                    "number" == typeof r && (e[t] = r)
                }
            })
        } else {
            var o = nh.timing;
            if (o) {
                var r = Object.values(h);
                r.forEach(function(t) {
                    if (t in o) {
                        var n = o[t];
                        "number" == typeof n && (e[t] = n)
                    }
                })
            }
        }
        return e
    },
    af = {
        "first-paint": v.FIRST_PAINT,
        "first-contentful-paint": v.FIRST_CONTENTFUL_PAINT
    },
    ad = function(t) {
        var e, n = null === (e = nh.getEntriesByType) || void 0 === e ? void 0 : e.call(nh, "paint");
        n && n.forEach(function(e) {
            var n = e.name,
                r = e.startTime;
            n in af && t.addEvent(af[n], r)
        })
    },
    ah = (o = function(t, e) {
        return (o = Object.setPrototypeOf || ({
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
        o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    ag = function(t) {
        function e(e) {
            void 0 === e && (e = {});
            var n = t.call(this, "@opentelemetry/instrumentation-document-load", "0.41.0", e) || this;
            return n.component = "document-load", n.version = "1", n.moduleName = n.component, n
        }
        return ah(e, t), e.prototype.init = function() {}, e.prototype._onDocumentLoaded = function() {
            var t = this;
            window.setTimeout(function() {
                t._collectPerformance()
            })
        }, e.prototype._addResourcesSpans = function(t) {
            var e, n = this,
                r = null === (e = nh.getEntriesByType) || void 0 === e ? void 0 : e.call(nh, "resource");
            r && r.forEach(function(e) {
                n._initResourceSpan(e, t)
            })
        }, e.prototype._collectPerformance = function() {
            var t = this,
                e = Array.from(document.getElementsByTagName("meta")).find(function(t) {
                    return t.getAttribute("name") === ni
                }),
                n = ap(),
                r = e && e.content || "";
            tm.with(tQ.extract(Q, {
                traceparent: r
            }), function() {
                var e, r = t._startSpan(_.DOCUMENT_LOAD, h.FETCH_START, n);
                r && (tm.with(er.setSpan(tm.active(), r), function() {
                    var e = t._startSpan(_.DOCUMENT_FETCH, h.FETCH_START, n);
                    e && (e.setAttribute(nO, location.href), tm.with(er.setSpan(tm.active(), e), function() {
                        var r;
                        t.getConfig().ignoreNetworkEvents || i3(e, n), t._addCustomAttributesOnSpan(e, null === (r = t.getConfig().applyCustomAttributesOnSpan) || void 0 === r ? void 0 : r.documentFetch), t._endSpan(e, h.RESPONSE_END, n)
                    }))
                }), r.setAttribute(nO, location.href), r.setAttribute(nR, navigator.userAgent), t._addResourcesSpans(r), t.getConfig().ignoreNetworkEvents || (i2(r, h.FETCH_START, n), i2(r, h.UNLOAD_EVENT_START, n), i2(r, h.UNLOAD_EVENT_END, n), i2(r, h.DOM_INTERACTIVE, n), i2(r, h.DOM_CONTENT_LOADED_EVENT_START, n), i2(r, h.DOM_CONTENT_LOADED_EVENT_END, n), i2(r, h.DOM_COMPLETE, n), i2(r, h.LOAD_EVENT_START, n), i2(r, h.LOAD_EVENT_END, n)), t.getConfig().ignorePerformancePaintEvents || ad(r), t._addCustomAttributesOnSpan(r, null === (e = t.getConfig().applyCustomAttributesOnSpan) || void 0 === e ? void 0 : e.documentLoad), t._endSpan(r, h.LOAD_EVENT_END, n))
            })
        }, e.prototype._endSpan = function(t, e, n) {
            t && (e in n ? t.end(n[e]) : t.end())
        }, e.prototype._initResourceSpan = function(t, e) {
            var n, r = this._startSpan(_.RESOURCE_FETCH, h.FETCH_START, t, e);
            r && (r.setAttribute(nO, t.name), this.getConfig().ignoreNetworkEvents || i3(r, t), this._addCustomAttributesOnResourceSpan(r, t, null === (n = this.getConfig().applyCustomAttributesOnSpan) || void 0 === n ? void 0 : n.resourceFetch), this._endSpan(r, h.RESPONSE_END, t))
        }, e.prototype._startSpan = function(t, e, n, r) {
            if (e in n && "number" == typeof n[e]) return this.tracer.startSpan(t, {
                startTime: n[e]
            }, r ? er.setSpan(tm.active(), r) : void 0)
        }, e.prototype._waitForPageLoad = function() {
            "complete" === window.document.readyState ? this._onDocumentLoaded() : (this._onDocumentLoaded = this._onDocumentLoaded.bind(this), window.addEventListener("load", this._onDocumentLoaded))
        }, e.prototype._addCustomAttributesOnSpan = function(t, e) {
            var n = this;
            e && al(function() {
                return e(t)
            }, function(t) {
                t && n._diag.error("addCustomAttributesOnSpan", t)
            }, !0)
        }, e.prototype._addCustomAttributesOnResourceSpan = function(t, e, n) {
            var r = this;
            n && al(function() {
                return n(t, e)
            }, function(t) {
                t && r._diag.error("addCustomAttributesOnResourceSpan", t)
            }, !0)
        }, e.prototype.enable = function() {
            window.removeEventListener("load", this._onDocumentLoaded), this._waitForPageLoad()
        }, e.prototype.disable = function() {
            window.removeEventListener("load", this._onDocumentLoaded)
        }, e
    }(ac),
    a_ = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof L ? L : {},
    av = Symbol.for("io.opentelemetry.js.api.logs"),
    am = function() {
        function t() {}
        return t.prototype.emit = function(t) {}, t
    }(),
    ay = new am,
    ab = new(function() {
        function t() {}
        return t.prototype.getLogger = function(t, e, n) {
            return new am
        }, t
    }()),
    aE = function() {
        function t(t, e, n, r) {
            this._provider = t, this.name = e, this.version = n, this.options = r
        }
        return t.prototype.emit = function(t) {
            this._getLogger().emit(t)
        }, t.prototype._getLogger = function() {
            if (this._delegate) return this._delegate;
            var t = this._provider.getDelegateLogger(this.name, this.version, this.options);
            return t ? (this._delegate = t, this._delegate) : ay
        }, t
    }(),
    aT = function() {
        function t() {}
        return t.prototype.getLogger = function(t, e, n) {
            var r;
            return null !== (r = this.getDelegateLogger(t, e, n)) && void 0 !== r ? r : new aE(this, t, e, n)
        }, t.prototype.getDelegate = function() {
            var t;
            return null !== (t = this._delegate) && void 0 !== t ? t : ab
        }, t.prototype.setDelegate = function(t) {
            this._delegate = t
        }, t.prototype.getDelegateLogger = function(t, e, n) {
            var r;
            return null === (r = this._delegate) || void 0 === r ? void 0 : r.getLogger(t, e, n)
        }, t
    }(),
    aw = (function() {
        function t() {
            this._proxyLoggerProvider = new aT
        }
        return t.getInstance = function() {
            return this._instance || (this._instance = new t), this._instance
        }, t.prototype.setGlobalLoggerProvider = function(t) {
            return a_[av] ? this.getLoggerProvider() : (a_[av] = function(e) {
                return 1 === e ? t : ab
            }, this._proxyLoggerProvider.setDelegate(t), t)
        }, t.prototype.getLoggerProvider = function() {
            var t, e;
            return null !== (e = null === (t = a_[av]) || void 0 === t ? void 0 : t.call(a_, 1)) && void 0 !== e ? e : this._proxyLoggerProvider
        }, t.prototype.getLogger = function(t, e, n) {
            return this.getLoggerProvider().getLogger(t, e, n)
        }, t.prototype.disable = function() {
            delete a_[av], this._proxyLoggerProvider = new aT
        }, t
    })().getInstance(),
    aS = function() {
        return (aS = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    },
    aO = function() {
        function t(t, e, n) {
            this.instrumentationName = t, this.instrumentationVersion = e, this._config = {}, this._wrap = rE.wrap, this._unwrap = rE.unwrap, this._massWrap = rE.massWrap, this._massUnwrap = rE.massUnwrap, this.setConfig(n), this._diag = ty.createComponentLogger({
                namespace: t
            }), this._tracer = er.getTracer(t, e), this._meter = tH.getMeter(t, e), this._logger = aw.getLogger(t, e), this._updateMetricInstruments()
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
            this._config = aS({
                enabled: !0
            }, t)
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
    aL = (i = function(t, e) {
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
    aP = function(t) {
        function e(e, n, r) {
            var o = t.call(this, e, n, r) || this;
            return o._config.enabled && o.enable(), o
        }
        return aL(e, t), e
    }(aO),
    aA = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof L ? L : {},
    aR = performance;

function aC(t) {
    return [Math.trunc(t / 1e3), Math.round(t % 1e3 * 1e6)]
}

function aN(t) {
    var e, n, r, o;
    return n = aC(("number" != typeof(e = aR.timeOrigin) && (e = aR.timing && aR.timing.fetchStart), e)), r = aC("number" == typeof t ? t : aR.now()), (o = [n[0] + r[0], n[1] + r[1]])[1] >= 1e9 && (o[1] -= 1e9, o[0] += 1), o
}
var ax = function(t) {
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
(a = m || (m = {})).COMPONENT = "component", a.HTTP_ERROR_NAME = "http.error_name", a.HTTP_STATUS_TEXT = "http.status_text";
var aI = "0.54.0",
    aD = {},
    aM = aD = {};

function ak() {
    throw Error("setTimeout has not been defined")
}

function aj() {
    throw Error("clearTimeout has not been defined")
}

function aU(t) {
    if (y === setTimeout) return setTimeout(t, 0);
    if ((y === ak || !y) && setTimeout) return y = setTimeout, setTimeout(t, 0);
    try {
        return y(t, 0)
    } catch (e) {
        try {
            return y.call(null, t, 0)
        } catch (e) {
            return y.call(this, t, 0)
        }
    }
}! function() {
    try {
        y = "function" == typeof setTimeout ? setTimeout : ak
    } catch (t) {
        y = ak
    }
    try {
        b = "function" == typeof clearTimeout ? clearTimeout : aj
    } catch (t) {
        b = aj
    }
}();
var aB = [],
    aF = !1,
    aH = -1;

function aV() {
    aF && E && (aF = !1, E.length ? aB = E.concat(aB) : aH = -1, aB.length && aG())
}

function aG() {
    if (!aF) {
        var t = aU(aV);
        aF = !0;
        for (var e = aB.length; e;) {
            for (E = aB, aB = []; ++aH < e;) E && E[aH].run();
            aH = -1, e = aB.length
        }
        E = null, aF = !1,
            function(t) {
                if (b === clearTimeout) return clearTimeout(t);
                if ((b === aj || !b) && clearTimeout) return b = clearTimeout, clearTimeout(t);
                try {
                    b(t)
                } catch (e) {
                    try {
                        return b.call(null, t)
                    } catch (e) {
                        return b.call(this, t)
                    }
                }
            }(t)
    }
}

function aX(t, e) {
    this.fun = t, this.array = e
}

function az() {}
aM.nextTick = function(t) {
    var e = Array(arguments.length - 1);
    if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    aB.push(new aX(t, e)), 1 !== aB.length || aF || aU(aG)
}, aX.prototype.run = function() {
    this.fun.apply(null, this.array)
}, aM.title = "browser", aM.browser = !0, aM.env = {}, aM.argv = [], aM.version = "", aM.versions = {}, aM.on = az, aM.addListener = az, aM.once = az, aM.off = az, aM.removeListener = az, aM.removeAllListeners = az, aM.emit = az, aM.prependListener = az, aM.prependOnceListener = az, aM.listeners = function(t) {
    return []
}, aM.binding = function(t) {
    throw Error("process.binding is not supported")
}, aM.cwd = function() {
    return "/"
}, aM.chdir = function(t) {
    throw Error("process.chdir is not supported")
}, aM.umask = function() {
    return 0
};
var a$ = (s = function(t, e) {
        return (s = Object.setPrototypeOf || ({
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
        s(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    aq = "object" == typeof aD && (null === (T = aD.release) || void 0 === T ? void 0 : T.name) === "node",
    aW = function(t) {
        function e(e) {
            void 0 === e && (e = {});
            var n = t.call(this, "@opentelemetry/instrumentation-fetch", aI, e) || this;
            return n.component = "fetch", n.version = aI, n.moduleName = n.component, n._usedResources = new WeakSet, n._tasksCount = 0, n
        }
        return a$(e, t), e.prototype.init = function() {}, e.prototype._addChildSpan = function(t, e) {
            var n = this.tracer.startSpan("CORS Preflight", {
                startTime: e[h.FETCH_START]
            }, er.setSpan(tm.active(), t));
            this.getConfig().ignoreNetworkEvents || i3(n, e), n.end(e[h.RESPONSE_END])
        }, e.prototype._addFinalSpanAttributes = function(t, e) {
            var n = i5(e.url);
            t.setAttribute(nA, e.status), null != e.statusText && t.setAttribute(m.HTTP_STATUS_TEXT, e.statusText), t.setAttribute(nL, n.host), t.setAttribute(nP, n.protocol.replace(":", "")), "undefined" != typeof navigator && t.setAttribute(nR, navigator.userAgent)
        }, e.prototype._addHeaders = function(t, e) {
            if (!i9(e, this.getConfig().propagateTraceHeaderCorsUrls)) {
                var n = {};
                tQ.inject(tm.active(), n), Object.keys(n).length > 0 && this._diag.debug("headers inject skipped due to CORS policy");
                return
            }
            if (t instanceof Request) tQ.inject(tm.active(), t.headers, {
                set: function(t, e, n) {
                    return t.set(e, "string" == typeof n ? n : String(n))
                }
            });
            else if (t.headers instanceof Headers) tQ.inject(tm.active(), t.headers, {
                set: function(t, e, n) {
                    return t.set(e, "string" == typeof n ? n : String(n))
                }
            });
            else if (t.headers instanceof Map) tQ.inject(tm.active(), t.headers, {
                set: function(t, e, n) {
                    return t.set(e, "string" == typeof n ? n : String(n))
                }
            });
            else {
                var n = {};
                tQ.inject(tm.active(), n), t.headers = Object.assign({}, n, t.headers || {})
            }
        }, e.prototype._clearResources = function() {
            0 === this._tasksCount && this.getConfig().clearTimingResources && (performance.clearResourceTimings(), this._usedResources = new WeakSet)
        }, e.prototype._createSpan = function(t, e) {
            if (void 0 === e && (e = {}), function(t, e) {
                    var n, r;
                    if (!e) return !1;
                    try {
                        for (var o = ax(e), i = o.next(); !i.done; i = o.next()) {
                            var a = i.value;
                            if ("string" == typeof a ? t === a : !!t.match(a)) return !0
                        }
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            i && !i.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return !1
                }(t, this.getConfig().ignoreUrls)) {
                this._diag.debug("ignoring span as url matches ignored url");
                return
            }
            var n, r = (e.method || "GET").toUpperCase(),
                o = "HTTP " + r;
            return this.tracer.startSpan(o, {
                kind: oL.CLIENT,
                attributes: ((n = {})[m.COMPONENT] = this.moduleName, n[nS] = r, n[nO] = t, n)
            })
        }, e.prototype._findResourceAndAddNetworkEvents = function(t, e, n) {
            var r = e.entries;
            if (!r.length) {
                if (!performance.getEntriesByType) return;
                r = performance.getEntriesByType("resource")
            }
            var o = i6(e.spanUrl, e.startTime, n, r, this._usedResources, "fetch");
            if (o.mainRequest) {
                var i = o.mainRequest;
                this._markResourceAsUsed(i);
                var a = o.corsPreFlightRequest;
                a && (this._addChildSpan(t, a), this._markResourceAsUsed(a)), this.getConfig().ignoreNetworkEvents || i3(t, i)
            }
        }, e.prototype._markResourceAsUsed = function(t) {
            this._usedResources.add(t)
        }, e.prototype._endSpan = function(t, e, n) {
            var r = this,
                o = aC(Date.now()),
                i = aN();
            this._addFinalSpanAttributes(t, n), setTimeout(function() {
                var n;
                null === (n = e.observer) || void 0 === n || n.disconnect(), r._findResourceAndAddNetworkEvents(t, e, i), r._tasksCount--, r._clearResources(), t.end(o)
            }, 300)
        }, e.prototype._patchConstructor = function() {
            var t = this;
            return function(e) {
                return function() {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    var o = this,
                        i = i5(n[0] instanceof Request ? n[0].url : String(n[0])).href,
                        a = n[0] instanceof Request ? n[0] : n[1] || {},
                        s = t._createSpan(i, a);
                    if (!s) return e.apply(this, n);
                    var u = t._prepareSpanData(i);

                    function c(e, n) {
                        t._applyAttributesAfterFetch(e, a, n), t._endSpan(e, u, {
                            status: n.status || 0,
                            statusText: n.message,
                            url: i
                        })
                    }

                    function l(e, n) {
                        t._applyAttributesAfterFetch(e, a, n), n.status >= 200 && n.status < 400 ? t._endSpan(e, u, n) : t._endSpan(e, u, {
                            status: n.status,
                            statusText: n.statusText,
                            url: i
                        })
                    }

                    function p(t, e, n) {
                        try {
                            var r = n.clone(),
                                o = n.clone(),
                                i = r.body;
                            if (i) {
                                var a = i.getReader(),
                                    s = function() {
                                        a.read().then(function(e) {
                                            e.done ? l(t, o) : s()
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
                        return tm.with(er.setSpan(tm.active(), s), function() {
                            return t._addHeaders(a, i), t._tasksCount++, e.apply(o, a instanceof Request ? [a] : [i, a]).then(p.bind(o, s, n), f.bind(o, s, r))
                        })
                    })
                }
            }
        }, e.prototype._applyAttributesAfterFetch = function(t, e, n) {
            var r = this,
                o = this.getConfig().applyCustomAttributesOnSpan;
            o && function(t, e, n) {
                var r, o;
                try {
                    o = t()
                } catch (t) {
                    r = t
                } finally {
                    if (e(r, o), r && !n) throw r
                }
            }(function() {
                return o(t, e, n)
            }, function(t) {
                t && r._diag.error("applyCustomAttributesOnSpan", t)
            }, !0)
        }, e.prototype._prepareSpanData = function(t) {
            var e = aN(),
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
            var t;
            if (aq) {
                this._diag.warn("this instrumentation is intended for web usage only, it does not instrument Node.js's fetch()");
                return
            }
            "function" == typeof(t = fetch) && "function" == typeof t.__original && "function" == typeof t.__unwrap && !0 === t.__wrapped && (this._unwrap(aA, "fetch"), this._diag.debug("removing previous patch for constructor")), this._wrap(aA, "fetch", this._patchConstructor())
        }, e.prototype.disable = function() {
            aq || (this._unwrap(aA, "fetch"), this._usedResources = new WeakSet)
        }, e
    }(aP),
    aK = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof L ? L : {},
    aZ = Symbol.for("io.opentelemetry.js.api.logs"),
    aY = function() {
        function t() {}
        return t.prototype.emit = function(t) {}, t
    }(),
    aQ = new aY,
    aJ = new(function() {
        function t() {}
        return t.prototype.getLogger = function(t, e, n) {
            return new aY
        }, t
    }()),
    a0 = function() {
        function t(t, e, n, r) {
            this._provider = t, this.name = e, this.version = n, this.options = r
        }
        return t.prototype.emit = function(t) {
            this._getLogger().emit(t)
        }, t.prototype._getLogger = function() {
            if (this._delegate) return this._delegate;
            var t = this._provider.getDelegateLogger(this.name, this.version, this.options);
            return t ? (this._delegate = t, this._delegate) : aQ
        }, t
    }(),
    a1 = function() {
        function t() {}
        return t.prototype.getLogger = function(t, e, n) {
            var r;
            return null !== (r = this.getDelegateLogger(t, e, n)) && void 0 !== r ? r : new a0(this, t, e, n)
        }, t.prototype.getDelegate = function() {
            var t;
            return null !== (t = this._delegate) && void 0 !== t ? t : aJ
        }, t.prototype.setDelegate = function(t) {
            this._delegate = t
        }, t.prototype.getDelegateLogger = function(t, e, n) {
            var r;
            return null === (r = this._delegate) || void 0 === r ? void 0 : r.getLogger(t, e, n)
        }, t
    }(),
    a2 = (function() {
        function t() {
            this._proxyLoggerProvider = new a1
        }
        return t.getInstance = function() {
            return this._instance || (this._instance = new t), this._instance
        }, t.prototype.setGlobalLoggerProvider = function(t) {
            return aK[aZ] ? this.getLoggerProvider() : (aK[aZ] = function(e) {
                return 1 === e ? t : aJ
            }, this._proxyLoggerProvider.setDelegate(t), t)
        }, t.prototype.getLoggerProvider = function() {
            var t, e;
            return null !== (e = null === (t = aK[aZ]) || void 0 === t ? void 0 : t.call(aK, 1)) && void 0 !== e ? e : this._proxyLoggerProvider
        }, t.prototype.getLogger = function(t, e, n) {
            return this.getLoggerProvider().getLogger(t, e, n)
        }, t.prototype.disable = function() {
            delete aK[aZ], this._proxyLoggerProvider = new a1
        }, t
    })().getInstance(),
    a3 = function() {
        return (a3 = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    },
    a4 = function() {
        function t(t, e, n) {
            this.instrumentationName = t, this.instrumentationVersion = e, this._config = {}, this._wrap = rE.wrap, this._unwrap = rE.unwrap, this._massWrap = rE.massWrap, this._massUnwrap = rE.massUnwrap, this.setConfig(n), this._diag = ty.createComponentLogger({
                namespace: t
            }), this._tracer = er.getTracer(t, e), this._meter = tH.getMeter(t, e), this._logger = a2.getLogger(t, e), this._updateMetricInstruments()
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
            this._config = a3({
                enabled: !0
            }, t)
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
    a6 = (u = function(t, e) {
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
    a5 = function(t) {
        function e(e, n, r) {
            var o = t.call(this, e, n, r) || this;
            return o._config.enabled && o.enable(), o
        }
        return a6(e, t), e
    }(a4);

function a9(t) {
    return "function" == typeof t && "function" == typeof t.__original && "function" == typeof t.__unwrap && !0 === t.__wrapped
}(c = w || (w = {})).EVENT_TYPE = "event_type", c.TARGET_ELEMENT = "target_element", c.TARGET_XPATH = "target_xpath", c.HTTP_URL = "http.url";
var a8 = "0.41.0",
    a7 = (l = function(t, e) {
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
    st = ["click"];

function se() {
    return !1
}
var sn = function(t) {
        function e(e) {
            void 0 === e && (e = {});
            var n, r = t.call(this, "@opentelemetry/instrumentation-user-interaction", a8, e) || this;
            return r.version = a8, r.moduleName = "user-interaction", r._spansData = new WeakMap, r._wrappedListeners = new WeakMap, r._eventsSpanMap = new WeakMap, r._eventNames = new Set(null !== (n = null == e ? void 0 : e.eventNames) && void 0 !== n ? n : st), r._shouldPreventSpanCreation = "function" == typeof(null == e ? void 0 : e.shouldPreventSpanCreation) ? e.shouldPreventSpanCreation : se, r
        }
        return a7(e, t), e.prototype.init = function() {}, e.prototype._checkForTimeout = function(t, e) {
            var n = this._spansData.get(e);
            n && ("setTimeout" === t.source ? n.hrTimeLastTimeout = nv() : "Promise.then" !== t.source && "setTimeout" !== t.source && (n.hrTimeLastTimeout = void 0))
        }, e.prototype._allowEventName = function(t) {
            return this._eventNames.has(t)
        }, e.prototype._createSpan = function(t, e, n) {
            if (!(!(t instanceof HTMLElement) || !t.getAttribute || t.hasAttribute("disabled")) && this._allowEventName(e)) {
                var r, o = function t(e, n) {
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
                            o = "";
                        if (n === Node.ELEMENT_NODE) {
                            var i = t.getAttribute("id");
                            if (e && i) return '//*[@id="' + i + '"]';
                            o = t.localName
                        } else if (n === Node.TEXT_NODE || n === Node.CDATA_SECTION_NODE) o = "text()";
                        else {
                            if (n !== Node.COMMENT_NODE) return "";
                            o = "comment()"
                        }
                        return o && r > 1 ? "/" + o + "[" + r + "]" : "/" + o
                    }(e, n);
                    if (n && r.indexOf("@id") > 0) return r;
                    var o = "";
                    return e.parentNode && (o += t(e.parentNode, !1)), o += r
                }(t, !0);
                try {
                    var i = this.tracer.startSpan(e, {
                        attributes: ((r = {})[w.EVENT_TYPE] = e, r[w.TARGET_ELEMENT] = t.tagName, r[w.TARGET_XPATH] = o, r[w.HTTP_URL] = window.location.href, r)
                    }, n ? er.setSpan(tm.active(), n) : void 0);
                    if (!0 === this._shouldPreventSpanCreation(e, t, i)) return;
                    return this._spansData.set(i, {
                        taskCount: 0
                    }), i
                } catch (t) {
                    this._diag.error("failed to start create new user interaction span", t)
                }
            }
        }, e.prototype._decrementTask = function(t) {
            var e = this._spansData.get(t);
            e && (e.taskCount--, 0 === e.taskCount && this._tryToEndSpan(t, e.hrTimeLastTimeout))
        }, e.prototype._getCurrentSpan = function(t) {
            var e = t.get("OT_ZONE_CONTEXT");
            return e ? er.getSpan(e) : e
        }, e.prototype._incrementTask = function(t) {
            var e = this._spansData.get(t);
            e && e.taskCount++
        }, e.prototype.addPatchedListener = function(t, e, n, r) {
            var o = this._wrappedListeners.get(n);
            o || (o = new Map, this._wrappedListeners.set(n, o));
            var i = o.get(e);
            return i || (i = new Map, o.set(e, i)), !i.has(t) && (i.set(t, r), !0)
        }, e.prototype.removePatchedListener = function(t, e, n) {
            var r = this._wrappedListeners.get(n);
            if (r) {
                var o = r.get(e);
                if (o) {
                    var i = o.get(t);
                    return i && (o.delete(t), 0 === o.size && (r.delete(e), 0 === r.size && this._wrappedListeners.delete(n))), i
                }
            }
        }, e.prototype._invokeListener = function(t, e, n) {
            return "function" == typeof t ? t.apply(e, n) : t.handleEvent(n[0])
        }, e.prototype._patchAddEventListener = function() {
            var t = this;
            return function(e) {
                return function(n, r, o) {
                    if (!r) return e.call(this, n, r, o);
                    var i = o && "object" == typeof o && o.once,
                        a = function() {
                            for (var e, o = this, a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
                            var u = a[0],
                                c = null == u ? void 0 : u.target;
                            u && (e = t._eventsSpanMap.get(u)), i && t.removePatchedListener(this, n, r);
                            var l = t._createSpan(c, n, e);
                            return l ? (u && t._eventsSpanMap.set(u, l), tm.with(er.setSpan(tm.active(), l), function() {
                                var e = t._invokeListener(r, o, a);
                                return l.end(), e
                            })) : t._invokeListener(r, this, a)
                        };
                    if (t.addPatchedListener(this, n, r, a)) return e.call(this, n, a, o)
                }
            }
        }, e.prototype._patchRemoveEventListener = function() {
            var t = this;
            return function(e) {
                return function(n, r, o) {
                    var i = t.removePatchedListener(this, n, r);
                    return i ? e.call(this, n, i, o) : e.call(this, n, r, o)
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
                    var o = "" + location.pathname + location.hash + location.search,
                        i = e.apply(this, n),
                        a = "" + location.pathname + location.hash + location.search;
                    return o !== a && t._updateInteractionName(a), i
                }
            }
        }, e.prototype._unpatchHistoryApi = function() {
            a9(history.replaceState) && this._unwrap(history, "replaceState"), a9(history.pushState) && this._unwrap(history, "pushState"), a9(history.back) && this._unwrap(history, "back"), a9(history.forward) && this._unwrap(history, "forward"), a9(history.go) && this._unwrap(history, "go")
        }, e.prototype._updateInteractionName = function(t) {
            var e = er.getSpan(tm.active());
            e && "function" == typeof e.updateName && e.updateName("Navigation: " + t)
        }, e.prototype._patchZoneCancelTask = function() {
            var t = this;
            return function(e) {
                return function(n) {
                    var r = Zone.current,
                        o = t._getCurrentSpan(r);
                    return o && t._shouldCountTask(n, r) && t._decrementTask(o), e.call(this, n)
                }
            }
        }, e.prototype._patchZoneScheduleTask = function() {
            var t = this;
            return function(e) {
                return function(n) {
                    var r = Zone.current,
                        o = t._getCurrentSpan(r);
                    return o && t._shouldCountTask(n, r) && (t._incrementTask(o), t._checkForTimeout(n, o)), e.call(this, n)
                }
            }
        }, e.prototype._patchZoneRunTask = function() {
            var t = this;
            return function(e) {
                return function(n, r, o) {
                    var i, a = Array.isArray(o) && o[0] instanceof Event ? o[0] : void 0,
                        s = null == a ? void 0 : a.target;
                    if (s) {
                        if (i = t._createSpan(s, n.eventName)) return t._incrementTask(i), this.run(function() {
                            try {
                                return tm.with(er.setSpan(tm.active(), i), function() {
                                    var t = Zone.current;
                                    return n._zone = t, e.call(t, n, r, o)
                                })
                            } finally {
                                t._decrementTask(i)
                            }
                        })
                    } else i = t._getCurrentSpan(this);
                    try {
                        return e.call(this, n, r, o)
                    } finally {
                        i && t._shouldCountTask(n, this) && t._decrementTask(i)
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
            this._diag.debug("applying patch to", this.moduleName, this.version, "zone:", !!e), e ? (a9(e.prototype.runTask) && (this._unwrap(e.prototype, "runTask"), this._diag.debug("removing previous patch from method runTask")), a9(e.prototype.scheduleTask) && (this._unwrap(e.prototype, "scheduleTask"), this._diag.debug("removing previous patch from method scheduleTask")), a9(e.prototype.cancelTask) && (this._unwrap(e.prototype, "cancelTask"), this._diag.debug("removing previous patch from method cancelTask")), this._zonePatched = !0, this._wrap(e.prototype, "runTask", this._patchZoneRunTask()), this._wrap(e.prototype, "scheduleTask", this._patchZoneScheduleTask()), this._wrap(e.prototype, "cancelTask", this._patchZoneCancelTask())) : (this._zonePatched = !1, this._getPatchableEventTargets().forEach(function(e) {
                a9(e.addEventListener) && (t._unwrap(e, "addEventListener"), t._diag.debug("removing previous patch from method addEventListener")), a9(e.removeEventListener) && (t._unwrap(e, "removeEventListener"), t._diag.debug("removing previous patch from method removeEventListener")), t._wrap(e, "addEventListener", t._patchAddEventListener()), t._wrap(e, "removeEventListener", t._patchRemoveEventListener())
            })), this._patchHistoryApi()
        }, e.prototype.disable = function() {
            var t = this,
                e = this.getZoneWithPrototype();
            this._diag.debug("removing patch from", this.moduleName, this.version, "zone:", !!e), e && this._zonePatched ? (a9(e.prototype.runTask) && this._unwrap(e.prototype, "runTask"), a9(e.prototype.scheduleTask) && this._unwrap(e.prototype, "scheduleTask"), a9(e.prototype.cancelTask) && this._unwrap(e.prototype, "cancelTask")) : this._getPatchableEventTargets().forEach(function(e) {
                a9(e.addEventListener) && t._unwrap(e, "addEventListener"), a9(e.removeEventListener) && t._unwrap(e, "removeEventListener")
            }), this._unpatchHistoryApi()
        }, e.prototype.getZoneWithPrototype = function() {
            return window.Zone
        }, e
    }(a5),
    sr = "object" == typeof globalThis ? globalThis : "object" == typeof self ? self : "object" == typeof window ? window : "object" == typeof L ? L : {},
    so = Symbol.for("io.opentelemetry.js.api.logs"),
    si = function() {
        function t() {}
        return t.prototype.emit = function(t) {}, t
    }(),
    sa = new si,
    ss = new(function() {
        function t() {}
        return t.prototype.getLogger = function(t, e, n) {
            return new si
        }, t
    }()),
    su = function() {
        function t(t, e, n, r) {
            this._provider = t, this.name = e, this.version = n, this.options = r
        }
        return t.prototype.emit = function(t) {
            this._getLogger().emit(t)
        }, t.prototype._getLogger = function() {
            if (this._delegate) return this._delegate;
            var t = this._provider.getDelegateLogger(this.name, this.version, this.options);
            return t ? (this._delegate = t, this._delegate) : sa
        }, t
    }(),
    sc = function() {
        function t() {}
        return t.prototype.getLogger = function(t, e, n) {
            var r;
            return null !== (r = this.getDelegateLogger(t, e, n)) && void 0 !== r ? r : new su(this, t, e, n)
        }, t.prototype.getDelegate = function() {
            var t;
            return null !== (t = this._delegate) && void 0 !== t ? t : ss
        }, t.prototype.setDelegate = function(t) {
            this._delegate = t
        }, t.prototype.getDelegateLogger = function(t, e, n) {
            var r;
            return null === (r = this._delegate) || void 0 === r ? void 0 : r.getLogger(t, e, n)
        }, t
    }(),
    sl = (function() {
        function t() {
            this._proxyLoggerProvider = new sc
        }
        return t.getInstance = function() {
            return this._instance || (this._instance = new t), this._instance
        }, t.prototype.setGlobalLoggerProvider = function(t) {
            return sr[so] ? this.getLoggerProvider() : (sr[so] = function(e) {
                return 1 === e ? t : ss
            }, this._proxyLoggerProvider.setDelegate(t), t)
        }, t.prototype.getLoggerProvider = function() {
            var t, e;
            return null !== (e = null === (t = sr[so]) || void 0 === t ? void 0 : t.call(sr, 1)) && void 0 !== e ? e : this._proxyLoggerProvider
        }, t.prototype.getLogger = function(t, e, n) {
            return this.getLoggerProvider().getLogger(t, e, n)
        }, t.prototype.disable = function() {
            delete sr[so], this._proxyLoggerProvider = new sc
        }, t
    })().getInstance(),
    sp = function() {
        return (sp = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    },
    sf = function() {
        function t(t, e, n) {
            this.instrumentationName = t, this.instrumentationVersion = e, this._config = {}, this._wrap = rE.wrap, this._unwrap = rE.unwrap, this._massWrap = rE.massWrap, this._massUnwrap = rE.massUnwrap, this.setConfig(n), this._diag = ty.createComponentLogger({
                namespace: t
            }), this._tracer = er.getTracer(t, e), this._meter = tH.getMeter(t, e), this._logger = sl.getLogger(t, e), this._updateMetricInstruments()
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
            this._config = sp({
                enabled: !0
            }, t)
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
    sd = (p = function(t, e) {
        return (p = Object.setPrototypeOf || ({
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
        p(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    sh = function(t) {
        function e(e, n, r) {
            var o = t.call(this, e, n, r) || this;
            return o._config.enabled && o.enable(), o
        }
        return sd(e, t), e
    }(sf);

function sg(t) {
    return "function" == typeof t && "function" == typeof t.__original && "function" == typeof t.__unwrap && !0 === t.__wrapped
}
var s_ = performance;

function sv(t) {
    return [Math.trunc(t / 1e3), Math.round(t % 1e3 * 1e6)]
}

function sm(t) {
    var e, n, r, o;
    return n = sv(("number" != typeof(e = s_.timeOrigin) && (e = s_.timing && s_.timing.fetchStart), e)), r = sv("number" == typeof t ? t : s_.now()), (o = [n[0] + r[0], n[1] + r[1]])[1] >= 1e9 && (o[1] -= 1e9, o[0] += 1), o
}
var sy = function(t) {
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
(f = S || (S = {})).METHOD_OPEN = "open", f.METHOD_SEND = "send", f.EVENT_ABORT = "abort", f.EVENT_ERROR = "error", f.EVENT_LOAD = "loaded", f.EVENT_TIMEOUT = "timeout";
var sb = "0.54.0";
(O || (O = {})).HTTP_STATUS_TEXT = "http.status_text";
var sE = (d = function(t, e) {
        return (d = Object.setPrototypeOf || ({
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
        d(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }),
    sT = {
        "@opentelemetry/instrumentation-document-load": ag,
        "@opentelemetry/instrumentation-fetch": aW,
        "@opentelemetry/instrumentation-user-interaction": sn,
        "@opentelemetry/instrumentation-xml-http-request": function(t) {
            function e(e) {
                void 0 === e && (e = {});
                var n = t.call(this, "@opentelemetry/instrumentation-xml-http-request", sb, e) || this;
                return n.component = "xml-http-request", n.version = sb, n.moduleName = n.component, n._tasksCount = 0, n._xhrMem = new WeakMap, n._usedResources = new WeakSet, n
            }
            return sE(e, t), e.prototype.init = function() {}, e.prototype._addHeaders = function(t, e) {
                if (!i9(i5(e).href, this.getConfig().propagateTraceHeaderCorsUrls)) {
                    var n = {};
                    tQ.inject(tm.active(), n), Object.keys(n).length > 0 && this._diag.debug("headers inject skipped due to CORS policy");
                    return
                }
                var r = {};
                tQ.inject(tm.active(), r), Object.keys(r).forEach(function(e) {
                    t.setRequestHeader(e, String(r[e]))
                })
            }, e.prototype._addChildSpan = function(t, e) {
                var n = this;
                tm.with(er.setSpan(tm.active(), t), function() {
                    var t = n.tracer.startSpan("CORS Preflight", {
                        startTime: e[h.FETCH_START]
                    });
                    n.getConfig().ignoreNetworkEvents || i3(t, e), t.end(e[h.RESPONSE_END])
                })
            }, e.prototype._addFinalSpanAttributes = function(t, e, n) {
                if ("string" == typeof n) {
                    var r = i5(n);
                    void 0 !== e.status && t.setAttribute(nA, e.status), void 0 !== e.statusText && t.setAttribute(O.HTTP_STATUS_TEXT, e.statusText), t.setAttribute(nL, r.host), t.setAttribute(nP, r.protocol.replace(":", "")), t.setAttribute(nR, navigator.userAgent)
                }
            }, e.prototype._applyAttributesAfterXHR = function(t, e) {
                var n = this,
                    r = this.getConfig().applyCustomAttributesOnSpan;
                "function" == typeof r && function(t, e, n) {
                    var r, o;
                    try {
                        o = t()
                    } catch (t) {
                        r = t
                    } finally {
                        if (e(r, o), r && !n) throw r
                    }
                }(function() {
                    return r(t, e)
                }, function(t) {
                    t && n._diag.error("applyCustomAttributesOnSpan", t)
                }, !0)
            }, e.prototype._addResourceObserver = function(t, e) {
                var n = this._xhrMem.get(t);
                n && "function" == typeof PerformanceObserver && "function" == typeof PerformanceResourceTiming && (n.createdResources = {
                    observer: new PerformanceObserver(function(t) {
                        var r = t.getEntries(),
                            o = i5(e);
                        r.forEach(function(t) {
                            "xmlhttprequest" === t.initiatorType && t.name === o.href && n.createdResources && n.createdResources.entries.push(t)
                        })
                    }),
                    entries: []
                }, n.createdResources.observer.observe({
                    entryTypes: ["resource"]
                }))
            }, e.prototype._clearResources = function() {
                0 === this._tasksCount && this.getConfig().clearTimingResources && (s_.clearResourceTimings(), this._xhrMem = new WeakMap, this._usedResources = new WeakSet)
            }, e.prototype._findResourceAndAddNetworkEvents = function(t, e, n, r, o) {
                if (n && r && o && t.createdResources) {
                    var i = t.createdResources.entries;
                    i && i.length || (i = s_.getEntriesByType("resource"));
                    var a = i6(i5(n).href, r, o, i, this._usedResources);
                    if (a.mainRequest) {
                        var s = a.mainRequest;
                        this._markResourceAsUsed(s);
                        var u = a.corsPreFlightRequest;
                        u && (this._addChildSpan(e, u), this._markResourceAsUsed(u)), this.getConfig().ignoreNetworkEvents || i3(e, s)
                    }
                }
            }, e.prototype._cleanPreviousSpanInformation = function(t) {
                var e = this._xhrMem.get(t);
                if (e) {
                    var n = e.callbackToRemoveEvents;
                    n && n(), this._xhrMem.delete(t)
                }
            }, e.prototype._createSpan = function(t, e, n) {
                if (function(t, e) {
                        var n, r;
                        if (!e) return !1;
                        try {
                            for (var o = sy(e), i = o.next(); !i.done; i = o.next()) {
                                var a = i.value;
                                if ("string" == typeof a ? t === a : !!t.match(a)) return !0
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (r = o.return) && r.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return !1
                    }(e, this.getConfig().ignoreUrls)) {
                    this._diag.debug("ignoring span as url matches ignored url");
                    return
                }
                var r, o = n.toUpperCase(),
                    i = this.tracer.startSpan(o, {
                        kind: oL.CLIENT,
                        attributes: ((r = {})[nS] = n, r[nO] = i5(e).toString(), r)
                    });
                return i.addEvent(S.METHOD_OPEN), this._cleanPreviousSpanInformation(t), this._xhrMem.set(t, {
                    span: i,
                    spanUrl: e
                }), i
            }, e.prototype._markResourceAsUsed = function(t) {
                this._usedResources.add(t)
            }, e.prototype._patchOpen = function() {
                var t = this;
                return function(e) {
                    return function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        var o = n[0],
                            i = n[1];
                        return t._createSpan(this, i, o), e.apply(this, n)
                    }
                }
            }, e.prototype._patchSend = function() {
                var t = this;

                function e(e, n) {
                    var r = t._xhrMem.get(n);
                    if (r) {
                        r.status = n.status, r.statusText = n.statusText, t._xhrMem.delete(n), r.span && t._applyAttributesAfterXHR(r.span, n);
                        var o = sm(),
                            i = Date.now();
                        setTimeout(function() {
                            var n, a, s, u;
                            "function" == typeof(n = r.callbackToRemoveEvents) && n(), a = r.span, s = r.spanUrl, u = r.sendStartTime, a && (t._findResourceAndAddNetworkEvents(r, a, s, u, o), a.addEvent(e, i), t._addFinalSpanAttributes(a, r, s), a.end(i), t._tasksCount--), t._clearResources()
                        }, 300)
                    }
                }

                function n() {
                    e(S.EVENT_ERROR, this)
                }

                function r() {
                    e(S.EVENT_ABORT, this)
                }

                function o() {
                    e(S.EVENT_TIMEOUT, this)
                }

                function i() {
                    this.status < 299 ? e(S.EVENT_LOAD, this) : e(S.EVENT_ERROR, this)
                }
                return function(e) {
                    return function() {
                        for (var a = this, s = [], u = 0; u < arguments.length; u++) s[u] = arguments[u];
                        var c = t._xhrMem.get(this);
                        if (!c) return e.apply(this, s);
                        var l = c.span,
                            p = c.spanUrl;
                        return l && p && tm.with(er.setSpan(tm.active(), l), function() {
                            t._tasksCount++, c.sendStartTime = sm(), l.addEvent(S.METHOD_SEND), a.addEventListener("abort", r), a.addEventListener("error", n), a.addEventListener("load", i), a.addEventListener("timeout", o), c.callbackToRemoveEvents = function() {
                                var e;
                                a.removeEventListener("abort", r), a.removeEventListener("error", n), a.removeEventListener("load", i), a.removeEventListener("timeout", o), (e = t._xhrMem.get(a)) && (e.callbackToRemoveEvents = void 0), c.createdResources && c.createdResources.observer.disconnect()
                            }, t._addHeaders(a, p), t._addResourceObserver(a, p)
                        }), e.apply(this, s)
                    }
                }
            }, e.prototype.enable = function() {
                this._diag.debug("applying patch to", this.moduleName, this.version), sg(XMLHttpRequest.prototype.open) && (this._unwrap(XMLHttpRequest.prototype, "open"), this._diag.debug("removing previous patch from method open")), sg(XMLHttpRequest.prototype.send) && (this._unwrap(XMLHttpRequest.prototype, "send"), this._diag.debug("removing previous patch from method send")), this._wrap(XMLHttpRequest.prototype, "open", this._patchOpen()), this._wrap(XMLHttpRequest.prototype, "send", this._patchSend())
            }, e.prototype.disable = function() {
                this._diag.debug("removing patch from", this.moduleName, this.version), this._unwrap(XMLHttpRequest.prototype, "open"), this._unwrap(XMLHttpRequest.prototype, "send"), this._tasksCount = 0, this._xhrMem = new WeakMap, this._usedResources = new WeakSet
            }, e
        }(sh)
    };
const sw = {
    ignoreNetworkEvents: false
};
new class extends rC {
    constructor(t) {
        var e, n;
        let r = [...(null == t ? void 0 : t.instrumentations) || []];
        (null === (e = null == t ? void 0 : t.webVitalsInstrumentationConfig) || void 0 === e ? void 0 : e.enabled) !== !1 && r.push(new iK(null == t ? void 0 : t.webVitalsInstrumentationConfig)), (null === (n = null == t ? void 0 : t.globalErrorsInstrumentationConfig) || void 0 === n ? void 0 : n.enabled) !== !1 && r.push(new iZ(null == t ? void 0 : t.globalErrorsInstrumentationConfig)), super(Object.assign(Object.assign({}, t), {
            instrumentations: r,
            resource: function(t) {
                let e = rU(t[0]);
                for (let n = 1; n < t.length; n++) {
                    if (!t[n]) continue;
                    let r = rU(t[n]);
                    e = e.merge(r)
                }
                return e
            }([function() {
                let {
                    browserName: t,
                    browserVersion: e,
                    deviceType: n
                } = rj(navigator.userAgent);
                return new ev({
                    "user_agent.original": navigator.userAgent,
                    "browser.mobile": navigator.userAgent.includes("Mobi"),
                    "browser.touch_screen_enabled": navigator.maxTouchPoints > 0,
                    "browser.language": navigator.language,
                    "browser.name": t,
                    "browser.version": e,
                    "device.type": n,
                    "network.effectiveType": rM(navigator.connection),
                    "screen.width": window.screen.width,
                    "screen.height": window.screen.height,
                    "screen.size": rD(window.screen.width)
                })
            }(), function(t) {
                if (!1 === t || !(null == window ? void 0 : window.location)) return new ev({});
                let e = t ? Object.assign(Object.assign({}, rx), t) : rx,
                    {
                        href: n,
                        pathname: r,
                        search: o,
                        hash: i,
                        hostname: a
                    } = window.location;
                return new ev({
                    "entry_page.url": rI(e.url, n),
                    "entry_page.path": rI(e.path, r),
                    "entry_page.search": rI(e.search, o),
                    "entry_page.hash": rI(e.hash, i),
                    "entry_page.hostname": rI(e.hostname, a),
                    "entry_page.referrer": rI(e.referrer, document.referrer)
                })
            }(null == t ? void 0 : t.entryPageAttributes), null == t ? void 0 : t.resource, null == t ? void 0 : t.resourceAttributes, new ev({
                "honeycomb.distro.version": rN,
                "honeycomb.distro.runtime_version": "browser"
            })]),
            sampler: oe(t),
            spanProcessor: r7(t)
        })), r4(t), (null == t ? void 0 : t.debug) && function(t) {
            if (!(null == t ? void 0 : t.debug)) return;
            ty.setLogger(new tt, ow.DEBUG), ty.debug(rV("\uD83D\uDC1D Honeycomb Web SDK Debug Mode Enabled \uD83D\uDC1D"));
            let e = r$(t),
                n = Object.assign(Object.assign(Object.assign({}, rH), t), {
                    tracesEndpoint: e
                });
            (function(t) {
                let e = rq(t) || "";
                if (!e) {
                    ty.debug(rK);
                    return
                }
                ty.debug(rV(`API Key configured for traces: '${e}'`))
            })(n),
            function(t) {
                let e = t.serviceName || rH.serviceName;
                if (e === rH.serviceName) {
                    ty.debug(rZ);
                    return
                }
                ty.debug(`@honeycombio/opentelemetry-web: Service Name configured for traces: '${e}'`)
            }(n),
            function(t) {
                let e = r$(t);
                if (!e) {
                    ty.debug(rV("No endpoint configured for traces"));
                    return
                }
                ty.debug(rV(`Endpoint configured for traces: '${e}'`))
            }(n),
            function(t) {
                let e = rW(t);
                if (!e) {
                    ty.debug("No sampler configured for traces");
                    return
                }
                ty.debug(rV(`Sample Rate configured for traces: '${e}'`))
            }(n)
        }(t)
    }
}({
    debug: true,
    endpoint: "https://api.honeycomb.io/v1/traces",
    apiKey: "<your api key>",
    skipOptionsValidation: false,
    serviceName: "hfo",
    instrumentations: [function(t) {
        void 0 === t && (t = {});
        for (var e, n = 0, r = Object.keys(t); n < r.length; n++) {
            var o = r[n];
            if (!Object.prototype.hasOwnProperty.call(sT, o)) {
                ty.error('Provided instrumentation name "' + o + '" not found');
                continue
            }
        }
        for (var i = [], a = 0, s = Object.keys(sT); a < s.length; a++) {
            var u = s[a],
                c = sT[u],
                l = null !== (e = t[u]) && void 0 !== e ? e : {};
            if (!1 === l.enabled) {
                ty.debug("Disabling instrumentation for " + u);
                continue
            }
            try {
                ty.debug("Loading instrumentation for " + u), i.push(new c(l))
            } catch (t) {
                ty.error(t)
            }
        }
        return i
    }({
        "@opentelemetry/instrumentation-xml-http-request": sw,
        "@opentelemetry/instrumentation-fetch": sw,
        "@opentelemetry/instrumentation-document-load": sw,
        "@opentelemetry/instrumentation-user-interaction": sw
    })]
}).start();
//# sourceMappingURL=index.5e55b4a4.js.map