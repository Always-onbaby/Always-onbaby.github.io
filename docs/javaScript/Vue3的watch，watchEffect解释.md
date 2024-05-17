### watch 的使用

#### 语法

```javascript
import { watch } from "vue";
watch(name, (cur, pre) => {}, options);
```

`watch()`默认是懒侦听的，即仅在侦听源发生变化时才执行回调函数。
第一个元素是侦听的源

- 源可以是一个函数，返回一个值
- 一个 ref
- 一个响应式对象
- 也可以是以上元素的集合

第二个参数是源发生变化时的回调函数

- 接受三个参数，新值、旧值、以及一个用于注册副作用清理的回调函数。该函数会在下一次副作用执行前调用，可以用来清除无效的副作用，如等待中的异步请求。
- 当侦听多个来源时,回调函数接受两个数组，分别对应来源数组中的新值和旧值。

第三个参数是可选的配置对象

- `immediate`,在侦听器创建时立即执行。第一次回调的旧值为`undefined`
- `deep`,当源是一个对象时，deep 默认为 false,需要深度监听对象属性的变化时，可设置为 true。
- `flush`,调整回调函数的刷新时机
- `onTrack/onTrigger`,调试侦听器的依赖。
- `once`,回调函数只执行一次，侦听器将在回调函数执行一次后停止。

```javascript
// 侦听一个getter函数
const state = reactive({ count: 0 });

watch(
  () => state.count,
  (cur, pre) => {
    /**... */
  }
);

// 侦听一个ref,当直接侦听一个响应式时，侦听器默认启用深层模式
const count = ref(0);

watch(count, (cur, pre) => {
  /**... */
});

// 侦听多个来源
watch([fooRef, barRef], ([foo, bar], [preFoo, proBar]) => {
  /**do something */
});

// 停止侦听器
const stop = watch(source, callback);

stop();

// 副作用清理
watch(id, async (newId, oldId, onCleanup) => {
  const { response, cancel } = doAsyncWork(newId);
  /**当id变化时，cancel将被调用 */
  /**取消之前未完成的请求 */
  onCleanup(cancel);
  data.value = await response;
});
```

### watchEffect()

立即运行一个函数，同时响应式地追踪其依赖，并在依赖更新时重新执行。

- 第一个参数就是要运行的副作用函数。函数的参数也是一个函数，用来注册清理回调。清理回调会在该副作用下一次执行前被调用，可以用来清理无效的副作用，例如等待中的异步请求
- 第二个参数是一个可选的选项，用来调整副作用的刷新时机和调试副作用的依赖。

```javascript
const count = ref(0);

watchEffect(() => console.log(count.value));
// -> 输出 0

count.value++;
// -> 输出 1

watchEffect(async (onCleanup) => {
  const { response, cancel } = doAsyncWork(id.value);
  // `cancel` 会在 `id` 更改时调用
  // 以便取消之前
  // 未完成的请求
  onCleanup(cancel);
  data.value = await response;
});

// 停止侦听器
const stop = watchEffect(() => {});

// 当不再需要此侦听器时:
stop();
```
