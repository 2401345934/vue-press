import{_ as n,z as s,A as a,a6 as t}from"./framework.fef63301.js";const p={},e=t(`<h1 id="生成资源声明代码" tabindex="-1"><a class="header-anchor" href="#生成资源声明代码" aria-hidden="true">#</a> 生成资源声明代码</h1><h2 id="在渲染函数内部-先生成资源声明代码" tabindex="-1"><a class="header-anchor" href="#在渲染函数内部-先生成资源声明代码" aria-hidden="true">#</a> 在渲染函数内部 先生成资源声明代码</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code> <span class="token comment">// generate asset resolution statements</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ast<span class="token punctuation">.</span>components<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">genAssets</span><span class="token punctuation">(</span>ast<span class="token punctuation">.</span>components<span class="token punctuation">,</span> <span class="token string">&#39;component&#39;</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ast<span class="token punctuation">.</span>directives<span class="token punctuation">.</span>length <span class="token operator">||</span> ast<span class="token punctuation">.</span>temps <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">newline</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ast<span class="token punctuation">.</span>directives<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">genAssets</span><span class="token punctuation">(</span>ast<span class="token punctuation">.</span>directives<span class="token punctuation">,</span> <span class="token string">&#39;directive&#39;</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ast<span class="token punctuation">.</span>temps <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">newline</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>__COMPAT__ <span class="token operator">&amp;&amp;</span> ast<span class="token punctuation">.</span>filters <span class="token operator">&amp;&amp;</span> ast<span class="token punctuation">.</span>filters<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">newline</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">genAssets</span><span class="token punctuation">(</span>ast<span class="token punctuation">.</span>filters<span class="token punctuation">,</span> <span class="token string">&#39;filter&#39;</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span>
    <span class="token function">newline</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>ast<span class="token punctuation">.</span>temps <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">let</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ast<span class="token punctuation">.</span>temps<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">, </span><span class="token template-punctuation string">\`</span></span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_temp</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="genassets" tabindex="-1"><a class="header-anchor" href="#genassets" aria-hidden="true">#</a> genAssets</h2><ul><li>接下来通过 genAssets 生成自定义组件声明代码</li><li>函数内部调用了 helper函数 就是从 helperNameMap 查找对应的字符串</li><li>会遍历 assets 数组 生成自定义组件声明代码</li><li>过程中 会通过 toValidAssetId 包装</li><li>处理后 运行时就可以 通过 resolveComponent 解析到注册的自定义组件对象了 在后面创建组件 vnode 的时候 当作参数传入</li><li>生成资源声明代码之后就需要创建vnode 树的表达式 render 函数最终返回的是 vnode 树</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token keyword">function</span> <span class="token function">genAssets</span><span class="token punctuation">(</span>
  assets<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  type<span class="token operator">:</span> <span class="token string">&#39;component&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;directive&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;filter&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> helper<span class="token punctuation">,</span> push<span class="token punctuation">,</span> newline<span class="token punctuation">,</span> isTS <span class="token punctuation">}</span><span class="token operator">:</span> CodegenContext
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> resolver <span class="token operator">=</span> <span class="token function">helper</span><span class="token punctuation">(</span>
    __COMPAT__ <span class="token operator">&amp;&amp;</span> type <span class="token operator">===</span> <span class="token string">&#39;filter&#39;</span>
      <span class="token operator">?</span> <span class="token constant">RESOLVE_FILTER</span>
      <span class="token operator">:</span> type <span class="token operator">===</span> <span class="token string">&#39;component&#39;</span>
      <span class="token operator">?</span> <span class="token constant">RESOLVE_COMPONENT</span>
      <span class="token operator">:</span> <span class="token constant">RESOLVE_DIRECTIVE</span>
  <span class="token punctuation">)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> assets<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> id <span class="token operator">=</span> assets<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token comment">// potential component implicit self-reference inferred from SFC filename</span>
    <span class="token keyword">const</span> maybeSelfReference <span class="token operator">=</span> id<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;__self&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>maybeSelfReference<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      id <span class="token operator">=</span> id<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">push</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">const </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">toValidAssetId</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>resolver<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>
maybeSelfReference <span class="token operator">?</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">, true</span><span class="token template-punctuation string">\`</span></span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span> 
      <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>isTS <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> assets<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">newline</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">toValidAssetId</span><span class="token punctuation">(</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  type<span class="token operator">:</span> <span class="token string">&#39;component&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;directive&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;filter&#39;</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token comment">// see issue#4422, we need adding identifier on validAssetId if variable \`name\` has specific character</span>
  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[^\\w]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span>searchValue<span class="token punctuation">,</span> replaceValue<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> searchValue <span class="token operator">===</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;_&#39;</span> <span class="token operator">:</span> name<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>replaceValue<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
