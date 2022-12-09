import{_ as n,z as s,A as a,a6 as e}from"./framework.fef63301.js";const t={},p=e(`<h1 id="创建解析上下文" tabindex="-1"><a class="header-anchor" href="#创建解析上下文" aria-hidden="true">#</a> 创建解析上下文</h1><h2 id="createparsercontext" tabindex="-1"><a class="header-anchor" href="#createparsercontext" aria-hidden="true">#</a> createParserContext</h2><ul><li>解析上下文实际就是一个 js 对象 维护着解析过程中的上下文</li><li>options 表示 解析相关配置 <ul><li>会根据传入的配置和默认的配置做一些合并</li><li>在后续解析的过程中 会始终维护和更新这个解析上下文</li><li>表示当前解析的状态</li></ul></li><li>创建完解析上下文之后 开始解析子节点</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">createParserContext</span><span class="token punctuation">(</span>
  content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  rawOptions<span class="token operator">:</span> ParserOptions
<span class="token punctuation">)</span><span class="token operator">:</span> ParserContext <span class="token punctuation">{</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> defaultParserOptions<span class="token punctuation">)</span>

  <span class="token keyword">let</span> key<span class="token operator">:</span> <span class="token keyword">keyof</span> ParserOptions
  <span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> rawOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// @ts-ignore</span>
    options<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span>
      rawOptions<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span>
        <span class="token operator">?</span> defaultParserOptions<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token operator">:</span> rawOptions<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    options<span class="token punctuation">,</span>
    column<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    line<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    offset<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    originalSource<span class="token operator">:</span> content<span class="token punctuation">,</span>
    source<span class="token operator">:</span> content<span class="token punctuation">,</span>
    inPre<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    inVPre<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    onWarn<span class="token operator">:</span> options<span class="token punctuation">.</span>onWarn
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function i(c,l){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","index.html.vue"]]);export{u as default};
