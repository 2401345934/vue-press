import{_ as n,z as s,A as a,a6 as t}from"./framework.fef63301.js";const p={},o=t(`<h1 id="生成渲染函数的名称和参数" tabindex="-1"><a class="header-anchor" href="#生成渲染函数的名称和参数" aria-hidden="true">#</a> 生成渲染函数的名称和参数</h1><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
  <span class="token keyword">const</span> functionName <span class="token operator">=</span> ssr <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ssrRender</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">render</span><span class="token template-punctuation string">\`</span></span>
  <span class="token keyword">const</span> args <span class="token operator">=</span> ssr <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token string">&#39;_ctx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_push&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_parent&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_attrs&#39;</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;_ctx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_cache&#39;</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>__BROWSER__ <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>bindingMetadata <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>options<span class="token punctuation">.</span>inline<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// binding optimization args</span>
    args<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;$props&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;$setup&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;$data&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;$options&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> signature <span class="token operator">=</span>
    <span class="token operator">!</span>__BROWSER__ <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>isTS
      <span class="token operator">?</span> args<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>arg <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>arg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: any</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
      <span class="token operator">:</span> args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;, &#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isSetupInlined<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>signature<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) =&gt; {</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">function </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>functionName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>signature<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) {</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">indent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>因为 ssr 是 false</li><li>所以函数名 functionName 是 render</li><li>最后执行了 ident函数 代码最后一行有两个空格缩进</li></ul>`,3),e=[o];function c(i,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","index.html.vue"]]);export{r as default};
