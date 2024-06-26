<template><div><h3 id="watch-的使用" tabindex="-1"><a class="header-anchor" href="#watch-的使用"><span>watch 的使用</span></a></h3>
<h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>
<span class="token function">watch</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">cur<span class="token punctuation">,</span> pre</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>watch()</code>默认是懒侦听的，即仅在侦听源发生变化时才执行回调函数。
第一个元素是侦听的源</p>
<ul>
<li>源可以是一个函数，返回一个值</li>
<li>一个 ref</li>
<li>一个响应式对象</li>
<li>也可以是以上元素的集合</li>
</ul>
<p>第二个参数是源发生变化时的回调函数</p>
<ul>
<li>接受三个参数，新值、旧值、以及一个用于注册副作用清理的回调函数。该函数会在下一次副作用执行前调用，可以用来清除无效的副作用，如等待中的异步请求。</li>
<li>当侦听多个来源时,回调函数接受两个数组，分别对应来源数组中的新值和旧值。</li>
</ul>
<p>第三个参数是可选的配置对象</p>
<ul>
<li><code v-pre>immediate</code>,在侦听器创建时立即执行。第一次回调的旧值为<code v-pre>undefined</code></li>
<li><code v-pre>deep</code>,当源是一个对象时，deep 默认为 false,需要深度监听对象属性的变化时，可设置为 true。</li>
<li><code v-pre>flush</code>,调整回调函数的刷新时机</li>
<li><code v-pre>onTrack/onTrigger</code>,调试侦听器的依赖。</li>
<li><code v-pre>once</code>,回调函数只执行一次，侦听器将在回调函数执行一次后停止。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 侦听一个getter函数</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>count<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">cur<span class="token punctuation">,</span> pre</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**... */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 侦听一个ref,当直接侦听一个响应式时，侦听器默认启用深层模式</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">watch</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">cur<span class="token punctuation">,</span> pre</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**... */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 侦听多个来源</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>fooRef<span class="token punctuation">,</span> barRef<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>foo<span class="token punctuation">,</span> bar<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>preFoo<span class="token punctuation">,</span> proBar<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**do something */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 停止侦听器</span>
<span class="token keyword">const</span> stop <span class="token operator">=</span> <span class="token function">watch</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 副作用清理</span>
<span class="token function">watch</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">newId<span class="token punctuation">,</span> oldId<span class="token punctuation">,</span> onCleanup</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> response<span class="token punctuation">,</span> cancel <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">doAsyncWork</span><span class="token punctuation">(</span>newId<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**当id变化时，cancel将被调用 */</span>
  <span class="token doc-comment comment">/**取消之前未完成的请求 */</span>
  <span class="token function">onCleanup</span><span class="token punctuation">(</span>cancel<span class="token punctuation">)</span><span class="token punctuation">;</span>
  data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watcheffect" tabindex="-1"><a class="header-anchor" href="#watcheffect"><span>watchEffect()</span></a></h3>
<p>立即运行一个函数，同时响应式地追踪其依赖，并在依赖更新时重新执行。</p>
<ul>
<li>第一个参数就是要运行的副作用函数。函数的参数也是一个函数，用来注册清理回调。清理回调会在该副作用下一次执行前被调用，可以用来清理无效的副作用，例如等待中的异步请求</li>
<li>第二个参数是一个可选的选项，用来调整副作用的刷新时机和调试副作用的依赖。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// -> 输出 0</span>

count<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token comment">// -> 输出 1</span>

<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">onCleanup</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> response<span class="token punctuation">,</span> cancel <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">doAsyncWork</span><span class="token punctuation">(</span>id<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// `cancel` 会在 `id` 更改时调用</span>
  <span class="token comment">// 以便取消之前</span>
  <span class="token comment">// 未完成的请求</span>
  <span class="token function">onCleanup</span><span class="token punctuation">(</span>cancel<span class="token punctuation">)</span><span class="token punctuation">;</span>
  data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 停止侦听器</span>
<span class="token keyword">const</span> stop <span class="token operator">=</span> <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 当不再需要此侦听器时:</span>
<span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


