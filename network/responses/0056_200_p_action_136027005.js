================================================================================
RESPONSE #56
================================================================================
URL     : https://bat.bing.com/p/action/136027005.js
Status  : 200 
MIME    : application/javascript
IP      : 150.171.27.10
Cache   : False
Size    : 4,253 bytes
SHA-256 : 50535dac6098d9214b5afa6e642bb6fdfb5de77e7e18bddce80d210cc2801d7e
Time    : 2026-03-13T13:10:02.620049

HEADERS:
  strict-transport-security: max-age=31536000; includeSubDomains; preload
  cache-control: private,max-age=60
  content-encoding: br
  accept-ch: Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version
  x-msedge-ref: Ref A: EB871156D7FE453B916F693C16A84AF8 Ref B: TEB31EDGE0206 Ref C: 2026-03-13T13:10:02Z
  x-cache: CONFIG_NOCACHE
  date: Fri, 13 Mar 2026 13:10:02 GMT
  content-type: application/javascript; charset=utf-8
  vary: Accept-Encoding

SECURITY ISSUES:
  [HIGH] MISSING: content-security-policy — CSP مفقود
  [MEDIUM] MISSING: x-frame-options — Clickjacking ممكن
  [MEDIUM] MISSING: x-content-type-options — MIME sniffing ممكن

BODY (4,253 bytes):
(function(w,d,c,k,a,b,t,e,h,s) {
    var cs = d.currentScript;
    if (cs) {
        var uo = cs.getAttribute('data-ueto');
        if (uo && w[uo] && typeof w[uo].setUserSignals === 'function') {
            w[uo].setUserSignals({'ea': c, 'kc': k, 'at': a, 'bi': b, 'pt': t, 'ec': e, 'ah': h, 'sb': s});
        }
    }
})(window, document, false, true, false, false, false, false, false, false);
(function(w,d,s,i) {
var c=d.currentScript;
if (c) {
    var uo = c.getAttribute('data-ueto');
    if (uo && w[uo] && w[uo].uetConfig && w[uo].uetConfig.deBlock === true)
        return;
    w.clarity = w.clarity || function() { (w.clarity.q = w.clarity.q || []).push(arguments)};
    var co = function(u) { return u && typeof u === 'object' && !(u instanceof Array) && u.beaconParams && u.beaconParams.mid && w.clarity; };
    var r = 40;
    var cl = function() {
        if (r-- < 1) return;
        var uo = c.getAttribute('data-ueto');
        if (!uo) return;
        var u = w[uo];
        w.clarityuetq = w.mtagq || u;
        if (!co(u)) { setTimeout(function () { cl(); }, 250); return; }
        var m = u.beaconParams.mid;
        w.clarity('set', '_uetmid', m);
        w.clarity('metadata', (function () { w.clarity('set', '_uetmid', m); }), false, true);
        d.addEventListener('UetEvent', function(e) {
            var nm = u.beaconParams.mid;
            if (m !== nm) { m = nm; w.clarity('set', '_uetmid', m); w.clarity('metadata', (function () { w.clarity('set', '_uetmid', m); }), false, true); }
        });
        d.addEventListener('UetConsent', function(e) {
            w.clarity('consentv2', { source: 102, ad_Storage: e.detail.adStorageConsent ? 'granted' : 'denied' });
        });
    };
    cl();
}
var f,j; f=d.getElementsByTagName(s)[0]; j=d.createElement(s); j.async=true;
j.src='https://www.clarity.ms/tag/uet/'+i+'';
f.parentNode.insertBefore(j,f);

function launchEventSetup() {
        if (!w.opener) {return;}
        var sessionIdKey = 'ms-event-setup-session-id';
        var originKey = 'ms-event-setup-event-origin';
        if (sessionStorage) {
            var sessionId = sessionStorage.getItem(sessionIdKey);
            var eventOrigin = sessionStorage.getItem(originKey);
            if (sessionId && eventOrigin) {
                w.opener.postMessage({type: 'REINIT_CLARITY_EVENT_SETUP'}, eventOrigin);
            }
        }
        w.addEventListener('message', function eventListener(e) {
            var oRegex = /^https:\/\/.*\.microsoft\.com(:[0-9]+)?$/i;
            if (!oRegex.test(e.origin)) {return;};
            // ignore the event if it does not match the UET tag of the current page
            if (!e.data || !e.data.params || i !== e.data.params.TagId) {return;}
            if (!(e.data.type === 'INIT_CLARITY_EVENT_SETUP' || e.data.type === 'ACK_REINIT_CLARITY_EVENT_SETUP')) { return; };
            // clarity picker script element
            var cp = d.createElement(s); cp.src = 'https://clarity.microsoft.com/eventPicker.js'; cp.async=true;
            cp.onload = function() {
                // event setup script element
                var est = d.createElement(s); est.src = 'https://bat.bing.com/s/uet/eventSetup.js'; est.async=true;
                var b = d.getElementsByTagName('body')[0];
                var es = d.createElement('event-setup-tool'); b.prepend(es);
                // pass init data to event setup
                es.setAttribute("initData", JSON.stringify(e.data.params));
                es.setAttribute("eventOrigin", e.origin);
                if (sessionStorage) {
                    // save session id and event origin in session storage
                    sessionStorage.setItem(sessionIdKey, e.data.params.SessionId);
                    sessionStorage.setItem(originKey, e.origin);
                }
                if (e.data.type === 'INIT_CLARITY_EVENT_SETUP') {
                    w.opener.postMessage({type: 'ACK_INIT_CLARITY_EVENT_SETUP'}, e.origin);
                }
                f.parentNode.insertBefore(est,f);
            };
            f.parentNode.insertBefore(cp,f);
            w.removeEventListener('message', eventListener);
        });
    }
    launchEventSetup();
})(window, document, 'script', '136027005');
