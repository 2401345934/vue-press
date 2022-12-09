import{_ as n,z as s,A as a,a6 as t}from"./framework.fef63301.js";const p={},o=t(`<h1 id="ast-转换" tabindex="-1"><a class="header-anchor" href="#ast-转换" aria-hidden="true">#</a> AST 转换</h1><ul><li>对于模版的编译会先通过 baseParse 生成一个 AST 对象</li><li>然后针对这个 对象进行一定的转换</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">baseParse</span><span class="token punctuation">(</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  options<span class="token operator">:</span> ParserOptions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token operator">:</span> RootNode <span class="token punctuation">{</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">createParserContext</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token keyword">const</span> start <span class="token operator">=</span> <span class="token function">getCursor</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token function">createRoot</span><span class="token punctuation">(</span>
    <span class="token function">parseChildren</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> TextModes<span class="token punctuation">.</span><span class="token constant">DATA</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getSelection</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> start<span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getbasetransformpreset" tabindex="-1"><a class="header-anchor" href="#getbasetransformpreset" aria-hidden="true">#</a> getBaseTransformPreset</h2><ul><li>会执行 getBaseTransformPreset 函数获取节点和指令转换的函数</li><li>然后调用 transform 函数做 AST 转换 把这些节点和指令转换成函数作为配置的属性参数传入</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getBaseTransformPreset</span><span class="token punctuation">(</span>
  prefixIdentifiers<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">)</span><span class="token operator">:</span> TransformPreset <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      transformOnce<span class="token punctuation">,</span>
      transformIf<span class="token punctuation">,</span>
      transformMemo<span class="token punctuation">,</span>
      transformFor<span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token punctuation">(</span>__COMPAT__ <span class="token operator">?</span> <span class="token punctuation">[</span>transformFilter<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token punctuation">(</span><span class="token operator">!</span>__BROWSER__ <span class="token operator">&amp;&amp;</span> prefixIdentifiers
        <span class="token operator">?</span> <span class="token punctuation">[</span>
            <span class="token comment">// order is important</span>
            trackVForSlotScopes<span class="token punctuation">,</span>
            transformExpression
          <span class="token punctuation">]</span>
        <span class="token operator">:</span> __BROWSER__ <span class="token operator">&amp;&amp;</span> __DEV__
        <span class="token operator">?</span> <span class="token punctuation">[</span>transformExpression<span class="token punctuation">]</span>
        <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      transformSlotOutlet<span class="token punctuation">,</span>
      transformElement<span class="token punctuation">,</span>
      trackSlotScopes<span class="token punctuation">,</span>
      transformText
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      on<span class="token operator">:</span> transformOn<span class="token punctuation">,</span>
      bind<span class="token operator">:</span> transformBind<span class="token punctuation">,</span>
      model<span class="token operator">:</span> transformModel
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transform" tabindex="-1"><a class="header-anchor" href="#transform" aria-hidden="true">#</a> transform</h2><ul><li>核心流程 主要做了四件事</li><li>创建 tramsform 上下文</li><li>遍历 AST 节点</li><li>静态提升</li><li>创建根代码生成节点</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">transform</span><span class="token punctuation">(</span>root<span class="token operator">:</span> RootNode<span class="token punctuation">,</span> options<span class="token operator">:</span> TransformOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">createTransformContext</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token function">traverseNode</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> context<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>hoistStatic<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">hoistStatic</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> context<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">.</span>ssr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">createRootCodegen</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> context<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// finalize meta information</span>
  root<span class="token punctuation">.</span>helpers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>context<span class="token punctuation">.</span>helpers<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
  root<span class="token punctuation">.</span>components <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>context<span class="token punctuation">.</span>components<span class="token punctuation">]</span>
  root<span class="token punctuation">.</span>directives <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>context<span class="token punctuation">.</span>directives<span class="token punctuation">]</span>
  root<span class="token punctuation">.</span>imports <span class="token operator">=</span> context<span class="token punctuation">.</span>imports
  root<span class="token punctuation">.</span>hoists <span class="token operator">=</span> context<span class="token punctuation">.</span>hoists
  root<span class="token punctuation">.</span>temps <span class="token operator">=</span> context<span class="token punctuation">.</span>temps
  root<span class="token punctuation">.</span>cached <span class="token operator">=</span> context<span class="token punctuation">.</span>cached

  <span class="token keyword">if</span> <span class="token punctuation">(</span>__COMPAT__<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    root<span class="token punctuation">.</span>filters <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>context<span class="token punctuation">.</span>filters<span class="token operator">!</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),e=[o];function c(i,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
