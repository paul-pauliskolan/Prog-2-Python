// Reusable quiz renderer for static chapter pages
// Usage: window.renderQuiz(containerElement, quizData)
(function () {
  const improvedQuestionBank = {};

  function addQuiz(id, rows) {
    improvedQuestionBank[id] = rows.map((row, index) => {
      const [question, answer, distractor1, distractor2, distractor3, explanation] = row;
      const choices = [answer, distractor1, distractor2, distractor3];
      const shift = index % choices.length;
      const options = choices.slice(shift).concat(choices.slice(0, shift));
      return { question, options, correct: options.indexOf(answer), feedback: explanation, explanation };
    });
  }

  addQuiz("quiz-1-2", [
    ["Du vill kontrollera vilken Python-version terminalen använder innan du kör en fil. Vilket kommando är lämpligast?", "python3 --version", "python3 version.py", "pip3 --version", "python3 --help-version", "Kommandot python3 --version visar versionen av den Python-tolk som kommandot startar."],
    ["En fil ska kunna köras som ett vanligt Pythonprogram. Vilket filnamn följer kapitlets namngivning?", "temperatur.py", "temperatur.python", "temperatur.pip", "temperatur.html", "Pythonkällkod sparas normalt med filändelsen .py."],
    ["Programmet innehåller print(\"Hej\"). Vad händer när raden körs?", "Texten Hej skrivs i terminalen", "Texten Hej sparas i en variabel", "Användaren får skriva in texten Hej", "En fil med namnet Hej skapas", "print() visar värdet i programmets utdata; funktionen lagrar inte automatiskt värdet."],
  ]);
  addQuiz("quiz-1-3", [
    ["Samma beräkning används på tre ställen och behöver senare ändras. Vilken lösning ger bäst struktur?", "Lägg beräkningen i en tydligt namngiven funktion", "Kopiera beräkningen till alla tre ställena", "Lägg hela programmet i en enda main-rad", "Byt alla variabelnamn till en bokstav", "En funktion samlar logiken på ett ställe och gör den lättare att testa och ändra."],
    ["Ett program har flera hjälpfunktioner. Vilken uppgift passar bäst för main()?", "Samordna anropen i programmets avsedda ordning", "Innehålla varje detalj i alla beräkningar", "Ersätta parametrar med globala variabler", "Skriva ut funktionernas källkod", "main() används som programmets tydliga startpunkt och samordnar de mindre delarna."],
    ["Vilket funktionsnamn gör anropet lättast att förstå utan att läsa funktionen?", "beräkna_medelvärde", "funktion_2", "gör_sak", "bm", "Ett beskrivande namn uttrycker funktionens ansvar och minskar behovet av förklarande kommentarer."],
    ["I def dubbla(tal): är tal en parameter. Vad är då 7 i anropet dubbla(7)?", "Ett argument", "Ett returvärde", "Ett funktionsnamn", "En lokal funktion", "Parametern står i definitionen; argumentet är värdet som skickas in vid anropet."],
  ]);
  addQuiz("quiz-1-4", [
    ["En funktion ska returnera olika biljettpris beroende på ålder. Vilken struktur passar bäst?", "En kedja med if, elif och else", "En print-sats för varje möjlig ålder", "En for-loop utan villkor", "Ett try-block utan except", "if/elif/else väljer exakt en väg utifrån villkorens ordning."],
    ["En beräkningsfunktion ska lämna ett resultat som en annan funktion använder. Vad bör den göra?", "Returnera resultatet med return", "Visa resultatet enbart med print", "Lagra resultatet i funktionens namn", "Avsluta med input", "return lämnar värdet till anroparen, medan print bara visar det."],
    ["I en if/elif/else-kedja är både det första och det andra villkoret sanna. Vilket block körs?", "Det första sanna blocket", "Alla sanna block", "Bara else-blocket", "Det sista sanna blocket", "Kedjan prövas uppifrån och avslutas när det första sanna villkoret har hittats."],
    ["Villkoret ska godkänna en användare som är administratör eller lärare. Vilket uttryck motsvarar kravet?", "är_admin or är_lärare", "är_admin and är_lärare", "not är_admin", "är_admin == är_lärare", "or blir sant när minst ett av de två delvillkoren är sant."],
  ]);
  addQuiz("quiz-1-5", [
    ["Alla namn i en lista ska skrivas ut en gång. Vilken loop passar bäst?", "En for-loop över listan", "En while-loop utan räknare", "En loop som bryts före första varvet", "En nästlad loop över samma lista", "En for-loop är tydlig när varje element i en samling ska behandlas."],
    ["En meny körs i while True och användaren väljer Avsluta. Vad behövs för att lämna loopen?", "break", "continue", "return True i villkoret", "en ny for-loop", "break avbryter den närmaste pågående loopen."],
    ["Programmet ska fråga igen tills användaren matar in ett giltigt tal. Vilken lösning passar kapitlets arbetssätt?", "En while-loop som avslutas när inmatningen är giltig", "En for-loop som alltid körs exakt en gång", "En if-sats som aldrig upprepas", "En lista som sorteras efter varje försök", "while passar när antalet försök inte är känt i förväg."],
  ]);
  addQuiz("quiz-1-6", [
    ["int(användartext) får värdet \"tre\". Vad uppstår?", "Ett ValueError-undantag", "Ett NameError-undantag", "Värdet 3", "Värdet 0", "int() kan inte tolka ordet tre som ett heltal och signalerar därför ValueError."],
    ["Vilken kod ska placeras i try-blocket?", "Koden som kan orsaka undantaget du vill hantera", "Koden som alltid ska köras efter programslut", "Enbart felmeddelandet till användaren", "Definitionen av alla programmets funktioner", "try omger den riskfyllda operationen; except beskriver hur ett visst fel hanteras."],
    ["Varför är except ValueError oftast bättre än ett ospecificerat except i en talinmatning?", "Det fångar konverteringsfelet utan att dölja andra fel", "Det gör att alla fel automatiskt rättas", "Det hindrar try-blocket från att köras", "Det omvandlar all text till heltal", "Specifika undantag gör felhanteringen tydligare och låter oväntade programmeringsfel synas."],
    ["Hur kan programmet låta användaren försöka igen efter ogiltig inmatning?", "Lägg try/except i en loop och bryt när konverteringen lyckas", "Lägg loopen i except och bryt före try", "Anropa print tills texten blir ett tal", "Ta bort konverteringen och acceptera alla värden", "Loopen upprepar inmatningen; break används först när ett giltigt värde har skapats."],
    ["Vilket beteende visar bäst att ett inmatningsprogram är robust?", "Det hanterar väntade fel och ger användaren en tydlig väg vidare", "Det avslutas vid varje fel och visar hela tracebacken", "Det ignorerar alla fel utan återkoppling", "Det antar att all inmatning alltid är korrekt", "Robust kod hanterar rimliga fel kontrollerat och kommunicerar vad användaren kan göra."],
  ]);
  addQuiz("quiz-1-7", [
    ["Du vill visa hur en inloggning går från start via ett beslut till två möjliga resultat. Vilket verktyg passar bäst?", "Ett flödesschema", "En lista med Pythonpaket", "En tabell med variabelvärden", "En färdig kodfil utan kommentarer", "Flödesschemat visar ordning, beslut och alternativa vägar visuellt."],
    ["Vilken beskrivning är ett exempel på pseudokod?", "Läs tal; om talet är positivt, skriv ut Positivt", "def kontrollera(tal): med fullständig Pythonsyntax", "En skärmbild av programmets terminal", "En lista över installerade tillägg", "Pseudokod beskriver logiken stegvis utan krav på ett programspråks exakta syntax."],
    ["Vilken form används normalt för ett beslut i kapitlets flödesscheman?", "En romb", "En oval", "En rektangel", "En pil", "Romben innehåller ett villkor och har normalt grenar för olika utfall."],
    ["Vad bör ett användningsfall främst beskriva?", "Vad en aktör vill göra med systemet", "Hur varje rad Pythonkod är skriven", "Vilka färger gränssnittet använder", "I vilken mapp Python är installerat", "Användningsfall fångar användarens mål och systemets beteende ur ett användarperspektiv."],
    ["Vilken nytta ger pseudokod innan implementationen börjar?", "Logiken kan granskas och ändras utan att syntax stör", "Programmet kan köras snabbare utan en tolk", "Alla testfall skapas automatiskt", "Pseudokoden ersätter den färdiga koden", "Pseudokod gör lösningens steg tydliga tidigt men behöver senare översättas till körbar kod."],
  ]);
  addQuiz("quiz-2-1", [
    ["En elev beskriver en lösning som en ändlig följd tydliga steg från indata till resultat. Vad har eleven skapat?", "En algoritm", "En datatyp", "En syntaxregel", "En modul", "En algoritm är en tydlig och ändlig steg-för-steg-beskrivning av en lösning."],
    ["Varför är det värdefullt att prova en algoritm med konkreta testvärden före kodning?", "Logiska luckor kan upptäckas innan syntax läggs till", "Python väljer då automatiskt datastruktur", "Algoritmen blir alltid snabbast möjlig", "Testet ersätter behovet av implementation", "Testvärden hjälper dig följa stegen och se om resultatet blir rimligt."],
    ["Du behöver hitta ett visst namn i en lista. Vilken typ av algoritm är mest relevant?", "En sökalgoritm", "En sorteringsalgoritm", "En rit-algoritm", "En komprimeringsalgoritm", "Sökalgoritmer avgör om eller var ett värde finns i en samling."],
    ["En algoritm väljer rabatt utifrån kundens ålder. Vilken grundstruktur använder den?", "Beslut med villkor", "Enbart sekvens", "Sortering av alla kunder", "Filskrivning", "Villkor låter algoritmen välja olika väg beroende på data."],
    ["När är pseudokod särskilt användbar?", "När lösningens logik ska planeras utan krav på korrekt Pythonsyntax", "När färdig kod ska köras av Python", "När paket ska installeras med pip", "När en fil ska formateras som JSON", "Pseudokod fokuserar på lösningsstegen och är inte körbar programkod."],
  ]);
  addQuiz("quiz-2-2", [
    ["Ett program ska lagra tio temperaturer i ordning och senare ändra en av dem. Vilken struktur passar?", "En lista", "En enskild sträng", "En boolesk variabel", "En funktion utan returvärde", "En lista lagrar flera ordnade värden och kan ändras."],
    ["värden = [8, 12, 15]. Vilket uttryck hämtar 8?", "värden[0]", "värden[1]", "värden[-1]", "värden[3]", "Listindex börjar på 0, så första elementet har index 0."],
    ["Vad innebär for temperatur in temperaturer i kapitlets exempel?", "Varje element behandlas i tur och ordning", "Listan sorteras automatiskt", "Alla element tas bort", "Bara det sista elementet behandlas", "Iteration betyder att gå igenom elementen ett i taget."],
    ["Du vill lägga resultatet 42 sist i listan poäng. Vilket anrop passar?", "poäng.append(42)", "poäng.insert(42)", "poäng.remove(42)", "poäng.index(42)", "append lägger ett nytt element sist i listan."],
    ["Varför är en lista bättre än fem separata variabler när alla fem namn ska bearbetas likadant?", "Samma loop kan behandla hela samlingen", "Listan gör automatiskt alla namn unika", "Listan förhindrar felaktiga strängar", "Separata variabler kan inte innehålla text", "En samling gör gemensam iteration och hantering möjlig."],
  ]);
  addQuiz("quiz-2-3", [
    ["En osorterad lista är kort och målvärdet kan ligga var som helst. Hur arbetar linjär sökning?", "Den jämför elementen ett efter ett", "Den börjar alltid i mitten och halverar intervallet", "Den sorterar listan efter varje jämförelse", "Den jämför bara första och sista elementet", "Linjär sökning går igenom värdena tills målet hittas eller listan tar slut."],
    ["Vad måste vara sant innan binär sökning används på en lista?", "Listan måste vara sorterad", "Listan måste innehålla strängar", "Listan måste ha ett jämnt antal element", "Listan får inte innehålla dubbletter", "Binär sökning avgör vilken halva som kan uteslutas med hjälp av sorteringsordningen."],
    ["Du behöver en sorterad kopia men vill behålla originallistan. Vilket val passar?", "sorted(lista)", "lista.sort()", "lista.reverse()", "lista.append()", "sorted returnerar en ny lista, medan sort ändrar den befintliga."],
    ["Varför används bubble sort i kapitlet trots att inbyggd sortering oftast är bättre i praktiken?", "Algoritmens jämförelser och byten är lätta att följa", "Den är alltid snabbast för stora listor", "Den kräver att listan redan är sorterad", "Den kan sortera utan jämförelser", "Bubble sort synliggör hur en sorteringsalgoritm kan byggas steg för steg."],
    ["Varför kan sortering vara en klok förberedelse när samma stora lista ska sökas många gånger?", "Den möjliggör effektiv binär sökning", "Den gör linjär sökning omöjlig", "Den tar bort alla dubbletter automatiskt", "Den omvandlar alla värden till index", "Kostnaden för sorteringen kan vägas upp av många snabbare sökningar."],
  ]);
  addQuiz("quiz-2-4", [
    ["Du vill slå upp en elevs poäng via elevens id. Vilken struktur passar bäst?", "En dictionary med id som nyckel", "En tuple med bara poäng", "En lista utan koppling mellan id och poäng", "En sträng med alla värden", "En dictionary kopplar unika nycklar till värden och ger direkt uppslagning."],
    ["I elev = {\"namn\": \"Sam\", \"poäng\": 8}, vad måste vara unikt?", "Varje nyckel", "Varje värde", "Varje tecken i värdena", "Nycklar och värden tillsammans", "En dictionary kan ha lika värden men varje nyckel förekommer bara en gång."],
    ["Vilken operation är inte möjlig direkt på tuple-värdet punkt = (2, 5)?", "Ändra punkt[0] till 7", "Läsa punkt[0]", "Packa upp x, y = punkt", "Skicka punkt till en funktion", "Tuples är oföränderliga, men deras värden kan läsas och packas upp."],
    ["Vad blir x och y efter x, y = (3, 9)?", "x blir 3 och y blir 9", "x blir (3, 9) och y blir tom", "Båda blir 3", "Båda blir (3, 9)", "Uppackning tilldelar tuple-elementen till variablerna i samma ordning."],
    ["När är en dictionary mer lämplig än en lista?", "När värden ska hämtas via meningsfulla nycklar", "När data enbart ska läsas i indexordning", "När exakt två oföränderliga värden behövs", "När inga värden ska lagras", "Nycklar som namn eller id gör dictionary-uppslag tydliga."],
    ["En funktion ska returnera både ett namn och en ålder. Varför passar en tuple som returvärde?", "Flera relaterade värden kan returneras tillsammans", "Tuplen gör värdena automatiskt privata", "Tuplen sorterar värdena utan kod", "Funktionen kan annars inte använda return", "En tuple kan samla flera relaterade resultat som mottagaren sedan kan packa upp i separata variabler."],
  ]);
  addQuiz("quiz-2-5", [
    ["Du ska lösa ett större problem. Vilket första arbetssätt följer kapitlets algoritmtänkande?", "Dela upp problemet och beskriv indata, steg och önskat resultat", "Skriv all kod direkt och planera efteråt", "Välj variabelnamn innan problemet är förstått", "Testa endast det färdiga programmet", "Nedbrytning och tydliga in- och utdata gör lösningen hanterbar."],
    ["Vad är den viktigaste nyttan med pseudokod i planeringen?", "Logiken kan granskas innan den binds till syntax", "Den kan köras snabbare än Python", "Den skapar automatiskt ett flödesschema", "Den garanterar att inga fel kan uppstå", "Pseudokod låter dig fokusera på ordning, beslut och upprepning."],
    ["När ger ett flödesschema mest stöd?", "När beslut och alternativa vägar behöver överblickas", "När långa textstycken ska lagras", "När Pythonpaket ska installeras", "När färger i gränssnittet ska väljas", "Grenar och flödespilar gör beslutslogik synlig."],
    ["Ett program ska snabbt hitta en elev via unikt id. Vad bör styra valet av datastruktur?", "Hur informationen ska lagras, hämtas och ändras", "Vilken struktur som har kortast namn", "Att alltid välja en lista", "Att undvika nycklar även vid uppslagning", "Datastrukturen väljs utifrån de operationer lösningen behöver."],
    ["Varför bör varje delproblem ha ett tydligt ansvar?", "Delarna blir lättare att utveckla, testa och kombinera", "Programmet slipper all indata", "Varje del kan ignorera helhetens mål", "Koden behöver då inga funktioner", "Tydliga delproblem minskar komplexiteten och gör fel lättare att lokalisera."],
  ]);
  addQuiz("quiz-2-6", [
    ["Flera spelares resultat ska lagras och sorteras. Varför är en lista en bra yttre struktur?", "Den samlar ett varierande antal resultat som kan itereras och sorteras", "Den gör varje poäng unik", "Den hindrar att nya resultat läggs till", "Den kan bara innehålla ett resultat", "Listor passar ordnade samlingar som ska bearbetas med loopar och sortering."],
    ["Varje resultat består av namn och poäng och ska inte ändras separat. Varför passar en tuple?", "Den samlar ett fast par som behandlas som en enhet", "Den ger automatiskt varje namn ett id", "Den sorterar alltid på poängen", "Den kan ändras utan tilldelning", "En tuple uttrycker ett fast, sammanhörande datapaket."],
    ["Vad innebär key=lambda resultat: resultat[1] i sorted(resultat, key=...)?", "Sorteringsnyckeln är varje tuples andra värde", "Bara listans andra post sorteras", "Resultaten sorteras efter namn", "Lambda lägger till värdet 1", "Funktionen returnerar poängen på index 1 som jämförelsevärde."],
    ["Varför delas poängprogrammet upp i funktioner för inmatning, sortering och utskrift?", "Varje ansvar kan förstås och testas separat", "Alla funktioner får automatiskt samma variabler", "Programmet behöver då ingen main-funktion", "Sorteringen blir alltid snabbare", "Funktionsindelningen separerar ansvar och minskar kopplingen mellan delarna."],
    ["Varför omges omvandlingen av användarens poäng med try/except?", "Ogiltig taltext kan hanteras utan okontrollerat programstopp", "Alla negativa poäng ändras automatiskt", "Listan sorteras om konverteringen misslyckas", "Inmatningen blir alltid ett heltal", "int() kan ge ValueError, som programmet kan fånga och förklara."],
  ]);
  addQuiz("quiz-3-1", [
    ["Ett program ska skapa många böcker med samma slags data och beteende. Vad bör beskriva den gemensamma modellen?", "En klass", "Ett enskilt objekt", "En lokal variabel", "Ett undantag", "Klassen är mallen som anger vilka attribut och metoder bokobjekten har."],
    ["b1 = Bok(\"Dune\") och b2 = Bok(\"1984\") körs. Vad representerar b1 och b2?", "Två separata objekt av klassen Bok", "Två nya klasser", "Två metoder i samma objekt", "Två namn på samma objekt", "Varje konstruktoranrop skapar en egen instans med eget tillstånd."],
    ["Vilken information passar som attribut på ett Bok-objekt?", "Bokens titel", "Instruktionen att låna ut boken", "Koden som skapar klassen", "Anropet som skriver ut alla böcker", "Attribut beskriver objektets data eller tillstånd."],
    ["Vilket ansvar passar som metod i klassen Konto?", "Sätt in ett belopp och uppdatera saldot", "Definiera en ny orelaterad klass", "Installera Python", "Byta filändelse på programmet", "Metoder beskriver beteenden som hör till objektet och kan använda dess tillstånd."],
    ["Vad är __init__ främsta uppgift när ett nytt objekt skapas?", "Initiera objektets attribut", "Radera tidigare objekt", "Importera alla moduler", "Skriva ut klassens källkod", "Konstruktorn sätter objektets starttillstånd."],
    ["När ger objektorienterad struktur särskilt stor nytta?", "När flera typer av objekt samlar relaterad data och beteende", "När programmet bara skriver ut en fast rad", "När ingen data behöver lagras", "När alla värden ska vara globala", "OOP hjälper till att modellera ansvar och relationer i större program."],
  ]);
  addQuiz("quiz-3-2", [
    ["Vilken rad påbörjar definitionen av en klass Person i Python?", "class Person:", "def Person:", "new Person:", "object Person:", "Nyckelordet class följt av namnet definierar klassen."],
    ["Vad bör __init__ göra i klassen Person?", "Sätta startvärden på den nya personens attribut", "Skapa en ny klass vid varje anrop", "Köra alla objektets metoder", "Göra alla attribut globala", "__init__ körs vid skapandet och initierar instansens tillstånd."],
    ["Vad syftar self på i en instansmetod?", "Det objekt som metoden anropades på", "Själva klassdefinitionen i alla lägen", "Det senast skapade objektet", "En global kopia av alla objekt", "self ger metoden åtkomst till just den aktuella instansens attribut och metoder."],
    ["Klassen Book är definierad med __init__(self, title). Hur skapas en bok med titeln Dune?", "Book(\"Dune\")", "Book.title = \"Dune\"", "class Book(\"Dune\")", "Book.__init__(\"Dune\")", "Klassen anropas med de argument som konstruktorn behöver efter self."],
    ["Vilken kod beskriver bäst en metod som returnerar en persons namn?", "def visa_namn(self): return self.namn", "def visa_namn(namn): return namn", "self.visa_namn = namn", "return Person.namn utan metod", "En instansmetod tar self och arbetar med objektets attribut."],
    ["Två Person-objekt skapas och det enas namn ändras. Vad händer med det andra?", "Dess namn är oförändrat", "Det får samma nya namn", "Båda objekten raderas", "Klassen byter namn", "Instanser har separata attribut även när de skapats från samma klass."],
  ]);
  addQuiz("quiz-3-3", [
    ["En metod returnerar self.temperatur utan att ändra något. Hur klassificeras den?", "Som en läsande metod", "Som en konstruktor", "Som en ändrande metod", "Som en klassdefinition", "Metoden läser och lämnar objektets tillstånd men modifierar det inte."],
    ["En metod ökar self.saldo med ett giltigt belopp. Vad gör metoden?", "Ändrar objektets tillstånd", "Skapar en ny klass", "Läser bara tillståndet", "Importerar saldot", "En ändrande metod uppdaterar ett eller flera attribut."],
    ["Varför kan konto.sätt_in(100) vara säkrare än konto.saldo += 100?", "Metoden kan kontrollera beloppet och samla reglerna", "Metoden gör alltid saldot privat", "Direkt tilldelning fungerar aldrig i Python", "Metoden skapar automatiskt en databas", "Metoden kan upprätthålla objektets regler på ett gemensamt ställe."],
    ["Metoden change_year kontrollerar att året är rimligt och sätter sedan self.year. Vad händer vid car1.change_year(2023)?", "car1:s year uppdateras om valideringen godkänner 2023", "Alla Car-objekts year uppdateras", "En ny Car-klass skapas", "Värdet 2023 skrivs bara ut", "Anropet arbetar på car1 och följer metodens kontroll innan attributet ändras."],
    ["Vilket är ett tydligt exempel på validering i en ändrande metod?", "Avvisa ett negativt pris innan self.pris ändras", "Returnera priset utan villkor", "Skriva ut klassens namn", "Skapa två objekt med samma klass", "Validering kontrollerar att ett nytt värde uppfyller objektets regler."],
  ]);
  addQuiz("quiz-3-4", [
    ["Ett Konto ska aldrig få negativt saldo genom godtycklig tilldelning. Vilken design följer kapitlets inkapsling?", "Låt metoder kontrollera ändringar av ett internt saldoattribut", "Gör saldot globalt så alla funktioner kan ändra det", "Kopiera saldot till varje metodparameter", "Ta bort alla metoder från klassen", "Inkapsling samlar data och regler och styr hur tillståndet får ändras."],
    ["Hur signaleras ett attribut som internt enligt vanlig Pythonkonvention i kapitlet?", "Namnet börjar med ett understreck", "Namnet skrivs helt med versaler", "Namnet slutar med parenteser", "Namnet föregås av class", "Ett inledande understreck signalerar att attributet inte bör ändras direkt utifrån."],
    ["Vad bör en getter för saldo göra?", "Returnera saldot utan att ändra det", "Sätta ett nytt saldo utan kontroll", "Skapa ett nytt Konto", "Radera saldoattributet", "En getter ger kontrollerad läsåtkomst till ett internt värde."],
    ["Varför används en setter eller annan ändringsmetod?", "Den kan validera värdet innan attributet uppdateras", "Den gör objektet till en tuple", "Den körs automatiskt för alla attribut", "Den hindrar all läsning av värdet", "Ändringsmetoden är en gemensam plats för objektets regler."],
    ["Hur minskar inkapsling risken för fel?", "Ogiltiga tillstånd kan stoppas vid objektets kontrollerade gränssnitt", "Alla undantag ignoreras automatiskt", "Varje objekt delar samma attribut", "Koden behöver inte längre testas", "När reglerna finns i metoder behöver anropare inte själva upprätthålla dem."],
  ]);
  addQuiz("quiz-3-5", [
    ["Du vill dokumentera en klasss namn, attribut och metoder före kodning. Vilket UML-diagram passar?", "Ett klassdiagram", "Ett flödesschema", "Ett sekvensdiagram", "Ett användningsfallsdiagram", "Klassdiagrammet visar den statiska strukturen hos klasser och deras relationer."],
    ["I ett klassdiagram står -saldo: float i klassens attributdel. Vad beskriver raden?", "Ett attribut med namn saldo och typ float", "En metod som returnerar saldo", "En relation till klassen float", "Ett objekt som heter saldo", "Attributdelen beskriver objektens data; tecknet kan också visa synlighet."],
    ["En Kund har flera Konton, och båda kan existera som egna objekt. Vilken relation beskriver kopplingen enklast här?", "En association", "Ett metodanrop", "En loop", "En datatyp", "Association visar att objekt av klasserna är kopplade till varandra."],
    ["Diagrammet visar Bil som specialisering av Fordon. Vad betyder relationen?", "Bil ärver gemensamma egenskaper och beteenden från Fordon", "Fordon skapas inuti varje Bil-metod", "Bil och Fordon är samma objekt", "Fordon är ett attribut av typen text", "Arvspilen uttrycker en är-en-relation mellan subklass och basklass."],
    ["Vilken är den viktigaste nyttan med att skissa UML före implementation?", "Ansvar och relationer kan granskas innan koddetaljer tar över", "Diagrammet genererar alltid färdig felfri kod", "Inga klassnamn behöver bestämmas", "Testning blir onödig", "Modellen hjälper gruppen att resonera om strukturen och upptäcka designproblem tidigt."],
  ]);
  addQuiz("quiz-3-6", [
    ["Hund och Katt delar namn och ålder men har olika läte. Vilken design använder arv rimligt?", "Låt Hund och Katt ärva gemensam data från Djur", "Kopiera all kod mellan klasserna", "Gör Djur till en global sträng", "Låt varje djur vara en fristående funktion", "Arv samlar verkligt gemensamt beteende i en basklass."],
    ["Vad är Hund i class Hund(Djur):?", "En subklass till Djur", "En instans av Djur", "En metod i Djur", "Ett attribut på Djur", "Klassen inom parentes är basklassen som subklassen ärver från."],
    ["Hund definierar tala trots att Djur redan har tala. Vad kallas det?", "Override", "Import", "Inkapsling", "Iteration", "Subklassen ersätter den ärvda metodens implementation med en egen."],
    ["En lista innehåller Hund- och Katt-objekt och programmet anropar tala() på vart och ett. Varför kan rätt läte användas?", "Polymorfism låter samma anrop ge objekttypens implementation", "Alla objekt har automatiskt identisk kod", "Listan ändrar objekten till strängar", "Basklassen kör alltid sin metod", "Det gemensamma gränssnittet kan användas utan att anroparen behöver särskilja typerna."],
    ["En subklass behöver basklassens initiering innan egna attribut sätts. Vad bör den anropa?", "super().__init__(...)", "self.super(...)", "class.__init__(...)", "override.init(...)", "super() ger åtkomst till basklassens implementation och undviker duplicerad initieringskod."],
  ]);
  addQuiz("quiz-3-7", [
    ["Filen verktyg.py innehåller återanvändbara funktioner. Vad är filen ur Pythons perspektiv?", "En modul", "En instans", "En parameter", "Ett undantag", "En Pythonfil som kan importeras fungerar som en modul."],
    ["main.py ska använda flera namn från verktyg.py med prefixet verktyg. Vilken import passar?", "import verktyg", "from main import verktyg", "class verktyg", "import verktyg.py", "Efter import verktyg används namn exempelvis som verktyg.hälsa()."],
    ["main.py behöver bara funktionen hälsa från verktyg.py. Vilken rad är tydligast?", "from verktyg import hälsa", "import hälsa from verktyg", "from hälsa import verktyg", "include verktyg.hälsa", "from modul import namn importerar det valda namnet direkt."],
    ["Vad ändrar import verktyg as v?", "Modulen refereras med det lokala namnet v", "Filen verktyg.py byter namn på disken", "Alla funktioner i modulen byter namn", "Modulen kopieras till variabeln verktyg", "Aliaset påverkar namnet som används i den importerande filen."],
    ["Varför är uppdelning i egna moduler användbar?", "Relaterad kod kan organiseras, återanvändas och testas separat", "Alla variabler blir globala mellan filer", "Import tar bort behovet av funktioner", "Programmet kör alltid snabbare", "Moduler ger tydliga ansvarsgränser och minskar stora svåröverskådliga filer."],
  ]);
  addQuiz("quiz-3-8", [
    ["Funktionen first ska fungera för listor av flera typer och bevara elementtypen i returtypen. Vilken egenskap eftersträvas?", "Generisk kod", "Dynamisk import", "Metod-override", "Filinkapsling", "Generisk kod uttrycker samma logik för flera typer med ett beskrivet typsamband."],
    ["Vilken roll har T = TypeVar(\"T\")?", "T representerar en typ som kan återanvändas i flera typannoteringar", "T skapar en klass vid körning", "T konverterar alla värden till text", "T begränsar alltid värden till heltal", "TypeVar låter typkontrollen koppla samman indata- och resultattyp."],
    ["Vad uttrycker -> T i def first(values: list[T]) -> T?", "Resultatet har samma elementtyp T som listan", "Resultatet är alltid en lista", "Funktionen returnerar typen TypeVar", "Resultatet kan bara vara text", "Samma T på parameter och returtyp beskriver sambandet mellan dem."],
    ["Vad tillåter list[int | str | float] enligt typhinten?", "Varje element får vara int, str eller float", "Listan måste innehålla exakt tre element", "Hela listan väljer en enda gemensam TypeVar", "Listan konverterar automatiskt mellan typerna", "Unionen anger tillåtna elementtyper men bevarar inte samma typsamband som TypeVar."],
    ["När passar en generisk klass särskilt bra?", "När samma behållarbeteende ska vara typsäkert för olika innehållstyper", "När varje typ behöver helt olika metoder", "När inga typannoteringar används", "När klassen bara skriver ut fast text", "Generiska klasser återanvänder struktur samtidigt som innehållets typ följs."],
    ["Vilken konkret fördel ger en generisk first-funktion jämfört med returtypen object?", "Typkontrollen kan härleda den specifika returtypen från argumentet", "Funktionen kör alltid snabbare", "Tomma listor blir automatiskt giltiga", "Alla körfel fångas automatiskt", "Typsambandet ger bättre kontroll och stöd i editorn utan att ändra körningen."],
  ]);
  addQuiz("quiz-4-1", [
    ["Programmet ska ersätta hela innehållet i rapport.txt. Vilket öppningsläge ska användas?", "w", "a", "r", "x+", "Läget w öppnar för skrivning och skriver över en befintlig fils innehåll."],
    ["Varför används with open(\"data.txt\") as fil?", "Filen stängs säkert när blocket lämnas", "Filen blir alltid skrivskyddad", "Alla läsfel ignoreras", "Innehållet konverteras till en lista", "Context manager-konstruktionen hanterar stängningen även om något går fel."],
    ["Nya loggrader ska läggas efter befintliga utan att de gamla försvinner. Vilket läge passar?", "a", "w", "r", "rb", "Append-läget a skriver nya data i slutet."],
    ["Vilket behov motiverar filhantering i ett program?", "Data ska finnas kvar mellan programkörningar", "Lokala variabler ska bli privata", "Loopar ska köras snabbare", "Funktioner ska kunna ha parametrar", "Filer ger beständig lagring utanför programmets arbetsminne."],
    ["Vad returnerar fil.read() i kapitlets textfilsexempel?", "Filens innehåll som en sträng", "Bara första tecknet", "Antalet rader som ett heltal", "Ett öppet filobjekt", "read() läser återstående innehåll och lämnar det som text."],
  ]);
  addQuiz("quiz-4-2", [
    ["Vilket nyckelord inleder hanteringen av ett undantag efter try?", "except", "error", "catch", "handle", "Python använder except för att ange vilka undantag som ska fångas."],
    ["open(\"saknas.txt\") försöker läsa en fil som inte finns. Vilket undantag är mest specifikt?", "FileNotFoundError", "ValueError", "ZeroDivisionError", "TypeError", "FileNotFoundError beskriver just att den angivna filen inte kunde hittas."],
    ["int(\"12,5\") körs. Vilket undantag behöver programmet hantera?", "ValueError", "FileNotFoundError", "KeyError", "IndexError", "Texten följer inte heltalsformatet som int kräver."],
    ["Vad hjälper en traceback dig främst att göra?", "Hitta anropskedjan och raden där felet uppstod", "Rätta felet automatiskt", "Dölja felmeddelandet för användaren", "Visa bara programmets utskrift", "Tracebacken visar feltyp, relevanta anrop och kodrader."],
    ["Vilket undantag beskriver beräkningen 10 / 0?", "ZeroDivisionError", "ValueError", "NameError", "FileExistsError", "Division med noll är inte definierad och ger ZeroDivisionError."],
  ]);
  addQuiz("quiz-4-3", [
    ["Två utvecklare ska snabbt förstå och ändra samma projekt. Vilken effekt har en gemensam kodstandard?", "Koden blir mer enhetlig och lättare att läsa", "Alla logiska fel försvinner", "Tester behövs inte längre", "Python kör koden snabbare", "Kodstandard minskar onödig variation och underlättar samarbete och underhåll."],
    ["Vilket funktionsnamn följer vanlig Pythonstandard?", "beräkna_total", "BeräknaTotal", "beräkna-Total", "BERÄKNATOTAL", "Funktioner och variabler skrivs normalt med snake_case."],
    ["Samma valideringskod är kopierad på fyra ställen. Vilken förbättring följer DRY?", "Flytta valideringen till en återanvändbar funktion", "Behåll kopiorna men ge dem olika kommentarer", "Lägg till en femte kopia", "Byt alla variabler till globala", "DRY minskar duplicerad kunskap så att en regel bara behöver ändras på ett ställe."],
    ["Vilken kommentar tillför mest värde?", "En förklaring till varför en oväntad specialregel behövs", "En upprepning av att i += 1 ökar i", "En rad som bara säger kod", "En kommentar med inaktuellt beteende", "Bra kommentarer förklarar avsikt eller skäl som koden inte tydligt visar."],
    ["Vilket klassnamn följer vanlig Pythonstandard?", "BankAccount", "bank_account", "bankAccount", "BANK_ACCOUNT", "Klassnamn skrivs normalt med PascalCase."],
  ]);
  addQuiz("quiz-4-5", [
    ["Ett lokalt program behöver en relationsdatabas utan separat databasserver. Varför passar SQLite?", "Databasen lagras i en fil och kan användas via ett inbyggt bibliotek", "SQLite kräver alltid en fjärrserver", "SQLite kan bara lagra en tabellrad", "SQLite är ett Pythonformat utan SQL", "SQLite är en filbaserad relationsdatabas som lämpar sig för lokala program."],
    ["Vilken import används i kapitlet för SQLite?", "import sqlite3", "import sqlserver", "import database", "import sqlite.py", "Standardbibliotekets sqlite3-modul ger anslutning och körning av SQL."],
    ["En ny receptpost ska lagras i tabellen recept. Vilken SQL-operation används?", "INSERT INTO", "SELECT FROM", "ORDER BY", "CREATE INDEX", "INSERT INTO skapar en ny rad med angivna kolumnvärden."],
    ["Varför anropas conn.commit() efter en INSERT?", "För att bekräfta transaktionen så ändringen sparas", "För att hämta alla rader", "För att sortera tabellen", "För att stänga Pythonprogrammet", "commit gör transaktionens ändringar beständiga i databasen."],
    ["En SELECT har körts med en cursor. Vad gör fetchall()?", "Hämtar alla återstående resultatrader", "Lägger till alla rader igen", "Raderar resultatet", "Skapar en ny tabell", "fetchall returnerar frågeresultatets återstående rader som en samling."],
  ]);
  addQuiz("quiz-5-1", [
    ["Vilken risk minskar mest när projektets mål och krav klargörs före kodning?", "Att bygga funktioner som inte löser användarens behov", "Att Python behöver installeras", "Att variabler måste namnges", "Att programmet får fler än en fil", "Planering kopplar implementationen till det faktiska problemet och prioriterar arbetet."],
    ["Vad ska användningsfallet Lägg till elev främst beskriva?", "Aktörens mål och systemets respons", "Varje Pythonrad som ska skrivas", "Databasfilens binära format", "Färgerna i programmets fönster", "Användningsfall beskriver interaktionen ur användarens perspektiv."],
    ["Varför skriva pseudokod för en central funktion?", "För att pröva lösningsstegen före detaljimplementation", "För att ersätta alla tester", "För att skapa databasen automatiskt", "För att publicera projektet", "Pseudokod gör algoritmens logik synlig utan syntaxdetaljer."],
    ["Vilken del av projektplanen visualiseras bäst med ett flödesschema?", "Beslut, ordning och alternativa vägar", "Exakta klassers Pythonkod", "README-filens formatering", "Installerade paketversioner", "Flödesschemat ger en överblick över kontrollflödet."],
    ["Vad är en MVP i projektplaneringen?", "Den minsta version som levererar projektets viktigaste värde", "En version med alla tänkbara extrafunktioner", "En modell som inte behöver fungera", "En slutrapport utan program", "MVP avgränsar en fungerande kärna som kan byggas och utvärderas först."],
  ]);
  addQuiz("quiz-5-2", [
    ["main.py innehåller menylogik och databas.py SQL-funktioner. Vilken fördel ger uppdelningen?", "Användargränssnitt och datalagring kan ändras mer oberoende", "Båda filerna får automatiskt samma lokala variabler", "Databasen behöver inga tester", "SQL-frågor körs utan anslutning", "Moduler med tydliga ansvar minskar koppling och gör projektet lättare att underhålla."],
    ["Vilken CRUD-operation motsvarar att ändra en befintlig kunds e-post?", "Update", "Create", "Read", "Delete", "Update förändrar en post som redan finns."],
    ["Vilket ansvar bör ligga i databas.py?", "Öppna anslutningen och utföra parameteriserade SQL-operationer", "Läsa alla menyval direkt från användaren", "Bestämma terminalens färger", "Installera sqlite3 vid varje start", "Databasmodulen kapslar in beständig lagring och SQL."],
    ["Vilket första steg ger bäst grund för databasprojektet?", "Bestäm krav och skapa en liten fungerande datamodell", "Bygg alla extrafunktioner samtidigt", "Skriv ett långt program utan funktioner", "Skapa tabeller innan du vet vilken data som behövs", "En avgränsad modell kopplad till kraven ger en testbar start."],
    ["Varför behövs riktad felhantering i projektet?", "Databasoperationer och inmatning kan misslyckas på förväntade sätt", "try/except garanterar korrekta SQL-frågor", "Alla fel bör döljas från utvecklaren", "Felhantering ersätter validering", "Förväntade fel kan få begripliga besked medan oväntade fel fortfarande kan upptäckas."],
  ]);
  addQuiz("quiz-5-3", [
    ["Ett program hämtar väderdata från en extern tjänst via definierade webbadresser och dataformat. Vad använder programmet?", "Ett API", "En lokal klasskonstruktor", "En textfil utan protokoll", "En GUI-widget", "Ett API definierar hur program kan begära och ta emot data eller funktioner."],
    ["Vad gör requests.get(url) i kapitlets exempel?", "Skickar en HTTP GET-förfrågan till adressen", "Sparar automatiskt svaret i en databas", "Startar en lokal webbserver", "Konverterar adressen till JSON", "GET används för att begära en resurs; svaret måste sedan kontrolleras och bearbetas."],
    ["Svaret har statuskod 200. Vad kan programmet dra för slutsats?", "HTTP-förfrågan lyckades på protokollnivå", "JSON-innehållet har garanterat alla önskade fält", "Internetanslutningen kan inte senare brytas", "Datan är automatiskt validerad och sparad", "200 betyder lyckat HTTP-svar men innehållets struktur behöver fortfarande hanteras."],
    ["Vad gör response.json() när svaret innehåller giltig JSON?", "Tolkar JSON-innehållet till Pythondata", "Kontrollerar att statuskoden är 200", "Skickar en ny förfrågan", "Sparar råsvaret som en fil", "Metoden avkodar JSON till exempelvis dictionaries och listor."],
    ["Vilket fel bör ett robust API-program vara förberett på?", "Nätverksfel, oväntad statuskod eller oväntad svarsdata", "Att varje svar alltid har identiskt innehåll", "Att GET automatiskt upprepar sig för evigt", "Att JSON aldrig kan sakna ett fält", "Externa anrop har flera felkällor som bör kontrolleras och rapporteras begripligt."],
  ]);
  addQuiz("quiz-5-4", [
    ["Ett program ska användas genom fönster, knappar och inmatningsfält. Vilken typ av gränssnitt byggs?", "Ett grafiskt användargränssnitt", "Ett SQL-schema", "Ett modulgränssnitt", "Ett filformat", "Ett GUI låter användaren interagera med grafiska komponenter."],
    ["Vilket bibliotek används i kapitlets Pythonexempel för GUI?", "tkinter", "sqlite3", "requests", "pathlib", "tkinter är Pythons standardbibliotek för det GUI som kapitlet visar."],
    ["Vilket av följande är en widget?", "Ett Entry-fält där användaren skriver text", "En HTTP-statuskod", "En SQL-transaktion", "Ett ValueError-undantag", "Widgets är gränssnittskomponenter som knappar, etiketter och inmatningsfält."],
    ["Vad innebär Button(..., command=visa_meddelande)?", "Funktionen anropas när knappens händelse inträffar", "Funktionen anropas direkt när knappen skapas", "Knappens text blir funktionens returvärde", "Funktionen ersätter mainloop", "command får en funktionsreferens som tkinter kan anropa vid klick."],
    ["Varför behövs mainloop() efter att fönstrets widgets skapats?", "Den håller händelseloopen igång och behandlar användarens händelser", "Den skapar automatiskt alla widgets", "Den kör varje command exakt en gång", "Den sparar gränssnittet i en databas", "GUI:t måste fortsätta vänta på och reagera på exempelvis klick och tangenttryckningar."],
  ]);
  addQuiz("quiz-5-5", [
    ["Vilken beskrivning gör ett testfall användbart och reproducerbart?", "Angiven indata, teststeg och förväntat resultat", "Enbart beskedet att programmet testades", "En lista över alla kodrader", "Ett önskemål utan förväntat utfall", "Ett tydligt testfall gör det möjligt att upprepa kontrollen och jämföra faktiskt med förväntat resultat."],
    ["Varför ska även ogiltig och oväntad inmatning provas?", "Programmet behöver visa att det hanterar felvägar kontrollerat", "Endast felaktig inmatning används i verkligheten", "Giltiga testfall kan då hoppas över", "Alla undantag försvinner efter testet", "Negativa testfall avslöjar antaganden och brister i validering och felhantering."],
    ["Vilket innehåll hjälper en ny användare mest i README?", "Syfte, installation, startinstruktioner och grundläggande användning", "Bara projektets filnamn", "Alla terminalutskrifter från utvecklingen", "En kopia av varje kommentar i koden", "README ska göra projektet begripligt och möjligt att installera och köra."],
    ["Vilken kommentar är mest värdefull?", "Den förklarar varför en icke självklar lösning eller regel behövs", "Den översätter varje kodrad till svenska", "Den beskriver kod som inte längre finns", "Den upprepar funktionsnamnet", "Kommentarer bör tillföra avsikt och sammanhang, inte duplicera tydlig kod."],
    ["Vad är huvudsyftet med projektreflektionen?", "Analysera val, problem, lärdomar och möjliga förbättringar", "Bevisa att inga misstag gjordes", "Ersätta testresultaten", "Lista kodrader i alfabetisk ordning", "Reflektionen visar förståelse för processen och hur lösningen kan utvecklas."],
  ]);
  function getQuizId(container, quizData) {
    if (quizData.quizId) return quizData.quizId;
    if (container.id) return container.id.replace(/^quiz-/, "kapitel-");

    const match = window.location.pathname.match(/chapter-([0-9-]+)\.html$/);
    return match ? `kapitel-${match[1]}` : "quiz";
  }

  function getChapterName(quizData) {
    if (quizData.chapter) return quizData.chapter;

    const heading = document.querySelector("h1");
    if (heading && heading.textContent.trim()) return heading.textContent.trim();

    return document.title || "";
  }

  function buildStatisticsAnswers(form, quizData, results) {
    return quizData.map((question, questionIndex) => {
      const name = `quiz${questionIndex}`;
      const selected = form.querySelector(`input[name="${name}"]:checked`);
      const selectedIndex = selected ? parseInt(selected.value, 10) : null;

      return {
        questionNumber: questionIndex + 1,
        questionText: question.question || "",
        selectedAnswer:
          selectedIndex === null ? "" : question.options[selectedIndex] || selected.value,
        correctAnswer: question.options[question.correct] || String(question.correct),
        isCorrect: Boolean(results[questionIndex]),
      };
    });
  }

  function hasAnsweredAll(form, quizData) {
    return quizData.every((_, questionIndex) =>
      form.querySelector(`input[name="quiz${questionIndex}"]:checked`),
    );
  }

  function createOption(name, qIndex, optIndex, text) {
    const id = `${name}-q${qIndex}-o${optIndex}`;
    const wrapper = document.createElement("div");
    wrapper.className = "quiz-option";
    const input = document.createElement("input");
    input.type = "radio";
    input.name = name;
    input.id = id;
    input.value = String(optIndex);
    const label = document.createElement("label");
    label.htmlFor = id;
    label.innerText = text;
    wrapper.appendChild(input);
    wrapper.appendChild(label);
    return wrapper;
  }

  function renderQuestion(form, qIndex, q) {
    const name = `quiz${qIndex}`;
    const container = document.createElement("div");
    container.className = "quiz-question";

    const qEl = document.createElement("p");
    qEl.className = "quiz-qtext";
    qEl.innerText = `${qIndex + 1}. ${q.question}`;
    container.appendChild(qEl);

    q.options.forEach((opt, i) => {
      container.appendChild(createOption(name, qIndex, i, opt));
    });

    const feedback = document.createElement("div");
    feedback.className = "quiz-feedback";
    feedback.setAttribute("aria-live", "polite");
    container.appendChild(feedback);

    form.appendChild(container);
  }

  function clearFeedback(container) {
    container
      .querySelectorAll(".quiz-feedback")
      .forEach((f) => (f.innerHTML = ""));
  }

  function evaluate(form, quizData) {
    const results = [];
    quizData.forEach((q, i) => {
      const name = `quiz${i}`;
      const selected = form.querySelector(`input[name="${name}"]:checked`);
      const feedbackEl = form.querySelectorAll(".quiz-feedback")[i];
      if (!selected) {
        feedbackEl.innerHTML = `<span class="quiz-warn">Välj ett alternativ först.</span>`;
        results.push(false);
        return;
      }
      const chosen = parseInt(selected.value, 10);
      if (chosen === q.correct) {
        feedbackEl.innerHTML = `<span class="quiz-correct">Rätt! ${q.explanation || ""}</span>`;
        results.push(true);
      } else {
        const correctText = q.options[q.correct] || "rätt svar";
        feedbackEl.innerHTML = `<span class="quiz-incorrect">Fel — ${q.feedback || "Det här svaret är inte korrekt."} Rätt svar: <strong>${correctText}</strong></span>`;
        results.push(false);
      }
    });
    return results;
  }

  function styles() {
    return `
        .quiz { border-top:1px solid var(--border-color); padding-top:1rem; margin-top:1.2rem }
        .quiz h3{margin:0 0 .5rem}
        .quiz-question{margin-bottom:1rem}
        .quiz-option{margin:6px 0; display:flex; align-items:center; gap:0.5rem}
        .quiz-option input[type="radio"]{flex:0 0 auto}
        .quiz-option label{flex:1 1 auto}
        .quiz-feedback{margin-top:.25rem; padding:.3rem; border-radius:4px}
        .quiz-correct{background:var(--success-bg); color:var(--success-text); padding:.2rem .4rem; border:1px solid var(--success-border); border-radius:4px}
        .quiz-incorrect{background:var(--error-bg); color:var(--error-text); padding:.2rem .4rem; border:1px solid var(--error-border); border-radius:4px}
        .quiz-warn{color:var(--warning-text); background:var(--warning-bg)}
        .quiz button{margin-top:.25rem; margin-bottom:1rem}
        .quiz button, .quiz .quiz-check{
            padding:.4rem .7rem;
            font-size:.95rem;
            border-radius:0.5rem;
            background:var(--accent-strong);
            color:var(--accent-contrast);
            border:0;
            cursor:pointer;
            box-shadow: 0 6px 18px var(--shadow-color);
            display:inline-flex;
            align-items:center;
            justify-content:center;
            align-self:flex-start;
            width:auto;
            max-width:220px;
            white-space:nowrap;
        }
        .quiz button:hover, .quiz .quiz-check:hover{filter:brightness(1.04)}
        .quiz-summary{margin-top:0; padding:.4rem; border-radius:4px}
        .quiz-summary.correct{background:var(--success-bg); color:var(--success-text); border:1px solid var(--success-border)}
        .quiz-summary.partial{background:var(--error-bg); color:var(--error-text); border:1px solid var(--error-border)}
        `;
  }

  window.renderQuiz = function (container, quizData) {
    if (!container) return;
    const improvedQuestions = improvedQuestionBank[container.id];
    if (improvedQuestions) quizData = { ...quizData, questions: improvedQuestions };
    container.classList.add("quiz");
    const styleId = "quiz-component-styles";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = styles();
      document.head.appendChild(s);
    }

    const title = document.createElement("h3");
    title.innerText = quizData.title || "Övningsquiz";
    container.appendChild(title);

    const form = document.createElement("form");
    form.className = "quiz-form";

    quizData.questions.forEach((q, i) => renderQuestion(form, i, q));

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-check";
    btn.innerText = "Kontrollera svar";
    btn.addEventListener("click", () => {
      clearFeedback(container);
      const results = evaluate(form, quizData.questions);
      const correctCount = results.filter(Boolean).length;
      const total = results.length;
      // remove previous summary if any
      const prev = container.querySelector(".quiz-summary");
      if (prev) prev.remove();
      const s = document.createElement("div");
      s.className = "quiz-summary";
      if (correctCount === total) {
        s.classList.add("correct");
        s.innerHTML = `<strong>Alla svar är korrekta — Bra jobbat!</strong>`;
      } else {
        s.classList.add("partial");
        s.innerHTML = `<strong>${correctCount} av ${total} rätt.</strong> Korrigera de felaktiga svaren och prova igen.`;
      }
      container.appendChild(s);

      if (hasAnsweredAll(form, quizData.questions) && !form.dataset.statisticsSent) {
        window.recordQuizStatistics?.({
          quizId: getQuizId(container, quizData),
          chapter: getChapterName(quizData),
          answers: buildStatisticsAnswers(form, quizData.questions, results),
        });
        form.dataset.statisticsSent = "true";
      }
    });

    form.appendChild(btn);
    container.appendChild(form);
  };
})();
