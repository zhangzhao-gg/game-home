/**
 * [INPUT]: 依赖浏览器中已加载的 Tailwind CDN 全局对象
 * [OUTPUT]: 对外提供多页面统一的颜色、字体、间距与字号主题配置
 * [POS]: assets/scripts 的视觉令牌源，被所有新增独立页面消费
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "#111415",
                surface: "#111415",
                "surface-container-lowest": "#0c0e10",
                "surface-container-low": "#1a1c1d",
                "surface-container": "#1e2021",
                "surface-container-high": "#282a2c",
                "surface-container-highest": "#333537",
                primary: "#b9c7e4",
                secondary: "#e9c176",
                tertiary: "#6fd7d6",
                outline: "#8f9097",
                "outline-variant": "#44474d",
                "on-background": "#e2e2e4",
                "on-surface": "#e2e2e4",
                "on-surface-variant": "#c5c6cd",
                "on-secondary": "#412d00"
            },
            fontFamily: {
                display: ["Inter", "sans-serif"],
                body: ["Work Sans", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"]
            },
            maxWidth: {
                "site": "1440px"
            },
            boxShadow: {
                "signal": "0 0 40px rgba(233, 193, 118, 0.12)"
            }
        }
    }
};
