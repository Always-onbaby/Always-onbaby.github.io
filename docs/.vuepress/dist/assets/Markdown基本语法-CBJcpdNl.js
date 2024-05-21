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
provide 和 inject //依赖和注入系统\r
//增加一个入口区实现需要新加的功能和迭代\r
\r
//总之需要积极向上，运动起来，保持良好的身材，不奢求做到6块8块腹肌啥的，最起码的不要看着大腹便便的，肌肉松松垮垮的，中年油腻。\r
//恢复在上5:30起床跑步的习惯，晚上做几组仰卧起坐，俯卧撑，平板支撑啥的。加上上下班的25KM骑行运动，我估计一天的运动量也就差不多了。\r
//每天都这么坚持着，不受伤，不偷懒，一个月，最迟二个月都估计就会看到明显的效果了。当然还有最重要的一点就是控制好饮食习惯。\r
//早餐准备一瓶500ml的纯净水，两个水煮鸡蛋，小瓶纯牛奶或者酸奶，中午吃带过来的饭菜（妈妈准备的），晚上饭就不吃了，最多弄点水果，冲杯牛奶啥的。不碰碳水化合物，什么营养的，可乐的，补充能量的，补充盐水的，通通滚蛋，纯净水最好。控酒戒烟，酒水不是聚会或者必要的条件下酒不要喝了，啤酒，白酒，红酒都一样。烟的话也得戒掉，当然这肯定是一个长期的过程，我相信运动起来的话，烟也就自然而然的戒掉了，因为吸烟很影响运动。\r
//什么时候能到真性情，随心随性\r
\`\`\`\r
\r
\`\`\`javascript\r
function resolveAfterTwoSeconds() {\r
  return new Promise((resolve) => {\r
    setTimeout(() => {\r
      resolve();\r
    }, 2000);\r
  });\r
}\r
async function asyncCall() {\r
  console.log("calling");\r
  const result = await resolveAfterTwoSeconds();\r
  console.log(result);\r
}\r
asyncCall();\r
\`\`\`\r
`;export{r as default};
