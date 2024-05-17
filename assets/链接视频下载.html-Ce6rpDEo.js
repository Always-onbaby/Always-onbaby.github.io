import{_ as n,c as s,o as a,a as t}from"./app-C9H6PnRd.js";const p={},e=t(`<p>在开发中我们常用<code>&lt;a&gt;</code>链接下载数据，但在下载视频时会遇到无法下载转而打开新页面播放的<code>BUG</code></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 根据链接下载视频
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">filePath</span> 文件地址
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">fileName</span> 文件名
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">videoDownload</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">filePath</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">fileName</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  a<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**指示回复的内容该以何种形式展示(是以内联的形式（即网页或者页面的一部分），还是以附件的形式下载并保存到本地。) */</span> 
  a<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>filePath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;response-content-disposition=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">attachment; filename=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fileName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token comment">// a.href =filePath +&quot;&amp;response-content-disposition=&quot; + encodeURIComponent(&#39;attachment; filename=&quot;&#39; + fileName + &#39;&quot;&#39;);</span>
  a<span class="token punctuation">.</span>download <span class="token operator">=</span> fileName<span class="token punctuation">;</span>
  a<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**多文件时remove放在setTimeout里面 */</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(i,l){return a(),s("div",null,o)}const r=n(p,[["render",c],["__file","链接视频下载.html.vue"]]),k=JSON.parse('{"path":"/javaScript/%E9%93%BE%E6%8E%A5%E8%A7%86%E9%A2%91%E4%B8%8B%E8%BD%BD.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1715940084000,"contributors":[{"name":"chen","email":"usadaiyun@360.com","commits":1}]},"filePathRelative":"javaScript/链接视频下载.md"}');export{r as comp,k as data};
