const r=`### 运动时声明\r
\r
\`\`\`javascript\r
<script setup lang="ts">\r
const props = defineProps({\r
  foo: { type: String, required: true },\r
  bar: Number\r
})\r
\r
props.foo // string\r
props.bar // number | undefined\r
<\/script>\r
\`\`\`\r
\r
### 基于类型声明\r
\r
\`\`\`javascript\r
<script setup lang="ts">\r
const props = defineProps<{\r
  foo: string\r
  bar?: number\r
}>()\r
<\/script>\r
\`\`\`\r
\r
基于类型声明和运动时声明只能选择其中一种，不能同时使用，我们也可以为\`props\`的类型单独定义在一个接口中\r
\r
\`\`\`javascript\r
<script setup lang="ts">\r
interface Props {\r
  foo: string\r
  bar?: number\r
}\r
\r
const props = defineProps<Props>()\r
<\/script>\r
\`\`\`\r
\r
这种情况同样适用于\`Props\`从源文件导入的情况\r
\r
\`\`\`javascript\r
<script setup lang="ts">\r
import type { Props } from './foo'\r
\r
const props = defineProps<Props>()\r
<\/script>\r
\`\`\`\r
\r
### Props 解构默认值\r
\r
基于类型声明会失去为\`props\`声明默认值的能力，我们可以使用\`widthDefaults\`编译器宏来解决\r
\r
\`\`\`javascript\r
export interface Props {\r
  msg?: string\r
  labels?: string[]\r
}\r
\r
const props = withDefaults(defineProps<Props>(), {\r
  msg: 'hello',\r
  labels: () => ['one', 'two']\r
})\r
\`\`\`\r
\r
#### 更小的生产包体积\r
\r
搭配\`<script setup>\`使用组合式 API 比等价情况下的选项式 API 更高效，对代码压缩更友好。主要是应为\`<script setup>\`书写形式的模板会编译为一个内联函数，可以直接访问在\`<script setup>\`中定义的变量，而不需要一离开\`this\`通过实例代理。这对代码压缩更友好，应为本地变量名可被压缩而对象属性名则不能。\r
\r
《偷书贼》\r
\r
一个\`共产主义\`家庭的儿女被送给了德国偏远地区的一对夫妇领养。\r
\r
在弟弟的葬礼上捡到了女孩的第一本书籍《掘墓人手册》\r
\r
在庆祝元首生日的广场上从火堆里面偷了一本《耸耸肩膀》\r
\r
然后又从镇长太太那偷了一本《吹口哨的人》\r
\r
最后拿了本《最后的局外人》\r
\r
中间犹太人马斯克把元首的著作《我的奋斗》撕碎了制作了《采字人》漫画作为圣诞节的礼物送给了她\r
\r
以死神的独特视角描述了二战时期德国及犹太人的生活。\r
\r
到法院审判，不管缓刑还是实刑，对受害方来说案件就算结束了，对犯罪嫌疑人只是另一个开始，缓刑的日子也不好过，实刑就更不用说了。\r
\r
文体的常见问题是不知道怎么样去完成一篇文章的构思以及提炼和表述\r
\r
《金字塔原理》 麦肯锡团队的日常工作中常用到的指导性书籍。不管是从报告评估，日常邮件，方案文案，讲座，周会，复盘。无论是口头表述还是文字表达，基本上都遵循金字塔原理这一原则。\r
\r
重点突出、逻辑清晰、层次分明\r
思考、沟通交流\r
\r
结论先行\r
首先得想明白目标是啥。确立明确的目标，切分目标，实现目标。\r
跳绳\r
俯卧撑\r
仰卧起坐\r
拼板支撑\r
下蹲\r
\r
慕尼黑大道\r
\r
一，先看经典文学类书籍\r
二，读历史\r
三，看哲学类书籍\r
四，社会科学和人文科学相关\r
\r
找食组的组长，活着不成人样了。但是比起被打动，你听不听。活着不容易，死了也不安生。\r
我终于也得到这个机会。\r
院门前\r
唱片估计也是同样的来历。\r
\r
#### 生产更小的体积包\r
\r
脸上占了\r
转向我的是烂了的脸和打过来的拳头。\r
\r
vue3 v-model 的实现\r
\r
\`\`\`javascript\r
const emits = defineEmits(['update'])\r
props: {\r
  value: {\r
    type: String,\r
    default: ''\r
  }\r
}\r
\r
emits('update',moduleValue)\r
\`\`\`\r
\r
组合式 API 和 OPTIONS API\r
\r
组合式函数用于封装和重用有状态的逻辑\r
\r
函数名通常以\`use\` 开头，以便让其他开发者知道它是一个组合式函数\r
\r
函数通常在组建的\`setup()\` 函数（或等效的\`<script setup>\`块）的同步执行期间调用。这将组合式函数的调用与当前组件的上下文绑定，例如通过调用\`provide()\`,\`inject()\`或\`onMounted()\`\r
\r
通常来说，组合式函数返回一个普通对象，而不是一个响应式对象，这个二对象通常包含\`ref\`和函数，并且预期下调用它的代码中进行解构。\r
\r
组合式 API 是 Vue 中的一组用于编写组件和组合式函数的函数。\r
\r
该词也用于描述用于编写组件的两种主要风格之一，另一种是\`选项式API\` 。通过组合式 API 编写的组件使用\`<script setup>\`或显示的\`setup()\`函数。\r
\r
动态组件一词用于描述需要动态选择要渲染的子组件情况。这通常是通过\`<component :is="type">\`来实现的。\r
\r
\`provide\`和\`inject\`是一种组件间通信的形式。\r
\r
当组件提供一个值时，该组件的所有后代组件都可以选择使用\`inject\`来获取值。与\`prop\`不同，提供值的组件不知道哪些组件正在接收值。\r
\r
\`provide\`和\`inject\`有时用于避免\`prop\`逐级透传。它们也可以组件与其插槽内容进行隐式通信的一种方式。\r
\r
\`provide\`也可以在应用级别使用，使得该值对该应用中的所有组件都可以使用。\r
\r
#### 响应式作用\r
\r
响应式作用是 Vue 响应性的一部分。它指的是跟踪函数的依赖关系，并在它们的值发生变化时重新运行该函数的过程。\r
\r
\`watchEffect()\`是直接的创建作用的方式。Vue 内部的其他各个部分也会使用作用。例如：组件渲染更新、\`computed()\`和\`watch()\`\r
\r
Vue 只能在响应式作用内部跟踪响应式依赖关系。如果在响应式作用之外读取属性值，它将丢失响应式，因为 Vue 不知道在该属性发生变化后改做什么。\r
\r
这个术语源自\`副作用\`。调用作用函数是属性值被改变的副作用。\r
\r
#### 作用域插槽\r
\r
作用域插是指接收\`prop\`的插槽\r
\r
过去，Vue 在作用域插槽和非作用域插槽之间有很大的区别。在某种程度上，它们可以被视为被统一在一个公共的模板语法背后的两个不同的功能。\r
\r
在 Vue3 中，插槽 API 被简化为使所有插槽都像作用域插槽一样。然而，作用域插槽和非作用域插槽的使用场景通常不一样，因此改术语仍被用于特指具有\`prop\`的插槽。\r
\r
传递给插槽的\`prop\`只能在父模块中负责定义该插槽内容指定区域中使用。该模板区域的行为类似于\`prop\`的变量作用域，因此称为\`作用域插槽\`\r
\r
#### 副作用(side effect)\r
\r
副作用一词并非 Vue 特有。它用于描述超出其局部作用域的操作或函数。\r
\r
在\`user.name = null\`这样设置属性的上下文中，我们可以预期\`user.name\`的值会被更改。如果它还做了其他事情，比如触发 Vue 的响应性系统，那么这就被描述为副作用。这就是 Vue 中的\`响应式effect\`一词的起源。\r
\r
这个是默认的\r
\r
#### Vue 中 slot 的几种用法\r
\r
- 默认插槽\r
- 具名插槽\r
- 作用域插槽\r
\r
默认插槽就是在组建中使用\`<slot />\` 作为占位符。使用该组件时，在父组件中注入的内容会替换\`<slot />\`而注入到子组件中\r
\r
具名插槽就是在组件中的\`<slot name="header">\`标识一个\`name\`,在父组件中使用时标识出\`name\`,内容会替换掉对用的\`<slot />\`\r
\r
作用域插槽，在\`<slot />\`上绑定的人子组件作用域中的值可以在父组件中访问\r
\r
\`\`\`javascript\r
<slot name="header" :id="11" :value="df">\r
\r
<template #header={id,value} >\r
  <span>{{id,value}}</span>\r
<template/>\r
\`\`\`\r
`;export{r as default};
