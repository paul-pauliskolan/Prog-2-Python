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
        { chapter: "1.5", question: "Vad riskerar att skapa en oändlig while-loop?", answer: "Att villkoret aldrig blir falskt och att loopen saknar ett fungerande avslut.", code: "tal = 1\nwhile tal > 0:\n    print(tal)  # tal ändras aldrig" }
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
