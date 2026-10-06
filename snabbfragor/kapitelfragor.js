(function () {
    const questionBank = {
        "1.6": [
            ["Vad är ett undantag?", "Ett undantag är ett fel som uppstår medan programmet körs.", "int(\"hej\")  # ger ValueError"],
            ["Vad gör try och except?", "try försöker köra kod. Om det angivna felet uppstår tar except hand om det.", "try:\n    tal = int(input(\"Tal: \"))\nexcept ValueError:\n    print(\"Skriv ett heltal.\")"],
            ["När uppstår ValueError vid omvandling med int()?", "När värdet inte kan omvandlas till ett heltal.", "tal = int(\"3.5\")  # ValueError"],
            ["Varför bör du fånga en bestämd feltyp i except?", "Då hanterar du det väntade felet utan att råka dölja andra problem.", "except ValueError:\n    print(\"Felaktigt tal.\")"],
            ["Hur kan programmet fråga igen efter felaktig inmatning?", "Lägg try och except i en loop och använd break först när inmatningen lyckas.", "while True:\n    try:\n        tal = int(input(\"Tal: \"))\n        break\n    except ValueError:\n        print(\"Försök igen.\")"]
        ],
        "1.7": [
            ["Vad är ett flödesschema?", "En visuell modell som visar programmets steg och flöde.", "Start → Läs in tal → Beslut → Resultat → Slut"],
            ["Vilka vanliga symboler används i ett flödesschema?", "Oval för start och slut, rektangel för instruktion, diamant för beslut och pilar för flödet.", "◇ beslut\n□ instruktion\n→ flöde"],
            ["Vad är pseudokod?", "En tydlig, programmeringslik beskrivning av logiken utan krav på korrekt programspråkssyntax.", "LÄS tal\nOM tal MOD 2 == 0\n    SKRIV \"Jämnt\""],
            ["Vad beskriver ett användningsfall?", "Vem som använder systemet, vad personen vill göra och vilket resultat som ska uppnås.", "Aktör: Elev\nMål: Köra quiz\nResultat: Visa resultat"],
            ["Varför planera med flödesschema eller pseudokod före kodning?", "Du kan strukturera lösningen, hitta logiska fel och förklara den oberoende av programspråk.", "problem → modell → kod → test"]
        ],
        "2.1": [
            ["Vad är en algoritm?", "En väldefinierad sekvens av steg som löser ett problem eller utför en uppgift.", "1. Läs in tal\n2. Kontrollera talet\n3. Visa resultat"],
            ["Vilka delar bör en bra algoritm beskriva?", "Indata, steg, villkor, resultat och testfall.", "indata → steg och villkor → resultat"],
            ["Hur kan du avgöra om ett heltal är jämnt?", "Kontrollera om resten vid division med 2 är noll.", "if tal % 2 == 0:\n    print(\"Jämnt\")"],
            ["Vad är skillnaden mellan en algoritm och färdig kod?", "Algoritmen beskriver lösningens logiska steg; koden uttrycker dem med ett programspråks syntax.", "Algoritm: OM ålder < 18\nPython: if ålder < 18:"],
            ["Varför behöver en algoritm flera testfall?", "För att kontrollera vanliga värden, gränsfall och olika vägar genom algoritmen.", "# gräns vid 18\ntestvärden = [17, 18, 19]"]
        ],
        "2.2": [
            ["Vad är en lista i Python?", "En ordnad och ändringsbar samling värden.", "frukter = [\"äpple\", \"päron\"]"],
            ["Vilket index har det första elementet i en lista?", "Det första elementet har index 0.", "frukter[0]  # första frukten"],
            ["Hur lägger du till och tar bort element i en lista?", "append() lägger till sist och remove() tar bort ett angivet värde.", "namn.append(\"Ali\")\nnamn.remove(\"Ali\")"],
            ["Hur itererar du över alla element i en lista?", "Använd en for-loop där loopvariabeln får ett element i taget.", "for namn in namnlista:\n    print(namn)"],
            ["Hur beräknar du medelvärdet av talen i en lista?", "Dela summan av talen med antalet tal.", "medel = sum(tal) / len(tal)"]
        ],
        "2.3": [
            ["Hur fungerar linjär sökning?", "Elementen kontrolleras ett i taget tills värdet hittas eller listan tar slut.", "for namn in namnlista:\n    if namn == sökt_namn:\n        return True"],
            ["Vilket krav har binär sökning på listan?", "Listan måste vara sorterad.", "tal.sort()\n# sök sedan binärt"],
            ["Varför är binär sökning effektivare än linjär sökning i en stor sorterad lista?", "Den halverar det återstående sökområdet i varje steg.", "mitten = (vänster + höger) // 2"],
            ["Vad är skillnaden mellan sort() och sorted()?", "sort() ändrar listan direkt; sorted() skapar och returnerar en ny sorterad lista.", "tal.sort()\nnya_tal = sorted(tal)"],
            ["Hur fungerar bubble sort i stora drag?", "Algoritmen jämför intilliggande element och byter plats på dem när de ligger i fel ordning.", "if tal[i] > tal[i + 1]:\n    tal[i], tal[i + 1] = tal[i + 1], tal[i]"]
        ],
        "2.4": [
            ["Vad lagrar en dictionary?", "Nyckel-värde-par där varje värde nås via sin nyckel.", "person = {\"namn\": \"Anna\", \"ålder\": 25}"],
            ["Hur hämtar och ändrar du ett värde i en dictionary?", "Använd nyckeln inom hakparenteser.", "print(person[\"namn\"])\nperson[\"ålder\"] = 26"],
            ["Hur loopar du över både nycklar och värden i en dictionary?", "Använd items() och packa upp varje nyckel-värde-par.", "for nyckel, värde in person.items():\n    print(nyckel, värde)"],
            ["Vad är en tuple?", "En ordnad samling värden som inte kan ändras efter att den skapats.", "koordinat = (10, 20)"],
            ["Vad innebär tuple-uppackning?", "Värdena i en tuple tilldelas separata variabler i samma operation.", "x, y = (10, 20)"]
        ],
        "2.5": [
            ["Vad innebär algoritmtänkande?", "Att se ett problem som logiska steg och identifiera mönster, upprepningar och beslut.", "problem → delproblem → tydliga steg"],
            ["Vilka tre huvuddelar har modellen input–bearbetning–output?", "Vad programmet tar emot, vad det gör med informationen och vad det ger ifrån sig.", "input → bearbetning → output"],
            ["Vad bör du bestämma om datastrukturen när du planerar?", "Hur informationen bäst lagras, exempelvis i en lista, dictionary eller tuple.", "poäng = [10, 20]\nspelare = {\"namn\": \"Kim\"}"],
            ["Varför planera programmet i flera funktioner?", "Varje funktion kan få ett tydligt ansvar och testas separat.", "def läs_in(): ...\ndef beräkna(): ...\ndef visa(): ..."],
            ["Vad ska ett testfall innehålla?", "Konkreta indata och det resultat som förväntas.", "input: 10\nförväntat: \"Ta på en tröja\""]
        ],
        "2.6": [
            ["Hur kan namn och poäng lagras tillsammans för flera spelare?", "Lagra varje resultat som en tuple i en lista.", "resultat = [(\"Anna\", 120), (\"Erik\", 95)]"],
            ["Vad gör lambda x: x[1] vid sortering av resultat?", "Den väljer värdet på index 1, alltså poängen, som sorteringsnyckel.", "resultat.sort(key=lambda x: x[1])"],
            ["Hur får du högsta poängen först vid sortering?", "Sortera efter poäng med reverse=True.", "resultat.sort(key=lambda x: x[1], reverse=True)"],
            ["Varför delas ett större listprogram upp i funktioner?", "Inmatning, lagring, bearbetning och utskrift får tydliga, separata ansvar.", "add_score(resultat)\nprint_high_scores(resultat)"],
            ["Vilka kantfall bör ett topplisteprogram testas med?", "Bland annat tom lista, felaktig poäng och flera spelare med samma poäng.", "testfall = [[], [(\"Oskar\", 100), (\"Maja\", 100)]]"]
        ]
    };

    const chapter = document.body.dataset.chapter;
    const questions = questionBank[chapter];
    const deck = document.querySelector("[data-deck]");

    questions.forEach(([question, answer, code], index) => {
        const number = index + 1;
        const questionSlide = document.createElement("section");
        questionSlide.className = `slide question-slide${index === 0 ? " is-active" : ""}`;
        questionSlide.dataset.question = number;
        const questionContent = document.createElement("div");
        questionContent.className = "slide-content";
        const questionLabel = document.createElement("p");
        questionLabel.className = "eyebrow";
        questionLabel.textContent = `Kapitel ${chapter} · Fråga ${number}`;
        const questionHeading = document.createElement("h1");
        questionHeading.textContent = question;
        const prompt = document.createElement("p");
        prompt.className = "think-prompt";
        prompt.textContent = "Tänk på svaret först. Tryck sedan på mellanslag för att visa facit.";
        questionContent.append(questionLabel, questionHeading, prompt);
        questionSlide.append(questionContent);

        const answerSlide = document.createElement("section");
        answerSlide.className = "slide answer-slide";
        answerSlide.dataset.question = number;
        const answerContent = document.createElement("div");
        answerContent.className = "slide-content";
        const answerLabel = document.createElement("p");
        answerLabel.className = "eyebrow";
        answerLabel.textContent = `Kapitel ${chapter} · Facit ${number}`;
        const answerHeading = document.createElement("h1");
        answerHeading.textContent = answer;
        const pre = document.createElement("pre");
        const codeElement = document.createElement("code");
        codeElement.textContent = code;
        pre.append(codeElement);
        answerContent.append(answerLabel, answerHeading, pre);
        answerSlide.append(answerContent);
        deck.append(questionSlide, answerSlide);
    });
}());
