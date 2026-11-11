/* =====================================================================
   scroll.js — scroll-driven behaviour (GSAP + ScrollTrigger)
   - Cover entrance and parallax
   - Pinned horizontal community selector, driven by vertical scroll
   - Chapter opener reveals, reading progress
   Falls back to a static, click-driven selector when the visitor
   prefers reduced motion or GSAP fails to load.
   ===================================================================== */
(function () {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

  const Selector = {
    n: 0,
    active: -1,
    st: null,
    isStatic: false,
    reduced: false,
    names: [],
    imgs: [],
    panel: null,
    track: null,
    xTo: null,

    init({ reduced }) {
      const D = window.EMAG;
      this.n = D.communities.length;
      this.reduced = reduced;
      this.names = $$(".sel-name");
      this.imgs = $$(".sel-img");
      this.panel = $("#selPanel");
      this.track = $("#selTrack");
      const hasGsap = !!(window.gsap && window.ScrollTrigger);
      this.isStatic = reduced || !hasGsap;

      this.setActive(0, true);
      this.bindControls();

      if (this.isStatic) {
        $("#communities").classList.add("is-static");
        $("#selHint").textContent = "Choose a community with the names, the arrow buttons or the arrow keys.";
        return;
      }
      this.buildPin();
    },

    // Where the active name should sit, measured from the viewport's left edge.
    anchorX() {
      const w = window.innerWidth;
      return w < 768 ? 20 : Math.min(w * 0.22, 320);
    },

    // Track offset for a fractional position (e.g. 1.4 = between items 1 and 2).
    offsetFor(pos) {
      const a = Math.floor(pos), b = Math.min(this.n - 1, a + 1), t = pos - a;
      const la = this.names[a].offsetLeft, lb = this.names[b].offsetLeft;
      return -(la + (lb - la) * t) + this.anchorX();
    },

    buildPin() {
      const gsap = window.gsap;
      this.xTo = gsap.quickTo(this.track, "x", { duration: 0.55, ease: "power3.out" });
      gsap.set(this.track, { x: this.offsetFor(0) });

      const perItem = () => Math.max(window.innerHeight * 0.75, 420);
      this.st = window.ScrollTrigger.create({
        trigger: "#selStage",
        start: "top top",
        end: () => "+=" + perItem() * (this.n - 1),
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 1 / (this.n - 1),
          duration: { min: 0.2, max: 0.5 },
          delay: 0.12,
          ease: "power1.inOut"
        },
        onUpdate: (self) => {
          const pos = self.progress * (this.n - 1);
          this.pos = pos;
          this.setActive(Math.round(pos));
          this.xTo(this.offsetFor(pos));
        },
        onRefresh: (self) => {
          gsap.set(this.track, { x: this.offsetFor(self.progress * (this.n - 1)) });
        }
      });
    },

    // Scroll the page so that item i is active (pinned mode),
    // or switch directly (static mode).
    goTo(i, { focus = false } = {}) {
      i = Math.max(0, Math.min(this.n - 1, i));
      if (this.isStatic || !this.st) {
        this.setActive(i);
      } else {
        const y = this.st.start + (this.st.end - this.st.start) * (i / (this.n - 1));
        window.scrollTo({ top: Math.round(y), behavior: this.reduced ? "auto" : "smooth" });
      }
      if (focus) this.names[i].focus({ preventScroll: true });
    },

    setActive(i, immediate = false) {
      if (i === this.active) return;
      const prev = this.active;
      this.active = i;
      const gsap = window.gsap;
      const D = window.EMAG;

      this.names.forEach((b, j) => {
        const on = j === i;
        b.setAttribute("aria-selected", on);
        b.tabIndex = on ? 0 : -1;
      });

      // Images
      this.imgs.forEach((f, j) => {
        const on = j === i;
        if (gsap && !this.reduced && !immediate) {
          if (on) {
            gsap.fromTo(f, { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out", overwrite: true });
          } else if (j === prev) {
            gsap.to(f, { opacity: 0, duration: 0.9, ease: "power2.out", overwrite: true });
          } else {
            gsap.set(f, { opacity: 0 });
          }
        } else {
          f.style.opacity = on ? 1 : 0;
        }
      });

      // Text panel
      const html = window.EMAGRender.selectorPanelHTML(i);
      if (gsap && !this.reduced && !immediate && this.panel.firstElementChild) {
        gsap.killTweensOf(this.panel);
        gsap.to(this.panel, {
          opacity: 0, y: -10, duration: 0.18, ease: "power1.in",
          onComplete: () => {
            this.panel.innerHTML = html;
            gsap.fromTo(this.panel, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
            gsap.from(this.panel.querySelectorAll(".sel-panel__inner > *"), { opacity: 0, y: 10, stagger: 0.05, duration: 0.4, ease: "power2.out" });
          }
        });
      } else {
        this.panel.innerHTML = html;
      }
      this.panel.setAttribute("aria-labelledby", this.names[i].id);

      // Active name grows (CSS font-size transition), so keep re-aiming the track while it does.
      if (this.xTo && !immediate) this.followResize();

      $("#selCount").textContent = `${i + 1} / ${this.n}`;
      $("#selPrev").disabled = i === 0;
      $("#selNext").disabled = i === this.n - 1;

      // Static mode: keep the active name in view inside the scrollable track
      if (this.isStatic && !immediate) {
        this.names[i].scrollIntoView({ block: "nearest", inline: "center", behavior: "auto" });
      }
      document.dispatchEvent(new CustomEvent("emag:community", { detail: { index: i, id: D.communities[i].id } }));
    },

    followResize() {
      const until = performance.now() + 650;
      const step = () => {
        this.xTo(this.offsetFor(this.pos || 0));
        if (performance.now() < until) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    },

    bindControls() {
      $("#selPrev").addEventListener("click", () => this.goTo(this.active - 1));
      $("#selNext").addEventListener("click", () => this.goTo(this.active + 1));
      this.names.forEach((b, j) => b.addEventListener("click", () => this.goTo(j)));
      this.track.addEventListener("keydown", (e) => {
        const map = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
        let target = null;
        if (e.key in map) target = this.active + map[e.key];
        if (e.key === "Home") target = 0;
        if (e.key === "End") target = this.n - 1;
        if (target === null) return;
        e.preventDefault();
        this.goTo(target, { focus: true });
      });
    }
  };

  function coverIntro(reduced) {
    const gsap = window.gsap;
    if (!gsap || reduced) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".cover__bg img", { scale: 1.08, duration: 2.2, ease: "power2.out" }, 0)
      .from(".cover__line", { yPercent: 105, duration: 1.1, stagger: 0.14 }, 0.15)
      .from([".cover__issue", ".cover__sub", ".cover__credits", ".cover__cue"], { opacity: 0, y: 16, duration: 0.8, stagger: 0.08 }, 0.7);

    gsap.to(".cover__bg", {
      yPercent: 14, ease: "none",
      scrollTrigger: { trigger: ".cover", start: "top top", end: "bottom top", scrub: true }
    });
  }

  function chapterReveals(reduced) {
    const gsap = window.gsap;
    if (!gsap || reduced) return;
    $$(".ch-open").forEach((el) => {
      const img = el.querySelector("img");
      gsap.fromTo(img, { scale: 1.12 }, {
        scale: 1, ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true }
      });
      gsap.from(el.querySelector(".ch-open__name"), {
        yPercent: 30, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 60%", once: true }
      });
    });
  }

  function progress(reduced) {
    const bar = $("#progressBar");
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      bar.style.transform = `scaleX(${p})`;
      $("#topbar").classList.toggle("is-solid", window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  window.EMAGScroll = {
    Selector,
    init() {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (window.gsap && window.ScrollTrigger) window.gsap.registerPlugin(window.ScrollTrigger);
      coverIntro(reduced);
      Selector.init({ reduced });
      chapterReveals(reduced);
      progress(reduced);

      if (window.ScrollTrigger) {
        // Fonts change text widths; re-measure once they arrive.
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => window.ScrollTrigger.refresh());
        window.addEventListener("load", () => window.ScrollTrigger.refresh());
      }
    }
  };
})();
