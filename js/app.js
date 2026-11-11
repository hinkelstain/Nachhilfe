// ---------- Icons für die Schulart-Auswahl ----------
// Platzhalter-Icons (einfache Strichzeichnungen). Werden ersetzt, sobald
// eigene Bilder vorliegen - siehe setSchulartImage() weiter unten.
const SCHULART_ICONS = {
  grundschule: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 L6.5 19.5 L17.5 19.5 Z"/><path d="M8.3 9.5 L15.7 9.5"/><path d="M6.5 19.5 Q12 16.8 17.5 19.5"/><path d="M12 3 L13.6 1.7"/></svg>`,
  mittelschule: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20 L11 13"/><circle cx="12.4" cy="11.6" r="1.1" fill="currentColor" stroke="none"/><path d="M13 5 a2.3 2.3 0 1 0 4.6 0 a2.3 2.3 0 1 0 -4.6 0 Z"/><path d="M14.3 7.6 L20 13.3 L18.3 15 L12.6 9.3"/></svg>`,
  realschule: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5 L12 6"/><path d="M12 6 L7 19.5 L9.3 19.5"/><path d="M12 6 L17 19.5 L14.7 19.5"/><circle cx="12" cy="4.6" r="1.4"/></svg>`,
  gymnasium: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 9.5 L12 5 L21.5 9.5 L12 14 Z"/><path d="M6.5 11.5 L6.5 16 Q12 18.3 17.5 16 L17.5 11.5"/><path d="M21.5 9.5 L21.5 14.5"/></svg>`
};

// ---------- App-Zustand ----------
const state = {
  schulart: null,
  klassenstufe: null,
  fach: null,
  tab: "uebersicht",
  lernbereich: null // gewählter Lernbereich im Drilldown (null = Liste)
};

function scopePrefix() {
  return `${state.schulart}__${state.klassenstufe}__${state.fach}__`;
}

function resetTo(level) {
  if (level === "schulart") { state.schulart = null; state.klassenstufe = null; state.fach = null; }
  if (level === "klassenstufe") { state.klassenstufe = null; state.fach = null; }
  if (level === "fach") { state.fach = null; }
  state.lernbereich = null;
  state.tab = "uebersicht";
  navigate();
}

// ---------- Navigation / Browser-Verlauf ----------
// Jeder "echte" Navigationsschritt (Schulart/Klasse/Fach wählen, Tab
// wechseln, Lernbereich öffnen/schließen) legt einen eigenen Einstieg im
// Browser-Verlauf an. So führt die Zurück-Taste des Browsers innerhalb der
// App einen Schritt zurück, statt die Seite komplett zu verlassen.
function snapshotState() {
  return {
    schulart: state.schulart,
    klassenstufe: state.klassenstufe,
    fach: state.fach,
    tab: state.tab,
    lernbereich: state.lernbereich
  };
}

function navigate() {
  history.pushState(snapshotState(), "", "");
  render();
}

// Kurzes "Aufleuchten" einer Auswahl-Kachel, bevor zum nächsten Schritt
// gewechselt wird. Respektiert die Betriebssystem-Einstellung für
// reduzierte Bewegung (prefers-reduced-motion).
function selectAndIgnite(cardEl, changes) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    Object.assign(state, changes);
    navigate();
    return;
  }
  cardEl.disabled = true;
  cardEl.classList.add("is-igniting");
  setTimeout(() => {
    Object.assign(state, changes);
    navigate();
  }, 420);
}

window.addEventListener("popstate", (e) => {
  const s = e.state || { schulart: null, klassenstufe: null, fach: null, tab: "uebersicht", lernbereich: null };
  state.schulart = s.schulart;
  state.klassenstufe = s.klassenstufe;
  state.fach = s.fach;
  state.tab = s.tab;
  state.lernbereich = s.lernbereich;
  render();
});

function currentFachData() {
  const faecher = getFaecher(state.schulart, state.klassenstufe);
  return faecher[state.fach];
}

// ---------- Hauptrender ----------
function render() {
  const app = document.getElementById("app");
  const tabsNav = document.getElementById("tabs");
  app.innerHTML = "";
  renderBreadcrumb();

  if (!state.schulart) { tabsNav.style.display = "none"; return renderSchulartAuswahl(app); }
  if (!state.klassenstufe) { tabsNav.style.display = "none"; return renderKlassenstufeAuswahl(app); }
  if (!state.fach) { tabsNav.style.display = "none"; return renderFachAuswahl(app); }
  tabsNav.style.display = "flex";
  renderFachApp(app);
  initTabNav();
}

function renderBreadcrumb() {
  const el = document.getElementById("breadcrumb");
  el.innerHTML = "";
  if (!state.schulart) return;

  const schulartLabel = CURRICULA.schularten.find((s) => s.id === state.schulart).label;
  addCrumb(el, schulartLabel, () => resetTo("schulart"));

  if (state.klassenstufe) {
    const ksLabel = CURRICULA.klassenstufen[state.schulart].find((k) => k.id === state.klassenstufe).label;
    addCrumb(el, ksLabel, () => resetTo("klassenstufe"));
  }

  if (state.fach) {
    const fachLabel = currentFachData().label;
    addCrumb(el, fachLabel, () => resetTo("fach"));
  }
}

function addCrumb(container, label, onClick) {
  if (container.childElementCount > 0) {
    const sep = document.createElement("span");
    sep.className = "crumb-sep";
    sep.textContent = "›";
    container.appendChild(sep);
  }
  const btn = document.createElement("button");
  btn.className = "crumb";
  btn.textContent = label;
  btn.addEventListener("click", onClick);
  container.appendChild(btn);
}

// ---------- Schritt 1: Schulart ----------
function renderSchulartAuswahl(app) {
  const wrap = document.createElement("div");
  wrap.className = "choice-screen";
  wrap.innerHTML = `<h2 class="step-title">Welche Schulart?</h2>`;
  const grid = document.createElement("div");
  grid.className = "choice-grid";
  CURRICULA.schularten.forEach((s) => {
    const card = document.createElement("button");
    card.className = "choice-card schulart-card";
    card.innerHTML = `
      <span class="schulart-icon" data-schulart="${s.id}">
        ${SCHULART_ICONS[s.id] || ""}
        <img src="images/schulart-${s.id}.png" alt="" onerror="this.style.display='none'">
      </span>
      <span class="choice-label">${s.label}</span>
    `;
    card.addEventListener("click", () => selectAndIgnite(card, { schulart: s.id }));
    grid.appendChild(card);
  });
  wrap.appendChild(grid);
  app.appendChild(wrap);
}

// ---------- Schritt 2: Klassenstufe ----------
function renderKlassenstufeAuswahl(app) {
  const wrap = document.createElement("div");
  wrap.className = "choice-screen";
  wrap.innerHTML = `<h2 class="step-title">Welche Klassenstufe?</h2>`;
  const grid = document.createElement("div");
  grid.className = "choice-grid";
  CURRICULA.klassenstufen[state.schulart].forEach((k) => {
    const card = document.createElement("button");
    card.className = "choice-card";
    card.textContent = k.label;
    card.addEventListener("click", () => selectAndIgnite(card, { klassenstufe: k.id }));
    grid.appendChild(card);
  });
  wrap.appendChild(grid);
  app.appendChild(wrap);
}

// ---------- Schritt 3: Fach ----------
function renderFachAuswahl(app) {
  const wrap = document.createElement("div");
  wrap.className = "choice-screen";
  wrap.innerHTML = `<h2 class="step-title">Welches Fach?</h2>`;
  const faecher = getFaecher(state.schulart, state.klassenstufe);
  const ids = Object.keys(faecher);

  if (ids.length === 0) {
    const empty = document.createElement("div");
    empty.className = "panel empty-state";
    empty.innerHTML = `<p>Für diese Auswahl sind noch keine Fächer hinterlegt.</p>`;
    wrap.appendChild(empty);
  } else {
    const grid = document.createElement("div");
    grid.className = "choice-grid";
    ids.forEach((id) => {
      const card = document.createElement("button");
      card.className = "choice-card";
      card.textContent = faecher[id].label;
      card.addEventListener("click", () => selectAndIgnite(card, { fach: id }));
      grid.appendChild(card);
    });
    wrap.appendChild(grid);

    const hint = document.createElement("p");
    hint.className = "hint";
    hint.textContent = "Weitere Fächer werden nach und nach ergänzt.";
    wrap.appendChild(hint);
  }
  app.appendChild(wrap);
}

// ---------- Schritt 4: Fach-App (Tabs) ----------
function renderFachApp(app) {
  const container = document.createElement("div");
  container.id = "fach-app";
  app.appendChild(container);

  if (state.tab === "uebersicht") renderUebersichtTab(container);
  if (state.tab === "arbeitsblaetter") renderArbeitsblaetterTab(container);
  if (state.tab === "uebungen") renderUebungenTab(container);
}

function initTabNav() {
  document.querySelectorAll("#tabs button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.target === state.tab);
    btn.onclick = () => { state.tab = btn.dataset.target; state.lernbereich = null; navigate(); };
  });
}

// ---------- Tab: Themenübersicht (mit Drilldown) ----------
const STATE_CYCLE = ["offen", "in-arbeit", "sicher"];
const STATE_LABELS = { offen: "Offen", "in-arbeit": "In Arbeit", sicher: "Sicher" };
const STATE_VALUE = { offen: 0, "in-arbeit": 0.5, sicher: 1 };

function getStatus(id) {
  return localStorage.getItem(scopePrefix() + "status-" + id) || "offen";
}
function setStatus(id, val) {
  localStorage.setItem(scopePrefix() + "status-" + id, val);
}

function lernbereichProgress(lb) {
  const values = lb.teilbereiche.map((tb) => STATE_VALUE[getStatus(tb.id)]);
  return Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 100);
}

function renderUebersichtTab(container) {
  const fachData = currentFachData();
  const lernbereiche = fachData.lehrplan.lernbereiche;

  if (fachData.lehrplan.hinweis) {
    const banner = document.createElement("div");
    banner.className = "panel hinweis-banner";
    banner.innerHTML = `<strong>Hinweis:</strong> ${fachData.lehrplan.hinweis}`;
    container.appendChild(banner);
  }

  if (!state.lernbereich) {
    // Listenansicht: nur Titel + Fortschritt, anklickbar
    if (lernbereiche.some((lb) => lb.zeitraum)) {
      const hint = document.createElement("p");
      hint.className = "hint";
      hint.style.marginBottom = "1rem";
      hint.textContent = "📅 = ungefährer Richtwert, wann dieser Themenbereich laut Lehrplan dran sein könnte (grobe Schätzung, keine verbindliche Vorgabe).";
      container.appendChild(hint);
    }
    const grid = document.createElement("div");
    grid.className = "lernbereich-grid";
    lernbereiche.forEach((lb) => {
      const pct = lernbereichProgress(lb);
      const card = document.createElement("button");
      card.className = "lernbereich-card";
      const zeitraumHtml = lb.zeitraum
        ? `<span class="zeitraum-chip" title="Grober Richtwert auf Basis der im Lehrplan angegebenen Stundenzahl, keine verbindliche Vorgabe">📅 ${lb.zeitraum}</span>`
        : "";
      card.innerHTML = `
        <h2>${lb.titel}</h2>
        ${zeitraumHtml}
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        <span class="progress-label">${pct}% · ${lb.teilbereiche.length} Themen</span>
      `;
      card.addEventListener("click", () => { state.lernbereich = lb.id; navigate(); });
      grid.appendChild(card);
    });
    container.appendChild(grid);
    return;
  }

  // Detailansicht eines Lernbereichs
  const lb = lernbereiche.find((l) => l.id === state.lernbereich);
  const back = document.createElement("button");
  back.className = "back-link";
  back.textContent = "← Zurück zur Übersicht";
  back.addEventListener("click", () => { state.lernbereich = null; navigate(); });
  container.appendChild(back);

  const heading = document.createElement("h2");
  heading.className = "step-title";
  heading.textContent = lb.titel;
  container.appendChild(heading);

  const grid = document.createElement("div");
  grid.className = "teilbereich-grid";
  lb.teilbereiche.forEach((tb) => {
    const card = document.createElement("div");
    card.className = "teilbereich-card";
    const zieleHtml = tb.ziele.map((z) => `<li>${z}</li>`).join("");
    card.innerHTML = `
      <h3>${tb.titel}</h3>
      <ul>${zieleHtml}</ul>
      <button class="status-btn" data-id="${tb.id}"></button>
    `;
    grid.appendChild(card);
  });
  container.appendChild(grid);

  container.querySelectorAll(".status-btn").forEach((btn) => {
    const id = btn.dataset.id;
    updateStatusButton(btn, getStatus(id));
    btn.addEventListener("click", () => {
      const next = STATE_CYCLE[(STATE_CYCLE.indexOf(getStatus(id)) + 1) % STATE_CYCLE.length];
      setStatus(id, next);
      updateStatusButton(btn, next);
    });
  });
}

function updateStatusButton(btn, statusValue) {
  btn.dataset.state = statusValue;
  btn.textContent = STATE_LABELS[statusValue];
}

// ---------- Tab: Arbeitsblätter ----------
function renderArbeitsblaetterTab(container) {
  const fachData = currentFachData();
  const liste = fachData.arbeitsblaetter;

  if (!liste || liste.length === 0) {
    container.innerHTML = `
      <div class="panel empty-state">
        <p>Noch keine Arbeitsblätter hinterlegt.</p>
        <p>PDF in den Ordner <code>arbeitsblaetter/</code> legen und in
        <code>data/arbeitsblaetter-mathematik-4.js</code> eintragen.</p>
      </div>`;
    return;
  }

  const titelById = {};
  fachData.lehrplan.lernbereiche.forEach((lb) => (titelById[lb.id] = lb.titel));

  const panel = document.createElement("div");
  panel.className = "panel";
  liste.forEach((ab) => {
    const row = document.createElement("div");
    row.className = "arbeitsblatt-row";
    row.innerHTML = `
      <div><span class="arbeitsblatt-tag">${titelById[ab.lernbereich] || ab.lernbereich}</span>${ab.titel}</div>
      <a href="${ab.datei}" target="_blank" rel="noopener">Öffnen ↗</a>
    `;
    panel.appendChild(row);
  });
  container.appendChild(panel);
}

// ---------- Tab: Übungen ----------
function renderUebungenTab(container) {
  if (state.fach !== "mathematik") {
    container.innerHTML = `<div class="panel empty-state"><p>Für dieses Fach gibt es noch keine Übung.</p></div>`;
    return;
  }

  container.innerHTML = `
    <div class="panel uebung-box">
      <h2>Einmaleins-Trainer</h2>
      <div class="uebung-frage">
        <span id="uebung-frage"></span>
        <input type="number" id="uebung-antwort" inputmode="numeric">
      </div>
      <div id="uebung-feedback" class="uebung-feedback"></div>
      <button class="primary" id="uebung-pruefen">Prüfen</button>
      <div class="uebung-stats">
        <div><strong id="uebung-richtig">0</strong>richtig</div>
        <div><strong id="uebung-gesamt">0</strong>gesamt</div>
      </div>
    </div>
  `;
  initUebung();
}

function initUebung() {
  const frageEl = document.getElementById("uebung-frage");
  const inputEl = document.getElementById("uebung-antwort");
  const feedbackEl = document.getElementById("uebung-feedback");
  const richtigEl = document.getElementById("uebung-richtig");
  const gesamtEl = document.getElementById("uebung-gesamt");
  const pruefenBtn = document.getElementById("uebung-pruefen");

  const keyRichtig = scopePrefix() + "uebung-einmaleins-richtig";
  const keyGesamt = scopePrefix() + "uebung-einmaleins-gesamt";

  let a = 0, b = 0, loesung = 0;
  let richtig = Number(localStorage.getItem(keyRichtig) || 0);
  let gesamt = Number(localStorage.getItem(keyGesamt) || 0);

  richtigEl.textContent = richtig;
  gesamtEl.textContent = gesamt;

  function neueAufgabe() {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
    loesung = a * b;
    frageEl.textContent = `${a} × ${b} = `;
    inputEl.value = "";
    inputEl.className = "";
    feedbackEl.textContent = "";
    feedbackEl.className = "uebung-feedback";
    inputEl.focus();
  }

  function pruefen() {
    const antwort = Number(inputEl.value);
    gesamt++;
    if (antwort === loesung) {
      richtig++;
      inputEl.className = "richtig";
      feedbackEl.textContent = "Richtig!";
      feedbackEl.className = "uebung-feedback richtig";
    } else {
      inputEl.className = "falsch";
      feedbackEl.textContent = `Leider nicht. Richtig wäre ${loesung}.`;
      feedbackEl.className = "uebung-feedback falsch";
    }
    richtigEl.textContent = richtig;
    gesamtEl.textContent = gesamt;
    localStorage.setItem(keyRichtig, richtig);
    localStorage.setItem(keyGesamt, gesamt);
    setTimeout(neueAufgabe, 900);
  }

  pruefenBtn.addEventListener("click", pruefen);
  inputEl.addEventListener("keydown", (e) => { if (e.key === "Enter") pruefen(); });

  neueAufgabe();
}

// ---------- Start ----------
document.addEventListener("DOMContentLoaded", () => {
  history.replaceState(snapshotState(), "", "");
  render();
});
