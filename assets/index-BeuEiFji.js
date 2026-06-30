(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:1,name:`Mono-Black Demons`,color:`#a855f7`,symbol:`👹`},{id:2,name:`Mono-Black Moonshadow`,color:`#9333ea`,symbol:`🌙`},{id:3,name:`Mono-Blue Lessons`,color:`#3b82f6`,symbol:`📚`},{id:4,name:`Mono-Green Stompy`,color:`#22c55e`,symbol:`🦖`},{id:5,name:`Mono-Red Aggro`,color:`#ef4444`,symbol:`⚡`},{id:6,name:`Mono-White Angels`,color:`#fbbf24`,symbol:`👼`},{id:7,name:`Mono-White Auras`,color:`#f59e0b`,symbol:`✨`},{id:8,name:`Azorius Tempo`,color:`#7db3e8`,symbol:`⏳`},{id:9,name:`Boros Burn`,color:`#f97316`,symbol:`🔥`},{id:10,name:`Boros Dragons`,color:`#ea580c`,symbol:`🐉`},{id:11,name:`Boros Tokens`,color:`#fb923c`,symbol:`⚔️`},{id:12,name:`Dimir Excruciator`,color:`#4a6fa5`,symbol:`💀`},{id:13,name:`Dimir Midrange`,color:`#3b5f8a`,symbol:`🕵️`},{id:14,name:`Golgari Mutagen`,color:`#4a7a4a`,symbol:`🍄`},{id:15,name:`Gruul Landfall`,color:`#c17a30`,symbol:`🌋`},{id:16,name:`Izzet Affinity`,color:`#8b5cf6`,symbol:`⚙️`},{id:17,name:`Izzet Prowess`,color:`#7c3aed`,symbol:`🌀`},{id:18,name:`Orzhov Sacrifice`,color:`#9ca3af`,symbol:`💎`},{id:19,name:`Rakdos Goblins`,color:`#dc4444`,symbol:`🔱`},{id:20,name:`Selesnya Kithkin`,color:`#84cc16`,symbol:`🌸`},{id:21,name:`Selesnya Rabbits`,color:`#65a30d`,symbol:`🐰`},{id:22,name:`Simic Ouroboroid`,color:`#14b8a6`,symbol:`🧬`},{id:23,name:`Abzan Lifegain`,color:`#7c6d4e`,symbol:`💚`},{id:24,name:`Bant Airbending`,color:`#5fa88a`,symbol:`🌪️`},{id:25,name:`Esper Mill`,color:`#7090b8`,symbol:`📖`},{id:26,name:`Esper Ninjas`,color:`#607aaa`,symbol:`🥷`},{id:27,name:`Esper Pixie`,color:`#8090c8`,symbol:`🧚`},{id:28,name:`Grixis Monument`,color:`#6347a0`,symbol:`🏛️`},{id:29,name:`Jeskai Artifacts`,color:`#c98040`,symbol:`🔮`},{id:30,name:`Jund Fling`,color:`#8a5a28`,symbol:`🎯`},{id:31,name:`Mardu Iroh's Offering`,color:`#c05070`,symbol:`🍵`},{id:32,name:`Naya Counters`,color:`#c8a030`,symbol:`🌿`},{id:33,name:`Naya Yuna`,color:`#d4a820`,symbol:`🌺`},{id:34,name:`Sultai Reanimator`,color:`#3a7a60`,symbol:`🧟`},{id:35,name:`Temur Omniscience`,color:`#40a855`,symbol:`🔭`},{id:36,name:`Blackless Allies`,color:`#d0a040`,symbol:`🤝`},{id:37,name:`Blueless Dinosaurs`,color:`#cc6030`,symbol:`🦕`},{id:38,name:`Greenless Control`,color:`#a050c0`,symbol:`🛡️`},{id:39,name:`Whiteless Elementals`,color:`#5080c0`,symbol:`🌊`},{id:40,name:`Rainbow Shrines`,color:`#e040fb`,symbol:`🌈`}],t=document.querySelector(`#app`),n={tab:`picker`,phase:`idle`,picks:null,lives:[20,20]};function r(){let t=[...e].sort(()=>Math.random()-.5);return[t[0],t[1]]}function i(e=50){let t=``;for(let n=0;n<e;n++){let e=Math.random()*100,n=Math.random()*100,r=Math.random()*3,i=1+Math.random()*2;t+=`<div class="star" style="top:${e}%;left:${n}%;animation-delay:${r}s;width:${i}px;height:${i}px"></div>`}return t}function a(){let e=``;for(let t=0;t<18;t++){let n=Math.PI*2*t/18,r=70+Math.random()*50;e+=`<div class="spark" style="--dx:${Math.cos(n)*r}px;--dy:${Math.sin(n)*r}px"></div>`}return`<div class="burst" id="burst">${e}</div>`}function o(e,t,n=``){return`
    <div class="mini-card ${n}" style="--c:${e.color}">
      <div class="mc-sym">${e.symbol}</div>
      <div class="mc-label">${t}</div>
      <div class="mc-name">${e.name}</div>
    </div>`}function s(e){return e<=0?`💀`:e}function c(){let{phase:t,picks:r}=n;if(t===`idle`)return`
      <div class="stars">${i()}</div>
      <div class="picker-scroll">
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
        <div class="footer-note">${e.length} decks no grimório</div>
      </div>`;if(t===`drawing`){let t=e[Math.floor(Math.random()*e.length)];return`
      <div class="stars">${i()}</div>
      <div class="picker-scroll">
        <div class="header compact">
          <h1>✦ Arcano Picker ✦</h1>
          <p>Invocando...</p>
        </div>
        <div class="dual-stage" id="stage">
          ${o(t,`Jogador 1`,`spinning`)}
          <div class="vs-badge">VS</div>
          ${o(t,`Jogador 2`,`spinning`)}
        </div>
      </div>`}let[s,c]=r;return`
    <div class="stars">${i()}</div>
    <div class="picker-scroll">
      <div class="header compact">
        <h1>✦ Arcano Picker ✦</h1>
        <p>Decks sorteados!</p>
      </div>
      <div class="dual-stage" id="stage">
        ${o(s,`Jogador 1`,`reveal`)}
        <div class="vs-badge">VS</div>
        ${o(c,`Jogador 2`,`reveal`)}
        ${a()}
      </div>
      <div class="controls">
        <button class="pill-btn secondary" id="redraw-btn">↺ Sortear de Novo</button>
        <button class="pill-btn primary" id="go-counter-btn">♥ Contador de Vida</button>
      </div>
      <div class="footer-note">${e.length} decks no grimório</div>
    </div>`}function l(){let[e,t]=n.picks||[{name:`Jogador 1`,color:`#9b5de5`,symbol:`✦`},{name:`Jogador 2`,color:`#9b5de5`,symbol:`✦`}],[r,i]=n.lives,a=e=>`pz-life${e<=5&&e>0?` danger`:``}${e<=0?` dead`:``}`;return`
    <div class="counter-screen">

      <!-- Jogador 2 — topo (virado) -->
      <div class="player-zone" id="zone-1" style="--pc:${t.color}">
        <div class="pz-watermark">${t.symbol}</div>
        <div class="pz-inner flipped">
          <div class="pz-deck">${t.symbol} ${t.name}</div>
          <div class="${a(i)}" id="life-2">${s(i)}</div>
          <div class="pz-controls">
            <button class="pz-btn pz-minus" data-p="1" data-d="-1" data-d5="-5">−</button>
            <button class="pz-btn pz-plus"  data-p="1" data-d="1"  data-d5="5">+</button>
          </div>
        </div>
      </div>

      <!-- Divisor -->
      <div class="counter-divider">
        <button class="reset-btn" id="reset-btn">↺ 20</button>
      </div>

      <!-- Jogador 1 — base -->
      <div class="player-zone" id="zone-0" style="--pc:${e.color}">
        <div class="pz-watermark">${e.symbol}</div>
        <div class="pz-inner">
          <div class="pz-deck">${e.symbol} ${e.name}</div>
          <div class="${a(r)}" id="life-1">${s(r)}</div>
          <div class="pz-controls">
            <button class="pz-btn pz-minus" data-p="0" data-d="-1" data-d5="-5">−</button>
            <button class="pz-btn pz-plus"  data-p="0" data-d="1"  data-d5="5">+</button>
          </div>
        </div>
      </div>

    </div>`}function u(){let e=n.tab===`picker`;return`
    <nav class="tab-bar">
      <button class="tab-btn ${e?`active`:``}" data-tab="picker">✦ Sorteador</button>
      <button class="tab-btn ${e?``:`active`}" data-tab="counter">♥ Vida</button>
    </nav>`}function d(){t.innerHTML=(n.tab===`picker`?c():l())+u(),m()}function f(e,t){let n=document.createElement(`div`);n.className=`float-num ${t<0?`float-dmg`:`float-heal`}`,n.textContent=t>0?`+${t}`:`${t}`,n.style.left=25+Math.random()*50+`%`,n.style.top=30+Math.random()*30+`%`,e.appendChild(n),setTimeout(()=>n.remove(),950)}function p(e,t){n.lives[e]=Math.max(0,n.lives[e]+t);let r=n.lives[e],i=document.getElementById(`life-${e+1}`),a=document.getElementById(`zone-${e}`);i&&(i.textContent=s(r),i.className=`pz-life${r<=5&&r>0?` danger`:``}${r<=0?` dead`:``}`,t<0&&r>0&&(i.classList.remove(`shake`),i.offsetWidth,i.classList.add(`shake`))),a&&(a.classList.remove(`flash-dmg`,`flash-heal`),a.offsetWidth,a.classList.add(t<0?`flash-dmg`:`flash-heal`),f(a,t))}function m(){document.querySelectorAll(`.tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{n.tab=e.dataset.tab,d()})}),n.tab===`picker`&&(document.getElementById(`orb`)?.addEventListener(`click`,g),document.getElementById(`redraw-btn`)?.addEventListener(`click`,g),document.getElementById(`go-counter-btn`)?.addEventListener(`click`,()=>{n.tab=`counter`,d()})),n.tab===`counter`&&(document.querySelectorAll(`.pz-btn`).forEach(e=>{let t=null,n=!1;e.addEventListener(`pointerdown`,()=>{n=!1,t=setTimeout(()=>{n=!0,p(parseInt(e.dataset.p),parseInt(e.dataset.d5))},500)}),e.addEventListener(`pointerup`,()=>{clearTimeout(t),n||p(parseInt(e.dataset.p),parseInt(e.dataset.d))}),e.addEventListener(`pointerleave`,()=>clearTimeout(t))}),document.getElementById(`reset-btn`)?.addEventListener(`click`,()=>{n.lives=[20,20],d()}))}var h=!1;function g(){if(h)return;h=!0,n.phase=`drawing`,d();let t=r(),i=0,a=setInterval(()=>{i++;let n=document.getElementById(`stage`);if(n){let t=e[Math.floor(Math.random()*e.length)],r=e[Math.floor(Math.random()*e.length)];n.innerHTML=o(t,`Jogador 1`,`spinning`)+`<div class="vs-badge">VS</div>`+o(r,`Jogador 2`,`spinning`)}i>=16&&(clearInterval(a),_(t))},85)}function _(e){n.picks=e,n.lives=[20,20],n.phase=`result`,d(),setTimeout(()=>{document.querySelectorAll(`.spark`).forEach(e=>e.classList.add(`go`))},20),setTimeout(()=>{h=!1},900)}d(),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`/magic-picker/sw.js`).catch(()=>{})});