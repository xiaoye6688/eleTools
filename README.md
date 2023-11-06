# Vue 3 + TypeScript + Vite

这个模板可以帮助你开始使用 Vue 3 和 TypeScript 在 Vite 中进行开发。该模板使用 Vue 3 的 `<script setup>` 单文件组件（SFC），请查看 [script setup 文档](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) 以了解更多信息。

## 推荐的 IDE 设置

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（禁用 Vetur）+ [TypeScript Vue 插件（Volar）](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)。

## 在 TS 中支持 `.vue` 导入的类型

TypeScript 默认情况下不能处理 `.vue` 导入的类型信息，因此我们使用 `vue-tsc` 替换了 `tsc` CLI 用于类型检查。在编辑器中，我们需要 [TypeScript Vue 插件（Volar）](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) 来使 TypeScript 语言服务能够识别 `.vue` 类型。

如果你觉得独立的 TypeScript 插件不够快，Volar 还实现了一种 [Take Over 模式](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) ，它性能更高。你可以按照以下步骤启用它：

1. 禁用内置的 TypeScript 扩展
   1. 在 VSCode 命令面板中运行 `Extensions: Show Built-in Extensions`
   2. 找到 `TypeScript and JavaScript Language Features`，右键单击并选择 `Disable (Workspace)`
2. 通过运行命令面板中的 `Developer: Reload Window` 重新加载 VSCode 窗口。

<!-- 安装依赖命令yarn -->
## 安装依赖

```bash
yarn
```
<!-- 调试 yarn electron:serve  -->
## 调试

```bash
yarn dev
```

<!-- 打包 yarn electron:build -->
## 打包

```bash
yarn build
```