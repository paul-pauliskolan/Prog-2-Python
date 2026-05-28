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

function getMenuItems() {
  return state.chapters.slice().sort((a, b) => a.number - b.number);
}

function buildChapterLink(chapter, activeNumber) {
  const activeClass = chapter.number === activeNumber ? " is-active" : "";
  return `
        <a href="${chapterUrl(chapter.number)}" class="chapter-link${activeClass}">
            <span class="chapter-number">${String(chapter.number).padStart(2, "0")}</span>
            <span class="chapter-title">Kapitel ${chapter.number}</span>
        </a>
    `;
}

function renderMenu(container, activeNumber) {
  if (!container) return;
  container.innerHTML = getMenuItems()
    .map((chapter) => buildChapterLink(chapter, activeNumber))
    .join("");
}

function renderHomepageMenu(container) {
  if (!container) return;
  container.innerHTML = getMenuItems()
    .map((chapter) => buildChapterLink(chapter))
    .join("");
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

  renderMenu(document.getElementById("chapters-menu"), chapter.number);
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
        renderMenu(document.getElementById("chapters-menu"));
        renderHomepageMenu(document.getElementById("chapters-menu-homepage"));
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

function setupMenuControls() {
  const menu = document.getElementById("side-menu");
  const toggle = document.getElementById("menu-toggle");
  const close = document.getElementById("menu-close");

  if (!menu || !toggle || !close) return;

  const setOpen = (isOpen) => {
    menu.dataset.open = isOpen ? "true" : "false";
  };

  toggle.addEventListener("click", () => setOpen(menu.dataset.open !== "true"));
  close.addEventListener("click", (event) => {
    event.preventDefault();
    setOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (menu.dataset.open !== "true") return;
    if (menu.contains(event.target) || toggle.contains(event.target)) return;
    setOpen(false);
  });
}

function initPage() {
  setupMenuControls();
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
  "chapter-4-1.html",
  "chapter-4-2.html",
  "chapter-4-3.html",
  "chapter-4-4.html",
  "chapter-4-5.html",
  "chapter-4-6.html",
  "chapter-4-7.html",
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
