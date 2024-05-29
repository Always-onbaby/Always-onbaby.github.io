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

<span class="token comment">// 基本的增删改查，没有组件库和工具库，也就正常的功能页面开发，做做基本的增删改查的工作。</span>

provide 和 inject <span class="token comment">//依赖和注入系统</span>
<span class="token comment">//增加一个入口区实现需要新加的功能和迭代</span>

<span class="token comment">//总之需要积极向上，运动起来，保持良好的身材，不奢求做到6块8块腹肌啥的，最起码的不要看着大腹便便的，肌肉松松垮垮的，中年油腻。</span>
<span class="token comment">//恢复在上5:30起床跑步的习惯，晚上做几组仰卧起坐，俯卧撑，平板支撑啥的。加上上下班的25KM骑行运动，我估计一天的运动量也就差不多了。</span>
<span class="token comment">//每天都这么坚持着，不受伤，不偷懒，一个月，最迟二个月估计就会看到明显的效果了。当然还有最重要的一点就是控制好饮食习惯。</span>
<span class="token comment">//早餐准备一瓶500ml的纯净水，两个水煮鸡蛋，小瓶纯牛奶或者酸奶，中午吃带过来的饭菜（妈妈准备的），晚上饭就不吃了，最多弄点水果，冲杯牛奶啥的。不碰碳水化合物，什么营养的，可乐的，补充能量的，补充盐水的，通通滚蛋，纯净水最好。控酒戒烟，酒水不是聚会或者必要的条件下酒不要喝了，啤酒，白酒，红酒都一样。烟的话也得戒掉，当然这肯定是一个长期的过程，我相信运动起来的话，烟也就自然而然的戒掉了，因为吸烟很影响运动。</span>
<span class="token comment">//什么时候能到真性情，随心随性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">resolveAfterTwoSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- 基本语法，《老妇人》，茶花女 战争与和平 卡夫卡兄弟  -->
<!-- 入库的操作和出库的操作是相辅相成的，缺一不可的两个重要步骤 首页 组织架构 云仓档案 入库管理 出库管理 库内作业 配送管理 报表中心 系统管理 
职员管理 操作员管理 在线用户
云仓架构 巷道管理 货位平面图 货主管理 承运方管理 车辆管理 装卸队管理 周转箱管理 商品管理 客户管理 配送路线管理 供应商3管理
入库计划 入库计划管理 收货作业管理 上架作业管理 入库单管理 采购进货单 采购进货入库单 销售退货单 销售退货入库单 调拨入库单 调拨入库入库单
拣货计划 纸质拣货 拣货计划管理 监护作业人管理 复核计划管理 复核作业管理 出库单管理 销售出库单 销售出库改单

基本的结构是什么，这个是需要体检想明白的，不然的话做到后面都不知道怎么去弄这个结构了。
-->
<!-- 给到的信息就这么多，却需要我们从有限的线索里面抽丝剥茧来找到有利的突破方向。 -->
<!-- 输入、总结、输出是最好的阅读方式了。最好以传播知识，传播理念的方式进行输入，让普通的阅读者或者说听众（总的来说就是你这些文字或者语言的受众）能够理解你表达的是什么东西，传达的是怎么样的一种思想。

千锤百炼，经过了时间的洗礼和沉淀。使用体验，总的来说比20~30的普通键盘还是要好了很多了。无论是键盘的按压感还是回弹的响应速度，亦或是清脆的声音都有了质的提升。

我吹过你吹过的风，这算不算相拥，我走过你走过的路，这算不算重逢。我还是那么的喜欢你，只为你的温柔。 -->
<!-- 商品管理 收货作业 上架作业 单品上架 入库计划管理 收货作业管理 上架作业管理 拣货作业 复核作业 拣货计划管理 拣货作业管理 复核计划管理 复核作业管理 快速移仓 移仓单 盘点作业 盘点计划 盘点作业管理 库存调整单 理货计划管理 理货作业 理货作业管理 配送作业 配送计划管理 园区库存 园区库存明细 --></div></template>


