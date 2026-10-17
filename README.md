# Portfolio di Domenico Avino

Portfolio personale bilingue italiano/inglese costruito con React, TypeScript, Vite e Tailwind CSS. L'interfaccia riprende il template Windows XP di [fsystemweb/xp-portfolio](https://github.com/fsystemweb/xp-portfolio), personalizzato per Domenico Avino a partire dal commit [`54ff0ca`](https://github.com/fsystemweb/xp-portfolio/commit/54ff0ca45465ef142054032ccf73f01e598bbc4b).

## Sviluppo locale

Richiede Node.js 24 e usa le versioni bloccate in `package-lock.json`.

```bash
npm ci
npm run dev -- --host 127.0.0.1
```

Aprire l'indirizzo mostrato da Vite, normalmente `http://127.0.0.1:5173/`.

Prima della pubblicazione:

```bash
npm run typecheck
npm test -- --run
npm run build
```

Il build di produzione viene scritto in `dist/` con base `/`, adatta al sito utente <https://gyalecta.github.io/>.

## Contenuti e lingua

- `src/data/portfolio.json` contiene i dati del portfolio.
- `src/components/` contiene desktop, barra delle applicazioni e finestre.
- `src/index.css` contiene lo stile dell'interfaccia.
- `public/images/` contiene immagini e icone servite senza trasformazioni.
- `src/components/__tests__/` contiene i test Vitest; `src/setup-tests.ts` configura i matcher del DOM.

L'italiano è la lingua predefinita. La scelta viene salvata nel browser con la chiave `portfolio-language`; il parametro `?lang=it` o `?lang=en` ha precedenza sul valore salvato. Il pulsante della lingua nella system tray permette di passare tra IT e EN.

## Pubblicazione

Il workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) installa con `npm ci`, esegue type-check, test e build, quindi pubblica esclusivamente `dist/` su GitHub Pages. La pubblicazione parte da ogni push su `main` o manualmente; il job di deploy viene eseguito soltanto se tutti i controlli del job di build hanno successo.

Per ripristinare una versione precedente, eseguire il revert del commit interessato su `main` e avviare nuovamente il workflow. Le dipendenze restano determinate da `package-lock.json` e ogni esecuzione produce un nuovo artefatto Pages dal contenuto ripristinato.

## Provenienza

Il README originale del template è conservato in [`docs/upstream-xp-README.md`](docs/upstream-xp-README.md). Le condizioni dichiarate dall'autore e le note sugli asset sono riepilogate in [`NOTICE.md`](NOTICE.md).
