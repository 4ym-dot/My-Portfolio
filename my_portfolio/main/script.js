// スクロール時のフェードイン演出
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-item').forEach(item => {
    observer.observe(item);
});

document.addEventListener("DOMContentLoaded", () => {
    const targetText = document.querySelector('.large-text');

    if (targetText) {
        // 1. テキストを1文字ずつ分解して <span> で囲む処理
        const textContent = targetText.textContent;
        targetText.textContent = ''; // 元のテキストを空にする

        textContent.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.setProperty('--delay', `${index * 0.01}s`);
            targetText.appendChild(span);
        });

        // 2. スクロール監視のオプションを再設定（要素が半分見えたら発火）
        const typoObserverOptions = {
            threshold: 0.5
        };

        // 3. Intersection Observer でアニメーションを発火させる
        const typoObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 画面内に入ったらクラスを付与してアニメーション開始
                    entry.target.classList.add('animate-in');
                    // 一度発火したら監視を解除（パフォーマンス対策）
                    observer.unobserve(entry.target);
                }
            });
        }, typoObserverOptions);

        // 監視を開始
        typoObserver.observe(targetText);
    }
});