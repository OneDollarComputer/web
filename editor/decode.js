
(function () {
  const APIFY_STORE_ID = 'ggjuIUFb4w7chkiVd';
  const APIFY_RECORD =
    'https://api.apify.com/v2/key-value-stores/' + APIFY_STORE_ID + '/records/';
  const STASH_KEY = 'odc_magic_src';
  const ID_RE = /^[a-zA-Z0-9_-]{4,64}$/;

  function rawParam(name) {
    const blobs = [window.location.search, window.location.hash.replace(/^#/, '')];
    const re = new RegExp('(?:^|[?&#])' + name + '=([^&]*)');
    for (const blob of blobs) {
      const m = blob.match(re);
      if (m) return m[1];
    }
    return null;
  }

  function decodeURIComponentSafe(value) {
    if (!value) return '';
    let s = value.replace(/\+/g, ' ');
    try {
      s = decodeURIComponent(s);
    } catch (_) {}
    return s;
  }

  function decodeBase64(encoded) {
    if (!encoded || typeof encoded !== 'string') return null;
    try {
      const stripped = encoded.replace(/[\s"'`]+/g, '');
      const normalized = stripped.replace(/-/g, '+').replace(/_/g, '/');
      const padded = normalized + '=='.slice(0, (4 - (normalized.length % 4)) % 4);
      if (!/^[A-Za-z0-9+/]*={0,2}$/.test(padded) || padded.length < 8) return null;
      const binary = atob(padded);
      const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
      return new TextDecoder('utf-8').decode(bytes);
    } catch (e) {
      console.warn('[decode.js] Base64 decode failed:', e.message);
      return null;
    }
  }

  function looksLikeFirmware(text) {
    if (!text || typeof text !== 'string') return false;
    const t = text.trim();
    if (t.length < 12 || t.length > 200000) return false;
    if (t.includes('\uFFFD') && (t.match(/\uFFFD/g) || []).length > 3) return false;
    if (/^use\s+odc\s*::/.test(t) || /\bfn\s+main\s*\(/.test(t)) return true;
    if (/\b(pin_output|pin_set|led_on|read_button)\b/.test(t) && /\bfn\s+/.test(t)) return true;
    return false;
  }

  function extractFirmware(text) {
    if (!text) return null;
    const fence = text.match(/```(?:rust|rs)?\s*([\s\S]*?)```/i);
    if (fence && looksLikeFirmware(fence[1])) return fence[1].trim();
    if (looksLikeFirmware(text)) return text.trim();
    return null;
  }

  function firmwareFromEncoded(encoded) {
    const raw = decodeURIComponentSafe(encoded).trim();
    if (!raw) return null;
    const asFirmware = extractFirmware(raw);
    if (asFirmware) return asFirmware;
    const decoded = decodeBase64(raw.replace(/ /g, '+'));
    return extractFirmware(decoded);
  }

  function firmwareFromRecord(data) {
    if (!data) return null;
    if (typeof data === 'string') return extractFirmware(data) || firmwareFromEncoded(data);
    const src = data.code || data.content || data.source || '';
    return extractFirmware(src) || firmwareFromEncoded(src);
  }

  function takeStash() {
    try {
      const stored = sessionStorage.getItem(STASH_KEY);
      if (!stored) return null;
      sessionStorage.removeItem(STASH_KEY);
      return extractFirmware(stored) || firmwareFromEncoded(stored);
    } catch (_) {
      return null;
    }
  }

  function stashFirmware(src) {
    try {
      if (src) sessionStorage.setItem(STASH_KEY, src);
    } catch (_) {}
  }

  async function fetchJson(url, ms) {
    const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const t = setTimeout(() => ctrl && ctrl.abort(), ms);
    try {
      const r = await fetch(url, { cache: 'no-store', signal: ctrl ? ctrl.signal : undefined });
      if (!r.ok) return null;
      const ct = (r.headers.get('content-type') || '').toLowerCase();
      if (ct.includes('json')) return await r.json();
      return await r.text();
    } catch (_) {
      return null;
    } finally {
      clearTimeout(t);
    }
  }

  async function fetchShortId(id) {
    if (!ID_RE.test(id)) return null;
    const local = await fetchJson('/api/magic?id=' + encodeURIComponent(id), 1500);
    const fromLocal = firmwareFromRecord(local);
    if (fromLocal) return fromLocal;
    const remote = await fetchJson(APIFY_RECORD + encodeURIComponent(id), 2500);
    return firmwareFromRecord(remote);
  }

  function decodeFromURL() {
    const stashed = takeStash();
    if (stashed) return stashed;

    const encoded = rawParam('code');
    if (encoded) {
      const src = firmwareFromEncoded(encoded);
      if (src) {
        console.log('[decode.js] Code loaded from ?code=');
        stashFirmware(src);
        return src;
      }
      console.warn('[decode.js] ?code= present but not valid firmware');
    }
    return null;
  }

  window.decodeBase64 = decodeBase64;
  window.DECODED_CODE_FROM_URL = decodeFromURL();
  window.MAGIC_DECODE_READY = (async function () {
    if (window.DECODED_CODE_FROM_URL) return window.DECODED_CODE_FROM_URL;
    const id = rawParam('m') || rawParam('magic');
    if (!id) return null;
    console.log('[decode.js] Fetching short Magic Link', id);
    const src = await fetchShortId(decodeURIComponentSafe(id).trim());
    if (src) {
      window.DECODED_CODE_FROM_URL = src;
      stashFirmware(src);
      console.log('[decode.js] Code loaded from Apify short id');
      return src;
    }
    console.warn('[decode.js] Short Magic Link not found');
    return null;
  })();
})();
