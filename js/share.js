/**
 * One Dollar Computer — Share (QR + copy)
 * Short link: https://odc.rs + path · QR opens live onedollarcomputer.com until DNS is ready
 */
(function () {
  'use strict';

  var SHARE_ORIGIN = 'https://odc.rs';
  var LIVE_ORIGIN = 'https://onedollarcomputer.com';
  var STYLE_ID = 'odc-share-style';
  var ROOT_ID = 'odc-share-root';

  var SHARE_ICON =
    '<svg class="odc-share-ico" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">' +
    '<path fill="currentColor" d="M12 3.2a1 1 0 0 1 1 1v7.17l2.12-2.12a1 1 0 1 1 1.42 1.42l-3.83 3.83a1 1 0 0 1-1.42 0L7.46 10.67a1 1 0 0 1 1.42-1.42L11 11.37V4.2a1 1 0 0 1 1-1Z"/>' +
    '<path fill="currentColor" d="M6.5 12.5a1 1 0 0 1 1 1V17a1.5 1.5 0 0 0 1.5 1.5h6A1.5 1.5 0 0 0 16.5 17v-3.5a1 1 0 1 1 2 0V17A3.5 3.5 0 0 1 15 20.5H9A3.5 3.5 0 0 1 5.5 17v-3.5a1 1 0 0 1 1-1Z"/>' +
    '</svg>';

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

      /* —— FAB —— */
      '#odc-share-btn{position:fixed;right:max(0.85rem,env(safe-area-inset-right));',
      '  top:50%;transform:translateY(-50%);z-index:1200;isolation:isolate;',
      '  display:inline-flex;align-items:center;gap:0.55rem;',
      '  margin:0;padding:0.72rem 1.05rem 0.72rem 0.85rem;border:1px solid rgba(72,225,167,0.35);',
      '  border-radius:999px;cursor:pointer;color:#E8EEF8;',
      '  background:linear-gradient(160deg,rgba(18,28,42,0.92),rgba(8,12,20,0.88));',
      '  backdrop-filter:blur(14px) saturate(1.2);-webkit-backdrop-filter:blur(14px) saturate(1.2);',
      '  box-shadow:0 0 0 1px rgba(255,255,255,0.04) inset,0 10px 28px rgba(0,0,0,0.45),',
      '    0 0 24px rgba(72,225,167,0.12);',
      '  font-size:0.78rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;',
      '  transition:transform .22s cubic-bezier(.22,1,.36,1),box-shadow .22s ease,border-color .22s ease,',
      '    background .22s ease,color .22s ease;}',
      '#odc-share-btn::before{content:"";position:absolute;inset:-1px;border-radius:inherit;z-index:-1;',
      '  background:conic-gradient(from 180deg at 50% 50%,transparent 0deg,#48E1A7 55deg,transparent 120deg,',
      '    transparent 240deg,#48E1A7 300deg,transparent 360deg);opacity:0.35;filter:blur(10px);',
      '  animation:odc-share-aura 5.5s ease-in-out infinite;}',
      '#odc-share-btn .odc-share-ico{flex-shrink:0;opacity:0.95;transition:transform .22s cubic-bezier(.22,1,.36,1);}',
      '#odc-share-btn:hover{transform:translateY(-50%) translateX(-3px) scale(1.04);',
      '  border-color:rgba(72,225,167,0.7);color:#fff;',
      '  box-shadow:0 0 0 1px rgba(255,255,255,0.06) inset,0 14px 36px rgba(0,0,0,0.5),',
      '    0 0 36px rgba(72,225,167,0.28);}',
      '#odc-share-btn:hover .odc-share-ico{transform:translateY(-1px);}',
      '#odc-share-btn:active{transform:translateY(-50%) scale(0.97);}',
      '#odc-share-btn:focus-visible{outline:2px solid #48E1A7;outline-offset:3px;}',

      '@keyframes odc-share-aura{0%,100%{opacity:.28;transform:scale(1);}50%{opacity:.55;transform:scale(1.06);}}',

      /* —— Overlay —— */
      '#odc-share-overlay{display:flex;position:fixed;inset:0;z-index:1300;padding:1.25rem;',
      '  align-items:center;justify-content:center;',
      '  background:rgba(2,6,12,0.55);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);',
      '  opacity:0;visibility:hidden;pointer-events:none;',
      '  transition:opacity .28s ease,visibility .28s;}',
      '#odc-share-overlay.open{opacity:1;visibility:visible;pointer-events:auto;}',

      /* —— Card —— */
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

      '#odc-share-actions{display:flex;flex-direction:column;gap:0.55rem;}',
      '#odc-share-copy,#odc-share-native,#odc-share-close{appearance:none;border:0;cursor:pointer;',
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

      '@media (max-width:520px){',
      '  #odc-share-btn{top:auto;bottom:max(1.25rem,env(safe-area-inset-bottom));transform:none;',
      '    right:max(0.85rem,env(safe-area-inset-right));}',
      '  #odc-share-btn:hover{transform:translateY(-2px) scale(1.03);}',
      '  #odc-share-btn:active{transform:scale(0.97);}',
      '  body.odc-has-ai-help #odc-share-btn{bottom:max(4.75rem,calc(env(safe-area-inset-bottom) + 3.75rem));}',
      '}',

      '@media (prefers-reduced-motion:reduce){',
      '  #odc-share-btn,#odc-share-btn::before,#odc-share-overlay,#odc-share-card{animation:none!important;',
      '    transition:none!important;}',
      '}'
    ].join('');
  }

  function ensureUi() {
    if (document.getElementById(ROOT_ID)) return;

    if (!document.getElementById(STYLE_ID)) {
      var style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = css();
      document.head.appendChild(style);
    }

    if (document.getElementById('btnAIHelp')) {
      document.body.classList.add('odc-has-ai-help');
    }

    var root = document.createElement('div');
    root.id = ROOT_ID;
    root.innerHTML =
      '<button type="button" id="odc-share-btn" aria-haspopup="dialog" aria-controls="odc-share-overlay">' +
      SHARE_ICON +
      '<span>Share</span>' +
      '</button>' +
      '<div id="odc-share-overlay" role="dialog" aria-modal="true" aria-labelledby="odc-share-title" hidden>' +
      '  <div id="odc-share-card">' +
      '    <button type="button" id="odc-share-x" aria-label="Close">×</button>' +
      '    <p class="odc-share-kicker" id="odc-share-kicker">One Dollar Computer</p>' +
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

    document.getElementById('odc-share-btn').addEventListener('click', openShare);
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

  function openShare() {
    var url = shareUrl();
    var target = qrUrl();
    var overlay = document.getElementById('odc-share-overlay');
    var link = document.getElementById('odc-share-link');
    var qr = document.getElementById('odc-share-qr');
    var title = document.getElementById('odc-share-title');
    var path = publicPath();

    if (path !== '/' && path.split('/').filter(Boolean).length >= 1) {
      title.textContent = 'Share this project';
    } else {
      title.textContent = 'Share this page';
    }

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
        /* user cancelled */
      });
  }

  function boot() {
    ensureUi();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
