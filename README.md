# re-nextjs-template

Personalized nextjs project starter template

features

- [x] Next Auth
- [x] Prisma
- [x] i18n
- [x] Google Adsense
- [x] Google Analytics
- [x] shadcnui

## 环境变量

Next Auth

| 变量名               | 说明                            |
| -------------------- | ------------------------------- |
| NEXT_PUBLIC_BASE_URL | fetch请求URL前缀                |
| NEXT_PUBLIC_GAID     | Google Analytics Id             |
| NEXT_PUBLIC_PUB      | Google Adsense PUB              |
| NEXTAUTH_URL         | Next Auth 回调地址              |
| GOOGLE_CLIENT_ID     | Next Auth Google 登录客户端id   |
| GOOGLE_CLIENT_SECRET | Next Auth Google 登录客户端秘钥 |
| GITHUB_CLIENT_ID     | Next Auth GitHub 登录客户端id   |
| GITHUB_CLIENT_SECRET | Next Auth Github 登录客户端秘钥 |

## 更新package.json

```shell
npm install -g npm-check-updates
```

```shell
# 检查
ncu
# 更新
ncu -u
# 安装最新依赖
yarn
```

## Prisma

| 命令                  | 作用                      | 官方文档                                                                             |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------------ |
| `npx prisma init`     | 初始化 Prisma             | [API 链接](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#init)       |
| `npx prisma generate` | 生成 Prisma Client        | [API 链接](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#generate)   |
| `npx prisma studio`   | 开启 Prisma Studio        | [API 链接](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#studio)     |
| `npx prisma validate` | 检验 Prisma schema 文件   | [API 链接](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#validate)   |
| `npx prisma format`   | 格式化 Prisma Scheam 文件 | [API 链接](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#format)     |
| `npx prisma version`  | 展示 Prisma 版本信息      | [API 链接](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#version--v) |
| `npx prisma debug`    | 展示 Prisma debug 信息    | [API 链接](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#debug)      |

稍微有点复杂的是 `db` 和 `migrate` 命令：

| 命令                         | 作用                                                                                                                                                    | 官方文档                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `npx prisma db pull`         | 连接数据库，同步到数据模型                                                                                                                              | [API 链接](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#db-pull)         |
| `npx prisma db push`         | 数据模型同步到数据库                                                                                                                                    | [API 链接](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#db-push)         |
| `npx prisma db seed`         | 给数据库填充点数据                                                                                                                                      | [API 链接](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#db-seed)         |
| `npx prisma db execute`      | 与数据库交互，执行 SQL 语句                                                                                                                             | [API 链接](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#db-execute)      |
| `npx prisma migrate dev`     | 仅在开发环境下使用，迁移数据库                                                                                                                          | [API 链接](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#migrate-dev)     |
| `npx prisma migrate reset`   | 仅在开发环境下使用，重置数据库                                                                                                                          | [API 链接](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#migrate-reset)   |
| `npx prisma migrate deploy`  | 常用于正式环境，将迁移文件更新到生产环境后，执行该命令，会应用所有尚未迁移过的文件                                                                      | [API 链接](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#migrate-deploy)  |
| `npx prisma migrate resolve` | 当 migrate 失败时用于回滚，详细参考 [Failed migration](https://www.prisma.io/docs/orm/prisma-migrate/workflows/patching-and-hotfixing#failed-migration) | [API 链接](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#migrate-resolve) |
| `npx prisma migrate status`  | 当前的迁移状态，哪些迁移已应用，哪些迁移尚未应用                                                                                                        | [API 链接](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#migrate-status)  |
| `npx prisma migrate diff`    | 比较两个数据库 schema source 的差异                                                                                                                     | [API 链接](https://www.prisma.io/docs/orm/reference/prisma-cli-reference#migrate-diff)    |
