/* =========================================================
   KONFIGURATION – hier änderst du Texte, Preise und Projekte.
   Alles andere weiter unten musst du normalerweise nicht anfassen.
   ========================================================= */
const CONFIG = {
  // Formspree: ersetze FORMSPREE_ID durch deine ID (z. B. "xyzabcde")
  formspreeId: "FORMSPREE_ID",

  name: "Bleron Mustafa",
  email: "hallo@beispiel.ch",          // deine E-Mail-Adresse

  texts: {
    priceNote: "Alle Preise sind Richtpreise in CHF. Den genauen Preis besprechen wir zusammen – du zahlst erst nach Absprache.",
    thanksText: "Deine Bestellung ist bei mir angekommen. Ich melde mich innert 48 Stunden bei dir, damit wir alles in Ruhe besprechen können.",
    personalNote: "Ich bin noch in der Ausbildung – genau darum nehme ich mir für jedes Projekt extra viel Zeit. Du bekommst keine Seite von der Stange, sondern eine, die wir zusammen entwickeln.",
  },

  // Über mich: Absätze
  about: [
    "Ich heisse Bleron und mache die Ausbildung zum Mediamatiker EFZ. Schon bevor die Lehre begonnen hat, habe ich angefangen, eigene Webseiten zu bauen – und dabei gemerkt, wie viel Freude es macht, wenn aus einer Idee etwas Echtes wird.",
    "Heute verbinde ich Gestaltung und Technik: Ich skizziere, entwerfe in Illustrator und setze die Seite danach sauber in HTML, CSS und JavaScript um – oder richte dir WordPress bzw. Wix so ein, dass du selbst weiterarbeiten kannst.",
    "Mir ist wichtig, dass du dich verstanden fühlst. Darum erkläre ich alles in einfachen Worten, halte dich auf dem Laufenden und arbeite so lange an deiner Seite, bis sie sich richtig anfühlt.",
  ],
  facts: [
    ["Ausbildung", "Mediamatiker EFZ"],
    ["Lehrjahr", "1. Lehrjahr"],
    ["Wohnort", "Schweiz"],
    ["Sprache", "Deutsch"],
    ["Antwortzeit", "innert 48 Stunden"],
  ],

  // Laufband auf der Startseite
  marquee: ["Webdesign", "HTML & CSS", "JavaScript", "WordPress", "Wix", "Logo-Design", "Illustrator", "InDesign", "After Effects", "CapCut"],

  skillGroups: [
    { title: "Web", text: "Saubere, schnelle Webseiten – von Hand programmiert.", items: ["HTML", "CSS", "JavaScript", "Visual Studio Code"] },
    { title: "Gestaltung", text: "Logos, Layouts und Grafiken, die zu dir passen.", items: ["Illustrator", "InDesign"] },
    { title: "Video", text: "Kurze Clips und Animationen für Web und Social Media.", items: ["After Effects", "CapCut"] },
  ],

  // Über mich: Mein Weg (bitte an deine Geschichte anpassen)
  timeline: [
    { time: "Vor der Lehre", title: "Die ersten Zeilen Code", text: "Neugier auf Webseiten – die ersten eigenen Versuche mit HTML und CSS." },
    { time: "2026", title: "Start als Mediamatiker EFZ", text: "Beginn der Ausbildung: Web, Gestaltung, Video, Marketing und Projektarbeit." },
    { time: "Heute", title: "Offen für deine Seite", text: "Ich nehme ausgewählte Projekte an und baue Webseiten für kleine Firmen und Vereine." },
  ],

  // Beispiel-Auswahl für die Konfigurator-Vorschau auf der Startseite
  example: { title: "Beispiel: Verein", type: "coded", extras: { page: 2, form: 1 } },

  // Versprechen (Startseite). icon: price | talk | update | pay
  promises: [
    { icon: "price", title: "Klare Preise", text: "Du siehst von Anfang an, womit du rechnen kannst." },
    { icon: "talk", title: "Kein Fachchinesisch", text: "Ich erkläre alles so, dass du es wirklich verstehst." },
    { icon: "update", title: "Immer informiert", text: "Du weisst jederzeit, wo dein Projekt gerade steht." },
    { icon: "pay", title: "Zahlung nach Absprache", text: "Keine Vorauskasse online – wir klären alles zuerst." },
  ],

  // Referenz-Projekte (image leer = gezeichneter Platzhalter)
  projects: [
    { title: "Projekt 1", tag: "One-Pager", year: "2026", text: "Kurze Beschreibung: Für wen war das Projekt, was war das Ziel und was hast du umgesetzt?", services: ["Konzept", "Design", "HTML & CSS"], link: "#", image: "", color: "#3a2d97" },
    { title: "Projekt 2", tag: "Webseite", year: "2026", text: "Kurze Beschreibung: Für wen war das Projekt, was war das Ziel und was hast du umgesetzt?", services: ["WordPress", "Texte", "Bilder"], link: "#", image: "", color: "#adadc2" },
    { title: "Projekt 3", tag: "Shop", year: "2026", text: "Kurze Beschreibung: Für wen war das Projekt, was war das Ziel und was hast du umgesetzt?", services: ["Produktfotos", "Logo", "Social Media"], link: "#", image: "", color: "#d3d7dd" },
  ],

  contact: [
    { label: "E-Mail", value: "hallo@beispiel.ch", href: "mailto:hallo@beispiel.ch" },
    { label: "Instagram", value: "@deinname", href: "https://instagram.com/" },
  ],

  faq: [
    { q: "Warum steht überall «ab»?", a: "Jede Seite ist etwas anders. Die Preise zeigen dir, womit du mindestens rechnen kannst. Nach unserem Gespräch bekommst du einen festen Preis – ohne Überraschungen." },
    { q: "Was ist der Unterschied zwischen Coded und WordPress / Wix?", a: "Coded heisst: Ich programmiere deine Seite von Hand. Sie ist schlank, schnell und günstiger. Mit WordPress oder Wix kannst du Texte und Bilder später selbst ändern – dafür ist die Einrichtung aufwändiger." },
    { q: "Muss ich online bezahlen?", a: "Nein. Du schickst mir nur deine Auswahl. Bezahlt wird erst, wenn wir alles besprochen haben und du einverstanden bist." },
    { q: "Wie lange dauert es, bis meine Seite online ist?", a: "Ein One-Pager ist meistens in 2–3 Wochen fertig. Grössere Seiten oder Shops brauchen etwas länger. Den genauen Zeitplan legen wir gemeinsam fest." },
    { q: "Brauche ich schon Texte und Bilder?", a: "Es hilft, ist aber kein Muss. Ich unterstütze dich gerne beim Formulieren und bei der Bildauswahl." },
    { q: "Kümmerst du dich auch um Domain und Hosting?", a: "Ja, ich helfe dir bei der Wahl und Einrichtung. Die laufenden Kosten für Domain und Hosting bezahlst du direkt beim Anbieter." },
  ],

  // Art der Umsetzung
  types: [
    { id: "coded", label: "Coded", desc: "Von Hand programmiert – schlank, schnell und günstiger." },
    { id: "cms", label: "WordPress / Wix", desc: "Du kannst Texte und Bilder später selbst bearbeiten." },
  ],

  // Basis-Paket (Preis je nach Umsetzung)
  base: {
    label: "Einfache Seite (One-Pager)",
    desc: "Eine Seite mit allen wichtigen Bereichen – responsive für Handy, Tablet und PC.",
    price: { coded: 390, cms: 590 },
  },

  // Extras. qty: true = Mengen-Auswahl (+ / -)
  extras: [
    { id: "page", label: "Weitere Seite", desc: "Zum Beispiel «Über uns», «Angebot» oder «Team».", price: { coded: 90, cms: 120 }, qty: true, max: 10 },
    { id: "form", label: "Kontaktformular", desc: "Anfragen landen direkt in deinem Postfach.", price: { coded: 80, cms: 100 } },
    { id: "blog", label: "Blog", desc: "Neuigkeiten und Beiträge veröffentlichen.", price: { coded: 190, cms: 240 } },
    { id: "shop", label: "Shop", desc: "Produkte zeigen und verkaufen.", price: { coded: 490, cms: 690 } },
    { id: "lang", label: "Zweite Sprache", desc: "Zum Beispiel Französisch oder Englisch.", price: { coded: 150, cms: 190 } },
    { id: "seo", label: "SEO-Grundpaket", desc: "Damit du bei Google besser gefunden wirst.", price: { coded: 120, cms: 150 } },
    { id: "logo", label: "Logo-Design", desc: "Ein einfaches, modernes Logo, gestaltet in Illustrator.", price: { coded: 150, cms: 150 } },
  ],

  storageKey: "bm-cart-v1",
};

/* =========================================================
   Hilfsfunktionen
   ========================================================= */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const chf = (n) => "CHF " + n.toLocaleString("de-CH");
const fromChf = (n) => "ab " + chf(n);
const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const isExternal = (href) => /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "";
const typeById = (id) => CONFIG.types.find((t) => t.id === id) || CONFIG.types[0];
const extraById = (id) => CONFIG.extras.find((e) => e.id === id);
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

const ARROW = '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const TICK = '<svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 7.3l2.6 2.6L11 4.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICONS = {
  price: '<path d="M4 6h24v20H4zM4 12h24M10 19h6" />',
  talk: '<path d="M5 7h22v14H14l-6 5v-5H5z" /><path d="M10 13h12M10 17h7" />',
  update: '<circle cx="16" cy="16" r="11" /><path d="M16 9v7l5 3" />',
  pay: '<path d="M16 4l10 4v7c0 6.5-4.3 11-10 13C10.3 26 6 21.5 6 15V8z" /><path d="M11.5 16l3 3 6-6" />',
};

/* =========================================================
   Warenkorb (Daten)
   ========================================================= */
function itemLines(item) {
  const lines = [{ label: CONFIG.base.label, price: CONFIG.base.price[item.type] }];
  for (const ex of CONFIG.extras) {
    const qty = item.extras[ex.id] || 0;
    if (qty) lines.push({ label: ex.qty ? `${ex.label} × ${qty}` : ex.label, price: ex.price[item.type] * qty });
  }
  return lines;
}
const itemTotal = (item) => itemLines(item).reduce((s, l) => s + l.price, 0);
const cartTotal = () => cart.reduce((s, i) => s + itemTotal(i), 0);

function loadCart() {
  try {
    const data = JSON.parse(localStorage.getItem(CONFIG.storageKey)) || [];
    // nur gültige Einträge übernehmen (falls die Konfig geändert wurde)
    return data.filter((i) => i && CONFIG.types.some((t) => t.id === i.type)).map((i) => {
      const extras = {};
      for (const [id, qty] of Object.entries(i.extras || {})) {
        const ex = extraById(id);
        if (ex && qty > 0) extras[id] = ex.qty ? Math.min(qty, ex.max || 99) : 1;
      }
      return { id: i.id || uid(), type: i.type, extras };
    });
  } catch { return []; }
}
function saveCart() {
  try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(cart)); } catch { /* Speicher gesperrt */ }
  updateCartViews();
}

let cart = loadCart();

/* =========================================================
   Allgemeine Inhalte (auf allen Seiten)
   ========================================================= */
function renderCommon() {
  $$("[data-config]").forEach((el) => {
    const key = el.dataset.config;
    el.textContent = CONFIG.texts[key] ?? CONFIG[key] ?? "";
  });

  // Preise in Texten, z. B. data-price="base.coded" oder "extra.logo"
  $$("[data-price]").forEach((el) => {
    const [kind, id] = el.dataset.price.split(".");
    const price = kind === "base" ? CONFIG.base.price[id] : Math.min(...Object.values(extraById(id).price));
    el.textContent = fromChf(price);
  });


  const fc = $("#footerContact");
  if (fc) fc.innerHTML = CONFIG.contact.map((c) => `<li><a href="${esc(c.href)}"${isExternal(c.href)}>${esc(c.value)}</a></li>`).join("");
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
}

// Gezeichneter Platzhalter, solange kein Projektbild da ist
function projectMedia(p) {
  if (p.image) return `<img src="${esc(p.image)}" alt="" loading="lazy" width="800" height="600">`;
  return `<div class="mock" style="--mock-c:${esc(p.color)}" aria-hidden="true">
    <div class="mock__win"><div class="mock__dots"><i></i><i></i><i></i></div>
      <div class="mock__hero"><div class="mock__lines"><span></span><span></span><span></span><span></span></div><div class="mock__img"></div></div>
    </div></div>`;
}

/* =========================================================
   Startseite
   ========================================================= */
function renderHome() {
  const marquee = $("#marquee");
  if (marquee) {
    const items = CONFIG.marquee.map((w) => `<li>${esc(w)}</li>`).join("");
    marquee.innerHTML = items + items; // doppelt für endloses Laufen
  }

  const teaser = $("#workTeaser");
  if (teaser) {
    teaser.innerHTML = CONFIG.projects.slice(0, 3).map((p, i) => `
      <a class="work" href="projekte.html#projekt-${i + 1}">
        <div class="work__media" data-curtain style="--d:${i * 0.12}s">${projectMedia(p)}
          <span class="work__view">Ansehen ${ARROW}</span></div>
        <div class="work__meta" data-reveal style="--d:${i * 0.12 + 0.2}s">
          <h3 class="work__title">${esc(p.title)}</h3>
          <span class="work__tag">${esc(p.tag)} · ${esc(p.year)}</span>
        </div>
      </a>`).join("");
  }

  // Vorschau: Beispiel-Auswahl, gerechnet mit den echten Preisen
  const preview = $("#examplePreview");
  if (preview) {
    const ex = CONFIG.example;
    preview.innerHTML = `
      <div class="receipt__head"><h3>${esc(ex.title)}</h3><span class="hand">${esc(typeById(ex.type).label)}</span></div>
      <ul class="receipt__list">${itemLines(ex).map((l) => `<li><span>${esc(l.label)}</span><span>${chf(l.price)}</span></li>`).join("")}</ul>
      <div class="receipt__total"><span>Total</span><strong>${fromChf(itemTotal(ex))}</strong></div>
      <p class="receipt__note">${esc(CONFIG.texts.priceNote)}</p>`;
  }

  const promises = $("#promises");
  if (promises) {
    promises.innerHTML = CONFIG.promises.map((p, i) => `
      <li class="promise" data-reveal style="--d:${i * 0.08}s">
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[p.icon] || ICONS.price}</svg>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.text)}</p>
      </li>`).join("");
  }

  const note = $("#personalNote");
  if (note) note.innerHTML = `<p>${esc(CONFIG.texts.personalNote)}</p>`;
}

/* =========================================================
   Über mich
   ========================================================= */
function renderAbout() {
  const text = $("#aboutText");
  if (!text) return;
  text.innerHTML = CONFIG.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#facts").innerHTML = CONFIG.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
  $("#skillGroups").innerHTML = CONFIG.skillGroups.map((g, i) => `
    <article class="skill-group" data-reveal style="--d:${i * 0.1}s">
      <h3>${esc(g.title)}</h3>
      <p>${esc(g.text)}</p>
      <ul>${g.items.map((s) => `<li class="chip">${esc(s)}</li>`).join("")}</ul>
    </article>`).join("");
  $("#timeline").innerHTML = CONFIG.timeline.map((t, i) => `
    <li data-reveal style="--d:${i * 0.1}s">
      <time>${esc(t.time)}</time>
      <h3>${esc(t.title)}</h3>
      <p>${esc(t.text)}</p>
    </li>`).join("");
}

/* =========================================================
   Projekte mit Filter
   ========================================================= */
function initProjects() {
  const list = $("#caseList");
  if (!list) return;

  list.innerHTML = CONFIG.projects.map((p, i) => `
    <article class="case" id="projekt-${i + 1}" data-tag="${esc(p.tag)}">
      <div class="case__media" data-curtain>${projectMedia(p)}</div>
      <div data-reveal style="--d:.15s">
        <span class="case__tag">${esc(p.tag)} · ${esc(p.year)}</span>
        <h2>${esc(p.title)}</h2>
        <p class="case__text">${esc(p.text)}</p>
        <ul class="case__info" aria-label="Leistungen">
          ${p.services.map((s) => `<li class="chip">${esc(s)}</li>`).join("")}
        </ul>
        <a class="text-link" href="${esc(p.link)}"${isExternal(p.link)}>Projekt ansehen <span aria-hidden="true">→</span><span class="visually-hidden">: ${esc(p.title)}</span></a>
      </div>
    </article>`).join("");

  const tags = ["Alle", ...new Set(CONFIG.projects.map((p) => p.tag))];
  const filters = $("#filters");
  filters.innerHTML = tags.map((t, i) => `<button class="filter" type="button" aria-pressed="${i === 0}" data-filter="${esc(t)}">${esc(t)}</button>`).join("");

  filters.addEventListener("click", (ev) => {
    const btn = ev.target.closest("[data-filter]");
    if (!btn) return;
    const tag = btn.dataset.filter;
    $$(".filter", filters).forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    let shown = 0;
    $$(".case", list).forEach((c) => {
      const match = tag === "Alle" || c.dataset.tag === tag;
      if (match) {
        shown++;
        c.hidden = false;
        requestAnimationFrame(() => c.classList.remove("is-hiding"));
        $$("[data-reveal],[data-curtain]", c).forEach((el) => el.classList.add("is-visible"));
      } else {
        c.classList.add("is-hiding");
        setTimeout(() => { if (c.classList.contains("is-hiding")) c.hidden = true; }, 300);
      }
    });
    $("#filterStatus").textContent = `${shown} ${shown === 1 ? "Projekt" : "Projekte"} angezeigt`;
  });
}

/* =========================================================
   Konfigurator (angebot.html)
   ========================================================= */
function initConfigurator() {
  const form = $("#configForm");
  if (!form) return;

  const params = new URLSearchParams(location.search);
  let editingId = null;
  let draft = { type: CONFIG.types.some((t) => t.id === params.get("typ")) ? params.get("typ") : CONFIG.types[0].id, extras: {} };
  let lastTotal = null;

  // Umsetzung
  $("#typeGrid").innerHTML = CONFIG.types.map((t) => `
    <div class="type-card">
      <input type="radio" name="type" id="type-${t.id}" value="${t.id}">
      <label for="type-${t.id}">
        <span class="type-card__top"><span class="type-card__name">${esc(t.label)}</span><span class="type-card__radio" aria-hidden="true"></span></span>
        <span class="type-card__desc">${esc(t.desc)}</span>
        <span class="type-card__price" data-type-price="${t.id}"></span>
      </label>
    </div>`).join("");

  // Basis
  $("#baseOption").innerHTML = `
    <span class="option__included" aria-hidden="true">${TICK}</span>
    <div><span class="option__label">${esc(CONFIG.base.label)} <span class="visually-hidden">(immer dabei)</span></span>
    <span class="option__desc">${esc(CONFIG.base.desc)}</span></div>
    <span class="option__price" id="basePrice"></span>`;

  // Extras
  $("#extrasList").innerHTML = CONFIG.extras.map((e) => `
    <div class="option" data-extra="${e.id}">
      <span class="check"><input type="checkbox" id="ex-${e.id}" value="${e.id}" aria-describedby="exd-${e.id} exp-${e.id}"><span aria-hidden="true">${TICK}</span></span>
      <div><label class="option__label" for="ex-${e.id}">${esc(e.label)}</label>
      <span class="option__desc" id="exd-${e.id}">${esc(e.desc)}</span></div>
      <span class="option__price" id="exp-${e.id}"></span>
      ${e.qty ? `<div class="stepper" role="group" aria-label="Anzahl ${esc(e.label)}">
        <button type="button" data-step="-1" aria-label="${esc(e.label)}: eine weniger">−</button>
        <output id="qty-${e.id}" aria-live="polite">0</output>
        <button type="button" data-step="1" aria-label="${esc(e.label)}: eine mehr">+</button>
      </div>` : ""}
    </div>`).join("");

  function update() {
    const t = draft.type;
    $(`#type-${t}`).checked = true;
    CONFIG.types.forEach((type) => {
      $(`[data-type-price="${type.id}"]`).textContent = "Deine Auswahl: " + fromChf(itemTotal({ type: type.id, extras: draft.extras }));
    });
    $("#basePrice").textContent = fromChf(CONFIG.base.price[t]);

    CONFIG.extras.forEach((e) => {
      const qty = draft.extras[e.id] || 0;
      const row = $(`[data-extra="${e.id}"]`);
      row.classList.toggle("is-active", qty > 0);
      $(`#ex-${e.id}`).checked = qty > 0;
      $(`#exp-${e.id}`).textContent = fromChf(e.price[t]) + (e.qty ? " pro Seite" : "");
      if (e.qty) {
        $(`#qty-${e.id}`).textContent = qty;
        $('[data-step="-1"]', row).disabled = qty === 0;
        $('[data-step="1"]', row).disabled = qty >= (e.max || 99);
      }
    });

    // Quittung: neue Zeilen kurz animieren
    const before = new Set($$("#receiptList li").map((li) => li.dataset.key));
    $("#receiptType").textContent = typeById(t).label;
    $("#receiptList").innerHTML = itemLines(draft).map((l) => {
      const key = l.label.replace(/ × \d+$/, "");
      return `<li data-key="${esc(key)}"${before.size && !before.has(key) ? ' class="is-new"' : ""}><span>${esc(l.label)}</span><span>${chf(l.price)}</span></li>`;
    }).join("");

    const total = itemTotal(draft);
    const totalEl = $("#configTotal");
    totalEl.textContent = fromChf(total);
    if (lastTotal !== null && lastTotal !== total) { totalEl.classList.remove("tick"); void totalEl.offsetWidth; totalEl.classList.add("tick"); }
    lastTotal = total;
  }

  function reset(message = "") {
    editingId = null;
    draft = { type: draft.type, extras: {} };
    $("#addBtnLabel").textContent = "In den Warenkorb";
    $("#cancelEditBtn").hidden = true;
    $("#configFeedback").innerHTML = message;
    history.replaceState(null, "", location.pathname);
    update();
  }

  // Bearbeiten: angebot.html?edit=ID
  const editItem = cart.find((i) => i.id === params.get("edit"));
  if (editItem) {
    editingId = editItem.id;
    draft = { type: editItem.type, extras: { ...editItem.extras } };
    $("#addBtnLabel").textContent = "Änderung speichern";
    $("#cancelEditBtn").hidden = false;
    $("#configFeedback").textContent = "Du bearbeitest ein Paket aus deinem Warenkorb.";
  }

  $("#typeGrid").addEventListener("change", (ev) => { draft.type = ev.target.value; update(); });
  $("#extrasList").addEventListener("change", (ev) => {
    if (ev.target.type !== "checkbox") return;
    const id = ev.target.value;
    if (ev.target.checked) draft.extras[id] = Math.max(1, draft.extras[id] || 0); else delete draft.extras[id];
    update();
  });
  $("#extrasList").addEventListener("click", (ev) => {
    const btn = ev.target.closest("[data-step]");
    if (!btn) return;
    const ex = extraById(btn.closest("[data-extra]").dataset.extra);
    const qty = Math.min(ex.max || 99, Math.max(0, (draft.extras[ex.id] || 0) + Number(btn.dataset.step)));
    if (qty) draft.extras[ex.id] = qty; else delete draft.extras[ex.id];
    update();
  });

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const item = { id: editingId || uid(), type: draft.type, extras: { ...draft.extras } };
    const idx = cart.findIndex((i) => i.id === editingId);
    if (idx >= 0) cart[idx] = item; else cart.push(item);
    flyToCart($("#addBtn"), () => { saveCart(); bumpCount(); });
    reset(`${idx >= 0 ? "Änderung gespeichert." : "Super, dein Paket liegt im Warenkorb."} <a class="text-link" href="bestellung.html">Zur Bestellung <span aria-hidden="true">→</span></a>`);
  });
  $("#cancelEditBtn").addEventListener("click", () => reset("Bearbeiten abgebrochen."));

  update();
}

function initFaq() {
  const list = $("#faqList");
  if (!list) return;
  list.innerHTML = CONFIG.faq.map((f) => `<details><summary>${esc(f.q)}</summary><div class="faq__answer"><p>${esc(f.a)}</p></div></details>`).join("");
}

/* =========================================================
   Warenkorb-Seitenleiste (auf allen Seiten)
   ========================================================= */
let drawer;

function cartItemHtml(item, n, withActions = true) {
  return `
    <li class="cart-item">
      <h3>Paket ${n + 1}</h3>
      <p class="cart-item__type">${esc(typeById(item.type).label)}</p>
      <ul class="cart-item__lines">${itemLines(item).map((l) => `<li><span>${esc(l.label)}</span><span>${fromChf(l.price)}</span></li>`).join("")}</ul>
      <div class="cart-item__sum"><span>Zwischentotal</span><span>${fromChf(itemTotal(item))}</span></div>
      ${withActions ? `<div class="cart-item__actions">
        <a class="link-btn" href="angebot.html?edit=${encodeURIComponent(item.id)}">Ändern<span class="visually-hidden"> Paket ${n + 1}</span></a>
        <button class="link-btn" type="button" data-remove="${esc(item.id)}">Entfernen<span class="visually-hidden"> Paket ${n + 1}</span></button>
      </div>` : ""}
    </li>`;
}

function initDrawer() {
  document.body.insertAdjacentHTML("beforeend", `
    <dialog class="drawer" id="cartDrawer" aria-labelledby="drawerTitle">
      <div class="drawer__inner">
        <div class="drawer__head">
          <h2 id="drawerTitle">Warenkorb</h2>
          <button class="icon-btn" type="button" data-close aria-label="Warenkorb schliessen">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M4 4l10 10M14 4 4 14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          </button>
        </div>
        <ul class="drawer__body" id="drawerList"></ul>
        <div class="cart-empty" id="drawerEmpty">
          <p class="hand">Noch leer hier.</p>
          <p>Stell dir im Konfigurator dein Paket zusammen.</p>
          <a class="btn" href="angebot.html">Zum Konfigurator <span class="btn__icon">${ARROW}</span></a>
        </div>
        <div class="drawer__foot" id="drawerFoot">
          <div class="drawer__total"><span>Total</span><strong id="drawerTotal"></strong></div>
          <p class="receipt__note">${esc(CONFIG.texts.priceNote)}</p>
          <a class="btn btn--block" href="bestellung.html">Bestellen <span class="btn__icon">${ARROW}</span></a>
        </div>
      </div>
    </dialog>`);
  drawer = $("#cartDrawer");

  $("#cartBtn").addEventListener("click", () => { updateCartViews(); drawer.showModal(); });
  drawer.addEventListener("click", (ev) => {
    if (ev.target === drawer || ev.target.closest("[data-close]")) drawer.close();
    const rm = ev.target.closest("[data-remove]");
    if (rm) {
      cart = cart.filter((i) => i.id !== rm.dataset.remove);
      saveCart();
      ($("[data-remove]", drawer) || $("[data-close]", drawer)).focus();
    }
  });
}

// Zahl im Header, Seitenleiste und Bestellseite aktualisieren
function updateCartViews() {
  const count = cart.length;
  const badge = $("#cartCount");
  if (badge) { badge.textContent = count; badge.classList.toggle("is-empty", count === 0); }

  if (drawer) {
    $("#drawerList").innerHTML = cart.map((item, n) => cartItemHtml(item, n)).join("");
    $("#drawerList").hidden = count === 0;
    $("#drawerEmpty").hidden = count > 0;
    $("#drawerFoot").hidden = count === 0;
    $("#drawerTotal").textContent = fromChf(cartTotal());
  }

  const items = $("#checkoutItems");
  if (items && $("#orderSuccess").hidden) {
    items.innerHTML = cart.map((item, n) => cartItemHtml(item, n)).join("");
    $("#checkoutTotal").textContent = fromChf(cartTotal());
    $("#checkout").hidden = count === 0;
    $("#checkoutEmpty").hidden = count > 0;
  }
}

function bumpCount() {
  const badge = $("#cartCount");
  badge.classList.remove("bump"); void badge.offsetWidth; badge.classList.add("bump");
}

// Kleiner Punkt fliegt vom Button zum Warenkorb
function flyToCart(fromEl, done) {
  const target = $("#cartBtn");
  if (reducedMotion() || !fromEl || !target || !fromEl.animate) { done(); return; }
  const a = fromEl.getBoundingClientRect(), b = target.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "fly-dot";
  dot.style.left = a.left + a.width / 2 - 8 + "px";
  dot.style.top = a.top + a.height / 2 - 8 + "px";
  document.body.append(dot);
  const dx = b.left + b.width / 2 - (a.left + a.width / 2), dy = b.top + b.height / 2 - (a.top + a.height / 2);
  dot.animate([
    { transform: "translate(0,0) scale(1)" },
    { transform: `translate(${dx * 0.45}px, ${dy * 0.45 - 120}px) scale(1.3)`, offset: 0.5 },
    { transform: `translate(${dx}px, ${dy}px) scale(.4)`, opacity: 0.6 },
  ], { duration: 750, easing: "cubic-bezier(.5,0,.3,1)" }).onfinish = () => { dot.remove(); done(); };
}

/* =========================================================
   Formulare + E-Mail-Versand (Formspree)
   ========================================================= */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+0-9 ()/.-]{7,20}$/;

function setError(input, msg) {
  $("#" + input.id + "Err").textContent = msg;
  input.setAttribute("aria-invalid", msg ? "true" : "false");
  return !msg;
}
function checkName(input) { return setError(input, input.value.trim().length < 2 ? "Bitte gib deinen Namen ein." : ""); }
function checkEmail(input) {
  const v = input.value.trim();
  return setError(input, !v ? "Bitte gib deine E-Mail-Adresse ein." : !EMAIL_RE.test(v) ? "Diese E-Mail-Adresse sieht nicht richtig aus (Beispiel: name@beispiel.ch)." : "");
}
function focusFirstError(form) { const el = $('[aria-invalid="true"]', form); if (el) el.focus(); }
function clearErrorsOnInput(form) {
  $$("input, textarea", form).forEach((el) => el.addEventListener("input", () => {
    if (el.getAttribute("aria-invalid") === "true") setError(el, "");
  }));
}

// Sendet an Formspree. Ohne ID: Demo-Modus (nichts wird gesendet)
async function sendForm(payload) {
  const demo = !CONFIG.formspreeId || CONFIG.formspreeId === "FORMSPREE_ID";
  if (demo) {
    console.info("Demo-Modus – diese Nachricht würde gesendet:\n\n" + (payload.bestellung || payload.nachricht));
    await new Promise((r) => setTimeout(r, 600));
    return { demo };
  }
  const res = await fetch(`https://formspree.io/f/${encodeURIComponent(CONFIG.formspreeId)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Formspree: " + res.status);
  return { demo };
}

function setBusy(btn, busy, label) {
  btn.disabled = busy;
  btn.firstElementChild.textContent = busy ? "Wird gesendet …" : label;
}

// Bestellung als gut lesbarer Text für die E-Mail
function buildOrderText(d) {
  const line = "----------------------------------------";
  const out = ["NEUE BESTELLUNG ÜBER DEINE WEBSEITE", line, "KONTAKT",
    `Name:    ${d.name}`, `Firma:   ${d.firma || "–"}`, `E-Mail:  ${d.email}`, `Telefon: ${d.telefon || "–"}`, line];
  cart.forEach((item, n) => {
    out.push(`PAKET ${n + 1} – Umsetzung: ${typeById(item.type).label}`);
    itemLines(item).forEach((l) => out.push(`  • ${l.label}: ${fromChf(l.price)}`));
    out.push(`  Zwischentotal: ${fromChf(itemTotal(item))}`, "");
  });
  out.push(line, `GESAMTPREIS: ${fromChf(cartTotal())}`, line, "NACHRICHT / WÜNSCHE", d.nachricht || "–");
  return out.join("\n");
}

function initCheckout() {
  const form = $("#orderForm");
  if (!form) return;
  clearErrorsOnInput(form);

  $("#checkoutItems").addEventListener("click", (ev) => {
    const rm = ev.target.closest("[data-remove]");
    if (!rm) return;
    cart = cart.filter((i) => i.id !== rm.dataset.remove);
    saveCart();
  });

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const status = $("#orderStatus"), btn = $("#orderBtn");
    status.textContent = "";
    if (!cart.length) { status.textContent = "Dein Warenkorb ist leer."; return; }

    const phone = $("#oPhone");
    const ok = [
      checkName($("#oName")),
      checkEmail($("#oEmail")),
      setError(phone, phone.value.trim() && !PHONE_RE.test(phone.value.trim()) ? "Bitte gib eine gültige Telefonnummer ein oder lass das Feld leer." : ""),
    ].every(Boolean);
    if (!ok) { focusFirstError(form); return; }

    const d = {
      name: $("#oName").value.trim(), firma: $("#oCompany").value.trim(), email: $("#oEmail").value.trim(),
      telefon: phone.value.trim(), nachricht: $("#oMessage").value.trim(),
    };
    setBusy(btn, true);
    try {
      const { demo } = await sendForm({
        ...d,
        gesamtpreis: fromChf(cartTotal()),
        bestellung: buildOrderText(d),
        _subject: `Neue Bestellung von ${d.name} (${fromChf(cartTotal())})`,
        _replyto: d.email,
        _gotcha: form.elements._gotcha.value,
      });
      // Erfolg
      $("#orderSuccess").hidden = false;
      $("#checkout").hidden = true;
      $("#orderDemo").hidden = !demo;
      $$("#progress li").forEach((li) => { li.className = "is-done"; li.removeAttribute("aria-current"); });
      $("#progress li:last-child").setAttribute("aria-current", "step");
      cart = [];
      saveCart();
      form.reset();
      $("#orderSuccess").focus();
      scrollTo({ top: 0, behavior: reducedMotion() ? "auto" : "smooth" });
    } catch (err) {
      console.error(err);
      status.textContent = `Das Senden hat leider nicht geklappt. Bitte versuche es nochmals oder schreib mir direkt an ${CONFIG.email}.`;
    } finally {
      setBusy(btn, false, "Bestellung absenden");
    }
  });
}

function initContactForm() {
  const form = $("#contactForm");
  if (!form) return;
  clearErrorsOnInput(form);

  $("#contactCards").innerHTML = CONFIG.contact.map((c) => `
    <a class="contact-card" href="${esc(c.href)}"${isExternal(c.href)}>
      <span><small>${esc(c.label)}</small><strong>${esc(c.value)}</strong></span>${ARROW}
    </a>`).join("");

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const status = $("#contactStatus"), btn = $("#contactBtn"), msg = $("#cMessage");
    status.textContent = "";
    const ok = [
      checkName($("#cName")),
      checkEmail($("#cEmail")),
      setError(msg, msg.value.trim().length < 5 ? "Bitte schreib mir eine kurze Nachricht." : ""),
    ].every(Boolean);
    if (!ok) { focusFirstError(form); return; }

    setBusy(btn, true);
    try {
      const name = $("#cName").value.trim();
      const { demo } = await sendForm({
        name, email: $("#cEmail").value.trim(), nachricht: msg.value.trim(),
        _subject: `Neue Kontaktanfrage von ${name}`, _replyto: $("#cEmail").value.trim(), _gotcha: form.elements._gotcha.value,
      });
      form.hidden = true;
      $("#contactDemo").hidden = !demo;
      $("#contactSuccess").hidden = false;
      $("#contactSuccess").focus();
    } catch (err) {
      console.error(err);
      status.textContent = `Das Senden hat leider nicht geklappt. Bitte schreib mir direkt an ${CONFIG.email}.`;
    } finally {
      setBusy(btn, false, "Nachricht senden");
    }
  });
}

/* =========================================================
   Header + Menü
   ========================================================= */
function initHeader() {
  const header = $(".site-header"), menuBtn = $("#menuBtn"), nav = $("#nav");
  let lastY = scrollY;

  // Rand beim Scrollen, beim Runterscrollen ausblenden
  addEventListener("scroll", () => {
    const y = scrollY;
    header.classList.toggle("is-scrolled", y > 10);
    header.classList.toggle("is-hidden", y > 400 && y > lastY && !nav.classList.contains("is-open"));
    lastY = y;
  }, { passive: true });

  const setMenu = (open) => {
    menuBtn.setAttribute("aria-expanded", String(open));
    $("#menuLabel").textContent = open ? "Menü schliessen" : "Menü öffnen";
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  };
  menuBtn.addEventListener("click", () => {
    const open = menuBtn.getAttribute("aria-expanded") !== "true";
    setMenu(open);
    if (open) setTimeout(() => $("a", nav).focus(), 50);
  });
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); menuBtn.focus(); }
  });
  matchMedia("(min-width: 900px)").addEventListener("change", () => setMenu(false));
}

/* =========================================================
   Animationen
   ========================================================= */
// Überschrift Wort für Wort einblenden
function splitWords(el) {
  let i = 0;
  const wrap = (node, free) => {
    const outer = document.createElement("span"), inner = document.createElement("span");
    outer.className = free ? "w w--free" : "w";
    inner.style.setProperty("--i", i++);
    outer.append(inner);
    return { outer, inner };
  };
  const walk = (parent) => {
    [...parent.childNodes].forEach((child) => {
      if (child.nodeType === 3) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(" "); return; }
          const { outer, inner } = wrap();
          inner.textContent = part;
          frag.append(outer);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1 && child.classList.contains("scribble")) {
        const { outer, inner } = wrap(child, true);
        child.replaceWith(outer);
        inner.append(child);
      } else if (child.nodeType === 1) {
        walk(child);
      }
    });
  };
  el.setAttribute("aria-label", el.textContent.replace(/\s+/g, " ").trim());
  walk(el);
  $$(".w", el).forEach((w) => w.setAttribute("aria-hidden", "true"));
}

function initAnimations() {
  $$("[data-split]").forEach(splitWords);

  // Start-Animation auslösen, sobald die Seite gezeichnet ist
  requestAnimationFrame(() => requestAnimationFrame(() => document.documentElement.classList.add("is-loaded")));

  // Einblenden beim Scrollen
  const items = $$("[data-reveal], [data-curtain]");
  if (!("IntersectionObserver" in window)) items.forEach((el) => el.classList.add("is-visible"));
  else {
    // Bilder mit Vorhang sind anfangs ganz verdeckt – darum wird ihr Eltern-Element beobachtet
    const targets = new Map();
    items.forEach((el) => {
      const watch = el.hasAttribute("data-curtain") ? el.parentElement : el;
      targets.set(watch, [...(targets.get(watch) || []), el]);
    });
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      targets.get(e.target).forEach((el) => el.classList.add("is-visible"));
      io.unobserve(e.target);
    }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    targets.forEach((_, watch) => io.observe(watch));
  }

  // Startseite: Objekte der Szene folgen leicht der Maus
  const scene = $("#heroScene");
  if (scene && !reducedMotion() && matchMedia("(pointer: fine)").matches) {
    scene.addEventListener("pointermove", (ev) => {
      const r = scene.getBoundingClientRect();
      scene.style.setProperty("--mx", ((ev.clientX - r.left) / r.width - 0.5).toFixed(3));
      scene.style.setProperty("--my", ((ev.clientY - r.top) / r.height - 0.5).toFixed(3));
    });
    scene.addEventListener("pointerleave", () => { scene.style.setProperty("--mx", 0); scene.style.setProperty("--my", 0); });
  }
}

/* ---------- Start ---------- */
renderCommon();
renderHome();
renderAbout();
initProjects();
initConfigurator();
initFaq();
initDrawer();
initCheckout();
initContactForm();
updateCartViews();
initHeader();
initAnimations();
