/* Gemensam frågebank. Innehållet bygger på de delkapitel som länkas från kursens startsida. */
(function () {
    const chapters = [
        ["1", "Kapitel 1: Programmeringsgrunder och struktur", [
            ["1.1", "Introduktion till programmering"], ["1.2", "Kom igång med Python"],
            ["1.3", "Strukturerad problemlösning med kod"], ["1.4", "Villkor och logik i funktioner"],
            ["1.5", "Loopar och upprepning"], ["1.6", "Undantagshantering"],
            ["1.7", "Flödesscheman och pseudokod"]
        ]],
        ["2", "Kapitel 2: Algoritmer och datastrukturer", [
            ["2.1", "Vad är en algoritm?"], ["2.2", "Listor och iteration"],
            ["2.3", "Sökning och sortering"], ["2.4", "Dictionaries och tuples"],
            ["2.5", "Planera program med algoritmtänk"], ["2.6", "Problemlösning med listor"]
        ]],
        ["3", "Kapitel 3: Objektorientering, moduler och generics", [
            ["3.1", "Vad är OOP?"], ["3.2", "Skapa klasser och objekt"],
            ["3.3", "Konstruktorer och metoder"], ["3.4", "Inkapsling och attribut"],
            ["3.5", "UML för objektmodeller"], ["3.6", "Arv och polymorfism"],
            ["3.7", "Egna moduler och import"], ["3.8", "Generiska klasser och metoder"]
        ]],
        ["4", "Kapitel 4: Filhantering, kodstruktur och databaser", [
            ["4.1", "Läsa och skriva till filer"], ["4.2", "Try/except och felsökning"],
            ["4.3", "Kodstandard och struktur"], ["4.5", "Använda SQLite-databaser"]
        ]],
        ["5", "Kapitel 5: Projektarbete med GUI, API och testning", [
            ["5.1", "Planera ett projekt"], ["5.2", "Projektarbete med databas"],
            ["5.3", "Hämta data från API med requests"], ["5.4", "Skapa GUI med tkinter"],
            ["5.5", "Testning, dokumentation och reflektion"]
        ]]
    ];

    const q = (question, answer, code = "") => ({ question, answer, code });
    const questions = {
        "1.1": [
            q("Vad innebär programmering?", "Att skapa instruktioner som en dator kan förstå och följa."),
            q("Vad är kod?", "Instruktioner skrivna i ett programmeringsspråk."),
            q("Vad är en algoritm?", "En ordnad följd av steg som löser en uppgift."),
            q("Vad är Python?", "Ett programmeringsspråk som används inom många områden."),
            q("Vilka steg ingår i problemlösning utöver att skriva kod?", "Förstå och dela upp problemet samt testa, felsöka och förbättra lösningen.")
        ],
        "1.2": [
            q("Vilken filändelse har en Python-fil?", ".py", "program.py"),
            q("Vad används IDLE till?", "Till att skriva, spara och köra Pythonprogram lokalt."),
            q("Vad gör print()?", "Visar text eller värden.", "print(\"Hej!\")"),
            q("Hur kör du en sparad Pythonfil?", "Öppna filen i Pythonmiljön och välj Run Module, eller kör den med Python i terminalen."),
            q("Varför ska kursens program köras lokalt?", "Senare moment som filer, GUI och vissa moduler fungerar inte säkert i enkla onlinemiljöer.")
        ],
        "1.3": [
            q("Varför delas kod upp i funktioner?", "Koden blir lättare att läsa, testa och återanvända."),
            q("Vad är en parameter?", "Ett namn i funktionsdefinitionen som tar emot ett värde.", "def dubbla(tal):"),
            q("Vad är ett argument?", "Värdet som skickas in när funktionen anropas.", "dubbla(5)"),
            q("Vad gör return?", "Skickar tillbaka ett resultat från en funktion.", "return summa / 3"),
            q("Vilken roll har main() ofta?", "Den samordnar programmets viktigaste steg och funktionsanrop.")
        ],
        "1.4": [
            q("Vad används en if-sats till?", "Den kör kod när ett villkor är sant."),
            q("När prövas en elif-gren?", "När tidigare if- eller elif-villkor varit falska."),
            q("Vad betyder and?", "Båda villkoren måste vara sanna."),
            q("Vad betyder or och not?", "or kräver minst ett sant villkor; not vänder sanningsvärdet."),
            q("Vad är skillnaden mellan print och return?", "print visar något; return skickar ett värde tillbaka från funktionen.")
        ],
        "1.5": [
            q("Vad gör en loop?", "Upprepar ett kodblock."),
            q("När passar en for-loop?", "När du vet vad eller hur många värden som ska gås igenom."),
            q("När passar en while-loop?", "När upprepningen ska fortsätta så länge ett villkor är sant."),
            q("Vad gör break?", "Avslutar loopen direkt."),
            q("Vad gör continue?", "Hoppar över resten av aktuellt varv och börjar nästa.")
        ],
        "1.6": [
            q("Vad är ett undantag?", "Ett fel som uppstår medan programmet körs."),
            q("Vad gör try och except?", "try provar kod och except hanterar ett angivet fel."),
            q("När kan ValueError uppstå vid int()?", "När värdet inte kan omvandlas till ett heltal."),
            q("Varför anges en bestämd feltyp efter except?", "För att hantera det väntade felet utan att dölja andra fel."),
            q("Hur låter man användaren försöka igen?", "Placera try/except i en loop och bryt loopen först när inmatningen lyckas.")
        ],
        "1.7": [
            q("Vad är ett flödesschema?", "En visuell modell av programmets steg och flöde."),
            q("Vilken symbol används normalt för ett beslut?", "En diamant."),
            q("Vad är pseudokod?", "En programmeringslik beskrivning av logiken utan krav på korrekt programspråkssyntax."),
            q("Vad beskriver ett användningsfall?", "En aktör, ett mål och hur systemet används för att nå målet."),
            q("Varför planera före kodningen?", "Det tydliggör logiken och gör fel lättare att upptäcka innan koden skrivs.")
        ],
        "2.1": [
            q("Vad är en algoritm?", "En tydlig och ändlig följd av steg som löser ett problem."),
            q("Vilka delar bör en algoritm beskriva?", "Indata, steg, villkor, resultat och testfall."),
            q("Hur avgör man om ett heltal är jämnt?", "Kontrollera om resten vid division med 2 är noll.", "tal % 2 == 0"),
            q("Vad skiljer en algoritm från färdig kod?", "Algoritmen beskriver logiken; koden uttrycker den med ett programspråks syntax."),
            q("Varför behövs flera testfall?", "För att kontrollera olika vägar, normala värden och gränsfall.")
        ],
        "2.2": [
            q("Vad är en lista i Python?", "En ordnad och ändringsbar samling värden."),
            q("Vilket index har det första listelementet?", "Index 0."),
            q("Vad gör append()?", "Lägger till ett element sist i listan."),
            q("Hur itererar man över en lista?", "Med en for-loop som tar ett element i taget."),
            q("Hur beräknas medelvärdet av en tal-lista?", "Summan delas med antalet element.", "sum(tal) / len(tal)")
        ],
        "2.3": [
            q("Hur fungerar linjär sökning?", "Elementen kontrolleras ett i taget tills värdet hittas eller listan tar slut."),
            q("Vilket krav har binär sökning?", "Listan måste vara sorterad."),
            q("Varför är binär sökning snabb i stora sorterade listor?", "Den halverar sökområdet i varje steg."),
            q("Vad skiljer sort() från sorted()?", "sort() ändrar listan; sorted() returnerar en ny sorterad lista."),
            q("Hur fungerar bubble sort i stora drag?", "Intilliggande element jämförs och byter plats när de ligger i fel ordning.")
        ],
        "2.4": [
            q("Vad lagrar en dictionary?", "Nyckel–värde-par."),
            q("Hur hämtas ett värde ur en dictionary?", "Med dess nyckel inom hakparenteser.", "person[\"namn\"]"),
            q("Hur loopar man över nycklar och värden samtidigt?", "Med items().", "for nyckel, värde in data.items():"),
            q("Vad är en tuple?", "En ordnad samling som inte kan ändras efter att den skapats."),
            q("Vad innebär tuple-uppackning?", "Att värden ur en tuple tilldelas separata variabler.", "x, y = (10, 20)")
        ],
        "2.5": [
            q("Vad innebär algoritmtänkande?", "Att dela upp ett problem i tydliga steg, beslut och upprepningar."),
            q("Vad står input–bearbetning–output för?", "Vad programmet tar emot, gör med datan och ger ifrån sig."),
            q("Varför väljer man datastruktur under planeringen?", "För att informationen ska lagras och bearbetas på ett lämpligt sätt."),
            q("Varför planera flera funktioner?", "Varje funktion får ett tydligt ansvar och kan testas separat."),
            q("Vad ska ett testfall ange?", "Konkreta indata och det förväntade resultatet.")
        ],
        "2.6": [
            q("Hur kan namn och poäng lagras tillsammans?", "Som tuples i en lista.", "resultat = [(\"Anna\", 120)]"),
            q("Vad gör lambda x: x[1] vid sortering?", "Väljer värdet på index 1 som sorteringsnyckel."),
            q("Hur sorteras högsta poängen först?", "Med reverse=True."),
            q("Varför delas ett topplisteprogram upp i funktioner?", "Inmatning, lagring, sortering och utskrift får tydliga ansvar."),
            q("Vilka kantfall bör en topplista testas med?", "Till exempel tom lista, felaktig poäng och lika poäng.")
        ],
        "3.1": [
            q("Vad betyder objektorienterad programmering?", "Att program struktureras kring objekt som kombinerar data och beteenden."),
            q("Vad är en klass?", "En mall som beskriver vilka attribut och metoder objekt ska ha."),
            q("Vad är ett objekt?", "En instans av en klass."),
            q("Vad är ett attribut?", "Data som hör till ett objekt."),
            q("Vad är en metod?", "En funktion som hör till en klass eller ett objekt.")
        ],
        "3.2": [
            q("Hur deklareras en klass i Python?", "Med nyckelordet class.", "class Dog:"),
            q("Hur skapas ett objekt?", "Genom att anropa klassens namn.", "dog = Dog()"),
            q("Vad betyder self i en metod?", "Det syftar på det aktuella objektet."),
            q("Hur anropas en metod på ett objekt?", "Med punktnotation.", "dog.bark()"),
            q("Varför kan flera objekt av samma klass ha olika data?", "Varje objekt har sina egna attributvärden.")
        ],
        "3.3": [
            q("Vilken uppgift har __init__?", "Den initierar objektets attribut när objektet skapas."),
            q("Vad är en konstruktorparameter?", "Ett värde som skickas in när objektet skapas."),
            q("Hur sparas en parameter som attribut?", "Den tilldelas via self.", "self.name = name"),
            q("Vad kan en metod med parametrar göra?", "Ta emot nya värden och använda dem för att ändra eller bearbeta objektet."),
            q("Varför validera ett värde i en metod?", "För att hindra att objektet får ett ogiltigt tillstånd.")
        ],
        "3.4": [
            q("Vad innebär inkapsling?", "Att skydda objektets inre data och styra åtkomsten via metoder."),
            q("Hur markeras ett internt attribut i Python?", "Med ett inledande understreck.", "self._grade = 0"),
            q("Vad gör en getter?", "Returnerar ett skyddat eller internt attribut."),
            q("Vad gör en setter?", "Kontrollerar och ändrar ett attribut."),
            q("Varför ändra data via metoder?", "Metoden kan validera värdet innan objektet ändras.")
        ],
        "3.5": [
            q("Vad visar ett UML-klassdiagram?", "Klasser, attribut, metoder och relationer."),
            q("Vad betyder + framför en medlem i UML?", "Att den är publik."),
            q("Vad betyder - framför en medlem i UML?", "Att den är privat."),
            q("Vad är en association?", "En relation mellan två klasser."),
            q("Hur hjälper UML före kodningen?", "Det gör objektmodellens struktur och relationer synliga och möjliga att planera.")
        ],
        "3.6": [
            q("Vad innebär arv?", "Att en subklass återanvänder attribut och metoder från en basklass."),
            q("Vad är en subklass?", "En klass som bygger vidare på en annan klass."),
            q("Vad innebär override?", "Att subklassen ersätter en metod från basklassen."),
            q("Vad är polymorfism?", "Samma metodanrop kan ge olika beteende beroende på objektets klass."),
            q("Vad används super() till?", "Till att anropa och återanvända logik från basklassen.")
        ],
        "3.7": [
            q("Vad är en Pythonmodul?", "En .py-fil med exempelvis funktioner eller klasser."),
            q("Vad gör import?", "Gör innehåll från en annan modul tillgängligt."),
            q("Hur importeras en enda funktion?", "Med from modul import funktion."),
            q("Vad är ett importalias?", "Ett alternativt kort namn som anges med as."),
            q("Varför dela upp programmet i moduler?", "Koden blir lättare att förstå, testa och återanvända.")
        ],
        "3.8": [
            q("Vad är generisk kod?", "Kod som kan återanvändas med flera datatyper."),
            q("Vad beskriver TypeVar?", "En typvariabel som kan återkomma på flera platser i en typhint."),
            q("Vad visar list[T]?", "En lista vars element har typen som T representerar."),
            q("När används Generic[T]?", "När en klass ska fungera med en valfri men sammanhängande typ."),
            q("Vad är en fördel med generiska typer?", "Mindre duplicerad kod och bättre stöd från editorn utan att tappa typrelationer.")
        ],
        "4.1": [
            q("Vad gör open()?", "Öppnar en fil i ett angivet filläge."),
            q("Vad betyder filläget w?", "Filen skrivs från början och gammalt innehåll ersätts."),
            q("Vad betyder filläget a?", "Ny text läggs till sist i filen."),
            q("Vad betyder filläget r?", "Filen öppnas för läsning."),
            q("Varför används with vid filhantering?", "Filen stängs säkert när kodblocket är klart.")
        ],
        "4.2": [
            q("Vad är ett undantag?", "Ett fel som uppstår under programmets körning."),
            q("Vilket fel kan fångas när en fil saknas?", "FileNotFoundError."),
            q("Vilket fel kan uppstå vid division med noll?", "ZeroDivisionError."),
            q("Hur hjälper ett felmeddelande vid felsökning?", "Det visar vad som gick fel och ofta var felet uppstod."),
            q("Varför testa en del av programmet i taget?", "Det avgränsar var felet finns och gör orsaken lättare att hitta.")
        ],
        "4.3": [
            q("Vad betyder läsbar kod?", "Kod som andra lätt kan förstå och underhålla."),
            q("Hur namnges funktioner och variabler enligt Pythonkonvention?", "Med snake_case."),
            q("Vad innebär DRY-principen?", "Undvik att upprepa samma kod."),
            q("Vad bör en bra kommentar förklara?", "Varför något görs, särskilt när logiken inte är självklar."),
            q("Hur hjälper korta funktioner kodstrukturen?", "Varje funktion kan få ett tydligt och avgränsat ansvar.")
        ],
        "4.5": [
            q("Vad är SQLite?", "En lätt, filbaserad relationsdatabas utan separat server."),
            q("Vad gör sqlite3.connect()?", "Öppnar eller skapar en databasfil."),
            q("Vad gör cursor.execute()?", "Kör ett SQL-kommando."),
            q("Varför behövs conn.commit()?", "För att spara databasändringar permanent."),
            q("Vad returnerar fetchall()?", "Alla hämtade databasrader, där varje rad normalt är en tuple.")
        ],
        "5.1": [
            q("Vad är ett användningsfall?", "En beskrivning av hur en användare använder systemet för att nå ett mål."),
            q("Vad är en MVP?", "Den minsta versionen av programmet som ger kärnfunktionen och fungerar."),
            q("Varför omvandlas en idé till konkreta krav?", "Kraven gör tydligt vad programmet faktiskt ska kunna göra."),
            q("Vad används pseudokod till i projektplaneringen?", "Till att beskriva funktionernas logik innan kod skrivs."),
            q("Varför bestämma vad som får vänta till senare?", "För att avgränsa projektet och först få en fungerande grund.")
        ],
        "5.2": [
            q("Vilka fyra operationer står CRUD för?", "Create, Read, Update och Delete."),
            q("Vilket ansvar kan main.py ha?", "Meny och användargränssnitt."),
            q("Vilket ansvar kan databas.py ha?", "Databasanslutning och SQL-operationer."),
            q("Varför börja med Create och Read?", "De ger en enkel fungerande grund innan mer avancerade funktioner byggs."),
            q("Varför testa funktionerna separat?", "Fel blir lättare att hitta innan delarna kopplas ihop.")
        ],
        "5.3": [
            q("Vad är ett API?", "Ett gränssnitt som låter program kommunicera med en extern tjänst."),
            q("Vad gör requests.get(url)?", "Skickar en HTTP GET-förfrågan."),
            q("Vad betyder statuskod 200?", "Att HTTP-förfrågan lyckades."),
            q("Vad gör response.json()?", "Omvandlar JSON-svaret till Pythondata."),
            q("Varför används timeout och try/except?", "För att programmet ska kunna hantera långsamma svar, nätverksfel och HTTP-fel.")
        ],
        "5.4": [
            q("Vad är ett GUI?", "Ett grafiskt användargränssnitt med exempelvis fält, etiketter och knappar."),
            q("Vad skapar tk.Tk()?", "Programmets huvudfönster."),
            q("Vad gör mainloop()?", "Startar händelseloopen som väntar på användarens handlingar."),
            q("Hur kopplas en knapp till en funktion?", "Funktionen anges med command utan parenteser."),
            q("Hur hämtas och visas text i exemplet?", "Entry.get() hämtar text och Label.config() ändrar etiketten.")
        ],
        "5.5": [
            q("Vad ska ett testfall innehålla?", "Indata, förväntat resultat och gärna faktiskt resultat."),
            q("Vad är ett gränsfall?", "Ett värde precis vid en viktig gräns, exempelvis 0 eller maxvärdet."),
            q("Vad bör en README förklara?", "Programmets syfte, funktioner, hur det körs och kända begränsningar."),
            q("När är en kodkommentar hjälpsam?", "När den förklarar syftet eller orsaken bakom icke självklar kod."),
            q("Vad kännetecknar en bra reflektion?", "Den är konkret om problem, lösningar, lärande och möjlig vidareutveckling.")
        ]
    };

    window.quickQuestions = { chapters, questions };
}());
