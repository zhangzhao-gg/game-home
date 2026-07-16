# deploy/
> L2 | 父级: ../AGENTS.md

## 成员清单

nginx.conf: `infinite.okethan.com` 生产虚拟主机配置，根目录指向 `/opt/infinite-home`。

## 部署边界

- 服务器：由本地 `.env.deploy` 的 `DEPLOY_HOST` 提供，不写入版本库。
- 站点目录：`/opt/infinite-home/`。
- Nginx 配置：`/etc/nginx/sites-available/infinite.okethan.com`。
- 公网入口：`https://infinite.okethan.com`，HTTP 自动 301 跳转 HTTPS。
- TLS：Let's Encrypt ECDSA 证书，Certbot 定时任务自动续期。
- 图片使用长期不可变缓存；HTML 禁止缓存，保证发布立即生效。
- SSH 用户、服务器 IP、私钥与证书仅保留在部署环境，禁止写入仓库。

[PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
