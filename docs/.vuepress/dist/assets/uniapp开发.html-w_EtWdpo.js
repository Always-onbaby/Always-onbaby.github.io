import{_ as n,c as s,o as a,a as t}from"./app-DBg0nr1M.js";const p={},e=t(`<h4 id="获取设备的-uuid" tabindex="-1"><a class="header-anchor" href="#获取设备的-uuid"><span>获取设备的 uuid</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">getDeviceUuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//#ifdef APP-PLUS</span>
    <span class="token keyword">var</span> mainActivity <span class="token operator">=</span> plus<span class="token punctuation">.</span>android<span class="token punctuation">.</span><span class="token function">runtimeMainActivity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> Settings <span class="token operator">=</span> plus<span class="token punctuation">.</span>android<span class="token punctuation">.</span><span class="token function">importClass</span><span class="token punctuation">(</span><span class="token string">&#39;android.provider.Settings&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;设备唯一标识为：&#39;</span><span class="token punctuation">,</span> Settings<span class="token punctuation">.</span>Secure<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span>mainActivity<span class="token punctuation">.</span><span class="token function">getContentResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Settings<span class="token punctuation">.</span>Secure<span class="token punctuation">.</span><span class="token constant">ANDROID_ID</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//#endif</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[e];function o(i,u){return a(),s("div",null,c)}const r=n(p,[["render",o],["__file","uniapp开发.html.vue"]]),d=JSON.parse('{"path":"/javaScript/uniapp%E5%BC%80%E5%8F%91.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"javaScript/uniapp开发.md"}');export{r as comp,d as data};
