import "./style.css";
import { decks } from "./decks.js";

const app = document.querySelector("#app");

const state = {
  tab: "picker",
  phase: "idle", // idle | drawing | result
  picks: null,   // [deck, deck]
  lives: [20, 20],
};

// ── helpers ──────────────────────────────────────────────────

function pickTwo() {
  const pool = [...decks].sort(() => Math.random() - 0.5);
  return [pool[0], pool[1]];
}

function stars(n = 50) {
  let h = "";
  for (let i = 0; i < n; i++) {
    const t = Math.random() * 100, l = Math.random() * 100;
    const d = Math.random() * 3, s = 1 + Math.random() * 2;
    h += `<div class="star" style="top:${t}%;left:${l}%;animation-delay:${d}s;width:${s}px;height:${s}px"></div>`;
  }
  return h;
}

function sparks() {
  let h = "";
  for (let i = 0; i < 18; i++) {
    const a = (Math.PI * 2 * i) / 18;
    const dist = 70 + Math.random() * 50;
    h += `<div class="spark" style="--dx:${Math.cos(a)*dist}px;--dy:${Math.sin(a)*dist}px"></div>`;
  }
  return `<div class="burst" id="burst">${h}</div>`;
}

// ── renders ──────────────────────────────────────────────────

function miniCard(deck, label, anim = "") {
  return `
    <div class="mini-card ${anim}" style="--c:${deck.color}">
      <div class="mc-sym">${deck.symbol}</div>
      <div class="mc-label">${label}</div>
      <div class="mc-name">${deck.name}</div>
    </div>`;
}

function renderPicker() {
  const { phase, picks } = state;

  if (phase === "idle") {
    return `
      <div class="stars">${stars()}</div>
      <div class="header">
        <h1>✦ Arcano Picker ✦</h1>
        <p>Toque na orbe para sortear</p>
      </div>
      <div class="orb-stage">
        <div class="orb" id="orb">
          <div class="orb-ring"></div>
          <span class="orb-glyph">✦</span>
        </div>
      </div>
      <div class="footer-note">${decks.length} decks no grimório</div>`;
  }

  if (phase === "drawing") {
    const r = decks[Math.floor(Math.random() * decks.length)];
    return `
      <div class="stars">${stars()}</div>
      <div class="header">
        <h1>✦ Arcano Picker ✦</h1>
        <p>Invocando...</p>
      </div>
      <div class="dual-stage" id="stage">
        ${miniCard(r, "Jogador 1", "spinning")}
        ${miniCard(r, "Jogador 2", "spinning")}
      </div>`;
  }

  // result
  const [d1, d2] = picks;
  return `
    <div class="stars">${stars()}</div>
    <div class="header">
      <h1>✦ Arcano Picker ✦</h1>
      <p>Decks sorteados!</p>
    </div>
    <div class="dual-stage" id="stage">
      ${miniCard(d1, "Jogador 1", "reveal")}
      ${miniCard(d2, "Jogador 2", "reveal")}
      ${sparks()}
    </div>
    <div class="controls">
      <button class="pill-btn secondary" id="redraw-btn">↺ Sortear de Novo</button>
      <button class="pill-btn primary" id="go-counter-btn">♥ Contador de Vida</button>
    </div>
    <div class="footer-note">${decks.length} decks no grimório</div>`;
}

function renderCounter() {
  const [d1, d2] = state.picks || [
    { name: "Jogador 1", color: "#9b5de5", symbol: "✦" },
    { name: "Jogador 2", color: "#9b5de5", symbol: "✦" },
  ];
  const [l1, l2] = state.lives;

  return `
    <div class="counter-screen">
      <div class="player-half top-half" style="--pc:${d2.color}">
        <div class="player-inner flipped">
          <div class="deck-tag">${d2.symbol} ${d2.name}</div>
          <div class="life-num ${l2 <= 5 ? "danger" : ""}" id="life-2">${l2}</div>
          <div class="life-btns">
            <button class="life-btn" data-p="1" data-d="-1">−</button>
            <button class="life-btn" data-p="1" data-d="1">+</button>
          </div>
        </div>
      </div>

      <div class="counter-divider">
        <button class="reset-btn" id="reset-btn" title="Reiniciar vida">↺ 20</button>
      </div>

      <div class="player-half bot-half" style="--pc:${d1.color}">
        <div class="player-inner">
          <div class="deck-tag">${d1.symbol} ${d1.name}</div>
          <div class="life-num ${l1 <= 5 ? "danger" : ""}" id="life-1">${l1}</div>
          <div class="life-btns">
            <button class="life-btn" data-p="0" data-d="-1">−</button>
            <button class="life-btn" data-p="0" data-d="1">+</button>
          </div>
        </div>
      </div>
    </div>`;
}

function tabBar() {
  const p = state.tab === "picker";
  return `
    <nav class="tab-bar">
      <button class="tab-btn ${p ? "active" : ""}" data-tab="picker">✦ Sorteador</button>
      <button class="tab-btn ${!p ? "active" : ""}" data-tab="counter">♥ Vida</button>
    </nav>`;
}

function render() {
  app.innerHTML = (state.tab === "picker" ? renderPicker() : renderCounter()) + tabBar();
  bind();
}

// ── events ───────────────────────────────────────────────────

function bind() {
  // tabs
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.tab = btn.dataset.tab;
      render();
    });
  });

  if (state.tab === "picker") {
    document.getElementById("orb")?.addEventListener("click", startDraw);
    document.getElementById("redraw-btn")?.addEventListener("click", startDraw);
    document.getElementById("go-counter-btn")?.addEventListener("click", () => {
      state.tab = "counter";
      render();
    });
  }

  if (state.tab === "counter") {
    document.querySelectorAll(".life-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const p = parseInt(btn.dataset.p);
        const d = parseInt(btn.dataset.d);
        state.lives[p] = Math.max(0, state.lives[p] + d);
        // fast update without full re-render
        const el = document.getElementById(`life-${p + 1}`);
        if (el) {
          el.textContent = state.lives[p];
          el.classList.toggle("danger", state.lives[p] <= 5);
        }
      });
    });

    document.getElementById("reset-btn")?.addEventListener("click", () => {
      state.lives = [20, 20];
      render();
    });
  }
}

// ── draw logic ───────────────────────────────────────────────

let drawing = false;

function startDraw() {
  if (drawing) return;
  drawing = true;
  state.phase = "drawing";
  render();

  const final = pickTwo();
  let count = 0;
  const MAX = 16;

  const iv = setInterval(() => {
    count++;
    const stage = document.getElementById("stage");
    if (stage) {
      const r1 = decks[Math.floor(Math.random() * decks.length)];
      const r2 = decks[Math.floor(Math.random() * decks.length)];
      stage.innerHTML = miniCard(r1, "Jogador 1", "spinning") + miniCard(r2, "Jogador 2", "spinning");
    }
    if (count >= MAX) {
      clearInterval(iv);
      revealResult(final);
    }
  }, 85);
}

function revealResult(final) {
  state.picks = final;
  state.lives = [20, 20];
  state.phase = "result";
  render();

  setTimeout(() => {
    document.querySelectorAll(".spark").forEach((s) => s.classList.add("go"));
  }, 20);

  setTimeout(() => { drawing = false; }, 900);
}

// ── boot ─────────────────────────────────────────────────────

render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
