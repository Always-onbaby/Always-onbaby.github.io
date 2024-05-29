const r=`#### commonJS\r
\r
- 模块可以多次加载，但只会在第一次加载时运行，然后运行的结果会被缓存，后面的加载直接读取缓存。\r
- 模块的加载会阻塞进程，同步加载\r
- 导入 \`require\` 导出\`module.exports\` 和\`exports\`\r
\r
\`\`\`javascript\r
// a.js\r
// 相当于这里还有一行：var exports = module.exports;代码\r
exports.a = "Hello world"; // 相当于：module.exports.a = 'Hello world';\r
\r
// b.js\r
var moduleA = require("./a.js");\r
console.log(moduleA.a); // 打印出hello world\r
\`\`\`\r
\r
#### AMD\r
\r
- 异步加载\r
- 导入\`require\`,导出\`define(function(return ''))\`\r
\r
\`\`\`javascript\r
// a.js\r
define(function () {\r
  return {\r
    a: "hello world",\r
  };\r
});\r
// b.js\r
require(["./a.js"], function (moduleA) {\r
  console.log(moduleA.a); // 打印出：hello world\r
});\r
\`\`\`\r
\r
#### CMD\r
\r
- CMD 是在 AMD 基础上改进的一种规范，和 AMD 不同在于对依赖模块的执行时机处理不同，CMD 是就近依赖，而 AMD 是前置依赖。\\\r
- 导入：\`define(function(require, exports, module) {})\`;\r
- 导出：\`define(function (){return '值'})\`;\r
\r
\`\`\`javascript\r
// a.js\r
define(function (require, exports, module) {\r
  exports.a = "hello world";\r
});\r
// b.js\r
define(function (require, exports, module) {\r
  var moduleA = require("./a.js");\r
  console.log(moduleA.a); // 打印出：hello world\r
});\r
\`\`\`\r
\r
#### UMD\r
\r
- 兼容 AMD 和 commonJS 规范的同时，还兼容全局引用的方式\r
\r
\`\`\`javascript\r
(function (root, factory) {\r
  if (typeof define === "function" && define.amd) {\r
    //AMD\r
    define(["jquery"], factory);\r
  } else if (typeof exports === "object") {\r
    //Node, CommonJS之类的\r
    module.exports = factory(require("jquery"));\r
  } else {\r
    //浏览器全局变量(root 即 window)\r
    root.returnExports = factory(root.jQuery);\r
  }\r
})(this, function ($) {\r
  //方法\r
  function myFunc() {}\r
  //暴露公共方法\r
  return myFunc;\r
});\r
\`\`\`\r
\r
#### ES6 module\r
\r
- 按需加载（编译时加载）\r
- \`import\`和\`export\`命令只能在模块的顶层，不能在代码块之中（如：if 语句中）,\`import()\`语句可以在代码块中实现异步动态按需动态加载\r
- 导入：import {模块名 A，模块名 B...} from '模块路径'\r
- 导出：\`export\`和\`export default\`\r
- import('模块路径').then()方法\r
- \`export\`只支持对象形式导出，不支持值的导出，\`export default\`命令用于指定模块的默认输出，只支持值导出，但是只能指定一个，本质上它就是输出一个叫做\`default\`的变量或方法\r
\r
\`\`\`javascript\r
/*错误的写法*/\r
// 写法一\r
export 1;\r
\r
// 写法二\r
var m = 1;\r
export m;\r
\r
// 写法三\r
if (x === 2) {\r
  import MyModual from './myModual';\r
}\r
\r
/*正确的三种写法*/\r
// 写法一\r
export var m = 1;\r
\r
// 写法二\r
var m = 1;\r
export {m};\r
\r
// 写法三\r
var n = 1;\r
export {n as m};\r
\r
// 写法四\r
var n = 1;\r
export default n;\r
\r
// 写法五\r
if (true) {\r
    import('./myModule.js')\r
    .then(({export1, export2}) => {\r
      // ...·\r
    });\r
}\r
\r
// 写法六\r
Promise.all([\r
  import('./module1.js'),\r
  import('./module2.js'),\r
  import('./module3.js'),\r
])\r
.then(([module1, module2, module3]) => {\r
   ···\r
});\r
\`\`\`\r
`;export{r as default};
