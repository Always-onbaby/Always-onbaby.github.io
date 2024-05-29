<template><div><h4 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive"><span>reactive</span></a></h4>
<p><code v-pre>reactive</code>方法是用来创建一个响应式的数据对象，该 API 也很好的解决了<code v-pre>defineProperty</code>实现数据响应式的缺陷</p>
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 4. 访问响应式数据对象中的 count  --></span>
    {{ state.count }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"App"</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**3. 将响应式数据对象state return 出去，供template使用 */</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> state <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ref" tabindex="-1"><a class="header-anchor" href="#ref"><span>ref</span></a></h4>
<p>本质上<code v-pre>ref</code>就是通过<code v-pre>reactive</code>包装一个对象，然后是将值传给该对象的<code v-pre>value</code>属性，这也是每次访问<code v-pre>ref</code>定义的值都需要<code v-pre>.value</code>访问的原因,我们可以简单的把<code v-pre>ref({})</code>理解为<code v-pre>reactive({value:obj})</code></p>
<ul>
<li>基本类型值（<code v-pre>String</code> 、<code v-pre>Number</code> 、<code v-pre>Boolean</code> 等）或单值对象（类似像 <code v-pre>{count: 3}</code> 这样只有一个属性值的对象）使用 <code v-pre>ref</code></li>
<li>引用类型值（<code v-pre>Object</code> 、<code v-pre>Array</code>）使用 <code v-pre>reactive</code></li>
</ul>
<!-- 这个基本上是一致的，没有本质上的不同 -->
</div></template>


