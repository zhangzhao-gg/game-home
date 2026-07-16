# Infinite Telegraph Company

无限电报公司官网，面向 *Prosperous Universe* 游戏生态展示公司业务、工业布局、新闻动态与投资者关系。

[访问线上站点](https://infinite.okethan.com) · [投资者关系](https://infinite.okethan.com/investors.html)

## 项目特点

- 五页静态信息架构：首页负责导航，独立页面承载完整内容。
- 工业 HUD 视觉系统：深色界面、数据网格、遥测标签与克制的金色强调。
- 原生响应式布局：覆盖桌面、平板与移动端，不依赖前端构建流程。
- 渐进增强交互：移动导航、联系人复制和轻量视差均可在脚本失效时安全降级。
- 本地化 WebP 资产：核心图片不依赖第三方图床。

## 页面

| 页面 | 文件 | 职责 |
| --- | --- | --- |
| 首页 | `home.html` | 品牌总览、核心数据与全站入口 |
| 公司概览 | `company.html` | 公司使命、运营原则与发展阶段 |
| 业务与产线 | `business.html` | MGS、PE、SF 业务及纵向一体化流程 |
| 公司动态 | `news.html` | 自动化、炼化、融资与园区进展 |
| 投资者关系 | `investors.html` | 投资事实、投资人档案与长期战略 |

## 技术栈

- HTML5
- Tailwind CSS CDN
- Vanilla JavaScript
- Nginx

项目没有依赖安装和打包步骤，源码即可部署。

## 本地预览

在项目根目录启动任意静态文件服务器：

```bash
python3 -m http.server 8080
```

随后访问 <http://localhost:8080/home.html>。

直接双击 HTML 也能查看内容，但使用本地服务器更接近生产环境。

## 目录结构

```text
.
├── home.html
├── company.html
├── business.html
├── news.html
├── investors.html
├── assets/
│   ├── images/          # 本地 WebP 图片
│   ├── scripts/         # Tailwind 主题与共享交互
│   └── styles/          # 共享工业视觉系统
└── deploy/
    └── nginx.conf       # 生产 Nginx 虚拟主机示例
```

每一层目录都维护 `AGENTS.md` 架构地图，业务文件通过 INPUT / OUTPUT / POS 头部契约描述职责。

## 内容维护

- 修改页面结构时同步检查文件头部契约与对应 `AGENTS.md`。
- 新增位图前转为 WebP，并登记到 `assets/images/AGENTS.md`。
- 页面间链接使用相对路径，页面内定位使用稳定的语义化 `id`。
- 所有可点击元素都必须具备明确目标和键盘焦点状态。

## 部署

生产 Nginx 示例位于 `deploy/nginx.conf`。部署目标通过本地环境文件配置：

```bash
cp .env.deploy.example .env.deploy
```

填写真实的 `DEPLOY_HOST` 后，通过 `rsync` 同步 HTML 与 `assets/` 静态资源。`.env.deploy`、私钥和证书均被 `.gitignore` 排除。

发布前至少完成以下检查：

```bash
node --check assets/scripts/site.js
node --check assets/scripts/tailwind-config.js
```

随后检查所有页面返回 `200`，并从公网回读关键内容。

## 安全

- 不要提交服务器 IP、SSH 用户、访问令牌、私钥或真实环境文件。
- 不要把 TLS 证书复制到仓库；证书由生产服务器上的 Certbot 管理。
- 提交前使用 `git diff --cached` 审查完整变更。

## 版权

© 2026 Infinite Telegraph Company. All Rights Reserved.
