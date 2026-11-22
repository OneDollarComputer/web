
(function () {
  
  function decodeBase64(encoded) {
    try {
      
      
      const normalized = encoded.replace(/ /g, '+').replace(/-/g, '+').replace(/_/g, '/');
      const padded = normalized + '=='.slice(0, (4 - normalized.length % 4) % 4);
      
      const binary = atob(padded);
      const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
      return new TextDecoder('utf-8').decode(bytes);
    } catch (e) {
      console.warn('[decode.js] ❌ Base64 decode failed:', e.message);
      return null;
    }
  }

  
  function getCodeFromURL() {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get('code');

    if (encoded) {
      console.log('[decode.js] 🔗 Found code param in URL');
      window.MAGIC_LINK_CODE_PRESENT = true;
      const decoded = decodeBase64(encoded);
      if (decoded == null || decoded.trim() === '') {
        // The link arrived damaged (truncated or mangled in transit).
        // The editor checks this flag and tells the user, instead of
        // silently opening with different code.
        window.MAGIC_LINK_ERROR = true;
        return null;
      }
      return decoded;
    }
    return null;
  }

  
  window.DECODED_CODE_FROM_URL = getCodeFromURL();
  
  if (window.DECODED_CODE_FROM_URL) {
    console.log('[decode.js] ✅ Code ready for editor injection');
  }
})();
