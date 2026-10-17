# Portfolio di Domenico Avino

## Obiettivo e contenuti
Una pagina scorrevole in italiano e inglese, rivolta ai recruiter. Riprende il riferimento fornito: profilo con foto a sinistra, presentazione a destra, navigazione alle sezioni della stessa pagina. I contenuti provengono dal brief dell'utente; non vengono inventati progetti, competenze tecniche, esperienze o disponibilità lavorative.

La presentazione mette in evidenza Informatica all'Università di Salerno, l'interesse per il backend, astronomia, musica e tecnologia. Il percorso comprende UNISA (2024–presente) e I.S.I.S. Einaudi-Giordano, Informatica e Telecomunicazioni (2019–2024). La Cisco Cybersecurity Scholarship è indicata come partecipazione, separata dalle certificazioni Google AI, English for IT B2 e GESE Grade 7 B2.1. Nessun CV. GitHub sostituisce la vetrina progetti.

## Direzione visiva
Spazio sobrio, leggibile e personale. Aggiornamento richiesto dall'utente: usare asset grafici esistenti per ogni elemento illustrativo e icona; niente SVG disegnati a mano, illustrazioni CSS, emoji o immagini AI. Sfondo: fotografia Hubble di M7. Decorazione GitHub: fotografia Cassini di Saturno. Tutte le icone e la favicon provengono dal set ufficiale Bootstrap Icons v1.13.2. File ospitati localmente, fonti e licenze incluse, crediti accessibili dal footer.

- Palette: spazio #070b16, superficie #0d1425, testo #ecedf4, secondario #b0bbd0, azzurro #9fb5fa, oro #d2b47b.
- Carattere: Manrope ospitato localmente, con fallback di sistema.
- Profilo compatto e centrato a sinistra; testo principale e sezioni allineati a sinistra. Formazione e certificazioni affiancate su desktop, impilate su mobile.
- Foto originale mantenuta nella posizione fornita dall'utente; copia WebP ottimizzata per il sito, con contenuto invariato. Inquadratura visiva con CSS per centrare il soggetto; testo alternativo localizzato.
- Navigazione: Chi sono, Percorso, Contatti; pulsanti IT/EN accessibili.

## Struttura e comportamento
HTML semantico e contenuto italiano già disponibile senza JavaScript. CSS responsivo, focus visibile, skip link, contrasto leggibile, rispetto di prefers-reduced-motion. Nessuna animazione continua essenziale.

JavaScript senza dipendenze aggiorna tutti i testi e metadati, imposta html lang e aria-pressed, memorizza la lingua se possibile. ?lang=it o ?lang=en prevalgono sulla preferenza salvata. Se storage è bloccato, la pagina resta funzionante. Link e sezioni mantengono ID stabili.

## Distribuzione e verifica
Sito statico compatibile con GitHub Pages, repository Gyalecta/gyalecta.github.io. Workflow ufficiale Pages su main, artefatto limitato ai file pubblici. Il deploy avviene dopo verifica locale e revisione indipendente. Verificare in browser: italiano/inglese, persistenza e URL lingua, link, immagine, desktop, mobile, tastiera, assenza di overflow ed errori. Verificare esito Actions e URL pubblicato.
