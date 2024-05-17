<template><div><h2 id="javascript-常用工具函数总结" tabindex="-1"><a class="header-anchor" href="#javascript-常用工具函数总结"><span>Javascript 常用工具函数总结</span></a></h2>
<h3 id="将时间转化易读的时间格式" tabindex="-1"><a class="header-anchor" href="#将时间转化易读的时间格式"><span>将时间转化易读的时间格式</span></a></h3>
<div class="language-Javascript line-numbers-mode" data-ext="Javascript" data-title="Javascript"><pre v-pre class="language-Javascript"><code>const zeroMat = num =&gt; (num &lt; 10 ? `0${num}` : num);


/**
 * 转化当前时间戳为n天前,刚刚 等形容词
 * @param {*} timestamp 传入时间，时间戳 ,'2024-01-26','2024/01/26'
 */
const timestampFormat = timestamp =&gt; {
  const curTimestamp = Math.floor(new Date().getTime() / 1000);
  const timestampDiff = curTimestamp - Math.floor(new Date(timestamp).getTime() / 1000);
  const curDate = new Date(curTimestamp * 1000);
  const tmDate = new Date(timestamp);

  const Y = tmDate.getFullYear();
  const m = tmDate.getMonth() + 1;
  const d = tmDate.getDate();
  const H = tmDate.getHours();
  const i = tmDate.getMinutes();

  if (timestampDiff &lt; 60) {
    return &quot;刚刚&quot;;
  }

  if (timestampDiff &lt; 3600) {
    return `${Math.floor(timestampDiff / 60)}分钟前`;
  }

  if ((curDate.getFullYear() === Y) &amp;&amp; (curDate.getMonth() + 1 === m) &amp;&amp; (curDate.getDate() === d)) {
    return `今天 ${zeroMat(H)}:${zeroMat(i)}`;
  }

  const newDate = new Date((curTimestamp - 86400) * 1000);

  if ((newDate.getFullYear() === Y) &amp;&amp; (newDate.getMonth() + 1 === m) &amp;&amp; (newDate.getDate() === d)) {
    return `昨天 ${zeroMat(H)}:${zeroMat(i)}`;
  }

  if (curDate.getFullYear() === Y) {
    return `${zeroMat(m)}.${zeroMat(d)} ${zeroMat(H)}:${zeroMat(i)}`;
  }

  return `${Y}.${zeroMat(m)}.${zeroMat(d)} ${zeroMat(H)}:${zeroMat(i)}`;
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="货币格式化" tabindex="-1"><a class="header-anchor" href="#货币格式化"><span>货币格式化</span></a></h3>
<div class="language-Javascript line-numbers-mode" data-ext="Javascript" data-title="Javascript"><pre v-pre class="language-Javascript"><code>/**
 * 格式化货币
 * @param {*} num 金额数组 123456
 * @param {*} n 保留小数位 默认2
 */
const formatCurrency = (num, n = 2) =&gt; {
  if (typeof num !== 'number') {
    throw new Error('Invalid input type. Expected a number.');
  }
  n = (n &gt; 0 &amp;&amp; n &lt; 20) ? n : 2;
  num = parseFloat(num.toFixed(n));
  const l = num.toFixed(n).split(&quot;.&quot;)[0].split(&quot;&quot;).reverse();
  const r = num.toFixed(n).split(&quot;.&quot;)[1];

  const formattedNum = l.reduce((acc, curr, index) =&gt; {
    return curr + ((index + 1) % 3 === 0 &amp;&amp; index + 1 !== l.length ? &quot;,&quot; : &quot;&quot;) + acc;
  }, &quot;&quot;);

  return `￥${formattedNum}.${r}`;
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取浏览器-cookie-值" tabindex="-1"><a class="header-anchor" href="#获取浏览器-cookie-值"><span>获取浏览器 cookie 值</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">cookie</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>document<span class="token punctuation">.</span>cookie<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">; </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">=</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">";"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="将-rgb-转化为-16-进制" tabindex="-1"><a class="header-anchor" href="#将-rgb-转化为-16-进制"><span>将 RGB 转化为 16 进制</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">rgbToHex</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">r<span class="token punctuation">,</span> g<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">"#"</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">24</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>r <span class="token operator">&lt;&lt;</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>g <span class="token operator">&lt;&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="复制到接切板" tabindex="-1"><a class="header-anchor" href="#复制到接切板"><span>复制到接切板</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">copyToClipboard</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token operator">=></span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">writeText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="字符首字母大写" tabindex="-1"><a class="header-anchor" href="#字符首字母大写"><span>字符首字母大写</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">capitalize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=></span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="生成随机的-16-进制" tabindex="-1"><a class="header-anchor" href="#生成随机的-16-进制"><span>生成随机的 16 进制</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">randomHex</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0xffffff</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">"0"</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组去重" tabindex="-1"><a class="header-anchor" href="#数组去重"><span>数组去重</span></a></h3>
<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">removeDuplicates</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


