/**
 * One Dollar Computer — site-wide Share (QR + copy)
 * Short link host: https://odc.rs + same path as the public page
 * (point odc.rs at onedollarcomputer.com when DNS is ready)
 */
(function () {
  'use strict';

  // Short share host (same paths as the site). Point DNS: odc.rs → onedollarcomputer.com
  // Until that DNS exists, scans still open the live site via the canonical host below.
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

  /** URL encoded in the QR — must resolve today even before odc.rs DNS is live. */
  function qrUrl() {
    var path = publicPath();
    return LIVE_ORIGIN + (path === '/' ? '/' : path);
  }

  function ensureUi() {
    if (document.getElementById(ROOT_ID)) return;

    if (!document.getElementById(STYLE_ID)) {
      var style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = [
        '#' + ROOT_ID + ' { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }',
        '#odc-share-btn { position: fixed; right: 1rem; top: 50%; transform: translateY(-50%); z-index: 1200;',
        '  border: 0; border-radius: 999px; padding: 0.65rem 1rem; cursor: pointer;',
        '  background: #48E1A7; color: #04140e; font-weight: 700; font-size: 0.9rem;',
        '  box-shadow: 0 8px 24px rgba(0,0,0,0.35); }',
        '#odc-share-btn:hover { filter: brightness(1.05); }',
        '#odc-share-overlay { display: none; position: fixed; inset: 0; z-index: 1300;',
        '  background: rgba(1,4,9,0.72); align-items: center; justify-content: center; padding: 1.25rem; }',
        '#odc-share-overlay.open { display: flex; }',
        '#odc-share-card { width: min(22rem, 100%); background: #0D1220; color: #E8EEF8;',
        '  border: 1px solid #1D2843; border-radius: 14px; padding: 1.25rem; text-align: center; }',
        '#odc-share-card h2 { margin: 0 0 0.35rem; font-size: 1.1rem; }',
        '#odc-share-card p { margin: 0 0 1rem; color: #A9B4C7; font-size: 0.9rem; line-height: 1.4; }',
        '#odc-share-qr { width: 200px; height: 200px; margin: 0 auto 1rem; background: #fff; border-radius: 8px;',
        '  display: flex; align-items: center; justify-content: center; }',
        '#odc-share-qr img { width: 184px; height: 184px; display: block; }',
        '#odc-share-link { display: block; word-break: break-all; font-family: ui-monospace, SFMono-Regular, Menlo, monospace;',
        '  font-size: 0.82rem; color: #48E1A7; text-decoration: none; margin: 0 0 1rem; }',
        '#odc-share-actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }',
        '#odc-share-actions button { border: 0; border-radius: 8px; padding: 0.55rem 0.9rem; font: inherit;',
        '  font-weight: 600; cursor: pointer; }',
        '#odc-share-copy { background: #48E1A7; color: #04140e; }',
        '#odc-share-close { background: #1D2843; color: #E8EEF8; }'
      ].join('');
      document.head.appendChild(style);
    }

    var root = document.createElement('div');
    root.id = ROOT_ID;
    root.innerHTML =
      '<button type="button" id="odc-share-btn" aria-haspopup="dialog">Share</button>' +
      '<div id="odc-share-overlay" role="dialog" aria-modal="true" aria-labelledby="odc-share-title" hidden>' +
      '  <div id="odc-share-card">' +
      '    <h2 id="odc-share-title">Share</h2>' +
      '    <p>Scan the code or copy the link</p>' +
      '    <div id="odc-share-qr" aria-hidden="true"></div>' +
      '    <a id="odc-share-link" href="#" target="_blank" rel="noopener"></a>' +
      '    <div id="odc-share-actions">' +
      '      <button type="button" id="odc-share-copy">Copy link</button>' +
      '      <button type="button" id="odc-share-close">Close</button>' +
      '    </div>' +
      '  </div>' +
      '</div>';
    document.body.appendChild(root);

    var overlay = document.getElementById('odc-share-overlay');
    document.getElementById('odc-share-btn').addEventListener('click', openShare);
    document.getElementById('odc-share-close').addEventListener('click', closeShare);
    document.getElementById('odc-share-copy').addEventListener('click', copyLink);
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
    link.href = target;
    link.textContent = url.replace(/^https:\/\//, '');
    qr.innerHTML = '';
    var img = document.createElement('img');
    img.alt = 'QR code for ' + url;
    img.width = 184;
    img.height = 184;
    img.src =
      'https://api.qrserver.com/v1/create-qr-code/?size=184x184&margin=8&data=' +
      encodeURIComponent(target);
    qr.appendChild(img);
    overlay.hidden = false;
    overlay.classList.add('open');
  }

  function closeShare() {
    var overlay = document.getElementById('odc-share-overlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    overlay.hidden = true;
  }

  function copyLink() {
    var url = shareUrl();
    var btn = document.getElementById('odc-share-copy');
    function done() {
      if (!btn) return;
      var prev = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(function () {
        btn.textContent = prev;
      }, 1200);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(done).catch(function () {
        window.prompt('Copy this link', url);
      });
    } else {
      window.prompt('Copy this link', url);
    }
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
