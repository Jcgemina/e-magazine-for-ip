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

  // Chapter links select the requested tribe before scrolling to its chapter.
  function chapterLinks() {
    const S = window.EMAGScroll.Selector;
    const selectChapter = (id, shouldScroll) => {
      const i = S.names.findIndex((name) => name.id === `tab-${id}`);
      if (i < 0) return false;

      S.goTo(i);
      if (shouldScroll) {
        const chapter = document.getElementById(`chapter-${id}`);
        if (!chapter) {
          console.error(`The selected community chapter was not rendered: ${id}`);
          return true;
        }
        if (!chapter.hasAttribute("tabindex")) chapter.setAttribute("tabindex", "-1");
        chapter.focus({ preventScroll: true });
        chapter.scrollIntoView({ behavior: S.reduced ? "auto" : "smooth" });
      }
      return true;
    };

    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#chapter-"]');
      if (!a) return;

      const id = a.getAttribute("href").slice("#chapter-".length);
      if (!selectChapter(id, false)) return;
      e.preventDefault();
      history.pushState(null, "", `#chapter-${id}`);
      selectChapter(id, true);
    });

    window.addEventListener("popstate", () => {
      const match = location.hash.match(/^#chapter-(.+)$/);
      if (match) selectChapter(match[1], true);
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
    chapterLinks();
    anchorFocus();
    const initialChapter = location.hash.match(/^#chapter-(.+)$/);
    if (initialChapter) {
      const index = window.EMAGScroll.Selector.names.findIndex((name) => name.id === `tab-${initialChapter[1]}`);
      if (index >= 0) window.EMAGScroll.Selector.goTo(index);
    }
    // If the page was opened at a chapter anchor, honour it after layout settles.
    if (location.hash && location.hash.length > 1) {
      const t = document.getElementById(location.hash.slice(1));
      if (t) setTimeout(() => t.scrollIntoView(), 300);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
