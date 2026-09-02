(function () {
    const slides = Array.from(document.querySelectorAll(".slide"));
    const questionNumber = document.querySelector("[data-question-number]");
    const cardType = document.querySelector("[data-card-type]");
    const previousButton = document.querySelector("[data-previous]");
    const nextButton = document.querySelector("[data-next]");

    if (!slides.length) return;

    let currentIndex = 0;

    function render() {
        slides.forEach((slide, index) => {
            const isActive = index === currentIndex;
            slide.classList.toggle("is-active", isActive);
            slide.setAttribute("aria-hidden", isActive ? "false" : "true");
        });

        const currentSlide = slides[currentIndex];
        questionNumber.textContent = currentSlide.dataset.question;
        cardType.textContent = currentSlide.classList.contains("answer-slide") ? "Facit" : "Fråga";
        previousButton.disabled = currentIndex === 0;
        nextButton.textContent = currentIndex === slides.length - 1 ? "Till översikten" : "Nästa →";
    }

    function next() {
        if (currentIndex < slides.length - 1) {
            currentIndex += 1;
            render();
        } else {
            window.location.href = "index.html";
        }
    }

    function previous() {
        if (currentIndex > 0) {
            currentIndex -= 1;
            render();
        }
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === " " || event.key === "ArrowRight") {
            event.preventDefault();
            next();
        } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            previous();
        }
    });

    previousButton.addEventListener("click", previous);
    nextButton.addEventListener("click", next);
    render();
})();
