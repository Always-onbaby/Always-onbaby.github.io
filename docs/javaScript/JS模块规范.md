#### commonJS

- 模块可以多次加载，但只会在第一次加载时运行，然后运行的结果会被缓存，后面的加载直接读取缓存。
- 模块的加载会阻塞进程，同步加载
- 导入 `require` 导出`module.exports` 和`exports`

```javascript
// a.js
// 相当于这里还有一行：var exports = module.exports;代码
exports.a = "Hello world"; // 相当于：module.exports.a = 'Hello world';

// b.js
var moduleA = require("./a.js");
console.log(moduleA.a); // 打印出hello world
```

#### AMD

- 异步加载
- 导入`require`,导出`define(function(return ''))`

```javascript
// a.js
define(function () {
  return {
    a: "hello world",
  };
});
// b.js
require(["./a.js"], function (moduleA) {
  console.log(moduleA.a); // 打印出：hello world
});
```

#### CMD

- CMD 是在 AMD 基础上改进的一种规范，和 AMD 不同在于对依赖模块的执行时机处理不同，CMD 是就近依赖，而 AMD 是前置依赖。\
- 导入：`define(function(require, exports, module) {})`;
- 导出：`define(function (){return '值'})`;

```javascript
// a.js
define(function (require, exports, module) {
  exports.a = "hello world";
});
// b.js
define(function (require, exports, module) {
  var moduleA = require("./a.js");
  console.log(moduleA.a); // 打印出：hello world
});
```

#### UMD

- 兼容 AMD 和 commonJS 规范的同时，还兼容全局引用的方式

```javascript
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    //AMD
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    //Node, CommonJS之类的
    module.exports = factory(require("jquery"));
  } else {
    //浏览器全局变量(root 即 window)
    root.returnExports = factory(root.jQuery);
  }
})(this, function ($) {
  //方法
  function myFunc() {}
  //暴露公共方法
  return myFunc;
});
```

#### ES6 module

- 按需加载（编译时加载）
- `import`和`export`命令只能在模块的顶层，不能在代码块之中（如：if 语句中）,`import()`语句可以在代码块中实现异步动态按需动态加载
- 导入：import {模块名 A，模块名 B...} from '模块路径'
- 导出：`export`和`export default`
- import('模块路径').then()方法
- `export`只支持对象形式导出，不支持值的导出，`export default`命令用于指定模块的默认输出，只支持值导出，但是只能指定一个，本质上它就是输出一个叫做`default`的变量或方法

```javascript
/*错误的写法*/
// 写法一
export 1;

// 写法二
var m = 1;
export m;

// 写法三
if (x === 2) {
  import MyModual from './myModual';
}

/*正确的三种写法*/
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};

// 写法四
var n = 1;
export default n;

// 写法五
if (true) {
    import('./myModule.js')
    .then(({export1, export2}) => {
      // ...·
    });
}

// 写法六
Promise.all([
  import('./module1.js'),
  import('./module2.js'),
  import('./module3.js'),
])
.then(([module1, module2, module3]) => {
   ···
});
```
