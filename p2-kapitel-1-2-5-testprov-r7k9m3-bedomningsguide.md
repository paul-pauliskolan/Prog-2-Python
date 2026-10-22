# Bedömningsguide – Programmering 2, kapitel 1 och 2.1–2.5

Version 1.0 · test-ID `prog2-kapitel-1-2-5-r7k9m3`

## Provöversikt

Provet består av 20 flervalsfrågor med fyra alternativ och exakt ett bäst svar. Frågeordning och svarsalternativ slumpas vid varje start. Fördelningen av rätt svar blir exakt fem på vardera position A–D. Resultatet används som återkopplingsunderlag, inte som automatisk betygssättning.

| Avsnitt | Frågor | Fokus |
|---|---:|---|
| 1.1–1.7 | 9 | lokal miljö, funktioner, villkor, loopar, undantag, pseudokod |
| 2.1 | 2 | algoritmer, indata–bearbetning–utdata |
| 2.2 | 2 | listor, index, iteration och ackumulator |
| 2.3 | 3 | linjär/binär sökning, `sort()` och `sorted()` |
| 2.4 | 2 | dictionaries, `get()`, tuples och strukturval |
| 2.5 | 2 | problemdelning, planering och gränstestning |

## Facit och feldiagnos

Frågorna visas i slumpmässig ordning. Numren nedan är källordningen i HTML-filen.

| Nr | Avsnitt | Rätt svar i sak | Vad ett felsvar kan tyda på |
|---:|---|---|---|
| 1 | 1.1–1.2 | Spara som `.py` och kör lokalt | Sammanblandning av Pythonmiljö, webbsida och dokument |
| 2 | 1.3 | `72` | Osäkerhet om parameter, argument eller `return` |
| 3 | 1.3 | Separata funktioner och en samordnande `main` | Svag förståelse för ansvarsfördelning |
| 4 | 1.4 | `"B"` | Svårt att följa `if`/`elif` och att `return` avslutar funktionen |
| 5 | 1.4 | `active and not blocked` | Sammanblandning av `and`, `or` och `not` |
| 6 | 1.5 | `while` med avslutningsvillkor | Osäkerhet om känt respektive okänt antal varv |
| 7 | 1.5 | `1, 2, 4, 5` | Sammanblandning av `continue` och `break` |
| 8 | 1.6 | `while True` + `try/except ValueError` + `break` | Osäkerhet om feltyp eller återförsök |
| 9 | 1.7 | Räknare + loop + villkor | Ofullständig algoritm eller otydlig pseudokod |
| 10 | 2.1 | Gör stegen entydiga och ordnade | Fokus på yta i stället för algoritmens precision |
| 11 | 2.1 | Heltalsdivision och modulo | Sammanblandning av indata, bearbetning och utdata |
| 12 | 2.2 | `[10, 7, 10, 13]` | Osäkerhet om index `0`, index `-1` eller `append()` |
| 13 | 2.2 | `20` | Räknar alla värden eller antal träffar i stället för summan |
| 14 | 2.3 | `return -1` efter loopen | Förstår inte tidig retur i en sökalgoritm |
| 15 | 2.3 | Listan måste vara sorterad | Saknar förutsättningen för binär sökning |
| 16 | 2.3 | Originalet oförändrat, ny sorterad lista | Sammanblandning av `sorted()` och `list.sort()` |
| 17 | 2.4 | `Okänd` och `2025` | Osäkerhet om `get()` eller uppdatering av värden |
| 18 | 2.4 | Tuple `(x, y)` | Svårt att välja datastruktur efter krav |
| 19 | 2.5 | Dela upp i indata, menyval, lagring, bearbetning, utdata | Börjar implementera före analys |
| 20 | 2.5 | `499, 500, 501` | Testar inte strax under, på och över en gräns |

## Rekommenderad repetition

- Kapitel 1.3–1.4: spåra funktionsanrop och skriv testfall för alla villkorsgrenar.
- Kapitel 1.5–1.6: bygg ett inmatningsprogram med loop, `try`, `except` och ett tydligt avslut.
- Kapitel 1.7 och 2.1: beskriv samma lösning i vanlig text, pseudokod och flödesschema.
- Kapitel 2.2: ändra och bearbeta listor med index, listmetoder, villkor och ackumulatorer.
- Kapitel 2.3: jämför linjär och binär sökning samt `sort()` och `sorted()` på små listor.
- Kapitel 2.4: motivera valet mellan lista, dictionary och tuple i tre egna exempel.
- Kapitel 2.5: planera ett menyprogram och skriv testfall innan implementationen börjar.

## Nya kontrollfrågor

1. Skriv en funktion med två parametrar som returnerar det minsta värdet utan att använda `min()`.
2. Förklara varför en `while`-loop kan bli oändlig och visa en ändring som avslutar den.
3. Skriv pseudokod som hittar det första jämna talet i en lista.
4. Visa med ett eget exempel skillnaden mellan `sort()` och `sorted()`.
5. Skapa en dictionary med tre fält och hämta ett saknat fjärde fält utan `KeyError`.
6. Välj en datastruktur för ett fast RGB-värde och motivera valet.
7. Skriv tre gränstestfall för ett villkor som godkänner värden från och med 18.

## Poängintervall för återkoppling

- 17–20 rätt: god överblick; följ upp med en ny tillämpningsuppgift.
- 13–16 rätt: i huvudsak fungerande förståelse; repetera de högst prioriterade avsnitten.
- 9–12 rätt: flera centrala delar behöver befästas med kodspårning och små övningar.
- 0–8 rätt: arbeta systematiskt avsnitt för avsnitt och gör nya kontrollfrågor efter varje del.

Intervallen är stöd för återkoppling och ska inte ensamma användas för betyg.

## Google Sheets-koppling

Lägg till följande rad i `TEST_SHEETS` i den befintliga `Code.gs` utan att ta bort äldre rader:

```js
"prog2-kapitel-1-2-5-r7k9m3": "Prog 2 – kap 1 och 2.1–2.5",
```

Kör därefter `setupTestSheets` och publicera en ny webbappsversion. HTML-filen använder kursens befintliga `/exec`-adress.
