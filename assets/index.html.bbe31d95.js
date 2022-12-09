import{_ as n,z as s,A as a,a6 as t}from"./framework.fef63301.js";const p={},e=t(`<h1 id="生成代码" tabindex="-1"><a class="header-anchor" href="#生成代码" aria-hidden="true">#</a> 生成代码</h1><h2 id="generate" tabindex="-1"><a class="header-anchor" href="#generate" aria-hidden="true">#</a> generate</h2><ul><li>在 AST 转换后 会执行 generate 函数生成代码</li><li>generate 函数的输入 就是转换后的 AST 节点</li><li>主要做了五件事情 <ul><li>创建代码生成上下文</li><li>生成预设代码</li><li>生成渲染函数的名称和参数</li><li>生成资源声明代码</li><li>生成创建 vnode 树的表达式</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generate</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">ast</span><span class="token operator">:</span> RootNode<span class="token punctuation">,</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> CodegenOptions <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
    onContextCreated<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">context</span><span class="token operator">:</span> CodegenContext</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="token punctuation">)</span><span class="token operator">:</span> CodegenResult <span class="token punctuation">{</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">createCodegenContext</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>onContextCreated<span class="token punctuation">)</span> options<span class="token punctuation">.</span><span class="token function">onContextCreated</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    mode<span class="token punctuation">,</span>
    push<span class="token punctuation">,</span>
    prefixIdentifiers<span class="token punctuation">,</span>
    indent<span class="token punctuation">,</span>
    deindent<span class="token punctuation">,</span>
    newline<span class="token punctuation">,</span>
    scopeId<span class="token punctuation">,</span>
    ssr
  <span class="token punctuation">}</span> <span class="token operator">=</span> context

  <span class="token keyword">const</span> hasHelpers <span class="token operator">=</span> ast<span class="token punctuation">.</span>helpers<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span>
  <span class="token keyword">const</span> useWithBlock <span class="token operator">=</span> <span class="token operator">!</span>prefixIdentifiers <span class="token operator">&amp;&amp;</span> mode <span class="token operator">!==</span> <span class="token string">&#39;module&#39;</span>
  <span class="token keyword">const</span> genScopeId <span class="token operator">=</span> <span class="token operator">!</span>__BROWSER__ <span class="token operator">&amp;&amp;</span> scopeId <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> mode <span class="token operator">===</span> <span class="token string">&#39;module&#39;</span>
  <span class="token keyword">const</span> isSetupInlined <span class="token operator">=</span> <span class="token operator">!</span>__BROWSER__ <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token operator">!</span>options<span class="token punctuation">.</span>inline

  <span class="token comment">// preambles</span>
  <span class="token comment">// in setup() inline mode, the preamble is generated in a sub context</span>
  <span class="token comment">// and returned separately.</span>
  <span class="token keyword">const</span> preambleContext <span class="token operator">=</span> isSetupInlined
    <span class="token operator">?</span> <span class="token function">createCodegenContext</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
    <span class="token operator">:</span> context
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>__BROWSER__ <span class="token operator">&amp;&amp;</span> mode <span class="token operator">===</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">genModulePreamble</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> preambleContext<span class="token punctuation">,</span> genScopeId<span class="token punctuation">,</span> isSetupInlined<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">genFunctionPreamble</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> preambleContext<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// enter render function</span>
  <span class="token keyword">const</span> functionName <span class="token operator">=</span> ssr <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ssrRender</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">render</span><span class="token template-punctuation string">\`</span></span>
  <span class="token keyword">const</span> args <span class="token operator">=</span> ssr <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token string">&#39;_ctx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_push&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_parent&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_attrs&#39;</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;_ctx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_cache&#39;</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>__BROWSER__ <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>bindingMetadata <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>options<span class="token punctuation">.</span>inline<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// binding optimization args</span>
    args<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;$props&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;$setup&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;$data&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;$options&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> signature <span class="token operator">=</span>
    <span class="token operator">!</span>__BROWSER__ <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>isTS
      <span class="token operator">?</span> args<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">arg</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>arg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: any</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
      <span class="token operator">:</span> args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;, &#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isSetupInlined<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>signature<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) =&gt; {</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">function </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>functionName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>signature<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) {</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">indent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>useWithBlock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">with (_ctx) {</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token function">indent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// function mode const declarations should be inside with block</span>
    <span class="token comment">// also they should be renamed to avoid collision with user properties</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>hasHelpers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">const { </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ast<span class="token punctuation">.</span>helpers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>aliasHelper<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;, &#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> } = _Vue</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token function">newline</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// generate asset resolution statements</span>
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
    <span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">let </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> ast<span class="token punctuation">.</span>temps<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">, </span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">_temp</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ast<span class="token punctuation">.</span>components<span class="token punctuation">.</span>length <span class="token operator">||</span> ast<span class="token punctuation">.</span>directives<span class="token punctuation">.</span>length <span class="token operator">||</span> ast<span class="token punctuation">.</span>temps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token function">newline</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// generate the VNode tree expression</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ssr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">return </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ast<span class="token punctuation">.</span>codegenNode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">genNode</span><span class="token punctuation">(</span>ast<span class="token punctuation">.</span>codegenNode<span class="token punctuation">,</span> context<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">null</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>useWithBlock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">deindent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">}</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">deindent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">}</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    ast<span class="token punctuation">,</span>
    <span class="token literal-property property">code</span><span class="token operator">:</span> context<span class="token punctuation">.</span>code<span class="token punctuation">,</span>
    <span class="token literal-property property">preamble</span><span class="token operator">:</span> isSetupInlined <span class="token operator">?</span> preambleContext<span class="token punctuation">.</span>code <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token comment">// SourceMapGenerator does have toJSON() method but it&#39;s not in the types</span>
    <span class="token literal-property property">map</span><span class="token operator">:</span> context<span class="token punctuation">.</span>map <span class="token operator">?</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>map <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">undefined</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","index.html.vue"]]);export{k as default};
