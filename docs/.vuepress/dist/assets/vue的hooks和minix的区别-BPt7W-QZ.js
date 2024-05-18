const n=`Vue 的\`Hooks\`和\`Minix\`是 Vue 框架中实现组件和逻辑共享的两种不同机制

### Hooks(钩子函数)

Hooks 是通过在组件中使用函数式编程的方式来实现逻辑的复用。\`Hooks\`可以让我们在组件中定义可复用的逻辑，并在多个组件中共享。常见的 Hooks 包含\`beforeCreate\`,\`created\`,\`beforeMounted\`,\`mounted\`等

### Minix(混入)

Minix 是通过通过对象混入的方式实现逻辑复用。通过将一些公共的选项，方法或者生命周期函数定义在一个对象中，组件通过\`minixs\`选项将对象混入其中从而实现共享和复用

### 区别

- Hooks 是在\`Vue2.6\`引入的新特性，在这之前使用 minix 混入来实现
- Hooks 使用函数式编程的方式实现，minix 则使用对象混入的方式

### Hooks 生命周期的执行顺序

Hooks 的生命周期和组件的生命周期执行顺序遵循同级别的钩子函数谁先创建谁先执行

\`\`\`javascript
import { ref, onMounted, onBeforeUnmount, onUnmounted } from "vue";
export const useAdd = () => {
  const a = ref(1);
  setInterval(() => {
    a.value++;
  }, 1000);
  onMounted(() => {
    console.log("hooks---onMounted");
  });
  onBeforeUnmount(() => {
    console.log("hooks---onMounted");
  });
  onUnmounted(() => {
    console.log("hooks---onUnmounted");
  });

  return a;
};
\`\`\`

然后在组件中也引入这些钩子函数

\`\`\`javascript
<template>
  <div>{{ a }}</div>
</template>

<script lang="ts" setup>
import { useAdd } from "../hooks/useTest";
import { onMounted, onBeforeUnmount, onUnmounted } from "vue";

onMounted(() => {
  console.log("组件---onMounted");
});
onBeforeUnmount(() => {
  console.log("组件---onBeforeUnmount");
});
onUnmounted(() => {
  console.log("组件---onUnmounted");
});
const a = useAdd();
<\/script>
\`\`\`

执行的顺序

\`\`\`javascript
组件---onMounted
hooks---onMounted
组件---onBeforeUnmount
hooks--onBeforeUnmount
组件--onUnmounted
hooks--onUnmounted
\`\`\`
`;export{n as default};
