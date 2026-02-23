document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-text");
    const supportsIntersectionObserver = "IntersectionObserver" in window;

    if (!elements.length) {
        return;
    }

    if (supportsIntersectionObserver) {
        const observerOptions = {
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        }, observerOptions);

        elements.forEach((el) => observer.observe(el));
    } else {
        elements.forEach((el) => el.classList.add("is-visible"));
    }
});
