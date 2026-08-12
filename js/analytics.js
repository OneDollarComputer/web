/**
 * One Dollar Computer — site analytics loader (GA4)
 * Config: /seo/analytics.json
 * Docs: /docs/seo/ANALYTICS.md
 */
(function () {
  'use strict';

  var CONFIG_URL = '/seo/analytics.json';

  function injectGa4(measurementId) {
    if (!measurementId || !/^G-[A-Z0-9]+$/i.test(measurementId)) return;
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId, {
      anonymize_ip: true,
      send_page_view: true
    });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(s);
  }

  function injectSearchConsoleMeta(content) {
    if (!content) return;
    if (document.querySelector('meta[name="google-site-verification"]')) return;
    var m = document.createElement('meta');
    m.name = 'google-site-verification';
    m.content = content;
    document.head.appendChild(m);
  }

  fetch(CONFIG_URL, { cache: 'no-store' })
    .then(function (r) {
      return r.ok ? r.json() : null;
    })
    .then(function (cfg) {
      if (!cfg || cfg.enabled === false) return;
      if (cfg.measurementId) injectGa4(String(cfg.measurementId).trim());
      var sc = cfg.searchConsole || {};
      if (sc.verificationMetaContent) injectSearchConsoleMeta(String(sc.verificationMetaContent).trim());
    })
    .catch(function () {
      /* analytics optional */
    });
})();
