document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.2 // 20%見えたら発火
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // すべての .animate-text を監視対象にする
    const elements = document.querySelectorAll('.animate-text');
    elements.forEach(el => observer.observe(el));
});