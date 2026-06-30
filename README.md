# Arcano Picker

Randomizador místico de decks (Magic) para uso entre amigos, como PWA instalável.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Customizar os decks

Edite `src/decks.js`. Cada deck tem:

- `id`: número exibido (1, 2, 3...)
- `name`: nome do deck
- `color`: cor de destaque (hex)
- `symbol`: emoji ou caractere usado como ícone na carta
- `description`: texto curto opcional

Não precisa reiniciar nada além do hot-reload do Vite — a mudança aparece sozinha.

## Build de produção

```bash
npm run build
npm run preview   # testa o build localmente
```

Os arquivos finais ficam em `dist/`.

## Deploy (pra ficar instalável pelos amigos)

Qualquer host de site estático funciona. Sugestões rápidas e gratuitas:

- **Vercel**: `npx vercel` na raiz do projeto
- **Netlify**: arrasta a pasta `dist/` em netlify.com/drop, ou conecta o repo
- **GitHub Pages**: sobe o `dist/` pra uma branch `gh-pages`

Depois do deploy, cada amigo abre o link no celular e:

- **Android (Chrome)**: aparece banner "Adicionar à tela inicial" ou usa o menu (⋮) → "Instalar app"
- **iPhone (Safari)**: botão de compartilhar → "Adicionar à Tela de Início"

## Ícones

Os ícones em `public/icon-192.png` e `public/icon-512.png` são placeholders gerados
a partir do favicon padrão do Vite. Troque por uma arte própria (mesmo tamanho)
quando tiver o visual final do tema.

## Próximo passo: gerar APK (opcional)

Se mais pra frente quiserem um .apk de fato (em vez de instalar via navegador),
o mesmo código pode ser empacotado com Capacitor sem reescrever nada:

```bash
npm install @capacitor/core @capacitor/cli
npx cap init "Arcano Picker" "com.seunome.arcanopicker"
npm run build
npx cap add android
npx cap copy
npx cap open android   # abre no Android Studio para build/assinatura
```

## Estrutura

```
src/
  decks.js     <- configuração dos decks (editar aqui)
  main.js      <- lógica do picker e animações
  style.css    <- tema visual (cores, animações)
public/
  manifest.json <- metadados do PWA
  sw.js         <- service worker (cache offline)
  icon-*.png    <- ícones do app
```
