<template><div><h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法"><span>基本语法</span></a></h3>
<hr>
<h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h4>
<p>如果你只想高亮语句中的某些关键字或者函数名，可以使用反引号<code v-pre>function_name</code>实现。<br>
通常编辑器会根据代码片段匹配适合的高亮方法，也可以使用 ` 包裹代码，指定语言</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>$<span class="token punctuation">{</span>document<span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="标题" tabindex="-1"><a class="header-anchor" href="#标题"><span>标题</span></a></h4>
<p>文章较长时，使用标题分级</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>## 大标题
### 中标题
#### 小标题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="粗体、斜体" tabindex="-1"><a class="header-anchor" href="#粗体、斜体"><span>粗体、斜体</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token operator">**</span><span class="token operator">*</span>粗体完本<span class="token operator">**</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="链接" tabindex="-1"><a class="header-anchor" href="#链接"><span>链接</span></a></h4>
<p>JS 模块的导入导出。</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> formateDate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"utils"</span><span class="token punctuation">;</span>

<span class="token comment">// 基本的增删改查，没有组件库和工具库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


