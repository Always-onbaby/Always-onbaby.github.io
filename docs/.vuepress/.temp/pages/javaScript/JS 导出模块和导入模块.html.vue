<template><div><h3 id="js-模块的导入" tabindex="-1"><a class="header-anchor" href="#js-模块的导入"><span>JS 模块的导入</span></a></h3>
<h4 id="在-javascript-中-import-aa-和-import-aa-是两种不同的导入语法形式-它们有一些区别。" tabindex="-1"><a class="header-anchor" href="#在-javascript-中-import-aa-和-import-aa-是两种不同的导入语法形式-它们有一些区别。"><span>在 JavaScript 中，<code v-pre>import aa</code> 和 <code v-pre>import { aa }</code> 是两种不同的导入语法形式，它们有一些区别。</span></a></h4>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> defaultExport <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> name <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> export1 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> export1 <span class="token keyword">as</span> alias1 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> alias <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> export1<span class="token punctuation">,</span> export2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> export1<span class="token punctuation">,</span> export2 <span class="token keyword">as</span> alias2 <span class="token comment">/* … */</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token string">"string name"</span> <span class="token keyword">as</span> alias <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> defaultExport<span class="token punctuation">,</span> <span class="token punctuation">{</span> export1 <span class="token comment">/* … */</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> defaultExport<span class="token punctuation">,</span> <span class="token operator">*</span> <span class="token keyword">as</span> name <span class="token keyword">from</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"module-name"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>
<p><code v-pre>import aa</code>：这是默认导入的语法形式，用于导入一个模块的默认导出。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> aa <span class="token keyword">from</span> <span class="token string">"module"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样导入的是 <code v-pre>module</code> 模块的默认导出，可以使用 <code v-pre>aa</code> 这个变量来访问导出的内容。</p>
</li>
<li>
<p><code v-pre>import { aa }</code>：这是命名导入的语法形式，用于从一个模块中导入指定的变量或函数。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> aa <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样导入的是 <code v-pre>module</code> 模块中被命名为 <code v-pre>aa</code> 的导出内容，可以直接使用 <code v-pre>aa</code> 这个变量访问导出的内容。</p>
</li>
<li>
<p>需要注意的是，当一个模块既有默认导出又有命名导出时，可以同时使用这两种导入语法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> aa<span class="token punctuation">,</span> <span class="token punctuation">{</span> bb <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"module"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样既导入了 <code v-pre>module</code> 模块的默认导出，也导入了其中被命名为 <code v-pre>bb</code> 的导出内容。</p>
</li>
<li>
<p>仅作为一个副作用导入一个模块</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"./modules/my-modules.ts"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>整个模块仅作为副作用导入，而不导入模块中的具体内容。直接运行模块中的全部代码</p>
</li>
</ol>
<p>总结起来，<code v-pre>import aa</code> 是默认导入语法形式，导入模块的默认导出；而 <code v-pre>import { aa }</code> 是命名导入语法形式，导入模块中指定的变量或函数。</p>
<h3 id="js-模块的导出" tabindex="-1"><a class="header-anchor" href="#js-模块的导出"><span>JS 模块的导出</span></a></h3>
<h4 id="在-javascript-中-导出模块有两种常见的语法形式-默认导出和命名导出-它们之间有一些区别。" tabindex="-1"><a class="header-anchor" href="#在-javascript-中-导出模块有两种常见的语法形式-默认导出和命名导出-它们之间有一些区别。"><span>在 JavaScript 中，导出模块有两种常见的语法形式：默认导出和命名导出，它们之间有一些区别。</span></a></h4>
<ol>
<li>
<p>默认导出（Default Export）：使用 <code v-pre>export default</code> 关键字将一个值或对象作为模块的默认导出。一个模块只能有一个默认导出，使用者可以自由地为默认导出命名。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 模块A.js</span>
<span class="token keyword">const</span> aa <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> aa<span class="token punctuation">;</span>

<span class="token comment">// 导入时可以随意命名</span>
<span class="token comment">// 导入模块A.js的默认导出</span>
<span class="token keyword">import</span> xyz <span class="token keyword">from</span> <span class="token string">"./模块A.js"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>命名导出（Named Export）：使用 <code v-pre>export</code> 关键字将变量、函数、类等通过命名导出。一个模块可以有多个命名导出，导入时需要使用相应的名称来引用导出的内容。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 模块B.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> bb <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 导入时需要使用相应的名称</span>
<span class="token comment">// 导入模块B.js的命名导出</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> bb<span class="token punctuation">,</span> foo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./模块B.js"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>需要注意的是，在导入时，对于默认导出可以使用任意的变量名或别名，而对于命名导出则必须使用导出时所使用的名称。另外，一般情况下可以同时使用默认导出和命名导出的语法。</p>
<p>综上所述，使用 <code v-pre>export default</code> 导出的是模块的默认导出，而使用 <code v-pre>export</code> 导出的是模块的命名导出。这两种导出方式有不同的使用方法和语法规则。</p>
</div></template>


