# Prompt för presentationssidor enligt The Science of Learning

Skapa en separat serie webbsidor som fungerar som PowerPoint-presentationer för kursmaterialet.

## Grundkrav

- Presentationerna ska vara separata från de vanliga kapitelsidorna.
- Varje kapitelpresentation ska vara en egen HTML-sida.
- Sidorna ska kännas som bildspel, inte som vanliga artikelsidor.
- En slide ska visa lite information i taget.
- På varje slide ska ett item i taget visas.
- Nästa item ska bara visas när läraren:
  - trycker på högerpil, eller
  - klickar med vänster musknapp.
- Vänsterpil ska gå bakåt ett steg.
- Om alla items på en slide redan visas ska nästa högerklick/högerpil gå till nästa slide.
- Om man går bakåt från första item på en slide ska man komma tillbaka till föregående slide.

## Design

- Bakgrunden ska vara mycket ljus, nära vit.
- Texten ska vara nästan svart.
- Bakgrund och textfärg ska matcha och ha hög kontrast.
- Använd en tydlig och lättläst font.
- Använd en tydlig monospace-font för all kod.
- Undvik visuellt brus, onödiga dekorationer och för mycket text.
- Kodblock ska vara stora, tydliga och lätta att läsa från projektor.

## Pedagogiska principer

Följ principer från The Science of Learning:

- Segmentering: visa en idé i taget.
- Signalering: markera vad eleven ska fokusera på.
- Coherence: ta bort onödigt innehåll.
- Retrieval practice: lägg in korta frågor eller reflektioner.
- Dual coding när det passar: kombinera kort text med enkel struktur eller exempel.
- Cognitive load: undvik långa textstycken och stora informationsmängder på samma slide.

## Slide-struktur

Varje slide ska ha:

- en kort rubrik,
- högst en huvudidé,
- korta punkter eller ett tydligt kodexempel,
- fragment/items som visas ett i taget.

## Kod

- Kod ska visas i tydliga kodblock.
- Kod ska använda samma exempel som kapitlet när det passar.
- Kod ska inte vara längre än att den kan läsas på en slide.
- Om koden är lång ska den delas upp på flera slides.

## Navigering

Implementera navigering med JavaScript:

- högerpil: visa nästa item eller nästa slide,
- vänsterpil: gå tillbaka ett item eller en slide,
- vänster musknapp: visa nästa item eller nästa slide,
- visa aktuell slide och totalt antal slides.

## Första uppdrag

Skapa ett utkast för kapitel 1.1.

Presentationens innehåll ska bygga på kapitlets innehåll:

- Vad är programmering?
- Vad är en algoritm?
- Vad är kod?
- Varför Python?
- Input och output.
- Var används programmering?
- Programmering som problemlösning.
- Reflektion: vad vill eleven kunna skapa?
