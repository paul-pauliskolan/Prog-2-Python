(function () {
  "use strict";

  const STORAGE_KEY = "programmering-2-theme";
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  function savedTheme() {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === "light" || value === "dark" ? value : null;
    } catch (_) {
      return null;
    }
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    const button = document.querySelector(".theme-toggle");
    if (!button) return;

    const dark = theme === "dark";
    const nextTheme = dark ? "ljust" : "mörkt";
    button.innerHTML = `<span class="theme-toggle-icon" aria-hidden="true">${dark ? "☀️" : "🌙"}</span><span class="theme-toggle-label">${dark ? "Ljust tema" : "Mörkt tema"}</span>`;
    button.setAttribute("aria-pressed", String(dark));
    button.setAttribute("aria-label", `Byt till ${nextTheme} tema`);
    button.title = `Byt till ${nextTheme} tema`;
  }

  function currentTheme() {
    return savedTheme() || (systemTheme.matches ? "dark" : "light");
  }

  applyTheme(currentTheme());

  systemTheme.addEventListener("change", (event) => {
    if (!savedTheme()) applyTheme(event.matches ? "dark" : "light");
  });

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    document.querySelector(".navbar, .presentation-toolbar, body").appendChild(button);
    applyTheme(currentTheme());

    button.addEventListener("click", () => {
      const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch (_) {
        // Temaväxlingen fungerar även om lagring är blockerad.
      }
      applyTheme(theme);
    });
  });
})();
