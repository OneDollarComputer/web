/**
 * One Dollar Computer — Share (QR + copy)
 * Triggers: any [data-odc-share] in the page nav / chrome
 * Short link: https://odc.rs + path · QR opens onedollarcomputer.com until odc.rs DNS is ready
 */
(function () {
  'use strict';

  var SHARE_ORIGIN = 'https://odc.rs';
  var LIVE_ORIGIN = 'https://onedollarcomputer.com';
  var STYLE_ID = 'odc-share-style';
  var ROOT_ID = 'odc-share-root';

  function cleanPath(pathname) {
    var path = String(pathname || '/').replace(/\/+$/, '') || '/';
    if (path === '/profile' || path === '/project') return '/';
    return path;
  }

  function publicPath() {
    var pub = document.getElementById('projectPublicLink');
    if (pub && !pub.hidden && pub.getAttribute('href')) {
      try {
        return cleanPath(new URL(pub.href, location.origin).pathname);
      } catch (e) {
        /* ignore */
      }
    }
    return cleanPath(location.pathname);
  }

  function shareUrl() {
    var path = publicPath();
    return SHARE_ORIGIN + (path === '/' ? '/' : path);
  }

  function qrUrl() {
    var path = publicPath();
    return LIVE_ORIGIN + (path === '/' ? '/' : path);
  }

  function css() {
    return [
      '#' + ROOT_ID + '{font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;',
      '  -webkit-font-smoothing:antialiased;}',

      'button[data-odc-share],a[data-odc-share]{cursor:pointer;}',
      'button[data-odc-share]{appearance:none;background:transparent;border:0;padding:0;font:inherit;color:inherit;}',

      '#odc-share-overlay{display:flex;position:fixed;inset:0;z-index:1300;padding:1.25rem;',
      '  align-items:center;justify-content:center;',
      '  background:rgba(2,6,12,0.55);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);',
      '  opacity:0;visibility:hidden;pointer-events:none;',
      '  transition:opacity .28s ease,visibility .28s;}',
      '#odc-share-overlay.open{opacity:1;visibility:visible;pointer-events:auto;}',

      '#odc-share-card{position:relative;width:min(21.5rem,100%);padding:1.6rem 1.45rem 1.35rem;',
      '  border-radius:1.35rem;color:#E8EEF8;text-align:center;',
      '  background:linear-gradient(165deg,#121a28 0%,#0a1018 55%,#070b12 100%);',
      '  border:1px solid rgba(72,225,167,0.18);',
      '  box-shadow:0 0 0 1px rgba(255,255,255,0.04) inset,0 28px 80px rgba(0,0,0,0.55),',
      '    0 0 60px rgba(72,225,167,0.08);',
      '  transform:translateY(14px) scale(.96);opacity:0;',
      '  transition:transform .34s cubic-bezier(.22,1,.36,1),opacity .28s ease;}',
      '#odc-share-overlay.open #odc-share-card{transform:none;opacity:1;}',
      '#odc-share-card::before{content:"";position:absolute;left:12%;right:12%;top:0;height:1px;',
      '  background:linear-gradient(90deg,transparent,#48E1A7,transparent);opacity:.55;}',

      '#odc-share-kicker{margin:0 0 0.2rem;font-size:0.68rem;font-weight:600;letter-spacing:0.14em;',
      '  text-transform:uppercase;color:#48E1A7;}',
      '#odc-share-title{margin:0 0 0.45rem;font-size:1.35rem;font-weight:700;letter-spacing:-0.02em;}',
      '#odc-share-lede{margin:0 0 1.15rem;color:#9AA8BC;font-size:0.9rem;line-height:1.45;}',

      '#odc-share-qr-wrap{margin:0 auto 1.15rem;padding:0.85rem;width:fit-content;',
      '  border-radius:1.1rem;background:rgba(255,255,255,0.03);',
      '  border:1px solid rgba(255,255,255,0.06);',
      '  box-shadow:0 8px 24px rgba(0,0,0,0.25);}',
      '#odc-share-qr{width:188px;height:188px;border-radius:0.85rem;overflow:hidden;',
      '  background:#fff;display:grid;place-items:center;}',
      '#odc-share-qr img{width:172px;height:172px;display:block;}',

      '#odc-share-link{display:inline-flex;align-items:center;justify-content:center;gap:0.35rem;',
      '  max-width:100%;margin:0 0 1.1rem;padding:0.55rem 0.85rem;border-radius:999px;',
      '  background:rgba(72,225,167,0.08);border:1px solid rgba(72,225,167,0.22);',
      '  color:#7EE8C0;text-decoration:none;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;',
      '  font-size:0.78rem;line-height:1.3;word-break:break-all;',
      '  transition:background .15s ease,border-color .15s ease;}',
      '#odc-share-link:hover{background:rgba(72,225,167,0.14);border-color:rgba(72,225,167,0.4);}',

      '#odc-share-actions{display:flex;flex-direction:row;gap:0.55rem;}',
      '#odc-share-copy,#odc-share-native{appearance:none;border:0;cursor:pointer;flex:1;',
      '  font:inherit;font-weight:600;border-radius:0.85rem;padding:0.78rem 1rem;',
      '  transition:transform .15s ease,background .15s ease,opacity .15s ease;}',
      '#odc-share-copy{background:linear-gradient(180deg,#5AE9B4,#48E1A7);color:#04140e;',
      '  box-shadow:0 8px 20px rgba(72,225,167,0.28);}',
      '#odc-share-copy:hover{filter:brightness(1.05);}',
      '#odc-share-copy.is-done{background:linear-gradient(180deg,#6ef0c0,#3dcf98);}',
      '#odc-share-native{background:rgba(255,255,255,0.06);color:#E8EEF8;',
      '  border:1px solid rgba(255,255,255,0.08);}',
      '#odc-share-native:hover{background:rgba(255,255,255,0.1);}',
      '#odc-share-native[hidden]{display:none!important;}',
      '#odc-share-x{position:absolute;top:0.7rem;right:0.7rem;width:2rem;height:2rem;border:0;',
      '  border-radius:999px;cursor:pointer;background:rgba(255,255,255,0.05);color:#A9B4C7;',
      '  font-size:1.15rem;line-height:1;display:grid;place-items:center;',
      '  transition:background .15s ease,color .15s ease;}',
      '#odc-share-x:hover{background:rgba(255,255,255,0.1);color:#fff;}',

      '@media (prefers-reduced-motion:reduce){',
      '  #odc-share-overlay,#odc-share-card{transition:none!important;}',
      '}'
    ].join('');
  }

  function ensureModal() {
    if (document.getElementById(ROOT_ID)) return;

    if (!document.getElementById(STYLE_ID)) {
      var style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = css();
      document.head.appendChild(style);
    }

    var root = document.createElement('div');
    root.id = ROOT_ID;
    root.innerHTML =
      '<div id="odc-share-overlay" role="dialog" aria-modal="true" aria-labelledby="odc-share-title" hidden>' +
      '  <div id="odc-share-card">' +
      '    <button type="button" id="odc-share-x" aria-label="Close">×</button>' +
      '    <p id="odc-share-kicker">One Dollar Computer</p>' +
      '    <h2 id="odc-share-title">Share this page</h2>' +
      '    <p id="odc-share-lede">Scan with a phone, or copy the short link</p>' +
      '    <div id="odc-share-qr-wrap"><div id="odc-share-qr" aria-hidden="true"></div></div>' +
      '    <a id="odc-share-link" href="#" target="_blank" rel="noopener"></a>' +
      '    <div id="odc-share-actions">' +
      '      <button type="button" id="odc-share-copy">Copy link</button>' +
      '      <button type="button" id="odc-share-native" hidden>Share…</button>' +
      '    </div>' +
      '  </div>' +
      '</div>';
    document.body.appendChild(root);

    var overlay = document.getElementById('odc-share-overlay');
    var nativeBtn = document.getElementById('odc-share-native');
    if (navigator.share) nativeBtn.hidden = false;

    document.getElementById('odc-share-x').addEventListener('click', closeShare);
    document.getElementById('odc-share-copy').addEventListener('click', copyLink);
    nativeBtn.addEventListener('click', nativeShare);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeShare();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeShare();
    });
  }

  function bindTriggers() {
    document.querySelectorAll('[data-odc-share]').forEach(function (el) {
      if (el.getAttribute('data-odc-share-bound') === '1') return;
      el.setAttribute('data-odc-share-bound', '1');
      el.addEventListener('click', function (e) {
        e.preventDefault();
        openShare();
      });
    });
  }

  function openShare() {
    ensureModal();
    var url = shareUrl();
    var target = qrUrl();
    var overlay = document.getElementById('odc-share-overlay');
    var link = document.getElementById('odc-share-link');
    var qr = document.getElementById('odc-share-qr');
    var title = document.getElementById('odc-share-title');
    var path = publicPath();

    title.textContent =
      path !== '/' && path.split('/').filter(Boolean).length >= 1
        ? 'Share this project'
        : 'Share this page';

    link.href = target;
    link.textContent = url.replace(/^https:\/\//, '');
    qr.innerHTML = '';
    var img = document.createElement('img');
    img.alt = 'QR code for ' + url;
    img.width = 172;
    img.height = 172;
    img.decoding = 'async';
    img.src =
      'https://api.qrserver.com/v1/create-qr-code/?size=344x344&margin=10&color=07090F&bgcolor=FFFFFF&data=' +
      encodeURIComponent(target);
    qr.appendChild(img);

    overlay.hidden = false;
    requestAnimationFrame(function () {
      overlay.classList.add('open');
    });
  }

  function closeShare() {
    var overlay = document.getElementById('odc-share-overlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    setTimeout(function () {
      if (!overlay.classList.contains('open')) overlay.hidden = true;
    }, 280);
  }

  function copyLink() {
    var url = shareUrl();
    var btn = document.getElementById('odc-share-copy');
    function done() {
      if (!btn) return;
      btn.classList.add('is-done');
      btn.textContent = 'Copied';
      setTimeout(function () {
        btn.classList.remove('is-done');
        btn.textContent = 'Copy link';
      }, 1400);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(done).catch(function () {
        window.prompt('Copy this link', url);
      });
    } else {
      window.prompt('Copy this link', url);
    }
  }

  function nativeShare() {
    var url = shareUrl();
    if (!navigator.share) return;
    navigator
      .share({
        title: document.title || 'One Dollar Computer',
        url: url
      })
      .catch(function () {
        /* cancelled */
      });
  }

  function boot() {
    ensureModal();
    bindTriggers();
  }

  window.odcOpenShare = openShare;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
