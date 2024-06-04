<template><div><h1 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started"><span>Get Started</span></a></h1>
<p>This is a normal page, which contains VuePress basics.</p>
<h2 id="pages" tabindex="-1"><a class="header-anchor" href="#pages"><span>Pages</span></a></h2>
<p>You can add markdown files in your vuepress directory, every markdown file will be converted to a page in your site.</p>
<p>See <a href="https://vuejs.press/guide/page.html#routing" target="_blank" rel="noopener noreferrer">routing</a> for more details.</p>
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content"><span>Content</span></a></h2>
<p>Every markdown file <a href="https://vuejs.press/guide/page.html#content" target="_blank" rel="noopener noreferrer">will be rendered to HTML, then converted to a Vue SFC</a>.</p>
<p>VuePress support basic markdown syntax and <a href="https://vuejs.press/guide/markdown.html#syntax-extensions" target="_blank" rel="noopener noreferrer">some extensions</a>, you can also <a href="https://vuejs.press/guide/markdown.html#using-vue-in-markdown" target="_blank" rel="noopener noreferrer">use Vue features</a> in it.</p>
<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2>
<p>VuePress use a <code v-pre>.vuepress/config.js</code>(or .ts) file as <a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">site configuration</a>, you can use it to config your site.</p>
<p>For <a href="https://vuejs.press/guide/configuration.html#client-config-file" target="_blank" rel="noopener noreferrer">client side configuration</a>, you can create <code v-pre>.vuepress/client.js</code>(or .ts).</p>
<p>Meanwhile, you can also add configuration per page with <a href="https://vuejs.press/guide/page.html#frontmatter" target="_blank" rel="noopener noreferrer">frontmatter</a>.</p>
<h2 id="layouts-and-customization" tabindex="-1"><a class="header-anchor" href="#layouts-and-customization"><span>Layouts and customization</span></a></h2>
<p>Here are common configuration controlling layout of <code v-pre>@vuepress/theme-default</code>:</p>
<ul>
<li><a href="https://vuejs.press/reference/default-theme/config.html#navbar" target="_blank" rel="noopener noreferrer">navbar</a></li>
<li><a href="https://vuejs.press/reference/default-theme/config.html#sidebar" target="_blank" rel="noopener noreferrer">sidebar</a></li>
</ul>
<p>Check <a href="https://vuejs.press/reference/default-theme/" target="_blank" rel="noopener noreferrer">default theme docs</a> for full reference.</p>
<p>You can <a href="https://vuejs.press/reference/default-theme/styles.html#style-file" target="_blank" rel="noopener noreferrer">add extra style</a> with <code v-pre>.vuepress/styles/index.scss</code> file.</p>
<!-- 动态组件，有些场景会用到多个组件来回切换的场景，比如Tab界面 -->
<!-- 确保在实际开发中，我么可以使用到这些技巧和总结的方式方法。比如Tab界面，无望东西 -->
<div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabs[currentTab]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上面的示例中，被传给<code v-pre>:is</code>的值可以是以下几种情况</p>
<ul>
<li>被注册的组件名</li>
<li>导入的组件对象</li>
</ul>
<p>当使用<code v-pre>&lt;component :is=&quot;&quot;&gt;</code>在多个组件间作切换时。被切换掉的组件会被卸载。可以使用<KeepAlive>组件阿里强制被切换掉的组件仍然保持存货状态。</p>
</div></template>

<script type="text/x-template"></script>
