// IntersectionObserver 非対応ブラウザでも表示できるようにする
const supportsIntersectionObserver = "IntersectionObserver" in window;
const projectItems = document.querySelectorAll(".project-item");

if (supportsIntersectionObserver) {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    projectItems.forEach((item) => {
        observer.observe(item);
    });
} else {
    projectItems.forEach((item) => {
        item.classList.add("is-visible");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const targetText = document.querySelector(".large-text");

    if (!targetText) {
        return;
    }

    // テキストを1文字ずつ分解して <span> で囲む
    const textContent = targetText.textContent;
    targetText.textContent = "";

    textContent.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.setProperty("--delay", `${index * 0.01}s`);
        targetText.appendChild(span);
    });

    if (supportsIntersectionObserver) {
        const typoObserverOptions = {
            threshold: 0.1
        };

        const typoObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-in");
                    observer.unobserve(entry.target);
                }
            });
        }, typoObserverOptions);

        typoObserver.observe(targetText);
    } else {
        targetText.classList.add("animate-in");
    }
});
