(function () {
    const { chapters, questions } = window.quickQuestions;
    const params = new URLSearchParams(window.location.search);
    const match = window.location.pathname.match(/kap-(\d)-(\d+)\.html$/);
    const singleChapter = match ? `${match[1]}.${match[2]}` : null;
    const mainChapter = params.get("chapter"); const isCollection = !singleChapter;
    function shuffle(items) { const result = items.slice(); for (let i = result.length - 1; i > 0; i -= 1) { const j = Math.floor(Math.random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; } return result; }
    function titleFor(id) { for (const [, , subs] of chapters) { const found = subs.find(([chapterId]) => chapterId === id); if (found) return found[1]; } return ""; }
    let ids; if (singleChapter) ids = [singleChapter]; else if (mainChapter) ids = Object.keys(questions).filter(id => id.startsWith(`${mainChapter}.`)); else ids = Object.keys(questions);
    let cards = []; let current = 0; let answerVisible = false;
    const deck = document.querySelector("[data-deck]"); const progress = document.querySelector("[data-progress]");
    const previous = document.querySelector("[data-previous]"); const nextButton = document.querySelector("[data-next]");
    function reset() { cards = shuffle(ids.flatMap(id => questions[id].map(item => ({ ...item, chapter: id })))); current = 0; answerVisible = false; render(); }
    function render() {
        const item = cards[current]; deck.replaceChildren(); const section = document.createElement("section");
        section.className = `slide is-active ${answerVisible ? "answer-slide" : "question-slide"}`;
        const content = document.createElement("div"); content.className = "slide-content";
        const label = document.createElement("p"); label.className = "eyebrow"; label.textContent = `Delkapitel ${item.chapter} · ${titleFor(item.chapter)}`;
        const heading = document.createElement("h1"); heading.textContent = answerVisible ? item.answer : item.question; content.append(label, heading);
        if (answerVisible && item.code) { const pre = document.createElement("pre"); const code = document.createElement("code"); code.textContent = item.code; pre.append(code); content.append(pre); }
        if (!answerVisible) { const prompt = document.createElement("p"); prompt.className = "think-prompt"; prompt.textContent = "Tänk på svaret först. Tryck på mellanslag för att visa facit."; content.append(prompt); }
        section.append(content); deck.append(section); progress.textContent = `${answerVisible ? "Facit" : "Fråga"} · ${current + 1} av ${cards.length}`;
        previous.disabled = current === 0 && !answerVisible; const atEnd = current === cards.length - 1 && answerVisible;
        nextButton.textContent = atEnd ? (isCollection ? "Blanda om och börja om" : "Till översikten") : "Nästa →";
    }
    function next() { if (!answerVisible) answerVisible = true; else if (current < cards.length - 1) { current += 1; answerVisible = false; } else if (isCollection) { reset(); return; } else { window.location.href = "index.html"; return; } render(); }
    function back() { if (answerVisible) answerVisible = false; else if (current > 0) { current -= 1; answerVisible = true; } render(); }
    document.addEventListener("keydown", event => { if (event.key === " " || event.key === "ArrowRight") { event.preventDefault(); next(); } else if (event.key === "ArrowLeft") { event.preventDefault(); back(); } });
    previous.addEventListener("click", back); nextButton.addEventListener("click", next); reset();
}());
