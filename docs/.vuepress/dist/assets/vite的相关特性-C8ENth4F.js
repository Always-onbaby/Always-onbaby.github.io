const n=`#### JSON\r
\r
\`json\`在 vite 中可以被直接导入，同时也支持具名导入\r
\r
\`\`\`js\r
// 导入整个Json对象\r
import json form './example.json'\r
\r
// 具名导入，有利于构建时的treeshaking\r
import {filed} from './example.json'\r
\`\`\`\r
`;export{n as default};
