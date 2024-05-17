<template><div><h2 id="逻辑空值合并操作符和逻辑或操作符的区别" tabindex="-1"><a class="header-anchor" href="#逻辑空值合并操作符和逻辑或操作符的区别"><span>逻辑空值合并操作符和逻辑或操作符的区别</span></a></h2>
<p><code v-pre>res.rows ?? []</code> 和 <code v-pre>res.rows || []</code> 是两种不同的逻辑表达式，它们在处理空值或 falsy 值时有一些区别。</p>
<ol>
<li>
<p><code v-pre>res.rows ?? []</code>：这是 Nullish Coalescing 运算符（??）的使用方式。如果 <code v-pre>res.rows</code> 的值为 <code v-pre>null</code> 或 <code v-pre>undefined</code>，则该表达式将返回一个空数组 <code v-pre>[]</code>。否则，它将返回 <code v-pre>res.rows</code> 的值。该运算符只在左侧的值为 <code v-pre>null</code> 或 <code v-pre>undefined</code> 时才会触发默认值的使用。</p>
</li>
<li>
<p><code v-pre>res.rows || []</code>：这是逻辑或运算符（||）的使用方式。如果 <code v-pre>res.rows</code> 的值为 falsy（例如 <code v-pre>false</code>、<code v-pre>0</code>、空字符串等），则该表达式将返回一个空数组 <code v-pre>[]</code>。否则，它将返回 <code v-pre>res.rows</code> 的值。逻辑或运算符在左侧值为 falsy 时会触发默认值的使用。</p>
</li>
</ol>
<p>区别在于对于除了 <code v-pre>null</code> 和 <code v-pre>undefined</code> 外的其他 falsy 值（如 <code v-pre>false</code>、<code v-pre>0</code>、空字符串等），Nullish Coalescing 运算符仍然会将其视为有效值，而逻辑或运算符会将其视为 falsy 值并触发默认值的使用。</p>
<p>例如，假设 <code v-pre>res.rows</code> 的值为：</p>
<ul>
<li><code v-pre>null</code> 或 <code v-pre>undefined</code>：<code v-pre>res.rows ?? []</code> 将返回 <code v-pre>[]</code>，而 <code v-pre>res.rows || []</code> 也将返回 <code v-pre>[]</code>。</li>
<li><code v-pre>false</code>、<code v-pre>0</code>、空字符串等：<code v-pre>res.rows ?? []</code> 仍然将返回 <code v-pre>res.rows</code> 的值（例如 <code v-pre>false</code>、<code v-pre>0</code>、空字符串等），而 <code v-pre>res.rows || []</code> 将返回 <code v-pre>[]</code>。</li>
</ul>
<p>因此，如果你希望在 <code v-pre>res.rows</code> 的值为 <code v-pre>null</code> 或 <code v-pre>undefined</code> 时返回默认值 <code v-pre>[]</code>，而在其他 falsy 值时保留原始值，可以使用 Nullish Coalescing 运算符 <code v-pre>res.rows ?? []</code>。如果希望在 <code v-pre>res.rows</code> 的值为任何 falsy 值时返回默认值 <code v-pre>[]</code>，则可以使用逻辑或运算符 <code v-pre>res.rows || []</code>。</p>
</div></template>


