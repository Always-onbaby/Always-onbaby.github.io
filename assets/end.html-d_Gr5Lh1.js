import{_ as s,c as a,o as n,a as e}from"./app-C9H6PnRd.js";const p={},t=e(`<h3 id="rollup" tabindex="-1"><a class="header-anchor" href="#rollup"><span>Rollup</span></a></h3><p>Rollup Rollup 是一个 JavaScript 模块打包器，它可以将多个模块打包成一个单独的文件。</p><ul><li><p>input（输入）: 这是你的项目的入口点（即主要的 JavaScript 文件）。Rollup 会从这个文件开始分析你的代码，并尝试找出它依赖的其他模块。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&quot;src/main.js&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>output（输出）: 这指定了 Rollup 打包后生成的文件的设置。</p><ul><li>file: 指定打包后的输出文件的路径和名称。</li><li>format: 指定打包后的文件的模块格式，比如 ‘cjs’ (CommonJS), ‘es’ (ES module), ‘umd’, ‘iife’ 等。</li><li>name (可选): 当 format 为 ‘umd’ 或 ‘iife’ 时，指定全局变量的名称。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&#39;dist/bundle.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&#39;umd&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;MyLibrary&#39;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>plugins（插件）: Rollup 的强大之处在于其插件系统，它允许你在打包过程中执行各种操作，例如代码转换、文件拷贝、压缩等等。常见的插件包括<code> @rollup/plugin-commonjs</code> (用于处理 CommonJS 模块) 和 <code>@rollup/plugin-node-resolve</code> (用于解析模块路径)。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>external（外部依赖）: 当你打包的代码依赖于外部库（例如 lodash 或 React），你可以将它们列在 external 中，这样 Rollup 就不会将它们打包进最终的输出文件中，而是保留对它们的引用。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">external</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;lodash&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>watch（监视模式）: 这个配置项告诉 Rollup 在文件发生变化时重新构建你的代码。在开发过程中，这非常有用。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">clearScreen</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="vite" tabindex="-1"><a class="header-anchor" href="#vite"><span>vite</span></a></h3><p>vite 最大的特点是利用 esm，让代码不像传统的构建工具一样去分析引入，打包构建，而是直接保持模块化，这样省去了大量的编译时间，让代码更改后的响应速度大量提升 构建方面，vite 其实使用的是 rollup</p><p>本身已经集成了大部分的配置，比如各种预处理语言，ts，各种资源。自带模板仓库 <code>npm create vite@latest my-vue-app -- --template vue</code>，本身就可以当做脚手架使用。webpack 只是提供了打包，vue-cli 脚手架内也只是提供了一套模板，内部集成 webpack，供开发使用。</p><p>以下是 Vite 的核心配置：</p><ul><li>root（根目录）: 指定项目的根目录。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token string">&quot;./src&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>base（基础路径）: 指定应用被部署时的基础 URL 路径。它通常用于处理构建后资源在不同路径部署的情况。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&quot;/my-app/&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>publicDir（静态资源目录）: 指定存放静态资源文件的目录。这些资源文件在构建时会被复制到输出目录。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">publicDir</span><span class="token operator">:</span> <span class="token string">&quot;public&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>build（构建配置）: 指定构建选项，包括输出目录、是否开启 sourcemap、是否开启压缩等等。 outDir: 指定构建输出目录。 sourcemap: 是否生成 sourcemap。 minify: 是否开启压缩。 assetsDir: 指定输出的静态资源文件目录。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">outDir</span><span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sourcemap</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token string">&#39;terser&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">&#39;assets&#39;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>server（开发服务器配置）: 指定开发服务器的配置选项，例如监听的端口、是否开启 HTTPS 等。 port: 指定服务器监听的端口。 https: 是否开启 HTTPS。 proxy: 配置代理，用于解决跨域问题。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
<span class="token literal-property property">https</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8000&#39;</span><span class="token punctuation">,</span>
<span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>plugins（插件）: Vite 支持通过插件来扩展其功能，例如处理 CSS、处理 TypeScript 等。你可以在这里配置需要使用的插件。</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">typescript</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),l=[t];function o(i,r){return n(),a("div",null,l)}const u=s(p,[["render",o],["__file","end.html.vue"]]),d=JSON.parse('{"path":"/end.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"Rollup","slug":"rollup","link":"#rollup","children":[]},{"level":3,"title":"vite","slug":"vite","link":"#vite","children":[]}],"git":{"updatedTime":1715916575000,"contributors":[{"name":"chen","email":"usadaiyun@360.com","commits":2}]},"filePathRelative":"end.md"}');export{u as comp,d as data};