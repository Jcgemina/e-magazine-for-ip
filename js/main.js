/* =====================================================================
   main.js — boots the e-magazine and wires up general UI:
   contents menu, comparison highlights, links back to the selector.
   ===================================================================== */
(function () {
  "use strict";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

  function menu() {
    const btn = $("#menuToggle");
    const panel = $("#menu");
    const close = (returnFocus) => {
      panel.hidden = true;
      btn.setAttribute("aria-expanded", "false");
      if (returnFocus) btn.focus();
    };
    btn.addEventListener("click", () => {
      const open = panel.hidden;
      panel.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
      if (open) panel.querySelector("a").focus();
    });
    panel.addEventListener("click", (e) => { if (e.target.closest("a")) close(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) close(true); });
    document.addEventListener("click", (e) => {
      if (!panel.hidden && !e.target.closest(".topbar__nav")) close(false);
    });
  }

  function matrix() {
    const box = $("#matrix");
    $$("#matrixChips .chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        $$("#matrixChips .chip").forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
        const col = chip.dataset.col;
        if (col === "all") box.removeAttribute("data-focus");
        else box.setAttribute("data-focus", col);
      });
    });
  }

  // "All communities" in each chapter returns to the selector at that community.
  function backLinks() {
    const S = window.EMAGScroll.Selector;
    $$(".ch-nav__back").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const i = Number(a.dataset.goto) || 0;
        S.goTo(i);
        if (S.isStatic) {
          $("#communities").scrollIntoView({ behavior: "auto" });
        }
        history.replaceState(null, "", "#communities");
        setTimeout(() => S.names[i].focus({ preventScroll: true }), S.isStatic ? 0 : 900);
      });
    });
  }

  // Move keyboard focus to the target of in-page links, so screen-reader and
  // keyboard users land where sighted users do.
  function anchorFocus() {
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a || a.classList.contains("ch-nav__back")) return;
      const target = document.getElementById(a.getAttribute("href").slice(1));
      if (!target) return;
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      setTimeout(() => target.focus({ preventScroll: true }), 50);
    });
  }

  function boot() {
    window.EMAGRender.all();
    window.EMAGScroll.init();
    menu();
    matrix();
    backLinks();
    anchorFocus();
    // If the page was opened at a chapter anchor, honour it after layout settles.
    if (location.hash && location.hash.length > 1) {
      const t = document.getElementById(location.hash.slice(1));
      if (t) setTimeout(() => t.scrollIntoView(), 300);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
