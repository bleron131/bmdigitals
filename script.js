/* =========================================================
   KONFIGURATION – hier kannst du alles anpassen
   (Texte, Preise, Projekte, Kontakt, Formspree)
   ========================================================= */
const CONFIG = {
  // Formspree: ersetze FORMSPREE_ID durch deine ID (z. B. "xyzabcde")
  formspreeId: "FORMSPREE_ID",

  // Allgemeine Texte
  texts: {
    name: "Bleron Mustafa",
    location: "Schweiz",
    heroEyebrow: "Mediamatiker EFZ · 1. Lehrjahr",
    heroText: "Ich gestalte und programmiere schlanke, moderne Webseiten – schnell, klar und auf jedem Gerät schön.",
    aboutTitle: "Design trifft Code.",
    about: [
      "Hallo, ich bin Bleron. Ich mache die Ausbildung zum Mediamatiker EFZ und bin im 1. Lehrjahr. Am liebsten baue ich Webseiten, die einfach zu bedienen sind und gut aussehen.",
      "Ich verbinde Gestaltung mit Technik: vom ersten Entwurf in Illustrator bis zur fertigen Seite in HTML, CSS und JavaScript. Für kleine Firmen, Vereine und Privatpersonen biete ich faire Preise und persönliche Betreuung.",
    ],
    photo: "", // Pfad zu deinem Foto, z. B. "img/bleron.jpg". Leer = Platzhalter
    configLead: "Wähle aus, was du brauchst. Der Preis passt sich sofort an. Danach legst du dein Paket in den Warenkorb und schickst mir unverbindlich deine Bestellung.",
    priceNote: "Alle Preise sind Richtpreise in CHF («ab»). Den genauen Preis bespreche ich mit dir persönlich – du zahlst erst nach Absprache.",
    contactText: "Du hast Fragen oder eine Idee? Schreib mir – ich melde mich in der Regel innerhalb von 1–2 Tagen.",
    thanksText: "Deine Bestellung ist bei mir angekommen. Ich melde mich so schnell wie möglich bei dir, um die Details zu besprechen.",
  },

  // Ablauf (3 Schritte über dem Konfigurator)
  steps: [
    { title: "Zusammenstellen", text: "Paket wählen und in den Warenkorb legen." },
    { title: "Besprechen", text: "Ich melde mich und wir klären deine Wünsche." },
    { title: "Online gehen", text: "Ich baue deine Seite und stelle sie online." },
  ],

  skills: ["HTML", "CSS", "JavaScript", "Visual Studio Code", "InDesign", "Illustrator", "After Effects", "CapCut"],

  // Referenz-Projekte (image leer = schöner Platzhalter)
  projects: [
    { title: "Projekt 1", tag: "One-Pager", text: "Kurze Beschreibung des Projekts: Ziel, Kunde und was du umgesetzt hast.", link: "#", image: "", color: "#3c6e5a" },
    { title: "Projekt 2", tag: "Webseite", text: "Kurze Beschreibung des Projekts: Ziel, Kunde und was du umgesetzt hast.", link: "#", image: "", color: "#4b4f8a" },
    { title: "Projekt 3", tag: "Shop", text: "Kurze Beschreibung des Projekts: Ziel, Kunde und was du umgesetzt hast.", link: "#", image: "", color: "#8a5a3c" },
  ],

  contact: [
    { label: "E-Mail", value: "hallo@beispiel.ch", href: "mailto:hallo@beispiel.ch" },
    { label: "Instagram", value: "@deinname", href: "https://instagram.com/" },
  ],

  // Art der Umsetzung
  types: [
    { id: "coded", label: "Coded", desc: "Von Hand programmiert – schnell, schlank, günstiger." },
    { id: "cms", label: "WordPress / Wix", desc: "Du kannst Inhalte später selbst bearbeiten." },
  ],

  // Basis-Paket: Preis je nach Umsetzung
  base: {
    id: "onepager",
    label: "Einfache Seite (One-Pager)",
    desc: "Eine Seite mit allen wichtigen Bereichen, responsive für Handy, Tablet und PC.",
    price: { coded: 390, cms: 590 },
  },

  // Extras. qty: true = Mengen-Auswahl (+ / -)
  extras: [
    { id: "page", label: "Weitere Seite", desc: "Zum Beispiel «Über uns» oder «Angebot».", price: { coded: 90, cms: 120 }, qty: true, max: 10 },
    { id: "form", label: "Kontaktformular", desc: "Anfragen kommen direkt in dein Postfach.", price: { coded: 80, cms: 100 } },
    { id: "blog", label: "Blog", desc: "Beiträge und News veröffentlichen.", price: { coded: 190, cms: 240 } },
    { id: "shop", label: "Shop", desc: "Produkte zeigen und verkaufen.", price: { coded: 490, cms: 690 } },
    { id: "lang", label: "Mehrsprachigkeit", desc: "Zweite Sprache, z. B. Französisch oder Englisch.", price: { coded: 150, cms: 190 } },
    { id: "seo", label: "SEO-Grundpaket", desc: "Titel, Beschreibungen und Google-Einrichtung.", price: { coded: 120, cms: 150 } },
    { id: "logo", label: "Logo-Design", desc: "Einfaches, modernes Logo in Illustrator.", price: { coded: 150, cms: 150 } },
  ],

  storageKey: "bm-cart-v1",
};

/* =========================================================
   Ab hier: Programm-Logik (normalerweise nichts ändern)
   ========================================================= */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const chf = (n) => "CHF " + n.toLocaleString("de-CH");
const fromChf = (n) => "ab " + chf(n);
const typeById = (id) => CONFIG.types.find((t) => t.id === id) || CONFIG.types[0];
const extraById = (id) => CONFIG.extras.find((e) => e.id === id);

// Texte in einfache HTML-Zeichen umwandeln (Schutz vor kaputtem HTML)
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- Preise berechnen ---------- */

// Gibt alle Positionen eines Pakets zurück: [{ label, price }]
function itemLines(item) {
  const lines = [{ label: "Basis: " + CONFIG.base.label, price: CONFIG.base.price[item.type] }];
  for (const extra of CONFIG.extras) {
    const qty = item.extras[extra.id] || 0;
    if (!qty) continue;
    const label = extra.qty ? `${extra.label} × ${qty}` : extra.label;
    lines.push({ label, price: extra.price[item.type] * qty });
  }
  return lines;
}
const itemTotal = (item) => itemLines(item).reduce((sum, l) => sum + l.price, 0);
const cartTotal = () => cart.reduce((sum, i) => sum + itemTotal(i), 0);

/* ---------- Warenkorb speichern / laden ---------- */

function loadCart() {
  try {
    const data = JSON.parse(localStorage.getItem(CONFIG.storageKey)) || [];
    // Nur gültige Einträge übernehmen (falls Konfig geändert wurde)
    return data
      .filter((i) => i && CONFIG.types.some((t) => t.id === i.type))
      .map((i) => {
        const extras = {};
        for (const [id, qty] of Object.entries(i.extras || {})) {
          const ex = extraById(id);
          if (ex && qty > 0) extras[id] = ex.qty ? Math.min(qty, ex.max || 99) : 1;
        }
        return { id: i.id || uid(), type: i.type, extras };
      });
  } catch {
    return [];
  }
}
function saveCart() {
  try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(cart)); } catch { /* Speicher nicht verfügbar */ }
}
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

/* ---------- Zustand ---------- */

let cart = loadCart();
let draft = { type: CONFIG.types[0].id, extras: {} }; // aktuelle Auswahl im Konfigurator
let editingId = null;                                  // ID des Artikels, der gerade geändert wird

/* =========================================================
   Inhalte aus der Konfig auf die Seite bringen
   ========================================================= */

function renderStatic() {
  // Einfache Texte über data-text="..."
  $$("[data-text]").forEach((el) => {
    const value = CONFIG.texts[el.dataset.text];
    if (value) el.textContent = value;
  });

  $("#aboutText").innerHTML = CONFIG.texts.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#skills").innerHTML = CONFIG.skills.map((s) => `<li>${esc(s)}</li>`).join("");

  // Foto oder Platzhalter mit Initialen
  const initials = CONFIG.texts.name.split(" ").map((w) => w[0]).join("");
  $("#aboutPhoto").innerHTML = CONFIG.texts.photo
    ? `<img src="${esc(CONFIG.texts.photo)}" alt="Foto von ${esc(CONFIG.texts.name)}" loading="lazy" width="360" height="450">`
    : `<span class="about__initials" aria-hidden="true">${esc(initials)}</span><span class="visually-hidden">Platz für ein Foto</span>`;

  // Projekte
  $("#projectList").innerHTML = CONFIG.projects.map((p, i) => {
    const media = p.image
      ? `<img src="${esc(p.image)}" alt="" loading="lazy" width="640" height="400">`
      : `<div class="mock" style="background:linear-gradient(135deg, ${esc(p.color)}, #1b1c22)" aria-hidden="true">
           <div class="mock__bar"><i></i><i></i><i></i></div>
           <div class="mock__body"><span></span><span></span><span></span></div>
         </div>`;
    const external = /^https?:/.test(p.link) ? ' target="_blank" rel="noopener"' : "";
    return `
      <article class="project reveal" style="transition-delay:${i * 90}ms">
        <div class="project__media">${media}</div>
        <div class="project__body">
          <span class="project__tag">${esc(p.tag)}</span>
          <h3 class="project__title">${esc(p.title)}</h3>
          <p class="project__text">${esc(p.text)}</p>
          <a class="project__link" href="${esc(p.link)}"${external}>Projekt ansehen <span aria-hidden="true">→</span><span class="visually-hidden">: ${esc(p.title)}</span></a>
        </div>
      </article>`;
  }).join("");

  $("#steps").innerHTML = CONFIG.steps.map((s) => `<li><strong>${esc(s.title)}</strong>${esc(s.text)}</li>`).join("");

  $("#contactList").innerHTML = CONFIG.contact.map((c) => {
    const external = /^https?:/.test(c.href) ? ' target="_blank" rel="noopener"' : "";
    return `<li><a href="${esc(c.href)}"${external}><span><small>${esc(c.label)}</small><strong>${esc(c.value)}</strong></span><span class="arrow" aria-hidden="true">→</span></a></li>`;
  }).join("");

  $("#year").textContent = new Date().getFullYear();
}

/* =========================================================
   Konfigurator
   ========================================================= */

function renderConfigurator() {
  // Umsetzung (Radio-Buttons)
  $("#typeSwitch").innerHTML = CONFIG.types.map((t) => `
    <div class="type-option">
      <input type="radio" name="type" id="type-${t.id}" value="${t.id}">
      <label for="type-${t.id}">
        <strong>${esc(t.label)} <span class="type-option__price" data-type-price="${t.id}"></span></strong>
        <small>${esc(t.desc)}</small>
      </label>
    </div>`).join("");

  // Basis (immer enthalten)
  $("#baseOption").innerHTML = `
    <span class="option__badge" aria-hidden="true">✓</span>
    <div class="option__info">
      <span class="option__label">${esc(CONFIG.base.label)} <span class="visually-hidden">(immer enthalten)</span></span>
      <span class="option__desc">${esc(CONFIG.base.desc)}</span>
    </div>
    <span class="option__price" id="basePrice"></span>`;

  // Extras
  $("#extrasList").innerHTML = CONFIG.extras.map((e) => `
    <div class="option" data-extra="${e.id}">
      <span class="check">
        <input type="checkbox" id="ex-${e.id}" value="${e.id}" aria-describedby="exd-${e.id} exp-${e.id}">
        <span aria-hidden="true"></span>
      </span>
      <div class="option__info">
        <label class="option__label" for="ex-${e.id}">${esc(e.label)}</label>
        <span class="option__desc" id="exd-${e.id}">${esc(e.desc)}</span>
      </div>
      <span class="option__price" id="exp-${e.id}"></span>
      ${e.qty ? `
      <div class="stepper" role="group" aria-label="Anzahl ${esc(e.label)}">
        <button type="button" data-step="-1" aria-label="${esc(e.label)}: eine weniger">−</button>
        <output id="qty-${e.id}" aria-live="polite">0</output>
        <button type="button" data-step="1" aria-label="${esc(e.label)}: eine mehr">+</button>
      </div>` : ""}
    </div>`).join("");

  // Events
  $("#typeSwitch").addEventListener("change", (ev) => {
    draft.type = ev.target.value;
    updateConfigurator();
  });

  $("#extrasList").addEventListener("change", (ev) => {
    if (ev.target.type !== "checkbox") return;
    const ex = extraById(ev.target.value);
    if (ev.target.checked) draft.extras[ex.id] = Math.max(1, draft.extras[ex.id] || 0);
    else delete draft.extras[ex.id];
    updateConfigurator();
  });

  $("#extrasList").addEventListener("click", (ev) => {
    const btn = ev.target.closest("[data-step]");
    if (!btn) return;
    const ex = extraById(btn.closest("[data-extra]").dataset.extra);
    const qty = Math.min(ex.max || 99, Math.max(0, (draft.extras[ex.id] || 0) + Number(btn.dataset.step)));
    if (qty) draft.extras[ex.id] = qty; else delete draft.extras[ex.id];
    updateConfigurator();
  });

  $("#configForm").addEventListener("submit", (ev) => {
    ev.preventDefault();
    addOrUpdateCartItem();
  });
  $("#cancelEditBtn").addEventListener("click", () => resetConfigurator("Bearbeiten abgebrochen."));

  updateConfigurator();
}

// Zeigt den aktuellen Stand (Preise, Häkchen, Total) an
function updateConfigurator() {
  const t = draft.type;
  $(`#type-${t}`).checked = true;

  // Preis-Vorschau pro Umsetzung
  CONFIG.types.forEach((type) => {
    $(`[data-type-price="${type.id}"]`).textContent = fromChf(itemTotal({ type: type.id, extras: draft.extras }));
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

  // Zusammenfassung
  $("#summaryList").innerHTML = [
    `<li><span>Umsetzung</span><span>${esc(typeById(t).label)}</span></li>`,
    ...itemLines(draft).map((l) => `<li><span>${esc(l.label)}</span><span>${fromChf(l.price)}</span></li>`),
  ].join("");
  $("#configTotal").textContent = fromChf(itemTotal(draft));
}

function addOrUpdateCartItem() {
  const item = { id: editingId || uid(), type: draft.type, extras: { ...draft.extras } };
  const idx = cart.findIndex((i) => i.id === editingId);
  if (idx >= 0) cart[idx] = item; else cart.push(item);
  saveCart();
  renderCart(true);
  resetConfigurator(idx >= 0 ? "Änderung gespeichert." : "Paket wurde in den Warenkorb gelegt.");
}

function resetConfigurator(message = "") {
  editingId = null;
  draft = { type: draft.type, extras: {} };
  $("#addToCartBtn").textContent = "In den Warenkorb";
  $("#cancelEditBtn").hidden = true;
  $("#configFeedback").textContent = message;
  updateConfigurator();
}

// Artikel aus dem Warenkorb zum Ändern in den Konfigurator laden
function editCartItem(id) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  editingId = id;
  draft = { type: item.type, extras: { ...item.extras } };
  $("#addToCartBtn").textContent = "Änderung speichern";
  $("#cancelEditBtn").hidden = false;
  $("#configFeedback").textContent = "Du bearbeitest ein Paket aus dem Warenkorb.";
  updateConfigurator();
  closeCart();
  $("#configurator").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  $(`#type-${item.type}`).focus({ preventScroll: true });
}

/* =========================================================
   Warenkorb
   ========================================================= */

const cartDialog = $("#cart");

function renderCart(bump = false) {
  const count = cart.length;
  const badge = $("#cartCount");
  badge.textContent = count;
  badge.classList.toggle("is-empty", count === 0);
  if (bump) { badge.classList.remove("bump"); void badge.offsetWidth; badge.classList.add("bump"); }

  $("#cartEmpty").hidden = count > 0;
  $("#cartFoot").hidden = count === 0;
  $("#checkoutBtn").disabled = count === 0;

  $("#cartList").innerHTML = cart.map((item, n) => `
    <li class="cart-item">
      <div class="cart-item__head">
        <h3 class="cart-item__title">Paket ${n + 1}: ${esc(CONFIG.base.label)}</h3>
      </div>
      <p class="cart-item__type">Umsetzung: ${esc(typeById(item.type).label)}</p>
      <ul class="cart-item__opts">
        ${itemLines(item).map((l) => `<li><span>${esc(l.label)}</span><span>${fromChf(l.price)}</span></li>`).join("")}
      </ul>
      <div class="cart-item__sum"><span>Zwischentotal</span><span>${fromChf(itemTotal(item))}</span></div>
      <div class="cart-item__actions">
        <button class="link-btn" type="button" data-edit="${item.id}">Ändern<span class="visually-hidden"> Paket ${n + 1}</span></button>
        <button class="link-btn link-btn--danger" type="button" data-remove="${item.id}">Entfernen<span class="visually-hidden"> Paket ${n + 1}</span></button>
      </div>
    </li>`).join("");

  const total = fromChf(cartTotal());
  $("#cartTotal").textContent = total;
  $("#orderTotal").textContent = total;

  // Leerer Warenkorb im Bestellformular → zurück zur Liste
  if (count === 0 && !$("#orderView").hidden) showView("cartView");
}

function showView(id) {
  ["cartView", "orderView", "thanksView"].forEach((v) => { $("#" + v).hidden = v !== id; });
  $("#cartTitle").textContent = id === "orderView" ? "Bestellung" : "Warenkorb";
}

function openCart() {
  if ($("#thanksView").hidden === false) showView("cartView");
  renderCart();
  cartDialog.showModal();
}
function closeCart() {
  if (cartDialog.open) cartDialog.close();
}

function initCart() {
  $("#cartBtn").addEventListener("click", openCart);
  $("#cartClose").addEventListener("click", closeCart);

  // Klick neben die Seitenleiste schliesst sie
  cartDialog.addEventListener("click", (ev) => { if (ev.target === cartDialog) closeCart(); });
  // Nach dem Danke-Fenster beim nächsten Öffnen wieder Warenkorb zeigen
  cartDialog.addEventListener("close", () => { if (!$("#thanksView").hidden) showView("cartView"); });

  $$("[data-close-cart]").forEach((el) => el.addEventListener("click", closeCart));

  $("#cartList").addEventListener("click", (ev) => {
    const remove = ev.target.closest("[data-remove]");
    const edit = ev.target.closest("[data-edit]");
    if (remove) {
      cart = cart.filter((i) => i.id !== remove.dataset.remove);
      if (editingId === remove.dataset.remove) resetConfigurator();
      saveCart();
      renderCart();
      ($("#cartList [data-edit]") || $("#cartClose")).focus();
    }
    if (edit) editCartItem(edit.dataset.edit);
  });

  $("#checkoutBtn").addEventListener("click", () => {
    if (!cart.length) return;
    showView("orderView");
    $("#fName").focus();
  });
  $("#backToCart").addEventListener("click", () => { showView("cartView"); $("#checkoutBtn").focus(); });

  renderCart();
}

/* =========================================================
   Bestellformular + E-Mail (Formspree)
   ========================================================= */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+0-9 ()/.-]{7,20}$/;

function setError(input, message) {
  const err = $("#" + input.id + "Err");
  err.textContent = message;
  input.setAttribute("aria-invalid", message ? "true" : "false");
  return !message;
}

function validateOrder() {
  const name = $("#fName"), email = $("#fEmail"), phone = $("#fPhone");
  const results = [
    setError(name, name.value.trim().length < 2 ? "Bitte gib deinen Namen ein." : ""),
    setError(email, !email.value.trim() ? "Bitte gib deine E-Mail-Adresse ein."
      : !EMAIL_RE.test(email.value.trim()) ? "Bitte gib eine gültige E-Mail-Adresse ein (z. B. name@beispiel.ch)." : ""),
    setError(phone, phone.value.trim() && !PHONE_RE.test(phone.value.trim()) ? "Bitte gib eine gültige Telefonnummer ein oder lass das Feld leer." : ""),
  ];
  // Fokus auf das erste fehlerhafte Feld
  const firstInvalid = $('#orderForm [aria-invalid="true"]');
  if (firstInvalid) firstInvalid.focus();
  return results.every(Boolean);
}

// Bestellung als gut lesbaren Text für die E-Mail
function buildOrderText(data) {
  const line = "----------------------------------------";
  const parts = [
    "NEUE BESTELLUNG ÜBER DEINE WEBSEITE",
    line,
    "KONTAKT",
    `Name:    ${data.name}`,
    `E-Mail:  ${data.email}`,
    `Telefon: ${data.telefon || "–"}`,
    line,
  ];
  cart.forEach((item, n) => {
    parts.push(`PAKET ${n + 1}: ${CONFIG.base.label}`);
    parts.push(`Umsetzung: ${typeById(item.type).label}`);
    itemLines(item).forEach((l) => parts.push(`  • ${l.label}: ${fromChf(l.price)}`));
    parts.push(`  Zwischentotal: ${fromChf(itemTotal(item))}`, "");
  });
  parts.push(line, `GESAMTPREIS: ${fromChf(cartTotal())}`, line, "NACHRICHT / WÜNSCHE", data.nachricht || "–");
  return parts.join("\n");
}

function initOrderForm() {
  const form = $("#orderForm");
  const status = $("#orderStatus");
  const sendBtn = $("#sendBtn");

  // Fehler entfernen, sobald der Nutzer korrigiert
  $$("input", form).forEach((input) => input.addEventListener("input", () => {
    if (input.getAttribute("aria-invalid") === "true") setError(input, "");
  }));

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    status.textContent = "";
    if (!cart.length) { status.textContent = "Dein Warenkorb ist leer."; return; }
    if (!validateOrder()) return;

    const data = {
      name: $("#fName").value.trim(),
      email: $("#fEmail").value.trim(),
      telefon: $("#fPhone").value.trim(),
      nachricht: $("#fMessage").value.trim(),
    };
    const payload = {
      ...data,
      gesamtpreis: fromChf(cartTotal()),
      bestellung: buildOrderText(data),
      _subject: `Neue Bestellung von ${data.name} (${fromChf(cartTotal())})`,
      _replyto: data.email,
      _gotcha: form.elements._gotcha.value,
    };

    sendBtn.disabled = true;
    sendBtn.textContent = "Wird gesendet …";
    const demo = !CONFIG.formspreeId || CONFIG.formspreeId === "FORMSPREE_ID";

    try {
      if (demo) {
        // Ohne Formspree-ID: nichts senden, nur in der Konsole anzeigen
        console.info("Demo-Modus – diese E-Mail würde gesendet:\n\n" + payload.bestellung);
        await new Promise((r) => setTimeout(r, 500));
      } else {
        const res = await fetch(`https://formspree.io/f/${encodeURIComponent(CONFIG.formspreeId)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Formspree antwortet mit " + res.status);
      }

      // Erfolg: Warenkorb leeren, Danke zeigen
      cart = [];
      saveCart();
      form.reset();
      renderCart();
      $("#thanksDemo").hidden = !demo;
      showView("thanksView");
      $("#thanksView").focus();
    } catch (err) {
      console.error(err);
      status.textContent = "Leider hat das Senden nicht geklappt. Bitte versuche es nochmals oder schreib mir direkt per E-Mail.";
    } finally {
      sendBtn.disabled = false;
      sendBtn.textContent = "Bestellung absenden";
    }
  });
}

/* =========================================================
   Header, Menü, Scroll-Animationen
   ========================================================= */

function initHeader() {
  const header = $(".header");
  const menuBtn = $("#menuBtn");
  const nav = $("#nav");

  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const setMenu = (open) => {
    menuBtn.setAttribute("aria-expanded", String(open));
    $(".visually-hidden", menuBtn).textContent = open ? "Menü schliessen" : "Menü öffnen";
    nav.classList.toggle("is-open", open);
  };
  menuBtn.addEventListener("click", () => setMenu(menuBtn.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (ev) => { if (ev.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" && nav.classList.contains("is-open")) { setMenu(false); menuBtn.focus(); }
  });
}

function initReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("is-visible")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach((el) => io.observe(el));
}

/* ---------- Start ---------- */
renderStatic();
renderConfigurator();
initCart();
initOrderForm();
initHeader();
initReveal();
