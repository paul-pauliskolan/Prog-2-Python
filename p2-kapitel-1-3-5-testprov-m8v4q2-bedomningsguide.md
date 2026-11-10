# Bedömningsguide – Programmering 2, kapitel 1 till och med 3.5

Test-ID: `prog2-kapitel-1-3-5-m8v4q2` · Skapad 10 november 2026.

20 nya frågor med fyra alternativ och exakt ett rätt svar. Numren här är källordningen; elevens ordning och svarsbokstäver slumpas. Facit anges därför med svarstext. Resultatet används som repetitionsstöd, inte automatisk betygssättning.

## Frågefördelning

| Kapitel | Antal | Områden |
|---|---:|---|
| 1.1–1.7 | 6 | Algoritm/körmiljö, funktioner, logik, loopar, undantag, pseudokod |
| 2.1–2.7 | 7 | Algoritmer, listor, sökning, dictionary/tuple, testfall, lambda-sortering, register |
| 3.1–3.5 | 7 | OOP-begrepp, objekt och self (2), tillstånd, inkapsling, UML (2) |

Frågetyper: begrepp, kodförståelse, felsökning och tillämpning. Kapitel 1.1 och 1.2 samtestas. Samtliga övriga lektionsavsnitt till och med 3.5 har minst en fråga.

## Källor och avgränsning

Utgår från de faktiska Pythonlektionerna `chapters/chapter-1-1.html` till `chapter-1-7.html`, `chapter-2-1.html` till `chapter-2-7.html` och `chapter-3-1.html` till `chapter-3-5.html`. De fyra sidorna `chapters/ova-prov-1-20.html`, `ova-prov-21-30.html`, `ova-prov-31-40.html` och `ova-prov-41-50.html` används som inspiration till kunskapsområden, med nya exempel. Äldre översikter har delvis webbprogrammeringsrubriker och används inte som ämneskälla.

Arv förekommer endast som begrepp för att skilja association från arv enligt 3.5. Inga frågor om polymorfism, super, egna moduler, generics, filhantering, databaser eller GUI från senare avsnitt. UML-relationerna följer kursens förenklade pilnotation.

## Facit, förklaringar och feldiagnos

### Fråga 1 · Kapitel 1.1–1.2 · algoritm och lokal körning

**Typ:** Tillämpning

Du har beskrivit en lösning i numrerade steg och vill nu provköra den som Python. Vilken arbetsgång passar?

**Alternativ i källordning:**

A. Översätt stegen till Python, spara en .py-fil och kör den i den lokala Pythonmiljön.
B. Spara stegen som en .py-fil; vanlig löptext blir då automatiskt körbar Python.
C. Öppna Pythonfilen som en webbsida; webbläsaren tolkar då Pythonkoden.
D. Spara endast programmets förväntade utskrift; Python skapar instruktionerna från den.

**Rätt svar i sak:** Översätt stegen till Python, spara en .py-fil och kör den i den lokala Pythonmiljön.

**Förklaring:** En algoritm beskriver lösningens steg. De behöver uttryckas som giltig Pythonkod för att kunna köras i Pythonmiljön.

**Vanlig missuppfattning:** Algoritm, källkod och programmets utdata blandas ihop.

**Repetition:** Beskriv en lösning i tre steg, översätt den till Python och spara och kör .py-filen lokalt. Jämför instruktioner med utdata.

### Fråga 2 · Kapitel 1.3 · parametrar och returvärde

**Typ:** Kodförståelse

Vilket tal skrivs ut?

```python
def yta(bredd, hojd):
    return bredd * hojd

print(yta(6, 4) + 12)
```

**Alternativ i källordning:**

A. 36
B. 12
C. 24
D. 3

**Rätt svar i sak:** 36

**Förklaring:** Anropet ger bredd=6 och hojd=4. Funktionen returnerar 24, som sedan adderas med 12 innan utskriften.

**Vanlig missuppfattning:** Returvärdet förväxlas med argumenten eller den senare beräkningen.

**Repetition:** Skriv en funktion med två parametrar och return. Spåra tre anrop och beräkna hur returvärdet används efter anropet.

### Fråga 3 · Kapitel 1.4 · villkor och gränsvärden

**Typ:** Felsökning

Funktionen ska godkänna åldrarna 16 till och med 19. Vilket villkor ska ersätta den markerade raden?

```python
def kan_delta(age):
    if VILLKOR:
        return True
    return False
```

**Alternativ i källordning:**

A. age >= 16 and age <= 19
B. age > 16 and age < 19
C. age >= 16 or age <= 19
D. not (age >= 16 and age <= 19)

**Rätt svar i sak:** age >= 16 and age <= 19

**Förklaring:** Båda gränserna ingår och båda kraven måste gälla. or skulle godkänna även åldrar utanför intervallet.

**Vanlig missuppfattning:** Inkluderande gränser och skillnaden mellan and och or är osäkra.

**Repetition:** Gör en sannings- och testtabell för ett intervall. Testa under, på och över båda gränserna och jämför and med or.

### Fråga 4 · Kapitel 1.5 · loop och ackumulator

**Typ:** Kodförståelse

Vad skrivs ut?

```python
total = 0
for tal in range(2, 9, 2):
    if tal == 4:
        continue
    total += tal
print(total)
```

**Alternativ i källordning:**

A. 16
B. 20
C. 12
D. 2

**Rätt svar i sak:** 16

**Förklaring:** range(2, 9, 2) ger 2, 4, 6, 8. continue hoppar över tillägget av 4. Summan blir 2 + 6 + 8 = 16.

**Vanlig missuppfattning:** range-gränsen, continue eller ackumulering misstolkas.

**Repetition:** Gör en spårtabell med loopvärde och ackumulator. Markera vilka varv continue hoppar över och jämför med break.

### Fråga 5 · Kapitel 1.6 · undantag och återförsök

**Typ:** Felsökning

En användare skriver "tre". Vilken ändring gör att programmet hanterar omvandlingsfelet och ber om ett nytt svar?

```python
while True:
    try:
        antal = int(input("Antal: "))
        break
    except TypeError:
        print("Skriv ett heltal.")
```

**Alternativ i källordning:**

A. Byt except TypeError mot except ValueError.
B. Flytta break till början av while-loopen.
C. Ta bort int så att alla svar blir giltiga heltal.
D. Byt while True mot if True och behåll resten.

**Rätt svar i sak:** Byt except TypeError mot except ValueError.

**Förklaring:** int("tre") ger ValueError. När det undantaget fångas fortsätter while-loopen med ett nytt inmatningsförsök.

**Vanlig missuppfattning:** Feltyp, typomvandling eller återförsök förväxlas.

**Repetition:** Bygg en inmatningsloop med int, try och except ValueError. Testa text, ett giltigt tal och flera fel i följd.

### Fråga 6 · Kapitel 1.7 · pseudokod och beslut

**Typ:** Tillämpning

Vilken pseudokod räknar hur många av fem temperaturer som är under noll?

**Alternativ i källordning:**

A. Sätt antal=0; upprepa fem gånger: läs temperatur, öka antal om temperatur<0; skriv sedan antal.
B. Sätt antal=0; läs en temperatur; upprepa fem gånger: öka antal om samma temperatur<0; skriv antal.
C. Sätt antal=0; läs fem temperaturer och addera deras värden; skriv antal.
D. Läs fem temperaturer; sätt antal=0 efter varje inläsning; skriv antal.

**Rätt svar i sak:** Sätt antal=0; upprepa fem gånger: läs temperatur, öka antal om temperatur<0; skriv sedan antal.

**Förklaring:** En ny temperatur behöver läsas varje varv. Räknaren initieras före loopen och ökas bara när villkoret uppfylls.

**Vanlig missuppfattning:** Inläsning, räknare och summering får fel plats eller betydelse.

**Repetition:** Skriv pseudokod och rita ett flödesschema som räknar negativa tal. Placera initiering, inläsning och beslut tydligt.

### Fråga 7 · Kapitel 2.1 · algoritmens ordning

**Typ:** Begrepp

Vilket steg saknas för att algoritmen ska beräkna medelvärdet korrekt?

```python
Förutsättning: listan innehåller minst ett tal.
1. Gå igenom listan och lägg varje tal till summa.
2. Dividera summa med antalet tal.
3. Visa resultatet.
```

**Alternativ i källordning:**

A. Sätt summa till 0 innan talen gås igenom.
B. Sätt summa till 0 efter att alla tal har adderats.
C. Dividera varje tal med summa innan talet adderas.
D. Skriv ut listans första tal i stället för medelvärdet.

**Rätt svar i sak:** Sätt summa till 0 innan talen gås igenom.

**Förklaring:** En ackumulator behöver ett bestämt startvärde innan den används. Då kan samtliga tal adderas och summan divideras med antalet.

**Vanlig missuppfattning:** Startvärde och ordning i en algoritm förbises.

**Repetition:** Skriv en algoritm för medelvärde. Markera startvärde, upprepning, beräkning och utdata och spåra den för tre tal.

### Fråga 8 · Kapitel 2.2 · index och listmetoder

**Typ:** Kodförståelse

Hur ser listan ut när den skrivs ut?

```python
varden = [11, 7, 3]
varden[-1] = 5
varden.append(9)
varden.pop()
print(varden)
```

**Alternativ i källordning:**

A. [11, 7, 5]
B. [11, 7, 9]
C. [5, 7, 11]
D. [11, 7, 9, 5]

**Rätt svar i sak:** [11, 7, 5]

**Förklaring:** Index -1 är sista platsen och blir 5. append lägger till 9, och pop() tar sedan bort det sista elementet, 9. Kvar blir [11, 7, 5].

**Vanlig missuppfattning:** Negativt index eller vad append och pop ändrar är oklart.

**Repetition:** Skriv ut en lista efter varje ändring med index, append och pop. Förutsäg innehållet innan du kör koden.

### Fråga 9 · Kapitel 2.3 · binär och linjär sökning

**Typ:** Tillämpning

En lista med varunummer kommer i slumpmässig ordning. Du vill använda binär sökning. Vad måste du först säkerställa?

**Alternativ i källordning:**

A. Att listan är sorterad i den ordning som sökalgoritmen använder.
B. Att listan innehåller fler än hundra varunummer.
C. Att varje varunummer förekommer exakt två gånger.
D. Att varunumret som söks ligger på listans första plats.

**Rätt svar i sak:** Att listan är sorterad i den ordning som sökalgoritmen använder.

**Förklaring:** Binär sökning väljer bort en halva med hjälp av ordningen. Listans längd eller antalet dubbletter ersätter inte sorteringskravet.

**Vanlig missuppfattning:** Effektiv sökning antas fungera utan att dess förutsättningar är uppfyllda.

**Repetition:** Sök samma värde linjärt och binärt. Förklara varför binär sökning kräver sortering och testa även ett saknat värde.

### Fråga 10 · Kapitel 2.4 · dictionary och tuple

**Typ:** Kodförståelse

Vilka två tal skrivs ut, i ordning?

```python
post = {"position": (2, 5)}
post["antal"] = post.get("antal", 0) + 4
x, y = post["position"]
print(post["antal"])
print(x)
```

**Alternativ i källordning:**

A. 4 och 2
B. 2 och 4
C. 0 och 2
D. KeyError och 2

**Rätt svar i sak:** 4 och 2

**Förklaring:** get ger standardvärdet 0 när antal saknas. Efter tillägget blir antal 4. Tuple-värdet (2, 5) packas upp så att x blir 2.

**Vanlig missuppfattning:** get-standardvärde, nyckelåtkomst eller tuple-uppackning misstolkas.

**Repetition:** Skapa en dictionary med ett tuple-värde. Hämta en saknad nyckel med get, uppdatera ett värde och packa upp tuplen.

### Fråga 11 · Kapitel 2.5 · planering och gränstest

**Typ:** Tillämpning

En bokningsfunktion får godkänna 1–8 deltagare, inklusive gränserna. Vilken uppsättning testar både gränserna och värden precis utanför?

**Alternativ i källordning:**

A. 0, 1, 8, 9
B. 2, 3, 4, 5
C. 1, 1, 8, 8
D. 0, 3, 6, 9

**Rätt svar i sak:** 0, 1, 8, 9

**Förklaring:** 0 och 9 ska nekas; 1 och 8 ska godkännas. Alla fyra behövs för att kontrollera båda gränserna och deras utsidor.

**Vanlig missuppfattning:** Testfall täcker typiska värden men missar övergången mellan tillåtet och otillåtet.

**Repetition:** Planera en bokning för 1–8 personer och skriv testfall precis utanför och på båda gränserna före implementationen.

### Fråga 12 · Kapitel 2.6 · sortering med lambda

**Typ:** Kodförståelse

Vilket namn står först i sorterat, och vad händer med resultat?

```python
resultat = [("Liv", 14), ("Omar", 22), ("Nora", 18)]
sorterat = sorted(resultat, key=lambda rad: rad[1], reverse=True)
```

**Alternativ i källordning:**

A. Omar står först; resultat behåller sin ursprungliga ordning.
B. Liv står först; resultat behåller sin ursprungliga ordning.
C. Omar står först; resultat får också den nya ordningen.
D. Nora står först; resultat sorteras i bokstavsordning.

**Rätt svar i sak:** Omar står först; resultat behåller sin ursprungliga ordning.

**Förklaring:** key väljer poängen i varje par. reverse=True ger högst poäng först. sorted skapar en ny lista och ändrar inte resultat.

**Vanlig missuppfattning:** Sorteringsnyckel, fallande ordning och sorted kontra sort blandas ihop.

**Repetition:** Sortera en lista av namn–poäng-par med lambda, både stigande och fallande. Jämför originalet efter sorted och sort.

### Fråga 13 · Kapitel 2.7 · sökning i register

**Typ:** Felsökning

Funktionen ska kunna hitta vilken post som helst i listan. Varför hittar den inte posten med id 8?

```python
def hitta(poster, sok_id):
    for post in poster:
        if post["id"] == sok_id:
            return post
        return None

poster = [{"id": 3}, {"id": 8}]
print(hitta(poster, 8))
```

**Alternativ i källordning:**

A. return None ligger i loopen och avslutar sökningen efter första posten.
B. for kan inte gå igenom dictionaries som ligger i en lista.
C. return post skickar bara tillbaka postens id, aldrig hela posten.
D. Sökning med == kräver att listan först har sorterats.

**Rätt svar i sak:** return None ligger i loopen och avslutar sökningen efter första posten.

**Förklaring:** Första posten har id 3. Då körs return None och funktionen avslutas. Raden ska ligga efter loopen så att alla poster kan undersökas.

**Vanlig missuppfattning:** Tidig retur inuti en loop och linjär sökning missförstås.

**Repetition:** Skriv en sökfunktion för ett register. Testa första posten, sista posten, saknad post och tom lista; placera retur efter loopen.

### Fråga 14 · Kapitel 3.1 · klass, objekt, attribut och metod

**Typ:** Begrepp

Hur beskrivs delarna i modellen korrekt?

```python
class Cykel:
    def __init__(self, farg):
        self.farg = farg

    def ring(self):
        print("Pling!")

cykel1 = Cykel("blå")
```

**Alternativ i källordning:**

A. Cykel är klassen; cykel1 är ett objekt; farg är ett attribut; ring är en metod.
B. cykel1 är klassen; Cykel är ett objekt; ring är ett attribut; farg är en metod.
C. Cykel är en metod; cykel1 är ett attribut; farg är en klass; ring är ett objekt.
D. Cykel och cykel1 är samma klass; farg och ring är båda fristående funktioner.

**Rätt svar i sak:** Cykel är klassen; cykel1 är ett objekt; farg är ett attribut; ring är en metod.

**Förklaring:** Klassen är mallen. Anropet Cykel("blå") skapar en instans vars attribut farg lagrar data och vars metod ring kan anropas.

**Vanlig missuppfattning:** Klass och instans eller data och beteende blandas ihop.

**Repetition:** Skriv en egen klass och markera klass, instans, konstruktor, attribut och metod. Förklara skillnaden mellan data och beteende.

### Fråga 15 · Kapitel 3.2 · egna attribut per objekt

**Typ:** Kodförståelse

Vad skrivs ut?

```python
class Timer:
    def __init__(self, minuter):
        self.minuter = minuter

a = Timer(10)
b = Timer(40)
a.minuter += 5
print(a.minuter, b.minuter)
```

**Alternativ i källordning:**

A. 15 och 40
B. 15 och 15
C. 10 och 40
D. 55 och 55

**Rätt svar i sak:** 15 och 40

**Förklaring:** Två separata objekt skapas. Tilldelningen ändrar endast a.minuter; b.minuter behåller 40.

**Vanlig missuppfattning:** Separata instanser antas dela samma attributvärde.

**Repetition:** Skapa två objekt med olika startvärden. Ändra ett objekt och kontrollera det andra. Förklara parameter jämfört med self.attribut.

### Fråga 16 · Kapitel 3.2 · self och initiering

**Typ:** Felsökning

Metoden visa ger AttributeError eftersom objektet saknar namn-attributet. Vilken rad ska ersätta namn = namn?

```python
class Station:
    def __init__(self, namn):
        namn = namn

    def visa(self):
        print(self.namn)

s = Station("Viken")
s.visa()
```

**Alternativ i källordning:**

A. self.namn = namn
B. namn = self.namn
C. self = namn
D. return namn

**Rätt svar i sak:** self.namn = namn

**Förklaring:** Parametern namn är lokal i __init__. self.namn = namn sparar argumentet i objektet så att andra metoder kan läsa det.

**Vanlig missuppfattning:** Lokal parameter förväxlas med ett attribut på objektet.

**Repetition:** Skapa två objekt med olika startvärden. Ändra ett objekt och kontrollera det andra. Förklara parameter jämfört med self.attribut.

### Fråga 17 · Kapitel 3.3 · metod som ändrar tillstånd

**Typ:** Kodförståelse

Vilket värde har k.lager efter anropen?

```python
class Kiosk:
    def __init__(self):
        self.lager = 9

    def ta(self, antal):
        if 0 < antal <= self.lager:
            self.lager -= antal

k = Kiosk()
k.ta(4)
k.ta(8)
k.ta(0)
```

**Alternativ i källordning:**

A. 5
B. 1
C. 3
D. -3

**Rätt svar i sak:** 5

**Förklaring:** Första uttaget minskar 9 till 5. Uttaget 8 nekas eftersom det överstiger lagret. Även 0 nekas, så lagret är fortfarande 5.

**Vanlig missuppfattning:** Alla metodanrop antas ändra tillstånd även när villkoret inte uppfylls.

**Repetition:** Spåra en metod som ändrar ett lager. Testa ett giltigt uttag, noll och ett för stort uttag och kontrollera tillståndet efter varje anrop.

### Fråga 18 · Kapitel 3.4 · inkapsling och interna attribut

**Typ:** Begrepp

Varför bör övrig kod använda set_niva i stället för att direkt ändra _niva?

```python
class Lampa:
    def __init__(self):
        self._niva = 0

    def set_niva(self, niva):
        if 0 <= niva <= 10:
            self._niva = niva
```

**Alternativ i källordning:**

A. Metoden kontrollerar intervallet; understrecket markerar intern användning men hindrar inte direkt åtkomst tekniskt.
B. Understrecket gör att Python alltid stoppar all direkt läsning och skrivning.
C. Metoden gör att alla objekt automatiskt får samma nivå.
D. Understrecket gör automatiskt värdet oföränderligt efter __init__.

**Rätt svar i sak:** Metoden kontrollerar intervallet; understrecket markerar intern användning men hindrar inte direkt åtkomst tekniskt.

**Förklaring:** Inkapsling ger en kontrollerad väg för ändringar. Ett inledande understreck är en konvention i Python, inte ett absolut åtkomstskydd.

**Vanlig missuppfattning:** En Pythonkonvention förväxlas med tekniskt åtkomstförbud eller oföränderlighet.

**Repetition:** Skriv en setter som endast tillåter 0–10 och en getter. Testa giltiga och ogiltiga värden och förklara vad understrecket signalerar.

### Fråga 19 · Kapitel 3.5 · läsa klassdiagram

**Typ:** Tillämpning

Vilken Pythonkod motsvarar attributet och metoden i klassdiagrammet enligt kursens konventioner?

```text
Klass: Behallare
--------------------------
- antal: int
--------------------------
+ fyllPa(antal: int): void

Startvärde: 0. fyllPa ska öka antalet med argumentets värde.
Alternativen visar innehållet inuti klassen.
```

**Alternativ i källordning:**

A.

```python
def __init__(self):
    self._antal = 0

def fyll_pa(self, antal):
    self._antal += antal
```
B.

```python
def __init__(self):
    antal = 0

def fyll_pa(self, antal):
    antal += antal
```
C.

```python
def __init__(self):
    self._antal = "tom"

def fyll_pa(self, antal):
    return antal
```
D.

```python
def __init__(self):
    self._antal = 0

def fyll_pa(self, antal):
    self._antal = 0
```

**Rätt svar i sak:**

```python
def __init__(self):
    self._antal = 0

def fyll_pa(self, antal):
    self._antal += antal
```

**Förklaring:** Minustecknet markerar privat/internt attribut, int anger heltal och plus markerar en publik metod. Den beskrivna metoden ska öka objektets antal.

**Vanlig missuppfattning:** UML-synlighet, datatyp eller kopplingen mellan attribut och metod är osäker.

**Repetition:** Rita två klasser med attribut, metoder och en has-relation. Översätt modellen till Python och förklara +, - och skillnaden mellan har och är.

### Fråga 20 · Kapitel 3.5 · association i objektmodell

**Typ:** Tillämpning

En Spellista lagrar en lista av Lat-objekt. Hur beskrivs relationen enligt den enkla notation som används i kapitel 3.5?

**Alternativ i källordning:**

A. Spellista --> Lat : has
B. Spellista --> Lat : inherits
C. Lat --> Spellista : inherits
D. Spellista och Lat ska alltid modelleras som samma klass.

**Rätt svar i sak:** Spellista --> Lat : has

**Förklaring:** Spellistan har låtar, vilket är en association. Den är inte en sorts låt, så relationen ska inte beskrivas som arv.

**Vanlig missuppfattning:** Har-en-relation förväxlas med är-en-relation.

**Repetition:** Rita två klasser med attribut, metoder och en has-relation. Översätt modellen till Python och förklara +, - och skillnaden mellan har och är.

## Återkoppling och uppföljning

Prioritera högst tre avsnitt med flest fel. Antalet frågor per avsnitt är litet: följ upp med ett nytt eget exempel och be eleven förklara sin lösning. Bokstavspositioner ska inte användas som fast facit. Vid full poäng rekommenderas en ny blandad tillämpningsuppgift och senare kontroll.

## Google-koppling

- Kalkylark: [Quizstatistik Programmering 2](https://docs.google.com/spreadsheets/d/1z4XF_MZH-D6FBO4DhRHJSGliSnSdudPEgmUoXOjo8vs/edit#gid=20261110).
- Ny flik: `Prog 2 – kap 1 till 3.5` (gid `20261110`).
- Endast kolumnerna Tid, Förnamn, Antal rätt, Rekommenderad repetition. Inga enskilda elevsvar skickas.
- Ny localStorage-nyckel: `p2-testprov-kap1-3-5-m8v4q2-latest`.
- Samma befintliga /exec-adress; nytt test-ID har lagts till utan att ta bort äldre ID:n.

## Verifiering

Kontroller genomförda 10 november 2026:

- **2 000 automatiska slumpningar:** varje fråga exakt en gång, alla fyra alternativ bevarade, rätt svar oförändrat och exakt fem rätta alternativ per position A–D vid varje körning. 2 000 olika frågeordningar observerade.
- **Rättning:** 20/20, 11/20 och 0/20 kontrollerade automatiskt; max tre prioriterade råd. Körbara Pythonexempel kontrollerade separat i Python.
- **Validering:** tomt/blankt förnamn, obesvarad Nästa, obesvarad sista fråga och lucka bland tidigare svar blockerades. Inga sammanfattningar skickades före fullständig inlämning.
- **Export och lagring:** MD-innehåll, samtliga frågetexter och kodunderlag vid fel, filnamn, datum, kopiering samt unik localStorage-nyckel och återläsning testade automatiskt.
- **Webbläsare:** elevflöde genom alla 20 frågor, Enter/Space, Föregående med bibehållet svar, mobilvy 390 × 844 utan horisontell sidrullning, resultat med 15 felgenomgångar. Faktisk nedladdad MD-fil (15 fel, 11 336 tecken) läst och kontrollerad. Kopierad sammanfattning läst tillbaka från urklipp.
- **Transport:** exakt begärt JSON-format och `text/plain;charset=utf-8`; inga enskilda svar i testSummary. Automatiska funktionskontroller använde simulerad fetch.
- **Google, verklig kontroll:** webbläsaren skickade `TEST-P2-VERIFIERING-20261110`, 5/20. Rad 2 på fliken med gid 20261110 lästes tillbaka via Google Sheets med rätt förnamn, poäng och tre repetitionsråd. Därefter lästes namnet igen och endast den verifierade testraden togs bort. Fliken kontrollerades visuellt före och efter radering.
- **Apps Script:** `SPREADSHEET_ID` och `data.testId`/`TEST_SHEETS` lästa i den faktiska koden. Endast det nya ID:t lades till; äldre ID och quizkod bevarades. Befintlig implementering `AKfycbysmehMs8DOSK_XNSJ5FRC9TTtU1FWWZ2AgaFOOTlIQlh0BgExrPTiA86GnQubmffei9A` uppdaterades från version 4 till **version 5**, med oförändrad `/exec`-adress och åtkomstinställningar.
- Fliken skapades och formaterades via Google Sheets API som motsvarighet till setupTestSheets, begränsat till den nya fliken. Fyra kolumner, fryst rubrikrad, filter, grön rubrik, centrerad poäng och radbrutna råd verifierades.

Befintligt kalkylark använder tidszonen America/Los_Angeles; den inställningen behölls för att inte påverka äldre flikar. Elevens MD-datum använder Europe/Stockholm.

Publik URL-kontroll dokumenteras när GitHub Pages har publicerat filerna.

Provet är olistat och tillagt i en separat HTML-fil utan länk i kursnavigationen. Olistat betyder inte lösenordsskyddat.
