import "./style.css";
import { decks } from "./decks.js";
import { sfxDamage, sfxHeal, sfxKO, sfxDraw, sfxDice, sfxCoin, sfxReveal, sfxRoulette } from "./sounds.js";

const app = document.querySelector("#app");

const state = {
  tab: "picker",
  phase: "idle",
  picks: null,
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
    const a = (Math.PI * 2 * i) / 18, dist = 70 + Math.random() * 50;
    h += `<div class="spark" style="--dx:${Math.cos(a)*dist}px;--dy:${Math.sin(a)*dist}px"></div>`;
  }
  return `<div class="burst" id="burst">${h}</div>`;
}

function ambParticles(color, n = 7) {
  let h = "";
  for (let i = 0; i < n; i++) {
    const l = 5 + Math.random() * 88;
    const delay = Math.random() * 5, dur = 4 + Math.random() * 4;
    const size = 2 + Math.random() * 4;
    h += `<div class="amb-particle" style="left:${l}%;animation-delay:${delay}s;animation-duration:${dur}s;width:${size}px;height:${size}px;background:${color}"></div>`;
  }
  return `<div class="amb-particles">${h}</div>`;
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

function lifeDisplay(life) {
  return life <= 0 ? "💀" : life;
}

function renderPicker() {
  const { phase, picks } = state;

  if (phase === "idle") {
    return `
      <div class="stars">${stars()}</div>
      <div class="picker-scroll">
        <div class="header">
          <h1>✦ Arcano Picker ✦</h1>
          <p>Toque na orbe para sortear</p>
        </div>
        <div class="orb-stage">
          <div class="orb" id="orb">
            <div class="orb-ring"></div>
            <div class="orb-particles">
              <div class="orb-particle"></div>
              <div class="orb-particle"></div>
              <div class="orb-particle"></div>
            </div>
            <span class="orb-glyph">✦</span>
          </div>
        </div>
        <div class="footer-note">${decks.length} decks no grimório</div>
      </div>`;
  }

  if (phase === "drawing") {
    const r = decks[Math.floor(Math.random() * decks.length)];
    return `
      <div class="stars">${stars()}</div>
      <div class="picker-scroll">
        <div class="header compact">
          <h1>✦ Arcano Picker ✦</h1>
          <p>Invocando...</p>
        </div>
        <div class="dual-stage" id="stage">
          ${miniCard(r, "Jogador 1", "spinning")}
          <div class="vs-badge">VS</div>
          ${miniCard(r, "Jogador 2", "spinning")}
        </div>
      </div>`;
  }

  const [d1, d2] = picks;
  return `
    <div class="stars">${stars()}</div>
    <div class="picker-scroll">
      <div class="header compact">
        <h1>✦ Arcano Picker ✦</h1>
        <p>Decks sorteados!</p>
      </div>
      <div class="dual-stage" id="stage">
        ${miniCard(d1, "Jogador 1", "reveal")}
        <div class="vs-badge">VS</div>
        ${miniCard(d2, "Jogador 2", "reveal")}
        ${sparks()}
      </div>
      <div class="who-area">
        <button class="who-btn" id="who-btn">⚔️ Quem começa?</button>
        <div class="who-result" id="who-result"></div>
      </div>
      <div class="controls">
        <button class="pill-btn secondary" id="redraw-btn">↺ Sortear de Novo</button>
        <button class="pill-btn primary" id="go-counter-btn">♥ Contador de Vida</button>
      </div>
      <div class="footer-note">${decks.length} decks no grimório</div>
    </div>`;
}

function renderCounter() {
  const [d1, d2] = state.picks || [
    { name: "Jogador 1", color: "#9b5de5", symbol: "✦" },
    { name: "Jogador 2", color: "#9b5de5", symbol: "✦" },
  ];
  const [l1, l2] = state.lives;
  const cls = (l) => `pz-life${l <= 5 && l > 0 ? " danger" : ""}${l <= 0 ? " dead" : ""}`;

  return `
    <div class="counter-screen">

      <div class="player-zone" id="zone-1" style="--pc:${d2.color}">
        ${ambParticles(d2.color)}
        <div class="pz-watermark">${d2.symbol}</div>
        <div class="pz-inner flipped">
          <div class="pz-deck">${d2.symbol} ${d2.name}</div>
          <div class="${cls(l2)}" id="life-2">${lifeDisplay(l2)}</div>
          <div class="pz-controls">
            <button class="pz-btn pz-minus" data-p="1" data-d="-1" data-d5="-5">−</button>
            <button class="pz-btn pz-plus"  data-p="1" data-d="1"  data-d5="5">+</button>
          </div>
        </div>
      </div>

      <div class="counter-divider">
        <button class="dice-trigger" id="dice-btn">🎲</button>
        <button class="reset-btn" id="reset-btn">↺ 20</button>
      </div>

      <div class="player-zone" id="zone-0" style="--pc:${d1.color}">
        ${ambParticles(d1.color)}
        <div class="pz-watermark">${d1.symbol}</div>
        <div class="pz-inner">
          <div class="pz-deck">${d1.symbol} ${d1.name}</div>
          <div class="${cls(l1)}" id="life-1">${lifeDisplay(l1)}</div>
          <div class="pz-controls">
            <button class="pz-btn pz-minus" data-p="0" data-d="-1" data-d5="-5">−</button>
            <button class="pz-btn pz-plus"  data-p="0" data-d="1"  data-d5="5">+</button>
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

// ── counter effects ───────────────────────────────────────────

function spawnFloat(zoneEl, delta) {
  const el = document.createElement("div");
  el.className = `float-num ${delta < 0 ? "float-dmg" : "float-heal"}`;
  el.textContent = delta > 0 ? `+${delta}` : `${delta}`;
  el.style.left = (20 + Math.random() * 60) + "%";
  el.style.top  = (25 + Math.random() * 35) + "%";
  zoneEl.appendChild(el);
  setTimeout(() => el.remove(), 950);
}

function applyLife(playerIndex, delta) {
  if (state.lives[playerIndex] <= 0) return;

  state.lives[playerIndex] = Math.max(0, state.lives[playerIndex] + delta);
  const life = state.lives[playerIndex];

  delta < 0 ? sfxDamage() : sfxHeal();

  const lifeEl = document.getElementById(`life-${playerIndex + 1}`);
  const zoneEl = document.getElementById(`zone-${playerIndex}`);

  if (lifeEl) {
    lifeEl.textContent = lifeDisplay(life);
    lifeEl.className = `pz-life${life <= 5 && life > 0 ? " danger" : ""}${life <= 0 ? " dead" : ""}`;
    if (delta < 0 && life > 0) {
      lifeEl.classList.remove("shake");
      void lifeEl.offsetWidth;
      lifeEl.classList.add("shake");
    }
  }

  if (zoneEl) {
    zoneEl.classList.remove("flash-dmg", "flash-heal");
    void zoneEl.offsetWidth;
    zoneEl.classList.add(delta < 0 ? "flash-dmg" : "flash-heal");
    spawnFloat(zoneEl, delta);
  }

  if (life <= 0) setTimeout(showKO, 400);
}

function showKO() {
  if (document.getElementById("ko-overlay")) return;
  sfxKO();

  const deadIdx = state.lives.findIndex(l => l <= 0);
  const winnerIdx = deadIdx === 0 ? 1 : 0;
  const loser  = state.picks[deadIdx];
  const winner = state.picks[winnerIdx];

  const el = document.createElement("div");
  el.id = "ko-overlay";
  el.className = "ko-overlay";
  el.innerHTML = `
    <div class="ko-content">
      <div class="ko-skull">💀</div>
      <div class="ko-title">DERROTA</div>
      <div class="ko-loser">${loser.symbol} ${loser.name}</div>
      <div class="ko-sep">⸻</div>
      <div class="ko-win-label">🏆 VITÓRIA</div>
      <div class="ko-winner">${winner.symbol} ${winner.name}</div>
      <button class="pill-btn primary" id="ko-new-game">↺ Nova Partida</button>
    </div>`;

  const screen = document.querySelector(".counter-screen");
  if (screen) screen.appendChild(el);

  document.getElementById("ko-new-game").addEventListener("click", () => {
    state.lives = [20, 20];
    render();
  });
}

// ── battle intro ─────────────────────────────────────────────

function triggerBattleIntro() {
  const screen = document.querySelector(".counter-screen");
  if (!screen) return;

  screen.classList.add("battle-intro");
  setTimeout(() => screen.classList.remove("battle-intro"), 700);

  const flash = document.createElement("div");
  flash.className = "battle-flash";
  flash.textContent = "⚔️  DUELO  ⚔️";
  screen.appendChild(flash);
  setTimeout(() => flash.remove(), 1000);
}

// ── dice modal ───────────────────────────────────────────────

function openDice() {
  if (document.getElementById("dice-overlay")) return;

  const el = document.createElement("div");
  el.id = "dice-overlay";
  el.className = "dice-overlay";
  el.innerHTML = `
    <div class="dice-modal">
      <button class="dice-close" id="dice-close">✕</button>
      <div class="dice-title">🎲 Mesa de Dados</div>
      <div class="dice-result-area" id="dice-result-area">
        <div class="dice-prompt">Escolha abaixo</div>
      </div>
      <div class="dice-btns">
        <button class="dice-opt" id="d-coin">🪙 Moeda</button>
        <button class="dice-opt" id="d-d6">🎲 D6</button>
        <button class="dice-opt" id="d-d20">⚔️ D20</button>
      </div>
    </div>`;

  document.body.appendChild(el);

  el.addEventListener("click", e => { if (e.target === el) el.remove(); });
  document.getElementById("dice-close").addEventListener("click", () => el.remove());
  document.getElementById("d-coin").addEventListener("click", () => { sfxCoin(); rollDice("coin"); });
  document.getElementById("d-d6").addEventListener("click",  () => { sfxDice(); rollDice("d6"); });
  document.getElementById("d-d20").addEventListener("click", () => { sfxDice(); rollDice("d20"); });
}

function rollDice(type) {
  const area = document.getElementById("dice-result-area");
  if (!area) return;

  const faces = ["👑 Cara", "🌕 Coroa"];
  const max   = type === "coin" ? 2 : type === "d6" ? 6 : 20;
  const final = type === "coin" ? Math.floor(Math.random() * 2) : Math.floor(Math.random() * max) + 1;

  area.innerHTML = `<div class="dice-rolling">•••</div>`;
  let count = 0;
  const iv = setInterval(() => {
    count++;
    const r = type === "coin" ? faces[Math.floor(Math.random() * 2)] : Math.floor(Math.random() * max) + 1;
    area.innerHTML = `<div class="dice-rolling">${r}</div>`;
    if (count >= 14) {
      clearInterval(iv);
      const display = type === "coin" ? faces[final] : final;
      const isHigh  = type !== "coin" && final >= max * 0.75;
      area.innerHTML = `<div class="dice-final${isHigh ? " high" : ""}">${display}</div>`;
      sfxReveal();
    }
  }, 60);
}

// ── who starts ────────────────────────────────────────────────

function handleWhoStarts() {
  const btn    = document.getElementById("who-btn");
  const result = document.getElementById("who-result");
  if (!btn || !result || !state.picks) return;

  btn.disabled = true;
  sfxRoulette();

  const [d1, d2] = state.picks;
  const players  = [{ label: "Jogador 1", deck: d1 }, { label: "Jogador 2", deck: d2 }];
  const chosen   = Math.floor(Math.random() * 2);
  let count = 0;

  const iv = setInterval(() => {
    result.innerHTML = `<div class="who-spinning">${players[count % 2].label}</div>`;
    count++;
    if (count >= 12) {
      clearInterval(iv);
      const w = players[chosen];
      result.innerHTML = `
        <div class="who-final">
          <div class="who-player">${w.label} começa!</div>
          <div class="who-deck-name">${w.deck.symbol} ${w.deck.name}</div>
        </div>`;
      sfxReveal();
    }
  }, 80);
}

// ── events ───────────────────────────────────────────────────

function bind() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.tab = btn.dataset.tab;
      render();
    });
  });

  if (state.tab === "picker") {
    document.getElementById("orb")?.addEventListener("click", startDraw);
    document.getElementById("redraw-btn")?.addEventListener("click", startDraw);
    document.getElementById("who-btn")?.addEventListener("click", handleWhoStarts);
    document.getElementById("go-counter-btn")?.addEventListener("click", () => {
      state.tab = "counter";
      render();
      triggerBattleIntro();
      sfxDraw();
    });
  }

  if (state.tab === "counter") {
    document.querySelectorAll(".pz-btn").forEach(btn => {
      let pressTimer = null, longPressed = false;

      btn.addEventListener("pointerdown", () => {
        longPressed = false;
        pressTimer = setTimeout(() => {
          longPressed = true;
          applyLife(parseInt(btn.dataset.p), parseInt(btn.dataset.d5));
        }, 500);
      });
      btn.addEventListener("pointerup",    () => { clearTimeout(pressTimer); if (!longPressed) applyLife(parseInt(btn.dataset.p), parseInt(btn.dataset.d)); });
      btn.addEventListener("pointerleave", () => clearTimeout(pressTimer));
    });

    document.getElementById("reset-btn")?.addEventListener("click", () => {
      state.lives = [20, 20];
      render();
    });

    document.getElementById("dice-btn")?.addEventListener("click", openDice);
  }
}

// ── draw logic ───────────────────────────────────────────────

let drawing = false;

function startDraw() {
  if (drawing) return;
  drawing = true;
  sfxDraw();
  state.phase = "drawing";
  render();

  const final = pickTwo();
  let count = 0;

  const iv = setInterval(() => {
    count++;
    const stage = document.getElementById("stage");
    if (stage) {
      const r1 = decks[Math.floor(Math.random() * decks.length)];
      const r2 = decks[Math.floor(Math.random() * decks.length)];
      stage.innerHTML =
        miniCard(r1, "Jogador 1", "spinning") +
        '<div class="vs-badge">VS</div>' +
        miniCard(r2, "Jogador 2", "spinning");
    }
    if (count >= 16) { clearInterval(iv); revealResult(final); }
  }, 85);
}

function revealResult(final) {
  state.picks = final;
  state.lives = [20, 20];
  state.phase = "result";
  render();
  sfxReveal();
  setTimeout(() => document.querySelectorAll(".spark").forEach(s => s.classList.add("go")), 20);
  setTimeout(() => { drawing = false; }, 900);
}

// ── boot ─────────────────────────────────────────────────────

render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(import.meta.env.BASE_URL + "sw.js").catch(() => {});
  });
}
