/* =====================================================================
   scroll.js — cover slideshow, community selector and scroll-driven reveals
   ===================================================================== */
(function () {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

  const Selector = {
    n: 0,
    active: -1,
    isStatic: true,
    reduced: false,
    names: [],
    imgs: [],
    panel: null,
    track: null,
    trackWrap: null,
    trackFrame: 0,
    trackResizeObserver: null,
    trackWidth: 0,

    init({ reduced }) {
      const D = window.EMAG;
      this.n = D.communities.length;
      this.reduced = reduced;
      this.names = $$(".sel-name");
      this.imgs = $$(".sel-img");
      this.panel = $("#selPanel");
      this.track = $("#selTrack");
      this.trackWrap = this.track.parentElement;
      this.isStatic = true;

      $("#communities").classList.add("is-static");
      this.setActive(0, true);
      this.bindControls();
      $("#selHint").textContent = "Choose a community with the names, the arrow buttons or the arrow keys.";
    },

    anchorX() {
      const w = window.innerWidth;
      return w < 768 ? 20 : Math.min(w * 0.22, 320);
    },

    targetScrollLeft(i) {
      const wrapperRect = this.trackWrap.getBoundingClientRect();
      const nameRect = this.names[i].getBoundingClientRect();
      return Math.max(0, Math.min(
        this.trackWrap.scrollWidth - this.trackWrap.clientWidth,
        nameRect.left - wrapperRect.left + this.trackWrap.scrollLeft - this.anchorX()
      ));
    },

    moveTrack(i, immediate = false) {
      window.cancelAnimationFrame(this.trackFrame);
      if (immediate || this.reduced) {
        this.trackWrap.scrollLeft = this.targetScrollLeft(i);
        this.trackFrame = 0;
        return;
      }

      const start = this.trackWrap.scrollLeft;
      const startedAt = performance.now();
      const duration = 550;
      const update = (now) => {
        const target = this.targetScrollLeft(i);
        const progress = Math.min(1, (now - startedAt) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        this.trackWrap.scrollLeft = start + (target - start) * eased;
        if (progress < 1) this.trackFrame = window.requestAnimationFrame(update);
        else this.trackFrame = 0;
      };
      this.trackFrame = window.requestAnimationFrame(update);
    },

    goTo(i, { focus = false } = {}) {
      i = Math.max(0, Math.min(this.n - 1, i));
      this.setActive(i);
      if (focus) this.names[i].focus({ preventScroll: true });
    },

    setActive(i, immediate = false) {
      if (i === this.active) return;
      this.active = i;
      const gsap = window.gsap;
      const D = window.EMAG;

      this.names.forEach((b, j) => {
        const on = j === i;
        b.setAttribute("aria-selected", on);
        b.tabIndex = on ? 0 : -1;
      });

      // Images
      this.imgs.forEach((f, j) => f.classList.toggle("is-active", j === i));

      // Text panel
      const html = window.EMAGRender.selectorPanelHTML(i);
      this.panel.innerHTML = html;
      if (gsap && !this.reduced && !immediate) {
        gsap.killTweensOf(this.panel);
        gsap.from(this.panel, { y: 10, duration: 0.45, ease: "power2.out", overwrite: true });
      }
      this.panel.setAttribute("aria-labelledby", this.names[i].id);

      $("#selCount").textContent = `${i + 1} / ${this.n}`;
      $("#selPrev").disabled = i === 0;
      $("#selNext").disabled = i === this.n - 1;

      if (this.isStatic) this.moveTrack(i, immediate);
      document.dispatchEvent(new CustomEvent("emag:community", { detail: { index: i, id: D.communities[i].id } }));
    },

    bindControls() {
      $("#selPrev").addEventListener("click", () => this.goTo(this.active - 1));
      $("#selNext").addEventListener("click", () => this.goTo(this.active + 1));
      this.names.forEach((b, j) => b.addEventListener("click", () => this.goTo(j)));
      window.addEventListener("resize", () => this.moveTrack(this.active, true));
      if ("ResizeObserver" in window) {
        this.trackResizeObserver = new ResizeObserver((entries) => {
          const width = entries[0].contentRect.width;
          if (width === this.trackWidth) return;
          this.trackWidth = width;
          if (this.active >= 0) this.moveTrack(this.active, true);
        });
        this.trackResizeObserver.observe(this.trackWrap);
      }
      document.addEventListener("visibilitychange", () => {
        if (!document.hidden && this.active >= 0) this.moveTrack(this.active, true);
      });
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
      this.track.addEventListener("transitionend", (e) => {
        if (e.propertyName === "font-size" && e.target.getAttribute("aria-selected") === "true") {
          this.moveTrack(this.active, true);
        }
      });
    }
  };

  const CoverSlideshow = {
    index: 0,
    slides: [],
    timer: null,
    paused: false,

    init() {
      this.slides = $$(".cover__slide");
      if (this.slides.length < 2) return;

      this.paused = false;
      $("#coverPhotoPrev").addEventListener("click", () => this.move(-1));
      $("#coverPhotoNext").addEventListener("click", () => this.move(1));
      $("#coverPhotoToggle").addEventListener("click", () => {
        this.paused = !this.paused;
        this.updateToggle();
        this.schedule();
      });

      document.addEventListener("visibilitychange", () => this.schedule());
      this.updateToggle();
      this.schedule();
    },

    move(amount) {
      this.show(this.index + amount, true);
      this.schedule();
    },

    show(index, announce = false) {
      this.index = (index + this.slides.length) % this.slides.length;
      this.slides.forEach((slide, i) => slide.classList.toggle("is-active", i === this.index));
      const name = window.EMAG.communities[this.index].selectorName;
      $("#coverPhotoName").textContent = name;
      if (announce) $("#coverPhotoStatus").textContent = `Photo: ${name}`;
    },

    updateToggle() {
      const button = $("#coverPhotoToggle");
      button.textContent = this.paused ? "Play" : "Pause";
      button.setAttribute("aria-label", this.paused ? "Resume photo rotation" : "Pause photo rotation");
    },

    schedule() {
      window.clearTimeout(this.timer);
      this.timer = null;
      if (this.paused || document.hidden) return;
      this.timer = window.setTimeout(() => {
        this.show(this.index + 1);
        this.schedule();
      }, 4000);
    }
  };

  function coverIntro(reduced) {
    const gsap = window.gsap;
    if (!gsap || reduced) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".cover__slide.is-active img", { scale: 1.08, duration: 2.2, ease: "power2.out" }, 0)
      .from(".cover__line", { yPercent: 105, duration: 1.1, stagger: 0.14 }, 0.15)
      .from([".cover__issue", ".cover__sub", ".cover__credits", ".cover__cue"], { opacity: 0, y: 16, duration: 0.8, stagger: 0.08 }, 0.7);

    gsap.to(".cover__bg", {
      yPercent: 14, ease: "none",
      scrollTrigger: { trigger: ".cover", start: "top top", end: "bottom top", scrub: true }
    });
  }

  let chapterAnimations = [];
  let chapterRefreshFrame = 0;

  function clearChapterAnimations() {
    chapterAnimations.forEach((animation) => {
      if (animation.scrollTrigger) animation.scrollTrigger.kill();
      animation.kill();
    });
    chapterAnimations = [];
  }

  function chapterReveals(reduced) {
    clearChapterAnimations();
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger || reduced) return;

    const chapter = $(".chapter");
    if (!chapter) return;
    const index = chapter.dataset.index;
    const opener = $(".ch-open", chapter);
    const openerImage = $(".ch-open__media img", chapter);
    const imageReveal = chapter.classList.contains("chapter--mandaya")
      ? gsap.fromTo(openerImage, { clipPath: "inset(0 100% 0 0)", scale: 1.04 }, {
          clipPath: "inset(0)", scale: 1, ease: "none",
          scrollTrigger: { id: `chapter-reveal-image-${index}`, trigger: opener, start: "top bottom", end: "bottom top", scrub: true }
        })
      : gsap.fromTo(openerImage, { scale: 1.12 }, {
          scale: 1, ease: "none",
          scrollTrigger: { id: `chapter-reveal-image-${index}`, trigger: opener, start: "top bottom", end: "bottom top", scrub: true }
        });
    chapterAnimations.push(imageReveal);

    const nameReveal = gsap.from($(".ch-open__name", chapter), {
      yPercent: 30, opacity: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { id: `chapter-reveal-name-${index}`, trigger: opener, start: "top 60%", once: true }
    });
    chapterAnimations.push(nameReveal);

    const story = $(".ch-stories", chapter);
    const storyPath = $(".ch-stories__thread path", chapter);
    if (story && storyPath) {
      const length = storyPath.getTotalLength();
      const storyReveal = gsap.fromTo(storyPath, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0.25
      }, {
        strokeDashoffset: 0,
        opacity: 0.8,
        ease: "none",
        scrollTrigger: { id: `chapter-reveal-story-${index}`, trigger: story, start: "top 82%", end: "top 35%", scrub: true }
      });
      chapterAnimations.push(storyReveal);
    }

    const music = $(".ch-music", chapter);
    const melody = $(".ch-music__melody", chapter);
    if (music && melody) {
      const bird = $(".ch-music__bird", melody);
      const notesLayer = $(".ch-music__notes", music);
      const notesFloat = $(".ch-music__notes-float", notesLayer);
      const melodyReveal = gsap.timeline({
        scrollTrigger: { id: `chapter-reveal-melody-${index}`, trigger: music, start: "top 88%", end: "top 28%", scrub: true }
      });
      melodyReveal
        .fromTo(melody, { xPercent: -110, rotation: -2, autoAlpha: 0 }, {
          xPercent: 0, rotation: 0, autoAlpha: 0.65, duration: 0.32, ease: "none"
        })
        .to(melody, { xPercent: 0, rotation: 0, autoAlpha: 0.4, duration: 0.68, ease: "none" });
      if (notesFloat) {
        melodyReveal
          .fromTo(notesFloat, {
            x: -140, y: -8, autoAlpha: 0, transformOrigin: "50% 50%"
          }, {
            x: 520, y: 95, autoAlpha: 0.9, duration: 0.82, ease: "none"
          }, 0.12)
          .to(notesFloat, {
            x: 560, autoAlpha: 0, duration: 0.06, ease: "none"
          }, 0.94);
      }
      if (bird) {
        melodyReveal
          .fromTo(bird, {
            x: -18, y: 14, rotation: -5, autoAlpha: 0, transformOrigin: "50% 50%"
          }, {
            x: 420, y: -4, rotation: 2, autoAlpha: 1, duration: 0.68, ease: "none"
          }, 0.12)
          .to(bird, {
            x: 650, y: -15, autoAlpha: 0, duration: 0.32, ease: "none"
          }, 0.68);
      }
      chapterAnimations.push(melodyReveal);

      $$(".inst", music).forEach((item, instrumentIndex) => {
        const instrument = $(".inst__icon svg", item);
        if (!instrument) return;
        const instrumentReveal = gsap.fromTo(instrument, {
          x: -64, rotation: -7, autoAlpha: 0
        }, {
          x: 0, rotation: 0, autoAlpha: 1, ease: "none",
          scrollTrigger: {
            id: `chapter-reveal-instrument-${index}-${instrumentIndex}`,
            trigger: item, start: "top 88%", end: "top 62%", scrub: true
          }
        });
        chapterAnimations.push(instrumentReveal);
      });
    }

    const textileImage = $(".story__weave img", chapter);
    if (textileImage) {
      const textileFigure = textileImage.closest(".story__weave");
      const textileReveal = gsap.timeline({
        scrollTrigger: { id: `chapter-reveal-weave-${index}`, trigger: textileFigure, start: "top 86%", end: "bottom 12%", scrub: true }
      });
      textileReveal
        .fromTo(textileImage, { clipPath: "inset(0 100% 0 0)", opacity: 0.7 }, {
          clipPath: "inset(0)", opacity: 1, duration: 0.7, ease: "none"
        })
        .to(textileImage, { clipPath: "inset(0 0 0 100%)", opacity: 0, duration: 0.3, ease: "none" });
      chapterAnimations.push(textileReveal);
    }
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
      CoverSlideshow.init();
      document.addEventListener("emag:chapter-rendered", () => {
        chapterReveals(reduced);
        if (window.ScrollTrigger) {
          window.cancelAnimationFrame(chapterRefreshFrame);
          chapterRefreshFrame = window.requestAnimationFrame(() => {
            chapterRefreshFrame = 0;
            window.ScrollTrigger.refresh();
          });
        }
      });
      Selector.init({ reduced });
      progress(reduced);

      if (window.ScrollTrigger) {
        window.addEventListener("load", () => window.ScrollTrigger.refresh());
      }
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          if (Selector.active >= 0) Selector.moveTrack(Selector.active);
          if (window.ScrollTrigger) window.ScrollTrigger.refresh();
        });
      }
    }
  };
})();
