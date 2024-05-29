#### reactive

`reactive`方法是用来创建一个响应式的数据对象，该 API 也很好的解决了`defineProperty`实现数据响应式的缺陷

```vue
<template>
  <div id="app">
    <!-- 4. 访问响应式数据对象中的 count  -->
    {{ state.count }}
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    const state = reactive({ count: 3 });
    /**3. 将响应式数据对象state return 出去，供template使用 */
    return { state };
  },
};
</script>
```

#### ref

本质上`ref`就是通过`reactive`包装一个对象，然后是将值传给该对象的`value`属性，这也是每次访问`ref`定义的值都需要`.value`访问的原因,我们可以简单的把`ref({})`理解为`reactive({value:obj})`

- 基本类型值（`String` 、`Number` 、`Boolean` 等）或单值对象（类似像 `{count: 3}` 这样只有一个属性值的对象）使用 `ref`
- 引用类型值（`Object` 、`Array`）使用 `reactive`

<!-- 这个基本上是一致的，没有本质上的不同 -->
