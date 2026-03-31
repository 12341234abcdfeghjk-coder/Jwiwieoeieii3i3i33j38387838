================================================================================
RESPONSE #27
================================================================================
URL     : https://www.google.com/recaptcha/api.js
Status  : 200 
MIME    : text/javascript
IP      : 192.0.0.88
Cache   : False
Size    : 1,589 bytes
SHA-256 : c16872da19de98da2e029b0364465de8e73ea43db605ab716a4415aa721b8545
Time    : 2026-03-13T13:10:02.388044

HEADERS:
  cache-control: private, max-age=300
  content-encoding: gzip
  cross-origin-resource-policy: cross-origin
  report-to: {"group":"coop_38fac9d5b82543fc4729580d18ff2d3d","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/38fac9d5b82543fc4729580d18ff2d3d"}]}
  x-content-type-options: nosniff
  expires: Fri, 13 Mar 2026 13:10:01 GMT
  alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000
  cross-origin-opener-policy-report-only: same-origin; report-to="coop_38fac9d5b82543fc4729580d18ff2d3d"
  date: Fri, 13 Mar 2026 13:10:01 GMT
  x-xss-protection: 0
  content-type: text/javascript; charset=utf-8
  server: ESF
  x-frame-options: SAMEORIGIN

SECURITY ISSUES:
  [HIGH] MISSING: strict-transport-security — HSTS مفقود
  [HIGH] MISSING: content-security-policy — CSP مفقود
  [LOW] INFO_LEAK: server — 

BODY (1,589 bytes):
/* PLEASE DO NOT COPY AND PASTE THIS CODE. */(function(){var w=window,C='___grecaptcha_cfg',cfg=w[C]=w[C]||{},N='grecaptcha';var gr=w[N]=w[N]||{};gr.ready=gr.ready||function(f){(cfg['fns']=cfg['fns']||[]).push(f);};w['__recaptcha_api']='https://www.google.com/recaptcha/api2/';(cfg['render']=cfg['render']||[]).push('onload');(cfg['clr']=cfg['clr']||[]).push('true');(cfg['anchor-ms']=cfg['anchor-ms']||[]).push(20000);(cfg['execute-ms']=cfg['execute-ms']||[]).push(30000);w['__google_recaptcha_client']=true;var d=document,po=d.createElement('script');po.type='text/javascript';po.async=true; po.charset='utf-8';var v=w.navigator,m=d.createElement('meta');m.httpEquiv='origin-trial';m.content='A7vZI3v+Gz7JfuRolKNM4Aff6zaGuT7X0mf3wtoZTnKv6497cVMnhy03KDqX7kBz/q/iidW7srW31oQbBt4VhgoAAACUeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJEaXNhYmxlVGhpcmRQYXJ0eVN0b3JhZ2VQYXJ0aXRpb25pbmczIiwiZXhwaXJ5IjoxNzU3OTgwODAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==';if(v&&v.cookieDeprecationLabel){v.cookieDeprecationLabel.getValue().then(function(l){if(l!=='treatment_1.1'&&l!=='treatment_1.2'&&l!=='control_1.1'){d.head.prepend(m);}});}else{d.head.prepend(m);}po.src='https://www.gstatic.com/recaptcha/releases/QvLuXwupqtKCyjBw2xIzFLIf/recaptcha__en.js';po.crossOrigin='anonymous';po.integrity='sha384-obDEicORg1BccYuEfFig6FFh0s3Ho2B7lr6lAHLJGwZTVRSgTgfEKmrfdJ2g/NkT';var e=d.querySelector('script[nonce]'),n=e&&(e['nonce']||e.getAttribute('nonce'));if(n){po.setAttribute('nonce',n);}var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(po, s);})();