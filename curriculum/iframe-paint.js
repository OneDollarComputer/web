/**
 * Load lesson HTML into a sandboxed iframe.
 * Use srcdoc only — about:blank / document.write races leave a black frame.
 * Size the frame to the document height so dark parent chrome is not visible.
 */

const BOOT_ID = "odc-preview-boot";
const BOOT_CSS_ID = "odc-preview-boot-css";
const PAINTED = "_odcPainted";
const MIN_H = 280;
const MAX_H = 2400;

function withBoot(html) {
  const doc = String(html || "");
  if (!doc) return doc;
  let out = doc;
  if (!out.includes(BOOT_CSS_ID)) {
    const css =
      `<style id="${BOOT_CSS_ID}">` +
      `html,body{margin:0;min-height:100%;background:#f8fafc;}` +
      `</style>`;
    if (/<\/head>/i.test(out)) out = out.replace(/<\/head>/i, `${css}</head>`);
    else if (/<body\b/i.test(out)) out = out.replace(/<body\b/i, `${css}<body`);
    else out = css + out;
  }
  if (!out.includes(BOOT_ID)) {
    const boot =
      `<script id="${BOOT_ID}">` +
      `(function(){` +
      `var ping=function(){try{window.dispatchEvent(new Event("resize"));}catch(e){}};` +
      `window.addEventListener("load",ping);` +
      `document.addEventListener("visibilitychange",ping);` +
      `if(window.ResizeObserver)new ResizeObserver(ping).observe(document.documentElement);` +
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

/** Match iframe height to content — avoids black empty bands from tall fixed frames. */
export function fitHtmlFrame(iframe) {
  if (!iframe) return;
  try {
    const doc = iframe.contentDocument;
    if (!doc?.documentElement) return;
    const body = doc.body;
    const h = Math.max(
      doc.documentElement.scrollHeight || 0,
      body?.scrollHeight || 0,
      body?.offsetHeight || 0,
      MIN_H
    );
    const capped = Math.min(Math.max(h + 12, MIN_H), MAX_H);
    iframe.style.height = `${capped}px`;
    iframe.style.minHeight = `${Math.min(capped, MIN_H)}px`;
    const embed = iframe.closest(".html-embed, .ws-html-wrap");
    if (embed) {
      embed.style.height = "auto";
      embed.style.minHeight = "0";
    }
  } catch {
    /* sandbox without same-origin */
  }
}

function nudge(iframe) {
  try {
    iframe.contentWindow?.dispatchEvent(new Event("resize"));
  } catch {
    /* ignore */
  }
  fitHtmlFrame(iframe);
}

function bindFit(iframe) {
  if (!iframe || iframe._odcFitBound) return;
  iframe._odcFitBound = true;
  const onResize = () => fitHtmlFrame(iframe);
  iframe.addEventListener("load", () => {
    fitHtmlFrame(iframe);
    try {
      iframe.contentWindow?.addEventListener("resize", onResize);
    } catch {
      /* ignore */
    }
    requestAnimationFrame(() => fitHtmlFrame(iframe));
    setTimeout(() => fitHtmlFrame(iframe), 50);
    setTimeout(() => fitHtmlFrame(iframe), 250);
  });
}

/** Paint HTML into a sandboxed iframe. */
export function paintIframe(iframe, html) {
  if (!iframe) return iframe;
  const raw = String(html || "").trim();
  if (!raw) {
    iframe[PAINTED] = "";
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

/** When the embed becomes visible, resize to content — do not reload. */
export function watchHtmlEmbed(iframe) {
  const embed = iframe?.closest(".html-embed, .ws-html-wrap") || iframe;
  if (!embed || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) nudge(iframe);
  }, { threshold: 0.01 });
  io.observe(embed);
  iframe._embedIo = io;
}
