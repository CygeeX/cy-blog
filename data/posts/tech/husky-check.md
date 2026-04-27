---
title: 使用 Husky 配置 Commit 和 Push 前的 TypeScript 格式检查
date: '2026-04-27T21:18:00Z'
modifiedTime: '2026-04-27T21:18:00Z'
intro: 通过 Husky 在 Git 的 commit 和 push 前自动检查 TypeScript 代码格式，保证提交质量。
tags: ['git', 'husky', 'typescript', 'lint', 'pre-commit', 'pre-push']
cover: 'https://img.eonova.me/picgo/20250529195625450.png'
---

## 什么是 Husky

Husky 是一个 Git hooks 工具，可以在 Git 的特定操作（如 commit、push）触发脚本。

使用 Husky，可以在提交代码前执行：

- 代码格式检查（lint / prettier）
- 单元测试
- 提交信息校验
- 其他自定义脚本

这样可以保证团队代码规范和质量。

## 安装 Husky

在项目中使用 npm 或 yarn 安装 Husky：

```bash
# 使用 npm
npm install husky --save-dev

# 使用 yarn
yarn add husky --dev
```

这里的 `--save-dev` 的好处是把只在开发阶段用的依赖（如 Husky、ESLint、TypeScript）标记为开发依赖，避免在生产环境安装浪费空间和增加构建时间。

---

## 初始化 Husky（官方推荐方式）

1. **初始化 Husky 并创建默认 pre-commit 钩子**

```bash
npx husky-init
```

- 这个命令会：
  1. 安装 Husky（如果还没安装）
  2. 创建 `.husky` 文件夹
  3. 创建一个默认的 `pre-commit` 文件（默认内容执行 `npm test`）
  4. 在 `package.json` 中添加 `"prepare": "husky install"` 脚本

2. **修改 pre-commit 文件执行 lint-staged（官方推荐做法）**

- 打开 `.husky/pre-commit` 文件，将内容修改为：

```bash
#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

- 保留第一行和第二行，用于正确加载 Husky  
- 这样每次 `git commit` 时，就会执行 `lint-staged` 检查提交的 TS/TSX 文件格式

3. **可选：手动添加新的钩子**

- 例如在 push 前检查类型：

```bash
# 创建 pre-push 钩子
echo "#!/usr/bin/env sh
. \"\$(dirname \"\$0\")/_/husky.sh\"

npm run type-check" > .husky/pre-push
chmod +x .husky/pre-push
```

- 或直接编辑 `.husky/pre-push` 文件写入命令并保证可执行  

---

## 在 `npx husky install` 后添加 pre-commit 检查 TypeScript
## 修改 `pre-commit` 检查 TypeScript

1. 打开 `.husky/pre-commit` 文件，修改内容为：

```bash
#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

2. 在 `package.json` 配置 `lint-staged`：

```json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

- 提交代码时，Husky 会触发 pre-commit 钩子自动检查和格式化 TS/TSX 文件。

## 初始化方式比较

| 命令 | 功能 | 适用场景 |
|------|------|---------|
| `npx husky-init` | 快速初始化 Husky、创建默认 pre-commit、增加 prepare 脚本 | 新项目、快速上手、开箱即用 |
| `npx husky install` | 仅安装 Husky hook 系统，不创建默认 hook | 老项目、手动管理 hook、升级 Husky |

> 总结：`husky-init` 更适合新项目，直接生成模板文件并准备好 pre-commit；`husky install` 更低层，适合已有项目或需要手动管理钩子的场景。  
