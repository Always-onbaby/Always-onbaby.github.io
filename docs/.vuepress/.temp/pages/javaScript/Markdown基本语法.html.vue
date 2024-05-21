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
provide 和 inject <span class="token comment">//依赖和注入系统</span>
<span class="token comment">//增加一个入口区实现需要新加的功能和迭代</span>

<span class="token comment">//总之需要积极向上，运动起来，保持良好的身材，不奢求做到6块8块腹肌啥的，最起码的不要看着大腹便便的，肌肉松松垮垮的，中年油腻。</span>
<span class="token comment">//恢复在上5:30起床跑步的习惯，晚上做几组仰卧起坐，俯卧撑，平板支撑啥的。加上上下班的25KM骑行运动，我估计一天的运动量也就差不多了。</span>
<span class="token comment">//每天都这么坚持着，不受伤，不偷懒，一个月，最迟二个月都估计就会看到明显的效果了。当然还有最重要的一点就是控制好饮食习惯。</span>
<span class="token comment">//早餐准备一瓶500ml的纯净水，两个水煮鸡蛋，小瓶纯牛奶或者酸奶，中午吃带过来的饭菜（妈妈准备的），晚上饭就不吃了，最多弄点水果，冲杯牛奶啥的。不碰碳水化合物，什么营养的，可乐的，补充能量的，补充盐水的，通通滚蛋，纯净水最好。控酒戒烟，酒水不是聚会或者必要的条件下酒不要喝了，啤酒，白酒，红酒都一样。烟的话也得戒掉，当然这肯定是一个长期的过程，我相信运动起来的话，烟也就自然而然的戒掉了，因为吸烟很影响运动。</span>
<span class="token comment">//什么时候能到真性情，随心随性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">resolveAfterTwoSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncCall</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"calling"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">resolveAfterTwoSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">asyncCall</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


