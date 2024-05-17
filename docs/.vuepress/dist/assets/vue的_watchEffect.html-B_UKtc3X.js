import{_ as n,c as a,o as s,a as t}from"./app-DBg0nr1M.js";const p={},e=t(`<h4 id="watcheffect-的使用" tabindex="-1"><a class="header-anchor" href="#watcheffect-的使用"><span>watchEffect 的使用</span></a></h4><p>侦听器的回调使用与源完全相同的响应式状态是很常见的。在下面的代码中，每当<code>todoId</code>的引用发生变化时使用侦听器来加载一个远程资源</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> todoId <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">watch</span><span class="token punctuation">(</span>
  todoId<span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://jsonplaceholder.typicode.com/todos/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>todoId<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，侦听器两次使用<code>todoId</code>,一次是作为源，一次是在回调中，像这种情况，我们可以使用<code>watchEffect</code>来简化我们的代码</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://jsonplaceholder.typicode.com/todos/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>todoId<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，回调会立即执行，不需要显示申明<code>immediate:true</code>,在执行期间，它会自动追踪<code>todoId.value</code>作为依赖(和计算属性类似)。每当<code>todoId.value</code>变化时，回调会再次调用。</p>`,6),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","vue的_watchEffect.html.vue"]]),r=JSON.parse('{"path":"/javaScript/vue%E7%9A%84_watchEffect.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"javaScript/vue的_watchEffect.md"}');export{d as comp,r as data};
