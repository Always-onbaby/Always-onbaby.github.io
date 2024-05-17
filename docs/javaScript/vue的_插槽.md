### 插槽 Slots

#### 插槽内容与出口

组件使用`props`传递任意类型的`javascript`值，使用`slot`来传递模板内容(包括组件)

```js
//插槽内容
<FancyButton>Click me! </FancyButton>

// FancyButton组件
<button class="fancy-btn">
  <slot></slot>
</button>
```

`slot`元素是一个插槽出口(slot outlet)，标识父元素提供的插槽内容(slot content)将在哪里被渲染

#### 渲染作用域

插槽内容可以访问到父组件的数据作用域，因为插槽内容本身是在父组件模板中定义的

```js
<span>{{ message }}</span>
<FancyButton>{{ message }}</FancyButton>
```

这里的两个 {{ message }} 插值表达式渲染的内容都是一样的  
父组件模板中的表达式只能访问父组件的作用域；子组件模板中的表达式只能访问子组件的作用域

#### 默认内容

在外部没有提供任何内容的情况下，可以为插槽指定默认内容

```html
<button type="submit">
  <slot>
    Submit
    <!-- 默认内容 -->
  </slot>
</button>
```

#### 具名插槽

在一个组件中包含多个插槽出口

```html
<div class="container">
  <header>
    <!-- 标题内容放这里 -->
    <slot name="header"></slot>
  </header>
  <main>
    <!-- 主要内容放这里 -->
    <slot></slot>
  </main>
  <footer>
    <!-- 底部内容放这里 -->
    <slot name="footer"></slot>
  </footer>
</div>
```

这类带有`name`的插槽被称为具名插槽(name slots)。没有提供`name`的`<slot>`出口会被隐式地命名为`default`  
要为具名插槽传入内容，我们需要使用一个含 `v-slot` 指令的 `<template>` 元素，并将目标插槽的名字传给该指令

```html
<BaseLayout>
  <template v-slot:header>
    <!-- header 插槽的内容放这里 -->
  </template>
</BaseLayout>
```

`v-slot` 有对应的简写 `#`，因此 `<template v-slot:header>` 可以简写为 `<template #header>`

#### 动态插槽

动态指令参数在 `v-slot` 上也是有效的，即可以定义下面这样的动态插槽名

```html
<base-layout>
  <template v-slot:[dynamicSlotName]> ... </template>

  <!-- 缩写为 -->
  <template #[dynamicSlotName]> ... </template>
</base-layout>
```

#### 作用域插槽

在某些场景下插槽的内容可能想要同时使用父组件域内和子组件域内的数据。要做到这一点,我们需要向一个插槽的出口上传递一个`attributes`

```html
<!-- <MyComponent> 的模板 -->
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>
```

通过子组件标签上的 v-slot 指令，直接接收到了一个插槽 props 对象

```html
<MyComponent v-slot="slotProps"> {{ slotProps.text }} {{ slotProps.count }} </MyComponent>
```

子组件传入插槽的 props 作为了 v-slot 指令的值，可以在插槽内的表达式中访问  
你可以将作用域插槽类比为一个传入子组件的函数。子组件会将相应的 props 作为参数传给它

```js
MyComponent({
  // 类比默认插槽，将其想成一个函数
  default: (slotProps) => {
    return `${slotProps.text} ${slotProps.count}`;
  },
});

function MyComponent(slots) {
  const greetingMessage = "hello";
  return `<div>${
    // 在插槽函数调用时传入 props
    slots.default({ text: greetingMessage, count: 1 })
  }</div>`;
}
```

`v-slot="slotProps"` 可以类比这里的函数签名，和函数的参数类似，我们也可以在 v-slot 中使用解构

```html
<MyComponent v-slot="{ text, count }"> {{ text }} {{ count }} </MyComponent>
```

#### 高级列表组件示例

我们来看一个 `<FancyList> `组件的例子。它会渲染一个列表，并同时会封装一些加载远端数据的逻辑、使用数据进行列表渲染、或者是像分页或无限滚动这样更进阶的功能。然而我们希望它能够保留足够的灵活性，将对单个列表元素内容和样式的控制权留给使用它的父组件。我们期望的用法可能是这样的

```html
<FancyList :api-url="url" :per-page="10">
  <template #item="{ body, username, likes }">
    <div class="item">
      <p>{{ body }}</p>
      <p>by {{ username }} | {{ likes }} likes</p>
    </div>
  </template>
</FancyList>
```

在 `<FancyList>` 之中，我们可以多次渲染 `<slot>` 并每次都提供不同的数据 (注意我们这里使用了 v-bind 来传递插槽的 props)

```html
<ul>
  <li v-for="item in items">
    <slot name="item" v-bind="item"></slot>
  </li>
</ul>
```
