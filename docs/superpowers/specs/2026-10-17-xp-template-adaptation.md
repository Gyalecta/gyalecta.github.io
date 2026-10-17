# Adattamento fedele di xp-portfolio

L'utente ha scelto esplicitamente https://github.com/fsystemweb/xp-portfolio chiedendolo identico, con i propri dati. Questa scelta sostituisce la precedente direzione spaziale. Si usa il codice originale del commit 54ff0ca45465ef142054032ccf73f01e598bbc4b, conservando sfondo, icone, schermata iniziale, desktop, finestre, menu Start, taskbar e stile XP. Non viene ricostruito un tema simile da zero.

Contenuti: Domenico Avino, studente di Informatica UNISA, provincia di Napoli, interesse backend, tecnologia, astronomia e musica. Laurea triennale UNISA 2024–presente; I.S.I.S. Einaudi-Giordano 2019–2024; partecipazione Cisco Cybersecurity Scholarship; certificazioni Google AI, English for IT B2, GESE Grade 7 B2.1. Email, GitHub, LinkedIn e foto già forniti. Nessuna esperienza lavorativa o progetto inventato, nessun CV.

Si mantiene la pagina unica e il supporto IT/EN. La lingua predefinita è l'italiano, poi la preferenza salvata, con override esplicito ?lang=it|en. L'indicatore lingua originale della taskbar diventa il selettore, senza nuovo elemento grafico. I contenuti delle finestre aperte devono aggiornarsi senza perdere posizione o creare duplicati.

Le sole correzioni al comportamento del template riguardano l'accessibilità dei controlli, la gestione corretta del fuoco/z-index e della chiusura delle finestre, il menu Start su mobile e i percorsi GitHub Pages. Gli asset originali e le icone di libreria vengono riutilizzati; la foto personale viene inquadrata con CSS. Gli avvisi originali sul riuso personale e sugli asset di terzi sono conservati in NOTICE.md e docs/upstream-xp-README.md.

Verifica: suite Vitest esistente e regressioni del cambio lingua, chiusura/riapertura finestre e progetti vuoti; TypeScript e build di produzione; confronto browser con la demo originale, desktop/mobile, menu Start, trascinamento, contatti, lingue e assenza di asset mancanti. Pubblicazione del build dist tramite il workflow Pages già configurato, a https://gyalecta.github.io/.
