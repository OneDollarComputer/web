/**
 * Load lesson HTML into a sandboxed iframe.
 * Use srcdoc only — about:blank / document.write races leave a black frame.
 * Size once to content height; do not reflow on scroll (that shakes the page).
 */

const BOOT_ID = "odc-preview-boot";
const BOOT_CSS_ID = "odc-preview-boot-css";
const BOOT_CONTRAST_ID = "odc-preview-contrast";
const PAINTED = "_odcPainted";
const MIN_H = 220;
const MAX_H = 1200;
const FIT_EPS = 12;

/** Readable defaults — agents often emit pale titles on white. */
const BOOT_CSS =
  `html,body{margin:0;background:#f8fafc;color:#0f172a;}` +
  `body{line-height:1.45;}` +
  `h1,h2,h3,h4,h5,h6{color:#0f172a;}` +
  `p,li,label,small,.lede,.subtitle,.desc,.meta{color:#334155;}` +
  `a{color:#0369a1;}` +
  `code,kbd{color:#0f172a;}`;

/**
 * After paint: if text contrast vs background is too low, force a readable color.
 * Preserves intentional dark themes (light text on dark bg stays).
 */
const CONTRAST_JS =
  `(function(){` +
  `var MIN=4.5;` +
  `function parse(c){` +
  `if(!c||c==="transparent"||c==="rgba(0, 0, 0, 0)")return null;` +
  `var m=c.match(/rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)/);` +
  `return m?[+m[1],+m[2],+m[3]]:null;` +
  `}` +
  `function lum(rgb){` +
  `var a=rgb.map(function(v){v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4);});` +
  `return 0.2126*a[0]+0.7152*a[1]+0.0722*a[2];` +
  `}` +
  `function ratio(a,b){var L1=lum(a),L2=lum(b);var hi=Math.max(L1,L2),lo=Math.min(L1,L2);return(hi+0.05)/(lo+0.05);}` +
  `function bg(el){` +
  `var n=el;` +
  `while(n&&n.nodeType===1){` +
  `var c=parse(getComputedStyle(n).backgroundColor);` +
  `if(c)return c;` +
  `n=n.parentElement;` +
  `}` +
  `return[248,250,252];` +
  `}` +
  `function fix(el){` +
  `try{` +
  `var st=getComputedStyle(el);` +
  `if(st.display==="none"||st.visibility==="hidden")return;` +
  `var fg=parse(st.color);` +
  `if(!fg)return;` +
  `var b=bg(el);` +
  `if(ratio(fg,b)>=MIN)return;` +
  `el.style.setProperty("color",lum(b)>0.55?"#0f172a":"#f8fafc","important");` +
  `}catch(e){}` +
  `}` +
  `function run(){` +
  `var sel="h1,h2,h3,h4,h5,h6,p,li,label,span,a,small,button,td,th,.title,.subtitle,.lede,.desc,.meta,[class*='title'],[class*='heading']";` +
  `document.querySelectorAll(sel).forEach(fix);` +
  `}` +
  `if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run);` +
  `else run();` +
  `setTimeout(run,50);` +
  `setTimeout(run,250);` +
  `})();`;

function withBoot(html) {
  const doc = String(html || "");
  if (!doc) return doc;
  let out = doc;
  if (!out.includes(BOOT_CSS_ID)) {
    // Do NOT set min-height:100% — it makes scrollHeight track the iframe and explode.
    const css = `<style id="${BOOT_CSS_ID}">${BOOT_CSS}</style>`;
    if (/<\/head>/i.test(out)) out = out.replace(/<\/head>/i, `${css}</head>`);
    else if (/<body\b/i.test(out)) out = out.replace(/<body\b/i, `${css}<body`);
    else out = css + out;
  }
  if (!out.includes(BOOT_CONTRAST_ID)) {
    const contrast = `<script id="${BOOT_CONTRAST_ID}">${CONTRAST_JS}</script>`;
    out = /<\/body>/i.test(out) ? out.replace(/<\/body>/i, `${contrast}</body>`) : out + contrast;
  }
  if (!out.includes(BOOT_ID)) {
    const boot =
      `<script id="${BOOT_ID}">` +
      `(function(){` +
      `var ping=function(){try{window.parent.postMessage({type:"odc-html-resize"},"*");}catch(e){}};` +
      `window.addEventListener("load",ping);` +
      `requestAnimationFrame(function(){requestAnimationFrame(ping);});` +
      `})();` +
      `</script>`;
    out = /<\/body>/i.test(out) ? out.replace(/<\/body>/i, `${boot}</body>`) : out + boot;
  }
  return out;
}

function hasContent(iframe) {
  try {
    return (iframe.contentDocument?.body?.childElementCount || 0) > 0;
  } catch {
    return false;
  }
}

/** Height from element bottoms only — never collapses the iframe (no scroll jump). */
function measureContentHeight(doc) {
  const body = doc.body;
  if (!body) return MIN_H;

  let bottom = 0;
  for (const el of body.children) {
    const style = doc.defaultView?.getComputedStyle?.(el);
    if (style?.display === "none") continue;
    bottom = Math.max(bottom, el.offsetTop + el.offsetHeight);
  }
  return Math.max(MIN_H, bottom);
}

/** Match iframe height to content. Skips tiny changes to avoid shake. */
export function fitHtmlFrame(iframe) {
  if (!iframe) return;
  clearTimeout(iframe._odcFitTimer);
  iframe._odcFitTimer = setTimeout(() => fitHtmlFrameNow(iframe), 30);
}

function fitHtmlFrameNow(iframe) {
  if (!iframe) return;
  try {
    const doc = iframe.contentDocument;
    if (!doc?.documentElement) return;

    const raw = measureContentHeight(doc);
    const capped = Math.min(Math.max(raw + 16, MIN_H), MAX_H);
    const prev = iframe._odcStableHeight || 0;
    if (prev && Math.abs(capped - prev) < FIT_EPS) return;

    iframe.style.height = `${capped}px`;
    iframe.style.minHeight = `${MIN_H}px`;
    iframe._odcStableHeight = capped;

    const embed = iframe.closest(".html-embed, .ws-html-wrap");
    if (embed) {
      embed.style.height = "auto";
      embed.style.minHeight = "0";
      embed.style.aspectRatio = "auto";
    }
  } catch {
    /* sandbox without same-origin */
  }
}

function nudge(iframe) {
  fitHtmlFrame(iframe);
}

function bindFit(iframe) {
  if (!iframe || iframe._odcFitBound) return;
  iframe._odcFitBound = true;
  iframe.addEventListener("load", () => {
    iframe._odcStableHeight = 0;
    fitHtmlFrame(iframe);
    requestAnimationFrame(() => fitHtmlFrame(iframe));
    setTimeout(() => fitHtmlFrame(iframe), 80);
    setTimeout(() => fitHtmlFrame(iframe), 300);
  });
}

if (typeof window !== "undefined" && !window._odcHtmlResizeBound) {
  window._odcHtmlResizeBound = true;
  window.addEventListener("message", (event) => {
    if (event?.data?.type !== "odc-html-resize") return;
    document.querySelectorAll(".ws-html-frame, .html-embed iframe").forEach((frame) => {
      if (frame.contentWindow === event.source) fitHtmlFrame(frame);
    });
  });
}

/** Paint HTML into a sandboxed iframe. */
export function paintIframe(iframe, html) {
  if (!iframe) return iframe;
  const raw = String(html || "").trim();
  if (!raw) {
    iframe[PAINTED] = "";
    iframe._odcStableHeight = 0;
    iframe.removeAttribute("src");
    iframe.removeAttribute("srcdoc");
    iframe.style.height = "";
    return iframe;
  }
  const doc = withBoot(raw);
  bindFit(iframe);
  if (iframe[PAINTED] === doc && hasContent(iframe)) {
    nudge(iframe);
    return iframe;
  }
  iframe[PAINTED] = doc;
  iframe._odcStableHeight = 0;
  iframe.removeAttribute("src");
  iframe.srcdoc = doc;
  return iframe;
}

/** Nudge existing previews, or load if the first paint never stuck. */
export function repaintHtmlPreviews(root = document) {
  root.querySelectorAll(".html-row").forEach((row) => {
    const iframe = row.querySelector(".html-embed iframe");
    const html = row.querySelector(".html-input")?.value.trim();
    if (!iframe || !html) return;
    if (hasContent(iframe)) nudge(iframe);
    else paintIframe(iframe, html);
  });
  root.querySelectorAll(".ws-html-frame").forEach((iframe) => {
    if (hasContent(iframe)) nudge(iframe);
  });
}

/** Fit once when the embed first becomes visible — not on every scroll intersection. */
export function watchHtmlEmbed(iframe) {
  const embed = iframe?.closest(".html-embed, .ws-html-wrap") || iframe;
  if (!embed || !("IntersectionObserver" in window)) return;
  if (iframe._embedIo) return;
  const io = new IntersectionObserver((entries) => {
    if (!entries.some((e) => e.isIntersecting)) return;
    if (iframe._odcStableHeight) return;
    nudge(iframe);
  }, { threshold: 0.01 });
  io.observe(embed);
  iframe._embedIo = io;
}
