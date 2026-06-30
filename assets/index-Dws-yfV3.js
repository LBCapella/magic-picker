(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:1,name:`Mono-Black Demons`,color:`#a855f7`,symbol:`👹`},{id:2,name:`Mono-Black Moonshadow`,color:`#9333ea`,symbol:`🌙`},{id:3,name:`Mono-Blue Lessons`,color:`#3b82f6`,symbol:`📚`},{id:4,name:`Mono-Green Stompy`,color:`#22c55e`,symbol:`🦖`},{id:5,name:`Mono-Red Aggro`,color:`#ef4444`,symbol:`⚡`},{id:6,name:`Mono-White Angels`,color:`#fbbf24`,symbol:`👼`},{id:7,name:`Mono-White Auras`,color:`#f59e0b`,symbol:`✨`},{id:8,name:`Azorius Tempo`,color:`#7db3e8`,symbol:`⏳`},{id:9,name:`Boros Burn`,color:`#f97316`,symbol:`🔥`},{id:10,name:`Boros Dragons`,color:`#ea580c`,symbol:`🐉`},{id:11,name:`Boros Tokens`,color:`#fb923c`,symbol:`⚔️`},{id:12,name:`Dimir Excruciator`,color:`#4a6fa5`,symbol:`💀`},{id:13,name:`Dimir Midrange`,color:`#3b5f8a`,symbol:`🕵️`},{id:14,name:`Golgari Mutagen`,color:`#4a7a4a`,symbol:`🍄`},{id:15,name:`Gruul Landfall`,color:`#c17a30`,symbol:`🌋`},{id:16,name:`Izzet Affinity`,color:`#8b5cf6`,symbol:`⚙️`},{id:17,name:`Izzet Prowess`,color:`#7c3aed`,symbol:`🌀`},{id:18,name:`Orzhov Sacrifice`,color:`#9ca3af`,symbol:`💎`},{id:19,name:`Rakdos Goblins`,color:`#dc4444`,symbol:`🔱`},{id:20,name:`Selesnya Kithkin`,color:`#84cc16`,symbol:`🌸`},{id:21,name:`Selesnya Rabbits`,color:`#65a30d`,symbol:`🐰`},{id:22,name:`Simic Ouroboroid`,color:`#14b8a6`,symbol:`🧬`},{id:23,name:`Abzan Lifegain`,color:`#7c6d4e`,symbol:`💚`},{id:24,name:`Bant Airbending`,color:`#5fa88a`,symbol:`🌪️`},{id:25,name:`Esper Mill`,color:`#7090b8`,symbol:`📖`},{id:26,name:`Esper Ninjas`,color:`#607aaa`,symbol:`🥷`},{id:27,name:`Esper Pixie`,color:`#8090c8`,symbol:`🧚`},{id:28,name:`Grixis Monument`,color:`#6347a0`,symbol:`🏛️`},{id:29,name:`Jeskai Artifacts`,color:`#c98040`,symbol:`🔮`},{id:30,name:`Jund Fling`,color:`#8a5a28`,symbol:`🎯`},{id:31,name:`Mardu Iroh's Offering`,color:`#c05070`,symbol:`🍵`},{id:32,name:`Naya Counters`,color:`#c8a030`,symbol:`🌿`},{id:33,name:`Naya Yuna`,color:`#d4a820`,symbol:`🌺`},{id:34,name:`Sultai Reanimator`,color:`#3a7a60`,symbol:`🧟`},{id:35,name:`Temur Omniscience`,color:`#40a855`,symbol:`🔭`},{id:36,name:`Blackless Allies`,color:`#d0a040`,symbol:`🤝`},{id:37,name:`Blueless Dinosaurs`,color:`#cc6030`,symbol:`🦕`},{id:38,name:`Greenless Control`,color:`#a050c0`,symbol:`🛡️`},{id:39,name:`Whiteless Elementals`,color:`#5080c0`,symbol:`🌊`},{id:40,name:`Rainbow Shrines`,color:`#e040fb`,symbol:`🌈`}],t=null;function n(){return t||=new(window.AudioContext||window.webkitAudioContext),t.state===`suspended`&&t.resume(),t}function r(e,t,n,r,i,a=.18){let o=e.createOscillator(),s=e.createGain();o.connect(s),s.connect(e.destination),o.type=t,o.frequency.setValueAtTime(n,r),s.gain.setValueAtTime(a,r),s.gain.exponentialRampToValueAtTime(.001,r+i),o.start(r),o.stop(r+i)}function i(){try{let e=n(),t=e.createOscillator(),r=e.createGain();t.connect(r),r.connect(e.destination),t.type=`sawtooth`,t.frequency.setValueAtTime(260,e.currentTime),t.frequency.exponentialRampToValueAtTime(55,e.currentTime+.22),r.gain.setValueAtTime(.38,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.22),t.start(),t.stop(e.currentTime+.22)}catch{}}function a(){try{let e=n();[523,659,784].forEach((t,n)=>r(e,`sine`,t,e.currentTime+n*.09,.3,.14))}catch{}}function o(){try{let e=n();[300,240,180,130,95].forEach((t,n)=>r(e,`square`,t,e.currentTime+n*.17,.34,.22))}catch{}}function s(){try{let e=n(),t=e.createOscillator(),r=e.createGain();t.connect(r),r.connect(e.destination),t.type=`sine`,t.frequency.setValueAtTime(260,e.currentTime),t.frequency.exponentialRampToValueAtTime(1040,e.currentTime+.45),r.gain.setValueAtTime(.12,e.currentTime),r.gain.exponentialRampToValueAtTime(.001,e.currentTime+.5),t.start(),t.stop(e.currentTime+.5)}catch{}}function c(){try{let e=n();for(let t=0;t<7;t++)r(e,`square`,100+Math.random()*250,e.currentTime+t*.046,.07,.1)}catch{}}function l(){try{let e=n();[880,660,880,660,880].forEach((t,n)=>r(e,`sine`,t,e.currentTime+n*.055,.1,.17))}catch{}}function u(){try{let e=n();[330,415,523,659,784].forEach((t,n)=>r(e,`triangle`,t,e.currentTime+n*.07,.28,.13))}catch{}}function d(){try{let e=n();for(let t=0;t<10;t++)r(e,`square`,200+t*28,e.currentTime+t*.075,.06,.08)}catch{}}var f=document.querySelector(`#app`),p={tab:`picker`,phase:`idle`,picks:null,lives:[20,20]};function m(){let t=[...e].sort(()=>Math.random()-.5);return[t[0],t[1]]}function h(e=50){let t=``;for(let n=0;n<e;n++){let e=Math.random()*100,n=Math.random()*100,r=Math.random()*3,i=1+Math.random()*2;t+=`<div class="star" style="top:${e}%;left:${n}%;animation-delay:${r}s;width:${i}px;height:${i}px"></div>`}return t}function g(){let e=``;for(let t=0;t<18;t++){let n=Math.PI*2*t/18,r=70+Math.random()*50;e+=`<div class="spark" style="--dx:${Math.cos(n)*r}px;--dy:${Math.sin(n)*r}px"></div>`}return`<div class="burst" id="burst">${e}</div>`}function _(e,t=7){let n=``;for(let r=0;r<t;r++){let t=5+Math.random()*88,r=Math.random()*5,i=4+Math.random()*4,a=2+Math.random()*4;n+=`<div class="amb-particle" style="left:${t}%;animation-delay:${r}s;animation-duration:${i}s;width:${a}px;height:${a}px;background:${e}"></div>`}return`<div class="amb-particles">${n}</div>`}function v(e,t,n=``){return`
    <div class="mini-card ${n}" style="--c:${e.color}">
      <div class="mc-sym">${e.symbol}</div>
      <div class="mc-label">${t}</div>
      <div class="mc-name">${e.name}</div>
    </div>`}function y(e){return e<=0?`💀`:e}function b(){let{phase:t,picks:n}=p;if(t===`idle`)return`
      <div class="stars">${h()}</div>
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
        <div class="footer-note">${e.length} decks no grimório</div>
      </div>`;if(t===`drawing`){let t=e[Math.floor(Math.random()*e.length)];return`
      <div class="stars">${h()}</div>
      <div class="picker-scroll">
        <div class="header compact">
          <h1>✦ Arcano Picker ✦</h1>
          <p>Invocando...</p>
        </div>
        <div class="dual-stage" id="stage">
          ${v(t,`Jogador 1`,`spinning`)}
          <div class="vs-badge">VS</div>
          ${v(t,`Jogador 2`,`spinning`)}
        </div>
      </div>`}let[r,i]=n;return`
    <div class="stars">${h()}</div>
    <div class="picker-scroll">
      <div class="header compact">
        <h1>✦ Arcano Picker ✦</h1>
        <p>Decks sorteados!</p>
      </div>
      <div class="dual-stage" id="stage">
        ${v(r,`Jogador 1`,`reveal`)}
        <div class="vs-badge">VS</div>
        ${v(i,`Jogador 2`,`reveal`)}
        ${g()}
      </div>
      <div class="who-area">
        <button class="who-btn" id="who-btn">⚔️ Quem começa?</button>
        <div class="who-result" id="who-result"></div>
      </div>
      <div class="controls">
        <button class="pill-btn secondary" id="redraw-btn">↺ Sortear de Novo</button>
        <button class="pill-btn primary" id="go-counter-btn">♥ Contador de Vida</button>
      </div>
      <div class="footer-note">${e.length} decks no grimório</div>
    </div>`}function x(){let[e,t]=p.picks||[{name:`Jogador 1`,color:`#9b5de5`,symbol:`✦`},{name:`Jogador 2`,color:`#9b5de5`,symbol:`✦`}],[n,r]=p.lives,i=e=>`pz-life${e<=5&&e>0?` danger`:``}${e<=0?` dead`:``}`;return`
    <div class="counter-screen">

      <div class="player-zone" id="zone-1" style="--pc:${t.color}">
        ${_(t.color)}
        <div class="pz-watermark">${t.symbol}</div>
        <div class="pz-inner flipped">
          <div class="pz-deck">${t.symbol} ${t.name}</div>
          <div class="${i(r)}" id="life-2">${y(r)}</div>
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

      <div class="player-zone" id="zone-0" style="--pc:${e.color}">
        ${_(e.color)}
        <div class="pz-watermark">${e.symbol}</div>
        <div class="pz-inner">
          <div class="pz-deck">${e.symbol} ${e.name}</div>
          <div class="${i(n)}" id="life-1">${y(n)}</div>
          <div class="pz-controls">
            <button class="pz-btn pz-minus" data-p="0" data-d="-1" data-d5="-5">−</button>
            <button class="pz-btn pz-plus"  data-p="0" data-d="1"  data-d5="5">+</button>
          </div>
        </div>
      </div>

    </div>`}function S(){let e=p.tab===`picker`;return`
    <nav class="tab-bar">
      <button class="tab-btn ${e?`active`:``}" data-tab="picker">✦ Sorteador</button>
      <button class="tab-btn ${e?``:`active`}" data-tab="counter">♥ Vida</button>
    </nav>`}function C(){f.innerHTML=(p.tab===`picker`?b():x())+S(),j()}function w(e,t){let n=document.createElement(`div`);n.className=`float-num ${t<0?`float-dmg`:`float-heal`}`,n.textContent=t>0?`+${t}`:`${t}`,n.style.left=20+Math.random()*60+`%`,n.style.top=25+Math.random()*35+`%`,e.appendChild(n),setTimeout(()=>n.remove(),950)}function T(e,t){if(p.lives[e]<=0)return;p.lives[e]=Math.max(0,p.lives[e]+t);let n=p.lives[e];t<0?i():a();let r=document.getElementById(`life-${e+1}`),o=document.getElementById(`zone-${e}`);r&&(r.textContent=y(n),r.className=`pz-life${n<=5&&n>0?` danger`:``}${n<=0?` dead`:``}`,t<0&&n>0&&(r.classList.remove(`shake`),r.offsetWidth,r.classList.add(`shake`))),o&&(o.classList.remove(`flash-dmg`,`flash-heal`),o.offsetWidth,o.classList.add(t<0?`flash-dmg`:`flash-heal`),w(o,t)),n<=0&&setTimeout(E,400)}function E(){if(document.getElementById(`ko-overlay`))return;o();let e=p.lives.findIndex(e=>e<=0),t=+(e===0),n=p.picks[e],r=p.picks[t],i=document.createElement(`div`);i.id=`ko-overlay`,i.className=`ko-overlay`,i.innerHTML=`
    <div class="ko-content">
      <div class="ko-skull">💀</div>
      <div class="ko-title">DERROTA</div>
      <div class="ko-loser">${n.symbol} ${n.name}</div>
      <div class="ko-sep">⸻</div>
      <div class="ko-win-label">🏆 VITÓRIA</div>
      <div class="ko-winner">${r.symbol} ${r.name}</div>
      <button class="pill-btn primary" id="ko-new-game">↺ Nova Partida</button>
    </div>`;let a=document.querySelector(`.counter-screen`);a&&a.appendChild(i),document.getElementById(`ko-new-game`).addEventListener(`click`,()=>{p.lives=[20,20],C()})}function D(){let e=document.querySelector(`.counter-screen`);if(!e)return;e.classList.add(`battle-intro`),setTimeout(()=>e.classList.remove(`battle-intro`),700);let t=document.createElement(`div`);t.className=`battle-flash`,t.textContent=`⚔️  DUELO  ⚔️`,e.appendChild(t),setTimeout(()=>t.remove(),1e3)}function O(){if(document.getElementById(`dice-overlay`))return;let e=document.createElement(`div`);e.id=`dice-overlay`,e.className=`dice-overlay`,e.innerHTML=`
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
    </div>`,document.body.appendChild(e),e.addEventListener(`click`,t=>{t.target===e&&e.remove()}),document.getElementById(`dice-close`).addEventListener(`click`,()=>e.remove()),document.getElementById(`d-coin`).addEventListener(`click`,()=>{l(),k(`coin`)}),document.getElementById(`d-d6`).addEventListener(`click`,()=>{c(),k(`d6`)}),document.getElementById(`d-d20`).addEventListener(`click`,()=>{c(),k(`d20`)})}function k(e){let t=document.getElementById(`dice-result-area`);if(!t)return;let n=[`👑 Cara`,`🌕 Coroa`],r=e===`coin`?2:e===`d6`?6:20,i=e===`coin`?Math.floor(Math.random()*2):Math.floor(Math.random()*r)+1;t.innerHTML=`<div class="dice-rolling">•••</div>`;let a=0,o=setInterval(()=>{if(a++,t.innerHTML=`<div class="dice-rolling">${e===`coin`?n[Math.floor(Math.random()*2)]:Math.floor(Math.random()*r)+1}</div>`,a>=14){clearInterval(o);let a=e===`coin`?n[i]:i;t.innerHTML=`<div class="dice-final${e!==`coin`&&i>=r*.75?` high`:``}">${a}</div>`,u()}},60)}function A(){let e=document.getElementById(`who-btn`),t=document.getElementById(`who-result`);if(!e||!t||!p.picks)return;e.disabled=!0,d();let[n,r]=p.picks,i=[{label:`Jogador 1`,deck:n},{label:`Jogador 2`,deck:r}],a=Math.floor(Math.random()*2),o=0,s=setInterval(()=>{if(t.innerHTML=`<div class="who-spinning">${i[o%2].label}</div>`,o++,o>=12){clearInterval(s);let e=i[a];t.innerHTML=`
        <div class="who-final">
          <div class="who-player">${e.label} começa!</div>
          <div class="who-deck-name">${e.deck.symbol} ${e.deck.name}</div>
        </div>`,u()}},80)}function j(){document.querySelectorAll(`.tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{p.tab=e.dataset.tab,C()})}),p.tab===`picker`&&(document.getElementById(`orb`)?.addEventListener(`click`,N),document.getElementById(`redraw-btn`)?.addEventListener(`click`,N),document.getElementById(`who-btn`)?.addEventListener(`click`,A),document.getElementById(`go-counter-btn`)?.addEventListener(`click`,()=>{p.tab=`counter`,C(),D(),s()})),p.tab===`counter`&&(document.querySelectorAll(`.pz-btn`).forEach(e=>{let t=null,n=!1;e.addEventListener(`pointerdown`,()=>{n=!1,t=setTimeout(()=>{n=!0,T(parseInt(e.dataset.p),parseInt(e.dataset.d5))},500)}),e.addEventListener(`pointerup`,()=>{clearTimeout(t),n||T(parseInt(e.dataset.p),parseInt(e.dataset.d))}),e.addEventListener(`pointerleave`,()=>clearTimeout(t))}),document.getElementById(`reset-btn`)?.addEventListener(`click`,()=>{p.lives=[20,20],C()}),document.getElementById(`dice-btn`)?.addEventListener(`click`,O))}var M=!1;function N(){if(M)return;M=!0,s(),p.phase=`drawing`,C();let t=m(),n=0,r=setInterval(()=>{n++;let i=document.getElementById(`stage`);if(i){let t=e[Math.floor(Math.random()*e.length)],n=e[Math.floor(Math.random()*e.length)];i.innerHTML=v(t,`Jogador 1`,`spinning`)+`<div class="vs-badge">VS</div>`+v(n,`Jogador 2`,`spinning`)}n>=16&&(clearInterval(r),P(t))},85)}function P(e){p.picks=e,p.lives=[20,20],p.phase=`result`,C(),u(),setTimeout(()=>document.querySelectorAll(`.spark`).forEach(e=>e.classList.add(`go`)),20),setTimeout(()=>{M=!1},900)}C(),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/magic-picker/sw.js`).catch(()=>{})});