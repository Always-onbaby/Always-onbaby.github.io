<template><div><h4 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs"><span>commonJS</span></a></h4>
<ul>
<li>模块可以多次加载，但只会在第一次加载时运行，然后运行的结果会被缓存，后面的加载直接读取缓存。</li>
<li>模块的加载会阻塞进程，同步加载</li>
<li>导入 <code v-pre>require</code> 导出<code v-pre>module.exports</code> 和<code v-pre>exports</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// a.js</span>
<span class="token comment">// 相当于这里还有一行：var exports = module.exports;代码</span>
exports<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">"Hello world"</span><span class="token punctuation">;</span> <span class="token comment">// 相当于：module.exports.a = 'Hello world';</span>

<span class="token comment">// b.js</span>
<span class="token keyword">var</span> moduleA <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./a.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleA<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印出hello world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="amd" tabindex="-1"><a class="header-anchor" href="#amd"><span>AMD</span></a></h4>
<ul>
<li>异步加载</li>
<li>导入<code v-pre>require</code>,导出<code v-pre>define(function(return ''))</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// a.js</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">"hello world"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// b.js</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"./a.js"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">moduleA</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleA<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印出：hello world</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cmd" tabindex="-1"><a class="header-anchor" href="#cmd"><span>CMD</span></a></h4>
<ul>
<li>CMD 是在 AMD 基础上改进的一种规范，和 AMD 不同在于对依赖模块的执行时机处理不同，CMD 是就近依赖，而 AMD 是前置依赖。\</li>
<li>导入：<code v-pre>define(function(require, exports, module) {})</code>;</li>
<li>导出：<code v-pre>define(function (){return '值'})</code>;</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">// a.js</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  exports<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">"hello world"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// b.js</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> moduleA <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./a.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleA<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印出：hello world</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="umd" tabindex="-1"><a class="header-anchor" href="#umd"><span>UMD</span></a></h4>
<ul>
<li>兼容 AMD 和 commonJS 规范的同时，还兼容全局引用的方式</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> factory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> define <span class="token operator">===</span> <span class="token string">"function"</span> <span class="token operator">&amp;&amp;</span> define<span class="token punctuation">.</span>amd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//AMD</span>
    <span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"jquery"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> exports <span class="token operator">===</span> <span class="token string">"object"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//Node, CommonJS之类的</span>
    module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"jquery"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">//浏览器全局变量(root 即 window)</span>
    root<span class="token punctuation">.</span>returnExports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>jQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">$</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//方法</span>
  <span class="token keyword">function</span> <span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">//暴露公共方法</span>
  <span class="token keyword">return</span> myFunc<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="es6-module" tabindex="-1"><a class="header-anchor" href="#es6-module"><span>ES6 module</span></a></h4>
<ul>
<li>按需加载（编译时加载）</li>
<li><code v-pre>import</code>和<code v-pre>export</code>命令只能在模块的顶层，不能在代码块之中（如：if 语句中）,<code v-pre>import()</code>语句可以在代码块中实现异步动态按需动态加载</li>
<li>导入：import {模块名 A，模块名 B...} from '模块路径'</li>
<li>导出：<code v-pre>export</code>和<code v-pre>export default</code></li>
<li>import('模块路径').then()方法</li>
<li><code v-pre>export</code>只支持对象形式导出，不支持值的导出，<code v-pre>export default</code>命令用于指定模块的默认输出，只支持值导出，但是只能指定一个，本质上它就是输出一个叫做<code v-pre>default</code>的变量或方法</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token comment">/*错误的写法*/</span>
<span class="token comment">// 写法一</span>
<span class="token keyword">export</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// 写法二</span>
<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> m<span class="token punctuation">;</span>

<span class="token comment">// 写法三</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> MyModual <span class="token keyword">from</span> <span class="token string">'./myModual'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*正确的三种写法*/</span>
<span class="token comment">// 写法一</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// 写法二</span>
<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>m<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 写法三</span>
<span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>n <span class="token keyword">as</span> m<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 写法四</span>
<span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> n<span class="token punctuation">;</span>

<span class="token comment">// 写法五</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./myModule.js'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>export1<span class="token punctuation">,</span> export2<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// ...·</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 写法六</span>
Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./module1.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./module2.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./module3.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>module1<span class="token punctuation">,</span> module2<span class="token punctuation">,</span> module3<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   ···
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


