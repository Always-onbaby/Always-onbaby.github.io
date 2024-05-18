<template><div><h4 id="json" tabindex="-1"><a class="header-anchor" href="#json"><span>JSON</span></a></h4>
<p><code v-pre>json</code>在 vite 中可以被直接导入，同时也支持具名导入</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 导入整个Json对象</span>
<span class="token keyword">import</span> json form <span class="token string">'./example.json'</span>

<span class="token comment">// 具名导入，有利于构建时的treeshaking</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>filed<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./example.json'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


