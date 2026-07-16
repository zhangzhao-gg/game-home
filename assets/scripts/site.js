/**
 * [INPUT]: 依赖页面中的 data-menu-toggle、data-menu、data-copy 与 parallax-data 标记
 * [OUTPUT]: 对外提供移动导航开关、联系人复制反馈与轻量视差增强
 * [POS]: assets/scripts 的共享交互层，核心内容在脚本失效时仍保持可访问
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */

document.querySelectorAll("[data-menu-toggle]").forEach((button) => {
    const menu = document.querySelector(`[data-menu="${button.dataset.menuToggle}"]`);
    if (!menu) return;

    button.addEventListener("click", () => {
        const isOpen = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!isOpen));
        menu.hidden = isOpen;
    });
});

document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
        const original = button.textContent;
        try {
            await navigator.clipboard.writeText(button.dataset.copy);
            button.textContent = "COPIED";
        } catch {
            button.textContent = "COPY FAILED";
        }
        window.setTimeout(() => { button.textContent = original; }, 1800);
    });
});

const parallaxItems = document.querySelectorAll(".parallax-data");
if (parallaxItems.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("scroll", () => {
        const shift = Math.min(window.scrollY * 0.025, 24);
        parallaxItems.forEach((item) => { item.style.transform = `translateY(${shift}px)`; });
    }, { passive: true });
}
