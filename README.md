# Easy · Electron + Vue 3 + TypeScript + Vite 桌面应用脚手架

一个开箱即用的桌面端应用模板，基于 Electron + Vue 3 + TypeScript + Vite，内置 Element Plus、Vue Router 与 electron-builder 打包配置。适合快速搭建跨平台的桌面工具类应用。

- 产品名：Easy（package.json: build.productName）
- 包名：easytools
- 打包器：electron-builder（Windows NSIS、macOS dmg/zip 已配置）

## 功能特性

- Electron 主进程与预加载脚本，开发时自动打开 DevTools，打包后隐藏菜单栏
- Vite 前端开发服务，热更新速度快，生产环境静态资源按需构建
- Vue 3 + TypeScript 开发体验，使用 `<script setup>` 与类型检查（vue-tsc）
- 内置 Element Plus UI 组件库
- Vue Router 路由示例（主页 / 视频 / 关于）
- 一条命令同时启动 Vite 与 Electron（concurrently + wait-on）
- electron-builder 打包配置完善，支持自定义图标与安装器行为

## 现有功能（用户可见）

- 布局：左侧固定功能栏 + 右侧内容区
- 顶部应用信息：Logo + 版本号（0.0.0）
- 路由导航：主页（/）、视频（/video）、关于（/about）
- 使用 Element Plus 按钮作为导航入口

## 目录结构

```
.
├─ electron/               # Electron 主进程与预加载
│  ├─ main.js              # 创建 BrowserWindow、加载 Vite/打包产物
│  └─ preload.js           # 预加载脚本（向渲染进程安全暴露信息）
├─ public/                 # 应用图标与公共资源（打包时直接复制）
├─ src/                    # 前端代码（Vue 3 + TS）
│  ├─ App.vue              # 布局：左侧功能栏 + 路由视图
│  ├─ main.ts              # 前端入口，挂载 Element Plus 与路由
│  ├─ router/              # 路由配置（Home/Video/About 示例）
│  └─ views/               # 页面示例
├─ package.json            # 脚本与 electron-builder 配置
├─ vite.config.ts          # Vite 配置
└─ README.md
```

## 环境要求

- Node.js 16+（建议 18+）
- Yarn（推荐）
- macOS / Windows / Linux 任一平台（打包请在目标平台执行）

## 快速开始

1. 安装依赖

```bash
yarn
```

2. 开发与调试（同时启动 Vite 与 Electron）

```bash
yarn dev
```

- 渲染进程：Vite 以 http://127.0.0.1:5173 提供服务
- 主进程：Electron 等待 Vite 就绪后启动，并在开发环境自动打开 DevTools

3. 生产构建与打包

```bash
# 默认打包（当前平台）
yarn build

# 仅构建前端（不打包 Electron）
yarn vite:build

# macOS 专用（在 macOS 上执行）
yarn build:mac
```

打包产物默认输出至 `dist_electron` 目录，前端构建产物在 `dist`。

## 开发说明

- 主进程入口：`electron/main.js`
  - 开发环境：加载 `http://127.0.0.1:5173/`
  - 生产环境：加载打包后 `dist/index.html`
- 预加载脚本：`electron/preload.js`
- 渲染进程入口：`src/main.ts`
- UI 组件库：Element Plus（在 `main.ts` 中注册）
- 路由：`src/router/index.ts`（Hash 模式）
- 示例页面：`src/views/Home.vue`、`src/views/Video.vue`、`src/views/About.vue`

## 打包配置要点（electron-builder）

见 `package.json` 中的 `build` 字段：
- `appId`、`productName`、`icon` 可按需修改
- Windows：使用 NSIS 安装器（支持自定义安装目录）
- macOS：输出 dmg 与 zip 包
- `files` 指定包含 `dist/**/*`（前端）与 `electron/**/*`（主进程）
- `directories.output`: `dist_electron`

## 推荐的 IDE 设置

- VS Code + Volar（禁用 Vetur）+ TypeScript Vue 插件（Volar）
- TypeScript 无法直接识别 `.vue` 的类型，因此使用 `vue-tsc` 做类型检查
- 如果你觉得独立的 TypeScript 插件不够快，可以启用 Volar 的 Take Over 模式：
  1) 禁用内置的 TypeScript 扩展（命令面板：Extensions: Show Built-in Extensions，找到“TypeScript and JavaScript Language Features”，选择 Disable (Workspace)）
  2) 运行命令面板 `Developer: Reload Window` 重新加载窗口

## 常见问题

- 端口占用：Vite 默认端口为 5173，可在 `vite.config.ts` 中自定义 server.port
- 图标不生效：确认 `package.json -> build.icon` 指向了存在的图标文件
- 打包跨平台：建议在目标系统上打包（例如 Windows 包在 Windows 上打）

## 许可证

MIT
