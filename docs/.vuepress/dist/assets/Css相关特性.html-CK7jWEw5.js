import{_ as n,c as s,o as a,a as e}from"./app-DBg0nr1M.js";const i={},t=e(`<h4 id="设置选择底色" tabindex="-1"><a class="header-anchor" href="#设置选择底色"><span>设置选择底色</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>::selection {
  background-color: yellow; /* 设置选择文本的背景色 */
  color: black; /* 设置选择文本的前景色（文字颜色） */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置滚动条样式" tabindex="-1"><a class="header-anchor" href="#设置滚动条样式"><span>设置滚动条样式</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>::-webkit-scrollbar {
    width: 8px;
    height: 0.5px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,.2);
    background: #469aed;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,.2);
    border-radius: 10px;
    background: #fff;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置单行文本和多行文本的溢出显示" tabindex="-1"><a class="header-anchor" href="#设置单行文本和多行文本的溢出显示"><span>设置单行文本和多行文本的溢出显示</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.single-line {
    white-space: nowrap; /* 防止换行 */
    overflow: hidden; /* 隐藏溢出部分 */
    text-overflow: ellipsis; /* 超出部分显示省略号 */
}

.multi-line {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3; /* 控制显示的行数 */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在-scss-中循环和变量的使用" tabindex="-1"><a class="header-anchor" href="#在-scss-中循环和变量的使用"><span>在 scss 中循环和变量的使用</span></a></h4><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">//定义变量 文本溢出样式，clamp到多少行溢出时显示缩略字符</span>
@mixin text<span class="token operator">-</span><span class="token function">clamp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">$clamp</span><span class="token operator">:</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    text<span class="token operator">-</span>overflow<span class="token operator">:</span> ellipsis<span class="token punctuation">;</span>
    white<span class="token operator">-</span>space<span class="token operator">:</span> normal<span class="token punctuation">;</span>
    word<span class="token operator">-</span><span class="token keyword">break</span><span class="token operator">:</span> <span class="token keyword">break</span><span class="token operator">-</span>all<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token punctuation">;</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token operator">-</span>orient<span class="token operator">:</span> vertical<span class="token punctuation">;</span>
    <span class="token operator">-</span>webkit<span class="token operator">-</span>line<span class="token operator">-</span>clamp<span class="token operator">:</span> $clamp<span class="token punctuation">;</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
    line<span class="token operator">-</span>height<span class="token operator">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 使用循环并使用scss变量</span>
@<span class="token keyword">for</span> $i from <span class="token number">1</span> through <span class="token number">5</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span>ellipsis<span class="token operator">-</span>#<span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span>
        @include text<span class="token operator">-</span><span class="token function">clamp</span><span class="token punctuation">(</span>$i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

@<span class="token keyword">for</span> $i from <span class="token number">10</span> through <span class="token number">100</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span>f#<span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span>
        font<span class="token operator">-</span>size<span class="token operator">:</span> #<span class="token punctuation">{</span>$i<span class="token punctuation">}</span>px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="css-定义全局变量" tabindex="-1"><a class="header-anchor" href="#css-定义全局变量"><span>css 定义全局变量</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.vip-theme {
    --primary: #1aad19;
    --primary-opacity: #e8f6e8;
    --primary-hover: #148a14;
    --primary-tips: #ecf8ec;
    --success: #48c978;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[t];function p(c,o){return a(),s("div",null,l)}const d=n(i,[["render",p],["__file","Css相关特性.html.vue"]]),u=JSON.parse('{"path":"/javaScript/Css%E7%9B%B8%E5%85%B3%E7%89%B9%E6%80%A7.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"javaScript/Css相关特性.md"}');export{d as comp,u as data};
