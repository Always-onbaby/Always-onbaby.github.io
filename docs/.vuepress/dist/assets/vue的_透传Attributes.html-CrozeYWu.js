import{_ as s,c as a,o as n,a as t}from"./app-DBg0nr1M.js";const e={},o=t(`<h3 id="透传-attributes" tabindex="-1"><a class="header-anchor" href="#透传-attributes"><span>透传 Attributes</span></a></h3><h4 id="attributes-继承" tabindex="-1"><a class="header-anchor" href="#attributes-继承"><span>Attributes 继承</span></a></h4><p>透传是指传递给一个组件却并没有被组件申明为<code>props或emits</code>的 attributes 或者<code>v-on</code>实践监听器。例如:<code>class、style和id</code></p><p>当一个组件以单个元素作为根渲染时，透传的 Attributes 会被自动添加到根元素上。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//&lt;MyButton&gt; 的模板</span>
<span class="token operator">&lt;</span>button<span class="token operator">&gt;</span>click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>MyButton <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;large&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">//渲染结果</span>
<span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;large&quot;</span><span class="token operator">&gt;</span>click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当组件根元素上存在相同<code>class或者style</code>属性时会进行合并动作</p><p><code>v-on</code>继承事件会被添加到组件的根元素上，触发事件激活父组件定义的方法，如果在根元素上已经存在相同事件，则在组件和父组件同时触发</p><p>深层组件继承</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// &lt;MyButton/&gt; 的模板，只是渲染另一个组件</span>
<span class="token operator">&lt;</span>BaseButton <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>透传的<code>attributes</code>不包含已经在<code>myButton</code>上声明的<code>props或者emits</code></li><li>透传的 attributes 也可以作为<code>props</code>传给组件<code>BaseButton</code></li></ul><h4 id="禁用-attributes" tabindex="-1"><a class="header-anchor" href="#禁用-attributes"><span>禁用 Attributes</span></a></h4><p>当组件需要再非根元素的元素节点上应用 attributes 时，可以使用<code>inheritAttrs:false</code>来禁用自动继承</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token function">defineOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>Fallthrough attribute<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> $attrs <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>和 props 有所不同，透传 attributes 在 JavaScript 中保留了它们原始的大小写，所以像 foo-bar 这样的一个 attribute 需要通过 <code>$attrs[&#39;foo-bar&#39;]</code> 来访问</li><li>像 <code>@click</code> 这样的一个 <code>v-on</code> 事件监听器将在此对象下被暴露为一个函数 <code>$attrs.onClick</code>。</li></ul><h4 id="多根节点的-attributes-继承" tabindex="-1"><a class="header-anchor" href="#多根节点的-attributes-继承"><span>多根节点的 Attributes 继承</span></a></h4><p>和单根节点组件有所不同，有着多个根节点的组件没有自动 attribute 透传行为。如果 $attrs 没有被显式绑定，将会抛出一个运行时警告</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>CustomLayout id<span class="token operator">=</span><span class="token string">&quot;custom-layout&quot;</span> @click<span class="token operator">=</span><span class="token string">&quot;changeValue&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果 <code>&lt;CustomLayout&gt;</code> 有下面这样的多根节点模板，由于 Vue 不知道要将 attribute 透传到哪里，所以会抛出一个警告。需要显示的绑定</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>header<span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>main v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;$attrs&quot;</span><span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>footer<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在-js-中访问-attributes" tabindex="-1"><a class="header-anchor" href="#在-js-中访问-attributes"><span>在 JS 中访问 Attributes</span></a></h4><p>如果需要，你可以在 <code>&lt;script setup&gt;</code> 中使用 <code>useAttrs() API</code> 来访问一个组件的所有透传 <code>attribute</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span><span class="token keyword">import</span> <span class="token punctuation">{</span>useAttrs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span> <span class="token keyword">const</span> attrs <span class="token operator">=</span> <span class="token function">useAttrs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果没有使用 <code>&lt;script setup&gt;</code>，attrs 会作为 <code>setup()</code> 上下文对象的一个属性暴露</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 透传 attribute 被暴露为 ctx.attrs</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>attrs<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，虽然这里的 <code>attrs</code> 对象总是反映为最新的透传 <code>attribute</code>，但它并不是响应式的 (考虑到性能因素)。你不能通过侦听器去监听它的变化。如果你需要响应性，可以使用 <code>prop</code>。或者你也可以使用 <code>onUpdated()</code> 使得在每次更新时结合最新的 <code>attrs</code> 执行副作用</p>`,25),p=[o];function c(r,l){return n(),a("div",null,p)}const d=s(e,[["render",c],["__file","vue的_透传Attributes.html.vue"]]),u=JSON.parse('{"path":"/javaScript/vue%E7%9A%84_%E9%80%8F%E4%BC%A0Attributes.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"透传 Attributes","slug":"透传-attributes","link":"#透传-attributes","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"javaScript/vue的_透传Attributes.md"}');export{d as comp,u as data};
