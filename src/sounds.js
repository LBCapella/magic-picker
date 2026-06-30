let _ctx = null;

function ctx() {
  if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (_ctx.state === "suspended") _ctx.resume();
  return _ctx;
}

function note(c, type, freq, t, dur, gain = 0.18) {
  const o = c.createOscillator(), g = c.createGain();
  o.connect(g); g.connect(c.destination);
  o.type = type; o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(gain, t);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.start(t); o.stop(t + dur);
}

export function sfxDamage() {
  try {
    const c = ctx(), o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination);
    o.type = "sawtooth";
    o.frequency.setValueAtTime(260, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(55, c.currentTime + 0.22);
    g.gain.setValueAtTime(0.38, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.22);
    o.start(); o.stop(c.currentTime + 0.22);
  } catch(e) {}
}

export function sfxHeal() {
  try {
    const c = ctx();
    [523, 659, 784].forEach((f, i) => note(c, "sine", f, c.currentTime + i * 0.09, 0.3, 0.14));
  } catch(e) {}
}

export function sfxKO() {
  try {
    const c = ctx();
    [300, 240, 180, 130, 95].forEach((f, i) =>
      note(c, "square", f, c.currentTime + i * 0.17, 0.34, 0.22));
  } catch(e) {}
}

export function sfxDraw() {
  try {
    const c = ctx(), o = c.createOscillator(), g = c.createGain();
    o.connect(g); g.connect(c.destination);
    o.type = "sine";
    o.frequency.setValueAtTime(260, c.currentTime);
    o.frequency.exponentialRampToValueAtTime(1040, c.currentTime + 0.45);
    g.gain.setValueAtTime(0.12, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.5);
    o.start(); o.stop(c.currentTime + 0.5);
  } catch(e) {}
}

export function sfxDice() {
  try {
    const c = ctx();
    for (let i = 0; i < 7; i++)
      note(c, "square", 100 + Math.random() * 250, c.currentTime + i * 0.046, 0.07, 0.1);
  } catch(e) {}
}

export function sfxCoin() {
  try {
    const c = ctx();
    [880, 660, 880, 660, 880].forEach((f, i) =>
      note(c, "sine", f, c.currentTime + i * 0.055, 0.1, 0.17));
  } catch(e) {}
}

export function sfxReveal() {
  try {
    const c = ctx();
    [330, 415, 523, 659, 784].forEach((f, i) =>
      note(c, "triangle", f, c.currentTime + i * 0.07, 0.28, 0.13));
  } catch(e) {}
}

export function sfxRoulette() {
  try {
    const c = ctx();
    for (let i = 0; i < 10; i++)
      note(c, "square", 200 + i * 28, c.currentTime + i * 0.075, 0.06, 0.08);
  } catch(e) {}
}
