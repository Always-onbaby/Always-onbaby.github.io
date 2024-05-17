### 格式化

与其他贡献者共享代码时，你最不想做的事就是争论代码缩进应该使用 tabs 还是空格！幸好，Prettier 会根据预设配置的规则重新格式化代码，以保证代码整洁。运行 Prettier，你的所有 tabs 都将转换为空格，同时缩进、引号等也都将根据你的配置而改变。理想状态下，当你保存文件时，Prettier 会自动执行格式化操作。

- 使用快捷键`Ctrl/Cmd + P`快速打开推展管理
- 粘贴`ext install esbenp.prettier-vscode`
- 使用回车键安装

### 保存并自动格式化

理想情况下，你应该在每次保存时自动格式化代码。VS Code 就包含该配置!

- 使用快捷键`Ctrl/Cmd + Shift + P`快速打开首选项
- 输入`settings`
- 回车
- 搜索栏输入`format on save`并勾选

```
如果你的 ESLint 预设包含格式化规则，它们可能会与 Prettier 发生冲突。我们建议使用`eslint-config-prettier` 禁用你 ESLint 预设中的所有格式化规则，这样 ESLint 就只用于捕捉逻辑错误。如果你想在合并 PR 前强制执行文件的格式化，请在你的 CI 中使用 `prettier --check` 命令
```
