(function () {
    const { chapters, questions } = window.quickQuestions;
    const overview = document.querySelector("[data-overview]");
    const total = Object.values(questions).reduce((sum, list) => sum + list.length, 0);
    document.querySelector("[data-summary]").textContent = `${total} frågor från kursens ${Object.keys(questions).length} delkapitel.`;
    function card(href, number, title, count) {
        const link = document.createElement("a"); link.className = "chapter-card"; link.href = href;
        const n = document.createElement("span"); n.className = "chapter-number"; n.textContent = number;
        const strong = document.createElement("strong"); strong.textContent = title;
        const c = document.createElement("span"); c.textContent = `${count} frågor`;
        link.append(n, strong, c); return link;
    }
    const allSection = document.createElement("section"); const allHeading = document.createElement("h2");
    allHeading.textContent = "Alla snabbfrågor"; const allGrid = document.createElement("div"); allGrid.className = "chapter-grid";
    allGrid.append(card("slumpfragor.html?scope=all", "Hela kursen", "Alla snabbfrågor", total));
    allSection.append(allHeading, allGrid); overview.append(allSection);
    chapters.forEach(([number, title, subchapters]) => {
        const section = document.createElement("section"); const heading = document.createElement("h2"); heading.textContent = title;
        const grid = document.createElement("div"); grid.className = "chapter-grid";
        const count = subchapters.reduce((sum, [id]) => sum + questions[id].length, 0);
        grid.append(card(`slumpfragor.html?chapter=${number}`, `Kapitel ${number}`, `Alla frågor i kapitel ${number}`, count));
        subchapters.forEach(([id, name]) => grid.append(card(`kap-${id.replace(".", "-")}.html`, id, name, questions[id].length)));
        section.append(heading, grid); overview.append(section);
    });
}());
