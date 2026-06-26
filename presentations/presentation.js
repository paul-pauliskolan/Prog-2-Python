(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const currentEl = document.querySelector("[data-current-slide]");
  const totalEl = document.querySelector("[data-total-slides]");

  if (!slides.length) return;

  let slideIndex = 0;
  let fragmentIndex = 0;

  function fragmentsFor(slide) {
    return Array.from(slide.querySelectorAll(".fragment"));
  }

  function render() {
    slides.forEach((slide, index) => {
      const active = index === slideIndex;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", active ? "false" : "true");

      fragmentsFor(slide).forEach((fragment, fragmentPosition) => {
        const visible = active && fragmentPosition < fragmentIndex;
        const current = active && fragmentPosition === fragmentIndex - 1;

        fragment.classList.toggle("is-visible", visible);
        fragment.classList.toggle("is-dimmed", visible && !current);
      });
    });

    if (currentEl) currentEl.textContent = String(slideIndex + 1);
    if (totalEl) totalEl.textContent = String(slides.length);
  }

  function nextStep() {
    const fragments = fragmentsFor(slides[slideIndex]);

    if (fragmentIndex < fragments.length) {
      fragmentIndex += 1;
    } else if (slideIndex < slides.length - 1) {
      slideIndex += 1;
      fragmentIndex = 0;
    } else {
      slideIndex = 0;
      fragmentIndex = 0;
    }

    render();
  }

  function previousStep() {
    if (fragmentIndex > 0) {
      fragmentIndex -= 1;
    } else if (slideIndex > 0) {
      slideIndex -= 1;
      fragmentIndex = fragmentsFor(slides[slideIndex]).length;
    } else {
      slideIndex = slides.length - 1;
      fragmentIndex = fragmentsFor(slides[slideIndex]).length;
    }

    render();
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      nextStep();
    } else if (event.key === "ArrowLeft" || event.key === "PageUp" || event.key === "Backspace") {
      event.preventDefault();
      previousStep();
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof Element && target.closest("a, button, input, textarea, select")) return;

    if (event.button === 0) nextStep();
  });

  render();
})();
