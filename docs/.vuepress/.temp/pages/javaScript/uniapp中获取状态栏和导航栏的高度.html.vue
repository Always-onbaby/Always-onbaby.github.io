<template><div><h4 id="在-uniapp-中获取状态栏和导航栏的高度" tabindex="-1"><a class="header-anchor" href="#在-uniapp-中获取状态栏和导航栏的高度"><span>在 uniapp 中获取状态栏和导航栏的高度</span></a></h4>
<p>在微信小程序中，可以使用 <code v-pre>uni.getSystemInfo()</code> 方法获取设备的系统信息，包括状态栏的高度和顶部导航栏的高度。您可以使用这些信息计算顶部图标距离。
下面是一个示例代码，展示如何在 UniApp 中获取顶部图标距离</p>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">getSystemInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取手机顶部状态栏的高度</span>
    <span class="token keyword">const</span> statusBarHeight <span class="token operator">=</span> res<span class="token punctuation">.</span>statusBarHeight <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">// 获取导航栏的高度（手机状态栏高度 + 胶囊高度 + 胶囊的上下间距）</span>
    <span class="token keyword">const</span> menuButtonInfo <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">getMenuButtonBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> navBarHeight <span class="token operator">=</span> menuButtonInfo<span class="token punctuation">.</span>height <span class="token operator">+</span> <span class="token punctuation">(</span>menuButtonInfo<span class="token punctuation">.</span>top <span class="token operator">-</span> statusBarHeight<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>

    <span class="token comment">// 计算顶部图标距离</span>
    <span class="token keyword">const</span> topIconDistance <span class="token operator">=</span> statusBarHeight <span class="token operator">+</span> navBarHeight<span class="token punctuation">;</span>

    <span class="token comment">// 打印顶部图标距离</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"顶部图标距离:"</span><span class="token punctuation">,</span> topIconDistance<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"获取系统信息失败:"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


