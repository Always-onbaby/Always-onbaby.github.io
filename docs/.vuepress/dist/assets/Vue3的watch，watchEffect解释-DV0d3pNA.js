const n=`### watch 的使用\r
\r
#### 语法\r
\r
\`\`\`javascript\r
import { watch } from "vue";\r
watch(name, (cur, pre) => {}, options);\r
\`\`\`\r
\r
\`watch()\`默认是懒侦听的，即仅在侦听源发生变化时才执行回调函数。\r
第一个元素是侦听的源\r
\r
- 源可以是一个函数，返回一个值\r
- 一个 ref\r
- 一个响应式对象\r
- 也可以是以上元素的集合\r
\r
第二个参数是源发生变化时的回调函数\r
\r
- 接受三个参数，新值、旧值、以及一个用于注册副作用清理的回调函数。该函数会在下一次副作用执行前调用，可以用来清除无效的副作用，如等待中的异步请求。\r
- 当侦听多个来源时,回调函数接受两个数组，分别对应来源数组中的新值和旧值。\r
\r
第三个参数是可选的配置对象\r
\r
- \`immediate\`,在侦听器创建时立即执行。第一次回调的旧值为\`undefined\`\r
- \`deep\`,当源是一个对象时，deep 默认为 false,需要深度监听对象属性的变化时，可设置为 true。\r
- \`flush\`,调整回调函数的刷新时机\r
- \`onTrack/onTrigger\`,调试侦听器的依赖。\r
- \`once\`,回调函数只执行一次，侦听器将在回调函数执行一次后停止。\r
\r
\`\`\`javascript\r
// 侦听一个getter函数\r
const state = reactive({ count: 0 });\r
\r
watch(\r
  () => state.count,\r
  (cur, pre) => {\r
    /**... */\r
  }\r
);\r
\r
// 侦听一个ref,当直接侦听一个响应式时，侦听器默认启用深层模式\r
const count = ref(0);\r
\r
watch(count, (cur, pre) => {\r
  /**... */\r
});\r
\r
// 侦听多个来源\r
watch([fooRef, barRef], ([foo, bar], [preFoo, proBar]) => {\r
  /**do something */\r
});\r
\r
// 停止侦听器\r
const stop = watch(source, callback);\r
\r
stop();\r
\r
// 副作用清理\r
watch(id, async (newId, oldId, onCleanup) => {\r
  const { response, cancel } = doAsyncWork(newId);\r
  /**当id变化时，cancel将被调用 */\r
  /**取消之前未完成的请求 */\r
  onCleanup(cancel);\r
  data.value = await response;\r
});\r
\`\`\`\r
\r
### watchEffect()\r
\r
立即运行一个函数，同时响应式地追踪其依赖，并在依赖更新时重新执行。\r
\r
- 第一个参数就是要运行的副作用函数。函数的参数也是一个函数，用来注册清理回调。清理回调会在该副作用下一次执行前被调用，可以用来清理无效的副作用，例如等待中的异步请求\r
- 第二个参数是一个可选的选项，用来调整副作用的刷新时机和调试副作用的依赖。\r
\r
\`\`\`javascript\r
const count = ref(0);\r
\r
watchEffect(() => console.log(count.value));\r
// -> 输出 0\r
\r
count.value++;\r
// -> 输出 1\r
\r
watchEffect(async (onCleanup) => {\r
  const { response, cancel } = doAsyncWork(id.value);\r
  // \`cancel\` 会在 \`id\` 更改时调用\r
  // 以便取消之前\r
  // 未完成的请求\r
  onCleanup(cancel);\r
  data.value = await response;\r
});\r
\r
// 停止侦听器\r
const stop = watchEffect(() => {});\r
\r
// 当不再需要此侦听器时:\r
stop();\r
\`\`\`\r
`;export{n as default};
