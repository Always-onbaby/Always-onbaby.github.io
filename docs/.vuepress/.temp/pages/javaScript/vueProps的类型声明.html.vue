<template><div><h3 id="运动时声明" tabindex="-1"><a class="header-anchor" href="#运动时声明"><span>运动时声明</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bar</span><span class="token operator">:</span> Number
<span class="token punctuation">}</span><span class="token punctuation">)</span>

props<span class="token punctuation">.</span>foo <span class="token comment">// string</span>
props<span class="token punctuation">.</span>bar <span class="token comment">// number | undefined</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基于类型声明" tabindex="-1"><a class="header-anchor" href="#基于类型声明"><span>基于类型声明</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> string
  bar<span class="token operator">?</span><span class="token operator">:</span> number
<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基于类型声明和运动时声明只能选择其中一种，不能同时使用，我们也可以为<code v-pre>props</code>的类型单独定义在一个接口中</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> string
  bar<span class="token operator">?</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span>Props<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种情况同样适用于<code v-pre>Props</code>从源文件导入的情况</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> Props <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./foo'</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span>Props<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props-解构默认值" tabindex="-1"><a class="header-anchor" href="#props-解构默认值"><span>Props 解构默认值</span></a></h3>
<p>基于类型声明会失去为<code v-pre>props</code>声明默认值的能力，我们可以使用<code v-pre>widthDefaults</code>编译器宏来解决</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  msg<span class="token operator">?</span><span class="token operator">:</span> string
  labels<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">withDefaults</span><span class="token punctuation">(</span>defineProps<span class="token operator">&lt;</span>Props<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">labels</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token string">'one'</span><span class="token punctuation">,</span> <span class="token string">'two'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="更小的生产包体积" tabindex="-1"><a class="header-anchor" href="#更小的生产包体积"><span>更小的生产包体积</span></a></h4>
<p>搭配<code v-pre>&lt;script setup&gt;</code>使用组合式 API 比等价情况下的选项式 API 更高效，对代码压缩更友好。主要是应为<code v-pre>&lt;script setup&gt;</code>书写形式的模板会编译为一个内联函数，可以直接访问在<code v-pre>&lt;script setup&gt;</code>中定义的变量，而不需要一离开<code v-pre>this</code>通过实例代理。这对代码压缩更友好，应为本地变量名可被压缩而对象属性名则不能。</p>
<p>《偷书贼》</p>
<p>一个<code v-pre>共产主义</code>家庭的儿女被送给了德国偏远地区的一对夫妇领养。</p>
<p>在弟弟的葬礼上捡到了女孩的第一本书籍《掘墓人手册》</p>
<p>在庆祝元首生日的广场上从火堆里面偷了一本《耸耸肩膀》</p>
<p>然后又从镇长太太那偷了一本《吹口哨的人》</p>
<p>最后拿了本《最后的局外人》</p>
<p>中间犹太人马斯克把元首的著作《我的奋斗》撕碎了制作了《采字人》漫画作为圣诞节的礼物送给了她</p>
<p>以死神的独特视角描述了二战时期德国及犹太人的生活。</p>
<p>到法院审判，不管缓刑还是实刑，对受害方来说案件就算结束了，对犯罪嫌疑人只是另一个开始，缓刑的日子也不好过，实刑就更不用说了。</p>
<p>文体的常见问题是不知道怎么样去完成一篇文章的构思以及提炼和表述</p>
<p>《金字塔原理》 麦肯锡团队的日常工作中常用到的指导性书籍。不管是从报告评估，日常邮件，方案文案，讲座，周会，复盘。无论是口头表述还是文字表达，基本上都遵循金字塔原理这一原则。</p>
<p>重点突出、逻辑清晰、层次分明
思考、沟通交流</p>
<p>结论先行
首先得想明白目标是啥。确立明确的目标，切分目标，实现目标。
跳绳
俯卧撑
仰卧起坐
拼板支撑
下蹲</p>
<p>慕尼黑大道</p>
<p>一，先看经典文学类书籍
二，读历史
三，看哲学类书籍
四，社会科学和人文科学相关</p>
<p>找食组的组长，活着不成人样了。但是比起被打动，你听不听。活着不容易，死了也不安生。
我终于也得到这个机会。
院门前
唱片估计也是同样的来历。</p>
<h4 id="生产更小的体积包" tabindex="-1"><a class="header-anchor" href="#生产更小的体积包"><span>生产更小的体积包</span></a></h4>
<p>脸上占了
转向我的是烂了的脸和打过来的拳头。</p>
<p>vue3 v-model 的实现</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> emits <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'update'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">''</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">emits</span><span class="token punctuation">(</span><span class="token string">'update'</span><span class="token punctuation">,</span>moduleValue<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组合式 API 和 OPTIONS API</p>
<p>组合式函数用于封装和重用有状态的逻辑</p>
<p>函数名通常以<code v-pre>use</code> 开头，以便让其他开发者知道它是一个组合式函数</p>
<p>函数通常在组建的<code v-pre>setup()</code> 函数（或等效的<code v-pre>&lt;script setup&gt;</code>块）的同步执行期间调用。这将组合式函数的调用与当前组件的上下文绑定，例如通过调用<code v-pre>provide()</code>,<code v-pre>inject()</code>或<code v-pre>onMounted()</code></p>
<p>通常来说，组合式函数返回一个普通对象，而不是一个响应式对象，这个二对象通常包含<code v-pre>ref</code>和函数，并且预期下调用它的代码中进行解构。</p>
<p>组合式 API 是 Vue 中的一组用于编写组件和组合式函数的函数。</p>
<p>该词也用于描述用于编写组件的两种主要风格之一，另一种是<code v-pre>选项式API</code> 。通过组合式 API 编写的组件使用<code v-pre>&lt;script setup&gt;</code>或显示的<code v-pre>setup()</code>函数。</p>
<p>动态组件一词用于描述需要动态选择要渲染的子组件情况。这通常是通过<code v-pre>&lt;component :is=&quot;type&quot;&gt;</code>来实现的。</p>
<p><code v-pre>provide</code>和<code v-pre>inject</code>是一种组件间通信的形式。</p>
<p>当组件提供一个值时，该组件的所有后代组件都可以选择使用<code v-pre>inject</code>来获取值。与<code v-pre>prop</code>不同，提供值的组件不知道哪些组件正在接收值。</p>
<p><code v-pre>provide</code>和<code v-pre>inject</code>有时用于避免<code v-pre>prop</code>逐级透传。它们也可以组件与其插槽内容进行隐式通信的一种方式。</p>
<p><code v-pre>provide</code>也可以在应用级别使用，使得该值对该应用中的所有组件都可以使用。</p>
<h4 id="响应式作用" tabindex="-1"><a class="header-anchor" href="#响应式作用"><span>响应式作用</span></a></h4>
<p>响应式作用是 Vue 响应性的一部分。它指的是跟踪函数的依赖关系，并在它们的值发生变化时重新运行该函数的过程。</p>
<p><code v-pre>watchEffect()</code>是直接的创建作用的方式。Vue 内部的其他各个部分也会使用作用。例如：组件渲染更新、<code v-pre>computed()</code>和<code v-pre>watch()</code></p>
<p>Vue 只能在响应式作用内部跟踪响应式依赖关系。如果在响应式作用之外读取属性值，它将丢失响应式，因为 Vue 不知道在该属性发生变化后改做什么。</p>
<p>这个术语源自<code v-pre>副作用</code>。调用作用函数是属性值被改变的副作用。</p>
<h4 id="作用域插槽" tabindex="-1"><a class="header-anchor" href="#作用域插槽"><span>作用域插槽</span></a></h4>
<p>作用域插是指接收<code v-pre>prop</code>的插槽</p>
<p>过去，Vue 在作用域插槽和非作用域插槽之间有很大的区别。在某种程度上，它们可以被视为被统一在一个公共的模板语法背后的两个不同的功能。</p>
<p>在 Vue3 中，插槽 API 被简化为使所有插槽都像作用域插槽一样。然而，作用域插槽和非作用域插槽的使用场景通常不一样，因此改术语仍被用于特指具有<code v-pre>prop</code>的插槽。</p>
<p>传递给插槽的<code v-pre>prop</code>只能在父模块中负责定义该插槽内容指定区域中使用。该模板区域的行为类似于<code v-pre>prop</code>的变量作用域，因此称为<code v-pre>作用域插槽</code></p>
<h4 id="副作用-side-effect" tabindex="-1"><a class="header-anchor" href="#副作用-side-effect"><span>副作用(side effect)</span></a></h4>
<p>副作用一词并非 Vue 特有。它用于描述超出其局部作用域的操作或函数。</p>
<p>在<code v-pre>user.name = null</code>这样设置属性的上下文中，我们可以预期<code v-pre>user.name</code>的值会被更改。如果它还做了其他事情，比如触发 Vue 的响应性系统，那么这就被描述为副作用。这就是 Vue 中的<code v-pre>响应式effect</code>一词的起源。</p>
<p>这个是默认的</p>
<h4 id="vue-中-slot-的几种用法" tabindex="-1"><a class="header-anchor" href="#vue-中-slot-的几种用法"><span>Vue 中 slot 的几种用法</span></a></h4>
<ul>
<li>默认插槽</li>
<li>具名插槽</li>
<li>作用域插槽</li>
</ul>
<p>默认插槽就是在组建中使用<code v-pre>&lt;slot /&gt;</code> 作为占位符。使用该组件时，在父组件中注入的内容会替换<code v-pre>&lt;slot /&gt;</code>而注入到子组件中</p>
<p>具名插槽就是在组件中的<code v-pre>&lt;slot name=&quot;header&quot;&gt;</code>标识一个<code v-pre>name</code>,在父组件中使用时标识出<code v-pre>name</code>,内容会替换掉对用的<code v-pre>&lt;slot /&gt;</code></p>
<p>作用域插槽，在<code v-pre>&lt;slot /&gt;</code>上绑定的人子组件作用域中的值可以在父组件中访问</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"header"</span> <span class="token operator">:</span>id<span class="token operator">=</span><span class="token string">"11"</span> <span class="token operator">:</span>value<span class="token operator">=</span><span class="token string">"df"</span><span class="token operator">></span>

<span class="token operator">&lt;</span>template #header<span class="token operator">=</span><span class="token punctuation">{</span>id<span class="token punctuation">,</span>value<span class="token punctuation">}</span> <span class="token operator">></span>
  <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>id<span class="token punctuation">,</span>value<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span>template<span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


