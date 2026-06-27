const CURRENT_SCRIPT = document.currentScript;
const CHAPTERS_URL = new URL(
  "../data/chapters.json",
  CURRENT_SCRIPT?.src || window.location.href,
).href;

const state = {
  chapters: [],
  loading: null,
};

function chapterUrl(chapterNumber) {
  const fromChapterFolder = window.location.pathname.includes("/chapters/");
  return fromChapterFolder
    ? `chapter-${chapterNumber}.html`
    : `chapters/chapter-${chapterNumber}.html`;
}

function renderSummary(chapter) {
  const summary = document.getElementById("chapter-summary");
  if (!summary) return;

  const topics = Array.isArray(chapter.keyTopics) ? chapter.keyTopics : [];
  summary.innerHTML = `
        <p class="eyebrow">Kapitel ${chapter.number}</p>
        <h2>${chapter.title}</h2>
        <p>${chapter.description || chapter.summary || ""}</p>
        ${chapter.summary ? `<p>${chapter.summary}</p>` : ""}
        ${topics.length ? `<div class="key-topics">${topics.map((topic) => `<span>${topic}</span>`).join("")}</div>` : ""}
    `;
}

function renderSections(chapter) {
  const sections = document.getElementById("chapter-sections");
  if (!sections) return;

  const items = Array.isArray(chapter.sections) ? chapter.sections : [];
  sections.innerHTML = items.length
    ? `
            <section class="content-section">
                <h2>Innehåll</h2>
                <ol>
                    ${items.map((section) => `<li>${section}</li>`).join("")}
                </ol>
            </section>
        `
    : "";
}

function renderResources(chapter) {
  const resources = document.getElementById("chapter-resources");
  if (!resources) return;

  const links = Array.isArray(chapter.resources) ? chapter.resources : [];
  resources.innerHTML = links.length
    ? `
            <section class="content-section">
                <h2>Resurser</h2>
                <ul>
                    ${links.map((resource) => `<li><a href="${resource.url}">${resource.label || resource.url}</a></li>`).join("")}
                </ul>
            </section>
        `
    : "";
}

function renderVideos(chapter) {
  const videos = document.getElementById("chapter-videos");
  if (!videos) return;

  const items = Array.isArray(chapter.videoSuggestions)
    ? chapter.videoSuggestions
    : [];
  videos.innerHTML = items.length
    ? `
            <section class="content-section">
                <h2>Videoförslag</h2>
                <ul>
                    ${items.map((video) => `<li>${video}</li>`).join("")}
                </ul>
            </section>
        `
    : "";
}

function renderChapterNav(chapter) {
  const nav = document.querySelector(".chapter-nav");
  if (!nav) return;

  const prevChapter = state.chapters.find(
    (item) => item.number === chapter.number - 1,
  );
  const nextChapter = state.chapters.find(
    (item) => item.number === chapter.number + 1,
  );

  nav.innerHTML = `
        <div class="chapter-nav-links">
            ${prevChapter ? `<a href="${chapterUrl(prevChapter.number)}" class="chapter-nav-link chapter-nav-prev">Föregående kapitel</a>` : ""}
            <a href="../index.html" class="chapter-nav-link chapter-nav-home">Till startsidan</a>
            ${nextChapter ? `<a href="${chapterUrl(nextChapter.number)}" class="chapter-nav-link chapter-nav-next">Nästa kapitel</a>` : ""}
        </div>
    `;
}

function renderChapterPage(chapterNumber) {
  const chapter = getChapter(chapterNumber);
  if (!chapter) return false;

  document.title = `Kapitel ${chapter.number} - ${chapter.title}`;
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute(
      "content",
      chapter.description || chapter.summary || "",
    );
  }

  renderSummary(chapter);
  renderSections(chapter);
  renderVideos(chapter);
  renderResources(chapter);
  renderChapterNav(chapter);

  return true;
}

function getChapter(chapterNumber) {
  return state.chapters.find((chapter) => chapter.number === chapterNumber);
}

async function loadChapters() {
  if (!state.loading) {
    state.loading = fetch(CHAPTERS_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Kunde inte hämta kapiteldata: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        state.chapters = Array.isArray(data.chapters) ? data.chapters : [];
        return state.chapters;
      })
      .catch((error) => {
        console.error(error);
        state.chapters = [];
        return state.chapters;
      });
  }

  return state.loading;
}

function initPage() {
  loadChapters().then(() => {
    const match = window.location.pathname.match(/chapter-(\d+)\.html$/);
    if (match) {
      renderChapterPage(parseInt(match[1], 10));
    }
  });
}

window.webbook = {
  getChapter,
  loadChapters,
  renderChapterPage,
};

document.addEventListener("DOMContentLoaded", initPage);

// -- Lesson navigation (prev/next) --
// An ordered list of lesson pages that exist in the `chapters/` folder.
// Update this list if you add/remove lesson files.
const LESSON_ORDER = [
  "chapter-1-1.html",
  "chapter-1-2.html",
  "chapter-1-3.html",
  "chapter-1-4.html",
  "chapter-1-5.html",
  "chapter-1-6.html",
  "chapter-1-7.html",
  "chapter-1-8.html",
  "chapter-2-1.html",
  "chapter-2-2.html",
  "chapter-2-3.html",
  "chapter-2-4.html",
  "chapter-2-5.html",
  "chapter-2-6.html",
  "chapter-2-7.html",
  "chapter-3-1.html",
  "chapter-3-2.html",
  "chapter-3-3.html",
  "chapter-3-4.html",
  "chapter-3-5.html",
  "chapter-3-6.html",
  "chapter-3-7.html",
  "chapter-3-8.html",
  "chapter-3-9.html",
  "chapter-4-1.html",
  "chapter-4-2.html",
  "chapter-4-3.html",
  "chapter-4-4.html",
  "chapter-4-5.html",
  "chapter-4-6.html",
  "chapter-5-1.html",
  "chapter-5-2.html",
  "chapter-5-3.html",
  "chapter-5-4.html",
  "chapter-5-5.html",
  "chapter-5-6.html",
];

function insertPrevNextLinks() {
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf("/") + 1);

  // Helper to create link element
  function makeLink(href, label, cls) {
    const a = document.createElement("a");
    a.href = href;
    a.className = `chapter-nav-link ${cls}`;
    a.textContent = label;
    return a;
  }

  let prev = null;
  let next = null;

  const lessonIdx = LESSON_ORDER.indexOf(filename);
  if (lessonIdx !== -1) {
    if (lessonIdx > 0) prev = LESSON_ORDER[lessonIdx - 1];
    if (lessonIdx < LESSON_ORDER.length - 1) next = LESSON_ORDER[lessonIdx + 1];
  } else {
    // If this is a chapter overview like chapter-2.html, link to adjacent chapter overviews
    const chapMatch = filename.match(/^chapter-(\d+)\.html$/);
    if (chapMatch) {
      const n = parseInt(chapMatch[1], 10);
      const prevChap = `chapter-${n - 1}.html`;
      const nextChap = `chapter-${n + 1}.html`;
      // check existence by trying to fetch the file (fast, cached)
      // if not found we simply won't render that link
      prev = prevChap;
      next = nextChap;
    }
  }

  const container =
    document.querySelector(".chapter-main") || document.querySelector("main");
  if (!container) return;

  const navWrap = document.createElement("div");
  navWrap.className = "lesson-nav";
  navWrap.style.marginTop = "2rem";
  navWrap.style.display = "flex";
  navWrap.style.justifyContent = "space-between";

  if (prev) {
    const prevHref = prev.startsWith("chapter-") ? prev : prev;
    const prevLink = makeLink(prevHref, "← Föregående", "prev");
    navWrap.appendChild(prevLink);
  } else {
    const spacer = document.createElement("div");
    navWrap.appendChild(spacer);
  }

  const homeLink = makeLink("../index.html", "Till startsidan", "home");
  navWrap.appendChild(homeLink);

  if (next) {
    const nextHref = next.startsWith("chapter-") ? next : next;
    const nextLink = makeLink(nextHref, "Nästa →", "next");
    navWrap.appendChild(nextLink);
  }

  // Append navigation before the footer inside the article (if present)
  const article = container.querySelector("article") || container;
  article.appendChild(navWrap);
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    insertPrevNextLinks();
  } catch (e) {
    console.error("Error inserting prev/next links", e);
  }
});

function runChapterOneProgrammingExercise(exercise) {
  const code = exercise.querySelector(".exercise-code");
  const input = exercise.querySelector(".exercise-console-input");
  const button = exercise.querySelector(".exercise-run");
  const result = exercise.querySelector(".exercise-result");

  if (!code || !input || !button || !result) return;

  const initialMessage = result.textContent;
  const prompts = {
    name: "Vad heter du? ",
    interest: "Vad vill du skapa med kod? ",
  };
  const answers = {
    name: "",
    interest: "",
  };
  const output = [];
  let step = "ready";

  function renderOutput() {
    result.textContent = output.length ? output.join("\n") : initialMessage;
  }

  function startProgram() {
    answers.name = "";
    answers.interest = "";
    output.length = 0;
    step = "name";
    input.disabled = false;
    input.value = "";
    input.placeholder = "Skriv ditt namn";
    button.textContent = "Skicka svar";
    output.push(prompts.name);
    renderOutput();
    input.focus();
  }

  function finishProgram() {
    const source = code.value;
    const name = answers.name || "någon";
    const interest = answers.interest || "något med kod";

    if (source.includes("Hej")) {
      output.push("Hej " + name + "!");
    }

    if (source.includes("Du vill skapa")) {
      output.push("Du vill skapa: " + interest);
    }

    if (!output.length) {
      output.push(
        "Programmet kördes, men den här övningen känner bara igen input() och print-raderna i exemplet.",
      );
    }

    step = "done";
    input.disabled = true;
    input.value = "";
    input.placeholder = "Programmet är klart";
    button.textContent = "Kör igen";
    renderOutput();
  }

  function submitAnswer() {
    const answer = input.value.trim();

    if (step === "ready" || step === "done") {
      startProgram();
      return;
    }

    if (step === "name") {
      answers.name = answer;
      output[output.length - 1] = prompts.name + (answer || "någon");
      output.push(prompts.interest);
      step = "interest";
      input.value = "";
      input.placeholder = "Skriv vad du vill skapa";
      renderOutput();
      input.focus();
      return;
    }

    if (step === "interest") {
      answers.interest = answer;
      output[output.length - 1] = prompts.interest + (answer || "något med kod");
      finishProgram();
    }
  }

  button.addEventListener("click", submitAnswer);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitAnswer();
    }
  });
}

function runChapterOneAverageExercise(exercise) {
  const code = exercise.querySelector(".exercise-code");
  const input = exercise.querySelector(".exercise-average-input");
  const button = exercise.querySelector(".exercise-run");
  const result = exercise.querySelector(".exercise-result");

  if (!code || !input || !button || !result) return;

  const initialMessage = result.textContent;
  const prompts = [
    "Enter first number: ",
    "Enter second number: ",
    "Enter third number: ",
  ];
  const numbers = [];
  const output = [];
  let step = -1;

  function renderOutput() {
    result.textContent = output.length ? output.join("\n") : initialMessage;
  }

  function startProgram() {
    numbers.length = 0;
    output.length = 0;
    step = 0;
    input.disabled = false;
    input.value = "";
    input.placeholder = "Skriv första talet";
    button.textContent = "Skicka svar";
    output.push(prompts[step]);
    renderOutput();
    input.focus();
  }

  function finishProgram() {
    const average = (numbers[0] + numbers[1] + numbers[2]) / 3;

    if (code.value.includes("calculate_average")) {
      output.push("The average is " + average.toFixed(2));
    }

    step = prompts.length;
    input.disabled = true;
    input.value = "";
    input.placeholder = "Programmet är klart";
    button.textContent = "Kör igen";
    renderOutput();
  }

  function finishWithError(rawValue) {
    output[output.length - 1] = prompts[step] + rawValue;
    output.push("ValueError: could not convert string to float");
    step = prompts.length;
    input.disabled = true;
    input.value = "";
    input.placeholder = "Programmet stoppade vid felet";
    button.textContent = "Kör igen";
    renderOutput();
  }

  function submitAnswer() {
    if (step < 0 || step >= prompts.length) {
      startProgram();
      return;
    }

    const rawValue = input.value.trim();
    const value = Number(rawValue);

    if (rawValue === "" || Number.isNaN(value)) {
      finishWithError(rawValue);
      return;
    }

    numbers.push(value);
    output[output.length - 1] = prompts[step] + rawValue;
    step += 1;

    if (step >= prompts.length) {
      finishProgram();
      return;
    }

    output.push(prompts[step]);
    input.value = "";
    input.placeholder =
      step === 1 ? "Skriv andra talet" : "Skriv tredje talet";
    renderOutput();
    input.focus();
  }

  button.addEventListener("click", submitAnswer);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitAnswer();
    }
  });
}

function runChapterOneAdultExercise(exercise) {
  const code = exercise.querySelector(".exercise-code");
  const input = exercise.querySelector(".exercise-input");
  const button = exercise.querySelector(".exercise-run");
  const result = exercise.querySelector(".exercise-result");

  if (!code || !input || !button || !result) return;

  button.addEventListener("click", () => {
    const rawAge = input.value.split(/\r?\n/)[0]?.trim() || "";
    const age = Number.parseInt(rawAge, 10);

    if (!Number.isInteger(age) || String(age) !== rawAge) {
      result.textContent =
        "Enter your age: " +
        rawAge +
        "\nValueError: invalid literal for int()";
      return;
    }

    const source = code.value;
    const isAdult = age >= 18;
    const output = ["Enter your age: " + rawAge];

    if (source.includes("is_adult")) {
      output.push("is_adult(" + age + ") returnerar " + isAdult);
    }

    output.push(isAdult ? "You are an adult." : "You are not an adult.");
    result.textContent = output.join("\n");
  });
}

function runChapterOneGradeExercise(exercise) {
  const code = exercise.querySelector(".exercise-code");
  const input = exercise.querySelector(".exercise-input");
  const button = exercise.querySelector(".exercise-run");
  const result = exercise.querySelector(".exercise-result");

  if (!code || !input || !button || !result) return;

  button.addEventListener("click", () => {
    const rawScore = input.value.split(/\r?\n/)[0]?.trim() || "";
    const score = Number.parseInt(rawScore, 10);

    if (!Number.isInteger(score) || String(score) !== rawScore) {
      result.textContent =
        "Skriv in poäng (0-100): " +
        rawScore +
        "\nValueError: invalid literal for int()";
      return;
    }

    let feedback = "Fail";
    let branch = "else";

    if (score >= 90) {
      feedback = "Excellent";
      branch = "if grade >= 90";
    } else if (score >= 75) {
      feedback = "Good";
      branch = "elif grade >= 75";
    } else if (score >= 60) {
      feedback = "Pass";
      branch = "elif grade >= 60";
    }

    const output = ["Skriv in poäng (0-100): " + rawScore];

    if (code.value.includes("grade_feedback")) {
      output.push("Vald gren: " + branch);
    }

    output.push("Resultat: " + feedback);
    result.textContent = output.join("\n");
  });
}

function runChapterOneLogicalExercise(exercise) {
  const code = exercise.querySelector(".exercise-code");
  const ageInput = exercise.querySelector(".exercise-number-input");
  const operatorInput = exercise.querySelector(".exercise-select");
  const ticketInput = exercise.querySelector(".exercise-ticket-input");
  const button = exercise.querySelector(".exercise-run");
  const result = exercise.querySelector(".exercise-result");

  if (!code || !ageInput || !operatorInput || !ticketInput || !button || !result) return;

  function updateCodeOperator() {
    code.value = code.value.replace(
      /if age >= 18 (and|or) has_ticket == "ja":/,
      'if age >= 18 ' + operatorInput.value + ' has_ticket == "ja":',
    );
  }

  operatorInput.addEventListener("change", updateCodeOperator);

  button.addEventListener("click", () => {
    updateCodeOperator();
    const age = Number.parseInt(ageInput.value, 10);
    const hasTicket = ticketInput.value === "ja";
    const isAdult = Number.isInteger(age) && age >= 18;
    const usesAnd = operatorInput.value === "and";
    const condition = usesAnd ? isAdult && hasTicket : isAdult || hasTicket;
    const output = [
      "Ålder: " + ageInput.value,
      "Har biljett? " + ticketInput.value,
      "age >= 18 är " + String(isAdult),
      'has_ticket == "ja" är ' + String(hasTicket),
      "Operator: " + operatorInput.value,
      "Hela villkoret är " + String(condition),
      condition ? "Du får gå in." : "Du får inte gå in.",
    ];

    result.textContent = output.join("\n");
  });
}

function runChapterOneExceptionExercise(exercise) {
  const operationInput = exercise.querySelector(".exercise-select");
  const textInput = exercise.querySelector(".exercise-text-input");
  const button = exercise.querySelector(".exercise-run");
  const result = exercise.querySelector(".exercise-result");

  if (!operationInput || !textInput || !button || !result) return;

  button.addEventListener("click", () => {
    const rawValue = textInput.value.trim();
    const number = Number.parseInt(rawValue, 10);
    const isInteger = Number.isInteger(number) && String(number) === rawValue;
    const output = [];

    if (operationInput.value === "age") {
      output.push("Hur gammal är du? " + rawValue);

      if (!isInteger) {
        output.push("ValueError: invalid literal for int()");
        output.push("Du måste skriva ett heltal.");
      } else {
        output.push(String(number + 5));
      }
    } else {
      output.push("Skriv ett tal: " + rawValue);

      if (!isInteger) {
        output.push("ValueError: invalid literal for int()");
        output.push("Fel inmatning, försök igen.");
      } else if (number === 0) {
        output.push("Du kan inte dela med 0.");
      } else {
        output.push(String(100 / number));
      }
    }

    result.textContent = output.join("\n");
  });
}

function runChapterOneForSumExercise(exercise) {
  const input = exercise.querySelector(".exercise-input");
  const button = exercise.querySelector(".exercise-run");
  const result = exercise.querySelector(".exercise-result");

  if (!input || !button || !result) return;

  button.addEventListener("click", () => {
    const rawLimit = input.value.split(/\r?\n/)[0]?.trim() || "";
    const limit = Number.parseInt(rawLimit, 10);

    if (!Number.isInteger(limit) || String(limit) !== rawLimit) {
      result.textContent =
        "Summera från 1 till: " +
        rawLimit +
        "\nValueError: invalid literal for int()";
      return;
    }

    if (limit < 1) {
      result.textContent = "Skriv ett heltal som är 1 eller större.";
      return;
    }

    let total = 0;
    const output = ["Summera från 1 till: " + rawLimit];

    for (let i = 1; i <= limit; i += 1) {
      total += i;
      output.push("Varv " + i + ": total = " + total);
    }

    output.push("Sum: " + total);
    result.textContent = output.join("\n");
  });
}

function runChapterOneWhilePasswordExercise(exercise) {
  const input = exercise.querySelector(".exercise-while-input");
  const button = exercise.querySelector(".exercise-run");
  const result = exercise.querySelector(".exercise-result");

  if (!input || !button || !result) return;

  const initialMessage = result.textContent;
  const prompt = "Enter password: ";
  const output = [];
  let attempts = 0;
  let running = false;

  function renderOutput() {
    result.textContent = output.length ? output.join("\n") : initialMessage;
  }

  function startProgram() {
    output.length = 0;
    attempts = 0;
    running = true;
    input.disabled = false;
    input.value = "";
    input.placeholder = "Skriv lösenord";
    button.textContent = "Skicka svar";
    output.push(prompt);
    renderOutput();
    input.focus();
  }

  function finishProgram() {
    output.push("Access granted.");
    output.push("Loopen avslutades efter " + attempts + " försök.");
    running = false;
    input.disabled = true;
    input.value = "";
    input.placeholder = "Programmet är klart";
    button.textContent = "Kör igen";
    renderOutput();
  }

  function submitPassword() {
    if (!running) {
      startProgram();
      return;
    }

    const password = input.value.trim();
    attempts += 1;
    output[output.length - 1] = prompt + password;

    if (password === "secret") {
      finishProgram();
      return;
    }

    output.push(prompt);
    input.value = "";
    input.placeholder = "Försök igen";
    renderOutput();
    input.focus();
  }

  button.addEventListener("click", submitPassword);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitPassword();
    }
  });
}

function runChapterOneMenuExercise(exercise) {
  const choiceInput = exercise.querySelector(".exercise-select");
  const amountInput = exercise.querySelector(".exercise-amount-input");
  const button = exercise.querySelector(".exercise-run");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!choiceInput || !amountInput || !button || !resetButton || !result) return;

  let balance = 500;
  let stopped = false;
  const history = [];

  function printMenu() {
    history.push("1. Visa saldo");
    history.push("2. Sätt in pengar");
    history.push("3. Ta ut pengar");
    history.push("4. Avsluta");
  }

  function renderHistory() {
    result.textContent = history.join("\n");
  }

  function resetMenu() {
    balance = 500;
    stopped = false;
    history.length = 0;
    printMenu();
    history.push("Välj ett alternativ och tryck på Kör val.");
    button.disabled = false;
    choiceInput.disabled = false;
    updateAmountInputState();
    renderHistory();
  }

  function updateAmountInputState() {
    amountInput.disabled =
      stopped || (choiceInput.value !== "2" && choiceInput.value !== "3");
  }

  choiceInput.addEventListener("change", updateAmountInputState);

  button.addEventListener("click", () => {
    if (stopped) return;

    const choice = choiceInput.value;
    const rawAmount = amountInput.value.trim();
    const amount = Number.parseInt(rawAmount, 10);
    const validAmount =
      Number.isInteger(amount) && String(amount) === rawAmount && amount > 0;

    if (history.length > 0) {
      history.push("");
    }

    printMenu();
    history.push("Välj alternativ: " + choice);

    if (choice === "1") {
      history.push("Saldo: " + balance + " kr");
    } else if (choice === "2") {
      history.push("Belopp: " + rawAmount);
      if (!validAmount) {
        history.push("Skriv ett positivt heltal som belopp.");
      } else {
        balance += amount;
        history.push("Du satte in " + amount + " kr.");
      }
    } else if (choice === "3") {
      history.push("Belopp: " + rawAmount);
      if (!validAmount) {
        history.push("Skriv ett positivt heltal som belopp.");
      } else {
        balance -= amount;
        history.push("Du tog ut " + amount + " kr.");
      }
    } else if (choice === "4") {
      history.push("Programmet avslutas med break.");
      stopped = true;
      button.disabled = true;
      choiceInput.disabled = true;
      updateAmountInputState();
    } else {
      history.push("Ogiltigt val.");
    }

    renderHistory();
  });

  resetButton.addEventListener("click", resetMenu);
  resetMenu();
}

function runChapterOneChoiceProgramExercise(exercise) {
  const choiceInput = exercise.querySelector(".exercise-select");
  const nameInput = exercise.querySelector(".exercise-text-input");
  const ageInput = exercise.querySelector(".exercise-number-input");
  const button = exercise.querySelector(".exercise-run");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!choiceInput || !nameInput || !ageInput || !button || !resetButton || !result) {
    return;
  }

  let storedName = null;
  let storedAge = null;
  let stopped = false;
  const history = [];
  const currentYear = new Date().getFullYear();

  function printMenu() {
    history.push("1. Ange namn och ålder");
    history.push("2. Beräkna när du fyller 100 år");
    history.push("3. Avsluta");
  }

  function renderHistory() {
    result.textContent = history.join("\n");
  }

  function resetProgram() {
    storedName = null;
    storedAge = null;
    stopped = false;
    history.length = 0;
    printMenu();
    history.push("Välj ett alternativ och tryck på Kör val.");
    button.disabled = false;
    choiceInput.disabled = false;
    nameInput.disabled = false;
    ageInput.disabled = false;
    renderHistory();
  }

  button.addEventListener("click", () => {
    if (stopped) return;

    const choice = choiceInput.value;

    if (history.length > 0) {
      history.push("");
    }

    printMenu();
    history.push("Välj ett alternativ: " + choice);

    if (choice === "1") {
      const age = Number.parseInt(ageInput.value, 10);

      if (!nameInput.value.trim()) {
        history.push("Namn saknas. Skriv ett namn innan du kör valet.");
      } else if (!Number.isInteger(age) || age < 0) {
        history.push("Ålder måste vara ett heltal som är 0 eller större.");
      } else {
        storedName = nameInput.value.trim();
        storedAge = age;
        history.push("Vad heter du? " + storedName);
        history.push("Hur gammal är du? " + storedAge);
        history.push("Sparat: " + storedName + ", " + storedAge + " år.");
      }
    } else if (choice === "2") {
      if (storedName === null || storedAge === null) {
        history.push("Du måste först ange namn och ålder.");
      } else {
        const hundredYear = currentYear + (100 - storedAge);
        history.push(storedName + ", du fyller 100 år år " + hundredYear + ".");
      }
    } else if (choice === "3") {
      history.push("Programmet avslutas med break.");
      stopped = true;
      button.disabled = true;
      choiceInput.disabled = true;
      nameInput.disabled = true;
      ageInput.disabled = true;
    } else {
      history.push("Ogiltigt val.");
    }

    renderHistory();
  });

  resetButton.addEventListener("click", resetProgram);
  resetProgram();
}

function formatPythonList(items) {
  return "[" + items.map((item) => "'" + item + "'").join(", ") + "]";
}

function runChapterTwoListEditorExercise(exercise) {
  const operationInput = exercise.querySelector(".exercise-select");
  const valueInput = exercise.querySelector(".exercise-text-input");
  const button = exercise.querySelector(".exercise-run");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!operationInput || !valueInput || !button || !resetButton || !result) {
    return;
  }

  let fruits = [];
  const history = [];

  function renderList() {
    result.textContent = history.join("\n");
  }

  function resetList() {
    fruits = ["apple", "banana", "cherry"];
    history.length = 0;
    history.push("fruits = " + formatPythonList(fruits));
    renderList();
  }

  button.addEventListener("click", () => {
    const operation = operationInput.value;
    const value = valueInput.value.trim();

    if (!value) {
      history.push("Skriv ett värde innan du kör valet.");
      renderList();
      return;
    }

    if (operation === "append") {
      fruits.push(value);
      history.push('fruits.append("' + value + '")');
    } else if (operation === "insert") {
      fruits.splice(1, 0, value);
      history.push('fruits.insert(1, "' + value + '")');
    } else if (operation === "remove") {
      const index = fruits.indexOf(value);
      history.push('fruits.remove("' + value + '")');

      if (index === -1) {
        history.push("ValueError: list.remove(x): x not in list");
        renderList();
        return;
      }

      fruits.splice(index, 1);
    }

    history.push("fruits = " + formatPythonList(fruits));
    renderList();
  });

  resetButton.addEventListener("click", resetList);
  resetList();
}

function runChapterTwoListIterationExercise(exercise) {
  const input = exercise.querySelector(".exercise-input");
  const button = exercise.querySelector(".exercise-run");
  const result = exercise.querySelector(".exercise-result");

  if (!input || !button || !result) return;

  button.addEventListener("click", () => {
    const items = input.value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (items.length === 0) {
      result.textContent = "Listan är tom. Skriv minst ett värde.";
      return;
    }

    const output = ["fruits = " + formatPythonList(items)];

    items.forEach((item) => {
      output.push("I like " + item);
    });

    result.textContent = output.join("\n");
  });
}

function parseCommaList(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function runChapterTwoLinearSearchExercise(exercise) {
  const listInput = exercise.querySelector(".exercise-text-input");
  const targetInput = exercise.querySelector(".exercise-search-input");
  const button = exercise.querySelector(".exercise-run");
  const result = exercise.querySelector(".exercise-result");

  if (!listInput || !targetInput || !button || !result) return;

  button.addEventListener("click", () => {
    const names = parseCommaList(listInput.value);
    const target = targetInput.value.trim();

    if (names.length === 0 || !target) {
      result.textContent = "Skriv både en lista och ett sökvärde.";
      return;
    }

    const output = ["names = " + formatPythonList(names)];
    let foundIndex = -1;

    for (let i = 0; i < names.length; i += 1) {
      output.push(
        "Jämför index " + i + ": " + names[i] + " == " + target + "?",
      );

      if (names[i] === target) {
        foundIndex = i;
        output.push("Träff. return " + i);
        break;
      }
    }

    if (foundIndex === -1) {
      output.push("Ingen träff. return -1");
    }

    output.push("Resultat: " + foundIndex);
    result.textContent = output.join("\n");
  });
}

function runChapterTwoBubbleSortExercise(exercise) {
  const input = exercise.querySelector(".exercise-input");
  const button = exercise.querySelector(".exercise-run");
  const result = exercise.querySelector(".exercise-result");

  if (!input || !button || !result) return;

  button.addEventListener("click", () => {
    const rawItems = parseCommaList(input.value);
    const numbers = rawItems.map((item) => Number.parseFloat(item));

    if (numbers.length === 0 || numbers.some((number) => Number.isNaN(number))) {
      result.textContent = "Skriv en lista med tal separerade med kommatecken.";
      return;
    }

    const output = ["Start: [" + numbers.join(", ") + "]"];

    for (let i = 0; i < numbers.length; i += 1) {
      output.push("Yttre varv " + (i + 1));

      for (let j = 0; j < numbers.length - i - 1; j += 1) {
        output.push("Jämför " + numbers[j] + " och " + numbers[j + 1]);

        if (numbers[j] > numbers[j + 1]) {
          const temp = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = temp;
          output.push("Byt plats: [" + numbers.join(", ") + "]");
        }
      }
    }

    output.push("Sorterat: [" + numbers.join(", ") + "]");
    result.textContent = output.join("\n");
  });
}

function sortMixedItems(items) {
  const numbers = items.map((item) => Number.parseFloat(item));

  if (numbers.every((number) => !Number.isNaN(number))) {
    return numbers.sort((a, b) => a - b);
  }

  return items.slice().sort((a, b) => a.localeCompare(b, "sv"));
}

function runChapterTwoBuiltInSortExercise(exercise) {
  const input = exercise.querySelector(".exercise-text-input");
  const methodInput = exercise.querySelector(".exercise-select");
  const button = exercise.querySelector(".exercise-run");
  const result = exercise.querySelector(".exercise-result");

  if (!input || !methodInput || !button || !result) return;

  button.addEventListener("click", () => {
    const original = parseCommaList(input.value);

    if (original.length === 0) {
      result.textContent = "Skriv minst ett värde att sortera.";
      return;
    }

    const method = methodInput.value;
    const output = ["Original före sortering: " + formatPythonList(original)];

    if (method === "sorted") {
      const sortedItems = sortMixedItems(original);
      output.push("sorted_list = sorted(original)");
      output.push("Original efter sorted(): " + formatPythonList(original));
      output.push("Ny sorterad lista: " + formatPythonList(sortedItems));
    } else {
      const changedOriginal = sortMixedItems(original);
      output.push("original.sort()");
      output.push("Original efter sort(): " + formatPythonList(changedOriginal));
    }

    result.textContent = output.join("\n");
  });
}

function formatPythonDict(data) {
  const lines = Object.entries(data).map(([key, value]) => {
    const formattedValue = typeof value === "number" ? value : "'" + value + "'";
    return "    '" + key + "': " + formattedValue;
  });

  return "person = {\n" + lines.join(",\n") + "\n}";
}

function parseDictionaryValue(value) {
  const number = Number.parseFloat(value);
  return value.trim() !== "" && !Number.isNaN(number) && String(number) === value
    ? number
    : value;
}

function runChapterTwoDictionaryExercise(exercise) {
  const operationInput = exercise.querySelector(".exercise-select");
  const keyInput = exercise.querySelector(".exercise-key-input");
  const valueInput = exercise.querySelector(".exercise-value-input");
  const button = exercise.querySelector(".exercise-run");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!operationInput || !keyInput || !valueInput || !button || !resetButton || !result) {
    return;
  }

  let person = {};
  const history = [];

  function syncDictionaryInputs() {
    const shouldDisableFields = operationInput.value === "loop";
    keyInput.disabled = shouldDisableFields;
    valueInput.disabled = shouldDisableFields;
  }

  function renderDictionary() {
    result.textContent = history.join("\n");
  }

  function resetDictionary() {
    person = {
      name: "Anna",
      age: 25,
      city: "Stockholm",
    };
    history.length = 0;
    history.push(formatPythonDict(person));
    renderDictionary();
  }

  button.addEventListener("click", () => {
    const operation = operationInput.value;
    const key = keyInput.value.trim();
    const value = parseDictionaryValue(valueInput.value.trim());

    if ((operation === "get" || operation === "set" || operation === "delete") && !key) {
      history.push("Skriv en nyckel först.");
      renderDictionary();
      return;
    }

    if (operation === "get") {
      history.push('print(person["' + key + '"])');

      if (Object.prototype.hasOwnProperty.call(person, key)) {
        history.push(String(person[key]));
      } else {
        history.push("KeyError: '" + key + "'");
      }
    } else if (operation === "set") {
      person[key] = value;
      history.push('person["' + key + '"] = ' + JSON.stringify(value));
      history.push(formatPythonDict(person));
    } else if (operation === "delete") {
      history.push('del person["' + key + '"]');

      if (Object.prototype.hasOwnProperty.call(person, key)) {
        delete person[key];
        history.push(formatPythonDict(person));
      } else {
        history.push("KeyError: '" + key + "'");
      }
    } else if (operation === "loop") {
      history.push("for key, value in person.items():");
      Object.entries(person).forEach(([dictKey, dictValue]) => {
        history.push(dictKey + ": " + dictValue);
      });
    }

    renderDictionary();
  });

  operationInput.addEventListener("change", syncDictionaryInputs);
  resetButton.addEventListener("click", resetDictionary);
  resetDictionary();
  syncDictionaryInputs();
}

function formatPythonTuple(items) {
  return "(" + items.join(", ") + ")";
}

function runChapterTwoTupleExercise(exercise) {
  const operationInput = exercise.querySelector(".exercise-select");
  const indexInput = exercise.querySelector(".exercise-number-input");
  const valueInput = exercise.querySelector(".exercise-value-input");
  const button = exercise.querySelector(".exercise-run");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!operationInput || !indexInput || !valueInput || !button || !resetButton || !result) {
    return;
  }

  const coordinates = [10, 20];
  const history = [];

  function syncTupleInputs() {
    const operation = operationInput.value;
    indexInput.disabled = operation === "unpack";
    valueInput.disabled = operation === "read" || operation === "unpack";
  }

  function renderTuple() {
    result.textContent = history.join("\n");
  }

  function resetTuple() {
    history.length = 0;
    history.push("coordinates = " + formatPythonTuple(coordinates));
    renderTuple();
  }

  button.addEventListener("click", () => {
    if (operationInput.value === "unpack") {
      const [x, y] = coordinates;
      history.push("x, y = coordinates");
      history.push("x = " + x);
      history.push("y = " + y);
      renderTuple();
      return;
    }

    const index = Number.parseInt(indexInput.value, 10);
    if (!Number.isInteger(index) || index < 0 || index >= coordinates.length) {
      history.push("IndexError: tuple index out of range");
      renderTuple();
      return;
    }

    if (operationInput.value === "read") {
      history.push("print(coordinates[" + index + "])");
      history.push(String(coordinates[index]));
    } else {
      history.push("coordinates[" + index + "] = " + valueInput.value);
      history.push("TypeError: 'tuple' object does not support item assignment");
      history.push("coordinates är fortfarande " + formatPythonTuple(coordinates));
    }

    renderTuple();
  });

  operationInput.addEventListener("change", syncTupleInputs);
  resetButton.addEventListener("click", resetTuple);
  resetTuple();
  syncTupleInputs();
}

function formatScoreTuples(scores) {
  return "[" + scores.map((score) => "('" + score.name + "', " + score.points + ")").join(", ") + "]";
}

function parseScoreInput(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => {
      const [name, points] = item.split(":").map((part) => part.trim());
      return { name, points: Number.parseInt(points, 10), raw: item };
    });
}

function runChapterTwoLambdaSortExercise(exercise) {
  const input = exercise.querySelector(".exercise-text-input");
  const sortInput = exercise.querySelector(".exercise-select");
  const button = exercise.querySelector(".exercise-run");
  const result = exercise.querySelector(".exercise-result");

  if (!input || !sortInput || !button || !result) return;

  button.addEventListener("click", () => {
    const scores = parseScoreInput(input.value);
    const invalid = scores.find((score) => {
      return !score.name || !Number.isInteger(score.points);
    });

    if (scores.length === 0 || invalid) {
      result.textContent =
        "Skriv resultat som namn:poäng, till exempel Anna:120, Erik:95.";
      return;
    }

    const output = ["scores = " + formatScoreTuples(scores)];

    if (sortInput.value === "name") {
      const sortedByName = scores
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name, "sv"));
      output.push("key=lambda x: x[0]");
      output.push("Lambda hämtar namnet från varje tuple.");
      output.push("Resultat: " + formatScoreTuples(sortedByName));
    } else {
      const sortedByPoints = scores
        .slice()
        .sort((a, b) => b.points - a.points);
      output.push("key=lambda x: x[1]");
      output.push("Lambda hämtar poängen från varje tuple.");
      output.push("reverse=True gör att högst poäng kommer först.");
      output.push("Resultat: " + formatScoreTuples(sortedByPoints));
    }

    result.textContent = output.join("\n");
  });
}

function runChapterTwoScoreListExercise(exercise) {
  const operationInput = exercise.querySelector(".exercise-select");
  const nameInput = exercise.querySelector(".exercise-text-input");
  const scoreInput = exercise.querySelector(".exercise-score-input");
  const button = exercise.querySelector(".exercise-run");
  const result = exercise.querySelector(".exercise-result");

  if (!operationInput || !nameInput || !scoreInput || !button || !result) return;

  const scores = [];
  const history = ["scores = []"];

  function syncScoreInputs() {
    const shouldDisableFields = operationInput.value !== "add";
    nameInput.disabled = shouldDisableFields;
    scoreInput.disabled = shouldDisableFields;
  }

  function renderScores() {
    result.textContent = history.join("\n");
  }

  button.addEventListener("click", () => {
    const operation = operationInput.value;

    if (operation === "add") {
      const name = nameInput.value.trim();
      const points = Number.parseInt(scoreInput.value, 10);

      history.push("Ange namn: " + name);
      history.push("Ange poäng: " + scoreInput.value.trim());

      if (!name) {
        history.push("Namn saknas.");
      } else if (!Number.isInteger(points) || String(points) !== scoreInput.value.trim()) {
        history.push("Du måste ange ett heltal.");
      } else {
        scores.push({ name, points });
        history.push("scores.append(('" + name + "', " + points + "))");
        history.push("scores = " + formatScoreTuples(scores));
      }
    } else if (operation === "show") {
      const sortedScores = scores.slice().sort((a, b) => b.points - a.points);
      history.push("scores.sort(key=lambda x: x[1], reverse=True)");
      history.push("");
      history.push("Topplista:");

      if (sortedScores.length === 0) {
        history.push("Listan är tom.");
      } else {
        sortedScores.forEach((score) => {
          history.push(score.name + ": " + score.points);
        });
      }
    } else if (operation === "reset") {
      scores.length = 0;
      history.length = 0;
      history.push("scores = []");
    }

    renderScores();
  });

  operationInput.addEventListener("change", syncScoreInputs);
  syncScoreInputs();
}

function formatLibraryCatalog(catalog) {
  if (catalog.length === 0) return "catalog = []";

  const lines = catalog.map((book) => {
    return (
      '    {"title": "' +
      book.title +
      '", "author": "' +
      book.author +
      '", "year": "' +
      book.year +
      '"}'
    );
  });

  return "catalog = [\n" + lines.join(",\n") + "\n]";
}

function formatLibraryBook(book) {
  return book.title + " av " + book.author + " (" + book.year + ")";
}

function runChapterThreeBookObjectsExercise(exercise) {
  const objectInput = exercise.querySelector(".exercise-select");
  const titleInput = exercise.querySelector(".exercise-title-input");
  const authorInput = exercise.querySelector(".exercise-author-input");
  const createButton = exercise.querySelector('[data-action="create"]');
  const printButton = exercise.querySelector('[data-action="print"]');
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!objectInput || !titleInput || !authorInput || !createButton || !printButton || !resetButton || !result) {
    return;
  }

  const books = {};
  const history = [];
  const starterBooks = {
    bok1: {
      titel: "Project Hail Mary",
      forfattare: "Andy Weir",
    },
    bok2: {
      titel: "Surely You're Joking, Mr. Feynman!",
      forfattare: "Richard P. Feynman",
    },
  };

  function renderBooks() {
    const rows = Object.keys(books).map((name) => {
      const book = books[name];
      return (
        name +
        ' = Bok("' +
        book.titel +
        '", "' +
        book.forfattare +
        '")'
      );
    });

    result.textContent = history.concat(rows.length ? ["", "Objekt just nu:", ...rows] : []).join("\n");
  }

  function resetExercise() {
    Object.keys(books).forEach((name) => {
      delete books[name];
    });
    history.length = 0;
    history.push("Klassen Bok är laddad.");
    history.push("Inga objekt är skapade än.");
    history.push('Nästa steg: kör till exempel bok1 = Bok("Project Hail Mary", "Andy Weir").');
    titleInput.value = starterBooks.bok1.titel;
    authorInput.value = starterBooks.bok1.forfattare;
    renderBooks();
  }

  createButton.addEventListener("click", () => {
    const objectName = objectInput.value;
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (!title || !author) {
      history.push("Fyll i både titel och författare innan du skapar objektet.");
      renderBooks();
      return;
    }

    books[objectName] = {
      titel: title,
      forfattare: author,
    };

    history.push("");
    history.push(objectName + ' = Bok("' + title + '", "' + author + '")');
    history.push("self.titel = " + title);
    history.push("self.forfattare = " + author);
    renderBooks();
  });

  printButton.addEventListener("click", () => {
    const objectName = objectInput.value;
    const book = books[objectName];

    history.push("");
    history.push(objectName + ".skriv_ut_info()");

    if (!book) {
      history.push(objectName + " finns inte än. Skapa objektet först.");
    } else {
      history.push(book.titel + " av " + book.forfattare);
    }

    renderBooks();
  });

  objectInput.addEventListener("change", () => {
    const objectName = objectInput.value;
    const selectedBook = books[objectName] || starterBooks[objectName];
    if (selectedBook) {
      titleInput.value = selectedBook.titel;
      authorInput.value = selectedBook.forfattare;
    }
  });

  resetButton.addEventListener("click", resetExercise);
  resetExercise();
}

function runChapterThreePersonClassExercise(exercise) {
  const code = exercise.querySelector(".exercise-code");
  const nameInput = exercise.querySelector(".exercise-text-input");
  const ageInput = exercise.querySelector(".exercise-number-input");
  const createButton = exercise.querySelector('[data-action="create"]');
  const helloButton = exercise.querySelector('[data-action="hello"]');
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!code || !nameInput || !ageInput || !createButton || !helloButton || !resetButton || !result) {
    return;
  }

  let person = null;
  const history = [];

  function render() {
    result.textContent = history.join("\n");
  }

  function resetExercise() {
    person = null;
    nameInput.value = "Anna";
    ageInput.value = "17";
    history.length = 0;
    history.push("Klassen Person är definierad.");
    history.push("Inget objekt är skapat än.");
    history.push('Nästa steg: person1 = Person("Anna", 17)');
    render();
  }

  createButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const age = Number.parseInt(ageInput.value, 10);

    history.push("");

    if (!name) {
      history.push("Skriv ett namn innan du skapar objektet.");
      render();
      return;
    }

    if (!Number.isInteger(age) || age < 0) {
      history.push("Ålder måste vara ett heltal som är 0 eller större.");
      render();
      return;
    }

    person = { name, age };
    history.push('person1 = Person("' + name + '", ' + age + ")");
    history.push("__init__ körs:");
    history.push("self.name = " + name);
    history.push("self.age = " + age);
    render();
  });

  helloButton.addEventListener("click", () => {
    history.push("");
    history.push("person1.say_hello()");

    if (!person) {
      history.push("person1 finns inte än. Skapa objektet först.");
    } else if (!code.value.includes("say_hello")) {
      history.push("Metoden say_hello() saknas i koden.");
    } else {
      history.push("Hej, jag heter " + person.name + " och är " + person.age + " år.");
    }

    render();
  });

  resetButton.addEventListener("click", resetExercise);
  resetExercise();
}

function runChapterThreeCarConstructorExercise(exercise) {
  const code = exercise.querySelector(".exercise-code");
  const brandInput = exercise.querySelector(".exercise-text-input");
  const yearInput = exercise.querySelector(".exercise-number-input");
  const carInput = exercise.querySelector("#chapter-3-3-car");
  const createButton = exercise.querySelector('[data-action="create"]');
  const honkButton = exercise.querySelector('[data-action="honk"]');
  const changeButton = exercise.querySelector('[data-action="change"]');
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!code || !brandInput || !yearInput || !carInput || !createButton || !honkButton || !changeButton || !resetButton || !result) {
    return;
  }

  const cars = [];
  const history = [];
  let preferredCarName = "";

  function selectedCar() {
    return cars.find((car) => car.name === carInput.value) || null;
  }

  function syncCarSelect() {
    const previousValue = preferredCarName || carInput.value;
    carInput.innerHTML = "";

    if (cars.length === 0) {
      const option = document.createElement("option");
      option.value = "";
      option.textContent = "Ingen bil skapad än";
      carInput.appendChild(option);
      return;
    }

    cars.forEach((car) => {
      const option = document.createElement("option");
      option.value = car.name;
      option.textContent = car.name + " - " + car.brand + " (" + car.year + ")";
      carInput.appendChild(option);
    });

    if (cars.some((car) => car.name === previousValue)) {
      carInput.value = previousValue;
    } else {
      carInput.value = cars[cars.length - 1].name;
    }

    preferredCarName = "";
  }

  function render() {
    syncCarSelect();
    const rows = cars.map((car) => {
      return car.name + ' = Car("' + car.brand + '", ' + car.year + ")";
    });

    result.textContent = history.concat(rows.length ? ["", "Objekt just nu:", ...rows] : []).join("\n");
  }

  function resetExercise() {
    cars.length = 0;
    preferredCarName = "";
    brandInput.value = "Volvo";
    yearInput.value = "2020";
    history.length = 0;
    history.push("Klassen Car är definierad.");
    history.push("Inget objekt är skapat än.");
    history.push('Nästa steg: car1 = Car("Volvo", 2020)');
    render();
  }

  createButton.addEventListener("click", () => {
    const brand = brandInput.value.trim();
    const year = Number.parseInt(yearInput.value, 10);

    history.push("");

    if (!brand) {
      history.push("Skriv ett bilmärke innan du skapar objektet.");
      render();
      return;
    }

    if (!Number.isInteger(year)) {
      history.push("År måste vara ett heltal.");
      render();
      return;
    }

    const objectName = "car" + (cars.length + 1);
    const car = { name: objectName, brand, year };
    cars.push(car);
    preferredCarName = objectName;

    history.push(objectName + ' = Car("' + brand + '", ' + year + ")");
    history.push("__init__ körs automatiskt:");
    history.push("self.brand = " + brand);
    history.push("self.year = " + year);
    render();
  });

  honkButton.addEventListener("click", () => {
    const activeCar = selectedCar();
    history.push("");

    if (!activeCar) {
      history.push("Det finns ingen bil än. Skapa ett objekt först.");
    } else if (!code.value.includes("honk")) {
      history.push(activeCar.name + ".honk()");
      history.push("Metoden honk() saknas i koden.");
    } else {
      history.push(activeCar.name + ".honk()");
      history.push(activeCar.brand + " från " + activeCar.year + " tutar!");
    }

    render();
  });

  changeButton.addEventListener("click", () => {
    const activeCar = selectedCar();
    const year = Number.parseInt(yearInput.value, 10);

    history.push("");

    if (!activeCar) {
      history.push("Det finns ingen bil än. Skapa ett objekt först.");
      render();
      return;
    }

    if (!code.value.includes("change_year")) {
      history.push(activeCar.name + ".change_year(" + yearInput.value + ")");
      history.push("Metoden change_year() saknas i koden.");
      render();
      return;
    }

    if (!Number.isInteger(year)) {
      history.push("År måste vara ett heltal.");
      render();
      return;
    }

    history.push(activeCar.name + ".change_year(" + year + ")");

    if (year > 0) {
      history.push("new_year är större än 0.");
      history.push("self.year = " + year);
      activeCar.year = year;
    } else {
      history.push("Årtalet måste vara större än 0.");
    }

    render();
  });

  resetButton.addEventListener("click", resetExercise);
  resetExercise();
}

function runChapterThreeBankAccountExercise(exercise) {
  const accountInput = exercise.querySelector("#chapter-3-4-account");
  const ownerInput = exercise.querySelector(".exercise-text-input");
  const balanceInput = exercise.querySelector("#chapter-3-4-balance");
  const actionInput = exercise.querySelector("#chapter-3-4-action");
  const amountInput = exercise.querySelector("#chapter-3-4-amount");
  const button = exercise.querySelector(".exercise-run");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!accountInput || !ownerInput || !balanceInput || !actionInput || !amountInput || !button || !resetButton || !result) {
    return;
  }

  const accounts = {
    account1: null,
    account2: null,
  };
  const starterAccounts = {
    account1: { owner: "Emma", balance: 1000 },
    account2: { owner: "Pelle", balance: 500 },
  };
  const history = [];

  function selectedAccountName() {
    return accountInput.value;
  }

  function selectedAccount() {
    return accounts[selectedAccountName()];
  }

  function render() {
    const stateRows = ["", "Objekt just nu:"].concat(
      Object.keys(accounts).map((name) => {
        const account = accounts[name];
        const selectedLabel = name === selectedAccountName() ? "  <- valt konto" : "";

        if (!account) {
          return name + " är inte skapat" + selectedLabel;
        }

        return (
          name +
          ' = BankAccount("' +
          account.owner +
          '", ' +
          account.startBalance +
          "), _balance = " +
          account.balance +
          selectedLabel
        );
      }),
    );

    result.textContent = history.concat(stateRows).join("\n");
  }

  function parseAmount(input) {
    const value = Number.parseFloat(input.value);
    return Number.isFinite(value) ? value : null;
  }

  function syncSelectedAccountInputs() {
    const account = selectedAccount() || starterAccounts[selectedAccountName()];
    ownerInput.value = account.owner;
    balanceInput.value = String(account.balance);
  }

  function resetExercise() {
    accounts.account1 = null;
    accounts.account2 = null;
    accountInput.value = "account1";
    syncSelectedAccountInputs();
    amountInput.value = "500";
    actionInput.value = "create";
    amountInput.disabled = true;
    history.length = 0;
    history.push("Klassen BankAccount är definierad.");
    history.push("Inget konto är skapat än.");
    history.push('Nästa steg: account1 = BankAccount("Emma", 1000)');
    render();
  }

  button.addEventListener("click", () => {
    const action = actionInput.value;
    history.push("");

    if (action === "create") {
      const objectName = selectedAccountName();
      const owner = ownerInput.value.trim();
      const balance = parseAmount(balanceInput);

      if (accounts[objectName]) {
        history.push(objectName + " är redan skapat. Välj det andra kontot eller tryck på Återställ.");
      } else if (!owner) {
        history.push("Skriv en ägare innan du skapar kontot.");
      } else if (balance === null) {
        history.push("Startsaldo måste vara ett tal.");
      } else {
        const account = { name: objectName, owner, startBalance: balance, balance };
        accounts[objectName] = account;
        history.push(objectName + ' = BankAccount("' + owner + '", ' + balance + ")");
        history.push("__init__ körs:");
        history.push("self.owner = " + owner);
        history.push("self._balance = " + balance);
      }

      render();
      return;
    }

    const account = selectedAccount();

    if (!account) {
      history.push(selectedAccountName() + " finns inte än. Skapa valt konto först.");
      render();
      return;
    }

    if (action === "deposit") {
      const amount = parseAmount(amountInput);
      history.push(account.name + ".deposit(" + amountInput.value + ")");

      if (amount === null) {
        history.push("Beloppet måste vara ett tal.");
      } else if (amount > 0) {
        account.balance += amount;
        history.push("amount > 0 är True, så _balance ökar.");
      } else {
        history.push("amount > 0 är False, så _balance ändras inte.");
      }
    } else if (action === "withdraw") {
      const amount = parseAmount(amountInput);
      history.push(account.name + ".withdraw(" + amountInput.value + ")");

      if (amount === null) {
        history.push("Beloppet måste vara ett tal.");
      } else if (amount > 0 && amount <= account.balance) {
        account.balance -= amount;
        history.push("0 < amount <= self._balance är True, så _balance minskar.");
      } else {
        history.push("Uttaget stoppas eftersom beloppet är ogiltigt eller för högt.");
      }
    } else if (action === "balance") {
      history.push(account.name + ".get_balance()");
      history.push(String(account.balance));
    }

    render();
  });

  accountInput.addEventListener("change", () => {
    syncSelectedAccountInputs();
    history.push("");
    history.push("Valt konto: " + selectedAccountName());
    render();
  });

  actionInput.addEventListener("change", () => {
    amountInput.disabled = actionInput.value === "create" || actionInput.value === "balance";
  });

  resetButton.addEventListener("click", resetExercise);
  resetExercise();
}

function runChapterThreeInheritancePolymorphismExercise(exercise) {
  const modeInput = exercise.querySelector(".exercise-select");
  const button = exercise.querySelector(".exercise-run");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!modeInput || !button || !resetButton || !result) {
    return;
  }

  const messages = {
    Animal: "Djuret låter.",
    Dog: "Hunden säger voff.",
    Cat: "Katten säger mjau.",
    Bird: "Fågeln kvittrar.",
  };

  function runSpeak(className) {
    return messages[className] || messages.Animal;
  }

  function resetExercise() {
    modeInput.value = "single";
    result.textContent = "Välj ett exempel och tryck på Kör exempel.";
  }

  button.addEventListener("click", () => {
    const mode = modeInput.value;
    const output = [];

    if (mode === "single") {
      output.push("animal = Animal()");
      output.push("dog = Dog()");
      output.push("");
      output.push("animal.speak()");
      output.push(runSpeak("Animal"));
      output.push("");
      output.push("dog.speak()");
      output.push(runSpeak("Dog"));
      output.push("");
      output.push("Dog ärver från Animal men skriver om speak(). Det kallas override.");
    } else if (mode === "mixed") {
      const animals = ["Dog", "Animal"];
      output.push("animals = [Dog(), Animal()]");
      output.push("");
      animals.forEach((className, index) => {
        output.push("Varv " + (index + 1) + ": animal är " + className);
        output.push("animal.speak()");
        output.push(runSpeak(className));
      });
      output.push("");
      output.push("Samma metodanrop används, men olika klass ger olika utskrift.");
    } else if (mode === "subclasses") {
      const animals = ["Dog", "Cat", "Bird"];
      output.push("animals = [Dog(), Cat(), Bird()]");
      output.push("");
      animals.forEach((className, index) => {
        output.push("Varv " + (index + 1) + ": animal är " + className);
        output.push("animal.speak()");
        output.push(runSpeak(className));
      });
      output.push("");
      output.push("Alla tre är subklasser till Animal och har egen speak().");
    }

    result.textContent = output.join("\n");
  });

  resetButton.addEventListener("click", resetExercise);
  resetExercise();
}

function runChapterThreeGenericsExercise(exercise) {
  const modeInput = exercise.querySelector(".exercise-select");
  const button = exercise.querySelector(".exercise-run");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!modeInput || !button || !resetButton || !result) {
    return;
  }

  function resetExercise() {
    modeInput.value = "first";
    result.textContent = "Välj ett exempel och tryck på Kör exempel.";
  }

  button.addEventListener("click", () => {
    const output = [];

    if (modeInput.value === "first") {
      const names = ["Adam", "Bo", "Cia"];
      const scores = [10, 20, 30];

      output.push('name = first(["Adam", "Bo", "Cia"])');
      output.push("T blir str eftersom listan innehåller strängar.");
      output.push("print(name)");
      output.push(names[0]);
      output.push("");
      output.push("score = first([10, 20, 30])");
      output.push("T blir int eftersom listan innehåller heltal.");
      output.push("print(score)");
      output.push(String(scores[0]));
    } else if (modeInput.value === "contains") {
      const hasAdam = ["Adam", "Bo"].includes("Adam");
      const hasThree = [1, 2, 3].includes(3);

      output.push('contains_value("Adam", ["Adam", "Bo"])');
      output.push("value och listans innehåll är båda str.");
      output.push(String(hasAdam));
      output.push("");
      output.push("contains_value(3, [1, 2, 3])");
      output.push("value och listans innehåll är båda int.");
      output.push(String(hasThree));
    } else if (modeInput.value === "register") {
      const register = [];
      const book = { title: "Python" };
      register.push(book);
      const firstBook = register[0];

      output.push("book_register = Register[Book]()");
      output.push('book_register.add(Book("Python"))');
      output.push("first_book = book_register.all_items()[0]");
      output.push("print(first_book.title)");
      output.push(firstBook.title);
      output.push("");
      output.push("Register[Book] visar att registret är tänkt att lagra Book-objekt.");
    }

    result.textContent = output.join("\n");
  });

  resetButton.addEventListener("click", resetExercise);
  resetExercise();
}

function runChapterFourFileWritingExercise(exercise) {
  const modeInput = exercise.querySelector(".exercise-select");
  const textInput = exercise.querySelector(".exercise-text-input");
  const button = exercise.querySelector(".exercise-run");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!modeInput || !textInput || !button || !resetButton || !result) {
    return;
  }

  let fileContent = "";
  const history = [];

  function render() {
    const content = fileContent || "(tom fil)";
    result.textContent = history.concat(["", "Innehåll i exempel.txt:", content]).join("\n");
  }

  function resetExercise() {
    fileContent = "";
    modeInput.value = "w";
    textInput.value = "Hej filvärlden!";
    textInput.disabled = false;
    history.length = 0;
    history.push("Filen exempel.txt är tom.");
    render();
  }

  button.addEventListener("click", () => {
    const mode = modeInput.value;
    const text = textInput.value;
    history.push("");

    if (mode === "w") {
      fileContent = text;
      history.push('with open("exempel.txt", "w") as fil:');
      history.push("    fil.write(" + JSON.stringify(text) + ")");
      history.push('"w" skriver över hela filen.');
    } else if (mode === "a") {
      fileContent += text;
      history.push('with open("exempel.txt", "a") as fil:');
      history.push("    fil.write(" + JSON.stringify(text) + ")");
      history.push('"a" lägger till text sist i filen.');
    } else if (mode === "r") {
      history.push('with open("exempel.txt", "r") as fil:');
      history.push("    innehåll = fil.read()");
      history.push("print(innehåll)");
      history.push(fileContent || "");
    }

    render();
  });

  modeInput.addEventListener("change", () => {
    textInput.disabled = modeInput.value === "r";
  });

  resetButton.addEventListener("click", resetExercise);
  resetExercise();
}

function runChapterFourExceptionCasesExercise(exercise) {
  const caseInput = exercise.querySelector(".exercise-select");
  const valueInput = exercise.querySelector(".exercise-text-input");
  const button = exercise.querySelector(".exercise-run");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!caseInput || !valueInput || !button || !resetButton || !result) {
    return;
  }

  function syncInput() {
    const isDivision = caseInput.value === "division";
    valueInput.disabled = !isDivision;
    if (!isDivision) {
      valueInput.value = "";
    } else if (!valueInput.value) {
      valueInput.value = "0";
    }
  }

  function resetExercise() {
    caseInput.value = "missing-file";
    valueInput.value = "";
    result.textContent = "Välj ett exempel och tryck på Kör exempel.";
    syncInput();
  }

  button.addEventListener("click", () => {
    const output = [];

    if (caseInput.value === "missing-file") {
      output.push('try:');
      output.push('    with open("saknas.txt", "r") as f:');
      output.push("        innehåll = f.read()");
      output.push("");
      output.push('open("saknas.txt", "r") hittar ingen fil.');
      output.push("Python skapar undantaget FileNotFoundError.");
      output.push("");
      output.push("except FileNotFoundError:");
      output.push("    print(\"Filen hittades inte.\")");
      output.push("");
      output.push("Utskrift:");
      output.push("Filen hittades inte.");
    } else {
      const rawValue = valueInput.value.trim();
      const number = Number.parseInt(rawValue, 10);

      output.push("Skriv ett tal att dividera 10 med: " + rawValue);

      if (!Number.isInteger(number) || String(number) !== rawValue) {
        output.push("");
        output.push("int(...) kan inte göra om inmatningen till ett heltal.");
        output.push("Det skulle ge ValueError.");
        output.push("Obs: kodexemplet fångar bara ZeroDivisionError.");
      } else if (number === 0) {
        output.push("tal = 0");
        output.push("resultat = 10 / tal");
        output.push("");
        output.push("Division med noll skapar undantaget ZeroDivisionError.");
        output.push("");
        output.push("except ZeroDivisionError:");
        output.push("    print(\"Du kan inte dividera med noll!\")");
        output.push("");
        output.push("Utskrift:");
        output.push("Du kan inte dividera med noll!");
      } else {
        output.push("tal = " + number);
        output.push("resultat = 10 / tal");
        output.push("Utskrift:");
        output.push("Resultatet blir " + 10 / number);
      }
    }

    result.textContent = output.join("\n");
  });

  caseInput.addEventListener("change", syncInput);
  resetButton.addEventListener("click", resetExercise);
  resetExercise();
}

function runChapterThreeModulesImportExercise(exercise) {
  const modeInput = exercise.querySelector(".exercise-select");
  const mainCode = exercise.querySelector("#chapter-3-7-main-code");
  const button = exercise.querySelector(".exercise-run");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!modeInput || !mainCode || !button || !resetButton || !result) {
    return;
  }

  const examples = {
    module: {
      code: 'import verktyg\n\nverktyg.hälsa("Ella")\nprint(verktyg.kvadrat(5))',
      output: [
        "Python laddar filen verktyg.py som modulen verktyg.",
        'verktyg.hälsa("Ella")',
        "Hej, Ella!",
        "verktyg.kvadrat(5)",
        "25",
      ],
    },
    function: {
      code: 'from verktyg import hälsa\n\nhälsa("Leo")',
      output: [
        "Python hämtar bara funktionen hälsa från verktyg.py.",
        'hälsa("Leo")',
        "Hej, Leo!",
        "kvadrat finns inte importerat i detta exempel.",
      ],
    },
    alias: {
      code: 'import verktyg as v\n\nv.hälsa("Tove")',
      output: [
        "Python laddar verktyg.py men ger modulen aliaset v.",
        'v.hälsa("Tove")',
        "Hej, Tove!",
        "v betyder samma modul som verktyg i den här filen.",
      ],
    },
  };

  function syncCode() {
    mainCode.value = examples[modeInput.value].code;
  }

  function resetExercise() {
    modeInput.value = "module";
    syncCode();
    result.textContent = "Välj ett importsätt och tryck på Kör import.";
  }

  button.addEventListener("click", () => {
    syncCode();
    result.textContent = examples[modeInput.value].output.join("\n");
  });

  modeInput.addEventListener("change", syncCode);
  resetButton.addEventListener("click", resetExercise);
  resetExercise();
}

function runChapterFourCodeStyleExercise(exercise) {
  const improvementInput = exercise.querySelector(".exercise-select");
  const button = exercise.querySelector(".exercise-run");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!improvementInput || !button || !resetButton || !result) {
    return;
  }

  const examples = {
    names: {
      note: "Förbättring: variablerna får namn som beskriver vad de betyder.",
      code: `saldo = 0

while True:
    print("1. Visa saldo")
    print("2. Sätt in 100")
    print("3. Avsluta")
    val = input("Val: ")

    if val == "1":
        print(saldo)
    elif val == "2":
        saldo = saldo + 100
    elif val == "3":
        break`,
    },
    function: {
      note: "Förbättring: menyutskriften flyttas till en egen funktion med ett tydligt ansvar.",
      code: `def skriv_ut_meny():
    print("1. Visa saldo")
    print("2. Sätt in 100")
    print("3. Avsluta")

x = 0

while True:
    skriv_ut_meny()
    v = input("Val: ")

    if v == "1":
        print(x)
    elif v == "2":
        x = x + 100
    elif v == "3":
        break`,
    },
    both: {
      note: "Förbättring: koden får både tydliga namn och en separat menyfunktion.",
      code: `def skriv_ut_meny():
    print("1. Visa saldo")
    print("2. Sätt in 100")
    print("3. Avsluta")

saldo = 0

while True:
    skriv_ut_meny()
    val = input("Val: ")

    if val == "1":
        print(saldo)
    elif val == "2":
        saldo += 100
    elif val == "3":
        break`,
    },
  };

  function resetExercise() {
    improvementInput.value = "names";
    result.textContent = "Välj en förbättring och tryck på Visa förbättring.";
  }

  button.addEventListener("click", () => {
    const example = examples[improvementInput.value];
    result.textContent = example.note + "\n\n" + example.code;
  });

  resetButton.addEventListener("click", resetExercise);
  resetExercise();
}

function runChapterFourRecipeCollectionExercise(exercise) {
  const nameInput = exercise.querySelector("#chapter-4-4-name");
  const ingredientsInput = exercise.querySelector("#chapter-4-4-ingredients");
  const actionInput = exercise.querySelector(".exercise-select");
  const button = exercise.querySelector(".exercise-run");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!nameInput || !ingredientsInput || !actionInput || !button || !resetButton || !result) {
    return;
  }

  const fileRows = [];
  const history = [];

  function formatFile() {
    return fileRows.length ? fileRows.join("\n") : "(tom fil)";
  }

  function formatRecipes() {
    if (fileRows.length === 0) {
      return ["Inga recept hittades."];
    }

    const lines = [];
    fileRows.forEach((row) => {
      const parts = row.split("|");
      const recipeName = parts[0] || "";
      const ingredients = parts[1] || "";

      lines.push("");
      lines.push("Recept: " + recipeName);
      lines.push("Ingredienser:");
      ingredients.split(",").forEach((ingredient) => {
        const trimmed = ingredient.trim();
        if (trimmed) {
          lines.push("- " + trimmed);
        }
      });
    });

    return lines;
  }

  function render() {
    result.textContent = history.concat(["", "Innehåll i recept.txt:", formatFile()]).join("\n");
  }

  function resetExercise() {
    fileRows.length = 0;
    history.length = 0;
    nameInput.value = "Pannkakor";
    ingredientsInput.value = "mjölk, ägg, mjöl";
    actionInput.value = "add";
    nameInput.disabled = false;
    ingredientsInput.disabled = false;
    history.push("Den simulerade filen recept.txt är tom.");
    render();
  }

  function syncInputs() {
    const adding = actionInput.value === "add";
    nameInput.disabled = !adding;
    ingredientsInput.disabled = !adding;
  }

  button.addEventListener("click", () => {
    const action = actionInput.value;
    history.push("");

    if (action === "add") {
      const recipeName = nameInput.value.trim();
      const ingredients = ingredientsInput.value.trim();

      if (!recipeName || !ingredients) {
        history.push("Receptnamn och ingredienser måste fyllas i.");
      } else if (recipeName.includes("|") || ingredients.includes("|")) {
        history.push('Tecknet "|" används som avskiljare och kan inte användas i receptet.');
      } else {
        const row = recipeName + "|" + ingredients;
        fileRows.push(row);
        history.push("lägga_till_recept()");
        history.push("meddelande = " + JSON.stringify(row + "\n"));
        history.push("with open(RECEPTFIL, \"a\") as fil:");
        history.push("    fil.write(meddelande)");
        history.push("Recept sparat.");
      }
    } else if (action === "show") {
      history.push("visa_recept()");
      history.push("with open(RECEPTFIL, \"r\") as fil:");
      history.push("    rader = fil.readlines()");
      history.push("Utskrift:");
      history.push(...formatRecipes());
    } else if (action === "clear") {
      fileRows.length = 0;
      history.push("recept.txt tömdes i simuleringen.");
    }

    render();
  });

  actionInput.addEventListener("change", syncInputs);
  resetButton.addEventListener("click", resetExercise);
  resetExercise();
}

function runChapterFourSqliteRecipesExercise(exercise) {
  const nameInput = exercise.querySelector("#chapter-4-5-name");
  const ingredientsInput = exercise.querySelector("#chapter-4-5-ingredients");
  const actionInput = exercise.querySelector(".exercise-select");
  const button = exercise.querySelector(".exercise-run");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!nameInput || !ingredientsInput || !actionInput || !button || !resetButton || !result) {
    return;
  }

  let databaseCreated = false;
  let nextId = 1;
  const rows = [];
  const history = [];

  function formatTable() {
    if (!databaseCreated) {
      return ["Databas: recept.db saknas i simuleringen."];
    }

    if (rows.length === 0) {
      return ["Tabell: recept", "(inga rader)"];
    }

    return ["Tabell: recept", "id | namn | ingredienser"].concat(
      rows.map((row) => row.id + " | " + row.namn + " | " + row.ingredienser),
    );
  }

  function render() {
    result.textContent = history.concat(["", ...formatTable()]).join("\n");
  }

  function resetExercise() {
    databaseCreated = false;
    nextId = 1;
    rows.length = 0;
    history.length = 0;
    nameInput.value = "Pannkakor";
    ingredientsInput.value = "mjölk, mjöl, ägg";
    actionInput.value = "create";
    nameInput.disabled = true;
    ingredientsInput.disabled = true;
    history.push("Databasen recept.db är inte skapad i simuleringen ännu.");
    render();
  }

  function syncInputs() {
    const inserting = actionInput.value === "insert";
    nameInput.disabled = !inserting;
    ingredientsInput.disabled = !inserting;
  }

  button.addEventListener("click", () => {
    const action = actionInput.value;
    history.push("");

    if (action === "create") {
      databaseCreated = true;
      history.push('conn = sqlite3.connect("recept.db")');
      history.push("cursor.execute(\"\"\"CREATE TABLE IF NOT EXISTS recept (...)\"\"\")");
      history.push("conn.commit()");
      history.push("Tabellen recept är redo.");
    } else if (action === "insert") {
      if (!databaseCreated) {
        history.push("Skapa databasen och tabellen först.");
      } else {
        const name = nameInput.value.trim();
        const ingredients = ingredientsInput.value.trim();

        if (!name || !ingredients) {
          history.push("Receptnamn och ingredienser måste fyllas i.");
        } else {
          const row = { id: nextId, namn: name, ingredienser: ingredients };
          nextId += 1;
          rows.push(row);
          history.push('cursor.execute("INSERT INTO recept (namn, ingredienser) VALUES (?, ?)",');
          history.push("    (" + JSON.stringify(name) + ", " + JSON.stringify(ingredients) + ")");
          history.push(")");
          history.push("conn.commit()");
          history.push("Receptet '" + name + "' har lagts till.");
        }
      }
    } else if (action === "select") {
      if (!databaseCreated) {
        history.push("Skapa databasen och tabellen först.");
      } else {
        history.push('cursor.execute("SELECT * FROM recept")');
        history.push("rader = cursor.fetchall()");

        if (rows.length === 0) {
          history.push("Inga recept hittades.");
        } else {
          history.push("fetchall() returnerar " + rows.length + " rad(er).");
          rows.forEach((row) => {
            history.push("");
            history.push("Recept: " + row.namn);
            history.push("Ingredienser: " + row.ingredienser);
          });
        }
      }
    } else if (action === "reset") {
      databaseCreated = true;
      nextId = 1;
      rows.length = 0;
      history.push("Alla rader i den simulerade tabellen togs bort.");
    }

    render();
  });

  actionInput.addEventListener("change", syncInputs);
  resetButton.addEventListener("click", resetExercise);
  resetExercise();
}

function runChapterFourLibrarySqliteExercise(exercise) {
  const titleInput = exercise.querySelector("#chapter-4-6-title");
  const authorInput = exercise.querySelector("#chapter-4-6-author");
  const searchInput = exercise.querySelector("#chapter-4-6-search");
  const actionInput = exercise.querySelector(".exercise-select");
  const button = exercise.querySelector(".exercise-run");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!titleInput || !authorInput || !searchInput || !actionInput || !button || !resetButton || !result) {
    return;
  }

  let databaseCreated = false;
  let stopped = false;
  let nextId = 1;
  const books = [];
  const history = [];

  function formatTable() {
    if (!databaseCreated) {
      return ["Databas: bibliotek.db saknas i simuleringen."];
    }

    if (books.length === 0) {
      return ["Tabell: bocker", "(inga rader)"];
    }

    return ["Tabell: bocker", "id | titel | forfattare"].concat(
      books.map((book) => book.id + " | " + book.titel + " | " + book.forfattare),
    );
  }

  function render() {
    result.textContent = history.concat(["", ...formatTable()]).join("\n");
  }

  function syncInputs() {
    const action = actionInput.value;
    titleInput.disabled = action !== "add" || stopped;
    authorInput.disabled = action !== "add" || stopped;
    searchInput.disabled = action !== "search" || stopped;
    button.disabled = stopped && action !== "reset";
  }

  function resetExercise() {
    databaseCreated = false;
    stopped = false;
    nextId = 1;
    books.length = 0;
    history.length = 0;
    titleInput.value = "Project Hail Mary";
    authorInput.value = "Andy Weir";
    searchInput.value = "Project";
    actionInput.value = "create";
    history.push("Programmet är inte startat i simuleringen ännu.");
    syncInputs();
    render();
  }

  function ensureDatabase() {
    if (!databaseCreated) {
      history.push("Databasen finns inte än. Kör först: Starta programmet och skapa databas.");
      return false;
    }

    return true;
  }

  button.addEventListener("click", () => {
    const action = actionInput.value;
    history.push("");

    if (action === "create") {
      databaseCreated = true;
      stopped = false;
      history.push("main.py:");
      history.push("databas.skapa_databas()");
      history.push("");
      history.push("databas.py:");
      history.push('conn = sqlite3.connect("bibliotek.db")');
      history.push("CREATE TABLE IF NOT EXISTS bocker (...)");
      history.push("conn.commit()");
      history.push("conn.close() i finally");
      history.push("Tabellen bocker är redo.");
    } else if (action === "add") {
      if (ensureDatabase()) {
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();

        history.push("main.py:");
        history.push('databas.lagg_till_bok("' + title + '", "' + author + '")');
        history.push("");

        if (!title || !author) {
          history.push("databas.py:");
          history.push("Titel och författare måste fyllas i.");
        } else {
          books.push({ id: nextId, titel: title, forfattare: author });
          nextId += 1;
          history.push("databas.py:");
          history.push('INSERT INTO bocker (titel, forfattare) VALUES (?, ?)');
          history.push("(" + JSON.stringify(title) + ", " + JSON.stringify(author) + ")");
          history.push("conn.commit()");
          history.push("Bok tillagd!");
        }
      }
    } else if (action === "search") {
      if (ensureDatabase()) {
        const keyword = searchInput.value.trim();
        history.push("main.py:");
        history.push('databas.sok_bok("' + keyword + '")');
        history.push("");

        if (!keyword) {
          history.push("databas.py:");
          history.push("Skriv ett sökord.");
        } else {
          const lowerKeyword = keyword.toLowerCase();
          const found = books.filter((book) => {
            return (
              book.titel.toLowerCase().includes(lowerKeyword) ||
              book.forfattare.toLowerCase().includes(lowerKeyword)
            );
          });

          history.push("databas.py:");
          history.push("SELECT * FROM bocker WHERE titel LIKE ? OR forfattare LIKE ?");
          history.push('("%' + keyword + '%", "%' + keyword + '%")');

          if (found.length === 0) {
            history.push("Inga träffar.");
          } else {
            found.forEach((book) => {
              history.push(book.id + ". " + book.titel + " - " + book.forfattare);
            });
          }
        }
      }
    } else if (action === "show") {
      if (ensureDatabase()) {
        history.push("main.py:");
        history.push("databas.visa_alla_bocker()");
        history.push("");
        history.push("databas.py:");
        history.push("SELECT * FROM bocker");
        history.push("resultat = cursor.fetchall()");

        if (books.length === 0) {
          history.push("Inga böcker finns än.");
        } else {
          books.forEach((book) => {
            history.push(book.id + ". " + book.titel + " - " + book.forfattare);
          });
        }
      }
    } else if (action === "exit") {
      stopped = true;
      history.push("main.py:");
      history.push('print("Avslutar...")');
      history.push("break");
      history.push("Programmet är avslutat i simuleringen.");
    } else if (action === "reset") {
      databaseCreated = true;
      stopped = false;
      nextId = 1;
      books.length = 0;
      history.push("Den simulerade tabellen bocker tömdes.");
    }

    syncInputs();
    render();
  });

  actionInput.addEventListener("change", syncInputs);
  resetButton.addEventListener("click", resetExercise);
  resetExercise();
}

function runChapterFiveDatabaseProjectExercise(exercise) {
  const nameInput = exercise.querySelector("#chapter-5-2-name");
  const infoInput = exercise.querySelector("#chapter-5-2-info");
  const searchInput = exercise.querySelector("#chapter-5-2-search");
  const actionInput = exercise.querySelector(".exercise-select");
  const button = exercise.querySelector(".exercise-run");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!nameInput || !infoInput || !searchInput || !actionInput || !button || !resetButton || !result) {
    return;
  }

  let tableCreated = false;
  let stopped = false;
  let nextId = 1;
  const rows = [];
  const history = [];

  function formatRows() {
    if (!tableCreated) {
      return ["Databas: poster.db saknas i simuleringen."];
    }

    if (rows.length === 0) {
      return ["Tabell: poster", "(inga poster sparade)"];
    }

    return ["Tabell: poster", "id | namn | info"].concat(
      rows.map((row) => row.id + " | " + row.namn + " | " + row.info),
    );
  }

  function render() {
    result.textContent = history.concat(["", ...formatRows()]).join("\n");
  }

  function syncInputs() {
    const action = actionInput.value;
    nameInput.disabled = action !== "add" || stopped;
    infoInput.disabled = action !== "add" || stopped;
    searchInput.disabled = action !== "search" || stopped;
    button.disabled = stopped && action !== "reset";
  }

  function resetExercise() {
    tableCreated = false;
    stopped = false;
    nextId = 1;
    rows.length = 0;
    history.length = 0;
    nameInput.value = "Projekt Hail Mary";
    infoInput.value = "Bok i registret";
    searchInput.value = "Hail";
    actionInput.value = "create";
    history.push("Projektet är inte startat i simuleringen ännu.");
    syncInputs();
    render();
  }

  function ensureTable() {
    if (!tableCreated) {
      history.push("Tabellen finns inte än. Kör först: Starta projektet och skapa tabell.");
      return false;
    }

    return true;
  }

  button.addEventListener("click", () => {
    const action = actionInput.value;
    history.push("");

    if (action === "create") {
      tableCreated = true;
      stopped = false;
      history.push("main.py:");
      history.push("databas.skapa_tabell()");
      history.push("");
      history.push("databas.py:");
      history.push('sqlite3.connect("poster.db")');
      history.push("CREATE TABLE IF NOT EXISTS poster (...)");
      history.push("conn.commit()");
      history.push("Tabellen poster är redo.");
    } else if (action === "add") {
      if (ensureTable()) {
        const name = nameInput.value.trim();
        const info = infoInput.value.trim();

        history.push("main.py:");
        history.push('val == "1" -> databas.lagg_till()');
        history.push("");

        if (!name) {
          history.push("databas.py:");
          history.push("namn TEXT NOT NULL betyder att namn behöver fyllas i.");
        } else {
          rows.push({ id: nextId, namn: name, info });
          nextId += 1;
          history.push("databas.py:");
          history.push('INSERT INTO poster (namn, info) VALUES (?, ?)');
          history.push("(" + JSON.stringify(name) + ", " + JSON.stringify(info) + ")");
          history.push("conn.commit()");
          history.push("Post tillagd.");
        }
      }
    } else if (action === "show") {
      if (ensureTable()) {
        history.push("main.py:");
        history.push('val == "2" -> databas.visa_alla()');
        history.push("");
        history.push("databas.py:");
        history.push("SELECT * FROM poster");
        history.push("resultat = cursor.fetchall()");

        if (rows.length === 0) {
          history.push("Inga poster hittades.");
        } else {
          rows.forEach((row) => {
            history.push(row.id + ". " + row.namn + " - " + row.info);
          });
        }
      }
    } else if (action === "search") {
      if (ensureTable()) {
        const keyword = searchInput.value.trim();
        history.push("main.py:");
        history.push('val == "3" -> databas.sok()');
        history.push("");

        if (!keyword) {
          history.push("databas.py:");
          history.push("Sökordet är tomt. I ett riktigt projekt bör du stoppa tom sökning.");
        } else {
          const lowerKeyword = keyword.toLowerCase();
          const found = rows.filter((row) => {
            return (
              row.namn.toLowerCase().includes(lowerKeyword) ||
              row.info.toLowerCase().includes(lowerKeyword)
            );
          });

          history.push("databas.py:");
          history.push("SELECT * FROM poster WHERE namn LIKE ? OR info LIKE ?");
          history.push('("%' + keyword + '%", "%' + keyword + '%")');

          if (found.length === 0) {
            history.push("Inga träffar.");
          } else {
            found.forEach((row) => {
              history.push(row.id + ". " + row.namn + " - " + row.info);
            });
          }
        }
      }
    } else if (action === "exit") {
      stopped = true;
      history.push("main.py:");
      history.push('val == "4" -> break');
      history.push("Programmet är avslutat i simuleringen.");
    } else if (action === "reset") {
      tableCreated = true;
      stopped = false;
      nextId = 1;
      rows.length = 0;
      history.push("Den simulerade tabellen poster tömdes.");
    }

    syncInputs();
    render();
  });

  actionInput.addEventListener("change", syncInputs);
  resetButton.addEventListener("click", resetExercise);
  resetExercise();
}

function runChapterFiveApiRequestsExercise(exercise) {
  const urlInput = exercise.querySelector("#chapter-5-3-url");
  const scenarioInput = exercise.querySelector(".exercise-select");
  const button = exercise.querySelector(".exercise-run");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");

  if (!urlInput || !scenarioInput || !button || !resetButton || !result) {
    return;
  }

  const defaultUrl = "https://official-joke-api.appspot.com/random_joke";

  function render(lines) {
    result.textContent = lines.join("\n");
  }

  function resetExercise() {
    urlInput.value = defaultUrl;
    scenarioInput.value = "success";
    render(["Välj ett API-svar och kör simuleringen."]);
  }

  button.addEventListener("click", () => {
    const url = urlInput.value.trim() || defaultUrl;
    const scenario = scenarioInput.value;
    const lines = [];

    lines.push("Pythonkod:");
    lines.push("response = requests.get(" + JSON.stringify(url) + ")");
    lines.push("");

    if (scenario === "success") {
      lines.push("Simulerat API-svar:");
      lines.push("status_code = 200");
      lines.push('JSON = {"setup": "Why was the stadium so cool?", "punchline": "Because it was filled with fans!"}');
      lines.push("");
      lines.push("Steg:");
      lines.push("1. requests.get(url) hämtar svaret.");
      lines.push("2. status_code == 200, alltså lyckades anropet.");
      lines.push("3. response.json() gör om JSON-texten till en Python-dictionary.");
      lines.push('4. data["setup"] och data["punchline"] skrivs ut.');
      lines.push("");
      lines.push("Utskrift:");
      lines.push("Skämt:");
      lines.push("Why was the stadium so cool?");
      lines.push("Because it was filled with fans!");
    } else if (scenario === "http-error") {
      lines.push("Simulerat API-svar:");
      lines.push("status_code = 404");
      lines.push("");
      lines.push("Enkel variant:");
      lines.push("if response.status_code == 200 är falskt.");
      lines.push("Kunde inte hämta skämt. Statuskod: 404");
      lines.push("");
      lines.push("Robust variant:");
      lines.push("response.raise_for_status() kastar ett HTTPError.");
      lines.push("except requests.exceptions.RequestException fångar felet.");
    } else if (scenario === "network-error") {
      lines.push("Simulerat fel:");
      lines.push("API:et svarar inte eller nätverket fungerar inte.");
      lines.push("");
      lines.push("Steg:");
      lines.push("1. requests.get(url) hinner inte få ett vanligt response-objekt.");
      lines.push("2. requests kastar ett RequestException-fel.");
      lines.push("3. except-blocket skriver ett begripligt felmeddelande.");
      lines.push("");
      lines.push("Utskrift:");
      lines.push("Kunde inte hämta skämt. Felmeddelande: nätverksfel");
    } else if (scenario === "bad-json") {
      lines.push("Simulerat API-svar:");
      lines.push("status_code = 200");
      lines.push("Svarstext = Detta är inte JSON");
      lines.push("");
      lines.push("Steg:");
      lines.push("1. Statuskoden säger att HTTP-anropet lyckades.");
      lines.push("2. response.json() försöker tolka svaret som JSON.");
      lines.push("3. Tolkningen misslyckas eftersom svaret inte har JSON-format.");
      lines.push("");
      lines.push("Lärdom:");
      lines.push("Ett API-anrop kan lyckas tekniskt men ändå ge data som programmet inte kan tolka.");
    }

    render(lines);
  });

  resetButton.addEventListener("click", resetExercise);
  resetExercise();
}

function runChapterFiveTkinterGuiExercise(exercise) {
  const nameInput = exercise.querySelector("#chapter-5-4-name");
  const tkButton = exercise.querySelector(".tkinter-button");
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");
  const resultLabel = exercise.querySelector(".tkinter-result-label");

  if (!nameInput || !tkButton || !resetButton || !result || !resultLabel) {
    return;
  }

  function renderTrace(lines) {
    result.textContent = lines.join("\n");
  }

  function resetExercise() {
    nameInput.value = "Anna";
    resultLabel.textContent = "";
    renderTrace([
      "Fönstret har skapats av koden:",
      "rot = tk.Tk()",
      'rot.title("Mitt första GUI")',
      'tk.Label(rot, text="Vad heter du?").pack()',
      "namn_entry = tk.Entry(rot)",
      'tk.Button(rot, text="Säg hej", command=visa_meddelande).pack()',
      'resultat_label = tk.Label(rot, text="")',
      "rot.mainloop()",
      "",
      "mainloop() väntar nu på att användaren ska skriva eller klicka.",
    ]);
  }

  nameInput.addEventListener("input", () => {
    renderTrace([
      "Användaren skriver i Entry-widgeten.",
      "Texten finns i fältet, men funktionen visa_meddelande körs inte ännu.",
      "",
      "I tkinter händer detta:",
      "namn_entry visar " + JSON.stringify(nameInput.value),
      "mainloop() fortsätter att vänta på nästa händelse.",
    ]);
  });

  tkButton.addEventListener("click", () => {
    const name = nameInput.value;
    const greeting = "Hej, " + name + "!";
    resultLabel.textContent = greeting;

    renderTrace([
      "Knappen Säg hej klickas.",
      "",
      "Eftersom knappen skapades med:",
      'tk.Button(rot, text="Säg hej", command=visa_meddelande)',
      "",
      "körs funktionen:",
      "def visa_meddelande():",
      "    namn = namn_entry.get()",
      '    resultat_label.config(text=f"Hej, {namn}!")',
      "",
      "Steg för steg:",
      "1. namn_entry.get() läser texten i Entry.",
      "2. namn blir " + JSON.stringify(name) + ".",
      "3. resultat_label.config(...) ändrar texten i Label.",
      "4. Resultatet i fönstret blir " + JSON.stringify(greeting) + ".",
    ]);
  });

  resetButton.addEventListener("click", resetExercise);
  resetExercise();
}

function runChapterFiveJokeRegisterExercise(exercise) {
  const fetchButton = exercise.querySelector('[data-joke-action="fetch"]');
  const saveButton = exercise.querySelector('[data-joke-action="save"]');
  const showButton = exercise.querySelector('[data-joke-action="show"]');
  const resetButton = exercise.querySelector(".exercise-reset");
  const result = exercise.querySelector(".exercise-result");
  const jokeLabel = exercise.querySelector(".tkinter-joke-label");

  if (!fetchButton || !saveButton || !showButton || !resetButton || !result || !jokeLabel) {
    return;
  }

  const jokes = [
    {
      setup: "Why was the stadium so cool?",
      punchline: "Because it was filled with fans!",
    },
    {
      setup: "Why did the programmer quit his job?",
      punchline: "Because he did not get arrays.",
    },
    {
      setup: "Why do bees have sticky hair?",
      punchline: "Because they use honeycombs.",
    },
  ];

  let nextJokeIndex = 0;
  let latestJoke = null;
  const savedJokes = [];

  function formatJoke(joke) {
    return joke.setup + " - " + joke.punchline;
  }

  function renderTrace(lines) {
    result.textContent = lines.join("\n");
  }

  function resetExercise() {
    nextJokeIndex = 0;
    latestJoke = null;
    savedJokes.length = 0;
    jokeLabel.textContent = "";
    renderTrace([
      "Programmet startar:",
      'conn = sqlite3.connect("skamt.db")',
      "CREATE TABLE IF NOT EXISTS skamt (...)",
      "senaste_skamt = None",
      "",
      "root.mainloop() väntar på att användaren klickar på en knapp.",
    ]);
  }

  fetchButton.addEventListener("click", () => {
    const joke = jokes[nextJokeIndex % jokes.length];
    nextJokeIndex += 1;
    latestJoke = joke;
    jokeLabel.textContent = formatJoke(joke);

    renderTrace([
      "Knappen Hämta skämt klickas.",
      "",
      "Funktionen hamta_skamt() körs:",
      'response = requests.get("https://official-joke-api.appspot.com/random_joke")',
      "response.status_code == 200",
      "data = response.json()",
      "",
      "Label uppdateras:",
      "skamt_label.config(text=setup + punchline)",
      "",
      "Variabeln senaste_skamt får värdet:",
      JSON.stringify([joke.setup, joke.punchline]),
    ]);
  });

  saveButton.addEventListener("click", () => {
    if (!latestJoke) {
      jokeLabel.textContent = "Hämta ett skämt först.";
      renderTrace([
        "Knappen Spara skämt klickas.",
        "",
        "Funktionen spara_skamt() körs:",
        "if senaste_skamt:",
        "",
        "senaste_skamt är None, så inget sparas i databasen.",
        "Hämta ett skämt först.",
      ]);
      return;
    }

    savedJokes.push(latestJoke);
    jokeLabel.textContent = "Skämtet sparat!";

    renderTrace([
      "Knappen Spara skämt klickas.",
      "",
      "Funktionen spara_skamt() körs:",
      "if senaste_skamt:",
      'cursor.execute("INSERT INTO skamt (setup, punchline) VALUES (?, ?)", senaste_skamt)',
      "conn.commit()",
      "",
      "Databasen innehåller nu " + savedJokes.length + " sparat skämt.",
      'skamt_label.config(text="Skämtet sparat!")',
    ]);
  });

  showButton.addEventListener("click", () => {
    if (savedJokes.length === 0) {
      jokeLabel.textContent = "Inga sparade skämt än.";
      renderTrace([
        "Knappen Visa alla skämt klickas.",
        "",
        "Funktionen visa_skamt() körs:",
        'cursor.execute("SELECT * FROM skamt")',
        "rader = cursor.fetchall()",
        "",
        "Tabellen är tom i simuleringen.",
      ]);
      return;
    }

    const output = savedJokes.map(formatJoke).join("\n");
    jokeLabel.textContent = output.length > 300 ? output.slice(0, 300) + "..." : output;

    renderTrace([
      "Knappen Visa alla skämt klickas.",
      "",
      "Funktionen visa_skamt() körs:",
      'cursor.execute("SELECT * FROM skamt")',
      "rader = cursor.fetchall()",
      'output = "\\n".join([f"{r[1]} - {r[2]}" for r in rader])',
      "",
      "Antal rader som visas: " + savedJokes.length,
    ]);
  });

  resetButton.addEventListener("click", resetExercise);
  resetExercise();
}

function runChapterTwoLibraryExercise(exercise) {
  const operationInput = exercise.querySelector(".exercise-select");
  const titleInput = exercise.querySelector(".exercise-title-input");
  const authorInput = exercise.querySelector(".exercise-author-input");
  const yearInput = exercise.querySelector(".exercise-year-input");
  const searchInput = exercise.querySelector(".exercise-search-input");
  const button = exercise.querySelector(".exercise-run");
  const result = exercise.querySelector(".exercise-result");

  if (!operationInput || !titleInput || !authorInput || !yearInput || !searchInput || !button || !result) {
    return;
  }

  const catalog = [];
  const history = ["catalog = []"];

  function syncLibraryInputs() {
    const operation = operationInput.value;
    const adding = operation === "add";
    const searching = operation === "search";

    titleInput.disabled = !adding;
    authorInput.disabled = !adding;
    yearInput.disabled = !adding;
    searchInput.disabled = !searching;
  }

  function renderLibrary() {
    result.textContent = history.join("\n");
  }

  button.addEventListener("click", () => {
    const operation = operationInput.value;

    if (operation === "add") {
      const title = titleInput.value.trim();
      const author = authorInput.value.trim();
      const year = yearInput.value.trim();

      history.push("Titel: " + title);
      history.push("Författare: " + author);
      history.push("År: " + year);

      if (!title || !author || !year) {
        history.push("Titel, författare och år måste fyllas i.");
      } else {
        const book = { title, author, year };
        catalog.push(book);
        history.push("catalog.append(book)");
        history.push(formatLibraryCatalog(catalog));
      }
    } else if (operation === "search") {
      const query = searchInput.value.trim().toLowerCase();
      history.push("Sök titel eller författare: " + searchInput.value.trim());

      if (!query) {
        history.push("Skriv ett sökord först.");
      } else {
        const found = catalog.filter((book) => {
          return (
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
          );
        });

        if (found.length === 0) {
          history.push("Inga träffar.");
        } else {
          found.forEach((book) => {
            history.push(formatLibraryBook(book));
          });
        }
      }
    } else if (operation === "show") {
      const sortedBooks = catalog
        .slice()
        .sort((a, b) => a.title.localeCompare(b.title, "sv"));
      history.push('sorted(catalog, key=lambda x: x["title"])');

      if (sortedBooks.length === 0) {
        history.push("Katalogen är tom.");
      } else {
        sortedBooks.forEach((book) => {
          history.push(formatLibraryBook(book));
        });
      }
    } else if (operation === "exit") {
      history.push("Programmet avslutas med break.");
      button.disabled = true;
      operationInput.disabled = true;
      titleInput.disabled = true;
      authorInput.disabled = true;
      yearInput.disabled = true;
      searchInput.disabled = true;
    } else if (operation === "reset") {
      catalog.length = 0;
      history.length = 0;
      history.push("catalog = []");
      button.disabled = false;
      operationInput.disabled = false;
      syncLibraryInputs();
    }

    renderLibrary();
  });

  operationInput.addEventListener("change", syncLibraryInputs);
  syncLibraryInputs();
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll('[data-exercise="chapter-1-programming"]')
    .forEach(runChapterOneProgrammingExercise);
  document
    .querySelectorAll('[data-exercise="chapter-1-average"]')
    .forEach(runChapterOneAverageExercise);
  document
    .querySelectorAll('[data-exercise="chapter-1-adult"]')
    .forEach(runChapterOneAdultExercise);
  document
    .querySelectorAll('[data-exercise="chapter-1-grade"]')
    .forEach(runChapterOneGradeExercise);
  document
    .querySelectorAll('[data-exercise="chapter-1-logical"]')
    .forEach(runChapterOneLogicalExercise);
  document
    .querySelectorAll('[data-exercise="chapter-1-exception-handling"]')
    .forEach(runChapterOneExceptionExercise);
  document
    .querySelectorAll('[data-exercise="chapter-1-for-sum"]')
    .forEach(runChapterOneForSumExercise);
  document
    .querySelectorAll('[data-exercise="chapter-1-while-password"]')
    .forEach(runChapterOneWhilePasswordExercise);
  document
    .querySelectorAll('[data-exercise="chapter-1-menu"]')
    .forEach(runChapterOneMenuExercise);
  document
    .querySelectorAll('[data-exercise="chapter-1-choice-program"]')
    .forEach(runChapterOneChoiceProgramExercise);
  document
    .querySelectorAll('[data-exercise="chapter-2-list-editor"]')
    .forEach(runChapterTwoListEditorExercise);
  document
    .querySelectorAll('[data-exercise="chapter-2-list-iteration"]')
    .forEach(runChapterTwoListIterationExercise);
  document
    .querySelectorAll('[data-exercise="chapter-2-linear-search"]')
    .forEach(runChapterTwoLinearSearchExercise);
  document
    .querySelectorAll('[data-exercise="chapter-2-bubble-sort"]')
    .forEach(runChapterTwoBubbleSortExercise);
  document
    .querySelectorAll('[data-exercise="chapter-2-built-in-sort"]')
    .forEach(runChapterTwoBuiltInSortExercise);
  document
    .querySelectorAll('[data-exercise="chapter-2-dictionary"]')
    .forEach(runChapterTwoDictionaryExercise);
  document
    .querySelectorAll('[data-exercise="chapter-2-tuple"]')
    .forEach(runChapterTwoTupleExercise);
  document
    .querySelectorAll('[data-exercise="chapter-2-lambda-sort"]')
    .forEach(runChapterTwoLambdaSortExercise);
  document
    .querySelectorAll('[data-exercise="chapter-2-score-list"]')
    .forEach(runChapterTwoScoreListExercise);
  document
    .querySelectorAll('[data-exercise="chapter-2-library"]')
    .forEach(runChapterTwoLibraryExercise);
  document
    .querySelectorAll('[data-exercise="chapter-3-book-objects"]')
    .forEach(runChapterThreeBookObjectsExercise);
  document
    .querySelectorAll('[data-exercise="chapter-3-person-class"]')
    .forEach(runChapterThreePersonClassExercise);
  document
    .querySelectorAll('[data-exercise="chapter-3-car-constructor"]')
    .forEach(runChapterThreeCarConstructorExercise);
  document
    .querySelectorAll('[data-exercise="chapter-3-bank-account"]')
    .forEach(runChapterThreeBankAccountExercise);
  document
    .querySelectorAll('[data-exercise="chapter-3-inheritance-polymorphism"]')
    .forEach(runChapterThreeInheritancePolymorphismExercise);
  document
    .querySelectorAll('[data-exercise="chapter-3-generics"]')
    .forEach(runChapterThreeGenericsExercise);
  document
    .querySelectorAll('[data-exercise="chapter-4-file-writing"]')
    .forEach(runChapterFourFileWritingExercise);
  document
    .querySelectorAll('[data-exercise="chapter-4-exception-cases"]')
    .forEach(runChapterFourExceptionCasesExercise);
  document
    .querySelectorAll('[data-exercise="chapter-3-modules-import"]')
    .forEach(runChapterThreeModulesImportExercise);
  document
    .querySelectorAll('[data-exercise="chapter-4-code-style"]')
    .forEach(runChapterFourCodeStyleExercise);
  document
    .querySelectorAll('[data-exercise="chapter-4-recipe-collection"]')
    .forEach(runChapterFourRecipeCollectionExercise);
  document
    .querySelectorAll('[data-exercise="chapter-4-sqlite-recipes"]')
    .forEach(runChapterFourSqliteRecipesExercise);
  document
    .querySelectorAll('[data-exercise="chapter-4-library-sqlite"]')
    .forEach(runChapterFourLibrarySqliteExercise);
  document
    .querySelectorAll('[data-exercise="chapter-5-database-project"]')
    .forEach(runChapterFiveDatabaseProjectExercise);
  document
    .querySelectorAll('[data-exercise="chapter-5-api-requests"]')
    .forEach(runChapterFiveApiRequestsExercise);
  document
    .querySelectorAll('[data-exercise="chapter-5-tkinter-gui"]')
    .forEach(runChapterFiveTkinterGuiExercise);
  document
    .querySelectorAll('[data-exercise="chapter-5-joke-register"]')
    .forEach(runChapterFiveJokeRegisterExercise);
});
