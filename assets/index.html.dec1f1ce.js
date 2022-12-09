import{_ as n,z as s,A as a,a6 as t}from"./framework.fef63301.js";const e={},p=t(`<h1 id="树" tabindex="-1"><a class="header-anchor" href="#树" aria-hidden="true">#</a> 树</h1><h2 id="广度优先遍历" tabindex="-1"><a class="header-anchor" href="#广度优先遍历" aria-hidden="true">#</a> 广度优先遍历</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ● 先访问离根节点最近的节点, 如果有兄弟节点就会先遍历兄弟节点，再去遍历自己的子节点</span>
<span class="token comment">// ● 口诀</span>
<span class="token comment">//   ○ 新建一个队列 并把根节点入队</span>
<span class="token comment">//   ○ 把队头出队并访问</span>
<span class="token comment">//   ○ 把队头的children挨个入队</span>
<span class="token comment">//   ○ 重复第二 、三步 直到队列为空</span>
<span class="token comment">// 广度优先遍历</span>
<span class="token keyword">const</span> <span class="token function-variable function">bfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">tree</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> q <span class="token operator">=</span> <span class="token punctuation">[</span>tree<span class="token punctuation">]</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>q<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    n<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","index.html.vue"]]);export{r as default};
