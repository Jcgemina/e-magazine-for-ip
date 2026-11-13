(function () {
  "use strict";
  const D = window.EMAG;
  const $ = (s, el = document) => el.querySelector(s);

  const esc = (s) =>
    String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- citations ------------------------------------------------ */
  const refKeys = Object.keys(D.references);

  // Short author-date labels for in-text citations (APA style).
  const SHORT = {
    abarca2020: "Abarca, 2020",
    ragragio2025: "Ragragio & Paluga, 2025",
    ragragio2020: "Ragragio & Paluga, 2020",
    masinaring2011: "Masinaring, 2011",
    pagusara2014: "Pagusara, 2014",
    mangune: "Mangune, n.d.",
    cole1916: "Cole, 1916",
    benedict1913: "Benedict, 1913",
    santos1998: "Santos, 1998",
    pitargue2024: "Pitargue et al., 2024",
    tuban: "Tuban, n.d.",
    ompang: "Ompang, n.d.",
    upovpaa: "UP OVPAA, n.d.",
    nabayra2014: "Nabayra, 2014",
    marfil2013: "Marfil, 2013",
    kuizon2009: "Kuizon, 2009",
    filipinas: "Filipinas Heritage Library, n.d.",
    david2024: "David, 2024",
    pef2019: "Obo Monuvu of Magpet, 2019",
    pef2019b: "Philippine Eagle Foundation, n.d.",
    manobogroup: "Manobo Group, 2015",
    usm2026: "University of Southern Mindanao, 2026",
    kidapawan: "City Government of Kidapawan, n.d.",
    bahandi: "Bahandi sa Tribu, n.d.",
    voiceapo: "Arayam et al., 2005",
    ccp: "CCP, 2018",
    katig: "UP Department of Linguistics, n.d.",
    ipra: "RA 8371, 1997"
  };

  function cite(refs) {
    if (!refs || !refs.length) return "";
    const parts = refs
      .filter((k) => D.references[k])
      .map((k) => `<a href="#ref-${k}" class="cite__link">${esc(SHORT[k] || k)}</a>`);
    return ` <span class="cite">(${parts.join("; ")})</span>`;
  }

  /* ---------- small icons --------------------------------------------- */
  const FAMILY_ICON = {
    Chordophone: '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 34 L34 6"/><path d="M10 34 L34 10"/><ellipse cx="11" cy="29" rx="7" ry="4" transform="rotate(-45 11 29)"/></svg>',
    Idiophone: '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="21" r="13"/><circle cx="20" cy="21" r="4"/><path d="M20 3v5"/></svg>',
    Aerophone: '<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="4" y="16" width="32" height="8" rx="4"/><circle cx="16" cy="20" r="1.4"/><circle cx="22" cy="20" r="1.4"/><circle cx="28" cy="20" r="1.4"/></svg>',
    Membranophone: '<svg viewBox="0 0 40 40" aria-hidden="true"><ellipse cx="20" cy="11" rx="12" ry="4"/><path d="M8 11v18c0 2.2 5.4 4 12 4s12-1.8 12-4V11"/><path d="M8 18l24 6M32 18L8 24"/></svg>'
  };

  const FAMILY_HELP = {
    Chordophone: "sound from strings",
    Idiophone: "the body of the instrument itself vibrates",
    Aerophone: "sound from moving air",
    Membranophone: "sound from a stretched skin"
  };

  /* ---------- cover & intro ------------------------------------------- */
  function renderCover() {
    $("#coverIssue").textContent = D.meta.issue;
    $("#coverSub").textContent = D.meta.subtitle;
    $("#coverGroup").innerHTML = D.meta.group.map((n) => `<li>${esc(n)}</li>`).join("");
    $("#coverClass").textContent = `${D.meta.section} · ${D.meta.teacher} · ${D.meta.year}`;
    $("#coverVisual").innerHTML = D.communities
      .map(
        (c, i) => `<figure class="cover__slide ${c.cover.fit === "contain" ? "cover__slide--contain" : ""}${i === 0 ? " is-active" : ""}">
          <img src="${esc(c.cover.src)}" alt="" loading="eager" decoding="async"${i === 0 ? ' fetchpriority="high"' : ""}>
        </figure>`
      )
      .join("");
    $("#coverPhotoName").textContent = D.communities[0].selectorName;
  }

  function renderIntro() {
    $("#introLead").textContent = D.intro.lead;
    $("#introBody").innerHTML =
      D.intro.body.map((p) => `<p>${esc(p)}</p>`).join("") +
      `<p class="intro__note">${esc(D.intro.note)}</p>`;
    renderMap();
  }

  // Schematic positions (0–100) — approximate relative locations only.
  const MAP_POS = {
    ata: { x: 30, y: 22, anchor: "end" },
    mansaka: { x: 56, y: 30, anchor: "start" },
    mandaya: { x: 82, y: 48, anchor: "end" },
    tagabawa: { x: 36, y: 68, anchor: "start" },
    obo: { x: 10, y: 47, anchor: "start" }
  };

  function renderMap() {
    const pins = D.communities
      .map((c) => {
        const p = MAP_POS[c.id];
        if (!p) return "";
        const tx = p.anchor === "end" ? -14 : 14;
        return `<a class="map__pin" href="#chapter-${c.id}" data-id="${c.id}">
          <circle cx="${p.x * 6}" cy="${p.y * 5}" r="7"/>
          <text x="${p.x * 6 + tx}" y="${p.y * 5 + 5}" text-anchor="${p.anchor}">${esc(c.name)}</text>
        </a>`;
      })
      .join("");
    $("#regionMap").innerHTML = `
      <svg class="map" viewBox="0 0 600 500" role="img" aria-label="Schematic map: Ata Manobo in the north-west Pantaron range; Mansaka in the north-central valleys; Mandaya on the east coast; Bagobo-Tagabawa and Obo Manuvu on the south-west slopes of Mount Apo, either side of the mountain.">
        <path class="map__sea" d="M330 500 C 320 430 300 380 330 330 C 360 290 410 300 420 360 C 430 420 470 460 470 500 Z"/>
        <text class="map__label map__label--sea" x="392" y="430">Davao Gulf</text>
        <path class="map__sea" d="M560 0 L600 0 L600 500 L540 500 C 520 380 540 220 560 0 Z"/>
        <text class="map__label map__label--sea" x="585" y="260" transform="rotate(90 585 260)">Pacific Ocean</text>
        <path class="map__peak" d="M130 330 l26 -46 l26 46 z"/>
        <text class="map__label" x="156" y="352" text-anchor="middle">Mt. Apo</text>
        <path class="map__peak" d="M220 120 l20 -36 l20 36 z"/>
        <text class="map__label" x="240" y="140" text-anchor="middle">Pantaron range</text>
        <path class="map__compass" d="M40 60 L46 40 L52 60 L46 56 Z"/>
        <text class="map__label" x="46" y="34" text-anchor="middle">N</text>
        ${pins}
      </svg>`;
  }

  /* ---------- selector ------------------------------------------------- */
  function renderSelector() {
    const cs = D.communities;
    $("#selVisual").innerHTML = cs
      .map(
        (c, i) => `<figure class="sel-img ${c.cover.fit === "contain" ? "sel-img--contain" : ""}${i === 0 ? " is-active" : ""}" data-i="${i}">
          <img src="${esc(c.cover.src)}" alt="" ${i ? 'loading="lazy"' : ""} decoding="async" width="1600" height="1000">
        </figure>`
      )
      .join("");

    $("#selTrack").innerHTML = cs
      .map(
        (c, i) => `<button class="sel-name" role="tab" id="tab-${c.id}" data-i="${i}"
          aria-selected="${i === 0}" aria-controls="selPanel" tabindex="${i === 0 ? 0 : -1}">
          <span>${esc(c.selectorName)}</span></button>`
      )
      .join("");
  }

  function selectorPanelHTML(i) {
    const c = D.communities[i];
    return `
      <div class="sel-panel__inner">
        <p class="sel-panel__where">${esc(c.location)}</p>
        <h3 class="sel-panel__name">${esc(c.name)}</h3>
        <p class="sel-panel__teaser">${esc(c.teaser)}</p>
        <dl class="sel-panel__feat">
          <div><dt>Featured story</dt><dd>${esc(c.featured.story)}</dd></div>
          <div><dt>Featured sound</dt><dd>${esc(c.featured.sound)}</dd></div>
        </dl>
        <a class="btn" href="#chapter-${c.id}">Read the ${esc(c.name)} chapter</a>
      </div>`;
  }

  function photoCreditHTML(credit) {
    if (!credit || typeof credit !== "object") return esc(credit || "");
    return `Photo: <cite>${esc(credit.title)}</cite> · Creator: ${esc(credit.creator)} ·
      <a href="${esc(credit.licenseUrl)}" target="_blank" rel="noopener noreferrer">${esc(credit.license)}</a> ·
      <a href="${esc(credit.pageUrl)}" target="_blank" rel="noopener noreferrer">${esc(credit.source)}</a>`;
  }

  /* ---------- chapters ------------------------------------------------- */
  function para(item) {
    return `<p>${esc(item.text)}${cite(item.refs)}</p>`;
  }

  function renderChapter(c, i, all) {
    const ch = c.chapter;
    const flip = i % 2 === 1;
    const prev = all[i - 1];
    const next = all[i + 1];

    const stories = ch.stories
      .map(
        (s, si) => `
        <article class="story ${si % 2 ? "story--alt" : ""}">
          <header class="story__head">
            <p class="story__kind">${esc(s.kind)}</p>
            <h4 class="story__title">${esc(s.title)}</h4>
          </header>
          <div class="story__text">
            ${s.retelling.map((p) => `<p>${esc(p)}</p>`).join("")}
            <p class="story__src">Retold in our words${cite(s.refs)}</p>
          </div>
          <aside class="story__meaning">
            <h5>What it tells us</h5>
            <p>${esc(s.meaning)}</p>
          </aside>
        </article>
        ${c.id === "mandaya" && si === 0 ? `
          <figure class="story__weave">
            <img src="${esc(c.cover.src)}" alt="${esc(c.cover.alt)}" loading="lazy" decoding="async" width="1600" height="1000">
            <figcaption>${photoCreditHTML(c.cover.credit)}</figcaption>
          </figure>` : ""}`
      )
      .join("");

    const instruments = ch.music.instruments
      .map(
        (m) => `
        <li class="inst ${m.placeholder ? "inst--verify" : ""}">
          <span class="inst__icon" title="${esc(m.family)}: ${esc(FAMILY_HELP[m.family] || "")}">${FAMILY_ICON[m.family] || ""}</span>
          <h4 class="inst__name">${esc(m.name)}</h4>
          <p class="inst__family">${esc(m.family)}${m.placeholder ? ' <span class="flag">To verify</span>' : ""}</p>
          <p class="inst__desc">${esc(m.desc)}${cite(m.refs)}</p>
        </li>`
      )
      .join("");

    const forms = ch.music.forms
      .map((f) => `<div class="form"><dt>${esc(f.name)}</dt><dd>${esc(f.desc)}${cite(f.refs)}</dd></div>`)
      .join("");

    const contexts = ch.contexts
      ? `<div class="contexts">
          <h4>${esc(ch.contexts.title)}</h4>
          <ul>${ch.contexts.items
            .map((x) => `<li><strong>${esc(x.name)}</strong> ${esc(x.desc)}${cite(x.refs)}</li>`)
            .join("")}</ul>
        </div>`
      : "";

    const timeline = ch.timeline
      ? `<section class="timeline" aria-labelledby="tl-${c.id}">
          <h4 id="tl-${c.id}">${esc(ch.timeline.title)}</h4>
          <p class="timeline__intro">${esc(ch.timeline.intro)}${cite(ch.timeline.refs)}</p>
          <ol class="timeline__list">
            ${ch.timeline.steps
              .map((s) => `<li><h5>${esc(s.name)}</h5><p>${esc(s.desc)}</p></li>`)
              .join("")}
          </ol>
        </section>`
      : "";

    return `
    <article class="chapter chapter--${c.id} ${flip ? "chapter--flip" : ""}" id="chapter-${c.id}" aria-labelledby="h-${c.id}" data-index="${i}">
      <header class="ch-open">
        <figure class="ch-open__media ${c.cover.fit === "contain" ? "ch-open__media--contain" : ""}">
          <img src="${esc(c.cover.src)}" alt="${esc(c.cover.alt)}" loading="lazy" decoding="async" width="1600" height="1000">
          <figcaption>${photoCreditHTML(c.cover.credit)}</figcaption>
        </figure>
        <div class="ch-open__text">
          <p class="ch-open__num">Chapter ${i + 1} of ${all.length}</p>
          <h2 class="ch-open__name" id="h-${c.id}">${esc(c.name)}</h2>
          <p class="ch-open__where">${esc(c.location)}</p>
        </div>
      </header>

      <section class="ch-land wrap" aria-label="Land and people">
        <div class="ch-land__text">
          <h3>Land and people</h3>
          ${ch.land.map(para).join("")}
        </div>
        <aside class="ch-land__spirit">
          <h3>The spirit world</h3>
          <p>${esc(ch.beliefs.text)}${cite(ch.beliefs.refs)}</p>
          <p class="ch-land__landmark"><span>Sacred landmark</span> ${esc(c.landmark)}</p>
        </aside>
      </section>

      <p class="ch-statement wrap"><span class="ch-statement__text">${esc(ch.statement)}</span>${cite(ch.statementRefs)}</p>

      <section class="ch-stories wrap" aria-label="Myths and stories">
        <div class="ch-stories__heading">
          <h3 class="ch-sub">Myths and stories</h3>
          <svg class="ch-stories__thread" viewBox="0 0 360 96" aria-hidden="true" focusable="false">
            <path d="M6 74 C36 74 34 22 68 22 S102 74 136 74 S170 22 204 22 S238 74 272 74 S306 22 340 22"/>
            <circle cx="6" cy="74" r="4"/>
            <circle cx="136" cy="74" r="4"/>
            <circle cx="272" cy="74" r="4"/>
          </svg>
        </div>
        ${stories}
      </section>

      <section class="ch-music" aria-label="Music">
        <svg class="ch-music__melody" viewBox="0 0 820 120" aria-hidden="true" focusable="false">
          <path d="M0 66 C56 66 66 28 118 28 S178 98 230 98 S288 34 344 34 S402 82 458 82 S516 44 572 44 S638 72 694 72 S764 50 820 50"/>
          <circle cx="118" cy="28" r="4"/>
          <circle cx="230" cy="98" r="4"/>
          <circle cx="344" cy="34" r="4"/>
          <circle cx="572" cy="44" r="4"/>
          <circle cx="820" cy="50" r="4"/>
          <g class="ch-music__bird" transform="translate(24 30)">
            <path class="ch-music__bird-body" d="M0 17Q14 3 28 16 43 2 60 8 50 21 32 21 20 31 1 27 9 24 12 20 6 20 0 17Z"/>
            <path class="ch-music__bird-wing" d="M14 19Q23 10 31 17"/>
          </g>
        </svg>
        <svg class="ch-music__notes" viewBox="0 0 820 120" aria-hidden="true" focusable="false">
          <g class="ch-music__notes-float">
            <g class="ch-music__note" transform="translate(160 18) scale(1.3)">
              <path d="M10 0v20c-4-3-11-1-11 5 0 5 7 6 11 2 2-2 3-4 3-7V8l18-4v15c-4-3-11-1-11 5 0 5 7 6 11 2 2-2 3-4 3-7V0z"/>
            </g>
            <g class="ch-music__note" transform="translate(360 60) scale(.98)">
              <path d="M10 0v20c-4-3-11-1-11 5 0 5 7 6 11 2 2-2 3-4 3-7V8l18-4v15c-4-3-11-1-11 5 0 5 7 6 11 2 2-2 3-4 3-7V0z"/>
            </g>
            <g class="ch-music__note" transform="translate(560 100) scale(.88)">
              <path d="M10 0v20c-4-3-11-1-11 5 0 5 7 6 11 2 2-2 3-4 3-7V8l18-4v15c-4-3-11-1-11 5 0 5 7 6 11 2 2-2 3-4 3-7V0z"/>
            </g>
          </g>
        </svg>
        <div class="wrap">
          <h3 class="ch-sub">Music</h3>
          <p class="ch-music__intro">${esc(ch.music.intro)}</p>
          <ul class="inst-grid">${instruments}</ul>
          <div class="ch-music__lower">
            <div>
              <h4>Songs, chants and dances</h4>
              <dl class="forms">${forms}</dl>
            </div>
            ${contexts}
          </div>
          ${timeline}
        </div>
      </section>

      <section class="ch-sig wrap" aria-label="Cultural significance">
        <figure class="pull">
          <blockquote><p>${esc(ch.significance.quote)}</p></blockquote>
          <figcaption>${esc(ch.significance.quoteBy)}</figcaption>
        </figure>
        <div class="ch-sig__text">
          <h3>Why it matters</h3>
          <p>${esc(ch.significance.text)}${cite(ch.significance.refs)}</p>
          <div class="verify">
            <h4><span class="flag">To verify</span> Still missing from this chapter</h4>
            <ul>${ch.toVerify
              .map((t) =>
                typeof t === "string"
                  ? `<li>${esc(t)}</li>`
                  : `<li>${esc(t.text)}${cite(t.refs)}</li>`
              )
              .join("")}</ul>
          </div>
        </div>
      </section>

      <nav class="ch-nav wrap" aria-label="Chapter navigation">
        ${prev ? `<a href="#chapter-${prev.id}" class="ch-nav__prev"><span>Previous chapter</span>${esc(prev.name)}</a>` : `<span></span>`}
        <a href="#communities" class="ch-nav__back" data-goto="${i}">All communities</a>
        ${next ? `<a href="#chapter-${next.id}" class="ch-nav__next"><span>Next chapter</span>${esc(next.name)}</a>` : `<a href="#comparison" class="ch-nav__next"><span>Next</span>Side by side</a>`}
      </nav>
    </article>`;
  }

  function renderChapters() {
    const cs = D.communities;
    const container = $("#chapters");
    const header = `<header class="part-head part-head--chapters wrap"><p class="part-head__part">Part two</p><h2>The chapters</h2></header>`;
    const renderSelected = (i) => {
      const c = cs[i];
      if (!c) return;
      container.innerHTML = header + renderChapter(c, i, cs);
      document.dispatchEvent(new CustomEvent("emag:chapter-rendered", { detail: { index: i, id: c.id } }));
    };

    renderSelected(0);
    document.addEventListener("emag:community", (e) => renderSelected(e.detail.index));
  }

  /* ---------- comparison --------------------------------------------- */
  function renderComparison() {
    const C = D.comparison;
    const cs = D.communities;
    $("#cmpIntro").textContent = C.intro;

    $("#matrixChips").innerHTML =
      `<button class="chip" aria-pressed="true" data-col="all">All</button>` +
      cs.map((c) => `<button class="chip" aria-pressed="false" data-col="${c.id}">${esc(c.name)}</button>`).join("");

    const head = `<thead><tr><th scope="col">Theme</th>${cs
      .map((c) => `<th scope="col" data-col="${c.id}"><a href="#chapter-${c.id}">${esc(c.name)}</a></th>`)
      .join("")}</tr></thead>`;
    const body = C.themes
      .map(
        (t) => `<tr><th scope="row">${esc(t.label)}</th>${cs
          .map((c) => {
            const v = t.cells[c.id] || "";
            const missing = /not found/i.test(v);
            const verify = /to verify/i.test(v);
            return `<td data-col="${c.id}" class="${missing ? "is-missing" : ""} ${verify ? "is-verify" : ""}">${esc(v)}</td>`;
          })
          .join("")}</tr>`
      )
      .join("");
    $("#matrixTable").innerHTML = `<caption class="visually-hidden">Comparison of themes across the five communities</caption>${head}<tbody>${body}</tbody>`;

    const block = (x) => `<div class="contrast__item"><h4>${esc(x.title)}</h4><p>${esc(x.text)}${cite(x.refs)}</p></div>`;
    $("#similarities").innerHTML = C.similarities.map(block).join("");
    $("#differences").innerHTML = C.differences.map(block).join("");
  }

  /* ---------- significance, conclusion, references -------------------- */
  function renderClosing() {
    $("#sigGrid").innerHTML = D.significance
      .map((s) => `<div class="signif__item"><h3>${esc(s.title)}</h3><p>${esc(s.text)}${cite(s.refs)}</p></div>`)
      .join("");

    $("#conBody").innerHTML = D.conclusion.map((p) => `<p>${esc(p)}</p>`).join("");

    const tierName = {
      primary: "community or field source",
      scholarly: "scholarly",
      institutional: "institutional",
      secondary: "secondary",
      unread: "not yet consulted"
    };
    const sorted = refKeys.slice().sort((a, b) =>
      D.references[a].text.replace(/<[^>]+>/g, "").localeCompare(D.references[b].text.replace(/<[^>]+>/g, ""))
    );
    $("#refList").innerHTML = sorted
      .map((k) => {
        const r = D.references[k];
        // r.text is trusted editorial HTML (only <i> tags) from data.js
        return `<li id="ref-${k}" class="ref">
          <span class="tier tier--${r.tier}">${tierName[r.tier]}</span>
          <span class="ref__text">${r.text}</span>
          ${r.url ? `<a class="ref__url" href="${esc(r.url)}" rel="noopener" target="_blank">${esc(r.url.replace(/^https?:\/\//, "").slice(0, 60))}${r.url.length > 68 ? "…" : ""}</a>` : ""}
        </li>`;
      })
      .join("");

    $("#protocol").innerHTML = D.protocol.map((p) => `<li>${esc(p)}</li>`).join("");
    $("#acks").textContent = D.acknowledgments;
    $("#colophon").textContent =
      `Prepared by ${D.meta.group.join(", ")} for ${D.meta.teacher}, ${D.meta.section}, ${D.meta.year}. ` +
      "Set in Big Shoulders Display and Newsreader.";
  }

  function renderImageCredits() {
    $("#imageCreditList").innerHTML = D.communities
      .map((c) => {
        const credit = c.cover.credit;
        return `<li class="image-credit">
          <h3>${esc(c.name)}</h3>
          <p><cite>${esc(credit.title)}</cite> · Creator listed on Commons: ${esc(credit.creator)}.</p>
          <p>Source: <a href="${esc(credit.pageUrl)}" target="_blank" rel="noopener noreferrer">${esc(credit.source)} file page</a> ·
            <a href="${esc(credit.originalUrl)}" target="_blank" rel="noopener noreferrer">Original image</a></p>
          <p>License: <a href="${esc(credit.licenseUrl)}" target="_blank" rel="noopener noreferrer">${esc(credit.license)}</a>.</p>
        </li>`;
      })
      .join("");
  }

  /* ---------- menu ---------------------------------------------------- */
  function renderMenu() {
    const items = [
      ["#cover", "Cover"],
      ["#introduction", "Introduction"],
      ["#communities", "Choose a community"],
      ...D.communities.map((c, i) => [`#chapter-${c.id}`, `${i + 1}. ${c.name}`]),
      ["#comparison", "Side by side"],
      ["#significance", "Why it matters"],
      ["#conclusion", "What we learned"],
      ["#image-credits", "Image credits"],
      ["#references", "References"]
    ];
    $("#menuList").innerHTML = items
      .map(([h, t]) => `<li><a href="${h}">${esc(t)}</a></li>`)
      .join("");
  }

  window.EMAGRender = {
    all() {
      renderCover();
      renderIntro();
      renderSelector();
      renderChapters();
      renderComparison();
      renderClosing();
      renderImageCredits();
      renderMenu();
    },
    selectorPanelHTML
  };
})();
