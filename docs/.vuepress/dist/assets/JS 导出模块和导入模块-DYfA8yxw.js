const n=`### JS 模块的导入

#### 在 JavaScript 中，\`import aa\` 和 \`import { aa }\` 是两种不同的导入语法形式，它们有一些区别。

\`\`\`javascript
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { default as alias } from "module-name";
import { export1, export2 } from "module-name";
import { export1, export2 as alias2 /* … */ } from "module-name";
import { "string name" as alias } from "module-name";
import defaultExport, { export1 /* … */ } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
\`\`\`

1.  \`import aa\`：这是默认导入的语法形式，用于导入一个模块的默认导出。例如：
    \`\`\`javascript
    import aa from "module";
    \`\`\`
    这样导入的是 \`module\` 模块的默认导出，可以使用 \`aa\` 这个变量来访问导出的内容。
2.  \`import { aa }\`：这是命名导入的语法形式，用于从一个模块中导入指定的变量或函数。例如：

    \`\`\`javascript
    import { aa } from "module";
    \`\`\`

    这样导入的是 \`module\` 模块中被命名为 \`aa\` 的导出内容，可以直接使用 \`aa\` 这个变量访问导出的内容。

3.  需要注意的是，当一个模块既有默认导出又有命名导出时，可以同时使用这两种导入语法：

    \`\`\`javascript
    import aa, { bb } from "module";
    \`\`\`

    这样既导入了 \`module\` 模块的默认导出，也导入了其中被命名为 \`bb\` 的导出内容。

4.  仅作为一个副作用导入一个模块
    \`\`\`javascript
    import "./modules/my-modules.ts";
    \`\`\`
    整个模块仅作为副作用导入，而不导入模块中的具体内容。直接运行模块中的全部代码

总结起来，\`import aa\` 是默认导入语法形式，导入模块的默认导出；而 \`import { aa }\` 是命名导入语法形式，导入模块中指定的变量或函数。

### JS 模块的导出

#### 在 JavaScript 中，导出模块有两种常见的语法形式：默认导出和命名导出，它们之间有一些区别。

1.  默认导出（Default Export）：使用 \`export default\` 关键字将一个值或对象作为模块的默认导出。一个模块只能有一个默认导出，使用者可以自由地为默认导出命名。例如：

    \`\`\`javascript
    // 模块A.js
    const aa = 1;
    export default aa;

    // 导入时可以随意命名
    // 导入模块A.js的默认导出
    import xyz from "./模块A.js";
    \`\`\`

2.  命名导出（Named Export）：使用 \`export\` 关键字将变量、函数、类等通过命名导出。一个模块可以有多个命名导出，导入时需要使用相应的名称来引用导出的内容。例如：

    \`\`\`javascript
    // 模块B.js
    export const bb = 2;
    export function foo() {}

    // 导入时需要使用相应的名称
    // 导入模块B.js的命名导出
    import { bb, foo } from "./模块B.js";
    \`\`\`

需要注意的是，在导入时，对于默认导出可以使用任意的变量名或别名，而对于命名导出则必须使用导出时所使用的名称。另外，一般情况下可以同时使用默认导出和命名导出的语法。

综上所述，使用 \`export default\` 导出的是模块的默认导出，而使用 \`export\` 导出的是模块的命名导出。这两种导出方式有不同的使用方法和语法规则。
`;export{n as default};
