#### watchEffect 的使用

侦听器的回调使用与源完全相同的响应式状态是很常见的。在下面的代码中，每当`todoId`的引用发生变化时使用侦听器来加载一个远程资源

```javascript
const todoId = ref(1);
const data = ref(null);

watch(
  todoId,
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
    data.value = await response.json();
  },
  { immediate: true }
);
```

在上面的示例中，侦听器两次使用`todoId`,一次是作为源，一次是在回调中，像这种情况，我们可以使用`watchEffect`来简化我们的代码

```javascript
watchEffect(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
  data.value = await response.json();
});
```

在这个例子中，回调会立即执行，不需要显示申明`immediate:true`,在执行期间，它会自动追踪`todoId.value`作为依赖(和计算属性类似)。每当`todoId.value`变化时，回调会再次调用。
