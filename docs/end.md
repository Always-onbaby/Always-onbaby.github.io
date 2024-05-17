### Rollup

Rollup
Rollup 是一个 JavaScript 模块打包器，它可以将多个模块打包成一个单独的文件。

- input（输入）: 这是你的项目的入口点（即主要的 JavaScript 文件）。Rollup 会从这个文件开始分析你的代码，并尝试找出它依赖的其他模块。

  ```javascript
  input: "src/main.js";
  ```

- output（输出）: 这指定了 Rollup 打包后生成的文件的设置。

  - file: 指定打包后的输出文件的路径和名称。
  - format: 指定打包后的文件的模块格式，比如 ‘cjs’ (CommonJS), ‘es’ (ES module), ‘umd’, ‘iife’ 等。
  - name (可选): 当 format 为 ‘umd’ 或 ‘iife’ 时，指定全局变量的名称。

  ```javascript
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'MyLibrary'
  }

  ```

- plugins（插件）: Rollup 的强大之处在于其插件系统，它允许你在打包过程中执行各种操作，例如代码转换、文件拷贝、压缩等等。常见的插件包括` @rollup/plugin-commonjs` (用于处理 CommonJS 模块) 和 `@rollup/plugin-node-resolve` (用于解析模块路径)。
  ```javascript
  plugins: [commonjs(), resolve()];
  ```
- external（外部依赖）: 当你打包的代码依赖于外部库（例如 lodash 或 React），你可以将它们列在 external 中，这样 Rollup 就不会将它们打包进最终的输出文件中，而是保留对它们的引用。
  ```javascript
  external: ["lodash", "react"];
  ```
- watch（监视模式）: 这个配置项告诉 Rollup 在文件发生变化时重新构建你的代码。在开发过程中，这非常有用。
  ```javascript
  watch: {
    clearScreen: false;
  }
  ```

### vite

vite 最大的特点是利用 esm，让代码不像传统的构建工具一样去分析引入，打包构建，而是直接保持模块化，这样省去了大量的编译时间，让代码更改后的响应速度大量提升
构建方面，vite 其实使用的是 rollup

本身已经集成了大部分的配置，比如各种预处理语言，ts，各种资源。自带模板仓库 `npm create vite@latest my-vue-app -- --template vue`，本身就可以当做脚手架使用。webpack 只是提供了打包，vue-cli 脚手架内也只是提供了一套模板，内部集成 webpack，供开发使用。

以下是 Vite 的核心配置：

- root（根目录）: 指定项目的根目录。

```javascript
root: "./src";
```

- base（基础路径）: 指定应用被部署时的基础 URL 路径。它通常用于处理构建后资源在不同路径部署的情况。

```javascript
base: "/my-app/";
```

- publicDir（静态资源目录）: 指定存放静态资源文件的目录。这些资源文件在构建时会被复制到输出目录。

```javascript
publicDir: "public";
```

- build（构建配置）: 指定构建选项，包括输出目录、是否开启 sourcemap、是否开启压缩等等。
  outDir: 指定构建输出目录。
  sourcemap: 是否生成 sourcemap。
  minify: 是否开启压缩。
  assetsDir: 指定输出的静态资源文件目录。

```javascript
  build: {
  outDir: 'dist',
  sourcemap: true,
  minify: 'terser',
  assetsDir: 'assets'
  }
```

- server（开发服务器配置）: 指定开发服务器的配置选项，例如监听的端口、是否开启 HTTPS 等。
  port: 指定服务器监听的端口。
  https: 是否开启 HTTPS。
  proxy: 配置代理，用于解决跨域问题。

  ```javascript
  server: {
  port: 3000,
  https: false,
  proxy: {
  '/api': {
  target: 'http://localhost:8000',
  changeOrigin: true,
  rewrite: (path) => path.replace(/^\/api/, '')
  }
  }
  }
  ```

- plugins（插件）: Vite 支持通过插件来扩展其功能，例如处理 CSS、处理 TypeScript 等。你可以在这里配置需要使用的插件。

```javascript
plugins: [vue(), css(), typescript()];
```
