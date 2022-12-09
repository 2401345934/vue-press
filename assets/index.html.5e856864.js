import{_ as n,z as s,A as a,a6 as e}from"./framework.fef63301.js";const t={},i=e(`<h1 id="void-和-never-类型的-区别" tabindex="-1"><a class="header-anchor" href="#void-和-never-类型的-区别" aria-hidden="true">#</a> void 和 never 类型的 区别</h1><ul><li>void 类型 代表返回值 是空 只要不写 return 语句都可以 或者不返回东西</li><li>void 类型 可以返回 undefined 但是不能返回 null</li><li>never 类型 表示 不能有任何返回值 这就需要在函数中 直接报错</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[i];function p(l,c){return s(),a("div",null,o)}const d=n(t,[["render",p],["__file","index.html.vue"]]);export{d as default};
