# Portfolio di Domenico Avino

Portfolio personale statico, bilingue italiano/inglese, pubblicato con GitHub Pages. Presenta il percorso di studi, gli interessi, le certificazioni e i contatti di Domenico Avino. Il pulsante GitHub porta al profilo personale.

## Struttura

- `index.html`: contenuti e struttura della pagina.
- `styles.css`: layout responsive e stile visivo.
- `script.js`: cambio lingua e interazioni.
- `assets/portrait.webp`: copia ottimizzata della foto fornita, inquadrata con CSS.
- `assets/m7-hubble.webp` e `assets/saturn-cassini.jpg`: fotografie astronomiche reali Hubble e Cassini.
- `assets/icons/`: SVG originali Bootstrap Icons, usati anche per la favicon.
- `assets/credits.txt`: fonti, attribuzioni e riferimenti alle licenze incluse.
- `assets/manrope-latin.ttf`: carattere Manrope ospitato localmente.
- `.github/workflows/deploy.yml`: pubblicazione su GitHub Pages senza fase di build.

## Anteprima locale

Dalla cartella principale del repository:

```bash
python -m http.server 4173 --bind 127.0.0.1
```

Aprire `http://127.0.0.1:4173/`. La lingua iniziale è l'italiano; la scelta IT/EN viene salvata nel browser. Per aprire direttamente la versione inglese usare `http://127.0.0.1:4173/?lang=en`.

Non sono richieste dipendenze o una fase di build. I testi di base restano leggibili in italiano anche senza JavaScript. Tutte le icone e le fotografie sono asset esistenti salvati nel repository; non vengono caricate da CDN a ogni visita.

## Pubblicazione

Nel repository `Gyalecta/gyalecta.github.io`, aprire **Settings → Pages** e impostare **Source** su **GitHub Actions**. Ogni push sul branch `main`, oppure un avvio manuale del workflow, pubblica esclusivamente i file del sito preparati in `_site`.

Il sito sarà disponibile all'indirizzo <https://gyalecta.github.io/>. Per annullare una versione, eseguire il revert del commit interessato su `main` e pubblicare il nuovo commit: il workflow ricrea un artefatto immutabile dai file ripristinati.
