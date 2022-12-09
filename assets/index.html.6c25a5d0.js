import{_ as n,z as s,A as a,a6 as t}from"./framework.fef63301.js";const p={},e=t(`<h1 id="创建代码生成上下文" tabindex="-1"><a class="header-anchor" href="#创建代码生成上下文" aria-hidden="true">#</a> 创建代码生成上下文</h1><p>通过执行 createCodegenContext 创建代码生成上下文</p><h2 id="createcodegencontext" tabindex="-1"><a class="header-anchor" href="#createcodegencontext" aria-hidden="true">#</a> createCodegenContext</h2><ul><li>该上下文对象 context 维护了 generate 过程中的一些配置 比如： mode prefixIdentifers 也维护了generate 过程的一些状态数据 比如当前生产的代码的 code</li><li>context 还包含了在 generate 过程中可能会使用的辅助函数 用户修改上下文状态数据 <ul><li>push ： 当前代码 后追加 code 更新他的值</li><li>newline ：添加一个换行符 保持代码缩进</li><li>ident ： 增加代码的缩进 会让上下文维护的代码缩进 加一 内部会执行 newline 添加一个换行符</li><li>deindent： 减少代码的缩进 会让上下文维护的代码缩进 减一</li></ul></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">createCodegenContext</span><span class="token punctuation">(</span>
  ast<span class="token operator">:</span> RootNode<span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    mode <span class="token operator">=</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">,</span>
    prefixIdentifiers <span class="token operator">=</span> mode <span class="token operator">===</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span>
    sourceMap <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    filename <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">template.vue.html</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    scopeId <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    optimizeImports <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    runtimeGlobalName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Vue</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    runtimeModuleName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vue</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    ssrRuntimeModuleName <span class="token operator">=</span> <span class="token string">&#39;vue/server-renderer&#39;</span><span class="token punctuation">,</span>
    ssr <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    isTS <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    inSSR <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token operator">:</span> CodegenOptions
<span class="token punctuation">)</span><span class="token operator">:</span> CodegenContext <span class="token punctuation">{</span>
  <span class="token keyword">const</span> context<span class="token operator">:</span> CodegenContext <span class="token operator">=</span> <span class="token punctuation">{</span>
    mode<span class="token punctuation">,</span>
    prefixIdentifiers<span class="token punctuation">,</span>
    sourceMap<span class="token punctuation">,</span>
    filename<span class="token punctuation">,</span>
    scopeId<span class="token punctuation">,</span>
    optimizeImports<span class="token punctuation">,</span>
    runtimeGlobalName<span class="token punctuation">,</span>
    runtimeModuleName<span class="token punctuation">,</span>
    ssrRuntimeModuleName<span class="token punctuation">,</span>
    ssr<span class="token punctuation">,</span>
    isTS<span class="token punctuation">,</span>
    inSSR<span class="token punctuation">,</span>
    source<span class="token operator">:</span> ast<span class="token punctuation">.</span>loc<span class="token punctuation">.</span>source<span class="token punctuation">,</span>
    code<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    column<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    line<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    indentLevel<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    pure<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    map<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    <span class="token function">helper</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>helperNameMap<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">push</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      context<span class="token punctuation">.</span>code <span class="token operator">+=</span> code
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>__BROWSER__ <span class="token operator">&amp;&amp;</span> context<span class="token punctuation">.</span>map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> name
          <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>type <span class="token operator">===</span> NodeTypes<span class="token punctuation">.</span><span class="token constant">SIMPLE_EXPRESSION</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>node<span class="token punctuation">.</span>isStatic<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> content <span class="token operator">=</span> node<span class="token punctuation">.</span>content<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^_ctx\\.</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>content <span class="token operator">!==</span> node<span class="token punctuation">.</span>content <span class="token operator">&amp;&amp;</span> <span class="token function">isSimpleIdentifier</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              name <span class="token operator">=</span> content
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
          <span class="token function">addMapping</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>loc<span class="token punctuation">.</span>start<span class="token punctuation">,</span> name<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">advancePositionWithMutation</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> code<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">&amp;&amp;</span> node<span class="token punctuation">.</span>loc <span class="token operator">!==</span> locStub<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">addMapping</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>loc<span class="token punctuation">.</span>end<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">indent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">newline</span><span class="token punctuation">(</span><span class="token operator">++</span>context<span class="token punctuation">.</span>indentLevel<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">deindent</span><span class="token punctuation">(</span>withoutNewLine <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>withoutNewLine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">--</span>context<span class="token punctuation">.</span>indentLevel
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">newline</span><span class="token punctuation">(</span><span class="token operator">--</span>context<span class="token punctuation">.</span>indentLevel<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">newline</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">newline</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>indentLevel<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">newline</span><span class="token punctuation">(</span>n<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span> <span class="token operator">+</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">addMapping</span><span class="token punctuation">(</span>loc<span class="token operator">:</span> Position<span class="token punctuation">,</span> name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    context<span class="token punctuation">.</span>map<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">addMapping</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      name<span class="token punctuation">,</span>
      source<span class="token operator">:</span> context<span class="token punctuation">.</span>filename<span class="token punctuation">,</span>
      original<span class="token operator">:</span> <span class="token punctuation">{</span>
        line<span class="token operator">:</span> loc<span class="token punctuation">.</span>line<span class="token punctuation">,</span>
        column<span class="token operator">:</span> loc<span class="token punctuation">.</span>column <span class="token operator">-</span> <span class="token number">1</span> <span class="token comment">// source-map column is 0 based</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      generated<span class="token operator">:</span> <span class="token punctuation">{</span>
        line<span class="token operator">:</span> context<span class="token punctuation">.</span>line<span class="token punctuation">,</span>
        column<span class="token operator">:</span> context<span class="token punctuation">.</span>column <span class="token operator">-</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>__BROWSER__ <span class="token operator">&amp;&amp;</span> sourceMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// lazy require source-map implementation, only in non-browser builds</span>
    context<span class="token punctuation">.</span>map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SourceMapGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    context<span class="token punctuation">.</span>map<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">setSourceContent</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> context<span class="token punctuation">.</span>source<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> context
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
