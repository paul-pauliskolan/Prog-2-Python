(function () {
    const questions = [
        { chapter: "1.2", question: "Vilken filändelse har en Python-fil?", answer: "En Python-fil har filändelsen .py.", code: "program.py" },
        { chapter: "1.2", question: "Vad används print() till?", answer: "print() visar text eller värden i terminalen.", code: "print(\"Hej Python!\")" },
        { chapter: "1.2", question: "Hur kontrollerar du normalt vilken Python-version som är installerad?", answer: "Kör python3 --version i terminalen.", code: "python3 --version" },
        { chapter: "1.2", question: "Hur kör du filen program.py från terminalen?", answer: "Använd Python följt av filens namn. Terminalen behöver stå i rätt mapp.", code: "python3 program.py" },
        { chapter: "1.2", question: "Vad är ett syntaxfel?", answer: "Ett syntaxfel betyder att koden bryter mot språkets skrivregler.", code: "print(\"Hej\"  # avslutande parentes saknas" },
        { chapter: "1.3", question: "Varför delar man upp ett program i funktioner?", answer: "Funktioner gör koden lättare att förstå, testa och återanvända.", code: "def hälsa():\n    print(\"Hej!\")" },
        { chapter: "1.3", question: "Vad är en parameter?", answer: "En parameter är ett namn som tar emot ett värde i en funktion.", code: "def dubbla(tal):\n    return tal * 2" },
        { chapter: "1.3", question: "Vad är skillnaden mellan en parameter och ett argument?", answer: "Parametern står i funktionsdefinitionen. Argumentet skickas in när funktionen anropas.", code: "def dubbla(tal):  # parameter\n    return tal * 2\n\ndubbla(5)          # argument" },
        { chapter: "1.3", question: "Vad gör return i en funktion?", answer: "return skickar tillbaka ett resultat från funktionen.", code: "def addera(a, b):\n    return a + b" },
        { chapter: "1.3", question: "Vilken uppgift har en main()-funktion ofta?", answer: "main() samordnar programmets viktigaste steg, medan detaljerna ligger i mindre funktioner.", code: "def main():\n    resultat = beräkna()\n    visa(resultat)" },
        { chapter: "1.4", question: "Vad används en if-sats till?", answer: "En if-sats kör kod bara när ett villkor är sant.", code: "if ålder >= 18:\n    print(\"Myndig\")" },
        { chapter: "1.4", question: "Hur fungerar en kedja med if, elif och else?", answer: "Villkoren prövas uppifrån och bara den första sanna grenen körs.", code: "if poäng >= 20:\n    print(\"A\")\nelif poäng >= 10:\n    print(\"E\")\nelse:\n    print(\"F\")" },
        { chapter: "1.4", question: "Vad betyder operatorn and?", answer: "and kräver att båda villkoren är sanna.", code: "if ålder >= 18 and har_biljett:\n    print(\"Välkommen\")" },
        { chapter: "1.4", question: "Vad betyder or och not?", answer: "or kräver minst ett sant villkor. not vänder på ett sanningsvärde.", code: "if helg or not skoldag:\n    print(\"Ledig\")" },
        { chapter: "1.4", question: "Vad är skillnaden mellan return och print()?", answer: "return skickar tillbaka ett värde. print() visar något på skärmen.", code: "def är_vuxen(ålder):\n    return ålder >= 18\n\nprint(är_vuxen(20))" },
        { chapter: "1.5", question: "Vad är en loop?", answer: "En loop upprepar ett kodblock.", code: "for tal in range(3):\n    print(tal)" },
        { chapter: "1.5", question: "När passar en for-loop bäst?", answer: "När du vet vad du ska gå igenom eller hur många upprepningar som behövs.", code: "for namn in [\"Ali\", \"Kim\", \"Sam\"]:\n    print(namn)" },
        { chapter: "1.5", question: "När passar en while-loop bäst?", answer: "När loopen ska fortsätta så länge ett villkor är sant.", code: "while svar != \"ja\":\n    svar = input(\"Skriv ja: \")" },
        { chapter: "1.5", question: "Vad gör break och continue i en loop?", answer: "break avslutar loopen. continue hoppar direkt till nästa varv.", code: "if tal == 0:\n    continue\nif tal > 10:\n    break" },
        { chapter: "1.5", question: "Vad riskerar att skapa en oändlig while-loop?", answer: "Att villkoret aldrig blir falskt och att loopen saknar ett fungerande avslut.", code: "tal = 1\nwhile tal > 0:\n    print(tal)  # tal ändras aldrig" },
        { chapter: "1.6", question: "Vad är ett undantag?", answer: "Ett undantag är ett fel som uppstår medan programmet körs.", code: "int(\"hej\")  # ger ValueError" },
        { chapter: "1.6", question: "Vad gör try och except?", answer: "try försöker köra kod. Om det angivna felet uppstår tar except hand om det.", code: "try:\n    tal = int(input(\"Tal: \"))\nexcept ValueError:\n    print(\"Skriv ett heltal.\")" },
        { chapter: "1.6", question: "När uppstår ValueError vid omvandling med int()?", answer: "När värdet inte kan omvandlas till ett heltal.", code: "tal = int(\"3.5\")  # ValueError" },
        { chapter: "1.6", question: "Varför bör du fånga en bestämd feltyp i except?", answer: "Då hanterar du det väntade felet utan att råka dölja andra problem.", code: "except ValueError:\n    print(\"Felaktigt tal.\")" },
        { chapter: "1.6", question: "Hur kan programmet fråga igen efter felaktig inmatning?", answer: "Lägg try och except i en loop och använd break först när inmatningen lyckas.", code: "while True:\n    try:\n        tal = int(input(\"Tal: \"))\n        break\n    except ValueError:\n        print(\"Försök igen.\")" },
        { chapter: "1.7", question: "Vad är ett flödesschema?", answer: "En visuell modell som visar programmets steg och flöde.", code: "Start → Läs in tal → Beslut → Resultat → Slut" },
        { chapter: "1.7", question: "Vilka vanliga symboler används i ett flödesschema?", answer: "Oval för start och slut, rektangel för instruktion, diamant för beslut och pilar för flödet.", code: "◇ beslut\n□ instruktion\n→ flöde" },
        { chapter: "1.7", question: "Vad är pseudokod?", answer: "En tydlig, programmeringslik beskrivning av logiken utan krav på korrekt programspråkssyntax.", code: "LÄS tal\nOM tal MOD 2 == 0\n    SKRIV \"Jämnt\"" },
        { chapter: "1.7", question: "Vad beskriver ett användningsfall?", answer: "Vem som använder systemet, vad personen vill göra och vilket resultat som ska uppnås.", code: "Aktör: Elev\nMål: Köra quiz\nResultat: Visa resultat" },
        { chapter: "1.7", question: "Varför planera med flödesschema eller pseudokod före kodning?", answer: "Du kan strukturera lösningen, hitta logiska fel och förklara den oberoende av programspråk.", code: "problem → modell → kod → test" },
        { chapter: "2.1", question: "Vad är en algoritm?", answer: "En väldefinierad sekvens av steg som löser ett problem eller utför en uppgift.", code: "1. Läs in tal\n2. Kontrollera talet\n3. Visa resultat" },
        { chapter: "2.1", question: "Vilka delar bör en bra algoritm beskriva?", answer: "Indata, steg, villkor, resultat och testfall.", code: "indata → steg och villkor → resultat" },
        { chapter: "2.1", question: "Hur kan du avgöra om ett heltal är jämnt?", answer: "Kontrollera om resten vid division med 2 är noll.", code: "if tal % 2 == 0:\n    print(\"Jämnt\")" },
        { chapter: "2.1", question: "Vad är skillnaden mellan en algoritm och färdig kod?", answer: "Algoritmen beskriver lösningens logiska steg; koden uttrycker dem med ett programspråks syntax.", code: "Algoritm: OM ålder < 18\nPython: if ålder < 18:" },
        { chapter: "2.1", question: "Varför behöver en algoritm flera testfall?", answer: "För att kontrollera vanliga värden, gränsfall och olika vägar genom algoritmen.", code: "# gräns vid 18\ntestvärden = [17, 18, 19]" },
        { chapter: "2.2", question: "Vad är en lista i Python?", answer: "En ordnad och ändringsbar samling värden.", code: "frukter = [\"äpple\", \"päron\"]" },
        { chapter: "2.2", question: "Vilket index har det första elementet i en lista?", answer: "Det första elementet har index 0.", code: "frukter[0]  # första frukten" },
        { chapter: "2.2", question: "Hur lägger du till och tar bort element i en lista?", answer: "append() lägger till sist och remove() tar bort ett angivet värde.", code: "namn.append(\"Ali\")\nnamn.remove(\"Ali\")" },
        { chapter: "2.2", question: "Hur itererar du över alla element i en lista?", answer: "Använd en for-loop där loopvariabeln får ett element i taget.", code: "for namn in namnlista:\n    print(namn)" },
        { chapter: "2.2", question: "Hur beräknar du medelvärdet av talen i en lista?", answer: "Dela summan av talen med antalet tal.", code: "medel = sum(tal) / len(tal)" },
        { chapter: "2.3", question: "Hur fungerar linjär sökning?", answer: "Elementen kontrolleras ett i taget tills värdet hittas eller listan tar slut.", code: "for namn in namnlista:\n    if namn == sökt_namn:\n        return True" },
        { chapter: "2.3", question: "Vilket krav har binär sökning på listan?", answer: "Listan måste vara sorterad.", code: "tal.sort()\n# sök sedan binärt" },
        { chapter: "2.3", question: "Varför är binär sökning effektivare än linjär sökning i en stor sorterad lista?", answer: "Den halverar det återstående sökområdet i varje steg.", code: "mitten = (vänster + höger) // 2" },
        { chapter: "2.3", question: "Vad är skillnaden mellan sort() och sorted()?", answer: "sort() ändrar listan direkt; sorted() skapar och returnerar en ny sorterad lista.", code: "tal.sort()\nnya_tal = sorted(tal)" },
        { chapter: "2.3", question: "Hur fungerar bubble sort i stora drag?", answer: "Algoritmen jämför intilliggande element och byter plats på dem när de ligger i fel ordning.", code: "if tal[i] > tal[i + 1]:\n    tal[i], tal[i + 1] = tal[i + 1], tal[i]" },
        { chapter: "2.4", question: "Vad lagrar en dictionary?", answer: "Nyckel-värde-par där varje värde nås via sin nyckel.", code: "person = {\"namn\": \"Anna\", \"ålder\": 25}" },
        { chapter: "2.4", question: "Hur hämtar och ändrar du ett värde i en dictionary?", answer: "Använd nyckeln inom hakparenteser.", code: "print(person[\"namn\"])\nperson[\"ålder\"] = 26" },
        { chapter: "2.4", question: "Hur loopar du över både nycklar och värden i en dictionary?", answer: "Använd items() och packa upp varje nyckel-värde-par.", code: "for nyckel, värde in person.items():\n    print(nyckel, värde)" },
        { chapter: "2.4", question: "Vad är en tuple?", answer: "En ordnad samling värden som inte kan ändras efter att den skapats.", code: "koordinat = (10, 20)" },
        { chapter: "2.4", question: "Vad innebär tuple-uppackning?", answer: "Värdena i en tuple tilldelas separata variabler i samma operation.", code: "x, y = (10, 20)" },
        { chapter: "2.5", question: "Vad innebär algoritmtänkande?", answer: "Att se ett problem som logiska steg och identifiera mönster, upprepningar och beslut.", code: "problem → delproblem → tydliga steg" },
        { chapter: "2.5", question: "Vilka tre huvuddelar har modellen input–bearbetning–output?", answer: "Vad programmet tar emot, vad det gör med informationen och vad det ger ifrån sig.", code: "input → bearbetning → output" },
        { chapter: "2.5", question: "Vad bör du bestämma om datastrukturen när du planerar?", answer: "Hur informationen bäst lagras, exempelvis i en lista, dictionary eller tuple.", code: "poäng = [10, 20]\nspelare = {\"namn\": \"Kim\"}" },
        { chapter: "2.5", question: "Varför planera programmet i flera funktioner?", answer: "Varje funktion kan få ett tydligt ansvar och testas separat.", code: "def läs_in(): ...\ndef beräkna(): ...\ndef visa(): ..." },
        { chapter: "2.5", question: "Vad ska ett testfall innehålla?", answer: "Konkreta indata och det resultat som förväntas.", code: "input: 10\nförväntat: \"Ta på en tröja\"" },
        { chapter: "2.6", question: "Hur kan namn och poäng lagras tillsammans för flera spelare?", answer: "Lagra varje resultat som en tuple i en lista.", code: "resultat = [(\"Anna\", 120), (\"Erik\", 95)]" },
        { chapter: "2.6", question: "Vad gör lambda x: x[1] vid sortering av resultat?", answer: "Den väljer värdet på index 1, alltså poängen, som sorteringsnyckel.", code: "resultat.sort(key=lambda x: x[1])" },
        { chapter: "2.6", question: "Hur får du högsta poängen först vid sortering?", answer: "Sortera efter poäng med reverse=True.", code: "resultat.sort(key=lambda x: x[1], reverse=True)" },
        { chapter: "2.6", question: "Varför delas ett större listprogram upp i funktioner?", answer: "Inmatning, lagring, bearbetning och utskrift får tydliga, separata ansvar.", code: "add_score(resultat)\nprint_high_scores(resultat)" },
        { chapter: "2.6", question: "Vilka kantfall bör ett topplisteprogram testas med?", answer: "Bland annat tom lista, felaktig poäng och flera spelare med samma poäng.", code: "testfall = [[], [(\"Oskar\", 100), (\"Maja\", 100)]]" }
    ];

    const chapter = document.querySelector("[data-chapter]");
    const position = document.querySelector("[data-position]");
    const question = document.querySelector("[data-question]");
    const answer = document.querySelector("[data-answer]");
    const answerText = document.querySelector("[data-answer-text]");
    const codeWrapper = document.querySelector("[data-code-wrapper]");
    const code = document.querySelector("[data-code]");
    const showAnswerButton = document.querySelector("[data-show-answer]");
    const nextButton = document.querySelector("[data-next-question]");
    let order = [];
    let currentIndex = 0;

    function shuffle() {
        order = questions.map((_, index) => index);
        for (let index = order.length - 1; index > 0; index -= 1) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [order[index], order[randomIndex]] = [order[randomIndex], order[index]];
        }
    }

    function renderQuestion() {
        const current = questions[order[currentIndex]];
        chapter.textContent = `Kapitel ${current.chapter}`;
        position.textContent = currentIndex + 1;
        question.textContent = current.question;
        answerText.textContent = current.answer;
        code.textContent = current.code || "";
        codeWrapper.hidden = !current.code;
        answer.hidden = true;
        showAnswerButton.hidden = false;
        nextButton.hidden = true;
        showAnswerButton.focus();
    }

    function showAnswer() {
        answer.hidden = false;
        showAnswerButton.hidden = true;
        nextButton.hidden = false;
        nextButton.textContent = currentIndex === questions.length - 1 ? "Blanda om frågorna ↻" : "Nästa slumpfråga →";
        nextButton.focus();
    }

    function nextQuestion() {
        currentIndex += 1;
        if (currentIndex >= questions.length) {
            currentIndex = 0;
            shuffle();
        }
        renderQuestion();
    }

    showAnswerButton.addEventListener("click", showAnswer);
    nextButton.addEventListener("click", nextQuestion);
    document.addEventListener("keydown", (event) => {
        if (event.key !== " ") return;
        event.preventDefault();
        if (answer.hidden) showAnswer();
        else nextQuestion();
    });

    shuffle();
    renderQuestion();
}());
