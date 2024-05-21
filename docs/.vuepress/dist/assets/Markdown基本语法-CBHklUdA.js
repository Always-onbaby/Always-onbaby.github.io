const r=`### 基本语法\r
\r
---\r
\r
#### 代码\r
\r
如果你只想高亮语句中的某些关键字或者函数名，可以使用反引号\`function_name\`实现。  \r
通常编辑器会根据代码片段匹配适合的高亮方法，也可以使用 \` 包裹代码，指定语言\r
\r
\`\`\`javascript\r
\${document}.ready(function() {\r
    alert('hello world')\r
})\r
\`\`\`\r
\r
#### 标题\r
\r
文章较长时，使用标题分级\r
\r
\`\`\`javascript\r
## 大标题\r
### 中标题\r
#### 小标题\r
\`\`\`\r
\r
#### 粗体、斜体\r
\r
\`\`\`javascript\r
***粗体完本***\r
\`\`\`\r
\r
#### 链接\r
\r
JS 模块的导入导出。\r
\r
\`\`\`javascript\r
import { formateDate } from "utils";\r
\r
// 基本的增删改查，没有组件库和工具库\r
\`\`\`\r
`;export{r as default};
