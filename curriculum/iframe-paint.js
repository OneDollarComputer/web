/**
 * Load lesson HTML into a sandboxed iframe.
 * Use srcdoc only — about:blank / document.write races leave a black frame.
 * Do not read iframe.srcdoc after load (some browsers report it empty).
 */

const BOOT_ID = "odc-preview-boot";
const PAINTED = "_odcPainted";

function withBoot(html) {
  const doc = String(html || "");
  if (!doc || doc.includes(BOOT_ID)) return doc;
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
  return /<\/body>/i.test(doc) ? doc.replace(/<\/body>/i, `${boot}</body>`) : doc + boot;
}

function hasContent(iframe) {
  try {
    return (iframe.contentDocument?.body?.childElementCount || 0) > 0;
  } catch {
    return false;
  }
}

function nudge(iframe) {
  try {
    iframe.contentWindow?.dispatchEvent(new Event("resize"));
  } catch {
    /* sandbox without same-origin */
  }
}

/** Paint HTML into a sandboxed iframe. */
export function paintIframe(iframe, html) {
  if (!iframe) return iframe;
  const raw = String(html || "").trim();
  if (!raw) {
    iframe[PAINTED] = "";
    iframe.removeAttribute("src");
    iframe.removeAttribute("srcdoc");
    return iframe;
  }
  const doc = withBoot(raw);
  if (iframe[PAINTED] === doc && hasContent(iframe)) {
    nudge(iframe);
    return iframe;
  }
  iframe[PAINTED] = doc;
  iframe.removeAttribute("src");
  iframe.srcdoc = doc;
  iframe.addEventListener("load", () => nudge(iframe), { once: true });
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

/** When the embed becomes visible, resize the inner canvas — do not reload. */
export function watchHtmlEmbed(iframe) {
  const embed = iframe?.closest(".html-embed") || iframe;
  if (!embed || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) nudge(iframe);
  }, { threshold: 0.01 });
  io.observe(embed);
  iframe._embedIo = io;
}
