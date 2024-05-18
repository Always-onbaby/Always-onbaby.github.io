const n=`### 依赖注入

组件的\`props\`需要逐级向下传递，使用\`provide\`和\`inject\`。一个父组件相对其所有的后代组件，会作为\`依赖提供者\`。任何后代组件树，无论层级有多深，都可以\`注入\`由父组件提供的整条链路的依赖。

#### provide（提供）

要为组件后代提供数据，需要使用到 \`provide()\` 函数

\`\`\`js
<script setup>import {provide} from 'vue' provide(/* 注入名 */ 'message', /* 值 */ 'hello!')<\/script>
\`\`\`

如果不使用 \`<script setup>\`，请确保 \`provide()\` 是在 \`setup()\` 同步调用的

\`\`\`js
import { provide } from "vue";

export default {
  setup() {
    provide(/* 注入名 */ "message", /* 值 */ "hello!");
  },
};
\`\`\`

\`provide()\` 函数接收两个参数。第一个参数被称为注入名，可以是一个字符串或是一个 \`Symbol\`。后代组件会用注入名来查找期望注入的值。一个组件可以多次调用 \`provide()\`，使用不同的注入名，注入不同的依赖值  
第二个参数是提供的值，值可以是任意类型,包括响应式的状态。  
提供的响应式状态使后代组件可以由此和提供者建立响应式的联系

\`\`\`js
import { ref, provide } from "vue";

const count = ref(0);
provide("key", count);
\`\`\`

#### 应用层的 Provide

除了在一个组件中提供依赖，我们还可以为整个应用层提供依赖。

\`\`\`js
import { createApp } from "vue";

const app = createApp({});

app.provide(/* 注入名 */ "message", /* 值 */ "hello!");
\`\`\`

#### Inject（注入）

要注入上层组件提供的数据，需要使用\`inject()\`函数

\`\`\`js
<script setup>import {inject} from 'vue' const message = inject('message')<\/script>
\`\`\`

如果提供的值是一个 \`ref\`，注入进来的会是该 \`ref\` 对象，而不会自动解包为其内部的值。这使得注入方组件能够通过 \`ref\` 对象保持了和供给方的响应性链接  
同样的，如果没有使用 \`<script setup>\`，\`inject()\` 需要在 \`setup()\` 内同步调用

\`\`\`js
import { inject } from "vue";

export default {
  setup() {
    const message = inject("message");
    return { message };
  },
};
\`\`\`

#### 注入默认值

默认情况下，\`inject\` 假设传入的注入名会被某个祖先链上的组件提供。如果该注入名的确没有任何组件提供，则会抛出一个运行时警告。
如果在注入一个值时不要求必须有提供者，那么我们应该声明一个默认值，和 \`props\` 类似

\`\`\`js
// 如果没有祖先组件提供 "message"
// \`value\` 会是 "这是默认值"
const value = inject("message", "这是默认值");
\`\`\`

在一些场景中，默认值可能需要通过调用一个函数或初始化一个类来取得。为了避免在用不到默认值的情况下进行不必要的计算或产生副作用，我们可以使用工厂函数来创建默认值

\`\`\`js
const value = inject("key", () => new ExpensiveClass(), true);
\`\`\`

#### 和响应式数据配合使用

当提供 / 注入响应式的数据时，\`建议尽可能将任何对响应式状态的变更都保持在供给方组件中\`。这样可以确保所提供状态的声明和变更操作都内聚在同一个组件内，使其更容易维护  
有的时候，我们可能需要在注入方组件中更改数据。在这种情况下，我们推荐在供给方组件内声明并提供一个更改数据的方法函数

\`\`\`html
<!-- 在供给方组件内 -->
<script setup>
  import { provide, ref } from "vue";

  const location = ref("North Pole");

  function updateLocation() {
    location.value = "South Pole";
  }

  provide("location", {
    location,
    updateLocation,
  });
<\/script>

<!-- 在注入方组件中 -->
<script setup>
  import { inject } from "vue";

  const { location, updateLocation } = inject("location");
<\/script>

<template>
  <button @click="updateLocation">{{ location }}</button>
</template>
\`\`\`

最后，如果你想确保提供的数据不能被注入方的组件更改，你可以使用 \`readonly()\` 来包装提供的值

\`\`\`html
<script setup>
  import {(ref, provide, readonly)} from 'vue' const count = ref(0) provide('read-only-count', readonly(count))
<\/script>
\`\`\`

#### 使用 Symbol 作注入名

在构建大型的应用，包含非常多的依赖提供，或者你正在编写提供给其他开发者使用的组件库，建议最好使用 Symbol 来作为注入名以避免潜在的冲突。

我们通常推荐在一个单独的文件中导出这些注入名 Symbol

\`\`\`js
// keys.js
export const myInjectionKey = Symbol();
\`\`\`

\`\`\`js
// 在供给方组件中
import { provide } from "vue";
import { myInjectionKey } from "./keys.js";

provide(myInjectionKey, {
  /*
  要提供的数据
*/
});
\`\`\`

\`\`\`js
// 注入方组件
import { inject } from "vue";
import { myInjectionKey } from "./keys.js";

const injected = inject(myInjectionKey);
\`\`\`
`;export{n as default};
