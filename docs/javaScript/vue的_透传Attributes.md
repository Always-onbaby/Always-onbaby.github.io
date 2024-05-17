### 透传 Attributes

#### Attributes 继承

透传是指传递给一个组件却并没有被组件申明为`props或emits`的 attributes 或者`v-on`实践监听器。例如:`class、style和id`

当一个组件以单个元素作为根渲染时，透传的 Attributes 会被自动添加到根元素上。

```js
//<MyButton> 的模板
<button>click me</button>

<MyButton class="large" />

//渲染结果
<button class="large">click me</button>
```

当组件根元素上存在相同`class或者style`属性时会进行合并动作

`v-on`继承事件会被添加到组件的根元素上，触发事件激活父组件定义的方法，如果在根元素上已经存在相同事件，则在组件和父组件同时触发

深层组件继承

```ts
// <MyButton/> 的模板，只是渲染另一个组件
<BaseButton />
```

- 透传的`attributes`不包含已经在`myButton`上声明的`props或者emits`
- 透传的 attributes 也可以作为`props`传给组件`BaseButton`

#### 禁用 Attributes

当组件需要再非根元素的元素节点上应用 attributes 时，可以使用`inheritAttrs:false`来禁用自动继承

```javascript
<script setup>
defineOptions({
  inheritAttrs: false,
});
</script>

<span>Fallthrough attribute: {{ $attrs }}</span>
```

- 和 props 有所不同，透传 attributes 在 JavaScript 中保留了它们原始的大小写，所以像 foo-bar 这样的一个 attribute 需要通过 `$attrs['foo-bar']` 来访问
- 像 `@click` 这样的一个 `v-on` 事件监听器将在此对象下被暴露为一个函数 `$attrs.onClick`。

#### 多根节点的 Attributes 继承

和单根节点组件有所不同，有着多个根节点的组件没有自动 attribute 透传行为。如果 $attrs 没有被显式绑定，将会抛出一个运行时警告

```javascript
<CustomLayout id="custom-layout" @click="changeValue" />
```

如果 `<CustomLayout>` 有下面这样的多根节点模板，由于 Vue 不知道要将 attribute 透传到哪里，所以会抛出一个警告。需要显示的绑定

```javascript
<header>...</header>
<main v-bind="$attrs">...</main>
<footer>...</footer>
```

#### 在 JS 中访问 Attributes

如果需要，你可以在 `<script setup>` 中使用 `useAttrs() API` 来访问一个组件的所有透传 `attribute`

```js
<script setup>import {useAttrs} from 'vue' const attrs = useAttrs()</script>
```

如果没有使用 `<script setup>`，attrs 会作为 `setup()` 上下文对象的一个属性暴露

```ts
export default {
  setup(props, ctx) {
    // 透传 attribute 被暴露为 ctx.attrs
    console.log(ctx.attrs);
  },
};
```

需要注意的是，虽然这里的 `attrs` 对象总是反映为最新的透传 `attribute`，但它并不是响应式的 (考虑到性能因素)。你不能通过侦听器去监听它的变化。如果你需要响应性，可以使用 `prop`。或者你也可以使用 `onUpdated()` 使得在每次更新时结合最新的 `attrs` 执行副作用
